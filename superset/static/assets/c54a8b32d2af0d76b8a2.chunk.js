"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3985],{

/***/ 69932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgFull({
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
    d: "M18 10.82C17.4477 10.82 17 11.2677 17 11.82V19C17 19.5523 16.5523 20 16 20H5C4.44772 20 4 19.5523 4 19V8C4 7.44772 4.44772 7 5 7H12.18C12.7323 7 13.18 6.55228 13.18 6C13.18 5.44772 12.7323 5 12.18 5H5C3.34315 5 2 6.34315 2 8V19C2 20.6569 3.34315 22 5 22H16C17.6569 22 19 20.6569 19 19V11.82C19 11.2677 18.5523 10.82 18 10.82ZM21.92 2.62C21.8185 2.37565 21.6243 2.18147 21.38 2.08C21.2598 2.02876 21.1307 2.00158 21 2H15C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4H18.59L8.29 14.29C8.10069 14.4778 7.9942 14.7334 7.9942 15C7.9942 15.2666 8.10069 15.5222 8.29 15.71C8.47777 15.8993 8.73336 16.0058 9 16.0058C9.26664 16.0058 9.52223 15.8993 9.71 15.71L20 5.41V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V3C21.9984 2.86932 21.9712 2.74022 21.92 2.62Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgFull);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);