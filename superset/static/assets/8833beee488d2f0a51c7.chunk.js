"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4572],{24572:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var l=a(5872),n=a.n(l),s=a(86852),u=a(23274),i=a(60650),r=a(67294),o=a(4715),h=a(74448),d=a(11965);function c(t){const{data:e,formData:a,height:l,width:c,setDataMask:v,setFocusedFilter:g,unsetFocusedFilter:f,filterState:p}=t,{defaultValue:m,inputRef:w}=a,[S,b]=(0,r.useState)(null!=m?m:[]),Z=t=>{const e=(0,s.Z)(t);b(e);const a={};e.length&&(a.granularity_sqla=e[0]),v({extraFormData:a,filterState:{value:e.length?e:null}})};(0,r.useEffect)((()=>{Z(null!=m?m:null)}),[JSON.stringify(m)]),(0,r.useEffect)((()=>{var t;Z(null!=(t=p.value)?t:null)}),[JSON.stringify(p.value)]);const M=(e||[]).filter((t=>t.dtype===u.Z.TEMPORAL)),k=0===M.length?(0,i.t)("No time columns"):(0,i.tn)("%s option","%s options",M.length,M.length),F={};p.validateMessage&&(F.extra=(0,d.tZ)(h.Am,{status:p.validateStatus},p.validateMessage));const x=M.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,d.tZ)(h.un,{height:l,width:c},(0,d.tZ)(h.jp,n()({validateStatus:p.validateStatus},F),(0,d.tZ)(o.P,{allowClear:!0,value:S,placeholder:k,onChange:Z,onMouseEnter:g,onMouseLeave:f,ref:w,options:x})))}},74448:(t,e,a)=>{a.d(e,{un:()=>s,jp:()=>u,Am:()=>i});var l=a(37840),n=a(4591);const s=l.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,u=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,i=l.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);