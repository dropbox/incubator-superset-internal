"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3375],{62276:(t,e,a)=>{a.d(e,{S:()=>o,M:()=>r});var n=a(11448),l=a(51995);const i=n.Z.RangePicker,o=(0,l.iK)(i)`
  border-radius: ${({theme:t})=>t.gridUnit}px;
`,r=n.Z},76697:(t,e,a)=>{a.d(e,{ZP:()=>n});const n=a(19181).Z},82342:(t,e,a)=>{a.d(e,{Z:()=>d}),a(67294);var n=a(51995),l=a(11965),i=a(61988),o=a(9882),r=a(58593),s=a(49238),u=a(70163),c={name:"8wgs83",styles:"margin-bottom:0;position:relative"};const d=({name:t,label:e,description:a,validationErrors:d=[],renderTrigger:p=!1,rightNode:m,leftNode:h,onClick:g,hovered:Z=!1,tooltipOnClick:v=(()=>{}),warning:f,danger:y})=>{const{gridUnit:b,colors:C}=(0,n.Fg)();if(!e)return null;const w=(null==d?void 0:d.length)>0?"text-danger":"";return(0,l.tZ)("div",{className:"ControlHeader"},(0,l.tZ)("div",{className:"pull-left"},(0,l.tZ)(s.lX,{css:c},h&&(0,l.tZ)("span",null,h),(0,l.tZ)("span",{role:"button",tabIndex:0,onClick:g,className:w,style:{cursor:g?"pointer":""}},e)," ",f&&(0,l.tZ)("span",null,(0,l.tZ)(r.u,{id:"error-tooltip",placement:"top",title:f},(0,l.tZ)(u.Z.AlertSolid,{iconColor:C.alert.base,iconSize:"s"}))," "),y&&(0,l.tZ)("span",null,(0,l.tZ)(r.u,{id:"error-tooltip",placement:"top",title:y},(0,l.tZ)(u.Z.ErrorSolid,{iconColor:C.error.base,iconSize:"s"}))," "),(null==d?void 0:d.length)>0&&(0,l.tZ)("span",null,(0,l.tZ)(r.u,{id:"error-tooltip",placement:"top",title:null==d?void 0:d.join(" ")},(0,l.tZ)(u.Z.ErrorSolid,{iconColor:C.error.base,iconSize:"s"}))," "),Z?(0,l.tZ)("span",{css:()=>l.iv`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${b}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `},a&&(0,l.tZ)("span",null,(0,l.tZ)(o.V,{label:(0,i.t)("description"),tooltip:a,placement:"top",onClick:v})," "),p&&(0,l.tZ)("span",null,(0,l.tZ)(o.V,{label:(0,i.t)("bolt"),tooltip:(0,i.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," ")):null)),m&&(0,l.tZ)("div",{className:"pull-right"},m),(0,l.tZ)("div",{className:"clearfix"}))}},27845:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(5872),l=a.n(n),i=a(67294),o=a(76697),r=a(11965);const s=t=>{var e,a;const n=null==(e=window)?void 0:e.innerHeight,l=null==(a=t.getBoundingClientRect())?void 0:a.top;return n&&l?l/n:0},u=({getPopupContainer:t,getVisibilityRatio:e=s,...a})=>{const n=(0,i.useRef)(),[u,c]=i.useState("right"),d=(0,i.useCallback)((()=>{const t=e(n.current);c(t<.35?"rightTop":t>.65?"rightBottom":"right")}),[e]),p=(0,i.useCallback)((t=>{n.current&&t&&d();const e=null==(a=document.getElementById("controlSections"))?void 0:a.parentElement;var a;e&&(e.style.overflowY=t?"hidden":"auto")}),[d]),m=(0,i.useCallback)((e=>(n.current=e,setTimeout((()=>{d()}),0),(null==t?void 0:t(e))||document.body)),[d,t]),h=(0,i.useCallback)((t=>{void 0===a.visible&&p(t),null==a.onVisibleChange||a.onVisibleChange(t)}),[a,p]);return(0,i.useEffect)((()=>{void 0!==a.visible&&p(a.visible)}),[a.visible,p]),(0,r.tZ)(o.ZP,l()({},a,{arrowPointAtCenter:!0,placement:u,onVisibleChange:h,getPopupContainer:m}))}},73375:(t,e,a)=>{a.d(e,{Z:()=>St});var n=a(5872),l=a.n(n),i=a(67294),o=a(15926),r=a.n(o),s=a(31069),u=a(51995),c=a(11965),d=a(61988),p=a(30381),m=a.n(p);const h=" : ",g=(t,e)=>t.replace("T00:00:00","")||(e?"-∞":"∞"),Z=(t,e)=>{const a=t.split(h);if(1===a.length)return t;const n=(e||["unknown","unknown"]).map((t=>"inclusive"===t?"≤":"<"));return`${g(a[0],!0)} ${n[0]} col ${n[1]} ${g(a[1])}`},v="previous calendar week",f="previous calendar month",y="previous calendar year",b=[{value:"Common",label:(0,d.t)("Last")},{value:"Calendar",label:(0,d.t)("Previous")},{value:"Custom",label:(0,d.t)("Custom")},{value:"Advanced",label:(0,d.t)("Advanced")},{value:"No filter",label:(0,d.t)("No filter")}],C=[{value:"Last day",label:(0,d.t)("last day")},{value:"Last week",label:(0,d.t)("last week")},{value:"Last month",label:(0,d.t)("last month")},{value:"Last quarter",label:(0,d.t)("last quarter")},{value:"Last year",label:(0,d.t)("last year")}],w=new Set(C.map((({value:t})=>t))),E=[{value:v,label:(0,d.t)("previous calendar week")},{value:f,label:(0,d.t)("previous calendar month")},{value:y,label:(0,d.t)("previous calendar year")}],D=new Set(E.map((({value:t})=>t))),x=[{value:"second",label:t=>(0,d.t)("Seconds %s",t)},{value:"minute",label:t=>(0,d.t)("Minutes %s",t)},{value:"hour",label:t=>(0,d.t)("Hours %s",t)},{value:"day",label:t=>(0,d.t)("Days %s",t)},{value:"week",label:t=>(0,d.t)("Weeks %s",t)},{value:"month",label:t=>(0,d.t)("Months %s",t)},{value:"quarter",label:t=>(0,d.t)("Quarters %s",t)},{value:"year",label:t=>(0,d.t)("Years %s",t)}],N=x.map((t=>({value:t.value,label:t.label((0,d.t)("Before"))}))),S=x.map((t=>({value:t.value,label:t.label((0,d.t)("After"))}))),$=[{value:"specific",label:(0,d.t)("Specific Date/Time")},{value:"relative",label:(0,d.t)("Relative Date/Time")},{value:"now",label:(0,d.t)("Now")},{value:"today",label:(0,d.t)("Midnight")}],T=$.slice(),M=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),V=new Set([v,f,y]),A="YYYY-MM-DD[T]HH:mm:ss",k=m()().utc().startOf("day").subtract(7,"days").format(A),G=m()().utc().startOf("day").format(A),R=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,I=String.raw`TODAY|NOW`,L=String.raw`[+-]?[1-9][0-9]*`,Y=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,X=RegExp(String.raw`^DATEADD\(DATETIME\("(${R}|${I})"\),\s(${L}),\s(${Y})\)$`,"i"),P=RegExp(String.raw`^${R}$|^${I}$`,"i"),U=["now","today"],z={sinceDatetime:k,sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:G,untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},F=["specific","today","now"],O=t=>"now"===t?m()().utc().startOf("second"):"today"===t?m()().utc().startOf("day"):m()(t),q=t=>O(t).format(A),H=t=>{const e=t.split(h);if(2===e.length){const[t,a]=e;if(P.test(t)&&P.test(a)){const e=U.includes(t)?t:"specific",n=U.includes(a)?a:"specific";return{customRange:{...z,sinceDatetime:t,untilDatetime:a,sinceMode:e,untilMode:n},matchedFlag:!0}}const n=t.match(X);if(n&&P.test(a)&&t.includes(a)){const[t,e,l]=n.slice(1),i=U.includes(a)?a:"specific";return{customRange:{...z,sinceGrain:l,sinceGrainValue:parseInt(e,10),sinceDatetime:t,untilDatetime:t,sinceMode:"relative",untilMode:i},matchedFlag:!0}}const l=a.match(X);if(P.test(t)&&l&&a.includes(t)){const[e,a,n]=[...l.slice(1)],i=U.includes(t)?t:"specific";return{customRange:{...z,untilGrain:n,untilGrainValue:parseInt(a,10),sinceDatetime:e,untilDatetime:e,untilMode:"relative",sinceMode:i},matchedFlag:!0}}if(n&&l){const[t,e,a]=[...n.slice(1)],[i,o,r]=[...l.slice(1)];if(t===i)return{customRange:{...z,sinceGrain:a,sinceGrainValue:parseInt(e,10),sinceDatetime:t,untilGrain:r,untilGrainValue:parseInt(o,10),untilDatetime:i,anchorValue:t,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===t?"now":"specific"},matchedFlag:!0}}}return{customRange:z,matchedFlag:!1}},J=t=>{const{sinceDatetime:e,sinceMode:a,sinceGrain:n,sinceGrainValue:l,untilDatetime:i,untilMode:o,untilGrain:r,untilGrainValue:s,anchorValue:u}={...t};if(F.includes(a)&&F.includes(o))return`${"specific"===a?q(e):a} : ${"specific"===o?q(i):o}`;if(F.includes(a)&&"relative"===o){const t="specific"===a?q(e):a;return`${t} : DATEADD(DATETIME("${t}"), ${s}, ${r})`}if("relative"===a&&F.includes(o)){const t="specific"===o?q(i):o;return`DATEADD(DATETIME("${t}"), ${-Math.abs(l)}, ${n}) : ${t}`}return`DATEADD(DATETIME("${u}"), ${-Math.abs(l)}, ${n}) : DATEADD(DATETIME("${u}"), ${s}, ${r})`};var K=a(98286),W=a(35932),j=a(82342),B=a(37921),Q=a(4715),_=a(70163),tt=a(24554),et=a(58593),at=a(69856),nt=a(12515),lt=a(27600),it=a(53350),ot=a(54076),rt=a(27845),st=a(87183);function ut(t){let e="Last week";return M.has(t.value)?e=t.value:t.onChange(e),(0,c.tZ)(i.Fragment,null,(0,c.tZ)("div",{className:"section-title"},(0,d.t)("Configure Time Range: Last...")),(0,c.tZ)(st.Y.Group,{value:e,onChange:e=>t.onChange(e.target.value)},C.map((({value:t,label:e})=>(0,c.tZ)(st.Y,{key:t,value:t,className:"vertical-radio"},e)))))}function ct({onChange:t,value:e}){return(0,i.useEffect)((()=>{V.has(e)||t(v)}),[t,e]),V.has(e)?(0,c.tZ)(i.Fragment,null,(0,c.tZ)("div",{className:"section-title"},(0,d.t)("Configure Time Range: Previous...")),(0,c.tZ)(st.Y.Group,{value:e,onChange:e=>t(e.target.value)},E.map((({value:t,label:e})=>(0,c.tZ)(st.Y,{key:t,value:t,className:"vertical-radio"},e))))):null}var dt=a(93754),pt=a.n(dt),mt=a(9875),ht=a(62276),gt=a(9882);function Zt(t){const{customRange:e,matchedFlag:a}=H(t.value);a||t.onChange(J(e));const{sinceDatetime:n,sinceMode:l,sinceGrain:i,sinceGrainValue:o,untilDatetime:r,untilMode:s,untilGrain:u,untilGrainValue:p,anchorValue:m,anchorMode:h}={...e};function g(a,n){t.onChange(J({...e,[a]:n}))}function Z(a,n){pt()(n)&&n>0&&t.onChange(J({...e,[a]:n}))}return(0,c.tZ)("div",null,(0,c.tZ)("div",{className:"section-title"},(0,d.t)("Configure custom time range")),(0,c.tZ)(Q.X2,{gutter:24},(0,c.tZ)(Q.JX,{span:12},(0,c.tZ)("div",{className:"control-label"},(0,d.t)("START (INCLUSIVE)")," ",(0,c.tZ)(gt.V,{tooltip:(0,d.t)("Start date included in time range"),placement:"right"})),(0,c.tZ)(tt.ZP,{ariaLabel:(0,d.t)("START (INCLUSIVE)"),options:$,value:l,onChange:t=>g("sinceMode",t)}),"specific"===l&&(0,c.tZ)(Q.X2,null,(0,c.tZ)(ht.M,{showTime:!0,defaultValue:O(n),onChange:t=>g("sinceDatetime",t.format(A)),allowClear:!1})),"relative"===l&&(0,c.tZ)(Q.X2,{gutter:8},(0,c.tZ)(Q.JX,{span:11},(0,c.tZ)(mt.Rn,{placeholder:(0,d.t)("Relative quantity"),value:Math.abs(o),min:1,defaultValue:1,onChange:t=>Z("sinceGrainValue",t||1),onStep:t=>Z("sinceGrainValue",t||1)})),(0,c.tZ)(Q.JX,{span:13},(0,c.tZ)(tt.ZP,{ariaLabel:(0,d.t)("Relative period"),options:N,value:i,onChange:t=>g("sinceGrain",t)})))),(0,c.tZ)(Q.JX,{span:12},(0,c.tZ)("div",{className:"control-label"},(0,d.t)("END (EXCLUSIVE)")," ",(0,c.tZ)(gt.V,{tooltip:(0,d.t)("End date excluded from time range"),placement:"right"})),(0,c.tZ)(tt.ZP,{ariaLabel:(0,d.t)("END (EXCLUSIVE)"),options:T,value:s,onChange:t=>g("untilMode",t)}),"specific"===s&&(0,c.tZ)(Q.X2,null,(0,c.tZ)(ht.M,{showTime:!0,defaultValue:O(r),onChange:t=>g("untilDatetime",t.format(A)),allowClear:!1})),"relative"===s&&(0,c.tZ)(Q.X2,{gutter:8},(0,c.tZ)(Q.JX,{span:11},(0,c.tZ)(mt.Rn,{placeholder:(0,d.t)("Relative quantity"),value:p,min:1,defaultValue:1,onChange:t=>Z("untilGrainValue",t||1),onStep:t=>Z("untilGrainValue",t||1)})),(0,c.tZ)(Q.JX,{span:13},(0,c.tZ)(tt.ZP,{ariaLabel:(0,d.t)("Relative period"),options:S,value:u,onChange:t=>g("untilGrain",t)}))))),"relative"===l&&"relative"===s&&(0,c.tZ)("div",{className:"control-anchor-to"},(0,c.tZ)("div",{className:"control-label"},(0,d.t)("Anchor to")),(0,c.tZ)(Q.X2,{align:"middle"},(0,c.tZ)(Q.JX,null,(0,c.tZ)(st.Y.Group,{onChange:function(a){const n=a.target.value;"now"===n?t.onChange(J({...e,anchorValue:"now",anchorMode:n})):t.onChange(J({...e,anchorValue:G,anchorMode:n}))},defaultValue:"now",value:h},(0,c.tZ)(st.Y,{key:"now",value:"now"},(0,d.t)("NOW")),(0,c.tZ)(st.Y,{key:"specific",value:"specific"},(0,d.t)("Date/Time")))),"now"!==h&&(0,c.tZ)(Q.JX,null,(0,c.tZ)(ht.M,{showTime:!0,defaultValue:O(m),onChange:t=>g("anchorValue",t.format(A)),allowClear:!1,className:"control-anchor-to-datetime"})))))}const vt=(0,c.tZ)(i.Fragment,null,(0,c.tZ)("div",null,(0,c.tZ)("h3",null,"DATETIME"),(0,c.tZ)("p",null,(0,d.t)("Return to specific datetime.")),(0,c.tZ)("h4",null,(0,d.t)("Syntax")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,"datetime([string])")),(0,c.tZ)("h4",null,(0,d.t)("Example")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'))),(0,c.tZ)("div",null,(0,c.tZ)("h3",null,"DATEADD"),(0,c.tZ)("p",null,(0,d.t)("Moves the given set of dates by a specified interval.")),(0,c.tZ)("h4",null,(0,d.t)("Syntax")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)")),(0,c.tZ)("h4",null,(0,d.t)("Example")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'))),(0,c.tZ)("div",null,(0,c.tZ)("h3",null,"DATETRUNC"),(0,c.tZ)("p",null,(0,d.t)("Truncates the specified date to the accuracy specified by the date unit.")),(0,c.tZ)("h4",null,(0,d.t)("Syntax")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,"datetrunc([datetime], [dateunit])\ndateunit = (year | quarter | month | week)")),(0,c.tZ)("h4",null,(0,d.t)("Example")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'))),(0,c.tZ)("div",null,(0,c.tZ)("h3",null,"LASTDAY"),(0,c.tZ)("p",null,(0,d.t)("Get the last date by the date unit.")),(0,c.tZ)("h4",null,(0,d.t)("Syntax")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,"lastday([datetime], [dateunit])\ndateunit = (year | month | week)")),(0,c.tZ)("h4",null,(0,d.t)("Example")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,'lastday(datetime("today"), month)'))),(0,c.tZ)("div",null,(0,c.tZ)("h3",null,"HOLIDAY"),(0,c.tZ)("p",null,(0,d.t)("Get the specify date for the holiday")),(0,c.tZ)("h4",null,(0,d.t)("Syntax")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])")),(0,c.tZ)("h4",null,(0,d.t)("Example")),(0,c.tZ)("pre",null,(0,c.tZ)("code",null,'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")')))),ft=t=>{const e=(0,u.Fg)();return(0,c.tZ)(c.ms,null,(({css:a})=>(0,c.tZ)(et.u,l()({overlayClassName:a`
            .ant-tooltip-content {
              min-width: ${125*e.gridUnit}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${125*e.gridUnit}px;
                h3 {
                  font-size: ${e.typography.sizes.m}px;
                  font-weight: ${e.typography.weights.bold};
                }
                h4 {
                  font-size: ${e.typography.sizes.m}px;
                  font-weight: ${e.typography.weights.bold};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${e.typography.sizes.s}px;
                }
              }
            }
          `},t))))};function yt(t){return(0,c.tZ)(ft,l()({title:vt},t))}function bt(t){const e=l(t.value||""),[a,n]=e.split(h);function l(t){return t.includes(h)?t:t.startsWith("Last")?[t,""].join(h):t.startsWith("Next")?["",t].join(h):h}function o(e,l){"since"===e?t.onChange(`${l} : ${n}`):t.onChange(`${a} : ${l}`)}return e!==t.value&&t.onChange(l(t.value||"")),(0,c.tZ)(i.Fragment,null,(0,c.tZ)("div",{className:"section-title"},(0,d.t)("Configure Advanced Time Range "),(0,c.tZ)(yt,{placement:"rightBottom"},(0,c.tZ)("i",{className:"fa fa-info-circle text-muted"}))),(0,c.tZ)("div",{className:"control-label"},(0,d.t)("START (INCLUSIVE)")," ",(0,c.tZ)(gt.V,{tooltip:(0,d.t)("Start date included in time range"),placement:"right"})),(0,c.tZ)(mt.II,{key:"since",value:a,onChange:t=>o("since",t.target.value)}),(0,c.tZ)("div",{className:"control-label"},(0,d.t)("END (EXCLUSIVE)")," ",(0,c.tZ)(gt.V,{tooltip:(0,d.t)("End date excluded from time range"),placement:"right"})),(0,c.tZ)(mt.II,{key:"until",value:n,onChange:t=>o("until",t.target.value)}))}const Ct=async(t,e)=>{const a=`/api/v1/time_range/?q=${r().encode_uri(t)}`;try{var n,l,i,o;const t=await s.Z.get({endpoint:a}),r=`${(null==t||null==(n=t.json)||null==(l=n.result)?void 0:l.since)||""} : ${(null==t||null==(i=t.json)||null==(o=i.result)?void 0:o.until)||""}`;return{value:Z(r,e)}}catch(t){const e=await(0,K.O)(t);return{error:e.message||e.error}}},wt=(0,u.iK)(rt.Z)``,Et=(0,u.iK)(tt.ZP)`
  width: 272px;
