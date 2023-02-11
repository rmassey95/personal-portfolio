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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Mulish-Regular.ttf */ \"./src/Mulish-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Mulish\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n  font-weight: 400;\\n}\\n\\nbody {\\n  font-family: \\\"Mulish\\\", Arial, Helvetica, sans-serif;\\n  margin: 0;\\n  background-color: rgb(237, 236, 232);\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 15px;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  box-sizing: border-box;\\n  border-bottom: 1px solid rgba(102, 102, 110, 0.2);\\n  box-shadow: 0 2px 10px rgb(102 102 110 / 0.2);\\n  background-color: rgb(237, 236, 232);\\n  z-index: 1;\\n}\\n\\n.navbar-mobile {\\n  flex-direction: column;\\n  align-items: flex-start;\\n}\\n\\n.top-navbar {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.navbar-btn,\\n.navbar-btn-name {\\n  border: none;\\n  cursor: pointer;\\n  padding: 0;\\n  color: rgb(60, 60, 65);\\n  font-weight: 500;\\n  background-color: rgb(237, 236, 232);\\n}\\n\\n.icon {\\n  height: 28px;\\n  width: 28px;\\n  padding: 0;\\n  margin: 0;\\n  border: none;\\n}\\n\\n.icon-img {\\n  height: 28px;\\n  width: 28px;\\n}\\n\\n.navbar-btn-name {\\n  font-size: 22px;\\n}\\n\\n.navbar-btn {\\n  font-size: 18px;\\n  border-bottom: 1px solid transparent;\\n  transition: border-color 0.5s ease-in-out;\\n}\\n\\n.navbar-btn:hover {\\n  border-bottom-color: rgba(102, 102, 110, 0.4);\\n}\\n\\n.contact-btn {\\n  border: none;\\n  border-bottom: 1px solid transparent;\\n}\\n\\n#mobile-navbar-links {\\n  box-shadow: 0 -3px 2px -2px rgb(102 102 110 / 0.2);\\n  width: 100%;\\n  margin: 0;\\n  padding-top: 20px;\\n  list-style-type: none;\\n  gap: 20px;\\n  flex-direction: column;\\n  box-sizing: border-box;\\n  margin-top: 20px;\\n}\\n\\n#mobile-navbar-links li button {\\n  color: rgb(60, 60, 65);\\n}\\n\\nmain {\\n  position: relative;\\n  z-index: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.navbar-items {\\n  display: flex;\\n  align-items: center;\\n  margin: 0;\\n  padding: 0;\\n  gap: 20px;\\n}\\n\\n.welcome-pg {\\n  min-height: calc(100vh - 2px);\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.welcome-container {\\n  text-align: center;\\n  width: calc(100% - 80px);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  flex-grow: 1;\\n  box-shadow: 0 3px 2px -2px rgb(102 102 110 / 0.2);\\n}\\n\\nh1 {\\n  color: rgb(102, 102, 110);\\n  margin: 0;\\n}\\n\\n.welcome-name {\\n  color: rgb(243, 146, 55);\\n}\\n\\n.dropdown-text-animation {\\n  animation: 1.2s drop-text 1 0.8s forwards;\\n  opacity: 0;\\n}\\n\\n@keyframes drop-text {\\n  0% {\\n    transform: translateY(-200px);\\n    opacity: 0;\\n  }\\n  5% {\\n    opacity: 0.2;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n\\n.about-me-pg {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.about-me-container,\\n.portfolio-container {\\n  box-shadow: 0 3px 2px -2px rgb(102 102 110 / 0.2);\\n}\\n\\n.contact-container,\\n.about-me-container,\\n.portfolio-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-bottom: 20px;\\n  position: relative;\\n  width: calc(100% - 80px);\\n}\\n\\n.contact-container {\\n  padding-bottom: 40px;\\n}\\n\\n.anchor {\\n  position: absolute;\\n  top: -56px;\\n  left: 0px;\\n}\\n\\n.inner-text {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.portfolio-pg {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\nh3 {\\n  margin: 0;\\n}\\n\\n.about-me-pg p,\\n.top-info p {\\n  margin-top: 15px;\\n  margin-left: 25px;\\n  margin-bottom: 15px;\\n}\\n\\n.bottom-info p {\\n  margin: 0;\\n  padding-bottom: 10px;\\n}\\n\\n.buttons {\\n  float: right;\\n  display: flex;\\n  gap: 8px;\\n}\\n\\n.project-btn,\\n.submit-btn {\\n  border-radius: 6px;\\n  border: none;\\n  padding: 10px;\\n  background-color: rgb(237, 236, 232);\\n  color: rgb(60, 60, 65);\\n  font-weight: 600;\\n}\\n\\n.project-btn:hover,\\n.submit-btn:hover {\\n  cursor: pointer;\\n  background-color: rgb(210, 210, 210);\\n}\\n\\n.disabled-btn:hover {\\n  cursor: not-allowed;\\n  background-color: rgb(252, 187, 187);\\n}\\n\\n.about-text,\\n.skills-text,\\n.project {\\n  margin: 40px;\\n  background-color: white;\\n  padding: 20px;\\n  border-radius: 10px;\\n  color: rgb(60, 60, 65);\\n}\\n\\n.project {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  margin-bottom: 20px;\\n  box-shadow: 2px 2px 8px 0 rgb(210, 210, 210);\\n}\\n\\n.project-img {\\n  padding: 20px;\\n}\\n\\n.project-img img {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.project-text {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  padding: 10px 10px 20px 10px;\\n}\\n\\n.contact-pg {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n}\\n\\n.map-container {\\n  height: auto;\\n  width: 350px;\\n  flex-shrink: 0;\\n}\\n\\n.map {\\n  width: 350px;\\n  border-top-right-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n  height: 100%;\\n}\\n\\n.form-container {\\n  display: flex;\\n  width: 85%;\\n  background-color: white;\\n  border-radius: 10px;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  color: rgb(60, 60, 65);\\n  width: 100%;\\n  padding: 15px 40px 15px 40px;\\n  font-size: 16px;\\n}\\n\\n.input-and-label {\\n  margin: 6px;\\n}\\n\\n.submit-btn {\\n  width: 80px;\\n  height: 35px;\\n  float: right;\\n  margin-left: auto;\\n  margin-right: 6px;\\n  margin-bottom: 12px;\\n}\\n\\n.top-input {\\n  margin-top: 12px;\\n}\\n\\n.linkedin,\\n.footer-btn {\\n  height: 32px;\\n  width: 32px;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 80px;\\n  padding: 15px;\\n  box-shadow: 0 -2px 10px rgb(102 102 110 / 0.2);\\n}\\n\\n.footer-btn {\\n  margin: 0;\\n  padding: 0;\\n  border: none;\\n}\\n\\n.footer-btn:hover {\\n  transform: scale(1.2);\\n  cursor: pointer;\\n}\\n\\ninput,\\ntextarea {\\n  width: 100%;\\n  height: auto;\\n  box-sizing: border-box;\\n  font-size: 14px;\\n  padding: 5px;\\n}\\n\\ntextarea {\\n  font-family: \\\"Mulish\\\", Arial, Helvetica, sans-serif;\\n  height: 200px;\\n  font-size: 14px;\\n}\\n\\nlabel {\\n  display: block;\\n  padding-bottom: 2px;\\n}\\n\\nh2 {\\n  color: rgb(243, 146, 55);\\n}\\n\\n#icon {\\n  display: none;\\n}\\n\\n.btn-update {\\n  text-align: right;\\n  font-size: smaller;\\n}\\n\\n@media (min-width: 1130px) {\\n  .about-me-pg,\\n  .welcome-pg,\\n  .portfolio-pg,\\n  .contact-pg {\\n    width: 1130px;\\n  }\\n}\\n\\n@media (max-width: 900px) {\\n  .map-container {\\n    display: none;\\n  }\\n}\\n\\n@media (max-width: 800px) {\\n  .inner-text {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .about-text,\\n  .skills-text,\\n  .project {\\n    margin: 0;\\n    margin-bottom: 20px;\\n    padding: 5px;\\n    font-size: 16px;\\n  }\\n\\n  .form-container {\\n    width: 100%;\\n  }\\n\\n  .contact-container {\\n    width: calc(100% - 100px);\\n  }\\n\\n  .form {\\n    padding: 10px 20px 10px 20px;\\n  }\\n\\n  .submit-btn {\\n    margin-bottom: 0;\\n  }\\n\\n  .top-input {\\n    margin-top: 0;\\n  }\\n\\n  .project-text {\\n    padding-bottom: 0;\\n  }\\n\\n  .project-img {\\n    padding: 10px;\\n  }\\n}\\n\\n@media (min-width: 550px) {\\n  #mobile-navbar-links {\\n    display: none !important;\\n  }\\n  .navbar-mobile {\\n    flex-direction: row;\\n    align-items: center;\\n  }\\n}\\n\\n@media (max-width: 550px) {\\n  #icon {\\n    display: block;\\n  }\\n\\n  .welcome-container {\\n    font-size: 14px;\\n  }\\n\\n  .inner-text {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .about-text,\\n  .skills-text,\\n  .project {\\n    margin: 0;\\n    margin-bottom: 20px;\\n    padding: 5px;\\n    font-size: 12px;\\n  }\\n\\n  .project {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .contact-pg,\\n  .form-container {\\n    width: 100%;\\n  }\\n\\n  .form {\\n    padding: 5px 10px 5px 10px;\\n  }\\n\\n  .submit-btn {\\n    margin-bottom: 0;\\n  }\\n\\n  .top-input {\\n    margin-top: 0;\\n  }\\n\\n  .project-text {\\n    padding-bottom: 0;\\n  }\\n\\n  .project-img {\\n    padding: 10px;\\n  }\\n\\n  .navbar-items {\\n    display: none;\\n  }\\n\\n  .contact-container,\\n  .about-me-container,\\n  .portfolio-container,\\n  .welcome-container {\\n    width: calc(100% - 20px);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://personal-portfolio/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://personal-portfolio/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://personal-portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Email.js":
/*!**********************!*\
  !*** ./src/Email.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* SmtpJS.com - v3.0.0 */\nvar Email = {\n  send: function (a) {\n    return new Promise(function (n, e) {\n      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = \"Send\");\n      var t = JSON.stringify(a);\n      Email.ajaxPost(\"https://smtpjs.com/v3/smtpjs.aspx?\", t, function (e) {\n        n(e);\n      });\n    });\n  },\n  ajaxPost: function (e, n, t) {\n    var a = Email.createCORSRequest(\"POST\", e);\n    a.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\"),\n      (a.onload = function () {\n        var e = a.responseText;\n        null != t && t(e);\n      }),\n      a.send(n);\n  },\n  ajax: function (e, n) {\n    var t = Email.createCORSRequest(\"GET\", e);\n    (t.onload = function () {\n      var e = t.responseText;\n      null != n && n(e);\n    }),\n      t.send();\n  },\n  createCORSRequest: function (e, n) {\n    var t = new XMLHttpRequest();\n    return (\n      \"withCredentials\" in t\n        ? t.open(e, n, !0)\n        : \"undefined\" != typeof XDomainRequest\n        ? (t = new XDomainRequest()).open(e, n)\n        : (t = null),\n      t\n    );\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);\n\n\n//# sourceURL=webpack://personal-portfolio/./src/Email.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email */ \"./src/Email.js\");\n\n\n\nconst linkedinBtn = document.querySelector(\"#linkedin-btn\");\nlinkedinBtn.onclick = () => {\n  location.href = \"https://www.linkedin.com/in/ryanmassey2573/\";\n};\n\nconst githubBtn = document.querySelector(\"#github-btn\");\ngithubBtn.onclick = () => {\n  location.href = \"https://github.com/rmassey95?tab=repositories\";\n};\n\nconst contactForm = document.querySelector(\"#contact-form\");\n\nfunction sendEmail(data) {\n  _Email__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send({\n    SecureToken: \"221d3df8-b6f4-4eb8-a1c2-958cda44cd45\",\n    To: \"rmassey.95@gmail.com\",\n    From: \"rmassey.95@gmail.com\",\n    Subject: `${data.subject}`,\n    Body: `NAME: ${data.name}, EMAIL: ${data.email} \n    MESSAGE: ${data.msg}`,\n  }).then((message) => alert(message));\n}\n\ncontactForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const data = {};\n  data.name = e.target[0].value;\n  data.email = e.target[1].value;\n  data.subject = e.target[2].value;\n  data.msg = e.target[3].value;\n\n  sendEmail(data);\n});\n\nconst mobileNavBtn = document.querySelector(\"#icon\");\n\nmobileNavBtn.addEventListener(\"click\", () => {\n  const mobileNavbar = document.querySelector(\"#mobile-navbar-links\");\n  const navbar = document.querySelector(\".navbar\");\n  if (mobileNavbar.style.display === \"none\") {\n    mobileNavbar.style.display = \"flex\";\n    navbar.classList.add(\"navbar-mobile\");\n  } else {\n    mobileNavbar.style.display = \"none\";\n    navbar.classList.remove(\"navbar-mobile\");\n  }\n});\n\n\n//# sourceURL=webpack://personal-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/Mulish-Regular.ttf":
/*!********************************!*\
  !*** ./src/Mulish-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e497fc540939821b16a0.ttf\";\n\n//# sourceURL=webpack://personal-portfolio/./src/Mulish-Regular.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;