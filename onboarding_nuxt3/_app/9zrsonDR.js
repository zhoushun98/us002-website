import { x as axiosInstance, i as constants, a8 as ENDPOINTS, Q as URLService, a9 as addStoreHooks, aa as defineStore, ab as ref, u as useOnboardingFlowStore, W as useFormsStore, ac as useRouter, ad as computed, G as useOnboardingUserStore, R as ROUTES, ae as ResponseCodes, h as _ } from "./0TEAd3E2.js";
const endpointMap = (processType, requestActionUuid = null) => {
  switch (processType) {
    case constants.PROCESS_TYPES.ONBOARDING:
      return ENDPOINTS.onboardingConfig;
    case constants.PROCESS_TYPES.KYC_CONTROLLER:
      return ENDPOINTS.onboardingConfigKyc;
    case constants.PROCESS_TYPES.PRODUCTS_ONBOARDING:
      return URLService.buildUrl("productsOnboardingConfig", {}, true, { id: requestActionUuid });
    default:
      return ENDPOINTS.onboardingConfig;
  }
};
const V3 = {
  getNextStep(processType = constants.PROCESS_TYPES.ONBOARDING, requestActionUuid = null) {
    const endpoint = endpointMap(processType, requestActionUuid);
    return axiosInstance.get(endpoint).then((response) => {
      var _a;
      return (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data;
    });
  }
};
const useOnboardingStore = addStoreHooks(
  defineStore("onboardingStore", () => {
    const progress = ref(null);
    const processType = ref(constants.PROCESS_TYPES.ONBOARDING);
    const redirectAfter = ref(null);
    const requestActionUuid = ref(null);
    const onboardingFlowStore = useOnboardingFlowStore();
    const formsStore = useFormsStore();
    const $router = useRouter();
    async function getNextStepAndRedirect() {
      return V3.getNextStep(processType.value, requestActionUuid.value).then(async (response) => {
        setProgress(response.progress);
        const _step = response.step;
        if (_step && formsStore.component !== _step) {
          formsStore.setComponent(_step);
          const query = {};
          if (processType.value !== constants.PROCESS_TYPES.ONBOARDING) {
            query.processType = processType.value;
          }
          if (processType.value === constants.PROCESS_TYPES.PRODUCTS_ONBOARDING) {
            query.id = requestActionUuid.value;
          }
          $router.push({ name: "onboarding-v3-component-step", params: { component: _step }, query });
        } else if (response.progress === 100) {
          if (redirectAfter.value) {
            window.location = redirectAfter.value;
            return;
          }
          if (processType.value === constants.PROCESS_TYPES.KYC_CONTROLLER) {
            window.location = "/my-information/documents/";
            return;
          }
          if (processType.value === constants.PROCESS_TYPES.PRODUCTS_ONBOARDING) {
            $router.push(
              { name: "onboarding-flow-step-substep", params: { flow: constants.PATHS.IN_REVIEW } },
              () => {
              },
              () => {
              }
            );
            return;
          }
          onboardingFlowStore.setVerificationSubmitted(true);
          const onboardingUserStore = useOnboardingUserStore();
          await onboardingUserStore.ensureUserProfile();
          if (onboardingUserStore.tfauthActive) {
            $router.push(
              { name: "onboarding-flow-step-substep", params: { flow: constants.PATHS.VERIFICATION_COMPLETED } },
              () => {
              },
              () => {
              }
            );
          } else {
            $router.push(
              { name: "onboarding-flow-step-substep", params: { flow: constants.PATHS.TWO_FA_SETUP } },
              () => {
              },
              () => {
              }
            );
          }
        } else if (response.progress === 0) {
          window.location.href = ROUTES.onboardingVerify;
        }
      }).catch((error) => {
        var _a;
        if (((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) === ResponseCodes.HTTP.UNAUTHORIZED) {
          $router.push({ name: "onboarding-v3-error-ea" });
        } else {
          $router.push({ name: "onboarding-v3-error" });
        }
      });
    }
    function setProcessType(_processType) {
      processType.value = _processType;
    }
    function setRedirectAfter(_redirectAfter) {
      redirectAfter.value = _redirectAfter;
    }
    function setProgress(_progress) {
      progress.value = _.isNumber(_progress) ? _progress * 1 / 100 : _progress;
    }
    function setRequestActionUuid(_id) {
      requestActionUuid.value = _id;
    }
    const isInitialized = computed(() => progress.value !== null);
    const newAffiliation = computed(() => {
      var _a;
      return (_a = formsStore.data) == null ? void 0 : _a.newAffiliation;
    });
    return {
      // Properties
      progress,
      // Computed
      isInitialized,
      newAffiliation,
      // Actions
      getNextStepAndRedirect,
      setProcessType,
      setRedirectAfter,
      setProgress,
      setRequestActionUuid
    };
  })
);
export {
  useOnboardingStore as u
};
