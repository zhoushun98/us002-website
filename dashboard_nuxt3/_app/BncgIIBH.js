import { _ as _export_sfc, o as openBlock, e as createElementBlock, J as normalizeClass, ae as renderSlot, h as createCommentVNode, g as createTextVNode } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "MarketPanel",
  props: {
    underlinedHeader: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    noTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasHeaderContent() {
      return this.$slots.title || this.$slots.tabs || this.$slots.actions;
    },
    hasTitle() {
      return this.$slots.title;
    },
    hasTabs() {
      return this.$slots.tabs;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "market-panel__title-actions-wrapper flex flex--align-baseline"
};
const _hoisted_2 = {
  key: 0,
  class: "market-panel__title"
};
const _hoisted_3 = {
  key: 1,
  class: "market-panel__tabs"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["market-panel", { "market-panel--no-padding": $props.noPadding }])
  }, [
    $options.hasHeaderContent ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([{ "market-panel__header--underline": $props.underlinedHeader }, "market-panel__header"])
    }, [
      !$props.noTitle ? (openBlock(), createElementBlock("div", _hoisted_1, [
        $options.hasTitle ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "title", {}, void 0, true)
        ])) : createCommentVNode("", true),
        _cache[0] || (_cache[0] = createTextVNode()),
        renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])) : createCommentVNode("", true),
      _cache[1] || (_cache[1] = createTextVNode()),
      $options.hasTabs ? (openBlock(), createElementBlock("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "tabs", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ], 2)) : createCommentVNode("", true),
    _cache[2] || (_cache[2] = createTextVNode()),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
const MarketPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7f5b0feb"]]);
export {
  MarketPanel as M
};
