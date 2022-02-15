"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[1844],{

/***/ 95573:
/***/ ((module) => {

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ 13423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ interweave_module)
});

// UNUSED EXPORTS: Element, Filter, Markup, Matcher, Parser

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/escape-html/index.js
var escape_html = __webpack_require__(95573);
var escape_html_default = /*#__PURE__*/__webpack_require__.n(escape_html);
;// CONCATENATED MODULE: ./node_modules/interweave/esm/Element.js


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Element = function (_React$PureComponent) {
  _inheritsLoose(Element, _React$PureComponent);

  function Element() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Element.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$attribute = _this$props.attributes,
        attributes = _this$props$attribute === void 0 ? {} : _this$props$attribute,
        _this$props$children = _this$props.children,
        children = _this$props$children === void 0 ? null : _this$props$children,
        _this$props$selfClose = _this$props.selfClose,
        selfClose = _this$props$selfClose === void 0 ? false : _this$props$selfClose,
        Tag = _this$props.tagName;
    return selfClose ? react.createElement(Tag, attributes) : react.createElement(Tag, attributes, children);
  };

  return Element;
}(react.PureComponent);

_defineProperty(Element, "propTypes", {
  attributes: (prop_types_default()).any,
  children: (prop_types_default()).node,
  selfClose: (prop_types_default()).bool,
  tagName: (prop_types_default()).string.isRequired
});


;// CONCATENATED MODULE: ./node_modules/interweave/esm/Filter.js
var Filter = function () {
  function Filter() {}

  var _proto = Filter.prototype;

  _proto.attribute = function attribute(name, value) {
    return value;
  };

  _proto.node = function (_node) {
    function node(_x, _x2) {
      return _node.apply(this, arguments);
    }

    node.toString = function () {
      return _node.toString();
    };

    return node;
  }(function (name, node) {
    return node;
  });

  return Filter;
}();


;// CONCATENATED MODULE: ./node_modules/interweave/esm/StyleFilter.js
function StyleFilter_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


