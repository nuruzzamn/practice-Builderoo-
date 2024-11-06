/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[[...dev]]";
exports.ids = ["pages/[[...dev]]"];
exports.modules = {

/***/ "./data sync recursive ^\\.\\/.*$":
/*!*****************************!*\
  !*** ./data/ sync ^\.\/.*$ ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cart": "./data/cart.js",
	"./cart.js": "./data/cart.js",
	"./collections": "./data/collections.js",
	"./collections.js": "./data/collections.js",
	"./menu": "./data/menu.ts",
	"./menu.ts": "./data/menu.ts",
	"./products": "./data/products.js",
	"./products.js": "./data/products.js",
	"./user": "./data/user.js",
	"./user.js": "./data/user.js"
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
webpackContext.id = "./data sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./layouts lazy recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./layouts/ lazy ^\.\/.*$ namespace object ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./DefaultLayout": [
		"./layouts/DefaultLayout.jsx",
		"layouts_DefaultLayout_jsx"
	],
	"./DefaultLayout.jsx": [
		"./layouts/DefaultLayout.jsx",
		"layouts_DefaultLayout_jsx"
	],
	"./MainLayout": [
		"./layouts/MainLayout.jsx",
		"layouts_MainLayout_jsx"
	],
	"./MainLayout.jsx": [
		"./layouts/MainLayout.jsx",
		"layouts_MainLayout_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./layouts lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5B%5B...dev%5D%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5B%5B...dev%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5B%5B...dev%5D%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5B%5B...dev%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\[[...dev]].tsx */ \"./pages/[[...dev]].tsx\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/[[...dev]]\",\n        pathname: \"/[[...dev]]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_dev_tsx__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJTVCJTVCLi4uZGV2JTVEJTVEJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUMlNUIlNUIuLi5kZXYlNUQlNUQudHN4JmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDaEM7QUFDTDtBQUMxRDtBQUNvRDtBQUNWO0FBQzFDO0FBQ29EO0FBQ3BEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywyQ0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQywyQ0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQywyQ0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQywyQ0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsMkNBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsMkNBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQywyQ0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQywyQ0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQywyQ0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQywyQ0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQywyQ0FBUTtBQUN6RDtBQUNPLHdCQUF3Qix5R0FBZ0I7QUFDL0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXNob3AvPzYwOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxbWy4uLmRldl1dLnRzeFwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCBcInJlcG9ydFdlYlZpdGFsc1wiKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1Byb3BzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGF0aHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL1tbLi4uZGV2XV1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1tbLi4uZGV2XV1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHAsXG4gICAgICAgIERvY3VtZW50XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5B%5B...dev%5D%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5B%5B...dev%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./data/cart.js":
/*!**********************!*\
  !*** ./data/cart.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./data/products.js\");\n\n// console.log(\"cart js\", products);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    items: _products__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map((p)=>{\n        return {\n            product: p,\n            quantity: 1,\n            variant: p.variants[0]\n        };\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLGlFQUFlO0lBQ2JDLE9BQU9ELHFEQUFZLENBQUMsQ0FBQ0c7UUFDbkIsT0FBTztZQUFFQyxTQUFTRDtZQUFHRSxVQUFVO1lBQUdDLFNBQVNILEVBQUVJLFFBQVEsQ0FBQyxFQUFFO1FBQUM7SUFDM0Q7QUFDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLy4vZGF0YS9jYXJ0LmpzPzkzZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuL3Byb2R1Y3RzXCI7XHJcbi8vIGNvbnNvbGUubG9nKFwiY2FydCBqc1wiLCBwcm9kdWN0cyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaXRlbXM6IHByb2R1Y3RzLm1hcCgocCkgPT4ge1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdDogcCwgcXVhbnRpdHk6IDEsIHZhcmlhbnQ6IHAudmFyaWFudHNbMF0gfTtcclxuICB9KSxcclxufTtcclxuIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiaXRlbXMiLCJtYXAiLCJwIiwicHJvZHVjdCIsInF1YW50aXR5IiwidmFyaWFudCIsInZhcmlhbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/cart.js\n");

/***/ }),

