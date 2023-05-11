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

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://elwebcesar/./src/css/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _components_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data.js */ \"./src/components/data.js\");\n// import './css/main.css';\n\n\n\n\nconst containerSkills = document.getElementById('skills');\nconst containerProjects = document.getElementById('projects');\n\n\n_components_data_js__WEBPACK_IMPORTED_MODULE_1__.skills.forEach(skill => {\n  const skillButton = document.createElement('button');\n  skillButton.textContent = skill;\n  skillButton.setAttribute('data-filter', skill);\n\n  const image = document.createElement('img');\n  image.src = `ruta/${skill.toLowerCase()}.svg`;\n\n  skillButton.appendChild(image);\n\n  containerSkills.appendChild(skillButton);\n});\n\nconst resetButton = document.createElement('button');\nresetButton.textContent = \"all\";\nresetButton.setAttribute('data-filter', \"all\");\ncontainerSkills.appendChild(resetButton);\n\n\n_components_data_js__WEBPACK_IMPORTED_MODULE_1__.projects.projects.forEach(project => {\n  const projectDiv = document.createElement('div');\n  const skills = project.skills.join(' ');\n\n  projectDiv.innerHTML = `\n    <h2>${project.name}</h2>\n    <img src=\"${project.image}\" alt=\"${project.name}\">\n    ${project.skills.map(skill => `${skill} `).join('')}\n    <ul>\n      ${project.details.map(detail => `<li>${detail}</li>`).join('')}\n    </ul>\n    <a href=\"${project.figma}\">Figma</a>\n    <a href=\"${project.link}\">Link</a>\n    <a href=\"${project.github}\">GitHub</a>\n  `;\n\n  projectDiv.setAttribute('data-filter', skills.toLowerCase());\n  containerProjects.appendChild(projectDiv);\n});\n\n\n\n\n\n\n//# sourceURL=webpack://elwebcesar/./src/app.js?");

/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"skills\": () => (/* binding */ skills)\n/* harmony export */ });\nconst skills = [\n  \"figma\", \"html5\", \"css\", \"sass\", \"jQuery\", \"JS\", \"React\", \"TypeScript\"\n]\n\nconst projects = {\n  'projects': [{\n          \"id\": 1,\n          \"name\": \"Universidad Surcolombiana\",\n          \"image\": \"usco.jpg\",\n          \"skills\": [\"figma\", \"html5\", \"css\", \"sass\", \"jQuery\", \"JS\"],\n          \"details\": [ \"HTML\", \"CSS\", \"Bootstrap\", \"SASS\", \"jQuery\", \"JS\", \"webpack\" ],\n          \"figma\": \"figma/3\",\n          \"link\": \"link/3\",\n          \"github\": \"github/3\",\n      },\n      {\n        \"id\": 1,\n        \"name\": \"Universidad Surcolombiana 2\",\n        \"image\": \"usco.jpg\",\n        \"skills\": [\"html5\", \"css\", \"react\"],\n        \"details\": [ \"HTML\", \"CSS\", \"Bootstrap\", \"SASS\", \"jQuery\", \"JS\", \"webpack\" ],\n        \"figma\": \"figma/32\",\n        \"link\": \"link/32\",\n        \"github\": \"github/32\",\n      }\n  ]\n};\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/data.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;