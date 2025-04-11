"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8816],{804591:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(897538);const n=(0,i(751995).iK)(r.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},902857:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(751995),n=i(135944);const o=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,l=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function a({children:e,htmlFor:t,required:i=!1,className:r}){const a=i?l:o;return(0,n.tZ)(a,{htmlFor:t,className:r,children:e})}},73684:(e,t,i)=>{i.d(t,{Z:()=>K});var r,n=i(477808),o=i(931097),l=i(751995),a=i(211965),s=i(61988),d=i(608272),c=i(313322),p=i(835932),h=i(667294);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)({}).hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},m.apply(null,arguments)}const u=({title:e,titleId:t,...i},n)=>h.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:n,"aria-labelledby":t},i),e?h.createElement("title",{id:t},e):null,r||(r=h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,h.forwardRef)(u);var b=i(804591),v=i(902857),f=i(135944);const x=(0,l.iK)(n.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,Z=(0,l.iK)(n.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,$=(0,l.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,y=l.iK.div`
  display: flex;
  align-items: center;
`,w=(0,l.iK)(v.Z)`
  margin-bottom: 0;
`,k=a.iv`
  &.anticon > * {
    line-height: 0;
  }
`,K=({label:e,validationMethods:t,errorMessage:i,helpText:r,required:n=!1,hasTooltip:l=!1,tooltipText:h,id:m,className:u,visibilityToggle:v,get_url:K,description:z,...U})=>(0,f.BX)($,{className:u,children:[(0,f.BX)(y,{children:[(0,f.tZ)(w,{htmlFor:m,required:n,children:e}),l&&(0,f.tZ)(d.Z,{tooltip:`${h}`})]}),(0,f.BX)(b.Z,{css:e=>((e,t)=>a.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!i),validateTrigger:Object.keys(t),validateStatus:i?"error":"success",help:i||r,hasFeedback:!!i,children:[v||"password"===U.name?(0,f.tZ)(Z,{...U,...t,iconRender:e=>e?(0,f.tZ)(o.Z,{title:(0,s.t)("Hide password."),children:(0,f.tZ)(c.Z.EyeInvisibleOutlined,{iconSize:"m",css:k})}):(0,f.tZ)(o.Z,{title:(0,s.t)("Show password."),children:(0,f.tZ)(c.Z.EyeOutlined,{iconSize:"m",css:k})}),role:"textbox"}):(0,f.tZ)(x,{...U,...t}),K&&z?(0,f.BX)(p.Z,{type:"link",htmlType:"button",buttonStyle:"default",onClick:()=>(window.open(K),!0),children:["Get ",z]}):(0,f.tZ)("br",{})]})]})},49238:(e,t,i)=>{i.d(t,{l0:()=>a,xJ:()=>s.Z,lX:()=>d.Z,QA:()=>c.Z});var r=i(897538),n=i(751995),o=i(135944);const l=(0,n.iK)(r.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function a(e){return(0,o.tZ)(l,{...e})}var s=i(804591),d=i(902857),c=i(73684)},608272:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(751995),n=i(358593),o=i(313322),l=i(135944);const a=(0,r.iK)(n.u)`
  cursor: pointer;
`,s=r.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function p({tooltip:e,iconStyle:t={},placement:i="right",trigger:n="hover",overlayStyle:p=d,bgColor:h=c,viewBox:m="0 -1 24 24"}){const u=(0,r.Fg)(),g={...t,color:t.color||u.colors.grayscale.base};return(0,l.tZ)(a,{title:(0,l.tZ)(s,{children:e}),placement:i,trigger:n,overlayStyle:p,color:h,children:(0,l.tZ)(o.Z.InfoSolidSmall,{style:g,viewBox:m})})}},9875:(e,t,i)=>{i.d(t,{II:()=>l,Kx:()=>s,Rn:()=>a});var r=i(751995),n=i(477808),o=i(436795);const l=(0,r.iK)(n.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,a=(0,r.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,r.iK)(n.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},287183:(e,t,i)=>{i.d(t,{Y:()=>a});var r=i(751995),n=i(747933);const o=(0,r.iK)(n.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,l=(0,r.iK)(n.ZP.Group)`
  font-size: inherit;