/***/ "./data/collections.js":
/*!*****************************!*\
  !*** ./data/collections.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// export default [\n//   //\n//   {\n//     id: \"1\",\n//     title: \"Global Tech Conference\",\n//     description: \"Highlights from the annual global tech summit.\",\n//     image:\n//       \"https://www.globaltechsummit.com/cms/photo-gallery/globaltechsummit-63f64dc462785.jpg\",\n//   },\n//   {\n//     id: \"2\",\n//     title: \"AI in Healthcare\",\n//     description: \"How artificial intelligence is revolutionizing healthcare.\",\n//     image: \"https://etimg.etb2bimg.com/photo/111299715.cms\",\n//   },\n//   {\n//     id: \"3\",\n//     title: \"Cybersecurity Threats\",\n//     description: \"New emerging cybersecurity threats in 2024.\",\n//     image:\n//       \"https://computronixusa.com/wp-content/uploads/2024/01/Top-5-Cybersecurity-Threats-in-2024-and-How-to-Mitigate-Them-scaled.jpg\",\n//   },\n//   {\n//     id: \"4\",\n//     title: \"5G Networks\",\n//     description: \"The impact of 5G on global internet connectivity.\",\n//     image:\n//       \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-HlvcjQ2K6O9y7qsmrrZX-oPyKabBgmMoQ&s\",\n//   },\n//   {\n//     id: \"5\",\n//     title: \"Blockchain Adoption\",\n//     description: \"How blockchain is disrupting industries worldwide.\",\n//     image:\n//       \"https://www.researchgate.net/publication/377663870/figure/fig3/AS:11431281257107721@1719593397997/Blockchain-adoption-studies-according-to-industry-type.jpg\",\n//   },\n//   {\n//     id: \"6\",\n//     title: \"Quantum Computing Breakthroughs\",\n//     description: \"Recent advances in quantum computing.\",\n//     image:\n//       \"https://www.thedigitalspeaker.com/content/images/2024/03/Quantum-Breakthrough-Unveiling-Next-Gen-Computational-Power-futurist-ai-speaker.webp\",\n//   },\n//   {\n//     id: \"7\",\n//     title: \"Self-Driving Cars\",\n//     description: \"Autonomous vehicles: The future of transportation.\",\n//     image:\n//       \"https://media.wired.com/photos/645c372a88479249e0cc28b6/master/pass/Driverless-Cars-Data-Diet-Business-1247366812.jpg\",\n//   },\n//   {\n//     id: \"8\",\n//     title: \"Virtual Reality in Gaming\",\n//     description: \"VR is changing the gaming industry in unexpected ways.\",\n//     image:\n//       \"https://a.storyblok.com//f/106061/2560x1446/2fa10839b7/into-the-metaverse-how-ar-vr-are-revolutionising-gaming.jpg/m/3840x0/filters:quality(75)\",\n//   },\n//   {\n//     id: \"9\",\n//     title: \"Augmented Reality Shopping\",\n//     description: \"AR is reshaping the retail experience.\",\n//     image:\n//       \"https://cdn.shopify.com/s/files/1/1246/6441/files/image3_3c1bd736-bbdf-4ce9-a36a-d69ad5dbeaef.jpg?v=1657295711\",\n//   },\n//   {\n//     id: \"10\",\n//     title: \"Tech Giants and Sustainability\",\n//     description: \"How tech companies are leading the green revolution.\",\n//     image:\n//       \"https://www.marketsandmarkets.com/Images/green-technology-and-sustainability-market-ecosystem.jpg\",\n//   },\n// ];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        _id: \"1\",\n        title: \"T-Shirt Summer Vibes\",\n        image: \"https://picsum.photos/200/320\",\n        products: [\n            {\n                title: \"products 1\",\n                quantity: \"2\"\n            }\n        ]\n    },\n    {\n        _id: \"2\",\n        title: \"T-Shirt Summer Vibes\",\n        image: \"https://picsum.photos/200/320\",\n        products: [\n            {\n                title: \"products 1\",\n                quantity: \"2\"\n            }\n        ]\n    },\n    {\n        _id: \"3\",\n        title: \"T-Shirt Summer Vibes\",\n        image: \"https://picsum.photos/200/320\",\n        products: [\n            {\n                title: \"products 1\",\n                quantity: \"2\"\n            }\n        ]\n    }\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2NvbGxlY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtQkFBbUI7QUFDbkIsT0FBTztBQUNQLE1BQU07QUFDTixlQUFlO0FBQ2YsdUNBQXVDO0FBQ3ZDLHFFQUFxRTtBQUNyRSxhQUFhO0FBQ2IsaUdBQWlHO0FBQ2pHLE9BQU87QUFDUCxNQUFNO0FBQ04sZUFBZTtBQUNmLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsK0RBQStEO0FBQy9ELE9BQU87QUFDUCxNQUFNO0FBQ04sZUFBZTtBQUNmLHNDQUFzQztBQUN0QyxrRUFBa0U7QUFDbEUsYUFBYTtBQUNiLHlJQUF5STtBQUN6SSxPQUFPO0FBQ1AsTUFBTTtBQUNOLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUIsd0VBQXdFO0FBQ3hFLGFBQWE7QUFDYix3R0FBd0c7QUFDeEcsT0FBTztBQUNQLE1BQU07QUFDTixlQUFlO0FBQ2Ysb0NBQW9DO0FBQ3BDLHlFQUF5RTtBQUN6RSxhQUFhO0FBQ2Isd0tBQXdLO0FBQ3hLLE9BQU87QUFDUCxNQUFNO0FBQ04sZUFBZTtBQUNmLGdEQUFnRDtBQUNoRCw0REFBNEQ7QUFDNUQsYUFBYTtBQUNiLHlKQUF5SjtBQUN6SixPQUFPO0FBQ1AsTUFBTTtBQUNOLGVBQWU7QUFDZixrQ0FBa0M7QUFDbEMseUVBQXlFO0FBQ3pFLGFBQWE7QUFDYixpSUFBaUk7QUFDakksT0FBTztBQUNQLE1BQU07QUFDTixlQUFlO0FBQ2YsMENBQTBDO0FBQzFDLDZFQUE2RTtBQUM3RSxhQUFhO0FBQ2IsMkpBQTJKO0FBQzNKLE9BQU87QUFDUCxNQUFNO0FBQ04sZUFBZTtBQUNmLDJDQUEyQztBQUMzQyw2REFBNkQ7QUFDN0QsYUFBYTtBQUNiLDBIQUEwSDtBQUMxSCxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiwrQ0FBK0M7QUFDL0MsMkVBQTJFO0FBQzNFLGFBQWE7QUFDYiw2R0FBNkc7QUFDN0csT0FBTztBQUNQLEtBQUs7QUFFTCxpRUFBZTtJQUNiO1FBQ0VBLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUYsT0FBTztnQkFDUEcsVUFBVTtZQUNaO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VKLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUYsT0FBTztnQkFDUEcsVUFBVTtZQUNaO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VKLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUYsT0FBTztnQkFDUEcsVUFBVTtZQUNaO1NBQ0Q7SUFDSDtDQUNELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLy4vZGF0YS9jb2xsZWN0aW9ucy5qcz8xNTRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IFtcclxuLy8gICAvL1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIjFcIixcclxuLy8gICAgIHRpdGxlOiBcIkdsb2JhbCBUZWNoIENvbmZlcmVuY2VcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkhpZ2hsaWdodHMgZnJvbSB0aGUgYW5udWFsIGdsb2JhbCB0ZWNoIHN1bW1pdC5cIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vd3d3Lmdsb2JhbHRlY2hzdW1taXQuY29tL2Ntcy9waG90by1nYWxsZXJ5L2dsb2JhbHRlY2hzdW1taXQtNjNmNjRkYzQ2Mjc4NS5qcGdcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIjJcIixcclxuLy8gICAgIHRpdGxlOiBcIkFJIGluIEhlYWx0aGNhcmVcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBpcyByZXZvbHV0aW9uaXppbmcgaGVhbHRoY2FyZS5cIixcclxuLy8gICAgIGltYWdlOiBcImh0dHBzOi8vZXRpbWcuZXRiMmJpbWcuY29tL3Bob3RvLzExMTI5OTcxNS5jbXNcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIjNcIixcclxuLy8gICAgIHRpdGxlOiBcIkN5YmVyc2VjdXJpdHkgVGhyZWF0c1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiTmV3IGVtZXJnaW5nIGN5YmVyc2VjdXJpdHkgdGhyZWF0cyBpbiAyMDI0LlwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly9jb21wdXRyb25peHVzYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjQvMDEvVG9wLTUtQ3liZXJzZWN1cml0eS1UaHJlYXRzLWluLTIwMjQtYW5kLUhvdy10by1NaXRpZ2F0ZS1UaGVtLXNjYWxlZC5qcGdcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIjRcIixcclxuLy8gICAgIHRpdGxlOiBcIjVHIE5ldHdvcmtzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGUgaW1wYWN0IG9mIDVHIG9uIGdsb2JhbCBpbnRlcm5ldCBjb25uZWN0aXZpdHkuXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUcy1IbHZjalEySzZPOXk3cXNtcnJaWC1vUHlLYWJCZ21Nb1Emc1wiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwiNVwiLFxyXG4vLyAgICAgdGl0bGU6IFwiQmxvY2tjaGFpbiBBZG9wdGlvblwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiSG93IGJsb2NrY2hhaW4gaXMgZGlzcnVwdGluZyBpbmR1c3RyaWVzIHdvcmxkd2lkZS5cIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMzc3NjYzODcwL2ZpZ3VyZS9maWczL0FTOjExNDMxMjgxMjU3MTA3NzIxQDE3MTk1OTMzOTc5OTcvQmxvY2tjaGFpbi1hZG9wdGlvbi1zdHVkaWVzLWFjY29yZGluZy10by1pbmR1c3RyeS10eXBlLmpwZ1wiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwiNlwiLFxyXG4vLyAgICAgdGl0bGU6IFwiUXVhbnR1bSBDb21wdXRpbmcgQnJlYWt0aHJvdWdoc1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiUmVjZW50IGFkdmFuY2VzIGluIHF1YW50dW0gY29tcHV0aW5nLlwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly93d3cudGhlZGlnaXRhbHNwZWFrZXIuY29tL2NvbnRlbnQvaW1hZ2VzLzIwMjQvMDMvUXVhbnR1bS1CcmVha3Rocm91Z2gtVW52ZWlsaW5nLU5leHQtR2VuLUNvbXB1dGF0aW9uYWwtUG93ZXItZnV0dXJpc3QtYWktc3BlYWtlci53ZWJwXCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogXCI3XCIsXHJcbi8vICAgICB0aXRsZTogXCJTZWxmLURyaXZpbmcgQ2Fyc1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiQXV0b25vbW91cyB2ZWhpY2xlczogVGhlIGZ1dHVyZSBvZiB0cmFuc3BvcnRhdGlvbi5cIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcImh0dHBzOi8vbWVkaWEud2lyZWQuY29tL3Bob3Rvcy82NDVjMzcyYTg4NDc5MjQ5ZTBjYzI4YjYvbWFzdGVyL3Bhc3MvRHJpdmVybGVzcy1DYXJzLURhdGEtRGlldC1CdXNpbmVzcy0xMjQ3MzY2ODEyLmpwZ1wiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwiOFwiLFxyXG4vLyAgICAgdGl0bGU6IFwiVmlydHVhbCBSZWFsaXR5IGluIEdhbWluZ1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVlIgaXMgY2hhbmdpbmcgdGhlIGdhbWluZyBpbmR1c3RyeSBpbiB1bmV4cGVjdGVkIHdheXMuXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL2Euc3RvcnlibG9rLmNvbS8vZi8xMDYwNjEvMjU2MHgxNDQ2LzJmYTEwODM5YjcvaW50by10aGUtbWV0YXZlcnNlLWhvdy1hci12ci1hcmUtcmV2b2x1dGlvbmlzaW5nLWdhbWluZy5qcGcvbS8zODQweDAvZmlsdGVyczpxdWFsaXR5KDc1KVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwiOVwiLFxyXG4vLyAgICAgdGl0bGU6IFwiQXVnbWVudGVkIFJlYWxpdHkgU2hvcHBpbmdcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOiBcIkFSIGlzIHJlc2hhcGluZyB0aGUgcmV0YWlsIGV4cGVyaWVuY2UuXCIsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMTI0Ni82NDQxL2ZpbGVzL2ltYWdlM18zYzFiZDczNi1iYmRmLTRjZTktYTM2YS1kNjlhZDVkYmVhZWYuanBnP3Y9MTY1NzI5NTcxMVwiLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwiMTBcIixcclxuLy8gICAgIHRpdGxlOiBcIlRlY2ggR2lhbnRzIGFuZCBTdXN0YWluYWJpbGl0eVwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiSG93IHRlY2ggY29tcGFuaWVzIGFyZSBsZWFkaW5nIHRoZSBncmVlbiByZXZvbHV0aW9uLlwiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly93d3cubWFya2V0c2FuZG1hcmtldHMuY29tL0ltYWdlcy9ncmVlbi10ZWNobm9sb2d5LWFuZC1zdXN0YWluYWJpbGl0eS1tYXJrZXQtZWNvc3lzdGVtLmpwZ1wiLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgX2lkOiBcIjFcIixcclxuICAgIHRpdGxlOiBcIlQtU2hpcnQgU3VtbWVyIFZpYmVzXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMyMFwiLFxyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcInByb2R1Y3RzIDFcIixcclxuICAgICAgICBxdWFudGl0eTogXCIyXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgX2lkOiBcIjJcIixcclxuICAgIHRpdGxlOiBcIlQtU2hpcnQgU3VtbWVyIFZpYmVzXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMyMFwiLFxyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcInByb2R1Y3RzIDFcIixcclxuICAgICAgICBxdWFudGl0eTogXCIyXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgX2lkOiBcIjNcIixcclxuICAgIHRpdGxlOiBcIlQtU2hpcnQgU3VtbWVyIFZpYmVzXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMyMFwiLFxyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcInByb2R1Y3RzIDFcIixcclxuICAgICAgICBxdWFudGl0eTogXCIyXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJfaWQiLCJ0aXRsZSIsImltYWdlIiwicHJvZHVjdHMiLCJxdWFudGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/collections.js\n");

/***/ }),

