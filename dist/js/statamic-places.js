/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/PlacesSearch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/PlacesSearch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PlacesSearch',
  mixins: [Fieldtype],
  props: {
    placeholder: {
      type: String,
      "default": "Search..."
    },
    value: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      placesSearch: null,
      selectedPlace: {}
    };
  },
  mounted: function mounted() {
    this.initSelectedPlace();
    this.initPlacesSearch();

    if (this.value.line_1) {
      this.selectedPlace = this.value;
    }
  },
  computed: {
    fieldId: function fieldId() {
      return 'statamic-places-' + this._uid;
    },
    replicatorPreview: function replicatorPreview() {
      var address = this.value.line_1 + ', ' + this.value.city + ', ' + this.value.state;
      return this.value.line_1 ? address : '';
    }
  },
  methods: {
    initPlacesSearch: function initPlacesSearch() {
      var options = {
        fields: ["address_components", "geometry", "name"]
      };
      this.placesSearch = new google.maps.places.Autocomplete(document.getElementById(this.fieldId), options);
      this.placesSearch.addListener('place_changed', this.placeChanged);
    },
    initSelectedPlace: function initSelectedPlace() {
      this.selectedPlace = {
        title: '',
        line_1: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        lat: '',
        lon: '',
        google_place_id: ''
      };
    },
    placeChanged: function placeChanged() {
      var place = this.placesSearch.getPlace();

      if (place.length == 0 || place.length > 1) {
        return;
      }

      this.parseSelectedPlace(place);
    },
    resetSelectedPlace: function resetSelectedPlace() {
      this.initSelectedPlace();
      this.update(this.selectedPlace);
    },
    parseSelectedPlace: function parseSelectedPlace(place) {
      var _this = this;

      var addressComponents = place.address_components;

      _.each(addressComponents, function (component) {
        _.each(component.types, function (type) {
          switch (type) {
            case 'street_number':
              _this.selectedPlace.line_1 = component.long_name;
              break;

            case 'route':
              _this.selectedPlace.line_1 += ' ' + component.long_name;
              break;

            case 'locality':
              _this.selectedPlace.city = component.long_name;
              break;

            case 'administrative_area_level_1':
              _this.selectedPlace.state = component.short_name;
              break;

            case 'country':
              _this.selectedPlace.country = component.short_name;
              break;

            case 'postal_code':
              _this.selectedPlace.zipcode = component.long_name;
              break;
          }
        });
      });

      this.selectedPlace.lat = place.geometry.location.lat();
      this.selectedPlace.lon = place.geometry.location.lng();
      this.selectedPlace.title = place.name;
      this.selectedPlace.google_place_id = place.place_id;
      this.update(this.selectedPlace);
    }
  }
});

/***/ }),

/***/ "./resources/js/PlacesSearch.vue":
/*!***************************************!*\
  !*** ./resources/js/PlacesSearch.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlacesSearch_vue_vue_type_template_id_156422b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlacesSearch.vue?vue&type=template&id=156422b2& */ "./resources/js/PlacesSearch.vue?vue&type=template&id=156422b2&");
/* harmony import */ var _PlacesSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlacesSearch.vue?vue&type=script&lang=js& */ "./resources/js/PlacesSearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PlacesSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PlacesSearch_vue_vue_type_template_id_156422b2___WEBPACK_IMPORTED_MODULE_0__.render,
  _PlacesSearch_vue_vue_type_template_id_156422b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/PlacesSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/PlacesSearch.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/PlacesSearch.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlacesSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlacesSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/PlacesSearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlacesSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/PlacesSearch.vue?vue&type=template&id=156422b2&":
/*!**********************************************************************!*\
  !*** ./resources/js/PlacesSearch.vue?vue&type=template&id=156422b2& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlacesSearch_vue_vue_type_template_id_156422b2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlacesSearch_vue_vue_type_template_id_156422b2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlacesSearch_vue_vue_type_template_id_156422b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PlacesSearch.vue?vue&type=template&id=156422b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/PlacesSearch.vue?vue&type=template&id=156422b2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/PlacesSearch.vue?vue&type=template&id=156422b2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/PlacesSearch.vue?vue&type=template&id=156422b2& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "flex items-center w-full mb-4" }, [
      _c(
        "div",
        { staticClass: "flex-grow" },
        [
          _c("text-input", {
            attrs: {
              id: _vm.fieldId,
              type: "text",
              placeholder: _vm.placeholder,
              value: _vm.selectedPlace.title
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex text-red ml-2 mr-1 opacity-50 hover:opacity-100 cursor-pointer",
          on: { click: _vm.resetSelectedPlace }
        },
        [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "19",
                viewBox: "0 0 18 19"
              }
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    fill: "none",
                    "fill-rule": "evenodd",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    transform: "translate(1 1.545)"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M16 0L.160533333 15.8389333M16 15.8389333L.160533333 0"
                    }
                  })
                ]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.selectedPlace.line_1 && _vm.config.expand_on_select
      ? _c("div", { staticClass: "flex flex-wrap -mx-2" }, [
          _c(
            "div",
            { staticClass: "w-full px-2 mb-3" },
            [
              _c("label", [_vm._v("Address Line 1")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "text",
                  placeholder: "123 Cherry Lane",
                  value: _vm.selectedPlace.line_1
                },
                on: { input: _vm.update }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-1/2 md:w-1/4 px-2 mb-3" },
            [
              _c("label", [_vm._v("City")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "text",
                  placeholder: "Kansas City",
                  value: _vm.selectedPlace.city
                },
                on: { input: _vm.update }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-1/2 md:w-1/4 px-2 mb-3" },
            [
              _c("label", [_vm._v("State")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "text",
                  placeholder: "MO",
                  value: _vm.selectedPlace.state
                },
                on: { input: _vm.update }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-1/2 md:w-1/4 px-2 mb-3" },
            [
              _c("label", [_vm._v("Zipcode")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "tel",
                  placeholder: "64102",
                  value: _vm.selectedPlace.zipcode
                },
                on: { input: _vm.update }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-1/2 md:w-1/4 px-2 mb-3" },
            [
              _c("label", [_vm._v("Country")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "text",
                  placeholder: "USA",
                  value: _vm.selectedPlace.country
                },
                on: { input: _vm.update }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-1/2 px-2 mb-3" },
            [
              _c("label", [_vm._v("Lat")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "tel",
                  placeholder: "39.0889824",
                  value: _vm.selectedPlace.lat
                },
                on: { input: _vm.update }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-1/2 px-2 mb-3" },
            [
              _c("label", [_vm._v("Lon")]),
              _vm._v(" "),
              _c("text-input", {
                attrs: {
                  type: "tel",
                  placeholder: "-94.6068529",
                  value: _vm.selectedPlace.lon
                },
                on: { input: _vm.update }
              })
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./resources/js/statamic-places.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlacesSearch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlacesSearch.vue */ "./resources/js/PlacesSearch.vue");

Statamic.booting(function () {
  Statamic.$components.register("places_search-fieldtype", _PlacesSearch_vue__WEBPACK_IMPORTED_MODULE_0__.default);
});
})();

/******/ })()
;