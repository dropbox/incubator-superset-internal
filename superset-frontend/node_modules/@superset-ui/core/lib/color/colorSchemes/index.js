"use strict";

exports.__esModule = true;

var _categorical = require("./categorical");

Object.keys(_categorical).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _categorical[key]) return;
  exports[key] = _categorical[key];
});

var _sequential = require("./sequential");

Object.keys(_sequential).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sequential[key]) return;
  exports[key] = _sequential[key];
});