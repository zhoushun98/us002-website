import { _ as _export_sfc, M as Modal, b0 as useScaStore, P as PAGE_CONTEXT, aV as EventBusConstants, y as resolveComponent, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, c as createBlock, h as createCommentVNode, A as AppIcon, V as AppTooltip, au as Markdown, B as BtsButton, C as CONSTANTS, aj as _, F as Fragment, g as createTextVNode, i as createBaseVNode, t as toDisplayString, J as normalizeClass, aH as withDirectives, ae as renderSlot, aI as vShow, G as Transition, a8 as PageRouteSymbol, gA as q, a4 as BtsLink, a5 as renderList, ar as createStaticVNode, q as useUserStateStore, dS as vaspDisclaimerConstants, gB as AppHeader, gC as AppFooter } from "./BEpVD-aq.js";
import { S as ScaForm } from "./CNnLK6fp.js";
import { u as useVisibilityStore } from "./ljMJl-cz.js";
import { T as ToastsAndLiquidationAlerts } from "./G1TgZVbr.js";
import { C as ContentContainer } from "./C7aNjhrz.js";
import { u as useLocaleStore } from "./C7lY7hB5.js";
import "./D4HcQE78.js";
import "./CZjLos_N.js";
import "./qPMKhu5A.js";
import "./CpoBxDnQ.js";
import "./DQjdLM2K.js";
import "./CvedyxjN.js";
const _sfc_main$8 = {
  name: "ScaUtils",
  components: {
    ScaForm,
    Modal
  },
  setup() {
    return {
      scaStore: useScaStore(),
      visibilityStore: useVisibilityStore()
    };
  },
  data() {
    return {
      isStrongAuthenticationRequiredForPage: PAGE_CONTEXT.sca_required
    };
  },
  computed: {
    title() {
      if (this.isModalDismissible) {
        return "Additional confirmation required";
      }
      return "Locked due to inactivity";
    },
    noticeText() {
      if (this.isModalDismissible) {
        return null;
      }
      return "You've been inactive for a while, so we locked this page to keep your account safe.";
    },
    isModalDismissible() {
      return this.scaStore.hasQueuedFunctionToExecute;
    },
    isModalVisible() {
      return !this.scaStore.isElevated && this.scaStore.requiredChallengeTypes.length > 0 && !this.isMobileWebview() && // We're either timing out on a view that requires SCA
      // or we have an action that needs to be executed using an elevated state
      (this.isStrongAuthenticationRequiredForPage || this.scaStore.hasQueuedFunctionToExecute);
    }
  },
  watch: {
    "visibilityStore.isHidden": {
      async handler(isHidden, wasHidden) {
        if (!isHidden && wasHidden && this.scaStore && !this.isMobileWebview()) {
          if (!this.scaStore.isElevated && this.isStrongAuthenticationRequiredForPage) {
            await this.scaStore.fetchStatus();
          }
        }
      }
    },
    $route() {
      const wasPreviouslyRequired = this.isStrongAuthenticationRequiredForPage;
      this.isStrongAuthenticationRequiredForPage = PAGE_CONTEXT.sca_required;
      if (this.isStrongAuthenticationRequiredForPage && !wasPreviouslyRequired) {
        this.scaStore.fetchStatus();
      }
    }
  },
  created() {
    var _a;
    if (window.WidgetsEventBus) {
      (_a = window.WidgetsEventBus) == null ? void 0 : _a.$on(EventBusConstants.SCA.EXECUTE_ELEVATED, this.scaStore.executeWhileStronglyAuthenticated);
    } else {
      const scaStore = this.scaStore;
      Object.defineProperty(window, "WidgetsEventBus", {
        configurable: true,
        set(value) {
          var _a2;
          Object.defineProperty(window, "WidgetsEventBus", {
            configurable: true,
            enumerable: true,
            writable: true,
            value
          });
          (_a2 = window.WidgetsEventBus) == null ? void 0 : _a2.$on(EventBusConstants.SCA.EXECUTE_ELEVATED, scaStore.executeWhileStronglyAuthenticated);
        }
      });
    }
  },
  unmounted() {
    var _a;
    (_a = window.WidgetsEventBus) == null ? void 0 : _a.$off(EventBusConstants.SCA.EXECUTE_ELEVATED, this.scaStore.executeWhileStronglyAuthenticated);
  },
  methods: {
    isMobileWebview() {
      var _a;
      return ((_a = this.$nativeBridge) == null ? void 0 : _a.isAvailable()) ?? false;
    },
    onOpen() {
      setTimeout(() => {
        var _a;
        (_a = this.$refs.modal.$el.getElementsByTagName("input").item(0)) == null ? void 0 : _a.focus();
      }, 500);
    },
    onClose() {
      this.scaStore.clearFunctionQueuedForExecution();
    }
  }
};
const _hoisted_1$8 = { class: "sca-modal" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ScaForm = resolveComponent("ScaForm");
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_Modal, {
      ref: "modal",
      "is-open": $options.isModalVisible,
      dismissible: $options.isModalDismissible,
      title: $options.title,
      priority: "high",
      onOpen: $options.onOpen,
      "onUpdate:isOpen": $options.onClose,
      onClose: $options.onClose
    }, {
      default: withCtx(() => [
        $options.isModalVisible ? (openBlock(), createBlock(_component_ScaForm, {
          key: 0,
          "required-challenge-types": $setup.scaStore.requiredChallengeTypes,
          notice: $options.noticeText,
          "show-cancel-navigation": !$options.isModalDismissible,
          "auto-focus": $options.isModalDismissible,
          class: "sca-form-container"
        }, null, 8, ["required-challenge-types", "notice", "show-cancel-navigation", "auto-focus"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["is-open", "dismissible", "title", "onOpen", "onUpdate:isOpen", "onClose"])
  ]);
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {
  name: "HelpPanel",
  components: {
    AppIcon,
    AppTooltip,
    Markdown,
    BtsButton
  },
  props: {
    help: {
      type: [String, Object],
      default: null
    },
    enableCupcake: {
      type: Boolean,
      default: true
    },
    showCupcakeAfter: {
      type: Number,
      default: 5e3
    },
    widget: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false,
      isMarkdownRendered: false,
      isLeaveTransitionActive: false,
      showCupcake: false,
      cupcakeTimer: null,
      showVaspDisclaimer: CONSTANTS.showVaspInvestmentRiskWarning
    };
  },
  computed: {
    isVisible() {
      return _.isString(this.help) || this.$slots.default;
    }
  },
  mounted() {
    if (this.$nuxt) {
      this.$eventBus.$on("requestHelp", this.toggle);
    } else {
      this.$eventBus.$on("requestHelp", this.toggle);
    }
    this.updateMaxHeight();
    window.addEventListener("resize", this.updateMaxHeight);
    this.resetCupcake();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateMaxHeight);
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.showCupcake = false;
        this.$nextTick(this.updateMaxHeight);
      }
    },
    resetCupcake() {
      this.showCupcake = false;
      clearTimeout(this.cupcakeTimer);
      if (this.enableCupcake) {
        this.startCupcakeTimer();
      }
    },
    startCupcakeTimer() {
      this.cupcakeTimer = setTimeout(() => {
        this.$nextTick(() => {
          this.showCupcake = true;
        });
      }, this.showCupcakeAfter);
    },
    updateMaxHeight() {
      var _a;
      if ((_a = this.$refs.content) == null ? void 0 : _a.style) {
        this.$refs.content.style.maxHeight = `${window.innerHeight - this.$refs.header.offsetHeight}px`;
      }
    },
    onBeforeEnter() {
      document.body.classList.add("transition--active");
      this.isMarkdownRendered = true;
    },
    onAfterEnter() {
      document.body.classList.remove("transition--active");
    },
    onBeforeLeave() {
      this.isLeaveTransitionActive = true;
    },
    onAfterLeave() {
      this.isMarkdownRendered = false;
      this.isLeaveTransitionActive = false;
    }
  }
};
const _hoisted_1$7 = { class: "cupcake" };
const _hoisted_2$5 = {
  ref: "content",
  class: "help-content__text"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_AppTooltip = resolveComponent("AppTooltip");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_Markdown = resolveComponent("Markdown");
  return openBlock(), createElementBlock("section", {
    class: normalizeClass([{
      "help-panel--open": $data.isOpen,
      "help-panel--active": $data.isMarkdownRendered,
      "help-panel--leaving": $data.isLeaveTransitionActive,
      "help-panel--widget": $props.widget,
      "help-panel--vasp-disclaimer": $data.showVaspDisclaimer
    }, "help-panel noprint"])
  }, [
    !$props.widget || $data.isOpen ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $options.isVisible ? (openBlock(), createBlock(_component_BtsButton, {
        key: 0,
        class: normalizeClass(["help-button", { "help-button--widget": $props.widget }]),
        type: "icon",
        rounded: "",
        onClick: $options.toggle
      }, {
        default: withCtx(() => [
          $props.widget ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            $data.isOpen ? (openBlock(), createBlock(_component_AppIcon, {
              key: 0,
              icon: "monochrome/close.svg",
              size: "16"
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode("\n            ?\n          ")
            ], 64))
          ], 64)) : (openBlock(), createBlock(_component_AppTooltip, {
            key: 1,
            ref: "cupcake",
            placement: "left",
            strategy: "fixed",
            distance: 30,
            shown: $props.enableCupcake && $data.showCupcake && !$data.isOpen,
            "no-auto-focus": true
          }, {
            trigger: withCtx(() => [
              $data.isOpen ? (openBlock(), createBlock(_component_AppIcon, {
                key: 0,
                icon: "monochrome/close.svg",
                size: "16"
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode("\n              ?\n            ")
              ], 64))
            ]),
            default: withCtx(() => [
              _cache[1] || (_cache[1] = createTextVNode()),
              createBaseVNode("div", _hoisted_1$7, toDisplayString(_ctx.$t("components.helpPanel.needHelpTooltip")), 1)
            ]),
            _: 1
          }, 8, ["shown"]))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    _cache[3] || (_cache[3] = createTextVNode()),
    createVNode(Transition, {
      name: "slide",
      onBeforeEnter: $options.onBeforeEnter,
      onAfterEnter: $options.onAfterEnter,
      onAfterLeave: $options.onAfterLeave,
      onBeforeLeave: $options.onBeforeLeave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["help-content", { "help-content--widget": $props.widget }])
        }, [
          createBaseVNode("div", {
            ref: "header",
            class: "help-content__header"
          }, toDisplayString(_ctx.$t("components.helpPanel.helpTitle")), 513),
          _cache[2] || (_cache[2] = createTextVNode()),
          createBaseVNode("div", _hoisted_2$5, [
            $props.help ? (openBlock(), createBlock(_component_Markdown, {
              key: 0,
              source: _ctx.$tt($props.help),
              show: $data.isMarkdownRendered
            }, null, 8, ["source", "show"])) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
          ], 512)
        ], 2), [
          [vShow, $data.isOpen && $options.isVisible]
        ])
      ]),
      _: 3
    }, 8, ["onBeforeEnter", "onAfterEnter", "onAfterLeave", "onBeforeLeave"]),
    _cache[4] || (_cache[4] = createTextVNode()),
    !$props.widget ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "help-mobile-backdrop",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.toggle && $options.toggle(...args))
    })) : createCommentVNode("", true)
  ], 2);
}
const HelpPanel = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-68121888"]]);
const _sfc_main$6 = {
  name: "HelpPanelTrigger",
  props: {
    hasSideMenu: {
      type: Boolean,
      default: false
    },
    portalTarget: {
      type: String,
      default: "helpPanelTrigger"
    }
  },
  emits: ["click"],
  computed: {
    isMarketsPage() {
      return (this._.provides[PageRouteSymbol] || this.$route).name === "markets-base-counter";
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_portal = resolveComponent("portal");
  return openBlock(), createBlock(_component_portal, { to: $props.portalTarget }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass({
          "help-trigger": true,
          "help-trigger--markets": $options.isMarketsPage
        }),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, null, 2)
    ]),
    _: 1
  }, 8, ["to"]);
}
const HelpPanelTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-bde41d72"]]);
const _sfc_main$5 = {
  name: "HelpPanelContainer",
  components: { HelpPanel, HelpPanelTrigger },
  props: {
    hasSideMenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasHelpContent() {
      return q.getContentForTarget("help_text__holder").length;
    }
  }
};
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$4 = { class: "help-panel-wrap" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HelpPanelTrigger = resolveComponent("HelpPanelTrigger");
  const _component_portal_target = resolveComponent("portal-target");
  const _component_HelpPanel = resolveComponent("HelpPanel");
  return $options.hasHelpContent ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(_component_HelpPanelTrigger, {
      "has-side-menu": $props.hasSideMenu,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$eventBus.$emit("requestHelp"))
    }, null, 8, ["has-side-menu"]),
    _cache[1] || (_cache[1] = createTextVNode()),
    createBaseVNode("div", _hoisted_2$4, [
      createVNode(_component_HelpPanel, {
        widget: "",
        "enable-cupcake": false
      }, {
        default: withCtx(() => [
          createVNode(_component_portal_target, { name: "help_text__holder" })
        ]),
        _: 1
      })
    ])
  ])) : createCommentVNode("", true);
}
const HelpPanelContainer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-2941969c"]]);
const _sfc_main$4 = {
  name: "SideSubMenu",
  components: { BtsLink },
  props: {
    navigationItems: {
      type: Array,
      default: () => []
    },
    openByDefault: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOpen() {
      return this.openByDefault || this.navigationItems.some((item) => item.selected);
    }
  }
};
const _hoisted_1$5 = ["href"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_SideSubMenu = resolveComponent("SideSubMenu", true);
  return $props.navigationItems ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["side-menu__sub-level", {
      "side-menu__sub-level--opened": $options.isOpen
    }])
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.navigationItems, (subItem) => {
      return openBlock(), createElementBlock(Fragment, {
        key: subItem.link
      }, [
        subItem.clientMode ? (openBlock(), createBlock(_component_BtsLink, {
          key: 0,
          to: subItem.link,
          class: normalizeClass({
            "side-menu__link": true,
            "side-menu__link--active": subItem.selected
          })
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(subItem.text), 1)
          ]),
          _: 2
        }, 1032, ["to", "class"])) : (openBlock(), createElementBlock("a", {
          key: 1,
          href: subItem.link,
          class: normalizeClass({
            "side-menu__link": true,
            "side-menu__link--active": subItem.selected
          })
        }, toDisplayString(subItem.text), 11, _hoisted_1$5)),
        _cache[0] || (_cache[0] = createTextVNode()),
        subItem.subNavigation ? (openBlock(), createBlock(_component_SideSubMenu, {
          key: 2,
          "navigation-items": subItem.subNavigation,
          "open-by-default": false
        }, null, 8, ["navigation-items"])) : createCommentVNode("", true)
      ], 64);
    }), 128))
  ], 2)) : createCommentVNode("", true);
}
const SideSubMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "SideMenu",
  components: { BtsLink, SideSubMenu },
  data() {
    return {
      navigationItems: []
    };
  },
  watch: {
    $route() {
      var _a;
      this.navigationItems = ((_a = this.$navigation) == null ? void 0 : _a.side) ?? [];
    }
  },
  mounted() {
    var _a;
    this.navigationItems = ((_a = this.$navigation) == null ? void 0 : _a.side) ?? [];
  }
};
const _hoisted_1$4 = { class: "side-menu" };
const _hoisted_2$3 = { class: "side-menu__sticky-wrapper" };
const _hoisted_3$1 = ["href"];
const _hoisted_4$1 = {
  key: 1,
  class: "side-menu__section-name"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_SideSubMenu = resolveComponent("SideSubMenu");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.navigationItems, (navigationItem) => {
        return openBlock(), createElementBlock(Fragment, {
          key: navigationItem.link
        }, [
          navigationItem.link ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            navigationItem.clientMode ? (openBlock(), createBlock(_component_BtsLink, {
              key: 0,
              to: navigationItem.link,
              class: normalizeClass({
                "side-menu__link": true,
                "side-menu__link--active": navigationItem.selected
              })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(navigationItem.text), 1)
              ]),
              _: 2
            }, 1032, ["to", "class"])) : (openBlock(), createElementBlock("a", {
              key: 1,
              href: navigationItem.link,
              class: normalizeClass({
                "side-menu__link": true,
                "side-menu__link--active": navigationItem.selected
              })
            }, toDisplayString(navigationItem.text), 11, _hoisted_3$1))
          ], 64)) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(navigationItem.text), 1)),
          _cache[0] || (_cache[0] = createTextVNode()),
          navigationItem.subNavigation ? (openBlock(), createBlock(_component_SideSubMenu, {
            key: 2,
            "navigation-items": navigationItem.subNavigation,
            "open-by-default": true
          }, null, 8, ["navigation-items"])) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ])
  ]);
}
const SideMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "73",
  height: "98"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createStaticVNode('<g fill="none" fill-rule="evenodd" transform="translate(1 1)"><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="m57.77 81.982-2.124-5.947m2.549 6.372h5.097"></path><circle cx="57.746" cy="82.431" r="13.144" stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round"></circle><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="M48 91.632H.425L1.77 62.224a6.18 6.18 0 0 1 4.68-5.728l14.078-3.52S23.173 57.7 30.584 57.7c7.412 0 10.052-4.728 10.052-4.728l14.076 3.524a6.18 6.18 0 0 1 4.679 5.732l.34 7.014M14.342 71.53l-1.546 20.102m9.279-37.468V44.39m17.011 10.051V44.39m5.516-18.478-2.424 2.318-3.092-4.64-3.094 3.093c-4.64 0-12.37-1.546-15.462-9.278m1.545 7.732-3.093 3.093-1.547-1.547s-4.639-1.546-4.639 3.093 1.546 4.64 4.64 4.64c1.546 12.37 12.37 12.37 12.37 12.37h1.547s10.825 0 12.371-12.37c1.899 0 3.215 0 3.948-1.073"></path><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="M14.342 26.683S12.796 14.312 15.89 11.22c2.445-2.445 4.639-1.547 4.639-1.547s6.186-7.731 20.104-3.092a12.53 12.53 0 0 1 6.524 4.532"></path><path fill="#6d6e71" fill-rule="nonzero" d="M57.287 8.496c7.044 0 12.755 5.71 12.755 12.755 0 7.044-5.711 12.755-12.755 12.755s-12.756-5.71-12.756-12.755c.008-7.042 5.714-12.748 12.756-12.755m0-.85A13.605 13.605 0 1 0 70.89 21.251c0-7.514-6.09-13.605-13.603-13.605"></path><path stroke="#6d6e71" stroke-linecap="round" stroke-linejoin="round" d="M49.634 31.454a7.653 7.653 0 1 1 15.304 0"></path><path fill="#6d6e71" fill-rule="nonzero" d="M57.287 14.5a4.252 4.252 0 1 1-.002 8.503 4.252 4.252 0 0 1 .002-8.504zm0-.85a5.097 5.097 0 1 0 .008 10.195 5.097 5.097 0 0 0-.008-10.195"></path><circle cx="57.77" cy="82.569" r="1" fill="#4e95f5" fill-rule="nonzero" stroke="#4e95f5" stroke-linecap="round" stroke-linejoin="round"></circle><path stroke="#4e95f5" stroke-linecap="round" stroke-linejoin="round" d="M2.973 38.419v10.855H13.83m30.756 0H55.44V38.42m9.028 42.057 2.636.738.74-2.635M13.83.425H2.972V11.28M46.506.425h1.808m3.619 0h1.81m3.618 0h1.809m3.618 0h1.81"></path><path stroke="#4e95f5" stroke-dasharray="3.133" stroke-linecap="round" stroke-linejoin="round" d="M57.746 91.752a9.321 9.321 0 1 0 0-18.642 9.321 9.321 0 0 0 0 18.642"></path><path stroke="#4e95f5" stroke-linecap="round" stroke-linejoin="round" d="M56.264 91.635a9.322 9.322 0 1 1 10.45-11.748"></path></g>', 1)
  ]));
}
const PersonPendingIcon = { render };
const _sfc_main$2 = {
  components: {
    ContentContainer,
    AppIcon,
    BtsButton,
    PersonPendingIcon
  },
  setup() {
    return {
      userStateStore: useUserStateStore()
    };
  },
  methods: {
    setUpTFA() {
      window.location.href = this.$routes.onboarding_2fa;
    },
    verifyAccount() {
      window.location.href = this.$routes.account_verify;
    }
  }
};
const _hoisted_1$2 = { class: "not-verified-and-trusted" };
const _hoisted_2$2 = {
  key: 0,
  class: "not-verified-and-trusted__body"
};
const _hoisted_3 = {
  key: 1,
  class: "not-verified-and-trusted__body"
};
const _hoisted_4 = {
  key: 2,
  class: "not-verified-and-trusted__body"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PersonPendingIcon = resolveComponent("PersonPendingIcon");
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_ContentContainer = resolveComponent("ContentContainer");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_ContentContainer, {
      "enable-min-height": "",
      "loading-finished": "",
      "justify-center": false
    }, {
      body: withCtx(() => [
        $setup.userStateStore.state.hasPendingVerificationRequest ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          _cache[0] || (_cache[0] = createBaseVNode("h2", { class: "not-verified-and-trusted__title" }, "\n            We're verifying your account.\n          ", -1)),
          _cache[1] || (_cache[1] = createTextVNode()),
          createVNode(_component_PersonPendingIcon, { class: "not-verified-and-trusted__pending-icon" }),
          _cache[2] || (_cache[2] = createTextVNode()),
          _cache[3] || (_cache[3] = createBaseVNode("p", { class: "not-verified-and-trusted__text" }, "\n            You'll get an email when we're done and then you can start trading crypto.\n          ", -1)),
          _cache[4] || (_cache[4] = createTextVNode()),
          _cache[5] || (_cache[5] = createBaseVNode("p", { class: "not-verified-and-trusted__text" }, "\n            Feel free to browse the exchange while you wait.\n          ", -1))
        ])) : !$setup.userStateStore.state.isVerified ? (openBlock(), createElementBlock("div", _hoisted_3, [
          _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "not-verified-and-trusted__title" }, "\n            Continue setting up your account.\n          ", -1)),
          _cache[8] || (_cache[8] = createTextVNode()),
          _cache[9] || (_cache[9] = createBaseVNode("p", { class: "not-verified-and-trusted__text" }, "\n            Your first trade is just around the corner.\n          ", -1)),
          _cache[10] || (_cache[10] = createTextVNode()),
          createVNode(_component_AppIcon, {
            icon: "verification-person.svg",
            size: "96",
            class: "not-verified-and-trusted__verify-icon"
          }),
          _cache[11] || (_cache[11] = createTextVNode()),
          _cache[12] || (_cache[12] = createBaseVNode("p", { class: "not-verified-and-trusted__text not-verified-and-trusted__verify-text" }, "\n            You need to verify your account first.\n          ", -1)),
          _cache[13] || (_cache[13] = createTextVNode()),
          createVNode(_component_BtsButton, {
            fluid: "",
            class: "not-verified-and-trusted__button",
            onClick: $options.verifyAccount
          }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("\n            Verify Account\n          ")
            ])),
            _: 1
          }, 8, ["onClick"])
        ])) : !$setup.userStateStore.state.hasTwoFactorAuthentication ? (openBlock(), createElementBlock("div", _hoisted_4, [
          _cache[15] || (_cache[15] = createBaseVNode("h2", { class: "not-verified-and-trusted__title" }, "\n            Let's secure your account.\n          ", -1)),
          _cache[16] || (_cache[16] = createTextVNode()),
          createVNode(_component_AppIcon, {
            icon: "two-factor-auth.svg",
            size: "96",
            class: "not-verified-and-trusted__locked-icon"
          }),
          _cache[17] || (_cache[17] = createTextVNode()),
          _cache[18] || (_cache[18] = createBaseVNode("p", { class: "not-verified-and-trusted__text not-verified-and-trusted__locked-text" }, "\n            We ask all users to enable two-factor authentication. This protects your account in case someone gets your password.\n          ", -1)),
          _cache[19] || (_cache[19] = createTextVNode()),
          createVNode(_component_BtsButton, {
            fluid: "",
            class: "not-verified-and-trusted__button",
            onClick: $options.setUpTFA
          }, {
            default: withCtx(() => _cache[14] || (_cache[14] = [
              createTextVNode("\n            Set up 2FA\n          ")
            ])),
            _: 1
          }, 8, ["onClick"])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
const NotVerifiedAndTrusted = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-5d172095"]]);
const _sfc_main$1 = {
  name: "FooterVaspDisclaimer",
  components: {
    Markdown
  },
  data() {
    var _a;
    return {
      showVaspDisclaimer: false,
      useShortVaspFooter: false,
      disclaimerUrl: (_a = this.$constants) == null ? void 0 : _a.vaspInvestmentRiskWarningUrl,
      vaspDisclaimerConstants
    };
  },
  computed: {
    disclaimerText() {
      if (this.useShortVaspFooter) {
        return vaspDisclaimerConstants.VASP_FOOTER_SHORT_DISCLAIMER_TEXT(this.disclaimerUrl);
      } else {
        return vaspDisclaimerConstants.VASP_FOOTER_DISCLAIMER_TEXT(this.disclaimerUrl);
      }
    }
  },
  watch: {
    $route() {
      this.showVaspDisclaimer = this.$pageContext.showVaspInvestmentRiskWarning;
      this.useShortVaspFooter = this.$pageContext.useShortVaspFooter;
    }
  },
  mounted() {
    this.showVaspDisclaimer = this.$pageContext.showVaspInvestmentRiskWarning;
    this.useShortVaspFooter = this.$pageContext.useShortVaspFooter;
  }
};
const _hoisted_1$1 = {
  key: 0,
  id: "footerDisclaimer",
  ref: "footerDisclaimer",
  class: "footer-disclaimer"
};
const _hoisted_2$1 = { class: "container container--block" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Markdown = resolveComponent("Markdown");
  return $data.showVaspDisclaimer ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createVNode(_component_Markdown, {
        source: _ctx.$tt($options.disclaimerText),
        html: "",
        class: "footer-disclaimer__text"
      }, null, 8, ["source"])
    ])
  ], 512)) : createCommentVNode("", true);
}
const FooterVaspDisclaimer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    FooterVaspDisclaimer,
    ScaUtils: __nuxt_component_0,
    SideMenu,
    AppHeader,
    AppFooter,
    ToastsAndLiquidationAlerts,
    NotVerifiedAndTrusted,
    HelpPanelContainer
  },
  middleware: ["check-navigation-path"],
  setup() {
    return {
      userStateStore: useUserStateStore(),
      localeStore: useLocaleStore()
    };
  },
  data() {
    return {
      routeChangeCount: 0
    };
  },
  computed: {
    notVerifiedAndTrusted() {
      this.routeChangeCount;
      return this.$pageContext.isVerifiedAndTrusted === false;
    },
    hasHeader() {
      this.routeChangeCount;
      return !this.$constants.isWebview;
    },
    hasFooter() {
      this.routeChangeCount;
      return !this.$constants.isWebview && !this.$pageContext.noFooter;
    },
    hasSideMenu() {
      var _a;
      this.routeChangeCount;
      return ((_a = this.$navigation) == null ? void 0 : _a.side.length) > 0;
    }
  },
  watch: {
    $route() {
      this.routeChangeCount++;
    }
  },
  mounted() {
    this.$root.name = "Dashboard";
  }
};
const _hoisted_1 = { class: "_app-dashboard" };
const _hoisted_2 = { class: "help-panel-trigger-holder" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppHeader = resolveComponent("AppHeader");
  const _component_ToastsAndLiquidationAlerts = resolveComponent("ToastsAndLiquidationAlerts");
  const _component_ScaUtils = __nuxt_component_0;
  const _component_NotVerifiedAndTrusted = resolveComponent("NotVerifiedAndTrusted");
  const _component_portal_target = resolveComponent("portal-target");
  const _component_SideMenu = resolveComponent("SideMenu");
  const _component_HelpPanelContainer = resolveComponent("HelpPanelContainer");
  const _component_FooterVaspDisclaimer = resolveComponent("FooterVaspDisclaimer");
  const _component_AppFooter = resolveComponent("AppFooter");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $options.hasHeader ? (openBlock(), createBlock(_component_AppHeader, { key: 0 })) : createCommentVNode("", true),
    _cache[2] || (_cache[2] = createTextVNode()),
    createVNode(_component_ToastsAndLiquidationAlerts),
    _cache[3] || (_cache[3] = createTextVNode()),
    $setup.userStateStore.isLoggedIn ? (openBlock(), createBlock(_component_ScaUtils, { key: 1 })) : createCommentVNode("", true),
    _cache[4] || (_cache[4] = createTextVNode()),
    $options.notVerifiedAndTrusted ? (openBlock(), createBlock(_component_NotVerifiedAndTrusted, {
      key: 2,
      class: "container"
    })) : (openBlock(), createElementBlock("div", {
      key: 3,
      class: normalizeClass(["container", { "container--web-view": _ctx.$constants.isWebview }])
    }, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_portal_target, { name: "helpPanelTrigger" })
      ]),
      _cache[0] || (_cache[0] = createTextVNode()),
      !_ctx.$constants.isWebview ? (openBlock(), createBlock(_component_SideMenu, { key: 0 })) : createCommentVNode("", true),
      _cache[1] || (_cache[1] = createTextVNode()),
      createBaseVNode("div", {
        class: normalizeClass(["container__content", { "container__content--with-side-menu": $options.hasSideMenu }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2)),
    _cache[5] || (_cache[5] = createTextVNode()),
    createVNode(_component_portal_target, { name: "tooltip__holder" }),
    _cache[6] || (_cache[6] = createTextVNode()),
    createVNode(_component_portal_target, { name: "popover__holder" }),
    _cache[7] || (_cache[7] = createTextVNode()),
    createVNode(_component_HelpPanelContainer, {
      "has-side-menu": _ctx.$navigation.side.length > 0
    }, null, 8, ["has-side-menu"]),
    _cache[8] || (_cache[8] = createTextVNode()),
    createVNode(_component_FooterVaspDisclaimer),
    _cache[9] || (_cache[9] = createTextVNode()),
    $options.hasFooter ? (openBlock(), createBlock(_component_AppFooter, { key: 4 })) : createCommentVNode("", true)
  ]);
}
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23c5fb1f"]]);
export {
  _default as default
};
