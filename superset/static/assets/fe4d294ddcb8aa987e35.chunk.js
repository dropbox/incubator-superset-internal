(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{162:function(e,t,a){"use strict";const n=a(27).q;t.a=n},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(77),l=a.n(n),c=a(51),i=a(1135);const r=Object(c.c)(i.a)`
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
`,o=Object(c.c)(i.a.Group)`
  font-size: inherit;
`,u=l()(r,{Group:o})},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"k",(function(){return s})),a.d(t,"l",(function(){return d})),a.d(t,"m",(function(){return b})),a.d(t,"f",(function(){return f})),a.d(t,"i",(function(){return O})),a.d(t,"j",(function(){return j})),a.d(t,"c",(function(){return m})),a.d(t,"e",(function(){return h})),a.d(t,"q",(function(){return v})),a.d(t,"r",(function(){return p})),a.d(t,"p",(function(){return g})),a.d(t,"n",(function(){return y})),a.d(t,"g",(function(){return T})),a.d(t,"h",(function(){return N})),a.d(t,"o",(function(){return w})),a.d(t,"d",(function(){return $}));var n=a(72),l=a.n(n),c=a(59),i=a.n(c),r=a(16);const o={AVG:"AVG",COUNT:"COUNT",COUNT_DISTINCT:"COUNT_DISTINCT",MAX:"MAX",MIN:"MIN",SUM:"SUM"},u=i()(o),s={"==":"==","!=":"!=",">":">","<":"<",">=":">=","<=":"<=",IN:"IN","NOT IN":"NOT IN",LIKE:"LIKE",REGEX:"REGEX","IS NOT NULL":"IS NOT NULL","IS NULL":"IS NULL","LATEST PARTITION":"LATEST PARTITION"},d=i()(s),b=[s.LIKE],f=[s.REGEX],O=[s["=="],s["!="],s[">"],s["<"],s[">="],s["<="]],j=new l.a([s.IN,s["NOT IN"]]),m=new l.a([s["LATEST PARTITION"]]),h=[s["IS NOT NULL"],s["IS NULL"],s["LATEST PARTITION"]],v=/^(sum|min|max|avg|count|count_distinct)__.*$/i,p=/^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i,g=/^(LONG|DOUBLE|FLOAT)?(SUM|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i,y={time_range:Object(r.e)("Time range"),granularity_sqla:Object(r.e)("Time column"),time_grain_sqla:Object(r.e)("Time grain"),druid_time_origin:Object(r.e)("Origin"),granularity:Object(r.e)("Time granularity")},T={DEFAULT_VALUE:"defaultValue",MULTIPLE:"multiple",SEARCH_ALL_OPTIONS:"searchAllOptions",CLEARABLE:"clearable"},N=1e3,w={time_range:"__time_range",granularity_sqla:"__time_col",time_grain_sqla:"__time_grain",druid_time_origin:"__time_origin",granularity:"__granularity"},$="Last week"},988:function(e,t,a){"use strict";a.d(t,"a",(function(){return Me}));a(40);var n=a(34),l=a.n(n),c=a(0),i=a.n(c),r=a(96),o=a.n(r),u=a(68),s=a(51),d=a(16),b=(a(274),a(11)),f=a.n(b);const O=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),j=(e,t)=>{var a;const n=e.split(" : ");if(1===n.length)return e;const l=f()(a=t||["unknown","unknown"]).call(a,e=>"inclusive"===e?"≤":"<");return`${O(n[0],!0)} ${l[0]} col ${l[1]} ${O(n[1])}`};var m=a(70),h=a(42),v=a(85),p=a(124),g=a(162),y=a(27),T=a(46),N=a(75),w=a(54),$=a(49),C=a(141),E=a.n(C),A=a(47),D=a.n(A),x=a(36),L=a.n(x),M=a(703),S=a.n(M),I=a(35),G=a.n(I),k=a(72),U=a.n(k);const _=[{value:"Common",label:Object(d.e)("Last")},{value:"Calendar",label:Object(d.e)("Previous")},{value:"Custom",label:Object(d.e)("Custom")},{value:"Advanced",label:Object(d.e)("Advanced")},{value:"No filter",label:Object(d.e)("No filter")}],V=[{value:"Last day",label:Object(d.e)("last day")},{value:"Last week",label:Object(d.e)("last week")},{value:"Last month",label:Object(d.e)("last month")},{value:"Last quarter",label:Object(d.e)("last quarter")},{value:"Last year",label:Object(d.e)("last year")}],R=new U.a(f()(V).call(V,({value:e})=>e)),F=[{value:"previous calendar week",label:Object(d.e)("previous calendar week")},{value:"previous calendar month",label:Object(d.e)("previous calendar month")},{value:"previous calendar year",label:Object(d.e)("previous calendar year")}],q=new U.a(f()(F).call(F,({value:e})=>e)),Y=[{value:"second",label:e=>`${Object(d.e)("Seconds")} ${e}`},{value:"minute",label:e=>`${Object(d.e)("Minutes")} ${e}`},{value:"hour",label:e=>`${Object(d.e)("Hours")} ${e}`},{value:"day",label:e=>`${Object(d.e)("Days")} ${e}`},{value:"week",label:e=>`${Object(d.e)("Weeks")} ${e}`},{value:"month",label:e=>`${Object(d.e)("Months")} ${e}`},{value:"quarter",label:e=>`${Object(d.e)("Quarters")} ${e}`},{value:"year",label:e=>`${Object(d.e)("Years")} ${e}`}],P=f()(Y).call(Y,e=>({value:e.value,label:e.label(Object(d.e)("Before"))})),z=f()(Y).call(Y,e=>({value:e.value,label:e.label(Object(d.e)("After"))})),X=[{value:"specific",label:Object(d.e)("Specific Date/Time")},{value:"relative",label:Object(d.e)("Relative Date/Time")},{value:"now",label:Object(d.e)("Now")},{value:"today",label:Object(d.e)("Midnight")}],H=D()(X).call(X),B=new U.a(["Last day","Last week","Last month","Last quarter","Last year"]),K=new U.a(["previous calendar week","previous calendar month","previous calendar year"]),W="YYYY-MM-DD[T]HH:mm:ss",Z=G()().utc().startOf("day").subtract(7,"days").format(W),J=G()().utc().startOf("day").format(W),Q=S.a`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,ee=S.a`TODAY|NOW`,te=S.a`[+-]?[1-9][0-9]*`,ae=S.a`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,ne=RegExp(S.a`^DATEADD\(DATETIME\("(${Q}|${ee})"\),\s(${te}),\s(${ae})\)$`,"i"),le=RegExp(S.a`^${Q}$|^${ee}$`,"i"),ce=["now","today"],ie={sinceDatetime:Z,sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:J,untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},re=["specific","today","now"],oe=e=>"now"===e?G()().utc().startOf("second"):"today"===e?G()().utc().startOf("day"):G()(e),ue=e=>oe(e).format(W),se=e=>{const t=e.split(" : ");if(2===t.length){const[e,a]=t;if(le.test(e)&&le.test(a)){const t=L()(ce).call(ce,e)?e:"specific",n=L()(ce).call(ce,a)?a:"specific";return{customRange:{...ie,sinceDatetime:e,untilDatetime:a,sinceMode:t,untilMode:n},matchedFlag:!0}}const n=e.match(ne);if(n&&le.test(a)&&L()(e).call(e,a)){const[e,t,l]=D()(n).call(n,1),c=L()(ce).call(ce,a)?a:"specific";return{customRange:{...ie,sinceGrain:l,sinceGrainValue:E()(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:c},matchedFlag:!0}}const l=a.match(ne);if(le.test(e)&&l&&L()(a).call(a,e)){const[t,a,n]=[...D()(l).call(l,1)],c=L()(ce).call(ce,e)?e:"specific";return{customRange:{...ie,untilGrain:n,untilGrainValue:E()(a,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:c},matchedFlag:!0}}if(n&&l){const[e,t,a]=[...D()(n).call(n,1)],[c,i,r]=[...D()(l).call(l,1)];if(e===c)return{customRange:{...ie,sinceGrain:a,sinceGrainValue:E()(t,10),sinceDatetime:e,untilGrain:r,untilGrainValue:E()(i,10),untilDatetime:c,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"},matchedFlag:!0}}}return{customRange:ie,matchedFlag:!1}},de=e=>{const{sinceDatetime:t,sinceMode:a,sinceGrain:n,sinceGrainValue:l,untilDatetime:c,untilMode:i,untilGrain:r,untilGrainValue:o,anchorValue:u}={...e};if(L()(re).call(re,a)&&L()(re).call(re,i)){return`${"specific"===a?ue(t):a} : ${"specific"===i?ue(c):i}`}if(L()(re).call(re,a)&&"relative"===i){const e="specific"===a?ue(t):a;return`${e} : ${`DATEADD(DATETIME("${e}"), ${o}, ${r})`}`}if("relative"===a&&L()(re).call(re,i)){const e="specific"===i?ue(c):i;return`${`DATEADD(DATETIME("${e}"), ${-Math.abs(l)}, ${n})`} : ${e}`}return`${`DATEADD(DATETIME("${u}"), ${-Math.abs(l)}, ${n})`} : ${`DATEADD(DATETIME("${u}"), ${o}, ${r})`}`};var be=a(178),fe=a(1);function Oe(e){let t="Last week";return B.has(e.value)?t=e.value:e.onChange(t),Object(fe.f)(i.a.Fragment,null,Object(fe.f)("div",{className:"section-title"},Object(d.e)("Configure Time Range: Last...")),Object(fe.f)(be.a.Group,{value:t,onChange:t=>e.onChange(t.target.value)},f()(V).call(V,({value:e,label:t})=>Object(fe.f)(be.a,{key:e,value:e,className:"vertical-radio"},t))))}function je(e){let t="previous calendar week";return K.has(e.value)?t=e.value:e.onChange(t),Object(fe.f)(i.a.Fragment,null,Object(fe.f)("div",{className:"section-title"},Object(d.e)("Configure Time Range: Previous...")),Object(fe.f)(be.a.Group,{value:t,onChange:t=>e.onChange(t.target.value)},f()(F).call(F,({value:e,label:t})=>Object(fe.f)(be.a,{key:e,value:e,className:"vertical-radio"},t))))}var me=a(1309),he=a.n(me),ve=a(117);function pe(e){const{customRange:t,matchedFlag:a}=se(e.value);a||e.onChange(de(t));const{sinceDatetime:n,sinceMode:c,sinceGrain:i,sinceGrainValue:r,untilDatetime:o,untilMode:u,untilGrain:s,untilGrainValue:b,anchorValue:f,anchorMode:O}={...t};function j(a,n){e.onChange(de({...t,[a]:n}))}function m(a,n){he()(n)&&n>0&&e.onChange(de({...t,[a]:n}))}return Object(fe.f)("div",null,Object(fe.f)("div",{className:"section-title"},Object(d.e)("Configure custom time range")),Object(fe.f)(y.r,{gutter:24},Object(fe.f)(y.f,{span:12},Object(fe.f)("div",{className:"control-label"},Object(d.e)("START (INCLUSIVE)")," ",Object(fe.f)(ve.a,{tooltip:Object(d.e)("Start date included in time range"),placement:"right"})),Object(fe.f)(N.f,{options:X,value:l()(X).call(X,e=>e.value===c),onChange:e=>j("sinceMode",e.value)}),"specific"===c&&Object(fe.f)(y.r,null,Object(fe.f)(y.g,{showTime:!0,value:oe(n),onSelect:e=>j("sinceDatetime",e.format(W)),allowClear:!1})),"relative"===c&&Object(fe.f)(y.r,{gutter:8},Object(fe.f)(y.f,{span:11},Object(fe.f)(y.m,{placeholder:Object(d.e)("Relative quantity"),value:Math.abs(r),min:1,defaultValue:1,onChange:e=>m("sinceGrainValue",e||1),onStep:e=>m("sinceGrainValue",e||1)})),Object(fe.f)(y.f,{span:13},Object(fe.f)(N.f,{options:P,value:l()(P).call(P,e=>e.value===i),onChange:e=>j("sinceGrain",e.value)})))),Object(fe.f)(y.f,{span:12},Object(fe.f)("div",{className:"control-label"},Object(d.e)("END (EXCLUSIVE)")," ",Object(fe.f)(ve.a,{tooltip:Object(d.e)("End date excluded from time range"),placement:"right"})),Object(fe.f)(N.f,{options:H,value:l()(H).call(H,e=>e.value===u),onChange:e=>j("untilMode",e.value)}),"specific"===u&&Object(fe.f)(y.r,null,Object(fe.f)(y.g,{showTime:!0,value:oe(o),onSelect:e=>j("untilDatetime",e.format(W)),allowClear:!1})),"relative"===u&&Object(fe.f)(y.r,{gutter:8},Object(fe.f)(y.f,{span:11},Object(fe.f)(y.m,{placeholder:Object(d.e)("Relative quantity"),value:b,min:1,defaultValue:1,onChange:e=>m("untilGrainValue",e||1),onStep:e=>m("untilGrainValue",e||1)})),Object(fe.f)(y.f,{span:13},Object(fe.f)(N.f,{options:z,value:l()(z).call(z,e=>e.value===s),onChange:e=>j("untilGrain",e.value)}))))),"relative"===c&&"relative"===u&&Object(fe.f)("div",{className:"control-anchor-to"},Object(fe.f)("div",{className:"control-label"},Object(d.e)("Anchor to")),Object(fe.f)(y.r,{align:"middle"},Object(fe.f)(y.f,null,Object(fe.f)(be.a.Group,{onChange:function(a){const n=a.target.value;"now"===n?e.onChange(de({...t,anchorValue:"now",anchorMode:n})):e.onChange(de({...t,anchorValue:J,anchorMode:n}))},defaultValue:"now",value:O},Object(fe.f)(be.a,{key:"now",value:"now"},Object(d.e)("NOW")),Object(fe.f)(be.a,{key:"specific",value:"specific"},Object(d.e)("Date/Time")))),"now"!==O&&Object(fe.f)(y.f,null,Object(fe.f)(y.g,{showTime:!0,value:oe(f),onSelect:e=>j("anchorValue",e.format(W)),allowClear:!1,className:"control-anchor-to-datetime"})))))}var ge=a(252),ye=a.n(ge),Te=a(31),Ne=a.n(Te);const we=Object(fe.f)(i.a.Fragment,null,Object(fe.f)("div",null,Object(fe.f)("h3",null,"DATETIME"),Object(fe.f)("p",null,Object(d.e)("Return to specific datetime.")),Object(fe.f)("h4",null,Object(d.e)("Syntax")),Object(fe.f)("pre",null,Object(fe.f)("code",null,"datetime([string])")),Object(fe.f)("h4",null,Object(d.e)("Example")),Object(fe.f)("pre",null,Object(fe.f)("code",null,'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'))),Object(fe.f)("div",null,Object(fe.f)("h3",null,"DATEADD"),Object(fe.f)("p",null,Object(d.e)("Moves the given set of dates by a specified interval.")),Object(fe.f)("h4",null,Object(d.e)("Syntax")),Object(fe.f)("pre",null,Object(fe.f)("code",null,"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)")),Object(fe.f)("h4",null,Object(d.e)("Example")),Object(fe.f)("pre",null,Object(fe.f)("code",null,'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'))),Object(fe.f)("div",null,Object(fe.f)("h3",null,"DATETRUNC"),Object(fe.f)("p",null,Object(d.e)("Truncates the specified date to the accuracy specified by the date unit.")),Object(fe.f)("h4",null,Object(d.e)("Syntax")),Object(fe.f)("pre",null,Object(fe.f)("code",null,"datetrunc([datetime], [dateunit])\ndateunit = (year | month | week)")),Object(fe.f)("h4",null,Object(d.e)("Example")),Object(fe.f)("pre",null,Object(fe.f)("code",null,'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'))),Object(fe.f)("div",null,Object(fe.f)("h3",null,"LASTDAY"),Object(fe.f)("p",null,Object(d.e)("Get the last date by the date unit.")),Object(fe.f)("h4",null,Object(d.e)("Syntax")),Object(fe.f)("pre",null,Object(fe.f)("code",null,"lastday([datetime], [dateunit])\ndateunit = (year | month | week)")),Object(fe.f)("h4",null,Object(d.e)("Example")),Object(fe.f)("pre",null,Object(fe.f)("code",null,'lastday(datetime("today"), month)'))),Object(fe.f)("div",null,Object(fe.f)("h3",null,"HOLIDAY"),Object(fe.f)("p",null,Object(d.e)("Get the specify date for the holiday")),Object(fe.f)("h4",null,Object(d.e)("Syntax")),Object(fe.f)("pre",null,Object(fe.f)("code",null,"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])")),Object(fe.f)("h4",null,Object(d.e)("Example")),Object(fe.f)("pre",null,Object(fe.f)("code",null,'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")')))),$e=e=>{const t=Object(s.e)();return Object(fe.f)(fe.b,null,({css:a})=>Object(fe.f)(w.a,Ne()({overlayClassName:a`
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
          `},e)))};function Ce(e){return Object(fe.f)($e,Ne()({title:we},e))}function Ee(e){const t=l(e.value||""),[a,n]=t.split(" : ");function l(e){return L()(e).call(e," : ")?e:ye()(e).call(e,"Last")?[e,""].join(" : "):ye()(e).call(e,"Next")?["",e].join(" : "):" : "}function c(t,l){"since"===t?e.onChange(`${l} : ${n}`):e.onChange(`${a} : ${l}`)}return t!==e.value&&e.onChange(l(e.value||"")),Object(fe.f)(i.a.Fragment,null,Object(fe.f)("div",{className:"section-title"},Object(d.e)("Configure Advanced Time Range "),Object(fe.f)(Ce,{placement:"rightBottom"},Object(fe.f)("i",{className:"fa fa-info-circle text-muted"}))),Object(fe.f)("div",{className:"control-label"},Object(d.e)("START (INCLUSIVE)")," ",Object(fe.f)(ve.a,{tooltip:Object(d.e)("Start date included in time range"),placement:"right"})),Object(fe.f)(y.l,{key:"since",value:a,onChange:e=>c("since",e.target.value)}),Object(fe.f)("div",{className:"control-label"},Object(d.e)("END (EXCLUSIVE)")," ",Object(fe.f)(ve.a,{tooltip:Object(d.e)("End date excluded from time range"),placement:"right"})),Object(fe.f)(y.l,{key:"until",value:n,onChange:e=>c("until",e.target.value)}))}const Ae=async(e,t)=>{const a=`/api/v1/time_range/?q=${o.a.encode(e)}`;try{var n,l,c,i;const e=await u.a.get({endpoint:a}),o=(r=(null==e?void 0:null==(n=e.json)?void 0:null==(l=n.result)?void 0:l.since)||"",s=(null==e?void 0:null==(c=e.json)?void 0:null==(i=c.result)?void 0:i.until)||"",`${r} : ${s}`);return{value:j(o,t)}}catch(e){const t=await Object(m.a)(e);return{error:t.message||t.error}}var r,s},De=Object(s.c)(g.a)``,xe=s.c.div`
  .ant-row {
    margin-top: 8px;
  }

  .ant-input-number {
    width: 100%;
  }

  .frame-dropdown {
    width: 272px;
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
`,Le=s.c.span`
  svg {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colors.error.base};
  }
`;function Me(e){const{value:t=$.d,endpoints:a,onChange:n}=e,[r,o]=Object(c.useState)(t),[u,b]=Object(c.useState)(!1),f=Object(c.useMemo)(()=>{return e=t,R.has(e)?"Common":q.has(e)?"Calendar":"No filter"===e?"No filter":se(e).matchedFlag?"Custom":"Advanced";var e},[t]),[O,j]=Object(c.useState)(f),[m,g]=Object(c.useState)(t),[C,E]=Object(c.useState)(!1),[A,D]=Object(c.useState)(t),[x,L]=Object(c.useState)(t);function M(){g(t),j(f),b(!1)}Object(c.useEffect)(()=>{Ae(t,a).then(({value:e,error:a})=>{a?(D(a||""),E(!1),L(t||"")):("Common"===f||"Calendar"===f||"No filter"===f?(o(t),L(e||"")):(o(e||""),L(t||"")),E(!0))})},[t]),Object(c.useEffect)(()=>{Ae(m,a).then(({value:e,error:t})=>{t?(D(t||""),E(!1)):(D(e||""),E(!0))})},[m]);const S=Object(fe.f)(xe,null,Object(fe.f)("div",{className:"control-label"},Object(d.e)("RANGE TYPE")),Object(fe.f)(N.f,{options:_,value:l()(_).call(_,({value:e})=>e===O),onChange:function(e){"No filter"===e.value&&g("No filter"),j(e.value)},className:"frame-dropdown"}),"No filter"!==O&&Object(fe.f)(y.h,null),"Common"===O&&Object(fe.f)(Oe,{value:m,onChange:g}),"Calendar"===O&&Object(fe.f)(je,{value:m,onChange:g}),"Advanced"===O&&Object(fe.f)(Ee,{value:m,onChange:g}),"Custom"===O&&Object(fe.f)(pe,{value:m,onChange:g}),"No filter"===O&&Object(fe.f)("div",null),Object(fe.f)(y.h,null),Object(fe.f)("div",null,Object(fe.f)("div",{className:"section-title"},Object(d.e)("Actual time range")),C&&Object(fe.f)("div",null,A),!C&&Object(fe.f)(Le,{className:"warning"},Object(fe.f)(T.a,{name:"error-solid-small",color:s.d.colors.error.base}),Object(fe.f)("span",{className:"text error"},A))),Object(fe.f)(y.h,null),Object(fe.f)("div",{className:"footer"},Object(fe.f)(h.a,{buttonStyle:"secondary",cta:!0,key:"cancel",onClick:M},Object(d.e)("CANCEL")),Object(fe.f)(h.a,{buttonStyle:"primary",cta:!0,disabled:!C,key:"apply",onClick:function(){n(m),b(!1)}},Object(d.e)("APPLY")))),I=Object(fe.f)(Le,null,Object(fe.f)(T.a,{name:"edit-alt"}),Object(fe.f)("span",{className:"text"},Object(d.e)("Edit time range")));return Object(fe.f)(i.a.Fragment,null,Object(fe.f)(v.a,e),Object(fe.f)(De,{placement:"right",trigger:"click",content:S,title:I,defaultVisible:u,visible:u,onVisibleChange:()=>{u?M():b(!0)},overlayStyle:{width:"600px"}},Object(fe.f)(w.a,{placement:"top",title:x},Object(fe.f)(p.a,{className:"pointer",onClick:function(){g(t),j(f),b(!0)}},r))))}}}]);