"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTestHarness = createTestHarness;

var _react = _interopRequireWildcard(require("react"));

var _reactErrorBoundary = require("react-error-boundary");

function createTestHarness({
  callback,
  setValue,
  setError
}, Wrapper, suspense = true) {
  const TestComponent = ({
    hookProps
  }) => {
    // coerce undefined into TProps, so it maintains the previous behaviour
    setValue(callback(hookProps));
    return null;
  };

  let resetErrorBoundary = () => {};

  const ErrorFallback = ({
    error,
    resetErrorBoundary: reset
  }) => {
    resetErrorBoundary = () => {
      resetErrorBoundary = () => {};

      reset();
    };

    setError(error);
    return null;
  };

  const testHarness = props => {
    resetErrorBoundary();

    let component = /*#__PURE__*/_react.default.createElement(TestComponent, {
      hookProps: props
    });

    if (Wrapper) {
      component = /*#__PURE__*/_react.default.createElement(Wrapper, props, component);
    }

    if (suspense) {
      component = /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        fallback: null
      }, component);
    }

    return /*#__PURE__*/_react.default.createElement(_reactErrorBoundary.ErrorBoundary, {
      FallbackComponent: ErrorFallback
    }, component);
  };

  return testHarness;
}