/***/ "./data/menu.ts":
/*!**********************!*\
  !*** ./data/menu.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    main: [\n        {\n            title: \"Docs\",\n            url: \"https://builderoo.dev\"\n        }\n    ],\n    footer: []\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL21lbnUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0lBQ2JBLE1BQU07UUFDSjtZQUNFQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUDtLQUNEO0lBQ0RDLFFBQVEsRUFBRTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLy4vZGF0YS9tZW51LnRzPzZmYTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBtYWluOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiRG9jc1wiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYnVpbGRlcm9vLmRldlwiXG4gICAgfVxuICBdLFxuICBmb290ZXI6IFtdXG59XG4iXSwibmFtZXMiOlsibWFpbiIsInRpdGxlIiwidXJsIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/menu.ts\n");

/***/ }),

/***/ "./data/products.js":
/*!**************************!*\
  !*** ./data/products.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// export default [\n//   {\n//     _id: \"1\",\n//     title: \"T-Shirt Summer Vibes\",\n//     image: \"https://picsum.photos/200/320\",\n//     price: 200,\n//     description:\n//       \"this a very famous products in our store. you can try for a one. hope your experience will be excellent\",\n//     route: \"/products1\",\n//     variant: [{ _id: \"2\" }],\n//     values: [{ _id: \"1\", label: \"red\", value: \"10\" }],\n//     options: [\n//       {\n//         name: \"product 1\",\n//         type: \"A grade\",\n//         values: [{ label: \"option 1\", value: \"200\" }],\n//       },\n//     ],\n//   },\n// ];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        _id: \"1\",\n        title: \"T-Shirt Summer Vibes\",\n        image: \"https://c.bonfireassets.com/static/design-template-category/2bc4acde-eaed-4b9b-ae95-ea566241e26b/design-template/a16600d7-5180-4597-bb23-783db9814407/f5fe2afa628f4140b4e3f725e0cd8aef/aUENsZcgKA.jpg\",\n        price: 200,\n        description: \"Embrace the warmth of summer with our 'T-Shirt Summer Vibes.' Crafted from lightweight, breathable fabric, this T-shirt ensures maximum comfort on hot days. Its stylish design makes it perfect for casual outings, beach days, or lounging at home. Available in vibrant colors, this shirt is not just a piece of clothing; it’s a statement of summer fun and relaxation. Don’t miss out on adding this essential item to your wardrobe!\",\n        route: \"/products1\",\n        variants: [\n            {\n                _id: \"1\",\n                name: \"Red / Medium\",\n                price: 10,\n                values: [\n                    \"abc1\",\n                    \"abc3\"\n                ]\n            }\n        ],\n        options: [\n            {\n                _id: \"1\",\n                name: \"Size\",\n                type: \"text\",\n                values: [\n                    {\n                        _id: \"abc1\",\n                        label: \"Medium\"\n                    },\n                    {\n                        _id: \"abc2\",\n                        label: \"Large\"\n                    }\n                ]\n            },\n            {\n                name: \"Color\",\n                type: \"text\",\n                values: [\n                    {\n                        _id: \"abc3\",\n                        label: \"Red\",\n                        value: \"abc3\"\n                    },\n                    {\n                        _id: \"abc4\",\n                        label: \"Green\",\n                        value: \"abc4\"\n                    }\n                ]\n            }\n        ]\n    }\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtQkFBbUI7QUFDbkIsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQixxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsbUhBQW1IO0FBQ25ILDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IseURBQXlEO0FBQ3pELGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQix5REFBeUQ7QUFDekQsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUVMLGlFQUFlO0lBQ2I7UUFDRUEsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE9BQ0U7UUFDRkMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE9BQU87UUFDUEMsVUFBVTtZQUNSO2dCQUNFTixLQUFLO2dCQUNMTyxNQUFNO2dCQUNOSixPQUFPO2dCQUNQSyxRQUFRO29CQUFDO29CQUFRO2lCQUFPO1lBQzFCO1NBQ0Q7UUFDREMsU0FBUztZQUNQO2dCQUNFVCxLQUFLO2dCQUNMTyxNQUFNO2dCQUNORyxNQUFNO2dCQUNORixRQUFRO29CQUNOO3dCQUFFUixLQUFLO3dCQUFRVyxPQUFPO29CQUFTO29CQUMvQjt3QkFBRVgsS0FBSzt3QkFBUVcsT0FBTztvQkFBUTtpQkFDL0I7WUFDSDtZQUNBO2dCQUNFSixNQUFNO2dCQUNORyxNQUFNO2dCQUNORixRQUFRO29CQUNOO3dCQUFFUixLQUFLO3dCQUFRVyxPQUFPO3dCQUFPQyxPQUFPO29CQUFPO29CQUMzQzt3QkFBRVosS0FBSzt3QkFBUVcsT0FBTzt3QkFBU0MsT0FBTztvQkFBTztpQkFDOUM7WUFDSDtTQUNEO0lBQ0g7Q0FDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktc2hvcC8uL2RhdGEvcHJvZHVjdHMuanM/ZWJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBbXHJcbi8vICAge1xyXG4vLyAgICAgX2lkOiBcIjFcIixcclxuLy8gICAgIHRpdGxlOiBcIlQtU2hpcnQgU3VtbWVyIFZpYmVzXCIsXHJcbi8vICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMyMFwiLFxyXG4vLyAgICAgcHJpY2U6IDIwMCxcclxuLy8gICAgIGRlc2NyaXB0aW9uOlxyXG4vLyAgICAgICBcInRoaXMgYSB2ZXJ5IGZhbW91cyBwcm9kdWN0cyBpbiBvdXIgc3RvcmUuIHlvdSBjYW4gdHJ5IGZvciBhIG9uZS4gaG9wZSB5b3VyIGV4cGVyaWVuY2Ugd2lsbCBiZSBleGNlbGxlbnRcIixcclxuLy8gICAgIHJvdXRlOiBcIi9wcm9kdWN0czFcIixcclxuLy8gICAgIHZhcmlhbnQ6IFt7IF9pZDogXCIyXCIgfV0sXHJcbi8vICAgICB2YWx1ZXM6IFt7IF9pZDogXCIxXCIsIGxhYmVsOiBcInJlZFwiLCB2YWx1ZTogXCIxMFwiIH1dLFxyXG4vLyAgICAgb3B0aW9uczogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgbmFtZTogXCJwcm9kdWN0IDFcIixcclxuLy8gICAgICAgICB0eXBlOiBcIkEgZ3JhZGVcIixcclxuLy8gICAgICAgICB2YWx1ZXM6IFt7IGxhYmVsOiBcIm9wdGlvbiAxXCIsIHZhbHVlOiBcIjIwMFwiIH1dLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIF9pZDogXCIxXCIsXHJcbiAgICB0aXRsZTogXCJULVNoaXJ0IFN1bW1lciBWaWJlc1wiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jLmJvbmZpcmVhc3NldHMuY29tL3N0YXRpYy9kZXNpZ24tdGVtcGxhdGUtY2F0ZWdvcnkvMmJjNGFjZGUtZWFlZC00YjliLWFlOTUtZWE1NjYyNDFlMjZiL2Rlc2lnbi10ZW1wbGF0ZS9hMTY2MDBkNy01MTgwLTQ1OTctYmIyMy03ODNkYjk4MTQ0MDcvZjVmZTJhZmE2MjhmNDE0MGI0ZTNmNzI1ZTBjZDhhZWYvYVVFTnNaY2dLQS5qcGdcIixcclxuICAgIHByaWNlOiAyMDAsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJFbWJyYWNlIHRoZSB3YXJtdGggb2Ygc3VtbWVyIHdpdGggb3VyICdULVNoaXJ0IFN1bW1lciBWaWJlcy4nIENyYWZ0ZWQgZnJvbSBsaWdodHdlaWdodCwgYnJlYXRoYWJsZSBmYWJyaWMsIHRoaXMgVC1zaGlydCBlbnN1cmVzIG1heGltdW0gY29tZm9ydCBvbiBob3QgZGF5cy4gSXRzIHN0eWxpc2ggZGVzaWduIG1ha2VzIGl0IHBlcmZlY3QgZm9yIGNhc3VhbCBvdXRpbmdzLCBiZWFjaCBkYXlzLCBvciBsb3VuZ2luZyBhdCBob21lLiBBdmFpbGFibGUgaW4gdmlicmFudCBjb2xvcnMsIHRoaXMgc2hpcnQgaXMgbm90IGp1c3QgYSBwaWVjZSBvZiBjbG90aGluZzsgaXTigJlzIGEgc3RhdGVtZW50IG9mIHN1bW1lciBmdW4gYW5kIHJlbGF4YXRpb24uIERvbuKAmXQgbWlzcyBvdXQgb24gYWRkaW5nIHRoaXMgZXNzZW50aWFsIGl0ZW0gdG8geW91ciB3YXJkcm9iZSFcIixcclxuICAgIHJvdXRlOiBcIi9wcm9kdWN0czFcIixcclxuICAgIHZhcmlhbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IFwiMVwiLFxyXG4gICAgICAgIG5hbWU6IFwiUmVkIC8gTWVkaXVtXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwLFxyXG4gICAgICAgIHZhbHVlczogW1wiYWJjMVwiLCBcImFiYzNcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOiBcIjFcIixcclxuICAgICAgICBuYW1lOiBcIlNpemVcIixcclxuICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgIHsgX2lkOiBcImFiYzFcIiwgbGFiZWw6IFwiTWVkaXVtXCIgfSxcclxuICAgICAgICAgIHsgX2lkOiBcImFiYzJcIiwgbGFiZWw6IFwiTGFyZ2VcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgdmFsdWVzOiBbXHJcbiAgICAgICAgICB7IF9pZDogXCJhYmMzXCIsIGxhYmVsOiBcIlJlZFwiLCB2YWx1ZTogXCJhYmMzXCIgfSxcclxuICAgICAgICAgIHsgX2lkOiBcImFiYzRcIiwgbGFiZWw6IFwiR3JlZW5cIiwgdmFsdWU6IFwiYWJjNFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbIl9pZCIsInRpdGxlIiwiaW1hZ2UiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicm91dGUiLCJ2YXJpYW50cyIsIm5hbWUiLCJ2YWx1ZXMiLCJvcHRpb25zIiwidHlwZSIsImxhYmVsIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/products.js\n");

/***/ }),