var INVALID_STYLES = /(url|image|image-set)\(/i;

var StyleFilter = function (_Filter) {
  StyleFilter_inheritsLoose(StyleFilter, _Filter);

  function StyleFilter() {
    return _Filter.apply(this, arguments) || this;
  }

  var _proto = StyleFilter.prototype;

  _proto.attribute = function attribute(name, value) {
    if (name === 'style') {
      Object.keys(value).forEach(function (key) {
        if (String(value[key]).match(INVALID_STYLES)) {
          delete value[key];
        }
      });
    }

    return value;
  };

  return StyleFilter;
}(Filter);


;// CONCATENATED MODULE: ./node_modules/interweave/esm/constants.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TYPE_FLOW = 1;
var TYPE_SECTION = 1 << 1;
var TYPE_HEADING = 1 << 2;
var TYPE_PHRASING = 1 << 3;
var TYPE_EMBEDDED = 1 << 4;
var TYPE_INTERACTIVE = 1 << 5;
var TYPE_PALPABLE = 1 << 6;
var tagConfigs = {
  a: {
    content: TYPE_FLOW | TYPE_PHRASING,
    self: false,
    type: TYPE_FLOW | TYPE_PHRASING | TYPE_INTERACTIVE | TYPE_PALPABLE
  },
  address: {
    invalid: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'article', 'aside', 'section', 'div', 'header', 'footer'],
    self: false
  },
  audio: {
    children: ['track', 'source']
  },
  br: {
    type: TYPE_FLOW | TYPE_PHRASING,
    void: true
  },
  body: {
    content: TYPE_FLOW | TYPE_SECTION | TYPE_HEADING | TYPE_PHRASING | TYPE_EMBEDDED | TYPE_INTERACTIVE | TYPE_PALPABLE
  },
  button: {
    content: TYPE_PHRASING,
    type: TYPE_FLOW | TYPE_PHRASING | TYPE_INTERACTIVE | TYPE_PALPABLE
  },
  caption: {
    content: TYPE_FLOW,
    parent: ['table']
  },
  col: {
    parent: ['colgroup'],
    void: true
  },
  colgroup: {
    children: ['col'],
    parent: ['table']
  },
  details: {
    children: ['summary'],
    type: TYPE_FLOW | TYPE_INTERACTIVE | TYPE_PALPABLE
  },
  dd: {
    content: TYPE_FLOW,
    parent: ['dl']
  },
  dl: {
    children: ['dt', 'dd'],
    type: TYPE_FLOW
  },
  dt: {
    content: TYPE_FLOW,
    invalid: ['footer', 'header'],
    parent: ['dl']
  },
  figcaption: {
    content: TYPE_FLOW,
    parent: ['figure']
  },
  footer: {
    invalid: ['footer', 'header']
  },
  header: {
    invalid: ['footer', 'header']
  },
  hr: {
    type: TYPE_FLOW,
    void: true
  },
  img: {
    void: true
  },
  li: {
    content: TYPE_FLOW,
    parent: ['ul', 'ol', 'menu']
  },
  main: {
    self: false
  },
  ol: {
    children: ['li'],
    type: TYPE_FLOW
  },
  picture: {
    children: ['source', 'img'],
    type: TYPE_FLOW | TYPE_PHRASING | TYPE_EMBEDDED
  },
  rb: {
    parent: ['ruby', 'rtc']
  },
  rp: {
    parent: ['ruby', 'rtc']
  },
  rt: {
    content: TYPE_PHRASING,
    parent: ['ruby', 'rtc']
  },
  rtc: {
    content: TYPE_PHRASING,
    parent: ['ruby']
  },
  ruby: {
    children: ['rb', 'rp', 'rt', 'rtc']
  },
  source: {
    parent: ['audio', 'video', 'picture'],
    void: true
  },
  summary: {
    content: TYPE_PHRASING,
    parent: ['details']
  },
  table: {
    children: ['caption', 'colgroup', 'thead', 'tbody', 'tfoot', 'tr'],
    type: TYPE_FLOW
  },
  tbody: {
    parent: ['table'],
    children: ['tr']
  },
  td: {
    content: TYPE_FLOW,
    parent: ['tr']
  },
  tfoot: {
    parent: ['table'],
    children: ['tr']
  },
  th: {
    content: TYPE_FLOW,
    parent: ['tr']
  },
  thead: {
    parent: ['table'],
    children: ['tr']
  },
  tr: {
    parent: ['table', 'tbody', 'thead', 'tfoot'],
    children: ['th', 'td']
  },
  track: {
    parent: ['audio', 'video'],
    void: true
  },
  ul: {
    children: ['li'],
    type: TYPE_FLOW
  },
  video: {
    children: ['track', 'source']
  },
  wbr: {
    type: TYPE_FLOW | TYPE_PHRASING,
    void: true
  }
};

function createConfigBuilder(config) {
  return function (tagName) {
    tagConfigs[tagName] = _extends({}, config, {}, tagConfigs[tagName]);
  };
}

