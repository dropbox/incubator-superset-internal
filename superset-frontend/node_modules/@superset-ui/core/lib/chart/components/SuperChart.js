"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactErrorBoundary = _interopRequireDefault(require("react-error-boundary"));

var _responsive = require("@vx/responsive");

var _reselect = require("reselect");

var _dimension = require("../../dimension");

var _SuperChartCore = _interopRequireDefault(require("./SuperChartCore"));

var _FallbackComponent = _interopRequireDefault(require("./FallbackComponent"));

var _ChartProps = _interopRequireDefault(require("../models/ChartProps"));

var _NoResultsComponent = _interopRequireDefault(require("./NoResultsComponent"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultProps = {
  FallbackComponent: _FallbackComponent.default,
  height: 400,
  width: '100%',
  enableNoResults: true
};

class SuperChart extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);
    this.core = void 0;
    this.createChartProps = _ChartProps.default.createSelector();
    this.parseDimension = (0, _reselect.createSelector)(({
      width
    }) => width, ({
      height
    }) => height, (width, height) => {
      // Parse them in case they are % or 'auto'
      const widthInfo = (0, _dimension.parseLength)(width);
      const heightInfo = (0, _dimension.parseLength)(height);
      const boxHeight = heightInfo.isDynamic ? `${heightInfo.multiplier * 100}%` : heightInfo.value;
      const boxWidth = widthInfo.isDynamic ? `${widthInfo.multiplier * 100}%` : widthInfo.value;
      const style = {
        height: boxHeight,
        width: boxWidth
      }; // bounding box will ensure that when one dimension is not dynamic
      // e.g. height = 300
      // the auto size will be bound to that value instead of being 100% by default
      // e.g. height: 300 instead of height: '100%'

      const BoundingBox = widthInfo.isDynamic && heightInfo.isDynamic && widthInfo.multiplier === 1 && heightInfo.multiplier === 1 ? _react.default.Fragment : ({
        children
      }) => (0, _react2.jsx)("div", {
        style: style
      }, children);
      return {
        BoundingBox,
        heightInfo,
        widthInfo
      };
    });

    this.setRef = core => {
      this.core = core;
    };
  }

  renderChart(width, height) {
    const {
      id,
      className,
      chartType,
      preTransformProps,
      overrideTransformProps,
      postTransformProps,
      onRenderSuccess,
      onRenderFailure,
      disableErrorBoundary,
      FallbackComponent,
      onErrorBoundary,
      Wrapper,
      queriesData,
      enableNoResults,
      ...rest
    } = this.props;
    const chartProps = this.createChartProps({ ...rest,
      queriesData,
      height,
      width
    });
    let chart; // Render the no results component if the query data is null or empty

    const noResultQueries = enableNoResults && (!queriesData || queriesData.every(({
      data
    }) => !data || Array.isArray(data) && data.length === 0));

    if (noResultQueries) {
      chart = (0, _react2.jsx)(_NoResultsComponent.default, {
        id: id,
        className: className,
        height: height,
        width: width
      });
    } else {
      const chartWithoutWrapper = (0, _react2.jsx)(_SuperChartCore.default, {
        ref: this.setRef,
        id: id,
        className: className,
        chartType: chartType,
        chartProps: chartProps,
        preTransformProps: preTransformProps,
        overrideTransformProps: overrideTransformProps,
        postTransformProps: postTransformProps,
        onRenderSuccess: onRenderSuccess,
        onRenderFailure: onRenderFailure
      });
      chart = Wrapper ? (0, _react2.jsx)(Wrapper, {
        width: width,
        height: height
      }, chartWithoutWrapper) : chartWithoutWrapper;
    } // Include the error boundary by default unless it is specifically disabled.


    return disableErrorBoundary === true ? chart : (0, _react2.jsx)(_reactErrorBoundary.default, {
      FallbackComponent: props => (0, _react2.jsx)(FallbackComponent, _extends({
        width: width,
        height: height
      }, props)),
      onError: onErrorBoundary
    }, chart);
  }

  render() {
    const {
      heightInfo,
      widthInfo,
      BoundingBox
    } = this.parseDimension(this.props); // If any of the dimension is dynamic, get parent's dimension

    if (widthInfo.isDynamic || heightInfo.isDynamic) {
      const {
        debounceTime
      } = this.props;
      return (0, _react2.jsx)(BoundingBox, null, (0, _react2.jsx)(_responsive.ParentSize, {
        debounceTime: debounceTime
      }, ({
        width,
        height
      }) => this.renderChart(widthInfo.isDynamic ? Math.floor(width) : widthInfo.value, heightInfo.isDynamic ? Math.floor(height) : heightInfo.value)));
    }

    return this.renderChart(widthInfo.value, heightInfo.value);
  }

}

exports.default = SuperChart;
SuperChart.propTypes = {
  disableErrorBoundary: _propTypes.default.bool,
  debounceTime: _propTypes.default.number,
  enableNoResults: _propTypes.default.bool,
  FallbackComponent: _propTypes.default.elementType,
  showOverflow: _propTypes.default.bool,
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  Wrapper: _propTypes.default.elementType
};
SuperChart.defaultProps = defaultProps;