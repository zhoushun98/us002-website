import { _ as _export_sfc, A as AppIcon, aW as usePreferredCurrencyStore, ca as useFavoritesStore, q as useUserStateStore, ai as useEarnStore, as as CURRENCIES, C as CONSTANTS, eq as parseEarnAnnualYield, P as PAGE_CONTEXT, ax as toDecimal, ag as numberFormatter, aj as _, a0 as Decimal, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, F as Fragment, a5 as renderList, J as normalizeClass, g as createTextVNode, t as toDisplayString, h as createCommentVNode, c as createBlock, b as createSlots, w as withCtx, f as createVNode, a as axiosInstance, U as URLService, ah as CurrencyIcon, B as BtsButton, a4 as BtsLink, c8 as simpleAppEvents, ce as assetTradeLink, b3 as withModifiers, c3 as useConversionPathStore, bS as useTickersStore, aw as useMarketsStore, c6 as conversionPathToPriceAndChange, c5 as buildKey, er as isConversionPathValid, af as currenciesConstants, es as PreferredCurrencySelector } from "./BEpVD-aq.js";
import { F as FavouritesStar, u as useMarketCapStore, f as formatPreferredCurrencyValue } from "./AXP0jxv7.js";
import { M as MarketCapColumn, P as PriceChangeColumn, L as LastPriceColumn, A as AssetsTable } from "./DukzpU_4.js";
import { P as PastPerformanceDisclaimer } from "./M-ITQhO8.js";
import { u as useVisibilityStore } from "./ljMJl-cz.js";
import "./CI4CM-Pf.js";
import "./DCuF_7KQ.js";
import "./BMFhygwF.js";
import "./Ptg4BVLI.js";
import "./BwaZ2ET2.js";
const allCategory = "All";
const _sfc_main$3 = {
  name: "MarketAssetsTable",
  components: {
    FavouritesStar,
    AppIcon,
    MarketCapColumn,
    PriceChangeColumn,
    LastPriceColumn,
    AssetsTable
  },
  setup() {
    return {
      preferredCurrencyStore: usePreferredCurrencyStore(),
      marketCapStore: useMarketCapStore(),
      favoritesStore: useFavoritesStore(),
      userStateStore: useUserStateStore(),
      earnStore: useEarnStore()
    };
  },
  data() {
    return {
      isLoading: true,
      linkEnabled: true,
      searchText: "",
      sortType: { sortKey: "marketCap", direction: "desc" },
      customSortActivated: false,
      favouriteDisabledAssets: ["USD"],
      filteredAssets: [],
      activeFilter: allCategory,
      earnYields: {},
      showVaspDisclaimer: this.$constants.showVaspInvestmentRiskWarning
    };
  },
  computed: {
    currencies() {
      const currencies = Object.values(CURRENCIES);
      if (!this.eth2MarketsPageDisabled) {
        return currencies.filter(({ code }) => code !== "ETH2R") ?? [];
      } else {
        return currencies.filter(({ code }) => code !== "ETH2R" && code !== "ETH2") ?? [];
      }
    },
    availableAssets() {
      if (this.filteredAssets.length && !this.searchText) {
        return this.filteredAssets.map((asset) => asset.code);
      }
      if (this.searchText) {
        const searchUpper = this.searchText.toUpperCase();
        let assetsToSearch;
        if (this.filteredAssets.length > 0) {
          assetsToSearch = this.filteredAssets;
        } else {
          assetsToSearch = this.currencies;
        }
        return assetsToSearch.filter(({ code, name }) => code.includes(searchUpper) || name.toUpperCase().includes(searchUpper)).map(({ code }) => code);
      }
      return this.currencies.map(({ code }) => code);
    },
    isAnonymous() {
      return !this.userStateStore.isLoggedIn;
    },
    eth2MarketsPageDisabled() {
      return !CONSTANTS.pairConfig.find((config) => config.pair === "eth2eth");
    },
    categories() {
      const categories = /* @__PURE__ */ new Set();
      categories.add(allCategory);
      this.currencies.forEach((currency) => {
        var _a;
        (_a = currency.categories) == null ? void 0 : _a.forEach((cat) => categories.add(cat));
      });
      if (this.$constants.showVaspInvestmentRiskWarning) {
        categories.delete("Earn");
      }
      return [...categories].sort();
    }
  },
  async created() {
    if (!this.isAnonymous) {
      this.earnYields = parseEarnAnnualYield(this.earnStore.options);
    } else {
      this.earnYields = parseEarnAnnualYield(PAGE_CONTEXT.earnOptions);
    }
    this.isLoading = false;
  },
  methods: {
    assetFormatter(assetsWithPricesAndChanges) {
      var _a;
      for (const asset of assetsWithPricesAndChanges) {
        const marketCap = this.marketCap(asset.code, toDecimal(asset.price));
        const currencySymbol = this.preferredCurrencyStore.symbol;
        const marketCapDisplay = marketCap.isPositive() ? numberFormatter.groupedPrice({
          value: marketCap,
          currencySymbol
        }) : "";
        asset.marketCap = marketCap.toNumber();
        asset.marketCapDisplay = marketCapDisplay;
        if (_.get(PAGE_CONTEXT, `notAvailableLabel.${asset.code}`) && !asset.tags) {
          asset.tags = [{
            id: "usblock",
            text: _.get(PAGE_CONTEXT, `notAvailableLabel.${asset.code}.text`),
            smallText: _.get(PAGE_CONTEXT, `notAvailableLabel.${asset.code}.smallText`)
          }];
        }
        if (!_.isEmpty((_a = this.earnYields) == null ? void 0 : _a.earnAnnualYield) && this.earnYields.earnAnnualYield[asset.code]) {
          asset.optionRewardRate = this.earnYields.earnAnnualYield[asset.code];
        }
      }
      if (!this.customSortActivated) {
        let favs = assetsWithPricesAndChanges.filter((asset) => this.favoritesStore.favoriteAssets[asset.code]);
        let rest = assetsWithPricesAndChanges.filter((asset) => !this.favoritesStore.favoriteAssets[asset.code]);
        favs = _.orderBy(favs, this.sortType.sortKey, this.sortType.direction);
        rest = _.orderBy(rest, this.sortType.sortKey, this.sortType.direction);
        return [...favs, ...rest];
      }
      return _.orderBy(assetsWithPricesAndChanges, this.sortType.sortKey, this.sortType.direction);
    },
    marketCap(assetCode, lastPrice) {
      const circulation = this.marketCapStore.availableSupply[assetCode];
      if (!lastPrice || !circulation || !circulation.isPositive()) {
        return new Decimal(0);
      }
      return lastPrice.mul(circulation);
    },
    toggleSort(sort) {
      this.customSortActivated = true;
      this.sortType = sort;
    },
    filterList(category) {
      this.activeFilter = category;
      this.filteredAssets = this.currencies.filter((currency) => currency.categories.includes(category));
    },
    // Display live count of filtered results in all categories
    countResults(categoryFilter) {
      if (this.searchText) {
        const allCurrencies = this.currencies;
        const searchUpper = this.searchText.toUpperCase();
        let availableAssetsInCategory = allCurrencies;
        if (categoryFilter !== allCategory) {
          availableAssetsInCategory = allCurrencies.filter((currency) => currency.categories.includes(categoryFilter));
        }
        return availableAssetsInCategory.filter(
          (asset) => asset.code.includes(searchUpper) || asset.name.toUpperCase().includes(searchUpper)
        ).length;
      }
      return null;
    },
    clearSearch() {
      this.searchText = "";
    }
  }
};
const _hoisted_1$3 = { class: "categories" };
const _hoisted_2$3 = ["onClick"];
const _hoisted_3$3 = { class: "favourites" };
const _hoisted_4$3 = { class: "favourites__search" };
const _hoisted_5$2 = { class: "col favourites__search-wrapper" };
const _hoisted_6 = ["value", "disabled"];
const _hoisted_7 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_8 = { class: "empty-state__text empty-state__text--bold" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_MarketCapColumn = resolveComponent("MarketCapColumn");
  const _component_LastPriceColumn = resolveComponent("LastPriceColumn");
  const _component_PriceChangeColumn = resolveComponent("PriceChangeColumn");
  const _component_FavouritesStar = resolveComponent("FavouritesStar");
  const _component_AssetsTable = resolveComponent("AssetsTable");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.categories, (category) => {
        return openBlock(), createElementBlock("button", {
          key: category,
          class: normalizeClass(["categories__button", { "categories__button--active": $data.activeFilter === category }]),
          onClick: ($event) => $options.filterList(category)
        }, [
          createTextVNode(toDisplayString(category) + " ", 1),
          $data.searchText ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode("\n          (" + toDisplayString($options.countResults(category)) + ")\n        ", 1)
          ], 64)) : createCommentVNode("", true)
        ], 10, _hoisted_2$3);
      }), 128))
    ]),
    _cache[8] || (_cache[8] = createTextVNode()),
    createBaseVNode("div", _hoisted_3$3, [
      createBaseVNode("div", _hoisted_4$3, [
        createBaseVNode("label", _hoisted_5$2, [
          !$data.searchText ? (openBlock(), createBlock(_component_AppIcon, {
            key: 0,
            icon: "monochrome/search.svg",
            size: "12"
          })) : (openBlock(), createBlock(_component_AppIcon, {
            key: 1,
            icon: "monochrome/close.svg",
            size: "12",
            class: "favourites__close-icon",
            onClick: $options.clearSearch
          }, null, 8, ["onClick"])),
          _cache[1] || (_cache[1] = createTextVNode()),
          createBaseVNode("input", {
            value: $data.searchText,
            type: "text",
            placeholder: "Search assets",
            class: "unset-global-style favourites__search-input",
            disabled: $data.isLoading,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.searchText = $event.target.value)
          }, null, 40, _hoisted_6)
        ])
      ]),
      _cache[7] || (_cache[7] = createTextVNode()),
      $options.availableAssets.length ? (openBlock(), createBlock(_component_AssetsTable, {
        key: 0,
        columns: [
          {
            title: "Market Cap",
            slotKey: "marketCap",
            hideOnSmall: true,
            sortable: true,
            description: "The total circulating supply of a currency multiplied with the current price."
          },
          { title: "Last price", slotKey: "price", sortable: true },
          { title: "24h change", smallTitle: "% 24h", slotKey: "changeRelative", sortable: true }
        ],
        "use-external-links": false,
        assets: $options.availableAssets,
        "asset-formatter": $options.assetFormatter,
        "default-sort": $data.sortType,
        loading: $data.isLoading,
        bordered: false,
        "break-point": 650,
        "action-width": $options.isAnonymous ? "140px" : "176px",
        "additional-actions": $options.isAnonymous ? [] : [{
          id: "favAction",
          text: (assetCode) => $setup.favoritesStore.favoriteAssets[assetCode] ? "Unwatch" : "Watch",
          emit: "toggleFavoriteAsset"
        }],
        "custom-button-text-fn": $data.showVaspDisclaimer ? (asset) => asset : void 0,
        onToggleSort: $options.toggleSort
      }, createSlots({
        marketCap: withCtx(({ asset }) => [
          createVNode(_component_MarketCapColumn, {
            asset: asset.code,
            "market-cap-display": asset.marketCapDisplay
          }, null, 8, ["asset", "market-cap-display"])
        ]),
        price: withCtx(({ asset }) => [
          createVNode(_component_LastPriceColumn, {
            asset: asset.code,
            "price-display": asset.priceDisplay,
            "market-cap-display": asset.marketCapDisplay
          }, null, 8, ["asset", "price-display", "market-cap-display"])
        ]),
        changeRelative: withCtx(({ asset }) => [
          createVNode(_component_PriceChangeColumn, {
            asset: asset.code,
            "change-absolute": asset.changeAbsolute,
            "change-absolute-display": asset.changeAbsoluteDisplay,
            "change-relative-display": asset.changeRelativeDisplay
          }, null, 8, ["asset", "change-absolute", "change-absolute-display", "change-relative-display"])
        ]),
        _: 2
      }, [
        !$options.isAnonymous ? {
          name: "additionalCommands",
          fn: withCtx(({ asset: assetCode }) => [
            createBaseVNode("div", {
              class: normalizeClass(["favourites__icon-holder", { "favourites__icon-holder--no-star": $data.favouriteDisabledAssets.includes(assetCode) }])
            }, [
              createVNode(_component_FavouritesStar, {
                selected: $setup.favoritesStore.favoriteAssets[assetCode],
                onStarClick: ($event) => $setup.favoritesStore.toggleAsset(assetCode)
              }, null, 8, ["selected", "onStarClick"])
            ], 2)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["assets", "asset-formatter", "default-sort", "loading", "action-width", "additional-actions", "custom-button-text-fn", "onToggleSort"])) : (openBlock(), createElementBlock("div", _hoisted_7, [
        createBaseVNode("div", _hoisted_8, '\n          No results for "' + toDisplayString($data.searchText) + '"\n        ', 1),
        _cache[5] || (_cache[5] = createTextVNode()),
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "empty-state__text" }, [
          createTextVNode("\n          We couldn't find anything matching your search.\n          "),
          createBaseVNode("br"),
          createTextVNode("Try again with a different term.\n        ")
        ], -1))
      ]))
    ])
  ]);
}
const MarketAssetsTable = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-736fe37f"]]);
const PopularAssetsApi = {
  get() {
    return axiosInstance.get(URLService.buildUrl("popularAssets")).then((response) => response.data.data);
  }
};
const _sfc_main$2 = {
  name: "AssetCardRow",
  components: { CurrencyIcon, BtsButton, BtsLink },
  props: {
    assetCode: {
      type: String,
      required: true
    },
    price: {
      type: Object,
      required: true
    },
    percentChange: {
      type: Object,
      required: true
    },
    metric: {
      type: String,
      default: null
    },
    isUkVersionActive: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      preferredCurrencyStore: usePreferredCurrencyStore()
    };
  },
  data() {
    return {
      basicWebappEvents: simpleAppEvents
    };
  },
  computed: {
    formattedPrice() {
      return formatPreferredCurrencyValue({
        asset: this.assetCode,
        value: this.price,
        preferredCurrency: this.preferredCurrencyStore.preferredCurrency
      });
    },
    formattedPercentChange() {
      return numberFormatter.percentageChange(this.percentChange ?? new Decimal("0"));
    },
    isPositiveChange() {
      return this.percentChange.isPositive();
    },
    tradeLink() {
      return assetTradeLink(this.assetCode, this.preferredCurrencyStore.preferredCurrency, false);
    },
    buttonText() {
      return this.isUkVersionActive ? this.$t("components.markets.assetRow.viewButtonText") : this.$t("components.markets.assetRow.tradeButtonText");
    }
  },
  methods: {
    trackClick(event) {
      this.$track(event, {
        assetCode: this.assetCode,
        categoryCode: this.metric
      });
    }
  }
};
const _hoisted_1$2 = { class: "asset-card-row__icon-and-name" };
const _hoisted_2$2 = { class: "asset-card-row__price-container" };
const _hoisted_3$2 = {
  key: 0,
  class: "asset-card-row__price asset-card-row__price--value"
};
const _hoisted_4$2 = { class: "asset-card-row__button-container" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrencyIcon = resolveComponent("CurrencyIcon");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_BtsLink = resolveComponent("BtsLink");
  return openBlock(), createBlock(_component_BtsLink, {
    class: "asset-card-row",
    to: $options.tradeLink,
    onClick: _cache[1] || (_cache[1] = ($event) => $options.trackClick($data.basicWebappEvents.markets.topListsAssetRowClick))
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$2, [
        createVNode(_component_CurrencyIcon, {
          currency: $props.assetCode,
          size: 24
        }, null, 8, ["currency"]),
        _cache[2] || (_cache[2] = createTextVNode()),
        createBaseVNode("span", null, toDisplayString($props.assetCode), 1)
      ]),
      _cache[4] || (_cache[4] = createTextVNode()),
      createBaseVNode("div", _hoisted_2$2, [
        $props.price !== null ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString($options.formattedPrice), 1)) : createCommentVNode("", true),
        _cache[3] || (_cache[3] = createTextVNode()),
        createBaseVNode("div", {
          class: normalizeClass(["asset-card-row__price", {
            "asset-card-row__price--positive": $options.isPositiveChange,
            "asset-card-row__price--negative": !$options.isPositiveChange
          }])
        }, toDisplayString($options.formattedPercentChange), 3)
      ]),
      _cache[5] || (_cache[5] = createTextVNode()),
      createBaseVNode("div", _hoisted_4$2, [
        createVNode(_component_BtsButton, {
          rounded: false,
          tiny: "",
          class: "asset-card-row__button",
          link: $options.tradeLink,
          "external-link": false,
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.trackClick($data.basicWebappEvents.markets.topListsAssetButtonClick), ["stop"]))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($options.buttonText), 1)
          ]),
          _: 1
        }, 8, ["link"])
      ])
    ]),
    _: 1
  }, 8, ["to"]);
}
const AssetCardRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-7a4d0e36"]]);
const _sfc_main$1 = {
  name: "AssetOverview",
  components: { AppIcon, AssetCardRow, PastPerformanceDisclaimer },
  setup() {
    return {
      conversionPathStore: useConversionPathStore(),
      preferredCurrencyStore: usePreferredCurrencyStore(),
      visibilityStore: useVisibilityStore(),
      userStateStore: useUserStateStore(),
      tickersStore: useTickersStore(),
      marketsStore: useMarketsStore()
    };
  },
  data() {
    return {
      assetsToDisplay: {},
      isLoaded: false,
      selectedCategory: null,
      isSmallView: false,
      isUkVersionActive: this.$constants.showVaspInvestmentRiskWarning
    };
  },
  computed: {
    tickerData() {
      const tickerData = {};
      this.visibleAssets.forEach((asset) => {
        const assetData = conversionPathToPriceAndChange(asset.conversionPath, this.tickersStore.tickers);
        tickerData[asset.code] = {
          price: assetData.price,
          change24: assetData.change.relative || new Decimal("0")
        };
      });
      return tickerData;
    },
    visibleAssets() {
      const validAssets = Object.values(this.assetsToDisplay).reduce((allAssets, assets) => {
        allAssets.push(...assets);
        return allAssets;
      }, []);
      return _.uniq(validAssets);
    },
    visibleCategories() {
      return this.categories.filter((category) => this.assetsToDisplay[category.key].length > 0);
    },
    smallVisibleCategories() {
      if (this.isSmallView) {
        return [this.selectedCategory];
      }
      return this.visibleCategories;
    },
    anonymous() {
      return !this.userStateStore.isLoggedIn;
    },
    categories() {
      const useAlternativeTitles = this.isUkVersionActive;
      return [
        {
          key: "gainers",
          title: useAlternativeTitles ? this.$t("components.markets.assetOverview.bestPerformingAssetsAlternativeText") : this.$t("components.markets.assetOverview.bestPerformingAssetsTitle"),
          smallTitle: useAlternativeTitles ? this.$t("components.markets.assetOverview.bestPerformingAssetsSmallAlternativeTitle") : this.$t("components.markets.assetOverview.bestPerformingAssetsSmallTitle"),
          icon: "monochrome/arrow-up-right.svg",
          iconClassModifier: "asset-overview__title-icon--positive"
        },
        {
          key: "losers",
          title: useAlternativeTitles ? this.$t("components.markets.assetOverview.worstPerformingAssetsAlternativeTitle") : this.$t("components.markets.assetOverview.worstPerformingAssetsTitle"),
          smallTitle: useAlternativeTitles ? this.$t("components.markets.assetOverview.worstPerformingAssetsAlternativeSmallTitle") : this.$t("components.markets.assetOverview.worstPerformingAssetsSmallTitle"),
          icon: "monochrome/arrow-down-right.svg",
          iconClassModifier: "asset-overview__title-icon--negative"
        },
        {
          key: "lastListed",
          title: this.$t("components.markets.assetOverview.lastListedTitle"),
          icon: "monochrome/clock.svg"
        }
      ];
    }
  },
  created() {
    this.selectedCategory = this.categories[0];
    this.calculateAssetsForDisplay();
  },
  mounted() {
    this.handleWidth();
    window.addEventListener("resize", this.handleWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleWidth);
  },
  methods: {
    async fetchPopularAssets() {
      return await PopularAssetsApi.get();
    },
    processAssets(assets) {
      const finalAssets = [];
      let i = 0;
      while (finalAssets.length < 3 && i < assets.length) {
        const asset = assets[i];
        const conversionPathKey = buildKey(asset, this.preferredCurrencyStore.preferredCurrency);
        if (!(conversionPathKey in this.conversionPathStore.conversionPaths)) {
          i++;
          continue;
        }
        const conversionPath = this.conversionPathStore.conversionPaths[conversionPathKey];
        if (isConversionPathValid(conversionPath.path, this.marketsStore.spotMarkets, this.tickersStore.tickers)) {
          if (asset in CURRENCIES) {
            finalAssets.push({
              code: asset,
              conversionPath
            });
          } else {
            this.$errorTracking.trackException(`Currency ${asset} not available, but pair ${conversionPathKey} is available`);
          }
        }
        i++;
      }
      return finalAssets;
    },
    async calculateAssetsForDisplay() {
      const popularAssets = await this.fetchPopularAssets();
      this.assetsToDisplay.lastListed = this.processAssets(popularAssets.lastListed);
      const usableAssets = Object.entries(CURRENCIES).filter(([, data]) => this.isCurrencyValid(data)).reduce((list, [asset]) => {
        const conversionPathKey = buildKey(asset, this.preferredCurrencyStore.preferredCurrency);
        const conversionPath = this.conversionPathStore.conversionPaths[conversionPathKey];
        if (isConversionPathValid(conversionPath.path, this.marketsStore.spotMarkets, this.tickersStore.tickers)) {
          const { change } = conversionPathToPriceAndChange(conversionPath, this.tickersStore.tickers);
          if (change && change.relative) {
            list.push({
              code: asset,
              change: change.relative || new Decimal("0"),
              conversionPath
            });
          }
        }
        return list;
      }, []).sort((a, b) => a.change.comparedTo(b.change));
      this.assetsToDisplay.losers = usableAssets.slice(0, 3);
      this.assetsToDisplay.gainers = usableAssets.slice(-3).reverse();
      this.isLoaded = true;
    },
    isCurrencyValid(currency) {
      return currency.type === "crypto" && !currenciesConstants.STABLE_COINS.includes(currency.code) && !currenciesConstants.SPECIAL_ETH_STAKING_STUFF.includes(currency.code);
    },
    handleWidth() {
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.isSmallView = this.$refs.assetCards && this.$refs.assetCards.clientWidth <= 928;
        });
      });
    }
  }
};
const _hoisted_1$1 = { ref: "assetCards" };
const _hoisted_2$1 = {
  key: 0,
  class: "category-selector"
};
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "asset-overview__card" };
const _hoisted_5$1 = {
  key: 0,
  class: "asset-overview__title"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_AssetCardRow = resolveComponent("AssetCardRow");
  const _component_PastPerformanceDisclaimer = resolveComponent("PastPerformanceDisclaimer");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $data.isLoaded ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $data.isSmallView ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleCategories, (category) => {
          return openBlock(), createElementBlock("div", {
            key: category.key,
            class: normalizeClass(["category-selector__choice", { "category-selector__choice--selected": category.key === $data.selectedCategory.key }]),
            onClick: ($event) => $data.selectedCategory = category
          }, [
            createBaseVNode("span", null, toDisplayString(category.smallTitle || category.title), 1)
          ], 10, _hoisted_3$1);
        }), 128))
      ])) : createCommentVNode("", true),
      _cache[1] || (_cache[1] = createTextVNode()),
      createBaseVNode("div", {
        class: normalizeClass(["asset-overview", { "asset-overview--small": $data.isSmallView }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.smallVisibleCategories, (category) => {
          return openBlock(), createElementBlock("div", {
            key: category.key,
            class: "asset-overview__category"
          }, [
            createBaseVNode("div", _hoisted_4$1, [
              !$data.isSmallView ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                createTextVNode(toDisplayString(category.title) + " ", 1),
                createVNode(_component_AppIcon, {
                  class: normalizeClass(["asset-overview__title-icon'", category.iconClassModifier]),
                  icon: category.icon,
                  size: 20
                }, null, 8, ["class", "icon"])
              ])) : createCommentVNode("", true),
              _cache[0] || (_cache[0] = createTextVNode()),
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.assetsToDisplay[category.key], (asset) => {
                return openBlock(), createBlock(_component_AssetCardRow, {
                  key: asset.code,
                  "asset-code": asset.code,
                  "conversion-path": asset.conversionPath,
                  "is-data-loaded": $data.isLoaded,
                  metric: category.key,
                  "is-vasp-active": $data.isUkVersionActive,
                  price: $options.tickerData[asset.code].price,
                  "percent-change": $options.tickerData[asset.code].change24
                }, null, 8, ["asset-code", "conversion-path", "is-data-loaded", "metric", "is-vasp-active", "price", "percent-change"]);
              }), 128))
            ])
          ]);
        }), 128))
      ], 2),
      _cache[2] || (_cache[2] = createTextVNode()),
      createVNode(_component_PastPerformanceDisclaimer)
    ], 64)) : createCommentVNode("", true)
  ], 512);
}
const AssetOverview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-f60e7ca9"]]);
const _sfc_main = {
  components: {
    AssetOverview,
    MarketAssetsTable,
    PreferredCurrencySelector
  },
  setup() {
    return {
      userStateStore: useUserStateStore()
    };
  },
  data() {
    return {
      URLService
    };
  },
  computed: {
    isMobile() {
      return this.$isSmall.value || this.$isMedium.value;
    },
    anonymous() {
      return !this.userStateStore.isLoggedIn;
    }
  }
};
const _hoisted_1 = { "data-test": "marketsOverview" };
const _hoisted_2 = { class: "markets-header" };
const _hoisted_3 = {
  key: 0,
  class: "markets-header__selector"
};
const _hoisted_4 = { class: "markets-section" };
const _hoisted_5 = { class: "markets-section markets-section--top-spacer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PreferredCurrencySelector = resolveComponent("PreferredCurrencySelector");
  const _component_AssetOverview = resolveComponent("AssetOverview");
  const _component_MarketAssetsTable = resolveComponent("MarketAssetsTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "markets-header__title" }, "\n        Markets\n      ", -1)),
      _cache[1] || (_cache[1] = createTextVNode()),
      $options.anonymous ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createVNode(_component_PreferredCurrencySelector, {
          class: "user-menu__currency-selector",
          "show-label": false
        })
      ])) : createCommentVNode("", true)
    ]),
    _cache[2] || (_cache[2] = createTextVNode()),
    createBaseVNode("section", _hoisted_4, [
      createVNode(_component_AssetOverview)
    ]),
    _cache[3] || (_cache[3] = createTextVNode()),
    createBaseVNode("section", _hoisted_5, [
      createVNode(_component_MarketAssetsTable)
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c01b47f"]]);
export {
  index as default
};
