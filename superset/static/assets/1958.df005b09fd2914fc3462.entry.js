(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1958],{4591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(97538);const o=(0,n(37840).iK)(r.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(67294);var r=n(37840),o=n(11965);const i=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,l=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function a({children:e,htmlFor:t,required:n=!1,className:r}){const a=n?l:i;return(0,o.tZ)(a,{htmlFor:t,className:r},e)}},70917:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r,o=n(5872),i=n.n(o),l=n(67294),a=n(4107),s=n(37840),u=n(11965),c=n(8272);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const d=function(e){return l.createElement("svg",p({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm0 8a1 1 0 100 2 1 1 0 000-2zm9.71-7.44l-5.27-5.27a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.56a1.05 1.05 0 00-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.27a1.05 1.05 0 00.29-.71V8.27a1.05 1.05 0 00-.29-.71zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62z",fill:"currentColor"})))};var f=n(4591),g=n(2857);const m=(0,s.iK)(a.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,h=(0,s.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,v=s.iK.div`
  display: flex;
  align-items: center;
`,b=(0,s.iK)(g.Z)`
  margin-bottom: 0;
`,y=({label:e,validationMethods:t,errorMessage:n,helpText:r,required:o=!1,hasTooltip:l=!1,tooltipText:a,id:s,className:p,...g})=>(0,u.tZ)(h,{className:p},(0,u.tZ)(v,null,(0,u.tZ)(b,{htmlFor:s,required:o},e),l&&(0,u.tZ)(c.Z,{tooltip:`${a}`,viewBox:"0 -1 24 24"})),(0,u.tZ)(f.Z,{css:e=>((e,t)=>u.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${d});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!n),validateTrigger:Object.keys(t),validateStatus:n?"error":"success",help:n||r,hasFeedback:!!n},(0,u.tZ)(m,i()({},g,t))))},49238:(e,t,n)=>{"use strict";n.d(t,{l0:()=>a,xJ:()=>s.Z,lX:()=>u.Z}),n(67294);var r=n(97538),o=n(37840),i=n(11965);const l=(0,o.iK)(r.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function a(e){return(0,i.tZ)(l,e)}var s=n(4591),u=n(2857);n(70917)},8272:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c}),n(67294);var r=n(37840),o=n(58593),i=n(38097),l=n(11965);const a=(0,r.iK)(o.u)`
  cursor: pointer;
  path:first-of-type {
    fill: #999999;
  }
`,s=r.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,u={fontSize:"12px",lineHeight:"16px"};function c({tooltip:e,placement:t="right",trigger:n="hover",overlayStyle:r=u,bgColor:o="rgba(0,0,0,0.9)",viewBox:c="0 -2 24 24"}){return(0,l.tZ)(a,{title:(0,l.tZ)(s,null,e),placement:t,trigger:n,overlayStyle:r,color:o},(0,l.tZ)(i.Z.InfoSolidSmall,{className:"info-solid-small",viewBox:c}))}},81315:(e,t,n)=>{"use strict";n.d(t,{m:()=>L,Z:()=>k});var r=n(5872),o=n.n(r),i=n(18446),l=n.n(i),a=n(67294),s=n(37840),u=n(60650),c=n(64749),p=n(76570),d=n(57254),f=n(23279),g=n.n(f),m=n(11382),h=n(38097),v=n(98286),b=n(55083),y=n(11965);const{Option:w}=c.default,E=s.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,x=(0,s.iK)(c.default)`
  ${({theme:e})=>`\n    && .ant-select-selector {\n      border-radius: ${e.gridUnit}px;\n    }\n\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n  `}
`,S=(0,s.iK)(h.Z.StopOutlined)`
  vertical-align: 0;
`,Z=(0,s.iK)(h.Z.CheckOutlined)`
  vertical-align: 0;
`,A=s.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    padding: ${2*e.gridUnit}px;\n    color: ${e.colors.error.base};\n\n    & svg {\n      margin-right: ${2*e.gridUnit}px;\n    }\n  `}
`,$=s.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,_=(0,s.iK)(m.Z)`
  margin-top: ${({theme:e})=>-e.gridUnit}px;
`,N=s.iK.div`
  ${({theme:e})=>`\n    margin-left: ${3*e.gridUnit}px;\n    line-height: ${8*e.gridUnit}px;\n    color: ${e.colors.grayscale.light1};\n  `}
`,D=[",","\n","\t",";"],C=[],O=({error:e})=>(0,y.tZ)(A,null,(0,y.tZ)(h.Z.ErrorSolid,null)," ",(0,y.tZ)($,null,e)),I=(e,t)=>"string"==typeof e.label&&"string"==typeof t.label?e.label.localeCompare(t.label):"string"==typeof e.value&&"string"==typeof t.value?e.value.localeCompare(t.value):e.value-t.value,L=e=>(t,n)=>"string"==typeof t[e]&&"string"==typeof n[e]?t[e].localeCompare(n[e]):t[e]-n[e],k=({allowNewOptions:e=!1,ariaLabel:t,fetchOnlyOnSearch:n,filterOption:r=!0,header:i=null,invertSelection:s=!1,labelInValue:c=!1,lazyLoading:f=!0,loading:m,mode:h="single",name:A,notFoundContent:$,onError:L,onChange:k,onClear:R,optionFilterProps:T=["label","value"],options:z,pageSize:U=100,placeholder:K=(0,u.t)("Select ..."),showSearch:H=!0,sortComparator:M=I,value:V,...F})=>{const W="function"==typeof z,B="single"===h,P=!(!W&&!e)||H,G=z&&Array.isArray(z)?z:C,[j,q]=(0,a.useState)(G),J=!!j.find((e=>null==e?void 0:e.customLabel)),[Q,X]=(0,a.useState)(V),[Y,ee]=(0,a.useState)(""),[te,ne]=(0,a.useState)(m),[re,oe]=(0,a.useState)(!1),[ie,le]=(0,a.useState)(""),[ae,se]=(0,a.useState)(!1),[ue,ce]=(0,a.useState)(0),[pe,de]=(0,a.useState)(0),[fe,ge]=(0,a.useState)(!f),[me,he]=(0,a.useState)(!1),ve=(0,a.useRef)(new Map),be=B?void 0:e?"tags":"multiple",ye=(0,a.useCallback)((e=>{if(null!=e){const t=W||c,n=[],r=[];j.forEach((o=>{let i=!1;i=Array.isArray(e)?t?void 0!==e.find((e=>e.value===o.value)):e.includes(o.value):t?e.value===o.value:e===o.value,i?n.push(o):r.push(o)})),!B&&Array.isArray(e)&&e.forEach((e=>{if(!n.find((n=>n.value===(t?null==e?void 0:e.value:e))))if(t){const t=e;n.push({label:t.label,value:t.value})}else{const t=e;n.push({label:String(t),value:t})}}));const o=[...n.sort(M),...r.sort(M)];l()(o,j)||q(o)}else{const e=[...j].sort(M);l()(e,j)||q(e)}}),[W,B,c,j,M]),we=(0,a.useCallback)((e=>(0,v.O)(e).then((e=>{const{error:t}=e;le(t),L&&L(t)}))),[L]),Ee=(0,a.useCallback)((e=>{let t=[];if(e&&Array.isArray(e)&&e.length){const n=new Set;e.forEach((e=>n.add(String(e.value).toLocaleLowerCase()))),q((r=>(t=[...r.filter((e=>!n.has(String(e.value).toLocaleLowerCase()))),...e],t.sort(M),t)))}return t}),[M]),xe=(0,a.useMemo)((()=>(e,t,r)=>{if(me)return ne(!1),void oe(!1);const o=`${e};${t};${r}`,i=ve.current.get(o);if(i)return de(i),ne(!1),void oe(!1);ne(!0),z(e,t,r).then((({data:t,totalCount:r})=>{const i=Ee(t);ve.current.set(o,r),de(r),!n&&""===e&&i.length>=r&&he(!0)})).catch(we).finally((()=>{ne(!1),oe(!1)}))}),[me,n,Ee,we,z]),Se=(0,a.useMemo)((()=>g()((t=>{const n=t.trim();if(e&&B){const e=n&&!(0,b.G)(n,j)&&{label:n,value:n},t=e?[e,...j.filter((e=>e.value!==Y))]:[...j.filter((e=>e.value!==Y))];q(t)}n&&n!==Y||oe(!1),ee(n)}),500)),[e,B,Y,j]);return(0,a.useEffect)((()=>{ve.current.clear(),q(z&&Array.isArray(z)?z:C),he(!1)}),[z]),(0,a.useEffect)((()=>{X(V)}),[V]),(0,a.useEffect)((()=>{if(Q){const e=Array.isArray(Q)?Q:[Q],t=[],n=W||c;e.forEach((e=>{j.find((t=>n?t.value===e.value:t.value===e))||t.push(n?e:{value:e,label:e})})),t.length>0&&q([...t,...j])}}),[c,W,j,Q]),(0,a.useEffect)((()=>()=>Se.cancel()),[Se]),(0,a.useEffect)((()=>{if(W&&fe&&(!n||Y)){const e=0;xe(Y,e,U),ce(e)}}),[W,Y,U,xe,fe,n]),(0,a.useEffect)((()=>{B&&ye(Q)}),[ye,B,Q]),(0,a.useEffect)((()=>{void 0!==m&&m!==te&&ne(m)}),[te,m]),(0,y.tZ)(E,null,i,(0,y.tZ)(x,o()({"aria-label":t||A,dropdownRender:e=>{var t,n;return ae||null==(t=e.ref)||null==(n=t.current)||n.scrollTo({top:0}),te&&0===j.length||re?(0,y.tZ)(N,null,(0,u.t)("Loading...")):ie?(0,y.tZ)(O,{error:ie}):e},filterOption:(e,t)=>{if("function"==typeof r)return r(e,t);if(r){const n=e.trim().toLowerCase();if(T&&T.length)return T.some((e=>(null!=t&&t[e]?String(t[e]).trim().toLowerCase():"").includes(n)))}return!1},getPopupContainer:e=>e.parentNode,labelInValue:W||c,maxTagCount:4,mode:be,notFoundContent:e&&!n?(0,y.tZ)(N,null,(0,u.t)("Loading...")):$,onDeselect:e=>{Array.isArray(Q)&&X("number"==typeof e||"string"==typeof e?Q.filter((t=>t!==e)):Q.filter((t=>t.value!==e.value))),ee("")},onDropdownVisibleChange:e=>{se(e),W&&!fe&&ge(!0),!B&&e&&ye(Q)},onInputKeyDown:e=>{1===e.key.length&&W&&!re&&oe(!0)},onPopupScroll:W?e=>{const t=e.currentTarget,n=t.scrollTop>.7*(t.scrollHeight-t.offsetHeight);if(!te&&W&&ue*U+U<pe&&n){const e=ue+1;xe(Y,e,U),ce(e)}}:void 0,onSearch:P?Se:void 0,onSelect:e=>{if(B)X(e);else{const t=Q?Array.isArray(Q)?Q:[Q]:[];X([...t,e])}ee("")},onClear:()=>{X(void 0),R&&R()},onChange:k,options:J?void 0:j,placeholder:K,showSearch:P,showArrow:!0,tokenSeparators:D,value:Q,suffixIcon:(0,y.tZ)((()=>te?(0,y.tZ)(_,{size:"small"}):P&&ae?(0,y.tZ)(p.Z,null):(0,y.tZ)(d.Z,null)),null),menuItemSelectedIcon:s?(0,y.tZ)(S,{iconSize:"m"}):(0,y.tZ)(Z,{iconSize:"m"})},F),J&&j.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:i,...l}=e;return(0,y.tZ)(w,o()({},l,{key:r,label:n,value:r}),t&&i?i:n)}))))}},55083:(e,t,n)=>{"use strict";function r(e,t=[],n="value"){if(null==e||""===e)return[];const r=Array.isArray((t[0]||{}).options)?t.flatMap((e=>e.options||[])):t;return(Array.isArray(e)?e:[e]).map((t=>{const o=(e||{}).hasOwnProperty(n)?t[n]:t;return r.find((e=>e===o||e[n]===o))||t}))}function o(e,t){const n=e.trim().toLowerCase();return t.find((e=>{const{label:t,value:r}=e,o=String(t);return String(r).toLowerCase()===n||o.toLowerCase()===n}))}n.d(t,{d:()=>r,G:()=>o})},4715:(e,t,n)=>{"use strict";n.d(t,{P:()=>r.Z});var r=n(81315)},80621:(e,t,n)=>{"use strict";n.d(t,{PV:()=>r,M2:()=>o,_4:()=>i,Zn:()=>l,D0:()=>a,Jd:()=>s,Nb:()=>u,ES:()=>c,Z1:()=>p,C3:()=>d,vD:()=>f,Xk:()=>g,NN:()=>m,Mu:()=>h,cd:()=>v,es:()=>b,cz:()=>y,cx:()=>w,AA:()=>E,fw:()=>x,u_:()=>S,OE:()=>Z,pQ:()=>A,b5:()=>$,HE:()=>_,Q9:()=>N,TN:()=>D,kS:()=>C,Bu:()=>O,Ep:()=>I,dU:()=>L,_B:()=>k});const r="GRID_ID",o="HEADER_ID",i="ROOT_ID",l="DASHBOARD_VERSION_KEY",a="NEW_COMPONENTS_SOURCE_ID",s="NEW_CHART_ID",u="NEW_COLUMN_ID",c="NEW_DIVIDER_ID",p="NEW_HEADER_ID",d="NEW_MARKDOWN_ID",f="NEW_ROW_ID",g="NEW_TAB_ID",m="NEW_TABS_ID",h=0,v=8,b=2*v,y=12,w=1,E=5,x=4,S="SMALL_HEADER",Z="MEDIUM_HEADER",A="LARGE_HEADER",$="BACKGROUND_WHITE",_="BACKGROUND_TRANSPARENT",N=50,D="overwrite",C="newDashboard",O=65535,I=["LABEL"],L="ALL_FILTERS_ROOT";var k;!function(e){e[e.NONE=0]="NONE",e[e.HIDE_NAV=1]="HIDE_NAV",e[e.HIDE_NAV_AND_TITLE=2]="HIDE_NAV_AND_TITLE",e[e.REPORT=3]="REPORT"}(k||(k={}))},91877:(e,t,n)=>{"use strict";function r(e){window.featureFlags||(window.featureFlags=e||{})}function o(e){return window&&window.featureFlags&&!!window.featureFlags[e]}n.d(t,{fG:()=>r,cr:()=>o})},1113:()=>{},84116:()=>{},27829:()=>{}}]);