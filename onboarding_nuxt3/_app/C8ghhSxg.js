import { _ as _export_sfc, a7 as __nuxt_component_0, u as useOnboardingFlowStore, G as useOnboardingUserStore, a6 as CONSTANTS, V as PageRouteSymbol, h as _, i as constants, j as resolveComponent, o as openBlock, c as createElementBlock, b as createBlock, e as createCommentVNode, d as createTextVNode, $ as renderSlot, k as createVNode } from "./0TEAd3E2.js";
import { u as useOnboardingStore } from "./9zrsonDR.js";
const _sfc_main = {
  components: {
    Navigation: __nuxt_component_0
  },
  setup() {
    return {
      onboardingFlowStore: useOnboardingFlowStore(),
      onboardingStore: useOnboardingStore(),
      onboardingUserStore: useOnboardingUserStore()
    };
  },
  data() {
    return {
      context: null,
      isDemoMode: CONSTANTS.demoMode ?? false
    };
  },
  computed: {
    isMobileWebview() {
      return !!this.$router.currentRoute.value.query.mobile;
    }
  },
  watch: {
    $route(newValue) {
      this.setContext(newValue.params.flow);
    }
  },
  created() {
    this.waitForContext();
  },
  methods: {
    waitForContext() {
      if ((this._.provides[PageRouteSymbol] || this.$route).params.flow) {
        this.setContext();
      } else {
        this.$nextTick(this.waitForContext);
      }
    },
    setContext(preferredFlow) {
      const flow = preferredFlow || (this._.provides[PageRouteSymbol] || this.$route).params.flow;
      if (flow) {
        const foundContext = _.invert(constants.PATHS)[flow];
        if (foundContext) {
          const newContext = constants.CONTEXTS[foundContext];
          if (newContext !== this.context) {
            this.context = newContext;
            this.onboardingFlowStore.establishContext(this.context);
          }
        } else {
          throw new Error("Flow context not found");
        }
      }
    }
  }
};
const _hoisted_1 = { class: "layout" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Navigation = __nuxt_component_0;
  const _component_portal_target = resolveComponent("portal-target");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$options.isMobileWebview ? (openBlock(), createBlock(_component_Navigation, {
      key: 0,
      "show-login": $setup.onboardingFlowStore.isRegistration || $setup.onboardingFlowStore.isActivation || $setup.onboardingFlowStore.isLostLogin || $setup.onboardingFlowStore.isLostTFA || $setup.onboardingFlowStore.isRecoverPassword,
      "show-register": $setup.onboardingFlowStore.isLogin && !$data.isDemoMode,
      "show-progress": $setup.onboardingFlowStore.showProgressBar,
      progress: 0.05 + $setup.onboardingStore.progress,
      "full-name": $setup.onboardingUserStore.fullName
    }, null, 8, ["show-login", "show-register", "show-progress", "progress", "full-name"])) : createCommentVNode("", true),
    _cache[0] || (_cache[0] = createTextVNode()),
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    _cache[1] || (_cache[1] = createTextVNode()),
    createVNode(_component_portal_target, { name: "tooltip__holder" })
  ]);
}
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6f2e8d3e"]]);
export {
  _default as default
};
