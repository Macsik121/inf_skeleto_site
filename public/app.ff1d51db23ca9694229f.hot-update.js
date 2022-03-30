"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatedanyas_w_andrew_site_skeleton"]("app",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/Footer.tsx\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routing */ \"./src/Routing.tsx\");\n/* harmony import */ var _SwitchTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwitchTheme */ \"./src/SwitchTheme.tsx\");\n/* harmony import */ var _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./darkLightThemes */ \"./src/darkLightThemes.ts\");\n/* harmony import */ var _Nabar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Nabar */ \"./src/Nabar.tsx\");\n/* harmony import */ var _Nabar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Nabar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ \"./src/Search.tsx\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\n\n\n\n\n\n\n\n\n\n\nvar darkTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].darkTheme, lightTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lightTheme, bgDarkTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bgDarkTheme, bgLightTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bgLightTheme, linksDarkTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].linksDarkTheme, linksLightTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].linksLightTheme, searchDarkTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].searchDarkTheme, searchLightTheme = _darkLightThemes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].searchLightTheme;\nvar App = function () {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"dark\"), theme = _a[0], setThemeFunc = _a[1];\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { style: theme == \"dark\" ? linksDarkTheme : linksLightTheme, className: \"nav-link\", to: \"\", key: \"1\" }, \"1\"),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { key: \"2\", style: theme == \"dark\" ? linksDarkTheme : linksLightTheme, className: \"nav-link\", to: \"page2\" }, \"2\"),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { key: \"3\", style: theme == \"dark\" ? linksDarkTheme : linksLightTheme, className: \"nav-link\", to: \"page3\" }, \"3\"),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { key: \"4\", style: theme == \"dark\" ? linksDarkTheme : linksLightTheme, className: \"nav-link\", to: \"page4\" }, \"4\")\n    ]), links = _b[0], setLinks = _b[1];\n    function setTheme() {\n        setThemeFunc(theme == \"dark\" ? \"light\" : \"dark\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        console.log(links);\n    }, [links]);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { style: theme == \"dark\" ? darkTheme : lightTheme, className: \"app\", id: \"app\" },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", { src: theme == \"dark\" ? _globals__WEBPACK_IMPORTED_MODULE_9__[\"default\"].__UI_SERVER_ENDPOINT__ + \"images/bg.gif\" : _globals__WEBPACK_IMPORTED_MODULE_9__[\"default\"].__UI_SERVER_ENDPOINT__ + \"images/bg2.gif\", style: theme == \"dark\"\n                ? bgDarkTheme\n                : bgLightTheme, alt: \"background\", className: \"app-background\" }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"container\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Search__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { styles: { searchDarkTheme: searchDarkTheme, searchLightTheme: searchLightTheme }, theme: theme }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"main\" },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"container\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Routing__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { styles: {\n                            darkTheme: darkTheme,\n                            lightTheme: lightTheme,\n                            linksDarkTheme: linksDarkTheme,\n                            linksLightTheme: linksLightTheme\n                        }, theme: theme, setTheme: setTheme, links: links, setLinks: setLinks })))),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SwitchTheme__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { setTheme: setTheme, theme: theme }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement((_Nabar__WEBPACK_IMPORTED_MODULE_7___default()), { styles: { linksDarkTheme: linksDarkTheme, linksLightTheme: linksLightTheme }, theme: theme, links: links }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null,\n    react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null)), document.getElementById(\"contents\"));\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/App.tsx?");

/***/ }),

/***/ "./src/Pages/Page2.tsx":
/*!*****************************!*\
  !*** ./src/Pages/Page2.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContent */ \"./src/Pages/PageContent.tsx\");\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ \"./src/Video.tsx\");\n\n\n\nvar Page2 = function () {\n    var pageId = 2;\n    var pageContent = (0,_PageContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pageId);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"page2\" },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Video__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"main-content\" }, pageContent)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page2);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Pages/Page2.tsx?");

/***/ }),

/***/ "./src/Pages/Page3.tsx":
/*!*****************************!*\
  !*** ./src/Pages/Page3.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContent */ \"./src/Pages/PageContent.tsx\");\n\n\nvar Page3 = function () {\n    var pageId = 3;\n    var pageContent = (0,_PageContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pageId);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"page3\" }, pageContent));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page3);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Pages/Page3.tsx?");

/***/ }),

