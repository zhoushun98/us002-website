import { I as Info } from "./D-UrbMp8.js";
import { _ as _export_sfc, B as BtsButton, aH as Warning, j as resolveComponent, o as openBlock, b as createBlock, w as withCtx, d as createTextVNode, t as toDisplayString, k as createVNode, e as createCommentVNode } from "./0TEAd3E2.js";
const _sfc_main = {
  name: "BtsError",
  components: { BtsButton, Info, Warning },
  props: {
    title: {
      type: String,
      default: "Oops, something went wrong."
    },
    text: {
      type: String,
      default: ""
    },
    action: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    onClick() {
      window.location = this.action.link;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Warning = resolveComponent("Warning");
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_Info = resolveComponent("Info");
  return openBlock(), createBlock(_component_Info, null, {
    title: withCtx(() => [
      createTextVNode(toDisplayString($props.title), 1)
    ]),
    "sub-title": withCtx(() => _cache[0] || (_cache[0] = [
      createTextVNode("\n       \n    ")
    ])),
    image: withCtx(() => [
      createVNode(_component_Warning, {
        class: "mb16",
        width: "96"
      })
    ]),
    text: withCtx(() => [
      createTextVNode(toDisplayString($props.text), 1)
    ]),
    action: withCtx(() => [
      $props.action ? (openBlock(), createBlock(_component_BtsButton, {
        key: 0,
        onClick: $options.onClick
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.action.text), 1)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const Error = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Error as E
};
