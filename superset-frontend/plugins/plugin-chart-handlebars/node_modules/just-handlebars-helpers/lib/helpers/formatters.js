'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCurrency = formatCurrency;

var _utils = require('../util/utils');

/**
 * Format the currency according to the country.
 *
 * @example
 *      {{formatCurrency 1234567.89 code='USD'}}  => $1,234,567.89
 *      {{formatCurrency 1234567.89 code='EUR'}}  => 1.234.567,89 €
 *      {{formatCurrency 1234567.89 code='EUR' locale="en"}}  => €1,234,567.89
 *
 * @param {number} value
 * @param {any} args
 * @returns {string}
 */
function formatCurrency(value) {
  var currencyFormatter = global.OSREC && global.OSREC.CurrencyFormatter;
  var handlebars = global.Handlebars;

  if (!currencyFormatter) {
    currencyFormatter = require('currencyformatter.js');
  }

  if (!handlebars) {
    handlebars = require('handlebars');
  }

  var params = {};

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if ((0, _utils.isObject)(args[0]) && (0, _utils.isObject)(args[0].hash)) {
    params = args[0].hash;
  }

  params.currency = !(0, _utils.isUndefined)(params.code) ? params.code : params.currency;

  if (!(0, _utils.isUndefined)(params.currency) && !(params.currency in currencyFormatter.symbols)) {
    console.error('Invalid currency code ' + params.currency + ' provided for helper `formatCurrency`.');

    return;
  }

  if (!(0, _utils.isNumeric)(value)) {
    return;
  }

  return new handlebars.SafeString(currencyFormatter.format(value, params));
}