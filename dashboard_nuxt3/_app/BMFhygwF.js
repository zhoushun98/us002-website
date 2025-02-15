import { c3 as useConversionPathStore, aW as usePreferredCurrencyStore, bS as useTickersStore, ax as toDecimal, c5 as buildKey, c6 as conversionPathToPriceAndChange } from "./BEpVD-aq.js";
function useAssetPriceAndChange() {
  const conversionPathStore = useConversionPathStore();
  const preferredCurrencyStore = usePreferredCurrencyStore();
  const tickersStore = useTickersStore();
  function getAssetPriceAndChange(assetCode) {
    const preferredCurrency = preferredCurrencyStore.preferredCurrency;
    if (assetCode === preferredCurrency) {
      return {
        price: toDecimal(1),
        change: {
          relative: null,
          absolute: null
        }
      };
    }
    const conversionPath = conversionPathStore.conversionPaths[buildKey(assetCode, preferredCurrency)];
    const { price, change } = conversionPathToPriceAndChange(conversionPath, tickersStore.tickers);
    return {
      price,
      change
    };
  }
  function getAssetPrice(assetCode) {
    return getAssetPriceAndChange(assetCode).price;
  }
  return {
    getAssetPrice,
    getAssetPriceAndChange
  };
}
export {
  useAssetPriceAndChange as u
};
