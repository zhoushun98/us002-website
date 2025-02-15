import { _ as _export_sfc, o as openBlock, c as createElementBlock, $ as renderSlot, e as createCommentVNode, d as createTextVNode, a as createBaseVNode } from "./Di9v4FW5.js";
const _sfc_main = {};
const _hoisted_1 = { class: "info" };
const _hoisted_2 = {
  key: 0,
  class: "info__title"
};
const _hoisted_3 = {
  key: 1,
  class: "info__sub-title"
};
const _hoisted_4 = { class: "info__text-title" };
const _hoisted_5 = { class: "info__text" };
const _hoisted_6 = { closs: "info__action" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "title", {}, void 0, true)
    ])) : createCommentVNode("", true),
    _cache[0] || (_cache[0] = createTextVNode()),
    _ctx.$slots["sub-title"] ? (openBlock(), createElementBlock("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "sub-title", {}, void 0, true)
    ])) : createCommentVNode("", true),
    _cache[1] || (_cache[1] = createTextVNode()),
    createBaseVNode("div", null, [
      renderSlot(_ctx.$slots, "image", {}, void 0, true)
    ]),
    _cache[2] || (_cache[2] = createTextVNode()),
    createBaseVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "text-title", {}, void 0, true)
    ]),
    _cache[3] || (_cache[3] = createTextVNode()),
    createBaseVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "text", {}, void 0, true)
    ]),
    _cache[4] || (_cache[4] = createTextVNode()),
    createBaseVNode("div", _hoisted_6, [
      renderSlot(_ctx.$slots, "action", {}, void 0, true)
    ])
  ]);
}
const Info = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4570fd16"]]);
export {
  Info as I
};
