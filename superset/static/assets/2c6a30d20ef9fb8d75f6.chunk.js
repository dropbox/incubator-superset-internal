"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4572],{24572:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=a(73126),n=a(55786),s=a(88889),r=a(61988),u=a(67294),i=a(4715),o=a(74448),h=a(11965);function d(t){const{data:e,formData:a,height:d,width:c,setDataMask:v,setHoveredFilter:g,unsetHoveredFilter:p,setFocusedFilter:f,unsetFocusedFilter:m,setFilterActive:w,filterState:F,inputRef:b}=t,{defaultValue:S}=a,[Z,M]=(0,u.useState)(null!=S?S:[]),k=t=>{const e=(0,n.Z)(t);M(e);const a={};e.length&&(a.granularity_sqla=e[0]),v({extraFormData:a,filterState:{value:e.length?e:null}})};(0,u.useEffect)((()=>{k(null!=S?S:null)}),[JSON.stringify(S)]),(0,u.useEffect)((()=>{var t;k(null!=(t=F.value)?t:null)}),[JSON.stringify(F.value)]);const C=(e||[]).filter((t=>t.dtype===s.Z.TEMPORAL)),x=0===C.length?(0,r.t)("No time columns"):(0,r.tn)("%s option","%s options",C.length,C.length),y={};F.validateMessage&&(y.extra=(0,h.tZ)(o.Am,{status:F.validateStatus},F.validateMessage));const A=C.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,h.tZ)(o.un,{height:d,width:c},(0,h.tZ)(o.jp,(0,l.Z)({validateStatus:F.validateStatus},y),(0,h.tZ)(i.Ph,{allowClear:!0,value:Z,placeholder:x,onChange:k,onBlur:m,onFocus:f,onMouseEnter:g,onMouseLeave:p,ref:b,options:A,onDropdownVisibleChange:w})))}},74448:(t,e,a)=>{a.d(e,{Am:()=>i,h2:()=>s,jp:()=>u,un:()=>r});var l=a(51995),n=a(4591);const s=0,r=l.iK.div`
  min-height: ${t=>{let{height:e}=t;return e}}px;
  width: ${t=>{let{width:e}=t;return e===s?"100%":`${e}px`}};
`,u=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,i=l.iK.div`
  color: ${t=>{var e;let{theme:a,status:l="error"}=t;return null==(e=a.colors[l])?void 0:e.base}};
`}}]);
//# sourceMappingURL=2c6a30d20ef9fb8d75f6.chunk.js.map