import { o as openBlock, e as createElementBlock, i as createBaseVNode, _ as _export_sfc, y as resolveComponent, c as createBlock, w as withCtx, b$ as TransitionGroup, as as CURRENCIES, cl as determineDecimalsForAssetPrice, ck as PAIRS, ag as numberFormatter, a0 as Decimal, ax as toDecimal, U as URLService, a9 as addStoreHooks, aa as defineStore, ac as shallowRef, r as ref, ab as useErrorTracking, l as computed, a as axiosInstance } from "./BEpVD-aq.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "currentColor",
      "fill-rule": "evenodd"
    }, [
      createBaseVNode("path", { d: "M14.23 10 12 5.51 9.83 10l-4.91.72 3.55 3.47L7.63 19 12 16.73 16.43 19l-.84-4.89 3.56-3.47zm-1.76-7.65a1 1 0 0 1 .46.46l2.63 5.33 5.88.86a1 1 0 0 1 .84 1.13 1 1 0 0 1-.29.58l-4.25 4.14 1 5.86a1 1 0 0 1-.81 1.16 1 1 0 0 1-.64-.11L12 19l-5.23 2.75a1 1 0 0 1-1.35-.41 1 1 0 0 1-.1-.64l1-5.86-4.25-4.14a1 1 0 0 1 0-1.42A1 1 0 0 1 2.62 9l5.88-.86 2.63-5.33a1 1 0 0 1 1.34-.46" }),
      createBaseVNode("path", { d: "m12 19-5.23 2.75a1 1 0 0 1-1.35-.41 1 1 0 0 1-.1-.64l1-5.86-4.25-4.14a1 1 0 0 1 0-1.42A1 1 0 0 1 2.62 9l5.88-.86 2.63-5.33a1 1 0 0 1 1.34-.46 1 1 0 0 1 .46.46l2.63 5.33 5.88.86a1 1 0 0 1 .84 1.13 1 1 0 0 1-.29.58l-4.25 4.14 1 5.86a1 1 0 0 1-.81 1.16 1 1 0 0 1-.64-.11z" })
    ], -1)
  ]));
}
const StarSelected = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M14.23 10 12 5.51 9.83 10l-4.91.72 3.55 3.47L7.63 19 12 16.73 16.43 19l-.84-4.89 3.56-3.47zm-1.76-7.65a1 1 0 0 1 .46.46l2.63 5.33 5.88.86a1 1 0 0 1 .84 1.13 1 1 0 0 1-.29.58l-4.25 4.14 1 5.86a1 1 0 0 1-.81 1.16 1 1 0 0 1-.64-.11L12 19l-5.23 2.75a1 1 0 0 1-1.35-.41 1 1 0 0 1-.1-.64l1-5.86-4.25-4.14a1 1 0 0 1 0-1.42A1 1 0 0 1 2.62 9l5.88-.86 2.63-5.33a1 1 0 0 1 1.34-.46"
    }, null, -1)
  ]));
}
const StarDeselected = { render };
const _sfc_main = {
  name: "FavouritesStar",
  components: {
    StarSelected,
    StarDeselected
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: ["starClick"],
  data() {
    return {
      internalSelected: false
    };
  },
  computed: {
    isSelected() {
      return this.selected;
    }
  },
  watch: {
    isSelected: {
      handler(val) {
        this.internalSelected = val;
      },
      immediate: true
    }
  },
  methods: {
    click() {
      this.internalSelected = !this.internalSelected;
      setTimeout(() => {
        this.$emit("starClick");
      }, 400);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StarSelected = resolveComponent("StarSelected");
  const _component_StarDeselected = resolveComponent("StarDeselected");
  return openBlock(), createBlock(TransitionGroup, { name: "fav-star" }, {
    default: withCtx(() => [
      $data.internalSelected ? (openBlock(), createBlock(_component_StarSelected, {
        key: "selected",
        class: "fav-star fav-star--selected",
        onClick: $options.click
      }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_StarDeselected, {
        key: "deselected",
        class: "fav-star",
        onClick: $options.click
      }, null, 8, ["onClick"]))
    ]),
    _: 1
  });
}
const FavouritesStar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-486b63ec"]]);
function formatPreferredCurrencyValue({ asset, preferredCurrency, value, rounding = Decimal.ROUND_HALF_UP }) {
  if (!value) {
    return "";
  }
  const preferredCurrencyConfig = CURRENCIES[preferredCurrency];
  const decimals = determineDecimalsForAssetPrice({
    asset,
    priceCurrencyCode: preferredCurrencyConfig.code,
    priceCurrencyDecimals: preferredCurrencyConfig.decimals,
    availablePairs: PAIRS
  });
  return numberFormatter.price({
    value,
    decimals,
    currencySymbol: preferredCurrencyConfig.symbol,
    rounding
  });
}
function parse(availableSupplies) {
  return availableSupplies.reduce((acc, mc) => ({ ...acc, [mc.currency]: toDecimal(mc.availableSupply) }), {});
}
const availableSupplyApi = {
  list(axios) {
    return axios.get(URLService.buildUrl("availableSupply")).then((response) => parse(response.data.data));
  }
};
const useMarketCapStore = addStoreHooks(
  defineStore("marketCapStore", () => {
    const availableSupply = shallowRef({});
    const initialized = ref(false);
    const isLoading = ref(false);
    const $errorTracking = useErrorTracking();
    const marketCap = computed(() => (asset, lastPrice) => {
      const circulation = availableSupply.value[asset];
      if (!lastPrice || !circulation || !circulation.isPositive()) {
        return new Decimal(0);
      }
      return lastPrice.mul(circulation);
    });
    async function _init() {
      if (!initialized.value) {
        await fetchAvailableSupply();
      }
    }
    async function fetchAvailableSupply() {
      if (isLoading.value) {
        return;
      }
      try {
        availableSupply.value = await availableSupplyApi.list(axiosInstance);
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
      isLoading.value = false;
      initialized.value = true;
    }
    return {
      availableSupply,
      initialized,
      marketCap,
      _init
    };
  })
);
export {
  FavouritesStar as F,
  formatPreferredCurrencyValue as f,
  useMarketCapStore as u
};
