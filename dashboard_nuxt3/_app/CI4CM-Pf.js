import { _ as _export_sfc, A as AppIcon, a4 as BtsLink, V as AppTooltip, y as resolveComponent, o as openBlock, c as createBlock, w as withCtx, i as createBaseVNode, g as createTextVNode, e as createElementBlock, F as Fragment, a5 as renderList, J as normalizeClass, t as toDisplayString } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "ActionMenu",
  components: { AppIcon, BtsLink, AppTooltip },
  props: {
    iconType: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    separated: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "left"
    },
    shown: {
      type: Boolean,
      default: false
    },
    triggerCallback: {
      type: Function,
      default: () => {
      }
    },
    popperHideTriggers: {
      type: Array,
      default: void 0
    }
  },
  methods: {
    handleLinkClick(event, callback) {
      if (callback) {
        event.preventDefault();
        callback();
      }
    }
  }
};
const _hoisted_1 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_BtsLink = resolveComponent("BtsLink");
  const _component_AppTooltip = resolveComponent("AppTooltip");
  return openBlock(), createBlock(_component_AppTooltip, {
    type: "dropdown",
    placement: $props.placement,
    strategy: "fixed",
    class: normalizeClass(["action-menu", { "action-menu--separated": $props.separated }]),
    distance: 0,
    shift: false,
    delay: { show: 0, hide: 0 },
    shown: $props.shown,
    "popper-hide-triggers": $props.popperHideTriggers
  }, {
    trigger: withCtx(() => [
      createBaseVNode("div", {
        class: "action-menu__trigger",
        onClick: _cache[0] || (_cache[0] = (...args) => $props.triggerCallback && $props.triggerCallback(...args))
      }, [
        $props.iconType === "arrow-right" ? (openBlock(), createBlock(_component_AppIcon, {
          key: 0,
          icon: "monochrome/arrow-right.svg"
        })) : $props.iconType === "arrow-down" ? (openBlock(), createBlock(_component_AppIcon, {
          key: 1,
          icon: "monochrome/arrow-down.svg"
        })) : (openBlock(), createBlock(_component_AppIcon, {
          key: 2,
          icon: "monochrome/menu-dots.svg"
        }))
      ])
    ]),
    default: withCtx(() => [
      _cache[1] || (_cache[1] = createTextVNode()),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option) => {
        return openBlock(), createElementBlock(Fragment, {
          key: option.id
        }, [
          option.link ? (openBlock(), createBlock(_component_BtsLink, {
            key: 0,
            external: "",
            class: normalizeClass(["action-menu__item", {
              "action-menu__item--remove": option.remove,
              "action-menu__item--separated": $props.separated
            }]),
            to: option.link,
            onClicked: ($event) => $options.handleLinkClick($event, option.callback)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$tt(option.text)), 1)
            ]),
            _: 2
          }, 1032, ["class", "to", "onClicked"])) : (openBlock(), createElementBlock("div", {
            key: option.id,
            class: normalizeClass(["action-menu__item", {
              "action-menu__item--remove": option.remove,
              "action-menu__item--separated": $props.separated
            }]),
            onClick: option.callback
          }, toDisplayString(_ctx.$tt(option.text)), 11, _hoisted_1))
        ], 64);
      }), 128))
    ]),
    _: 1
  }, 8, ["placement", "class", "shown", "popper-hide-triggers"]);
}
const ActionMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d1b7512"]]);
export {
  ActionMenu as A
};
