"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["sections_Search_tsx"],{

/***/ "./sections/Search.tsx":
/*!*****************************!*\
  !*** ./sections/Search.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var builderoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! builderoo */ \"./node_modules/builderoo/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst Search = ()=>{\n    _s();\n    const { loading, results, filters, query, setQuery, searchAgain, toggleFilter } = (0,builderoo__WEBPACK_IMPORTED_MODULE_2__.useSearch)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //   console.log(\"loading data\", loading);\n    // console.log(\"loading results\", results.products[0].options);\n    //   console.log(\"loading filters\", filters);\n    //   console.log(\"query data\", query);\n    // console.log(\"loading filters\", filters[0].choices[0]);\n    // console.log(\"loading toggleFilter\", toggleFilter);\n    // const order = useOrder();\n    // console.log(\"order data\", order);\n    const handleChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleButtonClick = ()=>{\n        setQuery(inputValue);\n        toggleFilter(\"Size\", \"variant\", \"Medium\");\n        searchAgain();\n        setInputValue(\"\"); // Clear the input field\n    };\n    // console.log(\"Input Value:\", query); // Log input value\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \" mt-20\",\n                children: \"From Search page\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"textInput\",\n                        className: \"text-gray-700  mx-2\",\n                        children: \"Enter Text:\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"textInput\",\n                        value: inputValue,\n                        onChange: handleChange,\n                        className: \"border border-gray-300 rounded-md p-2 mt-1  mx-2\",\n                        placeholder: \"Type something here...\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleButtonClick,\n                        className: \"bg-blue-500 text-white rounded-md px-4 py-2 mt-1\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4\",\n                        children: [\n                            \"You typed: \",\n                            query\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\Search.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"u0nj8lwj1rTIGobky6f6oEerCz8=\", false, function() {\n    return [\n        builderoo__WEBPACK_IMPORTED_MODULE_2__.useSearch\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9TZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ1E7QUFFaEQsTUFBTUcsU0FBUzs7SUFDYixNQUFNLEVBQ0pDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLFlBQVksRUFDYixHQUFHUixvREFBU0E7SUFFYixNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsMENBQTBDO0lBQzFDLCtEQUErRDtJQUMvRCw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBRXRDLHlEQUF5RDtJQUV6RCxxREFBcUQ7SUFFckQsNEJBQTRCO0lBRTVCLG9DQUFvQztJQUVwQyxNQUFNWSxlQUFlLENBQUNDO1FBQ3BCRixjQUFjRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxvQkFBb0I7UUFDeEJULFNBQVNHO1FBQ1RELGFBQWEsUUFBUSxXQUFXO1FBQ2hDRDtRQUVBRyxjQUFjLEtBQUssd0JBQXdCO0lBQzdDO0lBRUEseURBQXlEO0lBRXpELHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVM7Ozs7OzswQkFFdkIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1DLFNBQVE7d0JBQVlILFdBQVU7a0NBQXNCOzs7Ozs7a0NBRzNELDhEQUFDSTt3QkFDQ0MsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSFQsT0FBT0w7d0JBQ1BlLFVBQVViO3dCQUNWTSxXQUFVO3dCQUNWUSxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDQyxTQUFTWjt3QkFDVEUsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDVzt3QkFBRVgsV0FBVTs7NEJBQU87NEJBQVlaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDO0dBakVNSjs7UUFTQUQsZ0RBQVNBOzs7S0FUVEM7QUFtRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvU2VhcmNoLnRzeD9jY2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2gsIHVzZU9yZGVyIH0gZnJvbSBcImJ1aWxkZXJvb1wiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICByZXN1bHRzLFxyXG4gICAgZmlsdGVycyxcclxuICAgIHF1ZXJ5LFxyXG4gICAgc2V0UXVlcnksXHJcbiAgICBzZWFyY2hBZ2FpbixcclxuICAgIHRvZ2dsZUZpbHRlcixcclxuICB9ID0gdXNlU2VhcmNoKCk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGRhdGFcIiwgbG9hZGluZyk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJsb2FkaW5nIHJlc3VsdHNcIiwgcmVzdWx0cy5wcm9kdWN0c1swXS5vcHRpb25zKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBmaWx0ZXJzXCIsIGZpbHRlcnMpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJxdWVyeSBkYXRhXCIsIHF1ZXJ5KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJsb2FkaW5nIGZpbHRlcnNcIiwgZmlsdGVyc1swXS5jaG9pY2VzWzBdKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJsb2FkaW5nIHRvZ2dsZUZpbHRlclwiLCB0b2dnbGVGaWx0ZXIpO1xyXG5cclxuICAvLyBjb25zdCBvcmRlciA9IHVzZU9yZGVyKCk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwib3JkZXIgZGF0YVwiLCBvcmRlcik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldFF1ZXJ5KGlucHV0VmFsdWUpO1xyXG4gICAgdG9nZ2xlRmlsdGVyKFwiU2l6ZVwiLCBcInZhcmlhbnRcIiwgXCJNZWRpdW1cIik7XHJcbiAgICBzZWFyY2hBZ2FpbigpO1xyXG5cclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7IC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZFxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiSW5wdXQgVmFsdWU6XCIsIHF1ZXJ5KTsgLy8gTG9nIGlucHV0IHZhbHVlXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwiIG10LTIwXCI+RnJvbSBTZWFyY2ggcGFnZTwvaDQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRleHRJbnB1dFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgIG14LTJcIj5cclxuICAgICAgICAgIEVudGVyIFRleHQ6XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGlkPVwidGV4dElucHV0XCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgbXQtMSAgbXgtMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgc29tZXRoaW5nIGhlcmUuLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtNCBweS0yIG10LTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj5Zb3UgdHlwZWQ6IHtxdWVyeX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWFyY2giLCJTZWFyY2giLCJsb2FkaW5nIiwicmVzdWx0cyIsImZpbHRlcnMiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VhcmNoQWdhaW4iLCJ0b2dnbGVGaWx0ZXIiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Search.tsx\n"));

/***/ })

}]);