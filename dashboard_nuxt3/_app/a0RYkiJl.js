import { o as openBlock, e as createElementBlock, i as createBaseVNode, _ as _export_sfc, a4 as BtsLink, y as resolveComponent, c as createBlock, w as withCtx, f as createVNode, g as createTextVNode, ae as renderSlot, J as normalizeClass } from "./BEpVD-aq.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 12"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M2.5 6 8.1.3l1.4 1.4L5.3 6l4.2 4.3-1.4 1.4z"
    }, null, -1)
  ]));
}
const IconArrowLeft = { render };
const _sfc_main = {
  name: "TopBackLink",
  components: {
    IconArrowLeft,
    BtsLink
  },
  props: {
    link: {
      type: String,
      default: null
    },
    /**
     * Places back link with margin, to align title with previous step / reduces title jump
     */
    isAbovePrimaryTitle: {
      type: Boolean,
      default: false
    },
    external: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconArrowLeft = resolveComponent("IconArrowLeft");
  const _component_BtsLink = resolveComponent("BtsLink");
  return openBlock(), createBlock(_component_BtsLink, {
    class: normalizeClass(["top-navigation", { "top-navigation--above-title": $props.isAbovePrimaryTitle }]),
    to: $props.link,
    external: $props.external,
    onClicked: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, {
    default: withCtx(() => [
      createVNode(_component_IconArrowLeft, { class: "top-navigation__icon" }),
      _cache[1] || (_cache[1] = createTextVNode()),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["class", "to", "external"]);
}
const TopBackLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9c8b7975"]]);
export {
  TopBackLink as T
};
