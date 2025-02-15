import { bo as lodashExports, _ as _export_sfc, y as resolveComponent, o as openBlock, e as createElementBlock, ae as renderSlot, g as createTextVNode, F as Fragment, a5 as renderList, c as createBlock, w as withCtx, h as createCommentVNode, J as normalizeClass, bp as slugifyFormID, i as createBaseVNode, D as resolveDynamicComponent, t as toDisplayString, f as createVNode, bq as EventBus, br as shams$1, bs as callBound$3, bb as commonjsGlobal, bt as gopd, bu as callBindExports, ba as process$1, bv as hasPropertyDescriptors_1, bw as defineDataProperty, bc as getDefaultExportFromCjs, bx as validators, by as truthy, bz as tinNumber, bA as anyKey, bB as validState, bC as taxNumber, bD as registrationDate, bE as atLeastTwo, B as BtsButton, bF as useFormsStore, aj as _, aV as EventBusConstants, bj as mergeProps, b3 as withModifiers } from "./BEpVD-aq.js";
import { i as inherits_browserExports } from "./CZjLos_N.js";
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
const _sfc_main$3 = {
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
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
const FormGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
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
    onChildValidated(errors2) {
      this.childErrors = errors2;
    }
  }
};
const _hoisted_1$2 = ["for"];
const _hoisted_2$1 = { class: "field-wrap" };
const _hoisted_3$1 = {
  key: 0,
  class: "buttons"
};
const _hoisted_4$1 = ["onClick", "textContent"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
    ], 10, _hoisted_1$2)) : createCommentVNode("", true),
    _cache[2] || (_cache[2] = createTextVNode()),
    createBaseVNode("div", _hoisted_2$1, [
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
      $options.buttonsAreVisible ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.field.buttons, (btn, index) => {
          return openBlock(), createElementBlock("button", {
            key: index,
            class: normalizeClass(btn.classes),
            onClick: ($event) => $options.buttonClickHandler(btn, $props.field, $event),
            textContent: toDisplayString(btn.label)
          }, null, 10, _hoisted_4$1);
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
const FormElement = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
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
    fillErrors(fieldErrors, errors2, uid) {
      if (lodashExports.isArray(fieldErrors) && fieldErrors.length > 0) {
        fieldErrors.forEach((error) => {
          errors2.push({
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
const _hoisted_1$1 = {
  key: 0,
  class: "vue-form-generator"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 0,
  class: "help"
};
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 0,
  class: "help"
};
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = { class: "errors help-block" };
const _hoisted_11 = ["innerHTML"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormElement = resolveComponent("FormElement");
  const _component_FormGroup = resolveComponent("FormGroup");
  return $props.schema != null ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
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
          groupLegend ? (openBlock(), createElementBlock("legend", _hoisted_2, [
            createBaseVNode("span", { innerHTML: groupLegend }, null, 8, _hoisted_3)
          ])) : createCommentVNode("", true)
        ])
      ]),
      "group-help": withCtx(({ group }) => [
        renderSlot(_ctx.$slots, "group-help", { group }, () => [
          group.help ? (openBlock(), createElementBlock("span", _hoisted_4, [
            _cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon" }, null, -1)),
            _cache[1] || (_cache[1] = createTextVNode()),
            createBaseVNode("div", {
              class: "helpText",
              innerHTML: group.help
            }, null, 8, _hoisted_5)
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
const FormGenerator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var assert$1 = { exports: {} };
var errors = {};
var util = {};
var types$1 = {};
var hasSymbols$1 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols$1() && !!Symbol.toStringTag;
};
var hasToStringTag$3 = shams();
var callBound$2 = callBound$3;
var $toString$1 = callBound$2("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
  if (hasToStringTag$3 && value && typeof value === "object" && Symbol.toStringTag in value) {
    return false;
  }
  return $toString$1(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments2(value) {
  if (isStandardArguments(value)) {
    return true;
  }
  return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString$1(value) !== "[object Array]" && $toString$1(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
  return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments;
var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
var toStr$3 = Object.prototype.toString;
var fnToStr$1 = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag$2 = shams();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
  if (!hasToStringTag$2) {
    return false;
  }
  try {
    return Function("return function*() {}")();
  } catch (e) {
  }
};
var GeneratorFunction;
var isGeneratorFunction = function isGeneratorFunction2(fn) {
  if (typeof fn !== "function") {
    return false;
  }
  if (isFnRegex.test(fnToStr$1.call(fn))) {
    return true;
  }
  if (!hasToStringTag$2) {
    var str = toStr$3.call(fn);
    return str === "[object GeneratorFunction]";
  }
  if (!getProto) {
    return false;
  }
  if (typeof GeneratorFunction === "undefined") {
    var generatorFunc = getGeneratorFunc();
    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
  }
  return getProto(fn) === GeneratorFunction;
};
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike);
  } catch (_2) {
    if (_2 !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr$2 = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]";
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]";
var hasToStringTag$1 = typeof Symbol === "function" && !!Symbol.toStringTag;
var isIE68 = !(0 in [,]);
var isDDA = function isDocumentDotAll() {
  return false;
};
if (typeof document === "object") {
  var all = document.all;
  if (toStr$2.call(all) === toStr$2.call(document.all)) {
    isDDA = function isDocumentDotAll2(value) {
      if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
        try {
          var str = toStr$2.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
        } catch (e) {
        }
      }
      return false;
    };
  }
}
var isCallable$1 = reflectApply ? function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable2(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (hasToStringTag$1) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr$2.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
};
var isCallable3 = isCallable$1;
var toStr$1 = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray2(array, iterator, receiver) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (hasOwnProperty.call(array, i)) {
      if (receiver == null) {
        iterator(array[i], i, array);
      } else {
        iterator.call(receiver, array[i], i, array);
      }
    }
  }
};
var forEachString = function forEachString2(string, iterator, receiver) {
  for (var i = 0, len = string.length; i < len; i++) {
    if (receiver == null) {
      iterator(string.charAt(i), i, string);
    } else {
      iterator.call(receiver, string.charAt(i), i, string);
    }
  }
};
var forEachObject = function forEachObject2(object, iterator, receiver) {
  for (var k in object) {
    if (hasOwnProperty.call(object, k)) {
      if (receiver == null) {
        iterator(object[k], k, object);
      } else {
        iterator.call(receiver, object[k], k, object);
      }
    }
  }
};
var forEach$1 = function forEach(list, iterator, thisArg) {
  if (!isCallable3(iterator)) {
    throw new TypeError("iterator must be a function");
  }
  var receiver;
  if (arguments.length >= 3) {
    receiver = thisArg;
  }
  if (toStr$1.call(list) === "[object Array]") {
    forEachArray(list, iterator, receiver);
  } else if (typeof list === "string") {
    forEachString(list, iterator, receiver);
  } else {
    forEachObject(list, iterator, receiver);
  }
};
var forEach_1 = forEach$1;
var possibleTypedArrayNames = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
];
var possibleNames = possibleTypedArrayNames;
var g$1 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var availableTypedArrays$1 = function availableTypedArrays() {
  var out = [];
  for (var i = 0; i < possibleNames.length; i++) {
    if (typeof g$1[possibleNames[i]] === "function") {
      out[out.length] = possibleNames[i];
    }
  }
  return out;
};
var forEach2 = forEach_1;
var availableTypedArrays2 = availableTypedArrays$1;
var callBind = callBindExports;
var callBound$1 = callBound$3;
var gOPD = gopd;
var $toString = callBound$1("Object.prototype.toString");
var hasToStringTag = shams();
var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays = availableTypedArrays2();
var $slice = callBound$1("String.prototype.slice");
var getPrototypeOf = Object.getPrototypeOf;
var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
var cache = { __proto__: null };
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach2(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
      var proto = getPrototypeOf(arr);
      var descriptor = gOPD(proto, Symbol.toStringTag);
      if (!descriptor) {
        var superProto = getPrototypeOf(proto);
        descriptor = gOPD(superProto, Symbol.toStringTag);
      }
      cache["$" + typedArray] = callBind(descriptor.get);
    }
  });
} else {
  forEach2(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    var fn = arr.slice || arr.set;
    if (fn) {
      cache["$" + typedArray] = callBind(fn);
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays(value) {
  var found = false;
  forEach2(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    cache,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(getter, typedArray) {
      if (!found) {
        try {
          if ("$" + getter(value) === typedArray) {
            found = $slice(typedArray, 1);
          }
        } catch (e) {
        }
      }
    }
  );
  return found;
};
var trySlices = function tryAllSlices(value) {
  var found = false;
  forEach2(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    cache,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(getter, name) {
      if (!found) {
        try {
          getter(value);
          found = $slice(name, 1);
        } catch (e) {
        }
      }
    }
  );
  return found;
};
var whichTypedArray$1 = function whichTypedArray(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (!hasToStringTag) {
    var tag = $slice($toString(value), 8, -1);
    if ($indexOf(typedArrays, tag) > -1) {
      return tag;
    }
    if (tag !== "Object") {
      return false;
    }
    return trySlices(value);
  }
  if (!gOPD) {
    return null;
  }
  return tryTypedArrays(value);
};
var whichTypedArray2 = whichTypedArray$1;
var isTypedArray = function isTypedArray2(value) {
  return !!whichTypedArray2(value);
};
(function(exports) {
  var isArgumentsObject = isArguments$1;
  var isGeneratorFunction$1 = isGeneratorFunction;
  var whichTypedArray3 = whichTypedArray$1;
  var isTypedArray$1 = isTypedArray;
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var BigIntSupported = typeof BigInt !== "undefined";
  var SymbolSupported = typeof Symbol !== "undefined";
  var ObjectToString = uncurryThis(Object.prototype.toString);
  var numberValue = uncurryThis(Number.prototype.valueOf);
  var stringValue = uncurryThis(String.prototype.valueOf);
  var booleanValue = uncurryThis(Boolean.prototype.valueOf);
  if (BigIntSupported) {
    var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
  }
  if (SymbolSupported) {
    var symbolValue = uncurryThis(Symbol.prototype.valueOf);
  }
  function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") {
      return false;
    }
    try {
      prototypeValueOf(value);
      return true;
    } catch (e) {
      return false;
    }
  }
  exports.isArgumentsObject = isArgumentsObject;
  exports.isGeneratorFunction = isGeneratorFunction$1;
  exports.isTypedArray = isTypedArray$1;
  function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
  }
  exports.isPromise = isPromise;
  function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(value);
    }
    return isTypedArray$1(value) || isDataView(value);
  }
  exports.isArrayBufferView = isArrayBufferView;
  function isUint8Array(value) {
    return whichTypedArray3(value) === "Uint8Array";
  }
  exports.isUint8Array = isUint8Array;
  function isUint8ClampedArray(value) {
    return whichTypedArray3(value) === "Uint8ClampedArray";
  }
  exports.isUint8ClampedArray = isUint8ClampedArray;
  function isUint16Array(value) {
    return whichTypedArray3(value) === "Uint16Array";
  }
  exports.isUint16Array = isUint16Array;
  function isUint32Array(value) {
    return whichTypedArray3(value) === "Uint32Array";
  }
  exports.isUint32Array = isUint32Array;
  function isInt8Array(value) {
    return whichTypedArray3(value) === "Int8Array";
  }
  exports.isInt8Array = isInt8Array;
  function isInt16Array(value) {
    return whichTypedArray3(value) === "Int16Array";
  }
  exports.isInt16Array = isInt16Array;
  function isInt32Array(value) {
    return whichTypedArray3(value) === "Int32Array";
  }
  exports.isInt32Array = isInt32Array;
  function isFloat32Array(value) {
    return whichTypedArray3(value) === "Float32Array";
  }
  exports.isFloat32Array = isFloat32Array;
  function isFloat64Array(value) {
    return whichTypedArray3(value) === "Float64Array";
  }
  exports.isFloat64Array = isFloat64Array;
  function isBigInt64Array(value) {
    return whichTypedArray3(value) === "BigInt64Array";
  }
  exports.isBigInt64Array = isBigInt64Array;
  function isBigUint64Array(value) {
    return whichTypedArray3(value) === "BigUint64Array";
  }
  exports.isBigUint64Array = isBigUint64Array;
  function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
  }
  isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
  function isMap(value) {
    if (typeof Map === "undefined") {
      return false;
    }
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
  }
  exports.isMap = isMap;
  function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
  }
  isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
  function isSet(value) {
    if (typeof Set === "undefined") {
      return false;
    }
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
  }
  exports.isSet = isSet;
  function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
  }
  isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
  function isWeakMap(value) {
    if (typeof WeakMap === "undefined") {
      return false;
    }
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
  }
  exports.isWeakMap = isWeakMap;
  function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
  }
  isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
  function isWeakSet(value) {
    return isWeakSetToString(value);
  }
  exports.isWeakSet = isWeakSet;
  function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
  }
  isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
  function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    }
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
  }
  exports.isArrayBuffer = isArrayBuffer;
  function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
  }
  isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
  function isDataView(value) {
    if (typeof DataView === "undefined") {
      return false;
    }
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
  }
  exports.isDataView = isDataView;
  var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
  function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
  }
  function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") {
      return false;
    }
    if (typeof isSharedArrayBufferToString.working === "undefined") {
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    }
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
  }
  exports.isSharedArrayBuffer = isSharedArrayBuffer;
  function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
  }
  exports.isAsyncFunction = isAsyncFunction;
  function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
  }
  exports.isMapIterator = isMapIterator;
  function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
  }
  exports.isSetIterator = isSetIterator;
  function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
  }
  exports.isGeneratorObject = isGeneratorObject;
  function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
  }
  exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
  function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
  }
  exports.isNumberObject = isNumberObject;
  function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
  }
  exports.isStringObject = isStringObject;
  function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
  }
  exports.isBooleanObject = isBooleanObject;
  function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
  }
  exports.isBigIntObject = isBigIntObject;
  function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
  }
  exports.isSymbolObject = isSymbolObject;
  function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
  }
  exports.isBoxedPrimitive = isBoxedPrimitive;
  function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
  }
  exports.isAnyArrayBuffer = isAnyArrayBuffer;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
    Object.defineProperty(exports, method, {
      enumerable: false,
      value: function() {
        throw new Error(method + " is not supported in userland");
      }
    });
  });
})(types$1);
var isBufferBrowser = function isBuffer(arg) {
  return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};
