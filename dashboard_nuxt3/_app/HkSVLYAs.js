﻿import { a as axiosInstance, U as URLService, _ as _export_sfc, o as openBlock, e as createElementBlock, i as createBaseVNode, t as toDisplayString, g as createTextVNode, ae as renderSlot, J as normalizeClass, bc as getDefaultExportFromCjs, d$ as highchartsVue_minExports, ax as toDecimal, ag as numberFormatter, y as resolveComponent, c as createBlock } from "./BEpVD-aq.js";
import { h as highchartsMore, H as Highcharts$1 } from "./BgV9bhpL.js";
const IntoTheBlockApi = {
  get(asset, urlName, urlQueryParams) {
    return axiosInstance.get(URLService.buildUrl(urlName, { asset }), { params: urlQueryParams }).then((response) => response.data);
  }
};
function parse(parseFunction, itbData) {
  return parseFunction(itbData);
}
const _sfc_main$2 = {
  props: {
    highlights: {
      type: Object,
      required: true
    }
  }
};
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "itb-chart-highlight" };
const _hoisted_3 = { class: "itb-chart-highlight__title itb-chart-highlight__title--first-slot" };
const _hoisted_4 = { class: "itb-chart-highlight__value" };
const _hoisted_5 = { class: "itb-chart-highlight" };
const _hoisted_6 = { class: "itb-chart-highlight__title itb-chart-highlight__title--second-slot" };
const _hoisted_7 = { class: "itb-chart-highlight__value" };
const _hoisted_8 = { class: "itb-chart-highlight" };
const _hoisted_9 = { class: "itb-chart-highlight__title itb-chart-highlight__title--third-slot" };
const _hoisted_10 = { class: "itb-chart-highlight__value" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, toDisplayString($props.highlights.firstSlot.title), 1),
      _cache[0] || (_cache[0] = createTextVNode()),
      createBaseVNode("div", _hoisted_4, toDisplayString($props.highlights.firstSlot.value), 1)
    ]),
    _cache[3] || (_cache[3] = createTextVNode()),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("div", _hoisted_6, toDisplayString($props.highlights.secondSlot.title), 1),
      _cache[1] || (_cache[1] = createTextVNode()),
      createBaseVNode("div", _hoisted_7, toDisplayString($props.highlights.secondSlot.value), 1)
    ]),
    _cache[4] || (_cache[4] = createTextVNode()),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, toDisplayString($props.highlights.thirdSlot.title), 1),
      _cache[2] || (_cache[2] = createTextVNode()),
      createBaseVNode("div", _hoisted_10, toDisplayString($props.highlights.thirdSlot.value), 1)
    ])
  ]);
}
const InsightHighlights = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-da0f7619"]]);
const _sfc_main$1 = {
  props: {
    size: {
      type: String,
      default: "normal",
      // normal, medium, small (based on market-itb-chart modifier classes)
      required: false
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["market-itb-chart", `market-itb-chart--${$props.size}`])
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
const InsightPanelWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-0b154ab8"]]);
var stock = { exports: {} };
(function(module) {
  !/**
  * Highstock JS v11.4.8 (2024-08-29)
  *
  * Highcharts Stock as a plugin for Highcharts
  *
  * (c) 2010-2024 Torstein Honsi
  *
  * License: www.highcharts.com/license
  */
  function(t) {
    module.exports ? (t.default = t, module.exports = t) : t("undefined" != typeof Highcharts ? Highcharts : void 0);
  }(function(t) {
    var e = t ? t._modules : {};
    function i(e2, i2, s, o) {
      e2.hasOwnProperty(i2) || (e2[i2] = o.apply(null, s), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: i2, module: e2[i2] } })));
    }
    i(e, "Series/DataModifyComposition.js", [e["Core/Axis/Axis.js"], e["Core/Series/Point.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      var o;
      let { tooltipFormatter: r } = e2.prototype, { addEvent: a, arrayMax: n, arrayMin: l, correctFloat: h, defined: d, isArray: p, isNumber: c, isString: u, pick: g } = s;
      return function(t3) {
        function e3(t4, e4, i4) {
          !this.isXAxis && (this.series.forEach(function(i5) {
            "compare" === t4 && "boolean" != typeof e4 ? i5.setCompare(e4, false) : "cumulative" !== t4 || u(e4) || i5.setCumulative(e4, false);
          }), g(i4, true) && this.chart.redraw());
        }
        function i3(t4) {
          let e4 = this, { numberFormatter: i4 } = e4.series.chart, s3 = function(s4) {
            t4 = t4.replace("{point." + s4 + "}", (e4[s4] > 0 && "change" === s4 ? "+" : "") + i4(e4[s4], g(e4.series.tooltipOptions.changeDecimals, 2)));
          };
          return d(e4.change) && s3("change"), d(e4.cumulativeSum) && s3("cumulativeSum"), r.apply(this, [t4]);
        }
        function s2() {
          let t4;
          let e4 = this.options.compare;
          ("percent" === e4 || "value" === e4 || this.options.cumulative) && (t4 = new y(this), "percent" === e4 || "value" === e4 ? t4.initCompare(e4) : t4.initCumulative()), this.dataModify = t4;
        }
        function o2(t4) {
          let e4 = t4.dataExtremes, i4 = e4.activeYData;
          if (this.dataModify && e4) {
            let t5;
            this.options.compare ? t5 = [this.dataModify.modifyValue(e4.dataMin), this.dataModify.modifyValue(e4.dataMax)] : this.options.cumulative && p(i4) && i4.length >= 2 && (t5 = y.getCumulativeExtremes(i4)), t5 && (e4.dataMin = l(t5), e4.dataMax = n(t5));
          }
        }
        function f(t4, e4) {
          this.options.compare = this.userOptions.compare = t4, this.update({}, g(e4, true)), this.dataModify && ("value" === t4 || "percent" === t4) ? this.dataModify.initCompare(t4) : this.points.forEach((t5) => {
            delete t5.change;
          });
        }
        function x() {
          if (this.xAxis && this.processedYData && this.dataModify) {
            let t4 = this.processedXData, e4 = this.processedYData, i4 = e4.length, s3 = true === this.options.compareStart ? 0 : 1, o3 = -1, r2;
            for (this.pointArrayMap && (o3 = this.pointArrayMap.indexOf(this.options.pointValKey || this.pointValKey || "y")), r2 = 0; r2 < i4 - s3; r2++) {
              let i5 = e4[r2] && o3 > -1 ? e4[r2][o3] : e4[r2];
              if (c(i5) && 0 !== i5 && t4[r2 + s3] >= (this.xAxis.min || 0)) {
                this.dataModify.compareValue = i5;
                break;
              }
            }
          }
        }
        function m(t4, e4) {
          this.setModifier("compare", t4, e4);
        }
        function b(t4, e4) {
          t4 = g(t4, false), this.options.cumulative = this.userOptions.cumulative = t4, this.update({}, g(e4, true)), this.dataModify ? this.dataModify.initCumulative() : this.points.forEach((t5) => {
            delete t5.cumulativeSum;
          });
        }
        function v(t4, e4) {
          this.setModifier("cumulative", t4, e4);
        }
        t3.compose = function(t4, r2, n2) {
          let l2 = r2.prototype, h2 = n2.prototype, d2 = t4.prototype;
          return d2.setCompare || (d2.setCompare = f, d2.setCumulative = b, a(t4, "afterInit", s2), a(t4, "afterGetExtremes", o2), a(t4, "afterProcessData", x)), l2.setCompare || (l2.setCompare = m, l2.setModifier = e3, l2.setCumulative = v, h2.tooltipFormatter = i3), t4;
        };
        class y {
          constructor(t4) {
            this.series = t4;
          }
          modifyValue() {
            return 0;
          }
          static getCumulativeExtremes(t4) {
            let e4 = 1 / 0, i4 = -1 / 0;
            return t4.reduce((t5, s3) => {
              let o3 = t5 + s3;
              return e4 = Math.min(e4, o3, t5), i4 = Math.max(i4, o3, t5), o3;
            }), [e4, i4];
          }
          initCompare(t4) {
            this.modifyValue = function(e4, i4) {
              null === e4 && (e4 = 0);
              let s3 = this.compareValue;
              if (void 0 !== e4 && void 0 !== s3) {
                if ("value" === t4 ? e4 -= s3 : e4 = e4 / s3 * 100 - (100 === this.series.options.compareBase ? 0 : 100), void 0 !== i4) {
                  let t5 = this.series.points[i4];
                  t5 && (t5.change = e4);
                }
                return e4;
              }
              return 0;
            };
          }
          initCumulative() {
            this.modifyValue = function(t4, e4) {
              if (null === t4 && (t4 = 0), void 0 !== t4 && void 0 !== e4) {
                let i4 = e4 > 0 ? this.series.points[e4 - 1] : null;
                i4 && i4.cumulativeSum && (t4 = h(i4.cumulativeSum + t4));
                let s3 = this.series.points[e4], o3 = s3.series.options.cumulativeStart, r2 = s3.x <= this.series.xAxis.max && s3.x >= this.series.xAxis.min;
                return s3 && (!o3 || r2 ? s3.cumulativeSum = t4 : s3.cumulativeSum = void 0), t4;
              }
              return 0;
            };
          }
        }
        t3.Additions = y;
      }(o || (o = {})), o;
    }), i(e, "Stock/Navigator/ChartNavigatorComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let i2;
      let { isTouchDevice: s } = t2, { addEvent: o, merge: r, pick: a } = e2, n = [];
      function l() {
        this.navigator && this.navigator.setBaseSeries(null, false);
      }
      function h() {
        var _a;
        let t3, e3, i3;
        let s2 = this.legend, o2 = this.navigator;
        if (o2) {
          t3 = s2 && s2.options, e3 = o2.xAxis, i3 = o2.yAxis;
          let { scrollbarHeight: r2, scrollButtonSize: n2 } = o2;
          this.inverted ? (o2.left = o2.opposite ? this.chartWidth - r2 - o2.height : this.spacing[3] + r2, o2.top = this.plotTop + n2) : (o2.left = a(e3.left, this.plotLeft + n2), o2.top = o2.navigatorOptions.top || this.chartHeight - o2.height - r2 - (((_a = this.scrollbar) == null ? void 0 : _a.options.margin) || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (t3 && "bottom" === t3.verticalAlign && "proximate" !== t3.layout && t3.enabled && !t3.floating ? s2.legendHeight + a(t3.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), e3 && i3 && (this.inverted ? e3.options.left = i3.options.left = o2.left : e3.options.top = i3.options.top = o2.top, e3.setAxisSize(), i3.setAxisSize());
        }
      }
      function d(t3) {
        !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this), a(t3.redraw, true) && this.redraw(t3.animation));
      }
      function p() {
        let t3 = this.options;
        (t3.navigator.enabled || t3.scrollbar.enabled) && (this.scroller = this.navigator = new i2(this));
      }
      function c() {
        let t3 = this.options, e3 = t3.navigator, i3 = t3.rangeSelector;
        if ((e3 && e3.enabled || i3 && i3.enabled) && (!s && "x" === this.zooming.type || s && "x" === this.zooming.pinchType)) return false;
      }
      function u(t3) {
        let e3 = t3.navigator;
        if (e3 && t3.xAxis[0]) {
          let i3 = t3.xAxis[0].getExtremes();
          e3.render(i3.min, i3.max);
        }
      }
      function g(t3) {
        let e3 = t3.options.navigator || {}, i3 = t3.options.scrollbar || {};
        !this.navigator && !this.scroller && (e3.enabled || i3.enabled) && (r(true, this.options.navigator, e3), r(true, this.options.scrollbar, i3), delete t3.options.navigator, delete t3.options.scrollbar);
      }
      return { compose: function(t3, s2) {
        if (e2.pushUnique(n, t3)) {
          let e3 = t3.prototype;
          i2 = s2, e3.callbacks.push(u), o(t3, "afterAddSeries", l), o(t3, "afterSetChartSize", h), o(t3, "afterUpdate", d), o(t3, "beforeRender", p), o(t3, "beforeShowResetZoom", c), o(t3, "update", g);
        }
      } };
    }), i(e, "Core/Axis/NavigatorAxisComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { isTouchDevice: i2 } = t2, { addEvent: s, correctFloat: o, defined: r, isNumber: a, pick: n } = e2;
      function l() {
        this.navigatorAxis || (this.navigatorAxis = new d(this));
      }
      function h(t3) {
        let e3;
        let s2 = this.chart, o2 = s2.options, a2 = o2.navigator, n2 = this.navigatorAxis, l2 = s2.zooming.pinchType, h2 = o2.rangeSelector, d2 = s2.zooming.type;
        if (this.isXAxis && ((a2 == null ? void 0 : a2.enabled) || (h2 == null ? void 0 : h2.enabled))) {
          if ("y" === d2 && "zoom" === t3.trigger) e3 = false;
          else if (("zoom" === t3.trigger && "xy" === d2 || i2 && "xy" === l2) && this.options.range) {
            let e4 = n2.previousZoom;
            r(t3.min) ? n2.previousZoom = [this.min, this.max] : e4 && (t3.min = e4[0], t3.max = e4[1], n2.previousZoom = void 0);
          }
        }
        void 0 !== e3 && t3.preventDefault();
      }
      class d {
        static compose(t3) {
          t3.keepProps.includes("navigatorAxis") || (t3.keepProps.push("navigatorAxis"), s(t3, "init", l), s(t3, "setExtremes", h));
        }
        constructor(t3) {
          this.axis = t3;
        }
        destroy() {
          this.axis = void 0;
        }
        toFixedRange(t3, e3, i3, s2) {
          let l2 = this.axis, h2 = (l2.pointRange || 0) / 2, d2 = n(i3, l2.translate(t3, true, !l2.horiz)), p = n(s2, l2.translate(e3, true, !l2.horiz));
          return r(i3) || (d2 = o(d2 + h2)), r(s2) || (p = o(p - h2)), a(d2) && a(p) || (d2 = p = void 0), { min: d2, max: p };
        }
      }
      return d;
    }), i(e, "Stock/Navigator/NavigatorDefaults.js", [e["Core/Color/Color.js"], e["Core/Series/SeriesRegistry.js"]], function(t2, e2) {
      let { parse: i2 } = t2, { seriesTypes: s } = e2;
      return { height: 40, margin: 25, maskInside: true, handles: { width: 7, borderRadius: 0, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: true, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: i2("#667aff").setOpacity(0.3).get(), outlineColor: "#999999", outlineWidth: 1, series: { type: void 0 === s.areaspline ? "line" : "areaspline", fillOpacity: 0.05, lineWidth: 1, compare: null, sonification: { enabled: false }, dataGrouping: { approximation: "average", enabled: true, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] }, dataLabels: { enabled: false, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: false }, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", id: "navigator-x-axis", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#000000", fontSize: "0.7em", opacity: 0.6, textOutline: "2px contrast" }, x: 3, y: -4 }, crosshair: false }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: false, endOnTick: false, minPadding: 0.1, id: "navigator-y-axis", maxPadding: 0.1, labels: { enabled: false }, crosshair: false, title: { text: null }, tickLength: 0, tickWidth: 0 } };
    }), i(e, "Stock/Navigator/NavigatorSymbols.js", [e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { relativeLength: i2 } = e2;
      return { "navigator-handle": function(e3, s, o, r, a = {}) {
        let n = a.width ? a.width / 2 : o, l = i2(a.borderRadius || 0, Math.min(2 * n, r));
        return [["M", -1.5, (r = a.height || r) / 2 - 3.5], ["L", -1.5, r / 2 + 4.5], ["M", 0.5, r / 2 - 3.5], ["L", 0.5, r / 2 + 4.5], ...t2.rect(-n - 1, 0.5, 2 * n + 1, r, { r: l })];
      } };
    }), i(e, "Stock/Utilities/StockUtilities.js", [e["Core/Utilities.js"]], function(t2) {
      let { defined: e2 } = t2;
      return { setFixedRange: function(t3) {
        let i2 = this.xAxis[0];
        e2(i2.dataMax) && e2(i2.dataMin) && t3 ? this.fixedRange = Math.min(t3, i2.dataMax - i2.dataMin) : this.fixedRange = t3;
      } };
    }), i(e, "Stock/Navigator/NavigatorComposition.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/NavigatorAxisComposition.js"], e["Stock/Navigator/NavigatorDefaults.js"], e["Stock/Navigator/NavigatorSymbols.js"], e["Core/Renderer/RendererRegistry.js"], e["Stock/Utilities/StockUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
      let { setOptions: l } = t2, { composed: h } = e2, { getRendererType: d } = r, { setFixedRange: p } = a, { addEvent: c, extend: u, pushUnique: g } = n;
      function f() {
        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
      }
      return { compose: function(t3, e3, r2) {
        i2.compose(e3), g(h, "Navigator") && (t3.prototype.setFixedRange = p, u(d().prototype.symbols, o), c(r2, "afterUpdate", f), l({ navigator: s }));
      } };
    }), i(e, "Core/Axis/ScrollbarAxis.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
      var i2;
      let { composed: s } = t2, { addEvent: o, defined: r, pick: a, pushUnique: n } = e2;
      return function(t3) {
        let e3;
        function i3(t4) {
          let e4 = a(t4.options && t4.options.min, t4.min), i4 = a(t4.options && t4.options.max, t4.max);
          return { axisMin: e4, axisMax: i4, scrollMin: r(t4.dataMin) ? Math.min(e4, t4.min, t4.dataMin, a(t4.threshold, 1 / 0)) : e4, scrollMax: r(t4.dataMax) ? Math.max(i4, t4.max, t4.dataMax, a(t4.threshold, -1 / 0)) : i4 };
        }
        function l() {
          let t4 = this.scrollbar, e4 = t4 && !t4.options.opposite, i4 = this.horiz ? 2 : e4 ? 3 : 1;
          t4 && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i4] += t4.size + (t4.options.margin || 0));
        }
        function h() {
          let t4 = this;
          t4.options && t4.options.scrollbar && t4.options.scrollbar.enabled && (t4.options.scrollbar.vertical = !t4.horiz, t4.options.startOnTick = t4.options.endOnTick = false, t4.scrollbar = new e3(t4.chart.renderer, t4.options.scrollbar, t4.chart), o(t4.scrollbar, "changed", function(e4) {
            let s2, o2;
            let { axisMin: a2, axisMax: n2, scrollMin: l2, scrollMax: h2 } = i3(t4), d2 = h2 - l2;
            if (r(a2) && r(n2)) {
              if (t4.horiz && !t4.reversed || !t4.horiz && t4.reversed ? (s2 = l2 + d2 * this.to, o2 = l2 + d2 * this.from) : (s2 = l2 + d2 * (1 - this.from), o2 = l2 + d2 * (1 - this.to)), this.shouldUpdateExtremes(e4.DOMType)) {
                let i4 = "mousemove" !== e4.DOMType && "touchmove" !== e4.DOMType && void 0;
                t4.setExtremes(o2, s2, true, i4, e4);
              } else this.setRange(this.from, this.to);
            }
          }));
        }
        function d() {
          let t4, e4, s2;
          let { scrollMin: o2, scrollMax: a2 } = i3(this), n2 = this.scrollbar, l2 = this.axisTitleMargin + (this.titleOffset || 0), h2 = this.chart.scrollbarsOffsets, d2 = this.options.margin || 0;
          if (n2 && h2) {
            if (this.horiz) this.opposite || (h2[1] += l2), n2.position(this.left, this.top + this.height + 2 + h2[1] - (this.opposite ? d2 : 0), this.width, this.height), this.opposite || (h2[1] += d2), t4 = 1;
            else {
              let e5;
              this.opposite && (h2[0] += l2), e5 = n2.options.opposite ? this.left + this.width + 2 + h2[0] - (this.opposite ? 0 : d2) : this.opposite ? 0 : d2, n2.position(e5, this.top, this.width, this.height), this.opposite && (h2[0] += d2), t4 = 0;
            }
            if (h2[t4] += n2.size + (n2.options.margin || 0), isNaN(o2) || isNaN(a2) || !r(this.min) || !r(this.max) || this.dataMin === this.dataMax) n2.setRange(0, 1);
            else if (this.min === this.max) {
              let t5 = this.pointRange / (this.dataMax + 1);
              e4 = t5 * this.min, s2 = t5 * (this.max + 1), n2.setRange(e4, s2);
            } else e4 = (this.min - o2) / (a2 - o2), s2 = (this.max - o2) / (a2 - o2), this.horiz && !this.reversed || !this.horiz && this.reversed ? n2.setRange(e4, s2) : n2.setRange(1 - s2, 1 - e4);
          }
        }
        t3.compose = function(t4, i4) {
          n(s, "Axis.Scrollbar") && (e3 = i4, o(t4, "afterGetOffset", l), o(t4, "afterInit", h), o(t4, "afterRender", d));
        };
      }(i2 || (i2 = {})), i2;
    }), i(e, "Stock/Scrollbar/ScrollbarDefaults.js", [], function() {
      return { height: 10, barBorderRadius: 5, buttonBorderRadius: 0, buttonsEnabled: false, liveRedraw: void 0, margin: void 0, minWidth: 6, opposite: true, step: 0.2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 0, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "none", trackBackgroundColor: "rgba(255, 255, 255, 0.001)", trackBorderColor: "#cccccc", trackBorderRadius: 5, trackBorderWidth: 1 };
    }), i(e, "Stock/Scrollbar/Scrollbar.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/ScrollbarAxis.js"], e["Stock/Scrollbar/ScrollbarDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
      let { defaultOptions: r } = t2, { addEvent: a, correctFloat: n, crisp: l, defined: h, destroyObjectProperties: d, fireEvent: p, merge: c, pick: u, removeEvent: g } = o;
      class f {
        static compose(t3) {
          i2.compose(t3, f);
        }
        static swapXY(t3, e3) {
          return e3 && t3.forEach((t4) => {
            let e4;
            let i3 = t4.length;
            for (let s2 = 0; s2 < i3; s2 += 2) "number" == typeof (e4 = t4[s2 + 1]) && (t4[s2 + 1] = t4[s2 + 2], t4[s2 + 2] = e4);
          }), t3;
        }
        constructor(t3, e3, i3) {
          this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(t3, e3, i3);
        }
        addEvents() {
          let t3 = this.options.inverted ? [1, 0] : [0, 1], e3 = this.scrollbarButtons, i3 = this.scrollbarGroup.element, s2 = this.track.element, o2 = this.mouseDownHandler.bind(this), r2 = this.mouseMoveHandler.bind(this), n2 = this.mouseUpHandler.bind(this), l2 = [[e3[t3[0]].element, "click", this.buttonToMinClick.bind(this)], [e3[t3[1]].element, "click", this.buttonToMaxClick.bind(this)], [s2, "click", this.trackClick.bind(this)], [i3, "mousedown", o2], [i3.ownerDocument, "mousemove", r2], [i3.ownerDocument, "mouseup", n2], [i3, "touchstart", o2], [i3.ownerDocument, "touchmove", r2], [i3.ownerDocument, "touchend", n2]];
          l2.forEach(function(t4) {
            a.apply(null, t4);
          }), this._events = l2;
        }
        buttonToMaxClick(t3) {
          let e3 = (this.to - this.from) * u(this.options.step, 0.2);
          this.updatePosition(this.from + e3, this.to + e3), p(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: t3 });
        }
        buttonToMinClick(t3) {
          let e3 = n(this.to - this.from) * u(this.options.step, 0.2);
          this.updatePosition(n(this.from - e3), n(this.to - e3)), p(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: t3 });
        }
        cursorToScrollbarPosition(t3) {
          let e3 = this.options, i3 = e3.minWidth > this.calculatedWidth ? e3.minWidth : 0;
          return { chartX: (t3.chartX - this.x - this.xOffset) / (this.barWidth - i3), chartY: (t3.chartY - this.y - this.yOffset) / (this.barWidth - i3) };
        }
        destroy() {
          let t3 = this, e3 = t3.chart.scroller;
          t3.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(e4) {
            t3[e4] && t3[e4].destroy && (t3[e4] = t3[e4].destroy());
          }), e3 && t3 === e3.scrollbar && (e3.scrollbar = null, d(e3.scrollbarButtons));
        }
        drawScrollbarButton(t3) {
          let e3 = this.renderer, i3 = this.scrollbarButtons, s2 = this.options, o2 = this.size, r2 = e3.g().add(this.group);
          if (i3.push(r2), s2.buttonsEnabled) {
            let a2 = e3.rect().addClass("highcharts-scrollbar-button").add(r2);
            this.chart.styledMode || a2.attr({ stroke: s2.buttonBorderColor, "stroke-width": s2.buttonBorderWidth, fill: s2.buttonBackgroundColor }), a2.attr(a2.crisp({ x: -0.5, y: -0.5, width: o2, height: o2, r: s2.buttonBorderRadius }, a2.strokeWidth()));
            let n2 = e3.path(f.swapXY([["M", o2 / 2 + (t3 ? -1 : 1), o2 / 2 - 3], ["L", o2 / 2 + (t3 ? -1 : 1), o2 / 2 + 3], ["L", o2 / 2 + (t3 ? 2 : -2), o2 / 2]], s2.vertical)).addClass("highcharts-scrollbar-arrow").add(i3[t3]);
            this.chart.styledMode || n2.attr({ fill: s2.buttonArrowColor });
          }
        }
        init(t3, e3, i3) {
          this.scrollbarButtons = [], this.renderer = t3, this.userOptions = e3, this.options = c(s, r.scrollbar, e3), this.options.margin = u(this.options.margin, 10), this.chart = i3, this.size = u(this.options.size, this.options.height), e3.enabled && (this.render(), this.addEvents());
        }
        mouseDownHandler(t3) {
          var _a;
          let e3 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(t3)) || t3, i3 = this.cursorToScrollbarPosition(e3);
          this.chartX = i3.chartX, this.chartY = i3.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = true;
        }
        mouseMoveHandler(t3) {
          var _a;
          let e3;
          let i3 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(t3)) || t3, s2 = this.options.vertical ? "chartY" : "chartX", o2 = this.initPositions || [];
          this.grabbedCenter && (!t3.touches || 0 !== t3.touches[0][s2]) && (e3 = this.cursorToScrollbarPosition(i3)[s2] - this[s2], this.hasDragged = true, this.updatePosition(o2[0] + e3, o2[1] + e3), this.hasDragged && p(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: t3.type, DOMEvent: t3 }));
        }
        mouseUpHandler(t3) {
          this.hasDragged && p(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: t3.type, DOMEvent: t3 }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
        }
        position(t3, e3, i3, s2) {
          let { buttonsEnabled: o2, margin: r2 = 0, vertical: a2 } = this.options, n2 = this.rendered ? "animate" : "attr", l2 = s2, h2 = 0;
          this.group.show(), this.x = t3, this.y = e3 + this.trackBorderWidth, this.width = i3, this.height = s2, this.xOffset = l2, this.yOffset = h2, a2 ? (this.width = this.yOffset = i3 = h2 = this.size, this.xOffset = l2 = 0, this.yOffset = h2 = o2 ? this.size : 0, this.barWidth = s2 - (o2 ? 2 * i3 : 0), this.x = t3 += r2) : (this.height = s2 = this.size, this.xOffset = l2 = o2 ? this.size : 0, this.barWidth = i3 - (o2 ? 2 * s2 : 0), this.y = this.y + r2), this.group[n2]({ translateX: t3, translateY: this.y }), this.track[n2]({ width: i3, height: s2 }), this.scrollbarButtons[1][n2]({ translateX: a2 ? 0 : i3 - l2, translateY: a2 ? s2 - h2 : 0 });
        }
        removeEvents() {
          this._events.forEach(function(t3) {
            g.apply(null, t3);
          }), this._events.length = 0;
        }
        render() {
          let t3 = this.renderer, e3 = this.options, i3 = this.size, s2 = this.chart.styledMode, o2 = t3.g("scrollbar").attr({ zIndex: e3.zIndex }).hide().add();
          this.group = o2, this.track = t3.rect().addClass("highcharts-scrollbar-track").attr({ r: e3.trackBorderRadius || 0, height: i3, width: i3 }).add(o2), s2 || this.track.attr({ fill: e3.trackBackgroundColor, stroke: e3.trackBorderColor, "stroke-width": e3.trackBorderWidth });
          let r2 = this.trackBorderWidth = this.track.strokeWidth();
          this.track.attr({ x: -l(0, r2), y: -l(0, r2) }), this.scrollbarGroup = t3.g().add(o2), this.scrollbar = t3.rect().addClass("highcharts-scrollbar-thumb").attr({ height: i3 - r2, width: i3 - r2, r: e3.barBorderRadius || 0 }).add(this.scrollbarGroup), this.scrollbarRifles = t3.path(f.swapXY([["M", -3, i3 / 4], ["L", -3, 2 * i3 / 3], ["M", 0, i3 / 4], ["L", 0, 2 * i3 / 3], ["M", 3, i3 / 4], ["L", 3, 2 * i3 / 3]], e3.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), s2 || (this.scrollbar.attr({ fill: e3.barBackgroundColor, stroke: e3.barBorderColor, "stroke-width": e3.barBorderWidth }), this.scrollbarRifles.attr({ stroke: e3.rifleColor, "stroke-width": 1 })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-l(0, this.scrollbarStrokeWidth), -l(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
        }
        setRange(t3, e3) {
          let i3, s2;
          let o2 = this.options, r2 = o2.vertical, a2 = o2.minWidth, l2 = this.barWidth, d2 = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
          if (!h(l2)) return;
          let p2 = l2 * Math.min(e3, 1);
          i3 = Math.ceil(l2 * (t3 = Math.max(t3, 0))), this.calculatedWidth = s2 = n(p2 - i3), s2 < a2 && (i3 = (l2 - a2 + s2) * t3, s2 = a2);
          let c2 = Math.floor(i3 + this.xOffset + this.yOffset), u2 = s2 / 2 - 0.5;
          this.from = t3, this.to = e3, r2 ? (this.scrollbarGroup[d2]({ translateY: c2 }), this.scrollbar[d2]({ height: s2 }), this.scrollbarRifles[d2]({ translateY: u2 }), this.scrollbarTop = c2, this.scrollbarLeft = 0) : (this.scrollbarGroup[d2]({ translateX: c2 }), this.scrollbar[d2]({ width: s2 }), this.scrollbarRifles[d2]({ translateX: u2 }), this.scrollbarLeft = c2, this.scrollbarTop = 0), s2 <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), false === o2.showFull && (t3 <= 0 && e3 >= 1 ? this.group.hide() : this.group.show()), this.rendered = true;
        }
        shouldUpdateExtremes(t3) {
          return u(this.options.liveRedraw, e2.svg && !e2.isTouchDevice && !this.chart.boosted) || "mouseup" === t3 || "touchend" === t3 || !h(t3);
        }
        trackClick(t3) {
          var _a;
          let e3 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(t3)) || t3, i3 = this.to - this.from, s2 = this.y + this.scrollbarTop, o2 = this.x + this.scrollbarLeft;
          this.options.vertical && e3.chartY > s2 || !this.options.vertical && e3.chartX > o2 ? this.updatePosition(this.from + i3, this.to + i3) : this.updatePosition(this.from - i3, this.to - i3), p(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: t3 });
        }
        update(t3) {
          this.destroy(), this.init(this.chart.renderer, c(true, this.options, t3), this.chart);
        }
        updatePosition(t3, e3) {
          e3 > 1 && (t3 = n(1 - n(e3 - t3)), e3 = 1), t3 < 0 && (e3 = n(e3 - t3), t3 = 0), this.from = t3, this.to = e3;
        }
      }
      return f.defaultOptions = s, r.scrollbar = c(true, f.defaultOptions, r.scrollbar), f;
    }), i(e, "Stock/Navigator/Navigator.js", [e["Core/Axis/Axis.js"], e["Stock/Navigator/ChartNavigatorComposition.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Axis/NavigatorAxisComposition.js"], e["Stock/Navigator/NavigatorComposition.js"], e["Stock/Scrollbar/Scrollbar.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
      let { defaultOptions: h } = i2, { isTouchDevice: d } = s, { prototype: { symbols: p } } = n, { addEvent: c, clamp: u, correctFloat: g, defined: f, destroyObjectProperties: x, erase: m, extend: b, find: v, fireEvent: y, isArray: M, isNumber: S, merge: A, pick: k, removeEvent: C, splat: D } = l;
      function w(t3, ...e3) {
        let i3 = [].filter.call(e3, S);
        if (i3.length) return Math[t3].apply(0, i3);
      }
      class O {
        static compose(t3, i3, s2) {
          e2.compose(t3, O), r.compose(t3, i3, s2);
        }
        constructor(t3) {
          this.isDirty = false, this.scrollbarHeight = 0, this.init(t3);
        }
        drawHandle(t3, e3, i3, s2) {
          let o2 = this.navigatorOptions.handles.height;
          this.handles[e3][s2](i3 ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(t3, 10) + 0.5 - o2) } : { translateX: Math.round(this.left + parseInt(t3, 10)), translateY: Math.round(this.top + this.height / 2 - o2 / 2 - 1) });
        }
        drawOutline(t3, e3, i3, s2) {
          let o2 = this.navigatorOptions.maskInside, r2 = this.outline.strokeWidth(), a2 = r2 / 2, n2 = r2 % 2 / 2, l2 = this.scrollButtonSize, h2 = this.size, d2 = this.top, p2 = this.height, c2 = d2 - a2, u2 = d2 + p2, g2 = this.left, f2, x2;
          i3 ? (f2 = d2 + e3 + n2, e3 = d2 + t3 + n2, x2 = [["M", g2 + p2, d2 - l2 - n2], ["L", g2 + p2, f2], ["L", g2, f2], ["M", g2, e3], ["L", g2 + p2, e3], ["L", g2 + p2, d2 + h2 + l2]], o2 && x2.push(["M", g2 + p2, f2 - a2], ["L", g2 + p2, e3 + a2])) : (g2 -= l2, t3 += g2 + l2 - n2, e3 += g2 + l2 - n2, x2 = [["M", g2, c2], ["L", t3, c2], ["L", t3, u2], ["M", e3, u2], ["L", e3, c2], ["L", g2 + h2 + 2 * l2, c2]], o2 && x2.push(["M", t3 - a2, c2], ["L", e3 + a2, c2])), this.outline[s2]({ d: x2 });
        }
        drawMasks(t3, e3, i3, s2) {
          let o2, r2, a2, n2;
          let l2 = this.left, h2 = this.top, d2 = this.height;
          i3 ? (a2 = [l2, l2, l2], n2 = [h2, h2 + t3, h2 + e3], r2 = [d2, d2, d2], o2 = [t3, e3 - t3, this.size - e3]) : (a2 = [l2, l2 + t3, l2 + e3], n2 = [h2, h2, h2], r2 = [t3, e3 - t3, this.size - e3], o2 = [d2, d2, d2]), this.shades.forEach((t4, e4) => {
            t4[s2]({ x: a2[e4], y: n2[e4], width: r2[e4], height: o2[e4] });
          });
        }
        renderElements() {
          var _a;
          let t3 = this, e3 = t3.navigatorOptions, i3 = e3.maskInside, s2 = t3.chart, o2 = s2.inverted, r2 = s2.renderer, a2 = { cursor: o2 ? "ns-resize" : "ew-resize" }, n2 = t3.navigatorGroup ?? (t3.navigatorGroup = r2.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add());
          if ([!i3, i3, !i3].forEach((i4, o3) => {
            let l2 = t3.shades[o3] ?? (t3.shades[o3] = r2.rect().addClass("highcharts-navigator-mask" + (1 === o3 ? "-inside" : "-outside")).add(n2));
            s2.styledMode || (l2.attr({ fill: i4 ? e3.maskFill : "rgba(0,0,0,0)" }), 1 === o3 && l2.css(a2));
          }), t3.outline || (t3.outline = r2.path().addClass("highcharts-navigator-outline").add(n2)), s2.styledMode || t3.outline.attr({ "stroke-width": e3.outlineWidth, stroke: e3.outlineColor }), (_a = e3.handles) == null ? void 0 : _a.enabled) {
            let i4 = e3.handles, { height: o3, width: l2 } = i4;
            [0, 1].forEach((e4) => {
              var _a2;
              let h2 = i4.symbols[e4];
              if (t3.handles[e4] && t3.handles[e4].symbolUrl === h2) {
                if (!t3.handles[e4].isImg && t3.handles[e4].symbolName !== h2) {
                  let i5 = p[h2].call(p, -l2 / 2 - 1, 0, l2, o3);
                  t3.handles[e4].attr({ d: i5 }), t3.handles[e4].symbolName = h2;
                }
              } else (_a2 = t3.handles[e4]) == null ? void 0 : _a2.destroy(), t3.handles[e4] = r2.symbol(h2, -l2 / 2 - 1, 0, l2, o3, i4), t3.handles[e4].attr({ zIndex: 7 - e4 }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][e4]).add(n2), t3.addMouseEvents();
              s2.inverted && t3.handles[e4].attr({ rotation: 90, rotationOriginX: Math.floor(-l2 / 2), rotationOriginY: (o3 + l2) / 2 }), s2.styledMode || t3.handles[e4].attr({ fill: i4.backgroundColor, stroke: i4.borderColor, "stroke-width": i4.lineWidth, width: i4.width, height: i4.height, x: -l2 / 2 - 1, y: 0 }).css(a2);
            });
          }
        }
        update(t3, e3 = false) {
          var _a;
          let i3 = this.chart, s2 = i3.options.chart.inverted !== ((_a = i3.scrollbar) == null ? void 0 : _a.options.vertical);
          if (A(true, i3.options.navigator, t3), this.navigatorOptions = i3.options.navigator || {}, this.setOpposite(), f(t3.enabled) || s2) return this.destroy(), this.navigatorEnabled = t3.enabled || this.navigatorEnabled, this.init(i3);
          if (this.navigatorEnabled && (this.isDirty = true, false === t3.adaptToUpdatedData && this.baseSeries.forEach((t4) => {
            C(t4, "updatedData", this.updatedDataHandler);
          }, this), t3.adaptToUpdatedData && this.baseSeries.forEach((t4) => {
            t4.eventsToUnbind.push(c(t4, "updatedData", this.updatedDataHandler));
          }, this), (t3.series || t3.baseSeries) && this.setBaseSeries(void 0, false), t3.height || t3.xAxis || t3.yAxis)) {
            this.height = t3.height ?? this.height;
            let e4 = this.getXAxisOffsets();
            this.xAxis.update({ ...t3.xAxis, offsets: e4, [i3.inverted ? "width" : "height"]: this.height, [i3.inverted ? "height" : "width"]: void 0 }, false), this.yAxis.update({ ...t3.yAxis, [i3.inverted ? "width" : "height"]: this.height }, false);
          }
          e3 && i3.redraw();
        }
        render(t3, e3, i3, s2) {
          let o2 = this.chart, r2 = this.xAxis, a2 = r2.pointRange || 0, n2 = r2.navigatorAxis.fake ? o2.xAxis[0] : r2, l2 = this.navigatorEnabled, h2 = this.rendered, d2 = o2.inverted, p2 = o2.xAxis[0].minRange, c2 = o2.xAxis[0].options.maxRange, x2 = this.scrollButtonSize, m2, b2, v2, M2 = this.scrollbarHeight, A2, C2;
          if (this.hasDragged && !f(i3)) return;
          if (this.isDirty && this.renderElements(), t3 = g(t3 - a2 / 2), e3 = g(e3 + a2 / 2), !S(t3) || !S(e3)) {
            if (!h2) return;
            i3 = 0, s2 = k(r2.width, n2.width);
          }
          this.left = k(r2.left, o2.plotLeft + x2 + (d2 ? o2.plotWidth : 0));
          let D2 = this.size = A2 = k(r2.len, (d2 ? o2.plotHeight : o2.plotWidth) - 2 * x2);
          m2 = d2 ? M2 : A2 + 2 * x2, i3 = k(i3, r2.toPixels(t3, true)), s2 = k(s2, r2.toPixels(e3, true)), S(i3) && Math.abs(i3) !== 1 / 0 || (i3 = 0, s2 = m2);
          let w2 = r2.toValue(i3, true), O2 = r2.toValue(s2, true), E = Math.abs(g(O2 - w2));
          E < p2 ? this.grabbedLeft ? i3 = r2.toPixels(O2 - p2 - a2, true) : this.grabbedRight && (s2 = r2.toPixels(w2 + p2 + a2, true)) : f(c2) && g(E - a2) > c2 && (this.grabbedLeft ? i3 = r2.toPixels(O2 - c2 - a2, true) : this.grabbedRight && (s2 = r2.toPixels(w2 + c2 + a2, true))), this.zoomedMax = u(Math.max(i3, s2), 0, D2), this.zoomedMin = u(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i3, s2), 0, D2), this.range = this.zoomedMax - this.zoomedMin, D2 = Math.round(this.zoomedMax);
          let B = Math.round(this.zoomedMin);
          l2 && (this.navigatorGroup.attr({ visibility: "inherit" }), C2 = h2 && !this.hasDragged ? "animate" : "attr", this.drawMasks(B, D2, d2, C2), this.drawOutline(B, D2, d2, C2), this.navigatorOptions.handles.enabled && (this.drawHandle(B, 0, d2, C2), this.drawHandle(D2, 1, d2, C2))), this.scrollbar && (d2 ? (v2 = this.top - x2, b2 = this.left - M2 + (l2 || !n2.opposite ? 0 : (n2.titleOffset || 0) + n2.axisTitleMargin), M2 = A2 + 2 * x2) : (v2 = this.top + (l2 ? this.height : -M2), b2 = this.left - x2), this.scrollbar.position(b2, v2, m2, M2), this.scrollbar.setRange(this.zoomedMin / (A2 || 1), this.zoomedMax / (A2 || 1))), this.rendered = true, this.isDirty = false, y(this, "afterRender");
        }
        addMouseEvents() {
          let t3 = this, e3 = t3.chart, i3 = e3.container, s2 = [], o2, r2;
          t3.mouseMoveHandler = o2 = function(e4) {
            t3.onMouseMove(e4);
          }, t3.mouseUpHandler = r2 = function(e4) {
            t3.onMouseUp(e4);
          }, (s2 = t3.getPartsEvents("mousedown")).push(c(e3.renderTo, "mousemove", o2), c(i3.ownerDocument, "mouseup", r2), c(e3.renderTo, "touchmove", o2), c(i3.ownerDocument, "touchend", r2)), s2.concat(t3.getPartsEvents("touchstart")), t3.eventsToUnbind = s2, t3.series && t3.series[0] && s2.push(c(t3.series[0].xAxis, "foundExtremes", function() {
            e3.navigator.modifyNavigatorAxisExtremes();
          }));
        }
        getPartsEvents(t3) {
          let e3 = this, i3 = [];
          return ["shades", "handles"].forEach(function(s2) {
            e3[s2].forEach(function(o2, r2) {
              i3.push(c(o2.element, t3, function(t4) {
                e3[s2 + "Mousedown"](t4, r2);
              }));
            });
          }), i3;
        }
        shadesMousedown(t3, e3) {
          var _a;
          t3 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(t3)) || t3;
          let i3 = this.chart, s2 = this.xAxis, o2 = this.zoomedMin, r2 = this.size, a2 = this.range, n2 = this.left, l2 = t3.chartX, h2, d2, p2, c2;
          i3.inverted && (l2 = t3.chartY, n2 = this.top), 1 === e3 ? (this.grabbedCenter = l2, this.fixedWidth = a2, this.dragOffset = l2 - o2) : (c2 = l2 - n2 - a2 / 2, 0 === e3 ? c2 = Math.max(0, c2) : 2 === e3 && c2 + a2 >= r2 && (c2 = r2 - a2, this.reversedExtremes ? (c2 -= a2, d2 = this.getUnionExtremes().dataMin) : h2 = this.getUnionExtremes().dataMax), c2 !== o2 && (this.fixedWidth = a2, f((p2 = s2.navigatorAxis.toFixedRange(c2, c2 + a2, d2, h2)).min) && y(this, "setRange", { min: Math.min(p2.min, p2.max), max: Math.max(p2.min, p2.max), redraw: true, eventArguments: { trigger: "navigator" } })));
        }
        handlesMousedown(t3, e3) {
          var _a;
          t3 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(t3)) || t3;
          let i3 = this.chart, s2 = i3.xAxis[0], o2 = this.reversedExtremes;
          0 === e3 ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = o2 ? s2.min : s2.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = o2 ? s2.max : s2.min), i3.setFixedRange(void 0);
        }
        onMouseMove(t3) {
          var _a;
          let e3 = this, i3 = e3.chart, s2 = e3.navigatorSize, o2 = e3.range, r2 = e3.dragOffset, a2 = i3.inverted, n2 = e3.left, l2;
          (!t3.touches || 0 !== t3.touches[0].pageX) && (l2 = (t3 = ((_a = i3.pointer) == null ? void 0 : _a.normalize(t3)) || t3).chartX, a2 && (n2 = e3.top, l2 = t3.chartY), e3.grabbedLeft ? (e3.hasDragged = true, e3.render(0, 0, l2 - n2, e3.otherHandlePos)) : e3.grabbedRight ? (e3.hasDragged = true, e3.render(0, 0, e3.otherHandlePos, l2 - n2)) : e3.grabbedCenter && (e3.hasDragged = true, l2 < r2 ? l2 = r2 : l2 > s2 + r2 - o2 && (l2 = s2 + r2 - o2), e3.render(0, 0, l2 - r2, l2 - r2 + o2)), e3.hasDragged && e3.scrollbar && k(e3.scrollbar.options.liveRedraw, !d && !this.chart.boosted) && (t3.DOMType = t3.type, setTimeout(function() {
            e3.onMouseUp(t3);
          }, 0)));
        }
        onMouseUp(t3) {
          let e3, i3, s2, o2, r2, a2;
          let n2 = this.chart, l2 = this.xAxis, h2 = this.scrollbar, d2 = t3.DOMEvent || t3, p2 = n2.inverted, c2 = this.rendered && !this.hasDragged ? "animate" : "attr";
          (this.hasDragged && (!h2 || !h2.hasDragged) || "scrollbar" === t3.trigger) && (s2 = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? o2 = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r2 = this.fixedExtreme), this.zoomedMax === this.size && (r2 = this.reversedExtremes ? s2.dataMin : s2.dataMax), 0 === this.zoomedMin && (o2 = this.reversedExtremes ? s2.dataMax : s2.dataMin), f((a2 = l2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, o2, r2)).min) && y(this, "setRange", { min: Math.min(a2.min, a2.max), max: Math.max(a2.min, a2.max), redraw: true, animation: !this.hasDragged && null, eventArguments: { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: d2 } })), "mousemove" !== t3.DOMType && "touchmove" !== t3.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && S(this.zoomedMin) && S(this.zoomedMax) && (i3 = Math.round(this.zoomedMin), e3 = Math.round(this.zoomedMax), this.shades && this.drawMasks(i3, e3, p2, c2), this.outline && this.drawOutline(i3, e3, p2, c2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i3, 0, p2, c2), this.drawHandle(e3, 1, p2, c2)));
        }
        removeEvents() {
          this.eventsToUnbind && (this.eventsToUnbind.forEach(function(t3) {
            t3();
          }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
        }
        removeBaseSeriesEvents() {
          let t3 = this.baseSeries || [];
          this.navigatorEnabled && t3[0] && (false !== this.navigatorOptions.adaptToUpdatedData && t3.forEach(function(t4) {
            C(t4, "updatedData", this.updatedDataHandler);
          }, this), t3[0].xAxis && C(t3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
        }
        getXAxisOffsets() {
          return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
        }
        init(e3) {
          var _a;
          let i3 = e3.options, s2 = i3.navigator || {}, r2 = s2.enabled, n2 = i3.scrollbar || {}, l2 = n2.enabled, h2 = r2 && s2.height || 0, d2 = l2 && n2.height || 0, p2 = n2.buttonsEnabled && d2 || 0;
          this.handles = [], this.shades = [], this.chart = e3, this.setBaseSeries(), this.height = h2, this.scrollbarHeight = d2, this.scrollButtonSize = p2, this.scrollbarEnabled = l2, this.navigatorEnabled = r2, this.navigatorOptions = s2, this.scrollbarOptions = n2, this.setOpposite();
          let u2 = this, g2 = u2.baseSeries, f2 = e3.xAxis.length, x2 = e3.yAxis.length, m2 = g2 && g2[0] && g2[0].xAxis || e3.xAxis[0] || { options: {} };
          if (e3.isDirtyBox = true, u2.navigatorEnabled) {
            let i4 = this.getXAxisOffsets();
            u2.xAxis = new t2(e3, A({ breaks: m2.options.breaks, ordinal: m2.options.ordinal, overscroll: m2.options.overscroll }, s2.xAxis, { type: "datetime", yAxis: (_a = s2.yAxis) == null ? void 0 : _a.id, index: f2, isInternal: true, offset: 0, keepOrdinalPadding: true, startOnTick: false, endOnTick: false, minPadding: m2.options.ordinal ? 0 : m2.options.minPadding, maxPadding: m2.options.ordinal ? 0 : m2.options.maxPadding, zoomEnabled: false }, e3.inverted ? { offsets: i4, width: h2 } : { offsets: i4, height: h2 }), "xAxis"), u2.yAxis = new t2(e3, A(s2.yAxis, { alignTicks: false, offset: 0, index: x2, isInternal: true, reversed: k(s2.yAxis && s2.yAxis.reversed, e3.yAxis[0] && e3.yAxis[0].reversed, false), zoomEnabled: false }, e3.inverted ? { width: h2 } : { height: h2 }), "yAxis"), g2 || s2.series.data ? u2.updateNavigatorSeries(false) : 0 === e3.series.length && (u2.unbindRedraw = c(e3, "beforeRedraw", function() {
              e3.series.length > 0 && !u2.series && (u2.setBaseSeries(), u2.unbindRedraw());
            })), u2.reversedExtremes = e3.inverted && !u2.xAxis.reversed || !e3.inverted && u2.xAxis.reversed, u2.renderElements(), u2.addMouseEvents();
          } else u2.xAxis = { chart: e3, navigatorAxis: { fake: true }, translate: function(t3, i4) {
            let s3 = e3.xAxis[0], o2 = s3.getExtremes(), r3 = s3.len - 2 * p2, a2 = w("min", s3.options.min, o2.dataMin), n3 = w("max", s3.options.max, o2.dataMax) - a2;
            return i4 ? t3 * n3 / r3 + a2 : r3 * (t3 - a2) / n3;
          }, toPixels: function(t3) {
            return this.translate(t3);
          }, toValue: function(t3) {
            return this.translate(t3, true);
          } }, u2.xAxis.navigatorAxis.axis = u2.xAxis, u2.xAxis.navigatorAxis.toFixedRange = o.prototype.toFixedRange.bind(u2.xAxis.navigatorAxis);
          if (e3.options.scrollbar.enabled) {
            let t3 = A(e3.options.scrollbar, { vertical: e3.inverted });
            !S(t3.margin) && u2.navigatorEnabled && (t3.margin = e3.inverted ? -3 : 3), e3.scrollbar = u2.scrollbar = new a(e3.renderer, t3, e3), c(u2.scrollbar, "changed", function(t4) {
              let e4 = u2.size, i4 = e4 * this.to, s3 = e4 * this.from;
              u2.hasDragged = u2.scrollbar.hasDragged, u2.render(0, 0, s3, i4), this.shouldUpdateExtremes(t4.DOMType) && setTimeout(function() {
                u2.onMouseUp(t4);
              });
            });
          }
          u2.addBaseSeriesEvents(), u2.addChartEvents();
        }
        setOpposite() {
          let t3 = this.navigatorOptions, e3 = this.navigatorEnabled, i3 = this.chart;
          this.opposite = k(t3.opposite, !!(!e3 && i3.inverted));
        }
        getUnionExtremes(t3) {
          let e3;
          let i3 = this.chart.xAxis[0], s2 = this.xAxis, o2 = s2.options, r2 = i3.options;
          return t3 && null === i3.dataMin || (e3 = { dataMin: k(o2 && o2.min, w("min", r2.min, i3.dataMin, s2.dataMin, s2.min)), dataMax: k(o2 && o2.max, w("max", r2.max, i3.dataMax, s2.dataMax, s2.max)) }), e3;
        }
        setBaseSeries(t3, e3) {
          let i3 = this.chart, s2 = this.baseSeries = [];
          t3 = t3 || i3.options && i3.options.navigator.baseSeries || (i3.series.length ? v(i3.series, (t4) => !t4.options.isInternal).index : 0), (i3.series || []).forEach((e4, i4) => {
            !e4.options.isInternal && (e4.options.showInNavigator || (i4 === t3 || e4.options.id === t3) && false !== e4.options.showInNavigator) && s2.push(e4);
          }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, e3);
        }
        updateNavigatorSeries(t3, e3) {
          var _a, _b;
          let i3 = this, s2 = i3.chart, o2 = i3.baseSeries, r2 = { enableMouseTracking: false, index: null, linkedTo: null, group: "nav", padXAxis: false, xAxis: (_a = this.navigatorOptions.xAxis) == null ? void 0 : _a.id, yAxis: (_b = this.navigatorOptions.yAxis) == null ? void 0 : _b.id, showInLegend: false, stacking: void 0, isInternal: true, states: { inactive: { opacity: 1 } } }, a2 = i3.series = (i3.series || []).filter((t4) => {
            let e4 = t4.baseSeries;
            return !(0 > o2.indexOf(e4)) || (e4 && (C(e4, "updatedData", i3.updatedDataHandler), delete e4.navigatorSeries), t4.chart && t4.destroy(), false);
          }), n2, l2, d2 = i3.navigatorOptions.series, p2;
          o2 && o2.length && o2.forEach((t4) => {
            let c2 = t4.navigatorSeries, u2 = b({ color: t4.color, visible: t4.visible }, M(d2) ? h.navigator.series : d2);
            if (c2 && false === i3.navigatorOptions.adaptToUpdatedData) return;
            r2.name = "Navigator " + o2.length, p2 = (n2 = t4.options || {}).navigatorOptions || {}, u2.dataLabels = D(u2.dataLabels), (l2 = A(n2, r2, u2, p2)).pointRange = k(u2.pointRange, p2.pointRange, h.plotOptions[l2.type || "line"].pointRange);
            let g2 = p2.data || u2.data;
            i3.hasNavigatorData = i3.hasNavigatorData || !!g2, l2.data = g2 || n2.data && n2.data.slice(0), c2 && c2.options ? c2.update(l2, e3) : (t4.navigatorSeries = s2.initSeries(l2), s2.setSortedData(), t4.navigatorSeries.baseSeries = t4, a2.push(t4.navigatorSeries));
          }), (d2.data && !(o2 && o2.length) || M(d2)) && (i3.hasNavigatorData = false, (d2 = D(d2)).forEach((t4, e4) => {
            r2.name = "Navigator " + (a2.length + 1), (l2 = A(h.navigator.series, { color: s2.series[e4] && !s2.series[e4].options.isInternal && s2.series[e4].color || s2.options.colors[e4] || s2.options.colors[0] }, r2, t4)).data = t4.data, l2.data && (i3.hasNavigatorData = true, a2.push(s2.initSeries(l2)));
          })), t3 && this.addBaseSeriesEvents();
        }
        addBaseSeriesEvents() {
          let t3 = this, e3 = t3.baseSeries || [];
          e3[0] && e3[0].xAxis && e3[0].eventsToUnbind.push(c(e3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), e3.forEach((i3) => {
            i3.eventsToUnbind.push(c(i3, "show", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
            })), i3.eventsToUnbind.push(c(i3, "hide", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
            })), false !== this.navigatorOptions.adaptToUpdatedData && i3.xAxis && i3.eventsToUnbind.push(c(i3, "updatedData", this.updatedDataHandler)), i3.eventsToUnbind.push(c(i3, "remove", function() {
              e3 && m(e3, i3), this.navigatorSeries && (m(t3.series, this.navigatorSeries), f(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
            }));
          });
        }
        getBaseSeriesMin(t3) {
          return this.baseSeries.reduce(function(t4, e3) {
            return Math.min(t4, e3.xData && e3.xData.length ? e3.xData[0] : t4);
          }, t3);
        }
        modifyNavigatorAxisExtremes() {
          let t3 = this.xAxis;
          if (void 0 !== t3.getExtremes) {
            let e3 = this.getUnionExtremes(true);
            e3 && (e3.dataMin !== t3.min || e3.dataMax !== t3.max) && (t3.min = e3.dataMin, t3.max = e3.dataMax);
          }
        }
        modifyBaseAxisExtremes() {
          var _a;
          let t3, e3;
          let i3 = this.chart.navigator, s2 = this.getExtremes(), o2 = s2.min, r2 = s2.max, a2 = s2.dataMin, n2 = s2.dataMax, l2 = r2 - o2, h2 = i3.stickToMin, d2 = i3.stickToMax, p2 = k((_a = this.ordinal) == null ? void 0 : _a.convertOverscroll(this.options.overscroll), 0), c2 = i3.series && i3.series[0], u2 = !!this.setExtremes;
          !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (h2 && (t3 = (e3 = a2) + l2), d2 && (t3 = n2 + p2, h2 || (e3 = Math.max(a2, t3 - l2, i3.getBaseSeriesMin(c2 && c2.xData ? c2.xData[0] : -Number.MAX_VALUE)))), u2 && (h2 || d2) && S(e3) && (this.min = this.userMin = e3, this.max = this.userMax = t3)), i3.stickToMin = i3.stickToMax = null;
        }
        updatedDataHandler() {
          let t3 = this.chart.navigator, e3 = this.navigatorSeries, i3 = t3.reversedExtremes ? 0 === Math.round(t3.zoomedMin) : Math.round(t3.zoomedMax) >= Math.round(t3.size);
          t3.stickToMax = k(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i3), t3.stickToMin = t3.shouldStickToMin(this, t3), e3 && !t3.hasNavigatorData && (e3.options.pointStart = this.xData[0], e3.setData(this.options.data, false, null, false));
        }
        shouldStickToMin(t3, e3) {
          let i3 = e3.getBaseSeriesMin(t3.xData[0]), s2 = t3.xAxis, o2 = s2.max, r2 = s2.min, a2 = s2.options.range;
          return !!(S(o2) && S(r2)) && (a2 && o2 - i3 > 0 ? o2 - i3 < a2 : r2 <= i3);
        }
        addChartEvents() {
          this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(c(this.chart, "redraw", function() {
            let t3 = this.navigator, e3 = t3 && (t3.baseSeries && t3.baseSeries[0] && t3.baseSeries[0].xAxis || this.xAxis[0]);
            e3 && t3.render(e3.min, e3.max);
          }), c(this.chart, "getMargins", function() {
            let t3 = this.navigator, e3 = t3.opposite ? "plotTop" : "marginBottom";
            this.inverted && (e3 = t3.opposite ? "marginRight" : "plotLeft"), this[e3] = (this[e3] || 0) + (t3.navigatorEnabled || !this.inverted ? t3.height + t3.scrollbarHeight : 0) + t3.navigatorOptions.margin;
          }), c(O, "setRange", function(t3) {
            this.chart.xAxis[0].setExtremes(t3.min, t3.max, t3.redraw, t3.animation, t3.eventArguments);
          }));
        }
        destroy() {
          this.removeEvents(), this.xAxis && (m(this.chart.xAxis, this.xAxis), m(this.chart.axes, this.xAxis)), this.yAxis && (m(this.chart.yAxis, this.yAxis), m(this.chart.axes, this.yAxis)), (this.series || []).forEach((t3) => {
            t3.destroy && t3.destroy();
          }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((t3) => {
            this[t3] && this[t3].destroy && this[t3].destroy(), this[t3] = null;
          }), [this.handles].forEach((t3) => {
            x(t3);
          }), this.navigatorEnabled = false;
        }
      }
      return O;
    }), i(e, "Core/Axis/OrdinalAxis.js", [e["Core/Axis/Axis.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      var o;
      let { addEvent: r, correctFloat: a, css: n, defined: l, error: h, isNumber: d, pick: p, timeUnits: c, isString: u } = s;
      return function(t3) {
        function s2(t4, e3, i3, o3, r2 = [], a2 = 0, n2) {
          let d2 = {}, p2 = this.options.tickPixelInterval, u2 = this.chart.time, g2 = [], f2, x2, m2, b2, v2, y2 = 0, M2 = [], S2 = -Number.MAX_VALUE;
          if (!this.options.ordinal && !this.options.breaks || !r2 || r2.length < 3 || void 0 === e3) return u2.getTimeTicks.apply(u2, arguments);
          let A2 = r2.length;
          for (f2 = 0; f2 < A2; f2++) {
            if (v2 = f2 && r2[f2 - 1] > i3, r2[f2] < e3 && (y2 = f2), f2 === A2 - 1 || r2[f2 + 1] - r2[f2] > 5 * a2 || v2) {
              if (r2[f2] > S2) {
                for (x2 = u2.getTimeTicks(t4, r2[y2], r2[f2], o3); x2.length && x2[0] <= S2; ) x2.shift();
                x2.length && (S2 = x2[x2.length - 1]), g2.push(M2.length), M2 = M2.concat(x2);
              }
              y2 = f2 + 1;
            }
            if (v2) break;
          }
          if (x2) {
            if (b2 = x2.info, n2 && b2.unitRange <= c.hour) {
              for (y2 = 1, f2 = M2.length - 1; y2 < f2; y2++) u2.dateFormat("%d", M2[y2]) !== u2.dateFormat("%d", M2[y2 - 1]) && (d2[M2[y2]] = "day", m2 = true);
              m2 && (d2[M2[0]] = "day"), b2.higherRanks = d2;
            }
            b2.segmentStarts = g2, M2.info = b2;
          } else h(12, false, this.chart);
          if (n2 && l(p2)) {
            let t5 = M2.length, e4 = [], s3 = [], o4, r3, a3, n3, l2, h2 = t5;
            for (; h2--; ) r3 = this.translate(M2[h2]), a3 && (s3[h2] = a3 - r3), e4[h2] = a3 = r3;
            for (s3.sort((t6, e5) => t6 - e5), (n3 = s3[Math.floor(s3.length / 2)]) < 0.6 * p2 && (n3 = null), h2 = M2[t5 - 1] > i3 ? t5 - 1 : t5, a3 = void 0; h2--; ) l2 = Math.abs(a3 - (r3 = e4[h2])), a3 && l2 < 0.8 * p2 && (null === n3 || l2 < 0.8 * n3) ? (d2[M2[h2]] && !d2[M2[h2 + 1]] ? (o4 = h2 + 1, a3 = r3) : o4 = h2, M2.splice(o4, 1)) : a3 = r3;
          }
          return M2;
        }
        function o2(t4) {
          let e3 = this.ordinal.positions;
          if (!e3) return t4;
          let i3 = e3.length - 1, s3;
          return (t4 < 0 ? t4 = e3[0] : t4 > i3 ? t4 = e3[i3] : (i3 = Math.floor(t4), s3 = t4 - i3), void 0 !== s3 && void 0 !== e3[i3]) ? e3[i3] + (s3 ? s3 * (e3[i3 + 1] - e3[i3]) : 0) : t4;
        }
        function g(t4) {
          let e3 = this.ordinal, i3 = this.old ? this.old.min : this.min, s3 = this.old ? this.old.transA : this.transA, o3 = e3.getExtendedPositions();
          if (o3 && o3.length) {
            let r2 = a((t4 - i3) * s3 + this.minPixelPadding), n2 = a(e3.getIndexOfPoint(r2, o3)), l2 = a(n2 % 1);
            if (n2 >= 0 && n2 <= o3.length - 1) {
              let t5 = o3[Math.floor(n2)], e4 = o3[Math.ceil(n2)];
              return o3[Math.floor(n2)] + l2 * (e4 - t5);
            }
          }
          return t4;
        }
        function f(e3, i3) {
          let s3 = t3.Additions.findIndexOf(e3, i3, true);
          if (e3[s3] === i3) return s3;
          let o3 = (i3 - e3[s3]) / (e3[s3 + 1] - e3[s3]);
          return s3 + o3;
        }
        function x() {
          this.ordinal || (this.ordinal = new t3.Additions(this));
        }
        function m() {
          let { eventArgs: t4, options: e3 } = this;
          if (this.isXAxis && l(e3.overscroll) && 0 !== e3.overscroll && d(this.max) && d(this.min) && (this.options.ordinal && !this.ordinal.originalOrdinalRange && this.ordinal.getExtendedPositions(false), this.max === this.dataMax && ((t4 == null ? void 0 : t4.trigger) !== "pan" || this.isInternal) && (t4 == null ? void 0 : t4.trigger) !== "navigator")) {
            let i3 = this.ordinal.convertOverscroll(e3.overscroll);
            this.max += i3, !this.isInternal && l(this.userMin) && (t4 == null ? void 0 : t4.trigger) !== "mousewheel" && (this.min += i3);
          }
        }
        function b() {
          this.horiz && !this.isDirty && (this.isDirty = this.isOrdinal && this.chart.navigator && !this.chart.navigator.adaptToUpdatedData);
        }
        function v() {
          this.ordinal && (this.ordinal.beforeSetTickPositions(), this.tickInterval = this.ordinal.postProcessTickInterval(this.tickInterval));
        }
        function y(t4) {
          let e3 = this.xAxis[0], i3 = e3.ordinal.convertOverscroll(e3.options.overscroll), s3 = t4.originalEvent.chartX, o3 = this.options.chart.panning, r2 = false;
          if (o3 && "y" !== o3.type && e3.options.ordinal && e3.series.length && (!t4.touches || t4.touches.length <= 1)) {
            let t5, o4;
            let a2 = this.mouseDownX, l2 = e3.getExtremes(), h2 = l2.dataMin, d2 = l2.dataMax, p2 = l2.min, c2 = l2.max, u2 = this.hoverPoints, g2 = e3.closestPointRange || e3.ordinal && e3.ordinal.overscrollPointsRange, f2 = Math.round((a2 - s3) / (e3.translationSlope * (e3.ordinal.slope || g2))), x2 = e3.ordinal.getExtendedPositions(), m2 = { ordinal: { positions: x2, extendedOrdinalPositions: x2 } }, b2 = e3.index2val, v2 = e3.val2lin;
            if (p2 <= h2 && f2 < 0 || c2 + i3 >= d2 && f2 > 0) return;
            m2.ordinal.positions ? Math.abs(f2) > 1 && (u2 && u2.forEach(function(t6) {
              t6.setState();
            }), d2 > (o4 = m2.ordinal.positions)[o4.length - 1] && o4.push(d2), this.setFixedRange(c2 - p2), (t5 = e3.navigatorAxis.toFixedRange(void 0, void 0, b2.apply(m2, [v2.apply(m2, [p2, true]) + f2]), b2.apply(m2, [v2.apply(m2, [c2, true]) + f2]))).min >= Math.min(l2.dataMin, p2) && t5.max <= Math.max(d2, c2) + i3 && e3.setExtremes(t5.min, t5.max, true, false, { trigger: "pan" }), this.mouseDownX = s3, n(this.container, { cursor: "move" })) : r2 = true;
          } else r2 = true;
          r2 || o3 && /y/.test(o3.type) ? i3 && (e3.max = e3.dataMax + i3) : t4.preventDefault();
        }
        function M() {
          let t4 = this.xAxis;
          t4 && t4.options.ordinal && (delete t4.ordinal.index, delete t4.ordinal.originalOrdinalRange);
        }
        function S(t4, e3) {
          let i3;
          let s3 = this.ordinal, o3 = s3.positions, r2 = s3.slope, a2;
          if (!o3) return t4;
          let n2 = o3.length;
          if (o3[0] <= t4 && o3[n2 - 1] >= t4) i3 = f(o3, t4);
          else {
            if (!((a2 = s3.getExtendedPositions && s3.getExtendedPositions()) && a2.length)) return t4;
            let n3 = a2.length;
            r2 || (r2 = (a2[n3 - 1] - a2[0]) / n3);
            let l2 = f(a2, o3[0]);
            if (t4 >= a2[0] && t4 <= a2[n3 - 1]) i3 = f(a2, t4) - l2;
            else {
              if (!e3) return t4;
              i3 = t4 < a2[0] ? -l2 - (a2[0] - t4) / r2 : (t4 - a2[n3 - 1]) / r2 + n3 - l2;
            }
          }
          return e3 ? i3 : r2 * (i3 || 0) + s3.offset;
        }
        t3.compose = function(t4, e3, i3) {
          let a2 = t4.prototype;
          return a2.ordinal2lin || (a2.getTimeTicks = s2, a2.index2val = o2, a2.lin2val = g, a2.val2lin = S, a2.ordinal2lin = a2.val2lin, r(t4, "afterInit", x), r(t4, "foundExtremes", m), r(t4, "afterSetScale", b), r(t4, "initialAxisTranslation", v), r(i3, "pan", y), r(i3, "touchpan", y), r(e3, "updatedData", M)), t4;
        };
        class A {
          constructor(t4) {
            this.index = {}, this.axis = t4;
          }
          beforeSetTickPositions() {
            var _a;
            let t4 = this.axis, e3 = t4.ordinal, i3 = t4.getExtremes(), s3 = i3.min, o3 = i3.max, r2 = (_a = t4.brokenAxis) == null ? void 0 : _a.hasBreaks, a2 = t4.options.ordinal, n2, l2, h2, d2, c2, u2, g2, f2 = [], x2 = Number.MAX_VALUE, m2 = false, b2 = false, v2 = false;
            if (a2 || r2) {
              let i4 = 0;
              if (t4.series.forEach(function(t5, e4) {
                if (l2 = [], e4 > 0 && "highcharts-navigator-series" !== t5.options.id && t5.processedXData.length > 1 && (b2 = i4 !== t5.processedXData[1] - t5.processedXData[0]), i4 = t5.processedXData[1] - t5.processedXData[0], t5.boosted && (v2 = t5.boosted), t5.reserveSpace() && (false !== t5.takeOrdinalPosition || r2) && (n2 = (f2 = f2.concat(t5.processedXData)).length, f2.sort(function(t6, e5) {
                  return t6 - e5;
                }), x2 = Math.min(x2, p(t5.closestPointRange, x2)), n2)) {
                  for (e4 = 0; e4 < n2 - 1; ) f2[e4] !== f2[e4 + 1] && l2.push(f2[e4 + 1]), e4++;
                  l2[0] !== f2[0] && l2.unshift(f2[0]), f2 = l2;
                }
              }), t4.ordinal.originalOrdinalRange || (t4.ordinal.originalOrdinalRange = (f2.length - 1) * x2), b2 && v2 && (f2.pop(), f2.shift()), (n2 = f2.length) > 2) {
                for (h2 = f2[1] - f2[0], g2 = n2 - 1; g2-- && !m2; ) f2[g2 + 1] - f2[g2] !== h2 && (m2 = true);
                !t4.options.keepOrdinalPadding && (f2[0] - s3 > h2 || o3 - f2[f2.length - 1] > h2) && (m2 = true);
              } else t4.options.overscroll && (2 === n2 ? x2 = f2[1] - f2[0] : 1 === n2 ? (x2 = t4.ordinal.convertOverscroll(t4.options.overscroll), f2 = [f2[0], f2[0] + x2]) : x2 = e3.overscrollPointsRange);
              m2 || t4.forceOrdinal ? (t4.options.overscroll && (e3.overscrollPointsRange = x2, f2 = f2.concat(e3.getOverscrollPositions())), e3.positions = f2, d2 = t4.ordinal2lin(Math.max(s3, f2[0]), true), c2 = Math.max(t4.ordinal2lin(Math.min(o3, f2[f2.length - 1]), true), 1), e3.slope = u2 = (o3 - s3) / (c2 - d2), e3.offset = s3 - d2 * u2) : (e3.overscrollPointsRange = p(t4.closestPointRange, e3.overscrollPointsRange), e3.positions = t4.ordinal.slope = e3.offset = void 0);
            }
            t4.isOrdinal = a2 && m2, e3.groupIntervalFactor = null;
          }
          static findIndexOf(t4, e3, i3) {
            let s3 = 0, o3 = t4.length - 1, r2;
            for (; s3 < o3; ) t4[r2 = Math.ceil((s3 + o3) / 2)] <= e3 ? s3 = r2 : o3 = r2 - 1;
            return t4[s3] === e3 ? s3 : i3 ? s3 : -1;
          }
          getExtendedPositions(t4 = true) {
            var _a;
            let s3 = this, o3 = s3.axis, r2 = o3.constructor.prototype, a2 = o3.chart, n2 = (_a = o3.series[0]) == null ? void 0 : _a.currentDataGrouping, l2 = n2 ? n2.count + n2.unitName : "raw", h2 = t4 ? o3.ordinal.convertOverscroll(o3.options.overscroll) : 0, d2 = o3.getExtremes(), p2, c2, u2 = s3.index;
            return u2 || (u2 = s3.index = {}), u2[l2] || ((p2 = { series: [], chart: a2, forceOrdinal: false, getExtremes: function() {
              return { min: d2.dataMin, max: d2.dataMax + h2 };
            }, applyGrouping: r2.applyGrouping, getGroupPixelWidth: r2.getGroupPixelWidth, getTimeTicks: r2.getTimeTicks, options: { ordinal: true }, ordinal: { getGroupIntervalFactor: this.getGroupIntervalFactor }, ordinal2lin: r2.ordinal2lin, getIndexOfPoint: r2.getIndexOfPoint, val2lin: r2.val2lin }).ordinal.axis = p2, o3.series.forEach(function(o4) {
              var _a2, _b, _c;
              c2 = { xAxis: p2, xData: o4.xData.slice(), chart: a2, groupPixelWidth: o4.groupPixelWidth, destroyGroupedData: e2.noop, getProcessedData: i2.prototype.getProcessedData, applyGrouping: i2.prototype.applyGrouping, reserveSpace: i2.prototype.reserveSpace, visible: o4.visible }, t4 && (c2.xData = c2.xData.concat(s3.getOverscrollPositions())), c2.options = { dataGrouping: n2 ? { firstAnchor: (_a2 = o4.options.dataGrouping) == null ? void 0 : _a2.firstAnchor, anchor: (_b = o4.options.dataGrouping) == null ? void 0 : _b.anchor, lastAnchor: (_c = o4.options.dataGrouping) == null ? void 0 : _c.firstAnchor, enabled: true, forced: true, approximation: "open", units: [[n2.unitName, [n2.count]]] } : { enabled: false } }, p2.series.push(c2), o4.processData.apply(c2);
            }), p2.applyGrouping({ hasExtremesChanged: true }), (c2 == null ? void 0 : c2.closestPointRange) !== (c2 == null ? void 0 : c2.basePointRange) && c2.currentDataGrouping && (p2.forceOrdinal = true), o3.ordinal.beforeSetTickPositions.apply({ axis: p2 }), !o3.ordinal.originalOrdinalRange && p2.ordinal.originalOrdinalRange && (o3.ordinal.originalOrdinalRange = p2.ordinal.originalOrdinalRange), u2[l2] = p2.ordinal.positions), u2[l2];
          }
          getGroupIntervalFactor(t4, e3, i3) {
            let s3 = i3.processedXData, o3 = s3.length, r2 = [], a2, n2, l2 = this.groupIntervalFactor;
            if (!l2) {
              for (n2 = 0; n2 < o3 - 1; n2++) r2[n2] = s3[n2 + 1] - s3[n2];
              r2.sort(function(t5, e4) {
                return t5 - e4;
              }), a2 = r2[Math.floor(o3 / 2)], t4 = Math.max(t4, s3[0]), e3 = Math.min(e3, s3[o3 - 1]), this.groupIntervalFactor = l2 = o3 * a2 / (e3 - t4);
            }
            return l2;
          }
          getIndexOfPoint(t4, e3) {
            let i3;
            let s3 = this.axis, o3 = 0, r2 = function(t5) {
              let { min: e4, max: i4 } = s3;
              return !!(l(e4) && l(i4)) && t5.points.some((t6) => t6.x >= e4 && t6.x <= i4);
            };
            s3.series.forEach((t5) => {
              var _a;
              let e4 = (_a = t5.points) == null ? void 0 : _a[0];
              l(e4 == null ? void 0 : e4.plotX) && (e4.plotX < i3 || !l(i3)) && r2(t5) && (i3 = e4.plotX, o3 = e4.x);
            }), i3 ?? (i3 = s3.minPixelPadding);
            let n2 = s3.translationSlope * (this.slope || s3.closestPointRange || this.overscrollPointsRange), h2 = a((t4 - i3) / n2);
            return A.findIndexOf(e3, o3, true) + h2;
          }
          getOverscrollPositions() {
            let t4 = this.axis, e3 = this.convertOverscroll(t4.options.overscroll), i3 = this.overscrollPointsRange, s3 = [], o3 = t4.dataMax;
            if (l(i3)) for (; o3 <= t4.dataMax + e3; ) s3.push(o3 += i3);
            return s3;
          }
          postProcessTickInterval(t4) {
            let e3 = this.axis, i3 = this.slope;
            return i3 ? e3.options.breaks ? e3.closestPointRange || t4 : t4 / (i3 / e3.closestPointRange) : t4;
          }
          convertOverscroll(t4 = 0) {
            let e3 = this, i3 = e3.axis, s3 = function(t5) {
              return p(e3.originalOrdinalRange, l(i3.dataMax) && l(i3.dataMin) ? i3.dataMax - i3.dataMin : 0) * t5;
            };
            if (u(t4)) {
              let e4 = parseInt(t4, 10);
              if (/%$/.test(t4)) return s3(e4 / 100);
              if (/px/.test(t4)) {
                let t5 = Math.min(e4, 0.9 * i3.len) / i3.len;
                return s3(t5 / (1 - t5));
              }
              return 0;
            }
            return t4;
          }
        }
        t3.Additions = A;
      }(o || (o = {})), o;
    }), i(e, "Stock/RangeSelector/RangeSelectorDefaults.js", [], function() {
      return { lang: { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "", rangeSelectorTo: "→" }, rangeSelector: { allButtonsEnabled: false, buttons: void 0, buttonSpacing: 5, dropdown: "responsive", enabled: void 0, verticalAlign: "top", buttonTheme: { width: 28, height: 18, padding: 2, zIndex: 7 }, floating: false, x: 0, y: 0, height: void 0, inputBoxBorderColor: "none", inputBoxHeight: 17, inputBoxWidth: void 0, inputDateFormat: "%e %b %Y", inputDateParser: void 0, inputEditDateFormat: "%Y-%m-%d", inputEnabled: true, inputPosition: { align: "right", x: 0, y: 0 }, inputSpacing: 5, selected: void 0, buttonPosition: { align: "left", x: 0, y: 0 }, inputStyle: { color: "#334eff", cursor: "pointer", fontSize: "0.8em" }, labelStyle: { color: "#666666", fontSize: "0.8em" } } };
    }), i(e, "Stock/RangeSelector/RangeSelectorComposition.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Stock/RangeSelector/RangeSelectorDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let o;
      let { defaultOptions: r } = t2, { composed: a } = e2, { addEvent: n, defined: l, extend: h, isNumber: d, merge: p, pick: c, pushUnique: u } = s, g = [];
      function f() {
        let t3, e3;
        let i3 = this.range, s2 = i3.type, o2 = this.max, r2 = this.chart.time, a2 = function(t4, e4) {
          let i4 = "year" === s2 ? "FullYear" : "Month", o3 = new r2.Date(t4), a3 = r2.get(i4, o3);
          return r2.set(i4, o3, a3 + e4), a3 === r2.get(i4, o3) && r2.set("Date", o3, 0), o3.getTime() - t4;
        };
        d(i3) ? (t3 = o2 - i3, e3 = i3) : i3 && (t3 = o2 + a2(o2, -(i3.count || 1)), this.chart && this.chart.setFixedRange(o2 - t3));
        let n2 = c(this.dataMin, Number.MIN_VALUE);
        return d(t3) || (t3 = n2), t3 <= n2 && (t3 = n2, void 0 === e3 && (e3 = a2(t3, i3.count)), this.newMax = Math.min(t3 + e3, c(this.dataMax, Number.MAX_VALUE))), d(o2) ? !d(i3) && i3 && i3._offsetMin && (t3 += i3._offsetMin) : t3 = void 0, t3;
      }
      function x() {
        this.options.rangeSelector && this.options.rangeSelector.enabled && (this.rangeSelector = new o(this));
      }
      function m() {
        let t3 = this.rangeSelector;
        if (t3) {
          d(t3.deferredYTDClick) && (t3.clickButton(t3.deferredYTDClick), delete t3.deferredYTDClick);
          let e3 = t3.options.verticalAlign;
          t3.options.floating || ("bottom" === e3 ? this.extraBottomMargin = true : "middle" === e3 || (this.extraTopMargin = true));
        }
      }
      function b() {
        let t3;
        let e3 = this.rangeSelector;
        if (!e3) return;
        let i3 = this.xAxis[0].getExtremes(), s2 = this.legend, o2 = e3 && e3.options.verticalAlign;
        d(i3.min) && e3.render(i3.min, i3.max), s2.display && "top" === o2 && o2 === s2.options.verticalAlign && (t3 = p(this.spacingBox), "vertical" === s2.options.layout ? t3.y = this.plotTop : t3.y += e3.getHeight(), s2.group.placed = false, s2.align(t3));
      }
      function v() {
        for (let t3 = 0, e3 = g.length; t3 < e3; ++t3) {
          let e4 = g[t3];
          if (e4[0] === this) {
            e4[1].forEach((t4) => t4()), g.splice(t3, 1);
            return;
          }
        }
      }
      function y() {
        let t3 = this.rangeSelector;
        if (t3) {
          let e3 = t3.getHeight();
          this.extraTopMargin && (this.plotTop += e3), this.extraBottomMargin && (this.marginBottom += e3);
        }
      }
      function M(t3) {
        let e3 = t3.options.rangeSelector, i3 = this.extraBottomMargin, s2 = this.extraTopMargin, r2 = this.rangeSelector;
        if (e3 && e3.enabled && !l(r2) && this.options.rangeSelector && (this.options.rangeSelector.enabled = true, this.rangeSelector = r2 = new o(this)), this.extraBottomMargin = false, this.extraTopMargin = false, r2) {
          let t4 = e3 && e3.verticalAlign || r2.options && r2.options.verticalAlign;
          r2.options.floating || ("bottom" === t4 ? this.extraBottomMargin = true : "middle" === t4 || (this.extraTopMargin = true)), (this.extraBottomMargin !== i3 || this.extraTopMargin !== s2) && (this.isDirtyBox = true);
        }
      }
      return { compose: function(t3, e3, s2) {
        if (o = s2, u(a, "RangeSelector")) {
          let s3 = e3.prototype;
          t3.prototype.minFromRange = f, n(e3, "afterGetContainer", x), n(e3, "beforeRender", m), n(e3, "destroy", v), n(e3, "getMargins", y), n(e3, "redraw", b), n(e3, "update", M), s3.callbacks.push(b), h(r, { rangeSelector: i2.rangeSelector }), h(r.lang, i2.lang);
        }
      } };
    }), i(e, "Stock/RangeSelector/RangeSelector.js", [e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Stock/RangeSelector/RangeSelectorComposition.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"], e["Core/Axis/OrdinalAxis.js"]], function(t2, e2, i2, s, o, r, a) {
      let { defaultOptions: n } = e2, { addEvent: l, createElement: h, css: d, defined: p, destroyObjectProperties: c, discardElement: u, extend: g, fireEvent: f, isNumber: x, merge: m, objectEach: b, pad: v, pick: y, pInt: M, splat: S } = r;
      class A {
        static compose(t3, e3) {
          s.compose(t3, e3, A);
        }
        constructor(t3) {
          this.buttonOptions = A.prototype.defaultButtons, this.initialButtonGroupWidth = 0, this.init(t3);
        }
        clickButton(e3, i3) {
          let s2 = this.chart, o2 = this.buttonOptions[e3], r2 = s2.xAxis[0], a2 = s2.scroller && s2.scroller.getUnionExtremes() || r2 || {}, n2 = o2.type, h2 = o2.dataGrouping, d2 = a2.dataMin, c2 = a2.dataMax, u2, g2 = r2 && Math.round(Math.min(r2.max, y(c2, r2.max))), m2, b2 = o2._range, v2, M2, A2, k = true;
          if (null !== d2 && null !== c2) {
            if (this.setSelected(e3), h2 && (this.forcedDataGrouping = true, t2.prototype.setDataGrouping.call(r2 || { chart: this.chart }, h2, false), this.frozenStates = o2.preserveDataGrouping), "month" === n2 || "year" === n2) r2 ? (M2 = { range: o2, max: g2, chart: s2, dataMin: d2, dataMax: c2 }, u2 = r2.minFromRange.call(M2), x(M2.newMax) && (g2 = M2.newMax), k = false) : b2 = o2;
            else if (b2) g2 = Math.min((u2 = Math.max(g2 - b2, d2)) + b2, c2), k = false;
            else if ("ytd" === n2) {
              if (r2) (void 0 === c2 || void 0 === d2) && (d2 = Number.MAX_VALUE, c2 = Number.MIN_VALUE, s2.series.forEach((t3) => {
                let e4 = t3.xData;
                e4 && (d2 = Math.min(e4[0], d2), c2 = Math.max(e4[e4.length - 1], c2));
              }), i3 = false), u2 = v2 = (A2 = this.getYTDExtremes(c2, d2, s2.time.useUTC)).min, g2 = A2.max;
              else {
                this.deferredYTDClick = e3;
                return;
              }
            } else "all" === n2 && r2 && (s2.navigator && s2.navigator.baseSeries[0] && (s2.navigator.baseSeries[0].xAxis.options.range = void 0), u2 = d2, g2 = c2);
            if (k && o2._offsetMin && p(u2) && (u2 += o2._offsetMin), o2._offsetMax && p(g2) && (g2 += o2._offsetMax), this.dropdown && (this.dropdown.selectedIndex = e3 + 1), r2) r2.setExtremes(u2, g2, y(i3, true), void 0, { trigger: "rangeSelectorButton", rangeSelectorButton: o2 }), s2.setFixedRange(o2._range);
            else {
              m2 = S(s2.options.xAxis)[0];
              let t3 = l(s2, "afterGetAxes", function() {
                let t4 = s2.xAxis[0];
                t4.range = t4.options.range = b2, t4.min = t4.options.min = v2;
              });
              l(s2, "load", function() {
                let e4 = s2.xAxis[0];
                s2.setFixedRange(o2._range), e4.options.range = m2.range, e4.options.min = m2.min, t3();
              });
            }
            f(this, "afterBtnClick");
          }
        }
        setSelected(t3) {
          this.selected = this.options.selected = t3;
        }
        init(t3) {
          let e3 = this, i3 = t3.options.rangeSelector, s2 = i3.buttons || e3.defaultButtons.slice(), o2 = i3.selected, r2 = function() {
            let t4 = e3.minInput, i4 = e3.maxInput;
            t4 && t4.blur && f(t4, "blur"), i4 && i4.blur && f(i4, "blur");
          };
          e3.chart = t3, e3.options = i3, e3.buttons = [], e3.buttonOptions = s2, this.eventsToUnbind = [], this.eventsToUnbind.push(l(t3.container, "mousedown", r2)), this.eventsToUnbind.push(l(t3, "resize", r2)), s2.forEach(e3.computeButtonRange), void 0 !== o2 && s2[o2] && this.clickButton(o2, false), this.eventsToUnbind.push(l(t3, "load", function() {
            t3.xAxis && t3.xAxis[0] && l(t3.xAxis[0], "setExtremes", function(i4) {
              x(this.max) && x(this.min) && this.max - this.min !== t3.fixedRange && "rangeSelectorButton" !== i4.trigger && "updatedData" !== i4.trigger && e3.forcedDataGrouping && !e3.frozenStates && this.setDataGrouping(false, false);
            });
          })), this.createElements();
        }
        updateButtonStates() {
          let t3 = this, e3 = this.chart, i3 = this.dropdown, s2 = this.dropdownLabel, o2 = e3.xAxis[0], r2 = Math.round(o2.max - o2.min), l2 = !o2.hasVisibleSeries, h2 = 24 * 36e5, p2 = e3.scroller && e3.scroller.getUnionExtremes() || o2, c2 = p2.dataMin, u2 = p2.dataMax, g2 = t3.getYTDExtremes(u2, c2, e3.time.useUTC), f2 = g2.min, m2 = g2.max, b2 = t3.selected, v2 = t3.options.allButtonsEnabled, y2 = Array(t3.buttonOptions.length).fill(0), M2 = x(b2), S2 = t3.buttons, A2 = false, k = null;
          t3.buttonOptions.forEach((e4, i4) => {
            var _a;
            let s3 = e4._range, n2 = e4.type, d2 = e4.count || 1, p3 = e4._offsetMax - e4._offsetMin, g3 = i4 === b2, x2 = s3 > u2 - c2, S3 = s3 < o2.minRange, C = false, D = s3 === r2;
            if (g3 && x2 && (A2 = true), o2.isOrdinal && ((_a = o2.ordinal) == null ? void 0 : _a.positions) && s3 && r2 < s3) {
              let t4 = o2.ordinal.positions, e5 = a.Additions.findIndexOf(t4, o2.min, true), i5 = Math.min(a.Additions.findIndexOf(t4, o2.max, true) + 1, t4.length - 1);
              t4[i5] - t4[e5] > s3 && (D = true);
            } else ("month" === n2 || "year" === n2) && r2 + 36e5 >= { month: 28, year: 365 }[n2] * h2 * d2 - p3 && r2 - 36e5 <= { month: 31, year: 366 }[n2] * h2 * d2 + p3 ? D = true : "ytd" === n2 ? (D = m2 - f2 + p3 === r2, C = !g3) : "all" === n2 && (D = o2.max - o2.min >= u2 - c2);
            let w = !v2 && !(A2 && "all" === n2) && (x2 || S3 || l2), O = A2 && "all" === n2 || !C && D || g3 && t3.frozenStates;
            w ? y2[i4] = 3 : O && (!M2 || i4 === b2) && (k = i4);
          }), null !== k ? (y2[k] = 2, t3.setSelected(k)) : (t3.setSelected(), s2 && (s2.setState(0), s2.attr({ text: (n.lang.rangeSelectorZoom || "") + " ▾" })));
          for (let e4 = 0; e4 < y2.length; e4++) {
            let o3 = y2[e4], r3 = S2[e4];
            if (r3.state !== o3 && (r3.setState(o3), i3)) {
              i3.options[e4 + 1].disabled = 3 === o3, 2 === o3 && (s2 && (s2.setState(2), s2.attr({ text: t3.buttonOptions[e4].text + " ▾" })), i3.selectedIndex = e4 + 1);
              let r4 = s2.getBBox();
              d(i3, { width: `${r4.width}px`, height: `${r4.height}px` });
            }
          }
        }
        computeButtonRange(t3) {
          let e3 = t3.type, i3 = t3.count || 1, s2 = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5 };
          s2[e3] ? t3._range = s2[e3] * i3 : ("month" === e3 || "year" === e3) && (t3._range = 24 * { month: 30, year: 365 }[e3] * 36e5 * i3), t3._offsetMin = y(t3.offsetMin, 0), t3._offsetMax = y(t3.offsetMax, 0), t3._range += t3._offsetMax - t3._offsetMin;
        }
        getInputValue(t3) {
          let e3 = "min" === t3 ? this.minInput : this.maxInput, i3 = this.chart.options.rangeSelector, s2 = this.chart.time;
          return e3 ? ("text" === e3.type && i3.inputDateParser || this.defaultInputDateParser)(e3.value, s2.useUTC, s2) : 0;
        }
        setInputValue(t3, e3) {
          let i3 = this.options, s2 = this.chart.time, o2 = "min" === t3 ? this.minInput : this.maxInput, r2 = "min" === t3 ? this.minDateBox : this.maxDateBox;
          if (o2) {
            let t4 = o2.getAttribute("data-hc-time"), a2 = p(t4) ? Number(t4) : void 0;
            if (p(e3)) {
              let t5 = a2;
              p(t5) && o2.setAttribute("data-hc-time-previous", t5), o2.setAttribute("data-hc-time", e3), a2 = e3;
            }
            o2.value = s2.dateFormat(this.inputTypeFormats[o2.type] || i3.inputEditDateFormat, a2), r2 && r2.attr({ text: s2.dateFormat(i3.inputDateFormat, a2) });
          }
        }
        setInputExtremes(t3, e3, i3) {
          let s2 = "min" === t3 ? this.minInput : this.maxInput;
          if (s2) {
            let t4 = this.inputTypeFormats[s2.type], o2 = this.chart.time;
            if (t4) {
              let r2 = o2.dateFormat(t4, e3);
              s2.min !== r2 && (s2.min = r2);
              let a2 = o2.dateFormat(t4, i3);
              s2.max !== a2 && (s2.max = a2);
            }
          }
        }
        showInput(t3) {
          let e3 = "min" === t3 ? this.minDateBox : this.maxDateBox, i3 = "min" === t3 ? this.minInput : this.maxInput;
          if (i3 && e3 && this.inputGroup) {
            let t4 = "text" === i3.type, { translateX: s2 = 0, translateY: o2 = 0 } = this.inputGroup, { x: r2 = 0, width: a2 = 0, height: n2 = 0 } = e3, { inputBoxWidth: l2 } = this.options;
            d(i3, { width: t4 ? a2 + (l2 ? -2 : 20) + "px" : "auto", height: n2 - 2 + "px", border: "2px solid silver" }), t4 && l2 ? d(i3, { left: s2 + r2 + "px", top: o2 + "px" }) : d(i3, { left: Math.min(Math.round(r2 + s2 - (i3.offsetWidth - a2) / 2), this.chart.chartWidth - i3.offsetWidth) + "px", top: o2 - (i3.offsetHeight - n2) / 2 + "px" });
          }
        }
        hideInput(t3) {
          let e3 = "min" === t3 ? this.minInput : this.maxInput;
          e3 && d(e3, { top: "-9999em", border: 0, width: "1px", height: "1px" });
        }
        defaultInputDateParser(t3, e3, s2) {
          let o2 = t3.split("/").join("-").split(" ").join("T");
          if (-1 === o2.indexOf("T") && (o2 += "T00:00"), e3) o2 += "Z";
          else {
            let t4;
            if (i2.isSafari && !((t4 = o2).length > 6 && (t4.lastIndexOf("-") === t4.length - 6 || t4.lastIndexOf("+") === t4.length - 6))) {
              let t5 = new Date(o2).getTimezoneOffset() / 60;
              o2 += t5 <= 0 ? `+${v(-t5)}:00` : `-${v(t5)}:00`;
            }
          }
          let r2 = Date.parse(o2);
          if (!x(r2)) {
            let e4 = t3.split("-");
            r2 = Date.UTC(M(e4[0]), M(e4[1]) - 1, M(e4[2]));
          }
          return s2 && e3 && x(r2) && (r2 += s2.getTimezoneOffset(r2)), r2;
        }
        drawInput(t3) {
          let { chart: e3, div: s2, inputGroup: o2 } = this, r2 = this, a2 = e3.renderer.style || {}, l2 = e3.renderer, p2 = e3.options.rangeSelector, c2 = n.lang, u2 = "min" === t3;
          function f2(t4) {
            var _a;
            let { maxInput: i3, minInput: s3 } = r2, o3 = e3.xAxis[0], a3 = ((_a = e3.scroller) == null ? void 0 : _a.getUnionExtremes()) || o3, n2 = a3.dataMin, l3 = a3.dataMax, h2 = e3.xAxis[0].getExtremes()[t4], d2 = r2.getInputValue(t4);
            x(d2) && d2 !== h2 && (u2 && i3 && x(n2) ? d2 > Number(i3.getAttribute("data-hc-time")) ? d2 = void 0 : d2 < n2 && (d2 = n2) : s3 && x(l3) && (d2 < Number(s3.getAttribute("data-hc-time")) ? d2 = void 0 : d2 > l3 && (d2 = l3)), void 0 !== d2 && o3.setExtremes(u2 ? d2 : o3.min, u2 ? o3.max : d2, void 0, void 0, { trigger: "rangeSelectorInput" }));
          }
          let b2 = c2[u2 ? "rangeSelectorFrom" : "rangeSelectorTo"] || "", v2 = l2.label(b2, 0).addClass("highcharts-range-label").attr({ padding: b2 ? 2 : 0, height: b2 ? p2.inputBoxHeight : 0 }).add(o2), y2 = l2.label("", 0).addClass("highcharts-range-input").attr({ padding: 2, width: p2.inputBoxWidth, height: p2.inputBoxHeight, "text-align": "center" }).on("click", function() {
            r2.showInput(t3), r2[t3 + "Input"].focus();
          });
          e3.styledMode || y2.attr({ stroke: p2.inputBoxBorderColor, "stroke-width": 1 }), y2.add(o2);
          let M2 = h("input", { name: t3, className: "highcharts-range-selector" }, void 0, s2);
          M2.setAttribute("type", function(t4) {
            if (-1 !== t4.indexOf("%L")) return "text";
            let e4 = ["a", "A", "d", "e", "w", "b", "B", "m", "o", "y", "Y"].some((e5) => -1 !== t4.indexOf("%" + e5)), i3 = ["H", "k", "I", "l", "M", "S"].some((e5) => -1 !== t4.indexOf("%" + e5));
            return e4 && i3 ? "datetime-local" : e4 ? "date" : i3 ? "time" : "text";
          }(p2.inputDateFormat || "%e %b %Y")), e3.styledMode || (v2.css(m(a2, p2.labelStyle)), y2.css(m({ color: "#333333" }, a2, p2.inputStyle)), d(M2, g({ position: "absolute", border: 0, boxShadow: "0 0 15px rgba(0,0,0,0.3)", width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: a2.fontSize, fontFamily: a2.fontFamily, top: "-9999em" }, p2.inputStyle))), M2.onfocus = () => {
            r2.showInput(t3);
          }, M2.onblur = () => {
            M2 === i2.doc.activeElement && f2(t3), r2.hideInput(t3), r2.setInputValue(t3), M2.blur();
          };
          let S2 = false;
          return M2.onchange = () => {
            S2 || (f2(t3), r2.hideInput(t3), M2.blur());
          }, M2.onkeypress = (e4) => {
            13 === e4.keyCode && f2(t3);
          }, M2.onkeydown = (e4) => {
            S2 = true, ("ArrowUp" === e4.key || "ArrowDown" === e4.key || "Tab" === e4.key) && f2(t3);
          }, M2.onkeyup = () => {
            S2 = false;
          }, { dateBox: y2, input: M2, label: v2 };
        }
        getPosition() {
          let t3 = this.chart, e3 = t3.options.rangeSelector, i3 = "top" === e3.verticalAlign ? t3.plotTop - t3.axisOffset[0] : 0;
          return { buttonTop: i3 + e3.buttonPosition.y, inputTop: i3 + e3.inputPosition.y - 10 };
        }
        getYTDExtremes(t3, e3, i3) {
          let s2 = this.chart.time, o2 = new s2.Date(t3), r2 = s2.get("FullYear", o2), a2 = Math.max(e3, i3 ? s2.Date.UTC(r2, 0, 1) : +new s2.Date(r2, 0, 1)), n2 = o2.getTime();
          return { max: Math.min(t3 || n2, n2), min: a2 };
        }
        createElements() {
          var _a;
          let t3 = this.chart, e3 = t3.renderer, i3 = t3.container, s2 = t3.options, o2 = s2.rangeSelector, r2 = o2.inputEnabled, a2 = y((_a = s2.chart.style) == null ? void 0 : _a.zIndex, 0) + 1;
          if (false !== o2.enabled && (this.group = e3.g("range-selector-group").attr({ zIndex: 7 }).add(), this.div = h("div", void 0, { position: "relative", height: 0, zIndex: a2 }), this.buttonOptions.length && this.renderButtons(), i3.parentNode && i3.parentNode.insertBefore(this.div, i3), r2)) {
            this.inputGroup = e3.g("input-group").add(this.group);
            let t4 = this.drawInput("min");
            this.minDateBox = t4.dateBox, this.minLabel = t4.label, this.minInput = t4.input;
            let i4 = this.drawInput("max");
            this.maxDateBox = i4.dateBox, this.maxLabel = i4.label, this.maxInput = i4.input;
          }
        }
        render(t3, e3) {
          let i3 = this.chart, s2 = i3.options.rangeSelector, o2 = s2.inputEnabled;
          if (false !== s2.enabled) {
            if (o2) {
              this.setInputValue("min", t3), this.setInputValue("max", e3);
              let o3 = i3.scroller && i3.scroller.getUnionExtremes() || i3.xAxis[0] || {};
              if (p(o3.dataMin) && p(o3.dataMax)) {
                let t4 = i3.xAxis[0].minRange || 0;
                this.setInputExtremes("min", o3.dataMin, Math.min(o3.dataMax, this.getInputValue("max")) - t4), this.setInputExtremes("max", Math.max(o3.dataMin, this.getInputValue("min")) + t4, o3.dataMax);
              }
              if (this.inputGroup) {
                let t4 = 0;
                [this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach((e4) => {
                  if (e4) {
                    let { width: i4 } = e4.getBBox();
                    i4 && (e4.attr({ x: t4 }), t4 += i4 + s2.inputSpacing);
                  }
                });
              }
            }
            this.alignElements(), this.updateButtonStates();
          }
        }
        renderButtons() {
          var _a;
          let { buttons: t3, chart: e3, options: s2 } = this, o2 = n.lang, r2 = e3.renderer, a2 = m(s2.buttonTheme), d2 = a2 && a2.states, p2 = a2.width || 28;
          delete a2.width, delete a2.states, this.buttonGroup = r2.g("range-selector-buttons").add(this.group);
          let c2 = this.dropdown = h("select", void 0, { position: "absolute", padding: 0, border: 0, cursor: "pointer", opacity: 1e-4 }, this.div), u2 = (_a = e3.userOptions.rangeSelector) == null ? void 0 : _a.buttonTheme;
          this.dropdownLabel = r2.button("", 0, 0, () => {
          }, m(a2, { "stroke-width": y(a2["stroke-width"], 0), width: "auto", paddingLeft: y(s2.buttonTheme.paddingLeft, u2 == null ? void 0 : u2.padding, 8), paddingRight: y(s2.buttonTheme.paddingRight, u2 == null ? void 0 : u2.padding, 8) }), d2 && d2.hover, d2 && d2.select, d2 && d2.disabled).hide().add(this.group), l(c2, "touchstart", () => {
            c2.style.fontSize = "16px";
          });
          let g2 = i2.isMS ? "mouseover" : "mouseenter", x2 = i2.isMS ? "mouseout" : "mouseleave";
          l(c2, g2, () => {
            f(this.dropdownLabel.element, g2);
          }), l(c2, x2, () => {
            f(this.dropdownLabel.element, x2);
          }), l(c2, "change", () => {
            f(this.buttons[c2.selectedIndex - 1].element, "click");
          }), this.zoomText = r2.label(o2.rangeSelectorZoom || "", 0).attr({ padding: s2.buttonTheme.padding, height: s2.buttonTheme.height, paddingLeft: 0, paddingRight: 0 }).add(this.buttonGroup), this.chart.styledMode || (this.zoomText.css(s2.labelStyle), a2["stroke-width"] = y(a2["stroke-width"], 0)), h("option", { textContent: this.zoomText.textStr, disabled: true }, void 0, c2), this.buttonOptions.forEach((e4, i3) => {
            h("option", { textContent: e4.title || e4.text }, void 0, c2), t3[i3] = r2.button(e4.text, 0, 0, (t4) => {
              let s3;
              let o3 = e4.events && e4.events.click;
              o3 && (s3 = o3.call(e4, t4)), false !== s3 && this.clickButton(i3), this.isActive = true;
            }, a2, d2 && d2.hover, d2 && d2.select, d2 && d2.disabled).attr({ "text-align": "center", width: p2 }).add(this.buttonGroup), e4.title && t3[i3].attr("title", e4.title);
          });
        }
        alignElements() {
          var _a;
          let { buttonGroup: t3, buttons: e3, chart: i3, group: s2, inputGroup: o2, options: r2, zoomText: a2 } = this, n2 = i3.options, l2 = n2.exporting && false !== n2.exporting.enabled && n2.navigation && n2.navigation.buttonOptions, { buttonPosition: h2, inputPosition: d2, verticalAlign: p2 } = r2, c2 = (t4, e4) => l2 && this.titleCollision(i3) && "top" === p2 && "right" === e4.align && e4.y - t4.getBBox().height - 12 < (l2.y || 0) + (l2.height || 0) + i3.spacing[0] ? -40 : 0, u2 = i3.plotLeft;
          if (s2 && h2 && d2) {
            let n3 = h2.x - i3.spacing[3];
            if (t3) {
              if (this.positionButtons(), !this.initialButtonGroupWidth) {
                let t4 = 0;
                a2 && (t4 += a2.getBBox().width + 5), e3.forEach((i4, s3) => {
                  t4 += i4.width || 0, s3 !== e3.length - 1 && (t4 += r2.buttonSpacing);
                }), this.initialButtonGroupWidth = t4;
              }
              u2 -= i3.spacing[3];
              let o3 = c2(t3, h2);
              this.alignButtonGroup(o3), ((_a = this.buttonGroup) == null ? void 0 : _a.translateY) && this.dropdownLabel.attr({ y: this.buttonGroup.translateY }), s2.placed = t3.placed = i3.hasLoaded;
            }
            let l3 = 0;
            o2 && (l3 = c2(o2, d2), "left" === d2.align ? n3 = u2 : "right" === d2.align && (n3 = -Math.max(i3.axisOffset[1], -l3)), o2.align({ y: d2.y, width: o2.getBBox().width, align: d2.align, x: d2.x + n3 - 2 }, true, i3.spacingBox), o2.placed = i3.hasLoaded), this.handleCollision(l3), s2.align({ verticalAlign: p2 }, true, i3.spacingBox);
            let g2 = s2.alignAttr.translateY, f2 = s2.getBBox().height + 20, x2 = 0;
            if ("bottom" === p2) {
              let t4 = i3.legend && i3.legend.options;
              x2 = g2 - (f2 = f2 + (t4 && "bottom" === t4.verticalAlign && t4.enabled && !t4.floating ? i3.legend.legendHeight + y(t4.margin, 10) : 0) - 20) - (r2.floating ? 0 : r2.y) - (i3.titleOffset ? i3.titleOffset[2] : 0) - 10;
            }
            "top" === p2 ? (r2.floating && (x2 = 0), i3.titleOffset && i3.titleOffset[0] && (x2 = i3.titleOffset[0]), x2 += i3.margin[0] - i3.spacing[0] || 0) : "middle" === p2 && (d2.y === h2.y ? x2 = g2 : (d2.y || h2.y) && (d2.y < 0 || h2.y < 0 ? x2 -= Math.min(d2.y, h2.y) : x2 = g2 - f2)), s2.translate(r2.x, r2.y + Math.floor(x2));
            let { minInput: m2, maxInput: b2, dropdown: v2 } = this;
            r2.inputEnabled && m2 && b2 && (m2.style.marginTop = s2.translateY + "px", b2.style.marginTop = s2.translateY + "px"), v2 && (v2.style.marginTop = s2.translateY + "px");
          }
        }
        alignButtonGroup(t3, e3) {
          let { chart: i3, options: s2, buttonGroup: o2 } = this, { buttonPosition: r2 } = s2, a2 = i3.plotLeft - i3.spacing[3], n2 = r2.x - i3.spacing[3];
          "right" === r2.align ? n2 += t3 - a2 : "center" === r2.align && (n2 -= a2 / 2), o2 && o2.align({ y: r2.y, width: y(e3, this.initialButtonGroupWidth), align: r2.align, x: n2 }, true, i3.spacingBox);
        }
        positionButtons() {
          let { buttons: t3, chart: e3, options: i3, zoomText: s2 } = this, o2 = e3.hasLoaded ? "animate" : "attr", { buttonPosition: r2 } = i3, a2 = e3.plotLeft, n2 = a2;
          s2 && "hidden" !== s2.visibility && (s2[o2]({ x: y(a2 + r2.x, a2) }), n2 += r2.x + s2.getBBox().width + 5);
          for (let e4 = 0, s3 = this.buttonOptions.length; e4 < s3; ++e4) "hidden" !== t3[e4].visibility ? (t3[e4][o2]({ x: n2 }), n2 += (t3[e4].width || 0) + i3.buttonSpacing) : t3[e4][o2]({ x: a2 });
        }
        handleCollision(t3) {
          let { chart: e3, buttonGroup: i3, inputGroup: s2 } = this, { buttonPosition: o2, dropdown: r2, inputPosition: a2 } = this.options, n2 = () => {
            let t4 = 0;
            return this.buttons.forEach((e4) => {
              let i4 = e4.getBBox();
              i4.width > t4 && (t4 = i4.width);
            }), t4;
          }, l2 = (e4) => {
            if ((s2 == null ? void 0 : s2.alignOptions) && i3) {
              let r3 = s2.alignAttr.translateX + s2.alignOptions.x - t3 + s2.getBBox().x + 2, n3 = s2.alignOptions.width || 0, l3 = i3.alignAttr.translateX + i3.getBBox().x;
              return l3 + e4 > r3 && r3 + n3 > l3 && o2.y < a2.y + s2.getBBox().height;
            }
            return false;
          }, h2 = () => {
            s2 && i3 && s2.attr({ translateX: s2.alignAttr.translateX + (e3.axisOffset[1] >= -t3 ? 0 : -t3), translateY: s2.alignAttr.translateY + i3.getBBox().height + 10 });
          };
          if (i3) {
            if ("always" === r2) {
              this.collapseButtons(), l2(n2()) && h2();
              return;
            }
            "never" === r2 && this.expandButtons();
          }
          s2 && i3 ? a2.align === o2.align || l2(this.initialButtonGroupWidth + 20) ? "responsive" === r2 ? (this.collapseButtons(), l2(n2()) && h2()) : h2() : "responsive" === r2 && this.expandButtons() : i3 && "responsive" === r2 && (this.initialButtonGroupWidth > e3.plotWidth ? this.collapseButtons() : this.expandButtons());
        }
        collapseButtons() {
          let { buttons: t3, zoomText: e3 } = this;
          true !== this.isCollapsed && (this.isCollapsed = true, e3.hide(), t3.forEach((t4) => void t4.hide()), this.showDropdown());
        }
        expandButtons() {
          let { buttons: t3, zoomText: e3 } = this;
          false !== this.isCollapsed && (this.isCollapsed = false, this.hideDropdown(), e3.show(), t3.forEach((t4) => void t4.show()), this.positionButtons());
        }
        showDropdown() {
          let { buttonGroup: t3, chart: e3, dropdownLabel: i3, dropdown: s2 } = this;
          if (t3 && s2) {
            let { translateX: o2 = 0, translateY: r2 = 0 } = t3, a2 = e3.plotLeft + o2;
            i3.attr({ x: a2, y: r2 }).show(), d(s2, { left: a2 + "px", top: r2 + "px", visibility: "inherit" }), this.hasVisibleDropdown = true;
          }
        }
        hideDropdown() {
          let { dropdown: t3 } = this;
          t3 && (this.dropdownLabel.hide(), d(t3, { visibility: "hidden", width: "1px", height: "1px" }), this.hasVisibleDropdown = false);
        }
        getHeight() {
          let t3 = this.options, e3 = this.group, i3 = t3.inputPosition, s2 = t3.buttonPosition, o2 = t3.y, r2 = s2.y, a2 = i3.y, n2 = 0;
          if (t3.height) return t3.height;
          this.alignElements(), n2 = e3 ? e3.getBBox(true).height + 13 + o2 : 0;
          let l2 = Math.min(a2, r2);
          return (a2 < 0 && r2 < 0 || a2 > 0 && r2 > 0) && (n2 += Math.abs(l2)), n2;
        }
        titleCollision(t3) {
          return !(t3.options.title.text || t3.options.subtitle.text);
        }
        update(t3, e3 = true) {
          let i3 = this.chart;
          m(true, i3.options.rangeSelector, t3), this.destroy(), this.init(i3), e3 && this.render();
        }
        destroy() {
          let t3 = this, e3 = t3.minInput, i3 = t3.maxInput;
          t3.eventsToUnbind && (t3.eventsToUnbind.forEach((t4) => t4()), t3.eventsToUnbind = void 0), c(t3.buttons), e3 && (e3.onfocus = e3.onblur = e3.onchange = null), i3 && (i3.onfocus = i3.onblur = i3.onchange = null), b(t3, function(e4, i4) {
            e4 && "chart" !== i4 && (e4 instanceof o ? e4.destroy() : e4 instanceof window.HTMLElement && u(e4)), e4 !== A.prototype[i4] && (t3[i4] = null);
          }, this);
        }
      }
      return g(A.prototype, { defaultButtons: [{ type: "month", count: 1, text: "1m", title: "View 1 month" }, { type: "month", count: 3, text: "3m", title: "View 3 months" }, { type: "month", count: 6, text: "6m", title: "View 6 months" }, { type: "ytd", text: "YTD", title: "View year to date" }, { type: "year", count: 1, text: "1y", title: "View 1 year" }, { type: "all", text: "All", title: "View all" }], inputTypeFormats: { "datetime-local": "%Y-%m-%dT%H:%M:%S", date: "%Y-%m-%d", time: "%H:%M:%S" } }), A;
    }), i(e, "Core/Chart/StockChart.js", [e["Core/Chart/Chart.js"], e["Core/Templating.js"], e["Core/Defaults.js"], e["Stock/Navigator/NavigatorDefaults.js"], e["Stock/RangeSelector/RangeSelectorDefaults.js"], e["Stock/Scrollbar/ScrollbarDefaults.js"], e["Stock/Utilities/StockUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n) {
      let { format: l } = e2, { getOptions: h } = i2, { setFixedRange: d } = a, { addEvent: p, clamp: c, crisp: u, defined: g, extend: f, find: x, isNumber: m, isString: b, merge: v, pick: y, splat: M } = n;
      function S(t3, e3, i3) {
        var _a, _b;
        return "xAxis" === t3 ? { minPadding: 0, maxPadding: 0, overscroll: 0, ordinal: true } : "yAxis" === t3 ? { labels: { y: -2 }, opposite: i3.opposite ?? e3.opposite ?? true, showLastLabel: !!(e3.categories || "category" === e3.type), title: { text: ((_a = i3.title) == null ? void 0 : _a.text) !== "Values" ? (_b = i3.title) == null ? void 0 : _b.text : null } } : {};
      }
      function A(t3, e3) {
        if ("xAxis" === t3) {
          let t4 = y(e3.navigator && e3.navigator.enabled, s.enabled, true), i3 = { type: "datetime", categories: void 0 };
          return t4 && (i3.startOnTick = false, i3.endOnTick = false), i3;
        }
        return {};
      }
      class k extends t2 {
        init(t3, e3) {
          let i3 = h(), a2 = t3.xAxis, n2 = t3.yAxis, l2 = y(t3.navigator && t3.navigator.enabled, s.enabled, true);
          t3.xAxis = t3.yAxis = void 0;
          let d2 = v({ chart: { panning: { enabled: true, type: "x" }, zooming: { pinchType: "x", mouseWheel: { type: "x" } } }, navigator: { enabled: l2 }, scrollbar: { enabled: y(r.enabled, true) }, rangeSelector: { enabled: y(o.rangeSelector.enabled, true) }, title: { text: null }, tooltip: { split: y(i3.tooltip && i3.tooltip.split, true), crosshairs: true }, legend: { enabled: false } }, t3, { isStock: true });
          t3.xAxis = a2, t3.yAxis = n2, d2.xAxis = M(t3.xAxis || {}).map((e4) => v(S("xAxis", e4, i3.xAxis), e4, A("xAxis", t3))), d2.yAxis = M(t3.yAxis || {}).map((t4) => v(S("yAxis", t4, i3.yAxis), t4)), super.init(d2, e3);
        }
        createAxis(t3, e3) {
          return e3.axis = v(S(t3, e3.axis, h()[t3]), e3.axis, A(t3, this.userOptions)), super.createAxis(t3, e3);
        }
      }
      return p(t2, "update", function(t3) {
        let e3 = t3.options;
        "scrollbar" in e3 && this.navigator && (v(true, this.options.scrollbar, e3.scrollbar), this.navigator.update({ enabled: !!this.navigator.navigatorEnabled }), delete e3.scrollbar);
      }), function(t3) {
        function e3(t4) {
          if (!this.crosshair || !this.crosshair.label || !this.crosshair.label.enabled || !this.cross || !m(this.min) || !m(this.max)) return;
          let e4 = this.chart, i4 = this.logarithmic, s3 = this.crosshair.label, o3 = this.horiz, r3 = this.opposite, a3 = this.left, n3 = this.top, h3 = this.width, d2 = "inside" === this.options.tickPosition, p2 = false !== this.crosshair.snap, c2 = t4.e || this.cross && this.cross.e, u2 = t4.point, g2 = this.crossLabel, x2, b2, v2 = s3.format, M2 = "", S2, A2 = 0, k2 = this.min, C = this.max;
          i4 && (k2 = i4.lin2log(this.min), C = i4.lin2log(this.max));
          let D = o3 ? "center" : r3 ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center";
          g2 || (g2 = this.crossLabel = e4.renderer.label("", 0, void 0, s3.shape || "callout").addClass("highcharts-crosshair-label highcharts-color-" + (u2 && u2.series ? u2.series.colorIndex : this.series[0] && this.series[0].colorIndex)).attr({ align: s3.align || D, padding: y(s3.padding, 8), r: y(s3.borderRadius, 3), zIndex: 2 }).add(this.labelGroup), e4.styledMode || g2.attr({ fill: s3.backgroundColor || u2 && u2.series && u2.series.color || "#666666", stroke: s3.borderColor || "", "stroke-width": s3.borderWidth || 0 }).css(f({ color: "#ffffff", fontWeight: "normal", fontSize: "0.7em", textAlign: "center" }, s3.style || {}))), o3 ? (x2 = p2 ? (u2.plotX || 0) + a3 : c2.chartX, b2 = n3 + (r3 ? 0 : this.height)) : (x2 = a3 + this.offset + (r3 ? h3 : 0), b2 = p2 ? (u2.plotY || 0) + n3 : c2.chartY), v2 || s3.formatter || (this.dateTime && (M2 = "%b %d, %Y"), v2 = "{value" + (M2 ? ":" + M2 : "") + "}");
          let w = p2 ? this.isXAxis ? u2.x : u2.y : this.toValue(o3 ? c2.chartX : c2.chartY), O = u2 && u2.series ? u2.series.isPointInside(u2) : m(w) && w > k2 && w < C, E = "";
          v2 ? E = l(v2, { value: w }, e4) : s3.formatter && m(w) && (E = s3.formatter.call(this, w)), g2.attr({ text: E, x: x2, y: b2, visibility: O ? "inherit" : "hidden" });
          let B = g2.getBBox();
          !m(g2.x) || o3 || r3 || (x2 = g2.x - B.width / 2), m(g2.y) && (o3 ? (d2 && !r3 || !d2 && r3) && (b2 = g2.y - B.height) : b2 = g2.y - B.height / 2), S2 = o3 ? { left: a3, right: a3 + this.width } : { left: "left" === this.labelAlign ? a3 : 0, right: "right" === this.labelAlign ? a3 + this.width : e4.chartWidth };
          let T = g2.translateX || 0;
          T < S2.left && (A2 = S2.left - T), T + B.width >= S2.right && (A2 = -(T + B.width - S2.right)), g2.attr({ x: x2 + A2, y: b2, anchorX: o3 ? x2 : this.opposite ? 0 : e4.chartWidth, anchorY: o3 ? this.opposite ? e4.chartHeight : 0 : b2 + B.height / 2 });
        }
        function i3() {
          this.crossLabel && (this.crossLabel = this.crossLabel.hide());
        }
        function s2(t4) {
          let e4 = this.chart, i4 = this.options, s3 = e4._labelPanes = e4._labelPanes || {}, o3 = i4.labels;
          if (e4.options.isStock && "yAxis" === this.coll) {
            let e5 = i4.top + "," + i4.height;
            !s3[e5] && o3.enabled && (15 === o3.distance && 1 === this.side && (o3.distance = 0), void 0 === o3.align && (o3.align = "right"), s3[e5] = this, t4.align = "right", t4.preventDefault());
          }
        }
        function o2() {
          let t4 = this.chart, e4 = this.options && this.options.top + "," + this.options.height;
          e4 && t4._labelPanes && t4._labelPanes[e4] === this && delete t4._labelPanes[e4];
        }
        function r2(t4) {
          let e4 = this, i4 = e4.isLinked && !e4.series && e4.linkedParent ? e4.linkedParent.series : e4.series, s3 = e4.chart, o3 = s3.renderer, r3 = e4.left, a3 = e4.top, n3 = [], l2 = t4.translatedValue, h3 = t4.value, d2 = t4.force, p2, u2, f2, v2, M2 = [], S2, A2;
          if (s3.options.isStock && false !== t4.acrossPanes && "xAxis" === e4.coll || "yAxis" === e4.coll) {
            for (let o4 of (t4.preventDefault(), M2 = ((t5) => {
              let o5 = "xAxis" === t5 ? "yAxis" : "xAxis", r4 = e4.options[o5];
              return m(r4) ? [s3[o5][r4]] : b(r4) ? [s3.get(r4)] : i4.map((t6) => t6[o5]);
            })(e4.coll), e4.isXAxis ? s3.yAxis : s3.xAxis)) if (!o4.options.isInternal) {
              let t5 = o4.isXAxis ? "yAxis" : "xAxis";
              e4 === (g(o4.options[t5]) ? s3[t5][o4.options[t5]] : s3[t5][0]) && M2.push(o4);
            }
            for (let t5 of (S2 = M2.length ? [] : [e4.isXAxis ? s3.yAxis[0] : s3.xAxis[0]], M2)) -1 !== S2.indexOf(t5) || x(S2, (e5) => e5.pos === t5.pos && e5.len === t5.len) || S2.push(t5);
            if (m(A2 = y(l2, e4.translate(h3 || 0, void 0, void 0, t4.old)))) {
              if (e4.horiz) for (let t5 of S2) {
                let i5;
                v2 = (u2 = t5.pos) + t5.len, p2 = f2 = Math.round(A2 + e4.transB), "pass" !== d2 && (p2 < r3 || p2 > r3 + e4.width) && (d2 ? p2 = f2 = c(p2, r3, r3 + e4.width) : i5 = true), i5 || n3.push(["M", p2, u2], ["L", f2, v2]);
              }
              else for (let t5 of S2) {
                let i5;
                f2 = (p2 = t5.pos) + t5.len, u2 = v2 = Math.round(a3 + e4.height - A2), "pass" !== d2 && (u2 < a3 || u2 > a3 + e4.height) && (d2 ? u2 = v2 = c(u2, a3, a3 + e4.height) : i5 = true), i5 || n3.push(["M", p2, u2], ["L", f2, v2]);
              }
            }
            t4.path = n3.length > 0 ? o3.crispPolyLine(n3, t4.lineWidth || 1) : void 0;
          }
        }
        function a2(t4) {
          if (this.chart.options.isStock) {
            let e4;
            this.is("column") || this.is("columnrange") ? e4 = { borderWidth: 0, shadow: false } : this.is("scatter") || this.is("sma") || (e4 = { marker: { enabled: false, radius: 2 } }), e4 && (t4.plotOptions[this.type] = v(t4.plotOptions[this.type], e4));
          }
        }
        function n2() {
          let t4 = this.chart, e4 = this.options.dataGrouping;
          return false !== this.allowDG && e4 && y(e4.enabled, t4.options.isStock);
        }
        function h2(t4, e4) {
          for (let i4 = 0; i4 < t4.length; i4 += 2) {
            let s3 = t4[i4], o3 = t4[i4 + 1];
            g(s3[1]) && s3[1] === o3[1] && (s3[1] = o3[1] = u(s3[1], e4)), g(s3[2]) && s3[2] === o3[2] && (s3[2] = o3[2] = u(s3[2], e4));
          }
          return t4;
        }
        t3.compose = function(t4, l2, c2, u2) {
          let g2 = c2.prototype;
          g2.forceCropping || (p(l2, "afterDrawCrosshair", e3), p(l2, "afterHideCrosshair", i3), p(l2, "autoLabelAlign", s2), p(l2, "destroy", o2), p(l2, "getPlotLinePath", r2), t4.prototype.setFixedRange = d, g2.forceCropping = n2, p(c2, "setOptions", a2), u2.prototype.crispPolyLine = h2);
        }, t3.stockChart = function(e4, i4, s3) {
          return new t3(e4, i4, s3);
        };
      }(k || (k = {})), k;
    }), i(e, "Series/HLC/HLCPoint.js", [e["Core/Series/SeriesRegistry.js"]], function(t2) {
      let { column: { prototype: { pointClass: e2 } } } = t2.seriesTypes;
      return class extends e2 {
      };
    }), i(e, "Series/HLC/HLCSeriesDefaults.js", [], function() {
      return { lineWidth: 1, tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' }, threshold: null, states: { hover: { lineWidth: 3 } }, stickyTracking: true };
    }), i(e, "Series/HLC/HLCSeries.js", [e["Series/HLC/HLCPoint.js"], e["Series/HLC/HLCSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { column: o } = i2.seriesTypes, { crisp: r, extend: a, merge: n } = s;
      class l extends o {
        extendStem(t3, e3, i3) {
          let s2 = t3[0], o2 = t3[1];
          "number" == typeof s2[2] && (s2[2] = Math.max(i3 + e3, s2[2])), "number" == typeof o2[2] && (o2[2] = Math.min(i3 - e3, o2[2]));
        }
        getPointPath(t3, e3) {
          let i3 = e3.strokeWidth(), s2 = t3.series, o2 = r(t3.plotX || 0, i3), a2 = Math.round(t3.shapeArgs.width / 2), n2 = [["M", o2, Math.round(t3.yBottom)], ["L", o2, Math.round(t3.plotHigh)]];
          if (null !== t3.close) {
            let e4 = r(t3.plotClose, i3);
            n2.push(["M", o2, e4], ["L", o2 + a2, e4]), s2.extendStem(n2, i3 / 2, e4);
          }
          return n2;
        }
        drawSinglePoint(t3) {
          let e3 = t3.series, i3 = e3.chart, s2, o2 = t3.graphic;
          void 0 !== t3.plotY && (o2 || (t3.graphic = o2 = i3.renderer.path().add(e3.group)), i3.styledMode || o2.attr(e3.pointAttribs(t3, t3.selected && "select")), s2 = e3.getPointPath(t3, o2), o2[o2 ? "animate" : "attr"]({ d: s2 }).addClass(t3.getClassName(), true));
        }
        drawPoints() {
          this.points.forEach(this.drawSinglePoint);
        }
        init() {
          super.init.apply(this, arguments), this.options.stacking = void 0;
        }
        pointAttribs(t3, e3) {
          let i3 = super.pointAttribs.call(this, t3, e3);
          return delete i3.fill, i3;
        }
        toYData(t3) {
          return [t3.high, t3.low, t3.close];
        }
        translate() {
          let t3 = this, e3 = t3.yAxis, i3 = this.pointArrayMap && this.pointArrayMap.slice() || [], s2 = i3.map((t4) => `plot${t4.charAt(0).toUpperCase() + t4.slice(1)}`);
          s2.push("yBottom"), i3.push("low"), super.translate.apply(t3), t3.points.forEach(function(o2) {
            i3.forEach(function(i4, r2) {
              let a2 = o2[i4];
              null !== a2 && (t3.dataModify && (a2 = t3.dataModify.modifyValue(a2)), o2[s2[r2]] = e3.toPixels(a2, true));
            }), o2.tooltipPos[1] = o2.plotHigh + e3.pos - t3.chart.plotTop;
          });
        }
      }
      return l.defaultOptions = n(o.defaultOptions, e2), a(l.prototype, { pointClass: t2, animate: null, directTouch: false, pointArrayMap: ["high", "low", "close"], pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, pointValKey: "close" }), i2.registerSeriesType("hlc", l), l;
    }), i(e, "Series/OHLC/OHLCPoint.js", [e["Core/Series/SeriesRegistry.js"]], function(t2) {
      let { seriesTypes: { hlc: e2 } } = t2;
      class i2 extends e2.prototype.pointClass {
        getClassName() {
          return super.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down");
        }
        resolveUpColor() {
          this.open < this.close && !this.options.color && this.series.options.upColor && (this.color = this.series.options.upColor);
        }
        resolveColor() {
          super.resolveColor(), this.series.is("heikinashi") || this.resolveUpColor();
        }
        getZone() {
          let t3 = super.getZone();
          return this.resolveUpColor(), t3;
        }
        applyOptions() {
          return super.applyOptions.apply(this, arguments), this.resolveColor && this.resolveColor(), this;
        }
      }
      return i2;
    }), i(e, "Series/OHLC/OHLCSeriesDefaults.js", [], function() {
      return { tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' } };
    }), i(e, "Series/OHLC/OHLCSeries.js", [e["Core/Globals.js"], e["Series/OHLC/OHLCPoint.js"], e["Series/OHLC/OHLCSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
      let { composed: r } = t2, { hlc: a } = s.seriesTypes, { addEvent: n, crisp: l, extend: h, merge: d, pushUnique: p } = o;
      function c(t3) {
        let e3 = t3.options, i3 = e3.dataGrouping;
        i3 && e3.useOhlcData && "highcharts-navigator-series" !== e3.id && (i3.approximation = "ohlc");
      }
      function u(t3) {
        let e3 = t3.options;
        e3.useOhlcData && "highcharts-navigator-series" !== e3.id && h(this, { pointValKey: g.prototype.pointValKey, pointArrayMap: g.prototype.pointArrayMap, toYData: g.prototype.toYData });
      }
      class g extends a {
        static compose(t3, ...e3) {
          p(r, "OHLCSeries") && (n(t3, "afterSetOptions", c), n(t3, "init", u));
        }
        getPointPath(t3, e3) {
          let i3 = super.getPointPath(t3, e3), s2 = e3.strokeWidth(), o2 = l(t3.plotX || 0, s2), r2 = Math.round(t3.shapeArgs.width / 2);
          if (null !== t3.open) {
            let e4 = l(t3.plotOpen, s2);
            i3.push(["M", o2, e4], ["L", o2 - r2, e4]), super.extendStem(i3, s2 / 2, e4);
          }
          return i3;
        }
        pointAttribs(t3, e3) {
          let i3 = super.pointAttribs.call(this, t3, e3), s2 = this.options;
          return delete i3.fill, !t3.options.color && s2.upColor && t3.open < t3.close && (i3.stroke = s2.upColor), i3;
        }
        toYData(t3) {
          return [t3.open, t3.high, t3.low, t3.close];
        }
      }
      return g.defaultOptions = d(a.defaultOptions, i2), h(g.prototype, { pointClass: e2, pointArrayMap: ["open", "high", "low", "close"] }), s.registerSeriesType("ohlc", g), g;
    }), i(e, "Series/Candlestick/CandlestickSeriesDefaults.js", [], function() {
      return { states: { hover: { lineWidth: 2 } }, threshold: null, lineColor: "#000000", lineWidth: 1, upColor: "#ffffff", stickyTracking: true };
    }), i(e, "Series/Candlestick/CandlestickSeries.js", [e["Series/Candlestick/CandlestickSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      let { column: s, ohlc: o } = e2.seriesTypes, { crisp: r, merge: a } = i2;
      class n extends o {
        pointAttribs(t3, e3) {
          let i3 = s.prototype.pointAttribs.call(this, t3, e3), o2 = this.options, r2 = t3.open < t3.close, a2 = o2.lineColor || this.color, n2 = t3.color || this.color;
          if (i3["stroke-width"] = o2.lineWidth, i3.fill = t3.options.color || r2 && o2.upColor || n2, i3.stroke = t3.options.lineColor || r2 && o2.upLineColor || a2, e3) {
            let t4 = o2.states[e3];
            i3.fill = t4.color || i3.fill, i3.stroke = t4.lineColor || i3.stroke, i3["stroke-width"] = t4.lineWidth || i3["stroke-width"];
          }
          return i3;
        }
        drawPoints() {
          let t3 = this.points, e3 = this.chart, i3 = this.yAxis.reversed;
          for (let s2 of t3) {
            let t4 = s2.graphic, o2, a2, n2, l, h, d, p, c, u, g = !t4;
            if (void 0 !== s2.plotY) {
              t4 || (s2.graphic = t4 = e3.renderer.path().add(this.group)), this.chart.styledMode || t4.attr(this.pointAttribs(s2, s2.selected && "select")).shadow(this.options.shadow);
              let f = t4.strokeWidth();
              p = r(s2.plotX || 0, f), n2 = Math.min(o2 = s2.plotOpen, a2 = s2.plotClose), l = Math.max(o2, a2), u = Math.round(s2.shapeArgs.width / 2), h = i3 ? l !== s2.yBottom : Math.round(n2) !== Math.round(s2.plotHigh || 0), d = i3 ? Math.round(n2) !== Math.round(s2.plotHigh || 0) : l !== s2.yBottom, n2 = r(n2, f), l = r(l, f), (c = []).push(["M", p - u, l], ["L", p - u, n2], ["L", p + u, n2], ["L", p + u, l], ["Z"], ["M", p, n2], ["L", p, h ? Math.round(i3 ? s2.yBottom : s2.plotHigh) : n2], ["M", p, l], ["L", p, d ? Math.round(i3 ? s2.plotHigh : s2.yBottom) : l]), t4[g ? "attr" : "animate"]({ d: c }).addClass(s2.getClassName(), true);
            }
          }
        }
      }
      return n.defaultOptions = a(o.defaultOptions, { tooltip: o.defaultOptions.tooltip }, t2), e2.registerSeriesType("candlestick", n), n;
    }), i(e, "Series/Flags/FlagsPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { column: { prototype: { pointClass: i2 } } } = t2.seriesTypes, { isNumber: s } = e2;
      return class extends i2 {
        constructor() {
          super(...arguments), this.ttBelow = false;
        }
        isValid() {
          return s(this.y) || void 0 === this.y;
        }
        hasNewShapeType() {
          let t3 = this.options.shape || this.series.options.shape;
          return this.graphic && t3 && t3 !== this.graphic.symbolKey;
        }
      };
    }), i(e, "Series/Flags/FlagsSeriesDefaults.js", [], function() {
      return { borderRadius: 0, pointRange: 0, allowOverlapX: false, shape: "flag", stackDistance: 12, textAlign: "center", tooltip: { pointFormat: "{point.text}" }, threshold: null, y: -30, fillColor: "#ffffff", lineWidth: 1, states: { hover: { lineColor: "#000000", fillColor: "#ccd3ff" } }, style: { fontSize: "0.7em", fontWeight: "bold" } };
    }), i(e, "Series/Flags/FlagsSymbols.js", [e["Core/Renderer/RendererRegistry.js"]], function(t2) {
      var e2;
      return function(e3) {
        let i2 = [];
        function s(t3, e4, i3, s2, o2) {
          let r = o2 && o2.anchorX || t3, a = o2 && o2.anchorY || e4, n = this.circle(r - 1, a - 1, 2, 2);
          return n.push(["M", r, a], ["L", t3, e4 + s2], ["L", t3, e4], ["L", t3 + i3, e4], ["L", t3 + i3, e4 + s2], ["L", t3, e4 + s2], ["Z"]), n;
        }
        function o(t3, e4) {
          t3[e4 + "pin"] = function(i3, s2, o2, r, a) {
            let n;
            let l = a && a.anchorX, h = a && a.anchorY;
            if ("circle" === e4 && r > o2 && (i3 -= Math.round((r - o2) / 2), o2 = r), n = t3[e4](i3, s2, o2, r, a), l && h) {
              let a2 = l;
              if ("circle" === e4) a2 = i3 + o2 / 2;
              else {
                let t4 = n[0], e5 = n[1];
                "M" === t4[0] && "L" === e5[0] && (a2 = (t4[1] + e5[1]) / 2);
              }
              let d = s2 > h ? s2 : s2 + r;
              n.push(["M", a2, d], ["L", l, h]), n = n.concat(t3.circle(l - 1, h - 1, 2, 2));
            }
            return n;
          };
        }
        e3.compose = function(e4) {
          if (-1 === i2.indexOf(e4)) {
            i2.push(e4);
            let t3 = e4.prototype.symbols;
            t3.flag = s, o(t3, "circle"), o(t3, "square");
          }
          let r = t2.getRendererType();
          i2.indexOf(r) && i2.push(r);
        };
      }(e2 || (e2 = {})), e2;
    }), i(e, "Series/OnSeriesComposition.js", [e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      var o;
      let { composed: r } = e2, { prototype: a } = t2, { prototype: n } = i2, { defined: l, pushUnique: h, stableSort: d } = s;
      return function(t3) {
        function e3(t4) {
          return n.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this, t4);
        }
        function i3() {
          var _a, _b;
          a.translate.apply(this);
          let t4 = this, e4 = t4.options, i4 = t4.chart, s2 = t4.points, o2 = e4.onSeries, r2 = o2 && i4.get(o2), n2 = r2 && r2.options.step, h2 = r2 && r2.points, p = i4.inverted, c = t4.xAxis, u = t4.yAxis, g = s2.length - 1, f, x, m = e4.onKey || "y", b = h2 && h2.length, v = 0, y, M, S, A, k;
          if (r2 && r2.visible && b) {
            for (v = (r2.pointXOffset || 0) + (r2.barW || 0) / 2, A = r2.currentDataGrouping, M = h2[b - 1].x + (A ? A.totalRange : 0), d(s2, (t5, e5) => t5.x - e5.x), m = "plot" + m[0].toUpperCase() + m.substr(1); b-- && s2[g]; ) if (y = h2[b], (f = s2[g]).y = y.y, y.x <= f.x && void 0 !== y[m]) {
              if (f.x <= M && (f.plotY = y[m], y.x < f.x && !n2 && (S = h2[b + 1]) && void 0 !== S[m])) {
                if (l(f.plotX) && r2.is("spline")) {
                  let t5 = [y.plotX || 0, y.plotY || 0], e5 = [S.plotX || 0, S.plotY || 0], i5 = ((_a = y.controlPoints) == null ? void 0 : _a.high) || t5, s3 = ((_b = S.controlPoints) == null ? void 0 : _b.low) || e5, o3 = (o4, r4) => Math.pow(1 - o4, 3) * t5[r4] + 3 * (1 - o4) * (1 - o4) * o4 * i5[r4] + 3 * (1 - o4) * o4 * o4 * s3[r4] + o4 * o4 * o4 * e5[r4], r3 = 0, a2 = 1, n3;
                  for (let t6 = 0; t6 < 100; t6++) {
                    let t7 = (r3 + a2) / 2, e6 = o3(t7, 0);
                    if (null === e6) break;
                    if (0.25 > Math.abs(e6 - f.plotX)) {
                      n3 = t7;
                      break;
                    }
                    e6 < f.plotX ? r3 = t7 : a2 = t7;
                  }
                  l(n3) && (f.plotY = o3(n3, 1), f.y = u.toValue(f.plotY, true));
                } else k = (f.x - y.x) / (S.x - y.x), f.plotY += k * (S[m] - y[m]), f.y += k * (S.y - y.y);
              }
              if (g--, b++, g < 0) break;
            }
          }
          s2.forEach((e5, i5) => {
            let o3;
            e5.plotX += v, (void 0 === e5.plotY || p) && (e5.plotX >= 0 && e5.plotX <= c.len ? p ? (e5.plotY = c.translate(e5.x, 0, 1, 0, 1), e5.plotX = l(e5.y) ? u.translate(e5.y, 0, 0, 0, 1) : 0) : e5.plotY = (c.opposite ? 0 : t4.yAxis.len) + c.offset : e5.shapeArgs = {}), (x = s2[i5 - 1]) && x.plotX === e5.plotX && (void 0 === x.stackIndex && (x.stackIndex = 0), o3 = x.stackIndex + 1), e5.stackIndex = o3;
          }), this.onSeries = r2;
        }
        t3.compose = function(t4) {
          if (h(r, "OnSeries")) {
            let s2 = t4.prototype;
            s2.getPlotBox = e3, s2.translate = i3;
          }
          return t4;
        }, t3.getPlotBox = e3, t3.translate = i3;
      }(o || (o = {})), o;
    }), i(e, "Series/Flags/FlagsSeries.js", [e["Series/Flags/FlagsPoint.js"], e["Series/Flags/FlagsSeriesDefaults.js"], e["Series/Flags/FlagsSymbols.js"], e["Core/Globals.js"], e["Series/OnSeriesComposition.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
      let { noop: h } = s, { distribute: d } = r, { series: p, seriesTypes: { column: c } } = a, { addEvent: u, defined: g, extend: f, isNumber: x, merge: m, objectEach: b, wrap: v } = l;
      class y extends c {
        animate(t3) {
          t3 && this.setClip();
        }
        drawPoints() {
          let t3, e3, i3, s2, o2, r2, a2, l2, h2, p2, c2;
          let u2 = this.points, f2 = this.chart, y2 = f2.renderer, M = f2.inverted, S = this.options, A = S.y, k = this.yAxis, C = {}, D = [], w = x(S.borderRadius) ? S.borderRadius : 0;
          for (s2 = u2.length; s2--; ) o2 = u2[s2], p2 = (M ? o2.plotY : o2.plotX) > this.xAxis.len, t3 = o2.plotX, a2 = o2.stackIndex, i3 = o2.options.shape || S.shape, void 0 !== (e3 = o2.plotY) && (e3 = o2.plotY + A - (void 0 !== a2 && a2 * S.stackDistance)), o2.anchorX = a2 ? void 0 : o2.plotX, l2 = a2 ? void 0 : o2.plotY, c2 = "flag" !== i3, r2 = o2.graphic, void 0 !== e3 && t3 >= 0 && !p2 ? (r2 && o2.hasNewShapeType() && (r2 = r2.destroy()), r2 || (r2 = o2.graphic = y2.label("", 0, void 0, i3, void 0, void 0, S.useHTML).addClass("highcharts-point").add(this.markerGroup), o2.graphic.div && (o2.graphic.div.point = o2), r2.isNew = true), r2.attr({ align: c2 ? "center" : "left", width: S.width, height: S.height, "text-align": S.textAlign, r: w }), f2.styledMode || r2.attr(this.pointAttribs(o2)).css(m(S.style, o2.style)).shadow(S.shadow), t3 > 0 && (t3 -= r2.strokeWidth() % 2), h2 = { y: e3, anchorY: l2 }, S.allowOverlapX && (h2.x = t3, h2.anchorX = o2.anchorX), r2.attr({ text: o2.options.title ?? S.title ?? "A" })[r2.isNew ? "attr" : "animate"](h2), S.allowOverlapX || (C[o2.plotX] ? C[o2.plotX].size = Math.max(C[o2.plotX].size, r2.width || 0) : C[o2.plotX] = { align: c2 ? 0.5 : 0, size: r2.width || 0, target: t3, anchorX: t3 }), o2.tooltipPos = [t3, e3 + k.pos - f2.plotTop]) : r2 && (o2.graphic = r2.destroy());
          if (!S.allowOverlapX) {
            let t4 = 100;
            for (let e4 of (b(C, function(e5) {
              e5.plotX = e5.anchorX, D.push(e5), t4 = Math.max(e5.size, t4);
            }), d(D, M ? k.len : this.xAxis.len, t4), u2)) {
              let t5 = e4.plotX, i4 = e4.graphic, s3 = i4 && C[t5];
              s3 && i4 && (g(s3.pos) ? i4[i4.isNew ? "attr" : "animate"]({ x: s3.pos + (s3.align || 0) * s3.size, anchorX: e4.anchorX }).show().isNew = false : i4.hide().isNew = true);
            }
          }
          S.useHTML && this.markerGroup && v(this.markerGroup, "on", function(t4) {
            return n.prototype.on.apply(t4.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1));
          });
        }
        drawTracker() {
          let t3 = this.points;
          for (let e3 of (super.drawTracker(), t3)) {
            let i3 = e3.graphic;
            i3 && (e3.unbindMouseOver && e3.unbindMouseOver(), e3.unbindMouseOver = u(i3.element, "mouseover", function() {
              for (let s2 of (e3.stackIndex > 0 && !e3.raised && (e3._y = i3.y, i3.attr({ y: e3._y - 8 }), e3.raised = true), t3)) s2 !== e3 && s2.raised && s2.graphic && (s2.graphic.attr({ y: s2._y }), s2.raised = false);
            }));
          }
        }
        pointAttribs(t3, e3) {
          let i3 = this.options, s2 = t3 && t3.color || this.color, o2 = i3.lineColor, r2 = t3 && t3.lineWidth, a2 = t3 && t3.fillColor || i3.fillColor;
          return e3 && (a2 = i3.states[e3].fillColor, o2 = i3.states[e3].lineColor, r2 = i3.states[e3].lineWidth), { fill: a2 || s2, stroke: o2 || s2, "stroke-width": r2 || i3.lineWidth || 0 };
        }
        setClip() {
          p.prototype.setClip.apply(this, arguments), false !== this.options.clip && this.sharedClipKey && this.markerGroup && this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey]);
        }
      }
      return y.compose = i2.compose, y.defaultOptions = m(c.defaultOptions, e2), o.compose(y), f(y.prototype, { allowDG: false, forceCrop: true, invertible: false, noSharedTooltip: true, pointClass: t2, sorted: false, takeOrdinalPosition: false, trackerGroups: ["markerGroup"], buildKDTree: h, init: p.prototype.init }), a.registerSeriesType("flags", y), y;
    }), i(e, "Core/Axis/BrokenAxis.js", [e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2) {
      var i2;
      let { addEvent: s, find: o, fireEvent: r, isArray: a, isNumber: n, pick: l } = e2;
      return function(e3) {
        function i3() {
          void 0 !== this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, false);
        }
        function h() {
          var _a;
          ((_a = this.brokenAxis) == null ? void 0 : _a.hasBreaks) && (this.options.ordinal = false);
        }
        function d() {
          let t3 = this.brokenAxis;
          if (t3 == null ? void 0 : t3.hasBreaks) {
            let e4 = this.tickPositions, i4 = this.tickPositions.info, s2 = [];
            for (let i5 = 0; i5 < e4.length; i5++) t3.isInAnyBreak(e4[i5]) || s2.push(e4[i5]);
            this.tickPositions = s2, this.tickPositions.info = i4;
          }
        }
        function p() {
          this.brokenAxis || (this.brokenAxis = new x(this));
        }
        function c() {
          var _a, _b;
          let { isDirty: t3, options: { connectNulls: e4 }, points: i4, xAxis: s2, yAxis: o2 } = this;
          if (t3) {
            let t4 = i4.length;
            for (; t4--; ) {
              let r2 = i4[t4], a2 = !(null === r2.y && false === e4) && (((_a = s2 == null ? void 0 : s2.brokenAxis) == null ? void 0 : _a.isInAnyBreak(r2.x, true)) || ((_b = o2 == null ? void 0 : o2.brokenAxis) == null ? void 0 : _b.isInAnyBreak(r2.y, true)));
              r2.visible = !a2 && false !== r2.options.visible;
            }
          }
        }
        function u() {
          this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, l(this.pointArrayMap, ["y"]));
        }
        function g(t3, e4) {
          var _a;
          let i4, s2, o2;
          let a2 = this, h2 = a2.points;
          if ((_a = t3 == null ? void 0 : t3.brokenAxis) == null ? void 0 : _a.hasBreaks) {
            let d2 = t3.brokenAxis;
            e4.forEach(function(e5) {
              var _a2, _b;
              i4 = (d2 == null ? void 0 : d2.breakArray) || [], s2 = t3.isXAxis ? t3.min : l(a2.options.threshold, t3.min);
              let p2 = (_b = (_a2 = t3 == null ? void 0 : t3.options) == null ? void 0 : _a2.breaks) == null ? void 0 : _b.filter(function(t4) {
                let e6 = true;
                for (let s3 = 0; s3 < i4.length; s3++) {
                  let o3 = i4[s3];
                  if (o3.from === t4.from && o3.to === t4.to) {
                    e6 = false;
                    break;
                  }
                }
                return e6;
              });
              h2.forEach(function(a3) {
                o2 = l(a3["stack" + e5.toUpperCase()], a3[e5]), i4.forEach(function(e6) {
                  if (n(s2) && n(o2)) {
                    let i5 = "";
                    s2 < e6.from && o2 > e6.to || s2 > e6.from && o2 < e6.from ? i5 = "pointBreak" : (s2 < e6.from && o2 > e6.from && o2 < e6.to || s2 > e6.from && o2 > e6.to && o2 < e6.from) && (i5 = "pointInBreak"), i5 && r(t3, i5, { point: a3, brk: e6 });
                  }
                }), p2 == null ? void 0 : p2.forEach(function(e6) {
                  r(t3, "pointOutsideOfBreak", { point: a3, brk: e6 });
                });
              });
            });
          }
        }
        function f() {
          let e4 = this.currentDataGrouping, i4 = e4 == null ? void 0 : e4.gapSize, s2 = this.points.slice(), o2 = this.yAxis, r2 = this.options.gapSize, a2 = s2.length - 1;
          if (r2 && a2 > 0) {
            let e5, n2;
            for ("value" !== this.options.gapUnit && (r2 *= this.basePointRange), i4 && i4 > r2 && i4 >= this.basePointRange && (r2 = i4); a2--; ) if (n2 && false !== n2.visible || (n2 = s2[a2 + 1]), e5 = s2[a2], false !== n2.visible && false !== e5.visible) {
              if (n2.x - e5.x > r2) {
                let i5 = (e5.x + n2.x) / 2;
                s2.splice(a2 + 1, 0, { isNull: true, x: i5 }), o2.stacking && this.options.stacking && ((o2.stacking.stacks[this.stackKey][i5] = new t2(o2, o2.options.stackLabels, false, i5, this.stack)).total = 0);
              }
              n2 = e5;
            }
          }
          return this.getGraphPath(s2);
        }
        e3.compose = function(t3, e4) {
          if (!t3.keepProps.includes("brokenAxis")) {
            t3.keepProps.push("brokenAxis"), s(t3, "init", p), s(t3, "afterInit", i3), s(t3, "afterSetTickPositions", d), s(t3, "afterSetOptions", h);
            let o2 = e4.prototype;
            o2.drawBreaks = g, o2.gappedPath = f, s(e4, "afterGeneratePoints", c), s(e4, "afterRender", u);
          }
          return t3;
        };
        class x {
          static isInBreak(t3, e4) {
            let i4 = t3.repeat || 1 / 0, s2 = t3.from, o2 = t3.to - t3.from, r2 = e4 >= s2 ? (e4 - s2) % i4 : i4 - (s2 - e4) % i4;
            return t3.inclusive ? r2 <= o2 : r2 < o2 && 0 !== r2;
          }
          static lin2Val(t3) {
            let e4 = this.brokenAxis, i4 = e4 && e4.breakArray;
            if (!i4 || !n(t3)) return t3;
            let s2 = t3, o2, r2;
            for (r2 = 0; r2 < i4.length && !((o2 = i4[r2]).from >= s2); r2++) o2.to < s2 ? s2 += o2.len : x.isInBreak(o2, s2) && (s2 += o2.len);
            return s2;
          }
          static val2Lin(t3) {
            let e4 = this.brokenAxis, i4 = e4 && e4.breakArray;
            if (!i4 || !n(t3)) return t3;
            let s2 = t3, o2, r2;
            for (r2 = 0; r2 < i4.length; r2++) if ((o2 = i4[r2]).to <= t3) s2 -= o2.len;
            else if (o2.from >= t3) break;
            else if (x.isInBreak(o2, t3)) {
              s2 -= t3 - o2.from;
              break;
            }
            return s2;
          }
          constructor(t3) {
            this.hasBreaks = false, this.axis = t3;
          }
          findBreakAt(t3, e4) {
            return o(e4, function(e5) {
              return e5.from < t3 && t3 < e5.to;
            });
          }
          isInAnyBreak(t3, e4) {
            let i4 = this.axis, s2 = i4.options.breaks || [], o2 = s2.length, r2, a2, h2;
            if (o2 && n(t3)) {
              for (; o2--; ) x.isInBreak(s2[o2], t3) && (r2 = true, a2 || (a2 = l(s2[o2].showPoints, !i4.isXAxis)));
              h2 = r2 && e4 ? r2 && !a2 : r2;
            }
            return h2;
          }
          setBreaks(t3, e4) {
            let i4 = this, s2 = i4.axis, o2 = a(t3) && !!t3.length && !!Object.keys(t3[0]).length;
            s2.isDirty = i4.hasBreaks !== o2, i4.hasBreaks = o2, t3 !== s2.options.breaks && (s2.options.breaks = s2.userOptions.breaks = t3), s2.forceRedraw = true, s2.series.forEach(function(t4) {
              t4.isDirty = true;
            }), o2 || s2.val2lin !== x.val2Lin || (delete s2.val2lin, delete s2.lin2val), o2 && (s2.userOptions.ordinal = false, s2.lin2val = x.lin2Val, s2.val2lin = x.val2Lin, s2.setExtremes = function(t4, e5, o3, r2, a2) {
              if (i4.hasBreaks) {
                let s3;
                let o4 = this.options.breaks || [];
                for (; s3 = i4.findBreakAt(t4, o4); ) t4 = s3.to;
                for (; s3 = i4.findBreakAt(e5, o4); ) e5 = s3.from;
                e5 < t4 && (e5 = t4);
              }
              s2.constructor.prototype.setExtremes.call(this, t4, e5, o3, r2, a2);
            }, s2.setAxisTranslation = function() {
              if (s2.constructor.prototype.setAxisTranslation.call(this), i4.unitLength = void 0, i4.hasBreaks) {
                let t4 = s2.options.breaks || [], e5 = [], o3 = [], a2 = l(s2.pointRangePadding, 0), h2 = 0, d2, p2, c2 = s2.userMin || s2.min, u2 = s2.userMax || s2.max, g2, f2;
                t4.forEach(function(t5) {
                  p2 = t5.repeat || 1 / 0, n(c2) && n(u2) && (x.isInBreak(t5, c2) && (c2 += t5.to % p2 - c2 % p2), x.isInBreak(t5, u2) && (u2 -= u2 % p2 - t5.from % p2));
                }), t4.forEach(function(t5) {
                  if (g2 = t5.from, p2 = t5.repeat || 1 / 0, n(c2) && n(u2)) {
                    for (; g2 - p2 > c2; ) g2 -= p2;
                    for (; g2 < c2; ) g2 += p2;
                    for (f2 = g2; f2 < u2; f2 += p2) e5.push({ value: f2, move: "in" }), e5.push({ value: f2 + t5.to - t5.from, move: "out", size: t5.breakSize });
                  }
                }), e5.sort(function(t5, e6) {
                  return t5.value === e6.value ? ("in" === t5.move ? 0 : 1) - ("in" === e6.move ? 0 : 1) : t5.value - e6.value;
                }), d2 = 0, g2 = c2, e5.forEach(function(t5) {
                  1 === (d2 += "in" === t5.move ? 1 : -1) && "in" === t5.move && (g2 = t5.value), 0 === d2 && n(g2) && (o3.push({ from: g2, to: t5.value, len: t5.value - g2 - (t5.size || 0) }), h2 += t5.value - g2 - (t5.size || 0));
                }), i4.breakArray = o3, n(c2) && n(u2) && n(s2.min) && (i4.unitLength = u2 - c2 - h2 + a2, r(s2, "afterBreaks"), s2.staticScale ? s2.transA = s2.staticScale : i4.unitLength && (s2.transA *= (u2 - s2.min + a2) / i4.unitLength), a2 && (s2.minPixelPadding = s2.transA * (s2.minPointOffset || 0)), s2.min = c2, s2.max = u2);
              }
            }), l(e4, true) && s2.chart.redraw();
          }
        }
        e3.Additions = x;
      }(i2 || (i2 = {})), i2;
    }), i(e, "masters/modules/broken-axis.src.js", [e["Core/Globals.js"], e["Core/Axis/BrokenAxis.js"]], function(t2, e2) {
      return t2.BrokenAxis = t2.BrokenAxis || e2, t2.BrokenAxis.compose(t2.Axis, t2.Series), t2;
    }), i(e, "Extensions/DataGrouping/ApproximationRegistry.js", [], function() {
      return {};
    }), i(e, "Extensions/DataGrouping/ApproximationDefaults.js", [e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { arrayMax: i2, arrayMin: s, correctFloat: o, extend: r, isNumber: a } = e2;
      function n(t3) {
        let e3 = t3.length, i3 = l(t3);
        return a(i3) && e3 && (i3 = o(i3 / e3)), i3;
      }
      function l(t3) {
        let e3 = t3.length, i3;
        if (!e3 && t3.hasNulls) i3 = null;
        else if (e3) for (i3 = 0; e3--; ) i3 += t3[e3];
        return i3;
      }
      let h = { average: n, averages: function() {
        let t3 = [];
        return [].forEach.call(arguments, function(e3) {
          t3.push(n(e3));
        }), void 0 === t3[0] ? void 0 : t3;
      }, close: function(t3) {
        return t3.length ? t3[t3.length - 1] : t3.hasNulls ? null : void 0;
      }, high: function(t3) {
        return t3.length ? i2(t3) : t3.hasNulls ? null : void 0;
      }, hlc: function(e3, i3, s2) {
        if (e3 = t2.high(e3), i3 = t2.low(i3), s2 = t2.close(s2), a(e3) || a(i3) || a(s2)) return [e3, i3, s2];
      }, low: function(t3) {
        return t3.length ? s(t3) : t3.hasNulls ? null : void 0;
      }, ohlc: function(e3, i3, s2, o2) {
        if (e3 = t2.open(e3), i3 = t2.high(i3), s2 = t2.low(s2), o2 = t2.close(o2), a(e3) || a(i3) || a(s2) || a(o2)) return [e3, i3, s2, o2];
      }, open: function(t3) {
        return t3.length ? t3[0] : t3.hasNulls ? null : void 0;
      }, range: function(e3, i3) {
        return (e3 = t2.low(e3), i3 = t2.high(i3), a(e3) || a(i3)) ? [e3, i3] : null === e3 && null === i3 ? null : void 0;
      }, sum: l };
      return r(t2, h), h;
    }), i(e, "Extensions/DataGrouping/DataGroupingDefaults.js", [], function() {
      return { common: { groupPixelWidth: 2, dateTimeLabelFormats: { millisecond: ["%A, %e %b, %H:%M:%S.%L", "%A, %e %b, %H:%M:%S.%L", "-%H:%M:%S.%L"], second: ["%A, %e %b, %H:%M:%S", "%A, %e %b, %H:%M:%S", "-%H:%M:%S"], minute: ["%A, %e %b, %H:%M", "%A, %e %b, %H:%M", "-%H:%M"], hour: ["%A, %e %b, %H:%M", "%A, %e %b, %H:%M", "-%H:%M"], day: ["%A, %e %b %Y", "%A, %e %b", "-%A, %e %b %Y"], week: ["Week from %A, %e %b %Y", "%A, %e %b", "-%A, %e %b %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"] } }, seriesSpecific: { line: {}, spline: {}, area: {}, areaspline: {}, arearange: {}, column: { groupPixelWidth: 10 }, columnrange: { groupPixelWidth: 10 }, candlestick: { groupPixelWidth: 10 }, ohlc: { groupPixelWidth: 5 }, hlc: { groupPixelWidth: 5 }, heikinashi: { groupPixelWidth: 10 } }, units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]] };
    }), i(e, "Extensions/DataGrouping/DataGroupingAxisComposition.js", [e["Extensions/DataGrouping/DataGroupingDefaults.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let i2;
      let { addEvent: s, extend: o, merge: r, pick: a } = e2;
      function n(t3) {
        let e3 = this, i3 = e3.series;
        i3.forEach(function(t4) {
          t4.groupPixelWidth = void 0;
        }), i3.forEach(function(i4) {
          i4.groupPixelWidth = e3.getGroupPixelWidth && e3.getGroupPixelWidth(), i4.groupPixelWidth && (i4.hasProcessed = true), i4.applyGrouping(!!t3.hasExtremesChanged);
        });
      }
      function l() {
        let e3 = this.series, i3 = e3.length, s2 = 0, o2 = false, r2, n2;
        for (; i3--; ) (n2 = e3[i3].options.dataGrouping) && (s2 = Math.max(s2, a(n2.groupPixelWidth, t2.common.groupPixelWidth)), r2 = (e3[i3].processedXData || e3[i3].data).length, (e3[i3].groupPixelWidth || r2 > this.chart.plotSizeX / s2 || r2 && n2.forced) && (o2 = true));
        return o2 ? s2 : 0;
      }
      function h() {
        this.series.forEach(function(t3) {
          t3.hasProcessed = false;
        });
      }
      function d(t3, e3) {
        let s2;
        if (e3 = a(e3, true), t3 || (t3 = { forced: false, units: null }), this instanceof i2) for (s2 = this.series.length; s2--; ) this.series[s2].update({ dataGrouping: t3 }, false);
        else this.chart.options.series.forEach(function(e4) {
          e4.dataGrouping = "boolean" == typeof t3 ? t3 : r(t3, e4.dataGrouping);
        });
        this.ordinal && (this.ordinal.slope = void 0), e3 && this.chart.redraw();
      }
      return { compose: function(t3) {
        i2 = t3;
        let e3 = t3.prototype;
        e3.applyGrouping || (s(t3, "afterSetScale", h), s(t3, "postProcessData", n), o(e3, { applyGrouping: n, getGroupPixelWidth: l, setDataGrouping: d }));
      } };
    }), i(e, "Extensions/DataGrouping/DataGroupingSeriesComposition.js", [e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Extensions/DataGrouping/DataGroupingDefaults.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Defaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
      let { series: { prototype: a } } = o, { addEvent: n, defined: l, error: h, extend: d, isNumber: p, merge: c, pick: u } = r, g = a.generatePoints;
      function f(t3) {
        var s2;
        let o2, r2;
        let n2 = this.chart, d2 = this.options.dataGrouping, c2 = false !== this.allowDG && d2 && u(d2.enabled, n2.options.isStock), g2 = this.reserveSpace(), f2 = this.currentDataGrouping, x2, m2, b2 = false;
        c2 && !this.requireSorting && (this.requireSorting = b2 = true);
        let v2 = false == !(this.isCartesian && !this.isDirty && !this.xAxis.isDirty && !this.yAxis.isDirty && !t3) || !c2;
        if (b2 && (this.requireSorting = false), v2) return;
        this.destroyGroupedData();
        let y2 = d2.groupAll ? this.xData : this.processedXData, M = d2.groupAll ? this.yData : this.processedYData, S = n2.plotSizeX, A = this.xAxis, k = A.options.ordinal, C = this.groupPixelWidth;
        if (C && y2 && y2.length && S) {
          r2 = true, this.isDirty = true, this.points = null;
          let t4 = A.getExtremes(), c3 = t4.min, u2 = t4.max, f3 = k && A.ordinal && A.ordinal.getGroupIntervalFactor(c3, u2, this) || 1, b3 = C * (u2 - c3) / S * f3, v3 = A.getTimeTicks(i2.Additions.prototype.normalizeTimeTickInterval(b3, d2.units || e2.units), Math.min(c3, y2[0]), Math.max(u2, y2[y2.length - 1]), A.options.startOfWeek, y2, this.closestPointRange), D = a.groupData.apply(this, [y2, M, v3, d2.approximation]), w = D.groupedXData, O = D.groupedYData, E = 0;
          for (d2 && d2.smoothed && w.length && (d2.firstAnchor = "firstPoint", d2.anchor = "middle", d2.lastAnchor = "lastPoint", h(32, false, n2, { "dataGrouping.smoothed": "use dataGrouping.anchor" })), o2 = 1; o2 < v3.length; o2++) v3.info.segmentStarts && -1 !== v3.info.segmentStarts.indexOf(o2) || (E = Math.max(v3[o2] - v3[o2 - 1], E));
          (x2 = v3.info).gapSize = E, this.closestPointRange = v3.info.totalRange, this.groupMap = D.groupMap, this.currentDataGrouping = x2, function(t5, e3, i3) {
            let s3 = t5.options.dataGrouping, o3 = t5.currentDataGrouping && t5.currentDataGrouping.gapSize;
            if (!(s3 && t5.xData && o3 && t5.groupMap)) return;
            let r3 = e3.length - 1, a2 = s3.anchor, n3 = s3.firstAnchor, l2 = s3.lastAnchor, h2 = e3.length - 1, d3 = 0;
            if (n3 && t5.xData[0] >= e3[0]) {
              let i4;
              d3++;
              let s4 = t5.groupMap[0].start, r4 = t5.groupMap[0].length;
              p(s4) && p(r4) && (i4 = s4 + (r4 - 1)), e3[0] = { start: e3[0], middle: e3[0] + 0.5 * o3, end: e3[0] + o3, firstPoint: t5.xData[0], lastPoint: i4 && t5.xData[i4] }[n3];
            }
            if (r3 > 0 && l2 && o3 && e3[r3] >= i3 - o3) {
              h2--;
              let i4 = t5.groupMap[t5.groupMap.length - 1].start;
              e3[r3] = { start: e3[r3], middle: e3[r3] + 0.5 * o3, end: e3[r3] + o3, firstPoint: i4 && t5.xData[i4], lastPoint: t5.xData[t5.xData.length - 1] }[l2];
            }
            if (a2 && "start" !== a2) {
              let t6 = o3 * { middle: 0.5, end: 1 }[a2];
              for (; h2 >= d3; ) e3[h2] += t6, h2--;
            }
          }(this, w, u2), g2 && (l((s2 = w)[0]) && p(A.min) && p(A.dataMin) && s2[0] < A.min && ((!l(A.options.min) && A.min <= A.dataMin || A.min === A.dataMin) && (A.min = Math.min(s2[0], A.min)), A.dataMin = Math.min(s2[0], A.dataMin)), l(s2[s2.length - 1]) && p(A.max) && p(A.dataMax) && s2[s2.length - 1] > A.max && ((!l(A.options.max) && p(A.dataMax) && A.max >= A.dataMax || A.max === A.dataMax) && (A.max = Math.max(s2[s2.length - 1], A.max)), A.dataMax = Math.max(s2[s2.length - 1], A.dataMax))), d2.groupAll && (this.allGroupedData = O, w = (m2 = this.cropData(w, O, A.min, A.max)).xData, O = m2.yData, this.cropStart = m2.start), this.processedXData = w, this.processedYData = O;
        } else this.groupMap = null, this.currentDataGrouping = void 0;
        this.hasGroupedData = r2, this.preventGraphAnimation = (f2 && f2.totalRange) !== (x2 && x2.totalRange);
      }
      function x() {
        this.groupedData && (this.groupedData.forEach(function(t3, e3) {
          t3 && (this.groupedData[e3] = t3.destroy ? t3.destroy() : null);
        }, this), this.groupedData.length = 0, delete this.allGroupedData);
      }
      function m() {
        g.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null;
      }
      function b() {
        return this.is("arearange") ? "range" : this.is("ohlc") ? "ohlc" : this.is("hlc") ? "hlc" : this.is("column") || this.options.cumulative ? "sum" : "average";
      }
      function v(e3, i3, s2, o2) {
        let r2 = this, a2 = r2.data, n2 = r2.options && r2.options.data, h2 = [], d2 = [], u2 = [], g2 = e3.length, f2 = !!i3, x2 = [], m2 = r2.pointArrayMap, b2 = m2 && m2.length, v2 = ["x"].concat(m2 || ["y"]), y2 = this.options.dataGrouping && this.options.dataGrouping.groupAll, M, S, A, k = 0, C = 0, D = "function" == typeof o2 ? o2 : o2 && t2[o2] ? t2[o2] : t2[r2.getDGApproximation && r2.getDGApproximation() || "average"];
        if (b2) {
          let t3 = m2.length;
          for (; t3--; ) x2.push([]);
        } else x2.push([]);
        let w = b2 || 1;
        for (let t3 = 0; t3 <= g2; t3++) if (!(e3[t3] < s2[0])) {
          for (; void 0 !== s2[k + 1] && e3[t3] >= s2[k + 1] || t3 === g2; ) {
            M = s2[k], r2.dataGroupInfo = { start: y2 ? C : r2.cropStart + C, length: x2[0].length, groupStart: M }, A = D.apply(r2, x2), r2.pointClass && !l(r2.dataGroupInfo.options) && (r2.dataGroupInfo.options = c(r2.pointClass.prototype.optionsToObject.call({ series: r2 }, r2.options.data[r2.cropStart + C])), v2.forEach(function(t4) {
              delete r2.dataGroupInfo.options[t4];
            })), void 0 !== A && (h2.push(M), d2.push(A), u2.push(r2.dataGroupInfo)), C = t3;
            for (let t4 = 0; t4 < w; t4++) x2[t4].length = 0, x2[t4].hasNulls = false;
            if (k += 1, t3 === g2) break;
          }
          if (t3 === g2) break;
          if (m2) {
            let e4;
            let i4 = r2.options.dataGrouping && r2.options.dataGrouping.groupAll ? t3 : r2.cropStart + t3, s3 = a2 && a2[i4] || r2.pointClass.prototype.applyOptions.apply({ series: r2 }, [n2[i4]]);
            for (let t4 = 0; t4 < b2; t4++) p(e4 = s3[m2[t4]]) ? x2[t4].push(e4) : null === e4 && (x2[t4].hasNulls = true);
          } else p(S = f2 ? i3[t3] : null) ? x2[0].push(S) : null === S && (x2[0].hasNulls = true);
        }
        return { groupedXData: h2, groupedYData: d2, groupMap: u2 };
      }
      function y(t3) {
        let i3 = t3.options, o2 = this.type, r2 = this.chart.options.plotOptions, a2 = this.useCommonDataGrouping && e2.common, n2 = e2.seriesSpecific, l2 = s.defaultOptions.plotOptions[o2].dataGrouping;
        if (r2 && (n2[o2] || a2)) {
          let t4 = this.chart.rangeSelector;
          l2 || (l2 = c(e2.common, n2[o2])), i3.dataGrouping = c(a2, l2, r2.series && r2.series.dataGrouping, r2[o2].dataGrouping, this.userOptions.dataGrouping, !i3.isInternal && t4 && p(t4.selected) && t4.buttonOptions[t4.selected].dataGrouping);
        }
      }
      return { compose: function(t3) {
        let e3 = t3.prototype;
        e3.applyGrouping || (n(t3.prototype.pointClass, "update", function() {
          if (this.dataGroup) return h(24, false, this.series.chart), false;
        }), n(t3, "afterSetOptions", y), n(t3, "destroy", x), d(e3, { applyGrouping: f, destroyGroupedData: x, generatePoints: m, getDGApproximation: b, groupData: v }));
      }, groupData: v };
    }), i(e, "Extensions/DataGrouping/DataGrouping.js", [e["Extensions/DataGrouping/DataGroupingAxisComposition.js"], e["Extensions/DataGrouping/DataGroupingDefaults.js"], e["Extensions/DataGrouping/DataGroupingSeriesComposition.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
      let { format: a } = s, { composed: n } = o, { addEvent: l, extend: h, isNumber: d, pick: p, pushUnique: c } = r;
      function u(t3) {
        var _a;
        let i3 = this.chart, s2 = i3.time, o2 = t3.labelConfig, r2 = o2.series, n2 = o2.point, l2 = r2.options, c2 = r2.tooltipOptions, u2 = l2.dataGrouping, g = r2.xAxis, f = c2.xDateFormat, x, m, b, v, y, M = c2[t3.isFooter ? "footerFormat" : "headerFormat"];
        if (g && "datetime" === g.options.type && u2 && d(o2.key)) {
          m = r2.currentDataGrouping, b = u2.dateTimeLabelFormats || e2.common.dateTimeLabelFormats, m ? (v = b[m.unitName], 1 === m.count ? f = v[0] : (f = v[1], x = v[2])) : !f && b && g.dateTime && (f = g.dateTime.getXDateFormat(o2.x, c2.dateTimeLabelFormats));
          let l3 = p((_a = r2.groupMap) == null ? void 0 : _a[n2.index].groupStart, o2.key), d2 = l3 + (m == null ? void 0 : m.totalRange) - 1;
          y = s2.dateFormat(f, l3), x && (y += s2.dateFormat(x, d2)), r2.chart.styledMode && (M = this.styledModeFormat(M)), t3.text = a(M, { point: h(o2.point, { key: y }), series: r2 }, i3), t3.preventDefault();
        }
      }
      return { compose: function(e3, s2, o2) {
        t2.compose(e3), i2.compose(s2), o2 && c(n, "DataGrouping") && l(o2, "headerFormatter", u);
      }, groupData: i2.groupData };
    }), i(e, "masters/modules/datagrouping.src.js", [e["Core/Globals.js"], e["Extensions/DataGrouping/ApproximationDefaults.js"], e["Extensions/DataGrouping/ApproximationRegistry.js"], e["Extensions/DataGrouping/DataGrouping.js"]], function(t2, e2, i2, s) {
      return t2.dataGrouping = t2.dataGrouping || {}, t2.dataGrouping.approximationDefaults = t2.dataGrouping.approximationDefaults || e2, t2.dataGrouping.approximations = t2.dataGrouping.approximations || i2, s.compose(t2.Axis, t2.Series, t2.Tooltip), t2;
    }), i(e, "Extensions/Annotations/NavigationBindingsUtilities.js", [e["Core/Utilities.js"]], function(t2) {
      let { defined: e2, isNumber: i2, pick: s } = t2, o = { backgroundColor: "string", borderColor: "string", borderRadius: "string", color: "string", fill: "string", fontSize: "string", labels: "string", name: "string", stroke: "string", title: "string" };
      return { annotationsFieldsTypes: o, getAssignedAxis: function(t3) {
        return t3.filter((t4) => {
          let e3 = t4.axis.getExtremes(), o2 = e3.min, r = e3.max, a = s(t4.axis.minPointOffset, 0);
          return i2(o2) && i2(r) && t4.value >= o2 - a && t4.value <= r + a && !t4.axis.options.isInternal;
        })[0];
      }, getFieldType: function(t3, i3) {
        let s2 = o[t3], r = typeof i3;
        return e2(s2) && (r = s2), { string: "text", number: "number", boolean: "checkbox" }[r];
      } };
    }), i(e, "Extensions/MouseWheelZoom/MouseWheelZoom.js", [e["Core/Utilities.js"], e["Extensions/Annotations/NavigationBindingsUtilities.js"]], function(t2, e2) {
      let i2;
      let { addEvent: s, isObject: o, pick: r, defined: a, merge: n } = t2, { getAssignedAxis: l } = e2, h = [], d = { enabled: true, sensitivity: 1.1 }, p = (t3) => (o(t3) || (t3 = { enabled: t3 ?? true }), n(d, t3)), c = function(t3, e3, s2, o2, n2, l2, h2) {
        let d2 = r(h2.type, t3.zooming.type, ""), p2 = [];
        "x" === d2 ? p2 = s2 : "y" === d2 ? p2 = o2 : "xy" === d2 && (p2 = t3.axes);
        let c2 = t3.transform({ axes: p2, to: { x: n2 - 5, y: l2 - 5, width: 10, height: 10 }, from: { x: n2 - 5 * e3, y: l2 - 5 * e3, width: 10 * e3, height: 10 * e3 }, trigger: "mousewheel" });
        return c2 && (a(i2) && clearTimeout(i2), i2 = setTimeout(() => {
          var _a;
          (_a = t3.pointer) == null ? void 0 : _a.drop();
        }, 400)), c2;
      };
      function u() {
        let t3 = p(this.zooming.mouseWheel);
        t3.enabled && s(this.container, "wheel", (e3) => {
          var _a, _b;
          e3 = ((_a = this.pointer) == null ? void 0 : _a.normalize(e3)) || e3;
          let { pointer: i3 } = this, s2 = i3 && !i3.inClass(e3.target, "highcharts-no-mousewheel");
          if (this.isInsidePlot(e3.chartX - this.plotLeft, e3.chartY - this.plotTop) && s2) {
            let s3 = t3.sensitivity || 1.1, o2 = e3.detail || (e3.deltaY || 0) / 120, r2 = l(i3.getCoordinates(e3).xAxis), a2 = l(i3.getCoordinates(e3).yAxis);
            c(this, Math.pow(s3, o2), r2 ? [r2.axis] : this.xAxis, a2 ? [a2.axis] : this.yAxis, e3.chartX, e3.chartY, t3) && ((_b = e3.preventDefault) == null ? void 0 : _b.call(e3));
          }
        });
      }
      return { compose: function(t3) {
        -1 === h.indexOf(t3) && (h.push(t3), s(t3, "afterGetContainer", u));
      } };
    }), i(e, "masters/modules/mouse-wheel-zoom.src.js", [e["Core/Globals.js"], e["Extensions/MouseWheelZoom/MouseWheelZoom.js"]], function(t2, e2) {
      return t2.MouseWheelZoom = t2.MouseWheelZoom || e2, t2.MouseWheelZoom.compose(t2.Chart), t2;
    }), i(e, "masters/modules/stock.src.js", [e["Core/Globals.js"], e["Series/DataModifyComposition.js"], e["Stock/Navigator/Navigator.js"], e["Core/Axis/OrdinalAxis.js"], e["Stock/RangeSelector/RangeSelector.js"], e["Stock/Scrollbar/Scrollbar.js"], e["Core/Chart/StockChart.js"], e["Series/OHLC/OHLCSeries.js"], e["Series/Flags/FlagsSeries.js"]], function(t2, e2, i2, s, o, r, a, n, l) {
      return t2.Navigator = t2.Navigator || i2, t2.OrdinalAxis = t2.OrdinalAxis || s, t2.RangeSelector = t2.RangeSelector || o, t2.Scrollbar = t2.Scrollbar || r, t2.stockChart = t2.stockChart || a.stockChart, t2.StockChart = t2.StockChart || t2.stockChart, t2.extend(t2.StockChart, a), e2.compose(t2.Series, t2.Axis, t2.Point), l.compose(t2.Renderer), n.compose(t2.Series), t2.Navigator.compose(t2.Chart, t2.Axis, t2.Series), t2.OrdinalAxis.compose(t2.Axis, t2.Series, t2.Chart), t2.RangeSelector.compose(t2.Axis, t2.Chart), t2.Scrollbar.compose(t2.Axis), t2.StockChart.compose(t2.Chart, t2.Axis, t2.Series, t2.SVGRenderer), t2;
    });
  });
})(stock);
var stockExports = stock.exports;
const stockInit = /* @__PURE__ */ getDefaultExportFromCjs(stockExports);
highchartsMore(Highcharts$1);
const adjustRangeSelectorPosition = (chart) => {
  if (chart.rangeSelector && chart.legend.legendHeight) {
    const { legendHeight } = chart.legend;
    chart.rangeSelector.buttons.forEach(
      (button) => button.attr({ y: legendHeight })
    );
    if (chart.rangeSelector.zoomText) {
      chart.rangeSelector.zoomText.attr({ y: legendHeight + 12 });
    }
    if (chart.rangeSelector.minLabel) {
      chart.rangeSelector.minLabel.attr({ y: legendHeight });
    }
    if (chart.rangeSelector.maxLabel) {
      chart.rangeSelector.maxLabel.attr({ y: legendHeight });
    }
    if (chart.rangeSelector.minDateBox) {
      chart.rangeSelector.minDateBox.attr({ y: legendHeight });
    }
    if (chart.rangeSelector.maxDateBox) {
      chart.rangeSelector.maxDateBox.attr({ y: legendHeight });
    }
  }
};
const buildNavigatorSeries = (series) => series.map((s) => ({
  data: s.data,
  color: s.color,
  lineColor: s.color,
  type: "line",
  showInNavigator: true,
  showInLegend: false,
  fillOpacity: 0
}));
const _sfc_main = {
  components: {
    HighCharts: highchartsVue_minExports.Chart
  },
  props: {
    customChartOptions: {
      type: Object,
      required: false,
      default: () => {
      }
    },
    asset: {
      type: String,
      required: true
    },
    parseFunction: {
      type: Function,
      required: true
    },
    chartGeneratedOptionsFunction: {
      type: Function,
      required: false,
      default: null
    },
    urlName: {
      type: String,
      required: true
    },
    urlQueryParams: {
      type: Object,
      required: false,
      default: () => {
      }
    },
    isStockChart: {
      type: Boolean,
      required: true
    },
    responseData: {
      type: Object,
      required: false,
      default: () => {
      }
    }
  },
  emits: ["dataUnavailable", "dataLoaded"],
  data() {
    return {
      updateArgs: [true, true],
      chartOptions: {
        chart: {
          spacing: [0, 6, 0, 6],
          animation: false,
          events: {
            render: ({ target: chart }) => adjustRangeSelectorPosition(chart)
          },
          zoomType: "x",
          style: {
            fontFamily: "var(--default-font-family)"
          },
          backgroundColor: "transparent"
        },
        credits: {
          enabled: false
        },
        legend: {
          align: "left",
          verticalAlign: "top",
          borderWidth: 0,
          enabled: true,
          symbolPadding: 5,
          symbolHeight: 7,
          symbolWidth: 7,
          symbolRadius: 10,
          maxHeight: 90,
          itemMarginBottom: 10,
          itemMarginTop: -10,
          itemDistance: 15,
          lineHeight: 20
        },
        navigator: {
          enabled: true
        },
        plotOptions: {
          area: {
            stacking: "normal",
            animation: false,
            lineWidth: 1,
            shadow: false,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            marker: {
              radius: 0,
              states: {
                hover: {
                  radius: 2
                }
              }
            },
            fillOpacity: 0.25
          },
          line: {
            animation: false,
            turboThreshold: 1e4,
            marker: {
              enabled: false,
              radius: 3.5,
              symbol: "circle"
            },
            dataGrouping: {
              enabled: true
            }
          }
        },
        rangeSelector: {
          enabled: true,
          buttons: [
            {
              type: "day",
              count: "7",
              text: "7d"
            },
            {
              type: "month",
              count: "1",
              text: "1m"
            },
            {
              type: "month",
              count: "3",
              text: "3m"
            },
            {
              type: "month",
              count: "6",
              text: "6m"
            },
            {
              type: "year",
              count: "1",
              text: "1y"
            },
            {
              type: "ytd",
              text: "YTD"
            },
            {
              type: "all",
              text: "ALL"
            }
          ],
          buttonTheme: {
            width: 20
          },
          inputBoxWidth: 70,
          inputBoxHeight: 16
        },
        scrollbar: {
          enabled: false
        },
        title: {
          align: "left",
          useHTML: true,
          widthAdjust: 0
        },
        tooltip: {
          hideDelay: 0,
          outside: false,
          shared: true,
          headerFormat: '<span class="itb-tooltip itb-tooltip--header">{point.key}</span>',
          pointFormatter() {
            const value = toDecimal(this.y);
            return `<div class="itb-tooltip">
              <span class="itb-tooltip__circle" style="color: ${this.color}">●</span>
              <span class="itb-tooltip__label">${this.series.name}:</span>
              <b>${numberFormatter.groupedPrice({ value })} ${this.dataGroup ? "(avg)" : ""}</b>
            </div>`;
          },
          xDateFormat: "%b %e %Y",
          backgroundColor: "transparent",
          shadow: false,
          borderWidth: 0,
          distance: -5,
          useHTML: true
        },
        responsive: {
          rules: [{
            condition: {
              maxWidth: "100%"
            }
          }]
        },
        xAxis: {
          type: "datetime",
          gridLineWidth: 0,
          labels: {
            align: "left",
            autoRotation: false
          },
          startOnTick: false,
          endOnTick: false,
          tickWidth: 0,
          tickLength: 0,
          lineWidth: 0
        },
        yAxis: [{
          opposite: false,
          labels: {
            formatter() {
              let formattedLabel;
              try {
                formattedLabel = numberFormatter.groupedPrice({ value: toDecimal(this.value) });
              } catch (e) {
                formattedLabel = this.value;
              }
              return formattedLabel;
            },
            align: "left",
            x: 0
          }
        }, {
          opposite: true,
          labels: {
            formatter() {
              return numberFormatter.price({ value: toDecimal(this.value), currencySymbol: "$", decimals: 0 });
            },
            align: "right",
            x: 0
          }
        }],
        accessibility: {
          enabled: false
        }
      }
    };
  },
  computed: {
    isMobile() {
      return this.$isSmall.value || this.$isMedium.value;
    }
  },
  mounted() {
    Object.assign(this.chartOptions, this.customChartOptions, this.chartOptions);
  },
  async created() {
    Highcharts$1.seriesTypes.line.prototype.drawLegendSymbol = Highcharts$1.seriesTypes.column.prototype.drawLegendSymbol;
    if (this.isStockChart) {
      stockInit(Highcharts$1);
    }
    try {
      let responseData = {};
      if (this.responseData) {
        responseData = await new Promise((resolve) => resolve(this.responseData));
      } else {
        responseData = await IntoTheBlockApi.get(this.asset, this.urlName, this.urlQueryParams);
      }
      const parsedData = parse(this.parseFunction, responseData);
      if (!parsedData) {
        this.$emit("dataUnavailable");
        return;
      }
      this.$emit("dataLoaded", responseData);
      for (let i = 0; i < parsedData.length; i++) {
        this.chartOptions.series[i].data = parsedData[i];
      }
      if (this.chartOptions.navigator) {
        this.chartOptions.navigator.series = buildNavigatorSeries(this.chartOptions.series);
      }
      if (this.chartGeneratedOptionsFunction) {
        this.chartOptions = this.chartGeneratedOptionsFunction(responseData, this.chartOptions, { isMobile: this.isMobile });
      }
      if (!this.isStockChart) {
        this.chartOptions.rangeSelector.enabled = false;
      }
      this.reflowChart();
    } catch (e) {
      this.$emit("dataUnavailable");
      this.$errorTracking.trackException(e);
    }
  },
  methods: {
    reflowChart() {
      var _a;
      if ((_a = this.$refs.chartRef) == null ? void 0 : _a.chart) {
        this.$nextTick(() => {
          this.$refs.chartRef.chart.reflow();
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HighCharts = resolveComponent("HighCharts");
  return openBlock(), createBlock(_component_HighCharts, {
    ref: "chartRef",
    class: "itb-graph",
    "constructor-type": $props.isStockChart ? "stockChart" : void 0,
    options: $data.chartOptions,
    "update-args": $data.updateArgs
  }, null, 8, ["constructor-type", "options", "update-args"]);
}
const ITBGraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cea0d1ba"]]);
export {
  ITBGraph as I,
  InsightPanelWrapper as a,
  InsightHighlights as b,
  IntoTheBlockApi as c,
  parse as p,
  stockInit as s
};
