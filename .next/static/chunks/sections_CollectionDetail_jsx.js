"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["sections_CollectionDetail_jsx"],{

/***/ "./sections/CollectionDetail.jsx":
/*!***************************************!*\
  !*** ./sections/CollectionDetail.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var builderoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! builderoo */ \"./node_modules/builderoo/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n// export const props = {\n//   collection: Prop.collection().label(\"Featured Collection\"),\n// };\nconst CollectionDetail = ()=>{\n    _s();\n    //   const collection = useCollection();\n    const collection = (0,builderoo__WEBPACK_IMPORTED_MODULE_2__.useCollection)();\n    console.log(\"collection\", collection[0].products[0].quantity);\n    //   const { currentPage, gotoPage, totalPages, urlForPage } = usePagination();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Here is the collection value\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\CollectionDetail.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(CollectionDetail, \"BfrcLgzqmdlYkA9mlaYdD6HUCJw=\", false, function() {\n    return [\n        builderoo__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = CollectionDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollectionDetail);\nvar _c;\n$RefreshReg$(_c, \"CollectionDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9Db2xsZWN0aW9uRGV0YWlsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNxQztBQUUvRCx5QkFBeUI7QUFDekIsZ0VBQWdFO0FBQ2hFLEtBQUs7QUFFTCxNQUFNSSxtQkFBbUI7O0lBQ3ZCLHdDQUF3QztJQUN4QyxNQUFNQyxhQUFhSix3REFBYUE7SUFFaENLLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRixVQUFVLENBQUMsRUFBRSxDQUFDRyxRQUFRLENBQUMsRUFBRSxDQUFDQyxRQUFRO0lBQzVELCtFQUErRTtJQUMvRSxxQkFDRTtrQkFDRSw0RUFBQ0M7c0JBQUc7Ozs7Ozs7QUFxQlY7R0E3Qk1OOztRQUVlSCxvREFBYUE7OztLQUY1Qkc7QUErQk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9Db2xsZWN0aW9uRGV0YWlsLmpzeD9hNDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiwgdXNlUGFnaW5hdGlvbiwgUHJvcCB9IGZyb20gXCJidWlsZGVyb29cIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBwcm9wcyA9IHtcclxuLy8gICBjb2xsZWN0aW9uOiBQcm9wLmNvbGxlY3Rpb24oKS5sYWJlbChcIkZlYXR1cmVkIENvbGxlY3Rpb25cIiksXHJcbi8vIH07XHJcblxyXG5jb25zdCBDb2xsZWN0aW9uRGV0YWlsID0gKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgY29sbGVjdGlvbiA9IHVzZUNvbGxlY3Rpb24oKTtcclxuICBjb25zdCBjb2xsZWN0aW9uID0gdXNlQ29sbGVjdGlvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImNvbGxlY3Rpb25cIiwgY29sbGVjdGlvblswXS5wcm9kdWN0c1swXS5xdWFudGl0eSk7XHJcbiAgLy8gICBjb25zdCB7IGN1cnJlbnRQYWdlLCBnb3RvUGFnZSwgdG90YWxQYWdlcywgdXJsRm9yUGFnZSB9ID0gdXNlUGFnaW5hdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+SGVyZSBpcyB0aGUgY29sbGVjdGlvbiB2YWx1ZTwvaDE+XHJcbiAgICA8Lz5cclxuICAgIC8vIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTIwIHB5LTEwIG15LTEwXCI+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtOFwiPlxyXG4gICAgLy8gICAgIDxhXHJcbiAgICAvLyAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB1bmRlcmxpbmUgdGV4dC1ibHVlLTUwMFwiXHJcbiAgICAvLyAgICAgICBocmVmPXt1cmxGb3JQYWdlKGN1cnJlbnRQYWdlIC0gMSl9XHJcbiAgICAvLyAgICAgICBvbkNsaWNrPXsoZSkgPT4gZ290b1BhZ2UoY3VycmVudFBhZ2UgLSAxLCBlKX1cclxuICAgIC8vICAgICA+XHJcbiAgICAvLyAgICAgICBQcmV2aW91cyBQYWdlXHJcbiAgICAvLyAgICAgPC9hPlxyXG4gICAgLy8gICAgIDxhXHJcbiAgICAvLyAgICAgICBocmVmPXt1cmxGb3JQYWdlKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAvLyAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB1bmRlcmxpbmUgdGV4dC1ibHVlLTUwMFwiXHJcbiAgICAvLyAgICAgICBvbkNsaWNrPXsoZSkgPT4gZ290b1BhZ2UoY3VycmVudFBhZ2UgKyAxLCBlKX1cclxuICAgIC8vICAgICA+XHJcbiAgICAvLyAgICAgICBOZXh0IFBhZ2VcclxuICAgIC8vICAgICA8L2E+XHJcbiAgICAvLyAgIDwvZGl2PlxyXG4gICAgLy8gPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb2xsZWN0aW9uIiwidXNlUGFnaW5hdGlvbiIsIlByb3AiLCJDb2xsZWN0aW9uRGV0YWlsIiwiY29sbGVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsInF1YW50aXR5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/CollectionDetail.jsx\n"));

/***/ })

}]);