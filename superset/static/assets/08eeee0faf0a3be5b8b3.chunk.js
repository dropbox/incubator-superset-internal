"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1090],{662276:(e,t,a)=>{a.d(t,{M:()=>o,S:()=>r});var n=a(360593),l=a(751995);const i=n.Z.RangePicker,r=(0,l.iK)(i)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,o=n.Z},999075:(e,t,a)=>{a.d(t,{J:()=>i});var n=a(219181),l=a(135944);const i=e=>(0,l.tZ)(n.Z,{...e})},927845:(e,t,a)=>{a.d(t,{Z:()=>d,j:()=>r});var n=a(667294),l=a(999075),i=a(135944);const r=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},o=e=>{var t,a;const n=null==(t=window)?void 0:t.innerHeight,l=null==e||null==(a=e.getBoundingClientRect())?void 0:a.top;return n&&l?l/n:0},d=({getPopupContainer:e,getVisibilityRatio:t=o,visible:a,destroyTooltipOnHide:d=!1,...c})=>{const s=(0,n.useRef)(),[u,h]=(0,n.useState)(void 0===a?c.defaultVisible:a),[v,p]=n.useState("right"),m=(0,n.useCallback)((()=>{const e=t(s.current);p(e<.35&&"rightTop"!==v?"rightTop":e>.65&&"rightBottom"!==v?"rightBottom":"right")}),[t]),g=(0,n.useCallback)((e=>{const t=r();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")}),[m]),Z=(0,n.useCallback)((t=>(s.current=t,(null==e?void 0:e(t))||document.body)),[m,e]),f=(0,n.useCallback)((e=>{void 0===e&&g(e),h(!!e),null==c.onVisibleChange||c.onVisibleChange(!!e)}),[c,g]),b=(0,n.useCallback)((e=>{"Escape"===e.key&&(h(!1),null==c.onVisibleChange||c.onVisibleChange(!1))}),[c]);return(0,n.useEffect)((()=>{void 0!==a&&h(!!a)}),[a]),(0,n.useEffect)((()=>{void 0!==u&&g(u)}),[u,g]),(0,n.useEffect)((()=>(u&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)})),[b,u]),(0,n.useEffect)((()=>{u&&m()}),[u,m]),(0,i.tZ)(l.J,{...c,visible:u,arrowPointAtCenter:!0,placement:v,onVisibleChange:f,getPopupContainer:Z,destroyTooltipOnHide:d})}},251137:(e,t,a)=>{a.d(t,{Z:()=>F});var n=a(667294),l=a(751995),i=a(211965),r=a(903297),o=a(5364),d=a(706882),c=a(61988),s=a(835932),u=a(482342),h=a(774069),v=a(104715),p=a(313322),m=a(281315),g=a(358593),Z=a(112515),f=a(427600),b=a(454076),y=a(927845),C=a(561314),w=a(287183),E=a(135944);function x(e){let t="Last week";return C.bk.has(e.value)?t=e.value:e.onChange(t),(0,E.BX)(E.HY,{children:[(0,E.tZ)("div",{className:"section-title",children:(0,c.t)("Configure Time Range: Last...")}),(0,E.tZ)(w.Y.Group,{value:t,onChange:t=>e.onChange(t.target.value),children:C.Sm.map((({value:e,label:t})=>(0,E.tZ)(w.Y,{value:e,className:"vertical-radio",children:t},e)))})]})}var S=a(831209);function T({onChange:e,value:t}){return(0,n.useEffect)((()=>{C.LY.has(t)||e(S.gT)}),[e,t]),C.LY.has(t)?(0,E.BX)(E.HY,{children:[(0,E.tZ)("div",{className:"section-title",children:(0,c.t)("Configure Time Range: Previous...")}),(0,E.tZ)(w.Y.Group,{value:t,onChange:t=>e(t.target.value),children:C._S.map((({value:e,label:t})=>(0,E.tZ)(w.Y,{value:e,className:"vertical-radio",children:t},e)))})]}):null}function X({onChange:e,value:t}){return(0,n.useEffect)((()=>{C.Zn.has(t)||e(S.jk)}),[t]),C.Zn.has(t)?(0,E.BX)(E.HY,{children:[(0,E.tZ)("div",{className:"section-title",children:(0,c.t)("Configure Time Range: Current...")}),(0,E.tZ)(w.Y.Group,{value:t,onChange:t=>{let a=t.target.value;a=a.trim(),""!==a&&e(a)},children:C.x9.map((({value:e,label:t})=>(0,E.tZ)(w.Y,{value:e,className:"vertical-radio",children:t},e)))})]}):null}var D=a(593754),k=a.n(D),$=a(828216),N=a(891988),M=a(458146),A=a(9875),L=a(662276),B=a(409882);function V(e){var t;const{customRange:a,matchedFlag:n}=(0,N.c)(e.value);n||e.onChange((0,C.jK)(a));const{sinceDatetime:l,sinceMode:i,sinceGrain:r,sinceGrainValue:o,untilDatetime:d,untilMode:s,untilGrain:u,untilGrainValue:h,anchorValue:p,anchorMode:g}={...a};function Z(t,n){e.onChange((0,C.jK)({...a,[t]:n}))}function f(t,n){k()(n)&&n>0&&e.onChange((0,C.jK)({...a,[t]:n}))}const b=(0,$.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.locale})),y=null==(t=M.locales[C.ZU[b]])?void 0:t.DatePicker;return(0,E.BX)("div",{children:[(0,E.tZ)("div",{className:"section-title",children:(0,c.t)("Configure custom time range")}),(0,E.BX)(v.X2,{gutter:24,children:[(0,E.BX)(v.JX,{span:12,children:[(0,E.BX)("div",{className:"control-label",children:[(0,c.t)("START (INCLUSIVE)")," ",(0,E.tZ)(B.V,{tooltip:(0,c.t)("Start date included in time range"),placement:"right"})]}),(0,E.tZ)(m.Z,{ariaLabel:(0,c.t)("START (INCLUSIVE)"),options:C._d,value:i,onChange:e=>Z("sinceMode",e)}),"specific"===i&&(0,E.tZ)(v.X2,{children:(0,E.tZ)(L.M,{showTime:!0,defaultValue:(0,C.DL)(l),onChange:e=>Z("sinceDatetime",e.format(C.KZ)),allowClear:!1,locale:y})}),"relative"===i&&(0,E.BX)(v.X2,{gutter:8,children:[(0,E.tZ)(v.JX,{span:11,children:(0,E.tZ)(A.Rn,{placeholder:(0,c.t)("Relative quantity"),value:Math.abs(o),min:1,defaultValue:1,onChange:e=>f("sinceGrainValue",e||1),onStep:e=>f("sinceGrainValue",e||1)})}),(0,E.tZ)(v.JX,{span:13,children:(0,E.tZ)(m.Z,{ariaLabel:(0,c.t)("Relative period"),options:C.kj,value:r,onChange:e=>Z("sinceGrain",e)})})]})]}),(0,E.BX)(v.JX,{span:12,children:[(0,E.BX)("div",{className:"control-label",children:[(0,c.t)("END (EXCLUSIVE)")," ",(0,E.tZ)(B.V,{tooltip:(0,c.t)("End date excluded from time range"),placement:"right"})]}),(0,E.tZ)(m.Z,{ariaLabel:(0,c.t)("END (EXCLUSIVE)"),options:C.hj,value:s,onChange:e=>Z("untilMode",e)}),"specific"===s&&(0,E.tZ)(v.X2,{children:(0,E.tZ)(L.M,{showTime:!0,defaultValue:(0,C.DL)(d),onChange:e=>Z("untilDatetime",e.format(C.KZ)),allowClear:!1,locale:y})}),"relative"===s&&(0,E.BX)(v.X2,{gutter:8,children:[(0,E.tZ)(v.JX,{span:11,children:(0,E.tZ)(A.Rn,{placeholder:(0,c.t)("Relative quantity"),value:h,min:1,defaultValue:1,onChange:e=>f("untilGrainValue",e||1),onStep:e=>f("untilGrainValue",e||1)})}),(0,E.tZ)(v.JX,{span:13,children:(0,E.tZ)(m.Z,{ariaLabel:(0,c.t)("Relative period"),options:C.Ae,value:u,onChange:e=>Z("untilGrain",e)})})]})]})]}),"relative"===i&&"relative"===s&&(0,E.BX)("div",{className:"control-anchor-to",children:[(0,E.tZ)("div",{className:"control-label",children:(0,c.t)("Anchor to")}),(0,E.BX)(v.X2,{align:"middle",children:[(0,E.tZ)(v.JX,{children:(0,E.BX)(w.Y.Group,{onChange:function(t){const n=t.target.value;"now"===n?e.onChange((0,C.jK)({...a,anchorValue:"now",anchorMode:n})):e.onChange((0,C.jK)({...a,anchorValue:C.V7,anchorMode:n}))},defaultValue:"now",value:g,children:[(0,E.tZ)(w.Y,{value:"now",children:(0,c.t)("NOW")},"now"),(0,E.tZ)(w.Y,{value:"specific",children:(0,c.t)("Date/Time")},"specific")]})}),"now"!==g&&(0,E.tZ)(v.JX,{children:(0,E.tZ)(L.M,{showTime:!0,defaultValue:(0,C.DL)(p),onChange:e=>Z("anchorValue",e.format(C.KZ)),allowClear:!1,className:"control-anchor-to-datetime",locale:y})})]})]})]})}const Y=(0,E.BX)(E.HY,{children:[(0,E.BX)("div",{children:[(0,E.tZ)("h3",{children:"DATETIME"}),(0,E.tZ)("p",{children:(0,c.t)("Return to specific datetime.")}),(0,E.tZ)("h4",{children:(0,c.t)("Syntax")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:"datetime([string])"})}),(0,E.tZ)("h4",{children:(0,c.t)("Example")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'})})]}),(0,E.BX)("div",{children:[(0,E.tZ)("h3",{children:"DATEADD"}),(0,E.tZ)("p",{children:(0,c.t)("Moves the given set of dates by a specified interval.")}),(0,E.tZ)("h4",{children:(0,c.t)("Syntax")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)"})}),(0,E.tZ)("h4",{children:(0,c.t)("Example")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'})})]}),(0,E.BX)("div",{children:[(0,E.tZ)("h3",{children:"DATETRUNC"}),(0,E.tZ)("p",{children:(0,c.t)("Truncates the specified date to the accuracy specified by the date unit.")}),(0,E.tZ)("h4",{children:(0,c.t)("Syntax")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:"datetrunc([datetime], [dateunit])\ndateunit = (year | quarter | month | week)"})}),(0,E.tZ)("h4",{children:(0,c.t)("Example")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'})})]}),(0,E.BX)("div",{children:[(0,E.tZ)("h3",{children:"LASTDAY"}),(0,E.tZ)("p",{children:(0,c.t)("Get the last date by the date unit.")}),(0,E.tZ)("h4",{children:(0,c.t)("Syntax")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:"lastday([datetime], [dateunit])\ndateunit = (year | month | week)"})}),(0,E.tZ)("h4",{children:(0,c.t)("Example")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:'lastday(datetime("today"), month)'})})]}),(0,E.BX)("div",{children:[(0,E.tZ)("h3",{children:"HOLIDAY"}),(0,E.tZ)("p",{children:(0,c.t)("Get the specify date for the holiday")}),(0,E.tZ)("h4",{children:(0,c.t)("Syntax")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])"})}),(0,E.tZ)("h4",{children:(0,c.t)("Example")}),(0,E.tZ)("pre",{children:(0,E.tZ)("code",{children:'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")'})})]})]}),R=e=>{const t=(0,l.Fg)();return(0,E.tZ)(i.ms,{children:({css:a})=>(0,E.tZ)(g.u,{overlayClassName:a`
            .ant-tooltip-content {
              min-width: ${125*t.gridUnit}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${125*t.gridUnit}px;
                h3 {
                  font-size: ${t.typography.sizes.m}px;
                  font-weight: ${t.typography.weights.bold};
                }
                h4 {
                  font-size: ${t.typography.sizes.m}px;
                  font-weight: ${t.typography.weights.bold};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${t.typography.sizes.s}px;
                }
              }
            }
          `,...e})})};function I(e){return(0,E.tZ)(R,{title:Y,...e})}function U(e){return e.includes(d.UD)?e:e.startsWith("Last")?[e,""].join(d.UD):e.startsWith("Next")?["",e].join(d.UD):d.UD}function P(e){const t=U(e.value||""),[a,n]=t.split(d.UD);function l(t,l){"since"===t?e.onChange(`${l}${d.UD}${n}`):e.onChange(`${a}${d.UD}${l}`)}return t!==e.value&&e.onChange(U(e.value||"")),(0,E.BX)(E.HY,{children:[(0,E.BX)("div",{className:"section-title",children:[(0,c.t)("Configure Advanced Time Range "),(0,E.tZ)(I,{placement:"rightBottom",children:(0,E.tZ)("i",{className:"fa fa-info-circle text-muted"})})]}),(0,E.BX)("div",{className:"control-label",children:[(0,c.t)("START (INCLUSIVE)")," ",(0,E.tZ)(B.V,{tooltip:(0,c.t)("Start date included in time range"),placement:"right"})]}),(0,E.tZ)(A.II,{value:a,onChange:e=>l("since",e.target.value)},"since"),(0,E.BX)("div",{className:"control-label",children:[(0,c.t)("END (EXCLUSIVE)")," ",(0,E.tZ)(B.V,{tooltip:(0,c.t)("End date excluded from time range"),placement:"right"})]}),(0,E.tZ)(A.II,{value:n,onChange:e=>l("until",e.target.value)},"until")]})}const _="#45BED6",G=l.iK.div`
  ${({theme:e,isActive:t,isPlaceholder:a})=>i.iv`
    width: 100%;
    height: ${8*e.gridUnit}px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0 ${3*e.gridUnit}px;

    background-color: ${e.colors.grayscale.light5};

    border: 1px solid
      ${t?_:e.colors.grayscale.light2};
    border-radius: ${e.borderRadius}px;

    cursor: pointer;

    transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    :hover,
    :focus {
      border-color: ${_};
    }

    .date-label-content {
      color: ${a?e.colors.grayscale.light1:e.colors.grayscale.dark1};
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex-shrink: 1;
      white-space: nowrap;
    }

    span[role='img'] {
      margin-left: auto;
      padding-left: ${e.gridUnit}px;

      & > span[role='img'] {
        line-height: 0;
      }
    }
  `}
`,j=(0,n.forwardRef)(((e,t)=>{const a=(0,l.Fg)();return(0,E.BX)(G,{...e,tabIndex:0,children:[(0,E.tZ)("span",{className:"date-label-content",ref:t,children:"string"==typeof e.label?(0,c.t)(e.label):e.label}),(0,E.tZ)(p.Z.CalendarOutlined,{iconSize:"s",iconColor:a.colors.grayscale.base})]})})),z=(0,l.iK)(m.Z)`
  width: 272px;
`,K=l.iK.div`
  ${({theme:e})=>i.iv`
    .ant-row {
      margin-top: 8px;
    }

    .ant-input-number {
      width: 100%;
    }

    .ant-picker {
      padding: 4px 17px 4px;
      border-radius: 4px;
      width: 100%;
    }

    .ant-divider-horizontal {
      margin: 16px 0;
    }

    .control-label {
      font-size: 11px;
      font-weight: ${e.typography.weights.medium};
      color: ${e.colors.grayscale.light2};
      line-height: 16px;
      text-transform: uppercase;
      margin: 8px 0;
    }

    .vertical-radio {
      display: block;
      height: 40px;
      line-height: 40px;
    }

    .section-title {
      font-style: normal;
      font-weight: ${e.typography.weights.bold};
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .control-anchor-to {
      margin-top: 16px;
    }

    .control-anchor-to-datetime {
      width: 217px;
    }

    .footer {
      text-align: right;
    }
  `}
`,H=l.iK.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colors.error.base};
  }
`,O=(e,t,a)=>e?(0,E.BX)("div",{children:[t&&(0,E.tZ)("strong",{children:t}),a&&(0,E.tZ)("div",{css:e=>i.iv`
            margin-top: ${e.gridUnit}px;
          `,children:a})]}):a||null;function F(e){var t;const{onChange:a,onOpenPopover:i=b.EI,onClosePopover:m=b.EI,overlayStyle:w="Popover",isOverflowingFilterBar:S=!1}=e,D=(0,C.Ct)(),k=null!=(t=e.value)?t:D,[$,N]=(0,n.useState)(k),[M,A]=(0,n.useState)(!1),L=(0,n.useMemo)((()=>(0,C.X0)(k)),[k]),[B,Y]=(0,n.useState)(L),[R,I]=(0,n.useState)(k),[U,_]=(0,n.useState)(k),[G,F]=(0,n.useState)(!1),[J,q]=(0,n.useState)(k),[W,Q]=(0,n.useState)(k),ee=(0,l.Fg)(),[te,ae]=(0,r.Z)();function ne(){_(k),Y(L),A(!1),m()}(0,n.useEffect)((()=>{if(k===o.vM)return N(o.vM),Q(null),void F(!0);(0,d.z1)(k).then((({value:e,error:t})=>{t?(q(t||""),F(!1),Q(k||null)):("Common"===L||"Calendar"===L||"Current"===L||"No filter"===L?(N(k),Q(O(ae,k,e))):(N(e||""),Q(O(ae,e,k))),F(!0)),I(k),q(e||k)}))}),[L,ae,te,k]),(0,Z.bX)((()=>{if(U===o.vM)return q(o.vM),I(o.vM),void F(!0);R!==U&&(0,d.z1)(U).then((({value:e,error:t})=>{t?(q(t||""),F(!1)):(q(e||""),F(!0)),I(U)}))}),f.M$,[U]);const le=()=>{M?ne():(_(k),Y(L),A(!0),i())},ie=(0,E.BX)(K,{children:[(0,E.tZ)("div",{className:"control-label",children:(0,c.t)("RANGE TYPE")}),(0,E.tZ)(z,{ariaLabel:(0,c.t)("RANGE TYPE"),options:C.un,value:B,onChange:function(e){e===o.vM&&_(o.vM),Y(e)}}),"No filter"!==B&&(0,E.tZ)(v.iz,{}),"Common"===B&&(0,E.tZ)(x,{value:U,onChange:_}),"Calendar"===B&&(0,E.tZ)(T,{value:U,onChange:_}),"Current"===B&&(0,E.tZ)(X,{value:U,onChange:_}),"Advanced"===B&&(0,E.tZ)(P,{value:U,onChange:_}),"Custom"===B&&(0,E.tZ)(V,{value:U,onChange:_}),"No filter"===B&&(0,E.tZ)("div",{}),(0,E.tZ)(v.iz,{}),(0,E.BX)("div",{children:[(0,E.tZ)("div",{className:"section-title",children:(0,c.t)("Actual time range")}),G&&(0,E.tZ)("div",{children:"No filter"===J?(0,c.t)("No filter"):J}),!G&&(0,E.BX)(H,{className:"warning",children:[(0,E.tZ)(p.Z.ErrorSolidSmall,{iconColor:ee.colors.error.base}),(0,E.tZ)("span",{className:"text error",children:J})]})]}),(0,E.tZ)(v.iz,{}),(0,E.BX)("div",{className:"footer",children:[(0,E.tZ)(s.Z,{buttonStyle:"secondary",cta:!0,onClick:ne,children:(0,c.t)("CANCEL")},"cancel"),(0,E.tZ)(s.Z,{buttonStyle:"primary",cta:!0,disabled:!G,onClick:function(){a(U),A(!1),m()},children:(0,c.t)("APPLY")},"apply")]})]}),re=(0,E.BX)(H,{children:[(0,E.tZ)(p.Z.EditAlt,{iconColor:ee.colors.grayscale.base}),(0,E.tZ)("span",{className:"text",children:(0,c.t)("Edit time range")})]}),oe=(0,E.tZ)(y.Z,{placement:"right",trigger:"click",content:ie,title:re,defaultVisible:M,visible:M,onVisibleChange:le,overlayStyle:{width:"600px"},getPopupContainer:e=>S?e.parentNode:document.body,destroyTooltipOnHide:!0,children:(0,E.tZ)(g.u,{placement:"top",title:W,getPopupContainer:e=>e.parentElement,children:(0,E.tZ)(j,{label:$,isActive:M,isPlaceholder:$===o.vM,ref:te})})}),de=(0,E.BX)(E.HY,{children:[(0,E.tZ)(g.u,{placement:"top",title:W,getPopupContainer:e=>e.parentElement,children:(0,E.tZ)(j,{onClick:le,label:$,isActive:M,isPlaceholder:$===o.vM,ref:te})}),(0,E.tZ)(h.default,{title:re,show:M,onHide:le,width:"600px",hideFooter:!0,zIndex:1030,children:ie})]});return(0,E.BX)(E.HY,{children:[(0,E.tZ)(u.Z,{...e}),"Modal"===w?de:oe]})}},101090:(e,t,a)=>{a.d(t,{ZP:()=>n.Z});var n=a(251137);a(561314)},831209:(e,t,a)=>{a.d(t,{MZ:()=>l,XZ:()=>d,YA:()=>r,gT:()=>n,iF:()=>c,jk:()=>o,po:()=>i,r:()=>s});const n="previous calendar week",l="previous calendar month",i="previous calendar year",r="Current day",o="Current week",d="Current month",c="Current year",s="Current quarter"},561314:(e,t,a)=>{a.d(t,{_S:()=>s,LY:()=>y,gn:()=>u,Sm:()=>d,bk:()=>b,MI:()=>c,Zn:()=>C,x9:()=>h,ae:()=>v,un:()=>o,ZU:()=>x,V7:()=>E,KZ:()=>w,kj:()=>m,_d:()=>Z,Ae:()=>g,hj:()=>f,jK:()=>N,DL:()=>k,X0:()=>B,Ct:()=>V});var n=a(730381),l=a.n(n),i=a(61988),r=a(831209);const o=[{value:"Common",label:(0,i.t)("Last")},{value:"Calendar",label:(0,i.t)("Previous")},{value:"Current",label:(0,i.t)("Current")},{value:"Custom",label:(0,i.t)("Custom")},{value:"Advanced",label:(0,i.t)("Advanced")},{value:"No filter",label:(0,i.t)("No filter")}],d=[{value:"Last day",label:(0,i.t)("Last day")},{value:"Last week",label:(0,i.t)("Last week")},{value:"Last month",label:(0,i.t)("Last month")},{value:"Last quarter",label:(0,i.t)("Last quarter")},{value:"Last year",label:(0,i.t)("Last year")}],c=new Set(d.map((({value:e})=>e))),s=[{value:r.gT,label:(0,i.t)("previous calendar week")},{value:r.MZ,label:(0,i.t)("previous calendar month")},{value:r.po,label:(0,i.t)("previous calendar year")}],u=new Set(s.map((({value:e})=>e))),h=[{value:r.YA,label:(0,i.t)("Current day")},{value:r.jk,label:(0,i.t)("Current week")},{value:r.XZ,label:(0,i.t)("Current month")},{value:r.r,label:(0,i.t)("Current quarter")},{value:r.iF,label:(0,i.t)("Current year")}],v=new Set(h.map((({value:e})=>e))),p=[{value:"second",label:e=>(0,i.t)("Seconds %s",e)},{value:"minute",label:e=>(0,i.t)("Minutes %s",e)},{value:"hour",label:e=>(0,i.t)("Hours %s",e)},{value:"day",label:e=>(0,i.t)("Days %s",e)},{value:"week",label:e=>(0,i.t)("Weeks %s",e)},{value:"month",label:e=>(0,i.t)("Months %s",e)},{value:"quarter",label:e=>(0,i.t)("Quarters %s",e)},{value:"year",label:e=>(0,i.t)("Years %s",e)}],m=p.map((e=>({value:e.value,label:e.label((0,i.t)("Before"))}))),g=p.map((e=>({value:e.value,label:e.label((0,i.t)("After"))}))),Z=[{value:"specific",label:(0,i.t)("Specific Date/Time")},{value:"relative",label:(0,i.t)("Relative Date/Time")},{value:"now",label:(0,i.t)("Now")},{value:"today",label:(0,i.t)("Midnight")}],f=Z.slice(),b=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),y=new Set([r.gT,r.MZ,r.po]),C=new Set([r.YA,r.jk,r.XZ,r.r,r.iF]),w="YYYY-MM-DD[T]HH:mm:ss",E=(l()().utc().startOf("day").subtract(7,"days").format(w),l()().utc().startOf("day").format(w)),x={en:"en_US",fr:"fr_FR",es:"es_ES",it:"it_IT",zh:"zh_CN",ja:"ja_JP",de:"de_DE",pt:"pt_PT",pt_BR:"pt_BR",ru:"ru_RU",ko:"ko_KR",sk:"sk_SK",sl:"sl_SI",nl:"nl_NL"};var S;!function(e){e.CommonFrame="common-frame",e.ModalOverlay="modal-overlay",e.PopoverOverlay="time-range-trigger",e.NoFilter="no-filter",e.CancelButton="cancel-button",e.ApplyButton="date-filter-control__apply-button"}(S||(S={}));const T=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,X=String.raw`(?:TODAY|NOW)`,D=(RegExp(String.raw`^${T}$|^${X}$`,"i"),["specific","today","now"]),k=e=>"now"===e?l()().utc().startOf("second"):"today"===e?l()().utc().startOf("day"):l()(e),$=e=>k(e).format(w),N=e=>{const{sinceDatetime:t,sinceMode:a,sinceGrain:n,sinceGrainValue:l,untilDatetime:i,untilMode:r,untilGrain:o,untilGrainValue:d,anchorValue:c}={...e};if(D.includes(a)&&D.includes(r))return`${"specific"===a?$(t):a} : ${"specific"===r?$(i):r}`;if(D.includes(a)&&"relative"===r){const e="specific"===a?$(t):a;return`${e} : DATEADD(DATETIME("${e}"), ${d}, ${o})`}if("relative"===a&&D.includes(r)){const e="specific"===r?$(i):r;return`DATEADD(DATETIME("${e}"), ${-Math.abs(l)}, ${n}) : ${e}`}return`DATEADD(DATETIME("${c}"), ${-Math.abs(l)}, ${n}) : DATEADD(DATETIME("${c}"), ${d}, ${o})`};var M=a(5364),A=a(891988),L=a(828216);const B=e=>c.has(e)?"Common":u.has(e)?"Calendar":v.has(e)?"Current":e===M.vM?"No filter":(0,A.c)(e).matchedFlag?"Custom":"Advanced";function V(){var e;return null!=(e=(0,L.v9)((e=>{var t,a;return null==e||null==(t=e.common)||null==(a=t.conf)?void 0:a.DEFAULT_TIME_FILTER})))?e:M.vM}}}]);
//# sourceMappingURL=08eeee0faf0a3be5b8b3.chunk.js.map