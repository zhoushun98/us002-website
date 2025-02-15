import { _ as _export_sfc, o as openBlock, e as createElementBlock, i as createBaseVNode, g as createTextVNode, t as toDisplayString, ae as renderSlot, h as createCommentVNode, J as normalizeClass } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "UserDashboardPanel",
  props: {
    title: {
      type: String,
      default: ""
    },
    padded: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: true
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasTitle() {
      return this.title !== "";
    }
  }
};
const _hoisted_1 = { class: "dashboard-panel__title-row" };
const _hoisted_2 = {
  key: 0,
  class: "dashboard-panel__title"
};
const _hoisted_3 = {
  key: 0,
  class: "dashboard-panel__title-link"
};
const _hoisted_4 = { class: "dashboard-panel__actions" };
const _hoisted_5 = {
  key: 0,
  class: "dashboard-panel__footer"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      $options.hasTitle ? (openBlock(), createElementBlock("h2", _hoisted_2, [
        createTextVNode(toDisplayString($props.title) + " ", 1),
        _ctx.$slots.titleLink ? (openBlock(), createElementBlock("span", _hoisted_3, [
          renderSlot(_ctx.$slots, "titleLink", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      _cache[0] || (_cache[0] = createTextVNode()),
      createBaseVNode("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])
    ]),
    _cache[1] || (_cache[1] = createTextVNode()),
    createBaseVNode("div", {
      class: normalizeClass(["dashboard-panel__content", {
        "dashboard-panel__content--padded": $props.padded,
        "dashboard-panel__content--bordered": $props.bordered,
        "dashboard-panel__content--transparent": $props.transparent
      }])
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2),
    _cache[2] || (_cache[2] = createTextVNode()),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "footer", {}, void 0, true)
    ])) : createCommentVNode("", true)
  ]);
}
const UserDashboardPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-67c5825a"]]);
export {
  UserDashboardPanel as U
};
