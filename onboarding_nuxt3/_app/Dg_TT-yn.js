import { o as openBlock, c as createElementBlock, z as createStaticVNode, a as createBaseVNode, _ as _export_sfc, u as useOnboardingFlowStore, j as resolveComponent, F as Fragment, t as toDisplayString, d as createTextVNode, k as createVNode, r as renderList, n as normalizeClass, i as constants } from "./Di9v4FW5.js";
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 128 128"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<g fill="none"><g stroke="#129d49"><path d="M74.56 50.76a13 13 0 1 1-13-12.92 12.93 12.93 0 0 1 13 12.92z"></path><path d="M58.88 56.46a13.6 13.6 0 0 1-3.21-1.64l1.5-2.59A11 11 0 0 0 60.73 54c1 .24 1.6 0 1.74-.59.36-1.52-6-1.6-4.93-6.17.43-1.81 2.08-2.83 4.18-2.79l.83-3.53 3 .7-.81 3.47a15.7 15.7 0 0 1 2.81 1.5l-1.5 2.59a9.2 9.2 0 0 0-3.16-1.6c-1-.22-1.52 0-1.64.52-.34 1.44 6 1.46 4.93 6.18-.44 1.87-2.12 2.9-4.28 2.85l-.83 3.53-3-.7z"></path></g><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="M41.2 25.27h2.38m2.19 0h2.39m-3.48-3.48v2.38m0 2.19v2.38M14.5 108.7h91.36m4.21 0h3.43M31.94 48.66v4.61m0 4.26v4.61m6.76-6.74h-4.63m-4.26 0h-4.62M35.7 71.9h14.13v36.8H35.7z"></path><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="M49.83 71.9H88.3v36.8H49.83z"></path><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="m68.68 76.6 1.57-1.6 2.35 1.6 1.57-.79 1.57.79a32.8 32.8 0 0 0-3.14 14v18.1h-7.07V91.35a36.1 36.1 0 0 1 3.15-14.75"></path><g stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round"><path d="m89.76 52.91-17.47-29.9 6.12-3.52 26.7 46.1-6.12 3.53-5.87-9.96"></path><path d="m78.41 19.49 9.42 16.27-6.11 3.52-9.43-16.27zM93.7 30.26a30.3 30.3 0 0 0-2.11 9.76l-.06 1.26h0l-6-10v-.55a5.1 5.1 0 0 1 5-5.12 3.34 3.34 0 0 1 3.17 4.56zM102.22 45a30.5 30.5 0 0 1-9.54-3.06l-1.12-.57h0l5.66 10.14.48.28a5.11 5.11 0 0 0 6.89-1.79 3.32 3.32 0 0 0-1.13-4.57 3.25 3.25 0 0 0-1.24-.43"></path><path d="M99.43 44.49 99 44.4a26.7 26.7 0 0 1-7.24-2.67l-.49-.27h0l4 7.24.4.25a3.79 3.79 0 0 0 5-1 2.21 2.21 0 0 0-.45-3.1 2.3 2.3 0 0 0-.79-.36m-6.71-11.58-.13.4a26.5 26.5 0 0 0-1.3 7.59v.56h0L87 34.34v-.46A3.78 3.78 0 0 1 90.35 30a2.22 2.22 0 0 1 2.47 2 2.2 2.2 0 0 1-.1.91"></path></g><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="m90.82 62.13-2-.67v-2.72l-1.38-1-.15-1.74a16.7 16.7 0 0 1 5.93-5.77l2.4-1.38h0L99.15 55l-2.53 1.45a16.2 16.2 0 0 0-5.8 5.69z"></path></g>', 1)
  ]));
}
const ReferralIcon = { render: render$1 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m8.5 18.69-4.96-4.96 1.42-1.42 3.54 3.55L19.04 5.31l1.42 1.42z"
    }, null, -1)
  ]));
}
const CheckIcon = { render };
const _sfc_main = {
  name: "RegisterSubtitle",
  components: {
    ReferralIcon,
    CheckIcon
  },
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  },
  computed: {
    referralSubtitle() {
      var _a, _b;
      const referralType = (_a = this.onboardingFlowStore.referral) == null ? void 0 : _a.type;
      const referralBonus = (_b = this.onboardingFlowStore.referral) == null ? void 0 : _b.bonus;
      const wording = {
        [constants.REFERRAL.TYPES.TRADING_BONUS]: `You’re on your way to earning a $${referralBonus} trading fee bonus!`,
        [constants.REFERRAL.TYPES.CASH_BONUS]: `You’re on your way to earning a $${referralBonus} cash bonus!`,
        [constants.REFERRAL.TYPES.CASH_BONUS_RANDOM]: `You’re on your way to earning up to $100!`
      };
      return wording[referralType];
    }
  }
};
const _hoisted_1 = { class: "register-subtitle" };
const _hoisted_2 = { class: "register-subtitle__bonus-text" };
const _hoisted_3 = { class: "register-subtitle__box" };
const _hoisted_4 = { class: "register-subtitle__list" };
const _hoisted_5 = { class: "register-subtitle__bonus-text" };
const _hoisted_6 = { class: "register-subtitle__box register-subtitle__box--center" };
const _hoisted_7 = { class: "register-subtitle__list" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ReferralIcon = resolveComponent("ReferralIcon");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$setup.onboardingFlowStore.isCorpo && $setup.onboardingFlowStore.referral ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("div", _hoisted_2, toDisplayString($options.referralSubtitle), 1),
      _cache[6] || (_cache[6] = createTextVNode()),
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_ReferralIcon, { class: "register-subtitle__icon" }),
        _cache[5] || (_cache[5] = createTextVNode()),
        createBaseVNode("ol", _hoisted_4, [
          createBaseVNode("li", null, [
            _cache[0] || (_cache[0] = createTextVNode("Get the referral link ")),
            createVNode(_component_CheckIcon, { class: "register-subtitle__check-icon" })
          ]),
          _cache[1] || (_cache[1] = createTextVNode()),
          _cache[2] || (_cache[2] = createBaseVNode("li", { class: "register-subtitle__list--green" }, "\n            Open and verify your Bitstamp account\n          ", -1)),
          _cache[3] || (_cache[3] = createTextVNode()),
          _cache[4] || (_cache[4] = createBaseVNode("li", null, "Make a single trade for $100 or more", -1))
        ])
      ])
    ], 64)) : !$setup.onboardingFlowStore.isCorpo && $setup.onboardingFlowStore.giveawayReward && $setup.onboardingFlowStore.giveawayReward.description ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createBaseVNode("div", _hoisted_5, toDisplayString($setup.onboardingFlowStore.giveawayReward.description), 1),
      _cache[8] || (_cache[8] = createTextVNode()),
      createBaseVNode("div", _hoisted_6, [
        createVNode(_component_ReferralIcon, { class: "register-subtitle__icon" }),
        _cache[7] || (_cache[7] = createTextVNode()),
        createBaseVNode("ol", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.giveawayReward.steps, (step, index) => {
            return openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass({
                "register-subtitle__list--green": index === 0
              })
            }, toDisplayString(step), 3);
          }), 128))
        ])
      ])
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createTextVNode(toDisplayString(_ctx.$t("register.registerSubTitle")), 1)
    ], 64))
  ]);
}
const RegisterSubtitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-843f3b19"]]);
export {
  RegisterSubtitle as default
};
