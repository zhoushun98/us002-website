import { ai as lodashExports, _ as _export_sfc, j as resolveComponent, o as openBlock, c as createElementBlock, $ as renderSlot, d as createTextVNode, F as Fragment, r as renderList, b as createBlock, w as withCtx, e as createCommentVNode, n as normalizeClass, av as slugifyFormID, a as createBaseVNode, m as resolveDynamicComponent, t as toDisplayString, k as createVNode, aw as EventBus, S as modals, W as useFormsStore, ax as validators, ay as truthy, az as tinNumber, aA as anyKey, aB as validState, aC as taxNumber, aD as registrationDate, aE as atLeastTwo, B as BtsButton, aF as Evaluate, h as _, N as EventBusConstants, q as mergeProps, aG as withModifiers, J as constants } from "./Di9v4FW5.js";
function getStyleClasses(field, baseClasses) {
  let styleClasses = field.styleClasses;
  if (lodashExports.isArray(styleClasses)) {
    styleClasses.forEach((c) => {
      baseClasses[c] = true;
    });
  } else if (lodashExports.isString(styleClasses)) {
    baseClasses[styleClasses] = true;
  }
  return baseClasses;
}
const _sfc_main$4 = {
  name: "FormGroup",
  props: {
    fields: {
      type: Array,
      default() {
        return [];
      }
    },
    group: {
      type: Object,
      default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: "fieldset",
      validator(value) {
        return value.length > 0;
      }
    },
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    errors: {
      type: Array,
      default() {
        return [];
      }
    },
    eventBus: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      validationClass: {}
    };
  },
  computed: {
    groupLegend() {
      if (this.group && this.group.legend) {
        return this.group.legend;
      }
      return null;
    },
    groupRowClasses() {
      let baseClasses = {
        "field-group": true
      };
      if (!lodashExports.isNil(this.group)) {
        baseClasses = getStyleClasses(this.group, baseClasses);
      }
      return baseClasses;
    }
  },
  created() {
    this.eventBus.$on("field-validated", () => {
      this.$nextTick(() => {
        const containFieldWithError = this.$refs.group.querySelector(
          `.form-element.${lodashExports.get(this.options, "validationErrorClass", "error")}`
        ) !== null;
        this.validationClass = {
          [lodashExports.get(this.options, "validationErrorClass", "error")]: containFieldWithError,
          [lodashExports.get(this.options, "validationSuccessClass", "valid")]: !containFieldWithError
        };
      });
    });
  },
  methods: {
    // Get visible prop of field
    fieldVisible(field) {
      if (lodashExports.isFunction(field.visible)) {
        return field.visible.call(this, this.model, field, this);
      }
      if (lodashExports.isNil(field.visible)) {
        return true;
      }
      return field.visible;
    },
    getGroupTag(field) {
      if (!lodashExports.isNil(field.tag)) {
        return field.tag;
      } else {
        return this.tag;
      }
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormGroup = resolveComponent("FormGroup", true);
  return $props.fields ? (openBlock(), createElementBlock("span", {
    key: 0,
    ref: "group",
    class: normalizeClass([$options.groupRowClasses, $data.validationClass])
  }, [
    renderSlot(_ctx.$slots, "group-legend", {
      group: $props.group,
      groupLegend: $options.groupLegend
    }),
    _cache[2] || (_cache[2] = createTextVNode()),
    renderSlot(_ctx.$slots, "group-help", { group: $props.group }),
    _cache[3] || (_cache[3] = createTextVNode()),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.fields, (field, index) => {
      return openBlock(), createElementBlock(Fragment, null, [
        $options.fieldVisible(field) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          field.type === "group" ? (openBlock(), createBlock(_component_FormGroup, {
            key: index,
            fields: field.fields,
            group: field,
            tag: $options.getGroupTag(field),
            model: $props.model,
            options: $props.options,
            errors: $props.errors,
            "event-bus": $props.eventBus
          }, {
            "group-legend": withCtx((slotProps) => [
              renderSlot(_ctx.$slots, "group-legend", {
                group: slotProps.group,
                groupLegend: slotProps.groupLegend
              })
            ]),
            "group-help": withCtx((slotProps) => [
              renderSlot(_ctx.$slots, "group-help", {
                group: slotProps.group
              })
            ]),
            element: withCtx((slotProps) => [
              renderSlot(_ctx.$slots, "element", {
                field: slotProps.field,
                model: slotProps.model,
                options: slotProps.options,
                errors: slotProps.errors,
                eventBus: slotProps.eventBus
              })
            ]),
            _: 2
          }, 1032, ["fields", "group", "tag", "model", "options", "errors", "event-bus"])) : renderSlot(_ctx.$slots, "element", {
            key: 1,
            field,
            model: $props.model,
            options: $props.options,
            errors: $props.errors,
            eventBus: $props.eventBus
          })
        ], 64)) : createCommentVNode("", true)
      ], 64);
    }), 256))
  ], 2)) : createCommentVNode("", true);
}
const FormGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "FormElement",
  props: {
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    field: {
      type: Object,
      required: true
    },
    errors: {
      type: Array,
      default() {
        return [];
      }
    },
    eventBus: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      childErrors: [],
      childTouched: false
    };
  },
  computed: {
    fieldID() {
      const idPrefix = lodashExports.get(this.options, "fieldIdPrefix", "");
      return slugifyFormID(this.field, idPrefix);
    },
    // Get type of field 'field-xxx'. It'll be the name of HTML element
    fieldType() {
      return `field-${this.field.type}`;
    },
    // Should field type have a label?
    fieldTypeHasLabel() {
      if (lodashExports.isNil(this.field.label)) {
        return false;
      }
      const fieldOptions = this.getValueFromOption(this.field, "fieldOptions");
      const condition = this.field.type === "input" && !lodashExports.isNil(fieldOptions);
      const relevantType = condition ? fieldOptions.inputType : this.field.type;
      const typeWithoutLabel = ["button", "submit", "reset"];
      return !typeWithoutLabel.includes(relevantType);
    },
    fieldHasHint() {
      return !lodashExports.isNil(this.field.hint);
    },
    fieldHasErrors() {
      return this.childErrors.length > 0;
    },
    fieldRowClasses() {
      let baseClasses = {
        [lodashExports.get(this.options, "validationErrorClass", "error")]: this.fieldHasErrors,
        [lodashExports.get(this.options, "validationSuccessClass", "valid")]: !this.fieldHasErrors && this.childTouched,
        [lodashExports.get(this.options, "validationCleanClass", "clean")]: !this.fieldHasErrors && !this.childTouched,
        disabled: this.getValueFromOption(this.field, "disabled"),
        readonly: this.getValueFromOption(this.field, "readonly"),
        featured: this.getValueFromOption(this.field, "featured"),
        required: this.getValueFromOption(this.field, "required")
      };
      baseClasses = getStyleClasses(this.field, baseClasses);
      if (!lodashExports.isNil(this.field.type)) {
        baseClasses[`field-${this.field.type}`] = true;
      }
      return baseClasses;
    },
    buttonsAreVisible() {
      return lodashExports.isArray(this.field.buttons) && this.field.buttons.length > 0;
    }
  },
  methods: {
    getValueFromOption(field, option, defaultValue = false) {
      if (lodashExports.isFunction(field[option])) {
        return field[option].call(this, this.model, field, this);
      }
      if (lodashExports.isNil(field[option])) {
        return defaultValue;
      }
      return field[option];
    },
    buttonClickHandler(btn, field, event) {
      return btn.onclick.call(this, this.model, field, event, this);
    },
    onFieldTouched() {
      this.childTouched = true;
    },
    onChildValidated(errors) {
      this.childErrors = errors;
    }
  }
};
const _hoisted_1$8 = ["for"];
const _hoisted_2$2 = { class: "field-wrap" };
const _hoisted_3$2 = {
  key: 0,
  class: "buttons"
};
const _hoisted_4$2 = ["onClick", "textContent"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["form-element", [$options.fieldRowClasses]])
  }, [
    $options.fieldTypeHasLabel ? (openBlock(), createElementBlock("label", {
      key: 0,
      for: $options.fieldID,
      class: normalizeClass($props.field.labelClasses)
    }, [
      renderSlot(_ctx.$slots, "label", {
        field: $props.field,
        getValueFromOption: $options.getValueFromOption
      }),
      _cache[0] || (_cache[0] = createTextVNode()),
      renderSlot(_ctx.$slots, "help", {
        field: $props.field,
        getValueFromOption: $options.getValueFromOption
      })
    ], 10, _hoisted_1$8)) : createCommentVNode("", true),
    _cache[2] || (_cache[2] = createTextVNode()),
    createBaseVNode("div", _hoisted_2$2, [
      (openBlock(), createBlock(resolveDynamicComponent($options.fieldType), {
        ref: "child",
        model: $props.model,
        schema: $props.field,
        "form-options": $props.options,
        "event-bus": $props.eventBus,
        "field-id": $options.fieldID,
        onFieldTouched: $options.onFieldTouched,
        onErrorsUpdated: $options.onChildValidated
      }, null, 40, ["model", "schema", "form-options", "event-bus", "field-id", "onFieldTouched", "onErrorsUpdated"])),
      _cache[1] || (_cache[1] = createTextVNode()),
      $options.buttonsAreVisible ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.field.buttons, (btn, index) => {
          return openBlock(), createElementBlock("button", {
            key: index,
            class: normalizeClass(btn.classes),
            onClick: ($event) => $options.buttonClickHandler(btn, $props.field, $event),
            textContent: toDisplayString(btn.label)
          }, null, 10, _hoisted_4$2);
        }), 128))
      ])) : createCommentVNode("", true)
    ]),
    _cache[3] || (_cache[3] = createTextVNode()),
    $options.fieldHasHint ? renderSlot(_ctx.$slots, "hint", {
      key: 1,
      field: $props.field,
      getValueFromOption: $options.getValueFromOption
    }) : createCommentVNode("", true),
    _cache[4] || (_cache[4] = createTextVNode()),
    $options.fieldHasErrors ? renderSlot(_ctx.$slots, "errors", {
      key: 2,
      childErrors: $data.childErrors,
      field: $props.field,
      getValueFromOption: $options.getValueFromOption
    }) : createCommentVNode("", true)
  ], 2);
}
const FormElement = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "FormGenerator",
  components: { FormGroup, FormElement },
  props: {
    schema: {
      type: Object,
      default() {
        return {};
      }
    },
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {
          validateAfterLoad: false,
          validateAsync: false,
          validateAfterChanged: false,
          validationErrorClass: "error",
          validationSuccessClass: ""
        };
      }
    },
    isNewModel: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "fieldset",
      validator(value) {
        return value.length > 0;
      }
    }
  },
  emits: ["validated", "model-updated"],
  data() {
    const eventBus = new EventBus();
    return {
      eventBus,
      totalNumberOfFields: 0,
      errors: []
      // Validation errors
    };
  },
  computed: {
    fields() {
      if (this.schema && this.schema.fields) {
        return this.schema.fields;
      }
      return [];
    }
  },
  watch: {
    // new model loaded
    model: {
      handler(newModel, oldModel) {
        if (oldModel === newModel) {
          return;
        }
        if (newModel != null) {
          this.$nextTick(() => {
            if (this.options.validateAfterLoad === true && this.isNewModel !== true) {
              this.validate().then(() => {
              }, () => {
              });
            } else {
              this.clearValidationErrors();
            }
          });
        }
      },
      immediate: () => {
        return true;
      }
    }
  },
  created() {
    if (lodashExports.get(this.options, "validateAfterChanged", false)) {
      this.eventBus.$on("field-validated", this.onFieldValidated);
    }
    this.eventBus.$on("model-updated", this.onModelUpdated);
    this.eventBus.$on("fields-validation-trigger", this.validate);
    this.eventBus.$on("field-registering", () => {
      this.totalNumberOfFields = this.totalNumberOfFields + 1;
    });
    this.eventBus.$on("field-deregistering", () => {
      this.totalNumberOfFields = this.totalNumberOfFields - 1;
    });
  },
  beforeUnmount() {
    this.eventBus.$off("field-validated");
    this.eventBus.$off("model-updated");
    this.eventBus.$off("fields-validation-trigger");
    this.eventBus.$off("field-registering");
    this.eventBus.$off("field-deregistering");
  },
  methods: {
    fillErrors(fieldErrors, errors, uid) {
      if (lodashExports.isArray(fieldErrors) && fieldErrors.length > 0) {
        fieldErrors.forEach((error) => {
          errors.push({
            uid,
            error
          });
        });
      }
    },
    // Child field executed validation
    onFieldValidated(fieldIsValid, fieldErrors, uid) {
      this.errors = this.errors.filter((e) => e.uid !== uid);
      this.fillErrors(fieldErrors, this.errors, uid);
      const isValid = this.errors.length === 0;
      this.$emit("validated", isValid, this.errors, this);
    },
    onModelUpdated(newVal, schema) {
      this.$emit("model-updated", newVal, schema);
    },
    // Validating the model properties
    validate() {
      return new Promise((resolve, reject) => {
        this.clearValidationErrors();
        let fieldsValidated = 0;
        const formErrors = [];
        this.eventBus.$on("field-deregistering", () => {
          this.eventBus.$emit("fields-validation-terminated", formErrors);
          reject(formErrors);
        });
        const counter = (isValid, fieldErrors, uid) => {
          fieldsValidated++;
          this.fillErrors(fieldErrors, formErrors, uid);
          if (fieldsValidated === this.totalNumberOfFields) {
            this.eventBus.$off("field-validated", counter);
            if (lodashExports.get(this.options, "validateAfterChanged", false)) {
              this.eventBus.$on("field-validated", this.onFieldValidated);
            }
            this.errors = formErrors;
            const isValid2 = formErrors.length === 0;
            this.$emit("validated", isValid2, formErrors, this);
            this.eventBus.$emit("fields-validation-terminated", formErrors);
            if (isValid2) {
              resolve();
            } else {
              reject(formErrors);
            }
          }
        };
        if (lodashExports.get(this.options, "validateAfterChanged", false)) {
          this.eventBus.$off("field-validated", this.onFieldValidated);
        }
        this.eventBus.$on("field-validated", counter);
        this.eventBus.$emit("validate-fields", this);
      });
    },
    // Clear validation errors
    clearValidationErrors() {
      this.errors.splice(0);
      this.eventBus.$emit("clear-validation-errors", this.clearValidationErrors);
    }
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "vue-form-generator"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = {
  key: 0,
  class: "help"
};
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 0,
  class: "help"
};
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = { class: "errors help-block" };
const _hoisted_11 = ["innerHTML"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormElement = resolveComponent("FormElement");
  const _component_FormGroup = resolveComponent("FormGroup");
  return $props.schema != null ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createVNode(_component_FormGroup, {
      tag: $props.tag,
      fields: $options.fields,
      model: $props.model,
      options: $props.options,
      errors: $data.errors,
      "event-bus": $data.eventBus
    }, {
      "group-legend": withCtx(({ group, groupLegend }) => [
        renderSlot(_ctx.$slots, "group-legend", {
          group,
          groupLegend
        }, () => [
          groupLegend ? (openBlock(), createElementBlock("legend", _hoisted_2$1, [
            createBaseVNode("span", { innerHTML: groupLegend }, null, 8, _hoisted_3$1)
          ])) : createCommentVNode("", true)
        ])
      ]),
      "group-help": withCtx(({ group }) => [
        renderSlot(_ctx.$slots, "group-help", { group }, () => [
          group.help ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
            _cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon" }, null, -1)),
            _cache[1] || (_cache[1] = createTextVNode()),
            createBaseVNode("div", {
              class: "helpText",
              innerHTML: group.help
            }, null, 8, _hoisted_5$1)
          ])) : createCommentVNode("", true)
        ])
      ]),
      element: withCtx((slotProps) => [
        createVNode(_component_FormElement, {
          field: slotProps.field,
          model: slotProps.model,
          options: slotProps.options,
          errors: slotProps.errors,
          "event-bus": $data.eventBus
        }, {
          label: withCtx(({ field, getValueFromOption }) => [
            renderSlot(_ctx.$slots, "label", {
              field,
              getValueFromOption
            }, () => [
              createBaseVNode("span", {
                innerHTML: field.label
              }, null, 8, _hoisted_6)
            ])
          ]),
          help: withCtx(({ field, getValueFromOption }) => [
            renderSlot(_ctx.$slots, "help", {
              field,
              getValueFromOption
            }, () => [
              field.help ? (openBlock(), createElementBlock("span", _hoisted_7, [
                _cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon" }, null, -1)),
                _cache[3] || (_cache[3] = createTextVNode()),
                createBaseVNode("div", {
                  class: "helpText",
                  innerHTML: field.help
                }, null, 8, _hoisted_8)
              ])) : createCommentVNode("", true)
            ])
          ]),
          hint: withCtx(({ field, getValueFromOption }) => [
            renderSlot(_ctx.$slots, "hint", {
              field,
              getValueFromOption
            }, () => [
              createBaseVNode("div", {
                class: "hint",
                innerHTML: getValueFromOption(field, "hint", void 0)
              }, null, 8, _hoisted_9)
            ])
          ]),
          errors: withCtx(({ childErrors, field, getValueFromOption }) => [
            renderSlot(_ctx.$slots, "errors", {
              errors: childErrors,
              field,
              getValueFromOption
            }, () => [
              createBaseVNode("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(childErrors, (error, index) => {
                  return openBlock(), createElementBlock("span", {
                    key: index,
                    innerHTML: error
                  }, null, 8, _hoisted_11);
                }), 128))
              ])
            ])
          ]),
          _: 2
        }, 1032, ["field", "model", "options", "errors", "event-bus"])
      ]),
      _: 3
    }, 8, ["tag", "fields", "model", "options", "errors", "event-bus"])
  ])) : createCommentVNode("", true);
}
const FormGenerator = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const investorCriteriaError = "Investor criteria not met";
const investorLimitExceeded = "Investment limit exceeded";
const categorizationPercentage = (value) => {
  const valueNumber = parseInt(value);
  if (isNaN(valueNumber)) {
    return ["Only numbers are allowed"];
  }
  if (valueNumber > 100) {
    return ["Invalid value"];
  }
  if (valueNumber > 10) {
    return [investorLimitExceeded];
  }
  if (valueNumber < 0) {
    return ["Invalid value"];
  }
};
const highNetAssets250k = (value) => {
  const valueNumber = parseInt(value);
  if (isNaN(valueNumber)) {
    return ["Only numbers are allowed"];
  }
  if (valueNumber < 25e4) {
    return [investorCriteriaError];
  }
};
const annualIncome100k = (value) => {
  const valueNumber = parseInt(value);
  if (isNaN(valueNumber)) {
    return ["Only numbers are allowed"];
  }
  if (valueNumber < 1e5) {
    return [investorCriteriaError];
  }
};
const certifiedSophInvestor = (value) => {
  if (value.length < 3) {
    return ["Certified sophisticated investor must provide authorized firm data at least 3 characters long."];
  }
  const isValid = /^[A-Za-z0-9 ]+$/.test(value);
  if (!isValid) {
    return ["Invalid characters"];
  }
};
const changeInvestorProfile = () => {
  const formsStore = useFormsStore();
  const component = formsStore.component;
  formsStore.resetComponent({ data: null });
  setTimeout(() => formsStore.switchComponent({ component, data: null }), 100);
};
const errorHandler = (ctx, errors) => {
  if (!(errors == null ? void 0 : errors.length)) {
    return;
  }
  if (errors == null ? void 0 : errors.find((el) => el.error === investorCriteriaError)) {
    const documentExists = document.getElementsByClassName("error__investor-criteria-error");
    if (!documentExists.length) {
      modals.createAlertDialog(ctx, {
        title: investorCriteriaError,
        message: "Under financial regulations, as a high-net-worth investor, you must have had an income of over £100,000 and/or net assets of over £250,000 in the last financial year. \nAs you have specified a value under £100,000 and/or net assets of under £250,000, we're unable to offer you our services as a high-net-worth investor.",
        canDismiss: true,
        customClass: "error__investor-criteria-error",
        onConfirm: changeInvestorProfile
      });
    }
    return;
  }
  if (errors == null ? void 0 : errors.find((el) => el.error === investorLimitExceeded)) {
    const documentExists = document.getElementsByClassName("error__investor-limit-exceeded");
    if (!documentExists.length) {
      modals.createAlertDialog(ctx, {
        title: investorLimitExceeded,
        message: `Under FCA rules, a restricted investor is defined as one whose investments in high-risk assets over the past and upcoming year constitute not more than 10% of their total net assets. 
As you have selected more than 10%, you do not meet the criteria of a restricted investor.`,
        canDismiss: true,
        customClass: "error__investor-limit-exceeded",
        onConfirm: changeInvestorProfile
      });
    }
  }
};
const ukValidators = {
  categorizationPercentage,
  highNetAssets250k,
  annualIncome100k,
  certifiedSophInvestor
};
function validateIncludes(array, value) {
  return array.includes(value);
}
const evaluators = { validateIncludes };
Object.assign(validators, { truthy, tinNumber, anyKey, validState, taxNumber, registrationDate, atLeastTwo, ...ukValidators });
const _sfc_main$1 = {
  name: "BtsForm",
  components: {
    BtsButton,
    FormGenerator
  },
  props: {
    schema: {
      type: Object,
      default: null
    },
    model: {
      type: Object,
      default: null
    },
    isNewModel: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    validateAfterLoad: {
      type: Boolean,
      default: false
    },
    validateAfterChanged: {
      type: Boolean,
      default: true
    },
    validateAsync: {
      type: Boolean,
      default: false
    },
    fieldIdPrefix: {
      type: String,
      default: "form_"
    },
    submitButtonVisible: {
      type: Boolean,
      default: false
    },
    submitButtonText: {
      type: [String, Object],
      default: null
    },
    submitButtonProps: {
      type: Object,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    },
    backoffice: {
      type: Boolean,
      default: false
    },
    formId: {
      type: String,
      default: "vue-form"
    },
    allowEmptySchema: {
      type: Boolean,
      default: false
    },
    submitButtonTestId: {
      type: String,
      default: null
    }
  },
  emits: ["error", "submit", "validated", "modelUpdated", "submitRequested"],
  setup() {
    return {
      formsStore: useFormsStore()
    };
  },
  data() {
    return {
      valid: null,
      formKey: 0,
      buttonDisabled: false,
      sequentialQueue: [],
      cachedResults: {},
      errors: []
    };
  },
  computed: {
    conditionalSchema() {
      const allFields = this.schema.fields;
      const visibleFields = allFields.filter((field) => {
        return field.visibleWhen ? Evaluate(field.visibleWhen, {
          $constants: this.$constants,
          $schema: this.schema,
          formsStore: this.formsStore,
          ...evaluators,
          ...this.model
        }) : true;
      });
      allFields.filter((field) => !visibleFields.includes(field)).forEach((field) => _.unset(this.model, field.model));
      visibleFields.forEach((field) => {
        if (field.model && field.model.includes(".")) {
          field.get = (model) => {
            delete model[field.model];
            return _.get(model, field.model);
          };
        }
        field.fieldOptions = field.fieldOptions || {};
        field.fieldOptions.backoffice = this.backoffice;
        if (field.fieldOptions.slot) {
          field.fieldOptions.$formSlots = this.$slots;
        }
        return field;
      });
      return { fields: visibleFields };
    },
    hasInvisibleCaptchaField() {
      const allFields = this.schema.fields;
      const captchaFields = allFields.filter((field) => {
        return ["recaptcha", "hcaptcha"].includes(field.type) && field.fieldOptions.size === "invisible";
      });
      return captchaFields.length > 0;
    }
  },
  watch: {
    schema: {
      handler() {
        this.onValidated(true);
      },
      immediate: true
    },
    conditionalSchema: {
      handler(newValue, oldValue) {
        if (newValue.fields.length !== oldValue.fields.length) {
          this.formKey += 1;
        }
        if (newValue.fields.length !== oldValue.fields.length && !this.valid) {
          this.$nextTick(() => this.onValidated(true));
        }
      }
    },
    sequentialQueue: {
      handler() {
        if (this.sequentialQueue.length > 0 && !this.sequentialQueue[0].isPending) {
          const name = this.sequentialQueue[0].name;
          this.sequentialQueue[0].isPending = true;
          if (_.has(this.cachedResults, name)) {
            this.sequentialQueue.shift();
            this.$eventBus.$emit(EventBusConstants.FORM_FIELDS.DEQUEUE, {
              name,
              ...this.cachedResults[name]
            });
          } else {
            this.sequentialQueue[0].callback().then((response) => {
              this.cachedResults[name] = { response };
              this.sequentialQueue.shift();
              this.$eventBus.$emit(EventBusConstants.FORM_FIELDS.DEQUEUE, {
                name,
                response
              });
            }).catch((error) => {
              this.cachedResults[name] = { error };
              this.sequentialQueue.shift();
              this.$eventBus.$emit(EventBusConstants.FORM_FIELDS.DEQUEUE, {
                name,
                error
              });
            });
          }
        }
      },
      deep: true
    },
    errors: {
      handler(newValue) {
        if (!(newValue == null ? void 0 : newValue.length)) {
          return;
        }
        this.$emit("error", newValue);
      }
    }
  },
  created() {
    var _a;
    (_a = this.$eventBus) == null ? void 0 : _a.$on(EventBusConstants.FORM_FIELDS.ENQUEUE, this.enqueue);
  },
  unmounted() {
    var _a;
    (_a = this.$eventBus) == null ? void 0 : _a.$off(EventBusConstants.FORM_FIELDS.ENQUEUE);
  },
  methods: {
    /**
     * name - String
     * callback - fn -> Promise
     */
    enqueue({ name, callback }) {
      if (_.find(this.sequentialQueue, { name }) === void 0) {
        this.sequentialQueue.push({ isPending: false, name, callback });
      }
    },
    forwardResponse(response) {
      this.$eventBus.$emit(EventBusConstants.FORM_FIELDS.DEQUEUE, {
        name: this.sequentialQueue[0].name,
        response
      });
    },
    validate() {
      const vueForm = document.querySelector(`#${this.formId}`).__vue__;
      if (!vueForm) {
        return;
      }
      if (this.allowEmptySchema && this.conditionalSchema.fields.length === 0) {
        return new Promise((resolve) => {
          this.onValidated(true);
          resolve();
        });
      }
      if (this.hasInvisibleCaptchaField) {
        this.$eventBus.$emit("triggerCaptcha");
        return new Promise((resolve) => {
          this.$eventBus.$once("captchaResponse", () => {
            resolve(vueForm.validate());
          });
        });
      } else {
        return vueForm.validate();
      }
    },
    rerender() {
      this.formKey += 1;
    },
    onSubmit(event) {
      if (event) {
        event.preventDefault();
      }
      this.validate().then(() => {
        this.$emit("submit", this.model);
        this.buttonDisabled = true;
      }).catch(() => {
      });
    },
    onValidated(valid, errors) {
      var _a;
      this.errors = errors;
      if (((_a = this.model) == null ? void 0 : _a.validator) === "invalid") {
        this.valid = false;
        this.$emit("validated", false, this.model);
        this.buttonDisabled = true;
        return;
      }
      if (valid) {
        const calculated = this.conditionalSchema.fields.filter((field) => _.includes(field.validator, "required")).every((field) => ((x) => _.isBoolean(x) || _.isNumber(x) || !_.isEmpty(x))(_.get(this.model, field.model)));
        this.$emit("validated", calculated, this.model);
        this.buttonDisabled = !calculated;
      } else {
        this.valid = false;
        this.$emit("validated", false, this.model);
        this.buttonDisabled = true;
      }
    },
    onModelUpdated(...props) {
      this.$emit("modelUpdated", ...props);
    }
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "buttons-row"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormGenerator = resolveComponent("FormGenerator");
  const _component_BtsButton = resolveComponent("BtsButton");
  return openBlock(), createElementBlock("form", {
    class: normalizeClass({
      form: true,
      "form--inline": $props.inline,
      "form--backoffice": $props.backoffice
    }),
    method: "post",
    onSubmit: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("submitRequested"), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "title", {}, void 0, true),
    _cache[2] || (_cache[2] = createTextVNode()),
    (openBlock(), createBlock(_component_FormGenerator, {
      id: $props.formId,
      key: $data.formKey,
      schema: $options.conditionalSchema,
      model: $props.model,
      "is-new-model": $props.isNewModel,
      options: { validateAfterLoad: $props.validateAfterLoad, validateAfterChanged: $props.validateAfterChanged, fieldIdPrefix: $props.fieldIdPrefix, validateAsync: $props.validateAsync },
      tag: "div",
      onModelUpdated: $options.onModelUpdated,
      onValidated: $options.onValidated
    }, null, 8, ["id", "schema", "model", "is-new-model", "options", "onModelUpdated", "onValidated"])),
    _cache[3] || (_cache[3] = createTextVNode()),
    $props.submitButtonVisible ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
      createVNode(_component_BtsButton, mergeProps({ disabled: $data.buttonDisabled || $props.loading, backoffice: $props.backoffice, ...$props.submitButtonProps }, {
        "test-id": $props.submitButtonTestId,
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onSubmit($event))
      }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$tt($props.submitButtonText)), 1)
        ]),
        _: 1
      }, 16, ["test-id"])
    ])) : createCommentVNode("", true),
    _cache[4] || (_cache[4] = createTextVNode()),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 34);
}
const BtsForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8df4bc3a"]]);
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M12 0a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.29 5.29 1.42 1.42-3.3 3.29 3.3 3.29-1.42 1.42-3.29-3.3-3.29 3.3-1.42-1.42 3.3-3.29-3.3-3.29 1.42-1.42 3.29 3.3z"
    }, null, -1)
  ]));
}
const ErrorIcon = { render: render$4 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M12 0a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m1 13.5v2h-2v-2zm0-9v7h-2v-7z"
    }, null, -1)
  ]));
}
const WarningIcon = { render: render$3 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M12 0a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m1.05 8.66c.3.27.468.657.46 1.06a3 3 0 0 1 0 .46q-.03.316-.12.62l-.58 2c0 .19-.09.38-.13.57a2.6 2.6 0 0 0-.05.48.66.66 0 0 0 .18.55 1 1 0 0 0 .62.15 1.6 1.6 0 0 0 .48-.08q.21-.045.41-.12l-.02.01-.15.62-1.15.41a3.2 3.2 0 0 1-1 .15 1.9 1.9 0 0 1-1.3-.4 1.31 1.31 0 0 1-.47-1 4 4 0 0 1 0-.5 3 3 0 0 1 .11-.59L11 13c.05-.2.1-.39.13-.56a2 2 0 0 0 .06-.48.76.76 0 0 0-.17-.56 1 1 0 0 0-.61-.15 1.8 1.8 0 0 0-.46.07l-.44.11.16-.61c.37-.16.74-.28 1.09-.4a3.3 3.3 0 0 1 1-.16 1.86 1.86 0 0 1 1.29.4m1-3.82a1.2 1.2 0 0 1 .41.93c.012.35-.14.687-.41.91a1.43 1.43 0 0 1-2 0 1.22 1.22 0 0 1-.41-.92c0-.351.148-.686.41-.92a1.43 1.43 0 0 1 2 0"
    }, null, -1)
  ]));
}
const InfoIcon = { render: render$2 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "25",
  height: "24",
  viewBox: "0 0 25 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M12.5 0a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S.5 18.627.5 12s5.373-12 12-12m0 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m4.29 5.44 1.42 1.41-7.71 7.71-3.71-3.71 1.42-1.41 2.29 2.29z"
    }, null, -1)
  ]));
}
const SuccessIcon = { render: render$1 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 12"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M10.71 2.71 9.29 1.29 6 4.59l-3.29-3.3-1.42 1.42L4.59 6l-3.3 3.29 1.42 1.42L6 7.41l3.29 3.3 1.42-1.42L7.41 6z"
    }, null, -1)
  ]));
}
const CloseIcon = { render };
const _sfc_main = {
  name: "GeneralNotification",
  INFO: constants.NOTIFICATIONS.TYPES.INFO,
  WARNING: constants.NOTIFICATIONS.TYPES.WARNING,
  ERROR: constants.NOTIFICATIONS.TYPES.ERROR,
  SUCCESS: constants.NOTIFICATIONS.TYPES.SUCCESS,
  components: {
    ErrorIcon,
    SuccessIcon,
    InfoIcon,
    WarningIcon,
    CloseIcon,
    BtsButton
  },
  props: {
    title: {
      type: [String, Object],
      default: ""
    },
    notificationType: {
      type: String,
      required: true,
      validator: (value) => Object.values(constants.NOTIFICATIONS.TYPES).includes(value)
    },
    action: {
      type: Object,
      default: null
    },
    viewBreak: {
      type: Number,
      default: 768
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    pro: {
      type: Boolean,
      default: false
    },
    singleColumnLayout: {
      type: Boolean,
      default: false
    }
  },
  emits: ["dismiss", "action"],
  data() {
    return {
      narrow: false,
      tall: false
    };
  },
  computed: {
    notificationIcon() {
      return `${this.notificationType.charAt(0).toUpperCase()}${this.notificationType.slice(1)}Icon`;
    },
    isSlim() {
      return this.narrow || this.tall;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleSize);
    this.$nextTick(() => {
      this.handleSize();
    });
  },
  unmounted() {
    window.removeEventListener("resize", this.handleSize);
  },
  methods: {
    dismiss() {
      if (this.dismissible) {
        this.$emit("dismiss");
      }
    },
    handleSize() {
      if (this.$refs.notification) {
        this.narrow = this.$refs.notification.clientWidth <= this.viewBreak;
        this.tall = this.$refs.notification.clientHeight > 120;
      }
    },
    onAction() {
      var _a;
      if (((_a = this.action) == null ? void 0 : _a.link) && !this.action.apiLink) {
        window.location.href = this.action.link;
      }
      this.$emit("action", this.action);
    }
  }
};
const _hoisted_1 = { class: "notification__content" };
const _hoisted_2 = {
  key: 0,
  class: "notification__title"
};
const _hoisted_3 = {
  key: 1,
  class: "notification__text"
};
const _hoisted_4 = {
  key: 0,
  class: "notification__action"
};
const _hoisted_5 = {
  key: 1,
  class: "notification__action"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BtsButton = resolveComponent("BtsButton");
  const _component_CloseIcon = resolveComponent("CloseIcon");
  return openBlock(), createElementBlock("div", {
    ref: "notification",
    class: normalizeClass(["notification", { "notification--narrow": $options.isSlim }])
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["notification__type", `notification__type--${$props.notificationType}`])
    }, [
      !$options.isSlim ? (openBlock(), createBlock(resolveDynamicComponent($options.notificationIcon), {
        key: 0,
        class: "notification__type-icon"
      })) : createCommentVNode("", true)
    ], 2),
    _cache[3] || (_cache[3] = createTextVNode()),
    createBaseVNode("div", {
      class: normalizeClass(["notification__body", {
        "notification__body--pro": $props.pro,
        "notification__body--flex-column": $props.singleColumnLayout
      }])
    }, [
      createBaseVNode("div", _hoisted_1, [
        $props.title ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.$tt($props.title)), 1)) : createCommentVNode("", true),
        _cache[0] || (_cache[0] = createTextVNode()),
        _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ]),
      _cache[1] || (_cache[1] = createTextVNode()),
      $props.action && $props.action.text ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createVNode(_component_BtsButton, {
          class: normalizeClass(["notification__action-button", { "notification__action-button--regular": !$props.pro }]),
          compact: $props.pro,
          secondary: !$props.pro,
          "color-type": $props.pro ? $props.notificationType : void 0,
          onClick: $options.onAction
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$tt($props.action.text)), 1)
          ]),
          _: 1
        }, 8, ["class", "compact", "secondary", "color-type", "onClick"])
      ])) : createCommentVNode("", true),
      _cache[2] || (_cache[2] = createTextVNode()),
      _ctx.$slots.action ? (openBlock(), createElementBlock("div", _hoisted_5, [
        renderSlot(_ctx.$slots, "action")
      ])) : createCommentVNode("", true)
    ], 2),
    _cache[4] || (_cache[4] = createTextVNode()),
    $props.dismissible ? (openBlock(), createBlock(_component_CloseIcon, {
      key: 0,
      class: "notification__dismiss",
      onClick: $options.dismiss
    }, null, 8, ["onClick"])) : createCommentVNode("", true)
  ], 2);
}
const GeneralNotification = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-48783da2"]]);
export {
  BtsForm as B,
  GeneralNotification as G,
  errorHandler as e
};
