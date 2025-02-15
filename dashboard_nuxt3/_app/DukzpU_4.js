import { _ as _export_sfc, U as URLService, o as openBlock, e as createElementBlock, t as toDisplayString, J as normalizeClass, h as createCommentVNode, V as AppTooltip, cj as _sfc_main$5, B as BtsButton, ah as CurrencyIcon, bg as ArrowDown, a4 as BtsLink, q as useUserStateStore, aW as usePreferredCurrencyStore, c8 as simpleAppEvents, ag as numberFormatter, a0 as Decimal, as as CURRENCIES, aj as _, af as currenciesConstants, ck as PAIRS, y as resolveComponent, i as createBaseVNode, g as createTextVNode, F as Fragment, a5 as renderList, a$ as normalizeStyle, c as createBlock, w as withCtx, f as createVNode, b$ as TransitionGroup, ae as renderSlot, D as resolveDynamicComponent } from "./BEpVD-aq.js";
import { A as ActionMenu } from "./CI4CM-Pf.js";
import { A as AssetTags } from "./DCuF_7KQ.js";
import { u as useAssetPriceAndChange } from "./BMFhygwF.js";
import { c as constants } from "./Ptg4BVLI.js";
import { f as formatPreferredCurrencyValue } from "./AXP0jxv7.js";
const _sfc_main$4 = {
  name: "AssetEarnLink",
  props: {
    rewardRate: {
      type: [String, Number],
      required: true
    },
    asset: {
      type: String,
      required: true
    },
    isUserAnonymous: {
      type: Boolean,
      default: true
    },
    isSmall: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      constants
    };
  },
  computed: {
    link() {
      if (this.isUserAnonymous) {
        return URLService.getPageUrl("bitstampEarn");
      }
      return URLService.getPageUrl("earnDashboard", {}, true, { asset: this.asset });
    },
    text() {
      return `Earn ${this.rewardRate}% APY`;
    },
    isVaspRiskWarningActive() {
      return this.$constants.showVaspInvestmentRiskWarning;
    }
  }
};
const _hoisted_1$4 = ["href"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return !$options.isVaspRiskWarningActive ? (openBlock(), createElementBlock("a", {
    key: 0,
    href: $options.link,
    class: normalizeClass(["earn-link", { "earn-link--small": $props.isSmall }]),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$track("Click earn tag"))
  }, toDisplayString($options.text), 11, _hoisted_1$4)) : createCommentVNode("", true);
}
const AssetEarnLink = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-b09eb56c"]]);
const _sfc_main$3 = {
  name: "AssetsTable",
  components: {
    AppTooltip,
    AppScrollbar: _sfc_main$5,
    AssetEarnLink,
    AssetTags,
    ActionMenu,
    BtsButton,
    CurrencyIcon,
    ArrowDown,
    BtsLink
  },
  props: {
    showAssetsWithNoLink: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    assets: {
      type: Array,
      default: () => []
    },
    assetFormatter: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingPlaceholderNum: {
      type: Number,
      default: 3
    },
    defaultSort: {
      type: Object,
      default: null
    },
    wideLastTitleColumn: {
      type: Boolean,
      default: false
    },
    smallBreakPoint: {
      type: Number,
      default: 576
    },
    mediumBreakPoint: {
      type: Number,
      default: 768
    },
    tagsBreakPoint: {
      type: Number,
      default: 1080
    },
    actionWidth: {
      type: String,
      default: "100px"
    },
    additionalActions: {
      type: Array,
      default: () => []
    },
    useExternalLinks: {
      type: Boolean,
      default: true
    },
    preferredCurrency: {
      type: String,
      default: null,
      required: false
    },
    alwaysDisplayActions: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    pro: {
      type: Boolean,
      default: false
    },
    customButtonTextFn: {
      type: Function,
      default: void 0
    },
    listType: {
      type: String,
      default: null
    }
  },
  emits: ["toggleSort"],
  setup() {
    return {
      userStateStore: useUserStateStore(),
      preferredCurrencyStore: usePreferredCurrencyStore(),
      assetPriceAndChange: useAssetPriceAndChange()
    };
  },
  data: () => {
    return {
      /** @type {?Sort} */
      currentSort: {},
      tableWidth: null,
      isContentCollapsed: true,
      activeSubsections: [],
      basicWebappEvents: simpleAppEvents
    };
  },
  computed: {
    formattedAssets() {
      return this.assetFormatter(this.assetsWithPricesAndChanges);
    },
    filteredAssetsWithLink() {
      const filteredAssets = [];
      for (const asset of this.formattedAssets) {
        const link = this.assetLink(asset.code, this.preferredCurrencyStore.preferredCurrency);
        if (!link && !this.showAssetsWithNoLink) {
          continue;
        }
        filteredAssets.push({
          ...asset,
          link
        });
      }
      return filteredAssets;
    },
    isSmallTable() {
      return this.tableWidth <= this.smallBreakPoint;
    },
    isMediumTable() {
      return this.tableWidth <= this.mediumBreakPoint;
    },
    isCompactTable() {
      return this.tableWidth <= this.tagsBreakPoint && this.tableWidth > this.mediumBreakPoint;
    },
    tableColumns() {
      return this.columns.filter((column) => !column.hideOnSmall || !this.isSmallTable);
    },
    anonymous() {
      return !this.userStateStore.isLoggedIn;
    },
    isEarnPageEnabledForUser() {
      return this.$pageContext.isEarnPageEnabledForUser;
    },
    contentWrapper() {
      return this.scrollable ? _sfc_main$5 : "div";
    },
    assetsColumnWidth() {
      if (this.isMediumTable) {
        return "1.25fr";
      } else if (this.isSmallTable) {
        return "1.75fr";
      }
      return "2fr";
    },
    assetsWithPricesAndChanges() {
      var _a;
      if (this.loading) {
        return [];
      }
      return ((_a = this.assets) == null ? void 0 : _a.map((asset) => {
        var _a2;
        const { price, change } = this.assetPriceAndChange.getAssetPriceAndChange(asset);
        const priceDisplay = formatPreferredCurrencyValue({
          asset,
          value: price,
          preferredCurrency: this.preferredCurrencyStore.preferredCurrency
        });
        const changeRelativeDisplay = change.relative ? numberFormatter.percentageChange(change.relative) : "";
        const changeAbsoluteDisplay = change.absolute ? formatPreferredCurrencyValue({
          asset,
          value: change.absolute,
          preferredCurrency: this.preferredCurrencyStore.preferredCurrency
        }) : "";
        return {
          code: asset,
          price: (price == null ? void 0 : price.toNumber()) || null,
          priceDisplay,
          changeRelative: change.relative === null ? new Decimal(-1e3).toNumber() : change.relative.toNumber(),
          // Just for sorting
          changeRelativeDisplay,
          changeAbsolute: (_a2 = change.absolute) == null ? void 0 : _a2.toNumber(),
          changeAbsoluteDisplay,
          tags: CURRENCIES[asset].tags
        };
      })) ?? [];
    }
  },
  created() {
    if (this.defaultSort) {
      this.currentSort = _.clone(this.defaultSort);
    }
  },
  mounted() {
    window.addEventListener("resize", this.widthHandler);
    this.$nextTick(() => {
      this.widthHandler();
    });
  },
  unmounted() {
    window.removeEventListener("resize", this.widthHandler);
  },
  methods: {
    isCrypto(asset) {
      var _a;
      return ((_a = CURRENCIES[asset]) == null ? void 0 : _a.type) === "crypto";
    },
    canDisplayAssetButton(asset) {
      if (this.anonymous) {
        return true;
      }
      if (this.isCrypto(asset) && this.$has("trade_orders_create")) {
        return true;
      }
      return !this.isCrypto(asset) && this.$has("deposits_bank_transfer_create");
    },
    assetLink(asset, counter) {
      if (!asset) {
        return null;
      }
      if (!this.isCrypto(asset)) {
        if (!this.anonymous && !this.$has("deposits_bank_transfer_create")) {
          return null;
        }
        return URLService.getPageUrl("bank_transfer_deposit");
      }
      if (!counter) {
        return null;
      }
      let lowerCaseCounter = counter.toLowerCase();
      const isStakingAsset = currenciesConstants.SPECIAL_ETH_STAKING_STUFF.includes(asset);
      if (asset.toLowerCase() === lowerCaseCounter) {
        return null;
      }
      if (isStakingAsset) {
        lowerCaseCounter = "eth";
      }
      const pairKey = `${asset.toLowerCase()}${lowerCaseCounter}`;
      if (!(pairKey in PAIRS)) {
        if (isStakingAsset) {
          return null;
        } else if (`${asset.toLowerCase()}usd` in PAIRS) {
          lowerCaseCounter = "usd";
        } else {
          const pairCode = Object.values(PAIRS).filter(({ base }) => base === asset)[0] || "";
          if (!pairCode) {
            return null;
          } else {
            lowerCaseCounter = pairCode.counter.toLowerCase();
          }
        }
      }
      return URLService.getPageUrl("product_details", { base: asset.toLowerCase(), counter: lowerCaseCounter });
    },
    assetName(asset) {
      if (!this.isCrypto(asset)) {
        return asset;
      }
      return CURRENCIES[asset].name;
    },
    toggleSort(sortKey, sortable) {
      if (sortable) {
        if (this.currentSort.sortKey === sortKey) {
          this.currentSort.direction = this.currentSort.direction === "desc" ? "asc" : "desc";
        } else {
          this.currentSort = { sortKey, direction: "desc" };
        }
        this.$emit("toggleSort", this.currentSort);
      }
    },
    widthHandler() {
      var _a;
      this.tableWidth = ((_a = this.$refs.table) == null ? void 0 : _a.clientWidth) ?? 0;
    },
    gridStyle(columns) {
      const columnWidths = columns.map((column) => {
        if (this.isSmallTable && column.smallGridWidth) {
          return column.smallGridWidth;
        }
        if (this.isMediumTable && column.mediumGridWidth) {
          return column.mediumGridWidth;
        }
        return column.gridWidth ? column.gridWidth : "1fr";
      }).join(" ");
      const actionWidth = this.isMediumTable ? "30px" : this.actionWidth;
      return {
        gridTemplateColumns: `${this.assetsColumnWidth} ${columnWidths} ${actionWidth}`
      };
    },
    smallGridCommands(asset) {
      const actions = this.additionalActions.map((action) => {
        const actionCopy = Object.assign({}, action);
        if (typeof actionCopy.text === "function") {
          actionCopy.text = actionCopy.text(asset.code);
        }
        if (actionCopy.emit) {
          actionCopy.callback = () => this.$emit(action.emit, asset.code);
        }
        return actionCopy;
      });
      const commands = [];
      if (asset.link) {
        if (this.canDisplayAssetButton(asset.code) && this.isMediumTable) {
          commands.push({
            id: "assetAction",
            text: this.buttonText(asset.code),
            link: asset.link
          });
        }
      }
      return [...commands, ...actions];
    },
    toggleSubsection(assetCode) {
      if (this.activeSubsections.includes(assetCode)) {
        this.activeSubsections.splice(this.activeSubsections.indexOf(assetCode), 1);
      } else {
        this.activeSubsections.push(assetCode);
      }
    },
    lastTitleColumnStyle(index) {
      if (this.wideLastTitleColumn && this.isMediumTable && index === this.tableColumns.length - 1) {
        return `grid-column:${this.tableColumns.length + 1}/span 2; padding-right: 0.5rem`;
      }
      return "";
    },
    buttonText(assetCode) {
      if (this.pro) {
        return this.isCrypto(assetCode) ? "Trade" : "Deposit";
      }
      if (this.customButtonTextFn) {
        return this.customButtonTextFn(assetCode);
      }
      return this.isCrypto(assetCode) ? `Trade ${assetCode}` : `Deposit ${assetCode}`;
    },
    trackClick(event, assetCode) {
      if (!this.listType) {
        return;
      }
      if (this.listType === constants.ASSET_LISTS.WATCHLIST) {
        this.$track(event, { assetCode });
      }
    }
  }
};
const _hoisted_1$3 = ["title", "onClick"];
const _hoisted_2 = {
  key: 1,
  class: "assets-table__sort"
};
const _hoisted_3 = {
  key: 0,
  class: "assets-table__column"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "assets-table__column" };
