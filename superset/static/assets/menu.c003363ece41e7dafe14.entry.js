/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 15926:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Uses CommonJS, AMD or browser globals to create a module.
// Based on: https://github.com/umdjs/umd/blob/master/commonjsStrict.js
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function (exports) {
var rison = exports;

//////////////////////////////////////////////////
//
//  the stringifier is based on
//    http://json.org/json.js as of 2006-04-28 from json.org
//  the parser is based on 
//    http://osteele.com/sources/openlaszlo/json
//

if (typeof rison == 'undefined')
    window.rison = {};

/**
 *  rules for an uri encoder that is more tolerant than encodeURIComponent
 *
 *  encodeURIComponent passes  ~!*()-_.'
 *
 *  we also allow              ,:@$/
 *
 */
rison.uri_ok = {  // ok in url paths and in form query args
            '~': true,  '!': true,  '*': true,  '(': true,  ')': true,
            '-': true,  '_': true,  '.': true,  ',': true,
            ':': true,  '@': true,  '$': true,
            "'": true,  '/': true
};

/*
 * we divide the uri-safe glyphs into three sets
 *   <rison> - used by rison                         ' ! : ( ) ,
 *   <reserved> - not common in strings, reserved    * @ $ & ; =
 *
 * we define <identifier> as anything that's not forbidden
 */

/**
 * punctuation characters that are legal inside ids.
 */
// this var isn't actually used
//rison.idchar_punctuation = "_-./~";  

(function () {
    var l = [];
    for (var hi = 0; hi < 16; hi++) {
        for (var lo = 0; lo < 16; lo++) {
            if (hi+lo == 0) continue;
            var c = String.fromCharCode(hi*16 + lo);
            if (! /\w|[-_.\/~]/.test(c))
                l.push('\\u00' + hi.toString(16) + lo.toString(16));
        }
    }
    /**
     * characters that are illegal inside ids.
     * <rison> and <reserved> classes are illegal in ids.
     *
     */
    rison.not_idchar = l.join('')
    //idcrx = new RegExp('[' + rison.not_idchar + ']');
    //console.log('NOT', (idcrx.test(' ')) );
})();
//rison.not_idchar  = " \t\r\n\"<>[]{}'!=:(),*@$;&";
rison.not_idchar  = " '!:(),*@$";


/**
 * characters that are illegal as the start of an id
 * this is so ids can't look like numbers.
 */
rison.not_idstart = "-0123456789";


(function () {
    var idrx = '[^' + rison.not_idstart + rison.not_idchar + 
               '][^' + rison.not_idchar + ']*';

    rison.id_ok = new RegExp('^' + idrx + '$');

    // regexp to find the end of an id when parsing
    // g flag on the regexp is necessary for iterative regexp.exec()
    rison.next_id = new RegExp(idrx, 'g');
})();

/**
 * this is like encodeURIComponent() but quotes fewer characters.
 *
 * @see rison.uri_ok
 *
 * encodeURIComponent passes   ~!*()-_.'
 * rison.quote also passes   ,:@$/
 *   and quotes " " as "+" instead of "%20"
 */
rison.quote = function(x) {
    if (/^[-A-Za-z0-9~!*()_.',:@$\/]*$/.test(x))
        return x;

    return encodeURIComponent(x)
        .replace('%2C', ',', 'g')
        .replace('%3A', ':', 'g')
        .replace('%40', '@', 'g')
        .replace('%24', '$', 'g')
        .replace('%2F', '/', 'g')
        .replace('%20', '+', 'g');
};


//
//  based on json.js 2006-04-28 from json.org
//  license: http://www.json.org/license.html
//
//  hacked by nix for use in uris.
//

(function () {
    var sq = { // url-ok but quoted in strings
               "'": true,  '!': true
    },
    s = {
            array: function (x) {
                var a = ['!('], b, f, i, l = x.length, v;
                for (i = 0; i < l; i += 1) {
                    v = x[i];
                    f = s[typeof v];
                    if (f) {
                        v = f(v);
                        if (typeof v == 'string') {
                            if (b) {
                                a[a.length] = ',';
                            }
                            a[a.length] = v;
                            b = true;
                        }
                    }
                }
                a[a.length] = ')';
                return a.join('');
            },
            'boolean': function (x) {
                if (x)
                    return '!t';
                return '!f'
            },
            'null': function (x) {
                return "!n";
            },
            number: function (x) {
                if (!isFinite(x))
                    return '!n';
                // strip '+' out of exponent, '-' is ok though
                return String(x).replace(/\+/,'');
            },
            object: function (x) {
                if (x) {
                    if (x instanceof Array) {
                        return s.array(x);
                    }
                    // WILL: will this work on non-Firefox browsers?
                    if (typeof x.__prototype__ === 'object' && typeof x.__prototype__.encode_rison !== 'undefined')
                        return x.encode_rison();

                    var a = ['('], b, f, i, v, ki, ks=[];
                    for (i in x)
                        ks[ks.length] = i;
                    ks.sort();
                    for (ki = 0; ki < ks.length; ki++) {
                        i = ks[ki];
                        v = x[i];
                        f = s[typeof v];
                        if (f) {
                            v = f(v);
                            if (typeof v == 'string') {
                                if (b) {
                                    a[a.length] = ',';
                                }
                                a.push(s.string(i), ':', v);
                                b = true;
                            }
                        }
                    }
                    a[a.length] = ')';
                    return a.join('');
                }
                return '!n';
            },
            string: function (x) {
                if (x == '')
                    return "''";

                if (rison.id_ok.test(x))
                    return x;

                x = x.replace(/(['!])/g, function(a, b) {
                    if (sq[b]) return '!'+b;
                    return b;
                });
                return "'" + x + "'";
            },
            undefined: function (x) {
                throw new Error("rison can't encode the undefined value");
            }
        };


    /**
     * rison-encode a javascript structure
     *
     *  implemementation based on Douglas Crockford's json.js:
     *    http://json.org/json.js as of 2006-04-28 from json.org
     *
     */
    rison.encode = function (v) {
        return s[typeof v](v);
    };

    /**
     * rison-encode a javascript object without surrounding parens
     *
     */
    rison.encode_object = function (v) {
        if (typeof v != 'object' || v === null || v instanceof Array)
            throw new Error("rison.encode_object expects an object argument");
        var r = s[typeof v](v);
        return r.substring(1, r.length-1);
    };

    /**
     * rison-encode a javascript array without surrounding parens
     *
     */
    rison.encode_array = function (v) {
        if (!(v instanceof Array))
            throw new Error("rison.encode_array expects an array argument");
        var r = s[typeof v](v);
        return r.substring(2, r.length-1);
    };

    /**
     * rison-encode and uri-encode a javascript structure
     *
     */
    rison.encode_uri = function (v) {
        return rison.quote(s[typeof v](v));
    };

})();




//
// based on openlaszlo-json and hacked by nix for use in uris.
//
// Author: Oliver Steele
// Copyright: Copyright 2006 Oliver Steele.  All rights reserved.
// Homepage: http://osteele.com/sources/openlaszlo/json
// License: MIT License.
// Version: 1.0


/**
 * parse a rison string into a javascript structure.
 *
 * this is the simplest decoder entry point.
 *
 *  based on Oliver Steele's OpenLaszlo-JSON
 *     http://osteele.com/sources/openlaszlo/json
 */
rison.decode = function(r) {
    var errcb = function(e) { throw Error('rison decoder error: ' + e); };
    var p = new rison.parser(errcb);
    return p.parse(r);
};

/**
 * parse an o-rison string into a javascript structure.
 *
 * this simply adds parentheses around the string before parsing.
 */
rison.decode_object = function(r) {
    return rison.decode('('+r+')');
};

/**
 * parse an a-rison string into a javascript structure.
 *
 * this simply adds array markup around the string before parsing.
 */
rison.decode_array = function(r) {
    return rison.decode('!('+r+')');
};


/**
 * construct a new parser object for reuse.
 *
 * @constructor
 * @class A Rison parser class.  You should probably 
 *        use rison.decode instead. 
 * @see rison.decode
 */
rison.parser = function (errcb) {
    this.errorHandler = errcb;
};

/**
 * a string containing acceptable whitespace characters.
 * by default the rison decoder tolerates no whitespace.
 * to accept whitespace set rison.parser.WHITESPACE = " \t\n\r\f";
 */
rison.parser.WHITESPACE = "";

// expose this as-is?
rison.parser.prototype.setOptions = function (options) {
    if (options['errorHandler'])
        this.errorHandler = options.errorHandler;
};

/**
 * parse a rison string into a javascript structure.
 */
rison.parser.prototype.parse = function (str) {
    this.string = str;
    this.index = 0;
    this.message = null;
    var value = this.readValue();
    if (!this.message && this.next())
        value = this.error("unable to parse string as rison: '" + rison.encode(str) + "'");
    if (this.message && this.errorHandler)
        this.errorHandler(this.message, this.index);
    return value;
};

rison.parser.prototype.error = function (message) {
    if (typeof(console) != 'undefined')
        console.log('rison parser error: ', message);
    this.message = message;
    return undefined;
}
    
rison.parser.prototype.readValue = function () {
    var c = this.next();
    var fn = c && this.table[c];

    if (fn)
        return fn.apply(this);

    // fell through table, parse as an id

    var s = this.string;
    var i = this.index-1;

    // Regexp.lastIndex may not work right in IE before 5.5?
    // g flag on the regexp is also necessary
    rison.next_id.lastIndex = i;
    var m = rison.next_id.exec(s);

    // console.log('matched id', i, r.lastIndex);

    if (m.length > 0) {
        var id = m[0];
        this.index = i+id.length;
        return id;  // a string
    }

    if (c) return this.error("invalid character: '" + c + "'");
    return this.error("empty expression");
}

rison.parser.parse_array = function (parser) {
    var ar = [];
    var c;
    while ((c = parser.next()) != ')') {
        if (!c) return parser.error("unmatched '!('");
        if (ar.length) {
            if (c != ',')
                parser.error("missing ','");
        } else if (c == ',') {
            return parser.error("extra ','");
        } else
            --parser.index;
        var n = parser.readValue();
        if (typeof n == "undefined") return undefined;
        ar.push(n);
    }
    return ar;
};

rison.parser.bangs = {
    t: true,
    f: false,
    n: null,
    '(': rison.parser.parse_array
}

rison.parser.prototype.table = {
    '!': function () {
        var s = this.string;
        var c = s.charAt(this.index++);
        if (!c) return this.error('"!" at end of input');
        var x = rison.parser.bangs[c];
        if (typeof(x) == 'function') {
            return x.call(null, this);
        } else if (typeof(x) == 'undefined') {
            return this.error('unknown literal: "!' + c + '"');
        }
        return x;
    },
    '(': function () {
        var o = {};
        var c;
        var count = 0;
        while ((c = this.next()) != ')') {
            if (count) {
                if (c != ',')
                    this.error("missing ','");
            } else if (c == ',') {
                return this.error("extra ','");
            } else
                --this.index;
            var k = this.readValue();
            if (typeof k == "undefined") return undefined;
            if (this.next() != ':') return this.error("missing ':'");
            var v = this.readValue();
            if (typeof v == "undefined") return undefined;
            o[k] = v;
            count++;
        }
        return o;
    },
    "'": function () {
        var s = this.string;
        var i = this.index;
        var start = i;
        var segments = [];
        var c;
        while ((c = s.charAt(i++)) != "'") {
            //if (i == s.length) return this.error('unmatched "\'"');
            if (!c) return this.error('unmatched "\'"');
            if (c == '!') {
                if (start < i-1)
                    segments.push(s.slice(start, i-1));
                c = s.charAt(i++);
                if ("!'".indexOf(c) >= 0) {
                    segments.push(c);
                } else {
                    return this.error('invalid string escape: "!'+c+'"');
                }
                start = i;
            }
        }
        if (start < i-1)
            segments.push(s.slice(start, i-1));
        this.index = i;
        return segments.length == 1 ? segments[0] : segments.join('');
    },
    // Also any digit.  The statement that follows this table
    // definition fills in the digits.
    '-': function () {
        var s = this.string;
        var i = this.index;
        var start = i-1;
        var state = 'int';
        var permittedSigns = '-';
        var transitions = {
            'int+.': 'frac',
            'int+e': 'exp',
            'frac+e': 'exp'
        };
        do {
            var c = s.charAt(i++);
            if (!c) break;
            if ('0' <= c && c <= '9') continue;
            if (permittedSigns.indexOf(c) >= 0) {
                permittedSigns = '';
                continue;
            }
            state = transitions[state+'+'+c.toLowerCase()];
            if (state == 'exp') permittedSigns = '-';
        } while (state);
        this.index = --i;
        s = s.slice(start, i)
        if (s == '-') return this.error("invalid number");
        return Number(s);
    }
};
// copy table['-'] to each of table[i] | i <- '0'..'9':
(function (table) {
    for (var i = 0; i <= 9; i++)
        table[String(i)] = table['-'];
})(rison.parser.prototype.table);

// return the next non-whitespace character, or undefined
rison.parser.prototype.next = function () {
    var s = this.string;
    var i = this.index;
    do {
        if (i == s.length) return undefined;
        var c = s.charAt(i++);
    } while (rison.parser.WHITESPACE.indexOf(c) >= 0);
    this.index = i;
    return c;
};

// End of UMD module wrapper
}));


/***/ }),

