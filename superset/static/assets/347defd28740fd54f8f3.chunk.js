(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[452],{

/***/ 8177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = { "default": __webpack_require__(77084), __esModule: true };

/***/ }),

/***/ 77084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(75789);
var $Object = __webpack_require__(94731).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 75789:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(64874);
var $getOwnPropertyDescriptor = __webpack_require__(18437).f;

__webpack_require__(44903)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


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

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 7436:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(41848),
    baseIteratee = __webpack_require__(67206),
    toInteger = __webpack_require__(40554);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),

/***/ 94654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    map = __webpack_require__(35161);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),

/***/ 10752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    map = __webpack_require__(35161);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDeep([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMapDeep(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), INFINITY);
}

module.exports = flatMapDeep;


/***/ }),

/***/ 8802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(90939);

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

module.exports = isEqualWith;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 44908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(45652);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 87185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(45652);

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The order of result values is
 * determined by the order they occur in the array.The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}

module.exports = uniqWith;


/***/ }),

/***/ 75:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(34155);
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ 54087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var now = __webpack_require__(75)
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ 28388:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! react-checkbox-tree - v1.5.1 | 2019 */
!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){e.exports=n(96)()},function(t,n){t.exports=e},function(e,t,n){var r=n(16),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t,n){var r=n(41),o=n(47);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(31),o=n(32),a=n(33),i=n(34),c=n(35);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,e.exports=l},function(e,t,n){var r=n(14);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(12),o=n(43),a=n(44),i="[object Null]",c="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:l&&l in Object(e)?o(e):a(e)}},function(e,t,n){var r=n(3)(Object,"create");e.exports=r},function(e,t,n){var r=n(56);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){var r=n(3)(n(2),"Map");e.exports=r},function(e,t,n){var r=n(2).Symbol;e.exports=r},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(6),o=n(17),a="[object AsyncFunction]",i="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=r(e);return t==i||t==c||t==a||t==l}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(42))},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t,n){var r=n(48),o=n(55),a=n(57),i=n(58),c=n(59);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,e.exports=l},function(e,t,n){var r=n(60),o=n(63),a=n(64),i=1,c=2;e.exports=function(e,t,n,l,u,s){var p=n&i,f=e.length,d=t.length;if(f!=d&&!(p&&d>f))return!1;var h=s.get(e);if(h&&s.get(t))return h==t;var b=-1,y=!0,v=n&c?new r:void 0;for(s.set(e,t),s.set(t,e);++b<f;){var x=e[b],m=t[b];if(l)var g=p?l(m,x,b,t,e,s):l(x,m,b,e,t,s);if(void 0!==g){if(g)continue;y=!1;break}if(v){if(!o(t,function(e,t){if(!a(v,t)&&(x===e||u(x,e,n,l,s)))return v.push(t)})){y=!1;break}}else if(x!==m&&!u(x,m,n,l,s)){y=!1;break}}return s.delete(e),s.delete(t),y}},function(e,t,n){(function(e){var r=n(2),o=n(81),a=t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,c=i&&i.exports===a?r.Buffer:void 0,l=(c?c.isBuffer:void 0)||o;e.exports=l}).call(this,n(22)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(83),o=n(84),a=n(85),i=a&&a.isTypedArray,c=i?o(i):r;e.exports=c},function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t,n){var r=n(28);e.exports=function(e,t){return r(e,t)}},function(e,t,n){var r=self.crypto||self.msCrypto;e.exports=function(e){e=e||21;for(var t="",n=r.getRandomValues(new Uint8Array(e));0<e--;)t+="Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-"[63&n[e]];return t}},function(e,t,n){e.exports=n(98).default},function(e,t,n){var r=n(29),o=n(9);e.exports=function e(t,n,a,i,c){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,i,e,c))}},function(e,t,n){var r=n(30),o=n(20),a=n(65),i=n(69),c=n(91),l=n(13),u=n(21),s=n(23),p=1,f="[object Arguments]",d="[object Array]",h="[object Object]",b=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,y,v,x){var m=l(e),g=l(t),k=m?d:c(e),_=g?d:c(t),O=(k=k==f?h:k)==h,j=(_=_==f?h:_)==h,w=k==_;if(w&&u(e)){if(!u(t))return!1;m=!0,O=!1}if(w&&!O)return x||(x=new r),m||s(e)?o(e,t,n,y,v,x):a(e,t,k,n,y,v,x);if(!(n&p)){var C=O&&b.call(e,"__wrapped__"),E=j&&b.call(t,"__wrapped__");if(C||E){var P=C?e.value():e,N=E?t.value():t;return x||(x=new r),v(P,N,n,y,x)}}return!!w&&(x||(x=new r),i(e,t,n,y,v,x))}},function(e,t,n){var r=n(4),o=n(36),a=n(37),i=n(38),c=n(39),l=n(40);function u(e){var t=this.__data__=new r(e);this.size=t.size}u.prototype.clear=o,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=c,u.prototype.set=l,e.exports=u},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(5),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},function(e,t,n){var r=n(5);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(5);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},function(e,t,n){var r=n(4);e.exports=function(){this.__data__=new r,this.size=0}},function(e,t){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},function(e,t){e.exports=function(e){return this.__data__.get(e)}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,n){var r=n(4),o=n(11),a=n(19),i=200;e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var c=n.__data__;if(!o||c.length<i-1)return c.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(c)}return n.set(e,t),this.size=n.size,this}},function(e,t,n){var r=n(15),o=n(45),a=n(17),i=n(18),c=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,s=l.toString,p=u.hasOwnProperty,f=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:c).test(i(e))}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(12),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r,o=n(46),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(2)["__core-js_shared__"];e.exports=r},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(49),o=n(4),a=n(11);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(e,t,n){var r=n(50),o=n(51),a=n(52),i=n(53),c=n(54);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,e.exports=l},function(e,t,n){var r=n(7);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(7),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return n===o?void 0:n}return a.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(7),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(7),o="__lodash_hash_undefined__";e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?o:t,this}},function(e,t,n){var r=n(8);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(8);e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(8);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(8);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},function(e,t,n){var r=n(19),o=n(61),a=n(62);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},function(e,t){var n="__lodash_hash_undefined__";e.exports=function(e){return this.__data__.set(e,n),this}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},function(e,t){e.exports=function(e,t){return e.has(t)}},function(e,t,n){var r=n(12),o=n(66),a=n(14),i=n(20),c=n(67),l=n(68),u=1,s=2,p="[object Boolean]",f="[object Date]",d="[object Error]",h="[object Map]",b="[object Number]",y="[object RegExp]",v="[object Set]",x="[object String]",m="[object Symbol]",g="[object ArrayBuffer]",k="[object DataView]",_=r?r.prototype:void 0,O=_?_.valueOf:void 0;e.exports=function(e,t,n,r,_,j,w){switch(n){case k:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case g:return!(e.byteLength!=t.byteLength||!j(new o(e),new o(t)));case p:case f:case b:return a(+e,+t);case d:return e.name==t.name&&e.message==t.message;case y:case x:return e==t+"";case h:var C=c;case v:var E=r&u;if(C||(C=l),e.size!=t.size&&!E)return!1;var P=w.get(e);if(P)return P==t;r|=s,w.set(e,t);var N=i(C(e),C(t),r,_,j,w);return w.delete(e),N;case m:if(O)return O.call(e)==O.call(t)}return!1}},function(e,t,n){var r=n(2).Uint8Array;e.exports=r},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}},function(e,t){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},function(e,t,n){var r=n(70),o=1,a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,i,c,l){var u=n&o,s=r(e),p=s.length;if(p!=r(t).length&&!u)return!1;for(var f=p;f--;){var d=s[f];if(!(u?d in t:a.call(t,d)))return!1}var h=l.get(e);if(h&&l.get(t))return h==t;var b=!0;l.set(e,t),l.set(t,e);for(var y=u;++f<p;){var v=e[d=s[f]],x=t[d];if(i)var m=u?i(x,v,d,t,e,l):i(v,x,d,e,t,l);if(!(void 0===m?v===x||c(v,x,n,i,l):m)){b=!1;break}y||(y="constructor"==d)}if(b&&!y){var g=e.constructor,k=t.constructor;g!=k&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof k&&k instanceof k)&&(b=!1)}return l.delete(e),l.delete(t),b}},function(e,t,n){var r=n(71),o=n(73),a=n(76);e.exports=function(e){return r(e,a,o)}},function(e,t,n){var r=n(72),o=n(13);e.exports=function(e,t,n){var a=t(e);return o(e)?a:r(a,n(e))}},function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},function(e,t,n){var r=n(74),o=n(75),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,c=i?function(e){return null==e?[]:(e=Object(e),r(i(e),function(t){return a.call(e,t)}))}:o;e.exports=c},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(77),o=n(86),a=n(90);e.exports=function(e){return a(e)?r(e):o(e)}},function(e,t,n){var r=n(78),o=n(79),a=n(13),i=n(21),c=n(82),l=n(23),u=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),s=!n&&o(e),p=!n&&!s&&i(e),f=!n&&!s&&!p&&l(e),d=n||s||p||f,h=d?r(e.length,String):[],b=h.length;for(var y in e)!t&&!u.call(e,y)||d&&("length"==y||p&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,b))||h.push(y);return h}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){var r=n(80),o=n(9),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,l=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!c.call(e,"callee")};e.exports=l},function(e,t,n){var r=n(6),o=n(9),a="[object Arguments]";e.exports=function(e){return o(e)&&r(e)==a}},function(e,t){e.exports=function(){return!1}},function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,n){var r=n(6),o=n(24),a=n(9),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){(function(e){var r=n(16),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,c=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=c}).call(this,n(22)(e))},function(e,t,n){var r=n(87),o=n(88),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t,n){var r=n(89)(Object.keys,Object);e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(15),o=n(24);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t,n){var r=n(92),o=n(11),a=n(93),i=n(94),c=n(95),l=n(6),u=n(18),s=u(r),p=u(o),f=u(a),d=u(i),h=u(c),b=l;(r&&"[object DataView]"!=b(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=b(new o)||a&&"[object Promise]"!=b(a.resolve())||i&&"[object Set]"!=b(new i)||c&&"[object WeakMap]"!=b(new c))&&(b=function(e){var t=l(e),n="[object Object]"==t?e.constructor:void 0,r=n?u(n):"";if(r)switch(r){case s:return"[object DataView]";case p:return"[object Map]";case f:return"[object Promise]";case d:return"[object Set]";case h:return"[object WeakMap]"}return t}),e.exports=b},function(e,t,n){var r=n(3)(n(2),"DataView");e.exports=r},function(e,t,n){var r=n(3)(n(2),"Promise");e.exports=r},function(e,t,n){var r=n(3)(n(2),"Set");e.exports=r},function(e,t,n){var r=n(3)(n(2),"WeakMap");e.exports=r},function(e,t,n){"use strict";var r=n(97);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),a=n(25),i=n.n(a),c=n(26),l=n.n(c),u=n(0),s=n.n(u),p=n(1),f=n.n(p);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,x(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,f.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=b(e,["children","title"]);return f.a.createElement("button",h({"aria-label":n,title:n,type:"button"},r),t)}}])&&y(n.prototype,r),o&&y(n,o),t}();g(k,"propTypes",{children:s.a.node.isRequired,title:s.a.string}),g(k,"defaultProps",{title:null});var _=k;function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=t,this.flatNodes=n}var t,n,r;return t=e,(n=[{key:"setProps",value:function(e){this.props=e}},{key:"clone",value:function(){var t=this,n={};return Object.keys(this.flatNodes).forEach(function(e){var r=t.flatNodes[e];n[e]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({},r)}),new e(this.props,n)}},{key:"getNode",value:function(e){return this.flatNodes[e]}},{key:"flattenNodes",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(Array.isArray(e)&&0!==e.length){var o=this.props,a=o.disabled,i=o.noCascade;e.forEach(function(e,o){var c=t.nodeHasChildren(e);t.flatNodes[e.value]={label:e.label,value:e.value,children:e.children,parent:n,isParent:c,isLeaf:!c,showCheckbox:void 0===e.showCheckbox||e.showCheckbox,disabled:t.getDisabledState(e,n,a,i),treeDepth:r,index:o},t.flattenNodes(e.children,e,r+1)})}}},{key:"nodeHasChildren",value:function(e){return Array.isArray(e.children)&&e.children.length>0}},{key:"getDisabledState",value:function(e,t,n,r){return!!n||(!(r||!t.disabled)||Boolean(e.disabled))}},{key:"deserializeLists",value:function(e){var t=this,n=["checked","expanded"];Object.keys(this.flatNodes).forEach(function(e){n.forEach(function(n){t.flatNodes[e][n]=!1})}),n.forEach(function(n){e[n].forEach(function(e){void 0!==t.flatNodes[e]&&(t.flatNodes[e][n]=!0)})})}},{key:"serializeList",value:function(e){var t=this,n=[];return Object.keys(this.flatNodes).forEach(function(r){t.flatNodes[r][e]&&n.push(r)}),n}},{key:"expandAllNodes",value:function(e){var t=this;return Object.keys(this.flatNodes).forEach(function(n){t.flatNodes[n].isParent&&(t.flatNodes[n].expanded=e)}),this}},{key:"toggleChecked",value:function(e,t,n){var r=this,o=this.flatNodes[e.value];if(o.isLeaf||n){if(e.disabled)return this;this.toggleNode(e.value,"checked",t)}else o.children.forEach(function(e){r.toggleChecked(e,t,n)});return this}},{key:"toggleNode",value:function(e,t,n){return this.flatNodes[e][t]=n,this}}])&&j(t.prototype,n),r&&j(t,r),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,S(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,f.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){this.updateDeterminateProperty()}},{key:"componentDidUpdate",value:function(){this.updateDeterminateProperty()}},{key:"updateDeterminateProperty",value:function(){var e=this.props.indeterminate;this.checkbox.indeterminate=e}},{key:"render",value:function(){var e=this,t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){T(e,t,n[t])})}return e}({},this.props);return delete t.indeterminate,f.a.createElement("input",E({},t,{ref:function(t){e.checkbox=t},type:"checkbox"}))}}])&&P(n.prototype,r),o&&P(n,o),t}();T(R,"propTypes",{indeterminate:s.a.bool}),T(R,"defaultProps",{indeterminate:!1});var I=R,L=s.a.shape({check:s.a.node,uncheck:s.a.node,halfCheck:s.a.node,expandClose:s.a.node,expandOpen:s.a.node,expandAll:s.a.node,collapseAll:s.a.node,parentClose:s.a.node,parentOpen:s.a.node,leaf:s.a.node}),z=s.a.shape({collapseAll:s.a.string.isRequired,expandAll:s.a.string.isRequired,toggle:s.a.string.isRequired});function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=M(t).call(this,e))||"object"!==q(o)&&"function"!=typeof o?F(r):o).onCheck=n.onCheck.bind(F(F(n))),n.onClick=n.onClick.bind(F(F(n))),n.onExpand=n.onExpand.bind(F(F(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,f.a.Component),n=t,(r=[{key:"onCheck",value:function(){var e=this.props,t=e.value,n=e.onCheck;n({value:t,checked:this.getCheckState({toggle:!0})})}},{key:"onClick",value:function(){var e=this.props,t=e.expandOnClick,n=e.isParent,r=e.value,o=e.onClick;n&&t&&this.onExpand(),o({value:r,checked:this.getCheckState({toggle:!1})})}},{key:"onExpand",value:function(){var e=this.props,t=e.expanded,n=e.value,r=e.onExpand;r({value:n,expanded:!t})}},{key:"getCheckState",value:function(e){var t=e.toggle,n=this.props,r=n.checked,o=n.optimisticToggle;return!(0!==r||!t)||(1===r&&!t||2===r&&o)}},{key:"renderCollapseButton",value:function(){var e=this.props,t=e.expandDisabled,n=e.isLeaf,r=e.lang;return n?f.a.createElement("span",{className:"rct-collapse"},f.a.createElement("span",{className:"rct-icon"})):f.a.createElement(_,{className:"rct-collapse rct-collapse-btn",disabled:t,title:r.toggle,onClick:this.onExpand},this.renderCollapseIcon())}},{key:"renderCollapseIcon",value:function(){var e=this.props,t=e.expanded,n=e.icons,r=n.expandClose,o=n.expandOpen;return t?o:r}},{key:"renderCheckboxIcon",value:function(){var e=this.props,t=e.checked,n=e.icons,r=n.uncheck,o=n.check,a=n.halfCheck;return 0===t?r:1===t?o:a}},{key:"renderNodeIcon",value:function(){var e=this.props,t=e.expanded,n=e.icon,r=e.icons,o=r.leaf,a=r.parentClose,i=r.parentOpen,c=e.isLeaf;return null!==n?n:c?o:t?i:a}},{key:"renderBareLabel",value:function(e){var t=this.props,n=t.onClick,r=t.title,o=null!==n;return f.a.createElement("span",{className:"rct-bare-label",title:r},o?f.a.createElement("span",{className:"rct-node-clickable",onClick:this.onClick,onKeyPress:this.onClick,role:"button",tabIndex:0},e):e)}},{key:"renderCheckboxLabel",value:function(e){var t=this.props,n=t.checked,r=t.disabled,o=t.title,a=t.treeId,i=t.value,c=null!==t.onClick,l="".concat(a,"-").concat(String(i).split(" ").join("_")),u=[f.a.createElement("label",{key:0,htmlFor:l,title:o},f.a.createElement(I,{checked:1===n,disabled:r,id:l,indeterminate:2===n,onClick:this.onCheck,onChange:function(){}}),f.a.createElement("span",{className:"rct-checkbox"},this.renderCheckboxIcon()),c?null:e)];return c&&u.push(f.a.createElement("span",{key:1,className:"rct-node-clickable",onClick:this.onClick,onKeyPress:this.onClick,role:"link",tabIndex:0},e)),u}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,n=e.showCheckbox,r=[e.showNodeIcon?f.a.createElement("span",{key:0,className:"rct-node-icon"},this.renderNodeIcon()):null,f.a.createElement("span",{key:1,className:"rct-title"},t)];return n?this.renderCheckboxLabel(r):this.renderBareLabel(r)}},{key:"renderChildren",value:function(){return this.props.expanded?this.props.children:null}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.disabled,r=e.expanded,a=e.isLeaf,i=o()({"rct-node":!0,"rct-node-leaf":a,"rct-node-parent":!a,"rct-node-expanded":!a&&r,"rct-node-collapsed":!a&&!r,"rct-disabled":n},t);return f.a.createElement("li",{className:i},f.a.createElement("span",{className:"rct-text"},this.renderCollapseButton(),this.renderLabel()),this.renderChildren())}}])&&D(n.prototype,r),a&&D(n,a),t}();U(H,"propTypes",{checked:s.a.number.isRequired,disabled:s.a.bool.isRequired,expandDisabled:s.a.bool.isRequired,expanded:s.a.bool.isRequired,icons:L.isRequired,isLeaf:s.a.bool.isRequired,isParent:s.a.bool.isRequired,label:s.a.node.isRequired,lang:z.isRequired,optimisticToggle:s.a.bool.isRequired,showNodeIcon:s.a.bool.isRequired,treeId:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]).isRequired,onCheck:s.a.func.isRequired,onExpand:s.a.func.isRequired,children:s.a.node,className:s.a.string,expandOnClick:s.a.bool,icon:s.a.node,showCheckbox:s.a.bool,title:s.a.string,onClick:s.a.func}),U(H,"defaultProps",{children:null,className:null,expandOnClick:!1,icon:null,showCheckbox:!0,title:null,onClick:function(){}});var V=H,$=s.a.oneOfType([s.a.arrayOf(s.a.string),s.a.arrayOf(s.a.number)]);function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={label:s.a.node.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]).isRequired,disabled:s.a.bool,icon:s.a.node,showCheckbox:s.a.bool,title:s.a.string},K=s.a.oneOfType([s.a.shape(J),s.a.shape(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){W(e,t,n[t])})}return e}({},J,{children:s.a.arrayOf(J).isRequired}))]);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){te(e,t,n[t])})}return e}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=X(t).call(this,e))||"object"!==G(o)&&"function"!=typeof o?ee(r):o;var a=new w(e);return a.flattenNodes(e.nodes),a.deserializeLists({checked:e.checked,expanded:e.expanded}),n.state={id:e.id||"rct-".concat(l()(7)),model:a,prevProps:e},n.onCheck=n.onCheck.bind(ee(ee(n))),n.onExpand=n.onExpand.bind(ee(ee(n))),n.onNodeClick=n.onNodeClick.bind(ee(ee(n))),n.onExpandAll=n.onExpandAll.bind(ee(ee(n))),n.onCollapseAll=n.onCollapseAll.bind(ee(ee(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,f.a.Component),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.model,r=t.prevProps,o=e.disabled,a=e.id,c=e.nodes,l=Y({},t,{prevProps:e});return n.setProps(e),i()(r.nodes,c)&&r.disabled===o||n.flattenNodes(c),null!==a&&(l=Y({},l,{id:a})),n.deserializeLists({checked:e.checked,expanded:e.expanded}),l}}],(r=[{key:"onCheck",value:function(e){var t=this.props,n=t.noCascade,r=t.onCheck,o=this.state.model.clone(),a=o.getNode(e.value);o.toggleChecked(e,e.checked,n),r(o.serializeList("checked"),Y({},a,e))}},{key:"onExpand",value:function(e){var t=this.props.onExpand,n=this.state.model.clone(),r=n.getNode(e.value);n.toggleNode(e.value,"expanded",e.expanded),t(n.serializeList("expanded"),Y({},r,e))}},{key:"onNodeClick",value:function(e){(0,this.props.onClick)(Y({},this.state.model.getNode(e.value),e))}},{key:"onExpandAll",value:function(){this.expandAllNodes()}},{key:"onCollapseAll",value:function(){this.expandAllNodes(!1)}},{key:"expandAllNodes",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(0,this.props.onExpand)(this.state.model.clone().expandAllNodes(e).serializeList("expanded"))}},{key:"determineShallowCheckState",value:function(e,t){var n=this.state.model.getNode(e.value);return n.isLeaf||t?n.checked?1:0:this.isEveryChildChecked(e)?1:this.isSomeChildChecked(e)?2:0}},{key:"isEveryChildChecked",value:function(e){var t=this;return e.children.every(function(e){return 1===t.state.model.getNode(e.value).checkState})}},{key:"isSomeChildChecked",value:function(e){var t=this;return e.children.some(function(e){return t.state.model.getNode(e.value).checkState>0})}},{key:"renderTreeNodes",value:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.props,a=o.expandDisabled,i=o.expandOnClick,c=o.icons,l=o.lang,u=o.noCascade,s=o.onClick,p=o.onlyLeafCheckboxes,d=o.optimisticToggle,h=o.showNodeTitle,b=o.showNodeIcon,y=this.state,v=y.id,x=y.model,m=t.defaultProps.icons,g=e.map(function(e){var t=e.value,o=x.getNode(e.value),y=o.isParent?n.renderTreeNodes(e.children,e):null;o.checkState=n.determineShallowCheckState(e,u);var g=p?o.isLeaf:o.showCheckbox;return!r.value||x.getNode(r.value).expanded?f.a.createElement(V,{key:t,checked:o.checkState,className:e.className,disabled:o.disabled,expandDisabled:a,expandOnClick:i,expanded:o.expanded,icon:e.icon,icons:Y({},m,c),label:e.label,lang:l,optimisticToggle:d,isLeaf:o.isLeaf,isParent:o.isParent,showCheckbox:g,showNodeIcon:b,title:h?e.title||e.label:e.title,treeId:v,value:e.value,onCheck:n.onCheck,onClick:s&&n.onNodeClick,onExpand:n.onExpand},y):null});return f.a.createElement("ol",null,g)}},{key:"renderExpandAll",value:function(){var e=this.props,t=e.icons,n=t.expandAll,r=t.collapseAll,o=e.lang;return e.showExpandAll?f.a.createElement("div",{className:"rct-options"},f.a.createElement(_,{className:"rct-option rct-option-expand-all",title:o.expandAll,onClick:this.onExpandAll},n),f.a.createElement(_,{className:"rct-option rct-option-collapse-all",title:o.collapseAll,onClick:this.onCollapseAll},r)):null}},{key:"renderHiddenInput",value:function(){var e=this.props,t=e.name,n=e.nameAsArray;return void 0===t?null:n?this.renderArrayHiddenInput():this.renderJoinedHiddenInput()}},{key:"renderArrayHiddenInput",value:function(){var e=this.props,t=e.checked,n=e.name;return t.map(function(e){var t="".concat(n,"[]");return f.a.createElement("input",{key:e,name:t,type:"hidden",value:e})})}},{key:"renderJoinedHiddenInput",value:function(){var e=this.props,t=e.checked,n=e.name,r=t.join(",");return f.a.createElement("input",{name:n,type:"hidden",value:r})}},{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.nodes,r=e.nativeCheckboxes,a=this.renderTreeNodes(n),i=o()({"react-checkbox-tree":!0,"rct-disabled":t,"rct-native-display":r});return f.a.createElement("div",{className:i},this.renderExpandAll(),this.renderHiddenInput(),a)}}])&&Q(n.prototype,r),a&&Q(n,a),t}();te(ne,"propTypes",{nodes:s.a.arrayOf(K).isRequired,checked:$,disabled:s.a.bool,expandDisabled:s.a.bool,expandOnClick:s.a.bool,expanded:$,icons:L,id:s.a.string,lang:z,name:s.a.string,nameAsArray:s.a.bool,nativeCheckboxes:s.a.bool,noCascade:s.a.bool,onlyLeafCheckboxes:s.a.bool,optimisticToggle:s.a.bool,showExpandAll:s.a.bool,showNodeIcon:s.a.bool,showNodeTitle:s.a.bool,onCheck:s.a.func,onClick:s.a.func,onExpand:s.a.func}),te(ne,"defaultProps",{checked:[],disabled:!1,expandDisabled:!1,expandOnClick:!1,expanded:[],icons:{check:f.a.createElement("span",{className:"rct-icon rct-icon-check"}),uncheck:f.a.createElement("span",{className:"rct-icon rct-icon-uncheck"}),halfCheck:f.a.createElement("span",{className:"rct-icon rct-icon-half-check"}),expandClose:f.a.createElement("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:f.a.createElement("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:f.a.createElement("span",{className:"rct-icon rct-icon-expand-all"}),collapseAll:f.a.createElement("span",{className:"rct-icon rct-icon-collapse-all"}),parentClose:f.a.createElement("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:f.a.createElement("span",{className:"rct-icon rct-icon-parent-open"}),leaf:f.a.createElement("span",{className:"rct-icon rct-icon-leaf"})},id:null,lang:{collapseAll:"Collapse all",expandAll:"Expand all",toggle:"Toggle"},name:void 0,nameAsArray:!1,nativeCheckboxes:!1,noCascade:!1,onlyLeafCheckboxes:!1,optimisticToggle:!0,showExpandAll:!1,showNodeIcon:!0,showNodeTitle:!1,onCheck:function(){},onClick:null,onExpand:function(){}});t.default=ne}])});

/***/ }),

/***/ 9238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DragLayer": () => (/* reexport */ DragLayer),
  "DragSource": () => (/* reexport */ DragSource),
  "DropTarget": () => (/* reexport */ DropTarget)
});

// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/js_utils.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// cheap lodash replacements
function isFunction(input) {
  return typeof input === 'function';
}
function noop() {// noop
}

function isObjectLike(input) {
  return _typeof(input) === 'object' && input !== null;
}

function isPlainObject(input) {
  if (!isObjectLike(input)) {
    return false;
  }

  if (Object.getPrototypeOf(input) === null) {
    return true;
  }

  var proto = input;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(input) === proto;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/utils.js
function getDecoratedComponent(instanceRef) {
  var currentRef = instanceRef.current;

  if (currentRef == null) {
    return null;
  } else if (currentRef.decoratedRef) {
    // go through the private field in decorateHandler to avoid the invariant hit
    return currentRef.decoratedRef.current;
  } else {
    return currentRef;
  }
}
function isClassComponent(Component) {
  return Component && Component.prototype && typeof Component.prototype.render === 'function';
}
function isRefForwardingComponent(C) {
  var _item$$$typeof;

  var item = C;
  return (item === null || item === void 0 ? void 0 : (_item$$$typeof = item.$$typeof) === null || _item$$$typeof === void 0 ? void 0 : _item$$$typeof.toString()) === 'Symbol(react.forward_ref)';
}
function isRefable(C) {
  return isClassComponent(C) || isRefForwardingComponent(C);
}
function checkDecoratorArguments(functionName, signature) {
  if (false) { var arg, i; }
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
var shallowequal_esm = __webpack_require__(15047);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 30 modules
var DndContext = __webpack_require__(82514);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/disposables.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */

var Disposable =
/** @class */
function () {
  var Disposable = /*#__PURE__*/function () {
    function Disposable(action) {
      _classCallCheck(this, Disposable);

      this.isDisposed = false;
      this.action = isFunction(action) ? action : noop;
    }
    /**
     * Validates whether the given object is a disposable
     * @param {Object} Object to test whether it has a dispose method
     * @returns {Boolean} true if a disposable object, else false.
     */


    _createClass(Disposable, [{
      key: "dispose",

      /** Performs the task of cleaning up resources. */
      value: function dispose() {
        if (!this.isDisposed) {
          this.action();
          this.isDisposed = true;
        }
      }
    }], [{
      key: "isDisposable",
      value: function isDisposable(d) {
        return Boolean(d && isFunction(d.dispose));
      }
    }, {
      key: "_fixup",
      value: function _fixup(result) {
        return Disposable.isDisposable(result) ? result : Disposable.empty;
      }
      /**
       * Creates a disposable object that invokes the specified action when disposed.
       * @param {Function} dispose Action to run during the first call to dispose.
       * The action is guaranteed to be run at most once.
       * @return {Disposable} The disposable object that runs the given action upon disposal.
       */

    }, {
      key: "create",
      value: function create(action) {
        return new Disposable(action);
      }
    }]);

    return Disposable;
  }();
  /**
   * Gets the disposable that does nothing when disposed.
   */


  Disposable.empty = {
    dispose: noop
  };
  return Disposable;
}();


/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */

var CompositeDisposable = /*#__PURE__*/function () {
  function CompositeDisposable() {
    _classCallCheck(this, CompositeDisposable);

    this.isDisposed = false;

    for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }

    this.disposables = disposables;
  }
  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Any} item Disposable to add.
   */


  _createClass(CompositeDisposable, [{
    key: "add",
    value: function add(item) {
      if (this.isDisposed) {
        item.dispose();
      } else {
        this.disposables.push(item);
      }
    }
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */

  }, {
    key: "remove",
    value: function remove(item) {
      var shouldDispose = false;

      if (!this.isDisposed) {
        var idx = this.disposables.indexOf(item);

        if (idx !== -1) {
          shouldDispose = true;
          this.disposables.splice(idx, 1);
          item.dispose();
        }
      }

      return shouldDispose;
    }
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */

  }, {
    key: "clear",
    value: function clear() {
      if (!this.isDisposed) {
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i = 0; _i < len; _i++) {
          currentDisposables[_i].dispose();
        }
      }
    }
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i2 = 0; _i2 < len; _i2++) {
          currentDisposables[_i2].dispose();
        }
      }
    }
  }]);

  return CompositeDisposable;
}();
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */

var SerialDisposable = /*#__PURE__*/function () {
  function SerialDisposable() {
    _classCallCheck(this, SerialDisposable);

    this.isDisposed = false;
  }
  /**
   * Gets the underlying disposable.
   * @returns {Any} the underlying disposable.
   */


  _createClass(SerialDisposable, [{
    key: "getDisposable",
    value: function getDisposable() {
      return this.current;
    }
  }, {
    key: "setDisposable",
    value: function setDisposable(value) {
      var shouldDispose = this.isDisposed;

      if (!shouldDispose) {
        var old = this.current;
        this.current = value;

        if (old) {
          old.dispose();
        }
      }

      if (shouldDispose && value) {
        value.dispose();
      }
    }
    /** Performs the task of cleaning up resources. */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var old = this.current;
        this.current = undefined;

        if (old) {
          old.dispose();
        }
      }
    }
  }]);

  return SerialDisposable;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js
function decorateHandler_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { decorateHandler_typeof = function _typeof(obj) { return typeof obj; }; } else { decorateHandler_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return decorateHandler_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function decorateHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function decorateHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function decorateHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) decorateHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) decorateHandler_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (decorateHandler_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









function decorateHandler(_ref) {
  var DecoratedComponent = _ref.DecoratedComponent,
      createHandler = _ref.createHandler,
      createMonitor = _ref.createMonitor,
      createConnector = _ref.createConnector,
      registerHandler = _ref.registerHandler,
      containerDisplayName = _ref.containerDisplayName,
      getType = _ref.getType,
      collect = _ref.collect,
      options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal_esm/* shallowEqual */.w : _options$arePropsEqua;
  var Decorated = DecoratedComponent;
  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  var DragDropContainer =
  /** @class */
  function () {
    var DragDropContainer = /*#__PURE__*/function (_React$Component) {
      _inherits(DragDropContainer, _React$Component);

      var _super = _createSuper(DragDropContainer);

      function DragDropContainer(props) {
        var _this;

        decorateHandler_classCallCheck(this, DragDropContainer);

        _this = _super.call(this, props);
        _this.decoratedRef = react.createRef();

        _this.handleChange = function () {
          var nextState = _this.getCurrentState();

          if (!(0,shallowequal_esm/* shallowEqual */.w)(nextState, _this.state)) {
            _this.setState(nextState);
          }
        };

        _this.disposable = new SerialDisposable();

        _this.receiveProps(props);

        _this.dispose();

        return _this;
      }

      decorateHandler_createClass(DragDropContainer, [{
        key: "getHandlerId",
        value: function getHandlerId() {
          return this.handlerId;
        }
      }, {
        key: "getDecoratedComponentInstance",
        value: function getDecoratedComponentInstance() {
          (0,invariant_esm/* invariant */.k)(this.decoratedRef.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
          return this.decoratedRef.current;
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !(0,shallowequal_esm/* shallowEqual */.w)(nextState, this.state);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.disposable = new SerialDisposable();
          this.currentType = undefined;
          this.receiveProps(this.props);
          this.handleChange();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (!arePropsEqual(this.props, prevProps)) {
            this.receiveProps(this.props);
            this.handleChange();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.dispose();
        }
      }, {
        key: "receiveProps",
        value: function receiveProps(props) {
          if (!this.handler) {
            return;
          }

          this.handler.receiveProps(props);
          this.receiveType(getType(props));
        }
      }, {
        key: "receiveType",
        value: function receiveType(type) {
          if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
            return;
          }

          if (type === this.currentType) {
            return;
          }

          this.currentType = type;

          var _registerHandler = registerHandler(type, this.handler, this.manager),
              _registerHandler2 = _slicedToArray(_registerHandler, 2),
              handlerId = _registerHandler2[0],
              unregister = _registerHandler2[1];

          this.handlerId = handlerId;
          this.handlerMonitor.receiveHandlerId(handlerId);
          this.handlerConnector.receiveHandlerId(handlerId);
          var globalMonitor = this.manager.getMonitor();
          var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {
            handlerIds: [handlerId]
          });
          this.disposable.setDisposable(new CompositeDisposable(new Disposable(unsubscribe), new Disposable(unregister)));
        }
      }, {
        key: "dispose",
        value: function dispose() {
          this.disposable.dispose();

          if (this.handlerConnector) {
            this.handlerConnector.receiveHandlerId(null);
          }
        }
      }, {
        key: "getCurrentState",
        value: function getCurrentState() {
          if (!this.handlerConnector) {
            return {};
          }

          var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor, this.props);

          if (false) {}

          return nextState;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return react.createElement(DndContext/* DndContext.Consumer */.L.Consumer, null, function (_ref2) {
            var dragDropManager = _ref2.dragDropManager;

            _this2.receiveDragDropManager(dragDropManager);

            if (typeof requestAnimationFrame !== 'undefined') {
              requestAnimationFrame(function () {
                var _this2$handlerConnect;

                return (_this2$handlerConnect = _this2.handlerConnector) === null || _this2$handlerConnect === void 0 ? void 0 : _this2$handlerConnect.reconnect();
              });
            }

            return react.createElement(Decorated, Object.assign({}, _this2.props, _this2.getCurrentState(), {
              // NOTE: if Decorated is a Function Component, decoratedRef will not be populated unless it's a refforwarding component.
              ref: isRefable(Decorated) ? _this2.decoratedRef : null
            }));
          });
        }
      }, {
        key: "receiveDragDropManager",
        value: function receiveDragDropManager(dragDropManager) {
          if (this.manager !== undefined) {
            return;
          }

          (0,invariant_esm/* invariant */.k)(dragDropManager !== undefined, 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

          if (dragDropManager === undefined) {
            return;
          }

          this.manager = dragDropManager;
          this.handlerMonitor = createMonitor(dragDropManager);
          this.handlerConnector = createConnector(dragDropManager.getBackend());
          this.handler = createHandler(this.handlerMonitor, this.decoratedRef);
        }
      }]);

      return DragDropContainer;
    }(react.Component);

    DragDropContainer.DecoratedComponent = DecoratedComponent;
    DragDropContainer.displayName = "".concat(containerDisplayName, "(").concat(displayName, ")");
    return DragDropContainer;
  }();

  return hoist_non_react_statics_cjs_default()(DragDropContainer, DecoratedComponent);
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(33273);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
var DragSourceMonitorImpl = __webpack_require__(60938);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/SourceConnector.js
var SourceConnector = __webpack_require__(8556);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/isValidType.js
function isValidType_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isValidType_typeof = function _typeof(obj) { return typeof obj; }; } else { isValidType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isValidType_typeof(obj); }

function isValidType(type, allowArray) {
  return typeof type === 'string' || isValidType_typeof(type) === 'symbol' || !!allowArray && Array.isArray(type) && type.every(function (t) {
    return isValidType(t, false);
  });
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js
function createSourceFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createSourceFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function createSourceFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) createSourceFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) createSourceFactory_defineProperties(Constructor, staticProps); return Constructor; }




var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];

var SourceImpl = /*#__PURE__*/function () {
  function SourceImpl(spec, monitor, ref) {
    var _this = this;

    createSourceFactory_classCallCheck(this, SourceImpl);

    this.props = null;

    this.beginDrag = function () {
      if (!_this.props) {
        return;
      }

      var item = _this.spec.beginDrag(_this.props, _this.monitor, _this.ref.current);

      if (false) {}

      return item;
    };

    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  createSourceFactory_createClass(SourceImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      if (!this.props) {
        return false;
      }

      if (!this.spec.canDrag) {
        return true;
      }

      return this.spec.canDrag(this.props, this.monitor);
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, sourceId) {
      if (!this.props) {
        return false;
      }

      if (!this.spec.isDragging) {
        return sourceId === globalMonitor.getSourceId();
      }

      return this.spec.isDragging(this.props, this.monitor);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      if (!this.props) {
        return;
      }

      if (!this.spec.endDrag) {
        return;
      }

      this.spec.endDrag(this.props, this.monitor, getDecoratedComponent(this.ref));
    }
  }]);

  return SourceImpl;
}();

function createSourceFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', ALLOWED_SPEC_METHODS.join(', '), key);
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  REQUIRED_SPEC_METHODS.forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  return function createSource(monitor, ref) {
    return new SourceImpl(spec, monitor, ref);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DragSource.js









/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD options
 */

function DragSource(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  checkDecoratorArguments('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    (0,invariant_esm/* invariant */.k)(isValidType(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', type);

    getType = function getType() {
      return type;
    };
  }

  (0,invariant_esm/* invariant */.k)(isPlainObject(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', spec);
  var createSource = createSourceFactory(spec);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  (0,invariant_esm/* invariant */.k)(isPlainObject(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  return function decorateSource(DecoratedComponent) {
    return decorateHandler({
      containerDisplayName: 'DragSource',
      createHandler: createSource,
      registerHandler: registration/* registerSource */.w,
      createConnector: function createConnector(backend) {
        return new SourceConnector/* SourceConnector */.x(backend);
      },
      createMonitor: function createMonitor(manager) {
        return new DragSourceMonitorImpl/* DragSourceMonitorImpl */.p(manager);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
var TargetConnector = __webpack_require__(89026);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
var DropTargetMonitorImpl = __webpack_require__(56941);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js
function createTargetFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createTargetFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function createTargetFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) createTargetFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) createTargetFactory_defineProperties(Constructor, staticProps); return Constructor; }




var createTargetFactory_ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

var TargetImpl = /*#__PURE__*/function () {
  function TargetImpl(spec, monitor, ref) {
    createTargetFactory_classCallCheck(this, TargetImpl);

    this.props = null;
    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  createTargetFactory_createClass(TargetImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "receiveMonitor",
    value: function receiveMonitor(monitor) {
      this.monitor = monitor;
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.spec.canDrop) {
        return true;
      }

      return this.spec.canDrop(this.props, this.monitor);
    }
  }, {
    key: "hover",
    value: function hover() {
      if (!this.spec.hover || !this.props) {
        return;
      }

      this.spec.hover(this.props, this.monitor, getDecoratedComponent(this.ref));
    }
  }, {
    key: "drop",
    value: function drop() {
      if (!this.spec.drop) {
        return undefined;
      }

      var dropResult = this.spec.drop(this.props, this.monitor, this.ref.current);

      if (false) {}

      return dropResult;
    }
  }]);

  return TargetImpl;
}();

function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(createTargetFactory_ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', createTargetFactory_ALLOWED_SPEC_METHODS.join(', '), key);
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', key, key, spec[key]);
  });
  return function createTarget(monitor, ref) {
    return new TargetImpl(spec, monitor, ref);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DropTarget.js









function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  checkDecoratorArguments('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    (0,invariant_esm/* invariant */.k)(isValidType(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', type);

    getType = function getType() {
      return type;
    };
  }

  (0,invariant_esm/* invariant */.k)(isPlainObject(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', spec);
  var createTarget = createTargetFactory(spec);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  (0,invariant_esm/* invariant */.k)(isPlainObject(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  return function decorateTarget(DecoratedComponent) {
    return decorateHandler({
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: registration/* registerTarget */.n,
      createMonitor: function createMonitor(manager) {
        return new DropTargetMonitorImpl/* DropTargetMonitorImpl */.H(manager);
      },
      createConnector: function createConnector(backend) {
        return new TargetConnector/* TargetConnector */.Y(backend);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DragLayer.js
function DragLayer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DragLayer_typeof = function _typeof(obj) { return typeof obj; }; } else { DragLayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DragLayer_typeof(obj); }

function DragLayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DragLayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DragLayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) DragLayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) DragLayer_defineProperties(Constructor, staticProps); return Constructor; }

function DragLayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DragLayer_setPrototypeOf(subClass, superClass); }

function DragLayer_setPrototypeOf(o, p) { DragLayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DragLayer_setPrototypeOf(o, p); }

function DragLayer_createSuper(Derived) { var hasNativeReflectConstruct = DragLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = DragLayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = DragLayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return DragLayer_possibleConstructorReturn(this, result); }; }

function DragLayer_possibleConstructorReturn(self, call) { if (call && (DragLayer_typeof(call) === "object" || typeof call === "function")) { return call; } return DragLayer_assertThisInitialized(self); }

function DragLayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DragLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function DragLayer_getPrototypeOf(o) { DragLayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DragLayer_getPrototypeOf(o); }








function DragLayer(collect) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  checkDecoratorArguments('DragLayer', 'collect[, options]', collect, options);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', collect);
  (0,invariant_esm/* invariant */.k)(isPlainObject(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', options);
  return function decorateLayer(DecoratedComponent) {
    var Decorated = DecoratedComponent;
    var _options$arePropsEqua = options.arePropsEqual,
        arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal_esm/* shallowEqual */.w : _options$arePropsEqua;
    var displayName = Decorated.displayName || Decorated.name || 'Component';

    var DragLayerContainer =
    /** @class */
    function () {
      var DragLayerContainer = /*#__PURE__*/function (_React$Component) {
        DragLayer_inherits(DragLayerContainer, _React$Component);

        var _super = DragLayer_createSuper(DragLayerContainer);

        function DragLayerContainer() {
          var _this;

          DragLayer_classCallCheck(this, DragLayerContainer);

          _this = _super.apply(this, arguments);
          _this.isCurrentlyMounted = false;
          _this.ref = react.createRef();

          _this.handleChange = function () {
            if (!_this.isCurrentlyMounted) {
              return;
            }

            var nextState = _this.getCurrentState();

            if (!(0,shallowequal_esm/* shallowEqual */.w)(nextState, _this.state)) {
              _this.setState(nextState);
            }
          };

          return _this;
        }

        DragLayer_createClass(DragLayerContainer, [{
          key: "getDecoratedComponentInstance",
          value: function getDecoratedComponentInstance() {
            (0,invariant_esm/* invariant */.k)(this.ref.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
            return this.ref.current;
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            return !arePropsEqual(nextProps, this.props) || !(0,shallowequal_esm/* shallowEqual */.w)(nextState, this.state);
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.isCurrentlyMounted = true;
            this.handleChange();
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.isCurrentlyMounted = false;

            if (this.unsubscribeFromOffsetChange) {
              this.unsubscribeFromOffsetChange();
              this.unsubscribeFromOffsetChange = undefined;
            }

            if (this.unsubscribeFromStateChange) {
              this.unsubscribeFromStateChange();
              this.unsubscribeFromStateChange = undefined;
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;

            return react.createElement(DndContext/* DndContext.Consumer */.L.Consumer, null, function (_ref) {
              var dragDropManager = _ref.dragDropManager;

              if (dragDropManager === undefined) {
                return null;
              }

              _this2.receiveDragDropManager(dragDropManager); // Let componentDidMount fire to initialize the collected state


              if (!_this2.isCurrentlyMounted) {
                return null;
              }

              return react.createElement(Decorated, Object.assign({}, _this2.props, _this2.state, {
                ref: isRefable(Decorated) ? _this2.ref : null
              }));
            });
          }
        }, {
          key: "receiveDragDropManager",
          value: function receiveDragDropManager(dragDropManager) {
            if (this.manager !== undefined) {
              return;
            }

            this.manager = dragDropManager;
            (0,invariant_esm/* invariant */.k)(DragLayer_typeof(dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
            var monitor = this.manager.getMonitor();
            this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
            this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
          }
        }, {
          key: "getCurrentState",
          value: function getCurrentState() {
            if (!this.manager) {
              return {};
            }

            var monitor = this.manager.getMonitor();
            return collect(monitor, this.props);
          }
        }]);

        return DragLayerContainer;
      }(react.Component);

      DragLayerContainer.displayName = "DragLayer(".concat(displayName, ")");
      DragLayerContainer.DecoratedComponent = DecoratedComponent;
      return DragLayerContainer;
    }();

    return hoist_non_react_statics_cjs_default()(DragLayerContainer, DecoratedComponent);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/index.js





/***/ }),

/***/ 84785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragLayer": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.DragLayer),
/* harmony export */   "DragSource": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.DragSource),
/* harmony export */   "DropTarget": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.DropTarget)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31388);
/* harmony reexport (checked) */ if(__webpack_require__.o(_interfaces__WEBPACK_IMPORTED_MODULE_0__, "DragLayer")) __webpack_require__.d(__webpack_exports__, { "DragLayer": function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__.DragLayer; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_interfaces__WEBPACK_IMPORTED_MODULE_0__, "DragSource")) __webpack_require__.d(__webpack_exports__, { "DragSource": function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__.DragSource; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_interfaces__WEBPACK_IMPORTED_MODULE_0__, "DropTarget")) __webpack_require__.d(__webpack_exports__, { "DropTarget": function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__.DropTarget; } });
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9238);





/***/ }),

/***/ 73897:
/***/ (() => {



/***/ }),

/***/ 48058:
/***/ (() => {



/***/ }),

/***/ 31388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _monitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75253);
/* harmony import */ var _monitors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_monitors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_monitors__WEBPACK_IMPORTED_MODULE_0__, "DragLayer")) __webpack_require__.d(__webpack_exports__, { "DragLayer": function() { return _monitors__WEBPACK_IMPORTED_MODULE_0__.DragLayer; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_monitors__WEBPACK_IMPORTED_MODULE_0__, "DragSource")) __webpack_require__.d(__webpack_exports__, { "DragSource": function() { return _monitors__WEBPACK_IMPORTED_MODULE_0__.DragSource; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_monitors__WEBPACK_IMPORTED_MODULE_0__, "DropTarget")) __webpack_require__.d(__webpack_exports__, { "DropTarget": function() { return _monitors__WEBPACK_IMPORTED_MODULE_0__.DropTarget; } });
/* harmony import */ var _hooksApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48058);
/* harmony import */ var _hooksApi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hooksApi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_hooksApi__WEBPACK_IMPORTED_MODULE_1__, "DragLayer")) __webpack_require__.d(__webpack_exports__, { "DragLayer": function() { return _hooksApi__WEBPACK_IMPORTED_MODULE_1__.DragLayer; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_hooksApi__WEBPACK_IMPORTED_MODULE_1__, "DragSource")) __webpack_require__.d(__webpack_exports__, { "DragSource": function() { return _hooksApi__WEBPACK_IMPORTED_MODULE_1__.DragSource; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_hooksApi__WEBPACK_IMPORTED_MODULE_1__, "DropTarget")) __webpack_require__.d(__webpack_exports__, { "DropTarget": function() { return _hooksApi__WEBPACK_IMPORTED_MODULE_1__.DropTarget; } });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72105);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_options__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_options__WEBPACK_IMPORTED_MODULE_2__, "DragLayer")) __webpack_require__.d(__webpack_exports__, { "DragLayer": function() { return _options__WEBPACK_IMPORTED_MODULE_2__.DragLayer; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_options__WEBPACK_IMPORTED_MODULE_2__, "DragSource")) __webpack_require__.d(__webpack_exports__, { "DragSource": function() { return _options__WEBPACK_IMPORTED_MODULE_2__.DragSource; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_options__WEBPACK_IMPORTED_MODULE_2__, "DropTarget")) __webpack_require__.d(__webpack_exports__, { "DropTarget": function() { return _options__WEBPACK_IMPORTED_MODULE_2__.DropTarget; } });
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73897);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_connectors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_connectors__WEBPACK_IMPORTED_MODULE_3__, "DragLayer")) __webpack_require__.d(__webpack_exports__, { "DragLayer": function() { return _connectors__WEBPACK_IMPORTED_MODULE_3__.DragLayer; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_connectors__WEBPACK_IMPORTED_MODULE_3__, "DragSource")) __webpack_require__.d(__webpack_exports__, { "DragSource": function() { return _connectors__WEBPACK_IMPORTED_MODULE_3__.DragSource; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_connectors__WEBPACK_IMPORTED_MODULE_3__, "DropTarget")) __webpack_require__.d(__webpack_exports__, { "DropTarget": function() { return _connectors__WEBPACK_IMPORTED_MODULE_3__.DropTarget; } });





/***/ }),

/***/ 75253:
/***/ (() => {



/***/ }),

/***/ 72105:
/***/ (() => {



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

/***/ 24903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.cj = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(76597);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      searchTerm: _this.props.value || ''
    };
    _this.updateSearch = _this.updateSearch.bind(_this);
    _this.filter = _this.filter.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.value !== 'undefined' && nextProps.value !== this.props.value) {
        var e = {
          target: {
            value: nextProps.value
          }
        };
        this.updateSearch(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          onChange = _props.onChange,
          caseSensitive = _props.caseSensitive,
          sortResults = _props.sortResults,
          throttle = _props.throttle,
          filterKeys = _props.filterKeys,
          value = _props.value,
          fuzzy = _props.fuzzy,
          inputClassName = _props.inputClassName,
          inputProps = _objectWithoutProperties(_props, ['className', 'onChange', 'caseSensitive', 'sortResults', 'throttle', 'filterKeys', 'value', 'fuzzy', 'inputClassName']); // eslint-disable-line no-unused-vars


      inputProps.type = inputProps.type || 'search';
      inputProps.value = this.state.searchTerm;
      inputProps.onChange = this.updateSearch;
      inputProps.className = inputClassName;
      inputProps.placeholder = inputProps.placeholder || 'Search';
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', inputProps)
      );
    }
  }, {
    key: 'updateSearch',
    value: function updateSearch(e) {
      var _this2 = this;

      var searchTerm = e.target.value;
      this.setState({
        searchTerm: searchTerm
      }, function () {
        if (_this2._throttleTimeout) {
          clearTimeout(_this2._throttleTimeout);
        }

        _this2._throttleTimeout = setTimeout(function () {
          return _this2.props.onChange(searchTerm);
        }, _this2.props.throttle);
      });
    }
  }, {
    key: 'filter',
    value: function filter(keys) {
      var _props2 = this.props,
          filterKeys = _props2.filterKeys,
          caseSensitive = _props2.caseSensitive,
          fuzzy = _props2.fuzzy,
          sortResults = _props2.sortResults;

      return (0, _util.createFilter)(this.state.searchTerm, keys || filterKeys, {
        caseSensitive: caseSensitive,
        fuzzy: fuzzy,
        sortResults: sortResults
      });
    }
  }]);

  return Search;
}(_react.Component);

Search.defaultProps = {
  className: '',
  onChange: function onChange() {},

  caseSensitive: false,
  fuzzy: false,
  throttle: 200
};

Search.propTypes = {
  className: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  caseSensitive: _propTypes2.default.bool,
  sortResults: _propTypes2.default.bool,
  fuzzy: _propTypes2.default.bool,
  throttle: _propTypes2.default.number,
  filterKeys: _propTypes2.default.oneOf([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  value: _propTypes2.default.string
};

__webpack_unused_export__ = Search;
exports.cj = _util.createFilter;

/***/ }),

/***/ 76597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getValuesForKey = getValuesForKey;
exports.searchStrings = searchStrings;
exports.createFilter = createFilter;

var _fuse = __webpack_require__(69021);

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flatten(array) {
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function getValuesForKey(key, item) {
  var keys = key.split('.');
  var results = [item];
  keys.forEach(function (_key) {
    var tmp = [];
    results.forEach(function (result) {
      if (result) {
        if (result instanceof Array) {
          var index = parseInt(_key, 10);
          if (!isNaN(index)) {
            return tmp.push(result[index]);
          }
          result.forEach(function (res) {
            tmp.push(res[_key]);
          });
        } else if (result && typeof result.get === 'function') {
          tmp.push(result.get(_key));
        } else {
          tmp.push(result[_key]);
        }
      }
    });

    results = tmp;
  });

  // Support arrays and Immutable lists.
  results = results.map(function (r) {
    return r && r.push && r.toArray ? r.toArray() : r;
  });
  results = flatten(results);

  return results.filter(function (r) {
    return typeof r === 'string' || typeof r === 'number';
  });
}

function searchStrings(strings, term) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      caseSensitive = _ref.caseSensitive,
      fuzzy = _ref.fuzzy,
      sortResults = _ref.sortResults,
      exactMatch = _ref.exactMatch;

  strings = strings.map(function (e) {
    return e.toString();
  });

  try {
    if (fuzzy) {
      if (typeof strings.toJS === 'function') {
        strings = strings.toJS();
      }
      var fuse = new _fuse2.default(strings.map(function (s) {
        return { id: s };
      }), { keys: ['id'], id: 'id', caseSensitive: caseSensitive, shouldSort: sortResults });
      return fuse.search(term).length;
    }
    return strings.some(function (value) {
      try {
        if (!caseSensitive) {
          value = value.toLowerCase();
        }
        if (exactMatch) {
          term = new RegExp('^' + term + '$', 'i');
        }
        if (value && value.search(term) !== -1) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    });
  } catch (e) {
    return false;
  }
}

function createFilter(term, keys) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return function (item) {
    if (term === '') {
      return true;
    }

    if (!options.caseSensitive) {
      term = term.toLowerCase();
    }

    var terms = term.split(' ');

    if (!keys) {
      return terms.every(function (term) {
        return searchStrings([item], term, options);
      });
    }

    if (typeof keys === 'string') {
      keys = [keys];
    }

    return terms.every(function (term) {
      // allow search in specific fields with the syntax `field:search`
      var currentKeys = void 0;
      if (term.indexOf(':') !== -1) {
        var searchedField = term.split(':')[0];
        term = term.split(':')[1];
        currentKeys = keys.filter(function (key) {
          return key.toLowerCase().indexOf(searchedField) > -1;
        });
      } else {
        currentKeys = keys;
      }

      return currentKeys.some(function (key) {
        var values = getValuesForKey(key, item);
        return searchStrings(values, term, options);
      });
    });
  };
}

/***/ }),

/***/ 69021:
/***/ (function(module) {

/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=r(1),a=r(7),s=a.get,c=(a.deepValue,a.isArray),h=function(){function e(t,r){var n=r.location,o=void 0===n?0:n,i=r.distance,a=void 0===i?100:i,c=r.threshold,h=void 0===c?.6:c,l=r.maxPatternLength,u=void 0===l?32:l,f=r.caseSensitive,v=void 0!==f&&f,p=r.tokenSeparator,d=void 0===p?/ +/g:p,g=r.findAllMatches,y=void 0!==g&&g,m=r.minMatchCharLength,k=void 0===m?1:m,b=r.id,S=void 0===b?null:b,x=r.keys,M=void 0===x?[]:x,_=r.shouldSort,w=void 0===_||_,L=r.getFn,A=void 0===L?s:L,O=r.sortFn,C=void 0===O?function(e,t){return e.score-t.score}:O,j=r.tokenize,P=void 0!==j&&j,I=r.matchAllTokens,F=void 0!==I&&I,T=r.includeMatches,N=void 0!==T&&T,z=r.includeScore,E=void 0!==z&&z,W=r.verbose,K=void 0!==W&&W;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:h,maxPatternLength:u,isCaseSensitive:v,tokenSeparator:d,findAllMatches:y,minMatchCharLength:k,id:S,keys:M,includeMatches:N,includeScore:E,shouldSort:w,getFn:A,sortFn:C,verbose:K,tokenize:P,matchAllTokens:F},this.setCollection(t),this._processKeys(M)}var t,r,a;return t=e,(r=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,r=e.length;t<r;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var o=null,i=null,a=0,s=0,c=e.length;s<c;s+=1){var h=e[s];if(!h.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=h.name;if(this._keyNames.push(l),!h.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=h.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');i=null==i?u:Math.max(i,u),o=null==o?u:Math.min(o,u),this._keyWeights[l]=u,a+=u}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var r=this._prepareSearchers(e),n=r.tokenSearchers,o=r.fullSearcher,i=this._search(n,o);return this._computeScore(i),this.options.shouldSort&&this._sort(i),t.limit&&"number"==typeof t.limit&&(i=i.slice(0,t.limit)),this._format(i)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,c=r.length;s<c;s+=1)for(var h=r[s],l=0,u=this._keyNames.length;l<u;l+=1){var f=this._keyNames[l];this._analyze({key:f,value:this.options.getFn(h,f),record:h,index:s},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var r=this,n=e.key,o=e.arrayIndex,i=void 0===o?-1:o,a=e.value,s=e.record,h=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,f=t.fullSearcher,v=t.resultMap,p=void 0===v?{}:v,d=t.results,g=void 0===d?[]:d;!function e(t,o,i,a){if(null!=o)if("string"==typeof o){var s=!1,h=-1,l=0;r._log("\nKey: ".concat(""===n?"--":n));var v=f.search(o);if(r._log('Full text: "'.concat(o,'", score: ').concat(v.score)),r.options.tokenize){for(var d=o.split(r.options.tokenSeparator),y=d.length,m=[],k=0,b=u.length;k<b;k+=1){var S=u[k];r._log('\nPattern: "'.concat(S.pattern,'"'));for(var x=!1,M=0;M<y;M+=1){var _=d[M],w=S.search(_),L={};w.isMatch?(L[_]=w.score,s=!0,x=!0,m.push(w.score)):(L[_]=1,r.options.matchAllTokens||m.push(1)),r._log('Token: "'.concat(_,'", score: ').concat(L[_]))}x&&(l+=1)}h=m[0];for(var A=m.length,O=1;O<A;O+=1)h+=m[O];h/=A,r._log("Token score average:",h)}var C=v.score;h>-1&&(C=(C+h)/2),r._log("Score average:",C);var j=!r.options.tokenize||!r.options.matchAllTokens||l>=u.length;if(r._log("\nCheck Matches: ".concat(j)),(s||v.isMatch)&&j){var P={key:n,arrayIndex:t,value:o,score:C};r.options.includeMatches&&(P.matchedIndices=v.matchedIndices);var I=p[a];I?I.output.push(P):(p[a]={item:i,output:[P]},g.push(p[a]))}}else if(c(o))for(var F=0,T=o.length;F<T;F+=1)e(F,o[F],i,a)}(i,a,s,h)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,r=!!Object.keys(t).length,n=0,o=e.length;n<o;n+=1){for(var i=e[n],a=i.output,s=a.length,c=1,h=0;h<s;h+=1){var l=a[h],u=l.key,f=r?t[u]:1,v=0===l.score&&t&&t[u]>0?Number.EPSILON:l.score;c*=Math.pow(v,f)}i.score=c,this._log(i)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var r=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==r.indexOf(t))return;r.push(t)}return t},2)),r=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,r),a&&o(t,a),e}();e.exports=h},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=r(2),i=r(3),a=r(6),s=function(){function e(t,r){var n=r.location,o=void 0===n?0:n,i=r.distance,s=void 0===i?100:i,c=r.threshold,h=void 0===c?.6:c,l=r.maxPatternLength,u=void 0===l?32:l,f=r.isCaseSensitive,v=void 0!==f&&f,p=r.tokenSeparator,d=void 0===p?/ +/g:p,g=r.findAllMatches,y=void 0!==g&&g,m=r.minMatchCharLength,k=void 0===m?1:m,b=r.includeMatches,S=void 0!==b&&b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:v,tokenSeparator:d,findAllMatches:y,includeMatches:S,minMatchCharLength:k},this.pattern=v?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,r,s;return t=e,(r=[{key:"search",value:function(e){var t=this.options,r=t.isCaseSensitive,n=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return n&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,c=s.maxPatternLength,h=s.tokenSeparator;if(this.pattern.length>c)return o(e,this.pattern,h);var l=this.options,u=l.location,f=l.distance,v=l.threshold,p=l.findAllMatches,d=l.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:u,distance:f,threshold:v,findAllMatches:p,minMatchCharLength:d,includeMatches:n})}}])&&n(t.prototype,r),s&&n(t,s),e}();e.exports=s},function(e,t){var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(r,"\\$&").replace(n,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,r){var n=r(4),o=r(5);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,v=void 0!==f&&f,p=i.minMatchCharLength,d=void 0===p?1:p,g=i.includeMatches,y=void 0!==g&&g,m=s,k=e.length,b=u,S=e.indexOf(t,m),x=t.length,M=[],_=0;_<k;_+=1)M[_]=0;if(-1!==S){var w=n(t,{errors:0,currentLocation:S,expectedLocation:m,distance:h});if(b=Math.min(w,b),-1!==(S=e.lastIndexOf(t,m+x))){var L=n(t,{errors:0,currentLocation:S,expectedLocation:m,distance:h});b=Math.min(L,b)}}S=-1;for(var A=[],O=1,C=x+k,j=1<<(x<=31?x-1:30),P=0;P<x;P+=1){for(var I=0,F=C;I<F;){n(t,{errors:P,currentLocation:m+F,expectedLocation:m,distance:h})<=b?I=F:C=F,F=Math.floor((C-I)/2+I)}C=F;var T=Math.max(1,m-F+1),N=v?k:Math.min(m+F,k)+x,z=Array(N+2);z[N+1]=(1<<P)-1;for(var E=N;E>=T;E-=1){var W=E-1,K=r[e.charAt(W)];if(K&&(M[W]=1),z[E]=(z[E+1]<<1|1)&K,0!==P&&(z[E]|=(A[E+1]|A[E])<<1|1|A[E+1]),z[E]&j&&(O=n(t,{errors:P,currentLocation:W,expectedLocation:m,distance:h}))<=b){if(b=O,(S=W)<=m)break;T=Math.max(1,2*m-S)}}if(n(t,{errors:P+1,currentLocation:m,expectedLocation:m,distance:h})>b)break;A=z}var $={isMatch:S>=0,score:0===O?.001:O};return y&&($.matchedIndices=o(M,d)),$}},function(e,t){e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||((o=i-1)-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t){e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t){var r=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},i=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var c=s.indexOf("."),h=s,l=null;-1!==c&&(h=s.slice(0,c),l=s.slice(c+1));var u=t[h];if(null!=u)if(l||!o(u)&&!i(u))if(r(u))for(var f=0,v=u.length;f<v;f+=1)e(u[f],l);else l&&e(u,l);else a.push(n(u))}else a.push(t)}(e,t),a},isArray:r,isString:o,isNum:i,toString:n}}])});

/***/ }),

/***/ 18474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raf = __webpack_require__(54087);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.events = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"], _this.subscribers = [], _this.rafHandle = null, _this.subscribe = function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    }, _this.unsubscribe = function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    }, _this.notifySubscribers = function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;


        _this.rafHandle = (0, _raf2.default)(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    }, _this.getParent = function () {
      return _this.node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.rafHandle) {
        _raf2.default.cancel(this.rafHandle);
        this.rafHandle = null;
      }

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(_react.PureComponent);

Container.childContextTypes = {
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func,
  getParent: _propTypes2.default.func
};
exports["default"] = Container;

/***/ }),

/***/ 78579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9060);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sticky);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSticky: false,
      wasSticky: false,
      style: {}
    }, _this.handleContainerEvent = function (_ref2) {
      var distanceFromTop = _ref2.distanceFromTop,
          distanceFromBottom = _ref2.distanceFromBottom,
          eventSource = _ref2.eventSource;

      var parent = _this.context.getParent();

      var preventingStickyStateChanges = false;
      if (_this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + _this.placeholder.offsetTop;
      }

      var placeholderClientRect = _this.placeholder.getBoundingClientRect();
      var contentClientRect = _this.content.getBoundingClientRect();
      var calculatedHeight = contentClientRect.height;

      var bottomDifference = distanceFromBottom - _this.props.bottomOffset - calculatedHeight;

      var wasSticky = !!_this.state.isSticky;
      var isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -_this.props.topOffset && distanceFromBottom > -_this.props.bottomOffset;

      distanceFromBottom = (_this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;

      var style = !isSticky ? {} : {
        position: "fixed",
        top: bottomDifference > 0 ? _this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!_this.props.disableHardwareAcceleration) {
        style.transform = "translateZ(0)";
      }

      _this.setState({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sticky, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.context.subscribe) throw new TypeError("Expected Sticky to be mounted within StickyContainer");

      this.context.subscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unsubscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : (this.state.isSticky ? this.state.calculatedHeight : 0) + "px";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = _react2.default.cloneElement(this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style
      }), {
        ref: function ref(content) {
          _this2.content = _reactDom2.default.findDOMNode(content);
        }
      });

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { ref: function ref(placeholder) {
            return _this2.placeholder = placeholder;
          } }),
        element
      );
    }
  }]);

  return Sticky;
}(_react.Component);

Sticky.propTypes = {
  topOffset: _propTypes2.default.number,
  bottomOffset: _propTypes2.default.number,
  relative: _propTypes2.default.bool,
  children: _propTypes2.default.func.isRequired
};
Sticky.defaultProps = {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
};
Sticky.contextTypes = {
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func,
  getParent: _propTypes2.default.func
};
exports["default"] = Sticky;

/***/ }),

/***/ 58439:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.L9 = exports.Le = undefined;

var _Sticky = __webpack_require__(78579);

var _Sticky2 = _interopRequireDefault(_Sticky);

var _Container = __webpack_require__(18474);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Le = _Sticky2.default;
exports.L9 = _Container2.default;
__webpack_unused_export__ = _Sticky2.default;

/***/ }),

/***/ 49997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OmniContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/common/hooks/useComponentDidMount/index.ts + 1 modules
var useComponentDidMount = __webpack_require__(76634);
// EXTERNAL MODULE: ./src/logger/actions/index.ts
var actions = __webpack_require__(97381);
// EXTERNAL MODULE: ./node_modules/omnibar/dist/index.js
var dist = __webpack_require__(60193);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/components/OmniContainer/Omnibar.tsx
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


/**
 * @deprecated Component "omnibar" does not support prop className or id (the original implementation used className). However, the original javascript code was sending these prop and was working correctly. lol
 * As this behavior is unpredictable, and does not works whitch types, I have isolated this component so that in the future a better solution can be found and implemented.
 * We need to find a substitute for this component or some way of working around this problem
 */
function Omnibar({ extensions, placeholder, id }) {
  return (0,emotion_react_browser_esm.jsx)(dist/* default */.ZP
  // @ts-ignore
  , { id: id, placeholder: placeholder, extensions: extensions, autoComplete: "off", autoFocus: true });
}
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
;// CONCATENATED MODULE: ./src/components/OmniContainer/getDashboards.ts
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

const getDashboards = async (query) => {var _response;
  // todo: Build a dedicated endpoint for dashboard searching
  // i.e. superset/v1/api/dashboards?q=${query}
  let response;
  try {
    response = await SupersetClient/* default.get */.Z.get({
      endpoint: `/dashboardasync/api/read?_oc_DashboardModelViewAsync=changed_on&_od_DashboardModelViewAsync=desc&_flt_2_dashboard_title=${query}` });

  }
  catch (error) {
    return [{ title: (0,TranslatorSingleton.t)('An error occurred while fetching dashboards') }];
  }
  return (_response = response) == null ? void 0 : _response.json.result.map((item) => ({
    title: item.dashboard_title,
    ...item }));

};
;// CONCATENATED MODULE: ./src/components/OmniContainer/index.tsx
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









const OmniModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  margin-top: 20%;

  .ant-modal-body {
    padding: 0;
    overflow: visible;
  }
`;
function OmniContainer() {
  const showOmni = (0,react.useRef)();
  const modalRef = (0,react.useRef)(null);
  const [showModal, setShowModal] = (0,react.useState)(false);
  const handleLogEvent = (show) => (0,actions.logEvent)(LogUtils/* LOG_ACTIONS_OMNIBAR_TRIGGERED */.tB, {
    show_omni: show });

  const handleClose = () => {
    showOmni.current = false;
    setShowModal(false);
    handleLogEvent(false);
  };
  (0,useComponentDidMount/* useComponentDidMount */.J)(() => {
    showOmni.current = false;
    function handleKeydown(event) {
      if (!(0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.OMNIBAR */.T.OMNIBAR))
      return;
      const controlOrCommand = event.ctrlKey || event.metaKey;
      const isOk = ['KeyK'].includes(event.code);
      const isEsc = event.key === 'Escape';
      if (isEsc && showOmni.current) {
        handleClose();
        return;
      }
      if (controlOrCommand && isOk) {
        showOmni.current = !showOmni.current;
        setShowModal(showOmni.current);
        handleLogEvent(!!showOmni.current);
      }
    }
    function handleClickOutside(event) {
      if (modalRef.current &&
      !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (0,emotion_react_browser_esm.jsx)(OmniModal, { title: "", show: showModal, hideFooter: true, closable: false, onHide: () => {}, destroyOnClose: true },
  (0,emotion_react_browser_esm.jsx)("div", { ref: modalRef },
  (0,emotion_react_browser_esm.jsx)(Omnibar, { id: "InputOmnibar", placeholder: (0,TranslatorSingleton.t)('Search all dashboards'), extensions: [getDashboards] })));


}

/***/ }),

/***/ 76198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Dashboard)
});

// NAMESPACE OBJECT: ./src/types/bootstrapTypes.ts
var bootstrapTypes_namespaceObject = {};
__webpack_require__.r(bootstrapTypes_namespaceObject);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/DynamicPlugins/index.tsx
var DynamicPlugins = __webpack_require__(14278);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/dashboard/util/componentTypes.ts
var componentTypes = __webpack_require__(81255);
;// CONCATENATED MODULE: ./src/dashboard/util/getChartIdsFromLayout.js
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


function getChartIdsFromLayout(layout) {
  return Object.values(layout).reduce((chartIds, currentComponent) => {
    if (
    currentComponent &&
    currentComponent.type === componentTypes/* CHART_TYPE */.dW &&
    currentComponent.meta &&
    currentComponent.meta.chartId)
    {
      chartIds.push(currentComponent.meta.chartId);
    }
    return chartIds;
  }, []);
}
;// CONCATENATED MODULE: ./src/dashboard/util/getLayoutComponentFromChartId.js
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
/* eslint-disable no-param-reassign */


function getLayoutComponentFromChartId(layout, chartId) {
  return Object.values(layout).find(
  (currentComponent) =>
  currentComponent &&
  currentComponent.type === componentTypes/* CHART_TYPE */.dW &&
  currentComponent.meta &&
  currentComponent.meta.chartId === chartId);

}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./src/components/ErrorBoundary/index.jsx
var ErrorBoundary = __webpack_require__(57902);
// EXTERNAL MODULE: ./src/components/Tabs/index.ts
var components_Tabs = __webpack_require__(40637);
// EXTERNAL MODULE: ./node_modules/react-sticky/lib/index.js
var lib = __webpack_require__(58439);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(91033);
;// CONCATENATED MODULE: ./node_modules/@vx/responsive/esm/components/ParentSize.js


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ParentSize =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ParentSize, _React$Component);

  function ParentSize(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "animationFrameID", void 0);

    _defineProperty(_assertThisInitialized(_this), "resizeObserver", void 0);

    _defineProperty(_assertThisInitialized(_this), "target", null);

    _defineProperty(_assertThisInitialized(_this), "resize", function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          top = _ref.top,
          left = _ref.left;

      _this.setState(function () {
        return {
          width: width,
          height: height,
          top: top,
          left: left
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTarget", function (ref) {
      _this.target = ref;
    });

    _this.state = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
    _this.resize = debounce_default()(_this.resize, props.debounceTime);
    _this.animationFrameID = null;
    return _this;
  }

  var _proto = ParentSize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.resizeObserver = new ResizeObserver_es["default"](function (entries
    /** , observer */
    ) {
      if (entries === void 0) {
        entries = [];
      }

      entries.forEach(function (entry) {
        var _entry$contentRect = entry.contentRect,
            left = _entry$contentRect.left,
            top = _entry$contentRect.top,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;
        _this2.animationFrameID = window.requestAnimationFrame(function () {
          _this2.resize({
            width: width,
            height: height,
            top: top,
            left: left
          });
        });
      });
    });
    if (this.target) this.resizeObserver.observe(this.target);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.animationFrameID) window.cancelAnimationFrame(this.animationFrameID);
    if (this.resizeObserver) this.resizeObserver.disconnect();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        debounceTime = _this$props.debounceTime,
        parentSizeStyles = _this$props.parentSizeStyles,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "debounceTime", "parentSizeStyles"]);

    return react.createElement("div", _extends({
      style: parentSizeStyles,
      ref: this.setTarget,
      className: className
    }, restProps), children(_extends({}, this.state, {
      ref: this.target,
      resize: this.resize
    })));
  };

  return ParentSize;
}(react.Component);

_defineProperty(ParentSize, "propTypes", {
  className: (prop_types_default()).string,
  debounceTime: (prop_types_default()).number,
  children: (prop_types_default()).func.isRequired
});

_defineProperty(ParentSize, "defaultProps", {
  debounceTime: 300,
  parentSizeStyles: {
    width: '100%',
    height: '100%'
  }
});


// EXTERNAL MODULE: ./src/dashboard/util/constants.ts
var constants = __webpack_require__(80621);
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js
var emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  }

  return emptyImage;
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/index.js
var esm = __webpack_require__(84785);
// EXTERNAL MODULE: ./src/dashboard/util/propShapes.jsx
var propShapes = __webpack_require__(2275);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(23493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
;// CONCATENATED MODULE: ./src/dashboard/util/isValidChild.ts
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
/* eslint max-len: 0 */
/**
 * When determining if a component is a valid child of another component we must consider both
 *   - parent + child component types
 *   - component depth, or depth of nesting of container components
 *
 * We consider types because some components aren't containers (e.g. a heading) and we consider
 * depth to prevent infinite nesting of container components.
 *
 * The following example container nestings should be valid, which means that some containers
 * don't increase the (depth) of their children, namely tabs and tab:
 *   (a) root (0) > grid (1) >                         row (2) > column (3) > row (4) > non-container (5)
 *   (b) root (0) > grid (1) >    tabs (2) > tab (2) > row (2) > column (3) > row (4) > non-container (5)
 *   (c) root (0) > top-tab (1) >                      row (2) > column (3) > row (4) > non-container (5)
 *   (d) root (0) > top-tab (1) > tabs (2) > tab (2) > row (2) > column (3) > row (4) > non-container (5)
 */


const depthOne = constants/* DASHBOARD_ROOT_DEPTH */.Mu + 1;
// const depthTwo = rootDepth + 2; // Meantime no need
const depthThree = constants/* DASHBOARD_ROOT_DEPTH */.Mu + 3;
const depthFour = constants/* DASHBOARD_ROOT_DEPTH */.Mu + 4;
const depthFive = constants/* DASHBOARD_ROOT_DEPTH */.Mu + 5;
// when moving components around the depth of child is irrelevant, note these are parent depths
const parentMaxDepthLookup = {
  [componentTypes/* DASHBOARD_ROOT_TYPE */.U0]: {
    [componentTypes/* TABS_TYPE */.yR]: constants/* DASHBOARD_ROOT_DEPTH */.Mu,
    [componentTypes/* DASHBOARD_GRID_TYPE */.BG]: constants/* DASHBOARD_ROOT_DEPTH */.Mu },

  [componentTypes/* DASHBOARD_GRID_TYPE */.BG]: {
    [componentTypes/* CHART_TYPE */.dW]: depthOne,
    [componentTypes/* MARKDOWN_TYPE */.xh]: depthOne,
    [componentTypes/* COLUMN_TYPE */.BA]: depthOne,
    [componentTypes/* DIVIDER_TYPE */.hE]: depthOne,
    [componentTypes/* HEADER_TYPE */.Nc]: depthOne,
    [componentTypes/* ROW_TYPE */.Os]: depthOne,
    [componentTypes/* TABS_TYPE */.yR]: depthOne },

  [componentTypes/* ROW_TYPE */.Os]: {
    [componentTypes/* CHART_TYPE */.dW]: depthFour,
    [componentTypes/* MARKDOWN_TYPE */.xh]: depthFour,
    [componentTypes/* COLUMN_TYPE */.BA]: depthFour },

  [componentTypes/* TABS_TYPE */.yR]: {
    [componentTypes/* TAB_TYPE */.gn]: depthThree },

  [componentTypes/* TAB_TYPE */.gn]: {
    [componentTypes/* CHART_TYPE */.dW]: depthFive,
    [componentTypes/* MARKDOWN_TYPE */.xh]: depthFive,
    [componentTypes/* COLUMN_TYPE */.BA]: depthThree,
    [componentTypes/* DIVIDER_TYPE */.hE]: depthFive,
    [componentTypes/* HEADER_TYPE */.Nc]: depthFive,
    [componentTypes/* ROW_TYPE */.Os]: depthThree,
    [componentTypes/* TABS_TYPE */.yR]: depthThree },

  [componentTypes/* COLUMN_TYPE */.BA]: {
    [componentTypes/* CHART_TYPE */.dW]: depthFive,
    [componentTypes/* HEADER_TYPE */.Nc]: depthFive,
    [componentTypes/* MARKDOWN_TYPE */.xh]: depthFive,
    [componentTypes/* ROW_TYPE */.Os]: depthThree,
    [componentTypes/* DIVIDER_TYPE */.hE]: depthThree,
    [componentTypes/* TABS_TYPE */.yR]: depthThree },

  // these have no valid children
  [componentTypes/* CHART_TYPE */.dW]: {},
  [componentTypes/* DIVIDER_TYPE */.hE]: {},
  [componentTypes/* HEADER_TYPE */.Nc]: {},
  [componentTypes/* MARKDOWN_TYPE */.xh]: {} };

function isValidChild(child) {
  const { parentType, childType, parentDepth } = child;
  if (!parentType || !childType || typeof parentDepth !== 'number') {
    return false;
  }
  const maxParentDepth = (parentMaxDepthLookup[parentType] || {})[childType];
  return typeof maxParentDepth === 'number' && parentDepth <= maxParentDepth;
}
;// CONCATENATED MODULE: ./src/dashboard/util/getDropPosition.js
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



const DROP_TOP = 'DROP_TOP';
const DROP_RIGHT = 'DROP_RIGHT';
const DROP_BOTTOM = 'DROP_BOTTOM';
const DROP_LEFT = 'DROP_LEFT';

// this defines how close the mouse must be to the edge of a component to display
// a sibling type drop indicator
const SIBLING_DROP_THRESHOLD = 20;
const NON_SHALLOW_DROP_THRESHOLD = 20;

// We cache the last recorded clientOffset per component in order to
// have access to it beyond the handleHover phase and into the handleDrop phase
// of drag-and-drop. we do not have access to it during drop because react-dnd's
// monitor.getClientOffset() returns null at this point
let CACHED_CLIENT_OFFSET = {};
function clearDropCache() {
  CACHED_CLIENT_OFFSET = {};
}

function getDropPosition(monitor, Component) {
  const {
    depth: componentDepth,
    parentComponent,
    component,
    orientation,
    isDraggingOverShallow } =
  Component.props;

  const draggingItem = monitor.getItem();

  // if dropped self on self, do nothing
  if (!draggingItem || draggingItem.id === component.id) {
    return null;
  }

  // TODO need a better solution to prevent nested tabs
  if (
  draggingItem.type === componentTypes/* TABS_TYPE */.yR &&
  component.type === componentTypes/* TAB_TYPE */.gn &&
  componentDepth === 2)
  {
    return null;
  }

  const validChild = isValidChild({
    parentType: component.type,
    parentDepth: componentDepth,
    childType: draggingItem.type });


  const parentType = parentComponent && parentComponent.type;
  const parentDepth = // see isValidChild.js for why tabs don't increment child depth
  componentDepth + (
  parentType === componentTypes/* TAB_TYPE */.gn || parentType === componentTypes/* TABS_TYPE */.yR ? 0 : -1);

  const validSibling = isValidChild({
    parentType,
    parentDepth,
    childType: draggingItem.type });


  if (!validChild && !validSibling) {
    return null;
  }

  const hasChildren = (component.children || []).length > 0;
  const childDropOrientation =
  orientation === 'row' ? 'vertical' : 'horizontal';
  const siblingDropOrientation =
  orientation === 'row' ? 'horizontal' : 'vertical';

  if (isDraggingOverShallow && validChild && !validSibling) {
    // easiest case, insert as child
    if (childDropOrientation === 'vertical') {
      return hasChildren ? DROP_RIGHT : DROP_LEFT;
    }
    return hasChildren ? DROP_BOTTOM : DROP_TOP;
  }

  const refBoundingRect = Component.ref.getBoundingClientRect();
  const clientOffset =
  monitor.getClientOffset() || CACHED_CLIENT_OFFSET[component.id];

  if (!clientOffset || !refBoundingRect) {
    return null;
  }

  CACHED_CLIENT_OFFSET[component.id] = clientOffset;
  const deltaTop = Math.abs(clientOffset.y - refBoundingRect.top);
  const deltaBottom = Math.abs(clientOffset.y - refBoundingRect.bottom);
  const deltaLeft = Math.abs(clientOffset.x - refBoundingRect.left);
  const deltaRight = Math.abs(clientOffset.x - refBoundingRect.right);

  // Most of the time we only want a drop indicator for shallow (top-level, non-nested) drop targets
  // However there are some cases where considering only shallow targets would result in NO drop
  // indicators which is a bad UX.
  // e.g.,
  //    when dragging row-a over a chart that's in another row-b, the chart is the shallow droptarget
  //    but row-a is not a valid child or sibling. in this case we want to show a sibling drop
  //    indicator for row-b, which is NOT a shallow drop target.
  // BUT if we ALWAYS consider non-shallow drop targets we may get multiple indicators shown at the
  // same time, which is also a bad UX. to prevent this we can enforce a threshold proximity of the
  // mouse to the edge of a non-shallow target
  if (
  !isDraggingOverShallow &&
  [deltaTop, deltaBottom, deltaLeft, deltaRight].every(
  (delta) => delta > NON_SHALLOW_DROP_THRESHOLD))

  {
    return null;
  }

  // Drop based on mouse position relative to component center
  if (validSibling && !validChild) {
    if (siblingDropOrientation === 'vertical') {
      const refMiddleX =
      refBoundingRect.left +
      (refBoundingRect.right - refBoundingRect.left) / 2;
      return clientOffset.x < refMiddleX ? DROP_LEFT : DROP_RIGHT;
    }
    const refMiddleY =
    refBoundingRect.top + (refBoundingRect.bottom - refBoundingRect.top) / 2;
    return clientOffset.y < refMiddleY ? DROP_TOP : DROP_BOTTOM;
  }

  // either is valid, so choose location based on boundary deltas
  if (validSibling && validChild) {
    // if near enough to a sibling boundary, drop there
    if (siblingDropOrientation === 'vertical') {
      if (deltaLeft < SIBLING_DROP_THRESHOLD) return DROP_LEFT;
      if (deltaRight < SIBLING_DROP_THRESHOLD) return DROP_RIGHT;
    } else {
      if (deltaTop < SIBLING_DROP_THRESHOLD) return DROP_TOP;
      if (deltaBottom < SIBLING_DROP_THRESHOLD) return DROP_BOTTOM;
    }

    // drop as child
    if (childDropOrientation === 'vertical') {
      return hasChildren ? DROP_RIGHT : DROP_LEFT;
    }
    return hasChildren ? DROP_BOTTOM : DROP_TOP;
  }

  return null;
}
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/handleScroll/index.ts
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
let scrollTopDashboardInterval;
const SCROLL_STEP = 120;
const INTERVAL_DELAY = 50;
function handleScroll(scroll) {
  const setupScroll = scroll === 'SCROLL_TOP' &&
  !scrollTopDashboardInterval &&
  document.documentElement.scrollTop !== 0;
  const clearScroll = scrollTopDashboardInterval && (
  scroll !== 'SCROLL_TOP' || document.documentElement.scrollTop === 0);
  if (setupScroll) {
    scrollTopDashboardInterval = setInterval(() => {
      if (document.documentElement.scrollTop === 0) {
        clearInterval(scrollTopDashboardInterval);
        scrollTopDashboardInterval = null;
        return;
      }
      let scrollTop = document.documentElement.scrollTop - SCROLL_STEP;
      if (scrollTop < 0) {
        scrollTop = 0;
      }
      window.scroll({
        top: scrollTop,
        behavior: 'smooth' });

    }, INTERVAL_DELAY);
  } else
  if (clearScroll) {
    clearInterval(scrollTopDashboardInterval);
    scrollTopDashboardInterval = null;
  }
}
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/handleHover.js























const HOVER_THROTTLE_MS = 100;

function handleHover(props, monitor, Component) {var _Component$props, _Component$props$comp;
  // this may happen due to throttling
  if (!Component.mounted) return;

  const dropPosition = getDropPosition(monitor, Component);

  const isDashboardRoot =
  (Component == null ? void 0 : (_Component$props = Component.props) == null ? void 0 : (_Component$props$comp = _Component$props.component) == null ? void 0 : _Component$props$comp.type) === componentTypes/* DASHBOARD_ROOT_TYPE */.U0;
  const scroll = isDashboardRoot ? 'SCROLL_TOP' : null;

  handleScroll(scroll);

  if (!dropPosition) {
    Component.setState(() => ({ dropIndicator: null }));
    return;
  }

  Component.setState(() => ({
    dropIndicator: dropPosition }));

}

// this is called very frequently by react-dnd
/* harmony default export */ const dnd_handleHover = (throttle_default()(handleHover, HOVER_THROTTLE_MS));
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/handleDrop.js
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


function handleDrop(props, monitor, Component) {
  // this may happen due to throttling
  if (!Component.mounted) return undefined;

  Component.setState(() => ({ dropIndicator: null }));
  const dropPosition = getDropPosition(monitor, Component);

  if (!dropPosition) {
    return undefined;
  }

  const {
    parentComponent,
    component,
    index: componentIndex,
    onDrop,
    orientation } =
  Component.props;

  const draggingItem = monitor.getItem();

  const dropAsChildOrSibling =
  orientation === 'row' && (
  dropPosition === DROP_TOP || dropPosition === DROP_BOTTOM) ||
  orientation === 'column' && (
  dropPosition === DROP_LEFT || dropPosition === DROP_RIGHT) ?
  'sibling' :
  'child';

  const dropResult = {
    source: {
      id: draggingItem.parentId,
      type: draggingItem.parentType,
      index: draggingItem.index },

    dragging: {
      id: draggingItem.id,
      type: draggingItem.type,
      meta: draggingItem.meta } };



  // simplest case, append as child
  if (dropAsChildOrSibling === 'child') {
    dropResult.destination = {
      id: component.id,
      type: component.type,
      index: component.children.length };

  } else {
    // if the item is in the same list with a smaller index, you must account for the
    // "missing" index upon movement within the list
    const sameParent =
    parentComponent && draggingItem.parentId === parentComponent.id;
    const sameParentLowerIndex =
    sameParent && draggingItem.index < componentIndex;

    let nextIndex = sameParentLowerIndex ? componentIndex - 1 : componentIndex;
    if (dropPosition === DROP_BOTTOM || dropPosition === DROP_RIGHT) {
      nextIndex += 1;
    }

    dropResult.destination = {
      id: parentComponent.id,
      type: parentComponent.type,
      index: nextIndex };

  }

  onDrop(dropResult);
  clearDropCache();

  return dropResult;
}
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/dragDroppableConfig.js
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



// note: the 'type' hook is not useful for us as dropping is contigent on other properties
const TYPE = 'DRAG_DROPPABLE';

const dragConfig = [
TYPE,
{
  canDrag(props) {
    return !props.disableDragDrop;
  },

  // this defines the dragging item object returned by monitor.getItem()
  beginDrag(props /* , monitor, component */) {
    const { component, index, parentComponent = {} } = props;
    return {
      type: component.type,
      id: component.id,
      meta: component.meta,
      index,
      parentId: parentComponent.id,
      parentType: parentComponent.type };

  } },

function dragStateToProps(connect, monitor) {
  return {
    dragSourceRef: connect.dragSource(),
    dragPreviewRef: connect.dragPreview(),
    isDragging: monitor.isDragging() };

}];


const dropConfig = [
TYPE,
{
  canDrop(props) {
    return !props.disableDragDrop;
  },
  hover(props, monitor, component) {
    if (component && component.mounted) {
      dnd_handleHover(props, monitor, component);
    }
  },
  // note:
  //  the react-dnd api requires that the drop() method return a result or undefined
  //  monitor.didDrop() cannot be used because it returns true only for the most-nested target
  drop(props, monitor, component) {
    const dropResult = monitor.getDropResult();
    if ((!dropResult || !dropResult.destination) && component.mounted) {
      return handleDrop(props, monitor, component);
    }
    return undefined;
  } },

function dropStateToProps(connect, monitor) {
  return {
    droppableRef: connect.dropTarget(),
    isDraggingOver: monitor.isOver(),
    isDraggingOverShallow: monitor.isOver({ shallow: true }) };

}];
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/DragDroppable.jsx
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
  children: (prop_types_default()).func,
  className: (prop_types_default()).string,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape */.cP,
  depth: (prop_types_default()).number.isRequired,
  disableDragDrop: (prop_types_default()).bool,
  orientation: prop_types_default().oneOf(['row', 'column']),
  index: (prop_types_default()).number.isRequired,
  style: (prop_types_default()).object,
  onDrop: (prop_types_default()).func,
  editMode: (prop_types_default()).bool.isRequired,
  useEmptyDragPreview: (prop_types_default()).bool,

  // from react-dnd
  isDragging: (prop_types_default()).bool.isRequired,
  isDraggingOver: (prop_types_default()).bool.isRequired,
  isDraggingOverShallow: (prop_types_default()).bool.isRequired,
  droppableRef: (prop_types_default()).func.isRequired,
  dragSourceRef: (prop_types_default()).func.isRequired,
  dragPreviewRef: (prop_types_default()).func.isRequired };


const defaultProps = {
  className: null,
  style: null,
  parentComponent: null,
  disableDragDrop: false,
  children() {},
  onDrop() {},
  orientation: 'row',
  useEmptyDragPreview: false };


// export unwrapped component for testing
class UnwrappedDragDroppable extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropIndicator: null // this gets set/modified by the react-dnd HOCs
    };
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setRef(ref) {
    this.ref = ref;
    // this is needed for a custom drag preview
    if (this.props.useEmptyDragPreview) {
      this.props.dragPreviewRef(getEmptyImage(), {
        // IE fallback: specify that we'd rather screenshot the node
        // when it already knows it's being dragged so we can hide it with CSS.
        captureDraggingState: true });

    } else {
      this.props.dragPreviewRef(ref);
    }
    this.props.droppableRef(ref);
  }

  render() {
    const {
      children,
      className,
      orientation,
      dragSourceRef,
      disableDragDrop,
      isDragging,
      isDraggingOver,
      style,
      editMode } =
    this.props;

    const { dropIndicator } = this.state;
    const dropIndicatorProps =
    isDraggingOver && dropIndicator && !disableDragDrop ?
    {
      className: classnames_default()(
      'drop-indicator',
      dropIndicator === DROP_TOP && 'drop-indicator--top',
      dropIndicator === DROP_BOTTOM && 'drop-indicator--bottom',
      dropIndicator === DROP_LEFT && 'drop-indicator--left',
      dropIndicator === DROP_RIGHT && 'drop-indicator--right') } :


    null;

    const childProps = editMode ?
    {
      dragSourceRef,
      dropIndicatorProps } :

    {};

    return (
      (0,emotion_react_browser_esm.jsx)("div", {
        style: style,
        ref: this.setRef,

        className: classnames_default()(
        'dragdroppable',
        orientation === 'row' && 'dragdroppable-row',
        orientation === 'column' && 'dragdroppable-column',
        isDragging && 'dragdroppable--dragging',
        className) },


      children(childProps)));


  }}


UnwrappedDragDroppable.propTypes = propTypes;
UnwrappedDragDroppable.defaultProps = defaultProps;

// note that the composition order here determines using
// component.method() vs decoratedComponentInstance.method() in the drag/drop config
/* harmony default export */ const DragDroppable = ((0,esm.DragSource)(...dragConfig)(
(0,esm.DropTarget)(...dropConfig)(UnwrappedDragDroppable)));
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/DraggableNewComponent.jsx
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








const DraggableNewComponent_propTypes = {
  id: (prop_types_default()).string.isRequired,
  type: (prop_types_default()).string.isRequired,
  label: (prop_types_default()).string.isRequired,
  className: (prop_types_default()).string };


const DraggableNewComponent_defaultProps = {
  className: null };


class DraggableNewComponent extends react.PureComponent {
  render() {
    const { label, id, type, className } = this.props;
    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: { type, id },
        parentComponent: {
          id: constants/* NEW_COMPONENTS_SOURCE_ID */.D0,
          type: componentTypes/* NEW_COMPONENT_SOURCE_TYPE */.F0 },

        index: 0,
        depth: 0,
        editMode: true },

      ({ dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)("div", {
        ref: dragSourceRef,
        className: "new-component" },


      (0,emotion_react_browser_esm.jsx)("div", { className: classnames_default()('new-component-placeholder', className) }),
      label)));




  }}


DraggableNewComponent.propTypes = DraggableNewComponent_propTypes;
DraggableNewComponent.defaultProps = DraggableNewComponent_defaultProps;
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/NewColumn.jsx
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







function DraggableNewColumn() {
  return (
    (0,emotion_react_browser_esm.jsx)(DraggableNewComponent, {
      id: constants/* NEW_COLUMN_ID */.Nb,
      type: componentTypes/* COLUMN_TYPE */.BA,
      label: (0,TranslatorSingleton.t)('Column'),
      className: "fa fa-long-arrow-down" }));


}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/NewDivider.jsx
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







function DraggableNewDivider() {
  return (
    (0,emotion_react_browser_esm.jsx)(DraggableNewComponent, {
      id: constants/* NEW_DIVIDER_ID */.ES,
      type: componentTypes/* DIVIDER_TYPE */.hE,
      label: (0,TranslatorSingleton.t)('Divider'),
      className: "divider-placeholder" }));


}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/NewHeader.jsx
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







function DraggableNewHeader() {
  return (
    (0,emotion_react_browser_esm.jsx)(DraggableNewComponent, {
      id: constants/* NEW_HEADER_ID */.Z1,
      type: componentTypes/* HEADER_TYPE */.Nc,
      label: (0,TranslatorSingleton.t)('Header'),
      className: "fa fa-header" }));


}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/NewRow.jsx
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







function DraggableNewRow() {
  return (
    (0,emotion_react_browser_esm.jsx)(DraggableNewComponent, {
      id: constants/* NEW_ROW_ID */.vD,
      type: componentTypes/* ROW_TYPE */.Os,
      label: (0,TranslatorSingleton.t)('Row'),
      className: "fa fa-long-arrow-right" }));


}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/NewTabs.jsx
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







function DraggableNewTabs() {
  return (
    (0,emotion_react_browser_esm.jsx)(DraggableNewComponent, {
      id: constants/* NEW_TABS_ID */.NN,
      type: componentTypes/* TABS_TYPE */.yR,
      label: (0,TranslatorSingleton.t)('Tabs'),
      className: "fa fa-window-restore" }));


}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/new/NewMarkdown.jsx
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






function NewMarkdown_DraggableNewDivider() {
  return (
    (0,emotion_react_browser_esm.jsx)(DraggableNewComponent, {
      id: constants/* NEW_MARKDOWN_ID */.C3,
      type: componentTypes/* MARKDOWN_TYPE */.xh,
      label: "Markdown",
      className: "fa fa-code" }));


}
// EXTERNAL MODULE: ./src/dashboard/actions/sliceEntities.js
var sliceEntities = __webpack_require__(68969);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(88239);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__(8177);
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);
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
// EXTERNAL MODULE: ./node_modules/react-virtualized/dist/es/Grid/Grid.js + 10 modules
var Grid = __webpack_require__(75621);
// EXTERNAL MODULE: ./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js
var accessibilityOverscanIndicesGetter = __webpack_require__(94396);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/List/List.js











/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  (0,inherits["default"])(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    (0,classCallCheck["default"])(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0,possibleConstructorReturn["default"])(this, (_ref = List.__proto__ || get_prototype_of_default()(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var parent = _ref2.parent,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = get_own_property_descriptor_default()(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), (0,possibleConstructorReturn["default"])(_this, _ret);
  }

  (0,createClass["default"])(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

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
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

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
          rowIndex: index,
          columnIndex: 0
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = classnames_default()('ReactVirtualized__List', className);

      return react.createElement(Grid/* default */.Z, (0,helpers_extends["default"])({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(react.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: accessibilityOverscanIndicesGetter/* default */.ZP,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes =  true ? null : 0;
/* harmony default export */ const List_List = (List);












// EXTERNAL MODULE: ./node_modules/react-search-input/lib/index.js
var react_search_input_lib = __webpack_require__(24903);
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/index.ts + 1 modules
var src_components = __webpack_require__(33346);
;// CONCATENATED MODULE: ./src/dashboard/components/AddSliceCard.jsx
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





const AddSliceCard_propTypes = {
  datasourceUrl: (prop_types_default()).string,
  datasourceName: (prop_types_default()).string,
  innerRef: (prop_types_default()).func,
  isSelected: (prop_types_default()).bool,
  lastModified: (prop_types_default()).string,
  sliceName: (prop_types_default()).string.isRequired,
  style: (prop_types_default()).object,
  visType: (prop_types_default()).string.isRequired };


const AddSliceCard_defaultProps = {
  datasourceUrl: null,
  datasourceName: '-',
  innerRef: null,
  isSelected: false,
  style: null,
  lastModified: null };


const Styled = style/* styled.div */.iK.div`
  ${({ theme }) => `
    .chart-card {
      border: 1px solid ${theme.colors.grayscale.light2};
      border-radius: ${theme.gridUnit}px;
      background: ${theme.colors.grayscale.light5};
      font-weight: ${theme.typography.weights.light};
      padding: ${theme.gridUnit * 2}px;
      margin: 0 ${theme.gridUnit * 3}px
        ${theme.gridUnit * 3}px
        ${theme.gridUnit * 3}px;
      position: relative;
      cursor: move;
      white-space: nowrap;
      overflow: hidden;

      &:hover {
        background: ${theme.colors.grayscale.light4};
      }
    }

    .chart-card.is-selected {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .card-title {
      margin-right: 60px;
      margin-bottom: ${theme.gridUnit * 2}px;
      font-weight: ${theme.typography.weights.bold};
    }

    .card-body {
      display: flex;
      flex-direction: column;

      .item {
        span {
          word-break: break-all;

          &:first-child {
            font-weight: ${theme.typography.weights.normal};
          }
        }
      }
    }

    .is-added-label {
      background: ${theme.colors.grayscale.base};
      border-radius: ${theme.gridUnit}px;
      color: ${theme.colors.grayscale.light5};
      font-size: ${theme.typography.sizes.s}px;
      text-transform: uppercase;
      position: absolute;
      padding: ${theme.gridUnit}px
        ${theme.gridUnit * 2}px;
      top: ${theme.gridUnit * 8}px;
      right: ${theme.gridUnit * 8}px;
      pointer-events: none;
    }
  `}
`;

function AddSliceCard({
  datasourceUrl,
  datasourceName,
  innerRef,
  isSelected,
  lastModified,
  sliceName,
  style,
  visType })
{
  return (
    (0,emotion_react_browser_esm.jsx)(Styled, { ref: innerRef, style: style },
    (0,emotion_react_browser_esm.jsx)("div", {
      className: classnames_default()('chart-card', isSelected && 'is-selected') },


    (0,emotion_react_browser_esm.jsx)("div", { className: "card-title" },
    sliceName),

    (0,emotion_react_browser_esm.jsx)("div", { className: "card-body" },
    (0,emotion_react_browser_esm.jsx)("div", { className: "item" },
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Modified'), " "),
    (0,emotion_react_browser_esm.jsx)("span", null, lastModified)),

    (0,emotion_react_browser_esm.jsx)("div", { className: "item" },
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Visualization'), " "),
    (0,emotion_react_browser_esm.jsx)("span", null, visType)),

    (0,emotion_react_browser_esm.jsx)("div", { className: "item" },
    (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Data source'), " "),
    (0,emotion_react_browser_esm.jsx)("a", { href: datasourceUrl }, datasourceName)))),



    isSelected && (0,emotion_react_browser_esm.jsx)("div", { className: "is-added-label" }, (0,TranslatorSingleton.t)('Added'))));


}

AddSliceCard.propTypes = AddSliceCard_propTypes;
AddSliceCard.defaultProps = AddSliceCard_defaultProps;

/* harmony default export */ const components_AddSliceCard = (AddSliceCard);
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/AddSliceDragPreview.jsx
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








const staticCardStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  top: 0,
  left: 0,
  zIndex: 101, // this should be higher than top-level tabs
  width: 376 - 2 * 16 };


const AddSliceDragPreview_propTypes = {
  dragItem: prop_types_default().shape({
    index: (prop_types_default()).number.isRequired }),

  slices: prop_types_default().arrayOf(propShapes/* slicePropShape */.Rw),
  isDragging: (prop_types_default()).bool.isRequired,
  currentOffset: prop_types_default().shape({
    x: (prop_types_default()).number.isRequired,
    y: (prop_types_default()).number.isRequired }) };



const AddSliceDragPreview_defaultProps = {
  currentOffset: null,
  dragItem: null,
  slices: null };


function AddSliceDragPreview({ dragItem, slices, isDragging, currentOffset }) {
  if (!isDragging || !currentOffset || !dragItem || !slices) return null;

  const slice = slices[dragItem.index];

  // make sure it's a new component and a chart
  const shouldRender =
  slice &&
  dragItem.parentType === componentTypes/* NEW_COMPONENT_SOURCE_TYPE */.F0 &&
  dragItem.type === componentTypes/* CHART_TYPE */.dW;

  return !shouldRender ? null :
  (0,emotion_react_browser_esm.jsx)(components_AddSliceCard, {
    style: {
      ...staticCardStyles,
      transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)` },

    sliceName: slice.slice_name,
    lastModified: slice.changed_on_humanized,
    visType: slice.viz_type,
    datasourceUrl: slice.datasource_url,
    datasourceName: slice.datasource_name });


}

AddSliceDragPreview.propTypes = AddSliceDragPreview_propTypes;
AddSliceDragPreview.defaultProps = AddSliceDragPreview_defaultProps;

// This injects these props into the component
/* harmony default export */ const dnd_AddSliceDragPreview = ((0,esm.DragLayer)((monitor) => ({
  dragItem: monitor.getItem(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging() }))(
AddSliceDragPreview));
;// CONCATENATED MODULE: ./src/dashboard/components/SliceAdder.jsx
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
/* eslint-env browser */















const SliceAdder_propTypes = {
  fetchAllSlices: (prop_types_default()).func.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  slices: prop_types_default().objectOf(propShapes/* slicePropShape */.Rw).isRequired,
  lastUpdated: (prop_types_default()).number.isRequired,
  errorMessage: (prop_types_default()).string,
  userId: (prop_types_default()).string.isRequired,
  selectedSliceIds: prop_types_default().arrayOf((prop_types_default()).number),
  editMode: (prop_types_default()).bool,
  height: (prop_types_default()).number };


const SliceAdder_defaultProps = {
  selectedSliceIds: [],
  editMode: false,
  errorMessage: '',
  height: window.innerHeight };


const KEYS_TO_FILTERS = ['slice_name', 'viz_type', 'datasource_name'];
const KEYS_TO_SORT = {
  slice_name: 'name',
  viz_type: 'viz type',
  datasource_name: 'dataset',
  changed_on: 'recent' };


const DEFAULT_SORT_KEY = 'changed_on';

const MARGIN_BOTTOM = 16;
const SIDEPANE_HEADER_HEIGHT = 30;
const SLICE_ADDER_CONTROL_HEIGHT = 64;
const DEFAULT_CELL_HEIGHT = 112;

const Controls = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.gridUnit * 3}px;
`;

const StyledSelect = (0,style/* styled */.iK)(src_components/* Select */.P)`
  margin-left: ${({ theme }) => theme.gridUnit * 2}px;
  min-width: 150px;
`;

class SliceAdder extends react.Component {
  static sortByComparator(attr) {
    const desc = attr === 'changed_on' ? -1 : 1;

    return (a, b) => {
      if (a[attr] < b[attr]) {
        return -1 * desc;
      }
      if (a[attr] > b[attr]) {
        return 1 * desc;
      }
      return 0;
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      filteredSlices: [],
      searchTerm: '',
      sortBy: DEFAULT_SORT_KEY,
      selectedSliceIdsSet: new Set(props.selectedSliceIds) };

    this.rowRenderer = this.rowRenderer.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.slicesRequest = this.props.fetchAllSlices(this.props.userId);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextState = {};
    if (nextProps.lastUpdated !== this.props.lastUpdated) {
      nextState.filteredSlices = Object.values(nextProps.slices).
      filter((0,react_search_input_lib/* createFilter */.cj)(this.state.searchTerm, KEYS_TO_FILTERS)).
      sort(SliceAdder.sortByComparator(this.state.sortBy));
    }

    if (nextProps.selectedSliceIds !== this.props.selectedSliceIds) {
      nextState.selectedSliceIdsSet = new Set(nextProps.selectedSliceIds);
    }

    if (Object.keys(nextState).length) {
      this.setState(nextState);
    }
  }

  componentWillUnmount() {
    if (this.slicesRequest && this.slicesRequest.abort) {
      this.slicesRequest.abort();
    }
  }

  getFilteredSortedSlices(searchTerm, sortBy) {
    return Object.values(this.props.slices).
    filter((0,react_search_input_lib/* createFilter */.cj)(searchTerm, KEYS_TO_FILTERS)).
    sort(SliceAdder.sortByComparator(sortBy));
  }

  handleKeyPress(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();

      this.searchUpdated(ev.target.value);
    }
  }

  handleChange(ev) {
    this.searchUpdated(ev.target.value);
  }

  searchUpdated(searchTerm) {
    this.setState((prevState) => ({
      searchTerm,
      filteredSlices: this.getFilteredSortedSlices(
      searchTerm,
      prevState.sortBy) }));


  }

  handleSelect(sortBy) {
    this.setState((prevState) => ({
      sortBy,
      filteredSlices: this.getFilteredSortedSlices(
      prevState.searchTerm,
      sortBy) }));


  }

  rowRenderer({ key, index, style }) {
    const { filteredSlices, selectedSliceIdsSet } = this.state;
    const cellData = filteredSlices[index];
    const isSelected = selectedSliceIdsSet.has(cellData.slice_id);
    const type = componentTypes/* CHART_TYPE */.dW;
    const id = constants/* NEW_CHART_ID */.Jd;

    const meta = {
      chartId: cellData.slice_id,
      sliceName: cellData.slice_name };

    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        key: key,
        component: { type, id, meta },
        parentComponent: {
          id: constants/* NEW_COMPONENTS_SOURCE_ID */.D0,
          type: componentTypes/* NEW_COMPONENT_SOURCE_TYPE */.F0 },

        index: index,
        depth: 0,
        disableDragDrop: isSelected,
        editMode: this.props.editMode
        // we must use a custom drag preview within the List because
        // it does not seem to work within a fixed-position container
        , useEmptyDragPreview: true
        // List library expect style props here
        // actual style should be applied to nested AddSliceCard component
        , style: {} },

      ({ dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)(components_AddSliceCard, {
        innerRef: dragSourceRef,
        style: style,
        sliceName: cellData.slice_name,
        lastModified: cellData.changed_on_humanized,
        visType: cellData.viz_type,
        datasourceUrl: cellData.datasource_url,
        datasourceName: cellData.datasource_name,
        isSelected: isSelected })));




  }

  render() {
    const slicesListHeight =
    this.props.height -
    SIDEPANE_HEADER_HEIGHT -
    SLICE_ADDER_CONTROL_HEIGHT -
    MARGIN_BOTTOM;
    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "slice-adder-container" },
      (0,emotion_react_browser_esm.jsx)(Controls, null,
      (0,emotion_react_browser_esm.jsx)(components/* Input */.II, {
        placeholder: (0,TranslatorSingleton.t)('Filter your charts'),
        className: "search-input",
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress }),


      (0,emotion_react_browser_esm.jsx)(StyledSelect, {
        id: "slice-adder-sortby",
        value: this.state.sortBy,
        onChange: this.handleSelect,
        options: Object.entries(KEYS_TO_SORT).map(([key, label]) => ({
          label: `${(0,TranslatorSingleton.t)('Sort by')} ${label}`,
          value: key })),

        placeholder: (0,TranslatorSingleton.t)('Sort by') })),


      this.props.isLoading && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null),
      !this.props.isLoading && this.state.filteredSlices.length > 0 &&
      (0,emotion_react_browser_esm.jsx)(List_List, {
        width: 376,
        height: slicesListHeight,
        rowCount: this.state.filteredSlices.length,
        rowHeight: DEFAULT_CELL_HEIGHT,
        rowRenderer: this.rowRenderer,
        searchTerm: this.state.searchTerm,
        sortBy: this.state.sortBy,
        selectedSliceIds: this.props.selectedSliceIds }),


      this.props.errorMessage &&
      (0,emotion_react_browser_esm.jsx)("div", { className: "error-message" }, this.props.errorMessage),


      (0,emotion_react_browser_esm.jsx)(dnd_AddSliceDragPreview, { slices: this.state.filteredSlices })));


  }}


SliceAdder.propTypes = SliceAdder_propTypes;
SliceAdder.defaultProps = SliceAdder_defaultProps;

/* harmony default export */ const components_SliceAdder = (SliceAdder);
;// CONCATENATED MODULE: ./src/dashboard/containers/SliceAdder.jsx
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






function mapStateToProps({ sliceEntities, dashboardInfo, dashboardState }) {
  return {
    userId: dashboardInfo.userId,
    selectedSliceIds: dashboardState.sliceIds,
    slices: sliceEntities.slices,
    isLoading: sliceEntities.isLoading,
    errorMessage: sliceEntities.errorMessage,
    lastUpdated: sliceEntities.lastUpdated,
    editMode: dashboardState.editMode };

}

function mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    fetchAllSlices: sliceEntities/* fetchAllSlices */.To },

  dispatch);

}

/* harmony default export */ const containers_SliceAdder = ((0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps)(components_SliceAdder));
;// CONCATENATED MODULE: ./src/dashboard/components/BuilderComponentPane.tsx
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
/* eslint-env browser */












const SUPERSET_HEADER_HEIGHT = 59;
const BuilderComponentPaneTabs = (0,style/* styled */.iK)(components_Tabs/* default */.ZP)`
  line-height: inherit;
  margin-top: ${({ theme }) => theme.gridUnit * 2}px;
`;
const BuilderComponentPane = ({ topOffset = 0 }) => (0,emotion_react_browser_esm.jsx)("div", { className: "dashboard-builder-sidepane", style: {
    height: `calc(100vh - ${topOffset + SUPERSET_HEADER_HEIGHT}px)` } },

(0,emotion_react_browser_esm.jsx)(ParentSize, null,
({ height }) => (0,emotion_react_browser_esm.jsx)(lib/* StickyContainer */.L9, null,
(0,emotion_react_browser_esm.jsx)(lib/* Sticky */.Le, { topOffset: -topOffset, bottomOffset: Infinity },
({ style, isSticky }) => (0,emotion_react_browser_esm.jsx)("div", { className: "viewport", style: isSticky ? { ...style, top: topOffset } : null },
(0,emotion_react_browser_esm.jsx)(BuilderComponentPaneTabs, { id: "tabs", className: "tabs-components" },
(0,emotion_react_browser_esm.jsx)(components_Tabs/* default.TabPane */.ZP.TabPane, { key: 1, tab: (0,TranslatorSingleton.t)('Components') },
(0,emotion_react_browser_esm.jsx)(DraggableNewTabs, null),
(0,emotion_react_browser_esm.jsx)(DraggableNewRow, null),
(0,emotion_react_browser_esm.jsx)(DraggableNewColumn, null),
(0,emotion_react_browser_esm.jsx)(DraggableNewHeader, null),
(0,emotion_react_browser_esm.jsx)(NewMarkdown_DraggableNewDivider, null),
(0,emotion_react_browser_esm.jsx)(DraggableNewDivider, null)),

(0,emotion_react_browser_esm.jsx)(components_Tabs/* default.TabPane */.ZP.TabPane, { key: 2, tab: (0,TranslatorSingleton.t)('Charts'), className: "tab-charts" },
(0,emotion_react_browser_esm.jsx)(containers_SliceAdder, { height: height + (isSticky ? SUPERSET_HEADER_HEIGHT : 0) }))))))));







/* harmony default export */ const components_BuilderComponentPane = (BuilderComponentPane);
// EXTERNAL MODULE: ./src/dataMask/actions.ts
var actions = __webpack_require__(74599);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/url.js
var core_js_stable_url = __webpack_require__(39969);
var url_default = /*#__PURE__*/__webpack_require__.n(core_js_stable_url);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/components/ButtonGroup/index.tsx
var ButtonGroup = __webpack_require__(37488);
// EXTERNAL MODULE: ./src/components/CertifiedIcon/index.tsx
var CertifiedIcon = __webpack_require__(83268);
// EXTERNAL MODULE: ./src/logger/LogUtils.ts
var LogUtils = __webpack_require__(3741);
// EXTERNAL MODULE: ./src/featureFlags.ts
var src_featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/components/EditableTitle/index.tsx
var EditableTitle = __webpack_require__(38270);
// EXTERNAL MODULE: ./src/components/FaveStar/index.tsx
var FaveStar = __webpack_require__(36674);
// EXTERNAL MODULE: ./src/utils/safeStringify.ts
var safeStringify = __webpack_require__(9679);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./src/constants.ts
var src_constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var runtime_corejs3_helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(runtime_corejs3_helpers_extends);
// EXTERNAL MODULE: ./src/common/hooks/useUrlShortener.ts
var useUrlShortener = __webpack_require__(87189);
// EXTERNAL MODULE: ./src/utils/copy.ts
var copy = __webpack_require__(10222);
;// CONCATENATED MODULE: ./src/dashboard/components/menu/ShareMenuItems/index.tsx
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





const ShareMenuItems = (props) => {
  const { url, copyMenuItemTitle, emailMenuItemTitle, emailSubject, emailBody, addDangerToast, addSuccessToast, ...rest } = props;
  const getShortUrl = (0,useUrlShortener/* useUrlShortener */.n)(url);
  async function onCopyLink() {
    try {
      const shortUrl = await getShortUrl();
      await (0,copy/* default */.Z)(shortUrl);
      addSuccessToast((0,TranslatorSingleton.t)('Copied to clipboard!'));
    }
    catch (error) {
      addDangerToast((0,TranslatorSingleton.t)('Sorry, your browser does not support copying.'));
    }
  }
  async function onShareByEmail() {
    try {
      const shortUrl = await getShortUrl();
      const bodyWithLink = `${emailBody}${shortUrl}`;
      window.location.href = `mailto:?Subject=${emailSubject}%20&Body=${bodyWithLink}`;
    }
    catch (error) {
      addDangerToast((0,TranslatorSingleton.t)('Sorry, something went wrong. Try again later.'));
    }
  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, extends_default()({ key: "copy-url" }, rest),
  (0,emotion_react_browser_esm.jsx)("div", { onClick: onCopyLink, role: "button", tabIndex: 0 },
  copyMenuItemTitle)),


  (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, extends_default()({ key: "share-by-email" }, rest),
  (0,emotion_react_browser_esm.jsx)("div", { onClick: onShareByEmail, role: "button", tabIndex: 0 },
  emailMenuItemTitle)));



};
/* harmony default export */ const menu_ShareMenuItems = (ShareMenuItems);
// EXTERNAL MODULE: ./src/components/ModalTrigger/index.jsx
var ModalTrigger = __webpack_require__(68073);
// EXTERNAL MODULE: ./src/components/AsyncAceEditor/index.tsx
var AsyncAceEditor = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/dashboard/components/CssEditor/index.jsx
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








const StyledWrapper = style/* styled.div */.iK.div`
  ${({ theme }) => `
    .css-editor-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: ${theme.gridUnit * 2}px;

      h5 {
        margin-top: ${theme.gridUnit}px;
      }
    }
    .css-editor {
      border: 1px solid ${theme.colors.grayscale.light1};
    }
  `}
`;

const CssEditor_propTypes = {
  initialCss: (prop_types_default()).string,
  triggerNode: (prop_types_default()).node.isRequired,
  onChange: (prop_types_default()).func,
  templates: (prop_types_default()).array };


const CssEditor_defaultProps = {
  initialCss: '',
  onChange: () => {} };


class CssEditor extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      css: props.initialCss };

    this.changeCss = this.changeCss.bind(this);
    this.changeCssTemplate = this.changeCssTemplate.bind(this);
  }

  componentDidMount() {
    AsyncAceEditor/* CssEditor.preload */.ry.preload();
  }

  changeCss(css) {
    this.setState({ css }, () => {
      this.props.onChange(css);
    });
  }

  changeCssTemplate({ key }) {
    this.changeCss(key);
  }

  renderTemplateSelector() {
    if (this.props.templates) {
      const menu =
      (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, { onClick: this.changeCssTemplate },
      this.props.templates.map((template) =>
      (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: template.css }, template.label)));




      return (
        (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, { overlay: menu, placement: "bottomRight" },
        (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, null, (0,TranslatorSingleton.t)('Load a CSS template'))));


    }
    return null;
  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, {
        triggerNode: this.props.triggerNode,
        modalTitle: (0,TranslatorSingleton.t)('CSS'),
        modalBody:
        (0,emotion_react_browser_esm.jsx)(StyledWrapper, null,
        (0,emotion_react_browser_esm.jsx)("div", { className: "css-editor-header" },
        (0,emotion_react_browser_esm.jsx)("h5", null, (0,TranslatorSingleton.t)('Live CSS editor')),
        this.renderTemplateSelector()),

        (0,emotion_react_browser_esm.jsx)(AsyncAceEditor/* CssEditor */.ry, {
          className: "css-editor",
          minLines: 12,
          maxLines: 30,
          onChange: this.changeCss,
          height: "200px",
          width: "100%",
          editorProps: { $blockScrolling: true },
          enableLiveAutocompletion: true,
          value: this.state.css || '' })) }));





  }}


CssEditor.propTypes = CssEditor_propTypes;
CssEditor.defaultProps = CssEditor_defaultProps;

/* harmony default export */ const components_CssEditor = (CssEditor);
// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(29487);
// EXTERNAL MODULE: ./src/components/Form/index.tsx + 1 modules
var Form = __webpack_require__(49238);
;// CONCATENATED MODULE: ./src/dashboard/components/RefreshIntervalModal.tsx
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







const options = [
[0, (0,TranslatorSingleton.t)("Don't refresh")],
[10, (0,TranslatorSingleton.t)('10 seconds')],
[30, (0,TranslatorSingleton.t)('30 seconds')],
[60, (0,TranslatorSingleton.t)('1 minute')],
[300, (0,TranslatorSingleton.t)('5 minutes')],
[1800, (0,TranslatorSingleton.t)('30 minutes')],
[3600, (0,TranslatorSingleton.t)('1 hour')],
[21600, (0,TranslatorSingleton.t)('6 hours')],
[43200, (0,TranslatorSingleton.t)('12 hours')],
[86400, (0,TranslatorSingleton.t)('24 hours')]].
map((o) => ({ value: o[0], label: o[1] }));
const StyledModalTrigger = (0,style/* styled */.iK)(ModalTrigger/* default */.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`;
const RefreshWarningContainer = style/* styled.div */.iK.div`
  margin-top: ${({ theme }) => theme.gridUnit * 6}px;
`;
class RefreshIntervalModal extends react.PureComponent {





  constructor(props) {
    super(props);this.modalRef = void 0;
    this.modalRef = /*#__PURE__*/react.createRef();
    this.state = {
      refreshFrequency: props.refreshFrequency };

    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  onSave() {var _this$modalRef$curren;
    this.props.onChange(this.state.refreshFrequency, this.props.editMode);
    (_this$modalRef$curren = this.modalRef.current) == null ? void 0 : _this$modalRef$curren.close();
  }
  onCancel() {var _this$modalRef$curren2;
    this.setState({
      refreshFrequency: this.props.refreshFrequency });

    (_this$modalRef$curren2 = this.modalRef.current) == null ? void 0 : _this$modalRef$curren2.close();
  }
  handleFrequencyChange(value) {
    this.setState({
      refreshFrequency: value || options[0].value });

  }
  render() {
    const { refreshLimit = 0, refreshWarning, editMode } = this.props;
    const { refreshFrequency = 0 } = this.state;
    const showRefreshWarning = !!refreshFrequency && !!refreshWarning && refreshFrequency < refreshLimit;
    return (0,emotion_react_browser_esm.jsx)(StyledModalTrigger, { ref: this.modalRef, triggerNode: this.props.triggerNode, modalTitle: (0,TranslatorSingleton.t)('Refresh interval'), modalBody: (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, null, (0,TranslatorSingleton.t)('Refresh frequency')),
      (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Refresh interval'), options: options, value: refreshFrequency, onChange: this.handleFrequencyChange }),
      showRefreshWarning && (0,emotion_react_browser_esm.jsx)(RefreshWarningContainer, null,
      (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { type: "warning", message: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
        (0,emotion_react_browser_esm.jsx)("div", null, refreshWarning),
        (0,emotion_react_browser_esm.jsx)("br", null),
        (0,emotion_react_browser_esm.jsx)("strong", null, (0,TranslatorSingleton.t)('Are you sure you want to proceed?'))) }))),


      modalFooter: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", buttonSize: "small", onClick: this.onSave },
      editMode ? (0,TranslatorSingleton.t)('Save') : (0,TranslatorSingleton.t)('Save for this session')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { onClick: this.onCancel, buttonSize: "small" },
      (0,TranslatorSingleton.t)('Cancel'))) });


  }}RefreshIntervalModal.defaultProps = { refreshLimit: 0, refreshWarning: null };

/* harmony default export */ const components_RefreshIntervalModal = (RefreshIntervalModal);
// EXTERNAL MODULE: ./src/components/Radio/index.tsx
var Radio = __webpack_require__(87183);
// EXTERNAL MODULE: ./src/components/Checkbox/index.tsx + 1 modules
var Checkbox = __webpack_require__(87253);
;// CONCATENATED MODULE: ./src/dashboard/components/SaveModal.tsx
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
/* eslint-env browser */








const SaveModal_defaultProps = {
  saveType: constants/* SAVE_TYPE_OVERWRITE */.TN,
  colorNamespace: undefined,
  colorScheme: undefined,
  shouldPersistRefreshFrequency: false };

class SaveModal extends react.PureComponent {



  constructor(props) {
    super(props);this.modal = void 0;this.onSave = void 0;
    this.state = {
      saveType: props.saveType,
      newDashName: `${props.dashboardTitle} [copy]`,
      duplicateSlices: false };

    this.modal = null;
    this.handleSaveTypeChange = this.handleSaveTypeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.saveDashboard = this.saveDashboard.bind(this);
    this.setModalRef = this.setModalRef.bind(this);
    this.toggleDuplicateSlices = this.toggleDuplicateSlices.bind(this);
    this.onSave = this.props.onSave.bind(this);
  }
  setModalRef(ref) {
    this.modal = ref;
  }
  toggleDuplicateSlices() {
    this.setState((prevState) => ({
      duplicateSlices: !prevState.duplicateSlices }));

  }
  handleSaveTypeChange(event) {
    this.setState({
      saveType: event.target.value });

  }
  handleNameChange(name) {
    this.setState({
      newDashName: name,
      saveType: constants/* SAVE_TYPE_NEWDASHBOARD */.kS });

  }
  saveDashboard() {var _dashboardInfo$metada;
    const { saveType, newDashName } = this.state;
    const { dashboardTitle, dashboardInfo, layout: positions, customCss, dashboardId, refreshFrequency: currentRefreshFrequency, shouldPersistRefreshFrequency, lastModifiedTime } = this.props;
    // check refresh frequency is for current session or persist
    const refreshFrequency = shouldPersistRefreshFrequency ?
    currentRefreshFrequency : (_dashboardInfo$metada =
    dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada.refresh_frequency; // eslint-disable camelcase
    const data = {
      certified_by: dashboardInfo.certified_by,
      certification_details: dashboardInfo.certification_details,
      css: customCss,
      dashboard_title: saveType === constants/* SAVE_TYPE_NEWDASHBOARD */.kS ? newDashName : dashboardTitle,
      duplicate_slices: this.state.duplicateSlices,
      last_modified_time: lastModifiedTime,
      owners: dashboardInfo.owners,
      roles: dashboardInfo.roles,
      metadata: {
        ...(dashboardInfo == null ? void 0 : dashboardInfo.metadata),
        positions,
        refresh_frequency: refreshFrequency } };


    if (saveType === constants/* SAVE_TYPE_NEWDASHBOARD */.kS && !newDashName) {
      this.props.addDangerToast((0,TranslatorSingleton.t)('You must pick a name for the new dashboard'));
    } else
    {var _this$modal;
      this.onSave(data, dashboardId, saveType).then((resp) => {
        if (saveType === constants/* SAVE_TYPE_NEWDASHBOARD */.kS &&
        resp &&
        resp.json &&
        resp.json.id) {
          window.location.href = `/superset/dashboard/${resp.json.id}/`;
        }
      });
      (_this$modal = this.modal) == null ? void 0 : _this$modal.close();
    }
  }
  render() {
    return (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { ref: this.setModalRef, triggerNode: this.props.triggerNode, modalTitle: (0,TranslatorSingleton.t)('Save dashboard'), modalBody: (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: constants/* SAVE_TYPE_OVERWRITE */.TN, onChange: this.handleSaveTypeChange, checked: this.state.saveType === constants/* SAVE_TYPE_OVERWRITE */.TN, disabled: !this.props.canOverwrite },
      (0,TranslatorSingleton.t)('Overwrite Dashboard [%s]', this.props.dashboardTitle)),

      (0,emotion_react_browser_esm.jsx)("hr", null),
      (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: constants/* SAVE_TYPE_NEWDASHBOARD */.kS, onChange: this.handleSaveTypeChange, checked: this.state.saveType === constants/* SAVE_TYPE_NEWDASHBOARD */.kS },
      (0,TranslatorSingleton.t)('Save as:')),

      (0,emotion_react_browser_esm.jsx)(components/* Input */.II, { type: "text", placeholder: (0,TranslatorSingleton.t)('[dashboard name]'), value: this.state.newDashName, onFocus: (e) => this.handleNameChange(e.target.value), onChange: (e) => this.handleNameChange(e.target.value) }),
      (0,emotion_react_browser_esm.jsx)("div", { className: "m-l-25 m-t-5" },
      (0,emotion_react_browser_esm.jsx)(Checkbox/* default */.ZP, { checked: this.state.duplicateSlices, onChange: () => this.toggleDuplicateSlices() }),
      (0,emotion_react_browser_esm.jsx)("span", { className: "m-l-5" }, (0,TranslatorSingleton.t)('also copy (duplicate) charts')))),

      modalFooter: (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: this.saveDashboard },
      (0,TranslatorSingleton.t)('Save'))) });


  }}SaveModal.defaultProps = SaveModal_defaultProps;

/* harmony default export */ const components_SaveModal = (SaveModal);
// EXTERNAL MODULE: ./src/dashboard/util/injectCustomCss.ts
var injectCustomCss = __webpack_require__(14505);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardFilters.js
var dashboardFilters = __webpack_require__(86422);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardState.js + 1 modules
var dashboardState = __webpack_require__(31758);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
;// CONCATENATED MODULE: ./src/dashboard/util/getFilterScopeNodesTree.js
























const FILTER_SCOPE_CONTAINER_TYPES = [componentTypes/* TAB_TYPE */.gn, componentTypes/* DASHBOARD_ROOT_TYPE */.U0];

function traverse({
  currentNode = {},
  components = {},
  filterFields = [],
  selectedChartId })
{
  if (!currentNode) {
    return null;
  }

  const { type } = currentNode;
  if (
  componentTypes/* CHART_TYPE */.dW === type &&
  currentNode &&
  currentNode.meta &&
  currentNode.meta.chartId)
  {
    const chartNode = {
      value: currentNode.meta.chartId,
      label:
      currentNode.meta.sliceName || `${type} ${currentNode.meta.chartId}`,
      type,
      showCheckbox: selectedChartId !== currentNode.meta.chartId };


    return {
      ...chartNode,
      children: filterFields.map((filterField) => ({
        value: `${currentNode.meta.chartId}:${filterField}`,
        label: `${chartNode.label}`,
        type: 'filter_box',
        showCheckbox: false })) };


  }

  let children = [];
  if (currentNode.children && currentNode.children.length) {
    currentNode.children.forEach((child) => {
      const childNodeTree = traverse({
        currentNode: components[child],
        components,
        filterFields,
        selectedChartId });


      const childType = components[child].type;
      if (FILTER_SCOPE_CONTAINER_TYPES.includes(childType)) {
        children.push(childNodeTree);
      } else {
        children = children.concat(childNodeTree);
      }
    });
  }

  if (FILTER_SCOPE_CONTAINER_TYPES.includes(type)) {
    let label = null;
    if (type === componentTypes/* DASHBOARD_ROOT_TYPE */.U0) {
      label = (0,TranslatorSingleton.t)('All charts');
    } else {
      label =
      currentNode.meta && currentNode.meta.text ?
      currentNode.meta.text :
      `${type} ${currentNode.id}`;
    }

    return {
      value: currentNode.id,
      label,
      type,
      children };

  }

  return children;
}

function getFilterScopeNodesTree({
  components = {},
  filterFields = [],
  selectedChartId })
{
  if (isEmpty_default()(components)) {
    return [];
  }

  const root = traverse({
    currentNode: components[constants/* DASHBOARD_ROOT_ID */._4],
    components,
    filterFields,
    selectedChartId });

  return [
  {
    ...root }];


}
;// CONCATENATED MODULE: ./src/dashboard/util/getFilterScopeParentNodes.js
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
function getFilterScopeParentNodes(nodes = [], depthLimit = -1) {
  const parentNodes = [];
  const traverse = (currentNode, depth) => {
    if (!currentNode) {
      return;
    }

    if (currentNode.children && (depthLimit === -1 || depth < depthLimit)) {
      parentNodes.push(currentNode.value);
      currentNode.children.forEach((child) => traverse(child, depth + 1));
    }
  };

  if (nodes.length > 0) {
    nodes.forEach((node) => {
      traverse(node, 0);
    });
  }

  return parentNodes;
}
;// CONCATENATED MODULE: ./src/dashboard/util/getKeyForFilterScopeTree.js
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


function getKeyForFilterScopeTree({
  activeFilterField,
  checkedFilterFields })
{
  return (0,safeStringify/* safeStringify */.o)(
  activeFilterField ? [activeFilterField] : checkedFilterFields);

}
// EXTERNAL MODULE: ./src/dashboard/util/getDashboardFilterKey.ts
var getDashboardFilterKey = __webpack_require__(20194);
;// CONCATENATED MODULE: ./src/dashboard/util/getSelectedChartIdForFilterScopeTree.js
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


function getSelectedChartIdForFilterScopeTree({
  activeFilterField,
  checkedFilterFields })
{
  // we don't apply filter on filter_box itself, so we will disable
  // checkbox in filter scope selector.
  // this function returns chart id based on current filter scope selector local state:
  // 1. if in single-edit mode, return the chart id for selected filter field.
  // 2. if in multi-edit mode, if all filter fields are from same chart id,
  // return the single chart id.
  // otherwise, there is no chart to disable.
  if (activeFilterField) {
    return (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(activeFilterField).chartId;
  }

  if (checkedFilterFields.length) {
    const { chartId } = (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(
    checkedFilterFields[0]);


    if (
    checkedFilterFields.some(
    (filterKey) =>
    (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(filterKey).chartId !== chartId))

    {
      return null;
    }
    return chartId;
  }

  return null;
}
;// CONCATENATED MODULE: ./src/dashboard/util/buildFilterScopeTreeEntry.js
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





function buildFilterScopeTreeEntry({
  checkedFilterFields = [],
  activeFilterField,
  filterScopeMap = {},
  layout = {} })
{
  const key = getKeyForFilterScopeTree({
    checkedFilterFields,
    activeFilterField });

  const editingList = activeFilterField ?
  [activeFilterField] :
  checkedFilterFields;
  const selectedChartId = getSelectedChartIdForFilterScopeTree({
    checkedFilterFields,
    activeFilterField });

  const nodes = getFilterScopeNodesTree({
    components: layout,
    filterFields: editingList,
    selectedChartId });

  const checkedChartIdSet = new Set();
  editingList.forEach((filterField) => {
    (filterScopeMap[filterField].checked || []).forEach((chartId) => {
      checkedChartIdSet.add(`${chartId}:${filterField}`);
    });
  });
  const checked = [...checkedChartIdSet];
  const expanded = filterScopeMap[key] ?
  filterScopeMap[key].expanded :
  getFilterScopeParentNodes(nodes, 1);

  return {
    [key]: {
      nodes,
      nodesFiltered: [...nodes],
      checked,
      expanded } };


}
;// CONCATENATED MODULE: ./src/dashboard/util/getFilterFieldNodesTree.js
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






function getFilterFieldNodesTree({ dashboardFilters = {} }) {
  const allFilters = Object.values(dashboardFilters).map((dashboardFilter) => {
    const { chartId, filterName, columns, labels } = dashboardFilter;
    const children = Object.keys(columns).map((column) => ({
      value: (0,getDashboardFilterKey/* getDashboardFilterKey */.w)({ chartId, column }),
      label: labels[column] || column }));

    return {
      value: chartId,
      label: filterName,
      children,
      showCheckbox: true };

  });

  return [
  {
    value: constants/* ALL_FILTERS_ROOT */.dU,
    type: componentTypes/* DASHBOARD_ROOT_TYPE */.U0,
    label: (0,TranslatorSingleton.t)('All filters'),
    children: allFilters }];


}
// EXTERNAL MODULE: ./node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(94654);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
// EXTERNAL MODULE: ./node_modules/lodash/fp/mapValues.js
var mapValues = __webpack_require__(83927);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/lodash/fp/keyBy.js
var keyBy = __webpack_require__(58809);
var keyBy_default = /*#__PURE__*/__webpack_require__.n(keyBy);
// EXTERNAL MODULE: ./node_modules/lodash/fp/flow.js
var flow = __webpack_require__(8816);
var flow_default = /*#__PURE__*/__webpack_require__.n(flow);
;// CONCATENATED MODULE: ./src/dashboard/util/getFilterScopeFromNodesTree.js
























function getImmuneChartIdsFromTabsNotInScope({ tabs = [], tabsInScope = [] }) {
  const chartsNotInScope = [];
  tabs.forEach(({ value: tab, children: tabChildren }) => {
    if (tabChildren && !tabsInScope.includes(tab)) {
      tabChildren.forEach(({ value: subTab, children: subTabChildren }) => {
        if (subTabChildren && !tabsInScope.includes(subTab)) {
          chartsNotInScope.push(
          ...subTabChildren.filter(({ type }) => type === componentTypes/* CHART_TYPE */.dW));

        }
      });
    }
  });

  // return chartId only
  return chartsNotInScope.map(({ value }) => value);
}
function getTabChildrenScope({
  tabScopes,
  parentNodeValue,
  forceAggregate = false,
  hasChartSiblings = false,
  tabChildren = [],
  immuneChartSiblings = [] })
{
  // if all sub-tabs are in scope, or forceAggregate =  true
  // aggregate scope to parentNodeValue
  if (
  forceAggregate ||
  !hasChartSiblings &&
  Object.entries(tabScopes).every(
  ([key, { scope }]) => scope && scope.length && key === scope[0]))

  {
    // get all charts from tabChildren that is not in scope
    const immuneChartIdsFromTabsNotInScope = getImmuneChartIdsFromTabsNotInScope(
    {
      tabs: tabChildren,
      tabsInScope: flatMap_default()(tabScopes, ({ scope }) => scope) });


    const immuneChartIdsFromTabsInScope = flatMap_default()(
    Object.values(tabScopes),
    ({ immune }) => immune);

    const immuneCharts = [
    ...new Set([
    ...immuneChartIdsFromTabsNotInScope,
    ...immuneChartIdsFromTabsInScope])];


    return {
      scope: [parentNodeValue],
      immune: immuneCharts };

  }

  const componentsInScope = Object.values(tabScopes).filter(
  ({ scope }) => scope && scope.length);

  return {
    scope: flatMap_default()(componentsInScope, ({ scope }) => scope),
    immune: componentsInScope.length ?
    flatMap_default()(componentsInScope, ({ immune }) => immune) :
    flatMap_default()(Object.values(tabScopes), ({ immune }) => immune).concat(
    immuneChartSiblings) };


}

function getFilterScopeFromNodesTree_traverse({ currentNode = {}, filterId, checkedChartIds = [] }) {
  if (!currentNode) {
    return {};
  }

  const { value: currentValue, children } = currentNode;
  const chartChildren = children.filter(({ type }) => type === componentTypes/* CHART_TYPE */.dW);
  const tabChildren = children.filter(({ type }) => type === componentTypes/* TAB_TYPE */.gn);

  const chartsImmune = chartChildren.
  filter(
  ({ value }) => filterId !== value && !checkedChartIds.includes(value)).

  map(({ value }) => value);
  const tabScopes = flow_default()(
  keyBy_default()((child) => child.value),
  mapValues_default()((child) =>
  getFilterScopeFromNodesTree_traverse({
    currentNode: child,
    filterId,
    checkedChartIds })))(


  tabChildren);

  // if any chart type child is in scope,
  // no matter has tab children or not, current node should be scope
  if (
  !isEmpty_default()(chartChildren) &&
  chartChildren.some(({ value }) => checkedChartIds.includes(value)))
  {
    if (isEmpty_default()(tabChildren)) {
      return { scope: [currentValue], immune: chartsImmune };
    }

    const { scope, immune } = getTabChildrenScope({
      tabScopes,
      parentNodeValue: currentValue,
      forceAggregate: true,
      tabChildren });

    return {
      scope,
      immune: chartsImmune.concat(immune) };

  }

  // has tab children but only some sub-tab in scope
  if (tabChildren.length) {
    return getTabChildrenScope({
      tabScopes,
      parentNodeValue: currentValue,
      hasChartSiblings: !isEmpty_default()(chartChildren),
      tabChildren,
      immuneChartSiblings: chartsImmune });

  }

  // no tab children and no chart children in scope
  return {
    scope: [],
    immune: chartsImmune };

}

function getFilterScopeFromNodesTree({
  filterKey,
  nodes = [],
  checkedChartIds = [] })
{
  if (nodes.length) {
    const { chartId } = (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(filterKey);
    return getFilterScopeFromNodesTree_traverse({
      currentNode: nodes[0],
      filterId: chartId,
      checkedChartIds });

  }

  return {};
}
;// CONCATENATED MODULE: ./src/dashboard/util/getRevertedFilterScope.ts
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

function getRevertedFilterScope({ checked = [], filterFields = [], filterScopeMap = {} }) {
  const checkedChartIdsByFilterField = checked.reduce((map, value) => {
    const [chartId, filterField] = value.split(':');
    return {
      ...map,
      [filterField]: (map[filterField] || []).concat(parseInt(chartId, 10)) };

  }, {});
  return filterFields.reduce((map, filterField) => {
    const { chartId } = (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(filterField);
    // force display filter_box chart as unchecked, but show checkbox as disabled
    const updatedCheckedIds = (checkedChartIdsByFilterField[filterField] || []).filter((id) => id !== chartId);
    return {
      ...map,
      [filterField]: {
        ...filterScopeMap[filterField],
        checked: updatedCheckedIds } };


  }, {});
}
// EXTERNAL MODULE: ./src/dashboard/util/activeDashboardFilters.js
var activeDashboardFilters = __webpack_require__(43399);
// EXTERNAL MODULE: ./node_modules/react-checkbox-tree/lib/index.browser.js
var index_browser = __webpack_require__(28388);
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);
;// CONCATENATED MODULE: ./src/components/ChartIcon/index.tsx
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

const ChartIcon = () => (0,emotion_react_browser_esm.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
(0,emotion_react_browser_esm.jsx)("rect", { x: "0.5", y: "0.5", width: "17", height: "17", rx: "2.5", fill: "#EFF9F9", stroke: "#B3DADC" }),
(0,emotion_react_browser_esm.jsx)("rect", { x: "8", y: "4", width: "2", height: "10", rx: "1", fill: "#B3DADC" }),
(0,emotion_react_browser_esm.jsx)("rect", { x: "12", y: "10", width: "2", height: "4", rx: "1", fill: "#B3DADC" }),
(0,emotion_react_browser_esm.jsx)("rect", { x: "4", y: "6", width: "2", height: "8", rx: "1", fill: "#B3DADC" }));

/* harmony default export */ const components_ChartIcon = (ChartIcon);
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/renderFilterScopeTreeNodes.jsx
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






function renderFilterScopeTreeNodes_traverse({ currentNode = {}, selectedChartId }) {
  if (!currentNode) {
    return null;
  }

  const { label, value, type, children } = currentNode;
  if (children && children.length) {
    const updatedChildren = children.map((child) =>
    renderFilterScopeTreeNodes_traverse({ currentNode: child, selectedChartId }));

    return {
      ...currentNode,
      label:
      (0,emotion_react_browser_esm.jsx)("span", {
        className: classnames_default()(`filter-scope-type ${type.toLowerCase()}`, {
          'selected-filter': selectedChartId === value }) },


      type === componentTypes/* CHART_TYPE */.dW &&
      (0,emotion_react_browser_esm.jsx)("span", { className: "type-indicator" },
      (0,emotion_react_browser_esm.jsx)(components_ChartIcon, null)),


      label),


      children: updatedChildren };

  }
  return {
    ...currentNode,
    label:
    (0,emotion_react_browser_esm.jsx)("span", {
      className: classnames_default()(`filter-scope-type ${type.toLowerCase()}`, {
        'selected-filter': selectedChartId === value }) },


    label) };



}

function renderFilterScopeTreeNodes({ nodes, selectedChartId }) {
  if (!nodes) {
    return [];
  }

  return nodes.map((node) => renderFilterScopeTreeNodes_traverse({ currentNode: node, selectedChartId }));
}
// EXTERNAL MODULE: ./src/components/Checkbox/CheckboxIcons.tsx
var CheckboxIcons = __webpack_require__(13842);
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/treeIcons.jsx
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






const treeIcons = {
  check: (0,emotion_react_browser_esm.jsx)(CheckboxIcons/* CheckboxChecked */.lU, null),
  uncheck: (0,emotion_react_browser_esm.jsx)(CheckboxIcons/* CheckboxUnchecked */.zq, null),
  halfCheck: (0,emotion_react_browser_esm.jsx)(CheckboxIcons/* CheckboxHalfChecked */.dc, null),
  expandClose: (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-expand-close" }),
  expandOpen: (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-expand-open" }),
  expandAll:
  (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-expand-all" }, (0,TranslatorSingleton.t)('Expand all')),

  collapseAll:
  (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-collapse-all" }, (0,TranslatorSingleton.t)('Collapse all')),

  parentClose: (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-parent-close" }),
  parentOpen: (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-parent-open" }),
  leaf: (0,emotion_react_browser_esm.jsx)("span", { className: "rct-icon rct-icon-leaf" }) };


/* harmony default export */ const filterscope_treeIcons = (treeIcons);
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/FilterScopeTree.jsx
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







const FilterScopeTree_propTypes = {
  nodes: prop_types_default().arrayOf(propShapes/* filterScopeSelectorTreeNodePropShape */.ck).isRequired,
  checked: prop_types_default().arrayOf(
  prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])).
  isRequired,
  expanded: prop_types_default().arrayOf(
  prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])).
  isRequired,
  onCheck: (prop_types_default()).func.isRequired,
  onExpand: (prop_types_default()).func.isRequired,
  selectedChartId: (prop_types_default()).number };


const FilterScopeTree_defaultProps = {
  selectedChartId: null };


const NOOP = () => {};

function FilterScopeTree({
  nodes = [],
  checked = [],
  expanded = [],
  onCheck,
  onExpand,
  selectedChartId })
{
  return (
    (0,emotion_react_browser_esm.jsx)((index_browser_default()), {
      showExpandAll: true,
      expandOnClick: true,
      showNodeIcon: false,
      nodes: renderFilterScopeTreeNodes({ nodes, selectedChartId }),
      checked: checked,
      expanded: expanded,
      onCheck: onCheck,
      onExpand: onExpand,
      onClick: NOOP,
      icons: filterscope_treeIcons }));


}

FilterScopeTree.propTypes = FilterScopeTree_propTypes;
FilterScopeTree.defaultProps = FilterScopeTree_defaultProps;
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/FilterFieldItem.jsx
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





const FilterFieldItem_propTypes = {
  label: (prop_types_default()).string.isRequired,
  isSelected: (prop_types_default()).bool.isRequired };


function FilterFieldItem({ label, isSelected }) {
  return (
    (0,emotion_react_browser_esm.jsx)("span", {
      className: classnames_default()('filter-field-item filter-container', {
        'is-selected': isSelected }) },


    (0,emotion_react_browser_esm.jsx)(Form/* FormLabel */.lX, { htmlFor: label }, label)));


}

FilterFieldItem.propTypes = FilterFieldItem_propTypes;
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/renderFilterFieldTreeNodes.jsx
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



function renderFilterFieldTreeNodes({ nodes, activeKey }) {
  if (!nodes) {
    return [];
  }

  const root = nodes[0];
  const allFilterNodes = root.children;
  const children = allFilterNodes.map((node) => ({
    ...node,
    children: node.children.map((child) => {
      const { label, value } = child;
      return {
        ...child,
        label:
        (0,emotion_react_browser_esm.jsx)(FilterFieldItem, { isSelected: value === activeKey, label: label }) };


    }) }));


  return [
  {
    ...root,
    label: (0,emotion_react_browser_esm.jsx)("span", { className: "root" }, root.label),
    children }];


}
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/FilterFieldTree.jsx
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







const FilterFieldTree_propTypes = {
  activeKey: (prop_types_default()).string,
  nodes: prop_types_default().arrayOf(propShapes/* filterScopeSelectorTreeNodePropShape */.ck).isRequired,
  checked: prop_types_default().arrayOf(
  prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])).
  isRequired,
  expanded: prop_types_default().arrayOf(
  prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string])).
  isRequired,
  onCheck: (prop_types_default()).func.isRequired,
  onExpand: (prop_types_default()).func.isRequired,
  onClick: (prop_types_default()).func.isRequired };


const FilterFieldTree_defaultProps = {
  activeKey: null };


function FilterFieldTree({
  activeKey,
  nodes = [],
  checked = [],
  expanded = [],
  onClick,
  onCheck,
  onExpand })
{
  return (
    (0,emotion_react_browser_esm.jsx)((index_browser_default()), {
      showExpandAll: true,
      showNodeIcon: false,
      expandOnClick: true,
      nodes: renderFilterFieldTreeNodes({ nodes, activeKey }),
      checked: checked,
      expanded: expanded,
      onClick: onClick,
      onCheck: onCheck,
      onExpand: onExpand,
      icons: filterscope_treeIcons }));


}

FilterFieldTree.propTypes = FilterFieldTree_propTypes;
FilterFieldTree.defaultProps = FilterFieldTree_defaultProps;
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/FilterScopeSelector.jsx
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





















const FilterScopeSelector_propTypes = {
  dashboardFilters: prop_types_default().objectOf(propShapes/* dashboardFilterPropShape */.Er).isRequired,
  layout: (prop_types_default()).object.isRequired,

  updateDashboardFiltersScope: (prop_types_default()).func.isRequired,
  setUnsavedChanges: (prop_types_default()).func.isRequired,
  onCloseModal: (prop_types_default()).func.isRequired };


const ActionsContainer = style/* styled.div */.iK.div`
  height: ${({ theme }) => theme.gridUnit * 16}px;

  // TODO: replace hardcoded color with theme variable after refactoring filter-scope-selector.less to Emotion
  border-top: ${({ theme }) => theme.gridUnit / 4}px solid #cfd8dc;
  padding: ${({ theme }) => theme.gridUnit * 6}px;
  margin: 0 0 0 ${({ theme }) => -theme.gridUnit * 6}px;
  text-align: right;

  .btn {
    margin-right: ${({ theme }) => theme.gridUnit * 4}px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

class FilterScopeSelector extends react.PureComponent {
  constructor(props) {
    super(props);

    const { dashboardFilters, layout } = props;

    if (Object.keys(dashboardFilters).length > 0) {
      // display filter fields in tree structure
      const filterFieldNodes = getFilterFieldNodesTree({
        dashboardFilters });

      // filterFieldNodes root node is dashboard_root component,
      // so that we can offer a select/deselect all link
      const filtersNodes = filterFieldNodes[0].children;
      this.allfilterFields = [];
      filtersNodes.forEach(({ children }) => {
        children.forEach((child) => {
          this.allfilterFields.push(child.value);
        });
      });
      this.defaultFilterKey = filtersNodes[0].children[0].value;

      // build FilterScopeTree object for each filterKey
      const filterScopeMap = Object.values(dashboardFilters).reduce(
      (map, { chartId: filterId, columns }) => {
        const filterScopeByChartId = Object.keys(columns).reduce(
        (mapByChartId, columnName) => {
          const filterKey = (0,getDashboardFilterKey/* getDashboardFilterKey */.w)({
            chartId: filterId,
            column: columnName });

          const nodes = getFilterScopeNodesTree({
            components: layout,
            filterFields: [filterKey],
            selectedChartId: filterId });

          const expanded = getFilterScopeParentNodes(nodes, 1);
          // force display filter_box chart as unchecked, but show checkbox as disabled
          const chartIdsInFilterScope = (
          (0,activeDashboardFilters/* getChartIdsInFilterScope */.Q1)({
            filterScope: dashboardFilters[filterId].scopes[columnName] }) ||
          []).
          filter((id) => id !== filterId);

          return {
            ...mapByChartId,
            [filterKey]: {
              // unfiltered nodes
              nodes,
              // filtered nodes in display if searchText is not empty
              nodesFiltered: [...nodes],
              checked: chartIdsInFilterScope,
              expanded } };


        },
        {});


        return {
          ...map,
          ...filterScopeByChartId };

      },
      {});


      // initial state: active defaultFilerKey
      const { chartId } = (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(
      this.defaultFilterKey);

      const checkedFilterFields = [];
      const activeFilterField = this.defaultFilterKey;
      // expand defaultFilterKey in filter field tree
      const expandedFilterIds = [constants/* ALL_FILTERS_ROOT */.dU].concat(chartId);

      const filterScopeTreeEntry = buildFilterScopeTreeEntry({
        checkedFilterFields,
        activeFilterField,
        filterScopeMap,
        layout });

      this.state = {
        showSelector: true,
        activeFilterField,
        searchText: '',
        filterScopeMap: {
          ...filterScopeMap,
          ...filterScopeTreeEntry },

        filterFieldNodes,
        checkedFilterFields,
        expandedFilterIds };

    } else {
      this.state = {
        showSelector: false };

    }

    this.filterNodes = this.filterNodes.bind(this);
    this.onChangeFilterField = this.onChangeFilterField.bind(this);
    this.onCheckFilterScope = this.onCheckFilterScope.bind(this);
    this.onExpandFilterScope = this.onExpandFilterScope.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onCheckFilterField = this.onCheckFilterField.bind(this);
    this.onExpandFilterField = this.onExpandFilterField.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onCheckFilterScope(checked = []) {
    const {
      activeFilterField,
      filterScopeMap,
      checkedFilterFields } =
    this.state;

    const key = getKeyForFilterScopeTree({
      activeFilterField,
      checkedFilterFields });

    const editingList = activeFilterField ?
    [activeFilterField] :
    checkedFilterFields;
    const updatedEntry = {
      ...filterScopeMap[key],
      checked };


    const updatedFilterScopeMap = getRevertedFilterScope({
      checked,
      filterFields: editingList,
      filterScopeMap });


    this.setState(() => ({
      filterScopeMap: {
        ...filterScopeMap,
        ...updatedFilterScopeMap,
        [key]: updatedEntry } }));


  }

  onExpandFilterScope(expanded = []) {
    const {
      activeFilterField,
      checkedFilterFields,
      filterScopeMap } =
    this.state;
    const key = getKeyForFilterScopeTree({
      activeFilterField,
      checkedFilterFields });

    const updatedEntry = {
      ...filterScopeMap[key],
      expanded };

    this.setState(() => ({
      filterScopeMap: {
        ...filterScopeMap,
        [key]: updatedEntry } }));


  }

  onCheckFilterField(checkedFilterFields = []) {
    const { layout } = this.props;
    const { filterScopeMap } = this.state;
    const filterScopeTreeEntry = buildFilterScopeTreeEntry({
      checkedFilterFields,
      activeFilterField: null,
      filterScopeMap,
      layout });


    this.setState(() => ({
      activeFilterField: null,
      checkedFilterFields,
      filterScopeMap: {
        ...filterScopeMap,
        ...filterScopeTreeEntry } }));


  }

  onExpandFilterField(expandedFilterIds = []) {
    this.setState(() => ({
      expandedFilterIds }));

  }

  onChangeFilterField(filterField = {}) {
    const { layout } = this.props;
    const nextActiveFilterField = filterField.value;
    const {
      activeFilterField: currentActiveFilterField,
      checkedFilterFields,
      filterScopeMap } =
    this.state;

    // we allow single edit and multiple edit in the same view.
    // if user click on the single filter field,
    // will show filter scope for the single field.
    // if user click on the same filter filed again,
    // will toggle off the single filter field,
    // and allow multi-edit all checked filter fields.
    if (nextActiveFilterField === currentActiveFilterField) {
      const filterScopeTreeEntry = buildFilterScopeTreeEntry({
        checkedFilterFields,
        activeFilterField: null,
        filterScopeMap,
        layout });


      this.setState({
        activeFilterField: null,
        filterScopeMap: {
          ...filterScopeMap,
          ...filterScopeTreeEntry } });


    } else if (this.allfilterFields.includes(nextActiveFilterField)) {
      const filterScopeTreeEntry = buildFilterScopeTreeEntry({
        checkedFilterFields,
        activeFilterField: nextActiveFilterField,
        filterScopeMap,
        layout });


      this.setState({
        activeFilterField: nextActiveFilterField,
        filterScopeMap: {
          ...filterScopeMap,
          ...filterScopeTreeEntry } });


    }
  }

  onSearchInputChange(e) {
    this.setState({ searchText: e.target.value }, this.filterTree);
  }

  onClose() {
    this.props.onCloseModal();
  }

  onSave() {
    const { filterScopeMap } = this.state;

    const allFilterFieldScopes = this.allfilterFields.reduce(
    (map, filterKey) => {
      const { nodes } = filterScopeMap[filterKey];
      const checkedChartIds = filterScopeMap[filterKey].checked;

      return {
        ...map,
        [filterKey]: getFilterScopeFromNodesTree({
          filterKey,
          nodes,
          checkedChartIds }) };


    },
    {});


    this.props.updateDashboardFiltersScope(allFilterFieldScopes);
    this.props.setUnsavedChanges(true);

    // click Save button will do save and close modal
    this.props.onCloseModal();
  }

  filterTree() {
    // Reset nodes back to unfiltered state
    if (!this.state.searchText) {
      this.setState((prevState) => {
        const {
          activeFilterField,
          checkedFilterFields,
          filterScopeMap } =
        prevState;
        const key = getKeyForFilterScopeTree({
          activeFilterField,
          checkedFilterFields });


        const updatedEntry = {
          ...filterScopeMap[key],
          nodesFiltered: filterScopeMap[key].nodes };

        return {
          filterScopeMap: {
            ...filterScopeMap,
            [key]: updatedEntry } };


      });
    } else {
      const updater = (prevState) => {
        const {
          activeFilterField,
          checkedFilterFields,
          filterScopeMap } =
        prevState;
        const key = getKeyForFilterScopeTree({
          activeFilterField,
          checkedFilterFields });


        const nodesFiltered = filterScopeMap[key].nodes.reduce(
        this.filterNodes,
        []);

        const expanded = getFilterScopeParentNodes([...nodesFiltered]);
        const updatedEntry = {
          ...filterScopeMap[key],
          nodesFiltered,
          expanded };


        return {
          filterScopeMap: {
            ...filterScopeMap,
            [key]: updatedEntry } };


      };

      this.setState(updater);
    }
  }

  filterNodes(filtered = [], node = {}) {
    const { searchText } = this.state;
    const children = (node.children || []).reduce(this.filterNodes, []);

    if (
    // Node's label matches the search string
    node.label.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) >
    -1 ||
    // Or a children has a matching node
    children.length)
    {
      filtered.push({ ...node, children });
    }

    return filtered;
  }

  renderFilterFieldList() {
    const {
      activeFilterField,
      filterFieldNodes,
      checkedFilterFields,
      expandedFilterIds } =
    this.state;
    return (
      (0,emotion_react_browser_esm.jsx)(FilterFieldTree, {
        activeKey: activeFilterField,
        nodes: filterFieldNodes,
        checked: checkedFilterFields,
        expanded: expandedFilterIds,
        onClick: this.onChangeFilterField,
        onCheck: this.onCheckFilterField,
        onExpand: this.onExpandFilterField }));


  }

  renderFilterScopeTree() {
    const {
      filterScopeMap,
      activeFilterField,
      checkedFilterFields,
      searchText } =
    this.state;

    const key = getKeyForFilterScopeTree({
      activeFilterField,
      checkedFilterFields });


    const selectedChartId = getSelectedChartIdForFilterScopeTree({
      activeFilterField,
      checkedFilterFields });

    return (
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("input", {
        className: "filter-text scope-search multi-edit-mode",
        placeholder: (0,TranslatorSingleton.t)('Search...'),
        type: "text",
        value: searchText,
        onChange: this.onSearchInputChange }),

      (0,emotion_react_browser_esm.jsx)(FilterScopeTree, {
        nodes: filterScopeMap[key].nodesFiltered,
        checked: filterScopeMap[key].checked,
        expanded: filterScopeMap[key].expanded,
        onCheck: this.onCheckFilterScope,
        onExpand: this.onExpandFilterScope
        // pass selectedFilterId prop to FilterScopeTree component,
        // to hide checkbox for selected filter field itself
        , selectedChartId: selectedChartId })));



  }

  renderEditingFiltersName() {
    const { dashboardFilters } = this.props;
    const { activeFilterField, checkedFilterFields } = this.state;
    const currentFilterLabels = [].
    concat(activeFilterField || checkedFilterFields).
    map((key) => {
      const { chartId, column } = (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(key);
      return dashboardFilters[chartId].labels[column] || column;
    });

    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "selected-fields multi-edit-mode" },
      currentFilterLabels.length === 0 && (0,TranslatorSingleton.t)('No filter is selected.'),
      currentFilterLabels.length === 1 && (0,TranslatorSingleton.t)('Editing 1 filter:'),
      currentFilterLabels.length > 1 &&
      (0,TranslatorSingleton.t)('Batch editing %d filters:', currentFilterLabels.length),
      (0,emotion_react_browser_esm.jsx)("span", { className: "selected-scopes" },
      currentFilterLabels.join(', '))));



  }

  render() {
    const { showSelector } = this.state;

    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "filter-scope-container" },
      (0,emotion_react_browser_esm.jsx)("div", { className: "filter-scope-header" },
      (0,emotion_react_browser_esm.jsx)("h4", null, (0,TranslatorSingleton.t)('Configure filter scopes')),
      showSelector && this.renderEditingFiltersName()),


      (0,emotion_react_browser_esm.jsx)("div", { className: "filter-scope-body" },
      !showSelector ?
      (0,emotion_react_browser_esm.jsx)("div", { className: "warning-message" },
      (0,TranslatorSingleton.t)('There are no filters in this dashboard.')) :


      (0,emotion_react_browser_esm.jsx)("div", { className: "filters-scope-selector" },
      (0,emotion_react_browser_esm.jsx)("div", { className: classnames_default()('filter-field-pane multi-edit-mode') },
      this.renderFilterFieldList()),

      (0,emotion_react_browser_esm.jsx)("div", { className: "filter-scope-pane multi-edit-mode" },
      this.renderFilterScopeTree()))),





      (0,emotion_react_browser_esm.jsx)(ActionsContainer, null,
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonSize: "small", onClick: this.onClose },
      (0,TranslatorSingleton.t)('Close')),

      showSelector &&
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "primary",
        onClick: this.onSave },

      (0,TranslatorSingleton.t)('Save')))));





  }}


FilterScopeSelector.propTypes = FilterScopeSelector_propTypes;
;// CONCATENATED MODULE: ./src/dashboard/containers/FilterScope.jsx
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







function FilterScope_mapStateToProps({ dashboardLayout, dashboardFilters }) {
  return {
    dashboardFilters,
    layout: dashboardLayout.present };

}

function FilterScope_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    updateDashboardFiltersScope: dashboardFilters/* updateDashboardFiltersScope */.l6,
    setUnsavedChanges: dashboardState/* setUnsavedChanges */["if"] },

  dispatch);

}

/* harmony default export */ const FilterScope = ((0,es/* connect */.$j)(
FilterScope_mapStateToProps,
FilterScope_mapDispatchToProps)(
FilterScopeSelector));
;// CONCATENATED MODULE: ./src/dashboard/components/filterscope/FilterScopeModal.tsx
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




const FilterScopeModalBody = style/* styled.div */.iK.div(({ theme: { gridUnit } }) => ({
  padding: gridUnit * 2,
  paddingBottom: gridUnit * 3 }));

class FilterScopeModal extends react.PureComponent {

  constructor(props) {
    super(props);this.modal = void 0;
    this.modal = /*#__PURE__*/react.createRef();
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleCloseModal() {
    if (this.modal.current) {
      this.modal.current.close();
    }
  }
  render() {
    const filterScopeProps = {
      onCloseModal: this.handleCloseModal };

    return (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { ref: this.modal, triggerNode: this.props.triggerNode, modalBody: (0,emotion_react_browser_esm.jsx)(FilterScopeModalBody, null,
      (0,emotion_react_browser_esm.jsx)(FilterScope, filterScopeProps)),
      width: "80%" });
  }}
// EXTERNAL MODULE: ./src/utils/downloadAsImage.ts
var downloadAsImage = __webpack_require__(56727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js
var url_search_params = __webpack_require__(94435);
var url_search_params_default = /*#__PURE__*/__webpack_require__.n(url_search_params);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./src/dashboard/util/replaceUndefinedByNull.ts



















function processObject(object) {
  const result = object;
  Object.keys(result).forEach((key) => {
    if (result[key] === undefined) {
      result[key] = null;
    } else
    if (result[key] !== null && typeof result[key] === 'object') {
      result[key] = processObject(result[key]);
    }
  });
  return result;
}
function replaceUndefinedByNull(object) {
  const copy = cloneDeep_default()(object);
  return processObject(copy);
}
// EXTERNAL MODULE: ./src/dashboard/util/serializeActiveFilterValues.js
var serializeActiveFilterValues = __webpack_require__(11370);
;// CONCATENATED MODULE: ./src/dashboard/util/getDashboardUrl.ts
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




function getDashboardUrl({ pathname, filters = {}, hash = '', standalone, dataMask }) {
  const newSearchParams = new (url_search_params_default())();
  // convert flattened { [id_column]: values } object
  // to nested filter object
  newSearchParams.set(src_constants/* URL_PARAMS.preselectFilters.name */.KD.preselectFilters.name, JSON.stringify((0,serializeActiveFilterValues/* default */.Z)(filters)));
  if (standalone) {
    newSearchParams.set(src_constants/* URL_PARAMS.standalone.name */.KD.standalone.name, standalone.toString());
  }
  if (dataMask) {
    newSearchParams.set(src_constants/* URL_PARAMS.nativeFilters.name */.KD.nativeFilters.name, rison_default().encode(replaceUndefinedByNull(dataMask)));
  }
  const hashSection = hash ? `#${hash}` : '';
  return `${pathname}?${newSearchParams.toString()}${hashSection}`;
}
// EXTERNAL MODULE: ./src/utils/urlUtils.ts
var urlUtils = __webpack_require__(23525);
;// CONCATENATED MODULE: ./src/dashboard/components/Header/HeaderActionsDropdown/index.jsx
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




















const HeaderActionsDropdown_propTypes = {
  addSuccessToast: (prop_types_default()).func.isRequired,
  addDangerToast: (prop_types_default()).func.isRequired,
  dashboardInfo: (prop_types_default()).object.isRequired,
  dashboardId: (prop_types_default()).number.isRequired,
  dashboardTitle: (prop_types_default()).string.isRequired,
  dataMask: (prop_types_default()).object.isRequired,
  customCss: (prop_types_default()).string.isRequired,
  colorNamespace: (prop_types_default()).string,
  colorScheme: (prop_types_default()).string,
  onChange: (prop_types_default()).func.isRequired,
  updateCss: (prop_types_default()).func.isRequired,
  forceRefreshAllCharts: (prop_types_default()).func.isRequired,
  refreshFrequency: (prop_types_default()).number.isRequired,
  shouldPersistRefreshFrequency: (prop_types_default()).bool.isRequired,
  setRefreshFrequency: (prop_types_default()).func.isRequired,
  startPeriodicRender: (prop_types_default()).func.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  userCanEdit: (prop_types_default()).bool.isRequired,
  userCanShare: (prop_types_default()).bool.isRequired,
  userCanSave: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  layout: (prop_types_default()).object.isRequired,
  expandedSlices: (prop_types_default()).object.isRequired,
  onSave: (prop_types_default()).func.isRequired,
  showPropertiesModal: (prop_types_default()).func.isRequired,
  refreshLimit: (prop_types_default()).number,
  refreshWarning: (prop_types_default()).string,
  lastModifiedTime: (prop_types_default()).number.isRequired };


const HeaderActionsDropdown_defaultProps = {
  colorNamespace: undefined,
  colorScheme: undefined,
  refreshLimit: 0,
  refreshWarning: null };


const MENU_KEYS = {
  SAVE_MODAL: 'save-modal',
  SHARE_DASHBOARD: 'share-dashboard',
  REFRESH_DASHBOARD: 'refresh-dashboard',
  AUTOREFRESH_MODAL: 'autorefresh-modal',
  SET_FILTER_MAPPING: 'set-filter-mapping',
  EDIT_PROPERTIES: 'edit-properties',
  EDIT_CSS: 'edit-css',
  DOWNLOAD_AS_IMAGE: 'download-as-image',
  TOGGLE_FULLSCREEN: 'toggle-fullscreen' };


const DropdownButton = style/* styled.div */.iK.div`
  margin-left: ${({ theme }) => theme.gridUnit * 2.5}px;
  span {
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;

const SCREENSHOT_NODE_SELECTOR = '.dashboard';

class HeaderActionsDropdown extends react.PureComponent {
  static discardChanges() {
    window.location.reload();
  }

  constructor(props) {
    super(props);
    this.state = {
      css: props.customCss,
      cssTemplates: [] };


    this.changeCss = this.changeCss.bind(this);
    this.changeRefreshInterval = this.changeRefreshInterval.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  UNSAFE_componentWillMount() {
    (0,injectCustomCss/* default */.Z)(this.state.css);

    SupersetClient/* default.get */.Z.get({ endpoint: '/csstemplateasyncmodelview/api/read' }).
    then(({ json }) => {
      const cssTemplates = json.result.map((row) => ({
        value: row.template_name,
        css: row.css,
        label: row.template_name }));

      this.setState({ cssTemplates });
    }).
    catch(() => {
      this.props.addDangerToast(
      (0,TranslatorSingleton.t)('An error occurred while fetching available CSS templates'));

    });
  }

  changeCss(css) {
    this.setState({ css }, () => {
      (0,injectCustomCss/* default */.Z)(css);
    });
    this.props.onChange();
    this.props.updateCss(css);
  }

  changeRefreshInterval(refreshInterval, isPersistent) {
    this.props.setRefreshFrequency(refreshInterval, isPersistent);
    this.props.startPeriodicRender(refreshInterval * 1000);
  }

  handleMenuClick({ key, domEvent }) {
    switch (key) {
      case MENU_KEYS.REFRESH_DASHBOARD:
        this.props.forceRefreshAllCharts();
        break;
      case MENU_KEYS.EDIT_PROPERTIES:
        this.props.showPropertiesModal();
        break;
      case MENU_KEYS.DOWNLOAD_AS_IMAGE:{
          // menu closes with a delay, we need to hide it manually,
          // so that we don't capture it on the screenshot
          const menu = document.querySelector(
          '.ant-dropdown:not(.ant-dropdown-hidden)');

          menu.style.visibility = 'hidden';
          (0,downloadAsImage/* default */.Z)(
          SCREENSHOT_NODE_SELECTOR,
          this.props.dashboardTitle,
          {},
          true)(
          domEvent).then(() => {
            menu.style.visibility = 'visible';
          });
          break;
        }
      case MENU_KEYS.TOGGLE_FULLSCREEN:{
          const url = getDashboardUrl({
            dataMask: this.props.dataMask,
            pathname: window.location.pathname,
            filters: (0,activeDashboardFilters/* getActiveFilters */.De)(),
            hash: window.location.hash,
            standalone: !(0,urlUtils/* getUrlParam */.e)(src_constants/* URL_PARAMS.standalone */.KD.standalone) });

          window.location.replace(url);
          break;
        }
      default:
        break;}

  }

  render() {
    const {
      dashboardTitle,
      dashboardId,
      dashboardInfo,
      dataMask,
      refreshFrequency,
      shouldPersistRefreshFrequency,
      editMode,
      customCss,
      colorNamespace,
      colorScheme,
      layout,
      expandedSlices,
      onSave,
      userCanEdit,
      userCanShare,
      userCanSave,
      isLoading,
      refreshLimit,
      refreshWarning,
      lastModifiedTime,
      addSuccessToast,
      addDangerToast } =
    this.props;

    const emailTitle = (0,TranslatorSingleton.t)('Superset dashboard');
    const emailSubject = `${emailTitle} ${dashboardTitle}`;
    const emailBody = (0,TranslatorSingleton.t)('Check out this dashboard: ');

    const url = getDashboardUrl({
      dataMask,
      pathname: window.location.pathname,
      filters: (0,activeDashboardFilters/* getActiveFilters */.De)(),
      hash: window.location.hash });


    const menu =
    (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, {
      onClick: this.handleMenuClick,
      selectable: false },


    userCanSave &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.SAVE_MODAL },
    (0,emotion_react_browser_esm.jsx)(components_SaveModal, {
      addSuccessToast: this.props.addSuccessToast,
      addDangerToast: this.props.addDangerToast,
      dashboardId: dashboardId,
      dashboardTitle: dashboardTitle,
      dashboardInfo: dashboardInfo,
      saveType: constants/* SAVE_TYPE_NEWDASHBOARD */.kS,
      layout: layout,
      expandedSlices: expandedSlices,
      refreshFrequency: refreshFrequency,
      shouldPersistRefreshFrequency: shouldPersistRefreshFrequency,
      lastModifiedTime: lastModifiedTime,
      customCss: customCss,
      colorNamespace: colorNamespace,
      colorScheme: colorScheme,
      onSave: onSave,
      triggerNode:
      (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Save as')),

      canOverwrite: userCanEdit })),



    userCanShare &&
    (0,emotion_react_browser_esm.jsx)(menu_ShareMenuItems, {
      url: url,
      copyMenuItemTitle: (0,TranslatorSingleton.t)('Copy dashboard URL'),
      emailMenuItemTitle: (0,TranslatorSingleton.t)('Share dashboard by email'),
      emailSubject: emailSubject,
      emailBody: emailBody,
      addSuccessToast: addSuccessToast,
      addDangerToast: addDangerToast }),


    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, {
      key: MENU_KEYS.REFRESH_DASHBOARD,

      disabled: isLoading },

    (0,TranslatorSingleton.t)('Refresh dashboard')),

    (0,emotion_react_browser_esm.jsx)(components/* Menu.Divider */.v2.Divider, null),
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.AUTOREFRESH_MODAL },
    (0,emotion_react_browser_esm.jsx)(components_RefreshIntervalModal, {
      refreshFrequency: refreshFrequency,
      refreshLimit: refreshLimit,
      refreshWarning: refreshWarning,
      onChange: this.changeRefreshInterval,
      editMode: editMode,
      triggerNode: (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Set auto-refresh interval')) })),



    editMode &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.SET_FILTER_MAPPING },
    (0,emotion_react_browser_esm.jsx)(FilterScopeModal, {
      className: "m-r-5",
      triggerNode: (0,TranslatorSingleton.t)('Set filter mapping') })),




    editMode &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.EDIT_PROPERTIES },
    (0,TranslatorSingleton.t)('Edit dashboard properties')),



    editMode &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.EDIT_CSS },
    (0,emotion_react_browser_esm.jsx)(components_CssEditor, {
      triggerNode: (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Edit CSS')),
      initialCss: this.state.css,
      templates: this.state.cssTemplates,
      onChange: this.changeCss })),




    !editMode &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.DOWNLOAD_AS_IMAGE },
    (0,TranslatorSingleton.t)('Download as image')),



    !editMode &&
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: MENU_KEYS.TOGGLE_FULLSCREEN },
    (0,urlUtils/* getUrlParam */.e)(src_constants/* URL_PARAMS.standalone */.KD.standalone) ?
    (0,TranslatorSingleton.t)('Exit fullscreen') :
    (0,TranslatorSingleton.t)('Enter fullscreen')));




    return (
      (0,emotion_react_browser_esm.jsx)(components/* NoAnimationDropdown */.$i, {
        overlay: menu,
        trigger: ['click'],
        getPopupContainer: (triggerNode) =>
        triggerNode.closest('.dashboard-header') },


      (0,emotion_react_browser_esm.jsx)(DropdownButton, { id: "save-dash-split-button", role: "button" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.MoreHoriz */.Z.MoreHoriz, null))));



  }}


HeaderActionsDropdown.propTypes = HeaderActionsDropdown_propTypes;
HeaderActionsDropdown.defaultProps = HeaderActionsDropdown_defaultProps;

/* harmony default export */ const Header_HeaderActionsDropdown = (HeaderActionsDropdown);
// EXTERNAL MODULE: ./src/components/ReportModal/HeaderReportActionsDropdown/index.tsx
var HeaderReportActionsDropdown = __webpack_require__(48600);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/components/Label/index.tsx
var Label = __webpack_require__(37921);
;// CONCATENATED MODULE: ./src/dashboard/components/PublishedStatus/index.jsx
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






const PublishedStatus_propTypes = {
  dashboardId: (prop_types_default()).number.isRequired,
  isPublished: (prop_types_default()).bool.isRequired,
  savePublished: (prop_types_default()).func.isRequired,
  canEdit: (prop_types_default()).bool.isRequired,
  canSave: (prop_types_default()).bool.isRequired };


const draftButtonTooltip = (0,TranslatorSingleton.t)(
'This dashboard is not published, it will not show up in the list of dashboards. ' +
'Click here to publish this dashboard.');


const draftDivTooltip = (0,TranslatorSingleton.t)(
'This dashboard is not published which means it will not show up in the list of dashboards.' +
' Favorite it to see it there or access it by using the URL directly.');


const publishedTooltip = (0,TranslatorSingleton.t)(
'This dashboard is published. Click to make it a draft.');


class PublishedStatus extends react.Component {
  componentDidMount() {
    this.togglePublished = this.togglePublished.bind(this);
  }

  togglePublished() {
    this.props.savePublished(this.props.dashboardId, !this.props.isPublished);
  }

  render() {
    // Show everybody the draft badge
    if (!this.props.isPublished) {
      // if they can edit the dash, make the badge a button
      if (this.props.canEdit && this.props.canSave) {
        return (
          (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
            id: "unpublished-dashboard-tooltip",
            placement: "bottom",
            title: draftButtonTooltip },

          (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, {
            onClick: () => {
              this.togglePublished();
            } },

          (0,TranslatorSingleton.t)('Draft'))));



      }
      return (
        (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
          id: "unpublished-dashboard-tooltip",
          placement: "bottom",
          title: draftDivTooltip },

        (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, null, (0,TranslatorSingleton.t)('Draft'))));


    }

    // Show the published badge for the owner of the dashboard to toggle
    if (this.props.canEdit && this.props.canSave) {
      return (
        (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, {
          id: "published-dashboard-tooltip",
          placement: "bottom",
          title: publishedTooltip },

        (0,emotion_react_browser_esm.jsx)(Label/* default */.Z, {
          onClick: () => {
            this.togglePublished();
          } },

        (0,TranslatorSingleton.t)('Published'))));



    }

    // Don't show anything if one doesn't own the dashboard and it is published
    return null;
  }}


PublishedStatus.propTypes = PublishedStatus_propTypes;
;// CONCATENATED MODULE: ./src/dashboard/components/UndoRedoKeyListeners/index.jsx
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



const UndoRedoKeyListeners_propTypes = {
  onUndo: (prop_types_default()).func.isRequired,
  onRedo: (prop_types_default()).func.isRequired };


class UndoRedoKeyListeners extends react.PureComponent {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown(event) {
    const controlOrCommand = event.ctrlKey || event.metaKey;
    if (controlOrCommand) {
      const isZChar = event.key === 'z' || event.keyCode === 90;
      const isYChar = event.key === 'y' || event.keyCode === 89;
      const isEditingMarkdown =
      document && document.querySelector('.dashboard-markdown--editing');

      if (!isEditingMarkdown && (isZChar || isYChar)) {
        event.preventDefault();
        const func = isZChar ? this.props.onUndo : this.props.onRedo;
        func();
      }
    }
  }

  render() {
    return null;
  }}


UndoRedoKeyListeners.propTypes = UndoRedoKeyListeners_propTypes;

/* harmony default export */ const components_UndoRedoKeyListeners = (UndoRedoKeyListeners);
// EXTERNAL MODULE: ./src/dashboard/components/PropertiesModal/index.tsx + 1 modules
var PropertiesModal = __webpack_require__(20818);
// EXTERNAL MODULE: ./src/components/ReportModal/index.tsx + 1 modules
var ReportModal = __webpack_require__(97860);
;// CONCATENATED MODULE: ./src/types/bootstrapTypes.ts

;// CONCATENATED MODULE: ./src/dashboard/util/setPeriodicRunner.ts
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
const stopPeriodicRender = (refreshTimer) => {
  if (refreshTimer) {
    clearInterval(refreshTimer);
  }
};
function setPeriodicRunner({ interval = 0, periodicRender, refreshTimer }) {
  stopPeriodicRender(refreshTimer);
  if (interval > 0) {
    return setInterval(periodicRender, interval);
  }
  return 0;
}
;// CONCATENATED MODULE: ./src/dashboard/components/Header/index.jsx
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
/* eslint-env browser */



























const Header_propTypes = {
  addSuccessToast: (prop_types_default()).func.isRequired,
  addDangerToast: (prop_types_default()).func.isRequired,
  addWarningToast: (prop_types_default()).func.isRequired,
  user: bootstrapTypes_namespaceObject.UserWithPermissionsAndRoles,
  dashboardInfo: (prop_types_default()).object.isRequired,
  dashboardTitle: (prop_types_default()).string.isRequired,
  dataMask: (prop_types_default()).object.isRequired,
  charts: prop_types_default().objectOf(propShapes/* chartPropShape */.$6).isRequired,
  layout: (prop_types_default()).object.isRequired,
  expandedSlices: (prop_types_default()).object.isRequired,
  customCss: (prop_types_default()).string.isRequired,
  colorNamespace: (prop_types_default()).string,
  colorScheme: (prop_types_default()).string,
  setColorSchemeAndUnsavedChanges: (prop_types_default()).func.isRequired,
  isStarred: (prop_types_default()).bool.isRequired,
  isPublished: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  onSave: (prop_types_default()).func.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  fetchFaveStar: (prop_types_default()).func.isRequired,
  fetchCharts: (prop_types_default()).func.isRequired,
  fetchUISpecificReport: (prop_types_default()).func.isRequired,
  saveFaveStar: (prop_types_default()).func.isRequired,
  savePublished: (prop_types_default()).func.isRequired,
  updateDashboardTitle: (prop_types_default()).func.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  setEditMode: (prop_types_default()).func.isRequired,
  showBuilderPane: (prop_types_default()).func.isRequired,
  updateCss: (prop_types_default()).func.isRequired,
  logEvent: (prop_types_default()).func.isRequired,
  hasUnsavedChanges: (prop_types_default()).bool.isRequired,
  maxUndoHistoryExceeded: (prop_types_default()).bool.isRequired,
  lastModifiedTime: (prop_types_default()).number.isRequired,

  // redux
  onRefresh: (prop_types_default()).func.isRequired,
  onUndo: (prop_types_default()).func.isRequired,
  onRedo: (prop_types_default()).func.isRequired,
  undoLength: (prop_types_default()).number.isRequired,
  redoLength: (prop_types_default()).number.isRequired,
  setMaxUndoHistoryExceeded: (prop_types_default()).func.isRequired,
  maxUndoHistoryToast: (prop_types_default()).func.isRequired,
  refreshFrequency: (prop_types_default()).number.isRequired,
  shouldPersistRefreshFrequency: (prop_types_default()).bool.isRequired,
  setRefreshFrequency: (prop_types_default()).func.isRequired,
  dashboardInfoChanged: (prop_types_default()).func.isRequired,
  dashboardTitleChanged: (prop_types_default()).func.isRequired };


const Header_defaultProps = {
  colorNamespace: undefined,
  colorScheme: undefined };


// Styled Components
const StyledDashboardHeader = style/* styled.div */.iK.div`
  background: ${({ theme }) => theme.colors.grayscale.light5};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.gridUnit * 6}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};

  .action-button > span {
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
  button,
  .fave-unfave-icon {
    margin-left: ${({ theme }) => theme.gridUnit * 2}px;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .action-button {
      font-size: ${({ theme }) => theme.typography.sizes.xl}px;
      margin-left: ${({ theme }) => theme.gridUnit * 2.5}px;
    }
  }
`;

class Header extends react.PureComponent {
  static discardChanges() {
    const url = new (url_default())(window.location.href);

    url.searchParams.delete('edit');
    window.location.assign(url);
  }

  constructor(props) {
    super(props);
    this.state = {
      didNotifyMaxUndoHistoryToast: false,
      emphasizeUndo: false,
      showingPropertiesModal: false,
      showingReportModal: false };


    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleCtrlZ = this.handleCtrlZ.bind(this);
    this.handleCtrlY = this.handleCtrlY.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.forceRefresh = this.forceRefresh.bind(this);
    this.startPeriodicRender = this.startPeriodicRender.bind(this);
    this.overwriteDashboard = this.overwriteDashboard.bind(this);
    this.showPropertiesModal = this.showPropertiesModal.bind(this);
    this.hidePropertiesModal = this.hidePropertiesModal.bind(this);
    this.showReportModal = this.showReportModal.bind(this);
    this.hideReportModal = this.hideReportModal.bind(this);
    this.renderReportModal = this.renderReportModal.bind(this);
  }

  componentDidMount() {
    const { refreshFrequency, user, dashboardInfo } = this.props;
    this.startPeriodicRender(refreshFrequency * 1000);
    if (this.canAddReports()) {
      // this is in case there is an anonymous user.
      this.props.fetchUISpecificReport(
      user.userId,
      'dashboard_id',
      'dashboards',
      dashboardInfo.id,
      user.email);

    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { user } = this.props;
    if (
    constants/* UNDO_LIMIT */.Q9 - nextProps.undoLength <= 0 &&
    !this.state.didNotifyMaxUndoHistoryToast)
    {
      this.setState(() => ({ didNotifyMaxUndoHistoryToast: true }));
      this.props.maxUndoHistoryToast();
    }
    if (
    nextProps.undoLength > constants/* UNDO_LIMIT */.Q9 &&
    !this.props.maxUndoHistoryExceeded)
    {
      this.props.setMaxUndoHistoryExceeded();
    }
    if (
    this.canAddReports() &&
    nextProps.dashboardInfo.id !== this.props.dashboardInfo.id)
    {
      // this is in case there is an anonymous user.
      this.props.fetchUISpecificReport(
      user.userId,
      'dashboard_id',
      'dashboards',
      nextProps.dashboardInfo.id,
      user.email);

    }
  }

  componentWillUnmount() {
    stopPeriodicRender(this.refreshTimer);
    this.props.setRefreshFrequency(0);
    clearTimeout(this.ctrlYTimeout);
    clearTimeout(this.ctrlZTimeout);
  }

  handleChangeText(nextText) {
    const { updateDashboardTitle, onChange } = this.props;
    if (nextText && this.props.dashboardTitle !== nextText) {
      updateDashboardTitle(nextText);
      onChange();
    }
  }

  handleCtrlY() {
    this.props.onRedo();
    this.setState({ emphasizeRedo: true }, () => {
      if (this.ctrlYTimeout) clearTimeout(this.ctrlYTimeout);
      this.ctrlYTimeout = setTimeout(() => {
        this.setState({ emphasizeRedo: false });
      }, 100);
    });
  }

  handleCtrlZ() {
    this.props.onUndo();
    this.setState({ emphasizeUndo: true }, () => {
      if (this.ctrlZTimeout) clearTimeout(this.ctrlZTimeout);
      this.ctrlZTimeout = setTimeout(() => {
        this.setState({ emphasizeUndo: false });
      }, 100);
    });
  }

  forceRefresh() {
    if (!this.props.isLoading) {
      const chartList = Object.keys(this.props.charts);
      this.props.logEvent(LogUtils/* LOG_ACTIONS_FORCE_REFRESH_DASHBOARD */.H3, {
        force: true,
        interval: 0,
        chartCount: chartList.length });

      return this.props.onRefresh(
      chartList,
      true,
      0,
      this.props.dashboardInfo.id);

    }
    return false;
  }

  startPeriodicRender(interval) {
    let intervalMessage;
    if (interval) {
      const predefinedValue = options.find(
      (option) => option.value === interval / 1000);

      if (predefinedValue) {
        intervalMessage = predefinedValue.label;
      } else {
        intervalMessage = moment_default().duration(interval, 'millisecond').humanize();
      }
    }

    const periodicRender = () => {
      const { fetchCharts, logEvent, charts, dashboardInfo } = this.props;
      const { metadata } = dashboardInfo;
      const immune = metadata.timed_refresh_immune_slices || [];
      const affectedCharts = Object.values(charts).
      filter((chart) => immune.indexOf(chart.id) === -1).
      map((chart) => chart.id);

      logEvent(LogUtils/* LOG_ACTIONS_PERIODIC_RENDER_DASHBOARD */.S, {
        interval,
        chartCount: affectedCharts.length });

      this.props.addWarningToast(
      (0,TranslatorSingleton.t)(
      `This dashboard is currently force refreshing; the next force refresh will be in %s.`,
      intervalMessage));



      return fetchCharts(
      affectedCharts,
      true,
      interval * 0.2,
      dashboardInfo.id);

    };

    this.refreshTimer = setPeriodicRunner({
      interval,
      periodicRender,
      refreshTimer: this.refreshTimer });

  }

  toggleEditMode() {
    this.props.logEvent(LogUtils/* LOG_ACTIONS_TOGGLE_EDIT_DASHBOARD */.vH, {
      edit_mode: !this.props.editMode });

    this.props.setEditMode(!this.props.editMode);
  }

  overwriteDashboard() {var _dashboardInfo$metada, _dashboardInfo$metada2, _dashboardInfo$metada3;
    const {
      dashboardTitle,
      layout: positions,
      colorScheme,
      colorNamespace,
      customCss,
      dashboardInfo,
      refreshFrequency: currentRefreshFrequency,
      shouldPersistRefreshFrequency,
      lastModifiedTime,
      slug } =
    this.props;

    // check refresh frequency is for current session or persist
    const refreshFrequency = shouldPersistRefreshFrequency ?
    currentRefreshFrequency : (_dashboardInfo$metada =
    dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada.refresh_frequency;

    const data = {
      certified_by: dashboardInfo.certified_by,
      certification_details: dashboardInfo.certification_details,
      css: customCss,
      dashboard_title: dashboardTitle,
      last_modified_time: lastModifiedTime,
      owners: dashboardInfo.owners,
      roles: dashboardInfo.roles,
      slug,
      metadata: {
        ...(dashboardInfo == null ? void 0 : dashboardInfo.metadata),
        color_namespace:
        (dashboardInfo == null ? void 0 : (_dashboardInfo$metada2 = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada2.color_namespace) || colorNamespace,
        color_scheme: (dashboardInfo == null ? void 0 : (_dashboardInfo$metada3 = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada3.color_scheme) || colorScheme,
        positions,
        refresh_frequency: refreshFrequency } };



    // make sure positions data less than DB storage limitation:
    const positionJSONLength = (0,safeStringify/* safeStringify */.o)(positions).length;
    const limit =
    dashboardInfo.common.conf.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT ||
    constants/* DASHBOARD_POSITION_DATA_LIMIT */.Bu;
    if (positionJSONLength >= limit) {
      this.props.addDangerToast(
      (0,TranslatorSingleton.t)(
      'Your dashboard is too large. Please reduce its size before saving it.'));


    } else {
      if (positionJSONLength >= limit * 0.9) {
        this.props.addWarningToast('Your dashboard is near the size limit.');
      }

      this.props.onSave(data, dashboardInfo.id, constants/* SAVE_TYPE_OVERWRITE */.TN);
    }
  }

  showPropertiesModal() {
    this.setState({ showingPropertiesModal: true });
  }

  hidePropertiesModal() {
    this.setState({ showingPropertiesModal: false });
  }

  showReportModal() {
    this.setState({ showingReportModal: true });
  }

  hideReportModal() {
    this.setState({ showingReportModal: false });
  }

  renderReportModal() {
    const attachedReportExists = !!Object.keys(this.props.reports).length;
    return attachedReportExists ?
    (0,emotion_react_browser_esm.jsx)(HeaderReportActionsDropdown/* default */.Z, {
      showReportModal: this.showReportModal,
      toggleActive: this.props.toggleActive,
      deleteActiveReport: this.props.deleteActiveReport }) :


    (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("span", {
      role: "button",
      title: (0,TranslatorSingleton.t)('Schedule email report'),
      tabIndex: 0,
      className: "action-button",
      onClick: this.showReportModal },

    (0,emotion_react_browser_esm.jsx)(Icons/* default.Calendar */.Z.Calendar, null)));



  }

  canAddReports() {
    if (!(0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.ALERT_REPORTS */.T.ALERT_REPORTS)) {
      return false;
    }
    const { user } = this.props;
    if (!user) {
      // this is in the case that there is an anonymous user.
      return false;
    }
    const roles = Object.keys(user.roles || []);
    const permissions = roles.map((key) =>
    user.roles[key].filter(
    (perms) => perms[0] === 'menu_access' && perms[1] === 'Manage'));


    return permissions[0].length > 0;
  }

  render() {
    const {
      dashboardTitle,
      layout,
      expandedSlices,
      customCss,
      colorNamespace,
      dataMask,
      setColorSchemeAndUnsavedChanges,
      colorScheme,
      onUndo,
      onRedo,
      undoLength,
      redoLength,
      onChange,
      onSave,
      updateCss,
      editMode,
      isPublished,
      user,
      dashboardInfo,
      hasUnsavedChanges,
      isLoading,
      refreshFrequency,
      shouldPersistRefreshFrequency,
      setRefreshFrequency,
      lastModifiedTime } =
    this.props;
    const userCanEdit = dashboardInfo.dash_edit_perm;
    const userCanShare = dashboardInfo.dash_share_perm;
    const userCanSaveAs = dashboardInfo.dash_save_perm;
    const shouldShowReport = !editMode && this.canAddReports();
    const refreshLimit =
    dashboardInfo.common.conf.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT;
    const refreshWarning =
    dashboardInfo.common.conf.
    SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE;

    const handleOnPropertiesChange = (updates) => {
      const { dashboardInfoChanged, dashboardTitleChanged } = this.props;
      dashboardInfoChanged({
        slug: updates.slug,
        metadata: JSON.parse(updates.jsonMetadata || '{}'),
        certified_by: updates.certifiedBy,
        certification_details: updates.certificationDetails,
        owners: updates.owners,
        roles: updates.roles });

      setColorSchemeAndUnsavedChanges(updates.colorScheme);
      dashboardTitleChanged(updates.title);
    };

    return (
      (0,emotion_react_browser_esm.jsx)(StyledDashboardHeader, {
        className: "dashboard-header",

        "data-test-id": `${dashboardInfo.id}` },

      (0,emotion_react_browser_esm.jsx)("div", { className: "dashboard-component-header header-large" },
      dashboardInfo.certified_by &&
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(CertifiedIcon/* default */.Z, {
        certifiedBy: dashboardInfo.certified_by,
        details: dashboardInfo.certification_details }),
      ' '),


      (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, {
        title: dashboardTitle,
        canEdit: userCanEdit && editMode,
        onSaveTitle: this.handleChangeText,
        showTooltip: false }),

      (0,emotion_react_browser_esm.jsx)(PublishedStatus, {
        dashboardId: dashboardInfo.id,
        isPublished: isPublished,
        savePublished: this.props.savePublished,
        canEdit: userCanEdit,
        canSave: userCanSaveAs }),

      (user == null ? void 0 : user.userId) &&
      (0,emotion_react_browser_esm.jsx)(FaveStar/* default */.Z, {
        itemId: dashboardInfo.id,
        fetchFaveStar: this.props.fetchFaveStar,
        saveFaveStar: this.props.saveFaveStar,
        isStarred: this.props.isStarred,
        showTooltip: true })),




      (0,emotion_react_browser_esm.jsx)("div", { className: "button-container" },
      userCanSaveAs &&
      (0,emotion_react_browser_esm.jsx)("div", {
        className: "button-container" },


      editMode &&
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(ButtonGroup/* default */.Z, { className: "m-r-5" },
      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        onClick: onUndo,
        disabled: undoLength < 1,
        buttonStyle:
        this.state.emphasizeUndo ? 'primary' : undefined,

        showMarginRight: false },

      (0,emotion_react_browser_esm.jsx)("i", {
        title: "Undo",
        className: "undo-action fa fa-reply" }), "\xA0"),




      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        onClick: onRedo,
        disabled: redoLength < 1,
        buttonStyle:
        this.state.emphasizeRedo ? 'primary' : undefined,

        showMarginRight: false }, "\xA0",


      (0,emotion_react_browser_esm.jsx)("i", { title: "Redo", className: "redo-action fa fa-share" }))),


      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        className: "m-r-5",
        onClick: this.constructor.discardChanges,
        buttonStyle: "default" },


      (0,TranslatorSingleton.t)('Discard changes')),

      (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, {
        buttonSize: "small",
        disabled: !hasUnsavedChanges,
        buttonStyle: "primary",
        onClick: this.overwriteDashboard },


      (0,TranslatorSingleton.t)('Save')))),





      editMode &&
      (0,emotion_react_browser_esm.jsx)(components_UndoRedoKeyListeners, {
        onUndo: this.handleCtrlZ,
        onRedo: this.handleCtrlY }),



      !editMode && userCanEdit &&
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)("span", {
        role: "button",
        title: (0,TranslatorSingleton.t)('Edit dashboard'),
        tabIndex: 0,
        className: "action-button",
        onClick: this.toggleEditMode },

      (0,emotion_react_browser_esm.jsx)(Icons/* default.EditAlt */.Z.EditAlt, null))),



      shouldShowReport && this.renderReportModal(),

      (0,emotion_react_browser_esm.jsx)(PropertiesModal/* default */.Z, {
        dashboardId: dashboardInfo.id,
        dashboardInfo: dashboardInfo,
        dashboardTitle: dashboardTitle,
        show: this.state.showingPropertiesModal,
        onHide: this.hidePropertiesModal,
        colorScheme: this.props.colorScheme,
        onSubmit: handleOnPropertiesChange,
        onlyApply: true }),


      this.state.showingReportModal &&
      (0,emotion_react_browser_esm.jsx)(ReportModal/* default */.Z, {
        show: this.state.showingReportModal,
        onHide: this.hideReportModal,
        props: {
          userId: user.userId,
          userEmail: user.email,
          dashboardId: dashboardInfo.id,
          creationMethod: 'dashboards' } }),




      (0,emotion_react_browser_esm.jsx)(Header_HeaderActionsDropdown, {
        addSuccessToast: this.props.addSuccessToast,
        addDangerToast: this.props.addDangerToast,
        dashboardId: dashboardInfo.id,
        dashboardTitle: dashboardTitle,
        dashboardInfo: dashboardInfo,
        dataMask: dataMask,
        layout: layout,
        expandedSlices: expandedSlices,
        customCss: customCss,
        colorNamespace: colorNamespace,
        colorScheme: colorScheme,
        onSave: onSave,
        onChange: onChange,
        forceRefreshAllCharts: this.forceRefresh,
        startPeriodicRender: this.startPeriodicRender,
        refreshFrequency: refreshFrequency,
        shouldPersistRefreshFrequency: shouldPersistRefreshFrequency,
        setRefreshFrequency: setRefreshFrequency,
        updateCss: updateCss,
        editMode: editMode,
        hasUnsavedChanges: hasUnsavedChanges,
        userCanEdit: userCanEdit,
        userCanShare: userCanShare,
        userCanSave: userCanSaveAs,
        isLoading: isLoading,
        showPropertiesModal: this.showPropertiesModal,
        refreshLimit: refreshLimit,
        refreshWarning: refreshWarning,
        lastModifiedTime: lastModifiedTime }))));




  }}


Header.propTypes = Header_propTypes;
Header.defaultProps = Header_defaultProps;

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./src/dashboard/util/isDashboardLoading.js
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
function isDashboardLoading(charts) {
  return Object.values(charts).some(
  (chart) => chart.chartUpdateStartTime > (chart.chartUpdateEndTime || 0));

}
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardInfo.ts
var dashboardInfo = __webpack_require__(41295);
// EXTERNAL MODULE: ./src/dashboard/actions/dashboardLayout.js + 2 modules
var actions_dashboardLayout = __webpack_require__(40701);
// EXTERNAL MODULE: ./src/components/MessageToasts/actions.ts
var MessageToasts_actions = __webpack_require__(72570);
// EXTERNAL MODULE: ./src/logger/actions/index.ts
var logger_actions = __webpack_require__(97381);
// EXTERNAL MODULE: ./src/reports/actions/reports.js
var reports = __webpack_require__(61358);
;// CONCATENATED MODULE: ./src/dashboard/containers/DashboardHeader.jsx
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


















function DashboardHeader_mapStateToProps({
  dashboardLayout: undoableLayout,
  dashboardState,
  reports,
  dashboardInfo,
  charts,
  dataMask,
  user })
{
  return {
    dashboardInfo,
    undoLength: undoableLayout.past.length,
    redoLength: undoableLayout.future.length,
    layout: undoableLayout.present,
    dashboardTitle: (
    (undoableLayout.present[constants/* DASHBOARD_HEADER_ID */.M2] || {}).meta || {}).
    text,
    expandedSlices: dashboardState.expandedSlices,
    refreshFrequency: dashboardState.refreshFrequency,
    shouldPersistRefreshFrequency: !!dashboardState.shouldPersistRefreshFrequency,
    customCss: dashboardState.css,
    colorNamespace: dashboardState.colorNamespace,
    colorScheme: dashboardState.colorScheme,
    charts,
    dataMask,
    user,
    isStarred: !!dashboardState.isStarred,
    isPublished: !!dashboardState.isPublished,
    isLoading: isDashboardLoading(charts),
    hasUnsavedChanges: !!dashboardState.hasUnsavedChanges,
    maxUndoHistoryExceeded: !!dashboardState.maxUndoHistoryExceeded,
    lastModifiedTime: Math.max(
    dashboardState.lastModifiedTime,
    dashboardInfo.last_modified_time),

    editMode: !!dashboardState.editMode,
    slug: dashboardInfo.slug,
    metadata: dashboardInfo.metadata,
    reports };

}

function DashboardHeader_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    addSuccessToast: MessageToasts_actions/* addSuccessToast */.ws,
    addDangerToast: MessageToasts_actions/* addDangerToast */.Gb,
    addWarningToast: MessageToasts_actions/* addWarningToast */.Dz,
    onUndo: actions_dashboardLayout/* undoLayoutAction */.Ou,
    onRedo: actions_dashboardLayout/* redoLayoutAction */.az,
    setEditMode: dashboardState/* setEditMode */.Mb,
    showBuilderPane: dashboardState/* showBuilderPane */.O8,
    setColorSchemeAndUnsavedChanges: dashboardState/* setColorSchemeAndUnsavedChanges */.ps,
    fetchFaveStar: dashboardState/* fetchFaveStar */.Lb,
    saveFaveStar: dashboardState/* saveFaveStar */.TN,
    savePublished: dashboardState/* savePublished */.dr,
    fetchCharts: dashboardState/* fetchCharts */.Mn,
    updateDashboardTitle: actions_dashboardLayout/* updateDashboardTitle */.A7,
    updateCss: dashboardState/* updateCss */.Sn,
    onChange: dashboardState/* onChange */.z2,
    onSave: dashboardState/* saveDashboardRequest */.M8,
    setMaxUndoHistoryExceeded: dashboardState/* setMaxUndoHistoryExceeded */.uN,
    maxUndoHistoryToast: dashboardState/* maxUndoHistoryToast */.Qt,
    logEvent: logger_actions.logEvent,
    setRefreshFrequency: dashboardState/* setRefreshFrequency */.sL,
    onRefresh: dashboardState/* onRefresh */.Yy,
    dashboardInfoChanged: dashboardInfo/* dashboardInfoChanged */.a8,
    dashboardTitleChanged: actions_dashboardLayout/* dashboardTitleChanged */.Ww,
    updateDataMask: actions/* updateDataMask */.eG,
    fetchUISpecificReport: reports/* fetchUISpecificReport */.Aw,
    toggleActive: reports/* toggleActive */.M,
    deleteActiveReport: reports/* deleteActiveReport */.MZ },

  dispatch);

}

/* harmony default export */ const DashboardHeader = ((0,es/* connect */.$j)(DashboardHeader_mapStateToProps, DashboardHeader_mapDispatchToProps)(components_Header));
;// CONCATENATED MODULE: ./src/dashboard/components/IconButton.tsx
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


const StyledDiv = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayscale.base};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;
const StyledSpan = style/* styled.span */.iK.span`
  margin-left: ${({ theme }) => theme.gridUnit * 2}px;
`;
const IconButton = ({ icon, label, onClick }) => (0,emotion_react_browser_esm.jsx)(StyledDiv, { tabIndex: 0, role: "button", onClick: (e) => {
    e.preventDefault();
    onClick(e);
  } },
icon,
label && (0,emotion_react_browser_esm.jsx)(StyledSpan, null, label));

/* harmony default export */ const components_IconButton = (IconButton);
// EXTERNAL MODULE: ./src/chart/chartAction.js
var chartAction = __webpack_require__(22428);
// EXTERNAL MODULE: ./src/dashboard/components/nativeFilters/utils.ts
var utils = __webpack_require__(1510);
// EXTERNAL MODULE: ./src/reduxUtils.ts
var reduxUtils = __webpack_require__(99543);
;// CONCATENATED MODULE: ./src/dashboard/util/charts/getEffectiveExtraFilters.ts
function getEffectiveExtraFilters(filters) {
  return Object.entries(filters).
  map(([column, values]) => ({
    col: column,
    op: Array.isArray(values) ? 'IN' : '==',
    val: values })).

  filter((filter) => filter.val !== null);
}
;// CONCATENATED MODULE: ./src/dashboard/util/activeAllDashboardFilters.ts


// Looking for affected chart scopes and values
const findAffectedCharts = ({ child, layout, scope, activeFilters, filterId, extraFormData }) => {var _layout$child, _layout$child$meta;
  const chartId = (_layout$child = layout[child]) == null ? void 0 : (_layout$child$meta = _layout$child.meta) == null ? void 0 : _layout$child$meta.chartId;
  if (layout[child].type === componentTypes/* CHART_TYPE */.dW) {
    // Ignore excluded charts
    if (scope.excluded.includes(chartId)) {
      return;
    }
    if (!activeFilters[filterId]) {
      // Small mutation but simplify logic
      // eslint-disable-next-line no-param-reassign
      activeFilters[filterId] = {
        scope: [],
        values: extraFormData };

    }
    // Add not excluded chart scopes(to know what charts refresh) and values(refresh only if its value changed)
    activeFilters[filterId].scope.push(chartId);
    return;
  }
  // If child is not chart, recursive iterate over its children
  layout[child].children.forEach((child) => findAffectedCharts({
    child,
    layout,
    scope,
    activeFilters,
    filterId,
    extraFormData }));

};
const getRelevantDataMask = (dataMask, prop) => Object.values(dataMask).
filter((item) => item[prop]).
reduce((prev, next) => ({ ...prev, [next.id]: prop ? next[prop] : next }), {});
const getAllActiveFilters = ({ chartConfiguration, nativeFilters, dataMask, layout }) => {
  const activeFilters = {};
  // Combine native filters with cross filters, because they have similar logic
  Object.values(dataMask).forEach(({ id: filterId, extraFormData }) => {var _ref, _nativeFilters$filter, _nativeFilters$filter2, _chartConfiguration$f, _chartConfiguration$f2;
    const scope = (_ref = (_nativeFilters$filter = nativeFilters == null ? void 0 : (_nativeFilters$filter2 = nativeFilters[filterId]) == null ? void 0 : _nativeFilters$filter2.scope) != null ? _nativeFilters$filter :
    chartConfiguration == null ? void 0 : (_chartConfiguration$f = chartConfiguration[filterId]) == null ? void 0 : (_chartConfiguration$f2 = _chartConfiguration$f.crossFilters) == null ? void 0 : _chartConfiguration$f2.scope) != null ? _ref : {
      rootPath: [constants/* DASHBOARD_ROOT_ID */._4],
      excluded: [filterId] };

    // Iterate over all roots to find all affected charts
    scope.rootPath.forEach((layoutItemId) => {var _layout$layoutItemId, _layout$layoutItemId$;
      (_layout$layoutItemId = layout[layoutItemId]) == null ? void 0 : (_layout$layoutItemId$ = _layout$layoutItemId.children) == null ? void 0 : _layout$layoutItemId$.forEach((child) => {
        // Need exclude from affected charts, charts that located in scope `excluded`
        findAffectedCharts({
          child,
          layout,
          scope,
          activeFilters,
          filterId,
          extraFormData });

      });
    });
  });
  return activeFilters;
};
;// CONCATENATED MODULE: ./src/dashboard/util/charts/getFormDataWithExtraFilters.ts




// We cache formData objects so that our connected container components don't always trigger
// render cascades. we cannot leverage the reselect library because our cache size is >1
const cachedFiltersByChart = {};
const cachedFormdataByChart = {};
// this function merge chart's formData with dashboard filters value,
// and generate a new formData which will be used in the new query.
// filters param only contains those applicable to this chart.
function getFormDataWithExtraFilters({ chart, charts, filters, nativeFilters, chartConfiguration, colorScheme, colorNamespace, sliceId, layout, dataMask, labelColors }) {
  // if dashboard metadata + filters have not changed, use cache if possible
  const cachedFormData = cachedFormdataByChart[sliceId];
  if (cachedFiltersByChart[sliceId] === filters &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFormData == null ? void 0 : cachedFormData.color_scheme, colorScheme, {
    ignoreUndefined: true }) &&

  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFormData == null ? void 0 : cachedFormData.color_namespace, colorNamespace, {
    ignoreUndefined: true }) &&

  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFormData == null ? void 0 : cachedFormData.label_colors, labelColors, {
    ignoreUndefined: true }) &&

  !!cachedFormData &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFormData == null ? void 0 : cachedFormData.dataMask, dataMask, {
    ignoreUndefined: true }))
  {
    return cachedFormData;
  }
  let extraData = {};
  const activeFilters = getAllActiveFilters({
    chartConfiguration,
    dataMask,
    layout,
    nativeFilters: nativeFilters.filters });

  const filterIdsAppliedOnChart = Object.entries(activeFilters).
  filter(([, { scope }]) => scope.includes(chart.id)).
  map(([filterId]) => filterId);
  if (filterIdsAppliedOnChart.length) {
    extraData = {
      extra_form_data: (0,utils/* getExtraFormData */.vk)(dataMask, charts, filterIdsAppliedOnChart) };

  }
  const formData = {
    ...chart.formData,
    label_colors: labelColors,
    ...(colorScheme && { color_scheme: colorScheme }),
    extra_filters: getEffectiveExtraFilters(filters),
    ...extraData };

  cachedFiltersByChart[sliceId] = filters;
  cachedFormdataByChart[sliceId] = { ...formData, dataMask };
  return formData;
}
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./src/explore/exploreUtils/index.js
var exploreUtils = __webpack_require__(12515);
// EXTERNAL MODULE: ./src/chart/ChartContainer.jsx + 3 modules
var ChartContainer = __webpack_require__(5144);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartMetadataRegistrySingleton.js
var ChartMetadataRegistrySingleton = __webpack_require__(38849);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/types/Base.js
var Base = __webpack_require__(52686);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/common/hooks/useComponentDidUpdate/useComponentDidUpdate.ts
var useComponentDidUpdate = __webpack_require__(83601);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/FilterScope/types.ts
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
var ScopingType;
(function (ScopingType) {
  ScopingType[ScopingType["all"] = 0] = "all";
  ScopingType[ScopingType["specific"] = 1] = "specific";
})(ScopingType || (ScopingType = {}));
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/FilterScope/utils.ts



const isShowTypeInTree = ({ type, meta }, charts) => {var _charts$meta$chartId, _charts$meta$chartId$;return (type === componentTypes/* TAB_TYPE */.gn || type === componentTypes/* CHART_TYPE */.dW || type === componentTypes/* DASHBOARD_ROOT_TYPE */.U0) && (
  !charts || ((_charts$meta$chartId = charts[meta == null ? void 0 : meta.chartId]) == null ? void 0 : (_charts$meta$chartId$ = _charts$meta$chartId.formData) == null ? void 0 : _charts$meta$chartId$.viz_type) !== 'filter_box');};
const buildTree = (node, treeItem, layout, charts, validNodes, initiallyExcludedCharts, buildTreeLeafTitle) => {
  let itemToPass = treeItem;
  if (isShowTypeInTree(node, charts) &&
  node.type !== componentTypes/* DASHBOARD_ROOT_TYPE */.U0 &&
  validNodes.includes(node.id)) {var _node$meta;
    const title = buildTreeLeafTitle(node.meta.sliceNameOverride ||
    node.meta.sliceName ||
    node.meta.text ||
    node.meta.defaultText ||
    node.id.toString(), initiallyExcludedCharts.includes((_node$meta = node.meta) == null ? void 0 : _node$meta.chartId), (0,TranslatorSingleton.t)("This chart might be incompatible with the filter (datasets don't match)"));
    const currentTreeItem = {
      key: node.id,
      title,
      children: [] };

    treeItem.children.push(currentTreeItem);
    itemToPass = currentTreeItem;
  }
  node.children.forEach((child) => buildTree(layout[child], itemToPass, layout, charts, validNodes, initiallyExcludedCharts, buildTreeLeafTitle));
};
const addInvisibleParents = (layout, item) => {var _layout$item;return [
  ...(((_layout$item = layout[item]) == null ? void 0 : _layout$item.children) || []),
  ...Object.values(layout).
  filter((val) => val.parents &&
  val.parents[val.parents.length - 1] === item &&
  !isShowTypeInTree(layout[val.parents[val.parents.length - 1]])).
  map(({ id }) => id)];};

// Generate checked options for Ant tree from redux scope
const checkTreeItem = (checkedItems, layout, items, excluded) => {
  items.forEach((item) => {var _layout$item2, _layout$item3;
    checkTreeItem(checkedItems, layout, addInvisibleParents(layout, item), excluded);
    if (((_layout$item2 = layout[item]) == null ? void 0 : _layout$item2.type) === componentTypes/* CHART_TYPE */.dW &&
    !excluded.includes((_layout$item3 = layout[item]) == null ? void 0 : _layout$item3.meta.chartId)) {
      checkedItems.push(item);
    }
  });
};
const getTreeCheckedItems = (scope, layout) => {
  const checkedItems = [];
  checkTreeItem(checkedItems, layout, [...scope.rootPath], [...scope.excluded]);
  return [...new Set(checkedItems)];
};
// Looking for first common parent for selected charts/tabs/tab
const findFilterScope = (checkedKeys, layout) => {
  if (!checkedKeys.length) {
    return {
      rootPath: [],
      excluded: [] };

  }
  // Get arrays of parents for selected charts
  const checkedItemParents = checkedKeys.
  filter((item) => {var _layout$item4;return ((_layout$item4 = layout[item]) == null ? void 0 : _layout$item4.type) === componentTypes/* CHART_TYPE */.dW;}).
  map((key) => {var _layout$key;
    const parents = [constants/* DASHBOARD_ROOT_ID */._4, ...(((_layout$key = layout[key]) == null ? void 0 : _layout$key.parents) || [])];
    return parents.filter((parent) => isShowTypeInTree(layout[parent]));
  });
  // Sort arrays of parents to get first shortest array of parents,
  // that means on it's level of parents located common parent, from this place parents start be different
  checkedItemParents.sort((p1, p2) => p1.length - p2.length);
  const rootPath = checkedItemParents.map((parents) => parents[checkedItemParents[0].length - 1]);
  const excluded = [];
  const isExcluded = (parent, item) => rootPath.includes(parent) && !checkedKeys.includes(item);
  // looking for charts to be excluded: iterate over all charts
  // and looking for charts that have one of their parents in `rootPath` and not in selected items
  Object.entries(layout).forEach(([key, value]) => {var _ref;
    const parents = value.parents || [];
    if (value.type === componentTypes/* CHART_TYPE */.dW && (_ref =
    [constants/* DASHBOARD_ROOT_ID */._4, ...parents]) != null && _ref.find((parent) => isExcluded(parent, key))) {
      excluded.push(value.meta.chartId);
    }
  });
  return {
    rootPath: [...new Set(rootPath)],
    excluded };

};
const getDefaultScopeValue = (chartId, initiallyExcludedCharts = []) => ({
  rootPath: [constants/* DASHBOARD_ROOT_ID */._4],
  excluded: chartId ?
  [chartId, ...initiallyExcludedCharts] :
  initiallyExcludedCharts });

const isScopingAll = (scope, chartId) => !scope ||
scope.rootPath[0] === constants/* DASHBOARD_ROOT_ID */._4 &&
!scope.excluded.filter((item) => item !== chartId).length;
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/FilterScope/state.ts
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






// eslint-disable-next-line import/prefer-default-export
function useFilterScopeTree(currentChartId, initiallyExcludedCharts = [], buildTreeLeafTitle = (label) => label) {
  const layout = (0,es/* useSelector */.v9)(({ dashboardLayout: { present } }) => present);
  const charts = (0,es/* useSelector */.v9)(({ charts }) => charts);
  const tree = {
    children: [],
    key: constants/* DASHBOARD_ROOT_ID */._4,
    type: componentTypes/* DASHBOARD_ROOT_TYPE */.U0,
    title: (0,TranslatorSingleton.t)('All panels') };

  // We need to get only nodes that have charts as children or grandchildren
  const validNodes = (0,react.useMemo)(() => Object.values(layout).reduce((acc, cur) => {
    const { id, parents = [], type, meta } = cur;
    if (type === componentTypes/* CHART_TYPE */.dW && currentChartId !== (meta == null ? void 0 : meta.chartId)) {
      return [...new Set([...acc, ...parents, id])];
    }
    return acc;
  }, []), [layout, currentChartId]);
  (0,react.useMemo)(() => {
    buildTree(layout[constants/* DASHBOARD_ROOT_ID */._4], tree, layout, charts, validNodes, initiallyExcludedCharts, buildTreeLeafTitle);
  }, [layout, tree, charts, initiallyExcludedCharts, buildTreeLeafTitle]);
  return { treeData: [tree], layout };
}
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/FilterScope/ScopingTree.tsx
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







const buildTreeLeafTitle = (label, hasTooltip, tooltipTitle) => {
  let title = (0,emotion_react_browser_esm.jsx)("span", null, label);
  if (hasTooltip) {
    title = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    title, "\xA0",
    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: tooltipTitle },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.Info */.Z.Info, { iconSize: "m" })));


  }
  return title;
};
const ScopingTree = ({ formScope, initialScope, forceUpdate, updateFormValues, chartId, initiallyExcludedCharts = [] }) => {
  const [expandedKeys, setExpandedKeys] = (0,react.useState)([
  constants/* DASHBOARD_ROOT_ID */._4]);

  const { treeData, layout } = useFilterScopeTree(chartId, initiallyExcludedCharts, buildTreeLeafTitle);
  const [autoExpandParent, setAutoExpandParent] = (0,react.useState)(true);
  const handleExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };
  const handleCheck = (checkedKeys) => {
    forceUpdate();
    const scope = findFilterScope(checkedKeys, layout);
    if (chartId !== undefined) {
      scope.excluded = [...new Set([...scope.excluded, chartId])];
    }
    updateFormValues({
      scope });

  };
  const checkedKeys = (0,react.useMemo)(() => getTreeCheckedItems({ ...(formScope || initialScope) }, layout), [formScope, initialScope, layout]);
  return (0,emotion_react_browser_esm.jsx)(components/* Tree */.mp, { checkable: true, selectable: false, onExpand: handleExpand, expandedKeys: expandedKeys, autoExpandParent: autoExpandParent, onCheck: handleCheck, checkedKeys: checkedKeys, treeData: treeData });
};
/* harmony default export */ const FilterScope_ScopingTree = (ScopingTree);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/FilterScope/FilterScope.tsx
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








const Wrapper = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${({ theme }) => theme.gridUnit}px;
  }
`;
const CleanFormItem = (0,style/* styled */.iK)(components/* Form.Item */.l0.Item)`
  margin-bottom: 0;
`;
const FilterScope_FilterScope = ({ pathToFormValue = [], formScopingType, formFilterScope, forceUpdate, filterScope, updateFormValues, chartId, initiallyExcludedCharts }) => {
  const [initialFilterScope] = (0,react.useState)(filterScope || getDefaultScopeValue(chartId, initiallyExcludedCharts));
  const [initialScopingType] = (0,react.useState)(isScopingAll(initialFilterScope, chartId) ?
  ScopingType.all :
  ScopingType.specific);
  const [hasScopeBeenModified, setHasScopeBeenModified] = (0,react.useState)(!!filterScope);
  const onUpdateFormValues = (0,react.useCallback)((formValues) => {
    updateFormValues(formValues);
    setHasScopeBeenModified(true);
  }, [updateFormValues]);
  const updateScopes = (0,react.useCallback)(() => {
    if (filterScope || hasScopeBeenModified) {
      return;
    }
    const newScope = getDefaultScopeValue(chartId, initiallyExcludedCharts);
    updateFormValues({
      scope: newScope,
      scoping: isScopingAll(newScope, chartId) ?
      ScopingType.all :
      ScopingType.specific });

  }, [
  chartId,
  filterScope,
  hasScopeBeenModified,
  initiallyExcludedCharts,
  updateFormValues]);

  (0,useComponentDidUpdate/* useComponentDidUpdate */.d)(updateScopes);
  return (0,emotion_react_browser_esm.jsx)(Wrapper, null,
  (0,emotion_react_browser_esm.jsx)(CleanFormItem, { name: [...pathToFormValue, 'scoping'], initialValue: initialScopingType },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { onChange: ({ target: { value } }) => {
      if (value === ScopingType.all) {
        const scope = getDefaultScopeValue(chartId);
        updateFormValues({
          scope });

      }
      setHasScopeBeenModified(true);
      forceUpdate();
    } },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: ScopingType.all }, (0,TranslatorSingleton.t)('Apply to all panels')),
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: ScopingType.specific },
  (0,TranslatorSingleton.t)('Apply to specific panels')))),



  (0,emotion_react_browser_esm.jsx)(components/* Typography.Text */.ZT.Text, { type: "secondary" },
  (formScopingType != null ? formScopingType : initialScopingType) === ScopingType.specific ?
  (0,TranslatorSingleton.t)('Only selected panels will be affected by this filter') :
  (0,TranslatorSingleton.t)('All panels with this column will be affected by this filter')),

  (formScopingType != null ? formScopingType : initialScopingType) === ScopingType.specific && (0,emotion_react_browser_esm.jsx)(FilterScope_ScopingTree, { updateFormValues: onUpdateFormValues, initialScope: initialFilterScope, formScope: formFilterScope, forceUpdate: forceUpdate, chartId: chartId, initiallyExcludedCharts: initiallyExcludedCharts }),
  (0,emotion_react_browser_esm.jsx)(CleanFormItem, { name: [...pathToFormValue, 'scope'], hidden: true, initialValue: initialFilterScope }));

};
/* harmony default export */ const FiltersConfigForm_FilterScope_FilterScope = (FilterScope_FilterScope);
;// CONCATENATED MODULE: ./src/dashboard/components/CrossFilterScopingModal/utils/index.ts
// eslint-disable-next-line import/prefer-default-export
const setCrossFilterFieldValues = (form, values) => {
  form.setFieldsValue({
    ...values });

};
// EXTERNAL MODULE: ./node_modules/lodash/flatMapDeep.js
var flatMapDeep = __webpack_require__(10752);
var flatMapDeep_default = /*#__PURE__*/__webpack_require__.n(flatMapDeep);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js
var QueryResponse = __webpack_require__(23274);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js
var ensureIsArray = __webpack_require__(86852);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/utils.ts





















const FILTERS_FIELD_NAME = 'filters';
const FILTER_SUPPORTED_TYPES = {
  filter_time: [QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL],
  filter_timegrain: [QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL],
  filter_timecolumn: [QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL],
  filter_select: [
  QueryResponse/* GenericDataType.BOOLEAN */.Z.BOOLEAN,
  QueryResponse/* GenericDataType.STRING */.Z.STRING,
  QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC,
  QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL],

  filter_range: [QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC] };

const useForceUpdate = () => {
  const [, updateState] = react.useState({});
  return react.useCallback(() => updateState({}), []);
};
const setNativeFilterFieldValues = (form, filterId, values) => {
  const formFilters = form.getFieldValue(FILTERS_FIELD_NAME) || {};
  form.setFields([
  {
    name: FILTERS_FIELD_NAME,
    value: {
      ...formFilters,
      [filterId]: {
        ...formFilters[filterId],
        ...values } } }]);




};
const getControlItems = (controlConfig = {}) => {var _flatMapDeep$reduce, _flatMapDeep2;return (_flatMapDeep$reduce = (_flatMapDeep2 = flatMapDeep_default()(controlConfig.controlPanelSections)) == null ? void 0 : _flatMapDeep2.reduce((acc, { controlSetRows = [] }) => [
  ...acc,
  ...flatMapDeep_default()(controlSetRows)],
  [])) != null ? _flatMapDeep$reduce : [];};
const datasetToSelectOption = (item) => ({
  value: item.id,
  label: item.table_name });

// TODO: add column_types field to DatasourceMeta
// We return true if column_types is undefined or empty as a precaution against backend failing to return column_types
const hasTemporalColumns = (dataset) => {
  const columnTypes = (0,ensureIsArray/* default */.Z)(dataset == null ? void 0 : dataset.column_types);
  return columnTypes.length === 0 || columnTypes.includes(QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL);
};
const doesColumnMatchFilterType = (filterType, column) => {var _FILTER_SUPPORTED_TYP;return !column.type_generic ||
  !(filterType in FILTER_SUPPORTED_TYPES) || ((_FILTER_SUPPORTED_TYP =
  FILTER_SUPPORTED_TYPES[filterType]) == null ? void 0 : _FILTER_SUPPORTED_TYP.includes(column.type_generic));};
const mostUsedDataset = (datasets, charts) => {var _datasets$mostUsedDat;
  const map = new Map();
  let mostUsedDataset = '';
  let maxCount = 0;
  Object.values(charts).forEach((chart) => {
    const { formData } = chart;
    if (formData) {
      const { datasource } = formData;
      const count = (map.get(datasource) || 0) + 1;
      map.set(datasource, count);
      if (count > maxCount) {
        maxCount = count;
        mostUsedDataset = datasource;
      }
    }
  });
  return (_datasets$mostUsedDat = datasets[mostUsedDataset]) == null ? void 0 : _datasets$mostUsedDat.id;
};
;// CONCATENATED MODULE: ./src/dashboard/components/CrossFilterScopingModal/CrossFilterScopingForm/index.tsx
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




const CrossFilterScopingForm = ({ form, scope, chartId }) => {
  const forceUpdate = useForceUpdate();
  const formScope = form.getFieldValue('scope');
  const formScoping = form.getFieldValue('scoping');
  return (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_FilterScope_FilterScope, { updateFormValues: (values) => {
      setCrossFilterFieldValues(form, {
        ...values });

    }, filterScope: scope, chartId: chartId, formFilterScope: formScope, forceUpdate: forceUpdate, formScopingType: formScoping });
};
/* harmony default export */ const CrossFilterScopingModal_CrossFilterScopingForm = (CrossFilterScopingForm);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(44908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/components/constants.js
var components_constants = __webpack_require__(16918);
// EXTERNAL MODULE: ./src/utils/testUtils.ts
var testUtils = __webpack_require__(53350);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/state.ts
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



const defaultFilterConfiguration = [];
function useFilterConfiguration() {
  return (0,es/* useSelector */.v9)((state) => {var _state$dashboardInfo, _state$dashboardInfo$;return ((_state$dashboardInfo = state.dashboardInfo) == null ? void 0 : (_state$dashboardInfo$ = _state$dashboardInfo.metadata) == null ? void 0 : _state$dashboardInfo$.native_filter_configuration) ||
    defaultFilterConfiguration;});
}
/**
 * returns the dashboard's filter configuration,
 * converted into a map of id -> filter
 */
function useFilterConfigMap() {
  const filterConfig = useFilterConfiguration();
  return (0,react.useMemo)(() => filterConfig.reduce((acc, filter) => {
    acc[filter.id] = filter;
    return acc;
  }, {}), [filterConfig]);
}
function useDashboardLayout() {
  return (0,es/* useSelector */.v9)((state) => {var _state$dashboardLayou;return (_state$dashboardLayou = state.dashboardLayout) == null ? void 0 : _state$dashboardLayou.present;});
}
function useDashboardHasTabs() {
  const dashboardLayout = useDashboardLayout();
  return (0,react.useMemo)(() => Object.values(dashboardLayout).some((element) => element.type === componentTypes/* TAB_TYPE */.gn), [dashboardLayout]);
}
function useActiveDashboardTabs() {
  return (0,es/* useSelector */.v9)((state) => {var _state$dashboardState;return (_state$dashboardState = state.dashboardState) == null ? void 0 : _state$dashboardState.activeTabs;});
}
function useSelectChartTabParents() {
  const dashboardLayout = useDashboardLayout();
  return (chartId) => {
    const chartLayoutItem = Object.values(dashboardLayout).find((layoutItem) => {var _layoutItem$meta;return ((_layoutItem$meta = layoutItem.meta) == null ? void 0 : _layoutItem$meta.chartId) === chartId;});
    return chartLayoutItem == null ? void 0 : chartLayoutItem.parents.filter((parent) => dashboardLayout[parent].type === componentTypes/* TAB_TYPE */.gn);
  };
}
function useIsFilterInScope() {
  const activeTabs = useActiveDashboardTabs();
  const selectChartTabParents = useSelectChartTabParents();
  // Filter is in scope if any of it's charts is visible.
  // Chart is visible if it's placed in an active tab tree or if it's not attached to any tab.
  // Chart is in an active tab tree if all of it's ancestors of type TAB are active
  return (filter) => {var _filter$chartsInScope;return (_filter$chartsInScope = filter.chartsInScope) == null ? void 0 : _filter$chartsInScope.some((chartId) => {
      const tabParents = selectChartTabParents(chartId);
      return (tabParents == null ? void 0 : tabParents.length) === 0 || (
      tabParents == null ? void 0 : tabParents.every((tab) => activeTabs.includes(tab)));
    });};
}
function useSelectFiltersInScope(cascadeFilters) {
  const dashboardHasTabs = useDashboardHasTabs();
  const isFilterInScope = useIsFilterInScope();
  return (0,react.useMemo)(() => {
    let filtersInScope = [];
    const filtersOutOfScope = [];
    // we check native filters scopes only on dashboards with tabs
    if (!dashboardHasTabs) {
      filtersInScope = cascadeFilters;
    } else
    {
      cascadeFilters.forEach((filter) => {
        const filterInScope = isFilterInScope(filter);
        if (filterInScope) {
          filtersInScope.push(filter);
        } else
        {
          filtersOutOfScope.push(filter);
        }
      });
    }
    return [filtersInScope, filtersOutOfScope];
  }, [cascadeFilters, dashboardHasTabs, isFilterInScope]);
}
// EXTERNAL MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/utils.ts
var FiltersConfigModal_utils = __webpack_require__(92242);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/Footer/CancelConfirmationAlert.tsx
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



var _ref =  true ? { name: "ihui0v", styles: "text-align:left;& .ant-alert-action{align-self:center;}" } : 0;var _ref2 =  true ? { name: "zjik7", styles: "display:flex" } : 0;
function CancelConfirmationAlert({ title, onConfirm, onDismiss, children }) {
  return (0,emotion_react_browser_esm.jsx)(Alert/* default */.Z, { closable: false, type: "warning", key: "alert", message: title, css: _ref,


    description: children, action: (0,emotion_react_browser_esm.jsx)("div", { css: _ref2 },
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "cancel", buttonSize: "small", buttonStyle: "secondary", onClick: onDismiss },
    (0,TranslatorSingleton.t)('Keep editing')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "submit", buttonSize: "small", buttonStyle: "primary", onClick: onConfirm },
    (0,TranslatorSingleton.t)('Yes, cancel'))) });


}
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/Footer/Footer.tsx
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




const Footer = ({ canSave = true, onCancel, handleSave, onDismiss, onConfirmCancel, saveAlertVisible }) => {
  if (saveAlertVisible) {
    return (0,emotion_react_browser_esm.jsx)(CancelConfirmationAlert, { key: "cancel-confirm", title: (0,TranslatorSingleton.t)('There are unsaved changes.'), onConfirm: onConfirmCancel, onDismiss: onDismiss },
    (0,TranslatorSingleton.t)(`Are you sure you want to cancel?`));

  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "cancel", buttonStyle: "secondary", onClick: onCancel },
  (0,TranslatorSingleton.t)('Cancel')),

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { disabled: !canSave, key: "submit", buttonStyle: "primary", onClick: handleSave },
  (0,TranslatorSingleton.t)('Save')));


};
/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
/* harmony default export */ const asn_PlusOutlined = (PlusOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(27029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_PlusOutlined
  }));
};

PlusOutlined_PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ const icons_PlusOutlined = (react.forwardRef(PlusOutlined_PlusOutlined));
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FilterTabs.tsx
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






const FILTER_WIDTH = 180;
const FilterTabs_StyledSpan = style/* styled.span */.iK.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.dark1};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark2};
  }
`;
const StyledFilterTitle = style/* styled.span */.iK.span`
  width: 100%;
  white-space: normal;
  color: ${({ theme }) => theme.colors.grayscale.dark1};
`;
const StyledAddFilterBox = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.primary.dark1};
  padding: ${({ theme }) => theme.gridUnit * 2}px;
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;
const StyledTrashIcon = (0,style/* styled */.iK)(Icons/* default.Trash */.Z.Trash)`
  color: ${({ theme }) => theme.colors.grayscale.light3};
`;
const FilterTabTitle = style/* styled.span */.iK.span`
  transition: color ${({ theme }) => theme.transitionTiming}s;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @keyframes tabTitleRemovalAnimation {
    0%,
    90% {
      opacity: 1;
    }
    95%,
    100% {
      opacity: 0;
    }
  }

  &.removed {
    color: ${({ theme }) => theme.colors.warning.dark1};
    transform-origin: top;
    animation-name: tabTitleRemovalAnimation;
    animation-duration: ${FiltersConfigModal_utils/* REMOVAL_DELAY_SECS */.pF}s;
  }

  &.errored > span {
    color: ${({ theme }) => theme.colors.error.base};
  }
`;
const StyledWarning = (0,style/* styled */.iK)(Icons/* default.Warning */.Z.Warning)`
  color: ${({ theme }) => theme.colors.error.base};
  &.anticon {
    margin-right: 0;
  }
`;
const FilterTabsContainer = (0,style/* styled */.iK)(components_Tabs/* LineEditableTabs */.cl)`
  ${({ theme }) => `
    height: 100%;

    & > .ant-tabs-content-holder {
      border-left: 1px solid ${theme.colors.grayscale.light2};
      padding-right: ${theme.gridUnit * 4}px;
      overflow-x: hidden;
      overflow-y: auto;
    }

    & > .ant-tabs-content-holder ~ .ant-tabs-content-holder {
      border: none;
    }

    &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
      visibility: hidden;
    }

    &.ant-tabs-left
      > .ant-tabs-content-holder
      > .ant-tabs-content
      > .ant-tabs-tabpane {
      padding-left: ${theme.gridUnit * 4}px;
      margin-top: ${theme.gridUnit * 4}px;
    }

    .ant-tabs-nav-list {
      overflow-x: hidden;
      overflow-y: auto;
      padding-top: ${theme.gridUnit * 2}px;
      padding-right: ${theme.gridUnit}px;
      padding-bottom: ${theme.gridUnit * 3}px;
      padding-left: ${theme.gridUnit * 3}px;
      width: 270px;
    }

    // extra selector specificity:
    &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
      min-width: ${FILTER_WIDTH}px;
      margin: 0 ${theme.gridUnit * 2}px 0 0;
      padding: ${theme.gridUnit}px
        ${theme.gridUnit * 2}px;
      &:hover,
      &-active {
        color: ${theme.colors.grayscale.dark1};
        border-radius: ${theme.borderRadius}px;
        background-color: ${theme.colors.secondary.light4};

        .ant-tabs-tab-remove > span {
          color: ${theme.colors.grayscale.base};
          transition: all 0.3s;
        }
      }
    }

    .ant-tabs-tab-btn {
      text-align: left;
      justify-content: space-between;
      text-transform: unset;
    }

    .ant-tabs-nav-more {
      display: none;
    }

    .ant-tabs-extra-content {
      width: 100%;
    }
  `}
`;
const StyledHeader = style/* styled.div */.iK.div`
  ${({ theme }) => `
    color: ${theme.colors.grayscale.dark1};
    font-size: ${theme.typography.sizes.l}px;
    padding-top: ${theme.gridUnit * 4}px;
    padding-right: ${theme.gridUnit * 4}px;
    padding-left: ${theme.gridUnit * 4}px;
  `}
`;
const FilterTabs = ({ onEdit, getFilterTitle, onChange, currentFilterId, filterIds = [], erroredFilters = [], removedFilters = [], restoreFilter, children }) => (0,emotion_react_browser_esm.jsx)(FilterTabsContainer, { id: "native-filters-tabs", type: "editable-card", tabPosition: "left", onChange: onChange, activeKey: currentFilterId, onEdit: onEdit, hideAdd: true, tabBarExtraContent: {
    left: (0,emotion_react_browser_esm.jsx)(StyledHeader, null, (0,TranslatorSingleton.t)('Filters')),
    right: (0,emotion_react_browser_esm.jsx)(StyledAddFilterBox, { onClick: () => {
        onEdit('', 'add');
        setTimeout(() => {
          const element = document.getElementById('native-filters-tabs');
          if (element) {
            const navList = element.getElementsByClassName('ant-tabs-nav-list')[0];
            navList.scrollTop = navList.scrollHeight;
          }
        }, 0);
      } },
    (0,emotion_react_browser_esm.jsx)(icons_PlusOutlined, null), ' ',
    (0,emotion_react_browser_esm.jsx)("span", { "aria-label": "Add filter" },
    (0,TranslatorSingleton.t)('Add filter'))) } },



filterIds.map((id) => {
  const showErroredFilter = erroredFilters.includes(id);
  const filterName = getFilterTitle(id);
  return (0,emotion_react_browser_esm.jsx)(components_Tabs/* LineEditableTabs.TabPane */.cl.TabPane, { tab: (0,emotion_react_browser_esm.jsx)(FilterTabTitle, { className: removedFilters[id] ?
      'removed' :
      showErroredFilter ?
      'errored' :
      '' },
    (0,emotion_react_browser_esm.jsx)(StyledFilterTitle, null,
    removedFilters[id] ? (0,TranslatorSingleton.t)('(Removed)') : filterName),

    !removedFilters[id] && showErroredFilter && (0,emotion_react_browser_esm.jsx)(StyledWarning, null),
    removedFilters[id] && (0,emotion_react_browser_esm.jsx)(FilterTabs_StyledSpan, { role: "button", tabIndex: 0, onClick: () => restoreFilter(id) },
    (0,TranslatorSingleton.t)('Undo?'))),

    key: id, closeIcon: removedFilters[id] ? (0,emotion_react_browser_esm.jsx)(react.Fragment, null) : (0,emotion_react_browser_esm.jsx)(StyledTrashIcon, null) },

  // @ts-ignore
  children(id));

}));

/* harmony default export */ const FiltersConfigModal_FilterTabs = (FilterTabs);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js
var InfoTooltipWithTrigger = __webpack_require__(88186);
;// CONCATENATED MODULE: ./src/utils/cacheWrapper.ts
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
const cacheWrapper = (fn, cache, keyFn = (...args) => JSON.stringify([...args])) => (...args) => {
  const key = keyFn(...args);
  if (cache.has(key)) {
    return cache.get(key);
  }
  const result = fn(...args);
  cache.set(key, result);
  return result;
};
// EXTERNAL MODULE: ./src/explore/components/controls/FilterControl/AdhocFilterControl/index.jsx + 2 modules
var AdhocFilterControl = __webpack_require__(46566);
// EXTERNAL MODULE: ./src/explore/components/controls/DateFilterControl/index.ts + 12 modules
var DateFilterControl = __webpack_require__(73375);
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43700);
// EXTERNAL MODULE: ./src/middleware/asyncEvent.ts
var asyncEvent = __webpack_require__(77997);
;// CONCATENATED MODULE: ./src/components/ErrorMessage/BasicErrorAlert.tsx
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



const StyledContainer = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ level, theme }) => theme.colors[level].light2};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ level, theme }) => theme.colors[level].base};
  color: ${({ level, theme }) => theme.colors[level].dark2};
  padding: ${({ theme }) => theme.gridUnit * 2}px;
  margin-bottom: ${({ theme }) => theme.gridUnit}px;
  width: 100%;
`;
const StyledContent = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.gridUnit * 2}px;
`;
const StyledTitle = style/* styled.span */.iK.span`
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;
function BasicErrorAlert({ body, level = 'error', title }) {
  const theme = (0,style/* useTheme */.Fg)();
  const iconColor = theme.colors[level].base;
  return (0,emotion_react_browser_esm.jsx)(StyledContainer, { level: level, role: "alert" },
  level === 'error' ? (0,emotion_react_browser_esm.jsx)(Icons/* default.ErrorSolid */.Z.ErrorSolid, { iconColor: iconColor }) : (0,emotion_react_browser_esm.jsx)(Icons/* default.WarningSolid */.Z.WarningSolid, { iconColor: iconColor }),
  (0,emotion_react_browser_esm.jsx)(StyledContent, null,
  (0,emotion_react_browser_esm.jsx)(StyledTitle, null, title),
  (0,emotion_react_browser_esm.jsx)("p", null, body)));


}
// EXTERNAL MODULE: ./src/common/hooks/usePrevious/index.ts + 1 modules
var usePrevious = __webpack_require__(67337);
;// CONCATENATED MODULE: ./src/common/hooks/useChangeEffect/useChangeEffect.ts
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


/**
 * Calls the callback when the value changes.
 *
 * Passes the previous and current values to the callback
 */
function useChangeEffect(value, callback) {
  const previous = (0,usePrevious/* usePrevious */.D)(value);
  (0,react.useEffect)(() => {
    if (value !== previous) {
      callback(previous, value);
    }
  }, [value, previous, callback]);
}
;// CONCATENATED MODULE: ./src/common/hooks/useChangeEffect/index.ts
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

// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/ColumnSelect.tsx
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








const localCache = new Map();
const cachedSupersetGet = cacheWrapper(SupersetClient/* default.get */.Z.get, localCache, ({ endpoint }) => endpoint || '');
/** Special purpose AsyncSelect that selects a column from a dataset */
// eslint-disable-next-line import/prefer-default-export
function ColumnSelect({ allowClear = false, filterValues = () => true, form, formField = 'column', filterId, datasetId, value, onChange, mode }) {var _form$getFieldValue;
  const [columns, setColumns] = (0,react.useState)();
  const { addDangerToast } = (0,withToasts/* useToasts */.e)();
  const resetColumnField = (0,react.useCallback)(() => {
    form.setFields([
    { name: ['filters', filterId, formField], touched: false, value: null }]);

  }, [form, filterId, formField]);
  const options = (0,react.useMemo)(() => (0,ensureIsArray/* default */.Z)(columns).
  filter(filterValues).
  map((col) => col.column_name).
  sort((a, b) => a.localeCompare(b)).
  map((column) => ({ label: column, value: column })), [columns, filterValues]);
  const currentFilterType = (_form$getFieldValue = form.getFieldValue('filters')) == null ? void 0 : _form$getFieldValue[filterId].
  filterType;
  const currentColumn = (0,react.useMemo)(() => columns == null ? void 0 : columns.find((column) => column.column_name === value), [columns, value]);
  (0,react.useEffect)(() => {
    if (currentColumn &&
    !doesColumnMatchFilterType(currentFilterType, currentColumn)) {
      resetColumnField();
    }
  }, [currentColumn, currentFilterType, resetColumnField]);
  useChangeEffect(datasetId, (previous) => {
    if (previous != null) {
      resetColumnField();
    }
    if (datasetId != null) {
      cachedSupersetGet({
        endpoint: `/api/v1/dataset/${datasetId}` }).
      then(({ json: { result } }) => {
        const lookupValue = Array.isArray(value) ? value : [value];
        const valueExists = result.columns.some((column) => lookupValue == null ? void 0 : lookupValue.includes(column.column_name));
        if (!valueExists) {
          resetColumnField();
        }
        setColumns(result.columns);
      }, async (badResponse) => {
        const { error, message } = await (0,getClientErrorObject/* getClientErrorObject */.O)(badResponse);
        let errorText = message || error || (0,TranslatorSingleton.t)('An error has occurred');
        if (message === 'Forbidden') {
          errorText = (0,TranslatorSingleton.t)('You do not have permission to edit this dashboard');
        }
        addDangerToast(errorText);
      });
    }
  });
  return (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { mode: mode, value: mode === 'multiple' ? value || [] : value, ariaLabel: (0,TranslatorSingleton.t)('Column select'), onChange: onChange, options: options, placeholder: (0,TranslatorSingleton.t)('Select a column'), notFoundContent: (0,TranslatorSingleton.t)('No compatible columns found'), showSearch: true, allowClear: allowClear });
}
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/state.ts
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



// When some fields in form changed we need re-fetch data for Filter defaultValue
// eslint-disable-next-line import/prefer-default-export
const useBackendFormUpdate = (form, filterId) => {var _formFilter$dataset;
  const forceUpdate = useForceUpdate();
  const formFilter = (form.getFieldValue('filters') || {})[filterId];
  (0,react.useEffect)(() => {
    setNativeFilterFieldValues(form, filterId, {
      isDataDirty: true,
      defaultValueQueriesData: null });

    forceUpdate();
  }, [
  form,
  formFilter == null ? void 0 : formFilter.filterType,
  formFilter == null ? void 0 : formFilter.column,
  formFilter == null ? void 0 : (_formFilter$dataset = formFilter.dataset) == null ? void 0 : _formFilter$dataset.value,
  JSON.stringify(formFilter == null ? void 0 : formFilter.adhoc_filters),
  formFilter == null ? void 0 : formFilter.time_range,
  forceUpdate,
  filterId]);

};
const useDefaultValue = (formFilter, filterToEdit) => {var _formFilter$controlVa, _formFilter$controlVa2;
  const enableEmptyFilter = !!(formFilter != null && (_formFilter$controlVa = formFilter.controlValues) != null && _formFilter$controlVa.enableEmptyFilter);
  const defaultToFirstItem = !!(formFilter != null && (_formFilter$controlVa2 = formFilter.controlValues) != null && _formFilter$controlVa2.defaultToFirstItem);
  const [hasDefaultValue, setHasPartialDefaultValue] = (0,react.useState)(false);
  const [isRequired, setIsRequired] = (0,react.useState)(enableEmptyFilter);
  const [defaultValueTooltip, setDefaultValueTooltip] = (0,react.useState)('');
  const setHasDefaultValue = (value = false) => {
    const required = enableEmptyFilter && !defaultToFirstItem;
    setIsRequired(required);
    setHasPartialDefaultValue(required ? true : value);
  };
  (0,react.useEffect)(() => {var _formFilter$defaultDa, _formFilter$defaultDa2;
    setHasDefaultValue(defaultToFirstItem ?
    false :
    !!(formFilter != null && (_formFilter$defaultDa = formFilter.defaultDataMask) != null && (_formFilter$defaultDa2 = _formFilter$defaultDa.filterState) != null && _formFilter$defaultDa2.value));
    // TODO: this logic should be unhardcoded
  }, [defaultToFirstItem, enableEmptyFilter]);
  (0,react.useEffect)(() => {var _filterToEdit$default, _filterToEdit$default2;
    setHasDefaultValue(defaultToFirstItem ?
    false :
    !!(filterToEdit != null && (_filterToEdit$default = filterToEdit.defaultDataMask) != null && (_filterToEdit$default2 = _filterToEdit$default.filterState) != null && _filterToEdit$default2.value));
  }, []);
  (0,react.useEffect)(() => {
    let tooltip = '';
    if (defaultToFirstItem) {
      tooltip = (0,TranslatorSingleton.t)('Default value set automatically when "Default to first item" is checked');
    } else
    if (isRequired) {
      tooltip = (0,TranslatorSingleton.t)('Default value must be set when "Required" is checked');
    } else
    if (hasDefaultValue) {
      tooltip = (0,TranslatorSingleton.t)('Default value must be set when "Filter has default value" is checked');
    }
    setDefaultValueTooltip(tooltip);
  }, [hasDefaultValue, isRequired, defaultToFirstItem]);
  return [hasDefaultValue, isRequired, defaultValueTooltip, setHasDefaultValue];
};
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/types.ts
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
var NativeFilterType;
(function (NativeFilterType) {
  NativeFilterType["NATIVE_FILTER"] = "NATIVE_FILTER";
  NativeFilterType["SECTION"] = "SECTION";
})(NativeFilterType || (NativeFilterType = {}));
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartControlPanelRegistrySingleton.js
var ChartControlPanelRegistrySingleton = __webpack_require__(14299);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/getControlItemsMap.tsx
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









const getControlItemsMap_CleanFormItem = (0,style/* styled */.iK)(Form/* FormItem */.xJ)`
  margin-bottom: 0;
`;
function getControlItemsMap({ datasetId, disabled, forceUpdate, form, filterId, filterType, filterToEdit, formFilter, removed }) {var _getControlItems;
  const controlPanelRegistry = (0,ChartControlPanelRegistrySingleton/* default */.Z)();
  const controlItems = (_getControlItems = getControlItems(controlPanelRegistry.get(filterType))) != null ? _getControlItems : [];
  const mapControlItems = {};
  const mapMainControlItems = {};
  controlItems.
  filter((mainControlItem) => (mainControlItem == null ? void 0 : mainControlItem.name) === 'groupby').
  forEach((mainControlItem) => {var _filterToEdit$control, _filterToEdit$control2, _mainControlItem$conf, _filterToEdit$targets, _filterToEdit$targets2, _mainControlItem$conf2, _mainControlItem$conf3, _mainControlItem$conf4, _mainControlItem$conf5;
    const initialValue = (_filterToEdit$control = filterToEdit == null ? void 0 : (_filterToEdit$control2 = filterToEdit.controlValues) == null ? void 0 : _filterToEdit$control2[mainControlItem.name]) != null ? _filterToEdit$control :
    mainControlItem == null ? void 0 : (_mainControlItem$conf = mainControlItem.config) == null ? void 0 : _mainControlItem$conf.default;
    const initColumn = filterToEdit == null ? void 0 : (_filterToEdit$targets = filterToEdit.targets[0]) == null ? void 0 : (_filterToEdit$targets2 = _filterToEdit$targets.column) == null ? void 0 : _filterToEdit$targets2.name;
    const element = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(getControlItemsMap_CleanFormItem, { name: ['filters', filterId, 'requiredFirst', mainControlItem.name], hidden: true, initialValue: (mainControlItem == null ? void 0 : (_mainControlItem$conf2 = mainControlItem.config) == null ? void 0 : _mainControlItem$conf2.requiredFirst) && (
      filterToEdit == null ? void 0 : filterToEdit.requiredFirst) }),
    (0,emotion_react_browser_esm.jsx)(StyledFormItem
    // don't show the column select unless we have a dataset
    , { name: ['filters', filterId, 'column'], initialValue: initColumn, label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null,
      (0,TranslatorSingleton.t)(`${(_mainControlItem$conf3 = mainControlItem.config) == null ? void 0 : _mainControlItem$conf3.label}`) || (0,TranslatorSingleton.t)('Column')),
      rules: [
      {
        required: ((_mainControlItem$conf4 = mainControlItem.config) == null ? void 0 : _mainControlItem$conf4.required) && !removed,
        message: (0,TranslatorSingleton.t)('Column is required') }] },


    (0,emotion_react_browser_esm.jsx)(ColumnSelect, { mode: ((_mainControlItem$conf5 = mainControlItem.config) == null ? void 0 : _mainControlItem$conf5.multiple) && 'multiple', form: form, filterId: filterId, datasetId: datasetId, filterValues: (column) => doesColumnMatchFilterType((formFilter == null ? void 0 : formFilter.filterType) || '', column), onChange: () => {
        // We need reset default value when when column changed
        setNativeFilterFieldValues(form, filterId, {
          defaultDataMask: null });

        forceUpdate();
      } })));


    mapMainControlItems[mainControlItem.name] = {
      element,
      checked: initialValue };

  });
  controlItems.
  filter((controlItem) => {var _controlItem$config;return (controlItem == null ? void 0 : (_controlItem$config = controlItem.config) == null ? void 0 : _controlItem$config.renderTrigger) &&
    controlItem.name !== 'sortAscending';}).
  forEach((controlItem) => {var _filterToEdit$control3, _filterToEdit$control4, _controlItem$config2, _controlItem$config3;
    const initialValue = (_filterToEdit$control3 = filterToEdit == null ? void 0 : (_filterToEdit$control4 = filterToEdit.controlValues) == null ? void 0 : _filterToEdit$control4[controlItem.name]) != null ? _filterToEdit$control3 :
    controlItem == null ? void 0 : (_controlItem$config2 = controlItem.config) == null ? void 0 : _controlItem$config2.default;
    const element = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(getControlItemsMap_CleanFormItem, { name: ['filters', filterId, 'requiredFirst', controlItem.name], hidden: true, initialValue: (controlItem == null ? void 0 : (_controlItem$config3 = controlItem.config) == null ? void 0 : _controlItem$config3.requiredFirst) && (filterToEdit == null ? void 0 : filterToEdit.requiredFirst) }),
    (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { key: controlItem.name, placement: "left", title: controlItem.config.affectsDataMask &&
      disabled &&
      (0,TranslatorSingleton.t)('Populate "Default value" to enable this control') },
    (0,emotion_react_browser_esm.jsx)(StyledRowFormItem, { key: controlItem.name, name: ['filters', filterId, 'controlValues', controlItem.name], initialValue: initialValue, valuePropName: "checked", colon: false },
    (0,emotion_react_browser_esm.jsx)(components/* Checkbox */.XZ, { disabled: controlItem.config.affectsDataMask && disabled, onChange: ({ target: { checked } }) => {
        if (controlItem.config.requiredFirst) {
          setNativeFilterFieldValues(form, filterId, {
            requiredFirst: {
              ...(formFilter == null ? void 0 : formFilter.requiredFirst),
              [controlItem.name]: checked } });


        }
        if (controlItem.config.resetConfig) {
          setNativeFilterFieldValues(form, filterId, {
            defaultDataMask: null });

        }
        forceUpdate();
      } },
    controlItem.config.label, "\xA0",
    controlItem.config.description && (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { placement: "top", label: controlItem.config.name, tooltip: controlItem.config.description })))));




    mapControlItems[controlItem.name] = { element, checked: initialValue };
  });
  return {
    controlItems: mapControlItems,
    mainControlItems: mapMainControlItems };

}
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/RemovedFilter.tsx
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



const RemovedContent = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: column;
  height: 400px; // arbitrary
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
const RemovedFilter = ({ onClick }) => (0,emotion_react_browser_esm.jsx)(RemovedContent, null,
(0,emotion_react_browser_esm.jsx)("p", null, (0,TranslatorSingleton.t)('You have removed this filter.')),
(0,emotion_react_browser_esm.jsx)("div", null,
(0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "primary", onClick: onClick },
(0,TranslatorSingleton.t)('Restore Filter'))));



/* harmony default export */ const FiltersConfigForm_RemovedFilter = (RemovedFilter);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/components/SuperChart.js + 3 modules
var SuperChart = __webpack_require__(25945);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/DefaultValue.tsx
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



const DefaultValue = ({ hasDefaultValue, filterId, hasDataset, form, setDataMask, formData, enableNoResults }) => {var _formFilter$defaultDa, _formFilter$defaultDa2;
  const formFilter = (form.getFieldValue('filters') || {})[filterId];
  const queriesData = formFilter == null ? void 0 : formFilter.defaultValueQueriesData;
  const loading = hasDataset && queriesData === null;
  const value = (_formFilter$defaultDa = formFilter.defaultDataMask) == null ? void 0 : _formFilter$defaultDa.filterState.value;
  const isMissingRequiredValue = hasDefaultValue && (value === null || value === undefined);
  return loading ? (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, { position: "inline-centered" }) : (0,emotion_react_browser_esm.jsx)(SuperChart/* default */.Z, { height: 32, width: (formFilter == null ? void 0 : formFilter.filterType) === 'filter_time' ? 350 : 250, appSection: Base/* AppSection.FILTER_CONFIG_MODAL */.Tr.FILTER_CONFIG_MODAL, behaviors: [Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER], formData: formData
    // For charts that don't have datasource we need workaround for empty placeholder
    , queriesData: hasDataset ? formFilter == null ? void 0 : formFilter.defaultValueQueriesData : [{ data: [{}] }], chartType: formFilter == null ? void 0 : formFilter.filterType, hooks: { setDataMask }, enableNoResults: enableNoResults, filterState: {
      ...((_formFilter$defaultDa2 = formFilter.defaultDataMask) == null ? void 0 : _formFilter$defaultDa2.filterState),
      validateMessage: isMissingRequiredValue && (0,TranslatorSingleton.t)('Value is required'),
      validateStatus: isMissingRequiredValue && 'error' } });

};
/* harmony default export */ const FiltersConfigForm_DefaultValue = (DefaultValue);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/CollapsibleControl.tsx
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




const CollapsibleControl_StyledContainer = style/* styled.div */.iK.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: ${({ theme }) => theme.gridUnit * 10}px;
  padding-top: ${({ theme }) => theme.gridUnit * 2 + 2}px;

  .checkbox {
    margin-bottom: ${({ theme, checked }) => checked ? theme.gridUnit : 0}px;
  }

  & > div {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }
`;
const CollapsibleControl = (props) => {
  const { checked, disabled, title, tooltip, children, onChange = () => {}, initialValue = false } = props;
  const [isChecked, setIsChecked] = (0,react.useState)(initialValue);
  (0,react.useEffect)(() => {
    // if external `checked` changed to `undefined`, it means that we work now in uncontrolled mode with local state
    // and we need ignore external value
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);
  return (0,emotion_react_browser_esm.jsx)(CollapsibleControl_StyledContainer, { checked: isChecked },
  (0,emotion_react_browser_esm.jsx)(components/* Checkbox */.XZ, { className: "checkbox", checked: isChecked, disabled: disabled, onChange: (e) => {
      const value = e.target.checked;
      // external `checked` value has more priority then local state
      if (checked === undefined) {
        // uncontrolled mode
        setIsChecked(value);
      }
      onChange(value);
    } },
  (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  title, "\xA0",
  tooltip && (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { placement: "top", tooltip: tooltip }))),


  isChecked && children);

};

;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/DatasetSelect.tsx
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







const DatasetSelect_localCache = new Map();
const DatasetSelect_cachedSupersetGet = cacheWrapper(SupersetClient/* default.get */.Z.get, DatasetSelect_localCache, ({ endpoint }) => endpoint || '');
const DatasetSelect = ({ onChange, value }) => {
  const getErrorMessage = (0,react.useCallback)(({ error, message }) => {
    let errorText = message || error || (0,TranslatorSingleton.t)('An error has occurred');
    if (message === 'Forbidden') {
      errorText = (0,TranslatorSingleton.t)('You do not have permission to edit this dashboard');
    }
    return errorText;
  }, []);
  const loadDatasetOptions = async (search, page, pageSize) => {
    const searchColumn = 'table_name';
    const query = rison_default().encode({
      filters: [{ col: searchColumn, opr: 'ct', value: search }],
      page,
      page_size: pageSize,
      order_column: searchColumn,
      order_direction: 'asc' });

    return DatasetSelect_cachedSupersetGet({
      endpoint: `/api/v1/dataset/?q=${query}` }).

    then((response) => {
      const data = response.json.result.
      map(datasetToSelectOption).
      sort((a, b) => a.label.localeCompare(b.label));
      return {
        data,
        totalCount: response.json.count };

    }).
    catch(async (error) => {
      const errorMessage = getErrorMessage(await (0,getClientErrorObject/* getClientErrorObject */.O)(error));
      throw new Error(errorMessage);
    });
  };
  return (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Dataset'), value: value, options: loadDatasetOptions, onChange: onChange });
};
const MemoizedSelect = (props) =>
// eslint-disable-next-line react-hooks/exhaustive-deps
(0,react.useMemo)(() => (0,emotion_react_browser_esm.jsx)(DatasetSelect, props), []);
/* harmony default export */ const FiltersConfigForm_DatasetSelect = (MemoizedSelect);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigForm/FiltersConfigForm.tsx
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


































const { TabPane } = components_Tabs/* default */.ZP;
const FiltersConfigForm_StyledContainer = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
const StyledRowContainer = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const StyledFormItem = (0,style/* styled */.iK)(Form/* FormItem */.xJ)`
  width: 49%;
  margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  & .ant-form-item-control-input {
    min-height: ${({ theme }) => theme.gridUnit * 10}px;
  }
`;
const StyledRowFormItem = (0,style/* styled */.iK)(Form/* FormItem */.xJ)`
  margin-bottom: 0;
  padding-bottom: 0;
  min-width: 50%;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  & .ant-form-item-control-input {
    min-height: ${({ theme }) => theme.gridUnit * 10}px;
  }
`;
const StyledRowSubFormItem = (0,style/* styled */.iK)(Form/* FormItem */.xJ)`
  min-width: 50%;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  .ant-form-item-extra {
    display: none;
  }

  & .ant-form-item-control-input {
    height: auto;
  }
`;
const StyledLabel = style/* styled.span */.iK.span`
  color: ${({ theme }) => theme.colors.grayscale.base};
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  text-transform: uppercase;
`;
const FiltersConfigForm_CleanFormItem = (0,style/* styled */.iK)(Form/* FormItem */.xJ)`
  margin-bottom: 0;
`;
const DefaultValueContainer = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RefreshIcon = (0,style/* styled */.iK)(Icons/* default.Refresh */.Z.Refresh)`
  margin-left: ${({ theme }) => theme.gridUnit * 2}px;
  color: ${({ theme }) => theme.colors.primary.base};
`;
const StyledCollapse = (0,style/* styled */.iK)(Collapse/* default */.Z)`
  margin-left: ${({ theme }) => theme.gridUnit * -4 - 1}px;
  margin-right: ${({ theme }) => theme.gridUnit * -4}px;
  border-left: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  border-radius: 0;

  .ant-collapse-header {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-top: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    margin-top: -1px;
    border-radius: 0;
  }

  .ant-collapse-content {
    border: 0;
  }

  .ant-collapse-content-box {
    padding-top: ${({ theme }) => theme.gridUnit * 2}px;
  }

  &.ant-collapse > .ant-collapse-item {
    border: 0;
    border-radius: 0;
  }
`;
const StyledTabs = (0,style/* styled */.iK)(components_Tabs/* default */.ZP)`
  .ant-tabs-nav {
    position: sticky;
    margin-left: ${({ theme }) => theme.gridUnit * -4}px;
    margin-right: ${({ theme }) => theme.gridUnit * -4}px;
    top: 0;
    background: white;
    z-index: 1;
  }

  .ant-tabs-nav-list {
    padding: 0;
  }

  .ant-form-item-label {
    padding-bottom: 0;
  }
`;
const StyledAsterisk = style/* styled.span */.iK.span`
  color: ${({ theme }) => theme.colors.error.base};
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  margin-left: ${({ theme }) => theme.gridUnit - 1}px;
  &:before {
    content: '*';
  }
`;
const FiltersConfigForm_FilterTabs = {
  configuration: {
    key: 'configuration',
    name: (0,TranslatorSingleton.t)('Configuration') },

  scoping: {
    key: 'scoping',
    name: (0,TranslatorSingleton.t)('Scoping') } };


const FilterPanels = {
  basic: {
    key: 'basic',
    name: (0,TranslatorSingleton.t)('Basic') },

  advanced: {
    key: 'advanced',
    name: (0,TranslatorSingleton.t)('Advanced') } };


const FILTERS_WITH_ADHOC_FILTERS = ['filter_select', 'filter_range'];
const BASIC_CONTROL_ITEMS = ['enableEmptyFilter', 'multiSelect'];
// TODO: Rename the filter plugins and remove this mapping
const FILTER_TYPE_NAME_MAPPING = {
  [(0,TranslatorSingleton.t)('Select filter')]: (0,TranslatorSingleton.t)('Value'),
  [(0,TranslatorSingleton.t)('Range filter')]: (0,TranslatorSingleton.t)('Numerical range'),
  [(0,TranslatorSingleton.t)('Time filter')]: (0,TranslatorSingleton.t)('Time range'),
  [(0,TranslatorSingleton.t)('Time column')]: (0,TranslatorSingleton.t)('Time column'),
  [(0,TranslatorSingleton.t)('Time grain')]: (0,TranslatorSingleton.t)('Time grain'),
  [(0,TranslatorSingleton.t)('Group By')]: (0,TranslatorSingleton.t)('Group by') };

const FiltersConfigForm_localCache = new Map();
const FiltersConfigForm_cachedSupersetGet = cacheWrapper(SupersetClient/* default.get */.Z.get, FiltersConfigForm_localCache, ({ endpoint }) => endpoint || '');
/**
 * The configuration form for a specific filter.
 * Assigns field values to `filters[filterId]` in the form.
 */
const FiltersConfigForm = ({ filterId, filterToEdit, removedFilters, restoreFilter, form, parentFilters, setErroredFilters }, ref) => {var _form$getFieldValue, _formFilter$parentFil, _filterToEdit$cascade, _formFilter$dataset2, _nativeFilterItems$fo, _nativeFilterItems$fo2, _ref, _formFilter$dataset$v, _formFilter$dataset3, _filterToEdit$targets, _nativeFilterItems$fo3, _nativeFilterItem$val, _formFilter$isDataDir, _formFilter$dataset6, _filterToEdit$adhoc_f, _formFilter$controlVa, _filterToEdit$control, _filterToEdit$control2, _formFilter$controlVa2, _formFilter$adhoc_fil, _formFilter$controlVa3, _formFilter$dataset9, _datasetDetails$colum;
  const isRemoved = !!removedFilters[filterId];
  const [error, setError] = (0,react.useState)('');
  const [metrics, setMetrics] = (0,react.useState)([]);
  const [activeTabKey, setActiveTabKey] = (0,react.useState)(FiltersConfigForm_FilterTabs.configuration.key);
  const [activeFilterPanelKey, setActiveFilterPanelKey] = (0,react.useState)();
  const [undoFormValues, setUndoFormValues] = (0,react.useState)(null);
  const forceUpdate = useForceUpdate();
  const [datasetDetails, setDatasetDetails] = (0,react.useState)();
  const defaultFormFilter = (0,react.useMemo)(() => ({}), []);
  const formValues = (_form$getFieldValue = form.getFieldValue('filters')) == null ? void 0 : _form$getFieldValue[filterId];
  const formFilter = formValues || undoFormValues || defaultFormFilter;
  const parentFilterOptions = (0,react.useMemo)(() => parentFilters.map((filter) => ({
    value: filter.id,
    label: filter.title })),
  [parentFilters]);
  const parentId = (formFilter == null ? void 0 : (_formFilter$parentFil = formFilter.parentFilter) == null ? void 0 : _formFilter$parentFil.value) || (filterToEdit == null ? void 0 : (_filterToEdit$cascade = filterToEdit.cascadeParentIds) == null ? void 0 : _filterToEdit$cascade[0]);
  const parentFilter = parentFilterOptions.find(({ value }) => value === parentId);
  const hasParentFilter = !!parentFilter;
  const nativeFilterItems = (0,ChartMetadataRegistrySingleton/* default */.Z)().items;
  const nativeFilterVizTypes = Object.entries(nativeFilterItems)
  // @ts-ignore
  .filter(([, { value }]) => {var _value$behaviors;return (_value$behaviors = value.behaviors) == null ? void 0 : _value$behaviors.includes(Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER);}).
  map(([key]) => key);
  const loadedDatasets = (0,es/* useSelector */.v9)(({ datasources }) => datasources);
  const charts = (0,es/* useSelector */.v9)(({ charts }) => charts);
  const doLoadedDatasetsHaveTemporalColumns = (0,react.useMemo)(() => Object.values(loadedDatasets).some((dataset) => hasTemporalColumns(dataset)), [loadedDatasets]);
  const showTimeRangePicker = (0,react.useMemo)(() => {
    const currentDataset = Object.values(loadedDatasets).find((dataset) => {var _formFilter$dataset;return dataset.id === (formFilter == null ? void 0 : (_formFilter$dataset = formFilter.dataset) == null ? void 0 : _formFilter$dataset.value);});
    return currentDataset ? hasTemporalColumns(currentDataset) : true;
  }, [formFilter == null ? void 0 : (_formFilter$dataset2 = formFilter.dataset) == null ? void 0 : _formFilter$dataset2.value, loadedDatasets]);
  // @ts-ignore
  const hasDataset = !!((_nativeFilterItems$fo = nativeFilterItems[formFilter == null ? void 0 : formFilter.filterType]) != null && (_nativeFilterItems$fo2 = _nativeFilterItems$fo.value) != null && _nativeFilterItems$fo2.
  datasourceCount);
  const datasetId = (_ref = (_formFilter$dataset$v = formFilter == null ? void 0 : (_formFilter$dataset3 = formFilter.dataset) == null ? void 0 : _formFilter$dataset3.value) != null ? _formFilter$dataset$v :
  filterToEdit == null ? void 0 : (_filterToEdit$targets = filterToEdit.targets[0]) == null ? void 0 : _filterToEdit$targets.datasetId) != null ? _ref :
  mostUsedDataset(loadedDatasets, charts);
  const { controlItems = {}, mainControlItems = {} } = formFilter ?
  getControlItemsMap({
    datasetId,
    disabled: false,
    forceUpdate,
    form,
    filterId,
    filterType: formFilter == null ? void 0 : formFilter.filterType,
    filterToEdit,
    formFilter,
    removed: isRemoved }) :

  {};
  const hasColumn = !!mainControlItems.groupby;
  const nativeFilterItem = (_nativeFilterItems$fo3 = nativeFilterItems[formFilter == null ? void 0 : formFilter.filterType]) != null ? _nativeFilterItems$fo3 : {};
  // @ts-ignore
  const enableNoResults = !!((_nativeFilterItem$val = nativeFilterItem.value) != null && _nativeFilterItem$val.enableNoResults);
  const hasMetrics = hasColumn && !!metrics.length;
  const hasFilledDataset = !hasDataset || datasetId && ((formFilter == null ? void 0 : formFilter.column) || !hasColumn);
  const hasAdditionalFilters = FILTERS_WITH_ADHOC_FILTERS.includes(formFilter == null ? void 0 : formFilter.filterType);
  const isCascadingFilter = CASCADING_FILTERS.includes(formFilter == null ? void 0 : formFilter.filterType);
  const isDataDirty = (_formFilter$isDataDir = formFilter == null ? void 0 : formFilter.isDataDirty) != null ? _formFilter$isDataDir : true;
  const setNativeFilterFieldValuesWrapper = (values) => {
    setNativeFilterFieldValues(form, filterId, values);
    setError('');
    forceUpdate();
  };
  const setErrorWrapper = (error) => {
    setNativeFilterFieldValues(form, filterId, {
      defaultValueQueriesData: null });

    setError(error);
    forceUpdate();
  };
  const refreshHandler = (0,react.useCallback)((force = false) => {var _formFilter$dataset4, _formFilter$dataset5;
    if (!hasDataset || !(formFilter != null && (_formFilter$dataset4 = formFilter.dataset) != null && _formFilter$dataset4.value)) {
      forceUpdate();
      return;
    }
    const formData = (0,utils/* getFormData */.zi)({
      datasetId: formFilter == null ? void 0 : (_formFilter$dataset5 = formFilter.dataset) == null ? void 0 : _formFilter$dataset5.value,
      groupby: formFilter == null ? void 0 : formFilter.column,
      ...formFilter });

    setNativeFilterFieldValuesWrapper({
      defaultValueQueriesData: null,
      isDataDirty: false });

    (0,chartAction.getChartDataRequest)({
      formData,
      force,
      requestParams: { dashboardId: 0 } }).

    then(({ response, json }) => {
      if ((0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.GLOBAL_ASYNC_QUERIES */.T.GLOBAL_ASYNC_QUERIES)) {
        // deal with getChartDataRequest transforming the response data
        const result = 'result' in json ? json.result[0] : json;
        if (response.status === 200) {
          setNativeFilterFieldValuesWrapper({
            defaultValueQueriesData: [result] });

        } else
        if (response.status === 202) {
          (0,asyncEvent/* waitForAsyncData */.YJ)(result).
          then((asyncResult) => {
            setNativeFilterFieldValuesWrapper({
              defaultValueQueriesData: asyncResult });

          }).
          catch((error) => {
            setError(error.message || error.error || (0,TranslatorSingleton.t)('Check configuration'));
          });
        } else
        {
          throw new Error(`Received unexpected response status (${response.status}) while fetching chart data`);
        }
      } else
      {
        setNativeFilterFieldValuesWrapper({
          defaultValueQueriesData: json.result });

      }
    }).
    catch((error) => {
      error.json().then((body) => {
        setErrorWrapper(body.message || error.statusText || (0,TranslatorSingleton.t)('Check configuration'));
      });
    });
  }, [filterId, forceUpdate, form, formFilter, hasDataset]);
  const newFormData = (0,utils/* getFormData */.zi)({
    datasetId,
    groupby: hasColumn ? formFilter == null ? void 0 : formFilter.column : undefined,
    ...formFilter });

  const [hasDefaultValue, isRequired, defaultValueTooltip, setHasDefaultValue] = useDefaultValue(formFilter, filterToEdit);
  const showDataset = !datasetId || datasetDetails || (formFilter == null ? void 0 : (_formFilter$dataset6 = formFilter.dataset) == null ? void 0 : _formFilter$dataset6.label);
  const formChanged = (0,react.useCallback)(() => {
    form.setFields([
    {
      name: 'changed',
      value: true }]);


  }, [form]);
  const updateFormValues = (0,react.useCallback)((values) => {
    setNativeFilterFieldValues(form, filterId, values);
    formChanged();
  }, [filterId, form, formChanged]);
  const hasPreFilter = !!(formFilter != null && formFilter.adhoc_filters) ||
  !!(formFilter != null && formFilter.time_range) ||
  !!(filterToEdit != null && (_filterToEdit$adhoc_f = filterToEdit.adhoc_filters) != null && _filterToEdit$adhoc_f.length) ||
  !!(filterToEdit != null && filterToEdit.time_range);
  const hasSorting = typeof (formFilter == null ? void 0 : (_formFilter$controlVa = formFilter.controlValues) == null ? void 0 : _formFilter$controlVa.sortAscending) === 'boolean' ||
  typeof (filterToEdit == null ? void 0 : (_filterToEdit$control = filterToEdit.controlValues) == null ? void 0 : _filterToEdit$control.sortAscending) === 'boolean';
  let sort = filterToEdit == null ? void 0 : (_filterToEdit$control2 = filterToEdit.controlValues) == null ? void 0 : _filterToEdit$control2.sortAscending;
  if (typeof (formFilter == null ? void 0 : (_formFilter$controlVa2 = formFilter.controlValues) == null ? void 0 : _formFilter$controlVa2.sortAscending) === 'boolean') {
    sort = formFilter.controlValues.sortAscending;
  }
  const showDefaultValue = !hasDataset ||
  !isDataDirty && hasFilledDataset ||
  !mainControlItems.groupby;
  const onSortChanged = (value) => {var _form$getFieldValue2;
    const previous = (_form$getFieldValue2 = form.getFieldValue('filters')) == null ? void 0 : _form$getFieldValue2[filterId].controlValues;
    setNativeFilterFieldValues(form, filterId, {
      controlValues: {
        ...previous,
        sortAscending: value } });


    forceUpdate();
  };
  const validatePreFilter = () => setTimeout(() => form.validateFields([
  ['filters', filterId, 'adhoc_filters'],
  ['filters', filterId, 'time_range']]),
  0);
  const hasTimeRange = (formFilter == null ? void 0 : formFilter.time_range) && formFilter.time_range !== 'No filter';
  const hasAdhoc = (formFilter == null ? void 0 : (_formFilter$adhoc_fil = formFilter.adhoc_filters) == null ? void 0 : _formFilter$adhoc_fil.length) > 0;
  const defaultToFirstItem = formFilter == null ? void 0 : (_formFilter$controlVa3 = formFilter.controlValues) == null ? void 0 : _formFilter$controlVa3.defaultToFirstItem;
  const hasAdvancedSection = (formFilter == null ? void 0 : formFilter.filterType) === 'filter_select' ||
  (formFilter == null ? void 0 : formFilter.filterType) === 'filter_range';
  const initialDefaultValue = (formFilter == null ? void 0 : formFilter.filterType) === (filterToEdit == null ? void 0 : filterToEdit.filterType) ?
  filterToEdit == null ? void 0 : filterToEdit.defaultDataMask :
  null;
  const preFilterValidator = () => {
    if (hasTimeRange || hasAdhoc) {
      return Promise.resolve();
    }
    return Promise.reject(new Error((0,TranslatorSingleton.t)('Pre-filter is required')));
  };
  const ParentSelect = ({ value, ...rest }) => {
    const parentId = value == null ? void 0 : value.value;
    const isParentRemoved = parentId && removedFilters[parentId];
    let options = parentFilterOptions;
    if (isParentRemoved) {
      options = [
      { label: (0,TranslatorSingleton.t)('(deleted)'), value: parentId },
      ...parentFilterOptions];

    }
    return (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, extends_default()({ ariaLabel: (0,TranslatorSingleton.t)('Parent filter'), placeholder: (0,TranslatorSingleton.t)('None'), options: options, allowClear: true, value: parentId }, rest));
  };
  (0,react.useEffect)(() => {
    if (datasetId) {
      FiltersConfigForm_cachedSupersetGet({
        endpoint: `/api/v1/dataset/${datasetId}` }).

      then((response) => {var _response$json, _response$json$result, _response$json2;
        setMetrics((_response$json = response.json) == null ? void 0 : (_response$json$result = _response$json.result) == null ? void 0 : _response$json$result.metrics);
        const dataset = (_response$json2 = response.json) == null ? void 0 : _response$json2.result;
        // modify the response to fit structure expected by AdhocFilterControl
        dataset.type = dataset.datasource_type;
        dataset.filter_select = true;
        setDatasetDetails(dataset);
      }).
      catch((response) => {
        (0,MessageToasts_actions/* addDangerToast */.Gb)(response.message);
      });
    }
  }, [datasetId]);
  (0,react.useImperativeHandle)(ref, () => ({
    changeTab(tab) {
      setActiveTabKey(tab);
    } }));

  useBackendFormUpdate(form, filterId);
  (0,react.useEffect)(() => {
    if (hasDataset && hasFilledDataset && hasDefaultValue && isDataDirty) {
      refreshHandler();
    }
  }, [
  hasDataset,
  hasFilledDataset,
  hasDefaultValue,
  isDataDirty,
  refreshHandler,
  showDataset]);

  (0,react.useEffect)(() => {
    // Run only once when the control items are available
    if (!activeFilterPanelKey && !isEmpty_default()(controlItems)) {
      const hasCheckedAdvancedControl = hasParentFilter ||
      hasPreFilter ||
      hasSorting ||
      Object.keys(controlItems).
      filter((key) => !BASIC_CONTROL_ITEMS.includes(key)).
      some((key) => controlItems[key].checked);
      setActiveFilterPanelKey(hasCheckedAdvancedControl ?
      [FilterPanels.basic.key, FilterPanels.advanced.key] :
      FilterPanels.basic.key);
    }
  }, [
  activeFilterPanelKey,
  hasParentFilter,
  hasPreFilter,
  hasSorting,
  controlItems]);

  const initiallyExcludedCharts = (0,react.useMemo)(() => {var _formFilter$dataset7;
    const excluded = [];
    if ((formFilter == null ? void 0 : (_formFilter$dataset7 = formFilter.dataset) == null ? void 0 : _formFilter$dataset7.value) === undefined) {
      return [];
    }
    Object.values(charts).forEach((chart) => {var _chart$formData, _loadedDatasets$chart, _formFilter$dataset8;
      const chartDatasetUid = (_chart$formData = chart.formData) == null ? void 0 : _chart$formData.datasource;
      if (chartDatasetUid === undefined) {
        return;
      }
      if (((_loadedDatasets$chart = loadedDatasets[chartDatasetUid]) == null ? void 0 : _loadedDatasets$chart.id) !== (formFilter == null ? void 0 : (_formFilter$dataset8 = formFilter.dataset) == null ? void 0 : _formFilter$dataset8.value)) {
        excluded.push(chart.id);
      }
    });
    return excluded;
  }, [
  JSON.stringify(charts),
  formFilter == null ? void 0 : (_formFilter$dataset9 = formFilter.dataset) == null ? void 0 : _formFilter$dataset9.value,
  JSON.stringify(loadedDatasets)]);

  (0,react.useEffect)(() => {
    // just removed, saving current form items for eventual undo
    if (isRemoved) {
      setUndoFormValues(formValues);
    }
  }, [isRemoved]);
  (0,react.useEffect)(() => {
    // the filter was just restored after undo
    if (undoFormValues && !isRemoved) {
      setNativeFilterFieldValues(form, filterId, undoFormValues);
      setUndoFormValues(null);
    }
  }, [formValues, filterId, form, isRemoved, undoFormValues]);
  if (isRemoved) {
    return (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_RemovedFilter, { onClick: () => restoreFilter(filterId) });
  }
  return (0,emotion_react_browser_esm.jsx)(StyledTabs, { activeKey: activeTabKey, onChange: (activeKey) => setActiveTabKey(activeKey), centered: true },
  (0,emotion_react_browser_esm.jsx)(TabPane, { tab: FiltersConfigForm_FilterTabs.configuration.name, key: FiltersConfigForm_FilterTabs.configuration.key, forceRender: true },
  (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_StyledContainer, null,
  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { name: ['filters', filterId, 'type'], hidden: true, initialValue: NativeFilterType.NATIVE_FILTER },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, null)),

  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { name: ['filters', filterId, 'name'], label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Filter name')), initialValue: filterToEdit == null ? void 0 : filterToEdit.name, rules: [{ required: !isRemoved, message: (0,TranslatorSingleton.t)('Name is required') }] },
  (0,emotion_react_browser_esm.jsx)(components/* Input */.II, getFiltersConfigModalTestId('name-input'))),

  (0,emotion_react_browser_esm.jsx)(StyledFormItem, extends_default()({ name: ['filters', filterId, 'filterType'], rules: [{ required: !isRemoved, message: (0,TranslatorSingleton.t)('Name is required') }], initialValue: (filterToEdit == null ? void 0 : filterToEdit.filterType) || 'filter_select', label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Filter Type')) }, getFiltersConfigModalTestId('filter-type')),
  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { ariaLabel: (0,TranslatorSingleton.t)('Filter type'), options: nativeFilterVizTypes.map((filterType) => {var _nativeFilterItems$fi, _FILTER_SUPPORTED_TYP, _FILTER_SUPPORTED_TYP2;
      // @ts-ignore
      const name = (_nativeFilterItems$fi = nativeFilterItems[filterType]) == null ? void 0 : _nativeFilterItems$fi.value.name;
      const mappedName = name ?
      FILTER_TYPE_NAME_MAPPING[name] :
      undefined;
      const isDisabled = ((_FILTER_SUPPORTED_TYP = FILTER_SUPPORTED_TYPES[filterType]) == null ? void 0 : _FILTER_SUPPORTED_TYP.length) === 1 && ((_FILTER_SUPPORTED_TYP2 =
      FILTER_SUPPORTED_TYPES[filterType]) == null ? void 0 : _FILTER_SUPPORTED_TYP2.includes(QueryResponse/* GenericDataType.TEMPORAL */.Z.TEMPORAL)) &&
      !doLoadedDatasetsHaveTemporalColumns;
      return {
        value: filterType,
        label: mappedName || name,
        customLabel: isDisabled ? (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Datasets do not contain a temporal column') },
        mappedName || name) :
        undefined,
        disabled: isDisabled };

    }), onChange: (value) => {
      setNativeFilterFieldValues(form, filterId, {
        filterType: value,
        defaultDataMask: null,
        column: null });

      forceUpdate();
    } }))),


  hasDataset && (0,emotion_react_browser_esm.jsx)(StyledRowContainer, null,
  showDataset ? (0,emotion_react_browser_esm.jsx)(StyledFormItem, extends_default()({ name: ['filters', filterId, 'dataset'], label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Dataset')), initialValue: datasetDetails ?
    {
      label: datasetDetails.table_name,
      value: datasetDetails.id } :

    undefined, rules: [
    { required: !isRemoved, message: (0,TranslatorSingleton.t)('Dataset is required') }] },
  getFiltersConfigModalTestId('datasource-input')),
  (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_DatasetSelect, { onChange: (value) => {
      // We need to reset the column when the dataset has changed
      if (value.value !== datasetId) {
        setNativeFilterFieldValues(form, filterId, {
          dataset: value,
          defaultDataMask: null,
          column: null });

      }
      forceUpdate();
    } })) :
  (0,emotion_react_browser_esm.jsx)(StyledFormItem, { label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Dataset')) },
  (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, { position: "inline-centered" })),

  hasDataset &&
  Object.keys(mainControlItems).map((key) => mainControlItems[key].element)),

  (0,emotion_react_browser_esm.jsx)(StyledCollapse, { activeKey: activeFilterPanelKey, onChange: (key) => setActiveFilterPanelKey(key), expandIconPosition: "right" },
  (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { forceRender: true, header: FilterPanels.basic.name, key: FilterPanels.basic.key },
  (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_CleanFormItem, { name: ['filters', filterId, 'defaultValueQueriesData'], hidden: true, initialValue: null }),
  (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_CleanFormItem, { name: ['filters', filterId, 'defaultValue'] },
  (0,emotion_react_browser_esm.jsx)(CollapsibleControl, { checked: hasDefaultValue, disabled: isRequired || defaultToFirstItem, initialValue: hasDefaultValue, title: (0,TranslatorSingleton.t)('Filter has default value'), tooltip: defaultValueTooltip, onChange: (value) => {
      setHasDefaultValue(value);
      formChanged();
    } },
  !isRemoved && (0,emotion_react_browser_esm.jsx)(StyledRowSubFormItem, { name: ['filters', filterId, 'defaultDataMask'], initialValue: initialDefaultValue, label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Default Value')), required: hasDefaultValue, rules: [
    {
      validator: () => {var _formFilter$defaultDa, _formFilter$defaultDa2;
        if (formFilter != null && (_formFilter$defaultDa = formFilter.defaultDataMask) != null && (_formFilter$defaultDa2 = _formFilter$defaultDa.filterState) != null && _formFilter$defaultDa2.value) {
          // requires managing the error as the DefaultValue
          // component does not use an Antdesign compatible input
          const formValidationFields = form.getFieldsError();
          setErroredFilters((prevErroredFilters) => {
            if (prevErroredFilters.length &&
            !formValidationFields.find((f) => f.errors.length > 0)) {
              return [];
            }
            return prevErroredFilters;
          });
          return Promise.resolve();
        }
        setErroredFilters((prevErroredFilters) => {
          if (prevErroredFilters.includes(filterId)) {
            return prevErroredFilters;
          }
          return [...prevErroredFilters, filterId];
        });
        return Promise.reject(new Error((0,TranslatorSingleton.t)('Default value is required')));
      } }] },


  error ? (0,emotion_react_browser_esm.jsx)(BasicErrorAlert, { title: (0,TranslatorSingleton.t)('Cannot load filter'), body: error, level: "error" }) : showDefaultValue ? (0,emotion_react_browser_esm.jsx)(DefaultValueContainer, null,
  (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_DefaultValue, { setDataMask: (dataMask) => {var _initialDefaultValue$, _dataMask$filterState;
      if (!isEqual_default()(initialDefaultValue == null ? void 0 : (_initialDefaultValue$ = initialDefaultValue.filterState) == null ? void 0 : _initialDefaultValue$.value, dataMask == null ? void 0 : (_dataMask$filterState = dataMask.filterState) == null ? void 0 : _dataMask$filterState.value)) {
        formChanged();
      }
      setNativeFilterFieldValues(form, filterId, {
        defaultDataMask: dataMask });

      form.validateFields([
      ['filters', filterId, 'defaultDataMask']]);

      forceUpdate();
    }, hasDefaultValue: hasDefaultValue, filterId: filterId, hasDataset: hasDataset, form: form, formData: newFormData, enableNoResults: enableNoResults }),
  hasDataset && datasetId && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Refresh the default values') },
  (0,emotion_react_browser_esm.jsx)(RefreshIcon, { onClick: () => refreshHandler(true) }))) :

  (0,TranslatorSingleton.t)('Fill all required fields to enable "Default Value"')))),



  Object.keys(controlItems).
  filter((key) => BASIC_CONTROL_ITEMS.includes(key)).
  map((key) => controlItems[key].element)),

  hasAdvancedSection && (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { forceRender: true, header: FilterPanels.advanced.name, key: FilterPanels.advanced.key },
  isCascadingFilter && (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_CleanFormItem, { name: ['filters', filterId, 'hierarchicalFilter'] },
  (0,emotion_react_browser_esm.jsx)(CollapsibleControl, { title: (0,TranslatorSingleton.t)('Filter is hierarchical'), initialValue: hasParentFilter, onChange: (checked) => {
      formChanged();
      if (checked) {
        // execute after render
        setTimeout(() => form.validateFields([
        ['filters', filterId, 'parentFilter']]),
        0);
      }
    } },
  (0,emotion_react_browser_esm.jsx)(StyledRowSubFormItem, { name: ['filters', filterId, 'parentFilter'], label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Parent filter')), initialValue: parentFilter, normalize: (value) => value ? { value } : undefined, required: true, rules: [
    {
      required: true,
      message: (0,TranslatorSingleton.t)('Parent filter is required') }] },


  (0,emotion_react_browser_esm.jsx)(ParentSelect, null)))),



  Object.keys(controlItems).
  filter((key) => !BASIC_CONTROL_ITEMS.includes(key)).
  map((key) => controlItems[key].element),
  hasDataset && hasAdditionalFilters && (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_CleanFormItem, { name: ['filters', filterId, 'preFilter'] },
  (0,emotion_react_browser_esm.jsx)(CollapsibleControl, { initialValue: hasPreFilter, title: (0,TranslatorSingleton.t)('Pre-filter available values'), onChange: (checked) => {
      formChanged();
      if (checked) {
        validatePreFilter();
      }
    } },
  (0,emotion_react_browser_esm.jsx)(StyledRowSubFormItem, { name: ['filters', filterId, 'adhoc_filters'], initialValue: filterToEdit == null ? void 0 : filterToEdit.adhoc_filters, required: true, rules: [
    {
      validator: preFilterValidator }] },


  (0,emotion_react_browser_esm.jsx)(AdhocFilterControl/* default */.Z, { columns: (datasetDetails == null ? void 0 : (_datasetDetails$colum = datasetDetails.columns) == null ? void 0 : _datasetDetails$colum.filter((c) => c.filterable)) || [], savedMetrics: (datasetDetails == null ? void 0 : datasetDetails.metrics) || [], datasource: datasetDetails, onChange: (filters) => {
      setNativeFilterFieldValues(form, filterId, {
        adhoc_filters: filters });

      forceUpdate();
      validatePreFilter();
    }, label: (0,emotion_react_browser_esm.jsx)("span", null,
    (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Pre-filter')),
    !hasTimeRange && (0,emotion_react_browser_esm.jsx)(StyledAsterisk, null)) })),


  showTimeRangePicker && (0,emotion_react_browser_esm.jsx)(StyledRowFormItem, { name: ['filters', filterId, 'time_range'], label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Time range')), initialValue: (filterToEdit == null ? void 0 : filterToEdit.time_range) || 'No filter', required: !hasAdhoc, rules: [
    {
      validator: preFilterValidator }] },


  (0,emotion_react_browser_esm.jsx)(DateFilterControl/* default */.Z, { name: "time_range", endpoints: ['inclusive', 'exclusive'], onChange: (timeRange) => {
      setNativeFilterFieldValues(form, filterId, {
        time_range: timeRange });

      forceUpdate();
      validatePreFilter();
    } })),

  hasTimeRange && (0,emotion_react_browser_esm.jsx)(StyledRowFormItem, { name: ['filters', filterId, 'granularity_sqla'], label: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Time column')), "\xA0",
    (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { placement: "top", tooltip: (0,TranslatorSingleton.t)('Optional time column if time range should apply to another column than the default time column') })),
    initialValue: filterToEdit == null ? void 0 : filterToEdit.granularity_sqla },
  (0,emotion_react_browser_esm.jsx)(ColumnSelect, { allowClear: true, form: form, formField: "granularity_sqla", filterId: filterId, filterValues: (column) => !!column.is_dttm, datasetId: datasetId, onChange: (column) => {
      // We need reset default value when when column changed
      setNativeFilterFieldValues(form, filterId, {
        granularity_sqla: column });

      forceUpdate();
    } })))),



  (formFilter == null ? void 0 : formFilter.filterType) !== 'filter_range' && (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_CleanFormItem, { name: ['filters', filterId, 'sortFilter'] },
  (0,emotion_react_browser_esm.jsx)(CollapsibleControl, { initialValue: hasSorting, title: (0,TranslatorSingleton.t)('Sort filter values'), onChange: (checked) => {
      onSortChanged(checked || undefined);
      formChanged();
    } },
  (0,emotion_react_browser_esm.jsx)(StyledRowFormItem, { name: [
    'filters',
    filterId,
    'controlValues',
    'sortAscending'],
    initialValue: sort, label: (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Sort type')) },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio.Group */.Y.Group, { onChange: (value) => {
      onSortChanged(value.target.value);
    } },
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: true }, (0,TranslatorSingleton.t)('Sort ascending')),
  (0,emotion_react_browser_esm.jsx)(Radio/* Radio */.Y, { value: false }, (0,TranslatorSingleton.t)('Sort descending')))),


  hasMetrics && (0,emotion_react_browser_esm.jsx)(StyledRowSubFormItem, { name: ['filters', filterId, 'sortMetric'], initialValue: filterToEdit == null ? void 0 : filterToEdit.sortMetric, label: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(StyledLabel, null, (0,TranslatorSingleton.t)('Sort Metric')), "\xA0",
    (0,emotion_react_browser_esm.jsx)(InfoTooltipWithTrigger/* InfoTooltipWithTrigger */.V, { placement: "top", tooltip: (0,TranslatorSingleton.t)('If a metric is specified, sorting will be done based on the metric value') })) },

  (0,emotion_react_browser_esm.jsx)(src_components/* Select */.P, { allowClear: true, ariaLabel: (0,TranslatorSingleton.t)('Sort metric'), name: "sortMetric", options: metrics.map((metric) => {var _metric$verbose_name;return {
        value: metric.metric_name,
        label: (_metric$verbose_name = metric.verbose_name) != null ? _metric$verbose_name : metric.metric_name };}),
    onChange: (value) => {
      if (value !== undefined) {
        setNativeFilterFieldValues(form, filterId, {
          sortMetric: value });

        forceUpdate();
      }
    } }))))))),






  (0,emotion_react_browser_esm.jsx)(TabPane, { tab: FiltersConfigForm_FilterTabs.scoping.name, key: FiltersConfigForm_FilterTabs.scoping.key, forceRender: true },
  (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_FilterScope_FilterScope, { updateFormValues: updateFormValues, pathToFormValue: ['filters', filterId], forceUpdate: forceUpdate, filterScope: filterToEdit == null ? void 0 : filterToEdit.scope, formFilterScope: formFilter == null ? void 0 : formFilter.scope, formScopingType: formFilter == null ? void 0 : formFilter.scoping, initiallyExcludedCharts: initiallyExcludedCharts })));


};
/* harmony default export */ const FiltersConfigForm_FiltersConfigForm = (/*#__PURE__*/(0,react.forwardRef)(FiltersConfigForm));
// EXTERNAL MODULE: ./node_modules/lodash/findLastIndex.js
var findLastIndex = __webpack_require__(7436);
var findLastIndex_default = /*#__PURE__*/__webpack_require__.n(findLastIndex);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/state.ts



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
const useRemoveCurrentFilter = (removedFilters, currentFilterId, filterIds, setCurrentFilterId) => {
  (0,react.useEffect)(() => {
    // if the currently viewed filter is fully removed, change to another tab
    const currentFilterRemoved = removedFilters[currentFilterId];
    if (currentFilterRemoved && !currentFilterRemoved.isPending) {
      const nextFilterIndex = findLastIndex_default()(filterIds, (id) => !removedFilters[id] && id !== currentFilterId);
      if (nextFilterIndex !== -1)
      setCurrentFilterId(filterIds[nextFilterIndex]);
    }
  }, [currentFilterId, removedFilters, filterIds]);
};
const useOpenModal = (isOpen, addFilter, createNewOnOpen) => {
  const wasOpen = (0,usePrevious/* usePrevious */.D)(isOpen);
  // if this is a "create" modal rather than an "edit" modal,
  // add a filter on modal open
  (0,react.useEffect)(() => {
    if (createNewOnOpen && isOpen && !wasOpen) {
      addFilter();
    }
  }, [createNewOnOpen, isOpen, wasOpen, addFilter]);
};
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FiltersConfigModal/FiltersConfigModal.tsx
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













const StyledModalWrapper = (0,style/* styled */.iK)(Modal/* StyledModal */.o)`
  min-width: 700px;
  .ant-modal-body {
    padding: 0px;
  }
`;
const StyledModalBody = style/* styled.div */.iK.div`
  display: flex;
  height: 700px;
  flex-direction: row;
  .filters-list {
    width: ${({ theme }) => theme.gridUnit * 50}px;
    overflow: auto;
  }
`;
const StyledForm = (0,style/* styled */.iK)(components/* Form */.l0)`
  width: 100%;
`;
const FILTERS_CONFIG_MODAL_TEST_ID = 'filters-config-modal';
const getFiltersConfigModalTestId = (0,testUtils/* testWithId */.Q)(FILTERS_CONFIG_MODAL_TEST_ID);
const CASCADING_FILTERS = ['filter_select'];
/**
 * This is the modal to configure all the dashboard-native filters.
 * Manages modal-level state, such as what filters are in the list,
 * and which filter is currently being edited.
 *
 * Calls the `save` callback with the new FilterConfiguration object
 * when the user saves the filters.
 */
function FiltersConfigModal({ isOpen, initialFilterId, createNewOnOpen, onSave, onCancel }) {
  const [form] = components/* Form.useForm */.l0.useForm();
  const configFormRef = (0,react.useRef)();
  // the filter config from redux state, this does not change until modal is closed.
  const filterConfig = useFilterConfiguration();
  const filterConfigMap = useFilterConfigMap();
  // new filter ids belong to filters have been added during
  // this configuration session, and only exist in the form state until we submit.
  const [newFilterIds, setNewFilterIds] = (0,react.useState)([]);
  // store ids of filters that have been removed with the time they were removed
  // so that we can disappear them after a few secs.
  // filters are still kept in state until form is submitted.
  const [removedFilters, setRemovedFilters] = (0,react.useState)({});
  const [saveAlertVisible, setSaveAlertVisible] = (0,react.useState)(false);
  // The full ordered set of ((original + new) - completely removed) filter ids
  // Use this as the canonical list of what filters are being configured!
  // This includes filter ids that are pending removal, so check for that.
  const filterIds = (0,react.useMemo)(() => uniq_default()([...(0,FiltersConfigModal_utils/* getFilterIds */.QN)(filterConfig), ...newFilterIds]).filter((id) => {var _removedFilters$id;return !removedFilters[id] || ((_removedFilters$id = removedFilters[id]) == null ? void 0 : _removedFilters$id.isPending);}), [filterConfig, newFilterIds, removedFilters]);
  // open the first filter in the list to start
  const initialCurrentFilterId = initialFilterId != null ? initialFilterId : filterIds[0];
  const [currentFilterId, setCurrentFilterId] = (0,react.useState)(initialCurrentFilterId);
  const [erroredFilters, setErroredFilters] = (0,react.useState)([]);
  // the form values are managed by the antd form, but we copy them to here
  // so that we can display them (e.g. filter titles in the tab headers)
  const [formValues, setFormValues] = (0,react.useState)({
    filters: {} });

  const unsavedFiltersIds = newFilterIds.filter((id) => !removedFilters[id]);
  // brings back a filter that was previously removed ("Undo")
  const restoreFilter = (id) => {
    const removal = removedFilters[id];
    // gotta clear the removal timeout to prevent the filter from getting deleted
    if (removal != null && removal.isPending)
    clearTimeout(removal.timerId);
    setRemovedFilters((current) => ({ ...current, [id]: null }));
  };
  // generates a new filter id and appends it to the newFilterIds
  const addFilter = (0,react.useCallback)(() => {
    const newFilterId = (0,FiltersConfigModal_utils/* generateFilterId */.W6)();
    setNewFilterIds([...newFilterIds, newFilterId]);
    setCurrentFilterId(newFilterId);
    setSaveAlertVisible(false);
  }, [newFilterIds, setCurrentFilterId]);
  useOpenModal(isOpen, addFilter, createNewOnOpen);
  useRemoveCurrentFilter(removedFilters, currentFilterId, filterIds, setCurrentFilterId);
  const handleTabEdit = (0,FiltersConfigModal_utils/* createHandleTabEdit */.zt)(setRemovedFilters, setSaveAlertVisible, addFilter);
  // After this, it should be as if the modal was just opened fresh.
  // Called when the modal is closed.
  const resetForm = () => {
    setNewFilterIds([]);
    setCurrentFilterId(initialCurrentFilterId);
    setRemovedFilters({});
    setSaveAlertVisible(false);
    setFormValues({ filters: {} });
    form.setFieldsValue({ changed: false });
    setErroredFilters([]);
  };
  const getFilterTitle = (id) => {var _formValues$filters$i, _filterConfigMap$id;return ((_formValues$filters$i = formValues.filters[id]) == null ? void 0 : _formValues$filters$i.name) || ((_filterConfigMap$id =
    filterConfigMap[id]) == null ? void 0 : _filterConfigMap$id.name) ||
    (0,TranslatorSingleton.t)('[untitled]');};
  const getParentFilters = (id) => filterIds.
  filter((filterId) => filterId !== id && !removedFilters[filterId]).
  filter((filterId) => {var _filterConfigMap$filt;return CASCADING_FILTERS.includes(formValues.filters[filterId] ?
    formValues.filters[filterId].filterType : (_filterConfigMap$filt =
    filterConfigMap[filterId]) == null ? void 0 : _filterConfigMap$filt.filterType);}).
  map((id) => ({
    id,
    title: getFilterTitle(id) }));

  const cleanDeletedParents = (values) => {
    Object.keys(filterConfigMap).forEach((key) => {var _filter$cascadeParent;
      const filter = filterConfigMap[key];
      const parentId = (_filter$cascadeParent = filter.cascadeParentIds) == null ? void 0 : _filter$cascadeParent[0];
      if (parentId && removedFilters[parentId]) {
        filter.cascadeParentIds = [];
      }
    });
    const filters = values == null ? void 0 : values.filters;
    if (filters) {
      Object.keys(filters).forEach((key) => {var _filter$parentFilter;
        const filter = filters[key];
        const parentId = (_filter$parentFilter = filter.parentFilter) == null ? void 0 : _filter$parentFilter.value;
        if (parentId && removedFilters[parentId]) {
          filter.parentFilter = undefined;
        }
      });
    }
  };
  const handleErroredFilters = (0,react.useCallback)(() => {
    // managing left pane errored filters indicators
    const formValidationFields = form.getFieldsError();
    const erroredFiltersIds = [];
    formValidationFields.forEach((field) => {
      const filterId = field.name[1];
      if (field.errors.length > 0 && !erroredFiltersIds.includes(filterId)) {
        erroredFiltersIds.push(filterId);
      }
    });
    // no form validation issues found, resets errored filters
    if (!erroredFiltersIds.length && erroredFilters.length > 0) {
      setErroredFilters([]);
      return;
    }
    // form validation issues found, sets errored filters
    if (erroredFiltersIds.length > 0 &&
    !isEqual_default()(sortBy_default()(erroredFilters), sortBy_default()(erroredFiltersIds))) {
      setErroredFilters(erroredFiltersIds);
    }
  }, [form, erroredFilters]);
  const handleSave = async () => {
    const values = await (0,FiltersConfigModal_utils/* validateForm */.G$)(form, currentFilterId, filterConfigMap, filterIds, removedFilters, setCurrentFilterId);
    handleErroredFilters();
    if (values) {
      cleanDeletedParents(values);
      (0,FiltersConfigModal_utils/* createHandleSave */.GA)(filterConfigMap, filterIds, removedFilters, onSave, values)();
      resetForm();
    } else
    {
      configFormRef.current.changeTab('configuration');
    }
  };
  const handleConfirmCancel = () => {
    resetForm();
    onCancel();
  };
  const handleCancel = () => {
    const changed = form.getFieldValue('changed');
    if (unsavedFiltersIds.length > 0 || form.isFieldsTouched() || changed) {
      setSaveAlertVisible(true);
    } else
    {
      handleConfirmCancel();
    }
  };
  const onValuesChange = (0,react.useMemo)(() => debounce_default()((changes, values) => {
    if (changes.filters) {
      if (Object.values(changes.filters).some((filter) => filter.name != null)) {
        // we only need to set this if a name changed
        setFormValues(values);
      }
      handleErroredFilters();
    }
    setSaveAlertVisible(false);
  }, components_constants/* SLOW_DEBOUNCE */.M), [handleErroredFilters]);
  (0,react.useEffect)(() => {
    setErroredFilters((prevErroredFilters) => prevErroredFilters.filter((f) => !removedFilters[f]));
  }, [removedFilters]);
  return (0,emotion_react_browser_esm.jsx)(StyledModalWrapper, { visible: isOpen, maskClosable: false, title: (0,TranslatorSingleton.t)('Filters configuration and scoping'), width: "50%", destroyOnClose: true, onCancel: handleCancel, onOk: handleSave, centered: true, footer: (0,emotion_react_browser_esm.jsx)(Footer_Footer, { onDismiss: () => setSaveAlertVisible(false), onCancel: handleCancel, handleSave: handleSave, canSave: !erroredFilters.length, saveAlertVisible: saveAlertVisible, onConfirmCancel: handleConfirmCancel }) },
  (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
  (0,emotion_react_browser_esm.jsx)(StyledModalBody, null,
  (0,emotion_react_browser_esm.jsx)(StyledForm, { preserve: false, form: form, onValuesChange: onValuesChange, layout: "vertical" },
  (0,emotion_react_browser_esm.jsx)(FiltersConfigModal_FilterTabs, { erroredFilters: erroredFilters, onEdit: handleTabEdit, onChange: setCurrentFilterId, getFilterTitle: getFilterTitle, currentFilterId: currentFilterId, filterIds: filterIds, removedFilters: removedFilters, restoreFilter: restoreFilter },
  (id) => (0,emotion_react_browser_esm.jsx)(FiltersConfigForm_FiltersConfigForm, { ref: configFormRef, form: form, filterId: id, filterToEdit: filterConfigMap[id], removedFilters: removedFilters, restoreFilter: restoreFilter, parentFilters: getParentFilters(id), setErroredFilters: setErroredFilters }))))));





}
;// CONCATENATED MODULE: ./src/dashboard/components/CrossFilterScopingModal/CrossFilterScopingModal.tsx
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









const CrossFilterScopingModal = ({ isOpen, chartId, onClose }) => {var _chartConfig$chartId, _chartConfig$chartId$;
  const dispatch = (0,es/* useDispatch */.I0)();
  const [form] = components/* Form.useForm */.l0.useForm();
  const chartConfig = (0,es/* useSelector */.v9)(({ dashboardInfo }) => {var _dashboardInfo$metada;return dashboardInfo == null ? void 0 : (_dashboardInfo$metada = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada.chart_configuration;});
  const scope = chartConfig == null ? void 0 : (_chartConfig$chartId = chartConfig[chartId]) == null ? void 0 : (_chartConfig$chartId$ = _chartConfig$chartId.crossFilters) == null ? void 0 : _chartConfig$chartId$.scope;
  const handleSave = () => {
    dispatch((0,dashboardInfo/* setChartConfiguration */.Aw)({
      ...chartConfig,
      [chartId]: {
        id: chartId,
        crossFilters: { scope: form.getFieldValue('scope') } } }));


    onClose();
  };
  return (0,emotion_react_browser_esm.jsx)(Modal/* StyledModal */.o, { visible: isOpen, maskClosable: false, title: (0,TranslatorSingleton.t)('Cross Filter Scoping'), width: "55%", destroyOnClose: true, onCancel: onClose, onOk: handleSave, centered: true, footer: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "cancel", buttonStyle: "secondary", onClick: onClose },
    (0,TranslatorSingleton.t)('Cancel')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { key: "submit", buttonStyle: "primary", onClick: handleSave },
    (0,TranslatorSingleton.t)('Save'))) },


  (0,emotion_react_browser_esm.jsx)(StyledForm, { preserve: false, form: form, layout: "vertical" },
  (0,emotion_react_browser_esm.jsx)(CrossFilterScopingModal_CrossFilterScopingForm, { form: form, scope: scope, chartId: chartId })));


};
/* harmony default export */ const CrossFilterScopingModal_CrossFilterScopingModal = (CrossFilterScopingModal);
// EXTERNAL MODULE: ./src/explore/components/controls/ViewQueryModal.tsx
var ViewQueryModal = __webpack_require__(15423);
;// CONCATENATED MODULE: ./src/dashboard/components/SliceHeaderControls/index.tsx
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













const SliceHeaderControls_MENU_KEYS = {
  CROSS_FILTER_SCOPING: 'cross_filter_scoping',
  DOWNLOAD_AS_IMAGE: 'download_as_image',
  EXPLORE_CHART: 'explore_chart',
  EXPORT_CSV: 'export_csv',
  EXPORT_FULL_CSV: 'export_full_csv',
  FORCE_REFRESH: 'force_refresh',
  RESIZE_LABEL: 'resize_label',
  TOGGLE_CHART_DESCRIPTION: 'toggle_chart_description',
  VIEW_QUERY: 'view_query' };

const VerticalDotsContainer = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit / 4}px
    ${({ theme }) => theme.gridUnit * 1.5}px;

  .dot {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;
const RefreshTooltip = style/* styled.div */.iK.div`
  height: auto;
  margin: ${({ theme }) => theme.gridUnit}px 0;
  color: ${({ theme }) => theme.colors.grayscale.base};
  line-height: ${({ theme }) => theme.typography.sizes.m * 1.5}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SliceHeaderControls_SCREENSHOT_NODE_SELECTOR = '.dashboard-component-chart-holder';
const VerticalDotsTrigger = () => (0,emotion_react_browser_esm.jsx)(VerticalDotsContainer, null,
(0,emotion_react_browser_esm.jsx)("span", { className: "dot" }),
(0,emotion_react_browser_esm.jsx)("span", { className: "dot" }),
(0,emotion_react_browser_esm.jsx)("span", { className: "dot" }));

class SliceHeaderControls extends react.PureComponent {
  constructor(props) {
    super(props);
    this.toggleControls = this.toggleControls.bind(this);
    this.refreshChart = this.refreshChart.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.state = {
      showControls: false,
      showCrossFilterScopingModal: false };

  }
  refreshChart() {
    if (this.props.updatedDttm) {
      this.props.forceRefresh(this.props.slice.slice_id, this.props.dashboardId);
    }
  }
  toggleControls() {
    this.setState((prevState) => ({
      showControls: !prevState.showControls }));

  }
  handleMenuClick({ key, domEvent }) {
    switch (key) {
      case SliceHeaderControls_MENU_KEYS.FORCE_REFRESH:
        this.refreshChart();
        break;
      case SliceHeaderControls_MENU_KEYS.CROSS_FILTER_SCOPING:
        this.setState({ showCrossFilterScopingModal: true });
        break;
      case SliceHeaderControls_MENU_KEYS.TOGGLE_CHART_DESCRIPTION:
        // eslint-disable-next-line no-unused-expressions
        this.props.toggleExpandSlice &&
        this.props.toggleExpandSlice(this.props.slice.slice_id);
        break;
      case SliceHeaderControls_MENU_KEYS.EXPLORE_CHART:
        // eslint-disable-next-line no-unused-expressions
        this.props.logExploreChart &&
        this.props.logExploreChart(this.props.slice.slice_id);
        break;
      case SliceHeaderControls_MENU_KEYS.EXPORT_CSV:
        // eslint-disable-next-line no-unused-expressions
        this.props.exportCSV && this.props.exportCSV(this.props.slice.slice_id);
        break;
      case SliceHeaderControls_MENU_KEYS.RESIZE_LABEL:
        this.props.handleToggleFullSize();
        break;
      case SliceHeaderControls_MENU_KEYS.EXPORT_FULL_CSV:
        // eslint-disable-next-line no-unused-expressions
        this.props.exportFullCSV &&
        this.props.exportFullCSV(this.props.slice.slice_id);
        break;
      case SliceHeaderControls_MENU_KEYS.DOWNLOAD_AS_IMAGE:{
          // menu closes with a delay, we need to hide it manually,
          // so that we don't capture it on the screenshot
          const menu = document.querySelector('.ant-dropdown:not(.ant-dropdown-hidden)');
          menu.style.visibility = 'hidden';
          (0,downloadAsImage/* default */.Z)(SliceHeaderControls_SCREENSHOT_NODE_SELECTOR, this.props.slice.slice_name)(domEvent).then(() => {
            menu.style.visibility = 'visible';
          });
          break;
        }
      default:
        break;}

  }
  render() {var _slice$form_data;
    const { slice, isFullSize, componentId, cachedDttm = [], updatedDttm = null, addSuccessToast = () => {}, addDangerToast = () => {}, supersetCanShare = false, isCached = [] } = this.props;
    const crossFilterItems = (0,ChartMetadataRegistrySingleton/* default */.Z)().items;
    const isTable = slice.viz_type === 'table';
    const isCrossFilter = Object.entries(crossFilterItems)
    // @ts-ignore
    .filter(([, { value }]) => {var _value$behaviors;return (_value$behaviors = value.behaviors) == null ? void 0 : _value$behaviors.includes(Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART);}).
    find(([key]) => key === slice.viz_type);
    const canEmitCrossFilter = (_slice$form_data = slice.form_data) == null ? void 0 : _slice$form_data.emit_filter;
    const cachedWhen = (cachedDttm || []).map((itemCachedDttm) => moment_default().utc(itemCachedDttm).fromNow());
    const updatedWhen = updatedDttm ? moment_default().utc(updatedDttm).fromNow() : '';
    const getCachedTitle = (itemCached) => {
      if (itemCached) {
        return (0,TranslatorSingleton.t)('Cached %s', cachedWhen);
      }
      if (updatedWhen) {
        return (0,TranslatorSingleton.t)('Fetched %s', updatedWhen);
      }
      return '';
    };
    const refreshTooltipData = [...new Set(isCached.map(getCachedTitle) || '')];
    // If all queries have same cache time we can unit them to one
    const refreshTooltip = refreshTooltipData.map((item, index) => (0,emotion_react_browser_esm.jsx)("div", { key: `tooltip-${index}` },
    refreshTooltipData.length > 1 ?
    `${(0,TranslatorSingleton.t)('Query')} ${index + 1}: ${item}` :
    item));

    const resizeLabel = isFullSize ? (0,TranslatorSingleton.t)('Minimize chart') : (0,TranslatorSingleton.t)('Maximize chart');
    const menu = (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, { onClick: this.handleMenuClick, selectable: false },
    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.FORCE_REFRESH, disabled: this.props.chartStatus === 'loading', style: { height: 'auto', lineHeight: 'initial' } },
    (0,TranslatorSingleton.t)('Force refresh'),
    (0,emotion_react_browser_esm.jsx)(RefreshTooltip, null,
    refreshTooltip)),



    (0,emotion_react_browser_esm.jsx)(components/* Menu.Divider */.v2.Divider, null),

    slice.description && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.TOGGLE_CHART_DESCRIPTION },
    (0,TranslatorSingleton.t)('Toggle chart description')),


    this.props.supersetCanExplore && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.EXPLORE_CHART },
    (0,emotion_react_browser_esm.jsx)("a", { href: this.props.exploreUrl, rel: "noopener noreferrer" },
    (0,TranslatorSingleton.t)('View chart in Explore'))),



    this.props.supersetCanExplore && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.VIEW_QUERY },
    (0,emotion_react_browser_esm.jsx)(ModalTrigger/* default */.Z, { triggerNode: (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('View query')), modalTitle: (0,TranslatorSingleton.t)('View query'), modalBody: (0,emotion_react_browser_esm.jsx)(ViewQueryModal/* default */.Z, { latestQueryFormData: this.props.formData }), draggable: true, resizable: true, responsive: true })),


    supersetCanShare && (0,emotion_react_browser_esm.jsx)(menu_ShareMenuItems, { url: getDashboardUrl({
        pathname: window.location.pathname,
        filters: (0,activeDashboardFilters/* getActiveFilters */.De)(),
        hash: componentId }),
      copyMenuItemTitle: (0,TranslatorSingleton.t)('Copy chart URL'), emailMenuItemTitle: (0,TranslatorSingleton.t)('Share chart by email'), emailSubject: (0,TranslatorSingleton.t)('Superset chart'), emailBody: (0,TranslatorSingleton.t)('Check out this chart: '), addSuccessToast: addSuccessToast, addDangerToast: addDangerToast }),

    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.RESIZE_LABEL }, resizeLabel),

    (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.DOWNLOAD_AS_IMAGE },
    (0,TranslatorSingleton.t)('Download as image')),


    this.props.slice.viz_type !== 'filter_box' &&
    this.props.supersetCanCSV && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.EXPORT_CSV }, (0,TranslatorSingleton.t)('Export CSV')),

    this.props.slice.viz_type !== 'filter_box' &&
    (0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.ALLOW_FULL_CSV_EXPORT */.T.ALLOW_FULL_CSV_EXPORT) &&
    this.props.supersetCanCSV &&
    isTable && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.EXPORT_FULL_CSV },
    (0,TranslatorSingleton.t)('Export full CSV')),


    (0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.DASHBOARD_CROSS_FILTERS */.T.DASHBOARD_CROSS_FILTERS) &&
    isCrossFilter &&
    canEmitCrossFilter && (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { key: SliceHeaderControls_MENU_KEYS.CROSS_FILTER_SCOPING },
    (0,TranslatorSingleton.t)('Cross-filter scoping')));


    return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)(CrossFilterScopingModal_CrossFilterScopingModal, { chartId: slice.slice_id, isOpen: this.state.showCrossFilterScopingModal, onClose: () => this.setState({ showCrossFilterScopingModal: false }) }),
    isFullSize && (0,emotion_react_browser_esm.jsx)(Icons/* default.FullscreenExitOutlined */.Z.FullscreenExitOutlined, { style: { fontSize: 22 }, onClick: () => {
        this.props.handleToggleFullSize();
      } }),
    (0,emotion_react_browser_esm.jsx)(components/* NoAnimationDropdown */.$i, { overlay: menu, trigger: ['click'], placement: "bottomRight", getPopupContainer: (triggerNode) => triggerNode.closest(SliceHeaderControls_SCREENSHOT_NODE_SELECTOR) },
    (0,emotion_react_browser_esm.jsx)("span", { id: `slice_${slice.slice_id}-controls`, role: "button", "aria-label": "More Options" },
    (0,emotion_react_browser_esm.jsx)(VerticalDotsTrigger, null))));



  }}

/* harmony default export */ const components_SliceHeaderControls = (SliceHeaderControls);
// EXTERNAL MODULE: ./node_modules/lodash/uniqWith.js
var uniqWith = __webpack_require__(87185);
var uniqWith_default = /*#__PURE__*/__webpack_require__.n(uniqWith);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js
// This icon file is generated automatically.
var CheckCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
/* harmony default export */ const asn_CheckCircleFilled = (CheckCircleFilled);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckCircleFilled_CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_CheckCircleFilled
  }));
};

CheckCircleFilled_CheckCircleFilled.displayName = 'CheckCircleFilled';
/* harmony default export */ const icons_CheckCircleFilled = (react.forwardRef(CheckCircleFilled_CheckCircleFilled));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js
// This icon file is generated automatically.
var ExclamationCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
/* harmony default export */ const asn_ExclamationCircleFilled = (ExclamationCircleFilled);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ExclamationCircleFilled_ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_ExclamationCircleFilled
  }));
};

ExclamationCircleFilled_ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
/* harmony default export */ const icons_ExclamationCircleFilled = (react.forwardRef(ExclamationCircleFilled_ExclamationCircleFilled));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MinusCircleFilled.js
// This icon file is generated automatically.
var MinusCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z" } }] }, "name": "minus-circle", "theme": "filled" };
/* harmony default export */ const asn_MinusCircleFilled = (MinusCircleFilled);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MinusCircleFilled.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MinusCircleFilled_MinusCircleFilled = function MinusCircleFilled(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_MinusCircleFilled
  }));
};

MinusCircleFilled_MinusCircleFilled.displayName = 'MinusCircleFilled';
/* harmony default export */ const icons_MinusCircleFilled = (react.forwardRef(MinusCircleFilled_MinusCircleFilled));
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
;// CONCATENATED MODULE: ./src/dashboard/components/FiltersBadge/Styles.tsx
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

const Pill = style/* styled.div */.iK.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.grayscale.light5};
  background: ${({ theme }) => theme.colors.grayscale.base};
  border-radius: 1em;
  vertical-align: text-top;
  padding: ${({ theme }) => `${theme.gridUnit}px ${theme.gridUnit * 2}px`};
  font-size: ${({ theme }) => theme.typography.sizes.m}px;
  font-weight: bold;
  min-width: 1em;
  min-height: 1em;
  line-height: 1em;
  vertical-align: middle;
  white-space: nowrap;

  svg {
    position: relative;
    top: -2px;
    color: ${({ theme }) => theme.colors.grayscale.light5};
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.grayscale.dark1};
  }

  &.has-cross-filters {
    background: ${({ theme }) => theme.colors.primary.base};
    &:hover {
      background: ${({ theme }) => theme.colors.primary.dark1};
    }
  }

  &.has-incompatible-filters {
    color: ${({ theme }) => theme.colors.grayscale.dark2};
    background: ${({ theme }) => theme.colors.alert.base};
    &:hover {
      background: ${({ theme }) => theme.colors.alert.dark1};
    }
    svg {
      color: ${({ theme }) => theme.colors.grayscale.dark2};
    }
  }

  &.filters-inactive {
    color: ${({ theme }) => theme.colors.grayscale.light5};
    background: ${({ theme }) => theme.colors.grayscale.light1};
    padding: ${({ theme }) => theme.gridUnit}px;
    text-align: center;
    height: 22px;
    width: 22px;

    &:hover {
      background: ${({ theme }) => theme.colors.grayscale.base};
    }
  }
`;
const Title = style/* styled.span */.iK.span`
  position: relative;
  margin-right: ${({ theme }) => theme.gridUnit}px;
  font-weight: ${({ bold, theme }) => {
  if (bold)
  return theme.typography.weights.bold;
  return 'auto';
}};
  color: ${({ color, theme }) => color || theme.colors.grayscale.light5};
  display: flex;
  align-items: center;
  & > * {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const ItemIcon = style/* styled.i */.iK.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -${({ theme }) => theme.gridUnit * 5}px;
`;
const Item = style/* styled.button */.iK.button`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  width: 100%;

  &::-moz-focus-inner {
    border: 0;
  }

  & i svg {
    color: transparent;
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }

  &:hover i svg {
    color: inherit;
  }
`;
const Reset = style/* styled.div */.iK.div`
  margin: 0 -${({ theme }) => theme.gridUnit * 4}px;
`;
const Indent = style/* styled.div */.iK.div`
  padding-left: ${({ theme }) => theme.gridUnit * 6}px;
  margin: -${({ theme }) => theme.gridUnit * 3}px 0;
`;
const Panel = style/* styled.div */.iK.div`
  min-width: 200px;
  max-width: 300px;
  overflow-x: hidden;
`;
const FilterValue = style/* styled.div */.iK.div`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
  color: ${({ theme }) => theme.colors.grayscale.light5};
`;
const FilterIndicatorText = style/* styled.div */.iK.div`
  ${({ theme }) => `
  padding-top: ${theme.gridUnit * 3}px;
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
  color: ${theme.colors.grayscale.light5};
  `}
`;
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(76570);
// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__(14670);
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/utils/index.ts
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



const generateFiltersSetId = () => `FILTERS_SET-${shortid_default().generate()}`;
const APPLY_FILTERS_HINT = (0,TranslatorSingleton.t)('Please apply filter changes');
const getFilterValueForDisplay = (value) => {
  if (value === null || value === undefined) {
    return '';
  }
  if (typeof value === 'string' || typeof value === 'number') {
    return `${value}`;
  }
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return (0,TranslatorSingleton.t)('Unknown value');
};
const findExistingFilterSet = ({ filterSetFilterValues, dataMaskSelected }) => filterSetFilterValues.find(({ dataMask: dataMaskFromFilterSet = {} }) => {
  const dataMaskSelectedEntries = Object.entries(dataMaskSelected);
  return dataMaskSelectedEntries.every(([id, filterFromSelectedFilters]) => {var _dataMaskFromFilterSe;
    const isEqual = (0,reduxUtils/* areObjectsEqual */.JB)(filterFromSelectedFilters.filterState, dataMaskFromFilterSet == null ? void 0 : (_dataMaskFromFilterSe = dataMaskFromFilterSet[id]) == null ? void 0 : _dataMaskFromFilterSe.filterState);
    const hasSamePropsNumber = dataMaskSelectedEntries.length ===
    Object.keys(dataMaskFromFilterSet != null ? dataMaskFromFilterSet : {}).length;
    return isEqual && hasSamePropsNumber;
  });
});
;// CONCATENATED MODULE: ./src/dashboard/components/FiltersBadge/FilterIndicator/index.tsx
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




const FilterIndicator = ({ indicator: { column, name, value, path = [] }, onClick = () => {}, text }) => {
  const resultValue = getFilterValueForDisplay(value);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(Item, { onClick: () => onClick([...path, `LABEL-${column}`]) },
  (0,emotion_react_browser_esm.jsx)(Title, { bold: true },
  (0,emotion_react_browser_esm.jsx)(ItemIcon, null,
  (0,emotion_react_browser_esm.jsx)(SearchOutlined/* default */.Z, null)),

  name,
  resultValue ? ': ' : ''),

  (0,emotion_react_browser_esm.jsx)(FilterValue, null, resultValue)),

  text && (0,emotion_react_browser_esm.jsx)(FilterIndicatorText, null, text));

};
/* harmony default export */ const FiltersBadge_FilterIndicator = (FilterIndicator);
;// CONCATENATED MODULE: ./src/dashboard/components/FiltersBadge/DetailsPanel/index.tsx
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










const DetailsPanelPopover = ({ appliedCrossFilterIndicators = [], appliedIndicators = [], incompatibleIndicators = [], unsetIndicators = [], onHighlightFilterSource, children }) => {
  const [visible, setVisible] = (0,react.useState)(false);
  const theme = (0,style/* useTheme */.Fg)();
  const activeTabs = (0,es/* useSelector */.v9)((state) => {var _state$dashboardState;return (_state$dashboardState = state.dashboardState) == null ? void 0 : _state$dashboardState.activeTabs;});
  // we don't need to clean up useEffect, setting { once: true } removes the event listener after handle function is called
  (0,react.useEffect)(() => {
    if (visible) {
      window.addEventListener('resize', () => setVisible(false), {
        once: true });

    }
  }, [visible]);
  // if tabs change, popover doesn't close automatically
  (0,react.useEffect)(() => {
    setVisible(false);
  }, [activeTabs]);
  const getDefaultActivePanel = () => {
    const result = [];
    if (appliedCrossFilterIndicators.length) {
      result.push('appliedCrossFilters');
    }
    if (appliedIndicators.length) {
      result.push('applied');
    }
    if (incompatibleIndicators.length) {
      result.push('incompatible');
    }
    if (result.length) {
      return result;
    }
    return ['unset'];
  };
  const [activePanels, setActivePanels] = (0,react.useState)(() => [
  ...getDefaultActivePanel()]);

  function handlePopoverStatus(isOpen) {
    setVisible(isOpen);
    // every time the popover opens, make sure the most relevant panel is active
    if (isOpen) {
      setActivePanels(getDefaultActivePanel());
    }
  }
  function handleActivePanelChange(panels) {
    // need to convert to an array so that handlePopoverStatus will work
    if (typeof panels === 'string') {
      setActivePanels([panels]);
    } else
    {
      setActivePanels(panels);
    }
  }
  const indicatorKey = (indicator) => `${indicator.column} - ${indicator.name}`;
  const content = (0,emotion_react_browser_esm.jsx)(Panel, null,
  (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.Global, { styles: /*#__PURE__*/(0,emotion_react_browser_esm.css)(".filterStatusPopover{.ant-popover-inner{background-color:",


    theme.colors.grayscale.dark2, "cc;.ant-popover-inner-content{padding-top:0;padding-bottom:0;}}&.ant-popover-placement-bottom,&.ant-popover-placement-bottomLeft,&.ant-popover-placement-bottomRight{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",









    theme.colors.grayscale.dark2, "cc;border-left-color:",
    theme.colors.grayscale.dark2, "cc;}}&.ant-popover-placement-top,&.ant-popover-placement-topLeft,&.ant-popover-placement-topRight{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",






    theme.colors.grayscale.dark2, "cc;border-right-color:",
    theme.colors.grayscale.dark2, "cc;}}&.ant-popover-placement-left,&.ant-popover-placement-leftTop,&.ant-popover-placement-leftBottom{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",






    theme.colors.grayscale.dark2, "cc;border-right-color:",
    theme.colors.grayscale.dark2, "cc;}}&.ant-popover-placement-right,&.ant-popover-placement-rightTop,&.ant-popover-placement-rightBottom{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",






    theme.colors.grayscale.dark2, "cc;border-left-color:",
    theme.colors.grayscale.dark2, "cc;}}&.ant-popover{color:",



    theme.colors.grayscale.light4, ";z-index:99;}}" + ( true ? "" : 0),  true ? "" : 0) }),




  (0,emotion_react_browser_esm.jsx)(Reset, null,
  (0,emotion_react_browser_esm.jsx)(Collapse/* default */.Z, { ghost: true, light: true, activeKey: activePanels, onChange: handleActivePanelChange },
  appliedCrossFilterIndicators.length ? (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { key: "appliedCrossFilters", header: (0,emotion_react_browser_esm.jsx)(Title, { bold: true, color: theme.colors.primary.light1 },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.CursorTarget */.Z.CursorTarget, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ fill: theme.colors.primary.light1 },  true ? "" : 0,  true ? "" : 0), iconSize: "xl" }),
    (0,TranslatorSingleton.t)('Applied Cross Filters (%d)', appliedCrossFilterIndicators.length)) },

  (0,emotion_react_browser_esm.jsx)(Indent, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ paddingBottom: theme.gridUnit * 3 },  true ? "" : 0,  true ? "" : 0) },
  appliedCrossFilterIndicators.map((indicator) => (0,emotion_react_browser_esm.jsx)(FiltersBadge_FilterIndicator, { key: indicatorKey(indicator), indicator: indicator, onClick: onHighlightFilterSource })))) :

  null,
  appliedIndicators.length ? (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { key: "applied", header: (0,emotion_react_browser_esm.jsx)(Title, { bold: true, color: theme.colors.success.base },
    (0,emotion_react_browser_esm.jsx)(icons_CheckCircleFilled, null), ' ',
    (0,TranslatorSingleton.t)('Applied Filters (%d)', appliedIndicators.length)) },

  (0,emotion_react_browser_esm.jsx)(Indent, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ paddingBottom: theme.gridUnit * 3 },  true ? "" : 0,  true ? "" : 0) },
  appliedIndicators.map((indicator) => (0,emotion_react_browser_esm.jsx)(FiltersBadge_FilterIndicator, { key: indicatorKey(indicator), indicator: indicator, onClick: onHighlightFilterSource })))) :

  null,
  incompatibleIndicators.length ? (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { key: "incompatible", header: (0,emotion_react_browser_esm.jsx)(Title, { bold: true, color: theme.colors.alert.base },
    (0,emotion_react_browser_esm.jsx)(icons_ExclamationCircleFilled, null), ' ',
    (0,TranslatorSingleton.t)('Incompatible Filters (%d)', incompatibleIndicators.length)) },

  (0,emotion_react_browser_esm.jsx)(Indent, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ paddingBottom: theme.gridUnit * 3 },  true ? "" : 0,  true ? "" : 0) },
  incompatibleIndicators.map((indicator) => (0,emotion_react_browser_esm.jsx)(FiltersBadge_FilterIndicator, { key: indicatorKey(indicator), indicator: indicator, onClick: onHighlightFilterSource })))) :

  null,
  unsetIndicators.length ? (0,emotion_react_browser_esm.jsx)(Collapse/* default.Panel */.Z.Panel, { key: "unset", header: (0,emotion_react_browser_esm.jsx)(Title, { bold: true, color: theme.colors.grayscale.light1 },
    (0,emotion_react_browser_esm.jsx)(icons_MinusCircleFilled, null), ' ',
    (0,TranslatorSingleton.t)('Unset Filters (%d)', unsetIndicators.length)),
    disabled: !unsetIndicators.length },
  (0,emotion_react_browser_esm.jsx)(Indent, { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ paddingBottom: theme.gridUnit * 3 },  true ? "" : 0,  true ? "" : 0) },
  unsetIndicators.map((indicator) => (0,emotion_react_browser_esm.jsx)(FiltersBadge_FilterIndicator, { key: indicatorKey(indicator), indicator: indicator, onClick: onHighlightFilterSource })))) :

  null)));



  return (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { overlayClassName: "filterStatusPopover", content: content, visible: visible, onVisibleChange: handlePopoverStatus, placement: "bottom", trigger: "click" },
  children);

};
/* harmony default export */ const DetailsPanel = (DetailsPanelPopover);
// EXTERNAL MODULE: ./src/explore/constants.ts
var explore_constants = __webpack_require__(69856);
;// CONCATENATED MODULE: ./src/dataMask/types.ts
var DataMaskType;
(function (DataMaskType) {
  DataMaskType["NativeFilters"] = "nativeFilters";
  DataMaskType["CrossFilters"] = "crossFilters";
})(DataMaskType || (DataMaskType = {}));
;// CONCATENATED MODULE: ./src/dashboard/components/FiltersBadge/selectors.ts
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






var IndicatorStatus;
(function (IndicatorStatus) {
  IndicatorStatus["Unset"] = "UNSET";
  IndicatorStatus["Applied"] = "APPLIED";
  IndicatorStatus["Incompatible"] = "INCOMPATIBLE";
  IndicatorStatus["CrossFilterApplied"] = "CROSS_FILTER_APPLIED";
})(IndicatorStatus || (IndicatorStatus = {}));
const TIME_GRANULARITY_FIELDS = new Set(Object.values(explore_constants/* TIME_FILTER_MAP */.i2));
const extractLabel = (filter) => {
  if (filter != null && filter.label) {
    return filter.label;
  }
  if (filter != null && filter.value) {
    return (0,ensureIsArray/* default */.Z)(filter == null ? void 0 : filter.value).join(', ');
  }
  return null;
};
const selectIndicatorValue = (columnKey, filter, datasource) => {
  const values = filter.columns[columnKey];
  const arrValues = Array.isArray(values) ? values : [values];
  if (values == null ||
  filter.isDateFilter && values === explore_constants/* NO_TIME_RANGE */.vM ||
  arrValues.length === 0) {
    return [];
  }
  if (filter.isDateFilter && TIME_GRANULARITY_FIELDS.has(columnKey)) {
    const timeGranularityMap = ((columnKey === explore_constants/* TIME_FILTER_MAP.time_grain_sqla */.i2.time_grain_sqla ?
    datasource.time_grain_sqla :
    datasource.granularity) || []).reduce((map, [key, value]) => ({
      ...map,
      [key]: value }),
    {});
    return arrValues.map((value) => timeGranularityMap[value] || value);
  }
  return arrValues;
};
const selectIndicatorsForChartFromFilter = (chartId, filter, filterDataSource, appliedColumns, rejectedColumns) => {
  // filters can be applied (if the filter is compatible with the datasource)
  // or rejected (if the filter is incompatible)
  // or the status can be unknown (if the filter has calculated parameters that we can't analyze)
  const getStatus = (column, filter) => {
    if (appliedColumns.has(column) && filter.columns[column])
    return IndicatorStatus.Applied;
    if (rejectedColumns.has(column))
    return IndicatorStatus.Incompatible;
    return IndicatorStatus.Unset;
  };
  return Object.keys(filter.columns).
  filter((column) => (0,activeDashboardFilters/* getChartIdsInFilterScope */.Q1)({
    filterScope: filter.scopes[column] }).
  includes(chartId)).
  map((column) => ({
    column,
    name: filter.labels[column] || column,
    value: selectIndicatorValue(column, filter, filterDataSource),
    status: getStatus(column, filter),
    path: filter.directPathToFilter }));

};
const getAppliedColumns = (chart) => {var _chart$queriesRespons, _chart$queriesRespons2;return new Set(((chart == null ? void 0 : (_chart$queriesRespons = chart.queriesResponse) == null ? void 0 : (_chart$queriesRespons2 = _chart$queriesRespons[0]) == null ? void 0 : _chart$queriesRespons2.applied_filters) || []).map((filter) => filter.column));};
const getRejectedColumns = (chart) => {var _chart$queriesRespons3, _chart$queriesRespons4;return new Set(((chart == null ? void 0 : (_chart$queriesRespons3 = chart.queriesResponse) == null ? void 0 : (_chart$queriesRespons4 = _chart$queriesRespons3[0]) == null ? void 0 : _chart$queriesRespons4.rejected_filters) || []).map((filter) => filter.column));};
const cachedIndicatorsForChart = {};
const cachedDashboardFilterDataForChart = {};
// inspects redux state to find what the filter indicators should be shown for a given chart
const selectIndicatorsForChart = (chartId, filters, datasources, chart) => {
  // for now we only need to know which columns are compatible/incompatible,
  // so grab the columns from the applied/rejected filters
  const appliedColumns = getAppliedColumns(chart);
  const rejectedColumns = getRejectedColumns(chart);
  const matchingFilters = Object.values(filters).filter((filter) => filter.chartId !== chartId);
  const matchingDatasources = Object.entries(datasources).
  filter(([key]) => matchingFilters.find((filter) => filter.datasourceId === key)).
  map(([, datasource]) => datasource);
  const cachedFilterData = cachedDashboardFilterDataForChart[chartId];
  if (cachedIndicatorsForChart[chartId] &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFilterData == null ? void 0 : cachedFilterData.appliedColumns, appliedColumns) &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFilterData == null ? void 0 : cachedFilterData.rejectedColumns, rejectedColumns) &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFilterData == null ? void 0 : cachedFilterData.matchingFilters, matchingFilters) &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFilterData == null ? void 0 : cachedFilterData.matchingDatasources, matchingDatasources)) {
    return cachedIndicatorsForChart[chartId];
  }
  const indicators = matchingFilters.reduce((acc, filter) => acc.concat(selectIndicatorsForChartFromFilter(chartId, filter, datasources[filter.datasourceId] || {}, appliedColumns, rejectedColumns)), []);
  indicators.sort((a, b) => a.name.localeCompare(b.name));
  cachedIndicatorsForChart[chartId] = indicators;
  cachedDashboardFilterDataForChart[chartId] = {
    appliedColumns,
    rejectedColumns,
    matchingFilters,
    matchingDatasources };

  return indicators;
};
const cachedNativeIndicatorsForChart = {};
const cachedNativeFilterDataForChart = {};
const defaultChartConfig = {};
const selectNativeIndicatorsForChart = (nativeFilters, dataMask, chartId, chart, dashboardLayout, chartConfiguration = defaultChartConfig) => {
  const appliedColumns = getAppliedColumns(chart);
  const rejectedColumns = getRejectedColumns(chart);
  const cachedFilterData = cachedNativeFilterDataForChart[chartId];
  if (cachedNativeIndicatorsForChart[chartId] &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFilterData == null ? void 0 : cachedFilterData.appliedColumns, appliedColumns) &&
  (0,reduxUtils/* areObjectsEqual */.JB)(cachedFilterData == null ? void 0 : cachedFilterData.rejectedColumns, rejectedColumns) &&
  (cachedFilterData == null ? void 0 : cachedFilterData.nativeFilters) === nativeFilters &&
  (cachedFilterData == null ? void 0 : cachedFilterData.dashboardLayout) === dashboardLayout &&
  (cachedFilterData == null ? void 0 : cachedFilterData.chartConfiguration) === chartConfiguration &&
  (cachedFilterData == null ? void 0 : cachedFilterData.dataMask) === dataMask) {
    return cachedNativeIndicatorsForChart[chartId];
  }
  const getStatus = ({ label, column, type = DataMaskType.NativeFilters }) => {
    // a filter is only considered unset if it's value is null
    const hasValue = label !== null;
    if (type === DataMaskType.CrossFilters && hasValue) {
      return IndicatorStatus.CrossFilterApplied;
    }
    if (!column && hasValue) {
      // Filter without datasource
      return IndicatorStatus.Applied;
    }
    if (column && rejectedColumns.has(column))
    return IndicatorStatus.Incompatible;
    if (column && appliedColumns.has(column) && hasValue) {
      return IndicatorStatus.Applied;
    }
    return IndicatorStatus.Unset;
  };
  let nativeFilterIndicators = [];
  if ((0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.DASHBOARD_NATIVE_FILTERS */.T.DASHBOARD_NATIVE_FILTERS)) {
    nativeFilterIndicators =
    nativeFilters &&
    Object.values(nativeFilters).
    filter((nativeFilter) => getTreeCheckedItems(nativeFilter.scope, dashboardLayout).some((layoutItem) => {var _dashboardLayout$layo, _dashboardLayout$layo2;return ((_dashboardLayout$layo = dashboardLayout[layoutItem]) == null ? void 0 : (_dashboardLayout$layo2 = _dashboardLayout$layo.meta) == null ? void 0 : _dashboardLayout$layo2.chartId) === chartId;})).
    map((nativeFilter) => {var _nativeFilter$targets, _nativeFilter$targets2, _dataMask$nativeFilte;
      const column = (_nativeFilter$targets = nativeFilter.targets[0]) == null ? void 0 : (_nativeFilter$targets2 = _nativeFilter$targets.column) == null ? void 0 : _nativeFilter$targets2.name;
      const filterState = (_dataMask$nativeFilte = dataMask[nativeFilter.id]) == null ? void 0 : _dataMask$nativeFilte.filterState;
      const label = extractLabel(filterState);
      return {
        column,
        name: nativeFilter.name,
        path: [nativeFilter.id],
        status: getStatus({ label, column }),
        value: label };

    });
  }
  let crossFilterIndicators = [];
  if ((0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.DASHBOARD_CROSS_FILTERS */.T.DASHBOARD_CROSS_FILTERS)) {
    crossFilterIndicators = Object.values(chartConfiguration).
    filter((chartConfig) => {var _chartConfig$crossFil;return getTreeCheckedItems(chartConfig == null ? void 0 : (_chartConfig$crossFil = chartConfig.crossFilters) == null ? void 0 : _chartConfig$crossFil.scope, dashboardLayout).some((layoutItem) => {var _dashboardLayout$layo3, _dashboardLayout$layo4;return ((_dashboardLayout$layo3 = dashboardLayout[layoutItem]) == null ? void 0 : (_dashboardLayout$layo4 = _dashboardLayout$layo3.meta) == null ? void 0 : _dashboardLayout$layo4.chartId) === chartId;});}).
    map((chartConfig) => {var _dataMask$chartConfig, _dashboardLayoutItem$, _dashboardLayoutItem$2;
      const filterState = (_dataMask$chartConfig = dataMask[chartConfig.id]) == null ? void 0 : _dataMask$chartConfig.filterState;
      const label = extractLabel(filterState);
      const filtersState = filterState == null ? void 0 : filterState.filters;
      const column = filtersState && Object.keys(filtersState)[0];
      const dashboardLayoutItem = Object.values(dashboardLayout).find((layoutItem) => {var _layoutItem$meta;return (layoutItem == null ? void 0 : (_layoutItem$meta = layoutItem.meta) == null ? void 0 : _layoutItem$meta.chartId) === chartConfig.id;});
      return {
        column,
        name: dashboardLayoutItem == null ? void 0 : (_dashboardLayoutItem$ = dashboardLayoutItem.meta) == null ? void 0 : _dashboardLayoutItem$.sliceName,
        path: [
        ...((_dashboardLayoutItem$2 = dashboardLayoutItem == null ? void 0 : dashboardLayoutItem.parents) != null ? _dashboardLayoutItem$2 : []),
        dashboardLayoutItem == null ? void 0 : dashboardLayoutItem.id],

        status: getStatus({
          label,
          type: DataMaskType.CrossFilters }),

        value: label };

    }).
    filter((filter) => filter.status === IndicatorStatus.CrossFilterApplied);
  }
  const indicators = crossFilterIndicators.concat(nativeFilterIndicators);
  cachedNativeIndicatorsForChart[chartId] = indicators;
  cachedNativeFilterDataForChart[chartId] = {
    nativeFilters,
    dashboardLayout,
    chartConfiguration,
    dataMask,
    appliedColumns,
    rejectedColumns };

  return indicators;
};
;// CONCATENATED MODULE: ./src/dashboard/components/FiltersBadge/index.tsx
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










const sortByStatus = (indicators) => {
  const statuses = [
  IndicatorStatus.Applied,
  IndicatorStatus.Unset,
  IndicatorStatus.Incompatible];

  return indicators.sort((a, b) => statuses.indexOf(a.status) -
  statuses.indexOf(b.status));
};
const indicatorsInitialState = [];
const FiltersBadge = ({ chartId }) => {var _dashboardInfo$metada, _dashboardInfo$metada4;
  const dispatch = (0,es/* useDispatch */.I0)();
  const datasources = (0,es/* useSelector */.v9)((state) => state.datasources);
  const dashboardFilters = (0,es/* useSelector */.v9)((state) => state.dashboardFilters);
  const nativeFilters = (0,es/* useSelector */.v9)((state) => {var _state$nativeFilters;return (_state$nativeFilters = state.nativeFilters) == null ? void 0 : _state$nativeFilters.filters;});
  const dashboardInfo = (0,es/* useSelector */.v9)((state) => state.dashboardInfo);
  const charts = (0,es/* useSelector */.v9)((state) => state.charts);
  const present = (0,es/* useSelector */.v9)((state) => state.dashboardLayout.present);
  const dataMask = (0,es/* useSelector */.v9)((state) => state.dataMask);
  const [nativeIndicators, setNativeIndicators] = (0,react.useState)(indicatorsInitialState);
  const [dashboardIndicators, setDashboardIndicators] = (0,react.useState)(indicatorsInitialState);
  const onHighlightFilterSource = (0,react.useCallback)((path) => {
    dispatch((0,dashboardState/* setDirectPathToChild */.E2)(path));
  }, [dispatch]);
  const chart = charts[chartId];
  const prevChart = (0,usePrevious/* usePrevious */.D)(chart);
  const prevChartStatus = prevChart == null ? void 0 : prevChart.chartStatus;
  const prevDashboardFilters = (0,usePrevious/* usePrevious */.D)(dashboardFilters);
  const prevDatasources = (0,usePrevious/* usePrevious */.D)(datasources);
  const showIndicators = (chart == null ? void 0 : chart.chartStatus) && ['rendered', 'success'].includes(chart.chartStatus);
  (0,react.useEffect)(() => {
    if (!showIndicators && dashboardIndicators.length > 0) {
      setDashboardIndicators(indicatorsInitialState);
    } else
    if (prevChartStatus !== 'success') {var _chart$queriesRespons, _chart$queriesRespons2, _prevChart$queriesRes, _prevChart$queriesRes2, _chart$queriesRespons3, _chart$queriesRespons4, _prevChart$queriesRes3, _prevChart$queriesRes4;
      if ((chart == null ? void 0 : (_chart$queriesRespons = chart.queriesResponse) == null ? void 0 : (_chart$queriesRespons2 = _chart$queriesRespons[0]) == null ? void 0 : _chart$queriesRespons2.rejected_filters) !== (
      prevChart == null ? void 0 : (_prevChart$queriesRes = prevChart.queriesResponse) == null ? void 0 : (_prevChart$queriesRes2 = _prevChart$queriesRes[0]) == null ? void 0 : _prevChart$queriesRes2.rejected_filters) ||
      (chart == null ? void 0 : (_chart$queriesRespons3 = chart.queriesResponse) == null ? void 0 : (_chart$queriesRespons4 = _chart$queriesRespons3[0]) == null ? void 0 : _chart$queriesRespons4.applied_filters) !== (
      prevChart == null ? void 0 : (_prevChart$queriesRes3 = prevChart.queriesResponse) == null ? void 0 : (_prevChart$queriesRes4 = _prevChart$queriesRes3[0]) == null ? void 0 : _prevChart$queriesRes4.applied_filters) ||
      dashboardFilters !== prevDashboardFilters ||
      datasources !== prevDatasources) {
        setDashboardIndicators(selectIndicatorsForChart(chartId, dashboardFilters, datasources, chart));
      }
    }
  }, [
  chart,
  chartId,
  dashboardFilters,
  dashboardIndicators.length,
  datasources,
  prevChart == null ? void 0 : prevChart.queriesResponse,
  prevChartStatus,
  prevDashboardFilters,
  prevDatasources,
  showIndicators]);

  const prevNativeFilters = (0,usePrevious/* usePrevious */.D)(nativeFilters);
  const prevDashboardLayout = (0,usePrevious/* usePrevious */.D)(present);
  const prevDataMask = (0,usePrevious/* usePrevious */.D)(dataMask);
  const prevChartConfig = (0,usePrevious/* usePrevious */.D)((_dashboardInfo$metada = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada.chart_configuration);
  (0,react.useEffect)(() => {
    if (!showIndicators && nativeIndicators.length > 0) {
      setNativeIndicators(indicatorsInitialState);
    } else
    if (prevChartStatus !== 'success') {var _chart$queriesRespons5, _chart$queriesRespons6, _prevChart$queriesRes5, _prevChart$queriesRes6, _chart$queriesRespons7, _chart$queriesRespons8, _prevChart$queriesRes7, _prevChart$queriesRes8, _dashboardInfo$metada2;
      if ((chart == null ? void 0 : (_chart$queriesRespons5 = chart.queriesResponse) == null ? void 0 : (_chart$queriesRespons6 = _chart$queriesRespons5[0]) == null ? void 0 : _chart$queriesRespons6.rejected_filters) !== (
      prevChart == null ? void 0 : (_prevChart$queriesRes5 = prevChart.queriesResponse) == null ? void 0 : (_prevChart$queriesRes6 = _prevChart$queriesRes5[0]) == null ? void 0 : _prevChart$queriesRes6.rejected_filters) ||
      (chart == null ? void 0 : (_chart$queriesRespons7 = chart.queriesResponse) == null ? void 0 : (_chart$queriesRespons8 = _chart$queriesRespons7[0]) == null ? void 0 : _chart$queriesRespons8.applied_filters) !== (
      prevChart == null ? void 0 : (_prevChart$queriesRes7 = prevChart.queriesResponse) == null ? void 0 : (_prevChart$queriesRes8 = _prevChart$queriesRes7[0]) == null ? void 0 : _prevChart$queriesRes8.applied_filters) ||
      nativeFilters !== prevNativeFilters ||
      present !== prevDashboardLayout ||
      dataMask !== prevDataMask ||
      prevChartConfig !== ((_dashboardInfo$metada2 = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada2.chart_configuration)) {var _dashboardInfo$metada3;
        setNativeIndicators(selectNativeIndicatorsForChart(nativeFilters, dataMask, chartId, chart, present, (_dashboardInfo$metada3 = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada3.chart_configuration));
      }
    }
  }, [
  chart,
  chartId, (_dashboardInfo$metada4 =
  dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada4.chart_configuration,
  dataMask,
  nativeFilters,
  nativeIndicators.length,
  present,
  prevChart == null ? void 0 : prevChart.queriesResponse,
  prevChartConfig,
  prevChartStatus,
  prevDashboardLayout,
  prevDataMask,
  prevNativeFilters,
  showIndicators]);

  const indicators = (0,react.useMemo)(() => uniqWith_default()(sortByStatus([...dashboardIndicators, ...nativeIndicators]), (ind1, ind2) => ind1.column === ind2.column &&
  ind1.name === ind2.name && (
  ind1.status !== IndicatorStatus.Applied ||
  ind2.status !== IndicatorStatus.Applied)), [dashboardIndicators, nativeIndicators]);
  const appliedCrossFilterIndicators = (0,react.useMemo)(() => indicators.filter((indicator) => indicator.status === IndicatorStatus.CrossFilterApplied), [indicators]);
  const appliedIndicators = (0,react.useMemo)(() => indicators.filter((indicator) => indicator.status === IndicatorStatus.Applied), [indicators]);
  const unsetIndicators = (0,react.useMemo)(() => indicators.filter((indicator) => indicator.status === IndicatorStatus.Unset), [indicators]);
  const incompatibleIndicators = (0,react.useMemo)(() => indicators.filter((indicator) => indicator.status === IndicatorStatus.Incompatible), [indicators]);
  if (!appliedCrossFilterIndicators.length &&
  !appliedIndicators.length &&
  !incompatibleIndicators.length &&
  !unsetIndicators.length) {
    return null;
  }
  const isInactive = !appliedCrossFilterIndicators.length &&
  !appliedIndicators.length &&
  !incompatibleIndicators.length;
  return (0,emotion_react_browser_esm.jsx)(DetailsPanel, { appliedCrossFilterIndicators: appliedCrossFilterIndicators, appliedIndicators: appliedIndicators, unsetIndicators: unsetIndicators, incompatibleIndicators: incompatibleIndicators, onHighlightFilterSource: onHighlightFilterSource },
  (0,emotion_react_browser_esm.jsx)(Pill, { className: classnames_default()('filter-counts', !!incompatibleIndicators.length && 'has-incompatible-filters', !!appliedCrossFilterIndicators.length && 'has-cross-filters', isInactive && 'filters-inactive') },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Filter */.Z.Filter, { iconSize: "m" }),
  !isInactive && (0,emotion_react_browser_esm.jsx)("span", null,
  appliedIndicators.length + appliedCrossFilterIndicators.length),

  incompatibleIndicators.length ? (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  ' ',
  (0,emotion_react_browser_esm.jsx)(Icons/* default.AlertSolid */.Z.AlertSolid, null),
  (0,emotion_react_browser_esm.jsx)("span", null,
  incompatibleIndicators.length)) :

  null));


};
/* harmony default export */ const components_FiltersBadge = (/*#__PURE__*/react.memo(FiltersBadge));
;// CONCATENATED MODULE: ./src/dashboard/components/SliceHeader/index.tsx
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










const annotationsLoading = (0,TranslatorSingleton.t)('Annotation layers are still loading.');
const annotationsError = (0,TranslatorSingleton.t)('One ore more annotation layers failed loading.');
const CrossFilterIcon = (0,style/* styled */.iK)(Icons/* default.CursorTarget */.Z.CursorTarget)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.base};
  height: 22px;
  width: 22px;
`;
const SliceHeader = ({ innerRef = null, forceRefresh = () => ({}), updateSliceName = () => ({}), toggleExpandSlice = () => ({}), logExploreChart = () => ({}), exploreUrl = '#', exportCSV = () => ({}), editMode = false, annotationQuery = {}, annotationError = {}, cachedDttm = null, updatedDttm = null, isCached = [], isExpanded = false, sliceName = '', supersetCanExplore = false, supersetCanShare = false, supersetCanCSV = false, sliceCanEdit = false, exportFullCSV, slice, componentId, dashboardId, addSuccessToast, addDangerToast, handleToggleFullSize, isFullSize, chartStatus, formData }) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  // TODO: change to indicator field after it will be implemented
  const crossFilterValue = (0,es/* useSelector */.v9)((state) => {var _state$dataMask$slice, _state$dataMask$slice2;return (_state$dataMask$slice = state.dataMask[slice == null ? void 0 : slice.slice_id]) == null ? void 0 : (_state$dataMask$slice2 = _state$dataMask$slice.filterState) == null ? void 0 : _state$dataMask$slice2.value;});
  const indicator = (0,react.useMemo)(() => ({
    value: crossFilterValue,
    name: (0,TranslatorSingleton.t)('Emitted values') }),
  [crossFilterValue]);
  return (0,emotion_react_browser_esm.jsx)("div", { className: "chart-header", ref: innerRef },
  (0,emotion_react_browser_esm.jsx)("div", { className: "header-title" },
  (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, { title: sliceName || (
    editMode ?
    '---' // this makes an empty title clickable
    : ''), canEdit: editMode, emptyText: "", onSaveTitle: updateSliceName, showTooltip: false }),
  !!Object.values(annotationQuery).length && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "annotations-loading-tooltip", placement: "top", title: annotationsLoading },
  (0,emotion_react_browser_esm.jsx)("i", { role: "img", "aria-label": annotationsLoading, className: "fa fa-refresh warning" })),

  !!Object.values(annotationError).length && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "annoation-errors-tooltip", placement: "top", title: annotationsError },
  (0,emotion_react_browser_esm.jsx)("i", { role: "img", "aria-label": annotationsError, className: "fa fa-exclamation-circle danger" }))),


  (0,emotion_react_browser_esm.jsx)("div", { className: "header-controls" },
  !editMode && (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  crossFilterValue && (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { placement: "top", title: (0,emotion_react_browser_esm.jsx)(FiltersBadge_FilterIndicator, { indicator: indicator, text: (0,TranslatorSingleton.t)('Click to clear emitted filters') }) },
  (0,emotion_react_browser_esm.jsx)(CrossFilterIcon, { onClick: () => dispatch((0,actions/* clearDataMask */.ze)(slice == null ? void 0 : slice.slice_id)) })),

  (0,emotion_react_browser_esm.jsx)(components_FiltersBadge, { chartId: slice.slice_id }),
  (0,emotion_react_browser_esm.jsx)(components_SliceHeaderControls, { slice: slice, isCached: isCached, isExpanded: isExpanded, cachedDttm: cachedDttm, updatedDttm: updatedDttm, toggleExpandSlice: toggleExpandSlice, forceRefresh: forceRefresh, logExploreChart: logExploreChart, exploreUrl: exploreUrl, exportCSV: exportCSV, exportFullCSV: exportFullCSV, supersetCanExplore: supersetCanExplore, supersetCanShare: supersetCanShare, supersetCanCSV: supersetCanCSV, sliceCanEdit: sliceCanEdit, componentId: componentId, dashboardId: dashboardId, addSuccessToast: addSuccessToast, addDangerToast: addDangerToast, handleToggleFullSize: handleToggleFullSize, isFullSize: isFullSize, chartStatus: chartStatus, formData: formData }))));



};
/* harmony default export */ const components_SliceHeader = (SliceHeader);
;// CONCATENATED MODULE: ./src/dashboard/components/MissingChart.jsx
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




const MissingChart_propTypes = {
  height: (prop_types_default()).number.isRequired };


function MissingChart({ height }) {
  return (
    (0,emotion_react_browser_esm.jsx)("div", { className: "missing-chart-container", style: { height: height + 20 } },
    (0,emotion_react_browser_esm.jsx)("div", { className: "missing-chart-body" },
    (0,TranslatorSingleton.t)(
    'There is no chart definition associated with this component, could it have been deleted?'),

    (0,emotion_react_browser_esm.jsx)("br", null),
    (0,emotion_react_browser_esm.jsx)("br", null),
    (0,TranslatorSingleton.t)('Delete this container and save to remove this message.'))));



}

MissingChart.propTypes = MissingChart_propTypes;
;// CONCATENATED MODULE: ./src/dashboard/util/getFilterValuesByFilterId.js
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


// input: { [id_column1]: values, [id_column2]: values }
// output: { column1: values, column2: values }
function getFilterValuesByFilterId({
  activeFilters = {},
  filterId })
{
  return Object.entries(activeFilters).reduce((map, entry) => {
    const [filterKey, { values }] = entry;
    const { chartId, column } = (0,getDashboardFilterKey/* getChartIdAndColumnFromFilterKey */._)(filterKey);
    if (chartId === filterId) {
      return {
        ...map,
        [column]: values };

    }
    return map;
  }, {});
}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Chart.jsx
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


















const Chart_propTypes = {
  id: (prop_types_default()).number.isRequired,
  componentId: (prop_types_default()).string.isRequired,
  dashboardId: (prop_types_default()).number.isRequired,
  width: (prop_types_default()).number.isRequired,
  height: (prop_types_default()).number.isRequired,
  updateSliceName: (prop_types_default()).func.isRequired,
  isComponentVisible: (prop_types_default()).bool,
  handleToggleFullSize: (prop_types_default()).func.isRequired,

  // from redux
  chart: propShapes/* chartPropShape.isRequired */.$6.isRequired,
  formData: (prop_types_default()).object.isRequired,
  labelColors: (prop_types_default()).object,
  datasource: (prop_types_default()).object,
  slice: propShapes/* slicePropShape.isRequired */.Rw.isRequired,
  sliceName: (prop_types_default()).string.isRequired,
  timeout: (prop_types_default()).number.isRequired,
  maxRows: (prop_types_default()).number.isRequired,
  // all active filter fields in dashboard
  filters: (prop_types_default()).object.isRequired,
  refreshChart: (prop_types_default()).func.isRequired,
  logEvent: (prop_types_default()).func.isRequired,
  toggleExpandSlice: (prop_types_default()).func.isRequired,
  changeFilter: (prop_types_default()).func.isRequired,
  setFocusedFilterField: (prop_types_default()).func.isRequired,
  unsetFocusedFilterField: (prop_types_default()).func.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  isExpanded: (prop_types_default()).bool.isRequired,
  isCached: (prop_types_default()).bool,
  supersetCanExplore: (prop_types_default()).bool.isRequired,
  supersetCanShare: (prop_types_default()).bool.isRequired,
  supersetCanCSV: (prop_types_default()).bool.isRequired,
  sliceCanEdit: (prop_types_default()).bool.isRequired,
  addSuccessToast: (prop_types_default()).func.isRequired,
  addDangerToast: (prop_types_default()).func.isRequired,
  ownState: (prop_types_default()).object,
  filterState: (prop_types_default()).object };


const Chart_defaultProps = {
  isCached: false,
  isComponentVisible: true };


// we use state + shouldComponentUpdate() logic to prevent perf-wrecking
// resizing across all slices on a dashboard on every update
const RESIZE_TIMEOUT = 350;
const SHOULD_UPDATE_ON_PROP_CHANGES = Object.keys(Chart_propTypes).filter(
(prop) =>
prop !== 'width' && prop !== 'height' && prop !== 'isComponentVisible');

const OVERFLOWABLE_VIZ_TYPES = new Set(['filter_box']);
const DEFAULT_HEADER_HEIGHT = 22;

const ChartOverlay = style/* styled.div */.iK.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

class Chart extends react.Component {
  constructor(props) {
    super(props);this.
























































































































    logExploreChart = () => {
      this.props.logEvent(LogUtils/* LOG_ACTIONS_EXPLORE_DASHBOARD_CHART */.oK, {
        slice_id: this.props.slice.slice_id,
        is_cached: this.props.isCached });

    };this.

    getChartUrl = () => (0,exploreUtils/* getExploreLongUrl */.vp)(this.props.formData, null, false);this.state = { width: props.width, height: props.height, descriptionHeight: 0 };this.changeFilter = this.changeFilter.bind(this);this.handleFilterMenuOpen = this.handleFilterMenuOpen.bind(this);this.handleFilterMenuClose = this.handleFilterMenuClose.bind(this);this.exportCSV = this.exportCSV.bind(this);this.exportFullCSV = this.exportFullCSV.bind(this);this.forceRefresh = this.forceRefresh.bind(this);this.resize = this.resize.bind(this);this.setDescriptionRef = this.setDescriptionRef.bind(this);this.setHeaderRef = this.setHeaderRef.bind(this);}shouldComponentUpdate(nextProps, nextState) {// this logic mostly pertains to chart resizing. we keep a copy of the dimensions in
    // state so that we can buffer component size updates and only update on the final call
    // which improves performance significantly
    if (nextState.width !== this.state.width || nextState.height !== this.state.height || nextState.descriptionHeight !== this.state.descriptionHeight || !isEqual_default()(nextProps.datasource, this.props.datasource)) {return true;} // allow chart update/re-render only if visible:
    // under selected tab or no tab layout
    if (nextProps.isComponentVisible) {if (nextProps.chart.triggerQuery) {return true;}if (nextProps.isFullSize !== this.props.isFullSize) {clearTimeout(this.resizeTimeout);this.resizeTimeout = setTimeout(this.resize, RESIZE_TIMEOUT);return false;}if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {clearTimeout(this.resizeTimeout);this.resizeTimeout = setTimeout(this.resize, RESIZE_TIMEOUT);}for (let i = 0; i < SHOULD_UPDATE_ON_PROP_CHANGES.length; i += 1) {const prop = SHOULD_UPDATE_ON_PROP_CHANGES[i]; // use deep objects equality comparison to prevent
        // unneccessary updates when objects references change
        if (!(0,reduxUtils/* areObjectsEqual */.JB)(nextProps[prop], this.props[prop])) {return true;}}} // `cacheBusterProp` is jected by react-hot-loader
    return this.props.cacheBusterProp !== nextProps.cacheBusterProp;}componentWillUnmount() {clearTimeout(this.resizeTimeout);}componentDidUpdate(prevProps) {if (this.props.isExpanded !== prevProps.isExpanded) {const descriptionHeight = this.props.isExpanded && this.descriptionRef ? this.descriptionRef.offsetHeight : 0; // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ descriptionHeight });}}getChartHeight() {const headerHeight = this.getHeaderHeight();return this.state.height - headerHeight - this.state.descriptionHeight;}getHeaderHeight() {return this.headerRef && this.headerRef.offsetHeight || DEFAULT_HEADER_HEIGHT;}setDescriptionRef(ref) {this.descriptionRef = ref;}setHeaderRef(ref) {this.headerRef = ref;}resize() {const { width, height } = this.props;this.setState(() => ({ width, height }));}changeFilter(newSelectedValues = {}) {this.props.logEvent(LogUtils/* LOG_ACTIONS_CHANGE_DASHBOARD_FILTER */.Qg, { id: this.props.chart.id, columns: Object.keys(newSelectedValues) });this.props.changeFilter(this.props.chart.id, newSelectedValues);}handleFilterMenuOpen(chartId, column) {this.props.setFocusedFilterField(chartId, column);}handleFilterMenuClose(chartId, column) {this.props.unsetFocusedFilterField(chartId, column);}exportCSV(isFullCSV = false) {this.props.logEvent(LogUtils/* LOG_ACTIONS_EXPORT_CSV_DASHBOARD_CHART */.PC, { slice_id: this.props.slice.slice_id, is_cached: this.props.isCached });(0,exploreUtils/* exportChart */.pe)({ formData: isFullCSV ? { ...this.props.formData, row_limit: this.props.maxRows } :
      this.props.formData,
      resultType: 'full',
      resultFormat: 'csv' });

  }

  exportFullCSV() {
    this.exportCSV(true);
  }

  forceRefresh() {
    this.props.logEvent(LogUtils/* LOG_ACTIONS_FORCE_REFRESH_CHART */.TD, {
      slice_id: this.props.slice.slice_id,
      is_cached: this.props.isCached });

    return this.props.refreshChart(
    this.props.chart.id,
    true,
    this.props.dashboardId);

  }

  render() {
    const {
      id,
      componentId,
      dashboardId,
      chart,
      slice,
      datasource,
      isExpanded,
      editMode,
      filters,
      formData,
      labelColors,
      updateSliceName,
      sliceName,
      toggleExpandSlice,
      timeout,
      supersetCanExplore,
      supersetCanShare,
      supersetCanCSV,
      sliceCanEdit,
      addSuccessToast,
      addDangerToast,
      ownState,
      filterState,
      handleToggleFullSize,
      isFullSize } =
    this.props;

    const { width } = this.state;
    // this prevents throwing in the case that a gridComponent
    // references a chart that is not associated with the dashboard
    if (!chart || !slice) {
      return (0,emotion_react_browser_esm.jsx)(MissingChart, { height: this.getChartHeight() });
    }

    const { queriesResponse, chartUpdateEndTime, chartStatus } = chart;
    const isLoading = chartStatus === 'loading';
    // eslint-disable-next-line camelcase
    const isCached = (queriesResponse == null ? void 0 : queriesResponse.map(({ is_cached }) => is_cached)) || [];
    const cachedDttm =
    // eslint-disable-next-line camelcase
    (queriesResponse == null ? void 0 : queriesResponse.map(({ cached_dttm }) => cached_dttm)) || [];
    const isOverflowable = OVERFLOWABLE_VIZ_TYPES.has(slice.viz_type);
    const initialValues = (0,activeDashboardFilters/* isFilterBox */.Z3)(id) ?
    getFilterValuesByFilterId({
      activeFilters: filters,
      filterId: id }) :

    {};
    return (
      (0,emotion_react_browser_esm.jsx)("div", {
        className: "chart-slice",

        "data-test-chart-id": id,
        "data-test-viz-type": slice.viz_type,
        "data-test-chart-name": slice.slice_name },

      (0,emotion_react_browser_esm.jsx)(components_SliceHeader, {
        innerRef: this.setHeaderRef,
        slice: slice,
        isExpanded: !!isExpanded,
        isCached: isCached,
        cachedDttm: cachedDttm,
        updatedDttm: chartUpdateEndTime,
        toggleExpandSlice: toggleExpandSlice,
        forceRefresh: this.forceRefresh,
        editMode: editMode,
        annotationQuery: chart.annotationQuery,
        logExploreChart: this.logExploreChart,
        exploreUrl: this.getChartUrl(),
        exportCSV: this.exportCSV,
        exportFullCSV: this.exportFullCSV,
        updateSliceName: updateSliceName,
        sliceName: sliceName,
        supersetCanExplore: supersetCanExplore,
        supersetCanShare: supersetCanShare,
        supersetCanCSV: supersetCanCSV,
        sliceCanEdit: sliceCanEdit,
        componentId: componentId,
        dashboardId: dashboardId,
        filters: filters,
        addSuccessToast: addSuccessToast,
        addDangerToast: addDangerToast,
        handleToggleFullSize: handleToggleFullSize,
        isFullSize: isFullSize,
        chartStatus: chart.chartStatus,
        formData: formData }),









      isExpanded && slice.description_markeddown &&
      (0,emotion_react_browser_esm.jsx)("div", {
        className: "slice_description bs-callout bs-callout-default",
        ref: this.setDescriptionRef
        // eslint-disable-next-line react/no-danger
        , dangerouslySetInnerHTML: { __html: slice.description_markeddown } }),



      (0,emotion_react_browser_esm.jsx)("div", {
        className: classnames_default()(
        'dashboard-chart',
        isOverflowable && 'dashboard-chart--overflowable') },


      isLoading &&
      (0,emotion_react_browser_esm.jsx)(ChartOverlay, {
        style: {
          width,
          height: this.getChartHeight() } }),




      (0,emotion_react_browser_esm.jsx)(ChartContainer/* default */.Z, {
        width: width,
        height: this.getChartHeight(),
        addFilter: this.changeFilter,
        onFilterMenuOpen: this.handleFilterMenuOpen,
        onFilterMenuClose: this.handleFilterMenuClose,
        annotationData: chart.annotationData,
        chartAlert: chart.chartAlert,
        chartId: id,
        chartStatus: chartStatus,
        datasource: datasource,
        dashboardId: dashboardId,
        initialValues: initialValues,
        formData: formData,
        labelColors: labelColors,
        ownState: ownState,
        filterState: filterState,
        queriesResponse: chart.queriesResponse,
        timeout: timeout,
        triggerQuery: chart.triggerQuery,
        vizType: slice.viz_type }))));




  }}


Chart.propTypes = Chart_propTypes;
Chart.defaultProps = Chart_defaultProps;
// EXTERNAL MODULE: ./src/dashboard/constants.ts
var dashboard_constants = __webpack_require__(9531);
;// CONCATENATED MODULE: ./src/dashboard/containers/Chart.jsx
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













const EMPTY_OBJECT = {};

function Chart_mapStateToProps(
{
  charts: chartQueries,
  dashboardInfo,
  dashboardState,
  dashboardLayout,
  dataMask,
  datasources,
  sliceEntities,
  nativeFilters,
  common },

ownProps)
{var _dashboardInfo$metada, _dashboardInfo$metada2, _dataMask$id, _dataMask$id2;
  const { id } = ownProps;
  const chart = chartQueries[id] || EMPTY_OBJECT;
  const datasource =
  chart && chart.form_data && datasources[chart.form_data.datasource] ||
  dashboard_constants/* PLACEHOLDER_DATASOURCE */.t;
  const { colorScheme, colorNamespace } = dashboardState;
  const labelColors = (dashboardInfo == null ? void 0 : (_dashboardInfo$metada = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada.label_colors) || {};
  // note: this method caches filters if possible to prevent render cascades
  const formData = getFormDataWithExtraFilters({
    layout: dashboardLayout.present,
    chart,
    // eslint-disable-next-line camelcase
    chartConfiguration: (_dashboardInfo$metada2 = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada2.chart_configuration,
    charts: chartQueries,
    filters: (0,activeDashboardFilters/* getAppliedFilterValues */._f)(id),
    colorScheme,
    colorNamespace,
    sliceId: id,
    nativeFilters,
    dataMask,
    labelColors });


  formData.dashboardId = dashboardInfo.id;

  return {
    chart,
    datasource,
    labelColors,
    slice: sliceEntities.slices[id],
    timeout: dashboardInfo.common.conf.SUPERSET_WEBSERVER_TIMEOUT,
    filters: (0,activeDashboardFilters/* getActiveFilters */.De)() || EMPTY_OBJECT,
    formData,
    editMode: dashboardState.editMode,
    isExpanded: !!dashboardState.expandedSlices[id],
    supersetCanExplore: !!dashboardInfo.superset_can_explore,
    supersetCanShare: !!dashboardInfo.superset_can_share,
    supersetCanCSV: !!dashboardInfo.superset_can_csv,
    sliceCanEdit: !!dashboardInfo.slice_can_edit,
    ownState: (_dataMask$id = dataMask[id]) == null ? void 0 : _dataMask$id.ownState,
    filterState: (_dataMask$id2 = dataMask[id]) == null ? void 0 : _dataMask$id2.filterState,
    maxRows: common.conf.SQL_MAX_ROW };

}

function Chart_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    updateComponents: actions_dashboardLayout/* updateComponents */.WZ,
    addSuccessToast: MessageToasts_actions/* addSuccessToast */.ws,
    addDangerToast: MessageToasts_actions/* addDangerToast */.Gb,
    toggleExpandSlice: dashboardState/* toggleExpandSlice */.WL,
    changeFilter: dashboardFilters/* changeFilter */.M6,
    setFocusedFilterField: dashboardState/* setFocusedFilterField */.GH,
    unsetFocusedFilterField: dashboardState/* unsetFocusedFilterField */.oY,
    refreshChart: chartAction.refreshChart,
    logEvent: logger_actions.logEvent },

  dispatch);

}

/* harmony default export */ const containers_Chart = ((0,es/* connect */.$j)(Chart_mapStateToProps, Chart_mapDispatchToProps)(Chart));
// EXTERNAL MODULE: ./src/components/CopyToClipboard/index.jsx
var CopyToClipboard = __webpack_require__(13433);
;// CONCATENATED MODULE: ./src/components/URLShortLinkButton/index.jsx
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








const URLShortLinkButton_propTypes = {
  url: (prop_types_default()).string,
  emailSubject: (prop_types_default()).string,
  emailContent: (prop_types_default()).string,
  addDangerToast: (prop_types_default()).func.isRequired,
  placement: prop_types_default().oneOf(['right', 'left', 'top', 'bottom']) };


class URLShortLinkButton extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortUrl: '' };

    this.onShortUrlSuccess = this.onShortUrlSuccess.bind(this);
    this.getCopyUrl = this.getCopyUrl.bind(this);
  }

  onShortUrlSuccess(shortUrl) {
    this.setState(() => ({
      shortUrl }));

  }

  getCopyUrl(e) {
    e.stopPropagation();
    (0,urlUtils/* getShortUrl */.O)(this.props.url).
    then(this.onShortUrlSuccess).
    catch(this.props.addDangerToast);
  }

  renderPopover() {
    const emailBody = (0,TranslatorSingleton.t)('%s%s', this.props.emailContent, this.state.shortUrl);
    return (
      (0,emotion_react_browser_esm.jsx)("div", { id: "shorturl-popover" },
      (0,emotion_react_browser_esm.jsx)(CopyToClipboard/* default */.Z, {
        text: this.state.shortUrl,
        copyNode:
        (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-clipboard", title: (0,TranslatorSingleton.t)('Copy to clipboard') }) }), "\xA0\xA0",



      (0,emotion_react_browser_esm.jsx)("a", {
        href: `mailto:?Subject=${this.props.emailSubject}%20&Body=${emailBody}` },

      (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-envelope" }))));



  }

  render() {
    return (
      (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, {
        trigger: "click",
        placement: this.props.placement,
        onClick: this.getCopyUrl,
        content: this.renderPopover() },

      (0,emotion_react_browser_esm.jsx)("span", {
        className: "short-link-trigger btn btn-default btn-sm",
        role: "button" },

      (0,emotion_react_browser_esm.jsx)("i", { className: "short-link-trigger fa fa-link" }), "\xA0")));




  }}


URLShortLinkButton.defaultProps = {
  url: window.location.href.substring(window.location.origin.length),
  placement: 'left',
  emailSubject: '',
  emailContent: '' };


URLShortLinkButton.propTypes = URLShortLinkButton_propTypes;

/* harmony default export */ const components_URLShortLinkButton = ((0,withToasts/* default */.Z)(URLShortLinkButton));
// EXTERNAL MODULE: ./src/dashboard/util/getLocationHash.ts
var getLocationHash = __webpack_require__(56967);
;// CONCATENATED MODULE: ./src/components/AnchorLink/index.jsx
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








const AnchorLink_propTypes = {
  anchorLinkId: (prop_types_default()).string.isRequired,
  filters: (prop_types_default()).object,
  showShortLinkButton: (prop_types_default()).bool,
  inFocus: (prop_types_default()).bool,
  placement: prop_types_default().oneOf(['right', 'left', 'top', 'bottom']) };


const AnchorLink_defaultProps = {
  inFocus: false,
  showShortLinkButton: false,
  placement: 'right',
  filters: {} };


class AnchorLink extends react.PureComponent {
  componentDidMount() {
    const hash = (0,getLocationHash/* default */.Z)();
    const { anchorLinkId } = this.props;

    if (hash && anchorLinkId === hash) {
      this.scrollToView();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { inFocus = false } = nextProps;
    if (inFocus) {
      this.scrollToView();
    }
  }

  scrollToView(delay = 0) {
    const { anchorLinkId } = this.props;
    const directLinkComponent = document.getElementById(anchorLinkId);
    if (directLinkComponent) {
      setTimeout(() => {
        directLinkComponent.scrollIntoView({
          block: 'center',
          behavior: 'smooth' });

      }, delay);
    }
  }

  render() {
    const {
      anchorLinkId,
      filters,
      showShortLinkButton,
      placement } =
    this.props;
    return (
      (0,emotion_react_browser_esm.jsx)("span", { className: "anchor-link-container", id: anchorLinkId },
      showShortLinkButton &&
      (0,emotion_react_browser_esm.jsx)(components_URLShortLinkButton, {
        url: getDashboardUrl({
          pathname: window.location.pathname,
          filters,
          hash: anchorLinkId }),

        emailSubject: (0,TranslatorSingleton.t)('Superset chart'),
        emailContent: (0,TranslatorSingleton.t)('Check out this chart in dashboard:'),
        placement: placement })));




  }}


AnchorLink.propTypes = AnchorLink_propTypes;
AnchorLink.defaultProps = AnchorLink_defaultProps;

/* harmony default export */ const components_AnchorLink = (AnchorLink);
;// CONCATENATED MODULE: ./src/dashboard/components/DeleteComponentButton.jsx
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





const DeleteComponentButton_propTypes = {
  onDelete: (prop_types_default()).func.isRequired };


const DeleteComponentButton_defaultProps = {};

class DeleteComponentButton extends react.PureComponent {
  render() {
    const { onDelete } = this.props;
    return (
      (0,emotion_react_browser_esm.jsx)(components_IconButton, { onClick: onDelete, icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Trash */.Z.Trash, { iconSize: "xl" }) }));

  }}


DeleteComponentButton.propTypes = DeleteComponentButton_propTypes;
DeleteComponentButton.defaultProps = DeleteComponentButton_defaultProps;
;// CONCATENATED MODULE: ./src/dashboard/components/menu/HoverMenu.tsx
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


class HoverMenu extends react.PureComponent {





  render() {
    const { innerRef, position, children } = this.props;
    return (0,emotion_react_browser_esm.jsx)("div", { ref: innerRef, className: classnames_default()('hover-menu', position === 'left' && 'hover-menu--left', position === 'top' && 'hover-menu--top') },
    children);

  }}HoverMenu.defaultProps = { position: 'left', innerRef: null, children: null };
// EXTERNAL MODULE: ./node_modules/re-resizable/lib/index.js + 1 modules
var re_resizable_lib = __webpack_require__(29119);
;// CONCATENATED MODULE: ./src/dashboard/components/resizable/ResizableHandle.jsx
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


function BottomRightResizeHandle() {
  return (0,emotion_react_browser_esm.jsx)("div", { className: "resize-handle resize-handle--bottom-right" });
}

function RightResizeHandle() {
  return (0,emotion_react_browser_esm.jsx)("div", { className: "resize-handle resize-handle--right" });
}

function BottomResizeHandle() {
  return (0,emotion_react_browser_esm.jsx)("div", { className: "resize-handle resize-handle--bottom" });
}

/* harmony default export */ const ResizableHandle = ({
  right: RightResizeHandle,
  bottom: BottomResizeHandle,
  bottomRight: BottomRightResizeHandle });
;// CONCATENATED MODULE: ./src/dashboard/util/resizableConfig.ts
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
// config for a ResizableContainer
const adjustableWidthAndHeight = {
  top: false,
  right: true,
  bottom: true,
  left: false,
  topRight: false,
  bottomRight: true,
  bottomLeft: false,
  topLeft: false };

const adjustableWidth = {
  ...adjustableWidthAndHeight,
  bottomRight: false,
  bottom: false };

const adjustableHeight = {
  ...adjustableWidthAndHeight,
  bottomRight: false,
  right: false };

const notAdjustable = {
  ...adjustableWidthAndHeight,
  bottomRight: false,
  bottom: false,
  right: false };

/* harmony default export */ const resizableConfig = ({
  widthAndHeight: adjustableWidthAndHeight,
  widthOnly: adjustableWidth,
  heightOnly: adjustableHeight,
  notAdjustable });
;// CONCATENATED MODULE: ./src/dashboard/components/resizable/ResizableContainer.jsx
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









const proxyToInfinity = Number.MAX_VALUE;

const ResizableContainer_propTypes = {
  id: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).node,
  adjustableWidth: (prop_types_default()).bool,
  adjustableHeight: (prop_types_default()).bool,
  gutterWidth: (prop_types_default()).number,
  widthStep: (prop_types_default()).number,
  heightStep: (prop_types_default()).number,
  widthMultiple: (prop_types_default()).number,
  heightMultiple: (prop_types_default()).number,
  minWidthMultiple: (prop_types_default()).number,
  maxWidthMultiple: (prop_types_default()).number,
  minHeightMultiple: (prop_types_default()).number,
  maxHeightMultiple: (prop_types_default()).number,
  staticHeight: (prop_types_default()).number,
  staticHeightMultiple: (prop_types_default()).number,
  staticWidth: (prop_types_default()).number,
  staticWidthMultiple: (prop_types_default()).number,
  onResizeStop: (prop_types_default()).func,
  onResize: (prop_types_default()).func,
  onResizeStart: (prop_types_default()).func,
  editMode: (prop_types_default()).bool.isRequired };


const ResizableContainer_defaultProps = {
  children: null,
  adjustableWidth: true,
  adjustableHeight: true,
  gutterWidth: constants/* GRID_GUTTER_SIZE */.es,
  widthStep: constants/* GRID_BASE_UNIT */.cd,
  heightStep: constants/* GRID_BASE_UNIT */.cd,
  widthMultiple: null,
  heightMultiple: null,
  minWidthMultiple: 1,
  maxWidthMultiple: proxyToInfinity,
  minHeightMultiple: 1,
  maxHeightMultiple: proxyToInfinity,
  staticHeight: null,
  staticHeightMultiple: null,
  staticWidth: null,
  staticWidthMultiple: null,
  onResizeStop: null,
  onResize: null,
  onResizeStart: null };


// because columns are not multiples of a single variable (width = n*cols + (n-1) * gutters)
// we snap to the base unit and then snap to _actual_ column multiples on stop
const SNAP_TO_GRID = [constants/* GRID_BASE_UNIT */.cd, constants/* GRID_BASE_UNIT */.cd];
const HANDLE_CLASSES = {
  right: 'resizable-container-handle--right',
  bottom: 'resizable-container-handle--bottom' };

class ResizableContainer extends react.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isResizing: false };


    this.handleResizeStart = this.handleResizeStart.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleResizeStop = this.handleResizeStop.bind(this);
  }

  handleResizeStart(event, direction, ref) {
    const { id, onResizeStart } = this.props;

    if (onResizeStart) {
      onResizeStart({ id, direction, ref });
    }

    this.setState(() => ({ isResizing: true }));
  }

  handleResize(event, direction, ref) {
    const { onResize, id } = this.props;
    if (onResize) {
      onResize({ id, direction, ref });
    }
  }

  handleResizeStop(event, direction, ref, delta) {
    const {
      id,
      onResizeStop,
      widthStep,
      heightStep,
      widthMultiple,
      heightMultiple,
      adjustableHeight,
      adjustableWidth,
      gutterWidth } =
    this.props;

    if (onResizeStop) {
      const nextWidthMultiple =
      widthMultiple + Math.round(delta.width / (widthStep + gutterWidth));
      const nextHeightMultiple =
      heightMultiple + Math.round(delta.height / heightStep);

      onResizeStop({
        id,
        widthMultiple: adjustableWidth ? nextWidthMultiple : null,
        heightMultiple: adjustableHeight ? nextHeightMultiple : null });


      this.setState(() => ({ isResizing: false }));
    }
  }

  render() {
    const {
      children,
      adjustableWidth,
      adjustableHeight,
      widthStep,
      heightStep,
      widthMultiple,
      heightMultiple,
      staticHeight,
      staticHeightMultiple,
      staticWidth,
      staticWidthMultiple,
      minWidthMultiple,
      maxWidthMultiple,
      minHeightMultiple,
      maxHeightMultiple,
      gutterWidth,
      editMode } =
    this.props;

    const size = {
      width: adjustableWidth ?
      (widthStep + gutterWidth) * widthMultiple - gutterWidth :
      staticWidthMultiple && staticWidthMultiple * widthStep ||
      staticWidth ||
      undefined,
      height: adjustableHeight ?
      heightStep * heightMultiple :
      staticHeightMultiple && staticHeightMultiple * heightStep ||
      staticHeight ||
      undefined };


    let enableConfig = resizableConfig.notAdjustable;

    if (editMode && adjustableWidth && adjustableHeight) {
      enableConfig = resizableConfig.widthAndHeight;
    } else if (editMode && adjustableWidth) {
      enableConfig = resizableConfig.widthOnly;
    } else if (editMode && adjustableHeight) {
      enableConfig = resizableConfig.heightOnly;
    }

    const { isResizing } = this.state;

    return (
      (0,emotion_react_browser_esm.jsx)(re_resizable_lib/* Resizable */.e, {
        enable: enableConfig,
        grid: SNAP_TO_GRID,
        minWidth:
        adjustableWidth ?
        minWidthMultiple * (widthStep + gutterWidth) - gutterWidth :
        undefined,

        minHeight:
        adjustableHeight ? minHeightMultiple * heightStep : undefined,

        maxWidth:
        adjustableWidth ?
        Math.max(
        size.width,
        Math.min(
        proxyToInfinity,
        maxWidthMultiple * (widthStep + gutterWidth) - gutterWidth)) :


        undefined,

        maxHeight:
        adjustableHeight ?
        Math.max(
        size.height,
        Math.min(proxyToInfinity, maxHeightMultiple * heightStep)) :

        undefined,

        size: size,
        onResizeStart: this.handleResizeStart,
        onResize: this.handleResize,
        onResizeStop: this.handleResizeStop,
        handleComponent: ResizableHandle,
        className: classnames_default()(
        'resizable-container',
        isResizing && 'resizable-container--resizing'),

        handleClasses: HANDLE_CLASSES },

      children));


  }}


ResizableContainer.propTypes = ResizableContainer_propTypes;
ResizableContainer.defaultProps = ResizableContainer_defaultProps;

/* harmony default export */ const resizable_ResizableContainer = (ResizableContainer);
;// CONCATENATED MODULE: ./src/dashboard/util/getChartAndLabelComponentIdFromPath.js
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


function getChartAndLabelComponentIdFromPath(directPathToChild) {
  const result = {};

  if (directPathToChild.length > 0) {
    const currentPath = directPathToChild.slice();

    while (currentPath.length) {
      const componentId = currentPath.pop();
      const componentType = componentId.split('-')[0];

      result[componentType.toLowerCase()] = componentId;
      if (!constants/* IN_COMPONENT_ELEMENT_TYPES.includes */.Ep.includes(componentType)) {
        break;
      }
    }
  }

  return result;
}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/ChartHolder.jsx
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



















const CHART_MARGIN = 32;

const ChartHolder_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  dashboardId: (prop_types_default()).number.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  getComponentById: (prop_types_default()).func.isRequired,
  index: (prop_types_default()).number.isRequired,
  depth: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  directPathToChild: prop_types_default().arrayOf((prop_types_default()).string),
  directPathLastUpdated: (prop_types_default()).number,
  focusedFilterScope: (prop_types_default()).object,
  fullSizeChartId: prop_types_default().oneOf([(prop_types_default()).number, null]),

  // grid related
  availableColumnCount: (prop_types_default()).number.isRequired,
  columnWidth: (prop_types_default()).number.isRequired,
  onResizeStart: (prop_types_default()).func.isRequired,
  onResize: (prop_types_default()).func.isRequired,
  onResizeStop: (prop_types_default()).func.isRequired,

  // dnd
  deleteComponent: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  setFullSizeChartId: (prop_types_default()).func.isRequired };


const ChartHolder_defaultProps = {
  directPathToChild: [],
  directPathLastUpdated: 0 };


/**
 * Selects the chart scope of the filter input that has focus.
 *
 * @returns {{chartId: number, scope: { scope: string[], immune: string[] }} | null }
 * the scope of the currently focused filter, if any
 */
function selectFocusedFilterScope(dashboardState, dashboardFilters) {
  if (!dashboardState.focusedFilterField) return null;
  const { chartId, column } = dashboardState.focusedFilterField;
  return {
    chartId,
    scope: dashboardFilters[chartId].scopes[column] };

}

/**
 * Renders any styles necessary to highlight the chart's relationship to the focused filter.
 *
 * If there is no focused filter scope (i.e. most of the time), this will be just a pass-through.
 *
 * If the chart is outside the scope of the focused filter, dims the chart.
 *
 * If the chart is in the scope of the focused filter,
 * renders a highlight around the chart.
 *
 * If ChartHolder were a function component, this could be implemented as a hook instead.
 */
const FilterFocusHighlight = /*#__PURE__*/react.forwardRef(
({ chartId, ...otherProps }, ref) => {
  const theme = (0,style/* useTheme */.Fg)();

  const nativeFilters = (0,es/* useSelector */.v9)((state) => state.nativeFilters);
  const dashboardState = (0,es/* useSelector */.v9)((state) => state.dashboardState);
  const dashboardFilters = (0,es/* useSelector */.v9)((state) => state.dashboardFilters);
  const focusedFilterScope = selectFocusedFilterScope(
  dashboardState,
  dashboardFilters);

  const focusedNativeFilterId = nativeFilters.focusedFilterId;
  if (!(focusedFilterScope || focusedNativeFilterId))
  return (0,emotion_react_browser_esm.jsx)("div", extends_default()({ ref: ref }, otherProps));

  // we use local styles here instead of a conditionally-applied class,
  // because adding any conditional class to this container
  // causes performance issues in Chrome.

  // default to the "de-emphasized" state
  const unfocusedChartStyles = { opacity: 0.3, pointerEvents: 'none' };
  const focusedChartStyles = {
    borderColor: theme.colors.primary.light2,
    opacity: 1,
    boxShadow: `0px 0px ${theme.gridUnit * 2}px ${theme.colors.primary.base}`,
    pointerEvents: 'auto' };


  if (focusedNativeFilterId) {var _nativeFilters$filter, _nativeFilters$filter2;
    if ((_nativeFilters$filter =
    nativeFilters.filters[focusedNativeFilterId]) != null && (_nativeFilters$filter2 = _nativeFilters$filter.chartsInScope) != null && _nativeFilters$filter2.includes(
    chartId))

    {
      return (0,emotion_react_browser_esm.jsx)("div", extends_default()({ ref: ref, style: focusedChartStyles }, otherProps));
    }
  } else if (
  chartId === focusedFilterScope.chartId ||
  (0,activeDashboardFilters/* getChartIdsInFilterScope */.Q1)({
    filterScope: focusedFilterScope.scope }).
  includes(chartId))
  {
    return (0,emotion_react_browser_esm.jsx)("div", extends_default()({ ref: ref, style: focusedChartStyles }, otherProps));
  }

  // inline styles are used here due to a performance issue when adding/changing a class, which causes a reflow
  return (0,emotion_react_browser_esm.jsx)("div", extends_default()({ ref: ref, style: unfocusedChartStyles }, otherProps));
});


class ChartHolder extends react.Component {
  static renderInFocusCSS(columnName) {
    return (
      (0,emotion_react_browser_esm.jsx)("style", null,
      `label[for=${columnName}] + .Select .Select__control {
                    border-color: #00736a;
                    transition: border-color 1s ease-in-out;
           }`));


  }

  static getDerivedStateFromProps(props, state) {
    const { component, directPathToChild, directPathLastUpdated } = props;
    const {
      label: columnName,
      chart: chartComponentId } =
    getChartAndLabelComponentIdFromPath(directPathToChild);

    if (
    directPathLastUpdated !== state.directPathLastUpdated &&
    component.id === chartComponentId)
    {
      return {
        outlinedComponentId: component.id,
        outlinedColumnName: columnName,
        directPathLastUpdated };

    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      outlinedComponentId: null,
      outlinedColumnName: null,
      directPathLastUpdated: 0 };


    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    this.handleUpdateSliceName = this.handleUpdateSliceName.bind(this);
    this.handleToggleFullSize = this.handleToggleFullSize.bind(this);
  }

  componentDidMount() {
    this.hideOutline({}, this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    this.hideOutline(prevState, this.state);
  }

  hideOutline(prevState, state) {
    const { outlinedComponentId: timerKey } = state;
    const { outlinedComponentId: prevTimerKey } = prevState;

    // because of timeout, there might be multiple charts showing outline
    if (!!timerKey && !prevTimerKey) {
      setTimeout(() => {
        this.setState(() => ({
          outlinedComponentId: null,
          outlinedColumnName: null }));

      }, 2000);
    }
  }

  handleChangeFocus(nextFocus) {
    this.setState(() => ({ isFocused: nextFocus }));
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  handleUpdateSliceName(nextName) {
    const { component, updateComponents } = this.props;
    updateComponents({
      [component.id]: {
        ...component,
        meta: {
          ...component.meta,
          sliceNameOverride: nextName } } });



  }

  handleToggleFullSize() {
    const { component, fullSizeChartId, setFullSizeChartId } = this.props;
    const { chartId } = component.meta;
    const isFullSize = fullSizeChartId === chartId;
    setFullSizeChartId(isFullSize ? null : chartId);
  }

  render() {var _getComponentById, _getComponentById$met, _parentComponent$pare;
    const { isFocused } = this.state;
    const {
      component,
      parentComponent,
      index,
      depth,
      availableColumnCount,
      columnWidth,
      onResizeStart,
      onResize,
      onResizeStop,
      handleComponentDrop,
      editMode,
      isComponentVisible,
      dashboardId,
      fullSizeChartId,
      getComponentById = () => undefined } =
    this.props;

    const { chartId } = component.meta;
    const isFullSize = fullSizeChartId === chartId;

    // inherit the size of parent columns
    const columnParentWidth = (_getComponentById = getComponentById((_parentComponent$pare =
    parentComponent.parents) == null ? void 0 : _parentComponent$pare.find((parent) => parent.startsWith(componentTypes/* COLUMN_TYPE */.BA)))) == null ? void 0 : (_getComponentById$met = _getComponentById.
    meta) == null ? void 0 : _getComponentById$met.width;
    let widthMultiple = component.meta.width || constants/* GRID_MIN_COLUMN_COUNT */.cx;
    if (parentComponent.type === componentTypes/* COLUMN_TYPE */.BA) {
      widthMultiple = parentComponent.meta.width || constants/* GRID_MIN_COLUMN_COUNT */.cx;
    } else if (columnParentWidth && widthMultiple > columnParentWidth) {
      widthMultiple = columnParentWidth;
    }

    let chartWidth = 0;
    let chartHeight = 0;

    if (isFullSize) {
      chartWidth = window.innerWidth - CHART_MARGIN;
      chartHeight = window.innerHeight - CHART_MARGIN;
    } else {
      chartWidth = Math.floor(
      widthMultiple * columnWidth +
      (widthMultiple - 1) * constants/* GRID_GUTTER_SIZE */.es -
      CHART_MARGIN);

      chartHeight = Math.floor(
      component.meta.height * constants/* GRID_BASE_UNIT */.cd - CHART_MARGIN);

    }

    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: component,
        parentComponent: parentComponent,
        orientation: parentComponent.type === componentTypes/* ROW_TYPE */.Os ? 'column' : 'row',
        index: index,
        depth: depth,
        onDrop: handleComponentDrop,
        disableDragDrop: isFocused,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)(resizable_ResizableContainer, {
        id: component.id,
        adjustableWidth: parentComponent.type === componentTypes/* ROW_TYPE */.Os,
        adjustableHeight: true,
        widthStep: columnWidth,
        widthMultiple: widthMultiple,
        heightStep: constants/* GRID_BASE_UNIT */.cd,
        heightMultiple: component.meta.height,
        minWidthMultiple: constants/* GRID_MIN_COLUMN_COUNT */.cx,
        minHeightMultiple: constants/* GRID_MIN_ROW_UNITS */.AA,
        maxWidthMultiple: availableColumnCount + widthMultiple,
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeStop: onResizeStop,
        editMode: editMode },

      (0,emotion_react_browser_esm.jsx)(FilterFocusHighlight, {
        chartId: chartId,
        ref: dragSourceRef,

        className: classnames_default()(
        'dashboard-component',
        'dashboard-component-chart-holder',
        this.state.outlinedComponentId ? 'fade-in' : 'fade-out',
        isFullSize && 'full-size') },


      !editMode &&
      (0,emotion_react_browser_esm.jsx)(components_AnchorLink, {
        anchorLinkId: component.id,
        inFocus: !!this.state.outlinedComponentId }),


      !!this.state.outlinedComponentId &&
      ChartHolder.renderInFocusCSS(this.state.outlinedColumnName),
      (0,emotion_react_browser_esm.jsx)(containers_Chart, {
        componentId: component.id,
        id: component.meta.chartId,
        dashboardId: dashboardId,
        width: chartWidth,
        height: chartHeight,
        sliceName:
        component.meta.sliceNameOverride ||
        component.meta.sliceName ||
        '',

        updateSliceName: this.handleUpdateSliceName,
        isComponentVisible: isComponentVisible,
        handleToggleFullSize: this.handleToggleFullSize,
        isFullSize: isFullSize }),

      editMode &&
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { position: "top" },
      (0,emotion_react_browser_esm.jsx)("div", null,
      (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, {
        onDelete: this.handleDeleteComponent })))),






      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps))));




  }}


ChartHolder.propTypes = ChartHolder_propTypes;
ChartHolder.defaultProps = ChartHolder_defaultProps;

function ChartHolder_mapStateToProps(state) {
  return {
    directPathToChild: state.dashboardState.directPathToChild,
    directPathLastUpdated: state.dashboardState.directPathLastUpdated };

}
/* harmony default export */ const gridComponents_ChartHolder = ((0,es/* connect */.$j)(ChartHolder_mapStateToProps)(ChartHolder));
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/components/SafeMarkdown.js
var SafeMarkdown = __webpack_require__(78019);
;// CONCATENATED MODULE: ./src/components/PopoverDropdown/index.tsx
function PopoverDropdown_EMOTION_STRINGIFIED_CSS_ERROR_() {return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";} /**
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





const MenuItem = (0,style/* styled */.iK)(components/* Menu.Item */.v2.Item)`
  &.ant-menu-item {
    height: auto;
    line-height: 1.4;

    padding-top: ${({ theme }) => theme.gridUnit}px;
    padding-bottom: ${({ theme }) => theme.gridUnit}px;

    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.grayscale.light3};
    }

    &.active {
      font-weight: ${({ theme }) => theme.typography.weights.bold};
      background: ${({ theme }) => theme.colors.grayscale.light2};
    }
  }

  &.ant-menu-item-selected {
    color: unset;
  }
`;var PopoverDropdown_ref =  true ? { name: "s5xdrg", styles: "display:flex;align-items:center" } : 0;
const PopoverDropdown = (props) => {
  const { value, options, onChange, renderButton = (option) => option.label, renderOption = (option) => (0,emotion_react_browser_esm.jsx)("div", { className: option.className }, option.label) } = props;
  const theme = (0,style/* useTheme */.Fg)();
  const selected = options.find((opt) => opt.value === value);
  return (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, { trigger: ['click'], overlayStyle: { zIndex: theme.zIndex.max }, overlay: (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, { onClick: ({ key }) => onChange(key) },
    options.map((option) => (0,emotion_react_browser_esm.jsx)(MenuItem, { id: "menu-item", key: option.value, className: classnames_default()('dropdown-item', {
        active: option.value === value }) },

    renderOption(option)))) },


  (0,emotion_react_browser_esm.jsx)("div", { role: "button", css: PopoverDropdown_ref },
  selected && renderButton(selected),
  (0,emotion_react_browser_esm.jsx)(Icons/* default.CaretDown */.Z.CaretDown, { iconColor: theme.colors.grayscale.base, css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ marginTop: theme.gridUnit * 0.5 },  true ? "" : 0,  true ? "" : 0) })));


};
/* harmony default export */ const components_PopoverDropdown = (PopoverDropdown);
;// CONCATENATED MODULE: ./src/dashboard/components/menu/MarkdownModeDropdown.tsx
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



const dropdownOptions = [
{
  value: 'edit',
  label: (0,TranslatorSingleton.t)('Edit') },

{
  value: 'preview',
  label: (0,TranslatorSingleton.t)('Preview') }];


class MarkdownModeDropdown extends react.PureComponent {
  render() {
    const { id, value, onChange } = this.props;
    return (0,emotion_react_browser_esm.jsx)(components_PopoverDropdown, { id: id, options: dropdownOptions, value: value, onChange: onChange });
  }}
;// CONCATENATED MODULE: ./src/dashboard/components/menu/WithPopoverMenu.tsx
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


class WithPopoverMenu extends react.PureComponent {












  constructor(props) {
    super(props);this.container = void 0;
    this.state = {
      isFocused: props.isFocused };

    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.editMode && nextProps.isFocused && !this.state.isFocused) {
      document.addEventListener('click', this.handleClick);
      document.addEventListener('drag', this.handleClick);
      this.setState({ isFocused: true });
    } else
    if (this.state.isFocused && !nextProps.editMode) {
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('drag', this.handleClick);
      this.setState({ isFocused: false });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('drag', this.handleClick);
  }
  setRef(ref) {
    this.container = ref;
  }
  handleClick(event) {
    if (!this.props.editMode) {
      return;
    }
    const { onChangeFocus, shouldFocus: shouldFocusFunc, disableClick } = this.props;
    const shouldFocus = shouldFocusFunc(event, this.container);
    if (!disableClick && shouldFocus && !this.state.isFocused) {
      // if not focused, set focus and add a window event listener to capture outside clicks
      // this enables us to not set a click listener for ever item on a dashboard
      document.addEventListener('click', this.handleClick);
      document.addEventListener('drag', this.handleClick);
      this.setState(() => ({ isFocused: true }));
      if (onChangeFocus) {
        onChangeFocus(true);
      }
    } else
    if (!shouldFocus && this.state.isFocused) {
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('drag', this.handleClick);
      this.setState(() => ({ isFocused: false }));
      if (onChangeFocus) {
        onChangeFocus(false);
      }
    }
  }
  render() {var _menuItems$length;
    const { children, menuItems, editMode, style } = this.props;
    const { isFocused } = this.state;
    return (0,emotion_react_browser_esm.jsx)("div", { ref: this.setRef, onClick: this.handleClick, role: "none", className: classnames_default()('with-popover-menu', editMode && isFocused && 'with-popover-menu--focused'), style: style },
    children,
    editMode && isFocused && ((_menuItems$length = menuItems == null ? void 0 : menuItems.length) != null ? _menuItems$length : 0) > 0 && (0,emotion_react_browser_esm.jsx)("div", { className: "popover-menu" },
    menuItems.map((node, i) => (0,emotion_react_browser_esm.jsx)("div", { className: "menu-item", key: `menu-item-${i}` },
    node))));



  }}WithPopoverMenu.defaultProps = { children: null, disableClick: false, onChangeFocus: null, menuItems: [], isFocused: false, shouldFocus: (event, container) => {var _event$target$parentN;return (container == null ? void 0 : container.contains(event.target)) || event.target.id === 'menu-item' || ((_event$target$parentN = event.target.parentNode) == null ? void 0 : _event$target$parentN.id) === 'menu-item';}, style: null };
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Markdown.jsx
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



















const Markdown_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  depth: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,

  // from redux
  logEvent: (prop_types_default()).func.isRequired,
  addDangerToast: (prop_types_default()).func.isRequired,
  undoLength: (prop_types_default()).number.isRequired,
  redoLength: (prop_types_default()).number.isRequired,

  // grid related
  availableColumnCount: (prop_types_default()).number.isRequired,
  columnWidth: (prop_types_default()).number.isRequired,
  onResizeStart: (prop_types_default()).func.isRequired,
  onResize: (prop_types_default()).func.isRequired,
  onResizeStop: (prop_types_default()).func.isRequired,

  // dnd
  deleteComponent: (prop_types_default()).func.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired };


const Markdown_defaultProps = {};

const MARKDOWN_PLACE_HOLDER = `# ✨Markdown
## ✨Markdown
### ✨Markdown

<br />

Click here to edit [markdown](https://bit.ly/1dQOfRK)`;

const MARKDOWN_ERROR_MESSAGE = (0,TranslatorSingleton.t)('This markdown component has an error.');

class Markdown extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      markdownSource: props.component.meta.code,
      editor: null,
      editorMode: 'preview',
      undoLength: props.undoLength,
      redoLength: props.redoLength };

    this.renderStartTime = LogUtils/* Logger.getTimestamp */.Yd.getTimestamp();

    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleChangeEditorMode = this.handleChangeEditorMode.bind(this);
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    this.handleResizeStart = this.handleResizeStart.bind(this);
    this.setEditor = this.setEditor.bind(this);
  }

  componentDidMount() {
    this.props.logEvent(LogUtils/* LOG_ACTIONS_RENDER_CHART */.aD, {
      viz_type: 'markdown',
      start_offset: this.renderStartTime,
      ts: new Date().getTime(),
      duration: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp() - this.renderStartTime });

  }

  static getDerivedStateFromProps(nextProps, state) {
    const {
      hasError,
      editorMode,
      markdownSource,
      undoLength,
      redoLength } =
    state;
    const {
      component: nextComponent,
      undoLength: nextUndoLength,
      redoLength: nextRedoLength } =
    nextProps;
    // user click undo or redo ?
    if (nextUndoLength !== undoLength || nextRedoLength !== redoLength) {
      return {
        ...state,
        undoLength: nextUndoLength,
        redoLength: nextRedoLength,
        markdownSource: nextComponent.meta.code,
        hasError: false };

    }
    if (
    !hasError &&
    editorMode === 'preview' &&
    nextComponent.meta.code !== markdownSource)
    {
      return {
        ...state,
        markdownSource: nextComponent.meta.code };

    }

    return state;
  }

  static getDerivedStateFromError() {
    return {
      hasError: true };

  }

  componentDidUpdate(prevProps) {
    if (
    this.state.editor && (
    prevProps.component.meta.width !== this.props.component.meta.width ||
    prevProps.columnWidth !== this.props.columnWidth))
    {
      this.state.editor.resize(true);
    }
    // pre-load AceEditor when entering edit mode
    if (this.props.editMode) {
      AsyncAceEditor/* MarkdownEditor.preload */.cE.preload();
    }
  }

  componentDidCatch() {
    if (this.state.editor && this.state.editorMode === 'preview') {
      this.props.addDangerToast(
      (0,TranslatorSingleton.t)(
      'This markdown component has an error. Please revert your recent changes.'));


    }
  }

  setEditor(editor) {
    editor.getSession().setUseWrapMode(true);
    this.setState({
      editor });

  }

  handleChangeFocus(nextFocus) {
    const nextFocused = !!nextFocus;
    const nextEditMode = nextFocused ? 'edit' : 'preview';
    this.setState(() => ({ isFocused: nextFocused }));
    this.handleChangeEditorMode(nextEditMode);
  }

  handleChangeEditorMode(mode) {
    const nextState = {
      ...this.state,
      editorMode: mode };

    if (mode === 'preview') {
      this.updateMarkdownContent();
      nextState.hasError = false;
    }

    this.setState(nextState);
  }

  updateMarkdownContent() {
    const { updateComponents, component } = this.props;
    if (component.meta.code !== this.state.markdownSource) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            code: this.state.markdownSource } } });



    }
  }

  handleMarkdownChange(nextValue) {
    this.setState({
      markdownSource: nextValue });

  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  handleResizeStart(e) {
    const { editorMode } = this.state;
    const { editMode, onResizeStart } = this.props;
    const isEditing = editorMode === 'edit';
    onResizeStart(e);
    if (editMode && isEditing) {
      this.updateMarkdownContent();
    }
  }

  renderEditMode() {
    return (
      (0,emotion_react_browser_esm.jsx)(AsyncAceEditor/* MarkdownEditor */.cE, {
        onChange: this.handleMarkdownChange,
        width: "100%",
        height: "100%",
        showGutter: false,
        editorProps: { $blockScrolling: true },
        value:
        // this allows "select all => delete" to give an empty editor
        typeof this.state.markdownSource === 'string' ?
        this.state.markdownSource :
        MARKDOWN_PLACE_HOLDER,

        readOnly: false,
        onLoad: this.setEditor }));



  }

  renderPreviewMode() {
    const { hasError } = this.state;

    return (
      (0,emotion_react_browser_esm.jsx)(SafeMarkdown/* default */.Z, {
        source:
        hasError ?
        MARKDOWN_ERROR_MESSAGE :
        this.state.markdownSource || MARKDOWN_PLACE_HOLDER }));



  }

  render() {
    const { isFocused, editorMode } = this.state;

    const {
      component,
      parentComponent,
      index,
      depth,
      availableColumnCount,
      columnWidth,
      onResize,
      onResizeStop,
      handleComponentDrop,
      editMode } =
    this.props;

    // inherit the size of parent columns
    const widthMultiple =
    parentComponent.type === componentTypes/* COLUMN_TYPE */.BA ?
    parentComponent.meta.width || constants/* GRID_MIN_COLUMN_COUNT */.cx :
    component.meta.width || constants/* GRID_MIN_COLUMN_COUNT */.cx;

    const isEditing = editorMode === 'edit';

    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: component,
        parentComponent: parentComponent,
        orientation: parentComponent.type === componentTypes/* ROW_TYPE */.Os ? 'column' : 'row',
        index: index,
        depth: depth,
        onDrop: handleComponentDrop,
        disableDragDrop: isFocused,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)(WithPopoverMenu, {
        onChangeFocus: this.handleChangeFocus,
        menuItems: [
        (0,emotion_react_browser_esm.jsx)(MarkdownModeDropdown, {
          id: `${component.id}-mode`,
          value: this.state.editorMode,
          onChange: this.handleChangeEditorMode }),

        (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, { onDelete: this.handleDeleteComponent })],

        editMode: editMode },

      (0,emotion_react_browser_esm.jsx)("div", {

        className: classnames_default()(
        'dashboard-markdown',
        isEditing && 'dashboard-markdown--editing'),

        id: component.id },

      (0,emotion_react_browser_esm.jsx)(resizable_ResizableContainer, {
        id: component.id,
        adjustableWidth: parentComponent.type === componentTypes/* ROW_TYPE */.Os,
        adjustableHeight: true,
        widthStep: columnWidth,
        widthMultiple: widthMultiple,
        heightStep: constants/* GRID_BASE_UNIT */.cd,
        heightMultiple: component.meta.height,
        minWidthMultiple: constants/* GRID_MIN_COLUMN_COUNT */.cx,
        minHeightMultiple: constants/* GRID_MIN_ROW_UNITS */.AA,
        maxWidthMultiple: availableColumnCount + widthMultiple,
        onResizeStart: this.handleResizeStart,
        onResize: onResize,
        onResizeStop: onResizeStop,
        editMode: isFocused ? false : editMode },

      (0,emotion_react_browser_esm.jsx)("div", {
        ref: dragSourceRef,
        className: "dashboard-component dashboard-component-chart-holder" },


      editMode &&
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { position: "top" },
      (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, {
        onDelete: this.handleDeleteComponent })),



      editMode && isEditing ?
      this.renderEditMode() :
      this.renderPreviewMode()))),



      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps))));




  }}


Markdown.propTypes = Markdown_propTypes;
Markdown.defaultProps = Markdown_defaultProps;

function Markdown_mapStateToProps(state) {
  return {
    undoLength: state.dashboardLayout.past.length,
    redoLength: state.dashboardLayout.future.length };

}
/* harmony default export */ const gridComponents_Markdown = ((0,es/* connect */.$j)(Markdown_mapStateToProps)(Markdown));
;// CONCATENATED MODULE: ./src/dashboard/components/dnd/DragHandle.jsx
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




const DragHandle_propTypes = {
  position: prop_types_default().oneOf(['left', 'top']),
  innerRef: (prop_types_default()).func,
  dotCount: (prop_types_default()).number };


const DragHandle_defaultProps = {
  position: 'left',
  innerRef: null,
  dotCount: 8 };


class DragHandle extends react.PureComponent {
  render() {
    const { innerRef, position, dotCount } = this.props;
    return (
      (0,emotion_react_browser_esm.jsx)("div", {
        ref: innerRef,
        className: classnames_default()(
        'drag-handle',
        position === 'left' && 'drag-handle--left',
        position === 'top' && 'drag-handle--top') },


      Array(dotCount).
      fill(null).
      map((_, i) =>
      (0,emotion_react_browser_esm.jsx)("div", { key: `handle-dot-${i}`, className: "drag-handle-dot" }))));



  }}


DragHandle.propTypes = DragHandle_propTypes;
DragHandle.defaultProps = DragHandle_defaultProps;
// EXTERNAL MODULE: ./src/dashboard/util/backgroundStyleOptions.ts
var backgroundStyleOptions = __webpack_require__(713);
;// CONCATENATED MODULE: ./src/dashboard/components/menu/BackgroundStyleDropdown.tsx
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




function renderButton(option) {
  return (0,emotion_react_browser_esm.jsx)("div", { className: classnames_default()('background-style-option', option.className) },
  `${option.label} background`);

}
function renderOption(option) {
  return (0,emotion_react_browser_esm.jsx)("div", { className: classnames_default()('background-style-option', option.className) },
  option.label);

}
class BackgroundStyleDropdown extends react.PureComponent {
  render() {
    const { id, value, onChange } = this.props;
    return (0,emotion_react_browser_esm.jsx)(components_PopoverDropdown, { id: id, options: backgroundStyleOptions/* default */.Z, value: value, onChange: onChange, renderButton: renderButton, renderOption: renderOption });
  }}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Column.jsx
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

















const Column_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  depth: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,

  // grid related
  availableColumnCount: (prop_types_default()).number.isRequired,
  columnWidth: (prop_types_default()).number.isRequired,
  minColumnWidth: (prop_types_default()).number.isRequired,
  onResizeStart: (prop_types_default()).func.isRequired,
  onResize: (prop_types_default()).func.isRequired,
  onResizeStop: (prop_types_default()).func.isRequired,

  // dnd
  deleteComponent: (prop_types_default()).func.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired };


const Column_defaultProps = {};

class Column extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false };

    this.handleChangeBackground = this.handleUpdateMeta.bind(
    this,
    'background');

    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  handleChangeFocus(nextFocus) {
    this.setState(() => ({ isFocused: Boolean(nextFocus) }));
  }

  handleUpdateMeta(metaKey, nextValue) {
    const { updateComponents, component } = this.props;
    if (nextValue && component.meta[metaKey] !== nextValue) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            [metaKey]: nextValue } } });



    }
  }

  render() {
    const {
      component: columnComponent,
      parentComponent,
      index,
      availableColumnCount,
      columnWidth,
      minColumnWidth,
      depth,
      onResizeStart,
      onResize,
      onResizeStop,
      handleComponentDrop,
      editMode,
      onChangeTab,
      isComponentVisible } =
    this.props;

    const columnItems = columnComponent.children || [];
    const backgroundStyle = backgroundStyleOptions/* default.find */.Z.find(
    (opt) =>
    opt.value === (
    columnComponent.meta.background || constants/* BACKGROUND_TRANSPARENT */.HE));


    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: columnComponent,
        parentComponent: parentComponent,
        orientation: "column",
        index: index,
        depth: depth,
        onDrop: handleComponentDrop,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)(resizable_ResizableContainer, {
        id: columnComponent.id,
        adjustableWidth: true,
        adjustableHeight: false,
        widthStep: columnWidth,
        widthMultiple: columnComponent.meta.width,
        minWidthMultiple: minColumnWidth,
        maxWidthMultiple:
        availableColumnCount + (columnComponent.meta.width || 0),

        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeStop: onResizeStop,
        editMode: editMode },

      (0,emotion_react_browser_esm.jsx)(WithPopoverMenu, {
        isFocused: this.state.isFocused,
        onChangeFocus: this.handleChangeFocus,
        disableClick: true,
        menuItems: [
        (0,emotion_react_browser_esm.jsx)(BackgroundStyleDropdown, {
          id: `${columnComponent.id}-background`,
          value: columnComponent.meta.background,
          onChange: this.handleChangeBackground })],


        editMode: editMode },

      editMode &&
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { innerRef: dragSourceRef, position: "top" },
      (0,emotion_react_browser_esm.jsx)(DragHandle, { position: "top" }),
      (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, {
        onDelete: this.handleDeleteComponent }),

      (0,emotion_react_browser_esm.jsx)(components_IconButton, {
        onClick: this.handleChangeFocus,
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Cog */.Z.Cog, { iconSize: "xl" }) })),



      (0,emotion_react_browser_esm.jsx)("div", {
        className: classnames_default()(
        'grid-column',
        columnItems.length === 0 && 'grid-column--empty',
        backgroundStyle.className) },


      columnItems.map((componentId, itemIndex) =>
      (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, {
        key: componentId,
        id: componentId,
        parentId: columnComponent.id,
        depth: depth + 1,
        index: itemIndex,
        availableColumnCount: columnComponent.meta.width,
        columnWidth: columnWidth,
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeStop: onResizeStop,
        isComponentVisible: isComponentVisible,
        onChangeTab: onChangeTab })),



      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps))))));






  }}


Column.propTypes = Column_propTypes;
Column.defaultProps = Column_defaultProps;

/* harmony default export */ const gridComponents_Column = (Column);
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Divider.jsx
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








const Divider_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  depth: (prop_types_default()).number.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired };


class Divider extends react.PureComponent {
  constructor(props) {
    super(props);
    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  render() {
    const {
      component,
      depth,
      parentComponent,
      index,
      handleComponentDrop,
      editMode } =
    this.props;

    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: component,
        parentComponent: parentComponent,
        orientation: "row",
        index: index,
        depth: depth,
        onDrop: handleComponentDrop,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)("div", { ref: dragSourceRef },
      editMode &&
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { position: "left" },
      (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, { onDelete: this.handleDeleteComponent })),



      (0,emotion_react_browser_esm.jsx)("div", { className: "dashboard-component dashboard-component-divider" }),

      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps))));




  }}


Divider.propTypes = Divider_propTypes;

/* harmony default export */ const gridComponents_Divider = (Divider);
// EXTERNAL MODULE: ./src/dashboard/util/headerStyleOptions.ts
var headerStyleOptions = __webpack_require__(79271);
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Header.jsx
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


















const gridComponents_Header_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  depth: (prop_types_default()).number.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  filters: (prop_types_default()).object.isRequired,

  // redux
  handleComponentDrop: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired };


const gridComponents_Header_defaultProps = {};

class Header_Header extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false };

    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleUpdateMeta = this.handleUpdateMeta.bind(this);
    this.handleChangeSize = this.handleUpdateMeta.bind(this, 'headerSize');
    this.handleChangeBackground = this.handleUpdateMeta.bind(
    this,
    'background');

    this.handleChangeText = this.handleUpdateMeta.bind(this, 'text');
  }

  handleChangeFocus(nextFocus) {
    this.setState(() => ({ isFocused: nextFocus }));
  }

  handleUpdateMeta(metaKey, nextValue) {
    const { updateComponents, component } = this.props;
    if (nextValue && component.meta[metaKey] !== nextValue) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            [metaKey]: nextValue } } });



    }
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  render() {
    const { isFocused } = this.state;

    const {
      component,
      depth,
      parentComponent,
      index,
      handleComponentDrop,
      editMode,
      filters } =
    this.props;

    const headerStyle = headerStyleOptions/* default.find */.Z.find(
    (opt) => opt.value === (component.meta.headerSize || constants/* SMALL_HEADER */.u_));


    const rowStyle = backgroundStyleOptions/* default.find */.Z.find(
    (opt) =>
    opt.value === (component.meta.background || constants/* BACKGROUND_TRANSPARENT */.HE));


    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: component,
        parentComponent: parentComponent,
        orientation: "row",
        index: index,
        depth: depth,
        onDrop: handleComponentDrop,
        disableDragDrop: isFocused,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)("div", { ref: dragSourceRef },
      editMode &&
      depth <= 2 && // drag handle looks bad when nested
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { position: "left" },
      (0,emotion_react_browser_esm.jsx)(DragHandle, { position: "left" })),



      (0,emotion_react_browser_esm.jsx)(WithPopoverMenu, {
        onChangeFocus: this.handleChangeFocus,
        menuItems: [
        (0,emotion_react_browser_esm.jsx)(components_PopoverDropdown, {
          id: `${component.id}-header-style`,
          options: headerStyleOptions/* default */.Z,
          value: component.meta.headerSize,
          onChange: this.handleChangeSize }),

        (0,emotion_react_browser_esm.jsx)(BackgroundStyleDropdown, {
          id: `${component.id}-background`,
          value: component.meta.background,
          onChange: this.handleChangeBackground }),

        (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, { onDelete: this.handleDeleteComponent })],

        editMode: editMode },

      (0,emotion_react_browser_esm.jsx)("div", {
        className: classnames_default()(
        'dashboard-component',
        'dashboard-component-header',
        headerStyle.className,
        rowStyle.className) },


      (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, {
        title: component.meta.text,
        canEdit: editMode,
        onSaveTitle: this.handleChangeText,
        showTooltip: false }),

      !editMode &&
      (0,emotion_react_browser_esm.jsx)(components_AnchorLink, {
        anchorLinkId: component.id,
        filters: filters,
        showShortLinkButton: true }))),





      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps))));




  }}


Header_Header.propTypes = gridComponents_Header_propTypes;
Header_Header.defaultProps = gridComponents_Header_defaultProps;

/* harmony default export */ const gridComponents_Header = (Header_Header);
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Row.jsx
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

















const Row_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  depth: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,

  // grid related
  availableColumnCount: (prop_types_default()).number.isRequired,
  columnWidth: (prop_types_default()).number.isRequired,
  occupiedColumnCount: (prop_types_default()).number.isRequired,
  onResizeStart: (prop_types_default()).func.isRequired,
  onResize: (prop_types_default()).func.isRequired,
  onResizeStop: (prop_types_default()).func.isRequired,

  // dnd
  handleComponentDrop: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired };


class Row extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false };

    this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    this.handleUpdateMeta = this.handleUpdateMeta.bind(this);
    this.handleChangeBackground = this.handleUpdateMeta.bind(
    this,
    'background');

    this.handleChangeFocus = this.handleChangeFocus.bind(this);
  }

  handleChangeFocus(nextFocus) {
    this.setState(() => ({ isFocused: Boolean(nextFocus) }));
  }

  handleUpdateMeta(metaKey, nextValue) {
    const { updateComponents, component } = this.props;
    if (nextValue && component.meta[metaKey] !== nextValue) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            [metaKey]: nextValue } } });



    }
  }

  handleDeleteComponent() {
    const { deleteComponent, component, parentId } = this.props;
    deleteComponent(component.id, parentId);
  }

  render() {
    const {
      component: rowComponent,
      parentComponent,
      index,
      availableColumnCount,
      columnWidth,
      occupiedColumnCount,
      depth,
      onResizeStart,
      onResize,
      onResizeStop,
      handleComponentDrop,
      editMode,
      onChangeTab,
      isComponentVisible } =
    this.props;

    const rowItems = rowComponent.children || [];

    const backgroundStyle = backgroundStyleOptions/* default.find */.Z.find(
    (opt) =>
    opt.value === (rowComponent.meta.background || constants/* BACKGROUND_TRANSPARENT */.HE));


    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: rowComponent,
        parentComponent: parentComponent,
        orientation: "row",
        index: index,
        depth: depth,
        onDrop: handleComponentDrop,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)(WithPopoverMenu, {
        isFocused: this.state.isFocused,
        onChangeFocus: this.handleChangeFocus,
        disableClick: true,
        menuItems: [
        (0,emotion_react_browser_esm.jsx)(BackgroundStyleDropdown, {
          id: `${rowComponent.id}-background`,
          value: backgroundStyle.value,
          onChange: this.handleChangeBackground })],


        editMode: editMode },

      editMode &&
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { innerRef: dragSourceRef, position: "left" },
      (0,emotion_react_browser_esm.jsx)(DragHandle, { position: "left" }),
      (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, { onDelete: this.handleDeleteComponent }),
      (0,emotion_react_browser_esm.jsx)(components_IconButton, {
        onClick: this.handleChangeFocus,
        icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.Cog */.Z.Cog, { iconSize: "xl" }) })),



      (0,emotion_react_browser_esm.jsx)("div", {
        className: classnames_default()(
        'grid-row',
        rowItems.length === 0 && 'grid-row--empty',
        backgroundStyle.className) },



      rowItems.map((componentId, itemIndex) =>
      (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, {
        key: componentId,
        id: componentId,
        parentId: rowComponent.id,
        depth: depth + 1,
        index: itemIndex,
        availableColumnCount:
        availableColumnCount - occupiedColumnCount,

        columnWidth: columnWidth,
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeStop: onResizeStop,
        isComponentVisible: isComponentVisible,
        onChangeTab: onChangeTab })),



      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps)))));





  }}


Row.propTypes = Row_propTypes;

/* harmony default export */ const gridComponents_Row = (Row);
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Tab.jsx
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










const RENDER_TAB = 'RENDER_TAB';
const RENDER_TAB_CONTENT = 'RENDER_TAB_CONTENT';

const Tab_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  depth: (prop_types_default()).number.isRequired,
  renderType: prop_types_default().oneOf([RENDER_TAB, RENDER_TAB_CONTENT]).isRequired,
  onDropOnTab: (prop_types_default()).func,
  editMode: (prop_types_default()).bool.isRequired,
  filters: (prop_types_default()).object.isRequired,

  // grid related
  availableColumnCount: (prop_types_default()).number,
  columnWidth: (prop_types_default()).number,
  onResizeStart: (prop_types_default()).func,
  onResize: (prop_types_default()).func,
  onResizeStop: (prop_types_default()).func,

  // redux
  handleComponentDrop: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired,
  setDirectPathToChild: (prop_types_default()).func.isRequired };


const Tab_defaultProps = {
  availableColumnCount: 0,
  columnWidth: 0,
  onDropOnTab() {},
  onResizeStart() {},
  onResize() {},
  onResizeStop() {} };


const TabTitleContainer = style/* styled.div */.iK.div`
  ${({ isHighlighted, theme: { gridUnit, colors } }) => `
    padding: ${gridUnit}px ${gridUnit * 2}px;
    margin: ${-gridUnit}px ${gridUnit * -2}px;
    transition: box-shadow 0.2s ease-in-out;
    ${
isHighlighted && `box-shadow: 0 0 ${gridUnit}px ${colors.primary.light1};`
}
  `}
`;

const renderDraggableContentBottom = (dropProps) =>
dropProps.dropIndicatorProps &&
(0,emotion_react_browser_esm.jsx)("div", { className: "drop-indicator drop-indicator--bottom" });


const renderDraggableContentTop = (dropProps) =>
dropProps.dropIndicatorProps &&
(0,emotion_react_browser_esm.jsx)("div", { className: "drop-indicator drop-indicator--top" });


class Tab extends react.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleTopDropTargetDrop = this.handleTopDropTargetDrop.bind(this);
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab({ pathToTabIndex }) {
    this.props.setDirectPathToChild(pathToTabIndex);
  }

  handleChangeText(nextTabText) {
    const { updateComponents, component } = this.props;
    if (nextTabText && nextTabText !== component.meta.text) {
      updateComponents({
        [component.id]: {
          ...component,
          meta: {
            ...component.meta,
            text: nextTabText } } });



    }
  }

  handleDrop(dropResult) {
    this.props.handleComponentDrop(dropResult);
    this.props.onDropOnTab(dropResult);
  }

  handleTopDropTargetDrop(dropResult) {
    if (dropResult) {
      this.props.handleComponentDrop({
        ...dropResult,
        destination: {
          ...dropResult.destination,
          // force appending as the first child if top drop target
          index: 0 } });


    }
  }

  renderTabContent() {
    const {
      component: tabComponent,
      parentComponent: tabParentComponent,
      depth,
      availableColumnCount,
      columnWidth,
      onResizeStart,
      onResize,
      onResizeStop,
      editMode,
      isComponentVisible } =
    this.props;

    return (
      (0,emotion_react_browser_esm.jsx)("div", { className: "dashboard-component-tabs-content" },

      editMode &&
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: tabComponent,
        parentComponent: tabParentComponent,
        orientation: "column",
        index: 0,
        depth: depth,
        onDrop: this.handleTopDropTargetDrop,
        editMode: true,
        className: "empty-droptarget" },

      renderDraggableContentTop),


      tabComponent.children.map((componentId, componentIndex) =>
      (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, {
        key: componentId,
        id: componentId,
        parentId: tabComponent.id,
        depth: depth // see isValidChild.js for why tabs don't increment child depth
        , index: componentIndex,
        onDrop: this.handleDrop,
        availableColumnCount: availableColumnCount,
        columnWidth: columnWidth,
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeStop: onResizeStop,
        isComponentVisible: isComponentVisible,
        onChangeTab: this.handleChangeTab })),



      editMode &&
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: tabComponent,
        parentComponent: tabParentComponent,
        orientation: "column",
        index: tabComponent.children.length,
        depth: depth,
        onDrop: this.handleDrop,
        editMode: true,
        className: "empty-droptarget" },

      renderDraggableContentBottom)));




  }

  renderTab() {
    const {
      component,
      parentComponent,
      index,
      depth,
      editMode,
      filters,
      isFocused,
      isHighlighted } =
    this.props;

    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: component,
        parentComponent: parentComponent,
        orientation: "column",
        index: index,
        depth: depth,
        onDrop: this.handleDrop,
        editMode: editMode },

      ({ dropIndicatorProps, dragSourceRef }) =>
      (0,emotion_react_browser_esm.jsx)(TabTitleContainer, {
        isHighlighted: isHighlighted,
        className: "dragdroppable-tab",
        ref: dragSourceRef },

      (0,emotion_react_browser_esm.jsx)(EditableTitle/* default */.Z, {
        title: component.meta.text,
        defaultTitle: component.meta.defaultText,
        placeholder: component.meta.placeholder,
        canEdit: editMode && isFocused,
        onSaveTitle: this.handleChangeText,
        showTooltip: false,
        editing: editMode && isFocused }),

      !editMode &&
      (0,emotion_react_browser_esm.jsx)(components_AnchorLink, {
        anchorLinkId: component.id,
        filters: filters,
        showShortLinkButton: true,
        placement: index >= 5 ? 'left' : 'right' }),



      dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps))));




  }

  render() {
    const { renderType } = this.props;
    return renderType === RENDER_TAB ?
    this.renderTab() :
    this.renderTabContent();
  }}


Tab.propTypes = Tab_propTypes;
Tab.defaultProps = Tab_defaultProps;
;// CONCATENATED MODULE: ./src/dashboard/util/findTabIndexByComponentId.js
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
function findTabIndexByComponentId({
  currentComponent,
  directPathToChild = [] })
{
  if (
  !currentComponent ||
  directPathToChild.length === 0 ||
  directPathToChild.indexOf(currentComponent.id) === -1)
  {
    return -1;
  }

  const currentComponentIdx = directPathToChild.findIndex(
  (id) => id === currentComponent.id);

  const nextParentId = directPathToChild[currentComponentIdx + 1];
  if (currentComponent.children.indexOf(nextParentId) >= 0) {
    return currentComponent.children.findIndex(
    (childId) => childId === nextParentId);

  }
  return -1;
}
;// CONCATENATED MODULE: ./src/dashboard/util/getDirectPathToTabIndex.js
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
function getDirectPathToTabIndex(tabsComponent, tabIndex) {
  const directPathToFilter = (tabsComponent.parents || []).slice();
  directPathToFilter.push(tabsComponent.id);
  directPathToFilter.push(tabsComponent.children[tabIndex]);

  return directPathToFilter;
}
;// CONCATENATED MODULE: ./src/dashboard/util/getLeafComponentIdFromPath.js
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


function getLeafComponentIdFromPath(directPathToChild = []) {
  if (directPathToChild.length > 0) {
    const currentPath = directPathToChild.slice();

    while (currentPath.length) {
      const componentId = currentPath.pop();
      const componentType = componentId && componentId.split('-')[0];

      if (!constants/* IN_COMPONENT_ELEMENT_TYPES.includes */.Ep.includes(componentType)) {
        return componentId;
      }
    }
  }

  return null;
}
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/Tabs.jsx
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




















const Tabs_propTypes = {
  id: (prop_types_default()).string.isRequired,
  parentId: (prop_types_default()).string.isRequired,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  index: (prop_types_default()).number.isRequired,
  depth: (prop_types_default()).number.isRequired,
  renderTabContent: (prop_types_default()).bool, // whether to render tabs + content or just tabs
  editMode: (prop_types_default()).bool.isRequired,
  renderHoverMenu: (prop_types_default()).bool,
  directPathToChild: prop_types_default().arrayOf((prop_types_default()).string),

  // actions (from DashboardComponent.jsx)
  logEvent: (prop_types_default()).func.isRequired,
  setActiveTabs: (prop_types_default()).func,

  // grid related
  availableColumnCount: (prop_types_default()).number,
  columnWidth: (prop_types_default()).number,
  onResizeStart: (prop_types_default()).func,
  onResize: (prop_types_default()).func,
  onResizeStop: (prop_types_default()).func,

  // dnd
  createComponent: (prop_types_default()).func.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  onChangeTab: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired };


const Tabs_defaultProps = {
  renderTabContent: true,
  renderHoverMenu: true,
  availableColumnCount: 0,
  columnWidth: 0,
  directPathToChild: [],
  setActiveTabs() {},
  onResizeStart() {},
  onResize() {},
  onResizeStop() {} };


const StyledTabsContainer = style/* styled.div */.iK.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.light5};

  .dashboard-component-tabs-content {
    min-height: ${({ theme }) => theme.gridUnit * 12}px;
    margin-top: ${({ theme }) => theme.gridUnit / 4}px;
    position: relative;
  }

  .ant-tabs {
    overflow: visible;

    .ant-tabs-nav-wrap {
      min-height: ${({ theme }) => theme.gridUnit * 12.5}px;
    }

    .ant-tabs-content-holder {
      overflow: visible;
    }
  }

  div .ant-tabs-tab-btn {
    text-transform: none;
  }
`;

class Tabs extends react.PureComponent {
  constructor(props) {
    super(props);this.

















































































    showDeleteConfirmModal = (key) => {
      const { component, deleteComponent } = this.props;
      components/* Modal.confirm */.u_.confirm({
        title: (0,TranslatorSingleton.t)('Delete dashboard tab?'),
        content:
        (0,emotion_react_browser_esm.jsx)("span", null, "Deleting a tab will remove all content within it. You may still reverse this action with the ",

        (0,emotion_react_browser_esm.jsx)("b", null, "undo"), " button (cmd + z) until you save your changes."),



        onOk: () => {
          deleteComponent(key, component.id);
          const tabIndex = component.children.indexOf(key);
          this.handleDeleteTab(tabIndex);
        },
        okType: 'danger',
        okText: 'DELETE',
        cancelText: 'CANCEL',
        icon: null });

    };this.

    handleEdit = (key, action) => {
      const { component, createComponent } = this.props;
      if (action === 'add') {
        createComponent({
          destination: {
            id: component.id,
            type: component.type,
            index: component.children.length },

          dragging: {
            id: constants/* NEW_TAB_ID */.Xk,
            type: componentTypes/* TAB_TYPE */.gn } });


      } else if (action === 'remove') {
        this.showDeleteConfirmModal(key);
      }
    };const _tabIndex = Math.max(0, findTabIndexByComponentId({ currentComponent: props.component, directPathToChild: props.directPathToChild }));const { children: tabIds } = props.component;const activeKey = tabIds[_tabIndex];this.state = { tabIndex: _tabIndex, activeKey };this.handleClickTab = this.handleClickTab.bind(this);this.handleDeleteComponent = this.handleDeleteComponent.bind(this);this.handleDeleteTab = this.handleDeleteTab.bind(this);this.handleDropOnTab = this.handleDropOnTab.bind(this);this.handleDrop = this.handleDrop.bind(this);}componentDidMount() {this.props.setActiveTabs(this.state.activeKey);}componentDidUpdate(prevProps, prevState) {if (prevState.activeKey !== this.state.activeKey) {this.props.setActiveTabs(this.state.activeKey, prevState.activeKey);}}UNSAFE_componentWillReceiveProps(nextProps) {const maxIndex = Math.max(0, nextProps.component.children.length - 1);const currTabsIds = this.props.component.children;const nextTabsIds = nextProps.component.children;if (this.state.tabIndex > maxIndex) {this.setState(() => ({ tabIndex: maxIndex }));}if (nextTabsIds.length) {const lastTabId = nextTabsIds[nextTabsIds.length - 1]; // if a new tab is added focus on it immediately
      if (nextTabsIds.length > currTabsIds.length) {// a new tab's path may be empty, here also need to set tabIndex
        this.setState(() => ({ activeKey: lastTabId, tabIndex: maxIndex }));} // if a tab is removed focus on the first
      if (nextTabsIds.length < currTabsIds.length) {this.setState(() => ({ activeKey: nextTabsIds[0] }));}}if (nextProps.isComponentVisible) {const nextFocusComponent = getLeafComponentIdFromPath(nextProps.directPathToChild);const currentFocusComponent = getLeafComponentIdFromPath(this.props.directPathToChild);if (nextFocusComponent !== currentFocusComponent) {const nextTabIndex = findTabIndexByComponentId({ currentComponent: nextProps.component, directPathToChild: nextProps.directPathToChild }); // make sure nextFocusComponent is under this tabs component
        if (nextTabIndex > -1 && nextTabIndex !== this.state.tabIndex) {this.setState(() => ({ tabIndex: nextTabIndex, activeKey: nextTabsIds[nextTabIndex] }));}}}}handleClickTab(tabIndex) {const { component } = this.props;const { children: tabIds } = component;

    if (tabIndex !== this.state.tabIndex) {
      const pathToTabIndex = getDirectPathToTabIndex(component, tabIndex);
      const targetTabId = pathToTabIndex[pathToTabIndex.length - 1];
      this.props.logEvent(LogUtils/* LOG_ACTIONS_SELECT_DASHBOARD_TAB */.Iq, {
        target_id: targetTabId,
        index: tabIndex });


      this.props.onChangeTab({ pathToTabIndex });
    }
    this.setState(() => ({ activeKey: tabIds[tabIndex] }));
  }

  handleDeleteComponent() {
    const { deleteComponent, id, parentId } = this.props;
    deleteComponent(id, parentId);
  }

  handleDeleteTab(tabIndex) {
    this.handleClickTab(Math.max(0, tabIndex - 1));
  }

  handleDropOnTab(dropResult) {
    const { component } = this.props;

    // Ensure dropped tab is visible
    const { destination } = dropResult;
    if (destination) {
      const dropTabIndex =
      destination.id === component.id ?
      destination.index // dropped ON tabs
      : component.children.indexOf(destination.id); // dropped IN tab

      if (dropTabIndex > -1) {
        setTimeout(() => {
          this.handleClickTab(dropTabIndex);
        }, 30);
      }
    }
  }

  handleDrop(dropResult) {
    if (dropResult.dragging.type !== componentTypes/* TABS_TYPE */.yR) {
      this.props.handleComponentDrop(dropResult);
    }
  }

  render() {
    const {
      depth,
      component: tabsComponent,
      parentComponent,
      index,
      availableColumnCount,
      columnWidth,
      onResizeStart,
      onResize,
      onResizeStop,
      renderTabContent,
      renderHoverMenu,
      isComponentVisible: isCurrentTabVisible,
      editMode,
      nativeFilters } =
    this.props;

    const { children: tabIds } = tabsComponent;
    const { tabIndex: selectedTabIndex, activeKey } = this.state;

    let tabsToHighlight;
    if (nativeFilters != null && nativeFilters.focusedFilterId) {
      tabsToHighlight =
      nativeFilters.filters[nativeFilters.focusedFilterId].tabsInScope;
    }
    return (
      (0,emotion_react_browser_esm.jsx)(DragDroppable, {
        component: tabsComponent,
        parentComponent: parentComponent,
        orientation: "row",
        index: index,
        depth: depth,
        onDrop: this.handleDrop,
        editMode: editMode },

      ({
        dropIndicatorProps: tabsDropIndicatorProps,
        dragSourceRef: tabsDragSourceRef }) =>

      (0,emotion_react_browser_esm.jsx)(StyledTabsContainer, {
        className: "dashboard-component dashboard-component-tabs" },


      editMode && renderHoverMenu &&
      (0,emotion_react_browser_esm.jsx)(HoverMenu, { innerRef: tabsDragSourceRef, position: "left" },
      (0,emotion_react_browser_esm.jsx)(DragHandle, { position: "left" }),
      (0,emotion_react_browser_esm.jsx)(DeleteComponentButton, { onDelete: this.handleDeleteComponent })),



      (0,emotion_react_browser_esm.jsx)(components_Tabs/* LineEditableTabs */.cl, {
        id: tabsComponent.id,
        activeKey: activeKey,
        onChange: (key) => {
          this.handleClickTab(tabIds.indexOf(key));
        },
        onEdit: this.handleEdit,

        type: editMode ? 'editable-card' : 'card' },

      tabIds.map((tabId, tabIndex) => {var _tabsToHighlight;return (
          (0,emotion_react_browser_esm.jsx)(components_Tabs/* LineEditableTabs.TabPane */.cl.TabPane, {
            key: tabId,
            tab:
            (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, {
              id: tabId,
              parentId: tabsComponent.id,
              depth: depth,
              index: tabIndex,
              renderType: RENDER_TAB,
              availableColumnCount: availableColumnCount,
              columnWidth: columnWidth,
              onDropOnTab: this.handleDropOnTab,
              isFocused: activeKey === tabId,
              isHighlighted:
              activeKey !== tabId && ((_tabsToHighlight = tabsToHighlight) == null ? void 0 : _tabsToHighlight.includes(tabId)) }) },




          renderTabContent &&
          (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, {
            id: tabId,
            parentId: tabsComponent.id,
            depth: depth // see isValidChild.js for why tabs don't increment child depth
            , index: tabIndex,
            renderType: RENDER_TAB_CONTENT,
            availableColumnCount: availableColumnCount,
            columnWidth: columnWidth,
            onResizeStart: onResizeStart,
            onResize: onResize,
            onResizeStop: onResizeStop,
            onDropOnTab: this.handleDropOnTab,
            isComponentVisible:
            selectedTabIndex === tabIndex && isCurrentTabVisible })));})),








      tabsDropIndicatorProps &&
      parentComponent.id !== constants/* DASHBOARD_ROOT_ID */._4 &&
      (0,emotion_react_browser_esm.jsx)("div", tabsDropIndicatorProps))));





  }}


Tabs.propTypes = Tabs_propTypes;
Tabs.defaultProps = Tabs_defaultProps;

function Tabs_mapStateToProps(state) {
  return {
    nativeFilters: state.nativeFilters,
    directPathToChild: state.dashboardState.directPathToChild };

}
/* harmony default export */ const gridComponents_Tabs = ((0,es/* connect */.$j)(Tabs_mapStateToProps)(Tabs));
;// CONCATENATED MODULE: ./src/dashboard/components/gridComponents/index.js
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




















const componentLookup = {
  [componentTypes/* CHART_TYPE */.dW]: gridComponents_ChartHolder,
  [componentTypes/* MARKDOWN_TYPE */.xh]: gridComponents_Markdown,
  [componentTypes/* COLUMN_TYPE */.BA]: gridComponents_Column,
  [componentTypes/* DIVIDER_TYPE */.hE]: gridComponents_Divider,
  [componentTypes/* HEADER_TYPE */.Nc]: gridComponents_Header,
  [componentTypes/* ROW_TYPE */.Os]: gridComponents_Row,
  [componentTypes/* TAB_TYPE */.gn]: Tab,
  [componentTypes/* TABS_TYPE */.yR]: gridComponents_Tabs };
// EXTERNAL MODULE: ./src/dashboard/util/getDetailedComponentWidth.js
var getDetailedComponentWidth = __webpack_require__(72673);
;// CONCATENATED MODULE: ./src/dashboard/containers/DashboardComponent.jsx
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














const DashboardComponent_propTypes = {
  id: (prop_types_default()).string,
  parentId: (prop_types_default()).string,
  depth: (prop_types_default()).number,
  index: (prop_types_default()).number,
  renderHoverMenu: (prop_types_default()).bool,
  renderTabContent: (prop_types_default()).bool,
  onChangeTab: (prop_types_default()).func,
  component: propShapes/* componentShape.isRequired */.cP.isRequired,
  parentComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  createComponent: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  updateComponents: (prop_types_default()).func.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  logEvent: (prop_types_default()).func.isRequired,
  directPathToChild: prop_types_default().arrayOf((prop_types_default()).string),
  directPathLastUpdated: (prop_types_default()).number,
  dashboardId: (prop_types_default()).number.isRequired,
  isComponentVisible: (prop_types_default()).bool };


const DashboardComponent_defaultProps = {
  isComponentVisible: true };


function DashboardComponent_mapStateToProps(
{ dashboardLayout: undoableLayout, dashboardState, dashboardInfo },
ownProps)
{
  const dashboardLayout = undoableLayout.present;
  const { id, parentId } = ownProps;
  const component = dashboardLayout[id];
  const props = {
    component,
    getComponentById: (id) => dashboardLayout[id],
    parentComponent: dashboardLayout[parentId],
    editMode: dashboardState.editMode,
    filters: (0,activeDashboardFilters/* getActiveFilters */.De)(),
    dashboardId: dashboardInfo.id,
    fullSizeChartId: dashboardState.fullSizeChartId };


  // rows and columns need more data about their child dimensions
  // doing this allows us to not pass the entire component lookup to all Components
  if (component) {
    const componentType = component.type;
    if (componentType === componentTypes/* ROW_TYPE */.Os || componentType === componentTypes/* COLUMN_TYPE */.BA) {
      const { occupiedWidth, minimumWidth } = (0,getDetailedComponentWidth/* default */.Z)({
        id,
        components: dashboardLayout });


      if (componentType === componentTypes/* ROW_TYPE */.Os) props.occupiedColumnCount = occupiedWidth;
      if (componentType === componentTypes/* COLUMN_TYPE */.BA) props.minColumnWidth = minimumWidth;
    }
  }

  return props;
}

function DashboardComponent_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    addDangerToast: MessageToasts_actions/* addDangerToast */.Gb,
    createComponent: actions_dashboardLayout/* createComponent */.LM,
    deleteComponent: actions_dashboardLayout/* deleteComponent */.v7,
    updateComponents: actions_dashboardLayout/* updateComponents */.WZ,
    handleComponentDrop: actions_dashboardLayout/* handleComponentDrop */._p,
    setDirectPathToChild: dashboardState/* setDirectPathToChild */.E2,
    setFullSizeChartId: dashboardState/* setFullSizeChartId */.zL,
    setActiveTabs: dashboardState/* setActiveTabs */.$_,
    logEvent: logger_actions.logEvent },

  dispatch);

}

class DashboardComponent extends react.PureComponent {
  render() {
    const { component } = this.props;
    const Component = component ? componentLookup[component.type] : null;
    return Component ? (0,emotion_react_browser_esm.jsx)(Component, this.props) : null;
  }}


DashboardComponent.propTypes = DashboardComponent_propTypes;
DashboardComponent.defaultProps = DashboardComponent_defaultProps;

/* harmony default export */ const containers_DashboardComponent = ((0,es/* connect */.$j)(DashboardComponent_mapStateToProps, DashboardComponent_mapDispatchToProps)(DashboardComponent));
;// CONCATENATED MODULE: ./src/common/hooks/useElementOnScreen/index.ts
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

function useElementOnScreen(options) {
  const containerRef = (0,react.useRef)(null);
  const [isSticky, setIsSticky] = (0,react.useState)(false);
  const callback = (entries) => {
    const [entry] = entries;
    setIsSticky(entry.intersectionRatio < 1);
  };
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(callback, options);
    const element = containerRef.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [containerRef, options]);
  return [containerRef, isSticky];
}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/use-immer/dist/use-immer.module.js
var use_immer_module = __webpack_require__(90057);
// EXTERNAL MODULE: ./src/dataMask/reducer.ts
var reducer = __webpack_require__(8868);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/utils.ts
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

var TabIds;
(function (TabIds) {
  TabIds["AllFilters"] = "allFilters";
  TabIds["FilterSets"] = "filterSets";
})(TabIds || (TabIds = {}));
function mapParentFiltersToChildren(filters) {
  const cascadeChildren = {};
  filters.forEach((filter) => {
    const [parentId] = filter.cascadeParentIds || [];
    if (parentId) {
      if (!cascadeChildren[parentId]) {
        cascadeChildren[parentId] = [];
      }
      cascadeChildren[parentId].push(filter);
    }
  });
  return cascadeChildren;
}
const getOnlyExtraFormData = (data) => Object.values(data).reduce((prev, next) => ({ ...prev, [next.id]: next.extraFormData }), {});
const checkIsMissingRequiredValue = (filter, filterState) => {var _filter$controlValues;
  const value = filterState == null ? void 0 : filterState.value;
  // TODO: this property should be unhardcoded
  return ((_filter$controlValues = filter.controlValues) == null ? void 0 : _filter$controlValues.enableEmptyFilter) && (
  value === null || value === undefined);
};
const checkIsApplyDisabled = (dataMaskSelected, dataMaskApplied, filters) => {
  const dataSelectedValues = Object.values(dataMaskSelected);
  const dataAppliedValues = Object.values(dataMaskApplied);
  return (0,reduxUtils/* areObjectsEqual */.JB)(getOnlyExtraFormData(dataMaskSelected), getOnlyExtraFormData(dataMaskApplied), { ignoreUndefined: true }) ||
  dataSelectedValues.length !== dataAppliedValues.length ||
  filters.some((filter) => {var _dataMaskSelected$fil;return checkIsMissingRequiredValue(filter, dataMaskSelected == null ? void 0 : (_dataMaskSelected$fil = dataMaskSelected[filter == null ? void 0 : filter.id]) == null ? void 0 : _dataMaskSelected$fil.filterState);});
};
// EXTERNAL MODULE: ./src/dashboard/actions/nativeFilters.ts
var actions_nativeFilters = __webpack_require__(52794);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/state.ts
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
/* eslint-disable no-param-reassign */



const useFilterSets = () => (0,es/* useSelector */.v9)((state) => state.nativeFilters.filterSets || {});
const useFilters = () => (0,es/* useSelector */.v9)((state) => {var _state$dashboardState;
  const preselectNativeFilters = ((_state$dashboardState = state.dashboardState) == null ? void 0 : _state$dashboardState.preselectNativeFilters) || {};
  return Object.entries(state.nativeFilters.filters).reduce((acc, [filterId, filter]) => ({
    ...acc,
    [filterId]: {
      ...filter,
      preselect: preselectNativeFilters[filterId] } }),

  {});
});
const useNativeFiltersDataMask = () => {
  const dataMask = (0,es/* useSelector */.v9)((state) => state.dataMask);
  return Object.values(dataMask).
  filter((item) => String(item.id).startsWith(FiltersConfigModal_utils/* NATIVE_FILTER_PREFIX */.rW)).
  reduce((prev, next) => ({ ...prev, [next.id]: next }), {});
};
const useFilterUpdates = (dataMaskSelected, setDataMaskSelected) => {
  const filters = useFilters();
  const dataMaskApplied = useNativeFiltersDataMask();
  (0,react.useEffect)(() => {
    // Remove deleted filters from local state
    Object.keys(dataMaskSelected).forEach((selectedId) => {
      if (!filters[selectedId]) {
        setDataMaskSelected((draft) => {
          delete draft[selectedId];
        });
      }
    });
  }, [dataMaskApplied, dataMaskSelected, filters, setDataMaskSelected]);
};
// Load filters after charts loaded
const useInitialization = () => {
  const [isInitialized, setIsInitialized] = (0,react.useState)(false);
  const filters = useFilters();
  const charts = (0,es/* useSelector */.v9)((state) => state.charts);
  // We need to know how much charts now shown on dashboard to know how many of all charts should be loaded
  let numberOfLoadingCharts = 0;
  if (!isInitialized) {
    numberOfLoadingCharts = document.querySelectorAll('[data-ui-anchor="chart"]').length;
  }
  (0,react.useEffect)(() => {
    if (isInitialized) {
      return;
    }
    if (Object.values(filters).find(({ requiredFirst }) => requiredFirst)) {
      setIsInitialized(true);
      return;
    }
    // For some dashboards may be there are no charts on first page,
    // so we check up to 1 sec if there is at least on chart to load
    let filterTimeout;
    if (numberOfLoadingCharts === 0) {
      filterTimeout = setTimeout(() => {
        setIsInitialized(true);
      }, 1000);
    }
    // @ts-ignore
    if (numberOfLoadingCharts > 0 && filterTimeout !== undefined) {
      clearTimeout(filterTimeout);
    }
    const numberOfLoadedCharts = Object.values(charts).filter(({ chartStatus }) => chartStatus !== 'loading').length;
    if (numberOfLoadingCharts > 0 &&
    numberOfLoadedCharts >= numberOfLoadingCharts) {
      setIsInitialized(true);
    }
  }, [charts, isInitialized, numberOfLoadingCharts]);
  return isInitialized;
};
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/state.ts
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


// eslint-disable-next-line import/prefer-default-export
const useFilterSetNameDuplicated = (filterSetName, ignoreName) => {
  const filterSets = useFilterSets();
  const filterSetFilterValues = Object.values(filterSets);
  const isFilterSetNameDuplicated = (0,react.useMemo)(() => !!filterSetFilterValues.find(({ name }) => name === filterSetName), [filterSetFilterValues, filterSetName]);
  if (ignoreName === filterSetName) {
    return false;
  }
  return isFilterSetNameDuplicated;
};
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/Footer.tsx
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







const ActionButton = style/* styled.div */.iK.div`
  display: flex;
  & button {
    ${({ disabled }) => `pointer-events: ${disabled ? 'none' : 'all'}`};
    flex: 1;
  }
`;
const ActionButtons = style/* styled.div */.iK.div`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;
const FilterSets_Footer_Footer = ({ onCancel, editMode, onEdit, onCreate, disabled, filterSetName }) => {
  const isFilterSetNameDuplicated = useFilterSetNameDuplicated(filterSetName);
  const isCreateDisabled = !filterSetName || isFilterSetNameDuplicated || disabled;
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  editMode ? (0,emotion_react_browser_esm.jsx)(ActionButtons, null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { buttonStyle: "tertiary", buttonSize: "small", onClick: onCancel },
  (0,TranslatorSingleton.t)('Cancel')),

  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { placement: "right", title: !filterSetName && (0,TranslatorSingleton.t)('Please filter set name') ||
    isFilterSetNameDuplicated &&
    (0,TranslatorSingleton.t)('Filter set with this name already exists') ||
    disabled && APPLY_FILTERS_HINT },
  (0,emotion_react_browser_esm.jsx)(ActionButton, { disabled: isCreateDisabled },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, extends_default()({ disabled: isCreateDisabled, buttonStyle: "primary", htmlType: "submit", buttonSize: "small", onClick: onCreate }, getFilterBarTestId('create-filter-set-button')),
  (0,TranslatorSingleton.t)('Create'))))) :



  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { placement: "bottom", title: disabled && APPLY_FILTERS_HINT },
  (0,emotion_react_browser_esm.jsx)(ActionButton, { disabled: disabled },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, extends_default()({ disabled: disabled, buttonStyle: "tertiary", buttonSize: "small", onClick: onEdit }, getFilterBarTestId('new-filter-set-button')),
  (0,TranslatorSingleton.t)('Create new filter set')))));




};
/* harmony default export */ const FilterSets_Footer = (FilterSets_Footer_Footer);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ const asn_CheckOutlined = (CheckOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckOutlined_CheckOutlined = function CheckOutlined(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_CheckOutlined
  }));
};

CheckOutlined_CheckOutlined.displayName = 'CheckOutlined';
/* harmony default export */ const icons_CheckOutlined = (react.forwardRef(CheckOutlined_CheckOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js
// This icon file is generated automatically.
var EllipsisOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
/* harmony default export */ const asn_EllipsisOutlined = (EllipsisOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EllipsisOutlined_EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_EllipsisOutlined
  }));
};

EllipsisOutlined_EllipsisOutlined.displayName = 'EllipsisOutlined';
/* harmony default export */ const icons_EllipsisOutlined = (react.forwardRef(EllipsisOutlined_EllipsisOutlined));
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/FiltersHeader.tsx
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








const FilterHeader = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
`;
const FiltersHeader_StyledCollapse = (0,style/* styled */.iK)(components/* Collapse */.UO)`
  &.ant-collapse-ghost > .ant-collapse-item {
    & > .ant-collapse-content > .ant-collapse-content-box {
      padding: 0;
      padding-top: 0;
      padding-bottom: 0;
      font-size: ${({ theme }) => theme.typography.sizes.s}px;
    }
    & > .ant-collapse-header {
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      max-width: max-content;
      & .ant-collapse-arrow {
        position: static;
        padding-left: ${({ theme }) => theme.gridUnit}px;
      }
  }
`;
const StyledFilterRow = style/* styled.div */.iK.div`
  padding-top: ${({ theme }) => theme.gridUnit}px;
  padding-bottom: ${({ theme }) => theme.gridUnit}px;
`;
const FiltersHeader = ({ dataMask, filterSet }) => {
  const theme = (0,style/* useTheme */.Fg)();
  const filters = useFilters();
  const filterValues = Object.values(filters);
  let resultFilters = filterValues != null ? filterValues : [];
  if (filterSet != null && filterSet.nativeFilters) {
    resultFilters = Object.values(filterSet == null ? void 0 : filterSet.nativeFilters);
  }
  const getFiltersHeader = () => (0,emotion_react_browser_esm.jsx)(FilterHeader, null,
  (0,emotion_react_browser_esm.jsx)(components/* Typography.Text */.ZT.Text, { type: "secondary" },
  (0,TranslatorSingleton.t)('Filters (%d)', resultFilters.length)));


  const getFilterRow = ({ id, name }) => {var _filterSet$nativeFilt, _dataMask$id, _dataMask$id$filterSt;
    const changedFilter = filterSet &&
    !(0,reduxUtils/* areObjectsEqual */.JB)(filters[id], filterSet == null ? void 0 : (_filterSet$nativeFilt = filterSet.nativeFilters) == null ? void 0 : _filterSet$nativeFilt[id], {
      ignoreUndefined: true });

    const removedFilter = !Object.keys(filters).includes(id);
    return (0,emotion_react_browser_esm.jsx)(components/* Tooltip */.u, { title: removedFilter &&
      (0,TranslatorSingleton.t)("This filter doesn't exist in dashboard. It will not be applied.") ||
      changedFilter &&
      (0,TranslatorSingleton.t)('Filter metadata changed in dashboard. It will not be applied.'), placement: "bottomLeft", key: id },
    (0,emotion_react_browser_esm.jsx)(StyledFilterRow, null,
    (0,emotion_react_browser_esm.jsx)(components/* Typography.Text */.ZT.Text, { strong: true, delete: removedFilter, mark: changedFilter },
    name, ":\xA0"),

    (0,emotion_react_browser_esm.jsx)(components/* Typography.Text */.ZT.Text, { delete: removedFilter, mark: changedFilter },
    getFilterValueForDisplay(dataMask == null ? void 0 : (_dataMask$id = dataMask[id]) == null ? void 0 : (_dataMask$id$filterSt = _dataMask$id.filterState) == null ? void 0 : _dataMask$id$filterSt.value) || (0,emotion_react_browser_esm.jsx)(components/* Typography.Text */.ZT.Text, { type: "secondary" }, (0,TranslatorSingleton.t)('None')))));



  };
  const getExpandIcon = ({ isActive }) => {
    const color = theme.colors.grayscale.base;
    const Icon = isActive ? Icons/* default.CaretUpOutlined */.Z.CaretUpOutlined : Icons/* default.CaretDownOutlined */.Z.CaretDownOutlined;
    return (0,emotion_react_browser_esm.jsx)(Icon, { iconColor: color });
  };
  return (0,emotion_react_browser_esm.jsx)(FiltersHeader_StyledCollapse, { ghost: true, expandIconPosition: "right", defaultActiveKey: !filterSet ? ['filters'] : undefined, expandIcon: getExpandIcon },
  (0,emotion_react_browser_esm.jsx)(components/* Collapse.Panel */.UO.Panel, extends_default()({}, getFilterBarTestId('collapse-filter-set-description'), { header: getFiltersHeader(), key: "filters" }),
  resultFilters.map(getFilterRow)));


};
/* harmony default export */ const FilterSets_FiltersHeader = (FiltersHeader);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/FilterSetUnit.tsx
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








const HeaderButton = (0,style/* styled */.iK)(Button/* default */.Z)`
  padding: 0;
`;
const TitleText = style/* styled.div */.iK.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconsBlock = style/* styled.div */.iK.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > *,
  & > button.superset-button {
    ${({ theme }) => `margin-left: ${theme.gridUnit * 2}px`};
  }
`;
const FilterSetUnit = ({ editMode, setFilterSetName, onDelete, onEdit, filterSetName, dataMaskSelected, filterSet, isApplied, onRebuild }) => {var _filterSet$name, _filterSet$dataMask;
  const menu = (0,emotion_react_browser_esm.jsx)(components/* Menu */.v2, null,
  (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { onClick: onEdit }, (0,TranslatorSingleton.t)('Edit')),
  (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { onClick: onRebuild },
  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { placement: "right", title: (0,TranslatorSingleton.t)('Remove invalid filters') },
  (0,TranslatorSingleton.t)('Rebuild'))),


  (0,emotion_react_browser_esm.jsx)(components/* Menu.Item */.v2.Item, { onClick: onDelete, danger: true },
  (0,TranslatorSingleton.t)('Delete')));


  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(TitleText, null,
  (0,emotion_react_browser_esm.jsx)(components/* Typography.Text */.ZT.Text, { strong: true, editable: {
      editing: editMode,
      icon: (0,emotion_react_browser_esm.jsx)("span", null),
      onChange: setFilterSetName } }, (_filterSet$name =

  filterSet == null ? void 0 : filterSet.name) != null ? _filterSet$name : filterSetName),

  (0,emotion_react_browser_esm.jsx)(IconsBlock, null,
  isApplied && (0,emotion_react_browser_esm.jsx)(icons_CheckOutlined, { style: { color: style/* supersetTheme.colors.success.base */.K6.colors.success.base } }),
  onDelete && (0,emotion_react_browser_esm.jsx)(components/* Dropdown */.Lt, { overlay: menu, placement: "bottomRight", trigger: ['click'] },
  (0,emotion_react_browser_esm.jsx)(HeaderButton, extends_default()({ onClick: (e) => {
      e.stopPropagation();
      e.preventDefault();
    } }, getFilterBarTestId('filter-set-menu-button'), { buttonStyle: "link", buttonSize: "xsmall" }),
  (0,emotion_react_browser_esm.jsx)(icons_EllipsisOutlined, null))))),




  (0,emotion_react_browser_esm.jsx)(FilterSets_FiltersHeader, { filterSet: filterSet, dataMask: (_filterSet$dataMask = filterSet == null ? void 0 : filterSet.dataMask) != null ? _filterSet$dataMask : dataMaskSelected }));

};
/* harmony default export */ const FilterSets_FilterSetUnit = (FilterSetUnit);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/index.tsx
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










const FilterSetsWrapper = style/* styled.div */.iK.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  padding: ${({ theme }) => theme.gridUnit * 2}px
    ${({ theme }) => theme.gridUnit * 4}px;

  & button.superset-button {
    margin-left: 0;
  }
  & input {
    width: 100%;
  }
`;
const FilterSetUnitWrapper = style/* styled.div */.iK.div`
  ${({ theme, 'data-selected': selected, onClick }) => `
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-gap: ${theme.gridUnit}px;
    border-bottom: 1px solid ${theme.colors.grayscale.light2};
    padding: ${theme.gridUnit * 2}px 0px};
    cursor: ${!onClick ? 'auto' : 'pointer'};
    background: ${selected ? theme.colors.primary.light5 : 'transparent'};
  `}
`;
const DEFAULT_FILTER_SET_NAME = (0,TranslatorSingleton.t)('New filter set');
const FilterSets = ({ dataMaskSelected, onEditFilterSet, disabled, onFilterSelectionChange, isFilterSetChanged }) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const [filterSetName, setFilterSetName] = (0,react.useState)(DEFAULT_FILTER_SET_NAME);
  const [editMode, setEditMode] = (0,react.useState)(false);
  const dataMaskApplied = useNativeFiltersDataMask();
  const filterSets = useFilterSets();
  const filterSetFilterValues = Object.values(filterSets);
  const filters = useFilters();
  const filterValues = Object.values(filters);
  const [selectedFiltersSetId, setSelectedFiltersSetId] = (0,react.useState)(null);
  (0,react.useEffect)(() => {var _foundFilterSet$id;
    if (isFilterSetChanged) {
      return;
    }
    const foundFilterSet = findExistingFilterSet({
      dataMaskSelected,
      filterSetFilterValues });

    setSelectedFiltersSetId((_foundFilterSet$id = foundFilterSet == null ? void 0 : foundFilterSet.id) != null ? _foundFilterSet$id : null);
  }, [isFilterSetChanged, dataMaskSelected, filterSetFilterValues]);
  const isFilterMissingOrContainsInvalidMetadata = (id, filterSet) => {var _filterSet$nativeFilt;return !filterValues.find((filter) => (filter == null ? void 0 : filter.id) === id) ||
    !(0,reduxUtils/* areObjectsEqual */.JB)(filters[id], filterSet == null ? void 0 : (_filterSet$nativeFilt = filterSet.nativeFilters) == null ? void 0 : _filterSet$nativeFilt[id], {
      ignoreUndefined: true });};

  const takeFilterSet = (id, target) => {var _target$parentElement, _target$parentElement2, _target$parentElement3, _target$parentElement4, _target$parentElement5, _target$parentElement6, _Object$values;
    const ignoreSelectorHeader = 'ant-collapse-header';
    const ignoreSelectorDropdown = 'ant-dropdown-menu-item';
    if (target != null && target.classList.contains(ignoreSelectorHeader) ||
    target != null && target.classList.contains(ignoreSelectorDropdown) ||
    target != null && (_target$parentElement = target.parentElement) != null && _target$parentElement.classList.contains(ignoreSelectorHeader) ||
    target != null && (_target$parentElement2 = target.parentElement) != null && (_target$parentElement3 = _target$parentElement2.parentElement) != null && _target$parentElement3.classList.contains(ignoreSelectorHeader) ||
    target != null && (_target$parentElement4 = target.parentElement) != null && (_target$parentElement5 = _target$parentElement4.parentElement) != null && (_target$parentElement6 = _target$parentElement5.parentElement) != null && _target$parentElement6.classList.contains(ignoreSelectorHeader)) {
      // We don't want select filter set when user expand filters
      return;
    }
    setSelectedFiltersSetId(id);
    if (!id) {
      return;
    }
    const filterSet = filterSets[id];
    ((_Object$values = Object.values(filterSet == null ? void 0 : filterSet.dataMask)) != null ? _Object$values : []).forEach((dataMask) => {
      const { extraFormData, filterState, id } = dataMask;
      if (isFilterMissingOrContainsInvalidMetadata(id, filterSet)) {
        return;
      }
      onFilterSelectionChange({ id }, { extraFormData, filterState });
    });
  };
  const handleRebuild = (id) => {var _filterSet$dataMask;
    const filterSet = filterSets[id];
    // We need remove invalid filters from filter set
    const newFilters = Object.values((_filterSet$dataMask = filterSet == null ? void 0 : filterSet.dataMask) != null ? _filterSet$dataMask : {}).
    filter((dataMask) => {
      const { id } = dataMask;
      return !isFilterMissingOrContainsInvalidMetadata(id, filterSet);
    }).
    reduce((prev, next) => ({
      ...prev,
      [next.id]: filters[next.id] }),
    {});
    const updatedFilterSet = {
      ...filterSet,
      nativeFilters: newFilters,
      dataMask: Object.keys(newFilters).reduce((prev, nextFilterId) => {var _filterSet$dataMask2;return {
          ...prev,
          [nextFilterId]: (_filterSet$dataMask2 = filterSet.dataMask) == null ? void 0 : _filterSet$dataMask2[nextFilterId] };},
      {}) };

    dispatch((0,actions_nativeFilters/* setFilterSetsConfiguration */.J8)(filterSetFilterValues.map((filterSetIt) => {
      const isEquals = filterSetIt.id === updatedFilterSet.id;
      return isEquals ? updatedFilterSet : filterSetIt;
    })));
  };
  const handleEdit = (id) => {
    takeFilterSet(id);
    onEditFilterSet(id);
  };
  const handleDeleteFilterSet = (filterSetId) => {
    dispatch((0,actions_nativeFilters/* setFilterSetsConfiguration */.J8)(filterSetFilterValues.filter((filtersSet) => filtersSet.id !== filterSetId)));
    if (filterSetId === selectedFiltersSetId) {
      setSelectedFiltersSetId(null);
    }
  };
  const handleCancel = () => {
    setEditMode(false);
    setFilterSetName(DEFAULT_FILTER_SET_NAME);
  };
  const handleCreateFilterSet = () => {
    const newFilterSet = {
      name: filterSetName.trim(),
      id: generateFiltersSetId(),
      nativeFilters: filters,
      dataMask: Object.keys(filters).reduce((prev, nextFilterId) => ({
        ...prev,
        [nextFilterId]: dataMaskApplied[nextFilterId] }),
      {}) };

    dispatch((0,actions_nativeFilters/* setFilterSetsConfiguration */.J8)([newFilterSet].concat(filterSetFilterValues)));
    setEditMode(false);
    setFilterSetName(DEFAULT_FILTER_SET_NAME);
  };
  return (0,emotion_react_browser_esm.jsx)(FilterSetsWrapper, null,
  !selectedFiltersSetId && (0,emotion_react_browser_esm.jsx)(FilterSetUnitWrapper, null,
  (0,emotion_react_browser_esm.jsx)(FilterSets_FilterSetUnit, { dataMaskSelected: dataMaskSelected, editMode: editMode, setFilterSetName: setFilterSetName, filterSetName: filterSetName }),
  (0,emotion_react_browser_esm.jsx)(FilterSets_Footer, { filterSetName: filterSetName.trim(), disabled: disabled, onCancel: handleCancel, editMode: editMode, onEdit: () => setEditMode(true), onCreate: handleCreateFilterSet })),

  filterSetFilterValues.map((filterSet) => (0,emotion_react_browser_esm.jsx)(FilterSetUnitWrapper, extends_default()({}, getFilterBarTestId('filter-set-wrapper'), { "data-selected": filterSet.id === selectedFiltersSetId, onClick: (e) => takeFilterSet(filterSet.id, e.target), key: filterSet.id }),
  (0,emotion_react_browser_esm.jsx)(FilterSets_FilterSetUnit, { isApplied: filterSet.id === selectedFiltersSetId && !disabled, onDelete: () => handleDeleteFilterSet(filterSet.id), onEdit: () => handleEdit(filterSet.id), onRebuild: () => handleRebuild(filterSet.id), dataMaskSelected: dataMaskSelected, filterSet: filterSet }))));


};
/* harmony default export */ const FilterBar_FilterSets = (FilterSets);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/WarningOutlined.js
// This icon file is generated automatically.
var WarningOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" } }] }, "name": "warning", "theme": "outlined" };
/* harmony default export */ const asn_WarningOutlined = (WarningOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/WarningOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var WarningOutlined_WarningOutlined = function WarningOutlined(props, ref) {
  return react.createElement(AntdIcon/* default */.Z, Object.assign({}, props, {
    ref: ref,
    icon: asn_WarningOutlined
  }));
};

WarningOutlined_WarningOutlined.displayName = 'WarningOutlined';
/* harmony default export */ const icons_WarningOutlined = (react.forwardRef(WarningOutlined_WarningOutlined));
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterSets/EditSection.tsx
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












const EditSection_Wrapper = style/* styled.div */.iK.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: ${({ theme }) => theme.gridUnit}px;
  background: ${({ theme }) => theme.colors.primary.light4};
  padding: ${({ theme }) => theme.gridUnit * 2}px;
`;
const EditSection_Title = (0,style/* styled */.iK)(components/* Typography.Text */.ZT.Text)`
  color: ${({ theme }) => theme.colors.primary.dark2};
`;
const Warning = (0,style/* styled */.iK)(components/* Typography.Text */.ZT.Text)`
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  & .anticon {
    padding: ${({ theme }) => theme.gridUnit}px;
  }
`;
const EditSection_ActionButton = style/* styled.div */.iK.div`
  display: flex;
  & button {
    ${({ disabled }) => `pointer-events: ${disabled ? 'none' : 'all'}`};
    flex: 1;
  }
`;
const EditSection = ({ filterSetId, onCancel, dataMaskSelected, disabled }) => {
  const dataMaskApplied = useNativeFiltersDataMask();
  const dispatch = (0,es/* useDispatch */.I0)();
  const filterSets = useFilterSets();
  const filters = useFilters();
  const filterSetFilterValues = Object.values(filterSets);
  const [filterSetName, setFilterSetName] = (0,react.useState)(filterSets[filterSetId].name);
  const isFilterSetNameDuplicated = useFilterSetNameDuplicated(filterSetName, filterSets[filterSetId].name);
  const handleSave = () => {
    dispatch((0,actions_nativeFilters/* setFilterSetsConfiguration */.J8)(filterSetFilterValues.map((filterSet) => {
      const newFilterSet = {
        ...filterSet,
        name: filterSetName,
        nativeFilters: filters,
        dataMask: { ...dataMaskApplied } };

      return filterSetId === filterSet.id ? newFilterSet : filterSet;
    })));
    onCancel();
  };
  const foundFilterSet = (0,react.useMemo)(() => findExistingFilterSet({
    dataMaskSelected,
    filterSetFilterValues }),
  [dataMaskSelected, filterSetFilterValues]);
  const isDuplicateFilterSet = foundFilterSet && foundFilterSet.id !== filterSetId;
  const resultDisabled = disabled || isDuplicateFilterSet || isFilterSetNameDuplicated;
  return (0,emotion_react_browser_esm.jsx)(EditSection_Wrapper, null,
  (0,emotion_react_browser_esm.jsx)(EditSection_Title, { strong: true }, (0,TranslatorSingleton.t)('Editing filter set:')),
  (0,emotion_react_browser_esm.jsx)(EditSection_Title, { editable: {
      editing: true,
      icon: (0,emotion_react_browser_esm.jsx)("span", null),
      onChange: setFilterSetName } },

  filterSetName),

  (0,emotion_react_browser_esm.jsx)(ActionButtons, null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { ghost: true, buttonStyle: "tertiary", buttonSize: "small", onClick: onCancel },
  (0,TranslatorSingleton.t)('Cancel')),

  (0,emotion_react_browser_esm.jsx)(components/* Tooltip */.u, { placement: "right", title: isFilterSetNameDuplicated &&
    (0,TranslatorSingleton.t)('Filter set with this name already exists') ||
    isDuplicateFilterSet && (0,TranslatorSingleton.t)('Filter set already exists') ||
    disabled && APPLY_FILTERS_HINT },
  (0,emotion_react_browser_esm.jsx)(EditSection_ActionButton, { disabled: resultDisabled },
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, extends_default()({ disabled: resultDisabled, buttonStyle: "primary", htmlType: "submit", buttonSize: "small", onClick: handleSave }, getFilterBarTestId('filter-set-edit-save')),
  (0,TranslatorSingleton.t)('Save'))))),




  isDuplicateFilterSet && (0,emotion_react_browser_esm.jsx)(Warning, { mark: true },
  (0,emotion_react_browser_esm.jsx)(icons_WarningOutlined, null),
  (0,TranslatorSingleton.t)('This filter set is identical to: "%s"', foundFilterSet == null ? void 0 : foundFilterSet.name)));


};
/* harmony default export */ const FilterSets_EditSection = (EditSection);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterConfigurationLink/index.tsx
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







const FilterConfigurationLink_HeaderButton = (0,style/* styled */.iK)(Button/* default */.Z)`
  padding: 0;
`;
const FilterConfigurationLink = ({ createNewOnOpen, children }) => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const [isOpen, setOpen] = (0,react.useState)(false);
  function close() {
    setOpen(false);
  }
  async function submit(filterConfig) {
    dispatch(await (0,actions_nativeFilters/* setFilterConfiguration */.RY)(filterConfig));
    close();
  }
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,

  (0,emotion_react_browser_esm.jsx)(FilterConfigurationLink_HeaderButton, extends_default()({}, getFilterBarTestId('create-filter'), { buttonStyle: "link", buttonSize: "xsmall", onClick: () => setOpen(true) }),
  children),

  (0,emotion_react_browser_esm.jsx)(FiltersConfigModal, { isOpen: isOpen, onSave: submit, onCancel: close, createNewOnOpen: createNewOnOpen }));

};
/* harmony default export */ const FilterBar_FilterConfigurationLink = (FilterConfigurationLink);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/Header/index.tsx
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
/* eslint-disable no-param-reassign */








const TitleArea = style/* styled.h4 */.iK.h4`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: ${({ theme }) => theme.gridUnit * 2}px;

  & > span {
    flex-grow: 1;
  }
`;
const Header_ActionButtons = style/* styled.div */.iK.div`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => `padding: 0 ${theme.gridUnit * 2}px`};

  .btn {
    flex: 1;
  }
`;
const Header_HeaderButton = (0,style/* styled */.iK)(Button/* default */.Z)`
  padding: 0;
`;
const Header_Wrapper = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit}px
    ${({ theme }) => theme.gridUnit * 2}px;
`;
const FilterBar_Header_Header = ({ onApply, onClearAll, isApplyDisabled, dataMaskSelected, dataMaskApplied, toggleFiltersBar }) => {
  const theme = (0,style/* useTheme */.Fg)();
  const filters = useFilters();
  const filterValues = Object.values(filters);
  const canEdit = (0,es/* useSelector */.v9)(({ dashboardInfo }) => dashboardInfo.dash_edit_perm);
  const isClearAllDisabled = Object.values(dataMaskApplied).every((filter) => {var _dataMaskSelected$fil, _dataMaskSelected$fil2, _filter$filterState;return ((_dataMaskSelected$fil = dataMaskSelected[filter.id]) == null ? void 0 : (_dataMaskSelected$fil2 = _dataMaskSelected$fil.filterState) == null ? void 0 : _dataMaskSelected$fil2.value) === null ||
    !dataMaskSelected[filter.id] && ((_filter$filterState = filter.filterState) == null ? void 0 : _filter$filterState.value) === null;});
  return (0,emotion_react_browser_esm.jsx)(Header_Wrapper, null,
  (0,emotion_react_browser_esm.jsx)(TitleArea, null,
  (0,emotion_react_browser_esm.jsx)("span", null, (0,TranslatorSingleton.t)('Filters')),
  canEdit && (0,emotion_react_browser_esm.jsx)(FilterBar_FilterConfigurationLink, { createNewOnOpen: filterValues.length === 0 },
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Edit */.Z.Edit, { iconColor: theme.colors.grayscale.base })),

  (0,emotion_react_browser_esm.jsx)(Header_HeaderButton, extends_default()({}, getFilterBarTestId('collapse-button'), { buttonStyle: "link", buttonSize: "xsmall", onClick: () => toggleFiltersBar(false) }),
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Expand */.Z.Expand, { iconColor: theme.colors.grayscale.base }))),


  (0,emotion_react_browser_esm.jsx)(Header_ActionButtons, null,
  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, extends_default()({ disabled: isClearAllDisabled, buttonStyle: "tertiary", buttonSize: "small", onClick: onClearAll }, getFilterBarTestId('clear-button')),
  (0,TranslatorSingleton.t)('Clear all')),

  (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, extends_default()({ disabled: isApplyDisabled, buttonStyle: "primary", htmlType: "submit", buttonSize: "small", onClick: onApply }, getFilterBarTestId('apply-button')),
  (0,TranslatorSingleton.t)('Apply'))));



};
/* harmony default export */ const FilterBar_Header = (FilterBar_Header_Header);
// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(9060);
;// CONCATENATED MODULE: ./node_modules/react-reverse-portal/dist/web/index.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// Internally, the portalNode must be for either HTML or SVG elements
var ELEMENT_TYPE_HTML = 'html';
var ELEMENT_TYPE_SVG = 'svg';
// ReactDOM can handle several different namespaces, but they're not exported publicly
// https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/DOMNamespaces.js#L8-L10
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var validateElementType = function (domElement, elementType) {
    if (elementType === ELEMENT_TYPE_HTML) {
        return domElement instanceof HTMLElement;
    }
    if (elementType === ELEMENT_TYPE_SVG) {
        return domElement instanceof SVGElement;
    }
    throw new Error("Unrecognized element type \"" + elementType + "\" for validateElementType.");
};
// This is the internal implementation: the public entry points set elementType to an appropriate value
var createPortalNode = function (elementType) {
    var initialProps = {};
    var parent;
    var lastPlaceholder;
    var element;
    if (elementType === ELEMENT_TYPE_HTML) {
        element = document.createElement('div');
    }
    else if (elementType === ELEMENT_TYPE_SVG) {
        element = document.createElementNS(SVG_NAMESPACE, 'g');
    }
    else {
        throw new Error("Invalid element type \"" + elementType + "\" for createPortalNode: must be \"html\" or \"svg\".");
    }
    var portalNode = {
        element: element,
        elementType: elementType,
        setPortalProps: function (props) {
            initialProps = props;
        },
        getInitialPortalProps: function () {
            return initialProps;
        },
        mount: function (newParent, newPlaceholder) {
            if (newPlaceholder === lastPlaceholder) {
                // Already mounted - noop.
                return;
            }
            portalNode.unmount();
            // To support SVG and other non-html elements, the portalNode's elementType needs to match
            // the elementType it's being rendered into
            if (newParent !== parent) {
                if (!validateElementType(newParent, elementType)) {
                    throw new Error("Invalid element type for portal: \"" + elementType + "\" portalNodes must be used with " + elementType + " elements, but OutPortal is within <" + newParent.tagName + ">.");
                }
            }
            newParent.replaceChild(portalNode.element, newPlaceholder);
            parent = newParent;
            lastPlaceholder = newPlaceholder;
        },
        unmount: function (expectedPlaceholder) {
            if (expectedPlaceholder && expectedPlaceholder !== lastPlaceholder) {
                // Skip unmounts for placeholders that aren't currently mounted
                // They will have been automatically unmounted already by a subsequent mount()
                return;
            }
            if (parent && lastPlaceholder) {
                parent.replaceChild(lastPlaceholder, portalNode.element);
                parent = undefined;
                lastPlaceholder = undefined;
            }
        }
    };
    return portalNode;
};
var InPortal = /** @class */ (function (_super) {
    __extends(InPortal, _super);
    function InPortal(props) {
        var _this = _super.call(this, props) || this;
        _this.addPropsChannel = function () {
            Object.assign(_this.props.node, {
                setPortalProps: function (props) {
                    // Rerender the child node here if/when the out portal props change
                    _this.setState({ nodeProps: props });
                }
            });
        };
        _this.state = {
            nodeProps: _this.props.node.getInitialPortalProps(),
        };
        return _this;
    }
    InPortal.prototype.componentDidMount = function () {
        this.addPropsChannel();
    };
    InPortal.prototype.componentDidUpdate = function () {
        this.addPropsChannel();
    };
    InPortal.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, node = _a.node;
        return react_dom.createPortal(react.Children.map(children, function (child) {
            if (!react.isValidElement(child))
                return child;
            return react.cloneElement(child, _this.state.nodeProps);
        }), node.element);
    };
    return InPortal;
}(react.PureComponent));
var OutPortal = /** @class */ (function (_super) {
    __extends(OutPortal, _super);
    function OutPortal(props) {
        var _this = _super.call(this, props) || this;
        _this.placeholderNode = react.createRef();
        _this.passPropsThroughPortal();
        return _this;
    }
    OutPortal.prototype.passPropsThroughPortal = function () {
        var propsForTarget = Object.assign({}, this.props, { node: undefined });
        this.props.node.setPortalProps(propsForTarget);
    };
    OutPortal.prototype.componentDidMount = function () {
        var node = this.props.node;
        this.currentPortalNode = node;
        var placeholder = this.placeholderNode.current;
        var parent = placeholder.parentNode;
        node.mount(parent, placeholder);
        this.passPropsThroughPortal();
    };
    OutPortal.prototype.componentDidUpdate = function () {
        // We re-mount on update, just in case we were unmounted (e.g. by
        // a second OutPortal, which has now been removed)
        var node = this.props.node;
        // If we're switching portal nodes, we need to clean up the current one first.
        if (this.currentPortalNode && node !== this.currentPortalNode) {
            this.currentPortalNode.unmount(this.placeholderNode.current);
            this.currentPortalNode = node;
        }
        var placeholder = this.placeholderNode.current;
        var parent = placeholder.parentNode;
        node.mount(parent, placeholder);
        this.passPropsThroughPortal();
    };
    OutPortal.prototype.componentWillUnmount = function () {
        var node = this.props.node;
        node.unmount(this.placeholderNode.current);
    };
    OutPortal.prototype.render = function () {
        // Render a placeholder to the DOM, so we can get a reference into
        // our location in the DOM, and swap it out for the portaled node.
        // A <div> placeholder works fine even for SVG.
        return react.createElement("div", { ref: this.placeholderNode });
    };
    return OutPortal;
}(react.PureComponent));
var createHtmlPortalNode = createPortalNode.bind(null, ELEMENT_TYPE_HTML);
var createSvgPortalNode = createPortalNode.bind(null, ELEMENT_TYPE_SVG);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lodash/isEqualWith.js
var isEqualWith = __webpack_require__(8802);
var isEqualWith_default = /*#__PURE__*/__webpack_require__.n(isEqualWith);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterControls/utils.ts





















// eslint-disable-next-line import/prefer-default-export
function buildCascadeFiltersTree(filters) {
  const cascadeChildren = mapParentFiltersToChildren(filters);
  const getCascadeFilter = (filter) => {
    const children = cascadeChildren[filter.id] || [];
    return {
      ...filter,
      cascadeChildren: children.map(getCascadeFilter) };

  };
  return filters.
  filter((filter) => {var _filter$cascadeParent;return !((_filter$cascadeParent = filter.cascadeParentIds) != null && _filter$cascadeParent.length);}).
  map(getCascadeFilter);
}
const dispatchFocusAction = debounce_default()((dispatch, id) => {
  if (id) {
    dispatch((0,actions_nativeFilters/* setFocusedNativeFilter */.$7)(id));
  } else
  {
    dispatch((0,actions_nativeFilters/* unsetFocusedNativeFilter */.Up)());
  }
}, 300);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterControls/state.ts
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


// eslint-disable-next-line import/prefer-default-export
function useCascadingFilters(id, dataMaskSelected) {var _filter$cascadeParent;
  const { filters } = (0,es/* useSelector */.v9)((state) => state.nativeFilters);
  const filter = filters[id];
  const cascadeParentIds = (_filter$cascadeParent = filter == null ? void 0 : filter.cascadeParentIds) != null ? _filter$cascadeParent : [];
  let cascadedFilters = {};
  cascadeParentIds.forEach((parentId) => {
    const parentState = dataMaskSelected == null ? void 0 : dataMaskSelected[parentId];
    cascadedFilters = (0,utils/* mergeExtraFormData */.on)(cascadedFilters, parentState == null ? void 0 : parentState.extraFormData);
  });
  return cascadedFilters;
}
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterControls/FilterValue.tsx
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













const HEIGHT = 32;
// Overrides superset-ui height with min-height
const FilterValue_StyledDiv = style/* styled.div */.iK.div`
  & > div {
    height: auto !important;
    min-height: ${HEIGHT}px;
  }
`;
const FilterValue_FilterValue = ({ dataMaskSelected, filter, directPathToChild, onFilterSelectionChange, inView = true }) => {var _filter$dataMask2, _filter$dataMask3, _filter$dataMask4;
  const { id, targets, filterType, adhoc_filters, time_range } = filter;
  const metadata = (0,ChartMetadataRegistrySingleton/* default */.Z)().get(filterType);
  const cascadingFilters = useCascadingFilters(id, dataMaskSelected);
  const isDashboardRefreshing = (0,es/* useSelector */.v9)((state) => state.dashboardState.isRefreshing);
  const [state, setState] = (0,react.useState)([]);
  const [error, setError] = (0,react.useState)('');
  const [formData, setFormData] = (0,react.useState)({
    inView: false });

  const [ownState, setOwnState] = (0,react.useState)({});
  const [inViewFirstTime, setInViewFirstTime] = (0,react.useState)(inView);
  const inputRef = (0,react.useRef)(null);
  const [target] = targets;
  const { datasetId, column = {} } = target;
  const { name: groupby } = column;
  const hasDataSource = !!datasetId;
  const [isLoading, setIsLoading] = (0,react.useState)(hasDataSource);
  const [isRefreshing, setIsRefreshing] = (0,react.useState)(false);
  const dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(() => {
    if (!inViewFirstTime && inView) {
      setInViewFirstTime(true);
    }
  }, [inView, inViewFirstTime, setInViewFirstTime]);
  (0,react.useEffect)(() => {var _filter$dataMask;
    if (!inViewFirstTime) {
      return;
    }
    const newFormData = (0,utils/* getFormData */.zi)({
      ...filter,
      datasetId,
      cascadingFilters,
      groupby,
      inputRef,
      adhoc_filters,
      time_range });

    const filterOwnState = ((_filter$dataMask = filter.dataMask) == null ? void 0 : _filter$dataMask.ownState) || {};
    // TODO: We should try to improve our useEffect hooks to depend more on
    // granular information instead of big objects that require deep comparison.
    const customizer = (objValue, othValue, key) => key === 'url_params' ? true : undefined;
    if (!isRefreshing && (
    !isEqualWith_default()(formData, newFormData, customizer) ||
    !isEqual_default()(ownState, filterOwnState) ||
    isDashboardRefreshing)) {
      setFormData(newFormData);
      setOwnState(filterOwnState);
      if (!hasDataSource) {
        return;
      }
      setIsRefreshing(true);
      (0,chartAction.getChartDataRequest)({
        formData: newFormData,
        force: false,
        requestParams: { dashboardId: 0 },
        ownState: filterOwnState }).

      then(({ response, json }) => {
        if ((0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.GLOBAL_ASYNC_QUERIES */.T.GLOBAL_ASYNC_QUERIES)) {
          // deal with getChartDataRequest transforming the response data
          const result = 'result' in json ? json.result[0] : json;
          if (response.status === 200) {
            setIsRefreshing(false);
            setIsLoading(false);
            setState([result]);
          } else
          if (response.status === 202) {
            (0,asyncEvent/* waitForAsyncData */.YJ)(result).
            then((asyncResult) => {
              setIsRefreshing(false);
              setIsLoading(false);
              setState(asyncResult);
            }).
            catch((error) => {
              setError(error.message || error.error || (0,TranslatorSingleton.t)('Check configuration'));
              setIsRefreshing(false);
              setIsLoading(false);
            });
          } else
          {
            throw new Error(`Received unexpected response status (${response.status}) while fetching chart data`);
          }
        } else
        {
          setState(json.result);
          setError('');
          setIsRefreshing(false);
          setIsLoading(false);
        }
      }).
      catch((error) => {
        setError(error.statusText);
        setIsRefreshing(false);
        setIsLoading(false);
      });
    }
  }, [
  inViewFirstTime,
  cascadingFilters,
  datasetId,
  groupby,
  JSON.stringify(filter),
  hasDataSource,
  isRefreshing,
  isDashboardRefreshing]);

  (0,react.useEffect)(() => {
    if ((directPathToChild == null ? void 0 : directPathToChild[0]) === filter.id) {
      // wait for Cascade Popover to open
      const timeout = setTimeout(() => {var _inputRef$current;
        inputRef == null ? void 0 : (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
      }, 200);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [inputRef, directPathToChild, filter.id]);
  const setDataMask = (dataMask) => onFilterSelectionChange(filter, dataMask);
  const setFocusedFilter = () => dispatchFocusAction(dispatch, id);
  const unsetFocusedFilter = () => dispatchFocusAction(dispatch);
  if (error) {
    return (0,emotion_react_browser_esm.jsx)(BasicErrorAlert, { title: (0,TranslatorSingleton.t)('Cannot load filter'), body: error, level: "error" });
  }
  const isMissingRequiredValue = checkIsMissingRequiredValue(filter, (_filter$dataMask2 = filter.dataMask) == null ? void 0 : _filter$dataMask2.filterState);
  const filterState = {
    ...((_filter$dataMask3 = filter.dataMask) == null ? void 0 : _filter$dataMask3.filterState),
    validateStatus: isMissingRequiredValue && 'error' };

  return (0,emotion_react_browser_esm.jsx)(FilterValue_StyledDiv, null,
  isLoading ? (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, { position: "inline-centered" }) : (0,emotion_react_browser_esm.jsx)(SuperChart/* default */.Z, { height: HEIGHT, width: "100%", formData: formData
    // For charts that don't have datasource we need workaround for empty placeholder
    , queriesData: hasDataSource ? state : [{ data: [{}] }], chartType: filterType, behaviors: [Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER], filterState: filterState, ownState: (_filter$dataMask4 = filter.dataMask) == null ? void 0 : _filter$dataMask4.ownState, enableNoResults: metadata == null ? void 0 : metadata.enableNoResults, isRefreshing: isRefreshing, hooks: { setDataMask, setFocusedFilter, unsetFocusedFilter } }));

};
/* harmony default export */ const FilterControls_FilterValue = (FilterValue_FilterValue);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterControls/FilterControl.tsx
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





const StyledIcon = style/* styled.div */.iK.div`
  position: absolute;
  right: 0;
`;
const StyledFilterControlTitle = style/* styled.h4 */.iK.h4`
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  color: ${({ theme }) => theme.colors.grayscale.dark1};
  margin: 0;
  overflow-wrap: break-word;
`;
const StyledFilterControlTitleBox = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.gridUnit}px;
`;
const StyledFilterControlContainer = (0,style/* styled */.iK)(Form/* Form */.l0)`
  width: 100%;
  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${({ theme }) => theme.gridUnit * 11}px;
  }
`;
const FilterControl = ({ dataMaskSelected, filter, icon, onFilterSelectionChange, directPathToChild, inView }) => {var _filter$dataMask, _filter$controlValues;
  const { name = '<undefined>' } = filter;
  const isMissingRequiredValue = checkIsMissingRequiredValue(filter, (_filter$dataMask = filter.dataMask) == null ? void 0 : _filter$dataMask.filterState);
  return (0,emotion_react_browser_esm.jsx)(StyledFilterControlContainer, { layout: "vertical" },
  (0,emotion_react_browser_esm.jsx)(Form/* FormItem */.xJ, { label: (0,emotion_react_browser_esm.jsx)(StyledFilterControlTitleBox, null,
    (0,emotion_react_browser_esm.jsx)(StyledFilterControlTitle, null,
    name),

    (0,emotion_react_browser_esm.jsx)(StyledIcon, null, icon)),
    required: filter == null ? void 0 : (_filter$controlValues = filter.controlValues) == null ? void 0 : _filter$controlValues.enableEmptyFilter, validateStatus: isMissingRequiredValue ? 'error' : undefined },
  (0,emotion_react_browser_esm.jsx)(FilterControls_FilterValue, { dataMaskSelected: dataMaskSelected, filter: filter, directPathToChild: directPathToChild, onFilterSelectionChange: onFilterSelectionChange, inView: inView })));


};
/* harmony default export */ const FilterControls_FilterControl = (FilterControl);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/CascadeFilters/CascadeFilterControl/index.tsx
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



const CascadeFilterControl_StyledDiv = style/* styled.div */.iK.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .ant-form-item {
    margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  }
`;
const CascadeFilterControl = ({ dataMaskSelected, filter, directPathToChild, onFilterSelectionChange }) => {var _filter$cascadeChildr;return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(FilterControls_FilterControl, { dataMaskSelected: dataMaskSelected, filter: filter, directPathToChild: directPathToChild, onFilterSelectionChange: onFilterSelectionChange }),
  (0,emotion_react_browser_esm.jsx)(CascadeFilterControl_StyledDiv, null, (_filter$cascadeChildr =
  filter.cascadeChildren) == null ? void 0 : _filter$cascadeChildr.map((childFilter) => (0,emotion_react_browser_esm.jsx)(CascadeFilterControl, { key: childFilter.id, dataMaskSelected: dataMaskSelected, filter: childFilter, directPathToChild: directPathToChild, onFilterSelectionChange: onFilterSelectionChange }))));};


/* harmony default export */ const CascadeFilters_CascadeFilterControl = (CascadeFilterControl);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/CascadeFilters/CascadePopover/index.tsx
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







const StyledTitleBox = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayscale.light4};
  margin: ${({ theme }) => theme.gridUnit * -1}px
    ${({ theme }) => theme.gridUnit * -4}px; // to override default antd padding
  padding: ${({ theme }) => theme.gridUnit * 2}px
    ${({ theme }) => theme.gridUnit * 4}px;

  & > *:last-child {
    cursor: pointer;
  }
`;
const CascadePopover_StyledTitle = style/* styled.h4 */.iK.h4`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayscale.dark1};
  margin: 0;
  padding: 0;
`;
const IconStyles = (theme) => emotion_react_browser_esm.css`
  margin-right: ${theme.gridUnit}px;
  color: ${theme.colors.grayscale.dark1};
  width: ${theme.gridUnit * 4}px;
`;
const StyledPill = (0,style/* styled */.iK)(Pill)`
  padding: ${({ theme }) => theme.gridUnit}px
    ${({ theme }) => theme.gridUnit * 2}px;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  background: ${({ theme }) => theme.colors.grayscale.light1};
`;
const ContentWrapper = style/* styled.div */.iK.div`
  max-height: 700px;
  overflow-y: auto;
`;
const CascadePopover = ({ dataMaskSelected, filter, visible, onVisibleChange, onFilterSelectionChange, directPathToChild, inView }) => {var _filter$cascadeChildr;
  const [currentPathToChild, setCurrentPathToChild] = (0,react.useState)();
  const dataMask = dataMaskSelected[filter.id];
  (0,react.useEffect)(() => {
    setCurrentPathToChild(directPathToChild);
    // clear local copy of directPathToChild after 500ms
    // to prevent triggering multiple focus
    const timeout = setTimeout(() => setCurrentPathToChild(undefined), 500);
    return () => clearTimeout(timeout);
  }, [directPathToChild, setCurrentPathToChild]);
  const getActiveChildren = (0,react.useCallback)((filter) => {var _dataMask$filterState;
    const children = filter.cascadeChildren || [];
    const currentValue = dataMask == null ? void 0 : (_dataMask$filterState = dataMask.filterState) == null ? void 0 : _dataMask$filterState.value;
    const activeChildren = children.flatMap((childFilter) => getActiveChildren(childFilter) || []);
    if (activeChildren.length > 0) {
      return activeChildren;
    }
    if (currentValue !== undefined && currentValue !== null) {
      return [filter];
    }
    return null;
  }, [dataMask]);
  const getAllFilters = (filter) => {
    const children = filter.cascadeChildren || [];
    const allChildren = children.flatMap(getAllFilters);
    return [filter, ...allChildren];
  };
  const allFilters = getAllFilters(filter);
  const activeFilters = (0,react.useMemo)(() => getActiveChildren(filter) || [filter], [
  filter,
  getActiveChildren]);

  (0,react.useEffect)(() => {
    const focusedFilterId = currentPathToChild == null ? void 0 : currentPathToChild[0];
    // filters not directly displayed in the Filter Bar
    const inactiveFilters = allFilters.filter((filterEl) => !activeFilters.includes(filterEl));
    const focusedInactiveFilter = inactiveFilters.some((cascadeChild) => cascadeChild.id === focusedFilterId);
    if (focusedInactiveFilter) {
      onVisibleChange(true);
    }
  }, [currentPathToChild]);
  if (!((_filter$cascadeChildr = filter.cascadeChildren) != null && _filter$cascadeChildr.length)) {
    return (0,emotion_react_browser_esm.jsx)(FilterControls_FilterControl, { dataMaskSelected: dataMaskSelected, filter: filter, directPathToChild: directPathToChild, onFilterSelectionChange: onFilterSelectionChange, inView: inView });
  }
  const title = (0,emotion_react_browser_esm.jsx)(StyledTitleBox, null,
  (0,emotion_react_browser_esm.jsx)(CascadePopover_StyledTitle, null,
  (0,emotion_react_browser_esm.jsx)(Icons/* default.Edit */.Z.Edit, { iconSize: "l", css: (theme) => IconStyles(theme) }),
  (0,TranslatorSingleton.t)('Select parent filters'), " (", allFilters.length, ")"),

  (0,emotion_react_browser_esm.jsx)(Icons/* default.Close */.Z.Close, { iconSize: "l", css: (theme) => IconStyles(theme), onClick: () => onVisibleChange(false) }));

  const content = (0,emotion_react_browser_esm.jsx)(ContentWrapper, null,
  (0,emotion_react_browser_esm.jsx)(CascadeFilters_CascadeFilterControl, { dataMaskSelected: dataMaskSelected, key: filter.id, filter: filter, directPathToChild: visible ? currentPathToChild : undefined, onFilterSelectionChange: onFilterSelectionChange }));

  return (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { content: content, title: title, trigger: "click", visible: visible, onVisibleChange: onVisibleChange, placement: "rightTop", id: filter.id, overlayStyle: { width: '400px' } },
  (0,emotion_react_browser_esm.jsx)("div", null,
  activeFilters.map((activeFilter) => (0,emotion_react_browser_esm.jsx)(FilterControls_FilterControl, { dataMaskSelected: dataMaskSelected, key: activeFilter.id, filter: activeFilter, onFilterSelectionChange: onFilterSelectionChange, directPathToChild: currentPathToChild, inView: inView, icon: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    filter.cascadeChildren.length !== 0 && (0,emotion_react_browser_esm.jsx)(StyledPill, { onClick: () => onVisibleChange(true) },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.Filter */.Z.Filter, { iconSize: "m" }), " ", allFilters.length)) }))));




};
/* harmony default export */ const CascadeFilters_CascadePopover = (CascadePopover);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/FilterControls/FilterControls.tsx
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









const FilterControls_Wrapper = style/* styled.div */.iK.div`
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  &:hover {
    cursor: pointer;
  }
`;
const FilterControls = ({ directPathToChild, dataMaskSelected, onFilterSelectionChange }) => {
  const [visiblePopoverId, setVisiblePopoverId] = (0,react.useState)(null);
  const filters = useFilters();
  const filterValues = Object.values(filters);
  const portalNodes = react.useMemo(() => {
    const nodes = new Array(filterValues.length);
    for (let i = 0; i < filterValues.length; i += 1) {
      nodes[i] = createHtmlPortalNode();
    }
    return nodes;
  }, [filterValues.length]);
  const cascadeFilters = (0,react.useMemo)(() => {
    const filtersWithValue = filterValues.map((filter) => ({
      ...filter,
      dataMask: dataMaskSelected[filter.id] }));

    return buildCascadeFiltersTree(filtersWithValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filterValues), dataMaskSelected]);
  const cascadeFilterIds = new Set(cascadeFilters.map((item) => item.id));
  const [filtersInScope, filtersOutOfScope] = useSelectFiltersInScope(cascadeFilters);
  const dashboardHasTabs = useDashboardHasTabs();
  const showCollapsePanel = dashboardHasTabs && cascadeFilters.length > 0;
  return (0,emotion_react_browser_esm.jsx)(FilterControls_Wrapper, null,
  portalNodes.
  filter((node, index) => cascadeFilterIds.has(filterValues[index].id)).
  map((node, index) => (0,emotion_react_browser_esm.jsx)(InPortal, { node: node },
  (0,emotion_react_browser_esm.jsx)(CascadeFilters_CascadePopover, { key: cascadeFilters[index].id, dataMaskSelected: dataMaskSelected, visible: visiblePopoverId === cascadeFilters[index].id, onVisibleChange: (visible) => setVisiblePopoverId(visible ? cascadeFilters[index].id : null), filter: cascadeFilters[index], onFilterSelectionChange: onFilterSelectionChange, directPathToChild: directPathToChild, inView: false }))),

  filtersInScope.map((filter) => {
    const index = filterValues.findIndex((f) => f.id === filter.id);
    return (0,emotion_react_browser_esm.jsx)(OutPortal, { node: portalNodes[index], inView: true });
  }),
  showCollapsePanel && (0,emotion_react_browser_esm.jsx)(components/* Collapse */.UO, { ghost: true, bordered: true, expandIconPosition: "right", collapsible: filtersOutOfScope.length === 0 ? 'disabled' : undefined, css: (theme) => /*#__PURE__*/(0,emotion_react_browser_esm.css)("&.ant-collapse{margin-top:",

    filtersInScope.length > 0 ?
    theme.gridUnit * 6 :
    0, "px;&>.ant-collapse-item{&>.ant-collapse-header{padding-left:0;padding-bottom:",



    theme.gridUnit * 2, "px;&>.ant-collapse-arrow{right:",


    theme.gridUnit, "px;}}& .ant-collapse-content-box{padding:",




    theme.gridUnit * 4, "px 0 0;}}}" + ( true ? "" : 0),  true ? "" : 0) },




  (0,emotion_react_browser_esm.jsx)(components/* Collapse.Panel */.UO.Panel, { header: `${(0,TranslatorSingleton.t)('Filters out of scope')} (${filtersOutOfScope.length})`, key: "1" },
  filtersOutOfScope.map((filter) => {
    const index = cascadeFilters.findIndex((f) => f.id === filter.id);
    return (0,emotion_react_browser_esm.jsx)(OutPortal, { node: portalNodes[index], inView: true });
  }))));



};
/* harmony default export */ const FilterControls_FilterControls = (FilterControls);
;// CONCATENATED MODULE: ./src/dashboard/components/nativeFilters/FilterBar/index.tsx
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
/* eslint-disable no-param-reassign */
























const FILTER_BAR_TEST_ID = 'filter-bar';
const getFilterBarTestId = (0,testUtils/* testWithId */.Q)(FILTER_BAR_TEST_ID);
const BarWrapper = style/* styled.div */.iK.div`
  width: ${({ theme }) => theme.gridUnit * 8}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${({ width }) => width}px; // arbitrary...
  }
`;
const Bar = style/* styled.div */.iK.div`
  & .ant-typography-edit-content {
    left: 0;
    margin-top: 0;
    width: 100%;
  }
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-grow: 1;
  width: ${({ width }) => width}px;
  background: ${({ theme }) => theme.colors.grayscale.light5};
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  min-height: 100%;
  display: none;

  &.open {
    display: flex;
  }
`;
const CollapsedBar = style/* styled.div */.iK.div`
  position: absolute;
  top: ${({ offset }) => offset}px;
  left: 0;
  height: 100%;
  width: ${({ theme }) => theme.gridUnit * 8}px;
  padding-top: ${({ theme }) => theme.gridUnit * 2}px;
  display: none;
  text-align: center;

  &.open {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.gridUnit * 2}px;
  }

  svg {
    cursor: pointer;
  }
`;
const StyledCollapseIcon = (0,style/* styled */.iK)(Icons/* default.Collapse */.Z.Collapse)`
  color: ${({ theme }) => theme.colors.primary.base};
  margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
`;
const StyledFilterIcon = (0,style/* styled */.iK)(Icons/* default.Filter */.Z.Filter)`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
const FilterBar_StyledTabs = (0,style/* styled */.iK)(components/* Tabs */.mQ)`
  & .ant-tabs-nav-list {
    width: 100%;
  }
  & .ant-tabs-tab {
    display: flex;
    justify-content: center;
    margin: 0;
    flex: 1;
  }
`;
const FilterBar = ({ filtersOpen, toggleFiltersBar, directPathToChild, width, height, offset }) => {
  const history = (0,react_router/* useHistory */.k6)();
  const dataMaskApplied = useNativeFiltersDataMask();
  const [editFilterSetId, setEditFilterSetId] = (0,react.useState)(null);
  const [dataMaskSelected, setDataMaskSelected] = (0,use_immer_module/* useImmer */.x)(dataMaskApplied);
  const dispatch = (0,es/* useDispatch */.I0)();
  const filterSets = useFilterSets();
  const filterSetFilterValues = Object.values(filterSets);
  const [tab, setTab] = (0,react.useState)(TabIds.AllFilters);
  const filters = useFilters();
  const previousFilters = (0,usePrevious/* usePrevious */.D)(filters);
  const filterValues = Object.values(filters);
  const [isFilterSetChanged, setIsFilterSetChanged] = (0,react.useState)(false);
  const handleFilterSelectionChange = (filter, dataMask) => {
    setIsFilterSetChanged(tab !== TabIds.AllFilters);
    setDataMaskSelected((draft) => {var _dataMask$filterState, _dataMaskSelected$fil, _dataMaskSelected$fil2;
      // force instant updating on initialization for filters with `requiredFirst` is true or instant filters
      if (
      // filterState.value === undefined - means that value not initialized
      ((_dataMask$filterState = dataMask.filterState) == null ? void 0 : _dataMask$filterState.value) !== undefined &&
      ((_dataMaskSelected$fil = dataMaskSelected[filter.id]) == null ? void 0 : (_dataMaskSelected$fil2 = _dataMaskSelected$fil.filterState) == null ? void 0 : _dataMaskSelected$fil2.value) === undefined &&
      filter.requiredFirst) {
        dispatch((0,actions/* updateDataMask */.eG)(filter.id, dataMask));
      }
      draft[filter.id] = {
        ...(0,reducer/* getInitialDataMask */.H)(filter.id),
        ...dataMask };

    });
  };
  const publishDataMask = (0,react.useCallback)((dataMaskSelected) => {
    const { location } = history;
    const { search } = location;
    const previousParams = new (url_search_params_default())(search);
    const newParams = new (url_search_params_default())();
    previousParams.forEach((value, key) => {
      if (key !== src_constants/* URL_PARAMS.nativeFilters.name */.KD.nativeFilters.name) {
        newParams.append(key, value);
      }
    });
    newParams.set(src_constants/* URL_PARAMS.nativeFilters.name */.KD.nativeFilters.name, rison_default().encode(replaceUndefinedByNull(dataMaskSelected)));
    // pathname could be updated somewhere else through window.history
    // keep react router history in sync with window history
    history.location.pathname = window.location.pathname;
    history.replace({
      search: newParams.toString() });

  }, [history]);
  (0,react.useEffect)(() => {
    if (previousFilters) {
      const updates = {};
      Object.values(filters).forEach((currentFilter) => {
        const currentType = currentFilter.filterType;
        const currentTargets = currentFilter.targets;
        const currentDataMask = currentFilter.defaultDataMask;
        const previousFilter = previousFilters == null ? void 0 : previousFilters[currentFilter.id];
        const previousType = previousFilter == null ? void 0 : previousFilter.filterType;
        const previousTargets = previousFilter == null ? void 0 : previousFilter.targets;
        const previousDataMask = previousFilter == null ? void 0 : previousFilter.defaultDataMask;
        const typeChanged = currentType !== previousType;
        const targetsChanged = !isEqual_default()(currentTargets, previousTargets);
        const dataMaskChanged = !isEqual_default()(currentDataMask, previousDataMask);
        if (typeChanged || targetsChanged || dataMaskChanged) {
          updates[currentFilter.id] = (0,reducer/* getInitialDataMask */.H)(currentFilter.id);
        }
      });
      if (!isEmpty_default()(updates)) {
        setDataMaskSelected((draft) => ({ ...draft, ...updates }));
        Object.keys(updates).forEach((key) => dispatch((0,actions/* clearDataMask */.ze)(key)));
      }
    }
  }, [JSON.stringify(filters), JSON.stringify(previousFilters)]);
  (0,react.useEffect)(() => {
    setDataMaskSelected(() => dataMaskApplied);
  }, [JSON.stringify(dataMaskApplied), setDataMaskSelected]);
  const dataMaskAppliedText = JSON.stringify(dataMaskApplied);
  (0,react.useEffect)(() => {
    publishDataMask(dataMaskApplied);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMaskAppliedText, publishDataMask]);
  const handleApply = () => {
    const filterIds = Object.keys(dataMaskSelected);
    filterIds.forEach((filterId) => {
      if (dataMaskSelected[filterId]) {
        dispatch((0,actions/* updateDataMask */.eG)(filterId, dataMaskSelected[filterId]));
      }
    });
  };
  const handleClearAll = () => {
    const filterIds = Object.keys(dataMaskSelected);
    filterIds.forEach((filterId) => {
      if (dataMaskSelected[filterId]) {
        dispatch((0,actions/* clearDataMask */.ze)(filterId));
      }
    });
  };
  useFilterUpdates(dataMaskSelected, setDataMaskSelected);
  const isApplyDisabled = checkIsApplyDisabled(dataMaskSelected, dataMaskApplied, filterValues);
  const isInitialized = useInitialization();
  return (0,emotion_react_browser_esm.jsx)(BarWrapper, extends_default()({}, getFilterBarTestId(), { className: classnames_default()({ open: filtersOpen }), width: width }),
  (0,emotion_react_browser_esm.jsx)(CollapsedBar, extends_default()({}, getFilterBarTestId('collapsable'), { className: classnames_default()({ open: !filtersOpen }), onClick: () => toggleFiltersBar(true), offset: offset }),
  (0,emotion_react_browser_esm.jsx)(StyledCollapseIcon, extends_default()({}, getFilterBarTestId('expand-button'), { iconSize: "l" })),
  (0,emotion_react_browser_esm.jsx)(StyledFilterIcon, extends_default()({}, getFilterBarTestId('filter-icon'), { iconSize: "l" }))),

  (0,emotion_react_browser_esm.jsx)(Bar, { className: classnames_default()({ open: filtersOpen }), width: width },
  (0,emotion_react_browser_esm.jsx)(FilterBar_Header, { toggleFiltersBar: toggleFiltersBar, onApply: handleApply, onClearAll: handleClearAll, isApplyDisabled: isApplyDisabled, dataMaskSelected: dataMaskSelected, dataMaskApplied: dataMaskApplied }),
  !isInitialized ? (0,emotion_react_browser_esm.jsx)("div", { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ height },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null)) :
  (0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.DASHBOARD_NATIVE_FILTERS_SET */.T.DASHBOARD_NATIVE_FILTERS_SET) ? (0,emotion_react_browser_esm.jsx)(FilterBar_StyledTabs, { centered: true, onChange: setTab, defaultActiveKey: TabIds.AllFilters, activeKey: editFilterSetId ? TabIds.AllFilters : undefined },
  (0,emotion_react_browser_esm.jsx)(components/* Tabs.TabPane */.mQ.TabPane, { tab: (0,TranslatorSingleton.t)(`All Filters (${filterValues.length})`), key: TabIds.AllFilters, css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ overflow: 'auto', height },  true ? "" : 0,  true ? "" : 0) },
  editFilterSetId && (0,emotion_react_browser_esm.jsx)(FilterSets_EditSection, { dataMaskSelected: dataMaskSelected, disabled: !isApplyDisabled, onCancel: () => setEditFilterSetId(null), filterSetId: editFilterSetId }),
  (0,emotion_react_browser_esm.jsx)(FilterControls_FilterControls, { dataMaskSelected: dataMaskSelected, directPathToChild: directPathToChild, onFilterSelectionChange: handleFilterSelectionChange })),

  (0,emotion_react_browser_esm.jsx)(components/* Tabs.TabPane */.mQ.TabPane, { disabled: !!editFilterSetId, tab: (0,TranslatorSingleton.t)(`Filter Sets (${filterSetFilterValues.length})`), key: TabIds.FilterSets, css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ overflow: 'auto', height },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)(FilterBar_FilterSets, { onEditFilterSet: setEditFilterSetId, disabled: !isApplyDisabled, dataMaskSelected: dataMaskSelected, isFilterSetChanged: isFilterSetChanged, onFilterSelectionChange: handleFilterSelectionChange }))) :

  (0,emotion_react_browser_esm.jsx)("div", { css: /*#__PURE__*/(0,emotion_react_browser_esm.css)({ overflow: 'auto', height },  true ? "" : 0,  true ? "" : 0) },
  (0,emotion_react_browser_esm.jsx)(FilterControls_FilterControls, { dataMaskSelected: dataMaskSelected, directPathToChild: directPathToChild, onFilterSelectionChange: handleFilterSelectionChange }))));



};
/* harmony default export */ const nativeFilters_FilterBar = (FilterBar);
;// CONCATENATED MODULE: ./src/dashboard/components/DashboardBuilder/utils.ts
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


const getRootLevelTabsComponent = (dashboardLayout) => {
  const dashboardRoot = dashboardLayout[constants/* DASHBOARD_ROOT_ID */._4];
  const rootChildId = dashboardRoot.children[0];
  return rootChildId === constants/* DASHBOARD_GRID_ID */.PV ?
  dashboardLayout[constants/* DASHBOARD_ROOT_ID */._4] :
  dashboardLayout[rootChildId];
};
const shouldFocusTabs = (event, container) =>
// don't focus the tabs when we click on a tab
event.target.className === 'ant-tabs-nav-wrap' ||
container.contains(event.target);
const getRootLevelTabIndex = (dashboardLayout, directPathToChild) => Math.max(0, findTabIndexByComponentId({
  currentComponent: getRootLevelTabsComponent(dashboardLayout),
  directPathToChild }));
;// CONCATENATED MODULE: ./src/dashboard/components/DashboardGrid.jsx
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









const DashboardGrid_propTypes = {
  depth: (prop_types_default()).number.isRequired,
  editMode: (prop_types_default()).bool.isRequired,
  gridComponent: propShapes/* componentShape.isRequired */.cP.isRequired,
  handleComponentDrop: (prop_types_default()).func.isRequired,
  isComponentVisible: (prop_types_default()).bool.isRequired,
  resizeComponent: (prop_types_default()).func.isRequired,
  setDirectPathToChild: (prop_types_default()).func.isRequired,
  width: (prop_types_default()).number.isRequired };


const DashboardGrid_defaultProps = {};

const DashboardGrid_renderDraggableContentBottom = (dropProps) =>
dropProps.dropIndicatorProps &&
(0,emotion_react_browser_esm.jsx)("div", { className: "drop-indicator drop-indicator--bottom" });


const DashboardGrid_renderDraggableContentTop = (dropProps) =>
dropProps.dropIndicatorProps &&
(0,emotion_react_browser_esm.jsx)("div", { className: "drop-indicator drop-indicator--top" });


class DashboardGrid extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isResizing: false,
      rowGuideTop: null };


    this.handleResizeStart = this.handleResizeStart.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleResizeStop = this.handleResizeStop.bind(this);
    this.handleTopDropTargetDrop = this.handleTopDropTargetDrop.bind(this);
    this.getRowGuidePosition = this.getRowGuidePosition.bind(this);
    this.setGridRef = this.setGridRef.bind(this);
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  getRowGuidePosition(resizeRef) {
    if (resizeRef && this.grid) {
      return (
        resizeRef.getBoundingClientRect().bottom -
        this.grid.getBoundingClientRect().top -
        2);

    }
    return null;
  }

  setGridRef(ref) {
    this.grid = ref;
  }

  handleResizeStart({ ref, direction }) {
    let rowGuideTop = null;
    if (direction === 'bottom' || direction === 'bottomRight') {
      rowGuideTop = this.getRowGuidePosition(ref);
    }

    this.setState(() => ({
      isResizing: true,
      rowGuideTop }));

  }

  handleResize({ ref, direction }) {
    if (direction === 'bottom' || direction === 'bottomRight') {
      this.setState(() => ({ rowGuideTop: this.getRowGuidePosition(ref) }));
    }
  }

  handleResizeStop({ id, widthMultiple: width, heightMultiple: height }) {
    this.props.resizeComponent({ id, width, height });

    this.setState(() => ({
      isResizing: false,
      rowGuideTop: null }));

  }

  handleTopDropTargetDrop(dropResult) {
    if (dropResult) {
      this.props.handleComponentDrop({
        ...dropResult,
        destination: {
          ...dropResult.destination,
          // force appending as the first child if top drop target
          index: 0 } });


    }
  }

  handleChangeTab({ pathToTabIndex }) {
    this.props.setDirectPathToChild(pathToTabIndex);
  }

  render() {var _gridComponent$childr, _gridComponent$childr2;
    const {
      gridComponent,
      handleComponentDrop,
      depth,
      editMode,
      width,
      isComponentVisible } =
    this.props;
    const columnPlusGutterWidth =
    (width + constants/* GRID_GUTTER_SIZE */.es) / constants/* GRID_COLUMN_COUNT */.cz;

    const columnWidth = columnPlusGutterWidth - constants/* GRID_GUTTER_SIZE */.es;
    const { isResizing, rowGuideTop } = this.state;

    return width < 100 ? null :
    (0,emotion_react_browser_esm.jsx)("div", { className: "dashboard-grid", ref: this.setGridRef },
    (0,emotion_react_browser_esm.jsx)("div", { className: "grid-content" },

    editMode &&
    (0,emotion_react_browser_esm.jsx)(DragDroppable, {
      component: gridComponent,
      depth: depth,
      parentComponent: null,
      index: 0,
      orientation: "column",
      onDrop: this.handleTopDropTargetDrop,
      className: "empty-droptarget",
      editMode: true },

    DashboardGrid_renderDraggableContentBottom),



    gridComponent == null ? void 0 : (_gridComponent$childr = gridComponent.children) == null ? void 0 : _gridComponent$childr.map((id, index) =>
    (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, {
      key: id,
      id: id,
      parentId: gridComponent.id,
      depth: depth + 1,
      index: index,
      availableColumnCount: constants/* GRID_COLUMN_COUNT */.cz,
      columnWidth: columnWidth,
      isComponentVisible: isComponentVisible,
      onResizeStart: this.handleResizeStart,
      onResize: this.handleResize,
      onResizeStop: this.handleResizeStop,
      onChangeTab: this.handleChangeTab })),




    editMode && (gridComponent == null ? void 0 : (_gridComponent$childr2 = gridComponent.children) == null ? void 0 : _gridComponent$childr2.length) > 0 &&
    (0,emotion_react_browser_esm.jsx)(DragDroppable, {
      component: gridComponent,
      depth: depth,
      parentComponent: null,
      index: gridComponent.children.length,
      orientation: "column",
      onDrop: handleComponentDrop,
      className: "empty-droptarget",
      editMode: true },

    DashboardGrid_renderDraggableContentTop),



    isResizing &&
    Array(constants/* GRID_COLUMN_COUNT */.cz).
    fill(null).
    map((_, i) =>
    (0,emotion_react_browser_esm.jsx)("div", {
      key: `grid-column-${i}`,
      className: "grid-column-guide",
      style: {
        left: i * constants/* GRID_GUTTER_SIZE */.es + i * columnWidth,
        width: columnWidth } })),




    isResizing && rowGuideTop &&
    (0,emotion_react_browser_esm.jsx)("div", {
      className: "grid-row-guide",
      style: {
        top: rowGuideTop,
        width } })));






  }}


DashboardGrid.propTypes = DashboardGrid_propTypes;
DashboardGrid.defaultProps = DashboardGrid_defaultProps;

/* harmony default export */ const components_DashboardGrid = (DashboardGrid);
;// CONCATENATED MODULE: ./src/dashboard/containers/DashboardGrid.jsx
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







function DashboardGrid_mapStateToProps({ dashboardState }) {
  return {
    editMode: dashboardState.editMode };

}

function DashboardGrid_mapDispatchToProps(dispatch) {
  return (0,redux/* bindActionCreators */.DE)(
  {
    handleComponentDrop: actions_dashboardLayout/* handleComponentDrop */._p,
    resizeComponent: actions_dashboardLayout/* resizeComponent */.iO,
    setDirectPathToChild: dashboardState/* setDirectPathToChild */.E2 },

  dispatch);

}

/* harmony default export */ const containers_DashboardGrid = ((0,es/* connect */.$j)(DashboardGrid_mapStateToProps, DashboardGrid_mapDispatchToProps)(components_DashboardGrid));
;// CONCATENATED MODULE: ./src/dashboard/components/DashboardBuilder/DashboardContainer.tsx
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
// ParentSize uses resize observer so the dashboard will update size
// when its container size changes, due to e.g., builder side panel opening













const DashboardContainer = ({ topLevelTabs }) => {var _useSelector;
  const dashboardLayout = (0,es/* useSelector */.v9)((state) => state.dashboardLayout.present);
  const nativeFilters = (_useSelector = (0,es/* useSelector */.v9)((state) => {var _state$nativeFilters;return (_state$nativeFilters = state.nativeFilters) == null ? void 0 : _state$nativeFilters.filters;})) != null ? _useSelector :
  {};
  const directPathToChild = (0,es/* useSelector */.v9)((state) => state.dashboardState.directPathToChild);
  const [tabIndex, setTabIndex] = (0,react.useState)(getRootLevelTabIndex(dashboardLayout, directPathToChild));
  const dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(() => {
    const nextTabIndex = findTabIndexByComponentId({
      currentComponent: getRootLevelTabsComponent(dashboardLayout),
      directPathToChild });

    if (nextTabIndex > -1) {
      setTabIndex(nextTabIndex);
    }
  }, [getLeafComponentIdFromPath(directPathToChild)]);
  // recalculate charts and tabs in scopes of native filters only when a scope or dashboard layout changes
  const filterScopes = Object.values(nativeFilters).map((filter) => ({
    id: filter.id,
    scope: filter.scope }));

  (0,react.useEffect)(() => {
    if (!(0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.DASHBOARD_NATIVE_FILTERS */.T.DASHBOARD_NATIVE_FILTERS) ||
    filterScopes.length === 0) {
      return;
    }
    const scopes = filterScopes.map((filterScope) => {
      const { scope } = filterScope;
      const chartsInScope = (0,activeDashboardFilters/* getChartIdsInFilterScope */.Q1)({
        filterScope: {
          scope: scope.rootPath,
          // @ts-ignore
          immune: scope.excluded } });


      const tabsInScope = (0,utils/* findTabsWithChartsInScope */.Rz)(dashboardLayout, chartsInScope);
      return {
        filterId: filterScope.id,
        tabsInScope: Array.from(tabsInScope),
        chartsInScope };

    });
    dispatch((0,actions_nativeFilters/* setInScopeStatusOfFilters */.xk)(scopes));
  }, [JSON.stringify(filterScopes), dashboardLayout, dispatch]);
  const childIds = topLevelTabs ?
  topLevelTabs.children :
  [constants/* DASHBOARD_GRID_ID */.PV];
  const min = Math.min(tabIndex, childIds.length - 1);
  const activeKey = min === 0 ? constants/* DASHBOARD_GRID_ID */.PV : min.toString();
  return (0,emotion_react_browser_esm.jsx)("div", { className: "grid-container" },
  (0,emotion_react_browser_esm.jsx)(ParentSize, null,
  ({ width }) =>
  /*
    We use a TabContainer irrespective of whether top-level tabs exist to maintain
    a consistent React component tree. This avoids expensive mounts/unmounts of
    the entire dashboard upon adding/removing top-level tabs, which would otherwise
    happen because of React's diffing algorithm
  */
  (0,emotion_react_browser_esm.jsx)(components_Tabs/* default */.ZP, { id: constants/* DASHBOARD_GRID_ID */.PV, activeKey: activeKey, renderTabBar: () => (0,emotion_react_browser_esm.jsx)(react.Fragment, null), fullWidth: false, animated: false, allowOverflow: true },
  childIds.map((id, index) =>
  // Matching the key of the first TabPane irrespective of topLevelTabs
  // lets us keep the same React component tree when !!topLevelTabs changes.
  // This avoids expensive mounts/unmounts of the entire dashboard.
  (0,emotion_react_browser_esm.jsx)(components_Tabs/* default.TabPane */.ZP.TabPane, { key: index === 0 ? constants/* DASHBOARD_GRID_ID */.PV : index.toString() },
  (0,emotion_react_browser_esm.jsx)(containers_DashboardGrid, { gridComponent: dashboardLayout[id]
    // see isValidChild for why tabs do not increment the depth of their children
    , depth: constants/* DASHBOARD_ROOT_DEPTH */.Mu + 1 // (topLevelTabs ? 0 : 1)}
    , width: width, isComponentVisible: index === tabIndex }))))));




};
/* harmony default export */ const DashboardBuilder_DashboardContainer = (DashboardContainer);
;// CONCATENATED MODULE: ./src/dashboard/components/DashboardBuilder/state.ts
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






// eslint-disable-next-line import/prefer-default-export
const useNativeFilters = () => {var _getUrlParam;
  const [isInitialized, setIsInitialized] = (0,react.useState)(false);
  const [dashboardFiltersOpen, setDashboardFiltersOpen] = (0,react.useState)((_getUrlParam = (0,urlUtils/* getUrlParam */.e)(src_constants/* URL_PARAMS.showFilters */.KD.showFilters)) != null ? _getUrlParam : true);
  const showNativeFilters = (0,es/* useSelector */.v9)((state) => {var _state$dashboardInfo$;return (_state$dashboardInfo$ = state.dashboardInfo.metadata) == null ? void 0 : _state$dashboardInfo$.show_native_filters;});
  const canEdit = (0,es/* useSelector */.v9)(({ dashboardInfo }) => dashboardInfo.dash_edit_perm);
  const filters = useFilters();
  const filterValues = Object.values(filters);
  const nativeFiltersEnabled = showNativeFilters &&
  (0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.DASHBOARD_NATIVE_FILTERS */.T.DASHBOARD_NATIVE_FILTERS) && (
  canEdit || !canEdit && filterValues.length !== 0);
  const requiredFirstFilter = filterValues.filter((filter) => filter.requiredFirst);
  const dataMask = useNativeFiltersDataMask();
  const showDashboard = isInitialized ||
  !nativeFiltersEnabled ||
  !(nativeFiltersEnabled &&
  requiredFirstFilter.length &&
  requiredFirstFilter.find(({ id }) => {var _dataMask$id, _dataMask$id$filterSt;return ((_dataMask$id = dataMask[id]) == null ? void 0 : (_dataMask$id$filterSt = _dataMask$id.filterState) == null ? void 0 : _dataMask$id$filterSt.value) === undefined;}));
  const toggleDashboardFiltersOpen = (visible) => {
    setDashboardFiltersOpen(visible != null ? visible : !dashboardFiltersOpen);
  };
  (0,react.useEffect)(() => {
    if (filterValues.length === 0 &&
    dashboardFiltersOpen &&
    nativeFiltersEnabled) {
      toggleDashboardFiltersOpen(false);
    }
  }, [filterValues.length]);
  (0,react.useEffect)(() => {
    if (showDashboard) {
      setIsInitialized(true);
    }
  }, [showDashboard]);
  return {
    showDashboard,
    dashboardFiltersOpen,
    toggleDashboardFiltersOpen,
    nativeFiltersEnabled };

};
;// CONCATENATED MODULE: ./src/dashboard/components/DashboardBuilder/DashboardBuilder.tsx
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
/* eslint-env browser */


























const MAIN_HEADER_HEIGHT = 53;
const TABS_HEIGHT = 50;
const HEADER_HEIGHT = 72;
const CLOSED_FILTER_BAR_WIDTH = 32;
const OPEN_FILTER_BAR_WIDTH = 260;
const FILTER_BAR_HEADER_HEIGHT = 80;
const FILTER_BAR_TABS_HEIGHT = 46;
const DashboardBuilder_StyledDiv = style/* styled.div */.iK.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  flex: 1;
`;
// @z-index-above-dashboard-charts + 1 = 11
const FiltersPanel = style/* styled.div */.iK.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
`;
const StickyPanel = style/* styled.div */.iK.div`
  position: sticky;
  top: -1px;
  width: ${({ width }) => width}px;
  flex: 0 0 ${({ width }) => width}px;
`;
// @z-index-above-dashboard-popovers (99) + 1 = 100
const DashboardBuilder_StyledHeader = style/* styled.div */.iK.div`
  grid-column: 2;
  grid-row: 1;
  position: sticky;
  top: 0px;
  z-index: 100;
`;
const DashboardBuilder_StyledContent = style/* styled.div */.iK.div`
  grid-column: 2;
  grid-row: 2;
  // @z-index-above-dashboard-header (100) + 1 = 101
  ${({ fullSizeChartId }) => fullSizeChartId && `z-index: 101;`}
`;
const StyledDashboardContent = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  flex: 1;

  .grid-container .dashboard-component-tabs {
    box-shadow: none;
    padding-left: 0;
  }

  .grid-container {
    /* without this, the grid will not get smaller upon toggling the builder panel on */
    width: 0px;
    flex: 1;
    position: relative;
    margin-top: ${({ theme }) => theme.gridUnit * 6}px;
    margin-right: ${({ theme }) => theme.gridUnit * 8}px;
    margin-bottom: ${({ theme }) => theme.gridUnit * 6}px;
    margin-left: ${({ theme, dashboardFiltersOpen, editMode }) => {
  if (!dashboardFiltersOpen && !editMode) {
    return 0;
  }
  return theme.gridUnit * 8;
}}px;
  }

  .dashboard-component-chart-holder {
    // transitionable traits to show filter relevance
    transition: opacity ${({ theme }) => theme.transitionTiming}s,
      border-color ${({ theme }) => theme.transitionTiming}s,
      box-shadow ${({ theme }) => theme.transitionTiming}s;
    border: 0 solid transparent;
  }
`;
const DashboardBuilder = () => {
  const dispatch = (0,es/* useDispatch */.I0)();
  const dashboardLayout = (0,es/* useSelector */.v9)((state) => state.dashboardLayout.present);
  const editMode = (0,es/* useSelector */.v9)((state) => state.dashboardState.editMode);
  const directPathToChild = (0,es/* useSelector */.v9)((state) => state.dashboardState.directPathToChild);
  const fullSizeChartId = (0,es/* useSelector */.v9)((state) => state.dashboardState.fullSizeChartId);
  const handleChangeTab = (0,react.useCallback)(({ pathToTabIndex }) => {
    dispatch((0,dashboardState/* setDirectPathToChild */.E2)(pathToTabIndex));
  }, [dispatch]);
  const handleDeleteTopLevelTabs = (0,react.useCallback)(() => {
    dispatch((0,actions_dashboardLayout/* deleteTopLevelTabs */.g3)());
    const firstTab = getDirectPathToTabIndex(getRootLevelTabsComponent(dashboardLayout), 0);
    dispatch((0,dashboardState/* setDirectPathToChild */.E2)(firstTab));
  }, [dashboardLayout, dispatch]);
  const handleDrop = (0,react.useCallback)((dropResult) => dispatch((0,actions_dashboardLayout/* handleComponentDrop */._p)(dropResult)), [dispatch]);
  const dashboardRoot = dashboardLayout[constants/* DASHBOARD_ROOT_ID */._4];
  const rootChildId = dashboardRoot.children[0];
  const topLevelTabs = rootChildId !== constants/* DASHBOARD_GRID_ID */.PV ?
  dashboardLayout[rootChildId] :
  undefined;
  const StandaloneMode = (0,urlUtils/* getUrlParam */.e)(src_constants/* URL_PARAMS.standalone */.KD.standalone);
  const isReport = StandaloneMode === constants/* DashboardStandaloneMode.REPORT */._B.REPORT;
  const hideDashboardHeader = StandaloneMode === constants/* DashboardStandaloneMode.HIDE_NAV_AND_TITLE */._B.HIDE_NAV_AND_TITLE || isReport;
  const barTopOffset = (hideDashboardHeader ? 0 : HEADER_HEIGHT) + (
  topLevelTabs ? TABS_HEIGHT : 0);
  const { showDashboard, dashboardFiltersOpen, toggleDashboardFiltersOpen, nativeFiltersEnabled } = useNativeFilters();
  const filterBarWidth = dashboardFiltersOpen ?
  OPEN_FILTER_BAR_WIDTH :
  CLOSED_FILTER_BAR_WIDTH;
  const [containerRef, isSticky] = useElementOnScreen({
    threshold: [1] });

  const filterSetEnabled = (0,src_featureFlags/* isFeatureEnabled */.cr)(featureFlags/* FeatureFlag.DASHBOARD_NATIVE_FILTERS_SET */.T.DASHBOARD_NATIVE_FILTERS_SET);
  const offset = FILTER_BAR_HEADER_HEIGHT + (
  isSticky || StandaloneMode ? 0 : MAIN_HEADER_HEIGHT) + (
  filterSetEnabled ? FILTER_BAR_TABS_HEIGHT : 0);
  const filterBarHeight = `calc(100vh - ${offset}px)`;
  const filterBarOffset = dashboardFiltersOpen ? 0 : barTopOffset + 20;
  const draggableStyle = (0,react.useMemo)(() => ({
    marginLeft: dashboardFiltersOpen || editMode ? 0 : -32 }),
  [dashboardFiltersOpen, editMode]);
  const renderDraggableContent = (0,react.useCallback)(({ dropIndicatorProps }) => (0,emotion_react_browser_esm.jsx)("div", null,
  !hideDashboardHeader && (0,emotion_react_browser_esm.jsx)(DashboardHeader, null),
  dropIndicatorProps && (0,emotion_react_browser_esm.jsx)("div", dropIndicatorProps),
  !isReport && topLevelTabs && (0,emotion_react_browser_esm.jsx)(WithPopoverMenu, { shouldFocus: shouldFocusTabs, menuItems: [
    (0,emotion_react_browser_esm.jsx)(components_IconButton, { icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.FallOutlined */.Z.FallOutlined, { iconSize: "xl" }), label: "Collapse tab content", onClick: handleDeleteTopLevelTabs })],
    editMode: editMode },

  (0,emotion_react_browser_esm.jsx)(containers_DashboardComponent, { id: topLevelTabs == null ? void 0 : topLevelTabs.id, parentId: constants/* DASHBOARD_ROOT_ID */._4, depth: constants/* DASHBOARD_ROOT_DEPTH */.Mu + 1, index: 0, renderTabContent: false, renderHoverMenu: false, onChangeTab: handleChangeTab }))),

  [
  editMode,
  handleChangeTab,
  handleDeleteTopLevelTabs,
  hideDashboardHeader,
  isReport,
  topLevelTabs]);

  return (0,emotion_react_browser_esm.jsx)(DashboardBuilder_StyledDiv, null,
  nativeFiltersEnabled && !editMode && (0,emotion_react_browser_esm.jsx)(FiltersPanel, null,
  (0,emotion_react_browser_esm.jsx)(StickyPanel, { ref: containerRef, width: filterBarWidth },
  (0,emotion_react_browser_esm.jsx)(ErrorBoundary/* default */.Z, null,
  (0,emotion_react_browser_esm.jsx)(nativeFilters_FilterBar, { filtersOpen: dashboardFiltersOpen, toggleFiltersBar: toggleDashboardFiltersOpen, directPathToChild: directPathToChild, width: filterBarWidth, height: filterBarHeight, offset: filterBarOffset })))),



  (0,emotion_react_browser_esm.jsx)(DashboardBuilder_StyledHeader, null,

  (0,emotion_react_browser_esm.jsx)(DragDroppable, { component: dashboardRoot, parentComponent: null, depth: constants/* DASHBOARD_ROOT_DEPTH */.Mu, index: 0, orientation: "column", onDrop: handleDrop, editMode: editMode
    // you cannot drop on/displace tabs if they already exist
    , disableDragDrop: !!topLevelTabs, style: draggableStyle },
  renderDraggableContent)),


  (0,emotion_react_browser_esm.jsx)(DashboardBuilder_StyledContent, { fullSizeChartId: fullSizeChartId },
  (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.Global, { styles: emotion_react_browser_esm.css`
            // @z-index-above-dashboard-header (100) + 1 = 101
            ${fullSizeChartId &&
    `div > .filterStatusPopover.ant-popover{z-index: 101}`}
          ` }),
  (0,emotion_react_browser_esm.jsx)("div", { className: classnames_default()('dashboard', editMode && 'dashboard--editing') },
  (0,emotion_react_browser_esm.jsx)(StyledDashboardContent, { className: "dashboard-content", dashboardFiltersOpen: dashboardFiltersOpen, editMode: editMode },
  showDashboard ? (0,emotion_react_browser_esm.jsx)(DashboardBuilder_DashboardContainer, { topLevelTabs: topLevelTabs }) : (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null),
  editMode && (0,emotion_react_browser_esm.jsx)(components_BuilderComponentPane, { topOffset: barTopOffset })))));




};
/* harmony default export */ const DashboardBuilder_DashboardBuilder = (DashboardBuilder);
// EXTERNAL MODULE: ./src/components/OmniContainer/index.tsx + 2 modules
var OmniContainer = __webpack_require__(49997);
;// CONCATENATED MODULE: ./src/dashboard/util/isDashboardEmpty.ts
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

const USER_CONTENT_COMPONENT_TYPE = [componentTypes/* CHART_TYPE */.dW, componentTypes/* MARKDOWN_TYPE */.xh];
function isDashboardEmpty(layout) {
  // has at least one chart or markdown component
  return !Object.values(layout).some(({ type }) => type && USER_CONTENT_COMPONENT_TYPE.includes(type));
}
;// CONCATENATED MODULE: ./src/dashboard/util/charts/getOwnDataCharts.ts

const arrayDiff = (a, b) => [
...a.filter((x) => !b.includes(x)),
...b.filter((x) => !a.includes(x))];

const getAffectedOwnDataCharts = (ownDataCharts, appliedOwnDataCharts) => {
  const chartIds = Object.keys(ownDataCharts);
  const appliedChartIds = Object.keys(appliedOwnDataCharts);
  const affectedIds = arrayDiff(chartIds, appliedChartIds).filter((id) => ownDataCharts[id] || appliedOwnDataCharts[id]);
  const checkForUpdateIds = new Set([...chartIds, ...appliedChartIds]);
  checkForUpdateIds.forEach((chartId) => {
    if (!(0,reduxUtils/* areObjectsEqual */.JB)(ownDataCharts[chartId], appliedOwnDataCharts[chartId])) {
      affectedIds.push(chartId);
    }
  });
  return [...new Set(affectedIds)];
};
;// CONCATENATED MODULE: ./src/dashboard/components/Dashboard.jsx
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



















const Dashboard_propTypes = {
  actions: prop_types_default().shape({
    addSliceToDashboard: (prop_types_default()).func.isRequired,
    removeSliceFromDashboard: (prop_types_default()).func.isRequired,
    triggerQuery: (prop_types_default()).func.isRequired,
    logEvent: (prop_types_default()).func.isRequired,
    clearDataMaskState: (prop_types_default()).func.isRequired }).
  isRequired,
  dashboardInfo: propShapes/* dashboardInfoPropShape.isRequired */.$X.isRequired,
  dashboardState: propShapes/* dashboardStatePropShape.isRequired */.DZ.isRequired,
  charts: prop_types_default().objectOf(propShapes/* chartPropShape */.$6).isRequired,
  slices: prop_types_default().objectOf(propShapes/* slicePropShape */.Rw).isRequired,
  activeFilters: (prop_types_default()).object.isRequired,
  chartConfiguration: (prop_types_default()).object.isRequired,
  datasources: (prop_types_default()).object.isRequired,
  ownDataCharts: (prop_types_default()).object.isRequired,
  layout: (prop_types_default()).object.isRequired,
  impressionId: (prop_types_default()).string.isRequired,
  initMessages: (prop_types_default()).array,
  timeout: (prop_types_default()).number,
  userId: (prop_types_default()).string };


const Dashboard_defaultProps = {
  initMessages: [],
  timeout: 60,
  userId: '' };


class Dashboard extends react.PureComponent {


  static onBeforeUnload(hasChanged) {
    if (hasChanged) {
      window.addEventListener('beforeunload', Dashboard.unload);
    } else {
      window.removeEventListener('beforeunload', Dashboard.unload);
    }
  }

  static unload() {
    const message = (0,TranslatorSingleton.t)('You have unsaved changes.');
    window.event.returnValue = message; // Gecko + IE
    return message; // Gecko + Webkit, Safari, Chrome etc.
  }

  constructor(props) {var _props$activeFilters, _props$ownDataCharts;
    super(props);
    this.appliedFilters = (_props$activeFilters = props.activeFilters) != null ? _props$activeFilters : {};
    this.appliedOwnDataCharts = (_props$ownDataCharts = props.ownDataCharts) != null ? _props$ownDataCharts : {};
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  componentDidMount() {
    const appContainer = document.getElementById('app');
    const bootstrapData = (appContainer == null ? void 0 : appContainer.getAttribute('data-bootstrap')) || '';
    const { dashboardState, layout } = this.props;
    const eventData = {
      is_soft_navigation: LogUtils/* Logger.timeOriginOffset */.Yd.timeOriginOffset > 0,
      is_edit_mode: dashboardState.editMode,
      mount_duration: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp(),
      is_empty: isDashboardEmpty(layout),
      is_published: dashboardState.isPublished,
      bootstrap_data_length: bootstrapData.length };

    const directLinkComponentId = (0,getLocationHash/* default */.Z)();
    if (directLinkComponentId) {
      eventData.target_id = directLinkComponentId;
    }
    this.props.actions.logEvent(LogUtils/* LOG_ACTIONS_MOUNT_DASHBOARD */.Wl, eventData);

    // Handle browser tab visibility change
    if (document.visibilityState === 'hidden') {
      this.visibilityEventData = {
        start_offset: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp(),
        ts: new Date().getTime() };

    }
    window.addEventListener('visibilitychange', this.onVisibilityChange);
    this.applyCharts();
  }

  componentDidUpdate() {
    this.applyCharts();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const currentChartIds = getChartIdsFromLayout(this.props.layout);
    const nextChartIds = getChartIdsFromLayout(nextProps.layout);

    if (this.props.dashboardInfo.id !== nextProps.dashboardInfo.id) {
      // single-page-app navigation check
      return;
    }

    if (currentChartIds.length < nextChartIds.length) {
      const newChartIds = nextChartIds.filter(
      (key) => currentChartIds.indexOf(key) === -1);

      newChartIds.forEach((newChartId) =>
      this.props.actions.addSliceToDashboard(
      newChartId,
      getLayoutComponentFromChartId(nextProps.layout, newChartId)));


    } else if (currentChartIds.length > nextChartIds.length) {
      // remove chart
      const removedChartIds = currentChartIds.filter(
      (key) => nextChartIds.indexOf(key) === -1);

      removedChartIds.forEach((removedChartId) =>
      this.props.actions.removeSliceFromDashboard(removedChartId));

    }
  }

  applyCharts() {
    const { hasUnsavedChanges, editMode } = this.props.dashboardState;

    const { appliedFilters, appliedOwnDataCharts } = this;
    const { activeFilters, ownDataCharts, chartConfiguration } = this.props;
    if (
    (0,featureFlags/* isFeatureEnabled */.c)(featureFlags/* FeatureFlag.DASHBOARD_CROSS_FILTERS */.T.DASHBOARD_CROSS_FILTERS) &&
    !chartConfiguration)
    {
      // For a first loading we need to wait for cross filters charts data loaded to get all active filters
      // for correct comparing  of filters to avoid unnecessary requests
      return;
    }

    if (
    !editMode && (
    !(0,reduxUtils/* areObjectsEqual */.JB)(appliedOwnDataCharts, ownDataCharts, {
      ignoreUndefined: true }) ||

    !(0,reduxUtils/* areObjectsEqual */.JB)(appliedFilters, activeFilters, {
      ignoreUndefined: true })))

    {
      this.applyFilters();
    }

    if (hasUnsavedChanges) {
      Dashboard.onBeforeUnload(true);
    } else {
      Dashboard.onBeforeUnload(false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.props.actions.clearDataMaskState();
  }

  onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      // from visible to hidden
      this.visibilityEventData = {
        start_offset: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp(),
        ts: new Date().getTime() };

    } else if (document.visibilityState === 'visible') {
      // from hidden to visible
      const logStart = this.visibilityEventData.start_offset;
      this.props.actions.logEvent(LogUtils/* LOG_ACTIONS_HIDE_BROWSER_TAB */.Ev, {
        ...this.visibilityEventData,
        duration: LogUtils/* Logger.getTimestamp */.Yd.getTimestamp() - logStart });

    }
  }

  // return charts in array
  getAllCharts() {
    return Object.values(this.props.charts);
  }

  applyFilters() {
    const { appliedFilters } = this;
    const { activeFilters, ownDataCharts } = this.props;

    // refresh charts if a filter was removed, added, or changed
    const currFilterKeys = Object.keys(activeFilters);
    const appliedFilterKeys = Object.keys(appliedFilters);

    const allKeys = new Set(currFilterKeys.concat(appliedFilterKeys));
    const affectedChartIds = getAffectedOwnDataCharts(
    ownDataCharts,
    this.appliedOwnDataCharts);

    [...allKeys].forEach((filterKey) => {
      if (
      !currFilterKeys.includes(filterKey) &&
      appliedFilterKeys.includes(filterKey))
      {
        // filterKey is removed?
        affectedChartIds.push(...appliedFilters[filterKey].scope);
      } else if (!appliedFilterKeys.includes(filterKey)) {
        // filterKey is newly added?
        affectedChartIds.push(...activeFilters[filterKey].scope);
      } else {
        // if filterKey changes value,
        // update charts in its scope
        if (
        !(0,reduxUtils/* areObjectsEqual */.JB)(
        appliedFilters[filterKey].values,
        activeFilters[filterKey].values,
        {
          ignoreUndefined: true }))


        {
          affectedChartIds.push(...activeFilters[filterKey].scope);
        }

        // if filterKey changes scope,
        // update all charts in its scope
        if (
        !(0,reduxUtils/* areObjectsEqual */.JB)(
        appliedFilters[filterKey].scope,
        activeFilters[filterKey].scope))

        {
          const chartsInScope = (activeFilters[filterKey].scope || []).concat(
          appliedFilters[filterKey].scope || []);

          affectedChartIds.push(...chartsInScope);
        }
      }
    });

    // remove dup in affectedChartIds
    this.refreshCharts([...new Set(affectedChartIds)]);
    this.appliedFilters = activeFilters;
    this.appliedOwnDataCharts = ownDataCharts;
  }

  refreshCharts(ids) {
    ids.forEach((id) => {
      this.props.actions.triggerQuery(true, id);
    });
  }

  render() {
    if (this.context.loading) {
      return (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null);
    }
    return (
      (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      (0,emotion_react_browser_esm.jsx)(OmniContainer/* default */.Z, null),
      (0,emotion_react_browser_esm.jsx)(DashboardBuilder_DashboardBuilder, null)));


  }}Dashboard.contextType = DynamicPlugins/* PluginContext */.Zn;


Dashboard.propTypes = Dashboard_propTypes;
Dashboard.defaultProps = Dashboard_defaultProps;

/* harmony default export */ const components_Dashboard = (Dashboard);
// EXTERNAL MODULE: ./src/dashboard/actions/datasources.ts
var datasources = __webpack_require__(50810);
;// CONCATENATED MODULE: ./src/dashboard/containers/Dashboard.ts
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










function Dashboard_mapStateToProps(state) {var _dashboardInfo$metada, _dashboardInfo$metada2;
  const { datasources, sliceEntities, charts, dataMask, dashboardInfo, dashboardState, dashboardLayout, impressionId, nativeFilters } = state;
  return {
    initMessages: dashboardInfo.common.flash_messages,
    timeout: dashboardInfo.common.conf.SUPERSET_WEBSERVER_TIMEOUT,
    userId: dashboardInfo.userId,
    dashboardInfo,
    dashboardState,
    charts,
    datasources,
    // filters prop: a map structure for all the active filter_box's values and scope in this dashboard,
    // for each filter field. map key is [chartId_column]
    // When dashboard is first loaded into browser,
    // its value is from preselect_filters that dashboard owner saved in dashboard's meta data
    // When user start interacting with dashboard, it will be user picked values from all filter_box
    activeFilters: {
      ...(0,activeDashboardFilters/* getActiveFilters */.De)(),
      ...getAllActiveFilters({
        // eslint-disable-next-line camelcase
        chartConfiguration: (_dashboardInfo$metada = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada.chart_configuration,
        nativeFilters: nativeFilters.filters,
        dataMask,
        layout: dashboardLayout.present }) },


    chartConfiguration: (_dashboardInfo$metada2 = dashboardInfo.metadata) == null ? void 0 : _dashboardInfo$metada2.chart_configuration,
    ownDataCharts: getRelevantDataMask(dataMask, 'ownState'),
    slices: sliceEntities.slices,
    layout: dashboardLayout.present,
    impressionId };

}
function Dashboard_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux/* bindActionCreators */.DE)({
      setDatasources: datasources/* setDatasources */.Fy,
      clearDataMaskState: actions/* clearDataMaskState */.sh,
      addSliceToDashboard: dashboardState/* addSliceToDashboard */.Pi,
      removeSliceFromDashboard: dashboardState/* removeSliceFromDashboard */.rL,
      triggerQuery: chartAction.triggerQuery,
      logEvent: logger_actions.logEvent },
    dispatch) };

}
/* harmony default export */ const containers_Dashboard = ((0,es/* connect */.$j)(Dashboard_mapStateToProps, Dashboard_mapDispatchToProps)(components_Dashboard));

/***/ }),

/***/ 90057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ i),
/* harmony export */   "C": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18172);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function i(f){var u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return (0,immer__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .vV)("function"==typeof f?f():f,!0)}),i=u[1];return[u[0],(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(t){i("function"==typeof t?(0,immer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(t):(0,immer__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .vV)(t))},[])]}function e(r,t,o){var i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return (0,immer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(r)},[r]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(i,t,o)}
//# sourceMappingURL=use-immer.module.js.map


/***/ })

}]);