'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOrValue;
function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}