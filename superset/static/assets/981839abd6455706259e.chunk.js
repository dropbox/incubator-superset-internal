(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{160:function(e,t,a){"use strict";var n=a(907);t.a=n.a},1836:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(2105)).default;t.default=s},1837:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(2106)).default;t.default=s},1838:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(2107)).default;t.default=s},2105:function(e,t){e.exports=function(e){const t={begin:"<",end:">",subLanguage:"xml",relevance:0},a={begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},n={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};n.contains.push(s),s.contains.push(n);var i=[t,a];return n.contains=n.contains.concat(i),s.contains=s.contains.concat(i),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:i=i.concat(n,s)},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:i}]}]},t,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},n,s,{className:"quote",begin:"^>\\s+",contains:i,end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}},2106:function(e,t){function a(...e){return e.map(e=>{return(t=e)?"string"==typeof t?t:t.source:null;var t}).join("")}e.exports=function(e){const t=function(e){const t={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"].join(" ")},n={literal:["true","false","undefined","null"].join(" ")},s=/\[.*?\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,r=a("(",/'.*?'/,"|",/".*?"/,"|",s,"|",i,"|",/\.|\//,")+"),o=a("(",s,"|",i,")(?==)"),l={begin:r,lexemes:/[\w.\/]+/},c=e.inherit(l,{keywords:n}),d={begin:/\(/,end:/\)/},u={className:"attr",begin:o,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,c,d]}}},b={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},u,c,d],returnEnd:!0},g=e.inherit(l,{className:"name",keywords:t,starts:e.inherit(b,{end:/\)/})});d.contains=[g];const p=e.inherit(l,{keywords:t,className:"name",starts:e.inherit(b,{end:/}}/})}),m=e.inherit(l,{keywords:t,className:"name"}),h=e.inherit(l,{className:"name",keywords:t,starts:e.inherit(b,{end:/}}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[p],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[m]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[p]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[m]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[h]}]}}(e);return t.name="HTMLbars",e.getLanguage("handlebars")&&(t.disableAutodetect=!0),t}},2107:function(e,t){e.exports=function(e){var t={literal:"true false null"},a=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],s={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},i={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(s,{begin:/:/})].concat(a),illegal:"\\S"},r={begin:"\\[",end:"\\]",contains:[e.inherit(s)],illegal:"\\S"};return n.push(i,r),a.forEach((function(e){n.push(e)})),{name:"JSON",contains:n,keywords:t,illegal:"\\S"}}},4506:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(12),s=a.n(n),i=(a(0),a(48)),r=a(49),o=a(950),l=a(1);const c=i.d.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,d=i.d.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function u({actions:e}){return Object(l.g)(c,{className:"actions"},s()(e).call(e,(e,t)=>{const a=o.a[e.icon];return e.tooltip?Object(l.g)(r.a,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},Object(l.g)(d,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},Object(l.g)(a,null))):Object(l.g)(d,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},Object(l.g)(a,null))}))}},4507:function(e,t,a){"use strict";a(41);var n=a(12),s=a.n(n),i=a(0),r=a.n(i),o=a(48),l=a(14),c=a(47),d=a(99),u=a(562),b=a(1);Object(o.d)(c.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const g=o.d.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,p=o.d.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,addDangerToast:o,addSuccessToast:c,onModelImport:m,show:h,onHide:O,passwordFields:j=[],setPasswordFields:y=(()=>{})})=>{const[v,f]=Object(i.useState)(!0),[w,x]=Object(i.useState)(null),[k,S]=Object(i.useState)({}),[N,_]=Object(i.useState)(!1),[E,C]=Object(i.useState)(!1),q=Object(i.useRef)(null),D=()=>{x(null),y([]),S({}),_(!1),C(!1),q&&q.current&&(q.current.value="")},{state:{alreadyExists:$,passwordsNeeded:T},importResource:M}=Object(u.e)(e,t,e=>{D(),o(e)});Object(i.useEffect)(()=>{y(T)},[T,y]),Object(i.useEffect)(()=>{_($.length>0)},[$,_]);const I=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";C(n.toUpperCase()===Object(l.e)("OVERWRITE"))};return v&&h&&f(!1),Object(b.g)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===w||N&&!E,onHandledPrimaryAction:()=>{null!==w&&M(w,k,E).then(e=>{e&&(c(Object(l.e)("The import was successful")),D(),m())})},onHide:()=>{f(!0),O(),D()},primaryButtonName:N?Object(l.e)("Overwrite"):Object(l.e)("Import"),primaryButtonType:N?"danger":"primary",width:"750px",show:h,title:Object(b.g)("h4",null,Object(l.e)("Import %s",t))},Object(b.g)(p,null,Object(b.g)("div",{className:"control-label"},Object(b.g)("label",{htmlFor:"modelFile"},Object(l.e)("File"),Object(b.g)("span",{className:"required"},"*"))),Object(b.g)("input",{ref:q,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;x(t&&t[0]||null)}})),0===j.length?null:Object(b.g)(r.a.Fragment,null,Object(b.g)("h5",null,"Database passwords"),Object(b.g)(g,null,a),s()(j).call(j,e=>Object(b.g)(p,{key:`password-for-${e}`},Object(b.g)("div",{className:"control-label"},e,Object(b.g)("span",{className:"required"},"*")),Object(b.g)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:k[e],onChange:t=>S({...k,[e]:t.target.value})})))),N?Object(b.g)(r.a.Fragment,null,Object(b.g)(p,null,Object(b.g)("div",{className:"confirm-overwrite"},n),Object(b.g)("div",{className:"control-label"},Object(l.e)('Type "%s" to confirm',Object(l.e)("OVERWRITE"))),Object(b.g)("input",{id:"overwrite",type:"text",onChange:I}))):null)}},4516:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(14);const s={name:Object(n.e)("Data"),tabs:[{name:"Databases",label:Object(n.e)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:Object(n.e)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:Object(n.e)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:Object(n.e)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},4599:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(29),s=a.n(n),i=(a(0),a(48)),r=a(14),o=a(933),l=a.n(o),c=a(1837),d=a.n(c),u=a(1836),b=a.n(u),g=a(1838),p=a.n(g),m=a(839),h=a.n(m),O=a(527),j=a.n(O),y=a(47),v=a(269),f=a(1);j.a.registerLanguage("sql",l.a),j.a.registerLanguage("markdown",b.a),j.a.registerLanguage("html",d.a),j.a.registerLanguage("json",p.a);const w=i.d.div`
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
  }
`;function x({addDangerToast:e,addSuccessToast:t,children:a,...n}){return Object(f.g)(w,null,Object(f.g)(y.a,{tabIndex:0,name:"copy",role:"button",onClick:n=>{var s;n.preventDefault(),n.currentTarget.blur(),s=a,Object(v.a)(s).then(()=>{e&&e(Object(r.e)("Sorry, your browser does not support copying."))}).catch(()=>{t&&t(Object(r.e)("SQL Copied!"))})}}),Object(f.g)(j.a,s()({style:h.a},n),a))}},4600:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(41);var n=a(549),s=a.n(n),i=a(0);function r({queries:e,fetchData:t,currentQueryId:a}){const n=s()(e).call(e,e=>e.id===a),[r,o]=Object(i.useState)(n),[l,c]=Object(i.useState)(!1),[d,u]=Object(i.useState)(!1);function b(){c(0===r),u(r===e.length-1)}function g(a){const n=r+(a?-1:1);n>=0&&n<e.length&&(t(e[n].id),o(n),b())}return Object(i.useEffect)(()=>{b()}),{handleKeyPress:function(t){r>=0&&r<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),g(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),g(!0)))},handleDataChange:g,disablePrevious:l,disableNext:d}}},4907:function(e,t,a){"use strict";a.r(t);a(41);var n=a(33),s=a.n(n),i=a(12),r=a.n(i),o=a(14),l=a(48),c=a(72),d=a(0),u=a.n(d),b=a(96),g=a.n(b),p=a(38),m=a.n(p),h=a(122),O=a(160),j=a(128),y=a(562),v=a(1473),f=a(1112),w=a(4501),x=a(1474),k=a(4506),S=a(49),N=a(4516),_=a(269),E=a(42),C=a(4507),q=a(950),D=a(99),$=a(43),T=a(4599),M=a(4600),I=a(1);const R=l.d.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,L=l.d.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m-1}px;
  padding: 4px 0 16px 0;
