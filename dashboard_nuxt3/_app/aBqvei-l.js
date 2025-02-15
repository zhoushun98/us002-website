import { ax as toDecimal, al as getDate, U as URLService, a as axiosInstance, a9 as addStoreHooks, aa as defineStore, ab as useErrorTracking, aw as useMarketsStore, ac as shallowRef, l as computed, as as CURRENCIES, aA as constants, ag as numberFormatter, aj as _, bP as timersConstants, _ as _export_sfc, A as AppIcon, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, t as toDisplayString, g as createTextVNode, c as createBlock, h as createCommentVNode, J as normalizeClass, V as AppTooltip, w as withCtx, F as Fragment } from "./BEpVD-aq.js";
function parseOpenPositions(positions) {
  return positions.map((position) => {
    const amount = toDecimal(position.amount);
    return {
      ...position,
      amount,
      value: toDecimal(position.currentValue),
      // TODO: Remove conditional once backend rolled out
      strikePrice: position.strikePrice ? toDecimal(position.strikePrice) : toDecimal(position.entryPrice),
      avgEntryPrice: toDecimal(position.entryPrice),
      collateralCurrency: position.collateralCurrency,
      markPrice: toDecimal(position.markPrice),
      estimatedLiquidationPrice: toDecimal(position.estimatedLiquidationPrice),
      rsPnl: toDecimal(position.realizedPnl),
      usPnl: toDecimal(position.unrealizedPnl),
      settledPnl: toDecimal(position.settledPnl),
      pnl: toDecimal(position.pnl),
      inSettlementPnl: toDecimal(position.inSettlementPnl),
      pnlPercentage: toDecimal(position.pnlPercentage),
      collateral: toDecimal(position.collateral),
      initialMargin: toDecimal(position.initialMargin),
      initialMarginRatio: position.initialMarginRatio !== null ? toDecimal(position.initialMarginRatio) : null,
      maintenanceMargin: toDecimal(position.maintenanceMargin),
      maintenanceMarginRatio: position.maintenanceMarginRatio !== null ? toDecimal(position.maintenanceMarginRatio) : null,
      equity: toDecimal(position.equity),
      leverage: toDecimal(position.leverage),
      impliedLeverage: position.impliedLeverage !== null ? toDecimal(position.impliedLeverage) : null,
      isLong: amount.isPositive()
    };
  });
}
function parsePositionHistoryEntries(entries) {
  return entries.map((position) => ({
    ...position,
    id: `${position.id}`,
    leverage: toDecimal(position.leverage),
    amountDelta: toDecimal(position.amountDelta),
    avgEntryPrice: toDecimal(position.entryPrice),
    avgClosePrice: toDecimal(position.closePrice),
    closingFee: toDecimal(position.closingFee),
    pnl: toDecimal(position.pnl),
    rsPnl: toDecimal(position.realizedPnl),
    settledPnl: toDecimal(position.settledPnl),
    entryTime: getDate(position.openAt, true),
    closeTime: position.closeAt ? getDate(position.closeAt, true) : null
  }));
}
const positionsApi = {
  /**
   * @param {string} positionId
   * @param {boolean} [noToastOnError]
   * @returns {Promise<void>}
   */
  close(positionId, noToastOnError = false) {
    const url = URLService.buildUrl("closePositionActionResource", { position_id: positionId });
    return axiosInstance.post(url, {}, { noToastOnError });
  },
  /**
   * @param {'main'|number} account
   * @param {boolean} [noToastOnError]
   * @returns {Promise<void>}
   */
  closeAllPositions(account, noToastOnError = false) {
    const url = URLService.buildUrl("closeAllAccountPositionsActionResource", { unique_id: account });
    return axiosInstance.post(url, {}, { noToastOnError });
  },
  /**
   * @param {'main'|number} account
   * @returns {Promise<module:positions.OpenPosition[]>}
   */
  listOpenPositions(account) {
    const url = URLService.buildUrl("openPositionsListResource", { unique_id: account });
    return axiosInstance.get(url).then((response) => parseOpenPositions(response.data.data));
  },
  /**
   * @param {'main'|number} account
   * @param {number} page
   * @param {number} perPage
   * @param {string} [market] - btcusd-perp
   * @returns {Promise<module:positions.PositionHistory[]>}
   */
  listPositionHistory(account, page = 1, perPage = 20, market = "") {
    const params = { page, perPage };
    if (market) {
      params.market = market;
    }
    const url = URLService.buildUrl("positionHistoryListResource", { unique_id: account }, true, params);
    return axiosInstance.get(url).then((response) => parsePositionHistoryEntries(response.data.data));
  }
};
const storeName = "openPositionsStore";
const useOpenPositionsStore = addStoreHooks(
  defineStore(storeName, () => {
    const $errorTracking = useErrorTracking();
    const marketsStore = useMarketsStore({ caller: storeName });
    const openPositions = shallowRef([]);
    const formattedOpenPositions = computed(() => {
      const unsorted = openPositions.value.map((position) => {
        var _a, _b;
        const market = marketsStore.getMarket(position.market);
        const settlementCurrency = CURRENCIES[position.settlementCurrency];
        const collateralCurrency = CURRENCIES[position.collateralCurrency];
        const positionId = `${position.id}`;
        return {
          id: positionId,
          maskedId: positionId.length <= 9 ? positionId : `${positionId.substr(0, 3)}...${positionId.substr(-3, 3)}`,
          key: `${position.market}_${position.marginMode}`,
          market: position.market,
          marginMode: position.marginMode,
          marginModeDisplay: constants.MARGIN_MODE_DISPLAY[position.marginMode],
          marketName: market.name,
          marketLink: URLService.getPageUrl("proTrade", { market: market.key }),
          marketTypeDisplay: market.type.toLowerCase(),
          status: position.status,
          settlementCurrency: settlementCurrency.code,
          collateralCurrency: collateralCurrency.code,
          counterCurrency: market.counter,
          baseCurrency: market.base,
          isLong: position.amount.isPositive(),
          isPnlPositive: position.pnl.isPositive(),
          canAdjustCollateral: position.marginMode === constants.MARGIN_MODE.ISOLATED && position.status === constants.POSITION_STATUS.OPEN,
          canClose: position.status === constants.POSITION_STATUS.OPEN || position.status === constants.POSITION_STATUS.WAITING_SETTLEMENT,
          leverage: numberFormatter.decimal({
            value: position.leverage,
            decimals: 2
          }),
          impliedLeverage: position.impliedLeverage === null ? null : numberFormatter.decimal({
            value: position.impliedLeverage,
            decimals: 2
          }),
          amount: numberFormatter.decimal({
            value: position.amount,
            decimals: market.decimals.base
          }),
          amountAsDecimal: position.amount,
          value: numberFormatter.decimal({
            value: position.value,
            decimals: market.decimals.counter,
            currencyCode: market.counter
          }),
          valueAsDecimal: position.value,
          strikePrice: numberFormatter.decimal({
            value: position.strikePrice,
            decimals: market.decimals.counter
          }),
          avgEntryPrice: numberFormatter.decimal({
            value: position.avgEntryPrice,
            decimals: market.decimals.counter
          }),
          avgEntryPriceAsDecimal: position.avgEntryPrice,
          markPrice: !position.markPrice ? "/" : numberFormatter.decimal({
            value: position.markPrice,
            decimals: market.decimals.counter
          }),
          markPriceAsDecimal: position.markPrice,
          estimatedLiquidationPrice: !position.estimatedLiquidationPrice || position.estimatedLiquidationPrice.isZero() ? "/" : numberFormatter.decimal({
            value: position.estimatedLiquidationPrice,
            decimals: market.decimals.counter
          }),
          rsPnl: numberFormatter.decimal({
            value: position.rsPnl,
            decimals: settlementCurrency.decimals
          }),
          usPnl: numberFormatter.decimal({
            value: position.usPnl,
            decimals: settlementCurrency.decimals
          }),
          pnl: numberFormatter.decimal({
            value: position.pnl,
            decimals: settlementCurrency.decimals
          }),
          pnlAsDecimal: position.pnl,
          pnlPercentage: numberFormatter.percentageChange(position.pnlPercentage, false, true),
          settledPnl: numberFormatter.decimal({
            value: position.settledPnl,
            decimals: settlementCurrency.decimals
          }),
          inSettlementPnl: numberFormatter.decimal({
            value: position.inSettlementPnl,
            decimals: settlementCurrency.decimals
          }),
          imr: position.initialMarginRatio === null ? null : numberFormatter.decimal({
            value: position.initialMarginRatio.mul(100),
            decimals: 2
          }),
          initialMarginRatioAsDecimal: ((_a = position.initialMarginRatio) == null ? void 0 : _a.mul(100)) ?? null,
          mmr: position.maintenanceMarginRatio === null ? null : numberFormatter.decimal({
            value: position.maintenanceMarginRatio.mul(100),
            decimals: 2
          }),
          maintenanceMarginRatioAsDecimal: ((_b = position.maintenanceMarginRatio) == null ? void 0 : _b.mul(100)) ?? null,
          im: !position.initialMargin ? "/" : numberFormatter.decimal({
            value: position.initialMargin,
            decimals: collateralCurrency.decimals
          }),
          mm: !position.maintenanceMargin ? "/" : numberFormatter.decimal({
            value: position.maintenanceMargin,
            decimals: collateralCurrency.decimals
          }),
          equity: numberFormatter.decimal({
            value: position.equity,
            decimals: settlementCurrency.decimals
          }),
          collateral: !position.collateral ? null : numberFormatter.decimal({
            value: position.collateral,
            decimals: collateralCurrency.decimals
          })
        };
      });
      return _.orderBy(unsorted, ["marketName", "marginMode"], ["asc", "asc"]);
    });
    const fetchOpenPositions = _.throttle(async (subAccountId) => {
      try {
        openPositions.value = await positionsApi.listOpenPositions(subAccountId);
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
      return openPositions.value;
    }, timersConstants.THROTTLE_OPEN_POSITIONS);
    function clearOpenPositions() {
      openPositions.value = [];
    }
    return {
      openPositions,
      formattedOpenPositions,
      fetchOpenPositions,
      clearOpenPositions
    };
  })
);
const _sfc_main$1 = {
  name: "MarginSettingTag",
  components: { AppIcon },
  props: {
    text: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: void 0
    }
  },
  emits: ["edit"],
  methods: {
    onClick() {
      if (this.editable) {
        this.$emit("edit");
      }
    }
  }
};
const _hoisted_1$1 = ["title"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["tag", { "tag--editable": $props.editable }]),
    title: $props.title,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
  }, [
    createBaseVNode("span", null, toDisplayString($props.text), 1),
    _cache[1] || (_cache[1] = createTextVNode()),
    $props.editable ? (openBlock(), createBlock(_component_AppIcon, {
      key: 0,
      class: "tag__edit-icon",
      icon: "monochrome/edit-filled.svg",
      "test-id": "open-position__adjust-leverage",
      size: 10
    })) : createCommentVNode("", true)
  ], 10, _hoisted_1$1);
}
const MarginSettingTag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4e713683"]]);
const _sfc_main = {
  name: "OpenOrdersTriggerField",
  components: { AppTooltip },
  props: {
    /** @type {module:orders.FormattedOrder} */
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ordersConstants: constants
    };
  },
  computed: {
    isGreaterThanSymbolUsedForTriggerPrice() {
      if ([
        constants.ORDER_TYPE.TAKE_PROFIT,
        constants.ORDER_TYPE.TAKE_PROFIT_LIMIT,
        constants.ORDER_TYPE.TRAILING_TAKE_PROFIT,
        constants.ORDER_TYPE.TRAILING_TAKE_PROFIT_LIMIT
      ].includes(this.order.type)) {
        return this.order.side === constants.ORDER_SIDE.SELL;
      } else {
        return this.order.side === constants.ORDER_SIDE.BUY;
      }
    },
    isLegacyStopOrder() {
      return constants.LEGACY_STOP_ORDER_TYPES.includes(this.order.type);
    },
    isTrailingStopOrder() {
      return constants.TRAILING_TYPES.includes(this.order.type);
    },
    isNonTrailingStopOrder() {
      return constants.TRIGGER_BASED_ORDER_TYPES.includes(this.order.type) && !constants.TRAILING_TYPES.includes(this.order.type);
    }
  }
};
const _hoisted_1 = { class: "tooltip-info-indicator" };
const _hoisted_2 = { class: "tooltip-info-indicator" };
const _hoisted_3 = { class: "tooltip-info-indicator" };
const _hoisted_4 = { class: "tooltip-info-indicator" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppTooltip = resolveComponent("AppTooltip");
  return openBlock(), createElementBlock("div", null, [
    $options.isLegacyStopOrder ? (openBlock(), createBlock(_component_AppTooltip, { key: 0 }, {
      trigger: withCtx(() => [
        createBaseVNode("span", _hoisted_1, [
          createTextVNode("\n          Price " + toDisplayString($options.isGreaterThanSymbolUsedForTriggerPrice ? "≥" : "≤") + " " + toDisplayString($props.order.stopPrice) + " " + toDisplayString($props.order.counter) + " ", 1),
          $props.order.trailingBy ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("small", null, "Trailing by " + toDisplayString($props.order.trailingBy) + " " + toDisplayString($props.order.counter), 1)
          ], 64)) : createCommentVNode("", true)
        ])
      ]),
      default: withCtx(() => [
        createTextVNode("\n      Once triggered places a\n      " + toDisplayString($props.order.type === $data.ordersConstants.ORDER_TYPE.STOP_MARKET ? "market" : "limit") + " " + toDisplayString($props.order.side) + "\n      order" + toDisplayString($props.order.type === $data.ordersConstants.ORDER_TYPE.STOP_LIMIT ? ` at ${$props.order.price} ${$props.order.counter}` : "") + ".\n      ", 1),
        $props.order.trailingBy ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode("\n        Trailing price by " + toDisplayString($props.order.trailingBy) + ".\n      ", 1)
        ], 64)) : createCommentVNode("", true)
      ]),
      _: 1
    })) : $options.isTrailingStopOrder && $props.order.status !== $data.ordersConstants.ORDER_STATUS.OPEN ? (openBlock(), createBlock(_component_AppTooltip, { key: 1 }, {
      trigger: withCtx(() => [
        createBaseVNode("span", _hoisted_2, [
          createTextVNode("\n          Trailing delta: " + toDisplayString($props.order.trailingDelta) + " bps\n          ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
          createTextVNode(toDisplayString($props.order.triggerDisplay) + " " + toDisplayString($options.isGreaterThanSymbolUsedForTriggerPrice ? "≥" : "≤") + " " + toDisplayString($props.order.status === $data.ordersConstants.ORDER_STATUS.INACTIVE ? $props.order.activationPrice : $props.order.stopPrice) + " " + toDisplayString($props.order.counter), 1)
        ])
      ]),
      default: withCtx(() => [
        _cache[2] || (_cache[2] = createTextVNode()),
        $props.order.status === $data.ordersConstants.ORDER_STATUS.INACTIVE ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode("\n        Once triggered the trailing stop order activates and begins trailing the price based on trailing delta.\n      ")
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode("\n        Once triggered places a\n        " + toDisplayString([
            $data.ordersConstants.ORDER_TYPE.TRAILING_STOP_LOSS_LIMIT,
            $data.ordersConstants.ORDER_TYPE.TRAILING_TAKE_PROFIT_LIMIT
          ].includes($props.order.type) ? "limit" : "market") + " " + toDisplayString($props.order.side) + "\n        order" + toDisplayString($props.order.price !== null ? ` at ${$props.order.price} ${$props.order.counter}` : "") + ".\n      ", 1)
        ], 64))
      ]),
      _: 1
    })) : $options.isNonTrailingStopOrder ? (openBlock(), createBlock(_component_AppTooltip, { key: 2 }, {
      trigger: withCtx(() => [
        createBaseVNode("span", _hoisted_3, toDisplayString($props.order.triggerDisplay) + " " + toDisplayString($options.isGreaterThanSymbolUsedForTriggerPrice ? "≥" : "≤") + " " + toDisplayString($props.order.stopPrice) + " " + toDisplayString($props.order.counter), 1)
      ]),
      default: withCtx(() => [
        createTextVNode("\n      Once triggered places a\n      " + toDisplayString([$data.ordersConstants.ORDER_TYPE.STOP_LOSS_LIMIT, $data.ordersConstants.ORDER_TYPE.TAKE_PROFIT_LIMIT].includes($props.order.type) ? "limit" : "market") + " " + toDisplayString($props.order.side) + "\n      order" + toDisplayString($props.order.price !== null ? ` at ${$props.order.price} ${$props.order.counter}` : "") + ".\n    ", 1)
      ]),
      _: 1
    })) : $props.order.osoPrice ? (openBlock(), createBlock(_component_AppTooltip, { key: 3 }, {
      trigger: withCtx(() => [
        createBaseVNode("span", _hoisted_4, "OSO: " + toDisplayString($props.order.osoPrice) + " " + toDisplayString($props.order.counter), 1)
      ]),
      default: withCtx(() => [
        createTextVNode("\n      Each execution places a limit\n      " + toDisplayString($props.order.side === $data.ordersConstants.ORDER_SIDE.SELL ? "buy" : "sell") + "\n      order at " + toDisplayString($props.order.osoPrice) + " " + toDisplayString($props.order.counter) + ".\n      ", 1),
        _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
        _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
        createTextVNode("Estimated profit: " + toDisplayString($props.order.osoFinal) + " " + toDisplayString($props.order.counter) + " (" + toDisplayString($props.order.osoPercent) + "%)\n    ", 1)
      ]),
      _: 1
    })) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
      createTextVNode("\n      /\n    ")
    ], 64))
  ]);
}
const OpenOrdersTriggerField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f50fe6f"]]);
export {
  MarginSettingTag as M,
  OpenOrdersTriggerField as O,
  positionsApi as p,
  useOpenPositionsStore as u
};
