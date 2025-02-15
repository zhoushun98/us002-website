import { a9 as addStoreHooks, aa as defineStore, bN as storeToRefs, q as useUserStateStore, az as useSubAccountStore, aX as usePollingStore, bO as useUserPermissions, ab as useErrorTracking, ac as shallowRef, r as ref, l as computed, aj as _, bP as timersConstants, bQ as watch, aw as useMarketsStore, bR as useCurrenciesStore, a0 as Decimal, aA as constants, C as CONSTANTS, U as URLService, ag as numberFormatter, aB as marketConstants, x as formatDate, ay as constants$1, P as PAGE_CONTEXT, aC as startOfTomorrowUTC } from "./BEpVD-aq.js";
import { o as ordersApiV2 } from "./fJkJxxwc.js";
const storeName = "ordersStore";
const useOrdersStore = addStoreHooks(
  defineStore("ordersStore", () => {
    const { isLoggedIn } = storeToRefs(useUserStateStore({ caller: storeName }));
    const { activeSubAccountId } = storeToRefs(useSubAccountStore({ caller: storeName }));
    const pollingStore = usePollingStore({ caller: storeName });
    const $has = useUserPermissions();
    const $errorTracking = useErrorTracking();
    let stopPollingFn = () => {
    };
    const openOrders = shallowRef([]);
    const initialized = ref(false);
    const isLoading = ref(false);
    const singleOrdersBeingFetched = ref({});
    const orderCache = shallowRef({});
    const tradeAccountOverride = ref(null);
    const tradeAccountId = computed(() => {
      if (tradeAccountOverride.value !== null) {
        return tradeAccountOverride.value;
      }
      return activeSubAccountId.value;
    });
    const fetchOpenOrders = _.throttle(async () => {
      if (isLoading.value || !isLoggedIn.value || !$has("trade_orders_read")) {
        return;
      }
      isLoading.value = true;
      try {
        openOrders.value = await ordersApiV2.list(tradeAccountId.value, null);
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
      isLoading.value = false;
    }, timersConstants.THROTTLE_ORDERS);
    function createOrder(order) {
      return ordersApiV2.create(order);
    }
    async function fetchSingleOrder(orderId) {
      if (singleOrdersBeingFetched.value[orderId]) {
        return singleOrdersBeingFetched.value[orderId];
      }
      try {
        const promise = await ordersApiV2.get(orderId);
        singleOrdersBeingFetched.value = {
          ...singleOrdersBeingFetched.value,
          [orderId]: promise
        };
        const order = await promise;
        orderCache.value = {
          ...orderCache.value,
          [orderId]: order
        };
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
        return;
      }
      singleOrdersBeingFetched.value = {
        ...delete singleOrdersBeingFetched.value[orderId] && singleOrdersBeingFetched.value
      };
    }
    function singleOrder(orderId) {
      return openOrders.value.find(({ id }) => orderId === id);
    }
    function startPolling(customPollingTime = null) {
      if (!isLoggedIn.value || !$has("trade_orders_read")) {
        return;
      }
      const { stop } = pollingStore.startPolling({
        id: timersConstants.POLLING_ORDERS.ID,
        interval: customPollingTime || timersConstants.POLLING_ORDERS.TIME,
        fn: fetchOpenOrders
      });
      stopPollingFn = stop;
    }
    function stopPolling() {
      stopPollingFn();
      stopPollingFn = () => {
      };
    }
    async function cancel(orderId, noToastOnError = false) {
      const oldOpenOrders = [...openOrders.value];
      try {
        openOrders.value = openOrders.value.filter(({ id }) => id !== orderId);
        return await ordersApiV2.delete(orderId, noToastOnError);
      } catch (e) {
        openOrders.value = oldOpenOrders;
        return Promise.reject(e);
      }
    }
    async function cancelAll(account, noToastOnError = false) {
      const oldOpenOrders = [...openOrders.value];
      try {
        openOrders.value = [];
        return await ordersApiV2.cancelAll(account, noToastOnError);
      } catch (e) {
        openOrders.value = oldOpenOrders;
        return Promise.reject(e);
      }
    }
    async function cancelAllForMarket(account, market, noToastOnError = false) {
      return await ordersApiV2.cancelAllForMarket(account, market, noToastOnError);
    }
    function setTradeAccountOverride(tradeAccountId2) {
      tradeAccountOverride.value = tradeAccountId2;
    }
    async function _init() {
      if (initialized.value || !isLoggedIn.value || !$has("trade_orders_read")) {
        return;
      }
      await fetchOpenOrders();
      startPolling();
      initialized.value = true;
      return () => {
        stopPolling();
      };
    }
    watch(isLoggedIn, (loggedIn, wasLoggedIn) => {
      if (wasLoggedIn) {
        openOrders.value = [];
        singleOrdersBeingFetched.value = {};
        orderCache.value = {};
        stopPolling();
      }
    });
    watch(activeSubAccountId, (newId, oldId) => {
      if (newId !== oldId && tradeAccountOverride.value === null) {
        openOrders.value = [];
        singleOrdersBeingFetched.value = {};
        orderCache.value = {};
        fetchOpenOrders();
      }
    });
    watch(tradeAccountOverride, () => {
      openOrders.value = [];
      singleOrdersBeingFetched.value = {};
      orderCache.value = {};
      fetchOpenOrders();
    });
    return {
      openOrders,
      initialized,
      orderCache,
      _init,
      singleOrder,
      cancel,
      cancelAll,
      cancelAllForMarket,
      fetchOpenOrders,
      fetchSingleOrder,
      createOrder,
      startPolling,
      setTradeAccountOverride
    };
  })
);
function useOrderFormatter() {
  const marketsStore = useMarketsStore();
  const currenciesStore = useCurrenciesStore();
  const tooltipTimeFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  function formatOrder(order) {
    var _a, _b, _c, _d;
    const market = marketsStore.getMarket(order.market);
    const decimals = market.decimals;
    const valueDecimals = ((_a = currenciesStore.getCurrency(market.counter)) == null ? void 0 : _a.decimals) ?? 8;
    const amountFilled = order.amountFilled !== null ? order.amountFilled : new Decimal(0);
    const valueFilled = order.valueFilled !== null ? order.valueFilled : new Decimal(0);
    const filledRatio = amountFilled.div(order.amountAtCreate);
    let amountDecimals = decimals.base;
    let amountCurrency = market.base;
    if (order.type === constants.ORDER_TYPE.STOP_MARKET && order.side === constants.ORDER_SIDE.BUY) {
      amountDecimals = decimals.counter;
      amountCurrency = market.counter;
    }
    const amountRemaining = ((_b = order.amountAtCreate) == null ? void 0 : _b.sub(amountFilled)) ?? new Decimal(0);
    const marketLink = CONSTANTS.isProLayout ? URLService.getPageUrl("proTrade", { market: market.key }) : URLService.getPageUrl("product_details", { base: market.base, counter: market.counter });
    const formattedOrder = {
      id: order.id,
      key: order.id,
      amountCurrency,
      price: order.price !== null && ((_c = order.price) == null ? void 0 : _c.isPositive()) ? numberFormatter.formatZeroPaddedWithoutRounding({
        value: order.price,
        minimumDecimals: decimals.counter
      }) : null,
      priceAsDecimal: order.price,
      priceToFillForm: order.priceToFillForm,
      marketKey: order.market,
      marketType: market.type,
      isPerpetual: market.type === marketConstants.MARKET_TYPES.PERPETUAL,
      side: order.side,
      type: order.type,
      createdAt: order.createdAt,
      typeDisplay: ((_d = constants.ORDER_TYPE_CONFIG[order.type]) == null ? void 0 : _d.display) ?? order.type,
      tooltipDatetime: tooltipTimeFormatter.format(order.createdAt),
      date: formatDate(order.createdAt, constants$1.TRADEVIEW_DATE),
      time: formatDate(order.createdAt, constants$1.TRADEVIEW_TIME),
      // NOTE: For legacy stop orders only.
      trailingBy: null,
      base: market.base,
      counter: market.counter,
      marketName: market.name,
      marketLink,
      tif: order.timeInForce,
      trigger: order.trigger,
      triggerDisplay: order.trigger ? constants.TRIGGER_PRICE_TYPE_DISPLAY[order.trigger] : "",
      stopPrice: order.stopPrice !== null ? numberFormatter.formatZeroPaddedWithoutRounding({
        value: order.stopPrice,
        minimumDecimals: decimals.counter
      }) : null,
      formattedAmountAtCreate: numberFormatter.decimal({
        value: order.amountAtCreate,
        decimals: amountDecimals
      }),
      amountRemaining,
      formattedAmountRemaining: numberFormatter.decimal({
        value: amountRemaining,
        decimals: amountDecimals
      }),
      amountFilled,
      formattedAmountFilled: amountFilled.isZero() ? "0" : numberFormatter.decimal({
        value: amountFilled,
        decimals: amountDecimals
      }),
      formattedEstimatedValueAtCreate: numberFormatter.decimal({
        value: order.valueAtCreate,
        decimals: valueDecimals
      }),
      estimatedValueFilled: valueFilled,
      formattedEstimatedValueFilled: valueFilled.isZero() ? "0" : numberFormatter.decimal({
        value: valueFilled,
        decimals: valueDecimals
      }),
      filledProgress: (filledRatio == null ? void 0 : filledRatio.mul(100).toFixed(2, Decimal.ROUND_UP)) ?? null,
      orderReceiptLink: PAGE_CONTEXT.enableReceiptsInTradeview ? URLService.getPageUrl("orderReceipt", {
        order_id: order.id
      }) : "",
      trailingDelta: order.trailingDelta,
      activationPrice: order.activationPrice !== null ? numberFormatter.formatZeroPaddedWithoutRounding({
        value: order.activationPrice,
        minimumDecimals: decimals.counter
      }) : null
    };
    if (market.type === marketConstants.MARKET_TYPES.PERPETUAL) {
      formattedOrder.marginMode = constants.MARGIN_MODE_DISPLAY[order.marginMode];
      formattedOrder.leverage = numberFormatter.decimal({
        value: order.leverage,
        decimals: 2
      });
      formattedOrder.reduceOnly = order.reduceOnly;
    }
    formattedOrder.status = order.status;
    formattedOrder.statusDisplay = constants.ORDER_STATUS_DISPLAY[order.status] ?? "Open";
    if (order.timeInForce === constants.TIF.DAILY) {
      order.expiresAt = startOfTomorrowUTC();
    }
    if (order.expiresAt) {
      const dailyExpiry = startOfTomorrowUTC();
      let dailyExpiryNote = "";
      let expireTime = order.expiresAt;
      if (order.expiresAt > dailyExpiry && order.timeInForce === constants.TIF.GTD) {
        expireTime = dailyExpiry;
        dailyExpiryNote = " Note that this order expires due to GTD orders being canceled at 00:00 UTC each day.";
      }
      formattedOrder.expireTimeTitle = `Order expires on ${expireTime}.${dailyExpiryNote}`;
      formattedOrder.expireTime = formatDate(expireTime, constants$1.TRADEVIEW_SHORT_DATE_WITH_AT);
    }
    if (order.trailingBy) {
      formattedOrder.trailingBy = numberFormatter.formatZeroPaddedWithoutRounding({
        value: order.trailingBy,
        minimumDecimals: decimals.counter
      });
    }
    if (order.osoPrice) {
      formattedOrder.osoPrice = numberFormatter.formatZeroPaddedWithoutRounding({
        value: order.osoPrice,
        minimumDecimals: decimals.counter
      });
      formattedOrder.osoFinal = order.osoPrice.sub(order.price).mul(order.amountAtCreate).abs();
      formattedOrder.osoPercent = numberFormatter.decimal({
        value: formattedOrder.osoFinal.div(order.amountAtCreate.mul(order.price)).mul(100),
        decimals: 2
      });
      formattedOrder.osoValue = numberFormatter.decimal({
        value: order.osoPrice.mul(order.amountAtCreate),
        decimals: decimals.counter
      });
    }
    return formattedOrder;
  }
  return { formatOrder };
}
export {
  useOrderFormatter as a,
  useOrdersStore as u
};
