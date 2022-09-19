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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-columns: 1fr 4fr;\\n    height: 100vh;\\n}\\n\\n.sidebar {\\n    background-color: rgb(0, 110, 255);\\n    color: white;\\n    font-weight: bold;\\n    height: 100%;\\n    grid-column: 1/2;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5%;\\n    padding-top: 70px;\\n}\\n\\n#modal {\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    grid-column: 2/3;\\n    gap: 5%;\\n    padding-top: 70px;\\n    background-color: #fff3e6;\\n}\\n\\n#display {\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    grid-column: 2/3;\\n    gap: 5%;\\n    padding-top: 70px;\\n    background-color: #fff3e6;\\n}\\n\\n.todo {\\n    display: grid;\\n    grid-template-columns: 0.5fr 9fr 0.5fr;\\n    border: 2px solid black;\\n    padding: 1%;\\n    border-radius: 10px;\\n    min-width: 60em;\\n    gap: 1em;\\n}\\n\\n.top-row {\\n    display: flex;\\n    grid-column: 2/3;\\n    gap: 5em;\\n    font-size: larger;\\n    font-weight: bold;\\n    justify-content: space-between;\\n}\\n\\n.bottom-row {\\n    display: flex;\\n    grid-column: 2/3;\\n}\\n\\n.delete-column {\\n    display: grid;\\n    grid-column: 1/2;\\n}\\n\\n.delete-button {\\n    height: 20px;\\n    width: 20px;\\n    border-radius: 50%;\\n    border: 3px solid black;\\n    cursor: pointer;\\n}\\n\\n.priority-column {\\n    display: grid;\\n    grid-column: 3/4;\\n    grid-row: 1/2;\\n    justify-items: end;\\n}\\n\\n.priority-indicator {\\n    background: red;\\n    width: 15px;\\n    height: 15px;\\n    border-radius: 50%;\\n    cursor: pointer;\\n}\\n\\n.empty-description {\\n    font-style: italic;\\n    color: rgb(183, 180, 180);\\n}\\n\\n.icon {\\n    height: 20px;\\n    width: 20px;\\n}\\n\\n#new-project {\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add.js":
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"replace\": () => (/* binding */ replace),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\nconst list = [];\n\nfunction addTodo(title, description, dueDate, priority) {\n    const newTodo = (0,_item__WEBPACK_IMPORTED_MODULE_0__.todo)(title, description, dueDate, priority);\n    list.push(newTodo);\n    clear();\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.display)();\n}\n\nfunction clear() {\n    const todos = document.querySelectorAll(\".todo\");\n    todos.forEach(todo => {\n        todo.remove();\n    })\n}\n\nfunction removeTodo(remove) {\n    list.splice(remove, 1);\n    clear();\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.display)();\n}\n\nfunction submit() {\n    const submit = document.querySelector(\"#submit\");\n    submit.addEventListener(\"click\", function (e) {\n        let title = document.getElementById(\"new-title\").value;\n        let description = document.getElementById(\"new-description\").value;\n        let dueDate = document.getElementById(\"start\").value;\n        let select = document.getElementById(\"priority-group\");\n        let priority = select.options[select.selectedIndex].value;\n        if (title != \"\") {\n            addTodo(title, description, dueDate, priority);\n        }\n        e.preventDefault();\n    });\n}\n\nfunction replace(replaced, replacement) {\n\n    for (let i = 0; i < list.length; i++) {\n\n        function getObjKey(list, replaced) {\n            return Object.keys(list[i]).find(key => list[i][key] === replaced);\n        }\n\n        let value = getObjKey(list, replaced);\n\n        if (value === \"title\") {\n            const index = list.findIndex(object => {\n                return object.title === replaced;\n            })\n            if (index !== -1) {\n                list[index].title = replacement;\n            }\n        }\n\n        if (value === \"description\") {\n            const index = list.findIndex(object => {\n                return object.description === replaced;\n            })\n            if (index !== -1) {\n                list[index].description = replacement;\n            }\n        }\n    }\n\n    clear();\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.display)();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/add.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/add.js\");\n\n\nfunction sidebar () {\n    const container = document.querySelector(\".sidebar\");\n    const menu = container.appendChild(document.createElement(\"div\"));\n    menu.setAttribute(\"id\", \"menu\");\n    const inbox = menu.appendChild(document.createElement(\"div\"));\n    inbox.setAttribute(\"id\", \"inbox\");\n    const icon1 = inbox.appendChild(document.createElement(\"img\"));\n    icon1.src = \"../src/images/inbox.svg\";\n    icon1.setAttribute(\"class\", \"icon\");\n    const p1 = inbox.appendChild(document.createElement(\"p\"));\n    p1.innerText = \"Inbox\";\n    const today = menu.appendChild(document.createElement(\"div\"));\n    today.setAttribute(\"id\", \"today\");\n    const icon2 = inbox.appendChild(document.createElement(\"img\"));\n    icon2.src = \"../src/images/calendar-today.svg\";\n    icon2.setAttribute(\"class\", \"icon\");\n    const p2 = inbox.appendChild(document.createElement(\"p\"));\n    p2.innerText = \"Today\";\n    const week = menu.appendChild(document.createElement(\"div\"));\n    week.setAttribute(\"id\", \"week\");\n    const icon3 = inbox.appendChild(document.createElement(\"img\"));\n    icon3.src = \"../src/images/calendar-week.svg\";\n    icon3.setAttribute(\"class\", \"icon\");\n    const p3 = inbox.appendChild(document.createElement(\"p\"));\n    p3.innerText = \"This Week\";\n\n    const projects = container.appendChild(document.createElement(\"div\"));\n    projects.setAttribute(\"id\", \"projects\");\n    const title = projects.appendChild(document.createElement(\"h2\"));\n    title.textContent = \"Projects\";\n    const newProject = projects.appendChild(document.createElement(\"div\"));\n    newProject.setAttribute(\"id\",\"new-project\");\n    const icon4 = newProject.appendChild(document.createElement(\"img\"));\n    icon4.src = \"../src/images/plus-box.svg\";\n    icon4.setAttribute(\"class\", \"icon\");\n    const p4 = newProject.appendChild(document.createElement(\"p\"));\n    p4.innerText = \"Add project\";\n    newProject.addEventListener(\"click\", () => {\n        console.log(\"hey\");\n    });\n}\n\nfunction display() {\n    for (let i = 0; i < _add_js__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {\n\n        const container = document.getElementById(\"display\");\n        const div = container.appendChild(document.createElement(\"div\"));\n        div.setAttribute(\"class\", \"todo\");\n\n        const deleteColumn = div.appendChild(document.createElement(\"div\"));\n        deleteColumn.setAttribute(\"class\", \"delete-column\");\n        const btn = deleteColumn.appendChild(document.createElement(\"button\"));\n        btn.setAttribute(\"id\", [i]);\n        btn.setAttribute(\"class\", \"delete-button\");\n        btn.addEventListener(\"click\", () => {\n            let remove = btn.id;\n            (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(remove);\n        })\n\n        const topRow = div.appendChild(document.createElement(\"div\"));\n        topRow.setAttribute(\"class\", \"top-row\");\n\n        const bottomRow = div.appendChild(document.createElement(\"div\"));\n        bottomRow.setAttribute(\"class\", \"bottom-row\");\n\n        const priorityColumn = div.appendChild(document.createElement(\"div\"));\n        priorityColumn.setAttribute(\"class\", \"priority-column\");\n\n        for (let elem in _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i]) {\n            if (elem === \"title\") {\n                const p = topRow.appendChild(document.createElement(\"p\"));\n                p.setAttribute(\"id\", [elem]);\n                p.innerText = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem];\n            }\n            if (elem === \"dueDate\") {\n                const p = topRow.appendChild(document.createElement(\"p\"));\n                p.setAttribute(\"id\", [elem]);\n                p.innerText = \"Due in: \" + _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem];\n            }\n            if (elem === \"priority\") {\n                const div = priorityColumn.appendChild(document.createElement(\"div\"));\n                div.setAttribute(\"id\", [elem]);\n                div.setAttribute(\"class\", \"priority-indicator\");\n                if (_add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem] === \"low\") {\n                    div.style.background = \"green\";\n                }\n                if (_add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem] === \"medium\") {\n                    div.style.background = \"yellow\";\n                }\n                if (_add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem] === \"high\") {\n                    div.style.background = \"red\";\n                }\n            }\n            if (elem === \"description\") {\n                const div = bottomRow.appendChild(document.createElement(\"div\"));\n                div.setAttribute(\"id\", \"description\");\n                if (_add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem] === \"\") {\n                    const emptyDescription = div.appendChild(document.createElement(\"p\"));\n                    emptyDescription.setAttribute(\"class\", \"empty-description\");\n                    emptyDescription.innerText = \"Add a description\";\n                }\n                else {\n                    div.innerText = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i][elem];\n                }\n            }\n        }\n\n        const titles = document.querySelectorAll(\"#title\");\n        titles.forEach(title => {\n            title.addEventListener(\"click\", () => {\n                const input = document.createElement(\"input\");\n                input.setAttribute(\"class\", \"replace-title\");\n                title.replaceWith(input);\n                document.querySelector(\".replace-title\").select();\n                input.addEventListener(\"keydown\", (e) => {\n                    if (e.key === \"Enter\") {\n                        let replaced = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].title;\n                        let replacement = document.querySelector(\".replace-title\").value;\n                        (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.replace)(replaced, replacement);\n                    }\n                    if (e.key === \"Escape\") {\n                        let replaced = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].title;\n                        let replacement = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].title;\n                        (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.replace)(replaced, replacement);\n                    }\n                });\n            });\n        })\n\n        const descriptions = document.querySelectorAll(\"#description\");\n        descriptions.forEach(description => {\n            description.addEventListener(\"click\", () => {\n                const input = document.createElement(\"input\");\n                input.setAttribute(\"class\", \"replace-description\");\n                description.replaceWith(input);\n                document.querySelector(\".replace-description\").select();\n                input.addEventListener(\"keydown\", (e) => {\n                    if (e.key === \"Enter\") {\n                        let replaced = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].description;\n                        let replacement = document.querySelector(\".replace-description\").value;\n                        (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.replace)(replaced, replacement);\n                    }\n                    if (e.key === \"Escape\") {\n                        console.log(_add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].description);\n                        let replaced = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].description;\n                        let replacement = _add_js__WEBPACK_IMPORTED_MODULE_0__.list[i].description;\n                        (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.replace)(replaced, replacement);\n                    }\n                });\n            });\n        })\n\n        const priorities = document.querySelectorAll(\"#priority\");\n        priorities.forEach(priority => {\n            priority.addEventListener(\"click\", () => {\n                const input = document.createElement(\"select\");\n                input.setAttribute(\"class\", \"priority-group\");\n                let low = input.appendChild(document.createElement(\"option\"));\n                low.value = low;\n                low.textContent = \"Low\";\n                let medium = input.appendChild(document.createElement(\"option\"));\n                medium.value = medium;\n                medium.textContent = \"Medium\";\n                let high = input.appendChild(document.createElement(\"option\"));\n                high.value = high;\n                high.textContent = \"High\";\n                priority.replaceWith(input);\n            })\n        })\n\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _src_add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/add */ \"./src/add.js\");\n/* harmony import */ var _src_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/display */ \"./src/display.js\");\n\n\n\n\n(0,_src_display__WEBPACK_IMPORTED_MODULE_2__.sidebar)(), (0,_src_add__WEBPACK_IMPORTED_MODULE_1__.submit)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst todo =  (title, description, dueDate, priority) => {\n\n    let checklist = false;\n    let project = \"Default\";\n\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        checklist,  \n        project\n    };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/item.js?");

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