/***/ 95639:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(9060);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js + 2 modules
var emotion_element_99289b21_browser_esm = __webpack_require__(68135);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 1 modules
var emotion_cache_browser_esm = __webpack_require__(23882);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/helpers/extends.js
var helpers_extends = __webpack_require__(5872);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js
var style = __webpack_require__(37840);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/url-search-params.js
var url_search_params = __webpack_require__(94435);
var url_search_params_default = /*#__PURE__*/__webpack_require__.n(url_search_params);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./src/utils/getClientErrorObject.ts
var getClientErrorObject = __webpack_require__(98286);
;// CONCATENATED MODULE: ./src/utils/urlUtils.ts
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * 'License'); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function getUrlParam({ name, type }) {
  const urlParam = new (url_search_params_default())(window.location.search).get(name);
  switch (type) {
    case 'number':
      if (!urlParam) {
        return null;
      }
      if (urlParam === 'true') {
        return 1;
      }
      if (urlParam === 'false') {
        return 0;
      }
      if (!Number.isNaN(Number(urlParam))) {
        return Number(urlParam);
      }
      return null;
    case 'object':
      if (!urlParam) {
        return null;
      }
      return JSON.parse(urlParam);
    case 'boolean':
      if (!urlParam) {
        return null;
      }
      return urlParam !== 'false' && urlParam !== '0';
    case 'rison':
      if (!urlParam) {
        return null;
      }
      try {
        return rison_default().decode(urlParam);
      }
      catch {
        return null;
      }
    default:
      return urlParam;}

}
function getShortUrl(longUrl) {
  return SupersetClient/* default.post */.Z.post({
    endpoint: '/r/shortner/',
    postPayload: { data: `/${longUrl}` },
    parseMethod: 'text',
    stringify: false // the url saves with an extra set of string quotes without this
  }).
  then(({ text }) => text).
  catch((response) =>
  // @ts-ignore
  (0,getClientErrorObject/* getClientErrorObject */.O)(response).then(({ error, statusText }) => Promise.reject(error || statusText)));
}
// EXTERNAL MODULE: ./src/common/components/index.tsx
var components = __webpack_require__(82191);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(71230);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(15746);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
;// CONCATENATED MODULE: ./src/constants.ts
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
const DATETIME_WITH_TIME_ZONE = 'YYYY-MM-DD HH:mm:ssZ';
const TIME_WITH_MS = 'HH:mm:ss.SSS';
const BOOL_TRUE_DISPLAY = 'True';
const BOOL_FALSE_DISPLAY = 'False';
const URL_PARAMS = {
  standalone: {
    name: 'standalone',
    type: 'number' },

  preselectFilters: {
    name: 'preselect_filters',
    type: 'object' },

  nativeFilters: {
    name: 'native_filters',
    type: 'rison' },

  filterSet: {
    name: 'filter_set',
    type: 'string' },

  showFilters: {
    name: 'show_filters',
    type: 'boolean' } };


