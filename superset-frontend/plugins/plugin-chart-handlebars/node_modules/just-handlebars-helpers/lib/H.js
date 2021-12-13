'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Utils


// Helpers


var _utils = require('./util/utils');

var _html = require('./helpers/html');

var html = _interopRequireWildcard(_html);

var _math = require('./helpers/math');

var math = _interopRequireWildcard(_math);

var _strings = require('./helpers/strings');

var strings = _interopRequireWildcard(_strings);

var _datetime = require('./helpers/datetime');

var datetime = _interopRequireWildcard(_datetime);

var _formatters = require('./helpers/formatters');

var formatters = _interopRequireWildcard(_formatters);

var _conditionals = require('./helpers/conditionals');

var conditionals = _interopRequireWildcard(_conditionals);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for just-handlebars-helpers.
 */
var H = function () {
  function H() {
    _classCallCheck(this, H);
  }

  _createClass(H, null, [{
    key: 'registerHelpers',

    /**
     * Static method to register just-handlebars-helpers with Handlebars.
     *
     * @param {*} handlebars
     */
    value: function registerHelpers(handlebars) {

      handlebars = handlebars || global.Handlebars;

      if (!(0, _utils.isObject)(handlebars)) {
        // In case, handlebars is not provided and it's not available
        // in the global namespace as well throw the error and halt.
        throw new Error('Handlebars not loaded');
      }

      // Helpers list
      var helpers = [math, html, strings, conditionals, datetime, formatters];

      helpers.forEach(function (helper) {
        // Register all the helper functions to Handlebars
        for (var name in helper) {
          handlebars.registerHelper(name, helper[name]);
        }
      });
    }
  }]);

  return H;
}();

exports.default = H;