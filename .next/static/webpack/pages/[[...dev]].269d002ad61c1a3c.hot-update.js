/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...dev]]",{

/***/ "./pages sync recursive ^\\.\\/.*\\.json$":
/*!************************************!*\
  !*** ./pages/ sync ^\.\/.*\.json$ ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./cart.json": "./pages/cart.json",
	"./collection.json": "./pages/collection.json",
	"./company/about.json": "./pages/company/about.json",
	"./custom.json": "./pages/custom.json",
	"./index.json": "./pages/index.json",
	"./login.json": "./pages/login.json",
	"./order.json": "./pages/order.json",
	"./product.json": "./pages/product.json",
	"./search.json": "./pages/search.json",
	"./sign-up.json": "./pages/sign-up.json",
	"./technology.json": "./pages/technology.json",
	"./test.json": "./pages/test.json",
	"./test1.json": "./pages/test1.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./pages/search.json":
/*!***************************!*\
  !*** ./pages/search.json ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"SingUp"}]}');

/***/ })

});