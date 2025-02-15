import { _ as _export_sfc, B as BtsButton, U as URLService, aV as EventBusConstants, y as resolveComponent, o as openBlock, c as createBlock, w as withCtx, i as createBaseVNode, t as toDisplayString, g as createTextVNode, e as createElementBlock, F as Fragment, h as createCommentVNode, J as normalizeClass, a5 as renderList, bj as mergeProps, ci as toHandlers, f as createVNode, M as Modal, b5 as CrossSVG, W as LabeledDropdown, aN as useBalancesStore, aw as useMarketsStore, aW as usePreferredCurrencyStore, az as useSubAccountStore, u as useToastStore, bS as useTickersStore, aA as constants$1, aj as _, I as constants$2, aO as ResponseCodes, aH as withDirectives, aI as vShow, ae as renderSlot } from "./BEpVD-aq.js";
import { P as Pagination } from "./C-G9XUT5.js";
import { a as useOrderFormatter, u as useOrdersStore } from "./CmPxTZ2S.js";
import { U as UserDashboardPanel } from "./CV9yC9yK.js";
import { C as CryptoBasketIcon } from "./bDpLWS1b.js";
import { c as constants } from "./Ptg4BVLI.js";
const _sfc_main$2 = {
  name: "BuyDirectCryptoButton",
  components: { BtsButton },
  props: {
    currency: {
      type: String,
      default: ""
    },
    isCreditCardSupported: {
      type: Boolean,
      required: true
    },
    isAchSupported: {
      type: Boolean,
      required: true
    },
    isPaypalSupported: {
      type: Boolean,
      required: true
    },
    isSimpleBuyEnabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    creditCardDepositURL() {
      if (!this.isSimpleBuyEnabled) {
        return URLService.getPageUrl("credit_card_deposit");
      }
      return "";
    }
  },
  methods: {
    openSimpleAppModal() {
      if (this.isSimpleBuyEnabled) {
        this.$eventBus.$emit(EventBusConstants.SIMPLE_APP.CREATE);
      }
    }
  }
};
const _hoisted_1$3 = { class: "direct-crypto__description" };
const _hoisted_2$2 = {
  key: 1,
  class: "direct-crypto__fast-payment-container"
};
const _hoisted_3$1 = {
  key: 2,
  class: "direct-crypto__icon direct-crypto__icon--paypal"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createBlock(_component_BtsButton, {
    class: normalizeClass(["direct-crypto", {
      "direct-crypto--full-width": $props.fullWidth
    }]),
    secondary: "",
    link: $options.creditCardDepositURL,
    "as-link": !$props.isSimpleBuyEnabled,
    onClick: $options.openSimpleAppModal
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$3, toDisplayString(_ctx.$t("components.buyDirectCryptoButton.buyCurrencyWith", { currency: $props.currency })), 1),
      _cache[6] || (_cache[6] = createTextVNode()),
      $props.isCreditCardSupported ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "direct-crypto__icon direct-crypto__icon--mastercard" }, null, -1)),
        _cache[1] || (_cache[1] = createTextVNode()),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "direct-crypto__icon direct-crypto__icon--maestro" }, null, -1)),
        _cache[3] || (_cache[3] = createTextVNode()),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "direct-crypto__icon direct-crypto__icon--visa" }, null, -1))
      ], 64)) : createCommentVNode("", true),
      _cache[7] || (_cache[7] = createTextVNode()),
      $props.isAchSupported ? (openBlock(), createElementBlock("div", _hoisted_2$2, _cache[5] || (_cache[5] = [
        createBaseVNode("div", { class: "direct-crypto__icon direct-crypto__icon--ach" }, null, -1),
        createTextVNode(),
        createBaseVNode("div", { class: "direct-crypto__fast-payment-text" }, "\n        ACH\n      ", -1)
      ]))) : createCommentVNode("", true),
      _cache[8] || (_cache[8] = createTextVNode()),
      $props.isPaypalSupported ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["class", "link", "as-link", "onClick"]);
}
const BuyDirectCryptoButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-0a287c0f"]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 12"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M12 3 6 9 0 3z"
    }, null, -1)
  ]));
}
const IconArrowDown = { render };
const _sfc_main$1 = {
  name: "MobileDropdown",
  components: { IconArrowDown },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  emits: ["update:value"],
  computed: {
    inputListeners() {
      const vm = this;
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$attrs,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input(event) {
            vm.$emit("update:value", event.target.value);
          }
        }
      );
    }
  }
};
const _hoisted_1$1 = { class: "market-mobile-dropdown" };
const _hoisted_2$1 = ["value", "disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconArrowDown = resolveComponent("IconArrowDown");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("select", mergeProps({ class: "market-mobile-dropdown__dropdown" }, _ctx.$attrs, toHandlers($options.inputListeners, true)), [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, ({ value, text, disabled }) => {
        return openBlock(), createElementBlock("option", {
          key: value,
          value,
          disabled
        }, toDisplayString(text), 9, _hoisted_2$1);
      }), 128))
    ], 16),
    _cache[0] || (_cache[0] = createTextVNode()),
    createVNode(_component_IconArrowDown, { class: "market-mobile-dropdown__icon" })
  ]);
}
const MarketMobileDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-a8b72311"]]);
const paginationPageOptions = [
  { value: "10", text: "10" },
  { value: "50", text: "50" },
  { value: "100", text: "100" }
];
const _sfc_main = {
  name: "OpenOrders",
  components: {
    Modal,
    MobileDropdown: MarketMobileDropdown,
    BtsButton,
    UserDashboardPanel,
    CrossSVG,
    LabeledDropdown,
    CryptoBasketSVG: CryptoBasketIcon,
    Pagination
  },
  props: {
    selectedAccount: {
      type: [String, Number],
      default: "main"
    },
    hideIfNoOpenOrders: {
      type: Boolean,
      default: false
    },
    forceMobileLayout: {
      type: Boolean,
      default: false
    },
    hideOrderTypeFilter: {
      type: Boolean,
      default: false
    },
    paginationMode: {
      type: String,
      default: "auto",
      validator: (value) => Object.values(["auto", "hide", "show"]).includes(value)
    }
  },
  emits: ["orderCanceled"],
  setup() {
    const { formatOrder } = useOrderFormatter();
    return {
      balancesStore: useBalancesStore(),
      marketsStore: useMarketsStore(),
      ordersStore: useOrdersStore(),
      preferredCurrencyStore: usePreferredCurrencyStore(),
      subAccountStore: useSubAccountStore(),
      toastStore: useToastStore(),
      tickersStore: useTickersStore(),
      formatOrder
    };
  },
  data() {
    return {
      constants,
      ordersConstants: constants$1,
      openOrdersLoaded: false,
      orderFilterType: null,
      cancelAllConfirm: false,
      ordersCurrentPage: 1,
      maxOrdersDisplayed: constants.USER_ORDER_PAGINATION_SIZE.DEFAULT,
      paginationPageOptions
    };
  },
  computed: {
    formattedOrders() {
      return _.uniqBy(
        this.ordersStore.openOrders.filter((order) => {
          const market = this.marketsStore.getMarket(order.market);
          if (!market) {
            this.$errorTracking.track(`[OPEN ORDERS] ${order.market} market could not be found.`);
          }
          return !!market;
        }).map(this.formatOrder),
        "id"
      );
    },
    openOrderLink() {
      const counterKey = this.preferredCurrencyStore.preferredCurrency.toLowerCase() ?? "usd";
      return `${URLService.getPageUrl("product_details", {
        base: "btc",
        counter: counterKey === "btc" ? "usd" : counterKey
      })}?order_type=limit`;
    },
    hasOpenOrders() {
      return this.ordersStore.openOrders.length > 0;
    },
    isMobile() {
      return this.$isSmall.value || this.$isMedium.value || this.forceMobileLayout;
    },
    columns() {
      if (this.isMobile) {
        return [
          { name: "Order" },
          {
            name: "Amount",
            class_: "open-orders-table__column--right"
          },
          {
            name: "Value",
            class_: "open-orders-table__column--right"
          }
        ];
      }
      return [
        { name: "Type" },
        { name: "Pair" },
        { name: "Date and time" },
        {
          name: "Amount",
          class_: "open-orders-table__column--right"
        },
        {
          name: "Price",
          class_: "open-orders-table__column--right"
        },
        {
          name: "Value",
          class_: "open-orders-table__column--right"
        }
      ];
    },
    availableOrderTypes() {
      return [
        { value: null, text: "All orders" },
        { value: constants$1.ORDER_TYPE.LIMIT, text: constants$1.ORDER_TYPE_CONFIG[constants$1.ORDER_TYPE.LIMIT].display },
        { value: constants$1.ORDER_TYPE.STOP_MARKET, text: constants$1.ORDER_TYPE_CONFIG[constants$1.ORDER_TYPE.STOP_MARKET].display },
        { value: constants$1.ORDER_TYPE.STOP_LIMIT, text: constants$1.ORDER_TYPE_CONFIG[constants$1.ORDER_TYPE.STOP_LIMIT].display }
      ];
    },
    filteredOrders() {
      if (this.orderFilterType) {
        return this.formattedOrders.filter((order) => order.type === this.orderFilterType);
      }
      return this.formattedOrders;
    },
    shouldUsePagination() {
      return this.paginationMode === "auto" && !this.isMobile || this.paginationMode === "show";
    },
    pagedOrders() {
      if (this.shouldUsePagination) {
        return this.filteredOrders.slice(
          this.maxOrdersDisplayedNum * (this.ordersCurrentPage - 1),
          this.maxOrdersDisplayedNum * this.ordersCurrentPage
        );
      }
      return this.filteredOrders;
    },
    numberOfOrders() {
      return this.filteredOrders.length;
    },
    maxOrdersDisplayedNum() {
      return parseInt(this.maxOrdersDisplayed);
    }
  },
  watch: {
    hasOpenOrders(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.balancesStore.fetch();
      }
      if (this.hasOpenOrders) {
        this.ordersStore.startPolling(1e4);
      } else {
        this.ordersStore.startPolling();
      }
    }
  },
  methods: {
    setOrderFilter(filterType) {
      if (this.orderFilterType !== filterType) {
        this.orderFilterType = filterType;
        this.resetPagination();
      }
    },
    async cancelOrder(orderId) {
      var _a;
      try {
        await this.ordersStore.cancel(orderId, false);
        const notification = {
          title: "Order canceled",
          text: "Order canceled successfully.",
          type: constants$2.NOTIFICATIONS.TYPES.SUCCESS
        };
        this.toastStore.showToast(notification);
        this.$emit("orderCanceled");
        this.balancesStore.fetch();
      } catch (e) {
        if (e.response.status === ResponseCodes.HTTP.NOT_FOUND) {
          this.toastStore.showErrorToast("Could not remove order as it is no longer open.");
          await this.ordersStore.fetchOpenOrders();
        } else {
          (_a = this.$errorTracking) == null ? void 0 : _a.trackException(e);
        }
      }
    },
    async cancelAllOrders() {
      var _a;
      this.$track("Cancel all Open Orders");
      try {
        await this.ordersStore.cancelAll(this.subAccountStore.activeSubAccountId);
        const notification = {
          title: "All orders canceled",
          text: "All orders canceled successfully.",
          type: constants$2.NOTIFICATIONS.TYPES.SUCCESS
        };
        this.toastStore.showToast(notification);
        this.$emit("orderCanceled");
        this.cancelAllConfirm = false;
      } catch (e) {
        this.cancelAllConfirm = false;
        (_a = this.$errorTracking) == null ? void 0 : _a.trackException(e);
      }
    },
    setOrdersCurrentPage(value) {
      this.ordersCurrentPage = value;
    },
    setOrdersPerPage(value) {
      if (this.maxOrdersDisplayed !== value) {
        this.maxOrdersDisplayed = value;
        this.resetPagination();
      }
    },
    resetPagination() {
      this.ordersCurrentPage = 1;
    }
  }
};
const _hoisted_1 = { class: "cancel-all-modal__buttons" };
const _hoisted_2 = {
  key: 0,
  class: "open-orders-commands"
};
const _hoisted_3 = {
  key: 0,
  class: "open-orders"
};
const _hoisted_4 = {
  key: 1,
  class: "open-orders-table"
};
const _hoisted_5 = { class: "open-orders-table__column" };
const _hoisted_6 = ["href", "title"];
const _hoisted_7 = { class: "open-orders-table__subtext" };
const _hoisted_8 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_9 = { class: "open-orders-table__subtext" };
const _hoisted_10 = {
  key: 0,
  class: "open-orders-table__subtext"
};
const _hoisted_11 = { class: "no-wrap" };
const _hoisted_12 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_13 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_14 = { class: "open-orders-table__column" };
const _hoisted_15 = { class: "open-orders-table__column" };
const _hoisted_16 = ["href", "title"];
const _hoisted_17 = { class: "open-orders-table__column" };
const _hoisted_18 = { class: "open-orders-table__subtext" };
const _hoisted_19 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_20 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_21 = {
  key: 2,
  class: "open-orders-table__subtext open-orders-table__column--right"
};
const _hoisted_22 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_23 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_24 = { class: "open-orders-table__column open-orders-table__column-subtext-first" };
const _hoisted_25 = ["title"];
const _hoisted_26 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_27 = { class: "open-orders-table__subtext" };
const _hoisted_28 = { class: "open-orders-table__subtext" };
const _hoisted_29 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_30 = { class: "open-orders-table__subtext" };
const _hoisted_31 = { class: "open-orders-table__column open-orders-table__column-subtext-first" };
const _hoisted_32 = ["title"];
const _hoisted_33 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_34 = { class: "open-orders-table__subtext" };
const _hoisted_35 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_36 = { class: "open-orders-table__subtext" };
const _hoisted_37 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_38 = { class: "open-orders-table__subtext" };
const _hoisted_39 = { class: "open-orders-table__column open-orders-table__column-subtext-first" };
const _hoisted_40 = ["title"];
const _hoisted_41 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_42 = { class: "open-orders-table__subtext" };
const _hoisted_43 = { class: "open-orders-table__subtext" };
const _hoisted_44 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_45 = { class: "open-orders-table__subtext" };
const _hoisted_46 = { class: "open-orders-table__column open-orders-table__column-subtext-first" };
const _hoisted_47 = ["title"];
const _hoisted_48 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_49 = { class: "open-orders-table__subtext" };
const _hoisted_50 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_51 = { class: "open-orders-table__subtext" };
const _hoisted_52 = { class: "open-orders-table__column open-orders-table__column--right" };
const _hoisted_53 = { class: "open-orders-table__subtext" };
const _hoisted_54 = {
  key: 0,
  class: "open-orders-table__pagination"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_Modal = resolveComponent("Modal");
  const _component_MobileDropdown = resolveComponent("MobileDropdown");
  const _component_LabeledDropdown = resolveComponent("LabeledDropdown");
  const _component_CryptoBasketSVG = resolveComponent("CryptoBasketSVG");
  const _component_CrossSVG = resolveComponent("CrossSVG");
  const _component_Pagination = resolveComponent("Pagination");
  const _component_UserDashboardPanel = resolveComponent("UserDashboardPanel");
  return withDirectives((openBlock(), createBlock(_component_UserDashboardPanel, {
    title: "Open orders",
    padded: !$options.hasOpenOrders,
    class: normalizeClass({
      "responsive": !$props.forceMobileLayout,
      "force-mobile-layout": $props.forceMobileLayout,
      "no-orders": !$options.hasOpenOrders
    })
  }, {
    actions: withCtx(() => [
      $options.hasOpenOrders ? (openBlock(), createElementBlock("div", _hoisted_2, [
        $options.isMobile && !$props.hideOrderTypeFilter && !$props.forceMobileLayout ? (openBlock(), createBlock(_component_MobileDropdown, {
          key: 0,
          options: $options.availableOrderTypes,
          value: $data.orderFilterType,
          "onUpdate:value": $options.setOrderFilter
        }, null, 8, ["options", "value", "onUpdate:value"])) : !$props.hideOrderTypeFilter ? (openBlock(), createBlock(_component_LabeledDropdown, {
          key: 1,
          class: "open-orders-commands__command",
          options: $options.availableOrderTypes,
          value: $data.orderFilterType,
          placeholder: "Type",
          "onUpdate:value": $options.setOrderFilter
        }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true),
        _cache[9] || (_cache[9] = createTextVNode()),
        $options.numberOfOrders > $data.constants.USER_ORDER_PAGINATION_SIZE.DEFAULT && !$options.isMobile ? (openBlock(), createBlock(_component_LabeledDropdown, {
          key: 2,
          class: "open-orders-commands__command",
          options: $data.paginationPageOptions,
          value: $data.maxOrdersDisplayed,
          "onUpdate:value": $options.setOrdersPerPage
        }, null, 8, ["options", "value", "onUpdate:value"])) : createCommentVNode("", true),
        _cache[10] || (_cache[10] = createTextVNode()),
        _ctx.$has("trade_orders_cancel") ? (openBlock(), createBlock(_component_BtsButton, {
          key: 3,
          class: "open-orders-commands__cancel-button open-orders-commands__command",
          secondary: "",
          rounded: false,
          tiny: "",
          onClick: _cache[2] || (_cache[2] = ($event) => $data.cancelAllConfirm = true)
        }, {
          default: withCtx(() => _cache[8] || (_cache[8] = [
            createTextVNode("\n          Cancel all\n        ")
          ])),
          _: 1
        })) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    default: withCtx(() => [
      createVNode(_component_Modal, {
        "is-open": $data.cancelAllConfirm,
        "onUpdate:isOpen": _cache[1] || (_cache[1] = ($event) => $data.cancelAllConfirm = $event),
        title: "Confirm cancel all",
        size: "small"
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_BtsButton, {
              class: "cancel-all-modal__cancel-button",
              rounded: false,
              small: "",
              onClick: $options.cancelAllOrders
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("\n            Cancel all\n          ")
              ])),
              _: 1
            }, 8, ["onClick"]),
            _cache[5] || (_cache[5] = createTextVNode()),
            createVNode(_component_BtsButton, {
              rounded: false,
              small: "",
              secondary: "",
              onClick: _cache[0] || (_cache[0] = ($event) => $data.cancelAllConfirm = false)
            }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode("\n            Dismiss\n          ")
              ])),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "cancel-all-modal__text" }, "\n        Are you sure you want to cancel all your open orders?\n      ", -1)),
          _cache[7] || (_cache[7] = createTextVNode())
        ]),
        _: 1
      }, 8, ["is-open"]),
      _cache[45] || (_cache[45] = createTextVNode()),
      _cache[46] || (_cache[46] = createTextVNode()),
      !$options.hasOpenOrders ? (openBlock(), createElementBlock("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "empty-placeholder", {}, () => [
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "open-orders__title" }, "\n          Never miss the price you want\n        ", -1)),
          _cache[13] || (_cache[13] = createTextVNode()),
          _cache[14] || (_cache[14] = createBaseVNode("div", { class: "open-orders__subtitle" }, "\n          Set limit or stop orders in advance to buy or sell automatically once prices reach a certain level.\n        ", -1)),
          _cache[15] || (_cache[15] = createTextVNode()),
          createVNode(_component_CryptoBasketSVG, { class: "open-orders__image" }),
          _cache[16] || (_cache[16] = createTextVNode()),
          _ctx.$has("trade_orders_create") ? (openBlock(), createBlock(_component_BtsButton, {
            key: 0,
            class: "open-orders__button",
            rounded: false,
            medium: "",
            link: $options.openOrderLink
          }, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createTextVNode("\n          Open an order\n        ")
            ])),
            _: 1
          }, 8, ["link"])) : createCommentVNode("", true)
        ], true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
        createBaseVNode("ul", null, [
          createBaseVNode("li", {
            class: normalizeClass(["open-orders-table__row open-orders-table__row--title", { "open-orders-table__row--mobile": $options.isMobile }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.columns, (column, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass(["open-orders-table__column", column.class_])
              }, toDisplayString(column.name), 3);
            }), 128))
          ], 2),
          _cache[43] || (_cache[43] = createTextVNode()),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.pagedOrders, (order) => {
            return openBlock(), createElementBlock("li", {
              key: order.id,
              class: normalizeClass(["open-orders-table__row", { "open-orders-table__row--mobile": $options.isMobile }])
            }, [
              $options.isMobile ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("span", {
                    class: normalizeClass({
                      "open-orders-table__order-buy": order.side === $data.ordersConstants.ORDER_SIDE.BUY,
                      "open-orders-table__order-sell": order.side === $data.ordersConstants.ORDER_SIDE.SELL
                    })
                  }, toDisplayString(order.typeDisplay) + " " + toDisplayString(order.side === "buy" ? "Buy" : "Sell"), 3),
                  _cache[17] || (_cache[17] = createTextVNode()),
                  createBaseVNode("span", null, [
                    createBaseVNode("a", {
                      href: order.marketLink,
                      title: `Change active pair to ${order.marketName}`
                    }, toDisplayString(order.marketName), 9, _hoisted_6)
                  ]),
                  _cache[18] || (_cache[18] = createTextVNode()),
                  createBaseVNode("span", _hoisted_7, toDisplayString(order.date) + ", " + toDisplayString(order.time), 1)
                ]),
                _cache[21] || (_cache[21] = createTextVNode()),
                createBaseVNode("div", _hoisted_8, [
                  createTextVNode(toDisplayString(order.formattedAmountAtCreate) + " " + toDisplayString(order.amountCurrency) + " ", 1),
                  createBaseVNode("span", _hoisted_9, [
                    order.stopPrice ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode("\n                  @" + toDisplayString(order.stopPrice), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode("\n                  @" + toDisplayString(order.price), 1)
                    ], 64)),
                    createTextVNode(" " + toDisplayString(order.counter), 1)
                  ]),
                  _cache[20] || (_cache[20] = createTextVNode()),
                  order.trailingBy ? (openBlock(), createElementBlock("span", _hoisted_10, [
                    _cache[19] || (_cache[19] = createTextVNode("Trailing: ")),
                    createBaseVNode("span", _hoisted_11, toDisplayString(order.trailingBy) + " " + toDisplayString(order.counter), 1)
                  ])) : createCommentVNode("", true)
                ]),
                _cache[22] || (_cache[22] = createTextVNode()),
                createBaseVNode("div", _hoisted_12, toDisplayString(order.formattedEstimatedValueAtCreate) + " " + toDisplayString(order.counter), 1),
                _cache[23] || (_cache[23] = createTextVNode()),
                createBaseVNode("div", _hoisted_13, [
                  _ctx.$has("trade_orders_cancel") ? (openBlock(), createBlock(_component_CrossSVG, {
                    key: 0,
                    class: "open-orders-table__cancel-icon",
                    onClick: ($event) => $options.cancelOrder(order.id)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("span", {
                    class: normalizeClass({
                      "open-orders-table__order-buy": order.side === $data.ordersConstants.ORDER_SIDE.BUY,
                      "open-orders-table__order-sell": order.side === $data.ordersConstants.ORDER_SIDE.SELL
                    })
                  }, toDisplayString(order.typeDisplay) + " " + toDisplayString(order.side === "buy" ? "Buy" : "Sell"), 3)
                ]),
                _cache[24] || (_cache[24] = createTextVNode()),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("a", {
                    href: order.marketLink,
                    title: `Change active pair to ${order.marketName}`
                  }, toDisplayString(order.marketName), 9, _hoisted_16)
                ]),
                _cache[25] || (_cache[25] = createTextVNode()),
                createBaseVNode("div", _hoisted_17, [
                  createTextVNode(toDisplayString(order.date) + " ", 1),
                  createBaseVNode("span", _hoisted_18, toDisplayString(order.time), 1)
                ]),
                _cache[26] || (_cache[26] = createTextVNode()),
                createBaseVNode("div", _hoisted_19, toDisplayString(order.formattedAmountAtCreate) + " " + toDisplayString(order.amountCurrency), 1),
                _cache[27] || (_cache[27] = createTextVNode()),
                createBaseVNode("div", _hoisted_20, [
                  order.stopPrice ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(order.stopPrice), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(order.price), 1)
                  ], 64)),
                  createTextVNode(" " + toDisplayString(order.counter) + " ", 1),
                  order.trailingBy ? (openBlock(), createElementBlock("span", _hoisted_21, toDisplayString(`Trailing: ${order.trailingBy} ${order.counter}`), 1)) : createCommentVNode("", true)
                ]),
                _cache[28] || (_cache[28] = createTextVNode()),
                createBaseVNode("div", _hoisted_22, toDisplayString(order.formattedEstimatedValueAtCreate) + " " + toDisplayString(order.counter), 1),
                _cache[29] || (_cache[29] = createTextVNode()),
                createBaseVNode("div", _hoisted_23, [
                  _ctx.$has("trade_orders_cancel") ? (openBlock(), createBlock(_component_CrossSVG, {
                    key: 0,
                    class: "open-orders-table__cancel-icon",
                    onClick: ($event) => $options.cancelOrder(order.id)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ], 64)),
              _cache[42] || (_cache[42] = createTextVNode()),
              order.expireTime ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(["open-orders-table__column--expire", { "pl8": $options.isMobile, "pb8": $options.isMobile }])
              }, "\n            Order expires on " + toDisplayString(order.expireTime) + ". " + toDisplayString(order.expireTimeNote), 3)) : order.osoPrice ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                $options.isMobile ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", _hoisted_24, [
                    order.type === $data.ordersConstants.ORDER_TYPE.LIMIT ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      title: `When parent order is executed, this limit order will be created resulting in a profit of ${order.osoFinal} ${order.counter} (${order.osoPercent}%) minus fees.`,
                      class: "open-orders-table__subtext open-orders-table__help-text"
                    }, "Sets limit " + toDisplayString(order.side === $data.ordersConstants.ORDER_SIDE.BUY ? "sell" : "buy"), 9, _hoisted_25)) : createCommentVNode("", true)
                  ]),
                  _cache[31] || (_cache[31] = createTextVNode()),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("span", _hoisted_27, toDisplayString(order.formattedAmountAtCreate) + " " + toDisplayString(order.amountCurrency), 1),
                    _cache[30] || (_cache[30] = createTextVNode()),
                    createBaseVNode("span", _hoisted_28, toDisplayString(order.osoPrice) + " " + toDisplayString(order.counter), 1)
                  ]),
                  _cache[32] || (_cache[32] = createTextVNode()),
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("span", _hoisted_30, toDisplayString(order.osoValue) + " " + toDisplayString(order.counter), 1)
                  ])
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_31, [
                    order.type === $data.ordersConstants.ORDER_TYPE.LIMIT ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      title: `When parent order is executed, this limit order will be created resulting in a profit of ${order.osoFinal} ${order.counter} (${order.osoPercent}%) minus fees.`,
                      class: "open-orders-table__subtext open-orders-table__help-text"
                    }, "Sets limit " + toDisplayString(order.side === $data.ordersConstants.ORDER_SIDE.BUY ? "sell" : "buy"), 9, _hoisted_32)) : createCommentVNode("", true)
                  ]),
                  _cache[33] || (_cache[33] = createTextVNode()),
                  createBaseVNode("div", _hoisted_33, [
                    createBaseVNode("span", _hoisted_34, toDisplayString(order.formattedAmountAtCreate) + " " + toDisplayString(order.base), 1)
                  ]),
                  _cache[34] || (_cache[34] = createTextVNode()),
                  createBaseVNode("div", _hoisted_35, [
                    createBaseVNode("span", _hoisted_36, toDisplayString(order.osoPrice) + " " + toDisplayString(order.counter), 1)
                  ]),
                  _cache[35] || (_cache[35] = createTextVNode()),
                  createBaseVNode("div", _hoisted_37, [
                    createBaseVNode("span", _hoisted_38, toDisplayString(order.osoValue) + " " + toDisplayString(order.counter), 1)
                  ])
                ], 64))
              ], 64)) : order.type === $data.ordersConstants.ORDER_TYPE.STOP_LIMIT ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                $options.isMobile ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("span", {
                      title: `Once triggered opens a limit ${order.side === $data.ordersConstants.ORDER_SIDE.BUY ? "buy" : "sell"} order at ${order.price} ${order.counter}.`,
                      class: "open-orders-table__subtext open-orders-table__help-text"
                    }, "Sets limit " + toDisplayString(order.side === $data.ordersConstants.ORDER_SIDE.BUY ? "buy" : "sell"), 9, _hoisted_40)
                  ]),
                  _cache[37] || (_cache[37] = createTextVNode()),
                  createBaseVNode("div", _hoisted_41, [
                    createBaseVNode("span", _hoisted_42, toDisplayString(order.formattedAmountAtCreate) + " " + toDisplayString(order.base), 1),
                    _cache[36] || (_cache[36] = createTextVNode()),
                    createBaseVNode("span", _hoisted_43, toDisplayString(order.price) + " " + toDisplayString(order.counter), 1)
                  ]),
                  _cache[38] || (_cache[38] = createTextVNode()),
                  createBaseVNode("div", _hoisted_44, [
                    createBaseVNode("span", _hoisted_45, toDisplayString(order.formattedEstimatedValueAtCreate) + " " + toDisplayString(order.counter), 1)
                  ])
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("span", {
                      title: `Once triggered opens limit ${order.side === $data.ordersConstants.ORDER_SIDE.BUY ? "buy" : "sell"} order at ${order.price} ${order.counter}.`,
                      class: "open-orders-table__subtext open-orders-table__help-text"
                    }, "Sets limit " + toDisplayString(order.side === $data.ordersConstants.ORDER_SIDE.BUY ? "buy" : "sell"), 9, _hoisted_47)
                  ]),
                  _cache[39] || (_cache[39] = createTextVNode()),
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("span", _hoisted_49, toDisplayString(order.formattedAmountAtCreate) + " " + toDisplayString(order.base), 1)
                  ]),
                  _cache[40] || (_cache[40] = createTextVNode()),
                  createBaseVNode("div", _hoisted_50, [
                    createBaseVNode("span", _hoisted_51, toDisplayString(order.price) + " " + toDisplayString(order.counter), 1)
                  ]),
                  _cache[41] || (_cache[41] = createTextVNode()),
                  createBaseVNode("div", _hoisted_52, [
                    createBaseVNode("span", _hoisted_53, toDisplayString(order.formattedEstimatedValueAtCreate) + " " + toDisplayString(order.counter), 1)
                  ])
                ], 64))
              ], 64)) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ]),
        _cache[44] || (_cache[44] = createTextVNode()),
        $options.numberOfOrders > $options.maxOrdersDisplayedNum && $options.shouldUsePagination ? (openBlock(), createElementBlock("div", _hoisted_54, [
          createVNode(_component_Pagination, {
            page: $data.ordersCurrentPage,
            "per-page": $options.maxOrdersDisplayedNum,
            count: $options.numberOfOrders,
            "display-page-count": "",
            onNewPage: $options.setOrdersCurrentPage
          }, null, 8, ["page", "per-page", "count", "onNewPage"])
        ])) : createCommentVNode("", true)
      ]))
    ]),
    _: 3
  }, 8, ["padded", "class"])), [
    [vShow, !$props.hideIfNoOpenOrders || $options.hasOpenOrders]
  ]);
}
const OpenOrders = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7af7b9d5"]]);
export {
  BuyDirectCryptoButton as B,
  MarketMobileDropdown as M,
  OpenOrders as O
};
