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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/navi.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/navi.js":
/*!************************!*\
  !*** ./src/js/navi.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var navItems = _toConsumableArray(document.querySelectorAll('.nav-link'));

var subnavItems = _toConsumableArray(document.querySelectorAll('.subnav-content'));

var naviContainer = document.querySelector('[header-container]');

var addClass = function addClass(item, className) {
  return item.classList.add(className);
};

var removeClass = function removeClass(item, className) {
  return item.classList.remove(className);
};

function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.onscroll = function () {
    window.scrollTo(0, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

var triggerSubnav = function triggerSubnav(item) {
  if (item.classList.contains('active')) {
    removeClass(item, 'active');
    document.body.classList.remove('menu-active');
    enableScroll();
  } else {
    subnavItems.forEach(function (el) {
      return removeClass(el, 'active');
    });
    addClass(item, 'active');
    document.body.classList.add('menu-active');
    disableScroll();
  }
};

var targetElement = function targetElement(e) {
  var menuTarget = e.target.dataset.menuTarget;
  var hoveredSubnav = subnavItems.find(function (el) {
    return el.dataset.menu === menuTarget;
  });
  return hoveredSubnav;
};

var showSubnav = function showSubnav(e) {
  var targetEl = targetElement(e);
  triggerSubnav(targetEl);
};

var lastTopPosition = 0;

var toggleNaviOnScroll = function toggleNaviOnScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (lastTopPosition < scrollTop) {
    naviContainer.style.top = '-100px';
    document.body.classList.remove('menu-visible');
  } else {
    naviContainer.style.top = '-0';
    document.body.classList.add('menu-visible');
  }

  lastTopPosition = scrollTop;
};

window.addEventListener('scroll', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["debounce"])(toggleNaviOnScroll, 20));
navItems.forEach(function (el) {
  return el.addEventListener('click', showSubnav);
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: debounce, add, setIntersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIntersection", function() { return setIntersection; });
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
var add = function add(a, b) {
  return a + b;
};
var setIntersection = function setIntersection(element) {
  var observerFn = function observerFn(entries) {
    var elementEntry = entries[0];
    elementEntry.isIntersecting ? element.classList.add('is-in-view') : element.classList.remove('is-in-view');
  };

  var observer = new IntersectionObserver(observerFn);
  observer.observe(element);
};

/***/ })

/******/ });
//# sourceMappingURL=navi.bundle.js.map