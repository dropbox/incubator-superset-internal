"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4572],{24572:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var l=a(5872),n=a.n(l),s=a(55786),i=a(88889),u=a(61988),o=a(67294),r=a(4715),h=a(74448),d=a(11965);function c(t){const{data:e,formData:a,height:l,width:c,setDataMask:v,setFocusedFilter:g,unsetFocusedFilter:p,setFilterActive:f,filterState:m,inputRef:w}=t,{defaultValue:b}=a,[S,Z]=(0,o.useState)(null!=b?b:[]),F=t=>{const e=(0,s.Z)(t);Z(e);const a={};e.length&&(a.granularity_sqla=e[0]),v({extraFormData:a,filterState:{value:e.length?e:null}})};(0,o.useEffect)((()=>{F(null!=b?b:null)}),[JSON.stringify(b)]),(0,o.useEffect)((()=>{var t;F(null!=(t=m.value)?t:null)}),[JSON.stringify(m.value)]);const M=(e||[]).filter((t=>t.dtype===i.Z.TEMPORAL)),k=0===M.length?(0,u.t)("No time columns"):(0,u.tn)("%s option","%s options",M.length,M.length),C={};m.validateMessage&&(C.extra=(0,d.tZ)(h.Am,{status:m.validateStatus},m.validateMessage));const x=M.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,d.tZ)(h.un,{height:l,width:c},(0,d.tZ)(h.jp,n()({validateStatus:m.validateStatus},C),(0,d.tZ)(r.Ph,{allowClear:!0,value:S,placeholder:k,onChange:F,onMouseEnter:g,onMouseLeave:p,ref:w,options:x,onDropdownVisibleChange:f})))}},74448:(t,e,a)=>{a.d(e,{un:()=>s,jp:()=>i,Am:()=>u});var l=a(51995),n=a(4591);const s=l.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,i=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,u=l.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);
//# sourceMappingURL=49cd8f3d6d6f320ed729.chunk.js.map