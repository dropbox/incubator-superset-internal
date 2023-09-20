"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5198],{85931:(e,t,a)=>{a.d(t,{m:()=>s});var n=a(5872),r=a.n(n),l=(a(67294),a(73727)),o=a(23525),i=a(11965);const s=e=>{let{to:t,component:a,replace:n,innerRef:s,children:d,...u}=e;return"string"==typeof t&&(0,o.TO)(t)?(0,i.tZ)("a",r()({href:(0,o.en)(t)},u),d):(0,i.tZ)(l.rU,r()({to:t,component:a,replace:n,innerRef:s},u),d)}},60972:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(55867),l=a(34858),o=a(29487),i=a(11965);const s=(0,l.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",u=e=>{let{errorMessage:t,showDbInstallInstructions:a}=e;return(0,i.tZ)(o.Z,{closable:!1,css:e=>(e=>i.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:t,description:a?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("br",null),(0,r.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,r.t)("here")),"."):""})}},49576:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(51995),l=a(70163),o=a(11965);const i=r.iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,r.iK)(l.Z.CheckboxHalf)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  cursor: pointer;
`,d=(0,r.iK)(l.Z.CheckboxOff)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  cursor: pointer;
`,u=(0,r.iK)(l.Z.CheckboxOn)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  cursor: pointer;
`,c=r.iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,p=r.iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,h=(0,n.forwardRef)(((e,t)=>{let{indeterminate:a,id:r,checked:l,onChange:h,title:m="",labelText:g=""}=e;const v=(0,n.useRef)(),b=t||v;return(0,n.useEffect)((()=>{b.current.indeterminate=a}),[b,a]),(0,o.tZ)(n.Fragment,null,(0,o.tZ)(p,null,a&&(0,o.tZ)(s,null),!a&&l&&(0,o.tZ)(u,null),!a&&!l&&(0,o.tZ)(d,null),(0,o.tZ)(c,{name:r,id:r,type:"checkbox",ref:b,checked:l,onChange:h})),(0,o.tZ)(i,{title:m,htmlFor:r},g))}))},29147:(e,t,a)=>{a.d(t,{DG:()=>d,fG:()=>s});var n=a(67294),r=a(27600),l=a(23525),o=a(11965);const i=(0,n.createContext)({hideTitle:!1,hideTab:!1,hideNav:!1,hideChartControls:!1}),s=()=>(0,n.useContext)(i),d=e=>{let{children:t}=e;const a=(0,l.eY)(r.KD.uiConfig)||0,[s]=(0,n.useState)({hideTitle:0!=(1&a),hideTab:0!=(2&a),hideNav:0!=(4&a),hideChartControls:0!=(8&a)});return(0,o.tZ)(i.Provider,{value:s},t)}},1315:(e,t,a)=>{a.d(t,{Us:()=>ot,Gr:()=>it,ZP:()=>ut});var n=a(78718),r=a.n(n),l=a(41609),o=a.n(l),i=a(75049),s=a(51995),d=a(55867),u=a(93185),c=a(67294),p=a(61337),h=a(71262),m=a(4715),g=a(29487),v=a(74069),b=a(35932),y=a(70163);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}const Z={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},x=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function _(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const w={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},C=Object.keys(w);class S extends c.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(Z).forEach((t=>{e.style[t]=Z[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);x.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,r={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(r,e.onReflow.bind(this,r))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,r=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>r&&(n++,e.push(a),r=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const r=this.canvas.lastElementChild;let l=_(r,2);for(;l&&(r.offsetTop>n||r.offsetHeight>l.offsetHeight||r.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=_(r,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:r,trimRight:l,className:o}=a,i=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["component","ellipsis","trimRight","className"]);return c.createElement(n,f({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${o}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(i,C)),t&&l?e.replace(/[\s\uFEFF\xA0]+$/,""):e,c.createElement("wbr",null),t&&c.createElement("span",{className:"LinesEllipsis-ellipsis"},r))}}S.defaultProps=w;const $=S;var k=a(11965);const N=(0,s.iK)(b.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,E=s.iK.div`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  height: ${e=>{let{theme:t}=e;return 18*t.gridUnit}}px;
  margin: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
    height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,U=s.iK.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,T=s.iK.div`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px 0;
  border-radius: 0 0 ${e=>{let{theme:t}=e;return t.borderRadius}}px
    ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,A=(0,s.iK)((e=>{let{icon:t,altText:a,buttonText:n,...r}=e;return(0,k.tZ)(N,r,(0,k.tZ)(E,null,t&&(0,k.tZ)("img",{src:t,alt:a}),!t&&(0,k.tZ)(y.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,k.tZ)(T,null,(0,k.tZ)(U,null,(0,k.tZ)($,{text:n,maxLine:"2",basedOn:"words",trimRight:!0}))))}))`
  text-transform: none;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    box-shadow: 4px 4px 20px ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  }
`;var L,M,O=a(8272),I=a(14114),q=a(87858),P=a(72875),D=a(60972),F=a(34858),R=a(18451),z=a(38703);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(L||(L={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(M||(M={}));var H=a(94184),K=a.n(H),j=a(49576),B=a(43700),J=a(94670);const Q=k.iv`
  margin-bottom: 0;
`,V=s.iK.header`
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  line-height: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;

  .helper-top {
    padding-bottom: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${e=>{let{theme:t}=e;return 4.25*t.gridUnit}}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0;
  }

  h4 {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    margin: 0;
    padding: 0;
    line-height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
  }

  .select-db {
    padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    }
  }
`,G=k.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,Y=k.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,X=e=>k.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,W=e=>k.iv`
  padding-left: ${2*e.gridUnit}px;
