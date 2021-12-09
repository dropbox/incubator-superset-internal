"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8464],{8464:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=a(5872),n=a.n(l),u=a(55786),s=a(10581),i=a(61988),o=a(67294),r=a(4715),h=a(74448),c=a(11965);function d(t){const{data:e,formData:a,height:l,width:d,setDataMask:g,setFocusedFilter:m,unsetFocusedFilter:p,filterState:v}=t,{defaultValue:f,inputRef:b,multiSelect:S}=a,[w,Z]=(0,o.useState)(null!=f?f:[]),F=t=>{const e=(0,u.Z)(t);Z(e);const a={};e.length&&(a.interactive_groupby=e),g({filterState:{value:e.length?e:null},extraFormData:a})};(0,o.useEffect)((()=>{F(v.value)}),[JSON.stringify(v.value),S]),(0,o.useEffect)((()=>{F(null!=f?f:null)}),[JSON.stringify(f),S]);const k=(0,u.Z)(a.groupby).map(s.Z),x=k[0].length?k[0]:null,y=x?e.filter((t=>x.includes(t.column_name))):e,C=e?y:[],_=0===C.length?(0,i.t)("No columns"):(0,i.tn)("%s option","%s options",C.length,C.length),D={};v.validateMessage&&(D.extra=(0,c.tZ)(h.Am,{status:v.validateStatus},v.validateMessage));const K=C.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,c.tZ)(h.un,{height:l,width:d},(0,c.tZ)(h.jp,n()({validateStatus:v.validateStatus},D),(0,c.tZ)(r.P,{allowClear:!0,value:w,placeholder:_,mode:S?"multiple":void 0,onChange:F,onBlur:p,onFocus:m,ref:b,options:K})))}},74448:(t,e,a)=>{a.d(e,{un:()=>u,jp:()=>s,Am:()=>i});var l=a(51995),n=a(4591);const u=l.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,s=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,i=l.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);