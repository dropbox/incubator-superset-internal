(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1128],{90233:(e,t,a)=>{"use strict";a.d(t,{Lu:()=>l,tL:()=>i});var r=a(87462),o=a(76826),n=a.n(o),i={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};l.rankings=i;var s=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function l(e,t,a){void 0===a&&(a={});var o=a,n=o.keys,l=o.threshold,d=void 0===l?i.MATCHES:l,h=o.baseSort,m=void 0===h?s:h,g=o.sorter,f=void 0===g?function(e){return e.sort((function(e,t){return function(e,t,a){var r=e.rank,o=e.keyIndex,n=t.rank,i=t.keyIndex;return r===n?o===i?a(e,t):o<i?-1:1:r>n?-1:1}(e,t,m)}))}:g,v=e.reduce((function(e,o,s){var l=function(e,t,a,r){if(!t)return{rankedValue:e,rank:c(e,a,r),keyIndex:-1,keyThreshold:r.threshold};var o=function(e,t){for(var a=[],r=0,o=t.length;r<o;r++)for(var n=t[r],i=p(n),s=u(e,n),l=0,c=s.length;l<c;l++)a.push({itemValue:s[l],attributes:i});return a}(e,t);return o.reduce((function(e,t,o){var n=e.rank,s=e.rankedValue,l=e.keyIndex,d=e.keyThreshold,u=t.itemValue,h=t.attributes,p=c(u,a,r),m=s,g=h.minRanking,f=h.maxRanking,v=h.threshold;return p<g&&p>=i.MATCHES?p=g:p>f&&(p=f),p>n&&(n=p,l=o,d=v,m=u),{rankedValue:m,rank:n,keyIndex:l,keyThreshold:d}}),{rankedValue:e,rank:i.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold})}(o,n,t,a),h=l.rank,m=l.keyThreshold;return h>=(void 0===m?d:m)&&e.push((0,r.Z)({},l,{item:o,index:s})),e}),[]);return f(v).map((function(e){return e.item}))}function c(e,t,a){return e=d(e,a),(t=d(t,a)).length>e.length?i.NO_MATCH:e===t?i.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?i.EQUAL:e.startsWith(t)?i.STARTS_WITH:e.includes(" "+t)?i.WORD_STARTS_WITH:e.includes(t)?i.CONTAINS:1===t.length?i.NO_MATCH:(r=e,o="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){o+=e.substr(0,1)}))})),o).includes(t)?i.ACRONYM:function(e,t){var a=0,r=0;function o(e,t,r){for(var o=r,n=t.length;o<n;o++)if(t[o]===e)return a+=1,o+1;return-1}var n,s,l=o(t[0],e,0);if(l<0)return i.NO_MATCH;r=l;for(var c=1,d=t.length;c<d;c++)if(!((r=o(t[c],e,r))>-1))return i.NO_MATCH;return n=1/(r-l),s=a/t.length,i.MATCHES+s*n}(e,t);var r,o}function d(e,t){return e=""+e,t.keepDiacritics||(e=n()(e)),e}function u(e,t){var a;if("object"==typeof t&&(t=t.key),"function"==typeof t)a=t(e);else if(null==e)a=null;else if(Object.hasOwnProperty.call(e,t))a=e[t];else{if(t.includes("."))return function(e,t){for(var a=e.split("."),r=[t],o=0,n=a.length;o<n;o++){for(var i=a[o],s=[],l=0,c=r.length;l<c;l++){var d=r[l];if(null!=d)if(Object.hasOwnProperty.call(d,i)){var u=d[i];null!=u&&s.push(u)}else"*"===i&&(s=s.concat(d))}r=s}if(Array.isArray(r[0])){var h=[];return h.concat.apply(h,r)}return r}(t,e);a=null}return null==a?[]:Array.isArray(a)?a:[String(a)]}var h={maxRanking:1/0,minRanking:-1/0};function p(e){return"string"==typeof e?h:(0,r.Z)({},h,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},a=Object.keys(t).join("|"),r=new RegExp(a,"g"),o=new RegExp(a,""),n=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=n},5492:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(67294),o=a(51995),n=a(37921),i=a(44814),s=a(11965);const l=(0,o.iK)(n.Z)`
  text-align: left;
  font-family: ${e=>{let{theme:t}=e;return t.typography.families.monospace}};
`;function c(e){let{endTime:t,isRunning:a,startTime:o,status:n="success"}=e;const[c,d]=(0,r.useState)("00:00:00.00"),u=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=()=>{u.current&&(clearInterval(u.current),u.current=void 0)};return a&&(u.current=setInterval((()=>{if(o){const r=t||(0,i.zO)();o<r&&d((0,i.zQ)(o,r)),a||e()}}),30)),e}),[t,a,o]),(0,s.tZ)(l,{type:n,role:"timer"},c)}},80433:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Za});var r=a(67294),o=a(28216),n=a(16550),i=a(37731),s=a(22102),l=a(61988),c=a(78161),d=a(38703),u=a(72570),h=a(23525),p=a(27600),m=a(98286),g=a(91914),f=a(43399);const v={form_data:{name:"form_data",parser:e=>{const t=JSON.parse(e);if(t.datasource){const[e,a]=t.datasource.split("__");t.datasource_id=e,t.datasource_type=a,delete t.datasource}return t}},slice_id:{name:"slice_id"},datasource_id:{name:"datasource_id"},datasource_type:{name:"datasource_type"},datasource:{name:"datasource",parser:e=>{const[t,a]=e.split("__");return{datasource_id:t,datasource_type:a}}},form_data_key:{name:"form_data_key"},permalink_key:{name:"permalink_key"},viz_type:{name:"viz_type"},dashboard_id:{name:"dashboard_id"}},b={p:"permalink_key",table:"datasource_id"},y=e=>{const t=new URLSearchParams(e);return Array.from(t.keys()).reduce(((e,a)=>{var r;const o=t.get(a);if(null===o)return e;let n;try{var i,s,l;n=null!=(i=null==(s=(l=v[a]).parser)?void 0:s.call(l,o))?i:o}catch{n=o}if("object"==typeof n)return{...e,...n};const c=(null==(r=v[a])?void 0:r.name)||a;return{...e,[c]:n}}),{})},_=function(e){return void 0===e&&(e=window.location),new URLSearchParams(Object.entries({...y(e.search),...(t=e.pathname,Object.keys(b).reduce(((e,a)=>{const r=new RegExp(`/(${a})/(\\w+)`),o=t.match(r);return null!=o&&o[2]?{...e,[b[a]]:o[2]}:e}),{}))}).map((e=>e.join("="))).join("&"));var t};var S=a(76445),w=a(73126),x=a(78718),Z=a.n(x),C=a(23279),k=a.n(C),T=a(45697),E=a.n(T),N=a(14890),A=a(51995),D=a(11965),R=a(68492),$=a(85716),O=a(4756),I=a(28291),M=a(29119),U=a(14278),z=a(58593),L=a(70707),j=a(61337),q=a(99543),F=a(97381),P=a(3741),Q=a(94184),V=a.n(Q),B=a(52256),H=a(50810),K=a(2275),W=a(1510),Y=a(40219),G=a(99068),J=a(12515),X=a(10331),ee=a(651),te=a(19485),ae=a(6954),re=a(14114),oe=a(40323),ne=a(93185),ie=a(11064),se=a(46078),le=a(55786),ce=a(31069),de=a(40730),ue=a(29487),he=a(47710),pe=a(79217),me=a(75701),ge=a(21496),fe=a(89555),ve=a(37921),be=a(30381),ye=a.n(be);const _e=e=>{let{cachedTimestamp:t}=e;const a=t?(0,D.tZ)("span",null,(0,l.t)("Loaded data cached"),(0,D.tZ)("b",null," ",ye().utc(t).fromNow())):(0,l.t)("Loaded from cache");return(0,D.tZ)("span",null,a,". ",(0,l.t)("Click to force-refresh"))},Se=e=>{let{className:t,onClick:a,cachedTimestamp:o}=e;const[n,i]=(0,r.useState)(!1),s=n?"primary":"default";return(0,D.tZ)(z.u,{title:(0,D.tZ)(_e,{cachedTimestamp:o}),id:"cache-desc-tooltip"},(0,D.tZ)(ve.Z,{className:`${t}`,type:s,onClick:a,onMouseOver:()=>i(!0),onMouseOut:()=>i(!1)},(0,l.t)("Cached")," ",(0,D.tZ)("i",{className:"fa fa-refresh"})))};var we,xe=a(5492);!function(e){e.failed="danger",e.loading="warning",e.success="success"}(we||(we={}));const Ze=(0,r.forwardRef)(((e,t)=>{let{queriesResponse:a,chartStatus:r,chartUpdateStartTime:o,chartUpdateEndTime:n,refreshCachedQuery:i,rowLimit:s}=e;const l="loading"===r,c=null==a?void 0:a[0];return(0,D.tZ)("div",{ref:t},(0,D.tZ)("div",{css:e=>D.iv`
            display: flex;
            justify-content: flex-end;
            padding-bottom: ${4*e.gridUnit}px;
            & .ant-tag:last-of-type {
              margin: 0;
            }
          `},!l&&c&&(0,D.tZ)(fe.Z,{rowcount:Number(c.rowcount)||0,limit:Number(s)||0}),!l&&(null==c?void 0:c.is_cached)&&(0,D.tZ)(Se,{onClick:i,cachedTimestamp:c.cached_dttm}),(0,D.tZ)(xe.Z,{startTime:o,endTime:n,isRunning:l,status:we[r]})))}));var Ce=a(35932);const ke=A.iK.div`
  ${e=>{let{theme:t}=e;return D.iv`
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
`,Te=A.iK.div`
  display: flex;
  justify-content: flex-end;
  button {
    line-height: 1;
  }
`,Ee=A.iK.p`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,Ne={warning:"warning",danger:"danger"},Ae=(0,r.forwardRef)(((e,t)=>{let{title:a,bodyText:r,primaryButtonAction:o,secondaryButtonAction:n,primaryButtonText:i,secondaryButtonText:s,type:l="info",className:c=""}=e;return(0,D.tZ)(ke,{className:`alert-type-${l} ${c}`,ref:t},(0,D.tZ)(Ee,null,a),(0,D.tZ)("p",null,r),i&&o&&(0,D.tZ)(Te,null,n&&s&&(0,D.tZ)(Ce.Z,{buttonStyle:"link",buttonSize:"small",onClick:n},s),(0,D.tZ)(Ce.Z,{buttonStyle:l in Ne?Ne[l]:"primary",buttonSize:"small",onClick:o},i)))}));var De=a(99612);const Re={actions:E().object.isRequired,onQuery:E().func,can_overwrite:E().bool.isRequired,can_download:E().bool.isRequired,datasource:E().object,dashboardId:E().number,column_formats:E().object,containerId:E().string.isRequired,isStarred:E().bool.isRequired,slice:E().object,sliceName:E().string,table_name:E().string,vizType:E().string.isRequired,form_data:E().object,ownState:E().object,standalone:E().bool,force:E().bool,timeout:E().number,chartIsStale:E().bool,chart:K.$6,errorMessage:E().node,triggerRender:E().bool},$e=1.25,Oe=[100,0],Ie=[300,65],Me=A.iK.div`
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
    margin: ${e=>{let{theme:t}=e;return t.gridUnit*$e}}px auto;
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
`;var Ue={name:"1wbll7q",styles:"text-decoration:underline"};const ze=e=>{var t;let{chart:a,slice:o,vizType:n,ownState:i,triggerRender:s,force:c,datasource:d,errorMessage:u,form_data:h,onQuery:p,actions:m,timeout:g,standalone:f,chartIsStale:v,chartAlert:b}=e;const y=(0,A.Fg)(),_=y.gridUnit*$e,S=y.gridUnit*$e,{ref:w,observerRef:x,width:Z,height:C}=function(){const e=(0,r.useRef)(),[{width:t,height:a},o]=(0,r.useState)({}),n=(0,r.useCallback)((()=>{if(e.current){const{width:t,height:a}=(null==e.current.getBoundingClientRect?void 0:e.current.getBoundingClientRect())||{};o({width:t,height:a})}}),[]),{ref:i}=(0,De.NB)({refreshMode:"debounce",refreshRate:300,onResize:n});return{ref:e,observerRef:i,width:t,height:a}}(),[k,T]=(0,r.useState)((0,ne.cr)(ne.TT.DATAPANEL_CLOSED_BY_DEFAULT)?Oe:(0,j.rV)(j.dR.chart_split_sizes,Oe)),[E,N]=(0,r.useState)(!(0,ne.cr)(ne.TT.DATAPANEL_CLOSED_BY_DEFAULT)&&(0,j.rV)(j.dR.is_datapanel_open,!1)),[R,$]=(0,r.useState)(!1),O=(0,ie.Z)(),{useLegacyApi:I}=null!=(t=O.get(n))?t:{},M=I&&d.type!==se.i9.Table,U=!b&&v&&!M&&"failed"!==a.chartStatus&&(0,le.Z)(a.queriesResponse).length>0,z=(0,r.useCallback)((async function(){if(o&&null===o.query_context){const e=(0,J.u)({formData:o.form_data,force:c,resultFormat:"json",resultType:"full",setDataMask:null,ownState:null});await ce.Z.put({endpoint:`/api/v1/chart/${o.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({query_context:JSON.stringify(e),query_context_generation:!0})})}}),[o]);(0,r.useEffect)((()=>{z()}),[z]),(0,r.useEffect)((()=>{(0,j.LS)(j.dR.chart_split_sizes,k)}),[k]);const L=(0,r.useCallback)((e=>{T(e)}),[]),q=(0,r.useCallback)((()=>{m.setForceQuery(!0),m.postChartFormData(h,!0,g,a.id,void 0,i),m.updateQueryFormData(h,a.id)}),[m,a.id,h,i,g]),F=(0,r.useCallback)((e=>{let t;t=e?[60,40]:Oe,T(t),N(e)}),[]),P=(0,r.useCallback)((()=>(0,D.tZ)("div",{css:D.iv`
          min-height: 0;
          flex: 1;
          overflow: auto;
        `,ref:w},Z&&C&&(0,D.tZ)(de.Z,{width:Math.floor(Z),height:C,ownState:i,annotationData:a.annotationData,chartAlert:a.chartAlert,chartStackTrace:a.chartStackTrace,chartId:a.id,chartStatus:a.chartStatus,triggerRender:s,force:c,datasource:d,errorMessage:u,formData:h,latestQueryFormData:a.latestQueryFormData,onQuery:p,queriesResponse:a.queriesResponse,chartIsStale:v,setControlValue:m.setControlValue,timeout:g,triggerQuery:a.triggerQuery,vizType:n}))),[m.setControlValue,a.annotationData,a.chartAlert,a.chartStackTrace,a.chartStatus,a.id,a.latestQueryFormData,a.queriesResponse,a.triggerQuery,v,C,w,Z,d,u,c,h,p,i,g,s,n]),Q=(0,r.useMemo)((()=>(0,D.tZ)("div",{className:"panel-body",css:D.iv`
          display: flex;
          flex-direction: column;
        `,ref:x},M&&(0,D.tZ)(ue.Z,{message:(0,l.t)("Chart type requires a dataset"),type:"error",css:e=>D.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `,description:(0,D.tZ)(r.Fragment,null,(0,l.t)("This chart type is not supported when using an unsaved query as a chart source. "),(0,D.tZ)("span",{role:"button",tabIndex:0,onClick:()=>$(!0),css:Ue},(0,l.t)("Create a dataset")),(0,l.t)(" to visualize your data."))}),U&&(0,D.tZ)(Ae,{title:u?(0,l.t)("Required control values have been removed"):(0,l.t)("Your chart is not up to date"),bodyText:u?(0,me.J)(!1):(0,D.tZ)("span",null,(0,l.t)('You updated the values in the control panel, but the chart was not updated automatically. Run the query by clicking on the "Update chart" button or')," ",(0,D.tZ)("span",{role:"button",tabIndex:0,onClick:p},(0,l.t)("click here")),"."),type:"warning",css:e=>D.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `}),(0,D.tZ)(Ze,{queriesResponse:a.queriesResponse,chartStatus:a.chartStatus,chartUpdateStartTime:a.chartUpdateStartTime,chartUpdateEndTime:a.chartUpdateEndTime,refreshCachedQuery:q,rowLimit:null==h?void 0:h.row_limit}),P())),[x,U,u,p,a.queriesResponse,a.chartStatus,a.chartUpdateStartTime,a.chartUpdateEndTime,q,null==h?void 0:h.row_limit,P]),V=(0,r.useMemo)((()=>P()),[P]),[B,H]=(0,r.useState)(a.latestQueryFormData);(0,r.useEffect)((()=>{s||H(a.latestQueryFormData)}),[a.latestQueryFormData]);const K=(0,r.useCallback)(((e,t,a)=>({[e]:`calc(${t}% - ${a+_}px)`})),[_]);if(f){const e="background-transparent";return document.body.className.split(" ").includes(e)||(document.body.className+=` ${e}`),(0,D.tZ)("div",{id:"app",ref:x},V)}return(0,D.tZ)(Me,{className:"panel panel-default chart-container",showSplite:E},"filter_box"===n?Q:(0,D.tZ)(oe.Z,{sizes:k,minSize:Ie,direction:"vertical",gutterSize:S,onDragEnd:L,elementStyle:K,expandToMin:!0},Q,(0,D.tZ)(ge.c9,{ownState:i,queryFormData:B,datasource:d,queryForce:c,onCollapseChange:F,chartStatus:a.chartStatus,errorMessage:u,actions:m})),R&&(0,D.tZ)(he.W,{visible:R,onHide:()=>$(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,pe.z)(d),openWindow:!1,formData:h}))};ze.propTypes=Re;const Le=ze;var je=a(21804),qe=a.n(je),Fe=a(5364),Pe=a(37687),Qe=a(82233),Ve=a(45211),Be=a(49484),He=a(43700),Ke=a(71262),We=a(74069),Ye=a(61357),Ge=a(59317);const Je=e=>{let{loading:t,onQuery:a,onStop:r,errorMessage:o,isNewChart:n,canStopQuery:i,chartIsStale:s}=e;return t?(0,D.tZ)(Ce.Z,{onClick:r,buttonStyle:"warning",disabled:!i},(0,D.tZ)("i",{className:"fa fa-stop"})," ",(0,l.t)("Stop")):(0,D.tZ)(Ce.Z,{onClick:a,buttonStyle:s?"primary":"secondary",disabled:!!o},n?(0,l.t)("Create chart"):(0,l.t)("Update chart"))};var Xe=a(69856),et=a(61641);const{confirm:tt}=We.default,at=D.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,rt=e=>D.iv`
  display: flex;
  position: sticky;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: ${4*e.gridUnit}px;
  z-index: 999;
  background: linear-gradient(
    ${(0,Be.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    min-width: 156px;
  }
`,ot=A.iK.div`
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
`,nt=(0,A.iK)(Ke.ZP)`
  ${e=>{let{theme:t,fullWidth:a}=e;return D.iv`
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
`,it=(e,t)=>e.reduce(((e,a)=>!a.expanded&&a.label||(e=>!!e.label&&(Qe.sections.legacyRegularTime.label===e.label||Qe.sections.legacyTimeseriesTime.label===e.label))(a)&&!(e=>{var t;return null==e||null==(t=e.columns)?void 0:t.some((e=>e.is_dttm))})(t)?e:[...e,String(a.label)]),[]);function st(e,t){const a=(0,r.useRef)(e()),o=(0,r.useRef)(t);return o.current!==t&&(a.current=e(),o.current=t),a}const lt=e=>{var t,a;const{colors:n}=(0,A.Fg)(),s=(0,r.useContext)(U.Zn),c=(0,$.D)(e.exploreState),u=(0,$.D)(e.exploreState.datasource),h=(0,$.D)(e.chart.chartStatus),[p,m]=(0,r.useState)(!1),g=(0,r.useRef)(null),f=(0,o.v9)((e=>e.explore.controlsTransferred)),v=(0,o.v9)((e=>{var t,a;return null==(t=e.common)||null==(a=t.conf)?void 0:a.DEFAULT_TIME_FILTER})),{form_data:b,actions:y}=e,{setControlValue:_}=y,{x_axis:S,adhoc_filters:x}=b,Z=(0,$.D)(S);(0,r.useEffect)((()=>{S&&S!==Z&&(0,Ve.x)(S,e.exploreState.datasource)&&(null==x||!x.find((e=>"SIMPLE"===e.expressionType&&e.operator===Xe.d.TEMPORAL_RANGE&&e.subject===S)))&&tt({title:(0,l.t)("The X-axis is not on the filters list"),content:(0,l.t)("The X-axis is not on the filters list which will prevent it from being used in\n            time range filters in dashboards. Would you like to add it to the filters list?"),onOk:()=>{_("adhoc_filters",[...x||[],{clause:et.P.WHERE,subject:S,operator:Xe.d.TEMPORAL_RANGE,comparator:v||Fe.vM,expressionType:"SIMPLE"}])}})}),[S,x,_,v,Z,e.exploreState.datasource]),(0,r.useEffect)((()=>{let t=!1;const a=e=>"object"==typeof e&&(0,i.Z)(e)&&"datasourceWarning"in e&&!0===e.datasourceWarning?(t=!0,{...e,datasourceWarning:!1}):e;"success"===e.chart.chartStatus&&"success"!==h&&(null==f||f.forEach((r=>{var o;if(t=!1,!(0,i.Z)(e.controls[r]))return;const n=Array.isArray(e.controls[r].value)?null==(o=(0,le.Z)(e.controls[r].value))?void 0:o.map(a):a(e.controls[r].value);t&&e.actions.setControlValue(r,n)})))}),[f,h,e.actions,e.chart.chartStatus,e.controls]),(0,r.useEffect)((()=>{var t,a,r;!u||u.type===se.i9.Query||(null==(t=e.exploreState.datasource)?void 0:t.id)===u.id&&(null==(a=e.exploreState.datasource)?void 0:a.type)===u.type||(m(!0),null==(r=g.current)||r.scrollTo(0,0))}),[null==(t=e.exploreState.datasource)?void 0:t.id,null==(a=e.exploreState.datasource)?void 0:a.type,u]);const{expandedQuerySections:C,expandedCustomizeSections:k,querySections:T,customizeSections:E}=(0,r.useMemo)((()=>function(e,t,a){const r=[],o=[];return(0,X.Bq)(e,a).forEach((e=>{"data"===e.tabOverride||e.controlSetRows.some((e=>e.some((e=>e&&"object"==typeof e&&"config"in e&&e.config&&(!e.config.renderTrigger||"data"===e.config.tabOverride)))))?r.push(e):e.controlSetRows.length>0&&o.push(e)})),{expandedQuerySections:it(r,t),expandedCustomizeSections:it(o,t),querySections:r,customizeSections:o}}(b.viz_type,e.exploreState.datasource,e.datasource_type)),[e.exploreState.datasource,b.viz_type,e.datasource_type]),N=(0,r.useCallback)((()=>{(0,le.Z)(e.exploreState.controlsTransferred).forEach((t=>e.actions.setControlValue(t,e.controls[t].default)))}),[e.actions,e.exploreState.controlsTransferred,e.controls]),R=(0,r.useCallback)((()=>{N(),m(!1)}),[N]),O=(0,r.useCallback)((()=>{m(!1)}),[]),I=t=>{let{name:a,config:r}=t;const{controls:o,chart:n,exploreState:i}=e;return Boolean(null==r.shouldMapStateToProps?void 0:r.shouldMapStateToProps(c||i,i,o[a],n))},M=st((()=>({})),b.viz_type),j=t=>{const{controls:a}=e,{label:o,description:i}=t,s=String(o),c=t.controlSetRows.some((e=>e.some((e=>{const t="string"==typeof e?e:e&&"name"in e?e.name:null;return t&&t in a&&a[t].validationErrors&&a[t].validationErrors.length>0}))));c||(M.current[s]=!0);const d=M.current[s]?n.error.base:n.alert.base;return(0,D.tZ)(He.Z.Panel,{css:e=>D.iv`
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
        `,header:(0,D.tZ)((()=>(0,D.tZ)("span",null,(0,D.tZ)("span",{css:e=>D.iv`
            font-size: ${e.typography.sizes.m}px;
            line-height: 1.3;
          `},o)," ",i&&(0,D.tZ)(z.u,{id:s,title:i},(0,D.tZ)(L.Z.InfoCircleOutlined,{css:at})),c&&(0,D.tZ)(z.u,{id:`${qe()("validation-errors")}-tooltip`,title:(0,l.t)("This section contains validation errors")},(0,D.tZ)(L.Z.InfoCircleOutlined,{css:D.iv`
                ${at};
                color: ${d};
              `})))),null),key:s},t.controlSetRows.map(((t,a)=>{const o=t.map((t=>t?r.isValidElement(t)?t:t.name&&t.config&&"datasource"!==t.name?(t=>{let{name:a,config:r}=t;const{controls:o,chart:n,exploreState:i}=e,{visibility:s}=r,c={...r,...o[a],...I({name:a,config:r})?null==r||null==r.mapStateToProps?void 0:r.mapStateToProps(i,o[a],n):void 0,name:a},{validationErrors:d,label:u,description:h,...p}=c,m=s?s.call(r,e,c):void 0,g="function"==typeof u?u(i,o[a],n):u,f="function"==typeof h?h(i,o[a],n):h;return"adhoc_filters"===a&&(p.canDelete=(e,t)=>{var a;const r=e=>e.operator===Xe.d.TEMPORAL_RANGE;return!((null==o||null==(a=o.time_range)||!a.value)&&r(e)&&1===t.filter(r).length)||(0,l.t)("You cannot delete the last temporal filter as it's used for time range filters in dashboards.")}),(0,D.tZ)(Ge.Z,(0,w.Z)({key:`control-${a}`,name:a,label:g,description:f,validationErrors:d,actions:e.actions,isVisible:m},p))})(t):null:null)).filter((e=>null!==e));return 0===o.length?null:(0,D.tZ)(Ye.Z,{key:`controlsetrow-${a}`,controls:o})})))},q=(0,le.Z)(e.exploreState.controlsTransferred).length>0,F=(0,r.useCallback)((()=>q?(0,D.tZ)(Ae,{title:(0,l.t)("Keep control settings?"),bodyText:(0,l.t)("You've changed datasets. Any controls with data (columns, metrics) that match this new dataset have been retained."),primaryButtonAction:O,secondaryButtonAction:R,primaryButtonText:(0,l.t)("Continue"),secondaryButtonText:(0,l.t)("Clear form"),type:"info"}):(0,D.tZ)(Ae,{title:(0,l.t)("No form settings were maintained"),bodyText:(0,l.t)("We were unable to carry over any controls when switching to this new dataset."),primaryButtonAction:O,primaryButtonText:(0,l.t)("Continue"),type:"warning"})),[R,O,q]),P=st((()=>!1),b.viz_type),Q=(0,r.useMemo)((()=>{e.errorMessage||(P.current=!0);const t=P.current?n.error.base:n.alert.base;return(0,D.tZ)(r.Fragment,null,(0,D.tZ)("span",null,(0,l.t)("Data")),e.errorMessage&&(0,D.tZ)("span",{css:e=>D.iv`
              margin-left: ${2*e.gridUnit}px;
            `}," ",(0,D.tZ)(z.u,{id:"query-error-tooltip",placement:"right",title:e.errorMessage},(0,D.tZ)(L.Z.ExclamationCircleOutlined,{css:D.iv`
                  ${at};
                  color: ${t};
                `}))))}),[n.error.base,n.alert.base,P,e.errorMessage]);if(!(0,Pe.Z)().has(b.viz_type)&&s.loading)return(0,D.tZ)(d.Z,null);const V=E.length>0;return(0,D.tZ)(ot,{ref:g},(0,D.tZ)(nt,{id:"controlSections",fullWidth:V,allowOverflow:!1},(0,D.tZ)(Ke.ZP.TabPane,{key:"query",tab:Q},(0,D.tZ)(He.Z,{defaultActiveKey:C,expandIconPosition:"right",ghost:!0},p&&(0,D.tZ)(F,null),T.map(j))),V&&(0,D.tZ)(Ke.ZP.TabPane,{key:"display",tab:(0,l.t)("Customize")},(0,D.tZ)(He.Z,{defaultActiveKey:k,expandIconPosition:"right",ghost:!0},E.map(j)))),(0,D.tZ)("div",{css:rt},(0,D.tZ)(Je,{onQuery:e.onQuery,onStop:e.onStop,errorMessage:e.errorMessage,loading:"loading"===e.chart.chartStatus,isNewChart:!e.chart.queriesResponse,canStopQuery:e.canStopQuery,chartIsStale:e.chartIsStale})))};var ct=a(15926),dt=a.n(ct),ut=a(9882),ht=a(9875),pt=a(49238),mt=a(87183),gt=a(4715),ft=a(22318);const vt="save_chart_recent_dashboard",bt=(0,A.iK)(We.default)`
  .ant-modal-body {
    overflow: visible;
  }
  i {
    position: absolute;
    top: -${e=>{let{theme:t}=e;return 5.25*t.gridUnit}}px;
    left: ${e=>{let{theme:t}=e;return 26.75*t.gridUnit}}px;
  }
