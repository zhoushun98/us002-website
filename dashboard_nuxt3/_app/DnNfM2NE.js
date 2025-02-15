import { u as useLocaleStore } from "./C7lY7hB5.js";
import { _ as _export_sfc, o as openBlock, e as createElementBlock, ae as renderSlot } from "./BEpVD-aq.js";
import "./CvedyxjN.js";
const _sfc_main = {
  setup() {
    return {
      localeStore: useLocaleStore()
    };
  },
  mounted() {
    this.$root.name = "Dashboard";
  }
};
const _hoisted_1 = { class: "_app-dashboard" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const tradeview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  tradeview as default
};
