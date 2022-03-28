(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5965,71,7893],{

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

/***/ 50600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Legend)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js
var NumberFormatterRegistrySingleton = __webpack_require__(50855);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js
/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */

/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const categoryDelimiter = ' - ';
const propTypes = {
  categories: (prop_types_default()).object,
  forceCategorical: (prop_types_default()).bool,
  format: (prop_types_default()).string,
  position: prop_types_default().oneOf([null, 'tl', 'tr', 'bl', 'br']),
  showSingleCategory: (prop_types_default()).func,
  toggleCategory: (prop_types_default()).func
};
const defaultProps = {
  categories: {},
  forceCategorical: false,
  format: null,
  position: 'tr',
  showSingleCategory: () => {},
  toggleCategory: () => {}
};
class Legend extends react.PureComponent {
  format(value) {
    if (!this.props.format || this.props.forceCategorical) {
      return value;
    }

    const numValue = parseFloat(value);
    return (0,NumberFormatterRegistrySingleton/* formatNumber */.uf)(this.props.format, numValue);
  }

  formatCategoryLabel(k) {
    if (!this.props.format) {
      return k;
    }

    if (k.includes(categoryDelimiter)) {
      const values = k.split(categoryDelimiter);
      return this.format(values[0]) + categoryDelimiter + this.format(values[1]);
    }

    return this.format(k);
  }

  render() {
    if (Object.keys(this.props.categories).length === 0 || this.props.position === null) {
      return null;
    }

    const categories = Object.entries(this.props.categories).map((_ref) => {
      let [k, v] = _ref;
      const style = {
        color: "rgba(" + v.color.join(', ') + ")"
      };
      const icon = v.enabled ? '\u25FC' : '\u25FB';
      return react.createElement("li", {
        key: k
      }, react.createElement("a", {
        href: "#",
        onClick: () => this.props.toggleCategory(k),
        onDoubleClick: () => this.props.showSingleCategory(k)
      }, react.createElement("span", {
        style: style
      }, icon), " ", this.formatCategoryLabel(k)));
    });
    const vertical = this.props.position.charAt(0) === 't' ? 'top' : 'bottom';
    const horizontal = this.props.position.charAt(1) === 'r' ? 'right' : 'left';
    const style = {
      position: 'absolute',
      [vertical]: '0px',
      [horizontal]: '10px'
    };
    return react.createElement("div", {
      className: "legend",
      style: style
    }, react.createElement("ul", {
      className: "categories"
    }, categories));
  }

}
Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;

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