['address', 'main', 'div', 'figure', 'p', 'pre'].forEach(createConfigBuilder({
  content: TYPE_FLOW,
  type: TYPE_FLOW | TYPE_PALPABLE
}));
['abbr', 'b', 'bdi', 'bdo', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'ruby', 'samp', 'strong', 'sub', 'sup', 'time', 'u', 'var'].forEach(createConfigBuilder({
  content: TYPE_PHRASING,
  type: TYPE_FLOW | TYPE_PHRASING | TYPE_PALPABLE
}));
['p', 'pre'].forEach(createConfigBuilder({
  content: TYPE_PHRASING,
  type: TYPE_FLOW | TYPE_PALPABLE
}));
['s', 'small', 'span', 'del', 'ins'].forEach(createConfigBuilder({
  content: TYPE_PHRASING,
  type: TYPE_FLOW | TYPE_PHRASING
}));
['article', 'aside', 'footer', 'header', 'nav', 'section', 'blockquote'].forEach(createConfigBuilder({
  content: TYPE_FLOW,
  type: TYPE_FLOW | TYPE_SECTION | TYPE_PALPABLE
}));
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(createConfigBuilder({
  content: TYPE_PHRASING,
  type: TYPE_FLOW | TYPE_HEADING | TYPE_PALPABLE
}));
['audio', 'canvas', 'iframe', 'img', 'video'].forEach(createConfigBuilder({
  type: TYPE_FLOW | TYPE_PHRASING | TYPE_EMBEDDED | TYPE_PALPABLE
}));
var TAGS = Object.freeze(tagConfigs);
var BANNED_TAG_LIST = ['applet', 'base', 'body', 'command', 'embed', 'frame', 'frameset', 'head', 'html', 'link', 'meta', 'noscript', 'object', 'script', 'style', 'title'];
var ALLOWED_TAG_LIST = Object.keys(TAGS).filter(function (tag) {
  return tag !== 'canvas' && tag !== 'iframe';
});
var FILTER_ALLOW = 1;
var FILTER_DENY = 2;
var FILTER_CAST_NUMBER = 3;
var FILTER_CAST_BOOL = 4;
var FILTER_NO_CAST = 5;
var ATTRIBUTES = Object.freeze({
  alt: FILTER_ALLOW,
  cite: FILTER_ALLOW,
  class: FILTER_ALLOW,
  colspan: FILTER_CAST_NUMBER,
  controls: FILTER_CAST_BOOL,
  datetime: FILTER_ALLOW,
  default: FILTER_CAST_BOOL,
  disabled: FILTER_CAST_BOOL,
  dir: FILTER_ALLOW,
  height: FILTER_ALLOW,
  href: FILTER_ALLOW,
  id: FILTER_ALLOW,
  kind: FILTER_ALLOW,
  label: FILTER_ALLOW,
  lang: FILTER_ALLOW,
  loop: FILTER_CAST_BOOL,
  media: FILTER_ALLOW,
  muted: FILTER_CAST_BOOL,
  poster: FILTER_ALLOW,
  role: FILTER_ALLOW,
  rowspan: FILTER_CAST_NUMBER,
  scope: FILTER_ALLOW,
  sizes: FILTER_ALLOW,
  span: FILTER_CAST_NUMBER,
  start: FILTER_CAST_NUMBER,
  style: FILTER_NO_CAST,
  src: FILTER_ALLOW,
  srclang: FILTER_ALLOW,
  srcset: FILTER_ALLOW,
  target: FILTER_ALLOW,
  title: FILTER_ALLOW,
  type: FILTER_ALLOW,
  width: FILTER_ALLOW
});
var ATTRIBUTES_TO_PROPS = Object.freeze({
  class: 'className',
  colspan: 'colSpan',
  datetime: 'dateTime',
  rowspan: 'rowSpan',
  srclang: 'srcLang',
  srcset: 'srcSet'
});
;// CONCATENATED MODULE: ./node_modules/interweave/esm/Parser.js
function Parser_extends() { Parser_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Parser_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Parser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var INVALID_ROOTS = /^<(!doctype|(html|head|body)(\s|>))/i;
var ALLOWED_ATTRS = /^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i;

var Parser = function () {
  function Parser(markup, props, matchers, filters) {
    if (props === void 0) {
      props = {};
    }

    if (matchers === void 0) {
      matchers = [];
    }

    if (filters === void 0) {
      filters = [];
    }

    Parser_defineProperty(this, "allowed", void 0);

    Parser_defineProperty(this, "banned", void 0);

    Parser_defineProperty(this, "blocked", void 0);

    Parser_defineProperty(this, "doc", void 0);

    Parser_defineProperty(this, "content", []);

    Parser_defineProperty(this, "props", void 0);

    Parser_defineProperty(this, "matchers", void 0);

    Parser_defineProperty(this, "filters", void 0);

    Parser_defineProperty(this, "keyIndex", void 0);

    if (false) {}

    this.props = props;
    this.matchers = matchers;
    this.filters = [].concat(filters, [new StyleFilter()]);
    this.keyIndex = -1;
    this.doc = this.createDocument(markup || '');
    this.allowed = new Set(props.allowList || ALLOWED_TAG_LIST);
    this.banned = new Set(BANNED_TAG_LIST);
    this.blocked = new Set(props.blockList);
  }

  var _proto = Parser.prototype;

  _proto.applyAttributeFilters = function applyAttributeFilters(name, value) {
    return this.filters.reduce(function (nextValue, filter) {
      return nextValue !== null && typeof filter.attribute === 'function' ? filter.attribute(name, nextValue) : nextValue;
    }, value);
  };

  _proto.applyNodeFilters = function applyNodeFilters(name, node) {
    return this.filters.reduce(function (nextNode, filter) {
      return nextNode !== null && typeof filter.node === 'function' ? filter.node(name, nextNode) : nextNode;
    }, node);
  };

  _proto.applyMatchers = function applyMatchers(string, parentConfig) {
    var _this = this;

    var elements = [];
    var props = this.props;
    var matchedString = string;
    var parts = null;
    this.matchers.forEach(function (matcher) {
      var tagName = matcher.asTag().toLowerCase();

      var config = _this.getTagConfig(tagName);

      if (props[matcher.inverseName] || !_this.isTagAllowed(tagName)) {
        return;
      }

      if (!_this.canRenderChild(parentConfig, config)) {
        return;
      }

      while (parts = matcher.match(matchedString)) {
        var _ref = parts,
            match = _ref.match,
            partProps = _objectWithoutPropertiesLoose(_ref, ["match"]);

        matchedString = matchedString.replace(match, "#{{" + elements.length + "}}#");
        _this.keyIndex += 1;
        var element = matcher.createElement(match, Parser_extends({}, props, {}, partProps, {
          key: _this.keyIndex
        }));

        if (element) {
          elements.push(element);
        }
      }
    });

    if (elements.length === 0) {
      return matchedString;
    }

    var matchedArray = [];
    var lastIndex = 0;

    while (parts = matchedString.match(/#\{\{(\d+)\}\}#/)) {
      var _ref2 = parts,
          no = _ref2[1];
      var _ref3 = parts,
          _ref3$index = _ref3.index,
          index = _ref3$index === void 0 ? 0 : _ref3$index;

      if (lastIndex !== index) {
        matchedArray.push(matchedString.slice(lastIndex, index));
      }

      matchedArray.push(elements[parseInt(no, 10)]);
      lastIndex = index + parts[0].length;
      matchedString = matchedString.replace("#{{" + no + "}}#", "%{{" + no + "}}%");
    }

    if (lastIndex < matchedString.length) {
      matchedArray.push(matchedString.slice(lastIndex));
    }

    return matchedArray;
  };

  _proto.canRenderChild = function canRenderChild(parentConfig, childConfig) {
    if (!parentConfig.tagName || !childConfig.tagName) {
      return false;
    }

    if (parentConfig.void) {
      return false;
    }

    if (parentConfig.children.length > 0) {
      return parentConfig.children.includes(childConfig.tagName);
    }

    if (parentConfig.invalid.length > 0 && parentConfig.invalid.includes(childConfig.tagName)) {
      return false;
    }

    if (childConfig.parent.length > 0) {
      return childConfig.parent.includes(parentConfig.tagName);
    }

    if (!parentConfig.self && parentConfig.tagName === childConfig.tagName) {
      return false;
    }

    return Boolean(parentConfig && parentConfig.content & childConfig.type);
  };

  _proto.convertLineBreaks = function convertLineBreaks(markup) {
    var _this$props = this.props,
        noHtml = _this$props.noHtml,
        disableLineBreaks = _this$props.disableLineBreaks;

    if (noHtml || disableLineBreaks || markup.match(/<((?:\/[a-z ]+)|(?:[a-z ]+\/))>/gi)) {
      return markup;
    }

    var nextMarkup = markup.replace(/\r\n/g, '\n');
    nextMarkup = nextMarkup.replace(/\n{3,}/g, '\n\n\n');
    nextMarkup = nextMarkup.replace(/\n/g, '<br/>');
    return nextMarkup;
  };

  _proto.createDocument = function createDocument(markup) {
    var doc = document.implementation.createHTMLDocument('Interweave');

    if (markup.match(INVALID_ROOTS)) {
      if (false) {}
    } else {
      doc.body.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? escape_html_default()(markup) : markup);
    }

    return doc;
  };

  _proto.extractAttributes = function extractAttributes(node) {
    var _this2 = this;

    var allowAttributes = this.props.allowAttributes;
    var attributes = {};
    var count = 0;

    if (node.nodeType !== ELEMENT_NODE || !node.attributes) {
      return null;
    }

    Array.from(node.attributes).forEach(function (attr) {
      var name = attr.name,
          value = attr.value;
      var newName = name.toLowerCase();
      var filter = ATTRIBUTES[newName] || ATTRIBUTES[name];

      if (!_this2.isSafe(node)) {
        return;
      }

      if (!newName.match(ALLOWED_ATTRS)) {
        if (!allowAttributes && (!filter || filter === FILTER_DENY) || newName.match(/^on/) || value.replace(/(\s|\0|&#x0(9|A|D);)/, '').match(/(javascript|vbscript|livescript|xss):/i)) {
          return;
        }
      }

      var newValue = newName === 'style' ? _this2.extractStyleAttribute(node) : value;

      if (filter === FILTER_CAST_BOOL) {
        newValue = true;
      } else if (filter === FILTER_CAST_NUMBER) {
        newValue = parseFloat(String(newValue));
      } else if (filter !== FILTER_NO_CAST) {
        newValue = String(newValue);
      }

      attributes[ATTRIBUTES_TO_PROPS[newName] || newName] = _this2.applyAttributeFilters(newName, newValue);
      count += 1;
    });

    if (count === 0) {
      return null;
    }

    return attributes;
  };

  _proto.extractStyleAttribute = function extractStyleAttribute(node) {
    var styles = {};

    var camelCase = function camelCase(match, letter) {
      return letter.toUpperCase();
    };

    Array.from(node.style).forEach(function (key) {
      var value = node.style[key];
      styles[key.replace(/-([a-z])/g, camelCase)] = value;
    });
    return styles;
  };

  _proto.getTagConfig = function getTagConfig(tagName) {
    var common = {
      children: [],
      content: 0,
      invalid: [],
      parent: [],
      self: true,
      tagName: '',
      type: 0,
      void: false
    };

    if (TAGS[tagName]) {
      return Parser_extends({}, common, {}, TAGS[tagName], {
        tagName: tagName
      });
    }

    return common;
  };

  _proto.isSafe = function isSafe(node) {
    if (typeof HTMLAnchorElement !== 'undefined' && node instanceof HTMLAnchorElement) {
      var href = node.getAttribute('href');

      if (href && href.charAt(0) === '#') {
        return true;
      }

      var protocol = node.protocol.toLowerCase();
      return protocol === ':' || protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:';
    }

    return true;
  };

  _proto.isTagAllowed = function isTagAllowed(tagName) {
    if (this.banned.has(tagName) || this.blocked.has(tagName)) {
      return false;
    }

    return this.props.allowElements || this.allowed.has(tagName);
  };

  _proto.parse = function parse() {
    return this.parseNode(this.doc.body, this.getTagConfig('body'));
  };

  _proto.parseNode = function parseNode(parentNode, parentConfig) {
    var _this3 = this;

    var _this$props2 = this.props,
        noHtml = _this$props2.noHtml,
        noHtmlExceptMatchers = _this$props2.noHtmlExceptMatchers,
        allowElements = _this$props2.allowElements,
        transform = _this$props2.transform;
    var content = [];
    var mergedText = '';
    Array.from(parentNode.childNodes).forEach(function (node) {
      if (node.nodeType === ELEMENT_NODE) {
        var tagName = node.nodeName.toLowerCase();

        var config = _this3.getTagConfig(tagName);

        if (mergedText) {
          content.push(mergedText);
          mergedText = '';
        }

        var nextNode = _this3.applyNodeFilters(tagName, node);

        if (!nextNode) {
          return;
        }

        var children;

        if (transform) {
          _this3.keyIndex += 1;
          var _key = _this3.keyIndex;
          children = _this3.parseNode(nextNode, config);
          var transformed = transform(nextNode, children, config);

          if (transformed === null) {
            return;
          } else if (typeof transformed !== 'undefined') {
            content.push(react.cloneElement(transformed, {
              key: _key
            }));
            return;
          }

          _this3.keyIndex = _key - 1;
        }

        if (_this3.banned.has(tagName)) {
          return;
        }

        if (!(noHtml || noHtmlExceptMatchers && tagName !== 'br') && _this3.isTagAllowed(tagName) && (allowElements || _this3.canRenderChild(parentConfig, config))) {
          _this3.keyIndex += 1;

          var attributes = _this3.extractAttributes(nextNode);

          var elementProps = {
            tagName: tagName
          };

          if (attributes) {
            elementProps.attributes = attributes;
          }

          if (config.void) {
            elementProps.selfClose = config.void;
          }

          content.push(react.createElement(Element, Parser_extends({}, elementProps, {
            key: _this3.keyIndex
          }), children || _this3.parseNode(nextNode, config)));
        } else {
          content = content.concat(_this3.parseNode(nextNode, config.tagName ? config : parentConfig));
        }
      } else if (node.nodeType === TEXT_NODE) {
        var text = noHtml && !noHtmlExceptMatchers ? node.textContent : _this3.applyMatchers(node.textContent || '', parentConfig);

        if (Array.isArray(text)) {
          content = content.concat(text);
        } else {
          mergedText += text;
        }
      }
    });

    if (mergedText) {
      content.push(mergedText);
    }

    return content;
  };

  return Parser;
}();


;// CONCATENATED MODULE: ./node_modules/interweave/esm/Markup.js


function Markup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Markup_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function Markup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Markup = function (_React$PureComponent) {
  Markup_inheritsLoose(Markup, _React$PureComponent);

  function Markup() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Markup.prototype;

  _proto.getContent = function getContent() {
    var _this$props = this.props,
        content = _this$props.content,
        emptyContent = _this$props.emptyContent,
        parsedContent = _this$props.parsedContent,
        tagName = _this$props.tagName,
        props = Markup_objectWithoutPropertiesLoose(_this$props, ["content", "emptyContent", "parsedContent", "tagName"]);

    if (parsedContent) {
      return parsedContent;
    }

    var markup = new Parser(content || '', props).parse();
    return markup.length > 0 ? markup : null;
  };

  _proto.render = function render() {
    var content = this.getContent() || this.props.emptyContent;
    var tag = this.props.tagName || 'div';
    return tag === 'fragment' ? react.createElement(react.Fragment, null, content) : react.createElement(Element, {
      tagName: tag
    }, content);
  };

  return Markup;
}(react.PureComponent);

Markup_defineProperty(Markup, "propTypes", {
  content: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().oneOf([null])]),
  emptyContent: (prop_types_default()).node,
  parsedContent: (prop_types_default()).node,
  tagName: prop_types_default().oneOfType([prop_types_default().oneOf(['fragment']), (prop_types_default()).string])
});

Markup_defineProperty(Markup, "defaultProps", {
  content: '',
  emptyContent: null,
  parsedContent: null,
  tagName: 'div'
});


;// CONCATENATED MODULE: ./node_modules/interweave/esm/Interweave.js


function Interweave_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Interweave_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function Interweave_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Interweave = function (_React$PureComponent) {
  Interweave_inheritsLoose(Interweave, _React$PureComponent);

  function Interweave() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Interweave.prototype;

  _proto.parseMarkup = function parseMarkup() {
    var _this = this;

    var _ref = this.props,
        content = _ref.content,
        disableFilters = _ref.disableFilters,
        disableMatchers = _ref.disableMatchers,
        emptyContent = _ref.emptyContent,
        filters = _ref.filters,
        matchers = _ref.matchers,
        onAfterParse = _ref.onAfterParse,
        onBeforeParse = _ref.onBeforeParse,
        tagName = _ref.tagName,
        props = Interweave_objectWithoutPropertiesLoose(_ref, ["content", "disableFilters", "disableMatchers", "emptyContent", "filters", "matchers", "onAfterParse", "onBeforeParse", "tagName"]);

    var allMatchers = disableMatchers ? [] : matchers;
    var allFilters = disableFilters ? [] : filters;
    var beforeCallbacks = onBeforeParse ? [onBeforeParse] : [];
    var afterCallbacks = onAfterParse ? [onAfterParse] : [];
    allMatchers.forEach(function (matcher) {
      if (matcher.onBeforeParse) {
        beforeCallbacks.push(matcher.onBeforeParse.bind(matcher));
      }

      if (matcher.onAfterParse) {
        afterCallbacks.push(matcher.onAfterParse.bind(matcher));
      }
    });
    var markup = beforeCallbacks.reduce(function (string, callback) {
      var nextString = callback(string, _this.props);

      if (false) {}

      return nextString;
    }, content || '');
    var parser = new Parser(markup, props, allMatchers, allFilters);
    var nodes = afterCallbacks.reduce(function (parserNodes, callback) {
      var nextNodes = callback(parserNodes, _this.props);

      if (false) {}

      return nextNodes;
    }, parser.parse());

    if (nodes.length === 0) {
      return emptyContent;
    }

    return nodes;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        emptyContent = _this$props.emptyContent,
        tagName = _this$props.tagName;
    return react.createElement(Markup, {
      emptyContent: emptyContent,
      tagName: tagName,
      parsedContent: this.parseMarkup()
    });
  };

  return Interweave;
}(react.PureComponent);

Interweave_defineProperty(Interweave, "propTypes", {
  disableFilters: (prop_types_default()).bool,
  disableMatchers: (prop_types_default()).bool,
  filters: prop_types_default().arrayOf((prop_types_default()).any),
  matchers: prop_types_default().arrayOf((prop_types_default()).any),
  onAfterParse: prop_types_default().oneOfType([(prop_types_default()).any, prop_types_default().oneOf([null])]),
  onBeforeParse: prop_types_default().oneOfType([(prop_types_default()).any, prop_types_default().oneOf([null])])
});

Interweave_defineProperty(Interweave, "defaultProps", {
  content: '',
  disableFilters: false,
  disableMatchers: false,
  emptyContent: null,
  filters: [],
  matchers: [],
  onAfterParse: null,
  onBeforeParse: null,
  tagName: 'span'
});


;// CONCATENATED MODULE: ./node_modules/interweave/module.js
/**
 * @copyright   2016-2019, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

// Our index re-exports TypeScript types, which Babel is unable to detect and omit.
// Because of this, Webpack and other bundlers attempt to import values that do not exist.
// To mitigate this issue, we need this module specific index file that manually exports.










/* harmony default export */ const interweave_module = (Interweave);


/***/ }),

/***/ 53894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ })

}]);