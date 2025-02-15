import { a0 as Decimal, al as getDate, aA as constants, U as URLService, a as axiosInstance, aE as accountConstants } from "./BEpVD-aq.js";
function parseSingleOrder(order) {
  const parsedOrder = {
    id: order.id,
    side: order.side,
    type: order.type,
    market: order.market,
    account: order.account,
    timeInForce: order.timeInForce,
    price: order.price ? new Decimal(order.price) : null,
    stopPrice: order.stopPrice ? new Decimal(order.stopPrice) : null,
    osoPrice: order.osoPrice ? new Decimal(order.osoPrice) : null,
    trailingBy: order.trailingBy ? new Decimal(order.trailingBy) : null,
    amountFilled: order.amountFilled !== null ? new Decimal(order.amountFilled) : null,
    amountAtCreate: new Decimal(order.amountAtCreate),
    valueFilled: order.valueFilled !== null ? new Decimal(order.valueFilled) : null,
    valueAtCreate: new Decimal(order.valueAtCreate),
    createdAt: getDate(order.timestamp, true),
    expiresAt: order.expireTimestamp !== null && order.expireTimestamp > 0 ? getDate(order.expireTimestamp, true) : null,
    status: order.status ?? constants.ORDER_STATUS.OPEN,
    marginMode: order.marginMode,
    leverage: order.leverage,
    reduceOnly: order.reduceOnly,
    trigger: order.trigger,
    activationPrice: order.activationPrice ? new Decimal(order.activationPrice) : null,
    trailingDelta: order.trailingDelta,
    fee: order.fee !== null ? new Decimal(order.fee) : null
  };
  let priceToFillForm = null;
  if (constants.LEGACY_STOP_ORDER_TYPES.includes(order.type)) {
    priceToFillForm = parsedOrder.stopPrice;
  } else if (order.type === constants.ORDER_TYPE.LIMIT) {
    priceToFillForm = parsedOrder.price;
  } else if (constants.TRAILING_TYPES.includes(order.type) && order.status === constants.ORDER_STATUS.INACTIVE) {
    priceToFillForm = parsedOrder.activationPrice;
  } else if (constants.TRIGGER_BASED_ORDER_TYPES.includes(order.type)) {
    if (order.status === constants.ORDER_STATUS.ACTIVE) {
      priceToFillForm = parsedOrder.stopPrice;
    } else {
      priceToFillForm = parsedOrder.price;
    }
  }
  parsedOrder.priceToFillForm = priceToFillForm;
  return parsedOrder;
}
function parseOrders(orders) {
  return orders.data.map((order) => parseSingleOrder(order)).filter((order) => constants.OPEN_ORDERS_TYPES.includes(order.type));
}
const ordersApiV2 = {
  delete(id, noToastOnError = false) {
    const url = URLService.buildUrl("orderResourceV2", { id });
    return axiosInstance.delete(url, { noToastOnError });
  },
  get(id, includeFees = false) {
    const url = URLService.buildUrl("orderResourceV2", { id }, true, { include_fees: includeFees });
    return axiosInstance.get(url).then((response) => parseSingleOrder(response.data.data));
  },
  list(account = accountConstants.MAIN_ACCOUNT_ID, market = null) {
    return axiosInstance.getAllPages(URLService.buildUrl("orderListResourceV2"), { account, market }, parseOrders, 100);
  },
  create(order) {
    return axiosInstance.post(URLService.buildUrl("orderListResourceV2"), { data: order });
  },
  cancelAll(account = accountConstants.MAIN_ACCOUNT_ID, noToastOnError = false) {
    const url = URLService.buildUrl("orderListResourceV2", {}, true, { account });
    return axiosInstance.delete(url, { noToastOnError });
  },
  cancelAllForMarket(account = accountConstants.MAIN_ACCOUNT_ID, market, noToastOnError = false) {
    const url = URLService.buildUrl("orderListResourceV2", {}, true, { account, market });
    return axiosInstance.delete(url, { noToastOnError });
  }
};
export {
  ordersApiV2 as o
};
