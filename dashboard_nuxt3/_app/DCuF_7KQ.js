import { _ as _export_sfc, o as openBlock, e as createElementBlock, ae as renderSlot, J as normalizeClass, y as resolveComponent, F as Fragment, a5 as renderList, c as createBlock, w as withCtx, g as createTextVNode, t as toDisplayString } from "./BEpVD-aq.js";
const supportedColorSchemes = ["default", "positive", "negative", "info", "warning"];
const _sfc_main$1 = {
  props: {
    /**
     * Sets the color variation of the tag
     */
    colorScheme: {
      type: String,
      default: "",
      required: false,
      validator(value) {
        return [...supportedColorSchemes, ""].includes(value);
      }
    },
    /**
     * Sets tag to small size
     */
    isSmall: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      required: false,
      default: ""
    },
    backoffice: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const tagClass = ["tag"];
      if (this.colorScheme && this.colorScheme !== "default") {
        this.classNaming(tagClass, this.colorScheme);
      }
      if (this.isSmall) {
        this.classNaming(tagClass, "small");
      }
      if (this.variant) {
        this.classNaming(tagClass, `variant-${this.variant}`);
      }
      if (this.backoffice) {
        this.classNaming(tagClass, "backoffice");
      }
      return tagClass.join(" ");
    }
  },
  methods: {
    classNaming(nameArray, prop) {
      nameArray.push(`${nameArray[0]}--${prop}`);
    }
  },
  supportedColorSchemes
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
const AppTag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-13e1e9fa"]]);
const _sfc_main = {
  components: { AppTag },
  props: {
    /**
     * Sets the color and content values for the tag
     */
    values: {
      type: Array,
      required: true
    },
    /**
     * Sets tags to small size
     */
    areSmall: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the tag variant
     */
    variant: {
      type: String,
      default: ""
    }
  },
  methods: {
    label(tag) {
      if (this.areSmall && tag.smallText) {
        return `${tag.smallText}`;
      }
      return `${tag.text}`;
    }
  }
};
const _hoisted_1 = { class: "asset-tags" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppTag = resolveComponent("AppTag");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.values, (tag, id) => {
      return openBlock(), createBlock(_component_AppTag, {
        key: id,
        "color-scheme": tag.colorScheme,
        "is-small": $props.areSmall,
        variant: $props.variant
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$tt($options.label(tag))), 1)
        ]),
        _: 2
      }, 1032, ["color-scheme", "is-small", "variant"]);
    }), 128))
  ]);
}
const AssetTags = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b87bfc08"]]);
export {
  AssetTags as A
};
