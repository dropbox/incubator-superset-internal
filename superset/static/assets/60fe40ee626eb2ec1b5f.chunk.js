"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9305],{

/***/ 19305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgFilter({
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
    d: "M9.59961 17.8C9.59961 18.3523 10.0473 18.8 10.5996 18.8H13.3996C13.9519 18.8 14.3996 18.3523 14.3996 17.8V17.8C14.3996 17.2477 13.9519 16.8 13.3996 16.8H10.5996C10.0473 16.8 9.59961 17.2477 9.59961 17.8V17.8ZM2.59961 4C2.04732 4 1.59961 4.44772 1.59961 5V5C1.59961 5.55228 2.04732 6 2.59961 6H21.3996C21.9519 6 22.3996 5.55228 22.3996 5V5C22.3996 4.44772 21.9519 4 21.3996 4H2.59961ZM6.39961 11.4C6.39961 11.9523 6.84732 12.4 7.39961 12.4H16.5996C17.1519 12.4 17.5996 11.9523 17.5996 11.4V11.4C17.5996 10.8477 17.1519 10.4 16.5996 10.4H7.39961C6.84732 10.4 6.39961 10.8477 6.39961 11.4V11.4Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgFilter);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);