`,B=Object(l.d)(D.b)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`;var H=Object(j.a)(({fetchData:e,onHide:t,openInSqlLab:a,queries:n,savedQuery:s,show:i,addDangerToast:r,addSuccessToast:l})=>{const{handleKeyPress:c,handleDataChange:d,disablePrevious:u,disableNext:b}=Object(M.a)({queries:n,currentQueryId:s.id,fetchData:e});return Object(I.g)("div",{role:"none",onKeyUp:c},Object(I.g)(B,{onHide:t,show:i,title:Object(o.e)("Query preview"),footer:[Object(I.g)($.a,{key:"previous-saved-query",disabled:u,onClick:()=>d(!0)},Object(o.e)("Previous")),Object(I.g)($.a,{key:"next-saved-query",disabled:b,onClick:()=>d(!1)},Object(o.e)("Next")),Object(I.g)($.a,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>a(s.id)},Object(o.e)("Open in SQL Lab"))]},Object(I.g)(R,null,Object(o.e)("Query name")),Object(I.g)(L,null,s.label),Object(I.g)(T.a,{language:"sql",addDangerToast:r,addSuccessToast:l},s.sql||"")))});const U=Object(o.e)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),P=Object(o.e)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),z=l.d.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,A=l.d.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`;t.default=Object(j.a)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:n,resourceCount:i,resourceCollection:l,bulkSelectEnabled:b},hasPerm:p,fetchData:j,toggleBulkSelect:D,refreshData:$}=Object(y.f)("saved_query",Object(o.e)("Saved queries"),e),[T,M]=Object(d.useState)(null),[R,L]=Object(d.useState)(null),[B,Q]=Object(d.useState)(!1),[F,G]=Object(d.useState)([]),K=()=>{Q(!0)},V=p("can_write"),J=p("can_write"),W=p("can_read")&&Object(E.c)(E.a.VERSIONED_EXPORT),X=Object(d.useCallback)(t=>{c.a.get({endpoint:`/api/v1/saved_query/${t}`}).then(({json:e={}})=>{L({...e.result})},Object(h.c)(t=>e(Object(o.e)("There was an issue previewing the selected query %s",t))))},[e]),Y={activeChild:"Saved queries",...N.a},Z=[];J&&Z.push({name:Object(o.e)("Bulk select"),onClick:D,buttonStyle:"secondary"}),Z.push({name:Object(I.g)(u.a.Fragment,null,Object(I.g)("i",{className:"fa fa-plus"})," ",Object(o.e)("Query")),onClick:()=>{window.open(`${window.location.origin}/superset/sqllab?new=true`)},buttonStyle:"primary"}),Object(E.c)(E.a.VERSIONED_EXPORT)&&Z.push({name:Object(I.g)(S.a,{id:"import-tooltip",title:Object(o.e)("Import queries"),placement:"bottomRight"},Object(I.g)(q.a.Import,null)),buttonStyle:"link",onClick:K,"data-test":"import-button"}),Y.buttons=Z;const ee=e=>{window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`)},te=Object(d.useCallback)(a=>{Object(_.a)(`${window.location.origin}/superset/sqllab?savedQueryId=${a}`).then(()=>{t(Object(o.e)("Link Copied!"))}).catch(()=>{e(Object(o.e)("Sorry, your browser does not support copying."))})},[e,t]),ae=[{id:"changed_on_delta_humanized",desc:!0}],ne=Object(d.useMemo)(()=>[{accessor:"label",Header:Object(o.e)("Name")},{accessor:"database.database_name",Header:Object(o.e)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:Object(o.e)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=r()(e).call(e,e=>e.table),a=(null==t?void 0:t.shift())||"";return t.length?Object(I.g)(z,null,Object(I.g)("span",null,a),Object(I.g)(O.a,{placement:"right",title:Object(o.e)("TABLES"),trigger:"click",content:Object(I.g)(u.a.Fragment,null,r()(t).call(t,e=>Object(I.g)(A,{key:e},e)))},Object(I.g)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:Object(o.e)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return m()(a).fromNow()},Header:Object(o.e)("Created on"),accessor:"created_on",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:Object(o.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{var t;const a=s()(t=[{label:"preview-action",tooltip:Object(o.e)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{X(e.id)}},V&&{label:"edit-action",tooltip:Object(o.e)("Edit query"),placement:"bottom",icon:"Edit",onClick:()=>ee(e.id)},{label:"copy-action",tooltip:Object(o.e)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>te(e.id)},W&&{label:"export-action",tooltip:Object(o.e)("Export query"),placement:"bottom",icon:"Share",onClick:()=>Object(h.k)([e])},J&&{label:"delete-action",tooltip:Object(o.e)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>M(e)}]).call(t,e=>!!e);return Object(I.g)(k.a,{actions:a})},Header:Object(o.e)("Actions"),id:"actions",disableSortBy:!0}],[J,V,W,te,X]),se=Object(d.useMemo)(()=>[{Header:Object(o.e)("Database"),id:"database",input:"select",operator:w.a.relationOneMany,unfilteredLabel:"All",fetchSelects:Object(h.e)("saved_query","database",Object(h.c)(t=>e(Object(o.e)("An error occurred while fetching dataset datasource values: %s",t)))),paginate:!0},{Header:Object(o.e)("Schema"),id:"schema",input:"select",operator:w.a.equals,unfilteredLabel:"All",fetchSelects:Object(h.d)("saved_query","schema",Object(h.c)(t=>e(Object(o.e)("An error occurred while fetching schema values: %s",t)))),paginate:!0},{Header:Object(o.e)("Search"),id:"label",input:"search",operator:w.a.allText}],[e]);return Object(I.g)(u.a.Fragment,null,Object(I.g)(f.a,Y),T&&Object(I.g)(x.a,{description:Object(o.e)("This action will permanently delete the saved query."),onConfirm:()=>{T&&(({id:a,label:n})=>{c.a.delete({endpoint:`/api/v1/saved_query/${a}`}).then(()=>{$(),M(null),t(Object(o.e)("Deleted: %s",n))},Object(h.c)(t=>e(Object(o.e)("There was an issue deleting %s: %s",n,t))))})(T)},onHide:()=>M(null),open:!0,title:Object(o.e)("Delete Query?")}),R&&Object(I.g)(H,{fetchData:X,onHide:()=>L(null),savedQuery:R,queries:l,openInSqlLab:ee,show:!0}),Object(I.g)(v.a,{title:Object(o.e)("Please confirm"),description:Object(o.e)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{c.a.delete({endpoint:`/api/v1/saved_query/?q=${g.a.encode(r()(a).call(a,({id:e})=>e))}`}).then(({json:e={}})=>{$(),t(e.message)},Object(h.c)(t=>e(Object(o.e)("There was an issue deleting the selected queries: %s",t))))}},e=>{const t=[];return J&&t.push({key:"delete",name:Object(o.e)("Delete"),onSelect:e,type:"danger"}),W&&t.push({key:"export",name:Object(o.e)("Export"),type:"primary",onSelect:h.k}),Object(I.g)(w.b,{className:"saved_query-list-view",columns:ne,count:i,data:l,fetchData:j,filters:se,initialSort:ae,loading:n,pageSize:25,bulkActions:t,bulkSelectEnabled:b,disableBulkSelect:D,highlightRowId:null==R?void 0:R.id})}),Object(I.g)(C.a,{resourceName:"saved_query",resourceLabel:Object(o.e)("queries"),passwordsNeededMessage:U,confirmOverwriteMessage:P,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{Q(!1),$()},show:B,onHide:()=>{Q(!1)},passwordFields:F,setPasswordFields:G}))}))}}]);