/**
 * Faster debounce delay for inputs without expensive operation.
 */
const FAST_DEBOUNCE = 250;
/**
 * Slower debounce delay for inputs with expensive API calls.
 */
const SLOW_DEBOUNCE = 500;
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
;// CONCATENATED MODULE: ./src/components/Menu/LanguagePicker.tsx
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




const { SubMenu } = components/* MainNav */.$t;
const StyledLabel = style/* styled.div */.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({ theme }) => theme.gridUnit * 2}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`;
const StyledFlag = style/* styled.i */.iK.i`
  margin-top: 2px;
`;
function LanguagePicker(props) {
  const { locale, languages, ...rest } = props;
  return (0,emotion_react_browser_esm.jsx)(SubMenu, extends_default()({ "aria-label": "Languages", title: (0,emotion_react_browser_esm.jsx)("div", { className: "f16" },
    (0,emotion_react_browser_esm.jsx)(StyledFlag, { className: `flag ${languages[locale].flag}` })),
    icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, null) }, rest),
  Object.keys(languages).map((langKey) => (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: langKey, style: { whiteSpace: 'normal', height: 'auto' } },
  (0,emotion_react_browser_esm.jsx)(StyledLabel, { className: "f16" },
  (0,emotion_react_browser_esm.jsx)("i", { className: `flag ${languages[langKey].flag}` }),
  (0,emotion_react_browser_esm.jsx)("a", { href: languages[langKey].url }, languages[langKey].name)))));



}
;// CONCATENATED MODULE: ./src/components/Menu/MenuRight.tsx
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






const dropdownItems = [
{
  label: (0,TranslatorSingleton.t)('SQL query'),
  url: '/superset/sqllab?new=true',
  icon: 'fa-fw fa-search' },

{
  label: (0,TranslatorSingleton.t)('Chart'),
  url: '/chart/add',
  icon: 'fa-fw fa-bar-chart' },

{
  label: (0,TranslatorSingleton.t)('Dashboard'),
  url: '/dashboard/new',
  icon: 'fa-fw fa-dashboard' }];


const versionInfoStyles = (theme) => emotion_react_browser_esm.css`
  padding: ${theme.gridUnit * 1.5}px ${theme.gridUnit * 4}px
    ${theme.gridUnit * 4}px ${theme.gridUnit * 7}px;
  color: ${theme.colors.grayscale.base};
  font-size: ${theme.typography.sizes.xs}px;
  white-space: nowrap;