`,Dt=u.iK.div`
  ${({theme:t})=>c.iv`
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
      font-weight: ${t.typography.weights.medium};
      color: #b2b2b2;
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
      font-weight: ${t.typography.weights.bold};
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
`,xt=u.iK.span`
  span {
    margin-right: ${({theme:t})=>2*t.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:t})=>t.colors.error.base};
  }
`,Nt=(0,it.Q)("date-filter-control");function St(t){const{value:e=at.X5,endpoints:a,onChange:n,type:o,onOpenPopover:r=ot.EI,onClosePopover:s=ot.EI}=t,[p,m]=(0,i.useState)(e),[h,g]=(0,i.useState)(!1),Z=(0,i.useMemo)((()=>{return t=e,w.has(t)?"Common":D.has(t)?"Calendar":"No filter"===t?"No filter":H(t).matchedFlag?"Custom":"Advanced";var t}),[e]),[v,f]=(0,i.useState)(Z),[y,C]=(0,i.useState)(e),[E,x]=(0,i.useState)(e),[N,S]=(0,i.useState)(!1),[$,T]=(0,i.useState)(e),[M,V]=(0,i.useState)(e);function A(){x(e),f(Z),g(!1)}(0,i.useEffect)((()=>{Ct(e,a).then((({value:t,error:a})=>{a?(T(a||""),S(!1),V(e||"")):("Common"===Z||"Calendar"===Z||"No filter"===Z?(m(e),V("error"===o?(0,d.t)("Default value is required"):t||"")):(m(t||""),V(e||"")),S(!0)),C(e)}))}),[e]),(0,nt.bX)((()=>{y!==E&&Ct(E,a).then((({value:t,error:e})=>{e?(T(e||""),S(!1)):(T(t||""),S(!0)),C(E)}))}),lt.M$,[E]);const k=(0,u.Fg)(),G=(0,c.tZ)(Dt,null,(0,c.tZ)("div",{className:"control-label"},(0,d.t)("RANGE TYPE")),(0,c.tZ)(Et,{ariaLabel:(0,d.t)("RANGE TYPE"),options:b,value:v,onChange:function(t){"No filter"===t&&x("No filter"),f(t)}}),"No filter"!==v&&(0,c.tZ)(Q.iz,null),"Common"===v&&(0,c.tZ)(ut,{value:E,onChange:x}),"Calendar"===v&&(0,c.tZ)(ct,{value:E,onChange:x}),"Advanced"===v&&(0,c.tZ)(bt,{value:E,onChange:x}),"Custom"===v&&(0,c.tZ)(Zt,{value:E,onChange:x}),"No filter"===v&&(0,c.tZ)("div",null),(0,c.tZ)(Q.iz,null),(0,c.tZ)("div",null,(0,c.tZ)("div",{className:"section-title"},(0,d.t)("Actual time range")),N&&(0,c.tZ)("div",null,$),!N&&(0,c.tZ)(xt,{className:"warning"},(0,c.tZ)(_.Z.ErrorSolidSmall,{iconColor:k.colors.error.base}),(0,c.tZ)("span",{className:"text error"},$))),(0,c.tZ)(Q.iz,null),(0,c.tZ)("div",{className:"footer"},(0,c.tZ)(W.Z,{buttonStyle:"secondary",cta:!0,key:"cancel",onClick:A},(0,d.t)("CANCEL")),(0,c.tZ)(W.Z,l()({buttonStyle:"primary",cta:!0,disabled:!N,key:"apply",onClick:function(){n(E),g(!1)}},Nt("apply-button")),(0,d.t)("APPLY")))),R=(0,c.tZ)(xt,null,(0,c.tZ)(_.Z.EditAlt,{iconColor:k.colors.grayscale.base}),(0,c.tZ)("span",{className:"text"},(0,d.t)("Edit time range")));return(0,c.tZ)(i.Fragment,null,(0,c.tZ)(j.Z,t),(0,c.tZ)(wt,{placement:"right",trigger:"click",content:G,title:R,defaultVisible:h,visible:h,onVisibleChange:()=>{h?(A(),s()):(x(e),f(Z),g(!0),r())},overlayStyle:{width:"600px"}},(0,c.tZ)(et.u,{placement:"top",title:M},(0,c.tZ)(B.Z,{className:"pointer"},p))))}},53350:(t,e,a)=>{a.d(e,{Q:()=>n});const n=(t,e=!1)=>(a,n=!1)=>{const l=n||e;if(!a&&t)return l?t:{"data-test":t};if(a&&!t)return l?a:{"data-test":a};if(!a&&!t)return console.warn('testWithId function has missed "prefix" and "id" params'),l?"":{"data-test":""};const i=`${t}__${a}`;return l?i:{"data-test":i}}}}]);