import { U as URLService, a as axiosInstance, a0 as Decimal, a9 as addStoreHooks, aa as defineStore, aX as usePollingStore, bN as storeToRefs, q as useUserStateStore, cH as useActiveMarketStore, ab as useErrorTracking, ac as shallowRef, r as ref, as as CURRENCIES, l as computed, ax as toDecimal, bQ as watch, bP as timersConstants } from "./BEpVD-aq.js";
function parseFeeSchedule(data) {
  const volContributionRate = new Decimal(data.volumeContributionRate ?? 1);
  return {
    maker: new Decimal(data.maker),
    taker: new Decimal(data.taker),
    unifiedVolume: new Decimal(data.unifiedVolume),
    feeSchedule: data.feeSchedule.map((f) => ({
      maker: new Decimal(f.maker),
      taker: new Decimal(f.taker),
      volume: new Decimal(f.volume)
    })),
    volumeContributionRate: volContributionRate.isZero() ? new Decimal(1) : volContributionRate
  };
}
const feeScheduleApi = {
  /**
   * FeeBrackets are sorted by ascending volume.
   *
   * @param {MarketKey} marketKey
   * @return {Promise<{unifiedVolume: Decimal, feeSchedule: FeeBracket[], maker: Decimal, taker: Decimal, volumeContributionRate: Decimal}>}
   */
  get(marketKey) {
    const url = URLService.buildUrl("feeScheduleResource", { user_id: "me", market: marketKey });
    return axiosInstance.get(url).then((r) => parseFeeSchedule(r.data.data));
  }
};
const storeName = "feeScheduleStore";
const useFeeScheduleStore = addStoreHooks(
  defineStore(storeName, () => {
    const pollingStore = usePollingStore({ caller: storeName });
    const { isLoggedIn } = storeToRefs(useUserStateStore({ caller: storeName }));
    const { activeMarket } = storeToRefs(useActiveMarketStore({ caller: storeName }));
    const $errorTracking = useErrorTracking();
    let pollingStopFn = () => {
    };
    let pollingActivated = false;
    let aggressivePollingTimeout = null;
    const feeSchedule = shallowRef({});
    const initialized = ref(false);
    const isLoading = ref(false);
    const volumeCurrency = ref(CURRENCIES.USD.code);
    const makerRate = computed(() => {
      return feeSchedule.value.maker ?? toDecimal(0);
    });
    const makerFee = computed(() => {
      return makerRate.value.mul(100);
    });
    const takerRate = computed(() => {
      return feeSchedule.value.taker ?? toDecimal(0);
    });
    const takerFee = computed(() => {
      return takerRate.value.mul(100);
    });
    const unifiedVolume = computed(() => {
      return feeSchedule.value.unifiedVolume ?? toDecimal(0);
    });
    const feeBrackets = computed(() => {
      return feeSchedule.value.feeSchedule ?? [];
    });
    const volumeContributionRate = computed(() => {
      return feeSchedule.value.volumeContributionRate ?? toDecimal(1);
    });
    const currentFeeBracketIndex = computed(() => {
      var _a;
      for (let i = 0; i < (feeSchedule.value.feeSchedule ?? []).length; i++) {
        if (unifiedVolume.value.lte(feeSchedule.value.feeSchedule[i].volume)) {
          return i;
        }
      }
      return ((_a = feeSchedule.value.feeSchedule) == null ? void 0 : _a.length) > 0 ? feeSchedule.value.feeSchedule.length - 1 : null;
    });
    const currentFeeBracket = computed(() => {
      if (currentFeeBracketIndex.value === null) {
        return {
          maker: toDecimal(0),
          taker: toDecimal(0),
          volume: toDecimal(0)
        };
      }
      return feeSchedule.value.feeSchedule[currentFeeBracketIndex.value];
    });
    const previousFeeBracket = computed(() => {
      var _a;
      return ((_a = feeSchedule.value.feeSchedule) == null ? void 0 : _a[currentFeeBracketIndex.value - 1]) ?? null;
    });
    const nextFeeBracket = computed(() => {
      var _a;
      return ((_a = feeSchedule.value.feeSchedule) == null ? void 0 : _a[currentFeeBracketIndex.value + 1]) ?? null;
    });
    const volumeCurrencySymbol = computed(() => {
      return CURRENCIES[volumeCurrency.value].symbol;
    });
    const _init = async () => {
      if (initialized.value) {
        return;
      }
      return () => {
        clearTimeout(aggressivePollingTimeout);
        stopPolling();
      };
    };
    async function fetch() {
      var _a;
      if (isLoading.value || !isLoggedIn.value) {
        return false;
      }
      isLoading.value = true;
      try {
        feeSchedule.value = await feeScheduleApi.get((_a = activeMarket.value) == null ? void 0 : _a.key);
      } catch (e) {
        $errorTracking == null ? void 0 : $errorTracking.trackException(e);
      }
      isLoading.value = false;
      initialized.value = true;
    }
    const startPolling = (aggressivePolling = false) => {
      if (pollingActivated || !isLoggedIn.value) {
        return;
      }
      pollingStopFn();
      const { stop } = pollingStore.startPolling({
        id: timersConstants.POLLING_FEE_SCHEDULE.ID,
        interval: aggressivePolling ? timersConstants.POLLING_FEE_SCHEDULE.AGGRESSIVE_TIME : timersConstants.POLLING_FEE_SCHEDULE.TIME,
        fn: fetch
      });
      pollingStopFn = stop;
      pollingActivated = true;
    };
    const stopPolling = () => {
      pollingStopFn();
      pollingActivated = false;
    };
    function startAggressivePolling() {
      clearTimeout(aggressivePollingTimeout);
      stopPolling();
      startPolling(true);
      aggressivePollingTimeout = setTimeout(
        () => {
          stopPolling();
          startPolling(false);
        },
        2 * 60 * 1e3
      );
    }
    watch(
      activeMarket,
      async (newValue, prevValue) => {
        if ((newValue == null ? void 0 : newValue.key) === (prevValue == null ? void 0 : prevValue.key)) {
          return;
        }
        fetch();
      },
      {
        deep: true
      }
    );
    watch(isLoggedIn, (loggedIn, wasLoggedIn) => {
      if (wasLoggedIn) {
        stopPolling();
      }
    });
    return {
      feeScheduleMarket: activeMarket,
      feeSchedule,
      initialized,
      isLoading,
      makerRate,
      makerFee,
      takerRate,
      takerFee,
      previousFeeBracket,
      currentFeeBracket,
      nextFeeBracket,
      unifiedVolume,
      feeBrackets,
      volumeContributionRate,
      volumeCurrencySymbol,
      _init,
      fetch,
      startPolling,
      stopPolling,
      startAggressivePolling
    };
  })
);
export {
  useFeeScheduleStore as u
};
