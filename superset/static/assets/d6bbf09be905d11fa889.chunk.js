"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[336],{

/***/ 20336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSort({
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
    d: "M9.70713 9.29299C9.07716 9.92295 9.52333 11.0001 10.4142 11.0001H13.5858C14.4767 11.0001 14.9229 9.92295 14.2929 9.29299L12.7071 7.7072C12.3166 7.31668 11.6834 7.31668 11.2929 7.7072L9.70713 9.29299ZM9.70713 14.7072C9.07716 14.0772 9.52333 13.0001 10.4142 13.0001H13.5858C14.4767 13.0001 14.9229 14.0772 14.2929 14.7072L12.7071 16.293C12.3166 16.6835 11.6834 16.6835 11.2929 16.293L9.70713 14.7072Z",
    fill: "#E0E0E0"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgSort);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);