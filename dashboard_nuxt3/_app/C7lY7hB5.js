import { a9 as addStoreHooks, aa as defineStore, r as ref, bX as Cookies, l as computed, gD as useI18N } from "./BEpVD-aq.js";
import { l as localeConstants } from "./CvedyxjN.js";
const useLocaleStore = addStoreHooks(
  defineStore("localeStore", () => {
    const internalActiveLocale = ref(Cookies.getActiveLocale() ?? localeConstants.GLOBAL_ENGLISH);
    const activeLocale = computed(() => {
      return internalActiveLocale.value;
    });
    const $i18n = useI18N();
    async function setLocale(locale) {
      if (internalActiveLocale.value === locale) {
        return;
      }
      internalActiveLocale.value = locale;
      Cookies.setActiveLocale(locale);
      await $i18n.setLocale(locale);
      await $i18n.finalizePendingLocaleChange();
      await $i18n.finalizePendingLocaleChange();
    }
    async function _init() {
      await $i18n.setLocale(Cookies.getActiveLocale() ?? localeConstants.GLOBAL_ENGLISH);
      await $i18n.finalizePendingLocaleChange();
    }
    return {
      activeLocale,
      setLocale,
      _init
    };
  })
);
export {
  useLocaleStore as u
};
