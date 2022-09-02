"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8464],{8464:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=a(5872),n=a.n(l),s=a(55786),i=a(10581),u=a(61988),o=a(67294),r=a(4715),h=a(74448),c=a(11965);function d(t){const{data:e,formData:a,height:l,width:d,setDataMask:g,setFocusedFilter:m,unsetFocusedFilter:p,setFilterActive:v,filterState:f,inputRef:b}=t,{defaultValue:w,multiSelect:S}=a,[Z,F]=(0,o.useState)(null!=w?w:[]),k=t=>{const e=(0,s.Z)(t);F(e);const a={};e.length&&(a.interactive_groupby=e),g({filterState:{value:e.length?e:null},extraFormData:a})};(0,o.useEffect)((()=>{k(f.value)}),[JSON.stringify(f.value),S]),(0,o.useEffect)((()=>{k(null!=w?w:null)}),[JSON.stringify(w),S]);const C=(0,s.Z)(a.groupby).map(i.Z),x=C[0].length?C[0]:null,y=x?e.filter((t=>x.includes(t.column_name))):e,D=e?y:[],_=0===D.length?(0,u.t)("No columns"):(0,u.tn)("%s option","%s options",D.length,D.length),A={};f.validateMessage&&(A.extra=(0,c.tZ)(h.Am,{status:f.validateStatus},f.validateMessage));const K=D.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,c.tZ)(h.un,{height:l,width:d},(0,c.tZ)(h.jp,n()({validateStatus:f.validateStatus},A),(0,c.tZ)(r.Ph,{allowClear:!0,value:Z,placeholder:_,mode:S?"multiple":void 0,onChange:k,onBlur:p,onFocus:m,ref:b,options:K,onDropdownVisibleChange:v})))}},74448:(t,e,a)=>{a.d(e,{un:()=>s,jp:()=>i,Am:()=>u});var l=a(51995),n=a(4591);const s=l.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,i=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,u=l.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);
//# sourceMappingURL=fa6890448761f6eaa909.chunk.js.map