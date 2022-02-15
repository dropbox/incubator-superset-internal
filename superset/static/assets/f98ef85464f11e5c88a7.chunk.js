"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4794],{

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBolt({
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
    d: "M19.8894 10.55C19.7199 10.2137 19.3759 10.0011 18.9994 9.99999H13.9994V3.99999C14.0214 3.54913 13.7387 3.13938 13.3094 2.99999C12.8975 2.86447 12.4452 3.00985 12.1894 3.35999L4.18938 14.36C3.98535 14.6549 3.95482 15.0364 4.10938 15.36C4.25227 15.7314 4.60179 15.9828 4.99938 16H9.99938V22C9.99969 22.4326 10.2781 22.8159 10.6894 22.95C10.7898 22.9811 10.8942 22.998 10.9994 23C11.3194 23.0008 11.6205 22.8484 11.8094 22.59L19.8094 11.59C20.029 11.2858 20.0599 10.8842 19.8894 10.55ZM11.9994 18.92V15C11.9994 14.4477 11.5517 14 10.9994 14H6.99938L11.9994 7.07999V11C11.9994 11.5523 12.4471 12 12.9994 12H16.9994L11.9994 18.92Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgBolt);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);