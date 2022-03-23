/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 40863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(72066), __esModule: true };

/***/ }),

/***/ 63850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(53336), __esModule: true };

/***/ }),

/***/ 88759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(81471), __esModule: true };

/***/ }),

/***/ 12424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(40863);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(26378);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 72066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(46740);
__webpack_require__(83036);
module.exports = __webpack_require__(50861);


/***/ }),

/***/ 53336:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(58380);
module.exports = __webpack_require__(94731).Number.isSafeInteger;


/***/ }),

/***/ 81471:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(4561);
var $Object = __webpack_require__(94731).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ 27169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(89151);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ 50861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(93965);
var ITERATOR = __webpack_require__(25346)('iterator');
var Iterators = __webpack_require__(33135);
module.exports = __webpack_require__(94731).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 58380:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(49901);
var isInteger = __webpack_require__(27169);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ 4561:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(44903)('getOwnPropertyNames', function () {
  return __webpack_require__(42029).f;
});


/***/ }),

/***/ 53112:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'apathy',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#031A16',
  base01: '#0B342D',
  base02: '#184E45',
  base03: '#2B685E',
  base04: '#5F9C92',
  base05: '#81B5AC',
  base06: '#A7CEC8',
  base07: '#D2E7E4',
  base08: '#3E9688',
  base09: '#3E7996',
  base0A: '#3E4C96',
  base0B: '#883E96',
  base0C: '#963E4C',
  base0D: '#96883E',
  base0E: '#4C963E',
  base0F: '#3E965B'
};
module.exports = exports['default'];

/***/ }),

/***/ 96291:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'ashes',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#1C2023',
  base01: '#393F45',
  base02: '#565E65',
  base03: '#747C84',
  base04: '#ADB3BA',
  base05: '#C7CCD1',
  base06: '#DFE2E5',
  base07: '#F3F4F5',
  base08: '#C7AE95',
  base09: '#C7C795',
  base0A: '#AEC795',
  base0B: '#95C7AE',
  base0C: '#95AEC7',
  base0D: '#AE95C7',
  base0E: '#C795AE',
  base0F: '#C79595'
};
module.exports = exports['default'];

/***/ }),

/***/ 253:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'atelier dune',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
  base00: '#20201d',
  base01: '#292824',
  base02: '#6e6b5e',
  base03: '#7d7a68',
  base04: '#999580',
  base05: '#a6a28c',
  base06: '#e8e4cf',
  base07: '#fefbec',
  base08: '#d73737',
  base09: '#b65611',
  base0A: '#cfb017',
  base0B: '#60ac39',
  base0C: '#1fad83',
  base0D: '#6684e1',
  base0E: '#b854d4',
  base0F: '#d43552'
};
module.exports = exports['default'];

/***/ }),

/***/ 13783:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'atelier forest',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
  base00: '#1b1918',
  base01: '#2c2421',
  base02: '#68615e',
  base03: '#766e6b',
  base04: '#9c9491',
  base05: '#a8a19f',
  base06: '#e6e2e0',
  base07: '#f1efee',
  base08: '#f22c40',
  base09: '#df5320',
  base0A: '#d5911a',
  base0B: '#5ab738',
  base0C: '#00ad9c',
  base0D: '#407ee7',
  base0E: '#6666ea',
  base0F: '#c33ff3'
};
module.exports = exports['default'];

/***/ }),

/***/ 28447:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'atelier heath',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
  base00: '#1b181b',
  base01: '#292329',
  base02: '#695d69',
  base03: '#776977',
  base04: '#9e8f9e',
  base05: '#ab9bab',
  base06: '#d8cad8',
  base07: '#f7f3f7',
  base08: '#ca402b',
  base09: '#a65926',
  base0A: '#bb8a35',
  base0B: '#379a37',
  base0C: '#159393',
  base0D: '#516aec',
  base0E: '#7b59c0',
  base0F: '#cc33cc'
};
module.exports = exports['default'];

/***/ }),

/***/ 98629:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'atelier lakeside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
  base00: '#161b1d',
  base01: '#1f292e',
  base02: '#516d7b',
  base03: '#5a7b8c',
  base04: '#7195a8',
  base05: '#7ea2b4',
  base06: '#c1e4f6',
  base07: '#ebf8ff',
  base08: '#d22d72',
  base09: '#935c25',
  base0A: '#8a8a0f',
  base0B: '#568c3b',
  base0C: '#2d8f6f',
  base0D: '#257fad',
  base0E: '#5d5db1',
  base0F: '#b72dd2'
};
module.exports = exports['default'];

/***/ }),

/***/ 11931:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'atelier seaside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
  base00: '#131513',
  base01: '#242924',
  base02: '#5e6e5e',
  base03: '#687d68',
  base04: '#809980',
  base05: '#8ca68c',
  base06: '#cfe8cf',
  base07: '#f0fff0',
  base08: '#e6193c',
  base09: '#87711d',
  base0A: '#c3c322',
  base0B: '#29a329',
  base0C: '#1999b3',
  base0D: '#3d62f5',
  base0E: '#ad2bee',
  base0F: '#e619c3'
};
module.exports = exports['default'];

/***/ }),

/***/ 27113:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'bespin',
  author: 'jan t. sott',
  base00: '#28211c',
  base01: '#36312e',
  base02: '#5e5d5c',
  base03: '#666666',
  base04: '#797977',
  base05: '#8a8986',
  base06: '#9d9b97',
  base07: '#baae9e',
  base08: '#cf6a4c',
  base09: '#cf7d34',
  base0A: '#f9ee98',
  base0B: '#54be0d',
  base0C: '#afc4db',
  base0D: '#5ea6ea',
  base0E: '#9b859d',
  base0F: '#937121'
};
module.exports = exports['default'];

/***/ }),

/***/ 17757:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'brewer',
  author: 'timothée poisot (http://github.com/tpoisot)',
  base00: '#0c0d0e',
  base01: '#2e2f30',
  base02: '#515253',
  base03: '#737475',
  base04: '#959697',
  base05: '#b7b8b9',
  base06: '#dadbdc',
  base07: '#fcfdfe',
  base08: '#e31a1c',
  base09: '#e6550d',
  base0A: '#dca060',
  base0B: '#31a354',
  base0C: '#80b1d3',
  base0D: '#3182bd',
  base0E: '#756bb1',
  base0F: '#b15928'
};
module.exports = exports['default'];

/***/ }),

/***/ 25328:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'bright',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#303030',
  base02: '#505050',
  base03: '#b0b0b0',
  base04: '#d0d0d0',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ffffff',
  base08: '#fb0120',
  base09: '#fc6d24',
  base0A: '#fda331',
  base0B: '#a1c659',
  base0C: '#76c7b7',
  base0D: '#6fb3d2',
  base0E: '#d381c3',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),

/***/ 23906:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'chalk',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#f5f5f5',
  base08: '#fb9fb1',
  base09: '#eda987',
  base0A: '#ddb26f',
  base0B: '#acc267',
  base0C: '#12cfc0',
  base0D: '#6fc2ef',
  base0E: '#e1a3ee',
  base0F: '#deaf8f'
};
module.exports = exports['default'];

/***/ }),

/***/ 13236:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'codeschool',
  author: 'brettof86',
  base00: '#232c31',
  base01: '#1c3657',
  base02: '#2a343a',
  base03: '#3f4944',
  base04: '#84898c',
  base05: '#9ea7a6',
  base06: '#a7cfa3',
  base07: '#b5d8f6',
  base08: '#2a5491',
  base09: '#43820d',
  base0A: '#a03b1e',
  base0B: '#237986',
  base0C: '#b02f30',
  base0D: '#484d79',
  base0E: '#c59820',
  base0F: '#c98344'
};
module.exports = exports['default'];

/***/ }),

/***/ 45190:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'colors',
  author: 'mrmrs (http://clrs.cc)',
  base00: '#111111',
  base01: '#333333',
  base02: '#555555',
  base03: '#777777',
  base04: '#999999',
  base05: '#bbbbbb',
  base06: '#dddddd',
  base07: '#ffffff',
  base08: '#ff4136',
  base09: '#ff851b',
  base0A: '#ffdc00',
  base0B: '#2ecc40',
  base0C: '#7fdbff',
  base0D: '#0074d9',
  base0E: '#b10dc9',
  base0F: '#85144b'
};
module.exports = exports['default'];

/***/ }),

/***/ 67339:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'default',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#181818',
  base01: '#282828',
  base02: '#383838',
  base03: '#585858',
  base04: '#b8b8b8',
  base05: '#d8d8d8',
  base06: '#e8e8e8',
  base07: '#f8f8f8',
  base08: '#ab4642',
  base09: '#dc9656',
  base0A: '#f7ca88',
  base0B: '#a1b56c',
  base0C: '#86c1b9',
  base0D: '#7cafc2',
  base0E: '#ba8baf',
  base0F: '#a16946'
};
module.exports = exports['default'];

/***/ }),

/***/ 3517:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'eighties',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2d2d2d',
  base01: '#393939',
  base02: '#515151',
  base03: '#747369',
  base04: '#a09f93',
  base05: '#d3d0c8',
  base06: '#e8e6df',
  base07: '#f2f0ec',
  base08: '#f2777a',
  base09: '#f99157',
  base0A: '#ffcc66',
  base0B: '#99cc99',
  base0C: '#66cccc',
  base0D: '#6699cc',
  base0E: '#cc99cc',
  base0F: '#d27b53'
};
module.exports = exports['default'];

/***/ }),

/***/ 55091:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'embers',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#16130F',
  base01: '#2C2620',
  base02: '#433B32',
  base03: '#5A5047',
  base04: '#8A8075',
  base05: '#A39A90',
  base06: '#BEB6AE',
  base07: '#DBD6D1',
  base08: '#826D57',
  base09: '#828257',
  base0A: '#6D8257',
  base0B: '#57826D',
  base0C: '#576D82',
  base0D: '#6D5782',
  base0E: '#82576D',
  base0F: '#825757'
};
module.exports = exports['default'];

/***/ }),

/***/ 15021:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'flat',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2C3E50',
  base01: '#34495E',
  base02: '#7F8C8D',
  base03: '#95A5A6',
  base04: '#BDC3C7',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ECF0F1',
  base08: '#E74C3C',
  base09: '#E67E22',
  base0A: '#F1C40F',
  base0B: '#2ECC71',
  base0C: '#1ABC9C',
  base0D: '#3498DB',
  base0E: '#9B59B6',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),

/***/ 86664:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};
module.exports = exports['default'];

/***/ }),

/***/ 83935:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'grayscale',
  author: 'alexandre gavioli (https://github.com/alexx2/)',
  base00: '#101010',
  base01: '#252525',
  base02: '#464646',
  base03: '#525252',
  base04: '#ababab',
  base05: '#b9b9b9',
  base06: '#e3e3e3',
  base07: '#f7f7f7',
  base08: '#7c7c7c',
  base09: '#999999',
  base0A: '#a0a0a0',
  base0B: '#8e8e8e',
  base0C: '#868686',
  base0D: '#686868',
  base0E: '#747474',
  base0F: '#5e5e5e'
};
module.exports = exports['default'];

/***/ }),

/***/ 1857:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'green screen',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#001100',
  base01: '#003300',
  base02: '#005500',
  base03: '#007700',
  base04: '#009900',
  base05: '#00bb00',
  base06: '#00dd00',
  base07: '#00ff00',
  base08: '#007700',
  base09: '#009900',
  base0A: '#007700',
  base0B: '#00bb00',
  base0C: '#005500',
  base0D: '#009900',
  base0E: '#00bb00',
  base0F: '#005500'
};
module.exports = exports['default'];

/***/ }),

/***/ 78960:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'harmonic16',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#0b1c2c',
  base01: '#223b54',
  base02: '#405c79',
  base03: '#627e99',
  base04: '#aabcce',
  base05: '#cbd6e2',
  base06: '#e5ebf1',
  base07: '#f7f9fb',
  base08: '#bf8b56',
  base09: '#bfbf56',
  base0A: '#8bbf56',
  base0B: '#56bf8b',
  base0C: '#568bbf',
  base0D: '#8b56bf',
  base0E: '#bf568b',
  base0F: '#bf5656'
};
module.exports = exports['default'];

/***/ }),

/***/ 58038:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'hopscotch',
  author: 'jan t. sott',
  base00: '#322931',
  base01: '#433b42',
  base02: '#5c545b',
  base03: '#797379',
  base04: '#989498',
  base05: '#b9b5b8',
  base06: '#d5d3d5',
  base07: '#ffffff',
  base08: '#dd464c',
  base09: '#fd8b19',
  base0A: '#fdcc59',
  base0B: '#8fc13e',
  base0C: '#149b93',
  base0D: '#1290bf',
  base0E: '#c85e7c',
  base0F: '#b33508'
};
module.exports = exports['default'];

/***/ }),

/***/ 79194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _threezerotwofour = __webpack_require__(2633);

exports.threezerotwofour = _interopRequire(_threezerotwofour);

var _apathy = __webpack_require__(53112);

exports.apathy = _interopRequire(_apathy);

var _ashes = __webpack_require__(96291);

exports.ashes = _interopRequire(_ashes);

var _atelierDune = __webpack_require__(253);

exports.atelierDune = _interopRequire(_atelierDune);

var _atelierForest = __webpack_require__(13783);

exports.atelierForest = _interopRequire(_atelierForest);

var _atelierHeath = __webpack_require__(28447);

exports.atelierHeath = _interopRequire(_atelierHeath);

var _atelierLakeside = __webpack_require__(98629);

exports.atelierLakeside = _interopRequire(_atelierLakeside);

var _atelierSeaside = __webpack_require__(11931);

exports.atelierSeaside = _interopRequire(_atelierSeaside);

var _bespin = __webpack_require__(27113);

exports.bespin = _interopRequire(_bespin);

var _brewer = __webpack_require__(17757);

exports.brewer = _interopRequire(_brewer);

var _bright = __webpack_require__(25328);

exports.bright = _interopRequire(_bright);

var _chalk = __webpack_require__(23906);

exports.chalk = _interopRequire(_chalk);

var _codeschool = __webpack_require__(13236);

exports.codeschool = _interopRequire(_codeschool);

var _colors = __webpack_require__(45190);

exports.colors = _interopRequire(_colors);

var _default = __webpack_require__(67339);

exports["default"] = _interopRequire(_default);

var _eighties = __webpack_require__(3517);

exports.eighties = _interopRequire(_eighties);

var _embers = __webpack_require__(55091);

exports.embers = _interopRequire(_embers);

var _flat = __webpack_require__(15021);

exports.flat = _interopRequire(_flat);

var _google = __webpack_require__(86664);

exports.google = _interopRequire(_google);

var _grayscale = __webpack_require__(83935);

exports.grayscale = _interopRequire(_grayscale);

var _greenscreen = __webpack_require__(1857);

exports.greenscreen = _interopRequire(_greenscreen);

var _harmonic = __webpack_require__(78960);

exports.harmonic = _interopRequire(_harmonic);

var _hopscotch = __webpack_require__(58038);

exports.hopscotch = _interopRequire(_hopscotch);

var _isotope = __webpack_require__(30971);

exports.isotope = _interopRequire(_isotope);

var _marrakesh = __webpack_require__(8764);

exports.marrakesh = _interopRequire(_marrakesh);

var _mocha = __webpack_require__(65364);

exports.mocha = _interopRequire(_mocha);

var _monokai = __webpack_require__(55610);

exports.monokai = _interopRequire(_monokai);

var _ocean = __webpack_require__(94646);

exports.ocean = _interopRequire(_ocean);

var _paraiso = __webpack_require__(58466);

exports.paraiso = _interopRequire(_paraiso);

var _pop = __webpack_require__(35708);

exports.pop = _interopRequire(_pop);

var _railscasts = __webpack_require__(1834);

exports.railscasts = _interopRequire(_railscasts);

var _shapeshifter = __webpack_require__(45410);

exports.shapeshifter = _interopRequire(_shapeshifter);

var _solarized = __webpack_require__(27427);

exports.solarized = _interopRequire(_solarized);

var _summerfruit = __webpack_require__(63013);

exports.summerfruit = _interopRequire(_summerfruit);

var _tomorrow = __webpack_require__(86706);

exports.tomorrow = _interopRequire(_tomorrow);

var _tube = __webpack_require__(19028);

exports.tube = _interopRequire(_tube);

var _twilight = __webpack_require__(71899);

exports.twilight = _interopRequire(_twilight);

/***/ }),

/***/ 30971:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'isotope',
  author: 'jan t. sott',
  base00: '#000000',
  base01: '#404040',
  base02: '#606060',
  base03: '#808080',
  base04: '#c0c0c0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#ff0000',
  base09: '#ff9900',
  base0A: '#ff0099',
  base0B: '#33ff00',
  base0C: '#00ffff',
  base0D: '#0066ff',
  base0E: '#cc00ff',
  base0F: '#3300ff'
};
module.exports = exports['default'];

/***/ }),

/***/ 8764:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'marrakesh',
  author: 'alexandre gavioli (http://github.com/alexx2/)',
  base00: '#201602',
  base01: '#302e00',
  base02: '#5f5b17',
  base03: '#6c6823',
  base04: '#86813b',
  base05: '#948e48',
  base06: '#ccc37a',
  base07: '#faf0a5',
  base08: '#c35359',
  base09: '#b36144',
  base0A: '#a88339',
  base0B: '#18974e',
  base0C: '#75a738',
  base0D: '#477ca1',
  base0E: '#8868b3',
  base0F: '#b3588e'
};
module.exports = exports['default'];

/***/ }),

/***/ 65364:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'mocha',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#3B3228',
  base01: '#534636',
  base02: '#645240',
  base03: '#7e705a',
  base04: '#b8afad',
  base05: '#d0c8c6',
  base06: '#e9e1dd',
  base07: '#f5eeeb',
  base08: '#cb6077',
  base09: '#d28b71',
  base0A: '#f4bc87',
  base0B: '#beb55b',
  base0C: '#7bbda4',
  base0D: '#8ab3b5',
  base0E: '#a89bb9',
  base0F: '#bb9584'
};
module.exports = exports['default'];

/***/ }),

/***/ 55610:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),

/***/ 94646:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'ocean',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2b303b',
  base01: '#343d46',
  base02: '#4f5b66',
  base03: '#65737e',
  base04: '#a7adba',
  base05: '#c0c5ce',
  base06: '#dfe1e8',
  base07: '#eff1f5',
  base08: '#bf616a',
  base09: '#d08770',
  base0A: '#ebcb8b',
  base0B: '#a3be8c',
  base0C: '#96b5b4',
  base0D: '#8fa1b3',
  base0E: '#b48ead',
  base0F: '#ab7967'
};
module.exports = exports['default'];

/***/ }),

/***/ 58466:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'paraiso',
  author: 'jan t. sott',
  base00: '#2f1e2e',
  base01: '#41323f',
  base02: '#4f424c',
  base03: '#776e71',
  base04: '#8d8687',
  base05: '#a39e9b',
  base06: '#b9b6b0',
  base07: '#e7e9db',
  base08: '#ef6155',
  base09: '#f99b15',
  base0A: '#fec418',
  base0B: '#48b685',
  base0C: '#5bc4bf',
  base0D: '#06b6ef',
  base0E: '#815ba4',
  base0F: '#e96ba8'
};
module.exports = exports['default'];

/***/ }),

/***/ 35708:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'pop',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#eb008a',
  base09: '#f29333',
  base0A: '#f8ca12',
  base0B: '#37b349',
  base0C: '#00aabb',
  base0D: '#0e5a94',
  base0E: '#b31e8d',
  base0F: '#7a2d00'
};
module.exports = exports['default'];

/***/ }),

/***/ 1834:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'railscasts',
  author: 'ryan bates (http://railscasts.com)',
  base00: '#2b2b2b',
  base01: '#272935',
  base02: '#3a4055',
  base03: '#5a647e',
  base04: '#d4cfc9',
  base05: '#e6e1dc',
  base06: '#f4f1ed',
  base07: '#f9f7f3',
  base08: '#da4939',
  base09: '#cc7833',
  base0A: '#ffc66d',
  base0B: '#a5c261',
  base0C: '#519f50',
  base0D: '#6d9cbe',
  base0E: '#b6b3eb',
  base0F: '#bc9458'
};
module.exports = exports['default'];

/***/ }),

/***/ 45410:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'shapeshifter',
  author: 'tyler benziger (http://tybenz.com)',
  base00: '#000000',
  base01: '#040404',
  base02: '#102015',
  base03: '#343434',
  base04: '#555555',
  base05: '#ababab',
  base06: '#e0e0e0',
  base07: '#f9f9f9',
  base08: '#e92f2f',
  base09: '#e09448',
  base0A: '#dddd13',
  base0B: '#0ed839',
  base0C: '#23edda',
  base0D: '#3b48e3',
  base0E: '#f996e2',
  base0F: '#69542d'
};
module.exports = exports['default'];

/***/ }),

/***/ 27427:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};
module.exports = exports['default'];

/***/ }),

/***/ 63013:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'summerfruit',
  author: 'christopher corley (http://cscorley.github.io/)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#B0B0B0',
  base05: '#D0D0D0',
  base06: '#E0E0E0',
  base07: '#FFFFFF',
  base08: '#FF0086',
  base09: '#FD8900',
  base0A: '#ABA800',
  base0B: '#00C918',
  base0C: '#1faaaa',
  base0D: '#3777E6',
  base0E: '#AD00A1',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),

/***/ 2633:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'threezerotwofour',
  author: 'jan t. sott (http://github.com/idleberg)',
  base00: '#090300',
  base01: '#3a3432',
  base02: '#4a4543',
  base03: '#5c5855',
  base04: '#807d7c',
  base05: '#a5a2a2',
  base06: '#d6d5d4',
  base07: '#f7f7f7',
  base08: '#db2d20',
  base09: '#e8bbd0',
  base0A: '#fded02',
  base0B: '#01a252',
  base0C: '#b5e4f4',
  base0D: '#01a0e4',
  base0E: '#a16a94',
  base0F: '#cdab53'
};
module.exports = exports['default'];

/***/ }),

/***/ 86706:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'tomorrow',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#cc6666',
  base09: '#de935f',
  base0A: '#f0c674',
  base0B: '#b5bd68',
  base0C: '#8abeb7',
  base0D: '#81a2be',
  base0E: '#b294bb',
  base0F: '#a3685a'
};
module.exports = exports['default'];

/***/ }),

/***/ 19028:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'london tube',
  author: 'jan t. sott',
  base00: '#231f20',
  base01: '#1c3f95',
  base02: '#5a5758',
  base03: '#737171',
  base04: '#959ca1',
  base05: '#d9d8d8',
  base06: '#e7e7e8',
  base07: '#ffffff',
  base08: '#ee2e24',
  base09: '#f386a1',
  base0A: '#ffd204',
  base0B: '#00853e',
  base0C: '#85cebc',
  base0D: '#009ddc',
  base0E: '#98005d',
  base0F: '#b06110'
};
module.exports = exports['default'];

/***/ }),

/***/ 71899:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'twilight',
  author: 'david hart (http://hart-dev.com)',
  base00: '#1e1e1e',
  base01: '#323537',
  base02: '#464b50',
  base03: '#5f5a60',
  base04: '#838184',
  base05: '#a7a7a7',
  base06: '#c3c3c3',
  base07: '#ffffff',
  base08: '#cf6a4c',
  base09: '#cda869',
  base0A: '#f9ee98',
  base0B: '#8f9d6a',
  base0C: '#afc4db',
  base0D: '#7587a6',
  base0E: '#9b859d',
  base0F: '#9b703f'
};
module.exports = exports['default'];

/***/ }),

/***/ 44431:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.0
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                    // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',      // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if only one character,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '1e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return BigNumber; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node.js and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ 60695:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeDateTimeComponent = exports.mergeDateTimeResult = void 0;
const index_1 = __webpack_require__(72174);
function mergeDateTimeResult(dateResult, timeResult) {
    const result = dateResult.clone();
    const beginDate = dateResult.start;
    const beginTime = timeResult.start;
    result.start = mergeDateTimeComponent(beginDate, beginTime);
    if (dateResult.end != null || timeResult.end != null) {
        const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
        const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
        const endDateTime = mergeDateTimeComponent(endDate, endTime);
        if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
            if (endDateTime.isCertain("day")) {
                endDateTime.assign("day", endDateTime.get("day") + 1);
            }
            else {
                endDateTime.imply("day", endDateTime.get("day") + 1);
            }
        }
        result.end = endDateTime;
    }
    return result;
}
exports.mergeDateTimeResult = mergeDateTimeResult;
function mergeDateTimeComponent(dateComponent, timeComponent) {
    const dateTimeComponent = dateComponent.clone();
    if (timeComponent.isCertain("hour")) {
        dateTimeComponent.assign("hour", timeComponent.get("hour"));
        dateTimeComponent.assign("minute", timeComponent.get("minute"));
        if (timeComponent.isCertain("second")) {
            dateTimeComponent.assign("second", timeComponent.get("second"));
            if (timeComponent.isCertain("millisecond")) {
                dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
            }
            else {
                dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
            }
        }
        else {
            dateTimeComponent.imply("second", timeComponent.get("second"));
            dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
        }
    }
    else {
        dateTimeComponent.imply("hour", timeComponent.get("hour"));
        dateTimeComponent.imply("minute", timeComponent.get("minute"));
        dateTimeComponent.imply("second", timeComponent.get("second"));
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
    if (timeComponent.isCertain("timezoneOffset")) {
        dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
    }
    if (timeComponent.isCertain("meridiem")) {
        dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
    }
    else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
        dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
    }
    if (dateTimeComponent.get("meridiem") == index_1.Meridiem.PM && dateTimeComponent.get("hour") < 12) {
        if (timeComponent.isCertain("hour")) {
            dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
        }
        else {
            dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
        }
    }
    return dateTimeComponent;
}
exports.mergeDateTimeComponent = mergeDateTimeComponent;


/***/ }),

/***/ 5578:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toDayJSClosestWeekday = exports.toDayJSWeekday = void 0;
const dayjs_1 = __importDefault(__webpack_require__(27484));
function toDayJSWeekday(refDate, offset, modifier) {
    if (!modifier) {
        return toDayJSClosestWeekday(refDate, offset);
    }
    let date = dayjs_1.default(refDate);
    switch (modifier) {
        case "this":
            date = date.day(offset);
            break;
        case "next":
            date = date.day(offset + 7);
            break;
        case "last":
            date = date.day(offset - 7);
            break;
    }
    return date;
}
exports.toDayJSWeekday = toDayJSWeekday;
function toDayJSClosestWeekday(refDate, offset) {
    let date = dayjs_1.default(refDate);
    const refOffset = date.day();
    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        date = date.day(offset - 7);
    }
    else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        date = date.day(offset + 7);
    }
    else {
        date = date.day(offset);
    }
    return date;
}
exports.toDayJSClosestWeekday = toDayJSClosestWeekday;


/***/ }),

/***/ 29739:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findYearClosestToRef = exports.findMostLikelyADYear = void 0;
const dayjs_1 = __importDefault(__webpack_require__(27484));
function findMostLikelyADYear(yearNumber) {
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
exports.findMostLikelyADYear = findMostLikelyADYear;
function findYearClosestToRef(refDate, day, month) {
    const refMoment = dayjs_1.default(refDate);
    let dateMoment = refMoment;
    dateMoment = dateMoment.month(month - 1);
    dateMoment = dateMoment.date(day);
    dateMoment = dateMoment.year(refMoment.year());
    const nextYear = dateMoment.add(1, "y");
    const lastYear = dateMoment.add(-1, "y");
    if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = nextYear;
    }
    else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = lastYear;
    }
    return dateMoment.year();
}
exports.findYearClosestToRef = findYearClosestToRef;


/***/ }),

/***/ 62469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParsingContext = exports.Chrono = void 0;
const results_1 = __webpack_require__(78151);
const en_1 = __webpack_require__(27678);
class Chrono {
    constructor(configuration) {
        configuration = configuration || en_1.createCasualConfiguration();
        this.parsers = [...configuration.parsers];
        this.refiners = [...configuration.refiners];
    }
    clone() {
        return new Chrono({
            parsers: [...this.parsers],
            refiners: [...this.refiners],
        });
    }
    parseDate(text, referenceDate, option) {
        const results = this.parse(text, referenceDate, option);
        return results.length > 0 ? results[0].start.date() : null;
    }
    parse(text, referenceDate, option) {
        const context = new ParsingContext(text, referenceDate || new Date(), option || {});
        let results = [];
        this.parsers.forEach((parser) => {
            const parsedResults = Chrono.executeParser(context, parser);
            results = results.concat(parsedResults);
        });
        results.sort((a, b) => {
            return a.index - b.index;
        });
        this.refiners.forEach(function (refiner) {
            results = refiner.refine(context, results);
        });
        return results;
    }
    static executeParser(context, parser) {
        const results = [];
        const pattern = parser.pattern(context);
        const originalText = context.text;
        let remainingText = context.text;
        let match = pattern.exec(remainingText);
        while (match) {
            const index = match.index + originalText.length - remainingText.length;
            match.index = index;
            const result = parser.extract(context, match);
            if (!result) {
                remainingText = originalText.substring(match.index + 1);
                match = pattern.exec(remainingText);
                continue;
            }
            let parsedResult = null;
            if (result instanceof results_1.ParsingResult) {
                parsedResult = result;
            }
            else if (result instanceof results_1.ParsingComponents) {
                parsedResult = context.createParsingResult(match.index, match[0]);
                parsedResult.start = result;
            }
            else {
                parsedResult = context.createParsingResult(match.index, match[0], result);
            }
            context.debug(() => console.log(`${parser.constructor.name} extracted result ${parsedResult}`));
            results.push(parsedResult);
            remainingText = originalText.substring(index + parsedResult.text.length);
            match = pattern.exec(remainingText);
        }
        return results;
    }
}
exports.Chrono = Chrono;
class ParsingContext {
    constructor(text, refDate, option) {
        this.text = text;
        this.refDate = refDate;
        this.option = option;
    }
    createParsingComponents(components) {
        if (components instanceof results_1.ParsingComponents) {
            return components;
        }
        return new results_1.ParsingComponents(this.refDate, components);
    }
    createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
        const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
        const start = startComponents ? this.createParsingComponents(startComponents) : null;
        const end = endComponents ? this.createParsingComponents(endComponents) : null;
        return new results_1.ParsingResult(this.refDate, index, text, start, end);
    }
    debug(block) {
        if (this.option.debug) {
            if (this.option.debug instanceof Function) {
                this.option.debug(block);
            }
            else {
                const handler = this.option.debug;
                handler.debug(block);
            }
        }
    }
}
exports.ParsingContext = ParsingContext;


/***/ }),

/***/ 59886:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MergingRefiner = exports.Filter = void 0;
class Filter {
    refine(context, results) {
        return results.filter((r) => this.isValid(context, r));
    }
}
exports.Filter = Filter;
class MergingRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const mergedResults = [];
        let curResult = results[0];
        let nextResult = null;
        for (let i = 1; i < results.length; i++) {
            nextResult = results[i];
            const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
            if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
                mergedResults.push(curResult);
                curResult = nextResult;
            }
            else {
                const left = curResult;
                const right = nextResult;
                const mergedResult = this.mergeResults(textBetween, left, right, context);
                context.debug(() => {
                    console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
                });
                curResult = mergedResult;
            }
        }
        if (curResult != null) {
            mergedResults.push(curResult);
        }
        return mergedResults;
    }
}
exports.MergingRefiner = MergingRefiner;


/***/ }),

/***/ 4519:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tonight = exports.tomorrow = exports.yesterday = exports.today = exports.now = void 0;
const results_1 = __webpack_require__(78151);
const dayjs_1 = __importDefault(__webpack_require__(27484));
const dayjs_2 = __webpack_require__(25763);
const index_1 = __webpack_require__(72174);
function now(refDate) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results_1.ParsingComponents(refDate, {});
    dayjs_2.assignSimilarDate(component, targetDate);
    dayjs_2.assignSimilarTime(component, targetDate);
    return component;
}
exports.now = now;
function today(refDate) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results_1.ParsingComponents(refDate, {});
    dayjs_2.assignSimilarDate(component, targetDate);
    dayjs_2.implySimilarTime(component, targetDate);
    return component;
}
exports.today = today;
function yesterday(refDate) {
    let targetDate = dayjs_1.default(refDate);
    const component = new results_1.ParsingComponents(refDate, {});
    targetDate = targetDate.add(-1, "day");
    dayjs_2.assignSimilarDate(component, targetDate);
    dayjs_2.implySimilarTime(component, targetDate);
    return component;
}
exports.yesterday = yesterday;
function tomorrow(refDate) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results_1.ParsingComponents(refDate, {});
    dayjs_2.assignTheNextDay(component, targetDate);
    return component;
}
exports.tomorrow = tomorrow;
function tonight(refDate, implyHour = 22) {
    const targetDate = dayjs_1.default(refDate);
    const component = new results_1.ParsingComponents(refDate, {});
    component.imply("hour", implyHour);
    component.imply("meridiem", index_1.Meridiem.PM);
    dayjs_2.assignSimilarDate(component, targetDate);
    return component;
}
exports.tonight = tonight;


/***/ }),

/***/ 15857:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractParserWithWordBoundaryChecking = void 0;
class AbstractParserWithWordBoundaryChecking {
    constructor() {
        this.cachedInnerPattern = null;
        this.cachedPattern = null;
    }
    pattern(context) {
        const innerPattern = this.innerPattern(context);
        if (innerPattern == this.cachedInnerPattern) {
            return this.cachedPattern;
        }
        this.cachedPattern = new RegExp(`(\\W|^)${innerPattern.source}`, innerPattern.flags);
        this.cachedInnerPattern = innerPattern;
        return this.cachedPattern;
    }
    extract(context, match) {
        const header = match[1];
        match.index = match.index + header.length;
        match[0] = match[0].substring(header.length);
        for (let i = 2; i < match.length; i++) {
            match[i - 1] = match[i];
        }
        return this.innerExtract(context, match);
    }
}
exports.AbstractParserWithWordBoundaryChecking = AbstractParserWithWordBoundaryChecking;


/***/ }),

/***/ 22786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractTimeExpressionParser = void 0;
const index_1 = __webpack_require__(72174);
function primaryTimePattern(primaryPrefix, primarySuffix) {
    return new RegExp("(^|\\s|T|\\b)" +
        `${primaryPrefix}` +
        "(\\d{1,4})" +
        "(?:" +
        "(?:\\.|\\:|\\：)" +
        "(\\d{1,2})" +
        "(?:" +
        "(?:\\:|\\：)" +
        "(\\d{2})" +
        "(?:\\.(\\d{1,6}))?" +
        ")?" +
        ")?" +
        "(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?" +
        `${primarySuffix}`, "i");
}
function followingTimePatten(followingPhase, followingSuffix) {
    return new RegExp(`^(${followingPhase})` +
        "(\\d{1,4})" +
        "(?:" +
        "(?:\\.|\\:|\\：)" +
        "(\\d{1,2})" +
        "(?:" +
        "(?:\\.|\\:|\\：)" +
        "(\\d{1,2})(?:\\.(\\d{1,6}))?" +
        ")?" +
        ")?" +
        "(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?" +
        `${followingSuffix}`, "i");
}
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const MILLI_SECOND_GROUP = 5;
const AM_PM_HOUR_GROUP = 6;
class AbstractTimeExpressionParser {
    constructor(strictMode = false) {
        this.cachedPrimaryPrefix = null;
        this.cachedPrimarySuffix = null;
        this.cachedPrimaryTimePattern = null;
        this.cachedFollowingPhase = null;
        this.cachedFollowingSuffix = null;
        this.cachedFollowingTimePatten = null;
        this.strictMode = strictMode;
    }
    primarySuffix() {
        return "(?=\\W|$)";
    }
    followingSuffix() {
        return "(?=\\W|$)";
    }
    pattern(context) {
        return this.getPrimaryTimePatternThroughCache();
    }
    extract(context, match) {
        const startComponents = this.extractPrimaryTimeComponents(context, match);
        if (!startComponents) {
            match.index += match[0].length;
            return null;
        }
        const index = match.index + match[1].length;
        const text = match[0].substring(match[1].length);
        const result = context.createParsingResult(index, text, startComponents);
        match.index += match[0].length;
        const remainingText = context.text.substring(match.index);
        const followingPattern = this.getFollowingTimePatternThroughCache();
        const followingMatch = followingPattern.exec(remainingText);
        if (!followingMatch ||
            followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
            return this.checkAndReturnWithoutFollowingPattern(result);
        }
        result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
        if (result.end) {
            result.text += followingMatch[0];
        }
        return this.checkAndReturnWithFollowingPattern(result);
    }
    extractPrimaryTimeComponents(context, match, strict = false) {
        const components = context.createParsingComponents();
        let minute = 0;
        let meridiem = null;
        let hour = parseInt(match[HOUR_GROUP]);
        if (hour > 100) {
            if (this.strictMode || match[MINUTE_GROUP] != null) {
                return null;
            }
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (hour > 24) {
            return null;
        }
        if (match[MINUTE_GROUP] != null) {
            if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
                return null;
            }
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 12) {
            meridiem = index_1.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = index_1.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = index_1.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem !== null) {
            components.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                components.imply("meridiem", index_1.Meridiem.AM);
            }
            else {
                components.imply("meridiem", index_1.Meridiem.PM);
            }
        }
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        return components;
    }
    extractFollowingTimeComponents(context, match, result) {
        const components = context.createParsingComponents();
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        let hour = parseInt(match[HOUR_GROUP]);
        let minute = 0;
        let meridiem = -1;
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = index_1.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12) {
                return null;
            }
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = index_1.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                    if (!components.isCertain("day")) {
                        components.imply("day", components.get("day") + 1);
                    }
                }
            }
            if (ampm == "p") {
                meridiem = index_1.Meridiem.PM;
                if (hour != 12)
                    hour += 12;
            }
            if (!result.start.isCertain("meridiem")) {
                if (meridiem == index_1.Meridiem.AM) {
                    result.start.imply("meridiem", index_1.Meridiem.AM);
                    if (result.start.get("hour") == 12) {
                        result.start.assign("hour", 0);
                    }
                }
                else {
                    result.start.imply("meridiem", index_1.Meridiem.PM);
                    if (result.start.get("hour") != 12) {
                        result.start.assign("hour", result.start.get("hour") + 12);
                    }
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem >= 0) {
            components.assign("meridiem", meridiem);
        }
        else {
            const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
            if (startAtPM) {
                if (result.start.get("hour") - 12 > hour) {
                    components.imply("meridiem", index_1.Meridiem.AM);
                }
                else if (hour <= 12) {
                    components.assign("hour", hour + 12);
                    components.assign("meridiem", index_1.Meridiem.PM);
                }
            }
            else if (hour > 12) {
                components.imply("meridiem", index_1.Meridiem.PM);
            }
            else if (hour <= 12) {
                components.imply("meridiem", index_1.Meridiem.AM);
            }
        }
        if (components.date().getTime() < result.start.date().getTime()) {
            components.imply("day", components.get("day") + 1);
        }
        return components;
    }
    checkAndReturnWithoutFollowingPattern(result) {
        if (result.text.match(/^\d$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
        if (endingWithNumbers) {
            const endingNumbers = endingWithNumbers[1];
            if (this.strictMode) {
                return null;
            }
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            if (endingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    checkAndReturnWithFollowingPattern(result) {
        if (result.text.match(/^\d+-\d+$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
        if (endingWithNumbers) {
            if (this.strictMode) {
                return null;
            }
            const startingNumbers = endingWithNumbers[1];
            const endingNumbers = endingWithNumbers[2];
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            const startingNumberVal = parseInt(startingNumbers);
            if (endingNumberVal > 24 || startingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    getPrimaryTimePatternThroughCache() {
        const primaryPrefix = this.primaryPrefix();
        const primarySuffix = this.primarySuffix();
        if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
            return this.cachedPrimaryTimePattern;
        }
        this.cachedPrimaryTimePattern = primaryTimePattern(primaryPrefix, primarySuffix);
        this.cachedPrimaryPrefix = primaryPrefix;
        this.cachedPrimarySuffix = primarySuffix;
        return this.cachedPrimaryTimePattern;
    }
    getFollowingTimePatternThroughCache() {
        const followingPhase = this.followingPhase();
        const followingSuffix = this.followingSuffix();
        if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
            return this.cachedFollowingTimePatten;
        }
        this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
        this.cachedFollowingPhase = followingPhase;
        this.cachedFollowingSuffix = followingSuffix;
        return this.cachedFollowingTimePatten;
    }
}
exports.AbstractTimeExpressionParser = AbstractTimeExpressionParser;


/***/ }),

/***/ 24414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})" +
    "(?:T" +
    "([0-9]{1,2}):([0-9]{1,2})" +
    "(?:" +
    ":([0-9]{1,2})(?:\\.(\\d{1,4}))?" +
    ")?" +
    "(?:" +
    "Z|([+-]\\d{2}):?(\\d{2})?" +
    ")?" +
    ")?" +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NUMBER_GROUP = 2;
const DATE_NUMBER_GROUP = 3;
const HOUR_NUMBER_GROUP = 4;
const MINUTE_NUMBER_GROUP = 5;
const SECOND_NUMBER_GROUP = 6;
const MILLISECOND_NUMBER_GROUP = 7;
const TZD_HOUR_OFFSET_GROUP = 8;
const TZD_MINUTE_OFFSET_GROUP = 9;
class ISOFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const components = {};
        components["year"] = parseInt(match[YEAR_NUMBER_GROUP]);
        components["month"] = parseInt(match[MONTH_NUMBER_GROUP]);
        components["day"] = parseInt(match[DATE_NUMBER_GROUP]);
        if (match[HOUR_NUMBER_GROUP] != null) {
            components["hour"] = parseInt(match[HOUR_NUMBER_GROUP]);
            components["minute"] = parseInt(match[MINUTE_NUMBER_GROUP]);
            if (match[SECOND_NUMBER_GROUP] != null) {
                components["second"] = parseInt(match[SECOND_NUMBER_GROUP]);
            }
            if (match[MILLISECOND_NUMBER_GROUP] != null) {
                components["millisecond"] = parseInt(match[MILLISECOND_NUMBER_GROUP]);
            }
            if (match[TZD_HOUR_OFFSET_GROUP] == null) {
                components["timezoneOffset"] = 0;
            }
            else {
                const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
                let minuteOffset = 0;
                if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
                    minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
                }
                let offset = hourOffset * 60;
                if (offset < 0) {
                    offset -= minuteOffset;
                }
                else {
                    offset += minuteOffset;
                }
                components["timezoneOffset"] = offset;
            }
        }
        return components;
    }
}
exports["default"] = ISOFormatParser;


/***/ }),

/***/ 63938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const PATTERN = new RegExp("([^\\d]|^)" +
    "([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})" +
    "(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?" +
    "(\\W|$)", "i");
const OPENING_GROUP = 1;
const ENDING_GROUP = 5;
const FIRST_NUMBERS_GROUP = 2;
const SECOND_NUMBERS_GROUP = 3;
const YEAR_GROUP = 4;
class SlashDateFormatParser {
    constructor(littleEndian) {
        this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
        this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
    }
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        if (match[OPENING_GROUP] == "/" || match[ENDING_GROUP] == "/") {
            match.index += match[0].length;
            return;
        }
        const index = match.index + match[OPENING_GROUP].length;
        const text = match[0].substr(match[OPENING_GROUP].length, match[0].length - match[OPENING_GROUP].length - match[ENDING_GROUP].length);
        if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
            return;
        }
        if (!match[YEAR_GROUP] && match[0].indexOf("/") < 0) {
            return;
        }
        const result = context.createParsingResult(index, text);
        let month = parseInt(match[this.groupNumberMonth]);
        let day = parseInt(match[this.groupNumberDay]);
        if (month < 1 || month > 12) {
            if (month > 12) {
                if (day >= 1 && day <= 12 && month <= 31) {
                    [day, month] = [month, day];
                }
                else {
                    return null;
                }
            }
        }
        if (day < 1 || day > 31) {
            return null;
        }
        result.start.assign("day", day);
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const rawYearNumber = parseInt(match[YEAR_GROUP]);
            const year = years_1.findMostLikelyADYear(rawYearNumber);
            result.start.assign("year", year);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
exports["default"] = SlashDateFormatParser;


/***/ }),

/***/ 17529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const abstractRefiners_1 = __webpack_require__(59886);
class AbstractMergeDateRangeRefiner extends abstractRefiners_1.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
    }
    mergeResults(textBetween, fromResult, toResult) {
        if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
            toResult.start.getCertainComponents().forEach((key) => {
                if (!fromResult.start.isCertain(key)) {
                    fromResult.start.assign(key, toResult.start.get(key));
                }
            });
            fromResult.start.getCertainComponents().forEach((key) => {
                if (!toResult.start.isCertain(key)) {
                    toResult.start.assign(key, fromResult.start.get(key));
                }
            });
        }
        if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
            let fromMoment = fromResult.start.dayjs();
            let toMoment = toResult.start.dayjs();
            if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
                fromMoment = fromMoment.add(-7, "days");
                fromResult.start.imply("day", fromMoment.date());
                fromResult.start.imply("month", fromMoment.month() + 1);
                fromResult.start.imply("year", fromMoment.year());
            }
            else if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
                toMoment = toMoment.add(7, "days");
                toResult.start.imply("day", toMoment.date());
                toResult.start.imply("month", toMoment.month() + 1);
                toResult.start.imply("year", toMoment.year());
            }
            else {
                [toResult, fromResult] = [fromResult, toResult];
            }
        }
        const result = fromResult.clone();
        result.start = fromResult.start;
        result.end = toResult.start;
        result.index = Math.min(fromResult.index, toResult.index);
        if (fromResult.index < toResult.index) {
            result.text = fromResult.text + textBetween + toResult.text;
        }
        else {
            result.text = toResult.text + textBetween + fromResult.text;
        }
        return result;
    }
}
exports["default"] = AbstractMergeDateRangeRefiner;


/***/ }),

/***/ 6747:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const abstractRefiners_1 = __webpack_require__(59886);
const mergingCalculation_1 = __webpack_require__(60695);
class ENMergeDateTimeRefiner extends abstractRefiners_1.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return (((currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime()) ||
            (nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime())) &&
            textBetween.match(this.patternBetween()) != null);
    }
    mergeResults(textBetween, currentResult, nextResult) {
        const result = currentResult.start.isOnlyDate()
            ? mergingCalculation_1.mergeDateTimeResult(currentResult, nextResult)
            : mergingCalculation_1.mergeDateTimeResult(nextResult, currentResult);
        result.index = currentResult.index;
        result.text = currentResult.text + textBetween + nextResult.text;
        return result;
    }
}
exports["default"] = ENMergeDateTimeRefiner;


/***/ }),

/***/ 84774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const TIMEZONE_NAME_PATTERN = new RegExp("^\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
const DEFAULT_TIMEZONE_ABBR_MAP = {
    ACDT: 630,
    ACST: 570,
    ADT: -180,
    AEDT: 660,
    AEST: 600,
    AFT: 270,
    AKDT: -480,
    AKST: -540,
    ALMT: 360,
    AMST: -180,
    AMT: -240,
    ANAST: 720,
    ANAT: 720,
    AQTT: 300,
    ART: -180,
    AST: -240,
    AWDT: 540,
    AWST: 480,
    AZOST: 0,
    AZOT: -60,
    AZST: 300,
    AZT: 240,
    BNT: 480,
    BOT: -240,
    BRST: -120,
    BRT: -180,
    BST: 60,
    BTT: 360,
    CAST: 480,
    CAT: 120,
    CCT: 390,
    CDT: -300,
    CEST: 120,
    CET: 60,
    CHADT: 825,
    CHAST: 765,
    CKT: -600,
    CLST: -180,
    CLT: -240,
    COT: -300,
    CST: -360,
    CVT: -60,
    CXT: 420,
    ChST: 600,
    DAVT: 420,
    EASST: -300,
    EAST: -360,
    EAT: 180,
    ECT: -300,
    EDT: -240,
    EEST: 180,
    EET: 120,
    EGST: 0,
    EGT: -60,
    EST: -300,
    ET: -300,
    FJST: 780,
    FJT: 720,
    FKST: -180,
    FKT: -240,
    FNT: -120,
    GALT: -360,
    GAMT: -540,
    GET: 240,
    GFT: -180,
    GILT: 720,
    GMT: 0,
    GST: 240,
    GYT: -240,
    HAA: -180,
    HAC: -300,
    HADT: -540,
    HAE: -240,
    HAP: -420,
    HAR: -360,
    HAST: -600,
    HAT: -90,
    HAY: -480,
    HKT: 480,
    HLV: -210,
    HNA: -240,
    HNC: -360,
    HNE: -300,
    HNP: -480,
    HNR: -420,
    HNT: -150,
    HNY: -540,
    HOVT: 420,
    ICT: 420,
    IDT: 180,
    IOT: 360,
    IRDT: 270,
    IRKST: 540,
    IRKT: 540,
    IRST: 210,
    IST: 330,
    JST: 540,
    KGT: 360,
    KRAST: 480,
    KRAT: 480,
    KST: 540,
    KUYT: 240,
    LHDT: 660,
    LHST: 630,
    LINT: 840,
    MAGST: 720,
    MAGT: 720,
    MART: -510,
    MAWT: 300,
    MDT: -360,
    MESZ: 120,
    MEZ: 60,
    MHT: 720,
    MMT: 390,
    MSD: 240,
    MSK: 240,
    MST: -420,
    MUT: 240,
    MVT: 300,
    MYT: 480,
    NCT: 660,
    NDT: -90,
    NFT: 690,
    NOVST: 420,
    NOVT: 360,
    NPT: 345,
    NST: -150,
    NUT: -660,
    NZDT: 780,
    NZST: 720,
    OMSST: 420,
    OMST: 420,
    PDT: -420,
    PET: -300,
    PETST: 720,
    PETT: 720,
    PGT: 600,
    PHOT: 780,
    PHT: 480,
    PKT: 300,
    PMDT: -120,
    PMST: -180,
    PONT: 660,
    PST: -480,
    PT: -480,
    PWT: 540,
    PYST: -180,
    PYT: -240,
    RET: 240,
    SAMT: 240,
    SAST: 120,
    SBT: 660,
    SCT: 240,
    SGT: 480,
    SRT: -180,
    SST: -660,
    TAHT: -600,
    TFT: 300,
    TJT: 300,
    TKT: 780,
    TLT: 540,
    TMT: 300,
    TVT: 720,
    ULAT: 480,
    UTC: 0,
    UYST: -120,
    UYT: -180,
    UZT: 300,
    VET: -210,
    VLAST: 660,
    VLAT: 660,
    VUT: 660,
    WAST: 120,
    WAT: 60,
    WEST: 60,
    WESZ: 60,
    WET: 0,
    WEZ: 0,
    WFT: 720,
    WGST: -120,
    WGT: -180,
    WIB: 420,
    WIT: 540,
    WITA: 480,
    WST: 780,
    WT: 0,
    YAKST: 600,
    YAKT: 600,
    YAPT: 600,
    YEKST: 360,
    YEKT: 360,
};
class ExtractTimezoneAbbrRefiner {
    constructor(timezoneOverrides) {
        this.timezone = Object.assign(Object.assign({}, DEFAULT_TIMEZONE_ABBR_MAP), timezoneOverrides);
    }
    refine(context, results) {
        var _a;
        const timezoneOverrides = (_a = context.option.timezones) !== null && _a !== void 0 ? _a : {};
        results.forEach((result) => {
            var _a, _b;
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_NAME_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            const timezoneAbbr = match[1].toUpperCase();
            const extractedTimezoneOffset = (_b = (_a = timezoneOverrides[timezoneAbbr]) !== null && _a !== void 0 ? _a : this.timezone[timezoneAbbr]) !== null && _b !== void 0 ? _b : null;
            if (extractedTimezoneOffset === null) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${timezoneAbbr}' into : ${extractedTimezoneOffset}`);
            });
            const currentTimezoneOffset = result.start.get("timezoneOffset");
            if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
                return;
            }
            result.text += match[0];
            if (!result.start.isCertain("timezoneOffset")) {
                result.start.assign("timezoneOffset", extractedTimezoneOffset);
            }
            if (result.end != null && !result.end.isCertain("timezoneOffset")) {
                result.end.assign("timezoneOffset", extractedTimezoneOffset);
            }
        });
        return results;
    }
}
exports["default"] = ExtractTimezoneAbbrRefiner;


/***/ }),

/***/ 45673:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?", "i");
const TIMEZONE_OFFSET_SIGN_GROUP = 1;
const TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
const TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
class ExtractTimezoneOffsetRefiner {
    refine(context, results) {
        results.forEach(function (result) {
            if (result.start.isCertain("timezoneOffset")) {
                return;
            }
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
            });
            const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
            const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
            let timezoneOffset = hourOffset * 60 + minuteOffset;
            if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
                timezoneOffset = -timezoneOffset;
            }
            if (result.end != null) {
                result.end.assign("timezoneOffset", timezoneOffset);
            }
            result.start.assign("timezoneOffset", timezoneOffset);
            result.text += match[0];
        });
        return results;
    }
}
exports["default"] = ExtractTimezoneOffsetRefiner;


/***/ }),

/***/ 87141:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(27484));
class ForwardDateRefiner {
    refine(context, results) {
        if (!context.option.forwardDate) {
            return results;
        }
        results.forEach(function (result) {
            let refMoment = dayjs_1.default(context.refDate);
            if (result.start.isOnlyDayMonthComponent() && refMoment.isAfter(result.start.dayjs())) {
                for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
                    result.start.imply("year", result.start.get("year") + 1);
                    context.debug(() => {
                        console.log(`Forward yearly adjusted for ${result} (${result.start})`);
                    });
                    if (result.end && !result.end.isCertain("year")) {
                        result.end.imply("year", result.end.get("year") + 1);
                        context.debug(() => {
                            console.log(`Forward yearly adjusted for ${result} (${result.end})`);
                        });
                    }
                }
            }
            if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
                if (refMoment.day() > result.start.get("weekday")) {
                    refMoment = refMoment.day(result.start.get("weekday") + 7);
                }
                else {
                    refMoment = refMoment.day(result.start.get("weekday"));
                }
                result.start.imply("day", refMoment.date());
                result.start.imply("month", refMoment.month() + 1);
                result.start.imply("year", refMoment.year());
                context.debug(() => {
                    console.log(`Forward weekly adjusted for ${result} (${result.start})`);
                });
                if (result.end && result.end.isOnlyWeekdayComponent()) {
                    if (refMoment.day() > result.end.get("weekday")) {
                        refMoment = refMoment.day(result.end.get("weekday") + 7);
                    }
                    else {
                        refMoment = refMoment.day(result.end.get("weekday"));
                    }
                    result.end.imply("day", refMoment.date());
                    result.end.imply("month", refMoment.month() + 1);
                    result.end.imply("year", refMoment.year());
                    context.debug(() => {
                        console.log(`Forward weekly adjusted for ${result} (${result.end})`);
                    });
                }
            }
        });
        return results;
    }
}
exports["default"] = ForwardDateRefiner;


/***/ }),

/***/ 78371:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const abstractRefiners_1 = __webpack_require__(59886);
class MergeWeekdayComponentRefiner extends abstractRefiners_1.MergingRefiner {
    mergeResults(textBetween, currentResult, nextResult) {
        const newResult = nextResult.clone();
        newResult.index = currentResult.index;
        newResult.text = currentResult.text + textBetween + newResult.text;
        newResult.start.assign("weekday", currentResult.start.get("weekday"));
        if (newResult.end) {
            newResult.end.assign("weekday", currentResult.start.get("weekday"));
        }
        return newResult;
    }
    shouldMergeResults(textBetween, currentResult, nextResult) {
        const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() &&
            !currentResult.start.isCertain("hour") &&
            nextResult.start.isCertain("day");
        return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
    }
}
exports["default"] = MergeWeekdayComponentRefiner;


/***/ }),

/***/ 54851:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class OverlapRemovalRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const filteredResults = [];
        let prevResult = results[0];
        for (let i = 1; i < results.length; i++) {
            const result = results[i];
            if (result.index < prevResult.index + prevResult.text.length) {
                if (result.text.length > prevResult.text.length) {
                    prevResult = result;
                }
            }
            else {
                filteredResults.push(prevResult);
                prevResult = result;
            }
        }
        if (prevResult != null) {
            filteredResults.push(prevResult);
        }
        return filteredResults;
    }
}
exports["default"] = OverlapRemovalRefiner;


/***/ }),

/***/ 55149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const abstractRefiners_1 = __webpack_require__(59886);
class UnlikelyFormatFilter extends abstractRefiners_1.Filter {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    isValid(context, result) {
        if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
            context.debug(() => {
                console.log(`Removing unlikely result '${result.text}'`);
            });
            return false;
        }
        if (!result.start.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.start})`);
            });
            return false;
        }
        if (result.end && !result.end.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.end})`);
            });
            return false;
        }
        if (this.strictMode) {
            return this.isStrictModeValid(context, result);
        }
        return true;
    }
    isStrictModeValid(context, result) {
        if (result.start.isOnlyWeekdayComponent()) {
            context.debug(() => {
                console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
            });
            return false;
        }
        if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
            context.debug(() => {
                console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
            });
            return false;
        }
        return true;
    }
}
exports["default"] = UnlikelyFormatFilter;


/***/ }),

/***/ 97468:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.includeCommonConfiguration = void 0;
const ExtractTimezoneAbbrRefiner_1 = __importDefault(__webpack_require__(84774));
const ExtractTimezoneOffsetRefiner_1 = __importDefault(__webpack_require__(45673));
const OverlapRemovalRefiner_1 = __importDefault(__webpack_require__(54851));
const ForwardDateRefiner_1 = __importDefault(__webpack_require__(87141));
const UnlikelyFormatFilter_1 = __importDefault(__webpack_require__(55149));
const ISOFormatParser_1 = __importDefault(__webpack_require__(24414));
const MergeWeekdayComponentRefiner_1 = __importDefault(__webpack_require__(78371));
function includeCommonConfiguration(configuration, strictMode = false) {
    configuration.parsers.unshift(new ISOFormatParser_1.default());
    configuration.refiners.unshift(new MergeWeekdayComponentRefiner_1.default());
    configuration.refiners.unshift(new ExtractTimezoneAbbrRefiner_1.default());
    configuration.refiners.unshift(new ExtractTimezoneOffsetRefiner_1.default());
    configuration.refiners.unshift(new OverlapRemovalRefiner_1.default());
    configuration.refiners.push(new OverlapRemovalRefiner_1.default());
    configuration.refiners.push(new ForwardDateRefiner_1.default());
    configuration.refiners.push(new UnlikelyFormatFilter_1.default(strictMode));
    return configuration;
}
exports.includeCommonConfiguration = includeCommonConfiguration;


/***/ }),

/***/ 72174:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseDate = exports.parse = exports.casual = exports.strict = exports.nl = exports.pt = exports.ja = exports.fr = exports.de = exports.Meridiem = exports.Chrono = exports.en = void 0;
const en = __importStar(__webpack_require__(27678));
exports.en = en;
const chrono_1 = __webpack_require__(62469);
Object.defineProperty(exports, "Chrono", ({ enumerable: true, get: function () { return chrono_1.Chrono; } }));
var Meridiem;
(function (Meridiem) {
    Meridiem[Meridiem["AM"] = 0] = "AM";
    Meridiem[Meridiem["PM"] = 1] = "PM";
})(Meridiem = exports.Meridiem || (exports.Meridiem = {}));
const de = __importStar(__webpack_require__(17566));
exports.de = de;
const fr = __importStar(__webpack_require__(69846));
exports.fr = fr;
const ja = __importStar(__webpack_require__(21628));
exports.ja = ja;
const pt = __importStar(__webpack_require__(59860));
exports.pt = pt;
const nl = __importStar(__webpack_require__(23570));
exports.nl = nl;
exports.strict = en.strict;
exports.casual = en.casual;
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;


/***/ }),

/***/ 94160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;
const pattern_1 = __webpack_require__(95801);
const years_1 = __webpack_require__(29739);
exports.WEEKDAY_DICTIONARY = {
    "sonntag": 0,
    "so": 0,
    "montag": 1,
    "mo": 1,
    "dienstag": 2,
    "di": 2,
    "mittwoch": 3,
    "mi": 3,
    "donnerstag": 4,
    "do": 4,
    "freitag": 5,
    "fr": 5,
    "samstag": 6,
    "sa": 6,
};
exports.MONTH_DICTIONARY = {
    "januar": 1,
    "jan": 1,
    "jan.": 1,
    "februar": 2,
    "feb": 2,
    "feb.": 2,
    "märz": 3,
    "maerz": 3,
    "mär": 3,
    "mär.": 3,
    "mrz": 3,
    "mrz.": 3,
    "april": 4,
    "apr": 4,
    "apr.": 4,
    "mai": 5,
    "juni": 6,
    "jun": 6,
    "jun.": 6,
    "juli": 7,
    "jul": 7,
    "jul.": 7,
    "august": 8,
    "aug": 8,
    "aug.": 8,
    "september": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "oktober": 10,
    "okt": 10,
    "okt.": 10,
    "november": 11,
    "nov": 11,
    "nov.": 11,
    "dezember": 12,
    "dez": 12,
    "dez.": 12,
};
exports.INTEGER_WORD_DICTIONARY = {
    "eins": 1,
    "zwei": 2,
    "drei": 3,
    "vier": 4,
    "fünf": 5,
    "fuenf": 5,
    "sechs": 6,
    "sieben": 7,
    "acht": 8,
    "neun": 9,
    "zehn": 10,
    "elf": 11,
    "zwölf": 12,
    "zwoelf": 12,
};
exports.TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconds: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    day: "d",
    days: "d",
    week: "week",
    weeks: "week",
    month: "month",
    months: "month",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
};
exports.NUMBER_PATTERN = `(?:${pattern_1.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s*an?)?|an?(?:\\s*few)?|few|several|a?\\s*couple\\s*(?:of)?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "a" || num === "an") {
        return 1;
    }
    else if (num.match(/few/)) {
        return 3;
    }
    else if (num.match(/half/)) {
        return 0.5;
    }
    else if (num.match(/couple/)) {
        return 2;
    }
    else if (num.match(/several/)) {
        return 7;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.YEAR_PATTERN = `(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*C(?:hr)?\\.?)?)`;
function parseYear(match) {
    if (/v/i.test(match)) {
        return -parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    if (/n/i.test(match)) {
        return parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    const rawYearNumber = parseInt(match);
    return years_1.findMostLikelyADYear(rawYearNumber);
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern_1.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern_1.repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}


/***/ }),

/***/ 17566:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;
const configurations_1 = __webpack_require__(97468);
const chrono_1 = __webpack_require__(62469);
const SlashDateFormatParser_1 = __importDefault(__webpack_require__(63938));
const ISOFormatParser_1 = __importDefault(__webpack_require__(24414));
const DETimeExpressionParser_1 = __importDefault(__webpack_require__(36633));
const DEWeekdayParser_1 = __importDefault(__webpack_require__(5909));
const DEMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(54262));
const DEMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(81305));
const DECasualDateParser_1 = __importDefault(__webpack_require__(96276));
const DECasualTimeParser_1 = __importDefault(__webpack_require__(88171));
const DEMonthNameLittleEndianParser_1 = __importDefault(__webpack_require__(15054));
exports.casual = new chrono_1.Chrono(createCasualConfiguration());
exports.strict = new chrono_1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new DECasualTimeParser_1.default());
    option.parsers.unshift(new DECasualDateParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations_1.includeCommonConfiguration({
        parsers: [
            new ISOFormatParser_1.default(),
            new SlashDateFormatParser_1.default(littleEndian),
            new DETimeExpressionParser_1.default(),
            new DEMonthNameLittleEndianParser_1.default(),
            new DEWeekdayParser_1.default(),
        ],
        refiners: [new DEMergeDateRangeRefiner_1.default(), new DEMergeDateTimeRefiner_1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;


/***/ }),

/***/ 96276:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(27484));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_2 = __webpack_require__(25763);
const DECasualTimeParser_1 = __importDefault(__webpack_require__(88171));
const references = __importStar(__webpack_require__(4519));
const PATTERN = new RegExp(`(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)` +
    `(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const TIME_GROUP = 2;
class DECasualDateParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return PATTERN;
    }
    innerExtract(context, match) {
        let targetDate = dayjs_1.default(context.refDate);
        const dateKeyword = (match[DATE_GROUP] || "").toLowerCase();
        const timeKeyword = (match[TIME_GROUP] || "").toLowerCase();
        let component = context.createParsingComponents();
        switch (dateKeyword) {
            case "jetzt":
                component = references.now(context.refDate);
                break;
            case "heute":
                component = references.today(context.refDate);
                break;
            case "morgen":
                dayjs_2.assignTheNextDay(component, targetDate);
                break;
            case "übermorgen":
            case "uebermorgen":
                targetDate = targetDate.add(1, "day");
                dayjs_2.assignTheNextDay(component, targetDate);
                break;
            case "gestern":
                targetDate = targetDate.add(-1, "day");
                dayjs_2.assignSimilarDate(component, targetDate);
                dayjs_2.implySimilarTime(component, targetDate);
                break;
            case "vorgestern":
                targetDate = targetDate.add(-2, "day");
                dayjs_2.assignSimilarDate(component, targetDate);
                dayjs_2.implySimilarTime(component, targetDate);
                break;
            default:
                if (dateKeyword.match(/letzte\s*nacht/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    dayjs_2.assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        if (timeKeyword) {
            component = DECasualTimeParser_1.default.extractTimeComponents(component, timeKeyword);
        }
        return component;
    }
}
exports["default"] = DECasualDateParser;


/***/ }),

/***/ 88171:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(27484));
const index_1 = __webpack_require__(72174);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_2 = __webpack_require__(25763);
const timeunits_1 = __webpack_require__(50180);
class DECasualTimeParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_1.default(context.refDate);
        const timeKeywordPattern = match[2].toLowerCase();
        const component = context.createParsingComponents();
        dayjs_2.implySimilarTime(component, targetDate);
        return DECasualTimeParser.extractTimeComponents(component, timeKeywordPattern);
    }
    static extractTimeComponents(component, timeKeywordPattern) {
        switch (timeKeywordPattern) {
            case "morgen":
                component.imply("hour", 6);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
            case "vormittag":
                component.imply("hour", 9);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
            case "mittag":
            case "mittags":
                component.imply("hour", 12);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
            case "nachmittag":
                component.imply("hour", 15);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.PM);
                break;
            case "abend":
                component.imply("hour", 18);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.PM);
                break;
            case "nacht":
                component.imply("hour", 22);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.PM);
                break;
            case "mitternacht":
                if (component.get("hour") > 1) {
                    component = timeunits_1.addImpliedTimeUnits(component, { "day": 1 });
                }
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
        }
        return component;
    }
}
exports["default"] = DECasualTimeParser;


/***/ }),

/***/ 15054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const constants_1 = __webpack_require__(94160);
const constants_2 = __webpack_require__(94160);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("(?:am\\s*?)?" +
    "(?:den\\s*?)?" +
    `([0-9]{1,2})\\.` +
    `(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*` +
    `(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})` +
    `(?:(?:-|/|,?\\s*)(${constants_2.YEAR_PATTERN}(?![^\\s]\\d)))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class DEMonthNameLittleEndianParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports["default"] = DEMonthNameLittleEndianParser;


/***/ }),

/***/ 36633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractTimeExpressionParser_1 = __webpack_require__(22786);
const index_1 = __webpack_require__(72174);
class DETimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:um|von)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|bis)\\s*";
    }
    primarySuffix() {
        return "(?:\\s*uhr)?(?:\\s*(?:morgens|vormittags|nachmittags|abends|nachts))?(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (components) {
            if (match[0].endsWith("morgens") || match[0].endsWith("vormittags")) {
                components.assign("meridiem", index_1.Meridiem.AM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour"));
                }
            }
            if (match[0].endsWith("nachmittags") || match[0].endsWith("abends") || match[0].endsWith("nachts")) {
                components.assign("meridiem", index_1.Meridiem.PM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour") + 12);
                }
            }
        }
        return components;
    }
}
exports["default"] = DETimeExpressionParser;


/***/ }),

/***/ 5909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(94160);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const weeks_1 = __webpack_require__(5578);
const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:a[mn]\\s*?)?" +
    "(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?" +
    `(${pattern_1.matchAnyPattern(constants_1.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const SUFFIX_GROUP = 3;
const WEEKDAY_GROUP = 2;
class DEWeekdayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants_1.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[SUFFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord.match(/letzte/)) {
            modifier = "last";
        }
        else if (modifierWord.match(/chste/)) {
            modifier = "next";
        }
        else if (modifierWord.match(/diese/)) {
            modifier = "this";
        }
        const date = weeks_1.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports["default"] = DEWeekdayParser;


/***/ }),

/***/ 54262:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(17529));
class DEMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1.default {
    patternBetween() {
        return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
    }
}
exports["default"] = DEMergeDateRangeRefiner;


/***/ }),

/***/ 81305:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(6747));
class DEMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
    }
}
exports["default"] = DEMergeDateTimeRefiner;


/***/ }),

/***/ 64942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseOrdinalNumberPattern = exports.ORDINAL_NUMBER_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.ORDINAL_WORD_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.FULL_MONTH_NAME_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;
const pattern_1 = __webpack_require__(95801);
const years_1 = __webpack_require__(29739);
exports.WEEKDAY_DICTIONARY = {
    sunday: 0,
    sun: 0,
    "sun.": 0,
    monday: 1,
    mon: 1,
    "mon.": 1,
    tuesday: 2,
    tue: 2,
    "tue.": 2,
    wednesday: 3,
    wed: 3,
    "wed.": 3,
    thursday: 4,
    thurs: 4,
    "thurs.": 4,
    thur: 4,
    "thur.": 4,
    thu: 4,
    "thu.": 4,
    friday: 5,
    fri: 5,
    "fri.": 5,
    saturday: 6,
    sat: 6,
    "sat.": 6,
};
exports.FULL_MONTH_NAME_DICTIONARY = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
};
exports.MONTH_DICTIONARY = Object.assign(Object.assign({}, exports.FULL_MONTH_NAME_DICTIONARY), { jan: 1, "jan.": 1, feb: 2, "feb.": 2, mar: 3, "mar.": 3, apr: 4, "apr.": 4, jun: 6, "jun.": 6, jul: 7, "jul.": 7, aug: 8, "aug.": 8, sep: 9, "sep.": 9, sept: 9, "sept.": 9, oct: 10, "oct.": 10, nov: 11, "nov.": 11, dec: 12, "dec.": 12 });
exports.INTEGER_WORD_DICTIONARY = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
};
exports.ORDINAL_WORD_DICTIONARY = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    "twenty first": 21,
    "twenty-first": 21,
    "twenty second": 22,
    "twenty-second": 22,
    "twenty third": 23,
    "twenty-third": 23,
    "twenty fourth": 24,
    "twenty-fourth": 24,
    "twenty fifth": 25,
    "twenty-fifth": 25,
    "twenty sixth": 26,
    "twenty-sixth": 26,
    "twenty seventh": 27,
    "twenty-seventh": 27,
    "twenty eighth": 28,
    "twenty-eighth": 28,
    "twenty ninth": 29,
    "twenty-ninth": 29,
    "thirtieth": 30,
    "thirty first": 31,
    "thirty-first": 31,
};
exports.TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconds: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    day: "d",
    days: "d",
    week: "week",
    weeks: "week",
    month: "month",
    months: "month",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
};
exports.NUMBER_PATTERN = `(?:${pattern_1.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s*an?)?|an?(?:\\s*few)?|few|several|a?\\s*couple\\s*(?:of)?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "a" || num === "an") {
        return 1;
    }
    else if (num.match(/few/)) {
        return 3;
    }
    else if (num.match(/half/)) {
        return 0.5;
    }
    else if (num.match(/couple/)) {
        return 2;
    }
    else if (num.match(/several/)) {
        return 7;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.ORDINAL_NUMBER_PATTERN = `(?:${pattern_1.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (exports.ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return exports.ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:st|nd|rd|th)$/i, "");
    return parseInt(num);
}
exports.parseOrdinalNumberPattern = parseOrdinalNumberPattern;
exports.YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:BE|AD|BC)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/BE/i.test(match)) {
        match = match.replace(/BE/i, "");
        return parseInt(match) - 543;
    }
    if (/BC/i.test(match)) {
        match = match.replace(/BC/i, "");
        return -parseInt(match);
    }
    if (/AD/i.test(match)) {
        match = match.replace(/AD/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return years_1.findMostLikelyADYear(rawYearNumber);
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern_1.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern_1.repeatedTimeunitPattern(`(?:(?:about|around)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}


/***/ }),

/***/ 27678:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.GB = exports.strict = exports.casual = void 0;
const ENTimeUnitWithinFormatParser_1 = __importDefault(__webpack_require__(76484));
const ENMonthNameLittleEndianParser_1 = __importDefault(__webpack_require__(11163));
const ENMonthNameMiddleEndianParser_1 = __importDefault(__webpack_require__(4826));
const ENMonthNameParser_1 = __importDefault(__webpack_require__(70935));
const ENCasualYearMonthDayParser_1 = __importDefault(__webpack_require__(46324));
const ENSlashMonthFormatParser_1 = __importDefault(__webpack_require__(46638));
const ENTimeExpressionParser_1 = __importDefault(__webpack_require__(77579));
const ENTimeUnitAgoFormatParser_1 = __importDefault(__webpack_require__(15372));
const ENTimeUnitLaterFormatParser_1 = __importDefault(__webpack_require__(28713));
const ENMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(62656));
const ENMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(42974));
const configurations_1 = __webpack_require__(97468);
const ENCasualDateParser_1 = __importDefault(__webpack_require__(44709));
const ENCasualTimeParser_1 = __importDefault(__webpack_require__(48872));
const ENWeekdayParser_1 = __importDefault(__webpack_require__(21946));
const ENRelativeDateFormatParser_1 = __importDefault(__webpack_require__(66099));
const chrono_1 = __webpack_require__(62469);
const SlashDateFormatParser_1 = __importDefault(__webpack_require__(63938));
const ENTimeUnitCasualRelativeFormatParser_1 = __importDefault(__webpack_require__(17597));
exports.casual = new chrono_1.Chrono(createCasualConfiguration(false));
exports.strict = new chrono_1.Chrono(createConfiguration(true, false));
exports.GB = new chrono_1.Chrono(createConfiguration(false, true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = false) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new ENCasualDateParser_1.default());
    option.parsers.unshift(new ENCasualTimeParser_1.default());
    option.parsers.unshift(new ENMonthNameParser_1.default());
    option.parsers.unshift(new ENRelativeDateFormatParser_1.default());
    option.parsers.unshift(new ENTimeUnitCasualRelativeFormatParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = false) {
    return configurations_1.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1.default(littleEndian),
            new ENTimeUnitWithinFormatParser_1.default(),
            new ENMonthNameLittleEndianParser_1.default(),
            new ENMonthNameMiddleEndianParser_1.default(),
            new ENWeekdayParser_1.default(),
            new ENCasualYearMonthDayParser_1.default(),
            new ENSlashMonthFormatParser_1.default(),
            new ENTimeExpressionParser_1.default(strictMode),
            new ENTimeUnitAgoFormatParser_1.default(strictMode),
            new ENTimeUnitLaterFormatParser_1.default(strictMode),
        ],
        refiners: [new ENMergeDateTimeRefiner_1.default(), new ENMergeDateRangeRefiner_1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;


/***/ }),

/***/ 44709:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(27484));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_2 = __webpack_require__(25763);
const references = __importStar(__webpack_require__(4519));
const PATTERN = /(now|today|tonight|tomorrow|tmr|yesterday|last\s*night)(?=\W|$)/i;
class ENCasualDateParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return PATTERN;
    }
    innerExtract(context, match) {
        let targetDate = dayjs_1.default(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "now":
                return references.now(context.refDate);
            case "today":
                return references.today(context.refDate);
            case "yesterday":
                return references.yesterday(context.refDate);
            case "tomorrow":
            case "tmr":
                return references.tomorrow(context.refDate);
            case "tonight":
                return references.tonight(context.refDate);
            default:
                if (lowerText.match(/last\s*night/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    dayjs_2.assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        return component;
    }
}
exports["default"] = ENCasualDateParser;


/***/ }),

/***/ 48872:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(72174);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_1 = __importDefault(__webpack_require__(27484));
const dayjs_2 = __webpack_require__(25763);
const PATTERN = /(?:this)?\s*(morning|afternoon|evening|night|midnight|noon)(?=\W|$)/i;
class ENCasualTimeParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_1.default(context.refDate);
        const component = context.createParsingComponents();
        switch (match[1].toLowerCase()) {
            case "afternoon":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "evening":
            case "night":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 20);
                break;
            case "midnight":
                dayjs_2.assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "morning":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "noon":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
exports["default"] = ENCasualTimeParser;


/***/ }),

/***/ 46324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` +
    `(?:(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class ENCasualYearMonthDayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = match[MONTH_NUMBER_GROUP]
            ? parseInt(match[MONTH_NUMBER_GROUP])
            : constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            return null;
        }
        const year = parseInt(match[YEAR_NUMBER_GROUP]);
        const day = parseInt(match[DATE_NUMBER_GROUP]);
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}
exports["default"] = ENCasualYearMonthDayParser;


/***/ }),

/***/ 11163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const constants_1 = __webpack_require__(64942);
const constants_2 = __webpack_require__(64942);
const constants_3 = __webpack_require__(64942);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${constants_3.ORDINAL_NUMBER_PATTERN})` +
    "(?:\\s*" +
    "(?:to|\\-|\\–|until|through|till|\\s)\\s*" +
    `(${constants_3.ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    "(?:-|/|\\s*(?:of)?\\s*)" +
    "(" +
    pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY) +
    ")" +
    "(?:" +
    "(?:-|/|,?\\s*)" +
    `(${constants_2.YEAR_PATTERN}(?![^\\s]\\d))` +
    ")?" +
    "(?=\\W|$)", "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameLittleEndianParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_3.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = constants_3.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports["default"] = ENMonthNameLittleEndianParser;


/***/ }),

/***/ 4826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const constants_1 = __webpack_require__(64942);
const constants_2 = __webpack_require__(64942);
const constants_3 = __webpack_require__(64942);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp(`(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})` +
    "(?:-|/|\\s*,?\\s*)" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*` +
    "(?:" +
    "(?:to|\\-)\\s*" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})\\s*` +
    ")?" +
    "(?:" +
    "(?:-|/|\\s*,?\\s*)" +
    `(${constants_3.YEAR_PATTERN})` +
    ")?" +
    "(?=\\W|$)(?!\\:\\d)", "i");
const MONTH_NAME_GROUP = 1;
const DATE_GROUP = 2;
const DATE_TO_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameMiddleEndianParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_2.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            return null;
        }
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[YEAR_GROUP]) {
            const year = constants_3.parseYear(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = constants_2.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}
exports["default"] = ENMonthNameMiddleEndianParser;


/***/ }),

/***/ 70935:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const years_1 = __webpack_require__(29739);
const pattern_1 = __webpack_require__(95801);
const constants_2 = __webpack_require__(64942);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp(`((?:in)\\s*)?` +
    `(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `[,-]?\\s*(${constants_2.YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const PREFIX_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class ENMonthNameParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const monthName = match[MONTH_NAME_GROUP].toLowerCase();
        if (match[0].length <= 3 && !constants_1.FULL_MONTH_NAME_DICTIONARY[monthName]) {
            return null;
        }
        const result = context.createParsingResult(match.index + (match[PREFIX_GROUP] || "").length, match.index + match[0].length);
        result.start.imply("day", 1);
        const month = constants_1.MONTH_DICTIONARY[monthName];
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, 1, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
exports["default"] = ENMonthNameParser;


/***/ }),

/***/ 66099:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const results_1 = __webpack_require__(78151);
const dayjs_1 = __importDefault(__webpack_require__(27484));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const pattern_1 = __webpack_require__(95801);
const PATTERN = new RegExp(`(this|next|last|past)\\s*(${pattern_1.matchAnyPattern(constants_1.TIME_UNIT_DICTIONARY)})(?=\\s*)` + "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class ENRelativeDateFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = constants_1.TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "next") {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
        }
        if (modifier == "last" || modifier == "past") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs_1.default(context.refDate);
        if (unitWord.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (unitWord.match(/month/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (unitWord.match(/year/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}
exports["default"] = ENRelativeDateFormatParser;


/***/ }),

/***/ 46638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class ENSlashMonthFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}
exports["default"] = ENSlashMonthFormatParser;


/***/ }),

/***/ 77579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(72174);
const AbstractTimeExpressionParser_1 = __webpack_require__(22786);
class ENTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    constructor(strictMode) {
        super(strictMode);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|to|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:at|from)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (components) {
            if (match[0].endsWith("night")) {
                const hour = components.get("hour");
                if (hour >= 6 && hour < 12) {
                    components.assign("hour", components.get("hour") + 12);
                    components.assign("meridiem", index_1.Meridiem.PM);
                }
                else if (hour < 6) {
                    components.assign("meridiem", index_1.Meridiem.AM);
                }
            }
            if (match[0].endsWith("afternoon")) {
                components.assign("meridiem", index_1.Meridiem.PM);
                const hour = components.get("hour");
                if (hour >= 0 && hour <= 6) {
                    components.assign("hour", components.get("hour") + 12);
                }
            }
            if (match[0].endsWith("morning")) {
                components.assign("meridiem", index_1.Meridiem.AM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour"));
                }
            }
        }
        return components;
    }
}
exports["default"] = ENTimeExpressionParser;


/***/ }),

/***/ 15372:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const timeunits_1 = __webpack_require__(50180);
const PATTERN = new RegExp("" + "(" + constants_1.TIME_UNITS_PATTERN + ")" + "(?:ago|before|earlier)(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + constants_1.TIME_UNITS_PATTERN + ")" + "ago(?=(?:\\W|$))", "i");
class ENTimeUnitAgoFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const timeUnits = constants_1.parseTimeUnits(match[1]);
        const outputTimeUnits = timeunits_1.reverseTimeUnits(timeUnits);
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, outputTimeUnits);
    }
}
exports["default"] = ENTimeUnitAgoFormatParser;


/***/ }),

/***/ 17597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const timeunits_1 = __webpack_require__(50180);
const PATTERN = new RegExp(`(this|last|past|next|\\+|-)\\s*(${constants_1.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const prefix = match[1].toLowerCase();
        let timeUnits = constants_1.parseTimeUnits(match[2]);
        switch (prefix) {
            case "last":
            case "past":
            case "-":
                timeUnits = timeunits_1.reverseTimeUnits(timeUnits);
                break;
        }
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports["default"] = ENTimeUnitCasualRelativeFormatParser;


/***/ }),

/***/ 28713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("" + "(" + constants_1.TIME_UNITS_PATTERN + ")" + "(later|after|from now|henceforth|forward|out)" + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + constants_1.TIME_UNITS_PATTERN + ")" + "(later|from now)" + "(?=(?:\\W|$))", "i");
const GROUP_NUM_TIMEUNITS = 1;
class ENTimeUnitLaterFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const fragments = constants_1.parseTimeUnits(match[GROUP_NUM_TIMEUNITS]);
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, fragments);
    }
}
exports["default"] = ENTimeUnitLaterFormatParser;


/***/ }),

/***/ 76484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${constants_1.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITHOUT_PREFIX = new RegExp(`(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${constants_1.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitWithinFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return context.option.forwardDate ? PATTERN_WITHOUT_PREFIX : PATTERN_WITH_PREFIX;
    }
    innerExtract(context, match) {
        const timeUnits = constants_1.parseTimeUnits(match[1]);
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports["default"] = ENTimeUnitWithinFormatParser;


/***/ }),

/***/ 21946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(64942);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const weeks_1 = __webpack_require__(5578);
const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:on\\s*?)?" +
    "(?:(this|last|past|next)\\s*)?" +
    `(${pattern_1.matchAnyPattern(constants_1.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(this|last|past|next)\\s*week)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ENWeekdayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants_1.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "last" || modifierWord == "past") {
            modifier = "last";
        }
        else if (modifierWord == "next") {
            modifier = "next";
        }
        else if (modifierWord == "this") {
            modifier = "this";
        }
        const date = weeks_1.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports["default"] = ENWeekdayParser;


/***/ }),

/***/ 62656:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(17529));
class ENMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1.default {
    patternBetween() {
        return /^\s*(to|-)\s*$/i;
    }
}
exports["default"] = ENMergeDateRangeRefiner;


/***/ }),

/***/ 42974:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(6747));
class ENMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(T|at|after|before|on|of|,|-)?\\s*$");
    }
}
exports["default"] = ENMergeDateTimeRefiner;


/***/ }),

/***/ 59279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseOrdinalNumberPattern = exports.ORDINAL_NUMBER_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;
const pattern_1 = __webpack_require__(95801);
exports.WEEKDAY_DICTIONARY = {
    "dimanche": 0,
    "dim": 0,
    "lundi": 1,
    "lun": 1,
    "mardi": 2,
    "mar": 2,
    "mercredi": 3,
    "mer": 3,
    "jeudi": 4,
    "jeu": 4,
    "vendredi": 5,
    "ven": 5,
    "samedi": 6,
    "sam": 6,
};
exports.MONTH_DICTIONARY = {
    "janvier": 1,
    "jan": 1,
    "jan.": 1,
    "février": 2,
    "fév": 2,
    "fév.": 2,
    "fevrier": 2,
    "fev": 2,
    "fev.": 2,
    "mars": 3,
    "mar": 3,
    "mar.": 3,
    "avril": 4,
    "avr": 4,
    "avr.": 4,
    "mai": 5,
    "juin": 6,
    "jun": 6,
    "juillet": 7,
    "juil": 7,
    "jul": 7,
    "jul.": 7,
    "août": 8,
    "aout": 8,
    "septembre": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "octobre": 10,
    "oct": 10,
    "oct.": 10,
    "novembre": 11,
    "nov": 11,
    "nov.": 11,
    "décembre": 12,
    "decembre": 12,
    "dec": 12,
    "dec.": 12,
};
exports.INTEGER_WORD_DICTIONARY = {
    "un": 1,
    "deux": 2,
    "trois": 3,
    "quatre": 4,
    "cinq": 5,
    "six": 6,
    "sept": 7,
    "huit": 8,
    "neuf": 9,
    "dix": 10,
    "onze": 11,
    "douze": 12,
    "treize": 13,
};
exports.TIME_UNIT_DICTIONARY = {
    "sec": "second",
    "seconde": "second",
    "secondes": "second",
    "min": "minute",
    "mins": "minute",
    "minute": "minute",
    "minutes": "minute",
    "h": "hour",
    "hr": "hour",
    "hrs": "hour",
    "heure": "hour",
    "heures": "hour",
    "jour": "d",
    "jours": "d",
    "semaine": "week",
    "semaines": "week",
    "mois": "month",
    "trimestre": "quarter",
    "trimestres": "quarter",
    "ans": "year",
    "année": "year",
    "années": "year",
};
exports.NUMBER_PATTERN = `(?:${pattern_1.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|une?|quelques?|demi-?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "une" || num === "un") {
        return 1;
    }
    else if (num.match(/quelques?/)) {
        return 3;
    }
    else if (num.match(/demi-?/)) {
        return 0.5;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.ORDINAL_NUMBER_PATTERN = `(?:[0-9]{1,2}(?:er)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    num = num.replace(/(?:er)$/i, "");
    return parseInt(num);
}
exports.parseOrdinalNumberPattern = parseOrdinalNumberPattern;
exports.YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/AC/i.test(match)) {
        match = match.replace(/BC/i, "");
        return -parseInt(match);
    }
    if (/AD/i.test(match) || /C/i.test(match)) {
        match = match.replace(/[^\d]+/i, "");
        return parseInt(match);
    }
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern_1.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern_1.repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}


/***/ }),

/***/ 69846:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;
const configurations_1 = __webpack_require__(97468);
const chrono_1 = __webpack_require__(62469);
const FRCasualDateParser_1 = __importDefault(__webpack_require__(57265));
const FRCasualTimeParser_1 = __importDefault(__webpack_require__(51000));
const SlashDateFormatParser_1 = __importDefault(__webpack_require__(63938));
const FRTimeExpressionParser_1 = __importDefault(__webpack_require__(95695));
const FRMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(62393));
const FRMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(96376));
const FRWeekdayParser_1 = __importDefault(__webpack_require__(89936));
const FRSpecificTimeExpressionParser_1 = __importDefault(__webpack_require__(1886));
const FRMonthNameLittleEndianParser_1 = __importDefault(__webpack_require__(46381));
const FRTimeUnitAgoFormatParser_1 = __importDefault(__webpack_require__(65117));
const FRTimeUnitWithinFormatParser_1 = __importDefault(__webpack_require__(78528));
const FRTimeUnitRelativeFormatParser_1 = __importDefault(__webpack_require__(3809));
exports.casual = new chrono_1.Chrono(createCasualConfiguration());
exports.strict = new chrono_1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new FRCasualDateParser_1.default());
    option.parsers.unshift(new FRCasualTimeParser_1.default());
    option.parsers.unshift(new FRTimeUnitRelativeFormatParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations_1.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1.default(littleEndian),
            new FRMonthNameLittleEndianParser_1.default(),
            new FRTimeExpressionParser_1.default(),
            new FRSpecificTimeExpressionParser_1.default(),
            new FRTimeUnitAgoFormatParser_1.default(),
            new FRTimeUnitWithinFormatParser_1.default(),
            new FRWeekdayParser_1.default(),
        ],
        refiners: [new FRMergeDateTimeRefiner_1.default(), new FRMergeDateRangeRefiner_1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;


/***/ }),

/***/ 57265:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(27484));
const index_1 = __webpack_require__(72174);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_2 = __webpack_require__(25763);
const references = __importStar(__webpack_require__(4519));
class FRCasualDateParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        let targetDate = dayjs_1.default(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "maintenant":
                return references.now(context.refDate);
            case "aujourd'hui":
                return references.today(context.refDate);
            case "hier":
                return references.yesterday(context.refDate);
            case "demain":
                return references.tomorrow(context.refDate);
            default:
                if (lowerText.match(/cette\s*nuit/)) {
                    dayjs_2.assignSimilarDate(component, targetDate);
                    component.imply("hour", 22);
                    component.imply("meridiem", index_1.Meridiem.PM);
                }
                else if (lowerText.match(/la\s*veille/)) {
                    targetDate = targetDate.add(-1, "day");
                    dayjs_2.assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
        }
        return component;
    }
}
exports["default"] = FRCasualDateParser;


/***/ }),

/***/ 51000:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(72174);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
class FRCasualTimeParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const suffixLower = match[2].toLowerCase();
        const component = context.createParsingComponents();
        switch (suffixLower) {
            case "après-midi":
            case "aprem":
                component.imply("hour", 14);
                component.imply("minute", 0);
                component.imply("meridiem", index_1.Meridiem.PM);
                break;
            case "soir":
                component.imply("hour", 18);
                component.imply("minute", 0);
                component.imply("meridiem", index_1.Meridiem.PM);
                break;
            case "matin":
                component.imply("hour", 8);
                component.imply("minute", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
            case "a midi":
                component.imply("hour", 12);
                component.imply("minute", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
            case "à minuit":
                component.imply("hour", 0);
                component.imply("meridiem", index_1.Meridiem.AM);
                break;
        }
        return component;
    }
}
exports["default"] = FRCasualTimeParser;


/***/ }),

/***/ 46381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const constants_1 = __webpack_require__(59279);
const constants_2 = __webpack_require__(59279);
const constants_3 = __webpack_require__(59279);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${constants_3.ORDINAL_NUMBER_PATTERN})` +
    `(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${constants_3.ORDINAL_NUMBER_PATTERN}))?` +
    `(?:-|/|\\s*(?:de)?\\s*)` +
    `(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})` +
    `(?:(?:-|/|,?\\s*)(${constants_2.YEAR_PATTERN}(?![^\\s]\\d)))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class FRMonthNameLittleEndianParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_3.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = constants_3.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports["default"] = FRMonthNameLittleEndianParser;


/***/ }),

/***/ 1886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(72174);
const FIRST_REG_PATTERN = new RegExp("(^|\\s|T)" +
    "(?:(?:[àa])\\s*)?" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s|:)?)?" +
    "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" +
    "(?=\\W|$)", "i");
const SECOND_REG_PATTERN = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s|:)?)?" +
    "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" +
    "(?=\\W|$)", "i");
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const AM_PM_HOUR_GROUP = 5;
class FRSpecificTimeExpressionParser {
    pattern(context) {
        return FIRST_REG_PATTERN;
    }
    extract(context, match) {
        const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
        if (result.text.match(/^\d{4}$/)) {
            match.index += match[0].length;
            return null;
        }
        result.start = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
        if (!result.start) {
            match.index += match[0].length;
            return null;
        }
        const remainingText = context.text.substring(match.index + match[0].length);
        const secondMatch = SECOND_REG_PATTERN.exec(remainingText);
        if (secondMatch) {
            result.end = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
            if (result.end) {
                result.text += secondMatch[0];
            }
        }
        return result;
    }
    static extractTimeComponent(extractingComponents, match) {
        let hour = 0;
        let minute = 0;
        let meridiem = null;
        hour = parseInt(match[HOUR_GROUP]);
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = index_1.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = index_1.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = index_1.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        extractingComponents.assign("hour", hour);
        extractingComponents.assign("minute", minute);
        if (meridiem !== null) {
            extractingComponents.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                extractingComponents.imply("meridiem", index_1.Meridiem.AM);
            }
            else {
                extractingComponents.imply("meridiem", index_1.Meridiem.PM);
            }
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            extractingComponents.assign("second", second);
        }
        return extractingComponents;
    }
}
exports["default"] = FRSpecificTimeExpressionParser;


/***/ }),

/***/ 95695:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractTimeExpressionParser_1 = __webpack_require__(22786);
class FRTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:[àa])\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
exports["default"] = FRTimeExpressionParser;


/***/ }),

/***/ 65117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(59279);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const timeunits_1 = __webpack_require__(50180);
class FRTimeUnitAgoFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`il y a\\s*(${constants_1.TIME_UNITS_PATTERN})(?=(?:\\W|$))`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = constants_1.parseTimeUnits(match[1]);
        const outputTimeUnits = timeunits_1.reverseTimeUnits(timeUnits);
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, outputTimeUnits);
    }
}
exports["default"] = FRTimeUnitAgoFormatParser;


/***/ }),

/***/ 3809:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(59279);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const timeunits_1 = __webpack_require__(50180);
const pattern_1 = __webpack_require__(95801);
class FRTimeUnitAgoFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`(?:les?|la|l'|du|des?)\\s*` +
            `(${constants_1.NUMBER_PATTERN})?` +
            `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?` +
            `\\s*(${pattern_1.matchAnyPattern(constants_1.TIME_UNIT_DICTIONARY)})` +
            `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?`, "i");
    }
    innerExtract(context, match) {
        const num = match[1] ? constants_1.parseNumberPattern(match[1]) : 1;
        const unit = constants_1.TIME_UNIT_DICTIONARY[match[3].toLowerCase()];
        let timeUnits = {};
        timeUnits[unit] = num;
        let modifier = match[2] || match[4] || "";
        modifier = modifier.toLowerCase();
        if (!modifier) {
            return;
        }
        if (/derni[eè]re?s?/.test(modifier) || /pass[ée]e?s?/.test(modifier) || /pr[ée]c[ée]dents?/.test(modifier)) {
            timeUnits = timeunits_1.reverseTimeUnits(timeUnits);
        }
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports["default"] = FRTimeUnitAgoFormatParser;


/***/ }),

/***/ 78528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(59279);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
class FRTimeUnitWithinFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:dans|en|pour|pendant)\\s*(${constants_1.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = constants_1.parseTimeUnits(match[1]);
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports["default"] = FRTimeUnitWithinFormatParser;


/***/ }),

/***/ 89936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(59279);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const weeks_1 = __webpack_require__(5578);
const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(?:ce)\\s*)?" +
    `(${pattern_1.matchAnyPattern(constants_1.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(dernier|prochain)\\s*)?" +
    "(?=\\W|\\d|$)", "i");
const WEEKDAY_GROUP = 1;
const POSTFIX_GROUP = 2;
class FRWeekdayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants_1.WEEKDAY_DICTIONARY[dayOfWeek];
        if (offset === undefined) {
            return null;
        }
        let suffix = match[POSTFIX_GROUP];
        suffix = suffix || "";
        suffix = suffix.toLowerCase();
        let modifier = null;
        if (suffix == "dernier") {
            modifier = "last";
        }
        else if (suffix == "prochain") {
            modifier = "next";
        }
        const date = weeks_1.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports["default"] = FRWeekdayParser;


/***/ }),

/***/ 96376:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(17529));
class FRMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1.default {
    patternBetween() {
        return /^\s*(à|a|-)\s*$/i;
    }
}
exports["default"] = FRMergeDateRangeRefiner;


/***/ }),

/***/ 62393:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(6747));
class FRMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(T|à|a|vers|de|,|-)?\\s*$");
    }
}
exports["default"] = FRMergeDateTimeRefiner;


/***/ }),

/***/ 10978:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toHankaku = void 0;
function toHankaku(text) {
    return String(text)
        .replace(/\u2019/g, "\u0027")
        .replace(/\u201D/g, "\u0022")
        .replace(/\u3000/g, "\u0020")
        .replace(/\uFFE5/g, "\u00A5")
        .replace(/[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g, alphaNum);
}
exports.toHankaku = toHankaku;
function alphaNum(token) {
    return String.fromCharCode(token.charCodeAt(0) - 65248);
}


/***/ }),

/***/ 21628:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;
const JPStandardParser_1 = __importDefault(__webpack_require__(54799));
const JPMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(57891));
const JPCasualDateParser_1 = __importDefault(__webpack_require__(61751));
const chrono_1 = __webpack_require__(62469);
exports.casual = new chrono_1.Chrono(createCasualConfiguration());
exports.strict = new chrono_1.Chrono(createConfiguration());
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration() {
    const option = createConfiguration();
    option.parsers.unshift(new JPCasualDateParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration() {
    return {
        parsers: [new JPStandardParser_1.default()],
        refiners: [new JPMergeDateRangeRefiner_1.default()],
    };
}
exports.createConfiguration = createConfiguration;


/***/ }),

/***/ 61751:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dayjs_1 = __importDefault(__webpack_require__(27484));
const index_1 = __webpack_require__(72174);
const references = __importStar(__webpack_require__(4519));
const PATTERN = /今日|当日|昨日|明日|今夜|今夕|今晩|今朝/i;
class JPCasualDateParser {
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        const text = match[0];
        const date = dayjs_1.default(context.refDate);
        const components = context.createParsingComponents();
        switch (text) {
            case "昨日":
                return references.yesterday(context.refDate);
            case "明日":
                return references.tomorrow(context.refDate);
            case "今日":
            case "当日":
                return references.today(context.refDate);
        }
        if (text == "今夜" || text == "今夕" || text == "今晩") {
            components.imply("hour", 22);
            components.assign("meridiem", index_1.Meridiem.PM);
        }
        else if (text.match("今朝")) {
            components.imply("hour", 6);
            components.assign("meridiem", index_1.Meridiem.AM);
        }
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
        return components;
    }
}
exports["default"] = JPCasualDateParser;


/***/ }),

/***/ 54799:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(10978);
const years_1 = __webpack_require__(29739);
const dayjs_1 = __importDefault(__webpack_require__(27484));
const PATTERN = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
const SPECIAL_YEAR_GROUP = 1;
const TYPICAL_YEAR_GROUP = 2;
const ERA_GROUP = 3;
const YEAR_NUMBER_GROUP = 4;
const MONTH_GROUP = 5;
const DAY_GROUP = 6;
class JPStandardParser {
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        const month = parseInt(constants_1.toHankaku(match[MONTH_GROUP]));
        const day = parseInt(constants_1.toHankaku(match[DAY_GROUP]));
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[SPECIAL_YEAR_GROUP] && match[SPECIAL_YEAR_GROUP].match("同|今|本")) {
            const moment = dayjs_1.default(context.refDate);
            components.assign("year", moment.year());
        }
        if (match[TYPICAL_YEAR_GROUP]) {
            const yearNumText = match[YEAR_NUMBER_GROUP];
            let year = yearNumText == "元" ? 1 : parseInt(constants_1.toHankaku(yearNumText));
            if (match[ERA_GROUP] == "令和") {
                year += 2018;
            }
            else if (match[ERA_GROUP] == "平成") {
                year += 1988;
            }
            else if (match[ERA_GROUP] == "昭和") {
                year += 1925;
            }
            components.assign("year", year);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        return components;
    }
}
exports["default"] = JPStandardParser;


/***/ }),

/***/ 57891:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(17529));
class JPMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1.default {
    patternBetween() {
        return /^\s*(から|ー|-)\s*$/i;
    }
}
exports["default"] = JPMergeDateRangeRefiner;


/***/ }),

/***/ 12682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTimeUnits = exports.TIME_UNITS_PATTERN = exports.parseYear = exports.YEAR_PATTERN = exports.parseOrdinalNumberPattern = exports.ORDINAL_NUMBER_PATTERN = exports.parseNumberPattern = exports.NUMBER_PATTERN = exports.TIME_UNIT_DICTIONARY = exports.ORDINAL_WORD_DICTIONARY = exports.INTEGER_WORD_DICTIONARY = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;
const pattern_1 = __webpack_require__(95801);
const years_1 = __webpack_require__(29739);
exports.WEEKDAY_DICTIONARY = {
    zondag: 0,
    zon: 0,
    "zon.": 0,
    zo: 0,
    "zo.": 0,
    maandag: 1,
    ma: 1,
    "ma.": 1,
    dinsdag: 2,
    din: 2,
    "din.": 2,
    di: 2,
    "di.": 2,
    woensdag: 3,
    woe: 3,
    "woe.": 3,
    wo: 3,
    "wo.": 3,
    donderdag: 4,
    dond: 4,
    "dond.": 4,
    do: 4,
    "do.": 4,
    vrijdag: 5,
    vrij: 5,
    "vrij.": 5,
    vr: 5,
    "vr.": 5,
    zaterdag: 6,
    zat: 6,
    "zat.": 6,
    "za": 6,
    "za.": 6,
};
exports.MONTH_DICTIONARY = {
    januari: 1,
    jan: 1,
    "jan.": 1,
    februari: 2,
    feb: 2,
    "feb.": 2,
    maart: 3,
    mar: 3,
    "mar.": 3,
    april: 4,
    apr: 4,
    "apr.": 4,
    mei: 5,
    juni: 6,
    jun: 6,
    "jun.": 6,
    juli: 7,
    jul: 7,
    "jul.": 7,
    augustus: 8,
    aug: 8,
    "aug.": 8,
    september: 9,
    sep: 9,
    "sep.": 9,
    sept: 9,
    "sept.": 9,
    oktober: 10,
    okt: 10,
    "okt.": 10,
    november: 11,
    nov: 11,
    "nov.": 11,
    december: 12,
    dec: 12,
    "dec.": 12,
};
exports.INTEGER_WORD_DICTIONARY = {
    een: 1,
    twee: 2,
    drie: 3,
    vier: 4,
    vijf: 5,
    zes: 6,
    zeven: 7,
    acht: 8,
    negen: 9,
    tien: 10,
    elf: 11,
    twaalf: 12,
};
exports.ORDINAL_WORD_DICTIONARY = {
    eerste: 1,
    tweede: 2,
    derde: 3,
    vierde: 4,
    vijfde: 5,
    zesde: 6,
    zevende: 7,
    achtste: 8,
    negende: 9,
    tiende: 10,
    elfde: 11,
    twaalfde: 12,
    dertiende: 13,
    veertiende: 14,
    vijftiende: 15,
    zestiende: 16,
    zeventiende: 17,
    achttiende: 18,
    negentiende: 19,
    twintigste: 20,
    "eenentwintigste": 21,
    "tweeëntwintigste": 22,
    "drieentwintigste": 23,
    "vierentwintigste": 24,
    "vijfentwintigste": 25,
    "zesentwintigste": 26,
    "zevenentwintigste": 27,
    "achtentwintig": 28,
    "negenentwintig": 29,
    "dertigste": 30,
    "eenendertigste": 31,
};
exports.TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconden: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minuten: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    uur: "hour",
    uren: "hour",
    dag: "d",
    dagen: "d",
    week: "week",
    weken: "week",
    maand: "month",
    maanden: "month",
    jaar: "year",
    jr: "year",
    jaren: "year",
};
exports.NUMBER_PATTERN = `(?:${pattern_1.matchAnyPattern(exports.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|een?|halve?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (exports.INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return exports.INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "een") {
        return 1;
    }
    else if (num.match(/halve?/)) {
        return 0.5;
    }
    return parseFloat(num);
}
exports.parseNumberPattern = parseNumberPattern;
exports.ORDINAL_NUMBER_PATTERN = `(?:${pattern_1.matchAnyPattern(exports.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:ste|de)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (exports.ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return exports.ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:ste|de)$/i, "");
    return parseInt(num);
}
exports.parseOrdinalNumberPattern = parseOrdinalNumberPattern;
exports.YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/voor Christus/i.test(match)) {
        match = match.replace(/voor Christus/i, "");
        return -parseInt(match);
    }
    if (/na Christus/i.test(match)) {
        match = match.replace(/na Christus/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return years_1.findMostLikelyADYear(rawYearNumber);
}
exports.parseYear = parseYear;
const SINGLE_TIME_UNIT_PATTERN = `(${exports.NUMBER_PATTERN})\\s{0,5}(${pattern_1.matchAnyPattern(exports.TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
exports.TIME_UNITS_PATTERN = pattern_1.repeatedTimeunitPattern(`(?:(?:binnen|in)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
exports.parseTimeUnits = parseTimeUnits;
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = exports.TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}


/***/ }),

/***/ 23570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;
const configurations_1 = __webpack_require__(97468);
const chrono_1 = __webpack_require__(62469);
const NLMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(39638));
const NLMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(1185));
const NLCasualDateParser_1 = __importDefault(__webpack_require__(55270));
const NLCasualTimeParser_1 = __importDefault(__webpack_require__(65428));
const SlashDateFormatParser_1 = __importDefault(__webpack_require__(63938));
const NLTimeUnitWithinFormatParser_1 = __importDefault(__webpack_require__(15931));
const NLWeekdayParser_1 = __importDefault(__webpack_require__(14363));
const NLMonthNameMiddleEndianParser_1 = __importDefault(__webpack_require__(91780));
const NLMonthNameParser_1 = __importDefault(__webpack_require__(26229));
const NLSlashMonthFormatParser_1 = __importDefault(__webpack_require__(60556));
const NLTimeExpressionParser_1 = __importDefault(__webpack_require__(80301));
const NLCasualYearMonthDayParser_1 = __importDefault(__webpack_require__(80461));
const NLCasualDateTimeParser_1 = __importDefault(__webpack_require__(1955));
exports.casual = new chrono_1.Chrono(createCasualConfiguration());
exports.strict = new chrono_1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new NLCasualDateParser_1.default());
    option.parsers.unshift(new NLCasualTimeParser_1.default());
    option.parsers.unshift(new NLCasualDateTimeParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations_1.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1.default(littleEndian),
            new NLMonthNameMiddleEndianParser_1.default(),
            new NLMonthNameParser_1.default(),
            new NLTimeExpressionParser_1.default(),
            new NLTimeUnitWithinFormatParser_1.default(),
            new NLSlashMonthFormatParser_1.default(),
            new NLWeekdayParser_1.default(),
            new NLCasualYearMonthDayParser_1.default(),
        ],
        refiners: [new NLMergeDateTimeRefiner_1.default(), new NLMergeDateRangeRefiner_1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;


/***/ }),

/***/ 55270:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const references = __importStar(__webpack_require__(4519));
class NLCasualDateParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "nu":
                return references.now(context.refDate);
            case "vandaag":
                return references.today(context.refDate);
            case "morgen":
            case "morgend":
                return references.tomorrow(context.refDate);
            case "gisteren":
                return references.yesterday(context.refDate);
        }
        return component;
    }
}
exports["default"] = NLCasualDateParser;


/***/ }),

/***/ 1955:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const index_1 = __webpack_require__(72174);
const dayjs_1 = __webpack_require__(25763);
const dayjs_2 = __importDefault(__webpack_require__(27484));
const DATE_GROUP = 1;
const TIME_OF_DAY_GROUP = 2;
class NLCasualDateTimeParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const dateText = match[DATE_GROUP].toLowerCase();
        const timeText = match[TIME_OF_DAY_GROUP].toLowerCase();
        const component = context.createParsingComponents();
        const targetDate = dayjs_2.default(context.refDate);
        switch (dateText) {
            case "gisteren":
                dayjs_1.assignSimilarDate(component, targetDate.add(-1, "day"));
                break;
            case "van":
                dayjs_1.assignSimilarDate(component, targetDate);
                break;
            case "morgen":
                dayjs_1.assignTheNextDay(component, targetDate);
                break;
        }
        switch (timeText) {
            case "ochtend":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "middag":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 12);
                break;
            case "namiddag":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "avond":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 20);
                break;
        }
        return component;
    }
}
exports["default"] = NLCasualDateTimeParser;


/***/ }),

/***/ 65428:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(72174);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_1 = __importDefault(__webpack_require__(27484));
const dayjs_2 = __webpack_require__(25763);
const DAY_GROUP = 1;
const MOMENT_GROUP = 2;
class NLCasualTimeParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_1.default(context.refDate);
        const component = context.createParsingComponents();
        if (match[DAY_GROUP] === "deze") {
            component.assign("day", context.refDate.getDate());
            component.assign("month", context.refDate.getMonth() + 1);
            component.assign("year", context.refDate.getFullYear());
        }
        switch (match[MOMENT_GROUP].toLowerCase()) {
            case "namiddag":
            case "'s namiddags":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 20);
                break;
            case "middernacht":
                dayjs_2.assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
exports["default"] = NLCasualTimeParser;


/***/ }),

/***/ 80461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(12682);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` +
    `(?:(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class NLCasualYearMonthDayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = match[MONTH_NUMBER_GROUP]
            ? parseInt(match[MONTH_NUMBER_GROUP])
            : constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            return null;
        }
        const year = parseInt(match[YEAR_NUMBER_GROUP]);
        const day = parseInt(match[DATE_NUMBER_GROUP]);
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}
exports["default"] = NLCasualYearMonthDayParser;


/***/ }),

/***/ 91780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const constants_1 = __webpack_require__(12682);
const constants_2 = __webpack_require__(12682);
const constants_3 = __webpack_require__(12682);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})` +
    "(?:\\s*" +
    "(?:tot|\\-|\\–|until|through|till|\\s)\\s*" +
    `(${constants_2.ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    "(?:-|/|\\s*(?:of)?\\s*)" +
    "(" +
    pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY) +
    ")" +
    "(?:" +
    "(?:-|/|,?\\s*)" +
    `(${constants_3.YEAR_PATTERN}(?![^\\s]\\d))` +
    ")?" +
    "(?=\\W|$)", "i");
const MONTH_NAME_GROUP = 3;
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const YEAR_GROUP = 4;
class NLMonthNameMiddleEndianParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = constants_2.parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[YEAR_GROUP]) {
            const year = constants_3.parseYear(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = constants_2.parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}
exports["default"] = NLMonthNameMiddleEndianParser;


/***/ }),

/***/ 26229:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(12682);
const years_1 = __webpack_require__(29739);
const pattern_1 = __webpack_require__(95801);
const constants_2 = __webpack_require__(12682);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp(`(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `[,-]?\\s*(${constants_2.YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const MONTH_NAME_GROUP = 1;
const YEAR_GROUP = 2;
class NLMonthNameParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const components = context.createParsingComponents();
        components.imply("day", 1);
        const monthName = match[MONTH_NAME_GROUP];
        const month = constants_1.MONTH_DICTIONARY[monthName.toLowerCase()];
        components.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = constants_2.parseYear(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, 1, month);
            components.imply("year", year);
        }
        return components;
    }
}
exports["default"] = NLMonthNameParser;


/***/ }),

/***/ 60556:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class NLSlashMonthFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}
exports["default"] = NLSlashMonthFormatParser;


/***/ }),

/***/ 80301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractTimeExpressionParser_1 = __webpack_require__(22786);
class NLTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:om)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|om|\\?)\\s*";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
exports["default"] = NLTimeExpressionParser;


/***/ }),

/***/ 15931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(12682);
const results_1 = __webpack_require__(78151);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
class NLTimeUnitWithinFormatParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:binnen|in|binnen de|voor)\\s*` + "(" + constants_1.TIME_UNITS_PATTERN + ")" + `(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = constants_1.parseTimeUnits(match[1]);
        return results_1.ParsingComponents.createRelativeFromRefDate(context.refDate, timeUnits);
    }
}
exports["default"] = NLTimeUnitWithinFormatParser;


/***/ }),

/***/ 14363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(12682);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const weeks_1 = __webpack_require__(5578);
const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:op\\s*?)?" +
    "(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?" +
    `(${pattern_1.matchAnyPattern(constants_1.WEEKDAY_DICTIONARY)})` +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class NLWeekdayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants_1.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "vorige") {
            modifier = "last";
        }
        else if (modifierWord == "volgende") {
            modifier = "next";
        }
        else if (modifierWord == "deze") {
            modifier = "this";
        }
        const date = weeks_1.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports["default"] = NLWeekdayParser;


/***/ }),

/***/ 39638:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(17529));
class NLMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1.default {
    patternBetween() {
        return /^\s*(tot|-)\s*$/i;
    }
}
exports["default"] = NLMergeDateRangeRefiner;


/***/ }),

/***/ 1185:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(6747));
class NLMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(om|na|voor|in de|,|-)?\\s*$");
    }
}
exports["default"] = NLMergeDateTimeRefiner;


/***/ }),

/***/ 24606:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseYear = exports.YEAR_PATTERN = exports.MONTH_DICTIONARY = exports.WEEKDAY_DICTIONARY = void 0;
exports.WEEKDAY_DICTIONARY = {
    "domingo": 0,
    "dom": 0,
    "segunda": 1,
    "segunda-feira": 1,
    "seg": 1,
    "terça": 2,
    "terça-feira": 2,
    "ter": 2,
    "quarta": 3,
    "quarta-feira": 3,
    "qua": 3,
    "quinta": 4,
    "quinta-feira": 4,
    "qui": 4,
    "sexta": 5,
    "sexta-feira": 5,
    "sex": 5,
    "sábado": 6,
    "sabado": 6,
    "sab": 6,
};
exports.MONTH_DICTIONARY = {
    "janeiro": 1,
    "jan": 1,
    "jan.": 1,
    "fevereiro": 2,
    "fev": 2,
    "fev.": 2,
    "março": 3,
    "mar": 3,
    "mar.": 3,
    "abril": 4,
    "abr": 4,
    "abr.": 4,
    "maio": 5,
    "mai": 5,
    "mai.": 5,
    "junho": 6,
    "jun": 6,
    "jun.": 6,
    "julho": 7,
    "jul": 7,
    "jul.": 7,
    "agosto": 8,
    "ago": 8,
    "ago.": 8,
    "setembro": 9,
    "set": 9,
    "set.": 9,
    "outubro": 10,
    "out": 10,
    "out.": 10,
    "novembro": 11,
    "nov": 11,
    "nov.": 11,
    "dezembro": 12,
    "dez": 12,
    "dez.": 12,
};
exports.YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
    if (match.match(/^[0-9]{1,4}$/)) {
        let yearNumber = parseInt(match);
        if (yearNumber < 100) {
            if (yearNumber > 50) {
                yearNumber = yearNumber + 1900;
            }
            else {
                yearNumber = yearNumber + 2000;
            }
        }
        return yearNumber;
    }
    if (match.match(/a\.?\s*c\.?/i)) {
        match = match.replace(/a\.?\s*c\.?/i, "");
        return -parseInt(match);
    }
    return parseInt(match);
}
exports.parseYear = parseYear;


/***/ }),

/***/ 59860:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConfiguration = exports.createCasualConfiguration = exports.parseDate = exports.parse = exports.strict = exports.casual = void 0;
const configurations_1 = __webpack_require__(97468);
const chrono_1 = __webpack_require__(62469);
const SlashDateFormatParser_1 = __importDefault(__webpack_require__(63938));
const PTWeekdayParser_1 = __importDefault(__webpack_require__(33961));
const PTTimeExpressionParser_1 = __importDefault(__webpack_require__(41671));
const PTMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(73446));
const PTMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(3269));
const PTMonthNameLittleEndianParser_1 = __importDefault(__webpack_require__(85773));
const PTCasualDateParser_1 = __importDefault(__webpack_require__(29313));
const PTCasualTimeParser_1 = __importDefault(__webpack_require__(40550));
exports.casual = new chrono_1.Chrono(createCasualConfiguration());
exports.strict = new chrono_1.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return exports.casual.parse(text, ref, option);
}
exports.parse = parse;
function parseDate(text, ref, option) {
    return exports.casual.parseDate(text, ref, option);
}
exports.parseDate = parseDate;
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.push(new PTCasualDateParser_1.default());
    option.parsers.push(new PTCasualTimeParser_1.default());
    return option;
}
exports.createCasualConfiguration = createCasualConfiguration;
function createConfiguration(strictMode = true, littleEndian = true) {
    return configurations_1.includeCommonConfiguration({
        parsers: [
            new SlashDateFormatParser_1.default(littleEndian),
            new PTWeekdayParser_1.default(),
            new PTTimeExpressionParser_1.default(),
            new PTMonthNameLittleEndianParser_1.default(),
        ],
        refiners: [new PTMergeDateTimeRefiner_1.default(), new PTMergeDateRangeRefiner_1.default()],
    }, strictMode);
}
exports.createConfiguration = createConfiguration;


/***/ }),

/***/ 29313:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const references = __importStar(__webpack_require__(4519));
class PTCasualDateParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "agora":
                return references.now(context.refDate);
            case "hoje":
                return references.today(context.refDate);
            case "amanha":
            case "amanhã":
                return references.tomorrow(context.refDate);
            case "ontem":
                return references.yesterday(context.refDate);
        }
        return component;
    }
}
exports["default"] = PTCasualDateParser;


/***/ }),

/***/ 40550:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(72174);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const dayjs_1 = __webpack_require__(25763);
const dayjs_2 = __importDefault(__webpack_require__(27484));
class PTCasualTimeParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs_2.default(context.refDate);
        const component = context.createParsingComponents();
        switch (match[1].toLowerCase()) {
            case "tarde":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "noite":
                component.imply("meridiem", index_1.Meridiem.PM);
                component.imply("hour", 22);
                break;
            case "manha":
            case "manhã":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "meia-noite":
                dayjs_1.assignTheNextDay(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "meio-dia":
                component.imply("meridiem", index_1.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
exports["default"] = PTCasualTimeParser;


/***/ }),

/***/ 85773:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const years_1 = __webpack_require__(29739);
const constants_1 = __webpack_require__(24606);
const constants_2 = __webpack_require__(24606);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const PATTERN = new RegExp(`([0-9]{1,2})(?:º|ª|°)?` +
    "(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*" +
    `(?:-|/|\\s*(?:de|,)?\\s*)` +
    `(${pattern_1.matchAnyPattern(constants_1.MONTH_DICTIONARY)})` +
    `(?:\\s*(?:de|,)?\\s*(${constants_2.YEAR_PATTERN}))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class PTMonthNameLittleEndianParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = constants_1.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = constants_2.parseYear(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = years_1.findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
exports["default"] = PTMonthNameLittleEndianParser;


/***/ }),

/***/ 41671:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractTimeExpressionParser_1 = __webpack_require__(22786);
class PTTimeExpressionParser extends AbstractTimeExpressionParser_1.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:ao?|às?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*";
    }
}
exports["default"] = PTTimeExpressionParser;


/***/ }),

/***/ 33961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(24606);
const pattern_1 = __webpack_require__(95801);
const AbstractParserWithWordBoundary_1 = __webpack_require__(15857);
const weeks_1 = __webpack_require__(5578);
const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(este|esta|passado|pr[oó]ximo)\\s*)?" +
    `(${pattern_1.matchAnyPattern(constants_1.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(este|esta|passado|pr[óo]ximo)\\s*semana)?" +
    "(?=\\W|\\d|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class PTWeekdayParser extends AbstractParserWithWordBoundary_1.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = constants_1.WEEKDAY_DICTIONARY[dayOfWeek];
        if (offset === undefined) {
            return null;
        }
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let norm = prefix || postfix || "";
        norm = norm.toLowerCase();
        let modifier = null;
        if (norm == "passado") {
            modifier = "this";
        }
        else if (norm == "próximo" || norm == "proximo") {
            modifier = "next";
        }
        else if (norm == "este") {
            modifier = "this";
        }
        const date = weeks_1.toDayJSWeekday(context.refDate, offset, modifier);
        return context
            .createParsingComponents()
            .assign("weekday", offset)
            .imply("day", date.date())
            .imply("month", date.month() + 1)
            .imply("year", date.year());
    }
}
exports["default"] = PTWeekdayParser;


/***/ }),

/***/ 3269:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateRangeRefiner_1 = __importDefault(__webpack_require__(17529));
class PTMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner_1.default {
    patternBetween() {
        return /^\s*(?:-)\s*$/i;
    }
}
exports["default"] = PTMergeDateRangeRefiner;


/***/ }),

/***/ 73446:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const AbstractMergeDateTimeRefiner_1 = __importDefault(__webpack_require__(6747));
class PTMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner_1.default {
    patternBetween() {
        return new RegExp("^\\s*(?:,|à)?\\s*$");
    }
}
exports["default"] = PTMergeDateTimeRefiner;


/***/ }),

/***/ 78151:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParsingResult = exports.ParsingComponents = void 0;
const quarterOfYear_1 = __importDefault(__webpack_require__(96671));
const dayjs_1 = __importDefault(__webpack_require__(27484));
const dayjs_2 = __webpack_require__(25763);
dayjs_1.default.extend(quarterOfYear_1.default);
class ParsingComponents {
    constructor(refDate, knownComponents) {
        this.knownValues = {};
        this.impliedValues = {};
        if (knownComponents) {
            for (const key in knownComponents) {
                this.knownValues[key] = knownComponents[key];
            }
        }
        const refDayJs = dayjs_1.default(refDate);
        this.imply("day", refDayJs.date());
        this.imply("month", refDayJs.month() + 1);
        this.imply("year", refDayJs.year());
        this.imply("hour", 12);
        this.imply("minute", 0);
        this.imply("second", 0);
        this.imply("millisecond", 0);
    }
    get(component) {
        if (component in this.knownValues) {
            return this.knownValues[component];
        }
        if (component in this.impliedValues) {
            return this.impliedValues[component];
        }
        return null;
    }
    isCertain(component) {
        return component in this.knownValues;
    }
    getCertainComponents() {
        return Object.keys(this.knownValues);
    }
    imply(component, value) {
        if (component in this.knownValues) {
            return this;
        }
        this.impliedValues[component] = value;
        return this;
    }
    assign(component, value) {
        this.knownValues[component] = value;
        delete this.impliedValues[component];
        return this;
    }
    delete(component) {
        delete this.knownValues[component];
        delete this.impliedValues[component];
    }
    clone() {
        const component = new ParsingComponents(new Date());
        component.knownValues = {};
        component.impliedValues = {};
        for (const key in this.knownValues) {
            component.knownValues[key] = this.knownValues[key];
        }
        for (const key in this.impliedValues) {
            component.impliedValues[key] = this.impliedValues[key];
        }
        return component;
    }
    isOnlyDate() {
        return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
    }
    isOnlyTime() {
        return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isOnlyWeekdayComponent() {
        return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isOnlyDayMonthComponent() {
        return this.isCertain("day") && this.isCertain("month") && !this.isCertain("year");
    }
    isValidDate() {
        const date = this.isCertain("timezoneOffset") ? this.dateWithoutTimezoneAdjustment() : this.date();
        if (date.getFullYear() !== this.get("year"))
            return false;
        if (date.getMonth() !== this.get("month") - 1)
            return false;
        if (date.getDate() !== this.get("day"))
            return false;
        if (this.get("hour") != null && date.getHours() != this.get("hour"))
            return false;
        if (this.get("minute") != null && date.getMinutes() != this.get("minute"))
            return false;
        return true;
    }
    toString() {
        return `[ParsingComponents {knownValues: ${JSON.stringify(this.knownValues)}, impliedValues: ${JSON.stringify(this.impliedValues)}}]`;
    }
    dayjs() {
        return dayjs_1.default(this.date());
    }
    date() {
        const date = this.dateWithoutTimezoneAdjustment();
        return new Date(date.getTime() + this.getTimezoneAdjustmentMinute(date) * 60000);
    }
    dateWithoutTimezoneAdjustment() {
        const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
        date.setFullYear(this.get("year"));
        return date;
    }
    getTimezoneAdjustmentMinute(date) {
        var _a;
        date = date !== null && date !== void 0 ? date : new Date();
        const currentTimezoneOffset = -date.getTimezoneOffset();
        const targetTimezoneOffset = (_a = this.get("timezoneOffset")) !== null && _a !== void 0 ? _a : currentTimezoneOffset;
        return currentTimezoneOffset - targetTimezoneOffset;
    }
    static createRelativeFromRefDate(refDate, fragments) {
        let date = dayjs_1.default(refDate);
        for (const key in fragments) {
            date = date.add(fragments[key], key);
        }
        const components = new ParsingComponents(refDate);
        if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
            dayjs_2.assignSimilarTime(components, date);
            dayjs_2.assignSimilarDate(components, date);
        }
        else {
            dayjs_2.implySimilarTime(components, date);
            if (fragments["d"]) {
                components.assign("day", date.date());
                components.assign("month", date.month() + 1);
                components.assign("year", date.year());
            }
            else {
                if (fragments["week"]) {
                    components.imply("weekday", date.day());
                }
                components.imply("day", date.date());
                if (fragments["month"]) {
                    components.assign("month", date.month() + 1);
                    components.assign("year", date.year());
                }
                else {
                    components.imply("month", date.month() + 1);
                    if (fragments["year"]) {
                        components.assign("year", date.year());
                    }
                    else {
                        components.imply("year", date.year());
                    }
                }
            }
        }
        return components;
    }
}
exports.ParsingComponents = ParsingComponents;
class ParsingResult {
    constructor(refDate, index, text, start, end) {
        this.refDate = refDate;
        this.index = index;
        this.text = text;
        this.start = start || new ParsingComponents(this.refDate);
        this.end = end;
    }
    clone() {
        const result = new ParsingResult(this.refDate, this.index, this.text);
        result.start = this.start ? this.start.clone() : null;
        result.end = this.end ? this.end.clone() : null;
        return result;
    }
    date() {
        return this.start.date();
    }
    toString() {
        return `[ParsingResult {index: ${this.index}, text: '${this.text}', ...}]`;
    }
}
exports.ParsingResult = ParsingResult;


/***/ }),

/***/ 25763:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.implySimilarTime = exports.assignSimilarTime = exports.assignSimilarDate = exports.assignTheNextDay = void 0;
function assignTheNextDay(component, targetDayJs) {
    targetDayJs = targetDayJs.add(1, "day");
    assignSimilarDate(component, targetDayJs);
    implySimilarTime(component, targetDayJs);
}
exports.assignTheNextDay = assignTheNextDay;
function assignSimilarDate(component, targetDayJs) {
    component.assign("day", targetDayJs.date());
    component.assign("month", targetDayJs.month() + 1);
    component.assign("year", targetDayJs.year());
}
exports.assignSimilarDate = assignSimilarDate;
function assignSimilarTime(component, targetDayJs) {
    component.assign("hour", targetDayJs.hour());
    component.assign("minute", targetDayJs.minute());
    component.assign("second", targetDayJs.second());
    component.assign("millisecond", targetDayJs.millisecond());
    component.assign("timezoneOffset", targetDayJs.utcOffset());
}
exports.assignSimilarTime = assignSimilarTime;
function implySimilarTime(component, targetDayJs) {
    component.imply("hour", targetDayJs.hour());
    component.imply("minute", targetDayJs.minute());
    component.imply("second", targetDayJs.second());
    component.imply("millisecond", targetDayJs.millisecond());
    component.imply("timezoneOffset", targetDayJs.utcOffset());
}
exports.implySimilarTime = implySimilarTime;


/***/ }),

/***/ 95801:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchAnyPattern = exports.extractTerms = exports.repeatedTimeunitPattern = void 0;
function repeatedTimeunitPattern(prefix, singleTimeunitPattern) {
    const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
    return `${prefix}${singleTimeunitPatternNoCapture}\\s*(?:,?\\s{0,5}${singleTimeunitPatternNoCapture}){0,10}`;
}
exports.repeatedTimeunitPattern = repeatedTimeunitPattern;
function extractTerms(dictionary) {
    let keys;
    if (dictionary instanceof Array) {
        keys = [...dictionary];
    }
    else if (dictionary instanceof Map) {
        keys = Array.from(dictionary.keys());
    }
    else {
        keys = Object.keys(dictionary);
    }
    return keys;
}
exports.extractTerms = extractTerms;
function matchAnyPattern(dictionary) {
    const joinedTerms = extractTerms(dictionary)
        .sort((a, b) => b.length - a.length)
        .join("|")
        .replace(/\./g, "\\.");
    return `(?:${joinedTerms})`;
}
exports.matchAnyPattern = matchAnyPattern;


/***/ }),

/***/ 50180:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addImpliedTimeUnits = exports.reverseTimeUnits = void 0;
function reverseTimeUnits(timeUnits) {
    const reversed = {};
    for (const key in timeUnits) {
        reversed[key] = -timeUnits[key];
    }
    return reversed;
}
exports.reverseTimeUnits = reverseTimeUnits;
function addImpliedTimeUnits(components, timeUnits) {
    const output = components.clone();
    let date = components.dayjs();
    for (const key in timeUnits) {
        date = date.add(timeUnits[key], key);
    }
    if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
        output.imply("day", date.date());
        output.imply("month", date.month() + 1);
        output.imply("year", date.year());
    }
    if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
        output.imply("second", date.second());
        output.imply("minute", date.minute());
        output.imply("hour", date.hour());
    }
    return output;
}
exports.addImpliedTimeUnits = addImpliedTimeUnits;


/***/ }),

/***/ 27484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ 96671:
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){"use strict";var t="month",n="quarter";return function(e,i){var r=i.prototype;r.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=r.add;r.add=function(e,i){return e=Number(e),this.$utils().p(i)===n?this.add(3*e,t):s.bind(this)(e,i)};var u=r.startOf;r.startOf=function(e,i){var r=this.$utils(),s=!!r.u(i)||i;if(r.p(e)===n){var o=this.quarter()-1;return s?this.month(3*o).startOf(t).startOf("day"):this.month(3*o+2).endOf(t).endOf("day")}return u.bind(this)(e,i)}}}));

/***/ }),

/***/ 98141:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(90404));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ 90404:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ 10602:
/***/ ((module) => {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ 50139:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 44825:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

exports.__esModule = true;
exports["default"] = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(50139));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ 4400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json_stringify = __webpack_require__(54123).stringify;
var json_parse     = __webpack_require__(26813);

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;


/***/ }),

/***/ 26813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigNumber = null;

// regexpxs extracted from
// (c) BSD-3-Clause
// https://github.com/fastify/secure-json-parse/graphs/contributors and https://github.com/hapijs/bourne/graphs/contributors

const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;

/*
    json_parse.js
    2012-06-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    This file creates a json_parse function.
    During create you can (optionally) specify some behavioural switches

        require('json-bigint')(options)

            The optional options parameter holds switches that drive certain
            aspects of the parsing process:
            * options.strict = true will warn about duplicate-key usage in the json.
              The default (strict = false) will silently ignore those and overwrite
              values for keys that are in duplicate use.

    The resulting function follows this signature:
        json_parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = json_parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
    hasOwnProperty, message, n, name, prototype, push, r, t, text
*/

var json_parse = function (options) {
  'use strict';

  // This is a function that can parse a JSON text, producing a JavaScript
  // data structure. It is a simple, recursive descent parser. It does not use
  // eval or regular expressions, so it can be used as a model for implementing
  // a JSON parser in other languages.

  // We are defining the function inside of another function to avoid creating
  // global variables.

  // Default options one can override by passing options to the parse()
  var _options = {
    strict: false, // not being strict means do not generate syntax errors for "duplicate key"
    storeAsString: false, // toggles whether the values should be stored as BigNumber (default) or a string
    alwaysParseAsBig: false, // toggles whether all numbers should be Big
    useNativeBigInt: false, // toggles whether to use native BigInt instead of bignumber.js
    protoAction: 'error',
    constructorAction: 'error',
  };

  // If there are options, then use them to override the default _options
  if (options !== undefined && options !== null) {
    if (options.strict === true) {
      _options.strict = true;
    }
    if (options.storeAsString === true) {
      _options.storeAsString = true;
    }
    _options.alwaysParseAsBig =
      options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
    _options.useNativeBigInt =
      options.useNativeBigInt === true ? options.useNativeBigInt : false;

    if (typeof options.constructorAction !== 'undefined') {
      if (
        options.constructorAction === 'error' ||
        options.constructorAction === 'ignore' ||
        options.constructorAction === 'preserve'
      ) {
        _options.constructorAction = options.constructorAction;
      } else {
        throw new Error(
          `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
        );
      }
    }

    if (typeof options.protoAction !== 'undefined') {
      if (
        options.protoAction === 'error' ||
        options.protoAction === 'ignore' ||
        options.protoAction === 'preserve'
      ) {
        _options.protoAction = options.protoAction;
      } else {
        throw new Error(
          `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
        );
      }
    }
  }

  var at, // The index of the current character
    ch, // The current character
    escapee = {
      '"': '"',
      '\\': '\\',
      '/': '/',
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t',
    },
    text,
    error = function (m) {
      // Call error when something is wrong.

      throw {
        name: 'SyntaxError',
        message: m,
        at: at,
        text: text,
      };
    },
    next = function (c) {
      // If a c parameter is provided, verify that it matches the current character.

      if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
      }

      // Get the next character. When there are no more characters,
      // return the empty string.

      ch = text.charAt(at);
      at += 1;
      return ch;
    },
    number = function () {
      // Parse a number value.

      var number,
        string = '';

      if (ch === '-') {
        string = '-';
        next('-');
      }
      while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
      }
      if (ch === '.') {
        string += '.';
        while (next() && ch >= '0' && ch <= '9') {
          string += ch;
        }
      }
      if (ch === 'e' || ch === 'E') {
        string += ch;
        next();
        if (ch === '-' || ch === '+') {
          string += ch;
          next();
        }
        while (ch >= '0' && ch <= '9') {
          string += ch;
          next();
        }
      }
      number = +string;
      if (!isFinite(number)) {
        error('Bad number');
      } else {
        if (BigNumber == null) BigNumber = __webpack_require__(44431);
        //if (number > 9007199254740992 || number < -9007199254740992)
        // Bignumber has stricter check: everything with length > 15 digits disallowed
        if (string.length > 15)
          return _options.storeAsString
            ? string
            : _options.useNativeBigInt
            ? BigInt(string)
            : new BigNumber(string);
        else
          return !_options.alwaysParseAsBig
            ? number
            : _options.useNativeBigInt
            ? BigInt(number)
            : new BigNumber(number);
      }
    },
    string = function () {
      // Parse a string value.

      var hex,
        i,
        string = '',
        uffff;

      // When parsing for string values, we must look for " and \ characters.

      if (ch === '"') {
        var startAt = at;
        while (next()) {
          if (ch === '"') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            return string;
          }
          if (ch === '\\') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            if (ch === 'u') {
              uffff = 0;
              for (i = 0; i < 4; i += 1) {
                hex = parseInt(next(), 16);
                if (!isFinite(hex)) {
                  break;
                }
                uffff = uffff * 16 + hex;
              }
              string += String.fromCharCode(uffff);
            } else if (typeof escapee[ch] === 'string') {
              string += escapee[ch];
            } else {
              break;
            }
            startAt = at;
          }
        }
      }
      error('Bad string');
    },
    white = function () {
      // Skip whitespace.

      while (ch && ch <= ' ') {
        next();
      }
    },
    word = function () {
      // true, false, or null.

      switch (ch) {
        case 't':
          next('t');
          next('r');
          next('u');
          next('e');
          return true;
        case 'f':
          next('f');
          next('a');
          next('l');
          next('s');
          next('e');
          return false;
        case 'n':
          next('n');
          next('u');
          next('l');
          next('l');
          return null;
      }
      error("Unexpected '" + ch + "'");
    },
    value, // Place holder for the value function.
    array = function () {
      // Parse an array value.

      var array = [];

      if (ch === '[') {
        next('[');
        white();
        if (ch === ']') {
          next(']');
          return array; // empty array
        }
        while (ch) {
          array.push(value());
          white();
          if (ch === ']') {
            next(']');
            return array;
          }
          next(',');
          white();
        }
      }
      error('Bad array');
    },
    object = function () {
      // Parse an object value.

      var key,
        object = Object.create(null);

      if (ch === '{') {
        next('{');
        white();
        if (ch === '}') {
          next('}');
          return object; // empty object
        }
        while (ch) {
          key = string();
          white();
          next(':');
          if (
            _options.strict === true &&
            Object.hasOwnProperty.call(object, key)
          ) {
            error('Duplicate key "' + key + '"');
          }

          if (suspectProtoRx.test(key) === true) {
            if (_options.protoAction === 'error') {
              error('Object contains forbidden prototype property');
            } else if (_options.protoAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else if (suspectConstructorRx.test(key) === true) {
            if (_options.constructorAction === 'error') {
              error('Object contains forbidden constructor property');
            } else if (_options.constructorAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else {
            object[key] = value();
          }

          white();
          if (ch === '}') {
            next('}');
            return object;
          }
          next(',');
          white();
        }
      }
      error('Bad object');
    };

  value = function () {
    // Parse a JSON value. It could be an object, an array, a string, a number,
    // or a word.

    white();
    switch (ch) {
      case '{':
        return object();
      case '[':
        return array();
      case '"':
        return string();
      case '-':
        return number();
      default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
  };

  // Return the json_parse function. It will have access to all of the above
  // functions and variables.

  return function (source, reviver) {
    var result;

    text = source + '';
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
      error('Syntax error');
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function'
      ? (function walk(holder, key) {
          var k,
            v,
            value = holder[key];
          if (value && typeof value === 'object') {
            Object.keys(value).forEach(function (k) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            });
          }
          return reviver.call(holder, key, value);
        })({ '': result }, '')
      : result;
  };
};

module.exports = json_parse;


/***/ }),

/***/ 54123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigNumber = __webpack_require__(44431);

/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = module.exports;

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key],
            isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            if (isBigNumber) {
                return value;
            } else {
                return quote(value);
            }

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
        case 'bigint':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                Object.keys(value).forEach(function(k) {
                    var v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                });
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }
}());


/***/ }),

/***/ 18024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = (function() {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return (name && name.length > 2) ? func : undefined;
}());

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
  var source = (reference + '');
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),

/***/ 53792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return baseRest(function(funcs) {
    funcs = baseFlatten(funcs, 1);

    var length = funcs.length,
        index = length;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      if (typeof funcs[index] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    return function() {
      var index = 0,
          result = length ? funcs[index].apply(this, arguments) : arguments[0];

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;


/***/ }),

/***/ 78975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816);

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;


/***/ }),

/***/ 17779:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseInverter = __webpack_require__(78975);

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;


/***/ }),

/***/ 63137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(75703),
    createInverter = __webpack_require__(17779),
    identity = __webpack_require__(6557);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant(identity));

module.exports = invert;


/***/ }),

/***/ 76501:
/***/ ((module) => {

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

module.exports = hsl2rgb;

/***/ }),

/***/ 29765:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var clamp = __webpack_require__(12912);

function componentToHex(c) {
  var value = Math.round(clamp(c, 0, 255));
  var hex   = value.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

function rgb2hex(rgb) {
  var alpha = rgb.length === 4 ? componentToHex(rgb[3] * 255) : "";

  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]) + alpha;
}

module.exports = rgb2hex;

/***/ }),

/***/ 93356:
/***/ ((module) => {

var component = /-?\d+(\.\d+)?%?/g;
function extractComponents(color) {
  return color.match(component);
}

module.exports = extractComponents;

/***/ }),

/***/ 52379:
/***/ ((module) => {

function expand(hex) {
  var result = "#";

  for (var i = 1; i < hex.length; i++) {
    var val = hex.charAt(i);
    result += val + val;
  }

  return result;
}

function hex(hex) {
  // #RGB or #RGBA
  if(hex.length === 4 || hex.length === 5) {
    hex = expand(hex);
  }

  var rgb = [
    parseInt(hex.substring(1,3), 16),
    parseInt(hex.substring(3,5), 16),
    parseInt(hex.substring(5,7), 16)
  ];

  // #RRGGBBAA
  if (hex.length === 9) {
    var alpha = parseFloat((parseInt(hex.substring(7,9), 16) / 255).toFixed(2));
    rgb.push(alpha);
  }

  return rgb;
}

module.exports = hex;

/***/ }),

/***/ 59143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var extractComponents = __webpack_require__(93356);
var clamp = __webpack_require__(12912);

function parseHslComponent(component, i) {
  component = parseFloat(component);

  switch(i) {
    case 0:
      return clamp(component, 0, 360);
    case 1:
    case 2:
      return clamp(component, 0, 100);
    case 3:
      return clamp(component, 0, 1);
  }
}

function hsl(color) {
  return extractComponents(color).map(parseHslComponent);
}

module.exports = hsl;

/***/ }),

/***/ 44586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hsl = __webpack_require__(59143);
var hex = __webpack_require__(52379);
var rgb = __webpack_require__(24835);
var hsl2rgb = __webpack_require__(76501);

function hsl2rgbParse(color) {
  var h = hsl(color);
  var r = hsl2rgb(h);

  // handle alpha since hsl2rgb doesn't know (or care!) about it
  if(h.length === 4) {
    r.push(h[3]);
  }

  return r;
}

var space2parser = {
  "#" : hex,
  "hsl" : hsl2rgbParse,
  "rgb" : rgb
};

function parse(color) {
  for(var scheme in space2parser) {
    if(color.indexOf(scheme) === 0) {
      return space2parser[scheme](color);
    }
  }
}

parse.rgb = rgb;
parse.hsl = hsl;
parse.hex = hex;

module.exports = parse;

/***/ }),

/***/ 24835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var extractComponents = __webpack_require__(93356);
var clamp = __webpack_require__(12912);

function parseRgbComponent(component, i) {
  if (i < 3) {
    if (component.indexOf('%') != -1) {
      return Math.round(255 * clamp(parseInt(component, 10), 0, 100)/100);
    } else {
      return clamp(parseInt(component, 10), 0, 255);
    }
  } else {
    return clamp(parseFloat(component), 0, 1);
  } 
}

function rgb(color) {
  return extractComponents(color).map(parseRgbComponent);
}

module.exports = rgb;

/***/ }),

/***/ 12912:
/***/ ((module) => {

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

module.exports = clamp;

/***/ }),

/***/ 64002:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.yuv2rgb = yuv2rgb;
exports.rgb2yuv = rgb2yuv;
function yuv2rgb(yuv) {
  var y = yuv[0],
      u = yuv[1],
      v = yuv[2],
      r,
      g,
      b;

  r = y * 1 + u * 0 + v * 1.13983;
  g = y * 1 + u * -0.39465 + v * -0.58060;
  b = y * 1 + u * 2.02311 + v * 0;

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function rgb2yuv(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  var y = r * 0.299 + g * 0.587 + b * 0.114;
  var u = r * -0.14713 + g * -0.28886 + b * 0.436;
  var v = r * 0.615 + g * -0.51499 + b * -0.10001;

  return [y, u, v];
};

/***/ }),

/***/ 67274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getBase16Theme = exports.createStyling = exports.invertTheme = undefined;

var _typeof2 = __webpack_require__(72444);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(12424);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(88902);

var _keys2 = _interopRequireDefault(_keys);

var _lodash = __webpack_require__(18024);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(79194);

var base16 = _interopRequireWildcard(_base);

var _rgb2hex = __webpack_require__(29765);

var _rgb2hex2 = _interopRequireDefault(_rgb2hex);

var _parse = __webpack_require__(44586);

var _parse2 = _interopRequireDefault(_parse);

var _lodash3 = __webpack_require__(53792);

var _lodash4 = _interopRequireDefault(_lodash3);

var _colorConverters = __webpack_require__(64002);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_BASE16 = base16.default;

var BASE16_KEYS = (0, _keys2.default)(DEFAULT_BASE16);

// we need a correcting factor, so that a dark, but not black background color
// converts to bright enough inversed color
var flip = function flip(x) {
  return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
};

var invertColor = (0, _lodash4.default)(_parse2.default, _colorConverters.rgb2yuv, function (_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
      y = _ref2[0],
      u = _ref2[1],
      v = _ref2[2];

  return [flip(y), u, v];
}, _colorConverters.yuv2rgb, _rgb2hex2.default);

var merger = function merger(styling) {
  return function (prevStyling) {
    return {
      className: [prevStyling.className, styling.className].filter(Boolean).join(' '),
      style: (0, _extends3.default)({}, prevStyling.style || {}, styling.style || {})
    };
  };
};

var mergeStyling = function mergeStyling(customStyling, defaultStyling) {
  if (customStyling === undefined) {
    return defaultStyling;
  }
  if (defaultStyling === undefined) {
    return customStyling;
  }

  var customType = typeof customStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(customStyling);
  var defaultType = typeof defaultStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(defaultStyling);

  switch (customType) {
    case 'string':
      switch (defaultType) {
        case 'string':
          return [defaultStyling, customStyling].filter(Boolean).join(' ');
        case 'object':
          return merger({ className: customStyling, style: defaultStyling });
        case 'function':
          return function (styling) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            return merger({
              className: customStyling
            })(defaultStyling.apply(undefined, [styling].concat(args)));
          };
      }
    case 'object':
      switch (defaultType) {
        case 'string':
          return merger({ className: defaultStyling, style: customStyling });
        case 'object':
          return (0, _extends3.default)({}, defaultStyling, customStyling);
        case 'function':
          return function (styling) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            return merger({
              style: customStyling
            })(defaultStyling.apply(undefined, [styling].concat(args)));
          };
      }
    case 'function':
      switch (defaultType) {
        case 'string':
          return function (styling) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            return customStyling.apply(undefined, [merger(styling)({
              className: defaultStyling
            })].concat(args));
          };
        case 'object':
          return function (styling) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }

            return customStyling.apply(undefined, [merger(styling)({
              style: defaultStyling
            })].concat(args));
          };
        case 'function':
          return function (styling) {
            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              args[_key5 - 1] = arguments[_key5];
            }

            return customStyling.apply(undefined, [defaultStyling.apply(undefined, [styling].concat(args))].concat(args));
          };
      }
  }
};

var mergeStylings = function mergeStylings(customStylings, defaultStylings) {
  var keys = (0, _keys2.default)(defaultStylings);
  for (var key in customStylings) {
    if (keys.indexOf(key) === -1) keys.push(key);
  }

  return keys.reduce(function (mergedStyling, key) {
    return mergedStyling[key] = mergeStyling(customStylings[key], defaultStylings[key]), mergedStyling;
  }, {});
};

var getStylingByKeys = function getStylingByKeys(mergedStyling, keys) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  if (keys === null) {
    return mergedStyling;
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  var styles = keys.map(function (key) {
    return mergedStyling[key];
  }).filter(Boolean);

  var props = styles.reduce(function (obj, s) {
    if (typeof s === 'string') {
      obj.className = [obj.className, s].filter(Boolean).join(' ');
    } else if ((typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
      obj.style = (0, _extends3.default)({}, obj.style, s);
    } else if (typeof s === 'function') {
      obj = (0, _extends3.default)({}, obj, s.apply(undefined, [obj].concat(args)));
    }

    return obj;
  }, { className: '', style: {} });

  if (!props.className) {
    delete props.className;
  }

  if ((0, _keys2.default)(props.style).length === 0) {
    delete props.style;
  }

  return props;
};

var invertTheme = exports.invertTheme = function invertTheme(theme) {
  return (0, _keys2.default)(theme).reduce(function (t, key) {
    return t[key] = /^base/.test(key) ? invertColor(theme[key]) : key === 'scheme' ? theme[key] + ':inverted' : theme[key], t;
  }, {});
};

var createStyling = exports.createStyling = (0, _lodash2.default)(function (getStylingFromBase16) {
  for (var _len7 = arguments.length, args = Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
    args[_key7 - 3] = arguments[_key7];
  }

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var themeOrStyling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$defaultBase = options.defaultBase16,
      defaultBase16 = _options$defaultBase === undefined ? DEFAULT_BASE16 : _options$defaultBase,
      _options$base16Themes = options.base16Themes,
      base16Themes = _options$base16Themes === undefined ? null : _options$base16Themes;


  var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
  if (base16Theme) {
    themeOrStyling = (0, _extends3.default)({}, base16Theme, themeOrStyling);
  }

  var theme = BASE16_KEYS.reduce(function (t, key) {
    return t[key] = themeOrStyling[key] || defaultBase16[key], t;
  }, {});

  var customStyling = (0, _keys2.default)(themeOrStyling).reduce(function (s, key) {
    return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
  }, {});

  var defaultStyling = getStylingFromBase16(theme);

  var mergedStyling = mergeStylings(customStyling, defaultStyling);

  return (0, _lodash2.default)(getStylingByKeys, 2).apply(undefined, [mergedStyling].concat(args));
}, 3);

var getBase16Theme = exports.getBase16Theme = function getBase16Theme(theme, base16Themes) {
  if (theme && theme.extend) {
    theme = theme.extend;
  }

  if (typeof theme === 'string') {
    var _theme$split = theme.split(':'),
        _theme$split2 = (0, _slicedToArray3.default)(_theme$split, 2),
        themeName = _theme$split2[0],
        modifier = _theme$split2[1];

    theme = (base16Themes || {})[themeName] || base16[themeName];
    if (modifier === 'inverted') {
      theme = invertTheme(theme);
    }
  }

  return theme && theme.hasOwnProperty('base00') ? theme : undefined;
};

/***/ }),

/***/ 27185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(99663);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(49135);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(93196);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONArrow = __webpack_require__(24121);

var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ItemRange = function (_React$Component) {
  (0, _inherits3['default'])(ItemRange, _React$Component);

  function ItemRange(props) {
    (0, _classCallCheck3['default'])(this, ItemRange);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.state = { expanded: false };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  ItemRange.prototype.render = function render() {
    var _props = this.props,
        styling = _props.styling,
        from = _props.from,
        to = _props.to,
        renderChildNodes = _props.renderChildNodes,
        nodeType = _props.nodeType;


    return this.state.expanded ? _react2['default'].createElement(
      'div',
      styling('itemRange', this.state.expanded),
      renderChildNodes(this.props, from, to)
    ) : _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, styling('itemRange', this.state.expanded), {
        onClick: this.handleClick
      }),
      _react2['default'].createElement(_JSONArrow2['default'], {
        nodeType: nodeType,
        styling: styling,
        expanded: false,
        onClick: this.handleClick,
        arrowStyle: 'double'
      }),
      from + ' ... ' + to
    );
  };

  ItemRange.prototype.handleClick = function handleClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  return ItemRange;
}(_react2['default'].Component);

ItemRange.propTypes = {
  styling: _propTypes2['default'].func.isRequired,
  from: _propTypes2['default'].number.isRequired,
  to: _propTypes2['default'].number.isRequired,
  renderChildNodes: _propTypes2['default'].func.isRequired,
  nodeType: _propTypes2['default'].string.isRequired
};
exports["default"] = ItemRange;

/***/ }),

/***/ 89205:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(42723);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNestedNode = __webpack_require__(88207);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  return data.length + ' ' + (data.length !== 1 ? 'items' : 'item');
}

// Configures <JSONNestedNode> to render an Array
var JSONArrayNode = function JSONArrayNode(_ref) {
  var data = _ref.data,
      props = (0, _objectWithoutProperties3['default'])(_ref, ['data']);
  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    data: data,
    nodeType: 'Array',
    nodeTypeIndicator: '[]',
    createItemString: createItemString,
    expandable: data.length > 0
  }));
};

JSONArrayNode.propTypes = {
  data: _propTypes2['default'].array
};

exports["default"] = JSONArrayNode;

/***/ }),

/***/ 24121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JSONArrow = function JSONArrow(_ref) {
  var styling = _ref.styling,
      arrowStyle = _ref.arrowStyle,
      expanded = _ref.expanded,
      nodeType = _ref.nodeType,
      onClick = _ref.onClick;
  return _react2['default'].createElement(
    'div',
    (0, _extends3['default'])({}, styling('arrowContainer', arrowStyle), { onClick: onClick }),
    _react2['default'].createElement(
      'div',
      styling(['arrow', 'arrowSign'], nodeType, expanded, arrowStyle),
      '\u25B6',
      arrowStyle === 'double' && _react2['default'].createElement(
        'div',
        styling(['arrowSign', 'arrowSignInner']),
        '\u25B6'
      )
    )
  );
};

JSONArrow.propTypes = {
  styling: _propTypes2['default'].func.isRequired,
  arrowStyle: _propTypes2['default'].oneOf(['single', 'double']),
  expanded: _propTypes2['default'].bool.isRequired,
  nodeType: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired
};

JSONArrow.defaultProps = {
  arrowStyle: 'single'
};

exports["default"] = JSONArrow;

/***/ }),

/***/ 59364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(42723);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = __webpack_require__(26378);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _isSafeInteger = __webpack_require__(63850);

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

exports["default"] = JSONIterableNode;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _JSONNestedNode = __webpack_require__(88207);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data, limit) {
  var count = 0;
  var hasMore = false;
  if ((0, _isSafeInteger2['default'])(data.size)) {
    count = data.size;
  } else {
    // eslint-disable-next-line no-unused-vars
    for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entry = _ref;

      if (limit && count + 1 > limit) {
        hasMore = true;
        break;
      }
      count += 1;
    }
  }
  return '' + (hasMore ? '>' : '') + count + ' ' + (count !== 1 ? 'entries' : 'entry');
}

// Configures <JSONNestedNode> to render an iterable
function JSONIterableNode(_ref2) {
  var props = (0, _objectWithoutProperties3['default'])(_ref2, []);

  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    nodeType: 'Iterable',
    nodeTypeIndicator: '()',
    createItemString: createItemString
  }));
}

/***/ }),

/***/ 88207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(88902);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(99663);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(49135);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(93196);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONArrow = __webpack_require__(24121);

var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

var _getCollectionEntries = __webpack_require__(41063);

var _getCollectionEntries2 = _interopRequireDefault(_getCollectionEntries);

var _JSONNode = __webpack_require__(35249);

var _JSONNode2 = _interopRequireDefault(_JSONNode);

var _ItemRange = __webpack_require__(27185);

var _ItemRange2 = _interopRequireDefault(_ItemRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders nested values (eg. objects, arrays, lists, etc.)
 */

function renderChildNodes(props, from, to) {
  var nodeType = props.nodeType,
      data = props.data,
      collectionLimit = props.collectionLimit,
      circularCache = props.circularCache,
      keyPath = props.keyPath,
      postprocessValue = props.postprocessValue,
      sortObjectKeys = props.sortObjectKeys;

  var childNodes = [];

  (0, _getCollectionEntries2['default'])(nodeType, data, sortObjectKeys, collectionLimit, from, to).forEach(function (entry) {
    if (entry.to) {
      childNodes.push(_react2['default'].createElement(_ItemRange2['default'], (0, _extends3['default'])({}, props, {
        key: 'ItemRange--' + entry.from + '-' + entry.to,
        from: entry.from,
        to: entry.to,
        renderChildNodes: renderChildNodes
      })));
    } else {
      var key = entry.key,
          value = entry.value;

      var isCircular = circularCache.indexOf(value) !== -1;

      var node = _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, props, { postprocessValue: postprocessValue, collectionLimit: collectionLimit }, {
        key: 'Node--' + key,
        keyPath: [key].concat(keyPath),
        value: postprocessValue(value),
        circularCache: [].concat(circularCache, [value]),
        isCircular: isCircular,
        hideRoot: false
      }));

      if (node !== false) {
        childNodes.push(node);
      }
    }
  });

  return childNodes;
}

function getStateFromProps(props) {
  // calculate individual node expansion if necessary
  var expanded = props.shouldExpandNode && !props.isCircular ? props.shouldExpandNode(props.keyPath, props.data, props.level) : false;
  return {
    expanded: expanded
  };
}

var JSONNestedNode = function (_React$Component) {
  (0, _inherits3['default'])(JSONNestedNode, _React$Component);

  function JSONNestedNode(props) {
    (0, _classCallCheck3['default'])(this, JSONNestedNode);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.handleClick = function () {
      if (_this.props.expandable) {
        _this.setState({ expanded: !_this.state.expanded });
      }
    };

    _this.state = getStateFromProps(props);
    return _this;
  }

  JSONNestedNode.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextState = getStateFromProps(nextProps);
    if (getStateFromProps(this.props).expanded !== nextState.expanded) {
      this.setState(nextState);
    }
  };

  JSONNestedNode.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var _this2 = this;

    return !!(0, _keys2['default'])(nextProps).find(function (key) {
      return key !== 'circularCache' && (key === 'keyPath' ? nextProps[key].join('/') !== _this2.props[key].join('/') : nextProps[key] !== _this2.props[key]);
    }) || nextState.expanded !== this.state.expanded;
  };

  JSONNestedNode.prototype.render = function render() {
    var _props = this.props,
        getItemString = _props.getItemString,
        nodeTypeIndicator = _props.nodeTypeIndicator,
        nodeType = _props.nodeType,
        data = _props.data,
        hideRoot = _props.hideRoot,
        createItemString = _props.createItemString,
        styling = _props.styling,
        collectionLimit = _props.collectionLimit,
        keyPath = _props.keyPath,
        labelRenderer = _props.labelRenderer,
        expandable = _props.expandable;
    var expanded = this.state.expanded;

    var renderedChildren = expanded || hideRoot && this.props.level === 0 ? renderChildNodes((0, _extends3['default'])({}, this.props, { level: this.props.level + 1 })) : null;

    var itemType = _react2['default'].createElement(
      'span',
      styling('nestedNodeItemType', expanded),
      nodeTypeIndicator
    );
    var renderedItemString = getItemString(nodeType, data, itemType, createItemString(data, collectionLimit));
    var stylingArgs = [keyPath, nodeType, expanded, expandable];

    return hideRoot ? _react2['default'].createElement(
      'li',
      styling.apply(undefined, ['rootNode'].concat(stylingArgs)),
      _react2['default'].createElement(
        'ul',
        styling.apply(undefined, ['rootNodeChildren'].concat(stylingArgs)),
        renderedChildren
      )
    ) : _react2['default'].createElement(
      'li',
      styling.apply(undefined, ['nestedNode'].concat(stylingArgs)),
      expandable && _react2['default'].createElement(_JSONArrow2['default'], {
        styling: styling,
        nodeType: nodeType,
        expanded: expanded,
        onClick: this.handleClick
      }),
      _react2['default'].createElement(
        'label',
        (0, _extends3['default'])({}, styling.apply(undefined, [['label', 'nestedNodeLabel']].concat(stylingArgs)), {
          onClick: this.handleClick
        }),
        labelRenderer.apply(undefined, stylingArgs)
      ),
      _react2['default'].createElement(
        'span',
        (0, _extends3['default'])({}, styling.apply(undefined, ['nestedNodeItemString'].concat(stylingArgs)), {
          onClick: this.handleClick
        }),
        renderedItemString
      ),
      _react2['default'].createElement(
        'ul',
        styling.apply(undefined, ['nestedNodeChildren'].concat(stylingArgs)),
        renderedChildren
      )
    );
  };

  return JSONNestedNode;
}(_react2['default'].Component);

JSONNestedNode.propTypes = {
  getItemString: _propTypes2['default'].func.isRequired,
  nodeTypeIndicator: _propTypes2['default'].any,
  nodeType: _propTypes2['default'].string.isRequired,
  data: _propTypes2['default'].any,
  hideRoot: _propTypes2['default'].bool.isRequired,
  createItemString: _propTypes2['default'].func.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  collectionLimit: _propTypes2['default'].number,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  shouldExpandNode: _propTypes2['default'].func,
  level: _propTypes2['default'].number.isRequired,
  sortObjectKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool]),
  isCircular: _propTypes2['default'].bool,
  expandable: _propTypes2['default'].bool
};
JSONNestedNode.defaultProps = {
  data: [],
  circularCache: [],
  level: 0,
  expandable: true
};
exports["default"] = JSONNestedNode;

/***/ }),

/***/ 35249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(42723);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objType = __webpack_require__(9869);

var _objType2 = _interopRequireDefault(_objType);

var _JSONObjectNode = __webpack_require__(89894);

var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);

var _JSONArrayNode = __webpack_require__(89205);

var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);

var _JSONIterableNode = __webpack_require__(59364);

var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);

var _JSONValueNode = __webpack_require__(36399);

var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JSONNode = function JSONNode(_ref) {
  var getItemString = _ref.getItemString,
      keyPath = _ref.keyPath,
      labelRenderer = _ref.labelRenderer,
      styling = _ref.styling,
      value = _ref.value,
      valueRenderer = _ref.valueRenderer,
      isCustomNode = _ref.isCustomNode,
      rest = (0, _objectWithoutProperties3['default'])(_ref, ['getItemString', 'keyPath', 'labelRenderer', 'styling', 'value', 'valueRenderer', 'isCustomNode']);

  var nodeType = isCustomNode(value) ? 'Custom' : (0, _objType2['default'])(value);

  var simpleNodeProps = {
    getItemString: getItemString,
    key: keyPath[0],
    keyPath: keyPath,
    labelRenderer: labelRenderer,
    nodeType: nodeType,
    styling: styling,
    value: value,
    valueRenderer: valueRenderer
  };

  var nestedNodeProps = (0, _extends3['default'])({}, rest, simpleNodeProps, {
    data: value,
    isCustomNode: isCustomNode
  });

  switch (nodeType) {
    case 'Object':
    case 'Error':
    case 'WeakMap':
    case 'WeakSet':
      return _react2['default'].createElement(_JSONObjectNode2['default'], nestedNodeProps);
    case 'Array':
      return _react2['default'].createElement(_JSONArrayNode2['default'], nestedNodeProps);
    case 'Iterable':
    case 'Map':
    case 'Set':
      return _react2['default'].createElement(_JSONIterableNode2['default'], nestedNodeProps);
    case 'String':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return '"' + raw + '"';
        } }));
    case 'Number':
      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
    case 'Boolean':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, {
        valueGetter: function valueGetter(raw) {
          return raw ? 'true' : 'false';
        }
      }));
    case 'Date':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, {
        valueGetter: function valueGetter(raw) {
          return raw.toISOString();
        }
      }));
    case 'Null':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
          return 'null';
        } }));
    case 'Undefined':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
          return 'undefined';
        } }));
    case 'Function':
    case 'Symbol':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, {
        valueGetter: function valueGetter(raw) {
          return raw.toString();
        }
      }));
    case 'Custom':
      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
    default:
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return '<' + nodeType + '>';
        } }));
  }
};

JSONNode.propTypes = {
  getItemString: _propTypes2['default'].func.isRequired,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueRenderer: _propTypes2['default'].func.isRequired,
  isCustomNode: _propTypes2['default'].func.isRequired
};

exports["default"] = JSONNode;

/***/ }),

/***/ 89894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(42723);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getOwnPropertyNames = __webpack_require__(88759);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNestedNode = __webpack_require__(88207);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  var len = (0, _getOwnPropertyNames2['default'])(data).length;
  return len + ' ' + (len !== 1 ? 'keys' : 'key');
}

// Configures <JSONNestedNode> to render an Object
var JSONObjectNode = function JSONObjectNode(_ref) {
  var data = _ref.data,
      props = (0, _objectWithoutProperties3['default'])(_ref, ['data']);
  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    data: data,
    nodeType: 'Object',
    nodeTypeIndicator: props.nodeType === 'Error' ? 'Error()' : '{}',
    createItemString: createItemString,
    expandable: (0, _getOwnPropertyNames2['default'])(data).length > 0
  }));
};

JSONObjectNode.propTypes = {
  data: _propTypes2['default'].object,
  nodeType: _propTypes2['default'].string
};

exports["default"] = JSONObjectNode;

/***/ }),

/***/ 36399:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders simple values (eg. strings, numbers, booleans, etc)
 */

var JSONValueNode = function JSONValueNode(_ref) {
  var nodeType = _ref.nodeType,
      styling = _ref.styling,
      labelRenderer = _ref.labelRenderer,
      keyPath = _ref.keyPath,
      valueRenderer = _ref.valueRenderer,
      value = _ref.value,
      valueGetter = _ref.valueGetter;
  return _react2['default'].createElement(
    'li',
    styling('value', nodeType, keyPath),
    _react2['default'].createElement(
      'label',
      styling(['label', 'valueLabel'], nodeType, keyPath),
      labelRenderer(keyPath, nodeType, false, false)
    ),
    _react2['default'].createElement(
      'span',
      styling('valueText', nodeType, keyPath),
      valueRenderer.apply(undefined, [valueGetter(value), value].concat(keyPath))
    )
  );
};

JSONValueNode.propTypes = {
  nodeType: _propTypes2['default'].string.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  valueRenderer: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueGetter: _propTypes2['default'].func
};

JSONValueNode.defaultProps = {
  valueGetter: function valueGetter(value) {
    return value;
  }
};

exports["default"] = JSONValueNode;

/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _reactBase16Styling = __webpack_require__(67274);

var _solarized = __webpack_require__(29561);

var _solarized2 = _interopRequireDefault(_solarized);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var colorMap = function colorMap(theme) {
  return {
    BACKGROUND_COLOR: theme.base00,
    TEXT_COLOR: theme.base07,
    STRING_COLOR: theme.base0B,
    DATE_COLOR: theme.base0B,
    NUMBER_COLOR: theme.base09,
    BOOLEAN_COLOR: theme.base09,
    NULL_COLOR: theme.base08,
    UNDEFINED_COLOR: theme.base08,
    FUNCTION_COLOR: theme.base08,
    SYMBOL_COLOR: theme.base08,
    LABEL_COLOR: theme.base0D,
    ARROW_COLOR: theme.base0D,
    ITEM_STRING_COLOR: theme.base0B,
    ITEM_STRING_EXPANDED_COLOR: theme.base03
  };
};

var valueColorMap = function valueColorMap(colors) {
  return {
    String: colors.STRING_COLOR,
    Date: colors.DATE_COLOR,
    Number: colors.NUMBER_COLOR,
    Boolean: colors.BOOLEAN_COLOR,
    Null: colors.NULL_COLOR,
    Undefined: colors.UNDEFINED_COLOR,
    Function: colors.FUNCTION_COLOR,
    Symbol: colors.SYMBOL_COLOR
  };
};

var getDefaultThemeStyling = function getDefaultThemeStyling(theme) {
  var colors = colorMap(theme);

  return {
    tree: {
      border: 0,
      padding: 0,
      marginTop: '0.5em',
      marginBottom: '0.5em',
      marginLeft: '0.125em',
      marginRight: 0,
      listStyle: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      backgroundColor: colors.BACKGROUND_COLOR
    },

    value: function value(_ref, nodeType, keyPath) {
      var style = _ref.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          paddingTop: '0.25em',
          paddingRight: 0,
          marginLeft: '0.875em',
          WebkitUserSelect: 'text',
          MozUserSelect: 'text',
          wordWrap: 'break-word',
          paddingLeft: keyPath.length > 1 ? '2.125em' : '1.25em',
          textIndent: '-0.5em',
          wordBreak: 'break-all'
        })
      };
    },

    label: {
      display: 'inline-block',
      color: colors.LABEL_COLOR
    },

    valueLabel: {
      margin: '0 0.5em 0 0'
    },

    valueText: function valueText(_ref2, nodeType) {
      var style = _ref2.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          color: valueColorMap(colors)[nodeType]
        })
      };
    },

    itemRange: function itemRange(styling, expanded) {
      return {
        style: {
          paddingTop: expanded ? 0 : '0.25em',
          cursor: 'pointer',
          color: colors.LABEL_COLOR
        }
      };
    },

    arrow: function arrow(_ref3, nodeType, expanded) {
      var style = _ref3.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          marginLeft: 0,
          transition: '150ms',
          WebkitTransition: '150ms',
          MozTransition: '150ms',
          WebkitTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          MozTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          transform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          transformOrigin: '45% 50%',
          WebkitTransformOrigin: '45% 50%',
          MozTransformOrigin: '45% 50%',
          position: 'relative',
          lineHeight: '1.1em',
          fontSize: '0.75em'
        })
      };
    },

    arrowContainer: function arrowContainer(_ref4, arrowStyle) {
      var style = _ref4.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          display: 'inline-block',
          paddingRight: '0.5em',
          paddingLeft: arrowStyle === 'double' ? '1em' : 0,
          cursor: 'pointer'
        })
      };
    },

    arrowSign: {
      color: colors.ARROW_COLOR
    },

    arrowSignInner: {
      position: 'absolute',
      top: 0,
      left: '-0.4em'
    },

    nestedNode: function nestedNode(_ref5, keyPath, nodeType, expanded, expandable) {
      var style = _ref5.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          position: 'relative',
          paddingTop: '0.25em',
          marginLeft: keyPath.length > 1 ? '0.875em' : 0,
          paddingLeft: !expandable ? '1.125em' : 0
        })
      };
    },

    rootNode: {
      padding: 0,
      margin: 0
    },

    nestedNodeLabel: function nestedNodeLabel(_ref6, keyPath, nodeType, expanded, expandable) {
      var style = _ref6.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          margin: 0,
          padding: 0,
          WebkitUserSelect: expandable ? 'inherit' : 'text',
          MozUserSelect: expandable ? 'inherit' : 'text',
          cursor: expandable ? 'pointer' : 'default'
        })
      };
    },

    nestedNodeItemString: function nestedNodeItemString(_ref7, keyPath, nodeType, expanded) {
      var style = _ref7.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          paddingLeft: '0.5em',
          cursor: 'default',
          color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
        })
      };
    },

    nestedNodeItemType: {
      marginLeft: '0.3em',
      marginRight: '0.3em'
    },

    nestedNodeChildren: function nestedNodeChildren(_ref8, nodeType, expanded) {
      var style = _ref8.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          padding: 0,
          margin: 0,
          listStyle: 'none',
          display: expanded ? 'block' : 'none'
        })
      };
    },

    rootNodeChildren: {
      padding: 0,
      margin: 0,
      listStyle: 'none'
    }
  };
};

exports["default"] = (0, _reactBase16Styling.createStyling)(getDefaultThemeStyling, {
  defaultBase16: _solarized2['default']
});

/***/ }),

/***/ 41063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _getIterator2 = __webpack_require__(26378);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = __webpack_require__(88759);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = __webpack_require__(88902);

var _keys2 = _interopRequireDefault(_keys);

exports["default"] = getCollectionEntries;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getLength(type, collection) {
  if (type === 'Object') {
    return (0, _keys2['default'])(collection).length;
  } else if (type === 'Array') {
    return collection.length;
  }

  return Infinity;
}

function isIterableMap(collection) {
  return typeof collection.set === 'function';
}

function getEntries(type, collection, sortObjectKeys) {
  var from = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var to = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Infinity;

  var res = void 0;

  if (type === 'Object') {
    var keys = (0, _getOwnPropertyNames2['default'])(collection);

    if (sortObjectKeys) {
      keys.sort(sortObjectKeys === true ? undefined : sortObjectKeys);
    }

    keys = keys.slice(from, to + 1);

    res = {
      entries: keys.map(function (key) {
        return { key: key, value: collection[key] };
      })
    };
  } else if (type === 'Array') {
    res = {
      entries: collection.slice(from, to + 1).map(function (val, idx) {
        return { key: idx + from, value: val };
      })
    };
  } else {
    var idx = 0;
    var entries = [];
    var done = true;

    var isMap = isIterableMap(collection);

    for (var _iterator = collection, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var item = _ref;

      if (idx > to) {
        done = false;
        break;
      }
      if (from <= idx) {
        if (isMap && Array.isArray(item)) {
          if (typeof item[0] === 'string' || typeof item[0] === 'number') {
            entries.push({ key: item[0], value: item[1] });
          } else {
            entries.push({
              key: '[entry ' + idx + ']',
              value: {
                '[key]': item[0],
                '[value]': item[1]
              }
            });
          }
        } else {
          entries.push({ key: idx, value: item });
        }
      }
      idx++;
    }

    res = {
      hasMore: !done,
      entries: entries
    };
  }

  return res;
}

function getRanges(from, to, limit) {
  var ranges = [];
  while (to - from > limit * limit) {
    limit = limit * limit;
  }
  for (var i = from; i <= to; i += limit) {
    ranges.push({ from: i, to: Math.min(to, i + limit - 1) });
  }

  return ranges;
}

function getCollectionEntries(type, collection, sortObjectKeys, limit) {
  var from = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var to = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Infinity;

  var getEntriesBound = getEntries.bind(null, type, collection, sortObjectKeys);

  if (!limit) {
    return getEntriesBound().entries;
  }

  var isSubset = to < Infinity;
  var length = Math.min(to - from, getLength(type, collection));

  if (type !== 'Iterable') {
    if (length <= limit || limit < 7) {
      return getEntriesBound(from, to).entries;
    }
  } else {
    if (length <= limit && !isSubset) {
      return getEntriesBound(from, to).entries;
    }
  }

  var limitedEntries = void 0;
  if (type === 'Iterable') {
    var _getEntriesBound = getEntriesBound(from, from + limit - 1),
        hasMore = _getEntriesBound.hasMore,
        entries = _getEntriesBound.entries;

    limitedEntries = hasMore ? [].concat(entries, getRanges(from + limit, from + 2 * limit - 1, limit)) : entries;
  } else {
    limitedEntries = isSubset ? getRanges(from, to, limit) : [].concat(getEntriesBound(0, limit - 5).entries, getRanges(limit - 4, length - 5, limit), getEntriesBound(length - 4, length - 1).entries);
  }

  return limitedEntries;
}

/***/ }),

/***/ 80126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _objectWithoutProperties2 = __webpack_require__(42723);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(99663);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(49135);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(93196);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(88239);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(88902);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNode = __webpack_require__(35249);

var _JSONNode2 = _interopRequireDefault(_JSONNode);

var _createStylingFromTheme = __webpack_require__(170);

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

var _reactBase16Styling = __webpack_require__(67274);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var identity = function identity(value) {
  return value;
}; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
// all credits and original code to the author
// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>

var expandRootNode = function expandRootNode(keyName, data, level) {
  return level === 0;
};
var defaultItemString = function defaultItemString(type, data, itemType, itemString) {
  return _react2['default'].createElement(
    'span',
    null,
    itemType,
    ' ',
    itemString
  );
};
var defaultLabelRenderer = function defaultLabelRenderer(_ref) {
  var label = _ref[0];
  return _react2['default'].createElement(
    'span',
    null,
    label,
    ':'
  );
};
var noCustomNode = function noCustomNode() {
  return false;
};

function checkLegacyTheming(theme, props) {
  var deprecatedStylingMethodsMap = {
    getArrowStyle: 'arrow',
    getListStyle: 'nestedNodeChildren',
    getItemStringStyle: 'nestedNodeItemString',
    getLabelStyle: 'label',
    getValueStyle: 'valueText'
  };

  var deprecatedStylingMethods = (0, _keys2['default'])(deprecatedStylingMethodsMap).filter(function (name) {
    return props[name];
  });

  if (deprecatedStylingMethods.length > 0) {
    if (typeof theme === 'string') {
      theme = {
        extend: theme
      };
    } else {
      theme = (0, _extends3['default'])({}, theme);
    }

    deprecatedStylingMethods.forEach(function (name) {
      // eslint-disable-next-line no-console
      console.error('Styling method "' + name + '" is deprecated, use "theme" property instead');

      theme[deprecatedStylingMethodsMap[name]] = function (_ref2) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var style = _ref2.style;
        return {
          style: (0, _extends3['default'])({}, style, props[name].apply(props, args))
        };
      };
    });
  }

  return theme;
}

function getStateFromProps(props) {
  var theme = checkLegacyTheming(props.theme, props);
  if (props.invertTheme) {
    if (typeof theme === 'string') {
      theme = theme + ':inverted';
    } else if (theme && theme.extend) {
      if (typeof theme === 'string') {
        theme = (0, _extends3['default'])({}, theme, { extend: theme.extend + ':inverted' });
      } else {
        theme = (0, _extends3['default'])({}, theme, { extend: (0, _reactBase16Styling.invertTheme)(theme.extend) });
      }
    } else if (theme) {
      theme = (0, _reactBase16Styling.invertTheme)(theme);
    }
  }
  return {
    styling: (0, _createStylingFromTheme2['default'])(theme)
  };
}

var JSONTree = function (_React$Component) {
  (0, _inherits3['default'])(JSONTree, _React$Component);

  function JSONTree(props) {
    (0, _classCallCheck3['default'])(this, JSONTree);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.state = getStateFromProps(props);
    return _this;
  }

  JSONTree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (['theme', 'invertTheme'].find(function (k) {
      return nextProps[k] !== _this2.props[k];
    })) {
      this.setState(getStateFromProps(nextProps));
    }
  };

  JSONTree.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this3 = this;

    return !!(0, _keys2['default'])(nextProps).find(function (k) {
      return k === 'keyPath' ? nextProps[k].join('/') !== _this3.props[k].join('/') : nextProps[k] !== _this3.props[k];
    });
  };

  JSONTree.prototype.render = function render() {
    var _props = this.props,
        value = _props.data,
        keyPath = _props.keyPath,
        postprocessValue = _props.postprocessValue,
        hideRoot = _props.hideRoot,
        theme = _props.theme,
        _ = _props.invertTheme,
        rest = (0, _objectWithoutProperties3['default'])(_props, ['data', 'keyPath', 'postprocessValue', 'hideRoot', 'theme', 'invertTheme']);
    var styling = this.state.styling;


    return _react2['default'].createElement(
      'ul',
      styling('tree'),
      _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, (0, _extends3['default'])({ postprocessValue: postprocessValue, hideRoot: hideRoot, styling: styling }, rest), {
        keyPath: hideRoot ? [] : keyPath,
        value: postprocessValue(value)
      }))
    );
  };

  return JSONTree;
}(_react2['default'].Component);

JSONTree.propTypes = {
  data: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].object]).isRequired,
  hideRoot: _propTypes2['default'].bool,
  theme: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].string]),
  invertTheme: _propTypes2['default'].bool,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])),
  postprocessValue: _propTypes2['default'].func,
  sortObjectKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool])
};
JSONTree.defaultProps = {
  shouldExpandNode: expandRootNode,
  hideRoot: false,
  keyPath: ['root'],
  getItemString: defaultItemString,
  labelRenderer: defaultLabelRenderer,
  valueRenderer: identity,
  postprocessValue: identity,
  isCustomNode: noCustomNode,
  collectionLimit: 50,
  invertTheme: true
};
exports.Z = JSONTree;

/***/ }),

/***/ 9869:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(64275);

var _iterator2 = _interopRequireDefault(_iterator);

exports["default"] = objType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function objType(obj) {
  var type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === 'Object' && typeof obj[_iterator2['default']] === 'function') {
    return 'Iterable';
  }

  if (type === 'Custom' && obj.constructor !== Object && obj instanceof Object) {
    // For projects implementing objects overriding `.prototype[Symbol.toStringTag]`
    return 'Object';
  }

  return type;
}

/***/ }),

/***/ 29561:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};

/***/ }),

/***/ 46871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ 80129:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(45697));

var _addClass = _interopRequireDefault(__webpack_require__(98141));

var _removeClass = _interopRequireDefault(__webpack_require__(10602));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _Transition = _interopRequireDefault(__webpack_require__(60644));

var _PropTypes = __webpack_require__(54726);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  false ? 0 : {};
var _default = CSSTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 26093:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _reactDom = __webpack_require__(9060);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(92381));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? 0 : {};
var _default = ReplaceTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 60644:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(45697));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _reactDom = _interopRequireDefault(__webpack_require__(9060));

var _reactLifecyclesCompat = __webpack_require__(46871);

var _PropTypes = __webpack_require__(54726);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? 0 : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports["default"] = _default;

/***/ }),

/***/ 92381:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _reactLifecyclesCompat = __webpack_require__(46871);

var _ChildMapping = __webpack_require__(59717);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 64317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(80129));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(26093));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(92381));

var _Transition = _interopRequireDefault(__webpack_require__(60644));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ 59717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(67294);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ 54726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? 0 : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? 0 : null;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ 16921:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/SqlLab/actions/sqlLab.js
var sqlLab_namespaceObject = {};
__webpack_require__.r(sqlLab_namespaceObject);
__webpack_require__.d(sqlLab_namespaceObject, {
  "ADD_QUERY_EDITOR": () => (ADD_QUERY_EDITOR),
  "CHANGE_DATA_PREVIEW_ID": () => (CHANGE_DATA_PREVIEW_ID),
  "CLEAR_QUERY_RESULTS": () => (CLEAR_QUERY_RESULTS),
  "CLONE_QUERY_TO_NEW_TAB": () => (CLONE_QUERY_TO_NEW_TAB),
  "COLLAPSE_TABLE": () => (COLLAPSE_TABLE),
  "COST_ESTIMATE_FAILED": () => (COST_ESTIMATE_FAILED),
  "COST_ESTIMATE_RETURNED": () => (COST_ESTIMATE_RETURNED),
  "COST_ESTIMATE_STARTED": () => (COST_ESTIMATE_STARTED),
  "CREATE_DATASOURCE_FAILED": () => (CREATE_DATASOURCE_FAILED),
  "CREATE_DATASOURCE_STARTED": () => (CREATE_DATASOURCE_STARTED),
  "CREATE_DATASOURCE_SUCCESS": () => (CREATE_DATASOURCE_SUCCESS),
  "CtasEnum": () => (CtasEnum),
  "END_QUERY": () => (END_QUERY),
  "EXPAND_TABLE": () => (EXPAND_TABLE),
  "LOAD_QUERY_EDITOR": () => (LOAD_QUERY_EDITOR),
  "MERGE_TABLE": () => (MERGE_TABLE),
  "MIGRATE_QUERY": () => (MIGRATE_QUERY),
  "MIGRATE_QUERY_EDITOR": () => (MIGRATE_QUERY_EDITOR),
  "MIGRATE_TABLE": () => (MIGRATE_TABLE),
  "MIGRATE_TAB_HISTORY": () => (MIGRATE_TAB_HISTORY),
  "QUERY_EDITOR_PERSIST_HEIGHT": () => (QUERY_EDITOR_PERSIST_HEIGHT),
  "QUERY_EDITOR_SAVED": () => (QUERY_EDITOR_SAVED),
  "QUERY_EDITOR_SETDB": () => (QUERY_EDITOR_SETDB),
  "QUERY_EDITOR_SET_AUTORUN": () => (QUERY_EDITOR_SET_AUTORUN),
  "QUERY_EDITOR_SET_FUNCTION_NAMES": () => (QUERY_EDITOR_SET_FUNCTION_NAMES),
  "QUERY_EDITOR_SET_QUERY_LIMIT": () => (QUERY_EDITOR_SET_QUERY_LIMIT),
  "QUERY_EDITOR_SET_SCHEMA": () => (QUERY_EDITOR_SET_SCHEMA),
  "QUERY_EDITOR_SET_SCHEMA_OPTIONS": () => (QUERY_EDITOR_SET_SCHEMA_OPTIONS),
  "QUERY_EDITOR_SET_SELECTED_TEXT": () => (QUERY_EDITOR_SET_SELECTED_TEXT),
  "QUERY_EDITOR_SET_SQL": () => (QUERY_EDITOR_SET_SQL),
  "QUERY_EDITOR_SET_TABLE_OPTIONS": () => (QUERY_EDITOR_SET_TABLE_OPTIONS),
  "QUERY_EDITOR_SET_TEMPLATE_PARAMS": () => (QUERY_EDITOR_SET_TEMPLATE_PARAMS),
  "QUERY_EDITOR_SET_TITLE": () => (QUERY_EDITOR_SET_TITLE),
  "QUERY_EDITOR_TOGGLE_LEFT_BAR": () => (QUERY_EDITOR_TOGGLE_LEFT_BAR),
  "QUERY_FAILED": () => (QUERY_FAILED),
  "QUERY_SUCCESS": () => (QUERY_SUCCESS),
  "QUERY_VALIDATION_FAILED": () => (QUERY_VALIDATION_FAILED),
  "QUERY_VALIDATION_RETURNED": () => (QUERY_VALIDATION_RETURNED),
  "REFRESH_QUERIES": () => (REFRESH_QUERIES),
  "REMOVE_DATA_PREVIEW": () => (REMOVE_DATA_PREVIEW),
  "REMOVE_QUERY": () => (REMOVE_QUERY),
  "REMOVE_QUERY_EDITOR": () => (REMOVE_QUERY_EDITOR),
  "REMOVE_TABLE": () => (REMOVE_TABLE),
  "REQUEST_QUERY_RESULTS": () => (REQUEST_QUERY_RESULTS),
  "RESET_STATE": () => (RESET_STATE),
  "RUN_QUERY": () => (RUN_QUERY),
  "SET_ACTIVE_QUERY_EDITOR": () => (SET_ACTIVE_QUERY_EDITOR),
  "SET_ACTIVE_SOUTHPANE_TAB": () => (SET_ACTIVE_SOUTHPANE_TAB),
  "SET_DATABASES": () => (SET_DATABASES),
  "SET_TABLES": () => (SET_TABLES),
  "SET_USER_OFFLINE": () => (SET_USER_OFFLINE),
  "START_QUERY": () => (START_QUERY),
  "START_QUERY_VALIDATION": () => (START_QUERY_VALIDATION),
  "STOP_QUERY": () => (STOP_QUERY),
  "UPDATE_QUERY_EDITOR": () => (UPDATE_QUERY_EDITOR),
  "addDangerToast": () => (addDangerToast),
  "addInfoToast": () => (addInfoToast),
  "addQueryEditor": () => (addQueryEditor),
  "addSuccessToast": () => (addSuccessToast),
  "addTable": () => (addTable),
  "addWarningToast": () => (addWarningToast),
  "changeDataPreviewId": () => (changeDataPreviewId),
  "clearQueryResults": () => (clearQueryResults),
  "cloneQueryToNewTab": () => (cloneQueryToNewTab),
  "collapseTable": () => (collapseTable),
  "createCtasDatasource": () => (createCtasDatasource),
  "createDatasource": () => (createDatasource),
  "createDatasourceFailed": () => (createDatasourceFailed),
  "createDatasourceStarted": () => (createDatasourceStarted),
  "createDatasourceSuccess": () => (createDatasourceSuccess),
  "estimateQueryCost": () => (estimateQueryCost),
  "expandTable": () => (expandTable),
  "fetchQueryResults": () => (fetchQueryResults),
  "loadQueryEditor": () => (loadQueryEditor),
  "mergeTable": () => (mergeTable),
  "migrateQueryEditorFromLocalStorage": () => (migrateQueryEditorFromLocalStorage),
  "persistEditorHeight": () => (persistEditorHeight),
  "popDatasourceQuery": () => (popDatasourceQuery),
  "popQuery": () => (popQuery),
  "popSavedQuery": () => (popSavedQuery),
  "popStoredQuery": () => (popStoredQuery),
  "postStopQuery": () => (postStopQuery),
  "queryEditorSetAutorun": () => (queryEditorSetAutorun),
  "queryEditorSetDb": () => (queryEditorSetDb),
  "queryEditorSetFunctionNames": () => (queryEditorSetFunctionNames),
  "queryEditorSetQueryLimit": () => (queryEditorSetQueryLimit),
  "queryEditorSetSchema": () => (queryEditorSetSchema),
  "queryEditorSetSchemaOptions": () => (queryEditorSetSchemaOptions),
  "queryEditorSetSelectedText": () => (queryEditorSetSelectedText),
  "queryEditorSetSql": () => (queryEditorSetSql),
  "queryEditorSetTableOptions": () => (queryEditorSetTableOptions),
  "queryEditorSetTemplateParams": () => (queryEditorSetTemplateParams),
  "queryEditorSetTitle": () => (queryEditorSetTitle),
  "queryFailed": () => (queryFailed),
  "querySuccess": () => (querySuccess),
  "queryValidationFailed": () => (queryValidationFailed),
  "queryValidationReturned": () => (queryValidationReturned),
  "reFetchQueryResults": () => (reFetchQueryResults),
  "reRunQuery": () => (reRunQuery),
  "refreshQueries": () => (refreshQueries),
  "removeDataPreview": () => (removeDataPreview),
  "removeQuery": () => (removeQuery),
  "removeQueryEditor": () => (removeQueryEditor),
  "removeTable": () => (removeTable),
  "requestQueryResults": () => (requestQueryResults),
  "resetState": () => (resetState),
  "runQuery": () => (runQuery),
  "saveQuery": () => (saveQuery),
  "scheduleQuery": () => (scheduleQuery),
  "setActiveQueryEditor": () => (setActiveQueryEditor),
  "setActiveSouthPaneTab": () => (setActiveSouthPaneTab),
  "setDatabases": () => (setDatabases),
  "setTables": () => (setTables),
  "setUserOffline": () => (setUserOffline),
  "startQuery": () => (startQuery),
  "startQueryValidation": () => (startQueryValidation),
  "stopQuery": () => (stopQuery),
  "switchQueryEditor": () => (switchQueryEditor),
  "toggleLeftBar": () => (toggleLeftBar),
  "updateQueryEditor": () => (updateQueryEditor),
  "updateSavedQuery": () => (updateSavedQuery),
  "validateQuery": () => (validateQuery)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(9060);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(53894);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/components/MessageToasts/actions.ts
var actions = __webpack_require__(72570);
// EXTERNAL MODULE: ./src/components/MessageToasts/types.ts
var types = __webpack_require__(8818);
;// CONCATENATED MODULE: ./src/components/MessageToasts/getToastsFromPyFlashMessages.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function toastsFromPyFlashMessages(flashMessages = []) {
  const toasts = [];

  flashMessages.forEach(([messageType, message]) => {
    const toastType =
    messageType === 'danger' ?
    types/* ToastType.DANGER */.p.DANGER :
    messageType === 'success' && types/* ToastType.SUCCESS */.p.SUCCESS || types/* ToastType.INFO */.p.INFO;

    const toast = (0,actions/* addToast */.fz)({
      text: message,
      toastType }).
    payload;

    toasts.push(toast);
  });

  return toasts;
}
;// CONCATENATED MODULE: ./src/SqlLab/reducers/getInitialState.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function getInitialState({
  defaultDbId,
  common,
  active_tab: activeTab,
  tab_state_ids: tabStateIds = [],
  databases,
  queries: queries_,
  requested_query: requestedQuery,
  user })
{
  /**
   * Before YYYY-MM-DD, the state for SQL Lab was stored exclusively in the
   * browser's localStorage. The feature flag `SQLLAB_BACKEND_PERSISTENCE`
   * moves the state to the backend instead, migrating it from local storage.
   *
   * To allow for a transparent migration, the initial state is a combination
   * of the backend state (if any) with the browser state (if any).
   */
  const queryEditors = [];
  const defaultQueryEditor = {
    id: null,
    loaded: true,
    title: (0,TranslatorSingleton.t)('Untitled query'),
    sql: 'SELECT *\nFROM\nWHERE',
    selectedText: null,
    latestQueryId: null,
    autorun: false,
    templateParams: null,
    dbId: defaultDbId,
    functionNames: [],
    queryLimit: common.conf.DEFAULT_SQLLAB_LIMIT,
    validationResult: {
      id: null,
      errors: [],
      completed: false },

    queryCostEstimate: {
      cost: null,
      completed: false,
      error: null },

    hideLeftBar: false };


  /**
   * Load state from the backend. This will be empty if the feature flag
   * `SQLLAB_BACKEND_PERSISTENCE` is off.
   */
  tabStateIds.forEach(({ id, label }) => {
    let queryEditor;
    if (activeTab && activeTab.id === id) {
      queryEditor = {
        id: id.toString(),
        loaded: true,
        title: activeTab.label,
        sql: activeTab.sql || undefined,
        selectedText: undefined,
        latestQueryId: activeTab.latest_query ?
        activeTab.latest_query.id :
        null,
        autorun: activeTab.autorun,
        templateParams: activeTab.template_params || undefined,
        dbId: activeTab.database_id,
        functionNames: [],
        schema: activeTab.schema,
        queryLimit: activeTab.query_limit,
        validationResult: {
          id: null,
          errors: [],
          completed: false },

        hideLeftBar: activeTab.hide_left_bar };

    } else {
      // dummy state, actual state will be loaded on tab switch
      queryEditor = {
        ...defaultQueryEditor,
        id: id.toString(),
        loaded: false,
        title: label };

    }
    queryEditors.push(queryEditor);
  });

  const tabHistory = activeTab ? [activeTab.id.toString()] : [];
  const tables = [];
  if (activeTab) {
    activeTab.table_schemas.
    filter((tableSchema) => tableSchema.description !== null).
    forEach((tableSchema) => {
      const {
        columns,
        selectStar,
        primaryKey,
        foreignKeys,
        indexes,
        dataPreviewQueryId,
        partitions,
        metadata } =
      tableSchema.description;
      const table = {
        dbId: tableSchema.database_id,
        queryEditorId: tableSchema.tab_state_id.toString(),
        schema: tableSchema.schema,
        name: tableSchema.table,
        expanded: tableSchema.expanded,
        id: tableSchema.id,
        isMetadataLoading: false,
        isExtraMetadataLoading: false,
        dataPreviewQueryId,
        columns,
        selectStar,
        primaryKey,
        foreignKeys,
        indexes,
        partitions,
        metadata };

      tables.push(table);
    });
  }

  const queries = { ...queries_ };

  /**
   * If the `SQLLAB_BACKEND_PERSISTENCE` feature flag is off, or if the user
   * hasn't used SQL Lab after it has been turned on, the state will be stored
   * in the browser's local storage.
   */
  if (
  localStorage.getItem('redux') &&
  JSON.parse(localStorage.getItem('redux')).sqlLab)
  {
    const { sqlLab } = JSON.parse(localStorage.getItem('redux'));

    if (sqlLab.queryEditors.length === 0) {
      // migration was successful
      localStorage.removeItem('redux');
    } else {
      // add query editors and tables to state with a special flag so they can
      // be migrated if the `SQLLAB_BACKEND_PERSISTENCE` feature flag is on
      sqlLab.queryEditors.forEach((qe) =>
      queryEditors.push({
        ...qe,
        inLocalStorage: true,
        loaded: true }));


      sqlLab.tables.forEach((table) =>
      tables.push({ ...table, inLocalStorage: true }));

      Object.values(sqlLab.queries).forEach((query) => {
        queries[query.id] = { ...query, inLocalStorage: true };
      });
      tabHistory.push(...sqlLab.tabHistory);
    }
  }

  return {
    sqlLab: {
      activeSouthPaneTab: 'Results',
      alerts: [],
      databases,
      offline: false,
      queries,
      queryEditors,
      tabHistory,
      tables,
      queriesLastUpdate: Date.now(),
      user },

    requestedQuery,
    messageToasts: toastsFromPyFlashMessages(
    (common || {}).flash_messages || []),

    localStorageUsageInKilobytes: 0,
    common: {
      flash_messages: common.flash_messages,
      conf: common.conf } };


}
;// CONCATENATED MODULE: ./src/components/MessageToasts/reducers.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


function messageToastsReducer(toasts = [], action) {
  switch (action.type) {
    case actions/* ADD_TOAST */.h:{
        const { payload: toast } = action;
        const result = toasts.slice();
        if (!toast.noDuplicate || !result.find((x) => x.text === toast.text)) {
          return [toast, ...toasts];
        }
        return toasts;
      }

    case actions/* REMOVE_TOAST */.K7:{
        const {
          payload: { id } } =
        action;
        return [...toasts].filter((toast) => toast.id !== id);
      }

    default:
      return toasts;}

}
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
// EXTERNAL MODULE: ./node_modules/json-bigint/index.js
var json_bigint = __webpack_require__(4400);
var json_bigint_default = /*#__PURE__*/__webpack_require__.n(json_bigint);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/lodash/invert.js
var invert = __webpack_require__(63137);
var invert_default = /*#__PURE__*/__webpack_require__.n(invert);
// EXTERNAL MODULE: ./node_modules/lodash/mapKeys.js
var mapKeys = __webpack_require__(67523);
var mapKeys_default = /*#__PURE__*/__webpack_require__.n(mapKeys);
// EXTERNAL MODULE: ./src/modules/dates.js
var dates = __webpack_require__(1836);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
// EXTERNAL MODULE: ./src/utils/errorMessages.ts
var errorMessages = __webpack_require__(66785);
;// CONCATENATED MODULE: ./src/SqlLab/actions/sqlLab.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */












const RESET_STATE = 'RESET_STATE';
const ADD_QUERY_EDITOR = 'ADD_QUERY_EDITOR';
const UPDATE_QUERY_EDITOR = 'UPDATE_QUERY_EDITOR';
const QUERY_EDITOR_SAVED = 'QUERY_EDITOR_SAVED';
const CLONE_QUERY_TO_NEW_TAB = 'CLONE_QUERY_TO_NEW_TAB';
const REMOVE_QUERY_EDITOR = 'REMOVE_QUERY_EDITOR';
const MERGE_TABLE = 'MERGE_TABLE';
const REMOVE_TABLE = 'REMOVE_TABLE';
const END_QUERY = 'END_QUERY';
const REMOVE_QUERY = 'REMOVE_QUERY';
const EXPAND_TABLE = 'EXPAND_TABLE';
const COLLAPSE_TABLE = 'COLLAPSE_TABLE';
const QUERY_EDITOR_SETDB = 'QUERY_EDITOR_SETDB';
const QUERY_EDITOR_SET_SCHEMA = 'QUERY_EDITOR_SET_SCHEMA';
const QUERY_EDITOR_SET_SCHEMA_OPTIONS =
'QUERY_EDITOR_SET_SCHEMA_OPTIONS';
const QUERY_EDITOR_SET_TABLE_OPTIONS = 'QUERY_EDITOR_SET_TABLE_OPTIONS';
const QUERY_EDITOR_SET_TITLE = 'QUERY_EDITOR_SET_TITLE';
const QUERY_EDITOR_SET_AUTORUN = 'QUERY_EDITOR_SET_AUTORUN';
const QUERY_EDITOR_SET_SQL = 'QUERY_EDITOR_SET_SQL';
const QUERY_EDITOR_SET_QUERY_LIMIT = 'QUERY_EDITOR_SET_QUERY_LIMIT';
const QUERY_EDITOR_SET_TEMPLATE_PARAMS =
'QUERY_EDITOR_SET_TEMPLATE_PARAMS';
const QUERY_EDITOR_SET_SELECTED_TEXT = 'QUERY_EDITOR_SET_SELECTED_TEXT';
const QUERY_EDITOR_SET_FUNCTION_NAMES =
'QUERY_EDITOR_SET_FUNCTION_NAMES';
const QUERY_EDITOR_PERSIST_HEIGHT = 'QUERY_EDITOR_PERSIST_HEIGHT';
const QUERY_EDITOR_TOGGLE_LEFT_BAR = 'QUERY_EDITOR_TOGGLE_LEFT_BAR';
const MIGRATE_QUERY_EDITOR = 'MIGRATE_QUERY_EDITOR';
const MIGRATE_TAB_HISTORY = 'MIGRATE_TAB_HISTORY';
const MIGRATE_TABLE = 'MIGRATE_TABLE';
const MIGRATE_QUERY = 'MIGRATE_QUERY';

const SET_DATABASES = 'SET_DATABASES';
const SET_ACTIVE_QUERY_EDITOR = 'SET_ACTIVE_QUERY_EDITOR';
const LOAD_QUERY_EDITOR = 'LOAD_QUERY_EDITOR';
const SET_TABLES = 'SET_TABLES';
const SET_ACTIVE_SOUTHPANE_TAB = 'SET_ACTIVE_SOUTHPANE_TAB';
const REFRESH_QUERIES = 'REFRESH_QUERIES';
const SET_USER_OFFLINE = 'SET_USER_OFFLINE';
const RUN_QUERY = 'RUN_QUERY';
const START_QUERY = 'START_QUERY';
const STOP_QUERY = 'STOP_QUERY';
const REQUEST_QUERY_RESULTS = 'REQUEST_QUERY_RESULTS';
const QUERY_SUCCESS = 'QUERY_SUCCESS';
const QUERY_FAILED = 'QUERY_FAILED';
const CLEAR_QUERY_RESULTS = 'CLEAR_QUERY_RESULTS';
const REMOVE_DATA_PREVIEW = 'REMOVE_DATA_PREVIEW';
const CHANGE_DATA_PREVIEW_ID = 'CHANGE_DATA_PREVIEW_ID';

const START_QUERY_VALIDATION = 'START_QUERY_VALIDATION';
const QUERY_VALIDATION_RETURNED = 'QUERY_VALIDATION_RETURNED';
const QUERY_VALIDATION_FAILED = 'QUERY_VALIDATION_FAILED';
const COST_ESTIMATE_STARTED = 'COST_ESTIMATE_STARTED';
const COST_ESTIMATE_RETURNED = 'COST_ESTIMATE_RETURNED';
const COST_ESTIMATE_FAILED = 'COST_ESTIMATE_FAILED';

const CREATE_DATASOURCE_STARTED = 'CREATE_DATASOURCE_STARTED';
const CREATE_DATASOURCE_SUCCESS = 'CREATE_DATASOURCE_SUCCESS';
const CREATE_DATASOURCE_FAILED = 'CREATE_DATASOURCE_FAILED';

const addInfoToast = actions/* addInfoToast */.bM;
const addSuccessToast = actions/* addSuccessToast */.ws;
const addDangerToast = actions/* addDangerToast */.Gb;
const addWarningToast = actions/* addWarningToast */.Dz;

const CtasEnum = {
  TABLE: 'TABLE',
  VIEW: 'VIEW' };

const ERR_MSG_CANT_LOAD_QUERY = (0,TranslatorSingleton.t)("The query couldn't be loaded");

// a map of SavedQuery field names to the different names used client-side,
// because for now making the names consistent is too complicated
// so it might as well only happen in one place
const queryClientMapping = {
  id: 'remoteId',
  db_id: 'dbId',
  client_id: 'id',
  label: 'title' };

const queryServerMapping = invert_default()(queryClientMapping);

// uses a mapping like those above to convert object key names to another style
const fieldConverter = (mapping) => (obj) =>
mapKeys_default()(obj, (value, key) => key in mapping ? mapping[key] : key);

const convertQueryToServer = fieldConverter(queryServerMapping);
const convertQueryToClient = fieldConverter(queryClientMapping);

function resetState() {
  return { type: RESET_STATE };
}

function startQueryValidation(query) {
  Object.assign(query, {
    id: query.id ? query.id : shortid_default().generate() });

  return { type: START_QUERY_VALIDATION, query };
}

function queryValidationReturned(query, results) {
  return { type: QUERY_VALIDATION_RETURNED, query, results };
}

function queryValidationFailed(query, message, error) {
  return { type: QUERY_VALIDATION_FAILED, query, message, error };
}

function updateQueryEditor(alterations) {
  return { type: UPDATE_QUERY_EDITOR, alterations };
}

function scheduleQuery(query) {
  return (dispatch) =>
  SupersetClient/* default.post */.Z.post({
    endpoint: '/savedqueryviewapi/api/create',
    postPayload: query,
    stringify: false }).

  then(() =>
  dispatch(
  addSuccessToast(
  (0,TranslatorSingleton.t)(
  'Your query has been scheduled. To see details of your query, navigate to Saved queries')))).




  catch(() =>
  dispatch(addDangerToast((0,TranslatorSingleton.t)('Your query could not be scheduled'))));

}

function estimateQueryCost(query) {
  const { dbId, schema, sql, templateParams } = query;
  const endpoint =
  schema === null ?
  `/superset/estimate_query_cost/${dbId}/` :
  `/superset/estimate_query_cost/${dbId}/${schema}/`;
  return (dispatch) =>
  Promise.all([
  dispatch({ type: COST_ESTIMATE_STARTED, query }),
  SupersetClient/* default.post */.Z.post({
    endpoint,
    postPayload: {
      sql,
      templateParams: JSON.parse(templateParams || '{}') } }).


  then(({ json }) =>
  dispatch({ type: COST_ESTIMATE_RETURNED, query, json })).

  catch((response) =>
  (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((error) => {
    const message =
    error.error ||
    error.statusText ||
    (0,TranslatorSingleton.t)('Failed at retrieving results');
    return dispatch({
      type: COST_ESTIMATE_FAILED,
      query,
      error: message });

  }))]);


}

function startQuery(query) {
  Object.assign(query, {
    id: query.id ? query.id : shortid_default().generate(),
    progress: 0,
    startDttm: (0,dates/* now */.zO)(),
    state: query.runAsync ? 'pending' : 'running',
    cached: false });

  return { type: START_QUERY, query };
}

function querySuccess(query, results) {
  return function (dispatch) {
    const sync =
    !query.isDataPreview &&
    (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${results.query.sqlEditorId}`),
      postPayload: { latest_query_id: query.id } }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: QUERY_SUCCESS, query, results })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while storing the latest query id in the backend. ' +
    'Please contact your administrator if this problem persists.'))));




  };
}

function queryFailed(query, msg, link, errors) {
  return function (dispatch) {
    const sync =
    !query.isDataPreview &&
    (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${query.sqlEditorId}`),
      postPayload: { latest_query_id: query.id } }) :

    Promise.resolve();

    return (
      sync.
      catch(() =>
      dispatch(
      addDangerToast(
      (0,TranslatorSingleton.t)(
      'An error occurred while storing the latest query id in the backend. ' +
      'Please contact your administrator if this problem persists.'))))




      // We should always show the error message, even if we couldn't sync the
      // state to the backend
      .then(() => dispatch({ type: QUERY_FAILED, query, msg, link, errors })));

  };
}

function stopQuery(query) {
  return { type: STOP_QUERY, query };
}

function clearQueryResults(query) {
  return { type: CLEAR_QUERY_RESULTS, query };
}

function removeDataPreview(table) {
  return { type: REMOVE_DATA_PREVIEW, table };
}

function requestQueryResults(query) {
  return { type: REQUEST_QUERY_RESULTS, query };
}

function fetchQueryResults(query, displayLimit) {
  return function (dispatch) {
    dispatch(requestQueryResults(query));

    return SupersetClient/* default.get */.Z.get({
      endpoint: `/superset/results/${query.resultsKey}/?rows=${displayLimit}`,
      parseMethod: 'text' }).

    then(({ text = '{}' }) => {
      const bigIntJson = json_bigint_default().parse(text);
      return dispatch(querySuccess(query, bigIntJson));
    }).
    catch((response) =>
    (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((error) => {
      const message =
      error.error ||
      error.statusText ||
      (0,TranslatorSingleton.t)('Failed at retrieving results');

      return dispatch(
      queryFailed(query, message, error.link, error.errors));

    }));

  };
}

function runQuery(query) {
  return function (dispatch) {
    dispatch(startQuery(query));
    const postPayload = {
      client_id: query.id,
      database_id: query.dbId,
      json: true,
      runAsync: query.runAsync,
      schema: query.schema,
      sql: query.sql,
      sql_editor_id: query.sqlEditorId,
      tab: query.tab,
      tmp_table_name: query.tempTable,
      select_as_cta: query.ctas,
      ctas_method: query.ctas_method,
      templateParams: query.templateParams,
      queryLimit: query.queryLimit,
      expand_data: true };


    return SupersetClient/* default.post */.Z.post({
      endpoint: '/superset/sql_json/',
      body: JSON.stringify(postPayload),
      headers: { 'Content-Type': 'application/json' },
      parseMethod: 'text' }).

    then(({ text = '{}' }) => {
      if (!query.runAsync) {
        const bigIntJson = json_bigint_default().parse(text);
        dispatch(querySuccess(query, bigIntJson));
      }
    }).
    catch((response) =>
    (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((error) => {
      let message = error.error || error.statusText || (0,TranslatorSingleton.t)('Unknown error');
      if (message.includes('CSRF token')) {
        message = (0,TranslatorSingleton.t)(errorMessages/* default.SESSION_TIMED_OUT */.Z.SESSION_TIMED_OUT);
      }
      dispatch(queryFailed(query, message, error.link, error.errors));
    }));

  };
}

function reRunQuery(query) {
  // run Query with a new id
  return function (dispatch) {
    dispatch(runQuery({ ...query, id: shortid_default().generate() }));
  };
}

function validateQuery(query) {
  return function (dispatch) {
    dispatch(startQueryValidation(query));

    const postPayload = {
      client_id: query.id,
      database_id: query.dbId,
      json: true,
      schema: query.schema,
      sql: query.sql,
      sql_editor_id: query.sqlEditorId,
      templateParams: query.templateParams,
      validate_only: true };


    return SupersetClient/* default.post */.Z.post({
      endpoint: `/superset/validate_sql_json/${window.location.search}`,
      postPayload,
      stringify: false }).

    then(({ json }) => dispatch(queryValidationReturned(query, json))).
    catch((response) =>
    (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((error) => {
      let message = error.error || error.statusText || (0,TranslatorSingleton.t)('Unknown error');
      if (message.includes('CSRF token')) {
        message = (0,TranslatorSingleton.t)(errorMessages/* default.SESSION_TIMED_OUT */.Z.SESSION_TIMED_OUT);
      }
      dispatch(queryValidationFailed(query, message, error));
    }));

  };
}

function postStopQuery(query) {
  return function (dispatch) {
    return SupersetClient/* default.post */.Z.post({
      endpoint: '/superset/stop_query/',
      postPayload: { client_id: query.id },
      stringify: false }).

    then(() => dispatch(stopQuery(query))).
    then(() => dispatch(addSuccessToast((0,TranslatorSingleton.t)('Query was stopped.')))).
    catch(() =>
    dispatch(
    addDangerToast(`${(0,TranslatorSingleton.t)('Failed at stopping query. ')}'${query.id}'`)));


  };
}

function setDatabases(databases) {
  return { type: SET_DATABASES, databases };
}

function migrateTable(table, queryEditorId, dispatch) {
  return SupersetClient/* default.post */.Z.post({
    endpoint: encodeURI('/tableschemaview/'),
    postPayload: { table: { ...table, queryEditorId } } }).

  then(({ json }) => {
    const newTable = {
      ...table,
      id: json.id,
      queryEditorId };

    return dispatch({ type: MIGRATE_TABLE, oldTable: table, newTable });
  }).
  catch(() =>
  dispatch(
  addWarningToast(
  (0,TranslatorSingleton.t)(
  'Unable to migrate table schema state to backend. Superset will retry ' +
  'later. Please contact your administrator if this problem persists.'))));




}

function migrateQuery(queryId, queryEditorId, dispatch) {
  return SupersetClient/* default.post */.Z.post({
    endpoint: encodeURI(`/tabstateview/${queryEditorId}/migrate_query`),
    postPayload: { queryId } }).

  then(() => dispatch({ type: MIGRATE_QUERY, queryId, queryEditorId })).
  catch(() =>
  dispatch(
  addWarningToast(
  (0,TranslatorSingleton.t)(
  'Unable to migrate query state to backend. Superset will retry later. ' +
  'Please contact your administrator if this problem persists.'))));




}

function migrateQueryEditorFromLocalStorage(
queryEditor,
tables,
queries)
{
  return function (dispatch) {
    return SupersetClient/* default.post */.Z.post({
      endpoint: '/tabstateview/',
      postPayload: { queryEditor } }).

    then(({ json }) => {
      const newQueryEditor = {
        ...queryEditor,
        id: json.id.toString() };

      dispatch({
        type: MIGRATE_QUERY_EDITOR,
        oldQueryEditor: queryEditor,
        newQueryEditor });

      dispatch({
        type: MIGRATE_TAB_HISTORY,
        oldId: queryEditor.id,
        newId: newQueryEditor.id });

      return Promise.all([
      ...tables.map((table) =>
      migrateTable(table, newQueryEditor.id, dispatch)),

      ...queries.map((query) =>
      migrateQuery(query.id, newQueryEditor.id, dispatch))]);


    }).
    catch(() =>
    dispatch(
    addWarningToast(
    (0,TranslatorSingleton.t)(
    'Unable to migrate query editor state to backend. Superset will retry ' +
    'later. Please contact your administrator if this problem persists.'))));




  };
}

function addQueryEditor(queryEditor) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.post */.Z.post({
      endpoint: '/tabstateview/',
      postPayload: { queryEditor } }) :

    Promise.resolve({ json: { id: shortid_default().generate() } });

    return sync.
    then(({ json }) => {
      const newQueryEditor = {
        ...queryEditor,
        id: json.id.toString() };

      return dispatch({
        type: ADD_QUERY_EDITOR,
        queryEditor: newQueryEditor });

    }).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'Unable to add a new tab to the backend. Please contact your administrator.'))));




  };
}

function cloneQueryToNewTab(query, autorun) {
  return function (dispatch, getState) {
    const state = getState();
    const { queryEditors, tabHistory } = state.sqlLab;
    const sourceQueryEditor = queryEditors.find(
    (qe) => qe.id === tabHistory[tabHistory.length - 1]);

    const queryEditor = {
      title: (0,TranslatorSingleton.t)('Copy of %s', sourceQueryEditor.title),
      dbId: query.dbId ? query.dbId : null,
      schema: query.schema ? query.schema : null,
      autorun,
      sql: query.sql,
      queryLimit: sourceQueryEditor.queryLimit,
      maxRow: sourceQueryEditor.maxRow,
      templateParams: sourceQueryEditor.templateParams };

    return dispatch(addQueryEditor(queryEditor));
  };
}

function setActiveQueryEditor(queryEditor) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.post */.Z.post({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}/activate`) }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: SET_ACTIVE_QUERY_EDITOR, queryEditor })).
    catch((response) => {
      if (response.status !== 404) {
        return dispatch(
        addDangerToast(
        (0,TranslatorSingleton.t)(
        'An error occurred while setting the active tab. Please contact ' +
        'your administrator.')));



      }
      return dispatch({ type: REMOVE_QUERY_EDITOR, queryEditor });
    });
  };
}

function loadQueryEditor(queryEditor) {
  return { type: LOAD_QUERY_EDITOR, queryEditor };
}

function setTables(tableSchemas) {
  const tables = tableSchemas.
  filter((tableSchema) => tableSchema.description !== null).
  map((tableSchema) => {
    const {
      columns,
      selectStar,
      primaryKey,
      foreignKeys,
      indexes,
      dataPreviewQueryId } =
    tableSchema.description;
    return {
      dbId: tableSchema.database_id,
      queryEditorId: tableSchema.tab_state_id.toString(),
      schema: tableSchema.schema,
      name: tableSchema.table,
      expanded: tableSchema.expanded,
      id: tableSchema.id,
      dataPreviewQueryId,
      columns,
      selectStar,
      primaryKey,
      foreignKeys,
      indexes,
      isMetadataLoading: false,
      isExtraMetadataLoading: false };

  });
  return { type: SET_TABLES, tables };
}

function switchQueryEditor(queryEditor, displayLimit) {
  return function (dispatch) {
    if (
    (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) &&
    !queryEditor.loaded)
    {
      SupersetClient/* default.get */.Z.get({
        endpoint: encodeURI(`/tabstateview/${queryEditor.id}`) }).

      then(({ json }) => {
        const loadedQueryEditor = {
          id: json.id.toString(),
          loaded: true,
          title: json.label,
          sql: json.sql,
          selectedText: null,
          latestQueryId: json.latest_query ? json.latest_query.id : null,
          autorun: json.autorun,
          dbId: json.database_id,
          templateParams: json.template_params,
          schema: json.schema,
          queryLimit: json.query_limit,
          validationResult: {
            id: null,
            errors: [],
            completed: false },

          hideLeftBar: json.hide_left_bar };

        dispatch(loadQueryEditor(loadedQueryEditor));
        dispatch(setTables(json.table_schemas || []));
        dispatch(setActiveQueryEditor(loadedQueryEditor));
        if (json.latest_query && json.latest_query.resultsKey) {
          dispatch(fetchQueryResults(json.latest_query, displayLimit));
        }
      }).
      catch((response) => {
        if (response.status !== 404) {
          return dispatch(
          addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching tab state')));

        }
        return dispatch({ type: REMOVE_QUERY_EDITOR, queryEditor });
      });
    } else {
      dispatch(setActiveQueryEditor(queryEditor));
    }
  };
}

function setActiveSouthPaneTab(tabId) {
  return { type: SET_ACTIVE_SOUTHPANE_TAB, tabId };
}

function toggleLeftBar(queryEditor) {
  const hideLeftBar = !queryEditor.hideLeftBar;
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { hide_left_bar: hideLeftBar } }) :

    Promise.resolve();

    return sync.
    then(() =>
    dispatch({
      type: QUERY_EDITOR_TOGGLE_LEFT_BAR,
      queryEditor,
      hideLeftBar })).


    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while hiding the left bar. Please contact your administrator.'))));




  };
}

function removeQueryEditor(queryEditor) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`) }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: REMOVE_QUERY_EDITOR, queryEditor })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while removing tab. Please contact your administrator.'))));




  };
}

function removeQuery(query) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: encodeURI(
      `/tabstateview/${query.sqlEditorId}/query/${query.id}`) }) :


    Promise.resolve();

    return sync.
    then(() => dispatch({ type: REMOVE_QUERY, query })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while removing query. Please contact your administrator.'))));




  };
}

function queryEditorSetDb(queryEditor, dbId) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { database_id: dbId } }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: QUERY_EDITOR_SETDB, queryEditor, dbId })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while setting the tab database ID. Please contact your administrator.'))));




  };
}

function queryEditorSetSchema(queryEditor, schema) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { schema } }) :

    Promise.resolve();

    return sync.
    then(() =>
    dispatch({ type: QUERY_EDITOR_SET_SCHEMA, queryEditor, schema })).

    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while setting the tab schema. Please contact your administrator.'))));




  };
}

function queryEditorSetSchemaOptions(queryEditor, options) {
  return { type: QUERY_EDITOR_SET_SCHEMA_OPTIONS, queryEditor, options };
}

function queryEditorSetTableOptions(queryEditor, options) {
  return { type: QUERY_EDITOR_SET_TABLE_OPTIONS, queryEditor, options };
}

function queryEditorSetAutorun(queryEditor, autorun) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { autorun } }) :

    Promise.resolve();

    return sync.
    then(() =>
    dispatch({ type: QUERY_EDITOR_SET_AUTORUN, queryEditor, autorun })).

    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while setting the tab autorun. Please contact your administrator.'))));




  };
}

function queryEditorSetTitle(queryEditor, title) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { label: title } }) :

    Promise.resolve();

    return sync.
    then(() =>
    dispatch({ type: QUERY_EDITOR_SET_TITLE, queryEditor, title })).

    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while setting the tab title. Please contact your administrator.'))));




  };
}

function saveQuery(query) {
  return (dispatch) =>
  SupersetClient/* default.post */.Z.post({
    endpoint: '/savedqueryviewapi/api/create',
    postPayload: convertQueryToServer(query),
    stringify: false }).

  then((result) => {
    dispatch({
      type: QUERY_EDITOR_SAVED,
      query,
      result: convertQueryToClient(result.json.item) });

    dispatch(addSuccessToast((0,TranslatorSingleton.t)('Your query was saved')));
    dispatch(queryEditorSetTitle(query, query.title));
  }).
  catch(() =>
  dispatch(addDangerToast((0,TranslatorSingleton.t)('Your query could not be saved'))));

}

function updateSavedQuery(query) {
  return (dispatch) =>
  SupersetClient/* default.put */.Z.put({
    endpoint: `/savedqueryviewapi/api/update/${query.remoteId}`,
    postPayload: convertQueryToServer(query),
    stringify: false }).

  then(() => {
    dispatch(addSuccessToast((0,TranslatorSingleton.t)('Your query was updated')));
    dispatch(queryEditorSetTitle(query, query.title));
  }).
  catch(() =>
  dispatch(addDangerToast((0,TranslatorSingleton.t)('Your query could not be updated')))).

  then(() => dispatch(updateQueryEditor(query)));
}

function queryEditorSetSql(queryEditor, sql) {
  return function (dispatch) {
    // saved query and set tab state use this action
    dispatch({ type: QUERY_EDITOR_SET_SQL, queryEditor, sql });
    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE)) {
      return SupersetClient/* default.put */.Z.put({
        endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
        postPayload: { sql, latest_query_id: queryEditor.latestQueryId } }).
      catch(() =>
      dispatch(
      addDangerToast(
      (0,TranslatorSingleton.t)(
      'An error occurred while storing your query in the backend. To ' +
      'avoid losing your changes, please save your query using the ' +
      '"Save Query" button.'))));




    }
    return Promise.resolve();
  };
}

function queryEditorSetQueryLimit(queryEditor, queryLimit) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { query_limit: queryLimit } }) :

    Promise.resolve();

    return sync.
    then(() =>
    dispatch({
      type: QUERY_EDITOR_SET_QUERY_LIMIT,
      queryEditor,
      queryLimit })).


    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while setting the tab title. Please contact your administrator.'))));




  };
}

function queryEditorSetTemplateParams(queryEditor, templateParams) {
  return function (dispatch) {
    dispatch({
      type: QUERY_EDITOR_SET_TEMPLATE_PARAMS,
      queryEditor,
      templateParams });

    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.put */.Z.put({
      endpoint: encodeURI(`/tabstateview/${queryEditor.id}`),
      postPayload: { template_params: templateParams } }) :

    Promise.resolve();

    return sync.catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while setting the tab template parameters. ' +
    'Please contact your administrator.'))));




  };
}

function queryEditorSetSelectedText(queryEditor, sql) {
  return { type: QUERY_EDITOR_SET_SELECTED_TEXT, queryEditor, sql };
}

function mergeTable(table, query) {
  return { type: MERGE_TABLE, table, query };
}

function getTableMetadata(table, query, dispatch) {
  return SupersetClient/* default.get */.Z.get({
    endpoint: encodeURI(
    `/api/v1/database/${query.dbId}/table/${encodeURIComponent(
    table.name)
    }/${encodeURIComponent(table.schema)}/`) }).


  then(({ json }) => {
    const dataPreviewQuery = {
      id: shortid_default().generate(),
      dbId: query.dbId,
      sql: json.selectStar,
      tableName: table.name,
      sqlEditorId: null,
      tab: '',
      runAsync: false,
      ctas: false,
      isDataPreview: true };

    const newTable = {
      ...table,
      ...json,
      expanded: true,
      isMetadataLoading: false,
      dataPreviewQueryId: dataPreviewQuery.id };

    Promise.all([
    dispatch(mergeTable(newTable, dataPreviewQuery)), // Merge table to tables in state
    dispatch(runQuery(dataPreviewQuery)) // Run query to get preview data for table
    ]);
    return newTable;
  }).
  catch(() =>
  Promise.all([
  dispatch(
  mergeTable({
    ...table,
    isMetadataLoading: false })),


  dispatch(
  addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching table metadata')))]));



}

function getTableExtendedMetadata(table, query, dispatch) {
  return SupersetClient/* default.get */.Z.get({
    endpoint: encodeURI(
    `/superset/extra_table_metadata/${query.dbId}/` +
    `${encodeURIComponent(table.name)}/${encodeURIComponent(
    table.schema)
    }/`) }).


  then(({ json }) => {
    dispatch(
    mergeTable({ ...table, ...json, isExtraMetadataLoading: false }));

    return json;
  }).
  catch(() =>
  Promise.all([
  dispatch(mergeTable({ ...table, isExtraMetadataLoading: false })),
  dispatch(
  addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching table metadata')))]));



}

function addTable(query, tableName, schemaName) {
  return function (dispatch) {
    const table = {
      dbId: query.dbId,
      queryEditorId: query.id,
      schema: schemaName,
      name: tableName };

    dispatch(
    mergeTable({
      ...table,
      isMetadataLoading: true,
      isExtraMetadataLoading: true,
      expanded: true }));



    return Promise.all([
    getTableMetadata(table, query, dispatch),
    getTableExtendedMetadata(table, query, dispatch)]).
    then(([newTable, json]) => {
      const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
      SupersetClient/* default.post */.Z.post({
        endpoint: encodeURI('/tableschemaview/'),
        postPayload: { table: { ...newTable, ...json } } }) :

      Promise.resolve({ json: { id: shortid_default().generate() } });

      return sync.
      then(({ json: resultJson }) =>
      dispatch(mergeTable({ ...table, id: resultJson.id }))).

      catch(() =>
      dispatch(
      addDangerToast(
      (0,TranslatorSingleton.t)(
      'An error occurred while fetching table metadata. ' +
      'Please contact your administrator.'))));




    });
  };
}

function changeDataPreviewId(oldQueryId, newQuery) {
  return { type: CHANGE_DATA_PREVIEW_ID, oldQueryId, newQuery };
}

function reFetchQueryResults(query) {
  return function (dispatch) {
    const newQuery = {
      id: shortid_default().generate(),
      dbId: query.dbId,
      sql: query.sql,
      tableName: query.tableName,
      sqlEditorId: null,
      tab: '',
      runAsync: false,
      ctas: false,
      queryLimit: query.queryLimit,
      isDataPreview: query.isDataPreview };

    dispatch(runQuery(newQuery));
    dispatch(changeDataPreviewId(query.id, newQuery));
  };
}

function expandTable(table) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.post */.Z.post({
      endpoint: encodeURI(`/tableschemaview/${table.id}/expanded`),
      postPayload: { expanded: true } }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: EXPAND_TABLE, table })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while expanding the table schema. ' +
    'Please contact your administrator.'))));




  };
}

function collapseTable(table) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.post */.Z.post({
      endpoint: encodeURI(`/tableschemaview/${table.id}/expanded`),
      postPayload: { expanded: false } }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: COLLAPSE_TABLE, table })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while collapsing the table schema. ' +
    'Please contact your administrator.'))));




  };
}

function removeTable(table) {
  return function (dispatch) {
    const sync = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: encodeURI(`/tableschemaview/${table.id}`) }) :

    Promise.resolve();

    return sync.
    then(() => dispatch({ type: REMOVE_TABLE, table })).
    catch(() =>
    dispatch(
    addDangerToast(
    (0,TranslatorSingleton.t)(
    'An error occurred while removing the table schema. ' +
    'Please contact your administrator.'))));




  };
}

function refreshQueries(alteredQueries) {
  return { type: REFRESH_QUERIES, alteredQueries };
}

function setUserOffline(offline) {
  return { type: SET_USER_OFFLINE, offline };
}

function persistEditorHeight(queryEditor, northPercent, southPercent) {
  return {
    type: QUERY_EDITOR_PERSIST_HEIGHT,
    queryEditor,
    northPercent,
    southPercent };

}

function popStoredQuery(urlId) {
  return function (dispatch) {
    return SupersetClient/* default.get */.Z.get({ endpoint: `/kv/${urlId}` }).
    then(({ json }) =>
    dispatch(
    addQueryEditor({
      title: json.title ? json.title : (0,TranslatorSingleton.t)('Shared query'),
      dbId: json.dbId ? parseInt(json.dbId, 10) : null,
      schema: json.schema ? json.schema : null,
      autorun: json.autorun ? json.autorun : false,
      sql: json.sql ? json.sql : 'SELECT ...' }))).



    catch(() => dispatch(addDangerToast(ERR_MSG_CANT_LOAD_QUERY)));
  };
}
function popSavedQuery(saveQueryId) {
  return function (dispatch) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/savedqueryviewapi/api/get/${saveQueryId}` }).

    then(({ json }) => {
      const queryEditorProps = {
        ...convertQueryToClient(json.result),
        autorun: false };

      return dispatch(addQueryEditor(queryEditorProps));
    }).
    catch(() => dispatch(addDangerToast(ERR_MSG_CANT_LOAD_QUERY)));
  };
}
function popQuery(queryId) {
  return function (dispatch) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/query/${queryId}` }).

    then(({ json }) => {
      const queryData = json.result;
      const queryEditorProps = {
        dbId: queryData.database.id,
        schema: queryData.schema,
        sql: queryData.sql,
        title: `Copy of ${queryData.tab_name}`,
        autorun: false };

      return dispatch(addQueryEditor(queryEditorProps));
    }).
    catch(() => dispatch(addDangerToast(ERR_MSG_CANT_LOAD_QUERY)));
  };
}
function popDatasourceQuery(datasourceKey, sql) {
  return function (dispatch) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: `/superset/fetch_datasource_metadata?datasourceKey=${datasourceKey}` }).

    then(({ json }) =>
    dispatch(
    addQueryEditor({
      title: `Query ${json.name}`,
      dbId: json.database.id,
      schema: json.schema,
      autorun: sql !== undefined,
      sql: sql || json.select_star }))).



    catch(() =>
    dispatch(addDangerToast((0,TranslatorSingleton.t)("The datasource couldn't be loaded"))));

  };
}
function createDatasourceStarted() {
  return { type: CREATE_DATASOURCE_STARTED };
}
function createDatasourceSuccess(data) {
  const datasource = `${data.table_id}__table`;
  return { type: CREATE_DATASOURCE_SUCCESS, datasource };
}
function createDatasourceFailed(err) {
  return { type: CREATE_DATASOURCE_FAILED, err };
}

function createDatasource(vizOptions) {
  return (dispatch) => {
    dispatch(createDatasourceStarted());
    return SupersetClient/* default.post */.Z.post({
      endpoint: '/superset/sqllab_viz/',
      postPayload: { data: vizOptions } }).

    then(({ json }) => {
      dispatch(createDatasourceSuccess(json));

      return Promise.resolve(json);
    }).
    catch(() => {
      dispatch(
      createDatasourceFailed(
      (0,TranslatorSingleton.t)('An error occurred while creating the data source')));



      return Promise.reject();
    });
  };
}

function createCtasDatasource(vizOptions) {
  return (dispatch) => {
    dispatch(createDatasourceStarted());
    return SupersetClient/* default.post */.Z.post({
      endpoint: '/superset/get_or_create_table/',
      postPayload: { data: vizOptions } }).

    then(({ json }) => {
      dispatch(createDatasourceSuccess(json));

      return json;
    }).
    catch(() => {
      const errorMsg = (0,TranslatorSingleton.t)('An error occurred while creating the data source');
      dispatch(createDatasourceFailed(errorMsg));
      return Promise.reject(new Error(errorMsg));
    });
  };
}

function queryEditorSetFunctionNames(queryEditor, dbId) {
  return function (dispatch) {
    return SupersetClient/* default.get */.Z.get({
      endpoint: encodeURI(`/api/v1/database/${dbId}/function_names/`) }).

    then(({ json }) =>
    dispatch({
      type: QUERY_EDITOR_SET_FUNCTION_NAMES,
      queryEditor,
      functionNames: json.function_names })).


    catch(() =>
    dispatch(
    addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching function names.'))));


  };
}
// EXTERNAL MODULE: ./src/reduxUtils.ts
var reduxUtils = __webpack_require__(99543);
;// CONCATENATED MODULE: ./src/SqlLab/reducers/sqlLab.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







function sqlLabReducer(state = {}, action) {
  const actionHandlers = {
    [ADD_QUERY_EDITOR]() {
      const tabHistory = state.tabHistory.slice();
      tabHistory.push(action.queryEditor.id);
      const newState = { ...state, tabHistory };
      return (0,reduxUtils/* addToArr */._0)(newState, 'queryEditors', action.queryEditor);
    },
    [QUERY_EDITOR_SAVED]() {
      const { query, result } = action;
      const existing = state.queryEditors.find((qe) => qe.id === query.id);
      return (0,reduxUtils/* alterInArr */.gf)(
      state,
      'queryEditors',
      existing,
      {
        remoteId: result.remoteId,
        title: query.title },

      'id');

    },
    [UPDATE_QUERY_EDITOR]() {
      const id = action.alterations.remoteId;
      const existing = state.queryEditors.find((qe) => qe.remoteId === id);
      if (existing == null) return state;
      return (0,reduxUtils/* alterInArr */.gf)(
      state,
      'queryEditors',
      existing,
      action.alterations,
      'remoteId');

    },
    [CLONE_QUERY_TO_NEW_TAB]() {
      const progenitor = state.queryEditors.find(
      (qe) => qe.id === state.tabHistory[state.tabHistory.length - 1]);

      const qe = {
        remoteId: progenitor.remoteId,
        title: (0,TranslatorSingleton.t)('Copy of %s', progenitor.title),
        dbId: action.query.dbId ? action.query.dbId : null,
        schema: action.query.schema ? action.query.schema : null,
        autorun: true,
        sql: action.query.sql,
        queryLimit: action.query.queryLimit,
        maxRow: action.query.maxRow };

      return sqlLabReducer(state, addQueryEditor(qe));
    },
    [REMOVE_QUERY_EDITOR]() {
      let newState = (0,reduxUtils/* removeFromArr */.gP)(state, 'queryEditors', action.queryEditor);
      // List of remaining queryEditor ids
      const qeIds = newState.queryEditors.map((qe) => qe.id);

      const queries = {};
      Object.keys(state.queries).forEach((k) => {
        const query = state.queries[k];
        if (qeIds.indexOf(query.sqlEditorId) > -1) {
          queries[k] = query;
        }
      });

      let tabHistory = state.tabHistory.slice();
      tabHistory = tabHistory.filter((id) => qeIds.indexOf(id) > -1);

      // Remove associated table schemas
      const tables = state.tables.filter(
      (table) => table.queryEditorId !== action.queryEditor.id);


      newState = { ...newState, tabHistory, tables, queries };
      return newState;
    },
    [REMOVE_QUERY]() {
      const newQueries = { ...state.queries };
      delete newQueries[action.query.id];
      return { ...state, queries: newQueries };
    },
    [RESET_STATE]() {
      return { ...getInitialState() };
    },
    [MERGE_TABLE]() {
      const at = { ...action.table };
      let existingTable;
      state.tables.forEach((xt) => {
        if (
        xt.dbId === at.dbId &&
        xt.queryEditorId === at.queryEditorId &&
        xt.schema === at.schema &&
        xt.name === at.name)
        {
          existingTable = xt;
        }
      });
      if (existingTable) {
        if (action.query) {
          at.dataPreviewQueryId = action.query.id;
        }
        return (0,reduxUtils/* alterInArr */.gf)(state, 'tables', existingTable, at);
      }
      // for new table, associate Id of query for data preview
      at.dataPreviewQueryId = null;
      let newState = (0,reduxUtils/* addToArr */._0)(state, 'tables', at);
      if (action.query) {
        newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'tables', at, {
          dataPreviewQueryId: action.query.id });

      }
      return newState;
    },
    [EXPAND_TABLE]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'tables', action.table, { expanded: true });
    },
    [REMOVE_DATA_PREVIEW]() {
      const queries = { ...state.queries };
      delete queries[action.table.dataPreviewQueryId];
      const newState = (0,reduxUtils/* alterInArr */.gf)(state, 'tables', action.table, {
        dataPreviewQueryId: null });

      return { ...newState, queries };
    },
    [CHANGE_DATA_PREVIEW_ID]() {
      const queries = { ...state.queries };
      delete queries[action.oldQueryId];

      const newTables = [];
      state.tables.forEach((xt) => {
        if (xt.dataPreviewQueryId === action.oldQueryId) {
          newTables.push({ ...xt, dataPreviewQueryId: action.newQuery.id });
        } else {
          newTables.push(xt);
        }
      });
      return {
        ...state,
        queries,
        tables: newTables,
        activeSouthPaneTab: action.newQuery.id };

    },
    [COLLAPSE_TABLE]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'tables', action.table, { expanded: false });
    },
    [REMOVE_TABLE]() {
      return (0,reduxUtils/* removeFromArr */.gP)(state, 'tables', action.table);
    },
    [START_QUERY_VALIDATION]() {
      let newState = { ...state };
      const sqlEditor = { id: action.query.sqlEditorId };
      newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        validationResult: {
          id: action.query.id,
          errors: [],
          completed: false } });


      return newState;
    },
    [QUERY_VALIDATION_RETURNED]() {
      // If the server is very slow about answering us, we might get validation
      // responses back out of order. This check confirms the response we're
      // handling corresponds to the most recently dispatched request.
      //
      // We don't care about any but the most recent because validations are
      // only valid for the SQL text they correspond to -- once the SQL has
      // changed, the old validation doesn't tell us anything useful anymore.
      const qe = (0,reduxUtils/* getFromArr */.p1)(state.queryEditors, action.query.sqlEditorId);
      if (qe.validationResult.id !== action.query.id) {
        return state;
      }
      // Otherwise, persist the results on the queryEditor state
      let newState = { ...state };
      const sqlEditor = { id: action.query.sqlEditorId };
      newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        validationResult: {
          id: action.query.id,
          errors: action.results,
          completed: true } });


      return newState;
    },
    [QUERY_VALIDATION_FAILED]() {
      // If the server is very slow about answering us, we might get validation
      // responses back out of order. This check confirms the response we're
      // handling corresponds to the most recently dispatched request.
      //
      // We don't care about any but the most recent because validations are
      // only valid for the SQL text they correspond to -- once the SQL has
      // changed, the old validation doesn't tell us anything useful anymore.
      const qe = (0,reduxUtils/* getFromArr */.p1)(state.queryEditors, action.query.sqlEditorId);
      if (qe.validationResult.id !== action.query.id) {
        return state;
      }
      // Otherwise, persist the results on the queryEditor state
      let newState = { ...state };
      const sqlEditor = { id: action.query.sqlEditorId };
      newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        validationResult: {
          id: action.query.id,
          errors: [
          {
            line_number: 1,
            start_column: 1,
            end_column: 1,
            message: `The server failed to validate your query.\n${action.message}` }],


          completed: true } });


      return newState;
    },
    [COST_ESTIMATE_STARTED]() {
      let newState = { ...state };
      const sqlEditor = { id: action.query.sqlEditorId };
      newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        queryCostEstimate: {
          completed: false,
          cost: null,
          error: null } });


      return newState;
    },
    [COST_ESTIMATE_RETURNED]() {
      let newState = { ...state };
      const sqlEditor = { id: action.query.sqlEditorId };
      newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        queryCostEstimate: {
          completed: true,
          cost: action.json,
          error: null } });


      return newState;
    },
    [COST_ESTIMATE_FAILED]() {
      let newState = { ...state };
      const sqlEditor = { id: action.query.sqlEditorId };
      newState = (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        queryCostEstimate: {
          completed: false,
          cost: null,
          error: action.error } });


      return newState;
    },
    [START_QUERY]() {
      let newState = { ...state };
      if (action.query.sqlEditorId) {
        const qe = (0,reduxUtils/* getFromArr */.p1)(state.queryEditors, action.query.sqlEditorId);
        if (qe.latestQueryId && state.queries[qe.latestQueryId]) {
          const newResults = {
            ...state.queries[qe.latestQueryId].results,
            data: [],
            query: null };

          const q = { ...state.queries[qe.latestQueryId], results: newResults };
          const queries = { ...state.queries, [q.id]: q };
          newState = { ...state, queries };
        }
      } else {
        newState.activeSouthPaneTab = action.query.id;
      }
      newState = (0,reduxUtils/* addToObject */.SJ)(newState, 'queries', action.query);
      const sqlEditor = { id: action.query.sqlEditorId };
      return (0,reduxUtils/* alterInArr */.gf)(newState, 'queryEditors', sqlEditor, {
        latestQueryId: action.query.id });

    },
    [STOP_QUERY]() {
      return (0,reduxUtils/* alterInObject */.wK)(state, 'queries', action.query, {
        state: 'stopped',
        results: [] });

    },
    [CLEAR_QUERY_RESULTS]() {
      const newResults = { ...action.query.results };
      newResults.data = [];
      return (0,reduxUtils/* alterInObject */.wK)(state, 'queries', action.query, {
        results: newResults,
        cached: true });

    },
    [REQUEST_QUERY_RESULTS]() {
      return (0,reduxUtils/* alterInObject */.wK)(state, 'queries', action.query, {
        state: 'fetching' });

    },
    [QUERY_SUCCESS]() {var _action$results, _action$results$data, _action$results2, _action$results2$quer, _action$results3, _action$results3$quer, _action$results4, _action$results4$quer;
      // prevent race condition were query succeeds shortly after being canceled
      if (action.query.state === 'stopped') {
        return state;
      }
      const alts = {
        endDttm: (0,dates/* now */.zO)(),
        progress: 100,
        results: action.results,
        rows: action == null ? void 0 : (_action$results = action.results) == null ? void 0 : (_action$results$data = _action$results.data) == null ? void 0 : _action$results$data.length,
        state: 'success',
        limitingFactor: action == null ? void 0 : (_action$results2 = action.results) == null ? void 0 : (_action$results2$quer = _action$results2.query) == null ? void 0 : _action$results2$quer.limitingFactor,
        tempSchema: action == null ? void 0 : (_action$results3 = action.results) == null ? void 0 : (_action$results3$quer = _action$results3.query) == null ? void 0 : _action$results3$quer.tempSchema,
        tempTable: action == null ? void 0 : (_action$results4 = action.results) == null ? void 0 : (_action$results4$quer = _action$results4.query) == null ? void 0 : _action$results4$quer.tempTable,
        errorMessage: null,
        cached: false };

      return (0,reduxUtils/* alterInObject */.wK)(state, 'queries', action.query, alts);
    },
    [QUERY_FAILED]() {
      if (action.query.state === 'stopped') {
        return state;
      }
      const alts = {
        state: 'failed',
        errors: action.errors,
        errorMessage: action.msg,
        endDttm: (0,dates/* now */.zO)(),
        link: action.link };

      return (0,reduxUtils/* alterInObject */.wK)(state, 'queries', action.query, alts);
    },
    [SET_ACTIVE_QUERY_EDITOR]() {
      const qeIds = state.queryEditors.map((qe) => qe.id);
      if (
      qeIds.indexOf(action.queryEditor.id) > -1 &&
      state.tabHistory[state.tabHistory.length - 1] !== action.queryEditor.id)
      {
        const tabHistory = state.tabHistory.slice();
        tabHistory.push(action.queryEditor.id);
        return { ...state, tabHistory };
      }
      return state;
    },
    [LOAD_QUERY_EDITOR]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        ...action.queryEditor });

    },
    [SET_TABLES]() {
      return (0,reduxUtils/* extendArr */.zd)(state, 'tables', action.tables);
    },
    [SET_ACTIVE_SOUTHPANE_TAB]() {
      return { ...state, activeSouthPaneTab: action.tabId };
    },
    [MIGRATE_QUERY_EDITOR]() {
      // remove migrated query editor from localStorage
      const { sqlLab } = JSON.parse(localStorage.getItem('redux'));
      sqlLab.queryEditors = sqlLab.queryEditors.filter(
      (qe) => qe.id !== action.oldQueryEditor.id);

      localStorage.setItem('redux', JSON.stringify({ sqlLab }));

      // replace localStorage query editor with the server backed one
      return (0,reduxUtils/* addToArr */._0)(
      (0,reduxUtils/* removeFromArr */.gP)(state, 'queryEditors', action.oldQueryEditor),
      'queryEditors',
      action.newQueryEditor);

    },
    [MIGRATE_TABLE]() {
      // remove migrated table from localStorage
      const { sqlLab } = JSON.parse(localStorage.getItem('redux'));
      sqlLab.tables = sqlLab.tables.filter(
      (table) => table.id !== action.oldTable.id);

      localStorage.setItem('redux', JSON.stringify({ sqlLab }));

      // replace localStorage table with the server backed one
      return (0,reduxUtils/* addToArr */._0)(
      (0,reduxUtils/* removeFromArr */.gP)(state, 'tables', action.oldTable),
      'tables',
      action.newTable);

    },
    [MIGRATE_TAB_HISTORY]() {
      // remove migrated tab from localStorage tabHistory
      const { sqlLab } = JSON.parse(localStorage.getItem('redux'));
      sqlLab.tabHistory = sqlLab.tabHistory.filter(
      (tabId) => tabId !== action.oldId);

      localStorage.setItem('redux', JSON.stringify({ sqlLab }));
      const tabHistory = state.tabHistory.filter(
      (tabId) => tabId !== action.oldId);

      tabHistory.push(action.newId);
      return { ...state, tabHistory };
    },
    [MIGRATE_QUERY]() {
      const query = {
        ...state.queries[action.queryId],
        // point query to migrated query editor
        sqlEditorId: action.queryEditorId };

      const queries = { ...state.queries, [query.id]: query };
      return { ...state, queries };
    },
    [QUERY_EDITOR_SETDB]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        dbId: action.dbId });

    },
    [QUERY_EDITOR_SET_FUNCTION_NAMES]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        functionNames: action.functionNames });

    },
    [QUERY_EDITOR_SET_SCHEMA]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        schema: action.schema });

    },
    [QUERY_EDITOR_SET_SCHEMA_OPTIONS]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        schemaOptions: action.options });

    },
    [QUERY_EDITOR_SET_TABLE_OPTIONS]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        tableOptions: action.options });

    },
    [QUERY_EDITOR_SET_TITLE]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        title: action.title });

    },
    [QUERY_EDITOR_SET_SQL]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        sql: action.sql });

    },
    [QUERY_EDITOR_SET_QUERY_LIMIT]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        queryLimit: action.queryLimit });

    },
    [QUERY_EDITOR_SET_TEMPLATE_PARAMS]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        templateParams: action.templateParams });

    },
    [QUERY_EDITOR_SET_SELECTED_TEXT]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        selectedText: action.sql });

    },
    [QUERY_EDITOR_SET_AUTORUN]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        autorun: action.autorun });

    },
    [QUERY_EDITOR_PERSIST_HEIGHT]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        northPercent: action.northPercent,
        southPercent: action.southPercent });

    },
    [QUERY_EDITOR_TOGGLE_LEFT_BAR]() {
      return (0,reduxUtils/* alterInArr */.gf)(state, 'queryEditors', action.queryEditor, {
        hideLeftBar: action.hideLeftBar });

    },
    [SET_DATABASES]() {
      const databases = {};
      action.databases.forEach((db) => {
        databases[db.id] = {
          ...db,
          extra_json: JSON.parse(db.extra || '') };

      });
      return { ...state, databases };
    },
    [REFRESH_QUERIES]() {
      let newQueries = { ...state.queries };
      // Fetch the updates to the queries present in the store.
      let change = false;
      let { queriesLastUpdate } = state;
      Object.entries(action.alteredQueries).forEach(([id, changedQuery]) => {
        if (
        !state.queries.hasOwnProperty(id) ||
        state.queries[id].state !== 'stopped' &&
        state.queries[id].state !== 'failed')
        {var _state$queries$id;
          if (changedQuery.changedOn > queriesLastUpdate) {
            queriesLastUpdate = changedQuery.changedOn;
          }
          const prevState = (_state$queries$id = state.queries[id]) == null ? void 0 : _state$queries$id.state;
          const currentState = changedQuery.state;
          newQueries[id] = {
            ...state.queries[id],
            ...changedQuery,
            // race condition:
            // because of async behavior, sql lab may still poll a couple of seconds
            // when it started fetching or finished rendering results
            state:
            currentState === 'success' &&
            ['fetching', 'success'].includes(prevState) ?
            prevState :
            currentState };

          change = true;
        }
      });
      if (!change) {
        newQueries = state.queries;
      }
      return { ...state, queries: newQueries, queriesLastUpdate };
    },
    [SET_USER_OFFLINE]() {
      return { ...state, offline: action.offline };
    },
    [CREATE_DATASOURCE_STARTED]() {
      return { ...state, isDatasourceLoading: true, errorMessage: null };
    },
    [CREATE_DATASOURCE_SUCCESS]() {
      return {
        ...state,
        isDatasourceLoading: false,
        errorMessage: null,
        datasource: action.datasource };

    },
    [CREATE_DATASOURCE_FAILED]() {
      return { ...state, isDatasourceLoading: false, errorMessage: action.err };
    } };

  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }
  return state;
}
;// CONCATENATED MODULE: ./src/SqlLab/reducers/localStorageUsage.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function localStorageUsageReducer(state = 0) {
  return state;
}
;// CONCATENATED MODULE: ./src/SqlLab/reducers/common.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function commonReducer(state = {}) {
  return state;
}
;// CONCATENATED MODULE: ./src/SqlLab/reducers/index.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






/* harmony default export */ const reducers = ((0,redux/* combineReducers */.UY)({
  sqlLab: sqlLabReducer,
  localStorageUsageInKilobytes: localStorageUsageReducer,
  messageToasts: messageToastsReducer,
  common: commonReducer }));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(23493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/interweave/module.js + 7 modules
var interweave_module = __webpack_require__(13423);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
;// CONCATENATED MODULE: ./src/components/MessageToasts/Toast.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






const ToastContainer = style/* styled.div */.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`;
const StyledIcon = (theme) => emotion_react_browser_esm.css`
  min-width: ${theme.gridUnit * 5}px;
  color: ${theme.colors.grayscale.base};
`;
function Toast({ toast, onCloseToast }) {
  const hideTimer = (0,react.useRef)();
  const [visible, setVisible] = (0,react.useState)(false);
  const showToast = () => {
    setVisible(true);
  };
  const handleClosePress = (0,react.useCallback)(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    // Wait for the transition
    setVisible(() => {
      setTimeout(() => {
        onCloseToast(toast.id);
      }, 150);
      return false;
    });
  }, [onCloseToast, toast.id]);
  (0,react.useEffect)(() => {
    setTimeout(showToast);
    if (toast.duration > 0) {
      hideTimer.current = setTimeout(handleClosePress, toast.duration);
    }
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, [handleClosePress, toast.duration]);
  let className = 'toast--success';
  let icon = (0,emotion_react_browser_esm.jsx)(Icons/* default.CircleCheckSolid */.Z.CircleCheckSolid, { css: (theme) => StyledIcon(theme) });
  if (toast.toastType === types/* ToastType.WARNING */.p.WARNING) {
    icon = (0,emotion_react_browser_esm.jsx)(Icons/* default.WarningSolid */.Z.WarningSolid, { css: StyledIcon });
    className = 'toast--warning';
  } else
  if (toast.toastType === types/* ToastType.DANGER */.p.DANGER) {
    icon = (0,emotion_react_browser_esm.jsx)(Icons/* default.ErrorSolid */.Z.ErrorSolid, { css: StyledIcon });
    className = 'toast--danger';
  } else
  if (toast.toastType === types/* ToastType.INFO */.p.INFO) {
    icon = (0,emotion_react_browser_esm.jsx)(Icons/* default.InfoSolid */.Z.InfoSolid, { css: StyledIcon });
    className = 'toast--info';
  }
  return (0,emotion_react_browser_esm.jsx)(ToastContainer, { className: classnames_default()('alert', 'toast', visible && 'toast--visible', className), role: "alert" },
  icon,
  (0,emotion_react_browser_esm.jsx)(interweave_module/* default */.ZP, { content: toast.text }),
  (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-close pull-right pointer", role: "button", tabIndex: 0, onClick: handleClosePress, "aria-label": "Close" }));

}
;// CONCATENATED MODULE: ./src/components/MessageToasts/ToastPresenter.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const StyledToastPresenter = style/* styled.div */.iK.div`
  max-width: 600px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({ theme }) => theme.zIndex.max};

  .toast {
    background: ${({ theme }) => theme.colors.grayscale.dark1};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({ theme }) => theme.colors.grayscale.dark2},
        ${({ theme }) => theme.opacity.mediumLight}
      );
    color: ${({ theme }) => theme.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({ theme }) => theme.transitionTiming}s,
      opacity ${({ theme }) => theme.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({ theme }) => theme.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
function ToastPresenter({ toasts, removeToast }) {
  return toasts.length > 0 && (0,emotion_react_browser_esm.jsx)(StyledToastPresenter, { id: "toast-presenter" },
  toasts.map((toast) => (0,emotion_react_browser_esm.jsx)(Toast, { key: toast.id, toast: toast, onCloseToast: removeToast })));

}
;// CONCATENATED MODULE: ./src/components/MessageToasts/ToastContainer.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






/* harmony default export */ const MessageToasts_ToastContainer = ((0,es/* connect */.$j)(
({ messageToasts: toasts }) => ({ toasts }),
(dispatch) => (0,redux/* bindActionCreators */.DE)({ removeToast: actions/* removeToast */.RS }, dispatch))(
ToastPresenter));
// EXTERNAL MODULE: ./src/SqlLab/constants.ts
var constants = __webpack_require__(44904);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(13013);
;// CONCATENATED MODULE: ./src/components/Dropdown/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const MenuDots = style/* styled.div */.iK.div`
  width: ${({ theme }) => theme.gridUnit * 0.75}px;
  height: ${({ theme }) => theme.gridUnit * 0.75}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.light1};

  font-weight: ${({ theme }) => theme.typography.weights.normal};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.base};

    &::before,
    &::after {
      background-color: ${({ theme }) => theme.colors.primary.base};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${({ theme }) => theme.gridUnit * 0.75}px;
    height: ${({ theme }) => theme.gridUnit * 0.75}px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.grayscale.light1};
  }

  &::before {
    top: ${({ theme }) => theme.gridUnit}px;
  }

  &::after {
    bottom: ${({ theme }) => theme.gridUnit}px;
  }
`;
const MenuDotsWrapper = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.gridUnit * 2}px;
  padding-left: ${({ theme }) => theme.gridUnit}px;
`;
const Dropdown = ({ overlay, ...rest }) => (0,emotion_react_browser_esm.jsx)(dropdown/* default */.Z, extends_default()({ overlay: overlay }, rest),
(0,emotion_react_browser_esm.jsx)(MenuDotsWrapper, null,
(0,emotion_react_browser_esm.jsx)(MenuDots, null)));
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./node_modules/urijs/src/URI.js
var URI = __webpack_require__(54998);
var URI_default = /*#__PURE__*/__webpack_require__.n(URI);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(54076);
// EXTERNAL MODULE: ./node_modules/react-transition-group/index.js
var react_transition_group = __webpack_require__(64317);
// EXTERNAL MODULE: ./node_modules/react-split/dist/react-split.es.js + 1 modules
var react_split_es = __webpack_require__(40323);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./node_modules/mousetrap/mousetrap.js
var mousetrap = __webpack_require__(42441);
var mousetrap_default = /*#__PURE__*/__webpack_require__.n(mousetrap);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/Label/index.tsx
var Label = __webpack_require__(37921);
;// CONCATENATED MODULE: ./src/components/Timer/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const TimerLabel = (0,style/* styled */.iK)(Label/* default */.Z)`
  text-align: left;
  width: 91px;
`;
function Timer({ endTime, isRunning, startTime, status = 'success' }) {
  const [clockStr, setClockStr] = (0,react.useState)('00:00:00.00');
  const timer = (0,react.useRef)();
  (0,react.useEffect)(() => {
    const stopTimer = () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = undefined;
      }
    };
    if (isRunning) {
      timer.current = setInterval(() => {
        if (startTime) {
          const endDttm = endTime || (0,dates/* now */.zO)();
          if (startTime < endDttm) {
            setClockStr((0,dates/* fDuration */.zQ)(startTime, endDttm));
          }
          if (!isRunning) {
            stopTimer();
          }
        }
      }, 30);
    }
    return stopTimer;
  }, [endTime, isRunning, startTime]);
  return (0,emotion_react_browser_esm.jsx)(TimerLabel, { type: status, role: "timer" },
  clockStr);

}
// EXTERNAL MODULE: ./src/components/Badge/index.tsx
var Badge = __webpack_require__(82607);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
// EXTERNAL MODULE: ./src/components/ModalTrigger/index.jsx
var ModalTrigger = __webpack_require__(68073);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
// EXTERNAL MODULE: ./src/constants.ts
var src_constants = __webpack_require__(27600);
;// CONCATENATED MODULE: ./src/SqlLab/components/TemplateParamsEditor/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









const StyledConfigEditor = (0,style/* styled */.iK)(AsyncAceEditor/* ConfigEditor */.Z5)`
  &.ace_editor {
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  }
`;
function TemplateParamsEditor({ code = '{}', language, onChange = () => {} }) {
  const [parsedJSON, setParsedJSON] = (0,react.useState)({});
  const [isValid, setIsValid] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    try {
      setParsedJSON(JSON.parse(code));
      setIsValid(true);
    }
    catch {
      setParsedJSON({});
      setIsValid(false);
    }
  }, [code]);
  const modalBody = (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)("p", null, "Assign a set of parameters as",

  (0,emotion_react_browser_esm.jsx)("code", null, "JSON"), "below (example:",

  (0,emotion_react_browser_esm.jsx)("code", null, '{"my_table": "foo"}'), "), and they become available in your SQL (example:",

  (0,emotion_react_browser_esm.jsx)("code", null, "SELECT * FROM ", '{{ my_table }}', " "), ") by using\xA0",
  (0,emotion_react_browser_esm.jsx)("a", { href: "https://superset.apache.org/sqllab.html#templating-with-jinja", target: "_blank", rel: "noopener noreferrer" }, "Jinja templating"),

  ' ', "syntax."),


  (0,emotion_react_browser_esm.jsx)(StyledConfigEditor, { keywords: [], mode: language, minLines: 25, maxLines: 50, onChange: debounce_default()(onChange, src_constants/* FAST_DEBOUNCE */.oP), width: "100%", editorProps: { $blockScrolling: true }, enableLiveAutocompletion: true, value: code }));

  const paramCount = parsedJSON ? Object.keys(parsedJSON).length : 0;
  return (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { modalTitle: (0,TranslatorSingleton.t)('Template parameters'), triggerNode: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "parameters-tooltip", placement: "top", title: (0,TranslatorSingleton.t)('Edit template parameters'), trigger: ['hover'] },
    (0,emotion_react_browser_esm.jsx)("div", { role: "button" },
    `${(0,TranslatorSingleton.t)('Parameters')} `,
    (0,emotion_react_browser_esm.jsx)(Badge/* default */.Z, { count: paramCount }),
    !isValid && (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { icon: "exclamation-triangle", bsStyle: "danger", tooltip: (0,TranslatorSingleton.t)('Invalid JSON'), label: "invalid-json" }))),

    modalBody: modalBody });
}
/* harmony default export */ const components_TemplateParamsEditor = (TemplateParamsEditor);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/components/Card/index.tsx
var Card = __webpack_require__(57011);
// EXTERNAL MODULE: ./src/components/ProgressBar/index.tsx
var ProgressBar = __webpack_require__(67135);
// EXTERNAL MODULE: ./src/components/TableView/index.ts
var TableView = __webpack_require__(76962);
;// CONCATENATED MODULE: ./src/components/ButtonGroup/index.tsx
function _EMOTION_STRINGIFIED_CSS_ERROR__() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _ref =  true ? { name: "1qbe4ct", styles: "& :nth-child(1):not(:nth-last-child(1)){border-top-right-radius:0;border-bottom-right-radius:0;border-right:0;margin-left:0;}& :not(:nth-child(1)):not(:nth-last-child(1)){border-radius:0;border-right:0;margin-left:0;}& :nth-last-child(1):not(:nth-child(1)){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0;}" } : 0;
function ButtonGroup(props) {
  const { className, children } = props;
  return (0,emotion_react_browser_esm.jsx)("div", { role: "group", className: className, css: _ref },

















  children);

}
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/api/v1/makeApi.js + 1 modules
var makeApi = __webpack_require__(85639);
// EXTERNAL MODULE: ./src/components/ErrorMessage/ErrorMessageWithStackTrace.tsx
var ErrorMessageWithStackTrace = __webpack_require__(72875);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
;// CONCATENATED MODULE: ./src/SqlLab/components/SaveDatasetModal/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






const Styles = style/* styled.div */.iK.div`
  .smd-body {
    margin: 0 8px;
  }
  .smd-input {
    margin-left: 45px;
    width: 401px;
  }
  .smd-autocomplete {
    margin-left: 8px;
    width: 401px;
  }
  .smd-radio {
    display: block;
    height: 30px;
    margin: 10px 0px;
    line-height: 30px;
  }
  .smd-overwrite-msg {
    margin: 7px;
  }
`;
// eslint-disable-next-line no-empty-pattern
const SaveDatasetModal = ({ visible, onOk, onHide, handleDatasetNameChange, handleSaveDatasetRadioBtnState, saveDatasetRadioBtnState, shouldOverwriteDataset, handleOverwriteCancel, handleOverwriteDataset, handleOverwriteDatasetOption, defaultCreateDatasetValue, disableSaveAndExploreBtn, handleSaveDatasetModalSearch, filterAutocompleteOption, userDatasetOptions, onChangeAutoComplete }) => (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { show: visible, title: "Save or Overwrite Dataset", onHide: onHide, footer: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  !shouldOverwriteDataset && (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { disabled: disableSaveAndExploreBtn, buttonStyle: "primary", onClick: onOk },
  (0,TranslatorSingleton.t)('Save & Explore')),

  shouldOverwriteDataset && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: handleOverwriteCancel }, "Back"),
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { className: "md", buttonStyle: "primary", onClick: handleOverwriteDataset, disabled: disableSaveAndExploreBtn },
  (0,TranslatorSingleton.t)('Overwrite & Explore')))) },



(0,emotion_react_browser_esm.jsx)(Styles, null,
!shouldOverwriteDataset && (0,emotion_react_browser_esm.jsx)("div", { className: "smd-body" },
(0,emotion_react_browser_esm.jsx)("div", { className: "smd-prompt" }, "Save this query as a virtual dataset to continue exploring"),


(0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { onChange: handleSaveDatasetRadioBtnState, value: saveDatasetRadioBtnState },
(0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { className: "smd-radio", value: 1 }, "Save as new",

(0,emotion_react_browser_esm.jsx)(components/* Input */.II, { className: "smd-input", defaultValue: defaultCreateDatasetValue, onChange: handleDatasetNameChange, disabled: saveDatasetRadioBtnState !== 1 })),

(0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { className: "smd-radio", value: 2 }, "Overwrite existing",

(0,emotion_react_browser_esm.jsx)(components/* AutoComplete */.Qc, { className: "smd-autocomplete", options: userDatasetOptions, onSelect: handleOverwriteDatasetOption, onSearch: handleSaveDatasetModalSearch, onChange: onChangeAutoComplete, placeholder: "Select or type dataset name", filterOption: filterAutocompleteOption, disabled: saveDatasetRadioBtnState !== 2 })))),



shouldOverwriteDataset && (0,emotion_react_browser_esm.jsx)("div", { className: "smd-overwrite-msg" }, "Are you sure you want to overwrite this dataset?")));
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./node_modules/react-json-tree/lib/index.js
var lib = __webpack_require__(80126);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/SortDirection.js
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};

/* harmony default export */ const Table_SortDirection = (SortDirection);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/SortIndicator.js





/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;

  var classNames = classnames_default()('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === Table_SortDirection.ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === Table_SortDirection.DESC
  });

  return react.createElement(
    'svg',
    { className: classNames, width: 18, height: 18, viewBox: '0 0 24 24' },
    sortDirection === Table_SortDirection.ASC ? react.createElement('path', { d: 'M7 14l5-5 5 5z' }) : react.createElement('path', { d: 'M7 10l5 5 5-5z' }),
    react.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
}

SortIndicator.propTypes =  false ? 0 : {};
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(85105);
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(99663);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(46058);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(49135);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(93196);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync = function (_React$PureComponent) {
  (0,inherits["default"])(ScrollSync, _React$PureComponent);

  function ScrollSync(props, context) {
    (0,classCallCheck["default"])(this, ScrollSync);

    var _this = (0,possibleConstructorReturn["default"])(this, (ScrollSync.__proto__ || get_prototype_of_default()(ScrollSync)).call(this, props, context));

    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  (0,createClass["default"])(ScrollSync, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          clientWidth = _state.clientWidth,
          scrollHeight = _state.scrollHeight,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop,
          scrollWidth = _state.scrollWidth;


      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;

      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);

  return ScrollSync;
}(react.PureComponent);

/* harmony default export */ const ScrollSync_ScrollSync = (ScrollSync);
ScrollSync.propTypes =  false ? 0 : {};
// EXTERNAL MODULE: ./node_modules/react-virtualized/dist/es/Grid/Grid.js + 10 modules
var Grid = __webpack_require__(75621);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var babel_runtime_helpers_extends = __webpack_require__(88239);
// EXTERNAL MODULE: ./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js
var accessibilityOverscanIndicesGetter = __webpack_require__(94396);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js




/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;

  var a11yProps = {};

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return react.createElement(
    'div',
    (0,babel_runtime_helpers_extends["default"])({}, a11yProps, {
      className: className,
      key: key,
      role: 'row',
      style: style }),
    columns
  );
}
defaultRowRenderer.propTypes =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js



function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;

  return react.createElement(
    'div',
    { className: className, role: 'row', style: style },
    columns
  );
}
defaultHeaderRowRenderer.propTypes =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/Table.js




















/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table = function (_React$PureComponent) {
  (0,inherits["default"])(Table, _React$PureComponent);

  function Table(props) {
    (0,classCallCheck["default"])(this, Table);

    var _this = (0,possibleConstructorReturn["default"])(this, (Table.__proto__ || get_prototype_of_default()(Table)).call(this, props));

    _this.state = {
      scrollbarWidth: 0
    };

    _this._createColumn = _this._createColumn.bind(_this);
    _this._createRow = _this._createRow.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  (0,createClass["default"])(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _Grid$getOffsetForCel.scrollTop;

        return scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === undefined ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === undefined ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeader = _props.disableHeader,
          gridClassName = _props.gridClassName,
          gridStyle = _props.gridStyle,
          headerHeight = _props.headerHeight,
          headerRowRenderer = _props.headerRowRenderer,
          height = _props.height,
          id = _props.id,
          noRowsRenderer = _props.noRowsRenderer,
          rowClassName = _props.rowClassName,
          rowStyle = _props.rowStyle,
          scrollToIndex = _props.scrollToIndex,
          style = _props.style,
          width = _props.width;
      var scrollbarWidth = this.state.scrollbarWidth;


      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      react.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = (0,babel_runtime_helpers_extends["default"])({}, flexStyles, {
          overflow: 'hidden'
        });
      });

      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return react.createElement(
        'div',
        {
          className: classnames_default()('ReactVirtualized__Table', className),
          id: id,
          role: 'grid',
          style: style },
        !disableHeader && headerRowRenderer({
          className: classnames_default()('ReactVirtualized__Table__headerRow', rowClass),
          columns: this._getHeaderColumns(),
          style: (0,babel_runtime_helpers_extends["default"])({}, rowStyleObject, {
            height: headerHeight,
            overflow: 'hidden',
            paddingRight: scrollbarWidth,
            width: width
          })
        }),
        react.createElement(Grid/* default */.Z, (0,babel_runtime_helpers_extends["default"])({}, this.props, {
          autoContainerWidth: true,
          className: classnames_default()('ReactVirtualized__Table__Grid', gridClassName),
          cellRenderer: this._createRow,
          columnWidth: width,
          columnCount: 1,
          height: availableRowsHeight,
          id: undefined,
          noContentRenderer: noRowsRenderer,
          onScroll: this._onScroll,
          onSectionRendered: this._onSectionRendered,
          ref: this._setRef,
          role: 'rowgroup',
          scrollbarWidth: scrollbarWidth,
          scrollToRow: scrollToIndex,
          style: (0,babel_runtime_helpers_extends["default"])({}, gridStyle, {
            overflowX: 'hidden'
          })
        }))
      );
    }
  }, {
    key: '_createColumn',
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;


      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var style = this._cachedColumnStyles[columnIndex];

      var title = typeof renderedCell === 'string' ? renderedCell : null;

      // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942
      return react.createElement(
        'div',
        {
          'aria-describedby': id,
          className: classnames_default()('ReactVirtualized__Table__rowColumn', className),
          key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
          role: 'gridcell',
          style: style,
          title: title },
        renderedCell
      );
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _props2 = this.props,
          headerClassName = _props2.headerClassName,
          headerStyle = _props2.headerStyle,
          onHeaderClick = _props2.onHeaderClick,
          sort = _props2.sort,
          sortBy = _props2.sortBy,
          sortDirection = _props2.sortDirection;
      var _column$props2 = column.props,
          columnData = _column$props2.columnData,
          dataKey = _column$props2.dataKey,
          defaultSortDirection = _column$props2.defaultSortDirection,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label;

      var sortEnabled = !disableSort && sort;

      var classNames = classnames_default()('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, (0,babel_runtime_helpers_extends["default"])({}, headerStyle, column.props.headerStyle));

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var headerOnClick = void 0,
          headerOnKeyDown = void 0,
          headerTabIndex = void 0,
          headerAriaSort = void 0,
          headerAriaLabel = void 0;

      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey;

        // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.
        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === Table_SortDirection.DESC ? Table_SortDirection.ASC : Table_SortDirection.DESC;

        var onClick = function onClick(event) {
          sortEnabled && sort({
            defaultSortDirection: defaultSortDirection,
            event: event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey, event: event });
        };

        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };

        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }

      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === Table_SortDirection.ASC ? 'ascending' : 'descending';
      }

      // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942
      return react.createElement(
        'div',
        {
          'aria-label': headerAriaLabel,
          'aria-sort': headerAriaSort,
          className: classNames,
          id: id,
          key: 'Header-Col' + index,
          onClick: headerOnClick,
          onKeyDown: headerOnKeyDown,
          role: 'columnheader',
          style: style,
          tabIndex: headerTabIndex },
        renderedHeader
      );
    }
  }, {
    key: '_createRow',
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _props3 = this.props,
          children = _props3.children,
          onRowClick = _props3.onRowClick,
          onRowDoubleClick = _props3.onRowDoubleClick,
          onRowRightClick = _props3.onRowRightClick,
          onRowMouseOver = _props3.onRowMouseOver,
          onRowMouseOut = _props3.onRowMouseOut,
          rowClassName = _props3.rowClassName,
          rowGetter = _props3.rowGetter,
          rowRenderer = _props3.rowRenderer,
          rowStyle = _props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;


      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: index }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: index }) : rowStyle;
      var rowData = rowGetter({ index: index });

      var columns = react.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });

      var className = classnames_default()('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = (0,babel_runtime_helpers_extends["default"])({}, style, rowStyleObject, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      });

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }

    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: '_getFlexStyleForColumn',
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

      var style = (0,babel_runtime_helpers_extends["default"])({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: '_getHeaderColumns',
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _props4 = this.props,
          children = _props4.children,
          disableHeader = _props4.disableHeader;

      var items = disableHeader ? [] : react.Children.toArray(children);

      return items.map(function (column, index) {
        return _this4._createHeader({ column: column, index: index });
      });
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;


      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      if (this.Grid) {
        var _Grid = (0,react_dom.findDOMNode)(this.Grid);
        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        var scrollbarWidth = offsetWidth - clientWidth;

        this.setState({ scrollbarWidth: scrollbarWidth });
      }
    }
  }]);

  return Table;
}(react.PureComponent);

Table.defaultProps = {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: accessibilityOverscanIndicesGetter/* default */.ZP,
  overscanRowCount: 10,
  rowRenderer: defaultRowRenderer,
  headerRowRenderer: defaultHeaderRowRenderer,
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
/* harmony default export */ const Table_Table = (Table);
Table.propTypes =  false ? 0 : {};

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js




/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;

  var showSortIndicator = sortBy === dataKey;
  var children = [react.createElement(
    'span',
    {
      className: 'ReactVirtualized__Table__headerTruncatedText',
      key: 'label',
      title: label },
    label
  )];

  if (showSortIndicator) {
    children.push(react.createElement(SortIndicator, { key: 'SortIndicator', sortDirection: sortDirection }));
  }

  return children;
}
defaultHeaderRenderer.propTypes =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js


/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js


/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/Column.js











/**
 * Describes the header and cell contents of a table column.
 */

var Column = function (_React$Component) {
  (0,inherits["default"])(Column, _React$Component);

  function Column() {
    (0,classCallCheck["default"])(this, Column);

    return (0,possibleConstructorReturn["default"])(this, (Column.__proto__ || get_prototype_of_default()(Column)).apply(this, arguments));
  }

  return Column;
}(react.Component);

Column.defaultProps = {
  cellDataGetter: defaultCellDataGetter,
  cellRenderer: defaultCellRenderer,
  defaultSortDirection: Table_SortDirection.ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: defaultHeaderRenderer,
  style: {}
};
/* harmony default export */ const Table_Column = (Column);
Column.propTypes =  false ? 0 : {};
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/getBBoxCeil.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const DEFAULT_DIMENSION = {
  height: 20,
  width: 100
};
function getBBoxCeil(node, defaultDimension = DEFAULT_DIMENSION) {
  const {
    width,
    height
  } = node.getBBox ? node.getBBox() : defaultDimension;
  return {
    height: Math.ceil(height),
    width: Math.ceil(width)
  };
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/LazyFactory.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
class LazyFactory {
  constructor(factoryFn) {
    this.activeNodes = new Map();
    this.factoryFn = void 0;
    this.factoryFn = factoryFn;
  }

  createInContainer(container = document.body) {
    if (this.activeNodes.has(container)) {
      const entry = this.activeNodes.get(container);
      entry.counter += 1;
      return entry.node;
    }

    const node = this.factoryFn();
    container.append(node);
    this.activeNodes.set(container, {
      counter: 1,
      node
    });
    return node;
  }

  removeFromContainer(container = document.body) {
    if (this.activeNodes.has(container)) {
      const entry = this.activeNodes.get(container);
      entry.counter -= 1;

      if (entry.counter === 0) {
        container.removeChild(entry.node);
        this.activeNodes.delete(container);
      }
    }
  }

}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/constants.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// eslint-disable-next-line import/prefer-default-export
const SVG_NS = 'http://www.w3.org/2000/svg';
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/createHiddenSvgNode.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function createHiddenSvgNode() {
  const svgNode = document.createElementNS(SVG_NS, 'svg');
  svgNode.style.position = 'absolute'; // so it won't disrupt page layout

  svgNode.style.top = '-100%';
  svgNode.style.left = '-100%';
  svgNode.style.width = '0'; // no dimensions

  svgNode.style.height = '0';
  svgNode.style.opacity = '0'; // not visible

  svgNode.style.pointerEvents = 'none'; // won't capture mouse events

  return svgNode;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/createTextNode.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function createTextNode() {
  return document.createElementNS(SVG_NS, 'text');
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/factories.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const hiddenSvgFactory = new LazyFactory(createHiddenSvgNode);
const textFactory = new LazyFactory(createTextNode);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/svg/updateTextNode.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const STYLE_FIELDS = ['font', 'fontWeight', 'fontStyle', 'fontSize', 'fontFamily', 'letterSpacing'];
function updateTextNode(node, {
  className,
  style = {},
  text
} = {}) {
  const textNode = node;

  if (textNode.textContent !== text) {
    textNode.textContent = typeof text === 'undefined' ? null : text;
  }

  if (textNode.getAttribute('class') !== className) {
    textNode.setAttribute('class', className ?? '');
  } // Clear style
  // Note: multi-word property names are hyphenated and not camel-cased.


  textNode.style.removeProperty('font');
  textNode.style.removeProperty('font-weight');
  textNode.style.removeProperty('font-style');
  textNode.style.removeProperty('font-size');
  textNode.style.removeProperty('font-family');
  textNode.style.removeProperty('letter-spacing'); // Apply new style
  // Note: the font field will auto-populate other font fields when applicable.

  STYLE_FIELDS.filter(field => typeof style[field] !== 'undefined' && style[field] !== null).forEach(field => {
    textNode.style[field] = `${style[field]}`;
  });
  return textNode;
}
;// CONCATENATED MODULE: ./node_modules/@superset-ui/core/esm/dimension/getMultipleTextDimensions.js
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/**
 * get dimensions of multiple texts with same style
 * @param input
 * @param defaultDimension
 */

function getMultipleTextDimensions(input, defaultDimension) {
  const {
    texts,
    className,
    style,
    container
  } = input;
  const cache = new Map(); // for empty string

  cache.set('', {
    height: 0,
    width: 0
  });
  let textNode;
  let svgNode;
  const dimensions = texts.map(text => {
    // Check if this string has been computed already
    if (cache.has(text)) {
      return cache.get(text);
    } // Lazy creation of text and svg nodes


    if (!textNode) {
      svgNode = hiddenSvgFactory.createInContainer(container);
      textNode = textFactory.createInContainer(svgNode);
    } // Update text and get dimension


    updateTextNode(textNode, {
      className,
      style,
      text
    });
    const dimension = getBBoxCeil(textNode, defaultDimension); // Store result to cache

    cache.set(text, dimension);
    return dimension;
  }); // Remove svg node, if any

  if (svgNode && textNode) {
    // The nodes are added to the DOM briefly only to make getBBox works.
    // (If not added to DOM getBBox will always return 0x0.)
    // After that the svg nodes are not needed.
    // We delay its removal in case there are subsequent calls to this function
    // that can reuse the svg nodes.
    // Experiments have shown that reusing existing nodes
    // instead of deleting and adding new ones can save lot of time.
    setTimeout(() => {
      textFactory.removeFromContainer(svgNode);
      hiddenSvgFactory.removeFromContainer(container);
    }, 500);
  }

  return dimensions;
}
// EXTERNAL MODULE: ./src/components/CopyToClipboard/index.jsx
var CopyToClipboard = __webpack_require__(13433);
;// CONCATENATED MODULE: ./src/components/FilterableTable/FilterableTable.tsx
function FilterableTable_EMOTION_STRINGIFIED_CSS_ERROR_() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









function safeJsonObjectParse(data) {
  // First perform a cheap proxy to avoid calling JSON.parse on data that is clearly not a
  // JSON object or array
  if (typeof data !== 'string' ||
  ['{', '['].indexOf(data.substring(0, 1)) === -1) {
    return null;
  }
  // We know `data` is a string starting with '{' or '[', so try to parse it as a valid object
  try {
    const jsonData = JSON.parse(data);
    if (jsonData && typeof jsonData === 'object') {
      return jsonData;
    }
    return null;
  }
  catch (_) {
    return null;
  }
}
const SCROLL_BAR_HEIGHT = 15;
const GRID_POSITION_ADJUSTMENT = 4;
const JSON_TREE_THEME = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633' };

// This regex handles all possible number formats in javascript, including ints, floats,
// exponential notation, NaN, and Infinity.
// See https://stackoverflow.com/a/30987109 for more details
const ONLY_NUMBER_REGEX = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))$/;
const StyledFilterableTable = style/* styled.div */.iK.div`
  height: 100%;
  overflow-x: auto;
  margin-top: ${({ theme }) => theme.gridUnit * 2}px;
  overflow-y: hidden;
`;
// when more than MAX_COLUMNS_FOR_TABLE are returned, switch from table to grid view
const MAX_COLUMNS_FOR_TABLE = 50;var FilterableTable_ref =  true ? { name: "4zleql", styles: "display:block" } : 0;var _ref2 =  true ? { name: "4zleql", styles: "display:block" } : 0;var _ref3 =  true ? { name: "6n1ert", styles: "width:inherit" } : 0;
class FilterableTable extends react.PureComponent {















  constructor(props) {
    super(props);this.list = void 0;this.complexColumns = void 0;this.widthsForColumnsByKey = void 0;this.totalTableWidth = void 0;this.totalTableHeight = void 0;this.container = void 0;this.


































































































































    parseNumberFromString = (value) => {
      if (typeof value === 'string') {
        if (ONLY_NUMBER_REGEX.test(value)) {
          return parseFloat(value);
        }
      }
      return value;
    };this.list = this.formatTableData(props.data);this.addJsonModal = this.addJsonModal.bind(this);this.getCellContent = this.getCellContent.bind(this);this.renderGridCell = this.renderGridCell.bind(this);this.renderGridCellHeader = this.renderGridCellHeader.bind(this);this.renderGrid = this.renderGrid.bind(this);this.renderTableCell = this.renderTableCell.bind(this);this.renderTableHeader = this.renderTableHeader.bind(this);this.sortResults = this.sortResults.bind(this);this.renderTable = this.renderTable.bind(this);this.rowClassName = this.rowClassName.bind(this);this.sort = this.sort.bind(this); // columns that have complex type and were expanded into sub columns
    this.complexColumns = props.orderedColumnKeys.reduce((obj, key) => ({ ...obj, [key]: props.expandedColumns.some((name) => name.startsWith(`${key}.`)) }), {});this.widthsForColumnsByKey = this.getWidthsForColumns();this.totalTableWidth = props.orderedColumnKeys.map((key) => this.widthsForColumnsByKey[key]).reduce((curr, next) => curr + next);this.totalTableHeight = props.height;this.state = { sortDirection: Table_SortDirection.ASC, fitted: false };this.container = /*#__PURE__*/react.createRef();}componentDidMount() {this.fitTableToWidthIfNeeded();}getDatum(list, index) {return list[index % list.length];}getWidthsForColumns() {const PADDING = 40; // accounts for cell padding and width of sorting icon
    const widthsByColumnKey = {};const cellContent = [].concat(...this.props.orderedColumnKeys.map((key) => {const cellContentList = this.list.map((data) => this.getCellContent({ cellData: data[key], columnKey: key }));cellContentList.push(key);return cellContentList;}));const colWidths = getMultipleTextDimensions({ className: 'cell-text-for-measuring', texts: cellContent }).map((dimension) => dimension.width);this.props.orderedColumnKeys.forEach((key, index) => {// we can't use Math.max(...colWidths.slice(...)) here since the number
      // of elements might be bigger than the number of allowed arguments in a
      // Javascript function
      widthsByColumnKey[key] = colWidths.slice(index * (this.list.length + 1), (index + 1) * (this.list.length + 1)).reduce((a, b) => Math.max(a, b)) + PADDING;});return widthsByColumnKey;}getCellContent({ cellData, columnKey }) {if (cellData === null) {return 'NULL';}const content = String(cellData);const firstCharacter = content.substring(0, 1);let truncated;if (firstCharacter === '[') {truncated = '[…]';} else if (firstCharacter === '{') {truncated = '{…}';} else {truncated = '';}return this.complexColumns[columnKey] ? truncated : content;}formatTableData(data) {return data.map((row) => {const newRow = {};Object.entries(row).forEach(([key, val]) => {if (['string', 'number'].indexOf(typeof val) >= 0) {newRow[key] = val;} else {newRow[key] = val === null ? null : json_bigint_default().stringify(val);}});return newRow;});}hasMatch(text, row) {const values = [];Object.keys(row).forEach((key) => {if (row.hasOwnProperty(key)) {const cellValue = row[key];if (typeof cellValue === 'string') {values.push(cellValue.toLowerCase());} else if (cellValue !== null && typeof cellValue.toString === 'function') {values.push(cellValue.toString());}}});const lowerCaseText = text.toLowerCase();return values.some((v) => v.includes(lowerCaseText));}rowClassName({ index }) {let className = '';if (this.props.striped) {className = index % 2 === 0 ? 'even-row' : 'odd-row';}return className;}sort({ sortBy, sortDirection }) {this.setState({ sortBy, sortDirection });}fitTableToWidthIfNeeded() {var _this$container$curre, _this$container$curre2;const containerWidth = (_this$container$curre = (_this$container$curre2 = this.container.current) == null ? void 0 : _this$container$curre2.clientWidth) != null ? _this$container$curre : 0;if (this.totalTableWidth < containerWidth) {// fit table width if content doesn't fill the width of the container
      this.totalTableWidth = containerWidth;}this.setState({ fitted: true });}addJsonModal(node, jsonObject, jsonString) {return (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { modalBody: (0,emotion_react_browser_esm.jsx)(lib/* default */.Z, { data: jsonObject, theme: JSON_TREE_THEME }), modalFooter: (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, null, (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, { shouldShowText: false, text: jsonString })), modalTitle: (0,TranslatorSingleton.t)('Cell content'), triggerNode: node });} // Parse any numbers from strings so they'll sort correctly
  sortResults(sortBy, descending) {return (a, b) => {const aValue = this.parseNumberFromString(a[sortBy]);const bValue = this.parseNumberFromString(b[sortBy]); // equal items sort equally
      if (aValue === bValue) {return 0;}
      // nulls sort after anything else
      if (aValue === null) {
        return 1;
      }
      if (bValue === null) {
        return -1;
      }
      if (descending) {
        return aValue < bValue ? 1 : -1;
      }
      return aValue < bValue ? -1 : 1;
    };
  }
  renderTableHeader({ dataKey, label, sortBy, sortDirection }) {
    const className = this.props.expandedColumns.indexOf(label) > -1 ?
    'header-style-disabled' :
    'header-style';
    return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "header-tooltip", title: label, placement: "topLeft", css: FilterableTable_ref },
    (0,emotion_react_browser_esm.jsx)("div", { className: className },
    label,
    sortBy === dataKey && (0,emotion_react_browser_esm.jsx)(SortIndicator, { sortDirection: sortDirection })));


  }
  renderGridCellHeader({ columnIndex, key, style }) {
    const label = this.props.orderedColumnKeys[columnIndex];
    const className = this.props.expandedColumns.indexOf(label) > -1 ?
    'header-style-disabled' :
    'header-style';
    return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { key: key, id: "header-tooltip", title: label, placement: "topLeft", css: _ref2 },
    (0,emotion_react_browser_esm.jsx)("div", { style: {
        ...style,
        top: typeof style.top === 'number' ?
        style.top - GRID_POSITION_ADJUSTMENT :
        style.top },
      className: `${className} grid-cell grid-header-cell` },
    (0,emotion_react_browser_esm.jsx)("div", null, label)));


  }
  renderGridCell({ columnIndex, key, rowIndex, style }) {
    const columnKey = this.props.orderedColumnKeys[columnIndex];
    const cellData = this.list[rowIndex][columnKey];
    const content = cellData === null ? (0,emotion_react_browser_esm.jsx)("i", { className: "text-muted" },
    this.getCellContent({ cellData, columnKey })) :
    this.getCellContent({ cellData, columnKey });
    const cellNode = (0,emotion_react_browser_esm.jsx)("div", { key: key, style: {
        ...style,
        top: typeof style.top === 'number' ?
        style.top - GRID_POSITION_ADJUSTMENT :
        style.top },
      className: `grid-cell ${this.rowClassName({ index: rowIndex })}` },
    (0,emotion_react_browser_esm.jsx)("div", { css: _ref3 }, content));

    const jsonObject = safeJsonObjectParse(cellData);
    if (jsonObject) {
      return this.addJsonModal(cellNode, jsonObject, cellData);
    }
    return cellNode;
  }
  renderGrid() {
    const { orderedColumnKeys, overscanColumnCount, overscanRowCount, rowHeight } = this.props;
    let { height } = this.props;
    let totalTableHeight = height;
    if (this.container.current &&
    this.totalTableWidth > this.container.current.clientWidth) {
      // exclude the height of the horizontal scroll bar from the height of the table
      // and the height of the table container if the content overflows
      height -= SCROLL_BAR_HEIGHT;
      totalTableHeight -= SCROLL_BAR_HEIGHT;
    }
    const getColumnWidth = ({ index }) => this.widthsForColumnsByKey[orderedColumnKeys[index]];
    // fix height of filterable table
    return (0,emotion_react_browser_esm.jsx)(StyledFilterableTable, null,
    (0,emotion_react_browser_esm.jsx)(ScrollSync_ScrollSync, null,
    ({ onScroll, scrollTop }) => (0,emotion_react_browser_esm.jsx)("div", { className: "filterable-table-container Table", ref: this.container },
    (0,emotion_react_browser_esm.jsx)("div", { className: "LeftColumn" },
    (0,emotion_react_browser_esm.jsx)(Grid/* default */.Z, { cellRenderer: this.renderGridCellHeader, columnCount: orderedColumnKeys.length, columnWidth: getColumnWidth, height: rowHeight, rowCount: 1, rowHeight: rowHeight, scrollTop: scrollTop, width: this.totalTableWidth })),

    (0,emotion_react_browser_esm.jsx)("div", { className: "RightColumn" },
    (0,emotion_react_browser_esm.jsx)(Grid/* default */.Z, { cellRenderer: this.renderGridCell, columnCount: orderedColumnKeys.length, columnWidth: getColumnWidth, height: totalTableHeight - rowHeight, onScroll: onScroll, overscanColumnCount: overscanColumnCount, overscanRowCount: overscanRowCount, rowCount: this.list.length, rowHeight: rowHeight, width: this.totalTableWidth })))));




  }
  renderTableCell({ cellData, columnKey }) {
    const cellNode = this.getCellContent({ cellData, columnKey });
    const jsonObject = safeJsonObjectParse(cellData);
    if (jsonObject) {
      return this.addJsonModal(cellNode, jsonObject, cellData);
    }
    return cellNode;
  }
  renderTable() {
    const { sortBy, sortDirection } = this.state;
    const { filterText, headerHeight, orderedColumnKeys, overscanRowCount, rowHeight } = this.props;
    let sortedAndFilteredList = this.list;
    // filter list
    if (filterText) {
      sortedAndFilteredList = this.list.filter((row) => this.hasMatch(filterText, row));
    }
    // sort list
    if (sortBy) {
      sortedAndFilteredList = sortedAndFilteredList.sort(this.sortResults(sortBy, sortDirection === Table_SortDirection.DESC));
    }
    let { height } = this.props;
    let totalTableHeight = height;
    if (this.container.current &&
    this.totalTableWidth > this.container.current.clientWidth) {
      // exclude the height of the horizontal scroll bar from the height of the table
      // and the height of the table container if the content overflows
      height -= SCROLL_BAR_HEIGHT;
      totalTableHeight -= SCROLL_BAR_HEIGHT;
    }
    const rowGetter = ({ index }) => this.getDatum(sortedAndFilteredList, index);
    return (0,emotion_react_browser_esm.jsx)(StyledFilterableTable, { className: "filterable-table-container", ref: this.container },
    this.state.fitted && (0,emotion_react_browser_esm.jsx)(Table_Table, { ref: "Table", headerHeight: headerHeight, height: totalTableHeight, overscanRowCount: overscanRowCount, rowClassName: this.rowClassName, rowHeight: rowHeight, rowGetter: rowGetter, rowCount: sortedAndFilteredList.length, sort: this.sort, sortBy: sortBy, sortDirection: sortDirection, width: this.totalTableWidth },
    orderedColumnKeys.map((columnKey) => (0,emotion_react_browser_esm.jsx)(Table_Column, { cellRenderer: ({ cellData }) => this.renderTableCell({ cellData, columnKey }), dataKey: columnKey, disableSort: false, headerRenderer: this.renderTableHeader, width: this.widthsForColumnsByKey[columnKey], label: columnKey, key: columnKey }))));


  }
  render() {
    if (this.props.orderedColumnKeys.length > MAX_COLUMNS_FOR_TABLE) {
      return this.renderGrid();
    }
    return this.renderTable();
  }}FilterableTable.defaultProps = { filterText: '', headerHeight: 32, overscanColumnCount: 10, overscanRowCount: 10, rowHeight: 32, striped: true, expandedColumns: [] };
// EXTERNAL MODULE: ./src/explore/exploreUtils/index.js
var exploreUtils = __webpack_require__(12515);
;// CONCATENATED MODULE: ./src/SqlLab/components/ExploreCtasResultsButton/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










const propTypes = {
  actions: (prop_types_default()).object.isRequired,
  table: (prop_types_default()).string.isRequired,
  schema: (prop_types_default()).string,
  dbId: (prop_types_default()).number.isRequired,
  errorMessage: (prop_types_default()).string,
  templateParams: (prop_types_default()).string };


class ExploreCtasResultsButton extends react.PureComponent {
  constructor(props) {
    super(props);
    this.visualize = this.visualize.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.visualize();
  }

  buildVizOptions() {
    return {
      datasourceName: this.props.table,
      schema: this.props.schema,
      dbId: this.props.dbId,
      templateParams: this.props.templateParams };

  }

  visualize() {
    this.props.actions.
    createCtasDatasource(this.buildVizOptions()).
    then((data) => {
      const formData = {
        datasource: `${data.table_id}__table`,
        metrics: ['count'],
        groupby: [],
        viz_type: 'table',
        since: '100 years ago',
        all_columns: [],
        row_limit: 1000 };

      this.props.actions.addInfoToast(
      (0,TranslatorSingleton.t)('Creating a data source and creating a new tab'));


      // open new window for data visualization
      (0,exploreUtils/* exploreChart */.AH)(formData);
    }).
    catch(() => {
      this.props.actions.addDangerToast(
      this.props.errorMessage || (0,TranslatorSingleton.t)('An error occurred'));

    });
  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        onClick: this.onClick,
        tooltip: (0,TranslatorSingleton.t)('Explore the result set in the data exploration view') },

      (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
        icon: "line-chart",
        placement: "top",
        label: "explore" }),
      ' ',
      (0,TranslatorSingleton.t)('Explore'))));



  }}

ExploreCtasResultsButton.propTypes = propTypes;

function mapStateToProps({ sqlLab, common }) {
  return {
    errorMessage: sqlLab.errorMessage,
    timeout: common.conf ? common.conf.SUPERSET_WEBSERVER_TIMEOUT : null };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(sqlLab_namespaceObject, dispatch) };

}

/* harmony default export */ const components_ExploreCtasResultsButton = ((0,es/* connect */.$j)(
mapStateToProps,
mapDispatchToProps)(
ExploreCtasResultsButton));
;// CONCATENATED MODULE: ./src/SqlLab/components/ExploreResultsButton/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */












const ExploreResultsButton_propTypes = {
  actions: (prop_types_default()).object.isRequired,
  query: (prop_types_default()).object,
  errorMessage: (prop_types_default()).string,
  timeout: (prop_types_default()).number,
  database: (prop_types_default()).object.isRequired,
  onClick: (prop_types_default()).func.isRequired };

const defaultProps = {
  query: {} };


class ExploreResultsButton extends react.PureComponent {
  constructor(props) {
    super(props);
    this.getInvalidColumns = this.getInvalidColumns.bind(this);
    this.renderInvalidColumnMessage = this.renderInvalidColumnMessage.bind(
    this);

  }

  getColumns() {
    const { props } = this;
    if (
    props.query &&
    props.query.results &&
    props.query.results.selected_columns)
    {
      return props.query.results.selected_columns;
    }
    return [];
  }

  getQueryDuration() {
    return moment_default().duration(this.props.query.endDttm - this.props.query.startDttm).
    asSeconds();
  }

  getInvalidColumns() {
    const re1 = /__\d+$/; // duplicate column name pattern
    const re2 = /^__timestamp/i; // reserved temporal column alias

    return this.props.query.results.selected_columns.
    map((col) => col.name).
    filter((col) => re1.test(col) || re2.test(col));
  }

  datasourceName() {
    const { query } = this.props;
    const uniqueId = shortid_default().generate();
    let datasourceName = uniqueId;
    if (query) {
      datasourceName = query.user ? `${query.user}-` : '';
      datasourceName += `${query.tab}-${uniqueId}`;
    }
    return datasourceName;
  }

  buildVizOptions() {
    const { schema, sql, dbId, templateParams } = this.props.query;
    return {
      dbId,
      schema,
      sql,
      templateParams,
      datasourceName: this.datasourceName(),
      columns: this.getColumns() };

  }

  renderTimeoutWarning() {
    return (
      (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, {
        type: "warning",
        message:
        (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,TranslatorSingleton.t)(
        'This query took %s seconds to run, ',
        Math.round(this.getQueryDuration())) +

        (0,TranslatorSingleton.t)(
        'and the explore view times out at %s seconds ',
        this.props.timeout) +

        (0,TranslatorSingleton.t)(
        'following this flow will most likely lead to your query timing out. ') +

        (0,TranslatorSingleton.t)(
        'We recommend your summarize your data further before following that flow. ') +

        (0,TranslatorSingleton.t)('If activated you can use the '),
        (0,emotion_react_browser_esm.jsx)("strong", null, "CREATE TABLE AS "),
        (0,TranslatorSingleton.t)(
        'feature to store a summarized data set that you can then explore.')) }));





  }

  renderInvalidColumnMessage() {
    const invalidColumns = this.getInvalidColumns();
    if (invalidColumns.length === 0) {
      return null;
    }
    return (
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,TranslatorSingleton.t)('Column name(s) '),
      (0,emotion_react_browser_esm.jsx)("code", null,
      (0,emotion_react_browser_esm.jsx)("strong", null, invalidColumns.join(', '), " ")),

      (0,TranslatorSingleton.t)(`cannot be used as a column name. The column name/alias "__timestamp"
          is reserved for the main temporal expression, and column aliases ending with
          double underscores followed by a numeric value (e.g. "my_col__1") are reserved
          for deduplicating duplicate column names. Please use aliases to rename the
          invalid column names.`)));


  }

  render() {
    const allowsSubquery =
    this.props.database && this.props.database.allows_subquery;
    return (
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        onClick: this.props.onClick,
        disabled: !allowsSubquery,
        tooltip: (0,TranslatorSingleton.t)('Explore the result set in the data exploration view') },

      (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, {
        icon: "line-chart",
        placement: "top",
        label: "explore" }),
      ' ',
      (0,TranslatorSingleton.t)('Explore'))));



  }}

ExploreResultsButton.propTypes = ExploreResultsButton_propTypes;
ExploreResultsButton.defaultProps = defaultProps;

function ExploreResultsButton_mapStateToProps({ sqlLab, common }) {
  return {
    errorMessage: sqlLab.errorMessage,
    timeout: common.conf ? common.conf.SUPERSET_WEBSERVER_TIMEOUT : null };

}

function ExploreResultsButton_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(sqlLab_namespaceObject, dispatch) };

}

/* harmony default export */ const components_ExploreResultsButton = ((0,es/* connect */.$j)(
ExploreResultsButton_mapStateToProps,
ExploreResultsButton_mapDispatchToProps)(
ExploreResultsButton));
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/light.js
var light = __webpack_require__(42110);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/languages/hljs/sql.js
var sql = __webpack_require__(33743);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/github.js
var github = __webpack_require__(120);
;// CONCATENATED MODULE: ./src/SqlLab/components/HighlightedSql/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






light/* default.registerLanguage */.Z.registerLanguage('sql', sql/* default */.Z);
const shrinkSql = (sql, maxLines, maxWidth) => {
  const ssql = sql || '';
  let lines = ssql.split('\n');
  if (lines.length >= maxLines) {
    lines = lines.slice(0, maxLines);
    lines.push('{...}');
  }
  return lines.
  map((line) => {
    if (line.length > maxWidth) {
      return `${line.slice(0, maxWidth)}{...}`;
    }
    return line;
  }).
  join('\n');
};
function TriggerNode({ shrink, sql, maxLines, maxWidth }) {
  return (0,emotion_react_browser_esm.jsx)(light/* default */.Z, { language: "sql", style: github/* default */.Z },
  shrink ? shrinkSql(sql, maxLines, maxWidth) : sql);

}
function HighlightSqlModal({ rawSql, sql }) {
  return (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Source SQL')),
  (0,emotion_react_browser_esm.jsx)(light/* default */.Z, { language: "sql", style: github/* default */.Z },
  sql),

  rawSql && rawSql !== sql && (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Executed SQL')),
  (0,emotion_react_browser_esm.jsx)(light/* default */.Z, { language: "sql", style: github/* default */.Z },
  rawSql)));



}
function HighlightedSql({ sql, rawSql, maxWidth = 50, maxLines = 5, shrink = false }) {
  return (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { modalTitle: (0,TranslatorSingleton.t)('SQL'), modalBody: (0,emotion_react_browser_esm.jsx)(HighlightSqlModal, { rawSql: rawSql, sql: sql }), triggerNode: (0,emotion_react_browser_esm.jsx)(TriggerNode, { shrink: shrink, sql: sql, maxLines: maxLines, maxWidth: maxWidth }) });
}
/* harmony default export */ const components_HighlightedSql = (HighlightedSql);
;// CONCATENATED MODULE: ./src/SqlLab/components/QueryStateLabel/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function QueryStateLabel({ query }) {
  return (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { className: "m-r-3", type: constants/* STATE_TYPE_MAP */.IY[query.state] },
  query.state);

}
;// CONCATENATED MODULE: ./src/SqlLab/components/ResultSet/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






















var DatasetRadioState;
(function (DatasetRadioState) {
  DatasetRadioState[DatasetRadioState["SAVE_NEW"] = 1] = "SAVE_NEW";
  DatasetRadioState[DatasetRadioState["OVERWRITE_DATASET"] = 2] = "OVERWRITE_DATASET";
})(DatasetRadioState || (DatasetRadioState = {}));
const EXPLORE_CHART_DEFAULT = {
  metrics: [],
  groupby: [],
  time_range: 'No filter',
  viz_type: 'table' };

var LIMITING_FACTOR;
(function (LIMITING_FACTOR) {
  LIMITING_FACTOR["QUERY"] = "QUERY";
  LIMITING_FACTOR["QUERY_AND_DROPDOWN"] = "QUERY_AND_DROPDOWN";
  LIMITING_FACTOR["DROPDOWN"] = "DROPDOWN";
  LIMITING_FACTOR["NOT_LIMITED"] = "NOT_LIMITED";
})(LIMITING_FACTOR || (LIMITING_FACTOR = {}));
const LOADING_STYLES = { position: 'relative', minHeight: 100 };
// Making text render line breaks/tabs as is as monospace,
// but wrapping text too so text doesn't overflow
const MonospaceDiv = style/* styled.div */.iK.div`
  font-family: ${({ theme }) => theme.typography.families.monospace};
  white-space: pre;
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;
const ReturnedRows = style/* styled.div */.iK.div`
  font-size: 13px;
  line-height: 24px;
  .limitMessage {
    color: ${({ theme }) => theme.colors.secondary.light1};
    margin-left: ${({ theme }) => theme.gridUnit * 2}px;
  }
`;
const ResultSetControls = style/* styled.div */.iK.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => 2 * theme.gridUnit}px 0;
`;
const ResultSetButtons = style/* styled.div */.iK.div`
  display: grid;
  grid-auto-flow: column;
  padding-right: ${({ theme }) => 2 * theme.gridUnit}px;
`;
const ResultSetErrorMessage = style/* styled.div */.iK.div`
  padding-top: ${({ theme }) => 4 * theme.gridUnit}px;
`;
const updateDataset = async (datasetId, sql, columns, owners, overrideColumns) => {
  const endpoint = `api/v1/dataset/${datasetId}?override_columns=${overrideColumns}`;
  const headers = { 'Content-Type': 'application/json' };
  const body = JSON.stringify({
    sql,
    columns,
    owners });

  const data = await SupersetClient/* default.put */.Z.put({
    endpoint,
    headers,
    body });

  return data.json.result;
};
class ResultSet extends react.PureComponent {








  constructor(props) {
    super(props);this.


















































    calculateAlertRefHeight = (alertElement) => {
      if (alertElement) {
        this.setState({ alertIsOpen: true });
      } else
      {
        this.setState({ alertIsOpen: false });
      }
    };this.
    getDefaultDatasetName = () => `${this.props.query.tab} ${moment_default()().format('MM/DD/YYYY HH:mm:ss')}`;this.
    handleOnChangeAutoComplete = () => {
      this.setState({ datasetToOverwrite: {} });
    };this.
    handleOverwriteDataset = async () => {
      const { sql, results } = this.props.query;
      const { datasetToOverwrite } = this.state;
      await updateDataset(datasetToOverwrite.datasetId, sql, results.selected_columns.map((d) => ({ column_name: d.name })), datasetToOverwrite.owners.map((o) => o.id), true);
      this.setState({
        showSaveDatasetModal: false,
        shouldOverwriteDataSet: false,
        datasetToOverwrite: {},
        newSaveDatasetName: this.getDefaultDatasetName() });

      (0,exploreUtils/* exploreChart */.AH)({
        ...EXPLORE_CHART_DEFAULT,
        datasource: `${datasetToOverwrite.datasetId}__table`,
        all_columns: results.selected_columns.map((d) => d.name) });

    };this.
    handleSaveInDataset = () => {var _this$props$query, _this$props$query$res;
      // if user wants to overwrite a dataset we need to prompt them
      if (this.state.saveDatasetRadioBtnState ===
      DatasetRadioState.OVERWRITE_DATASET) {
        this.setState({ shouldOverwriteDataSet: true });
        return;
      }
      const { schema, sql, dbId } = this.props.query;
      let { templateParams } = this.props.query;
      const selectedColumns = ((_this$props$query = this.props.query) == null ? void 0 : (_this$props$query$res = _this$props$query.results) == null ? void 0 : _this$props$query$res.selected_columns) || [];
      // The filters param is only used to test jinja templates.
      // Remove the special filters entry from the templateParams
      // before saving the dataset.
      if (templateParams) {
        const p = JSON.parse(templateParams);
        /* eslint-disable-next-line no-underscore-dangle */
        if (p._filters) {
          /* eslint-disable-next-line no-underscore-dangle */
          delete p._filters;
          templateParams = JSON.stringify(p);
        }
      }
      this.props.actions.
      createDatasource({
        schema,
        sql,
        dbId,
        templateParams,
        datasourceName: this.state.newSaveDatasetName,
        columns: selectedColumns }).

      then((data) => {
        (0,exploreUtils/* exploreChart */.AH)({
          datasource: `${data.table_id}__table`,
          metrics: [],
          groupby: [],
          time_range: 'No filter',
          viz_type: 'table',
          all_columns: selectedColumns.map((c) => c.name),
          row_limit: 1000 });

      }).
      catch(() => {
        this.props.actions.addDangerToast((0,TranslatorSingleton.t)('An error occurred saving dataset'));
      });
      this.setState({
        showSaveDatasetModal: false,
        newSaveDatasetName: this.getDefaultDatasetName() });

    };this.
    handleOverwriteDatasetOption = (_data, option) => {
      this.setState({ datasetToOverwrite: option });
    };this.
    handleDatasetNameChange = (e) => {
      // @ts-expect-error
      this.setState({ newSaveDatasetName: e.target.value });
    };this.
    handleHideSaveModal = () => {
      this.setState({
        showSaveDatasetModal: false,
        shouldOverwriteDataSet: false });

    };this.
    handleSaveDatasetRadioBtnState = (e) => {
      this.setState({ saveDatasetRadioBtnState: Number(e.target.value) });
    };this.
    handleOverwriteCancel = () => {
      this.setState({ shouldOverwriteDataSet: false, datasetToOverwrite: {} });
    };this.
    handleExploreBtnClick = () => {
      this.setState({
        showSaveDatasetModal: true });

    };this.
    getUserDatasets = async (searchText = '') => {
      // Making sure that autocomplete input has a value before rendering the dropdown
      // Transforming the userDatasetsOwned data for SaveModalComponent)
      const { userId } = this.props.user;
      if (userId) {
        const queryParams = rison_default().encode({
          filters: [
          {
            col: 'table_name',
            opr: 'ct',
            value: searchText },

          {
            col: 'owners',
            opr: 'rel_m_m',
            value: userId }],


          order_column: 'changed_on_delta_humanized',
          order_direction: 'desc' });

        const response = await (0,makeApi/* default */.Z)({
          method: 'GET',
          endpoint: '/api/v1/dataset' })(
        `q=${queryParams}`);
        return response.result.map((r) => ({
          value: r.table_name,
          datasetId: r.id,
          owners: r.owners }));

      }
      return null;
    };this.
    handleSaveDatasetModalSearch = async (searchText) => {
      const userDatasetsOwned = await this.getUserDatasets(searchText);
      this.setState({ userDatasetOptions: userDatasetsOwned });
    };this.
    handleFilterAutocompleteOption = (inputValue, option) => option.value.toLowerCase().includes(inputValue.toLowerCase());this.





































































    onAlertClose = () => {
      this.setState({ alertIsOpen: false });
    };this.state = { searchText: '', showExploreResultsButton: false, data: [], showSaveDatasetModal: false, newSaveDatasetName: this.getDefaultDatasetName(), saveDatasetRadioBtnState: DatasetRadioState.SAVE_NEW, shouldOverwriteDataSet: false, datasetToOverwrite: {}, saveModalAutocompleteValue: '', userDatasetOptions: [], alertIsOpen: false };this.changeSearch = this.changeSearch.bind(this);this.fetchResults = this.fetchResults.bind(this);this.popSelectStar = this.popSelectStar.bind(this);this.reFetchQueryResults = this.reFetchQueryResults.bind(this);this.toggleExploreResultsButton = this.toggleExploreResultsButton.bind(this);this.handleSaveInDataset = this.handleSaveInDataset.bind(this);this.handleHideSaveModal = this.handleHideSaveModal.bind(this);this.handleDatasetNameChange = this.handleDatasetNameChange.bind(this);this.handleSaveDatasetRadioBtnState = this.handleSaveDatasetRadioBtnState.bind(this);this.handleOverwriteCancel = this.handleOverwriteCancel.bind(this);this.handleOverwriteDataset = this.handleOverwriteDataset.bind(this);this.handleOverwriteDatasetOption = this.handleOverwriteDatasetOption.bind(this);this.handleSaveDatasetModalSearch = debounce_default()(this.handleSaveDatasetModalSearch.bind(this), 1000);this.handleFilterAutocompleteOption = this.handleFilterAutocompleteOption.bind(this);this.handleOnChangeAutoComplete = this.handleOnChangeAutoComplete.bind(this);this.handleExploreBtnClick = this.handleExploreBtnClick.bind(this);}async componentDidMount() {// only do this the first time the component is rendered/mounted
    this.reRunQueryIfSessionTimeoutErrorOnMount();const userDatasetsOwned = await this.getUserDatasets();this.setState({ userDatasetOptions: userDatasetsOwned });}UNSAFE_componentWillReceiveProps(nextProps) {// when new results comes in, save them locally and clear in store
    if (this.props.cache && !nextProps.query.cached && nextProps.query.results && nextProps.query.results.data && nextProps.query.results.data.length > 0) {this.setState({ data: nextProps.query.results.data }, () => this.clearQueryResults(nextProps.query));}if (nextProps.query.resultsKey && nextProps.query.resultsKey !== this.props.query.resultsKey) {this.fetchResults(nextProps.query);}}clearQueryResults(query) {this.props.actions.clearQueryResults(query);}popSelectStar(tempSchema, tempTable) {const qe = { id: shortid_default().generate(), title: tempTable, autorun: false, dbId: this.props.query.dbId, sql: `SELECT * FROM ${tempSchema ? `${tempSchema}.` : ''}${tempTable}` };this.props.actions.addQueryEditor(qe);}toggleExploreResultsButton() {this.setState((prevState) => ({ showExploreResultsButton: !prevState.showExploreResultsButton }));}changeSearch(event) {this.setState({ searchText: event.target.value });}fetchResults(query) {this.props.actions.fetchQueryResults(query, this.props.displayLimit);}reFetchQueryResults(query) {this.props.actions.reFetchQueryResults(query);}reRunQueryIfSessionTimeoutErrorOnMount() {const { query } = this.props;if (query.errorMessage && query.errorMessage.indexOf('session timed out') > 0) {this.props.actions.reRunQuery(query);}}renderControls() {if (this.props.search || this.props.visualize || this.props.csv) {let { data } = this.props.query.results;if (this.props.cache && this.props.query.cached) {({ data } = this.state);}const { columns } = this.props.query.results; // Added compute logic to stop user from being able to Save & Explore
      const { saveDatasetRadioBtnState, newSaveDatasetName, datasetToOverwrite, saveModalAutocompleteValue, shouldOverwriteDataSet, userDatasetOptions, showSaveDatasetModal } = this.state;const disableSaveAndExploreBtn = saveDatasetRadioBtnState === DatasetRadioState.SAVE_NEW && newSaveDatasetName.length === 0 || saveDatasetRadioBtnState === DatasetRadioState.OVERWRITE_DATASET && Object.keys(datasetToOverwrite).length === 0 && saveModalAutocompleteValue.length === 0;return (0,emotion_react_browser_esm.jsx)(ResultSetControls, null, (0,emotion_react_browser_esm.jsx)(SaveDatasetModal, { visible: showSaveDatasetModal, onOk: this.handleSaveInDataset, saveDatasetRadioBtnState: saveDatasetRadioBtnState, shouldOverwriteDataset: shouldOverwriteDataSet, defaultCreateDatasetValue: newSaveDatasetName, userDatasetOptions: userDatasetOptions, disableSaveAndExploreBtn: disableSaveAndExploreBtn, onHide: this.handleHideSaveModal, handleDatasetNameChange: this.handleDatasetNameChange, handleSaveDatasetRadioBtnState: this.handleSaveDatasetRadioBtnState, handleOverwriteCancel: this.handleOverwriteCancel, handleOverwriteDataset: this.handleOverwriteDataset, handleOverwriteDatasetOption: this.handleOverwriteDatasetOption, handleSaveDatasetModalSearch: this.handleSaveDatasetModalSearch, filterAutocompleteOption: this.handleFilterAutocompleteOption, onChangeAutoComplete: this.handleOnChangeAutoComplete }), (0,emotion_react_browser_esm.jsx)(ResultSetButtons, null, this.props.visualize && this.props.database && this.props.database.allows_virtual_table_explore && (0,emotion_react_browser_esm.jsx)(components_ExploreResultsButton // @ts-ignore Redux types are difficult to work with, ignoring for now
      , { query: this.props.query, database: this.props.database, actions: this.props.actions, onClick: this.handleExploreBtnClick }), this.props.csv && (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", href: `/superset/csv/${this.props.query.id}` }, (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-file-text-o" }), " ", (0,TranslatorSingleton.t)('Download to CSV')), (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, { text: (0,common/* prepareCopyToClipboardTabularData */.Mv)(data, columns), wrapped: false, copyNode: (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small" }, (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-clipboard" }), " ", (0,TranslatorSingleton.t)('Copy to Clipboard')) })), this.props.search && (0,emotion_react_browser_esm.jsx)("input", { type: "text", onChange: this.changeSearch, value: this.state.searchText, className: "form-control input-sm", placeholder: (0,TranslatorSingleton.t)('Filter results') }));}return (0,emotion_react_browser_esm.jsx)("div", null);}renderRowsReturned() {var _this$props$user, _this$props$user$role;const { results, rows, queryLimit, limitingFactor } = this.props.query;let limitMessage;const limitReached = results == null ? void 0 : results.displayLimitReached;
    const limit = queryLimit || results.query.limit;
    const isAdmin = !!((_this$props$user = this.props.user) != null && (_this$props$user$role = _this$props$user.roles) != null && _this$props$user$role.Admin);
    const displayMaxRowsReachedMessage = {
      withAdmin: (0,TranslatorSingleton.t)(`The number of results displayed is limited to %(rows)d by the configuration DISPLAY_MAX_ROWS. `, { rows }).concat((0,TranslatorSingleton.t)(`Please add additional limits/filters or download to csv to see more rows up to `), (0,TranslatorSingleton.t)(`the %(limit)d limit.`, { limit })),
      withoutAdmin: (0,TranslatorSingleton.t)(`The number of results displayed is limited to %(rows)d. `, { rows }).concat((0,TranslatorSingleton.t)(`Please add additional limits/filters, download to csv, or contact an admin `), (0,TranslatorSingleton.t)(`to see more rows up to the %(limit)d limit.`, {
        limit })) };


    const shouldUseDefaultDropdownAlert = limit === this.props.defaultQueryLimit &&
    limitingFactor === LIMITING_FACTOR.DROPDOWN;
    if (limitingFactor === LIMITING_FACTOR.QUERY && this.props.csv) {
      limitMessage = (0,emotion_react_browser_esm.jsx)("span", { className: "limitMessage" },
      (0,TranslatorSingleton.t)(`The number of rows displayed is limited to %(rows)d by the query`, { rows }));

    } else
    if (limitingFactor === LIMITING_FACTOR.DROPDOWN &&
    !shouldUseDefaultDropdownAlert) {
      limitMessage = (0,emotion_react_browser_esm.jsx)("span", { className: "limitMessage" },
      (0,TranslatorSingleton.t)(`The number of rows displayed is limited to %(rows)d by the limit dropdown.`, { rows }));

    } else
    if (limitingFactor === LIMITING_FACTOR.QUERY_AND_DROPDOWN) {
      limitMessage = (0,emotion_react_browser_esm.jsx)("span", { className: "limitMessage" },
      (0,TranslatorSingleton.t)(`The number of rows displayed is limited to %(rows)d by the query and limit dropdown.`, { rows }));

    }
    return (0,emotion_react_browser_esm.jsx)(ReturnedRows, null,
    !limitReached && !shouldUseDefaultDropdownAlert && (0,emotion_react_browser_esm.jsx)("span", null,
    (0,TranslatorSingleton.t)(`%(rows)d rows returned`, { rows }), " ", limitMessage),

    !limitReached && shouldUseDefaultDropdownAlert && (0,emotion_react_browser_esm.jsx)("div", { ref: this.calculateAlertRefHeight },
    (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", message: (0,TranslatorSingleton.t)(`%(rows)d rows returned`, { rows }), onClose: this.onAlertClose, description: (0,TranslatorSingleton.t)(`The number of rows displayed is limited to %s by the dropdown.`, rows) })),

    limitReached && (0,emotion_react_browser_esm.jsx)("div", { ref: this.calculateAlertRefHeight },
    (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", onClose: this.onAlertClose, message: (0,TranslatorSingleton.t)(`%(rows)d rows returned`, { rows }), description: isAdmin ?
      displayMaxRowsReachedMessage.withAdmin :
      displayMaxRowsReachedMessage.withoutAdmin })));


  }
  render() {
    const { query } = this.props;
    let sql;
    let exploreDBId = query.dbId;
    if (this.props.database && this.props.database.explore_database_id) {
      exploreDBId = this.props.database.explore_database_id;
    }
    if (this.props.showSql) {
      sql = (0,emotion_react_browser_esm.jsx)(components_HighlightedSql, { sql: query.sql });
    }
    if (query.state === 'stopped') {
      return (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", message: (0,TranslatorSingleton.t)('Query was stopped') });
    }
    if (query.state === 'failed') {var _query$errors;
      return (0,emotion_react_browser_esm.jsx)(ResultSetErrorMessage, null,
      (0,emotion_react_browser_esm.jsx)(ErrorMessageWithStackTrace/* default */.Z, { title: (0,TranslatorSingleton.t)('Database error'), error: query == null ? void 0 : (_query$errors = query.errors) == null ? void 0 : _query$errors[0], subtitle: (0,emotion_react_browser_esm.jsx)(MonospaceDiv, null, query.errorMessage), copyText: query.errorMessage || undefined, link: query.link, source: "sqllab" }));

    }
    if (query.state === 'success' && query.ctas) {
      const { tempSchema, tempTable } = query;
      let object = 'Table';
      if (query.ctas_method === CtasEnum.VIEW) {
        object = 'View';
      }
      return (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "info", message: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,TranslatorSingleton.t)(object), " [",
        (0,emotion_react_browser_esm.jsx)("strong", null,
        tempSchema ? `${tempSchema}.` : '',
        tempTable), "] ",

        (0,TranslatorSingleton.t)('was created'), " \xA0",
        (0,emotion_react_browser_esm.jsx)(ButtonGroup, null,
        (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", className: "m-r-5", onClick: () => this.popSelectStar(tempSchema, tempTable) },
        (0,TranslatorSingleton.t)('Query in a new tab')),

        (0,emotion_react_browser_esm.jsx)(components_ExploreCtasResultsButton
        // @ts-ignore Redux types are difficult to work with, ignoring for now
        , { table: tempTable, schema: tempSchema, dbId: exploreDBId, database: this.props.database, actions: this.props.actions }))) }));



    }
    if (query.state === 'success' && query.results) {
      const { results } = query;
      const height = this.state.alertIsOpen ?
      this.props.height - 70 :
      this.props.height;
      let data;
      if (this.props.cache && query.cached) {
        ({ data } = this.state);
      } else
      if (results && results.data) {
        ({ data } = results);
      }
      if (data && data.length > 0) {
        const expandedColumns = results.expanded_columns ?
        results.expanded_columns.map((col) => col.name) :
        [];
        return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        this.renderControls(),
        this.renderRowsReturned(),
        sql,
        (0,emotion_react_browser_esm.jsx)(FilterableTable, { data: data, orderedColumnKeys: results.columns.map((col) => col.name), height: height, filterText: this.state.searchText, expandedColumns: expandedColumns }));

      }
      if (data && data.length === 0) {
        return (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", message: (0,TranslatorSingleton.t)('The query returned no data') });
      }
    }
    if (query.cached || query.state === 'success' && !query.results) {
      if (query.isDataPreview) {
        return (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", buttonStyle: "primary", onClick: () => this.reFetchQueryResults({
            ...query,
            isDataPreview: true }) },

        (0,TranslatorSingleton.t)('Fetch data preview'));

      }
      if (query.resultsKey) {
        return (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", buttonStyle: "primary", onClick: () => this.fetchResults(query) },
        (0,TranslatorSingleton.t)('Refetch results'));

      }
    }
    let progressBar;
    let trackingUrl;
    if (query.progress > 0) {
      progressBar = (0,emotion_react_browser_esm.jsx)(ProgressBar/* default */.Z, { percent: parseInt(query.progress.toFixed(0), 10), striped: true });
    }
    if (query.trackingUrl) {
      trackingUrl = (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", onClick: () => query.trackingUrl && window.open(query.trackingUrl) },
      (0,TranslatorSingleton.t)('Track job'));

    }
    const progressMsg = query && query.extra && query.extra.progress ?
    query.extra.progress :
    null;
    return (0,emotion_react_browser_esm.jsx)("div", { style: LOADING_STYLES },
    (0,emotion_react_browser_esm.jsx)("div", null, !progressBar && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, { position: "normal" })),
    (0,emotion_react_browser_esm.jsx)(QueryStateLabel, { query: query }),
    (0,emotion_react_browser_esm.jsx)("div", null,
    progressMsg && (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "success", message: progressMsg })),

    (0,emotion_react_browser_esm.jsx)("div", null, progressBar),
    (0,emotion_react_browser_esm.jsx)("div", null, trackingUrl));

  }}ResultSet.defaultProps = { cache: false, csv: true, database: {}, search: true, showSql: false, visualize: true };
;// CONCATENATED MODULE: ./src/components/IconTooltip/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const StyledSpan = style/* styled.span */.iK.span`
  color: ${({ theme }) => theme.colors.primary.dark1};
  &: hover {
    color: ${({ theme }) => theme.colors.primary.dark2};
  }
`;
const IconTooltip = ({ children = null, className = '', onClick = () => undefined, placement = 'top', style = {}, tooltip = null }) => {
  const iconTooltip = (0,emotion_react_browser_esm.jsx)(StyledSpan, { onClick: onClick, style: style, className: `IconTooltip ${className}` },
  children);

  if (tooltip) {
    return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "tooltip", title: tooltip, placement: placement, mouseEnterDelay: 0.3, mouseLeaveDelay: 0.15 },
    iconTooltip);

  }
  return iconTooltip;
};

;// CONCATENATED MODULE: ./src/SqlLab/components/QueryTable/styles.ts
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const StaticPosition = emotion_react_browser_esm.css`
  position: static;
`;
const verticalAlign = emotion_react_browser_esm.css`
  vertical-align: 0em;
  svg {
    height: 0.9em;
  }
`;
const StyledTooltip = (0,style/* styled */.iK)(IconTooltip)`
  padding-right: ${({ theme }) => theme.gridUnit * 2}px;
  span {
    color: ${({ theme }) => theme.colors.grayscale.base};
    &: hover {
      color: ${({ theme }) => theme.colors.primary.base};
    }
  }
`;
;// CONCATENATED MODULE: ./src/SqlLab/components/QueryTable/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


















const QueryTable_propTypes = {
  columns: (prop_types_default()).array,
  actions: (prop_types_default()).object,
  queries: (prop_types_default()).array,
  onUserClicked: (prop_types_default()).func,
  onDbClicked: (prop_types_default()).func,
  displayLimit: (prop_types_default()).number.isRequired };

const QueryTable_defaultProps = {
  columns: ['started', 'duration', 'rows'],
  queries: [],
  onUserClicked: () => {},
  onDbClicked: () => {} };


const openQuery = (id) => {
  const url = `/superset/sqllab?queryId=${id}`;
  window.open(url);
};

const QueryTable = (props) => {
  const theme = (0,style/* useTheme */.Fg)();
  const statusAttributes = {
    success: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Check */.Z.Check, { iconColor: theme.colors.success.base }),
        label: (0,TranslatorSingleton.t)('Success') } },


    failed: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.XSmall */.Z.XSmall, { iconColor: theme.colors.error.base }),
        label: (0,TranslatorSingleton.t)('Failed') } },


    stopped: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.XSmall */.Z.XSmall, { iconColor: theme.colors.error.base }),
        label: (0,TranslatorSingleton.t)('Failed') } },


    running: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Running */.Z.Running, { iconColor: theme.colors.primary.base }),
        label: (0,TranslatorSingleton.t)('Running') } },


    fetching: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Queued */.Z.Queued, { iconColor: theme.colors.primary.base }),
        label: (0,TranslatorSingleton.t)('fetching') } },


    timed_out: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Offline */.Z.Offline, { iconColor: theme.colors.grayscale.light1 }),
        label: (0,TranslatorSingleton.t)('Offline') } },


    scheduled: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Queued */.Z.Queued, { iconColor: theme.colors.grayscale.base }),
        label: (0,TranslatorSingleton.t)('Scheduled') } },


    pending: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Queued */.Z.Queued, { iconColor: theme.colors.grayscale.base }),
        label: (0,TranslatorSingleton.t)('Scheduled') } },


    error: {
      config: {
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Error */.Z.Error, { iconColor: theme.colors.error.base }),
        label: (0,TranslatorSingleton.t)('Unknown Status') } } };




  const setHeaders = (column) => {
    if (column === 'sql') {
      return column.toUpperCase();
    }
    return column.charAt(0).toUpperCase().concat(column.slice(1));
  };
  const columns = (0,react.useMemo)(
  () =>
  props.columns.map((column) => ({
    accessor: column,
    Header: () => setHeaders(column),
    disableSortBy: true })),

  [props.columns]);


  const user = (0,es/* useSelector */.v9)(({ sqlLab: { user } }) => user);

  const data = (0,react.useMemo)(() => {
    const restoreSql = (query) => {
      props.actions.queryEditorSetSql({ id: query.sqlEditorId }, query.sql);
    };

    const openQueryInNewTab = (query) => {
      props.actions.cloneQueryToNewTab(query, true);
    };

    const openAsyncResults = (query, displayLimit) => {
      props.actions.fetchQueryResults(query, displayLimit);
    };

    const clearQueryResults = (query) => {
      props.actions.clearQueryResults(query);
    };

    const removeQuery = (query) => {
      props.actions.removeQuery(query);
    };

    return props.queries.
    map((query) => {
      const q = { ...query };
      const status = statusAttributes[q.state] || statusAttributes.error;

      if (q.endDttm) {
        q.duration = (0,dates/* fDuration */.zQ)(q.startDttm, q.endDttm);
      }
      const time = moment_default()(q.startDttm).format().split('T');
      q.time =
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)("span", null,
      time[0], " ", (0,emotion_react_browser_esm.jsx)("br", null), " ", time[1]));



      q.user =
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "link",
        onClick: () => props.onUserClicked(q.userId) },

      q.user);


      q.db =
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "link",
        onClick: () => props.onDbClicked(q.dbId) },

      q.db);


      q.started = moment_default()(q.startDttm).format('HH:mm:ss');
      q.querylink =
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "link",
        onClick: () => openQuery(q.queryId) },

      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-external-link m-r-3" }),
      (0,TranslatorSingleton.t)('Edit'));


      q.sql =
      (0,emotion_react_browser_esm.jsx)(Card/* default */.Z, { css: [StaticPosition,  true ? "" : 0,  true ? "" : 0] },
      (0,emotion_react_browser_esm.jsx)(components_HighlightedSql, {
        sql: q.sql,
        rawSql: q.executedSql,
        shrink: true,
        maxWidth: 60 }));



      if (q.resultsKey) {
        q.output =
        (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, {
          className: "ResultsModal",
          triggerNode:
          (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { type: "info", className: "pointer" },
          (0,TranslatorSingleton.t)('View results')),


          modalTitle: (0,TranslatorSingleton.t)('Data preview'),
          beforeOpen: () => openAsyncResults(query, props.displayLimit),
          onExit: () => clearQueryResults(query),
          modalBody:
          (0,emotion_react_browser_esm.jsx)(ResultSet, {
            showSql: true,
            user: user,
            query: query,
            actions: props.actions,
            height: 400,
            displayLimit: props.displayLimit }),


          responsive: true });


      } else {
        // if query was run using ctas and force_ctas_schema was set
        // tempTable will have the schema
        const schemaUsed =
        q.ctas && q.tempTable && q.tempTable.includes('.') ? '' : q.schema;
        q.output = [schemaUsed, q.tempTable].filter((v) => v).join('.');
      }
      q.progress =
      q.state === 'success' ?
      (0,emotion_react_browser_esm.jsx)(ProgressBar/* default */.Z, {
        percent: parseInt(q.progress.toFixed(0), 10),
        striped: true,
        showInfo: false }) :


      (0,emotion_react_browser_esm.jsx)(ProgressBar/* default */.Z, {
        percent: parseInt(q.progress.toFixed(0), 10),
        striped: true });


      q.state =
      (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: status.config.label, placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", null, status.config.icon));


      q.actions =
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(StyledTooltip, {
        onClick: () => restoreSql(query),
        tooltip: (0,TranslatorSingleton.t)(
        'Overwrite text in the editor with a query on this table'),

        placement: "top" },

      (0,emotion_react_browser_esm.jsx)(Icons/* default.Edit */.Z.Edit, { iconSize: "small" })),

      (0,emotion_react_browser_esm.jsx)(StyledTooltip, {
        onClick: () => openQueryInNewTab(query),
        tooltip: (0,TranslatorSingleton.t)('Run query in a new tab'),
        placement: "top" },

      (0,emotion_react_browser_esm.jsx)(Icons/* default.PlusCircleOutlined */.Z.PlusCircleOutlined, {
        iconSize: "x-small",
        css: verticalAlign })),


      (0,emotion_react_browser_esm.jsx)(StyledTooltip, {
        tooltip: (0,TranslatorSingleton.t)('Remove query from log'),
        onClick: () => removeQuery(query) },

      (0,emotion_react_browser_esm.jsx)(Icons/* default.Trash */.Z.Trash, { iconSize: "x-small" })));



      return q;
    }).
    reverse();
  }, [props]);

  return (
    (0,emotion_react_browser_esm.jsx)("div", { className: "QueryTable" },
    (0,emotion_react_browser_esm.jsx)(TableView/* default */.Z, {
      columns: columns,
      data: data,
      className: "table-condensed",
      pageSize: 50 })));



};

QueryTable.propTypes = QueryTable_propTypes;
QueryTable.defaultProps = QueryTable_defaultProps;

/* harmony default export */ const components_QueryTable = (QueryTable);
;// CONCATENATED MODULE: ./src/SqlLab/components/QueryHistory/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const QueryHistory = ({ queries, actions, displayLimit }) => queries.length > 0 ? (0,emotion_react_browser_esm.jsx)(components_QueryTable, { columns: [
  'state',
  'started',
  'duration',
  'progress',
  'rows',
  'sql',
  'output',
  'actions'],
  queries: queries, actions: actions, displayLimit: displayLimit }) : (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "info", message: (0,TranslatorSingleton.t)('No query history yet...') });
/* harmony default export */ const components_QueryHistory = (QueryHistory);
;// CONCATENATED MODULE: ./src/SqlLab/components/SouthPane/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










const TAB_HEIGHT = 140;
const StyledPane = style/* styled.div */.iK.div`
  width: 100%;

  .ant-tabs .ant-tabs-content-holder {
    overflow: visible;
  }
  .SouthPaneTabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    .scrollable {
      overflow-y: auto;
    }
  }
  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
    .scrollable {
      overflow-y: auto;
    }
  }
  .tab-content {
    .alert {
      margin-top: ${({ theme }) => theme.gridUnit * 2}px;
    }

    button.fetch {
      margin-top: ${({ theme }) => theme.gridUnit * 2}px;
    }
  }
`;
function SouthPane({ editorQueries, latestQueryId, dataPreviewQueries, actions, activeSouthPaneTab = 'Results', height, databases, offline = false, displayLimit, user, defaultQueryLimit }) {
  const innerTabContentHeight = height - TAB_HEIGHT;
  const southPaneRef = /*#__PURE__*/(0,react.createRef)();
  const switchTab = (id) => {
    actions.setActiveSouthPaneTab(id);
  };
  const renderOfflineStatus = () => (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, { className: "m-r-3", type: constants/* STATE_TYPE_MAP */.IY[constants/* STATUS_OPTIONS.offline */.Em.offline] },
  constants/* STATUS_OPTIONS.offline */.Em.offline);

  const renderResults = () => {
    let latestQuery;
    if (editorQueries.length > 0) {
      // get the latest query
      latestQuery = editorQueries.find(({ id }) => id === latestQueryId);
    }
    let results;
    if (latestQuery) {var _latestQuery, _latestQuery$extra;
      if ((_latestQuery = latestQuery) != null && (_latestQuery$extra = _latestQuery.extra) != null && _latestQuery$extra.errors) {
        latestQuery.errors = latestQuery.extra.errors;
      }
      if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) &&
      latestQuery.state === 'success' &&
      !latestQuery.resultsKey &&
      !latestQuery.results) {
        results = (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", message: (0,TranslatorSingleton.t)('No stored results found, you need to re-run your query') });
        return results;
      }
      if (Date.now() - latestQuery.startDttm <= constants/* LOCALSTORAGE_MAX_QUERY_AGE_MS */.U$) {
        results = (0,emotion_react_browser_esm.jsx)(ResultSet, { showControls: true, search: true, query: latestQuery, actions: actions, user: user, height: innerTabContentHeight, database: databases[latestQuery.dbId], displayLimit: displayLimit, defaultQueryLimit: defaultQueryLimit });
      }
    } else
    {
      results = (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "info", message: (0,TranslatorSingleton.t)('Run a query to display results here') });
    }
    return results;
  };
  const renderDataPreviewTabs = () => dataPreviewQueries.map((query) => (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,TranslatorSingleton.t)('Preview: `%s`', decodeURIComponent(query.tableName)), key: query.id },
  (0,emotion_react_browser_esm.jsx)(ResultSet, { query: query, visualize: false, csv: false, actions: actions, cache: true, user: user, height: innerTabContentHeight, displayLimit: displayLimit, defaultQueryLimit: defaultQueryLimit })));

  return offline ? renderOfflineStatus() : (0,emotion_react_browser_esm.jsx)(StyledPane, { className: "SouthPane", ref: southPaneRef },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default */.ZP, { activeKey: activeSouthPaneTab, className: "SouthPaneTabs", onChange: switchTab, id: shortid_default().generate(), fullWidth: false, animated: false },
  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,TranslatorSingleton.t)('Results'), key: "Results" },
  renderResults()),

  (0,emotion_react_browser_esm.jsx)(Tabs/* default.TabPane */.ZP.TabPane, { tab: (0,TranslatorSingleton.t)('Query history'), key: "History" },
  (0,emotion_react_browser_esm.jsx)(components_QueryHistory, { queries: editorQueries, actions: actions, displayLimit: displayLimit })),

  renderDataPreviewTabs()));


}
;// CONCATENATED MODULE: ./src/SqlLab/components/SouthPane/state.ts
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




function state_mapStateToProps({ sqlLab }) {
  return {
    activeSouthPaneTab: sqlLab.activeSouthPaneTab,
    databases: sqlLab.databases,
    offline: sqlLab.offline,
    user: sqlLab.user };

}
function state_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(sqlLab_namespaceObject, dispatch) };

}
/* harmony default export */ const state = ((0,es/* connect */.$j)(state_mapStateToProps, state_mapDispatchToProps)(SouthPane));
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
;// CONCATENATED MODULE: ./src/SqlLab/components/SaveQuery/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







const SaveQuery_Styles = style/* styled.span */.iK.span`
  span[role='img'] {
    display: flex;
    margin: 0;
    color: ${({ theme }) => theme.colors.grayscale.base};
    svg {
      vertical-align: -${({ theme }) => theme.gridUnit * 1.25}px;
      margin: 0;
    }
  }
`;
function SaveQuery({ query, defaultLabel = (0,TranslatorSingleton.t)('Undefined'), onSave = () => {}, onUpdate, saveQueryWarning = null }) {
  const [description, setDescription] = (0,react.useState)(query.description || '');
  const [label, setLabel] = (0,react.useState)(defaultLabel);
  const [showSave, setShowSave] = (0,react.useState)(false);
  const isSaved = !!query.remoteId;
  const queryPayload = () => ({
    ...query,
    title: label,
    description });

  const close = () => {
    setShowSave(false);
  };
  const onSaveWrapper = () => {
    onSave(queryPayload());
    close();
  };
  const onUpdateWrapper = () => {
    onUpdate(queryPayload());
    close();
  };
  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const toggleSave = () => {
    setShowSave(!showSave);
  };
  const renderModalBody = () => (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, { layout: "vertical" },
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Name') },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", value: label, onChange: onLabelChange })))),



  (0,emotion_react_browser_esm.jsx)("br", null),
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Description') },
  (0,emotion_react_browser_esm.jsx)(components/* TextArea */.Kx, { rows: 4, value: description, onChange: onDescriptionChange })))),



  saveQueryWarning && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)("br", null),
  (0,emotion_react_browser_esm.jsx)("div", null,
  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)("small", null, saveQueryWarning))),


  (0,emotion_react_browser_esm.jsx)("br", null))));



  return (0,emotion_react_browser_esm.jsx)(SaveQuery_Styles, { className: "SaveQuery" },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", onClick: toggleSave },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Save */.Z.Save, { iconSize: "xl" }),
  isSaved ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Save as')),

  (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, { className: "save-query-modal", onHandledPrimaryAction: onSaveWrapper, onHide: close, primaryButtonName: isSaved ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Save as'), width: "620px", show: showSave, title: (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Save query')), footer: [
    (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: close, cta: true },
    (0,TranslatorSingleton.t)('Cancel')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: isSaved ? undefined : 'primary', onClick: onSaveWrapper, className: "m-r-3", cta: true },
    isSaved ? (0,TranslatorSingleton.t)('Save as new') : (0,TranslatorSingleton.t)('Save')),

    isSaved && (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: onUpdateWrapper, className: "m-r-3", cta: true },
    (0,TranslatorSingleton.t)('Update')))] },



  renderModalBody()));


}
// EXTERNAL MODULE: ./node_modules/react-jsonschema-form/lib/index.js
var react_jsonschema_form_lib = __webpack_require__(99670);
// EXTERNAL MODULE: ./node_modules/chrono-node/dist/index.js
var dist = __webpack_require__(72174);
;// CONCATENATED MODULE: ./src/SqlLab/components/ScheduleQueryButton/index.tsx
function ScheduleQueryButton_EMOTION_STRINGIFIED_CSS_ERROR_() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









const validators = {
  greater: (a, b) => a > b,
  greater_equal: (a, b) => a >= b,
  less: (a, b) => a < b,
  less_equal: (a, b) => a <= b };

const getJSONSchema = () => {var _window$featureFlags$;
  const jsonSchema = (_window$featureFlags$ = window.featureFlags.SCHEDULED_QUERIES) == null ? void 0 : _window$featureFlags$.JSONSCHEMA;
  // parse date-time into usable value (eg, 'today' => `new Date()`)
  if (jsonSchema) {
    Object.entries(jsonSchema.properties).forEach(([key, value]) => {
      if (value.default && value.format === 'date-time') {
        jsonSchema.properties[key] = {
          ...value,
          default: dist.parseDate(value.default).toISOString() };

      }
    });
    return jsonSchema;
  }
  return {};
};
const getUISchema = () => {var _window$featureFlags$2;return (_window$featureFlags$2 = window.featureFlags.SCHEDULED_QUERIES) == null ? void 0 : _window$featureFlags$2.UISCHEMA;};
const getValidationRules = () => {var _window$featureFlags$3;return ((_window$featureFlags$3 = window.featureFlags.SCHEDULED_QUERIES) == null ? void 0 : _window$featureFlags$3.VALIDATION) || [];};
const getValidator = () => {
  const rules = getValidationRules();
  return (formData, errors) => {
    rules.forEach((rule) => {
      const test = validators[rule.name];
      const args = rule.arguments.map((name) => formData[name]);
      const container = rule.container || rule.arguments.slice(-1)[0];
      if (!test(...args)) {
        errors[container].addError(rule.message);
      }
    });
    return errors;
  };
};
const StyledRow = (0,style/* styled */.iK)(components/* Row */.X2)`
  padding-bottom: ${({ theme }) => theme.gridUnit * 2}px;
`;
const StyledButtonComponent = (0,style/* styled */.iK)(Button/* default */.Z)`
  background: none;
  text-transform: none;
  padding: 0px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.normal};
  &:disabled {
    background: none;
    color: rgba(0, 0, 0, 0.85);
    &:hover {
      background: none;
      color: rgba(0, 0, 0, 0.85);
    }
  }
`;var ScheduleQueryButton_ref =  true ? { name: "tjo4qw", styles: "float:right" } : 0;
const ScheduleQueryButton = ({ defaultLabel = (0,TranslatorSingleton.t)('Undefined'), sql, schema, dbId, onSchedule = () => {}, scheduleQueryWarning, tooltip, disabled = false }) => {
  const [description, setDescription] = (0,react.useState)('');
  const [label, setLabel] = (0,react.useState)(defaultLabel);
  const [showSchedule, setShowSchedule] = (0,react.useState)(false);
  let saveModal;
  const onScheduleSubmit = ({ formData }) => {var _saveModal;
    const query = {
      label,
      description,
      db_id: dbId,
      schema,
      sql,
      extra_json: JSON.stringify({ schedule_info: formData }) };

    onSchedule(query);
    (_saveModal = saveModal) == null ? void 0 : _saveModal.close();
  };
  const renderModalBody = () => (0,emotion_react_browser_esm.jsx)(Form/* Form */.l0, { layout: "vertical" },
  (0,emotion_react_browser_esm.jsx)(StyledRow, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Label') },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", placeholder: (0,TranslatorSingleton.t)('Label for your query'), value: label, onChange: (event) => setLabel(event.target.value) })))),



  (0,emotion_react_browser_esm.jsx)(StyledRow, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,TranslatorSingleton.t)('Description') },
  (0,emotion_react_browser_esm.jsx)(components/* TextArea */.Kx, { rows: 4, placeholder: (0,TranslatorSingleton.t)('Write a description for your query'), value: description, onChange: (event) => setDescription(event.target.value) })))),



  (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)("div", { className: "json-schema" },
  (0,emotion_react_browser_esm.jsx)(react_jsonschema_form_lib/* default */.Z, { schema: getJSONSchema(), uiSchema: getUISchema, onSubmit: onScheduleSubmit, validate: getValidator() },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", htmlType: "submit", css: ScheduleQueryButton_ref }, "Submit"))))),






  scheduleQueryWarning && (0,emotion_react_browser_esm.jsx)(components/* Row */.X2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Col */.JX, { xs: 24 },
  (0,emotion_react_browser_esm.jsx)("small", null, scheduleQueryWarning))));



  return (0,emotion_react_browser_esm.jsx)("span", { className: "ScheduleQueryButton" },
  (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { ref: (ref) => {
      saveModal = ref;
    }, modalTitle: (0,TranslatorSingleton.t)('Schedule query'), modalBody: renderModalBody(), triggerNode: (0,emotion_react_browser_esm.jsx)(StyledButtonComponent, { onClick: () => setShowSchedule(!showSchedule), buttonSize: "small", buttonStyle: "link", tooltip: tooltip, disabled: disabled },
    (0,TranslatorSingleton.t)('Schedule')) }));


};
/* harmony default export */ const components_ScheduleQueryButton = (ScheduleQueryButton);
// EXTERNAL MODULE: ./src/components/TableView/TableView.tsx
var TableView_TableView = __webpack_require__(46977);
;// CONCATENATED MODULE: ./src/SqlLab/components/EstimateQueryCostButton/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










const EstimateQueryCostButton_propTypes = {
  dbId: (prop_types_default()).number.isRequired,
  schema: (prop_types_default()).string.isRequired,
  sql: (prop_types_default()).string.isRequired,
  getEstimate: (prop_types_default()).func.isRequired,
  queryCostEstimate: (prop_types_default()).Object,
  selectedText: (prop_types_default()).string,
  tooltip: (prop_types_default()).string,
  disabled: (prop_types_default()).bool };

const EstimateQueryCostButton_defaultProps = {
  queryCostEstimate: [],
  tooltip: '',
  disabled: false };


const EstimateQueryCostButton = (props) => {
  const { cost } = props.queryCostEstimate;
  const tableData = (0,react.useMemo)(() => Array.isArray(cost) ? cost : [], [cost]);
  const columns = (0,react.useMemo)(
  () =>
  Array.isArray(cost) && cost.length ?
  Object.keys(cost[0]).map((key) => ({ accessor: key, Header: key })) :
  [],
  [cost]);


  const onClick = () => {
    props.getEstimate();
  };

  const renderModalBody = () => {
    if (props.queryCostEstimate.error !== null) {
      return (
        (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, {
          key: "query-estimate-error",
          type: "error",
          message: props.queryCostEstimate.error }));


    }
    if (props.queryCostEstimate.completed) {
      return (
        (0,emotion_react_browser_esm.jsx)(TableView/* default */.Z, {
          columns: columns,
          data: tableData,
          withPagination: false,
          emptyWrapperType: TableView_TableView/* EmptyWrapperType.Small */.u.Small,
          className: "cost-estimate" }));


    }
    return (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, { position: "normal" });
  };

  const { disabled, selectedText, tooltip } = props;
  const btnText = selectedText ?
  (0,TranslatorSingleton.t)('Estimate selected query cost') :
  (0,TranslatorSingleton.t)('Estimate cost');
  return (
    (0,emotion_react_browser_esm.jsx)("span", { className: "EstimateQueryCostButton" },
    (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, {
      modalTitle: (0,TranslatorSingleton.t)('Cost estimate'),
      modalBody: renderModalBody(),
      triggerNode:
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        style: { height: 32, padding: '4px 15px' },
        onClick: onClick,
        key: "query-estimate-btn",
        tooltip: tooltip,
        disabled: disabled },

      btnText) })));





};

EstimateQueryCostButton.propTypes = EstimateQueryCostButton_propTypes;
EstimateQueryCostButton.defaultProps = EstimateQueryCostButton_defaultProps;

/* harmony default export */ const components_EstimateQueryCostButton = (EstimateQueryCostButton);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
;// CONCATENATED MODULE: ./src/SqlLab/components/ShareSqlLabQuery/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









const ShareSqlLabQuery_StyledIcon = (0,style/* styled */.iK)(Icons/* default.Link */.Z.Link)`
  &:first-of-type {
    margin: 0;
    display: flex;
    svg {
      margin: 0;
    }
  }
`;
function ShareSqlLabQuery({ queryEditor, addDangerToast }) {
  const theme = (0,style/* useTheme */.Fg)();
  const getCopyUrlForKvStore = (callback) => {
    const { dbId, title, schema, autorun, sql } = queryEditor;
    const sharedQuery = { dbId, title, schema, autorun, sql };
    return (0,common/* storeQuery */.G9)(sharedQuery).
    then((shortUrl) => {
      callback(shortUrl);
    }).
    catch((response) => {
      (0,getClientErrorObject/* getClientErrorObject */.O)(response).then(() => {
        addDangerToast((0,TranslatorSingleton.t)('There was an error with your request'));
      });
    });
  };
  const getCopyUrlForSavedQuery = (callback) => {
    let savedQueryToastContent;
    if (queryEditor.remoteId) {
      savedQueryToastContent = `${window.location.origin + window.location.pathname}?savedQueryId=${queryEditor.remoteId}`;
      callback(savedQueryToastContent);
    } else
    {
      savedQueryToastContent = (0,TranslatorSingleton.t)('Please save the query to enable sharing');
      callback(savedQueryToastContent);
    }
  };
  const getCopyUrl = (callback) => {
    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SHARE_QUERIES_VIA_KV_STORE */.T.SHARE_QUERIES_VIA_KV_STORE)) {
      return getCopyUrlForKvStore(callback);
    }
    return getCopyUrlForSavedQuery(callback);
  };
  const buildButton = (canShare) => {
    const tooltip = canShare ?
    (0,TranslatorSingleton.t)('Copy query link to your clipboard') :
    (0,TranslatorSingleton.t)('Save the query to enable this feature');
    return (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", tooltip: tooltip, disabled: !canShare },
    (0,emotion_react_browser_esm.jsx)(ShareSqlLabQuery_StyledIcon, { iconColor: canShare ? theme.colors.primary.base : theme.colors.grayscale.base, iconSize: "xl" }),
    (0,TranslatorSingleton.t)('Copy link'));

  };
  const canShare = !!queryEditor.remoteId ||
  (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SHARE_QUERIES_VIA_KV_STORE */.T.SHARE_QUERIES_VIA_KV_STORE);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  canShare ? (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, { getText: getCopyUrl, wrapped: false, copyNode: buildButton(canShare) }) : buildButton(canShare));

}
/* harmony default export */ const components_ShareSqlLabQuery = ((0,withToasts/* default */.Z)(ShareSqlLabQuery));
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43700);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
;// CONCATENATED MODULE: ./src/components/RefreshLabel/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const RefreshLabel = ({ onClick, tooltipContent }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const IconWithoutRef = /*#__PURE__*/react.forwardRef((props, ref) => (0,emotion_react_browser_esm.jsx)(Icons/* default.Refresh */.Z.Refresh, props));
  return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: tooltipContent },
  (0,emotion_react_browser_esm.jsx)(IconWithoutRef, { role: "button", onClick: onClick, css: (theme) => ({
      cursor: 'pointer',
      color: theme.colors.grayscale.base,
      '&:hover': { color: theme.colors.primary.base } }) }));


};
/* harmony default export */ const components_RefreshLabel = (RefreshLabel);
;// CONCATENATED MODULE: ./src/components/DatabaseSelector/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







const DatabaseSelectorWrapper = style/* styled.div */.iK.div`
  ${({ theme }) => `
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${theme.gridUnit}px;
      margin-top: ${theme.gridUnit * 5}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .select {
      flex: 1;
    }

    & > div {
      margin-bottom: ${theme.gridUnit * 4}px;
    }
  `}
`;
const LabelStyle = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({ theme }) => theme.gridUnit - 2}px;
`;
const SelectLabel = ({ backend, databaseName }) => (0,emotion_react_browser_esm.jsx)(LabelStyle, null,
(0,emotion_react_browser_esm.jsx)(Label/* default */.Z, null, backend),
databaseName);

function DatabaseSelector({ db, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onDbChange, onSchemaChange, onSchemasLoad, readOnly = false, schema, sqlLabMode = false }) {
  const [loadingSchemas, setLoadingSchemas] = (0,react.useState)(false);
  const [schemaOptions, setSchemaOptions] = (0,react.useState)([]);
  const [currentDb, setCurrentDb] = (0,react.useState)(db ?
  {
    label: (0,emotion_react_browser_esm.jsx)(SelectLabel, { backend: db.backend, databaseName: db.database_name }),
    value: db.id,
    ...db } :

  undefined);
  const [currentSchema, setCurrentSchema] = (0,react.useState)(schema ? { label: schema, value: schema } : undefined);
  const [refresh, setRefresh] = (0,react.useState)(0);
  const loadDatabases = (0,react.useMemo)(() => async (search, page, pageSize) => {
    const queryParams = rison_default().encode({
      order_columns: 'database_name',
      order_direction: 'asc',
      page,
      page_size: pageSize,
      ...(formMode || !sqlLabMode ?
      { filters: [{ col: 'database_name', opr: 'ct', value: search }] } :
      {
        filters: [
        { col: 'database_name', opr: 'ct', value: search },
        {
          col: 'expose_in_sqllab',
          opr: 'eq',
          value: true }] }) });




    const endpoint = `/api/v1/database/?q=${queryParams}`;
    return SupersetClient/* default.get */.Z.get({ endpoint }).then(({ json }) => {
      const { result } = json;
      if (getDbList) {
        getDbList(result);
      }
      if (result.length === 0) {
        handleError((0,TranslatorSingleton.t)("It seems you don't have access to any database"));
      }
      const options = result.map((row) => ({
        label: (0,emotion_react_browser_esm.jsx)(SelectLabel, { backend: row.backend, databaseName: row.database_name }),
        value: row.id,
        id: row.id,
        database_name: row.database_name,
        backend: row.backend,
        allow_multi_schema_metadata_fetch: row.allow_multi_schema_metadata_fetch }));

      return {
        data: options,
        totalCount: options.length };

    });
  }, [formMode, getDbList, handleError, sqlLabMode]);
  (0,react.useEffect)(() => {
    if (currentDb) {
      setLoadingSchemas(true);
      const queryParams = rison_default().encode({ force: refresh > 0 });
      const endpoint = `/api/v1/database/${currentDb.value}/schemas/?q=${queryParams}`;
      // TODO: Would be nice to add pagination in a follow-up. Needs endpoint changes.
      SupersetClient/* default.get */.Z.get({ endpoint }).
      then(({ json }) => {
        const options = json.result.
        map((s) => ({
          value: s,
          label: s,
          title: s })).

        sort((a, b) => a.label.localeCompare(b.label));
        if (onSchemasLoad) {
          onSchemasLoad(options);
        }
        setSchemaOptions(options);
        setLoadingSchemas(false);
      }).
      catch((e) => {
        setLoadingSchemas(false);
        handleError((0,TranslatorSingleton.t)('There was an error loading the schemas'));
      });
    }
  }, [currentDb, onSchemasLoad, refresh]);
  function changeDataBase(value, database) {
    setCurrentDb(database);
    setCurrentSchema(undefined);
    if (onDbChange) {
      onDbChange(database);
    }
    if (onSchemaChange) {
      onSchemaChange(undefined);
    }
  }
  function changeSchema(schema) {
    setCurrentSchema(schema);
    if (onSchemaChange) {
      onSchemaChange(schema.value);
    }
  }
  function renderSelectRow(select, refreshBtn) {
    return (0,emotion_react_browser_esm.jsx)("div", { className: "section" },
    (0,emotion_react_browser_esm.jsx)("span", { className: "select" }, select),
    (0,emotion_react_browser_esm.jsx)("span", { className: "refresh" }, refreshBtn));

  }
  function renderDatabaseSelect() {
    return renderSelectRow((0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Select database or type database name'), optionFilterProps: ['database_name', 'value'], header: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Database')), lazyLoading: false, onChange: changeDataBase, value: currentDb, placeholder: (0,TranslatorSingleton.t)('Select database or type database name'), disabled: !isDatabaseSelectEnabled || readOnly, options: loadDatabases }), null);
  }
  function renderSchemaSelect() {
    const refreshIcon = !formMode && !readOnly && (0,emotion_react_browser_esm.jsx)(components_RefreshLabel, { onClick: () => setRefresh(refresh + 1), tooltipContent: (0,TranslatorSingleton.t)('Force refresh schema list') });
    return renderSelectRow((0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Select schema or type schema name'), disabled: readOnly, header: (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Schema')), labelInValue: true, lazyLoading: false, loading: loadingSchemas, name: "select-schema", placeholder: (0,TranslatorSingleton.t)('Select schema or type schema name'), onChange: (item) => changeSchema(item), options: schemaOptions, showSearch: true, value: currentSchema }), refreshIcon);
  }
  return (0,emotion_react_browser_esm.jsx)(DatabaseSelectorWrapper, null,
  renderDatabaseSelect(),
  renderSchemaSelect());

}
;// CONCATENATED MODULE: ./src/components/CertifiedIcon/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




function CertifiedIcon({ certifiedBy, details, size = 'l' }) {
  return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "certified-details-tooltip", title: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    certifiedBy && (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('Certified by %s', certifiedBy))),

    (0,emotion_react_browser_esm.jsx)("div", null, details)) },

  (0,emotion_react_browser_esm.jsx)(Icons/* default.Certified */.Z.Certified, { iconColor: style/* supersetTheme.colors.primary.base */.K6.colors.primary.base, iconSize: size }));

}
/* harmony default export */ const components_CertifiedIcon = (CertifiedIcon);
// EXTERNAL MODULE: ./src/components/WarningIconWithTooltip/index.tsx
var WarningIconWithTooltip = __webpack_require__(86057);
;// CONCATENATED MODULE: ./src/components/TableSelector/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









const TableSelectorWrapper = style/* styled.div */.iK.div`
  ${({ theme }) => `
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${theme.gridUnit}px;
      margin-top: ${theme.gridUnit * 5}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .divider {
      border-bottom: 1px solid ${theme.colors.secondary.light5};
      margin: 15px 0;
    }

    .table-length {
      color: ${theme.colors.grayscale.light1};
    }

    .select {
      flex: 1;
    }
  `}
`;
const TableLabel = style/* styled.span */.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const TableOption = ({ table }) => {
  const { label, type, extra } = table;
  return (0,emotion_react_browser_esm.jsx)(TableLabel, { title: label },
  type === 'view' ? (0,emotion_react_browser_esm.jsx)(Icons/* default.Eye */.Z.Eye, { iconSize: "m" }) : (0,emotion_react_browser_esm.jsx)(Icons/* default.Table */.Z.Table, { iconSize: "m" }),
  (extra == null ? void 0 : extra.certification) && (0,emotion_react_browser_esm.jsx)(components_CertifiedIcon, { certifiedBy: extra.certification.certified_by, details: extra.certification.details, size: "l" }),
  (extra == null ? void 0 : extra.warning_markdown) && (0,emotion_react_browser_esm.jsx)(WarningIconWithTooltip/* default */.Z, { warningMarkdown: extra.warning_markdown, size: "l" }),
  label);

};
const TableSelector = ({ database, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onDbChange, onSchemaChange, onSchemasLoad, onTableChange, onTablesLoad, readOnly = false, schema, sqlLabMode = true, tableName }) => {
  const [currentDatabase, setCurrentDatabase] = (0,react.useState)(database);
  const [currentSchema, setCurrentSchema] = (0,react.useState)(schema);
  const [currentTable, setCurrentTable] = (0,react.useState)();
  const [refresh, setRefresh] = (0,react.useState)(0);
  const [previousRefresh, setPreviousRefresh] = (0,react.useState)(0);
  const [loadingTables, setLoadingTables] = (0,react.useState)(false);
  const [tableOptions, setTableOptions] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    // reset selections
    if (database === undefined) {
      setCurrentDatabase(undefined);
      setCurrentSchema(undefined);
      setCurrentTable(undefined);
    }
  }, [database]);
  (0,react.useEffect)(() => {
    if (currentDatabase && currentSchema) {
      setLoadingTables(true);
      const encodedSchema = encodeURIComponent(currentSchema);
      const forceRefresh = refresh !== previousRefresh;
      // TODO: Would be nice to add pagination in a follow-up. Needs endpoint changes.
      const endpoint = encodeURI(`/superset/tables/${currentDatabase.id}/${encodedSchema}/undefined/${forceRefresh}/`);
      if (previousRefresh !== refresh) {
        setPreviousRefresh(refresh);
      }
      SupersetClient/* default.get */.Z.get({ endpoint }).
      then(({ json }) => {
        const options = [];
        let currentTable;
        json.options.forEach((table) => {
          const option = {
            value: table.value,
            label: (0,emotion_react_browser_esm.jsx)(TableOption, { table: table }),
            text: table.label };

          options.push(option);
          if (table.label === tableName) {
            currentTable = option;
          }
        });
        if (onTablesLoad) {
          onTablesLoad(json.options);
        }
        setTableOptions(options.sort((a, b) => a.text.localeCompare(b.text)));
        setCurrentTable(currentTable);
        setLoadingTables(false);
      }).
      catch((e) => {
        setLoadingTables(false);
        handleError((0,TranslatorSingleton.t)('There was an error loading the tables'));
      });
    }
    // We are using the refresh state to re-trigger the query
    // previousRefresh should be out of dependencies array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDatabase, currentSchema, onTablesLoad, refresh]);
  function renderSelectRow(select, refreshBtn) {
    return (0,emotion_react_browser_esm.jsx)("div", { className: "section" },
    (0,emotion_react_browser_esm.jsx)("span", { className: "select" }, select),
    (0,emotion_react_browser_esm.jsx)("span", { className: "refresh" }, refreshBtn));

  }
  const internalTableChange = (table) => {
    setCurrentTable(table);
    if (onTableChange && currentSchema) {
      onTableChange(table == null ? void 0 : table.value, currentSchema);
    }
  };
  const internalDbChange = (db) => {
    setCurrentDatabase(db);
    if (onDbChange) {
      onDbChange(db);
    }
  };
  const internalSchemaChange = (schema) => {
    setCurrentSchema(schema);
    if (onSchemaChange) {
      onSchemaChange(schema);
    }
    internalTableChange(undefined);
  };
  function renderDatabaseSelector() {
    return (0,emotion_react_browser_esm.jsx)(DatabaseSelector, { key: currentDatabase == null ? void 0 : currentDatabase.id, db: currentDatabase, formMode: formMode, getDbList: getDbList, handleError: handleError, onDbChange: readOnly ? undefined : internalDbChange, onSchemaChange: readOnly ? undefined : internalSchemaChange, onSchemasLoad: onSchemasLoad, schema: currentSchema, sqlLabMode: sqlLabMode, isDatabaseSelectEnabled: isDatabaseSelectEnabled && !readOnly, readOnly: readOnly });
  }
  const handleFilterOption = (0,react.useMemo)(() => (search, option) => {
    const searchValue = search.trim().toLowerCase();
    const { text } = option;
    return text.toLowerCase().includes(searchValue);
  }, []);
  function renderTableSelect() {
    const disabled = currentSchema && !formMode && readOnly ||
    !currentSchema && !(database != null && database.allow_multi_schema_metadata_fetch);
    const header = sqlLabMode ? (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('See table schema')) : (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Table'));
    const select = (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Select table or type table name'), disabled: disabled, filterOption: handleFilterOption, header: header, labelInValue: true, lazyLoading: false, loading: loadingTables, name: "select-table", onChange: (table) => internalTableChange(table), options: tableOptions, placeholder: (0,TranslatorSingleton.t)('Select table or type table name'), showSearch: true, value: currentTable });
    const refreshLabel = !formMode && !readOnly && (0,emotion_react_browser_esm.jsx)(components_RefreshLabel, { onClick: () => setRefresh(refresh + 1), tooltipContent: (0,TranslatorSingleton.t)('Force refresh table list') });
    return renderSelectRow(select, refreshLabel);
  }
  return (0,emotion_react_browser_esm.jsx)(TableSelectorWrapper, null,
  renderDatabaseSelector(),
  sqlLabMode && !formMode && (0,emotion_react_browser_esm.jsx)("div", { className: "divider" }),
  renderTableSelect());

};
/* harmony default export */ const components_TableSelector = (TableSelector);
;// CONCATENATED MODULE: ./src/SqlLab/components/ColumnElement/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





const ColumnElement_propTypes = {
  column: (prop_types_default()).object.isRequired };

const ColumnElement_StyledTooltip = (props) => {
  const theme = (0,style/* useTheme */.Fg)();
  return (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.ClassNames, null,
  ({ css }) => (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, extends_default()({ overlayClassName: css`
            .ant-tooltip-inner {
              max-width: ${theme.gridUnit * 125}px;
              word-wrap: break-word;
              text-align: center;

              pre {
                background: transparent;
                border: none;
                text-align: left;
                color: ${theme.colors.grayscale.light5};
                font-size: ${theme.typography.sizes.xs}px;
              }
            }
          ` }, props)));

};
const Hr = style/* styled.hr */.iK.hr`
  margin-top: ${({ theme }) => theme.gridUnit * 1.5}px;
`;
const iconMap = {
  pk: 'fa-key',
  fk: 'fa-link',
  index: 'fa-bookmark' };

const tooltipTitleMap = {
  pk: 'Primary key',
  fk: 'Foreign key',
  index: 'Index' };

function ColumnElement({ column }) {
  let columnName = column.name;
  let icons;
  if (column.keys && column.keys.length > 0) {
    columnName = (0,emotion_react_browser_esm.jsx)("strong", null, column.name);
    icons = column.keys.map((key, i) => (0,emotion_react_browser_esm.jsx)("span", { key: i, className: "ColumnElement" },
    (0,emotion_react_browser_esm.jsx)(ColumnElement_StyledTooltip, { placement: "right", title: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("strong", null, tooltipTitleMap[key.type]),
      (0,emotion_react_browser_esm.jsx)(Hr, null),
      (0,emotion_react_browser_esm.jsx)("pre", { className: "text-small" },
      JSON.stringify(key, null, '  '))) },


    (0,emotion_react_browser_esm.jsx)("i", { className: `fa text-muted m-l-2 ${iconMap[key.type]}` }))));


  }
  return (0,emotion_react_browser_esm.jsx)("div", { className: "clearfix table-column" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "pull-left m-l-10 col-name" },
  columnName,
  icons),

  (0,emotion_react_browser_esm.jsx)("div", { className: "pull-right text-muted" },
  (0,emotion_react_browser_esm.jsx)("small", null, " ", column.type)));


}
ColumnElement.propTypes = ColumnElement_propTypes;
;// CONCATENATED MODULE: ./src/SqlLab/components/ShowSQL/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






light/* default.registerLanguage */.Z.registerLanguage('sql', sql/* default */.Z);
function ShowSQL({ tooltipText, title, sql: sqlString }) {
  return (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { modalTitle: title, triggerNode: (0,emotion_react_browser_esm.jsx)(IconTooltip, { className: "fa fa-eye pull-left m-l-2", tooltip: tooltipText }), modalBody: (0,emotion_react_browser_esm.jsx)("div", null,
    (0,emotion_react_browser_esm.jsx)(light/* default */.Z, { language: "sql", style: github/* default */.Z },
    sqlString)) });


}
;// CONCATENATED MODULE: ./src/SqlLab/components/TableElement/index.tsx
function TableElement_EMOTION_STRINGIFIED_CSS_ERROR_() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */













const TableElement_StyledSpan = style/* styled.span */.iK.span`
  color: ${({ theme }) => theme.colors.primary.dark1};
  &: hover {
    color: ${({ theme }) => theme.colors.primary.dark2};
  }
  cursor: pointer;
`;
const Fade = style/* styled.div */.iK.div`
  transition: all ${({ theme }) => theme.transitionTiming}s;
  opacity: ${(props) => props.hovered ? 1 : 0};
`;var TableElement_ref =  true ? { name: "1hs1mx1", styles: "padding-top:6px" } : 0;
const TableElement = ({ table, actions, ...props }) => {
  const [sortColumns, setSortColumns] = (0,react.useState)(false);
  const [hovered, setHovered] = (0,react.useState)(false);
  const tableNameRef = react.useRef(null);
  const setHover = (hovered) => {
    debounce_default()(() => setHovered(hovered), 100)();
  };
  const removeTable = () => {
    actions.removeDataPreview(table);
    actions.removeTable(table);
  };
  const toggleSortColumns = () => {
    setSortColumns((prevState) => !prevState);
  };
  const renderWell = () => {
    let partitions;
    let metadata;
    if (table.partitions) {var _table$partitions;
      let partitionQuery;
      let partitionClipBoard;
      if (table.partitions.partitionQuery) {
        ({ partitionQuery } = table.partitions);
        const tt = (0,TranslatorSingleton.t)('Copy partition query to clipboard');
        partitionClipBoard = (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, { text: partitionQuery, shouldShowText: false, tooltipText: tt, copyNode: (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-clipboard" }) });
      }
      const latest = Object.entries(((_table$partitions = table.partitions) == null ? void 0 : _table$partitions.latest) || []).
      map(([key, value]) => `${key}=${value}`).
      join('/');
      partitions = (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)("small", null,
      (0,TranslatorSingleton.t)('latest partition:'), " ", latest),
      ' ',
      partitionClipBoard);

    }
    if (table.metadata) {
      metadata = Object.entries(table.metadata).map(([key, value]) => (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)("small", null,
      (0,emotion_react_browser_esm.jsx)("strong", null, key, ":"), " ", value)));


    }
    if (!partitions && (!metadata || !metadata.length)) {
      // hide partition and metadata card view
      return null;
    }
    return (0,emotion_react_browser_esm.jsx)(Card/* default */.Z, { size: "small" },
    partitions,
    metadata);

  };
  const renderControls = () => {var _table$indexes;
    let keyLink;
    if (table != null && (_table$indexes = table.indexes) != null && _table$indexes.length) {
      keyLink = (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { modalTitle: (0,emotion_react_browser_esm.jsx)("div", null,
        (0,TranslatorSingleton.t)('Keys for table'), " ", (0,emotion_react_browser_esm.jsx)("strong", null, table.name)),
        modalBody: table.indexes.map((ix, i) => (0,emotion_react_browser_esm.jsx)("pre", { key: i }, JSON.stringify(ix, null, '  '))), triggerNode: (0,emotion_react_browser_esm.jsx)(IconTooltip, { className: "fa fa-key pull-left m-l-2", tooltip: (0,TranslatorSingleton.t)('View keys & indexes (%s)', table.indexes.length) }) });
    }
    return (0,emotion_react_browser_esm.jsx)(ButtonGroup, { className: "ws-el-controls" },
    keyLink,
    (0,emotion_react_browser_esm.jsx)(IconTooltip, { className: `fa fa-sort-${sortColumns ? 'numeric' : 'alpha'}-asc ` +
      'pull-left sort-cols m-l-2 pointer', onClick: toggleSortColumns, tooltip: sortColumns ?
      (0,TranslatorSingleton.t)('Original table column order') :
      (0,TranslatorSingleton.t)('Sort columns alphabetically') }),
    table.selectStar && (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, { copyNode: (0,emotion_react_browser_esm.jsx)(IconTooltip, { "aria-label": "Copy", tooltip: (0,TranslatorSingleton.t)('Copy SELECT statement to the clipboard') },
      (0,emotion_react_browser_esm.jsx)("i", { "aria-hidden": true, className: "fa fa-clipboard pull-left m-l-2" })),
      text: table.selectStar, shouldShowText: false }),
    table.view && (0,emotion_react_browser_esm.jsx)(ShowSQL, { sql: table.view, tooltipText: (0,TranslatorSingleton.t)('Show CREATE VIEW statement'), title: (0,TranslatorSingleton.t)('CREATE VIEW statement') }),
    (0,emotion_react_browser_esm.jsx)(IconTooltip, { className: "fa fa-times table-remove pull-left m-l-2 pointer", onClick: removeTable, tooltip: (0,TranslatorSingleton.t)('Remove table preview') }));

  };
  const renderHeader = () => {
    const element = tableNameRef.current;
    let trigger = [];
    if (element && element.offsetWidth < element.scrollWidth) {
      trigger = ['hover'];
    }
    return (0,emotion_react_browser_esm.jsx)("div", { className: "clearfix header-container", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) },
    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "copy-to-clipboard-tooltip", style: { cursor: 'pointer' }, title: table.name, trigger: trigger },
    (0,emotion_react_browser_esm.jsx)(TableElement_StyledSpan, { ref: tableNameRef, className: "table-name" },
    (0,emotion_react_browser_esm.jsx)("strong", null, table.name))),



    (0,emotion_react_browser_esm.jsx)("div", { className: "pull-right header-right-side" },
    table.isMetadataLoading || table.isExtraMetadataLoading ? (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, { position: "inline" }) : (0,emotion_react_browser_esm.jsx)(Fade, { hovered: hovered, onClick: (e) => e.stopPropagation() },
    renderControls())));



  };
  const renderBody = () => {var _cols;
    let cols;
    if (table.columns) {
      cols = table.columns.slice();
      if (sortColumns) {
        cols.sort((a, b) => {
          const colA = a.name.toUpperCase();
          const colB = b.name.toUpperCase();
          return colA < colB ? -1 : colA > colB ? 1 : 0;
        });
      }
    }
    const metadata = (0,emotion_react_browser_esm.jsx)("div", { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), css: TableElement_ref },
    renderWell(),
    (0,emotion_react_browser_esm.jsx)("div", null, (_cols =
    cols) == null ? void 0 : _cols.map((col) => (0,emotion_react_browser_esm.jsx)(ColumnElement, { column: col, key: col.name }))));


    return metadata;
  };
  return (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, extends_default()({}, props, { key: table.id, header: renderHeader(), className: "TableElement", forceRender: true }),
  renderBody());

};
/* harmony default export */ const components_TableElement = (TableElement);
;// CONCATENATED MODULE: ./src/SqlLab/components/SqlEditorLeftBar/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










const SqlEditorLeftBar_propTypes = {
  queryEditor: (prop_types_default()).object.isRequired,
  height: (prop_types_default()).number,
  tables: (prop_types_default()).array,
  actions: (prop_types_default()).object,
  database: (prop_types_default()).object,
  offline: (prop_types_default()).bool };


const SqlEditorLeftBar_defaultProps = {
  actions: {},
  height: 500,
  offline: false,
  tables: [] };


const StyledScrollbarContainer = style/* styled.div */.iK.div`
  flex: 1 1 auto;
  overflow: auto;
`;

const StyledScrollbarContent = style/* styled.div */.iK.div`
  height: ${(props) => props.contentHeight}px;
`;

class SqlEditorLeftBar extends react.PureComponent {
  constructor(props) {
    super(props);this.
























































































    renderExpandIconWithTooltip = ({ isActive }) =>
    (0,emotion_react_browser_esm.jsx)(IconTooltip, {
      css: emotion_react_browser_esm.css`
        transform: rotate(90deg);
      `,
      "aria-label": "Collapse",
      tooltip: (0,TranslatorSingleton.t)(`${isActive ? 'Collapse' : 'Expand'} table preview`) },

    (0,emotion_react_browser_esm.jsx)(Icons/* default.RightOutlined */.Z.RightOutlined, {
      iconSize: "s",
      css: emotion_react_browser_esm.css`
          transform: ${isActive ? 'rotateY(180deg)' : ''};
        ` }));this.resetState = this.resetState.bind(this);this.onSchemaChange = this.onSchemaChange.bind(this);this.onSchemasLoad = this.onSchemasLoad.bind(this);this.onTablesLoad = this.onTablesLoad.bind(this);this.onDbChange = this.onDbChange.bind(this);this.getDbList = this.getDbList.bind(this);this.onTableChange = this.onTableChange.bind(this);this.onToggleTable = this.onToggleTable.bind(this);}onSchemaChange(schema) {this.props.actions.queryEditorSetSchema(this.props.queryEditor, schema);}onSchemasLoad(schemas) {this.props.actions.queryEditorSetSchemaOptions(this.props.queryEditor, schemas);}onTablesLoad(tables) {this.props.actions.queryEditorSetTableOptions(this.props.queryEditor, tables);}onDbChange(db) {this.props.actions.queryEditorSetDb(this.props.queryEditor, db.id);this.props.actions.queryEditorSetFunctionNames(this.props.queryEditor, db.id);}onTableChange(tableName, schemaName) {if (tableName && schemaName) {this.props.actions.addTable(this.props.queryEditor, tableName, schemaName);}}onToggleTable(tables) {this.props.tables.forEach((table) => {if (!tables.includes(table.id.toString()) && table.expanded) {this.props.actions.collapseTable(table);} else if (tables.includes(table.id.toString()) && !table.expanded) {this.props.actions.expandTable(table);}});}getDbList(dbs) {this.props.actions.setDatabases(dbs);}dbMutator(data) {const options = data.result.map((db) => ({ value: db.id, label: db.database_name }));this.props.actions.setDatabases(data.result);if (data.result.length === 0) {this.props.actions.addDangerToast((0,TranslatorSingleton.t)("It seems you don't have access to any database"));}return options;}resetState() {this.props.actions.resetState();}changeTable(tableOpt) {if (!tableOpt) {return;}const schemaName = tableOpt.value.schema;const tableName = tableOpt.value.table;this.props.actions.queryEditorSetSchema(this.props.queryEditor, schemaName);this.props.actions.addTable(this.props.queryEditor, tableName, schemaName);}




  render() {
    const shouldShowReset = window.location.search === '?reset=1';
    const tableMetaDataHeight = this.props.height - 130; // 130 is the height of the selects above
    const qe = this.props.queryEditor;
    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "SqlEditorLeftBar" },
      (0,emotion_react_browser_esm.jsx)(components_TableSelector, {
        database: this.props.database,
        dbId: qe.dbId,
        getDbList: this.getDbList,
        handleError: this.props.actions.addDangerToast,
        onDbChange: this.onDbChange,
        onSchemaChange: this.onSchemaChange,
        onSchemasLoad: this.onSchemasLoad,
        onTableChange: this.onTableChange,
        onTablesLoad: this.onTablesLoad,
        schema: qe.schema,
        sqlLabMode: true }),

      (0,emotion_react_browser_esm.jsx)("div", { className: "divider" }),
      (0,emotion_react_browser_esm.jsx)(StyledScrollbarContainer, null,
      (0,emotion_react_browser_esm.jsx)(StyledScrollbarContent, { contentHeight: tableMetaDataHeight },
      (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, {
        activeKey: this.props.tables.
        filter(({ expanded }) => expanded).
        map(({ id }) => id),
        css: (theme) => emotion_react_browser_esm.css`
                .ant-collapse-item {
                  margin-bottom: ${theme.gridUnit * 3}px;
                }
                .ant-collapse-header {
                  padding: 0px !important;
                  display: flex;
                  align-items: center;
                }
                .ant-collapse-content-box {
                  padding: 0px ${theme.gridUnit * 4}px 0px 0px !important;
                }
                .ant-collapse-arrow {
                  top: ${theme.gridUnit * 2}px !important;
                  color: ${theme.colors.primary.dark1} !important;
                  &: hover {
                    color: ${theme.colors.primary.dark2} !important;
                  }
                }
              `,
        expandIconPosition: "right",
        ghost: true,
        onChange: this.onToggleTable,
        expandIcon: this.renderExpandIconWithTooltip },

      this.props.tables.map((table) =>
      (0,emotion_react_browser_esm.jsx)(components_TableElement, {
        table: table,
        key: table.id,
        actions: this.props.actions }))))),





      shouldShowReset &&
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "danger",
        onClick: this.resetState },

      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-bomb" }), " ", (0,TranslatorSingleton.t)('Reset state'))));




  }}


SqlEditorLeftBar.propTypes = SqlEditorLeftBar_propTypes;
SqlEditorLeftBar.defaultProps = SqlEditorLeftBar_defaultProps;
// EXTERNAL MODULE: ./src/SqlLab/utils/sqlKeywords.ts
var sqlKeywords = __webpack_require__(33313);
;// CONCATENATED MODULE: ./src/SqlLab/components/AceEditorWrapper/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





class AceEditorWrapper extends react.PureComponent {








  constructor(props) {
    super(props);
    this.state = {
      sql: props.sql,
      selectedText: '',
      words: [] };

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    // Making sure no text is selected from previous mount
    this.props.actions.queryEditorSetSelectedText(this.props.queryEditor, null);
    if (this.props.queryEditor.dbId) {
      this.props.actions.queryEditorSetFunctionNames(this.props.queryEditor, this.props.queryEditor.dbId);
    }
    this.setAutoCompleter(this.props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!(0,reduxUtils/* areArraysShallowEqual */.E8)(this.props.tables, nextProps.tables) ||
    !(0,reduxUtils/* areArraysShallowEqual */.E8)(this.props.schemas, nextProps.schemas) ||
    !(0,reduxUtils/* areArraysShallowEqual */.E8)(this.props.extendedTables, nextProps.extendedTables)) {
      this.setAutoCompleter(nextProps);
    }
    if (nextProps.sql !== this.props.sql) {
      this.setState({ sql: nextProps.sql });
    }
  }
  onBlur() {
    this.props.onBlur(this.state.sql);
  }
  onAltEnter() {
    this.props.onBlur(this.state.sql);
  }
  onEditorLoad(editor) {
    editor.commands.addCommand({
      name: 'runQuery',
      bindKey: { win: 'Alt-enter', mac: 'Alt-enter' },
      exec: () => {
        this.onAltEnter();
      } });

    this.props.hotkeys.forEach((keyConfig) => {
      editor.commands.addCommand({
        name: keyConfig.name,
        bindKey: { win: keyConfig.key, mac: keyConfig.key },
        exec: keyConfig.func });

    });
    editor.$blockScrolling = Infinity; // eslint-disable-line no-param-reassign
    editor.selection.on('changeSelection', () => {
      const selectedText = editor.getSelectedText();
      // Backspace trigger 1 character selection, ignoring
      if (selectedText !== this.state.selectedText &&
      selectedText.length !== 1) {
        this.setState({ selectedText });
        this.props.actions.queryEditorSetSelectedText(this.props.queryEditor, selectedText);
      }
    });
  }
  onChange(text) {
    this.setState({ sql: text });
    this.props.onChange(text);
  }
  setAutoCompleter(props) {
    // Loading schema, table and column names as auto-completable words
    const schemas = props.schemas || [];
    const schemaWords = schemas.map((s) => ({
      name: s.label,
      value: s.value,
      score: constants/* SCHEMA_AUTOCOMPLETE_SCORE */.iJ,
      meta: 'schema' }));

    const columns = {};
    const tables = props.tables || [];
    const extendedTables = props.extendedTables || [];
    const tableWords = tables.map((t) => {
      const tableName = t.value;
      const extendedTable = extendedTables.find((et) => et.name === tableName);
      const cols = extendedTable && extendedTable.columns || [];
      cols.forEach((col) => {
        columns[col.name] = null; // using an object as a unique set
      });
      return {
        name: t.label,
        value: tableName,
        score: constants/* TABLE_AUTOCOMPLETE_SCORE */.lr,
        meta: 'table' };

    });
    const columnWords = Object.keys(columns).map((col) => ({
      name: col,
      value: col,
      score: constants/* COLUMN_AUTOCOMPLETE_SCORE */.OI,
      meta: 'column' }));

    const functionWords = props.functionNames.map((func) => ({
      name: func,
      value: func,
      score: constants/* SQL_FUNCTIONS_AUTOCOMPLETE_SCORE */.GJ,
      meta: 'function' }));

    const completer = {
      insertMatch: (editor, data) => {
        if (data.meta === 'table') {
          this.props.actions.addTable(this.props.queryEditor, data.value, this.props.queryEditor.schema);
        }
        // executing https://github.com/thlorenz/brace/blob/3a00c5d59777f9d826841178e1eb36694177f5e6/ext/language_tools.js#L1448
        editor.completer.insertMatch(`${data.caption}${['function', 'schema'].includes(data.meta) ? '' : ' '}`);
      } };

    const words = schemaWords.
    concat(tableWords).
    concat(columnWords).
    concat(functionWords).
    concat(sqlKeywords/* default */.Z).
    map((word) => ({
      ...word,
      completer }));

    this.setState({ words });
  }
  getAceAnnotations() {var _validationResult$err;
    const { validationResult } = this.props.queryEditor;
    const resultIsReady = validationResult == null ? void 0 : validationResult.completed;
    if (resultIsReady && validationResult != null && (_validationResult$err = validationResult.errors) != null && _validationResult$err.length) {
      const errors = validationResult.errors.map((err) => ({
        type: 'error',
        row: err.line_number - 1,
        column: err.start_column - 1,
        text: err.message }));

      return errors;
    }
    return [];
  }
  render() {
    return (0,emotion_react_browser_esm.jsx)(AsyncAceEditor/* FullSQLEditor */.up, { keywords: this.state.words, onLoad: this.onEditorLoad.bind(this), onBlur: this.onBlur.bind(this), height: this.props.height, onChange: this.onChange, width: "100%", editorProps: { $blockScrolling: true }, enableLiveAutocompletion: this.props.autocomplete, value: this.state.sql, annotations: this.getAceAnnotations() });
  }}AceEditorWrapper.defaultProps = { onBlur: () => {}, onChange: () => {}, schemas: [], tables: [], functionNames: [], extendedTables: [] };

/* harmony default export */ const components_AceEditorWrapper = (AceEditorWrapper);
// EXTERNAL MODULE: ./node_modules/lodash/kebabCase.js
var kebabCase = __webpack_require__(21804);
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase);
;// CONCATENATED MODULE: ./src/components/DropdownButton/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const StyledDropdownButton = style/* styled.div */.iK.div`
  .ant-btn-group {
    button.ant-btn {
      background-color: ${({ theme }) => theme.colors.primary.dark1};
      border-color: transparent;
      color: ${({ theme }) => theme.colors.grayscale.light5};
      font-size: 12px;
      line-height: 13px;
      outline: none;
      text-transform: uppercase;
      &:first-of-type {
        border-radius: ${({ theme }) => `${theme.gridUnit}px 0 0 ${theme.gridUnit}px`};
        margin: 0;
        width: 120px;
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.grayscale.light2};
        color: ${({ theme }) => theme.colors.grayscale.base};
      }
      &:nth-child(2) {
        margin: 0;
        border-radius: ${({ theme }) => `0 ${theme.gridUnit}px ${theme.gridUnit}px 0`};
        width: ${({ theme }) => theme.gridUnit * 9}px;
        &:before,
        &:hover:before {
          border-left: 1px solid ${({ theme }) => theme.colors.grayscale.light5};
          content: '';
          display: block;
          height: 23px;
          margin: 0;
          position: absolute;
          top: ${({ theme }) => theme.gridUnit * 0.75}px;
          width: ${({ theme }) => theme.gridUnit * 0.25}px;
        }

        &:disabled:before {
          border-left: 1px solid ${({ theme }) => theme.colors.grayscale.base};
        }
      }
    }
  }
`;
const DropdownButton = ({ overlay, tooltip, placement, ...rest }) => {
  const buildButton = (props = {}) => (0,emotion_react_browser_esm.jsx)(StyledDropdownButton, null,
  (0,emotion_react_browser_esm.jsx)(components/* Dropdown.Button */.Lt.Button, extends_default()({ overlay: overlay }, rest, props)));

  if (tooltip) {
    return buildButton({
      buttonsRender: ([leftButton, rightButton]) => [
      (0,emotion_react_browser_esm.jsx)(components/* Tooltip */.u, { placement: placement, id: `${kebabCase_default()(tooltip)}-tooltip`, title: tooltip },
      leftButton),

      rightButton] });


  }
  return buildButton();
};
;// CONCATENATED MODULE: ./src/SqlLab/components/RunQueryActionButton/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





const buildText = (shouldShowStopButton, selectedText) => {
  if (shouldShowStopButton) {
    return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-stop" }), " ", (0,TranslatorSingleton.t)('Stop'));

  }
  if (selectedText) {
    return (0,TranslatorSingleton.t)('Run selection');
  }
  return (0,TranslatorSingleton.t)('Run');
};
const onClick = (shouldShowStopButton, allowAsync, runQuery = () => undefined, stopQuery = () => {}) => {
  if (shouldShowStopButton)
  return stopQuery();
  if (allowAsync) {
    return runQuery(true);
  }
  return runQuery(false);
};
const StyledButton = style/* styled.span */.iK.span`
  button {
    line-height: 13px;
    // this is to over ride a previous transition built into the component
    transition: background-color 0ms;
    &:last-of-type {
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }
    span[name='caret-down'] {
      display: flex;
      margin-right: ${({ theme }) => theme.gridUnit * -2}px;
    }
  }
`;
const RunQueryActionButton = ({ allowAsync = false, queryState, selectedText, sql = '', overlayCreateAsMenu, runQuery, stopQuery }) => {
  const shouldShowStopBtn = !!queryState && ['running', 'pending'].indexOf(queryState) > -1;
  const ButtonComponent = overlayCreateAsMenu ?
  DropdownButton :
  Button/* default */.Z;
  const isDisabled = !sql.trim();
  return (0,emotion_react_browser_esm.jsx)(StyledButton, null,
  (0,emotion_react_browser_esm.jsx)(ButtonComponent, extends_default()({ onClick: () => onClick(shouldShowStopBtn, allowAsync, runQuery, stopQuery), disabled: isDisabled, tooltip: !isDisabled && (
    shouldShowStopBtn ?
    (0,TranslatorSingleton.t)('Stop running (Ctrl + x)') :
    (0,TranslatorSingleton.t)('Run query (Ctrl + Return)')), cta: true }, overlayCreateAsMenu ?
  {
    overlay: overlayCreateAsMenu,
    icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.CaretDown */.Z.CaretDown, { iconColor: isDisabled ?
      style/* supersetTheme.colors.grayscale.base */.K6.colors.grayscale.base :
      style/* supersetTheme.colors.grayscale.light5 */.K6.colors.grayscale.light5, name: "caret-down" }),
    trigger: 'click' } :

  { buttonStyle: 'primary' }),
  buildText(shouldShowStopBtn, selectedText)));


};
/* harmony default export */ const components_RunQueryActionButton = (RunQueryActionButton);
;// CONCATENATED MODULE: ./src/SqlLab/components/SqlEditor/index.jsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */





























const LIMIT_DROPDOWN = [10, 100, 1000, 10000, 100000];
const SQL_EDITOR_PADDING = 10;
const INITIAL_NORTH_PERCENT = 30;
const INITIAL_SOUTH_PERCENT = 70;
const SET_QUERY_EDITOR_SQL_DEBOUNCE_MS = 2000;
const VALIDATION_DEBOUNCE_MS = 600;
const WINDOW_RESIZE_THROTTLE_MS = 100;

const LimitSelectStyled = style/* styled.span */.iK.span`
  .ant-dropdown-trigger {
    align-items: center;
    color: black;
    display: flex;
    font-size: 12px;
    margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    text-decoration: none;
    span {
      display: inline-block;
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
      &:last-of-type: {
        margin-right: ${({ theme }) => theme.gridUnit * 4}px;
      }
    }
  }
`;

const StyledToolbar = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit * 2}px;
  background-color: @lightest;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${style/* supersetTheme.colors.grayscale.light2 */.K6.colors.grayscale.light2};
  border-top: 0;

  form {
    margin-block-end: 0;
  }

  .leftItems,
  .rightItems {
    display: flex;
    align-items: center;
    & > span {
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
      display: inline-block;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const SqlEditor_propTypes = {
  actions: (prop_types_default()).object.isRequired,
  database: (prop_types_default()).object,
  latestQuery: (prop_types_default()).object,
  tables: (prop_types_default()).array.isRequired,
  editorQueries: (prop_types_default()).array.isRequired,
  dataPreviewQueries: (prop_types_default()).array.isRequired,
  queryEditorId: (prop_types_default()).string.isRequired,
  hideLeftBar: (prop_types_default()).bool,
  defaultQueryLimit: (prop_types_default()).number.isRequired,
  maxRow: (prop_types_default()).number.isRequired,
  displayLimit: (prop_types_default()).number.isRequired,
  saveQueryWarning: (prop_types_default()).string,
  scheduleQueryWarning: (prop_types_default()).string };


const SqlEditor_defaultProps = {
  database: null,
  latestQuery: null,
  hideLeftBar: false,
  scheduleQueryWarning: null };


class SqlEditor extends react.PureComponent {
  constructor(props) {
    super(props);this.








































































































































































































    handleToggleAutocompleteEnabled = () => {
      this.setState((prevState) => ({
        autocompleteEnabled: !prevState.autocompleteEnabled }));

    };this.state = { autorun: props.queryEditor.autorun, ctas: '', northPercent: props.queryEditor.northPercent || INITIAL_NORTH_PERCENT, southPercent: props.queryEditor.southPercent || INITIAL_SOUTH_PERCENT, sql: props.queryEditor.sql, autocompleteEnabled: true, showCreateAsModal: false, createAs: '' };this.sqlEditorRef = /*#__PURE__*/react.createRef();this.northPaneRef = /*#__PURE__*/react.createRef();this.elementStyle = this.elementStyle.bind(this);this.onResizeStart = this.onResizeStart.bind(this);this.onResizeEnd = this.onResizeEnd.bind(this);this.canValidateQuery = this.canValidateQuery.bind(this);this.runQuery = this.runQuery.bind(this);this.stopQuery = this.stopQuery.bind(this);this.onSqlChanged = this.onSqlChanged.bind(this);this.setQueryEditorSql = this.setQueryEditorSql.bind(this);this.setQueryEditorSqlWithDebounce = debounce_default()(this.setQueryEditorSql.bind(this), SET_QUERY_EDITOR_SQL_DEBOUNCE_MS);this.queryPane = this.queryPane.bind(this);this.renderQueryLimit = this.renderQueryLimit.bind(this);this.getAceEditorAndSouthPaneHeights = this.getAceEditorAndSouthPaneHeights.bind(this);this.getSqlEditorHeight = this.getSqlEditorHeight.bind(this);this.requestValidation = debounce_default()(this.requestValidation.bind(this), VALIDATION_DEBOUNCE_MS);this.getQueryCostEstimate = this.getQueryCostEstimate.bind(this);this.handleWindowResize = throttle_default()(this.handleWindowResize.bind(this), WINDOW_RESIZE_THROTTLE_MS);this.onBeforeUnload = this.onBeforeUnload.bind(this);this.renderDropdown = this.renderDropdown.bind(this);}UNSAFE_componentWillMount() {if (this.state.autorun) {this.setState({ autorun: false });this.props.queryEditorSetAutorun(this.props.queryEditor, false);this.startQuery();}}componentDidMount() {// We need to measure the height of the sql editor post render to figure the height of
    // the south pane so it gets rendered properly
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ height: this.getSqlEditorHeight() });window.addEventListener('resize', this.handleWindowResize);window.addEventListener('beforeunload', this.onBeforeUnload); // setup hotkeys
    const hotkeys = this.getHotkeyConfig();hotkeys.forEach((keyConfig) => {mousetrap_default().bind([keyConfig.key], keyConfig.func);});}componentWillUnmount() {window.removeEventListener('resize', this.handleWindowResize);window.removeEventListener('beforeunload', this.onBeforeUnload);}onResizeStart() {// Set the heights on the ace editor and the ace content area after drag starts
    // to smooth out the visual transition to the new heights when drag ends
    document.getElementsByClassName('ace_content')[0].style.height = '100%';}onResizeEnd([northPercent, southPercent]) {this.setState({ northPercent, southPercent });if (this.northPaneRef.current && this.northPaneRef.current.clientHeight) {this.props.persistEditorHeight(this.props.queryEditor, northPercent, southPercent);}}onBeforeUnload(event) {var _this$props$database, _this$props$database$, _this$props$latestQue;if ((_this$props$database = this.props.database) != null && (_this$props$database$ = _this$props$database.extra_json) != null && _this$props$database$.cancel_query_on_windows_unload && ((_this$props$latestQue = this.props.latestQuery) == null ? void 0 : _this$props$latestQue.state) === 'running') {event.preventDefault();this.stopQuery();}}onSqlChanged(sql) {this.setState({ sql });this.setQueryEditorSqlWithDebounce(sql); // Request server-side validation of the query text
    if (this.canValidateQuery()) {// NB. requestValidation is debounced
      this.requestValidation();}} // One layer of abstraction for easy spying in unit tests
  getSqlEditorHeight() {return this.sqlEditorRef.current ? this.sqlEditorRef.current.clientHeight - SQL_EDITOR_PADDING * 2 : 0;} // Return the heights for the ace editor and the south pane as an object
  // given the height of the sql editor, north pane percent and south pane percent.
  getAceEditorAndSouthPaneHeights(height, northPercent, southPercent) {return { aceEditorHeight: height * northPercent / 100 - (constants/* SQL_EDITOR_GUTTER_HEIGHT */.eU / 2 + constants/* SQL_EDITOR_GUTTER_MARGIN */.ev) - constants/* SQL_TOOLBAR_HEIGHT */.rp, southPaneHeight: height * southPercent / 100 - (constants/* SQL_EDITOR_GUTTER_HEIGHT */.eU / 2 + constants/* SQL_EDITOR_GUTTER_MARGIN */.ev) };}getHotkeyConfig() {// Get the user's OS
    const userOS = (0,common/* detectOS */.fV)();return [{ name: 'runQuery1', key: 'ctrl+r', descr: (0,TranslatorSingleton.t)('Run query'), func: () => {if (this.state.sql.trim() !== '') {this.runQuery();}} }, { name: 'runQuery2', key: 'ctrl+enter', descr: (0,TranslatorSingleton.t)('Run query'), func: () => {if (this.state.sql.trim() !== '') {this.runQuery();}} }, { name: 'newTab', key: userOS === 'Windows' ? 'ctrl+q' : 'ctrl+t', descr: (0,TranslatorSingleton.t)('New tab'), func: () => {this.props.addQueryEditor({ ...this.props.queryEditor, title: (0,TranslatorSingleton.t)('Untitled query'), sql: '' });} }, { name: 'stopQuery', key: 'ctrl+x', descr: (0,TranslatorSingleton.t)('Stop query'), func: this.stopQuery }];}setQueryEditorSql(sql) {this.props.queryEditorSetSql(this.props.queryEditor, sql);}setQueryLimit(queryLimit) {this.props.queryEditorSetQueryLimit(this.props.queryEditor, queryLimit);}getQueryCostEstimate() {if (this.props.database) {const qe = this.props.queryEditor;const query = { dbId: qe.dbId, sql: qe.selectedText ? qe.selectedText : this.state.sql, sqlEditorId: qe.id, schema: qe.schema, templateParams: qe.templateParams };this.props.estimateQueryCost(query);}}handleWindowResize() {this.setState({ height: this.getSqlEditorHeight() });}elementStyle(dimension, elementSize, gutterSize) {return { [dimension]: `calc(${elementSize}% - ${gutterSize + constants/* SQL_EDITOR_GUTTER_MARGIN */.ev}px)` };}

  requestValidation() {
    if (this.props.database) {
      const qe = this.props.queryEditor;
      const query = {
        dbId: qe.dbId,
        sql: this.state.sql,
        sqlEditorId: qe.id,
        schema: qe.schema,
        templateParams: qe.templateParams };

      this.props.validateQuery(query);
    }
  }

  canValidateQuery() {
    // Check whether or not we can validate the current query based on whether
    // or not the backend has a validator configured for it.
    const validatorMap = window.featureFlags.SQL_VALIDATORS_BY_ENGINE;
    if (this.props.database && validatorMap != null) {
      return validatorMap.hasOwnProperty(this.props.database.backend);
    }
    return false;
  }

  runQuery() {
    if (this.props.database) {
      this.startQuery();
    }
  }

  convertToNumWithSpaces(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  startQuery(ctas = false, ctas_method = CtasEnum.TABLE) {
    const qe = this.props.queryEditor;
    const query = {
      dbId: qe.dbId,
      sql: qe.selectedText ? qe.selectedText : this.state.sql,
      sqlEditorId: qe.id,
      tab: qe.title,
      schema: qe.schema,
      tempTable: ctas ? this.state.ctas : '',
      templateParams: qe.templateParams,
      queryLimit: qe.queryLimit || this.props.defaultQueryLimit,
      runAsync: this.props.database ?
      this.props.database.allow_run_async :
      false,
      ctas,
      ctas_method,
      updateTabState: !qe.selectedText };

    this.props.runQuery(query);
    this.props.setActiveSouthPaneTab('Results');
  }

  stopQuery() {
    if (
    this.props.latestQuery &&
    ['running', 'pending'].indexOf(this.props.latestQuery.state) >= 0)
    {
      this.props.postStopQuery(this.props.latestQuery);
    }
  }

  createTableAs() {
    this.startQuery(true, CtasEnum.TABLE);
    this.setState({ showCreateAsModal: false, ctas: '' });
  }

  createViewAs() {
    this.startQuery(true, CtasEnum.VIEW);
    this.setState({ showCreateAsModal: false, ctas: '' });
  }

  ctasChanged(event) {
    this.setState({ ctas: event.target.value });
  }

  queryPane() {
    const hotkeys = this.getHotkeyConfig();
    const {
      aceEditorHeight,
      southPaneHeight } =
    this.getAceEditorAndSouthPaneHeights(
    this.state.height,
    this.state.northPercent,
    this.state.southPercent);

    return (
      (0,emotion_react_browser_esm.jsx)(react_split_es/* default */.Z, {
        expandToMin: true,
        className: "queryPane",
        sizes: [this.state.northPercent, this.state.southPercent],
        elementStyle: this.elementStyle,
        minSize: 200,
        direction: "vertical",
        gutterSize: constants/* SQL_EDITOR_GUTTER_HEIGHT */.eU,
        onDragStart: this.onResizeStart,
        onDragEnd: this.onResizeEnd },

      (0,emotion_react_browser_esm.jsx)("div", { ref: this.northPaneRef, className: "north-pane" },
      (0,emotion_react_browser_esm.jsx)(components_AceEditorWrapper, {
        actions: this.props.actions,
        autocomplete: this.state.autocompleteEnabled,
        onBlur: this.setQueryEditorSql,
        onChange: this.onSqlChanged,
        queryEditor: this.props.queryEditor,
        sql: this.props.queryEditor.sql,
        schemas: this.props.queryEditor.schemaOptions,
        tables: this.props.queryEditor.tableOptions,
        functionNames: this.props.queryEditor.functionNames,
        extendedTables: this.props.tables,
        height: `${aceEditorHeight}px`,
        hotkeys: hotkeys }),

      this.renderEditorBottomBar(hotkeys)),

      (0,emotion_react_browser_esm.jsx)(state, {
        editorQueries: this.props.editorQueries,
        latestQueryId: this.props.latestQuery && this.props.latestQuery.id,
        dataPreviewQueries: this.props.dataPreviewQueries,
        actions: this.props.actions,
        height: southPaneHeight,
        displayLimit: this.props.displayLimit,
        defaultQueryLimit: this.props.defaultQueryLimit })));



  }

  renderDropdown() {var _this$props$latestQue2;
    const qe = this.props.queryEditor;
    const successful = ((_this$props$latestQue2 = this.props.latestQuery) == null ? void 0 : _this$props$latestQue2.state) === 'success';
    const scheduleToolTip = successful ?
    (0,TranslatorSingleton.t)('Schedule the query periodically') :
    (0,TranslatorSingleton.t)('You must run the query successfully first');
    return (
      (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, { onClick: this.handleMenuClick, style: { width: 176 } },
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { style: { display: 'flex', justifyContent: 'space-between' } },
      ' ',
      (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Autocomplete')), ' ',
      (0,emotion_react_browser_esm.jsx)(components/* Switch */.rs, {
        checked: this.state.autocompleteEnabled,
        onChange: this.handleToggleAutocompleteEnabled,
        name: "autocomplete-switch" }),
      ' '),

      (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ENABLE_TEMPLATE_PROCESSING */.T.ENABLE_TEMPLATE_PROCESSING) &&
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, null,
      (0,emotion_react_browser_esm.jsx)(components_TemplateParamsEditor, {
        language: "json",
        onChange: (params) => {
          this.props.actions.queryEditorSetTemplateParams(qe, params);
        },
        code: qe.templateParams })),



      (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SCHEDULED_QUERIES */.T.SCHEDULED_QUERIES) &&
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, null,
      (0,emotion_react_browser_esm.jsx)(components_ScheduleQueryButton, {
        defaultLabel: qe.title,
        sql: qe.sql,
        onSchedule: this.props.actions.scheduleQuery,
        schema: qe.schema,
        dbId: qe.dbId,
        scheduleQueryWarning: this.props.scheduleQueryWarning,
        tooltip: scheduleToolTip,
        disabled: !successful }))));





  }

  renderQueryLimit() {
    // Adding SQL_MAX_ROW value to dropdown
    const { maxRow } = this.props;
    LIMIT_DROPDOWN.push(maxRow);

    return (
      (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, null,
      [...new Set(LIMIT_DROPDOWN)].map((limit) =>
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, {
        key: `${limit}`,
        onClick: () => this.setQueryLimit(limit) },


      (0,emotion_react_browser_esm.jsx)("a", { role: "button", styling: "link" },
      this.convertToNumWithSpaces(limit)),
      ' '))));




  }

  renderEditorBottomBar() {var _this$props$latestQue3;
    const { queryEditor: qe } = this.props;

    const { allow_ctas: allowCTAS, allow_cvas: allowCVAS } =
    this.props.database || {};

    const showMenu = allowCTAS || allowCVAS;
    const { theme } = this.props;
    const runMenuBtn =
    (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, null,
    allowCTAS &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, {
      onClick: () => {
        this.setState({
          showCreateAsModal: true,
          createAs: CtasEnum.TABLE });

      },
      key: "1" },

    (0,TranslatorSingleton.t)('CREATE TABLE AS')),


    allowCVAS &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, {
      onClick: () => {
        this.setState({
          showCreateAsModal: true,
          createAs: CtasEnum.VIEW });

      },
      key: "2" },

    (0,TranslatorSingleton.t)('CREATE VIEW AS')));




    return (
      (0,emotion_react_browser_esm.jsx)(StyledToolbar, { className: "sql-toolbar", id: "js-sql-toolbar" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "leftItems" },
      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,emotion_react_browser_esm.jsx)(components_RunQueryActionButton, {
        allowAsync:
        this.props.database ?
        this.props.database.allow_run_async :
        false,

        queryState: (_this$props$latestQue3 = this.props.latestQuery) == null ? void 0 : _this$props$latestQue3.state,
        runQuery: this.runQuery,
        selectedText: qe.selectedText,
        stopQuery: this.stopQuery,
        sql: this.state.sql,
        overlayCreateAsMenu: showMenu ? runMenuBtn : null })),


      (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ESTIMATE_QUERY_COST */.T.ESTIMATE_QUERY_COST) &&
      this.props.database &&
      this.props.database.allows_cost_estimate &&
      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,emotion_react_browser_esm.jsx)(components_EstimateQueryCostButton, {
        dbId: qe.dbId,
        schema: qe.schema,
        sql: qe.sql,
        getEstimate: this.getQueryCostEstimate,
        queryCostEstimate: qe.queryCostEstimate,
        selectedText: qe.selectedText,
        tooltip: (0,TranslatorSingleton.t)('Estimate the cost before running a query') })),



      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,emotion_react_browser_esm.jsx)(LimitSelectStyled, null,
      (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, { overlay: this.renderQueryLimit(), trigger: "click" },
      (0,emotion_react_browser_esm.jsx)("a", { onClick: (e) => e.preventDefault() },
      (0,emotion_react_browser_esm.jsx)("span", null, "LIMIT:"),
      (0,emotion_react_browser_esm.jsx)("span", null,
      this.convertToNumWithSpaces(
      this.props.queryEditor.queryLimit ||
      this.props.defaultQueryLimit)),


      (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, { iconColor: theme.colors.grayscale.base }))))),




      this.props.latestQuery &&
      (0,emotion_react_browser_esm.jsx)(Timer, {
        startTime: this.props.latestQuery.startDttm,
        endTime: this.props.latestQuery.endDttm,
        state: constants/* STATE_TYPE_MAP */.IY[this.props.latestQuery.state],
        isRunning: this.props.latestQuery.state === 'running' })),



      (0,emotion_react_browser_esm.jsx)("div", { className: "rightItems" },
      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,emotion_react_browser_esm.jsx)(SaveQuery, {
        query: qe,
        defaultLabel: qe.title || qe.description,
        onSave: this.props.actions.saveQuery,
        onUpdate: this.props.actions.updateSavedQuery,
        saveQueryWarning: this.props.saveQueryWarning })),


      (0,emotion_react_browser_esm.jsx)("span", null,
      (0,emotion_react_browser_esm.jsx)(components_ShareSqlLabQuery, { queryEditor: qe })),

      (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, { overlay: this.renderDropdown(), trigger: "click" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.MoreHoriz */.Z.MoreHoriz, { iconColor: theme.colors.grayscale.base })))));




  }

  render() {
    const createViewModalTitle =
    this.state.createAs === CtasEnum.VIEW ?
    'CREATE VIEW AS' :
    'CREATE TABLE AS';

    const createModalPlaceHolder =
    this.state.createAs === CtasEnum.VIEW ?
    'Specify name to CREATE VIEW AS schema in: public' :
    'Specify name to CREATE TABLE AS schema in: public';

    const leftBarStateClass = this.props.hideLeftBar ?
    'schemaPane-exit-done' :
    'schemaPane-enter-done';
    return (
      (0,emotion_react_browser_esm.jsx)("div", { ref: this.sqlEditorRef, className: "SqlEditor" },
      (0,emotion_react_browser_esm.jsx)(react_transition_group.CSSTransition, {
        classNames: "schemaPane",
        in: !this.props.hideLeftBar,
        timeout: 300 },

      (0,emotion_react_browser_esm.jsx)("div", { className: `schemaPane ${leftBarStateClass}` },
      (0,emotion_react_browser_esm.jsx)(SqlEditorLeftBar, {
        database: this.props.database,
        queryEditor: this.props.queryEditor,
        tables: this.props.tables,
        actions: this.props.actions }))),



      this.queryPane(),
      (0,emotion_react_browser_esm.jsx)(Modal/* default */.Z, {
        visible: this.state.showCreateAsModal,
        title: (0,TranslatorSingleton.t)(createViewModalTitle),
        onHide: () => {
          this.setState({ showCreateAsModal: false });
        },
        footer:
        (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
          onClick: () => this.setState({ showCreateAsModal: false }) }, "Cancel"),



        this.state.createAs === CtasEnum.TABLE &&
        (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
          buttonStyle: "primary",
          disabled: this.state.ctas.length === 0,
          onClick: this.createTableAs.bind(this) }, "Create"),




        this.state.createAs === CtasEnum.VIEW &&
        (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
          buttonStyle: "primary",
          disabled: this.state.ctas.length === 0,
          onClick: this.createViewAs.bind(this) }, "Create")) },







      (0,emotion_react_browser_esm.jsx)("span", null, "Name"),
      (0,emotion_react_browser_esm.jsx)(components/* Input */.II, {
        placeholder: createModalPlaceHolder,
        onChange: this.ctasChanged.bind(this) }))));




  }}

SqlEditor.defaultProps = SqlEditor_defaultProps;
SqlEditor.propTypes = SqlEditor_propTypes;

function SqlEditor_mapStateToProps(state, props) {
  const { sqlLab } = state;
  const queryEditor = sqlLab.queryEditors.find(
  (editor) => editor.id === props.queryEditorId);


  return { sqlLab, ...props, queryEditor };
}

function SqlEditor_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    addQueryEditor: addQueryEditor,
    estimateQueryCost: estimateQueryCost,
    persistEditorHeight: persistEditorHeight,
    postStopQuery: postStopQuery,
    queryEditorSetAutorun: queryEditorSetAutorun,
    queryEditorSetQueryLimit: queryEditorSetQueryLimit,
    queryEditorSetSql: queryEditorSetSql,
    queryEditorSetTemplateParams: queryEditorSetTemplateParams,
    runQuery: runQuery,
    saveQuery: saveQuery,
    scheduleQuery: scheduleQuery,
    setActiveSouthPaneTab: setActiveSouthPaneTab,
    updateSavedQuery: updateSavedQuery,
    validateQuery: validateQuery },

  dispatch);

}

const themedSqlEditor = (0,emotion_element_99289b21_browser_esm.b)(SqlEditor);
/* harmony default export */ const components_SqlEditor = ((0,es/* connect */.$j)(SqlEditor_mapStateToProps, SqlEditor_mapDispatchToProps)(themedSqlEditor));
;// CONCATENATED MODULE: ./src/SqlLab/components/TabStatusIcon/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function TabStatusIcon({ tabState }) {
  return (0,emotion_react_browser_esm.jsx)("div", { className: `circle ${tabState}` });
}
;// CONCATENATED MODULE: ./src/SqlLab/components/TabbedSqlEditors/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

















const TabbedSqlEditors_propTypes = {
  actions: (prop_types_default()).object.isRequired,
  defaultDbId: (prop_types_default()).number,
  displayLimit: (prop_types_default()).number,
  defaultQueryLimit: (prop_types_default()).number.isRequired,
  maxRow: (prop_types_default()).number.isRequired,
  databases: (prop_types_default()).object.isRequired,
  queries: (prop_types_default()).object.isRequired,
  queryEditors: (prop_types_default()).array,
  requestedQuery: (prop_types_default()).object,
  tabHistory: (prop_types_default()).array.isRequired,
  tables: (prop_types_default()).array.isRequired,
  offline: (prop_types_default()).bool,
  saveQueryWarning: (prop_types_default()).string,
  scheduleQueryWarning: (prop_types_default()).string };

const TabbedSqlEditors_defaultProps = {
  queryEditors: [],
  offline: false,
  requestedQuery: null,
  saveQueryWarning: null,
  scheduleQueryWarning: null };


let queryCount = 1;

const TabTitleWrapper = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
`;

const TabTitle = style/* styled.span */.iK.span`
  margin-right: ${({ theme }) => theme.gridUnit * 2}px;
  text-transform: none;
`;

// Get the user's OS
const userOS = (0,common/* detectOS */.fV)();

class TabbedSqlEditors extends react.PureComponent {
  constructor(props) {
    super(props);
    const sqlLabUrl = '/superset/sqllab';
    this.state = {
      sqlLabUrl,
      queriesArray: [],
      dataPreviewQueries: [] };

    this.removeQueryEditor = this.removeQueryEditor.bind(this);
    this.renameTab = this.renameTab.bind(this);
    this.toggleLeftBar = this.toggleLeftBar.bind(this);
    this.removeAllOtherQueryEditors = this.removeAllOtherQueryEditors.bind(
    this);

    this.duplicateQueryEditor = this.duplicateQueryEditor.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    // migrate query editor and associated tables state to server
    if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE)) {
      const localStorageTables = this.props.tables.filter(
      (table) => table.inLocalStorage);

      const localStorageQueries = Object.values(this.props.queries).filter(
      (query) => query.inLocalStorage);

      this.props.queryEditors.
      filter((qe) => qe.inLocalStorage).
      forEach((qe) => {
        // get all queries associated with the query editor
        const queries = localStorageQueries.filter(
        (query) => query.sqlEditorId === qe.id);

        const tables = localStorageTables.filter(
        (table) => table.queryEditorId === qe.id);

        this.props.actions.migrateQueryEditorFromLocalStorage(
        qe,
        tables,
        queries);

      });
    }

    // merge post form data with GET search params
    // Hack: this data should be comming from getInitialState
    // but for some reason this data isn't being passed properly through
    // the reducer.
    const appContainer = document.getElementById('app');
    const bootstrapData = JSON.parse(
    (appContainer == null ? void 0 : appContainer.getAttribute('data-bootstrap')) || '{}');

    const query = {
      ...bootstrapData.requested_query,
      ...URI_default()(window.location).search(true) };


    // Popping a new tab based on the querystring
    if (
    query.id ||
    query.sql ||
    query.savedQueryId ||
    query.datasourceKey ||
    query.queryId)
    {
      if (query.id) {
        this.props.actions.popStoredQuery(query.id);
      } else if (query.savedQueryId) {
        this.props.actions.popSavedQuery(query.savedQueryId);
      } else if (query.queryId) {
        this.props.actions.popQuery(query.queryId);
      } else if (query.datasourceKey) {
        this.props.actions.popDatasourceQuery(query.datasourceKey, query.sql);
      } else if (query.sql) {
        let dbId = query.dbid;
        if (dbId) {
          dbId = parseInt(dbId, 10);
        } else {
          const { databases } = this.props;
          const dbName = query.dbname;
          if (dbName) {
            Object.keys(databases).forEach((db) => {
              if (databases[db].database_name === dbName) {
                dbId = databases[db].id;
              }
            });
          }
        }
        const newQueryEditor = {
          title: query.title,
          dbId,
          schema: query.schema,
          autorun: query.autorun,
          sql: query.sql };

        this.props.actions.addQueryEditor(newQueryEditor);
      }
      this.popNewTab();
    } else if (query.new || this.props.queryEditors.length === 0) {
      this.newQueryEditor();

      if (query.new) {
        window.history.replaceState({}, document.title, this.state.sqlLabUrl);
      }
    } else {
      const qe = this.activeQueryEditor();
      const latestQuery = this.props.queries[qe.latestQueryId];
      if (
      (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) &&
      latestQuery &&
      latestQuery.resultsKey)
      {
        // when results are not stored in localStorage they need to be
        // fetched from the results backend (if configured)
        this.props.actions.fetchQueryResults(
        latestQuery,
        this.props.displayLimit);

      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextActiveQeId =
    nextProps.tabHistory[nextProps.tabHistory.length - 1];
    const queriesArray = Object.values(nextProps.queries).filter(
    (query) => query.sqlEditorId === nextActiveQeId);

    if (!(0,reduxUtils/* areArraysShallowEqual */.E8)(queriesArray, this.state.queriesArray)) {
      this.setState({ queriesArray });
    }

    const dataPreviewQueries = [];
    nextProps.tables.forEach((table) => {
      const queryId = table.dataPreviewQueryId;
      if (
      queryId &&
      nextProps.queries[queryId] &&
      table.queryEditorId === nextActiveQeId)
      {
        dataPreviewQueries.push({
          ...nextProps.queries[queryId],
          tableName: table.name });

      }
    });
    if (
    !(0,reduxUtils/* areArraysShallowEqual */.E8)(dataPreviewQueries, this.state.dataPreviewQueries))
    {
      this.setState({ dataPreviewQueries });
    }
  }

  popNewTab() {
    queryCount += 1;
    // Clean the url in browser history
    window.history.replaceState({}, document.title, this.state.sqlLabUrl);
  }

  renameTab(qe) {
    /* eslint no-alert: 0 */
    const newTitle = prompt((0,TranslatorSingleton.t)('Enter a new title for the tab'));
    if (newTitle) {
      this.props.actions.queryEditorSetTitle(qe, newTitle);
    }
  }

  activeQueryEditor() {
    if (this.props.tabHistory.length === 0) {
      return this.props.queryEditors[0];
    }
    const qeid = this.props.tabHistory[this.props.tabHistory.length - 1];
    return this.props.queryEditors.find((qe) => qe.id === qeid) || null;
  }

  newQueryEditor() {
    queryCount += 1;
    const activeQueryEditor = this.activeQueryEditor();
    const firstDbId = Math.min(
    ...Object.values(this.props.databases).map((database) => database.id));

    const warning = (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE) ?
    '' :
    `${(0,TranslatorSingleton.t)(
    '-- Note: Unless you save your query, these tabs will NOT persist if you clear your cookies or change browsers.')
    }\n\n`;
    const qe = {
      title: (0,TranslatorSingleton.t)('Untitled Query %s', queryCount),
      dbId:
      activeQueryEditor && activeQueryEditor.dbId ?
      activeQueryEditor.dbId :
      this.props.defaultDbId || firstDbId,
      schema: activeQueryEditor ? activeQueryEditor.schema : null,
      autorun: false,
      sql: `${warning}SELECT ...`,
      queryLimit: this.props.defaultQueryLimit };

    this.props.actions.addQueryEditor(qe);
  }

  handleSelect(key) {
    const qeid = this.props.tabHistory[this.props.tabHistory.length - 1];
    if (key !== qeid) {
      const queryEditor = this.props.queryEditors.find((qe) => qe.id === key);
      this.props.actions.switchQueryEditor(
      queryEditor,
      this.props.displayLimit);

    }
  }

  handleEdit(key, action) {
    if (action === 'remove') {
      const qe = this.props.queryEditors.find((qe) => qe.id === key);
      this.removeQueryEditor(qe);
    }
    if (action === 'add') {
      this.newQueryEditor();
    }
  }

  removeQueryEditor(qe) {
    this.props.actions.removeQueryEditor(qe);
  }

  removeAllOtherQueryEditors(cqe) {
    this.props.queryEditors.forEach(
    (qe) => qe !== cqe && this.removeQueryEditor(qe));

  }

  duplicateQueryEditor(qe) {
    this.props.actions.cloneQueryToNewTab(qe, false);
  }

  toggleLeftBar(qe) {
    this.props.actions.toggleLeftBar(qe);
  }

  render() {
    const editors = this.props.queryEditors.map((qe) => {
      let latestQuery;
      if (qe.latestQueryId) {
        latestQuery = this.props.queries[qe.latestQueryId];
      }
      let database;
      if (qe.dbId) {
        database = this.props.databases[qe.dbId];
      }
      const state = latestQuery ? latestQuery.state : '';

      const menu =
      (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, { style: { width: 176 } },
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, {
        className: "close-btn",
        key: "1",
        onClick: () => this.removeQueryEditor(qe) },


      (0,emotion_react_browser_esm.jsx)("div", { className: "icon-container" },
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-close" })),

      (0,TranslatorSingleton.t)('Close tab')),

      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: "2", onClick: () => this.renameTab(qe) },
      (0,emotion_react_browser_esm.jsx)("div", { className: "icon-container" },
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-i-cursor" })),

      (0,TranslatorSingleton.t)('Rename tab')),

      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: "3", onClick: () => this.toggleLeftBar(qe) },
      (0,emotion_react_browser_esm.jsx)("div", { className: "icon-container" },
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-cogs" })),

      qe.hideLeftBar ? (0,TranslatorSingleton.t)('Expand tool bar') : (0,TranslatorSingleton.t)('Hide tool bar')),

      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, {
        key: "4",
        onClick: () => this.removeAllOtherQueryEditors(qe) },

      (0,emotion_react_browser_esm.jsx)("div", { className: "icon-container" },
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-times-circle-o" })),

      (0,TranslatorSingleton.t)('Close all other tabs')),

      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: "5", onClick: () => this.duplicateQueryEditor(qe) },
      (0,emotion_react_browser_esm.jsx)("div", { className: "icon-container" },
      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-files-o" })),

      (0,TranslatorSingleton.t)('Duplicate tab')));



      const tabHeader =
      (0,emotion_react_browser_esm.jsx)(TabTitleWrapper, null,
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Dropdown, { overlay: menu, trigger: ['click'] })),

      (0,emotion_react_browser_esm.jsx)(TabTitle, null, qe.title), " ", (0,emotion_react_browser_esm.jsx)(TabStatusIcon, { tabState: state }), ' ');


      return (
        (0,emotion_react_browser_esm.jsx)(Tabs/* EditableTabs.TabPane */.Xv.TabPane, {
          key: qe.id,
          tab: tabHeader
          // for tests - key prop isn't handled by enzyme well bcs it's a react keyword
          , "data-key": qe.id },

        (0,emotion_react_browser_esm.jsx)(components_SqlEditor, {
          tables: this.props.tables.filter((xt) => xt.queryEditorId === qe.id),
          queryEditorId: qe.id,
          editorQueries: this.state.queriesArray,
          dataPreviewQueries: this.state.dataPreviewQueries,
          latestQuery: latestQuery,
          database: database,
          actions: this.props.actions,
          hideLeftBar: qe.hideLeftBar,
          defaultQueryLimit: this.props.defaultQueryLimit,
          maxRow: this.props.maxRow,
          displayLimit: this.props.displayLimit,
          saveQueryWarning: this.props.saveQueryWarning,
          scheduleQueryWarning: this.props.scheduleQueryWarning })));



    });

    return (
      (0,emotion_react_browser_esm.jsx)(Tabs/* EditableTabs */.Xv, {
        activeKey: this.props.tabHistory[this.props.tabHistory.length - 1],
        id: "a11y-query-editor-tabs",
        className: "SqlEditorTabs",

        onChange: this.handleSelect,
        fullWidth: false,
        hideAdd: this.props.offline,
        onEdit: this.handleEdit,
        addIcon:
        (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
          id: "add-tab",
          placement: "bottom",
          title:
          userOS === 'Windows' ?
          (0,TranslatorSingleton.t)('New tab (Ctrl + q)') :
          (0,TranslatorSingleton.t)('New tab (Ctrl + t)') },


        (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus-circle" })) },



      editors));


  }}

TabbedSqlEditors.propTypes = TabbedSqlEditors_propTypes;
TabbedSqlEditors.defaultProps = TabbedSqlEditors_defaultProps;

function TabbedSqlEditors_mapStateToProps({ sqlLab, common, requestedQuery }) {
  return {
    databases: sqlLab.databases,
    queryEditors: sqlLab.queryEditors,
    queries: sqlLab.queries,
    tabHistory: sqlLab.tabHistory,
    tables: sqlLab.tables,
    defaultDbId: sqlLab.defaultDbId,
    displayLimit: common.conf.DISPLAY_MAX_ROW,
    offline: sqlLab.offline,
    defaultQueryLimit: common.conf.DEFAULT_SQLLAB_LIMIT,
    maxRow: common.conf.SQL_MAX_ROW,
    saveQueryWarning: common.conf.SQLLAB_SAVE_WARNING_MESSAGE,
    scheduleQueryWarning: common.conf.SQLLAB_SCHEDULE_WARNING_MESSAGE,
    requestedQuery };

}
function TabbedSqlEditors_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(sqlLab_namespaceObject, dispatch) };

}

/* harmony default export */ const components_TabbedSqlEditors = ((0,es/* connect */.$j)(TabbedSqlEditors_mapStateToProps, TabbedSqlEditors_mapDispatchToProps)(TabbedSqlEditors));
;// CONCATENATED MODULE: ./src/SqlLab/components/QueryAutoRefresh/index.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







const QUERY_UPDATE_FREQ = 2000;
const QUERY_UPDATE_BUFFER_MS = 5000;
const MAX_QUERY_AGE_TO_POLL = 21600000;
const QUERY_TIMEOUT_LIMIT = 10000;

class QueryAutoRefresh extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offline: props.offline };

  }

  UNSAFE_componentWillMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offline !== this.state.offline) {
      this.props.actions.setUserOffline(this.state.offline);
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  shouldCheckForQueries() {
    // if there are started or running queries, this method should return true
    const { queries } = this.props;
    const now = new Date().getTime();
    const isQueryRunning = (q) =>
    ['running', 'started', 'pending', 'fetching'].indexOf(q.state) >= 0;

    return Object.values(queries).some(
    (q) => isQueryRunning(q) && now - q.startDttm < MAX_QUERY_AGE_TO_POLL);

  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(this.stopwatch.bind(this), QUERY_UPDATE_FREQ);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  stopwatch() {
    // only poll /superset/queries/ if there are started or running queries
    if (this.shouldCheckForQueries()) {
      SupersetClient/* default.get */.Z.get({
        endpoint: `/superset/queries/${
        this.props.queriesLastUpdate - QUERY_UPDATE_BUFFER_MS
        }`,
        timeout: QUERY_TIMEOUT_LIMIT }).

      then(({ json }) => {
        if (Object.keys(json).length > 0) {
          this.props.actions.refreshQueries(json);
        }
        this.setState({ offline: false });
      }).
      catch(() => {
        this.setState({ offline: true });
      });
    } else {
      this.setState({ offline: false });
    }
  }

  render() {
    return null;
  }}

QueryAutoRefresh.propTypes = {
  offline: (prop_types_default()).bool.isRequired,
  queries: (prop_types_default()).object.isRequired,
  actions: (prop_types_default()).object.isRequired,
  queriesLastUpdate: (prop_types_default()).number.isRequired };


function QueryAutoRefresh_mapStateToProps({ sqlLab }) {
  return {
    offline: sqlLab.offline,
    queries: sqlLab.queries,
    queriesLastUpdate: sqlLab.queriesLastUpdate };

}

function QueryAutoRefresh_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(sqlLab_namespaceObject, dispatch) };

}

/* harmony default export */ const components_QueryAutoRefresh = ((0,es/* connect */.$j)(QueryAutoRefresh_mapStateToProps, QueryAutoRefresh_mapDispatchToProps)(QueryAutoRefresh));
// EXTERNAL MODULE: ./src/components/Select/index.ts + 6 modules
var Select = __webpack_require__(79676);
;// CONCATENATED MODULE: ./src/components/AsyncSelect/index.jsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


// TODO: refactor this with `import { AsyncSelect } from src/components/Select`




const AsyncSelect_propTypes = {
  dataEndpoint: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  mutator: (prop_types_default()).func.isRequired,
  onAsyncError: (prop_types_default()).func,
  value: prop_types_default().oneOfType([
  (prop_types_default()).number,
  prop_types_default().arrayOf((prop_types_default()).number)]),

  valueRenderer: (prop_types_default()).func,
  placeholder: (prop_types_default()).string,
  autoSelect: (prop_types_default()).bool };


const AsyncSelect_defaultProps = {
  placeholder: (0,TranslatorSingleton.t)('Select ...'),
  onAsyncError: () => {} };


class AsyncSelect extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      options: [] };


    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.fetchOptions();
  }

  onChange(option) {
    this.props.onChange(option);
  }

  fetchOptions() {
    this.setState({ isLoading: true });
    const { mutator, dataEndpoint } = this.props;

    return SupersetClient/* default.get */.Z.get({ endpoint: dataEndpoint }).
    then(({ json }) => {
      const options = mutator ? mutator(json) : json;

      this.setState({ options, isLoading: false });

      if (!this.props.value && this.props.autoSelect && options.length > 0) {
        this.onChange(options[0]);
      }
    }).
    catch((response) =>
    (0,getClientErrorObject/* getClientErrorObject */.O)(response).then((error) => {
      this.props.onAsyncError(error.error || error.statusText || error);
      this.setState({ isLoading: false });
    }));

  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)(Select/* Select */.OC, extends_default()({
        placeholder: this.props.placeholder,
        options: this.state.options,
        value: this.props.value,
        isLoading: this.state.isLoading,
        onChange: this.onChange,
        valueRenderer: this.props.valueRenderer },
      this.props)));


  }}


AsyncSelect.propTypes = AsyncSelect_propTypes;
AsyncSelect.defaultProps = AsyncSelect_defaultProps;

/* harmony default export */ const components_AsyncSelect = (AsyncSelect);
;// CONCATENATED MODULE: ./src/SqlLab/components/QuerySearch/index.tsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










const TableWrapper = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;
const TableStyles = style/* styled.div */.iK.div`
  table {
    background-color: ${({ theme }) => theme.colors.grayscale.light4};
  }

  .table > thead > tr > th {
    border-bottom: ${({ theme }) => theme.gridUnit / 2}px solid
      ${({ theme }) => theme.colors.grayscale.light2};
    background: ${({ theme }) => theme.colors.grayscale.light4};
  }
`;
const StyledTableStylesContainer = style/* styled.div */.iK.div`
  overflow: auto;
`;
function QuerySearch({ actions, displayLimit }) {
  const [databaseId, setDatabaseId] = (0,react.useState)('');
  const [userId, setUserId] = (0,react.useState)('');
  const [searchText, setSearchText] = (0,react.useState)('');
  const [from, setFrom] = (0,react.useState)('28 days ago');
  const [to, setTo] = (0,react.useState)('now');
  const [status, setStatus] = (0,react.useState)('success');
  const [queriesArray, setQueriesArray] = (0,react.useState)([]);
  const [queriesLoading, setQueriesLoading] = (0,react.useState)(true);
  const getTimeFromSelection = (selection) => {
    switch (selection) {
      case 'now':
        return (0,dates/* now */.zO)();
      case '1 hour ago':
        return (0,dates/* epochTimeXHoursAgo */.xG)(1);
      case '1 day ago':
        return (0,dates/* epochTimeXDaysAgo */.x_)(1);
      case '7 days ago':
        return (0,dates/* epochTimeXDaysAgo */.x_)(7);
      case '28 days ago':
        return (0,dates/* epochTimeXDaysAgo */.x_)(28);
      case '90 days ago':
        return (0,dates/* epochTimeXDaysAgo */.x_)(90);
      case '1 year ago':
        return (0,dates/* epochTimeXYearsAgo */.pu)(1);
      default:
        return null;}

  };
  const insertParams = (baseUrl, params) => {
    const validParams = params.filter(function (p) {
      return p !== '';
    });
    return `${baseUrl}?${validParams.join('&')}`;
  };
  const refreshQueries = async () => {
    setQueriesLoading(true);
    const params = [
    userId && `user_id=${userId}`,
    databaseId && `database_id=${databaseId}`,
    searchText && `search_text=${searchText}`,
    status && `status=${status}`,
    from && `from=${getTimeFromSelection(from)}`,
    to && `to=${getTimeFromSelection(to)}`];

    try {
      const response = await SupersetClient/* default.get */.Z.get({
        endpoint: insertParams('/superset/search_queries', params) });

      const queries = Object.values(response.json);
      setQueriesArray(queries);
    }
    catch (err) {
      actions.addDangerToast((0,TranslatorSingleton.t)('An error occurred when refreshing queries'));
    } finally
    {
      setQueriesLoading(false);
    }
  };
  (0,react.useEffect)(() => {
    refreshQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onUserClicked = (userId) => {
    setUserId(userId);
    refreshQueries();
  };
  const onDbClicked = (dbId) => {
    setDatabaseId(dbId);
    refreshQueries();
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      refreshQueries();
    }
  };
  const onChange = (e) => {
    e.persist();
    const handleChange = debounce_default()((e) => {
      setSearchText(e.target.value);
    }, 200);
    handleChange(e);
  };
  const userMutator = ({ result }) => result.map(({ value, text }) => ({
    label: text,
    value }));

  const dbMutator = ({ result }) => {
    const options = result.map(({ id, database_name }) => ({
      value: id,
      label: database_name }));

    actions.setDatabases(result);
    if (result.length === 0) {
      actions.addDangerToast((0,TranslatorSingleton.t)("It seems you don't have access to any database"));
    }
    return options;
  };
  return (0,emotion_react_browser_esm.jsx)(TableWrapper, null,
  (0,emotion_react_browser_esm.jsx)("div", { id: "search-header", className: "row space-1" },
  (0,emotion_react_browser_esm.jsx)("div", { className: "col-sm-2" },
  (0,emotion_react_browser_esm.jsx)(components_AsyncSelect, { dataEndpoint: "api/v1/query/related/user", mutator: userMutator, value: userId, onChange: (selected) => setUserId(selected == null ? void 0 : selected.value), placeholder: (0,TranslatorSingleton.t)('Filter by user') })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "col-sm-2" },
  (0,emotion_react_browser_esm.jsx)(components_AsyncSelect, { onChange: (db) => setDatabaseId(db == null ? void 0 : db.value), dataEndpoint: "/api/v1/database/?q=(filters:!((col:expose_in_sqllab,opr:eq,value:!t)))", value: databaseId, mutator: dbMutator, placeholder: (0,TranslatorSingleton.t)('Filter by database') })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "col-sm-4" },
  (0,emotion_react_browser_esm.jsx)("input", { type: "text", onChange: onChange, onKeyDown: onKeyDown, className: "form-control input-sm", placeholder: (0,TranslatorSingleton.t)('Query search string') })),

  (0,emotion_react_browser_esm.jsx)("div", { className: "col-sm-4 search-date-filter-container" },
  (0,emotion_react_browser_esm.jsx)(Select/* default */.ZP, { name: "select-from", placeholder: (0,TranslatorSingleton.t)('[From]-'), options: constants/* TIME_OPTIONS.slice */.v3.slice(1, constants/* TIME_OPTIONS.length */.v3.length).map((xt) => ({
      value: xt,
      label: xt })),
    value: from, autosize: false, onChange: (selected) => setFrom(selected == null ? void 0 : selected.value) }),

  (0,emotion_react_browser_esm.jsx)(Select/* default */.ZP, { name: "select-to", placeholder: (0,TranslatorSingleton.t)('[To]-'), options: constants/* TIME_OPTIONS.map */.v3.map((xt) => ({ value: xt, label: xt })), value: to, autosize: false, onChange: (selected) => setTo(selected == null ? void 0 : selected.value) }),

  (0,emotion_react_browser_esm.jsx)(Select/* default */.ZP, { name: "select-status", placeholder: (0,TranslatorSingleton.t)('Filter by status'), options: Object.keys(constants/* STATUS_OPTIONS */.Em).map((s) => ({
      value: s,
      label: s })),
    value: status, isLoading: false, autosize: false, onChange: (selected) => setStatus(selected == null ? void 0 : selected.value) }),

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", buttonStyle: "success", onClick: refreshQueries },
  (0,TranslatorSingleton.t)('Search')))),



  (0,emotion_react_browser_esm.jsx)(StyledTableStylesContainer, null,
  queriesLoading ? (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null) : (0,emotion_react_browser_esm.jsx)(TableStyles, null,
  (0,emotion_react_browser_esm.jsx)(components_QueryTable, { columns: [
    'state',
    'db',
    'user',
    'time',
    'progress',
    'rows',
    'sql',
    'querylink'],
    onUserClicked: onUserClicked, onDbClicked: onDbClicked, queries: queriesArray, actions: actions, displayLimit: displayLimit }))));



}
/* harmony default export */ const components_QuerySearch = (QuerySearch);
;// CONCATENATED MODULE: ./src/SqlLab/components/App/index.jsx
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */














class App extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hash: window.location.hash };


    this.showLocalStorageUsageWarning = throttle_default()(
    this.showLocalStorageUsageWarning,
    constants/* LOCALSTORAGE_WARNING_MESSAGE_THROTTLE_MS */.N2,
    { trailing: false });

  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChanged.bind(this));
  }

  componentDidUpdate() {
    if (
    this.props.localStorageUsageInKilobytes >=
    constants/* LOCALSTORAGE_WARNING_THRESHOLD */.rD * constants/* LOCALSTORAGE_MAX_USAGE_KB */.b$)
    {
      this.showLocalStorageUsageWarning(
      this.props.localStorageUsageInKilobytes);

    }
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChanged.bind(this));
  }

  onHashChanged() {
    this.setState({ hash: window.location.hash });
  }

  showLocalStorageUsageWarning(currentUsage) {
    this.props.actions.addDangerToast(
    (0,TranslatorSingleton.t)(
    "SQL Lab uses your browser's local storage to store queries and results." +
    `\n Currently, you are using ${currentUsage.toFixed(
    2)
    } KB out of ${constants/* LOCALSTORAGE_MAX_USAGE_KB */.b$} KB. storage space.` +
    '\n To keep SQL Lab from crashing, please delete some query tabs.' +
    '\n You can re-access these queries by using the Save feature before you delete the tab. ' +
    'Note that you will need to close other SQL Lab windows before you do this.'));


  }

  render() {
    let content;
    if (this.state.hash && this.state.hash === '#search') {
      if ((0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.ENABLE_REACT_CRUD_VIEWS */.T.ENABLE_REACT_CRUD_VIEWS)) {
        return window.location.replace('/superset/sqllab/history/');
      }
      content =
      (0,emotion_react_browser_esm.jsx)(components_QuerySearch, {
        actions: this.props.actions,
        displayLimit: this.props.common.conf.DISPLAY_MAX_ROW });


    } else {
      content =
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(components_QueryAutoRefresh, null),
      (0,emotion_react_browser_esm.jsx)(components_TabbedSqlEditors, null));


    }
    return (
      (0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.a, { theme: style/* supersetTheme */.K6 },
      (0,emotion_react_browser_esm.jsx)("div", { className: "App SqlLab" },
      content,
      (0,emotion_react_browser_esm.jsx)(MessageToasts_ToastContainer, null))));



  }}


App.propTypes = {
  actions: (prop_types_default()).object,
  common: (prop_types_default()).object,
  localStorageUsageInKilobytes: (prop_types_default()).number.isRequired };


function App_mapStateToProps(state) {
  const { common, localStorageUsageInKilobytes } = state;
  return {
    common,
    localStorageUsageInKilobytes };

}

function App_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)(sqlLab_namespaceObject, dispatch) };

}

/* harmony default export */ const components_App = ((0,es/* connect */.$j)(App_mapStateToProps, App_mapDispatchToProps)(App));
;// CONCATENATED MODULE: ./src/SqlLab/utils/reduxStateToLocalStorageHelper.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const PERSISTENT_QUERY_EDITOR_KEYS = new Set([
'remoteId',
'autorun',
'dbId',
'height',
'id',
'latestQueryId',
'northPercent',
'queryLimit',
'schema',
'selectedText',
'southPercent',
'sql',
'templateParams',
'title',
'hideLeftBar']);


function emptyQueryResults(queries) {
  return Object.keys(queries).reduce((accu, key) => {
    const { startDttm, results } = queries[key];
    const query = {
      ...queries[key],
      results:
      Date.now() - startDttm > constants/* LOCALSTORAGE_MAX_QUERY_AGE_MS */.U$ ? {} : results };


    const updatedQueries = {
      ...accu,
      [key]: query };

    return updatedQueries;
  }, {});
}

function clearQueryEditors(queryEditors) {
  return queryEditors.map((editor) =>
  // only return selected keys
  Object.keys(editor).
  filter((key) => PERSISTENT_QUERY_EDITOR_KEYS.has(key)).
  reduce(
  (accumulator, key) => ({
    ...accumulator,
    [key]: editor[key] }),

  {}));


}
// EXTERNAL MODULE: ./src/setup/setupApp.ts + 6 modules
var setupApp = __webpack_require__(84153);
// EXTERNAL MODULE: ./src/preamble.ts + 3 modules
var preamble = __webpack_require__(26009);
;// CONCATENATED MODULE: ./src/SqlLab/App.jsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




















(0,setupApp/* default */.Z)();

const appContainer = document.getElementById('app');
const bootstrapData = JSON.parse(appContainer.getAttribute('data-bootstrap'));

(0,featureFlags/* initFeatureFlags */.fG)(bootstrapData.common.feature_flags);

const initialState = getInitialState(bootstrapData);
const sqlLabPersistStateConfig = {
  paths: ['sqlLab'],
  config: {
    slicer: (paths) => (state) => {var _subset$sqlLab;
      const subset = {};
      paths.forEach((path) => {
        // this line is used to remove old data from browser localStorage.
        // we used to persist all redux state into localStorage, but
        // it caused configurations passed from server-side got override.
        // see PR 6257 for details
        delete state[path].common; // eslint-disable-line no-param-reassign
        if (path === 'sqlLab') {
          subset[path] = {
            ...state[path],
            queries: emptyQueryResults(state[path].queries),
            queryEditors: clearQueryEditors(state[path].queryEditors) };

        }
      });

      if ((_subset$sqlLab = subset.sqlLab) != null && _subset$sqlLab.user) {
        // Don't persist the user.
        // User should really not be stored under the "sqlLab" field. Oh well.
        delete subset.sqlLab.user;
      }

      const data = JSON.stringify(subset);
      // 2 digit precision
      const currentSize =
      Math.round(data.length * constants/* BYTES_PER_CHAR */.TU / constants/* KB_STORAGE */.Yo * 100) / 100;
      if (state.localStorageUsageInKilobytes !== currentSize) {
        state.localStorageUsageInKilobytes = currentSize; // eslint-disable-line no-param-reassign
      }

      return subset;
    },
    merge: (initialState, persistedState = {}) => {
      const result = {
        ...initialState,
        ...persistedState };

      // Filter out any user data that may have been persisted in an older version.
      // Get user from bootstrap data instead, every time
      result.sqlLab.user = initialState.sqlLab.user;
      return result;
    } } };



const store = (0,redux/* createStore */.MT)(
reducers,
initialState,
(0,redux/* compose */.qC)(
(0,redux/* applyMiddleware */.md)(redux_thunk_es/* default */.Z),
(0,reduxUtils/* initEnhancer */.hU)(
!(0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.SQLLAB_BACKEND_PERSISTENCE */.T.SQLLAB_BACKEND_PERSISTENCE),
sqlLabPersistStateConfig)));




// Highlight the navbar menu
const menus = document.querySelectorAll('.nav.navbar-nav li.dropdown');
const sqlLabMenu = Array.prototype.slice.
apply(menus).
find((element) => element.innerText.trim() === 'SQL Lab');
if (sqlLabMenu) {
  const classes = sqlLabMenu.getAttribute('class');
  if (classes.indexOf('active') === -1) {
    sqlLabMenu.setAttribute('class', `${classes} active`);
  }
}

const Application = () =>
(0,emotion_react_browser_esm.jsx)(es/* Provider */.zt, { store: store },
(0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.a, { theme: preamble/* theme */.r },
(0,emotion_react_browser_esm.jsx)(components_App, null)));




/* harmony default export */ const SqlLab_App = (Application);
;// CONCATENATED MODULE: ./src/SqlLab/index.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



react_dom.render((0,emotion_react_browser_esm.jsx)(SqlLab_App, null), document.getElementById('app'));

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"57":"2cf9bc4ac970720748c0","112":"be71e978bbc620ffc544","158":"df7539aa250576fe4cf3","177":"f6ae69232927d7dd1a30","183":"911ddd624433d7f0867f","215":"7254cd744b1245396db5","310":"1563948d372fecada150","312":"3aa1656a2b7ab28d62bb","336":"d6bbf09be905d11fa889","363":"35405942d4d50d2dd001","440":"ff0aad72b037cc9defda","597":"ec532018b9e38cc071a5","600":"5f68b3d6f05a562607bc","826":"3ac1e6742edc6811953f","992":"d36caa7e430c7b303adb","999":"ed18546530e1fb3fdb9c","1075":"d25c694581c3e17f97cb","1174":"bd6d2c538bb78fcea2f1","1185":"541be5b4ad9b7f276896","1256":"b16af0091358c002effa","1258":"31efb095399ce23d6823","1263":"e1ebf092ea50eba7a149","1293":"89308437860fa7983857","1351":"4c3819c3165f4d3cb3e5","1398":"1e4e92a480dc5b27ff7e","1493":"fb655e11f755bbed5b11","1568":"aee4a0774888c608f63d","1605":"281404507f98467fd7d8","1899":"92b929932dfe7811cbdc","2079":"f78da0b31a1f64da12a4","2089":"887107b248bbaa4c0ed9","2105":"fe2fcb119f108e338ac6","2264":"3ca36ce2ac9c43b9b179","2267":"4dd9b2ded1ac4435aa8d","2403":"8634710eb87615cfc6bf","2439":"96da625d4cbc67a0064f","2646":"add1d27a3b3d4047480a","2698":"be06d926a61b2ff8096c","2713":"05813f52004aefacbcbe","2797":"b8837234f74badcbcd64","2983":"27d10999d0c2bca2cf50","3141":"23ce23648579690f9400","3240":"2a9272f662cb2de40c76","3265":"474d7d7c385d10a60693","3325":"a90266e90bac97af3781","3544":"3406c53cc0e4f33bea86","3558":"eb461a449988ae99c3c4","3567":"5825dfd50d3a6a9b1537","3606":"0adb7d4dc6ba6bad8d1c","3749":"521d48dd5d1067665be3","3871":"76ef1aed5605fc1068fb","3955":"a0676b5a618b6b82bf83","3985":"c54a8b32d2af0d76b8a2","4139":"546708c7300dff5cd155","4266":"d7fa57e367a6eee483b8","4273":"5945dbd1e7088899e37e","4458":"e3c0c688a5be0b5da06e","4474":"b3fc848bf220efa9b835","4579":"ac82e0f4ac2bef7b5629","4625":"c9320cb8d2eee5ebaf4d","4662":"c9085feaf1017c91b23c","4667":"46d958dc7f86f6292bb4","4732":"a80344b7469a48cb86c7","4757":"022553145064f1ee2924","4758":"ec45f143d912ef8b9d0c","4794":"f98ef85464f11e5c88a7","4797":"45c4548eeeb8e2e5cc9e","4810":"188774d3ee3c04c9e188","4817":"f5e26b0709f74b69fa03","4832":"206aca9d039eebc52eed","4851":"6686fcc47a6c733deb22","4972":"c4f807af54c5a8aab56e","4981":"437abb94798b28dd8787","5201":"80aa074f906eee87b0e6","5224":"606b538b7d64335a7781","5226":"7bdd4c10a7916d067525","5249":"fd5ab9bdd08f50f27ff4","5281":"a4b56aaf274795e76afa","5330":"bad80526aedb7bc5338b","5335":"a91e9ee354fd2b99a954","5350":"edd537b2eaa4adec82a6","5359":"5800205e282e553ee535","5367":"6b1af8966839be51ec26","5507":"3af7db839801b0db65e4","5580":"a94f479ae8bf4d3ac0ad","5592":"b1e9861fc747cea7a61e","5641":"19537bf0b67de2dfd994","5707":"429d9ebd98fff39e2608","5771":"a782fb996abf91074d7b","5777":"3f7c6ffbb107b72a71a2","5802":"4457a574df478455a15a","5816":"4d69301b12c619190f1d","5832":"f1d3435d5fe5517d1e0e","5838":"b957c2dc2db93662bc25","5962":"4af600b89ed207c88a75","5972":"0da6cf793e3d1cc69358","5998":"d142a4b602af8829450c","6061":"8bffaef3cba5ee3078f0","6126":"4024bb2150eb5d99ed9f","6150":"ed773f8f5c293cb4c13b","6167":"8a7e1d8900669c9e319e","6207":"d46595d332f953beb63a","6254":"c26e672ffd1d2d6ffe82","6303":"d4d6291f5d42a7f1652f","6371":"66ea24b6bd0ebafddd11","6420":"77ac4862a9a0de480eaa","6447":"2160abb016acabd01b58","6507":"ff107afb952cd5cd032a","6668":"82739982a9d0087df578","6682":"92912f99d5ec5e63356f","6758":"7650f3fae2f4e8e07dd1","6819":"2d98b68d6ff55d61f8d6","6883":"8ff31cb25f4cbcf65f8e","6977":"ddaf38e3b453b836afd2","6981":"9dcf9659f6e80537876c","7183":"4ee4d78d1c0b53004df4","7249":"05401ea8ee3aa4893e10","7405":"866ef25cb2164e793e19","7460":"830c4edc179abe920136","7584":"910bd8b8c2993335fa44","7610":"c4bd3575194e27e4dca4","7654":"29f53849422f19ebe336","7716":"e36d35dc706ec3bf3a29","7760":"4ef3263971e6365c79bf","7803":"2624b6fbf922d341ea04","7832":"4d9d2dbac38cc2b0fb90","7850":"ead55581e4ca5be56dc6","7922":"c84d95f1054e63d7ffeb","8312":"dac04f73013472377c36","8349":"05f914d2483e65c1b585","8398":"d8f5829d0db6a5a634a6","8425":"52abf98953e003bb0152","8463":"48256f92f964b8bf79a4","8616":"600b0291f89941e46ffa","8682":"79102f702737cf867d5f","8695":"c96f012c5780a51d8755","8750":"5c1ccb4ce4d1981ec23a","8883":"68eff701dbdd3308d52d","8970":"6f72f94b5f107daae7bc","9013":"f709bdaee2140bc2a4c5","9052":"b0285bb9d71534ce20b5","9109":"7e727e9ccc7def5a23a2","9305":"60fe40ee626eb2ec1b5f","9325":"90c33d84118b47709bf1","9393":"654e00a37f7e2cf29ed8","9510":"d0629cd97e7154454216","9558":"fe373e383af8c140dd79","9767":"9b54247b72d042373f5e","9794":"2031cc537c157403943d","9811":"30707e6da4b523886fde"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "sqllab" + "." + "f6c90a35ead4410470db" + ".entry.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "superset:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			6856: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [1216,2441,7550,4772,5110,4998,9968,7591,4654,1844,995,9670,323,3401,6962,4052,7843,2825,4174], () => (__webpack_require__(26009)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1216,2441,7550,4772,5110,4998,9968,7591,4654,1844,995,9670,323,3401,6962,4052,7843,2825,4174], () => (__webpack_require__(16921)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;