"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8464],{8464:(t,e,l)=>{l.r(e),l.d(e,{default:()=>c});var a=l(5872),n=l.n(a),u=l(86852),s=l(60650),i=l(67294),o=l(4715),r=l(74448),h=l(11965);function c(t){var e,l,a;const{data:c,formData:d,height:g,width:v,setDataMask:m,setFocusedFilter:p,unsetFocusedFilter:f,filterState:b}=t,{defaultValue:S,inputRef:w,multiSelect:F}=d,[Z,k]=(0,i.useState)(null!=S?S:[]),y=t=>{const e=(0,u.Z)(t);k(e);const l={};e.length&&(l.interactive_groupby=e),m({filterState:{value:e.length?e:null},extraFormData:l})};(0,i.useEffect)((()=>{y(b.value)}),[JSON.stringify(b.value),F]),(0,i.useEffect)((()=>{y(null!=S?S:null)}),[JSON.stringify(S),F]);const x=null!=d&&null!=(e=d.groupby)&&null!=(l=e[0])&&l.length?null==d||null==(a=d.groupby)?void 0:a[0]:null,C=x?c.filter((t=>x.includes(t.column_name))):c,_=c?C:[],D=0===_.length?(0,s.t)("No columns"):(0,s.tn)("%s option","%s options",_.length,_.length),K={};b.validateMessage&&(K.extra=(0,h.tZ)(r.Am,{status:b.validateStatus},b.validateMessage));const M=_.map((t=>{const{column_name:e,verbose_name:l}=t;return{label:null!=l?l:e,value:e}}));return(0,h.tZ)(r.un,{height:g,width:v},(0,h.tZ)(r.jp,n()({validateStatus:b.validateStatus},K),(0,h.tZ)(o.P,{allowClear:!0,value:Z,placeholder:D,mode:F?"multiple":void 0,onChange:y,onBlur:f,onFocus:p,ref:w,options:M})))}},74448:(t,e,l)=>{l.d(e,{un:()=>u,jp:()=>s,Am:()=>i});var a=l(37840),n=l(4591);const u=a.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,s=(0,a.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,i=a.iK.div`
  color: ${({theme:t,status:e="error"})=>{var l;return null==(l=t.colors[e])?void 0:l.base}};
`}}]);