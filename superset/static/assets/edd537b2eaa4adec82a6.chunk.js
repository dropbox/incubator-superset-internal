"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5350],{

/***/ 75350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgNavCharts({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 20H4V3H3V21H21V20Z",
    fill: "currentColor"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 4C16.4477 4 16 4.44772 16 5V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V5C19 4.44772 18.5523 4 18 4H17ZM11 8C11 7.44772 11.4477 7 12 7H13C13.5523 7 14 7.44772 14 8V18C14 18.5523 13.5523 19 13 19H12C11.4477 19 11 18.5523 11 18V8ZM6 11C6 10.4477 6.44772 10 7 10H8C8.55228 10 9 10.4477 9 11V18C9 18.5523 8.55228 19 8 19H7C6.44772 19 6 18.5523 6 18V11Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgNavCharts);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);