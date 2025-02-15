import { _ as _export_sfc, dS as vaspDisclaimerConstants, o as openBlock, e as createElementBlock, t as toDisplayString, J as normalizeClass, h as createCommentVNode } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "PastPerformanceDisclaimer",
  props: {
    pro: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: this.$constants.showVaspInvestmentRiskWarning ?? false,
      text: vaspDisclaimerConstants.PAST_PERFORMANCE_TEXT
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isActive ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["disclaimer", { "disclaimer--pro": $props.pro }])
  }, toDisplayString(_ctx.$tt($data.text)), 3)) : createCommentVNode("", true);
}
const PastPerformanceDisclaimer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9c585601"]]);
export {
  PastPerformanceDisclaimer as P
};
