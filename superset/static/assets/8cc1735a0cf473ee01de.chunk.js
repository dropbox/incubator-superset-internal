(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4173],{

/***/ 93202:
/***/ ((module) => {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function anyNumberOfTimes(re) {
  return concat('(', re, ')*');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: Handlebars
Requires: xml.js
Author: Robin Ward <robin.ward@gmail.com>
Description: Matcher for Handlebars as well as EmberJS additions.
Website: https://handlebarsjs.com
Category: template
*/

function handlebars(hljs) {
  const BUILT_INS = {
    'builtin-name': [
      'action',
      'bindattr',
      'collection',
      'component',
      'concat',
      'debugger',
      'each',
      'each-in',
      'get',
      'hash',
      'if',
      'in',
      'input',
      'link-to',
      'loc',
      'log',
      'lookup',
      'mut',
      'outlet',
      'partial',
      'query-params',
      'render',
      'template',
      'textarea',
      'unbound',
      'unless',
      'view',
      'with',
      'yield'
    ]
  };

  const LITERALS = {
    literal: [
      'true',
      'false',
      'undefined',
      'null'
    ]
  };

  // as defined in https://handlebarsjs.com/guide/expressions.html#literal-segments
  // this regex matches literal segments like ' abc ' or [ abc ] as well as helpers and paths
  // like a/b, ./abc/cde, and abc.bcd

  const DOUBLE_QUOTED_ID_REGEX = /""|"[^"]+"/;
  const SINGLE_QUOTED_ID_REGEX = /''|'[^']+'/;
  const BRACKET_QUOTED_ID_REGEX = /\[\]|\[[^\]]+\]/;
  const PLAIN_ID_REGEX = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/;
  const PATH_DELIMITER_REGEX = /(\.|\/)/;
  const ANY_ID = either(
    DOUBLE_QUOTED_ID_REGEX,
    SINGLE_QUOTED_ID_REGEX,
    BRACKET_QUOTED_ID_REGEX,
    PLAIN_ID_REGEX
    );

  const IDENTIFIER_REGEX = concat(
    optional(/\.|\.\/|\//), // relative or absolute path
    ANY_ID,
    anyNumberOfTimes(concat(
      PATH_DELIMITER_REGEX,
      ANY_ID
    ))
  );

  // identifier followed by a equal-sign (without the equal sign)
  const HASH_PARAM_REGEX = concat(
    '(',
    BRACKET_QUOTED_ID_REGEX, '|',
    PLAIN_ID_REGEX,
    ')(?==)'
  );

  const HELPER_NAME_OR_PATH_EXPRESSION = {
    begin: IDENTIFIER_REGEX,
    lexemes: /[\w.\/]+/
  };

  const HELPER_PARAMETER = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: LITERALS
  });

  const SUB_EXPRESSION = {
    begin: /\(/,
    end: /\)/
    // the "contains" is added below when all necessary sub-modes are defined
  };

  const HASH = {
    // fka "attribute-assignment", parameters of the form 'key=value'
    className: 'attr',
    begin: HASH_PARAM_REGEX,
    relevance: 0,
    starts: {
      begin: /=/,
      end: /=/,
      starts: {
        contains: [
          hljs.NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HELPER_PARAMETER,
          SUB_EXPRESSION
        ]
      }
    }
  };

  const BLOCK_PARAMS = {
    // parameters of the form '{{#with x as | y |}}...{{/with}}'
    begin: /as\s+\|/,
    keywords: {
      keyword: 'as'
    },
    end: /\|/,
    contains: [
      {
        // define sub-mode in order to prevent highlighting of block-parameter named "as"
        begin: /\w+/
      }
    ]
  };

  const HELPER_PARAMETERS = {
    contains: [
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      BLOCK_PARAMS,
      HASH,
      HELPER_PARAMETER,
      SUB_EXPRESSION
    ],
    returnEnd: true
    // the property "end" is defined through inheritance when the mode is used. If depends
    // on the surrounding mode, but "endsWithParent" does not work here (i.e. it includes the
    // end-token of the surrounding mode)
  };

  const SUB_EXPRESSION_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: 'name',
    keywords: BUILT_INS,
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /\)/
    })
  });

  SUB_EXPRESSION.contains = [SUB_EXPRESSION_CONTENTS];

  const OPENING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS,
    className: 'name',
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /\}\}/
    })
  });

  const CLOSING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS,
    className: 'name'
  });

  const BASIC_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: 'name',
    keywords: BUILT_INS,
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /\}\}/
    })
  });

  const ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH = {
    begin: /\\\{\{/,
    skip: true
  };
  const PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH = {
    begin: /\\\\(?=\{\{)/,
    skip: true
  };

  return {
    name: 'Handlebars',
    aliases: [
      'hbs',
      'html.hbs',
      'html.handlebars',
      'htmlbars'
    ],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH,
      PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH,
      hljs.COMMENT(/\{\{!--/, /--\}\}/),
      hljs.COMMENT(/\{\{!/, /\}\}/),
      {
        // open raw block "{{{{raw}}}} content not evaluated {{{{/raw}}}}"
        className: 'template-tag',
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
        starts: {
          end: /\{\{\{\{\//,
          returnEnd: true,
          subLanguage: 'xml'
        }
      },
      {
        // close raw block
        className: 'template-tag',
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        // open block statement
        className: 'template-tag',
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        className: 'template-tag',
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: 'else'
      },
      {
        className: 'template-tag',
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: 'else if'
      },
      {
        // closing block statement
        className: 'template-tag',
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        // template variable or helper-call that is NOT html-escaped
        className: 'template-variable',
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      },
      {
        // template variable or helper-call that is html-escaped
        className: 'template-variable',
        begin: /\{\{/,
        end: /\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      }
    ]
  };
}

/*
 Language: HTMLBars (legacy)
 Requires: xml.js
 Description: Matcher for Handlebars as well as EmberJS additions.
 Website: https://github.com/tildeio/htmlbars
 Category: template
 */

function htmlbars(hljs) {
  const definition = handlebars(hljs);

  definition.name = "HTMLbars";

  // HACK: This lets handlebars do the auto-detection if it's been loaded (by
  // default the build script will load in alphabetical order) and if not (perhaps
  // an install is only using `htmlbars`, not `handlebars`) then this will still
  // allow HTMLBars to participate in the auto-detection

  // worse case someone will have HTMLbars and handlebars competing for the same
  // content and will need to change their setup to only require handlebars, but
  // I don't consider this a breaking change
  if (hljs.getLanguage("handlebars")) {
    definition.disableAutodetect = true;
  }

  return definition;
}

module.exports = htmlbars;


/***/ }),

/***/ 82026:
/***/ ((module) => {

/*
Language: JSON
Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: http://www.json.org
Category: common, protocols
*/

function json(hljs) {
  const LITERALS = {
    literal: 'true false null'
  };
  const ALLOWED_COMMENTS = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE
  ];
  const TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  const VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [
      {
        className: 'attr',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n'
      },
      hljs.inherit(VALUE_CONTAINER, {
        begin: /:/
      })
    ].concat(ALLOWED_COMMENTS),
    illegal: '\\S'
  };
  const ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.push(OBJECT, ARRAY);
  ALLOWED_COMMENTS.forEach(function(rule) {
    TYPES.push(rule);
  });
  return {
    name: 'JSON',
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
}

module.exports = json;


/***/ }),

/***/ 93839:
/***/ ((module) => {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: https://daringfireball.net/projects/markdown/
Category: common, markup
*/

function markdown(hljs) {
  const INLINE_HTML = {
    begin: /<\/?[A-Za-z_]/,
    end: '>',
    subLanguage: 'xml',
    relevance: 0
  };
  const HORIZONTAL_RULE = {
    begin: '^[-\\*]{3,}',
    end: '$'
  };
  const CODE = {
    className: 'code',
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      {
        begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*'
      },
      {
        begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*'
      },
      // needed to allow markdown as a sublanguage to work
      {
        begin: '```',
        end: '```+[ ]*$'
      },
      {
        begin: '~~~',
        end: '~~~+[ ]*$'
      },
      {
        begin: '`.+?`'
      },
      {
        begin: '(?=^( {4}|\\t))',
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: '^( {4}|\\t)',
            end: '(\\n)$'
          }
        ],
        relevance: 0
      }
    ]
  };
  const LIST = {
    className: 'bullet',
    begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
    end: '\\s+',
    excludeEnd: true
  };
  const LINK_REFERENCE = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: true,
    contains: [
      {
        className: 'symbol',
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: 'link',
        begin: /:\s*/,
        end: /$/,
        excludeBegin: true
      }
    ]
  };
  const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
  const LINK = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.+?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: true,
    contains: [
      {
        className: 'string',
        relevance: 0,
        begin: '\\[',
        end: '\\]',
        excludeBegin: true,
        returnEnd: true
      },
      {
        className: 'link',
        relevance: 0,
        begin: '\\]\\(',
        end: '\\)',
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: 'symbol',
        relevance: 0,
        begin: '\\]\\[',
        end: '\\]',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
  const BOLD = {
    className: 'strong',
    contains: [], // defined later
    variants: [
      {
        begin: /_{2}/,
        end: /_{2}/
      },
      {
        begin: /\*{2}/,
        end: /\*{2}/
      }
    ]
  };
  const ITALIC = {
    className: 'emphasis',
    contains: [], // defined later
    variants: [
      {
        begin: /\*(?!\*)/,
        end: /\*/
      },
      {
        begin: /_(?!_)/,
        end: /_/,
        relevance: 0
      }
    ]
  };
  BOLD.contains.push(ITALIC);
  ITALIC.contains.push(BOLD);

  let CONTAINABLE = [
    INLINE_HTML,
    LINK
  ];

  BOLD.contains = BOLD.contains.concat(CONTAINABLE);
  ITALIC.contains = ITALIC.contains.concat(CONTAINABLE);

  CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);

  const HEADER = {
    className: 'section',
    variants: [
      {
        begin: '^#{1,6}',
        end: '$',
        contains: CONTAINABLE
      },
      {
        begin: '(?=^.+?\\n[=-]{2,}$)',
        contains: [
          {
            begin: '^[=-]*$'
          },
          {
            begin: '^',
            end: "\\n",
            contains: CONTAINABLE
          }
        ]
      }
    ]
  };

  const BLOCKQUOTE = {
    className: 'quote',
    begin: '^>\\s+',
    contains: CONTAINABLE,
    end: '$'
  };

  return {
    name: 'Markdown',
    aliases: [
      'md',
      'mkdown',
      'mkd'
    ],
    contains: [
      HEADER,
      INLINE_HTML,
      LIST,
      BOLD,
      ITALIC,
      BLOCKQUOTE,
      CODE,
      HORIZONTAL_RULE,
      LINK,
      LINK_REFERENCE
    ]
  };
}

module.exports = markdown;


/***/ }),

/***/ 49889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _htmlbars = _interopRequireDefault(__webpack_require__(93202));

var _default = _htmlbars.default;
exports.Z = _default;

/***/ }),

