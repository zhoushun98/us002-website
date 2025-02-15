import { _ as _export_sfc, A as AppIcon, y as resolveComponent, o as openBlock, e as createElementBlock, i as createBaseVNode, f as createVNode, J as normalizeClass, g as createTextVNode, t as toDisplayString, h as createCommentVNode } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "PaginationBox",
  components: { AppIcon },
  props: {
    canDecrease: {
      type: Boolean,
      default: false
    },
    canIncrease: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    displayPageCount: {
      type: Boolean,
      default: true
    },
    displayCurrentPage: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: Number,
      default: 14
    }
  },
  emits: ["incrPage", "decrPage"],
  methods: {
    incrPage() {
      if (this.canIncrease) {
        this.$emit("incrPage");
      }
    },
    decrPage() {
      if (this.canDecrease) {
        this.$emit("decrPage");
      }
    }
  }
};
const _hoisted_1 = { class: "pagination" };
const _hoisted_2 = ["title"];
const _hoisted_3 = {
  key: 0,
  class: "pagination__item"
};
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(["pagination__item", {
        "pagination__item--clickable": $props.canDecrease,
        "pagination__item--disabled": !$props.canDecrease
      }]),
      title: _ctx.$t("components.pagination.paginationBox.previousPageTooltip"),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.decrPage && $options.decrPage(...args))
    }, [
      createVNode(_component_AppIcon, {
        icon: "monochrome/arrow-left.svg",
        size: $props.iconSize
      }, null, 8, ["size"])
    ], 10, _hoisted_2),
    _cache[2] || (_cache[2] = createTextVNode()),
    $props.displayPageCount ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("components.pagination.paginationBox.currentPageLabel", { currentPage: $props.currentPage, pageCount: $props.pageCount })), 1)) : $props.displayCurrentPage ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["pagination__item current-page", { "current-page--muted": $props.pageCount < 2 }]),
      title: _ctx.$t("components.pagination.paginationBox.currentPageTooltip")
    }, toDisplayString($props.currentPage), 11, _hoisted_4)) : createCommentVNode("", true),
    _cache[3] || (_cache[3] = createTextVNode()),
    createBaseVNode("div", {
      class: normalizeClass(["pagination__item", {
        "pagination__item--clickable": $props.canIncrease,
        "pagination__item--disabled": !$props.canIncrease
      }]),
      title: _ctx.$t("components.pagination.paginationBox.nextPageTooltip"),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.incrPage && $options.incrPage(...args))
    }, [
      createVNode(_component_AppIcon, {
        icon: "monochrome/arrow-right.svg",
        size: $props.iconSize
      }, null, 8, ["size"])
    ], 10, _hoisted_5)
  ]);
}
const PaginationBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28dd424a"]]);
export {
  PaginationBox as P
};
