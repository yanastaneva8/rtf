"use strict";
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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./src/pages/_document.jsx":
/*!*********************************!*\
  !*** ./src/pages/_document.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modeScript = `\n  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')\n\n  updateMode()\n  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)\n  window.addEventListener('storage', updateModeWithoutTransitions)\n\n  function updateMode() {\n    let isSystemDarkMode = darkModeMediaQuery.matches\n    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)\n\n    if (isDarkMode) {\n      document.documentElement.classList.add('dark')\n    } else {\n      document.documentElement.classList.remove('dark')\n    }\n\n    if (isDarkMode === isSystemDarkMode) {\n      delete window.localStorage.isDarkMode\n    }\n  }\n\n  function disableTransitionsTemporarily() {\n    document.documentElement.classList.add('[&_*]:!transition-none')\n    window.setTimeout(() => {\n      document.documentElement.classList.remove('[&_*]:!transition-none')\n    }, 0)\n  }\n\n  function updateModeWithoutTransitions() {\n    disableTransitionsTemporarily()\n    updateMode()\n  }\n`;\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        className: \"h-full antialiased\",\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        dangerouslySetInnerHTML: {\n                            __html: modeScript\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"alternate\",\n                        type: \"application/rss+xml\",\n                        href: `${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`\n                    }, void 0, false, {\n                        fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"alternate\",\n                        type: \"application/feed+json\",\n                        href: `${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`\n                    }, void 0, false, {\n                        fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: \"flex h-full flex-col bg-zinc-50 dark:bg-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yanastaneva/Library/Mobile Documents/com~apple~CloudDocs/rtf/src/pages/_document.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNSSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDcEIsQ0FBQztBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDSiwrQ0FBSUE7UUFBQ0ssV0FBVTtRQUFxQkMsTUFBSzs7MEJBQ3hDLDhEQUFDUCwrQ0FBSUE7O2tDQUNILDhEQUFDUTt3QkFBT0MseUJBQXlCOzRCQUFFQyxRQUFRTjt3QkFBVzs7Ozs7O2tDQUN0RCw4REFBQ087d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQU0sR0FBR0MsUUFBUUMsR0FBRyxDQUFDQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7Ozs7OztrQ0FFMUQsOERBQUNOO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLO3dCQUNMQyxNQUFNLEdBQUdDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLENBQUMsY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7MEJBRzdELDhEQUFDQztnQkFBS1osV0FBVTs7a0NBQ2QsOERBQUNKLCtDQUFJQTs7Ozs7a0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkIiLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5hc3RhbmV2YS9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9ydGYvc3JjL3BhZ2VzL19kb2N1bWVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmNvbnN0IG1vZGVTY3JpcHQgPSBgXG4gIGxldCBkYXJrTW9kZU1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgdXBkYXRlTW9kZSgpXG4gIGRhcmtNb2RlTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVNb2RlV2l0aG91dFRyYW5zaXRpb25zKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHVwZGF0ZU1vZGVXaXRob3V0VHJhbnNpdGlvbnMpXG5cbiAgZnVuY3Rpb24gdXBkYXRlTW9kZSgpIHtcbiAgICBsZXQgaXNTeXN0ZW1EYXJrTW9kZSA9IGRhcmtNb2RlTWVkaWFRdWVyeS5tYXRjaGVzXG4gICAgbGV0IGlzRGFya01vZGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmlzRGFya01vZGUgPT09ICd0cnVlJyB8fCAoISgnaXNEYXJrTW9kZScgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkgJiYgaXNTeXN0ZW1EYXJrTW9kZSlcblxuICAgIGlmIChpc0RhcmtNb2RlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICB9XG5cbiAgICBpZiAoaXNEYXJrTW9kZSA9PT0gaXNTeXN0ZW1EYXJrTW9kZSkge1xuICAgICAgZGVsZXRlIHdpbmRvdy5sb2NhbFN0b3JhZ2UuaXNEYXJrTW9kZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVUcmFuc2l0aW9uc1RlbXBvcmFyaWx5KCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdbJl8qXTohdHJhbnNpdGlvbi1ub25lJylcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnWyZfKl06IXRyYW5zaXRpb24tbm9uZScpXG4gICAgfSwgMClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1vZGVXaXRob3V0VHJhbnNpdGlvbnMoKSB7XG4gICAgZGlzYWJsZVRyYW5zaXRpb25zVGVtcG9yYXJpbHkoKVxuICAgIHVwZGF0ZU1vZGUoKVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGNsYXNzTmFtZT1cImgtZnVsbCBhbnRpYWxpYXNlZFwiIGxhbmc9XCJlblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtb2RlU2NyaXB0IH19IC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiXG4gICAgICAgICAgaHJlZj17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkx9L3Jzcy9mZWVkLnhtbGB9XG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vZmVlZCtqc29uXCJcbiAgICAgICAgICBocmVmPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTH0vcnNzL2ZlZWQuanNvbmB9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCBiZy16aW5jLTUwIGRhcms6YmctYmxhY2tcIj5cbiAgICAgICAgPE1haW4gLz5cbiAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L0h0bWw+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSHRtbCIsIk1haW4iLCJOZXh0U2NyaXB0IiwibW9kZVNjcmlwdCIsIkRvY3VtZW50IiwiY2xhc3NOYW1lIiwibGFuZyIsInNjcmlwdCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwibGluayIsInJlbCIsInR5cGUiLCJocmVmIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJVEVfVVJMIiwiYm9keSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_document.jsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_document.jsx")));
module.exports = __webpack_exports__;

})();