/***/ "./src/Pages/Page4.tsx":
/*!*****************************!*\
  !*** ./src/Pages/Page4.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContent */ \"./src/Pages/PageContent.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n\n\nvar Page4 = function (_a) {\n    var links = _a.links, setLinks = _a.setLinks, theme = _a.theme, _b = _a.styles, linksDarkTheme = _b.linksDarkTheme, linksLightTheme = _b.linksLightTheme;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        var newLinks = __spreadArray([], links, true);\n        var styles = {};\n        if (theme == \"dark\") {\n            styles = __assign({}, linksDarkTheme);\n        }\n        else if (theme == \"light\") {\n            styles = __assign({}, linksDarkTheme);\n        }\n        styles.transform = \"translateY(-25px)\";\n        styles.opacity = \"0\";\n        styles.pointerEvents = \"none\";\n        styles.transition = \"300ms\";\n        newLinks.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { style: styles, className: \"nav-link\", to: \"page5\", id: \"fivthNavLink\", key: \"5\" }, \"5\"));\n        setLinks(newLinks);\n        setTimeout(function () {\n            var link = document.getElementById(\"fivthNavLink\");\n            link.style.transform = \"translateY(0)\";\n            link.style.opacity = \"1\";\n            link.style.pointerEvents = \"all\";\n        }, 1000);\n        return function () {\n            setLinks(function (oldLinks) {\n                var _newLinks = __spreadArray([], oldLinks, true);\n                _newLinks.pop();\n                return _newLinks;\n            });\n        };\n    }, []);\n    var pageId = 4;\n    var pageContent = (0,_PageContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"page4\" }, pageContent));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page4);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Pages/Page4.tsx?");

/***/ }),

/***/ "./src/Pages/Page5.tsx":
/*!*****************************!*\
  !*** ./src/Pages/Page5.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar Page5 = function () {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), animationCompleted = _a[0], setAnimationCompleted = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        var app = document.getElementById(\"app\");\n        if (animationCompleted) {\n            app.style.transition = \"500ms\";\n            app.style.transform = \"translateY(0)\";\n            app.style.opacity = \"1\";\n            app.style.pointerEvents = \"all\";\n        }\n        else {\n            app.style.transition = \"0\";\n            app.style.transform = \"translateY(25px)\";\n            app.style.opacity = \"0\";\n            app.style.pointerEvents = \"none\";\n        }\n    }, [animationCompleted]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        setTimeout(function () {\n            setAnimationCompleted(true);\n        }, 2000);\n        return function () {\n            var app = document.getElementById(\"app\");\n            app.style.transition = null;\n        };\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"page5\" }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page5);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Pages/Page5.tsx?");

/***/ }),

/***/ "./src/Pages/PageContent.tsx":
/*!***********************************!*\
  !*** ./src/Pages/PageContent.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageContent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vars */ \"./vars.tsx\");\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vars__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PageContent(pageId) {\n    pageId--;\n    var pageContent = (_vars__WEBPACK_IMPORTED_MODULE_1___default().pagesContent)[pageId].content.map(function (pageContent, i) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(pageContent.tag, { key: i, className: pageContent.class, children: pageContent.content })); });\n    return pageContent;\n}\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Pages/PageContent.tsx?");

/***/ }),

/***/ "./src/Pages/index.tsx":
/*!*****************************!*\
  !*** ./src/Pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContent */ \"./src/Pages/PageContent.tsx\");\n\n\nvar Home = function (_a) {\n    var styles = _a.styles\n    // : {\n    //     linksDarkTheme,\n    //     linksLightTheme\n    // }\n    , theme = _a.theme;\n    var pageId = 1;\n    var pageContent = (0,_PageContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pageId);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"home\" }, pageContent));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Pages/index.tsx?");

/***/ }),

/***/ "./src/Routing.tsx":
/*!*************************!*\
  !*** ./src/Routing.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages */ \"./src/Pages/index.tsx\");\n/* harmony import */ var _Pages_Page2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Page2 */ \"./src/Pages/Page2.tsx\");\n/* harmony import */ var _Pages_Page3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Page3 */ \"./src/Pages/Page3.tsx\");\n/* harmony import */ var _Pages_Page4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/Page4 */ \"./src/Pages/Page4.tsx\");\n/* harmony import */ var _Pages_Page5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/Page5 */ \"./src/Pages/Page5.tsx\");\n\n\n\n\n\n\n\nvar Routing = function (_a) {\n    var styles = _a.styles, theme = _a.theme, setTheme = _a.setTheme, links = _a.links, setLinks = _a.setLinks;\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: \"\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { index: true, element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { styles: styles, theme: theme }) })),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: \"page2\", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_Page2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: \"page3\", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_Page3__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: \"page4\", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_Page4__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { links: links, setLinks: setLinks, styles: styles, theme: theme }) }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: \"page5\", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_Page5__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null) })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routing);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Routing.tsx?");

/***/ }),

/***/ "./src/Video.tsx":
/*!***********************!*\
  !*** ./src/Video.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar Video = function () {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { var video = document.getElementById(\"video\"); video === null || video === void 0 ? void 0 : video.play(); }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"video\", { className: \"video\", id: \"video\", controls: true, autoPlay: true, loop: true },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"source\", { src: \"/images/video.mp4\", type: \"video/mp4\" }))\n    // <img className=\"video\" src=\"/images/video.gif\" alt=\"Video\" />\n    );\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Video.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7384dfa6dd27f6167349")
/******/ })();
/******/ 
/******/ }
);