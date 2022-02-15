"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[158],{

/***/ 30158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgTag({
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
    d: "M8.00002 6.00002C7.44773 6.00002 7.00002 6.44773 7.00002 7.00002C7.00002 7.5523 7.44773 8.00002 8.00002 8.00002C8.5523 8.00002 9.00002 7.5523 9.00002 7.00002C9.00002 6.44773 8.5523 6.00002 8.00002 6.00002ZM22.71 11.78L13.23 2.32002C13.0415 2.11679 12.7772 2.00091 12.5 2.00002H6.50002C6.23421 1.99848 5.97874 2.10283 5.79002 2.29002L3.29002 4.78002C3.10283 4.96874 2.99848 5.22421 3.00002 5.49002V11.49C3.0037 11.7548 3.10728 12.0084 3.29002 12.2L12.78 21.7C12.9717 21.8827 13.2253 21.9863 13.49 21.99C13.7558 21.9916 14.0113 21.8872 14.2 21.7L22.71 13.19C22.8972 13.0013 23.0016 12.7458 23 12.48C22.9938 12.2187 22.8904 11.9691 22.71 11.78ZM13.49 19.59L5.00002 11.09V5.90002L6.90002 4.00002H12.08L20.58 12.49L13.49 19.59Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgTag);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);