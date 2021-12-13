"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valueOrIdentity;
function valueOrIdentity(x) {
  if (x && x.value) return x.value;
  return x;
}