(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1128],{90233:(e,t,a)=>{"use strict";a.d(t,{Lu:()=>l,tL:()=>i});var r=a(87462),o=a(76826),n=a.n(o),i={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};l.rankings=i;var s=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function l(e,t,a){void 0===a&&(a={});var o=a,n=o.keys,l=o.threshold,d=void 0===l?i.MATCHES:l,h=o.baseSort,m=void 0===h?s:h,g=o.sorter,v=void 0===g?function(e){return e.sort((function(e,t){return function(e,t,a){var r=e.rank,o=e.keyIndex,n=t.rank,i=t.keyIndex;return r===n?o===i?a(e,t):o<i?-1:1:r>n?-1:1}(e,t,m)}))}:g,f=e.reduce((function(e,o,s){var l=function(e,t,a,r){return t?function(e,t){for(var a=[],r=0,o=t.length;r<o;r++)for(var n=t[r],i=p(n),s=u(e,n),l=0,c=s.length;l<c;l++)a.push({itemValue:s[l],attributes:i});return a}(e,t).reduce((function(e,t,o){var n=e.rank,s=e.rankedValue,l=e.keyIndex,d=e.keyThreshold,u=t.itemValue,h=t.attributes,p=c(u,a,r),m=s,g=h.minRanking,v=h.maxRanking,f=h.threshold;return p<g&&p>=i.MATCHES?p=g:p>v&&(p=v),p>n&&(n=p,l=o,d=f,m=u),{rankedValue:m,rank:n,keyIndex:l,keyThreshold:d}}),{rankedValue:e,rank:i.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold}):{rankedValue:e,rank:c(e,a,r),keyIndex:-1,keyThreshold:r.threshold}}(o,n,t,a),h=l.rank,m=l.keyThreshold;return h>=(void 0===m?d:m)&&e.push((0,r.Z)({},l,{item:o,index:s})),e}),[]);return v(f).map((function(e){return e.item}))}function c(e,t,a){return e=d(e,a),(t=d(t,a)).length>e.length?i.NO_MATCH:e===t?i.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?i.EQUAL:e.startsWith(t)?i.STARTS_WITH:e.includes(" "+t)?i.WORD_STARTS_WITH:e.includes(t)?i.CONTAINS:1===t.length?i.NO_MATCH:(r=e,o="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){o+=e.substr(0,1)}))})),o).includes(t)?i.ACRONYM:function(e,t){var a=0,r=0;function o(e,t,r){for(var o=r,n=t.length;o<n;o++)if(t[o]===e)return a+=1,o+1;return-1}var n,s,l=o(t[0],e,0);if(l<0)return i.NO_MATCH;r=l;for(var c=1,d=t.length;c<d;c++)if(!((r=o(t[c],e,r))>-1))return i.NO_MATCH;return n=1/(r-l),s=a/t.length,i.MATCHES+s*n}(e,t);var r,o}function d(e,t){return e=""+e,t.keepDiacritics||(e=n()(e)),e}function u(e,t){var a;if("object"==typeof t&&(t=t.key),"function"==typeof t)a=t(e);else if(null==e)a=null;else if(Object.hasOwnProperty.call(e,t))a=e[t];else{if(t.includes("."))return function(e,t){for(var a=e.split("."),r=[t],o=0,n=a.length;o<n;o++){for(var i=a[o],s=[],l=0,c=r.length;l<c;l++){var d=r[l];if(null!=d)if(Object.hasOwnProperty.call(d,i)){var u=d[i];null!=u&&s.push(u)}else"*"===i&&(s=s.concat(d))}r=s}if(Array.isArray(r[0])){var h=[];return h.concat.apply(h,r)}return r}(t,e);a=null}return null==a?[]:Array.isArray(a)?a:[String(a)]}var h={maxRanking:1/0,minRanking:-1/0};function p(e){return"string"==typeof e?h:(0,r.Z)({},h,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},a=Object.keys(t).join("|"),r=new RegExp(a,"g"),o=new RegExp(a,""),n=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=n},4189:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ka});var r=a(67294),o=a(28216),n=a(16550),i=a(37731),s=a(22102),l=a(55867),c=a(78161),d=a(38703),u=a(72570),h=a(23525),p=a(27600),m=a(98286),g=a(91914),v=a(43399);const f={form_data:{name:"form_data",parser:e=>{const t=JSON.parse(e);if(t.datasource){const[e,a]=t.datasource.split("__");t.datasource_id=e,t.datasource_type=a,delete t.datasource}return t}},slice_id:{name:"slice_id"},datasource_id:{name:"datasource_id"},datasource_type:{name:"datasource_type"},datasource:{name:"datasource",parser:e=>{const[t,a]=e.split("__");return{datasource_id:t,datasource_type:a}}},form_data_key:{name:"form_data_key"},permalink_key:{name:"permalink_key"},viz_type:{name:"viz_type"},dashboard_id:{name:"dashboard_id"}},b={p:"permalink_key",table:"datasource_id"},y=e=>{const t=new URLSearchParams(e);return Array.from(t.keys()).reduce(((e,a)=>{var r;const o=t.get(a);if(null===o)return e;let n;try{var i,s,l;n=null!=(i=null==(s=(l=f[a]).parser)?void 0:s.call(l,o))?i:o}catch{n=o}if("object"==typeof n)return{...e,...n};const c=(null==(r=f[a])?void 0:r.name)||a;return{...e,[c]:n}}),{})};var S=a(76445),_=a(5872),w=a.n(_),x=a(78718),Z=a.n(x),C=a(23279),k=a.n(C),T=a(78580),E=a.n(T),N=a(45697),A=a.n(N),D=a(14890),R=a(51995),$=a(11965),O=a(68492),I=a(85716),M=a(4756),U=a(28291),z=a(29119),L=a(14278),j=a(58593),q=a(70163),F=a(61337),P=a(99543),Q=a(97381),V=a(3741),B=a(94184),H=a.n(B),K=a(52256),W=a(50810),Y=a(2275),G=a(1510),J=a(40219),X=a(99068),ee=a(12515),te=a(10331),ae=a(651),re=a(19485),oe=a(6954),ne=a(14114),ie=a(40323),se=a(93185),le=a(11064),ce=a(46078),de=a(55786),ue=a(31069),he=a(40730),pe=a(91877),me=a(29487),ge=a(47710),ve=a(79217),fe=a(75701),be=a(21496),ye=a(89555),Se=a(37921),_e=a(30381),we=a.n(_e);const xe=e=>{let{cachedTimestamp:t}=e;const a=t?(0,$.tZ)("span",null,(0,l.t)("Loaded data cached"),(0,$.tZ)("b",null," ",we().utc(t).fromNow())):(0,l.t)("Loaded from cache");return(0,$.tZ)("span",null,a,". ",(0,l.t)("Click to force-refresh"))},Ze=e=>{let{className:t,onClick:a,cachedTimestamp:o}=e;const[n,i]=(0,r.useState)(!1),s=n?"primary":"default";return(0,$.tZ)(j.u,{title:(0,$.tZ)(xe,{cachedTimestamp:o}),id:"cache-desc-tooltip"},(0,$.tZ)(Se.Z,{className:`${t}`,type:s,onClick:a,onMouseOver:()=>i(!0),onMouseOut:()=>i(!1)},(0,l.t)("Cached")," ",(0,$.tZ)("i",{className:"fa fa-refresh"})))};var Ce=a(44814);const ke=(0,R.iK)(Se.Z)`
  text-align: left;
  font-family: ${e=>{let{theme:t}=e;return t.typography.families.monospace}};
`;function Te(e){let{endTime:t,isRunning:a,startTime:o,status:n="success"}=e;const[i,s]=(0,r.useState)("00:00:00.00"),l=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=()=>{l.current&&(clearInterval(l.current),l.current=void 0)};return a&&(l.current=setInterval((()=>{if(o){const r=t||(0,Ce.zO)();o<r&&s((0,Ce.zQ)(o,r)),a||e()}}),30)),e}),[t,a,o]),(0,$.tZ)(ke,{type:n,role:"timer"},i)}var Ee;!function(e){e.failed="danger",e.loading="warning",e.success="success"}(Ee||(Ee={}));const Ne=(0,r.forwardRef)(((e,t)=>{let{queriesResponse:a,chartStatus:r,chartUpdateStartTime:o,chartUpdateEndTime:n,refreshCachedQuery:i,rowLimit:s}=e;const l="loading"===r,c=null==a?void 0:a[0];return(0,$.tZ)("div",{ref:t},(0,$.tZ)("div",{css:e=>$.iv`
            display: flex;
            justify-content: flex-end;
            padding-bottom: ${4*e.gridUnit}px;
            & .ant-tag:last-of-type {
              margin: 0;
            }
          `},!l&&c&&(0,$.tZ)(ye.Z,{rowcount:Number(c.rowcount)||0,limit:Number(s)||0}),!l&&(null==c?void 0:c.is_cached)&&(0,$.tZ)(Ze,{onClick:i,cachedTimestamp:c.cached_dttm}),(0,$.tZ)(Te,{startTime:o,endTime:n,isRunning:l,status:Ee[r]})))}));var Ae=a(35932);const De=R.iK.div`
  ${e=>{let{theme:t}=e;return $.iv`
    margin: ${4*t.gridUnit}px;
    padding: ${4*t.gridUnit}px;

    border: 1px solid ${t.colors.info.base};
    background-color: ${t.colors.info.light2};
    border-radius: 2px;

    color: ${t.colors.info.dark2};
    font-size: ${t.typography.sizes.m}px;

    p {
      margin-bottom: ${t.gridUnit}px;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${t.colors.info.dark1};
      }
    }

    &.alert-type-warning {
      border-color: ${t.colors.alert.base};
      background-color: ${t.colors.alert.light2};

      p {
        color: ${t.colors.alert.dark2};
      }

      & a:hover,
      & span[role='button']:hover {
        color: ${t.colors.alert.dark1};
      }
    }
  `}}
`,Re=R.iK.div`
  display: flex;
  justify-content: flex-end;
  button {
    line-height: 1;
  }
`,$e=R.iK.p`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,Oe={warning:"warning",danger:"danger"},Ie=(0,r.forwardRef)(((e,t)=>{let{title:a,bodyText:r,primaryButtonAction:o,secondaryButtonAction:n,primaryButtonText:i,secondaryButtonText:s,type:l="info",className:c=""}=e;return(0,$.tZ)(De,{className:`alert-type-${l} ${c}`,ref:t},(0,$.tZ)($e,null,a),(0,$.tZ)("p",null,r),i&&o&&(0,$.tZ)(Re,null,n&&s&&(0,$.tZ)(Ae.Z,{buttonStyle:"link",buttonSize:"small",onClick:n},s),(0,$.tZ)(Ae.Z,{buttonStyle:l in Oe?Oe[l]:"primary",buttonSize:"small",onClick:o},i)))}));var Me=a(99612);const Ue={actions:A().object.isRequired,onQuery:A().func,can_overwrite:A().bool.isRequired,can_download:A().bool.isRequired,datasource:A().object,dashboardId:A().number,column_formats:A().object,containerId:A().string.isRequired,isStarred:A().bool.isRequired,slice:A().object,sliceName:A().string,table_name:A().string,vizType:A().string.isRequired,form_data:A().object,ownState:A().object,standalone:A().bool,force:A().bool,timeout:A().number,chartIsStale:A().bool,chart:Y.$6,errorMessage:A().node,triggerRender:A().bool},ze=1.25,Le=[100,0],je=[300,65],qe=R.iK.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  box-shadow: none;
  height: 100%;

  & > div {
    height: 100%;
  }

  .gutter {
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    width: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
    margin: ${e=>{let{theme:t}=e;return t.gridUnit*ze}}px auto;
  }

  .gutter.gutter-vertical {
    display: ${e=>{let{showSplite:t}=e;return t?"block":"none"}};
    cursor: row-resize;
  }

  .ant-collapse {
    .ant-tabs {
      height: 100%;
      .ant-tabs-nav {
        padding-left: ${e=>{let{theme:t}=e;return 5*t.gridUnit}}px;
        margin: 0;
      }
      .ant-tabs-content-holder {
        overflow: hidden;
        .ant-tabs-content {
          height: 100%;
        }
      }
    }
  }
`;var Fe={name:"1wbll7q",styles:"text-decoration:underline"};const Pe=e=>{var t;let{chart:a,slice:o,vizType:n,ownState:i,triggerRender:s,force:c,datasource:d,errorMessage:u,form_data:h,onQuery:p,actions:m,timeout:g,standalone:v,chartIsStale:f,chartAlert:b}=e;const y=(0,R.Fg)(),S=y.gridUnit*ze,_=y.gridUnit*ze,{ref:w,observerRef:x,width:Z,height:C}=function(){const e=(0,r.useRef)(),[{width:t,height:a},o]=(0,r.useState)({}),n=(0,r.useCallback)((()=>{if(e.current){const{width:t,height:a}=(null==e.current.getBoundingClientRect?void 0:e.current.getBoundingClientRect())||{};o({width:t,height:a})}}),[]),{ref:i}=(0,Me.NB)({refreshMode:"debounce",refreshRate:300,onResize:n});return{ref:e,observerRef:i,width:t,height:a}}(),[k,T]=(0,r.useState)((0,pe.c)(se.T.DATAPANEL_CLOSED_BY_DEFAULT)?Le:(0,F.rV)(F.dR.chart_split_sizes,Le)),[N,A]=(0,r.useState)(!(0,pe.c)(se.T.DATAPANEL_CLOSED_BY_DEFAULT)&&(0,F.rV)(F.dR.is_datapanel_open,!1)),[D,O]=(0,r.useState)(!1),I=(0,le.Z)(),{useLegacyApi:M}=null!=(t=I.get(n))?t:{},U=M&&d.type!==ce.i9.Table,z=!b&&f&&!U&&"failed"!==a.chartStatus&&(0,de.Z)(a.queriesResponse).length>0,L=(0,r.useCallback)((async function(){if(o&&null===o.query_context){const e=(0,ee.u)({formData:o.form_data,force:c,resultFormat:"json",resultType:"full",setDataMask:null,ownState:null});await ue.Z.put({endpoint:`/api/v1/chart/${o.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({query_context:JSON.stringify(e),query_context_generation:!0})})}}),[o]);(0,r.useEffect)((()=>{L()}),[L]),(0,r.useEffect)((()=>{(0,F.LS)(F.dR.chart_split_sizes,k)}),[k]);const j=(0,r.useCallback)((e=>{T(e)}),[]),q=(0,r.useCallback)((()=>{m.setForceQuery(!0),m.postChartFormData(h,!0,g,a.id,void 0,i),m.updateQueryFormData(h,a.id)}),[m,a.id,h,i,g]),P=(0,r.useCallback)((e=>{let t;t=e?[60,40]:Le,T(t),A(e)}),[]),Q=(0,r.useCallback)((()=>(0,$.tZ)("div",{css:$.iv`
          min-height: 0;
          flex: 1;
          overflow: auto;
        `,ref:w},Z&&C&&(0,$.tZ)(he.Z,{width:Math.floor(Z),height:C,ownState:i,annotationData:a.annotationData,chartAlert:a.chartAlert,chartStackTrace:a.chartStackTrace,chartId:a.id,chartStatus:a.chartStatus,triggerRender:s,force:c,datasource:d,errorMessage:u,formData:h,latestQueryFormData:a.latestQueryFormData,onQuery:p,queriesResponse:a.queriesResponse,chartIsStale:f,setControlValue:m.setControlValue,timeout:g,triggerQuery:a.triggerQuery,vizType:n}))),[m.setControlValue,a.annotationData,a.chartAlert,a.chartStackTrace,a.chartStatus,a.id,a.latestQueryFormData,a.queriesResponse,a.triggerQuery,f,C,w,Z,d,u,c,h,p,i,g,s,n]),V=(0,r.useMemo)((()=>(0,$.tZ)("div",{className:"panel-body",css:$.iv`
          display: flex;
          flex-direction: column;
        `,ref:x},U&&(0,$.tZ)(me.Z,{message:(0,l.t)("Chart type requires a dataset"),type:"error",css:e=>$.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `,description:(0,$.tZ)(r.Fragment,null,(0,l.t)("This chart type is not supported when using an unsaved query as a chart source. "),(0,$.tZ)("span",{role:"button",tabIndex:0,onClick:()=>O(!0),css:Fe},(0,l.t)("Create a dataset")),(0,l.t)(" to visualize your data."))}),z&&(0,$.tZ)(Ie,{title:u?(0,l.t)("Required control values have been removed"):(0,l.t)("Your chart is not up to date"),bodyText:u?(0,fe.J)(!1):(0,$.tZ)("span",null,(0,l.t)('You updated the values in the control panel, but the chart was not updated automatically. Run the query by clicking on the "Update chart" button or')," ",(0,$.tZ)("span",{role:"button",tabIndex:0,onClick:p},(0,l.t)("click here")),"."),type:"warning",css:e=>$.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `}),(0,$.tZ)(Ne,{queriesResponse:a.queriesResponse,chartStatus:a.chartStatus,chartUpdateStartTime:a.chartUpdateStartTime,chartUpdateEndTime:a.chartUpdateEndTime,refreshCachedQuery:q,rowLimit:null==h?void 0:h.row_limit}),Q())),[x,z,u,p,a.queriesResponse,a.chartStatus,a.chartUpdateStartTime,a.chartUpdateEndTime,q,null==h?void 0:h.row_limit,Q]),B=(0,r.useMemo)((()=>Q()),[Q]),[H,K]=(0,r.useState)(a.latestQueryFormData);(0,r.useEffect)((()=>{s||K(a.latestQueryFormData)}),[a.latestQueryFormData]);const W=(0,r.useCallback)(((e,t,a)=>({[e]:`calc(${t}% - ${a+S}px)`})),[S]);if(v){const e="background-transparent",t=document.body.className.split(" ");return E()(t).call(t,e)||(document.body.className+=` ${e}`),(0,$.tZ)("div",{id:"app",ref:x},B)}return(0,$.tZ)(qe,{className:"panel panel-default chart-container",showSplite:N},"filter_box"===n?V:(0,$.tZ)(ie.Z,{sizes:k,minSize:je,direction:"vertical",gutterSize:_,onDragEnd:j,elementStyle:W,expandToMin:!0},V,(0,$.tZ)(be.c9,{ownState:i,queryFormData:H,datasource:d,queryForce:c,onCollapseChange:P,chartStatus:a.chartStatus,errorMessage:u,actions:m})),D&&(0,$.tZ)(ge.W,{visible:D,onHide:()=>O(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,ve.z)(d),openWindow:!1,formData:h}))};Pe.propTypes=Ue;const Qe=Pe;var Ve=a(21804),Be=a.n(Ve),He=a(5364),Ke=a(37687),We=a(48989),Ye=a(45211),Ge=a(49484),Je=a(43700),Xe=a(71262),et=a(74069),tt=a(61357),at=a(71839);const rt=e=>{let{loading:t,onQuery:a,onStop:r,errorMessage:o,isNewChart:n,canStopQuery:i,chartIsStale:s}=e;return t?(0,$.tZ)(Ae.Z,{onClick:r,buttonStyle:"warning",disabled:!i},(0,$.tZ)("i",{className:"fa fa-stop"})," ",(0,l.t)("Stop")):(0,$.tZ)(Ae.Z,{onClick:a,buttonStyle:s?"primary":"secondary",disabled:!!o},n?(0,l.t)("Create chart"):(0,l.t)("Update chart"))};var ot=a(69856),nt=a(61641);const{confirm:it}=et.Z,st=$.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,lt=e=>$.iv`
  display: flex;
  position: sticky;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: ${4*e.gridUnit}px;
  z-index: 999;
  background: linear-gradient(
    ${(0,Ge.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    min-width: 156px;
  }
`,ct=R.iK.div`
  position: relative;
  height: 100%;
  width: 100%;

  // Resizable add overflow-y: auto as a style to this div
  // To override it, we need to use !important
  overflow: visible !important;
  #controlSections {
    height: 100%;
    overflow: visible;
  }
  .nav-tabs {
    flex: 0 0 1;
  }
  .tab-content {
    overflow: auto;
    flex: 1 1 100%;
  }
  .Select__menu {
    max-width: 100%;
  }
  .type-label {
    margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    width: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
    display: inline-block;
    text-align: center;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
  }
`,dt=(0,R.iK)(Xe.ZP)`
  ${e=>{let{theme:t,fullWidth:a}=e;return $.iv`
    height: 100%;
    overflow: visible;
    .ant-tabs-nav {
      margin-bottom: 0;
    }
    .ant-tabs-nav-list {
      width: ${a?"100%":"50%"};
    }
    .ant-tabs-tabpane {
      height: 100%;
    }
    .ant-tabs-content-holder {
      padding-top: ${4*t.gridUnit}px;
    }

    .ant-collapse-ghost > .ant-collapse-item {
      &:not(:last-child) {
        border-bottom: 1px solid ${t.colors.grayscale.light3};
      }

      & > .ant-collapse-header {
        font-size: ${t.typography.sizes.s}px;
      }

      & > .ant-collapse-content > .ant-collapse-content-box {
        padding-bottom: 0;
        font-size: ${t.typography.sizes.s}px;
      }
    }
  `}}
`,ut=(e,t)=>e.reduce(((e,a)=>!a.expanded&&a.label||(e=>!!e.label&&(We.sections.legacyRegularTime.label===e.label||We.sections.legacyTimeseriesTime.label===e.label))(a)&&!(e=>{var t;return null==e||null==(t=e.columns)?void 0:t.some((e=>e.is_dttm))})(t)?e:[...e,String(a.label)]),[]);function ht(e,t){const a=(0,r.useRef)(e()),o=(0,r.useRef)(t);return o.current!==t&&(a.current=e(),o.current=t),a}const pt=e=>{var t,a;const{colors:n}=(0,R.Fg)(),s=(0,r.useContext)(L.Zn),c=(0,I.D)(e.exploreState),u=(0,I.D)(e.exploreState.datasource),h=(0,I.D)(e.chart.chartStatus),[p,m]=(0,r.useState)(!1),g=(0,r.useRef)(null),v=(0,o.v9)((e=>e.explore.controlsTransferred)),f=(0,o.v9)((e=>{var t,a;return null==(t=e.common)||null==(a=t.conf)?void 0:a.DEFAULT_TIME_FILTER})),{form_data:b,actions:y}=e,{setControlValue:S}=y,{x_axis:_,adhoc_filters:x}=b,Z=(0,I.D)(_);(0,r.useEffect)((()=>{_&&_!==Z&&(0,Ye.x)(_,e.exploreState.datasource)&&(!x||!x.find((e=>"SIMPLE"===e.expressionType&&e.operator===ot.d.TEMPORAL_RANGE&&e.subject===_)))&&it({title:(0,l.t)("The X-axis is not on the filters list"),content:(0,l.t)("The X-axis is not on the filters list which will prevent it from being used in\n            time range filters in dashboards. Would you like to add it to the filters list?"),onOk:()=>{S("adhoc_filters",[...x||[],{clause:nt.P.WHERE,subject:_,operator:ot.d.TEMPORAL_RANGE,comparator:f||He.vM,expressionType:"SIMPLE"}])}})}),[_,x,S,f,Z,e.exploreState.datasource]),(0,r.useEffect)((()=>{let t=!1;const a=e=>"object"==typeof e&&(0,i.Z)(e)&&"datasourceWarning"in e&&!0===e.datasourceWarning?(t=!0,{...e,datasourceWarning:!1}):e;"success"===e.chart.chartStatus&&"success"!==h&&(null==v||v.forEach((r=>{var o;if(t=!1,!(0,i.Z)(e.controls[r]))return;const n=Array.isArray(e.controls[r].value)?null==(o=(0,de.Z)(e.controls[r].value))?void 0:o.map(a):a(e.controls[r].value);t&&e.actions.setControlValue(r,n)})))}),[v,h,e.actions,e.chart.chartStatus,e.controls]),(0,r.useEffect)((()=>{var t,a,r;!u||u.type===ce.i9.Query||(null==(t=e.exploreState.datasource)?void 0:t.id)===u.id&&(null==(a=e.exploreState.datasource)?void 0:a.type)===u.type||(m(!0),null==(r=g.current)||r.scrollTo(0,0))}),[null==(t=e.exploreState.datasource)?void 0:t.id,null==(a=e.exploreState.datasource)?void 0:a.type,u]);const{expandedQuerySections:C,expandedCustomizeSections:k,querySections:T,customizeSections:E}=(0,r.useMemo)((()=>function(e,t,a){const r=[],o=[];return(0,te.Bq)(e,a).forEach((e=>{"data"===e.tabOverride||e.controlSetRows.some((e=>e.some((e=>e&&"object"==typeof e&&"config"in e&&e.config&&(!e.config.renderTrigger||"data"===e.config.tabOverride)))))?r.push(e):e.controlSetRows.length>0&&o.push(e)})),{expandedQuerySections:ut(r,t),expandedCustomizeSections:ut(o,t),querySections:r,customizeSections:o}}(b.viz_type,e.exploreState.datasource,e.datasource_type)),[e.exploreState.datasource,b.viz_type,e.datasource_type]),N=(0,r.useCallback)((()=>{(0,de.Z)(e.exploreState.controlsTransferred).forEach((t=>e.actions.setControlValue(t,e.controls[t].default)))}),[e.actions,e.exploreState.controlsTransferred,e.controls]),A=(0,r.useCallback)((()=>{N(),m(!1)}),[N]),D=(0,r.useCallback)((()=>{m(!1)}),[]),O=t=>{let{name:a,config:r}=t;const{controls:o,chart:n,exploreState:i}=e;return Boolean(null==r.shouldMapStateToProps?void 0:r.shouldMapStateToProps(c||i,i,o[a],n))},M=ht((()=>({})),b.viz_type),U=t=>{const{controls:a}=e,{label:o,description:i}=t,s=String(o),c=t.controlSetRows.some((e=>e.some((e=>{const t="string"==typeof e?e:e&&"name"in e?e.name:null;return t&&t in a&&a[t].validationErrors&&a[t].validationErrors.length>0}))));c||(M.current[s]=!0);const d=M.current[s]?n.error.base:n.alert.base;return(0,$.tZ)(Je.Z.Panel,{css:e=>$.iv`
          margin-bottom: 0;
          box-shadow: none;

          &:last-child {
            padding-bottom: ${16*e.gridUnit}px;
            border-bottom: 0;
          }

          .panel-body {
            margin-left: ${4*e.gridUnit}px;
            padding-bottom: 0;
          }

          span.label {
            display: inline-block;
          }
          ${!t.label&&"\n            .ant-collapse-header {\n              display: none;\n            }\n          "}
        `,header:(0,$.tZ)((()=>(0,$.tZ)("span",null,(0,$.tZ)("span",{css:e=>$.iv`
            font-size: ${e.typography.sizes.m}px;
            line-height: 1.3;
          `},o)," ",i&&(0,$.tZ)(j.u,{id:s,title:i},(0,$.tZ)(q.Z.InfoCircleOutlined,{css:st})),c&&(0,$.tZ)(j.u,{id:`${Be()("validation-errors")}-tooltip`,title:(0,l.t)("This section contains validation errors")},(0,$.tZ)(q.Z.InfoCircleOutlined,{css:$.iv`
                ${st};
                color: ${d};
              `})))),null),key:s},t.controlSetRows.map(((t,a)=>{const o=t.map((t=>t?r.isValidElement(t)?t:t.name&&t.config&&"datasource"!==t.name?(t=>{let{name:a,config:r}=t;const{controls:o,chart:n,exploreState:i}=e,{visibility:s}=r,c={...r,...o[a],...O({name:a,config:r})?null==r||null==r.mapStateToProps?void 0:r.mapStateToProps(i,o[a],n):void 0,name:a},{validationErrors:d,label:u,description:h,...p}=c,m=s?s.call(r,e,c):void 0,g="function"==typeof u?u(i,o[a],n):u,v="function"==typeof h?h(i,o[a],n):h;return"adhoc_filters"===a&&(p.canDelete=(e,t)=>{var a;const r=e=>e.operator===ot.d.TEMPORAL_RANGE;return!((null==o||null==(a=o.time_range)||!a.value)&&r(e)&&1===t.filter(r).length)||(0,l.t)("You cannot delete the last temporal filter as it's used for time range filters in dashboards.")}),(0,$.tZ)(at.Z,w()({key:`control-${a}`,name:a,label:g,description:v,validationErrors:d,actions:e.actions,isVisible:m},p))})(t):null:null)).filter((e=>null!==e));return 0===o.length?null:(0,$.tZ)(tt.Z,{key:`controlsetrow-${a}`,controls:o})})))},z=(0,de.Z)(e.exploreState.controlsTransferred).length>0,F=(0,r.useCallback)((()=>z?(0,$.tZ)(Ie,{title:(0,l.t)("Keep control settings?"),bodyText:(0,l.t)("You've changed datasets. Any controls with data (columns, metrics) that match this new dataset have been retained."),primaryButtonAction:D,secondaryButtonAction:A,primaryButtonText:(0,l.t)("Continue"),secondaryButtonText:(0,l.t)("Clear form"),type:"info"}):(0,$.tZ)(Ie,{title:(0,l.t)("No form settings were maintained"),bodyText:(0,l.t)("We were unable to carry over any controls when switching to this new dataset."),primaryButtonAction:D,primaryButtonText:(0,l.t)("Continue"),type:"warning"})),[A,D,z]),P=ht((()=>!1),b.viz_type),Q=(0,r.useMemo)((()=>{e.errorMessage||(P.current=!0);const t=P.current?n.error.base:n.alert.base;return(0,$.tZ)(r.Fragment,null,(0,$.tZ)("span",null,(0,l.t)("Data")),e.errorMessage&&(0,$.tZ)("span",{css:e=>$.iv`
              margin-left: ${2*e.gridUnit}px;
            `}," ",(0,$.tZ)(j.u,{id:"query-error-tooltip",placement:"right",title:e.errorMessage},(0,$.tZ)(q.Z.ExclamationCircleOutlined,{css:$.iv`
                  ${st};
                  color: ${t};
                `}))))}),[n.error.base,n.alert.base,P,e.errorMessage]);if(!(0,Ke.Z)().has(b.viz_type)&&s.loading)return(0,$.tZ)(d.Z,null);const V=E.length>0;return(0,$.tZ)(ct,{ref:g},(0,$.tZ)(dt,{id:"controlSections",fullWidth:V,allowOverflow:!1},(0,$.tZ)(Xe.ZP.TabPane,{key:"query",tab:Q},(0,$.tZ)(Je.Z,{defaultActiveKey:C,expandIconPosition:"right",ghost:!0},p&&(0,$.tZ)(F,null),T.map(U))),V&&(0,$.tZ)(Xe.ZP.TabPane,{key:"display",tab:(0,l.t)("Customize")},(0,$.tZ)(Je.Z,{defaultActiveKey:k,expandIconPosition:"right",ghost:!0},E.map(U)))),(0,$.tZ)("div",{css:lt},(0,$.tZ)(rt,{onQuery:e.onQuery,onStop:e.onStop,errorMessage:e.errorMessage,loading:"loading"===e.chart.chartStatus,isNewChart:!e.chart.queriesResponse,canStopQuery:e.canStopQuery,chartIsStale:e.chartIsStale})))};var mt=a(15926),gt=a.n(mt),vt=a(9882),ft=a(9875),bt=a(49238),yt=a(87183),St=a(4715),_t=a(22318);const wt="save_chart_recent_dashboard",xt=(0,R.iK)(et.Z)`
  .ant-modal-body {
    overflow: visible;
  }
  i {
    position: absolute;
    top: -${e=>{let{theme:t}=e;return 5.25*t.gridUnit}}px;
    left: ${e=>{let{theme:t}=e;return 26.75*t.gridUnit}}px;
  }
`;class Zt extends r.Component{constructor(e){var t,a;super(e),this.handleDatasetNameChange=e=>{this.setState({datasetName:e.target.value})},this.loadDashboard=async e=>(await ue.Z.get({endpoint:`/api/v1/dashboard/${e}`})).json.result,this.loadDashboards=async(e,t,a)=>{const r=gt().encode({columns:["id","dashboard_title"],filters:[{col:"dashboard_title",opr:"ct",value:e},{col:"owners",opr:"rel_m_m",value:this.props.user.userId}],page:t,page_size:a,order_column:"dashboard_title"}),{json:o}=await ue.Z.get({endpoint:`/api/v1/dashboard/?q=${r}`}),{result:n,count:i}=o;return{data:n.map((e=>({value:e.id,label:e.dashboard_title}))),totalCount:i}},this.renderSaveChartModal=()=>{var e;return(0,$.tZ)(bt.l0,{layout:"vertical"},(this.state.alert||this.props.alert)&&(0,$.tZ)(me.Z,{type:"warning",message:this.state.alert||this.props.alert,onClose:this.removeAlert}),(0,$.tZ)(bt.xJ,null,(0,$.tZ)(yt.Y,{id:"overwrite-radio",disabled:!this.canOverwriteSlice(),checked:"overwrite"===this.state.action,onChange:()=>this.changeAction("overwrite")},(0,l.t)("Save (Overwrite)")),(0,$.tZ)(yt.Y,{id:"saveas-radio",checked:"saveas"===this.state.action,onChange:()=>this.changeAction("saveas")},(0,l.t)("Save as..."))),(0,$.tZ)("hr",null),(0,$.tZ)(bt.xJ,{label:(0,l.t)("Chart name"),required:!0},(0,$.tZ)(ft.II,{name:"new_slice_name",type:"text",placeholder:"Name",value:this.state.newSliceName,onChange:this.onSliceNameChange})),"query"===(null==(e=this.props.datasource)?void 0:e.type)&&(0,$.tZ)(bt.xJ,{label:(0,l.t)("Dataset Name"),required:!0},(0,$.tZ)(vt.V,{tooltip:(0,l.t)("A reusable dataset will be saved with your chart."),placement:"right"}),(0,$.tZ)(ft.II,{name:"dataset_name",type:"text",placeholder:"Dataset Name",value:this.state.datasetName,onChange:this.handleDatasetNameChange})),!((0,pe.c)(se.T.DASHBOARD_NATIVE_FILTERS)&&"filter_box"===this.state.vizType)&&(0,$.tZ)(bt.xJ,{label:(0,l.t)("Add to dashboard")},(0,$.tZ)(St.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,l.t)("Select a dashboard"),options:this.loadDashboards,onChange:this.onDashboardChange,value:this.state.dashboard,placeholder:(0,$.tZ)("div",null,(0,$.tZ)("b",null,(0,l.t)("Select")),(0,l.t)(" a dashboard OR "),(0,$.tZ)("b",null,(0,l.t)("create")),(0,l.t)(" a new one"))})))},this.renderFooter=()=>{var e,t;return(0,$.tZ)("div",null,(0,$.tZ)(Ae.Z,{id:"btn_cancel",buttonSize:"small",onClick:this.onHide},(0,l.t)("Cancel")),(0,$.tZ)(Ae.Z,{id:"btn_modal_save_goto_dash",buttonSize:"small",disabled:!this.state.newSliceName||!this.state.dashboard||(null==(e=this.props.datasource)?void 0:e.type)!==ce.i9.Table&&!this.state.datasetName||(0,pe.c)(se.T.DASHBOARD_NATIVE_FILTERS)&&"filter_box"===this.state.vizType,onClick:()=>this.saveOrOverwrite(!0)},this.isNewDashboard()?(0,l.t)("Save & go to new dashboard"):(0,l.t)("Save & go to dashboard")),(0,$.tZ)(Ae.Z,{id:"btn_modal_save",buttonSize:"small",buttonStyle:"primary",onClick:()=>this.saveOrOverwrite(!1),disabled:this.state.isLoading||!this.state.newSliceName||(null==(t=this.props.datasource)?void 0:t.type)!==ce.i9.Table&&!this.state.datasetName},!this.canOverwriteSlice()&&this.props.slice?(0,l.t)("Save as new chart"):this.isNewDashboard()?(0,l.t)("Save to new dashboard"):(0,l.t)("Save")))},this.state={newSliceName:e.sliceName,datasetName:null==(t=e.datasource)?void 0:t.name,alert:null,action:this.canOverwriteSlice()?"overwrite":"saveas",isLoading:!1,vizType:null==(a=e.form_data)?void 0:a.viz_type,dashboard:void 0},this.onDashboardChange=this.onDashboardChange.bind(this),this.onSliceNameChange=this.onSliceNameChange.bind(this),this.changeAction=this.changeAction.bind(this),this.saveOrOverwrite=this.saveOrOverwrite.bind(this),this.isNewDashboard=this.isNewDashboard.bind(this),this.removeAlert=this.removeAlert.bind(this),this.onHide=this.onHide.bind(this)}isNewDashboard(){const{dashboard:e}=this.state;return"string"==typeof(null==e?void 0:e.value)}canOverwriteSlice(){var e,t,a;return(null==(e=this.props.slice)||null==(t=e.owners)?void 0:E()(t).call(t,this.props.user.userId))&&!(null!=(a=this.props.slice)&&a.is_managed_externally)}async componentDidMount(){let{dashboardId:e}=this.props;if(!e){const t=sessionStorage.getItem(wt);e=t&&parseInt(t,10)}if(e)try{const t=await this.loadDashboard(e);(0,_t.Ms)(t,this.props.user)&&this.setState({dashboard:{label:t.dashboard_title,value:t.id}})}catch(e){this.props.actions.addDangerToast((0,l.t)("An error occurred while loading dashboard information."))}}onSliceNameChange(e){this.setState({newSliceName:e.target.value})}onDashboardChange(e){this.setState({dashboard:e})}changeAction(e){this.setState({action:e})}onHide(){this.props.dispatch((0,re.setSaveChartModalVisibility)(!1))}async saveOrOverwrite(e){this.setState({alert:null,isLoading:!0}),this.props.actions.removeSaveModalAlert();try{var t;if((null==(t=this.props.datasource)?void 0:t.type)===ce.i9.Query){const{schema:e,sql:t,database:a}=this.props.datasource,{templateParams:r}=this.props.datasource;await this.props.actions.saveDataset({schema:e,sql:t,database:a,templateParams:r,datasourceName:this.state.datasetName})}let r=[];this.props.slice&&"overwrite"===this.state.action&&(r=await this.props.actions.getSliceDashboards(this.props.slice));const o=this.props.form_data||{};delete o.url_params;let n,s=null;if(this.state.dashboard){var a;let e=this.state.dashboard.value;this.isNewDashboard()&&(e=(await this.props.actions.createDashboard(this.state.dashboard.label)).id);try{s=await this.loadDashboard(e)}catch(e){return void this.props.actions.saveSliceFailed()}(0,i.Z)(s)&&(0,i.Z)(null==(a=s)?void 0:a.id)&&(r=E()(r).call(r,s.id)?r:[...r,s.id],o.dashboards=r)}if(this.props.actions.setFormData({...o}),n="overwrite"===this.state.action?await this.props.actions.updateSlice(this.props.slice,this.state.newSliceName,r,s?{title:s.dashboard_title,new:this.isNewDashboard()}:null):await this.props.actions.createSlice(this.state.newSliceName,r,s?{title:s.dashboard_title,new:this.isNewDashboard()}:null),s?sessionStorage.setItem(wt,`${s.id}`):sessionStorage.removeItem(wt),e&&s)return void this.props.history.push(s.url);const l=new URLSearchParams(window.location.search);l.set("save_action",this.state.action),"overwrite"!==this.state.action&&l.delete("form_data_key"),"saveas"===this.state.action&&l.set("slice_id",n.id.toString()),this.props.history.replace(`/explore/?${l.toString()}`),this.setState({isLoading:!1}),this.onHide()}finally{this.setState({isLoading:!1})}}removeAlert(){this.props.alert&&this.props.actions.removeSaveModalAlert(),this.setState({alert:null})}render(){return(0,$.tZ)(xt,{show:this.props.isVisible,onHide:this.onHide,title:(0,l.t)("Save chart"),footer:this.renderFooter()},this.state.isLoading?(0,$.tZ)("div",{css:$.iv`
              display: flex;
              justify-content: center;
            `},(0,$.tZ)(d.Z,{position:"normal"})):this.renderSaveChartModal())}}const Ct=(0,n.EN)((0,o.$j)((function(e){let{explore:t,saveModal:a,user:r}=e;return{datasource:t.datasource,slice:t.slice,user:r,dashboards:a.dashboards,alert:a.saveModalAlert,isVisible:a.isVisible}}))(Zt));var kt=a(1469),Tt=a.n(kt),Et=a(90233),Nt=a(27034),At=a(42753),Dt=a(99963);const Rt=R.iK.div`
  ${e=>{let{theme:t}=e;return $.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${6*t.gridUnit}px;
    padding: 0 ${t.gridUnit}px;

    // hack to make the drag preview image corners rounded
    transform: translate(0, 0);
    background-color: inherit;
    border-radius: 4px;

    > div {
      min-width: 0;
      margin-right: ${2*t.gridUnit}px;
    }
  `}}
