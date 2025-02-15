import { aE as accountConstants, al as getDate, ax as toDecimal, U as URLService, a as axiosInstance } from "./BEpVD-aq.js";
function parsePositionSettlementHistoryEntries(settlements) {
  return settlements.map(parseSinglePositionSettlement);
}
function parseSinglePositionSettlement(settlement) {
  const uniqueId = settlement.tradeAccountUniqueId;
  const account = uniqueId ? uniqueId === accountConstants.MAIN_ACCOUNT_ID ? accountConstants.MAIN_ACCOUNT_ID : parseInt(uniqueId) : null;
  return {
    ...settlement,
    transactionId: settlement.marketTransactionId,
    settlementTime: getDate(settlement.settlementTime, true),
    settlementPrice: toDecimal(settlement.settlementPrice),
    strikePrice: toDecimal(settlement.strikePrice),
    pnlSettled: toDecimal(settlement.pnlSettled),
    pnlPercentage: toDecimal(settlement.pnlPercentage),
    pnlComponentPrice: toDecimal(settlement.pnlComponentPrice),
    pnlComponentFees: toDecimal(settlement.pnlComponentFees),
    pnlComponentFunding: toDecimal(settlement.pnlComponentFunding),
    pnlComponentSocializedLoss: toDecimal(settlement.pnlComponentSocializedLoss),
    liquidationFees: toDecimal(settlement.liquidationFees),
    tradingFees: toDecimal(settlement.tradingFees),
    size: toDecimal(settlement.size),
    account
  };
}
const positionSettlementHistoryApi = {
  /**
   * @param {'main'|number} account
   * @param {number} page
   * @param {number} perPage
   * @param {string} [market] - btcusd-perp
   * @returns {Promise<module:positions.PositionSettlementHistory[]>}
   */
  list(account, page = 1, perPage = 100, market = "") {
    const params = { page, perPage };
    if (market) {
      params.market = market;
    }
    const url = URLService.buildUrl("settlementHistoryListResource", { unique_id: account }, true, params);
    return axiosInstance.get(url).then((response) => parsePositionSettlementHistoryEntries(response.data.data));
  },
  /**
   * @param {number} settlementId
   * @returns {Promise<module:positions.PositionSettlementHistory>}
   */
  get(settlementId) {
    const url = URLService.buildUrl("settlementHistoryResource", { settlement_id: settlementId });
    return axiosInstance.get(url).then((response) => parseSinglePositionSettlement(response.data.data));
  }
};
export {
  positionSettlementHistoryApi as p
};
