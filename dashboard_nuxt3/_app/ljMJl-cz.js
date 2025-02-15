import { a9 as addStoreHooks, aa as defineStore, r as ref } from "./BEpVD-aq.js";
const useVisibilityStore = addStoreHooks(
  defineStore("visibilityStore", () => {
    const isHidden = ref(document.hidden);
    function visibilityChangeHandler() {
      isHidden.value = document.hidden;
    }
    function _init() {
      document.addEventListener("visibilitychange", visibilityChangeHandler);
      return () => {
        document.removeEventListener("visibilitychange", visibilityChangeHandler);
      };
    }
    return {
      isHidden,
      _init
    };
  })
);
export {
  useVisibilityStore as u
};
