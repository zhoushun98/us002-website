import { cv as toDate, _ as _export_sfc, au as Markdown, B as BtsButton, da as format, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, t as toDisplayString, g as createTextVNode, f as createVNode, w as withCtx, h as createCommentVNode, J as normalizeClass, bc as getDefaultExportFromCjs, e1 as debounce_1, e2 as isObject_1, a9 as addStoreHooks, aa as defineStore, az as useSubAccountStore, bM as useLocalStorage, aA as constants$1, r as ref, ax as toDecimal, cH as useActiveMarketStore, q as useUserStateStore, c as createBlock, V as AppTooltip, R as IconInfo, a4 as BtsLink, aN as useBalancesStore, u as useToastStore, aw as useMarketsStore, U as URLService, ak as entityConstants, $ as ENDPOINTS_PRELOADED_DATA, ag as numberFormatter, as as CURRENCIES, I as constants$3, b6 as trackingUtils, e3 as tradingEvents, ad as trackInteraction, ae as renderSlot, F as Fragment, a0 as Decimal, c_ as mergeModels, c$ as useModel, l as computed, bQ as watch, d as unref, ch as isRef, Y as TextInput, ao as axiosInstanceWithoutErrorHandling, bS as useTickersStore, aj as _, n as nextTick, j as useNuxtApp, am as onMounted, cN as LabeledSwitch, W as LabeledDropdown, aG as AccountTypeIcon, e4 as Tooltip, d9 as markRaw, aB as marketConstants, D as resolveDynamicComponent, e5 as SellCryptoForm, S as Spinner, e6 as useSimpleStore, e7 as useSimpleAppSellStore, e8 as STEPS, e9 as BuyCryptoForm, ea as useSimpleAppBuyStore, aV as EventBusConstants, c7 as getPercentageChange, al as getDate, dc as getUnixTime, a as axiosInstance, ck as PAIRS, x as formatDate, ay as constants$4, cG as addSeconds, aC as startOfTomorrowUTC, dv as startOfYear, A as AppIcon, bT as localStorageConstants, c8 as simpleAppEvents, eb as MarketPercentageChange, a5 as renderList, ec as __vite_glob_0_0, ed as __vite_glob_0_1, ee as __vite_glob_0_2, ef as __vite_glob_0_3, eg as __vite_glob_0_4, eh as __vite_glob_0_5, ei as __vite_glob_0_6, ej as __vite_glob_0_7, ek as __vite_glob_0_8, el as __vite_glob_0_9, em as __vite_glob_0_10, ai as useEarnStore, aZ as BitstampSymbol, a_ as QrcodeSvg, cg as _imports_0, ar as createStaticVNode, en as SIMPLE_APP_SOURCE, eo as TAB_NAMES, ah as CurrencyIcon, P as PAGE_CONTEXT, ep as isCrawler, b3 as withModifiers } from "./BEpVD-aq.js";
import { M as MarketPanel } from "./BncgIIBH.js";
import { A as AssetTags } from "./DCuF_7KQ.js";
import { b as useOrderbook100Store, R as REVERSAL_DISCLAIMER, D as DAI_DISCLAIMER, e as defineRule, w as wrapper, c as useField, d as useForm, j as asyncThrottle, f as useFeatureStatusStore, g as featureStatusConstants, i as candlesApi, k as sub } from "./Cy77iO80.js";
import { P as PastPerformanceDisclaimer } from "./M-ITQhO8.js";
import { I as IconWarning } from "./DC1xz2aD.js";
import { B as BuyDirectCryptoButton, M as MarketMobileDropdown, O as OpenOrders } from "./Djt7PxGY.js";
import { u as useFeeScheduleStore } from "./glEryrjR.js";
import { u as useOrdersStore } from "./CmPxTZ2S.js";
import { b as branchEvents } from "./BPUc829R.js";
import { o as orderTypeNames } from "./zgNWDzAp.js";
import { c as constants$2 } from "./Ptg4BVLI.js";
import { D as DefaultContentLayout } from "./BCSCXCD0.js";
import { L as Loading } from "./DQjdLM2K.js";
import { s as subHours } from "./DgnSKGeG.js";
import { H as Highcharts } from "./BgV9bhpL.js";
import { s as stockInit, b as InsightHighlights, I as ITBGraph, a as InsightPanelWrapper } from "./HkSVLYAs.js";
import { T as TopBackLink } from "./a0RYkiJl.js";
import { A as AppStore, G as GooglePlay } from "./BmdGJmBH.js";
import "./ljMJl-cz.js";
import "./C-G9XUT5.js";
import "./C4uvih28.js";
import "./CV9yC9yK.js";
import "./bDpLWS1b.js";
import "./fJkJxxwc.js";
import "./BwaZ2ET2.js";
function endOfHour(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setMinutes(59, 59, 999);
  return _date;
}
const _sfc_main$t = {
  components: {
    Markdown,
    MarketPanel,
    BtsButton
  },
  props: {
    assetName: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showMore: false
    };
  },
  computed: {
    formattedDate() {
      if (!this.date) {
        return null;
      }
      return format(new Date(this.date * 1e3), "MMM yyyy");
    }
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
};
const _hoisted_1$m = { class: "about" };
const _hoisted_2$h = { class: "about__title about__title--section" };
const _hoisted_3$c = { class: "about__panel-header" };
const _hoisted_4$9 = { class: "about__title" };
const _hoisted_5$8 = {
  key: 0,
  class: "about__date"
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Markdown = resolveComponent("Markdown");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_MarketPanel = resolveComponent("MarketPanel");
  return openBlock(), createElementBlock("div", _hoisted_1$m, [
    createBaseVNode("div", _hoisted_2$h, "\n      About " + toDisplayString($props.assetName), 1),
    _cache[3] || (_cache[3] = createTextVNode()),
    createVNode(_component_MarketPanel, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3$c, [
          createBaseVNode("h2", _hoisted_4$9, toDisplayString($props.title), 1),
          _cache[0] || (_cache[0] = createTextVNode()),
          $options.formattedDate ? (openBlock(), createElementBlock("span", _hoisted_5$8, "\n          Since: " + toDisplayString($options.formattedDate), 1)) : createCommentVNode("", true)
        ]),
        _cache[2] || (_cache[2] = createTextVNode()),
        createBaseVNode("div", null, [
          createVNode(_component_Markdown, {
            class: normalizeClass({
              "about__markdown": true,
              "about__markdown--hidden": !$data.showMore
            }),
            source: $props.content
          }, null, 8, ["class", "source"]),
          _cache[1] || (_cache[1] = createTextVNode()),
          createVNode(_component_BtsButton, {
            class: "about__read-more",
            "as-link": "",
            onClick: $options.toggleShowMore
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($data.showMore ? "Show less" : "Show more"), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      _: 1
    })
  ]);
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$n], ["__scopeId", "data-v-f7c3d068"]]);
var debounce = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
const throttle$1 = /* @__PURE__ */ getDefaultExportFromCjs(throttle_1);
const storeName = "basicMarketsOrderFormStore";
const useBasicMarketsOrderFormStore = addStoreHooks(
  defineStore(storeName, () => {
    const subAccountStore = useSubAccountStore({ caller: storeName });
    const ordersStore = useOrdersStore({ caller: storeName });
    const activeOrderSide = useLocalStorage(constants$2.LOCAL_STORAGE.ORDER_ACTION, constants$1.ORDER_SIDE.BUY, {
      listenToStorageChanges: false
    });
    const activeOrderFormType = useLocalStorage(
      constants$2.LOCAL_STORAGE.ORDER_TYPE,
      constants$1.ORDER_FORM_TYPE.LIMIT,
      {
        listenToStorageChanges: false
      }
    );
    const selectedPrice = ref(null);
    function setActiveOrderSide(side) {
      activeOrderSide.value = side;
    }
    function setActiveOrderFormType(type) {
      activeOrderFormType.value = type;
    }
    function setSelectedPrice(price) {
      selectedPrice.value = toDecimal(price);
    }
    async function createOrder(order) {
      const orderData = { ...order, account: `${subAccountStore.activeSubAccountId}` };
      return await ordersStore.createOrder(orderData);
    }
    return {
      activeOrderFormType,
      activeOrderSide,
      selectedPrice,
      setActiveOrderSide,
      setActiveOrderFormType,
      setSelectedPrice,
      createOrder
    };
  })
);
const _sfc_main$s = {
  name: "ProceedOrderButton",
  components: { BtsButton },
  props: {
    side: {
      type: String,
      required: true
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    },
    isOrderPlacementEnabled: {
      type: Boolean,
      required: true
    }
  },
  emits: ["click"],
  setup() {
    return {
      activeMarketStore: useActiveMarketStore(),
      userStateStore: useUserStateStore()
    };
  },
  computed: {
    isDisabled() {
      return this.disable || !this.isOrderPlacementEnabled || !this.userStateStore.canTrade || !this.$has("trade_orders_create");
    },
    buttonClass() {
      return {
        button: true,
        "button--buy": this.side === constants$1.ORDER_SIDE.BUY,
        "button--sell": this.side === constants$1.ORDER_SIDE.SELL,
        "button--in-progress": !this.isOrderPlacementEnabled
      };
    },
    actionTitle() {
      return this.side === constants$1.ORDER_SIDE.BUY ? `Buy ${this.activeBaseCurrency} with balance` : `Sell ${this.activeBaseCurrency}`;
    },
    activeBaseCurrency() {
      return this.activeMarketStore.activeMarket.base;
    }
  }
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createBlock(_component_BtsButton, {
    class: normalizeClass(["proceed-order", $options.buttonClass]),
    disabled: $options.isDisabled,
    "data-test": "proceedOrderButton",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString($options.actionTitle), 1)
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
const ProceedOrderButton = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$m], ["__scopeId", "data-v-52e715ac"]]);
const _sfc_main$r = {
  name: "OrderForm",
  components: {
    ProceedOrderButton,
    BuyDirectCryptoButton,
    AppTooltip,
    IconInfo,
    BtsLink
  },
  props: {
    side: {
      type: String,
      required: true
    },
    orderData: {
      type: Object,
      required: true
    },
    totalText: {
      type: String,
      required: false,
      default: ""
    },
    totalLabel: {
      type: String,
      required: false,
      default: "Total"
    },
    requiresMatching: {
      type: Boolean,
      required: false,
      default: false
    },
    valid: {
      type: Boolean,
      required: false,
      default: false
    },
    dirty: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["clear"],
  setup() {
    return {
      activeMarketStore: useActiveMarketStore(),
      balancesStore: useBalancesStore(),
      feeScheduleStore: useFeeScheduleStore(),
      userStateStore: useUserStateStore(),
      basicMarketsOrderFormStore: useBasicMarketsOrderFormStore(),
      ordersStore: useOrdersStore(),
      subAccountStore: useSubAccountStore(),
      toastStore: useToastStore(),
      orderbook100Store: useOrderbook100Store(),
      marketsStore: useMarketsStore()
    };
  },
  data() {
    return {
      URLService,
      REVERSAL_DISCLAIMER,
      DAI_DISCLAIMER,
      isOrderPlacementEnabled: true
    };
  },
  computed: {
    activeMarket() {
      return this.activeMarketStore.activeMarket;
    },
    makerFee() {
      return this.feeScheduleStore.makerFee;
    },
    takerFee() {
      return this.feeScheduleStore.takerFee;
    },
    activeBaseCurrency() {
      return this.activeMarket.base;
    },
    activeOrderSide() {
      return this.basicMarketsOrderFormStore.activeOrderSide;
    },
    matchingDisabled() {
      return this.requiresMatching && this.activeMarketStore.isMatchingDisabled;
    },
    isPaypalSupported() {
      return this.$pageContext.isPaypalEnabled ?? false;
    },
    isUserBvi() {
      var _a;
      return ((_a = this.userStateStore.state.bitstampEntity) == null ? void 0 : _a.code) === entityConstants.ENTITY_ACRONYM.BVI_LTD;
    },
    tradingDisclaimer() {
      var _a;
      return (_a = this.activeMarketStore.activeMarket) == null ? void 0 : _a.tradingDisclaimer;
    },
    canSeeBuyDirectButton() {
      return this.side === constants$1.ORDER_SIDE.BUY && (this.isCreditCardSupported && this.$has("deposits_credit_card_create") || this.isAchSupported || this.isSimpleBuyEnabled && !this.isUserBvi);
    },
    isCreditCardSupported() {
      var _a;
      return ((_a = this.$pageContext) == null ? void 0 : _a.isCreditCardEnabled) ?? false;
    },
    isAchSupported() {
      var _a;
      return ((_a = this.$pageContext) == null ? void 0 : _a.isAchEnabled) ?? false;
    },
    isSimpleBuyEnabled() {
      var _a;
      return ((_a = this.$pageContext) == null ? void 0 : _a.isSimpleBuyEnabled) ?? false;
    },
    shouldDisplayReversalDisclaimer() {
      var _a, _b;
      return ((_b = (_a = ENDPOINTS_PRELOADED_DATA) == null ? void 0 : _a.userResource) == null ? void 0 : _b.state) === "US-NY";
    }
  },
  watch: {
    "activeMarketStore.activeMarketKey": {
      handler() {
        this.clear();
      },
      immediate: false
    },
    "subAccountStore.activeSubAccountId": {
      handler() {
        this.clear();
      },
      immediate: false
    }
  },
  created() {
    this.activeMarketStore.setActiveMarket(this.activeMarket.key);
    this.feeScheduleStore.fetch();
  },
  methods: {
    async onSubmit() {
      var _a;
      const currentOffer = this.orderbook100Store.activeMarketCurrentOffer;
      const bestAsk = currentOffer.ask ? currentOffer.ask.toNumber() : null;
      const bestBid = currentOffer.bid ? currentOffer.bid.toNumber() : null;
      const availableBalance = this.balancesStore.activeMarketAccountAvailableBalance.base;
      const market = this.marketsStore.getMarket(this.orderData.market);
      this.isOrderPlacementEnabled = false;
      try {
        const submittedOrderData = { ...this.orderData };
        const response = await this.basicMarketsOrderFormStore.createOrder(submittedOrderData);
        const orderId = response.data.data.id;
        this.showOrderPlacedNotification({ ...submittedOrderData, id: orderId });
        this.trackOrder(submittedOrderData, bestAsk, bestBid, availableBalance, market);
        this.clear();
        this.ordersStore.fetchOpenOrders();
        this.balancesStore.fetch();
      } catch (e) {
        (_a = this.$errorTracking) == null ? void 0 : _a.trackException(e);
      }
      this.isOrderPlacementEnabled = true;
    },
    clear() {
      this.$emit("clear");
    },
    showOrderPlacedNotification(order) {
      const sideDisplay = order.side === constants$1.ORDER_SIDE.BUY ? "buy" : "sell";
      let typeDisplay = constants$1.ORDER_TYPE_CONFIG[order.type].display.toLowerCase();
      if (order.type === constants$1.ORDER_TYPE.INSTANT) {
        typeDisplay = "instant";
      }
      const market = this.activeMarketStore.activeMarket;
      let notification;
      if (constants$1.NO_PRICE_ORDER_TYPES.includes(order.type)) {
        let decimals, currency;
        if (order.type === constants$1.ORDER_TYPE.MARKET) {
          decimals = market.decimals.base;
          currency = market.base;
        } else if (order.type === constants$1.ORDER_TYPE.INSTANT) {
          if (order.side === constants$1.ORDER_SIDE.BUY) {
            decimals = market.decimals.counterInstantOrder;
            currency = market.counter;
          } else {
            decimals = market.decimals.base;
            currency = market.base;
          }
        } else {
          decimals = market.decimals.base;
          currency = market.base;
          console.error("Invalid order notification type");
        }
        const amountString = numberFormatter.amount({
          value: order.amount,
          decimals,
          currencyCode: currency
        });
        notification = `Placed ${typeDisplay} ${sideDisplay} order for ${amountString}.`;
      } else {
        let connector, amountCurrency, amountDecimals;
        if (order.type === constants$1.ORDER_TYPE.STOP_MARKET && order.side === constants$1.ORDER_SIDE.BUY) {
          connector = "with";
          amountCurrency = market.counter;
          amountDecimals = market.decimals.counter;
        } else {
          connector = "for";
          amountCurrency = market.base;
          amountDecimals = market.decimals.base;
        }
        const amountString = numberFormatter.amount({
          value: order.amount,
          decimals: amountDecimals,
          currencyCode: amountCurrency
        });
        const priceString = numberFormatter.addCurrency({
          formattedValue: numberFormatter.formatZeroPaddedWithoutRounding({
            value: order.price || order.stopPrice,
            minimumDecimals: market.decimals.counter
          }),
          currencyCode: market.counter,
          currencySymbol: CURRENCIES[market.counter].symbol
        });
        notification = `Placed ${typeDisplay} ${sideDisplay} order ${connector} ${amountString} at ${priceString}.`;
      }
      this.toastStore.showToast({
        title: "Order submitted",
        text: notification,
        type: constants$3.NOTIFICATIONS.TYPES.SUCCESS
      });
    },
    trackOrder(order, bestAsk, bestBid, availableBalance, market) {
      let schema = {};
      let eventName;
      let price;
      const amount = trackingUtils.getAmountRange(market.base, toDecimal(order.amount).toNumber());
      if (order.side === constants$1.ORDER_SIDE.BUY) {
        schema = tradingEvents.buyOrderPlaced.schema;
        eventName = tradingEvents.buyOrderPlaced.name;
        schema["Buy Amount"] = amount;
        if (order.type === constants$1.ORDER_TYPE.INSTANT || order.type === constants$1.ORDER_TYPE.MARKET) {
          price = bestAsk || order.price;
        } else if (order.type === constants$1.ORDER_FORM_TYPE.STOP_MARKET) {
          price = order.stopPrice ? toDecimal(order.stopPrice).toNumber() : null;
        } else {
          price = order.price ? toDecimal(order.price).toNumber() : null;
        }
        schema["Buy Price"] = price;
        this.$branch.lib.logEvent(branchEvents.buyOrderPlaced.name, branchEvents.buyOrderPlaced.schema);
      } else if (order.side === constants$1.ORDER_SIDE.SELL) {
        schema = tradingEvents.sellOrderPlaced.schema;
        eventName = tradingEvents.sellOrderPlaced.name;
        schema["Sell Amount"] = amount;
        if (order.type === constants$1.ORDER_TYPE.INSTANT || order.type === constants$1.ORDER_TYPE.MARKET) {
          price = bestBid || order.price;
        } else if (order.type === constants$1.ORDER_FORM_TYPE.STOP_MARKET) {
          price = order.stopPrice ? toDecimal(order.stopPrice).toNumber() : null;
        } else {
          price = order.price ? toDecimal(order.price).toNumber() : null;
        }
        schema["Sell Price"] = price;
        this.$branch.lib.logEvent(branchEvents.sellOrderPlaced.name, branchEvents.sellOrderPlaced.schema);
      }
      schema["Trading Pair"] = `${market.base}/${market.counter}`;
      schema["Available Amount"] = trackingUtils.getAmountRange(
        market.base,
        availableBalance
      );
      schema["Order Type"] = orderTypeNames[order.type];
      schema["If Executed Price"] = !!order.osoPrice && order.type === constants$1.ORDER_TYPE.LIMIT;
      schema["Executed Price Amount"] = order.type === constants$1.ORDER_TYPE.LIMIT ? order.osoPrice : "";
      schema["Trailing Stop"] = !!order.trailing;
      trackInteraction(eventName, schema);
      this.$analytics.trackEvent(eventName, schema);
    }
  }
};
const _hoisted_1$l = {
  key: 0,
  class: "calculation"
};
const _hoisted_2$g = { class: "calculation__row" };
const _hoisted_3$b = { class: "calculation__item--label" };
const _hoisted_4$8 = { class: "calculation__item--value" };
const _hoisted_5$7 = { class: "calculation__row" };
const _hoisted_6$5 = { class: "calculation__item--label" };
const _hoisted_7$4 = {
  class: "calculation__item--value",
  "data-test": "totalText"
};
const _hoisted_8$3 = {
  key: 0,
  class: "trading-disclaimer"
};
const _hoisted_9$3 = {
  key: 1,
  class: "error"
};
const _hoisted_10$1 = ["href"];
const _hoisted_11$1 = ["href"];
const _hoisted_12$1 = ["href"];
const _hoisted_13$1 = ["href"];
const _hoisted_14$1 = {
  key: 2,
  class: "error"
};
const _hoisted_15$1 = {
  key: 3,
  class: "error"
};
const _hoisted_16$1 = {
  key: 1,
  class: "reversal-disclaimer"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconInfo = resolveComponent("IconInfo");
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_AppTooltip = resolveComponent("AppTooltip");
  const _component_ProceedOrderButton = resolveComponent("ProceedOrderButton");
  const _component_BuyDirectCryptoButton = resolveComponent("BuyDirectCryptoButton");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", null, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true),
      _cache[21] || (_cache[21] = createTextVNode()),
      $setup.feeScheduleStore.initialized ? (openBlock(), createElementBlock("div", _hoisted_1$l, [
        createBaseVNode("div", _hoisted_2$g, [
          createBaseVNode("span", _hoisted_3$b, [
            _cache[6] || (_cache[6] = createTextVNode("Estimated fee rate:\n            ")),
            createVNode(_component_AppTooltip, { placement: "bottom" }, {
              trigger: withCtx(() => [
                createVNode(_component_IconInfo, { size: "small" })
              ]),
              default: withCtx(() => [
                _cache[1] || (_cache[1] = createTextVNode()),
                _cache[2] || (_cache[2] = createBaseVNode("p", null, "Applicable fee rates are based on your trailing 30-day trading volume, calculated at trade execution.", -1)),
                _cache[3] || (_cache[3] = createTextVNode()),
                _cache[4] || (_cache[4] = createBaseVNode("p", null, "The fee might differ when an order is filled immediately (Taker) or at a later time (Maker).", -1)),
                _cache[5] || (_cache[5] = createTextVNode()),
                createVNode(_component_BtsLink, {
                  to: _ctx.$routes["fee_schedule"],
                  external: "",
                  "new-tab": ""
                }, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [
                    createTextVNode("\n                Learn more\n              ")
                  ])),
                  _: 1
                }, 8, ["to"])
              ]),
              _: 1
            })
          ]),
          _cache[7] || (_cache[7] = createTextVNode()),
          createBaseVNode("span", _hoisted_4$8, toDisplayString($options.makerFee) + "% / " + toDisplayString($options.takerFee) + "%", 1)
        ]),
        _cache[9] || (_cache[9] = createTextVNode()),
        createBaseVNode("div", _hoisted_5$7, [
          createBaseVNode("span", _hoisted_6$5, toDisplayString($props.totalLabel) + ":", 1),
          _cache[8] || (_cache[8] = createTextVNode()),
          createBaseVNode("span", _hoisted_7$4, toDisplayString($props.totalText), 1)
        ]),
        _cache[10] || (_cache[10] = createTextVNode()),
        $options.tradingDisclaimer ? (openBlock(), createElementBlock("div", _hoisted_8$3, toDisplayString($options.tradingDisclaimer), 1)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      _cache[22] || (_cache[22] = createTextVNode()),
      createVNode(_component_ProceedOrderButton, {
        side: $props.side,
        disable: !$props.valid || $options.matchingDisabled,
        "is-order-placement-enabled": $data.isOrderPlacementEnabled,
        "data-test": "submitOrderButton",
        onClick: $options.onSubmit
      }, null, 8, ["side", "disable", "is-order-placement-enabled", "onClick"]),
      _cache[23] || (_cache[23] = createTextVNode()),
      !$setup.userStateStore.state.canTrade ? (openBlock(), createElementBlock("span", _hoisted_9$3, [
        _cache[18] || (_cache[18] = createTextVNode("\n        You cannot place orders just yet.")),
        _cache[19] || (_cache[19] = createBaseVNode("br", null, null, -1)),
        _cache[20] || (_cache[20] = createTextVNode()),
        $setup.userStateStore.state.hasTwoFactorAuthentication && !$setup.userStateStore.isVerified ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _cache[11] || (_cache[11] = createTextVNode("\n          Please make sure you are ")),
          createBaseVNode("a", {
            href: $data.URLService.getPageUrl("account_verify")
          }, "verified", 8, _hoisted_10$1),
          _cache[12] || (_cache[12] = createTextVNode(".\n        "))
        ], 64)) : !$setup.userStateStore.state.hasTwoFactorAuthentication && $setup.userStateStore.isVerified ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _cache[13] || (_cache[13] = createTextVNode("\n          Please make sure you ")),
          createBaseVNode("a", {
            href: $data.URLService.getPageUrl("onboarding_2fa")
          }, "have 2FA enabled", 8, _hoisted_11$1),
          _cache[14] || (_cache[14] = createTextVNode(".\n        "))
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          _cache[15] || (_cache[15] = createTextVNode("\n          Please make sure you are\n          ")),
          createBaseVNode("a", {
            href: $data.URLService.getPageUrl("account_verify")
          }, "verified", 8, _hoisted_12$1),
          _cache[16] || (_cache[16] = createTextVNode(" and\n          ")),
          createBaseVNode("a", {
            href: $data.URLService.getPageUrl("onboarding_2fa")
          }, "have 2FA enabled", 8, _hoisted_13$1),
          _cache[17] || (_cache[17] = createTextVNode(".\n        "))
        ], 64))
      ])) : $setup.userStateStore.state.isTradingBlocked ? (openBlock(), createElementBlock("span", _hoisted_14$1, "\n        Trading is currently unavailable for your account.\n      ")) : createCommentVNode("", true),
      _cache[24] || (_cache[24] = createTextVNode()),
      $options.matchingDisabled ? (openBlock(), createElementBlock("span", _hoisted_15$1, "\n        Only Limit orders are currently available for this pair.\n      ")) : createCommentVNode("", true)
    ]),
    _cache[25] || (_cache[25] = createTextVNode()),
    !$options.isSimpleBuyEnabled && $options.canSeeBuyDirectButton ? (openBlock(), createBlock(_component_BuyDirectCryptoButton, {
      key: 0,
      class: "cc-buy",
      currency: $options.activeBaseCurrency,
      "is-simple-buy-enabled": $options.isSimpleBuyEnabled,
      "is-paypal-supported": $options.isPaypalSupported,
      "is-credit-card-supported": $options.isCreditCardSupported,
      "is-ach-supported": $options.isAchSupported,
      "full-width": ""
    }, null, 8, ["currency", "is-simple-buy-enabled", "is-paypal-supported", "is-credit-card-supported", "is-ach-supported"])) : createCommentVNode("", true),
    _cache[26] || (_cache[26] = createTextVNode()),
    $options.shouldDisplayReversalDisclaimer ? (openBlock(), createElementBlock("span", _hoisted_16$1, toDisplayString($data.REVERSAL_DISCLAIMER) + " By continuing, you agree that you have reviewed and acknowledged this disclosure.\n    ", 1)) : createCommentVNode("", true)
  ]);
}
const OrderForm = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$l], ["__scopeId", "data-v-47807889"]]);
const maxAmountMessage = ({ side, availableBalances }) => {
  const activeMarket = useActiveMarketStore().activeMarket;
  let formattedBalance;
  if (side === constants$1.ORDER_SIDE.BUY) {
    const balanceDecimals = Math.min(activeMarket.decimals.counter, CURRENCIES[activeMarket.counter].decimals);
    formattedBalance = numberFormatter.amount({
      value: availableBalances.counter,
      decimals: balanceDecimals,
      currencyCode: activeMarket.counter,
      rounding: Decimal.ROUND_DOWN
    });
    return `You can only use up to ${formattedBalance} of your balance for purchasing ${activeMarket.base}`;
  } else {
    formattedBalance = numberFormatter.amount({
      value: availableBalances.base,
      decimals: CURRENCIES[activeMarket.base].decimals,
      currencyCode: activeMarket.base,
      rounding: Decimal.ROUND_DOWN
    });
    return `You only have ${formattedBalance} available`;
  }
};
const minOrderValueMessage = () => {
  const activeMarket = useActiveMarketStore().activeMarket;
  const value = numberFormatter.amount({
    value: activeMarket.minOrderValue,
    decimals: activeMarket.decimals.counter,
    currencyCode: activeMarket.counter
  });
  return `Minimum order value is ${value}`;
};
const maxOrderValueMessage = () => {
  return `Ensure this value is less than or equal to ${constants$1.ORDER_VALIDATION.MAX_NUMBER}`;
};
const maxAmountMessageInstantOrder = ({ side, availableBalances }) => {
  const activeMarket = useActiveMarketStore().activeMarket;
  let formattedBalance;
  if (side === constants$1.ORDER_SIDE.BUY) {
    formattedBalance = numberFormatter.amount({
      value: availableBalances.counter,
      decimals: activeMarket.decimals.counterInstantOrder,
      currencyCode: activeMarket.counter,
      rounding: Decimal.ROUND_DOWN
    });
    return `You can only use up to ${formattedBalance} of your balance for purchasing ${activeMarket.base}`;
  } else {
    formattedBalance = numberFormatter.amount({
      value: availableBalances.base,
      decimals: CURRENCIES[activeMarket.base].decimals,
      currencyCode: activeMarket.base,
      rounding: Decimal.ROUND_DOWN
    });
    return `You only have ${formattedBalance} available`;
  }
};
const maxAmount$3 = {
  message: maxAmountMessageInstantOrder,
  validate(value, { side, availableBalances }) {
    if (useSubAccountStore().allowNegativeBalance) {
      return true;
    }
    const decimalValue = toDecimal(value);
    if (side === constants$1.ORDER_SIDE.BUY) {
      return availableBalances.counter.greaterThanOrEqualTo(decimalValue);
    } else {
      return availableBalances.base.greaterThanOrEqualTo(decimalValue);
    }
  }
};
const minAmount$1 = {
  message: minOrderValueMessage,
  validate(amount, { side, marketOffer }) {
    const activeMarket = useActiveMarketStore().activeMarket;
    amount = toDecimal(amount);
    if (side === constants$1.ORDER_SIDE.BUY) {
      return amount.greaterThanOrEqualTo(activeMarket.minOrderValue);
    } else {
      return amount.mul(marketOffer.bid).greaterThanOrEqualTo(activeMarket.minOrderValue);
    }
  }
};
const maxNumber$3 = {
  message: maxOrderValueMessage,
  validate(value) {
    if (!value) {
      return true;
    }
    try {
      return new Decimal(value).lessThanOrEqualTo(constants$1.ORDER_VALIDATION.MAX_NUMBER);
    } catch (e) {
      return true;
    }
  }
};
defineRule("instantOrder_maxAmount", wrapper(maxAmount$3));
defineRule("instantOrder_minAmount", wrapper(minAmount$1));
defineRule("instantOrder_maxNumber", wrapper(maxNumber$3));
const _hoisted_1$k = { class: "order-input" };
const _hoisted_2$f = { class: "order-input__wrapper" };
const _hoisted_3$a = {
  key: 0,
  class: "input-presets"
};
const _hoisted_4$7 = {
  key: 1,
  class: "input-presets"
};
const _hoisted_5$6 = {
  key: 2,
  class: "error",
  "data-test": "validationErrorText"
};
const _sfc_main$q = {
  __name: "OrderInputWithValidation",
  props: /* @__PURE__ */ mergeModels({
    // input id
    field: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: void 0
    },
    inlineLabel: {
      type: String,
      required: false,
      default: void 0
    },
    errorLabel: {
      type: String,
      required: false,
      default: void 0
    },
    testId: {
      type: String,
      required: false,
      default: void 0
    },
    showPriceFillButton: {
      type: Boolean,
      required: false,
      default: false
    },
    priceFillButtonText: {
      type: String,
      required: false,
      default: void 0
    },
    addPresets: {
      type: Boolean,
      required: false,
      default: false
    },
    hide100Preset: {
      type: Boolean,
      required: false,
      default: false
    }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:value", "preset", "focus", "blur", "input", "priceFillRequested"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const model = useModel(__props, "modelValue");
    const props = __props;
    const labelForErrors = computed(() => {
      return props.errorLabel || props.field;
    });
    const { value, errorMessage, meta, resetField } = useField(() => props.field, null, {
      label: labelForErrors.value
    });
    watch(model, (newValue) => value.value = newValue);
    watch(value, (newValue) => {
      if (!newValue) {
        if (newValue === void 0 && !meta.dirty) {
          newValue = "";
        }
        emit("input", newValue);
        model.value = newValue;
        return;
      }
      const v = `${newValue}`.replace(",", ".").replace(/[.](?=.*[.])/g, "");
      if (newValue !== v) {
        value.value = v;
      } else {
        emit("input", newValue);
        model.value = newValue;
      }
    });
    function onFocus() {
      emit("focus");
    }
    function onBlur() {
      if (value.value === "") {
        resetField();
      }
      emit("blur");
    }
    function onPriceFill() {
      emit("priceFillRequested");
    }
    function onPreset(amount) {
      emit("preset", amount);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        createBaseVNode("div", _hoisted_2$f, [
          createVNode(unref(TextInput), {
            modelValue: unref(value),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            class: normalizeClass([{ "text-input--error": unref(errorMessage) && unref(meta).dirty }, "text-input--market"]),
            label: props.label,
            "test-id": __props.testId,
            type: "text",
            autocomplete: "off",
            postfix: props.inlineLabel,
            "reserve-space-for-error-row": false,
            onFocus,
            onBlur
          }, null, 8, ["modelValue", "class", "label", "test-id", "postfix"])
        ]),
        _cache[8] || (_cache[8] = createTextVNode()),
        props.addPresets ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
          createBaseVNode("div", {
            class: "input-presets__action",
            "data-test": "preset25",
            onClick: _cache[1] || (_cache[1] = ($event) => onPreset(0.25))
          }, "\n        25%\n      "),
          _cache[5] || (_cache[5] = createTextVNode()),
          createBaseVNode("div", {
            class: "input-presets__action",
            "data-test": "preset50",
            onClick: _cache[2] || (_cache[2] = ($event) => onPreset(0.5))
          }, "\n        50%\n      "),
          _cache[6] || (_cache[6] = createTextVNode()),
          createBaseVNode("div", {
            class: "input-presets__action",
            "data-test": "preset75",
            onClick: _cache[3] || (_cache[3] = ($event) => onPreset(0.75))
          }, "\n        75%\n      "),
          _cache[7] || (_cache[7] = createTextVNode()),
          !props.hide100Preset ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "input-presets__action",
            "data-test": "preset100",
            onClick: _cache[4] || (_cache[4] = ($event) => onPreset(1))
          }, "\n        100%\n      ")) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        _cache[9] || (_cache[9] = createTextVNode()),
        props.showPriceFillButton ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
          createBaseVNode("div", {
            class: "input-presets__action",
            "data-test": "onPriceFill",
            onClick: onPriceFill
          }, toDisplayString(props.priceFillButtonText), 1)
        ])) : createCommentVNode("", true),
        _cache[10] || (_cache[10] = createTextVNode()),
        unref(meta).dirty && unref(errorMessage) ? (openBlock(), createElementBlock("span", _hoisted_5$6, toDisplayString(unref(errorMessage)) + ".\n    ", 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
class FeeCalculationApiConverter {
  static parseCalculation(response) {
    const { fee, orderVolume } = response.data.data;
    return {
      fee: toDecimal(fee),
      orderVolume: toDecimal(orderVolume)
    };
  }
}
const feeConstants = {
  FEE_TYPE: {
    GROSS: "gross",
    NET: "net"
  }
};
const feeCalculation = {
  calculateFee(orderVolume, pairKey, feeType = feeConstants.FEE_TYPE.GROSS) {
    const url = URLService.buildUrl("feeCalculationResource");
    return axiosInstanceWithoutErrorHandling.post(url, {
      orderVolume,
      pair: pairKey,
      type: feeType
    }).then((response) => FeeCalculationApiConverter.parseCalculation(response));
  }
};
const getMinimalFee = (currencyCode) => {
  return constants$2.MINIMUM_FEE[currencyCode] ? constants$2.MINIMUM_FEE[currencyCode] : constants$2.MINIMUM_FEE.DEFAULT;
};
const calculateFee = (amount, counter, userFeeFactor, isGrossAmount = false) => {
  if (userFeeFactor.equals(0)) {
    return new Decimal(0);
  }
  const minimumFee = getMinimalFee(counter);
  const decimals = minimumFee.decimalPlaces();
  let fee = new Decimal(amount).mul(userFeeFactor);
  if (isGrossAmount) {
    fee = fee.div(userFeeFactor.add(1));
  }
  fee = fee.toDecimalPlaces(decimals, Decimal.ROUND_UP);
  return minimumFee.greaterThan(fee) ? minimumFee : fee;
};
const getFeeForGrossAmount = (amount, counter, userFeeFactor) => calculateFee(amount, counter, userFeeFactor, true);
const getFeeForNetAmount = (amount, counter, userFeeFactor) => calculateFee(amount, counter, userFeeFactor, false);
const ensureDecimalNumber = (value) => {
  if (!(value instanceof Decimal)) {
    try {
      value = new Decimal(value);
    } catch {
      value = new Decimal(0);
    }
  }
  return value;
};
const calculateUserFeeForVolume = async (orderVolume, marketKey, feeType = feeConstants.FEE_TYPE.GROSS) => {
  const defaultReturn = { fee: new Decimal(0), orderVolume: new Decimal(0) };
  if (orderVolume && orderVolume.greaterThan(0)) {
    try {
      return await feeCalculation.calculateFee(orderVolume, marketKey, feeType);
    } catch (e) {
      return defaultReturn;
    }
  }
  return defaultReturn;
};
const calculateUserFeeForAmountAndPrice = async (amount, price, marketKey, feeType = feeConstants.FEE_TYPE.GROSS) => {
  if (price && amount) {
    amount = ensureDecimalNumber(amount);
    const orderVolume = amount.mul(price);
    return await calculateUserFeeForVolume(orderVolume, marketKey, feeType);
  }
  return { fee: new Decimal(0), orderVolume: new Decimal(0) };
};
const utils = {
  getFeeForGrossAmount,
  getFeeForNetAmount,
  ensureDecimalNumber,
  getMinimalFee,
  calculateUserFeeForVolume,
  calculateUserFeeForAmountAndPrice
};
const _sfc_main$p = {
  __name: "InstantOrderForm",
  props: {
    // One of ordersConstants.ORDER_SIDE.BUY|SELL
    side: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activeMarketStore = useActiveMarketStore();
    const balancesStore = useBalancesStore();
    const orderbook100Store = useOrderbook100Store();
    const amount = ref("");
    const orderValue = ref(new Decimal(0));
    const activeMarket = computed(() => {
      return activeMarketStore.activeMarket;
    });
    const orderData = computed(() => {
      return {
        side: props.side,
        type: constants$1.ORDER_TYPE.INSTANT,
        amount: amount.value,
        market: activeMarket.value.key
      };
    });
    const labels = computed(() => {
      const typeBuy = props.side === constants$1.ORDER_SIDE.BUY;
      return {
        amount: {
          external: typeBuy ? "I want to spend" : "I want to sell",
          inline: activeMarket.value[typeBuy ? "counter" : "base"]
        }
      };
    });
    const validationSchema = computed(() => {
      const decimals = props.side === constants$1.ORDER_SIDE.BUY ? activeMarket.value.decimals.counterInstantOrder : activeMarket.value.decimals.base;
      return {
        amount: {
          required: true,
          decimal: { decimals },
          instantOrder_maxAmount: {
            side: props.side,
            availableBalances: balancesStore.activeMarketAccountAvailableBalance
          },
          instantOrder_minAmount: {
            side: props.side,
            marketOffer: orderbook100Store.activeMarketCurrentOffer
          },
          instantOrder_maxNumber: true
        }
      };
    });
    const { meta, validate, resetForm } = useForm({ validationSchema });
    const total = computed(() => {
      if (orderValue.value === null) {
        return "";
      }
      let currencyCode, decimals;
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        decimals = activeMarket.value.decimals.base;
        currencyCode = activeMarket.value.base;
      } else {
        decimals = CURRENCIES[activeMarket.value.counter].decimals;
        currencyCode = activeMarket.value.counter;
      }
      return numberFormatter.amount({
        value: orderValue.value,
        decimals,
        currencyCode,
        rounding: Decimal.ROUND_DOWN,
        markAsApprox: true
      });
    });
    function clear() {
      amount.value = "";
      orderValue.value = new Decimal(0);
      resetForm();
    }
    async function updateAmount(newAmount) {
      amount.value = newAmount;
      await throttledCalculateOrderValueForInput();
      requestAnimationFrame(() => {
        validate();
      });
    }
    async function calculateOrderValue() {
      if (!amount.value || document.hidden) {
        return;
      }
      const decimalAmount = toDecimal(amount.value);
      if (decimalAmount.lessThanOrEqualTo(0)) {
        orderValue.value = new Decimal(0);
        return;
      }
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        const { orderVolume } = await utils.calculateUserFeeForVolume(
          decimalAmount,
          activeMarket.value.key
        );
        const price = orderbook100Store.activeMarketCurrentOffer.ask;
        orderValue.value = price.isZero() ? price : orderVolume.div(price);
      } else {
        const price = orderbook100Store.activeMarketCurrentOffer.bid;
        let orderVolume = new Decimal(0);
        if (price.greaterThan(0)) {
          const userFee = await utils.calculateUserFeeForAmountAndPrice(
            decimalAmount,
            price,
            activeMarket.value.key
          );
          orderVolume = userFee.orderVolume;
        }
        orderValue.value = orderVolume.lessThanOrEqualTo(0) ? new Decimal(0) : orderVolume;
      }
    }
    function onPreset(percentage = 1) {
      const balanceType = props.side === constants$1.ORDER_SIDE.BUY ? "counter" : "base";
      const decimalsType = props.side === constants$1.ORDER_SIDE.BUY ? "counterInstantOrder" : "base";
      const orderAmount = balancesStore.activeMarketAccountAvailableBalance[balanceType].mul(percentage).toDecimalPlaces(activeMarket.value.decimals[decimalsType], Decimal.ROUND_DOWN);
      updateAmount(orderAmount.toFixed());
    }
    const throttledCalculateOrderValueForOrderBook = throttle$1(calculateOrderValue, 1e4, { "leading": false });
    const throttledCalculateOrderValueForInput = throttle$1(calculateOrderValue, 1e3, { "leading": false });
    watch(() => props.side, () => {
      orderValue.value = new Decimal(0);
      throttledCalculateOrderValueForInput();
    });
    watch(() => orderbook100Store.orderbook, async () => {
      await throttledCalculateOrderValueForOrderBook();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(OrderForm), {
        "order-data": orderData.value,
        side: props.side,
        "total-text": total.value,
        valid: unref(meta).valid,
        dirty: unref(meta).dirty,
        "requires-matching": "",
        "total-label": "Receive",
        onClear: clear
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$q), {
            ref: "amountInputValidationProvider",
            modelValue: amount.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => amount.value = $event),
            label: labels.value.amount.external,
            "inline-label": labels.value.amount.inline,
            "add-presets": "",
            field: "amount",
            "data-test": "amountInput",
            onInput: updateAmount,
            onPreset
          }, null, 8, ["modelValue", "label", "inline-label"])
        ]),
        _: 1
      }, 8, ["order-data", "side", "total-text", "valid", "dirty"]);
    };
  }
};
const maxAmount$2 = {
  message: maxAmountMessage,
  validate(amount, { side, orderFee, availableBalances, marketOffer }) {
    const activeMarket = useActiveMarketStore().activeMarket;
    if (useSubAccountStore().allowNegativeBalance) {
      return true;
    }
    if (side === constants$1.ORDER_SIDE.BUY) {
      try {
        let orderValue = new Decimal(amount).mul(marketOffer.ask);
        orderValue = orderValue.add(orderFee);
        const roundedBalance = availableBalances.counter.toDecimalPlaces(
          activeMarket.decimals.counter,
          Decimal.ROUND_DOWN
        );
        return orderValue.lessThanOrEqualTo(roundedBalance);
      } catch (e) {
        return false;
      }
    } else {
      return availableBalances.base.greaterThanOrEqualTo(toDecimal(amount));
    }
  }
};
const minAmount = {
  message: minOrderValueMessage,
  validate(amount, { side, marketPrice, marketOffer }) {
    const activeMarket = useActiveMarketStore().activeMarket;
    amount = toDecimal(amount);
    let price;
    if (side === constants$1.ORDER_SIDE.BUY) {
      price = marketOffer.ask.greaterThan(0) ? marketOffer.ask : marketPrice;
    } else {
      price = marketOffer.bid.greaterThan(0) ? marketOffer.bid : marketPrice;
    }
    return amount.mul(price).greaterThanOrEqualTo(activeMarket.minOrderValue);
  }
};
const maxNumber$2 = {
  message: maxOrderValueMessage,
  validate(field) {
    if (!field) {
      return true;
    }
    try {
      field = new Decimal(field);
    } catch (e) {
      return true;
    }
    return field.lessThanOrEqualTo(constants$1.ORDER_VALIDATION.MAX_NUMBER);
  }
};
defineRule("marketOrder_maxAmount", wrapper(maxAmount$2));
defineRule("marketOrder_minAmount", wrapper(minAmount));
defineRule("marketOrder_maxNumber", wrapper(maxNumber$2));
const _sfc_main$o = {
  __name: "MarketOrderForm",
  props: {
    // One of ordersConstants.ORDER_SIDE.BUY|SELL
    side: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activeMarketStore = useActiveMarketStore();
    const balancesStore = useBalancesStore();
    const orderbook100Store = useOrderbook100Store();
    const tickersStore = useTickersStore();
    const amount = ref("");
    const orderFee = ref(new Decimal(0));
    const activeMarket = computed(() => {
      return activeMarketStore.activeMarket;
    });
    const marketPrice = computed(() => {
      var _a;
      return ((_a = tickersStore.tickers[activeMarket.value.key]) == null ? void 0 : _a.last) ?? new Decimal(0);
    });
    const isBuyOrder = computed(() => {
      return props.side === constants$1.ORDER_SIDE.BUY;
    });
    const orderData = computed(() => {
      return {
        side: props.side,
        type: constants$1.ORDER_TYPE.MARKET,
        amount: amount.value,
        market: activeMarket.value.key
      };
    });
    const labels = computed(() => {
      const typeBuy = props.side === constants$1.ORDER_SIDE.BUY;
      return {
        amount: {
          external: typeBuy ? "I want to buy" : "I want to sell",
          inline: activeMarket.value.base
        }
      };
    });
    const validationSchema = computed(() => {
      return {
        amount: {
          required: true,
          decimal: { decimals: activeMarket.value.decimals.base },
          marketOrder_maxAmount: {
            side: props.side,
            orderFee: orderFee.value,
            availableBalances: balancesStore.activeMarketAccountAvailableBalance,
            marketOffer: orderbook100Store.activeMarketCurrentOffer
          },
          marketOrder_minAmount: {
            side: props.side,
            marketPrice: marketPrice.value,
            marketOffer: orderbook100Store.activeMarketCurrentOffer
          },
          marketOrder_maxNumber: true
        }
      };
    });
    const { meta, resetForm } = useForm({ validationSchema });
    const subtotalText = computed(() => {
      let amountDecimal;
      const currencyCode = activeMarket.value.counter;
      const decimals = CURRENCIES[activeMarket.value.counter].decimals;
      try {
        amountDecimal = new Decimal(amount.value);
      } catch (e) {
        return numberFormatter.amount({ value: new Decimal(0), decimals, currencyCode });
      }
      const counterAmount = baseToNetCounter(
        amountDecimal,
        decimals,
        props.side === constants$1.ORDER_SIDE.BUY ? orderbook100Store.orderbook.asks : orderbook100Store.orderbook.bids
      );
      if (counterAmount.lessThanOrEqualTo(0)) {
        return numberFormatter.amount({ value: new Decimal(0), decimals, currencyCode });
      }
      let subtotal;
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        subtotal = counterAmount.add(orderFee.value);
      } else {
        subtotal = counterAmount.sub(orderFee.value);
      }
      subtotal = subtotal.lessThanOrEqualTo(0) || amountDecimal.lessThanOrEqualTo(0) ? new Decimal(0) : subtotal;
      return numberFormatter.amount({
        value: subtotal,
        decimals,
        currencyCode,
        rounding: Decimal.ROUND_DOWN,
        markAsApprox: true
      });
    });
    function clear() {
      amount.value = "";
      nextTick(resetForm);
    }
    async function updateAmount(newAmount) {
      amount.value = newAmount;
      await throttledCalculateOrderValueForInput(newAmount);
    }
    async function onPreset(percentage = 1) {
      let newAmount;
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        const counterBalance = balancesStore.activeMarketAccountAvailableBalance.counter.toDecimalPlaces(
          activeMarket.value.decimals.counter,
          Decimal.ROUND_DOWN
        );
        const counterToSpend = counterBalance.mul(percentage);
        const { fee, orderVolume } = await utils.calculateUserFeeForVolume(
          counterToSpend,
          activeMarket.value.key
        );
        orderFee.value = fee;
        newAmount = getBaseAmountForPercentageOfCounterBalance(
          percentage,
          counterBalance,
          orderVolume
        );
      } else {
        newAmount = balancesStore.activeMarketAccountAvailableBalance.base.mul(percentage).toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN);
        const { fee } = await utils.calculateUserFeeForAmountAndPrice(
          newAmount,
          marketPrice.value,
          activeMarket.value.key
        );
        orderFee.value = fee;
      }
      amount.value = newAmount.toFixed();
    }
    function getBaseAmountForPercentageOfCounterBalance(percentage, counterBalance, counterToSpend) {
      let amountOfCounterToSpend = counterToSpend;
      let baseAmount = new Decimal(0);
      let lastPrice = marketPrice.value;
      for (const ask of orderbook100Store.orderbook.asks) {
        if (counterBalance.lessThanOrEqualTo(0) || amountOfCounterToSpend.lessThanOrEqualTo(0)) {
          break;
        }
        let priceAmount = new Decimal(ask.amount);
        let priceValue = new Decimal(ask.value);
        if (counterBalance.lessThan(priceValue)) {
          priceAmount = counterBalance.div(ask.price).toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN);
          priceValue = counterBalance;
        }
        if (amountOfCounterToSpend.lessThan(priceValue)) {
          priceValue = amountOfCounterToSpend;
          priceAmount = amountOfCounterToSpend.div(ask.price).toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN);
        }
        lastPrice = new Decimal(ask.price);
        counterBalance = counterBalance.sub(priceValue);
        amountOfCounterToSpend = amountOfCounterToSpend.sub(priceValue);
        baseAmount = baseAmount.add(priceAmount);
      }
      if (amountOfCounterToSpend.greaterThan(0) && counterBalance.greaterThan(0) && lastPrice.greaterThan(0)) {
        const priceAmount = amountOfCounterToSpend.div(lastPrice).toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN);
        return baseAmount.add(priceAmount);
      }
      return baseAmount.toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN);
    }
    function baseToNetCounter(baseAmount, counterDecimals, orderbook) {
      let netCounterValue = new Decimal(0);
      let lastPrice = marketPrice.value;
      for (const order of orderbook) {
        if (baseAmount.greaterThan(0)) {
          const newAmount = baseAmount.lessThan(order.amount) ? baseAmount : new Decimal(order.amount);
          const value = newAmount.mul(order.price);
          baseAmount = baseAmount.sub(newAmount);
          netCounterValue = netCounterValue.add(value);
          lastPrice = new Decimal(order.price);
        } else {
          break;
        }
      }
      if (baseAmount.greaterThan(0) && lastPrice.greaterThan(0)) {
        const value = baseAmount.mul(lastPrice);
        netCounterValue = netCounterValue.add(value);
      }
      return netCounterValue.toDecimalPlaces(counterDecimals, Decimal.ROUND_DOWN);
    }
    async function calculateOrderFee() {
      if (!amount.value || !marketPrice.value || document.hidden) {
        return;
      }
      const decimalPrice = toDecimal(marketPrice.value);
      if (decimalPrice.lessThanOrEqualTo(0)) {
        orderFee.value = new Decimal(0);
        return;
      }
      const decimalAmount = toDecimal(amount.value);
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        const { fee } = await utils.calculateUserFeeForAmountAndPrice(
          decimalAmount,
          marketPrice.value,
          activeMarket.value.key,
          feeConstants.FEE_TYPE.NET
        );
        orderFee.value = fee;
      } else {
        const { fee } = await utils.calculateUserFeeForAmountAndPrice(
          decimalAmount,
          marketPrice.value,
          activeMarket.value.key
        );
        orderFee.value = fee;
      }
    }
    const throttledCalculateOrderValueForOrderBook = _.throttle(calculateOrderFee, 1e4, { "leading": false });
    const throttledCalculateOrderValueForInput = _.throttle(calculateOrderFee, 1e3, { "leading": false });
    watch(() => orderbook100Store.orderbook, async () => {
      await throttledCalculateOrderValueForOrderBook();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(OrderForm), {
        "order-data": orderData.value,
        side: props.side,
        "total-text": subtotalText.value,
        valid: unref(meta).valid,
        dirty: unref(meta).dirty,
        "requires-matching": "",
        "total-label": "Subtotal",
        onClear: clear
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$q), {
            modelValue: amount.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => amount.value = $event),
            label: labels.value.amount.external,
            "inline-label": labels.value.amount.inline,
            "hide-100-preset": isBuyOrder.value,
            "add-presets": "",
            field: "amount",
            "validation-mode": "passive",
            "data-test": "amountInput",
            onInput: updateAmount,
            onPreset
          }, null, 8, ["modelValue", "label", "inline-label", "hide-100-preset"])
        ]),
        _: 1
      }, 8, ["order-data", "side", "total-text", "valid", "dirty"]);
    };
  }
};
const marketRange20 = {
  message({ side, orderbook }) {
    var _a, _b;
    const highestBid = (_a = orderbook.bids[0]) == null ? void 0 : _a.price;
    const lowestAsk = (_b = orderbook.asks[0]) == null ? void 0 : _b.price;
    if (side === constants$1.ORDER_SIDE.BUY) {
      if (!highestBid) {
        return "Price must be below lowest ask while no other bids are placed";
      }
      return "Price should not be higher than 20% above market price";
    } else {
      if (!lowestAsk) {
        return "Price must be above highest bid while no other asks are placed";
      }
      return "Price should not be lower than 20% below market price";
    }
  },
  validate(value, { side, orderbook }) {
    var _a, _b;
    const highestBid = (_a = orderbook.bids[0]) == null ? void 0 : _a.price;
    const lowestAsk = (_b = orderbook.asks[0]) == null ? void 0 : _b.price;
    if (!highestBid && !lowestAsk) {
      return true;
    }
    if (side === constants$1.ORDER_SIDE.BUY) {
      if (!lowestAsk || toDecimal(value).lt(lowestAsk)) {
        return true;
      }
      if (!highestBid) {
        return false;
      }
      return toDecimal(value).lte(toDecimal(highestBid).mul("1.2"));
    } else {
      if (!highestBid || toDecimal(value).gt(highestBid)) {
        return true;
      }
      if (!lowestAsk) {
        return false;
      }
      return toDecimal(value).gte(toDecimal(lowestAsk).mul("0.8"));
    }
  }
};
const maxAmount$1 = {
  message: maxAmountMessage,
  validate(amount, { side, userEnteredPrice, orderFee, availableBalances }) {
    const activeMarket = useActiveMarketStore().activeMarket;
    if (useSubAccountStore().allowNegativeBalance) {
      return true;
    }
    if (side === constants$1.ORDER_SIDE.BUY) {
      if (!userEnteredPrice && userEnteredPrice !== 0) {
        return true;
      }
      try {
        let orderValue = new Decimal(amount).mul(userEnteredPrice);
        orderValue = orderValue.add(orderFee);
        const roundedBalance = availableBalances.counter.toDecimalPlaces(
          activeMarket.decimals.counter,
          Decimal.ROUND_DOWN
        );
        return orderValue.lessThanOrEqualTo(roundedBalance);
      } catch (e) {
        return false;
      }
    } else {
      return availableBalances.base.greaterThanOrEqualTo(toDecimal(amount));
    }
  }
};
const minOrderValue = {
  message: minOrderValueMessage,
  validate(amount, { userEnteredPrice }) {
    const activeMarket = useActiveMarketStore().activeMarket;
    if (!userEnteredPrice && userEnteredPrice !== 0) {
      return true;
    }
    try {
      const orderValue = new Decimal(userEnteredPrice).mul(amount);
      return orderValue.greaterThanOrEqualTo(activeMarket.minOrderValue);
    } catch (e) {
      return false;
    }
  }
};
const limitMinValue = {
  message({ side }) {
    if (side === constants$1.ORDER_SIDE.BUY) {
      return `Executed price must be higher than buy price`;
    } else {
      return `Executed price must be lower than sell price`;
    }
  },
  validate(value, { side, userEnteredPrice }) {
    if (!userEnteredPrice && userEnteredPrice !== 0) {
      return true;
    }
    try {
      value = new Decimal(value);
      userEnteredPrice = new Decimal(userEnteredPrice);
    } catch (e) {
      return false;
    }
    if (side === constants$1.ORDER_SIDE.BUY) {
      return value.greaterThan(userEnteredPrice);
    } else {
      return value.lessThan(userEnteredPrice);
    }
  }
};
const maxNumber$1 = {
  message: maxOrderValueMessage,
  validate(value) {
    if (!value) {
      return true;
    }
    try {
      return new Decimal(value).lessThanOrEqualTo(constants$1.ORDER_VALIDATION.MAX_NUMBER);
    } catch (e) {
      return true;
    }
  }
};
defineRule("limitOrder_marketRange20", wrapper(marketRange20));
defineRule("limitOrder_maxAmount", wrapper(maxAmount$1));
defineRule("limitOrder_minOrderValue", wrapper(minOrderValue));
defineRule("limitOrder_limitMinValue", wrapper(limitMinValue));
defineRule("limitOrder_maxNumber", wrapper(maxNumber$1));
const _sfc_main$n = {
  __name: "LimitOrderForm",
  props: {
    // One of ordersConstants.ORDER_SIDE.BUY|SELL
    side: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const nuxtApp = useNuxtApp();
    const activeMarketStore = useActiveMarketStore();
    const balancesStore = useBalancesStore();
    const basicMarketsOrderFormStore = useBasicMarketsOrderFormStore();
    const orderbook100Store = useOrderbook100Store();
    const amount = ref("");
    const price = ref("");
    const osoEnabled = ref(false);
    const osoPrice = ref("");
    const orderFee = ref(new Decimal(0));
    const orderValue = ref(new Decimal(0));
    const activeMarket = computed(() => {
      return activeMarketStore.activeMarket;
    });
    const orderData = computed(() => {
      const order = {
        type: constants$1.ORDER_TYPE.LIMIT,
        side: props.side,
        amount: amount.value,
        price: price.value,
        market: activeMarket.value.key
      };
      if (osoEnabled.value && osoPrice.value) {
        order.osoPrice = osoPrice.value;
      }
      return order;
    });
    const labels = computed(() => {
      const typeBuy = props.side === constants$1.ORDER_SIDE.BUY;
      return {
        amount: {
          external: typeBuy ? "Amount to buy" : "Amount to sell",
          inline: activeMarket.value.base
        },
        price: {
          external: typeBuy ? "Buy price" : "Sell price",
          inline: activeMarket.value.counter
        },
        osoPrice: {
          switch: typeBuy ? "Sell if executed" : "Buy if executed",
          external: typeBuy ? "Sell if executed price" : "Buy if executed price",
          inline: activeMarket.value.counter,
          error: "executed price"
        }
      };
    });
    const bestAskOrBidLabel = computed(() => {
      return props.side === constants$1.ORDER_SIDE.BUY ? "Best bid" : "Best ask";
    });
    const throttledCalculateOrderFee = asyncThrottle(
      async function() {
        if (!amount.value || !price.value) {
          return;
        }
        const decimalPrice = toDecimal(price.value);
        if (decimalPrice.lessThanOrEqualTo(0)) {
          orderFee.value = new Decimal(0);
          orderValue.value = new Decimal(0);
          return;
        }
        const decimalAmount = toDecimal(amount.value);
        if (props.side === constants$1.ORDER_SIDE.BUY) {
          const { fee, orderVolume } = await utils.calculateUserFeeForAmountAndPrice(
            decimalAmount,
            decimalPrice,
            activeMarket.value.key,
            feeConstants.FEE_TYPE.NET
          );
          orderFee.value = fee;
          orderValue.value = orderVolume.add(fee);
        } else {
          const { fee, orderVolume } = await utils.calculateUserFeeForAmountAndPrice(
            decimalAmount,
            decimalPrice,
            activeMarket.value.key
          );
          orderFee.value = fee;
          orderValue.value = orderVolume;
        }
      },
      1e3,
      { "leading": false }
    );
    const validationSchema = computed(() => {
      const rules = {
        amount: {
          required: true,
          decimal: { decimals: activeMarket.value.decimals.base },
          limitOrder_maxAmount: {
            side: props.side,
            userEnteredPrice: price.value,
            orderFee: orderFee.value,
            availableBalances: balancesStore.activeMarketAccountAvailableBalance
          },
          limitOrder_minOrderValue: {
            side: props.side,
            userEnteredPrice: price.value
          },
          limitOrder_maxNumber: true
        },
        price: {
          required: true,
          decimal: { decimals: activeMarket.value.decimals.counter },
          limitOrder_marketRange20: {
            side: props.side,
            orderbook: orderbook100Store.orderbook
          },
          limitOrder_maxNumber: true
        }
      };
      if (osoEnabled.value) {
        rules.osoPrice = {
          required: true,
          decimal: { decimals: activeMarket.value.decimals.counter },
          limitOrder_limitMinValue: {
            side: props.side,
            userEnteredPrice: price.value
          },
          limitOrder_maxNumber: true
        };
      }
      return rules;
    });
    const { meta, resetForm } = useForm({ validationSchema });
    const approxAmount = computed(() => {
      const decimalOrderValue = utils.ensureDecimalNumber(orderValue.value);
      return numberFormatter.amount({
        decimals: CURRENCIES[activeMarket.value.counter].decimals,
        currencyCode: activeMarket.value.counter,
        value: decimalOrderValue,
        rounding: Decimal.ROUND_DOWN
      });
    });
    function clear() {
      amount.value = "";
      price.value = "";
      osoEnabled.value = false;
      osoPrice.value = "";
      orderFee.value = new Decimal(0);
      orderValue.value = new Decimal(0);
      nextTick(resetForm);
    }
    async function updateAmount(newAmount) {
      amount.value = newAmount;
      await throttledCalculateOrderFee();
    }
    async function updatePrice(newPrice) {
      price.value = newPrice;
      await throttledCalculateOrderFee();
    }
    function onPriceFill() {
      let marketPrice;
      const decimals = activeMarket.value.decimals.counter;
      const delta = 10 ** (-1 * decimals);
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        marketPrice = orderbook100Store.activeMarketCurrentOffer.bid.add(delta);
      } else {
        marketPrice = orderbook100Store.activeMarketCurrentOffer.ask.sub(delta);
      }
      price.value = marketPrice.toFixed(decimals);
    }
    async function onPreset(percentage = 1) {
      if (!price.value) {
        onPriceFill();
      }
      let decimalPrice;
      try {
        decimalPrice = new Decimal(price.value);
      } catch (e) {
        return false;
      }
      let newAmount;
      const availableBalance = balancesStore.activeMarketAccountAvailableBalance;
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        const { orderVolume, fee } = await utils.calculateUserFeeForVolume(
          // market/services/order_processor.py
          // value = utils.round_counter(full_price, oa.currency_pair, rounding=decimal.ROUND_UP)
          availableBalance.counter.todp(activeMarket.value.decimals.counter, Decimal.ROUND_DOWN).mul(percentage),
          activeMarket.value.key
        );
        newAmount = maxOrderAmount(decimalPrice, orderVolume);
        if (newAmount.greaterThan(0)) {
          orderFee.value = fee;
          orderValue.value = orderVolume.add(fee);
        }
      } else {
        newAmount = availableBalance.base.mul(percentage);
      }
      await updateAmount(newAmount.toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN).toFixed());
    }
    function maxOrderAmount(decimalPrice, orderVolume) {
      if (decimalPrice.lessThanOrEqualTo(0)) {
        return new Decimal(0);
      }
      const amountDecimal = orderVolume.div(decimalPrice);
      if (amountDecimal.isNegative()) {
        return new Decimal(0);
      }
      return amountDecimal.toDecimalPlaces(activeMarket.value.decimals.base, Decimal.ROUND_DOWN);
    }
    onMounted(() => {
      if (basicMarketsOrderFormStore.selectedPrice) {
        if (basicMarketsOrderFormStore.selectedPrice.lessThanOrEqualTo(0)) {
          onPriceFill();
        } else {
          price.value = toDecimal(basicMarketsOrderFormStore.selectedPrice).toFixed();
        }
      }
    });
    watch(() => basicMarketsOrderFormStore.selectedPrice, (newSelectedPrice) => {
      if (!newSelectedPrice) {
        return;
      }
      price.value = toDecimal(newSelectedPrice).toFixed();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(OrderForm), {
        "order-data": orderData.value,
        "total-label": unref(nuxtApp).$isMobileSize ? "Est. order total" : "Estimated order total",
        "total-text": approxAmount.value,
        side: props.side,
        valid: unref(meta).valid,
        dirty: unref(meta).dirty,
        onClear: clear
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$q), {
            modelValue: amount.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => amount.value = $event),
            label: labels.value.amount.external,
            "inline-label": labels.value.amount.inline,
            "add-presets": "",
            field: "amount",
            "data-test": "amountInput",
            onInput: updateAmount,
            onPreset
          }, null, 8, ["modelValue", "label", "inline-label"]),
          _cache[4] || (_cache[4] = createTextVNode()),
          createVNode(unref(_sfc_main$q), {
            modelValue: price.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => price.value = $event),
            label: labels.value.price.external,
            "inline-label": labels.value.price.inline,
            "price-fill-button-text": bestAskOrBidLabel.value,
            "show-price-fill-button": "",
            field: "price",
            "data-test": "priceInput",
            onInput: updatePrice,
            onPriceFillRequested: onPriceFill
          }, null, 8, ["modelValue", "label", "inline-label", "price-fill-button-text"]),
          _cache[5] || (_cache[5] = createTextVNode()),
          createVNode(unref(LabeledSwitch), {
            value: osoEnabled.value,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => osoEnabled.value = $event),
            label: labels.value.osoPrice.switch,
            class: "action",
            compact: "",
            "test-id": "limitEnabledSwitch"
          }, null, 8, ["value", "label"]),
          _cache[6] || (_cache[6] = createTextVNode()),
          osoEnabled.value ? (openBlock(), createBlock(unref(_sfc_main$q), {
            key: 0,
            modelValue: osoPrice.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => osoPrice.value = $event),
            label: labels.value.osoPrice.external,
            "inline-label": labels.value.osoPrice.inline,
            "error-label": labels.value.osoPrice.error,
            field: "osoPrice",
            "data-test": "osoPriceInput"
          }, null, 8, ["modelValue", "label", "inline-label", "error-label"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["order-data", "total-label", "total-text", "side", "valid", "dirty"]);
    };
  }
};
const LimitOrderForm = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-b91206c9"]]);
const priceFitMarket = {
  message({ side }) {
    if (side === constants$1.ORDER_SIDE.BUY) {
      return "Trigger price must be above current market price";
    } else {
      return "Trigger price must be below current market price";
    }
  },
  validate(triggerPrice, { side, marketPrice }) {
    triggerPrice = toDecimal(triggerPrice);
    if (side === constants$1.ORDER_SIDE.BUY) {
      return triggerPrice.greaterThan(marketPrice);
    }
    return triggerPrice.lessThan(marketPrice);
  }
};
const maxAmount = {
  message: maxAmountMessage,
  validate(amount, { side, orderFee, availableBalances }) {
    if (useSubAccountStore().allowNegativeBalance) {
      return true;
    }
    if (side === constants$1.ORDER_SIDE.BUY) {
      let decimalAmount;
      try {
        decimalAmount = new Decimal(amount);
      } catch (e) {
        return false;
      }
      const neededFunds = decimalAmount.add(orderFee);
      return availableBalances.counter.greaterThanOrEqualTo(neededFunds);
    } else {
      return availableBalances.base.greaterThanOrEqualTo(toDecimal(amount));
    }
  }
};
const minValue = {
  message: minOrderValueMessage,
  validate(amount, { side, userEnteredPrice }) {
    const activeMarket = useActiveMarketStore().activeMarket;
    amount = toDecimal(amount);
    if (side === constants$1.ORDER_SIDE.BUY) {
      return amount.greaterThanOrEqualTo(activeMarket.minOrderValue);
    } else {
      if (!userEnteredPrice && userEnteredPrice !== 0) {
        return true;
      }
      try {
        userEnteredPrice = new Decimal(userEnteredPrice);
      } catch (e) {
        return true;
      }
      return amount.mul(userEnteredPrice).greaterThanOrEqualTo(activeMarket.minOrderValue);
    }
  }
};
const maxNumber = {
  message: maxOrderValueMessage,
  validate(value) {
    if (!value) {
      return true;
    }
    try {
      return new Decimal(value).lessThanOrEqualTo(constants$1.ORDER_VALIDATION.MAX_NUMBER);
    } catch (e) {
      return true;
    }
  }
};
defineRule("stopOrder_maxAmount", wrapper(maxAmount));
defineRule("stopOrder_priceFitMarket", wrapper(priceFitMarket));
defineRule("stopOrder_minValue", wrapper(minValue));
defineRule("stopOrder_maxNumber", wrapper(maxNumber));
const _sfc_main$m = {
  __name: "StopOrderForm",
  props: {
    // One of ordersConstants.ORDER_SIDE.BUY|SELL
    side: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const nuxtApp = useNuxtApp();
    const activeMarketStore = useActiveMarketStore();
    const balancesStore = useBalancesStore();
    const basicMarketsOrderFormStore = useBasicMarketsOrderFormStore();
    const tickersStore = useTickersStore();
    const amount = ref("");
    const price = ref("");
    const trailing = ref(false);
    const orderFee = ref(new Decimal(0));
    const orderValue = ref(new Decimal(0));
    const marketPrice = computed(() => {
      var _a;
      return ((_a = tickersStore.tickers[activeMarket.value.key]) == null ? void 0 : _a.last) ?? new Decimal(0);
    });
    const activeMarket = computed(() => {
      return activeMarketStore.activeMarket;
    });
    const orderData = computed(() => {
      return {
        type: constants$1.ORDER_TYPE.STOP_MARKET,
        side: props.side,
        amount: amount.value,
        stopPrice: price.value,
        trailing: trailing.value,
        market: activeMarket.value.key
      };
    });
    const labels = computed(() => {
      const typeBuy = props.side === constants$1.ORDER_SIDE.BUY;
      return {
        amount: {
          external: typeBuy ? "Amount to spend" : "Amount to sell",
          inline: activeMarket.value[typeBuy ? "counter" : "base"]
        },
        price: {
          external: typeBuy ? "If price rises to" : "If price falls to",
          inline: activeMarket.value.counter,
          error: "trigger price"
        }
      };
    });
    const validationSchema = computed(() => {
      const decimals = props.side === constants$1.ORDER_SIDE.BUY ? activeMarket.value.decimals.counter : activeMarket.value.decimals.base;
      return {
        amount: {
          required: true,
          decimal: { decimals },
          stopOrder_maxAmount: {
            side: props.side,
            orderFee: orderFee.value,
            availableBalances: balancesStore.activeMarketAccountAvailableBalance
          },
          stopOrder_minValue: {
            side: props.side,
            userEnteredPrice: price.value
          },
          stopOrder_maxNumber: true
        },
        price: {
          required: true,
          decimal: {
            decimals: activeMarket.value.decimals.counter
          },
          stopOrder_priceFitMarket: {
            side: props.side,
            marketPrice: marketPrice.value
          },
          stopOrder_maxNumber: true
        }
      };
    });
    const { meta, resetForm } = useForm({ validationSchema });
    const approxAmount = computed(() => {
      let decimals, currencyCode;
      const priceDecimal = utils.ensureDecimalNumber(price.value);
      let total = new Decimal(0);
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        decimals = activeMarket.value.decimals.base;
        currencyCode = activeMarket.value.base;
        if (priceDecimal.isPositive() && orderValue.value.isPositive()) {
          total = orderValue.value.div(priceDecimal);
        }
      } else {
        decimals = CURRENCIES[activeMarket.value.counter].decimals;
        currencyCode = activeMarket.value.counter;
        if (priceDecimal.isPositive() && orderValue.value.isPositive()) {
          total = orderValue.value;
        }
      }
      return numberFormatter.amount({
        value: total,
        decimals,
        currencyCode,
        rounding: Decimal.ROUND_DOWN
      });
    });
    const throttledCalculateOrderFee = asyncThrottle(
      async function() {
        if (!amount.value || !price.value) {
          return;
        }
        const decimalPrice = toDecimal(price.value);
        if (decimalPrice.lessThanOrEqualTo(0)) {
          orderFee.value = new Decimal(0);
          orderValue.value = new Decimal(0);
          return;
        }
        const decimalAmount = toDecimal(amount.value);
        let fee, orderVolume;
        if (props.side === constants$1.ORDER_SIDE.BUY) {
          ({ fee, orderVolume } = await utils.calculateUserFeeForVolume(
            decimalAmount,
            activeMarket.value.key,
            feeConstants.FEE_TYPE.NET
          ));
        } else {
          ({ fee, orderVolume } = await utils.calculateUserFeeForAmountAndPrice(
            decimalAmount,
            decimalPrice,
            activeMarket.value.key
          ));
        }
        orderFee.value = fee;
        orderValue.value = orderVolume;
      },
      1e3,
      { "leading": false }
    );
    function clear() {
      amount.value = "";
      price.value = "";
      orderFee.value = new Decimal(0);
      orderValue.value = new Decimal(0);
      trailing.value = false;
      nextTick(resetForm);
    }
    async function updateAmount(newAmount) {
      amount.value = newAmount;
      await throttledCalculateOrderFee();
    }
    async function updatePrice(newPrice) {
      price.value = newPrice;
      await throttledCalculateOrderFee();
    }
    async function onPreset(percentage = 1) {
      let newAmount, decimals;
      if (props.side === constants$1.ORDER_SIDE.BUY) {
        decimals = activeMarket.value.decimals.counter;
        const availableBalance = balancesStore.activeMarketAccountAvailableBalance;
        const { orderVolume, fee } = await utils.calculateUserFeeForVolume(
          availableBalance.counter.todp(decimals, Decimal.ROUND_DOWN).mul(percentage),
          activeMarket.value.key
        );
        newAmount = orderVolume.isNegative() ? new Decimal(0) : orderVolume;
        if (price.value) {
          orderFee.value = fee;
          orderValue.value = orderVolume;
        }
      } else {
        newAmount = balancesStore.activeMarketAccountAvailableBalance.base.mul(percentage);
        decimals = activeMarket.value.decimals.base;
      }
      await updateAmount(newAmount.toDecimalPlaces(decimals, Decimal.ROUND_DOWN).toFixed());
    }
    onMounted(() => {
      if (basicMarketsOrderFormStore.selectedPrice) {
        price.value = toDecimal(basicMarketsOrderFormStore.selectedPrice).toFixed();
      }
    });
    watch(() => basicMarketsOrderFormStore.selectedPrice, (newSelectedPrice) => {
      if (!newSelectedPrice) {
        return;
      }
      price.value = toDecimal(newSelectedPrice).toFixed();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(OrderForm), {
        "order-data": orderData.value,
        "total-label": unref(nuxtApp).$isMobileSize ? "Est. order total" : "Estimated order total",
        "total-text": approxAmount.value,
        side: props.side,
        valid: unref(meta).valid,
        dirty: unref(meta).dirty,
        "requires-matching": "",
        onClear: clear
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$q), {
            modelValue: amount.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => amount.value = $event),
            label: labels.value.amount.external,
            "inline-label": labels.value.amount.inline,
            "add-presets": "",
            field: "amount",
            "data-test": "amountInput",
            onInput: updateAmount,
            onPreset
          }, null, 8, ["modelValue", "label", "inline-label"]),
          _cache[3] || (_cache[3] = createTextVNode()),
          createVNode(unref(_sfc_main$q), {
            modelValue: price.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => price.value = $event),
            label: labels.value.price.external,
            "inline-label": labels.value.price.inline,
            "error-label": labels.value.price.error,
            field: "price",
            "data-test": "priceInput",
            onInput: updatePrice
          }, null, 8, ["modelValue", "label", "inline-label", "error-label"]),
          _cache[4] || (_cache[4] = createTextVNode()),
          createVNode(unref(LabeledSwitch), {
            value: trailing.value,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => trailing.value = $event),
            compact: "",
            class: "action",
            label: "Trailing stop"
          }, null, 8, ["value"])
        ]),
        _: 1
      }, 8, ["order-data", "total-label", "total-text", "side", "valid", "dirty"]);
    };
  }
};
const StopOrderForm = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-aa7a6d88"]]);
const _sfc_main$l = {
  name: "OrderTypeSelector",
  components: {
    LabeledDropdown,
    MarketMobileDropdown
  },
  props: {
    choices: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      basicMarketsOrderFormStore: useBasicMarketsOrderFormStore()
    };
  },
  data() {
    return {
      ordersConstants: constants$1
    };
  },
  computed: {
    activeOrderType() {
      return this.basicMarketsOrderFormStore.activeOrderFormType;
    },
    isMobile() {
      return this.$isSmall.value;
    }
  },
  methods: {
    setOrderType(type) {
      this.basicMarketsOrderFormStore.setActiveOrderFormType(type);
    }
  }
};
const _hoisted_1$j = { class: "order-type-selector" };
const _hoisted_2$e = { class: "order-type-selector__dropdown-wrapper" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabeledDropdown = resolveComponent("LabeledDropdown");
  const _component_MarketMobileDropdown = resolveComponent("MarketMobileDropdown");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createBaseVNode("div", _hoisted_2$e, [
      !$options.isMobile ? (openBlock(), createBlock(_component_LabeledDropdown, {
        key: 0,
        "data-test": "orderSubtypeSelector",
        class: "order-type-selector__dropdown",
        label: "Order type:",
        "test-id": "orderSubtypeSelector",
        options: $props.choices,
        value: $options.activeOrderType,
        size: "normal",
        "onUpdate:value": $options.setOrderType
      }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true),
      _cache[0] || (_cache[0] = createTextVNode()),
      $options.isMobile ? (openBlock(), createBlock(_component_MarketMobileDropdown, {
        key: 1,
        options: $props.choices,
        value: $options.activeOrderType,
        "onUpdate:value": $options.setOrderType
      }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true)
    ])
  ]);
}
const OrderTypeSelector = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-21a6b63e"]]);
const _sfc_main$k = {
  name: "TradingDisabled",
  components: {
    BtsButton
  },
  props: {
    tradeFeatureStatus: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectToPage(link) {
      window.location.href = link;
    }
  }
};
const _hoisted_1$i = { class: "trade-feature-status-disabled" };
const _hoisted_2$d = { class: "trade-feature-status-disabled__text" };
const _hoisted_3$9 = {
  key: 0,
  class: "trade-feature-status-disabled__text"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    createBaseVNode("div", _hoisted_2$d, toDisplayString($props.tradeFeatureStatus.summary), 1),
    _cache[1] || (_cache[1] = createTextVNode()),
    $props.tradeFeatureStatus.description ? (openBlock(), createElementBlock("div", _hoisted_3$9, toDisplayString($props.tradeFeatureStatus.description), 1)) : createCommentVNode("", true),
    _cache[2] || (_cache[2] = createTextVNode()),
    $props.tradeFeatureStatus.ctaText && $props.tradeFeatureStatus.ctaLink ? (openBlock(), createBlock(_component_BtsButton, {
      key: 1,
      "data-test": "marketsFeatureSubmit",
      class: "trade-feature-status-disabled__button",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.redirectToPage($props.tradeFeatureStatus.ctaLink))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.tradeFeatureStatus.ctaText), 1)
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const TradingDisabled = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-cd7442a7"]]);
const _sfc_main$j = {
  props: {
    underlinedHeader: {
      type: Boolean,
      default: false
    },
    marginedHeader: {
      // temporary solution to display tabs parallel to marketPanel title
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1$h = { class: "widget-layout" };
const _hoisted_2$c = {
  key: 0,
  class: "widget-layout-header__title"
};
const _hoisted_3$8 = {
  key: 1,
  class: "widget-layout-header__tabs"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$h, [
    _ctx.$slots.title || _ctx.$slots.tabs ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([{
        "widget-layout__header--underline": $props.underlinedHeader,
        "widget-layout__header--margin": $props.marginedHeader
      }, "widget-layout__header"])
    }, [
      _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_2$c, [
        renderSlot(_ctx.$slots, "title", {}, void 0, true)
      ])) : createCommentVNode("", true),
      _cache[2] || (_cache[2] = createTextVNode()),
      _ctx.$slots.tabs ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
        renderSlot(_ctx.$slots, "tabs", {}, void 0, true),
        _cache[0] || (_cache[0] = createTextVNode()),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "selector" }, null, -1))
      ])) : createCommentVNode("", true)
    ], 2)) : createCommentVNode("", true),
    _cache[3] || (_cache[3] = createTextVNode()),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
