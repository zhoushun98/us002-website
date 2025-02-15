import { _ as _export_sfc, S as Spinner, bn as _imports_0, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, g as createTextVNode, ae as renderSlot, h as createCommentVNode, J as normalizeClass, f as createVNode } from "./BEpVD-aq.js";
const _sfc_main = {
  components: { Spinner },
  props: {
    loadingFinished: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    fullSize: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      ErrorSvg: _imports_0
    };
  }
};
const _hoisted_1 = { class: "error__container" };
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 0,
  class: "error__title"
};
const _hoisted_4 = {
  key: 1,
  class: "error__message"
};
const _hoisted_5 = {
  key: 1,
  class: "body"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Spinner = resolveComponent("Spinner");
  return $props.hasError && $props.loadingFinished ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["error", { "full-size": $props.fullSize }])
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("img", {
        class: "error__image",
        src: $setup.ErrorSvg,
        alt: "Error"
      }, null, 8, _hoisted_2),
      _cache[0] || (_cache[0] = createTextVNode()),
      _ctx.$slots.errorTitle ? (openBlock(), createElementBlock("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "errorTitle", {}, void 0, true)
      ])) : createCommentVNode("", true),
      _cache[1] || (_cache[1] = createTextVNode()),
      _ctx.$slots.errorBody ? (openBlock(), createElementBlock("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "errorBody", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ])
  ], 2)) : $props.loadingFinished ? (openBlock(), createElementBlock("div", _hoisted_5, [
    renderSlot(_ctx.$slots, "body", {}, void 0, true)
  ])) : (openBlock(), createElementBlock("div", {
    key: 2,
    class: normalizeClass({ "full-size": $props.fullSize })
  }, [
    createVNode(_component_Spinner)
  ], 2));
}
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7af67e5a"]]);
export {
  Loading as L
};
