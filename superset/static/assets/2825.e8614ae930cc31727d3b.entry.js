"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2825],{68073:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(67294),r=n(45697),a=n.n(r),i=n(74069),s=n(35932),l=n(11965);const c={dialogClassName:a().string,triggerNode:a().node.isRequired,modalTitle:a().node,modalBody:a().node,modalFooter:a().node,beforeOpen:a().func,onExit:a().func,isButton:a().bool,className:a().string,tooltip:a().string,width:a().string,maxWidth:a().string,responsive:a().bool,resizable:a().bool,resizableConfig:a().object,draggable:a().bool,draggableConfig:a().object};class d extends o.Component{constructor(e){super(e),this.state={showModal:!1},this.open=this.open.bind(this),this.close=this.close.bind(this)}close(){this.setState((()=>({showModal:!1})))}open(e){e.preventDefault(),this.props.beforeOpen(),this.setState((()=>({showModal:!0})))}renderModal(){return(0,l.tZ)(i.Z,{wrapClassName:this.props.dialogClassName,className:this.props.className,show:this.state.showModal,onHide:this.close,afterClose:this.props.onExit,title:this.props.modalTitle,footer:this.props.modalFooter,hideFooter:!this.props.modalFooter,width:this.props.width,maxWidth:this.props.maxWidth,responsive:this.props.responsive,resizable:this.props.resizable,resizableConfig:this.props.resizableConfig,draggable:this.props.draggable,draggableConfig:this.props.draggableConfig},this.props.modalBody)}render(){return this.props.isButton?(0,l.tZ)(o.Fragment,null,(0,l.tZ)(s.Z,{className:"modal-trigger",tooltip:this.props.tooltip,onClick:this.open},this.props.triggerNode),this.renderModal()):(0,l.tZ)(o.Fragment,null,(0,l.tZ)("span",{onClick:this.open,role:"button"},this.props.triggerNode),this.renderModal())}}d.propTypes=c,d.defaultProps={beforeOpen:()=>{},onExit:()=>{},isButton:!1,className:"",modalTitle:"",resizable:!1,draggable:!1}},75017:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(5872),r=n.n(o),a=n(67294),i=n(45697),s=n.n(i),l=n(79676),c=n(11965);class d extends a.Component{constructor(e){super(e),this.onPaste=this.onPaste.bind(this)}onPaste(e){if(!this.props.isMulti)return;e.preventDefault();const t=e.clipboardData.getData("Text");if(!t)return;const n=`[${this.props.separator}]+`,o=t.split(new RegExp(n)).map((e=>e.trim())),r=this.props.isValidNewOption,a=this.props.value||[],i={},s={};this.props.options.forEach((e=>{i[e[this.props.valueKey]]=1}));let l=[];a.forEach((e=>{l.push({[this.props.labelKey]:e,[this.props.valueKey]:e}),s[e]=1})),l=l.concat(o.filter((e=>{const t=!s[e];return s[e]=1,t&&(r?r({[this.props.labelKey]:e}):!!e)})).map((e=>{const t={[this.props.labelKey]:e,[this.props.valueKey]:e};return i[e]||this.props.options.unshift(t),t}))),l.length&&this.props.onChange&&this.props.onChange(l)}render(){const{selectWrap:e,...t}=this.props;return(0,c.tZ)(e,r()({},t,{onPaste:this.onPaste}))}}d.propTypes={separator:s().array,selectWrap:s().elementType,selectRef:s().func,onChange:s().func.isRequired,valueKey:s().string,labelKey:s().string,options:s().array,isMulti:s().bool,value:s().any,isValidNewOption:s().func,noResultsText:s().string,forceOverflow:s().bool},d.defaultProps={separator:[",","\n","\t",";"],selectWrap:l.OC,valueKey:"value",labelKey:"label",options:[],isMulti:!1}},1836:(e,t,n)=>{n.d(t,{zQ:()=>a,zO:()=>i,xG:()=>s,x_:()=>l,pu:()=>c});var o=n(30381),r=n.n(o);const a=function(e,t,n="HH:mm:ss.SS"){const o=t-e;return r()(new Date(o)).utc().format(n)},i=function(){return r()().utc().valueOf()},s=function(e){return r()().subtract(e,"hours").utc().valueOf()},l=function(e){return r()().subtract(e,"days").utc().valueOf()},c=function(e){return r()().subtract(e,"years").utc().valueOf()}},44904:(e,t,n)=>{n.d(t,{IY:()=>o,Em:()=>r,v3:()=>a,eU:()=>i,ev:()=>s,rp:()=>l,Yo:()=>c,TU:()=>d,U$:()=>u,b$:()=>p,rD:()=>g,N2:()=>h,Yn:()=>m,GJ:()=>f,iJ:()=>b,lr:()=>v,OI:()=>y});const o={offline:"danger",failed:"danger",pending:"info",fetching:"info",running:"warning",stopped:"danger",success:"success"},r={success:"success",failed:"failed",running:"running",offline:"offline",pending:"pending"},a=["now","1 hour ago","1 day ago","7 days ago","28 days ago","90 days ago","1 year ago"],i=5,s=3,l=51,c=1024,d=2,u=864e5,p=5120,g=.9,h=8e3,m=100,f=90,b=60,v=55,y=50},33313:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(44904);const r=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:o.Yn,value:e})))},29487:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(5872),r=n.n(o),a=n(11965),i=(n(67294),n(82191)),s=n(37840),l=n(38097);function c(e){const{type:t="info",description:n,showIcon:o=!0,closable:c=!0,roomBelow:d=!1,children:u}=e,p=(0,s.Fg)(),{colors:g,typography:h,gridUnit:m}=p,{alert:f,error:b,info:v,success:y}=g;let x=v,w=l.Z.InfoSolid;return"error"===t?(x=b,w=l.Z.ErrorSolid):"warning"===t?(x=f,w=l.Z.AlertSolid):"success"===t&&(x=y,w=l.Z.CircleCheckSolid),(0,a.tZ)(i.bZ,r()({role:"alert",showIcon:o,icon:(0,a.tZ)(w,{"aria-label":`${t} icon`}),closeText:c&&(0,a.tZ)(l.Z.XSmall,{"aria-label":"close icon"}),css:(0,a.iv)({marginBottom:d?4*m:0,padding:`${2*m}px ${3*m}px`,alignItems:"flex-start",border:0,backgroundColor:x.light2,"& .ant-alert-icon":{marginRight:2*m},"& .ant-alert-message":{color:x.dark2,fontSize:h.sizes.m,fontWeight:n?h.weights.bold:h.weights.normal},"& .ant-alert-description":{color:x.dark2,fontSize:h.sizes.m}},"","")},e),u)}},94670:(e,t,n)=>{n.d(t,{iO:()=>d,up:()=>u,cE:()=>p,YH:()=>g,ry:()=>h,Ad:()=>m,Z5:()=>f});var o=n(5872),r=n.n(o),a=(n(15306),n(67294)),i=n(67913),s=n(11965);const l={"mode/sql":()=>n.e(8883).then(n.t.bind(n,48883,23)),"mode/markdown":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(6061)]).then(n.t.bind(n,66061,23)),"mode/css":()=>Promise.all([n.e(5802),n.e(4972)]).then(n.t.bind(n,94972,23)),"mode/json":()=>n.e(8750).then(n.t.bind(n,58750,23)),"mode/yaml":()=>n.e(6977).then(n.t.bind(n,60741,23)),"mode/html":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(1258)]).then(n.t.bind(n,71258,23)),"mode/javascript":()=>Promise.all([n.e(9794),n.e(4579)]).then(n.t.bind(n,54579,23)),"theme/textmate":()=>n.e(2089).then(n.t.bind(n,2089,23)),"theme/github":()=>n.e(440).then(n.t.bind(n,50440,23)),"ext/language_tools":()=>n.e(5335).then(n.t.bind(n,75335,23))};function c(e,{defaultMode:t,defaultTheme:o,defaultTabSize:c=2,placeholder:d}={}){return(0,i.Z)((async()=>{var i,d;const{default:u}=await n.e(8616).then(n.t.bind(n,38616,23)),{default:p}=await Promise.all([n.e(1216),n.e(4981)]).then(n.bind(n,74981));await Promise.all(e.map((e=>l[e]())));const g=t||(null==(i=e.find((e=>e.startsWith("mode/"))))?void 0:i.replace("mode/","")),h=o||(null==(d=e.find((e=>e.startsWith("theme/"))))?void 0:d.replace("theme/",""));return a.forwardRef((function({keywords:e,mode:t=g,theme:n=h,tabSize:o=c,defaultValue:a="",...i},l){if(e){const n={getCompletions:(n,o,r,a,i)=>{Number.isNaN(parseInt(a,10))&&o.getMode().$id===`ace/mode/${t}`&&i(null,e)}};u.acequire("ace/ext/language_tools").setCompleters([n])}return(0,s.tZ)(p,r()({ref:l,mode:t,theme:n,tabSize:o,defaultValue:a},i))}))}),d)}const d=c(["mode/sql","theme/github","ext/language_tools"]),u=c(["mode/sql","theme/github","ext/language_tools"],{placeholder:()=>(0,s.tZ)("div",{style:{height:"100%"}},(0,s.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,s.tZ)("div",{className:"ace_content"}))}),p=c(["mode/markdown","theme/textmate"]),g=c(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),h=c(["mode/css","theme/github"]),m=c(["mode/json","theme/github"]),f=c(["mode/json","mode/yaml","theme/github"])},67913:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(5872),r=n.n(o),a=n(67294),i=n(38703),s=n(11965);function l({width:e,height:t,showLoadingForImport:n=!1,placeholderStyle:o}){return t&&(0,s.tZ)("div",{key:"async-asm-placeholder",style:{width:e,height:t,...o}},n&&(0,s.tZ)(i.Z,{position:"floating"}))||null}function c(e,t=l){let n,o;function i(){return n||(n=e instanceof Promise?e:e()),o||n.then((e=>{o=e.default||e})),n}const c=a.forwardRef((function(e,n){const[l,c]=(0,a.useState)(void 0!==o);(0,a.useEffect)((()=>{let e=!0;return l||i().then((()=>{e&&c(!0)})),()=>{e=!1}}));const d=o||t;return d?(0,s.tZ)(d,r()({ref:d===o?n:null},e)):null}));return c.preload=i,c}},72875:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(67294),r=n(60650),a=n(92869),i=n(91178),s=n(11965);const l=(0,r.t)("Unexpected error");function c({title:e=l,error:t,subtitle:n,copyText:r,link:c,stackTrace:d,source:u}){if(t){const e=(0,a.Z)().get(t.error_type);if(e)return(0,s.tZ)(e,{error:t,source:u,subtitle:n})}return(0,s.tZ)(i.Z,{level:"warning",title:e,subtitle:n,copyText:r,source:u,body:c||d?(0,s.tZ)(o.Fragment,null,c&&(0,s.tZ)("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"(Request Access)"),(0,s.tZ)("br",null),d&&(0,s.tZ)("pre",null,d)):void 0})}},38703:(e,t,n)=>{n.d(t,{Z:()=>l}),n(67294);var o=n(37840),r=n(94184),a=n.n(r),i=n(11965);const s=o.iK.img`
  z-index: 99;
  width: 50px;
  position: relative;
  margin: 10px;
  &.inline {
    margin: 0px;
    width: 30px;
  }
  &.inline-centered {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  &.floating {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function l({position:e="floating",image:t="/static/assets/images/loading.gif",className:n}){return(0,i.tZ)(s,{className:a()("loading",e,n),alt:"Loading...",src:t,role:"status","aria-live":"polite","aria-label":"Loading"})}},79676:(e,t,n)=>{n.d(t,{JY:()=>W,a7:()=>j,OC:()=>V,ZP:()=>Y});var o=n(5872),r=n.n(o),a=n(82492),i=n.n(a),s=n(67294),l=n(37789),c=n(29584),d=n(26678),u=n(56433),p=n(95742),g=n(80454),h=n.n(g),m=n(37840),f=n(75429),b=n(12766),v=n(36144),y=n(74061),x=n(11965);function w({children:e,...t}){const{maxHeight:n,selectProps:o,theme:r,getStyles:a,cx:i,innerRef:l,isMulti:c,className:d}=t,{windowListRef:u,windowListInnerRef:p}=o,g=(0,s.useRef)(null),h=u||g;let{optionHeight:m}=o;m||(m=r?function({spacing:{baseUnit:e,lineHeight:t}}){return 4*e+t}(r):30);const f=m*e.length;return(0,s.useEffect)((()=>{const t=function(e){return Array.isArray(e)?e.findIndex((({props:{isFocused:e=!1}={}})=>e))||0:-1}(e);h.current&&t&&h.current.scrollToItem(t)}),[e,h]),(0,x.tZ)(y.t7,{css:a("menuList",t),className:i({"menu-list":!0,"menu-list--is-multi":c},d),ref:h,outerRef:l,innerRef:p,height:Math.min(f,n),width:"100%",itemData:e,itemCount:e.length,itemSize:m},(({data:e,index:t,style:n})=>(0,x.tZ)("div",{style:n},e[t])))}const{MenuList:Z}=c.y,E=100;function N({children:e,...t}){const{windowThreshold:n=E}=t.selectProps;return Array.isArray(e)&&e.length>n?(0,x.tZ)(w,t,e):(0,x.tZ)(Z,t,e)}function O(e){function t(t,n){const{components:o={},...a}=t,i={...o,MenuList:N};return(0,x.tZ)(e,r()({components:i,ref:n},a))}return s.forwardRef(t)}const C=O(l.ZP),T=O(f.ZP),k=O(b.ZP),R=O(v.Z),I="Select",P="Select",S=e=>({primary:e.colors.success.base,danger:e.colors.error.base,warning:e.colors.warning.base,indicator:e.colors.info.base,almostBlack:e.colors.grayscale.dark1,grayDark:e.colors.grayscale.dark1,grayLight:e.colors.grayscale.light2,gray:e.colors.grayscale.light1,grayBg:e.colors.grayscale.light4,grayBgDarker:e.colors.grayscale.light3,grayBgDarkest:e.colors.grayscale.light2,grayHeading:e.colors.grayscale.light1,menuHover:e.colors.grayscale.light3,lightest:e.colors.grayscale.light5,darkest:e.colors.grayscale.dark2,grayBorder:e.colors.grayscale.light2,grayBorderLight:e.colors.grayscale.light3,grayBorderDark:e.colors.grayscale.light1,textDefault:e.colors.grayscale.dark1,textDarkest:e.colors.grayscale.dark2,dangerLight:e.colors.error.light1}),$={container:(e,{theme:{spacing:{minWidth:t}}})=>[e,x.iv`
      min-width: ${t};
    `],placeholder:e=>[e,x.iv`
      white-space: nowrap;
    `],indicatorSeparator:()=>x.iv`
    display: none;
  `,indicatorsContainer:e=>[e,x.iv`
      i {
        width: 1em;
        display: inline-block;
      }
    `],clearIndicator:e=>[e,x.iv`
      padding: 4px 0 4px 6px;
    `],control:(e,{isFocused:t,menuIsOpen:n,theme:{borderRadius:o,colors:r}})=>{const a=t&&!n;let i=r.grayBorder;return(a||n)&&(i=r.grayBorderDark),[e,x.iv`
        border-color: ${i};
        box-shadow: ${a?"inset 0 1px 1px rgba(0,0,0,.075), 0 0 0 3px rgba(0,0,0,.1)":"none"};
        border-radius: ${n?`${o}px ${o}px 0 0`:`${o}px`};
        &:hover {
          border-color: ${i};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }
        flex-wrap: nowrap;
        padding-left: 1px;
      `]},menu:(e,{theme:{zIndex:t}})=>[e,x.iv`
      padding-bottom: 2em;
      z-index: ${t}; /* override at least multi-page pagination */
      width: auto;
      min-width: 100%;
      max-width: 80vw;
      background: none;
      box-shadow: none;
      border: 0;
    `],menuList:(e,{theme:{borderRadius:t,colors:n}})=>[e,x.iv`
      background: ${n.lightest};
      border-radius: 0 0 ${t}px ${t}px;
      border: 1px solid ${n.grayBorderDark};
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
      margin-top: -1px;
      border-top-color: ${n.grayBorderLight};
      min-width: 100%;
      width: auto;
      border-radius: 0 0 ${t}px ${t}px;
      padding-top: 0;
      padding-bottom: 0;
    `],option:(e,{isDisabled:t,isFocused:n,isSelected:o,theme:{colors:r,spacing:{lineHeight:a,fontSize:i}}})=>{let s=r.textDefault,l=r.lightest;return n?l=r.grayBgDarker:t&&(s="#ccc"),[e,x.iv`
        cursor: pointer;
        line-height: ${a}px;
        font-size: ${i}px;
        background-color: ${l};
        color: ${s};
        font-weight: ${o?600:400};
        white-space: nowrap;
        &:hover:active {
          background-color: ${r.grayBg};
        }
      `]},valueContainer:(e,{isMulti:t,hasValue:n,theme:{spacing:{baseUnit:o}}})=>[e,x.iv`
      padding-left: ${t&&n?1:3*o}px;
    `],multiValueLabel:(e,{theme:{spacing:{baseUnit:t}}})=>({...e,paddingLeft:1.2*t,paddingRight:1.2*t}),input:(e,{selectProps:t})=>{var n;return[e,x.iv`
      margin-left: 0;
      vertical-align: middle;
      ${null!=t&&t.isMulti&&null!=t&&null!=(n=t.value)&&n.length?"padding: 0 6px; width: 100%":"padding: 0; flex: 1 1 auto;"};
    `]},menuPortal:e=>({...e,zIndex:1030})},M={background:"none",border:"none",outline:"none",padding:0},{ClearIndicator:A,DropdownIndicator:L,Option:D,Input:z,SelectContainer:U}=c.y,B={SelectContainer:({children:e,...t})=>{const{selectProps:{assistiveText:n}}=t;return(0,x.tZ)("div",null,(0,x.tZ)(U,t,e),n&&(0,x.tZ)("span",{css:e=>({marginLeft:3,fontSize:e.typography.sizes.s,color:e.colors.grayscale.light1})},n))},Option:({children:e,innerProps:t,data:n,...o})=>(0,x.tZ)(D,r()({},o,{data:n,css:null!=n&&n.style?n.style:null,innerProps:t}),e),ClearIndicator:e=>(0,x.tZ)(A,e,(0,x.tZ)("i",{className:"fa"},"×")),DropdownIndicator:e=>(0,x.tZ)(L,e,(0,x.tZ)("i",{className:"fa fa-caret-"+(e.selectProps.menuIsOpen?"up":"down")})),Input:e=>{const{getStyles:t}=e;return(0,x.tZ)(z,r()({},e,{css:t("input",e),autoComplete:"chrome-off",inputStyle:M}))}},H={valueContainer:(e,{getValue:t,theme:{spacing:{baseUnit:n}},isMulti:o})=>({...e,paddingLeft:t().length>0?1:3*n,overflow:o&&t().length>0?"visible":"hidden"}),singleValue:(e,t)=>{const{getStyles:n}=t;return{...n("multiValue",t),".metric-option":n("multiValueLabel",t)}}};var F=n(55083);function K(e){const t=(0,p.JN)(e,{withRef:!0}),n=B;function o(o){let a;const{selectRef:s,labelKey:l="label",valueKey:u="value",themeConfig:g,stylesConfig:f={},optionRenderer:b,valueRenderer:v,valueRenderedAsLabel:y,onPaste:w,multi:Z=!1,clearable:E,sortable:N=!0,forceOverflow:O,className:C=I,classNamePrefix:T=P,options:R,value:M,components:A,isMulti:L,isClearable:D,minMenuHeight:z=100,maxMenuHeight:U=220,filterOption:B,ignoreAccents:K=!1,getOptionValue:V=(e=>"string"==typeof e?e:e[u]),getOptionLabel:j=(e=>"string"==typeof e?e:e[l]||e[u]),formatOptionLabel:W=((e,{context:t})=>"value"===t?v?v(e):j(e):b?b(e):j(e)),...Y}=o,q=(0,F.d)(M,R||[],u),G=void 0===L?Z:L,_=void 0===D?E:D,J=G&&N&&Array.isArray(q)&&q.length>1,X=J?t:e,Q={...n,...A};if(J){Q.MultiValue=(ee=Q.MultiValue||c.y.MultiValue,(0,p.W8)((e=>(0,x.tZ)(ee,r()({},e,{innerProps:{onMouseDown:e=>{e.preventDefault(),e.stopPropagation()}}})))));const e={getHelperDimensions:({node:e})=>e.getBoundingClientRect(),axis:"xy",onSortEnd:({oldIndex:e,newIndex:t})=>{const n=h()(q,e,t);Y.onChange&&Y.onChange(n,{action:"set-value"})},distance:4};Object.assign(Y,e)}var ee;if((void 0===y?G:y)&&!f.valueContainer&&Object.assign(f,H),w){const e=Q.Input||c.y.Input;Q.Input=t=>(0,x.tZ)(e,r()({},t,{onPaste:w}))}e===k&&(Y.getNewOptionData=(e,t)=>({label:t||e,[u]:e,isNew:!0})),O&&Object.assign(Y,{closeMenuOnScroll:e=>{var t,n,o;const r=null==(t=a)||null==(n=t.state)?void 0:n.menuIsOpen,i=e.target;return r&&i&&!(null!=(o=i.classList)&&o.contains("Select__menu-list"))},menuPosition:"fixed"});const te=(0,m.Fg)();return(0,x.tZ)(X,r()({ref:e=>{a=J&&e&&"refs"in e?e.refs.wrappedInstance:e,"function"==typeof s?s(a):s&&"current"in s&&(s.current=a)},className:C,classNamePrefix:T,isMulti:G,isClearable:_,options:R,value:q,minMenuHeight:z,maxMenuHeight:U,filterOption:void 0!==B?B:(0,d.c)({ignoreAccents:K}),styles:{...$,...f},theme:e=>i()(e,(e=>({borderRadius:e.borderRadius,zIndex:11,colors:S(e),spacing:{baseUnit:3,menuGutter:0,controlHeight:34,lineHeight:19,fontSize:14,minWidth:"6.5em"}}))(te),g),formatOptionLabel:W,getOptionLabel:j,getOptionValue:V,components:Q},Y))}return s.memo(o)}const V=K(C),j=(K(T),K(k)),W=K(R),Y=((0,u.yf)(K(l.ZP)),V);n(75017);var q=n(64749);const G=(0,m.iK)((e=>(0,x.tZ)(q.default,r()({getPopupContainer:e=>e.parentNode},e))))`
  display: block;
`,_=(0,m.iK)(q.default)`
  &.ant-select-single {
    .ant-select-selector {
      height: 36px;
      padding: 0 11px;
      background-color: ${({theme:e})=>e.colors.grayscale.light3};
      border: none;

      .ant-select-selection-search-input {
        height: 100%;
      }

      .ant-select-selection-item,
      .ant-select-selection-placeholder {
        line-height: 35px;
        color: ${({theme:e})=>e.colors.grayscale.dark1};
      }
    }
  }
`;Object.assign(G,{Option:q.default.Option}),Object.assign(_,{Option:q.default.Option})},71989:(e,t,n)=>{n.d(t,{Xv:()=>h,cl:()=>f,ZP:()=>b});var o=n(5872),r=n.n(o),a=(n(67294),n(11965)),i=n(37840),s=n(1350),l=n(38097);const c=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...o})=>(0,a.tZ)(s.default,r()({animated:e},o,{css:e=>a.iv`
      overflow: ${n?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&a.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `})),d=(0,i.iK)(s.default.TabPane)``,u=Object.assign(c,{TabPane:d}),p=(0,i.iK)(c)`
  .ant-tabs-content-holder {
    background: white;
  }

  & > .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-tab-remove {
    padding-top: 0;
    padding-bottom: 0;
    height: ${({theme:e})=>6*e.gridUnit}px;
  }

  ${({fullWidth:e})=>e&&a.iv`
      .ant-tabs-nav-list {
        width: 100%;
      }
    `}
`,g=(0,i.iK)(l.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(p,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,a.tZ)(g,{role:"button",tabIndex:0})};const m=(0,i.iK)(h)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,f=Object.assign(m,{TabPane:d}),b=u},40637:(e,t,n)=>{n.d(t,{Xv:()=>o.Xv,cl:()=>o.cl,ZP:()=>o.ZP});var o=n(71989)},86057:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(11965),r=(n(67294),n(37840)),a=n(78019),i=n(38097),s=n(58593);const l=function({warningMarkdown:e,size:t}){const n=(0,r.Fg)();return(0,o.tZ)(s.u,{id:"warning-tooltip",title:(0,o.tZ)(a.Z,{source:e})},(0,o.tZ)(i.Z.AlertSolid,{iconColor:n.colors.alert.base,iconSize:t,css:(0,o.iv)({marginRight:2*n.gridUnit},"","")}))}},99543:(e,t,n)=>{n.d(t,{SJ:()=>f,wK:()=>b,gf:()=>v,gP:()=>y,p1:()=>x,_0:()=>w,zd:()=>Z,hU:()=>E,E8:()=>N,JB:()=>O});var o=n(45220),r=n.n(o),a=n(52353),i=n.n(a),s=n(14176),l=n.n(s),c=n(18446),d=n.n(c),u=n(14670),p=n.n(u),g=n(14890),h=n(64417),m=n.n(h);function f(e,t,n){const o={...e[t]},r={...n};return r.id||(r.id=p().generate()),o[r.id]=r,{...e,[t]:o}}function b(e,t,n,o){const r={...e[t]};return r[n.id]={...r[n.id],...o},{...e,[t]:r}}function v(e,t,n,o,r="id"){const a=[];return e[t].forEach((e=>{n[r]===e[r]?a.push({...e,...o}):a.push(e)})),{...e,[t]:a}}function y(e,t,n,o="id"){const r=[];return e[t].forEach((e=>{n[o]!==e[o]&&r.push(e)})),{...e,[t]:r}}function x(e,t){let n;return e.forEach((e=>{e.id===t&&(n=e)})),n}function w(e,t,n,o=!1){const r={...n};r.id||(r.id=p().generate());const a={};return a[t]=o?[r,...e[t]]:[...e[t],r],{...e,...a}}function Z(e,t,n,o=!1){const r=[...n];r.forEach((e=>{e.id||(e.id=p().generate())}));const a={};return a[t]=o?[...r,...e[t]]:[...e[t],...r],{...e,...a}}function E(e=!0,t={}){const{paths:n,config:o}=t,r=g.qC;return e?r(m()(n,o)):r()}function N(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;const{length:n}=e;for(let o=0;o<n;o+=1)if(e[o]!==t[o])return!1;return!0}function O(e,t,n={ignoreUndefined:!1,ignoreNull:!1}){let o=e,a=t;return n.ignoreUndefined&&(o=l()(o,i()),a=l()(a,i())),n.ignoreNull&&(o=l()(o,r()),a=l()(a,r())),d()(o,a)}}}]);