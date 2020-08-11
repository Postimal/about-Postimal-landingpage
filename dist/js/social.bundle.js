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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/socialMedia.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/socialMedia.js":
/*!*******************************!*\
  !*** ./src/js/socialMedia.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var triggers = document.querySelectorAll('.cool > li');
var background = document.querySelector('.dropdownBackground');
var hookPoint = document.querySelector('.top');
var githubList = document.querySelector('.github');

var Repo = function Repo(name, length, data) {
  _classCallCheck(this, Repo);

  this.name = name;
  this.length = length;
  this.data = data;
};

var fetchData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var target, repoName, res, data, repoInfo, output;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            target = _ref.target;
            repoName = target.dataset.name;
            _context.next = 4;
            return fetch("https://api.github.com/repos/Postimal/".concat(repoName, "/commits"));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            repoInfo = new Repo(target.dataset.name, data.length);
            repoInfo.data = data[0].commit.author.date.toLocaleString().slice(0, 10);
            output = "<span class=\"text-secondary fetch-data\">\n                  ".concat(repoInfo.length ? repoInfo.length : 'limit zapytań', "\n                  </span>\n                  commits\n                  <span class=\"text-secondary\">").concat(repoInfo.data, "</span> latest");
            target.lastElementChild.innerHTML = output;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchData(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function handleEnter() {
  var _this = this;

  this.classList.add('trigger-enter');
  setTimeout(function () {
    return _this.classList.contains('trigger-enter') && _this.classList.add('trigger-enter-active');
  }, 150);
  background.classList.add('open');
  var dropdown = this.querySelector('.dropdown');
  var dropdownCoords = dropdown.getBoundingClientRect();
  var navCoords = hookPoint.getBoundingClientRect();
  var coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };
  background.style.setProperty('width', "".concat(coords.width, "px"));
  background.style.setProperty('height', "".concat(coords.height, "px"));
  background.style.setProperty('transform', "translate(".concat(coords.left, "px, ").concat(coords.top, "px)"));
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(function (trigger) {
  return trigger.addEventListener('mouseenter', handleEnter);
});
triggers.forEach(function (trigger) {
  return trigger.addEventListener('mouseleave', handleLeave);
});
githubList.addEventListener('mouseover', function (e) {
  return e.target.classList.contains('github-list-item') && fetchData(e);
});

/***/ })

/******/ });
//# sourceMappingURL=social.bundle.js.map