`;class yt extends r.Component{constructor(e){var t,a;super(e),this.handleDatasetNameChange=e=>{this.setState({datasetName:e.target.value})},this.handleRedirect=(e,t)=>{const a=new URLSearchParams(e);return a.set("save_action",this.state.action),"overwrite"!==this.state.action&&a.delete("form_data_key"),a.set("slice_id",t.id.toString()),a},this.loadDashboard=async e=>(await ce.Z.get({endpoint:`/api/v1/dashboard/${e}`})).json.result,this.loadDashboards=async(e,t,a)=>{const r=dt().encode({columns:["id","dashboard_title"],filters:[{col:"dashboard_title",opr:"ct",value:e},{col:"owners",opr:"rel_m_m",value:this.props.user.userId}],page:t,page_size:a,order_column:"dashboard_title"}),{json:o}=await ce.Z.get({endpoint:`/api/v1/dashboard/?q=${r}`}),{result:n,count:i}=o;return{data:n.map((e=>({value:e.id,label:e.dashboard_title}))),totalCount:i}},this.renderSaveChartModal=()=>{var e;const t=this.info();return(0,D.tZ)(pt.l0,{layout:"vertical"},(0,D.tZ)(pt.xJ,null,(0,D.tZ)(mt.Y,{id:"overwrite-radio",disabled:!this.canOverwriteSlice(),checked:"overwrite"===this.state.action,onChange:()=>this.changeAction("overwrite")},(0,l.t)("Save (Overwrite)")),(0,D.tZ)(mt.Y,{id:"saveas-radio",checked:"saveas"===this.state.action,onChange:()=>this.changeAction("saveas")},(0,l.t)("Save as..."))),(0,D.tZ)("hr",null),(0,D.tZ)(pt.xJ,{label:(0,l.t)("Chart name"),required:!0},(0,D.tZ)(ht.II,{name:"new_slice_name",type:"text",placeholder:"Name",value:this.state.newSliceName,onChange:this.onSliceNameChange})),"query"===(null==(e=this.props.datasource)?void 0:e.type)&&(0,D.tZ)(pt.xJ,{label:(0,l.t)("Dataset Name"),required:!0},(0,D.tZ)(ut.V,{tooltip:(0,l.t)("A reusable dataset will be saved with your chart."),placement:"right"}),(0,D.tZ)(ht.II,{name:"dataset_name",type:"text",placeholder:"Dataset Name",value:this.state.datasetName,onChange:this.handleDatasetNameChange})),!((0,ne.cr)(ne.TT.DASHBOARD_NATIVE_FILTERS)&&"filter_box"===this.state.vizType)&&(0,D.tZ)(pt.xJ,{label:(0,l.t)("Add to dashboard")},(0,D.tZ)(gt.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,l.t)("Select a dashboard"),options:this.loadDashboards,onChange:this.onDashboardChange,value:this.state.dashboard,placeholder:(0,D.tZ)("div",null,(0,D.tZ)("b",null,(0,l.t)("Select")),(0,l.t)(" a dashboard OR "),(0,D.tZ)("b",null,(0,l.t)("create")),(0,l.t)(" a new one"))})),t&&(0,D.tZ)(ue.Z,{type:"info",message:t,closable:!1}),this.props.alert&&(0,D.tZ)(ue.Z,{css:(0,D.iv)({marginTop:t?16:void 0},"",""),type:"warning",message:this.props.alert,closable:!1}))},this.info=()=>{const e=this.isNewDashboard();let t=!1;return!this.props.slice||"overwrite"===this.state.action&&this.canOverwriteSlice()||(t=!0),t&&e?(0,l.t)("A new chart and dashboard will be created."):t?(0,l.t)("A new chart will be created."):e?(0,l.t)("A new dashboard will be created."):null},this.renderFooter=()=>{var e,t;return(0,D.tZ)("div",null,(0,D.tZ)(Ce.Z,{id:"btn_cancel",buttonSize:"small",onClick:this.onHide},(0,l.t)("Cancel")),(0,D.tZ)(Ce.Z,{id:"btn_modal_save_goto_dash",buttonSize:"small",disabled:!this.state.newSliceName||!this.state.dashboard||(null==(e=this.props.datasource)?void 0:e.type)!==se.i9.Table&&!this.state.datasetName||(0,ne.cr)(ne.TT.DASHBOARD_NATIVE_FILTERS)&&"filter_box"===this.state.vizType,onClick:()=>this.saveOrOverwrite(!0)},(0,l.t)("Save & go to dashboard")),(0,D.tZ)(Ce.Z,{id:"btn_modal_save",buttonSize:"small",buttonStyle:"primary",onClick:()=>this.saveOrOverwrite(!1),disabled:this.state.isLoading||!this.state.newSliceName||(null==(t=this.props.datasource)?void 0:t.type)!==se.i9.Table&&!this.state.datasetName},(0,l.t)("Save")))},this.state={newSliceName:e.sliceName,datasetName:null==(t=e.datasource)?void 0:t.name,action:this.canOverwriteSlice()?"overwrite":"saveas",isLoading:!1,vizType:null==(a=e.form_data)?void 0:a.viz_type,dashboard:void 0},this.onDashboardChange=this.onDashboardChange.bind(this),this.onSliceNameChange=this.onSliceNameChange.bind(this),this.changeAction=this.changeAction.bind(this),this.saveOrOverwrite=this.saveOrOverwrite.bind(this),this.isNewDashboard=this.isNewDashboard.bind(this),this.onHide=this.onHide.bind(this)}isNewDashboard(){const{dashboard:e}=this.state;return"string"==typeof(null==e?void 0:e.value)}canOverwriteSlice(){var e,t,a;return(null==(e=this.props.slice)||null==(t=e.owners)?void 0:t.includes(this.props.user.userId))&&!(null!=(a=this.props.slice)&&a.is_managed_externally)}async componentDidMount(){let{dashboardId:e}=this.props;if(!e){let t=null;try{t=sessionStorage.getItem(vt)}catch(e){}e=t&&parseInt(t,10)}if(e)try{const t=await this.loadDashboard(e);(0,ft.Ms)(t,this.props.user)&&this.setState({dashboard:{label:t.dashboard_title,value:t.id}})}catch(e){this.props.actions.addDangerToast((0,l.t)("An error occurred while loading dashboard information."))}}onSliceNameChange(e){this.setState({newSliceName:e.target.value})}onDashboardChange(e){this.setState({dashboard:e})}changeAction(e){this.setState({action:e})}onHide(){this.props.dispatch((0,te.setSaveChartModalVisibility)(!1))}async saveOrOverwrite(e){this.setState({isLoading:!0});try{var t;if((null==(t=this.props.datasource)?void 0:t.type)===se.i9.Query){const{schema:e,sql:t,database:a}=this.props.datasource,{templateParams:r}=this.props.datasource;await this.props.actions.saveDataset({schema:e,sql:t,database:a,templateParams:r,datasourceName:this.state.datasetName})}let r=[];this.props.slice&&"overwrite"===this.state.action&&(r=await this.props.actions.getSliceDashboards(this.props.slice));const o=this.props.form_data||{};delete o.url_params;let n,s=null;if(this.state.dashboard){var a;let e=this.state.dashboard.value;this.isNewDashboard()&&(e=(await this.props.actions.createDashboard(this.state.dashboard.label)).id);try{s=await this.loadDashboard(e)}catch(e){return void this.props.actions.saveSliceFailed()}(0,i.Z)(s)&&(0,i.Z)(null==(a=s)?void 0:a.id)&&(r=r.includes(s.id)?r:[...r,s.id],o.dashboards=r)}this.props.actions.setFormData({...o}),n="overwrite"===this.state.action?await this.props.actions.updateSlice(this.props.slice,this.state.newSliceName,r,s?{title:s.dashboard_title,new:this.isNewDashboard()}:null):await this.props.actions.createSlice(this.state.newSliceName,r,s?{title:s.dashboard_title,new:this.isNewDashboard()}:null);try{s?sessionStorage.setItem(vt,`${s.id}`):sessionStorage.removeItem(vt)}catch(e){}if(e&&s)return void this.props.history.push(s.url);const l=this.handleRedirect(window.location.search,n);this.props.history.replace(`/explore/?${l.toString()}`),this.setState({isLoading:!1}),this.onHide()}finally{this.setState({isLoading:!1})}}render(){return(0,D.tZ)(bt,{show:this.props.isVisible,onHide:this.onHide,title:(0,l.t)("Save chart"),footer:this.renderFooter()},this.state.isLoading?(0,D.tZ)("div",{css:D.iv`
              display: flex;
              justify-content: center;
            `},(0,D.tZ)(d.Z,{position:"normal"})):this.renderSaveChartModal())}}const _t=(0,n.EN)((0,o.$j)((function(e){let{explore:t,saveModal:a,user:r}=e;return{datasource:t.datasource,slice:t.slice,user:r,dashboards:a.dashboards,alert:a.saveModalAlert,isVisible:a.isVisible}}))(yt));var St=a(1469),wt=a.n(St),xt=a(90233),Zt=a(27034),Ct=a(42753),kt=a(99963);const Tt=A.iK.div`
  ${e=>{let{theme:t}=e;return D.iv`
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
`;function Et(e){const{labelRef:t,showTooltip:a,type:r,value:o}=e,[{isDragging:n},i]=(0,Zt.c)({item:{value:e.value,type:e.type},collect:e=>({isDragging:e.isDragging()})}),s={labelRef:t,showTooltip:!n&&a,showType:!0};return(0,D.tZ)(Tt,{ref:i},r===Ct.g.Column?(0,D.tZ)(kt.l,(0,w.Z)({column:o},s)):(0,D.tZ)(kt.B,(0,w.Z)({metric:o},s)),(0,D.tZ)(L.Z.Drag,null))}const Nt=(0,ne.cr)(ne.TT.ENABLE_EXPLORE_DRAG_AND_DROP),At=A.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
`,Dt=A.iK.div`
  text-align: center;
  padding-top: 2px;
`,Rt=A.iK.div`
  ${e=>{let{theme:t}=e;return D.iv`
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
`,$t=A.iK.div`
  ${e=>{let{theme:t}=e;return D.iv`
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

    ${Nt&&D.iv`
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
`,Ot=A.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.m}px;\n    line-height: 1.3;\n  `}}
`,It=A.iK.div`
  ${e=>{let{theme:t}=e;return D.iv`
    margin: 0 ${2.5*t.gridUnit}px;

    span {
      text-decoration: underline;
    }
  `}}
`,Mt=e=>{const t={labelRef:(0,r.useRef)(null)};return(0,D.tZ)($t,{className:e.className},r.cloneElement(e.children,t))};function Ut(e){var t;let{datasource:a,formData:o,controls:{datasource:n},actions:i,shouldForceUpdate:s}=e;const{columns:c,metrics:d}=a,u=(0,r.useMemo)((()=>[...wt()(c)?c:[]].sort(((e,t)=>null==e||!e.is_dttm||null!=t&&t.is_dttm?null==t||!t.is_dttm||null!=e&&e.is_dttm?0:1:-1))),[c]),[h,m]=(0,r.useState)(!1),[g,f]=(0,r.useState)(""),[v,b]=(0,r.useState)({columns:u,metrics:d}),[y,_]=(0,r.useState)(!1),[S,x]=(0,r.useState)(!1),Z=(0,r.useMemo)((()=>k()((e=>{b(""!==e?{columns:(0,xt.Lu)(u,e,{keys:[{key:"verbose_name",threshold:xt.tL.CONTAINS},{key:"column_name",threshold:xt.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:xt.tL.CONTAINS,maxRanking:xt.tL.CONTAINS}],keepDiacritics:!0}),metrics:(0,xt.Lu)(d,e,{keys:[{key:"verbose_name",threshold:xt.tL.CONTAINS},{key:"metric_name",threshold:xt.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:xt.tL.CONTAINS,maxRanking:xt.tL.CONTAINS}],keepDiacritics:!0,baseSort:(e,t)=>{var a,r,o,n,i,s;return Number(null!=(a=null==t||null==(r=t.item)?void 0:r.is_certified)?a:0)-Number(null!=(o=null==e||null==(n=e.item)?void 0:n.is_certified)?o:0)||String(null!=(i=null==e?void 0:e.rankedValue)?i:"").localeCompare(null!=(s=null==t?void 0:t.rankedValue)?s:"")}})}:{columns:u,metrics:d})}),p.oP)),[u,d]);(0,r.useEffect)((()=>{b({columns:u,metrics:d}),f("")}),[u,a,d]);const C=(0,r.useMemo)((()=>{var e;return y?null==v?void 0:v.metrics:null==v||null==(e=v.metrics)||null==e.slice?void 0:e.slice(0,50)}),[null==v?void 0:v.metrics,y]),T=(0,r.useMemo)((()=>{var e;return(S?null==v?void 0:v.columns:null==v||null==(e=v.columns)||null==e.slice?void 0:e.slice(0,50)).sort(((e,t)=>{var a,r;return(null!=(a=null==t?void 0:t.is_certified)?a:0)-(null!=(r=null==e?void 0:e.is_certified)?r:0)}))}),[v.columns,S]),E={query:se.i9.Query,saved_query:se.i9.SavedQuery},N=a.type&&E[a.type],A=(0,r.useMemo)((()=>{var e;return(0,D.tZ)(r.Fragment,null,(0,D.tZ)(ht.II,{allowClear:!0,onChange:e=>{f(e.target.value),Z(e.target.value)},value:g,className:"form-control input-md",placeholder:(0,l.t)("Search Metrics & Columns")}),(0,D.tZ)("div",{className:"field-selections"},N&&(()=>{try{if("false"===sessionStorage.getItem("showInfobox"))return!1}catch(e){}return!0})()&&(0,D.tZ)(It,null,(0,D.tZ)(ue.Z,{closable:!0,onClose:()=>{try{sessionStorage.setItem("showInfobox","false")}catch(e){}},type:"info",message:"",description:(0,D.tZ)(r.Fragment,null,(0,D.tZ)("span",{role:"button",tabIndex:0,onClick:()=>m(!0),className:"add-dataset-alert-description"},(0,l.t)("Create a dataset")),(0,l.t)(" to edit or add columns and metrics."))})),(0,D.tZ)(He.Z,{defaultActiveKey:["metrics","column"],expandIconPosition:"right",ghost:!0},(null==d?void 0:d.length)&&(0,D.tZ)(He.Z.Panel,{header:(0,D.tZ)(Ot,null,(0,l.t)("Metrics")),key:"metrics"},(0,D.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",null==C?void 0:C.length,null==v?void 0:v.metrics.length)),null==C||null==C.map?void 0:C.map((e=>(0,D.tZ)(Mt,{key:e.metric_name+String(s),className:"column"},Nt?(0,D.tZ)(Et,{value:e,type:Ct.g.Metric}):(0,D.tZ)(kt.B,{metric:e,showType:!0})))),(null==v||null==(e=v.metrics)?void 0:e.length)>50?(0,D.tZ)(Dt,null,(0,D.tZ)(At,{onClick:()=>_(!y)},y?(0,l.t)("Show less..."):(0,l.t)("Show all..."))):(0,D.tZ)(r.Fragment,null)),(0,D.tZ)(He.Z.Panel,{header:(0,D.tZ)(Ot,null,(0,l.t)("Columns")),key:"column"},(0,D.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",T.length,v.columns.length)),T.map((e=>(0,D.tZ)(Mt,{key:e.column_name+String(s),className:"column"},Nt?(0,D.tZ)(Et,{value:e,type:Ct.g.Column}):(0,D.tZ)(kt.l,{column:e,showType:!0})))),v.columns.length>50?(0,D.tZ)(Dt,null,(0,D.tZ)(At,{onClick:()=>x(!S)},S?(0,l.t)("Show Less..."):(0,l.t)("Show all..."))):(0,D.tZ)(r.Fragment,null)))))}),[T,g,v.columns.length,null==v||null==(t=v.metrics)?void 0:t.length,C,Z,S,y,N,s]);return(0,D.tZ)(Rt,null,N&&h&&(0,D.tZ)(he.W,{visible:h,onHide:()=>m(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,pe.z)(a),openWindow:!1,formData:o}),(0,D.tZ)(Ge.Z,(0,w.Z)({},n,{name:"datasource",actions:i})),null!=a.id&&A)}var zt=a(28062),Lt=a(41609),jt=a.n(Lt),qt=a(18446),Ft=a.n(qt),Pt=a(88306),Qt=a.n(Pt),Vt=a(38575),Bt=a(92252);const Ht=Qt()(((e,t)=>{const a={};return((null==t?void 0:t.controlPanelSections)||[]).filter(Vt.D_).forEach((e=>{e.controlSetRows.forEach((e=>{e.forEach((e=>{e&&("string"==typeof e?a[e]=Bt.ai[e]:e.name&&e.config&&(a[e.name]=e.config))}))}))})),a}));var Kt=a(9679),Wt=a(1304),Yt=a(76962);const Gt={origFormData:E().object.isRequired,currentFormData:E().object.isRequired},Jt=A.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.dark1};\n    background-color: ${t.colors.alert.base};\n\n    &: hover {\n      background-color: ${t.colors.alert.dark1};\n    }\n  `}}
`;function Xt(e){if(null==e||""===e)return null;if("object"==typeof e){if(Array.isArray(e)&&0===e.length)return null;const t=Object.keys(e);if(t&&0===t.length)return null}return e}class ea extends r.Component{constructor(e){super(e);const t=this.getDiffs(e),a=(e=>{const t=(0,Pe.Z)().get(e);return Ht(e,t)})(this.props.origFormData.viz_type),r=this.getRowsFromDiffs(t,a);this.state={rows:r,hasDiffs:!jt()(t),controlsMap:a}}UNSAFE_componentWillReceiveProps(e){if(Ft()(this.props,e))return;const t=this.getDiffs(e);this.setState((e=>({rows:this.getRowsFromDiffs(t,e.controlsMap),hasDiffs:!jt()(t)})))}getRowsFromDiffs(e,t){return Object.entries(e).map((e=>{let[a,r]=e;return{control:t[a]&&t[a].label||a,before:this.formatValue(r.before,a,t),after:this.formatValue(r.after,a,t)}}))}getDiffs(e){const t=(0,Y.BR)(e.origFormData),a=(0,Y.BR)(e.currentFormData),r=Object.keys(a),o={};return r.forEach((e=>{(t[e]||a[e])&&(["filters","having","where"].includes(e)||this.isEqualish(t[e],a[e])||(o[e]={before:t[e],after:a[e]}))})),o}isEqualish(e,t){return Ft()(Xt(e),Xt(t))}formatValue(e,t,a){var r,o,n,i;if(void 0===e)return"N/A";if(null===e)return"null";if("AdhocFilterControl"===(null==(r=a[t])?void 0:r.type))return e.length?e.map((e=>{const t=e.comparator&&e.comparator.constructor===Array?`[${e.comparator.join(", ")}]`:e.comparator;return`${e.subject} ${e.operator} ${t}`})).join(", "):"[]";if("BoundsControl"===(null==(o=a[t])?void 0:o.type))return`Min: ${e[0]}, Max: ${e[1]}`;if("CollectionControl"===(null==(n=a[t])?void 0:n.type))return e.map((e=>(0,Kt.o)(e))).join(", ");if("MetricsControl"===(null==(i=a[t])?void 0:i.type)&&e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}if("boolean"==typeof e)return e?"true":"false";if(e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}return"string"==typeof e||"number"==typeof e?e:(0,Kt.o)(e)}renderModalBody(){const e=[{accessor:"control",Header:(0,l.t)("Control")},{accessor:"before",Header:(0,l.t)("Before")},{accessor:"after",Header:(0,l.t)("After")}];return(0,D.tZ)(Yt.Z,{columns:e,data:this.state.rows,pageSize:50,className:"table-condensed",columnsForWrapText:["Control","Before","After"]})}renderTriggerNode(){return(0,D.tZ)(z.u,{id:"difference-tooltip",title:(0,l.t)("Click to see difference")},(0,D.tZ)(Jt,{className:"label"},(0,l.t)("Altered")))}render(){return this.state.hasDiffs?(0,D.tZ)(Wt.Z,{triggerNode:this.renderTriggerNode(),modalTitle:(0,l.t)("Chart changes"),modalBody:this.renderModalBody(),responsive:!0}):null}}ea.propTypes=Gt;var ta=a(83673),aa=a(52564),ra=a(67697),oa=a(96022);const na={actions:E().object.isRequired,canOverwrite:E().bool.isRequired,canDownload:E().bool.isRequired,dashboardId:E().number,isStarred:E().bool.isRequired,slice:E().object,sliceName:E().string,table_name:E().string,formData:E().object,ownState:E().object,timeout:E().number,chart:K.$6,saveDisabled:E().bool},ia=e=>D.iv`
  color: ${e.colors.primary.dark2};
  & > span[role='img'] {
    margin-right: 0;
  }
`,sa=e=>D.iv`
  display: flex;
  align-items: center;
  margin-left: ${e.gridUnit}px;
  & > span {
    margin-right: ${3*e.gridUnit}px;
  }
`,la=e=>{let{dashboardId:t,slice:a,actions:i,formData:s,ownState:c,chart:d,user:u,canOverwrite:h,canDownload:p,isStarred:m,sliceName:g,saveDisabled:f,metadata:v}=e;const b=(0,o.I0)(),{latestQueryFormData:y,sliceFormData:_}=d,[S,w]=(0,r.useState)(!1);(0,r.useEffect)((()=>{t&&(async()=>{const{dashboards:e}=v||{},a=t&&e&&e.find((e=>e.id===t));if(a)try{var r;const e=await ce.Z.get({endpoint:`/api/v1/dashboard/${a.id}`}),t=null==e||null==(r=e.json)?void 0:r.result,o=JSON.parse(t.json_metadata),n=o.shared_label_colors||{},i=o.label_colors||{},s={...n,...i},l=zt.getNamespace();Object.keys(s).forEach((e=>{l.setColor(e,s[e],o.color_scheme)}))}catch(e){R.Z.info((0,l.t)("Unable to retrieve dashboard colors"))}})()}),[]);const x=(0,r.useCallback)((()=>{b((0,te.setSaveChartModalVisibility)(!0))}),[b]),Z=(0,r.useCallback)((e=>{b((0,ee.sliceUpdated)(e))}),[b]),C=(0,n.k6)(),{redirectSQLLab:k}=i,T=(0,r.useCallback)((function(e,t){void 0===t&&(t=!1),k(e,!t&&C)}),[k,C]),[E,N,A]=(0,oa.gT)(y,p,a,T,(()=>{w(!0)}),c,null==v?void 0:v.dashboards),$=(0,r.useMemo)((()=>{if(!v)return null;const e=[];return e.push({type:ra.pG.DASHBOARDS,title:v.dashboards.length>0?(0,l.tn)("Added to 1 dashboard","Added to %s dashboards",v.dashboards.length,v.dashboards.length):(0,l.t)("Not added to any dashboard"),description:v.dashboards.length>0?(0,l.t)("You can preview the list of dashboards in the chart settings dropdown."):void 0}),e.push({type:ra.pG.LAST_MODIFIED,value:v.changed_on_humanized,modifiedBy:v.changed_by||(0,l.t)("Not available")}),e.push({type:ra.pG.OWNER,createdBy:v.created_by||(0,l.t)("Not available"),owners:v.owners.length>0?v.owners:(0,l.t)("None"),createdOn:v.created_on_humanized}),null!=a&&a.description&&e.push({type:ra.pG.DESCRIPTION,value:null==a?void 0:a.description}),(0,D.tZ)(ra.ZP,{items:e,tooltipPlacement:"bottom"})}),[v,null==a?void 0:a.description]),O=null==a?void 0:a.slice_name;return(0,D.tZ)(r.Fragment,null,(0,D.tZ)(aa.u,{editableTitleProps:{title:g,canEdit:!a||h||((null==a?void 0:a.owners)||[]).includes(null==u?void 0:u.userId),onSave:i.updateChartTitle,placeholder:(0,l.t)("Add the name of the chart"),label:(0,l.t)("Chart title")},showTitlePanelItems:!!a,certificatiedBadgeProps:{certifiedBy:null==a?void 0:a.certified_by,details:null==a?void 0:a.certification_details},showFaveStar:!(null==u||!u.userId),faveStarProps:{itemId:null==a?void 0:a.slice_id,fetchFaveStar:i.fetchFaveStar,saveFaveStar:i.saveFaveStar,isStarred:m,showTooltip:!0},titlePanelAdditionalItems:(0,D.tZ)("div",{css:sa},_?(0,D.tZ)(ea,{className:"altered",origFormData:{..._,chartTitle:O},currentFormData:{...s,chartTitle:g}}):null,$),rightPanelAdditionalItems:(0,D.tZ)(z.u,{title:f?(0,l.t)("Add required control values to save chart"):null},(0,D.tZ)("div",null,(0,D.tZ)(Ce.Z,{buttonStyle:"secondary",onClick:x,disabled:f,css:ia},(0,D.tZ)(L.Z.SaveOutlined,{iconSize:"l"}),(0,l.t)("Save")))),additionalActionsMenu:E,menuDropdownProps:{visible:N,onVisibleChange:A}}),S&&(0,D.tZ)(ta.Z,{show:S,onHide:()=>{w(!1)},onSave:Z,slice:a}))};la.propTypes=na;const ca=la,da={...Le.propTypes,actions:E().object.isRequired,datasource_type:E().string.isRequired,dashboardId:E().number,isDatasourceMetaLoading:E().bool.isRequired,chart:K.$6.isRequired,slice:E().object,sliceName:E().string,controls:E().object.isRequired,forcedHeight:E().string,form_data:E().object.isRequired,standalone:E().bool.isRequired,force:E().bool,timeout:E().number,impressionId:E().string,vizType:E().string,saveAction:E().string,isSaveModalVisible:E().bool},ua=A.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`,ha=A.iK.div`
  ${e=>{let{theme:t}=e;return D.iv`
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
`,pa=k()((async(e,t,a,r,o,n,i,s)=>{const l={...e},c=e.slice_id,d=new URLSearchParams(window.location.search),u=Object.fromEntries(d);c?u[p.KD.sliceId.name]=c:(u[p.KD.datasourceId.name]=t,u[p.KD.datasourceType.name]=a);const m=(null==l?void 0:l.url_params)||{};Object.entries(m).forEach((e=>{let[t,a]=e;p.$O.includes(t)||(u[t]=a)}));try{let d,m;if(r?(d=await(0,Y.nv)(t,a,e,c,s),m="replaceState"):(d=(0,h.eY)(p.KD.formDataKey),await(0,Y.LW)(t,a,d,e,c,s),m="pushState"),window.location.pathname.startsWith("/explore")){const e=(0,J.y8)(o?p.KD.standalone.name:null,{[p.KD.formDataKey.name]:d,...u},n);window.history[m](l,i,e)}}catch(e){R.Z.warn("Failed at altering browser history",e)}}),1e3);function ma(e){const t=(0,U.gp)().dynamicPlugins[e.vizType],a=t&&t.mounting,o=(0,$.D)(a),n=(0,$.D)(e.controls),[i,s]=(0,r.useState)(e.controls),[c,d]=(0,r.useState)(!1),[u,h]=(0,r.useState)(-1),p=(0,ae.z)(),m=(0,A.Fg)(),g={controls_width:320,datasource_width:300},f=(0,r.useCallback)((async function(t){let{isReplace:a=!1,title:r}=void 0===t?{}:t;const o=e.dashboardId?{...e.form_data,dashboardId:e.dashboardId}:e.form_data,{id:n,type:i}=e.datasource;pa(o,n,i,a,e.standalone,e.force,r,p)}),[e.dashboardId,e.form_data,e.datasource.id,e.datasource.type,e.standalone,e.force,p]),v=(0,r.useCallback)((()=>{const t=window.history.state;t&&Object.keys(t).length&&(e.actions.setExploreControls(t),e.actions.postChartFormData(t,e.force,e.timeout,e.chart.id))}),[e.actions,e.chart.id,e.timeout]),b=(0,r.useCallback)((()=>{e.actions.setForceQuery(!1),e.actions.triggerQuery(!0,e.chart.id),f(),s(e.controls)}),[e.controls,f,e.actions,e.chart.id]),y=(0,r.useCallback)((t=>{if(t.ctrlKey||t.metaKey){const a="Enter"===t.key||13===t.keyCode,r="s"===t.key||83===t.keyCode;a?b():r&&e.slice&&e.actions.saveSlice(e.form_data,{action:"overwrite",slice_id:e.slice.slice_id,slice_name:e.slice.slice_name,add_to_dash:"noSave",goto_dash:!1}).then((e=>{let{data:t}=e;window.location=t.slice.slice_url}))}}),[b,e.actions,e.form_data,e.slice]);function _(){d(!c)}(0,O.J)((()=>{e.actions.logEvent(P.$b)})),(0,I.S)(p,((e,t)=>{t&&f({isReplace:!0})}));const S=(0,$.D)(v);(0,r.useEffect)((()=>(S&&window.removeEventListener("popstate",S),window.addEventListener("popstate",v),()=>{window.removeEventListener("popstate",v)})),[v,S]);const x=(0,$.D)(y);(0,r.useEffect)((()=>(x&&window.removeEventListener("keydown",x),document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)})),[y,x]),(0,r.useEffect)((()=>{o&&!a&&e.actions.dynamicPluginControlsReady()}),[a]),(0,r.useEffect)((()=>{Object.values(e.controls).some((e=>e.validationErrors&&e.validationErrors.length>0))||e.actions.triggerQuery(!0,e.chart.id)}),[]);const C=(0,r.useCallback)((t=>{const a=t?{...e.chart.latestQueryFormData,...(0,X.Hu)(Z()(e.controls,t))}:(0,X.Hu)(e.controls);e.actions.updateQueryFormData(a,e.chart.id),e.actions.renderTriggered((new Date).getTime(),e.chart.id),f()}),[f,e.actions,e.chart.id,e.chart.latestQueryFormData,e.controls]);(0,r.useEffect)((()=>{if(n&&e.chart.latestQueryFormData.viz_type===e.controls.viz_type.value){!e.controls.datasource||null!=n.datasource&&e.controls.datasource.value===n.datasource.value||(0,H.QR)(e.form_data.datasource,!0);const t=Object.keys(e.controls).filter((t=>void 0!==n[t]&&!(0,q.JB)(e.controls[t].value,n[t].value))).filter((t=>e.controls[t].renderTrigger));t.length>0&&C(t)}}),[e.controls,e.ownState]);const k=(0,r.useMemo)((()=>!!i&&Object.keys(e.controls).filter((t=>void 0!==i[t]&&!(0,q.JB)(e.controls[t].value,i[t].value,{ignoreFields:["datasourceWarning"]}))).some((t=>!e.controls[t].renderTrigger&&!e.controls[t].dontRefreshOnChange))),[i,e.controls]);(0,I.S)(e.saveAction,(()=>{["saveas","overwrite"].includes(e.saveAction)&&(b(),f({isReplace:!0}),e.actions.setSaveAction(null))})),(0,r.useEffect)((()=>{void 0!==e.ownState&&(b(),C())}),[e.ownState]),k&&e.actions.logEvent(P.Ep);const T=(0,r.useMemo)((()=>{const t=Object.values(e.controls).filter((e=>e.validationErrors&&e.validationErrors.length>0));if(0===t.length)return null;const a=t.map((e=>e.validationErrors)),r=[...new Set(a.flat())].map((e=>[t.filter((t=>{var a;return null==(a=t.validationErrors)?void 0:a.includes(e)})).map((e=>e.label)),e])).map((e=>{let[t,a]=e;return(0,D.tZ)("div",{key:a},t.length>1?(0,l.t)("Controls labeled "):(0,l.t)("Control labeled "),(0,D.tZ)("strong",null,` ${t.join(", ")}`),(0,D.tZ)("span",null,": ",a))}));let o;return r.length>0&&(o=(0,D.tZ)("div",{style:{textAlign:"left"}},r)),o}),[e.controls]);function E(){return(0,D.tZ)(Le,(0,w.Z)({},e,{errorMessage:T,chartIsStale:k,onQuery:b}))}function N(e){return(0,j.rV)(e,g[e])}function R(e,t){const a=Number(N(e))+t.width;(0,j.LS)(e,a)}return e.standalone?E():(0,D.tZ)(ua,null,(0,D.tZ)(ca,{actions:e.actions,canOverwrite:e.can_overwrite,canDownload:e.can_download,dashboardId:e.dashboardId,isStarred:e.isStarred,slice:e.slice,sliceName:e.sliceName,table_name:e.table_name,formData:e.form_data,chart:e.chart,ownState:e.ownState,user:e.user,reports:e.reports,saveDisabled:T||"loading"===e.chart.chartStatus,metadata:e.metadata}),(0,D.tZ)(ha,{id:"explore-container"},(0,D.tZ)(D.xB,{styles:D.iv`
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
          `}),(0,D.tZ)(M.e,{onResizeStop:(e,t,a,r)=>{h(null==r?void 0:r.width),R(j.dR.datasource_width,r)},defaultSize:{width:N(j.dR.datasource_width),height:"100%"},minWidth:g[j.dR.datasource_width],maxWidth:"33%",enable:{right:!0},className:c?"no-show":"explore-column data-source-selection"},(0,D.tZ)("div",{className:"title-container"},(0,D.tZ)("span",{className:"horizontal-text"},(0,l.t)("Chart Source")),(0,D.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:_},(0,D.tZ)(L.Z.Expand,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"}))),(0,D.tZ)(Ut,{formData:e.form_data,datasource:e.datasource,controls:e.controls,actions:e.actions,shouldForceUpdate:u,user:e.user})),c?(0,D.tZ)("div",{className:"sidebar",onClick:_,role:"button",tabIndex:0},(0,D.tZ)("span",{role:"button",tabIndex:0,className:"action-button"},(0,D.tZ)(z.u,{title:(0,l.t)("Open Datasource tab")},(0,D.tZ)(L.Z.Collapse,{className:"collapse-icon",iconColor:m.colors.primary.base,iconSize:"l"})))):null,(0,D.tZ)(M.e,{onResizeStop:(e,t,a,r)=>R(j.dR.controls_width,r),defaultSize:{width:N(j.dR.controls_width),height:"100%"},minWidth:g[j.dR.controls_width],maxWidth:"33%",enable:{right:!0},className:"col-sm-3 explore-column controls-column"},(0,D.tZ)(lt,{exploreState:e.exploreState,actions:e.actions,form_data:e.form_data,controls:e.controls,chart:e.chart,datasource_type:e.datasource_type,isDatasourceMetaLoading:e.isDatasourceMetaLoading,onQuery:b,onStop:function(){e.chart&&e.chart.queryController&&e.chart.queryController.abort()},canStopQuery:e.can_add||e.can_overwrite,errorMessage:T,chartIsStale:k})),(0,D.tZ)("div",{className:V()("main-explore-content",c?"col-sm-9":"col-sm-7")},E())),e.isSaveModalVisible&&(0,D.tZ)(_t,{addDangerToast:e.addDangerToast,actions:e.actions,form_data:e.form_data,sliceName:e.sliceName,dashboardId:e.dashboardId}))}ma.propTypes=da;const ga=(0,o.$j)((function(e){var t,a,r,o,n,i,s,l;const{explore:c,charts:d,common:u,impressionId:h,dataMask:p,reports:m,user:g,saveModal:f}=e,{controls:v,slice:b,datasource:y,metadata:_}=c,S=(0,X.Hu)(v),w=null!=(t=null!=(a=S.slice_id)?a:null==b?void 0:b.slice_id)?t:0;S.extra_form_data=(0,W.on)({...S.extra_form_data},{...null==(r=p[w])?void 0:r.ownState});const x=d[w];let Z=Number(null==(o=c.form_data)?void 0:o.dashboardId);return Number.isNaN(Z)&&(Z=void 0),{isDatasourceMetaLoading:c.isDatasourceMetaLoading,datasource:y,datasource_type:y.type,datasourceId:y.datasource_id,dashboardId:Z,controls:c.controls,can_add:!!c.can_add,can_download:!!c.can_download,can_overwrite:!!c.can_overwrite,column_formats:null!=(n=null==y?void 0:y.column_formats)?n:null,containerId:b?`slice-container-${b.slice_id}`:"slice-container",isStarred:c.isStarred,slice:b,sliceName:null!=(i=null!=(s=c.sliceName)?s:null==b?void 0:b.slice_name)?i:null,triggerRender:c.triggerRender,form_data:S,table_name:y.table_name,vizType:S.viz_type,standalone:!!c.standalone,force:!!c.force,chart:x,timeout:u.conf.SUPERSET_WEBSERVER_TIMEOUT,ownState:null==(l=p[w])?void 0:l.ownState,impressionId:h,user:g,exploreState:c,reports:m,metadata:_,saveAction:c.saveAction,isSaveModalVisible:f.isVisible}}),(function(e){const t={...ee,...G.yn,...te,...B,...F};return{actions:(0,N.DE)(t,e)}}))((0,re.ZP)(r.memo(ma)));a(65634);(0,l.t)("Chart Options"),(0,l.t)("Use Area Proportions"),(0,l.t)("Check if the Rose Chart should use segment area instead of segment radius for proportioning"),(0,l.t)("Stacked Style"),(0,l.t)("stack"),(0,l.t)("stream"),(0,l.t)("expand"),(0,l.t)("Chart Options"),(0,l.t)("Chart Options"),(0,l.t)("Columns"),(0,l.t)("Columns to display"),se.i9.Table;const fa={form_data:{datasource:"0__table",viz_type:"table"},dataset:{id:0,type:se.i9.Table,columns:[],metrics:[],column_formats:{},currency_formats:{},verbose_map:{},main_dttm_col:"",owners:[],datasource_name:"missing_datasource",name:"missing_datasource",description:null},slice:null};var va=a(46306),ba=a(99232);const ya=e=>e.reduce(((e,t)=>{var a;return a=t,e.some((e=>(0,va.jz)(e)&&(0,va.jz)(a)&&e.clause===a.clause&&e.sqlExpression===a.sqlExpression||(0,va.Ki)(e)&&(0,va.Ki)(a)&&e.operator===a.operator&&e.subject===a.subject&&(!("comparator"in e)&&!("comparator"in a)||"comparator"in e&&"comparator"in a&&Ft()(e.comparator,a.comparator))))||e.push(t),e}),[]),_a=(e,t)=>{const a=e.extra_form_data||{};return"time_range"in a?t.map((e=>"TEMPORAL_RANGE"===e.operator?{...e,comparator:a.time_range,isExtra:!0}:e)):t},Sa=(e,t)=>{const a=((e,t)=>{const a={__time_range:"time_range",__time_col:"granularity_sqla",__time_grain:"time_grain_sqla",__granularity:"granularity"},r={},o={};return(0,le.Z)(t.extra_filters).forEach((e=>{if(a[e.col])e.val!==Fe.vM&&(o[a[e.col]]=e.val,r[e.col]=e.val);else{const t=(0,ba.f)({...e,isExtra:!0});o.adhoc_filters=[...(0,le.Z)(o.adhoc_filters),t]}})),o.applied_time_extras=r,o})(0,t),r=((e,t)=>{const a={},r=t.extra_form_data||{};Object.entries(Fe.gn).forEach((e=>{let[t,o]=e;const n=r[t];(0,i.Z)(n)&&(a[o]=n)})),"time_grain_sqla"in r&&(a.time_grain_sqla=r.time_grain_sqla),"granularity_sqla"in r&&(a.granularity_sqla=r.granularity_sqla);const o=t.extras||{};Fe.fn.forEach((e=>{const t=r[e];(0,i.Z)(t)&&(o[e]=t)})),Object.keys(o).length&&(a.extras=o),a.adhoc_filters=(0,le.Z)(r.adhoc_filters).map((e=>({...e,isExtra:!0})));const n=(0,le.Z)(r.filters).map((e=>(0,ba.f)({...e,isExtra:!0})));return Object.keys(e).forEach((e=>{e.match(/adhoc_filter.*/)&&(a[e]=[...(0,le.Z)(a[e]),...n])})),a})(e,t),o=[...Object.keys(e),...Object.keys(a),...Object.keys(r)].filter((e=>e.match(/adhoc_filter.*/))).reduce(((o,n)=>{return{...o,[n]:(i=_a(t,ya([...(0,le.Z)(e[n]),...(0,le.Z)(a[n]),...(0,le.Z)(r[n])])),s=0===e.slice_id,i.map((e=>e.isExtra?{...e,isExtra:!s}:e)))};var i,s}),{});return{...e,...t,...a,...r,...o}},wa=async e=>{try{var t;const a=await(0,s.Z)({method:"GET",endpoint:"api/v1/explore/"})(e);if((e=>{var t,a,r;return(null==e||null==(t=e.result)?void 0:t.form_data)&&(0,i.Z)(null==e||null==(a=e.result)||null==(r=a.dataset)?void 0:r.id)})(a))return a;let r=(0,l.t)("Failed to load chart data");const o=null==a||null==(t=a.result)?void 0:t.message;throw o&&(r=`${r}:\n${o}`),new Error(r)}catch(e){const t=await(0,m.O$)(e);throw new Error(t.message||t.error||(0,l.t)("Failed to load chart data."))}},xa=()=>{const e=(t=(0,h.eY)(p.KD.dashboardPageId))&&(0,j.rV)(j.dR.dashboard__explore_context,{})[t]||null;var t;if(e){const t=(0,h.eY)(p.KD.sliceId)||0,{labelColors:a,sharedLabelColors:r,colorScheme:o,chartConfiguration:n,nativeFilters:i,filterBoxFilters:s,dataMask:l,dashboardId:c}=e,d=(0,g.Z)({chart:{id:t},filters:(0,f._f)(t,s),nativeFilters:i,chartConfiguration:n,colorScheme:o,dataMask:l,labelColors:a,sharedLabelColors:r,sliceId:t,allSliceIds:[t],extraControls:{}});return Object.assign(d,{dashboardId:c}),d}return null};function Za(){const[e,t]=(0,r.useState)(!1),a=(0,r.useRef)(!1),i=(0,o.I0)(),s=(0,n.TH)();return(0,r.useEffect)((()=>{const e=_(s),r=(0,h.eY)(p.KD.saveAction),o=xa();a.current&&!r||wa(e).then((e=>{let{result:t}=e;const n=!a.current&&o?Sa(t.form_data,o):t.form_data;i((0,S.u)({...t,form_data:n,saveAction:r}))})).catch((e=>{i((0,S.u)(fa)),i((0,u.Gb)(e.message))})).finally((()=>{t(!0),a.current=!0})),(0,c.ZP)().source=c.Ag.explore}),[i,s]),e?(0,D.tZ)(ga,null):(0,D.tZ)(d.Z,null)}}}]);
//# sourceMappingURL=00c83c674756cafd5ffe.chunk.js.map