"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.difference = difference;
exports.multiplication = multiplication;
exports.division = division;
exports.remainder = remainder;
exports.ceil = ceil;
exports.floor = floor;
exports.abs = abs;
/**
 * A sum helper calculating the sum of two numbers.
 *
 * @example
 *      {{sum 1 2}}     => 3
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function sum(value1, value2) {
  return Number(value1) + Number(value2);
}

/**
 * A difference helper calculating the difference of two numbers.
 *
 * @example
 *      {{difference 5 2}}  => 3
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function difference(value1, value2) {
  return Number(value1) - Number(value2);
}

/**
 * A multiplication helper calculating the multiplication of two numbers.
 *
 * @example
 *      {{multiplication 5 2}}  => 10
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function multiplication(value1, value2) {
  return Number(value1) * Number(value2);
}

/**
 * A division helper calculating the division of two numbers.
 *
 * @example
 *      {{division 5 2}}  => 2.5
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function division(value1, value2) {
  return Number(value1) / Number(value2);
}

/**
 * A remainder helper calculating the remainder of two numbers.
 *
 * @example
 *      {{remainder 5 2}}  => 1
 *
 * @param {number} value1
 * @param {number} value2
 * @returns {number}
 */
function remainder(value1, value2) {
  return Number(value1) % Number(value2);
}

/**
 * A ceil helper to find the ceil value of the number.
 *
 * @example
 *      {{ceil 5.6}}    => 6
 *
 * @param {number} value
 * @returns {number}
 */
function ceil(value) {
  return Math.ceil(Number(value));
}

/**
 * A floor helper to find the floor value of the number.
 *
 * @example
 *      {{floor 5.6}} => 5
 *
 * @param {number} value
 * @returns {number}
 */
function floor(value) {
  return Math.floor(Number(value));
}

/**
 * An abs helper to find the absolute value of the number.
 *
 * @example
 *      {{abs -5.6}} => 5.6
 *
 * @param {number} value
 * @returns {number}
 */
function abs(value) {
  return Math.abs(Number(value));
}