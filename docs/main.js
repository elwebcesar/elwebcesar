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

/***/ "./src/components/filtering/filtering.scss":
/*!*************************************************!*\
  !*** ./src/components/filtering/filtering.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/filtering/filtering.scss?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://elwebcesar/./src/sass/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _components_data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data/data.js */ \"./src/components/data/data.js\");\n/* harmony import */ var _components_elementsRemoveStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/elementsRemoveStyle */ \"./src/components/elementsRemoveStyle.js\");\n/* harmony import */ var _components_createButtonWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createButtonWithImage.js */ \"./src/components/createButtonWithImage.js\");\n/* harmony import */ var _components_createCardProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/createCardProject */ \"./src/components/createCardProject.js\");\n/* harmony import */ var _components_createCardProjectSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/createCardProjectSkeleton */ \"./src/components/createCardProjectSkeleton.js\");\n/* harmony import */ var _components_filtering_filtering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filtering/filtering */ \"./src/components/filtering/filtering.js\");\n\n\n\n\n\n\n\n\n\n// General selectors\nconst containerSkills = document.getElementById('skills');\nconst containerProjects = document.getElementById('projects');\n\n// General variables\nconst routeImage = \"asset\";\nconst timeInterval = 200;\nconst dataResetFilters = 'return';\n\n\n// ------------------------------------------------------------\n// Skills\n// ------------------------------------------------------------\n_components_data_data_js__WEBPACK_IMPORTED_MODULE_1__.skills.forEach(skill => {\n  (0,_components_createButtonWithImage_js__WEBPACK_IMPORTED_MODULE_3__.createButtonWithImage)(skill, containerSkills, routeImage);\n});\n\nconst elements = containerSkills.querySelectorAll('button');\nsetTimeout(() => {\n  (0,_components_elementsRemoveStyle__WEBPACK_IMPORTED_MODULE_2__.elementsRemoveStyle)(elements,'opacity0',timeInterval);\n}, timeInterval*4);\n\n(0,_components_createButtonWithImage_js__WEBPACK_IMPORTED_MODULE_3__.createButtonWithImage)(dataResetFilters, containerSkills, routeImage);\n\n\n// ------------------------------------------------------------\n// Projects\n// ------------------------------------------------------------\n(0,_components_createCardProjectSkeleton__WEBPACK_IMPORTED_MODULE_5__.createCardProjectSkeleton)(_components_data_data_js__WEBPACK_IMPORTED_MODULE_1__.projects.projects.length, containerProjects);\n\nconst projectsElements = (0,_components_createCardProject__WEBPACK_IMPORTED_MODULE_4__.createCardProject)(_components_data_data_js__WEBPACK_IMPORTED_MODULE_1__.projects);\nconsole.log(projectsElements);\n\n\nsetTimeout(() => {\n  containerProjects.innerHTML = \"\";\n\n  projectsElements.forEach(element => {\n    containerProjects.appendChild(element);\n  });\n}, timeInterval*16);\n\n\n// ------------------------------------------------------------\n// Filtering\n// ------------------------------------------------------------\nconst classNoDisplay = 'opacity0';\nconst classActive = 'active';\nconst classShow = 'show';\nconst classHide = 'hide';\n\n// selectors\nconst filters = containerSkills.querySelectorAll('button');\nconst buttonAll = containerSkills.querySelector(`button[data-filter=\"${dataResetFilters}\"]`);\n\n(0,_components_filtering_filtering__WEBPACK_IMPORTED_MODULE_6__.filtering)(dataResetFilters, classNoDisplay, classActive, classShow, classHide, filters, buttonAll, projectsElements);\n\n\n//# sourceURL=webpack://elwebcesar/./src/app.js?");

/***/ }),

