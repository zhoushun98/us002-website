import { _ as _export_sfc, B as BtsButton, u as useOnboardingFlowStore, i as constants, j as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, d as createTextVNode, k as createVNode, w as withCtx, b as createBlock, aG as withModifiers } from "./Di9v4FW5.js";
const _sfc_main = {
  name: "CorpoPersonalAccountSwitchers",
  components: {
    BtsButton
  },
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  },
  computed: {
    isCorpoFlow() {
      return this.onboardingFlowStore.isCorpo;
    }
  },
  methods: {
    openCorpoAccountCreation() {
      this.onboardingFlowStore.initializeRegistration({
        accountType: constants.ACCOUNT_TYPE.CORPORATE
      });
    },
    openPersonalAccountCreation() {
      this.onboardingFlowStore.initializeRegistration({
        accountType: constants.ACCOUNT_TYPE.PERSONAL
      });
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "create-corpo-account"
};
const _hoisted_2 = { class: "create-corpo-account__title" };
const _hoisted_3 = { class: "create-corpo-account__body" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_i18n_t = resolveComponent("i18n-t");
  return !$options.isCorpoFlow ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("register.corpoPersonalAccountSwitcher.title")), 1),
      _cache[1] || (_cache[1] = createTextVNode()),
      createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("register.corpoPersonalAccountSwitcher.body")), 1)
    ]),
    _cache[2] || (_cache[2] = createTextVNode()),
    createVNode(_component_BtsButton, {
      class: "create-corpo-account__button",
      secondary: "",
      tiny: "",
      onClick: $options.openCorpoAccountCreation
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t("register.corpoPersonalAccountSwitcher.openButton")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ])) : (openBlock(), createBlock(_component_i18n_t, {
    key: 1,
    tag: "div",
    keypath: "register.backToPersonalOnboarding",
    class: "personal-onboarding"
  }, {
    "personal-onboarding-link": withCtx(() => [
      createBaseVNode("a", {
        class: "personal-onboarding__link",
        href: "#",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.openPersonalAccountCreation && $options.openPersonalAccountCreation(...args), ["prevent"]))
      }, toDisplayString(_ctx.$t("register.personalOnboardingLink")), 1)
    ]),
    _: 1
  }));
}
const CorpoPersonalAccountSwitcher = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e229f30c"]]);
export {
  CorpoPersonalAccountSwitcher as default
};