(function(exports) {
  var define_process_env_default = {};
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
    var keys2 = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys2.length; i++) {
      descriptors[keys2[i]] = Object.getOwnPropertyDescriptor(obj, keys2[i]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x2) {
      if (x2 === "%%") return "%";
      if (i >= len) return x2;
      switch (x2) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_2) {
            return "[Circular]";
          }
        default:
          return x2;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += " " + x;
      } else {
        str += " " + inspect(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn, msg) {
    if (typeof process$1 !== "undefined" && process$1.noDeprecation === true) {
      return fn;
    }
    if (typeof process$1 === "undefined") {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process$1.throwDeprecation) {
          throw new Error(msg);
        } else if (process$1.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnvRegex = /^$/;
  if (define_process_env_default.NODE_DEBUG) {
    var debugEnv = define_process_env_default.NODE_DEBUG;
    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
    debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
  }
  exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (debugEnvRegex.test(set)) {
        var pid = process$1.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else {
        debugs[set] = function() {
        };
      }
    }
    return debugs[set];
  };
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect;
  inspect.colors = {
    "bold": [1, 22],
    "italic": [3, 23],
    "underline": [4, 24],
    "inverse": [7, 27],
    "white": [37, 39],
    "grey": [90, 39],
    "black": [30, 39],
    "blue": [34, 39],
    "cyan": [36, 39],
    "green": [32, 39],
    "magenta": [35, 39],
    "red": [31, 39],
    "yellow": [33, 39]
  };
  inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
      return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys2 = Object.keys(value);
    var visibleKeys = arrayToHash(keys2);
    if (ctx.showHidden) {
      keys2 = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys2.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = "", array = false, braces = ["{", "}"];
    if (isArray(value)) {
      array = true;
      braces = ["[", "]"];
    }
    if (isFunction(value)) {
      var n = value.name ? ": " + value.name : "";
      base = " [Function" + n + "]";
    }
    if (isRegExp(value)) {
      base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = " " + formatError(value);
    }
    if (keys2.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
    } else {
      output = keys2.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
      var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty2(value, String(i))) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          String(i),
          true
        ));
      } else {
        output.push("");
      }
    }
    keys2.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          key,
          true
        ));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty2(visibleKeys, key)) {
      name = "[" + key + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array) {
            str = str.split("\n").map(function(line) {
              return "  " + line;
            }).join("\n").slice(2);
          } else {
            str = "\n" + str.split("\n").map(function(line) {
              return "   " + line;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify("" + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.slice(1, -1);
        name = ctx.stylize(name, "name");
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, "string");
      }
    }
    return name + ": " + str;
  }
  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf("\n") >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
  }
  exports.types = types$1;
  function isArray(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray;
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  exports.isBoolean = isBoolean;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber(arg) {
    return typeof arg === "number";
  }
  exports.isNumber = isNumber;
  function isString(arg) {
    return typeof arg === "string";
  }
  exports.isString = isString;
  function isSymbol(arg) {
    return typeof arg === "symbol";
  }
  exports.isSymbol = isSymbol;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
  }
  exports.isRegExp = isRegExp;
  exports.types.isRegExp = isRegExp;
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  exports.isObject = isObject;
  function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
  }
  exports.isDate = isDate;
  exports.types.isDate = isDate;
  function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
  }
  exports.isError = isError;
  exports.types.isNativeError = isError;
  function isFunction(arg) {
    return typeof arg === "function";
  }
  exports.isFunction = isFunction;
  function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
  }
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = isBufferBrowser;
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
  }
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function timestamp() {
    var d = /* @__PURE__ */ new Date();
    var time = [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    return [d.getDate(), months[d.getMonth()], time].join(" ");
  }
  exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
  };
  exports.inherits = inherits_browserExports;
  exports._extend = function(origin, add) {
    if (!add || !isObject(add)) return origin;
    var keys2 = Object.keys(add);
    var i = keys2.length;
    while (i--) {
      origin[keys2[i]] = add[keys2[i]];
    }
    return origin;
  };
  function hasOwnProperty2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
  exports.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn = original[kCustomPromisifiedSymbol];
      if (typeof fn !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn;
    }
    function fn() {
      var promiseResolve, promiseReject;
      var promise = new Promise(function(resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return Object.defineProperties(
      fn,
      getOwnPropertyDescriptors(original)
    );
  };
  exports.promisify.custom = kCustomPromisifiedSymbol;
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self = this;
      var cb = function() {
        return maybeCb.apply(self, arguments);
      };
      original.apply(this, args).then(
        function(ret) {
          process$1.nextTick(cb.bind(null, null, ret));
        },
        function(rej) {
          process$1.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        }
      );
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(
      callbackified,
      getOwnPropertyDescriptors(original)
    );
    return callbackified;
  }
  exports.callbackify = callbackify;
})(util);
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors;
  hasRequiredErrors = 1;
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function _createClass(Constructor, protoProps, staticProps) {
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var codes = {};
  var assert2;
  var util$1;
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    var NodeError = /* @__PURE__ */ function(_Base) {
      _inherits(NodeError2, _Base);
      var _super = _createSuper(NodeError2);
      function NodeError2(arg1, arg2, arg3) {
        var _this;
        _classCallCheck(this, NodeError2);
        _this = _super.call(this, getMessage(arg1, arg2, arg3));
        _this.code = code;
        return _this;
      }
      return _createClass(NodeError2);
    }(Base);
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function(i) {
        return String(i);
      });
      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(0, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert2 === void 0) assert2 = requireAssert();
    assert2(typeof name === "string", "'name' must be a string");
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    var msg;
    if (endsWith(name, " argument")) {
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } else {
      var type = includes(name, ".") ? "property" : "argument";
      msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    if (util$1 === void 0) util$1 = util;
    var inspected = util$1.inspect(value);
    if (inspected.length > 128) {
      inspected = "".concat(inspected.slice(0, 128), "...");
    }
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
  }, TypeError);
  createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) {
      type = "instance of ".concat(value.constructor.name);
    } else {
      type = "type ".concat(_typeof(value));
    }
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
  }, TypeError);
  createErrorType("ERR_MISSING_ARGS", function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (assert2 === void 0) assert2 = requireAssert();
    assert2(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
      return '"'.concat(a, '"');
    });
    switch (len) {
      case 1:
        msg += "".concat(args[0], " argument");
        break;
      case 2:
        msg += "".concat(args[0], " and ").concat(args[1], " arguments");
        break;
      default:
        msg += args.slice(0, len - 1).join(", ");
        msg += ", and ".concat(args[len - 1], " arguments");
        break;
    }
    return "".concat(msg, " must be specified");
  }, TypeError);
  errors.codes = codes;
  return errors;
}
var assertion_error;
var hasRequiredAssertion_error;
function requireAssertion_error() {
  if (hasRequiredAssertion_error) return assertion_error;
  hasRequiredAssertion_error = 1;
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2) _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  var _require = util, inspect = _require.inspect;
  var _require2 = requireErrors(), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
  var blue = "";
  var green = "";
  var red = "";
  var white = "";
  var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  };
  var kMaxShortLength = 10;
  function copyError(source) {
    var keys2 = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys2.forEach(function(key) {
      target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
      value: source.message
    });
    return target;
  }
  function inspectValue(val) {
    return inspect(val, {
      compact: false,
      customInspect: false,
      depth: 1e3,
      maxArrayLength: Infinity,
      // Assert compares only enumerable properties (with a few exceptions).
      showHidden: false,
      // Having a long line as error is better than wrapping the line for
      // comparison for now.
      // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
      // have meta information about the inspected properties (i.e., know where
      // in what line the property starts and ends).
      breakLength: Infinity,
      // Assert does not detect proxies currently.
      showProxy: false,
      sorted: true,
      // Inspect getters as we also check them when comparing entries.
      getters: true
    });
  }
  function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = "";
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) {
      operator = "strictEqualObject";
    }
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
      var inputLength = actualLines[0].length + expectedLines[0].length;
      if (inputLength <= kMaxShortLength) {
        if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
          return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        }
      } else if (operator !== "strictEqualObject") {
        var maxLength = process$1.stderr && process$1.stderr.isTTY ? process$1.stderr.columns : 80;
        if (inputLength < maxLength) {
          while (actualLines[0][i] === expectedLines[0][i]) {
            i++;
          }
          if (i > 2) {
            indicator = "\n  ".concat(repeat(" ", i), "^");
            i = 0;
          }
        }
      }
    }
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while (a === b) {
      if (i++ < 2) {
        end = "\n  ".concat(a).concat(end);
      } else {
        other = a;
      }
      actualLines.pop();
      expectedLines.pop();
      if (actualLines.length === 0 || expectedLines.length === 0) break;
      a = actualLines[actualLines.length - 1];
      b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length);
    if (maxLines === 0) {
      var _actualLines = actualInspected.split("\n");
      if (_actualLines.length > 30) {
        _actualLines[26] = "".concat(blue, "...").concat(white);
        while (_actualLines.length > 27) {
          _actualLines.pop();
        }
      }
      return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
      end = "\n".concat(blue, "...").concat(white).concat(end);
      skipped = true;
    }
    if (other !== "") {
      end = "\n  ".concat(other).concat(end);
      other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for (i = 0; i < maxLines; i++) {
      var cur = i - lastPos;
      if (actualLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(expectedLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(expectedLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
        printedLines++;
      } else if (expectedLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(actualLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(actualLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
        printedLines++;
      } else {
        var expectedLine = expectedLines[i];
        var actualLine = actualLines[i];
        var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
        if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
          divergingLines = false;
          actualLine += ",";
        }
        if (divergingLines) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(actualLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(actualLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
          other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
          printedLines += 2;
        } else {
          res += other;
          other = "";
          if (cur === 1 || i === 0) {
            res += "\n  ".concat(actualLine);
            printedLines++;
          }
        }
      }
      if (printedLines > 20 && i < maxLines - 2) {
        return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
      }
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
  }
  var AssertionError = /* @__PURE__ */ function(_Error, _inspect$custom) {
    _inherits(AssertionError2, _Error);
    var _super = _createSuper(AssertionError2);
    function AssertionError2(options) {
      var _this;
      _classCallCheck(this, AssertionError2);
      if (_typeof(options) !== "object" || options === null) {
        throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
      }
      var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
      var actual = options.actual, expected = options.expected;
      var limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      if (message != null) {
        _this = _super.call(this, String(message));
      } else {
        if (process$1.stderr && process$1.stderr.isTTY) {
          if (process$1.stderr && process$1.stderr.getColorDepth && process$1.stderr.getColorDepth() !== 1) {
            blue = "\x1B[34m";
            green = "\x1B[32m";
            white = "\x1B[39m";
            red = "\x1B[31m";
          } else {
            blue = "";
            green = "";
            white = "";
            red = "";
          }
        }
        if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
          actual = copyError(actual);
          expected = copyError(expected);
        }
        if (operator === "deepStrictEqual" || operator === "strictEqual") {
          _this = _super.call(this, createErrDiff(actual, expected, operator));
        } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
          var base = kReadableOperator[operator];
          var res = inspectValue(actual).split("\n");
          if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) {
            base = kReadableOperator.notStrictEqualObject;
          }
          if (res.length > 30) {
            res[26] = "".concat(blue, "...").concat(white);
            while (res.length > 27) {
              res.pop();
            }
          }
          if (res.length === 1) {
            _this = _super.call(this, "".concat(base, " ").concat(res[0]));
          } else {
            _this = _super.call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n"));
          }
        } else {
          var _res = inspectValue(actual);
          var other = "";
          var knownOperators = kReadableOperator[operator];
          if (operator === "notDeepEqual" || operator === "notEqual") {
            _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
            if (_res.length > 1024) {
              _res = "".concat(_res.slice(0, 1021), "...");
            }
          } else {
            other = "".concat(inspectValue(expected));
            if (_res.length > 512) {
              _res = "".concat(_res.slice(0, 509), "...");
            }
            if (other.length > 512) {
              other = "".concat(other.slice(0, 509), "...");
            }
            if (operator === "deepEqual" || operator === "equal") {
              _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
            } else {
              other = " ".concat(operator, " ").concat(other);
            }
          }
          _this = _super.call(this, "".concat(_res).concat(other));
        }
      }
      Error.stackTraceLimit = limit;
      _this.generatedMessage = !message;
      Object.defineProperty(_assertThisInitialized(_this), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: false,
        writable: true,
        configurable: true
      });
      _this.code = "ERR_ASSERTION";
      _this.actual = actual;
      _this.expected = expected;
      _this.operator = operator;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
      }
      _this.stack;
      _this.name = "AssertionError";
      return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError2, [{
      key: "toString",
      value: function toString() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: _inspect$custom,
      value: function value(recurseTimes, ctx) {
        return inspect(this, _objectSpread(_objectSpread({}, ctx), {}, {
          customInspect: false,
          depth: 0
        }));
      }
    }]);
    return AssertionError2;
  }(/* @__PURE__ */ _wrapNativeSuper(Error), inspect.custom);
  assertion_error = AssertionError;
  return assertion_error;
}
var toStr = Object.prototype.toString;
var isArguments3 = function isArguments4(value) {
  var str = toStr.call(value);
  var isArgs2 = str === "[object Arguments]";
  if (!isArgs2) {
    isArgs2 = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
  }
  return isArgs2;
};
var implementation$5;
var hasRequiredImplementation$1;
function requireImplementation$1() {
  if (hasRequiredImplementation$1) return implementation$5;
  hasRequiredImplementation$1 = 1;
  var keysShim2;
  if (!Object.keys) {
    var has = Object.prototype.hasOwnProperty;
    var toStr2 = Object.prototype.toString;
    var isArgs2 = isArguments3;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, "prototype");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
      var ctor = o.constructor;
      return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    var hasAutomationEqualityBug = function() {
      if (typeof window === "undefined") {
        return false;
      }
      for (var k in window) {
        try {
          if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
            try {
              equalsConstructorPrototype(window[k]);
            } catch (e) {
              return true;
            }
          }
        } catch (e) {
          return true;
        }
      }
      return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
      }
      try {
        return equalsConstructorPrototype(o);
      } catch (e) {
        return false;
      }
    };
    keysShim2 = function keys2(object) {
      var isObject = object !== null && typeof object === "object";
      var isFunction = toStr2.call(object) === "[object Function]";
      var isArguments5 = isArgs2(object);
      var isString = isObject && toStr2.call(object) === "[object String]";
      var theKeys = [];
      if (!isObject && !isFunction && !isArguments5) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var skipProto = hasProtoEnumBug && isFunction;
      if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0; i < object.length; ++i) {
          theKeys.push(String(i));
        }
      }
      if (isArguments5 && object.length > 0) {
        for (var j = 0; j < object.length; ++j) {
          theKeys.push(String(j));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === "prototype") && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k = 0; k < dontEnums.length; ++k) {
          if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
            theKeys.push(dontEnums[k]);
          }
        }
      }
      return theKeys;
    };
  }
  implementation$5 = keysShim2;
  return implementation$5;
}
var slice = Array.prototype.slice;
var isArgs = isArguments3;
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
  return origKeys(o);
} : requireImplementation$1();
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function() {
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);
    if (!keysWorksWithArguments) {
      Object.keys = function keys2(object) {
        if (isArgs(object)) {
          return originalKeys(slice.call(object));
        }
        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }
  return Object.keys || keysShim;
};
var objectKeys$1 = keysShim;
var objectKeys = objectKeys$1;
var hasSymbols = shams$1();
var callBound = callBound$3;
var toObject = Object;
var $push = callBound("Array.prototype.push");
var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
var implementation$4 = function assign(target, source1) {
  if (target == null) {
    throw new TypeError("target must be an object");
  }
  var to = toObject(target);
  if (arguments.length === 1) {
    return to;
  }
  for (var s = 1; s < arguments.length; ++s) {
    var from = toObject(arguments[s]);
    var keys2 = objectKeys(from);
    var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
    if (getSymbols) {
      var syms = getSymbols(from);
      for (var j = 0; j < syms.length; ++j) {
        var key = syms[j];
        if ($propIsEnumerable(from, key)) {
          $push(keys2, key);
        }
      }
    }
    for (var i = 0; i < keys2.length; ++i) {
      var nextKey = keys2[i];
      if ($propIsEnumerable(from, nextKey)) {
        var propValue = from[nextKey];
        to[nextKey] = propValue;
      }
    }
  }
  return to;
};
var implementation$3 = implementation$4;
var lacksProperEnumerationOrder = function() {
  if (!Object.assign) {
    return false;
  }
  var str = "abcdefghijklmnopqrst";
  var letters = str.split("");
  var map = {};
  for (var i = 0; i < letters.length; ++i) {
    map[letters[i]] = letters[i];
  }
  var obj = Object.assign({}, map);
  var actual = "";
  for (var k in obj) {
    actual += k;
  }
  return str !== actual;
};
var assignHasPendingExceptions = function() {
  if (!Object.assign || !Object.preventExtensions) {
    return false;
  }
  var thrower = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(thrower, "xy");
  } catch (e) {
    return thrower[1] === "y";
  }
  return false;
};
var polyfill$2 = function getPolyfill() {
  if (!Object.assign) {
    return implementation$3;
  }
  if (lacksProperEnumerationOrder()) {
    return implementation$3;
  }
  if (assignHasPendingExceptions()) {
    return implementation$3;
  }
  return Object.assign;
};
var numberIsNaN = function(value) {
  return value !== value;
};
var implementation$2 = function is(a, b) {
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  if (a === b) {
    return true;
  }
  if (numberIsNaN(a) && numberIsNaN(b)) {
    return true;
  }
  return false;
};
var implementation$1 = implementation$2;
var polyfill$1 = function getPolyfill2() {
  return typeof Object.is === "function" ? Object.is : implementation$1;
};
var defineProperties_1;
var hasRequiredDefineProperties;
function requireDefineProperties() {
  if (hasRequiredDefineProperties) return defineProperties_1;
  hasRequiredDefineProperties = 1;
  var keys2 = objectKeys$1;
  var hasSymbols2 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
  var toStr2 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var defineDataProperty$1 = defineDataProperty;
  var isFunction = function(fn) {
    return typeof fn === "function" && toStr2.call(fn) === "[object Function]";
  };
  var supportsDescriptors = hasPropertyDescriptors_1();
  var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
      if (predicate === true) {
        if (object[name] === value) {
          return;
        }
      } else if (!isFunction(predicate) || !predicate()) {
        return;
      }
    }
    if (supportsDescriptors) {
      defineDataProperty$1(object, name, value, true);
    } else {
      defineDataProperty$1(object, name, value);
    }
  };
  var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys2(map);
    if (hasSymbols2) {
      props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for (var i = 0; i < props.length; i += 1) {
      defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
  };
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  defineProperties_1 = defineProperties;
  return defineProperties_1;
}
var shim$1;
var hasRequiredShim$1;
function requireShim$1() {
  if (hasRequiredShim$1) return shim$1;
  hasRequiredShim$1 = 1;
  var getPolyfill3 = polyfill$1;
  var define = requireDefineProperties();
  shim$1 = function shimObjectIs() {
    var polyfill2 = getPolyfill3();
    define(Object, { is: polyfill2 }, {
      is: function testObjectIs() {
        return Object.is !== polyfill2;
      }
    });
    return polyfill2;
  };
  return shim$1;
}
var objectIs;
var hasRequiredObjectIs;
function requireObjectIs() {
  if (hasRequiredObjectIs) return objectIs;
  hasRequiredObjectIs = 1;
  var define = requireDefineProperties();
  var callBind2 = callBindExports;
  var implementation2 = implementation$2;
  var getPolyfill3 = polyfill$1;
  var shim2 = requireShim$1();
  var polyfill2 = callBind2(getPolyfill3(), Object);
  define(polyfill2, {
    getPolyfill: getPolyfill3,
    implementation: implementation2,
    shim: shim2
  });
  objectIs = polyfill2;
  return objectIs;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  implementation = function isNaN2(value) {
    return value !== value;
  };
  return implementation;
}
var polyfill;
var hasRequiredPolyfill;
function requirePolyfill() {
  if (hasRequiredPolyfill) return polyfill;
  hasRequiredPolyfill = 1;
  var implementation2 = requireImplementation();
  polyfill = function getPolyfill3() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
      return Number.isNaN;
    }
    return implementation2;
  };
  return polyfill;
}
var shim;
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim) return shim;
  hasRequiredShim = 1;
  var define = requireDefineProperties();
  var getPolyfill3 = requirePolyfill();
  shim = function shimNumberIsNaN() {
    var polyfill2 = getPolyfill3();
    define(Number, { isNaN: polyfill2 }, {
      isNaN: function testIsNaN() {
        return Number.isNaN !== polyfill2;
      }
    });
    return polyfill2;
  };
  return shim;
}
var isNan;
var hasRequiredIsNan;
function requireIsNan() {
  if (hasRequiredIsNan) return isNan;
  hasRequiredIsNan = 1;
  var callBind2 = callBindExports;
  var define = requireDefineProperties();
  var implementation2 = requireImplementation();
  var getPolyfill3 = requirePolyfill();
  var shim2 = requireShim();
  var polyfill2 = callBind2(getPolyfill3(), Number);
  define(polyfill2, {
    getPolyfill: getPolyfill3,
    implementation: implementation2,
    shim: shim2
  });
  isNan = polyfill2;
  return isNan;
}
var comparisons;
var hasRequiredComparisons;
function requireComparisons() {
  if (hasRequiredComparisons) return comparisons;
  hasRequiredComparisons = 1;
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ;
        else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  var regexFlagsSupported = /a/g.flags !== void 0;
  var arrayFromSet = function arrayFromSet2(set) {
    var array = [];
    set.forEach(function(value) {
      return array.push(value);
    });
    return array;
  };
  var arrayFromMap = function arrayFromMap2(map) {
    var array = [];
    map.forEach(function(value, key) {
      return array.push([key, value]);
    });
    return array;
  };
  var objectIs2 = Object.is ? Object.is : requireObjectIs();
  var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  };
  var numberIsNaN2 = Number.isNaN ? Number.isNaN : requireIsNan();
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var hasOwnProperty2 = uncurryThis(Object.prototype.hasOwnProperty);
  var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
  var objectToString = uncurryThis(Object.prototype.toString);
  var _require$types = util.types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
  function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for (var i = 0; i < key.length; i++) {
      var code = key.charCodeAt(i);
      if (code < 48 || code > 57) return true;
    }
    return key.length === 10 && key >= Math.pow(2, 32);
  }
  function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  function compare(a, b) {
    if (a === b) {
      return 0;
    }
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  }
  var kStrict = true;
  var kLoose = false;
  var kNoIterator = 0;
  var kIsArray = 1;
  var kIsSet = 2;
  var kIsMap = 3;
  function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
  }
  function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (var offset = 0; offset < a.byteLength; offset++) {
      if (a[offset] !== b[offset]) {
        return false;
      }
    }
    return true;
  }
  function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
  }
  function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
  }
  function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) {
      return isNumberObject(val2) && objectIs2(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    }
    if (isStringObject(val1)) {
      return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    }
    if (isBooleanObject(val1)) {
      return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    }
    if (isBigIntObject(val1)) {
      return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    }
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
  }
  function innerDeepEqual(val1, val2, strict, memos) {
    if (val1 === val2) {
      if (val1 !== 0) return true;
      return strict ? objectIs2(val1, val2) : true;
    }
    if (strict) {
      if (_typeof(val1) !== "object") {
        return typeof val1 === "number" && numberIsNaN2(val1) && numberIsNaN2(val2);
      }
      if (_typeof(val2) !== "object" || val1 === null || val2 === null) {
        return false;
      }
      if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
        return false;
      }
    } else {
      if (val1 === null || _typeof(val1) !== "object") {
        if (val2 === null || _typeof(val2) !== "object") {
          return val1 == val2;
        }
        return false;
      }
      if (val2 === null || _typeof(val2) !== "object") {
        return false;
      }
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) {
      return false;
    }
    if (Array.isArray(val1)) {
      if (val1.length !== val2.length) {
        return false;
      }
      var keys1 = getOwnNonIndexProperties(val1);
      var keys2 = getOwnNonIndexProperties(val2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    }
    if (val1Tag === "[object Object]") {
      if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
        return false;
      }
    }
    if (isDate(val1)) {
      if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
        return false;
      }
    } else if (isRegExp(val1)) {
      if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
        return false;
      }
    } else if (isNativeError(val1) || val1 instanceof Error) {
      if (val1.message !== val2.message || val1.name !== val2.name) {
        return false;
      }
    } else if (isArrayBufferView(val1)) {
      if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
        if (!areSimilarFloatArrays(val1, val2)) {
          return false;
        }
      } else if (!areSimilarTypedArrays(val1, val2)) {
        return false;
      }
      var _keys = getOwnNonIndexProperties(val1);
      var _keys2 = getOwnNonIndexProperties(val2);
      if (_keys.length !== _keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
      if (!isSet(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
      if (!isMap(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
      if (!areEqualArrayBuffers(val1, val2)) {
        return false;
      }
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kNoIterator);
  }
  function getEnumerables(val, keys2) {
    return keys2.filter(function(k) {
      return propertyIsEnumerable(val, k);
    });
  }
  function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    if (arguments.length === 5) {
      aKeys = Object.keys(val1);
      var bKeys = Object.keys(val2);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
    }
    var i = 0;
    for (; i < aKeys.length; i++) {
      if (!hasOwnProperty2(val2, aKeys[i])) {
        return false;
      }
    }
    if (strict && arguments.length === 5) {
      var symbolKeysA = objectGetOwnPropertySymbols(val1);
      if (symbolKeysA.length !== 0) {
        var count = 0;
        for (i = 0; i < symbolKeysA.length; i++) {
          var key = symbolKeysA[i];
          if (propertyIsEnumerable(val1, key)) {
            if (!propertyIsEnumerable(val2, key)) {
              return false;
            }
            aKeys.push(key);
            count++;
          } else if (propertyIsEnumerable(val2, key)) {
            return false;
          }
        }
        var symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
          return false;
        }
      } else {
        var _symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
          return false;
        }
      }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
      return true;
    }
    if (memos === void 0) {
      memos = {
        val1: /* @__PURE__ */ new Map(),
        val2: /* @__PURE__ */ new Map(),
        position: 0
      };
    } else {
      var val2MemoA = memos.val1.get(val1);
      if (val2MemoA !== void 0) {
        var val2MemoB = memos.val2.get(val2);
        if (val2MemoB !== void 0) {
          return val2MemoA === val2MemoB;
        }
      }
      memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
  }
  function setHasEqualElement(set, val1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0; i < setValues.length; i++) {
      var val2 = setValues[i];
      if (innerDeepEqual(val1, val2, strict, memo)) {
        set.delete(val2);
        return true;
      }
    }
    return false;
  }
  function findLooseMatchingPrimitives(prim) {
    switch (_typeof(prim)) {
      case "undefined":
        return null;
      case "object":
        return void 0;
      case "symbol":
        return false;
      case "string":
        prim = +prim;
      case "number":
        if (numberIsNaN2(prim)) {
          return false;
        }
    }
    return true;
  }
  function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
  }
  function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    var curB = b.get(altValue);
    if (curB === void 0 && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
      return false;
    }
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
  }
  function setEquiv(a, b, strict, memo) {
    var set = null;
    var aValues = arrayFromSet(a);
    for (var i = 0; i < aValues.length; i++) {
      var val = aValues[i];
      if (_typeof(val) === "object" && val !== null) {
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(val);
      } else if (!b.has(val)) {
        if (strict) return false;
        if (!setMightHaveLoosePrim(a, b, val)) {
          return false;
        }
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(val);
      }
    }
    if (set !== null) {
      var bValues = arrayFromSet(b);
      for (var _i = 0; _i < bValues.length; _i++) {
        var _val = bValues[_i];
        if (_typeof(_val) === "object" && _val !== null) {
          if (!setHasEqualElement(set, _val, strict, memo)) return false;
        } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0; i < setValues.length; i++) {
      var key2 = setValues[i];
      if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
        set.delete(key2);
        return true;
      }
    }
    return false;
  }
  function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for (var i = 0; i < aEntries.length; i++) {
      var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
      if (_typeof(key) === "object" && key !== null) {
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(key);
      } else {
        var item2 = b.get(key);
        if (item2 === void 0 && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
          if (strict) return false;
          if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(key);
        }
      }
    }
    if (set !== null) {
      var bEntries = arrayFromMap(b);
      for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
        var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), _key = _bEntries$_i[0], item = _bEntries$_i[1];
        if (_typeof(_key) === "object" && _key !== null) {
          if (!mapHasEqualEntry(set, a, _key, item, strict, memo)) return false;
        } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function objEquiv(a, b, strict, keys2, memos, iterationType) {
    var i = 0;
    if (iterationType === kIsSet) {
      if (!setEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsMap) {
      if (!mapEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsArray) {
      for (; i < a.length; i++) {
        if (hasOwnProperty2(a, i)) {
          if (!hasOwnProperty2(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
            return false;
          }
        } else if (hasOwnProperty2(b, i)) {
          return false;
        } else {
          var keysA = Object.keys(a);
          for (; i < keysA.length; i++) {
            var key = keysA[i];
            if (!hasOwnProperty2(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
              return false;
            }
          }
          if (keysA.length !== Object.keys(b).length) {
            return false;
          }
          return true;
        }
      }
    }
    for (i = 0; i < keys2.length; i++) {
      var _key2 = keys2[i];
      if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) {
        return false;
      }
    }
    return true;
  }
  function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
  }
  function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
  }
  comparisons = {
    isDeepEqual,
    isDeepStrictEqual
  };
  return comparisons;
}
var hasRequiredAssert;
function requireAssert() {
  if (hasRequiredAssert) return assert$1.exports;
  hasRequiredAssert = 1;
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function _createClass(Constructor, protoProps, staticProps) {
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = requireErrors(), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
  var AssertionError = requireAssertion_error();
  var _require2 = util, inspect = _require2.inspect;
  var _require$types = util.types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
  var objectAssign = polyfill$2();
  var objectIs2 = polyfill$1();
  var RegExpPrototypeTest = callBound$3("RegExp.prototype.test");
  var isDeepEqual;
  var isDeepStrictEqual;
  function lazyLoadComparison() {
    var comparison = requireComparisons();
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
  }
  var warned = false;
  var assert2 = assert$1.exports = ok;
  var NO_EXCEPTION_SENTINEL = {};
  function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
  }
  function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) {
      internalMessage = "Failed";
    } else if (argsLen === 1) {
      message = actual;
      actual = void 0;
    } else {
      if (warned === false) {
        warned = true;
        var warn = process$1.emitWarning ? process$1.emitWarning : console.warn.bind(console);
        warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      if (argsLen === 2) operator = "!=";
    }
    if (message instanceof Error) throw message;
    var errArgs = {
      actual,
      expected,
      operator: operator === void 0 ? "fail" : operator,
      stackStartFn: stackStartFn || fail
    };
    if (message !== void 0) {
      errArgs.message = message;
    }
    var err = new AssertionError(errArgs);
    if (internalMessage) {
      err.message = internalMessage;
      err.generatedMessage = true;
    }
    throw err;
  }
  assert2.fail = fail;
  assert2.AssertionError = AssertionError;
  function innerOk(fn, argLen, value, message) {
    if (!value) {
      var generatedMessage = false;
      if (argLen === 0) {
        generatedMessage = true;
        message = "No value argument passed to `assert.ok()`";
      } else if (message instanceof Error) {
        throw message;
      }
      var err = new AssertionError({
        actual: value,
        expected: true,
        message,
        operator: "==",
        stackStartFn: fn
      });
      err.generatedMessage = generatedMessage;
      throw err;
    }
  }
  function ok() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    innerOk.apply(void 0, [ok, args.length].concat(args));
  }
  assert2.ok = ok;
  assert2.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual != expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "==",
        stackStartFn: equal
      });
    }
  };
  assert2.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual == expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "!=",
        stackStartFn: notEqual
      });
    }
  };
  assert2.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepEqual",
        stackStartFn: deepEqual
      });
    }
  };
  assert2.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
      });
    }
  };
  assert2.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
      });
    }
  };
  assert2.notDeepStrictEqual = notDeepStrictEqual;
  function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
      });
    }
  }
  assert2.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (!objectIs2(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "strictEqual",
        stackStartFn: strictEqual
      });
    }
  };
  assert2.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (objectIs2(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
      });
    }
  };
  var Comparison = /* @__PURE__ */ _createClass(function Comparison2(obj, keys2, actual) {
    var _this = this;
    _classCallCheck(this, Comparison2);
    keys2.forEach(function(key) {
      if (key in obj) {
        if (actual !== void 0 && typeof actual[key] === "string" && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) {
          _this[key] = actual[key];
        } else {
          _this[key] = obj[key];
        }
      }
    });
  });
  function compareExceptionKey(actual, expected, key, message, keys2, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
      if (!message) {
        var a = new Comparison(actual, keys2);
        var b = new Comparison(expected, keys2, actual);
        var err = new AssertionError({
          actual: a,
          expected: b,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.actual = actual;
        err.expected = expected;
        err.operator = fn.name;
        throw err;
      }
      innerFail({
        actual,
        expected,
        message,
        operator: fn.name,
        stackStartFn: fn
      });
    }
  }
  function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
      if (isRegExp(expected)) return RegExpPrototypeTest(expected, actual);
      if (arguments.length === 2) {
        throw new ERR_INVALID_ARG_TYPE("expected", ["Function", "RegExp"], expected);
      }
      if (_typeof(actual) !== "object" || actual === null) {
        var err = new AssertionError({
          actual,
          expected,
          message: msg,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.operator = fn.name;
        throw err;
      }
      var keys2 = Object.keys(expected);
      if (expected instanceof Error) {
        keys2.push("name", "message");
      } else if (keys2.length === 0) {
        throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
      }
      if (isDeepEqual === void 0) lazyLoadComparison();
      keys2.forEach(function(key) {
        if (typeof actual[key] === "string" && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) {
          return;
        }
        compareExceptionKey(actual, expected, key, msg, keys2, fn);
      });
      return true;
    }
    if (expected.prototype !== void 0 && actual instanceof expected) {
      return true;
    }
    if (Error.isPrototypeOf(expected)) {
      return false;
    }
    return expected.call({}, actual) === true;
  }
  function getActual(fn) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    }
    try {
      fn();
    } catch (e) {
      return e;
    }
    return NO_EXCEPTION_SENTINEL;
  }
  function checkIsPromise(obj) {
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
  }
  function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
      var resultPromise;
      if (typeof promiseFn === "function") {
        resultPromise = promiseFn();
        if (!checkIsPromise(resultPromise)) {
          throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        }
      } else if (checkIsPromise(promiseFn)) {
        resultPromise = promiseFn;
      } else {
        throw new ERR_INVALID_ARG_TYPE("promiseFn", ["Function", "Promise"], promiseFn);
      }
      return Promise.resolve().then(function() {
        return resultPromise;
      }).then(function() {
        return NO_EXCEPTION_SENTINEL;
      }).catch(function(e) {
        return e;
      });
    });
  }
  function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
      if (arguments.length === 4) {
        throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
      }
      if (_typeof(actual) === "object" && actual !== null) {
        if (actual.message === error) {
          throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        }
      } else if (actual === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
      }
      message = error;
      error = void 0;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") {
      throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
    }
    if (actual === NO_EXCEPTION_SENTINEL) {
      var details = "";
      if (error && error.name) {
        details += " (".concat(error.name, ")");
      }
      details += message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
      innerFail({
        actual: void 0,
        expected: error,
        operator: stackStartFn.name,
        message: "Missing expected ".concat(fnType).concat(details),
        stackStartFn
      });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) {
      throw actual;
    }
  }
  function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === "string") {
      message = error;
      error = void 0;
    }
    if (!error || expectedException(actual, error)) {
      var details = message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
      innerFail({
        actual,
        expected: error,
        operator: stackStartFn.name,
        message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
        stackStartFn
      });
    }
    throw actual;
  }
  assert2.throws = function throws(promiseFn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
  };
  assert2.rejects = function rejects(promiseFn) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return waitForActual(promiseFn).then(function(result) {
      return expectsError.apply(void 0, [rejects, result].concat(args));
    });
  };
  assert2.doesNotThrow = function doesNotThrow(fn) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
  };
  assert2.doesNotReject = function doesNotReject(fn) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    return waitForActual(fn).then(function(result) {
      return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
    });
  };
  assert2.ifError = function ifError(err) {
    if (err !== null && err !== void 0) {
      var message = "ifError got unwanted exception: ";
      if (_typeof(err) === "object" && typeof err.message === "string") {
        if (err.message.length === 0 && err.constructor) {
          message += err.constructor.name;
        } else {
          message += err.message;
        }
      } else {
        message += inspect(err);
      }
      var newErr = new AssertionError({
        actual: err,
        expected: null,
        operator: "ifError",
        message,
        stackStartFn: ifError
      });
      var origStack = err.stack;
      if (typeof origStack === "string") {
        var tmp2 = origStack.split("\n");
        tmp2.shift();
        var tmp1 = newErr.stack.split("\n");
        for (var i = 0; i < tmp2.length; i++) {
          var pos = tmp1.indexOf(tmp2[i]);
          if (pos !== -1) {
            tmp1 = tmp1.slice(0, pos);
            break;
          }
        }
        newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
      }
      throw newErr;
    }
  };
  function internalMatch(string, regexp, message, fn, fnName) {
    if (!isRegExp(regexp)) {
      throw new ERR_INVALID_ARG_TYPE("regexp", "RegExp", regexp);
    }
    var match = fnName === "match";
    if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match) {
      if (message instanceof Error) {
        throw message;
      }
      var generatedMessage = !message;
      message = message || (typeof string !== "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect(string), ")") : (match ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(inspect(regexp), ". Input:\n\n").concat(inspect(string), "\n"));
      var err = new AssertionError({
        actual: string,
        expected: regexp,
        message,
        operator: fnName,
        stackStartFn: fn
      });
      err.generatedMessage = generatedMessage;
      throw err;
    }
  }
  assert2.match = function match(string, regexp, message) {
    internalMatch(string, regexp, message, match, "match");
  };
  assert2.doesNotMatch = function doesNotMatch(string, regexp, message) {
    internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
  };
  function strict() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    innerOk.apply(void 0, [strict, args.length].concat(args));
  }
  assert2.strict = objectAssign(strict, assert2, {
    equal: assert2.strictEqual,
    deepEqual: assert2.deepStrictEqual,
    notEqual: assert2.notStrictEqual,
    notDeepEqual: assert2.notDeepStrictEqual
  });
  assert2.strict.strict = assert2.strict;
  return assert$1.exports;
}
var assertExports = requireAssert();
const assert = /* @__PURE__ */ getDefaultExportFromCjs(assertExports);
class Hooks {
  /**
   * @callback HookCallback
   * @this {*|Jsep} this
   * @param {Jsep} env
   * @returns: void
   */
  /**
   * Adds the given callback to the list of callbacks for the given hook.
   *
   * The callback will be invoked when the hook it is registered for is run.
   *
   * One callback function can be registered to multiple hooks and the same hook multiple times.
   *
   * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
   * @param {HookCallback|boolean} callback The callback function which is given environment variables.
   * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
   * @public
   */
  add(name, callback, first) {
    if (typeof arguments[0] != "string") {
      for (let name2 in arguments[0]) {
        this.add(name2, arguments[0][name2], arguments[1]);
      }
    } else {
      (Array.isArray(name) ? name : [name]).forEach(function(name2) {
        this[name2] = this[name2] || [];
        if (callback) {
          this[name2][first ? "unshift" : "push"](callback);
        }
      }, this);
    }
  }
  /**
   * Runs a hook invoking all registered callbacks with the given environment variables.
   *
   * Callbacks will be invoked synchronously and in the order in which they were registered.
   *
   * @param {string} name The name of the hook.
   * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
   * @public
   */
  run(name, env) {
    this[name] = this[name] || [];
    this[name].forEach(function(callback) {
      callback.call(env && env.context ? env.context : env, env);
    });
  }
}
class Plugins {
  constructor(jsep2) {
    this.jsep = jsep2;
    this.registered = {};
  }
  /**
   * @callback PluginSetup
   * @this {Jsep} jsep
   * @returns: void
   */
  /**
   * Adds the given plugin(s) to the registry
   *
   * @param {object} plugins
   * @param {string} plugins.name The name of the plugin
   * @param {PluginSetup} plugins.init The init function
   * @public
   */
  register(...plugins) {
    plugins.forEach((plugin) => {
      if (typeof plugin !== "object" || !plugin.name || !plugin.init) {
        throw new Error("Invalid JSEP plugin format");
      }
      if (this.registered[plugin.name]) {
        return;
      }
      plugin.init(this.jsep);
      this.registered[plugin.name] = plugin;
    });
  }
}
class Jsep {
  /**
   * @returns {string}
   */
  static get version() {
    return "1.4.0";
  }
  /**
   * @returns {string}
   */
  static toString() {
    return "JavaScript Expression Parser (JSEP) v" + Jsep.version;
  }
  // ==================== CONFIG ================================
  /**
   * @method addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @returns {Jsep}
   */
  static addUnaryOp(op_name) {
    Jsep.max_unop_len = Math.max(op_name.length, Jsep.max_unop_len);
    Jsep.unary_ops[op_name] = 1;
    return Jsep;
  }
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
   * @param {boolean} [isRightAssociative=false] whether operator is right-associative
   * @returns {Jsep}
   */
  static addBinaryOp(op_name, precedence, isRightAssociative) {
    Jsep.max_binop_len = Math.max(op_name.length, Jsep.max_binop_len);
    Jsep.binary_ops[op_name] = precedence;
    if (isRightAssociative) {
      Jsep.right_associative.add(op_name);
    } else {
      Jsep.right_associative.delete(op_name);
    }
    return Jsep;
  }
  /**
   * @method addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @returns {Jsep}
   */
  static addIdentifierChar(char) {
    Jsep.additional_identifier_chars.add(char);
    return Jsep;
  }
  /**
   * @method addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @returns {Jsep}
   */
  static addLiteral(literal_name, literal_value) {
    Jsep.literals[literal_name] = literal_value;
    return Jsep;
  }
  /**
   * @method removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @returns {Jsep}
   */
  static removeUnaryOp(op_name) {
    delete Jsep.unary_ops[op_name];
    if (op_name.length === Jsep.max_unop_len) {
      Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
    }
    return Jsep;
  }
  /**
   * @method removeAllUnaryOps
   * @returns {Jsep}
   */
  static removeAllUnaryOps() {
    Jsep.unary_ops = {};
    Jsep.max_unop_len = 0;
    return Jsep;
  }
  /**
   * @method removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @returns {Jsep}
   */
  static removeIdentifierChar(char) {
    Jsep.additional_identifier_chars.delete(char);
    return Jsep;
  }
  /**
   * @method removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @returns {Jsep}
   */
  static removeBinaryOp(op_name) {
    delete Jsep.binary_ops[op_name];
    if (op_name.length === Jsep.max_binop_len) {
      Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
    }
    Jsep.right_associative.delete(op_name);
    return Jsep;
  }
  /**
   * @method removeAllBinaryOps
   * @returns {Jsep}
   */
  static removeAllBinaryOps() {
    Jsep.binary_ops = {};
    Jsep.max_binop_len = 0;
    return Jsep;
  }
  /**
   * @method removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @returns {Jsep}
   */
  static removeLiteral(literal_name) {
    delete Jsep.literals[literal_name];
    return Jsep;
  }
  /**
   * @method removeAllLiterals
   * @returns {Jsep}
   */
  static removeAllLiterals() {
    Jsep.literals = {};
    return Jsep;
  }
  // ==================== END CONFIG ============================
  /**
   * @returns {string}
   */
  get char() {
    return this.expr.charAt(this.index);
  }
  /**
   * @returns {number}
   */
  get code() {
    return this.expr.charCodeAt(this.index);
  }
  /**
   * @param {string} expr a string with the passed in express
   * @returns Jsep
   */
  constructor(expr) {
    this.expr = expr;
    this.index = 0;
  }
  /**
   * static top-level parser
   * @returns {jsep.Expression}
   */
  static parse(expr) {
    return new Jsep(expr).parse();
  }
  /**
   * Get the longest key length of any object
   * @param {object} obj
   * @returns {number}
   */
  static getMaxKeyLen(obj) {
    return Math.max(0, ...Object.keys(obj).map((k) => k.length));
  }
  /**
   * `ch` is a character code in the next three functions
   * @param {number} ch
   * @returns {boolean}
   */
  static isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  /**
   * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
   * @param {string} op_val
   * @returns {number}
   */
  static binaryPrecedence(op_val) {
    return Jsep.binary_ops[op_val] || 0;
  }
  /**
   * Looks for start of identifier
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierStart(ch) {
    return ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // a...z
    ch >= 128 && !Jsep.binary_ops[String.fromCharCode(ch)] || // any non-ASCII that is not an operator
    Jsep.additional_identifier_chars.has(String.fromCharCode(ch));
  }
  /**
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierPart(ch) {
    return Jsep.isIdentifierStart(ch) || Jsep.isDecimalDigit(ch);
  }
  /**
   * throw error at index of the expression
   * @param {string} message
   * @throws
   */
  throwError(message) {
    const error = new Error(message + " at character " + this.index);
    error.index = this.index;
    error.description = message;
    throw error;
  }
  /**
   * Run a given hook
   * @param {string} name
   * @param {jsep.Expression|false} [node]
   * @returns {?jsep.Expression}
   */
  runHook(name, node) {
    if (Jsep.hooks[name]) {
      const env = { context: this, node };
      Jsep.hooks.run(name, env);
      return env.node;
    }
    return node;
  }
  /**
   * Runs a given hook until one returns a node
   * @param {string} name
   * @returns {?jsep.Expression}
   */
  searchHook(name) {
    if (Jsep.hooks[name]) {
      const env = { context: this };
      Jsep.hooks[name].find(function(callback) {
        callback.call(env.context, env);
        return env.node;
      });
      return env.node;
    }
  }
  /**
   * Push `index` up to the next non-space character
   */
  gobbleSpaces() {
    let ch = this.code;
    while (ch === Jsep.SPACE_CODE || ch === Jsep.TAB_CODE || ch === Jsep.LF_CODE || ch === Jsep.CR_CODE) {
      ch = this.expr.charCodeAt(++this.index);
    }
    this.runHook("gobble-spaces");
  }
  /**
   * Top-level method to parse all expressions and returns compound or single node
   * @returns {jsep.Expression}
   */
  parse() {
    this.runHook("before-all");
    const nodes = this.gobbleExpressions();
    const node = nodes.length === 1 ? nodes[0] : {
      type: Jsep.COMPOUND,
      body: nodes
    };
    return this.runHook("after-all", node);
  }
  /**
   * top-level parser (but can be reused within as well)
   * @param {number} [untilICode]
   * @returns {jsep.Expression[]}
   */
  gobbleExpressions(untilICode) {
    let nodes = [], ch_i, node;
    while (this.index < this.expr.length) {
      ch_i = this.code;
      if (ch_i === Jsep.SEMCOL_CODE || ch_i === Jsep.COMMA_CODE) {
        this.index++;
      } else {
        if (node = this.gobbleExpression()) {
          nodes.push(node);
        } else if (this.index < this.expr.length) {
          if (ch_i === untilICode) {
            break;
          }
          this.throwError('Unexpected "' + this.char + '"');
        }
      }
    }
    return nodes;
  }
  /**
   * The main parsing function.
   * @returns {?jsep.Expression}
   */
  gobbleExpression() {
    const node = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
    this.gobbleSpaces();
    return this.runHook("after-expression", node);
  }
  /**
   * Search for the operation portion of the string (e.g. `+`, `===`)
   * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
   * and move down from 3 to 2 to 1 character until a matching binary operation is found
   * then, return that binary operation
   * @returns {string|boolean}
   */
  gobbleBinaryOp() {
    this.gobbleSpaces();
    let to_check = this.expr.substr(this.index, Jsep.max_binop_len);
    let tc_len = to_check.length;
    while (tc_len > 0) {
      if (Jsep.binary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
        this.index += tc_len;
        return to_check;
      }
      to_check = to_check.substr(0, --tc_len);
    }
    return false;
  }
  /**
   * This function is responsible for gobbling an individual expression,
   * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
   * @returns {?jsep.BinaryExpression}
   */
  gobbleBinaryExpression() {
    let node, biop, prec, stack, biop_info, left, right, i, cur_biop;
    left = this.gobbleToken();
    if (!left) {
      return left;
    }
    biop = this.gobbleBinaryOp();
    if (!biop) {
      return left;
    }
    biop_info = { value: biop, prec: Jsep.binaryPrecedence(biop), right_a: Jsep.right_associative.has(biop) };
    right = this.gobbleToken();
    if (!right) {
      this.throwError("Expected expression after " + biop);
    }
    stack = [left, biop_info, right];
    while (biop = this.gobbleBinaryOp()) {
      prec = Jsep.binaryPrecedence(biop);
      if (prec === 0) {
        this.index -= biop.length;
        break;
      }
      biop_info = { value: biop, prec, right_a: Jsep.right_associative.has(biop) };
      cur_biop = biop;
      const comparePrev = (prev) => biop_info.right_a && prev.right_a ? prec > prev.prec : prec <= prev.prec;
      while (stack.length > 2 && comparePrev(stack[stack.length - 2])) {
        right = stack.pop();
        biop = stack.pop().value;
        left = stack.pop();
        node = {
          type: Jsep.BINARY_EXP,
          operator: biop,
          left,
          right
        };
        stack.push(node);
      }
      node = this.gobbleToken();
      if (!node) {
        this.throwError("Expected expression after " + cur_biop);
      }
      stack.push(biop_info, node);
    }
    i = stack.length - 1;
    node = stack[i];
    while (i > 1) {
      node = {
        type: Jsep.BINARY_EXP,
        operator: stack[i - 1].value,
        left: stack[i - 2],
        right: node
      };
      i -= 2;
    }
    return node;
  }
  /**
   * An individual part of a binary expression:
   * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
   * @returns {boolean|jsep.Expression}
   */
  gobbleToken() {
    let ch, to_check, tc_len, node;
    this.gobbleSpaces();
    node = this.searchHook("gobble-token");
    if (node) {
      return this.runHook("after-token", node);
    }
    ch = this.code;
    if (Jsep.isDecimalDigit(ch) || ch === Jsep.PERIOD_CODE) {
      return this.gobbleNumericLiteral();
    }
    if (ch === Jsep.SQUOTE_CODE || ch === Jsep.DQUOTE_CODE) {
      node = this.gobbleStringLiteral();
    } else if (ch === Jsep.OBRACK_CODE) {
      node = this.gobbleArray();
    } else {
      to_check = this.expr.substr(this.index, Jsep.max_unop_len);
      tc_len = to_check.length;
      while (tc_len > 0) {
        if (Jsep.unary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
          this.index += tc_len;
          const argument = this.gobbleToken();
          if (!argument) {
            this.throwError("missing unaryOp argument");
          }
          return this.runHook("after-token", {
            type: Jsep.UNARY_EXP,
            operator: to_check,
            argument,
            prefix: true
          });
        }
        to_check = to_check.substr(0, --tc_len);
      }
      if (Jsep.isIdentifierStart(ch)) {
        node = this.gobbleIdentifier();
        if (Jsep.literals.hasOwnProperty(node.name)) {
          node = {
            type: Jsep.LITERAL,
            value: Jsep.literals[node.name],
            raw: node.name
          };
        } else if (node.name === Jsep.this_str) {
          node = { type: Jsep.THIS_EXP };
        }
      } else if (ch === Jsep.OPAREN_CODE) {
        node = this.gobbleGroup();
      }
    }
    if (!node) {
      return this.runHook("after-token", false);
    }
    node = this.gobbleTokenProperty(node);
    return this.runHook("after-token", node);
  }
  /**
   * Gobble properties of of identifiers/strings/arrays/groups.
   * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
   * It also gobbles function calls:
   * e.g. `Math.acos(obj.angle)`
   * @param {jsep.Expression} node
   * @returns {jsep.Expression}
   */
  gobbleTokenProperty(node) {
    this.gobbleSpaces();
    let ch = this.code;
    while (ch === Jsep.PERIOD_CODE || ch === Jsep.OBRACK_CODE || ch === Jsep.OPAREN_CODE || ch === Jsep.QUMARK_CODE) {
      let optional;
      if (ch === Jsep.QUMARK_CODE) {
        if (this.expr.charCodeAt(this.index + 1) !== Jsep.PERIOD_CODE) {
          break;
        }
        optional = true;
        this.index += 2;
        this.gobbleSpaces();
        ch = this.code;
      }
      this.index++;
      if (ch === Jsep.OBRACK_CODE) {
        node = {
          type: Jsep.MEMBER_EXP,
          computed: true,
          object: node,
          property: this.gobbleExpression()
        };
        if (!node.property) {
          this.throwError('Unexpected "' + this.char + '"');
        }
        this.gobbleSpaces();
        ch = this.code;
        if (ch !== Jsep.CBRACK_CODE) {
          this.throwError("Unclosed [");
        }
        this.index++;
      } else if (ch === Jsep.OPAREN_CODE) {
        node = {
          type: Jsep.CALL_EXP,
          "arguments": this.gobbleArguments(Jsep.CPAREN_CODE),
          callee: node
        };
      } else if (ch === Jsep.PERIOD_CODE || optional) {
        if (optional) {
          this.index--;
        }
        this.gobbleSpaces();
        node = {
          type: Jsep.MEMBER_EXP,
          computed: false,
          object: node,
          property: this.gobbleIdentifier()
        };
      }
      if (optional) {
        node.optional = true;
      }
      this.gobbleSpaces();
      ch = this.code;
    }
    return node;
  }
  /**
   * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
   * keep track of everything in the numeric literal and then calling `parseFloat` on that string
   * @returns {jsep.Literal}
   */
  gobbleNumericLiteral() {
    let number = "", ch, chCode;
    while (Jsep.isDecimalDigit(this.code)) {
      number += this.expr.charAt(this.index++);
    }
    if (this.code === Jsep.PERIOD_CODE) {
      number += this.expr.charAt(this.index++);
      while (Jsep.isDecimalDigit(this.code)) {
        number += this.expr.charAt(this.index++);
      }
    }
    ch = this.char;
    if (ch === "e" || ch === "E") {
      number += this.expr.charAt(this.index++);
      ch = this.char;
      if (ch === "+" || ch === "-") {
        number += this.expr.charAt(this.index++);
      }
      while (Jsep.isDecimalDigit(this.code)) {
        number += this.expr.charAt(this.index++);
      }
      if (!Jsep.isDecimalDigit(this.expr.charCodeAt(this.index - 1))) {
        this.throwError("Expected exponent (" + number + this.char + ")");
      }
    }
    chCode = this.code;
    if (Jsep.isIdentifierStart(chCode)) {
      this.throwError("Variable names cannot start with a number (" + number + this.char + ")");
    } else if (chCode === Jsep.PERIOD_CODE || number.length === 1 && number.charCodeAt(0) === Jsep.PERIOD_CODE) {
      this.throwError("Unexpected period");
    }
    return {
      type: Jsep.LITERAL,
      value: parseFloat(number),
      raw: number
    };
  }
  /**
   * Parses a string literal, staring with single or double quotes with basic support for escape codes
   * e.g. `"hello world"`, `'this is\nJSEP'`
   * @returns {jsep.Literal}
   */
  gobbleStringLiteral() {
    let str = "";
    const startIndex = this.index;
    const quote = this.expr.charAt(this.index++);
    let closed = false;
    while (this.index < this.expr.length) {
      let ch = this.expr.charAt(this.index++);
      if (ch === quote) {
        closed = true;
        break;
      } else if (ch === "\\") {
        ch = this.expr.charAt(this.index++);
        switch (ch) {
          case "n":
            str += "\n";
            break;
          case "r":
            str += "\r";
            break;
          case "t":
            str += "	";
            break;
          case "b":
            str += "\b";
            break;
          case "f":
            str += "\f";
            break;
          case "v":
            str += "\v";
            break;
          default:
            str += ch;
        }
      } else {
        str += ch;
      }
    }
    if (!closed) {
      this.throwError('Unclosed quote after "' + str + '"');
    }
    return {
      type: Jsep.LITERAL,
      value: str,
      raw: this.expr.substring(startIndex, this.index)
    };
  }
  /**
   * Gobbles only identifiers
   * e.g.: `foo`, `_value`, `$x1`
   * Also, this function checks if that identifier is a literal:
   * (e.g. `true`, `false`, `null`) or `this`
   * @returns {jsep.Identifier}
   */
  gobbleIdentifier() {
    let ch = this.code, start = this.index;
    if (Jsep.isIdentifierStart(ch)) {
      this.index++;
    } else {
      this.throwError("Unexpected " + this.char);
    }
    while (this.index < this.expr.length) {
      ch = this.code;
      if (Jsep.isIdentifierPart(ch)) {
        this.index++;
      } else {
        break;
      }
    }
    return {
      type: Jsep.IDENTIFIER,
      name: this.expr.slice(start, this.index)
    };
  }
  /**
   * Gobbles a list of arguments within the context of a function call
   * or array literal. This function also assumes that the opening character
   * `(` or `[` has already been gobbled, and gobbles expressions and commas
   * until the terminator character `)` or `]` is encountered.
   * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
   * @param {number} termination
   * @returns {jsep.Expression[]}
   */
  gobbleArguments(termination) {
    const args = [];
    let closed = false;
    let separator_count = 0;
    while (this.index < this.expr.length) {
      this.gobbleSpaces();
      let ch_i = this.code;
      if (ch_i === termination) {
        closed = true;
        this.index++;
        if (termination === Jsep.CPAREN_CODE && separator_count && separator_count >= args.length) {
          this.throwError("Unexpected token " + String.fromCharCode(termination));
        }
        break;
      } else if (ch_i === Jsep.COMMA_CODE) {
        this.index++;
        separator_count++;
        if (separator_count !== args.length) {
          if (termination === Jsep.CPAREN_CODE) {
            this.throwError("Unexpected token ,");
          } else if (termination === Jsep.CBRACK_CODE) {
            for (let arg = args.length; arg < separator_count; arg++) {
              args.push(null);
            }
          }
        }
      } else if (args.length !== separator_count && separator_count !== 0) {
        this.throwError("Expected comma");
      } else {
        const node = this.gobbleExpression();
        if (!node || node.type === Jsep.COMPOUND) {
          this.throwError("Expected comma");
        }
        args.push(node);
      }
    }
    if (!closed) {
      this.throwError("Expected " + String.fromCharCode(termination));
    }
    return args;
  }
  /**
   * Responsible for parsing a group of things within parentheses `()`
   * that have no identifier in front (so not a function call)
   * This function assumes that it needs to gobble the opening parenthesis
   * and then tries to gobble everything within that parenthesis, assuming
   * that the next thing it should see is the close parenthesis. If not,
   * then the expression probably doesn't have a `)`
   * @returns {boolean|jsep.Expression}
   */
  gobbleGroup() {
    this.index++;
    let nodes = this.gobbleExpressions(Jsep.CPAREN_CODE);
    if (this.code === Jsep.CPAREN_CODE) {
      this.index++;
      if (nodes.length === 1) {
        return nodes[0];
      } else if (!nodes.length) {
        return false;
      } else {
        return {
          type: Jsep.SEQUENCE_EXP,
          expressions: nodes
        };
      }
    } else {
      this.throwError("Unclosed (");
    }
  }
  /**
   * Responsible for parsing Array literals `[1, 2, 3]`
   * This function assumes that it needs to gobble the opening bracket
   * and then tries to gobble the expressions as arguments.
   * @returns {jsep.ArrayExpression}
   */
  gobbleArray() {
    this.index++;
    return {
      type: Jsep.ARRAY_EXP,
      elements: this.gobbleArguments(Jsep.CBRACK_CODE)
    };
  }
}
const hooks = new Hooks();
Object.assign(Jsep, {
  hooks,
  plugins: new Plugins(Jsep),
  // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified
  COMPOUND: "Compound",
  SEQUENCE_EXP: "SequenceExpression",
  IDENTIFIER: "Identifier",
  MEMBER_EXP: "MemberExpression",
  LITERAL: "Literal",
  THIS_EXP: "ThisExpression",
  CALL_EXP: "CallExpression",
  UNARY_EXP: "UnaryExpression",
  BINARY_EXP: "BinaryExpression",
  ARRAY_EXP: "ArrayExpression",
  TAB_CODE: 9,
  LF_CODE: 10,
  CR_CODE: 13,
  SPACE_CODE: 32,
  PERIOD_CODE: 46,
  // '.'
  COMMA_CODE: 44,
  // ','
  SQUOTE_CODE: 39,
  // single quote
  DQUOTE_CODE: 34,
  // double quotes
  OPAREN_CODE: 40,
  // (
  CPAREN_CODE: 41,
  // )
  OBRACK_CODE: 91,
  // [
  CBRACK_CODE: 93,
  // ]
  QUMARK_CODE: 63,
  // ?
  SEMCOL_CODE: 59,
  // ;
  COLON_CODE: 58,
  // :
  // Operations
  // ----------
  // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `1` (it really doesn't matter)
  unary_ops: {
    "-": 1,
    "!": 1,
    "~": 1,
    "+": 1
  },
  // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference (higher number = higher precedence)
  // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  binary_ops: {
    "||": 1,
    "??": 1,
    "&&": 2,
    "|": 3,
    "^": 4,
    "&": 5,
    "==": 6,
    "!=": 6,
    "===": 6,
    "!==": 6,
    "<": 7,
    ">": 7,
    "<=": 7,
    ">=": 7,
    "<<": 8,
    ">>": 8,
    ">>>": 8,
    "+": 9,
    "-": 9,
    "*": 10,
    "/": 10,
    "%": 10,
    "**": 11
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(["**"]),
  // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
  // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals: {
    "true": true,
    "false": false,
    "null": null
  },
  // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str: "this"
});
Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
const jsep = (expr) => new Jsep(expr).parse();
const stdClassProps = Object.getOwnPropertyNames(class Test {
});
Object.getOwnPropertyNames(Jsep).filter((prop) => !stdClassProps.includes(prop) && jsep[prop] === void 0).forEach((m) => {
  jsep[m] = Jsep[m];
});
jsep.Jsep = Jsep;
const CONDITIONAL_EXP = "ConditionalExpression";
var ternary = {
  name: "ternary",
  init(jsep2) {
    jsep2.hooks.add("after-expression", function gobbleTernary(env) {
      if (env.node && this.code === jsep2.QUMARK_CODE) {
        this.index++;
        const test = env.node;
        const consequent = this.gobbleExpression();
        if (!consequent) {
          this.throwError("Expected expression");
        }
        this.gobbleSpaces();
        if (this.code === jsep2.COLON_CODE) {
          this.index++;
          const alternate = this.gobbleExpression();
          if (!alternate) {
            this.throwError("Expected expression");
          }
          env.node = {
            type: CONDITIONAL_EXP,
            test,
            consequent,
            alternate
          };
          if (test.operator && jsep2.binary_ops[test.operator] <= 0.9) {
            let newTest = test;
            while (newTest.right.operator && jsep2.binary_ops[newTest.right.operator] <= 0.9) {
              newTest = newTest.right;
            }
            env.node.test = newTest.right;
            newTest.right = env.node;
            env.node = test;
          }
        } else {
          this.throwError("Expected :");
        }
      }
    });
  }
};
jsep.plugins.register(ternary);
const operators = {
  binary: {
    "===": (a, b) => a === b,
    "!==": (a, b) => a !== b,
    "==": (a, b) => a == b,
    "!=": (a, b) => a != b,
    ">": (a, b) => a > b,
    "<": (a, b) => a < b,
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a <= b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    // remainder
    "**": (a, b) => a ** b,
    // exponentiation
    "&": (a, b) => a & b,
    // bitwise AND
    "|": (a, b) => a | b,
    // bitwise OR
    "^": (a, b) => a ^ b,
    // bitwise XOR
    "<<": (a, b) => a << b,
    // left shift
    ">>": (a, b) => a >> b,
    // sign-propagating right shift
    ">>>": (a, b) => a >>> b,
    // zero-fill right shift
    // Let's make a home for the logical operators here as well
    "||": (a, b) => a || b,
    "&&": (a, b) => a && b
  },
  unary: {
    "!": (a) => !a,
    "~": (a) => ~a,
    // bitwise NOT
    "+": (a) => +a,
    // unary plus
    "-": (a) => -a,
    // unary negation
    "++": (a) => ++a,
    // increment
    "--": (a) => --a
    // decrement
  }
};
const types = {
  // supported
  LITERAL: "Literal",
  UNARY: "UnaryExpression",
  BINARY: "BinaryExpression",
  LOGICAL: "LogicalExpression",
  CONDITIONAL: "ConditionalExpression",
  // a ? b : c
  MEMBER: "MemberExpression",
  IDENTIFIER: "Identifier",
  THIS: "ThisExpression",
  // e.g. 'this.willBeUsed'
  CALL: "CallExpression",
  // e.g. whatcha(doing)
  ARRAY: "ArrayExpression",
  // e.g. [a, 2, g(h), 'etc']
  COMPOUND: "Compound"
  // 'a===2, b===3' <-- multiple comma separated expressions.. returns last
};
const undefOperator = () => void 0;
const getParameterPath = (node, context) => {
  assert(node, "Node missing");
  const type = node.type;
  assert(lodashExports.includes(types, type), "invalid node type");
  assert(lodashExports.includes([types.MEMBER, types.IDENTIFIER], type), "Invalid parameter path node type: ", type);
  if (type === types.IDENTIFIER) {
    return node.name;
  }
  const computed = node.computed;
  const object = node.object;
  const property = node.property;
  assert(lodashExports.includes([types.MEMBER, types.IDENTIFIER, types.THIS], object.type), "Invalid object type");
  assert(property, "Member expression property is missing");
  let objectPath = "";
  if (object.type === types.THIS) {
    objectPath = "";
  } else {
    objectPath = node.name || getParameterPath(object, context);
  }
  if (computed) {
    const propertyPath = evaluateExpressionNode(property, context);
    return `${objectPath}[${propertyPath}]`;
  } else {
    assert(lodashExports.includes([types.MEMBER, types.IDENTIFIER], property.type), "Invalid object type");
    const propertyPath = property.name || getParameterPath(property, context);
    return (objectPath ? `${objectPath}.` : "") + propertyPath;
  }
};
const evaluateExpressionNode = (node, context) => {
  assert(node, "Node missing");
  assert(lodashExports.includes(types, node.type), "invalid node type");
  switch (node.type) {
    case types.LITERAL: {
      return node.value;
    }
    case types.THIS: {
      return context;
    }
    case types.COMPOUND: {
      const expressions = lodashExports.map(node.body, (el) => evaluateExpressionNode(el, context));
      return expressions.pop();
    }
    case types.ARRAY: {
      const elements = lodashExports.map(node.elements, (el) => evaluateExpressionNode(el, context));
      return elements;
    }
    case types.UNARY: {
      const operator = operators.unary[node.operator] || undefOperator;
      assert(lodashExports.includes(operators.unary, operator), "Invalid unary operator");
      const argument = evaluateExpressionNode(node.argument, context);
      return operator(argument);
    }
    case types.LOGICAL:
    case types.BINARY: {
      const operator = operators.binary[node.operator] || undefOperator;
      assert(lodashExports.includes(operators.binary, operator), "Invalid binary operator");
      const left = evaluateExpressionNode(node.left, context);
      const right = evaluateExpressionNode(node.right, context);
      return operator(left, right);
    }
    case types.CONDITIONAL: {
      const test = evaluateExpressionNode(node.test, context);
      const consequent = evaluateExpressionNode(node.consequent, context);
      const alternate = evaluateExpressionNode(node.alternate, context);
      return test ? consequent : alternate;
    }
    case types.CALL: {
      assert(lodashExports.includes([types.MEMBER, types.IDENTIFIER, types.THIS], node.callee.type), "Invalid function callee type");
      const callee = evaluateExpressionNode(node.callee, context);
      const args = lodashExports.map(node.arguments, (arg) => evaluateExpressionNode(arg, context));
      return callee.apply(null, args);
    }
    case types.IDENTIFIER:
    case types.MEMBER: {
      const path = getParameterPath(node, context);
      return lodashExports.get(context, path);
    }
    default:
      return void 0;
  }
};
const evaluate = (expression, context) => {
  const tree = jsep(expression);
  return evaluateExpressionNode(tree, context);
};
const Evaluate = (expression, data) => {
  return evaluate(expression, data);
};
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
const _sfc_main = {
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
    onValidated(valid, errors2) {
      var _a;
      this.errors = errors2;
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
const _hoisted_1 = {
  key: 0,
  class: "buttons-row"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
    $props.submitButtonVisible ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
const BtsForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8df4bc3a"]]);
export {
  BtsForm as B
};
