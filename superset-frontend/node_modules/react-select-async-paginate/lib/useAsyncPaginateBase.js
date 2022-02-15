"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAsyncPaginateBase = exports.useAsyncPaginateBasePure = exports.increaseStateId = exports.requestOptions = exports.getInitialCache = exports.getInitialOptionsCache = exports.validateResponse = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toPropertyKey2 = _interopRequireDefault(require("@babel/runtime/helpers/toPropertyKey"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread6 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _sleepPromise = _interopRequireDefault(require("sleep-promise"));

var _reactIsMountedHook = _interopRequireDefault(require("react-is-mounted-hook"));

var _defaultShouldLoadMore = require("./defaultShouldLoadMore");

var _defaultReduceOptions = require("./defaultReduceOptions");

var errorText = '[react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.';

var validateResponse = function validateResponse(console, response) {
  if (!response) {
    console.error(errorText, 'Received:', response);
    throw new Error(errorText);
  }

  if (!Array.isArray(response.options)) {
    console.error(errorText, 'Received:', response);
    throw new Error(errorText);
  }
};

exports.validateResponse = validateResponse;

var getInitialOptionsCache = function getInitialOptionsCache(_ref) {
  var options = _ref.options,
      defaultOptions = _ref.defaultOptions,
      additional = _ref.additional,
      defaultAdditional = _ref.defaultAdditional;
  var initialOptions = defaultOptions === true ? null : defaultOptions instanceof Array ? defaultOptions : options;

  if (initialOptions) {
    return {
      '': {
        isFirstLoad: false,
        isLoading: false,
        options: initialOptions,
        hasMore: true,
        additional: defaultAdditional || additional
      }
    };
  }

  return {};
};

exports.getInitialOptionsCache = getInitialOptionsCache;

var getInitialCache = function getInitialCache(params) {
  return {
    isFirstLoad: true,
    options: [],
    hasMore: true,
    isLoading: false,
    additional: params.additional
  };
};

exports.getInitialCache = getInitialCache;

