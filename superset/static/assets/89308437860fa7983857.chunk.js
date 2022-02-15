"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[1293],{

/***/ 81293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgCards({
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
    d: "M9 11.001H4C2.896 11.001 2 10.104 2 9.00098V4.00098C2 2.89898 2.896 2.00098 4 2.00098H9C10.104 2.00098 11 2.89898 11 4.00098V9.00098C11 10.104 10.104 11.001 9 11.001ZM4 4.00098V9.00098H8.997L9 4.00098H4ZM20 11.001H15C13.896 11.001 13 10.104 13 9.00098V4.00098C13 2.89898 13.896 2.00098 15 2.00098H20C21.104 2.00098 22 2.89898 22 4.00098V9.00098C22 10.104 21.104 11.001 20 11.001ZM15 4.00098V9.00098H19.997L20 4.00098H15ZM4 22.001H9C10.104 22.001 11 21.104 11 20.001V15.001C11 13.899 10.104 13.001 9 13.001H4C2.896 13.001 2 13.899 2 15.001V20.001C2 21.104 2.896 22.001 4 22.001ZM4 20.001V15.001H9L8.997 20.001H4ZM20 22.001H15C13.896 22.001 13 21.104 13 20.001V15.001C13 13.899 13.896 13.001 15 13.001H20C21.104 13.001 22 13.899 22 15.001V20.001C22 21.104 21.104 22.001 20 22.001ZM15 15.001V20.001H19.997L20 15.001H15Z",
    fill: "currentColor"
  })));
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgCards);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);