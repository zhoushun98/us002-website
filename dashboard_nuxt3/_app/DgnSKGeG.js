import { dW as addMilliseconds, dX as millisecondsInHour } from "./BEpVD-aq.js";
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour);
}
function subHours(date, amount, options) {
  return addHours(date, -amount);
}
export {
  addHours as a,
  subHours as s
};
