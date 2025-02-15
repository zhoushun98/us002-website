import { _ as _export_sfc, A as AppIcon, y as resolveComponent, o as openBlock, c as createBlock, J as normalizeClass } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "IconWarning",
  components: { AppIcon },
  props: {
    size: {
      type: String,
      default: "regular",
      validator: (value) => ["small", "regular"].includes(value)
    }
  },
  emits: ["click"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  return openBlock(), createBlock(_component_AppIcon, {
    icon: "monochrome/exclamation.svg",
    class: normalizeClass(`icon icon--${$props.size}`),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, null, 8, ["class"]);
}
const IconWarning = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28638fb3"]]);
export {
  IconWarning as I
};
