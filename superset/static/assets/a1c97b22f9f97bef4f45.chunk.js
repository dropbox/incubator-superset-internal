"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8438],{27678:(t,e,n)=>{function a(t){var e=t.getBoundingClientRect(),n=document.documentElement;return{left:e.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}n.d(e,{os:()=>a})},45598:(t,e,n)=>{var a=n(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[];return l.default.Children.forEach(e,(function(e){(null!=e||n.keepEmpty)&&(Array.isArray(e)?a=a.concat(t(e)):(0,i.isFragment)(e)&&e.props?a=a.concat(t(e.props.children,n)):a.push(e))})),a};var l=a(n(67294)),i=n(59864)},97596:(t,e,n)=>{var a=n(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,a){var i=l.default.unstable_batchedUpdates?function(t){l.default.unstable_batchedUpdates(n,t)}:n;return t.addEventListener&&t.addEventListener(e,i,a),{remove:function(){t.removeEventListener&&t.removeEventListener(e,i,a)}}};var l=a(n(90731))},54887:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.get=function(t,e){var r=arguments.length,o=i(t);return e=l[e]?"cssFloat"in t.style?"cssFloat":"styleFloat":e,1===r?o:function(t,e,l){if(e=e.toLowerCase(),"auto"===l){if("height"===e)return t.offsetHeight;if("width"===e)return t.offsetWidth}return e in a||(a[e]=n.test(e)),a[e]?parseFloat(l)||0:l}(t,e,o[e]||t.style[e])},e.getClientSize=function(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}},e.getDocSize=function(){return{width:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),height:Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)}},e.getOffset=function(t){var e=t.getBoundingClientRect(),n=document.documentElement;return{left:e.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}},e.getOuterHeight=function(t){return t===document.body?window.innerHeight||document.documentElement.clientHeight:t.offsetHeight},e.getOuterWidth=function(t){return t===document.body?document.documentElement.clientWidth:t.offsetWidth},e.getScroll=function(){return{scrollLeft:Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}},e.set=function t(e,a,r){var o=arguments.length;if(a=l[a]?"cssFloat"in e.style?"cssFloat":"styleFloat":a,3===o)return"number"==typeof r&&n.test(a)&&(r="".concat(r,"px")),e.style[a]=r,r;for(var s in a)a.hasOwnProperty(s)&&t(e,s,a[s]);return i(e)};var n=/margin|padding|width|height|max|min|offset/,a={left:!0,top:!0},l={cssFloat:1,styleFloat:1,float:1};function i(t){return 1===t.nodeType?t.ownerDocument.defaultView.getComputedStyle(t,null):{}}},55331:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(t){if(!t)return!1;if(t instanceof HTMLElement&&t.offsetParent)return!0;if(t instanceof SVGGraphicsElement&&t.getBBox){var e=t.getBBox(),n=e.width,a=e.height;if(n||a)return!0}if(t instanceof HTMLElement&&t.getBoundingClientRect){var l=t.getBoundingClientRect(),i=l.width,r=l.height;if(i||r)return!0}return!1}},8259:(t,e)=>{var n;function a(t){if("undefined"==typeof document)return 0;if(t||void 0===n){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var a=document.createElement("div"),l=a.style;l.position="absolute",l.top="0",l.left="0",l.pointerEvents="none",l.visibility="hidden",l.width="200px",l.height="150px",l.overflow="hidden",a.appendChild(e),document.body.appendChild(a);var i=e.offsetWidth;a.style.overflow="scroll";var r=e.offsetWidth;i===r&&(r=a.clientWidth),document.body.removeChild(a),n=i-r}return n}function l(t){var e=t.match(/^(.*)px$/),n=Number(null==e?void 0:e[1]);return Number.isNaN(n)?a():n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,e.getTargetScrollBarSize=function(t){if(!("undefined"!=typeof document&&t&&t instanceof Element))return{width:0,height:0};var e=getComputedStyle(t,"::-webkit-scrollbar"),n=e.width,a=e.height;return{width:l(n),height:l(a)}}},18545:(t,e,n)=>{var a=n(75263).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=l.useRef();return e.current=t,l.useCallback((function(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return null===(t=e.current)||void 0===t?void 0:t.call.apply(t,[e].concat(a))}),[])};var l=a(n(67294))},82546:(t,e,n)=>{var a=n(64836).default,l=n(75263).default;Object.defineProperty(e,"__esModule",{value:!0}),e.useLayoutUpdateEffect=e.default=void 0;var i=l(n(67294)),r=(0,a(n(19158)).default)()?i.useLayoutEffect:i.useEffect,o=r;e.default=o,e.useLayoutUpdateEffect=function(t,e){var n=i.useRef(!0);r((function(){if(!n.current)return t()}),e),r((function(){return n.current=!1,function(){n.current=!0}}),[])}},60869:(t,e,n)=>{var a=n(75263).default,l=n(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=e||{},a=n.defaultValue,l=n.value,h=n.onChange,p=n.postState,g=(0,u.default)((function(){var e,n=void 0;return c(l)?(n=l,e=i.PROP):c(a)?(n="function"==typeof a?a():a,e=i.PROP):(n="function"==typeof t?t():t,e=i.INNER),[n,e,n]})),m=(0,r.default)(g,2),f=m[0],v=m[1],b=c(l)?l:f[0],y=p?p(b):b;(0,d.useLayoutUpdateEffect)((function(){v((function(t){var e=(0,r.default)(t,1)[0];return[l,i.PROP,e]}))}),[l]);var x=o.useRef(),Z=(0,s.default)((function(t,e){v((function(e){var n=(0,r.default)(e,3),a=n[0],l=n[1],o=n[2],s="function"==typeof t?t(a):t;if(s===a)return e;var d=l===i.INNER&&x.current!==o?o:a;return[s,i.INNER,d]}),e)})),w=(0,s.default)(h);return(0,d.default)((function(){var t=(0,r.default)(f,3),e=t[0],n=t[1],a=t[2];e!==a&&n===i.INNER&&(w(e,a),x.current=a)}),[f]),[y,Z]};var i,r=l(n(27424)),o=a(n(67294)),s=l(n(18545)),d=a(n(82546)),u=l(n(88558));function c(t){return void 0!==t}!function(t){t[t.INNER=0]="INNER",t[t.PROP=1]="PROP"}(i||(i={}))},88558:(t,e,n)=>{var a=n(75263).default,l=n(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=r.useRef(!1),n=r.useState(t),a=(0,i.default)(n,2),l=a[0],o=a[1];return r.useEffect((function(){return e.current=!1,function(){e.current=!0}}),[]),[l,function(t,n){n&&e.current||o(t)}]};var i=l(n(27424)),r=a(n(67294))},51794:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294);const l=(t,e)=>{var n,l;const[i,r]=(0,a.useState)(0),[o,s]=(0,a.useState)(!1),d=(0,a.useRef)({scrollWidth:0,parentElementWidth:0,plusRefWidth:0});return(0,a.useLayoutEffect)((()=>{var n;const a=t.current,l=null==e?void 0:e.current;if(!a)return;const{scrollWidth:i,clientWidth:o,childNodes:u}=a,c=d.current,h=(null==(n=a.parentElement)?void 0:n.clientWidth)||0,p=(null==l?void 0:l.offsetWidth)||0;if(d.current={scrollWidth:i,parentElementWidth:h,plusRefWidth:p},c.parentElementWidth!==h||c.scrollWidth!==i||c.plusRefWidth!==p)if(i>o){const t=6,e=(null==l?void 0:l.offsetWidth)||0,n=o-t,a=u.length;let i=0,d=0;for(let l=0;l<a;l+=1)n-t-i-e<=0&&(d+=1),i+=u[l].offsetWidth;a>1&&d?(s(!0),r(d)):(s(!1),r(1))}else s(!1),r(0)}),[null==(n=t.current)?void 0:n.offsetWidth,null==(l=t.current)?void 0:l.clientWidth,t]),[i,o]}},52564:(t,e,n)=>{n.d(e,{u:()=>Z});var a=n(73126),l=n(67294),i=n(11965),r=n(51995),o=n(61988),s=n(4715),d=n(58593),u=n(99612);const c=t=>i.iv`
  display: flex;
  font-size: ${t.typography.sizes.xl}px;
  font-weight: ${t.typography.weights.bold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title,
  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .dynamic-title {
    cursor: default;
  }
  & .dynamic-title-input {
    border: none;
    padding: 0;
    outline: none;

    &::placeholder {
      color: ${t.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
  }
`,h=t=>{let{title:e,placeholder:n,onSave:a,canEdit:r,label:s}=t;const[h,p]=(0,l.useState)(!1),[g,m]=(0,l.useState)(e||""),f=(0,l.useRef)(null),[v,b]=(0,l.useState)(!1),{width:y,ref:x}=(0,u.NB)(),{width:Z,ref:w}=(0,u.NB)({refreshMode:"debounce"});(0,l.useEffect)((()=>{m(e)}),[e]),(0,l.useEffect)((()=>{if(h&&null!=f&&f.current&&(f.current.focus(),f.current.setSelectionRange)){const{length:t}=f.current.value;f.current.setSelectionRange(t,t),f.current.scrollLeft=f.current.scrollWidth}}),[h]),(0,l.useLayoutEffect)((()=>{null!=x&&x.current&&(x.current.textContent=g||n)}),[g,n,x]),(0,l.useEffect)((()=>{f.current&&f.current.scrollWidth>f.current.clientWidth?b(!0):b(!1)}),[y,Z]);const $=(0,l.useCallback)((()=>{r&&!h&&p(!0)}),[r,h]),U=(0,l.useCallback)((()=>{if(!r)return;const t=g.trim();m(t),e!==t&&a(t),p(!1)}),[r,g,a,e]),_=(0,l.useCallback)((t=>{r&&h&&m(t.target.value)}),[r,h]),E=(0,l.useCallback)((t=>{var e;r&&"Enter"===t.key&&(t.preventDefault(),null==(e=f.current)||e.blur())}),[r]);return(0,i.tZ)("div",{css:c,ref:w},(0,i.tZ)(d.u,{id:"title-tooltip",title:v&&g&&!h?g:null},r?(0,i.tZ)("input",{className:"dynamic-title-input","aria-label":null!=s?s:(0,o.t)("Title"),ref:f,onChange:_,onBlur:U,onClick:$,onKeyPress:E,placeholder:n,value:g,css:i.iv`
              cursor: ${h?"text":"pointer"};

              ${y&&y>0&&i.iv`
                width: ${y+1}px;
              `}
            `}):(0,i.tZ)("span",{className:"dynamic-title","aria-label":null!=s?s:(0,o.t)("Title"),ref:f},g)),(0,i.tZ)("span",{ref:x,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var p=n(79789),g=n(36674),m=n(70707),f=n(35932);const v=t=>i.iv`
  width: ${8*t.gridUnit}px;
  height: ${8*t.gridUnit}px;
  padding: 0;
  border: 1px solid ${t.colors.primary.dark2};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }

  &:hover:not(:focus) > span.anticon {
    color: ${t.colors.primary.light1};
  }
`,b=t=>i.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${t.colors.grayscale.light5};
  height: ${16*t.gridUnit}px;
  padding: 0 ${4*t.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*t.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,y=t=>i.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*t.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${t.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,x=t=>i.iv`
  margin-left: ${2*t.gridUnit}px;
`,Z=t=>{let{editableTitleProps:e,showTitlePanelItems:n,certificatiedBadgeProps:l,showFaveStar:d,faveStarProps:u,titlePanelAdditionalItems:c,rightPanelAdditionalItems:Z,additionalActionsMenu:w,menuDropdownProps:$,showMenuDropdown:U=!0,tooltipProps:_}=t;const E=(0,r.Fg)();return(0,i.tZ)("div",{css:b,className:"header-with-actions"},(0,i.tZ)("div",{className:"title-panel"},(0,i.tZ)(h,e),n&&(0,i.tZ)("div",{css:y},(null==l?void 0:l.certifiedBy)&&(0,i.tZ)(p.Z,l),d&&(0,i.tZ)(g.Z,u),c)),(0,i.tZ)("div",{className:"right-button-panel"},Z,(0,i.tZ)("div",{css:x},U&&(0,i.tZ)(s.Gj,(0,a.Z)({trigger:["click"],overlay:w},$),(0,i.tZ)(f.Z,{css:v,buttonStyle:"tertiary","aria-label":(0,o.t)("Menu actions trigger"),tooltip:null==_?void 0:_.text,placement:null==_?void 0:_.placement},(0,i.tZ)(m.Z.MoreHoriz,{iconColor:E.colors.primary.dark2,iconSize:"l"}))))))}},80663:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(67294),l=n(29119),i=n(51995),r=n(61337),o=n(11965);const s=i.iK.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${t=>{let{theme:e}=t;return e.colors.primary.base}};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=t=>{let{id:e,initialWidth:n,minWidth:i,maxWidth:d,enable:u,children:c}=t;const[h,p]=function(t,e){const n=(0,a.useRef)(),[l,i]=(0,a.useState)(e);return(0,a.useEffect)((()=>{var e;n.current=null!=(e=n.current)?e:(0,r.rV)(r.dR.common__resizable_sidebar_widths,{}),n.current[t]&&i(n.current[t])}),[t]),[l,function(e){i(e),(0,r.LS)(r.dR.common__resizable_sidebar_widths,{...n.current,[t]:e})}]}(e,n);return(0,o.tZ)(a.Fragment,null,(0,o.tZ)(s,null,(0,o.tZ)(l.e,{enable:{right:u},handleClasses:{right:"sidebar-resizer"},size:{width:h,height:"100%"},minWidth:i,maxWidth:d,onResizeStop:(t,e,n,a)=>p(h+a.width)})),c(h))}},12685:(t,e,n)=>{n.r(e),n.d(e,{datasetReducer:()=>ue,default:()=>he});var a=n(67294),l=n(16550),i=n(31069),r=n(61988),o=n(68492),s=n(15926),d=n.n(s),u=n(72570);const c=(t,e)=>{const[n,l]=(0,a.useState)([]),s=e?encodeURIComponent(e):void 0,c=(0,a.useCallback)((async t=>{let e,n=[],a=0;for(;void 0===e||n.length<e;){const l=d().encode_uri({filters:t,page:a});try{const t=await i.Z.get({endpoint:`/api/v1/dataset/?q=${l}`});({count:e}=t.json);const{json:{result:r}}=t;n=[...n,...r],a+=1}catch(t){(0,u.Gb)((0,r.t)("There was an error fetching dataset")),o.Z.error((0,r.t)("There was an error fetching dataset"),t)}}l(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==t?void 0:t.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];e&&c(n)}),[null==t?void 0:t.id,e,s,c]);const h=(0,a.useMemo)((()=>null==n?void 0:n.map((t=>t.table_name))),[n]);return{datasets:n,datasetNames:h}};var h,p=n(52564),g=n(35932),m=n(70707),f=n(83862);!function(t){t[t.selectDatabase=0]="selectDatabase",t[t.selectSchema=1]="selectSchema",t[t.selectTable=2]="selectTable",t[t.changeDataset=3]="changeDataset"}(h||(h={}));var v=n(51995),b=n(11965);const y=v.iK.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${t=>{let{theme:e}=t;return e.colors.grayscale.light5}};
`,x=v.iK.div`
  width: ${t=>{let{theme:e,width:n}=t;return null!=n?n:80*e.gridUnit}}px;
  max-width: ${t=>{let{theme:e,width:n}=t;return null!=n?n:80*e.gridUnit}}px;
  flex-direction: column;
  flex: 1 0 auto;
`,Z=v.iK.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,w=v.iK.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,$=(0,v.iK)(w)`
  flex: 1 0 auto;
  position: relative;
`,U=(0,v.iK)(w)`
  flex: 1 0 auto;
  height: auto;
`,_=(0,v.iK)(w)`
  flex: 0 0 auto;
  height: ${t=>{let{theme:e}=t;return 16*e.gridUnit}}px;
  z-index: 0;
`,E=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  flex: 0 0 auto;\n  height: ${16*e.gridUnit}px;\n  border-bottom: 2px solid ${e.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*e.gridUnit}px;\n  }\n  `}}
`,S=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  margin: ${4*e.gridUnit}px;\n  font-size: ${e.typography.sizes.xl}px;\n  font-weight: ${e.typography.weights.bold};\n  `}}
`,T=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  height: 100%;\n  border-right: 1px solid ${e.colors.grayscale.light2};\n  `}}
`,C=v.iK.div`
  width: 100%;
  position: relative;
`,P=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  border-left: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.success.base};\n  `}}
`,k=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  height: ${16*e.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${e.colors.grayscale.light2};\n  border-bottom: 1px solid ${e.colors.grayscale.light2};\n  color: ${e.colors.info.base};\n  border-top: ${e.gridUnit/4}px solid\n    ${e.colors.grayscale.light2};\n  padding: ${4*e.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${e.colors.grayscale.light5};\n  z-index: ${e.zIndex.max}\n  `}}
`,I=v.iK.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${t=>{let{theme:e}=t;return e.colors.grayscale.light1}};
      }
    }
  }
