"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3375],{93011:(t,e,a)=>{a.d(e,{Z:()=>g});var n=a(67294),l=a(45697),i=a.n(l),r=a(11965),o=a(60650),s=a(68135),u=a(88186),c=a(58593),d=a(49238),p=a(38097);const h={name:i().string,label:i().node,description:i().node,validationErrors:i().array,renderTrigger:i().bool,rightNode:i().node,leftNode:i().node,onClick:i().func,hovered:i().bool,tooltipOnClick:i().func,warning:i().string,danger:i().string};var m={name:"8wgs83",styles:"margin-bottom:0;position:relative"};class Z extends n.Component{renderOptionalIcons(){return this.props.hovered?(0,r.tZ)("span",{css:t=>r.iv`
            position: absolute;
            top: 50%;
            right: 0;
            padding-left: ${t.gridUnit}px;
            transform: translate(100%, -50%);
            white-space: nowrap;
          `},this.props.description&&(0,r.tZ)("span",null,(0,r.tZ)(u.V,{label:(0,o.t)("description"),tooltip:this.props.description,placement:"top",onClick:this.props.tooltipOnClick})," "),this.props.renderTrigger&&(0,r.tZ)("span",null,(0,r.tZ)(u.V,{label:(0,o.t)("bolt"),tooltip:(0,o.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," ")):null}render(){if(!this.props.label)return null;const t=this.props.validationErrors.length>0?"text-danger":"",{theme:e}=this.props;return(0,r.tZ)("div",{className:"ControlHeader"},(0,r.tZ)("div",{className:"pull-left"},(0,r.tZ)(d.lX,{css:m},this.props.leftNode&&(0,r.tZ)("span",null,this.props.leftNode),(0,r.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onClick,className:t,style:{cursor:this.props.onClick?"pointer":""}},this.props.label)," ",this.props.warning&&(0,r.tZ)("span",null,(0,r.tZ)(c.u,{id:"error-tooltip",placement:"top",title:this.props.warning},(0,r.tZ)(p.Z.AlertSolid,{iconColor:e.colors.alert.base,iconSize:"s"}))," "),this.props.danger&&(0,r.tZ)("span",null,(0,r.tZ)(c.u,{id:"error-tooltip",placement:"top",title:this.props.danger},(0,r.tZ)(p.Z.ErrorSolid,{iconColor:e.colors.error.base,iconSize:"s"}))," "),this.props.validationErrors.length>0&&(0,r.tZ)("span",null,(0,r.tZ)(c.u,{id:"error-tooltip",placement:"top",title:this.props.validationErrors.join(" ")},(0,r.tZ)(p.Z.ErrorSolid,{iconColor:e.colors.error.base,iconSize:"s"}))," "),this.renderOptionalIcons())),this.props.rightNode&&(0,r.tZ)("div",{className:"pull-right"},this.props.rightNode),(0,r.tZ)("div",{className:"clearfix"}))}}Z.propTypes=h,Z.defaultProps={validationErrors:[],renderTrigger:!1,hovered:!1,name:void 0};const g=(0,s.b)(Z)},62276:(t,e,a)=>{a.d(e,{S:()=>r,M:()=>o});var n=a(11448),l=a(37840);const i=n.Z.RangePicker,r=(0,l.iK)(i)`
  border-radius: ${({theme:t})=>t.gridUnit}px;
