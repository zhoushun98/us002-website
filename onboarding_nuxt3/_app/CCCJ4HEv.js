import { _ as _export_sfc, u as useOnboardingFlowStore, j as resolveComponent, o as openBlock, c as createElementBlock, t as toDisplayString, d as createTextVNode, b as createBlock, w as withCtx, e as createCommentVNode, k as createVNode } from "./Di9v4FW5.js";
const _sfc_main = {
  name: "ReferralTermsSlot",
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  }
};
const _hoisted_1 = { class: "referral-terms-slot" };
const _hoisted_2 = {
  key: 0,
  class: "referral-terms-slot__warning"
};
const _hoisted_3 = {
  key: 1,
  class: "referral-terms-slot__warning"
};
const _hoisted_4 = {
  key: 2,
  class: "referral-terms-slot__text"
};
const _hoisted_5 = {
  key: 3,
  class: "referral-terms-slot__text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$setup.onboardingFlowStore.referral && $setup.onboardingFlowStore.referralWarningMessage ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString($setup.onboardingFlowStore.referralWarningMessage), 1)) : $setup.onboardingFlowStore.giveawayReward && $setup.onboardingFlowStore.giveawayReward.warningMessage ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString($setup.onboardingFlowStore.giveawayReward.warningMessage), 1)) : $setup.onboardingFlowStore.giveawayReward && $setup.onboardingFlowStore.giveawayReward.disclaimerActionText ? (openBlock(), createElementBlock("div", _hoisted_4, [
      createTextVNode(toDisplayString($setup.onboardingFlowStore.giveawayReward.disclaimerText) + " ", 1),
      $setup.onboardingFlowStore.giveawayReward.disclaimerActionUrl && $setup.onboardingFlowStore.giveawayReward.disclaimerActionText ? (openBlock(), createBlock(_component_BtsLink, {
        key: 0,
        to: $setup.onboardingFlowStore.giveawayReward.disclaimerActionUrl,
        external: "",
        "new-tab": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($setup.onboardingFlowStore.giveawayReward.disclaimerActionText), 1)
        ]),
        _: 1
      }, 8, ["to"])) : createCommentVNode("", true)
    ])) : $setup.onboardingFlowStore.referral ? (openBlock(), createElementBlock("div", _hoisted_5, [
      _cache[2] || (_cache[2] = createTextVNode("\n        You are only eligible to receive referral rewards if you come from one of the\n        ")),
      createVNode(_component_BtsLink, {
        to: `${_ctx.$routes.faqAnswer.replace("{question}", "how-does-referral-work")}#countries`,
        external: "",
        "new-tab": ""
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("\n          whitelisted countries.\n        ")
        ])),
        _: 1
      }, 8, ["to"]),
      _cache[3] || (_cache[3] = createTextVNode("\n        For all applicable requirements and restrictions regarding referral rewards, see the\n        ")),
      createVNode(_component_BtsLink, {
        to: _ctx.$routes.termsReferral,
        external: "",
        "new-tab": ""
      }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode("\n          full Terms.\n        ")
        ])),
        _: 1
      }, 8, ["to"])
    ])) : createCommentVNode("", true)
  ]);
}
const ReferralTermsSlot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c0785525"]]);
export {
  ReferralTermsSlot as default
};