`,a=Object.assign(o,{Group:l,Button:n.ZP.Button})},482342:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(667294),n=i(211965),o=i(751995),l=i(61988),a=i(409882),s=i(358593),d=i(49238),c=i(313322),p=i(135944);const h=n.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,m=({name:e,label:t,description:i,validationErrors:m=[],renderTrigger:u=!1,rightNode:g,leftNode:b,onClick:v,hovered:f=!1,tooltipOnClick:x=(()=>{}),warning:Z,danger:$})=>{const{gridUnit:y,colors:w}=(0,o.Fg)(),k=(0,r.useRef)(!1),K=(0,r.useMemo)((()=>(m.length||(k.current=!0),k.current?m.length?w.error.base:"unset":w.alert.base)),[w.error.base,w.alert.base,m.length]);return t?(0,p.BX)("div",{className:"ControlHeader",children:[(0,p.tZ)("div",{className:"pull-left",children:(0,p.BX)(d.lX,{css:e=>n.iv`
            margin-bottom: ${.5*e.gridUnit}px;
            position: relative;
          `,children:[b&&(0,p.tZ)("span",{children:b}),(0,p.tZ)("span",{role:"button",tabIndex:0,onClick:v,style:{cursor:v?"pointer":""},children:t})," ",Z&&(0,p.BX)("span",{children:[(0,p.tZ)(s.u,{id:"error-tooltip",placement:"top",title:Z,children:(0,p.tZ)(c.Z.AlertSolid,{iconColor:w.alert.base,iconSize:"s"})})," "]}),$&&(0,p.BX)("span",{children:[(0,p.tZ)(s.u,{id:"error-tooltip",placement:"top",title:$,children:(0,p.tZ)(c.Z.ErrorSolid,{iconColor:w.error.base,iconSize:"s"})})," "]}),(null==m?void 0:m.length)>0&&(0,p.BX)("span",{children:[(0,p.tZ)(s.u,{id:"error-tooltip",placement:"top",title:null==m?void 0:m.join(" "),children:(0,p.tZ)(c.Z.ExclamationCircleOutlined,{css:n.iv`
                    ${h};
                    color: ${K};
                  `})})," "]}),f?(0,p.BX)("span",{css:()=>n.iv`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${y}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[i&&(0,p.BX)("span",{children:[(0,p.tZ)(s.u,{id:"description-tooltip",title:i,placement:"top",children:(0,p.tZ)(c.Z.InfoCircleOutlined,{css:h,onClick:x})})," "]}),u&&(0,p.BX)("span",{children:[(0,p.tZ)(a.V,{label:(0,l.t)("bolt"),tooltip:(0,l.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," "]})]}):null]})}),g&&(0,p.tZ)("div",{className:"pull-right",children:g}),(0,p.tZ)("div",{className:"clearfix"})]}):null}},89483:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var r=i(751995),n=i(5364),o=i(667294),l=i(101090),a=i(174448),s=i(135944);const d=(0,r.iK)(a.un)`
  display: flex;
  align-items: center;
  overflow-x: auto;

  & .ant-tag {
    margin-right: 0;
  }
`,c=r.iK.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:t})=>{var i;return e&&`border-color: ${null==(i=t.colors[e])?void 0:i.base}`}}
  }
`;function p(e){var t;const{setDataMask:i,setHoveredFilter:r,unsetHoveredFilter:a,setFocusedFilter:p,unsetFocusedFilter:h,setFilterActive:m,width:u,height:g,filterState:b,inputRef:v,isOverflowingFilterBar:f=!1}=e,x=(0,o.useCallback)((e=>{const t=e&&e!==n.vM;i({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[i]);return(0,o.useEffect)((()=>{x(b.value)}),[b.value]),null!=(t=e.formData)&&t.inView?(0,s.tZ)(d,{width:u,height:g,children:(0,s.tZ)(c,{ref:v,validateStatus:b.validateStatus,onFocus:p,onBlur:h,onMouseEnter:r,onMouseLeave:a,children:(0,s.tZ)(l.ZP,{value:b.value||n.vM,name:"time_range",onChange:x,onOpenPopover:()=>m(!0),onClosePopover:()=>{m(!1),a(),h()},isOverflowingFilterBar:f})})}):null}},174448:(e,t,i)=>{i.d(t,{Am:()=>s,h2:()=>o,jp:()=>a,un:()=>l});var r=i(751995),n=i(804591);const o=0,l=r.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===o?"100%":`${e}px`};
`,a=(0,r.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,s=r.iK.div`
  color: ${({theme:e,status:t="error"})=>{var i;return null==(i=e.colors[t])?void 0:i.base}};
`}}]);
//# sourceMappingURL=928464bfe8959dd7315f.chunk.js.map