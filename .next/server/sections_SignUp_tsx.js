"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "sections_SignUp_tsx";
exports.ids = ["sections_SignUp_tsx"];
exports.modules = {

/***/ "./sections/SignUp.tsx":
/*!*****************************!*\
  !*** ./sections/SignUp.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var builderoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! builderoo */ \"./node_modules/builderoo/index.ts\");\n\n\n\nconst SignUp = ()=>{\n    const { login, captchaRef, signup } = (0,builderoo__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    // Handle the signup process when the button is clicked\n    // const handleSignUp = () => {\n    //   console.log(\"Sign up button clicked\");\n    //   signup({\n    //     firstName: \"John\",\n    //     lastName: \"Doe\",\n    //     username: \"email@example.com\",\n    //     password: \"1234\",\n    //   })\n    //     .then((data) => {\n    //       console.log(\"data from sign up\", data);\n    //       if (data.status === \"code-verification-required\") {\n    //         console.log(\"Verification code required\", data);\n    //       } else {\n    //         console.log(\"Signup successful\", data);\n    //       }\n    //     })\n    //     .catch((e) => {\n    //       console.error(\"Signup error:\", e);\n    //     });\n    // };\n    const handleSignUp = async ()=>{\n        console.log(\"Sign up button clicked\");\n        try {\n            const data = await signup({\n                firstName: \"John\",\n                lastName: \"Doe\",\n                username: \"test@example.com\",\n                password: \"123456\"\n            });\n            console.log(\"data from sign up\", data);\n            if (data.status === \"code-verification-required\") {\n                console.log(\"Verification code required\", data);\n            } else {\n                console.log(\"Signup successful\", data);\n            }\n        } catch (e) {\n            console.error(\"Signup error:\", e);\n            if (e.response) {\n                console.error(\"Error response data:\", e.response.data);\n                console.error(\"Error status:\", e.response.status);\n                console.error(\"Error headers:\", e.response.headers);\n            } else if (e.message) {\n                console.error(\"Error message:\", e.message);\n            } else {\n                console.error(\"Unexpected error:\", JSON.stringify(e));\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-10\",\n                children: \"Sign Up Page\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\SignUp.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(builderoo__WEBPACK_IMPORTED_MODULE_2__.Captcha, {\n                ref: captchaRef\n            }, void 0, false, {\n                fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\SignUp.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSignUp,\n                className: \"bg-blue-400 text-white py-2 px-4 rounded\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\SignUp.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Profession\\\\web development\\\\practice\\\\Builderoo\\\\my-shop\\\\sections\\\\SignUp.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9TaWduVXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFFaEQsTUFBTUcsU0FBbUI7SUFDdkIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFLEdBQUdKLHFEQUFVQTtJQUVoRCx1REFBdUQ7SUFDdkQsK0JBQStCO0lBQy9CLDJDQUEyQztJQUUzQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLE9BQU87SUFDUCx3QkFBd0I7SUFDeEIsZ0RBQWdEO0lBRWhELDREQUE0RDtJQUM1RCwyREFBMkQ7SUFDM0QsaUJBQWlCO0lBQ2pCLGtEQUFrRDtJQUNsRCxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsVUFBVTtJQUNWLEtBQUs7SUFFTCxNQUFNSyxlQUFlO1FBQ25CQyxRQUFRQyxHQUFHLENBQUM7UUFFWixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNSixPQUFPO2dCQUN4QkssV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsVUFBVTtnQkFDVkMsVUFBVTtZQUNaO1lBRUFOLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJDO1lBRWpDLElBQUlBLEtBQUtLLE1BQU0sS0FBSyw4QkFBOEI7Z0JBQ2hEUCxRQUFRQyxHQUFHLENBQUMsOEJBQThCQztZQUM1QyxPQUFPO2dCQUNMRixRQUFRQyxHQUFHLENBQUMscUJBQXFCQztZQUNuQztRQUNGLEVBQUUsT0FBT00sR0FBRztZQUNWUixRQUFRUyxLQUFLLENBQUMsaUJBQWlCRDtZQUUvQixJQUFJQSxFQUFFRSxRQUFRLEVBQUU7Z0JBQ2RWLFFBQVFTLEtBQUssQ0FBQyx3QkFBd0JELEVBQUVFLFFBQVEsQ0FBQ1IsSUFBSTtnQkFDckRGLFFBQVFTLEtBQUssQ0FBQyxpQkFBaUJELEVBQUVFLFFBQVEsQ0FBQ0gsTUFBTTtnQkFDaERQLFFBQVFTLEtBQUssQ0FBQyxrQkFBa0JELEVBQUVFLFFBQVEsQ0FBQ0MsT0FBTztZQUNwRCxPQUFPLElBQUlILEVBQUVJLE9BQU8sRUFBRTtnQkFDcEJaLFFBQVFTLEtBQUssQ0FBQyxrQkFBa0JELEVBQUVJLE9BQU87WUFDM0MsT0FBTztnQkFDTFosUUFBUVMsS0FBSyxDQUFDLHFCQUFxQkksS0FBS0MsU0FBUyxDQUFDTjtZQUNwRDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFROzs7Ozs7MEJBRXRCLDhEQUFDdkIsOENBQU9BO2dCQUFDeUIsS0FBS3JCOzs7Ozs7MEJBQ2QsOERBQUNzQjtnQkFDQ0MsU0FBU3JCO2dCQUNUaUIsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7QUFFQSxpRUFBZXJCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zaG9wLy4vc2VjdGlvbnMvU2lnblVwLnRzeD81NGE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYSwgdXNlQWNjb3VudCB9IGZyb20gXCJidWlsZGVyb29cIjtcclxuXHJcbmNvbnN0IFNpZ25VcDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2dpbiwgY2FwdGNoYVJlZiwgc2lnbnVwIH0gPSB1c2VBY2NvdW50KCk7XHJcblxyXG4gIC8vIEhhbmRsZSB0aGUgc2lnbnVwIHByb2Nlc3Mgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAvLyBjb25zdCBoYW5kbGVTaWduVXAgPSAoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcIlNpZ24gdXAgYnV0dG9uIGNsaWNrZWRcIik7XHJcblxyXG4gIC8vICAgc2lnbnVwKHtcclxuICAvLyAgICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcclxuICAvLyAgICAgbGFzdE5hbWU6IFwiRG9lXCIsXHJcbiAgLy8gICAgIHVzZXJuYW1lOiBcImVtYWlsQGV4YW1wbGUuY29tXCIsXHJcbiAgLy8gICAgIHBhc3N3b3JkOiBcIjEyMzRcIixcclxuICAvLyAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gc2lnbiB1cFwiLCBkYXRhKTtcclxuXHJcbiAgLy8gICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSBcImNvZGUtdmVyaWZpY2F0aW9uLXJlcXVpcmVkXCIpIHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZpY2F0aW9uIGNvZGUgcmVxdWlyZWRcIiwgZGF0YSk7XHJcbiAgLy8gICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIHN1Y2Nlc3NmdWxcIiwgZGF0YSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbnVwIGVycm9yOlwiLCBlKTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnblVwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTaWduIHVwIGJ1dHRvbiBjbGlja2VkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzaWdudXAoe1xyXG4gICAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiRG9lXCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwidGVzdEBleGFtcGxlLmNvbVwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIjEyMzQ1NlwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBmcm9tIHNpZ24gdXBcIiwgZGF0YSk7XHJcblxyXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IFwiY29kZS12ZXJpZmljYXRpb24tcmVxdWlyZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZpY2F0aW9uIGNvZGUgcmVxdWlyZWRcIiwgZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgc3VjY2Vzc2Z1bFwiLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiU2lnbnVwIGVycm9yOlwiLCBlKTtcclxuXHJcbiAgICAgIGlmIChlLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlc3BvbnNlIGRhdGE6XCIsIGUucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXR1czpcIiwgZS5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBoZWFkZXJzOlwiLCBlLnJlc3BvbnNlLmhlYWRlcnMpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUubWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBtZXNzYWdlOlwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOlwiLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItMTBcIj5TaWduIFVwIFBhZ2U8L2gyPlxyXG4gICAgICB7LyogVXNlIGNhcHRjaGFSZWYgb25seSBpZiBDYXB0Y2hhIGNvbXBvbmVudCBzdXBwb3J0cyByZWYgKi99XHJcbiAgICAgIDxDYXB0Y2hhIHJlZj17Y2FwdGNoYVJlZn0gLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gVXBcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXB0Y2hhIiwidXNlQWNjb3VudCIsIlNpZ25VcCIsImxvZ2luIiwiY2FwdGNoYVJlZiIsInNpZ251cCIsImhhbmRsZVNpZ25VcCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic3RhdHVzIiwiZSIsImVycm9yIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwibWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/SignUp.tsx\n");

/***/ })

};
;