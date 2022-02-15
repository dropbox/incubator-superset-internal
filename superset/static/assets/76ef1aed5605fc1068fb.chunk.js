"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[3871],{

/***/ 93871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgEdit({
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
    d: "M22 7.23999C22.0016 6.97418 21.8972 6.71871 21.71 6.52999L17.47 2.28999C17.2813 2.1028 17.0258 1.99845 16.76 1.99999C16.4942 1.99845 16.2387 2.1028 16.05 2.28999L13.22 5.11999L2.29002 16.05C2.10283 16.2387 1.99848 16.4942 2.00002 16.76V21C2.00002 21.5523 2.44773 22 3.00002 22H7.24002C7.523 22.0154 7.79922 21.91 8.00002 21.71L18.87 10.78L21.71 7.99999C21.8013 7.90307 21.8757 7.79152 21.93 7.66999C21.9397 7.59028 21.9397 7.5097 21.93 7.42999C21.9347 7.38344 21.9347 7.33654 21.93 7.28999L22 7.23999ZM6.83002 20H4.00002V17.17L13.93 7.23999L16.76 10.07L6.83002 20ZM18.17 8.65999L15.34 5.82999L16.76 4.41999L19.58 7.23999L18.17 8.65999Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgEdit);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);