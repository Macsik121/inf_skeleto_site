/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/render.tsx":
/*!***************************!*\
  !*** ./server/render.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Html */ \"./src/Html.tsx\");\n\n\n\nfunction render(req, res) {\n    res.write(\"<!DOCTYPE html>\");\n    react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToNodeStream(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_Html__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)).pipe(res);\n}\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./server/render.tsx?");

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./server/render.tsx\");\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar port = process.env.PORT || 3000;\napp.use(\"/\", express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](\"public\"));\napp.get(\"*\", _render__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.listen(port, function () { return console.log(\"Server has been started with port \".concat(port)); });\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./server/server.ts?");

/***/ }),

/***/ "./src/Html.tsx":
/*!**********************!*\
  !*** ./src/Html.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vars */ \"./vars.tsx\");\n\n\nvar HTML = function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"html\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"head\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", { charSet: \"UTF-8\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, _vars__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", { rel: \"stylesheet\", href: \"/app.styles.css\" })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"body\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { id: \"contents\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", { src: \"/app.bundle.js\" }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./src/Html.tsx?");

/***/ }),

/***/ "./vars.tsx":
/*!******************!*\
  !*** ./vars.tsx ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar vars = {\n    title: \"Наш сайт\",\n    hTitle: \"Поставки оружия, или любой другой заголовок\",\n    authors: [\"Даниил Робышев\", \"Андрей Малов\"],\n    authorsPhones: [\"+7...телефон Дани\", \"+7...телефон Андрея\"],\n    pagesContent: [\n        {\n            id: 1,\n            title: \"\",\n            content: [\n                {\n                    tag: \"ul\",\n                    class: \"main-list\",\n                    content: [\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { className: \"main-list-item creepy-item\", key: \"1\" },\n                            \"\\u041F\\u0435\\u0440\\u0432\\u044B\\u0439 \",\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: \"creepy-wrap\" }, \"horror\")),\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { className: \"main-list-item creepy-item\", key: \"2\" },\n                            \"\\u0427\\u0435\\u043C\\u00A0\",\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: \"neon\" }, \"\\u0441\\u0442\\u0440\\u0430\\u0448\\u043D\\u044B\"),\n                            \"\\u00A0\",\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: \"creepy-wrap\" }, \"horrors\")),\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", { className: \"main-list-item creepy-item\", key: \"3\" },\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: \"creepy-wrap\" }, \"Horrors\"),\n                            \", \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \",\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: \"neon\" }, \"\\u0441\\u0442\\u043E\\u0438\\u0442\"),\n                            \" \\u043F\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C\")\n                    ]\n                }\n            ]\n        },\n        {\n            id: 2,\n            title: \"\",\n            content: [\n                {\n                    tag: \"div\",\n                    class: \"Vpiska na hatye\",\n                    content: \"Something just like this Some content right here blablabla\"\n                },\n                {\n                    tag: \"div\",\n                    class: \"main-info\",\n                    content: \"sda8fu34iurhkjdbfgiuhwert\"\n                    // [\n                    //     <div>One more div</div>,\n                    //     <div>lasfdkjlsakdjflsakdjf</div>\n                    // ]\n                },\n                {\n                    tag: \"div\",\n                    content: \"Страх неизвестного. До тех пор пока не знаем, с чем конкретно мы столкнулись и как этому можно противостоять нам будет некомфортно. Этот прием применяться практически в каждом хорроре, не только играх но и в фильмах. Вспоминаем фильм Челюсти, где акулу не показывают полностью, только частями и конечно акулий плавник, который рассекает воду и нагнетает атмосферу.\"\n                },\n                {\n                    tag: \"div\",\n                    content: \"Страх не самая приятная эмоция, но страх страху рознь. Вам вряд ли захочется оказаться в реальной заброшенной психиатрической больнице вместе с призраками, а вот провести вечер за прохождением игры, просмотром фильма или сходить в развлекательный парк другое дело. И если раньше страх помогал нам выживать, то теперь он больше помогает снят стресс. Для того чтобы подобный страх работал так как нужно, необходим контролируемый относительно безопасный страх. С удовольствием в комментариях почитаю ваше отношение к хоррорам. Расскажите о своем любимом произведение и что именно вас в нем пугает или нравится.\"\n                },\n                {\n                    tag: \"div\",\n                    content: \"Много слов, в основном, я хочу, чтобы поиск было по слову хоррор, так что я иногда буду писать даже с ошибкой это слово, поэтому пожалуйста: орхор, хорьоръ и т.д и т.п\"\n                }\n            ]\n        },\n        {\n            id: 3,\n            title: \"\",\n            content: [\n                {\n                    tag: \"div\",\n                    content: \"Звуковое сопровождение играет огромную роль в создании нужной атмосферы. Применяется как довольно специфический саундтрек так и различные звуковые эффекты как скрипы, шорохи, вздохи, звук ветра, шагов и так далее, а также использование тишины. Следующим немаловажным приемом будет управление эмоциональным напряжением, с моментами пика и относительно спокойного геймплея, чтобы происходила разрядка.\"\n                },\n                {\n                    tag: \"div\",\n                    content: \"Тематически обширный и разнообразный круг фильмов, призванных вызвать у зрителей чувство страха, тревоги и неопределённости, создать напряжённую атмосферу ужаса или мучительного ожидания чего-либо ужасного — так называемый эффект «саспенс» (от англ. suspense — неопределённость). Однако касательно именования жанра существуют и другие мнения. Так, известный в хоррор-кругах актёр Кристовер Ли в одном из своих интервью, данном в 1975 году, утверждал, что термин «horror» неверен, поскольку ужас подразумевает чувство отвращения или омерзения, что отнюдь не является целью этих картин, по крайней мере, почти всегда. Условность таких фильмов делает их безвредными. Он настаивал на употреблении термина «film du fantastique» (фильм фантазии). Таким же термином французы обозначают определённый тип фильмов ужасов.\"\n                }\n            ]\n        },\n        {\n            id: 4,\n            title: \"\",\n            content: [\n                {\n                    tag: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\"),\n                    content: \"\"\n                }\n            ]\n        },\n        {\n            id: 5,\n            title: \"\",\n            content: [\n                {\n                    tag: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\"),\n                    content: \"\"\n                }\n            ]\n        }\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vars);\n\n\n//# sourceURL=webpack://danyas_w_andrew_site_skeleton/./vars.tsx?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.ts");
/******/ 	
/******/ })()
;