`,R=t=>b.iv`
  width: ${21.5*t.gridUnit}px;

  &:disabled {
    background-color: ${t.colors.grayscale.light3};
    color: ${t.colors.grayscale.light1};
  }
`,M=(0,r.t)("New dataset"),N={text:(0,r.t)("Select a database table and create dataset"),placement:"bottomRight"},L=()=>(0,b.tZ)(g.Z,{buttonStyle:"primary",tooltip:null==N?void 0:N.text,placement:null==N?void 0:N.placement,disabled:!0,css:R},(0,b.tZ)(m.Z.Save,{iconSize:"m"}),(0,r.t)("Save")),z=()=>(0,b.tZ)(f.Menu,null,(0,b.tZ)(f.Menu.Item,null,(0,r.t)("Settings")),(0,b.tZ)(f.Menu.Item,null,(0,r.t)("Delete")));function O(t){let{setDataset:e,title:n=M,editing:l=!1}=t;const i={title:null!=n?n:M,placeholder:M,onSave:t=>{e({type:h.changeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,r.t)("dataset name")};return(0,b.tZ)(I,null,l?(0,b.tZ)(p.u,{editableTitleProps:i,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,b.tZ)(a.Fragment,null),rightPanelAdditionalItems:L(),additionalActionsMenu:z(),menuDropdownProps:{disabled:!0},tooltipProps:N}):(0,b.tZ)(S,null,n||M))}var K,W,D=n(82607),V=n(71262),F=n(73126),j=n(73727),A=n(55786),H=n(93197),B=n(94301);function q(){return q=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},q.apply(this,arguments)}const X=(t,e)=>{let{title:n,titleId:l,...i}=t;return a.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:160,height:166,fill:"none",ref:e,"aria-labelledby":l},i),n?a.createElement("title",{id:l},n):null,K||(K=a.createElement("path",{fill:"#FAFAFA",fillRule:"evenodd",d:"M123.638 8a.5.5 0 0 0-.5.5V158h28.758V8.5a.5.5 0 0 0-.5-.5h-27.758ZM84.793 40.643a.5.5 0 0 1 .5-.5h27.759a.5.5 0 0 1 .5.5V158H84.793V40.643ZM46.95 72.285a.5.5 0 0 0-.5.5V158h28.758V72.785a.5.5 0 0 0-.5-.5H46.95ZM8.604 93.715a.5.5 0 0 0-.5.5V158h28.758V94.215a.5.5 0 0 0-.5-.5H8.604Z",clipRule:"evenodd"})),W||(W=a.createElement("path",{fill:"#D9D9D9",d:"M123.138 158h-.5v.5h.5v-.5Zm28.758 0v.5h.5v-.5h-.5Zm-38.344 0v.5h.5v-.5h-.5Zm-28.759 0h-.5v.5h.5v-.5Zm-38.344-.001h-.5v.5h.5v-.5Zm28.758 0v.5h.5v-.5h-.5ZM8.104 158h-.5v.5h.5v-.5Zm28.758 0v.5h.5v-.5h-.5ZM123.638 8.5v-1a1 1 0 0 0-1 1h1Zm0 149.5V8.5h-1V158h1Zm28.258-.5h-28.758v1h28.758v-1Zm-.5-149V158h1V8.5h-1Zm0 0h1a1 1 0 0 0-1-1v1Zm-27.758 0h27.758v-1h-27.758v1ZM85.293 39.643a1 1 0 0 0-1 1h1v-1Zm27.759 0H85.293v1h27.759v-1Zm1 1a1 1 0 0 0-1-1v1h1Zm0 117.357V40.643h-1V158h1Zm-29.259.5h28.759v-1H84.793v1Zm-.5-117.857V158h1V40.643h-1ZM46.95 72.785v-1a1 1 0 0 0-1 1h1Zm0 85.214V72.785h-1V158h1Zm28.258-.5H46.45v1h28.758v-1Zm-.5-84.714V158h1V72.785h-1Zm0 0h1a1 1 0 0 0-1-1v1Zm-27.758 0h27.758v-1H46.95v1ZM8.604 94.215v-1a1 1 0 0 0-1 1h1Zm0 63.785V94.215h-1V158h1Zm28.258-.5H8.104v1h28.758v-1Zm-.5-63.285V158h1V94.215h-1Zm0 0h1a1 1 0 0 0-1-1v1Zm-27.758 0h27.758v-1H8.604v1Z"})))},G=(0,a.forwardRef)(X);var Y=n(14114),Q=n(34858),J=n(93139),tt=n(30381),et=n.n(tt),nt=n(51794),at=n(58593);const lt=v.iK.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,it=v.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,rt=v.iK.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,ot=v.iK.div`
  .link {
    color: ${t=>{let{theme:e}=t;return e.colors.grayscale.light5}};
    display: block;
    text-decoration: underline;
  }