/***/ "./src/components/createButtonWithImage.js":
/*!*************************************************!*\
  !*** ./src/components/createButtonWithImage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButtonWithImage\": () => (/* binding */ createButtonWithImage)\n/* harmony export */ });\nfunction createButtonWithImage(name, containerButtons, routeImage) {\n    const Button = document.createElement('button');\n    Button.setAttribute('data-filter', name.toLowerCase());\n    Button.setAttribute('title', `Projects with: ${name}`);\n    Button.classList.add('opacity0'); // style to animation - fade in\n\n    const image = document.createElement('img');\n    image.src = `${routeImage}/${name.toLowerCase()}.svg`;\n    Button.appendChild(image);\n\n    containerButtons.appendChild(Button);\n}\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/createButtonWithImage.js?");

/***/ }),

/***/ "./src/components/createCardProject.js":
/*!*********************************************!*\
  !*** ./src/components/createCardProject.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCardProject\": () => (/* binding */ createCardProject)\n/* harmony export */ });\nconst routeImagePorject = \"./asset/projects/\";\n\nfunction createCardProject(projects, containerProjects) {\n  const projectElements = [];\n\n  projects.projects.forEach(project => {\n    const projectDiv = document.createElement('div');\n    const skills = project.skills.join(' ');\n\n    projectDiv.setAttribute('data-filter', skills.toLowerCase());\n\n    projectDiv.innerHTML = `\n      <div class=\"projects__info\"\">\n        <div class=\"projects__info--items\">\n          <div>\n            <h3>${project.name}</h3>\n            <ul>\n              ${project.details.map(skill => `<li>${skill}</li>`).join('')}\n            </ul>    \n          </div>\n        </div>\n        <div class=\"projects__info--image\">\n          <div><span></span></div>\n          <img src=\"${routeImagePorject}${project.image}\" alt=\"${project.name}\">\n        </div>\n        <div class=\"projects__info--links\">\n          <a href=\"${project.link}\" target=\"_blank\"><img src=\"./asset/link.svg\" alt=\"View project\"></a>\n          ${project.figma !== '' ? `<a href=\"${project.figma}\" target=\"_blank\"><img src=\"./asset/figma-white.svg\" alt=\"View in Figma\"></a>` : ''}\n          ${project.github !== '' ? `<a href=\"${project.github}\" target=\"_blank\"><img src=\"./asset/github.svg\" alt=\"View in Github\"></a>` : ''}\n        </div>\n      </div>\n    `;\n    projectElements.push(projectDiv);\n  });\n\n  return projectElements;\n}\n\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/createCardProject.js?");

/***/ }),

/***/ "./src/components/createCardProjectSkeleton.js":
/*!*****************************************************!*\
  !*** ./src/components/createCardProjectSkeleton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCardProjectSkeleton\": () => (/* binding */ createCardProjectSkeleton)\n/* harmony export */ });\nfunction createCardProjectSkeleton(projects, containerProjects) {\n  for (let i = 0; i < projects; i++) {\n    const projectDiv = document.createElement('div');\n\n    projectDiv.innerHTML = '<div class=\"projects__skeleton\"></div>';\n\n    containerProjects.appendChild(projectDiv);\n  }\n}\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/createCardProjectSkeleton.js?");

/***/ }),

