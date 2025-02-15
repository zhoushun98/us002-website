import { a9 as addStoreHooks, aa as defineStore, aX as usePollingStore, d3 as useWebsocketStore, r as ref, l as computed, aj as _, d5 as WSApi, bP as timersConstants, I as constants, al as getDate, _ as _export_sfc, A as AppIcon, B as BtsButton, az as useSubAccountStore, x as formatDate, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, J as normalizeClass, g as createTextVNode, f as createVNode, t as toDisplayString, h as createCommentVNode, w as withCtx, dP as useTemplateRef, dQ as useEventListener, dR as useResizeObserver, u as useToastStore, d as unref, F as Fragment, a5 as renderList, c as createBlock, b$ as TransitionGroup, aB as marketConstants, U as URLService, d2 as trackException, T as TranslationObject, a$ as normalizeStyle, aV as EventBusConstants, b_ as Uuid, bj as mergeProps, a as axiosInstance, bN as storeToRefs, q as useUserStateStore, ab as useErrorTracking, bQ as watch, C as CONSTANTS } from "./BEpVD-aq.js";
import { u as userPromptsApi } from "./CpoBxDnQ.js";
const SCREEN_SIZES = {
  width: { small: 576, medium: 768, big: 992, large: 1440 },
  height: { small: 861 }
};
const storeName$1 = "notificationStore";
const useNotificationStore = addStoreHooks(
  defineStore(storeName$1, () => {
    const pollingStore = usePollingStore({ caller: storeName$1 });
    const websocketsStore = useWebsocketStore({ caller: storeName$1 });
    const notifications = ref({});
    const initialized = ref(false);
    const isLoading = ref(false);
    const liquidationAlerts = computed(() => {
      const alerts = [];
      for (const n of Object.values(notifications.value)) {
        alerts.push({
          id: n.id,
          title: n.title,
          body: n.body,
          dismissible: n.metadata.dismissible,
          updatedAt: n.metadata.updatedAt,
          accountId: n.metadata.accountId,
          alertType: n.metadata.alertType,
          orderCount: n.metadata.orderCount,
          positionCount: n.metadata.positionCount,
          market: n.metadata.market
        });
      }
      return _.orderBy(alerts, "updatedAt", "desc");
    });
    const _init = async () => {
      const { disconnect: disconnectWebsockets } = await websocketsStore.subscribeToChannel({
        channel: WSApi.getPrivateNotificationsChannelWithoutUserId(),
        event: WSApi.NOTIFICATION_EVENT,
        onEvent: _processWebsocketEvent
      });
      try {
        await fetch();
      } catch (e) {
      }
      const { stop: stopPolling } = pollingStore.startPolling({
        interval: timersConstants.POLLING_NOTIFICATIONS.TIME,
        id: timersConstants.POLLING_NOTIFICATIONS.ID,
        fn: fetch
      });
      initialized.value = true;
      return () => {
        stopPolling == null ? void 0 : stopPolling();
        disconnectWebsockets == null ? void 0 : disconnectWebsockets();
      };
    };
    const _processWebsocketEvent = ({ data, event }) => {
      switch (event) {
        case "update":
        case "new": {
          notifications.value = {
            ...notifications.value,
            [data.id]: data
          };
          break;
        }
        case "delete": {
          delete notifications.value[data.id];
          break;
        }
      }
    };
    const fetch = async () => {
      if (isLoading.value) {
        return;
      }
      isLoading.value = true;
      const alerts = {};
      for (const p of await userPromptsApi.list("liquidation_alert")) {
        alerts[p.externalId] = {
          id: p.externalId,
          title: p.title,
          body: p.message,
          type: constants.NOTIFICATIONS._TYPE.LIQUIDATION_ALERT,
          metadata: {
            dismissible: p.dismissible,
            accountId: p.metaData.accountUniqueId,
            alertType: p.metaData.alertType,
            updatedAt: getDate(p.metaData.unixTimestamp, true),
            orderCount: p.metaData.orderCount,
            positionCount: p.metaData.positionCount,
            market: p.metaData.market
          }
        };
      }
      notifications.value = alerts;
      isLoading.value = false;
    };
    const dismiss = async (notificationId) => {
      delete notifications.value[notificationId];
      return await userPromptsApi.dismiss(notificationId);
    };
    const dismissAll = async (type = null) => {
      const idsToDismiss = [];
      const remaining = {};
      for (const n of Object.values(notifications.value)) {
        if (type === null || n.type === type) {
          idsToDismiss.push(n.id);
        } else {
          remaining[n.id] = n;
        }
      }
      notifications.value = remaining;
      return await Promise.all(idsToDismiss.map((id) => userPromptsApi.dismiss(id)));
    };
    return {
      initialized,
      isLoading,
      liquidationAlerts,
      _init,
      fetch,
      dismiss,
      dismissAll
    };
  })
);
const _sfc_main$4 = {
  name: "LiquidationAlert",
  components: {
    AppIcon,
    BtsButton
  },
  props: {
    /** @type module:notifications.LiquidationAlert */
    alert: {
      type: Object,
      required: true
    },
    displayTrail: {
      type: Boolean,
      default: false
    }
  },
  emits: ["dismiss", "action"],
  setup() {
    return {
      subAccountStore: useSubAccountStore()
    };
  },
  computed: {
    formattedDate() {
      return formatDate(this.alert.updatedAt);
    },
    alertLevelClass() {
      const type = this.alert.alertType === constants.LIQUIDATION_ALERTS.TYPE.POSITION_LIQUIDATION ? "critical" : "warning";
      return `alert--${type}`;
    },
    affectedAccountName() {
      var _a;
      return ((_a = this.subAccountStore.accounts[this.alert.accountId]) == null ? void 0 : _a.displayName) ?? "";
    }
  },
  methods: {
    onDismiss() {
      this.$emit("dismiss", this.alert.id);
    }
  }
};
const _hoisted_1$3 = { class: "alert-wrapper" };
const _hoisted_2$1 = { class: "alert__icon-holder" };
const _hoisted_3$1 = { class: "alert__content" };
const _hoisted_4$1 = { class: "alert__title" };
const _hoisted_5$1 = { class: "alert__body" };
const _hoisted_6 = { class: "alert__text" };
const _hoisted_7 = {
  key: 0,
  class: "alert__item-count"
};
const _hoisted_8 = {
  key: 0,
  class: "alert__time"
};
const _hoisted_9 = { class: "alert__action" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", {
      class: normalizeClass(["alert-wrapper__trail", { "alert-wrapper__trail--hidden": !$props.displayTrail }])
    }, null, 2),
    _cache[8] || (_cache[8] = createTextVNode()),
    createBaseVNode("div", {
      class: normalizeClass(["alert-wrapper__trail", { "alert-wrapper__trail--hidden": !$props.displayTrail }])
    }, null, 2),
    _cache[9] || (_cache[9] = createTextVNode()),
    createBaseVNode("div", {
      class: normalizeClass(["alert-wrapper__trail", { "alert-wrapper__trail--hidden": !$props.displayTrail }])
    }, null, 2),
    _cache[10] || (_cache[10] = createTextVNode()),
    createBaseVNode("div", {
      class: normalizeClass(["alert", $options.alertLevelClass])
    }, [
      createBaseVNode("div", _hoisted_2$1, [
        createVNode(_component_AppIcon, {
          icon: "monochrome/warning.svg",
          size: "24"
        })
      ]),
      _cache[5] || (_cache[5] = createTextVNode()),
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("div", _hoisted_4$1, toDisplayString(_ctx.$tt($props.alert.title)), 1),
        _cache[3] || (_cache[3] = createTextVNode()),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6, [
            $props.alert.orderCount && $props.alert.orderCount > 1 || $props.alert.positionCount && $props.alert.positionCount > 1 ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString($props.alert.orderCount ? $props.alert.orderCount : $props.alert.positionCount), 1)) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(_ctx.$tt($props.alert.body)), 1)
          ])
        ]),
        _cache[4] || (_cache[4] = createTextVNode()),
        $props.alert.updatedAt ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createVNode(_component_i18n_t, {
            tag: "span",
            scope: "global",
            keypath: "components.notifications.liquidationAlert.affectedDateAndAccount"
          }, {
            date: withCtx(() => [
              createTextVNode(toDisplayString($options.formattedDate), 1)
            ]),
            account: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($options.affectedAccountName), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]),
      _cache[6] || (_cache[6] = createTextVNode()),
      $props.alert.dismissible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "alert__dismiss",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onDismiss && $options.onDismiss(...args))
      }, [
        createVNode(_component_AppIcon, {
          icon: "monochrome/cross.svg",
          size: "12"
        })
      ])) : createCommentVNode("", true),
      _cache[7] || (_cache[7] = createTextVNode()),
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_BtsButton, {
          class: "alert__action-button",
          compact: "",
          secondary: "",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("action"))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t("components.notifications.liquidationAlert.viewButton")), 1)
          ]),
          _: 1
        })
      ])
    ], 2)
  ]);
}
const LiquidationAlert = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-e001afac"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "control-bar"
};
const _sfc_main$3 = {
  __name: "LiquidationAlerts",
  props: {
    tradeview: {
      type: Boolean,
      default: false
    }
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const notificationStore = useNotificationStore();
    const areAlertsCollapsedByUser = ref(null);
    function toggleCollapse() {
      areAlertsCollapsedByUser.value = areAlertsCollapsedByUser.value === null ? false : !areAlertsCollapsedByUser.value;
    }
    const hasControlBar = computed(() => {
      return notificationStore.liquidationAlerts.length > 4;
    });
    const isCollapsed = computed(() => {
      if (areAlertsCollapsedByUser.value !== null) {
        return areAlertsCollapsedByUser.value;
      }
      return hasControlBar.value;
    });
    const displayedAlerts = computed(() => {
      if (isCollapsed.value && notificationStore.liquidationAlerts.length > 1) {
        return [notificationStore.liquidationAlerts[notificationStore.liquidationAlerts.length - 1]];
      }
      return notificationStore.liquidationAlerts;
    });
    const scrollAreaRef = useTemplateRef("liqAlertGroup");
    const isScrollbarActive = ref(false);
    const isScrolledToBottom = ref(false);
    const isScrolledToTop = ref(false);
    const isTopScrollableIndicatorVisible = computed(() => {
      return isScrollbarActive.value && !isScrolledToTop.value && !isCollapsed.value;
    });
    const isBottomScrollableIndicatorVisible = computed(() => {
      return isScrollbarActive.value && !isScrolledToBottom.value && !isCollapsed.value;
    });
    const throttledScrollPositionEvaluation = _.throttle(function() {
      var _a;
      const refElement = (_a = scrollAreaRef.value) == null ? void 0 : _a.$el;
      if (!refElement) {
        return;
      }
      isScrolledToTop.value = refElement.scrollTop <= 0;
      isScrolledToBottom.value = refElement.scrollTop + refElement.offsetHeight >= refElement.scrollHeight;
    }, 100);
    useEventListener(scrollAreaRef, "scroll", throttledScrollPositionEvaluation);
    const throttledScrollbarVisibilityEvaluation = _.throttle(function() {
      var _a;
      const refElement = (_a = scrollAreaRef.value) == null ? void 0 : _a.$el;
      if (!refElement) {
        isScrollbarActive.value = false;
        return;
      }
      isScrollbarActive.value = refElement.scrollHeight > refElement.clientHeight;
    }, 100);
    const wrapperRef = useTemplateRef("wrapperRef");
    useResizeObserver(wrapperRef, () => {
      throttledScrollbarVisibilityEvaluation();
      throttledScrollPositionEvaluation();
    });
    function onAction(alert) {
      if (props.tradeview) {
        emit("action", alert);
      } else {
        const market = alert.market || marketConstants.DEFAULT_PERP_MARKET_KEY;
        window.location = URLService.getPageUrl("proTrade", { market }, true, { alertId: alert.id });
      }
    }
    async function onDismiss(alertId) {
      try {
        await notificationStore.dismiss(alertId);
      } catch (e) {
        trackException(e);
      }
    }
    const toastStore = useToastStore();
    async function dismissAll() {
      try {
        await notificationStore.dismissAll(constants.NOTIFICATIONS._TYPE.LIQUIDATION_ALERT);
      } catch (e) {
        toastStore.showErrorToast(new TranslationObject("components.notifications.liquidationAlerts.dismissErrorBody"));
        await notificationStore.fetch();
      }
    }
    return (_ctx, _cache) => {
      return displayedAlerts.value.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "wrapperRef",
        ref: wrapperRef,
        class: normalizeClass(["wrapper", {
          "wrapper--collapsed": isCollapsed.value,
          "wrapper--with-scrollbar": isScrollbarActive.value,
          "wrapper--with-top-scrollable-indicator": isTopScrollableIndicatorVisible.value,
          "wrapper--with-bottom-scrollable-indicator": isBottomScrollableIndicatorVisible.value
        }])
      }, [
        hasControlBar.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          createBaseVNode("button", {
            class: "trigger",
            onClick: dismissAll
          }, [
            createTextVNode(toDisplayString(_ctx.$t("components.notifications.liquidationAlerts.dismissAllButton")) + " ", 1),
            createVNode(unref(AppIcon), {
              class: "trigger__icon",
              icon: "monochrome/close.svg",
              size: 12
            })
          ]),
          _cache[0] || (_cache[0] = createTextVNode()),
          createBaseVNode("button", {
            class: "trigger",
            onClick: toggleCollapse
          }, [
            isCollapsed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.$t("components.notifications.liquidationAlerts.expandButton", { count: unref(notificationStore).liquidationAlerts.length })) + " ", 1),
              createVNode(unref(AppIcon), {
                class: "trigger__icon",
                icon: "monochrome/arrow-up.svg",
                size: 12
              })
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.$t("components.notifications.liquidationAlerts.collapseButton")) + " ", 1),
              createVNode(unref(AppIcon), {
                class: "trigger__icon",
                icon: "monochrome/arrow-down.svg",
                size: 12
              })
            ], 64))
          ])
        ])) : createCommentVNode("", true),
        _cache[1] || (_cache[1] = createTextVNode()),
        createVNode(TransitionGroup, {
          ref: "liqAlertGroup",
          appear: "",
          name: "alert-group",
          tag: "div",
          class: normalizeClass(["alert-group", { "alert-group--no-scrollbar": !isScrollbarActive.value }]),
          onAfterEnter: unref(throttledScrollbarVisibilityEvaluation),
          onAfterExit: unref(throttledScrollbarVisibilityEvaluation)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayedAlerts.value, (alert) => {
              return openBlock(), createBlock(unref(LiquidationAlert), {
                key: alert.id,
                alert,
                "display-trail": isCollapsed.value,
                onAction: ($event) => onAction(alert),
                onDismiss
              }, null, 8, ["alert", "display-trail", "onAction"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["class", "onAfterEnter", "onAfterExit"])
      ], 2)) : createCommentVNode("", true);
    };
  }
};
const LiquidationAlerts = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8aeaf88d"]]);
const _sfc_main$2 = {
  name: "Toast",
  components: {
    AppIcon
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    type: {
      type: String,
      default: "notice"
    },
    title: {
      type: [String, Object],
      required: false,
      default: ""
    },
    url: {
      type: String,
      required: false,
      default: ""
    },
    text: {
      type: [String, Object],
      required: false,
      default: ""
    },
    duration: {
      type: Number,
      required: false,
      default: constants.NOTIFICATIONS.DURATIONS.DEFAULT
    },
    dismissible: {
      type: Boolean,
      default: true,
      required: false
    },
    doesNotTimeout: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["close"],
  data() {
    return {
      visible: true,
      dismissTimeout: null,
      isProgressBarActive: false
    };
  },
  computed: {
    progressStyle() {
      if (this.isProgressBarActive) {
        return `transform: translateX(-100%); transition: transform ${this.duration}ms linear`;
      }
      return "";
    }
  },
  beforeUnmount() {
    clearTimeout(this.dismissTimeout);
  },
  methods: {
    startTimeout() {
      if (this.doesNotTimeout) {
        return false;
      }
      this.isProgressBarActive = true;
      this.dismissTimeout = setTimeout(() => this.closeToast(), this.duration);
    },
    closeToast() {
      this.$emit("close");
    }
  }
};
const _hoisted_1$1 = { class: "toast__content" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 0,
  class: "toast__text"
};
const _hoisted_5 = ["href"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i18n_t = resolveComponent("i18n-t");
  const _component_AppIcon = resolveComponent("AppIcon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([`toast--${$props.type}`, "toast"])
  }, [
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "toast__icon" }, [
      createBaseVNode("div", { class: "toast-icon-img" })
    ], -1)),
    _cache[5] || (_cache[5] = createTextVNode()),
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("div", {
        class: "toast__title",
        textContent: toDisplayString(_ctx.$tt($props.title))
      }, null, 8, _hoisted_2),
      _cache[2] || (_cache[2] = createTextVNode()),
      createBaseVNode("div", {
        class: "toast__text",
        innerHTML: _ctx.$tt($props.text)
      }, null, 8, _hoisted_3),
      _cache[3] || (_cache[3] = createTextVNode()),
      $props.url ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createVNode(_component_i18n_t, {
          tag: "span",
          scope: "global",
          keypath: "components.toast.clickToReadMore"
        }, {
          "here-link": withCtx(() => [
            createBaseVNode("a", {
              href: $props.url,
              target: "_blank",
              "data-test": "notificationUrl",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.closeToast && $options.closeToast(...args))
            }, toDisplayString(_ctx.$t("components.toast.hereLink")), 9, _hoisted_5)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ]),
    _cache[6] || (_cache[6] = createTextVNode()),
    createBaseVNode("div", {
      style: normalizeStyle($options.progressStyle),
      class: "toast__timer"
    }, null, 4),
    _cache[7] || (_cache[7] = createTextVNode()),
    $props.dismissible ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "toast__dismiss",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.closeToast && $options.closeToast(...args))
    }, [
      createVNode(_component_AppIcon, {
        icon: "monochrome/cross.svg",
        size: "12"
      })
    ])) : createCommentVNode("", true)
  ], 2);
}
const ToastComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-3f7e9b2c"]]);
const _sfc_main$1 = {
  name: "ToastGroup",
  components: {
    ToastComponent
  },
  props: {
    initialToasts: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      toasts: [],
      clientWidth: 1920
    };
  },
  computed: {
    computedToasts() {
      let limit = constants.NOTIFICATIONS.MAX_TOASTS_DISPLAYED;
      if (this.isSmallDisplay || this.isMobile) {
        limit = constants.NOTIFICATIONS.MAX_TOASTS_DISPLAYED_MOBILE;
      }
      return this.toasts.slice(-limit);
    },
    isSmallDisplay() {
      return this.clientWidth <= SCREEN_SIZES.width.small;
    },
    isMobile() {
      return this.clientWidth <= SCREEN_SIZES.width.medium;
    }
  },
  created() {
    var _a, _b;
    this.initialToasts.forEach(this.addToast);
    (_a = this.$eventBus) == null ? void 0 : _a.$on(EventBusConstants.TOASTS.CREATE, this.addToast);
    (_b = this.$eventBus) == null ? void 0 : _b.$on(EventBusConstants.TOASTS.CLOSE, this.closeToast);
  },
  unmounted() {
    var _a, _b;
    (_a = this.$eventBus) == null ? void 0 : _a.$off(EventBusConstants.TOASTS.CREATE, this.addToast);
    (_b = this.$eventBus) == null ? void 0 : _b.$off(EventBusConstants.TOASTS.CLOSE, this.closeToast);
  },
  beforeMount() {
    this.updateLayout();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateLayout);
  },
  mounted() {
    window.addEventListener("resize", this.updateLayout);
  },
  methods: {
    closeToast(id, onCloseCallback = () => {
    }) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
      onCloseCallback();
    },
    addToast(toast) {
      const id = Uuid();
      this.toasts.unshift({ id, ...toast });
    },
    onAfterEnter(el) {
      var _a;
      (_a = el == null ? void 0 : el.__vue__) == null ? void 0 : _a.startTimeout();
    },
    updateLayout() {
      this.clientWidth = document.documentElement.clientWidth;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ToastComponent = resolveComponent("ToastComponent");
  return openBlock(), createBlock(TransitionGroup, {
    appear: "",
    name: "toast-group",
    tag: "div",
    class: "toast-group",
    onAfterEnter: $options.onAfterEnter
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.computedToasts, (toast) => {
        return openBlock(), createBlock(_component_ToastComponent, mergeProps({
          key: toast.id,
          ref_for: true
        }, toast, {
          "data-id": toast.id,
          onClose: ($event) => $options.closeToast(toast.id, toast.onCloseCallback)
        }), null, 16, ["data-id", "onClose"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["onAfterEnter"]);
}
const ToastGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-de3c25c3"]]);
const personalNotificationsApi = {
  get() {
    const url = URLService.buildUrl("personalNotificationListResource");
    return axiosInstance.get(url).then((response) => {
      var _a, _b;
      return (_b = (_a = response.data) == null ? void 0 : _a.data) == null ? void 0 : _b[0];
    });
  },
  delete(notificationId) {
    const url = URLService.buildUrl("personalNotificationResource", { id: notificationId });
    return axiosInstance.delete(url);
  }
};
const storeName = "personalNotificationsStore";
const usePersonalNotificationsStore = addStoreHooks(
  defineStore(storeName, () => {
    const { isLoggedIn } = storeToRefs(useUserStateStore({ caller: storeName }));
    const toastStore = useToastStore({ caller: storeName });
    const pollingStore = usePollingStore({ caller: storeName });
    const $errorTracking = useErrorTracking();
    let stopPollingFn = () => {
    };
    async function fetch() {
      if (!isLoggedIn.value) {
        return;
      }
      try {
        const data = await personalNotificationsApi.get();
        if (document.hidden || data === void 0) {
          return;
        }
        const notification = {
          id: data.id,
          title: "Status update",
          type: constants.NOTIFICATIONS.TYPES.NOTICE,
          text: data.message,
          duration: constants.NOTIFICATIONS.DURATIONS.USER,
          onCloseCallback: () => {
            personalNotificationsApi.delete(data.id);
          }
        };
        toastStore.showToast(notification);
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
    }
    function startPolling() {
      if (!isLoggedIn.value) {
        return;
      }
      const { stop } = pollingStore.startPolling({
        id: timersConstants.POLLING_USER_NOTIFICATION.ID,
        interval: timersConstants.POLLING_USER_NOTIFICATION.TIME,
        fn: fetch
      });
      stopPollingFn = stop;
    }
    function stopPolling() {
      stopPollingFn();
      stopPollingFn = () => {
      };
    }
    function _init() {
      return () => {
        stopPolling();
      };
    }
    watch(isLoggedIn, (isLoggedIn2, wasLoggedIn) => {
      if (wasLoggedIn) {
        stopPolling();
      }
    });
    return {
      startPolling,
      fetch,
      _init
    };
  })
);
const _sfc_main = {
  name: "ToastsAndLiquidationAlerts",
  components: { ToastGroup, LiquidationAlerts },
  props: {
    tradeview: {
      type: Boolean,
      default: false
    }
  },
  emits: ["action"],
  setup() {
    return {
      userStateStore: useUserStateStore(),
      personalNotificationsStore: usePersonalNotificationsStore()
    };
  },
  computed: {
    areLiquidationAlertsEnabled() {
      return CONSTANTS.enableLiquidationAlerts ?? false;
    },
    isAuthenticated() {
      return this.userStateStore.isLoggedIn;
    }
  },
  async mounted() {
    if (this.isAuthenticated) {
      await this.personalNotificationsStore.fetch();
      await this.personalNotificationsStore.startPolling();
    }
  },
  methods: {
    /**
     * @param {module:notifications.LiquidationAlert} alert
     */
    onAction(alert) {
      this.$emit("action", alert);
    }
  }
};
const _hoisted_1 = { class: "notification-wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ToastGroup = resolveComponent("ToastGroup");
  const _component_LiquidationAlerts = resolveComponent("LiquidationAlerts");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ToastGroup, { class: "notification-wrapper__toasts" }),
    _cache[0] || (_cache[0] = createTextVNode()),
    $options.isAuthenticated && $options.areLiquidationAlertsEnabled ? (openBlock(), createBlock(_component_LiquidationAlerts, {
      key: 0,
      class: "mt8",
      tradeview: $props.tradeview,
      onAction: $options.onAction
    }, null, 8, ["tradeview", "onAction"])) : createCommentVNode("", true)
  ]);
}
const ToastsAndLiquidationAlerts = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6dfe9f2c"]]);
export {
  SCREEN_SIZES as S,
  ToastsAndLiquidationAlerts as T,
  useNotificationStore as u
};
