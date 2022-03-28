"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[6420],{

/***/ 86420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgFolder({
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
    d: "M19 5.49999H12.72L12.4 4.49999C11.9748 3.29734 10.8356 2.49507 9.56 2.49999H5C3.34315 2.49999 2 3.84314 2 5.49999V18.5C2 20.1568 3.34315 21.5 5 21.5H19C20.6569 21.5 22 20.1568 22 18.5V8.49999C22 6.84314 20.6569 5.49999 19 5.49999ZM20 18.5C20 19.0523 19.5523 19.5 19 19.5H5C4.44772 19.5 4 19.0523 4 18.5V5.49999C4 4.94771 4.44772 4.49999 5 4.49999H9.56C9.98992 4.49888 10.3724 4.77268 10.51 5.17999L11.05 6.81999C11.1876 7.2273 11.5701 7.5011 12 7.49999H19C19.5523 7.49999 20 7.94771 20 8.49999V18.5Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgFolder);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);