`;function $t(e){const{labelRef:t,showTooltip:a,type:r,value:o}=e,[{isDragging:n},i]=(0,Nt.c)({item:{value:e.value,type:e.type},collect:e=>({isDragging:e.isDragging()})}),s={labelRef:t,showTooltip:!n&&a,showType:!0};return(0,$.tZ)(Rt,{ref:i},r===At.g.Column?(0,$.tZ)(Dt.l,w()({column:o},s)):(0,$.tZ)(Dt.B,w()({metric:o},s)),(0,$.tZ)(q.Z.Drag,null))}const Ot=(0,pe.c)(se.T.ENABLE_EXPLORE_DRAG_AND_DROP),It=R.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
`,Mt=R.iK.div`
  text-align: center;
  padding-top: 2px;
`,Ut=R.iK.div`
  ${e=>{let{theme:t}=e;return $.iv`
    background-color: ${t.colors.grayscale.light5};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    .ant-collapse {
      height: auto;
    }
    .field-selections {
      padding: 0 0 ${4*t.gridUnit}px;
      overflow: auto;
    }
    .field-length {
      margin-bottom: ${2*t.gridUnit}px;
      font-size: ${t.typography.sizes.s}px;
      color: ${t.colors.grayscale.light1};
    }
    .form-control.input-md {
      width: calc(100% - ${8*t.gridUnit}px);
      height: ${8*t.gridUnit}px;
      margin: ${2*t.gridUnit}px auto;
    }
    .type-label {
      font-size: ${t.typography.sizes.s}px;
      color: ${t.colors.grayscale.base};
    }
    .Control {
      padding-bottom: 0;
    }
  `}};
`,zt=R.iK.div`
  ${e=>{let{theme:t}=e;return $.iv`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${t.typography.sizes.s}px;
    background-color: ${t.colors.grayscale.light4};
    margin: ${2*t.gridUnit}px 0;
    border-radius: 4px;
    padding: 0 ${t.gridUnit}px;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    ${Ot&&$.iv`
      padding: 0;
      cursor: pointer;
      &:hover {
        background-color: ${t.colors.grayscale.light3};
      }
    `}

    & > span {
      white-space: nowrap;
    }

    .option-label {
      display: inline;
    }

    .metric-option {
      & > svg {
        min-width: ${4*t.gridUnit}px;
      }
      & > .option-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `}}
`,Lt=R.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.m}px;\n    line-height: 1.3;\n  `}}
`,jt=R.iK.div`
  ${e=>{let{theme:t}=e;return $.iv`
    margin: 0 ${2.5*t.gridUnit}px;

    span {
      text-decoration: underline;
    }
  `}}
`,qt=e=>{const t={labelRef:(0,r.useRef)(null)};return(0,$.tZ)(zt,{className:e.className},r.cloneElement(e.children,t))};function Ft(e){var t;let{datasource:a,formData:o,controls:{datasource:n},actions:i,shouldForceUpdate:s}=e;const{columns:c,metrics:d}=a,u=(0,r.useMemo)((()=>[...Tt()(c)?c:[]].sort(((e,t)=>null==e||!e.is_dttm||null!=t&&t.is_dttm?null==t||!t.is_dttm||null!=e&&e.is_dttm?0:1:-1))),[c]),[h,m]=(0,r.useState)(!1),[g,v]=(0,r.useState)(""),[f,b]=(0,r.useState)({columns:u,metrics:d}),[y,S]=(0,r.useState)(!1),[_,x]=(0,r.useState)(!1),Z=(0,r.useMemo)((()=>k()((e=>{b(""!==e?{columns:(0,Et.Lu)(u,e,{keys:[{key:"verbose_name",threshold:Et.tL.CONTAINS},{key:"column_name",threshold:Et.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:Et.tL.CONTAINS,maxRanking:Et.tL.CONTAINS}],keepDiacritics:!0}),metrics:(0,Et.Lu)(d,e,{keys:[{key:"verbose_name",threshold:Et.tL.CONTAINS},{key:"metric_name",threshold:Et.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:Et.tL.CONTAINS,maxRanking:Et.tL.CONTAINS}],keepDiacritics:!0,baseSort:(e,t)=>{var a,r,o,n,i,s;return Number(null!=(a=null==t||null==(r=t.item)?void 0:r.is_certified)?a:0)-Number(null!=(o=null==e||null==(n=e.item)?void 0:n.is_certified)?o:0)||String(null!=(i=null==e?void 0:e.rankedValue)?i:"").localeCompare(null!=(s=null==t?void 0:t.rankedValue)?s:"")}})}:{columns:u,metrics:d})}),p.oP)),[u,d]);(0,r.useEffect)((()=>{b({columns:u,metrics:d}),v("")}),[u,a,d]);const C=(0,r.useMemo)((()=>{var e;return y?null==f?void 0:f.metrics:null==f||null==(e=f.metrics)||null==e.slice?void 0:e.slice(0,50)}),[null==f?void 0:f.metrics,y]),T=(0,r.useMemo)((()=>{var e;return(_?null==f?void 0:f.columns:null==f||null==(e=f.columns)||null==e.slice?void 0:e.slice(0,50)).sort(((e,t)=>{var a,r;return(null!=(a=null==t?void 0:t.is_certified)?a:0)-(null!=(r=null==e?void 0:e.is_certified)?r:0)}))}),[f.columns,_]),E={query:ce.i9.Query,saved_query:ce.i9.SavedQuery},N=a.type&&E[a.type],A=(0,r.useMemo)((()=>{var e;return(0,$.tZ)(r.Fragment,null,(0,$.tZ)(ft.II,{allowClear:!0,onChange:e=>{v(e.target.value),Z(e.target.value)},value:g,className:"form-control input-md",placeholder:(0,l.t)("Search Metrics & Columns")}),(0,$.tZ)("div",{className:"field-selections"},N&&"false"!==sessionStorage.getItem("showInfobox")&&(0,$.tZ)(jt,null,(0,$.tZ)(me.Z,{closable:!0,onClose:()=>sessionStorage.setItem("showInfobox","false"),type:"info",message:"",description:(0,$.tZ)(r.Fragment,null,(0,$.tZ)("span",{role:"button",tabIndex:0,onClick:()=>m(!0),className:"add-dataset-alert-description"},(0,l.t)("Create a dataset")),(0,l.t)(" to edit or add columns and metrics."))})),(0,$.tZ)(Je.Z,{defaultActiveKey:["metrics","column"],expandIconPosition:"right",ghost:!0},(null==d?void 0:d.length)&&(0,$.tZ)(Je.Z.Panel,{header:(0,$.tZ)(Lt,null,(0,l.t)("Metrics")),key:"metrics"},(0,$.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",null==C?void 0:C.length,null==f?void 0:f.metrics.length)),null==C||null==C.map?void 0:C.map((e=>(0,$.tZ)(qt,{key:e.metric_name+String(s),className:"column"},Ot?(0,$.tZ)($t,{value:e,type:At.g.Metric}):(0,$.tZ)(Dt.B,{metric:e,showType:!0})))),(null==f||null==(e=f.metrics)?void 0:e.length)>50?(0,$.tZ)(Mt,null,(0,$.tZ)(It,{onClick:()=>S(!y)},y?(0,l.t)("Show less..."):(0,l.t)("Show all..."))):(0,$.tZ)(r.Fragment,null)),(0,$.tZ)(Je.Z.Panel,{header:(0,$.tZ)(Lt,null,(0,l.t)("Columns")),key:"column"},(0,$.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",T.length,f.columns.length)),T.map((e=>(0,$.tZ)(qt,{key:e.column_name+String(s),className:"column"},Ot?(0,$.tZ)($t,{value:e,type:At.g.Column}):(0,$.tZ)(Dt.l,{column:e,showType:!0})))),f.columns.length>50?(0,$.tZ)(Mt,null,(0,$.tZ)(It,{onClick:()=>x(!_)},_?(0,l.t)("Show Less..."):(0,l.t)("Show all..."))):(0,$.tZ)(r.Fragment,null)))))}),[T,g,f.columns.length,null==f||null==(t=f.metrics)?void 0:t.length,C,Z,_,y,N,s]);return(0,$.tZ)(Ut,null,N&&h&&(0,$.tZ)(ge.W,{visible:h,onHide:()=>m(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,ve.z)(a),openWindow:!1,formData:o}),(0,$.tZ)(at.Z,w()({},n,{name:"datasource",actions:i})),null!=a.id&&A)}var Pt=a(28062),Qt=a(41609),Vt=a.n(Qt),Bt=a(18446),Ht=a.n(Bt),Kt=a(88306),Wt=a.n(Kt),Yt=a(38575),Gt=a(92252);const Jt=Wt()(((e,t)=>{const a={};return((null==t?void 0:t.controlPanelSections)||[]).filter(Yt.D_).forEach((e=>{e.controlSetRows.forEach((e=>{e.forEach((e=>{e&&("string"==typeof e?a[e]=Gt.ai[e]:e.name&&e.config&&(a[e.name]=e.config))}))}))})),a}));var Xt=a(9679),ea=a(1304),ta=a(76962);const aa={origFormData:A().object.isRequired,currentFormData:A().object.isRequired},ra=R.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.dark1};\n    background-color: ${t.colors.alert.base};\n\n    &: hover {\n      background-color: ${t.colors.alert.dark1};\n    }\n  `}}
`;function oa(e){if(null==e||""===e)return null;if("object"==typeof e){if(Array.isArray(e)&&0===e.length)return null;const t=Object.keys(e);if(t&&0===t.length)return null}return e}class na extends r.Component{constructor(e){super(e);const t=this.getDiffs(e),a=(e=>{const t=(0,Ke.Z)().get(e);return Jt(e,t)})(this.props.origFormData.viz_type),r=this.getRowsFromDiffs(t,a);this.state={rows:r,hasDiffs:!Vt()(t),controlsMap:a}}UNSAFE_componentWillReceiveProps(e){if(Ht()(this.props,e))return;const t=this.getDiffs(e);this.setState((e=>({rows:this.getRowsFromDiffs(t,e.controlsMap),hasDiffs:!Vt()(t)})))}getRowsFromDiffs(e,t){return Object.entries(e).map((e=>{let[a,r]=e;return{control:t[a]&&t[a].label||a,before:this.formatValue(r.before,a,t),after:this.formatValue(r.after,a,t)}}))}getDiffs(e){const t=(0,J.BR)(e.origFormData),a=(0,J.BR)(e.currentFormData),r=Object.keys(a),o={};return r.forEach((e=>{var r;(t[e]||a[e])&&(E()(r=["filters","having","where"]).call(r,e)||this.isEqualish(t[e],a[e])||(o[e]={before:t[e],after:a[e]}))})),o}isEqualish(e,t){return Ht()(oa(e),oa(t))}formatValue(e,t,a){var r,o,n,i;if(void 0===e)return"N/A";if(null===e)return"null";if("AdhocFilterControl"===(null==(r=a[t])?void 0:r.type))return e.length?e.map((e=>{const t=e.comparator&&e.comparator.constructor===Array?`[${e.comparator.join(", ")}]`:e.comparator;return`${e.subject} ${e.operator} ${t}`})).join(", "):"[]";if("BoundsControl"===(null==(o=a[t])?void 0:o.type))return`Min: ${e[0]}, Max: ${e[1]}`;if("CollectionControl"===(null==(n=a[t])?void 0:n.type))return e.map((e=>(0,Xt.o)(e))).join(", ");if("MetricsControl"===(null==(i=a[t])?void 0:i.type)&&e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}if("boolean"==typeof e)return e?"true":"false";if(e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}return"string"==typeof e||"number"==typeof e?e:(0,Xt.o)(e)}renderModalBody(){const e=[{accessor:"control",Header:(0,l.t)("Control")},{accessor:"before",Header:(0,l.t)("Before")},{accessor:"after",Header:(0,l.t)("After")}];return(0,$.tZ)(ta.Z,{columns:e,data:this.state.rows,pageSize:50,className:"table-condensed",columnsForWrapText:["Control","Before","After"]})}renderTriggerNode(){return(0,$.tZ)(j.u,{id:"difference-tooltip",title:(0,l.t)("Click to see difference")},(0,$.tZ)(ra,{className:"label"},(0,l.t)("Altered")))}render(){return this.state.hasDiffs?(0,$.tZ)(ea.Z,{triggerNode:this.renderTriggerNode(),modalTitle:(0,l.t)("Chart changes"),modalBody:this.renderModalBody(),responsive:!0}):null}}na.propTypes=aa;var ia=a(83673),sa=a(52564),la=a(67697),ca=a(96022);const da={actions:A().object.isRequired,canOverwrite:A().bool.isRequired,canDownload:A().bool.isRequired,dashboardId:A().number,isStarred:A().bool.isRequired,slice:A().object,sliceName:A().string,table_name:A().string,formData:A().object,ownState:A().object,timeout:A().number,chart:Y.$6,saveDisabled:A().bool},ua=e=>$.iv`
  color: ${e.colors.primary.dark2};
  & > span[role='img'] {
    margin-right: 0;
  }
`,ha=e=>$.iv`
  display: flex;
  align-items: center;
  margin-left: ${e.gridUnit}px;
  & > span {
    margin-right: ${3*e.gridUnit}px;
  }
`,pa=e=>{var t;let{dashboardId:a,slice:n,actions:i,formData:s,ownState:c,chart:d,user:u,canOverwrite:h,canDownload:p,isStarred:m,sliceName:g,saveDisabled:v,metadata:f}=e;const b=(0,o.I0)(),{latestQueryFormData:y,sliceFormData:S}=d,[_,w]=(0,r.useState)(!1);(0,r.useEffect)((()=>{a&&(async()=>{const{dashboards:e}=f||{},t=a&&e&&e.find((e=>e.id===a));if(t)try{var r;const e=await ue.Z.get({endpoint:`/api/v1/dashboard/${t.id}`}),a=null==e||null==(r=e.json)?void 0:r.result,o=JSON.parse(a.json_metadata),n=o.shared_label_colors||{},i=o.label_colors||{},s={...n,...i},l=Pt.getNamespace();Object.keys(s).forEach((e=>{l.setColor(e,s[e],o.color_scheme)}))}catch(e){O.Z.info((0,l.t)("Unable to retrieve dashboard colors"))}})()}),[]);const x=(0,r.useCallback)((()=>{b((0,re.setSaveChartModalVisibility)(!0))}),[b]),Z=(0,r.useCallback)((e=>{b((0,ae.sliceUpdated)(e))}),[b]),[C,k,T]=(0,ca.gT)(y,p,n,i.redirectSQLLab,(()=>{w(!0)}),c,null==f?void 0:f.dashboards),N=(0,r.useMemo)((()=>{if(!f)return null;const e=[];return e.push({type:la.pG.DASHBOARDS,title:f.dashboards.length>0?(0,l.tn)("Added to 1 dashboard","Added to %s dashboards",f.dashboards.length,f.dashboards.length):(0,l.t)("Not added to any dashboard"),description:f.dashboards.length>0?(0,l.t)("You can preview the list of dashboards in the chart settings dropdown."):void 0}),e.push({type:la.pG.LAST_MODIFIED,value:f.changed_on_humanized,modifiedBy:f.changed_by||(0,l.t)("Not available")}),e.push({type:la.pG.OWNER,createdBy:f.created_by||(0,l.t)("Not available"),owners:f.owners.length>0?f.owners:(0,l.t)("None"),createdOn:f.created_on_humanized}),null!=n&&n.description&&e.push({type:la.pG.DESCRIPTION,value:null==n?void 0:n.description}),(0,$.tZ)(la.ZP,{items:e,tooltipPlacement:"bottom"})}),[f,null==n?void 0:n.description]),A=null==n?void 0:n.slice_name;return(0,$.tZ)(r.Fragment,null,(0,$.tZ)(sa.u,{editableTitleProps:{title:g,canEdit:!n||h||E()(t=(null==n?void 0:n.owners)||[]).call(t,null==u?void 0:u.userId),onSave:i.updateChartTitle,placeholder:(0,l.t)("Add the name of the chart"),label:(0,l.t)("Chart title")},showTitlePanelItems:!!n,certificatiedBadgeProps:{certifiedBy:null==n?void 0:n.certified_by,details:null==n?void 0:n.certification_details},showFaveStar:!(null==u||!u.userId),faveStarProps:{itemId:null==n?void 0:n.slice_id,fetchFaveStar:i.fetchFaveStar,saveFaveStar:i.saveFaveStar,isStarred:m,showTooltip:!0},titlePanelAdditionalItems:(0,$.tZ)("div",{css:ha},S?(0,$.tZ)(na,{className:"altered",origFormData:{...S,chartTitle:A},currentFormData:{...s,chartTitle:g}}):null,N),rightPanelAdditionalItems:(0,$.tZ)(j.u,{title:v?(0,l.t)("Add required control values to save chart"):null},(0,$.tZ)("div",null,(0,$.tZ)(Ae.Z,{buttonStyle:"secondary",onClick:x,disabled:v,css:ua},(0,$.tZ)(q.Z.SaveOutlined,{iconSize:"l"}),(0,l.t)("Save")))),additionalActionsMenu:C,menuDropdownProps:{visible:k,onVisibleChange:T}}),_&&(0,$.tZ)(ia.Z,{show:_,onHide:()=>{w(!1)},onSave:Z,slice:n}))};pa.propTypes=da;const ma=pa,ga={...Qe.propTypes,actions:A().object.isRequired,datasource_type:A().string.isRequired,dashboardId:A().number,isDatasourceMetaLoading:A().bool.isRequired,chart:Y.$6.isRequired,slice:A().object,sliceName:A().string,controls:A().object.isRequired,forcedHeight:A().string,form_data:A().object.isRequired,standalone:A().bool.isRequired,force:A().bool,timeout:A().number,impressionId:A().string,vizType:A().string,saveAction:A().string,isSaveModalVisible:A().bool},va=R.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`,fa=R.iK.div`
  ${e=>{let{theme:t}=e;return $.iv`
    background: ${t.colors.grayscale.light5};
    text-align: left;
    position: relative;
    width: 100%;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    border-top: 1px solid ${t.colors.grayscale.light2};
    .explore-column {
      display: flex;
      flex-direction: column;
      padding: ${2*t.gridUnit}px 0;
      max-height: 100%;
    }
    .data-source-selection {
      background-color: ${t.colors.grayscale.light5};
      padding: ${2*t.gridUnit}px 0;
      border-right: 1px solid ${t.colors.grayscale.light2};
    }
    .main-explore-content {
      flex: 1;
      min-width: ${128*t.gridUnit}px;
      border-left: 1px solid ${t.colors.grayscale.light2};
      padding: 0 ${4*t.gridUnit}px;
      .panel {
        margin-bottom: 0;
      }
    }
    .controls-column {
      align-self: flex-start;
      padding: 0;
    }
    .title-container {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0 ${2*t.gridUnit}px 0 ${4*t.gridUnit}px;
      justify-content: space-between;
      .horizontal-text {
        font-size: ${t.typography.sizes.m}px;
      }
    }
    .no-show {
      display: none;
    }
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
    .sidebar {
      height: 100%;
      background-color: ${t.colors.grayscale.light4};
      padding: ${2*t.gridUnit}px;
      width: ${8*t.gridUnit}px;
    }
    .collapse-icon > svg {
      color: ${t.colors.primary.base};
    }
  `}};