`;
const StyledI = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.primary.dark1};
`;
const StyledDiv = style/* styled.div */.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => align};
  align-items: center;
  margin-right: ${({ theme }) => theme.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({ theme }) => theme.gridUnit * 5.25}px;
  }
`;
const StyledAnchor = style/* styled.a */.iK.a`
  padding-right: ${({ theme }) => theme.gridUnit}px;
  padding-left: ${({ theme }) => theme.gridUnit}px;
`;
const { SubMenu: MenuRight_SubMenu } = components/* MainNav */.$t;
const RightMenu = ({ align, settings, navbarRight, isFrontendRoute }) => (0,emotion_react_browser_esm.jsx)(StyledDiv, { align: align },
(0,emotion_react_browser_esm.jsx)(components/* MainNav */.$t, { mode: "horizontal" },
!navbarRight.user_is_anonymous && (0,emotion_react_browser_esm.jsx)(MenuRight_SubMenu, { title: (0,emotion_react_browser_esm.jsx)(StyledI, { className: "fa fa-plus" }), icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, null) },
dropdownItems.map((menu) => (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: menu.label },
(0,emotion_react_browser_esm.jsx)("a", { href: menu.url },
(0,emotion_react_browser_esm.jsx)("i", { className: `fa ${menu.icon}` }), ' ',
menu.label)))),



(0,emotion_react_browser_esm.jsx)(MenuRight_SubMenu, { title: "Settings", icon: (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, { iconSize: "xl" }) },
settings.map((section, index) => {var _section$childs;return [
  (0,emotion_react_browser_esm.jsx)(components/* MainNav.ItemGroup */.$t.ItemGroup, { key: `${section.label}`, title: section.label }, (_section$childs =
  section.childs) == null ? void 0 : _section$childs.map((child) => {
    if (typeof child !== 'string') {
      return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: `${child.label}` },
      isFrontendRoute(child.url) ? (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: child.url || '' }, child.label) : (0,emotion_react_browser_esm.jsx)("a", { href: child.url }, child.label));

    }
    return null;
  })),

  index < settings.length - 1 && (0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, null)];}),


!navbarRight.user_is_anonymous && [
(0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, { key: "user-divider" }),
(0,emotion_react_browser_esm.jsx)(components/* MainNav.ItemGroup */.$t.ItemGroup, { key: "user-section", title: (0,TranslatorSingleton.t)('User') },
navbarRight.user_profile_url && (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: "profile" },
(0,emotion_react_browser_esm.jsx)("a", { href: navbarRight.user_profile_url }, (0,TranslatorSingleton.t)('Profile'))),

navbarRight.user_info_url && (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: "info" },
(0,emotion_react_browser_esm.jsx)("a", { href: navbarRight.user_info_url }, (0,TranslatorSingleton.t)('Info'))),

(0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: "logout" },
(0,emotion_react_browser_esm.jsx)("a", { href: navbarRight.user_logout_url }, (0,TranslatorSingleton.t)('Logout'))))],



(navbarRight.version_string ||
navbarRight.version_sha ||
navbarRight.build_number) && [
(0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, { key: "version-info-divider" }),
(0,emotion_react_browser_esm.jsx)(components/* MainNav.ItemGroup */.$t.ItemGroup, { key: "about-section", title: (0,TranslatorSingleton.t)('About') },
(0,emotion_react_browser_esm.jsx)("div", { className: "about-section" },
navbarRight.show_watermark && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles },
(0,TranslatorSingleton.t)('Powered by Apache Superset')),

navbarRight.version_string && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles }, "Version: ",
navbarRight.version_string),

navbarRight.version_sha && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles }, "SHA: ",
navbarRight.version_sha),

navbarRight.build_number && (0,emotion_react_browser_esm.jsx)("div", { css: versionInfoStyles }, "Build: ",
navbarRight.build_number)))]),





navbarRight.show_language_picker && (0,emotion_react_browser_esm.jsx)(LanguagePicker, { locale: navbarRight.locale, languages: navbarRight.languages })),

navbarRight.documentation_url && (0,emotion_react_browser_esm.jsx)(StyledAnchor, { href: navbarRight.documentation_url, target: "_blank", rel: "noreferrer", title: (0,TranslatorSingleton.t)('Documentation') },
(0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-question" }), "\xA0"),


navbarRight.bug_report_url && (0,emotion_react_browser_esm.jsx)(StyledAnchor, { href: navbarRight.bug_report_url, target: "_blank", rel: "noreferrer", title: (0,TranslatorSingleton.t)('Report a bug') },
(0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-bug" })),

navbarRight.user_is_anonymous && (0,emotion_react_browser_esm.jsx)(StyledAnchor, { href: navbarRight.user_login_url },
(0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-fw fa-sign-in" }),
(0,TranslatorSingleton.t)('Login')));


/* harmony default export */ const MenuRight = (RightMenu);
;// CONCATENATED MODULE: ./src/components/Menu/Menu.tsx
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












const StyledHeader = style/* styled.header */.iK.header`
  background-color: white;
  margin-bottom: 2px;
  &:nth-last-of-type(2) nav {
    margin-bottom: 2px;
  }

  .caret {
    display: none;
  }
  .navbar-brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navbar-brand-text {
    border-left: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-right: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    height: 100%;
    color: ${({ theme }) => theme.colors.grayscale.dark1};
    padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    padding-right: ${({ theme }) => theme.gridUnit * 4}px;
    margin-right: ${({ theme }) => theme.gridUnit * 6}px;
    font-size: ${({ theme }) => theme.gridUnit * 4}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${({ theme }) => theme.gridUnit * 58}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 1127px) {
      display: none;
    }
  }
  .main-nav .ant-menu-submenu-title > svg {
    top: ${({ theme }) => theme.gridUnit * 5.25}px;
  }
  @media (max-width: 767px) {
    .navbar-brand {
      float: none;
    }
  }
  .ant-menu-horizontal .ant-menu-item {
    height: 100%;
    line-height: inherit;
  }
  .ant-menu > .ant-menu-item > a {
    padding: ${({ theme }) => theme.gridUnit * 4}px;
  }
  @media (max-width: 767px) {
    .ant-menu-item {
      padding: 0 ${({ theme }) => theme.gridUnit * 6}px 0
        ${({ theme }) => theme.gridUnit * 3}px !important;
    }
    .ant-menu > .ant-menu-item > a {
      padding: 0px;
    }
    .main-nav .ant-menu-submenu-title > svg:nth-child(1) {
      display: none;
    }
    .ant-menu-item-active > a {
      &:hover {
        color: ${({ theme }) => theme.colors.primary.base} !important;
        background-color: transparent !important;
      }
    }
  }

  .ant-menu-item a {
    &:hover {
      color: ${({ theme }) => theme.colors.grayscale.dark1};
      background-color: ${({ theme }) => theme.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;
const { SubMenu: Menu_SubMenu } = components/* MainNav */.$t;
const { useBreakpoint } = grid/* default */.ZP;
function Menu({ data: { menu, brand, navbar_right: navbarRight, settings }, isFrontendRoute = () => false }) {
  const [showMenu, setMenu] = (0,react.useState)('horizontal');
  const screens = useBreakpoint();
  (0,react.useEffect)(() => {
    function handleResize() {
      if (window.innerWidth <= 767) {
        setMenu('inline');
      } else

      setMenu('horizontal');
    }
    handleResize();
    const windowResize = debounce_default()(() => handleResize(), 10);
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);
  const standalone = getUrlParam(URL_PARAMS.standalone);
  if (standalone)
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null);
  const renderSubMenu = ({ label, childs, url, index, isFrontendRoute }) => {
    if (url && isFrontendRoute) {
      return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: label, role: "presentation" },
      (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { role: "button", to: url },
      label));


    }
    if (url) {
      return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: label },
      (0,emotion_react_browser_esm.jsx)("a", { href: url }, label));

    }
    return (0,emotion_react_browser_esm.jsx)(Menu_SubMenu, { key: index, title: label, icon: showMenu === 'inline' ? (0,emotion_react_browser_esm.jsx)(react.Fragment, null) : (0,emotion_react_browser_esm.jsx)(Icons/* default.TriangleDown */.Z.TriangleDown, null) },
    childs == null ? void 0 : childs.map((child, index1) => {
      if (typeof child === 'string' && child === '-') {
        return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Divider */.$t.Divider, { key: `$${index1}` });
      }
      if (typeof child !== 'string') {
        return (0,emotion_react_browser_esm.jsx)(components/* MainNav.Item */.$t.Item, { key: `${child.label}` },
        child.isFrontendRoute ? (0,emotion_react_browser_esm.jsx)(react_router_dom/* Link */.rU, { to: child.url || '' }, child.label) : (0,emotion_react_browser_esm.jsx)("a", { href: child.url }, child.label));

      }
      return null;
    }));

  };
  return (0,emotion_react_browser_esm.jsx)(StyledHeader, { className: "top", id: "main-menu", role: "navigation" },
  (0,emotion_react_browser_esm.jsx)(emotion_react_browser_esm.Global, { styles: emotion_react_browser_esm.css`
          .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
            border-radius: 0px;
          }
          .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
            border-radius: 0px;
          }
        ` }),
  (0,emotion_react_browser_esm.jsx)(row/* default */.Z, null,
  (0,emotion_react_browser_esm.jsx)(col/* default */.Z, { md: 16, xs: 24 },
  (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "brand-tooltip", placement: "bottomLeft", title: brand.tooltip, arrowPointAtCenter: true },
  (0,emotion_react_browser_esm.jsx)("a", { className: "navbar-brand", href: brand.path },
  (0,emotion_react_browser_esm.jsx)("img", { width: brand.width, src: brand.icon, alt: brand.alt }))),


  brand.text && (0,emotion_react_browser_esm.jsx)("div", { className: "navbar-brand-text" },
  (0,emotion_react_browser_esm.jsx)("span", null, brand.text)),

  (0,emotion_react_browser_esm.jsx)(components/* MainNav */.$t, { mode: showMenu, className: "main-nav" },
  menu.map((item) => {var _item$childs;
    const props = {
      ...item,
      isFrontendRoute: isFrontendRoute(item.url),
      childs: (_item$childs = item.childs) == null ? void 0 : _item$childs.map((c) => {
        if (typeof c === 'string') {
          return c;
        }
        return {
          ...c,
          isFrontendRoute: isFrontendRoute(c.url) };

      }) };

    return renderSubMenu(props);
  }))),


  (0,emotion_react_browser_esm.jsx)(col/* default */.Z, { md: 8, xs: 24 },
  (0,emotion_react_browser_esm.jsx)(MenuRight, { align: screens.md ? 'flex-end' : 'flex-start', settings: settings, navbarRight: navbarRight, isFrontendRoute: isFrontendRoute }))));



}
// transform the menu data to reorganize components
function MenuWrapper({ data, ...rest }) {
  const newMenuData = {
    ...data };

  // Menu items that should go into settings dropdown
  const settingsMenus = {
    Security: true,
    Manage: true };

  // Cycle through menu.menu to build out cleanedMenu and settings
  const cleanedMenu = [];
  const settings = [];
  newMenuData.menu.forEach((item) => {
    if (!item) {
      return;
    }
    const children = [];
    const newItem = {
      ...item };

    // Filter childs
    if (item.childs) {
      item.childs.forEach((child) => {
        if (typeof child === 'string') {
          children.push(child);
        } else
        if (child.label) {
          children.push(child);
        }
      });
      newItem.childs = children;
    }
    if (!settingsMenus.hasOwnProperty(item.name)) {
      cleanedMenu.push(newItem);
    } else
    {
      settings.push(newItem);
    }
  });
  newMenuData.menu = cleanedMenu;
  newMenuData.settings = settings;
  return (0,emotion_react_browser_esm.jsx)(Menu, extends_default()({ data: newMenuData }, rest));
}
// EXTERNAL MODULE: ./src/preamble.ts + 3 modules
var preamble = __webpack_require__(26009);
;// CONCATENATED MODULE: ./src/views/menu.tsx
var _container$getAttribu; /**
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
// Menu App. Used in views that do not already include the Menu component in the layout.
// eg, backend rendered views







const container = document.getElementById('app');
const bootstrapJson = (_container$getAttribu = container == null ? void 0 : container.getAttribute('data-bootstrap')) != null ? _container$getAttribu : '{}';
const bootstrap = JSON.parse(bootstrapJson);
const menu = { ...bootstrap.common.menu_data };
const emotionCache = (0,emotion_cache_browser_esm/* default */.Z)({
  key: 'menu' });

