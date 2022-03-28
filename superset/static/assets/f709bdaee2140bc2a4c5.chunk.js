"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9013],{

/***/ 99013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _rect, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCheckboxOn({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 24,
    height: 25,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 4,
    y: 4.5,
    width: 16,
    height: 16,
    rx: 2,
    fill: "currentColor"
  })), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7201 9.29006L10.4301 13.5901L8.78008 11.9401C8.53569 11.6547 8.15196 11.5304 7.78666 11.6183C7.42136 11.7061 7.13614 11.9913 7.04827 12.3566C6.9604 12.7219 7.08471 13.1057 7.37008 13.3501L9.72008 15.7101C9.9088 15.8972 10.1643 16.0016 10.4301 16.0001C10.6924 15.999 10.9438 15.8948 11.1301 15.7101L16.1301 10.7101C16.3194 10.5223 16.4259 10.2667 16.4259 10.0001C16.4259 9.73342 16.3194 9.47783 16.1301 9.29006C15.74 8.90234 15.1101 8.90234 14.7201 9.29006Z",
    fill: "white"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgCheckboxOn);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);