`,ba=k()((async(e,t,a,r,o,n,i,s)=>{const l={...e},c=e.slice_id,d=new URLSearchParams(window.location.search),u=Object.fromEntries(d);c?u[p.KD.sliceId.name]=c:(u[p.KD.datasourceId.name]=t,u[p.KD.datasourceType.name]=a);const m=(null==l?void 0:l.url_params)||{};Object.entries(m).forEach((e=>{let[t,a]=e;E()(p.$O).call(p.$O,t)||(u[t]=a)}));try{let d,m;if(r?(d=await(0,J.nv)(t,a,e,c,s),m="replaceState"):(d=(0,h.eY)(p.KD.formDataKey),await(0,J.LW)(t,a,d,e,c,s),m="pushState"),window.location.pathname.startsWith("/explore")){const e=(0,ee.y8)(o?p.KD.standalone.name:null,{[p.KD.formDataKey.name]:d,...u},n);window.history[m](l,i,e)}}catch(e){O.Z.warn("Failed at altering browser history",e)}}),1e3);function ya(e){const t=(0,L.gp)().dynamicPlugins[e.vizType],a=t&&t.mounting,o=(0,I.D)(a),n=(0,I.D)(e.controls),[i,s]=(0,r.useState)(e.controls),[c,d]=(0,r.useState)(!1),[u,h]=(0,r.useState)(-1),p=(0,oe.z)(),m=(0,R.Fg)(),g={controls_width:320,datasource_width:300},v=(0,r.useCallback)((async function(t){let{isReplace:a=!1,title:r}=void 0===t?{}:t;const o=e.dashboardId?{...e.form_data,dashboardId:e.dashboardId}:e.form_data,{id:n,type:i}=e.datasource;ba(o,n,i,a,e.standalone,e.force,r,p)}),[e.dashboardId,e.form_data,e.datasource.id,e.datasource.type,e.standalone,e.force,p]),f=(0,r.useCallback)((()=>{const t=window.history.state;t&&Object.keys(t).length&&(e.actions.setExploreControls(t),e.actions.postChartFormData(t,e.force,e.timeout,e.chart.id))}),[e.actions,e.chart.id,e.timeout]),b=(0,r.useCallback)((()=>{e.actions.setForceQuery(!1),e.actions.triggerQuery(!0,e.chart.id),v(),s(e.controls)}),[e.controls,v,e.actions,e.chart.id]),y=(0,r.useCallback)((t=>{if(t.ctrlKey||t.metaKey){const a="Enter"===t.key||13===t.keyCode,r="s"===t.key||83===t.keyCode;a?b():r&&e.slice&&e.actions.saveSlice(e.form_data,{action:"overwrite",slice_id:e.slice.slice_id,slice_name:e.slice.slice_name,add_to_dash:"noSave",goto_dash:!1}).then((e=>{let{data:t}=e;window.location=t.slice.slice_url}))}}),[b,e.actions,e.form_data,e.slice]);function S(){d(!c)}(0,M.J)((()=>{e.actions.logEvent(V.$b)})),(0,U.S)(p,((e,t)=>{t&&v({isReplace:!0})}));const _=(0,I.D)(f);(0,r.useEffect)((()=>(_&&window.removeEventListener("popstate",_),window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)})),[f,_]);const x=(0,I.D)(y);(0,r.useEffect)((()=>(x&&window.removeEventListener("keydown",x),document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)})),[y,x]),(0,r.useEffect)((()=>{o&&!a&&e.actions.dynamicPluginControlsReady()}),[a]),(0,r.useEffect)((()=>{Object.values(e.controls).some((e=>e.validationErrors&&e.validationErrors.length>0))||e.actions.triggerQuery(!0,e.chart.id)}),[]);const C=(0,r.useCallback)((t=>{const a=t?{...e.chart.latestQueryFormData,...(0,te.Hu)(Z()(e.controls,t))}:(0,te.Hu)(e.controls);e.actions.updateQueryFormData(a,e.chart.id),e.actions.renderTriggered((new Date).getTime(),e.chart.id),v()}),[v,e.actions,e.chart.id,e.chart.latestQueryFormData,e.controls]);(0,r.useEffect)((()=>{if(n&&e.chart.latestQueryFormData.viz_type===e.controls.viz_type.value){!e.controls.datasource||null!=n.datasource&&e.controls.datasource.value===n.datasource.value||(0,W.QR)(e.form_data.datasource,!0);const t=Object.keys(e.controls).filter((t=>void 0!==n[t]&&!(0,P.JB)(e.controls[t].value,n[t].value))).filter((t=>e.controls[t].renderTrigger));t.length>0&&C(t)}}),[e.controls,e.ownState]);const k=(0,r.useMemo)((()=>!!i&&Object.keys(e.controls).filter((t=>void 0!==i[t]&&!(0,P.JB)(e.controls[t].value,i[t].value,{ignoreFields:["datasourceWarning"]}))).some((t=>!e.controls[t].renderTrigger&&!e.controls[t].dontRefreshOnChange))),[i,e.controls]);(0,U.S)(e.saveAction,(()=>{var t;E()(t=["saveas","overwrite"]).call(t,e.saveAction)&&(b(),v({isReplace:!0}),e.actions.setSaveAction(null))})),(0,r.useEffect)((()=>{void 0!==e.ownState&&(b(),C())}),[e.ownState]),k&&e.actions.logEvent(V.Ep);const T=(0,r.useMemo)((()=>{const t=Object.values(e.controls).filter((e=>e.validationErrors&&e.validationErrors.length>0));if(0===t.length)return null;const a=t.map((e=>e.validationErrors)),r=[...new Set(a.flat())].map((e=>[t.filter((t=>{var a;return null==(a=t.validationErrors)?void 0:E()(a).call(a,e)})).map((e=>e.label)),e])).map((e=>{let[t,a]=e;return(0,$.tZ)("div",{key:a},t.length>1?(0,l.t)("Controls labeled "):(0,l.t)("Control labeled "),(0,$.tZ)("strong",null,` ${t.join(", ")}`),(0,$.tZ)("span",null,": ",a))}));let o;return r.length>0&&(o=(0,$.tZ)("div",{style:{textAlign:"left"}},r)),o}),[e.controls]);function N(){return(0,$.tZ)(Qe,w()({},e,{errorMessage:T,chartIsStale:k,onQuery:b}))}function A(e){return(0,F.rV)(e,g[e])}function D(e,t){const a=Number(A(e))+t.width;(0,F.LS)(e,a)}return e.standalone?N():(0,$.tZ)(va,null,(0,$.tZ)(ma,{actions:e.actions,canOverwrite:e.can_overwrite,canDownload:e.can_download,dashboardId:e.dashboardId,isStarred:e.isStarred,slice:e.slice,sliceName:e.sliceName,table_name:e.table_name,formData:e.form_data,chart:e.chart,ownState:e.ownState,user:e.user,reports:e.reports,saveDisabled:T||"loading"===e.chart.chartStatus,metadata:e.metadata}),(0,$.tZ)(fa,{id:"explore-container"},(0,$.tZ)($.xB,{styles:$.iv`
            .navbar {
              margin-bottom: 0;
            }
            body {
              height: 100vh;
              max-height: 100vh;
              overflow: hidden;
            }
            #app-menu,
            #app {
              flex: 1 1 auto;
            }
            #app {
              flex-basis: 100%;
              overflow: hidden;
              height: 100%;
            }
            #app-menu {
              flex-shrink: 0;
            }
          `}),(0,$.tZ)(z.e,{onResizeStop:(e,t,a,r)=>{h(null==r?void 0:r.width),D(F.dR.datasource_width,r)},defaultSize:{width:A(F.dR.datasource_width),height:"100%"},minWidth:g[F.dR.datasource_width],maxWidth:"33%",enable:{right:!0},className:c?"no-show":"explore-column data-source-selection"},(0,$.tZ)("div",{className:"title-container"},(0,$.tZ)("span",{className:"horizontal-text"},(0,l.t)("Chart Source")),(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:S},(0,$.tZ)(q.Z.Expand,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"}))),(0,$.tZ)(Ft,{formData:e.form_data,datasource:e.datasource,controls:e.controls,actions:e.actions,shouldForceUpdate:u,user:e.user})),c?(0,$.tZ)("div",{className:"sidebar",onClick:S,role:"button",tabIndex:0},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button"},(0,$.tZ)(j.u,{title:(0,l.t)("Open Datasource tab")},(0,$.tZ)(q.Z.Collapse,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"})))):null,(0,$.tZ)(z.e,{onResizeStop:(e,t,a,r)=>D(F.dR.controls_width,r),defaultSize:{width:A(F.dR.controls_width),height:"100%"},minWidth:g[F.dR.controls_width],maxWidth:"33%",enable:{right:!0},className:"col-sm-3 explore-column controls-column"},(0,$.tZ)(pt,{exploreState:e.exploreState,actions:e.actions,form_data:e.form_data,controls:e.controls,chart:e.chart,datasource_type:e.datasource_type,isDatasourceMetaLoading:e.isDatasourceMetaLoading,onQuery:b,onStop:function(){e.chart&&e.chart.queryController&&e.chart.queryController.abort()},canStopQuery:e.can_add||e.can_overwrite,errorMessage:T,chartIsStale:k})),(0,$.tZ)("div",{className:H()("main-explore-content",c?"col-sm-9":"col-sm-7")},N())),e.isSaveModalVisible&&(0,$.tZ)(Ct,{addDangerToast:e.addDangerToast,actions:e.actions,form_data:e.form_data,sliceName:e.sliceName,dashboardId:e.dashboardId}))}ya.propTypes=ga;const Sa=(0,o.$j)((function(e){var t,a,r,o,n,i,s,l;const{explore:c,charts:d,common:u,impressionId:h,dataMask:p,reports:m,user:g,saveModal:v}=e,{controls:f,slice:b,datasource:y,metadata:S}=c,_=(0,te.Hu)(f),w=null!=(t=null!=(a=_.slice_id)?a:null==b?void 0:b.slice_id)?t:0;_.extra_form_data=(0,G.on)({..._.extra_form_data},{...null==(r=p[w])?void 0:r.ownState});const x=d[w];let Z=Number(null==(o=c.form_data)?void 0:o.dashboardId);return Number.isNaN(Z)&&(Z=void 0),{isDatasourceMetaLoading:c.isDatasourceMetaLoading,datasource:y,datasource_type:y.type,datasourceId:y.datasource_id,dashboardId:Z,controls:c.controls,can_add:!!c.can_add,can_download:!!c.can_download,can_overwrite:!!c.can_overwrite,column_formats:null!=(n=null==y?void 0:y.column_formats)?n:null,containerId:b?`slice-container-${b.slice_id}`:"slice-container",isStarred:c.isStarred,slice:b,sliceName:null!=(i=null!=(s=c.sliceName)?s:null==b?void 0:b.slice_name)?i:null,triggerRender:c.triggerRender,form_data:_,table_name:y.table_name,vizType:_.viz_type,standalone:!!c.standalone,force:!!c.force,chart:x,timeout:u.conf.SUPERSET_WEBSERVER_TIMEOUT,ownState:null==(l=p[w])?void 0:l.ownState,impressionId:h,user:g,exploreState:c,reports:m,metadata:S,saveAction:c.saveAction,isSaveModalVisible:v.isVisible}}),(function(e){const t={...ae,...X.yn,...re,...K,...Q};return{actions:(0,D.DE)(t,e)}}))((0,ne.ZP)(r.memo(ya)));a(65634);(0,l.t)("Chart Options"),(0,l.t)("Use Area Proportions"),(0,l.t)("Check if the Rose Chart should use segment area instead of segment radius for proportioning"),(0,l.t)("Stacked Style"),(0,l.t)("stack"),(0,l.t)("stream"),(0,l.t)("expand"),(0,l.t)("Chart Options"),(0,l.t)("Chart Options"),(0,l.t)("Columns"),(0,l.t)("Columns to display"),ce.i9.Table;const _a={form_data:{datasource:"0__table",viz_type:"table"},dataset:{id:0,type:ce.i9.Table,columns:[],metrics:[],column_formats:{},currency_formats:{},verbose_map:{},main_dttm_col:"",owners:[],datasource_name:"missing_datasource",name:"missing_datasource",description:null},slice:null};var wa=a(46306),xa=a(99232);const Za=e=>e.reduce(((e,t)=>{var a;return a=t,e.some((e=>(0,wa.jz)(e)&&(0,wa.jz)(a)&&e.clause===a.clause&&e.sqlExpression===a.sqlExpression||(0,wa.Ki)(e)&&(0,wa.Ki)(a)&&e.operator===a.operator&&e.subject===a.subject&&(!("comparator"in e)&&!("comparator"in a)||"comparator"in e&&"comparator"in a&&Ht()(e.comparator,a.comparator))))||e.push(t),e}),[]),Ca=(e,t)=>{const a=e.extra_form_data||{};return"time_range"in a?t.map((e=>"TEMPORAL_RANGE"===e.operator?{...e,comparator:a.time_range,isExtra:!0}:e)):t};function ka(){const[e,t]=(0,r.useState)(!1),a=(0,r.useRef)(!1),f=(0,o.I0)(),_=(0,n.TH)();return(0,r.useEffect)((()=>{const e=function(e){return void 0===e&&(e=window.location),new URLSearchParams(Object.entries({...y(e.search),...(t=e.pathname,Object.keys(b).reduce(((e,a)=>{const r=new RegExp(`/(${a})/(\\w+)`),o=t.match(r);return null!=o&&o[2]?{...e,[b[a]]:o[2]}:e}),{}))}).map((e=>e.join("="))).join("&"));var t}(_),r=(0,h.eY)(p.KD.saveAction),o=(()=>{const e=(t=(0,h.eY)(p.KD.dashboardPageId))&&(0,F.rV)(F.dR.dashboard__explore_context,{})[t]||null;var t;if(e){const t=(0,h.eY)(p.KD.sliceId)||0,{labelColors:a,sharedLabelColors:r,colorScheme:o,chartConfiguration:n,nativeFilters:i,filterBoxFilters:s,dataMask:l,dashboardId:c}=e,d=(0,g.Z)({chart:{id:t},filters:(0,v._f)(t,s),nativeFilters:i,chartConfiguration:n,colorScheme:o,dataMask:l,labelColors:a,sharedLabelColors:r,sliceId:t,allSliceIds:[t],extraControls:{}});return Object.assign(d,{dashboardId:c}),d}return null})();a.current&&!r||(async e=>{try{var t;const a=await(0,s.Z)({method:"GET",endpoint:"api/v1/explore/"})(e);if((e=>{var t,a,r;return(null==e||null==(t=e.result)?void 0:t.form_data)&&(0,i.Z)(null==e||null==(a=e.result)||null==(r=a.dataset)?void 0:r.id)})(a))return a;let r=(0,l.t)("Failed to load chart data");const o=null==a||null==(t=a.result)?void 0:t.message;throw o&&(r=`${r}:\n${o}`),new Error(r)}catch(e){const t=await(0,m.O$)(e);throw new Error(t.message||t.error||(0,l.t)("Failed to load chart data."))}})(e).then((e=>{let{result:t}=e;const n=!a.current&&o?((e,t)=>{const a=((e,t)=>{const a={__time_range:"time_range",__time_col:"granularity_sqla",__time_grain:"time_grain_sqla",__granularity:"granularity"},r={},o={};return(0,de.Z)(t.extra_filters).forEach((e=>{if(a[e.col])e.val!==He.vM&&(o[a[e.col]]=e.val,r[e.col]=e.val);else{const t=(0,xa.f)({...e,isExtra:!0});o.adhoc_filters=[...(0,de.Z)(o.adhoc_filters),t]}})),o.applied_time_extras=r,o})(0,t),r=((e,t)=>{const a={},r=t.extra_form_data||{};Object.entries(He.gn).forEach((e=>{let[t,o]=e;const n=r[t];(0,i.Z)(n)&&(a[o]=n)})),"time_grain_sqla"in r&&(a.time_grain_sqla=r.time_grain_sqla),"granularity_sqla"in r&&(a.granularity_sqla=r.granularity_sqla);const o=t.extras||{};He.fn.forEach((e=>{const t=r[e];(0,i.Z)(t)&&(o[e]=t)})),Object.keys(o).length&&(a.extras=o),a.adhoc_filters=(0,de.Z)(r.adhoc_filters).map((e=>({...e,isExtra:!0})));const n=(0,de.Z)(r.filters).map((e=>(0,xa.f)({...e,isExtra:!0})));return Object.keys(e).forEach((e=>{e.match(/adhoc_filter.*/)&&(a[e]=[...(0,de.Z)(a[e]),...n])})),a})(e,t),o=[...Object.keys(e),...Object.keys(a),...Object.keys(r)].filter((e=>e.match(/adhoc_filter.*/))).reduce(((o,n)=>{return{...o,[n]:(i=Ca(t,Za([...(0,de.Z)(e[n]),...(0,de.Z)(a[n]),...(0,de.Z)(r[n])])),s=0===e.slice_id,i.map((e=>e.isExtra?{...e,isExtra:!s}:e)))};var i,s}),{});return{...e,...t,...a,...r,...o}})(t.form_data,o):t.form_data;f((0,S.u)({...t,form_data:n,saveAction:r}))})).catch((e=>{f((0,S.u)(_a)),f((0,u.Gb)(e.message))})).finally((()=>{t(!0),a.current=!0})),(0,c.ZP)().source=c.Ag.explore}),[f,_]),e?(0,$.tZ)(Sa,null):(0,$.tZ)(d.Z,null)}}}]);
//# sourceMappingURL=42af02ffeaba4ca297da.chunk.js.map