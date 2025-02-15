import { a9 as addStoreHooks, aa as defineStore, l as computed, a0 as Decimal } from "./BEpVD-aq.js";
import { u as useAssetPriceAndChange } from "./BMFhygwF.js";
const useSmallBalancesStore = addStoreHooks(
  defineStore("smallBalancesStore", () => {
    const assetPriceAndChange = useAssetPriceAndChange();
    const smallBalanceThresholdInPreferredCurrency = computed(() => {
      const usdPriceInPreferredCurrency = assetPriceAndChange.getAssetPrice("USD");
      return usdPriceInPreferredCurrency ? usdPriceInPreferredCurrency.mul(10) : new Decimal(0);
    });
    return {
      smallBalanceThresholdInPreferredCurrency
    };
  })
);
export {
  useSmallBalancesStore as u
};