/***/ "./data/user.js":
/*!**********************!*\
  !*** ./data/user.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _id: \"12\",\n    firstName: \"John\",\n    lastName: \"Doe\",\n    email: \"test@example.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL3VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0lBQ2JBLEtBQUs7SUFDTEMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLE9BQU87QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLy4vZGF0YS91c2VyLmpzPzNiZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF9pZDogXCIxMlwiLFxyXG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXHJcbiAgZW1haWw6IFwidGVzdEBleGFtcGxlLmNvbVwiLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiX2lkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/user.js\n");

/***/ }),

/***/ "./pages/[[...dev]].tsx":
/*!******************************!*\
  !*** ./pages/[[...dev]].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ builderoo_dev__WEBPACK_IMPORTED_MODULE_0__.Page),\n/* harmony export */   getServerSideProps: () => (/* reexport safe */ builderoo_dev__WEBPACK_IMPORTED_MODULE_0__.getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var builderoo_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! builderoo/dev */ \"./node_modules/builderoo/dev.tsx\");\n// Do not modify this file\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bWy4uLmRldl1dLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQkFBMEI7QUFDdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLy4vcGFnZXMvW1suLi5kZXZdXS50c3g/OTRlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgbW9kaWZ5IHRoaXMgZmlsZVxuZXhwb3J0IHtQYWdlIGFzIGRlZmF1bHQsIGdldFNlcnZlclNpZGVQcm9wc30gZnJvbSAnYnVpbGRlcm9vL2RldidcbiJdLCJuYW1lcyI6WyJQYWdlIiwiZGVmYXVsdCIsImdldFNlcnZlclNpZGVQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[[...dev]].tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ builderoo__WEBPACK_IMPORTED_MODULE_1__.App)\n/* harmony export */ });\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var builderoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! builderoo */ \"./node_modules/builderoo/index.ts\");\n/**\n * Import your global styles\n * https://nextjs.org/docs/pages/building-your-application/styling/css-modules#global-styles\n */ \n// Do not modify this line.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztDQUdDLEdBRTRCO0FBRTdCLDJCQUEyQjtBQUNhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktc2hvcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbXBvcnQgeW91ciBnbG9iYWwgc3R5bGVzXG4gKiBodHRwczovL25leHRqcy5vcmcvZG9jcy9wYWdlcy9idWlsZGluZy15b3VyLWFwcGxpY2F0aW9uL3N0eWxpbmcvY3NzLW1vZHVsZXMjZ2xvYmFsLXN0eWxlc1xuICovXG5cbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCJcblxuLy8gRG8gbm90IG1vZGlmeSB0aGlzIGxpbmUuXG5leHBvcnQge0FwcCBhcyBkZWZhdWx0fSBmcm9tICdidWlsZGVyb28nXG4iXSwibmFtZXMiOlsiQXBwIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme.config.js":
/*!*************************!*\
  !*** ./theme.config.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productImageSizes: () => (/* binding */ productImageSizes),\n/* harmony export */   themeConfig: () => (/* binding */ themeConfig)\n/* harmony export */ });\n/* harmony import */ var builderoo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! builderoo */ \"./node_modules/builderoo/index.ts\");\n\nconst productImageSizes = [\n    [\n        200,\n        200\n    ],\n    [\n        800,\n        800\n    ],\n    [\n        1200,\n        1200\n    ],\n    [\n        1600,\n        1600\n    ]\n];\nconst themeConfig = {\n    \"logo\": {\n        image: builderoo__WEBPACK_IMPORTED_MODULE_0__.Prop.image().default(\"/logo.png\"),\n        width: builderoo__WEBPACK_IMPORTED_MODULE_0__.Prop.number().default(10),\n        _meta_: builderoo__WEBPACK_IMPORTED_MODULE_0__.Prop.meta().label(\"Logo Config\")\n    },\n    card: builderoo__WEBPACK_IMPORTED_MODULE_0__.Prop.text()\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS5jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLG9CQUFvQjtJQUFDO1FBQUM7UUFBSztLQUFJO0lBQUU7UUFBQztRQUFLO0tBQUk7SUFBRTtRQUFDO1FBQU07S0FBSztJQUFFO1FBQUM7UUFBTTtLQUFLO0NBQUM7QUFFOUUsTUFBTUMsY0FBYztJQUN6QixRQUFRO1FBQ05DLE9BQU9ILDJDQUFJQSxDQUFDRyxLQUFLLEdBQUdDLE9BQU8sQ0FBQztRQUM1QkMsT0FBT0wsMkNBQUlBLENBQUNNLE1BQU0sR0FBR0YsT0FBTyxDQUFDO1FBQzdCRyxRQUFRUCwyQ0FBSUEsQ0FBQ1EsSUFBSSxHQUFHQyxLQUFLLENBQUM7SUFDNUI7SUFDQUMsTUFBTVYsMkNBQUlBLENBQUNXLElBQUk7QUFDakIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXNob3AvLi90aGVtZS5jb25maWcuanM/YTZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb3B9IGZyb20gXCJidWlsZGVyb29cIjtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RJbWFnZVNpemVzID0gW1syMDAsIDIwMF0sIFs4MDAsIDgwMF0sIFsxMjAwLCAxMjAwXSwgWzE2MDAsIDE2MDBdXVxuXG5leHBvcnQgY29uc3QgdGhlbWVDb25maWcgPSB7XG4gIFwibG9nb1wiOiB7XG4gICAgaW1hZ2U6IFByb3AuaW1hZ2UoKS5kZWZhdWx0KFwiL2xvZ28ucG5nXCIpLFxuICAgIHdpZHRoOiBQcm9wLm51bWJlcigpLmRlZmF1bHQoMTApLFxuICAgIF9tZXRhXzogUHJvcC5tZXRhKCkubGFiZWwoXCJMb2dvIENvbmZpZ1wiKVxuICB9LFxuICBjYXJkOiBQcm9wLnRleHQoKVxufVxuIl0sIm5hbWVzIjpbIlByb3AiLCJwcm9kdWN0SW1hZ2VTaXplcyIsInRoZW1lQ29uZmlnIiwiaW1hZ2UiLCJkZWZhdWx0Iiwid2lkdGgiLCJudW1iZXIiLCJfbWV0YV8iLCJtZXRhIiwibGFiZWwiLCJjYXJkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme.config.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./pages sync recursive ^\\.\\/.*\\.json$":
