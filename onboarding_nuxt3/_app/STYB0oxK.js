import { G as GeneralNotification } from "./DskNJVja.js";
import { _ as _export_sfc, u as useOnboardingFlowStore, j as resolveComponent, o as openBlock, c as createElementBlock, b as createBlock, w as withCtx, a as createBaseVNode, t as toDisplayString, e as createCommentVNode } from "./Di9v4FW5.js";
const _sfc_main = {
  name: "LoginHeader",
  components: {
    GeneralNotification
  },
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  },
  data() {
    return {
      isAccountCreated: false
    };
  },
  mounted() {
    if (this.$router.currentRoute.value.query.reg === "t") {
      this.isAccountCreated = true;
    }
  }
};
const _hoisted_1 = { class: "login-header" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_GeneralNotification = resolveComponent("GeneralNotification");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $data.isAccountCreated ? (openBlock(), createBlock(_component_GeneralNotification, {
      key: 0,
      "notification-type": "success",
      class: "success-notice",
      "view-break": 400
    }, {
      default: withCtx(() => [
        $setup.onboardingFlowStore.registeredUserId ? (openBlock(), createBlock(_component_i18n_t, {
          key: 0,
          tag: "span",
          scope: "global",
          keypath: "login.accountCreatedNotice"
        }, {
          default: withCtx(() => [
            createBaseVNode("strong", null, toDisplayString($setup.onboardingFlowStore.registeredUserId), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const LoginHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bb40598b"]]);
export {
  LoginHeader as default
};
