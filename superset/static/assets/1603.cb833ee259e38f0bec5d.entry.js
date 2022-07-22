"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1603],{68073:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(67294),i=n(45697),r=n.n(i),a=n(74069),s=n(35932),l=n(11965);const c={dialogClassName:r().string,triggerNode:r().node.isRequired,modalTitle:r().node,modalBody:r().node,modalFooter:r().node,beforeOpen:r().func,onExit:r().func,isButton:r().bool,className:r().string,tooltip:r().string,width:r().string,maxWidth:r().string,responsive:r().bool,resizable:r().bool,resizableConfig:r().object,draggable:r().bool,draggableConfig:r().object};class d extends o.Component{constructor(e){super(e),this.state={showModal:!1},this.open=this.open.bind(this),this.close=this.close.bind(this)}close(){this.setState((()=>({showModal:!1})))}open(e){e.preventDefault(),this.props.beforeOpen(),this.setState((()=>({showModal:!0})))}renderModal(){return(0,l.tZ)(a.Z,{wrapClassName:this.props.dialogClassName,className:this.props.className,show:this.state.showModal,onHide:this.close,afterClose:this.props.onExit,title:this.props.modalTitle,footer:this.props.modalFooter,hideFooter:!this.props.modalFooter,width:this.props.width,maxWidth:this.props.maxWidth,responsive:this.props.responsive,resizable:this.props.resizable,resizableConfig:this.props.resizableConfig,draggable:this.props.draggable,draggableConfig:this.props.draggableConfig},this.props.modalBody)}render(){return this.props.isButton?(0,l.tZ)(o.Fragment,null,(0,l.tZ)(s.Z,{className:"modal-trigger",tooltip:this.props.tooltip,onClick:this.open},this.props.triggerNode),this.renderModal()):(0,l.tZ)(o.Fragment,null,(0,l.tZ)("span",{onClick:this.open,role:"button"},this.props.triggerNode),this.renderModal())}}d.propTypes=c,d.defaultProps={beforeOpen:()=>{},onExit:()=>{},isButton:!1,className:"",modalTitle:"",resizable:!1,draggable:!1}},75017:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(5872),i=n.n(o),r=n(67294),a=n(45697),s=n.n(a),l=n(79676),c=n(11965);class d extends r.Component{constructor(e){super(e),this.onPaste=this.onPaste.bind(this)}onPaste(e){if(!this.props.isMulti)return;e.preventDefault();const t=e.clipboardData.getData("Text");if(!t)return;const n=`[${this.props.separator}]+`,o=t.split(new RegExp(n)).map((e=>e.trim())),i=this.props.isValidNewOption,r=this.props.value||[],a={},s={};this.props.options.forEach((e=>{a[e[this.props.valueKey]]=1}));let l=[];r.forEach((e=>{l.push({[this.props.labelKey]:e,[this.props.valueKey]:e}),s[e]=1})),l=l.concat(o.filter((e=>{const t=!s[e];return s[e]=1,t&&(i?i({[this.props.labelKey]:e}):!!e)})).map((e=>{const t={[this.props.labelKey]:e,[this.props.valueKey]:e};return a[e]||this.props.options.unshift(t),t}))),l.length&&this.props.onChange&&this.props.onChange(l)}render(){const{selectWrap:e,...t}=this.props;return(0,c.tZ)(e,i()({},t,{onPaste:this.onPaste}))}}d.propTypes={separator:s().array,selectWrap:s().elementType,selectRef:s().func,onChange:s().func.isRequired,valueKey:s().string,labelKey:s().string,options:s().array,isMulti:s().bool,value:s().any,isValidNewOption:s().func,noResultsText:s().string,forceOverflow:s().bool},d.defaultProps={separator:[",","\n","\t",";"],selectWrap:l.Ph,valueKey:"value",labelKey:"label",options:[],isMulti:!1}},1836:(e,t,n)=>{n.d(t,{zQ:()=>r,zO:()=>a,xG:()=>s,x_:()=>l,pu:()=>c});var o=n(30381),i=n.n(o);const r=function(e,t,n="HH:mm:ss.SS"){const o=t-e;return i()(new Date(o)).utc().format(n)},a=function(){return i()().utc().valueOf()},s=function(e){return i()().subtract(e,"hours").utc().valueOf()},l=function(e){return i()().subtract(e,"days").utc().valueOf()},c=function(e){return i()().subtract(e,"years").utc().valueOf()}},44904:(e,t,n)=>{n.d(t,{IY:()=>o,Em:()=>i,v3:()=>r,eU:()=>a,ev:()=>s,rp:()=>l,Yo:()=>c,TU:()=>d,U$:()=>g,b$:()=>p,rD:()=>u,N2:()=>h,Yn:()=>m,GJ:()=>b,iJ:()=>f,lr:()=>y,OI:()=>x});const o={offline:"danger",failed:"danger",pending:"info",fetching:"info",running:"warning",stopped:"danger",success:"success"},i={success:"success",failed:"failed",running:"running",offline:"offline",pending:"pending"},r=["now","1 hour ago","1 day ago","7 days ago","28 days ago","90 days ago","1 year ago"],a=5,s=3,l=51,c=1024,d=2,g=864e5,p=5120,u=.9,h=8e3,m=100,b=90,f=60,y=55,x=50},33313:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(44904);const i=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:o.Yn,value:e})))},29487:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(5872),i=n.n(o),r=n(11965),a=(n(67294),n(4863)),s=n(51995),l=n(70163);function c(e){const{type:t="info",description:n,showIcon:o=!0,closable:c=!0,roomBelow:d=!1,children:g}=e,p=(0,s.Fg)(),{colors:u,typography:h,gridUnit:m}=p,{alert:b,error:f,info:y,success:x}=u;let v=y,w=l.Z.InfoSolid;return"error"===t?(v=f,w=l.Z.ErrorSolid):"warning"===t?(v=b,w=l.Z.AlertSolid):"success"===t&&(v=x,w=l.Z.CircleCheckSolid),(0,r.tZ)(a.default,i()({role:"alert",showIcon:o,icon:(0,r.tZ)(w,{"aria-label":`${t} icon`}),closeText:c&&(0,r.tZ)(l.Z.XSmall,{"aria-label":"close icon"}),css:(0,r.iv)({marginBottom:d?4*m:0,padding:`${2*m}px ${3*m}px`,alignItems:"flex-start",border:0,backgroundColor:v.light2,"& .ant-alert-icon":{marginRight:2*m},"& .ant-alert-message":{color:v.dark2,fontSize:h.sizes.m,fontWeight:n?h.weights.bold:h.weights.normal},"& .ant-alert-description":{color:v.dark2,fontSize:h.sizes.m}},"","")},e),g)}},94670:(e,t,n)=>{n.d(t,{iO:()=>d,up:()=>g,cE:()=>p,YH:()=>u,ry:()=>h,Ad:()=>m,Z5:()=>b});var o=n(5872),i=n.n(o),r=n(67294),a=n(67913),s=n(11965);const l={"mode/sql":()=>n.e(8883).then(n.t.bind(n,48883,23)),"mode/markdown":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(6061)]).then(n.t.bind(n,66061,23)),"mode/css":()=>Promise.all([n.e(5802),n.e(4972)]).then(n.t.bind(n,94972,23)),"mode/json":()=>n.e(8750).then(n.t.bind(n,58750,23)),"mode/yaml":()=>n.e(6977).then(n.t.bind(n,60741,23)),"mode/html":()=>Promise.all([n.e(9794),n.e(5802),n.e(4832),n.e(1258)]).then(n.t.bind(n,71258,23)),"mode/javascript":()=>Promise.all([n.e(9794),n.e(4579)]).then(n.t.bind(n,54579,23)),"theme/textmate":()=>n.e(2089).then(n.t.bind(n,2089,23)),"theme/github":()=>n.e(440).then(n.t.bind(n,50440,23)),"ext/language_tools":()=>n.e(5335).then(n.t.bind(n,75335,23)),"ext/searchbox":()=>n.e(8656).then(n.t.bind(n,68656,23))};function c(e,{defaultMode:t,defaultTheme:o,defaultTabSize:c=2,placeholder:d}={}){return(0,a.Z)((async()=>{var a,d;const{default:g}=await n.e(8616).then(n.t.bind(n,38616,23)),{default:p}=await Promise.all([n.e(1216),n.e(4981)]).then(n.bind(n,74981));await Promise.all(e.map((e=>l[e]())));const u=t||(null==(a=e.find((e=>e.startsWith("mode/"))))?void 0:a.replace("mode/","")),h=o||(null==(d=e.find((e=>e.startsWith("theme/"))))?void 0:d.replace("theme/",""));return(0,r.forwardRef)((function({keywords:e,mode:t=u,theme:n=h,tabSize:o=c,defaultValue:r="",...a},l){if(e){const n={getCompletions:(n,o,i,r,a)=>{Number.isNaN(parseInt(r,10))&&o.getMode().$id===`ace/mode/${t}`&&a(null,e)}};g.acequire("ace/ext/language_tools").setCompleters([n])}return(0,s.tZ)(p,i()({ref:l,mode:t,theme:n,tabSize:o,defaultValue:r},a))}))}),d)}const d=c(["mode/sql","theme/github","ext/language_tools","ext/searchbox"]),g=c(["mode/sql","theme/github","ext/language_tools","ext/searchbox"],{placeholder:()=>(0,s.tZ)("div",{style:{height:"100%"}},(0,s.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,s.tZ)("div",{className:"ace_content"}))}),p=c(["mode/markdown","theme/textmate"]),u=c(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),h=c(["mode/css","theme/github"]),m=c(["mode/json","theme/github"]),b=c(["mode/json","mode/yaml","theme/github"])},67913:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(5872),i=n.n(o),r=n(67294),a=n(38703),s=n(11965);function l({width:e,height:t,showLoadingForImport:n=!1,placeholderStyle:o}){return t&&(0,s.tZ)("div",{key:"async-asm-placeholder",style:{width:e,height:t,...o}},n&&(0,s.tZ)(a.Z,{position:"floating"}))||null}function c(e,t=l){let n,o;function a(){return n||(n=e instanceof Promise?e:e()),o||n.then((e=>{o=e.default||e})),n}const c=(0,r.forwardRef)((function(e,n){const[l,c]=(0,r.useState)(void 0!==o);(0,r.useEffect)((()=>{let e=!0;return l||a().then((()=>{e&&c(!0)})),()=>{e=!1}}));const d=o||t;return d?(0,s.tZ)(d,i()({ref:d===o?n:null},e)):null}));return c.preload=a,c}},43700:(e,t,n)=>{n.d(t,{Z:()=>a}),n(67294);var o=n(51995),i=n(46445),r=n(11965);const a=Object.assign((0,o.iK)((({light:e,bigger:t,bold:n,animateArrows:o,...a})=>(0,r.tZ)(i.Z,a)))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:n})=>e&&t&&`\n            border-bottom: 1px solid ${n.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:i.Z.Panel})},94301:(e,t,n)=>{n.d(t,{XJ:()=>x,x3:()=>v,Tc:()=>w}),n(67294);var o,i=n(51995),r=n(11965),a=n(4715),s=n(35932);!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(o||(o={}));const l=i.iK.div`
  ${({theme:e})=>r.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: ${4*e.gridUnit}px;
    text-align: center;

    & .ant-empty-image svg {
      width: auto;
    }
  `}
`,c=i.iK.div``,d=i.iK.p`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.m}px;
    color: ${e.colors.grayscale.light1};
    margin: ${2*e.gridUnit}px 0 0 0;
    font-weight: ${e.typography.weights.bold};
  `}
