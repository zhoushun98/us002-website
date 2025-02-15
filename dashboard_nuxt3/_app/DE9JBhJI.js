import { U as URLService, a as axiosInstance, _ as _export_sfc, A as AppIcon, az as useSubAccountStore, u as useToastStore, aE as accountConstants, T as TranslationObject, a0 as Decimal, as as CURRENCIES, ag as numberFormatter, aj as _, aD as accountsApi, I as constants, y as resolveComponent, o as openBlock, e as createElementBlock, c as createBlock, w as withCtx, g as createTextVNode, h as createCommentVNode, f as createVNode, i as createBaseVNode, t as toDisplayString, J as normalizeClass, F as Fragment, a5 as renderList } from "./BEpVD-aq.js";
import { B as BtsForm } from "./D4HcQE78.js";
import { G as GeneralNotification } from "./qPMKhu5A.js";
const collateralCurrencyHaircutsApi = {
  /**
   * @returns {Promise<{currency: string, haircut: string}[]>}
   */
  list() {
    const url = URLService.buildUrl("collateralCurrencyHaircutsListResource");
    return axiosInstance.get(url).then((response) => {
      var _a;
      return (_a = response.data) == null ? void 0 : _a.data;
    });
  }
};
const _sfc_main = {
  name: "SubAccountTransferForm",
  components: {
    GeneralNotification,
    AppIcon,
    AppForm: BtsForm
  },
  props: {
    transferHelperMessages: {
      type: Boolean,
      default: false
    },
    preselectedToAccountId: {
      type: [String, Number],
      required: false,
      default: null
    },
    preselectedAsset: {
      type: String,
      required: false,
      default: null
    },
    presets: {
      type: Array,
      default: () => [25, 50, 75, 100]
    },
    inlinePresets: {
      type: Boolean,
      default: false
    }
  },
  emits: ["transfer"],
  setup() {
    return {
      subAccountStore: useSubAccountStore(),
      toastStore: useToastStore()
    };
  },
  data() {
    return {
      formModel: {
        fromAccount: accountConstants.MAIN_ACCOUNT_ID,
        toAccount: null,
        currency: null,
        amount: null
      },
      accountBalances: {},
      loadingBalances: false,
      processing: false,
      internalPreselectedAsset: null,
      currenciesAllowedForDerivativesAccounts: null
    };
  },
  computed: {
    formSchema() {
      return {
        fields: [
          {
            type: "slot",
            fieldOptions: {
              slotComponent: "FieldSlot",
              slot: "from-account-balance",
              testId: "from-account-balance"
            }
          },
          {
            type: "select",
            model: "fromAccount",
            required: true,
            validator: this.accountSelectionValidator,
            values: this.subAccountDropdownOptions,
            fieldOptions: {
              label: new TranslationObject("components.subAccountTransferForm.fromFormLabel"),
              disabled: this.loadingBalances || this.processing,
              testId: "from-account",
              bordered: true,
              searchable: true,
              clearSearchQueryOnOpen: true,
              noResultText: new TranslationObject("components.subAccountTransferForm.noMatchingAccountError"),
              inputHasIcon: true
            }
          },
          {
            type: "slot",
            fieldOptions: {
              slotComponent: "FieldSlot",
              slot: "account-swapper",
              testId: "account-swapper"
            }
          },
          {
            type: "slot",
            fieldOptions: {
              slotComponent: "FieldSlot",
              slot: "to-account-balance",
              testId: "to-account-balance"
            }
          },
          {
            type: "select",
            model: "toAccount",
            required: true,
            validator: this.accountSelectionValidator,
            values: this.subAccountDropdownOptions,
            fieldOptions: {
              label: new TranslationObject("components.subAccountTransferForm.toFormLabel"),
              disabled: this.loadingBalances || this.processing,
              testId: "to-account",
              bordered: true,
              searchable: true,
              clearSearchQueryOnOpen: true,
              noResultText: new TranslationObject("components.subAccountTransferForm.noMatchingAccountError"),
              inputHasIcon: true
            }
          },
          {
            type: "currency-dropdown",
            model: "currency",
            required: true,
            values: this.currencyDropdownOptions,
            validator: ["required"],
            fieldOptions: {
              label: !this.loadingBalances && this.currencyDropdownOptions.length < 1 ? new TranslationObject("components.subAccountTransferForm.noTransferableAssetsAvailable") : new TranslationObject("components.subAccountTransferForm.assetFormLabel"),
              disabled: this.isAmountDisabled,
              testId: "asset",
              bordered: true,
              shadow: false
            }
          },
          {
            type: "input",
            model: "amount",
            required: true,
            validator: [this.amountValidator, "required"],
            disabled: this.loadingBalances || this.processing || this.currencyDropdownOptions.length < 1,
            fieldOptions: {
              inputType: "text",
              label: new TranslationObject("components.subAccountTransferForm.amountFormLabel"),
              maxLength: 30,
              testId: "amount",
              autocomplete: "off",
              reserveSpaceForErrorRow: this.inlinePresets
            }
          },
          {
            type: "slot",
            fieldOptions: {
              slotComponent: "FieldSlot",
              slot: "transfer-form-content",
              testId: "transfer-from-content"
            }
          }
        ]
      };
    },
    sanitizedAmount() {
      return this.removeThousandSeparators(this.formModel.amount);
    },
    isAmountDisabled() {
      return this.loadingBalances || this.processing || this.currencyDropdownOptions.length < 1;
    },
    allowNegativeBalance() {
      return this.$pageContext.allowNegativeAmounts;
    },
    isTransferMessageVisible() {
      if (!this.transferHelperMessages || !this.formModel.currency) {
        return false;
      }
      return this.sanitizedAmount > 0;
    },
    transferableBalanceKey() {
      return this.formModel.fromAccount === accountConstants.MAIN_ACCOUNT_ID ? "available" : "transferable";
    },
    transferableAmount() {
      var _a, _b;
      return ((_b = (_a = this.accountBalances[this.formModel.fromAccount]) == null ? void 0 : _a[this.formModel.currency]) == null ? void 0 : _b[this.transferableBalanceKey]) ?? new Decimal(0);
    },
    subAccountDropdownOptions() {
      return this.subAccountStore.accountList.map((account) => {
        return {
          value: `${account.id}`,
          // as string due to API schema
          text: account.displayName,
          icon: account.icon
        };
      });
    },
    currencyDropdownOptions() {
      var _a, _b, _c;
      if (!this.formModel.fromAccount) {
        return [];
      }
      const options = [];
      for (const currencyCode of this.fromAccountTransferableAssets) {
        if (!CURRENCIES[currencyCode]) {
          continue;
        }
        if (this.selectedToAccountSupportsDerivatives && !((_a = this.currenciesAllowedForDerivativesAccounts) == null ? void 0 : _a.has(currencyCode))) {
          continue;
        }
        options.push({
          value: currencyCode,
          balance: numberFormatter.decimal({
            value: (_c = (_b = this.accountBalances[this.formModel.fromAccount]) == null ? void 0 : _b[currencyCode]) == null ? void 0 : _c[this.transferableBalanceKey],
            decimals: CURRENCIES[currencyCode].decimals
          }),
          text: CURRENCIES[currencyCode].name,
          icon: `icon icon--${currencyCode}`
        });
      }
      return _.sortBy(options, (asset) => asset.text);
    },
    fromAccountTransferableAssets() {
      const balances = this.accountBalances[this.formModel.fromAccount];
      if (!balances) {
        return [];
      }
      return Object.entries(balances).filter(([asset, assetBalance]) => {
        var _a;
        if (this.selectedToAccountSupportsDerivatives && !((_a = this.currenciesAllowedForDerivativesAccounts) == null ? void 0 : _a.has(asset))) {
          return false;
        }
        return !assetBalance[this.transferableBalanceKey].isZero();
      }).map(([asset]) => asset);
    },
    fromAccountTransferable() {
      var _a;
      if (!this.formModel.currency) {
        return "/";
      } else {
        const accountBalance = this.accountBalances[this.formModel.fromAccount];
        const transferable = ((_a = accountBalance[this.formModel.currency]) == null ? void 0 : _a[this.transferableBalanceKey]) ?? 0;
        return `${this.formatAmount(transferable, this.formModel.currency)} ${this.formModel.currency}`;
      }
    },
    toAccountBalance() {
      var _a;
      if (!this.formModel.currency) {
        return "/";
      } else {
        const balances = this.accountBalances[this.formModel.toAccount];
        if (!balances) {
          return "";
        }
        return `${this.formatAmount(((_a = balances[this.formModel.currency]) == null ? void 0 : _a.balance) ?? 0, this.formModel.currency)} ${this.formModel.currency}`;
      }
    },
    selectedToAccountSupportsDerivatives() {
      var _a, _b;
      return ((_b = this.subAccountStore.accounts[(_a = this.formModel) == null ? void 0 : _a.toAccount]) == null ? void 0 : _b.isDerivativesTradingEnabled) ?? false;
    }
  },
  watch: {
    "formModel.fromAccount": {
      async handler(accountId) {
        var _a, _b, _c;
        await this.fetchAccountBalances(accountId);
        (_c = (_b = (_a = this.$refs) == null ? void 0 : _a.form) == null ? void 0 : _b.validate()) == null ? void 0 : _c.catch(() => {
        });
      }
    },
    "formModel.toAccount": {
      async handler(accountId) {
        var _a, _b, _c;
        if (this.selectedToAccountSupportsDerivatives && this.currenciesAllowedForDerivativesAccounts === null) {
          await this.fetchCollateralCurrencies();
        }
        await this.fetchAccountBalances(accountId);
        (_c = (_b = (_a = this.$refs) == null ? void 0 : _a.form) == null ? void 0 : _b.validate()) == null ? void 0 : _c.catch(() => {
        });
      }
    },
    "formModel.currency": {
      handler() {
        var _a, _b, _c;
        (_c = (_b = (_a = this.$refs) == null ? void 0 : _a.form) == null ? void 0 : _b.validate()) == null ? void 0 : _c.catch(() => {
        });
      }
    },
    currencyDropdownOptions() {
      this.autoSelectCurrency();
    }
  },
  async created() {
    var _a, _b;
    if (this.preselectedToAccountId) {
      this.formModel.toAccount = `${this.preselectedToAccountId}`;
    } else {
      this.formModel.toAccount = ((_b = (_a = this.subAccountDropdownOptions) == null ? void 0 : _a[1]) == null ? void 0 : _b.value) ?? accountConstants.MAIN_ACCOUNT_ID;
    }
    this.internalPreselectedAsset = this.preselectedAsset;
    await this.fetchAccountBalances(accountConstants.MAIN_ACCOUNT_ID);
    this.autoSelectCurrency();
  },
  methods: {
    swapSelectedAccounts() {
      const previousFrom = this.formModel.fromAccount;
      this.formModel.fromAccount = this.formModel.toAccount;
      this.formModel.toAccount = previousFrom;
    },
    autoSelectCurrency() {
      var _a;
      if (this.internalPreselectedAsset && this.fromAccountTransferableAssets.includes(this.internalPreselectedAsset)) {
        this.formModel.currency = this.internalPreselectedAsset;
        this.internalPreselectedAsset = null;
      }
      if (this.fromAccountTransferableAssets.includes(this.formModel.currency)) {
        return;
      }
      this.formModel.currency = ((_a = this.currencyDropdownOptions[0]) == null ? void 0 : _a.value) ?? null;
    },
    formatAmount(amount, currency) {
      if (this.currencyDropdownOptions.length < 1) {
        return "";
      }
      return numberFormatter.decimal({ value: amount, decimals: CURRENCIES[currency].decimals });
    },
    accountName(id) {
      var _a;
      return (_a = this.subAccountStore.accounts[id]) == null ? void 0 : _a.displayName;
    },
    async fetchCollateralCurrencies() {
      this.loadingBalances = true;
      try {
        const collateralCurrencyHaircuts = await collateralCurrencyHaircutsApi.list();
        this.currenciesAllowedForDerivativesAccounts = new Set(collateralCurrencyHaircuts.map(({ currency }) => currency));
      } catch (e) {
        this.$errorTracking.trackException(e);
      } finally {
        this.loadingBalances = false;
      }
    },
    async fetchAccountBalances(accountId) {
      this.loadingBalances = true;
      const balanceTypes = accountId === accountConstants.MAIN_ACCOUNT_ID ? ["balance", "available"] : ["balance", "transferable"];
      try {
        const balances = await accountsApi.accountBalances.find(accountId, balanceTypes);
        this.accountBalances = {
          ...this.accountBalances,
          [accountId]: Object.freeze(balances)
        };
      } catch (e) {
        this.$errorTracking.trackException(e);
      } finally {
        this.loadingBalances = false;
      }
    },
    onPreset(fraction) {
      var _a;
      this.formModel.amount = String(
        this.transferableAmount.mul(fraction).toDecimalPlaces(((_a = CURRENCIES[this.formModel.currency]) == null ? void 0 : _a.decimals) ?? 8, Decimal.ROUND_DOWN)
      );
      if (this.formModel.amount === "0") {
        this.formModel.amount = null;
      }
      this.$refs.form.rerender();
      this.$nextTick(() => {
        var _a2;
        (_a2 = this.$refs.form) == null ? void 0 : _a2.validate().catch(() => {
        });
      });
    },
    async onSubmit() {
      var _a;
      if (this.processing) {
        return false;
      }
      try {
        this.processing = true;
        await accountsApi.accountTransfers.transfer({
          ...this.formModel,
          amount: this.sanitizedAmount
        });
        this.$emit("transfer");
        const formattedAmount = numberFormatter.decimal({
          value: this.sanitizedAmount,
          decimals: CURRENCIES[this.formModel.currency].decimals,
          smartStripTrailingZeros: true
        });
        const text = new TranslationObject("components.subAccountTransferForm.transferCompleteNotificationBody", {
          value: formattedAmount,
          currency: this.formModel.currency,
          fromYour: this.formModel.fromAccount === accountConstants.MAIN_ACCOUNT_ID ? this.$t("components.subAccountTransferForm.yourLabel") : "",
          fromAccount: this.accountName(this.formModel.fromAccount),
          toYour: this.formModel.toAccount === accountConstants.MAIN_ACCOUNT_ID ? this.$t("components.subAccountTransferForm.yourLabel") : "",
          toAccount: this.accountName(this.formModel.toAccount)
        });
        this.toastStore.showToast({
          type: constants.NOTIFICATIONS.TYPES.SUCCESS,
          title: new TranslationObject("components.subAccountTransferForm.transferCompleteNotificationTitle"),
          text
        });
        this.formModel.amount = null;
        this.$refs.form.rerender();
        this.$nextTick(() => {
          var _a2;
          (_a2 = this.$refs.form) == null ? void 0 : _a2.validate().catch(() => {
          });
        });
      } catch (e) {
        (_a = this.$errorTracking) == null ? void 0 : _a.trackException(e);
      } finally {
        this.processing = false;
      }
      await Promise.all([
        this.fetchAccountBalances(this.formModel.fromAccount),
        this.fetchAccountBalances(this.formModel.toAccount)
      ]);
    },
    amountValidator(value) {
      value = this.removeThousandSeparators(value);
      try {
        value = new Decimal(value);
      } catch (e) {
        if (!value) {
          return [""];
        }
        return [new TranslationObject("components.subAccountTransferForm.invalidNumberError")];
      }
      if (value.greaterThan(this.transferableAmount) && !this.allowNegativeBalance) {
        const selectedAccount = this.accountName(this.formModel.fromAccount);
        return [
          new TranslationObject("components.subAccountTransferForm.accountAvailableAmountError", {
            account: selectedAccount,
            value: this.formatAmount(this.transferableAmount, this.formModel.currency),
            currency: this.formModel.currency
          })
        ];
      }
      if (!this.transferableAmount.isPositive() && !this.allowNegativeBalance) {
        return [new TranslationObject("components.subAccountTransferForm.accountAvailableAmountError", {
          account: this.accountName(this.formModel.fromAccount),
          currency: this.formModel.currency
        })];
      }
      if (!value.isPositive()) {
        return [new TranslationObject("components.subAccountTransferForm.negativeNumberError")];
      }
    },
    removeThousandSeparators(value) {
      return numberFormatter.removeThousandSeparatorsFromString(value);
    },
    accountSelectionValidator() {
      if (this.formModel.fromAccount === this.formModel.toAccount) {
        return [new TranslationObject("components.subAccountTransferForm.sameAccountError")];
      }
    }
  }
};
const _hoisted_1 = { class: "swapper" };
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "transfer-form__balance" };
const _hoisted_4 = { class: "transfer-form__balance-text" };
const _hoisted_5 = { class: "transfer-form__balance" };
const _hoisted_6 = { class: "transfer-form__balance-text" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 0,
  class: "transfer-form__divider"
};
const _hoisted_9 = {
  key: 0,
  class: "transfer-form__transfer-text"
};
const _hoisted_10 = { class: "transfer-form__transfer-text--bold" };
const _hoisted_11 = { class: "transfer-form__transfer-text--bold" };
const _hoisted_12 = { class: "transfer-form__transfer-text--bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GeneralNotification = resolveComponent("GeneralNotification");
  const _component_AppIcon = resolveComponent("AppIcon");
  const _component_portal = resolveComponent("portal");
  const _component_AppForm = resolveComponent("AppForm");
  return openBlock(), createElementBlock("div", null, [
    $options.selectedToAccountSupportsDerivatives ? (openBlock(), createBlock(_component_GeneralNotification, {
      key: 0,
      class: "mb16",
      "notification-type": "info"
    }, {
      default: withCtx(() => _cache[0] || (_cache[0] = [
        createTextVNode("\n      You can only transfer assets that can be used as collateral to a derivatives enabled account.\n    ")
      ])),
      _: 1
    })) : createCommentVNode("", true),
    _cache[12] || (_cache[12] = createTextVNode()),
    createVNode(_component_AppForm, {
      ref: "form",
      class: normalizeClass(["transfer-form form--narrow", { "transfer-form--inline-amount-presets": $props.inlinePresets }]),
      schema: $options.formSchema,
      model: $data.formModel,
      "submit-button-text": _ctx.$t("components.subAccountTransferForm.transferButton"),
      "submit-button-visible": "",
      loading: $data.processing,
      "form-id": "subAccountTransferForm",
      onSubmit: $options.onSubmit
    }, {
      default: withCtx(() => [
        createVNode(_component_portal, { to: "account-swapper" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", {
                title: _ctx.$t("components.subAccountTransferForm.swapFromToTooltip")
              }, [
                createVNode(_component_AppIcon, {
                  class: "swapper__icon",
                  icon: "monochrome/switch.svg",
                  size: 16,
                  onClick: $options.swapSelectedAccounts
                }, null, 8, ["onClick"])
              ], 8, _hoisted_2)
            ])
          ]),
          _: 1
        }),
        _cache[9] || (_cache[9] = createTextVNode()),
        createVNode(_component_portal, { to: "from-account-balance" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("p", _hoisted_4, [
                createBaseVNode("span", null, toDisplayString(_ctx.$t("components.subAccountTransferForm.transferableLabel")), 1),
                createTextVNode(" \n            " + toDisplayString($options.fromAccountTransferable), 1)
              ])
            ])
          ]),
          _: 1
        }),
        _cache[10] || (_cache[10] = createTextVNode()),
        createVNode(_component_portal, { to: "to-account-balance" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("p", _hoisted_6, [
                createBaseVNode("span", null, toDisplayString(_ctx.$t("components.subAccountTransferForm.balanceLabel")), 1),
                createTextVNode(" \n            " + toDisplayString($options.toAccountBalance), 1)
              ])
            ])
          ]),
          _: 1
        }),
        _cache[11] || (_cache[11] = createTextVNode()),
        createVNode(_component_portal, { to: "transfer-form-content" }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(["transfer-form__percentage-buttons", { "transfer-form__percentage-buttons--disabled": $options.isAmountDisabled }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.presets, (p, index) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: `a-${p}`
                }, [
                  createBaseVNode("a", {
                    class: "transfer-form__fraction",
                    onClick: ($event) => $options.onPreset(p / 100)
                  }, toDisplayString(p) + "%\n            ", 9, _hoisted_7),
                  _cache[1] || (_cache[1] = createTextVNode()),
                  index < $props.presets.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_8, " / ")) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ], 2),
            _cache[8] || (_cache[8] = createTextVNode()),
            $options.isTransferMessageVisible ? (openBlock(), createElementBlock("p", _hoisted_9, [
              createTextVNode(toDisplayString(_ctx.$t("components.subAccountTransferForm.aboutToTransferLabel")) + " ", 1),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              _cache[3] || (_cache[3] = createTextVNode()),
              createBaseVNode("span", _hoisted_10, toDisplayString($options.formatAmount($options.sanitizedAmount, $data.formModel.currency)) + " " + toDisplayString($data.formModel.currency), 1),
              _cache[4] || (_cache[4] = createTextVNode()),
              createBaseVNode("span", null, toDisplayString(_ctx.$t("components.subAccountTransferForm.fromLabel")), 1),
              _cache[5] || (_cache[5] = createTextVNode()),
              createBaseVNode("span", _hoisted_11, toDisplayString($options.accountName($data.formModel.fromAccount)), 1),
              _cache[6] || (_cache[6] = createTextVNode()),
              createBaseVNode("span", null, toDisplayString(_ctx.$t("components.subAccountTransferForm.toLabel")), 1),
              _cache[7] || (_cache[7] = createTextVNode()),
              createBaseVNode("span", _hoisted_12, toDisplayString($options.accountName($data.formModel.toAccount)), 1)
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "schema", "model", "submit-button-text", "loading", "onSubmit"])
  ]);
}
const SubAccountTransferForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f322083"]]);
export {
  SubAccountTransferForm as S
};
