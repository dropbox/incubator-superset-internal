"use strict";

exports.__esModule = true;

var _sharedModules = require("./shared-modules");

Object.keys(_sharedModules).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sharedModules[key]) return;
  exports[key] = _sharedModules[key];
});