`,o=n.Z},76697:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a(19181).Z},73375:(t,e,a)=>{a.d(e,{Z:()=>xt});var n=a(5872),l=a.n(n),i=a(67294),r=a(15926),o=a.n(r),s=a(21173),u=a(37840),c=a(60650),d=a(30381),p=a.n(d);a(15306);const h=" : ",m=(t,e)=>t.replace("T00:00:00","")||(e?"-∞":"∞"),Z=(t,e)=>{const a=t.split(h);if(1===a.length)return t;const n=(e||["unknown","unknown"]).map((t=>"inclusive"===t?"≤":"<"));return`${m(a[0],!0)} ${n[0]} col ${n[1]} ${m(a[1])}`},g="previous calendar week",v="previous calendar month",f="previous calendar year",y=[{value:"Common",label:(0,c.t)("Last"),order:0},{value:"Calendar",label:(0,c.t)("Previous"),order:1},{value:"Custom",label:(0,c.t)("Custom"),order:2},{value:"Advanced",label:(0,c.t)("Advanced"),order:3},{value:"No filter",label:(0,c.t)("No filter"),order:4}],b=[{value:"Last day",label:(0,c.t)("last day"),order:0},{value:"Last week",label:(0,c.t)("last week"),order:1},{value:"Last month",label:(0,c.t)("last month"),order:2},{value:"Last quarter",label:(0,c.t)("last quarter"),order:3},{value:"Last year",label:(0,c.t)("last year"),order:4}],C=new Set(b.map((({value:t})=>t))),w=[{value:g,label:(0,c.t)("previous calendar week"),order:0},{value:v,label:(0,c.t)("previous calendar month"),order:1},{value:f,label:(0,c.t)("previous calendar year"),order:2}],$=new Set(w.map((({value:t})=>t))),E=[{value:"second",label:t=>`${(0,c.t)("Seconds")} ${t}`},{value:"minute",label:t=>`${(0,c.t)("Minutes")} ${t}`},{value:"hour",label:t=>`${(0,c.t)("Hours")} ${t}`},{value:"day",label:t=>`${(0,c.t)("Days")} ${t}`},{value:"week",label:t=>`${(0,c.t)("Weeks")} ${t}`},{value:"month",label:t=>`${(0,c.t)("Months")} ${t}`},{value:"quarter",label:t=>`${(0,c.t)("Quarters")} ${t}`},{value:"year",label:t=>`${(0,c.t)("Years")} ${t}`}],N=E.map(((t,e)=>({value:t.value,label:t.label((0,c.t)("Before")),order:e}))),x=E.map(((t,e)=>({value:t.value,label:t.label((0,c.t)("After")),order:e}))),D=[{value:"specific",label:(0,c.t)("Specific Date/Time"),order:0},{value:"relative",label:(0,c.t)("Relative Date/Time"),order:1},{value:"now",label:(0,c.t)("Now"),order:2},{value:"today",label:(0,c.t)("Midnight"),order:3}],S=D.slice(),T=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),M=new Set([g,v,f]),k="YYYY-MM-DD[T]HH:mm:ss",A=p()().utc().startOf("day").subtract(7,"days").format(k),V=p()().utc().startOf("day").format(k),G=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,R=String.raw`TODAY|NOW`,I=String.raw`[+-]?[1-9][0-9]*`,L=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,X=RegExp(String.raw`^DATEADD\(DATETIME\("(${G}|${R})"\),\s(${I}),\s(${L})\)$`,"i"),Y=RegExp(String.raw`^${G}$|^${R}$`,"i"),O=["now","today"],U={sinceDatetime:A,sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:V,untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},z=["specific","today","now"],F=t=>"now"===t?p()().utc().startOf("second"):"today"===t?p()().utc().startOf("day"):p()(t),q=t=>F(t).format(k),J=t=>{const e=t.split(h);if(2===e.length){const[t,a]=e;if(Y.test(t)&&Y.test(a)){const e=O.includes(t)?t:"specific",n=O.includes(a)?a:"specific";return{customRange:{...U,sinceDatetime:t,untilDatetime:a,sinceMode:e,untilMode:n},matchedFlag:!0}}const n=t.match(X);if(n&&Y.test(a)&&t.includes(a)){const[t,e,l]=n.slice(1),i=O.includes(a)?a:"specific";return{customRange:{...U,sinceGrain:l,sinceGrainValue:parseInt(e,10),sinceDatetime:t,untilDatetime:t,sinceMode:"relative",untilMode:i},matchedFlag:!0}}const l=a.match(X);if(Y.test(t)&&l&&a.includes(t)){const[e,a,n]=[...l.slice(1)],i=O.includes(t)?t:"specific";return{customRange:{...U,untilGrain:n,untilGrainValue:parseInt(a,10),sinceDatetime:e,untilDatetime:e,untilMode:"relative",sinceMode:i},matchedFlag:!0}}if(n&&l){const[t,e,a]=[...n.slice(1)],[i,r,o]=[...l.slice(1)];if(t===i)return{customRange:{...U,sinceGrain:a,sinceGrainValue:parseInt(e,10),sinceDatetime:t,untilGrain:o,untilGrainValue:parseInt(r,10),untilDatetime:i,anchorValue:t,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===t?"now":"specific"},matchedFlag:!0}}}return{customRange:U,matchedFlag:!1}},P=t=>{const{sinceDatetime:e,sinceMode:a,sinceGrain:n,sinceGrainValue:l,untilDatetime:i,untilMode:r,untilGrain:o,untilGrainValue:s,anchorValue:u}={...t};if(z.includes(a)&&z.includes(r))return`${"specific"===a?q(e):a} : ${"specific"===r?q(i):r}`;if(z.includes(a)&&"relative"===r){const t="specific"===a?q(e):a;return`${t} : DATEADD(DATETIME("${t}"), ${s}, ${o})`}if("relative"===a&&z.includes(r)){const t="specific"===r?q(i):r;return`DATEADD(DATETIME("${t}"), ${-Math.abs(l)}, ${n}) : ${t}`}return`DATEADD(DATETIME("${u}"), ${-Math.abs(l)}, ${n}) : DATEADD(DATETIME("${u}"), ${s}, ${o})`};var H=a(98286),K=a(35932),W=a(93011),j=a(37921),Q=a(76697),_=a(82191),B=a(38097),tt=a(81315),et=a(58593),at=a(69856),nt=a(12515),lt=a(27600),it=a(53350),rt=a(87183),ot=a(11965);function st(t){let e="Last week";return T.has(t.value)?e=t.value:t.onChange(e),(0,ot.tZ)(i.Fragment,null,(0,ot.tZ)("div",{className:"section-title"},(0,c.t)("Configure Time Range: Last...")),(0,ot.tZ)(rt.Y.Group,{value:e,onChange:e=>t.onChange(e.target.value)},b.map((({value:t,label:e})=>(0,ot.tZ)(rt.Y,{key:t,value:t,className:"vertical-radio"},e)))))}function ut({onChange:t,value:e}){return(0,i.useEffect)((()=>{M.has(e)||t(g)}),[t,e]),M.has(e)?(0,ot.tZ)(i.Fragment,null,(0,ot.tZ)("div",{className:"section-title"},(0,c.t)("Configure Time Range: Previous...")),(0,ot.tZ)(rt.Y.Group,{value:e,onChange:e=>t(e.target.value)},w.map((({value:t,label:e})=>(0,ot.tZ)(rt.Y,{key:t,value:t,className:"vertical-radio"},e))))):null}var ct=a(93754),dt=a.n(ct),pt=a(62276),ht=a(88186);const mt=(0,tt.m)("order");function Zt(t){const{customRange:e,matchedFlag:a}=J(t.value);a||t.onChange(P(e));const{sinceDatetime:n,sinceMode:l,sinceGrain:i,sinceGrainValue:r,untilDatetime:o,untilMode:s,untilGrain:u,untilGrainValue:d,anchorValue:p,anchorMode:h}={...e};function m(a,n){t.onChange(P({...e,[a]:n}))}function Z(a,n){dt()(n)&&n>0&&t.onChange(P({...e,[a]:n}))}return(0,ot.tZ)("div",null,(0,ot.tZ)("div",{className:"section-title"},(0,c.t)("Configure custom time range")),(0,ot.tZ)(_.X2,{gutter:24},(0,ot.tZ)(_.JX,{span:12},(0,ot.tZ)("div",{className:"control-label"},(0,c.t)("START (INCLUSIVE)")," ",(0,ot.tZ)(ht.V,{tooltip:(0,c.t)("Start date included in time range"),placement:"right"})),(0,ot.tZ)(tt.Z,{ariaLabel:(0,c.t)("START (INCLUSIVE)"),options:D,value:l,onChange:t=>m("sinceMode",t),sortComparator:mt}),"specific"===l&&(0,ot.tZ)(_.X2,null,(0,ot.tZ)(pt.M,{showTime:!0,defaultValue:F(n),onChange:t=>m("sinceDatetime",t.format(k)),allowClear:!1})),"relative"===l&&(0,ot.tZ)(_.X2,{gutter:8},(0,ot.tZ)(_.JX,{span:11},(0,ot.tZ)(_.Rn,{placeholder:(0,c.t)("Relative quantity"),value:Math.abs(r),min:1,defaultValue:1,onChange:t=>Z("sinceGrainValue",t||1),onStep:t=>Z("sinceGrainValue",t||1)})),(0,ot.tZ)(_.JX,{span:13},(0,ot.tZ)(tt.Z,{ariaLabel:(0,c.t)("Relative period"),options:N,value:i,onChange:t=>m("sinceGrain",t),sortComparator:mt})))),(0,ot.tZ)(_.JX,{span:12},(0,ot.tZ)("div",{className:"control-label"},(0,c.t)("END (EXCLUSIVE)")," ",(0,ot.tZ)(ht.V,{tooltip:(0,c.t)("End date excluded from time range"),placement:"right"})),(0,ot.tZ)(tt.Z,{ariaLabel:(0,c.t)("END (EXCLUSIVE)"),options:S,value:s,onChange:t=>m("untilMode",t),sortComparator:mt}),"specific"===s&&(0,ot.tZ)(_.X2,null,(0,ot.tZ)(pt.M,{showTime:!0,defaultValue:F(o),onChange:t=>m("untilDatetime",t.format(k)),allowClear:!1})),"relative"===s&&(0,ot.tZ)(_.X2,{gutter:8},(0,ot.tZ)(_.JX,{span:11},(0,ot.tZ)(_.Rn,{placeholder:(0,c.t)("Relative quantity"),value:d,min:1,defaultValue:1,onChange:t=>Z("untilGrainValue",t||1),onStep:t=>Z("untilGrainValue",t||1)})),(0,ot.tZ)(_.JX,{span:13},(0,ot.tZ)(tt.Z,{ariaLabel:(0,c.t)("Relative period"),options:x,value:u,onChange:t=>m("untilGrain",t),sortComparator:mt}))))),"relative"===l&&"relative"===s&&(0,ot.tZ)("div",{className:"control-anchor-to"},(0,ot.tZ)("div",{className:"control-label"},(0,c.t)("Anchor to")),(0,ot.tZ)(_.X2,{align:"middle"},(0,ot.tZ)(_.JX,null,(0,ot.tZ)(rt.Y.Group,{onChange:function(a){const n=a.target.value;"now"===n?t.onChange(P({...e,anchorValue:"now",anchorMode:n})):t.onChange(P({...e,anchorValue:V,anchorMode:n}))},defaultValue:"now",value:h},(0,ot.tZ)(rt.Y,{key:"now",value:"now"},(0,c.t)("NOW")),(0,ot.tZ)(rt.Y,{key:"specific",value:"specific"},(0,c.t)("Date/Time")))),"now"!==h&&(0,ot.tZ)(_.JX,null,(0,ot.tZ)(pt.M,{showTime:!0,defaultValue:F(p),onChange:t=>m("anchorValue",t.format(k)),allowClear:!1,className:"control-anchor-to-datetime"})))))}const gt=(0,ot.tZ)(i.Fragment,null,(0,ot.tZ)("div",null,(0,ot.tZ)("h3",null,"DATETIME"),(0,ot.tZ)("p",null,(0,c.t)("Return to specific datetime.")),(0,ot.tZ)("h4",null,(0,c.t)("Syntax")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,"datetime([string])")),(0,ot.tZ)("h4",null,(0,c.t)("Example")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'))),(0,ot.tZ)("div",null,(0,ot.tZ)("h3",null,"DATEADD"),(0,ot.tZ)("p",null,(0,c.t)("Moves the given set of dates by a specified interval.")),(0,ot.tZ)("h4",null,(0,c.t)("Syntax")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)")),(0,ot.tZ)("h4",null,(0,c.t)("Example")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'))),(0,ot.tZ)("div",null,(0,ot.tZ)("h3",null,"DATETRUNC"),(0,ot.tZ)("p",null,(0,c.t)("Truncates the specified date to the accuracy specified by the date unit.")),(0,ot.tZ)("h4",null,(0,c.t)("Syntax")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,"datetrunc([datetime], [dateunit])\ndateunit = (year | quarter | month | week)")),(0,ot.tZ)("h4",null,(0,c.t)("Example")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'))),(0,ot.tZ)("div",null,(0,ot.tZ)("h3",null,"LASTDAY"),(0,ot.tZ)("p",null,(0,c.t)("Get the last date by the date unit.")),(0,ot.tZ)("h4",null,(0,c.t)("Syntax")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,"lastday([datetime], [dateunit])\ndateunit = (year | month | week)")),(0,ot.tZ)("h4",null,(0,c.t)("Example")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,'lastday(datetime("today"), month)'))),(0,ot.tZ)("div",null,(0,ot.tZ)("h3",null,"HOLIDAY"),(0,ot.tZ)("p",null,(0,c.t)("Get the specify date for the holiday")),(0,ot.tZ)("h4",null,(0,c.t)("Syntax")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])")),(0,ot.tZ)("h4",null,(0,c.t)("Example")),(0,ot.tZ)("pre",null,(0,ot.tZ)("code",null,'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")')))),vt=t=>{const e=(0,u.Fg)();return(0,ot.tZ)(ot.ms,null,(({css:a})=>(0,ot.tZ)(et.u,l()({overlayClassName:a`
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
          `},t))))};function ft(t){return(0,ot.tZ)(vt,l()({title:gt},t))}function yt(t){const e=l(t.value||""),[a,n]=e.split(h);function l(t){return t.includes(h)?t:t.startsWith("Last")?[t,""].join(h):t.startsWith("Next")?["",t].join(h):h}function r(e,l){"since"===e?t.onChange(`${l} : ${n}`):t.onChange(`${a} : ${l}`)}return e!==t.value&&t.onChange(l(t.value||"")),(0,ot.tZ)(i.Fragment,null,(0,ot.tZ)("div",{className:"section-title"},(0,c.t)("Configure Advanced Time Range "),(0,ot.tZ)(ft,{placement:"rightBottom"},(0,ot.tZ)("i",{className:"fa fa-info-circle text-muted"}))),(0,ot.tZ)("div",{className:"control-label"},(0,c.t)("START (INCLUSIVE)")," ",(0,ot.tZ)(ht.V,{tooltip:(0,c.t)("Start date included in time range"),placement:"right"})),(0,ot.tZ)(_.II,{key:"since",value:a,onChange:t=>r("since",t.target.value)}),(0,ot.tZ)("div",{className:"control-label"},(0,c.t)("END (EXCLUSIVE)")," ",(0,ot.tZ)(ht.V,{tooltip:(0,c.t)("End date excluded from time range"),placement:"right"})),(0,ot.tZ)(_.II,{key:"until",value:n,onChange:t=>r("until",t.target.value)}))}const bt=async(t,e)=>{const a=`/api/v1/time_range/?q=${o().encode(t)}`;try{var n,l,i,r;const t=await s.Z.get({endpoint:a}),o=`${(null==t||null==(n=t.json)||null==(l=n.result)?void 0:l.since)||""} : ${(null==t||null==(i=t.json)||null==(r=i.result)?void 0:r.until)||""}`;return{value:Z(o,e)}}catch(t){const e=await(0,H.O)(t);return{error:e.message||e.error}}},Ct=(0,u.iK)(Q.Z)``,wt=(0,u.iK)(tt.Z)`
  width: 272px;
