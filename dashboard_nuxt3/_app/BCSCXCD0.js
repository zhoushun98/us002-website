import { _ as _export_sfc, o as openBlock, e as createElementBlock, ae as renderSlot, f as createVNode, d as unref, aT as ThemeBasedImage, h as createCommentVNode, g as createTextVNode, J as normalizeClass } from "./BEpVD-aq.js";
const _hoisted_1 = { class: "default-content" };
const _hoisted_2 = {
  key: 0,
  class: "default-content__image"
};
const _hoisted_3 = ["data-test"];
const _hoisted_4 = ["data-test"];
const _hoisted_5 = {
  key: 3,
  class: "default-content__actions"
};
const _sfc_main = {
  __name: "DefaultContentLayout",
  props: {
    /**
     * Path to image used on dark theme inside shared/assets/images/ directory
     * Example: light="some-feature/logo--light.png"
     */
    imageDark: {
      type: String,
      default: void 0
    },
    /**
     * Path to image used on dark theme inside shared/assets/images/ directory
     * Example: light="some-feature/logo--light.png"
     */
    imageLight: {
      type: String,
      default: void 0
    },
    titleDataTestId: {
      type: String,
      default: void 0
    },
    textDataTestId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.image || __props.imageLight && props.imageDark ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "image", {}, () => [
            createVNode(unref(ThemeBasedImage), {
              dark: props.imageDark,
              light: props.imageLight
            }, null, 8, ["dark", "light"])
          ], true)
        ])) : createCommentVNode("", true),
        _cache[0] || (_cache[0] = createTextVNode()),
        _ctx.$slots.title ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "default-content__title",
          "data-test": props.titleDataTestId
        }, [
          renderSlot(_ctx.$slots, "title", {}, void 0, true)
        ], 8, _hoisted_3)) : createCommentVNode("", true),
        _cache[1] || (_cache[1] = createTextVNode()),
        _ctx.$slots.text ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(["default-content__text", { "default-content__text--bottom-space": _ctx.$slots.actions }]),
          "data-test": props.textDataTestId
        }, [
          renderSlot(_ctx.$slots, "text", {}, void 0, true)
        ], 10, _hoisted_4)) : createCommentVNode("", true),
        _cache[2] || (_cache[2] = createTextVNode()),
        _ctx.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const DefaultContentLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccbbe2f2"]]);
export {
  DefaultContentLayout as D
};
