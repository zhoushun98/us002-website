import { _ as _export_sfc, B as BtsButton, W as useFormsStore, aV as formConstants, i as constants, S as modals, aW as calculateAge, j as resolveComponent, o as openBlock, b as createBlock, w as withCtx, d as createTextVNode, t as toDisplayString } from "./Di9v4FW5.js";
import { C as CommonTrackingReporterFactory } from "./RJFLnoeS.js";
const _sfc_main = {
  name: "RegisterSubmitComponent",
  components: {
    BtsButton
  },
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  emits: ["click"],
  // TODO define emits on all components
  setup() {
    return {
      formsStore: useFormsStore()
    };
  },
  computed: {
    isCorpoFlow() {
      return this.formsStore.isCorpo;
    }
  },
  methods: {
    submit() {
      if (this.isCorpoFlow) {
        this.$emit("click");
        return;
      }
      if (this.isAgeValid()) {
        this.$emit("click");
      } else {
        CommonTrackingReporterFactory.init().clientError({
          type: formConstants.ERROR_TYPES.FORM_VALIDATION,
          code: constants.ERROR_CODES.INVALID_AGE,
          message: constants.ERROR_MESSAGES.INVALID_AGE,
          process: constants.PROCESS_TYPES.ONBOARDING_REGISTRATION
        });
        modals.createWarningDialog(this, {
          messageTitle: `Oops! You're a bit too young to register`,
          buttonText: "Back to home page",
          message: "You need to be at least 18 years old to use our services.",
          onConfirm: () => {
            window.location = this.$routes.index;
          }
        });
      }
    },
    isAgeValid() {
      const difference = calculateAge(this.formData.dateOfBirth, /* @__PURE__ */ new Date());
      return difference >= this.$constants.minimumOnboardingAge;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createBlock(_component_BtsButton, {
    class: "sub-step__button",
    onClick: _cache[0] || (_cache[0] = ($event) => $options.submit())
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.$t("register.registerButton")), 1)
    ]),
    _: 1
  });
}
const RegisterSubmitComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  RegisterSubmitComponent as default
};