`,st=v.iK.span`
  ${t=>{let{theme:e}=t;return`\n  cursor: pointer;\n  color: ${e.colors.primary.dark1};\n  font-weight: ${e.typography.weights.normal};\n  `}}
`;function dt(t){let{items:e,renderVisibleItem:n=(t=>t),renderTooltipItem:l=(t=>t),getKey:i=(t=>t),maxLinks:o=20}=t;const s=(0,a.useRef)(null),d=(0,a.useRef)(null),[u,c]=(0,nt.Z)(s,d),h=(0,a.useMemo)((()=>e.length>o?e.length-o:void 0),[e,o]),p=(0,a.useMemo)((()=>(0,b.tZ)(it,{ref:s},e.map((t=>(0,b.tZ)(rt,{key:i(t)},n(t)))))),[i,e,n]),g=(0,a.useMemo)((()=>e.slice(0,o).map((t=>(0,b.tZ)(ot,{key:i(t)},l(t))))),[i,e,o,l]);return(0,b.tZ)(lt,null,(0,b.tZ)(at.u,{placement:"top",title:u?(0,b.tZ)(a.Fragment,null,g,h&&(0,b.tZ)("span",null,(0,r.t)("+ %s more",h))):null},p,c&&(0,b.tZ)(st,{ref:d},"+",u)))}const ut=t=>({key:t.id,to:`/superset/dashboard/${t.id}`,target:"_blank",rel:"noreferer noopener",children:t.dashboard_title}),ct=t=>b.iv`
  color: ${t.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,ht=[{key:"slice_name",title:(0,r.t)("Chart"),width:"320px",sorter:!0,render:(t,e)=>(0,b.tZ)(j.rU,{to:e.url},e.slice_name)},{key:"owners",title:(0,r.t)("Chart owners"),width:"242px",render:(t,e)=>{var n,a;return(0,b.tZ)(dt,{items:null!=(n=null==(a=e.owners)?void 0:a.map((t=>`${t.first_name} ${t.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,r.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(t,e)=>e.last_saved_at?et().utc(e.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,r.t)("Chart last modified by"),width:"216px",sorter:!0,render:(t,e)=>e.last_saved_by?`${e.last_saved_by.first_name} ${e.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,r.t)("Dashboard usage"),width:"420px",render:(t,e)=>(0,b.tZ)(dt,{items:e.dashboards,renderVisibleItem:t=>(0,b.tZ)(j.rU,ut(t)),renderTooltipItem:t=>(0,b.tZ)(j.rU,(0,F.Z)({},ut(t),{css:ct})),getKey:t=>t.id})}],pt=t=>b.iv`
  && th.ant-table-cell {
    color: ${t.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,gt=(0,b.tZ)(a.Fragment,null,(0,b.tZ)(m.Z.PlusOutlined,{iconSize:"m",css:b.iv`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,r.t)("Create chart with dataset")),mt=(0,v.iK)(B.XJ)`
  margin: ${t=>{let{theme:e}=t;return 13*e.gridUnit}}px 0;
`,ft=t=>{let{datasetId:e}=t;const{loading:n,recordCount:l,data:i,onChange:o}=(t=>{const{addDangerToast:e}=(0,Y.e1)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:J.p.equals,value:t}]),[t]),{state:{loading:l,resourceCount:i,resourceCollection:o},fetchData:s}=(0,Q.Yi)("chart",(0,r.t)("chart"),e,!0,[],n),d=(0,a.useMemo)((()=>o.map((t=>({...t,key:t.id})))),[o]),u=(0,a.useCallback)(((t,e,n)=>{var a,l;const i=(null!=(a=t.current)?a:1)-1,r=null!=(l=t.pageSize)?l:0,o=(0,A.Z)(n).filter((t=>{let{columnKey:e}=t;return"string"==typeof e})).map((t=>{let{columnKey:e,order:n}=t;return{id:e,desc:"descend"===n}}));s({pageIndex:i,pageSize:r,sortBy:o,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:l,recordCount:i,data:d,onChange:u}})(e),s=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${e}`,"_blank")),[e]);return(0,b.tZ)("div",{css:i.length?null:pt},(0,b.tZ)(H.ZP,{columns:ht,data:i,size:H.ex.MIDDLE,defaultPageSize:25,recordCount:l,loading:n,onChange:o}),i.length||n?null:(0,b.tZ)(mt,{image:(0,b.tZ)(G,null),title:(0,r.t)("No charts"),description:(0,r.t)("This dataset is not used to power any charts."),buttonText:gt,buttonAction:s}))},vt=(0,v.iK)(V.ZP)`
  ${t=>{let{theme:e}=t;return`\n  margin-top: ${8.5*e.gridUnit}px;\n  padding-left: ${4*e.gridUnit}px;\n  padding-right: ${4*e.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*e.gridUnit}px;\n  }\n  `}}
`,bt=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  .ant-badge {\n    width: ${8*e.gridUnit}px;\n    margin-left: ${2.5*e.gridUnit}px;\n  }\n  `}}
`,yt={USAGE_TEXT:(0,r.t)("Usage"),COLUMNS_TEXT:(0,r.t)("Columns"),METRICS_TEXT:(0,r.t)("Metrics")},xt=t=>{let{id:e}=t;const{usageCount:n}=(t=>{const[e,n]=(0,a.useState)(0),l=(0,a.useCallback)((()=>i.Z.get({endpoint:`/api/v1/dataset/${t}/related_objects`}).then((t=>{let{json:e}=t;n(null==e?void 0:e.charts.count)})).catch((t=>{(0,u.Gb)((0,r.t)("There was an error fetching dataset's related objects")),o.Z.error(t)}))),[t]);return(0,a.useEffect)((()=>{t&&l()}),[t,l]),{usageCount:e}})(e),l=(0,b.tZ)(bt,null,(0,b.tZ)("span",null,yt.USAGE_TEXT),n>0&&(0,b.tZ)(D.Z,{count:n}));return(0,b.tZ)(vt,{moreIcon:null,fullWidth:!1},(0,b.tZ)(V.ZP.TabPane,{tab:yt.COLUMNS_TEXT,key:"1"}),(0,b.tZ)(V.ZP.TabPane,{tab:yt.METRICS_TEXT,key:"2"}),(0,b.tZ)(V.ZP.TabPane,{tab:l,key:"3"},(0,b.tZ)(ft,{datasetId:e})))};var Zt=n(29487);const wt=(t,e,n)=>{var a;return null==e||null==(a=e[t])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[t])};var $t=n(89419);const Ut=v.iK.div`
  padding: ${t=>{let{theme:e}=t;return 8*e.gridUnit}}px
    ${t=>{let{theme:e}=t;return 6*e.gridUnit}}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,_t=(0,v.iK)(B.XJ)`
  max-width: 50%;

  p {
    width: ${t=>{let{theme:e}=t;return 115*e.gridUnit}}px;
  }
`,Et=(0,r.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),St=(0,r.t)("create dataset from SQL query"),Tt=(0,r.t)(" to open SQL Lab. From there you can save the query as a dataset."),Ct=(0,r.t)("Select dataset source"),Pt=(0,r.t)("No table columns"),kt=(0,r.t)("This database table does not contain any data. Please select a different table."),It=(0,r.t)("An Error Occurred"),Rt=(0,r.t)("Unable to load columns for the selected table. Please select a different table."),Mt=t=>{const{hasError:e,tableName:n,hasColumns:l}=t;let i="empty-dataset.svg",r=Ct,o=(0,b.tZ)(a.Fragment,null,Et,(0,b.tZ)(j.rU,{to:"/sqllab"},(0,b.tZ)("span",{role:"button",tabIndex:0},St)),Tt);return e?(r=It,o=(0,b.tZ)(a.Fragment,null,Rt),i=void 0):n&&!l&&(i="no-columns.svg",r=Pt,o=(0,b.tZ)(a.Fragment,null,kt)),(0,b.tZ)(Ut,null,(0,b.tZ)(_t,{image:i,title:r,description:o}))};var Nt;!function(t){t.ABSOLUTE="absolute",t.RELATIVE="relative"}(Nt||(Nt={}));const Lt=v.iK.div`
  ${t=>{let{theme:e,position:n}=t;return`\n  position: ${n};\n  margin: ${4*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${3*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  font-size: ${6*e.gridUnit}px;\n  font-weight: ${e.typography.weights.medium};\n  padding-bottom: ${3*e.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*e.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*e.gridUnit}px;\n  `}}
`,zt=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  margin-left: ${6*e.gridUnit}px;\n  margin-bottom: ${3*e.gridUnit}px;\n  font-weight: ${e.typography.weights.bold};\n  `}}
`,Ot=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  padding: ${8*e.gridUnit}px\n    ${6*e.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}}
`,Kt=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*e.gridUnit}px;\n    text-align: center;\n    font-weight: ${e.typography.weights.normal};\n    font-size: ${e.typography.sizes.l}px;\n    color: ${e.colors.grayscale.light1};\n  }\n  `}}
`,Wt=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${60*e.gridUnit}px);\n  overflow: auto;\n  `}}
`,Dt=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n  position: relative;\n  margin: ${3*e.gridUnit}px;\n  margin-left: ${6*e.gridUnit}px;\n  height: calc(100% - ${30*e.gridUnit}px);\n  overflow: auto;\n  `}}
`,Vt=v.iK.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Ft=(0,v.iK)(Zt.Z)`
  ${t=>{let{theme:e}=t;return`\n  border: 1px solid ${e.colors.info.base};\n  padding: ${4*e.gridUnit}px;\n  margin: ${6*e.gridUnit}px ${6*e.gridUnit}px\n    ${8*e.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*e.gridUnit}px;\n    right: ${4*e.gridUnit}px;\n    font-weight: ${e.typography.weights.normal};\n\n    &:hover {\n      color: ${e.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}}
`,jt=(0,r.t)("Refreshing columns"),At=(0,r.t)("Table columns"),Ht=(0,r.t)("Loading"),Bt=["5","10","15","25"],qt=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(t,e)=>wt("name",t,e)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(t,e)=>wt("type",t,e)}],Xt=(0,r.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),Gt=(0,r.t)("View Dataset"),Yt=t=>{var e;let{tableName:n,columnList:l,loading:i,hasError:o,datasets:s}=t;const d=(0,v.Fg)(),u=null!=(e=(null==l?void 0:l.length)>0)&&e,c=null==s?void 0:s.map((t=>t.table_name)),h=null==s?void 0:s.find((t=>t.table_name===n));let p,g;return i&&(g=(0,b.tZ)(Ot,null,(0,b.tZ)(Kt,null,(0,b.tZ)("img",{alt:Ht,src:$t}),(0,b.tZ)("div",null,jt)))),i||(p=!i&&n&&u&&!o?(0,b.tZ)(a.Fragment,null,(0,b.tZ)(zt,null,At),h?(0,b.tZ)(Wt,null,(0,b.tZ)(Vt,null,(0,b.tZ)(H.ZP,{loading:i,size:H.ex.SMALL,columns:qt,data:l,pageSizeOptions:Bt,defaultPageSize:25}))):(0,b.tZ)(Dt,null,(0,b.tZ)(Vt,null,(0,b.tZ)(H.ZP,{loading:i,size:H.ex.SMALL,columns:qt,data:l,pageSizeOptions:Bt,defaultPageSize:25})))):(0,b.tZ)(Mt,{hasColumns:u,hasError:o,tableName:n})),(0,b.tZ)(a.Fragment,null,n&&(0,b.tZ)(a.Fragment,null,(null==c?void 0:c.includes(n))&&(f=h,(0,b.tZ)(Ft,{closable:!1,type:"info",showIcon:!0,message:(0,r.t)("This table already has a dataset"),description:(0,b.tZ)(a.Fragment,null,Xt,(0,b.tZ)("span",{role:"button",onClick:()=>{window.open(null==f?void 0:f.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button"},Gt))})),(0,b.tZ)(Lt,{position:!i&&u?Nt.RELATIVE:Nt.ABSOLUTE,title:n||""},n&&(0,b.tZ)(m.Z.Table,{iconColor:d.colors.grayscale.base}),n)),p,g);var f},Qt=t=>{let{tableName:e,dbId:n,schema:l,setHasColumns:s,datasets:d}=t;const[c,h]=(0,a.useState)([]),[p,g]=(0,a.useState)(!1),[m,f]=(0,a.useState)(!1),v=(0,a.useRef)(e);return(0,a.useEffect)((()=>{v.current=e,e&&l&&n&&(async t=>{const{dbId:e,tableName:n,schema:a}=t;g(!0),null==s||s(!1);const l=`/api/v1/database/${e}/table/${n}/${a}/`;try{const t=await i.Z.get({endpoint:l});if((t=>{let e=!0;if("string"!=typeof(null==t?void 0:t.name)&&(e=!1),e&&!Array.isArray(t.columns)&&(e=!1),e&&t.columns.length>0){const n=t.columns.some(((t,e)=>{const n=(t=>{let e=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==t?void 0:t.name)&&(e=!1,console.error(`${n} The property 'name' is required and must be a string`)),e&&"string"!=typeof(null==t?void 0:t.type)&&(e=!1,console.error(`${n} The property 'type' is required and must be a string`)),e})(t);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${e}] is invalid and does not match the ITableColumn interface`),!n}));e=!n}return e})(null==t?void 0:t.json)){const e=t.json;e.name===v.current&&(h(e.columns),null==s||s(e.columns.length>0),f(!1))}else h([]),null==s||s(!1),f(!0),(0,u.Gb)((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",l)),o.Z.error((0,r.t)("The API response from %s does not match the IDatabaseTable interface.",l))}catch(t){h([]),null==s||s(!1),f(!0)}finally{g(!1)}})({tableName:e,dbId:n,schema:l})}),[e,n,l]),(0,b.tZ)(Yt,{columnList:c,hasError:m,loading:p,tableName:e,datasets:d})};var Jt=n(17982),te=n(61337);const ee=v.iK.div`
  ${t=>{let{theme:e}=t;return`\n    padding: ${4*e.gridUnit}px;\n    height: 100%;\n    background-color: ${e.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*e.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*e.gridUnit}px;\n      margin-bottom: ${11*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*e.gridUnit}px;\n      margin-bottom: ${6*e.gridUnit}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*e.gridUnit}px;\n      left: ${3.25*e.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*e.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        :hover {\n          background-color: ${e.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*e.gridUnit}px;\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.primary.dark1};\n        color: ${e.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*e.gridUnit}px;\n      left: ${42.75*e.gridUnit}px;\n      font-size: ${4.25*e.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*e.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*e.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*e.gridUnit}px;\n        margin-bottom: ${2.5*e.gridUnit}px;\n      }\n      p {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n`}}
`;function ne(t){let{setDataset:e,dataset:n,datasetNames:l}=t;const{addDangerToast:i}=(0,Y.e1)(),o=(0,a.useCallback)((t=>{e({type:h.selectDatabase,payload:{db:t}})}),[e]);(0,a.useEffect)((()=>{const t=(0,te.rV)(te.dR.db,null);t&&o(t)}),[o]);const s=(0,a.useCallback)((t=>(0,b.tZ)(Jt.ez,{table:null!=l&&l.includes(t.value)?{...t,extra:{warning_markdown:(0,r.t)("This table already has a dataset")}}:t})),[l]);return(0,b.tZ)(ee,null,(0,b.tZ)(Jt.ZP,(0,F.Z)({database:null==n?void 0:n.db,handleError:i,emptyState:(0,B.UX)(!1),onDbChange:o,onSchemaChange:t=>{t&&e({type:h.selectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:h.selectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:s},(null==n?void 0:n.schema)&&{schema:n.schema})))}var ae=n(97381),le=n(3741);const ie=["db","schema","table_name"],re=[le.Ph,le.FY,le.Eh,le.TA],oe=(0,Y.ZP)((function(t){let{datasetObject:e,addDangerToast:n,hasColumns:i=!1,datasets:o}=t;const s=(0,l.k6)(),{createResource:d}=(0,Q.LE)("dataset",(0,r.t)("dataset"),n),u=(0,r.t)("Select a database table."),c=(0,r.t)("Create dataset and create chart"),h=!(null!=e&&e.table_name)||!i||(null==o?void 0:o.includes(null==e?void 0:e.table_name));return(0,b.tZ)(a.Fragment,null,(0,b.tZ)(g.Z,{onClick:()=>{if(e){const t=(t=>{let e=0;const n=Object.keys(t).reduce(((n,a)=>(ie.includes(a)&&t[a]&&(e+=1),e)),0);return re[n]})(e);(0,ae.logEvent)(t,e)}else(0,ae.logEvent)(le.Ph,{});s.goBack()}},(0,r.t)("Cancel")),(0,b.tZ)(g.Z,{buttonStyle:"primary",disabled:h,tooltip:null!=e&&e.table_name?void 0:u,onClick:()=>{if(e){var t;const n={database:null==(t=e.db)?void 0:t.id,schema:e.schema,table_name:e.table_name};d(n).then((t=>{t&&"number"==typeof t&&((0,ae.logEvent)(le.P$,e),s.push(`/chart/add/?dataset=${e.table_name}`))}))}}},c))}));var se=n(80663);function de(t){let{header:e,leftPanel:n,datasetPanel:a,rightPanel:l,footer:i}=t;const r=(0,v.Fg)();return(0,b.tZ)(y,null,e&&(0,b.tZ)(E,null,e),(0,b.tZ)($,null,n&&(0,b.tZ)(se.Z,{id:"dataset",initialWidth:80*r.gridUnit,minWidth:80*r.gridUnit,enable:!0},(t=>(0,b.tZ)(x,{width:t},(0,b.tZ)(T,null,n)))),(0,b.tZ)(Z,null,(0,b.tZ)(U,null,a&&(0,b.tZ)(C,null,a),l&&(0,b.tZ)(P,null,l)),(0,b.tZ)(_,null,i&&(0,b.tZ)(k,null,i)))))}function ue(t,e){const n={...t||{}};switch(e.type){case h.selectDatabase:return{...n,...e.payload,schema:null,table_name:null};case h.selectSchema:return{...n,[e.payload.name]:e.payload.value,table_name:null};case h.selectTable:return{...n,[e.payload.name]:e.payload.value};case h.changeDataset:return{...n,[e.payload.name]:e.payload.value};default:return null}}const ce="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function he(){const[t,e]=(0,a.useReducer)(ue,null),[n,i]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),{datasets:s,datasetNames:d}=c(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:u}=(0,l.UO)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(u,10))||o(!0)}),[u]),(0,b.tZ)(de,{header:(0,b.tZ)(O,{setDataset:e,title:null==t?void 0:t.table_name}),leftPanel:r?null:(0,b.tZ)(ne,{setDataset:e,dataset:t,datasetNames:d}),datasetPanel:r?(0,b.tZ)(xt,{id:u}):(0,b.tZ)(Qt,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(h=t.db)?void 0:h.id,schema:null==t?void 0:t.schema,setHasColumns:i,datasets:s}),footer:(0,b.tZ)(oe,{url:ce,datasetObject:t,hasColumns:n,datasets:d})});var h}}}]);
//# sourceMappingURL=a1c97b22f9f97bef4f45.chunk.js.map