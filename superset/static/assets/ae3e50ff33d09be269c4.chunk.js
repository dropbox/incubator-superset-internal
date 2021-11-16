"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1948],{81948:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=a(5872),s=a.n(n),l=a(86852),i=a(60650),u=a(67294),r=a(4715),o=a(74448),d=a(11965);function h(t){const{data:e,formData:a,height:n,width:h,setDataMask:v,setFocusedFilter:c,unsetFocusedFilter:g,filterState:f}=t,{defaultValue:p,inputRef:m}=a,[S,w]=(0,u.useState)(null!=p?p:[]),b=(0,u.useMemo)((()=>e.reduce(((t,{duration:e,name:a})=>({...t,[e]:a})),{})),[JSON.stringify(e)]),M=t=>{const e=(0,l.Z)(t),[a]=e,n=a?b[a]:void 0,s={};a&&(s.time_grain_sqla=a),w(e),v({extraFormData:s,filterState:{label:n,value:e.length?e:null}})};(0,u.useEffect)((()=>{M(null!=p?p:[])}),[JSON.stringify(p)]),(0,u.useEffect)((()=>{var t;M(null!=(t=f.value)?t:[])}),[JSON.stringify(f.value)]);const Z=0===(e||[]).length?(0,i.t)("No data"):(0,i.tn)("%s option","%s options",e.length,e.length),k={};f.validateMessage&&(k.extra=(0,d.tZ)(o.Am,{status:f.validateStatus},f.validateMessage));const F=(e||[]).map((t=>{const{name:e,duration:a}=t;return{label:e,value:a}}));return(0,d.tZ)(o.un,{height:n,width:h},(0,d.tZ)(o.jp,s()({validateStatus:f.validateStatus},k),(0,d.tZ)(r.P,{allowClear:!0,value:S,placeholder:Z,onChange:M,onMouseEnter:c,onMouseLeave:g,ref:m,options:F})))}},74448:(t,e,a)=>{a.d(e,{un:()=>l,jp:()=>i,Am:()=>u});var n=a(37840),s=a(4591);const l=n.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,i=(0,n.iK)(s.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,u=n.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);