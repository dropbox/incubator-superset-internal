"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var limits_1 = require("./limits");
var ImageRGBA = (function () {
    function ImageRGBA(width, height, pixels) {
        if (width === undefined || height === undefined) {
            throw errors_1.Errors.undefinedVariable;
        }
        if (width <= limits_1.Limits.uint16_MIN || width > limits_1.Limits.uint16_MAX) {
            throw errors_1.Errors.imageWidthOrHeightIsNotValid;
        }
        this._width = width;
        if (height <= limits_1.Limits.uint16_MIN || height > limits_1.Limits.uint16_MAX) {
            throw errors_1.Errors.imageWidthOrHeightIsNotValid;
        }
        this._height = height;
        if (pixels) {
            if (pixels.byteLength == width * height * 4)
                this._pixels = pixels;
            else {
                throw errors_1.Errors.imageDataIsNotValid;
            }
        }
        else {
            this._pixels = new Uint8ClampedArray(width * height * 4);
            this._pixels.fill(255);
        }
        this._pixelView = new DataView(this._pixels.buffer, 0);
    }
    Object.defineProperty(ImageRGBA.prototype, "pixels", {
        get: function () {
            return this._pixels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageRGBA.prototype, "pixelsView", {
        get: function () {
            return this._pixelView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageRGBA.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageRGBA.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    return ImageRGBA;
}());
exports.ImageRGBA = ImageRGBA;