`,$t=u.iK.div`
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
    font-weight: 500;
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
    font-weight: 500;
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
`,Et=u.iK.span`
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
`,Nt=(0,it.Q)("date-filter-control");function xt(t){const{value:e=at.X5,endpoints:a,onChange:n,type:r}=t,[o,s]=(0,i.useState)(e),[d,p]=(0,i.useState)(!1),h=(0,i.useMemo)((()=>{return t=e,C.has(t)?"Common":$.has(t)?"Calendar":"No filter"===t?"No filter":J(t).matchedFlag?"Custom":"Advanced";var t}),[e]),[m,Z]=(0,i.useState)(h),[g,v]=(0,i.useState)(e),[f,b]=(0,i.useState)(e),[w,E]=(0,i.useState)(!1),[N,x]=(0,i.useState)(e),[D,S]=(0,i.useState)(e);function T(){b(e),Z(h),p(!1)}(0,i.useEffect)((()=>{bt(e,a).then((({value:t,error:a})=>{a?(x(a||""),E(!1),S(e||"")):("Common"===h||"Calendar"===h||"No filter"===h?(s(e),S("error"===r?(0,c.t)("Default value is required"):t||"")):(s(t||""),S(e||"")),E(!0)),v(e)}))}),[e]),(0,nt.bX)((()=>{g!==f&&bt(f,a).then((({value:t,error:e})=>{e?(x(e||""),E(!1)):(x(t||""),E(!0)),v(f)}))}),lt.M$,[f]);const M=(0,u.Fg)(),k=(0,ot.tZ)($t,null,(0,ot.tZ)("div",{className:"control-label"},(0,c.t)("RANGE TYPE")),(0,ot.tZ)(wt,{ariaLabel:(0,c.t)("RANGE TYPE"),options:y,value:m,onChange:function(t){"No filter"===t&&b("No filter"),Z(t)},sortComparator:(0,tt.m)("order")}),"No filter"!==m&&(0,ot.tZ)(_.iz,null),"Common"===m&&(0,ot.tZ)(st,{value:f,onChange:b}),"Calendar"===m&&(0,ot.tZ)(ut,{value:f,onChange:b}),"Advanced"===m&&(0,ot.tZ)(yt,{value:f,onChange:b}),"Custom"===m&&(0,ot.tZ)(Zt,{value:f,onChange:b}),"No filter"===m&&(0,ot.tZ)("div",null),(0,ot.tZ)(_.iz,null),(0,ot.tZ)("div",null,(0,ot.tZ)("div",{className:"section-title"},(0,c.t)("Actual time range")),w&&(0,ot.tZ)("div",null,N),!w&&(0,ot.tZ)(Et,{className:"warning"},(0,ot.tZ)(B.Z.ErrorSolidSmall,{iconColor:M.colors.error.base}),(0,ot.tZ)("span",{className:"text error"},N))),(0,ot.tZ)(_.iz,null),(0,ot.tZ)("div",{className:"footer"},(0,ot.tZ)(K.Z,{buttonStyle:"secondary",cta:!0,key:"cancel",onClick:T},(0,c.t)("CANCEL")),(0,ot.tZ)(K.Z,l()({buttonStyle:"primary",cta:!0,disabled:!w,key:"apply",onClick:function(){n(f),p(!1)}},Nt("apply-button")),(0,c.t)("APPLY")))),A=(0,ot.tZ)(Et,null,(0,ot.tZ)(B.Z.EditAlt,{iconColor:M.colors.grayscale.base}),(0,ot.tZ)("span",{className:"text"},(0,c.t)("Edit time range")));return(0,ot.tZ)(i.Fragment,null,(0,ot.tZ)(W.Z,t),(0,ot.tZ)(Ct,{placement:"right",trigger:"click",content:k,title:A,defaultVisible:d,visible:d,onVisibleChange:()=>{d?T():p(!0)},overlayStyle:{width:"600px"}},(0,ot.tZ)(et.u,{placement:"top",title:D},(0,ot.tZ)(j.Z,{className:"pointer",onClick:function(){b(e),Z(h),p(!0)}},o))))}},53350:(t,e,a)=>{a.d(e,{Q:()=>n});const n=(t,e=!1)=>(a,n=!1)=>{const l=n||e;if(!a&&t)return l?t:{"data-test":t};if(a&&!t)return l?a:{"data-test":a};if(!a&&!t)return console.warn('testWithId function has missed "prefix" and "id" params'),l?"":{"data-test":""};const i=`${t}__${a}`;return l?i:{"data-test":i}}}}]);