var requestOptions = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(paramsRef, optionsCacheRef, debounceTimeout, sleepParam, setOptionsCache, validateResponseParam, reduceOptions) {
    var currentInputValue, isCacheEmpty, currentOptions, newInputValue, response, hasError, loadOptions, _response, options, hasMore, newAdditional;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            currentInputValue = paramsRef.current.inputValue;
            isCacheEmpty = !optionsCacheRef.current[currentInputValue];
            currentOptions = isCacheEmpty ? getInitialCache(paramsRef.current) : optionsCacheRef.current[currentInputValue];

            if (!(currentOptions.isLoading || !currentOptions.hasMore)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            setOptionsCache(function (prevOptionsCache) {
              return (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, prevOptionsCache), {}, (0, _defineProperty2["default"])({}, currentInputValue, (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, currentOptions), {}, {
                isLoading: true
              })));
            });

            if (!(debounceTimeout > 0)) {
              _context.next = 13;
              break;
            }

            _context.next = 9;
            return sleepParam(debounceTimeout);

          case 9:
            newInputValue = paramsRef.current.inputValue;

            if (!(currentInputValue !== newInputValue)) {
              _context.next = 13;
              break;
            }

            setOptionsCache(function (prevOptionsCache) {
              if (isCacheEmpty) {
                var itemForDelete = prevOptionsCache[currentInputValue],
                    restCache = (0, _objectWithoutProperties2["default"])(prevOptionsCache, [currentInputValue].map(_toPropertyKey2["default"]));
                return restCache;
              }

              return (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, prevOptionsCache), {}, (0, _defineProperty2["default"])({}, currentInputValue, (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, currentOptions), {}, {
                isLoading: false
              })));
            });
            return _context.abrupt("return");

          case 13:
            _context.prev = 13;
            loadOptions = paramsRef.current.loadOptions;
            _context.next = 17;
            return loadOptions(currentInputValue, currentOptions.options, currentOptions.additional);

          case 17:
            response = _context.sent;
            hasError = false;
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](13);
            hasError = true;

          case 24:
            if (!hasError) {
              _context.next = 27;
              break;
            }

            setOptionsCache(function (prevOptionsCache) {
              return (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, prevOptionsCache), {}, (0, _defineProperty2["default"])({}, currentInputValue, (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, currentOptions), {}, {
                isLoading: false
              })));
            });
            return _context.abrupt("return");

          case 27:
            validateResponseParam(console, response);
            _response = response, options = _response.options, hasMore = _response.hasMore; // eslint-disable-next-line no-prototype-builtins

            newAdditional = response.hasOwnProperty('additional') ? response.additional : currentOptions.additional;
            setOptionsCache(function (prevOptionsCache) {
              return (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, prevOptionsCache), {}, (0, _defineProperty2["default"])({}, currentInputValue, (0, _objectSpread6["default"])((0, _objectSpread6["default"])({}, currentOptions), {}, {
                options: reduceOptions(currentOptions.options, options, newAdditional),
                hasMore: !!hasMore,
                isLoading: false,
                isFirstLoad: false,
                additional: newAdditional
              })));
            });

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 21]]);
  }));

  return function requestOptions(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

exports.requestOptions = requestOptions;

var increaseStateId = function increaseStateId(prevStateId) {
  return prevStateId + 1;
};

exports.increaseStateId = increaseStateId;

var useAsyncPaginateBasePure = function useAsyncPaginateBasePure(useRefParam, useStateParam, useEffectParam, useCallbackParam, useIsMountedParam, validateResponseParam, getInitialOptionsCacheParam, requestOptionsParam, params) {
  var deps = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : [];
  var defaultOptions = params.defaultOptions,
      _params$loadOptionsOn = params.loadOptionsOnMenuOpen,
      loadOptionsOnMenuOpen = _params$loadOptionsOn === void 0 ? true : _params$loadOptionsOn,
      _params$debounceTimeo = params.debounceTimeout,
      debounceTimeout = _params$debounceTimeo === void 0 ? 0 : _params$debounceTimeo,
      inputValue = params.inputValue,
      menuIsOpen = params.menuIsOpen,
      _params$filterOption = params.filterOption,
      filterOption = _params$filterOption === void 0 ? null : _params$filterOption,
      _params$reduceOptions = params.reduceOptions,
      reduceOptions = _params$reduceOptions === void 0 ? _defaultReduceOptions.defaultReduceOptions : _params$reduceOptions,
      _params$shouldLoadMor = params.shouldLoadMore,
      shouldLoadMore = _params$shouldLoadMor === void 0 ? _defaultShouldLoadMore.defaultShouldLoadMore : _params$shouldLoadMor;
  var isMounted = useIsMountedParam();
  var isInitRef = useRefParam(true);
  var paramsRef = useRefParam(params);
  paramsRef.current = params;
  var setStateId = useStateParam(0)[1];
  var optionsCacheRef = useRefParam(null);

  if (optionsCacheRef.current === null) {
    optionsCacheRef.current = getInitialOptionsCacheParam(params);
  }

  var callRequestOptions = useCallbackParam(function () {
    requestOptionsParam(paramsRef, optionsCacheRef, debounceTimeout, _sleepPromise["default"], function (reduceState) {
      optionsCacheRef.current = reduceState(optionsCacheRef.current);

      if (isMounted()) {
        setStateId(increaseStateId);
      }
    }, validateResponseParam, reduceOptions);
  }, []);
  var handleScrolledToBottom = useCallbackParam(function () {
    var currentInputValue = paramsRef.current.inputValue;
    var currentOptions = optionsCacheRef.current[currentInputValue];

    if (currentOptions) {
      callRequestOptions();
    }
  }, []);
  useEffectParam(function () {
    if (isInitRef.current) {
      isInitRef.current = false;
    } else {
      optionsCacheRef.current = {};
      setStateId(increaseStateId);
    }

    if (defaultOptions === true) {
      callRequestOptions();
    }
  }, deps);
  useEffectParam(function () {
    if (menuIsOpen && !optionsCacheRef.current[inputValue]) {
      callRequestOptions();
    }
  }, [inputValue]);
  useEffectParam(function () {
    if (menuIsOpen && !optionsCacheRef.current[''] && loadOptionsOnMenuOpen) {
      callRequestOptions();
    }
  }, [menuIsOpen]);
  var currentOptions = optionsCacheRef.current[inputValue] || getInitialCache(params);
  return {
    handleScrolledToBottom: handleScrolledToBottom,
    shouldLoadMore: shouldLoadMore,
    filterOption: filterOption,
    isLoading: currentOptions.isLoading,
    isFirstLoad: currentOptions.isFirstLoad,
    options: currentOptions.options
  };
};

exports.useAsyncPaginateBasePure = useAsyncPaginateBasePure;

var useAsyncPaginateBase = function useAsyncPaginateBase(params) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return useAsyncPaginateBasePure(_react.useRef, _react.useState, _react.useEffect, _react.useCallback, _reactIsMountedHook["default"], validateResponse, getInitialOptionsCache, requestOptions, params, deps);
};

exports.useAsyncPaginateBase = useAsyncPaginateBase;