/*!************************************!*\
  !*** ./pages/ sync ^\.\/.*\.json$ ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ "./sections lazy recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./sections/ lazy ^\.\/.*$ namespace object ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Cart": [
		"./sections/Cart.tsx",
		"sections_Cart_tsx"
	],
	"./Cart.tsx": [
		"./sections/Cart.tsx",
		"sections_Cart_tsx"
	],
	"./CartTest": [
		"./sections/CartTest.jsx",
		"sections_CartTest_jsx"
	],
	"./CartTest.jsx": [
		"./sections/CartTest.jsx",
		"sections_CartTest_jsx"
	],
	"./CollectionDetail": [
		"./sections/CollectionDetail.jsx",
		"sections_CollectionDetail_jsx"
	],
	"./CollectionDetail.jsx": [
		"./sections/CollectionDetail.jsx",
		"sections_CollectionDetail_jsx"
	],
	"./Content": [
		"./sections/Content.jsx",
		"sections_Content_jsx"
	],
	"./Content.jsx": [
		"./sections/Content.jsx",
		"sections_Content_jsx"
	],
	"./Custom": [
		"./sections/Custom.jsx",
		"sections_Custom_jsx"
	],
	"./Custom.jsx": [
		"./sections/Custom.jsx",
		"sections_Custom_jsx"
	],
	"./LogIn": [
		"./sections/LogIn.tsx",
		"sections_LogIn_tsx"
	],
	"./LogIn.tsx": [
		"./sections/LogIn.tsx",
		"sections_LogIn_tsx"
	],
	"./LoginPage": [
		"./sections/LoginPage.tsx",
		"sections_LoginPage_tsx"
	],
	"./LoginPage.tsx": [
		"./sections/LoginPage.tsx",
		"sections_LoginPage_tsx"
	],
	"./ProductDetail": [
		"./sections/ProductDetail.jsx",
		"sections_ProductDetail_jsx"
	],
	"./ProductDetail.jsx": [
		"./sections/ProductDetail.jsx",
		"sections_ProductDetail_jsx"
	],
	"./ProductDetailsT": [
		"./sections/ProductDetailsT.tsx",
		"sections_ProductDetailsT_tsx"
	],
	"./ProductDetailsT.tsx": [
		"./sections/ProductDetailsT.tsx",
		"sections_ProductDetailsT_tsx"
	],
	"./Search": [
		"./sections/Search.tsx",
		"sections_Search_tsx"
	],
	"./Search.tsx": [
		"./sections/Search.tsx",
		"sections_Search_tsx"
	],
	"./SignUp": [
		"./sections/SignUp.tsx",
		"sections_SignUp_tsx"
	],
	"./SignUp.tsx": [
		"./sections/SignUp.tsx",
		"sections_SignUp_tsx"
	],
	"./Technology": [
		"./sections/Technology.jsx",
		"sections_Technology_jsx"
	],
	"./Technology.jsx": [
		"./sections/Technology.jsx",
		"sections_Technology_jsx"
	],
	"./Test": [
		"./sections/Test.jsx",
		"sections_Test_jsx"
	],
	"./Test.jsx": [
		"./sections/Test.jsx",
		"sections_Test_jsx"
	],
	"./Test1": [
		"./sections/Test1.jsx",
		"sections_Test1_jsx"
	],
	"./Test1.jsx": [
		"./sections/Test1.jsx",
		"sections_Test1_jsx"
	],
	"./Test2": [
		"./sections/Test2.tsx",
		"sections_Test2_tsx"
	],
	"./Test2.tsx": [
		"./sections/Test2.tsx",
		"sections_Test2_tsx"
	],
	"./Welcome": [
		"./sections/Welcome.jsx",
		"sections_Welcome_jsx"
	],
	"./Welcome.jsx": [
		"./sections/Welcome.jsx",
		"sections_Welcome_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./sections lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-paginate":
/*!*********************************!*\
  !*** external "react-paginate" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-paginate");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "./pages/cart.json":
/*!*************************!*\
  !*** ./pages/cart.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"dev:data":"data:products","sections":[{"component":"Cart"}]}');

/***/ }),

