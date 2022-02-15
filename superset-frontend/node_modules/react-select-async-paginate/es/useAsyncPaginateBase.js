import _regeneratorRuntime from "@babel/runtime/regenerator";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toPropertyKey from "@babel/runtime/helpers/toPropertyKey";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { useState, useEffect, useRef, useCallback } from 'react';
import sleep from 'sleep-promise';
import useIsMounted from 'react-is-mounted-hook';
import { defaultShouldLoadMore } from './defaultShouldLoadMore';
import { defaultReduceOptions } from './defaultReduceOptions';
var errorText = '[react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.';
export var validateResponse = function validateResponse(console, response) {
  if (!response) {
    console.error(errorText, 'Received:', response);
    throw new Error(errorText);
  }

  if (!Array.isArray(response.options)) {
    console.error(errorText, 'Received:', response);
    throw new Error(errorText);
  }
};
export var getInitialOptionsCache = function getInitialOptionsCache(_ref) {
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
export var getInitialCache = function getInitialCache(params) {
  return {
    isFirstLoad: true,
    options: [],
    hasMore: true,
    isLoading: false,
    additional: params.additional
  };
};
export var requestOptions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(paramsRef, optionsCacheRef, debounceTimeout, sleepParam, setOptionsCache, validateResponseParam, reduceOptions) {
    var currentInputValue, isCacheEmpty, currentOptions, newInputValue, response, hasError, loadOptions, _response, options, hasMore, newAdditional;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
              return _objectSpread(_objectSpread({}, prevOptionsCache), {}, _defineProperty({}, currentInputValue, _objectSpread(_objectSpread({}, currentOptions), {}, {
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
                    restCache = _objectWithoutProperties(prevOptionsCache, [currentInputValue].map(_toPropertyKey));

                return restCache;
              }

              return _objectSpread(_objectSpread({}, prevOptionsCache), {}, _defineProperty({}, currentInputValue, _objectSpread(_objectSpread({}, currentOptions), {}, {
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
              return _objectSpread(_objectSpread({}, prevOptionsCache), {}, _defineProperty({}, currentInputValue, _objectSpread(_objectSpread({}, currentOptions), {}, {
                isLoading: false
              })));
            });
            return _context.abrupt("return");

          case 27:
            validateResponseParam(console, response);
            _response = response, options = _response.options, hasMore = _response.hasMore; // eslint-disable-next-line no-prototype-builtins

            newAdditional = response.hasOwnProperty('additional') ? response.additional : currentOptions.additional;
            setOptionsCache(function (prevOptionsCache) {
              return _objectSpread(_objectSpread({}, prevOptionsCache), {}, _defineProperty({}, currentInputValue, _objectSpread(_objectSpread({}, currentOptions), {}, {
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
export var increaseStateId = function increaseStateId(prevStateId) {
  return prevStateId + 1;
};
export var useAsyncPaginateBasePure = function useAsyncPaginateBasePure(useRefParam, useStateParam, useEffectParam, useCallbackParam, useIsMountedParam, validateResponseParam, getInitialOptionsCacheParam, requestOptionsParam, params) {
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
      reduceOptions = _params$reduceOptions === void 0 ? defaultReduceOptions : _params$reduceOptions,
      _params$shouldLoadMor = params.shouldLoadMore,
      shouldLoadMore = _params$shouldLoadMor === void 0 ? defaultShouldLoadMore : _params$shouldLoadMor;
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
    requestOptionsParam(paramsRef, optionsCacheRef, debounceTimeout, sleep, function (reduceState) {
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
export var useAsyncPaginateBase = function useAsyncPaginateBase(params) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return useAsyncPaginateBasePure(useRef, useState, useEffect, useCallback, useIsMounted, validateResponse, getInitialOptionsCache, requestOptions, params, deps);
};