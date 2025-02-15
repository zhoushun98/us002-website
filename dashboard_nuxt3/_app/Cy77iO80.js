﻿import { cx as addDays, cw as addMonths, cy as constructFrom, U as URLService, a as axiosInstance, dG as parsePublicTrades, a9 as addStoreHooks, aa as defineStore, cH as useActiveMarketStore, bN as storeToRefs, d3 as useWebsocketStore, u as useToastStore, ab as useErrorTracking, r as ref, ac as shallowRef, bQ as watch, dH as differenceInSeconds, d5 as WSApi, bS as useTickersStore, ax as toDecimal, l as computed, aj as _, c7 as getPercentageChange, a0 as Decimal, bI as global, dI as Buffer, dJ as createHooks, df as reactive, dq as toValue, d as unref, n as nextTick, am as onMounted, ch as isRef$1, dK as provide, dL as readonly, cK as watchEffect, d7 as onBeforeUnmount, dM as inject, dN as getCurrentInstance, ao as axiosInstanceWithoutErrorHandling, K as buildUrl, P as PAGE_CONTEXT, dO as OrderbookApiConverter } from "./BEpVD-aq.js";
import { u as useVisibilityStore } from "./ljMJl-cz.js";
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}
function sub(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const withoutMonths = subMonths(date, months + years * 12, options);
  const withoutDays = subDays(withoutMonths, days + weeks * 7, options);
  const minutesToSub = minutes + hours * 60;
  const secondsToSub = seconds + minutesToSub * 60;
  const msToSub = secondsToSub * 1e3;
  return constructFrom(date, +withoutDays - msToSub);
}
const publicTradesApi = {
  /**
   * @param {string} market - btcusd-perp
   * @param {boolean} [useTradeviewAxios]
   * @returns {Promise<module:publicTrades.trade[]>}
   */
  list(market) {
    const url = URLService.buildUrl("publicTradesListResource", { market });
    return axiosInstance.get(url).then((r) => parsePublicTrades(r.data.data, market));
  }
};
const LIMITS_TRADES_MEMORY = 3e3;
const TRADES_CHECK_LIMIT = 100;
const storeName$2 = "tradesStore";
const useTradesStore = addStoreHooks(
  defineStore(storeName$2, () => {
    const activeMarketStore = useActiveMarketStore({ caller: storeName$2 });
    const { activeMarket } = storeToRefs(useActiveMarketStore({ caller: storeName$2 }));
    const { isHidden } = storeToRefs(useVisibilityStore({ caller: storeName$2 }));
    const websocketsStore = useWebsocketStore({ caller: storeName$2 });
    const { initialized: wsInitialized } = storeToRefs(useWebsocketStore({ caller: storeName$2 }));
    const toastStore = useToastStore({ caller: storeName$2 });
    const $errorTracking = useErrorTracking();
    let activeMarketTradesLastUpdate = null;
    let disconnectLiveTradesWsFn = () => {
    };
    let disconnectReconnectEventFn = () => {
    };
    const initialized = ref(false);
    const processingHiddenState = ref(false);
    const activeMarketTrades = shallowRef([]);
    const connectedLiveWsChannel = ref(null);
    const connectedReconnectWsChannel = ref(false);
    async function fetchActiveMarketTrades() {
      var _a25;
      const activeMarketKey = (_a25 = activeMarketStore.activeMarket) == null ? void 0 : _a25.key;
      if (!activeMarketKey) {
        return;
      }
      try {
        const trades = await publicTradesApi.list(activeMarketKey, true);
        if (activeMarketKey !== activeMarketStore.activeMarket.key) {
          return activeMarketTrades.value;
        } else {
          activeMarketTrades.value = trades;
          activeMarketTradesLastUpdate = /* @__PURE__ */ new Date();
        }
      } catch (e) {
        toastStore.showNetworkError();
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
      return activeMarketTrades.value;
    }
    function updateTrades(trade) {
      if (trade.market !== activeMarketStore.activeMarket.key) {
        return;
      }
      for (let i = 0; i < activeMarketTrades.value.length && i < TRADES_CHECK_LIMIT; i++) {
        if (activeMarketTrades.value[i].id === trade.id) {
          return;
        }
      }
      if (activeMarketTrades.value.length >= LIMITS_TRADES_MEMORY) {
        activeMarketTrades.value = activeMarketTrades.value.slice(0, LIMITS_TRADES_MEMORY * 0.75);
      }
      const _activeMarketTrades = [...activeMarketTrades.value];
      _activeMarketTrades.unshift(trade);
      activeMarketTrades.value = _activeMarketTrades;
      activeMarketTradesLastUpdate = /* @__PURE__ */ new Date();
    }
    async function connectWs() {
      if (!activeMarketStore.activeMarket) {
        return;
      }
      const liveTradesWsChannel = WSApi.getLiveTradesChannelName(activeMarketStore.activeMarket.key);
      if (liveTradesWsChannel !== connectedLiveWsChannel.value) {
        connectedLiveWsChannel.value = liveTradesWsChannel;
        const { disconnect } = await websocketsStore.subscribeToChannel({
          channel: liveTradesWsChannel,
          event: WSApi.TRADE_EVENT,
          onEvent: updateTrades
        });
        disconnectLiveTradesWsFn = disconnect;
      }
      if (!connectedReconnectWsChannel.value) {
        connectedReconnectWsChannel.value = true;
        const { disconnect: disconnectReconnectEvent } = await websocketsStore.subscribeToEvent({
          event: WSApi.WS_RECONNECTED,
          onEvent: fetchActiveMarketTrades
        });
        disconnectReconnectEventFn = disconnectReconnectEvent;
      }
    }
    async function _init() {
      if (activeMarketStore.initialized) {
        await fetchActiveMarketTrades();
        if (wsInitialized.value) {
          await connectWs();
        }
      }
      initialized.value = true;
      return () => {
        disconnectReconnectEventFn();
        disconnectLiveTradesWsFn();
      };
    }
    watch(wsInitialized, async (newValue, prevValue) => {
      if (newValue && !prevValue) {
        await connectWs();
      }
    });
    watch(
      activeMarket,
      async function(newValue, prevValue) {
        if ((newValue == null ? void 0 : newValue.key) === (prevValue == null ? void 0 : prevValue.key)) {
          return;
        }
        disconnectLiveTradesWsFn();
        activeMarketTrades.value = [];
        await fetchActiveMarketTrades();
        await connectWs();
      },
      {
        deep: true
      }
    );
    watch(isHidden, async (isHidden2) => {
      if (isHidden2) {
        return;
      }
      if (differenceInSeconds(/* @__PURE__ */ new Date(), activeMarketTradesLastUpdate) > 10) {
        processingHiddenState.value = true;
        await fetchActiveMarketTrades();
        processingHiddenState.value = false;
      }
    });
    return {
      activeMarketTrades,
      processingHiddenState,
      _init
    };
  })
);
const storeName$1 = "tradeviewTickersStore";
const useTradeviewTickersStore = addStoreHooks(
  defineStore("tradeviewTickersStore", () => {
    const tickersStore = useTickersStore({ caller: storeName$1 });
    const websocketStore = useWebsocketStore({ caller: storeName$1 });
    const activeMarketStore = useActiveMarketStore({ caller: storeName$1 });
    const { activeMarket } = storeToRefs(useActiveMarketStore({ caller: storeName$1 }));
    const tradesStore = useTradesStore({ caller: storeName$1 });
    let disconnectFundingRateWsChannelFn = () => {
    };
    const emptyTicker = {
      delta: toDecimal(0),
      high: toDecimal(0),
      last: toDecimal(0),
      last24: toDecimal(0),
      low: toDecimal(0),
      microtimestamp: 0,
      open: toDecimal(0),
      time: toDecimal(0),
      volume: toDecimal(0),
      markPrice: null,
      indexPrice: null,
      fundingRate: null
    };
    const fundingRate = ref(null);
    const tickers = computed(() => {
      var _a25;
      const tickers2 = _.cloneDeep(tickersStore.tickers);
      const activeMarketKey = (_a25 = activeMarketStore.activeMarket) == null ? void 0 : _a25.key;
      const activeMarketTrades = tradesStore.activeMarketTrades;
      if (fundingRate.value) {
        if (tickers2[fundingRate.value.market]) {
          tickers2[fundingRate.value.market].markPrice = fundingRate.value.markPrice;
          tickers2[fundingRate.value.market].indexPrice = fundingRate.value.indexPrice;
          tickers2[fundingRate.value.market].fundingRate = fundingRate.value.fundingRate;
        } else {
          tickers2[fundingRate.value.market] = {
            ...emptyTicker,
            markPrice: fundingRate.value.markPrice,
            indexPrice: fundingRate.value.indexPrice,
            fundingRate: fundingRate.value.fundingRate
          };
        }
      }
      if (activeMarketTrades.length < 1 || !tickers2[activeMarketKey]) {
        return Object.freeze(tickers2);
      }
      const activeMarketTicker2 = { ...tickers2[activeMarketKey] };
      if (activeMarketTrades[0].microtimestamp <= activeMarketTicker2.microtimestamp) {
        return Object.freeze(tickers2);
      }
      activeMarketTicker2.last = activeMarketTrades[0].price;
      activeMarketTicker2.last24 = activeMarketTicker2.open ? getPercentageChange({
        oldPrice: activeMarketTicker2.open,
        newPrice: activeMarketTicker2.last
      }) : new Decimal(0);
      activeMarketTicker2.delta = activeMarketTicker2.last.minus(activeMarketTicker2.open);
      for (const trade of activeMarketTrades) {
        if (trade.market !== activeMarketKey) {
          continue;
        }
        if (trade.microtimestamp <= activeMarketTicker2.microtimestamp) {
          break;
        }
        activeMarketTicker2.high = activeMarketTicker2.high.greaterThan(trade.price) ? activeMarketTicker2.high : trade.price;
        activeMarketTicker2.low = activeMarketTicker2.low.lessThan(trade.price) ? activeMarketTicker2.low : trade.price;
        activeMarketTicker2.volume = activeMarketTicker2.volume.plus(trade.amount);
      }
      activeMarketTicker2.microtimestamp = activeMarketTrades[0].microtimestamp;
      tickers2[activeMarketKey] = Object.freeze(activeMarketTicker2);
      return Object.freeze(tickers2);
    });
    const activeMarketTicker = computed(() => {
      if (activeMarketStore.activeMarket) {
        return getTicker(activeMarketStore.activeMarket.key);
      }
      return emptyTicker;
    });
    const activeMarketTickerLastValue = computed(() => {
      return activeMarketTicker.value.last;
    });
    function getTicker(marketKey) {
      return tickers.value[marketKey] || emptyTicker;
    }
    function getTickerLastValue(marketKey) {
      return getTicker(marketKey).last;
    }
    async function connectFundingRateWsChannel() {
      var _a25;
      const { disconnect } = await websocketStore.subscribeToChannel({
        channel: websocketStore.getFundingRateChannelName((_a25 = activeMarketStore.activeMarket) == null ? void 0 : _a25.key),
        event: WSApi.FUNDING_RATE_EVENT,
        onEvent: (data) => {
          if (!fundingRate.value || fundingRate.value && data.timestamp > fundingRate.value.timestamp) {
            fundingRate.value = data;
          }
        }
      });
      disconnectFundingRateWsChannelFn = disconnect;
    }
    function disconnectFundingRateWsChannel() {
      disconnectFundingRateWsChannelFn();
      disconnectFundingRateWsChannelFn = () => {
      };
    }
    watch(
      activeMarket,
      (newValue, prevValue) => {
        if ((newValue == null ? void 0 : newValue.key) === (prevValue == null ? void 0 : prevValue.key)) {
          return;
        }
        fundingRate.value = null;
        disconnectFundingRateWsChannel();
        if (!activeMarketStore.isSpot) {
          connectFundingRateWsChannel();
        }
      },
      {
        deep: true
      }
    );
    return {
      tickers,
      activeMarketTicker,
      activeMarketTickerLastValue,
      getTickerLastValue,
      getTicker,
      fetchTickers: tickersStore.fetchTickers
    };
  })
);
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __esm$1 = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames$1(fn)[0]])(fn = 0)), res;
};
var __commonJS$1 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$1(from))
      if (!__hasOwnProp$1.call(to, key) && key !== except)
        __defProp$1(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$1 = (mod, isNodeMode, target2) => (target2 = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp$1(target2, "default", { value: mod, enumerable: true }),
  mod
));
var init_esm_shims$1 = __esm$1({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.43.0_@types+node@22.9.0__@swc+core@1.5.29_jiti@2.0.0_po_lnt5yfvawfblpk67opvcdwbq7u/node_modules/tsup/assets/esm_shims.js"() {
  }
});
var require_rfdc = __commonJS$1({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(exports, module) {
    init_esm_shims$1();
    module.exports = rfdc2;
    function copyBuffer(cur) {
      if (cur instanceof Buffer) {
        return Buffer.from(cur);
      }
      return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
    }
    function rfdc2(opts) {
      opts = opts || {};
      if (opts.circles) return rfdcCircles(opts);
      const constructorHandlers = /* @__PURE__ */ new Map();
      constructorHandlers.set(Date, (o) => new Date(o));
      constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
      constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
      if (opts.constructorHandlers) {
        for (const handler2 of opts.constructorHandlers) {
          constructorHandlers.set(handler2[0], handler2[1]);
        }
      }
      let handler = null;
      return opts.proto ? cloneProto : clone;
      function cloneArray(a, fn) {
        const keys = Object.keys(a);
        const a2 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const cur = a[k];
          if (typeof cur !== "object" || cur === null) {
            a2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
          } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
          } else {
            a2[k] = fn(cur);
          }
        }
        return a2;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, clone);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, clone);
        }
        const o2 = {};
        for (const k in o) {
          if (Object.hasOwnProperty.call(o, k) === false) continue;
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, clone);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = clone(cur);
          }
        }
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, cloneProto);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, cloneProto);
        }
        const o2 = {};
        for (const k in o) {
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, cloneProto);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            o2[k] = cloneProto(cur);
          }
        }
        return o2;
      }
    }
    function rfdcCircles(opts) {
      const refs = [];
      const refsNew = [];
      const constructorHandlers = /* @__PURE__ */ new Map();
      constructorHandlers.set(Date, (o) => new Date(o));
      constructorHandlers.set(Map, (o, fn) => new Map(cloneArray(Array.from(o), fn)));
      constructorHandlers.set(Set, (o, fn) => new Set(cloneArray(Array.from(o), fn)));
      if (opts.constructorHandlers) {
        for (const handler2 of opts.constructorHandlers) {
          constructorHandlers.set(handler2[0], handler2[1]);
        }
      }
      let handler = null;
      return opts.proto ? cloneProto : clone;
      function cloneArray(a, fn) {
        const keys = Object.keys(a);
        const a2 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const cur = a[k];
          if (typeof cur !== "object" || cur === null) {
            a2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
          } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
          } else {
            const index = refs.indexOf(cur);
            if (index !== -1) {
              a2[k] = refsNew[index];
            } else {
              a2[k] = fn(cur);
            }
          }
        }
        return a2;
      }
      function clone(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, clone);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, clone);
        }
        const o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (const k in o) {
          if (Object.hasOwnProperty.call(o, k) === false) continue;
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, clone);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            const i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k] = refsNew[i];
            } else {
              o2[k] = clone(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
      function cloneProto(o) {
        if (typeof o !== "object" || o === null) return o;
        if (Array.isArray(o)) return cloneArray(o, cloneProto);
        if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
          return handler(o, cloneProto);
        }
        const o2 = {};
        refs.push(o);
        refsNew.push(o2);
        for (const k in o) {
          const cur = o[k];
          if (typeof cur !== "object" || cur === null) {
            o2[k] = cur;
          } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, cloneProto);
          } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
          } else {
            const i = refs.indexOf(cur);
            if (i !== -1) {
              o2[k] = refsNew[i];
            } else {
              o2[k] = cloneProto(cur);
            }
          }
        }
        refs.pop();
        refsNew.pop();
        return o2;
      }
    }
  }
});
init_esm_shims$1();
init_esm_shims$1();
init_esm_shims$1();
var isBrowser = typeof navigator !== "undefined";
var target = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : {};
typeof target.chrome !== "undefined" && !!target.chrome.devtools;
isBrowser && target.self !== target.top;
var _a$1;
typeof navigator !== "undefined" && ((_a$1 = navigator.userAgent) == null ? void 0 : _a$1.toLowerCase().includes("electron"));
init_esm_shims$1();
var import_rfdc = __toESM$1(require_rfdc());
var classifyRE = /(?:^|[-_/])(\w)/g;
function toUpper(_2, c) {
  return c ? c.toUpperCase() : "";
}
function classify(str) {
  return str && `${str}`.replace(classifyRE, toUpper);
}
function basename(filename, ext) {
  let normalizedFilename = filename.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  if (normalizedFilename.endsWith(`index${ext}`)) {
    normalizedFilename = normalizedFilename.replace(`/index${ext}`, ext);
  }
  const lastSlashIndex = normalizedFilename.lastIndexOf("/");
  const baseNameWithExt = normalizedFilename.substring(lastSlashIndex + 1);
  {
    const extIndex = baseNameWithExt.lastIndexOf(ext);
    return baseNameWithExt.substring(0, extIndex);
  }
}
var deepClone = (0, import_rfdc.default)({ circles: true });
const DEBOUNCE_DEFAULTS = {
  trailing: true
};
function debounce(fn, wait = 25, options = {}) {
  options = { ...DEBOUNCE_DEFAULTS, ...options };
  if (!Number.isFinite(wait)) {
    throw new TypeError("Expected `wait` to be a finite number");
  }
  let leadingValue;
  let timeout;
  let resolveList = [];
  let currentPromise;
  let trailingArgs;
  const applyFn = (_this, args) => {
    currentPromise = _applyPromised(fn, _this, args);
    currentPromise.finally(() => {
      currentPromise = null;
      if (options.trailing && trailingArgs && !timeout) {
        const promise = applyFn(_this, trailingArgs);
        trailingArgs = null;
        return promise;
      }
    });
    return currentPromise;
  };
  return function(...args) {
    if (currentPromise) {
      if (options.trailing) {
        trailingArgs = args;
      }
      return currentPromise;
    }
    return new Promise((resolve) => {
      const shouldCallNow = !timeout && options.leading;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        const promise = options.leading ? leadingValue : applyFn(this, args);
        for (const _resolve of resolveList) {
          _resolve(promise);
        }
        resolveList = [];
      }, wait);
      if (shouldCallNow) {
        leadingValue = applyFn(this, args);
        resolve(leadingValue);
      } else {
        resolveList.push(resolve);
      }
    });
  };
}
async function _applyPromised(fn, _this, args) {
  return await fn.apply(_this, args);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target22) => (target22 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target22, "default", { value: mod, enumerable: true }),
  mod
));
var init_esm_shims = __esm({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.43.0_@types+node@22.9.0__@swc+core@1.5.29_jiti@2.0.0_po_lnt5yfvawfblpk67opvcdwbq7u/node_modules/tsup/assets/esm_shims.js"() {
  }
});
var require_speakingurl = __commonJS({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(exports, module) {
    init_esm_shims();
    (function(root) {
      var charMap = {
        // latin
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "Ae",
        "Å": "A",
        "Æ": "AE",
        "Ç": "C",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "Ð": "D",
        "Ñ": "N",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "Oe",
        "Ő": "O",
        "Ø": "O",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "Ue",
        "Ű": "U",
        "Ý": "Y",
        "Þ": "TH",
        "ß": "ss",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "ae",
        "å": "a",
        "æ": "ae",
        "ç": "c",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "ð": "d",
        "ñ": "n",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "oe",
        "ő": "o",
        "ø": "o",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "ue",
        "ű": "u",
        "ý": "y",
        "þ": "th",
        "ÿ": "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        "ا": "a",
        "أ": "a",
        "إ": "i",
        "آ": "aa",
        "ؤ": "u",
        "ئ": "e",
        "ء": "a",
        "ب": "b",
        "ت": "t",
        "ث": "th",
        "ج": "j",
        "ح": "h",
        "خ": "kh",
        "د": "d",
        "ذ": "th",
        "ر": "r",
        "ز": "z",
        "س": "s",
        "ش": "sh",
        "ص": "s",
        "ض": "dh",
        "ط": "t",
        "ظ": "z",
        "ع": "a",
        "غ": "gh",
        "ف": "f",
        "ق": "q",
        "ك": "k",
        "ل": "l",
        "م": "m",
        "ن": "n",
        "ه": "h",
        "و": "w",
        "ي": "y",
        "ى": "a",
        "ة": "h",
        "ﻻ": "la",
        "ﻷ": "laa",
        "ﻹ": "lai",
        "ﻵ": "laa",
        // Persian additional characters than Arabic
        "گ": "g",
        "چ": "ch",
        "پ": "p",
        "ژ": "zh",
        "ک": "k",
        "ی": "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        "က": "k",
        "ခ": "kh",
        "ဂ": "g",
        "ဃ": "ga",
        "င": "ng",
        "စ": "s",
        "ဆ": "sa",
        "ဇ": "z",
        "စျ": "za",
        "ည": "ny",
        "ဋ": "t",
        "ဌ": "ta",
        "ဍ": "d",
        "ဎ": "da",
        "ဏ": "na",
        "တ": "t",
        "ထ": "ta",
        "ဒ": "d",
        "ဓ": "da",
        "န": "n",
        "ပ": "p",
        "ဖ": "pa",
        "ဗ": "b",
        "ဘ": "ba",
        "မ": "m",
        "ယ": "y",
        "ရ": "ya",
        "လ": "l",
        "ဝ": "w",
        "သ": "th",
        "ဟ": "h",
        "ဠ": "la",
        "အ": "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        "ဧ": "e",
        "၏": "-e",
        "ဣ": "i",
        "ဤ": "-i",
        "ဉ": "u",
        "ဦ": "-u",
        "ဩ": "aw",
        "သြော": "aw",
        "ဪ": "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        "č": "c",
        "ď": "d",
        "ě": "e",
        "ň": "n",
        "ř": "r",
        "š": "s",
        "ť": "t",
        "ů": "u",
        "ž": "z",
        "Č": "C",
        "Ď": "D",
        "Ě": "E",
        "Ň": "N",
        "Ř": "R",
        "Š": "S",
        "Ť": "T",
        "Ů": "U",
        "Ž": "Z",
        // Dhivehi
        "ހ": "h",
        "ށ": "sh",
        "ނ": "n",
        "ރ": "r",
        "ބ": "b",
        "ޅ": "lh",
        "ކ": "k",
        "އ": "a",
        "ވ": "v",
        "މ": "m",
        "ފ": "f",
        "ދ": "dh",
        "ތ": "th",
        "ލ": "l",
        "ގ": "g",
        "ޏ": "gn",
        "ސ": "s",
        "ޑ": "d",
        "ޒ": "z",
        "ޓ": "t",
        "ޔ": "y",
        "ޕ": "p",
        "ޖ": "j",
        "ޗ": "ch",
        "ޘ": "tt",
        "ޙ": "hh",
        "ޚ": "kh",
        "ޛ": "th",
        "ޜ": "z",
        "ޝ": "sh",
        "ޞ": "s",
        "ޟ": "d",
        "ޠ": "t",
        "ޡ": "z",
        "ޢ": "a",
        "ޣ": "gh",
        "ޤ": "q",
        "ޥ": "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        "ა": "a",
        "ბ": "b",
        "გ": "g",
        "დ": "d",
        "ე": "e",
        "ვ": "v",
        "ზ": "z",
        "თ": "t",
        "ი": "i",
        "კ": "k",
        "ლ": "l",
        "მ": "m",
        "ნ": "n",
        "ო": "o",
        "პ": "p",
        "ჟ": "zh",
        "რ": "r",
        "ს": "s",
        "ტ": "t",
        "უ": "u",
        "ფ": "p",
        "ქ": "k",
        "ღ": "gh",
        "ყ": "q",
        "შ": "sh",
        "ჩ": "ch",
        "ც": "ts",
        "ძ": "dz",
        "წ": "ts",
        "ჭ": "ch",
        "ხ": "kh",
        "ჯ": "j",
        "ჰ": "h",
        // Greek
        "α": "a",
        "β": "v",
        "γ": "g",
        "δ": "d",
        "ε": "e",
        "ζ": "z",
        "η": "i",
        "θ": "th",
        "ι": "i",
        "κ": "k",
        "λ": "l",
        "μ": "m",
        "ν": "n",
        "ξ": "ks",
        "ο": "o",
        "π": "p",
        "ρ": "r",
        "σ": "s",
        "τ": "t",
        "υ": "y",
        "φ": "f",
        "χ": "x",
        "ψ": "ps",
        "ω": "o",
        "ά": "a",
        "έ": "e",
        "ί": "i",
        "ό": "o",
        "ύ": "y",
        "ή": "i",
        "ώ": "o",
        "ς": "s",
        "ϊ": "i",
        "ΰ": "y",
        "ϋ": "y",
        "ΐ": "i",
        "Α": "A",
        "Β": "B",
        "Γ": "G",
        "Δ": "D",
        "Ε": "E",
        "Ζ": "Z",
        "Η": "I",
        "Θ": "TH",
        "Ι": "I",
        "Κ": "K",
        "Λ": "L",
        "Μ": "M",
        "Ν": "N",
        "Ξ": "KS",
        "Ο": "O",
        "Π": "P",
        "Ρ": "R",
        "Σ": "S",
        "Τ": "T",
        "Υ": "Y",
        "Φ": "F",
        "Χ": "X",
        "Ψ": "PS",
        "Ω": "O",
        "Ά": "A",
        "Έ": "E",
        "Ί": "I",
        "Ό": "O",
        "Ύ": "Y",
        "Ή": "I",
        "Ώ": "O",
        "Ϊ": "I",
        "Ϋ": "Y",
        // Latvian
        "ā": "a",
        // 'č': 'c', // duplicate
        "ē": "e",
        "ģ": "g",
        "ī": "i",
        "ķ": "k",
        "ļ": "l",
        "ņ": "n",
        // 'š': 's', // duplicate
        "ū": "u",
        // 'ž': 'z', // duplicate
        "Ā": "A",
        // 'Č': 'C', // duplicate
        "Ē": "E",
        "Ģ": "G",
        "Ī": "I",
        "Ķ": "k",
        "Ļ": "L",
        "Ņ": "N",
        // 'Š': 'S', // duplicate
        "Ū": "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        "Ќ": "Kj",
        "ќ": "kj",
        "Љ": "Lj",
        "љ": "lj",
        "Њ": "Nj",
        "њ": "nj",
        "Тс": "Ts",
        "тс": "ts",
        // Polish
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        // 'ó': 'o', // duplicate
        "ś": "s",
        "ź": "z",
        "ż": "z",
        "Ą": "A",
        "Ć": "C",
        "Ę": "E",
        "Ł": "L",
        "Ń": "N",
        "Ś": "S",
        "Ź": "Z",
        "Ż": "Z",
        // Ukranian
        "Є": "Ye",
        "І": "I",
        "Ї": "Yi",
        "Ґ": "G",
        "є": "ye",
        "і": "i",
        "ї": "yi",
        "ґ": "g",
        // Romanian
        "ă": "a",
        "Ă": "A",
        "ș": "s",
        "Ș": "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        "ț": "t",
        "Ț": "T",
        "ţ": "t",
        "Ţ": "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        "а": "a",
        "б": "b",
        "в": "v",
        "г": "g",
        "д": "d",
        "е": "e",
        "ё": "yo",
        "ж": "zh",
        "з": "z",
        "и": "i",
        "й": "i",
        "к": "k",
        "л": "l",
        "м": "m",
        "н": "n",
        "о": "o",
        "п": "p",
        "р": "r",
        "с": "s",
        "т": "t",
        "у": "u",
        "ф": "f",
        "х": "kh",
        "ц": "c",
        "ч": "ch",
        "ш": "sh",
        "щ": "sh",
        "ъ": "",
        "ы": "y",
        "ь": "",
        "э": "e",
        "ю": "yu",
        "я": "ya",
        "А": "A",
        "Б": "B",
        "В": "V",
        "Г": "G",
        "Д": "D",
        "Е": "E",
        "Ё": "Yo",
        "Ж": "Zh",
        "З": "Z",
        "И": "I",
        "Й": "I",
        "К": "K",
        "Л": "L",
        "М": "M",
        "Н": "N",
        "О": "O",
        "П": "P",
        "Р": "R",
        "С": "S",
        "Т": "T",
        "У": "U",
        "Ф": "F",
        "Х": "Kh",
        "Ц": "C",
        "Ч": "Ch",
        "Ш": "Sh",
        "Щ": "Sh",
        "Ъ": "",
        "Ы": "Y",
        "Ь": "",
        "Э": "E",
        "Ю": "Yu",
        "Я": "Ya",
        // Serbian
        "ђ": "dj",
        "ј": "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        "ћ": "c",
        "џ": "dz",
        "Ђ": "Dj",
        "Ј": "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        "Ћ": "C",
        "Џ": "Dz",
        // Slovak
        "ľ": "l",
        "ĺ": "l",
        "ŕ": "r",
        "Ľ": "L",
        "Ĺ": "L",
        "Ŕ": "R",
        // Turkish
        "ş": "s",
        "Ş": "S",
        "ı": "i",
        "İ": "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        "ğ": "g",
        "Ğ": "G",
        // Vietnamese
        "ả": "a",
        "Ả": "A",
        "ẳ": "a",
        "Ẳ": "A",
        "ẩ": "a",
        "Ẩ": "A",
        "đ": "d",
        "Đ": "D",
        "ẹ": "e",
        "Ẹ": "E",
        "ẽ": "e",
        "Ẽ": "E",
        "ẻ": "e",
        "Ẻ": "E",
        "ế": "e",
        "Ế": "E",
        "ề": "e",
        "Ề": "E",
        "ệ": "e",
        "Ệ": "E",
        "ễ": "e",
        "Ễ": "E",
        "ể": "e",
        "Ể": "E",
        "ỏ": "o",
        "ọ": "o",
        "Ọ": "o",
        "ố": "o",
        "Ố": "O",
        "ồ": "o",
        "Ồ": "O",
        "ổ": "o",
        "Ổ": "O",
        "ộ": "o",
        "Ộ": "O",
        "ỗ": "o",
        "Ỗ": "O",
        "ơ": "o",
        "Ơ": "O",
        "ớ": "o",
        "Ớ": "O",
        "ờ": "o",
        "Ờ": "O",
        "ợ": "o",
        "Ợ": "O",
        "ỡ": "o",
        "Ỡ": "O",
        "Ở": "o",
        "ở": "o",
        "ị": "i",
        "Ị": "I",
        "ĩ": "i",
        "Ĩ": "I",
        "ỉ": "i",
        "Ỉ": "i",
        "ủ": "u",
        "Ủ": "U",
        "ụ": "u",
        "Ụ": "U",
        "ũ": "u",
        "Ũ": "U",
        "ư": "u",
        "Ư": "U",
        "ứ": "u",
        "Ứ": "U",
        "ừ": "u",
        "Ừ": "U",
        "ự": "u",
        "Ự": "U",
        "ữ": "u",
        "Ữ": "U",
        "ử": "u",
        "Ử": "ư",
        "ỷ": "y",
        "Ỷ": "y",
        "ỳ": "y",
        "Ỳ": "Y",
        "ỵ": "y",
        "Ỵ": "Y",
        "ỹ": "y",
        "Ỹ": "Y",
        "ạ": "a",
        "Ạ": "A",
        "ấ": "a",
        "Ấ": "A",
        "ầ": "a",
        "Ầ": "A",
        "ậ": "a",
        "Ậ": "A",
        "ẫ": "a",
        "Ẫ": "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        "ắ": "a",
        "Ắ": "A",
        "ằ": "a",
        "Ằ": "A",
        "ặ": "a",
        "Ặ": "A",
        "ẵ": "a",
        "Ẵ": "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        "ƒ": "f",
        "™": "(TM)",
        "©": "(C)",
        "œ": "oe",
        "Œ": "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        "º": "o",
        "ª": "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        "$": "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        "元": "CNY",
        "円": "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        "лв": "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        "ден": "MKD",
        "zł": "PLN",
        "₽": "RUB",
        "₾": "GEL"
      };
      var lookAheadCharArray = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ];
      var diatricMap = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      };
      var langCharMap = {
        "en": {},
        // default language
        "az": {
          // Azerbaijani
          "ç": "c",
          "ə": "e",
          "ğ": "g",
          "ı": "i",
          "ö": "o",
          "ş": "s",
          "ü": "u",
          "Ç": "C",
          "Ə": "E",
          "Ğ": "G",
          "İ": "I",
          "Ö": "O",
          "Ş": "S",
          "Ü": "U"
        },
        "cs": {
          // Czech
          "č": "c",
          "ď": "d",
          "ě": "e",
          "ň": "n",
          "ř": "r",
          "š": "s",
          "ť": "t",
          "ů": "u",
          "ž": "z",
          "Č": "C",
          "Ď": "D",
          "Ě": "E",
          "Ň": "N",
          "Ř": "R",
          "Š": "S",
          "Ť": "T",
          "Ů": "U",
          "Ž": "Z"
        },
        "fi": {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          "ä": "a",
          // ok
          "Ä": "A",
          // ok
          "ö": "o",
          // ok
          "Ö": "O"
          // ok
        },
        "hu": {
          // Hungarian
          "ä": "a",
          // ok
          "Ä": "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          "ö": "o",
          // ok
          "Ö": "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          "ü": "u",
          "Ü": "U",
          "ű": "u",
          "Ű": "U"
        },
        "lt": {
          // Lithuanian
          "ą": "a",
          "č": "c",
          "ę": "e",
          "ė": "e",
          "į": "i",
          "š": "s",
          "ų": "u",
          "ū": "u",
          "ž": "z",
          "Ą": "A",
          "Č": "C",
          "Ę": "E",
          "Ė": "E",
          "Į": "I",
          "Š": "S",
          "Ų": "U",
          "Ū": "U"
        },
        "lv": {
          // Latvian
          "ā": "a",
          "č": "c",
          "ē": "e",
          "ģ": "g",
          "ī": "i",
          "ķ": "k",
          "ļ": "l",
          "ņ": "n",
          "š": "s",
          "ū": "u",
          "ž": "z",
          "Ā": "A",
          "Č": "C",
          "Ē": "E",
          "Ģ": "G",
          "Ī": "i",
          "Ķ": "k",
          "Ļ": "L",
          "Ņ": "N",
          "Š": "S",
          "Ū": "u",
          "Ž": "Z"
        },
        "pl": {
          // Polish
          "ą": "a",
          "ć": "c",
          "ę": "e",
          "ł": "l",
          "ń": "n",
          "ó": "o",
          "ś": "s",
          "ź": "z",
          "ż": "z",
          "Ą": "A",
          "Ć": "C",
          "Ę": "e",
          "Ł": "L",
          "Ń": "N",
          "Ó": "O",
          "Ś": "S",
          "Ź": "Z",
          "Ż": "Z"
        },
        "sv": {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          "ä": "a",
          // ok
          "Ä": "A",
          // ok
          "ö": "o",
          // ok
          "Ö": "O"
          // ok
        },
        "sk": {
          // Slovak
          "ä": "a",
          "Ä": "A"
        },
        "sr": {
          // Serbian
          "љ": "lj",
          "њ": "nj",
          "Љ": "Lj",
          "Њ": "Nj",
          "đ": "dj",
          "Đ": "Dj"
        },
        "tr": {
          // Turkish
          "Ü": "U",
          "Ö": "O",
          "ü": "u",
          "ö": "o"
        }
      };
      var symbolMap = {
        "ar": {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        "az": {},
        "ca": {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        "cs": {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        "de": {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        "dv": {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        "en": {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        "es": {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        "fa": {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        "fi": {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        "fr": {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        "ge": {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        "gr": {},
        "hu": {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        "it": {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        "lt": {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        "lv": {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        "my": {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        "mk": {},
        "nl": {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        "pl": {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        "pt": {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        "ro": {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        "ru": {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        "sk": {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        "sr": {},
        "tr": {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        "uk": {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        "vn": {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      };
      var uricChars = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join("");
      var uricNoSlashChars = [";", "?", ":", "@", "&", "=", "+", "$", ","].join("");
      var markChars = [".", "!", "~", "*", "'", "(", ")"].join("");
      var getSlug = function getSlug2(input, opts) {
        var separator = "-";
        var result = "";
        var diatricString = "";
        var convertSymbols = true;
        var customReplacements = {};
        var maintainCase;
        var titleCase;
        var truncate;
        var uricFlag;
        var uricNoSlashFlag;
        var markFlag;
        var symbol;
        var langChar;
        var lucky;
        var i;
        var ch;
        var l;
        var lastCharWasSymbol;
        var lastCharWasDiatric;
        var allowedChars = "";
        if (typeof input !== "string") {
          return "";
        }
        if (typeof opts === "string") {
          separator = opts;
        }
        symbol = symbolMap.en;
        langChar = langCharMap.en;
        if (typeof opts === "object") {
          maintainCase = opts.maintainCase || false;
          customReplacements = opts.custom && typeof opts.custom === "object" ? opts.custom : customReplacements;
          truncate = +opts.truncate > 1 && opts.truncate || false;
          uricFlag = opts.uric || false;
          uricNoSlashFlag = opts.uricNoSlash || false;
          markFlag = opts.mark || false;
          convertSymbols = opts.symbols === false || opts.lang === false ? false : true;
          separator = opts.separator || separator;
          if (uricFlag) {
            allowedChars += uricChars;
          }
          if (uricNoSlashFlag) {
            allowedChars += uricNoSlashChars;
          }
          if (markFlag) {
            allowedChars += markChars;
          }
          symbol = opts.lang && symbolMap[opts.lang] && convertSymbols ? symbolMap[opts.lang] : convertSymbols ? symbolMap.en : {};
          langChar = opts.lang && langCharMap[opts.lang] ? langCharMap[opts.lang] : opts.lang === false || opts.lang === true ? {} : langCharMap.en;
          if (opts.titleCase && typeof opts.titleCase.length === "number" && Array.prototype.toString.call(opts.titleCase)) {
            opts.titleCase.forEach(function(v) {
              customReplacements[v + ""] = v + "";
            });
            titleCase = true;
          } else {
            titleCase = !!opts.titleCase;
          }
          if (opts.custom && typeof opts.custom.length === "number" && Array.prototype.toString.call(opts.custom)) {
            opts.custom.forEach(function(v) {
              customReplacements[v + ""] = v + "";
            });
          }
          Object.keys(customReplacements).forEach(function(v) {
            var r;
            if (v.length > 1) {
              r = new RegExp("\\b" + escapeChars(v) + "\\b", "gi");
            } else {
              r = new RegExp(escapeChars(v), "gi");
            }
            input = input.replace(r, customReplacements[v]);
          });
          for (ch in customReplacements) {
            allowedChars += ch;
          }
        }
        allowedChars += separator;
        allowedChars = escapeChars(allowedChars);
        input = input.replace(/(^\s+|\s+$)/g, "");
        lastCharWasSymbol = false;
        lastCharWasDiatric = false;
        for (i = 0, l = input.length; i < l; i++) {
          ch = input[i];
          if (isReplacedCustomChar(ch, customReplacements)) {
            lastCharWasSymbol = false;
          } else if (langChar[ch]) {
            ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? " " + langChar[ch] : langChar[ch];
            lastCharWasSymbol = false;
          } else if (ch in charMap) {
            if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
              diatricString += ch;
              ch = "";
            } else if (lastCharWasDiatric === true) {
              ch = diatricMap[diatricString] + charMap[ch];
              diatricString = "";
            } else {
              ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? " " + charMap[ch] : charMap[ch];
            }
            lastCharWasSymbol = false;
            lastCharWasDiatric = false;
          } else if (ch in diatricMap) {
            diatricString += ch;
            ch = "";
            if (i === l - 1) {
              ch = diatricMap[diatricString];
            }
            lastCharWasDiatric = true;
          } else if (
            // process symbol chars
            symbol[ch] && !(uricFlag && uricChars.indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars.indexOf(ch) !== -1)
          ) {
            ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
            ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : "";
            lastCharWasSymbol = true;
          } else {
            if (lastCharWasDiatric === true) {
              ch = diatricMap[diatricString] + ch;
              diatricString = "";
              lastCharWasDiatric = false;
            } else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) {
              ch = " " + ch;
            }
            lastCharWasSymbol = false;
          }
          result += ch.replace(new RegExp("[^\\w\\s" + allowedChars + "_-]", "g"), separator);
        }
        if (titleCase) {
          result = result.replace(/(\w)(\S*)/g, function(_2, i2, r) {
            var j = i2.toUpperCase() + (r !== null ? r : "");
            return Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0 ? j : j.toLowerCase();
          });
        }
        result = result.replace(/\s+/g, separator).replace(new RegExp("\\" + separator + "+", "g"), separator).replace(new RegExp("(^\\" + separator + "+|\\" + separator + "+$)", "g"), "");
        if (truncate && result.length > truncate) {
          lucky = result.charAt(truncate) === separator;
          result = result.slice(0, truncate);
          if (!lucky) {
            result = result.slice(0, result.lastIndexOf(separator));
          }
        }
        if (!maintainCase && !titleCase) {
          result = result.toLowerCase();
        }
        return result;
      };
      var createSlug = function createSlug2(opts) {
        return function getSlugWithConfig(input) {
          return getSlug(input, opts);
        };
      };
      var escapeChars = function escapeChars2(input) {
        return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      };
      var isReplacedCustomChar = function(ch, customReplacements) {
        for (var c in customReplacements) {
          if (customReplacements[c] === ch) {
            return true;
          }
        }
      };
      if (typeof module !== "undefined" && module.exports) {
        module.exports = getSlug;
        module.exports.createSlug = createSlug;
      } else if (typeof define !== "undefined" && define.amd) {
        define([], function() {
          return getSlug;
        });
      } else {
        try {
          if (root.getSlug || root.createSlug) {
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          } else {
            root.getSlug = getSlug;
            root.createSlug = createSlug;
          }
        } catch (e) {
        }
      }
    })(exports);
  }
});
var require_speakingurl2 = __commonJS({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(exports, module) {
    init_esm_shims();
    module.exports = require_speakingurl();
  }
});
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
function isReadonly(value) {
  return !!(value && value[
    "__v_isReadonly"
    /* IS_READONLY */
  ]);
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value[
      "__v_raw"
      /* RAW */
    ]);
  }
  return !!(value && value[
    "__v_isReactive"
    /* IS_REACTIVE */
  ]);
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function toRaw(observed) {
  const raw = observed && observed[
    "__v_raw"
    /* RAW */
  ];
  return raw ? toRaw(raw) : observed;
}
init_esm_shims();
function getComponentTypeName(options) {
  var _a25;
  const name = options.name || options._componentTag || options.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || options.__name;
  if (name === "index" && ((_a25 = options.__file) == null ? void 0 : _a25.endsWith("index.vue"))) {
    return "";
  }
  return name;
}
function getComponentFileName(options) {
  const file = options.__file;
  if (file)
    return classify(basename(file, ".vue"));
}
function saveComponentGussedName(instance, name) {
  instance.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = name;
  return name;
}
function getAppRecord(instance) {
  if (instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return instance.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  else if (instance.root)
    return instance.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
async function getComponentId(options) {
  const { app, uid, instance } = options;
  try {
    if (instance.__VUE_DEVTOOLS_NEXT_UID__)
      return instance.__VUE_DEVTOOLS_NEXT_UID__;
    const appRecord = await getAppRecord(app);
    if (!appRecord)
      return null;
    const isRoot = appRecord.rootInstance === instance;
    return `${appRecord.id}:${isRoot ? "root" : uid}`;
  } catch (e) {
  }
}
function isFragment(instance) {
  var _a25, _b25;
  const subTreeType = (_a25 = instance.subTree) == null ? void 0 : _a25.type;
  const appRecord = getAppRecord(instance);
  if (appRecord) {
    return ((_b25 = appRecord == null ? void 0 : appRecord.types) == null ? void 0 : _b25.Fragment) === subTreeType;
  }
  return false;
}
function getInstanceName(instance) {
  var _a25, _b25, _c;
  const name = getComponentTypeName((instance == null ? void 0 : instance.type) || {});
  if (name)
    return name;
  if ((instance == null ? void 0 : instance.root) === instance)
    return "Root";
  for (const key in (_b25 = (_a25 = instance.parent) == null ? void 0 : _a25.type) == null ? void 0 : _b25.components) {
    if (instance.parent.type.components[key] === (instance == null ? void 0 : instance.type))
      return saveComponentGussedName(instance, key);
  }
  for (const key in (_c = instance.appContext) == null ? void 0 : _c.components) {
    if (instance.appContext.components[key] === (instance == null ? void 0 : instance.type))
      return saveComponentGussedName(instance, key);
  }
  const fileName = getComponentFileName((instance == null ? void 0 : instance.type) || {});
  if (fileName)
    return fileName;
  return "Anonymous Component";
}
function getComponentInstance(appRecord, instanceId) {
  instanceId = instanceId || `${appRecord.id}:root`;
  const instance = appRecord.instanceMap.get(instanceId);
  return instance || appRecord.instanceMap.get(":root");
}
var StateEditor = class {
  constructor() {
    this.refEditor = new RefStateEditor();
  }
  set(object, path, value, cb) {
    const sections = Array.isArray(path) ? path : path.split(".");
    while (sections.length > 1) {
      const section = sections.shift();
      if (object instanceof Map)
        object = object.get(section);
      if (object instanceof Set)
        object = Array.from(object.values())[section];
      else object = object[section];
      if (this.refEditor.isRef(object))
        object = this.refEditor.get(object);
    }
    const field = sections[0];
    const item = this.refEditor.get(object)[field];
    if (cb) {
      cb(object, field, value);
    } else {
      if (this.refEditor.isRef(item))
        this.refEditor.set(item, value);
      else object[field] = value;
    }
  }
  get(object, path) {
    const sections = Array.isArray(path) ? path : path.split(".");
    for (let i = 0; i < sections.length; i++) {
      if (object instanceof Map)
        object = object.get(sections[i]);
      else
        object = object[sections[i]];
      if (this.refEditor.isRef(object))
        object = this.refEditor.get(object);
      if (!object)
        return void 0;
    }
    return object;
  }
  has(object, path, parent = false) {
    if (typeof object === "undefined")
      return false;
    const sections = Array.isArray(path) ? path.slice() : path.split(".");
    const size = !parent ? 1 : 2;
    while (object && sections.length > size) {
      const section = sections.shift();
      object = object[section];
      if (this.refEditor.isRef(object))
        object = this.refEditor.get(object);
    }
    return object != null && Object.prototype.hasOwnProperty.call(object, sections[0]);
  }
  createDefaultSetCallback(state) {
    return (object, field, value) => {
      if (state.remove || state.newKey) {
        if (Array.isArray(object))
          object.splice(field, 1);
        else if (toRaw(object) instanceof Map)
          object.delete(field);
        else if (toRaw(object) instanceof Set)
          object.delete(Array.from(object.values())[field]);
        else Reflect.deleteProperty(object, field);
      }
      if (!state.remove) {
        const target22 = object[state.newKey || field];
        if (this.refEditor.isRef(target22))
          this.refEditor.set(target22, value);
        else if (toRaw(object) instanceof Map)
          object.set(state.newKey || field, value);
        else if (toRaw(object) instanceof Set)
          object.add(value);
        else
          object[state.newKey || field] = value;
      }
    };
  }
};
var RefStateEditor = class {
  set(ref2, value) {
    if (isRef(ref2)) {
      ref2.value = value;
    } else {
      if (ref2 instanceof Set && Array.isArray(value)) {
        ref2.clear();
        value.forEach((v) => ref2.add(v));
        return;
      }
      const currentKeys = Object.keys(value);
      if (ref2 instanceof Map) {
        const previousKeysSet2 = new Set(ref2.keys());
        currentKeys.forEach((key) => {
          ref2.set(key, Reflect.get(value, key));
          previousKeysSet2.delete(key);
        });
        previousKeysSet2.forEach((key) => ref2.delete(key));
        return;
      }
      const previousKeysSet = new Set(Object.keys(ref2));
      currentKeys.forEach((key) => {
        Reflect.set(ref2, key, Reflect.get(value, key));
        previousKeysSet.delete(key);
      });
      previousKeysSet.forEach((key) => Reflect.deleteProperty(ref2, key));
    }
  }
  get(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  isRef(ref2) {
    return isRef(ref2) || isReactive(ref2);
  }
};
init_esm_shims();
function getRootElementsFromComponentInstance(instance) {
  if (isFragment(instance))
    return getFragmentRootElements(instance.subTree);
  if (!instance.subTree)
    return [];
  return [instance.subTree.el];
}
function getFragmentRootElements(vnode) {
  if (!vnode.children)
    return [];
  const list = [];
  vnode.children.forEach((childVnode) => {
    if (childVnode.component)
      list.push(...getRootElementsFromComponentInstance(childVnode.component));
    else if (childVnode == null ? void 0 : childVnode.el)
      list.push(childVnode.el);
  });
  return list;
}
init_esm_shims();
init_esm_shims();
function createRect() {
  const rect = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return rect.right - rect.left;
    },
    get height() {
      return rect.bottom - rect.top;
    }
  };
  return rect;
}
var range;
function getTextRect(node) {
  if (!range)
    range = document.createRange();
  range.selectNode(node);
  return range.getBoundingClientRect();
}
function getFragmentRect(vnode) {
  const rect = createRect();
  if (!vnode.children)
    return rect;
  for (let i = 0, l = vnode.children.length; i < l; i++) {
    const childVnode = vnode.children[i];
    let childRect;
    if (childVnode.component) {
      childRect = getComponentBoundingRect(childVnode.component);
    } else if (childVnode.el) {
      const el = childVnode.el;
      if (el.nodeType === 1 || el.getBoundingClientRect)
        childRect = el.getBoundingClientRect();
      else if (el.nodeType === 3 && el.data.trim())
        childRect = getTextRect(el);
    }
    if (childRect)
      mergeRects(rect, childRect);
  }
  return rect;
}
function mergeRects(a, b) {
  if (!a.top || b.top < a.top)
    a.top = b.top;
  if (!a.bottom || b.bottom > a.bottom)
    a.bottom = b.bottom;
  if (!a.left || b.left < a.left)
    a.left = b.left;
  if (!a.right || b.right > a.right)
    a.right = b.right;
  return a;
}
var DEFAULT_RECT = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function getComponentBoundingRect(instance) {
  const el = instance.subTree.el;
  if (typeof window === "undefined") {
    return DEFAULT_RECT;
  }
  if (isFragment(instance))
    return getFragmentRect(instance.subTree);
  else if ((el == null ? void 0 : el.nodeType) === 1)
    return el == null ? void 0 : el.getBoundingClientRect();
  else if (instance.subTree.component)
    return getComponentBoundingRect(instance.subTree.component);
  else
    return DEFAULT_RECT;
}
var CONTAINER_ELEMENT_ID = "__vue-devtools-component-inspector__";
var CARD_ELEMENT_ID = "__vue-devtools-component-inspector__card__";
var COMPONENT_NAME_ELEMENT_ID = "__vue-devtools-component-inspector__name__";
var INDICATOR_ELEMENT_ID = "__vue-devtools-component-inspector__indicator__";
var containerStyles = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
};
var cardStyles = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
};
var indicatorStyles = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function getContainerElement() {
  return document.getElementById(CONTAINER_ELEMENT_ID);
}
function getCardElement() {
  return document.getElementById(CARD_ELEMENT_ID);
}
function getIndicatorElement() {
  return document.getElementById(INDICATOR_ELEMENT_ID);
}
function getNameElement() {
  return document.getElementById(COMPONENT_NAME_ELEMENT_ID);
}
function getStyles(bounds) {
  return {
    left: `${Math.round(bounds.left * 100) / 100}px`,
    top: `${Math.round(bounds.top * 100) / 100}px`,
    width: `${Math.round(bounds.width * 100) / 100}px`,
    height: `${Math.round(bounds.height * 100) / 100}px`
  };
}
function create(options) {
  var _a25;
  const containerEl = document.createElement("div");
  containerEl.id = (_a25 = options.elementId) != null ? _a25 : CONTAINER_ELEMENT_ID;
  Object.assign(containerEl.style, {
    ...containerStyles,
    ...getStyles(options.bounds),
    ...options.style
  });
  const cardEl = document.createElement("span");
  cardEl.id = CARD_ELEMENT_ID;
  Object.assign(cardEl.style, {
    ...cardStyles,
    top: options.bounds.top < 35 ? 0 : "-35px"
  });
  const nameEl = document.createElement("span");
  nameEl.id = COMPONENT_NAME_ELEMENT_ID;
  nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
  const indicatorEl = document.createElement("i");
  indicatorEl.id = INDICATOR_ELEMENT_ID;
  indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
  Object.assign(indicatorEl.style, indicatorStyles);
  cardEl.appendChild(nameEl);
  cardEl.appendChild(indicatorEl);
  containerEl.appendChild(cardEl);
  document.body.appendChild(containerEl);
  return containerEl;
}
function update(options) {
  const containerEl = getContainerElement();
  const cardEl = getCardElement();
  const nameEl = getNameElement();
  const indicatorEl = getIndicatorElement();
  if (containerEl) {
    Object.assign(containerEl.style, {
      ...containerStyles,
      ...getStyles(options.bounds)
    });
    Object.assign(cardEl.style, {
      top: options.bounds.top < 35 ? 0 : "-35px"
    });
    nameEl.innerHTML = `&lt;${options.name}&gt;&nbsp;&nbsp;`;
    indicatorEl.innerHTML = `${Math.round(options.bounds.width * 100) / 100} x ${Math.round(options.bounds.height * 100) / 100}`;
  }
}
function highlight(instance) {
  const bounds = getComponentBoundingRect(instance);
  if (!bounds.width && !bounds.height)
    return;
  const name = getInstanceName(instance);
  const container = getContainerElement();
  container ? update({ bounds, name }) : create({ bounds, name });
}
function unhighlight() {
  const el = getContainerElement();
  if (el)
    el.style.display = "none";
}
var inspectInstance = null;
function inspectFn(e) {
  const target22 = e.target;
  if (target22) {
    const instance = target22.__vueParentComponent;
    if (instance) {
      inspectInstance = instance;
      const el = instance.vnode.el;
      if (el) {
        const bounds = getComponentBoundingRect(instance);
        const name = getInstanceName(instance);
        const container = getContainerElement();
        container ? update({ bounds, name }) : create({ bounds, name });
      }
    }
  }
}
function selectComponentFn(e, cb) {
  var _a25;
  e.preventDefault();
  e.stopPropagation();
  if (inspectInstance) {
    const app = (_a25 = activeAppRecord.value) == null ? void 0 : _a25.app;
    getComponentId({
      app,
      uid: app.uid,
      instance: inspectInstance
    }).then((id) => {
      cb(id);
    });
  }
}
var inspectComponentHighLighterSelectFn = null;
function cancelInspectComponentHighLighter() {
  unhighlight();
  window.removeEventListener("mouseover", inspectFn);
  window.removeEventListener("click", inspectComponentHighLighterSelectFn, true);
  inspectComponentHighLighterSelectFn = null;
}
function inspectComponentHighLighter() {
  window.addEventListener("mouseover", inspectFn);
  return new Promise((resolve) => {
    function onSelect(e) {
      e.preventDefault();
      e.stopPropagation();
      selectComponentFn(e, (id) => {
        window.removeEventListener("click", onSelect, true);
        inspectComponentHighLighterSelectFn = null;
        window.removeEventListener("mouseover", inspectFn);
        const el = getContainerElement();
        if (el)
          el.style.display = "none";
        resolve(JSON.stringify({ id }));
      });
    }
    inspectComponentHighLighterSelectFn = onSelect;
    window.addEventListener("click", onSelect, true);
  });
}
function scrollToComponent(options) {
  const instance = getComponentInstance(activeAppRecord.value, options.id);
  if (instance) {
    const [el] = getRootElementsFromComponentInstance(instance);
    if (typeof el.scrollIntoView === "function") {
      el.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      const bounds = getComponentBoundingRect(instance);
      const scrollTarget = document.createElement("div");
      const styles = {
        ...getStyles(bounds),
        position: "absolute"
      };
      Object.assign(scrollTarget.style, styles);
      document.body.appendChild(scrollTarget);
      scrollTarget.scrollIntoView({
        behavior: "smooth"
      });
      setTimeout(() => {
        document.body.removeChild(scrollTarget);
      }, 2e3);
    }
    setTimeout(() => {
      const bounds = getComponentBoundingRect(instance);
      if (bounds.width || bounds.height) {
        const name = getInstanceName(instance);
        const el2 = getContainerElement();
        el2 ? update({ ...options, name, bounds }) : create({ ...options, name, bounds });
        setTimeout(() => {
          if (el2)
            el2.style.display = "none";
        }, 1500);
      }
    }, 1200);
  }
}
init_esm_shims();
var _a, _b;
(_b = (_a = target).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null ? _b : _a.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = true;
function waitForInspectorInit(cb) {
  let total = 0;
  const timer = setInterval(() => {
    if (target.__VUE_INSPECTOR__) {
      clearInterval(timer);
      total += 30;
      cb();
    }
    if (total >= /* 5s */
    5e3)
      clearInterval(timer);
  }, 30);
}
function setupInspector() {
  const inspector = target.__VUE_INSPECTOR__;
  const _openInEditor = inspector.openInEditor;
  inspector.openInEditor = async (...params) => {
    inspector.disable();
    _openInEditor(...params);
  };
}
function getComponentInspector() {
  return new Promise((resolve) => {
    function setup() {
      setupInspector();
      resolve(target.__VUE_INSPECTOR__);
    }
    if (!target.__VUE_INSPECTOR__) {
      waitForInspectorInit(() => {
        setup();
      });
    } else {
      setup();
    }
  });
}
init_esm_shims();
init_esm_shims();
init_esm_shims();
var TIMELINE_LAYERS_STATE_STORAGE_ID = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function getTimelineLayersStateFromStorage() {
  if (!isBrowser || typeof localStorage === "undefined" || localStorage === null) {
    return {
      recordingState: false,
      mouseEventEnabled: false,
      keyboardEventEnabled: false,
      componentEventEnabled: false,
      performanceEventEnabled: false,
      selected: ""
    };
  }
  const state = localStorage.getItem(TIMELINE_LAYERS_STATE_STORAGE_ID);
  return state ? JSON.parse(state) : {
    recordingState: false,
    mouseEventEnabled: false,
    keyboardEventEnabled: false,
    componentEventEnabled: false,
    performanceEventEnabled: false,
    selected: ""
  };
}
init_esm_shims();
init_esm_shims();
init_esm_shims();
var _a2, _b2;
(_b2 = (_a2 = target).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null ? _b2 : _a2.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = [];
var devtoolsTimelineLayers = new Proxy(target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(target22, prop, receiver) {
    return Reflect.get(target22, prop, receiver);
  }
});
function addTimelineLayer(options, descriptor) {
  devtoolsState.timelineLayersState[descriptor.id] = false;
  devtoolsTimelineLayers.push({
    ...options,
    descriptorId: descriptor.id,
    appRecord: getAppRecord(descriptor.app)
  });
}
var _a3, _b3;
(_b3 = (_a3 = target).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null ? _b3 : _a3.__VUE_DEVTOOLS_KIT_INSPECTOR__ = [];
var devtoolsInspector = new Proxy(target.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(target22, prop, receiver) {
    return Reflect.get(target22, prop, receiver);
  }
});
var callInspectorUpdatedHook = debounce(() => {
  devtoolsContext.hooks.callHook("sendInspectorToClient", getActiveInspectors());
});
function addInspector(inspector, descriptor) {
  var _a25, _b25;
  devtoolsInspector.push({
    options: inspector,
    descriptor,
    treeFilterPlaceholder: (_a25 = inspector.treeFilterPlaceholder) != null ? _a25 : "Search tree...",
    stateFilterPlaceholder: (_b25 = inspector.stateFilterPlaceholder) != null ? _b25 : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: getAppRecord(descriptor.app)
  });
  callInspectorUpdatedHook();
}
function getActiveInspectors() {
  return devtoolsInspector.filter((inspector) => inspector.descriptor.app === activeAppRecord.value.app).filter((inspector) => inspector.descriptor.id !== "components").map((inspector) => {
    var _a25;
    const descriptor = inspector.descriptor;
    const options = inspector.options;
    return {
      id: options.id,
      label: options.label,
      logo: descriptor.logo,
      icon: `custom-ic-baseline-${(_a25 = options == null ? void 0 : options.icon) == null ? void 0 : _a25.replace(/_/g, "-")}`,
      packageName: descriptor.packageName,
      homepage: descriptor.homepage,
      pluginId: descriptor.id
    };
  });
}
function getInspector(id, app) {
  return devtoolsInspector.find((inspector) => inspector.options.id === id && (app ? inspector.descriptor.app === app : true));
}
function createDevToolsCtxHooks() {
  const hooks2 = createHooks();
  hooks2.hook("addInspector", ({ inspector, plugin }) => {
    addInspector(inspector, plugin.descriptor);
  });
  const debounceSendInspectorTree = debounce(async ({ inspectorId, plugin }) => {
    var _a25;
    if (!inspectorId || !((_a25 = plugin == null ? void 0 : plugin.descriptor) == null ? void 0 : _a25.app) || devtoolsState.highPerfModeEnabled)
      return;
    const inspector = getInspector(inspectorId, plugin.descriptor.app);
    const _payload = {
      app: plugin.descriptor.app,
      inspectorId,
      filter: (inspector == null ? void 0 : inspector.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((resolve) => {
      hooks2.callHookWith(
        async (callbacks) => {
          await Promise.all(callbacks.map((cb) => cb(_payload)));
          resolve();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    });
    hooks2.callHookWith(
      async (callbacks) => {
        await Promise.all(callbacks.map((cb) => cb({
          inspectorId,
          rootNodes: _payload.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  hooks2.hook("sendInspectorTree", debounceSendInspectorTree);
  const debounceSendInspectorState = debounce(async ({ inspectorId, plugin }) => {
    var _a25;
    if (!inspectorId || !((_a25 = plugin == null ? void 0 : plugin.descriptor) == null ? void 0 : _a25.app) || devtoolsState.highPerfModeEnabled)
      return;
    const inspector = getInspector(inspectorId, plugin.descriptor.app);
    const _payload = {
      app: plugin.descriptor.app,
      inspectorId,
      nodeId: (inspector == null ? void 0 : inspector.selectedNodeId) || "",
      state: null
    };
    const ctx = {
      currentTab: `custom-inspector:${inspectorId}`
    };
    if (_payload.nodeId) {
      await new Promise((resolve) => {
        hooks2.callHookWith(
          async (callbacks) => {
            await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
            resolve();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      });
    }
    hooks2.callHookWith(
      async (callbacks) => {
        await Promise.all(callbacks.map((cb) => cb({
          inspectorId,
          nodeId: _payload.nodeId,
          state: _payload.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  hooks2.hook("sendInspectorState", debounceSendInspectorState);
  hooks2.hook("customInspectorSelectNode", ({ inspectorId, nodeId, plugin }) => {
    const inspector = getInspector(inspectorId, plugin.descriptor.app);
    if (!inspector)
      return;
    inspector.selectedNodeId = nodeId;
  });
  hooks2.hook("timelineLayerAdded", ({ options, plugin }) => {
    addTimelineLayer(options, plugin.descriptor);
  });
  hooks2.hook("timelineEventAdded", ({ options, plugin }) => {
    var _a25;
    const internalLayerIds = ["performance", "component-event", "keyboard", "mouse"];
    if (devtoolsState.highPerfModeEnabled || !((_a25 = devtoolsState.timelineLayersState) == null ? void 0 : _a25[plugin.descriptor.id]) && !internalLayerIds.includes(options.layerId))
      return;
    hooks2.callHookWith(
      async (callbacks) => {
        await Promise.all(callbacks.map((cb) => cb(options)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  });
  hooks2.hook("getComponentInstances", async ({ app }) => {
    const appRecord = app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!appRecord)
      return null;
    const appId = appRecord.id.toString();
    const instances = [...appRecord.instanceMap].filter(([key]) => key.split(":")[0] === appId).map(([, instance]) => instance);
    return instances;
  });
  hooks2.hook("getComponentBounds", async ({ instance }) => {
    const bounds = getComponentBoundingRect(instance);
    return bounds;
  });
  hooks2.hook("getComponentName", ({ instance }) => {
    const name = getInstanceName(instance);
    return name;
  });
  hooks2.hook("componentHighlight", ({ uid }) => {
    const instance = activeAppRecord.value.instanceMap.get(uid);
    if (instance) {
      highlight(instance);
    }
  });
  hooks2.hook("componentUnhighlight", () => {
    unhighlight();
  });
  return hooks2;
}
var _a4, _b4;
(_b4 = (_a4 = target).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null ? _b4 : _a4.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = [];
var _a5, _b5;
(_b5 = (_a5 = target).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null ? _b5 : _a5.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {};
var _a6, _b6;
(_b6 = (_a6 = target).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null ? _b6 : _a6.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "";
var _a7, _b7;
(_b7 = (_a7 = target).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null ? _b7 : _a7.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = [];
var _a8, _b8;
(_b8 = (_a8 = target).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null ? _b8 : _a8.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = [];
var STATE_KEY = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function initStateFactory() {
  return {
    connected: false,
    clientConnected: false,
    vitePluginDetected: true,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: true,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: getTimelineLayersStateFromStorage()
  };
}
var _a9, _b9;
(_b9 = (_a9 = target)[STATE_KEY]) != null ? _b9 : _a9[STATE_KEY] = initStateFactory();
var callStateUpdatedHook = debounce((state) => {
  devtoolsContext.hooks.callHook("devtoolsStateUpdated", { state });
});
debounce((state, oldState) => {
  devtoolsContext.hooks.callHook("devtoolsConnectedUpdated", { state, oldState });
});
var devtoolsAppRecords = new Proxy(globalThis.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(_target, prop, receiver) {
    if (prop === "value")
      return globalThis.__VUE_DEVTOOLS_KIT_APP_RECORDS__;
    return globalThis.__VUE_DEVTOOLS_KIT_APP_RECORDS__[prop];
  }
});
var activeAppRecord = new Proxy(globalThis.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(_target, prop, receiver) {
    if (prop === "value")
      return globalThis.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__;
    else if (prop === "id")
      return globalThis.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__;
    return globalThis.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[prop];
  }
});
function updateAllStates() {
  callStateUpdatedHook({
    ...target[STATE_KEY],
    appRecords: devtoolsAppRecords.value,
    activeAppRecordId: activeAppRecord.id,
    tabs: target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function setActiveAppRecord(app) {
  target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = app;
  updateAllStates();
}
function setActiveAppRecordId(id) {
  target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = id;
  updateAllStates();
}
var devtoolsState = new Proxy(target[STATE_KEY], {
  get(target22, property) {
    if (property === "appRecords") {
      return devtoolsAppRecords;
    } else if (property === "activeAppRecordId") {
      return activeAppRecord.id;
    } else if (property === "tabs") {
      return globalThis.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;
    } else if (property === "commands") {
      return globalThis.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
    }
    return target[STATE_KEY][property];
  },
  deleteProperty(target22, property) {
    delete target22[property];
    return true;
  },
  set(target22, property, value) {
    ({ ...target[STATE_KEY] });
    target22[property] = value;
    target[STATE_KEY][property] = value;
    return true;
  }
});
function openInEditor(options = {}) {
  var _a25, _b25, _c;
  const { file, host, baseUrl = window.location.origin, line = 0, column = 0 } = options;
  if (file) {
    if (host === "chrome-extension") {
      const fileName = file.replace(/\\/g, "\\\\");
      const _baseUrl = (_b25 = (_a25 = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : _a25.openInEditorHost) != null ? _b25 : "/";
      fetch(`${_baseUrl}__open-in-editor?file=${encodeURI(file)}`).then((response) => {
        if (!response.ok) {
          const msg = `Opening component ${fileName} failed`;
          console.log(`%c${msg}`, "color:red");
        }
      });
    } else if (devtoolsState.vitePluginDetected) {
      const _baseUrl = (_c = target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? _c : baseUrl;
      target.__VUE_INSPECTOR__.openInEditor(_baseUrl, file, line, column);
    }
  }
}
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
var _a10, _b10;
(_b10 = (_a10 = target).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null ? _b10 : _a10.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = [];
var devtoolsPluginBuffer = new Proxy(target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(target22, prop, receiver) {
    return Reflect.get(target22, prop, receiver);
  }
});
function _getSettings(settings) {
  const _settings = {};
  Object.keys(settings).forEach((key) => {
    _settings[key] = settings[key].defaultValue;
  });
  return _settings;
}
function getPluginLocalKey(pluginId) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${pluginId}__`;
}
function getPluginSettingsOptions(pluginId) {
  var _a25, _b25, _c;
  const item = (_b25 = (_a25 = devtoolsPluginBuffer.find((item2) => {
    var _a26;
    return item2[0].id === pluginId && !!((_a26 = item2[0]) == null ? void 0 : _a26.settings);
  })) == null ? void 0 : _a25[0]) != null ? _b25 : null;
  return (_c = item == null ? void 0 : item.settings) != null ? _c : null;
}
function getPluginSettings(pluginId, fallbackValue) {
  var _a25, _b25, _c;
  const localKey = getPluginLocalKey(pluginId);
  if (localKey) {
    const localSettings = localStorage.getItem(localKey);
    if (localSettings) {
      return JSON.parse(localSettings);
    }
  }
  if (pluginId) {
    const item = (_b25 = (_a25 = devtoolsPluginBuffer.find((item2) => item2[0].id === pluginId)) == null ? void 0 : _a25[0]) != null ? _b25 : null;
    return _getSettings((_c = item == null ? void 0 : item.settings) != null ? _c : {});
  }
  return _getSettings(fallbackValue);
}
function initPluginSettings(pluginId, settings) {
  const localKey = getPluginLocalKey(pluginId);
  const localSettings = localStorage.getItem(localKey);
  if (!localSettings) {
    localStorage.setItem(localKey, JSON.stringify(_getSettings(settings)));
  }
}
function setPluginSettings(pluginId, key, value) {
  const localKey = getPluginLocalKey(pluginId);
  const localSettings = localStorage.getItem(localKey);
  const parsedLocalSettings = JSON.parse(localSettings || "{}");
  const updated = {
    ...parsedLocalSettings,
    [key]: value
  };
  localStorage.setItem(localKey, JSON.stringify(updated));
  devtoolsContext.hooks.callHookWith(
    (callbacks) => {
      callbacks.forEach((cb) => cb({
        pluginId,
        key,
        oldValue: parsedLocalSettings[key],
        newValue: value,
        settings: updated
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
var _a11, _b11;
var devtoolsHooks = (_b11 = (_a11 = target).__VUE_DEVTOOLS_HOOK) != null ? _b11 : _a11.__VUE_DEVTOOLS_HOOK = createHooks();
var on = {
  vueAppInit(fn) {
    devtoolsHooks.hook("app:init", fn);
  },
  vueAppUnmount(fn) {
    devtoolsHooks.hook("app:unmount", fn);
  },
  vueAppConnected(fn) {
    devtoolsHooks.hook("app:connected", fn);
  },
  componentAdded(fn) {
    return devtoolsHooks.hook("component:added", fn);
  },
  componentEmit(fn) {
    return devtoolsHooks.hook("component:emit", fn);
  },
  componentUpdated(fn) {
    return devtoolsHooks.hook("component:updated", fn);
  },
  componentRemoved(fn) {
    return devtoolsHooks.hook("component:removed", fn);
  },
  setupDevtoolsPlugin(fn) {
    devtoolsHooks.hook("devtools-plugin:setup", fn);
  },
  perfStart(fn) {
    return devtoolsHooks.hook("perf:start", fn);
  },
  perfEnd(fn) {
    return devtoolsHooks.hook("perf:end", fn);
  }
};
var hook = {
  on,
  setupDevToolsPlugin(pluginDescriptor, setupFn) {
    return devtoolsHooks.callHook("devtools-plugin:setup", pluginDescriptor, setupFn);
  }
};
var DevToolsV6PluginAPI = class {
  constructor({ plugin, ctx }) {
    this.hooks = ctx.hooks;
    this.plugin = plugin;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (handler) => {
        this.hooks.hook("visitComponentTree", handler);
      },
      inspectComponent: (handler) => {
        this.hooks.hook("inspectComponent", handler);
      },
      editComponentState: (handler) => {
        this.hooks.hook("editComponentState", handler);
      },
      // custom inspector
      getInspectorTree: (handler) => {
        this.hooks.hook("getInspectorTree", handler);
      },
      getInspectorState: (handler) => {
        this.hooks.hook("getInspectorState", handler);
      },
      editInspectorState: (handler) => {
        this.hooks.hook("editInspectorState", handler);
      },
      // timeline
      inspectTimelineEvent: (handler) => {
        this.hooks.hook("inspectTimelineEvent", handler);
      },
      timelineCleared: (handler) => {
        this.hooks.hook("timelineCleared", handler);
      },
      // settings
      setPluginSettings: (handler) => {
        this.hooks.hook("setPluginSettings", handler);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(instance) {
    var _a25;
    if (devtoolsState.highPerfModeEnabled) {
      return;
    }
    const inspector = getActiveInspectors().find((i) => i.packageName === this.plugin.descriptor.packageName);
    if (inspector == null ? void 0 : inspector.id) {
      if (instance) {
        const args = [
          instance.appContext.app,
          instance.uid,
          (_a25 = instance.parent) == null ? void 0 : _a25.uid,
          instance
        ];
        devtoolsHooks.callHook("component:updated", ...args);
      } else {
        devtoolsHooks.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      }
      this.hooks.callHook("sendInspectorState", { inspectorId: inspector.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(options) {
    this.hooks.callHook("addInspector", { inspector: options, plugin: this.plugin });
    if (this.plugin.descriptor.settings) {
      initPluginSettings(options.id, this.plugin.descriptor.settings);
    }
  }
  sendInspectorTree(inspectorId) {
    if (devtoolsState.highPerfModeEnabled) {
      return;
    }
    this.hooks.callHook("sendInspectorTree", { inspectorId, plugin: this.plugin });
  }
  sendInspectorState(inspectorId) {
    if (devtoolsState.highPerfModeEnabled) {
      return;
    }
    this.hooks.callHook("sendInspectorState", { inspectorId, plugin: this.plugin });
  }
  selectInspectorNode(inspectorId, nodeId) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId, nodeId, plugin: this.plugin });
  }
  visitComponentTree(payload) {
    return this.hooks.callHook("visitComponentTree", payload);
  }
  // timeline
  now() {
    if (devtoolsState.highPerfModeEnabled) {
      return 0;
    }
    return Date.now();
  }
  addTimelineLayer(options) {
    this.hooks.callHook("timelineLayerAdded", { options, plugin: this.plugin });
  }
  addTimelineEvent(options) {
    if (devtoolsState.highPerfModeEnabled) {
      return;
    }
    this.hooks.callHook("timelineEventAdded", { options, plugin: this.plugin });
  }
  // settings
  getSettings(pluginId) {
    return getPluginSettings(pluginId != null ? pluginId : this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(app) {
    return this.hooks.callHook("getComponentInstances", { app });
  }
  getComponentBounds(instance) {
    return this.hooks.callHook("getComponentBounds", { instance });
  }
  getComponentName(instance) {
    return this.hooks.callHook("getComponentName", { instance });
  }
  highlightElement(instance) {
    const uid = instance.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
};
var DevToolsPluginAPI = DevToolsV6PluginAPI;
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
var UNDEFINED = "__vue_devtool_undefined__";
var INFINITY = "__vue_devtool_infinity__";
var NEGATIVE_INFINITY = "__vue_devtool_negative_infinity__";
var NAN = "__vue_devtool_nan__";
init_esm_shims();
init_esm_shims();
var tokenMap = {
  [UNDEFINED]: "undefined",
  [NAN]: "NaN",
  [INFINITY]: "Infinity",
  [NEGATIVE_INFINITY]: "-Infinity"
};
Object.entries(tokenMap).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
var _a12, _b12;
(_b12 = (_a12 = target).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null ? _b12 : _a12.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set();
function callDevToolsPluginSetupFn(plugin, app) {
  const [pluginDescriptor, setupFn] = plugin;
  if (pluginDescriptor.app !== app)
    return;
  const api = new DevToolsPluginAPI({
    plugin: {
      setupFn,
      descriptor: pluginDescriptor
    },
    ctx: devtoolsContext
  });
  if (pluginDescriptor.packageName === "vuex") {
    api.on.editInspectorState((payload) => {
      api.sendInspectorState(payload.inspectorId);
    });
  }
  setupFn(api);
}
function registerDevToolsPlugin(app) {
  if (target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(app) || devtoolsState.highPerfModeEnabled)
    return;
  target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(app);
  devtoolsPluginBuffer.forEach((plugin) => {
    callDevToolsPluginSetupFn(plugin, app);
  });
}
init_esm_shims();
init_esm_shims();
var ROUTER_KEY = "__VUE_DEVTOOLS_ROUTER__";
var ROUTER_INFO_KEY = "__VUE_DEVTOOLS_ROUTER_INFO__";
var _a13, _b13;
(_b13 = (_a13 = target)[ROUTER_INFO_KEY]) != null ? _b13 : _a13[ROUTER_INFO_KEY] = {
  currentRoute: null,
  routes: []
};
var _a14, _b14;
(_b14 = (_a14 = target)[ROUTER_KEY]) != null ? _b14 : _a14[ROUTER_KEY] = {};
new Proxy(target[ROUTER_INFO_KEY], {
  get(target22, property) {
    return target[ROUTER_INFO_KEY][property];
  }
});
new Proxy(target[ROUTER_KEY], {
  get(target22, property) {
    if (property === "value") {
      return target[ROUTER_KEY];
    }
  }
});
function getRoutes(router) {
  const routesMap = /* @__PURE__ */ new Map();
  return ((router == null ? void 0 : router.getRoutes()) || []).filter((i) => !routesMap.has(i.path) && routesMap.set(i.path, 1));
}
function filterRoutes(routes) {
  return routes.map((item) => {
    let { path, name, children, meta } = item;
    if (children == null ? void 0 : children.length)
      children = filterRoutes(children);
    return {
      path,
      name,
      children,
      meta
    };
  });
}
function filterCurrentRoute(route) {
  if (route) {
    const { fullPath, hash, href, path, name, matched, params, query } = route;
    return {
      fullPath,
      hash,
      href,
      path,
      name,
      params,
      query,
      matched: filterRoutes(matched)
    };
  }
  return route;
}
function normalizeRouterInfo(appRecord, activeAppRecord2) {
  function init() {
    var _a25;
    const router = (_a25 = appRecord.app) == null ? void 0 : _a25.config.globalProperties.$router;
    const currentRoute = filterCurrentRoute(router == null ? void 0 : router.currentRoute.value);
    const routes = filterRoutes(getRoutes(router));
    const c = console.warn;
    console.warn = () => {
    };
    target[ROUTER_INFO_KEY] = {
      currentRoute: currentRoute ? deepClone(currentRoute) : {},
      routes: deepClone(routes)
    };
    target[ROUTER_KEY] = router;
    console.warn = c;
  }
  init();
  hook.on.componentUpdated(debounce(() => {
    var _a25;
    if (((_a25 = activeAppRecord2.value) == null ? void 0 : _a25.app) !== appRecord.app)
      return;
    init();
    if (devtoolsState.highPerfModeEnabled)
      return;
    devtoolsContext.hooks.callHook("routerInfoUpdated", { state: target[ROUTER_INFO_KEY] });
  }, 200));
}
function createDevToolsApi(hooks2) {
  return {
    // get inspector tree
    async getInspectorTree(payload) {
      const _payload = {
        ...payload,
        app: activeAppRecord.value.app,
        rootNodes: []
      };
      await new Promise((resolve) => {
        hooks2.callHookWith(
          async (callbacks) => {
            await Promise.all(callbacks.map((cb) => cb(_payload)));
            resolve();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      });
      return _payload.rootNodes;
    },
    // get inspector state
    async getInspectorState(payload) {
      const _payload = {
        ...payload,
        app: activeAppRecord.value.app,
        state: null
      };
      const ctx = {
        currentTab: `custom-inspector:${payload.inspectorId}`
      };
      await new Promise((resolve) => {
        hooks2.callHookWith(
          async (callbacks) => {
            await Promise.all(callbacks.map((cb) => cb(_payload, ctx)));
            resolve();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      });
      return _payload.state;
    },
    // edit inspector state
    editInspectorState(payload) {
      const stateEditor2 = new StateEditor();
      const _payload = {
        ...payload,
        app: activeAppRecord.value.app,
        set: (obj, path = payload.path, value = payload.state.value, cb) => {
          stateEditor2.set(obj, path, value, cb || stateEditor2.createDefaultSetCallback(payload.state));
        }
      };
      hooks2.callHookWith(
        (callbacks) => {
          callbacks.forEach((cb) => cb(_payload));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(inspectorId) {
      const inspector = getInspector(inspectorId);
      hooks2.callHook("sendInspectorState", { inspectorId, plugin: {
        descriptor: inspector.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return inspectComponentHighLighter();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return cancelInspectComponentHighLighter();
    },
    // get component render code
    getComponentRenderCode(id) {
      const instance = getComponentInstance(activeAppRecord.value, id);
      if (instance)
        return !((instance == null ? void 0 : instance.type) instanceof Function) ? instance.render.toString() : instance.type.toString();
    },
    // scroll to component
    scrollToComponent(id) {
      return scrollToComponent({ id });
    },
    // open in editor
    openInEditor,
    // get vue inspector
    getVueInspector: getComponentInspector,
    // toggle app
    toggleApp(id) {
      const appRecord = devtoolsAppRecords.value.find((record) => record.id === id);
      if (appRecord) {
        setActiveAppRecordId(id);
        setActiveAppRecord(appRecord);
        normalizeRouterInfo(appRecord, activeAppRecord);
        callInspectorUpdatedHook();
        registerDevToolsPlugin(appRecord.app);
      }
    },
    // inspect dom
    inspectDOM(instanceId) {
      const instance = getComponentInstance(activeAppRecord.value, instanceId);
      if (instance) {
        const [el] = getRootElementsFromComponentInstance(instance);
        if (el) {
          target.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = el;
        }
      }
    },
    updatePluginSettings(pluginId, key, value) {
      setPluginSettings(pluginId, key, value);
    },
    getPluginSettings(pluginId) {
      return {
        options: getPluginSettingsOptions(pluginId),
        values: getPluginSettings(pluginId)
      };
    }
  };
}
init_esm_shims();
var _a15, _b15;
(_b15 = (_a15 = target).__VUE_DEVTOOLS_ENV__) != null ? _b15 : _a15.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: false
};
var hooks = createDevToolsCtxHooks();
var _a16, _b16;
(_b16 = (_a16 = target).__VUE_DEVTOOLS_KIT_CONTEXT__) != null ? _b16 : _a16.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks,
  get state() {
    return {
      ...devtoolsState,
      activeAppRecordId: activeAppRecord.id,
      activeAppRecord: activeAppRecord.value,
      appRecords: devtoolsAppRecords.value
    };
  },
  api: createDevToolsApi(hooks)
};
var devtoolsContext = target.__VUE_DEVTOOLS_KIT_CONTEXT__;
init_esm_shims();
__toESM(require_speakingurl2());
var _a17, _b17;
(_b17 = (_a17 = target).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null ? _b17 : _a17.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
};
init_esm_shims();
function toggleHighPerfMode(state) {
  devtoolsState.highPerfModeEnabled = state != null ? state : !devtoolsState.highPerfModeEnabled;
  if (!state && activeAppRecord.value) {
    registerDevToolsPlugin(activeAppRecord.value.app);
  }
}
init_esm_shims();
init_esm_shims();
init_esm_shims();
function updateDevToolsClientDetected(params) {
  devtoolsState.devtoolsClientDetected = {
    ...devtoolsState.devtoolsClientDetected,
    ...params
  };
  const devtoolsClientVisible = Object.values(devtoolsState.devtoolsClientDetected).some(Boolean);
  toggleHighPerfMode(!devtoolsClientVisible);
}
var _a18, _b18;
(_b18 = (_a18 = target).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null ? _b18 : _a18.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = updateDevToolsClientDetected;
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
var DoubleIndexedKV = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map();
    this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.keyToValue.set(key, value);
    this.valueToKey.set(value, key);
  }
  getByKey(key) {
    return this.keyToValue.get(key);
  }
  getByValue(value) {
    return this.valueToKey.get(value);
  }
  clear() {
    this.keyToValue.clear();
    this.valueToKey.clear();
  }
};
var Registry = class {
  constructor(generateIdentifier) {
    this.generateIdentifier = generateIdentifier;
    this.kv = new DoubleIndexedKV();
  }
  register(value, identifier) {
    if (this.kv.getByValue(value)) {
      return;
    }
    if (!identifier) {
      identifier = this.generateIdentifier(value);
    }
    this.kv.set(identifier, value);
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(value) {
    return this.kv.getByValue(value);
  }
  getValue(identifier) {
    return this.kv.getByKey(identifier);
  }
};
var ClassRegistry = class extends Registry {
  constructor() {
    super((c) => c.name);
    this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(value, options) {
    if (typeof options === "object") {
      if (options.allowProps) {
        this.classToAllowedProps.set(value, options.allowProps);
      }
      super.register(value, options.identifier);
    } else {
      super.register(value, options);
    }
  }
  getAllowedProps(value) {
    return this.classToAllowedProps.get(value);
  }
};
init_esm_shims();
init_esm_shims();
function valuesOfObj(record) {
  if ("values" in Object) {
    return Object.values(record);
  }
  const values = [];
  for (const key in record) {
    if (record.hasOwnProperty(key)) {
      values.push(record[key]);
    }
  }
  return values;
}
function find(record, predicate) {
  const values = valuesOfObj(record);
  if ("find" in values) {
    return values.find(predicate);
  }
  const valuesNotNever = values;
  for (let i = 0; i < valuesNotNever.length; i++) {
    const value = valuesNotNever[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
function forEach(record, run) {
  Object.entries(record).forEach(([key, value]) => run(value, key));
}
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
  for (let i = 0; i < record.length; i++) {
    const value = record[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
var CustomTransformerRegistry = class {
  constructor() {
    this.transfomers = {};
  }
  register(transformer) {
    this.transfomers[transformer.name] = transformer;
  }
  findApplicable(v) {
    return find(this.transfomers, (transformer) => transformer.isApplicable(v));
  }
  findByName(name) {
    return this.transfomers[name];
  }
};
init_esm_shims();
init_esm_shims();
var getType = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
var isUndefined = (payload) => typeof payload === "undefined";
var isNull = (payload) => payload === null;
var isPlainObject2 = (payload) => {
  if (typeof payload !== "object" || payload === null)
    return false;
  if (payload === Object.prototype)
    return false;
  if (Object.getPrototypeOf(payload) === null)
    return true;
  return Object.getPrototypeOf(payload) === Object.prototype;
};
var isEmptyObject = (payload) => isPlainObject2(payload) && Object.keys(payload).length === 0;
var isArray = (payload) => Array.isArray(payload);
var isString = (payload) => typeof payload === "string";
var isNumber = (payload) => typeof payload === "number" && !isNaN(payload);
var isBoolean = (payload) => typeof payload === "boolean";
var isRegExp = (payload) => payload instanceof RegExp;
var isMap = (payload) => payload instanceof Map;
var isSet = (payload) => payload instanceof Set;
var isSymbol = (payload) => getType(payload) === "Symbol";
var isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
var isError = (payload) => payload instanceof Error;
var isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
var isPrimitive2 = (payload) => isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
var isBigint = (payload) => typeof payload === "bigint";
var isInfinite = (payload) => payload === Infinity || payload === -Infinity;
var isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
var isURL = (payload) => payload instanceof URL;
init_esm_shims();
var escapeKey = (key) => key.replace(/\./g, "\\.");
var stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
var parsePath = (string) => {
  const result = [];
  let segment = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    const isEscapedDot = char === "\\" && string.charAt(i + 1) === ".";
    if (isEscapedDot) {
      segment += ".";
      i++;
      continue;
    }
    const isEndOfSegment = char === ".";
    if (isEndOfSegment) {
      result.push(segment);
      segment = "";
      continue;
    }
    segment += char;
  }
  const lastSegment = segment;
  result.push(lastSegment);
  return result;
};
init_esm_shims();
function simpleTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var simpleRules = [
  simpleTransformation(isUndefined, "undefined", () => null, () => void 0),
  simpleTransformation(isBigint, "bigint", (v) => v.toString(), (v) => {
    if (typeof BigInt !== "undefined") {
      return BigInt(v);
    }
    console.error("Please add a BigInt polyfill.");
    return v;
  }),
  simpleTransformation(isDate, "Date", (v) => v.toISOString(), (v) => new Date(v)),
  simpleTransformation(isError, "Error", (v, superJson) => {
    const baseError = {
      name: v.name,
      message: v.message
    };
    superJson.allowedErrorProps.forEach((prop) => {
      baseError[prop] = v[prop];
    });
    return baseError;
  }, (v, superJson) => {
    const e = new Error(v.message);
    e.name = v.name;
    e.stack = v.stack;
    superJson.allowedErrorProps.forEach((prop) => {
      e[prop] = v[prop];
    });
    return e;
  }),
  simpleTransformation(isRegExp, "regexp", (v) => "" + v, (regex) => {
    const body = regex.slice(1, regex.lastIndexOf("/"));
    const flags = regex.slice(regex.lastIndexOf("/") + 1);
    return new RegExp(body, flags);
  }),
  simpleTransformation(
    isSet,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v) => [...v.values()],
    (v) => new Set(v)
  ),
  simpleTransformation(isMap, "map", (v) => [...v.entries()], (v) => new Map(v)),
  simpleTransformation((v) => isNaNValue(v) || isInfinite(v), "number", (v) => {
    if (isNaNValue(v)) {
      return "NaN";
    }
    if (v > 0) {
      return "Infinity";
    } else {
      return "-Infinity";
    }
  }, Number),
  simpleTransformation((v) => v === 0 && 1 / v === -Infinity, "number", () => {
    return "-0";
  }, Number),
  simpleTransformation(isURL, "URL", (v) => v.toString(), (v) => new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var symbolRule = compositeTransformation((s, superJson) => {
  if (isSymbol(s)) {
    const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
    return isRegistered;
  }
  return false;
}, (s, superJson) => {
  const identifier = superJson.symbolRegistry.getIdentifier(s);
  return ["symbol", identifier];
}, (v) => v.description, (_2, a, superJson) => {
  const value = superJson.symbolRegistry.getValue(a[1]);
  if (!value) {
    throw new Error("Trying to deserialize unknown symbol");
  }
  return value;
});
var constructorToName = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((obj, ctor) => {
  obj[ctor.name] = ctor;
  return obj;
}, {});
var typedArrayRule = compositeTransformation(isTypedArray, (v) => ["typed-array", v.constructor.name], (v) => [...v], (v, a) => {
  const ctor = constructorToName[a[1]];
  if (!ctor) {
    throw new Error("Trying to deserialize unknown typed array");
  }
  return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
  if (potentialClass == null ? void 0 : potentialClass.constructor) {
    const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
    return isRegistered;
  }
  return false;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
  const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
  return ["class", identifier];
}, (clazz, superJson) => {
  const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
  if (!allowedProps) {
    return { ...clazz };
  }
  const result = {};
  allowedProps.forEach((prop) => {
    result[prop] = clazz[prop];
  });
  return result;
}, (v, a, superJson) => {
  const clazz = superJson.classRegistry.getValue(a[1]);
  if (!clazz) {
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  }
  return Object.assign(Object.create(clazz.prototype), v);
});
var customRule = compositeTransformation((value, superJson) => {
  return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson) => {
  const transformer = superJson.customTransformerRegistry.findApplicable(value);
  return ["custom", transformer.name];
}, (value, superJson) => {
  const transformer = superJson.customTransformerRegistry.findApplicable(value);
  return transformer.serialize(value);
}, (v, a, superJson) => {
  const transformer = superJson.customTransformerRegistry.findByName(a[1]);
  if (!transformer) {
    throw new Error("Trying to deserialize unknown custom value");
  }
  return transformer.deserialize(v);
});
var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
var transformValue = (value, superJson) => {
  const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableCompositeRule) {
    return {
      value: applicableCompositeRule.transform(value, superJson),
      type: applicableCompositeRule.annotation(value, superJson)
    };
  }
  const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableSimpleRule) {
    return {
      value: applicableSimpleRule.transform(value, superJson),
      type: applicableSimpleRule.annotation
    };
  }
  return void 0;
};
var simpleRulesByAnnotation = {};
simpleRules.forEach((rule) => {
  simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = (json, type, superJson) => {
  if (isArray(type)) {
    switch (type[0]) {
      case "symbol":
        return symbolRule.untransform(json, type, superJson);
      case "class":
        return classRule.untransform(json, type, superJson);
      case "custom":
        return customRule.untransform(json, type, superJson);
      case "typed-array":
        return typedArrayRule.untransform(json, type, superJson);
      default:
        throw new Error("Unknown transformation: " + type);
    }
  } else {
    const transformation = simpleRulesByAnnotation[type];
    if (!transformation) {
      throw new Error("Unknown transformation: " + type);
    }
    return transformation.untransform(json, superJson);
  }
};
init_esm_shims();
var getNthKey = (value, n) => {
  const keys = value.keys();
  while (n > 0) {
    keys.next();
    n--;
  }
  return keys.next().value;
};
function validatePath(path) {
  if (includes(path, "__proto__")) {
    throw new Error("__proto__ is not allowed as a property");
  }
  if (includes(path, "prototype")) {
    throw new Error("prototype is not allowed as a property");
  }
  if (includes(path, "constructor")) {
    throw new Error("constructor is not allowed as a property");
  }
}
var getDeep = (object, path) => {
  validatePath(path);
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (isSet(object)) {
      object = getNthKey(object, +key);
    } else if (isMap(object)) {
      const row = +key;
      const type = +path[++i] === 0 ? "key" : "value";
      const keyOfRow = getNthKey(object, row);
      switch (type) {
        case "key":
          object = keyOfRow;
          break;
        case "value":
          object = object.get(keyOfRow);
          break;
      }
    } else {
      object = object[key];
    }
  }
  return object;
};
var setDeep = (object, path, mapper) => {
  validatePath(path);
  if (path.length === 0) {
    return mapper(object);
  }
  let parent = object;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (isArray(parent)) {
      const index = +key;
      parent = parent[index];
    } else if (isPlainObject2(parent)) {
      parent = parent[key];
    } else if (isSet(parent)) {
      const row = +key;
      parent = getNthKey(parent, row);
    } else if (isMap(parent)) {
      const isEnd = i === path.length - 2;
      if (isEnd) {
        break;
      }
      const row = +key;
      const type = +path[++i] === 0 ? "key" : "value";
      const keyOfRow = getNthKey(parent, row);
      switch (type) {
        case "key":
          parent = keyOfRow;
          break;
        case "value":
          parent = parent.get(keyOfRow);
          break;
      }
    }
  }
  const lastKey = path[path.length - 1];
  if (isArray(parent)) {
    parent[+lastKey] = mapper(parent[+lastKey]);
  } else if (isPlainObject2(parent)) {
    parent[lastKey] = mapper(parent[lastKey]);
  }
  if (isSet(parent)) {
    const oldValue = getNthKey(parent, +lastKey);
    const newValue = mapper(oldValue);
    if (oldValue !== newValue) {
      parent.delete(oldValue);
      parent.add(newValue);
    }
  }
  if (isMap(parent)) {
    const row = +path[path.length - 2];
    const keyToRow = getNthKey(parent, row);
    const type = +lastKey === 0 ? "key" : "value";
    switch (type) {
      case "key": {
        const newKey = mapper(keyToRow);
        parent.set(newKey, parent.get(keyToRow));
        if (newKey !== keyToRow) {
          parent.delete(keyToRow);
        }
        break;
      }
      case "value": {
        parent.set(keyToRow, mapper(parent.get(keyToRow)));
        break;
      }
    }
  }
  return object;
};
function traverse(tree, walker2, origin = []) {
  if (!tree) {
    return;
  }
  if (!isArray(tree)) {
    forEach(tree, (subtree, key) => traverse(subtree, walker2, [...origin, ...parsePath(key)]));
    return;
  }
  const [nodeValue, children] = tree;
  if (children) {
    forEach(children, (child, key) => {
      traverse(child, walker2, [...origin, ...parsePath(key)]);
    });
  }
  walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
  traverse(annotations, (type, path) => {
    plain = setDeep(plain, path, (v) => untransformValue(v, type, superJson));
  });
  return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
  function apply(identicalPaths, path) {
    const object = getDeep(plain, parsePath(path));
    identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
      plain = setDeep(plain, identicalObjectPath, () => object);
    });
  }
  if (isArray(annotations)) {
    const [root, other] = annotations;
    root.forEach((identicalPath) => {
      plain = setDeep(plain, parsePath(identicalPath), () => plain);
    });
    if (other) {
      forEach(other, apply);
    }
  } else {
    forEach(annotations, apply);
  }
  return plain;
}
var isDeep = (object, superJson) => isPlainObject2(object) || isArray(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
  const existingSet = identities.get(object);
  if (existingSet) {
    existingSet.push(path);
  } else {
    identities.set(object, [path]);
  }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
  const result = {};
  let rootEqualityPaths = void 0;
  identitites.forEach((paths) => {
    if (paths.length <= 1) {
      return;
    }
    if (!dedupe) {
      paths = paths.map((path) => path.map(String)).sort((a, b) => a.length - b.length);
    }
    const [representativePath, ...identicalPaths] = paths;
    if (representativePath.length === 0) {
      rootEqualityPaths = identicalPaths.map(stringifyPath);
    } else {
      result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
    }
  });
  if (rootEqualityPaths) {
    if (isEmptyObject(result)) {
      return [rootEqualityPaths];
    } else {
      return [rootEqualityPaths, result];
    }
  } else {
    return isEmptyObject(result) ? void 0 : result;
  }
}
var walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
  var _a25;
  const primitive = isPrimitive2(object);
  if (!primitive) {
    addIdentity(object, path, identities);
    const seen = seenObjects.get(object);
    if (seen) {
      return dedupe ? {
        transformedValue: null
      } : seen;
    }
  }
  if (!isDeep(object, superJson)) {
    const transformed2 = transformValue(object, superJson);
    const result2 = transformed2 ? {
      transformedValue: transformed2.value,
      annotations: [transformed2.type]
    } : {
      transformedValue: object
    };
    if (!primitive) {
      seenObjects.set(object, result2);
    }
    return result2;
  }
  if (includes(objectsInThisPath, object)) {
    return {
      transformedValue: null
    };
  }
  const transformationResult = transformValue(object, superJson);
  const transformed = (_a25 = transformationResult == null ? void 0 : transformationResult.value) != null ? _a25 : object;
  const transformedValue = isArray(transformed) ? [] : {};
  const innerAnnotations = {};
  forEach(transformed, (value, index) => {
    if (index === "__proto__" || index === "constructor" || index === "prototype") {
      throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
    }
    const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
    transformedValue[index] = recursiveResult.transformedValue;
    if (isArray(recursiveResult.annotations)) {
      innerAnnotations[index] = recursiveResult.annotations;
    } else if (isPlainObject2(recursiveResult.annotations)) {
      forEach(recursiveResult.annotations, (tree, key) => {
        innerAnnotations[escapeKey(index) + "." + key] = tree;
      });
    }
  });
  const result = isEmptyObject(innerAnnotations) ? {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type] : void 0
  } : {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
  };
  if (!primitive) {
    seenObjects.set(object, result);
  }
  return result;
};
init_esm_shims();
init_esm_shims();
function getType2(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
function isArray2(payload) {
  return getType2(payload) === "Array";
}
function isPlainObject3(payload) {
  if (getType2(payload) !== "Object")
    return false;
  const prototype = Object.getPrototypeOf(payload);
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
  if (propType === "enumerable")
    carry[key] = newVal;
  if (includeNonenumerable && propType === "nonenumerable") {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}
function copy(target22, options = {}) {
  if (isArray2(target22)) {
    return target22.map((item) => copy(item, options));
  }
  if (!isPlainObject3(target22)) {
    return target22;
  }
  const props = Object.getOwnPropertyNames(target22);
  const symbols = Object.getOwnPropertySymbols(target22);
  return [...props, ...symbols].reduce((carry, key) => {
    if (isArray2(options.props) && !options.props.includes(key)) {
      return carry;
    }
    const val = target22[key];
    const newVal = copy(val, options);
    assignProp(carry, key, newVal, target22, options.nonenumerable);
    return carry;
  }, {});
}
var SuperJSON = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe = false } = {}) {
    this.classRegistry = new ClassRegistry();
    this.symbolRegistry = new Registry((s) => {
      var _a25;
      return (_a25 = s.description) != null ? _a25 : "";
    });
    this.customTransformerRegistry = new CustomTransformerRegistry();
    this.allowedErrorProps = [];
    this.dedupe = dedupe;
  }
  serialize(object) {
    const identities = /* @__PURE__ */ new Map();
    const output = walker(object, identities, this, this.dedupe);
    const res = {
      json: output.transformedValue
    };
    if (output.annotations) {
      res.meta = {
        ...res.meta,
        values: output.annotations
      };
    }
    const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
    if (equalityAnnotations) {
      res.meta = {
        ...res.meta,
        referentialEqualities: equalityAnnotations
      };
    }
    return res;
  }
  deserialize(payload) {
    const { json, meta } = payload;
    let result = copy(json);
    if (meta == null ? void 0 : meta.values) {
      result = applyValueAnnotations(result, meta.values, this);
    }
    if (meta == null ? void 0 : meta.referentialEqualities) {
      result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
    }
    return result;
  }
  stringify(object) {
    return JSON.stringify(this.serialize(object));
  }
  parse(string) {
    return this.deserialize(JSON.parse(string));
  }
  registerClass(v, options) {
    this.classRegistry.register(v, options);
  }
  registerSymbol(v, identifier) {
    this.symbolRegistry.register(v, identifier);
  }
  registerCustom(transformer, name) {
    this.customTransformerRegistry.register({
      name,
      ...transformer
    });
  }
  allowErrorProps(...props) {
    this.allowedErrorProps.push(...props);
  }
};
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
var _a19, _b19;
(_b19 = (_a19 = target).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null ? _b19 : _a19.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = [];
var _a20, _b20;
(_b20 = (_a20 = target).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null ? _b20 : _a20.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null;
var _a21, _b21;
(_b21 = (_a21 = target).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null ? _b21 : _a21.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null;
var _a22, _b22;
(_b22 = (_a22 = target).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null ? _b22 : _a22.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null;
var _a23, _b23;
(_b23 = (_a23 = target).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null ? _b23 : _a23.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null;
var _a24, _b24;
(_b24 = (_a24 = target).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null ? _b24 : _a24.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null;
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
init_esm_shims();
/**
  * vee-validate v4.14.7
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function isCallable$1(fn) {
  return typeof fn === "function";
}
function isNullOrUndefined$1(value) {
  return value === null || value === void 0;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);
function isIndex(value) {
  return Number(value) >= 0;
}
function toNumber(value) {
  const n = parseFloat(value);
  return isNaN(n) ? value : n;
}
function isObjectLike$1(value) {
  return typeof value === "object" && value !== null;
}
function getTag$1(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isPlainObject$1(value) {
  if (!isObjectLike$1(value) || getTag$1(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function merge$1(target2, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject$1(source[key]) && isPlainObject$1(target2[key])) {
      if (!target2[key]) {
        target2[key] = {};
      }
      merge$1(target2[key], source[key]);
      return;
    }
    target2[key] = source[key];
  });
  return target2;
}
function normalizeFormPath(path) {
  const pathArr = path.split(".");
  if (!pathArr.length) {
    return "";
  }
  let fullPath = String(pathArr[0]);
  for (let i = 1; i < pathArr.length; i++) {
    if (isIndex(pathArr[i])) {
      fullPath += `[${pathArr[i]}]`;
      continue;
    }
    fullPath += `.${pathArr[i]}`;
  }
  return fullPath;
}
const RULES = {};
function defineRule(id, validator) {
  guardExtend(id, validator);
  RULES[id] = validator;
}
function resolveRule(id) {
  return RULES[id];
}
function guardExtend(id, validator) {
  if (isCallable$1(validator)) {
    return;
  }
  throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}
function set(obj, key, val) {
  if (typeof val.value === "object") val.value = klona(val.value);
  if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === "__proto__") {
    Object.defineProperty(obj, key, val);
  } else obj[key] = val.value;
}
function klona(x) {
  if (typeof x !== "object") return x;
  var i = 0, k, list, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    tmp = Object.create(x.__proto__ || null);
  } else if (str === "[object Array]") {
    tmp = Array(x.length);
  } else if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
  } else if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
  } else if (str === "[object Date]") {
    tmp = /* @__PURE__ */ new Date(+x);
  } else if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
  } else if (str === "[object DataView]") {
    tmp = new x.constructor(klona(x.buffer));
  } else if (str === "[object ArrayBuffer]") {
    tmp = x.slice(0);
  } else if (str.slice(-6) === "Array]") {
    tmp = new x.constructor(x);
  }
  if (tmp) {
    for (list = Object.getOwnPropertySymbols(x); i < list.length; i++) {
      set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
    }
    for (i = 0, list = Object.getOwnPropertyNames(x); i < list.length; i++) {
      if (Object.hasOwnProperty.call(tmp, k = list[i]) && tmp[k] === x[k]) continue;
      set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
    }
  }
  return tmp || x;
}
const FormContextKey = Symbol("vee-validate-form");
const PublicFormContextKey = Symbol("vee-validate-form-context");
const FieldContextKey = Symbol("vee-validate-field-instance");
const IS_ABSENT = Symbol("Default empty value");
const isClient = typeof window !== "undefined";
function isLocator(value) {
  return isCallable$1(value) && !!value.__locatorRef;
}
function isTypedSchema(value) {
  return !!value && isCallable$1(value.parse) && value.__type === "VVTypedSchema";
}
function isYupValidator(value) {
  return !!value && isCallable$1(value.validate);
}
function hasCheckedAttr(type) {
  return type === "checkbox" || type === "radio";
}
function isContainerValue(value) {
  return isObject(value) || Array.isArray(value);
}
function isEmptyContainer(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return isObject(value) && Object.keys(value).length === 0;
}
function isNotNestedPath(path) {
  return /^\[.+\]$/i.test(path);
}
function isNativeMultiSelect(el) {
  return isNativeSelect(el) && el.multiple;
}
function isNativeSelect(el) {
  return el.tagName === "SELECT";
}
function isFormSubmitEvent(evt) {
  return isEvent(evt) && evt.target && "submit" in evt.target;
}
function isEvent(evt) {
  if (!evt) {
    return false;
  }
  if (typeof Event !== "undefined" && isCallable$1(Event) && evt instanceof Event) {
    return true;
  }
  if (evt && evt.srcElement) {
    return true;
  }
  return false;
}
function isEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!isEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      for (i of a.entries())
        if (!isEqual(i[1], b.get(i[0])))
          return false;
      return true;
    }
    if (isFile(a) && isFile(b)) {
      if (a.size !== b.size)
        return false;
      if (a.name !== b.name)
        return false;
      if (a.lastModified !== b.lastModified)
        return false;
      if (a.type !== b.type)
        return false;
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length - countUndefinedValues(a, keys);
    if (length !== Object.keys(b).length - countUndefinedValues(b, Object.keys(b)))
      return false;
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    }
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!isEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
function countUndefinedValues(a, keys) {
  let result = 0;
  for (let i = keys.length; i-- !== 0; ) {
    var key = keys[i];
    if (a[key] === void 0)
      result++;
  }
  return result;
}
function isFile(a) {
  if (!isClient) {
    return false;
  }
  return a instanceof File;
}
function cleanupNonNestedPath(path) {
  if (isNotNestedPath(path)) {
    return path.replace(/\[|\]/gi, "");
  }
  return path;
}
function getFromPath(object, path, fallback) {
  if (!object) {
    return fallback;
  }
  if (isNotNestedPath(path)) {
    return object[cleanupNonNestedPath(path)];
  }
  const resolvedValue = (path || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((acc, propKey) => {
    if (isContainerValue(acc) && propKey in acc) {
      return acc[propKey];
    }
    return fallback;
  }, object);
  return resolvedValue;
}
function setInPath(object, path, value) {
  if (isNotNestedPath(path)) {
    object[cleanupNonNestedPath(path)] = value;
    return;
  }
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
  let acc = object;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      acc[keys[i]] = value;
      return;
    }
    if (!(keys[i] in acc) || isNullOrUndefined$1(acc[keys[i]])) {
      acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
    }
    acc = acc[keys[i]];
  }
}
function unset(object, key) {
  if (Array.isArray(object) && isIndex(key)) {
    object.splice(Number(key), 1);
    return;
  }
  if (isObject(object)) {
    delete object[key];
  }
}
function unsetPath(object, path) {
  if (isNotNestedPath(path)) {
    delete object[cleanupNonNestedPath(path)];
    return;
  }
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
  let acc = object;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      unset(acc, keys[i]);
      break;
    }
    if (!(keys[i] in acc) || isNullOrUndefined$1(acc[keys[i]])) {
      break;
    }
    acc = acc[keys[i]];
  }
  const pathValues = keys.map((_2, idx) => {
    return getFromPath(object, keys.slice(0, idx).join("."));
  });
  for (let i = pathValues.length - 1; i >= 0; i--) {
    if (!isEmptyContainer(pathValues[i])) {
      continue;
    }
    if (i === 0) {
      unset(object, keys[0]);
      continue;
    }
    unset(pathValues[i - 1], keys[i - 1]);
  }
}
function keysOf(record) {
  return Object.keys(record);
}
function injectWithSelf(symbol, def = void 0) {
  const vm = getCurrentInstance();
  return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || inject(symbol, def);
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
  if (Array.isArray(currentValue)) {
    const newVal = [...currentValue];
    const idx = newVal.findIndex((v) => isEqual(v, checkedValue));
    idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
    return newVal;
  }
  return isEqual(currentValue, checkedValue) ? uncheckedValue : checkedValue;
}
function debounceAsync(inner, ms = 0) {
  let timer = null;
  let resolves = [];
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
    }, ms);
    return new Promise((resolve) => resolves.push(resolve));
  };
}
function applyModelModifiers(value, modifiers) {
  if (!isObject(modifiers)) {
    return value;
  }
  if (modifiers.number) {
    return toNumber(value);
  }
  return value;
}
function withLatest(fn, onDone) {
  let latestRun;
  return async function runLatest(...args) {
    const pending = fn(...args);
    latestRun = pending;
    const result = await pending;
    if (pending !== latestRun) {
      return result;
    }
    latestRun = void 0;
    return onDone(result, args);
  };
}
function normalizeErrorItem(message2) {
  return Array.isArray(message2) ? message2 : message2 ? [message2] : [];
}
function omit(obj, keys) {
  const target2 = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      target2[key] = obj[key];
    }
  }
  return target2;
}
function debounceNextTick(inner) {
  let lastTick = null;
  let resolves = [];
  return function(...args) {
    const thisTick = nextTick(() => {
      if (lastTick !== thisTick) {
        return;
      }
      const result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
      lastTick = null;
    });
    lastTick = thisTick;
    return new Promise((resolve) => resolves.push(resolve));
  };
}
function getBoundValue(el) {
  if (hasValueBinding(el)) {
    return el._value;
  }
  return void 0;
}
function hasValueBinding(el) {
  return "_value" in el;
}
function parseInputValue(el) {
  if (el.type === "number") {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
  }
  if (el.type === "range") {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
  }
  return el.value;
}
function normalizeEventValue(value) {
  if (!isEvent(value)) {
    return value;
  }
  const input = value.target;
  if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
    return getBoundValue(input);
  }
  if (input.type === "file" && input.files) {
    const files = Array.from(input.files);
    return input.multiple ? files : files[0];
  }
  if (isNativeMultiSelect(input)) {
    return Array.from(input.options).filter((opt) => opt.selected && !opt.disabled).map(getBoundValue);
  }
  if (isNativeSelect(input)) {
    const selectedOption = Array.from(input.options).find((opt) => opt.selected);
    return selectedOption ? getBoundValue(selectedOption) : input.value;
  }
  return parseInputValue(input);
}
function normalizeRules(rules) {
  const acc = {};
  Object.defineProperty(acc, "_$$isNormalized", {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });
  if (!rules) {
    return acc;
  }
  if (isObject(rules) && rules._$$isNormalized) {
    return rules;
  }
  if (isObject(rules)) {
    return Object.keys(rules).reduce((prev, curr) => {
      const params = normalizeParams(rules[curr]);
      if (rules[curr] !== false) {
        prev[curr] = buildParams(params);
      }
      return prev;
    }, acc);
  }
  if (typeof rules !== "string") {
    return acc;
  }
  return rules.split("|").reduce((prev, rule) => {
    const parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }
    prev[parsedRule.name] = buildParams(parsedRule.params);
    return prev;
  }, acc);
}
function normalizeParams(params) {
  if (params === true) {
    return [];
  }
  if (Array.isArray(params)) {
    return params;
  }
  if (isObject(params)) {
    return params;
  }
  return [params];
}
function buildParams(provided) {
  const mapValueToLocator = (value) => {
    if (typeof value === "string" && value[0] === "@") {
      return createLocator(value.slice(1));
    }
    return value;
  };
  if (Array.isArray(provided)) {
    return provided.map(mapValueToLocator);
  }
  if (provided instanceof RegExp) {
    return [provided];
  }
  return Object.keys(provided).reduce((prev, key) => {
    prev[key] = mapValueToLocator(provided[key]);
    return prev;
  }, {});
}
const parseRule = (rule) => {
  let params = [];
  const name = rule.split(":")[0];
  if (rule.includes(":")) {
    params = rule.split(":").slice(1).join(":").split(",");
  }
  return { name, params };
};
function createLocator(value) {
  const locator = (crossTable) => {
    var _a25;
    const val = (_a25 = getFromPath(crossTable, value)) !== null && _a25 !== void 0 ? _a25 : crossTable[value];
    return val;
  };
  locator.__locatorRef = value;
  return locator;
}
function extractLocators(params) {
  if (Array.isArray(params)) {
    return params.filter(isLocator);
  }
  return keysOf(params).filter((key) => isLocator(params[key])).map((key) => params[key]);
}
const DEFAULT_CONFIG = {
  generateMessage: ({ field }) => `${field} is not valid.`,
  bails: true,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
  currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;
async function validate$1(value, rules, options = {}) {
  const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
  const field = {
    name: (options === null || options === void 0 ? void 0 : options.name) || "{field}",
    rules,
    label: options === null || options === void 0 ? void 0 : options.label,
    bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
    formData: (options === null || options === void 0 ? void 0 : options.values) || {}
  };
  const result = await _validate(field, value);
  return Object.assign(Object.assign({}, result), { valid: !result.errors.length });
}
async function _validate(field, value) {
  const rules = field.rules;
  if (isTypedSchema(rules) || isYupValidator(rules)) {
    return validateFieldWithTypedSchema(value, Object.assign(Object.assign({}, field), { rules }));
  }
  if (isCallable$1(rules) || Array.isArray(rules)) {
    const ctx = {
      field: field.label || field.name,
      name: field.name,
      label: field.label,
      form: field.formData,
      value
    };
    const pipeline = Array.isArray(rules) ? rules : [rules];
    const length2 = pipeline.length;
    const errors2 = [];
    for (let i = 0; i < length2; i++) {
      const rule = pipeline[i];
      const result = await rule(value, ctx);
      const isValid = typeof result !== "string" && !Array.isArray(result) && result;
      if (isValid) {
        continue;
      }
      if (Array.isArray(result)) {
        errors2.push(...result);
      } else {
        const message2 = typeof result === "string" ? result : _generateFieldError(ctx);
        errors2.push(message2);
      }
      if (field.bails) {
        return {
          errors: errors2
        };
      }
    }
    return {
      errors: errors2
    };
  }
  const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(rules) });
  const errors = [];
  const rulesKeys = Object.keys(normalizedContext.rules);
  const length = rulesKeys.length;
  for (let i = 0; i < length; i++) {
    const rule = rulesKeys[i];
    const result = await _test(normalizedContext, value, {
      name: rule,
      params: normalizedContext.rules[rule]
    });
    if (result.error) {
      errors.push(result.error);
      if (field.bails) {
        return {
          errors
        };
      }
    }
  }
  return {
    errors
  };
}
function isYupError(err) {
  return !!err && err.name === "ValidationError";
}
function yupToTypedSchema(yupSchema) {
  const schema = {
    __type: "VVTypedSchema",
    async parse(values, context) {
      var _a25;
      try {
        const output = await yupSchema.validate(values, { abortEarly: false, context: (context === null || context === void 0 ? void 0 : context.formData) || {} });
        return {
          output,
          errors: []
        };
      } catch (err) {
        if (!isYupError(err)) {
          throw err;
        }
        if (!((_a25 = err.inner) === null || _a25 === void 0 ? void 0 : _a25.length) && err.errors.length) {
          return { errors: [{ path: err.path, errors: err.errors }] };
        }
        const errors = err.inner.reduce((acc, curr) => {
          const path = curr.path || "";
          if (!acc[path]) {
            acc[path] = { errors: [], path };
          }
          acc[path].errors.push(...curr.errors);
          return acc;
        }, {});
        return { errors: Object.values(errors) };
      }
    }
  };
  return schema;
}
async function validateFieldWithTypedSchema(value, context) {
  const typedSchema = isTypedSchema(context.rules) ? context.rules : yupToTypedSchema(context.rules);
  const result = await typedSchema.parse(value, { formData: context.formData });
  const messages2 = [];
  for (const error of result.errors) {
    if (error.errors.length) {
      messages2.push(...error.errors);
    }
  }
  return {
    value: result.value,
    errors: messages2
  };
}
async function _test(field, value, rule) {
  const validator = resolveRule(rule.name);
  if (!validator) {
    throw new Error(`No such validator '${rule.name}' exists.`);
  }
  const params = fillTargetValues(rule.params, field.formData);
  const ctx = {
    field: field.label || field.name,
    name: field.name,
    label: field.label,
    value,
    form: field.formData,
    rule: Object.assign(Object.assign({}, rule), { params })
  };
  const result = await validator(value, params, ctx);
  if (typeof result === "string") {
    return {
      error: result
    };
  }
  return {
    error: result ? void 0 : _generateFieldError(ctx)
  };
}
function _generateFieldError(fieldCtx) {
  const message2 = getConfig().generateMessage;
  if (!message2) {
    return "Field is invalid";
  }
  return message2(fieldCtx);
}
function fillTargetValues(params, crossTable) {
  const normalize = (value) => {
    if (isLocator(value)) {
      return value(crossTable);
    }
    return value;
  };
  if (Array.isArray(params)) {
    return params.map(normalize);
  }
  return Object.keys(params).reduce((acc, param) => {
    acc[param] = normalize(params[param]);
    return acc;
  }, {});
}
async function validateTypedSchema(schema, values) {
  const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
  const validationResult = await typedSchema.parse(klona(values), { formData: klona(values) });
  const results = {};
  const errors = {};
  for (const error of validationResult.errors) {
    const messages2 = error.errors;
    const path = (error.path || "").replace(/\["(\d+)"\]/g, (_2, m) => {
      return `[${m}]`;
    });
    results[path] = { valid: !messages2.length, errors: messages2 };
    if (messages2.length) {
      errors[path] = messages2[0];
    }
  }
  return {
    valid: !validationResult.errors.length,
    results,
    errors,
    values: validationResult.value,
    source: "schema"
  };
}
async function validateObjectSchema(schema, values, opts) {
  const paths = keysOf(schema);
  const validations = paths.map(async (path) => {
    var _a25, _b25, _c;
    const strings = (_a25 = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a25 === void 0 ? void 0 : _a25[path];
    const fieldResult = await validate$1(getFromPath(values, path), schema[path], {
      name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
      label: strings === null || strings === void 0 ? void 0 : strings.label,
      values,
      bails: (_c = (_b25 = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b25 === void 0 ? void 0 : _b25[path]) !== null && _c !== void 0 ? _c : true
    });
    return Object.assign(Object.assign({}, fieldResult), { path });
  });
  let isAllValid = true;
  const validationResults = await Promise.all(validations);
  const results = {};
  const errors = {};
  for (const result of validationResults) {
    results[result.path] = {
      valid: result.valid,
      errors: result.errors
    };
    if (!result.valid) {
      isAllValid = false;
      errors[result.path] = result.errors[0];
    }
  }
  return {
    valid: isAllValid,
    results,
    errors,
    source: "schema"
  };
}
let ID_COUNTER = 0;
function useFieldState(path, init) {
  const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, init.form);
  if (!init.form) {
    let setState2 = function(state2) {
      var _a25;
      if ("value" in state2) {
        value.value = state2.value;
      }
      if ("errors" in state2) {
        setErrors(state2.errors);
      }
      if ("touched" in state2) {
        meta.touched = (_a25 = state2.touched) !== null && _a25 !== void 0 ? _a25 : meta.touched;
      }
      if ("initialValue" in state2) {
        setInitialValue(state2.initialValue);
      }
    };
    const { errors: errors2, setErrors } = createFieldErrors();
    const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
    const meta = createFieldMeta(value, initialValue, errors2, init.schema);
    return {
      id,
      path,
      value,
      initialValue,
      meta,
      flags: { pendingUnmount: { [id]: false }, pendingReset: false },
      errors: errors2,
      setState: setState2
    };
  }
  const state = init.form.createPathState(path, {
    bails: init.bails,
    label: init.label,
    type: init.type,
    validate: init.validate,
    schema: init.schema
  });
  const errors = computed(() => state.errors);
  function setState(state2) {
    var _a25, _b25, _c;
    if ("value" in state2) {
      value.value = state2.value;
    }
    if ("errors" in state2) {
      (_a25 = init.form) === null || _a25 === void 0 ? void 0 : _a25.setFieldError(unref(path), state2.errors);
    }
    if ("touched" in state2) {
      (_b25 = init.form) === null || _b25 === void 0 ? void 0 : _b25.setFieldTouched(unref(path), (_c = state2.touched) !== null && _c !== void 0 ? _c : false);
    }
    if ("initialValue" in state2) {
      setInitialValue(state2.initialValue);
    }
  }
  return {
    id: Array.isArray(state.id) ? state.id[state.id.length - 1] : state.id,
    path,
    value,
    errors,
    meta: state,
    initialValue,
    flags: state.__flags,
    setState
  };
}
function _useFieldValue(path, modelValue, form) {
  const modelRef = ref(unref(modelValue));
  function resolveInitialValue2() {
    if (!form) {
      return unref(modelRef);
    }
    return getFromPath(form.initialValues.value, unref(path), unref(modelRef));
  }
  function setInitialValue(value2) {
    if (!form) {
      modelRef.value = value2;
      return;
    }
    form.setFieldInitialValue(unref(path), value2, true);
  }
  const initialValue = computed(resolveInitialValue2);
  if (!form) {
    const value2 = ref(resolveInitialValue2());
    return {
      value: value2,
      initialValue,
      setInitialValue
    };
  }
  const currentValue = resolveModelValue(modelValue, form, initialValue, path);
  form.stageInitialValue(unref(path), currentValue, true);
  const value = computed({
    get() {
      return getFromPath(form.values, unref(path));
    },
    set(newVal) {
      form.setFieldValue(unref(path), newVal, false);
    }
  });
  return {
    value,
    initialValue,
    setInitialValue
  };
}
function resolveModelValue(modelValue, form, initialValue, path) {
  if (isRef$1(modelValue)) {
    return unref(modelValue);
  }
  if (modelValue !== void 0) {
    return modelValue;
  }
  return getFromPath(form.values, unref(path), unref(initialValue));
}
function createFieldMeta(currentValue, initialValue, errors, schema) {
  const isRequired = computed(() => {
    var _a25, _b25, _c;
    return (_c = (_b25 = (_a25 = toValue(schema)) === null || _a25 === void 0 ? void 0 : _a25.describe) === null || _b25 === void 0 ? void 0 : _b25.call(_a25).required) !== null && _c !== void 0 ? _c : false;
  });
  const meta = reactive({
    touched: false,
    pending: false,
    valid: true,
    required: isRequired,
    validated: !!unref(errors).length,
    initialValue: computed(() => unref(initialValue)),
    dirty: computed(() => {
      return !isEqual(unref(currentValue), unref(initialValue));
    })
  });
  watch(errors, (value) => {
    meta.valid = !value.length;
  }, {
    immediate: true,
    flush: "sync"
  });
  return meta;
}
function createFieldErrors() {
  const errors = ref([]);
  return {
    errors,
    setErrors: (messages2) => {
      errors.value = normalizeErrorItem(messages2);
    }
  };
}
function useField(path, rules, opts) {
  if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
    return useFieldWithChecked(path, rules, opts);
  }
  return _useField(path, rules, opts);
}
function _useField(path, rules, opts) {
  const { initialValue: modelValue, validateOnMount, bails, type, checkedValue, label, validateOnValueUpdate, uncheckedValue, controlled, keepValueOnUnmount, syncVModel, form: controlForm } = normalizeOptions(opts);
  const injectedForm = controlled ? injectWithSelf(FormContextKey) : void 0;
  const form = controlForm || injectedForm;
  const name = computed(() => normalizeFormPath(toValue(path)));
  const validator = computed(() => {
    const schema = toValue(form === null || form === void 0 ? void 0 : form.schema);
    if (schema) {
      return void 0;
    }
    const rulesValue = unref(rules);
    if (isYupValidator(rulesValue) || isTypedSchema(rulesValue) || isCallable$1(rulesValue) || Array.isArray(rulesValue)) {
      return rulesValue;
    }
    return normalizeRules(rulesValue);
  });
  const isTyped = !isCallable$1(validator.value) && isTypedSchema(toValue(rules));
  const { id, value, initialValue, meta, setState, errors, flags } = useFieldState(name, {
    modelValue,
    form,
    bails,
    label,
    type,
    validate: validator.value ? validate$1$1 : void 0,
    schema: isTyped ? rules : void 0
  });
  const errorMessage = computed(() => errors.value[0]);
  if (syncVModel) {
    useVModel({
      value,
      prop: syncVModel,
      handleChange,
      shouldValidate: () => validateOnValueUpdate && !flags.pendingReset
    });
  }
  const handleBlur = (evt, shouldValidate = false) => {
    meta.touched = true;
    if (shouldValidate) {
      validateWithStateMutation();
    }
  };
  async function validateCurrentValue(mode) {
    var _a25, _b25;
    if (form === null || form === void 0 ? void 0 : form.validateSchema) {
      const { results } = await form.validateSchema(mode);
      return (_a25 = results[toValue(name)]) !== null && _a25 !== void 0 ? _a25 : { valid: true, errors: [] };
    }
    if (validator.value) {
      return validate$1(value.value, validator.value, {
        name: toValue(name),
        label: toValue(label),
        values: (_b25 = form === null || form === void 0 ? void 0 : form.values) !== null && _b25 !== void 0 ? _b25 : {},
        bails
      });
    }
    return { valid: true, errors: [] };
  }
  const validateWithStateMutation = withLatest(async () => {
    meta.pending = true;
    meta.validated = true;
    return validateCurrentValue("validated-only");
  }, (result) => {
    if (flags.pendingUnmount[field.id]) {
      return result;
    }
    setState({ errors: result.errors });
    meta.pending = false;
    meta.valid = result.valid;
    return result;
  });
  const validateValidStateOnly = withLatest(async () => {
    return validateCurrentValue("silent");
  }, (result) => {
    meta.valid = result.valid;
    return result;
  });
  function validate$1$1(opts2) {
    if ((opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) === "silent") {
      return validateValidStateOnly();
    }
    return validateWithStateMutation();
  }
  function handleChange(e, shouldValidate = true) {
    const newValue = normalizeEventValue(e);
    setValue(newValue, shouldValidate);
  }
  onMounted(() => {
    if (validateOnMount) {
      return validateWithStateMutation();
    }
    if (!form || !form.validateSchema) {
      validateValidStateOnly();
    }
  });
  function setTouched(isTouched) {
    meta.touched = isTouched;
  }
  function resetField(state) {
    var _a25;
    const newValue = state && "value" in state ? state.value : initialValue.value;
    setState({
      value: klona(newValue),
      initialValue: klona(newValue),
      touched: (_a25 = state === null || state === void 0 ? void 0 : state.touched) !== null && _a25 !== void 0 ? _a25 : false,
      errors: (state === null || state === void 0 ? void 0 : state.errors) || []
    });
    meta.pending = false;
    meta.validated = false;
    validateValidStateOnly();
  }
  const vm = getCurrentInstance();
  function setValue(newValue, shouldValidate = true) {
    value.value = vm && syncVModel ? applyModelModifiers(newValue, vm.props.modelModifiers) : newValue;
    const validateFn = shouldValidate ? validateWithStateMutation : validateValidStateOnly;
    validateFn();
  }
  function setErrors(errors2) {
    setState({ errors: Array.isArray(errors2) ? errors2 : [errors2] });
  }
  const valueProxy = computed({
    get() {
      return value.value;
    },
    set(newValue) {
      setValue(newValue, validateOnValueUpdate);
    }
  });
  const field = {
    id,
    name,
    label,
    value: valueProxy,
    meta,
    errors,
    errorMessage,
    type,
    checkedValue,
    uncheckedValue,
    bails,
    keepValueOnUnmount,
    resetField,
    handleReset: () => resetField(),
    validate: validate$1$1,
    handleChange,
    handleBlur,
    setState,
    setTouched,
    setErrors,
    setValue
  };
  provide(FieldContextKey, field);
  if (isRef$1(rules) && typeof unref(rules) !== "function") {
    watch(rules, (value2, oldValue) => {
      if (isEqual(value2, oldValue)) {
        return;
      }
      meta.validated ? validateWithStateMutation() : validateValidStateOnly();
    }, {
      deep: true
    });
  }
  if (!form) {
    return field;
  }
  const dependencies = computed(() => {
    const rulesVal = validator.value;
    if (!rulesVal || isCallable$1(rulesVal) || isYupValidator(rulesVal) || isTypedSchema(rulesVal) || Array.isArray(rulesVal)) {
      return {};
    }
    return Object.keys(rulesVal).reduce((acc, rule) => {
      const deps = extractLocators(rulesVal[rule]).map((dep) => dep.__locatorRef).reduce((depAcc, depName) => {
        const depValue = getFromPath(form.values, depName) || form.values[depName];
        if (depValue !== void 0) {
          depAcc[depName] = depValue;
        }
        return depAcc;
      }, {});
      Object.assign(acc, deps);
      return acc;
    }, {});
  });
  watch(dependencies, (deps, oldDeps) => {
    if (!Object.keys(deps).length) {
      return;
    }
    const shouldValidate = !isEqual(deps, oldDeps);
    if (shouldValidate) {
      meta.validated ? validateWithStateMutation() : validateValidStateOnly();
    }
  });
  onBeforeUnmount(() => {
    var _a25;
    const shouldKeepValue = (_a25 = toValue(field.keepValueOnUnmount)) !== null && _a25 !== void 0 ? _a25 : toValue(form.keepValuesOnUnmount);
    const path2 = toValue(name);
    if (shouldKeepValue || !form || flags.pendingUnmount[field.id]) {
      form === null || form === void 0 ? void 0 : form.removePathState(path2, id);
      return;
    }
    flags.pendingUnmount[field.id] = true;
    const pathState = form.getPathState(path2);
    const matchesId = Array.isArray(pathState === null || pathState === void 0 ? void 0 : pathState.id) && (pathState === null || pathState === void 0 ? void 0 : pathState.multiple) ? pathState === null || pathState === void 0 ? void 0 : pathState.id.includes(field.id) : (pathState === null || pathState === void 0 ? void 0 : pathState.id) === field.id;
    if (!matchesId) {
      return;
    }
    if ((pathState === null || pathState === void 0 ? void 0 : pathState.multiple) && Array.isArray(pathState.value)) {
      const valueIdx = pathState.value.findIndex((i) => isEqual(i, toValue(field.checkedValue)));
      if (valueIdx > -1) {
        const newVal = [...pathState.value];
        newVal.splice(valueIdx, 1);
        form.setFieldValue(path2, newVal);
      }
      if (Array.isArray(pathState.id)) {
        pathState.id.splice(pathState.id.indexOf(field.id), 1);
      }
    } else {
      form.unsetPathValue(toValue(name));
    }
    form.removePathState(path2, id);
  });
  return field;
}
function normalizeOptions(opts) {
  const defaults = () => ({
    initialValue: void 0,
    validateOnMount: false,
    bails: true,
    label: void 0,
    validateOnValueUpdate: true,
    keepValueOnUnmount: void 0,
    syncVModel: false,
    controlled: true
  });
  const isVModelSynced = !!(opts === null || opts === void 0 ? void 0 : opts.syncVModel);
  const modelPropName = typeof (opts === null || opts === void 0 ? void 0 : opts.syncVModel) === "string" ? opts.syncVModel : (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || "modelValue";
  const initialValue = isVModelSynced && !("initialValue" in (opts || {})) ? getCurrentModelValue(getCurrentInstance(), modelPropName) : opts === null || opts === void 0 ? void 0 : opts.initialValue;
  if (!opts) {
    return Object.assign(Object.assign({}, defaults()), { initialValue });
  }
  const checkedValue = "valueProp" in opts ? opts.valueProp : opts.checkedValue;
  const controlled = "standalone" in opts ? !opts.standalone : opts.controlled;
  const syncVModel = (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || (opts === null || opts === void 0 ? void 0 : opts.syncVModel) || false;
  return Object.assign(Object.assign(Object.assign({}, defaults()), opts || {}), {
    initialValue,
    controlled: controlled !== null && controlled !== void 0 ? controlled : true,
    checkedValue,
    syncVModel
  });
}
function useFieldWithChecked(name, rules, opts) {
  const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone) ? injectWithSelf(FormContextKey) : void 0;
  const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue;
  const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue;
  function patchCheckedApi(field) {
    const handleChange = field.handleChange;
    const checked = computed(() => {
      const currentValue = toValue(field.value);
      const checkedVal = toValue(checkedValue);
      return Array.isArray(currentValue) ? currentValue.findIndex((v) => isEqual(v, checkedVal)) >= 0 : isEqual(checkedVal, currentValue);
    });
    function handleCheckboxChange(e, shouldValidate = true) {
      var _a25, _b25;
      if (checked.value === ((_a25 = e === null || e === void 0 ? void 0 : e.target) === null || _a25 === void 0 ? void 0 : _a25.checked)) {
        if (shouldValidate) {
          field.validate();
        }
        return;
      }
      const path = toValue(name);
      const pathState = form === null || form === void 0 ? void 0 : form.getPathState(path);
      const value = normalizeEventValue(e);
      let newValue = (_b25 = toValue(checkedValue)) !== null && _b25 !== void 0 ? _b25 : value;
      if (form && (pathState === null || pathState === void 0 ? void 0 : pathState.multiple) && pathState.type === "checkbox") {
        newValue = resolveNextCheckboxValue(getFromPath(form.values, path) || [], newValue, void 0);
      } else if ((opts === null || opts === void 0 ? void 0 : opts.type) === "checkbox") {
        newValue = resolveNextCheckboxValue(toValue(field.value), newValue, toValue(uncheckedValue));
      }
      handleChange(newValue, shouldValidate);
    }
    return Object.assign(Object.assign({}, field), {
      checked,
      checkedValue,
      uncheckedValue,
      handleChange: handleCheckboxChange
    });
  }
  return patchCheckedApi(_useField(name, rules, opts));
}
function useVModel({ prop, value, handleChange, shouldValidate }) {
  const vm = getCurrentInstance();
  if (!vm || !prop) {
    return;
  }
  const propName = typeof prop === "string" ? prop : "modelValue";
  const emitName = `update:${propName}`;
  if (!(propName in vm.props)) {
    return;
  }
  watch(value, (newValue) => {
    if (isEqual(newValue, getCurrentModelValue(vm, propName))) {
      return;
    }
    vm.emit(emitName, newValue);
  });
  watch(() => getCurrentModelValue(vm, propName), (propValue) => {
    if (propValue === IS_ABSENT && value.value === void 0) {
      return;
    }
    const newValue = propValue === IS_ABSENT ? void 0 : propValue;
    if (isEqual(newValue, value.value)) {
      return;
    }
    handleChange(newValue, shouldValidate());
  });
}
function getCurrentModelValue(vm, propName) {
  if (!vm) {
    return void 0;
  }
  return vm.props[propName];
}
let FORM_COUNTER = 0;
const PRIVATE_PATH_STATE_KEYS = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function resolveInitialValues(opts) {
  const givenInitial = (opts === null || opts === void 0 ? void 0 : opts.initialValues) || {};
  const providedValues = Object.assign({}, toValue(givenInitial));
  const schema = unref(opts === null || opts === void 0 ? void 0 : opts.validationSchema);
  if (schema && isTypedSchema(schema) && isCallable$1(schema.cast)) {
    return klona(schema.cast(providedValues) || {});
  }
  return klona(providedValues);
}
function useForm(opts) {
  var _a25;
  const formId = FORM_COUNTER++;
  const name = (opts === null || opts === void 0 ? void 0 : opts.name) || "Form";
  let FIELD_ID_COUNTER = 0;
  const isSubmitting = ref(false);
  const isValidating = ref(false);
  const submitCount = ref(0);
  const fieldArrays = [];
  const formValues = reactive(resolveInitialValues(opts));
  const pathStates = ref([]);
  const extraErrorsBag = ref({});
  const pathStateLookup = ref({});
  const rebuildPathLookup = debounceNextTick(() => {
    pathStateLookup.value = pathStates.value.reduce((names, state) => {
      names[normalizeFormPath(toValue(state.path))] = state;
      return names;
    }, {});
  });
  function setFieldError(field, message2) {
    const state = findPathState(field);
    if (!state) {
      if (typeof field === "string") {
        extraErrorsBag.value[normalizeFormPath(field)] = normalizeErrorItem(message2);
      }
      return;
    }
    if (typeof field === "string") {
      const normalizedPath = normalizeFormPath(field);
      if (extraErrorsBag.value[normalizedPath]) {
        delete extraErrorsBag.value[normalizedPath];
      }
    }
    state.errors = normalizeErrorItem(message2);
    state.valid = !state.errors.length;
  }
  function setErrors(paths) {
    keysOf(paths).forEach((path) => {
      setFieldError(path, paths[path]);
    });
  }
  if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
    setErrors(opts.initialErrors);
  }
  const errorBag = computed(() => {
    const pathErrors = pathStates.value.reduce((acc, state) => {
      if (state.errors.length) {
        acc[toValue(state.path)] = state.errors;
      }
      return acc;
    }, {});
    return Object.assign(Object.assign({}, extraErrorsBag.value), pathErrors);
  });
  const errors = computed(() => {
    return keysOf(errorBag.value).reduce((acc, key) => {
      const errors2 = errorBag.value[key];
      if (errors2 === null || errors2 === void 0 ? void 0 : errors2.length) {
        acc[key] = errors2[0];
      }
      return acc;
    }, {});
  });
  const fieldNames = computed(() => {
    return pathStates.value.reduce((names, state) => {
      names[toValue(state.path)] = { name: toValue(state.path) || "", label: state.label || "" };
      return names;
    }, {});
  });
  const fieldBailsMap = computed(() => {
    return pathStates.value.reduce((map, state) => {
      var _a26;
      map[toValue(state.path)] = (_a26 = state.bails) !== null && _a26 !== void 0 ? _a26 : true;
      return map;
    }, {});
  });
  const initialErrors = Object.assign({}, (opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {});
  const keepValuesOnUnmount = (_a25 = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null && _a25 !== void 0 ? _a25 : false;
  const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(pathStates, formValues, opts);
  const meta = useFormMeta(pathStates, formValues, originalInitialValues, errors);
  const controlledValues = computed(() => {
    return pathStates.value.reduce((acc, state) => {
      const value = getFromPath(formValues, toValue(state.path));
      setInPath(acc, toValue(state.path), value);
      return acc;
    }, {});
  });
  const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
  function createPathState(path, config) {
    var _a26, _b25;
    const initialValue = computed(() => getFromPath(initialValues.value, toValue(path)));
    const pathStateExists = pathStateLookup.value[toValue(path)];
    const isCheckboxOrRadio = (config === null || config === void 0 ? void 0 : config.type) === "checkbox" || (config === null || config === void 0 ? void 0 : config.type) === "radio";
    if (pathStateExists && isCheckboxOrRadio) {
      pathStateExists.multiple = true;
      const id2 = FIELD_ID_COUNTER++;
      if (Array.isArray(pathStateExists.id)) {
        pathStateExists.id.push(id2);
      } else {
        pathStateExists.id = [pathStateExists.id, id2];
      }
      pathStateExists.fieldsCount++;
      pathStateExists.__flags.pendingUnmount[id2] = false;
      return pathStateExists;
    }
    const currentValue = computed(() => getFromPath(formValues, toValue(path)));
    const pathValue = toValue(path);
    const unsetBatchIndex = UNSET_BATCH.findIndex((_path) => _path === pathValue);
    if (unsetBatchIndex !== -1) {
      UNSET_BATCH.splice(unsetBatchIndex, 1);
    }
    const isRequired = computed(() => {
      var _a32, _b26, _c, _d;
      const schemaValue = toValue(schema);
      if (isTypedSchema(schemaValue)) {
        return (_b26 = (_a32 = schemaValue.describe) === null || _a32 === void 0 ? void 0 : _a32.call(schemaValue, toValue(path)).required) !== null && _b26 !== void 0 ? _b26 : false;
      }
      const configSchemaValue = toValue(config === null || config === void 0 ? void 0 : config.schema);
      if (isTypedSchema(configSchemaValue)) {
        return (_d = (_c = configSchemaValue.describe) === null || _c === void 0 ? void 0 : _c.call(configSchemaValue).required) !== null && _d !== void 0 ? _d : false;
      }
      return false;
    });
    const id = FIELD_ID_COUNTER++;
    const state = reactive({
      id,
      path,
      touched: false,
      pending: false,
      valid: true,
      validated: !!((_a26 = initialErrors[pathValue]) === null || _a26 === void 0 ? void 0 : _a26.length),
      required: isRequired,
      initialValue,
      errors: shallowRef([]),
      bails: (_b25 = config === null || config === void 0 ? void 0 : config.bails) !== null && _b25 !== void 0 ? _b25 : false,
      label: config === null || config === void 0 ? void 0 : config.label,
      type: (config === null || config === void 0 ? void 0 : config.type) || "default",
      value: currentValue,
      multiple: false,
      __flags: {
        pendingUnmount: { [id]: false },
        pendingReset: false
      },
      fieldsCount: 1,
      validate: config === null || config === void 0 ? void 0 : config.validate,
      dirty: computed(() => {
        return !isEqual(unref(currentValue), unref(initialValue));
      })
    });
    pathStates.value.push(state);
    pathStateLookup.value[pathValue] = state;
    rebuildPathLookup();
    if (errors.value[pathValue] && !initialErrors[pathValue]) {
      nextTick(() => {
        validateField(pathValue, { mode: "silent" });
      });
    }
    if (isRef$1(path)) {
      watch(path, (newPath) => {
        rebuildPathLookup();
        const nextValue = klona(currentValue.value);
        pathStateLookup.value[newPath] = state;
        nextTick(() => {
          setInPath(formValues, newPath, nextValue);
        });
      });
    }
    return state;
  }
  const debouncedSilentValidation = debounceAsync(_validateSchema, 5);
  const debouncedValidation = debounceAsync(_validateSchema, 5);
  const validateSchema = withLatest(async (mode) => {
    return await (mode === "silent" ? debouncedSilentValidation() : debouncedValidation());
  }, (formResult, [mode]) => {
    const currentErrorsPaths = keysOf(formCtx.errorBag.value);
    const paths = [
      .../* @__PURE__ */ new Set([...keysOf(formResult.results), ...pathStates.value.map((p) => p.path), ...currentErrorsPaths])
    ].sort();
    const results = paths.reduce((validation, _path) => {
      var _a26;
      const expectedPath = _path;
      const pathState = findPathState(expectedPath) || findHoistedPath(expectedPath);
      const messages2 = ((_a26 = formResult.results[expectedPath]) === null || _a26 === void 0 ? void 0 : _a26.errors) || [];
      const path = toValue(pathState === null || pathState === void 0 ? void 0 : pathState.path) || expectedPath;
      const fieldResult = mergeValidationResults({ errors: messages2, valid: !messages2.length }, validation.results[path]);
      validation.results[path] = fieldResult;
      if (!fieldResult.valid) {
        validation.errors[path] = fieldResult.errors[0];
      }
      if (pathState && extraErrorsBag.value[path]) {
        delete extraErrorsBag.value[path];
      }
      if (!pathState) {
        setFieldError(path, messages2);
        return validation;
      }
      pathState.valid = fieldResult.valid;
      if (mode === "silent") {
        return validation;
      }
      if (mode === "validated-only" && !pathState.validated) {
        return validation;
      }
      setFieldError(pathState, fieldResult.errors);
      return validation;
    }, {
      valid: formResult.valid,
      results: {},
      errors: {},
      source: formResult.source
    });
    if (formResult.values) {
      results.values = formResult.values;
      results.source = formResult.source;
    }
    keysOf(results.results).forEach((path) => {
      var _a26;
      const pathState = findPathState(path);
      if (!pathState) {
        return;
      }
      if (mode === "silent") {
        return;
      }
      if (mode === "validated-only" && !pathState.validated) {
        return;
      }
      setFieldError(pathState, (_a26 = results.results[path]) === null || _a26 === void 0 ? void 0 : _a26.errors);
    });
    return results;
  });
  function mutateAllPathState(mutation) {
    pathStates.value.forEach(mutation);
  }
  function findPathState(path) {
    const normalizedPath = typeof path === "string" ? normalizeFormPath(path) : path;
    const pathState = typeof normalizedPath === "string" ? pathStateLookup.value[normalizedPath] : normalizedPath;
    return pathState;
  }
  function findHoistedPath(path) {
    const candidates = pathStates.value.filter((state) => path.startsWith(toValue(state.path)));
    return candidates.reduce((bestCandidate, candidate) => {
      if (!bestCandidate) {
        return candidate;
      }
      return candidate.path.length > bestCandidate.path.length ? candidate : bestCandidate;
    }, void 0);
  }
  let UNSET_BATCH = [];
  let PENDING_UNSET;
  function unsetPathValue(path) {
    UNSET_BATCH.push(path);
    if (!PENDING_UNSET) {
      PENDING_UNSET = nextTick(() => {
        const sortedPaths = [...UNSET_BATCH].sort().reverse();
        sortedPaths.forEach((p) => {
          unsetPath(formValues, p);
        });
        UNSET_BATCH = [];
        PENDING_UNSET = null;
      });
    }
    return PENDING_UNSET;
  }
  function makeSubmissionFactory(onlyControlled) {
    return function submitHandlerFactory(fn, onValidationError) {
      return function submissionHandler(e) {
        if (e instanceof Event) {
          e.preventDefault();
          e.stopPropagation();
        }
        mutateAllPathState((s) => s.touched = true);
        isSubmitting.value = true;
        submitCount.value++;
        return validate2().then((result) => {
          const values = klona(formValues);
          if (result.valid && typeof fn === "function") {
            const controlled = klona(controlledValues.value);
            let submittedValues = onlyControlled ? controlled : values;
            if (result.values) {
              submittedValues = result.source === "schema" ? result.values : Object.assign({}, submittedValues, result.values);
            }
            return fn(submittedValues, {
              evt: e,
              controlledValues: controlled,
              setErrors,
              setFieldError,
              setTouched,
              setFieldTouched,
              setValues,
              setFieldValue,
              resetForm,
              resetField
            });
          }
          if (!result.valid && typeof onValidationError === "function") {
            onValidationError({
              values,
              evt: e,
              errors: result.errors,
              results: result.results
            });
          }
        }).then((returnVal) => {
          isSubmitting.value = false;
          return returnVal;
        }, (err) => {
          isSubmitting.value = false;
          throw err;
        });
      };
    };
  }
  const handleSubmitImpl = makeSubmissionFactory(false);
  const handleSubmit = handleSubmitImpl;
  handleSubmit.withControlled = makeSubmissionFactory(true);
  function removePathState(path, id) {
    const idx = pathStates.value.findIndex((s) => {
      return s.path === path && (Array.isArray(s.id) ? s.id.includes(id) : s.id === id);
    });
    const pathState = pathStates.value[idx];
    if (idx === -1 || !pathState) {
      return;
    }
    nextTick(() => {
      validateField(path, { mode: "silent", warn: false });
    });
    if (pathState.multiple && pathState.fieldsCount) {
      pathState.fieldsCount--;
    }
    if (Array.isArray(pathState.id)) {
      const idIndex = pathState.id.indexOf(id);
      if (idIndex >= 0) {
        pathState.id.splice(idIndex, 1);
      }
      delete pathState.__flags.pendingUnmount[id];
    }
    if (!pathState.multiple || pathState.fieldsCount <= 0) {
      pathStates.value.splice(idx, 1);
      unsetInitialValue(path);
      rebuildPathLookup();
      delete pathStateLookup.value[path];
    }
  }
  function destroyPath(path) {
    keysOf(pathStateLookup.value).forEach((key) => {
      if (key.startsWith(path)) {
        delete pathStateLookup.value[key];
      }
    });
    pathStates.value = pathStates.value.filter((s) => !s.path.startsWith(path));
    nextTick(() => {
      rebuildPathLookup();
    });
  }
  const formCtx = {
    name,
    formId,
    values: formValues,
    controlledValues,
    errorBag,
    errors,
    schema,
    submitCount,
    meta,
    isSubmitting,
    isValidating,
    fieldArrays,
    keepValuesOnUnmount,
    validateSchema: unref(schema) ? validateSchema : void 0,
    validate: validate2,
    setFieldError,
    validateField,
    setFieldValue,
    setValues,
    setErrors,
    setFieldTouched,
    setTouched,
    resetForm,
    resetField,
    handleSubmit,
    useFieldModel,
    defineInputBinds,
    defineComponentBinds,
    defineField,
    stageInitialValue,
    unsetInitialValue,
    setFieldInitialValue,
    createPathState,
    getPathState: findPathState,
    unsetPathValue,
    removePathState,
    initialValues,
    getAllPathStates: () => pathStates.value,
    destroyPath,
    isFieldTouched,
    isFieldDirty,
    isFieldValid
  };
  function setFieldValue(field, value, shouldValidate = true) {
    const clonedValue = klona(value);
    const path = typeof field === "string" ? field : field.path;
    const pathState = findPathState(path);
    if (!pathState) {
      createPathState(path);
    }
    setInPath(formValues, path, clonedValue);
    if (shouldValidate) {
      validateField(path);
    }
  }
  function forceSetValues(fields, shouldValidate = true) {
    keysOf(formValues).forEach((key) => {
      delete formValues[key];
    });
    keysOf(fields).forEach((path) => {
      setFieldValue(path, fields[path], false);
    });
    if (shouldValidate) {
      validate2();
    }
  }
  function setValues(fields, shouldValidate = true) {
    merge$1(formValues, fields);
    fieldArrays.forEach((f) => f && f.reset());
    if (shouldValidate) {
      validate2();
    }
  }
  function createModel(path, shouldValidate) {
    const pathState = findPathState(toValue(path)) || createPathState(path);
    return computed({
      get() {
        return pathState.value;
      },
      set(value) {
        var _a26;
        const pathValue = toValue(path);
        setFieldValue(pathValue, value, (_a26 = toValue(shouldValidate)) !== null && _a26 !== void 0 ? _a26 : false);
      }
    });
  }
  function setFieldTouched(field, isTouched) {
    const pathState = findPathState(field);
    if (pathState) {
      pathState.touched = isTouched;
    }
  }
  function isFieldTouched(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.touched;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.touched);
  }
  function isFieldDirty(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.dirty;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.dirty);
  }
  function isFieldValid(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.valid;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).every((s) => s.valid);
  }
  function setTouched(fields) {
    if (typeof fields === "boolean") {
      mutateAllPathState((state) => {
        state.touched = fields;
      });
      return;
    }
    keysOf(fields).forEach((field) => {
      setFieldTouched(field, !!fields[field]);
    });
  }
  function resetField(field, state) {
    var _a26;
    const newValue = state && "value" in state ? state.value : getFromPath(initialValues.value, field);
    const pathState = findPathState(field);
    if (pathState) {
      pathState.__flags.pendingReset = true;
    }
    setFieldInitialValue(field, klona(newValue), true);
    setFieldValue(field, newValue, false);
    setFieldTouched(field, (_a26 = state === null || state === void 0 ? void 0 : state.touched) !== null && _a26 !== void 0 ? _a26 : false);
    setFieldError(field, (state === null || state === void 0 ? void 0 : state.errors) || []);
    nextTick(() => {
      if (pathState) {
        pathState.__flags.pendingReset = false;
      }
    });
  }
  function resetForm(resetState, opts2) {
    let newValues = klona((resetState === null || resetState === void 0 ? void 0 : resetState.values) ? resetState.values : originalInitialValues.value);
    newValues = (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) ? newValues : merge$1(originalInitialValues.value, newValues);
    newValues = isTypedSchema(schema) && isCallable$1(schema.cast) ? schema.cast(newValues) : newValues;
    setInitialValues(newValues, { force: opts2 === null || opts2 === void 0 ? void 0 : opts2.force });
    mutateAllPathState((state) => {
      var _a26;
      state.__flags.pendingReset = true;
      state.validated = false;
      state.touched = ((_a26 = resetState === null || resetState === void 0 ? void 0 : resetState.touched) === null || _a26 === void 0 ? void 0 : _a26[toValue(state.path)]) || false;
      setFieldValue(toValue(state.path), getFromPath(newValues, toValue(state.path)), false);
      setFieldError(toValue(state.path), void 0);
    });
    (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) ? forceSetValues(newValues, false) : setValues(newValues, false);
    setErrors((resetState === null || resetState === void 0 ? void 0 : resetState.errors) || {});
    submitCount.value = (resetState === null || resetState === void 0 ? void 0 : resetState.submitCount) || 0;
    nextTick(() => {
      validate2({ mode: "silent" });
      mutateAllPathState((state) => {
        state.__flags.pendingReset = false;
      });
    });
  }
  async function validate2(opts2) {
    const mode = (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || "force";
    if (mode === "force") {
      mutateAllPathState((f) => f.validated = true);
    }
    if (formCtx.validateSchema) {
      return formCtx.validateSchema(mode);
    }
    isValidating.value = true;
    const validations = await Promise.all(pathStates.value.map((state) => {
      if (!state.validate) {
        return Promise.resolve({
          key: toValue(state.path),
          valid: true,
          errors: [],
          value: void 0
        });
      }
      return state.validate(opts2).then((result) => {
        return {
          key: toValue(state.path),
          valid: result.valid,
          errors: result.errors,
          value: result.value
        };
      });
    }));
    isValidating.value = false;
    const results = {};
    const errors2 = {};
    const values = {};
    for (const validation of validations) {
      results[validation.key] = {
        valid: validation.valid,
        errors: validation.errors
      };
      if (validation.value) {
        setInPath(values, validation.key, validation.value);
      }
      if (validation.errors.length) {
        errors2[validation.key] = validation.errors[0];
      }
    }
    return {
      valid: validations.every((r) => r.valid),
      results,
      errors: errors2,
      values,
      source: "fields"
    };
  }
  async function validateField(path, opts2) {
    var _a26;
    const state = findPathState(path);
    if (state && (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) !== "silent") {
      state.validated = true;
    }
    if (schema) {
      const { results } = await validateSchema((opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || "validated-only");
      return results[path] || { errors: [], valid: true };
    }
    if (state === null || state === void 0 ? void 0 : state.validate) {
      return state.validate(opts2);
    }
    !state && ((_a26 = opts2 === null || opts2 === void 0 ? void 0 : opts2.warn) !== null && _a26 !== void 0 ? _a26 : true);
    return Promise.resolve({ errors: [], valid: true });
  }
  function unsetInitialValue(path) {
    unsetPath(initialValues.value, path);
  }
  function stageInitialValue(path, value, updateOriginal = false) {
    setFieldInitialValue(path, value);
    setInPath(formValues, path, value);
    if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
      setInPath(originalInitialValues.value, path, klona(value));
    }
  }
  function setFieldInitialValue(path, value, updateOriginal = false) {
    setInPath(initialValues.value, path, klona(value));
    if (updateOriginal) {
      setInPath(originalInitialValues.value, path, klona(value));
    }
  }
  async function _validateSchema() {
    const schemaValue = unref(schema);
    if (!schemaValue) {
      return { valid: true, results: {}, errors: {}, source: "none" };
    }
    isValidating.value = true;
    const formResult = isYupValidator(schemaValue) || isTypedSchema(schemaValue) ? await validateTypedSchema(schemaValue, formValues) : await validateObjectSchema(schemaValue, formValues, {
      names: fieldNames.value,
      bailsMap: fieldBailsMap.value
    });
    isValidating.value = false;
    return formResult;
  }
  const submitForm = handleSubmit((_2, { evt }) => {
    if (isFormSubmitEvent(evt)) {
      evt.target.submit();
    }
  });
  onMounted(() => {
    if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
      setErrors(opts.initialErrors);
    }
    if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
      setTouched(opts.initialTouched);
    }
    if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
      validate2();
      return;
    }
    if (formCtx.validateSchema) {
      formCtx.validateSchema("silent");
    }
  });
  if (isRef$1(schema)) {
    watch(schema, () => {
      var _a26;
      (_a26 = formCtx.validateSchema) === null || _a26 === void 0 ? void 0 : _a26.call(formCtx, "validated-only");
    });
  }
  provide(FormContextKey, formCtx);
  function defineField(path, config) {
    const label = isCallable$1(config) ? void 0 : config === null || config === void 0 ? void 0 : config.label;
    const pathState = findPathState(toValue(path)) || createPathState(path, { label });
    const evalConfig = () => isCallable$1(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
    function onBlur() {
      var _a26;
      pathState.touched = true;
      const validateOnBlur = (_a26 = evalConfig().validateOnBlur) !== null && _a26 !== void 0 ? _a26 : getConfig().validateOnBlur;
      if (validateOnBlur) {
        validateField(toValue(pathState.path));
      }
    }
    function onInput() {
      var _a26;
      const validateOnInput = (_a26 = evalConfig().validateOnInput) !== null && _a26 !== void 0 ? _a26 : getConfig().validateOnInput;
      if (validateOnInput) {
        nextTick(() => {
          validateField(toValue(pathState.path));
        });
      }
    }
    function onChange() {
      var _a26;
      const validateOnChange = (_a26 = evalConfig().validateOnChange) !== null && _a26 !== void 0 ? _a26 : getConfig().validateOnChange;
      if (validateOnChange) {
        nextTick(() => {
          validateField(toValue(pathState.path));
        });
      }
    }
    const props = computed(() => {
      const base = {
        onChange,
        onInput,
        onBlur
      };
      if (isCallable$1(config)) {
        return Object.assign(Object.assign({}, base), config(omit(pathState, PRIVATE_PATH_STATE_KEYS)).props || {});
      }
      if (config === null || config === void 0 ? void 0 : config.props) {
        return Object.assign(Object.assign({}, base), config.props(omit(pathState, PRIVATE_PATH_STATE_KEYS)));
      }
      return base;
    });
    const model = createModel(path, () => {
      var _a26, _b25, _c;
      return (_c = (_a26 = evalConfig().validateOnModelUpdate) !== null && _a26 !== void 0 ? _a26 : (_b25 = getConfig()) === null || _b25 === void 0 ? void 0 : _b25.validateOnModelUpdate) !== null && _c !== void 0 ? _c : true;
    });
    return [model, props];
  }
  function useFieldModel(pathOrPaths) {
    if (!Array.isArray(pathOrPaths)) {
      return createModel(pathOrPaths);
    }
    return pathOrPaths.map((p) => createModel(p, true));
  }
  function defineInputBinds(path, config) {
    const [model, props] = defineField(path, config);
    function onBlur() {
      props.value.onBlur();
    }
    function onInput(e) {
      const value = normalizeEventValue(e);
      setFieldValue(toValue(path), value, false);
      props.value.onInput();
    }
    function onChange(e) {
      const value = normalizeEventValue(e);
      setFieldValue(toValue(path), value, false);
      props.value.onChange();
    }
    return computed(() => {
      return Object.assign(Object.assign({}, props.value), {
        onBlur,
        onInput,
        onChange,
        value: model.value
      });
    });
  }
  function defineComponentBinds(path, config) {
    const [model, props] = defineField(path, config);
    const pathState = findPathState(toValue(path));
    function onUpdateModelValue(value) {
      model.value = value;
    }
    return computed(() => {
      const conf = isCallable$1(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
      return Object.assign({ [conf.model || "modelValue"]: model.value, [`onUpdate:${conf.model || "modelValue"}`]: onUpdateModelValue }, props.value);
    });
  }
  const ctx = Object.assign(Object.assign({}, formCtx), { values: readonly(formValues), handleReset: () => resetForm(), submitForm });
  provide(PublicFormContextKey, ctx);
  return ctx;
}
function useFormMeta(pathsState, currentValues, initialValues, errors) {
  const MERGE_STRATEGIES = {
    touched: "some",
    pending: "some",
    valid: "every"
  };
  const isDirty = computed(() => {
    return !isEqual(currentValues, unref(initialValues));
  });
  function calculateFlags() {
    const states = pathsState.value;
    return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
      const mergeMethod = MERGE_STRATEGIES[flag];
      acc[flag] = states[mergeMethod]((s) => s[flag]);
      return acc;
    }, {});
  }
  const flags = reactive(calculateFlags());
  watchEffect(() => {
    const value = calculateFlags();
    flags.touched = value.touched;
    flags.valid = value.valid;
    flags.pending = value.pending;
  });
  return computed(() => {
    return Object.assign(Object.assign({ initialValues: unref(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
  });
}
function useFormInitialValues(pathsState, formValues, opts) {
  const values = resolveInitialValues(opts);
  const initialValues = ref(values);
  const originalInitialValues = ref(klona(values));
  function setInitialValues(values2, opts2) {
    if (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) {
      initialValues.value = klona(values2);
      originalInitialValues.value = klona(values2);
    } else {
      initialValues.value = merge$1(klona(initialValues.value) || {}, klona(values2));
      originalInitialValues.value = merge$1(klona(originalInitialValues.value) || {}, klona(values2));
    }
    if (!(opts2 === null || opts2 === void 0 ? void 0 : opts2.updateFields)) {
      return;
    }
    pathsState.value.forEach((state) => {
      const wasTouched = state.touched;
      if (wasTouched) {
        return;
      }
      const newValue = getFromPath(initialValues.value, toValue(state.path));
      setInPath(formValues, toValue(state.path), klona(newValue));
    });
  }
  return {
    initialValues,
    originalInitialValues,
    setInitialValues
  };
}
function mergeValidationResults(a, b) {
  if (!b) {
    return a;
  }
  return {
    valid: a.valid && b.valid,
    errors: [...a.errors, ...b.errors]
  };
}
/**
  * vee-validate v4.14.7
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function isCallable(fn) {
  return typeof fn === "function";
}
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function merge(target2, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key]) && isPlainObject(target2[key])) {
      if (!target2[key]) {
        target2[key] = {};
      }
      merge(target2[key], source[key]);
      return;
    }
    target2[key] = source[key];
  });
  return target2;
}
function interpolate(template, values, options) {
  const { prefix, suffix } = options;
  const regExp = buildRegex(prefix, suffix);
  return template.replace(regExp, function(_2, param, placeholder) {
    if (!param || !values.params) {
      return placeholder in values ? values[placeholder] : values.params && placeholder in values.params ? values.params[placeholder] : `${prefix}${placeholder}${suffix}`;
    }
    if (!Array.isArray(values.params)) {
      return placeholder in values.params ? values.params[placeholder] : `${prefix}${placeholder}${suffix}`;
    }
    const paramIndex = Number(param.replace(":", ""));
    return paramIndex in values.params ? values.params[paramIndex] : `${param}${prefix}${placeholder}${suffix}`;
  });
}
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildRegex(prefix, suffix) {
  const safePrefix = escapeRegex(prefix);
  const safeSuffix = escapeRegex(suffix);
  return new RegExp(`([0-9]:)?${safePrefix}((?:(?!${safeSuffix}).)+)${safeSuffix}`, "g");
}
class Dictionary {
  constructor(locale, dictionary, interpolateOptions = { prefix: "{", suffix: "}" }) {
    this.container = {};
    this.locale = locale;
    this.interpolateOptions = interpolateOptions;
    this.merge(dictionary);
  }
  resolve(ctx, interpolateOptions) {
    let result = this.format(this.locale, ctx, interpolateOptions);
    if (!result && this.fallbackLocale && this.fallbackLocale !== this.locale) {
      result = this.format(this.fallbackLocale, ctx, interpolateOptions);
    }
    return result || this.getDefaultMessage(this.locale, ctx);
  }
  getDefaultMessage(locale, ctx) {
    const { label, name } = ctx;
    const fieldName = this.resolveLabel(locale, name, label);
    return `${fieldName} is not valid`;
  }
  getLocaleDefault(locale, field) {
    var _a25, _b25, _c, _d, _e;
    return ((_c = (_b25 = (_a25 = this.container[locale]) === null || _a25 === void 0 ? void 0 : _a25.fields) === null || _b25 === void 0 ? void 0 : _b25[field]) === null || _c === void 0 ? void 0 : _c._default) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e._default);
  }
  resolveLabel(locale, name, label) {
    var _a25, _b25, _c, _d;
    if (label) {
      return ((_b25 = (_a25 = this.container[locale]) === null || _a25 === void 0 ? void 0 : _a25.names) === null || _b25 === void 0 ? void 0 : _b25[label]) || label;
    }
    return ((_d = (_c = this.container[locale]) === null || _c === void 0 ? void 0 : _c.names) === null || _d === void 0 ? void 0 : _d[name]) || name;
  }
  format(locale, ctx, interpolateOptions) {
    var _a25, _b25, _c, _d, _e;
    let message2;
    const { rule, form, label, name } = ctx;
    const fieldName = this.resolveLabel(locale, name, label);
    if (!rule) {
      message2 = this.getLocaleDefault(locale, name) || "";
      return isCallable(message2) ? message2(ctx) : interpolate(message2, Object.assign(Object.assign({}, form), { field: fieldName }), interpolateOptions !== null && interpolateOptions !== void 0 ? interpolateOptions : this.interpolateOptions);
    }
    message2 = ((_c = (_b25 = (_a25 = this.container[locale]) === null || _a25 === void 0 ? void 0 : _a25.fields) === null || _b25 === void 0 ? void 0 : _b25[name]) === null || _c === void 0 ? void 0 : _c[rule.name]) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule.name]);
    if (!message2) {
      message2 = this.getLocaleDefault(locale, name) || "";
    }
    return isCallable(message2) ? message2(ctx) : interpolate(message2, Object.assign(Object.assign({}, form), { field: fieldName, params: rule.params }), interpolateOptions !== null && interpolateOptions !== void 0 ? interpolateOptions : this.interpolateOptions);
  }
  merge(dictionary) {
    merge(this.container, dictionary);
  }
}
const DICTIONARY = new Dictionary("en", {});
function localize(locale, dictionary, interpolateOptions) {
  const generateMessage = (ctx) => {
    return DICTIONARY.resolve(ctx, interpolateOptions);
  };
  if (typeof locale === "string") {
    DICTIONARY.locale = locale;
    return generateMessage;
  }
  DICTIONARY.merge(locale);
  return generateMessage;
}
/**
  * vee-validate v4.14.7
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function getSingleParam(params, paramName) {
  return Array.isArray(params) ? params[0] : params[paramName];
}
function isEmpty(value) {
  if (value === null || value === void 0 || value === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
}
const maxLengthValidator = (value, params) => {
  if (isEmpty(value)) {
    return true;
  }
  const length = getSingleParam(params, "length");
  if (Array.isArray(value)) {
    return value.every((val) => maxLengthValidator(val, { length }));
  }
  return [...String(value)].length <= Number(length);
};
const maxValueValidator = (value, params) => {
  if (isEmpty(value)) {
    return true;
  }
  const max = getSingleParam(params, "max");
  if (Array.isArray(value)) {
    return value.length > 0 && value.every((val) => maxValueValidator(val, { max }));
  }
  return Number(value) <= Number(max);
};
const minValueValidator = (value, params) => {
  if (isEmpty(value)) {
    return true;
  }
  const min = getSingleParam(params, "min");
  if (Array.isArray(value)) {
    return value.length > 0 && value.every((val) => minValueValidator(val, { min }));
  }
  return Number(value) >= Number(min);
};
function isNullOrUndefined(value) {
  return value === null || value === void 0;
}
function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}
const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
    return false;
  }
  return !!String(value).trim().length;
};
const sizeValidator = (files, params) => {
  if (isEmpty(files)) {
    return true;
  }
  let size = getSingleParam(params, "size");
  size = Number(size);
  if (isNaN(size)) {
    return false;
  }
  const nSize = size * 1024;
  if (!Array.isArray(files)) {
    return files.size <= nSize;
  }
  for (let i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }
  return true;
};
const message = ({ decimals }, ctx) => {
  if (decimals === 0) {
    return `The ${ctx.label || ctx.field} must be a positive number with no decimals`;
  }
  return `The ${ctx.label || ctx.field} must be a positive number and may contain up to ${decimals} decimal places`;
};
const validate = (value, { decimals = "*", separator = "." } = {}) => {
  if (Array.isArray(value)) {
    return value.every((val) => validate(val, { decimals, separator }));
  }
  if (value === null || value === void 0 || value === "") {
    return true;
  }
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }
  const regexPart = decimals === "*" ? "+" : `{1,${decimals}}`;
  const regex = new RegExp(`^\\d*(\\${separator}\\d${regexPart})?$`);
  const exponentialNumbers = /[0-9]*\.?[0-9]+([eE]-8+)/;
  if (exponentialNumbers.test(value)) {
    return true;
  } else if (!regex.test(value)) {
    return false;
  }
  return true;
};
const decimal = {
  validate,
  message
};
function wrapper({ validate: validate2, message: message2 }) {
  return (value, args, ctx) => {
    const result = validate2(value, args, ctx);
    if (!result) {
      if (typeof message2 == "function") {
        return message2(args, ctx);
      } else {
        return message2;
      }
    }
    return true;
  };
}
const code = "en";
const messages = {
  _default: "The {field} is not valid",
  alpha: "The {field} field may only contain alphabetic characters",
  alpha_num: "The {field} field may only contain alpha-numeric characters",
  alpha_dash: "The {field} field may contain alpha-numeric characters as well as dashes and underscores",
  alpha_spaces: "The {field} field may only contain alphabetic characters as well as spaces",
  between: "The {field} field must be between 0:{min} and 1:{max}",
  confirmed: "The {field} field confirmation does not match",
  digits: "The {field} field must be numeric and exactly contain 0:{length} digits",
  dimensions: "The {field} field must be 0:{width} pixels by 1:{height} pixels",
  email: "The {field} field must be a valid email",
  not_one_of: "The {field} field is not a valid value",
  ext: "The {field} field is not a valid file",
  image: "The {field} field must be an image",
  integer: "The {field} field must be an integer",
  length: "The {field} field must be 0:{length} long",
  max_value: "The {field} field must be 0:{max} or less",
  max: "The {field} field may not be greater than 0:{length} characters",
  mimes: "The {field} field must have a valid file type",
  min_value: "The {field} field must be 0:{min} or more",
  min: "The {field} field must be at least 0:{length} characters",
  numeric: "The {field} field may only contain numeric characters",
  one_of: "The {field} field is not a valid value",
  regex: "The {field} field format is invalid",
  required_if: "The {field} field is required",
  required: "The {field} field is required",
  size: "The {field} field size must be less than 0:{size}KB",
  url: "The {field} field is not a valid URL"
};
const en = {
  code,
  messages
};
configure({
  generateMessage: localize({
    en
  })
});
defineRule("decimal", wrapper(decimal));
defineRule("required", requiredValidator);
defineRule("max", maxLengthValidator);
defineRule("max_value", maxValueValidator);
defineRule("min_value", minValueValidator);
defineRule("size", sizeValidator);
function parseFeatureStatuses(featureStatusData) {
  const data = {};
  featureStatusData.forEach((fs) => {
    if (fs.prerequisites && fs.prerequisites.length > 0) {
      const firstPrerequisite = fs.prerequisites[0];
      fs.summary = firstPrerequisite.title || fs.summary;
      fs.ctaText = firstPrerequisite.ctaText;
      fs.ctaLink = firstPrerequisite.ctaLink;
      fs.description = firstPrerequisite.description;
    }
    data[fs.type] = fs;
  });
  return data;
}
const featureStatusApi = {
  get(type) {
    const params = {};
    if (type) {
      params.types = type;
    }
    return axiosInstanceWithoutErrorHandling.get(buildUrl("featureStatusResource", {}, false, params)).then((response) => parseFeatureStatuses(response.data.data));
  }
};
const featureStatusConstants = {
  FEATURE_TYPES: {
    TRADE_DERIVATIVES: "trade-derivatives",
    TRADE_DERIVATIVES_REDUCE_ONLY: "trade-derivatives-reduce-only",
    TRADE: "trade",
    CREDIT_CARD: "credit-card",
    PAYPAL: "paypal",
    ACH: "deposit"
  }
};
const useFeatureStatusStore = addStoreHooks(
  defineStore("featureStatusStore", () => {
    var _a25, _b25;
    const $errorTracking = useErrorTracking();
    const featureStatuses = shallowRef(parseFeatureStatuses(((_b25 = (_a25 = PAGE_CONTEXT) == null ? void 0 : _a25.user) == null ? void 0 : _b25.featureStatuses) || []));
    const isTradeDerivativesReduceOnlyEnabled = computed(() => {
      var _a26;
      return ((_a26 = featureStatuses.value[featureStatusConstants.FEATURE_TYPES.TRADE_DERIVATIVES_REDUCE_ONLY]) == null ? void 0 : _a26.enabled) ?? false;
    });
    const isTradeEnabled = computed(() => {
      var _a26;
      return ((_a26 = featureStatuses.value[featureStatusConstants.FEATURE_TYPES.TRADE]) == null ? void 0 : _a26.enabled) ?? false;
    });
    const isTradeDerivativesEnabled = computed(() => {
      var _a26;
      return ((_a26 = featureStatuses.value[featureStatusConstants.FEATURE_TYPES.TRADE_DERIVATIVES]) == null ? void 0 : _a26.enabled) ?? false;
    });
    async function fetch2(featureStatusType) {
      try {
        const data = await featureStatusApi.get(featureStatusType);
        featureStatuses.value = {
          ...featureStatuses.value,
          ...data
        };
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
    }
    function getFeatureStatus(featureStatusType) {
      return featureStatuses.value[featureStatusType] ?? { enabled: false };
    }
    return {
      isTradeEnabled,
      isTradeDerivativesEnabled,
      isTradeDerivativesReduceOnlyEnabled,
      fetch: fetch2,
      getFeatureStatus
    };
  })
);
const REVERSAL_DISCLAIMER = "This transaction cannot be reversed.";
const DAI_DISCLAIMER = "DAI uses cryptocurrency collateral to maintain its peg to the US dollar. Any failure in the collateralization mechanism or the custodian holding the assets could adversely affect the value of DAI.";
const OrderbookRestApi = {
  /**
   * @param {string} marketKey - btcusd, ethusd, ...
   * @returns {*}
   */
  getFullOrderbook(marketKey) {
    return axiosInstance.get(URLService.buildUrl("orderBookApi", { market_symbol: marketKey })).then((response) => {
      return { parsed: OrderbookApiConverter.parse(response.data), raw: response.data, market: marketKey };
    });
  }
};
const storeName = "orderbook100Store";
const useOrderbook100Store = addStoreHooks(
  defineStore(storeName, () => {
    const websocketsStore = useWebsocketStore({ caller: storeName });
    const { initialized: wsInitialized } = storeToRefs(useWebsocketStore({ caller: storeName }));
    const { isHidden } = storeToRefs(useVisibilityStore({ caller: storeName }));
    const { initialized: activeMarketStoreInitialized, activeMarket } = storeToRefs(
      useActiveMarketStore({ caller: storeName })
    );
    const tradeviewTickersStore = useTradeviewTickersStore({ caller: storeName });
    const $errorTracking = useErrorTracking();
    const orderbook = shallowRef({
      bids: [],
      asks: [],
      timestamp: 0,
      microtimestamp: 0,
      pair: void 0
    });
    const hiddenOrderbook = shallowRef({
      bids: [],
      asks: [],
      timestamp: 0,
      microtimestamp: 0,
      pair: void 0
    });
    const fullOrderbookFromLastApiCall = shallowRef({
      bids: [],
      asks: [],
      timestamp: 0,
      microtimestamp: 0,
      pair: void 0
    });
    const initialized = ref(false);
    const isProcessing = ref(false);
    const connectedWsChannel = ref(null);
    let disconnectOrderbookWsFn = () => {
    };
    const activeMarketCurrentOffer = computed(() => {
      const activeMarketTickerLastValue = tradeviewTickersStore.activeMarketTickerLastValue;
      return {
        ask: orderbook.value.asks[0] ? new Decimal(orderbook.value.asks[0].price) : activeMarketTickerLastValue,
        bid: orderbook.value.bids[0] ? new Decimal(orderbook.value.bids[0].price) : activeMarketTickerLastValue
      };
    });
    function updateOrderbook100(newOrderbook) {
      if (
        // TODO: .pair -> .market
        newOrderbook.pair === activeMarket.value.key && newOrderbook.microtimestamp > orderbook.value.microtimestamp
      ) {
        if (isHidden.value) {
          hiddenOrderbook.value = newOrderbook;
        } else {
          orderbook.value = newOrderbook;
        }
      }
    }
    async function connectWs() {
      if (!activeMarket.value) {
        return;
      }
      const channel = WSApi.getOrderbookChannelName(activeMarket.value.key);
      if (channel !== connectedWsChannel.value) {
        connectedWsChannel.value = channel;
        const { disconnect } = await websocketsStore.subscribeToChannel({
          channel: WSApi.getOrderbookChannelName(activeMarket.value.key),
          event: WSApi.ORDERBOOK_EVENT,
          onEvent: updateOrderbook100
        });
        disconnectOrderbookWsFn = disconnect;
      }
    }
    function clearOrderbook(market) {
      const emptyOrderbook = {
        bids: [],
        asks: [],
        timestamp: 0,
        microtimestamp: 0,
        pair: market
      };
      orderbook.value = emptyOrderbook;
      hiddenOrderbook.value = emptyOrderbook;
      fullOrderbookFromLastApiCall.value = emptyOrderbook;
    }
    async function fetchActiveMarketFullOrderbook() {
      if (isProcessing.value) {
        return await new Promise((resolve) => {
          const unwatch = watch(isProcessing, (newValue) => {
            if (!newValue) {
              resolve(fullOrderbookFromLastApiCall.value);
              unwatch();
            }
          });
        });
      }
      try {
        isProcessing.value = true;
        const ob = await OrderbookRestApi.getFullOrderbook(activeMarket.value.key);
        if (ob.market === activeMarket.value.key) {
          ob.parsed.pair = ob.market;
          fullOrderbookFromLastApiCall.value = ob.parsed;
        }
        updateOrderbook100(OrderbookApiConverter.parse100fromOrderbook(ob.raw, ob.market));
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
      isProcessing.value = false;
      return fullOrderbookFromLastApiCall.value;
    }
    async function initApiCalls() {
      await fetchActiveMarketFullOrderbook();
      initialized.value = true;
    }
    async function _init() {
      if (wsInitialized.value) {
        await connectWs();
      }
      if (activeMarketStoreInitialized.value) {
        await initApiCalls();
      }
      return () => {
        disconnectOrderbookWsFn();
      };
    }
    watch(wsInitialized, async (newValue, prevValue) => {
      if (newValue && !prevValue) {
        await connectWs();
      }
    });
    watch(activeMarketStoreInitialized, async (newValue, prevValue) => {
      if (newValue && !prevValue) {
        await initApiCalls();
      }
    });
    watch(
      activeMarket,
      async (newValue, prevValue) => {
        if ((newValue == null ? void 0 : newValue.key) === (prevValue == null ? void 0 : prevValue.key) || !initialized.value) {
          return;
        }
        disconnectOrderbookWsFn();
        clearOrderbook(newValue.key);
        await fetchActiveMarketFullOrderbook();
        await connectWs();
        initialized.value = true;
      },
      {
        deep: true
      }
    );
    watch(isHidden, (newValue, oldValue) => {
      if (oldValue && hiddenOrderbook.value.microtimestamp > orderbook.value.microtimestamp) {
        orderbook.value = hiddenOrderbook.value;
      }
    });
    return {
      initialized,
      orderbook,
      fullOrderbookFromLastApiCall,
      activeMarketCurrentOffer,
      _init,
      fetchActiveMarketFullOrderbook
    };
  })
);
const _findLastClose = (fromIndex, quotes, lastPrice) => {
  for (let i = fromIndex; i < quotes.length; i++) {
    if (quotes[i].open) {
      return quotes[i].open;
    }
  }
  return lastPrice;
};
class TradeviewPriceHistoryApiConverter {
  static parse(quotes, lastPrice) {
    let lastClose = null;
    const newQuotes = [];
    for (let i = 0; i < quotes.length; i++) {
      const quote = quotes[i];
      if (quote.open !== null && quote.high !== null && quote.low !== null && quote.close !== null) {
        lastClose = quote.close;
      } else {
        if (!lastClose) {
          lastClose = _findLastClose(i, quotes, lastPrice);
        }
        quote.open = quote.high = quote.low = quote.close = lastClose;
      }
      newQuotes.push({
        time: (/* @__PURE__ */ new Date(`${quote.time}Z`)).getTime(),
        open: parseFloat(quote.open),
        high: parseFloat(quote.high),
        low: parseFloat(quote.low),
        close: parseFloat(quote.close),
        volume: parseFloat(quote.volume)
      });
    }
    return newQuotes;
  }
}
function getPriceHistoryData(market, resolution = "30", start = null, end = null, lastPrice = null) {
  return axiosInstance.get(URLService.buildUrl("priceHistoryInternal", { market }), {
    params: {
      resolution,
      "start_datetime": start.toISOString(),
      "end_datetime": end.toISOString()
    }
  }).then((response) => TradeviewPriceHistoryApiConverter.parse(response.data.data, lastPrice));
}
const candlesApi = {
  getPriceHistoryData
};
function asyncThrottle(func, wait, options = null) {
  const throttled = _.throttle(
    (resolve, reject, args) => {
      func(...args).then(resolve).catch(reject);
    },
    wait,
    options
  );
  return (...args) => new Promise((resolve, reject) => {
    throttled(resolve, reject, args);
  });
}
export {
  DAI_DISCLAIMER as D,
  REVERSAL_DISCLAIMER as R,
  useTradesStore as a,
  useOrderbook100Store as b,
  useField as c,
  useForm as d,
  defineRule as e,
  useFeatureStatusStore as f,
  featureStatusConstants as g,
  subMonths as h,
  candlesApi as i,
  asyncThrottle as j,
  sub as k,
  subDays as s,
  useTradeviewTickersStore as u,
  wrapper as w
};