/***/ "./pages/collection.json":
/*!*******************************!*\
  !*** ./pages/collection.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"dev:data":"data:collections","sections":[{"component":"CollectionDetail"}]}');

/***/ }),

/***/ "./pages/company/about.json":
/*!**********************************!*\
  !*** ./pages/company/about.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"MainLayout"},"sections":[{"component":"Welcome","props":{"collection":"data:collections:0"}}]}');

/***/ }),

/***/ "./pages/custom.json":
/*!***************************!*\
  !*** ./pages/custom.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":{"component":"DefaultLayout"},"sections":[{"component":"Custom","props":{"title":"","content":""}}]}');

/***/ }),

/***/ "./pages/index.json":
/*!**************************!*\
  !*** ./pages/index.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"MainLayout"},"sections":[{"component":"Welcome","props":{"collection":"data:collections:0"}}]}');

/***/ }),

/***/ "./pages/login.json":
/*!**************************!*\
  !*** ./pages/login.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"LogIn"}]}');

/***/ }),

/***/ "./pages/order.json":
/*!**************************!*\
  !*** ./pages/order.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"LogIn"}]}');

/***/ }),

/***/ "./pages/product.json":
/*!****************************!*\
  !*** ./pages/product.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"dev:data":"data:products:0","sections":[{"component":"ProductDetailsT"}]}');

/***/ }),

