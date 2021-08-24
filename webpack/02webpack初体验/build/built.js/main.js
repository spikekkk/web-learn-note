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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* index.js webpack 入口起点文件\r\n\r\n1. 运行指令:\r\n  开发环境: webpack ./src/index.js -o ./build/build.js --mode=development\r\n  webpack 会以./src/index.js 为入口文件开始打包,打包后输出到 ./build/build.js\r\n  真题打包环境是-->开发环境\r\n  生产环境: webpack ./src/index.js -o ./build/build.js --mode=production\r\n  webpack 会以./src/index.js 为入口文件开始打包,打包后输出到 ./build/build.js\r\n  真题打包环境是-->生产环境\r\n\r\n2. 结论\r\n  1.  webpack能处理js/json资源,不能处理css/img等其他资源\r\n  2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化\r\n  3. 生产环境比开发环境多了一个压缩JS代码\r\n*/\r\n\r\nfunction add(x, y) {\r\n    return x + y\r\n}\r\nconsole.log(\"x\", add(2, 43))\r\n\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;