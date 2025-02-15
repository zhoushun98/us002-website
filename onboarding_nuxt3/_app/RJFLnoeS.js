var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aX as BaseTrackingReporterFactory, aY as BaseTrackingReporter } from "./Di9v4FW5.js";
class CommonTrackingReporter extends BaseTrackingReporter {
  // Placeholder for some common tracking events
}
class CommonTrackingReporterFactory extends BaseTrackingReporterFactory {
}
__publicField(CommonTrackingReporterFactory, "reporterClass", CommonTrackingReporter);
export {
  CommonTrackingReporterFactory as C
};
