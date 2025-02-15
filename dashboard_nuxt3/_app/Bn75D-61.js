import { ax as toDecimal, al as getDate, U as URLService, a as axiosInstance, aE as accountConstants } from "./BEpVD-aq.js";
function parseTradeHistory(trades) {
  return trades.map((trade) => ({
    ...trade,
    sideDisplay: trade.isLiquidation ? "Liquidation" : trade.side,
    amount: toDecimal(trade.amount).abs(),
    fee: toDecimal(trade.fee),
    liquidationFee: trade.liquidationFee ? toDecimal(trade.liquidationFee) : null,
    price: toDecimal(trade.price),
    datetime: getDate(trade.datetime)
  }));
}
const tradeHistoryV2Api = {
  /**
   * @param {string|"main"|"all"} account - subaccount id, "main" or "all"
   * @param {string|null} market - e.g. btcusd, btcusd-perp
   * @param {string|null} marketType - One of default.MARKET_TYPES. Needs to be set if market is set to null.
   * @param {number|null} transactionType - Optionally filter by a single transaction type.
   * @param {number|null} transactionFilter - Optionally filter by a single transaction type.
   * @param {date|null} fromDate
   * @param {date|null} toDate
   * @param {number} perPage - defaults to 100
   * @param {number|null} page
   * @param {"asc"|"desc"} sort - Sort direction. Defaults to "desc".
   * @return {Promise<module:transactions.UserTrade[]>}
   */
  listWithPagination({
    account = accountConstants.MAIN_ACCOUNT_ID,
    market = null,
    marketType = null,
    transactionFilter = null,
    fromDate = null,
    toDate = null,
    sort = "desc",
    perPage = 100,
    page = null
  }) {
    const params = { perPage };
    if (market !== null) {
      params.market = market;
    }
    if (marketType !== null) {
      params.marketType = marketType;
    }
    if (transactionFilter !== null) {
      params.transactionFilter = transactionFilter;
    }
    if (sort !== null) {
      params.sort = sort;
    }
    if (fromDate !== null) {
      params.sinceTimestamp = Math.round(fromDate.getTime() / 1e3);
    }
    if (toDate !== null) {
      params.untilTimestamp = Math.round(toDate.getTime() / 1e3);
    }
    if (page !== null) {
      params.page = page;
    }
    const url = URLService.buildUrl("tradeHistoryListResource", { unique_id: account });
    return axiosInstance.get(url, { params }).then((response) => parseTradeHistory(response.data.data));
  },
  listAll({ account = accountConstants.MAIN_ACCOUNT_ID, market = null, marketType = null, orderId = null } = {}) {
    const params = {};
    if (market !== null) {
      params.market = market;
    }
    if (marketType !== null) {
      params.marketType = marketType;
    }
    if (orderId !== null) {
      params.orderId = orderId;
    }
    const url = URLService.buildUrl("tradeHistoryListResource", { unique_id: account });
    return axiosInstance.getAllPages(url, params, (data) => parseTradeHistory(data.data), 100);
  }
};
export {
  tradeHistoryV2Api as t
};
