import { _ as _export_sfc, bg as ArrowDown, b_ as Uuid, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, t as toDisplayString, g as createTextVNode, f as createVNode, J as normalizeClass, w as withCtx, ae as renderSlot, h as createCommentVNode, G as Transition } from "./BEpVD-aq.js";
const _sfc_main$1 = {
  name: "AccordionItem",
  components: { ArrowDownSVG: ArrowDown },
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
const _hoisted_1$1 = { class: "accordion-item__title" };
const _hoisted_2 = { class: "accordion-item__title-text" };
const _hoisted_3 = {
  key: 0,
  class: "accordion-item__details"
};
const _hoisted_4 = { class: "accordion-item__details-inner" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArrowDownSVG = resolveComponent("ArrowDownSVG");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["accordion-item", { "is-active": $options.isActive || $data.isActiveOverride }])
  }, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("button", {
        class: "accordion-item__trigger",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.toggle && $options.toggle(...args))
      }, [
        createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.$tt($props.title)), 1),
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
        $options.isActive ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 2);
}
const AccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-07df28bf"]]);
const _sfc_main = {
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
const _hoisted_1 = { class: "accordion" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {
      activeItem: $data.activeItem,
      setActiveItem: $options.setActiveItem
    }, void 0, true)
  ]);
}
const AccordionGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7754829d"]]);
export {
  AccordionGroup as A,
  AccordionItem as a
};