`,ee=e=>k.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,te=e=>k.iv`
  .ant-select-dropdown {
    height: ${40*e.gridUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,ae=e=>k.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,ne=s.iK.div`
  ${e=>{let{theme:t}=e;return k.iv`
    margin: 0 ${4*t.gridUnit}px -${4*t.gridUnit}px;
  `}}
`,re=e=>k.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    text-align: left;
  }
`,le=e=>k.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,oe=e=>k.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,ie=s.iK.div`
  ${e=>{let{theme:t}=e;return k.iv`
    margin-bottom: ${6*t.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*t.gridUnit}px;
    }

    .control-label {
      color: ${t.colors.grayscale.dark1};
      font-size: ${t.typography.sizes.s}px;
      margin-bottom: ${2*t.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*t.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*t.gridUnit}px;
        margin-top: ${.75*t.gridUnit}px;
        font-family: ${t.typography.families.sansSerif};
        font-size: ${t.typography.sizes.m}px;
      }

      i {
        margin: 0 ${t.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${t.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*t.gridUnit}px ${2*t.gridUnit}px;
      border-style: none;
      border: 1px solid ${t.colors.grayscale.light2};
      border-radius: ${t.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*t.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${108}px;
        padding-right: ${5*t.gridUnit}px;
      }
    }
  `}}
`,se=(0,s.iK)(J.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,de=s.iK.div`
  padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  .input-container {
    padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    padding-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,ue=s.iK.div`
  padding: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  margin-top: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`,ce=e=>k.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,pe=e=>k.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,he=s.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0px;
  }
`,me=(s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
`,s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  text-transform: uppercase;
`),ge=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,ve=s.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
    font-size: 11px;
    margin: 0 5px ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .label-paste {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    resize: vertical;
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    &::placeholder {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    }
  }

  .input-container {
    .input-upload {
      display: none !important;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${e=>{let{theme:t}=e;return 32*t.gridUnit}}px
    }
  }`,be=s.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${e=>{let{theme:t}=e;return 2.5*t.gridUnit}}px;
  }

  .available {
    margin: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    .available-label {
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
      margin: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  }

  .control-label {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }
`,ye=(0,s.iK)(b.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,fe=s.iK.div`
  position: sticky;
  top: 0;
  z-index: ${e=>{let{theme:t}=e;return t.zIndex.max}};
  background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
  height: auto;
`,Ze=s.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
    margin: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,xe=s.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,_e=e=>{var t,a,n;let{db:r,onInputChange:l,onTextChange:o,onEditorChange:i,onExtraInputChange:s,onExtraEditorChange:u,extraExtension:c}=e;const p=!(null==r||!r.expose_in_sqllab),h=!!(null!=r&&r.allow_ctas||null!=r&&r.allow_cvas),m=null==r||null==(t=r.engine_information)?void 0:t.supports_file_upload,g=JSON.parse((null==r?void 0:r.extra)||"{}",((e,t)=>"engine_params"===e&&"object"==typeof t?JSON.stringify(t):t)),v=null==c?void 0:c.component,b=null==c?void 0:c.logo,y=null==c?void 0:c.description;return(0,k.tZ)(B.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>k.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("SQL Lab")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Adjust how this database will interact with SQL Lab."))),key:"1"},(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==r||!r.expose_in_sqllab),onChange:l,labelText:(0,d.t)("Expose database in SQL Lab")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Allow this database to be queried in SQL Lab")})),(0,k.tZ)(de,{className:K()("expandable",{open:p,"ctas-open":h})},(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==r||!r.allow_ctas),onChange:l,labelText:(0,d.t)("Allow CREATE TABLE AS")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Allow creation of new tables based on queries")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==r||!r.allow_cvas),onChange:l,labelText:(0,d.t)("Allow CREATE VIEW AS")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Allow creation of new views based on queries")})),(0,k.tZ)(ie,{className:K()("expandable",{open:h})},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("CTAS & CVAS SCHEMA")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"force_ctas_schema",placeholder:(0,d.t)("Create or select schema..."),onChange:l,value:(null==r?void 0:r.force_ctas_schema)||""})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==r||!r.allow_dml),onChange:l,labelText:(0,d.t)("Allow DML")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==g||!g.cost_estimate_enabled),onChange:s,labelText:(0,d.t)("Enable query cost estimation")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==g||!g.allows_virtual_table_explore),onChange:s,labelText:(0,d.t)("Allow this database to be explored")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==g||!g.disable_data_preview),onChange:s,labelText:(0,d.t)("Disable SQL Lab data preview queries")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})))))),(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Performance")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Adjust performance settings of this database."))),key:"2"},(0,k.tZ)(ie,{className:"mb-8"},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Chart cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"cache_timeout",value:(null==r?void 0:r.cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined."))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Schema cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==g||null==(a=g.metadata_cache_timeout)?void 0:a.schema_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:s})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Table cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==g||null==(n=g.metadata_cache_timeout)?void 0:n.table_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:s})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,k.tZ)(ie,{css:(0,k.iv)({no_margin_bottom:Q},"","")},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==r||!r.allow_run_async),onChange:l,labelText:(0,d.t)("Asynchronous query execution")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,k.tZ)(ie,{css:(0,k.iv)({no_margin_bottom:Q},"","")},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==g||!g.cancel_query_on_windows_unload),onChange:s,labelText:(0,d.t)("Cancel query on window unload event")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Security")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Add extra connection information."))),key:"3"},(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Secure extra")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(se,{name:"masked_encrypted_extra",value:(null==r?void 0:r.masked_encrypted_extra)||"",placeholder:(0,d.t)("Secure extra"),onChange:e=>i({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px"})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Root certificate")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("textarea",{name:"server_cert",value:(null==r?void 0:r.server_cert)||"",placeholder:(0,d.t)("Enter CA_BUNDLE"),onChange:o})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,k.tZ)(ie,{css:m?{}:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==r||!r.impersonate_user),onChange:l,labelText:(0,d.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),m&&(0,k.tZ)(ie,{css:null!=r&&r.allow_file_upload?{}:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==r||!r.allow_file_upload),onChange:l,labelText:(0,d.t)("Allow file uploads to database")}))),m&&!(null==r||!r.allow_file_upload)&&(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Schemas allowed for File upload")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==g?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:s})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("A comma-separated list of schemas that files are allowed to upload to.")))),c&&v&&y&&(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,b&&(0,k.tZ)(b,null),(0,k.tZ)("span",{css:e=>({fontSize:e.typography.sizes.l,fontWeight:e.typography.weights.bold})},null==c?void 0:c.title),(0,k.tZ)("p",{className:"helper"},(0,k.tZ)(y,null))),key:null==c?void 0:c.title,collapsible:null!=c.enabled&&c.enabled()?"icon":"disabled"},(0,k.tZ)(ie,{css:Q},(0,k.tZ)(v,{db:r,onEdit:c.onEdit}))),(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Other")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Additional settings."))),key:"4"},(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Metadata Parameters")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(se,{name:"metadata_params",placeholder:(0,d.t)("Metadata Parameters"),onChange:e=>u({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.metadata_params)||{}).length?null==g?void 0:g.metadata_params:""})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Engine Parameters")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(se,{name:"engine_params",placeholder:(0,d.t)("Engine Parameters"),onChange:e=>u({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.engine_params)||{}).length?null==g?void 0:g.engine_params:""})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Version")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"version",placeholder:(0,d.t)("Version number"),onChange:s,value:(null==g?void 0:g.version)||""})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Specify the database version. This should be used with Presto in order to enable query cost estimation.")))))};var we=a(8911);const Ce=e=>{let t,a,{db:n,onInputChange:r,testConnection:l,conf:o,testInProgress:i=!1,children:s}=e;var u,p;return we.Z?(t=null==(u=we.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:u.SQLALCHEMY_DOCS_URL,a=null==(p=we.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:p.SQLALCHEMY_DISPLAY_TEXT):(t="https://docs.sqlalchemy.org/en/13/core/engines.html",a="SQLAlchemy docs"),(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Display Name"),(0,k.tZ)("span",{className:"required"},"*")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"database_name",value:(null==n?void 0:n.database_name)||"",placeholder:(0,d.t)("Name your database"),onChange:r})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Pick a name to help you identify this database."))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("SQLAlchemy URI"),(0,k.tZ)("span",{className:"required"},"*")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==n?void 0:n.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(0,d.t)("dialect+driver://username:password@host:port/database"),onChange:r})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Refer to the")," ",(0,k.tZ)("a",{href:t||(null==o?void 0:o.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},a||(null==o?void 0:o.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,d.t)("for more information on how to structure your URI."))),s,(0,k.tZ)(b.Z,{onClick:l,loading:i,cta:!0,buttonStyle:"link",css:e=>(e=>k.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,d.t)("Test connection")))};var Se=a(78580),$e=a.n(Se),ke=a(49238);const Ne={account:{helpText:(0,d.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,d.t)("e.g. xy12345.us-east-2.aws")},warehouse:{placeholder:(0,d.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{placeholder:(0,d.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},Ee=e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,field:i}=e;return(0,k.tZ)(q.Z,{id:i,name:i,required:a,value:null==o||null==(t=o.parameters)?void 0:t[i],validationMethods:{onBlur:r},errorMessage:null==l?void 0:l[i],placeholder:Ne[i].placeholder,helpText:Ne[i].helpText,label:i,onChange:n.onParametersChange,className:Ne[i].className||i})};var Ue,Te=a(2857);!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(Ue||(Ue={}));const Ae={gsheets:"service_account_info",bigquery:"credentials_info"};var Le={name:"s5xdrg",styles:"display:flex;align-items:center"};const Me=e=>{var t,a,n;let{changeMethods:r,isEditMode:l,db:o,editNewDb:i}=e;const[s,u]=(0,c.useState)(Ue.jsonUpload.valueOf()),[p,h]=(0,c.useState)(null),[g,v]=(0,c.useState)(!0),b="gsheets"===(null==o?void 0:o.engine)?!l&&!g:!l,f=l&&"{}"!==(null==o?void 0:o.masked_encrypted_extra),Z=(null==o?void 0:o.engine)&&Ae[o.engine],x="object"==typeof(null==o||null==(t=o.parameters)?void 0:t[Z])?JSON.stringify(null==o||null==(a=o.parameters)?void 0:a[Z]):null==o||null==(n=o.parameters)?void 0:n[Z];return(0,k.tZ)(ve,null,"gsheets"===(null==o?void 0:o.engine)&&(0,k.tZ)("div",{className:"catalog-type-select"},(0,k.tZ)(Te.Z,{css:e=>(e=>k.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,d.t)("Type of Google Sheets allowed")),(0,k.tZ)(m.IZ,{style:{width:"100%"},defaultValue:f?"false":"true",onChange:e=>v("true"===e)},(0,k.tZ)(m.IZ.Option,{value:"true",key:1},(0,d.t)("Publicly shared sheets only")),(0,k.tZ)(m.IZ.Option,{value:"false",key:2},(0,d.t)("Public and privately shared sheets")))),b&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Te.Z,{required:!0},(0,d.t)("How do you want to enter service account credentials?")),(0,k.tZ)(m.IZ,{defaultValue:s,style:{width:"100%"},onChange:e=>u(e)},(0,k.tZ)(m.IZ.Option,{value:Ue.jsonUpload},(0,d.t)("Upload JSON file")),(0,k.tZ)(m.IZ.Option,{value:Ue.copyPaste},(0,d.t)("Copy and Paste JSON credentials")))),s===Ue.copyPaste||l||i?(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(Te.Z,{required:!0},(0,d.t)("Service Account")),(0,k.tZ)("textarea",{className:"input-form",name:Z,value:x,onChange:r.onParametersChange,placeholder:(0,d.t)("Paste content of service credentials JSON file here")}),(0,k.tZ)("span",{className:"label-paste"},(0,d.t)("Copy and paste the entire service account .json file here"))):b&&(0,k.tZ)("div",{className:"input-container",css:e=>X(e)},(0,k.tZ)("div",{css:Le},(0,k.tZ)(Te.Z,{required:!0},(0,d.t)("Upload Credentials")),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!p&&(0,k.tZ)(m.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,d.t)("Choose File")),p&&(0,k.tZ)("div",{className:"input-upload-current"},p,(0,k.tZ)(y.Z.DeleteFilled,{iconSize:"m",onClick:()=>{h(null),r.onParametersChange({target:{name:Z,value:""}})}})),(0,k.tZ)("input",{id:"selectedFile",accept:".json",className:"input-upload",type:"file",onChange:async e=>{var t,a;let n;e.target.files&&(n=e.target.files[0]),h(null==(t=n)?void 0:t.name),r.onParametersChange({target:{type:null,name:Z,value:await(null==(a=n)?void 0:a.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))},Oe=["host","port","database","username","password","access_token","http_path","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role","ssh"],Ie={host:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o}=e;return(0,k.tZ)(q.Z,{id:"host",name:"host",value:null==o||null==(t=o.parameters)?void 0:t.host,required:a,hasTooltip:!0,tooltipText:(0,d.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.host,placeholder:(0,d.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,d.t)("Host"),onChange:n.onParametersChange})},http_path:e=>{var t,a;let{required:n,changeMethods:r,getValidation:l,validationErrors:o,db:i}=e;const s=JSON.parse((null==i?void 0:i.extra)||"{}");return(0,k.tZ)(q.Z,{id:"http_path",name:"http_path",required:n,value:null==(t=s.engine_params)||null==(a=t.connect_args)?void 0:a.http_path,validationMethods:{onBlur:l},errorMessage:null==o?void 0:o.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:r.onExtraInputChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},port:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o}=e;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(q.Z,{id:"port",name:"port",type:"number",required:a,value:null==o||null==(t=o.parameters)?void 0:t.port,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.port,placeholder:(0,d.t)("e.g. 5432"),className:"form-group-w-50",label:(0,d.t)("Port"),onChange:n.onParametersChange}))},database:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,placeholder:o,db:i}=e;return(0,k.tZ)(q.Z,{id:"database",name:"database",required:a,value:null==i||null==(t=i.parameters)?void 0:t.database,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.database,placeholder:null!=o?o:(0,d.t)("e.g. world_population"),label:(0,d.t)("Database name"),onChange:n.onParametersChange,helpText:(0,d.t)("Copy the name of the database you are trying to connect to.")})},username:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o}=e;return(0,k.tZ)(q.Z,{id:"username",name:"username",required:a,value:null==o||null==(t=o.parameters)?void 0:t.username,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.username,placeholder:(0,d.t)("e.g. Analytics"),label:(0,d.t)("Username"),onChange:n.onParametersChange})},password:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,isEditMode:i}=e;return(0,k.tZ)(q.Z,{id:"password",name:"password",required:a,visibilityToggle:!i,value:null==o||null==(t=o.parameters)?void 0:t.password,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.password,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Password"),onChange:n.onParametersChange})},access_token:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,isEditMode:i}=e;return(0,k.tZ)(q.Z,{id:"access_token",name:"access_token",required:a,visibilityToggle:!i,value:null==o||null==(t=o.parameters)?void 0:t.access_token,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.access_token,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Access token"),onChange:n.onParametersChange})},database_name:e=>{let{changeMethods:t,getValidation:a,validationErrors:n,db:r}=e;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(q.Z,{id:"database_name",name:"database_name",required:!0,value:null==r?void 0:r.database_name,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database_name,placeholder:"",label:(0,d.t)("Display Name"),onChange:t.onChange,helpText:(0,d.t)("Pick a nickname for how the database will display in Superset.")}))},query:e=>{let{required:t,changeMethods:a,getValidation:n,validationErrors:r,db:l}=e;return(0,k.tZ)(q.Z,{id:"query_input",name:"query_input",required:t,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:n},errorMessage:null==r?void 0:r.query,placeholder:(0,d.t)("e.g. param1=value1&param2=value2"),label:(0,d.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,d.t)("Add additional custom parameters")})},encryption:e=>{var t;let{isEditMode:a,changeMethods:n,db:r,sslForced:l}=e;return(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(m.KU,{disabled:l&&!a,checked:(null==r||null==(t=r.parameters)?void 0:t.encryption)||l,onChange:e=>{n.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,k.tZ)("span",{css:W},"SSL"),(0,k.tZ)(O.Z,{tooltip:(0,d.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Me,service_account_info:Me,catalog:e=>{let{required:t,changeMethods:a,getValidation:n,validationErrors:r,db:l}=e;const o=(null==l?void 0:l.catalog)||[],i=r||{};return(0,k.tZ)(Ze,null,(0,k.tZ)("h4",{className:"gsheet-title"},(0,d.t)("Connect Google Sheets as tables to this database")),(0,k.tZ)("div",null,null==o?void 0:o.map(((e,r)=>{var l,s;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Te.Z,{className:"catalog-label",required:!0},(0,d.t)("Google Sheet Name and URL")),(0,k.tZ)("div",{className:"catalog-name"},(0,k.tZ)(q.Z,{className:"catalog-name-input",required:t,validationMethods:{onBlur:n},errorMessage:null==(l=i[r])?void 0:l.name,placeholder:(0,d.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${r}`,name:"name",value:e.target.value}})},value:e.name}),(null==o?void 0:o.length)>1&&(0,k.tZ)(y.Z.CloseOutlined,{css:e=>k.iv`
                    align-self: center;
                    background: ${e.colors.grayscale.light4};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>a.onRemoveTableCatalog(r)})),(0,k.tZ)(q.Z,{className:"catalog-name-url",required:t,validationMethods:{onBlur:n},errorMessage:null==(s=i[r])?void 0:s.url,placeholder:(0,d.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${r}`,name:"value",value:e.target.value}}),value:e.value}))})),(0,k.tZ)(ye,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()}},"+ ",(0,d.t)("Add sheet"))))},warehouse:Ee,role:Ee,account:Ee,ssh:e=>{var t;let{isEditMode:a,changeMethods:n,clearValidationErrors:r,db:l}=e;return(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(m.KU,{disabled:a&&!o()(null==l?void 0:l.ssh_tunnel),checked:null==l||null==(t=l.parameters)?void 0:t.ssh,onChange:e=>{n.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:e}}),r()}}),(0,k.tZ)("span",{css:W},(0,d.t)("SSH Tunnel")),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"}))}},qe=e=>{let{dbModel:{parameters:t},db:a,editNewDb:n,getPlaceholder:r,getValidation:l,isEditMode:o=!1,onAddTableCatalog:i,onChange:s,onExtraInputChange:d,onParametersChange:u,onParametersUploadFileChange:c,onQueryChange:p,onRemoveTableCatalog:h,sslForced:m,validationErrors:g,clearValidationErrors:v}=e;return(0,k.tZ)(ke.l0,null,(0,k.tZ)("div",{css:e=>[ee,oe(e)]},t&&Oe.filter((e=>{var a;return $e()(a=Object.keys(t.properties)).call(a,e)||"database_name"===e})).map((e=>{var b;return Ie[e]({required:null==(b=t.required)?void 0:$e()(b).call(b,e),changeMethods:{onParametersChange:u,onChange:s,onQueryChange:p,onParametersUploadFileChange:c,onAddTableCatalog:i,onRemoveTableCatalog:h,onExtraInputChange:d},validationErrors:g,getValidation:l,clearValidationErrors:v,db:a,key:e,field:e,isEditMode:o,sslForced:m,editNewDb:n,placeholder:r?r(e):void 0})}))))},Pe=(0,F.z)(),De=Pe?Pe.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Fe={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},Re=e=>{let{isLoading:t,isEditMode:a,useSqlAlchemyForm:n,hasConnectedDb:r,db:l,dbName:o,dbModel:i,editNewDb:s,fileList:u}=e;const p=u&&(null==u?void 0:u.length)>0,h=(0,k.tZ)(V,null,(0,k.tZ)(me,null,null==l?void 0:l.backend),(0,k.tZ)(ge,null,o)),m=(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,k.tZ)("h4",null,(0,d.t)("Enter Primary Credentials")),(0,k.tZ)("p",{className:"helper-bottom"},(0,d.t)("Need help? Learn how to connect your database")," ",(0,k.tZ)("a",{href:(null==Pe?void 0:Pe.default)||De,target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),".")),g=(0,k.tZ)(fe,null,(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})),(0,k.tZ)("h4",{className:"step-3-text"},(0,d.t)("Database connected")),(0,k.tZ)("p",{className:"subheader-text"},(0,d.t)("Create a dataset to begin visualizing your data as a chart or go to\n          SQL Lab to query your data.")))),v=(0,k.tZ)(fe,null,(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})),(0,k.tZ)("h4",null,(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:i.name})),(0,k.tZ)("p",{className:"helper-bottom"},(0,d.t)("Need help? Learn more about")," ",(0,k.tZ)("a",{href:(b=null==l?void 0:l.engine,b?Pe?Pe[b]||Pe.default:Fe[b]?Fe[b]:`https://superset.apache.org/docs/databases/${b}`:null),target:"_blank",rel:"noopener noreferrer"},(0,d.t)("connecting to %(dbModelName)s.",{dbModelName:i.name}),"."))));var b;const y=(0,k.tZ)(V,null,(0,k.tZ)("div",{className:"select-db"},(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})),(0,k.tZ)("h4",null,(0,d.t)("Select a database to connect")))),f=(0,k.tZ)(fe,null,(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,k.tZ)("h4",null,(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:i.name})),(0,k.tZ)("p",{className:"helper-bottom"},p?u[0].name:"")));return p?f:t?(0,k.tZ)(c.Fragment,null):a?h:n?m:r&&!s?g:l||s?v:y};var ze=a(87183),He=a(9875),Ke=a(77808),je=a(31097),Be=a(10038),Je=a(55287);const Qe=s.iK.div`
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  label {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    text-transform: uppercase;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }
`,Ve=(0,s.iK)(m.X2)`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,Ge=(0,s.iK)(m.qz.Item)`
  margin-bottom: 0 !important;
`,Ye=(0,s.iK)(Ke.Z.Password)`
  margin: ${e=>{let{theme:t}=e;return`${t.gridUnit}px 0 ${2*t.gridUnit}px`}};
`,Xe=e=>{var t,a,n,r,l,o;let{db:i,onSSHTunnelParametersChange:s,setSSHTunnelLoginMethod:u}=e;const[p,h]=(0,c.useState)(it.password);return(0,k.tZ)(ke.l0,null,(0,k.tZ)(Ve,{gutter:16},(0,k.tZ)(m.JX,{xs:24,md:12},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"server_address",required:!0},(0,d.t)("SSH Host")),(0,k.tZ)(He.II,{name:"server_address",type:"text",placeholder:(0,d.t)("e.g. 127.0.0.1"),value:(null==i||null==(t=i.ssh_tunnel)?void 0:t.server_address)||"",onChange:s}))),(0,k.tZ)(m.JX,{xs:24,md:12},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"server_port",required:!0},(0,d.t)("SSH Port")),(0,k.tZ)(He.II,{name:"server_port",type:"text",placeholder:(0,d.t)("22"),value:(null==i||null==(a=i.ssh_tunnel)?void 0:a.server_port)||"",onChange:s})))),(0,k.tZ)(Ve,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"username",required:!0},(0,d.t)("Username")),(0,k.tZ)(He.II,{name:"username",type:"text",placeholder:(0,d.t)("e.g. Analytics"),value:(null==i||null==(n=i.ssh_tunnel)?void 0:n.username)||"",onChange:s})))),(0,k.tZ)(Ve,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"use_password",required:!0},(0,d.t)("Login with")),(0,k.tZ)(Ge,{name:"use_password",initialValue:p},(0,k.tZ)(ze.Y.Group,{onChange:e=>{let{target:{value:t}}=e;h(t),u(t)}},(0,k.tZ)(ze.Y,{value:it.password},(0,d.t)("Password")),(0,k.tZ)(ze.Y,{value:it.privateKey},(0,d.t)("Private Key & Password"))))))),p===it.password&&(0,k.tZ)(Ve,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"password",required:!0},(0,d.t)("SSH Password")),(0,k.tZ)(Ye,{name:"password",placeholder:(0,d.t)("e.g. ********"),value:(null==i||null==(r=i.ssh_tunnel)?void 0:r.password)||"",onChange:s,iconRender:e=>e?(0,k.tZ)(je.Z,{title:"Hide password."},(0,k.tZ)(Be.Z,null)):(0,k.tZ)(je.Z,{title:"Show password."},(0,k.tZ)(Je.Z,null)),role:"textbox"})))),p===it.privateKey&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Ve,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"private_key",required:!0},(0,d.t)("Private Key")),(0,k.tZ)(He.Kx,{name:"private_key",placeholder:(0,d.t)("Paste Private Key here"),value:(null==i||null==(l=i.ssh_tunnel)?void 0:l.private_key)||"",onChange:s,rows:4})))),(0,k.tZ)(Ve,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Qe,null,(0,k.tZ)(ke.lX,{htmlFor:"private_key_password",required:!0},(0,d.t)("Private Key Password")),(0,k.tZ)(Ye,{name:"private_key_password",placeholder:(0,d.t)("e.g. ********"),value:(null==i||null==(o=i.ssh_tunnel)?void 0:o.private_key_password)||"",onChange:s,iconRender:e=>e?(0,k.tZ)(je.Z,{title:"Hide password."},(0,k.tZ)(Be.Z,null)):(0,k.tZ)(je.Z,{title:"Show password."},(0,k.tZ)(Je.Z,null)),role:"textbox"}))))))},We=e=>{let{isEditMode:t,dbFetched:a,useSSHTunneling:n,setUseSSHTunneling:r,setDB:l,isSSHTunneling:i}=e;return i?(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(m.KU,{disabled:t&&!o()(null==a?void 0:a.ssh_tunnel),checked:n,onChange:e=>{r(e),e||l({type:ot.removeSSHTunnelConfig})}}),(0,k.tZ)("span",{css:W},(0,d.t)("SSH Tunnel")),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"})):null},et=(0,i.I)(),tt=JSON.stringify({allows_virtual_table_explore:!0}),at={[M.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},nt=(0,s.iK)(h.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,rt=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    margin: ${8*t.gridUnit}px ${4*t.gridUnit}px;\n  `}};
`,lt=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: 0px ${4*t.gridUnit}px;\n  `}};
`;var ot,it;!function(e){e[e.addTableCatalogSheet=0]="addTableCatalogSheet",e[e.configMethodChange=1]="configMethodChange",e[e.dbSelected=2]="dbSelected",e[e.editorChange=3]="editorChange",e[e.extraEditorChange=4]="extraEditorChange",e[e.extraInputChange=5]="extraInputChange",e[e.fetched=6]="fetched",e[e.inputChange=7]="inputChange",e[e.parametersChange=8]="parametersChange",e[e.queryChange=9]="queryChange",e[e.removeTableCatalogSheet=10]="removeTableCatalogSheet",e[e.reset=11]="reset",e[e.textChange=12]="textChange",e[e.parametersSSHTunnelChange=13]="parametersSSHTunnelChange",e[e.setSSHTunnelLoginMethod=14]="setSSHTunnelLoginMethod",e[e.removeSSHTunnelConfig=15]="removeSSHTunnelConfig"}(ot||(ot={})),function(e){e[e.password=0]="password",e[e.privateKey=1]="privateKey"}(it||(it={}));const st=s.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  margin-left: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
`;function dt(e,t){var a,n,l,o;const i={...e||{}};let s,d,u={},c="";const p=JSON.parse(i.extra||"{}");switch(t.type){case ot.extraEditorChange:try{d=JSON.parse(t.payload.json||"{}")}catch(e){d=t.payload.json}return{...i,extra:JSON.stringify({...p,[t.payload.name]:d})};case ot.extraInputChange:return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra:JSON.stringify({...p,metadata_cache_timeout:{...null==p?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}})}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra:JSON.stringify({...p,schemas_allowed_for_file_upload:(t.payload.value||"").split(",").filter((e=>""!==e))})}:"http_path"===t.payload.name?{...i,extra:JSON.stringify({...p,engine_params:{connect_args:{[t.payload.name]:null==(h=t.payload.value)?void 0:h.trim()}}})}:{...i,extra:JSON.stringify({...p,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value})};var h;case ot.inputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case ot.parametersChange:if(null!=(a=t.payload.type)&&a.startsWith("catalog")&&void 0!==i.catalog){var m;const e=[...i.catalog],a=null==(m=t.payload.type)?void 0:m.split("-")[1],n=e[a]||{};return n[t.payload.name]=t.payload.value,e.splice(parseInt(a,10),1,n),s=e.reduce(((e,t)=>{const a={...e};return a[t.name]=t.value,a}),{}),{...i,catalog:e,parameters:{...i.parameters,catalog:s}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case ot.parametersSSHTunnelChange:return{...i,ssh_tunnel:{...i.ssh_tunnel,[t.payload.name]:t.payload.value}};case ot.setSSHTunnelLoginMethod:{let e={};var g,v,b;return null!=i&&i.ssh_tunnel&&(e=r()(i.ssh_tunnel,["id","server_address","server_port","username"])),t.payload.login_method===it.privateKey?{...i,ssh_tunnel:{private_key:null==i||null==(g=i.ssh_tunnel)?void 0:g.private_key,private_key_password:null==i||null==(v=i.ssh_tunnel)?void 0:v.private_key_password,...e}}:t.payload.login_method===it.password?{...i,ssh_tunnel:{password:null==i||null==(b=i.ssh_tunnel)?void 0:b.password,...e}}:{...i}}case ot.removeSSHTunnelConfig:return{...i,ssh_tunnel:void 0};case ot.addTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case ot.removeTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case ot.editorChange:return{...i,[t.payload.name]:t.payload.json};case ot.queryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case ot.textChange:return{...i,[t.payload.name]:t.payload.value};case ot.fetched:if(u=(null==(l=t.payload)||null==(o=l.parameters)?void 0:o.query)||{},c=Object.entries(u).map((e=>{let[t,a]=e;return`${t}=${a}`})).join("&"),t.payload.masked_encrypted_extra&&t.payload.configuration_method===L.DYNAMIC_FORM){var y;const e=null==(y={...JSON.parse(t.payload.extra||"{}")}.engine_params)?void 0:y.catalog,a=Object.entries(e||{}).map((e=>{let[t,a]=e;return{name:t,value:a}}));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,catalog:a,parameters:{...t.payload.parameters||i.parameters,catalog:e},query_input:c}}return{...t.payload,masked_encrypted_extra:t.payload.masked_encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,parameters:t.payload.parameters||i.parameters,ssh_tunnel:t.payload.ssh_tunnel||i.ssh_tunnel,query_input:c};case ot.dbSelected:return{...t.payload,extra:tt,expose_in_sqllab:!0};case ot.configMethodChange:return{...t.payload};case ot.reset:default:return null}}const ut=(0,I.ZP)((e=>{var t,a,n,r,l;let{addDangerToast:i,addSuccessToast:s,onDatabaseAdd:y,onHide:f,show:Z,databaseId:x,dbEngine:_,history:w}=e;const[C,S]=(0,c.useReducer)(dt,null),{state:{loading:$,resource:N,error:E},fetchResource:U,createResource:T,updateResource:I,clearError:H}=(0,F.LE)("database",(0,d.t)("database"),i,"connection"),[K,j]=(0,c.useState)("1"),[B,J]=(0,F.cb)(),[Q,V,W]=(0,F.h1)(),[oe,ie]=(0,c.useState)(!1),[se,de]=(0,c.useState)(!1),[me,ge]=(0,c.useState)(""),[ve,Ze]=(0,c.useState)(!1),[we,Se]=(0,c.useState)(!1),[$e,ke]=(0,c.useState)(!1),[Ne,Ee]=(0,c.useState)({}),[Ue,Te]=(0,c.useState)({}),[Ae,Le]=(0,c.useState)({}),[Me,Oe]=(0,c.useState)({}),[Ie,Pe]=(0,c.useState)(!1),[Fe,ze]=(0,c.useState)([]),[He,Ke]=(0,c.useState)(!1),[je,Be]=(0,c.useState)(),[Je,Qe]=(0,c.useState)([]),[Ve,Ge]=(0,c.useState)([]),[Ye,tt]=(0,c.useState)([]),[it,ut]=(0,c.useState)([]),[ct,pt]=(0,c.useState)({}),ht=null!=(t=et.get("ssh_tunnel.form.switch"))?t:We,[mt,gt]=(0,c.useState)(!1);let vt=et.get("databaseconnection.extraOption");vt&&(vt={...vt,onEdit:e=>{pt({...ct,...e})}});const bt=(0,R.c)(),yt=(0,F.rM)(),ft=(0,F.jb)(),Zt=!!x,xt=null==B||null==(a=B.databases)||null==(n=a.find((e=>e.backend===(null==C?void 0:C.engine)||e.engine===(null==C?void 0:C.engine))))||null==(r=n.engine_information)?void 0:r.disable_ssh_tunneling,_t=(0,u.cr)(u.TT.SSH_TUNNELING)&&!xt,wt=ft||!(null==C||!C.engine||!at[C.engine]),Ct=(null==C?void 0:C.configuration_method)===L.SQLALCHEMY_URI,St=Zt||Ct,$t=Q||E,kt=(null==B||null==(l=B.databases)?void 0:l.find((e=>e.engine===(Zt?null==C?void 0:C.backend:null==C?void 0:C.engine))))||{},Nt=e=>{if("database"===e)return(0,d.t)("e.g. world_population")},Et=()=>{S({type:ot.reset}),ie(!1),W(null),H(),Ze(!1),ze([]),Ke(!1),Be(""),Qe([]),Ge([]),tt([]),ut([]),Ee({}),Te({}),Le({}),Oe({}),Pe(!1),gt(!1),f()},Ut=e=>{o()(w)?window.location.href=e:null==w||w.push(e)},{state:{alreadyExists:Tt,passwordsNeeded:At,sshPasswordNeeded:Lt,sshPrivateKeyNeeded:Mt,sshPrivateKeyPasswordNeeded:Ot,loading:It,failed:qt},importResource:Pt}=(0,F.PW)("database",(0,d.t)("database"),(e=>{Be(e)})),Dt=(e,t)=>{S({type:e,payload:t})},Ft=async()=>{var e,t;let a;if(null==(e=vt)||e.onSave(ct,C).then((e=>{let{error:t}=e;t&&(a=t,i(t))})),a)return void Se(!1);const n={...C||{}};if(n.configuration_method===L.DYNAMIC_FORM){var r,l;if(null!=n&&null!=(r=n.parameters)&&r.catalog&&(n.extra=JSON.stringify({...JSON.parse(n.extra||"{}"),engine_params:{catalog:n.parameters.catalog}})),null==n||!n.ssh_tunnel){Se(!0);const e=await V(n,!0);if(Q&&!o()(Q)||e)return void Se(!1);Se(!1)}const e=Zt?null==(l=n.parameters_schema)?void 0:l.properties:null==kt?void 0:kt.parameters.properties,t=JSON.parse(n.masked_encrypted_extra||"{}");Object.keys(e||{}).forEach((a=>{var r,l,o,i;e[a]["x-encrypted-extra"]&&null!=(r=n.parameters)&&r[a]&&("object"==typeof(null==(l=n.parameters)?void 0:l[a])?(t[a]=null==(o=n.parameters)?void 0:o[a],n.parameters[a]=JSON.stringify(n.parameters[a])):t[a]=JSON.parse((null==(i=n.parameters)?void 0:i[a])||"{}"))})),n.masked_encrypted_extra=JSON.stringify(t),n.engine===M.GSheet&&(n.impersonate_user=!0)}if(null!=n&&null!=(t=n.parameters)&&t.catalog&&(n.extra=JSON.stringify({...JSON.parse(n.extra||"{}"),engine_params:{catalog:n.parameters.catalog}})),Se(!0),null!=C&&C.id){if(await I(C.id,n,n.configuration_method===L.DYNAMIC_FORM)){var u;if(y&&y(),null==(u=vt)||u.onSave(ct,C).then((e=>{let{error:t}=e;t&&(a=t,i(t))})),a)return void Se(!1);ve||(Et(),s((0,d.t)("Database settings updated")))}}else if(C){if(await T(n,n.configuration_method===L.DYNAMIC_FORM)){var c;if(ie(!0),y&&y(),null==(c=vt)||c.onSave(ct,C).then((e=>{let{error:t}=e;t&&(a=t,i(t))})),a)return void Se(!1);St&&(Et(),s((0,d.t)("Database connected")))}}else{if(Ke(!0),!(Fe[0].originFileObj instanceof File))return;await Pt(Fe[0].originFileObj,Ne,Ue,Ae,Me,Ie)&&(y&&y(),Et(),s((0,d.t)("Database connected")))}de(!0),Ze(!1),Se(!1)},Rt=e=>{if("Other"===e)S({type:ot.dbSelected,payload:{database_name:e,configuration_method:L.SQLALCHEMY_URI,engine:void 0,engine_information:{supports_file_upload:!0}}});else{const t=null==B?void 0:B.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n,engine_information:r,default_driver:l}=t,o=void 0!==n;S({type:ot.dbSelected,payload:{database_name:e,engine:a,configuration_method:o?L.DYNAMIC_FORM:L.SQLALCHEMY_URI,engine_information:r,driver:l}}),a===M.GSheet&&S({type:ot.addTableCatalogSheet})}},zt=()=>{N&&U(N.id),de(!1),Ze(!0)},Ht=()=>{ve&&ie(!1),He&&Ke(!1),qt&&(Ke(!1),Be(""),Qe([]),Ge([]),tt([]),ut([]),Ee({}),Te({}),Le({}),Oe({})),S({type:ot.reset}),ze([])},Kt=()=>C?!oe||ve?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"back",onClick:Ht},(0,d.t)("Back")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:Ft,loading:we},(0,d.t)("Connect"))):(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"back",onClick:zt},(0,d.t)("Back")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:Ft,loading:we},(0,d.t)("Finish"))):He?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"back",onClick:Ht},(0,d.t)("Back")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:Ft,disabled:!!(It||Tt.length&&!Ie||At.length&&"{}"===JSON.stringify(Ne)||Lt.length&&"{}"===JSON.stringify(Ue)||Mt.length&&"{}"===JSON.stringify(Ae)||Ot.length&&"{}"===JSON.stringify(Me)),loading:we},(0,d.t)("Connect"))):(0,k.tZ)(c.Fragment,null),jt=(0,c.useRef)(!0);(0,c.useEffect)((()=>{jt.current?jt.current=!1:It||Tt.length||At.length||Lt.length||Mt.length||Ot.length||we||qt||(Et(),s((0,d.t)("Database connected")))}),[Tt,At,It,qt,Lt,Mt,Ot]),(0,c.useEffect)((()=>{Z&&(j("1"),Se(!0),J()),x&&Z&&Zt&&x&&($||U(x).catch((e=>i((0,d.t)("Sorry there was an error fetching database information: %s",e.message)))))}),[Z,x]),(0,c.useEffect)((()=>{N&&(S({type:ot.fetched,payload:N}),ge(N.database_name))}),[N]),(0,c.useEffect)((()=>{we&&Se(!1),B&&_&&Rt(_)}),[B]),(0,c.useEffect)((()=>{He&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[He]),(0,c.useEffect)((()=>{Qe([...At])}),[At]),(0,c.useEffect)((()=>{Ge([...Lt])}),[Lt]),(0,c.useEffect)((()=>{tt([...Mt])}),[Mt]),(0,c.useEffect)((()=>{ut([...Ot])}),[Ot]),(0,c.useEffect)((()=>{C&&_t&&gt(!o()(null==C?void 0:C.ssh_tunnel))}),[C,_t]);const Bt=()=>je?(0,k.tZ)(ne,null,(0,k.tZ)(D.Z,{errorMessage:je,showDbInstallInstructions:Je.length>0})):null,Jt=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";Pe(n.toUpperCase()===(0,d.t)("OVERWRITE"))},Qt=()=>{let e=[];var t;return o()(E)?o()(Q)||"GENERIC_DB_ENGINE_ERROR"!==(null==Q?void 0:Q.error_type)||(e=[(null==Q?void 0:Q.description)||(null==Q?void 0:Q.message)]):e="object"==typeof E?Object.values(E):"string"==typeof E?[E]:[],e.length?(0,k.tZ)(rt,null,(0,k.tZ)(P.Z,{title:(0,d.t)("Database Creation Error"),description:(0,d.t)('We are unable to connect to your database. Click "See more" for database-provided information that may help troubleshoot the issue.'),subtitle:(null==(t=e)?void 0:t[0])||(null==Q?void 0:Q.description),copyText:null==Q?void 0:Q.description})):(0,k.tZ)(c.Fragment,null)},Vt=()=>{Se(!0),U(null==N?void 0:N.id).then((e=>{(0,p.LS)(p.dR.db,e)}))},Gt=()=>(0,k.tZ)(Xe,{db:C,onSSHTunnelParametersChange:e=>{let{target:t}=e;return Dt(ot.parametersSSHTunnelChange,{type:t.type,name:t.name,value:t.value})},setSSHTunnelLoginMethod:e=>S({type:ot.setSSHTunnelLoginMethod,payload:{login_method:e}})}),Yt=()=>{var e;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(qe,{isEditMode:Zt,db:C,sslForced:!1,dbModel:kt,onAddTableCatalog:()=>{S({type:ot.addTableCatalogSheet})},onQueryChange:e=>{let{target:t}=e;return Dt(ot.queryChange,{name:t.name,value:t.value})},onExtraInputChange:e=>{let{target:t}=e;return Dt(ot.extraInputChange,{name:t.name,value:t.value})},onRemoveTableCatalog:e=>{S({type:ot.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:e=>{let{target:t}=e;return Dt(ot.parametersChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onChange:e=>{let{target:t}=e;return Dt(ot.textChange,{name:t.name,value:t.value})},getValidation:()=>V(C),validationErrors:Q,getPlaceholder:Nt,clearValidationErrors:()=>W(null)}),(null==C||null==(e=C.parameters)?void 0:e.ssh)&&(0,k.tZ)(lt,null,Gt()))};if(Fe.length>0&&(Tt.length||Je.length||Ve.length||Ye.length||it.length))return(0,k.tZ)(v.Z,{css:e=>[Y,te(e),re(e),le(e)],name:"database",onHandledPrimaryAction:Ft,onHide:Et,primaryButtonName:(0,d.t)("Connect"),width:"500px",centered:!0,show:Z,title:(0,k.tZ)("h4",null,(0,d.t)("Connect a database")),footer:Kt()},(0,k.tZ)(Re,{isLoading:we,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:oe,db:C,dbName:me,dbModel:kt,fileList:Fe}),Je.length||Ve.length||Ye.length||it.length?[...new Set([...Je,...Ve,...Ye,...it])].map((e=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>ae(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,d.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(null==Je?void 0:Je.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"password_needed",name:"password_needed",required:!0,value:Ne[e],onChange:t=>Ee({...Ne,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.password_needed,label:(0,d.t)("%s PASSWORD",e.slice(10)),css:ee}),(null==Ve?void 0:Ve.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:Ue[e],onChange:t=>Te({...Ue,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.ssh_tunnel_password_needed,label:(0,d.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:ee}),(null==Ye?void 0:Ye.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",required:!0,value:Ae[e],onChange:t=>Le({...Ae,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.ssh_tunnel_private_key_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:ee}),(null==it?void 0:it.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",required:!0,value:Me[e],onChange:t=>Oe({...Me,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.ssh_tunnel_private_key_password_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:ee})))):null,Tt.length?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>(e=>k.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"warning",showIcon:!0,message:"",description:(0,d.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,k.tZ)(q.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.confirm_overwrite,label:(0,d.t)('Type "%s" to confirm',(0,d.t)("OVERWRITE")),onChange:Jt,css:ee})):null,Bt());const Xt=Zt?(e=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"close",onClick:Et},(0,d.t)("Close")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:Ft,disabled:null==e?void 0:e.is_managed_externally,loading:we,tooltip:null!=e&&e.is_managed_externally?(0,d.t)("This database is managed externally, and can't be edited in Superset"):""},(0,d.t)("Finish"))))(C):Kt();return St?(0,k.tZ)(v.Z,{css:e=>[G,Y,te(e),re(e),le(e)],name:"database",onHandledPrimaryAction:Ft,onHide:Et,primaryButtonName:Zt?(0,d.t)("Save"):(0,d.t)("Connect"),width:"500px",centered:!0,show:Z,title:(0,k.tZ)("h4",null,Zt?(0,d.t)("Edit database"):(0,d.t)("Connect a database")),footer:Xt},(0,k.tZ)(fe,null,(0,k.tZ)(he,null,(0,k.tZ)(Re,{isLoading:we,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:oe,db:C,dbName:me,dbModel:kt}))),(0,k.tZ)(nt,{defaultActiveKey:"1",activeKey:K,onTabClick:e=>j(e),animated:{inkBar:!0,tabPane:!0}},(0,k.tZ)(h.ZP.TabPane,{tab:(0,k.tZ)("span",null,(0,d.t)("Basic")),key:"1"},Ct?(0,k.tZ)(ue,null,(0,k.tZ)(Ce,{db:C,onInputChange:e=>{let{target:t}=e;return Dt(ot.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},conf:bt,testConnection:()=>{var e;if(null==C||!C.sqlalchemy_uri)return void i((0,d.t)("Please enter a SQLAlchemy URI to test"));const t={sqlalchemy_uri:(null==C?void 0:C.sqlalchemy_uri)||"",database_name:(null==C||null==(e=C.database_name)?void 0:e.trim())||void 0,impersonate_user:(null==C?void 0:C.impersonate_user)||void 0,extra:null==C?void 0:C.extra,masked_encrypted_extra:(null==C?void 0:C.masked_encrypted_extra)||"",server_cert:(null==C?void 0:C.server_cert)||void 0,ssh_tunnel:(null==C?void 0:C.ssh_tunnel)||void 0};ke(!0),(0,F.xx)(t,(e=>{ke(!1),i(e)}),(e=>{ke(!1),s(e)}))},testInProgress:$e},(0,k.tZ)(ht,{isEditMode:Zt,dbFetched:N,disableSSHTunnelingForEngine:xt,useSSHTunneling:mt,setUseSSHTunneling:gt,setDB:S,isSSHTunneling:_t}),mt&&Gt()),(aa=(null==C?void 0:C.backend)||(null==C?void 0:C.engine),void 0!==(null==B||null==(na=B.databases)||null==(ra=na.find((e=>e.backend===aa||e.engine===aa)))?void 0:ra.parameters)&&!Zt&&(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(b.Z,{buttonStyle:"link",onClick:()=>S({type:ot.configMethodChange,payload:{database_name:null==C?void 0:C.database_name,configuration_method:L.DYNAMIC_FORM,engine:null==C?void 0:C.engine}}),css:e=>(e=>k.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,d.t)("Connect this database using the dynamic form instead")),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):Yt(),!Zt&&(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>ae(e),message:(0,d.t)("Additional fields may be required"),showIcon:!0,description:(0,k.tZ)(c.Fragment,null,(0,d.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,k.tZ)("a",{href:De,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,d.t)("here")),"."),type:"info"})),$t&&Qt()),(0,k.tZ)(h.ZP.TabPane,{tab:(0,k.tZ)("span",null,(0,d.t)("Advanced")),key:"2"},(0,k.tZ)(_e,{extraExtension:vt,db:C,onInputChange:e=>{let{target:t}=e;return Dt(ot.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onTextChange:e=>{let{target:t}=e;return Dt(ot.textChange,{name:t.name,value:t.value})},onEditorChange:e=>Dt(ot.editorChange,e),onExtraInputChange:e=>{let{target:t}=e;Dt(ot.extraInputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onExtraEditorChange:e=>{Dt(ot.extraEditorChange,e)}})))):(0,k.tZ)(v.Z,{css:e=>[Y,te(e),re(e),le(e)],name:"database",onHandledPrimaryAction:Ft,onHide:Et,primaryButtonName:oe?(0,d.t)("Finish"):(0,d.t)("Connect"),width:"500px",centered:!0,show:Z,title:(0,k.tZ)("h4",null,(0,d.t)("Connect a database")),footer:Kt()},!we&&oe?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Re,{isLoading:we,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:oe,db:C,dbName:me,dbModel:kt,editNewDb:ve}),se&&(0,k.tZ)(st,null,(0,k.tZ)(b.Z,{buttonStyle:"secondary",onClick:()=>{Se(!0),Vt(),Ut("/dataset/add/")}},(0,d.t)("CREATE DATASET")),(0,k.tZ)(b.Z,{buttonStyle:"secondary",onClick:()=>{Se(!0),Vt(),Ut("/superset/sqllab/?db=true")}},(0,d.t)("QUERY DATA IN SQL LAB"))),ve?Yt():(0,k.tZ)(_e,{extraExtension:vt,db:C,onInputChange:e=>{let{target:t}=e;return Dt(ot.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onTextChange:e=>{let{target:t}=e;return Dt(ot.textChange,{name:t.name,value:t.value})},onEditorChange:e=>Dt(ot.editorChange,e),onExtraInputChange:e=>{let{target:t}=e;Dt(ot.extraInputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onExtraEditorChange:e=>Dt(ot.extraEditorChange,e)})):(0,k.tZ)(c.Fragment,null,!we&&(C?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Re,{isLoading:we,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:oe,db:C,dbName:me,dbModel:kt}),wt&&(()=>{var e,t,a,n,r;const{hostname:l}=window.location;let o=(null==ft||null==(e=ft.REGIONAL_IPS)?void 0:e.default)||"";const i=(null==ft?void 0:ft.REGIONAL_IPS)||{};return Object.entries(i).forEach((e=>{let[t,a]=e;const n=new RegExp(t);l.match(n)&&(o=a)})),(null==C?void 0:C.engine)&&(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>ae(e),type:"info",showIcon:!0,message:(null==(t=at[C.engine])?void 0:t.message)||(null==ft||null==(a=ft.DEFAULT)?void 0:a.message),description:(null==(n=at[C.engine])?void 0:n.description)||(null==ft||null==(r=ft.DEFAULT)?void 0:r.description)+o}))})(),Yt(),(0,k.tZ)("div",{css:e=>X(e)},kt.engine!==M.GSheet&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(b.Z,{buttonStyle:"link",onClick:()=>S({type:ot.configMethodChange,payload:{engine:C.engine,configuration_method:L.SQLALCHEMY_URI,database_name:C.database_name}}),css:ce},(0,d.t)("Connect this database with a SQLAlchemy URI string instead")),(0,k.tZ)(O.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),$t&&Qt()):(0,k.tZ)(be,null,(0,k.tZ)(Re,{isLoading:we,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:oe,db:C,dbName:me,dbModel:kt}),(0,k.tZ)("div",{className:"preferred"},null==B||null==(ta=B.databases)?void 0:ta.filter((e=>e.preferred)).map((e=>(0,k.tZ)(A,{className:"preferred-item",onClick:()=>Rt(e.name),buttonText:e.name,icon:null==yt?void 0:yt[e.engine],key:`${e.name}`})))),(0,k.tZ)("div",{className:"available"},(0,k.tZ)("h4",{className:"available-label"},(0,d.t)("Or choose from a list of other databases we support:")),(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Supported databases")),(0,k.tZ)(m.IZ,{className:"available-select",onChange:Rt,placeholder:(0,d.t)("Choose a database..."),showSearch:!0},null==(Wt=[...(null==B?void 0:B.databases)||[]])?void 0:Wt.sort(((e,t)=>e.name.localeCompare(t.name))).map(((e,t)=>(0,k.tZ)(m.IZ.Option,{value:e.name,key:`database-${t}`},e.name))),(0,k.tZ)(m.IZ.Option,{value:"Other",key:"Other"},(0,d.t)("Other"))),(0,k.tZ)(g.Z,{showIcon:!0,closable:!1,css:e=>ae(e),type:"info",message:(null==ft||null==(ea=ft.ADD_DATABASE)?void 0:ea.message)||(0,d.t)("Want to add a new database?"),description:null!=ft&&ft.ADD_DATABASE?(0,k.tZ)(c.Fragment,null,(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,k.tZ)("a",{href:null==ft?void 0:ft.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==ft?void 0:ft.ADD_DATABASE.contact_description_link)," ",null==ft?void 0:ft.ADD_DATABASE.description):(0,k.tZ)(c.Fragment,null,(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,k.tZ)("a",{href:De,target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),".")})),(0,k.tZ)(xe,null,(0,k.tZ)(m.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{Be(""),Qe([]),Ge([]),tt([]),ut([]),Ee({}),Te({}),Le({}),Oe({}),Ke(!0),ze([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await Pt(e.file.originFileObj,Ne,Ue,Ae,Me,Ie)&&(null==y||y())},onRemove:e=>(ze(Fe.filter((t=>t.uid!==e.uid))),!1)},(0,k.tZ)(b.Z,{buttonStyle:"link",type:"link",css:pe},(0,d.t)("Import database from file")))),Bt()))),we&&(0,k.tZ)(z.Z,null));var Wt,ea,ta,aa,na,ra}))},18451:(e,t,a)=>{a.d(t,{c:()=>r});var n=a(28216);function r(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},85198:(e,t,a)=>{a.d(t,{Z:()=>le});var n=a(5872),r=a.n(n),l=a(23279),o=a.n(l),i=a(67294),s=a(51995),d=a(11965),u=a(23525),c=a(4715),p=a(83862),h=a(58593),m=a(73727),g=a(85931),v=a(70163),b=a(29147),y=a(27600),f=a(41609),Z=a.n(f),x=a(78580),_=a.n(x),w=a(15926),C=a.n(w),S=a(28216),$=a(35755),k=a(75049),N=a(55867),E=a(31069),U=a(37921),T=a(12617),A=a(22318),L=a(1315),M=a(40768);const{SubMenu:O}=p.$,I=s.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`,q=s.iK.i`
  margin-top: 2px;
`;function P(e){const{locale:t,languages:a,...n}=e;return(0,d.tZ)(O,r()({"aria-label":"Languages",title:(0,d.tZ)("div",{className:"f16"},(0,d.tZ)(q,{className:`flag ${a[t].flag}`})),icon:(0,d.tZ)(v.Z.TriangleDown,null)},n),Object.keys(a).map((e=>(0,d.tZ)(p.$.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,d.tZ)(I,{className:"f16"},(0,d.tZ)("i",{className:`flag ${a[e].flag}`}),(0,d.tZ)("a",{href:a[e].url},a[e].name))))))}var D=a(39589);const F=(0,k.I)(),R=e=>d.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,z=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
`,H=e=>d.iv`
  color: ${e.colors.grayscale.light1};
  .ant-menu-item-active {
    color: ${e.colors.grayscale.light1};
    cursor: default;
  }
`,K=s.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${e=>{let{align:t}=e;return t}};
  align-items: center;
  margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  .ant-menu-submenu-title > svg {
    top: ${e=>{let{theme:t}=e;return 5.25*t.gridUnit}}px;
  }
`,j=s.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,B=s.iK.a`
  padding-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,J=e=>d.iv`
  color: ${e.colors.grayscale.light5};
`,Q=e=>d.iv`
  &:hover {
    color: ${e.colors.primary.base} !important;
    cursor: pointer !important;
  }
`,{SubMenu:V}=p.$,G=e=>{let{align:t,settings:a,navbarRight:n,isFrontendRoute:r,environmentTag:l,setQuery:o}=e;const u=(0,S.v9)((e=>e.user)),c=(0,S.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),g=u||{},{roles:b}=g,{CSV_EXTENSIONS:y,COLUMNAR_EXTENSIONS:f,EXCEL_EXTENSIONS:x,ALLOWED_EXTENSIONS:w,HAS_GSHEETS_INSTALLED:$}=(0,S.v9)((e=>e.common.conf)),[k,O]=(0,i.useState)(!1),[I,q]=(0,i.useState)(""),G=(0,T.R)("can_sqllab","Superset",b),Y=(0,T.R)("can_write","Dashboard",b),X=(0,T.R)("can_write","Chart",b),W=(0,T.R)("can_write","Database",b),ee=(0,T.R)("can_write","Dataset",b),{canUploadData:te,canUploadCSV:ae,canUploadColumnar:ne,canUploadExcel:re}=(0,M.Mc)(b,y,f,x,w),le=G||X||Y,[oe,ie]=(0,i.useState)(!1),[se,de]=(0,i.useState)(!1),ue=(0,A.i5)(u),ce=oe||ue,pe=[{label:(0,N.t)("Data"),icon:"fa-database",childs:[{label:(0,N.t)("Connect database"),name:D.Z.DB_CONNECTION,perm:W&&!se},{label:(0,N.t)("Create dataset"),name:D.Z.DATASET_CREATION,url:"/dataset/add/",perm:ee&&se},{label:(0,N.t)("Connect Google Sheet"),name:D.Z.GOOGLE_SHEETS,perm:W&&$},{label:(0,N.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:ae&&ce,disable:ue&&!oe},{label:(0,N.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:ne&&ce,disable:ue&&!oe},{label:(0,N.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:re&&ce,disable:ue&&!oe}]},{label:(0,N.t)("SQL query"),url:"/superset/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,N.t)("Chart"),url:Number.isInteger(c)?`/chart/add?dashboard_id=${c}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,N.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],he=()=>{E.Z.get({endpoint:`/api/v1/database/?q=${C().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((e=>{var t;let{json:a}=e;const n=(null==a||null==(t=a.result)?void 0:t.filter((e=>{var t;return null==e||null==(t=e.engine_information)?void 0:t.supports_file_upload})))||[];ie((null==n?void 0:n.length)>=1)}))},me=()=>{E.Z.get({endpoint:`/api/v1/database/?q=${C().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then((e=>{let{json:t}=e;de(t.count>=1)}))};(0,i.useEffect)((()=>{te&&he()}),[te]),(0,i.useEffect)((()=>{(W||ee)&&me()}),[W,ee]);const ge=e=>(0,d.tZ)(i.Fragment,null,(0,d.tZ)("i",{className:`fa ${e.icon}`}),e.label),ve=(0,N.t)("Enable 'Allow file uploads to database' in any database's settings"),be=F.get("navbar.right"),ye=F.get("navbar.right-menu.item.icon"),fe=(0,s.Fg)();return(0,d.tZ)(K,{align:t},W&&(0,d.tZ)(L.ZP,{onHide:()=>{q(""),O(!1)},show:k,dbEngine:I,onDatabaseAdd:()=>o({databaseAdded:!0})}),(null==l?void 0:l.text)&&(0,d.tZ)(U.Z,{css:(0,d.iv)({borderRadius:125*fe.gridUnit+"px"},"",""),color:/^#(?:[0-9a-f]{3}){1,2}$/i.test(l.color)?l.color:l.color.split(".").reduce(((e,t)=>e[t]),fe.colors)},(0,d.tZ)("span",{css:J},l.text)),(0,d.tZ)(p.$,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===D.Z.DB_CONNECTION?O(!0):e.key===D.Z.GOOGLE_SHEETS&&(O(!0),q("Google Sheets"))},onOpenChange:e=>(e.length>1&&!Z()(null==e?void 0:e.filter((e=>{var t;return _()(e).call(e,`sub2_${null==pe||null==(t=pe[0])?void 0:t.label}`)})))&&(te&&he(),(W||ee)&&me()),null)},be&&(0,d.tZ)(be,null),!n.user_is_anonymous&&le&&(0,d.tZ)(V,{title:(0,d.tZ)(z,{className:"fa fa-plus"}),icon:(0,d.tZ)(v.Z.TriangleDown,null)},null==pe||null==pe.map?void 0:pe.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){var n;if(a)return(0,d.tZ)(V,{key:`sub2_${e.label}`,className:"data-menu",title:ge(e)},null==e||null==(n=e.childs)||null==n.map?void 0:n.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,d.tZ)(i.Fragment,{key:e.name},3===t&&(0,d.tZ)(p.$.Divider,null),(e=>e.disable?(0,d.tZ)(p.$.Item,{key:e.name,css:H},(0,d.tZ)(h.u,{placement:"top",title:ve},e.label)):(0,d.tZ)(p.$.Item,{key:e.name,css:Q},e.url?(0,d.tZ)("a",{href:e.url}," ",e.label," "):e.label))(e)):null)));if(!e.url)return null}return(0,T.R)(e.perm,e.view,b)&&(0,d.tZ)(p.$.Item,{key:e.label},r(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label):(0,d.tZ)("a",{href:e.url},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))}))),(0,d.tZ)(V,{title:(0,N.t)("Settings"),icon:(0,d.tZ)(v.Z.TriangleDown,{iconSize:"xl"})},null==a||null==a.map?void 0:a.map(((e,t)=>{var n;return[(0,d.tZ)(p.$.ItemGroup,{key:`${e.label}`,title:e.label},null==e||null==(n=e.childs)||null==n.map?void 0:n.map((e=>{if("string"!=typeof e){const t=ye?(0,d.tZ)(j,null,e.label,(0,d.tZ)(ye,{menuChild:e})):e.label;return(0,d.tZ)(p.$.Item,{key:`${e.label}`},r(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},t):(0,d.tZ)("a",{href:e.url},t))}return null}))),t<a.length-1&&(0,d.tZ)(p.$.Divider,{key:`divider_${t}`})]})),!n.user_is_anonymous&&[(0,d.tZ)(p.$.Divider,{key:"user-divider"}),(0,d.tZ)(p.$.ItemGroup,{key:"user-section",title:(0,N.t)("User")},n.user_profile_url&&(0,d.tZ)(p.$.Item,{key:"profile"},(0,d.tZ)("a",{href:n.user_profile_url},(0,N.t)("Profile"))),n.user_info_url&&(0,d.tZ)(p.$.Item,{key:"info"},(0,d.tZ)("a",{href:n.user_info_url},(0,N.t)("Info"))),(0,d.tZ)(p.$.Item,{key:"logout"},(0,d.tZ)("a",{href:n.user_logout_url},(0,N.t)("Logout"))))],(n.version_string||n.version_sha)&&[(0,d.tZ)(p.$.Divider,{key:"version-info-divider"}),(0,d.tZ)(p.$.ItemGroup,{key:"about-section",title:(0,N.t)("About")},(0,d.tZ)("div",{className:"about-section"},n.show_watermark&&(0,d.tZ)("div",{css:R},(0,N.t)("Powered by Apache Superset")),n.version_string&&(0,d.tZ)("div",{css:R},(0,N.t)("Version"),": ",n.version_string),n.version_sha&&(0,d.tZ)("div",{css:R},(0,N.t)("SHA"),": ",n.version_sha),n.build_number&&(0,d.tZ)("div",{css:R},(0,N.t)("Build"),": ",n.build_number)))]),n.show_language_picker&&(0,d.tZ)(P,{locale:n.locale,languages:n.languages})),n.documentation_url&&(0,d.tZ)(i.Fragment,null,(0,d.tZ)(B,{href:n.documentation_url,target:"_blank",rel:"noreferrer",title:n.documentation_text||(0,N.t)("Documentation")},n.documentation_icon?(0,d.tZ)("i",{className:n.documentation_icon}):(0,d.tZ)("i",{className:"fa fa-question"})),(0,d.tZ)("span",null," ")),n.bug_report_url&&(0,d.tZ)(i.Fragment,null,(0,d.tZ)(B,{href:n.bug_report_url,target:"_blank",rel:"noreferrer",title:n.bug_report_text||(0,N.t)("Report a bug")},n.bug_report_icon?(0,d.tZ)("i",{className:n.bug_report_icon}):(0,d.tZ)("i",{className:"fa fa-bug"})),(0,d.tZ)("span",null," ")),n.user_is_anonymous&&(0,d.tZ)(B,{href:n.user_login_url},(0,d.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,N.t)("Login")))},Y=e=>{const[,t]=(0,$.Kx)({databaseAdded:$.dJ,datasetAdded:$.dJ});return(0,d.tZ)(G,r()({setQuery:t},e))};class X extends i.PureComponent{constructor(){super(...arguments),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,d.tZ)(G,r()({setQuery:this.noop},this.props)):this.props.children}}const W=e=>(0,d.tZ)(X,e,(0,d.tZ)(Y,e)),ee=s.iK.header`
  ${e=>{let{theme:t}=e;return`\n      background-color: ${t.colors.grayscale.light5};\n      margin-bottom: 2px;\n      z-index: 10;\n\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${t.gridUnit}px\n          ${2*t.gridUnit}px\n          ${t.gridUnit}px\n          ${4*t.gridUnit}px;\n        max-width: ${t.gridUnit*t.brandIconMaxWidth}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${t.colors.grayscale.light2};\n        border-right: 1px solid ${t.colors.grayscale.light2};\n        height: 100%;\n        color: ${t.colors.grayscale.dark1};\n        padding-left: ${4*t.gridUnit}px;\n        padding-right: ${4*t.gridUnit}px;\n        margin-right: ${6*t.gridUnit}px;\n        font-size: ${4*t.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*t.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*t.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*t.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*t.gridUnit}px 0\n            ${3*t.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-of-type(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${t.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${t.colors.grayscale.dark1};\n          background-color: ${t.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}}
`,te=e=>d.iv`
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
    border-radius: 0px;
  }
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
    border-radius: 0px;
  }
  .ant-menu-vertical > .ant-menu-submenu.data-menu > .ant-menu-submenu-title {
    height: 28px;
    i {
      padding-right: ${2*e.gridUnit}px;
      margin-left: ${1.75*e.gridUnit}px;
    }
  }
`,{SubMenu:ae}=p.$,{useBreakpoint:ne}=c.rj;function re(e){let{data:{menu:t,brand:a,navbar_right:n,settings:r,environment_tag:l},isFrontendRoute:f=(()=>!1)}=e;const[Z,x]=(0,i.useState)("horizontal"),_=ne(),w=(0,b.fG)(),C=(0,s.Fg)();return(0,i.useEffect)((()=>{function e(){window.innerWidth<=767?x("inline"):x("horizontal")}e();const t=o()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),(0,u.eY)(y.KD.standalone)||w.hideNav?(0,d.tZ)(i.Fragment,null):(0,d.tZ)(ee,{className:"top",id:"main-menu",role:"navigation"},(0,d.tZ)(d.xB,{styles:te(C)}),(0,d.tZ)(c.X2,null,(0,d.tZ)(c.JX,{md:16,xs:24},(0,d.tZ)(h.u,{id:"brand-tooltip",placement:"bottomLeft",title:a.tooltip,arrowPointAtCenter:!0},f(window.location.pathname)?(0,d.tZ)(g.m,{className:"navbar-brand",to:a.path},(0,d.tZ)("img",{src:a.icon,alt:a.alt})):(0,d.tZ)("a",{className:"navbar-brand",href:a.path},(0,d.tZ)("img",{src:a.icon,alt:a.alt}))),a.text&&(0,d.tZ)("div",{className:"navbar-brand-text"},(0,d.tZ)("span",null,a.text)),(0,d.tZ)(p.$,{mode:Z,className:"main-nav"},t.map(((e,t)=>{var a;return(e=>{let{label:t,childs:a,url:n,index:r,isFrontendRoute:l}=e;return n&&l?(0,d.tZ)(p.$.Item,{key:t,role:"presentation"},(0,d.tZ)(m.rU,{role:"button",to:n},t)):n?(0,d.tZ)(p.$.Item,{key:t},(0,d.tZ)("a",{href:n},t)):(0,d.tZ)(ae,{key:r,title:t,icon:"inline"===Z?(0,d.tZ)(i.Fragment,null):(0,d.tZ)(v.Z.TriangleDown,null)},null==a?void 0:a.map(((e,a)=>"string"==typeof e&&"-"===e&&"Data"!==t?(0,d.tZ)(p.$.Divider,{key:`$${a}`}):"string"!=typeof e?(0,d.tZ)(p.$.Item,{key:`${e.label}`},e.isFrontendRoute?(0,d.tZ)(m.rU,{to:e.url||""},e.label):(0,d.tZ)("a",{href:e.url},e.label)):null)))})({index:t,...e,isFrontendRoute:f(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:f(e.url)}))})})))),(0,d.tZ)(c.JX,{md:8,xs:24},(0,d.tZ)(W,{align:_.md?"flex-end":"flex-start",settings:r,navbarRight:n,isFrontendRoute:f,environmentTag:l}))))}function le(e){let{data:t,...a}=e;const n={...t},l={Data:!0,Security:!0,Manage:!0},o=[],i=[];return n.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),l.hasOwnProperty(e.name)?i.push(a):o.push(a)})),n.menu=o,n.settings=i,(0,d.tZ)(re,r()({data:n},a))}}}]);
//# sourceMappingURL=5198.e6d60de4000665a1af23.entry.js.map