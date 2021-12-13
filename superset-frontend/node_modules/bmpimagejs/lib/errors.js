"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DecodeError = (function (_super) {
    __extends(DecodeError, _super);
    function DecodeError(errno, msg) {
        var _this = _super.call(this, msg) || this;
        _this._errNumber = errno;
        return _this;
    }
    Object.defineProperty(DecodeError.prototype, "errNumber", {
        get: function () { return this._errNumber; },
        enumerable: true,
        configurable: true
    });
    return DecodeError;
}(Error));
exports.DecodeError = DecodeError;
var Errors = (function () {
    function Errors() {
    }
    Errors.undefinedVariable = new DecodeError(1, 'undefined variable');
    Errors.indexOutOfRange = new DecodeError(2, 'index out of range');
    Errors.imageDataIsNotValid = new DecodeError(200, 'image data buffer is not valid');
    Errors.imageWidthOrHeightIsNotValid = new DecodeError(201, 'image width and height must be between 1-65535');
    Errors.bmpDataIsNotValid = new DecodeError(202, 'bmp data is not valid');
    return Errors;
}());
exports.Errors = Errors;