/***/ 22489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _json = _interopRequireDefault(__webpack_require__(82026));

var _default = _json.default;
exports.Z = _default;

/***/ }),

/***/ 53459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _markdown = _interopRequireDefault(__webpack_require__(93839));

var _default = _markdown.default;
exports.Z = _default;

/***/ }),

/***/ 95413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ commonMenuData)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60650);
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

const commonMenuData = {
  name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Data'),
  tabs: [
  {
    name: 'Databases',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Databases'),
    url: '/databaseview/list/',
    usesRouter: true },

  {
    name: 'Datasets',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Datasets'),
    url: '/tablemodelview/list/',
    usesRouter: true },

  {
    name: 'Saved queries',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Saved queries'),
    url: '/savedqueryview/list/',
    usesRouter: true },

  {
    name: 'Query history',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Query history'),
    url: '/superset/sqllab/history/',
    usesRouter: true }] };

/***/ }),

/***/ 31673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SyntaxHighlighterCopy)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37840);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60650);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33743);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_htmlbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49889);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53459);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22489);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(120);
/* harmony import */ var react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42110);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var src_utils_copy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10222);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11965);
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










react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('sql', react_syntax_highlighter_dist_cjs_languages_hljs_sql__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('markdown', react_syntax_highlighter_dist_cjs_languages_hljs_markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('html', react_syntax_highlighter_dist_cjs_languages_hljs_htmlbars__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('json', react_syntax_highlighter_dist_cjs_languages_hljs_json__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
const SyntaxHighlighterWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.div */ .iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;
function SyntaxHighlighterCopy({ addDangerToast, addSuccessToast, children, ...syntaxHighlighterProps }) {
  function copyToClipboard(textToCopy) {
    (0,src_utils_copy__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(textToCopy).
    then(() => {
      if (addSuccessToast) {
        addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('SQL Copied!'));
      }
    }).
    catch(() => {
      if (addDangerToast) {
        addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Sorry, your browser does not support copying.'));
      }
    });
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(SyntaxHighlighterWrapper, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Copy */ .Z.Copy, { tabIndex: 0, role: "button", onClick: (e) => {
      e.preventDefault();
      e.currentTarget.blur();
      copyToClipboard(children);
    } }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z }, syntaxHighlighterProps),
  children));


}

/***/ }),

/***/ 14025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useQueryPreviewState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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

function useQueryPreviewState({ queries, fetchData, currentQueryId }) {
  const index = queries.findIndex((query) => query.id === currentQueryId);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(index);
  const [disablePrevious, setDisablePrevious] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [disableNext, setDisableNext] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function checkIndex() {
    setDisablePrevious(currentIndex === 0);
    setDisableNext(currentIndex === queries.length - 1);
  }
  function handleDataChange(previous) {
    const offset = previous ? -1 : 1;
    const index = currentIndex + offset;
    if (index >= 0 && index < queries.length) {
      fetchData(queries[index].id);
      setCurrentIndex(index);
      checkIndex();
    }
  }
  function handleKeyPress(ev) {
    if (currentIndex >= 0 && currentIndex < queries.length) {
      if (ev.key === 'ArrowDown' || ev.key === 'k') {
        ev.preventDefault();
        handleDataChange(false);
      } else
      if (ev.key === 'ArrowUp' || ev.key === 'j') {
        ev.preventDefault();
        handleDataChange(true);
      }
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkIndex();
  });
  return {
    handleKeyPress,
    handleDataChange,
    disablePrevious,
    disableNext };

}

/***/ })

}]);