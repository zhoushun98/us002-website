const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dwk6ZXZW.js","./Di9v4FW5.js","./entry.DSm-gQVh.css","./WelcomeStep.CenA0tmf.css","./BVlgntUE.js","./AccountType.CWNCm2hT.css","./DTTn3bOR.js","./RegisterTermsSlot.DiDOG3hL.css","./CCCJ4HEv.js","./ReferralTermsSlot.BHJefwTp.css","./CyzyJwxB.js","./LoginChallengeSubtitle.AGYmBL4d.css","./C6HUc5G9.js","./LoginChallengeResetSlot.CNBOq6n8.css","./BB4tDUCf.js","./saG0txR5.js","./Spinner.DDpxCllT.css","./DskNJVja.js","./GeneralNotification.DjT3gxba.css","./LoginSubtitle.ce0bmal9.css","./BI7OKJVu.js","./RegisterEmailSent.CFOtMuSj.css","./B1fQtVl0.js","./WelcomeStep.uz8XUGT-.css","./FJ7jfJen.js","./CheckYourMobile.NvMRLUL_.css","./BU3i6Dng.js","./DXaoGlHl.js","./BE5W2pEj.js","./EnableExtraSecurity.UB4dw6zq.css","./BeJX7Amv.js","./InstallApp.BLHA0HRc.css","./BapzjE6u.js","./InstallAppNew.Dc4aQNgT.css","./BxqOOeh9.js","./CEq-E3wa.js","./Setup.BUmj8cZr.css","./DQl3sOhe.js","./QRCode.BmQEQ1cZ.css","./DQs-pJK5.js","./WelcomeStep.Cc_paLuY.css","./CNb0OIxP.js","./ConfirmationStep.BVuIWwPM.css","./6kgzH8fc.js","./r5BUs_dC.js","./KycSubtitle.BNzEX_yt.css","./BS1eM5T0.js","./GenericFinalStep.BPwbQdGh.css","./DRyQ1322.js","./ProveFinalStep.C-0VdkA7.css","./Cc5vLUe2.js","./ProveFooter.D9WDFBjj.css","./CLzOuTvr.js","./ForgotPasswordSlot.CK_j0y7M.css","./STYB0oxK.js","./LoginHeader.DWmAFwwD.css","./wkEET4ap.js","./LostDeviceSlot.efbl7Xxq.css","./CCiPkCiM.js","./GetVerifiedStep.BY945q-o.css","./CimL7BH1.js","./PhoneSubtitle.C-yTpgB2.css","./DxWagliY.js","./RecoverSubtitle.Bp6WmnVY.css","./Dg_TT-yn.js","./RegisterSubtitle.CCH1MjRw.css","./B6mRpqZD.js","./CorpoPersonalAccountSwitcher.C8dqW1tz.css","./CduIjRe2.js","./RJFLnoeS.js","./BinGTR0W.js","./CategorizationFooter.DVskbw7S.css","./Dok0FcE-.js","./AppropriatenessComponent.CWDO2sNN.css","./CXYu-sno.js","./InReviewComponent.LNYzVj1p.css"])))=>i.map(i=>d[i]);
import { _ as _export_sfc, u as useOnboardingFlowStore, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, n as normalizeClass, b as createBlock, w as withCtx, d as createTextVNode, t as toDisplayString, e as createCommentVNode, f as __nuxt_component_0$1, B as BtsButton, M as Markdown, g as defineAsyncComponent, h as _, L as LocalStorageService, l as localStorageConstants, R as ROUTES, i as constants, j as resolveComponent, k as createVNode, m as resolveDynamicComponent, p as withKeys, q as mergeProps, T as Transition, s as __vitePreload, v as trackInteraction } from "./Di9v4FW5.js";
import { C as CookieConsentBanner, H as HelpPanel, p as path } from "./D8txsWsE.js";
import { G as GeneralNotification, B as BtsForm, e as errorHandler } from "./DskNJVja.js";
import { E as Error } from "./CuwoLVBx.js";
import "./DmitIJ2A.js";
const _sfc_main$2 = {
  name: "SubStepNavigation",
  props: {
    current: {
      type: Object,
      default: null
    }
  },
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  },
  computed: {
    currentSubSteps() {
      return this.onboardingFlowStore.currentSubSteps;
    },
    visible() {
      return this.onboardingFlowStore.visibleStepCount > 1;
    },
    visibleSubSteps() {
      return this.currentSubSteps.filter((x) => !x.isCheckpoint);
    }
  },
  methods: {
    getPath(subStep) {
      const urlParts = [
        this.$router.currentRoute.value.params.flow,
        this.$router.currentRoute.value.params.step,
        subStep.urlHandle
      ];
      return `/onboarding/${urlParts.filter((x) => x).join("/")}/`;
    },
    isCompleted(step) {
      const subSteps = this.currentSubSteps;
      const currentSubStepIndex = subSteps.indexOf(this.current.subStep);
      const subStepIndex = subSteps.indexOf(step);
      return currentSubStepIndex > subStepIndex;
    }
  }
};
const _hoisted_1$1 = { class: "sub-navigation" };
const _hoisted_2$1 = {
  key: 0,
  class: "sub-navigation__steps"
};
const _hoisted_3$1 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    $options.visible ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleSubSteps, (subStep) => {
          return openBlock(), createElementBlock("li", {
            key: subStep.id,
            class: normalizeClass([{
              "sub-navigation__step--selected": subStep === $props.current.subStep,
              "sub-navigation__step--completed": $options.isCompleted(subStep)
            }, "sub-navigation__step"])
          }, [
            $options.isCompleted(subStep) ? (openBlock(), createBlock(_component_nuxt_link, {
              key: 0,
              to: $options.getPath(subStep)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(subStep.sideMenuName), 1)
              ]),
              _: 2
            }, 1032, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(subStep.sideMenuName), 1))
          ], 2);
        }), 128))
      ])
    ])) : createCommentVNode("", true)
  ]);
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-eb566b81"]]);
const _sfc_main$1 = {
  name: "SubStep",
  components: {
    GeneralNotification,
    BtsForm,
    BtsButton,
    CookieConsentBanner,
    Markdown,
    Error,
    "WelcomeStep": defineAsyncComponent(() => __vitePreload(() => import("./Dwk6ZXZW.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url)),
    "AccountType": defineAsyncComponent(() => __vitePreload(() => import("./BVlgntUE.js"), true ? __vite__mapDeps([4,1,2,5]) : void 0, import.meta.url)),
    "RegisterTermsSlot": defineAsyncComponent(() => __vitePreload(() => import("./DTTn3bOR.js"), true ? __vite__mapDeps([6,1,2,7]) : void 0, import.meta.url)),
    "ReferralTermsSlot": defineAsyncComponent(() => __vitePreload(() => import("./CCCJ4HEv.js"), true ? __vite__mapDeps([8,1,2,9]) : void 0, import.meta.url)),
    "LoginChallengeSubtitle": defineAsyncComponent(() => __vitePreload(() => import("./CyzyJwxB.js"), true ? __vite__mapDeps([10,1,2,11]) : void 0, import.meta.url)),
    "LoginChallengeResetSlot": defineAsyncComponent(() => __vitePreload(() => import("./C6HUc5G9.js"), true ? __vite__mapDeps([12,1,2,13]) : void 0, import.meta.url)),
    "LoginSubtitle": defineAsyncComponent(() => __vitePreload(() => import("./BB4tDUCf.js"), true ? __vite__mapDeps([14,1,2,15,16,17,18,19]) : void 0, import.meta.url)),
    "RegisterEmailSent": defineAsyncComponent(() => __vitePreload(() => import("./BI7OKJVu.js"), true ? __vite__mapDeps([20,1,2,21]) : void 0, import.meta.url)),
    "TwoFaWelcomeStep": defineAsyncComponent(() => __vitePreload(() => import("./B1fQtVl0.js"), true ? __vite__mapDeps([22,17,1,2,18,23]) : void 0, import.meta.url)),
    "TwoFaCheckYourMobile": defineAsyncComponent(() => __vitePreload(() => import("./FJ7jfJen.js"), true ? __vite__mapDeps([24,1,2,25]) : void 0, import.meta.url)),
    "TwoFaEnableExtraSecurity": defineAsyncComponent(() => __vitePreload(() => import("./BU3i6Dng.js"), true ? __vite__mapDeps([26,1,2,27,28,29]) : void 0, import.meta.url)),
    "TwoFaInstallApp": defineAsyncComponent(() => __vitePreload(() => import("./BeJX7Amv.js"), true ? __vite__mapDeps([30,1,2,31]) : void 0, import.meta.url)),
    "TwoFaInstallAppNew": defineAsyncComponent(() => __vitePreload(() => import("./BapzjE6u.js"), true ? __vite__mapDeps([32,1,2,33]) : void 0, import.meta.url)),
    "TwoFaSetup": defineAsyncComponent(() => __vitePreload(() => import("./BxqOOeh9.js"), true ? __vite__mapDeps([34,35,1,2,17,18,27,28,36]) : void 0, import.meta.url)),
    "TwoFaQRCode": defineAsyncComponent(() => __vitePreload(() => import("./DQl3sOhe.js"), true ? __vite__mapDeps([37,1,2,35,15,16,27,38]) : void 0, import.meta.url)),
    "KycWelcomeStep": defineAsyncComponent(() => __vitePreload(() => import("./DQs-pJK5.js"), true ? __vite__mapDeps([39,1,2,17,18,28,40]) : void 0, import.meta.url)),
    "KycConfirmationStep": defineAsyncComponent(() => __vitePreload(() => import("./CNb0OIxP.js"), true ? __vite__mapDeps([41,17,1,2,18,42]) : void 0, import.meta.url)),
    "KycSubtitle": defineAsyncComponent(() => __vitePreload(() => import("./6kgzH8fc.js"), true ? __vite__mapDeps([43,44,1,2,45]) : void 0, import.meta.url)),
    "GenericFinalStep": defineAsyncComponent(() => __vitePreload(() => import("./BS1eM5T0.js"), true ? __vite__mapDeps([46,1,2,17,18,47]) : void 0, import.meta.url)),
    "ProveFinalStep": defineAsyncComponent(() => __vitePreload(() => import("./DRyQ1322.js"), true ? __vite__mapDeps([48,1,2,49]) : void 0, import.meta.url)),
    "ProveFooter": defineAsyncComponent(() => __vitePreload(() => import("./Cc5vLUe2.js"), true ? __vite__mapDeps([50,1,2,51]) : void 0, import.meta.url)),
    "ForgotPasswordSlot": defineAsyncComponent(() => __vitePreload(() => import("./CLzOuTvr.js"), true ? __vite__mapDeps([52,1,2,53]) : void 0, import.meta.url)),
    "LoginHeader": defineAsyncComponent(() => __vitePreload(() => import("./STYB0oxK.js"), true ? __vite__mapDeps([54,17,1,2,18,55]) : void 0, import.meta.url)),
    "LostDeviceSlot": defineAsyncComponent(() => __vitePreload(() => import("./wkEET4ap.js"), true ? __vite__mapDeps([56,1,2,57]) : void 0, import.meta.url)),
    "GetVerifiedStep": defineAsyncComponent(() => __vitePreload(() => import("./CCiPkCiM.js"), true ? __vite__mapDeps([58,17,1,2,18,59]) : void 0, import.meta.url)),
    "PhoneSubtitleSlot": defineAsyncComponent(() => __vitePreload(() => import("./CimL7BH1.js"), true ? __vite__mapDeps([60,1,2,61]) : void 0, import.meta.url)),
    "RecoverSubtitleSlot": defineAsyncComponent(() => __vitePreload(() => import("./DxWagliY.js"), true ? __vite__mapDeps([62,1,2,63]) : void 0, import.meta.url)),
    "RegisterSubtitleSlot": defineAsyncComponent(() => __vitePreload(() => import("./Dg_TT-yn.js"), true ? __vite__mapDeps([64,1,2,65]) : void 0, import.meta.url)),
    "CorpoPersonalAccountSwitcher": defineAsyncComponent(() => __vitePreload(() => import("./B6mRpqZD.js"), true ? __vite__mapDeps([66,1,2,67]) : void 0, import.meta.url)),
    "RegisterSubmitComponent": defineAsyncComponent(() => __vitePreload(() => import("./CduIjRe2.js"), true ? __vite__mapDeps([68,1,2,69]) : void 0, import.meta.url)),
    "CategorizationFooter": defineAsyncComponent(() => __vitePreload(() => import("./BinGTR0W.js"), true ? __vite__mapDeps([70,1,2,71]) : void 0, import.meta.url)),
    "AppropriatenessComponent": defineAsyncComponent(() => __vitePreload(() => import("./Dok0FcE-.js"), true ? __vite__mapDeps([72,1,2,73]) : void 0, import.meta.url)),
    "InReviewComponent": defineAsyncComponent(() => __vitePreload(() => import("./CXYu-sno.js"), true ? __vite__mapDeps([74,1,2,75]) : void 0, import.meta.url))
  },
  props: {
    subStep: {
      type: Object,
      default: null
    },
    helpVisible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["disabledSubmit"],
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  },
  data() {
    return {
      isSubmitDisabled: false,
      formData: {},
      isValid: true,
      isFormActive: false,
      isSubmitTransition: false,
      customComponentIsValid: false,
      transition: "slide-up",
      submitting: false,
      errorMessage: null,
      errorTitle: null,
      initialTransition: false,
      cookieModalVisible: false,
      cookieBannerVisible: false,
      transitionId: 0
    };
  },
  computed: {
    trackingProps() {
      return this.onboardingFlowStore.trackingProps;
    },
    subStepTracking() {
      return { props: this.trackingProps, ...this.subStep.tracking };
    },
    buttonText() {
      if ((this.$isSmall.value || this.$isMedium.value) && this.subStep.submitButtonTextMobile) {
        return this.subStep.submitButtonTextMobile;
      } else {
        return this.subStep.submitButtonText;
      }
    },
    isButtonDisabled() {
      if (this.subStep.isInvalidByDefault) {
        return !this.customComponentIsValid;
      } else {
        return !(this.isValid || this.subStep.customComponent) || this.submitting;
      }
    },
    isHelpVisible() {
      return this.helpVisible && !!this.subStep.help;
    },
    headerVisible() {
      return this.subStep.formSchema || this.subStep.title || this.errorMessage;
    },
    buttonVisible() {
      return !this.subStep.submitButtonHidden;
    },
    isFooterVisible() {
      return this.subStep.footerVisible;
    },
    isProveFooterVisible() {
      return this.subStep.proveFooterVisible;
    },
    formWrapClasses() {
      const contentAlignment = _.get(this.subStep, "contentAlign", "");
      return {
        "sub-step__form-wrap": true,
        "sub-step__form-wrap--top": contentAlignment.toLowerCase() === "top"
      };
    },
    formSlots() {
      if (this.subStep.formSchema) {
        return this.subStep.formSchema.fields.filter((field) => field.fieldOptions && field.fieldOptions.slot).map((field) => {
          return {
            name: field.fieldOptions.slot,
            component: field.fieldOptions.slotComponent
          };
        });
      }
      return null;
    },
    selectedCountry() {
      return this.onboardingFlowStore.selectedCountry;
    }
  },
  watch: {
    subStep: {
      handler() {
        this.cloneStoreDataToFormData();
        this.errorMessage = null;
        this.errorTitle = null;
      },
      immediate: true
    },
    selectedCountry(country) {
      this.onboardingFlowStore.setLocale(country);
    }
  },
  mounted() {
    this.isFormActive = true;
    this.initialTransition = true;
    this.bindEvents();
    this.errorMessage = LocalStorageService.read(localStorageConstants.LOCAL_STORAGE.LOGIN_ERROR_MESSAGE);
    this.errorTitle = LocalStorageService.read(localStorageConstants.LOCAL_STORAGE.LOGIN_ERROR_TITLE);
    LocalStorageService.removeItem(localStorageConstants.LOCAL_STORAGE.LOGIN_ERROR_MESSAGE);
    LocalStorageService.removeItem(localStorageConstants.LOCAL_STORAGE.LOGIN_ERROR_TITLE);
  },
  beforeUnmount() {
    this.$eventBus.$off("flowNextStep", this.nextStep);
  },
  methods: {
    onValidated(isValid) {
      this.isValid = isValid;
      this.updateInstantSyncFields();
      if (isValid && this.subStep.submit && this.subStep.autoSubmit) {
        this.saveValidData();
      }
    },
    bindEvents() {
      this.$eventBus.$on("flowSubStepSlide", () => {
        window.scrollTo(0, 0);
        this.updateTransition();
        this.isSubmitTransition = false;
        this.$nextTick(() => {
          this.isFormActive = !this.isFormActive;
        });
      });
      this.$eventBus.$on("updateFormData", this.cloneStoreDataToFormData);
      this.$eventBus.$on("flowNextStep", this.nextStep);
    },
    advanceToNextFlow() {
      var _a;
      this.$router.push({
        name: "onboarding-flow-step-substep",
        params: {
          flow: (_a = this.onboardingFlowStore.config) == null ? void 0 : _a.advanceTo
        }
      }, () => {
      }, () => {
      });
    },
    ctaButtonClick() {
      if (this.isSubmitDisabled) {
        this.$emit("disabledSubmit");
        return;
      }
      this.mobileEventButtonClick();
      this.onboardingFlowStore.trackStepEvent({
        eventAction: "click",
        eventType: "CTA",
        eventContent: this.buttonText,
        eventName: _.get(this, "subStep.tracking.ctaEvent")
      });
      this.nextStep();
    },
    mobileEventButtonClick() {
      if (this.subStep.emitMobileEvent && this.$nativeBridge.isAvailable()) {
        if (this.$nativeBridge[this.subStep.emitMobileEvent]) {
          this.$nativeBridge[this.subStep.emitMobileEvent]();
        }
      }
    },
    nextStep() {
      if (this.subStep.submitButtonRoute) {
        window.location = ROUTES[this.subStep.submitButtonRoute];
        return;
      }
      if (this.subStep.advanceOnSubmit && this.onboardingFlowStore.userInFunnel) {
        this.advanceToNextFlow();
        return;
      }
      if (this.$refs.form) {
        this.$refs.form.validate().then(() => {
          this.saveValidData();
        }).catch((error) => {
          this.onboardingFlowStore.trackStepEvent({
            eventAction: "error",
            eventContent: "validation error"
          });
          console.error("Validation error", error);
        });
      } else if (this.subStep.submit) {
        this.submitData();
      } else {
        this.transitionToNextStep();
      }
    },
    saveValidData() {
      this.onboardingFlowStore.saveData(this.formData);
      if (this.subStep.submit) {
        this.submitData();
      } else {
        setTimeout(() => {
          this.transitionToNextStep();
        }, 100);
      }
    },
    updateInstantSyncFields() {
      const fields = this.subStep.formSchema.fields;
      const liveFields = fields.filter((field) => field.instantValueSync);
      if (liveFields.length) {
        const liveData = _.reduce(liveFields, (data, field) => {
          _.set(data, field.model, _.get(this.formData, field.model));
          return data;
        }, {});
        this.onboardingFlowStore.saveData(liveData);
      }
    },
    submitData() {
      if (this.submitting) {
        return;
      }
      this.submitting = true;
      this.errorMessage = null;
      this.onboardingFlowStore.submitData().then((result) => {
        var _a;
        if (result !== constants.SUBSTEP_CONTROLS.PAUSE_STEP) {
          this.onboardingFlowStore.trackStepEvent({
            eventAction: "succeed"
          });
          if (this.onboardingFlowStore.userInFunnel && ((_a = this.onboardingFlowStore.config) == null ? void 0 : _a.advanceTo)) {
            this.advanceToNextFlow();
          } else {
            this.transitionToNextStep();
          }
        }
        this.submitting = false;
      }).catch((error) => {
        const errors = _.get(error.response, "data.errors", null);
        if (errors && !_.isEmpty(errors)) {
          const fieldError = errors[Object.keys(errors)[0]];
          this.errorMessage = fieldError.message ? fieldError.message : fieldError[0];
        } else {
          this.errorMessage = _.get(error.response, "data.message", "An error occurred. Please try again later.");
        }
        this.$eventBus.$emit("resetCaptcha");
        this.onboardingFlowStore.trackStepEvent({
          eventAction: "error",
          eventContent: this.errorMessage
        });
        this.submitting = false;
      });
    },
    transitionToNextStep() {
      this.isSubmitTransition = true;
      this.$eventBus.$emit("flowStepExit");
      this.updateTransition();
      this.$nextTick(() => {
        this.transitionId++;
        this.isFormActive = false;
        if (!this.isFormActive) {
          if (this.isSubmitTransition) {
            this.onboardingFlowStore.proceedToNextStep();
          } else {
            this.isFormActive = true;
          }
        }
      });
    },
    cloneStoreDataToFormData() {
      const fields = _.get(this.subStep, "formSchema.fields");
      if (fields) {
        this.formData = _.merge(
          ...fields.map((field) => {
            var _a, _b, _c;
            const propName = field.model;
            const newData = {};
            if (!_.isNil(_.get(this.onboardingFlowStore.data, propName))) {
              _.set(newData, propName, _.get(this.onboardingFlowStore.data, propName));
            } else if ((_a = field.preloadModel) == null ? void 0 : _a.storeGetter) {
              const storeGetter = field.preloadModel.storeGetter;
              const value = _.get(this.onboardingFlowStore.getters, storeGetter);
              _.set(newData, propName, value);
            } else if (field.preloadModel && "value" in field.preloadModel) {
              _.set(newData, propName, (_b = field.preloadModel) == null ? void 0 : _b.value);
            } else if ((_c = field == null ? void 0 : field.fieldOptions) == null ? void 0 : _c.preUploadedItems) {
              _.set(newData, propName, field.fieldOptions.preUploadedItems);
            }
            return newData;
          })
        );
      }
    },
    updateTransition() {
      const isMobileScreen = this.$isSmall.value || this.$isMedium.value;
      if (this.isSubmitTransition || this.initialTransition) {
        this.transition = isMobileScreen ? "slide-left" : "slide-up";
      } else {
        this.transition = isMobileScreen ? "slide-right" : "slide-down";
      }
      this.initialTransition = false;
    },
    onBeforeTransition() {
      document.body.classList.add("transition--active");
    },
    onAfterTransition() {
      document.body.classList.remove("transition--active");
    },
    onEnterKey() {
      if (!this.isButtonDisabled) {
        if (this.isSubmitDisabled) {
          this.$emit("disabledSubmit");
          return;
        }
        this.nextStep();
      }
    },
    toggleHelp() {
      this.$eventBus.$emit("requestHelp");
    },
    updateValid(value) {
      this.customComponentIsValid = value;
    },
    handleCookieModalVisibility(isVisible) {
      this.cookieModalVisible = isVisible;
    },
    handleCookieBannerVisibility(isVisible) {
      this.cookieBannerVisible = isVisible;
    },
    errorHandler(errors) {
      errorHandler(this, errors);
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "sub-step-header"
};
const _hoisted_2 = { class: "sub-step-header__title text-title" };
const _hoisted_3 = {
  key: 1,
  class: "sub-step-header__sub-title"
};
const _hoisted_4 = {
  key: 2,
  class: "sub-step__footer-info"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Markdown = resolveComponent("Markdown");
  const _component_GeneralNotification = resolveComponent("GeneralNotification");
  const _component_portal = resolveComponent("portal");
  const _component_BtsForm = resolveComponent("BtsForm");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_CookieConsentBanner = resolveComponent("CookieConsentBanner");
  return openBlock(), createElementBlock("section", {
    class: normalizeClass(["sub-step", { "sub-step--hide-recaptcha": $data.cookieBannerVisible }])
  }, [
    createVNode(Transition, {
      name: $data.transition,
      mode: "in-out",
      appear: "",
      onBeforeEnter: $options.onBeforeTransition,
      onBeforeLeave: $options.onBeforeTransition,
      onAfterEnter: $options.onAfterTransition,
      onAfterLeave: $options.onAfterTransition
    }, {
      default: withCtx(() => [
        $data.isFormActive ? (openBlock(), createElementBlock("div", {
          key: $data.transitionId,
          class: normalizeClass(["sub-step__content", {
            "sub-step__content--extend-bottom": $data.cookieBannerVisible
          }])
        }, [
          $options.headerVisible ? (openBlock(), createElementBlock("div", _hoisted_1, [
            $props.subStep.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent($props.subStep.headerComponent), { key: 0 })) : createCommentVNode("", true),
            _cache[1] || (_cache[1] = createTextVNode()),
            createBaseVNode("h1", _hoisted_2, toDisplayString(_ctx.$tt($props.subStep.title)), 1),
            _cache[2] || (_cache[2] = createTextVNode()),
            $props.subStep.subTitle ? (openBlock(), createElementBlock("h3", _hoisted_3, toDisplayString(_ctx.$tt($props.subStep.subTitle)), 1)) : $props.subStep.subTitleComponent ? (openBlock(), createBlock(resolveDynamicComponent($props.subStep.subTitleComponent), { key: 2 })) : createCommentVNode("", true),
            _cache[3] || (_cache[3] = createTextVNode()),
            $props.subStep.notes ? (openBlock(), createBlock(_component_GeneralNotification, {
              key: 3,
              class: "sub-step-header__notice",
              "notification-type": "info",
              "view-break": 400
            }, {
              default: withCtx(() => [
                createVNode(_component_Markdown, {
                  source: _ctx.$tt($props.subStep.notes),
                  show: ""
                }, null, 8, ["source"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _cache[4] || (_cache[4] = createTextVNode()),
            $data.errorMessage ? (openBlock(), createBlock(_component_GeneralNotification, {
              key: 4,
              class: "sub-step-header__notice",
              title: _ctx.$tt($data.errorTitle),
              "notification-type": "error",
              "view-break": 400
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$tt($data.errorMessage)), 1)
              ]),
              _: 1
            }, 8, ["title"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          _cache[9] || (_cache[9] = createTextVNode()),
          createBaseVNode("div", {
            class: normalizeClass($options.formWrapClasses),
            onKeyup: _cache[0] || (_cache[0] = withKeys((...args) => $options.onEnterKey && $options.onEnterKey(...args), ["enter"]))
          }, [
            $props.subStep.formSchema ? (openBlock(), createBlock(_component_BtsForm, {
              key: 0,
              ref: "form",
              schema: $props.subStep.formSchema,
              model: $data.formData,
              "submit-button-visible": false,
              "is-new-model": true,
              class: normalizeClass([{ "sub-step__form--error": $data.errorMessage }, "sub-step__form"]),
              onError: $options.errorHandler,
              onValidated: $options.onValidated
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.formSlots, (slot) => {
                  return openBlock(), createBlock(_component_portal, {
                    key: slot.name + "_portal",
                    to: slot.name
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(slot.component), {
                        key: slot.name
                      }))
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["schema", "model", "class", "onError", "onValidated"])) : $props.subStep.customComponent ? (openBlock(), createBlock(resolveDynamicComponent($props.subStep.customComponent), mergeProps({ key: 1 }, $props.subStep.customComponentProps, {
              tracking: $options.subStepTracking,
              "is-help-visible": $options.isHelpVisible,
              onUpdateValid: $options.updateValid
            }), null, 16, ["tracking", "is-help-visible", "onUpdateValid"])) : createCommentVNode("", true)
          ], 34),
          _cache[10] || (_cache[10] = createTextVNode()),
          $options.buttonVisible || $options.isHelpVisible || $options.isFooterVisible || $props.subStep.footerComponent ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["sub-step__footer", { "sub-step__footer--sticky": $props.subStep.submitButtonSticky }])
          }, [
            $options.buttonVisible ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["sub-step__button-section", { "sub-step__button-section--sticky": $props.subStep.submitButtonSticky }])
            }, [
              $props.subStep.submitComponent ? (openBlock(), createBlock(resolveDynamicComponent($props.subStep.submitComponent), {
                key: 0,
                disabled: $options.isButtonDisabled,
                "form-data": $data.formData,
                onClick: $options.ctaButtonClick
              }, null, 8, ["disabled", "form-data", "onClick"])) : !$props.subStep.submitComponent ? (openBlock(), createBlock(_component_BtsButton, {
                key: 1,
                disabled: $options.isButtonDisabled,
                class: "sub-step__button",
                onClick: $options.ctaButtonClick
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$tt($options.buttonText)), 1)
                ]),
                _: 1
              }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
              _cache[6] || (_cache[6] = createTextVNode()),
              $options.isHelpVisible ? (openBlock(), createBlock(_component_BtsButton, {
                key: 2,
                class: "sub-step__help-button",
                type: "icon",
                rounded: "",
                onClick: $options.toggleHelp
              }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("\n              ?\n            ")
                ])),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ], 2)) : createCommentVNode("", true),
            _cache[7] || (_cache[7] = createTextVNode()),
            $props.subStep.footerComponent ? (openBlock(), createBlock(resolveDynamicComponent($props.subStep.footerComponent), { key: 1 })) : createCommentVNode("", true),
            _cache[8] || (_cache[8] = createTextVNode()),
            $options.isFooterVisible ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createVNode(_component_i18n_t, {
                tag: "span",
                scope: "global",
                keypath: "login.twoFactorNotEnabled"
              }, {
                action: withCtx(() => [
                  createVNode(_component_BtsLink, {
                    to: "",
                    onClicked: $options.ctaButtonClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("login.twoFactorNotEnabledAction")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClicked"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]),
    _cache[11] || (_cache[11] = createTextVNode()),
    createVNode(_component_CookieConsentBanner, {
      class: "sub-step__cookie-banner",
      onModalVisibilityChange: $options.handleCookieModalVisibility,
      onBannerVisibilityChange: $options.handleCookieBannerVisibility
    }, null, 8, ["onModalVisibilityChange", "onBannerVisibilityChange"])
  ], 2);
}
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-41f6a81b"]]);
const branchAttributionMixin = {
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("_branch_match_id")) {
      this.$branch.lib.data((_2, response) => {
        if ((response == null ? void 0 : response.data_parsed["~campaign"]) && (response == null ? void 0 : response.data_parsed["~channel"]) && (response == null ? void 0 : response.data_parsed["~feature"]) && (response == null ? void 0 : response.data_parsed["~tags"])) {
          trackInteraction("[Branch] OPEN WEB", response.data_parsed);
        }
      });
    }
  }
};
const _sfc_main = {
  name: "SubStepPage",
  components: {
    HelpPanel,
    SubStep: __nuxt_component_1,
    SubStepNavigation: __nuxt_component_0
  },
  mixins: [branchAttributionMixin],
  beforeRouteUpdate(to, from, next) {
    if (to.name === `onboarding-flow-step-substep` && to.params.flow === from.params.flow) {
      const newPath = path.join(this.$router.options.base, to.fullPath);
      const fromFlow = from.params.flow;
      const toFlow = to.params.flow;
      const fromStep = from.params.step;
      const toStep = to.params.step;
      let triggerPageView = true;
      if (fromFlow === toFlow && !fromStep && toStep) {
        window.history.replaceState({}, null, newPath);
        triggerPageView = false;
      } else {
        window.history.pushState({}, null, newPath);
      }
      this.$router.currentRoute.value = to;
      this.$eventBus.$emit("flowSubStepSlide");
      this.$nextTick(() => {
        this.onboardingFlowStore.updateCurrentStep({ route: to, triggerPageView });
      });
      next(false);
    } else {
      next();
    }
    if (this.$refs.helpPanel) {
      this.$refs.helpPanel.resetCupcake();
    }
  },
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore()
    };
  },
  computed: {
    subPanelsVisible() {
      return !this.onboardingFlowStore.currentStep.subStep.isCheckpoint;
    },
    helpPanelVisibleOnly() {
      const step = this.onboardingFlowStore.currentStep.step;
      return !this.subPanelsVisible && step.subSteps.length === 1 && !!step.subSteps[0].help;
    },
    configLoaded() {
      return this.onboardingFlowStore.configLoaded;
    }
  },
  mounted() {
    if (this.configLoaded) {
      this.onboardingFlowStore.updateCurrentStep({ triggerPageView: false });
    }
    this.$router.beforeEach((to) => {
      const oldMeta = { ...to.meta };
      delete oldMeta.__navigationId;
      to.meta = oldMeta;
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SubStepNavigation = __nuxt_component_0;
  const _component_SubStep = __nuxt_component_1;
  const _component_HelpPanel = resolveComponent("HelpPanel");
  return $options.configLoaded ? (openBlock(), createElementBlock("section", {
    key: 0,
    class: normalizeClass(["container", { "help-panel--only": $options.helpPanelVisibleOnly }])
  }, [
    $options.subPanelsVisible ? (openBlock(), createBlock(_component_SubStepNavigation, {
      key: 0,
      current: $setup.onboardingFlowStore.currentStep,
      class: "substep-navigation"
    }, null, 8, ["current"])) : createCommentVNode("", true),
    _cache[0] || (_cache[0] = createTextVNode()),
    createVNode(_component_SubStep, {
      "sub-step": $setup.onboardingFlowStore.currentStep.subStep,
      "help-visible": $options.subPanelsVisible || $options.helpPanelVisibleOnly,
      class: "substep-section"
    }, null, 8, ["sub-step", "help-visible"]),
    _cache[1] || (_cache[1] = createTextVNode()),
    $options.subPanelsVisible || $options.helpPanelVisibleOnly ? (openBlock(), createBlock(_component_HelpPanel, {
      key: 1,
      ref: "helpPanel",
      help: $setup.onboardingFlowStore.currentStep.subStep.help,
      "enable-cupcake": $setup.onboardingFlowStore.currentStep.subStep.enableCupcake,
      class: "help-panel"
    }, null, 8, ["help", "enable-cupcake"])) : createCommentVNode("", true)
  ], 2)) : createCommentVNode("", true);
}
const __substep__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2abeb15c"]]);
export {
  __substep__ as default
};
