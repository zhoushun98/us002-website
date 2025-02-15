import { P as PaginationBox } from "./C4uvih28.js";
import { _ as _export_sfc, y as resolveComponent, o as openBlock, c as createBlock } from "./BEpVD-aq.js";
const _sfc_main = {
  name: "Pagination",
  components: { PaginationBox },
  props: {
    page: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    count: {
      type: Number,
      default: 0
    },
    displayPageCount: {
      type: Boolean,
      default: false
    },
    displayCurrentPage: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: Number,
      default: 14
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["newPage"],
  data() {
    return {
      privPage: null,
      privPerPage: null,
      privCount: null
    };
  },
  computed: {
    canDecrease() {
      return this.privPage > 1 && !this.disabled;
    },
    canIncrease() {
      return this.privPage < Math.ceil(this.count / this.perPage) && !this.disabled;
    }
  },
  watch: {
    page(val) {
      this.privPage = val;
    }
  },
  mounted() {
    this.privPage = this.page;
  },
  methods: {
    incrPage() {
      if (!this.canIncrease) {
        return;
      }
      this.privPage++;
      this.$emit("newPage", this.privPage);
    },
    decrPage() {
      if (this.privPage === 1) {
        return;
      }
      this.privPage--;
      this.$emit("newPage", this.privPage);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PaginationBox = resolveComponent("PaginationBox");
  return openBlock(), createBlock(_component_PaginationBox, {
    "can-decrease": $options.canDecrease,
    "can-increase": $options.canIncrease,
    "current-page": $data.privPage,
    "page-count": Math.ceil($props.count / $props.perPage),
    "display-page-count": $props.displayPageCount,
    "display-current-page": $props.displayCurrentPage,
    "icon-size": $props.iconSize,
    onDecrPage: $options.decrPage,
    onIncrPage: $options.incrPage
  }, null, 8, ["can-decrease", "can-increase", "current-page", "page-count", "display-page-count", "display-current-page", "icon-size", "onDecrPage", "onIncrPage"]);
}
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Pagination as P
};
