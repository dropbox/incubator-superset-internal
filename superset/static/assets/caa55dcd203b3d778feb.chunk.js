"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[193],{

/***/ 60193:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var tslib_1 = __webpack_require__(70655);
var React = __webpack_require__(67294);

var COLORS = {
    BLACK: '#000',
    BLUE: '#00f',
    DARKGRAY: '#ddd',
    GRAY: '#eee',
    GREEN: '#0f0',
    RED: '#f00',
    WHITE: '#fff',
};
var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
};
var BLUR_DELAY = 200;
var DEFAULT_HEIGHT = 50;

var INPUT_STYLE = {
    borderColor: COLORS.DARKGRAY,
    borderStyle: 'solid',
    borderWidth: 1,
    boxSizing: 'border-box',
    fontSize: 24,
    height: DEFAULT_HEIGHT,
    lineHeight: '24px',
    outline: 0,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
};
var Input = /** @class */ (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, style = _a.style, rest = tslib_1.__rest(_a, ["style"]);
        return React.createElement("input", tslib_1.__assign({ type: "text", style: tslib_1.__assign({}, INPUT_STYLE, style) }, rest));
    };
    return Input;
}(React.PureComponent));

var ITEM_STYLE = {
    borderBottomWidth: 1,
    borderColor: COLORS.DARKGRAY,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderTopWidth: 0,
    boxSizing: 'border-box',
    color: COLORS.BLACK,
    display: 'block',
    fontSize: 24,
    height: DEFAULT_HEIGHT,
    lineHeight: DEFAULT_HEIGHT + "px",
    paddingLeft: 15,
    paddingRight: 15,
    textDecoration: 'none',
};
function AnchorRenderer(props) {
    var item = props.item, isSelected = props.isSelected, isHighlighted = props.isHighlighted, style = props.style, rest = tslib_1.__rest(props, ["item", "isSelected", "isHighlighted", "style"]);
    var mergedStyle = tslib_1.__assign({}, ITEM_STYLE, style);
    if (isSelected) {
        mergedStyle.backgroundColor = COLORS.GRAY;
    }
    if (isHighlighted) {
        mergedStyle.backgroundColor = COLORS.DARKGRAY;
    }
    return (React.createElement("a", tslib_1.__assign({ href: item.url, style: mergedStyle }, rest), item.title));
}

var ResultsItem = /** @class */ (function (_super) {
    tslib_1.__extends(ResultsItem, _super);
    function ResultsItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isHighlighted: false,
        };
        _this.handleMouseEnter = function (evt /* Event */) {
            _this.setState({ isHighlighted: true });
            _this.props.onMouseEnter && _this.props.onMouseEnter(evt);
        };
        _this.handleMouseLeave = function (evt /* Event */) {
            _this.setState({ isHighlighted: false });
            _this.props.onMouseLeave && _this.props.onMouseLeave(evt);
        };
        return _this;
    }
    ResultsItem.prototype.render = function () {
        var item = this.props.item;
        var renderer = this.props.children
            ? this.props.children
            : AnchorRenderer;
        return renderer({
            style: this.props.style,
            item: item,
            isSelected: this.props.isSelected,
            isHighlighted: this.state.isHighlighted,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onClick: this.props.onClickItem,
        });
    };
    ResultsItem.defaultProps = {
        isSelected: false,
    };
    return ResultsItem;
}(React.PureComponent));

var LIST_STYLE = {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: COLORS.WHITE,
};
function Results(props) {
    var style = tslib_1.__assign({}, LIST_STYLE, props.style);
    if (props.maxHeight) {
        style.maxHeight = props.maxHeight;
        style.borderBottomWidth = 1;
        style.borderBottomColor = COLORS.GRAY;
        style.borderBottomStyle = 'solid';
        style.overflow = 'auto';
    }
    function createHandler(handler, key) {
        return handler.bind(this, key);
    }
    return (React.createElement("ul", { style: style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave }, props.items.map(function (item, key) { return (React.createElement(ResultsItem, { key: key, children: props.children, item: item, isSelected: props.selectedIndex === key, onMouseEnter: props.onMouseEnterItem && createHandler(props.onMouseEnterItem, key), onMouseLeave: props.onMouseLeaveItem && createHandler(props.onMouseLeaveItem, key), onClickItem: props.onClickItem })); })));
}

/**
 * Flatten a list of lists
 *
 * @param {Array<Array<T>>} lists
 * @return {Array<T>}
 */
function flatten(list) {
    return list.reduce(function (prev, next) {
        return prev.concat(next);
    }, []);
}
/**
 * Prevent a function from being called multiple times
 * repeatedly within a short time frame.
 *
 * @param {Function} fn
 * @param {number} wait
 * @return {Function}
 */
