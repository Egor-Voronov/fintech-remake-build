/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/script.js":
/*!******************************!*\
  !*** ./javascript/script.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _style_breakpoints_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/breakpoints.scss */ \"./style/breakpoints.scss\");\n//imports\n\n // header\n\nvar header = document.querySelector('.header-row');\nvar first = document.querySelector('.footer');\nvar headerHeight = header.offsetHeight;\nvar firstHeight = first.offsetHeight;\nvar lastScrollTop = 0;\nwindow.addEventListener('scroll', function () {\n  var scrollDistance = window.scrollY;\n\n  if (scrollDistance > lastScrollTop) {\n    header.classList.remove('header--fixed');\n    first.style.marginTop = null;\n  } else {\n    header.classList.add('header--fixed');\n    first.style.marginTop = \"\".concat(headerHeight, \"px\");\n  }\n\n  if (scrollDistance === 0) {\n    header.classList.remove('header--fixed');\n    first.style.marginTop = null;\n  }\n\n  lastScrollTop = scrollDistance;\n}); // favicon\n\nvar current = 0;\nvar icons = ['media/f.png', 'media/i.svg', 'media/n.webp', 'media/t.webp', 'media/e.webp', 'media/c.webp', 'media/h.webp'];\nsetInterval(function () {\n  var icon = ++current % icons.length;\n  var url = icons[icon];\n  document.getElementById('icon-a').href = url;\n  document.getElementById('icon-b').href = url;\n  document.getElementById('icon-c').href = url;\n  document.getElementById('icon-d').href = url;\n}, 2000); // player logic\n\nvar playpause = document.querySelector('.playpause');\nplaypause.addEventListener('click', function () {\n  playpause.classList.toggle('playing');\n});\n\nplaypause.onclick = function () {\n  togglePlay();\n};\n\nvar audio = document.querySelector(\"#audio\");\n\nfunction togglePlay() {\n  return audio.paused ? audio.play() : audio.pause();\n} // music settings\n\n\nvar myVid = document.getElementById(\"audio\");\nmyVid.volume = 0.2; // parallax\n\nvar scene = document.getElementById(\"parallax-container\");\nvar parallax = new Parallax(scene); // faq\n\nvar buttons = document.querySelectorAll('button');\nbuttons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    var faq = button.nextElementSibling;\n    var icon = button.children[1];\n    faq.classList.toggle('show');\n    icon.classList.toggle('rotate');\n  });\n});\n\n//# sourceURL=webpack:///./javascript/script.js?");

/***/ }),

/***/ "./style/breakpoints.scss":
/*!********************************!*\
  !*** ./style/breakpoints.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/breakpoints.scss?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/script.js");
/******/ 	
/******/ })()
;