const app =
// @ts-ignore: emotion types defs are incompatible between core and cache
(0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.C, { value: emotionCache },
(0,emotion_react_browser_esm.jsx)(emotion_element_99289b21_browser_esm.a, { theme: preamble/* theme */.r },
(0,emotion_react_browser_esm.jsx)(MenuWrapper, { data: menu })));


react_dom.render(app, document.getElementById('app-menu'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"57":"2cf9bc4ac970720748c0","112":"be71e978bbc620ffc544","158":"df7539aa250576fe4cf3","177":"f6ae69232927d7dd1a30","183":"911ddd624433d7f0867f","215":"7254cd744b1245396db5","310":"1563948d372fecada150","312":"3aa1656a2b7ab28d62bb","336":"d6bbf09be905d11fa889","363":"35405942d4d50d2dd001","597":"ec532018b9e38cc071a5","600":"5f68b3d6f05a562607bc","826":"3ac1e6742edc6811953f","992":"d36caa7e430c7b303adb","999":"ed18546530e1fb3fdb9c","1075":"d25c694581c3e17f97cb","1174":"bd6d2c538bb78fcea2f1","1185":"541be5b4ad9b7f276896","1256":"b16af0091358c002effa","1263":"e1ebf092ea50eba7a149","1293":"89308437860fa7983857","1351":"4c3819c3165f4d3cb3e5","1398":"1e4e92a480dc5b27ff7e","1493":"fb655e11f755bbed5b11","1568":"aee4a0774888c608f63d","1605":"281404507f98467fd7d8","1899":"92b929932dfe7811cbdc","2079":"f78da0b31a1f64da12a4","2105":"fe2fcb119f108e338ac6","2264":"3ca36ce2ac9c43b9b179","2267":"4dd9b2ded1ac4435aa8d","2403":"8634710eb87615cfc6bf","2439":"96da625d4cbc67a0064f","2646":"add1d27a3b3d4047480a","2698":"be06d926a61b2ff8096c","2713":"05813f52004aefacbcbe","2797":"b8837234f74badcbcd64","2983":"27d10999d0c2bca2cf50","3141":"23ce23648579690f9400","3240":"2a9272f662cb2de40c76","3265":"474d7d7c385d10a60693","3325":"a90266e90bac97af3781","3544":"3406c53cc0e4f33bea86","3558":"eb461a449988ae99c3c4","3567":"5825dfd50d3a6a9b1537","3606":"0adb7d4dc6ba6bad8d1c","3749":"521d48dd5d1067665be3","3871":"76ef1aed5605fc1068fb","3955":"a0676b5a618b6b82bf83","3985":"c54a8b32d2af0d76b8a2","4139":"546708c7300dff5cd155","4266":"d7fa57e367a6eee483b8","4273":"5945dbd1e7088899e37e","4458":"e3c0c688a5be0b5da06e","4474":"b3fc848bf220efa9b835","4625":"c9320cb8d2eee5ebaf4d","4662":"c9085feaf1017c91b23c","4667":"46d958dc7f86f6292bb4","4732":"a80344b7469a48cb86c7","4757":"022553145064f1ee2924","4758":"ec45f143d912ef8b9d0c","4794":"f98ef85464f11e5c88a7","4797":"45c4548eeeb8e2e5cc9e","4810":"188774d3ee3c04c9e188","4817":"f5e26b0709f74b69fa03","4851":"6686fcc47a6c733deb22","5201":"80aa074f906eee87b0e6","5224":"606b538b7d64335a7781","5226":"7bdd4c10a7916d067525","5249":"fd5ab9bdd08f50f27ff4","5281":"a4b56aaf274795e76afa","5330":"bad80526aedb7bc5338b","5350":"edd537b2eaa4adec82a6","5359":"5800205e282e553ee535","5367":"6b1af8966839be51ec26","5507":"3af7db839801b0db65e4","5580":"a94f479ae8bf4d3ac0ad","5592":"b1e9861fc747cea7a61e","5641":"19537bf0b67de2dfd994","5707":"429d9ebd98fff39e2608","5771":"a782fb996abf91074d7b","5777":"3f7c6ffbb107b72a71a2","5816":"4d69301b12c619190f1d","5832":"f1d3435d5fe5517d1e0e","5838":"b957c2dc2db93662bc25","5962":"4af600b89ed207c88a75","5972":"0da6cf793e3d1cc69358","5998":"d142a4b602af8829450c","6126":"4024bb2150eb5d99ed9f","6150":"ed773f8f5c293cb4c13b","6167":"8a7e1d8900669c9e319e","6207":"d46595d332f953beb63a","6254":"c26e672ffd1d2d6ffe82","6303":"d4d6291f5d42a7f1652f","6371":"66ea24b6bd0ebafddd11","6420":"77ac4862a9a0de480eaa","6447":"2160abb016acabd01b58","6507":"ff107afb952cd5cd032a","6668":"82739982a9d0087df578","6682":"92912f99d5ec5e63356f","6758":"7650f3fae2f4e8e07dd1","6819":"2d98b68d6ff55d61f8d6","6883":"8ff31cb25f4cbcf65f8e","6981":"9dcf9659f6e80537876c","7183":"4ee4d78d1c0b53004df4","7249":"05401ea8ee3aa4893e10","7405":"866ef25cb2164e793e19","7460":"830c4edc179abe920136","7584":"910bd8b8c2993335fa44","7610":"c4bd3575194e27e4dca4","7654":"29f53849422f19ebe336","7716":"e36d35dc706ec3bf3a29","7760":"4ef3263971e6365c79bf","7803":"2624b6fbf922d341ea04","7832":"4d9d2dbac38cc2b0fb90","7850":"ead55581e4ca5be56dc6","7922":"c84d95f1054e63d7ffeb","8312":"dac04f73013472377c36","8349":"05f914d2483e65c1b585","8398":"d8f5829d0db6a5a634a6","8425":"52abf98953e003bb0152","8463":"48256f92f964b8bf79a4","8682":"79102f702737cf867d5f","8695":"c96f012c5780a51d8755","8970":"6f72f94b5f107daae7bc","9013":"f709bdaee2140bc2a4c5","9052":"b0285bb9d71534ce20b5","9109":"7e727e9ccc7def5a23a2","9305":"60fe40ee626eb2ec1b5f","9325":"90c33d84118b47709bf1","9393":"654e00a37f7e2cf29ed8","9510":"d0629cd97e7154454216","9558":"fe373e383af8c140dd79","9767":"9b54247b72d042373f5e","9811":"30707e6da4b523886fde"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "superset:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			8860: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [1216,7550,4772,5110,3727,3401], () => (__webpack_require__(26009)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1216,7550,4772,5110,3727,3401], () => (__webpack_require__(95639)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;