"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9483],{89483:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var o=a(51995),r=a(67294),i=a(73375),s=a(69856),n=a(74448),l=a(11965);const u=(0,o.iK)(n.un)`
  overflow-x: auto;
`,d=o.iK.div`
  padding: 2px;
  & > span,
  & > span:hover {
    border: 2px solid transparent;
    display: inline-block;
    border: ${({theme:e,validateStatus:t})=>{var a;return t&&`2px solid ${null==(a=e.colors[t])?void 0:a.base}`}};
  }
  &:focus {
    & > span {
      border: 2px solid
        ${({theme:e,validateStatus:t})=>{var a;return t?null==(a=e.colors[t])?void 0:a.base:e.colors.primary.base}};
      outline: 0;
      box-shadow: 0 0 0 2px
        ${({validateStatus:e})=>e?"rgba(224, 67, 85, 12%)":"rgba(32, 167, 201, 0.2)"};
    }
  }
`,v=["inclusive","exclusive"];function p(e){var t;const{setDataMask:a,setFocusedFilter:o,unsetFocusedFilter:n,setFilterActive:p,width:c,height:h,filterState:b,inputRef:m}=e,g=(0,r.useCallback)((e=>{const t=e&&e!==s.vM;a({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[a]);return(0,r.useEffect)((()=>{g(b.value)}),[b.value]),null!=(t=e.formData)&&t.inView?(0,l.tZ)(u,{width:c,height:h},(0,l.tZ)(d,{tabIndex:-1,ref:m,validateStatus:b.validateStatus,onFocus:o,onBlur:n,onMouseEnter:o,onMouseLeave:n},(0,l.tZ)(i.Z,{endpoints:v,value:b.value||s.vM,name:"time_range",onChange:g,type:b.validateStatus,onOpenPopover:()=>p(!0),onClosePopover:()=>p(!1)}))):null}},74448:(e,t,a)=>{a.d(t,{un:()=>i,jp:()=>s,Am:()=>n});var o=a(51995),r=a(4591);const i=o.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e}px;
`,s=(0,o.iK)(r.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,n=o.iK.div`
  color: ${({theme:e,status:t="error"})=>{var a;return null==(a=e.colors[t])?void 0:a.base}};
`}}]);