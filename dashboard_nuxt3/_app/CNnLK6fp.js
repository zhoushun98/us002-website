import { C as CONSTANTS, _ as _export_sfc, b0 as useScaStore, U as URLService, T as TranslationObject, gu as scaApi, ao as axiosInstanceWithoutErrorHandling, aO as ResponseCodes, aj as _, y as resolveComponent, o as openBlock, e as createElementBlock, t as toDisplayString, h as createCommentVNode, g as createTextVNode, c as createBlock, w as withCtx, i as createBaseVNode, F as Fragment } from "./BEpVD-aq.js";
import { B as BtsForm } from "./D4HcQE78.js";
import { G as GeneralNotification } from "./qPMKhu5A.js";
const CHALLENGE_TYPE_PASSWORD = CONSTANTS.security.CHALLENGE_TYPE_PASSWORD;
const CHALLENGE_TYPE_TFA = CONSTANTS.security.CHALLENGE_TYPE_TFA;
const CHALLENGE_TYPE_TO_TEXT = {
  [CHALLENGE_TYPE_PASSWORD]: "password",
  [CHALLENGE_TYPE_TFA]: "two-factor authentication code"
};
const SUPPORTED_CHALLENGE_TYPES = [CHALLENGE_TYPE_PASSWORD, CHALLENGE_TYPE_TFA];
const _sfc_main = {
  name: "ScaForm",
  components: {
    GeneralNotification,
    BtsForm
  },
  props: {
    requiredChallengeTypes: {
      /** @type {Array.<string>} */
      type: Array,
      required: true,
      validator: (challengeTypes) => {
        return challengeTypes.every((c) => SUPPORTED_CHALLENGE_TYPES.includes(c));
      }
    },
    showCancelNavigation: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null
    },
    notice: {
      type: String,
      default: null
    }
  },
  emits: ["success"],
  setup() {
    return {
      scaStore: useScaStore()
    };
  },
  data() {
    return {
      formData: {},
      failCount: 0,
      error: null,
      isSubmitDisabled: false,
      success: false,
      cancelNavigationUrl: URLService.getPageUrl("dashboardRouter"),
      showForm: true
    };
  },
  computed: {
    noticeChallengeTypeText() {
      var _a;
      return ((_a = this.requiredChallengeTypes) == null ? void 0 : _a.map((c) => CHALLENGE_TYPE_TO_TEXT[c]).join(" and ")) ?? "";
    },
    formSchema() {
      var _a;
      const challengeTypeSchemas = {
        [CHALLENGE_TYPE_PASSWORD]: {
          type: "input",
          model: "rawPassword",
          required: true,
          validator: ["required"],
          styleClasses: "sca-form__field",
          fieldOptions: {
            inputType: "password",
            label: new TranslationObject("components.scaForm.passwordLabel"),
            autocomplete: "current-password",
            autofocus: this.autoFocus,
            neverShowLabelAsPlaceholder: true
          }
        },
        [CHALLENGE_TYPE_TFA]: {
          type: "twoFactorInput",
          model: "authCode",
          required: true,
          validator: ["required"],
          styleClasses: "form-element--tfa",
          fieldOptions: {
            label: new TranslationObject("components.scaForm.twoFactorCodeLabel"),
            autofocus: false,
            blurAfterLastDigit: false
          }
        }
      };
      return { fields: ((_a = this.requiredChallengeTypes) == null ? void 0 : _a.map((c) => challengeTypeSchemas[c])) ?? [] };
    },
    submitButtonProps() {
      const props = { class: "button--fluid" };
      if (this.isSubmitDisabled) {
        props.disabled = true;
      }
      return props;
    }
  },
  methods: {
    resetForm() {
      this.formData = {};
      this.$refs.scaForm.rerender();
      this.$nextTick(() => this.$refs.scaForm.$el[0].focus());
    },
    async onSubmit() {
      var _a, _b, _c;
      this.isSubmitDisabled = true;
      try {
        const { expiresAt } = await scaApi.authorize({ inputs: this.formData }, axiosInstanceWithoutErrorHandling);
        this.scaStore.setElevatedStatus(true);
        this.scaStore.setExpiresAt(expiresAt);
        this.error = null;
        this.failCount = 0;
        this.success = true;
        this.$emit("success");
      } catch (e) {
        if (((_a = e.response) == null ? void 0 : _a.status) === ResponseCodes.HTTP.BAD_REQUEST && typeof e.response.data === "object" && ((_b = e.response.data) == null ? void 0 : _b.code) === ResponseCodes.API.VALIDATION_ERROR) {
          this.error = _.first(e.response.data.errors).message;
          this.resetForm();
        } else if (((_c = e.response) == null ? void 0 : _c.status) === ResponseCodes.HTTP.UNAUTHORIZED) {
          this.error = new TranslationObject("components.scaForm.loggedOutError");
          this.showForm = false;
        } else {
          this.error = new TranslationObject("components.scaForm.invalidCredentialsError");
          this.resetForm();
          this.failCount++;
        }
        this.isSubmitDisabled = false;
      }
    }
  }
};
const _hoisted_1 = { class: "sca-form" };
const _hoisted_2 = {
  key: 0,
  class: "sca-form__title"
};
const _hoisted_3 = { href: "mailto:support@bitstamp.net" };
const _hoisted_4 = { class: "mt8 mb8 text--center text--light" };
const _hoisted_5 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GeneralNotification = resolveComponent("GeneralNotification");
  const _component_BtsForm = resolveComponent("BtsForm");
  const _component_i18n_t = resolveComponent("i18n-t");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $props.title ? (openBlock(), createElementBlock("h1", _hoisted_2, toDisplayString(_ctx.$tt($props.title)), 1)) : createCommentVNode("", true),
    _cache[7] || (_cache[7] = createTextVNode()),
    $data.error ? (openBlock(), createBlock(_component_GeneralNotification, {
      key: 1,
      class: "sca-form__notice",
      "notification-type": "error",
      "view-break": 400
    }, {
      default: withCtx(() => [
        createBaseVNode("strong", null, toDisplayString(_ctx.$tt($data.error)), 1),
        _cache[2] || (_cache[2] = createTextVNode()),
        $data.failCount > 2 && $data.showForm ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createTextVNode(toDisplayString(_ctx.$t("components.scaForm.failCountWarning")), 1)
        ], 64)) : createCommentVNode("", true),
        _cache[3] || (_cache[3] = createTextVNode()),
        !$data.showForm ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
          createTextVNode(toDisplayString(_ctx.$t("components.scaForm.blockedWarning")), 1)
        ], 64)) : createCommentVNode("", true)
      ]),
      _: 1
    })) : $data.success ? (openBlock(), createBlock(_component_GeneralNotification, {
      key: 2,
      class: "sca-form__notice",
      title: _ctx.$t("components.scaForm.authorizedTitle"),
      "notification-type": "success"
    }, null, 8, ["title"])) : (openBlock(), createBlock(_component_GeneralNotification, {
      key: 3,
      class: "sca-form__notice",
      "notification-type": "warning",
      "view-break": 400
    }, {
      default: withCtx(() => [
        !$props.notice ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.$t("components.scaForm.securityPrecaution", { challenge: $options.noticeChallengeTypeText })), 1)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.$tt($props.notice)), 1)
        ], 64))
      ]),
      _: 1
    })),
    _cache[8] || (_cache[8] = createTextVNode()),
    $data.showForm ? (openBlock(), createBlock(_component_BtsForm, {
      ref: "scaForm",
      key: "scaForm",
      "form-id": "scaForm",
      class: "sca-form__form",
      schema: $options.formSchema,
      model: $data.formData,
      "submit-button-visible": "",
      "submit-button-text": _ctx.$t("components.scaForm.confirmButton"),
      "submit-button-props": $options.submitButtonProps,
      onSubmit: $options.onSubmit
    }, null, 8, ["schema", "model", "submit-button-text", "submit-button-props", "onSubmit"])) : (openBlock(), createBlock(_component_i18n_t, {
      key: 5,
      scope: "global",
      tag: "div",
      keypath: "components.scaForm.visitLink",
      class: "mt8 mb8 text--center"
    }, {
      "bts-link": withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode("a", { href: "/" }, "bitstamp.net ", -1)
      ])),
      "support-link": withCtx(() => [
        createBaseVNode("a", _hoisted_3, toDisplayString(_ctx.$t("components.scaForm.contactSupportLink")), 1)
      ]),
      _: 1
    })),
    _cache[9] || (_cache[9] = createTextVNode()),
    $props.showCancelNavigation && $data.showForm ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
      createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("components.scaForm.or")), 1),
      _cache[6] || (_cache[6] = createTextVNode()),
      createBaseVNode("div", null, [
        createBaseVNode("a", { href: $data.cancelNavigationUrl }, toDisplayString(_ctx.$t("components.scaForm.gotoDashboard")), 9, _hoisted_5)
      ])
    ], 64)) : createCommentVNode("", true)
  ]);
}
const ScaForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a7ebdb1"]]);
export {
  ScaForm as S
};
