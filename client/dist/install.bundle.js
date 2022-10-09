/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\nwindow.addEventListener('beforeinstallprompt', (event) => {\n    window.deferredPrompt = event;\n    butInstall.classList.toggle('hidden', false);\n});\n\n\nbutInstall.addEventListener('click', async () => {\nconst triggerEvent = window.deferredPrompt;\n\nif(!triggerEvent) {\n    return;\n}\n\ntriggerEvent.prompt();\n\n// to make the button a one time use function, disable and hide.\nwindow.deferredPrompt = null; \n\nbutInstall.classList.toggle('hidden', true);\n});\n\n\nwindow.addEventListener('appinstalled', (event) => {\n    window.deferredPrompt = null;\n});\n\n\n//# sourceURL=webpack://client/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;