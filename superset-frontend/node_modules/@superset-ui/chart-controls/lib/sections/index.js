"use strict";

exports.__esModule = true;

var _sections = require("./sections");

Object.keys(_sections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sections[key]) return;
  exports[key] = _sections[key];
});

var _advancedAnalytics = require("./advancedAnalytics");

Object.keys(_advancedAnalytics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _advancedAnalytics[key]) return;
  exports[key] = _advancedAnalytics[key];
});

var _annotationsAndLayers = require("./annotationsAndLayers");

Object.keys(_annotationsAndLayers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _annotationsAndLayers[key]) return;
  exports[key] = _annotationsAndLayers[key];
});

var _forecastInterval = require("./forecastInterval");

Object.keys(_forecastInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _forecastInterval[key]) return;
  exports[key] = _forecastInterval[key];
});

var _chartTitle = require("./chartTitle");

Object.keys(_chartTitle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _chartTitle[key]) return;
  exports[key] = _chartTitle[key];
});