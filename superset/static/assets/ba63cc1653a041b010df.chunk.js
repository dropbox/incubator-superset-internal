"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1948],{81948:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=a(73126),n=a(55786),r=a(61988),s=a(67294),i=a(4715),u=a(74448),o=a(11965);function d(t){const{data:e,formData:a,height:d,width:h,setDataMask:v,setHoveredFilter:c,unsetHoveredFilter:g,setFocusedFilter:f,unsetFocusedFilter:p,setFilterActive:m,filterState:w,inputRef:F}=t,{defaultValue:S}=a,[b,Z]=(0,s.useState)(null!=S?S:[]),M=(0,s.useMemo)((()=>e.reduce(((t,e)=>{let{duration:a,name:l}=e;return{...t,[a]:l}}),{})),[JSON.stringify(e)]),k=t=>{const e=(0,n.Z)(t),[a]=e,l=a?M[a]:void 0,r={};a&&(r.time_grain_sqla=a),Z(e),v({extraFormData:r,filterState:{label:l,value:e.length?e:null}})};(0,s.useEffect)((()=>{k(null!=S?S:[])}),[JSON.stringify(S)]),(0,s.useEffect)((()=>{var t;k(null!=(t=w.value)?t:[])}),[JSON.stringify(w.value)]);const C=0===(e||[]).length?(0,r.t)("No data"):(0,r.tn)("%s option","%s options",e.length,e.length),x={};w.validateMessage&&(x.extra=(0,o.tZ)(u.Am,{status:w.validateStatus},w.validateMessage));const D=(e||[]).map((t=>{const{name:e,duration:a}=t;return{label:e,value:a}}));return(0,o.tZ)(u.un,{height:d,width:h},(0,o.tZ)(u.jp,(0,l.Z)({validateStatus:w.validateStatus},x),(0,o.tZ)(i.Ph,{allowClear:!0,value:b,placeholder:C,onChange:k,onBlur:p,onFocus:f,onMouseEnter:c,onMouseLeave:g,ref:F,options:D,onDropdownVisibleChange:m})))}},74448:(t,e,a)=>{a.d(e,{Am:()=>u,h2:()=>r,jp:()=>i,un:()=>s});var l=a(51995),n=a(4591);const r=0,s=l.iK.div`
  min-height: ${t=>{let{height:e}=t;return e}}px;
  width: ${t=>{let{width:e}=t;return e===r?"100%":`${e}px`}};
`,i=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,u=l.iK.div`
  color: ${t=>{var e;let{theme:a,status:l="error"}=t;return null==(e=a.colors[l])?void 0:e.base}};
`}}]);
//# sourceMappingURL=ba63cc1653a041b010df.chunk.js.map