/***/ "./pages/search.json":
/*!***************************!*\
  !*** ./pages/search.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"Search"}]}');

/***/ }),

/***/ "./pages/sign-up.json":
/*!****************************!*\
  !*** ./pages/sign-up.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"SingUp"}]}');

/***/ }),

/***/ "./pages/technology.json":
/*!*******************************!*\
  !*** ./pages/technology.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"MainLayout"},"sections":[{"component":"Technology","props":{"collection":"data:collections"}}]}');

/***/ }),

/***/ "./pages/test.json":
/*!*************************!*\
  !*** ./pages/test.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"Test","props":{"image":"https://img.freepik.com/free-vector/shop-with-sign-open-design_23-2148544029.jpg?size=338&ext=jpg&ga=GA1.1.1023967583.1729468800&semt=ais_hybrid","heading":"Summer Collection","subtitle":"20% discount","description":"Choose your outfit from the summer collection","link":"/collection/summer-collection","linkText":"Browse Now"}}]}');

/***/ }),

/***/ "./pages/test1.json":
/*!**************************!*\
  !*** ./pages/test1.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://builderoo.dev/schema/page.json","layout":{"component":"DefaultLayout"},"sections":[{"component":"Test1","blocks":[{"name":"news-item","props":{"id":"1","title":"New Tech Advances in AI","description":"AI is transforming industries with groundbreaking advances...","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s","publishedAt":"2024-10-10"}},{"name":"news-item","props":{"id":"2","title":"Climate Change and its Global Impact","description":"An in-depth look at the effects of climate change...","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLBjP8quVFp-N5Z4g-LleXwbo2yB-jm1Xeg&s","publishedAt":"2024-10-12"}},{"name":"news-item","props":{"id":"3","title":"Exploring Space: New Discoveries in 2024","description":"Space exploration continues to yield new insights...","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfoC_8sNxVOpgxKnvwhaM-WsZ6s6g_hDPiQ&s","publishedAt":"2024-10-08"}}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/builderoo"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F%5B%5B...dev%5D%5D&preferredRegion=&absolutePagePath=.%2Fpages%5C%5B%5B...dev%5D%5D.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();