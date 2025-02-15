import { _ as _export_sfc, a6 as CONSTANTS, j as resolveComponent, o as openBlock, c as createElementBlock, k as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, e as createCommentVNode } from "./Di9v4FW5.js";
const _sfc_main = {
  name: "ForgotPasswordSlot",
  data() {
    return {
      isDemoMode: CONSTANTS.demoMode ?? false
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "forgot-password-slot"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  return !$data.isDemoMode ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BtsLink, { to: "/onboarding/lost/" }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t("login.forgotPasswordAction")), 1)
      ]),
      _: 1
    })
  ])) : createCommentVNode("", true);
}
const ForgotPasswordSlot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-16a30007"]]);
export {
  ForgotPasswordSlot as default
};