/***/ "./src/components/data/data.js":
/*!*************************************!*\
  !*** ./src/components/data/data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"skills\": () => (/* binding */ skills)\n/* harmony export */ });\nconst skills = [\n  \"figma\", \"HTML5\", \"css\", \"sass\", \"jQuery\", \"JS\", \"React\", \"TypeScript\"\n]\n\nconst projects = {\n  'projects': [{\n          \"name\": \"Universidad Surcolombiana\",\n          \"image\": \"usco.png\",\n          \"skills\": [\"figma\", \"HTML5\", \"CSS\", \"Sass\", \"jQuery\", \"JS\"],\n          \"details\": [ \"HTML5\", \"CSS\", \"Bootstrap\", \"Sass\", \"jQuery\", \"JS\", \"webpack\" ],\n          \"figma\": \"https://www.figma.com/proto/KHdZh74kpBuy5PVaki0sPN/Usco-porta-v.7?node-id=1505-8259\",\n          \"link\": \"https://usco.edu.co/es/\",\n          \"github\": \"https://github.com/elwebcesar/boilerplate-usco-2022\",\n      },\n      {\n        \"name\": \"React & api & typescript\",\n        \"image\": \"mercado.png\",\n        \"skills\": [\"HTML5\", \"Sass\", \"react\", \"TypeScript\"],\n        \"details\": [\"HTML5\", \"Sass\", \"API REST\", \"React\", \"TypeScript\"],\n        \"figma\": \"\",\n        \"link\": \"https://react-api-typescript.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/challenge-frontend-mercadolibre\",\n      },\n      {\n        \"name\": \"Filter view products\",\n        \"image\": \"shopping.jpg\",\n        \"skills\": [\"HTML5\", \"CSS\", \"Sass\", \"JS Components\"],\n        \"details\": [ \"HTML5\", \"CSS\", \"Bootstrap\", \"Sass\", \"JS\" ],\n        \"figma\": \"\",\n        \"link\": \"https://shopping-cart-js-module.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/Desenvolvedor-M3/tree/master/shopping-cart-cesar-fernandez\",\n      },\n      {\n        \"name\": \"React Access & api & typescript\",\n        \"image\": \"skeleton.png\",\n        \"skills\": [\"HTML5\", \"Sass\", \"react\", \"TypeScript\"],\n        \"details\": [\"HTML5\", \"Sass\", \"API REST\", \"React\", \"TypeScript\"],\n        \"figma\": \"\",\n        \"link\": \"https://react-acess-api-typescript.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/typescript-asd\",\n      },\n      {\n        \"name\": \"UNAD, Datos abiertos\",\n        \"image\": \"datos.png\",\n        \"skills\": [\"figma\", \"HTML5\", \"CSS\", \"Sass\", \"JS\"],\n        \"details\": [ \"HTML5\", \"Bootstrap\", \"Sass\", \"JS\" ],\n        \"figma\": \"https://www.figma.com/proto/W0EeSk5SXYuR6KKCnV0s1x/UNAD?node-id=820-4292\",\n        \"link\": \"https://datos.unad.edu.co/\",\n        \"github\": \"https://github.com/elwebcesar/portal-datos-abiertos-unad\",\n      },\n      {\n        \"name\": \"unsplash api - filtering - loading\",\n        \"image\": \"colums.png\",\n        \"skills\": [\"HTML5\", \"CSS\", \"Sass\", \"JS\"],\n        \"details\": [ \"HTML5\", \"Sass\", \"JS\", \"API REST\"],\n        \"figma\": \"\",\n        \"link\": \"https://js-api-unsplash-filtering.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/js-api-unsplash-filtering\",\n      },\n      {\n        \"name\": \"Portal de Servicios, UNAD\",\n        \"image\": \"servicios.png\",\n        \"skills\": [\"figma\", \"HTML5\", \"CSS\", \"Sass\", \"jQuery\"],\n        \"details\": [ \"HTML5\", \"CSS\", \"Bootstrap\", \"Sass\", \"jQuery\" ],\n        \"figma\": \"https://www.figma.com/proto/W0EeSk5SXYuR6KKCnV0s1x/UNAD?type=design&node-id=1410-246&scaling=min-zoom&page-id=1410%3A2\",\n        \"link\": \"https://portal-de-servicios-unad.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/portal-servicios-unad\",\n      },\n      {\n        \"name\": \"React validated form\",\n        \"image\": \"form.png\",\n        \"skills\": [\"HTML5\", \"CSS\", \"React\"],\n        \"details\": [ \"HTML5\", \"CSS\", \"React\" ],\n        \"figma\": \"\",\n        \"link\": \"https://react-validate-form.netlify.app\",\n        \"github\": \"https://github.com/elwebcesar/react-formik-validation\",\n      },\n      {\n        \"name\": \"Landing page\",\n        \"image\": \"autos.jpg\",\n        \"skills\": [\"HTML5\", \"CSS\", \"jQuery\"],\n        \"details\": [ \"HTML5\", \"CSS\", \"jQuery\" ],\n        \"figma\": \"\",\n        \"link\": \"https://landing-demcautos.netlify.app\",\n        \"github\": \"https://github.com/elwebcesar/demcautos-landing\",\n      },\n      {\n        \"name\": \"Ibagué Ciudad Rock\",\n        \"image\": \"icr.png\",\n        \"skills\": [\"HTML5\", \"CSS\", \"jQuery\"],\n        \"details\": [ \"HTML5\", \"CSS\", \"jQuery\" ],\n        \"figma\": \"\",\n        \"link\": \"https://icr-xix.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/icr-xix\",\n      },\n      {\n        \"name\": \"Simple dashboard\",\n        \"image\": \"dashboard.png\",\n        \"skills\": [\"HTML5\", \"CSS\", \"Sass\", \"jQuery\"],\n        \"details\": [ \"HTML5\", \"CSS\", \"Sass\", \"jQuery\" ],\n        \"figma\": \"\",\n        \"link\": \"https://interface-dashboard.netlify.app/\",\n        \"github\": \"https://github.com/elwebcesar/Maquetaci-n-web-C-sar-Fern-ndez\",\n      }\n  ]\n};\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/data/data.js?");

