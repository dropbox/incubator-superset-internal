"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeStyle = normalizeStyle;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function normalizeStyle(style) {
  if (!style) {
    return null;
  }

  if (typeof style === 'string') {
    return style;
  }

  if (style.toJS) {
    style = style.toJS();
  }

  var layerIndex = style.layers.reduce(function (accum, current) {
    return Object.assign(accum, (0, _defineProperty2["default"])({}, current.id, current));
  }, {});
  style.layers = style.layers.map(function (layer) {
    layer = Object.assign({}, layer);
    delete layer.interactive;
    var layerRef = layerIndex[layer.ref];

    if (layerRef) {
      delete layer.ref;

      if (layerRef.type !== undefined) {
        layer.type = layerRef.type;
      }

      if (layerRef.source !== undefined) {
        layer.source = layerRef.source;
      }

      if (layerRef['source-layer'] !== undefined) {
        layer['source-layer'] = layerRef['source-layer'];
      }

      if (layerRef.minzoom !== undefined) {
        layer.minzoom = layerRef.minzoom;
      }

      if (layerRef.maxzoom !== undefined) {
        layer.maxzoom = layerRef.maxzoom;
      }

      if (layerRef.filter !== undefined) {
        layer.filter = layerRef.filter;
      }

      if (layerRef.layout !== undefined) {
        layer.layout = layer.layout || {};
        layer.layout = Object.assign({}, layer.layout, layerRef.layout);
      }
    }

    return layer;
  });
  return style;
}
//# sourceMappingURL=style-utils.js.map