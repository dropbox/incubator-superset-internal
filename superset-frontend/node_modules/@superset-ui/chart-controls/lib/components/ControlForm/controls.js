"use strict";

exports.__esModule = true;
exports.ControlFormItemComponents = void 0;

var _antd = require("antd");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _Select = _interopRequireDefault(require("../Select"));

var _RadioButtonControl = _interopRequireDefault(require("../../shared-controls/components/RadioButtonControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ControlFormItemComponents = {
  Slider: _antd.Slider,
  InputNumber: _antd.InputNumber,
  Input: _antd.Input,
  Select: _Select.default,
  // Directly export Checkbox will result in "using name from external module" error
  // ref: https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but
  Checkbox: _checkbox.default,
  RadioButtonControl: _RadioButtonControl.default
};
exports.ControlFormItemComponents = ControlFormItemComponents;