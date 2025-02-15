import { Q as URLService, x as axiosInstance, _ as _export_sfc, j as resolveComponent, o as openBlock, b as createBlock, a0 as Checkbox, A as Modal, aj as RegistrationLink, B as BtsButton, a6 as CONSTANTS, R as ROUTES, ae as ResponseCodes, c as createElementBlock, a as createBaseVNode, F as Fragment, d as createTextVNode, w as withCtx, k as createVNode, e as createCommentVNode, t as toDisplayString } from "./Di9v4FW5.js";
import { S as Spinner } from "./saG0txR5.js";
import { G as GeneralNotification } from "./DskNJVja.js";
const demoApi = {
  demoAccount: {
    create() {
      const url = URLService.buildUrl("demoUserListResource");
      return axiosInstance.post(url, {}).then((r) => r.data.data);
    }
  }
};
const _sfc_main$1 = {
  name: "SpinnerInButton",
  components: { AppSpinner: Spinner }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppSpinner = resolveComponent("AppSpinner");
  return openBlock(), createBlock(_component_AppSpinner, { class: "spinner-in-button" });
}
const SpinnerInButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b299052e"]]);
const _sfc_main = {
  name: "LoginSubtitle",
  components: {
    Checkbox,
    SpinnerInButton,
    Modal,
    GeneralNotification,
    RegistrationLink,
    BtsButton
  },
  data() {
    return {
      isDemoRegistrationEnabled: CONSTANTS.demoRegistrationEnabled ?? false,
      isDemoMode: CONSTANTS.demoMode ?? false,
      isDemoModalOpen: false,
      isProcessing: false,
      isAccountLimitBreached: false,
      acceptedTerms: false,
      demoCredentials: null,
      isPasswordRecovered: false
    };
  },
  computed: {
    termsUrl() {
      return ROUTES.privacyPolicy;
    },
    isDemoAccountCreated() {
      return this.demoCredentials !== null;
    },
    modalTitle() {
      if (this.isAccountLimitBreached) {
        return "Account limit breached";
      } else if (this.isDemoAccountCreated) {
        return "Your demo account credentials";
      }
      return "Create a new demo account";
    }
  },
  mounted() {
    if (this.$router.currentRoute.value.query.lost === "t") {
      this.isPasswordRecovered = true;
    }
  },
  methods: {
    async createDemoAccount() {
      var _a;
      if (!this.demoCredentials) {
        this.isProcessing = true;
        try {
          this.demoCredentials = await demoApi.demoAccount.create();
        } catch (e) {
          if (((_a = e.response) == null ? void 0 : _a.status) === ResponseCodes.HTTP.TOO_MANY_REQUESTS) {
            this.isAccountLimitBreached = true;
          }
        } finally {
          this.isProcessing = false;
        }
      }
    }
  }
};
const _hoisted_1 = { class: "login-header-container" };
const _hoisted_2 = { class: "login-subtitle" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 1,
  class: "demo-terms"
};
const _hoisted_5 = ["href"];
const _hoisted_6 = { key: 2 };
const _hoisted_7 = { class: "mt8" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RegistrationLink = resolveComponent("RegistrationLink");
  const _component_Modal = resolveComponent("Modal");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_GeneralNotification = resolveComponent("GeneralNotification");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_SpinnerInButton = resolveComponent("SpinnerInButton");
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h3", _hoisted_2, [
      $data.isDemoMode && $data.isDemoRegistrationEnabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _cache[3] || (_cache[3] = createTextVNode("\n        Don't have a demo account?\n        ")),
        createBaseVNode("span", {
          class: "link",
          onClick: _cache[0] || (_cache[0] = ($event) => $data.isDemoModalOpen = true)
        }, "\n          Create a new demo account.\n        ")
      ], 64)) : !$data.isDemoMode ? (openBlock(), createBlock(_component_i18n_t, {
        key: 1,
        tag: "span",
        scope: "global",
        keypath: "login.loginSubtitle"
      }, {
        default: withCtx(() => [
          createVNode(_component_RegistrationLink, {
            to: { name: "onboarding-flow-step-substep", params: { flow: "register" } },
            text: _ctx.$t("login.loginSubtitleAction")
          }, null, 8, ["text"]),
          _cache[4] || (_cache[4] = createTextVNode()),
          createVNode(_component_Modal)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _cache[14] || (_cache[14] = createTextVNode()),
    $data.isPasswordRecovered ? (openBlock(), createBlock(_component_GeneralNotification, {
      key: 0,
      "notification-type": "success",
      title: _ctx.$t("login.passwordChangeTitle"),
      class: "success-notice",
      "view-break": 400
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t("login.successfulPasswordChangeNotice")), 1)
      ]),
      _: 1
    }, 8, ["title"])) : createCommentVNode("", true),
    _cache[15] || (_cache[15] = createTextVNode()),
    createVNode(_component_Modal, {
      "is-open": $data.isDemoModalOpen,
      "onUpdate:isOpen": _cache[2] || (_cache[2] = ($event) => $data.isDemoModalOpen = $event),
      title: $options.modalTitle
    }, {
      footer: withCtx(() => [
        !$options.isDemoAccountCreated && !$data.isAccountLimitBreached ? (openBlock(), createBlock(_component_BtsButton, {
          key: 0,
          disabled: $data.isProcessing || !$data.acceptedTerms,
          class: "flex flex--gap flex--justify-center",
          onClick: $options.createDemoAccount
        }, {
          default: withCtx(() => [
            $data.isProcessing ? (openBlock(), createBlock(_component_SpinnerInButton, { key: 0 })) : createCommentVNode("", true),
            _cache[12] || (_cache[12] = createTextVNode("\n          Create a new demo account\n        "))
          ]),
          _: 1
        }, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
      ]),
      default: withCtx(() => [
        $data.isAccountLimitBreached ? (openBlock(), createElementBlock("div", _hoisted_3, "\n        You can only create a limited amount of demo accounts.\n      ")) : !$options.isDemoAccountCreated ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_component_Checkbox, {
            checked: $data.acceptedTerms,
            "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => $data.acceptedTerms = $event)
          }, {
            default: withCtx(() => [
              _cache[5] || (_cache[5] = createTextVNode("\n          I accept the Beta Crypto Derivatives Platform and Trading Competition\n          ")),
              createBaseVNode("a", {
                target: "_blank",
                class: "link",
                href: $options.termsUrl
              }, "\n            Terms and Conditions\n          ", 8, _hoisted_5)
            ]),
            _: 1
          }, 8, ["checked"])
        ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
          _cache[10] || (_cache[10] = createBaseVNode("p", null, "\n          Store these credentials and use them to login.\n        ", -1)),
          _cache[11] || (_cache[11] = createTextVNode()),
          createBaseVNode("p", _hoisted_7, [
            _cache[6] || (_cache[6] = createBaseVNode("strong", null, "Username:", -1)),
            createTextVNode(" " + toDisplayString($data.demoCredentials.username) + " ", 1),
            _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
            _cache[8] || (_cache[8] = createTextVNode()),
            _cache[9] || (_cache[9] = createBaseVNode("strong", null, "Password:", -1)),
            createTextVNode(" " + toDisplayString($data.demoCredentials.password), 1)
          ])
        ])),
        _cache[13] || (_cache[13] = createTextVNode())
      ]),
      _: 1
    }, 8, ["is-open", "title"])
  ]);
}
const LoginSubtitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72eefb12"]]);
export {
  LoginSubtitle as default
};