/***/ }),

/***/ "./src/components/elementsRemoveStyle.js":
/*!***********************************************!*\
  !*** ./src/components/elementsRemoveStyle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementsRemoveStyle\": () => (/* binding */ elementsRemoveStyle)\n/* harmony export */ });\n\nfunction elementsRemoveStyle(elements,styleRemove,interval) {\n  let index = 0;\n\n  const intervalId = setInterval(() => {\n    if (index >= elements.length) {\n      clearInterval(intervalId);\n      return;\n    }\n\n    elements[index].classList.remove(styleRemove);\n    \n    index++;\n  }, interval);\n}\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/elementsRemoveStyle.js?");

/***/ }),

/***/ "./src/components/filtering/filtering.js":
/*!***********************************************!*\
  !*** ./src/components/filtering/filtering.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filtering\": () => (/* binding */ filtering)\n/* harmony export */ });\n/* harmony import */ var _filtering_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtering.scss */ \"./src/components/filtering/filtering.scss\");\n\n\n\nfunction filtering(dataResetFilters, classNoDisplay, classActive, classShow, classHide, filters, buttonAll, projects) {\n  // console.log('dataResetFilters: ', dataResetFilters)\n  // console.log('classNoDisplay: ', classNoDisplay)\n  // console.log('classActive: ', classActive)\n  // console.log('classShow: ', classShow)\n  // console.log('classHide: ', classHide)\n  // console.log('filters: ', filters)\n  // console.log('buttonAll: ', buttonAll)\n  // console.log('projects: ', projects)\n\n\n  filters.forEach(filter => {\n\n    console.log(filter)\n\n    filter.addEventListener('click', function() {\n\n      console.log('boton filtro')\n\n      filters.forEach(f => {\n        f.classList.toggle(classActive, f === filter);\n      });\n  \n      buttonAll.classList.remove(classNoDisplay);\n  \n      let selectedFilter = filter.getAttribute('data-filter');\n      console.log('selectedFilter: ', selectedFilter)\n  \n      projects.forEach(project => {\n        let projectDataFilter = project.getAttribute('data-filter');\n        console.log('projectDataFilter: ', projectDataFilter)\n\n        project.classList.remove(classShow, classHide);\n        project.classList.add(selectedFilter == dataResetFilters || projectDataFilter.includes(selectedFilter) ? classShow : classHide);\n        selectedFilter == dataResetFilters ? buttonAll.classList.add(classNoDisplay) : null;\n      });\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack://elwebcesar/./src/components/filtering/filtering.js?");

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