/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.sass */ \"./src/sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_1__);\n// import 'normalize.css';\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let modal = document.querySelector(\".modal\");\r\nlet btnShowModal = document.querySelectorAll(\".btn__modal\");\r\nlet closeModal = document.querySelectorAll(\".modal__close\");\r\n\r\nbtnShowModal.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n        document.body.classList.add(\"fixed\");\r\n        modal.classList.add(\"modal--active\");\r\n    });\r\n});\r\n\r\ncloseModal.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n        document.body.classList.remove(\"fixed\");\r\n        modal.classList.remove(\"modal--active\");\r\n    });\r\n});\r\n\r\n//burger ================\r\nlet burgerBtn = document.querySelector(\".burger\");\r\nlet headerMenu = document.querySelector(\".menu\");\r\n\r\nburgerBtn.addEventListener(\"click\", () => {\r\n    burgerBtn.classList.toggle(\"burger--active\");\r\n    headerMenu.classList.toggle(\"menu--active\");\r\n});\r\n\r\n// let logo = document.querySelector('.logo');\r\n\r\n// const activeLogo = (scrollY) => {\r\n//     scrollY > 200 ? logo.classList.add('logo--active') : logo.classList.remove('logo--active');\r\n// };\r\n// activeLogo(window.scrollY);\r\n\r\n// window.addEventListener('scroll', () => {\r\n//     let scrollY = window.scrollY;\r\n//     activeLogo(scrollY);\r\n// });\r\n\r\n// let modal = document.querySelector('.modal');\r\n// let btnShowModal = document.querySelectorAll('.btn__modal');\r\n// let closeModal = document.querySelectorAll('.modal__close');\r\n\r\n// btnShowModal.forEach((btn) => {\r\n//     btn.addEventListener('click', () => {\r\n//         document.body.classList.add('fixed');\r\n//         modal.classList.add('modal--active');\r\n//     });\r\n// });\r\n\r\n// closeModal.forEach((btn) => {\r\n//     btn.addEventListener('click', () => {\r\n//         document.body.classList.remove('fixed');\r\n//         modal.classList.remove('modal--active');\r\n//     });\r\n// });\r\n\r\n// let linksList = document.querySelectorAll('.link');\r\n\r\n// linksList.forEach((link) => {\r\n//     link.addEventListener('click', () => {\r\n//         linksList.forEach((item) => {\r\n//             item.classList.remove('link--active');\r\n//         });\r\n\r\n//         link.classList.add('link--active');\r\n//     });\r\n// });\r\n\r\n// let paramX = document.querySelector('[data-param=\"param-x\"]');\r\n\r\n// paramX.addEventListener(\"input\", function () {\r\n//     console.log(this.value);\r\n// });\r\n\r\n// function getListParamY(paramX) {\r\n//     switch (paramX) {\r\n//         case \"1\":\r\n//             getFormula();\r\n//             break;\r\n//         case \"2\":\r\n//             break;\r\n//             getFormula();\r\n//         case \"3\":\r\n//             getFormula();\r\n//             break;\r\n//     }\r\n// }\r\n\r\n// function getFormula() {}\r\n\r\n// let search = document.querySelector(\".search\");\r\n// let btn = search.querySelector(\".search__btn\");\r\n\r\n// let form = search.querySelector(\".search__form\");\r\n// let input = form.querySelector(\".search__input\");\r\n\r\n// form.addEventListener(\"submit\", function (e) {\r\n//     e.preventDefault();\r\n//     return true;\r\n// });\r\n\r\n// btn.addEventListener(\"click\", function (e) {\r\n//     if (input.value === \"\") {\r\n//         search.classList.toggle(\"search--active\");\r\n//     } else {\r\n//         form.requestSubmit();\r\n//     }\r\n// });\r\n\r\n// const sortTable = document.querySelectorAll(\".table__sort\");\r\n// let tBody = document.querySelector(\".table__body\");\r\n// let trArr = tBody.querySelectorAll(\".table__tr\");\r\n// let index = false;\r\n\r\n// const comparator = (index) => {\r\n//     const collator = new Intl.Collator([\"en\", \"ru\"], { numeric: true });\r\n//     return (a, b) => {\r\n//         return collator.compare(a.children[index].innerHTML, b.children[index].innerHTML);\r\n//     };\r\n// };\r\n\r\n// const getSort = (index) => {\r\n//     tBody = document.querySelector(\".table__body\");\r\n//     trArr = tBody.querySelectorAll(\".table__tr\");\r\n//     tBody.append(...[...trArr].sort(comparator(index)));\r\n// };\r\n\r\n// const sort = ({ target }) => {\r\n//     index = Number(target.innerText) - 1;\r\n//     getSort(index);\r\n// };\r\n\r\n// sortTable.forEach((tableTH) => tableTH.addEventListener(\"click\", () => sort(event)));\r\n\r\n// let form = document.querySelector(\".form\");\r\n\r\n// form.addEventListener(\"submit\", (e) => {\r\n//     e.preventDefault();\r\n//     let valid = true;\r\n\r\n//     const data = {};\r\n//     const formData = new FormData(e.target);\r\n\r\n//     for (const [name, value] of formData) {\r\n//         if (value === \"\") {\r\n//             valid = false;\r\n//         } else {\r\n//             data[name] = value;\r\n//         }\r\n//     }\r\n\r\n//     if (valid !== false) {\r\n//         let html = `\r\n//                 <td>${data.a}</td>\r\n//                 <td>${data.b}</td>\r\n//                 <td>${data.c}</td>\r\n//                 <td>${data.d}</td>\r\n//                 <td>${data.e}</td>\r\n//                 <td>${data.f}</td>\r\n//         `;\r\n\r\n//         let tr = document.createElement(\"tr\");\r\n//         tr.classList.add(\"table__tr\");\r\n//         tr.innerHTML = html;\r\n//         tBody.append(tr);\r\n\r\n//         if (index !== false) {\r\n//             getSort(index);\r\n//         }\r\n\r\n//         form.querySelectorAll(\"input\").forEach((input) => {\r\n//             input.value = \"\";\r\n//         });\r\n//     }\r\n\r\n//     return valid;\r\n// });\r\n\r\n// const add = (a) => {\r\n//     let sum = a;\r\n//     const func = (b) => {\r\n//         sum += b;\r\n//         return func;\r\n//     };\r\n//     func.valueOf = () => sum;\r\n\r\n//     return func;\r\n// };\r\n\r\n// console.log(add(2)(3));\r\n\r\n// const add = (x) => {\r\n//     return function (y) {\r\n//         if (y) {\r\n//             x += y;\r\n//             return arguments.callee;\r\n//         } else {\r\n//             return x;\r\n//         }\r\n//     };\r\n// };\r\n\r\n// console.log(add(1)(2)(3));\r\n\r\n// let a = [...[1, ...[1, 2, ...[3, 4]], ...[2, 4]]];\r\n\r\n// console.log(a);\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.sass?");

/***/ })

/******/ });