const _hoisted_6 = { class: "assets-table__asset-icon" };
const _hoisted_7 = { class: "assets-table__asset-info" };
const _hoisted_8 = { class: "assets-table__asset-name" };
const _hoisted_9 = { class: "assets-table__asset-name-subsection" };
const _hoisted_10 = {
  key: 0,
  class: "assets-table__asset-key"
};
const _hoisted_11 = { class: "assets-table__column" };
const _hoisted_12 = {
  key: 0,
  class: "assets-table__actions-wrapper"
};
const _hoisted_13 = {
  key: 0,
  class: "assets-table__row-subsection"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppTooltip = resolveComponent("AppTooltip");
  const _component_ArrowDown = resolveComponent("ArrowDown");
  const _component_CurrencyIcon = resolveComponent("CurrencyIcon");
  const _component_AssetTags = resolveComponent("AssetTags");
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_AssetEarnLink = resolveComponent("AssetEarnLink");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_ActionMenu = resolveComponent("ActionMenu");
  return openBlock(), createElementBlock("div", {
    ref: "table",
    class: normalizeClass(["assets-table", {
      "assets-table--bordered": $props.bordered,
      "assets-table--small": $options.isSmallTable,
      "assets-table--medium": $options.isMediumTable,
      "assets-table--compact": $options.isCompactTable,
      "assets-table--scrollable": $props.scrollable,
      "assets-table--pro": $props.pro
    }])
  }, [
    createBaseVNode("div", {
      class: "assets-table__row assets-table__row--title",
      style: normalizeStyle([$options.gridStyle($options.tableColumns)])
    }, [
      _cache[3] || (_cache[3] = createBaseVNode("div", { class: "assets-table__column" }, "\n        Asset\n      ", -1)),
      _cache[4] || (_cache[4] = createTextVNode()),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.tableColumns, ({ smallTitle, title, slotKey, sortable, description, tooltip }, index) => {
        return openBlock(), createElementBlock("div", {
          key: slotKey,
          class: normalizeClass(["assets-table__column", { "assets-table__title-sortable": sortable }]),
          style: normalizeStyle($options.lastTitleColumnStyle(index)),
          title: description,
          onClick: ($event) => $options.toggleSort(slotKey, sortable)
        }, [
          createBaseVNode("span", {
            class: normalizeClass(["assets-table__title", { "assets-table__title--sort-active": _ctx.currentSort.sortKey === slotKey }])
          }, toDisplayString($options.isSmallTable ? smallTitle || title : title), 3),
          _cache[1] || (_cache[1] = createTextVNode()),
          tooltip ? (openBlock(), createBlock(_component_AppTooltip, {
            key: 0,
            "icon-size": 12,
            icon: "monochrome/info-circle.svg"
          }, {
            default: withCtx(() => [
              createBaseVNode("p", null, toDisplayString(tooltip), 1)
            ]),
            _: 2
          }, 1024)) : createCommentVNode("", true),
          _cache[2] || (_cache[2] = createTextVNode()),
          sortable ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(_component_ArrowDown, {
              class: normalizeClass(["assets-table__sort-icon assets-table__sort-icon--up", { "assets-table__sort-icon--active": _ctx.currentSort.sortKey === slotKey && _ctx.currentSort.direction === "asc" }])
            }, null, 8, ["class"]),
            _cache[0] || (_cache[0] = createTextVNode()),
            createVNode(_component_ArrowDown, {
              class: normalizeClass(["assets-table__sort-icon", { "assets-table__sort-icon--active": _ctx.currentSort.sortKey === slotKey && _ctx.currentSort.direction === "desc" }])
            }, null, 8, ["class"])
          ])) : createCommentVNode("", true)
        ], 14, _hoisted_1$3);
      }), 128)),
      _cache[5] || (_cache[5] = createTextVNode()),
      !$options.isMediumTable && !$props.wideLastTitleColumn ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("", true)
    ], 4),
    _cache[16] || (_cache[16] = createTextVNode()),
    (openBlock(), createBlock(resolveDynamicComponent($options.contentWrapper), {
      "always-visible": "",
      "transparent-rail": false,
      class: "assets-table__content"
    }, {
      default: withCtx(() => [
        $props.loading ? (openBlock(), createElementBlock("ul", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.loadingPlaceholderNum, (n) => {
            return openBlock(), createElementBlock("li", {
              key: n,
              class: "assets-table__row"
            }, _cache[6] || (_cache[6] = [
              createBaseVNode("div", { class: "assets-table__column" }, [
                createBaseVNode("div", { class: "assets-table__asset-icon assets-table__loading-icon" }),
                createTextVNode(),
                createBaseVNode("div", { class: "assets-table__loading-title" })
              ], -1)
            ]));
          }), 128))
        ])) : (openBlock(), createBlock(TransitionGroup, {
          key: 1,
          tag: "ul",
          name: "assets-table__row"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredAssetsWithLink, (asset) => {
              return openBlock(), createElementBlock("li", {
                key: asset.code,
                class: "assets-table__row",
                style: normalizeStyle([$options.gridStyle($options.tableColumns)])
              }, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_BtsLink, {
                    to: asset.link,
                    external: $props.useExternalLinks || !$props.useExternalLinks && !$options.isCrypto(asset.code),
                    class: "assets-table__asset-name-link",
                    title: $options.assetName(asset.code),
                    onClicked: ($event) => $options.trackClick(_ctx.basicWebappEvents.dashboard.watchlistAssetClick, asset.code)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_6, [
                        createVNode(_component_CurrencyIcon, {
                          currency: asset.code,
                          size: 24
                        }, null, 8, ["currency"])
                      ]),
                      _cache[9] || (_cache[9] = createTextVNode()),
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("span", _hoisted_8, toDisplayString($options.assetName(asset.code)), 1),
                        _cache[8] || (_cache[8] = createTextVNode()),
                        createBaseVNode("div", _hoisted_9, [
                          $options.isCrypto(asset.code) ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(asset.code), 1)) : createCommentVNode("", true),
                          _cache[7] || (_cache[7] = createTextVNode()),
                          asset.tags ? (openBlock(), createBlock(_component_AssetTags, {
                            key: 1,
                            class: "assets-table__tags",
                            values: asset.tags,
                            "are-small": $options.isMediumTable
                          }, null, 8, ["values", "are-small"])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to", "external", "title", "onClicked"]),
                  _cache[10] || (_cache[10] = createTextVNode()),
                  asset.optionRewardRate && $options.isEarnPageEnabledForUser ? (openBlock(), createBlock(_component_AssetEarnLink, {
                    key: 0,
                    asset: asset.code,
                    "reward-rate": asset.optionRewardRate,
                    "is-small": $options.isMediumTable || $options.isCompactTable,
                    "is-user-anonymous": $options.anonymous
                  }, null, 8, ["asset", "reward-rate", "is-small", "is-user-anonymous"])) : createCommentVNode("", true)
                ]),
                _cache[13] || (_cache[13] = createTextVNode()),
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.tableColumns, ({ slotKey }) => {
                  return openBlock(), createElementBlock("div", {
                    key: slotKey,
                    class: "assets-table__column"
                  }, [
                    renderSlot(_ctx.$slots, slotKey, {
                      asset,
                      isSmallTable: $options.isSmallTable,
                      toggleSubsection: $options.toggleSubsection
                    }, void 0, true)
                  ]);
                }), 128)),
                _cache[14] || (_cache[14] = createTextVNode()),
                createBaseVNode("div", _hoisted_11, [
                  !$options.isMediumTable ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    $options.canDisplayAssetButton(asset.code) && asset.link ? (openBlock(), createBlock(_component_BtsButton, {
                      key: 0,
                      rounded: false,
                      tiny: "",
                      class: "assets-table__trade-button",
                      bordered: !$options.isCrypto(asset.code),
                      link: asset.link,
                      "external-link": $props.useExternalLinks || !$props.useExternalLinks && !$options.isCrypto(asset.code),
                      onClick: ($event) => $options.trackClick(_ctx.basicWebappEvents.dashboard.watchlistTradeClick, asset.code)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString($options.buttonText(asset.code)), 1)
                      ]),
                      _: 2
                    }, 1032, ["bordered", "link", "external-link", "onClick"])) : createCommentVNode("", true),
                    _cache[11] || (_cache[11] = createTextVNode()),
                    renderSlot(_ctx.$slots, "additionalCommands", {
                      asset: asset.code
                    }, void 0, true)
                  ])) : createCommentVNode("", true),
                  _cache[12] || (_cache[12] = createTextVNode()),
                  $options.isMediumTable && $options.smallGridCommands(asset).length || $props.alwaysDisplayActions ? (openBlock(), createBlock(_component_ActionMenu, {
                    key: 1,
                    options: $options.smallGridCommands(asset),
                    separated: ""
                  }, null, 8, ["options"])) : createCommentVNode("", true)
                ]),
                _cache[15] || (_cache[15] = createTextVNode()),
                _ctx.activeSubsections.includes(asset.code) && $options.isSmallTable ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  renderSlot(_ctx.$slots, "rowSubsection", { asset }, void 0, true)
                ])) : createCommentVNode("", true)
              ], 4);
            }), 128))
          ]),
          _: 3
        }))
      ]),
      _: 3
    }))
  ], 2);
}
const AssetsTable = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-a70f39e1"]]);
const _sfc_main$2 = {
  name: "LastPriceColumn",
  props: {
    priceDisplay: {
      type: String,
      default: ""
    },
    marketCapDisplay: {
      type: String,
      default: ""
    }
  }
};
const _hoisted_1$2 = {
  key: 0,
  class: "market-cap-for-mobile"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", null, toDisplayString($props.priceDisplay), 1),
    _cache[0] || (_cache[0] = createTextVNode()),
    $props.marketCapDisplay ? (openBlock(), createElementBlock("div", _hoisted_1$2, "\n      MCap " + toDisplayString($props.marketCapDisplay), 1)) : createCommentVNode("", true)
  ]);
}
const LastPriceColumn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-026de992"]]);
const _sfc_main$1 = {
  name: "PriceChangeColumn",
  props: {
    asset: {
      type: String,
      default: "BTC",
      required: true
    },
    onlyPercent: {
      type: Boolean,
      default: false
    },
    changeAbsolute: {
      type: Number,
      required: false,
      default: 0
    },
    changeAbsoluteDisplay: {
      type: String,
      required: false,
      default: ""
    },
    changeRelativeDisplay: {
      type: String,
      required: false,
      default: ""
    },
    preferredCurrency: {
      type: String,
      required: false,
      default: null
    }
  },
  setup() {
    return {
      preferredCurrencyStore: usePreferredCurrencyStore()
    };
  },
  computed: {
    isChangeNegative() {
      return this.changeAbsolute < 0;
    },
    isIdentity() {
      if (this.preferredCurrency === null) {
        return this.preferredCurrencyStore.preferredCurrency === this.asset;
      }
      return this.preferredCurrency === this.asset;
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "price-change__value"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return !$options.isIdentity ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["price-change", { "price-change--negative": $options.isChangeNegative }])
  }, [
    createBaseVNode("div", null, toDisplayString($props.changeRelativeDisplay), 1),
    _cache[0] || (_cache[0] = createTextVNode()),
    !$props.onlyPercent ? (openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString($props.changeAbsoluteDisplay), 1)) : createCommentVNode("", true)
  ], 2)) : createCommentVNode("", true);
}
const PriceChangeColumn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-293d6f63"]]);
const _sfc_main = {
  name: "MarketCapColumn",
  props: {
    asset: {
      type: String,
      default: "BTC",
      required: true
    },
    marketCapDisplay: {
      type: String,
      default: ""
    }
  },
  computed: {
    isSpecialEthStakingAsset() {
      return currenciesConstants.SPECIAL_ETH_STAKING_STUFF.includes(this.asset);
    }
  }
};
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return !$options.isSpecialEthStakingAsset ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($props.marketCapDisplay), 1)) : createCommentVNode("", true);
}
const MarketCapColumn = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AssetsTable as A,
  LastPriceColumn as L,
  MarketCapColumn as M,
  PriceChangeColumn as P
};
