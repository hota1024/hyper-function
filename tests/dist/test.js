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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedParameter", function() { return NamedParameter; });
var hyper = __webpack_require__(3).default;

var NamedParameter = __webpack_require__(2).default;

/* harmony default export */ __webpack_exports__["default"] = (hyper);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BreakableForeach;
function BreakableForeach(array, callback) {
	for (var i = 0; i < array.length; ++i) {
		if (callback(array[i], i) === false) {
			return;
		}
	}
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["ClearNamedParameter"] = ClearNamedParameter;
var NamedParameter = {};

/* harmony default export */ __webpack_exports__["default"] = (NamedParameter);

function ClearNamedParameter() {
	for (var param in NamedParameter) {
		delete NamedParameter[param];
	}
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PrepareFunctions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CreateWrapper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NamedParameter__ = __webpack_require__(2);




function hyper(funcsArray) {
	// Prepare Functions Data
	var funcs = Object(__WEBPACK_IMPORTED_MODULE_0__PrepareFunctions__["a" /* default */])(funcsArray);
	// Function Wrapper
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1__CreateWrapper__["a" /* default */])(funcs);

	return wrap;
}

hyper.Np = __WEBPACK_IMPORTED_MODULE_2__NamedParameter__["default"];

/* harmony default export */ __webpack_exports__["default"] = (hyper);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PrepareFunctions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BreakableForeach__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Arg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Func__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };






function PrepareFunctions(funcsArray) {
	var funcs = [];

	Object(__WEBPACK_IMPORTED_MODULE_0__BreakableForeach__["a" /* default */])(funcsArray, function (funcItem) {
		var keys = Object.keys(funcItem);
		var args = [];
		var process = null;

		// Check exists _ process function.
		if (keys.includes('_') === false) {
			throw Error('Function must have "_" property.');
		}

		// Process function
		process = funcItem._;

		// Remove _ key
		keys = keys.filter(function (key) {
			return key !== '_';
		});

		// Build args array
		keys.forEach(function (key) {
			var data = funcItem[key];
			var arg = new __WEBPACK_IMPORTED_MODULE_1__Arg__["a" /* default */]();

			if (typeof data === 'function') {
				arg.set(key, data, null);
			} else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
				arg.set(key, data.type || null, data.default || null);
			}

			args.push(arg);
		});

		funcs.push(new __WEBPACK_IMPORTED_MODULE_2__Func__["a" /* default */](args, process));
	});

	return funcs;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arg = function () {
	function Arg(name, type, def) {
		_classCallCheck(this, Arg);

		this.set(name, type, def);
	}

	_createClass(Arg, [{
		key: "set",
		value: function set(name, type, def) {
			this.name = name;
			this.type = type;
			this.default = def;
		}
	}]);

	return Arg;
}();

/* harmony default export */ __webpack_exports__["a"] = (Arg);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Func = function Func(args, process) {
	_classCallCheck(this, Func);

	this.args = args;
	this.process = process;
};

/* harmony default export */ __webpack_exports__["a"] = (Func);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CreateWrapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NamedParameter__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreakableForeach__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CheckType__ = __webpack_require__(8);





function CreateWrapper(funcs) {
	var wrap = function wrap() {
		// Data
		var args = Array.from(arguments);
		var returnValue = undefined;
		var isCorresponded = false;

		// Zero Argument
		if (args.length === 0) {
			var noParmFunc = funcs.find(function (func) {
				return func.args.length === 0;
			});
			if (noParmFunc) {
				return noParmFunc.process(wrap);
			}
		}

		// Copy Named Parameters and Clear Named Parameters
		var tmpNp = Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__index__["NamedParameter"]);
		Object(__WEBPACK_IMPORTED_MODULE_0__NamedParameter__["ClearNamedParameter"])();

		// Find Corresponding Function
		Object(__WEBPACK_IMPORTED_MODULE_1__BreakableForeach__["a" /* default */])(funcs, function (func) {
			var isCorrespond = true;
			var computed = {};
			Object(__WEBPACK_IMPORTED_MODULE_1__BreakableForeach__["a" /* default */])(func.args, function (funcArg, funcArgIndex) {
				// Check Passed Parameter
				if (tmpNp[funcArg.name]) // NamedParameter
					{
						computed[funcArg.name] = tmpNp[funcArg.name];
					} else if (funcArg.default && typeof args[funcArgIndex] === 'undefined') // Default Value
					{
						computed[funcArg.name] = funcArg.default();
					} else if (Object(__WEBPACK_IMPORTED_MODULE_3__CheckType__["a" /* default */])(funcArg.type, args[funcArgIndex]) === false) // Not Exists
					{
						isCorrespond = false;
						return false;
					} else // Passed Value
					{
						computed[funcArg.name] = args[funcArgIndex];
					}
			});

			if (isCorrespond) {
				// Execute
				returnValue = func.process(computed, wrap);
				isCorresponded = true;
				return false;
			}
		});

		// If not undefined function, throw error
		if (isCorresponded === false) {
			throw Error('Undefined function.');
		}

		return returnValue;
	};

	return wrap;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (type, obj) {
	try {
		return type.prototype.constructor === obj.constructor;
	} catch (error) {
		return false;
	}
});

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



window.hyper = __WEBPACK_IMPORTED_MODULE_0__src_index__["default"];

window.Player = function () {
    function _class(name, hp) {
        _classCallCheck(this, _class);

        this.name = name;
        this.hp = hp;
    }

    return _class;
}();

window.Human = function () {
    function _class2(name, hp) {
        _classCallCheck(this, _class2);

        this.name = name;
        this.hp = hp;
    }

    return _class2;
}();

window.Put = Object(__WEBPACK_IMPORTED_MODULE_0__src_index__["default"])([{
    player: Player,
    _: function _(_ref) {
        var player = _ref.player;

        console.log('Name:' + player.name);
        console.log('HP:' + player.hp);
    }
}]);

/***/ })
/******/ ]);