"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmpDecoder_1 = require("./bmpDecoder");
function decode(array) {
    var decoder = new bmpDecoder_1.BmpDecoder();
    return decoder.decode(array);
}
exports.decode = decode;
