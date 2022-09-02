"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1948],{81948:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=a(5872),s=a.n(n),i=a(55786),l=a(61988),r=a(67294),u=a(4715),o=a(74448),d=a(11965);function h(t){const{data:e,formData:a,height:n,width:h,setDataMask:v,setFocusedFilter:c,unsetFocusedFilter:g,setFilterActive:f,filterState:p,inputRef:m}=t,{defaultValue:w}=a,[S,b]=(0,r.useState)(null!=w?w:[]),F=(0,r.useMemo)((()=>e.reduce(((t,{duration:e,name:a})=>({...t,[e]:a})),{})),[JSON.stringify(e)]),M=t=>{const e=(0,i.Z)(t),[a]=e,n=a?F[a]:void 0,s={};a&&(s.time_grain_sqla=a),b(e),v({extraFormData:s,filterState:{label:n,value:e.length?e:null}})};(0,r.useEffect)((()=>{M(null!=w?w:[])}),[JSON.stringify(w)]),(0,r.useEffect)((()=>{var t;M(null!=(t=p.value)?t:[])}),[JSON.stringify(p.value)]);const Z=0===(e||[]).length?(0,l.t)("No data"):(0,l.tn)("%s option","%s options",e.length,e.length),k={};p.validateMessage&&(k.extra=(0,d.tZ)(o.Am,{status:p.validateStatus},p.validateMessage));const C=(e||[]).map((t=>{const{name:e,duration:a}=t;return{label:e,value:a}}));return(0,d.tZ)(o.un,{height:n,width:h},(0,d.tZ)(o.jp,s()({validateStatus:p.validateStatus},k),(0,d.tZ)(u.Ph,{allowClear:!0,value:S,placeholder:Z,onChange:M,onMouseEnter:c,onMouseLeave:g,ref:m,options:C,onDropdownVisibleChange:f})))}},74448:(t,e,a)=>{a.d(e,{un:()=>i,jp:()=>l,Am:()=>r});var n=a(51995),s=a(4591);const i=n.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t}px;
`,l=(0,n.iK)(s.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,r=n.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);
//# sourceMappingURL=73ae58351a954a5c96f0.chunk.js.map