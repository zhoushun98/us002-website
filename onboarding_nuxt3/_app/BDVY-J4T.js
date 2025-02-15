import { _ as _export_sfc, Z as ArrowDownSVG, U as Uuid, j as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, d as createTextVNode, k as createVNode, n as normalizeClass, w as withCtx, $ as renderSlot, e as createCommentVNode, T as Transition, a0 as Checkbox, M as Markdown, A as Modal, B as BtsButton, a1 as IconCross, Q as URLService, a2 as cookieConstants, b as createBlock, D as withDirectives, a3 as vShow, N as EventBusConstants, a4 as CookieService, I as AppIcon, a5 as AppTooltip, a6 as CONSTANTS, h as _, F as Fragment } from "./0TEAd3E2.js";
const _sfc_main$4 = {
  name: "AccordionItem",
  components: { ArrowDownSVG },
  props: {
    title: {
      type: String,
      default: ""
    },
    setActiveItem: {
      type: Function,
      required: true
    },
    activeItem: {
      type: String,
      required: false,
      default: null
    },
    isInitialActive: {
      type: Boolean,
      required: false,
      default: false
    },
    useRightArrow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // Avoid triggering enter transition on load due to initial isActive flipping
      isActiveOverride: this.isInitialActive
    };
  },
  computed: {
    isActive() {
      return this.activeItem === this.itemId;
    }
  },
  watch: {
    activeItem(itemId) {
      if (itemId && this.isActiveOverride) {
        this.isActiveOverride = false;
      }
    }
  },
  created() {
    this.itemId = Uuid();
    if (this.isInitialActive && !this.activeItem) {
      this.setActiveItem(this.itemId);
    }
  },
  methods: {
    toggle() {
      if (this.isActive) {
        this.setActiveItem(null);
      } else {
        this.setActiveItem(this.itemId);
      }
    },
    startTransition(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    endTransition(el) {
      el.style.height = "";
    }
  }
};
const _hoisted_1$4 = { class: "accordion-item__title" };
const _hoisted_2$3 = { class: "accordion-item__title-text" };
const _hoisted_3$2 = {
  key: 0,
  class: "accordion-item__details"
};
const _hoisted_4$2 = { class: "accordion-item__details-inner" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArrowDownSVG = resolveComponent("ArrowDownSVG");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["accordion-item", { "is-active": $options.isActive || $data.isActiveOverride }])
  }, [
    createBaseVNode("div", _hoisted_1$4, [
      createBaseVNode("button", {
        class: "accordion-item__trigger",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.toggle && $options.toggle(...args))
      }, [
        createBaseVNode("span", _hoisted_2$3, toDisplayString(_ctx.$tt($props.title)), 1),
        _cache[1] || (_cache[1] = createTextVNode()),
        createVNode(_component_ArrowDownSVG, {
          class: normalizeClass(["accordion-item__trigger-icon", { "accordion-item__trigger-icon--right-arrow": $props.useRightArrow }])
        }, null, 8, ["class"])
      ])
    ]),
    _cache[2] || (_cache[2] = createTextVNode()),
    createVNode(Transition, {
      name: "accordion-item",
      onEnter: $options.startTransition,
      onAfterEnter: $options.endTransition,
      onBeforeLeave: $options.startTransition,
      onAfterLeave: $options.endTransition
    }, {
      default: withCtx(() => [
        $options.isActive ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$2, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 2);
}
const AccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-07df28bf"]]);
const _sfc_main$3 = {
  name: "AccordionGroup",
  emits: ["activeItemChange"],
  data() {
    return {
      activeItem: null
    };
  },
  methods: {
    setActiveItem(activeItem) {
      this.activeItem = activeItem;
      this.$emit("activeItemChange", activeItem);
    }
  }
};
const _hoisted_1$3 = { class: "accordion" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default", {
      activeItem: $data.activeItem,
      setActiveItem: $options.setActiveItem
    }, void 0, true)
  ]);
}
const AccordionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-7754829d"]]);
const _sfc_main$2 = {
  name: "CookieConsentModal",
  components: {
    AccordionGroup,
    Checkbox,
    AccordionItem,
    Markdown,
    Modal,
    BtsButton,
    IconCross
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Array,
      default: () => []
    }
  },
  emits: ["closeModal", "cookieSelection"],
  data() {
    return {
      URLService,
      isModalVisible: false,
      enableAnalytics: false,
      enableAdvertising: false
    };
  },
  watch: {
    show(value) {
      this.isModalVisible = value;
      if (value) {
        this.enableAnalytics = this.selection.includes(cookieConstants.COOKIE_POLICY.ANALYTICS_PERFORMANCE);
        this.enableAdvertising = this.selection.includes(cookieConstants.COOKIE_POLICY.ADVERTISING_MARKETING);
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    enableCookies(selection) {
      this.closeModal();
      this.$emit("cookieSelection", selection);
    },
    enableSelection() {
      const selection = [cookieConstants.COOKIE_POLICY.STRICTLY_NECESSARY];
      if (this.enableAnalytics) {
        selection.push(cookieConstants.COOKIE_POLICY.ANALYTICS_PERFORMANCE);
      }
      if (this.enableAdvertising) {
        selection.push(cookieConstants.COOKIE_POLICY.ADVERTISING_MARKETING);
      }
      this.enableCookies(selection);
    },
    enableAllAndClose() {
      this.enableCookies([
        cookieConstants.COOKIE_POLICY.STRICTLY_NECESSARY,
        cookieConstants.COOKIE_POLICY.ANALYTICS_PERFORMANCE,
        cookieConstants.COOKIE_POLICY.ADVERTISING_MARKETING
      ]);
    },
    dontEnableAllAndClose() {
      this.enableCookies([
        cookieConstants.COOKIE_POLICY.STRICTLY_NECESSARY
      ]);
    }
  }
};
const _hoisted_1$2 = { class: "cookie-modal__header" };
const _hoisted_2$2 = { class: "cookie-modal__title text-title" };
const _hoisted_3$1 = { class: "cookie-modal__header-buttons" };
const _hoisted_4$1 = { class: "cookie-modal__section" };
const _hoisted_5 = { class: "cookie-modal__section-title" };
const _hoisted_6 = { class: "cookie-modal__list-row" };
const _hoisted_7 = { class: "cookie-modal__list-column" };
const _hoisted_8 = { class: "cookie-modal__list-title" };
const _hoisted_9 = { class: "cookie-modal__list-column" };
const _hoisted_10 = { class: "cookie-modal__list-title" };
const _hoisted_11 = { class: "cookie-modal__section" };
const _hoisted_12 = { class: "cookie-modal__section-title" };
const _hoisted_13 = { class: "cookie-modal__section-content" };
const _hoisted_14 = ["href"];
const _hoisted_15 = { class: "cookie-modal__section" };
const _hoisted_16 = { class: "cookie-modal__section-title" };
const _hoisted_17 = { class: "cookie-modal__section-content" };
const _hoisted_18 = ["href"];
const _hoisted_19 = { class: "cookie-modal__section" };
const _hoisted_20 = { class: "cookie-modal__section-title" };
const _hoisted_21 = { class: "cookie-modal__section-content" };
const _hoisted_22 = ["href"];
const _hoisted_23 = ["href"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_IconCross = resolveComponent("IconCross");
  const _component_Markdown = resolveComponent("Markdown");
  const _component_AccordionItem = resolveComponent("AccordionItem");
  const _component_AccordionGroup = resolveComponent("AccordionGroup");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createBlock(_component_Modal, {
    "is-open": $data.isModalVisible,
    "onUpdate:isOpen": _cache[5] || (_cache[5] = ($event) => $data.isModalVisible = $event),
    class: "cookie-modal",
    "is-header-sticky": "",
    "remove-close-button": "",
    "even-padding": "",
    onClose: $options.closeModal
  }, {
    header: withCtx(() => [
      createBaseVNode("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, toDisplayString(_ctx.$t("components.cookieConsentModal.cookieSettingsTitle")), 1),
        _cache[8] || (_cache[8] = createTextVNode()),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(_component_BtsButton, {
            class: "button--width-auto",
            secondary: "",
            onClick: $options.dontEnableAllAndClose
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("components.cookieConsentModal.dontEnableAllButton")), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          _cache[6] || (_cache[6] = createTextVNode()),
          createVNode(_component_BtsButton, {
            class: "button--width-auto",
            secondary: "",
            onClick: $options.enableAllAndClose
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("components.cookieConsentModal.enableAllButton")), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          _cache[7] || (_cache[7] = createTextVNode()),
          withDirectives(createVNode(_component_BtsButton, {
            class: "button--width-auto",
            onClick: $options.enableSelection
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("components.cookieConsentModal.confirmSelectionButton")), 1)
            ]),
            _: 1
          }, 8, ["onClick"]), [
            [vShow, $data.enableAnalytics || $data.enableAdvertising]
          ])
        ]),
        _cache[9] || (_cache[9] = createTextVNode()),
        createVNode(_component_IconCross, {
          class: "cookie-modal__close",
          onClick: $options.closeModal
        }, null, 8, ["onClick"])
      ])
    ]),
    default: withCtx(() => [
      _cache[24] || (_cache[24] = createTextVNode()),
      createBaseVNode("div", _hoisted_4$1, [
        createBaseVNode("h2", _hoisted_5, toDisplayString(_ctx.$t("components.cookieConsentModal.generalInformationTitle")), 1),
        _cache[11] || (_cache[11] = createTextVNode()),
        createVNode(_component_AccordionGroup, null, {
          default: withCtx(({ activeItem, setActiveItem }) => [
            createVNode(_component_AccordionItem, {
              title: _ctx.$t("components.cookieConsentModal.inControlTitle"),
              "active-item": activeItem,
              "set-active-item": setActiveItem
            }, {
              default: withCtx(() => [
                createVNode(_component_Markdown, {
                  source: _ctx.$t("components.cookieConsentModal.inControlBody.md")
                }, null, 8, ["source"])
              ]),
              _: 2
            }, 1032, ["title", "active-item", "set-active-item"]),
            _cache[10] || (_cache[10] = createTextVNode()),
            createVNode(_component_AccordionItem, {
              title: _ctx.$t("components.cookieConsentModal.whatAreCookiesTitle"),
              "active-item": activeItem,
              "set-active-item": setActiveItem
            }, {
              default: withCtx(() => [
                createVNode(_component_Markdown, {
                  source: _ctx.$t("components.cookieConsentModal.whatAreCookiesBody.md")
                }, null, 8, ["source"])
              ]),
              _: 2
            }, 1032, ["title", "active-item", "set-active-item"])
          ]),
          _: 1
        })
      ]),
      _cache[25] || (_cache[25] = createTextVNode()),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("h3", _hoisted_8, toDisplayString(_ctx.$t("components.cookieConsentModal.ifEnabledTitle")), 1),
          _cache[12] || (_cache[12] = createTextVNode()),
          createVNode(_component_Markdown, {
            source: _ctx.$t("components.cookieConsentModal.ifEnabledBody.md")
          }, null, 8, ["source"])
        ]),
        _cache[14] || (_cache[14] = createTextVNode()),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("h3", _hoisted_10, toDisplayString(_ctx.$t("components.cookieConsentModal.ifDisabledTitle")), 1),
          _cache[13] || (_cache[13] = createTextVNode()),
          createVNode(_component_Markdown, {
            source: _ctx.$t("components.cookieConsentModal.ifDisabledBody.md")
          }, null, 8, ["source"])
        ])
      ]),
      _cache[26] || (_cache[26] = createTextVNode()),
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("h2", _hoisted_12, toDisplayString(_ctx.$t("components.cookieConsentModal.strictlyNecessaryTitle")), 1),
        _cache[16] || (_cache[16] = createTextVNode()),
        createVNode(_component_Checkbox, {
          checked: true,
          disabled: true,
          class: "cookie-modal__checkbox",
          label: _ctx.$t("components.cookieConsentModal.enableCheckboxLabel")
        }, null, 8, ["label"]),
        _cache[17] || (_cache[17] = createTextVNode()),
        createBaseVNode("div", _hoisted_13, [
          createBaseVNode("p", null, toDisplayString(_ctx.$t("components.cookieConsentModal.strictlyNecessaryDescription")), 1),
          _cache[15] || (_cache[15] = createTextVNode()),
          createBaseVNode("a", {
            class: "cookie-modal__link",
            href: `${$data.URLService.getPageUrl("cookiePolicy")}#strictly-necessary`,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.closeModal && $options.closeModal(...args))
          }, toDisplayString(_ctx.$t("components.cookieConsentModal.readMoreAction")), 9, _hoisted_14)
        ])
      ]),
      _cache[27] || (_cache[27] = createTextVNode()),
      _cache[28] || (_cache[28] = createBaseVNode("div", { class: "cookie-modal__divider" }, null, -1)),
      _cache[29] || (_cache[29] = createTextVNode()),
      createBaseVNode("div", _hoisted_15, [
        createBaseVNode("h2", _hoisted_16, toDisplayString(_ctx.$t("components.cookieConsentModal.analyticsAndPerformanceTitle")), 1),
        _cache[19] || (_cache[19] = createTextVNode()),
        createVNode(_component_Checkbox, {
          checked: $data.enableAnalytics,
          "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => $data.enableAnalytics = $event),
          class: "cookie-modal__checkbox",
          label: _ctx.$t("components.cookieConsentModal.enableCheckboxLabel")
        }, null, 8, ["checked", "label"]),
        _cache[20] || (_cache[20] = createTextVNode()),
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("p", null, toDisplayString(_ctx.$t("components.cookieConsentModal.analyticsAndPerformanceDescription")), 1),
          _cache[18] || (_cache[18] = createTextVNode()),
          createBaseVNode("a", {
            class: "cookie-modal__link",
            href: `${$data.URLService.getPageUrl("cookiePolicy")}#analytics-and-performance`,
            onClick: _cache[2] || (_cache[2] = (...args) => $options.closeModal && $options.closeModal(...args))
          }, toDisplayString(_ctx.$t("components.cookieConsentModal.readMoreAction")), 9, _hoisted_18)
        ])
      ]),
      _cache[30] || (_cache[30] = createTextVNode()),
      _cache[31] || (_cache[31] = createBaseVNode("div", { class: "cookie-modal__divider" }, null, -1)),
      _cache[32] || (_cache[32] = createTextVNode()),
      createBaseVNode("div", _hoisted_19, [
        createBaseVNode("h2", _hoisted_20, toDisplayString(_ctx.$t("components.cookieConsentModal.advertisingAndMarketingTitle")), 1),
        _cache[22] || (_cache[22] = createTextVNode()),
        createVNode(_component_Checkbox, {
          checked: $data.enableAdvertising,
          "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => $data.enableAdvertising = $event),
          class: "cookie-modal__checkbox",
          label: _ctx.$t("components.cookieConsentModal.enableCheckboxLabel")
        }, null, 8, ["checked", "label"]),
        _cache[23] || (_cache[23] = createTextVNode()),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("p", null, toDisplayString(_ctx.$t("components.cookieConsentModal.advertisingAndMarketingDescription")), 1),
          _cache[21] || (_cache[21] = createTextVNode()),
          createBaseVNode("a", {
            class: "cookie-modal__link",
            href: `${$data.URLService.getPageUrl("cookiePolicy")}#strictly-necessary`,
            onClick: _cache[4] || (_cache[4] = (...args) => $options.closeModal && $options.closeModal(...args))
          }, toDisplayString(_ctx.$t("components.cookieConsentModal.readMoreAction")), 9, _hoisted_22)
        ])
      ]),
      _cache[33] || (_cache[33] = createTextVNode()),
      _cache[34] || (_cache[34] = createBaseVNode("div", { class: "cookie-modal__divider" }, null, -1)),
      _cache[35] || (_cache[35] = createTextVNode()),
      createVNode(_component_i18n_t, {
        scope: "global",
        tag: "div",
        keypath: "components.cookieConsentModal.moreInformation",
        class: "cookie-modal__info"
      }, {
        "cookie-policy-link": withCtx(() => [
          createBaseVNode("a", {
            class: "cookie-modal__link",
            href: $data.URLService.getPageUrl("cookiePolicy")
          }, toDisplayString(_ctx.$t("components.cookieConsentModal.cookiePolicyLink")), 9, _hoisted_23)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["is-open", "onClose"]);
}
const CookieConsentModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-414cbcd0"]]);
const _sfc_main$1 = {
  name: "CookieConsent",
  components: {
    CookieConsentModal,
    BtsButton
  },
  emits: ["modalVisibilityChange", "bannerVisibilityChange"],
  data() {
    return {
      URLService,
      isBannerVisible: false,
      isModalVisible: false,
      selection: []
    };
  },
  watch: {
    isModalVisible(value) {
      this.$emit("modalVisibilityChange", value);
    },
    isBannerVisible(value) {
      this.$emit("bannerVisibilityChange", value);
    }
  },
  created() {
    var _a;
    this.initConsentCookie();
    (_a = this.$eventBus) == null ? void 0 : _a.$on(EventBusConstants.COOKIE_CONSENT.OPEN, this.showBanner);
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    hideBanner() {
      this.isBannerVisible = false;
    },
    showBanner() {
      this.isBannerVisible = true;
    },
    enableAllAndClose() {
      this.confirmSelection([
        cookieConstants.COOKIE_POLICY.STRICTLY_NECESSARY,
        cookieConstants.COOKIE_POLICY.ANALYTICS_PERFORMANCE,
        cookieConstants.COOKIE_POLICY.ADVERTISING_MARKETING
      ]);
    },
    checkCookieSelection(selection) {
      if (selection.length) {
        this.confirmSelection(selection);
      }
    },
    confirmSelection(selection) {
      var _a;
      this.selection = selection;
      this.generateConsentCookie(selection);
      (_a = this.$eventBus) == null ? void 0 : _a.$emit(EventBusConstants.COOKIE_CONSENT.CONFIRM_SELECTION, {
        selection
      });
      this.hideBanner();
    },
    generateConsentCookie(selection) {
      const expirationDate = /* @__PURE__ */ new Date();
      selection.push("V2");
      const selectionValue = selection.join(",");
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);
      CookieService.set(cookieConstants.EU_COOKIE_CONSENT, selectionValue, expirationDate, true);
    },
    initConsentCookie() {
      const consentCookieValue = CookieService.get(cookieConstants.EU_COOKIE_CONSENT);
      if (consentCookieValue === "true" || ["SN,AP", "AP,SN"].includes(consentCookieValue)) {
        this.selection = [
          cookieConstants.COOKIE_POLICY.ANALYTICS_PERFORMANCE,
          cookieConstants.COOKIE_POLICY.STRICTLY_NECESSARY,
          cookieConstants.COOKIE_POLICY.ADVERTISING_MARKETING
        ];
        this.generateConsentCookie(this.selection);
      } else if (consentCookieValue === "false" || !consentCookieValue) {
        this.showBanner();
      }
      if (consentCookieValue) {
        const cookiePolicies = consentCookieValue.split(",");
        const policyReverseMap = Object.assign({}, ...Object.entries(cookieConstants.COOKIE_POLICY).map(([a, b]) => ({ [b]: a })));
        const selection = [];
        cookiePolicies.forEach((policy) => {
          if (policyReverseMap[policy]) {
            selection.push(cookieConstants.COOKIE_POLICY[policyReverseMap[policy]]);
          }
        });
        this.selection = selection;
      }
    }
  }
};
const _hoisted_1$1 = { class: "cookie-consent-banner" };
const _hoisted_2$1 = { class: "cookie-consent-banner__container" };
const _hoisted_3 = ["href"];
const _hoisted_4 = { class: "cookie-consent-banner__buttons" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_CookieConsentModal = resolveComponent("CookieConsentModal");
  return openBlock(), createBlock(Transition, {
    appear: "",
    name: "cookie-consent-banner"
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_i18n_t, {
            scope: "global",
            tag: "div",
            keypath: "components.cookieConsentBanner.disclaimer",
            class: "cookie-consent-banner__text"
          }, {
            "cookie-policy-link": withCtx(() => [
              createBaseVNode("a", {
                class: "cookie-consent-banner__link",
                href: $data.URLService.getPageUrl("cookiePolicy")
              }, toDisplayString(_ctx.$t("components.cookieConsentBanner.cookiePolicyLink")), 9, _hoisted_3)
            ]),
            _: 1
          }),
          _cache[2] || (_cache[2] = createTextVNode()),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_BtsButton, {
              fluid: "",
              secondary: "",
              class: "cookie-consent-banner__button",
              onClick: $options.openModal
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("components.cookieConsentBanner.customizeButton")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]),
            _cache[1] || (_cache[1] = createTextVNode()),
            createVNode(_component_BtsButton, {
              fluid: "",
              class: "cookie-consent-banner__button",
              onClick: $options.enableAllAndClose
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("components.cookieConsentBanner.enableAllButton")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _cache[3] || (_cache[3] = createTextVNode()),
        createVNode(_component_CookieConsentModal, {
          show: $data.isModalVisible,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => $data.isModalVisible = $event),
          selection: $data.selection,
          onCloseModal: $options.closeModal,
          onCookieSelection: $options.checkCookieSelection
        }, null, 8, ["show", "selection", "onCloseModal", "onCookieSelection"])
      ], 512), [
        [vShow, $data.isBannerVisible]
      ])
    ]),
    _: 1
  });
}
const CookieConsentBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-86a6f7f9"]]);
const _sfc_main = {
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
const _hoisted_1 = { class: "cupcake" };
const _hoisted_2 = {
  ref: "content",
  class: "help-content__text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
              createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("components.helpPanel.needHelpTooltip")), 1)
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
          createBaseVNode("div", _hoisted_2, [
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
const HelpPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-68121888"]]);
const join = (...parts) => {
  const separator = "/";
  parts = parts.map((part, index) => {
    if (index) {
      part = part.replace(new RegExp(`^${separator}`), "");
    }
    if (index !== parts.length - 1) {
      part = part.replace(new RegExp(`${separator}$`), "");
    }
    return part;
  });
  return parts.join(separator);
};
const path = {
  join
};
export {
  CookieConsentBanner as C,
  HelpPanel as H,
  path as p
};
