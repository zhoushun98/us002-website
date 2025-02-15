import { L as Loading } from "./DQjdLM2K.js";
import { _ as _export_sfc, y as resolveComponent, o as openBlock, e as createElementBlock, J as normalizeClass, i as createBaseVNode, ae as renderSlot, g as createTextVNode, h as createCommentVNode, f as createVNode, b as createSlots, w as withCtx } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "ContentContainer",
  components: { Loading },
  props: {
    loadingFinished: {
      type: Boolean,
      default: false
    },
    justifyCenter: {
      type: Boolean,
      default: true
    },
    enableMinHeight: {
      type: Boolean,
      default: true
    },
    hasError: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    showBody: {
      type: Boolean,
      default: true
    },
    titleType: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary"].includes(value)
    }
  }
};
const _hoisted_1 = { class: "content-main" };
const _hoisted_2 = {
  key: 0,
  class: "content-main__buttons"
};
const _hoisted_3 = {
  key: 0,
  class: "content-body__inner-title"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.$slots.title ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["content-main__header", `content-main__header--title-${$props.titleType}`])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["content-main__title", `content-main__title--${$props.titleType}`])
      }, [
        renderSlot(_ctx.$slots, "title", {}, void 0, true)
      ], 2),
      _cache[0] || (_cache[0] = createTextVNode()),
      _ctx.$slots.buttons ? (openBlock(), createElementBlock("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "buttons", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ], 2)) : createCommentVNode("", true),
    _cache[4] || (_cache[4] = createTextVNode()),
    renderSlot(_ctx.$slots, "notice", {}, void 0, true),
    _cache[5] || (_cache[5] = createTextVNode()),
    $props.showBody ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["content-body", {
        "content-body--justify-center": $props.justifyCenter || !$props.loadingFinished,
        "content-body--large-screen-min-height": $props.enableMinHeight,
        "content-body--padding-none": !$props.padded
      }])
    }, [
      _ctx.$slots.innerTitle && !$props.hasError ? (openBlock(), createElementBlock("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "innerTitle", {}, void 0, true)
      ])) : createCommentVNode("", true),
      _cache[3] || (_cache[3] = createTextVNode()),
      createVNode(_component_Loading, {
        "loading-finished": $props.loadingFinished,
        "has-error": $props.hasError
      }, createSlots({
        errorTitle: withCtx(() => [
          renderSlot(_ctx.$slots, "errorTitle", {}, void 0, true)
        ]),
        errorBody: withCtx(() => [
          renderSlot(_ctx.$slots, "errorBody", {}, void 0, true)
        ]),
        _: 2
      }, [
        !$props.hasError ? {
          name: "body",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "body", {}, void 0, true)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["loading-finished", "has-error"])
    ], 2)) : createCommentVNode("", true)
  ]);
}
const ContentContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4b6261b9"]]);
export {
  ContentContainer as C
};