function debounce(fn, wait) {
    var _this = this;
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var ctx = _this;
        var later = function () {
            timeout = null;
            fn.apply(ctx, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs.reduce(function (f, g) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return f(g.apply(void 0, args));
    }; });
}

/**
 * Does a search for the given `query` against the list of `extensions`
 * and returns a Promise that results into a list of `ResultItem`.
 *
 * @param {string} query
 * @param {Array<Extension>} extension
 * @return {Promise<Array<T>>}
 */
function search(query, extensions) {
    var results = [];
    // iterate through all extensions and compile them into `results` list
    for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
        var extension = extensions_1[_i];
        if (typeof extension === 'function') {
            results.push(extension.call(null, query));
        }
    }
    return Promise.all(results).then(function (groups) { return flatten(groups); });
}

function AnchorAction(item) {
    if (item.url) {
        window.location.href = item.url;
    }
}

var Omnibar = /** @class */ (function (_super) {
    tslib_1.__extends(Omnibar, _super);
    function Omnibar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            displayResults: false,
            hoveredIndex: -1,
            results: [],
            selectedIndex: 0,
        };
        _this.query = function (value) {
            if (_this.props.extensions.length > 0) {
                search(value, _this.props.extensions).then(function (results) {
                    _this.setState({
                        results: _this.props.maxResults > 0
                            ? results.slice(0, _this.props.maxResults)
                            : results,
                        displayResults: results.length > 0,
                    });
                    _this.props.onQuery && _this.props.onQuery(results);
                });
            }
        };
        _this.prev = function () {
            _this.setState(function (prevState) {
                var selectedIndex = prevState.selectedIndex - 1;
                if (selectedIndex >= 0) {
                    return { selectedIndex: selectedIndex };
                }
            });
        };
        _this.next = function () {
            _this.setState(function (prevState) {
                var selectedIndex = prevState.selectedIndex + 1;
                if (selectedIndex < prevState.results.length) {
                    return { selectedIndex: selectedIndex };
                }
            });
        };
        _this.action = function () {
            // uses the hovered index if the user is currently
            // mousing over an item, falls back on the
            // selected index
            var idx = _this.state.hoveredIndex > -1
                ? _this.state.hoveredIndex
                : _this.state.selectedIndex;
            var item = _this.state.results[idx];
            var action = _this.props.onAction || AnchorAction;
            action.call(null, item);
        };
        _this.handleChange = function (evt) {
            var value = evt.target.value;
            if (value) {
                _this.query(value);
            }
            else {
                _this.reset();
            }
        };
        _this.handleKeyDown = function (evt /* Event */) {
            switch (evt.keyCode) {
                case KEYS.UP:
                    _this.prev();
                    break;
                case KEYS.DOWN:
                    _this.next();
                    break;
                case KEYS.ENTER:
                    _this.action();
                    break;
            }
        };
        _this.handleMouseEnterItem = function (hoveredIndex) {
            _this.setState({ hoveredIndex: hoveredIndex });
        };
        _this.handleMouseLeave = function () {
            _this.setState({ hoveredIndex: -1 });
        };
        _this.handleBlur = function () {
            setTimeout(function () { return _this.setState({ displayResults: false }); }, BLUR_DELAY);
        };
        _this.handleFocus = function () {
            _this.setState({ displayResults: true });
        };
        _this.handleClickItem = function (e) {
            e.preventDefault();
            if (_this.state.hoveredIndex > -1) {
                _this.action();
            }
        };
        _this.query = debounce(_this.query, _this.props.inputDelay);
        return _this;
    }
    Omnibar.prototype.reset = function () {
        this.setState({
            results: [],
            displayResults: false,
        });
    };
    Omnibar.prototype.render = function () {
        var _a = this.props, children = _a.children, render = _a.render, maxResults = _a.maxResults, maxViewableResults = _a.maxViewableResults, extensions = _a.extensions, inputDelay = _a.inputDelay, rootStyle = _a.rootStyle, resultStyle = _a.resultStyle, onQuery = _a.onQuery, onAction = _a.onAction, rest = tslib_1.__rest(_a, ["children", "render", "maxResults", "maxViewableResults", "extensions", "inputDelay", "rootStyle", "resultStyle", "onQuery", "onAction"]);
        var maxHeight = maxViewableResults
            ? maxViewableResults * DEFAULT_HEIGHT
            : null;
        if (!render) {
            render = children;
        }
        return (React.createElement("div", { style: rootStyle },
            React.createElement(Input, tslib_1.__assign({}, rest, { onBlur: this.handleBlur, onChange: this.handleChange, onFocus: this.handleFocus, onKeyDown: this.handleKeyDown })),
            this.state.displayResults && (React.createElement(Results, { children: render, items: this.state.results, maxHeight: maxHeight, onClickItem: this.handleClickItem, onMouseEnterItem: this.handleMouseEnterItem, onMouseLeave: this.handleMouseLeave, selectedIndex: this.state.selectedIndex, style: resultStyle }))));
    };
    // TODO - fix generic container
    Omnibar.defaultProps = {
        children: null,
        extensions: [],
        inputDelay: 100,
        maxResults: null,
        maxViewableResults: null,
        render: null,
        resultStyle: {},
        rootStyle: { position: 'relative' },
    };
    return Omnibar;
}(React.PureComponent));