const WidgetLayout = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-26b237a1"]]);
const _sfc_main$i = {
  name: "CreateOrder",
  components: {
    BtsLink,
    AccountTypeIcon,
    IconWarning,
    OrderTypeSelector,
    WidgetLayout,
    BtsButton,
    Tooltip,
    AppTooltip,
    TradingDisabled
  },
  setup() {
    return {
      activeMarketStore: useActiveMarketStore(),
      balancesStore: useBalancesStore(),
      featureStatusStore: useFeatureStatusStore(),
      basicMarketsOrderFormStore: useBasicMarketsOrderFormStore(),
      subAccountStore: useSubAccountStore(),
      userStateStore: useUserStateStore()
    };
  },
  data() {
    return {
      types: [
        {
          // TODO: Hardcoded until we merge market/instant orders like on tradeview
          text: "Instant",
          // text: ordersConstants.ORDER_TYPE_CONFIG[ordersConstants.ORDER_TYPE.INSTANT].display,
          value: constants$1.ORDER_TYPE.INSTANT
        },
        {
          text: constants$1.ORDER_TYPE_CONFIG[constants$1.ORDER_TYPE.MARKET].display,
          value: constants$1.ORDER_TYPE.MARKET
        },
        {
          text: constants$1.ORDER_TYPE_CONFIG[constants$1.ORDER_TYPE.LIMIT].display,
          value: constants$1.ORDER_TYPE.LIMIT
        },
        {
          text: constants$1.ORDER_TYPE_CONFIG[constants$1.ORDER_TYPE.STOP_MARKET].display,
          value: constants$1.ORDER_TYPE.STOP_MARKET
        }
      ],
      typeComponent: {
        [constants$1.ORDER_TYPE.INSTANT]: markRaw(_sfc_main$p),
        [constants$1.ORDER_TYPE.MARKET]: markRaw(_sfc_main$o),
        [constants$1.ORDER_TYPE.LIMIT]: markRaw(LimitOrderForm),
        [constants$1.ORDER_TYPE.STOP_MARKET]: markRaw(StopOrderForm)
      }
    };
  },
  computed: {
    proTradeUrl() {
      return URLService.getPageUrl("proTrade", { market: marketConstants.DEFAULT_PERP_MARKET_KEY });
    },
    activePair() {
      return this.activeMarketStore.activeMarket;
    },
    balance() {
      return this.formatBalance(this.balancesStore.activeMarketAccountBalance);
    },
    available() {
      return this.formatBalance(this.balancesStore.activeMarketAccountAvailableBalance);
    },
    anonymous() {
      return !this.userStateStore.isLoggedIn;
    },
    /**
     * @type {module:featureStatusStore.FeatureStatus}
     */
    tradeFeatureStatus() {
      if (!this.featureStatusStore.isTradeEnabled) {
        return this.featureStatusStore.getFeatureStatus(featureStatusConstants.FEATURE_TYPES.TRADE);
      }
      return { enabled: true };
    }
  },
  methods: {
    formatBalance({ base, counter }) {
      if (this.basicMarketsOrderFormStore.activeOrderSide === constants$1.ORDER_SIDE.SELL) {
        return numberFormatter.amount({
          value: base,
          decimals: CURRENCIES[this.activePair.base].decimals,
          currencyCode: this.activePair.base,
          rounding: Decimal.ROUND_DOWN
        });
      } else {
        let balanceDecimals = Math.min(this.activePair.decimals.counter, CURRENCIES[this.activePair.counter].decimals);
        if (this.basicMarketsOrderFormStore.activeOrderFormType === constants$1.ORDER_TYPE.INSTANT) {
          balanceDecimals = this.activePair.decimals.counterInstantOrder;
        }
        return numberFormatter.amount({
          value: counter,
          decimals: balanceDecimals,
          currencyCode: this.activePair.counter,
          rounding: Decimal.ROUND_DOWN
        });
      }
    }
  }
};
const _hoisted_1$g = {
  key: 0,
  class: "spot-trading-locked"
};
const _hoisted_2$b = { key: 1 };
const _hoisted_3$7 = { class: "create-order__available" };
const _hoisted_4$6 = { class: "create-order__available-amount" };
const _hoisted_5$5 = { class: "create-order__container" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_IconWarning = resolveComponent("IconWarning");
  const _component_AppTooltip = resolveComponent("AppTooltip");
  const _component_OrderTypeSelector = resolveComponent("OrderTypeSelector");
  const _component_TradingDisabled = resolveComponent("TradingDisabled");
  const _component_WidgetLayout = resolveComponent("WidgetLayout");
  return openBlock(), createBlock(_component_WidgetLayout, { class: "widget create-order" }, {
    default: withCtx(() => [
      !$setup.subAccountStore.activeSubAccount.isSpotTradingEnabled ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "spot-trading-locked__text text-weight--bold" }, "\n        This sub account does not support spot trading.\n      ", -1)),
        _cache[2] || (_cache[2] = createTextVNode()),
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "spot-trading-locked__text" }, "\n        Choose a spot sub account or switch to Bitstamp PRO for derivatives trading.\n      ", -1)),
        _cache[4] || (_cache[4] = createTextVNode()),
        createVNode(_component_BtsLink, {
          to: $options.proTradeUrl,
          external: ""
        }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createTextVNode("\n        Go to Bitstamp PRO\n      ")
          ])),
          _: 1
        }, 8, ["to"])
      ])) : $options.tradeFeatureStatus.enabled ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
        createBaseVNode("div", _hoisted_3$7, [
          _cache[6] || (_cache[6] = createTextVNode("\n        Available: ")),
          createBaseVNode("span", _hoisted_4$6, toDisplayString($options.available), 1),
          _cache[7] || (_cache[7] = createTextVNode()),
          $options.balance !== $options.available ? (openBlock(), createBlock(_component_AppTooltip, { key: 0 }, {
            trigger: withCtx(() => [
              createVNode(_component_IconWarning)
            ]),
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createTextVNode("\n          Total Balance: ")),
              createBaseVNode("strong", null, toDisplayString($options.balance), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _cache[8] || (_cache[8] = createTextVNode()),
        createVNode(_component_OrderTypeSelector, { choices: $data.types }, null, 8, ["choices"]),
        _cache[9] || (_cache[9] = createTextVNode()),
        createBaseVNode("div", _hoisted_5$5, [
          (openBlock(), createBlock(resolveDynamicComponent($data.typeComponent[$setup.basicMarketsOrderFormStore.activeOrderFormType]), {
            side: $setup.basicMarketsOrderFormStore.activeOrderSide
          }, null, 8, ["side"]))
        ])
      ])) : (openBlock(), createBlock(_component_TradingDisabled, {
        key: 2,
        "trade-feature-status": $options.tradeFeatureStatus
      }, null, 8, ["trade-feature-status"]))
    ]),
    _: 1
  });
}
const CreateOrder = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-c198a697"]]);
const _sfc_main$h = {
  name: "SellFormWrapper",
  components: {
    SellCryptoForm,
    Spinner
  },
  props: {
    cryptoCurrency: {
      type: String,
      required: false,
      default: ""
    },
    fiatCurrency: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["confirmSellCrypto", "unavailablePair"],
  setup() {
    const simpleStore = useSimpleStore();
    const simpleAppSellStore = useSimpleAppSellStore();
    return { simpleStore, simpleAppSellStore };
  },
  data() {
    return {
      showSpinner: true
    };
  },
  async mounted() {
    this.showSpinner = true;
    if (!["EUR", "USD", "GBP"].includes(this.fiatCurrency)) {
      this.setPairUnavailable();
      return;
    }
    this.simpleAppSellStore.setIsMarketPage(true);
    this.simpleAppSellStore.setMarketPair(this.fiatCurrency, this.cryptoCurrency);
    this.simpleAppSellStore.setStep(STEPS.FORM);
    this.simpleAppSellStore.setFiatCurrency(this.fiatCurrency);
    this.simpleAppSellStore.setCryptoCurrency(this.cryptoCurrency);
    await this.simpleStore.init();
    await this.simpleAppSellStore.init(true);
    this.showSpinner = false;
  },
  methods: {
    confirmSellCrypto() {
      this.$emit("confirmSellCrypto");
    },
    setPairUnavailable() {
      this.$emit("unavailablePair");
    }
  }
};
const _hoisted_1$f = { class: "buy-form-wrapper" };
const _hoisted_2$a = {
  key: 0,
  class: "simple-buy-wrapper__spinner-container"
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Spinner = resolveComponent("Spinner");
  const _component_SellCryptoForm = resolveComponent("SellCryptoForm");
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    $data.showSpinner ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
      createVNode(_component_Spinner, { class: "simple-buy-wrapper__spinner" })
    ])) : (openBlock(), createBlock(_component_SellCryptoForm, {
      key: 1,
      ref: "sellFormWrapperComponent",
      "is-market-page": true,
      onConfirmSellCrypto: $options.confirmSellCrypto,
      onUnavailablePair: $options.setPairUnavailable
    }, null, 8, ["onConfirmSellCrypto", "onUnavailablePair"]))
  ]);
}
const SellFormWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-604c1f5b"]]);
const _sfc_main$g = {
  name: "BuyFormWrapper",
  components: {
    BuyCryptoForm,
    Spinner
  },
  props: {
    cryptoCurrency: {
      type: String,
      required: false,
      default: ""
    },
    fiatCurrency: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["confirmBuyCrypto", "unavailablePair", "addPaymentMethod"],
  setup() {
    const simpleStore = useSimpleStore();
    const simpleAppBuyStore = useSimpleAppBuyStore();
    return { simpleStore, simpleAppBuyStore };
  },
  data() {
    return {
      showSpinner: true
    };
  },
  async mounted() {
    this.showSpinner = true;
    if (!["EUR", "USD", "GBP"].includes(this.fiatCurrency)) {
      this.setPairUnavailable();
      return;
    }
    this.simpleAppBuyStore.setIsMarketPage(true);
    this.simpleAppBuyStore.setMarketPair(this.fiatCurrency, this.cryptoCurrency);
    this.simpleAppBuyStore.setCurrentStep(STEPS.FORM);
    this.simpleAppBuyStore.setCryptoCurrency(this.cryptoCurrency);
    this.simpleAppBuyStore.setFiatCurrency(this.fiatCurrency);
    await this.simpleStore.init();
    await this.simpleAppBuyStore.init(true);
    this.showSpinner = false;
  },
  methods: {
    confirmBuyCrypto() {
      this.$emit("confirmBuyCrypto");
    },
    setPairUnavailable() {
      this.$emit("unavailablePair");
    },
    openAddPayment() {
      this.$emit("addPaymentMethod");
    }
  }
};
const _hoisted_1$e = { class: "buy-form-wrapper" };
const _hoisted_2$9 = {
  key: 0,
  class: "simple-buy-wrapper__spinner-container"
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Spinner = resolveComponent("Spinner");
  const _component_BuyCryptoForm = resolveComponent("BuyCryptoForm");
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    $data.showSpinner ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
      createVNode(_component_Spinner, { class: "simple-buy-wrapper__spinner" })
    ])) : (openBlock(), createBlock(_component_BuyCryptoForm, {
      key: 1,
      ref: "buyFormWrapperComponent",
      "is-market-page": true,
      onConfirmBuyCrypto: $options.confirmBuyCrypto,
      onUnavailablePair: $options.setPairUnavailable,
      onAddPaymentMethod: $options.openAddPayment
    }, null, 8, ["onConfirmBuyCrypto", "onUnavailablePair", "onAddPaymentMethod"]))
  ]);
}
const BuyFormWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-06faf78c"]]);
const _sfc_main$f = {
  name: "SimpleOrder",
  components: {
    WidgetLayout,
    BtsButton,
    BtsLink,
    TradingDisabled,
    BuyFormWrapper,
    SellFormWrapper,
    DefaultContentLayout
  },
  emits: ["setAdvancedOrder", "unavailablePair"],
  setup() {
    return {
      activeMarketStore: useActiveMarketStore(),
      featureStatusStore: useFeatureStatusStore(),
      basicMarketsOrderFormStore: useBasicMarketsOrderFormStore(),
      simpleAppBuyStore: useSimpleAppBuyStore(),
      simpleAppSellStore: useSimpleAppSellStore()
    };
  },
  data() {
    return {
      URLService,
      ordersConstants: constants$1,
      availableMarket: true,
      showError: false
    };
  },
  computed: {
    activeMarket() {
      return this.activeMarketStore.activeMarket;
    },
    selectedOrderType() {
      return this.basicMarketsOrderFormStore.activeOrderSide;
    },
    /**
     * @type {module:featureStatusStore.FeatureStatus}
     */
    tradeFeatureStatus() {
      if (!this.featureStatusStore.isTradeEnabled) {
        return this.featureStatusStore.getFeatureStatus(featureStatusConstants.FEATURE_TYPES.TRADE);
      }
      return { enabled: true };
    }
  },
  watch: {
    activeMarket() {
      this.availableMarket = true;
    },
    "simpleAppBuyStore.error": {
      handler(prev, current) {
        if (this.selectedOrderType !== "buy") {
          return;
        }
        if (current.status) {
          this.showError = true;
          this.availableMarket = false;
        } else {
          this.showError = false;
          this.availableMarket = true;
        }
      }
    },
    "simpleAppSellStore.error": {
      handler(prev, current) {
        if (this.selectedOrderType !== "sell") {
          return;
        }
        if (current.status) {
          this.showError = true;
          this.availableMarket = false;
        } else {
          this.showError = false;
          this.availableMarket = true;
        }
      }
    }
  },
  methods: {
    openPreview() {
      this.$eventBus.$emit(EventBusConstants.SIMPLE_APP.OPEN_PREVIEW, this.selectedOrderType);
    },
    openAddPayment() {
      this.$eventBus.$emit(EventBusConstants.SIMPLE_APP.OPEN_ADD_PAYMENT);
    },
    setPairUnavailable() {
      this.availableMarket = false;
      this.$emit("unavailablePair");
    },
    switchToAdvanced() {
      this.$emit("setAdvancedOrder");
    },
    tryAgain() {
      this.showError = false;
      this.availableMarket = true;
    },
    confirmOrder() {
      if (this.selectedOrderType === "buy" && !this.simpleAppBuyStore.error.value) {
        this.openPreview();
      } else if (this.selectedOrderType === "sell" && !this.simpleAppSellStore.error.value) {
        this.openPreview();
      }
    }
  }
};
const _hoisted_1$d = {
  key: 1,
  class: "simple-order"
};
const _hoisted_2$8 = {
  key: 2,
  class: "pair-unavailable"
};
const _hoisted_3$6 = { class: "pair-unavailable__link" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TradingDisabled = resolveComponent("TradingDisabled");
  const _component_BuyFormWrapper = resolveComponent("BuyFormWrapper");
  const _component_SellFormWrapper = resolveComponent("SellFormWrapper");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_DefaultContentLayout = resolveComponent("DefaultContentLayout");
  const _component_WidgetLayout = resolveComponent("WidgetLayout");
  return openBlock(), createBlock(_component_WidgetLayout, { class: "widget simple-order" }, {
    default: withCtx(() => [
      !$options.tradeFeatureStatus.enabled ? (openBlock(), createBlock(_component_TradingDisabled, {
        key: 0,
        "trade-feature-status": $options.tradeFeatureStatus
      }, null, 8, ["trade-feature-status"])) : $data.availableMarket ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
        $options.selectedOrderType === "buy" ? (openBlock(), createBlock(_component_BuyFormWrapper, {
          key: 0,
          "crypto-currency": $options.activeMarket.base,
          "fiat-currency": $options.activeMarket.counter,
          onConfirmBuyCrypto: $options.confirmOrder,
          onUnavailablePair: $options.setPairUnavailable,
          onAddPaymentMethod: $options.openAddPayment
        }, null, 8, ["crypto-currency", "fiat-currency", "onConfirmBuyCrypto", "onUnavailablePair", "onAddPaymentMethod"])) : createCommentVNode("", true),
        _cache[0] || (_cache[0] = createTextVNode()),
        $options.selectedOrderType === "sell" ? (openBlock(), createBlock(_component_SellFormWrapper, {
          key: 1,
          "crypto-currency": $options.activeMarket.base,
          "fiat-currency": $options.activeMarket.counter,
          onConfirmSellCrypto: $options.confirmOrder,
          onUnavailablePair: $options.setPairUnavailable
        }, null, 8, ["crypto-currency", "fiat-currency", "onConfirmSellCrypto", "onUnavailablePair"])) : createCommentVNode("", true)
      ])) : !$data.availableMarket && !$data.showError ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "pair-unavailable__text" }, "\n        This asset is not available for an instant purchase, but can be traded through advanced orders.\n      ", -1)),
        _cache[4] || (_cache[4] = createTextVNode()),
        createVNode(_component_BtsButton, {
          "data-test": "switchToAdvanced",
          class: "pair-unavailable__button",
          onClick: $options.switchToAdvanced
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode("\n        Switch to Advanced orders\n      ")
          ])),
          _: 1
        }, 8, ["onClick"]),
        _cache[5] || (_cache[5] = createTextVNode()),
        createBaseVNode("div", _hoisted_3$6, [
          createVNode(_component_BtsLink, {
            "data-test": "tradeviewLink",
            to: `${$data.URLService.getPageUrl("tradeview")}`,
            external: ""
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("\n          Go to Advanced trading\n        ")
            ])),
            _: 1
          }, 8, ["to"])
        ])
      ])) : $data.showError ? (openBlock(), createBlock(_component_DefaultContentLayout, { key: 3 }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("components.unexpectedError.defaultErrorTitle")), 1)
        ]),
        text: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("components.unexpectedError.defaultErrorText")), 1)
        ]),
        actions: withCtx(() => [
          createVNode(_component_BtsButton, {
            primary: "",
            small: "",
            onClick: $options.tryAgain
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("components.simpleApp.tryAgain")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const SimpleOrder = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-2b60a97f"]]);
const _sfc_main$e = {
  name: "UserAnonymous",
  components: {
    WidgetLayout,
    BtsButton,
    BtsLink
  },
  setup() {
    return {
      activeMarketStore: useActiveMarketStore()
    };
  },
  data() {
    return {
      URLService,
      isUkUi: this.$constants.showVaspInvestmentRiskWarning
    };
  },
  computed: {
    activeMarket() {
      return this.activeMarketStore.activeMarket;
    }
  },
  methods: {
    redirectToRegister() {
      window.location.href = this.$routes.register;
    }
  }
};
const _hoisted_1$c = {
  key: 0,
  class: "user-anonymous-uk"
};
const _hoisted_2$7 = {
  key: 1,
  class: "user-anonymous"
};
const _hoisted_3$5 = { class: "user-anonymous__text" };
const _hoisted_4$5 = { class: "user-anonymous__sign-in" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_WidgetLayout = resolveComponent("WidgetLayout");
  return openBlock(), createBlock(_component_WidgetLayout, { class: "widget" }, {
    default: withCtx(() => [
      $data.isUkUi ? (openBlock(), createElementBlock("div", _hoisted_1$c, "\n      Log in or register.\n    ")) : (openBlock(), createElementBlock("div", _hoisted_2$7, [
        createBaseVNode("div", _hoisted_3$5, "\n        Ready to buy " + toDisplayString($options.activeMarket.base) + "?\n      ", 1),
        _cache[3] || (_cache[3] = createTextVNode()),
        createVNode(_component_BtsButton, {
          "data-test": "marketsRegister",
          class: "user-anonymous__button",
          onClick: $options.redirectToRegister
        }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createTextVNode("\n        Create Account\n      ")
          ])),
          _: 1
        }, 8, ["onClick"]),
        _cache[4] || (_cache[4] = createTextVNode()),
        createBaseVNode("div", _hoisted_4$5, [
          _cache[2] || (_cache[2] = createTextVNode("\n        or\n        ")),
          createVNode(_component_BtsLink, {
            "data-test": "marketsLogin",
            to: `${_ctx.$routes.login}?next=${$data.URLService.getPageUrl("product_details", {
              base: $options.activeMarket.base.toLowerCase(),
              counter: $options.activeMarket.counter.toLowerCase()
            })}`,
            external: ""
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("\n          Log in\n        ")
            ])),
            _: 1
          }, 8, ["to"])
        ])
      ]))
    ]),
    _: 1
  });
}
const UserAnonymous = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-307d251a"]]);
const PERIOD_HOUR = "hour";
const PERIOD_DAY = "day";
const PERIOD_WEEK = "week";
const PERIOD_MONTH = "month";
const PERIOD_YEAR = "year";
const PERIOD_YTD = "ytd";
const PERIOD_ALL = "all";
const ranges = {
  [PERIOD_HOUR]: { key: PERIOD_HOUR, text: "1H", step: 60 },
  [PERIOD_DAY]: { key: PERIOD_DAY, text: "1D", step: 300 },
  [PERIOD_WEEK]: { key: PERIOD_WEEK, text: "1W", step: 1800 },
  [PERIOD_MONTH]: { key: PERIOD_MONTH, text: "1M", step: 7200 },
  [PERIOD_YEAR]: { key: PERIOD_YEAR, text: "1Y", step: 86400 },
  [PERIOD_YTD]: { key: PERIOD_YTD, text: "YTD", step: 43200 },
  [PERIOD_ALL]: { key: PERIOD_ALL, text: "ALL", step: 259200 }
};
const constants = {
  PERIOD_HOUR,
  PERIOD_DAY,
  PERIOD_WEEK,
  PERIOD_MONTH,
  PERIOD_YEAR,
  PERIOD_YTD,
  PERIOD_ALL,
  PRICE_HISTORY_RANGES: {
    ranges,
    defaultActiveRange: ranges.day
  },
  MAX_RANDOM_DELAY: 30
  // seconds
};
function parsePriceHistories(priceHistories) {
  const data = {};
  Object.entries(priceHistories.prices).forEach(([key, period]) => {
    const currentPrice = priceHistories.latest.price ? new Decimal(priceHistories.latest.price) : null;
    let openPrice = new Decimal(0);
    let openUnixTimestamp = 0;
    const pricesLength = period.prices.length;
    if (pricesLength > 0) {
      if (period.prices[pricesLength - 1][0]) {
        openPrice = new Decimal(period.prices[pricesLength - 1][0]);
        openUnixTimestamp = period.prices[pricesLength - 1][1];
      } else {
        for (let i = pricesLength - 2; i >= 0; i--) {
          const [priceString, unixTimestamp] = period.prices[i];
          if (priceString) {
            openPrice = new Decimal(priceString);
            openUnixTimestamp = unixTimestamp;
            break;
          }
        }
      }
    }
    let prices = [];
    if (openPrice.greaterThan(0)) {
      let prevValidPrice = null;
      for (let i = pricesLength - 1; i >= 0; i--) {
        const [priceString, unixTimestamp] = period.prices[i];
        let price;
        if (priceString === null) {
          if (prevValidPrice) {
            price = prevValidPrice;
          } else {
            continue;
          }
        } else {
          price = new Decimal(priceString);
          prevValidPrice = price;
        }
        const percentageChange = getPercentageChange({
          oldPrice: openPrice,
          newPrice: price
        });
        prices.push({
          unixTimestamp,
          price,
          x: getDate(unixTimestamp, true),
          y: percentageChange.toNumber()
        });
      }
    } else if (period.prices.length > 0) {
      prices = period.prices.map(([_2, unixTimestamp]) => ({
        unixTimestamp,
        price: currentPrice ?? new Decimal(0),
        x: getDate(unixTimestamp, true),
        y: 0
      }));
    } else {
      const anHourAgo = subHours(/* @__PURE__ */ new Date(), 1);
      prices = [
        {
          unixTimestamp: getUnixTime(anHourAgo),
          price: currentPrice ?? new Decimal(0),
          x: anHourAgo,
          y: 0
        }
      ];
    }
    let extremes = false;
    if (period.extremes) {
      extremes = {
        min: new Decimal(period.extremes.min),
        max: new Decimal(period.extremes.max)
      };
    }
    data[key] = {
      extremes,
      prices,
      openPrice,
      openUnixTimestamp,
      percentage: priceHistories.latest.percent_change[key]
    };
  });
  const meta = {
    roi: priceHistories.roi ? new Decimal(priceHistories.roi) : null,
    marketCap: priceHistories.mc ? new Decimal(priceHistories.mc) : null
  };
  return {
    meta,
    data
  };
}
const PriceHistoryApi = {
  get(market) {
    return axiosInstance.get(URLService.buildUrl("priceHistoryView", { market })).then((response) => parsePriceHistories(response.data.data));
  }
};
const _sfc_main$d = {
  props: {
    market: {
      type: String,
      required: true
    },
    activeRange: {
      type: String,
      required: true
    },
    /** @type module:numberUtils.Decimal */
    percentageChange: {
      type: Object,
      required: true
    }
  },
  emits: ["newOpenPrice", "loadingStateChange", "click"],
  setup() {
    return {
      tickersStore: useTickersStore()
    };
  },
  data() {
    const componentContext = this;
    return {
      pricesHistory: [],
      refreshTimeout: null,
      updateArgs: [true, true],
      chartOptions: {
        title: "",
        time: {
          useUTC: false
        },
        chart: {
          animation: false,
          backgroundColor: "rgba(0, 0, 0, 0)",
          style: {
            fontFamily: "var(--default-font-family)"
          },
          panning: false
        },
        rangeSelector: {
          enabled: false
        },
        scrollbar: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        navigator: {
          enabled: false
        },
        xAxis: {
          lineWidth: 0,
          tickWidth: 0,
          type: "datetime",
          dateTimeLabelFormats: {
            millisecond: "%H:%M:%S.%L",
            second: "%H:%M:%S",
            minute: "%H:%M",
            hour: "%H:%M",
            day: "%e. %b",
            week: "%e. %b",
            month: "%b '%y",
            year: "%Y"
          },
          labels: {
            style: {
              color: "#C1C1C1",
              letterSpacing: "0.07px",
              fontSize: "10px",
              fontWeight: "400"
            }
          }
        },
        yAxis: {
          title: "",
          align: "left",
          offset: -6,
          opposite: true,
          labels: {
            format: "{value}%",
            style: {
              color: "#C1C1C1",
              letterSpacing: "0.07px",
              fontSize: "10px",
              fontWeight: "400"
            }
          },
          plotLines: [{
            color: "#C1C1C1",
            width: 1,
            value: 0,
            dashStyle: "dash"
          }],
          startOnTick: true,
          endOnTick: true,
          tickWidth: 0,
          lineWidth: 0,
          gridLineWidth: 0
        },
        series: [{
          title: "",
          type: "area",
          name: "return",
          color: "#4c6f8c",
          data: null,
          turboThreshold: 2e3,
          lineWidth: 1,
          zones: [
            {
              value: -0.01,
              color: "var(--chart-negative-color)",
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [
                  [0, "var(--chart-negative-fill-transparent)"],
                  [1, "var(--chart-negative-fill)"]
                ]
              }
            },
            {
              color: "var(--chart-positive-color)",
              fillColor: {
                value: 0.01,
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [
                  [0, "var(--chart-positive-fill)"],
                  [1, "var(--chart-positive-fill-transparent)"]
                ]
              }
            }
          ],
          events: {
            click(event) {
              componentContext.handlePointClick(event.point.price);
            }
          }
        }],
        plotOptions: {
          series: {
            stacking: "normal",
            animation: false,
            states: {
              hover: {
                lineWidthPlus: 0
              }
            },
            marker: {
              symbol: "circle",
              fillColor: "transparent",
              radius: 0,
              radiusPlus: 0,
              lineWidthPlus: 0,
              lineWidth: 0,
              lineColor: null,
              states: {
                hover: {
                  fillColor: "#ffffff",
                  radius: 4,
                  radiusPlus: 0,
                  lineWidthPlus: 0,
                  lineWidth: 2
                }
              }
            }
          },
          ad: {
            turboThreshold: 1e5
          }
        },
        credits: {
          enabled: false
        },
        pane: {
          size: "100%"
        },
        tooltip: {
          formatter() {
            const { unixTimestamp, price, y: percentage } = this.point.options;
            const formattedPrice = numberFormatter.price({
              value: price,
              decimals: componentContext.activeMarket.decimals.counter,
              currencySymbol: componentContext.activeCounterCurrency.symbol,
              currencyCode: componentContext.activeCounterCurrency.code
            });
            const sinceDate = componentContext.formatTooltipDate(componentContext.activePriceHistory.openUnixTimestamp);
            const date = componentContext.formatTooltipDate(unixTimestamp);
            const formattedPercentage = numberFormatter.percentageChange(percentage);
            return `
              <div class="bts-tooltip">
                <div class="bts-tooltip__date bts-tooltip__date--bold">${date}</div>
                <div class="bts-tooltip__body">
                  <span class="bts-tooltip__price">
                    ${formattedPrice}
                  </span>
                  <span class="bts-tooltip__percentage bts-tooltip__percentage--${percentage >= 0 ? "positive" : "negative"}">
                    ${formattedPercentage}
                  </span>
                </div>
                <div class="bts-tooltip__date">*since ${sinceDate}</div>
              </div>
            `;
          },
          borderColor: "#ffffff",
          shadow: false,
          borderWidth: 0,
          backgroundColor: "transparent",
          useHTML: true,
          padding: 10,
          animation: true,
          outside: false,
          hideDelay: 0,
          style: {
            pointerEvents: "auto"
          }
        },
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              yAxis: {
                visible: false,
                startOnTick: false,
                endOnTick: false
              }
            }
          }]
        },
        accessibility: {
          enabled: false
        }
      }
    };
  },
  computed: {
    activeMarket() {
      return PAIRS[this.market];
    },
    activeCounterCurrency() {
      return CURRENCIES[this.activeMarket.counter];
    },
    activePriceHistory() {
      const defaultPriceHistory = {
        prices: [],
        openUnixTimestamp: 1,
        openPrice: new Decimal(0)
      };
      return this.pricesHistory[this.activeRange] || defaultPriceHistory;
    },
    priceHistoryWithLast() {
      var _a;
      const apiPrices = this.activePriceHistory.prices;
      const pairTicker = this.tickersStore.tickers[this.market];
      if (apiPrices && apiPrices.length !== 0) {
        if (!pairTicker) {
          return apiPrices;
        }
        const tickerAsPrice = {
          unixTimestamp: Math.round(pairTicker.time.getTime() / 1e3),
          price: pairTicker.last,
          x: pairTicker.time,
          // percentChange is calculated from last ticker value
          y: ((_a = this.percentageChange) == null ? void 0 : _a.toNumber()) ?? 0
        };
        return [...apiPrices, tickerAsPrice];
      }
      return [];
    }
  },
  watch: {
    "priceHistoryWithLast": {
      handler(newPrices) {
        var _a;
        this.$emit("newOpenPrice", ((_a = newPrices == null ? void 0 : newPrices[0]) == null ? void 0 : _a.price) ?? null);
        if (newPrices && newPrices.length > 0) {
          this.chartOptions.series[0].data = newPrices;
          this.reflowChart();
        }
      }
    },
    activeRange() {
      this.fetchPriceHistories();
      this.scheduleRefresh();
    }
  },
  mounted() {
    window.addEventListener("resize", this.reflowChart);
    this.fetchPriceHistories();
  },
  beforeUnmount() {
    clearTimeout(this.refreshTimeout);
    window.removeEventListener("resize", this.reflowChart);
    this.pricesHistory = [];
  },
  methods: {
    async fetchPriceHistories() {
      this.$emit("loadingStateChange", true);
      const { data: pricesHistory } = await PriceHistoryApi.get(this.market);
      this.pricesHistory = Object.freeze(pricesHistory);
      this.$emit("loadingStateChange", false);
    },
    scheduleRefresh() {
      clearTimeout(this.refreshTimeout);
      const now = /* @__PURE__ */ new Date();
      const step = constants.PRICE_HISTORY_RANGES.ranges[this.activeRange].step;
      const secondsUntilUpdate = step - now.getMinutes() * 60 % step;
      const randomDelay = Math.round(Math.random() * constants.MAX_RANDOM_DELAY);
      this.refreshTimeout = setTimeout(() => {
        this.fetchPriceHistories();
        this.scheduleRefresh();
      }, (secondsUntilUpdate + randomDelay) * 1e3);
    },
    formatTooltipDate(timestamp) {
      return formatDate(
        timestamp,
        constants$4.TIME_FORMAT_STRING,
        true
      );
    },
    reflowChart() {
      var _a;
      if ((_a = this.$refs.chartRef) == null ? void 0 : _a.chart) {
        this.$refs.chartRef.chart.reflow();
      }
    },
    handlePointClick(price) {
      this.$emit("click", price);
    }
  }
};
const _hoisted_1$b = { class: "bts-chart" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_highcharts = resolveComponent("highcharts");
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createVNode(_component_highcharts, {
      ref: "chartRef",
      options: $data.chartOptions,
      "update-args": $data.updateArgs
    }, null, 8, ["options", "update-args"])
  ]);
}
const PriceHistoryChart = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-ce829a7e"]]);
const _sfc_main$c = {
  props: {
    rangeKey: {
      type: String,
      required: true
    },
    range: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    handleRangeClick() {
      this.$refs.range.blur();
      this.onClick(this.rangeKey);
    }
  }
};
const _hoisted_1$a = ["disabled"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    ref: "range",
    class: normalizeClass(["market-range", { "market-range--active": $props.isActive }]),
    disabled: $props.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRangeClick && $options.handleRangeClick(...args))
  }, toDisplayString($props.range), 11, _hoisted_1$a);
}
const MarketRange = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-ed28f0c8"]]);
const _sfc_main$b = {
  props: {
    price: {
      type: Object,
      required: true
    },
    currencySymbol: {
      type: String,
      required: false,
      default: ""
    },
    currencyCode: {
      type: String,
      required: false,
      default: ""
    },
    decimals: {
      type: Number,
      default: 2,
      required: false
    }
  },
  computed: {
    formattedPrice() {
      const { price, decimals, currencySymbol, currencyCode } = this;
      return numberFormatter.price({ value: price, decimals, currencySymbol, currencyCode });
    }
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString($options.formattedPrice), 1);
}
const MarketPrice = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
const _sfc_main$a = {
  name: "SimpleMarketsCandleChart",
  props: {
    market: {
      type: String,
      required: true
    },
    activeRange: {
      type: String,
      required: true
    },
    /** @type module:numberUtils.Decimal */
    currentPrice: {
      type: Object,
      required: true
    }
  },
  emits: ["loadingStateChange", "newOpenPrice"],
  setup() {
    stockInit(Highcharts);
  },
  data() {
    const componentContext = this;
    return {
      refreshTimeout: null,
      updateArgs: [true, true, { duration: 1e3 }],
      rangeToResolutionMap: {
        [constants.PERIOD_HOUR]: "3",
        [constants.PERIOD_DAY]: "60",
        [constants.PERIOD_WEEK]: "360",
        [constants.PERIOD_MONTH]: "1D",
        [constants.PERIOD_YEAR]: "1W",
        [constants.PERIOD_YTD]: "1W",
        [constants.PERIOD_ALL]: "1M"
      },
      chartOptions: {
        title: "",
        time: {
          useUTC: false
        },
        chart: {
          animation: false,
          backgroundColor: "rgba(0, 0, 0, 0)",
          style: {
            fontFamily: "var(--default-font-family)"
          },
          panning: false
        },
        rangeSelector: {
          enabled: false
        },
        scrollbar: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        navigator: {
          enabled: false
        },
        xAxis: {
          lineWidth: 0,
          tickWidth: 0,
          type: "datetime",
          dateTimeLabelFormats: {
            millisecond: "%H:%M:%S.%L",
            second: "%H:%M:%S",
            minute: "%H:%M",
            hour: "%H:%M",
            day: "%e. %b",
            week: "%e. %b",
            month: "%b '%y",
            year: "%Y"
          },
          labels: {
            style: {
              color: "#C1C1C1",
              letterSpacing: "0.07px",
              fontSize: "10px",
              fontWeight: "400"
            }
          }
        },
        yAxis: {
          title: "",
          align: "right",
          offset: 60,
          opposite: true,
          labels: {
            format: "{value}",
            style: {
              color: "#C1C1C1",
              letterSpacing: "0.07px",
              fontSize: "10px",
              fontWeight: "400"
            }
          },
          plotLines: [{
            color: "#C1C1C1",
            width: 1,
            value: 0,
            dashStyle: "dash"
          }],
          startOnTick: true,
          endOnTick: true,
          tickWidth: 0,
          lineWidth: 0,
          gridLineWidth: 0
        },
        series: [{
          type: "candlestick",
          name: "",
          data: []
        }],
        plotOptions: {
          candlestick: {
            color: "var(--negative-color)",
            lineColor: "var(--negative-color)",
            upColor: "var(--positive-color)",
            upLineColor: "var(--positive-color)"
          }
        },
        credits: {
          enabled: false
        },
        pane: {
          size: "100%"
        },
        tooltip: {
          formatter() {
            const date = componentContext.formatPointDate(this.x);
            const pointData = this.points[0].point;
            const formattedOpenPrice = componentContext.formatPrice(pointData.open);
            const formattedHighPrice = componentContext.formatPrice(pointData.high);
            const formattedLowPrice = componentContext.formatPrice(pointData.low);
            const formattedClosePrice = componentContext.formatPrice(pointData.close);
            return `
              <div class="bts-tooltip">
                <div class="bts-tooltip__date bts-tooltip__date--bold">${date}</div>
                <div class="bts-tooltip__body">
                  <div>
                     <span class="bts-tooltip__indicator">Open:</span>
                    <span class="bts-tooltip__price">${formattedOpenPrice}</span></div>
                  <div>
                    <span class="bts-tooltip__indicator">High:</span>
                    <span class="bts-tooltip__price">${formattedHighPrice}</span></div>
                  <div>
                    <span class="bts-tooltip__indicator">Low:</span>
                    <span class="bts-tooltip__price">${formattedLowPrice}</span></div>
                  <div>
                    <span class="bts-tooltip__indicator">Close:</span>
                    <span class="bts-tooltip__price">${formattedClosePrice}</span></div>
                </div>
              </div>
            `;
          },
          borderColor: "var(--tooltip-background-color)",
          shadow: false,
          borderWidth: 0,
          backgroundColor: "transparent",
          useHTML: true,
          padding: 10,
          animation: true,
          outside: false,
          hideDelay: 0,
          style: {
            pointerEvents: "auto"
          }
        },
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              yAxis: {
                visible: false,
                startOnTick: false,
                endOnTick: false
              }
            }
          }]
        },
        accessibility: {
          enabled: false
        }
      }
    };
  },
  computed: {
    activeMarket() {
      return PAIRS[this.market];
    },
    activeCounterCurrency() {
      return CURRENCIES[this.activeMarket.counter];
    },
    isDataAvailable() {
      var _a, _b;
      return ((_b = (_a = this.chartOptions.series[0]) == null ? void 0 : _a.data) == null ? void 0 : _b.length) > 0;
    }
  },
  watch: {
    activeRange() {
      this.fetchCandles();
      this.scheduleRefresh();
    }
  },
  async mounted() {
    window.addEventListener("resize", this.reflowChart);
    await this.fetchCandles();
    this.scheduleRefresh();
  },
  beforeUnmount() {
    clearTimeout(this.refreshTimeout);
    window.removeEventListener("resize", this.reflowChart);
  },
  methods: {
    formatPrice(value) {
      return numberFormatter.price({
        value,
        decimals: this.activeMarket.decimals.counter,
        currencySymbol: this.activeCounterCurrency.symbol,
        currencyCode: this.activeCounterCurrency.code
      });
    },
    formatPointDate(millitimestamp) {
      return formatDate(
        millitimestamp / 1e3,
        constants$4.TIME_FORMAT_STRING,
        true
      );
    },
    reflowChart() {
      var _a;
      if ((_a = this.$refs.chartRef) == null ? void 0 : _a.chart) {
        this.$refs.chartRef.chart.reflow();
      }
    },
    async fetchCandles() {
      var _a;
      this.$emit("loadingStateChange", true);
      const currentDate = /* @__PURE__ */ new Date();
      const pastDate = this.getStartDateForRange(this.activeRange);
      const data = await candlesApi.getPriceHistoryData(
        this.market,
        this.rangeToResolutionMap[this.activeRange],
        pastDate,
        currentDate,
        this.currentPrice
      );
      this.chartOptions.series[0].data = data.map((c) => [
        c.time,
        c.open,
        c.high,
        c.low,
        c.close
      ]);
      this.$emit("loadingStateChange", false);
      const newFirstOpen = ((_a = data == null ? void 0 : data[0]) == null ? void 0 : _a.open) ? new Decimal(data[0].open) : null;
      this.$emit("newOpenPrice", newFirstOpen);
      this.reflowChart();
    },
    scheduleRefresh() {
      clearTimeout(this.refreshTimeout);
      const nextRefreshTime = this.getRefreshTime(this.activeRange);
      this.refreshTimeout = setTimeout(async () => {
        await this.fetchCandles();
        this.scheduleRefresh();
      }, nextRefreshTime.getTime() - (/* @__PURE__ */ new Date()).getTime());
    },
    getRefreshTime(range) {
      const now = /* @__PURE__ */ new Date();
      switch (range) {
        case constants.PERIOD_HOUR:
          return addSeconds(now, 60);
        case constants.PERIOD_DAY:
        case constants.PERIOD_WEEK:
          return addSeconds(endOfHour(now), 15);
        default:
          return addSeconds(startOfTomorrowUTC(), 15);
      }
    },
    getStartDateForRange(range) {
      const now = /* @__PURE__ */ new Date();
      switch (range) {
        case constants.PERIOD_HOUR:
          return sub(now, { hours: 1 });
        case constants.PERIOD_DAY:
          return sub(now, { days: 1 });
        case constants.PERIOD_WEEK:
          return sub(now, { weeks: 1 });
        case constants.PERIOD_MONTH:
          return sub(now, { months: 1 });
        case constants.PERIOD_YEAR:
          return sub(now, { years: 1 });
        case constants.PERIOD_YTD:
          return startOfYear(now);
        case constants.PERIOD_ALL:
          return new Date(2009, 0, 3);
      }
    }
  }
};
const _hoisted_1$9 = { class: "bts-chart" };
const _hoisted_2$6 = {
  key: 1,
  class: "bts-chart--no-data"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_highcharts = resolveComponent("highcharts");
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    $options.isDataAvailable ? (openBlock(), createBlock(_component_highcharts, {
      key: 0,
      ref: "chartRef",
      options: $data.chartOptions,
      "constructor-type": "stockChart"
    }, null, 8, ["options"])) : (openBlock(), createElementBlock("div", _hoisted_2$6, "\n      No data available for selected timeframe.\n    "))
  ]);
}
const SimpleMarketsCandleChart = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-c924e3e3"]]);
const _sfc_main$9 = {
  components: { AppIcon },
  setup() {
    return {
      isLineChartActive: useLocalStorage(
        localStorageConstants.LOCAL_STORAGE.MARKETS_LINE_CHART_ACTIVE,
        true
      )
    };
  },
  methods: {
    switchCharts() {
      this.isLineChartActive = !this.isLineChartActive;
      this.$track(simpleAppEvents.assetDetails.chartTypeClick, {
        type: this.isLineChartActive ? "line" : "candle"
      });
    }
  }
};
const _hoisted_1$8 = { key: 0 };
const _hoisted_2$5 = { key: 1 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  return openBlock(), createElementBlock("div", {
    class: "chart-type-switch",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.switchCharts && $options.switchCharts(...args))
  }, [
    createVNode(_component_AppIcon, {
      size: "16",
      icon: "monochrome/arrows-up-down.svg"
    }),
    _cache[1] || (_cache[1] = createTextVNode()),
    $setup.isLineChartActive ? (openBlock(), createElementBlock("span", _hoisted_1$8, toDisplayString(_ctx.$t("components.marketsChartSwitch.candleChart")), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(_ctx.$t("components.marketsChartSwitch.lineChart")), 1))
  ]);
}
const ChartTypeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-3d794796"]]);
const RANGES = constants.PRICE_HISTORY_RANGES.ranges;
const TICKER_ANIMATION_DURATION = 400;
const _sfc_main$8 = {
  components: {
    ChartTypeSwitch,
    SimpleMarketsCandleChart,
    MarketPrice,
    PriceHistoryChart,
    MarketPercentageChange,
    MarketRange,
    MarketMobileDropdown,
    Loading
  },
  setup() {
    return {
      activeMarketStore: useActiveMarketStore(),
      basicMarketsOrderFormStore: useBasicMarketsOrderFormStore(),
      tickersStore: useTickersStore(),
      isLineChartActive: useLocalStorage(localStorageConstants.LOCAL_STORAGE.MARKETS_LINE_CHART_ACTIVE, true)
    };
  },
  data() {
    return {
      displayedPrice: Decimal(0),
      areCandlesLoading: true,
      isPriceHistoryLoading: true,
      firstDataPrice: null,
      activeRange: constants.PRICE_HISTORY_RANGES.defaultActiveRange
    };
  },
  computed: {
    isDataLoaded() {
      if (this.isLineChartActive) {
        return !this.isPriceHistoryLoading;
      }
      return !this.areCandlesLoading;
    },
    activeMarket() {
      return this.activeMarketStore.activeMarket;
    },
    price() {
      return this.tickersStore.getTicker(this.activeMarket.key).last;
    },
    currency() {
      return CURRENCIES[this.activeMarket.counter];
    },
    percentageChange() {
      if (this.firstDataPrice === null) {
        return new Decimal(0);
      }
      return getPercentageChange({
        newPrice: this.price,
        oldPrice: this.firstDataPrice
      });
    },
    rangeOptions() {
      return Object.values(RANGES).map((range) => ({ ...range, value: range.key }));
    },
    isMobile() {
      return this.$isSmall.value;
    }
  },
  watch: {
    price: {
      handler(endPrice, startPrice) {
        if (this.displayedPrice.isZero() && endPrice) {
          this.displayedPrice = endPrice;
          return true;
        }
        if (!startPrice || !endPrice) {
          return false;
        }
        this.throttledLatestPriceUpdater();
      },
      immediate: false
    }
  },
  mounted() {
    this.displayedPrice = this.price;
  },
  methods: {
    /**
     * @param {module:numberUtils.Decimal|null} price
     */
    onNewOpenPrice(price) {
      this.firstDataPrice = price;
    },
    onCandleLoadingStateChange(newState) {
      this.areCandlesLoading = newState;
    },
    onPriceHistoryLoadingStateChange(newState) {
      this.isPriceHistoryLoading = newState;
    },
    throttledLatestPriceUpdater: _.throttle(function() {
      let startTime;
      const duration = TICKER_ANIMATION_DURATION;
      const animateFrame = (timestamp) => {
        const endPrice = new Decimal(this.price.toString());
        const startPrice = new Decimal(this.displayedPrice.toString());
        const runtime = timestamp - startTime;
        const progress = runtime / duration;
        const delta = endPrice.sub(startPrice);
        if (progress <= 1) {
          this.displayedPrice = startPrice.add(delta.mul(progress));
        }
        if (runtime < duration) {
          window.requestAnimationFrame(animateFrame);
        } else {
          this.displayedPrice = this.price;
        }
      };
      window.requestAnimationFrame((timestamp) => {
        startTime = timestamp;
        animateFrame(startTime);
      });
    }, TICKER_ANIMATION_DURATION),
    isRangeActive(range) {
      return this.activeRange.key === range.key;
    },
    handleRangeClick(rangeKey) {
      this.activeRange = RANGES[rangeKey];
    },
    changeSelectedPrice(price) {
      this.basicMarketsOrderFormStore.setSelectedPrice(price);
    }
  }
};
const _hoisted_1$7 = { class: "market-chart" };
const _hoisted_2$4 = { class: "market-chart__header" };
const _hoisted_3$4 = { class: "market-chart__price-wrapper" };
const _hoisted_4$4 = { class: "flex flex--align-baseline flex--fill-gap" };
const _hoisted_5$4 = { class: "market-chart__price" };
const _hoisted_6$4 = { class: "flex flex--align-baseline" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  const _component_MarketPrice = resolveComponent("MarketPrice");
  const _component_MarketPercentageChange = resolveComponent("MarketPercentageChange");
  const _component_MarketRange = resolveComponent("MarketRange");
  const _component_MarketMobileDropdown = resolveComponent("MarketMobileDropdown");
  const _component_ChartTypeSwitch = resolveComponent("ChartTypeSwitch");
  const _component_PriceHistoryChart = resolveComponent("PriceHistoryChart");
  const _component_SimpleMarketsCandleChart = resolveComponent("SimpleMarketsCandleChart");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createVNode(_component_Loading, {
      class: normalizeClass({ "market-chart__loading flex flex--align-center flex--justify-center": !$options.isDataLoaded }),
      "loading-finished": $options.isDataLoaded
    }, null, 8, ["class", "loading-finished"]),
    _cache[4] || (_cache[4] = createTextVNode()),
    createBaseVNode("div", _hoisted_2$4, [
      createBaseVNode("div", _hoisted_3$4, [
        createBaseVNode("div", _hoisted_4$4, [
          createBaseVNode("div", _hoisted_5$4, [
            createVNode(_component_MarketPrice, {
              "data-test": "pairPrice",
              price: $data.displayedPrice,
              "currency-symbol": $options.currency.symbol,
              "currency-code": $options.currency.code,
              decimals: $options.activeMarket.decimals.counter
            }, null, 8, ["price", "currency-symbol", "currency-code", "decimals"])
          ]),
          _cache[0] || (_cache[0] = createTextVNode()),
          createVNode(_component_MarketPercentageChange, {
            "data-test": "pairPercentageChange",
            class: "market-chart__percent",
            percentage: $options.percentageChange
          }, null, 8, ["percentage"])
        ]),
        _cache[2] || (_cache[2] = createTextVNode()),
        createBaseVNode("div", _hoisted_6$4, [
          !$options.isMobile ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.rangeOptions, (range) => {
            return openBlock(), createBlock(_component_MarketRange, {
              key: range.key,
              "data-test": `chartRange${range.text}`,
              "range-key": range.key,
              range: range.text,
              "is-active": $options.isRangeActive(range),
              "on-click": $options.handleRangeClick
            }, null, 8, ["data-test", "range-key", "range", "is-active", "on-click"]);
          }), 128)) : createCommentVNode("", true),
          _cache[1] || (_cache[1] = createTextVNode()),
          $options.isMobile ? (openBlock(), createBlock(_component_MarketMobileDropdown, {
            key: 1,
            options: $options.rangeOptions,
            value: $data.activeRange.key,
            "onUpdate:value": $options.handleRangeClick
          }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true)
        ])
      ]),
      _cache[3] || (_cache[3] = createTextVNode()),
      $options.isMobile ? (openBlock(), createBlock(_component_ChartTypeSwitch, {
        key: 0,
        class: "market-chart__chart-switch"
      })) : createCommentVNode("", true)
    ]),
    _cache[5] || (_cache[5] = createTextVNode()),
    $setup.isLineChartActive ? (openBlock(), createBlock(_component_PriceHistoryChart, {
      key: 0,
      "active-range": $data.activeRange.key,
      market: $options.activeMarket.key,
      "percentage-change": $options.percentageChange,
      onClick: $options.changeSelectedPrice,
      onLoadingStateChange: $options.onPriceHistoryLoadingStateChange,
      onNewOpenPrice: $options.onNewOpenPrice
    }, null, 8, ["active-range", "market", "percentage-change", "onClick", "onLoadingStateChange", "onNewOpenPrice"])) : (openBlock(), createBlock(_component_SimpleMarketsCandleChart, {
      key: 1,
      "active-range": $data.activeRange.key,
      market: $options.activeMarket.key,
      "current-price": $data.displayedPrice,
      onLoadingStateChange: $options.onCandleLoadingStateChange,
      onNewOpenPrice: $options.onNewOpenPrice
    }, null, 8, ["active-range", "market", "current-price", "onLoadingStateChange", "onNewOpenPrice"]))
  ]);
}
const MarketChartSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-249e679e"]]);
const glob = /* @__PURE__ */ Object.assign({ "../shared/assets/images/earn-rewards/ALGO.svg": __vite_glob_0_0, "../shared/assets/images/earn-rewards/APE.svg": __vite_glob_0_1, "../shared/assets/images/earn-rewards/BCH.svg": __vite_glob_0_2, "../shared/assets/images/earn-rewards/BTC.svg": __vite_glob_0_3, "../shared/assets/images/earn-rewards/ETH.svg": __vite_glob_0_4, "../shared/assets/images/earn-rewards/LINK.svg": __vite_glob_0_5, "../shared/assets/images/earn-rewards/LTC.svg": __vite_glob_0_6, "../shared/assets/images/earn-rewards/USDC.svg": __vite_glob_0_7, "../shared/assets/images/earn-rewards/USDT.svg": __vite_glob_0_8, "../shared/assets/images/earn-rewards/XRP.svg": __vite_glob_0_9, "../shared/assets/images/earn-rewards/default.svg": __vite_glob_0_10 });
const IMAGES = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [key.replace("../shared/assets/images/earn-rewards/", ""), value.default])
);
const _sfc_main$7 = {
  name: "MarketEarnBanner",
  components: {
    BtsButton,
    BtsLink
  },
  props: {
    asset: {
      type: String,
      required: true
    },
    stakingDisclaimer: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      earnStore: useEarnStore(),
      stakingFaqUrl: URLService.getPageUrl("faq_get_answer", { question: "what-is-bitstamp-earn-staking" })
    };
  },
  computed: {
    bestApy() {
      return this.earnStore.bestAnnualYieldPerAsset[this.asset];
    },
    earnAsset() {
      return this.earnStore.optionsWithUnLockableAssets.find((el) => el.currency === this.asset);
    },
    isAssetOptInOptOut() {
      return Boolean(this.earnAsset);
    },
    canUseLending() {
      return this.earnStore.lendingOptions.some((earnOption) => earnOption.currency === this.asset);
    },
    canUseStaking() {
      return this.earnStore.stakingOptions.some((earnOption) => earnOption.currency === this.asset);
    },
    actionText() {
      if (this.canUseLending && this.canUseStaking) {
        return "Lend or stake";
      } else if (this.canUseLending) {
        return "Lend";
      } else if (this.canUseStaking) {
        return "Stake";
      }
      return "";
    },
    earnPageLink() {
      return URLService.getPageUrl("earnDashboard", {}, true, { asset: this.asset });
    },
    earnImage() {
      if (IMAGES[this.asset]) {
        return IMAGES[`${this.asset}.svg`];
      } else {
        return IMAGES["default.svg"];
      }
    },
    isVaspRiskWarningActive() {
      return this.$constants.showVaspInvestmentRiskWarning;
    }
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "earn-banner"
};
const _hoisted_2$3 = {
  key: 0,
  class: "earn-banner__text earn-banner__text--disclaimer"
};
const _hoisted_3$3 = {
  key: 1,
  class: "earn-banner__container"
};
const _hoisted_4$3 = { key: 0 };
const _hoisted_5$3 = { class: "earn-banner__title" };
const _hoisted_6$3 = { class: "earn-banner__text" };
const _hoisted_7$3 = { key: 1 };
const _hoisted_8$2 = { class: "earn-banner__title" };
const _hoisted_9$2 = { class: "earn-banner__text" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_BtsButton = resolveComponent("BtsButton");
  return ($options.bestApy || $props.stakingDisclaimer) && !$options.isVaspRiskWarningActive ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
    $props.stakingDisclaimer ? (openBlock(), createElementBlock("div", _hoisted_2$3, toDisplayString($props.asset) + " staking is no longer available in your region.\n    ", 1)) : (openBlock(), createElementBlock("div", _hoisted_3$3, [
      $options.isAssetOptInOptOut ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
        createBaseVNode("h4", _hoisted_5$3, "\n          Hold " + toDisplayString($options.earnAsset.currency) + ", get staking rewards\n        ", 1),
        _cache[10] || (_cache[10] = createTextVNode()),
        createBaseVNode("div", _hoisted_6$3, [
          createTextVNode("\n          Holding " + toDisplayString($options.earnAsset.currency) + " in your Bitstamp account activates default staking,\n          ", 1),
          _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
          _cache[3] || (_cache[3] = createTextVNode("\n          unlocking rewards at a competitive ")),
          createBaseVNode("strong", null, toDisplayString($options.bestApy) + "% APY", 1),
          _cache[4] || (_cache[4] = createTextVNode(".\n          ")),
          _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
          _cache[6] || (_cache[6] = createTextVNode("\n          Enjoy effortless earnings and the freedom to opt-out of rewards at any moment.\n          ")),
          _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
          _cache[8] || (_cache[8] = createTextVNode("\n          Learn more ")),
          createVNode(_component_BtsLink, {
            "new-tab": "",
            external: "",
            to: $setup.stakingFaqUrl
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("\n            here\n          ")
            ])),
            _: 1
          }, 8, ["to"]),
          _cache[9] || (_cache[9] = createTextVNode(".\n        "))
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_7$3, [
        createBaseVNode("h4", _hoisted_8$2, "\n          Start earning " + toDisplayString($props.asset) + " rewards\n        ", 1),
        _cache[12] || (_cache[12] = createTextVNode()),
        createBaseVNode("div", _hoisted_9$2, [
          createTextVNode(toDisplayString($options.actionText) + " your " + toDisplayString($props.asset) + " and earn\n          ", 1),
          createBaseVNode("strong", null, toDisplayString($options.bestApy) + "% APY ", 1),
          _cache[11] || (_cache[11] = createTextVNode(" in crypto rewards!\n        "))
        ])
      ])),
      _cache[14] || (_cache[14] = createTextVNode()),
      createBaseVNode("div", null, [
        createVNode(_component_BtsButton, {
          class: "earn-banner__button mt16",
          link: $options.earnPageLink,
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$track("Click earn banner"))
        }, {
          default: withCtx(() => _cache[13] || (_cache[13] = [
            createTextVNode("\n          Start earning\n        ")
          ])),
          _: 1
        }, 8, ["link"])
      ])
    ])),
    _cache[15] || (_cache[15] = createTextVNode()),
    $options.earnImage ? (openBlock(), createBlock(resolveDynamicComponent($options.earnImage), {
      key: 2,
      class: "earn-banner__icon",
      alt: `Start earning ${$props.asset}`
    }, null, 8, ["alt"])) : createCommentVNode("", true)
  ])) : createCommentVNode("", true);
}
const MarketEarnBanner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-f57bb751"]]);
const _sfc_main$6 = {
  name: "LearnCenter",
  components: {
    MarketPanel,
    BtsLink
  },
  data() {
    return {
      URLService
    };
  },
  computed: {
    learnCenterPosts() {
      if (!this.$pageContext.learnCenterPosts) {
        return [];
      }
      return this.$pageContext.learnCenterPosts;
    }
  },
  methods: {
    goToPost(url) {
      window.location.href = url;
    }
  }
};
const _hoisted_1$5 = { class: "learn-center" };
const _hoisted_2$2 = { class: "learn-center__nav" };
const _hoisted_3$2 = { class: "learn-center-post-grid" };
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = ["src", "alt"];
const _hoisted_6$2 = ["href"];
const _hoisted_7$2 = { class: "learn-center-post__text" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_MarketPanel = resolveComponent("MarketPanel");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$2, [
      _cache[1] || (_cache[1] = createBaseVNode("div", { class: "learn-center__title" }, "\n        Learn Center\n      ", -1)),
      _cache[2] || (_cache[2] = createTextVNode()),
      createVNode(_component_BtsLink, {
        class: "learn-center__title-link",
        to: $data.URLService.getPageUrl("learnCenter"),
        external: ""
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("\n        Visit our Learn Center\n      ")
        ])),
        _: 1
      }, 8, ["to"])
    ]),
    _cache[5] || (_cache[5] = createTextVNode()),
    createVNode(_component_MarketPanel, null, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.learnCenterPosts, (post) => {
            return openBlock(), createElementBlock("div", {
              key: post.url,
              class: "learn-center-post",
              onClick: ($event) => $options.goToPost(post.url)
            }, [
              createBaseVNode("img", {
                src: post.image,
                alt: post.title,
                class: "learn-center-post__image"
              }, null, 8, _hoisted_5$2),
              _cache[3] || (_cache[3] = createTextVNode()),
              createBaseVNode("a", {
                class: "learn-center-post__title",
                href: post.url
              }, toDisplayString(post.title), 9, _hoisted_6$2),
              _cache[4] || (_cache[4] = createTextVNode()),
              createBaseVNode("div", _hoisted_7$2, toDisplayString(post.description), 1)
            ], 8, _hoisted_4$2);
          }), 128))
        ])
      ]),
      _: 1
    })
  ]);
}
const LearnCenter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-37d0991a"]]);
const _sfc_main$5 = {
  name: "ITBSignature"
};
const _hoisted_1$4 = { class: "itb-signature" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, "\n    Powered by Intotheblock\n  ");
}
const ITBSignature = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-d0811c28"]]);
const _sfc_main$4 = {
  components: { Loading, ITBSignature, InsightHighlights, ITBGraph, InsightPanelWrapper },
  props: {
    asset: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "area",
          height: "40%",
          zoomType: void 0
        },
        legend: {
          enabled: false
        },
        navigator: {
          enabled: false
        },
        subtitle: {
          align: "left",
          text: "1 month chart"
        },
        title: {
          text: null
        },
        xAxis: {
          labels: {
            enabled: false
          }
        },
        yAxis: {
          labels: {
            enabled: false
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          title: {
            text: null
          }
        },
        series: [{
          data: null,
          name: "Positive vs. Negative",
          color: "var(--chart-average-color)",
          fillColor: {
            value: 0.01,
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, "var(--chart-average-fill)"],
              [1, "var(--chart-average-fill-transparent)"]
            ]
          }
        }],
        tooltip: {
          headerFormat: "",
          pointFormatter() {
            const value = toDecimal(this.y);
            return `<div class="itb-tooltip">
              <span>${this.options.name}</span><br>
              <span class="itb-tooltip__circle" style="color: ${this.color}">●</span>
              ${this.series.name}: <b>${numberFormatter.groupedPrice({ value })} Messages</b>
            </div>`;
          }
        }
      },
      highlights: {
        firstSlot: {
          title: "7-Day Positive",
          value: null
        },
        secondSlot: {
          title: "7-Day Neutral",
          value: null
        },
        thirdSlot: {
          title: "7-Day Negative",
          value: null
        }
      },
      telegramSentimentLoaded: false,
      dataUnavailable: false,
      parseFunction: (itbData) => {
        const positiveNegativeDiff = [];
        itbData.sentiment.forEach(function(sentiment) {
          positiveNegativeDiff.push([sentiment.date, sentiment.telegram.positive - sentiment.telegram.negative]);
        });
        return [positiveNegativeDiff];
      }
    };
  },
  computed: {
    urlQueryParams() {
      return {
        since: formatDate(new Date(Date.now() - 31 * 24 * 60 * 60 * 1e3), "yyyy-MM-dd")
      };
    }
  },
  methods: {
    onDataLoaded(itbData) {
      const telegramSentimentLast7Days = itbData.sentiment.slice(-7).map((sentiment) => sentiment.telegram);
      const telegramSentimentSum = telegramSentimentLast7Days.reduce((group, sentiment) => {
        Object.entries(sentiment).forEach(([type, value]) => {
          group[type] = (group[type] || 0) + value;
        });
        return group;
      }, {});
      const pluralizeNoun = (count, noun, suffix = "s") => `${noun}${count !== 1 ? suffix : ""}`;
      const formatHighlight = (sentimentSum) => `
        ${numberFormatter.groupedPrice({ value: toDecimal(sentimentSum) })} ${pluralizeNoun(sentimentSum, "message")}`;
      this.highlights.firstSlot.value = formatHighlight(telegramSentimentSum.positive);
      this.highlights.secondSlot.value = formatHighlight(telegramSentimentSum.neutral);
      this.highlights.thirdSlot.value = formatHighlight(telegramSentimentSum.negative);
      this.telegramSentimentLoaded = true;
    },
    onDataUnavailable() {
      this.telegramSentimentLoaded = true;
      this.dataUnavailable = true;
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  const _component_ITBGraph = resolveComponent("ITBGraph");
  const _component_InsightHighlights = resolveComponent("InsightHighlights");
  const _component_ITBSignature = resolveComponent("ITBSignature");
  const _component_InsightPanelWrapper = resolveComponent("InsightPanelWrapper");
  return openBlock(), createBlock(_component_InsightPanelWrapper, { size: "small" }, {
    default: withCtx(() => [
      createVNode(_component_Loading, {
        "loading-finished": $data.telegramSentimentLoaded,
        "has-error": $data.dataUnavailable,
        "full-size": ""
      }, {
        errorTitle: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("\n        Currently unavailable\n      ")
        ])),
        _: 1
      }, 8, ["loading-finished", "has-error"]),
      _cache[1] || (_cache[1] = createTextVNode()),
      createVNode(_component_ITBGraph, {
        "custom-chart-options": $data.chartOptions,
        asset: $props.asset,
        "parse-function": $data.parseFunction,
        "url-name": "insightsSocialSentimentView",
        "url-query-params": $options.urlQueryParams,
        "is-stock-chart": false,
        onDataLoaded: $options.onDataLoaded,
        onDataUnavailable: $options.onDataUnavailable
      }, null, 8, ["custom-chart-options", "asset", "parse-function", "url-query-params", "onDataLoaded", "onDataUnavailable"]),
      _cache[2] || (_cache[2] = createTextVNode()),
      createVNode(_component_InsightHighlights, { highlights: $data.highlights }, null, 8, ["highlights"]),
      _cache[3] || (_cache[3] = createTextVNode()),
      createVNode(_component_ITBSignature)
    ]),
    _: 1
  });
}
const TelegramSentimentTeaser = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
const _sfc_main$3 = {
  components: { Loading, ITBSignature, InsightHighlights, InsightPanelWrapper, ITBGraph },
  props: {
    asset: {
      type: String,
      required: true
    }
  },
  data() {
    const componentContext = this;
    return {
      chartOptions: {
        chart: {
          type: "area",
          height: "40%",
          zoomType: void 0
        },
        legend: {
          enabled: false
        },
        navigator: {
          enabled: false
        },
        subtitle: {
          align: "left",
          text: "1 month chart"
        },
        title: {
          text: null
        },
        xAxis: {
          labels: {
            enabled: false
          }
        },
        yAxis: {
          labels: {
            enabled: false
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          title: {
            text: null
          }
        },
        series: [{
          data: null,
          name: "Total Volume",
          color: "var(--chart-average-color)",
          fillColor: {
            value: 0.01,
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, "var(--chart-average-fill)"],
              [1, "var(--chart-average-fill-transparent)"]
            ]
          }
        }],
        tooltip: {
          headerFormat: ``,
          pointFormatter() {
            const value = toDecimal(this.y);
            return `<div class="itb-tooltip">
              <span>${this.options.name}</span><br>
              <span class="itb-tooltip__circle" style="color: ${this.color}">●</span>
              ${this.series.name}:
              <b>${numberFormatter.groupedPrice({ value, currencyCode: componentContext.asset.toUpperCase() })}</b>
            </div>`;
          }
        }
      },
      highlights: {
        firstSlot: {
          title: "7-Day Average",
          value: null
        },
        secondSlot: {
          title: "7-Day High",
          value: null
        },
        thirdSlot: {
          title: "7-Day Low",
          value: null
        }
      },
      onChainVolumeLoaded: false,
      dataUnavailable: false,
      parseFunction: (itbData) => {
        return [itbData.txsStats.map(({ date, totalVolume }) => [date, totalVolume])];
      }
    };
  },
  computed: {
    urlQueryParams() {
      return {
        since: formatDate(new Date(Date.now() - 31 * 24 * 60 * 60 * 1e3), "yyyy-MM-dd")
      };
    }
  },
  methods: {
    onDataLoaded(itbData) {
      const totalVolumeLast7Days = itbData.txsStats.slice(-7).map((stats) => stats.totalVolume);
      if (totalVolumeLast7Days.length > 0) {
        const currencyCode = this.asset.toUpperCase();
        const totalSumVolume = totalVolumeLast7Days.reduce((totalVolume, volume) => totalVolume + volume, 0);
        this.highlights.firstSlot.value = `${numberFormatter.groupedPrice({
          value: toDecimal(totalSumVolume / totalVolumeLast7Days.length),
          currencyCode
        })}`;
        this.highlights.secondSlot.value = `${numberFormatter.groupedPrice({
          value: toDecimal(Math.max(...totalVolumeLast7Days)),
          currencyCode
        })}`;
        this.highlights.thirdSlot.value = `${numberFormatter.groupedPrice({
          value: toDecimal(Math.min(...totalVolumeLast7Days)),
          currencyCode
        })}`;
      }
      this.onChainVolumeLoaded = true;
    },
    onDataUnavailable() {
      this.onChainVolumeLoaded = true;
      this.dataUnavailable = true;
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  const _component_ITBGraph = resolveComponent("ITBGraph");
  const _component_InsightHighlights = resolveComponent("InsightHighlights");
  const _component_ITBSignature = resolveComponent("ITBSignature");
  const _component_InsightPanelWrapper = resolveComponent("InsightPanelWrapper");
  return openBlock(), createBlock(_component_InsightPanelWrapper, { size: "small" }, {
    default: withCtx(() => [
      createVNode(_component_Loading, {
        "loading-finished": $data.onChainVolumeLoaded,
        "has-error": $data.dataUnavailable,
        "full-size": ""
      }, {
        errorTitle: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("\n        Currently unavailable\n      ")
        ])),
        _: 1
      }, 8, ["loading-finished", "has-error"]),
      _cache[1] || (_cache[1] = createTextVNode()),
      createVNode(_component_ITBGraph, {
        "custom-chart-options": $data.chartOptions,
        asset: $props.asset,
        "parse-function": $data.parseFunction,
        "url-name": "insightsNetworkTransactionsView",
        "url-query-params": $options.urlQueryParams,
        "is-stock-chart": false,
        onDataLoaded: $options.onDataLoaded,
        onDataUnavailable: $options.onDataUnavailable
      }, null, 8, ["custom-chart-options", "asset", "parse-function", "url-query-params", "onDataLoaded", "onDataUnavailable"]),
      _cache[2] || (_cache[2] = createTextVNode()),
      createVNode(_component_InsightHighlights, { highlights: $data.highlights }, null, 8, ["highlights"]),
      _cache[3] || (_cache[3] = createTextVNode()),
      createVNode(_component_ITBSignature)
    ]),
    _: 1
  });
}
const OnChainVolumeTeaser = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-cf81a2aa"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "app-banner"
};
const _hoisted_2$1 = { class: "app-banner__header" };
const _hoisted_3$1 = { class: "app-banner__title" };
const _hoisted_4$1 = {
  key: 0,
  class: "app-banner__app-buttons"
};
const _hoisted_5$1 = ["href"];
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = { class: "app-banner__qr-wrapper" };
const _hoisted_9$1 = { class: "app-banner__qr-code" };
const _sfc_main$2 = {
  __name: "MobileAppBanner",
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const hideBanner = nuxtApp.$pageContext.hasSimpleAppInstalled;
    const playStore = URLService.getPageUrl("appStoreRedirect", {}, true, {
      store: "android",
      source: "asset page"
    }, true);
    const appStore = URLService.getPageUrl("appStoreRedirect", {}, true, {
      store: "ios",
      source: "asset page"
    }, true);
    const qrCodeDownloadApp = URLService.getPageUrl("appStoreRedirect", {}, true, {
      r: "mobile",
      source: "asset page"
    }, true);
    onMounted(() => {
      nuxtApp.$track("Asset page banner shown");
    });
    return (_ctx, _cache) => {
      return !unref(hideBanner) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(unref(BitstampSymbol), { class: "app-banner__app-icon" }),
            _cache[0] || (_cache[0] = createTextVNode("\n        The Bitstamp app\n      "))
          ]),
          _cache[1] || (_cache[1] = createTextVNode()),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "app-banner__subtitle" }, "\n        Your all-in-one home for all things crypto with Basic and Pro modes.\n      ", -1))
        ]),
        _cache[7] || (_cache[7] = createTextVNode()),
        _ctx.$isMobileSize.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createBaseVNode("a", {
            href: unref(appStore),
            class: "app-banner__store-link",
            title: "Download on App Store",
            rel: "noopener noreferrer nofollow",
            target: "_blank"
          }, [
            createVNode(unref(AppStore), { class: "app-banner__store-logo" })
          ], 8, _hoisted_5$1),
          _cache[3] || (_cache[3] = createTextVNode()),
          createBaseVNode("a", {
            href: unref(playStore),
            class: "app-banner__store-link",
            title: "Get it on Google Play",
            rel: "noopener noreferrer nofollow",
            target: "_blank"
          }, [
            createVNode(unref(GooglePlay), { class: "app-banner__store-logo" })
          ], 8, _hoisted_6$1)
        ])) : (openBlock(), createElementBlock("div", _hoisted_7$1, [
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "app-banner__download-text" }, "\n        Download now\n      ", -1)),
          _cache[6] || (_cache[6] = createTextVNode()),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createVNode(unref(QrcodeSvg), {
                value: unref(qrCodeDownloadApp),
                size: 90
              }, null, 8, ["value"]),
              _cache[4] || (_cache[4] = createTextVNode()),
              createVNode(unref(BitstampSymbol), { class: "app-banner__app-icon app-banner__app-icon--qr" })
            ])
          ])
        ])),
        _cache[8] || (_cache[8] = createTextVNode()),
        _cache[9] || (_cache[9] = createBaseVNode("img", {
          class: "app-banner__image",
          src: _imports_0,
          alt: "The Bitstamp app"
        }, null, -1))
      ])) : createCommentVNode("", true);
    };
  }
};
const MobileAppBanner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-747df868"]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "84",
  height: "89",
  fill: "none",
  viewBox: "0 0 84 89"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<path fill="#DCDEE0" d="M43.155 81.734c15.465 0 28-12.534 28-28s-12.535-28-28-28-28 12.535-28 28 12.535 28 28 28"></path><path fill="#03FC9D" stroke="#003D31" stroke-linecap="round" stroke-miterlimit="10" d="M43.155 57.734a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path stroke="#003D31" stroke-linecap="round" stroke-miterlimit="10" d="M43.155 31.734v18m16 4h-12"></path><path stroke="#003D31" stroke-linecap="round" d="M66.515 28.238c6.767 6.299 11 15.285 11 25.26 0 19.056-15.445 34.5-34.5 34.5-19.056 0-34.5-15.445-34.5-34.5 0-3.363.48-6.613 1.378-9.686"></path><path stroke="#003D31" stroke-linecap="round" stroke-miterlimit="10" d="m1 49.29 8.835-5.86a.2.2 0 0 1 .276.053l5.7 8.42"></path><path fill="#03FC9D" d="M20.827 24.287c4.043 4.359 5.948 9.166 4.267 10.733l-.586.354a2.5 2.5 0 0 1-1.052.136c-2.196-.103-5.638-2.21-8.718-5.539-3.498-3.778-5.396-7.888-4.742-9.94a1.9 1.9 0 0 1 .483-.79c1.68-1.568 6.314.69 10.348 5.046"></path><path fill="#03FC9D" d="m24.502 35.366-1.534.926c-1.681 1.568-6.322-.691-10.357-5.048s-5.941-9.156-4.259-10.73l.587-.355 1.534-.926a1.9 1.9 0 0 0-.483.79c-.653 2.052 1.245 6.163 4.742 9.94 3.08 3.33 6.522 5.437 8.719 5.54.395.024.748-.021 1.051-.137"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M10.48 19.24c1.68-1.568 6.314.69 10.35 5.047 4.042 4.36 5.948 9.167 4.267 10.734"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M25.123 34.978a1.7 1.7 0 0 1-.586.354z"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="m24.59 35.341-1.594 1.012c-2.239 1.318-6.324-.68-10.349-5.079-4.024-4.398-5.919-9.251-4.23-10.851l.588-.36 1.538-.943a1.9 1.9 0 0 0-.485.801c-.66 2.08 1.226 6.236 4.715 10.05 3.073 3.361 6.51 5.484 8.708 5.58.395.024.806-.091 1.11-.21Z"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M24.95 34.907c-.468.469-1.234.513-1.626.49-2.179-.1-5.591-2.189-8.643-5.493-3.466-3.749-5.345-7.83-4.694-9.87.101-.315.264-.573.48-.785 1.67-1.559 6.264.678 10.262 5.001 4.006 4.326 5.89 9.099 4.221 10.657"></path><path fill="#03FC9D" d="M44.781 7.486c1.852-4.005 4.619-6.67 6.175-5.96l.41.302q.249.265.393.683c.553 1.535.08 4.491-1.336 7.544-1.606 3.467-3.896 5.93-5.494 6.062a1.4 1.4 0 0 1-.681-.108c-1.556-.71-1.32-4.525.533-8.523"></path><path fill="#03FC9D" d="m51.373 1.827 1.074.791c1.556.71 1.32 4.531-.533 8.53-1.852 3.998-4.613 6.662-6.175 5.953l-.41-.302-1.074-.79q.312.135.68.107c1.6-.131 3.89-2.595 5.496-6.061 1.416-3.053 1.889-6.01 1.335-7.545a1.9 1.9 0 0 0-.392-.683Z"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M44.245 16.007c-1.555-.71-1.318-4.524.534-8.522 1.85-4.004 4.617-6.668 6.173-5.959m.012.026q.236.11.41.303z"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="m51.329 1.77 1.15.808c1.543 1.163 1.328 4.53-.556 8.533s-4.687 6.674-6.268 5.968l-.415-.302-1.086-.788q.316.136.69.106c1.62-.135 3.944-2.603 5.578-6.074 1.44-3.057 1.925-6.015 1.367-7.55-.096-.277-.292-.526-.46-.701"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M50.938 1.675c.457.188.706.7.8.974.553 1.518.082 4.44-1.333 7.46-1.604 3.428-3.89 5.864-5.485 5.994a1.4 1.4 0 0 1-.68-.106c-1.554-.702-1.317-4.474.533-8.428 1.848-3.96 4.611-6.595 6.164-5.894Z"></path><path fill="#03FC9D" d="M74.565 31.07c3.406-1.843 6.752-2.263 7.474-.946l.13.428q.035.317-.084.687c-.417 1.37-2.303 3.2-4.904 4.603-2.951 1.593-5.856 2.122-7.049 1.374a1.24 1.24 0 0 1-.422-.434c-.721-1.317 1.45-3.875 4.855-5.712"></path><path fill="#03FC9D" d="m82.174 30.556.34 1.12c.72 1.317-1.454 3.88-4.858 5.717-3.404 1.838-6.745 2.26-7.471.94l-.13-.427-.34-1.12q.148.258.423.433c1.193.748 4.098.22 7.05-1.374 2.6-1.402 4.486-3.232 4.903-4.603q.12-.37.083-.686"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M69.71 36.78c-.721-1.316 1.45-3.874 4.854-5.712 3.405-1.842 6.751-2.262 7.472-.945m-.006.024q.108.201.13.428z"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="m82.171 30.496.384 1.172c.474 1.63-1.447 3.884-4.876 5.708-3.428 1.825-6.802 2.23-7.543.903l-.134-.43-.349-1.126c.102.174.242.32.43.438 1.209.756 4.14.242 7.114-1.34 2.62-1.392 4.514-3.218 4.929-4.59.078-.246.071-.524.045-.735"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M81.949 30.218c.222.373.129.863.052 1.106-.41 1.358-2.278 3.165-4.859 4.545-2.93 1.567-5.817 2.079-7.008 1.332a1.24 1.24 0 0 1-.422-.432c-.723-1.31 1.426-3.838 4.804-5.646 3.381-1.813 6.71-2.214 7.433-.905"></path><path fill="#03FC9D" d="M79.805 67.194c.626 1.818-2.806 4.6-7.67 6.212-4.862 1.605-9.31 1.434-9.935-.385l-.716-2.23c.134.386.431.695.867.925 1.64.902 5.242.75 9.101-.53 3.794-1.256 6.718-3.22 7.539-4.897.237-.48.305-.933.162-1.344z"></path><path fill="#03FC9D" d="M79.153 64.945c.142.41.075.865-.162 1.345-.821 1.677-3.745 3.64-7.539 4.896-3.859 1.28-7.462 1.432-9.101.53-.436-.23-.733-.538-.867-.925-.629-1.835 2.82-4.627 7.7-6.241s9.34-1.44 9.969.395"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="m79.153 64.945.652 2.249c.626 1.818-2.806 4.6-7.67 6.212-4.862 1.605-9.31 1.434-9.935-.385l-.716-2.23"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M79.153 64.945c.142.41.075.865-.162 1.345-.821 1.677-3.745 3.64-7.539 4.896-3.859 1.28-7.462 1.432-9.101.53-.436-.23-.733-.538-.867-.925-.629-1.835 2.82-4.627 7.7-6.241s9.34-1.44 9.969.395"></path><path stroke="#003D31" stroke-linecap="round" stroke-linejoin="round" d="M78.99 66.29c-.82 1.677-3.744 3.64-7.538 4.896-3.859 1.28-7.462 1.432-9.101.53-.436-.23-.733-.538-.867-.925-.629-1.835 2.82-4.627 7.7-6.241s9.34-1.44 9.969.395c.142.41.075.865-.162 1.345Z"></path>', 26)
  ]));
}
const RecurringTradePanelSVG = { render };
const _sfc_main$1 = {
  name: "RecurringTradePanel",
  components: {
    MarketPanel,
    RecurringTradePanelSVG
  },
  props: {
    isBuyOrder: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      // Trade feature status fetched in src/dashboard/pages/markets/_base/_counter/index.vue
      featureStatusStore: useFeatureStatusStore()
    };
  },
  computed: {
    translationSideKey() {
      return this.isBuyOrder ? "buy" : "sell";
    }
  },
  methods: {
    openSimpleOrderModal() {
      this.$eventBus.$emit(
        EventBusConstants.SIMPLE_APP.CREATE,
        {
          source: SIMPLE_APP_SOURCE.MARKETS_RECURRING,
          openOnStep: this.isBuyOrder ? TAB_NAMES.BUY : TAB_NAMES.SELL
        }
      );
    }
  }
};
const _hoisted_1$1 = { class: "recurring-panel" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RecurringTradePanelSVG = resolveComponent("RecurringTradePanelSVG");
  const _component_MarketPanel = resolveComponent("MarketPanel");
  return openBlock(), createElementBlock("div", null, [
    $setup.featureStatusStore.isTradeEnabled ? (openBlock(), createBlock(_component_MarketPanel, { key: 0 }, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t(`components.recurringTradePanel.${$options.translationSideKey}Title`)), 1)
      ]),
      default: withCtx(() => [
        _cache[2] || (_cache[2] = createTextVNode()),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", null, [
            createTextVNode(toDisplayString(_ctx.$t(`components.recurringTradePanel.${$options.translationSideKey}Text`)) + " ", 1),
            createBaseVNode("div", {
              class: "recurring-panel__action",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.openSimpleOrderModal && $options.openSimpleOrderModal(...args))
            }, toDisplayString(_ctx.$t(`components.recurringTradePanel.${$options.translationSideKey}Cta`)), 1)
          ]),
          _cache[1] || (_cache[1] = createTextVNode()),
          createBaseVNode("div", null, [
            createVNode(_component_RecurringTradePanelSVG)
          ])
        ])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const RecurringTradePanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c0cc76cb"]]);
