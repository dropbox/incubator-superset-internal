"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9483],{89483:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(37840),i=a(67294),o=a(73375),s=a(69856),n=a(74448),l=a(11965);const u=(0,r.iK)(n.un)`
  overflow-x: auto;
`,d=r.iK.div`
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
`,v=["inclusive","exclusive"];function h(e){var t;const{setDataMask:a,setFocusedFilter:r,unsetFocusedFilter:n,width:h,height:p,filterState:c,formData:{inputRef:b}}=e,m=(0,i.useCallback)((e=>{const t=e&&e!==s.vM;a({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[a]);return(0,i.useEffect)((()=>{m(c.value)}),[c.value]),null!=(t=e.formData)&&t.inView?(0,l.tZ)(u,{width:h,height:p},(0,l.tZ)(d,{tabIndex:-1,ref:b,validateStatus:c.validateStatus,onFocus:r,onBlur:n,onMouseEnter:r,onMouseLeave:n},(0,l.tZ)(o.Z,{endpoints:v,value:c.value||s.vM,name:"time_range",onChange:m,type:c.validateStatus}))):null}},74448:(e,t,a)=>{a.d(t,{un:()=>o,jp:()=>s,Am:()=>n});var r=a(37840),i=a(4591);const o=r.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e}px;
`,s=(0,r.iK)(i.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,n=r.iK.div`
  color: ${({theme:e,status:t="error"})=>{var a;return null==(a=e.colors[t])?void 0:a.base}};
`}}]);