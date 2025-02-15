﻿import { e0 as requireHighcharts, bc as getDefaultExportFromCjs } from "./BEpVD-aq.js";
var highchartsExports = requireHighcharts();
const Highcharts$1 = /* @__PURE__ */ getDefaultExportFromCjs(highchartsExports);
var highchartsMore$1 = { exports: {} };
(function(module) {
  !/**
  * Highcharts JS v11.4.8 (2024-08-29)
  *
  * (c) 2009-2024 Torstein Honsi
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
    i(e, "Extensions/Pane/PaneComposition.js", [e["Core/Utilities.js"]], function(t2) {
      let { addEvent: e2, correctFloat: i2, defined: s, pick: o } = t2;
      function a(t3) {
        let e3;
        let i3 = this;
        return t3 && i3.pane.forEach((s2) => {
          r(t3.chartX - i3.plotLeft, t3.chartY - i3.plotTop, s2.center) && (e3 = s2);
        }), e3;
      }
      function r(t3, e3, o2, a2, r2) {
        let n2 = true, l2 = o2[0], h2 = o2[1], p = Math.sqrt(Math.pow(t3 - l2, 2) + Math.pow(e3 - h2, 2));
        if (s(a2) && s(r2)) {
          let s2 = Math.atan2(i2(e3 - h2, 8), i2(t3 - l2, 8));
          r2 !== a2 && (n2 = a2 > r2 ? s2 >= a2 && s2 <= Math.PI || s2 <= r2 && s2 >= -Math.PI : s2 >= a2 && s2 <= i2(r2, 8));
        }
        return p <= Math.ceil(o2[2] / 2) && n2;
      }
      function n(t3) {
        this.polar && (t3.options.inverted && ([t3.x, t3.y] = [t3.y, t3.x]), t3.isInsidePlot = this.pane.some((e3) => r(t3.x, t3.y, e3.center, e3.axis && e3.axis.normalizedStartAngleRad, e3.axis && e3.axis.normalizedEndAngleRad)));
      }
      function l(t3) {
        let e3 = this.chart;
        t3.hoverPoint && t3.hoverPoint.plotX && t3.hoverPoint.plotY && e3.hoverPane && !r(t3.hoverPoint.plotX, t3.hoverPoint.plotY, e3.hoverPane.center) && (t3.hoverPoint = void 0);
      }
      function h(t3) {
        let e3 = this.chart;
        e3.polar ? (e3.hoverPane = e3.getHoverPane(t3), t3.filter = function(i3) {
          return i3.visible && !(!t3.shared && i3.directTouch) && o(i3.options.enableMouseTracking, true) && (!e3.hoverPane || i3.xAxis.pane === e3.hoverPane);
        }) : e3.hoverPane = void 0;
      }
      return { compose: function(t3, i3) {
        let s2 = t3.prototype;
        s2.getHoverPane || (s2.collectionsWithUpdate.push("pane"), s2.getHoverPane = a, e2(t3, "afterIsInsidePlot", n), e2(i3, "afterGetHoverData", l), e2(i3, "beforeGetHoverData", h));
      } };
    }), i(e, "Extensions/Pane/PaneDefaults.js", [], function() {
      return { pane: { center: ["50%", "50%"], size: "85%", innerSize: "0%", startAngle: 0 }, background: { shape: "circle", borderRadius: 0, borderWidth: 1, borderColor: "#cccccc", backgroundColor: { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, "#ffffff"], [1, "#e6e6e6"]] }, from: -Number.MAX_VALUE, innerRadius: 0, to: Number.MAX_VALUE, outerRadius: "105%" } };
    }), i(e, "Extensions/Pane/Pane.js", [e["Series/CenteredUtilities.js"], e["Extensions/Pane/PaneComposition.js"], e["Extensions/Pane/PaneDefaults.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { extend: o, merge: a, splat: r } = s;
      class n {
        constructor(t3, e3) {
          this.coll = "pane", this.init(t3, e3);
        }
        init(t3, e3) {
          this.chart = e3, this.background = [], e3.pane.push(this), this.setOptions(t3);
        }
        setOptions(t3) {
          this.options = t3 = a(i2.pane, this.chart.angular ? { background: {} } : void 0, t3);
        }
        render() {
          let t3 = this.options, e3 = this.chart.renderer;
          this.group || (this.group = e3.g("pane-group").attr({ zIndex: t3.zIndex || 0 }).add()), this.updateCenter();
          let s2 = this.options.background;
          if (s2) {
            let t4 = Math.max((s2 = r(s2)).length, this.background.length || 0);
            for (let e4 = 0; e4 < t4; e4++) s2[e4] && this.axis ? this.renderBackground(a(i2.background, s2[e4]), e4) : this.background[e4] && (this.background[e4] = this.background[e4].destroy(), this.background.splice(e4, 1));
          }
        }
        renderBackground(t3, e3) {
          let i3 = { class: "highcharts-pane " + (t3.className || "") }, s2 = "animate";
          this.chart.styledMode || o(i3, { fill: t3.backgroundColor, stroke: t3.borderColor, "stroke-width": t3.borderWidth }), this.background[e3] || (this.background[e3] = this.chart.renderer.path().add(this.group), s2 = "attr"), this.background[e3][s2]({ d: this.axis.getPlotBandPath(t3.from, t3.to, t3) }).attr(i3);
        }
        updateCenter(e3) {
          this.center = (e3 || this.axis || {}).center = t2.getCenter.call(this);
        }
        update(t3, e3) {
          a(true, this.options, t3), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(t4) {
            t4.pane === this && (t4.pane = null, t4.update({}, e3));
          }, this);
        }
      }
      return n.compose = e2.compose, n;
    }), i(e, "Series/AreaRange/AreaRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { area: { prototype: { pointClass: i2, pointClass: { prototype: s } } } } = t2.seriesTypes, { defined: o, isNumber: a } = e2;
      return class extends i2 {
        setState() {
          let t3 = this.state, e3 = this.series, i3 = e3.chart.polar;
          o(this.plotHigh) || (this.plotHigh = e3.yAxis.toPixels(this.high, true)), o(this.plotLow) || (this.plotLow = this.plotY = e3.yAxis.toPixels(this.low, true)), e3.lowerStateMarkerGraphic = e3.stateMarkerGraphic, e3.stateMarkerGraphic = e3.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, i3 && a(this.plotHighX) && (this.plotX = this.plotHighX), s.setState.apply(this, arguments), this.state = t3, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], i3 && a(this.plotLowX) && (this.plotX = this.plotLowX), e3.upperStateMarkerGraphic = e3.stateMarkerGraphic, e3.stateMarkerGraphic = e3.lowerStateMarkerGraphic, e3.lowerStateMarkerGraphic = void 0;
          let r = e3.modifyMarkerSettings();
          s.setState.apply(this, arguments), e3.restoreMarkerSettings(r);
        }
        haloPath() {
          let t3 = this.series.chart.polar, e3 = [];
          return this.plotY = this.plotLow, t3 && a(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (e3 = s.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, t3 && a(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (e3 = e3.concat(s.haloPath.apply(this, arguments))), e3;
        }
        isValid() {
          return a(this.low) && a(this.high);
        }
      };
    }), i(e, "Series/AreaRange/AreaRangeSeries.js", [e["Series/AreaRange/AreaRangePoint.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { noop: o } = e2, { area: a, area: { prototype: r }, column: { prototype: n } } = i2.seriesTypes, { addEvent: l, defined: h, extend: p, isArray: d, isNumber: c, pick: u, merge: g } = s;
      class f extends a {
        toYData(t3) {
          return [t3.low, t3.high];
        }
        highToXY(t3) {
          let e3 = this.chart, i3 = this.xAxis.postTranslate(t3.rectPlotX || 0, this.yAxis.len - (t3.plotHigh || 0));
          t3.plotHighX = i3.x - e3.plotLeft, t3.plotHigh = i3.y - e3.plotTop, t3.plotLowX = t3.plotX;
        }
        getGraphPath(t3) {
          let e3 = [], i3 = [], s2 = r.getGraphPath, o2 = this.options, a2 = this.chart.polar, n2 = a2 && false !== o2.connectEnds, l2 = o2.connectNulls, h2, p2, d2, c2 = o2.step;
          for (h2 = (t3 = t3 || this.points).length; h2--; ) {
            p2 = t3[h2];
            let s3 = a2 ? { plotX: p2.rectPlotX, plotY: p2.yBottom, doCurve: false } : { plotX: p2.plotX, plotY: p2.plotY, doCurve: false };
            p2.isNull || n2 || l2 || t3[h2 + 1] && !t3[h2 + 1].isNull || i3.push(s3), d2 = { polarPlotY: p2.polarPlotY, rectPlotX: p2.rectPlotX, yBottom: p2.yBottom, plotX: u(p2.plotHighX, p2.plotX), plotY: p2.plotHigh, isNull: p2.isNull }, i3.push(d2), e3.push(d2), p2.isNull || n2 || l2 || t3[h2 - 1] && !t3[h2 - 1].isNull || i3.push(s3);
          }
          let g2 = s2.call(this, t3);
          c2 && (true === c2 && (c2 = "left"), o2.step = { left: "right", center: "center", right: "left" }[c2]);
          let f2 = s2.call(this, e3), b = s2.call(this, i3);
          o2.step = c2;
          let m = [].concat(g2, f2);
          return !this.chart.polar && b[0] && "M" === b[0][0] && (b[0] = ["L", b[0][1], b[0][2]]), this.graphPath = m, this.areaPath = g2.concat(b), m.isArea = true, m.xMap = g2.xMap, this.areaPath.xMap = g2.xMap, m;
        }
        drawDataLabels() {
          var _a, _b;
          let t3, e3, i3, s2, o2;
          let a2 = this.points, n2 = a2.length, l2 = [], h2 = this.options.dataLabels, c2 = this.chart.inverted;
          if (h2) {
            if (d(h2) ? (s2 = h2[0] || { enabled: false }, o2 = h2[1] || { enabled: false }) : ((s2 = p({}, h2)).x = h2.xHigh, s2.y = h2.yHigh, (o2 = p({}, h2)).x = h2.xLow, o2.y = h2.yLow), s2.enabled || ((_a = this.hasDataLabels) == null ? void 0 : _a.call(this))) {
              for (t3 = n2; t3--; ) if (e3 = a2[t3]) {
                let { plotHigh: o3 = 0, plotLow: a3 = 0 } = e3;
                i3 = s2.inside ? o3 < a3 : o3 > a3, e3.y = e3.high, e3._plotY = e3.plotY, e3.plotY = o3, l2[t3] = e3.dataLabel, e3.dataLabel = e3.dataLabelUpper, e3.below = i3, c2 ? s2.align || (s2.align = i3 ? "right" : "left") : s2.verticalAlign || (s2.verticalAlign = i3 ? "top" : "bottom");
              }
              for (this.options.dataLabels = s2, r.drawDataLabels && r.drawDataLabels.apply(this, arguments), t3 = n2; t3--; ) (e3 = a2[t3]) && (e3.dataLabelUpper = e3.dataLabel, e3.dataLabel = l2[t3], delete e3.dataLabels, e3.y = e3.low, e3.plotY = e3._plotY);
            }
            if (o2.enabled || ((_b = this.hasDataLabels) == null ? void 0 : _b.call(this))) {
              for (t3 = n2; t3--; ) if (e3 = a2[t3]) {
                let { plotHigh: t4 = 0, plotLow: s3 = 0 } = e3;
                i3 = o2.inside ? t4 < s3 : t4 > s3, e3.below = !i3, c2 ? o2.align || (o2.align = i3 ? "left" : "right") : o2.verticalAlign || (o2.verticalAlign = i3 ? "bottom" : "top");
              }
              this.options.dataLabels = o2, r.drawDataLabels && r.drawDataLabels.apply(this, arguments);
            }
            if (s2.enabled) for (t3 = n2; t3--; ) (e3 = a2[t3]) && (e3.dataLabels = [e3.dataLabelUpper, e3.dataLabel].filter(function(t4) {
              return !!t4;
            }));
            this.options.dataLabels = h2;
          }
        }
        alignDataLabel() {
          n.alignDataLabel.apply(this, arguments);
        }
        modifyMarkerSettings() {
          let t3 = { marker: this.options.marker, symbol: this.symbol };
          if (this.options.lowMarker) {
            let { options: { marker: t4, lowMarker: e3 } } = this;
            this.options.marker = g(t4, e3), e3.symbol && (this.symbol = e3.symbol);
          }
          return t3;
        }
        restoreMarkerSettings(t3) {
          this.options.marker = t3.marker, this.symbol = t3.symbol;
        }
        drawPoints() {
          let t3, e3;
          let i3 = this.points.length, s2 = this.modifyMarkerSettings();
          for (r.drawPoints.apply(this, arguments), this.restoreMarkerSettings(s2), t3 = 0; t3 < i3; ) (e3 = this.points[t3]).graphics = e3.graphics || [], e3.origProps = { plotY: e3.plotY, plotX: e3.plotX, isInside: e3.isInside, negative: e3.negative, zone: e3.zone, y: e3.y }, (e3.graphic || e3.graphics[0]) && (e3.graphics[0] = e3.graphic), e3.graphic = e3.graphics[1], e3.plotY = e3.plotHigh, h(e3.plotHighX) && (e3.plotX = e3.plotHighX), e3.y = u(e3.high, e3.origProps.y), e3.negative = e3.y < (this.options.threshold || 0), this.zones.length && (e3.zone = e3.getZone()), this.chart.polar || (e3.isInside = e3.isTopInside = void 0 !== e3.plotY && e3.plotY >= 0 && e3.plotY <= this.yAxis.len && e3.plotX >= 0 && e3.plotX <= this.xAxis.len), t3++;
          for (r.drawPoints.apply(this, arguments), t3 = 0; t3 < i3; ) (e3 = this.points[t3]).graphics = e3.graphics || [], (e3.graphic || e3.graphics[1]) && (e3.graphics[1] = e3.graphic), e3.graphic = e3.graphics[0], e3.origProps && (p(e3, e3.origProps), delete e3.origProps), t3++;
        }
        hasMarkerChanged(t3, e3) {
          let i3 = t3.lowMarker, s2 = e3.lowMarker || {};
          return i3 && (false === i3.enabled || s2.symbol !== i3.symbol || s2.height !== i3.height || s2.width !== i3.width) || super.hasMarkerChanged(t3, e3);
        }
      }
      return f.defaultOptions = g(a.defaultOptions, { lineWidth: 1, threshold: null, tooltip: { pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>' }, trackByArea: true, dataLabels: { align: void 0, verticalAlign: void 0, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0 } }), l(f, "afterTranslate", function() {
        "low,high" === this.pointArrayMap.join(",") && this.points.forEach((t3) => {
          let e3 = t3.high, i3 = t3.plotY;
          t3.isNull ? t3.plotY = void 0 : (t3.plotLow = i3, t3.plotHigh = c(e3) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(e3) : e3, false, true, void 0, true) : void 0, this.dataModify && (t3.yBottom = t3.plotHigh));
        });
      }, { order: 0 }), l(f, "afterTranslate", function() {
        this.points.forEach((t3) => {
          if (this.chart.polar) this.highToXY(t3), t3.plotLow = t3.plotY, t3.tooltipPos = [((t3.plotHighX || 0) + (t3.plotLowX || 0)) / 2, ((t3.plotHigh || 0) + (t3.plotLow || 0)) / 2];
          else {
            let e3 = t3.pos(false, t3.plotLow), i3 = t3.pos(false, t3.plotHigh);
            e3 && i3 && (e3[0] = (e3[0] + i3[0]) / 2, e3[1] = (e3[1] + i3[1]) / 2), t3.tooltipPos = e3;
          }
        });
      }, { order: 3 }), p(f.prototype, { deferTranslatePolar: true, pointArrayMap: ["low", "high"], pointClass: t2, pointValKey: "low", setStackedPoints: o }), i2.registerSeriesType("arearange", f), f;
    }), i(e, "Series/AreaSplineRange/AreaSplineRangeSeries.js", [e["Series/AreaRange/AreaRangeSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      let { spline: { prototype: s } } = e2.seriesTypes, { merge: o, extend: a } = i2;
      class r extends t2 {
      }
      return r.defaultOptions = o(t2.defaultOptions), a(r.prototype, { getPointSpline: s.getPointSpline }), e2.registerSeriesType("areasplinerange", r), r;
    }), i(e, "Series/BoxPlot/BoxPlotSeriesDefaults.js", [], function() {
      return { threshold: null, tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b>{series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>' }, whiskerLength: "50%", fillColor: "#ffffff", lineWidth: 1, medianWidth: 2, whiskerWidth: 2 };
    }), i(e, "Series/BoxPlot/BoxPlotSeries.js", [e["Series/BoxPlot/BoxPlotSeriesDefaults.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
      let { noop: a } = i2, { crisp: r, extend: n, merge: l, pick: h } = o;
      class p extends e2 {
        pointAttribs() {
          return {};
        }
        translate() {
          let t3 = this.yAxis, e3 = this.pointArrayMap;
          super.translate.apply(this), this.points.forEach(function(i3) {
            e3.forEach(function(e4) {
              null !== i3[e4] && (i3[e4 + "Plot"] = t3.translate(i3[e4], 0, 1, 0, 1));
            }), i3.plotHigh = i3.highPlot;
          });
        }
        drawPoints() {
          let t3, e3, i3, s2, o2, a2, n2, l2, p2, d, c, u, g;
          let f = this.points, b = this.options, m = this.chart, y = m.renderer, x = false !== this.doQuartiles, P = this.options.whiskerLength;
          for (let S of f) {
            let f2 = (l2 = S.graphic) ? "animate" : "attr", M = S.shapeArgs, L = {}, C = {}, k = {}, v = {}, A = S.color || this.color;
            if (void 0 !== S.plotY) {
              let w;
              p2 = M.width, c = (d = M.x) + p2, u = p2 / 2, t3 = x ? S.q1Plot : S.lowPlot, e3 = x ? S.q3Plot : S.lowPlot, i3 = S.highPlot, s2 = S.lowPlot, l2 || (S.graphic = l2 = y.g("point").add(this.group), S.stem = y.path().addClass("highcharts-boxplot-stem").add(l2), P && (S.whiskers = y.path().addClass("highcharts-boxplot-whisker").add(l2)), x && (S.box = y.path(n2).addClass("highcharts-boxplot-box").add(l2)), S.medianShape = y.path(a2).addClass("highcharts-boxplot-median").add(l2)), m.styledMode || (C.stroke = S.stemColor || b.stemColor || A, C["stroke-width"] = h(S.stemWidth, b.stemWidth, b.lineWidth), C.dashstyle = S.stemDashStyle || b.stemDashStyle || b.dashStyle, S.stem.attr(C), P && (k.stroke = S.whiskerColor || b.whiskerColor || A, k["stroke-width"] = h(S.whiskerWidth, b.whiskerWidth, b.lineWidth), k.dashstyle = S.whiskerDashStyle || b.whiskerDashStyle || b.dashStyle, S.whiskers.attr(k)), x && (L.fill = S.fillColor || b.fillColor || A, L.stroke = b.lineColor || A, L["stroke-width"] = b.lineWidth || 0, L.dashstyle = S.boxDashStyle || b.boxDashStyle || b.dashStyle, S.box.attr(L)), v.stroke = S.medianColor || b.medianColor || A, v["stroke-width"] = h(S.medianWidth, b.medianWidth, b.lineWidth), v.dashstyle = S.medianDashStyle || b.medianDashStyle || b.dashStyle, S.medianShape.attr(v));
              let T = r((S.plotX || 0) + (this.pointXOffset || 0) + (this.barW || 0) / 2, S.stem.strokeWidth());
              if (w = [["M", T, e3], ["L", T, i3], ["M", T, t3], ["L", T, s2]], S.stem[f2]({ d: w }), x) {
                let i4 = S.box.strokeWidth();
                t3 = r(t3, i4), e3 = r(e3, i4), w = [["M", d = r(d, i4), e3], ["L", d, t3], ["L", c = r(c, i4), t3], ["L", c, e3], ["L", d, e3], ["Z"]], S.box[f2]({ d: w });
              }
              if (P) {
                let t4 = S.whiskers.strokeWidth();
                i3 = r(S.highPlot, t4), s2 = r(S.lowPlot, t4), w = [["M", r(T - (g = "string" == typeof P && /%$/.test(P) ? u * parseFloat(P) / 100 : Number(P) / 2)), i3], ["L", r(T + g), i3], ["M", r(T - g), s2], ["L", r(T + g), s2]], S.whiskers[f2]({ d: w });
              }
              w = [["M", d, o2 = r(S.medianPlot, S.medianShape.strokeWidth())], ["L", c, o2]], S.medianShape[f2]({ d: w });
            }
          }
        }
        toYData(t3) {
          return [t3.low, t3.q1, t3.median, t3.q3, t3.high];
        }
      }
      return p.defaultOptions = l(e2.defaultOptions, t2), n(p.prototype, { pointArrayMap: ["low", "q1", "median", "q3", "high"], pointValKey: "high", drawDataLabels: a, setStackedPoints: a }), s.registerSeriesType("boxplot", p), p;
    }), i(e, "Series/Bubble/BubbleLegendDefaults.js", [], function() {
      return { borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: false, labels: { className: void 0, allowOverlap: false, format: "", formatter: void 0, align: "right", style: { fontSize: "0.9em", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: false, zIndex: 1, zThreshold: 0 };
    }), i(e, "Series/Bubble/BubbleLegendItem.js", [e["Core/Color/Color.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { parse: o } = t2, { noop: a } = i2, { arrayMax: r, arrayMin: n, isNumber: l, merge: h, pick: p, stableSort: d } = s;
      return class {
        constructor(t3, e3) {
          this.setState = a, this.init(t3, e3);
        }
        init(t3, e3) {
          this.options = t3, this.visible = true, this.chart = e3.chart, this.legend = e3;
        }
        addToLegend(t3) {
          t3.splice(this.options.legendIndex, 0, this);
        }
        drawLegendSymbol(t3) {
          let e3;
          let i3 = p(t3.options.itemDistance, 20), s2 = this.legendItem || {}, o2 = this.options, a2 = o2.ranges, r2 = o2.connectorDistance;
          if (!a2 || !a2.length || !l(a2[0].value)) {
            t3.options.bubbleLegend.autoRanges = true;
            return;
          }
          d(a2, function(t4, e4) {
            return e4.value - t4.value;
          }), this.ranges = a2, this.setOptions(), this.render();
          let n2 = this.getMaxLabelSize(), h2 = this.ranges[0].radius, c = 2 * h2;
          e3 = (e3 = r2 - h2 + n2.width) > 0 ? e3 : 0, this.maxLabel = n2, this.movementX = "left" === o2.labels.align ? e3 : 0, s2.labelWidth = c + e3 + i3, s2.labelHeight = c + n2.height / 2;
        }
        setOptions() {
          let t3 = this.ranges, e3 = this.options, i3 = this.chart.series[e3.seriesIndex], s2 = this.legend.baseline, a2 = { zIndex: e3.zIndex, "stroke-width": e3.borderWidth }, r2 = { zIndex: e3.zIndex, "stroke-width": e3.connectorWidth }, n2 = { align: this.legend.options.rtl || "left" === e3.labels.align ? "right" : "left", zIndex: e3.zIndex }, l2 = i3.options.marker.fillOpacity, d2 = this.chart.styledMode;
          t3.forEach(function(c, u) {
            d2 || (a2.stroke = p(c.borderColor, e3.borderColor, i3.color), a2.fill = p(c.color, e3.color, 1 !== l2 ? o(i3.color).setOpacity(l2).get("rgba") : i3.color), r2.stroke = p(c.connectorColor, e3.connectorColor, i3.color)), t3[u].radius = this.getRangeRadius(c.value), t3[u] = h(t3[u], { center: t3[0].radius - t3[u].radius + s2 }), d2 || h(true, t3[u], { bubbleAttribs: h(a2), connectorAttribs: h(r2), labelAttribs: n2 });
          }, this);
        }
        getRangeRadius(t3) {
          let e3 = this.options, i3 = this.options.seriesIndex, s2 = this.chart.series[i3], o2 = e3.ranges[0].value, a2 = e3.ranges[e3.ranges.length - 1].value, r2 = e3.minSize, n2 = e3.maxSize;
          return s2.getRadius.call(this, a2, o2, r2, n2, t3);
        }
        render() {
          let t3 = this.legendItem || {}, e3 = this.chart.renderer, i3 = this.options.zThreshold;
          for (let s2 of (this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }), t3.symbol = e3.g("bubble-legend"), t3.label = e3.g("bubble-legend-item").css(this.legend.itemStyle || {}), t3.symbol.translateX = 0, t3.symbol.translateY = 0, t3.symbol.add(t3.label), t3.label.add(t3.group), this.ranges)) s2.value >= i3 && this.renderRange(s2);
          this.hideOverlappingLabels();
        }
        renderRange(t3) {
          let e3 = this.ranges[0], i3 = this.legend, s2 = this.options, o2 = s2.labels, a2 = this.chart, r2 = a2.series[s2.seriesIndex], n2 = a2.renderer, l2 = this.symbols, h2 = l2.labels, p2 = t3.center, d2 = Math.abs(t3.radius), c = s2.connectorDistance || 0, u = o2.align, g = i3.options.rtl, f = s2.borderWidth, b = s2.connectorWidth, m = e3.radius || 0, y = p2 - d2 - f / 2 + b / 2, x = (y % 1 ? 1 : 0.5) - (b % 2 ? 0 : 0.5), P = n2.styledMode, S = g || "left" === u ? -c : c;
          "center" === u && (S = 0, s2.connectorDistance = 0, t3.labelAttribs.align = "center"), l2.bubbleItems.push(n2.circle(m, p2 + x, d2).attr(P ? {} : t3.bubbleAttribs).addClass((P ? "highcharts-color-" + r2.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (s2.className || "")).add(this.legendItem.symbol)), l2.connectors.push(n2.path(n2.crispLine([["M", m, y], ["L", m + S, y]], s2.connectorWidth)).attr(P ? {} : t3.connectorAttribs).addClass((P ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (s2.connectorClassName || "")).add(this.legendItem.symbol));
          let M = n2.text(this.formatLabel(t3)).attr(P ? {} : t3.labelAttribs).css(P ? {} : o2.style).addClass("highcharts-bubble-legend-labels " + (s2.labels.className || "")).add(this.legendItem.symbol), L = { x: m + S + s2.labels.x, y: y + s2.labels.y + 0.4 * M.getBBox().height };
          M.attr(L), h2.push(M), M.placed = true, M.alignAttr = L;
        }
        getMaxLabelSize() {
          let t3, e3;
          return this.symbols.labels.forEach(function(i3) {
            e3 = i3.getBBox(true), t3 = t3 ? e3.width > t3.width ? e3 : t3 : e3;
          }), t3 || {};
        }
        formatLabel(t3) {
          let i3 = this.options, s2 = i3.labels.formatter, o2 = i3.labels.format, { numberFormatter: a2 } = this.chart;
          return o2 ? e2.format(o2, t3) : s2 ? s2.call(t3) : a2(t3.value, 1);
        }
        hideOverlappingLabels() {
          let t3 = this.chart, e3 = this.options.labels.allowOverlap, i3 = this.symbols;
          !e3 && i3 && (t3.hideOverlappingLabels(i3.labels), i3.labels.forEach(function(t4, e4) {
            t4.newOpacity ? t4.newOpacity !== t4.oldOpacity && i3.connectors[e4].show() : i3.connectors[e4].hide();
          }));
        }
        getRanges() {
          let t3 = this.legend.bubbleLegend, e3 = t3.chart.series, i3 = t3.options.ranges, s2, o2, a2 = Number.MAX_VALUE, d2 = -Number.MAX_VALUE;
          return e3.forEach(function(t4) {
            t4.isBubble && !t4.ignoreSeries && (o2 = t4.zData.filter(l)).length && (a2 = p(t4.options.zMin, Math.min(a2, Math.max(n(o2), false === t4.options.displayNegative ? t4.options.zThreshold : -Number.MAX_VALUE))), d2 = p(t4.options.zMax, Math.max(d2, r(o2))));
          }), s2 = a2 === d2 ? [{ value: d2 }] : [{ value: a2 }, { value: (a2 + d2) / 2 }, { value: d2, autoRanges: true }], i3.length && i3[0].radius && s2.reverse(), s2.forEach(function(t4, e4) {
            i3 && i3[e4] && (s2[e4] = h(i3[e4], t4));
          }), s2;
        }
        predictBubbleSizes() {
          let t3 = this.chart, e3 = t3.legend.options, i3 = e3.floating, s2 = "horizontal" === e3.layout, o2 = s2 ? t3.legend.lastLineHeight : 0, a2 = t3.plotSizeX, r2 = t3.plotSizeY, n2 = t3.series[this.options.seriesIndex], l2 = n2.getPxExtremes(), h2 = Math.ceil(l2.minPxSize), p2 = Math.ceil(l2.maxPxSize), d2 = Math.min(r2, a2), c, u = n2.options.maxSize;
          return i3 || !/%$/.test(u) ? c = p2 : (c = (d2 + o2) * (u = parseFloat(u)) / 100 / (u / 100 + 1), (s2 && r2 - c >= a2 || !s2 && a2 - c >= r2) && (c = p2)), [h2, Math.ceil(c)];
        }
        updateRanges(t3, e3) {
          let i3 = this.legend.options.bubbleLegend;
          i3.minSize = t3, i3.maxSize = e3, i3.ranges = this.getRanges();
        }
        correctSizes() {
          let t3 = this.legend, e3 = this.chart.series[this.options.seriesIndex].getPxExtremes();
          Math.abs(Math.ceil(e3.maxPxSize) - this.options.maxSize) > 1 && (this.updateRanges(this.options.minSize, e3.maxPxSize), t3.render());
        }
      };
    }), i(e, "Series/Bubble/BubbleLegendComposition.js", [e["Series/Bubble/BubbleLegendDefaults.js"], e["Series/Bubble/BubbleLegendItem.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
      let { setOptions: a } = i2, { composed: r } = s, { addEvent: n, objectEach: l, pushUnique: h, wrap: p } = o;
      function d(t3, e3, i3) {
        let s2, o2, a2;
        let r2 = this.legend, n2 = c(this) >= 0;
        r2 && r2.options.enabled && r2.bubbleLegend && r2.options.bubbleLegend.autoRanges && n2 ? (s2 = r2.bubbleLegend.options, o2 = r2.bubbleLegend.predictBubbleSizes(), r2.bubbleLegend.updateRanges(o2[0], o2[1]), s2.placed || (r2.group.placed = false, r2.allItems.forEach((t4) => {
          (a2 = t4.legendItem || {}).group && (a2.group.translateY = void 0);
        })), r2.render(), s2.placed || (this.getMargins(), this.axes.forEach(function(t4) {
          t4.visible && t4.render(), s2.placed || (t4.setScale(), t4.updateNames(), l(t4.ticks, function(t5) {
            t5.isNew = true, t5.isNewLabel = true;
          }));
        }), this.getMargins()), s2.placed = true, t3.call(this, e3, i3), r2.bubbleLegend.correctSizes(), b(r2, u(r2))) : (t3.call(this, e3, i3), r2 && r2.options.enabled && r2.bubbleLegend && (r2.render(), b(r2, u(r2))));
      }
      function c(t3) {
        let e3 = t3.series, i3 = 0;
        for (; i3 < e3.length; ) {
          if (e3[i3] && e3[i3].isBubble && e3[i3].visible && e3[i3].zData.length) return i3;
          i3++;
        }
        return -1;
      }
      function u(t3) {
        let e3 = t3.allItems, i3 = [], s2 = e3.length, o2, a2, r2, n2 = 0, l2 = 0;
        for (n2 = 0; n2 < s2; n2++) if (a2 = e3[n2].legendItem || {}, r2 = (e3[n2 + 1] || {}).legendItem || {}, a2.labelHeight && (e3[n2].itemHeight = a2.labelHeight), e3[n2] === e3[s2 - 1] || a2.y !== r2.y) {
          for (i3.push({ height: 0 }), o2 = i3[i3.length - 1]; l2 <= n2; l2++) e3[l2].itemHeight > o2.height && (o2.height = e3[l2].itemHeight);
          o2.step = n2;
        }
        return i3;
      }
      function g(t3) {
        let i3 = this.bubbleLegend, s2 = this.options, o2 = s2.bubbleLegend, a2 = c(this.chart);
        i3 && i3.ranges && i3.ranges.length && (o2.ranges.length && (o2.autoRanges = !!o2.ranges[0].autoRanges), this.destroyItem(i3)), a2 >= 0 && s2.enabled && o2.enabled && (o2.seriesIndex = a2, this.bubbleLegend = new e2(o2, this), this.bubbleLegend.addToLegend(t3.allItems));
      }
      function f(t3) {
        let e3;
        if (t3.defaultPrevented) return false;
        let i3 = t3.legendItem, s2 = this.chart, o2 = i3.visible;
        this && this.bubbleLegend && (i3.visible = !o2, i3.ignoreSeries = o2, e3 = c(s2) >= 0, this.bubbleLegend.visible !== e3 && (this.update({ bubbleLegend: { enabled: e3 } }), this.bubbleLegend.visible = e3), i3.visible = o2);
      }
      function b(t3, e3) {
        let i3 = t3.allItems, s2 = t3.options.rtl, o2, a2, r2, n2, l2 = 0;
        i3.forEach((t4, i4) => {
          (n2 = t4.legendItem || {}).group && (o2 = n2.group.translateX || 0, a2 = n2.y || 0, ((r2 = t4.movementX) || s2 && t4.ranges) && (r2 = s2 ? o2 - t4.options.maxSize / 2 : o2 + r2, n2.group.attr({ translateX: r2 })), i4 > e3[l2].step && l2++, n2.group.attr({ translateY: Math.round(a2 + e3[l2].height / 2) }), n2.y = a2 + e3[l2].height / 2);
        });
      }
      return { compose: function(e3, i3) {
        h(r, "Series.BubbleLegend") && (a({ legend: { bubbleLegend: t2 } }), p(e3.prototype, "drawChartBox", d), n(i3, "afterGetAllItems", g), n(i3, "itemClick", f));
      } };
    }), i(e, "Series/Bubble/BubblePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      let { seriesTypes: { scatter: { prototype: { pointClass: s } } } } = e2, { extend: o } = i2;
      class a extends s {
        haloPath(e3) {
          let i3 = (e3 && this.marker && this.marker.radius || 0) + e3;
          if (this.series.chart.inverted) {
            let t3 = this.pos() || [0, 0], { xAxis: e4, yAxis: s2, chart: o2 } = this.series;
            return o2.renderer.symbols.circle(e4.len - t3[1] - i3, s2.len - t3[0] - i3, 2 * i3, 2 * i3);
          }
          return t2.prototype.haloPath.call(this, i3);
        }
      }
      return o(a.prototype, { ttBelow: false }), a;
    }), i(e, "Series/Bubble/BubbleSeries.js", [e["Series/Bubble/BubbleLegendComposition.js"], e["Series/Bubble/BubblePoint.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, a) {
      let { parse: r } = i2, { composed: n, noop: l } = s, { series: h, seriesTypes: { column: { prototype: p }, scatter: d } } = o, { addEvent: c, arrayMax: u, arrayMin: g, clamp: f, extend: b, isNumber: m, merge: y, pick: x, pushUnique: P } = a;
      function S() {
        let t3 = this.len, { coll: e3, isXAxis: i3, min: s2 } = this, o2 = i3 ? "xData" : "yData", a2 = (this.max || 0) - (s2 || 0), r2 = 0, n2 = t3, l2 = t3 / a2, h2;
        ("xAxis" === e3 || "yAxis" === e3) && (this.series.forEach((t4) => {
          if (t4.bubblePadding && t4.reserveSpace()) {
            this.allowZoomOutside = true, h2 = true;
            let e4 = t4[o2];
            if (i3 && ((t4.onPoint || t4).getRadii(0, 0, t4), t4.onPoint && (t4.radii = t4.onPoint.radii)), a2 > 0) {
              let i4 = e4.length;
              for (; i4--; ) if (m(e4[i4]) && this.dataMin <= e4[i4] && e4[i4] <= this.max) {
                let o3 = t4.radii && t4.radii[i4] || 0;
                r2 = Math.min((e4[i4] - s2) * l2 - o3, r2), n2 = Math.max((e4[i4] - s2) * l2 + o3, n2);
              }
            }
          }
        }), h2 && a2 > 0 && !this.logarithmic && (n2 -= t3, l2 *= (t3 + Math.max(0, r2) - Math.min(n2, t3)) / t3, [["min", "userMin", r2], ["max", "userMax", n2]].forEach((t4) => {
          void 0 === x(this.options[t4[0]], this[t4[1]]) && (this[t4[0]] += t4[2] / l2);
        })));
      }
      class M extends d {
        static compose(e3, i3, s2) {
          t2.compose(i3, s2), P(n, "Series.Bubble") && c(e3, "foundExtremes", S);
        }
        animate(t3) {
          !t3 && this.points.length < this.options.animationLimit && this.points.forEach(function(t4) {
            let { graphic: e3, plotX: i3 = 0, plotY: s2 = 0 } = t4;
            e3 && e3.width && (this.hasRendered || e3.attr({ x: i3, y: s2, width: 1, height: 1 }), e3.animate(this.markerAttribs(t4), this.options.animation));
          }, this);
        }
        getRadii() {
          let t3 = this.zData, e3 = this.yData, i3 = [], s2, o2, a2, r2 = this.chart.bubbleZExtremes, { minPxSize: n2, maxPxSize: l2 } = this.getPxExtremes();
          if (!r2) {
            let t4, e4 = Number.MAX_VALUE, i4 = -Number.MAX_VALUE;
            this.chart.series.forEach((s3) => {
              if (s3.bubblePadding && s3.reserveSpace()) {
                let o3 = (s3.onPoint || s3).getZExtremes();
                o3 && (e4 = Math.min(x(e4, o3.zMin), o3.zMin), i4 = Math.max(x(i4, o3.zMax), o3.zMax), t4 = true);
              }
            }), t4 ? (r2 = { zMin: e4, zMax: i4 }, this.chart.bubbleZExtremes = r2) : r2 = { zMin: 0, zMax: 0 };
          }
          for (o2 = 0, s2 = t3.length; o2 < s2; o2++) a2 = t3[o2], i3.push(this.getRadius(r2.zMin, r2.zMax, n2, l2, a2, e3 && e3[o2]));
          this.radii = i3;
        }
        getRadius(t3, e3, i3, s2, o2, a2) {
          let r2 = this.options, n2 = "width" !== r2.sizeBy, l2 = r2.zThreshold, h2 = e3 - t3, p2 = 0.5;
          if (null === a2 || null === o2) return null;
          if (m(o2)) {
            if (r2.sizeByAbsoluteValue && (o2 = Math.abs(o2 - l2), e3 = h2 = Math.max(e3 - l2, Math.abs(t3 - l2)), t3 = 0), o2 < t3) return i3 / 2 - 1;
            h2 > 0 && (p2 = (o2 - t3) / h2);
          }
          return n2 && p2 >= 0 && (p2 = Math.sqrt(p2)), Math.ceil(i3 + p2 * (s2 - i3)) / 2;
        }
        hasData() {
          return !!this.processedXData.length;
        }
        markerAttribs(t3, e3) {
          let i3 = super.markerAttribs(t3, e3), { height: s2 = 0, width: o2 = 0 } = i3;
          return this.chart.inverted ? b(i3, { x: (t3.plotX || 0) - o2 / 2, y: (t3.plotY || 0) - s2 / 2 }) : i3;
        }
        pointAttribs(t3, e3) {
          let i3 = this.options.marker.fillOpacity, s2 = h.prototype.pointAttribs.call(this, t3, e3);
          return 1 !== i3 && (s2.fill = r(s2.fill).setOpacity(i3).get("rgba")), s2;
        }
        translate() {
          super.translate.call(this), this.getRadii(), this.translateBubble();
        }
        translateBubble() {
          let { data: t3, options: e3, radii: i3 } = this, { minPxSize: s2 } = this.getPxExtremes(), o2 = t3.length;
          for (; o2--; ) {
            let a2 = t3[o2], r2 = i3 ? i3[o2] : 0;
            "z" === this.zoneAxis && (a2.negative = (a2.z || 0) < (e3.zThreshold || 0)), m(r2) && r2 >= s2 / 2 ? (a2.marker = b(a2.marker, { radius: r2, width: 2 * r2, height: 2 * r2 }), a2.dlBox = { x: a2.plotX - r2, y: a2.plotY - r2, width: 2 * r2, height: 2 * r2 }) : (a2.shapeArgs = a2.plotY = a2.dlBox = void 0, a2.isInside = false);
          }
        }
        getPxExtremes() {
          let t3 = Math.min(this.chart.plotWidth, this.chart.plotHeight), e3 = (e4) => {
            let i4;
            return "string" == typeof e4 && (i4 = /%$/.test(e4), e4 = parseInt(e4, 10)), i4 ? t3 * e4 / 100 : e4;
          }, i3 = e3(x(this.options.minSize, 8)), s2 = Math.max(e3(x(this.options.maxSize, "20%")), i3);
          return { minPxSize: i3, maxPxSize: s2 };
        }
        getZExtremes() {
          let t3 = this.options, e3 = (this.zData || []).filter(m);
          if (e3.length) {
            let i3 = x(t3.zMin, f(g(e3), false === t3.displayNegative ? t3.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)), s2 = x(t3.zMax, u(e3));
            if (m(i3) && m(s2)) return { zMin: i3, zMax: s2 };
          }
        }
      }
      return M.defaultOptions = y(d.defaultOptions, { dataLabels: { formatter: function() {
        let { numberFormatter: t3 } = this.series.chart, { z: e3 } = this.point;
        return m(e3) ? t3(e3, -1) : "";
      }, inside: true, verticalAlign: "middle" }, animationLimit: 250, marker: { lineColor: null, lineWidth: 1, fillOpacity: 0.5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle" }, minSize: 8, maxSize: "20%", softThreshold: false, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z" }), b(M.prototype, { alignDataLabel: p.alignDataLabel, applyZones: l, bubblePadding: true, isBubble: true, pointArrayMap: ["y", "z"], pointClass: e2, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", zoneAxis: "z" }), c(M, "updatedData", (t3) => {
        delete t3.target.chart.bubbleZExtremes;
      }), c(M, "remove", (t3) => {
        delete t3.target.chart.bubbleZExtremes;
      }), o.registerSeriesType("bubble", M), M;
    }), i(e, "Series/ColumnRange/ColumnRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { seriesTypes: { column: { prototype: { pointClass: { prototype: i2 } } }, arearange: { prototype: { pointClass: s } } } } = t2, { extend: o, isNumber: a } = e2;
      class r extends s {
        isValid() {
          return a(this.low);
        }
      }
      return o(r.prototype, { setState: i2.setState }), r;
    }), i(e, "Series/ColumnRange/ColumnRangeSeries.js", [e["Series/ColumnRange/ColumnRangePoint.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { noop: o } = e2, { seriesTypes: { arearange: a, column: r, column: { prototype: n } } } = i2, { addEvent: l, clamp: h, extend: p, isNumber: d, merge: c, pick: u } = s;
      class g extends a {
        setOptions() {
          return c(true, arguments[0], { stacking: void 0 }), a.prototype.setOptions.apply(this, arguments);
        }
        translate() {
          return n.translate.apply(this);
        }
        pointAttribs() {
          return n.pointAttribs.apply(this, arguments);
        }
        translate3dPoints() {
          return n.translate3dPoints.apply(this, arguments);
        }
        translate3dShapes() {
          return n.translate3dShapes.apply(this, arguments);
        }
        afterColumnTranslate() {
          let t3, e3, i3, s2;
          let o2 = this.yAxis, a2 = this.xAxis, r2 = a2.startAngleRad, n2 = this.chart, l2 = this.xAxis.isRadial, p2 = Math.max(n2.chartWidth, n2.chartHeight) + 999;
          this.points.forEach((g2) => {
            let f = g2.shapeArgs || {}, b = this.options.minPointLength, m = g2.plotY, y = o2.translate(g2.high, 0, 1, 0, 1);
            if (d(y) && d(m)) {
              if (g2.plotHigh = h(y, -p2, p2), g2.plotLow = h(m, -p2, p2), s2 = g2.plotHigh, Math.abs(t3 = u(g2.rectPlotY, g2.plotY) - g2.plotHigh) < b ? (e3 = b - t3, t3 += e3, s2 -= e3 / 2) : t3 < 0 && (t3 *= -1, s2 -= t3), l2 && this.polar) i3 = g2.barX + r2, g2.shapeType = "arc", g2.shapeArgs = this.polar.arc(s2 + t3, s2, i3, i3 + g2.pointWidth);
              else {
                f.height = t3, f.y = s2;
                let { x: e4 = 0, width: i4 = 0 } = f;
                g2.shapeArgs = c(g2.shapeArgs, this.crispCol(e4, s2, i4, t3)), g2.tooltipPos = n2.inverted ? [o2.len + o2.pos - n2.plotLeft - s2 - t3 / 2, a2.len + a2.pos - n2.plotTop - e4 - i4 / 2, t3] : [a2.left - n2.plotLeft + e4 + i4 / 2, o2.pos - n2.plotTop + s2 + t3 / 2, t3];
              }
            }
          });
        }
      }
      return g.defaultOptions = c(r.defaultOptions, a.defaultOptions, { borderRadius: { where: "all" }, pointRange: null, legendSymbol: "rectangle", marker: null, states: { hover: { halo: false } } }), l(g, "afterColumnTranslate", function() {
        g.prototype.afterColumnTranslate.apply(this);
      }, { order: 5 }), p(g.prototype, { directTouch: true, pointClass: t2, trackerGroups: ["group", "dataLabelsGroup"], adjustForMissingColumns: n.adjustForMissingColumns, animate: n.animate, crispCol: n.crispCol, drawGraph: o, drawPoints: n.drawPoints, getSymbol: o, drawTracker: n.drawTracker, getColumnMetrics: n.getColumnMetrics }), i2.registerSeriesType("columnrange", g), g;
    }), i(e, "Series/ColumnPyramid/ColumnPyramidSeriesDefaults.js", [], function() {
      return {};
    }), i(e, "Series/ColumnPyramid/ColumnPyramidSeries.js", [e["Series/ColumnPyramid/ColumnPyramidSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      let { column: s } = e2.seriesTypes, { clamp: o, merge: a, pick: r } = i2;
      class n extends s {
        translate() {
          let t3 = this.chart, e3 = this.options, i3 = this.dense = this.closestPointRange * this.xAxis.transA < 2, s2 = this.borderWidth = r(e3.borderWidth, i3 ? 0 : 1), a2 = this.yAxis, n2 = e3.threshold, l = r(e3.minPointLength, 5), h = this.getColumnMetrics(), p = h.width, d = this.pointXOffset = h.offset, c = this.translatedThreshold = a2.getThreshold(n2), u = this.barW = Math.max(p, 1 + 2 * s2);
          for (let i4 of (t3.inverted && (c -= 0.5), e3.pointPadding && (u = Math.ceil(u)), super.translate(), this.points)) {
            let s3 = r(i4.yBottom, c), g = 999 + Math.abs(s3), f = o(i4.plotY, -g, a2.len + g), b = u / 2, m = Math.min(f, s3), y = Math.max(f, s3) - m, x = i4.plotX + d, P, S, M, L, C, k, v, A, w, T, N;
            e3.centerInCategory && (x = this.adjustForMissingColumns(x, p, i4, h)), i4.barX = x, i4.pointWidth = p, i4.tooltipPos = t3.inverted ? [a2.len + a2.pos - t3.plotLeft - f, this.xAxis.len - x - b, y] : [x + b, f + a2.pos - t3.plotTop, y], P = n2 + (i4.total || i4.y), "percent" === e3.stacking && (P = n2 + (i4.y < 0) ? -100 : 100);
            let X = a2.toPixels(P, true);
            M = (S = t3.plotHeight - X - (t3.plotHeight - c)) ? b * (m - X) / S : 0, L = S ? b * (m + y - X) / S : 0, k = x - M + b, v = x + M + b, A = x + L + b, w = x - L + b, T = m - l, N = m + y, i4.y < 0 && (T = m, N = m + y + l), t3.inverted && (C = a2.width - m, S = X - (a2.width - c), M = b * (X - C) / S, L = b * (X - (C - y)) / S, v = (k = x + b + M) - 2 * M, A = x - L + b, w = x + L + b, T = m, N = m + y - l, i4.y < 0 && (N = m + y + l)), i4.shapeType = "path", i4.shapeArgs = { x: k, y: T, width: v - k, height: y, d: [["M", k, T], ["L", v, T], ["L", A, N], ["L", w, N], ["Z"]] };
          }
        }
      }
      return n.defaultOptions = a(s.defaultOptions, t2), e2.registerSeriesType("columnpyramid", n), n;
    }), i(e, "Series/ErrorBar/ErrorBarSeriesDefaults.js", [], function() {
      return { color: "#000000", grouping: false, linkedTo: ":previous", tooltip: { pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>' }, whiskerWidth: null };
    }), i(e, "Series/ErrorBar/ErrorBarSeries.js", [e["Series/BoxPlot/BoxPlotSeries.js"], e["Series/Column/ColumnSeries.js"], e["Series/ErrorBar/ErrorBarSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
      let { arearange: a } = s.seriesTypes, { addEvent: r, merge: n, extend: l } = o;
      class h extends t2 {
        getColumnMetrics() {
          return this.linkedParent && this.linkedParent.columnMetrics || e2.prototype.getColumnMetrics.call(this);
        }
        drawDataLabels() {
          let t3 = this.pointValKey;
          if (a) for (let e3 of (a.prototype.drawDataLabels.call(this), this.points)) e3.y = e3[t3];
        }
        toYData(t3) {
          return [t3.low, t3.high];
        }
      }
      return h.defaultOptions = n(t2.defaultOptions, i2), r(h, "afterTranslate", function() {
        for (let t3 of this.points) t3.plotLow = t3.plotY;
      }, { order: 0 }), l(h.prototype, { pointArrayMap: ["low", "high"], pointValKey: "high", doQuartiles: false }), s.registerSeriesType("errorbar", h), h;
    }), i(e, "Series/Gauge/GaugePoint.js", [e["Core/Series/SeriesRegistry.js"]], function(t2) {
      let { series: { prototype: { pointClass: e2 } } } = t2;
      return class extends e2 {
        setState(t3) {
          this.state = t3;
        }
      };
    }), i(e, "Series/Gauge/GaugeSeries.js", [e["Series/Gauge/GaugePoint.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { noop: o } = e2, { series: a, seriesTypes: { column: r } } = i2, { clamp: n, isNumber: l, extend: h, merge: p, pick: d, pInt: c, defined: u } = s;
      class g extends a {
        translate() {
          let t3 = this.yAxis, e3 = this.options, i3 = t3.center;
          this.generatePoints(), this.points.forEach((s2) => {
            let o2 = p(e3.dial, s2.dial), a2 = c(o2.radius) * i3[2] / 200, r2 = c(o2.baseLength) * a2 / 100, h2 = c(o2.rearLength) * a2 / 100, d2 = o2.baseWidth, g2 = o2.topWidth, f = e3.overshoot, b = t3.startAngleRad + t3.translate(s2.y, void 0, void 0, void 0, true);
            (l(f) || false === e3.wrap) && (f = l(f) ? f / 180 * Math.PI : 0, b = n(b, t3.startAngleRad - f, t3.endAngleRad + f)), b = 180 * b / Math.PI, s2.shapeType = "path";
            let m = o2.path || [["M", -h2, -d2 / 2], ["L", r2, -d2 / 2], ["L", a2, -g2 / 2], ["L", a2, g2 / 2], ["L", r2, d2 / 2], ["L", -h2, d2 / 2], ["Z"]];
            s2.shapeArgs = { d: m, translateX: i3[0], translateY: i3[1], rotation: b }, s2.plotX = i3[0], s2.plotY = i3[1], u(s2.y) && t3.max - t3.min && (s2.percentage = (s2.y - t3.min) / (t3.max - t3.min) * 100);
          });
        }
        drawPoints() {
          let t3 = this, e3 = t3.chart, i3 = t3.yAxis.center, s2 = t3.pivot, o2 = t3.options, a2 = o2.pivot, r2 = e3.renderer;
          t3.points.forEach((i4) => {
            let s3 = i4.graphic, a3 = i4.shapeArgs, n2 = a3.d, l2 = p(o2.dial, i4.dial);
            s3 ? (s3.animate(a3), a3.d = n2) : i4.graphic = r2[i4.shapeType](a3).addClass("highcharts-dial").add(t3.group), e3.styledMode || i4.graphic[s3 ? "animate" : "attr"]({ stroke: l2.borderColor, "stroke-width": l2.borderWidth, fill: l2.backgroundColor });
          }), s2 ? s2.animate({ translateX: i3[0], translateY: i3[1] }) : a2 && (t3.pivot = r2.circle(0, 0, a2.radius).attr({ zIndex: 2 }).addClass("highcharts-pivot").translate(i3[0], i3[1]).add(t3.group), e3.styledMode || t3.pivot.attr({ fill: a2.backgroundColor, stroke: a2.borderColor, "stroke-width": a2.borderWidth }));
        }
        animate(t3) {
          let e3 = this;
          t3 || e3.points.forEach((t4) => {
            let i3 = t4.graphic;
            i3 && (i3.attr({ rotation: 180 * e3.yAxis.startAngleRad / Math.PI }), i3.animate({ rotation: t4.shapeArgs.rotation }, e3.options.animation));
          });
        }
        render() {
          this.group = this.plotGroup("group", "series", this.visible ? "inherit" : "hidden", this.options.zIndex, this.chart.seriesGroup), a.prototype.render.call(this), this.group.clip(this.chart.clipRect);
        }
        setData(t3, e3) {
          a.prototype.setData.call(this, t3, false), this.processData(), this.generatePoints(), d(e3, true) && this.chart.redraw();
        }
        hasData() {
          return !!this.points.length;
        }
      }
      return g.defaultOptions = p(a.defaultOptions, { dataLabels: { borderColor: "#cccccc", borderRadius: 3, borderWidth: 1, crop: false, defer: false, enabled: true, verticalAlign: "top", y: 15, zIndex: 2 }, dial: { backgroundColor: "#000000", baseLength: "70%", baseWidth: 3, borderColor: "#cccccc", borderWidth: 0, radius: "80%", rearLength: "10%", topWidth: 1 }, pivot: { radius: 5, borderWidth: 0, borderColor: "#cccccc", backgroundColor: "#000000" }, tooltip: { headerFormat: "" }, showInLegend: false }), h(g.prototype, { angular: true, directTouch: true, drawGraph: o, drawTracker: r.prototype.drawTracker, fixedBox: true, forceDL: true, noSharedTooltip: true, pointClass: t2, trackerGroups: ["group", "dataLabelsGroup"] }), i2.registerSeriesType("gauge", g), g;
    }), i(e, "Series/DragNodesComposition.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { composed: i2 } = t2, { addEvent: s, pushUnique: o } = e2;
      function a() {
        let t3, e3, i3;
        let o2 = this;
        o2.container && (t3 = s(o2.container, "mousedown", (t4) => {
          let a2 = o2.hoverPoint;
          a2 && a2.series && a2.series.hasDraggableNodes && a2.series.options.draggable && (a2.series.onMouseDown(a2, t4), e3 = s(o2.container, "mousemove", (t5) => a2 && a2.series && a2.series.onMouseMove(a2, t5)), i3 = s(o2.container.ownerDocument, "mouseup", (t5) => (e3(), i3(), a2 && a2.series && a2.series.onMouseUp(a2, t5))));
        })), s(o2, "destroy", function() {
          t3();
        });
      }
      return { compose: function(t3) {
        o(i2, "DragNodes") && s(t3, "load", a);
      }, onMouseDown: function(t3, e3) {
        var _a;
        let i3 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(e3)) || e3;
        t3.fixedPosition = { chartX: i3.chartX, chartY: i3.chartY, plotX: t3.plotX, plotY: t3.plotY }, t3.inDragMode = true;
      }, onMouseMove: function(t3, e3) {
        var _a;
        if (t3.fixedPosition && t3.inDragMode) {
          let i3, s2;
          let o2 = this.chart, a2 = ((_a = o2.pointer) == null ? void 0 : _a.normalize(e3)) || e3, r = t3.fixedPosition.chartX - a2.chartX, n = t3.fixedPosition.chartY - a2.chartY, l = o2.graphLayoutsLookup;
          (Math.abs(r) > 5 || Math.abs(n) > 5) && (i3 = t3.fixedPosition.plotX - r, s2 = t3.fixedPosition.plotY - n, o2.isInsidePlot(i3, s2) && (t3.plotX = i3, t3.plotY = s2, t3.hasDragged = true, this.redrawHalo(t3), l.forEach((t4) => {
            t4.restartSimulation();
          })));
        }
      }, onMouseUp: function(t3) {
        t3.fixedPosition && (t3.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), t3.inDragMode = t3.hasDragged = false, this.options.fixedDraggable || delete t3.fixedPosition);
      }, redrawHalo: function(t3) {
        t3 && this.halo && this.halo.attr({ d: t3.haloPath(this.options.states.hover.halo.size) });
      } };
    }), i(e, "Series/GraphLayoutComposition.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      let { setAnimation: s } = t2, { composed: o } = e2, { addEvent: a, pushUnique: r } = i2;
      function n() {
        this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach((t3) => {
          t3.updateSimulation();
        }), this.redraw());
      }
      function l() {
        this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach((t3) => {
          t3.updateSimulation(false);
        }), this.redraw());
      }
      function h() {
        this.graphLayoutsLookup && this.graphLayoutsLookup.forEach((t3) => {
          t3.stop();
        });
      }
      function p() {
        let t3, e3 = false, i3 = (i4) => {
          i4.maxIterations-- && isFinite(i4.temperature) && !i4.isStable() && !i4.enableSimulation && (i4.beforeStep && i4.beforeStep(), i4.step(), t3 = false, e3 = true);
        };
        if (this.graphLayoutsLookup) {
          for (s(false, this), this.graphLayoutsLookup.forEach((t4) => t4.start()); !t3; ) t3 = true, this.graphLayoutsLookup.forEach(i3);
          e3 && this.series.forEach((t4) => {
            t4 && t4.layout && t4.render();
          });
        }
      }
      return { compose: function(t3) {
        r(o, "GraphLayout") && (a(t3, "afterPrint", n), a(t3, "beforePrint", l), a(t3, "predraw", h), a(t3, "render", p));
      }, integrations: {}, layouts: {} };
    }), i(e, "Series/PackedBubble/PackedBubblePoint.js", [e["Core/Chart/Chart.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"]], function(t2, e2, i2) {
      let { seriesTypes: { bubble: { prototype: { pointClass: s } } } } = i2;
      return class extends s {
        destroy() {
          var _a;
          return ((_a = this.series) == null ? void 0 : _a.layout) && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes), e2.prototype.destroy.apply(this, arguments);
        }
        firePointEvent() {
          let t3 = this.series.options;
          if (this.isParentNode && t3.parentNode) {
            let i3 = t3.allowPointSelect;
            t3.allowPointSelect = t3.parentNode.allowPointSelect, e2.prototype.firePointEvent.apply(this, arguments), t3.allowPointSelect = i3;
          } else e2.prototype.firePointEvent.apply(this, arguments);
        }
        select() {
          let i3 = this.series.chart;
          this.isParentNode ? (i3.getSelectedPoints = i3.getSelectedParentNodes, e2.prototype.select.apply(this, arguments), i3.getSelectedPoints = t2.prototype.getSelectedPoints) : e2.prototype.select.apply(this, arguments);
        }
      };
    }), i(e, "Series/PackedBubble/PackedBubbleSeriesDefaults.js", [e["Core/Utilities.js"]], function(t2) {
      let { isNumber: e2 } = t2;
      return { minSize: "10%", maxSize: "50%", sizeBy: "area", zoneAxis: "y", crisp: false, tooltip: { pointFormat: "Value: {point.value}" }, draggable: true, useSimulation: true, parentNode: { allowPointSelect: false }, dataLabels: { formatter: function() {
        let { numberFormatter: t3 } = this.series.chart, { value: i2 } = this.point;
        return e2(i2) ? t3(i2, -1) : "";
      }, parentNodeFormatter: function() {
        return this.name;
      }, parentNodeTextPath: { enabled: true }, padding: 0, style: { transition: "opacity 2000ms" } }, layoutAlgorithm: { initialPositions: "circle", initialPositionRadius: 20, bubblePadding: 5, parentNodeLimit: false, seriesInteraction: true, dragBetweenSeries: false, parentNodeOptions: { maxIterations: 400, gravitationalConstant: 0.03, maxSpeed: 50, initialPositionRadius: 100, seriesInteraction: true, marker: { fillColor: null, fillOpacity: 1, lineWidth: null, lineColor: null, symbol: "circle" } }, enableSimulation: true, type: "packedbubble", integration: "packedbubble", maxIterations: 1e3, splitSeries: false, maxSpeed: 5, gravitationalConstant: 0.01, friction: -0.981 } };
    }), i(e, "Series/Networkgraph/VerletIntegration.js", [], function() {
      return { attractive: function(t2, e2, i2) {
        let s = t2.getMass(), o = -i2.x * e2 * this.diffTemperature, a = -i2.y * e2 * this.diffTemperature;
        t2.fromNode.fixedPosition || (t2.fromNode.plotX -= o * s.fromNode / t2.fromNode.degree, t2.fromNode.plotY -= a * s.fromNode / t2.fromNode.degree), t2.toNode.fixedPosition || (t2.toNode.plotX += o * s.toNode / t2.toNode.degree, t2.toNode.plotY += a * s.toNode / t2.toNode.degree);
      }, attractiveForceFunction: function(t2, e2) {
        return (e2 - t2) / t2;
      }, barycenter: function() {
        let t2 = this.options.gravitationalConstant || 0, e2 = (this.barycenter.xFactor - (this.box.left + this.box.width) / 2) * t2, i2 = (this.barycenter.yFactor - (this.box.top + this.box.height) / 2) * t2;
        this.nodes.forEach(function(t3) {
          t3.fixedPosition || (t3.plotX -= e2 / t3.mass / t3.degree, t3.plotY -= i2 / t3.mass / t3.degree);
        });
      }, getK: function(t2) {
        return Math.pow(t2.box.width * t2.box.height / t2.nodes.length, 0.5);
      }, integrate: function(t2, e2) {
        let i2 = -t2.options.friction, s = t2.options.maxSpeed, o = e2.prevX, a = e2.prevY, r = (e2.plotX + e2.dispX - o) * i2, n = (e2.plotY + e2.dispY - a) * i2, l = Math.abs, h = l(r) / (r || 1), p = l(n) / (n || 1), d = h * Math.min(s, Math.abs(r)), c = p * Math.min(s, Math.abs(n));
        e2.prevX = e2.plotX + e2.dispX, e2.prevY = e2.plotY + e2.dispY, e2.plotX += d, e2.plotY += c, e2.temperature = t2.vectorLength({ x: d, y: c });
      }, repulsive: function(t2, e2, i2) {
        let s = e2 * this.diffTemperature / t2.mass / t2.degree;
        t2.fixedPosition || (t2.plotX += i2.x * s, t2.plotY += i2.y * s);
      }, repulsiveForceFunction: function(t2, e2) {
        return (e2 - t2) / t2 * (e2 > t2 ? 1 : 0);
      } };
    }), i(e, "Series/PackedBubble/PackedBubbleIntegration.js", [e["Core/Globals.js"], e["Series/Networkgraph/VerletIntegration.js"]], function(t2, e2) {
      let { noop: i2 } = t2;
      return { barycenter: function() {
        let t3, e3;
        let i3 = this.options.gravitationalConstant, s = this.box, o = this.nodes;
        for (let a of o) this.options.splitSeries && !a.isParentNode ? (t3 = a.series.parentNode.plotX, e3 = a.series.parentNode.plotY) : (t3 = s.width / 2, e3 = s.height / 2), a.fixedPosition || (a.plotX -= (a.plotX - t3) * i3 / (a.mass * Math.sqrt(o.length)), a.plotY -= (a.plotY - e3) * i3 / (a.mass * Math.sqrt(o.length)));
      }, getK: i2, integrate: e2.integrate, repulsive: function(t3, e3, i3, s) {
        let o = e3 * this.diffTemperature / t3.mass / t3.degree, a = i3.x * o, r = i3.y * o;
        t3.fixedPosition || (t3.plotX += a, t3.plotY += r), s.fixedPosition || (s.plotX -= a, s.plotY -= r);
      }, repulsiveForceFunction: function(t3, e3, i3, s) {
        return Math.min(t3, (i3.marker.radius + s.marker.radius) / 2);
      } };
    }), i(e, "Series/Networkgraph/EulerIntegration.js", [], function() {
      return { attractive: function(t2, e2, i2, s) {
        let o = t2.getMass(), a = i2.x / s * e2, r = i2.y / s * e2;
        t2.fromNode.fixedPosition || (t2.fromNode.dispX -= a * o.fromNode / t2.fromNode.degree, t2.fromNode.dispY -= r * o.fromNode / t2.fromNode.degree), t2.toNode.fixedPosition || (t2.toNode.dispX += a * o.toNode / t2.toNode.degree, t2.toNode.dispY += r * o.toNode / t2.toNode.degree);
      }, attractiveForceFunction: function(t2, e2) {
        return t2 * t2 / e2;
      }, barycenter: function() {
        let t2 = this.options.gravitationalConstant, e2 = this.barycenter.xFactor, i2 = this.barycenter.yFactor;
        this.nodes.forEach(function(s) {
          if (!s.fixedPosition) {
            let o = s.getDegree(), a = o * (1 + o / 2);
            s.dispX += (e2 - s.plotX) * t2 * a / s.degree, s.dispY += (i2 - s.plotY) * t2 * a / s.degree;
          }
        });
      }, getK: function(t2) {
        return Math.pow(t2.box.width * t2.box.height / t2.nodes.length, 0.3);
      }, integrate: function(t2, e2) {
        e2.dispX += e2.dispX * t2.options.friction, e2.dispY += e2.dispY * t2.options.friction;
        let i2 = e2.temperature = t2.vectorLength({ x: e2.dispX, y: e2.dispY });
        0 !== i2 && (e2.plotX += e2.dispX / i2 * Math.min(Math.abs(e2.dispX), t2.temperature), e2.plotY += e2.dispY / i2 * Math.min(Math.abs(e2.dispY), t2.temperature));
      }, repulsive: function(t2, e2, i2, s) {
        t2.dispX += i2.x / s * e2 / t2.degree, t2.dispY += i2.y / s * e2 / t2.degree;
      }, repulsiveForceFunction: function(t2, e2) {
        return e2 * e2 / t2;
      } };
    }), i(e, "Series/Networkgraph/QuadTreeNode.js", [], function() {
      class t2 {
        constructor(t3) {
          this.body = false, this.isEmpty = false, this.isInternal = false, this.nodes = [], this.box = t3, this.boxSize = Math.min(t3.width, t3.height);
        }
        divideBox() {
          let e2 = this.box.width / 2, i2 = this.box.height / 2;
          this.nodes[0] = new t2({ left: this.box.left, top: this.box.top, width: e2, height: i2 }), this.nodes[1] = new t2({ left: this.box.left + e2, top: this.box.top, width: e2, height: i2 }), this.nodes[2] = new t2({ left: this.box.left + e2, top: this.box.top + i2, width: e2, height: i2 }), this.nodes[3] = new t2({ left: this.box.left, top: this.box.top + i2, width: e2, height: i2 });
        }
        getBoxPosition(t3) {
          let e2 = t3.plotX < this.box.left + this.box.width / 2, i2 = t3.plotY < this.box.top + this.box.height / 2;
          return e2 ? i2 ? 0 : 3 : i2 ? 1 : 2;
        }
        insert(e2, i2) {
          let s;
          this.isInternal ? this.nodes[this.getBoxPosition(e2)].insert(e2, i2 - 1) : (this.isEmpty = false, this.body ? i2 ? (this.isInternal = true, this.divideBox(), true !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, i2 - 1), this.body = true), this.nodes[this.getBoxPosition(e2)].insert(e2, i2 - 1)) : ((s = new t2({ top: e2.plotX || NaN, left: e2.plotY || NaN, width: 0.1, height: 0.1 })).body = e2, s.isInternal = false, this.nodes.push(s)) : (this.isInternal = false, this.body = e2));
        }
        updateMassAndCenter() {
          let t3 = 0, e2 = 0, i2 = 0;
          if (this.isInternal) {
            for (let s of this.nodes) s.isEmpty || (t3 += s.mass, e2 += s.plotX * s.mass, i2 += s.plotY * s.mass);
            e2 /= t3, i2 /= t3;
          } else this.body && (t3 = this.body.mass, e2 = this.body.plotX, i2 = this.body.plotY);
          this.mass = t3, this.plotX = e2, this.plotY = i2;
        }
      }
      return t2;
    }), i(e, "Series/Networkgraph/QuadTree.js", [e["Series/Networkgraph/QuadTreeNode.js"]], function(t2) {
      return class {
        constructor(e2, i2, s, o) {
          this.box = { left: e2, top: i2, width: s, height: o }, this.maxDepth = 25, this.root = new t2(this.box), this.root.isInternal = true, this.root.isRoot = true, this.root.divideBox();
        }
        calculateMassAndCenter() {
          this.visitNodeRecursive(null, null, function(t3) {
            t3.updateMassAndCenter();
          });
        }
        insertNodes(t3) {
          for (let e2 of t3) this.root.insert(e2, this.maxDepth);
        }
        visitNodeRecursive(t3, e2, i2) {
          let s;
          if (t3 || (t3 = this.root), t3 === this.root && e2 && (s = e2(t3)), false !== s) {
            for (let o of t3.nodes) {
              if (o.isInternal) {
                if (e2 && (s = e2(o)), false === s) continue;
                this.visitNodeRecursive(o, e2, i2);
              } else o.body && e2 && e2(o.body);
              i2 && i2(o);
            }
            t3 === this.root && i2 && i2(t3);
          }
        }
      };
    }), i(e, "Series/Networkgraph/ReingoldFruchtermanLayout.js", [e["Series/Networkgraph/EulerIntegration.js"], e["Core/Globals.js"], e["Series/GraphLayoutComposition.js"], e["Series/Networkgraph/QuadTree.js"], e["Core/Utilities.js"], e["Series/Networkgraph/VerletIntegration.js"]], function(t2, e2, i2, s, o, a) {
      let { win: r } = e2, { clamp: n, defined: l, isFunction: h, fireEvent: p, pick: d } = o;
      class c {
        constructor() {
          this.box = {}, this.currentStep = 0, this.initialRendering = true, this.links = [], this.nodes = [], this.series = [], this.simulation = false;
        }
        static compose(e3) {
          i2.compose(e3), i2.integrations.euler = t2, i2.integrations.verlet = a, i2.layouts["reingold-fruchterman"] = c;
        }
        init(t3) {
          this.options = t3, this.nodes = [], this.links = [], this.series = [], this.box = { x: 0, y: 0, width: 0, height: 0 }, this.setInitialRendering(true), this.integration = i2.integrations[t3.integration], this.enableSimulation = t3.enableSimulation, this.attractiveForce = d(t3.attractiveForce, this.integration.attractiveForceFunction), this.repulsiveForce = d(t3.repulsiveForce, this.integration.repulsiveForceFunction), this.approximation = t3.approximation;
        }
        updateSimulation(t3) {
          this.enableSimulation = d(t3, this.options.enableSimulation);
        }
        start() {
          let t3 = this.series, e3 = this.options;
          this.currentStep = 0, this.forces = t3[0] && t3[0].forces || [], this.chart = t3[0] && t3[0].chart, this.initialRendering && (this.initPositions(), t3.forEach(function(t4) {
            t4.finishedAnimating = true, t4.render();
          })), this.setK(), this.resetSimulation(e3), this.enableSimulation && this.step();
        }
        step() {
          let t3 = this.series;
          for (let t4 of (this.currentStep++, "barnes-hut" === this.approximation && (this.createQuadTree(), this.quadTree.calculateMassAndCenter()), this.forces || [])) this[t4 + "Forces"](this.temperature);
          if (this.applyLimits(), this.temperature = this.coolDown(this.startTemperature, this.diffTemperature, this.currentStep), this.prevSystemTemperature = this.systemTemperature, this.systemTemperature = this.getSystemTemperature(), this.enableSimulation) {
            for (let e3 of t3) e3.chart && e3.render();
            this.maxIterations-- && isFinite(this.temperature) && !this.isStable() ? (this.simulation && r.cancelAnimationFrame(this.simulation), this.simulation = r.requestAnimationFrame(() => this.step())) : (this.simulation = false, this.series.forEach((t4) => {
              p(t4, "afterSimulation");
            }));
          }
        }
        stop() {
          this.simulation && r.cancelAnimationFrame(this.simulation);
        }
        setArea(t3, e3, i3, s2) {
          this.box = { left: t3, top: e3, width: i3, height: s2 };
        }
        setK() {
          this.k = this.options.linkLength || this.integration.getK(this);
        }
        addElementsToCollection(t3, e3) {
          for (let i3 of t3) -1 === e3.indexOf(i3) && e3.push(i3);
        }
        removeElementFromCollection(t3, e3) {
          let i3 = e3.indexOf(t3);
          -1 !== i3 && e3.splice(i3, 1);
        }
        clear() {
          this.nodes.length = 0, this.links.length = 0, this.series.length = 0, this.resetSimulation();
        }
        resetSimulation() {
          this.forcedStop = false, this.systemTemperature = 0, this.setMaxIterations(), this.setTemperature(), this.setDiffTemperature();
        }
        restartSimulation() {
          this.simulation ? this.resetSimulation() : (this.setInitialRendering(false), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(true));
        }
        setMaxIterations(t3) {
          this.maxIterations = d(t3, this.options.maxIterations);
        }
        setTemperature() {
          this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
        }
        setDiffTemperature() {
          this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
        }
        setInitialRendering(t3) {
          this.initialRendering = t3;
        }
        createQuadTree() {
          this.quadTree = new s(this.box.left, this.box.top, this.box.width, this.box.height), this.quadTree.insertNodes(this.nodes);
        }
        initPositions() {
          let t3 = this.options.initialPositions;
          if (h(t3)) for (let e3 of (t3.call(this), this.nodes)) l(e3.prevX) || (e3.prevX = e3.plotX), l(e3.prevY) || (e3.prevY = e3.plotY), e3.dispX = 0, e3.dispY = 0;
          else "circle" === t3 ? this.setCircularPositions() : this.setRandomPositions();
        }
        setCircularPositions() {
          let t3;
          let e3 = this.box, i3 = this.nodes, s2 = 2 * Math.PI / (i3.length + 1), o2 = i3.filter(function(t4) {
            return 0 === t4.linksTo.length;
          }), a2 = {}, r2 = this.options.initialPositionRadius, n2 = (t4) => {
            for (let e4 of t4.linksFrom || []) a2[e4.toNode.id] || (a2[e4.toNode.id] = true, l2.push(e4.toNode), n2(e4.toNode));
          }, l2 = [];
          for (let t4 of o2) l2.push(t4), n2(t4);
          if (l2.length) for (let t4 of i3) -1 === l2.indexOf(t4) && l2.push(t4);
          else l2 = i3;
          for (let i4 = 0, o3 = l2.length; i4 < o3; ++i4) (t3 = l2[i4]).plotX = t3.prevX = d(t3.plotX, e3.width / 2 + r2 * Math.cos(i4 * s2)), t3.plotY = t3.prevY = d(t3.plotY, e3.height / 2 + r2 * Math.sin(i4 * s2)), t3.dispX = 0, t3.dispY = 0;
        }
        setRandomPositions() {
          let t3;
          let e3 = this.box, i3 = this.nodes, s2 = i3.length + 1, o2 = (t4) => {
            let e4 = t4 * t4 / Math.PI;
            return e4 - Math.floor(e4);
          };
          for (let a2 = 0, r2 = i3.length; a2 < r2; ++a2) (t3 = i3[a2]).plotX = t3.prevX = d(t3.plotX, e3.width * o2(a2)), t3.plotY = t3.prevY = d(t3.plotY, e3.height * o2(s2 + a2)), t3.dispX = 0, t3.dispY = 0;
        }
        force(t3, ...e3) {
          this.integration[t3].apply(this, e3);
        }
        barycenterForces() {
          this.getBarycenter(), this.force("barycenter");
        }
        getBarycenter() {
          let t3 = 0, e3 = 0, i3 = 0;
          for (let s2 of this.nodes) e3 += s2.plotX * s2.mass, i3 += s2.plotY * s2.mass, t3 += s2.mass;
          return this.barycenter = { x: e3, y: i3, xFactor: e3 / t3, yFactor: i3 / t3 }, this.barycenter;
        }
        barnesHutApproximation(t3, e3) {
          let i3, s2;
          let o2 = this.getDistXY(t3, e3), a2 = this.vectorLength(o2);
          return t3 !== e3 && 0 !== a2 && (e3.isInternal ? e3.boxSize / a2 < this.options.theta && 0 !== a2 ? (s2 = this.repulsiveForce(a2, this.k), this.force("repulsive", t3, s2 * e3.mass, o2, a2), i3 = false) : i3 = true : (s2 = this.repulsiveForce(a2, this.k), this.force("repulsive", t3, s2 * e3.mass, o2, a2))), i3;
        }
        repulsiveForces() {
          if ("barnes-hut" === this.approximation) for (let t3 of this.nodes) this.quadTree.visitNodeRecursive(null, (e3) => this.barnesHutApproximation(t3, e3));
          else {
            let t3, e3, i3;
            for (let s2 of this.nodes) for (let o2 of this.nodes) s2 === o2 || s2.fixedPosition || (i3 = this.getDistXY(s2, o2), 0 !== (e3 = this.vectorLength(i3)) && (t3 = this.repulsiveForce(e3, this.k), this.force("repulsive", s2, t3 * o2.mass, i3, e3)));
          }
        }
        attractiveForces() {
          let t3, e3, i3;
          for (let s2 of this.links) s2.fromNode && s2.toNode && (t3 = this.getDistXY(s2.fromNode, s2.toNode), 0 !== (e3 = this.vectorLength(t3)) && (i3 = this.attractiveForce(e3, this.k), this.force("attractive", s2, i3, t3, e3)));
        }
        applyLimits() {
          for (let t3 of this.nodes) t3.fixedPosition || (this.integration.integrate(this, t3), this.applyLimitBox(t3, this.box), t3.dispX = 0, t3.dispY = 0);
        }
        applyLimitBox(t3, e3) {
          let i3 = t3.radius;
          t3.plotX = n(t3.plotX, e3.left + i3, e3.width - i3), t3.plotY = n(t3.plotY, e3.top + i3, e3.height - i3);
        }
        coolDown(t3, e3, i3) {
          return t3 - e3 * i3;
        }
        isStable() {
          return 1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || this.temperature <= 0;
        }
        getSystemTemperature() {
          let t3 = 0;
          for (let e3 of this.nodes) t3 += e3.temperature;
          return t3;
        }
        vectorLength(t3) {
          return Math.sqrt(t3.x * t3.x + t3.y * t3.y);
        }
        getDistR(t3, e3) {
          let i3 = this.getDistXY(t3, e3);
          return this.vectorLength(i3);
        }
        getDistXY(t3, e3) {
          let i3 = t3.plotX - e3.plotX, s2 = t3.plotY - e3.plotY;
          return { x: i3, y: s2, absX: Math.abs(i3), absY: Math.abs(s2) };
        }
      }
      return c;
    }), i(e, "Series/PackedBubble/PackedBubbleLayout.js", [e["Series/GraphLayoutComposition.js"], e["Series/PackedBubble/PackedBubbleIntegration.js"], e["Series/Networkgraph/ReingoldFruchtermanLayout.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { addEvent: o, pick: a } = s;
      function r() {
        let t3 = this.series, e3 = [];
        return t3.forEach((t4) => {
          t4.parentNode && t4.parentNode.selected && e3.push(t4.parentNode);
        }), e3;
      }
      function n() {
        this.allDataPoints && delete this.allDataPoints;
      }
      class l extends i2 {
        constructor() {
          super(...arguments), this.index = NaN, this.nodes = [], this.series = [];
        }
        static compose(s2) {
          i2.compose(s2), t2.integrations.packedbubble = e2, t2.layouts.packedbubble = l;
          let a2 = s2.prototype;
          a2.getSelectedParentNodes || (o(s2, "beforeRedraw", n), a2.getSelectedParentNodes = r);
        }
        beforeStep() {
          this.options.marker && this.series.forEach((t3) => {
            t3 && t3.calculateParentRadius();
          });
        }
        isStable() {
          let t3 = Math.abs(this.prevSystemTemperature - this.systemTemperature);
          return 1 > Math.abs(10 * this.systemTemperature / Math.sqrt(this.nodes.length)) && t3 < 1e-5 || this.temperature <= 0;
        }
        setCircularPositions() {
          let t3 = this.box, e3 = this.nodes, i3 = 2 * Math.PI / (e3.length + 1), s2 = this.options.initialPositionRadius, o2, r2, n2 = 0;
          for (let l2 of e3) this.options.splitSeries && !l2.isParentNode ? (o2 = l2.series.parentNode.plotX, r2 = l2.series.parentNode.plotY) : (o2 = t3.width / 2, r2 = t3.height / 2), l2.plotX = l2.prevX = a(l2.plotX, o2 + s2 * Math.cos(l2.index || n2 * i3)), l2.plotY = l2.prevY = a(l2.plotY, r2 + s2 * Math.sin(l2.index || n2 * i3)), l2.dispX = 0, l2.dispY = 0, n2++;
        }
        repulsiveForces() {
          let t3, e3, i3;
          let s2 = this, o2 = s2.options.bubblePadding, a2 = s2.nodes;
          a2.forEach((r2) => {
            r2.degree = r2.mass, r2.neighbours = 0, a2.forEach((a3) => {
              t3 = 0, r2 !== a3 && !r2.fixedPosition && (s2.options.seriesInteraction || r2.series === a3.series) && (i3 = s2.getDistXY(r2, a3), (e3 = s2.vectorLength(i3) - (r2.marker.radius + a3.marker.radius + o2)) < 0 && (r2.degree += 0.01, r2.neighbours++, t3 = s2.repulsiveForce(-e3 / Math.sqrt(r2.neighbours), s2.k, r2, a3)), s2.force("repulsive", r2, t3 * a3.mass, i3, a3, e3));
            });
          });
        }
        applyLimitBox(t3, e3) {
          let i3, s2;
          this.options.splitSeries && !t3.isParentNode && this.options.parentNodeLimit && (i3 = this.getDistXY(t3, t3.series.parentNode), (s2 = t3.series.parentNodeRadius - t3.marker.radius - this.vectorLength(i3)) < 0 && s2 > -2 * t3.marker.radius && (t3.plotX -= 0.01 * i3.x, t3.plotY -= 0.01 * i3.y)), super.applyLimitBox(t3, e3);
        }
      }
      return t2.layouts.packedbubble = l, l;
    }), i(e, "Series/SimulationSeriesUtilities.js", [e["Core/Utilities.js"], e["Core/Animation/AnimationUtilities.js"]], function(t2, e2) {
      let { merge: i2, syncTimeout: s } = t2, { animObject: o } = e2;
      return { initDataLabels: function() {
        let t3 = this.options.dataLabels;
        if (!this.dataLabelsGroup) {
          let e3 = this.initDataLabelsGroup();
          return !this.chart.styledMode && (t3 == null ? void 0 : t3.style) && e3.css(t3.style), e3.attr({ opacity: 0 }), this.visible && e3.show(), e3;
        }
        return this.dataLabelsGroup.attr(i2({ opacity: 1 }, this.getPlotBox("data-labels"))), this.dataLabelsGroup;
      }, initDataLabelsDefer: function() {
        var _a;
        let t3 = this.options.dataLabels;
        (t3 == null ? void 0 : t3.defer) && ((_a = this.options.layoutAlgorithm) == null ? void 0 : _a.enableSimulation) ? s(() => {
          this.deferDataLabels = false;
        }, t3 ? o(t3.animation).defer : 0) : this.deferDataLabels = false;
      } };
    }), i(e, "Extensions/TextPath.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
      let { deg2rad: i2 } = t2, { addEvent: s, merge: o, uniqueKey: a, defined: r, extend: n } = e2;
      function l(t3, e3) {
        e3 = o(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, e3);
        let i3 = this.renderer.url, l2 = this.text || this, h2 = l2.textPath, { attributes: p2, enabled: d } = e3;
        if (t3 = t3 || h2 && h2.path, h2 && h2.undo(), t3 && d) {
          let e4 = s(l2, "afterModifyTree", (e5) => {
            if (t3 && d) {
              let s2 = t3.attr("id");
              s2 || t3.attr("id", s2 = a());
              let o2 = { x: 0, y: 0 };
              r(p2.dx) && (o2.dx = p2.dx, delete p2.dx), r(p2.dy) && (o2.dy = p2.dy, delete p2.dy), l2.attr(o2), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy());
              let h3 = e5.nodes.slice(0);
              e5.nodes.length = 0, e5.nodes[0] = { tagName: "textPath", attributes: n(p2, { "text-anchor": p2.textAnchor, href: `${i3}#${s2}` }), children: h3 };
            }
          });
          l2.textPath = { path: t3, undo: e4 };
        } else l2.attr({ dx: 0, dy: 0 }), delete l2.textPath;
        return this.added && (l2.textCache = "", this.renderer.buildText(l2)), this;
      }
      function h(t3) {
        var _a;
        let e3 = t3.bBox, s2 = (_a = this.element) == null ? void 0 : _a.querySelector("textPath");
        if (s2) {
          let t4 = [], { b: o2, h: a2 } = this.renderer.fontMetrics(this.element), r2 = a2 - o2, n2 = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"), l2 = s2.innerHTML.replace(n2, "").split(/<tspan class="highcharts-br"[^>]*>/), h2 = l2.length, p2 = (t5, e4) => {
            let { x: a3, y: n3 } = e4, l3 = (s2.getRotationOfChar(t5) - 90) * i2, h3 = Math.cos(l3), p3 = Math.sin(l3);
            return [[a3 - r2 * h3, n3 - r2 * p3], [a3 + o2 * h3, n3 + o2 * p3]];
          };
          for (let e4 = 0, i3 = 0; i3 < h2; i3++) {
            let o3 = l2[i3].length;
            for (let a3 = 0; a3 < o3; a3 += 5) try {
              let o4 = e4 + a3 + i3, [r3, n3] = p2(o4, s2.getStartPositionOfChar(o4));
              0 === a3 ? (t4.push(n3), t4.push(r3)) : (0 === i3 && t4.unshift(n3), i3 === h2 - 1 && t4.push(r3));
            } catch (t5) {
              break;
            }
            e4 += o3 - 1;
            try {
              let o4 = e4 + i3, a3 = s2.getEndPositionOfChar(o4), [r3, n3] = p2(o4, a3);
              t4.unshift(n3), t4.unshift(r3);
            } catch (t5) {
              break;
            }
          }
          t4.length && t4.push(t4[0].slice()), e3.polygon = t4;
        }
        return e3;
      }
      function p(t3) {
        var _a;
        let e3 = t3.labelOptions, i3 = t3.point, s2 = e3[i3.formatPrefix + "TextPath"] || e3.textPath;
        s2 && !e3.useHTML && (this.setTextPath(((_a = i3.getDataLabelPath) == null ? void 0 : _a.call(i3, this)) || i3.graphic, s2), i3.dataLabelPath && !s2.enabled && (i3.dataLabelPath = i3.dataLabelPath.destroy()));
      }
      return { compose: function(t3) {
        s(t3, "afterGetBBox", h), s(t3, "beforeAddingDataLabel", p);
        let e3 = t3.prototype;
        e3.setTextPath || (e3.setTextPath = l);
      } };
    }), i(e, "Series/PackedBubble/PackedBubbleSeries.js", [e["Core/Color/Color.js"], e["Series/DragNodesComposition.js"], e["Series/GraphLayoutComposition.js"], e["Core/Globals.js"], e["Series/PackedBubble/PackedBubblePoint.js"], e["Series/PackedBubble/PackedBubbleSeriesDefaults.js"], e["Series/PackedBubble/PackedBubbleLayout.js"], e["Core/Series/SeriesRegistry.js"], e["Series/SimulationSeriesUtilities.js"], e["Core/Utilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Extensions/TextPath.js"]], function(t2, e2, i2, s, o, a, r, n, l, h, p, d) {
      let { parse: c } = t2, { noop: u } = s, { series: { prototype: g }, seriesTypes: { bubble: f } } = n, { initDataLabels: b, initDataLabelsDefer: m } = l, { addEvent: y, clamp: x, defined: P, extend: S, fireEvent: M, isArray: L, isNumber: C, merge: k, pick: v } = h;
      d.compose(p);
      class A extends f {
        constructor() {
          super(...arguments), this.parentNodeMass = 0, this.deferDataLabels = true;
        }
        static compose(t3, i3, s2) {
          f.compose(t3, i3, s2), e2.compose(i3), r.compose(i3);
        }
        accumulateAllPoints() {
          let t3;
          let e3 = this.chart, i3 = [];
          for (let s2 of e3.series) if (s2.is("packedbubble") && s2.reserveSpace()) {
            t3 = s2.yData || [];
            for (let e4 = 0; e4 < t3.length; e4++) i3.push([null, null, t3[e4], s2.index, e4, { id: e4, marker: { radius: 0 } }]);
          }
          return i3;
        }
        addLayout() {
          let t3 = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {}, e3 = t3.type || "packedbubble", s2 = this.chart.options.chart, o2 = this.chart.graphLayoutsStorage, a2 = this.chart.graphLayoutsLookup, r2;
          o2 || (this.chart.graphLayoutsStorage = o2 = {}, this.chart.graphLayoutsLookup = a2 = []), (r2 = o2[e3]) || (t3.enableSimulation = P(s2.forExport) ? !s2.forExport : t3.enableSimulation, o2[e3] = r2 = new i2.layouts[e3](), r2.init(t3), a2.splice(r2.index, 0, r2)), this.layout = r2, this.points.forEach((t4) => {
            t4.mass = 2, t4.degree = 1, t4.collisionNmb = 1;
          }), r2.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight), r2.addElementsToCollection([this], r2.series), r2.addElementsToCollection(this.points, r2.nodes);
        }
        addSeriesLayout() {
          let t3 = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {}, e3 = t3.type || "packedbubble", s2 = this.chart.graphLayoutsStorage, o2 = this.chart.graphLayoutsLookup, a2 = k(t3, t3.parentNodeOptions, { enableSimulation: this.layout.options.enableSimulation }), r2 = s2[e3 + "-series"];
          r2 || (s2[e3 + "-series"] = r2 = new i2.layouts[e3](), r2.init(a2), o2.splice(r2.index, 0, r2)), this.parentNodeLayout = r2, this.createParentNodes();
        }
        calculateParentRadius() {
          let t3 = this.seriesBox();
          this.parentNodeRadius = x(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, t3 ? Math.max(Math.sqrt(Math.pow(t3.width, 2) + Math.pow(t3.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20), this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius);
        }
        calculateZExtremes() {
          let t3 = this.chart.series, e3 = this.options.zMin, i3 = this.options.zMax, s2 = 1 / 0, o2 = -1 / 0;
          return e3 && i3 ? [e3, i3] : (t3.forEach((t4) => {
            t4.yData.forEach((t5) => {
              P(t5) && (t5 > o2 && (o2 = t5), t5 < s2 && (s2 = t5));
            });
          }), [e3 = v(e3, s2), i3 = v(i3, o2)]);
        }
        checkOverlap(t3, e3) {
          let i3 = t3[0] - e3[0], s2 = t3[1] - e3[1];
          return Math.sqrt(i3 * i3 + s2 * s2) - Math.abs(t3[2] + e3[2]) < -1e-3;
        }
        createParentNodes() {
          let t3 = this.pointClass, e3 = this.chart, i3 = this.parentNodeLayout, s2 = this.layout.options, o2, a2 = this.parentNode, r2 = { radius: this.parentNodeRadius, lineColor: this.color, fillColor: c(this.color).brighten(0.4).get() };
          s2.parentNodeOptions && (r2 = k(s2.parentNodeOptions.marker || {}, r2)), this.parentNodeMass = 0, this.points.forEach((t4) => {
            this.parentNodeMass += Math.PI * Math.pow(t4.marker.radius, 2);
          }), this.calculateParentRadius(), i3.nodes.forEach((t4) => {
            t4.seriesIndex === this.index && (o2 = true);
          }), i3.setArea(0, 0, e3.plotWidth, e3.plotHeight), o2 || (a2 || (a2 = new t3(this, { mass: this.parentNodeRadius / 2, marker: r2, dataLabels: { inside: false }, states: { normal: { marker: r2 }, hover: { marker: r2 } }, dataLabelOnNull: true, degree: this.parentNodeRadius, isParentNode: true, seriesIndex: this.index })), this.parentNode && (a2.plotX = this.parentNode.plotX, a2.plotY = this.parentNode.plotY), this.parentNode = a2, i3.addElementsToCollection([this], i3.series), i3.addElementsToCollection([a2], i3.nodes));
        }
        deferLayout() {
          let t3 = this.options.layoutAlgorithm;
          this.visible && (this.addLayout(), t3.splitSeries && this.addSeriesLayout());
        }
        destroy() {
          this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach((t3) => {
            t3.removeElementFromCollection(this, t3.series);
          }, this), this.parentNode && this.parentNodeLayout && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy())), g.destroy.apply(this, arguments);
        }
        drawDataLabels() {
          !this.deferDataLabels && (g.drawDataLabels.call(this, this.points), this.parentNode && (this.parentNode.formatPrefix = "parentNode", g.drawDataLabels.call(this, [this.parentNode])));
        }
        drawGraph() {
          var _a;
          if (!this.layout || !this.layout.options.splitSeries) return;
          let t3 = this.chart, e3 = this.layout.options.parentNodeOptions.marker, i3 = { fill: e3.fillColor || c(this.color).brighten(0.4).get(), opacity: e3.fillOpacity, stroke: e3.lineColor || this.color, "stroke-width": v(e3.lineWidth, this.options.lineWidth) }, s2 = {};
          this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", this.visible ? "inherit" : "hidden", 0.1, t3.seriesGroup), (_a = this.group) == null ? void 0 : _a.attr({ zIndex: 2 }), this.calculateParentRadius(), this.parentNode && P(this.parentNode.plotX) && P(this.parentNode.plotY) && P(this.parentNodeRadius) && (s2 = k({ x: this.parentNode.plotX - this.parentNodeRadius, y: this.parentNode.plotY - this.parentNodeRadius, width: 2 * this.parentNodeRadius, height: 2 * this.parentNodeRadius }, i3), this.parentNode.graphic || (this.graph = this.parentNode.graphic = t3.renderer.symbol(i3.symbol).add(this.parentNodesGroup)), this.parentNode.graphic.attr(s2));
        }
        drawTracker() {
          let t3;
          let e3 = this.parentNode;
          super.drawTracker(), e3 && (t3 = L(e3.dataLabels) ? e3.dataLabels : e3.dataLabel ? [e3.dataLabel] : [], e3.graphic && (e3.graphic.element.point = e3), t3.forEach((t4) => {
            (t4.div || t4.element).point = e3;
          }));
        }
        getPointRadius() {
          let t3, e3, i3, s2;
          let o2 = this.chart, a2 = o2.plotWidth, r2 = o2.plotHeight, n2 = this.options, l2 = n2.useSimulation, h2 = Math.min(a2, r2), p2 = {}, d2 = [], c2 = o2.allDataPoints || [], u2 = c2.length;
          ["minSize", "maxSize"].forEach((t4) => {
            let e4 = parseInt(n2[t4], 10), i4 = /%$/.test(n2[t4]);
            p2[t4] = i4 ? h2 * e4 / 100 : e4 * Math.sqrt(u2);
          }), o2.minRadius = t3 = p2.minSize / Math.sqrt(u2), o2.maxRadius = e3 = p2.maxSize / Math.sqrt(u2);
          let g2 = l2 ? this.calculateZExtremes() : [t3, e3];
          c2.forEach((o3, a3) => {
            i3 = l2 ? x(o3[2], g2[0], g2[1]) : o3[2], 0 === (s2 = this.getRadius(g2[0], g2[1], t3, e3, i3)) && (s2 = null), c2[a3][2] = s2, d2.push(s2);
          }), this.radii = d2;
        }
        init() {
          return g.init.apply(this, arguments), m.call(this), this.eventsToUnbind.push(y(this, "updatedData", function() {
            this.chart.series.forEach((t3) => {
              t3.type === this.type && (t3.isDirty = true);
            }, this);
          })), this;
        }
        onMouseUp(t3) {
          if (t3.fixedPosition && !t3.removed) {
            let i3;
            let s2 = this.layout, o2 = this.parentNodeLayout;
            o2 && s2.options.dragBetweenSeries && o2.nodes.forEach((e3) => {
              t3 && t3.marker && e3 !== t3.series.parentNode && (i3 = s2.getDistXY(t3, e3), s2.vectorLength(i3) - e3.marker.radius - t3.marker.radius < 0 && (e3.series.addPoint(k(t3.options, { plotX: t3.plotX, plotY: t3.plotY }), false), s2.removeElementFromCollection(t3, s2.nodes), t3.remove()));
            }), e2.onMouseUp.apply(this, arguments);
          }
        }
        placeBubbles(t3) {
          let e3 = this.checkOverlap, i3 = this.positionBubble, s2 = [], o2 = 1, a2 = 0, r2 = 0, n2, l2 = [], h2, p2 = t3.sort((t4, e4) => e4[2] - t4[2]);
          if (p2.length) {
            if (s2.push([[0, 0, p2[0][2], p2[0][3], p2[0][4]]]), p2.length > 1) for (s2.push([[0, 0 - p2[1][2] - p2[0][2], p2[1][2], p2[1][3], p2[1][4]]]), h2 = 2; h2 < p2.length; h2++) p2[h2][2] = p2[h2][2] || 1, e3(n2 = i3(s2[o2][a2], s2[o2 - 1][r2], p2[h2]), s2[o2][0]) ? (s2.push([]), r2 = 0, s2[o2 + 1].push(i3(s2[o2][a2], s2[o2][0], p2[h2])), o2++, a2 = 0) : o2 > 1 && s2[o2 - 1][r2 + 1] && e3(n2, s2[o2 - 1][r2 + 1]) ? (r2++, s2[o2].push(i3(s2[o2][a2], s2[o2 - 1][r2], p2[h2])), a2++) : (a2++, s2[o2].push(n2));
            this.chart.stages = s2, this.chart.rawPositions = [].concat.apply([], s2), this.resizeRadius(), l2 = this.chart.rawPositions;
          }
          return l2;
        }
        pointAttribs(t3, e3) {
          let i3 = this.options, s2 = t3 && t3.isParentNode, o2 = i3.marker;
          s2 && i3.layoutAlgorithm && i3.layoutAlgorithm.parentNodeOptions && (o2 = i3.layoutAlgorithm.parentNodeOptions.marker);
          let a2 = o2.fillOpacity, r2 = g.pointAttribs.call(this, t3, e3);
          return 1 !== a2 && (r2["fill-opacity"] = a2), r2;
        }
        positionBubble(t3, e3, i3) {
          let s2 = Math.asin, o2 = Math.acos, a2 = Math.pow, r2 = Math.abs, n2 = (0, Math.sqrt)(a2(t3[0] - e3[0], 2) + a2(t3[1] - e3[1], 2)), l2 = o2((a2(n2, 2) + a2(i3[2] + e3[2], 2) - a2(i3[2] + t3[2], 2)) / (2 * (i3[2] + e3[2]) * n2)), h2 = s2(r2(t3[0] - e3[0]) / n2), p2 = (t3[1] - e3[1] < 0 ? 0 : Math.PI) + l2 + h2 * ((t3[0] - e3[0]) * (t3[1] - e3[1]) < 0 ? 1 : -1), d2 = Math.cos(p2), c2 = Math.sin(p2);
          return [e3[0] + (e3[2] + i3[2]) * c2, e3[1] - (e3[2] + i3[2]) * d2, i3[2], i3[3], i3[4]];
        }
        render() {
          let t3 = [];
          g.render.apply(this, arguments), !this.options.dataLabels.allowOverlap && (this.data.forEach((e3) => {
            L(e3.dataLabels) && e3.dataLabels.forEach((e4) => {
              t3.push(e4);
            });
          }), this.options.useSimulation && this.chart.hideOverlappingLabels(t3));
        }
        resizeRadius() {
          let t3, e3, i3, s2, o2;
          let a2 = this.chart, r2 = a2.rawPositions, n2 = Math.min, l2 = Math.max, h2 = a2.plotLeft, p2 = a2.plotTop, d2 = a2.plotHeight, c2 = a2.plotWidth;
          for (let a3 of (t3 = i3 = Number.POSITIVE_INFINITY, e3 = s2 = Number.NEGATIVE_INFINITY, r2)) o2 = a3[2], t3 = n2(t3, a3[0] - o2), e3 = l2(e3, a3[0] + o2), i3 = n2(i3, a3[1] - o2), s2 = l2(s2, a3[1] + o2);
          let u2 = [e3 - t3, s2 - i3], g2 = [(c2 - h2) / u2[0], (d2 - p2) / u2[1]], f2 = n2.apply([], g2);
          if (Math.abs(f2 - 1) > 1e-10) {
            for (let t4 of r2) t4[2] *= f2;
            this.placeBubbles(r2);
          } else a2.diffY = d2 / 2 + p2 - i3 - (s2 - i3) / 2, a2.diffX = c2 / 2 + h2 - t3 - (e3 - t3) / 2;
        }
        seriesBox() {
          let t3;
          let e3 = this.chart, i3 = this.data, s2 = Math.max, o2 = Math.min, a2 = [e3.plotLeft, e3.plotLeft + e3.plotWidth, e3.plotTop, e3.plotTop + e3.plotHeight];
          return i3.forEach((e4) => {
            P(e4.plotX) && P(e4.plotY) && e4.marker.radius && (t3 = e4.marker.radius, a2[0] = o2(a2[0], e4.plotX - t3), a2[1] = s2(a2[1], e4.plotX + t3), a2[2] = o2(a2[2], e4.plotY - t3), a2[3] = s2(a2[3], e4.plotY + t3));
          }), C(a2.width / a2.height) ? a2 : null;
        }
        setVisible() {
          let t3 = this;
          g.setVisible.apply(t3, arguments), t3.parentNodeLayout && t3.graph ? t3.visible ? (t3.graph.show(), t3.parentNode.dataLabel && t3.parentNode.dataLabel.show()) : (t3.graph.hide(), t3.parentNodeLayout.removeElementFromCollection(t3.parentNode, t3.parentNodeLayout.nodes), t3.parentNode.dataLabel && t3.parentNode.dataLabel.hide()) : t3.layout && (t3.visible ? t3.layout.addElementsToCollection(t3.points, t3.layout.nodes) : t3.points.forEach((e3) => {
            t3.layout.removeElementFromCollection(e3, t3.layout.nodes);
          }));
        }
        translate() {
          let t3, e3, i3;
          let s2 = this.chart, o2 = this.data, a2 = this.index, r2 = this.options.useSimulation;
          for (let n2 of (this.processedXData = this.xData, this.generatePoints(), P(s2.allDataPoints) || (s2.allDataPoints = this.accumulateAllPoints(), this.getPointRadius()), r2 ? i3 = s2.allDataPoints : (i3 = this.placeBubbles(s2.allDataPoints), this.options.draggable = false), i3)) n2[3] === a2 && (t3 = o2[n2[4]], e3 = v(n2[2], void 0), r2 || (t3.plotX = n2[0] - s2.plotLeft + s2.diffX, t3.plotY = n2[1] - s2.plotTop + s2.diffY), C(e3) && (t3.marker = S(t3.marker, { radius: e3, width: 2 * e3, height: 2 * e3 }), t3.radius = e3));
          r2 && this.deferLayout(), M(this, "afterTranslate");
        }
      }
      return A.defaultOptions = k(f.defaultOptions, a), S(A.prototype, { pointClass: o, axisTypes: [], directTouch: true, forces: ["barycenter", "repulsive"], hasDraggableNodes: true, invertible: false, isCartesian: false, noSharedTooltip: true, pointArrayMap: ["value"], pointValKey: "value", requireSorting: false, trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"], initDataLabels: b, alignDataLabel: g.alignDataLabel, indexateNodes: u, onMouseDown: e2.onMouseDown, onMouseMove: e2.onMouseMove, redrawHalo: e2.redrawHalo, searchPoint: u }), n.registerSeriesType("packedbubble", A), A;
    }), i(e, "Series/Polygon/PolygonSeriesDefaults.js", [], function() {
      return { marker: { enabled: false, states: { hover: { enabled: false } } }, stickyTracking: false, tooltip: { followPointer: true, pointFormat: "" }, trackByArea: true, legendSymbol: "rectangle" };
    }), i(e, "Series/Polygon/PolygonSeries.js", [e["Core/Globals.js"], e["Series/Polygon/PolygonSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      let { noop: o } = t2, { area: a, line: r, scatter: n } = i2.seriesTypes, { extend: l, merge: h } = s;
      class p extends n {
        getGraphPath() {
          let t3 = r.prototype.getGraphPath.call(this), e3 = t3.length + 1;
          for (; e3--; ) (e3 === t3.length || "M" === t3[e3][0]) && e3 > 0 && t3.splice(e3, 0, ["Z"]);
          return this.areaPath = t3, t3;
        }
        drawGraph() {
          this.options.fillColor = this.color, a.prototype.drawGraph.call(this);
        }
      }
      return p.defaultOptions = h(n.defaultOptions, e2), l(p.prototype, { type: "polygon", drawTracker: r.prototype.drawTracker, setStackedPoints: o }), i2.registerSeriesType("polygon", p), p;
    }), i(e, "Core/Axis/RadialAxisDefaults.js", [], function() {
      return { circular: { gridLineWidth: 1, labels: { align: void 0, x: 0, y: void 0, style: { textOverflow: "none" } }, maxPadding: 0, minPadding: 0, showLastLabel: false, tickLength: 0 }, radial: { gridLineInterpolation: "circle", gridLineWidth: 1, labels: { align: "right", padding: 5, x: -3, y: -2 }, showLastLabel: false, title: { x: 4, text: null, rotation: 90 } }, radialGauge: { endOnTick: false, gridLineWidth: 0, labels: { align: "center", distance: -25, x: 0, y: void 0 }, lineWidth: 1, minorGridLineWidth: 0, minorTickInterval: "auto", minorTickLength: 10, minorTickPosition: "inside", minorTickWidth: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickPosition: "inside", tickWidth: 2, title: { rotation: 0, text: "" }, zIndex: 2 } };
    }), i(e, "Core/Axis/RadialAxis.js", [e["Core/Axis/RadialAxisDefaults.js"], e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
      var o;
      let { defaultOptions: a } = e2, { composed: r, noop: n } = i2, { addEvent: l, correctFloat: h, defined: p, extend: d, fireEvent: c, isObject: u, merge: g, pick: f, pushUnique: b, relativeLength: m, wrap: y } = s;
      return function(e3) {
        function s2() {
          this.autoConnect = this.isCircular && void 0 === f(this.userMax, this.options.max) && h(this.endAngleRad - this.startAngleRad) === h(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
        }
        function o2() {
          return () => {
            if (this.isRadial && this.tickPositions && this.options.labels && true !== this.options.labels.allowOverlap) return this.tickPositions.map((t3) => this.ticks[t3] && this.ticks[t3].label).filter((t3) => !!t3);
          };
        }
        function x() {
          return n;
        }
        function P(t3, e4, i3) {
          let s3 = this.pane.center, o3 = t3.value, a2, r2, n2;
          return this.isCircular ? (p(o3) ? t3.point && (t3.point.shapeArgs || {}).start && (o3 = this.chart.inverted ? this.translate(t3.point.rectPlotY, true) : t3.point.x) : (r2 = t3.chartX || 0, n2 = t3.chartY || 0, o3 = this.translate(Math.atan2(n2 - i3, r2 - e4) - this.startAngleRad, true)), r2 = (a2 = this.getPosition(o3)).x, n2 = a2.y) : (p(o3) || (r2 = t3.chartX, n2 = t3.chartY), p(r2) && p(n2) && (i3 = s3[1] + this.chart.plotTop, o3 = this.translate(Math.min(Math.sqrt(Math.pow(r2 - e4, 2) + Math.pow(n2 - i3, 2)), s3[2] / 2) - s3[3] / 2, true))), [o3, r2 || 0, n2 || 0];
        }
        function S(t3, e4, i3) {
          let s3 = this.pane.center, o3 = this.chart, a2 = this.left || 0, r2 = this.top || 0, n2, l2 = f(e4, s3[2] / 2 - this.offset), h2;
          return void 0 === i3 && (i3 = this.horiz ? 0 : this.center && -this.center[3] / 2), i3 && (l2 += i3), this.isCircular || void 0 !== e4 ? ((h2 = this.chart.renderer.symbols.arc(a2 + s3[0], r2 + s3[1], l2, l2, { start: this.startAngleRad, end: this.endAngleRad, open: true, innerR: 0 })).xBounds = [a2 + s3[0]], h2.yBounds = [r2 + s3[1] - l2]) : (n2 = this.postTranslate(this.angleRad, l2), h2 = [["M", this.center[0] + o3.plotLeft, this.center[1] + o3.plotTop], ["L", n2.x, n2.y]]), h2;
        }
        function M() {
          this.constructor.prototype.getOffset.call(this), this.chart.axisOffset[this.side] = 0;
        }
        function L(t3, e4, i3) {
          let s3 = this.chart, o3 = (t4) => {
            if ("string" == typeof t4) {
              let e5 = parseInt(t4, 10);
              return d2.test(t4) && (e5 = e5 * n2 / 100), e5;
            }
            return t4;
          }, a2 = this.center, r2 = this.startAngleRad, n2 = a2[2] / 2, l2 = Math.min(this.offset, 0), h2 = this.left || 0, p2 = this.top || 0, d2 = /%$/, c2 = this.isCircular, u2, g2, b2, m2, y2, x2, P2 = f(o3(i3.outerRadius), n2), S2 = o3(i3.innerRadius), M2 = f(o3(i3.thickness), 10);
          if ("polygon" === this.options.gridLineInterpolation) x2 = this.getPlotLinePath({ value: t3 }).concat(this.getPlotLinePath({ value: e4, reverse: true }));
          else {
            t3 = Math.max(t3, this.min), e4 = Math.min(e4, this.max);
            let o4 = this.translate(t3), n3 = this.translate(e4);
            c2 || (P2 = o4 || 0, S2 = n3 || 0), "circle" !== i3.shape && c2 ? (u2 = r2 + (o4 || 0), g2 = r2 + (n3 || 0)) : (u2 = -Math.PI / 2, g2 = 1.5 * Math.PI, y2 = true), P2 -= l2, M2 -= l2, x2 = s3.renderer.symbols.arc(h2 + a2[0], p2 + a2[1], P2, P2, { start: Math.min(u2, g2), end: Math.max(u2, g2), innerR: f(S2, P2 - M2), open: y2, borderRadius: i3.borderRadius }), c2 && (b2 = (g2 + u2) / 2, m2 = h2 + a2[0] + a2[2] / 2 * Math.cos(b2), x2.xBounds = b2 > -Math.PI / 2 && b2 < Math.PI / 2 ? [m2, s3.plotWidth] : [0, m2], x2.yBounds = [p2 + a2[1] + a2[2] / 2 * Math.sin(b2)], x2.yBounds[0] += b2 > -Math.PI && b2 < 0 || b2 > Math.PI ? -10 : 10);
          }
          return x2;
        }
        function C(t3) {
          let e4 = this.pane.center, i3 = this.chart, s3 = i3.inverted, o3 = t3.reverse, a2 = this.pane.options.background ? this.pane.options.background[0] || this.pane.options.background : {}, r2 = a2.innerRadius || "0%", n2 = a2.outerRadius || "100%", l2 = e4[0] + i3.plotLeft, h2 = e4[1] + i3.plotTop, p2 = this.height, d2 = t3.isCrosshair, c2 = e4[3] / 2, u2 = t3.value, g2, f2, b2, y2, x2, P2, S2, M2, L2, C2 = this.getPosition(u2), k2 = C2.x, v2 = C2.y;
          if (d2 && (u2 = (M2 = this.getCrosshairPosition(t3, l2, h2))[0], k2 = M2[1], v2 = M2[2]), this.isCircular) f2 = Math.sqrt(Math.pow(k2 - l2, 2) + Math.pow(v2 - h2, 2)), b2 = "string" == typeof r2 ? m(r2, 1) : r2 / f2, y2 = "string" == typeof n2 ? m(n2, 1) : n2 / f2, e4 && c2 && (b2 < (g2 = c2 / f2) && (b2 = g2), y2 < g2 && (y2 = g2)), L2 = [["M", l2 + b2 * (k2 - l2), h2 - b2 * (h2 - v2)], ["L", k2 - (1 - y2) * (k2 - l2), v2 + (1 - y2) * (h2 - v2)]];
          else if ((u2 = this.translate(u2)) && (u2 < 0 || u2 > p2) && (u2 = 0), "circle" === this.options.gridLineInterpolation) L2 = this.getLinePath(0, u2, c2);
          else if (L2 = [], i3[s3 ? "yAxis" : "xAxis"].forEach((t4) => {
            t4.pane === this.pane && (x2 = t4);
          }), x2) {
            S2 = x2.tickPositions, x2.autoConnect && (S2 = S2.concat([S2[0]])), o3 && (S2 = S2.slice().reverse()), u2 && (u2 += c2);
            for (let t4 = 0; t4 < S2.length; t4++) P2 = x2.getPosition(S2[t4], u2), L2.push(t4 ? ["L", P2.x, P2.y] : ["M", P2.x, P2.y]);
          }
          return L2;
        }
        function k(t3, e4) {
          let i3 = this.translate(t3);
          return this.postTranslate(this.isCircular ? i3 : this.angleRad, f(this.isCircular ? e4 : i3 < 0 ? 0 : i3, this.center[2] / 2) - this.offset);
        }
        function v() {
          let t3 = this.center, e4 = this.chart, i3 = this.options.title;
          return { x: e4.plotLeft + t3[0] + (i3.x || 0), y: e4.plotTop + t3[1] - { high: 0.5, middle: 0.25, low: 0 }[i3.align] * t3[2] + (i3.y || 0) };
        }
        function A(t3) {
          t3.beforeSetTickPositions = s2, t3.createLabelCollector = o2, t3.getCrosshairPosition = P, t3.getLinePath = S, t3.getOffset = M, t3.getPlotBandPath = L, t3.getPlotLinePath = C, t3.getPosition = k, t3.getTitlePosition = v, t3.postTranslate = D, t3.setAxisSize = B, t3.setAxisTranslation = z, t3.setOptions = O;
        }
        function w() {
          let t3 = this.chart, e4 = this.options, i3 = t3.angular && this.isXAxis, s3 = this.pane, o3 = s3 && s3.options;
          if (!i3 && s3 && (t3.angular || t3.polar)) {
            let t4 = 2 * Math.PI, i4 = (f(o3.startAngle, 0) - 90) * Math.PI / 180, s4 = (f(o3.endAngle, f(o3.startAngle, 0) + 360) - 90) * Math.PI / 180;
            this.angleRad = (e4.angle || 0) * Math.PI / 180, this.startAngleRad = i4, this.endAngleRad = s4, this.offset = e4.offset || 0;
            let a2 = (i4 % t4 + t4) % t4, r2 = (s4 % t4 + t4) % t4;
            a2 > Math.PI && (a2 -= t4), r2 > Math.PI && (r2 -= t4), this.normalizedStartAngleRad = a2, this.normalizedEndAngleRad = r2;
          }
        }
        function T(t3) {
          this.isRadial && (t3.align = void 0, t3.preventDefault());
        }
        function N() {
          if (this.chart && this.chart.labelCollectors) {
            let t3 = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
            t3 >= 0 && this.chart.labelCollectors.splice(t3, 1);
          }
        }
        function X(t3) {
          let e4;
          let i3 = this.chart, s3 = i3.angular, o3 = i3.polar, a2 = this.isXAxis, r2 = this.coll, l2 = t3.userOptions.pane || 0, h2 = this.pane = i3.pane && i3.pane[l2];
          if ("colorAxis" === r2) {
            this.isRadial = false;
            return;
          }
          s3 ? (s3 && a2 ? (this.isHidden = true, this.createLabelCollector = x, this.getOffset = n, this.redraw = E, this.render = E, this.setScale = n, this.setCategories = n, this.setTitle = n) : A(this), e4 = !a2) : o3 && (A(this), e4 = this.horiz), s3 || o3 ? (this.isRadial = true, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && i3.labelCollectors.push(this.labelCollector)) : this.isRadial = false, h2 && e4 && (h2.axis = this), this.isCircular = e4;
        }
        function R() {
          this.isRadial && this.beforeSetTickPositions();
        }
        function Y(t3) {
          let e4 = this.label;
          if (!e4) return;
          let i3 = this.axis, s3 = e4.getBBox(), o3 = i3.options.labels, a2 = (i3.translate(this.pos) + i3.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, r2 = Math.round(a2), n2 = p(o3.y) ? 0 : -(0.3 * s3.height), l2 = o3.y, h2, d2 = 20, c2 = o3.align, u2 = "end", g2 = r2 < 0 ? r2 + 360 : r2, b2 = g2, y2 = 0, x2 = 0;
          i3.isRadial && (h2 = i3.getPosition(this.pos, i3.center[2] / 2 + m(f(o3.distance, -25), i3.center[2] / 2, -i3.center[2] / 2)), "auto" === o3.rotation ? e4.attr({ rotation: a2 }) : p(l2) || (l2 = i3.chart.renderer.fontMetrics(e4).b - s3.height / 2), p(c2) || (i3.isCircular ? (s3.width > i3.len * i3.tickInterval / (i3.max - i3.min) && (d2 = 0), c2 = a2 > d2 && a2 < 180 - d2 ? "left" : a2 > 180 + d2 && a2 < 360 - d2 ? "right" : "center") : c2 = "center", e4.attr({ align: c2 })), "auto" === c2 && 2 === i3.tickPositions.length && i3.isCircular && (g2 > 90 && g2 < 180 ? g2 = 180 - g2 : g2 > 270 && g2 <= 360 && (g2 = 540 - g2), b2 > 180 && b2 <= 360 && (b2 = 360 - b2), (i3.pane.options.startAngle === r2 || i3.pane.options.startAngle === r2 + 360 || i3.pane.options.startAngle === r2 - 360) && (u2 = "start"), c2 = r2 >= -90 && r2 <= 90 || r2 >= -360 && r2 <= -270 || r2 >= 270 && r2 <= 360 ? "start" === u2 ? "right" : "left" : "start" === u2 ? "left" : "right", b2 > 70 && b2 < 110 && (c2 = "center"), g2 < 15 || g2 >= 180 && g2 < 195 ? y2 = 0.3 * s3.height : g2 >= 15 && g2 <= 35 ? y2 = "start" === u2 ? 0 : 0.75 * s3.height : g2 >= 195 && g2 <= 215 ? y2 = "start" === u2 ? 0.75 * s3.height : 0 : g2 > 35 && g2 <= 90 ? y2 = "start" === u2 ? -(0.25 * s3.height) : s3.height : g2 > 215 && g2 <= 270 && (y2 = "start" === u2 ? s3.height : -(0.25 * s3.height)), b2 < 15 ? x2 = "start" === u2 ? -(0.15 * s3.height) : 0.15 * s3.height : b2 > 165 && b2 <= 180 && (x2 = "start" === u2 ? 0.15 * s3.height : -(0.15 * s3.height)), e4.attr({ align: c2 }), e4.translate(x2, y2 + n2)), t3.pos.x = h2.x + (o3.x || 0), t3.pos.y = h2.y + (l2 || 0));
        }
        function j(t3) {
          this.axis.getPosition && d(t3.pos, this.axis.getPosition(this.pos));
        }
        function I({ options: t3 }) {
          t3.xAxis && g(true, e3.radialDefaultOptions.circular, t3.xAxis), t3.yAxis && g(true, e3.radialDefaultOptions.radialGauge, t3.yAxis);
        }
        function D(t3, e4) {
          let i3 = this.chart, s3 = this.center;
          return t3 = this.startAngleRad + t3, { x: i3.plotLeft + s3[0] + Math.cos(t3) * e4, y: i3.plotTop + s3[1] + Math.sin(t3) * e4 };
        }
        function E() {
          this.isDirty = false;
        }
        function B() {
          let t3, e4;
          this.constructor.prototype.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(this), t3 = this.center = this.pane.center.slice(), this.isCircular ? this.sector = this.endAngleRad - this.startAngleRad : (e4 = this.postTranslate(this.angleRad, t3[3] / 2), t3[0] = e4.x - this.chart.plotLeft, t3[1] = e4.y - this.chart.plotTop), this.len = this.width = this.height = (t3[2] - t3[3]) * f(this.sector, 1) / 2);
        }
        function z() {
          this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.isCircular ? this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.transA = (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.isXAxis ? this.minPixelPadding = this.transA * this.minPointOffset : this.minPixelPadding = 0);
        }
        function O(t3) {
          let { coll: i3 } = this, { angular: s3, inverted: o3, polar: r2 } = this.chart, n2 = {};
          s3 ? this.isXAxis || (n2 = g(a.yAxis, e3.radialDefaultOptions.radialGauge)) : r2 && (n2 = this.horiz ? g(a.xAxis, e3.radialDefaultOptions.circular) : g("xAxis" === i3 ? a.xAxis : a.yAxis, e3.radialDefaultOptions.radial)), o3 && "yAxis" === i3 && (n2.stackLabels = u(a.yAxis, true) ? a.yAxis.stackLabels : {}, n2.reversedStacks = true);
          let l2 = this.options = g(n2, t3);
          l2.plotBands || (l2.plotBands = []), c(this, "afterSetOptions");
        }
        function W(t3, e4, i3, s3, o3, a2, r2) {
          let n2;
          let l2 = this.axis;
          return l2.isRadial ? ["M", e4, i3, "L", (n2 = l2.getPosition(this.pos, l2.center[2] / 2 + s3)).x, n2.y] : t3.call(this, e4, i3, s3, o3, a2, r2);
        }
        e3.radialDefaultOptions = g(t2), e3.compose = function(t3, e4) {
          return b(r, "Axis.Radial") && (l(t3, "afterInit", w), l(t3, "autoLabelAlign", T), l(t3, "destroy", N), l(t3, "init", X), l(t3, "initialAxisTranslation", R), l(e4, "afterGetLabelPosition", Y), l(e4, "afterGetPosition", j), l(i2, "setOptions", I), y(e4.prototype, "getMarkPath", W)), t3;
        };
      }(o || (o = {})), o;
    }), i(e, "Series/PolarComposition.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Extensions/Pane/Pane.js"], e["Core/Axis/RadialAxis.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, a) {
      let { animObject: r } = t2, { composed: n } = e2, { addEvent: l, defined: h, find: p, isNumber: d, merge: c, pick: u, pushUnique: g, relativeLength: f, splat: b, uniqueKey: m, wrap: y } = a;
      function x() {
        (this.pane || []).forEach((t3) => {
          t3.render();
        });
      }
      function P(t3) {
        let e3 = t3.args[0].xAxis, i3 = t3.args[0].yAxis, s2 = t3.args[0].chart;
        e3 && i3 && ("polygon" === i3.gridLineInterpolation ? (e3.startOnTick = true, e3.endOnTick = true) : "polygon" === e3.gridLineInterpolation && s2.inverted && (i3.startOnTick = true, i3.endOnTick = true));
      }
      function S() {
        this.pane || (this.pane = []), this.options.pane = b(this.options.pane), this.options.pane.forEach((t3) => {
          new s(t3, this);
        }, this);
      }
      function M(t3) {
        let e3 = t3.args.marker, i3 = this.chart.xAxis[0], s2 = this.chart.yAxis[0], o2 = this.chart.inverted, a2 = o2 ? s2 : i3, r2 = o2 ? i3 : s2;
        if (this.chart.polar) {
          t3.preventDefault();
          let i4 = (e3.attr ? e3.attr("start") : e3.start) - a2.startAngleRad, s3 = e3.attr ? e3.attr("r") : e3.r, o3 = (e3.attr ? e3.attr("end") : e3.end) - a2.startAngleRad, n2 = e3.attr ? e3.attr("innerR") : e3.innerR;
          t3.result.x = i4 + a2.pos, t3.result.width = o3 - i4, t3.result.y = r2.len + r2.pos - s3, t3.result.height = s3 - n2;
        }
      }
      function L(t3) {
        let e3 = this.chart;
        if (e3.polar && e3.hoverPane && e3.hoverPane.axis) {
          t3.preventDefault();
          let i3 = e3.hoverPane.center, s2 = e3.mouseDownX || 0, o2 = e3.mouseDownY || 0, a2 = t3.args.chartY, r2 = t3.args.chartX, n2 = 2 * Math.PI, l2 = e3.hoverPane.axis.startAngleRad, h2 = e3.hoverPane.axis.endAngleRad, p2 = e3.inverted ? e3.xAxis[0] : e3.yAxis[0], d2 = {}, c2 = "arc";
          if (d2.x = i3[0] + e3.plotLeft, d2.y = i3[1] + e3.plotTop, this.zoomHor) {
            let t4 = l2 > 0 ? h2 - l2 : Math.abs(l2) + Math.abs(h2), u2 = Math.atan2(o2 - e3.plotTop - i3[1], s2 - e3.plotLeft - i3[0]) - l2, g2 = Math.atan2(a2 - e3.plotTop - i3[1], r2 - e3.plotLeft - i3[0]) - l2;
            d2.r = i3[2] / 2, d2.innerR = i3[3] / 2, u2 <= 0 && (u2 += n2), g2 <= 0 && (g2 += n2), g2 < u2 && (g2 = [u2, u2 = g2][0]), t4 < n2 && l2 + g2 > h2 + (n2 - t4) / 2 && (g2 = u2, u2 = l2 <= 0 ? l2 : 0);
            let f2 = d2.start = Math.max(u2 + l2, l2), b2 = d2.end = Math.min(g2 + l2, h2);
            if ("polygon" === p2.options.gridLineInterpolation) {
              let t5 = e3.hoverPane.axis, s3 = f2 - t5.startAngleRad + t5.pos, o3 = p2.getPlotLinePath({ value: p2.max }), a3 = t5.toValue(s3), r3 = t5.toValue(s3 + (b2 - f2));
              if (a3 < t5.getExtremes().min) {
                let { min: e4, max: i4 } = t5.getExtremes();
                a3 = i4 - (e4 - a3);
              }
              if (r3 < t5.getExtremes().min) {
                let { min: e4, max: i4 } = t5.getExtremes();
                r3 = i4 - (e4 - r3);
              }
              r3 < a3 && (r3 = [a3, a3 = r3][0]), (o3 = A(o3, a3, r3, t5)).push(["L", i3[0] + e3.plotLeft, e3.plotTop + i3[1]]), d2.d = o3, c2 = "path";
            }
          }
          if (this.zoomVert) {
            let t4 = e3.inverted ? e3.xAxis[0] : e3.yAxis[0], n3 = Math.sqrt(Math.pow(s2 - e3.plotLeft - i3[0], 2) + Math.pow(o2 - e3.plotTop - i3[1], 2)), p3 = Math.sqrt(Math.pow(r2 - e3.plotLeft - i3[0], 2) + Math.pow(a2 - e3.plotTop - i3[1], 2));
            if (p3 < n3 && (n3 = [p3, p3 = n3][0]), p3 > i3[2] / 2 && (p3 = i3[2] / 2), n3 < i3[3] / 2 && (n3 = i3[3] / 2), this.zoomHor || (d2.start = l2, d2.end = h2), d2.r = p3, d2.innerR = n3, "polygon" === t4.options.gridLineInterpolation) {
              let e4 = t4.toValue(t4.len + t4.pos - n3), i4 = t4.toValue(t4.len + t4.pos - p3), s3 = t4.getPlotLinePath({ value: i4 }).concat(t4.getPlotLinePath({ value: e4, reverse: true }));
              d2.d = s3, c2 = "path";
            }
          }
          if (this.zoomHor && this.zoomVert && "polygon" === p2.options.gridLineInterpolation) {
            let t4 = e3.hoverPane.axis, i4 = d2.start || 0, s3 = d2.end || 0, o3 = i4 - t4.startAngleRad + t4.pos, a3 = t4.toValue(o3), r3 = t4.toValue(o3 + (s3 - i4));
            if (d2.d instanceof Array) {
              let t5 = d2.d.slice(0, d2.d.length / 2), i5 = d2.d.slice(d2.d.length / 2, d2.d.length);
              i5 = [...i5].reverse();
              let s4 = e3.hoverPane.axis;
              t5 = A(t5, a3, r3, s4), (i5 = A(i5, a3, r3, s4)) && (i5[0][0] = "L"), i5 = [...i5].reverse(), d2.d = t5.concat(i5), c2 = "path";
            }
          }
          t3.attrs = d2, t3.shapeType = c2;
        }
      }
      function C() {
        let t3 = this.chart;
        t3.polar && (this.polar = new E(this), t3.inverted && (this.isRadialSeries = true, this.is("column") && (this.isRadialBar = true)));
      }
      function k() {
        if (this.chart.polar && this.xAxis) {
          let { xAxis: t3, yAxis: i3 } = this, s2 = this.chart;
          this.kdByAngle = s2.tooltip && s2.tooltip.shared, this.kdByAngle || s2.inverted ? this.searchPoint = v : this.options.findNearestPointBy = "xy";
          let o2 = this.points, a2 = o2.length;
          for (; a2--; ) this.is("column") || this.is("columnrange") || this.polar.toXY(o2[a2]), s2.hasParallelCoordinates || this.yAxis.reversed || (u(o2[a2].y, Number.MIN_VALUE) < i3.min || o2[a2].x < t3.min || o2[a2].x > t3.max ? (o2[a2].isNull = true, o2[a2].plotY = NaN) : o2[a2].isNull = o2[a2].isValid && !o2[a2].isValid());
          this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(l(this, "afterRender", function() {
            let t4;
            s2.polar && false !== this.options.clip && (t4 = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({ x: t4[0], y: t4[1], r: t4[2] / 2, innerR: t4[3] / 2 }) : this.clipCircle = function(t5, e3, i4, s3, o3) {
              let a3 = m(), r2 = t5.createElement("clipPath").attr({ id: a3 }).add(t5.defs), n2 = o3 ? t5.arc(e3, i4, s3, o3, 0, 2 * Math.PI).add(r2) : t5.circle(e3, i4, s3).add(r2);
              return n2.id = a3, n2.clipPath = r2, n2;
            }(s2.renderer, t4[0], t4[1], t4[2] / 2, t4[3] / 2), this.group.clip(this.clipCircle), this.setClip = e2.noop);
          })));
        }
      }
      function v(t3) {
        let e3 = this.chart, i3 = this.xAxis, s2 = this.yAxis, o2 = i3.pane && i3.pane.center, a2 = t3.chartX - (o2 && o2[0] || 0) - e3.plotLeft, r2 = t3.chartY - (o2 && o2[1] || 0) - e3.plotTop, n2 = e3.inverted ? { clientX: t3.chartX - s2.pos, plotY: t3.chartY - i3.pos } : { clientX: 180 + -180 / Math.PI * Math.atan2(a2, r2) };
        return this.searchKDTree(n2);
      }
      function A(t3, e3, i3, s2) {
        let o2 = s2.tickInterval, a2 = s2.tickPositions, r2 = p(a2, (t4) => t4 >= i3), n2 = p([...a2].reverse(), (t4) => t4 <= e3);
        return h(r2) || (r2 = a2[a2.length - 1]), h(n2) || (n2 = a2[0], r2 += o2, t3[0][0] = "L", t3.unshift(t3[t3.length - 3])), (t3 = t3.slice(a2.indexOf(n2), a2.indexOf(r2) + 1))[0][0] = "M", t3;
      }
      function w(t3, e3) {
        return p(this.pane || [], (t4) => t4.options.id === e3) || t3.call(this, e3);
      }
      function T(t3, e3, s2, o2, a2, r2) {
        let n2, l2, h2;
        let p2 = this.chart, d2 = u(o2.inside, !!this.options.stacking);
        if (p2.polar) {
          if (n2 = e3.rectPlotX / Math.PI * 180, p2.inverted) this.forceDL = p2.isInsidePlot(e3.plotX, e3.plotY), d2 && e3.shapeArgs ? (l2 = e3.shapeArgs, a2 = c(a2, { x: (h2 = this.yAxis.postTranslate(((l2.start || 0) + (l2.end || 0)) / 2 - this.xAxis.startAngleRad, e3.barX + e3.pointWidth / 2)).x - p2.plotLeft, y: h2.y - p2.plotTop })) : e3.tooltipPos && (a2 = c(a2, { x: e3.tooltipPos[0], y: e3.tooltipPos[1] })), o2.align = u(o2.align, "center"), o2.verticalAlign = u(o2.verticalAlign, "middle");
          else {
            var g2;
            let t4, e4;
            null === (g2 = o2).align && (t4 = n2 > 20 && n2 < 160 ? "left" : n2 > 200 && n2 < 340 ? "right" : "center", g2.align = t4), null === g2.verticalAlign && (e4 = n2 < 45 || n2 > 315 ? "bottom" : n2 > 135 && n2 < 225 ? "top" : "middle", g2.verticalAlign = e4), o2 = g2;
          }
          i2.prototype.alignDataLabel.call(this, e3, s2, o2, a2, r2), this.isRadialBar && e3.shapeArgs && e3.shapeArgs.start === e3.shapeArgs.end ? s2.hide() : s2.show();
        } else t3.call(this, e3, s2, o2, a2, r2);
      }
      function N() {
        let t3 = this.options, e3 = t3.stacking, i3 = this.chart, s2 = this.xAxis, o2 = this.yAxis, r2 = o2.reversed, n2 = o2.center, l2 = s2.startAngleRad, p2 = s2.endAngleRad - l2, c2 = t3.threshold, u2 = 0, g2, b2, m2, y2, x2, P2 = 0, S2 = 0, M2, L2, C2, k2, v2, A2, w2, T2;
        if (s2.isRadial) for (m2 = (g2 = this.points).length, y2 = o2.translate(o2.min), x2 = o2.translate(o2.max), c2 = t3.threshold || 0, i3.inverted && d(c2) && h(u2 = o2.translate(c2)) && (u2 < 0 ? u2 = 0 : u2 > p2 && (u2 = p2), this.translatedThreshold = u2 + l2); m2--; ) {
          if (A2 = (b2 = g2[m2]).barX, L2 = b2.x, C2 = b2.y, b2.shapeType = "arc", i3.inverted) {
            b2.plotY = o2.translate(C2), e3 && o2.stacking ? (v2 = o2.stacking.stacks[(C2 < 0 ? "-" : "") + this.stackKey], this.visible && v2 && v2[L2] && !b2.isNull && (k2 = v2[L2].points[this.getStackIndicator(void 0, L2, this.index).key], P2 = o2.translate(k2[0]), S2 = o2.translate(k2[1]), h(P2) && (P2 = a.clamp(P2, 0, p2)))) : (P2 = u2, S2 = b2.plotY), P2 > S2 && (S2 = [P2, P2 = S2][0]), r2 ? S2 > y2 ? S2 = y2 : P2 < x2 ? P2 = x2 : (P2 > y2 || S2 < x2) && (P2 = S2 = p2) : P2 < y2 ? P2 = y2 : S2 > x2 ? S2 = x2 : (S2 < y2 || P2 > x2) && (P2 = S2 = 0), o2.min > o2.max && (P2 = S2 = r2 ? p2 : 0), P2 += l2, S2 += l2, n2 && (b2.barX = A2 += n2[3] / 2), w2 = Math.max(A2, 0), T2 = Math.max(A2 + b2.pointWidth, 0);
            let i4 = t3.borderRadius, s3 = f(("object" == typeof i4 ? i4.radius : i4) || 0, T2 - w2);
            b2.shapeArgs = { x: n2[0], y: n2[1], r: T2, innerR: w2, start: P2, end: S2, borderRadius: s3 }, b2.opacity = P2 === S2 ? 0 : void 0, b2.plotY = (h(this.translatedThreshold) && (P2 < this.translatedThreshold ? P2 : S2)) - l2;
          } else P2 = A2 + l2, b2.shapeArgs = this.polar.arc(b2.yBottom, b2.plotY, P2, P2 + b2.pointWidth), b2.shapeArgs.borderRadius = 0;
          this.polar.toXY(b2), i3.inverted ? (M2 = o2.postTranslate(b2.rectPlotY, A2 + b2.pointWidth / 2), b2.tooltipPos = [M2.x - i3.plotLeft, M2.y - i3.plotTop]) : b2.tooltipPos = [b2.plotX, b2.plotY], n2 && (b2.ttBelow = b2.plotY > n2[1]);
        }
      }
      function X(t3, e3) {
        let i3, s2;
        let o2 = this;
        if (this.chart.polar) {
          e3 = e3 || this.points;
          for (let t4 = 0; t4 < e3.length; t4++) if (!e3[t4].isNull) {
            i3 = t4;
            break;
          }
          false !== this.options.connectEnds && void 0 !== i3 && (this.connectEnds = true, e3.splice(e3.length, 0, e3[i3]), s2 = true), e3.forEach((t4) => {
            void 0 === t4.polarPlotY && o2.polar.toXY(t4);
          });
        }
        let a2 = t3.apply(this, [].slice.call(arguments, 1));
        return s2 && e3.pop(), a2;
      }
      function R(t3, e3) {
        let i3 = this.chart, s2 = { xAxis: [], yAxis: [] };
        return i3.polar ? i3.axes.forEach((t4) => {
          if ("colorAxis" === t4.coll) return;
          let o2 = t4.isXAxis, a2 = t4.center, r2 = e3.chartX - a2[0] - i3.plotLeft, n2 = e3.chartY - a2[1] - i3.plotTop;
          s2[o2 ? "xAxis" : "yAxis"].push({ axis: t4, value: t4.translate(o2 ? Math.PI - Math.atan2(r2, n2) : Math.sqrt(Math.pow(r2, 2) + Math.pow(n2, 2)), true) });
        }) : s2 = t3.call(this, e3), s2;
      }
      function Y(t3, e3) {
        this.chart.polar || t3.call(this, e3);
      }
      function j(t3, i3) {
        let s2 = this, o2 = this.chart, a2 = this.group, n2 = this.markerGroup, l2 = this.xAxis && this.xAxis.center, h2 = o2.plotLeft, p2 = o2.plotTop, d2 = this.options.animation, c2, g2, f2, b2, m2, y2;
        o2.polar ? s2.isRadialBar ? i3 || (s2.startAngleRad = u(s2.translatedThreshold, s2.xAxis.startAngleRad), e2.seriesTypes.pie.prototype.animate.call(s2, i3)) : (d2 = r(d2), s2.is("column") ? i3 || (g2 = l2[3] / 2, s2.points.forEach((t4) => {
          f2 = t4.graphic, m2 = (b2 = t4.shapeArgs) && b2.r, y2 = b2 && b2.innerR, f2 && b2 && (f2.attr({ r: g2, innerR: g2 }), f2.animate({ r: m2, innerR: y2 }, s2.options.animation));
        })) : i3 ? (c2 = { translateX: l2[0] + h2, translateY: l2[1] + p2, scaleX: 1e-3, scaleY: 1e-3 }, a2.attr(c2), n2 && n2.attr(c2)) : (c2 = { translateX: h2, translateY: p2, scaleX: 1, scaleY: 1 }, a2.animate(c2, d2), n2 && n2.animate(c2, d2))) : t3.call(this, i3);
      }
      function I(t3, e3, i3, s2) {
        let o2, a2;
        if (this.chart.polar) {
          if (s2) {
            let t4 = (a2 = function t5(e4, i5, s3, o3) {
              let a3, r2, n2, l2, h2, p2;
              let d2 = o3 ? 1 : 0, c2 = (a3 = i5 >= 0 && i5 <= e4.length - 1 ? i5 : i5 < 0 ? e4.length - 1 + i5 : 0) - 1 < 0 ? e4.length - (1 + d2) : a3 - 1, u2 = a3 + 1 > e4.length - 1 ? d2 : a3 + 1, g2 = e4[c2], f2 = e4[u2], b2 = g2.plotX, m2 = g2.plotY, y2 = f2.plotX, x2 = f2.plotY, P2 = e4[a3].plotX, S2 = e4[a3].plotY;
              r2 = (1.5 * P2 + b2) / 2.5, n2 = (1.5 * S2 + m2) / 2.5, l2 = (1.5 * P2 + y2) / 2.5, h2 = (1.5 * S2 + x2) / 2.5;
              let M2 = Math.sqrt(Math.pow(r2 - P2, 2) + Math.pow(n2 - S2, 2)), L2 = Math.sqrt(Math.pow(l2 - P2, 2) + Math.pow(h2 - S2, 2)), C2 = Math.atan2(n2 - S2, r2 - P2);
              p2 = Math.PI / 2 + (C2 + Math.atan2(h2 - S2, l2 - P2)) / 2, Math.abs(C2 - p2) > Math.PI / 2 && (p2 -= Math.PI), r2 = P2 + Math.cos(p2) * M2, n2 = S2 + Math.sin(p2) * M2;
              let k2 = { rightContX: l2 = P2 + Math.cos(Math.PI + p2) * L2, rightContY: h2 = S2 + Math.sin(Math.PI + p2) * L2, leftContX: r2, leftContY: n2, plotX: P2, plotY: S2 };
              return s3 && (k2.prevPointCont = t5(e4, c2, false, o3)), k2;
            }(e3, s2, true, this.connectEnds)).prevPointCont && a2.prevPointCont.rightContX, i4 = a2.prevPointCont && a2.prevPointCont.rightContY;
            o2 = ["C", d(t4) ? t4 : a2.plotX, d(i4) ? i4 : a2.plotY, d(a2.leftContX) ? a2.leftContX : a2.plotX, d(a2.leftContY) ? a2.leftContY : a2.plotY, a2.plotX, a2.plotY];
          } else o2 = ["M", i3.plotX, i3.plotY];
        } else o2 = t3.call(this, e3, i3, s2);
        return o2;
      }
      function D(t3, e3, i3 = this.plotY) {
        if (!this.destroyed) {
          let { plotX: s2, series: o2 } = this, { chart: a2 } = o2;
          return a2.polar && d(s2) && d(i3) ? [s2 + (e3 ? a2.plotLeft : 0), i3 + (e3 ? a2.plotTop : 0)] : t3.call(this, e3, i3);
        }
      }
      class E {
        static compose(t3, e3, i3, a2, r2, h2, p2, d2, c2, u2) {
          if (s.compose(e3, i3), o.compose(t3, r2), g(n, "Polar")) {
            let t4 = e3.prototype, s2 = h2.prototype, o2 = i3.prototype, r3 = a2.prototype;
            if (l(e3, "afterDrawChartBox", x), l(e3, "getAxes", S), l(e3, "init", P), y(t4, "get", w), y(o2, "getCoordinates", R), y(o2, "pinch", Y), l(i3, "getSelectionMarkerAttrs", L), l(i3, "getSelectionBox", M), l(a2, "afterInit", C), l(a2, "afterTranslate", k, { order: 2 }), l(a2, "afterColumnTranslate", N, { order: 4 }), y(r3, "animate", j), y(s2, "pos", D), d2) {
              let t5 = d2.prototype;
              y(t5, "alignDataLabel", T), y(t5, "animate", j);
            }
            if (c2 && y(c2.prototype, "getGraphPath", X), u2) {
              let t5 = u2.prototype;
              y(t5, "getPointSpline", I), p2 && (p2.prototype.getPointSpline = t5.getPointSpline);
            }
          }
        }
        constructor(t3) {
          this.series = t3;
        }
        arc(t3, e3, i3, s2) {
          let o2 = this.series, a2 = o2.xAxis.center, r2 = o2.yAxis.len, n2 = a2[3] / 2, l2 = r2 - e3 + n2, h2 = r2 - u(t3, r2) + n2;
          return o2.yAxis.reversed && (l2 < 0 && (l2 = n2), h2 < 0 && (h2 = n2)), { x: a2[0], y: a2[1], r: l2, innerR: h2, start: i3, end: s2 };
        }
        toXY(t3) {
          let e3 = this.series, i3 = e3.chart, s2 = e3.xAxis, o2 = e3.yAxis, a2 = t3.plotX, r2 = i3.inverted, n2 = t3.y, l2 = t3.plotY, h2 = r2 ? a2 : o2.len - l2, p2;
          if (r2 && e3 && !e3.isRadialBar && (t3.plotY = l2 = d(n2) ? o2.translate(n2) : 0), t3.rectPlotX = a2, t3.rectPlotY = l2, o2.center && (h2 += o2.center[3] / 2), d(l2)) {
            let e4 = r2 ? o2.postTranslate(l2, h2) : s2.postTranslate(a2, h2);
            t3.plotX = t3.polarPlotX = e4.x - i3.plotLeft, t3.plotY = t3.polarPlotY = e4.y - i3.plotTop;
          }
          e3.kdByAngle ? ((p2 = (a2 / Math.PI * 180 + s2.pane.options.startAngle) % 360) < 0 && (p2 += 360), t3.clientX = p2) : t3.clientX = t3.plotX;
        }
      }
      return E;
    }), i(e, "Core/Axis/WaterfallAxis.js", [e["Core/Globals.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      var s;
      let { composed: o } = t2, { addEvent: a, objectEach: r, pushUnique: n } = i2;
      return function(t3) {
        function i3() {
          let t4 = this.waterfall.stacks;
          t4 && (t4.changed = false, delete t4.alreadyChanged);
        }
        function s2() {
          let t4 = this.options.stackLabels;
          t4 && t4.enabled && this.waterfall.stacks && this.waterfall.renderStackTotals();
        }
        function l() {
          this.waterfall || (this.waterfall = new p(this));
        }
        function h() {
          let t4 = this.axes;
          for (let e3 of this.series) if (e3.options.stacking) {
            for (let e4 of t4) e4.isXAxis || (e4.waterfall.stacks.changed = true);
            break;
          }
        }
        t3.compose = function(t4, e3) {
          n(o, "Axis.Waterfall") && (a(t4, "init", l), a(t4, "afterBuildStacks", i3), a(t4, "afterRender", s2), a(e3, "beforeRedraw", h));
        };
        class p {
          constructor(t4) {
            this.axis = t4, this.stacks = { changed: false };
          }
          renderStackTotals() {
            let t4 = this.axis, i4 = t4.waterfall.stacks, s3 = t4.stacking && t4.stacking.stackTotalGroup, o2 = new e2(t4, t4.options.stackLabels || {}, false, 0, void 0);
            this.dummyStackItem = o2, s3 && r(i4, (t5) => {
              r(t5, (t6, i5) => {
                o2.total = t6.stackTotal, o2.x = +i5, t6.label && (o2.label = t6.label), e2.prototype.render.call(o2, s3), t6.label = o2.label, delete o2.label;
              });
            }), o2.total = null;
          }
        }
        t3.Composition = p;
      }(s || (s = {})), s;
    }), i(e, "Series/Waterfall/WaterfallPoint.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
      let { isNumber: s } = i2;
      class o extends t2.prototype.pointClass {
        getClassName() {
          let t3 = e2.prototype.getClassName.call(this);
          return this.isSum ? t3 += " highcharts-sum" : this.isIntermediateSum && (t3 += " highcharts-intermediate-sum"), t3;
        }
        isValid() {
          return s(this.y) || this.isSum || !!this.isIntermediateSum;
        }
      }
      return o;
    }), i(e, "Series/Waterfall/WaterfallSeriesDefaults.js", [], function() {
      return { dataLabels: { inside: true }, lineWidth: 1, lineColor: "#333333", dashStyle: "Dot", borderColor: "#333333", states: { hover: { lineWidthPlus: 0 } } };
    }), i(e, "Series/Waterfall/WaterfallSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Core/Axis/WaterfallAxis.js"], e["Series/Waterfall/WaterfallPoint.js"], e["Series/Waterfall/WaterfallSeriesDefaults.js"]], function(t2, e2, i2, s, o) {
      let { column: a, line: r } = t2.seriesTypes, { addEvent: n, arrayMax: l, arrayMin: h, correctFloat: p, crisp: d, extend: c, isNumber: u, merge: g, objectEach: f, pick: b } = e2;
      function m(t3, e3) {
        return Object.hasOwnProperty.call(t3, e3);
      }
      class y extends a {
        generatePoints() {
          a.prototype.generatePoints.apply(this);
          for (let t3 = 0, e3 = this.points.length; t3 < e3; t3++) {
            let e4 = this.points[t3], i3 = this.processedYData[t3];
            u(i3) && (e4.isIntermediateSum || e4.isSum) && (e4.y = p(i3));
          }
        }
        processData(t3) {
          let e3, i3, s2, o2, a2, r2;
          let n2 = this.options, l2 = this.yData, h2 = n2.data, d2 = l2.length, c2 = n2.threshold || 0;
          s2 = i3 = o2 = a2 = 0;
          for (let t4 = 0; t4 < d2; t4++) r2 = l2[t4], e3 = h2 && h2[t4] ? h2[t4] : {}, "sum" === r2 || e3.isSum ? l2[t4] = p(s2) : "intermediateSum" === r2 || e3.isIntermediateSum ? (l2[t4] = p(i3), i3 = 0) : (s2 += r2, i3 += r2), o2 = Math.min(s2, o2), a2 = Math.max(s2, a2);
          super.processData.call(this, t3), n2.stacking || (this.dataMin = o2 + c2, this.dataMax = a2);
        }
        toYData(t3) {
          return t3.isSum ? "sum" : t3.isIntermediateSum ? "intermediateSum" : t3.y;
        }
        updateParallelArrays(t3, e3) {
          super.updateParallelArrays.call(this, t3, e3), ("sum" === this.yData[0] || "intermediateSum" === this.yData[0]) && (this.yData[0] = null);
        }
        pointAttribs(t3, e3) {
          let i3 = this.options.upColor;
          i3 && !t3.options.color && u(t3.y) && (t3.color = t3.y > 0 ? i3 : void 0);
          let s2 = a.prototype.pointAttribs.call(this, t3, e3);
          return delete s2.dashstyle, s2;
        }
        getGraphPath() {
          return [["M", 0, 0]];
        }
        getCrispPath() {
          var _a;
          let t3 = this.data.filter((t4) => u(t4.y)), e3 = this.yAxis, i3 = t3.length, s2 = ((_a = this.graph) == null ? void 0 : _a.strokeWidth()) || 0, o2 = this.xAxis.reversed, a2 = this.yAxis.reversed, r2 = this.options.stacking, n2 = [];
          for (let l2 = 1; l2 < i3; l2++) {
            if (!(this.options.connectNulls || u(this.data[t3[l2].index - 1].y))) continue;
            let i4 = t3[l2].box, h2 = t3[l2 - 1], p2 = h2.y || 0, c2 = t3[l2 - 1].box;
            if (!i4 || !c2) continue;
            let g2 = e3.waterfall.stacks[this.stackKey], f2 = p2 > 0 ? -c2.height : 0;
            if (g2 && c2 && i4) {
              let t4;
              let p3 = g2[l2 - 1];
              if (r2) {
                let i5 = p3.connectorThreshold;
                t4 = d(e3.translate(i5, false, true, false, true) + (a2 ? f2 : 0), s2);
              } else t4 = d(c2.y + (h2.minPointLengthOffset || 0), s2);
              n2.push(["M", (c2.x || 0) + (o2 ? 0 : c2.width || 0), t4], ["L", (i4.x || 0) + (o2 && i4.width || 0), t4]);
            }
            if (c2 && n2.length && (!r2 && p2 < 0 && !a2 || p2 > 0 && a2)) {
              let t4 = n2[n2.length - 2];
              t4 && "number" == typeof t4[2] && (t4[2] += c2.height || 0);
              let e4 = n2[n2.length - 1];
              e4 && "number" == typeof e4[2] && (e4[2] += c2.height || 0);
            }
          }
          return n2;
        }
        drawGraph() {
          r.prototype.drawGraph.call(this), this.graph && this.graph.attr({ d: this.getCrispPath() });
        }
        setStackedPoints(t3) {
          var _a;
          let e3 = this.options, i3 = (_a = t3.waterfall) == null ? void 0 : _a.stacks, s2 = e3.threshold || 0, o2 = this.stackKey, a2 = this.xData, r2 = a2.length, n2 = s2, l2 = n2, h2, p2 = 0, d2 = 0, c2 = 0, u2, g2, f2, b2, m2, y2, x, P, S = (t4, e4, i4, s3) => {
            if (h2) {
              if (u2) for (; i4 < u2; i4++) h2.stackState[i4] += s3;
              else h2.stackState[0] = t4, u2 = h2.stackState.length;
              h2.stackState.push(h2.stackState[u2 - 1] + e4);
            }
          };
          if (t3.stacking && i3 && this.reserveSpace()) {
            P = i3.changed, (x = i3.alreadyChanged) && 0 > x.indexOf(o2) && (P = true), i3[o2] || (i3[o2] = {});
            let t4 = i3[o2];
            if (t4) for (let i4 = 0; i4 < r2; i4++) (!t4[y2 = a2[i4]] || P) && (t4[y2] = { negTotal: 0, posTotal: 0, stackTotal: 0, threshold: 0, stateIndex: 0, stackState: [], label: P && t4[y2] ? t4[y2].label : void 0 }), h2 = t4[y2], (m2 = this.yData[i4]) >= 0 ? h2.posTotal += m2 : h2.negTotal += m2, b2 = e3.data[i4], g2 = h2.absolutePos = h2.posTotal, f2 = h2.absoluteNeg = h2.negTotal, h2.stackTotal = g2 + f2, u2 = h2.stackState.length, b2 && b2.isIntermediateSum ? (S(c2, d2, 0, c2), c2 = d2, d2 = s2, n2 ^= l2, l2 ^= n2, n2 ^= l2) : b2 && b2.isSum ? (S(s2, p2, u2, 0), n2 = s2) : (S(n2, m2, 0, p2), b2 && (p2 += m2, d2 += m2)), h2.stateIndex++, h2.threshold = n2, n2 += h2.stackTotal;
            i3.changed = false, i3.alreadyChanged || (i3.alreadyChanged = []), i3.alreadyChanged.push(o2);
          }
        }
        getExtremes() {
          let t3, e3, i3;
          let s2 = this.options.stacking;
          return s2 ? (t3 = this.yAxis.waterfall.stacks, e3 = this.stackedYNeg = [], i3 = this.stackedYPos = [], "overlap" === s2 ? f(t3[this.stackKey], function(t4) {
            e3.push(h(t4.stackState)), i3.push(l(t4.stackState));
          }) : f(t3[this.stackKey], function(t4) {
            e3.push(t4.negTotal + t4.threshold), i3.push(t4.posTotal + t4.threshold);
          }), { dataMin: h(e3), dataMax: l(i3) }) : { dataMin: this.dataMin, dataMax: this.dataMax };
        }
      }
      return y.defaultOptions = g(a.defaultOptions, o), y.compose = i2.compose, c(y.prototype, { pointValKey: "y", showLine: true, pointClass: s }), n(y, "afterColumnTranslate", function() {
        let { options: t3, points: e3, yAxis: i3 } = this, s2 = b(t3.minPointLength, 5), o2 = s2 / 2, a2 = t3.threshold || 0, r2 = t3.stacking, n2 = i3.waterfall.stacks[this.stackKey], l2 = a2, h2 = a2, p2, f2, y2, x;
        for (let t4 = 0; t4 < e3.length; t4++) {
          let b2 = e3[t4], P = this.processedYData[t4], S = c({ x: 0, y: 0, width: 0, height: 0 }, b2.shapeArgs || {});
          b2.box = S;
          let M = [0, P], L = b2.y || 0;
          if (r2) {
            if (n2) {
              let e4 = n2[t4];
              "overlap" === r2 ? (f2 = e4.stackState[e4.stateIndex--], p2 = L >= 0 ? f2 : f2 - L, m(e4, "absolutePos") && delete e4.absolutePos, m(e4, "absoluteNeg") && delete e4.absoluteNeg) : (L >= 0 ? (f2 = e4.threshold + e4.posTotal, e4.posTotal -= L, p2 = f2) : (f2 = e4.threshold + e4.negTotal, e4.negTotal -= L, p2 = f2 - L), !e4.posTotal && u(e4.absolutePos) && m(e4, "absolutePos") && (e4.posTotal = e4.absolutePos, delete e4.absolutePos), !e4.negTotal && u(e4.absoluteNeg) && m(e4, "absoluteNeg") && (e4.negTotal = e4.absoluteNeg, delete e4.absoluteNeg)), b2.isSum || (e4.connectorThreshold = e4.threshold + e4.stackTotal), i3.reversed ? (y2 = L >= 0 ? p2 - L : p2 + L, x = p2) : (y2 = p2, x = p2 - L), b2.below = y2 <= a2, S.y = i3.translate(y2, false, true, false, true), S.height = Math.abs(S.y - i3.translate(x, false, true, false, true));
              let s3 = i3.waterfall.dummyStackItem;
              s3 && (s3.x = t4, s3.label = n2[t4].label, s3.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[t4], this.stackedYPos[t4], void 0, this.xAxis));
            }
          } else p2 = Math.max(h2, h2 + L) + M[0], S.y = i3.translate(p2, false, true, false, true), b2.isSum ? (S.y = i3.translate(M[1], false, true, false, true), S.height = Math.min(i3.translate(M[0], false, true, false, true), i3.len) - S.y, b2.below = M[1] <= a2) : b2.isIntermediateSum ? (L >= 0 ? (y2 = M[1] + l2, x = l2) : (y2 = l2, x = M[1] + l2), i3.reversed && (y2 ^= x, x ^= y2, y2 ^= x), S.y = i3.translate(y2, false, true, false, true), S.height = Math.abs(S.y - Math.min(i3.translate(x, false, true, false, true), i3.len)), l2 += M[1], b2.below = y2 <= a2) : (S.height = P > 0 ? i3.translate(h2, false, true, false, true) - S.y : i3.translate(h2, false, true, false, true) - i3.translate(h2 - P, false, true, false, true), h2 += P, b2.below = h2 < a2), S.height < 0 && (S.y += S.height, S.height *= -1);
          b2.plotY = S.y, b2.yBottom = S.y + S.height, S.height <= s2 && !b2.isNull ? (S.height = s2, S.y -= o2, b2.yBottom = S.y + S.height, b2.plotY = S.y, L < 0 ? b2.minPointLengthOffset = -o2 : b2.minPointLengthOffset = o2) : (b2.isNull && (S.width = 0), b2.minPointLengthOffset = 0);
          let C = b2.plotY + (b2.negative ? S.height : 0);
          b2.below && (b2.plotY += S.height), b2.tooltipPos && (this.chart.inverted ? b2.tooltipPos[0] = i3.len - C : b2.tooltipPos[1] = C), b2.isInside = this.isPointInside(b2);
          let k = d(b2.yBottom, this.borderWidth);
          S.y = d(S.y, this.borderWidth), S.height = k - S.y, g(true, b2.shapeArgs, S);
        }
      }, { order: 2 }), t2.registerSeriesType("waterfall", y), y;
    }), i(e, "masters/highcharts-more.src.js", [e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Extensions/Pane/Pane.js"], e["Series/Bubble/BubbleSeries.js"], e["Series/PackedBubble/PackedBubbleSeries.js"], e["Series/PolarComposition.js"], e["Core/Axis/RadialAxis.js"], e["Series/Waterfall/WaterfallSeries.js"]], function(t2, e2, i2, s, o, a, r, n) {
      return t2.RadialAxis = r, s.compose(t2.Axis, t2.Chart, t2.Legend), o.compose(t2.Axis, t2.Chart, t2.Legend), i2.compose(t2.Chart, t2.Pointer), a.compose(t2.Axis, t2.Chart, t2.Pointer, t2.Series, t2.Tick, t2.Point, e2.seriesTypes.areasplinerange, e2.seriesTypes.column, e2.seriesTypes.line, e2.seriesTypes.spline), n.compose(t2.Axis, t2.Chart), t2;
    });
  });
})(highchartsMore$1);
var highchartsMoreExports = highchartsMore$1.exports;
const highchartsMore = /* @__PURE__ */ getDefaultExportFromCjs(highchartsMoreExports);
export {
  Highcharts$1 as H,
  highchartsMore as h
};