/**
 * Filter your extension through a command prefix. (eg: 'user')
 *
 * @param {Omnibar.Extension} extension
 * @param {string} command
 * @return {Omnibar.Results}
 */
function command(extension, command) {
    var prefix = new RegExp("^" + command + "\\s", 'i');
    return function (query) {
        // down-case for comparison
        var lc = command.toLowerCase();
        var lq = query.toLowerCase();
        if (lc === lq) {
            return [];
        }
        if (!lq.startsWith(lc + ' ')) {
            return [];
        }
        return extension(query.replace(prefix, '').trim());
    };
}

// Credits: http://www.flaticon.com/free-icon/microphone_159802#term=microphone&page=1&position=49
function Microphone(props) {
    var fill = props.active ? '#000' : '#ccc';
    return (React.createElement("svg", { width: props.width, height: props.height, fill: fill, x: "0px", y: "0px", viewBox: "0 0 490.9 490.9" },
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M245.5,322.9c53,0,96.2-43.2,96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2,43.2-96.2,96.2v130.5C149.3,279.8,192.5,322.9,245.5,322.9z M173.8,96.2c0-39.5,32.2-71.7,71.7-71.7s71.7,32.2,71.7,71.7v130.5c0,39.5-32.2,71.7-71.7,71.7s-71.7-32.2-71.7-71.7V96.2z" }),
                React.createElement("path", { d: "M94.4,214.5c-6.8,0-12.3,5.5-12.3,12.3c0,85.9,66.7,156.6,151.1,162.8v76.7h-63.9c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h152.3c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3,151.1-76.9,151.1-162.8c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3c0,76.6-62.3,138.9-138.9,138.9s-138.9-62.3-138.9-138.9C106.6,220,101.2,214.5,94.4,214.5z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
}

function withVoice(Component) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(VoiceOmnibar, _super);
        function VoiceOmnibar(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                value: '',
                isSpeaking: false,
            };
            _this.recognition = null;
            _this.speak = function () {
                _this.recognition.lang = 'en-US';
                _this.setState({ isSpeaking: true });
                _this.recognition.start();
            };
            _this.recognition = null;
            return _this;
        }
        VoiceOmnibar.prototype.componentDidMount = function () {
            var _this = this;
            if ('webkitSpeechRecognition' in window) {
                var recognition = new webkitSpeechRecognition();
                recognition.continuous = true;
                recognition.onresult = function (evt) {
                    for (var i = evt.resultIndex; i < evt.results.length; ++i) {
                        _this.setState({ value: evt.results[i][0].transcript });
                    }
                };
                this.recognition = recognition;
            }
        };
        VoiceOmnibar.prototype.render = function () {
            var base = {
                position: 'relative',
            };
            var mic = {
                position: 'absolute',
                right: 0,
                top: 0,
                border: 0,
                backgroundColor: 'transparent',
                lineHeight: DEFAULT_HEIGHT + "px",
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
            };
            var style = this.props.style || {};
            if (this.state.isSpeaking) {
                style.backgroundColor = 'rgba(0, 255, 0, 0.075)';
            }
            return (React.createElement("div", { style: base },
                React.createElement(Component, tslib_1.__assign({}, this.props, { value: this.state.value, style: style })),
                React.createElement("button", { onClick: this.speak, style: mic },
                    React.createElement(Microphone, { width: 24, height: 24, active: this.state.isSpeaking }))));
        };
        return VoiceOmnibar;
    }(React.Component));
}
/**
 * Extend your Omnibar with extensions
 */
function withExtensions(extensions) {
    return function (Component) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(ExtendedOmnibar, _super);
            function ExtendedOmnibar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExtendedOmnibar.prototype.render = function () {
                return React.createElement(Component, tslib_1.__assign({ extensions: extensions }, this.props));
            };
            return ExtendedOmnibar;
        }(React.Component));
    };
}

exports.ZP = Omnibar;
__webpack_unused_export__ = command;
__webpack_unused_export__ = compose;
__webpack_unused_export__ = withExtensions;
__webpack_unused_export__ = withVoice;


/***/ }),

/***/ 70655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);