`,g=(0,i.iK)(d)`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.l}px;
    color: ${e.colors.grayscale.light1};
    margin-top: ${4*e.gridUnit}px;
  `}
`,p=i.iK.p`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.s}px;
    color: ${e.colors.grayscale.light1};
    margin: ${2*e.gridUnit}px 0 0 0;
  `}
`,u=(0,i.iK)(p)`
  ${({theme:e})=>r.iv`
    font-size: ${e.typography.sizes.m}px;
  `}
`,h=(0,i.iK)(p)`
  ${({theme:e})=>r.iv`
    margin-top: ${e.gridUnit}px;
  `}
`,m=(0,i.iK)(s.Z)`
  ${({theme:e})=>r.iv`
    margin-top: ${4*e.gridUnit}px;
    z-index: 1;
  `}
`,b=e=>"string"==typeof e?`/static/assets/images/${e}`:e,f=e=>{switch(e){case o.Small:return{height:"50px"};case o.Medium:return{height:"80px"};case o.Big:return{height:"150px"};default:return{height:"50px"}}},y=({image:e,size:t})=>(0,r.tZ)(a.HY,{description:!1,image:b(e),imageStyle:f(t)}),x=({title:e,image:t,description:n,buttonAction:i,buttonText:a})=>(0,r.tZ)(l,null,(0,r.tZ)(y,{image:t,size:o.Big}),(0,r.tZ)(c,{css:e=>r.iv`
          max-width: ${150*e.gridUnit}px;
        `},(0,r.tZ)(g,null,e),n&&(0,r.tZ)(u,null,n),i&&a&&(0,r.tZ)(m,{buttonStyle:"primary",onClick:i},a))),v=({title:e,image:t,description:n,buttonAction:i,buttonText:a})=>(0,r.tZ)(l,null,(0,r.tZ)(y,{image:t,size:o.Medium}),(0,r.tZ)(c,{css:e=>r.iv`
          max-width: ${100*e.gridUnit}px;
        `},(0,r.tZ)(d,null,e),n&&(0,r.tZ)(p,null,n),a&&i&&(0,r.tZ)(m,{buttonStyle:"primary",onClick:i},a))),w=({title:e,image:t,description:n})=>(0,r.tZ)(l,null,(0,r.tZ)(y,{image:t,size:o.Small}),(0,r.tZ)(c,{css:e=>r.iv`
          max-width: ${75*e.gridUnit}px;
        `},(0,r.tZ)(d,null,e),n&&(0,r.tZ)(h,null,n)))},72875:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(67294),i=n(61988),r=n(92869),a=n(91178),s=n(11965);const l=(0,i.t)("Unexpected error");function c({title:e=l,error:t,subtitle:n,copyText:i,link:c,stackTrace:d,source:g}){if(t){const e=(0,r.Z)().get(t.error_type);if(e)return(0,s.tZ)(e,{error:t,source:g,subtitle:n})}return(0,s.tZ)(a.Z,{level:"warning",title:e,subtitle:n,copyText:i,source:g,body:c||d?(0,s.tZ)(o.Fragment,null,c&&(0,s.tZ)("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"(Request Access)"),(0,s.tZ)("br",null),d&&(0,s.tZ)("pre",null,d)):void 0})}},38703:(e,t,n)=>{n.d(t,{Z:()=>l}),n(67294);var o=n(51995),i=n(94184),r=n.n(i),a=n(11965);const s=o.iK.img`
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
`;function l({position:e="floating",image:t="/static/assets/images/loading.gif",className:n}){return(0,a.tZ)(s,{className:r()("loading",e,n),alt:"Loading...",src:t,role:"status","aria-live":"polite","aria-label":"Loading"})}},83862:(e,t,n)=>{n.d(t,{v:()=>l,$:()=>c});var o=n(51995),i=n(43865);const r=(0,o.iK)(i.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>7*e.gridUnit}px;
    line-height: ${({theme:e})=>7*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,a=(0,o.iK)(i.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,s=(0,o.iK)(i.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,l=Object.assign(i.Z,{Item:r}),c=Object.assign(a,{Item:r,SubMenu:s,Divider:i.Z.Divider,ItemGroup:i.Z.ItemGroup})},79676:(e,t,n)=>{n.d(t,{JY:()=>F,a7:()=>H,Ph:()=>K,ZP:()=>j});var o=n(5872),i=n.n(o),r=n(82492),a=n.n(r),s=n(67294),l=n(29584),c=n(26678),d=n(95742),g=n(80454),p=n.n(g),u=n(51995),h=n(37789),m=n(12766),b=n(320),f=n(74061),y=n(11965);function x({children:e,...t}){const{maxHeight:n,selectProps:o,theme:i,getStyles:r,cx:a,innerRef:l,isMulti:c,className:d}=t,{windowListRef:g,windowListInnerRef:p}=o,u=(0,s.useRef)(null),h=g||u;let{optionHeight:m}=o;m||(m=i?function({spacing:{baseUnit:e,lineHeight:t}}){return 4*e+t}(i):30);const b=m*e.length;return(0,s.useEffect)((()=>{const t=function(e){return Array.isArray(e)?e.findIndex((({props:{isFocused:e=!1}={}})=>e))||0:-1}(e);h.current&&t&&h.current.scrollToItem(t)}),[e,h]),(0,y.tZ)(f.t7,{css:r("menuList",t),className:a({"menu-list":!0,"menu-list--is-multi":c},d),ref:h,outerRef:l,innerRef:p,height:Math.min(b,n),width:"100%",itemData:e,itemCount:e.length,itemSize:m},(({data:e,index:t,style:n})=>(0,y.tZ)("div",{style:n},e[t])))}const{MenuList:v}=l.y,w=100;function Z({children:e,...t}){const{windowThreshold:n=w}=t.selectProps;return Array.isArray(e)&&e.length>n?(0,y.tZ)(x,t,e):(0,y.tZ)(v,t,e)}function $(e){function t(t,n){const{components:o={},...r}=t,a={...o,MenuList:Z};return(0,y.tZ)(e,i()({components:a,ref:n},r))}return(0,s.forwardRef)(t)}const k=$(h.ZP),T=$(m.ZP),E=$(b.Z),I="Select",N="Select",O=e=>({primary:e.colors.success.base,danger:e.colors.error.base,warning:e.colors.warning.base,indicator:e.colors.info.base,almostBlack:e.colors.grayscale.dark1,grayDark:e.colors.grayscale.dark1,grayLight:e.colors.grayscale.light2,gray:e.colors.grayscale.light1,grayBg:e.colors.grayscale.light4,grayBgDarker:e.colors.grayscale.light3,grayBgDarkest:e.colors.grayscale.light2,grayHeading:e.colors.grayscale.light1,menuHover:e.colors.grayscale.light3,lightest:e.colors.grayscale.light5,darkest:e.colors.grayscale.dark2,grayBorder:e.colors.grayscale.light2,grayBorderLight:e.colors.grayscale.light3,grayBorderDark:e.colors.grayscale.light1,textDefault:e.colors.grayscale.dark1,textDarkest:e.colors.grayscale.dark2,dangerLight:e.colors.error.light1}),S={container:(e,{theme:{spacing:{minWidth:t}}})=>[e,y.iv`
      min-width: ${t};
    `],placeholder:e=>[e,y.iv`
      white-space: nowrap;
    `],indicatorSeparator:()=>y.iv`
    display: none;
  `,indicatorsContainer:e=>[e,y.iv`
      i {
        width: 1em;
        display: inline-block;
      }
    `],clearIndicator:e=>[e,y.iv`
      padding: 4px 0 4px 6px;
    `],control:(e,{isFocused:t,menuIsOpen:n,theme:{borderRadius:o,colors:i}})=>{const r=t&&!n;let a=i.grayBorder;return(r||n)&&(a=i.grayBorderDark),[e,y.iv`
        border-color: ${a};
        box-shadow: ${r?"inset 0 1px 1px rgba(0,0,0,.075), 0 0 0 3px rgba(0,0,0,.1)":"none"};
        border-radius: ${n?`${o}px ${o}px 0 0`:`${o}px`};
        &:hover {
          border-color: ${a};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }
        flex-wrap: nowrap;
        padding-left: 1px;
      `]},menu:(e,{theme:{zIndex:t}})=>[e,y.iv`
      padding-bottom: 2em;
      z-index: ${t}; /* override at least multi-page pagination */
      width: auto;
      min-width: 100%;
      max-width: 80vw;
      background: none;
      box-shadow: none;
      border: 0;
    `],menuList:(e,{theme:{borderRadius:t,colors:n}})=>[e,y.iv`
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
    `],option:(e,{isDisabled:t,isFocused:n,isSelected:o,theme:{colors:i,spacing:{lineHeight:r,fontSize:a},weights:s}})=>{let l=i.textDefault,c=i.lightest;return n?c=i.grayBgDarker:t&&(l="#ccc"),[e,y.iv`
        cursor: pointer;
        line-height: ${r}px;
        font-size: ${a}px;
        background-color: ${c};
        color: ${l};
        font-weight: ${o?s.bold:s.normal};
        white-space: nowrap;
        &:hover:active {
          background-color: ${i.grayBg};
        }
      `]},valueContainer:(e,{isMulti:t,hasValue:n,theme:{spacing:{baseUnit:o}}})=>[e,y.iv`
      padding-left: ${t&&n?1:3*o}px;
    `],multiValueLabel:(e,{theme:{spacing:{baseUnit:t}}})=>({...e,paddingLeft:1.2*t,paddingRight:1.2*t}),input:(e,{selectProps:t})=>{var n;return[e,y.iv`
      margin-left: 0;
      vertical-align: middle;
      ${null!=t&&t.isMulti&&null!=t&&null!=(n=t.value)&&n.length?"padding: 0 6px; width: 100%":"padding: 0; flex: 1 1 auto;"};
    `]},menuPortal:e=>({...e,zIndex:1030})},C={background:"none",border:"none",outline:"none",padding:0},{ClearIndicator:P,DropdownIndicator:R,Option:U,Input:z,SelectContainer:M}=l.y,A={SelectContainer:({children:e,...t})=>{const{selectProps:{assistiveText:n}}=t;return(0,y.tZ)("div",null,(0,y.tZ)(M,t,e),n&&(0,y.tZ)("span",{css:e=>({marginLeft:3,fontSize:e.typography.sizes.s,color:e.colors.grayscale.light1})},n))},Option:({children:e,innerProps:t,data:n,...o})=>(0,y.tZ)(U,i()({},o,{data:n,css:null!=n&&n.style?n.style:null,innerProps:t}),e),ClearIndicator:e=>(0,y.tZ)(P,e,(0,y.tZ)("i",{className:"fa"},"×")),DropdownIndicator:e=>(0,y.tZ)(R,e,(0,y.tZ)("i",{className:"fa fa-caret-"+(e.selectProps.menuIsOpen?"up":"down")})),Input:e=>{const{getStyles:t}=e;return(0,y.tZ)(z,i()({},e,{css:t("input",e),autoComplete:"chrome-off",inputStyle:C}))}},D={valueContainer:(e,{getValue:t,theme:{spacing:{baseUnit:n}},isMulti:o})=>({...e,paddingLeft:t().length>0?1:3*n,overflow:o&&t().length>0?"visible":"hidden"}),singleValue:(e,t)=>{const{getStyles:n}=t;return{...n("multiValue",t),".metric-option":n("multiValueLabel",t)}}};var L=n(55083);function B(e){const t=(0,d.JN)(e,{withRef:!0}),n=A;function o(o){let r;const{selectRef:s,labelKey:g="label",valueKey:h="value",themeConfig:m,stylesConfig:b={},optionRenderer:f,valueRenderer:x,valueRenderedAsLabel:v,onPaste:w,multi:Z=!1,clearable:$,sortable:k=!0,forceOverflow:E,className:C=I,classNamePrefix:P=N,options:R,value:U,components:z,isMulti:M,isClearable:A,minMenuHeight:B=100,maxMenuHeight:K=220,filterOption:H,ignoreAccents:F=!1,getOptionValue:j=(e=>"string"==typeof e?e:e[h]),getOptionLabel:V=(e=>"string"==typeof e?e:e[g]||e[h]),formatOptionLabel:W=((e,{context:t})=>"value"===t?x?x(e):V(e):f?f(e):V(e)),...G}=o,Y=(0,L.dG)(U,R||[],h),q=void 0===M?Z:M,_=void 0===A?$:A,X=q&&k&&Array.isArray(Y)&&Y.length>1,J=X?t:e,Q={...n,...z};if(X){Q.MultiValue=(ee=Q.MultiValue||l.y.MultiValue,(0,d.W8)((e=>(0,y.tZ)(ee,i()({},e,{innerProps:{onMouseDown:e=>{e.preventDefault(),e.stopPropagation()}}})))));const e={getHelperDimensions:({node:e})=>e.getBoundingClientRect(),axis:"xy",onSortEnd:({oldIndex:e,newIndex:t})=>{const n=p()(Y,e,t);G.onChange&&G.onChange(n,{action:"set-value"})},distance:4};Object.assign(G,e)}var ee;if((void 0===v?q:v)&&!b.valueContainer&&Object.assign(b,D),w){const e=Q.Input||l.y.Input;Q.Input=t=>(0,y.tZ)(e,i()({},t,{onPaste:w}))}e===T&&(G.getNewOptionData=(e,t)=>({label:t||e,[h]:e,isNew:!0})),E&&Object.assign(G,{closeMenuOnScroll:e=>{var t,n,o;const i=null==(t=r)||null==(n=t.state)?void 0:n.menuIsOpen,a=e.target;return i&&a&&!(null!=(o=a.classList)&&o.contains("Select__menu-list"))},menuPosition:"fixed"});const te=(0,u.Fg)();return(0,y.tZ)(J,i()({ref:e=>{r=X&&e&&"refs"in e?e.refs.wrappedInstance:e,"function"==typeof s?s(r):s&&"current"in s&&(s.current=r)},className:C,classNamePrefix:P,isMulti:q,isClearable:_,options:R,value:Y,minMenuHeight:B,maxMenuHeight:K,filterOption:void 0!==H?H:(0,c.c)({ignoreAccents:F}),styles:{...S,...b},theme:e=>a()(e,(e=>({borderRadius:e.borderRadius,zIndex:11,colors:O(e),spacing:{baseUnit:3,menuGutter:0,controlHeight:34,lineHeight:19,fontSize:14,minWidth:"6.5em"},weights:e.typography.weights}))(te),m),formatOptionLabel:W,getOptionLabel:V,getOptionValue:j,components:Q},G))}return s.memo(o)}const K=B(k),H=B(T),F=B(E),j=K;n(75017);var V=n(64749);const W=(0,u.iK)((e=>(0,y.tZ)(V.Z,i()({getPopupContainer:e=>e.parentNode},e))))`
  display: block;