const _sfc_main = {
  components: {
    LearnCenter,
    ChartTypeSwitch,
    RecurringTradePanel,
    PastPerformanceDisclaimer,
    MobileAppBanner,
    AssetTags,
    TopBackLink,
    MarketPanel,
    CurrencyIcon,
    OpenOrders,
    CreateOrder,
    SimpleOrder,
    UserAnonymous,
    MarketChartSection,
    MarketDropdown: LabeledDropdown,
    MarketMobileDropdown,
    TelegramSentimentTeaser,
    OnChainVolumeTeaser,
    MarketEarnBanner,
    MarketsAboutSection: __nuxt_component_0
  },
  setup() {
    return {
      activeMarketStore: useActiveMarketStore(),
      earnStore: useEarnStore(),
      basicMarketsOrderFormStore: useBasicMarketsOrderFormStore(),
      marketsStore: useMarketsStore(),
      subAccountStore: useSubAccountStore(),
      tickersStore: useTickersStore(),
      userStateStore: useUserStateStore(),
      featureStatusStore: useFeatureStatusStore()
    };
  },
  data() {
    return {
      ordersConstants: constants$1,
      overview: true,
      trade: false,
      orders: false,
      advancedOrders: false,
      baseTitle: PAGE_CONTEXT.page_title,
      itbAsset: PAGE_CONTEXT.itb_asset,
      isMobileEvaluated: false,
      isVaspWarningActive: this.$constants.showVaspInvestmentRiskWarning ?? false,
      availableSimpleOrderMarket: true,
      isLineChartActive: true
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  computed: {
    isLearnCenterEnabled() {
      return this.$pageContext.showLearnCenterSection && this.$pageContext.learnCenterPosts && this.$pageContext.learnCenterPosts.length > 0;
    },
    isStakingDisclaimerActive() {
      return this.$pageContext.showStakingDelistingDisclaimer;
    },
    title() {
      if (!this.activeMarket || this.price.lessThanOrEqualTo(0) || isCrawler()) {
        return this.baseTitle;
      }
      const formattedPrice = numberFormatter.price({
        value: this.price,
        decimals: this.activeMarket.decimals.counter,
        currencySymbol: this.counter.symbol
      });
      return `${formattedPrice} ${this.activeMarket.name} - ${this.baseTitle}`;
    },
    price() {
      return this.tickersStore.getTicker(this.activeMarket.key).last;
    },
    isMobile() {
      return this.$isSmall.value || this.$isMedium.value;
    },
    activeMarket() {
      return this.activeMarketStore.activeMarket;
    },
    base() {
      return CURRENCIES[this.activeMarket.base];
    },
    baseAssetName() {
      return this.base.name;
    },
    counter() {
      return CURRENCIES[this.activeMarket.counter];
    },
    marketsDropdownOptions() {
      const activeMarket = this.activeMarket;
      const markets = [
        { value: this.toUnderlinedForm(activeMarket.base, activeMarket.counter), text: activeMarket.display }
      ];
      const additionalMarkets = [];
      Object.values(this.marketsStore.spotMarkets).forEach((market) => {
        if (market.key !== activeMarket.key && activeMarket.base === market.base) {
          markets.push({ value: this.toUnderlinedForm(market.base, market.counter), text: market.display });
        } else if (market.key !== activeMarket.key && activeMarket.base === market.counter) {
          if (this.eth2MarketsPageDisabled && market.base === this.$constants.currencyCodes.CURRENCY_ETH2) {
            return;
          }
          additionalMarkets.push({ value: this.toUnderlinedForm(market.base, market.counter), text: market.display });
        }
      });
      return [...markets, ...additionalMarkets];
    },
    marketsUrl() {
      return URLService.getPageUrl("markets");
    },
    anonymous() {
      return !this.userStateStore.isLoggedIn;
    },
    eth2MarketsPageDisabled() {
      return !PAIRS.eth2eth;
    },
    supportedChainTypesAsTags() {
      var _a;
      const types = ((_a = CURRENCIES[this.activeMarket.base]) == null ? void 0 : _a.supported_chain_types) || [];
      return types.map((text) => ({ text, smallText: text, colorScheme: "default" }));
    },
    activeSubAccount() {
      return this.subAccountStore.activeSubAccountId;
    },
    isSimpleBuyAvailable() {
      return this.$pageContext.isSimpleBuyEnabled;
    }
  },
  watch: {
    "basicMarketsOrderFormStore.activeOrderSide": {
      handler() {
        this.adjustTabsUnderline();
      }
    },
    activeMarket() {
      this.availableSimpleOrderMarket = true;
    }
  },
  created() {
    if (!this.anonymous) {
      this.featureStatusStore.fetch(featureStatusConstants.FEATURE_TYPES.TRADE);
    }
  },
  mounted() {
    window.addEventListener("resize", this.adjustTabsUnderline);
    this.adjustTabsUnderline();
    this.$nextTick(() => {
      this.isMobileEvaluated = true;
    });
  },
  beforeMount() {
    this.activeMarketStore.setActiveMarket(PAGE_CONTEXT.market);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustTabsUnderline);
  },
  methods: {
    setOrderSide(side) {
      this.basicMarketsOrderFormStore.setActiveOrderSide(side);
      this.overview = false;
      this.trade = true;
      this.orders = false;
      this.adjustTabsUnderline();
    },
    activateOverviewTab() {
      this.overview = true;
      this.trade = false;
      this.orders = false;
      this.adjustTabsUnderline();
    },
    adjustTabsUnderline() {
      this.$nextTick(() => {
        const { tabs, tabSelector } = this.$refs;
        if (tabs) {
          const activeTab = tabs.$el.getElementsByClassName("panel-tab--active")[0];
          const tabsLeftOffset = activeTab.offsetLeft;
          const { width } = activeTab.getBoundingClientRect();
          tabSelector.style.transform = `translateX(${tabsLeftOffset}px)`;
          tabSelector.style.width = `${width}px`;
        }
      });
    },
    redirectToMarket(underlinedMarket) {
      this.trackSelectCurrencyPair(underlinedMarket);
      const { base, counter } = this.fromUnderlinedForm(underlinedMarket);
      const path = URLService.getPageUrl("product_details", {
        base: base.toLowerCase(),
        counter: counter.toLowerCase()
      });
      this.$router.push({ path });
    },
    trackSelectCurrencyPair(marketKey) {
      const schema = tradingEvents.selectCurrencyPair.schema;
      schema["Trading Pair"] = marketKey.replace("_", "/").toUpperCase();
      this.$track(tradingEvents.selectCurrencyPair.name, schema);
    },
    toUnderlinedForm(base, counter) {
      return `${base}_${counter}`;
    },
    fromUnderlinedForm(market) {
      const [base, counter] = market.split("_");
      return { base, counter };
    },
    toggleAdvancedOrders() {
      this.advancedOrders = !this.advancedOrders;
    },
    setSimpleOrderMarketUnavailable() {
      this.availableSimpleOrderMarket = false;
    }
  }
};
const _hoisted_1 = { "data-test": "marketsDetails" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = { class: "dashboard-header__currency" };
const _hoisted_4 = { class: "dashboard-header__currency-icon" };
const _hoisted_5 = { "data-test": "pairName" };
const _hoisted_6 = { class: "dashboard-header__market" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 0,
  class: "dashboard-header__tags"
};
const _hoisted_9 = {
  key: 1,
  class: "dashboard-header__tags"
};
const _hoisted_10 = {
  key: 1,
  class: "dashboard-layout"
};
const _hoisted_11 = { class: "dashboard-layout__row" };
const _hoisted_12 = { class: "dashboard-layout__column" };
const _hoisted_13 = {
  key: 0,
  class: "insights-container"
};
const _hoisted_14 = { class: "dashboard-layout__column dashboard-layout__column--slim" };
const _hoisted_15 = {
  key: 0,
  class: "order-switch"
};
const _hoisted_16 = {
  ref: "tabSelector",
  class: "panel-tab__selector"
};
const _hoisted_17 = {
  key: 2,
  class: "dashboard-layout dashboard-layout--mobile"
};
const _hoisted_18 = {
  key: 0,
  class: "order-switch"
};
const _hoisted_19 = {
  ref: "tabSelector",
  class: "panel-tab__selector"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TopBackLink = resolveComponent("TopBackLink");
  const _component_CurrencyIcon = resolveComponent("CurrencyIcon");
  const _component_MarketDropdown = resolveComponent("MarketDropdown");
  const _component_MarketMobileDropdown = resolveComponent("MarketMobileDropdown");
  const _component_AssetTags = resolveComponent("AssetTags");
  const _component_ChartTypeSwitch = resolveComponent("ChartTypeSwitch");
  const _component_MarketChartSection = resolveComponent("MarketChartSection");
  const _component_MarketPanel = resolveComponent("MarketPanel");
  const _component_OnChainVolumeTeaser = resolveComponent("OnChainVolumeTeaser");
  const _component_TelegramSentimentTeaser = resolveComponent("TelegramSentimentTeaser");
  const _component_PastPerformanceDisclaimer = resolveComponent("PastPerformanceDisclaimer");
  const _component_MobileAppBanner = resolveComponent("MobileAppBanner");
  const _component_MarketEarnBanner = resolveComponent("MarketEarnBanner");
  const _component_MarketsAboutSection = __nuxt_component_0;
  const _component_LearnCenter = resolveComponent("LearnCenter");
  const _component_CreateOrder = resolveComponent("CreateOrder");
  const _component_SimpleOrder = resolveComponent("SimpleOrder");
  const _component_UserAnonymous = resolveComponent("UserAnonymous");
  const _component_RecurringTradePanel = resolveComponent("RecurringTradePanel");
  const _component_OpenOrders = resolveComponent("OpenOrders");
  const _component_portal = resolveComponent("portal");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$options.isMobile ? (openBlock(), createBlock(_component_TopBackLink, {
      key: 0,
      link: $options.marketsUrl
    }, {
      default: withCtx(() => _cache[9] || (_cache[9] = [
        createTextVNode("\n      Back to Markets\n    ")
      ])),
      _: 1
    }, 8, ["link"])) : createCommentVNode("", true),
    _cache[55] || (_cache[55] = createTextVNode()),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_CurrencyIcon, {
            currency: $options.base.code
          }, null, 8, ["currency"])
        ]),
        _cache[10] || (_cache[10] = createTextVNode()),
        createBaseVNode("span", _hoisted_5, toDisplayString($options.base.name), 1)
      ]),
      _cache[13] || (_cache[13] = createTextVNode()),
      createBaseVNode("div", _hoisted_6, [
        $options.marketsDropdownOptions.length <= 1 ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString($options.activeMarket.display), 1)) : createCommentVNode("", true),
        _cache[11] || (_cache[11] = createTextVNode()),
        !$options.isMobile && $options.marketsDropdownOptions.length > 1 ? (openBlock(), createBlock(_component_MarketDropdown, {
          key: 1,
          class: "dashboard-header__dropdown",
          options: $options.marketsDropdownOptions,
          value: $options.toUnderlinedForm($options.activeMarket.base, $options.activeMarket.counter),
          size: "large",
          "onUpdate:value": $options.redirectToMarket
        }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true),
        _cache[12] || (_cache[12] = createTextVNode()),
        $options.isMobile && $options.marketsDropdownOptions.length > 1 ? (openBlock(), createBlock(_component_MarketMobileDropdown, {
          key: 2,
          options: $options.marketsDropdownOptions,
          value: $options.toUnderlinedForm($options.activeMarket.base, $options.activeMarket.counter),
          "onUpdate:value": $options.redirectToMarket
        }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true)
      ]),
      _cache[14] || (_cache[14] = createTextVNode()),
      $options.base.tags.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
        createVNode(_component_AssetTags, {
          values: $options.base.tags
        }, null, 8, ["values"])
      ])) : createCommentVNode("", true),
      _cache[15] || (_cache[15] = createTextVNode()),
      $options.supportedChainTypesAsTags.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createVNode(_component_AssetTags, { values: $options.supportedChainTypesAsTags }, null, 8, ["values"])
      ])) : createCommentVNode("", true),
      _cache[16] || (_cache[16] = createTextVNode()),
      _cache[17] || (_cache[17] = createBaseVNode("div", { class: "dashboard-header__spacer" }, null, -1)),
      _cache[18] || (_cache[18] = createTextVNode()),
      !$options.isMobile ? (openBlock(), createBlock(_component_ChartTypeSwitch, { key: 2 })) : createCommentVNode("", true)
    ]),
    _cache[56] || (_cache[56] = createTextVNode()),
    !$options.isMobile ? (openBlock(), createElementBlock("div", _hoisted_10, [
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_MarketPanel, { class: "market-chart-panel" }, {
            default: withCtx(() => [
              createVNode(_component_MarketChartSection, { "is-line-chart-active": $data.isLineChartActive }, null, 8, ["is-line-chart-active"])
            ]),
            _: 1
          }),
          _cache[24] || (_cache[24] = createTextVNode()),
          $data.isMobileEvaluated && $data.itbAsset ? (openBlock(), createElementBlock("div", _hoisted_13, [
            createVNode(_component_MarketPanel, null, {
              title: withCtx(() => _cache[19] || (_cache[19] = [
                createBaseVNode("span", null, "On-chain volume", -1)
              ])),
              default: withCtx(() => [
                _cache[20] || (_cache[20] = createTextVNode()),
                createVNode(_component_OnChainVolumeTeaser, { asset: $data.itbAsset }, null, 8, ["asset"])
              ]),
              _: 1
            }),
            _cache[23] || (_cache[23] = createTextVNode()),
            createVNode(_component_MarketPanel, null, {
              title: withCtx(() => _cache[21] || (_cache[21] = [
                createBaseVNode("span", null, "Telegram sentiment", -1)
              ])),
              default: withCtx(() => [
                _cache[22] || (_cache[22] = createTextVNode()),
                createVNode(_component_TelegramSentimentTeaser, { asset: $data.itbAsset }, null, 8, ["asset"])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          _cache[25] || (_cache[25] = createTextVNode()),
          createVNode(_component_PastPerformanceDisclaimer, { class: "mb16" }),
          _cache[26] || (_cache[26] = createTextVNode()),
          !$data.isVaspWarningActive ? (openBlock(), createBlock(_component_MobileAppBanner, { key: 1 })) : createCommentVNode("", true),
          _cache[27] || (_cache[27] = createTextVNode()),
          !$options.anonymous && ($setup.earnStore.bestAnnualYieldPerAsset[$options.base.code] || $options.isStakingDisclaimerActive) ? (openBlock(), createBlock(_component_MarketEarnBanner, {
            key: 2,
            asset: $options.base.code,
            "staking-disclaimer": $options.isStakingDisclaimerActive
          }, null, 8, ["asset", "staking-disclaimer"])) : createCommentVNode("", true),
          _cache[28] || (_cache[28] = createTextVNode()),
          _ctx.$pageContext.showAboutSection ? (openBlock(), createBlock(_component_MarketsAboutSection, {
            key: 3,
            content: _ctx.$pageContext.aboutSection.content,
            title: _ctx.$pageContext.aboutSection.title,
            date: _ctx.$pageContext.aboutSection.date,
            "asset-name": $options.baseAssetName
          }, null, 8, ["content", "title", "date", "asset-name"])) : createCommentVNode("", true),
          _cache[29] || (_cache[29] = createTextVNode()),
          $options.isLearnCenterEnabled ? (openBlock(), createBlock(_component_LearnCenter, { key: 4 })) : createCommentVNode("", true)
        ]),
        _cache[38] || (_cache[38] = createTextVNode()),
        createBaseVNode("div", _hoisted_14, [
          !$options.anonymous && $options.isSimpleBuyAvailable ? (openBlock(), createElementBlock("div", _hoisted_15, [
            createBaseVNode("span", {
              class: normalizeClass(["order-switch__option", { "order-switch__option--active": !$data.advancedOrders }]),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleAdvancedOrders && $options.toggleAdvancedOrders(...args))
            }, "\n              Buy / Sell\n            ", 2),
            _cache[30] || (_cache[30] = createTextVNode()),
            createBaseVNode("span", {
              class: normalizeClass(["order-switch__option", { "order-switch__option--active": $data.advancedOrders }]),
              onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleAdvancedOrders && $options.toggleAdvancedOrders(...args))
            }, "\n              Advanced orders\n            ", 2)
          ])) : createCommentVNode("", true),
          _cache[34] || (_cache[34] = createTextVNode()),
          _ctx.$has("trade_orders_create") ? (openBlock(), createBlock(_component_MarketPanel, {
            key: 1,
            ref: "tabs",
            "underlined-header": true,
            "no-title": true
          }, {
            tabs: withCtx(() => [
              createBaseVNode("a", {
                "data-test": "buyOrder",
                "test-id": "buy-order",
                class: normalizeClass(["panel-tab", {
                  "panel-tab--active-buy": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.BUY,
                  "panel-tab--active": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.BUY
                }]),
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.setOrderSide($data.ordersConstants.ORDER_SIDE.BUY), ["prevent"]))
              }, "\n                Buy\n              ", 2),
              _cache[31] || (_cache[31] = createTextVNode()),
              createBaseVNode("a", {
                "data-test": "sellOrder",
                "test-id": "sell-order",
                class: normalizeClass(["panel-tab", {
                  "panel-tab--active-sell": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.SELL,
                  "panel-tab--active": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.SELL
                }]),
                onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $options.setOrderSide($data.ordersConstants.ORDER_SIDE.SELL), ["prevent"]))
              }, "\n                Sell\n              ", 2),
              _cache[32] || (_cache[32] = createTextVNode()),
              createBaseVNode("div", _hoisted_16, null, 512)
            ]),
            default: withCtx(() => [
              _cache[33] || (_cache[33] = createTextVNode()),
              $options.isSimpleBuyAvailable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                $data.advancedOrders ? (openBlock(), createBlock(_component_CreateOrder, { key: 0 })) : (openBlock(), createBlock(_component_SimpleOrder, {
                  key: 1,
                  onSetAdvancedOrder: $options.toggleAdvancedOrders,
                  onUnavailablePair: $options.setSimpleOrderMarketUnavailable
                }, null, 8, ["onSetAdvancedOrder", "onUnavailablePair"]))
              ], 64)) : (openBlock(), createBlock(_component_CreateOrder, { key: 1 }))
            ]),
            _: 1
          }, 512)) : createCommentVNode("", true),
          _cache[35] || (_cache[35] = createTextVNode()),
          $options.anonymous ? (openBlock(), createBlock(_component_MarketPanel, { key: 2 }, {
            default: withCtx(() => [
              createVNode(_component_UserAnonymous)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          _cache[36] || (_cache[36] = createTextVNode()),
          $options.isSimpleBuyAvailable && $data.availableSimpleOrderMarket ? (openBlock(), createBlock(_component_RecurringTradePanel, {
            key: 3,
            "is-buy-order": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.BUY
          }, null, 8, ["is-buy-order"])) : createCommentVNode("", true),
          _cache[37] || (_cache[37] = createTextVNode()),
          !$options.anonymous && _ctx.$has("trade_orders_read") && !$setup.subAccountStore.doesActiveAccountSupportDerivatives ? (openBlock(), createBlock(_component_OpenOrders, {
            key: 4,
            "selected-account": $options.activeSubAccount,
            "force-mobile-layout": "",
            "hide-if-no-open-orders": "",
            "pagination-mode": "show"
          }, null, 8, ["selected-account"])) : createCommentVNode("", true)
        ])
      ])
    ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
      !$options.anonymous && $options.isSimpleBuyAvailable ? (openBlock(), createElementBlock("div", _hoisted_18, [
        createBaseVNode("span", {
          class: normalizeClass(["order-switch__option", { "order-switch__option--active": !$data.advancedOrders }]),
          onClick: _cache[4] || (_cache[4] = (...args) => $options.toggleAdvancedOrders && $options.toggleAdvancedOrders(...args))
        }, "\n          Buy / Sell\n        ", 2),
        _cache[39] || (_cache[39] = createTextVNode()),
        createBaseVNode("span", {
          class: normalizeClass(["order-switch__option", { "order-switch__option--active": $data.advancedOrders }]),
          onClick: _cache[5] || (_cache[5] = (...args) => $options.toggleAdvancedOrders && $options.toggleAdvancedOrders(...args))
        }, "\n          Advanced orders\n        ", 2)
      ])) : createCommentVNode("", true),
      _cache[47] || (_cache[47] = createTextVNode()),
      _ctx.$has("trade_orders_create") || $options.anonymous ? (openBlock(), createBlock(_component_MarketPanel, {
        key: 1,
        ref: "tabs",
        "underlined-header": true,
        "no-title": true
      }, {
        tabs: withCtx(() => [
          createBaseVNode("a", {
            class: normalizeClass(["panel-tab", { "panel-tab--active": $data.overview }]),
            onClick: _cache[6] || (_cache[6] = (...args) => $options.activateOverviewTab && $options.activateOverviewTab(...args))
          }, "Overview", 2),
          _cache[40] || (_cache[40] = createTextVNode()),
          createBaseVNode("a", {
            class: normalizeClass(["panel-tab", {
              "panel-tab--active-buy": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.BUY && $data.trade,
              "panel-tab--active": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.BUY && $data.trade
            }]),
            onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $options.setOrderSide($data.ordersConstants.ORDER_SIDE.BUY), ["prevent"]))
          }, "\n            Buy\n          ", 2),
          _cache[41] || (_cache[41] = createTextVNode()),
          createBaseVNode("a", {
            class: normalizeClass(["panel-tab", {
              "panel-tab--active-sell": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.SELL && $data.trade,
              "panel-tab--active": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.SELL && $data.trade
            }]),
            onClick: _cache[8] || (_cache[8] = withModifiers(($event) => $options.setOrderSide($data.ordersConstants.ORDER_SIDE.SELL), ["prevent"]))
          }, "\n            Sell\n          ", 2),
          _cache[42] || (_cache[42] = createTextVNode()),
          createBaseVNode("div", _hoisted_19, null, 512)
        ]),
        default: withCtx(() => [
          _cache[44] || (_cache[44] = createTextVNode()),
          $data.overview ? (openBlock(), createBlock(_component_MarketChartSection, { key: 0 })) : createCommentVNode("", true),
          _cache[45] || (_cache[45] = createTextVNode()),
          $data.trade ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            $options.anonymous ? (openBlock(), createBlock(_component_UserAnonymous, { key: 0 })) : $options.isSimpleBuyAvailable ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              $data.advancedOrders ? (openBlock(), createBlock(_component_CreateOrder, { key: 0 })) : (openBlock(), createBlock(_component_SimpleOrder, {
                key: 1,
                onSetAdvancedOrder: $options.toggleAdvancedOrders
              }, null, 8, ["onSetAdvancedOrder"]))
            ], 64)) : (openBlock(), createBlock(_component_CreateOrder, { key: 2 }))
          ], 64)) : createCommentVNode("", true),
          _cache[46] || (_cache[46] = createTextVNode()),
          $data.orders && _ctx.$has("trade_orders_read") ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            !$options.anonymous && _ctx.$has("trade_orders_read") ? (openBlock(), createBlock(_component_OpenOrders, {
              key: 0,
              class: "open-orders--tabbed-layout",
              "selected-account": $options.activeSubAccount,
              "pagination-mode": "hide"
            }, {
              "empty-placeholder": withCtx(() => _cache[43] || (_cache[43] = [
                createBaseVNode("span", { class: "text--small text-color--info" }, " You have no open orders.", -1)
              ])),
              _: 1
            }, 8, ["selected-account"])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 512)) : createCommentVNode("", true),
      _cache[48] || (_cache[48] = createTextVNode()),
      $options.isSimpleBuyAvailable && $data.availableSimpleOrderMarket ? (openBlock(), createBlock(_component_RecurringTradePanel, {
        key: 2,
        "is-buy-order": $setup.basicMarketsOrderFormStore.activeOrderSide === $data.ordersConstants.ORDER_SIDE.BUY
      }, null, 8, ["is-buy-order"])) : createCommentVNode("", true),
      _cache[49] || (_cache[49] = createTextVNode()),
      $data.overview ? (openBlock(), createBlock(_component_PastPerformanceDisclaimer, {
        key: 3,
        class: "mb16"
      })) : createCommentVNode("", true),
      _cache[50] || (_cache[50] = createTextVNode()),
      createVNode(_component_MobileAppBanner),
      _cache[51] || (_cache[51] = createTextVNode()),
      !$options.anonymous && ($setup.earnStore.bestAnnualYieldPerAsset[$options.base.code] || $options.isStakingDisclaimerActive) ? (openBlock(), createBlock(_component_MarketEarnBanner, {
        key: 4,
        asset: $options.base.code,
        "staking-disclaimer": $options.isStakingDisclaimerActive
      }, null, 8, ["asset", "staking-disclaimer"])) : createCommentVNode("", true),
      _cache[52] || (_cache[52] = createTextVNode()),
      _ctx.$pageContext.showAboutSection ? (openBlock(), createBlock(_component_MarketsAboutSection, {
        key: 5,
        content: _ctx.$pageContext.aboutSection.content,
        title: _ctx.$pageContext.aboutSection.title,
        date: _ctx.$pageContext.aboutSection.date,
        "asset-name": $options.baseAssetName
      }, null, 8, ["content", "title", "date", "asset-name"])) : createCommentVNode("", true),
      _cache[53] || (_cache[53] = createTextVNode()),
      $options.isLearnCenterEnabled ? (openBlock(), createBlock(_component_LearnCenter, { key: 6 })) : createCommentVNode("", true)
    ])),
    _cache[57] || (_cache[57] = createTextVNode()),
    createVNode(_component_portal, { to: "help_text__holder" }, {
      default: withCtx(() => _cache[54] || (_cache[54] = [
        createBaseVNode("div", null, [
          createBaseVNode("h3", null, "Instant Order"),
          createTextVNode(),
          createBaseVNode("div", { class: "divider divider--compact divider--small-margin divider--light" }),
          createTextVNode(),
          createBaseVNode("p", null, "\n          An instant order is an order type, which executes immediately under the current price on the market and is\n          therefore simple to use. We recommend instant orders for users who would like to make a trade immediately. In case\n          your amount exceeds the currently available amount of the desired cryptocurrency at that price, our trading engine\n          will reposition your order to the current order book offer every second.\n        "),
          createTextVNode(),
          createBaseVNode("h3", null, "Market Order"),
          createTextVNode(),
          createBaseVNode("div", { class: "divider divider--compact divider--small-margin divider--light" }),
          createTextVNode(),
          createBaseVNode("p", null, "\n          A market order is an order type that enables you to buy or sell at the best available market price. Using this\n          order type, you are able to specify the amount of the cryptocurrency you wish to buy or sell. Sometimes, it is\n          possible to open an order at a better price in comparison to instant order.\n        "),
          createTextVNode(),
          createBaseVNode("h3", null, "Limit Order"),
          createTextVNode(),
          createBaseVNode("div", { class: "divider divider--compact divider--small-margin divider--light" }),
          createTextVNode(),
          createBaseVNode("p", null, "\n          Limit order gives you the power to set a specific price at which you would like to buy or sell the desired amount\n          of cryptocurrency.\n        "),
          createTextVNode(),
          createBaseVNode("p", null, [
            createTextVNode("\n          Example: "),
            createBaseVNode("br"),
            createTextVNode("If the current market price is 10000 USD for 1 BTC and you want to buy at 9000 USD for 1 BTC, simply\n          place a limit buy order at the preferred price. When the market reaches your set price, an instant order is\n          triggered and your limit order gets executed. If the market price is already lower than your set price, the\n          condition for your limit buy order is already met and your order will be executed immediately, at an even lower\n          price than specified.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, [
            createBaseVNode("span", { class: "text--medium" }, "Buy/Sell if executed price"),
            createBaseVNode("br"),
            createTextVNode("\n          When placing a limit order you are able to set a consecutive buy/sell order at a price at which you wish to\n          buy/sell after the first order is filled. This feature is available for Limit Orders only.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, [
            createTextVNode("\n          Example:"),
            createBaseVNode("br"),
            createTextVNode(" You can place a buy limit order for 1 BTC at a price of $500. Corresponding with that order you have\n          an option to place a sell order at $510. When or if your buy order gets filled at $500, a sell order will be\n          placed in the order book at $510.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("h3", null, "Stop Order"),
          createTextVNode(),
          createBaseVNode("div", { class: "divider divider--compact divider--small-margin divider--light" }),
          createTextVNode(),
          createBaseVNode("p", null, "\n          Stop orders are usually used to limit potential losses in case the price suddenly rises or drops.\n          When you place a stop order you set an entry/exit price point. Once the price surpasses the predefined entry/exit\n          point, the stop order becomes an instant order and gets executed.\n        "),
          createTextVNode(),
          createBaseVNode("p", null, [
            createTextVNode("\n          Example of stop sell order: "),
            createBaseVNode("br"),
            createTextVNode("If the current market price is 10000 USD for 1 BTC and you wish to prevent\n          potential losses, you may set a stop sell at 9000 USD for 1 BTC. If the price drops to 9000 USD for 1 BTC, your\n          stop sell order will be executed and your BTC will be sold.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, [
            createTextVNode("\n          Example of stop buy order: "),
            createBaseVNode("br"),
            createTextVNode("The current market price is 10000 USD for 1 BTC. The trader in a short position\n          might want to set up a stop buy order for BTC at 11000 USD for 1 BTC. The price then continues to rise to 12000\n          USD for 1 BTC, so the trade has made a profit.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, [
            createBaseVNode("span", { class: "text--medium" }, "Trailing stop"),
            createBaseVNode("br"),
            createTextVNode("\n          Trailing stop order is a more flexible variation of the normal stop order."),
            createBaseVNode("br"),
            createTextVNode("\n          The trailing stop follows the market movements and adjusts the trigger price of the stop order accordingly."),
            createBaseVNode("br"),
            createTextVNode("\n          Trailing stop orders are used for securing your profit and increasing the value of the order, following the\n          profitable direction.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, [
            createTextVNode("\n          Example: "),
            createBaseVNode("br"),
            createTextVNode("If the current price is 10000 USD for 1 BTC and you want to sell at 9000 USD for 1 BTC, but think the\n          market will rise before it falls, you may set up a trailing stop. This means that the spread will be 1000 USD (the\n          difference between current price and stop sell price). Therefore, if the price rises to 11000 USD for 1 BTC, your\n          order will be repositioned to 10000 USD for 1 BTC, maintaining the spread. If the price then falls, your stop sell\n          order will be executed at 10000 USD for 1 BTC.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, [
            createTextVNode("\n          SLIPPAGE NOTICE"),
            createBaseVNode("br"),
            createTextVNode("\n          Please note that stop sell orders work in a way that when the price drops and the order is triggered, an instant\n          sell order is placed on the market. However, do keep in mind that stop orders are not a 100% guarantee of getting\n          the desired entry/exit points.\n        ")
          ]),
          createTextVNode(),
          createBaseVNode("p", null, "\n          Slippage may occur when the volatility of the market makes an order at a specific price impossible to execute and\n          close. In such an instance, the stop order will execute the trade at the next best price.\n        ")
        ], -1)
      ])),
      _: 1
    })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99f58f56"]]);
export {
  index as default
};
