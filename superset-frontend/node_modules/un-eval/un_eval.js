; (function () {

  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this;

  var safeJson = function (obj) {
    return JSON.stringify(obj)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  };
  
  var un_eval = (function () {

    var numberToString = Number.prototype.toString;
    var numberValueOf = Number.prototype.valueOf;
    var stringValueOf = String.prototype.valueOf;
    var booleanValueOf = Boolean.prototype.valueOf;
    var regexpToString = RegExp.prototype.toString;
    var dateGetTime = Date.prototype.getTime;
    var functionToString = Function.prototype.toString;
    var arrayMap = Array.prototype.map;

    var helper = function helper(obj, seen) {
      try {
        if (obj === null) return 'null'; // null
        if (obj === void 0) return '(void 0)'; // undefined
        if (obj == null) return '({})'; // maybe undetectable
        if (typeof obj === 'number') {
          if (obj === 0 && 1 / obj === -Infinity) return '-0';
          // toString should work all values but not -0
          return numberToString.call(obj);
        }
        // string or boolean
        if (!(obj instanceof Object)) return safeJson(obj);
        // String, Number, Boolean
        if (obj instanceof String) return '(new String(' + helper(stringValueOf.call(obj)) + '))';
        if (obj instanceof Number) return '(new Number(' + helper(numberValueOf.call(obj)) + '))';
        if (obj instanceof Boolean) return '(new Boolean(' + helper(booleanValueOf.call(obj)) + '))';
        // RegExp; toString should work
        if (obj instanceof RegExp) return regexpToString.call(obj);
        // Date; convert obj to Number should work
        if (obj instanceof Date) return '(new Date(' + helper(dateGetTime.call(obj)) + '))';
        // Function
        if (obj instanceof Function) {
          var func = functionToString.call(obj);
          if (/\{\s*\[native code\]\s*\}\s*$/.test(func)) return null;
          return '(' + func + ')';
        }
        if (seen.indexOf(obj) !== -1) {
          if (obj instanceof Array) return '[]';
          return '({})';
        }
        var newSeen = seen.concat([obj]);
        // Array
        if (obj instanceof Array) {
          var array = arrayMap.call(obj, function (o) { return helper(o, newSeen); });
          // Add a comma at end if last element is a hole
          var lastHole = array.length && !((array.length - 1) in array);
          return '[' + array.join(', ') + (lastHole ? ',' : '') + ']';
        }
        // Object
        if (obj instanceof Object) {
          var pairs = [];
          for (var key in obj) {
            pairs.push(safeJson(key) + ':' + helper(obj[key], newSeen));
          }
          return '({' + pairs.join(', ') + '})';
        }
        return '({})';
      } catch (_ignore1) { }
      // there should be something wrong; maybe obj is a Proxy
      try {
        if (obj instanceof Object) return '({})';
        else return 'null';
      } catch (_ignore2) { }
      // there really should be something wrong which cannot be handled
      return 'null';
    };
    return function un_eval(obj) {
      return helper(obj, []);
    };
  }());

  un_eval.VERSION = '1.0.2';
  
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = un_eval;
    }
    exports.un_eval = un_eval;
  } else {
    root.un_eval = un_eval;
  }
  if (typeof define == 'function' && define.amd) {
    define('un_eval', [], function() {
      return un_eval;
    });
  }

}());