`,G=(0,u.iK)(V.Z)`
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
`;Object.assign(W,{Option:V.Z.Option}),Object.assign(G,{Option:V.Z.Option})},71989:(e,t,n)=>{n.d(t,{Xv:()=>h,cl:()=>b,ZP:()=>f});var o=n(5872),i=n.n(o),r=(n(67294),n(11965)),a=n(51995),s=n(1350),l=n(70163);const c=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...o})=>(0,r.tZ)(s.default,i()({animated:e},o,{css:e=>r.iv`
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
      ${t&&r.iv`
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
    `})),d=(0,a.iK)(s.default.TabPane)``,g=Object.assign(c,{TabPane:d}),p=(0,a.iK)(c)`
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

  ${({fullWidth:e})=>e&&r.iv`
      .ant-tabs-nav-list {
        width: 100%;
      }
    `}
`,u=(0,a.iK)(l.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(p,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,r.tZ)(u,{role:"button",tabIndex:0})};const m=(0,a.iK)(h)`
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
`,b=Object.assign(m,{TabPane:d}),f=g},40637:(e,t,n)=>{n.d(t,{Xv:()=>o.Xv,cl:()=>o.cl,ZP:()=>o.ZP});var o=n(71989)},86057:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(11965),i=(n(67294),n(51995)),r=n(78186),a=n(70163),s=n(58593);const l=function({warningMarkdown:e,size:t}){const n=(0,i.Fg)();return(0,o.tZ)(s.u,{id:"warning-tooltip",title:(0,o.tZ)(r.Z,{source:e})},(0,o.tZ)(a.Z.AlertSolid,{iconColor:n.colors.alert.base,iconSize:t,css:(0,o.iv)({marginRight:2*n.gridUnit},"","")}))}},99543:(e,t,n)=>{n.d(t,{SJ:()=>b,wK:()=>f,gf:()=>y,gP:()=>x,p1:()=>v,_0:()=>w,zd:()=>Z,hU:()=>$,E8:()=>k,JB:()=>T});var o=n(45220),i=n.n(o),r=n(52353),a=n.n(r),s=n(14176),l=n.n(s),c=n(18446),d=n.n(c),g=n(14670),p=n.n(g),u=n(14890),h=n(64417),m=n.n(h);function b(e,t,n){const o={...e[t]},i={...n};return i.id||(i.id=p().generate()),o[i.id]=i,{...e,[t]:o}}function f(e,t,n,o){const i={...e[t]};return i[n.id]={...i[n.id],...o},{...e,[t]:i}}function y(e,t,n,o,i="id"){const r=[];return e[t].forEach((e=>{n[i]===e[i]?r.push({...e,...o}):r.push(e)})),{...e,[t]:r}}function x(e,t,n,o="id"){const i=[];return e[t].forEach((e=>{n[o]!==e[o]&&i.push(e)})),{...e,[t]:i}}function v(e,t){let n;return e.forEach((e=>{e.id===t&&(n=e)})),n}function w(e,t,n,o=!1){const i={...n};i.id||(i.id=p().generate());const r={};return r[t]=o?[i,...e[t]]:[...e[t],i],{...e,...r}}function Z(e,t,n,o=!1){const i=[...n];i.forEach((e=>{e.id||(e.id=p().generate())}));const r={};return r[t]=o?[...i,...e[t]]:[...e[t],...i],{...e,...r}}function $(e=!0,t={}){const{paths:n,config:o}=t,i=u.qC;return e?i(m()(n,o)):i()}function k(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;const{length:n}=e;for(let o=0;o<n;o+=1)if(e[o]!==t[o])return!1;return!0}function T(e,t,n={ignoreUndefined:!1,ignoreNull:!1}){let o=e,r=t;return n.ignoreUndefined&&(o=l()(o,a()),r=l()(r,a())),n.ignoreNull&&(o=l()(o,i()),r=l()(r,i())),d()(o,r)}}}]);