(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[71],{

/***/ 78918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CompositeLayer)
/* harmony export */ });
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95772);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63803);
/* harmony import */ var _utils_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61855);



const TRACE_RENDER_LAYERS = 'compositeLayer.renderLayers';
class CompositeLayer extends _layer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  get isComposite() {
    return true;
  }

  get isLoaded() {
    return super.isLoaded && this.getSubLayers().every(layer => layer.isLoaded);
  }

  getSubLayers() {
    return this.internalState && this.internalState.subLayers || [];
  }

  initializeState() {}

  setState(updateObject) {
    super.setState(updateObject);
    this.setNeedsUpdate();
  }

  getPickingInfo({
    info
  }) {
    const {
      object
    } = info;
    const isDataWrapped = object && object.__source && object.__source.parent && object.__source.parent.id === this.id;

    if (!isDataWrapped) {
      return info;
    }

    info.object = object.__source.object;
    info.index = object.__source.index;
    return info;
  }

  renderLayers() {
    return null;
  }

  filterSubLayer(context) {
    return true;
  }

  shouldRenderSubLayer(id, data) {
    const {
      _subLayerProps: overridingProps
    } = this.props;
    return data && data.length || overridingProps && overridingProps[id];
  }

  getSubLayerClass(id, DefaultLayerClass) {
    const {
      _subLayerProps: overridingProps
    } = this.props;
    return overridingProps && overridingProps[id] && overridingProps[id].type || DefaultLayerClass;
  }

  getSubLayerRow(row, sourceObject, sourceObjectIndex) {
    row.__source = {
      parent: this,
      object: sourceObject,
      index: sourceObjectIndex
    };
    return row;
  }

  getSubLayerAccessor(accessor) {
    if (typeof accessor === 'function') {
      const objectInfo = {
        data: this.props.data,
        target: []
      };
      return (x, i) => {
        if (x && x.__source) {
          objectInfo.index = x.__source.index;
          return accessor(x.__source.object, objectInfo);
        }

        return accessor(x, i);
      };
    }

    return accessor;
  }

  getSubLayerProps(sublayerProps = {}) {
    const {
      opacity,
      pickable,
      visible,
      parameters,
      getPolygonOffset,
      highlightedObjectIndex,
      autoHighlight,
      highlightColor,
      coordinateSystem,
      coordinateOrigin,
      wrapLongitude,
      positionFormat,
      modelMatrix,
      extensions,
      fetch,
      _subLayerProps: overridingProps
    } = this.props;
    const newProps = {
      opacity,
      pickable,
      visible,
      parameters,
      getPolygonOffset,
      highlightedObjectIndex,
      autoHighlight,
      highlightColor,
      coordinateSystem,
      coordinateOrigin,
      wrapLongitude,
      positionFormat,
      modelMatrix,
      extensions,
      fetch
    };
    const overridingSublayerProps = overridingProps && overridingProps[sublayerProps.id];
    const overridingSublayerTriggers = overridingSublayerProps && overridingSublayerProps.updateTriggers;
    const sublayerId = sublayerProps.id || 'sublayer';

    if (overridingSublayerProps) {
      const propTypes = this.constructor._propTypes;
      const subLayerPropTypes = sublayerProps.type ? sublayerProps.type._propTypes : {};

      for (const key in overridingSublayerProps) {
        const propType = subLayerPropTypes[key] || propTypes[key];

        if (propType && propType.type === 'accessor') {
          overridingSublayerProps[key] = this.getSubLayerAccessor(overridingSublayerProps[key]);
        }
      }
    }

    Object.assign(newProps, sublayerProps, overridingSublayerProps);
    newProps.id = "".concat(this.props.id, "-").concat(sublayerId);
    newProps.updateTriggers = {
      all: this.props.updateTriggers.all,
      ...sublayerProps.updateTriggers,
      ...overridingSublayerTriggers
    };

    for (const extension of extensions) {
      const passThroughProps = extension.getSubLayerProps.call(this, extension);

      if (passThroughProps) {
        Object.assign(newProps, passThroughProps, {
          updateTriggers: Object.assign(newProps.updateTriggers, passThroughProps.updateTriggers)
        });
      }
    }

    return newProps;
  }

  _updateAutoHighlight(info) {
    for (const layer of this.getSubLayers()) {
      layer.updateAutoHighlight(info);
    }
  }

  _getAttributeManager() {
    return null;
  }

  _renderLayers() {
    let {
      subLayers
    } = this.internalState;
    const shouldUpdate = !subLayers || this.needsUpdate();

    if (shouldUpdate) {
      subLayers = this.renderLayers();
      subLayers = (0,_utils_flatten__WEBPACK_IMPORTED_MODULE_1__/* .flatten */ .x)(subLayers, Boolean);
      this.internalState.subLayers = subLayers;
    }

    (0,_debug__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(TRACE_RENDER_LAYERS, this, shouldUpdate, subLayers);

    for (const layer of subLayers) {
      layer.parent = this;
    }
  }

}
CompositeLayer.layerName = 'CompositeLayer';
//# sourceMappingURL=composite-layer.js.map

/***/ }),

/***/ 92540:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 95751:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 75307:
/***/ (() => {

/* (ignored) */

/***/ })

}]);