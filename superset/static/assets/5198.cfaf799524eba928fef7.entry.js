"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5198],{85931:(e,t,a)=>{a.d(t,{m:()=>i});var n=a(73126),r=(a(67294),a(73727)),l=a(23525),o=a(11965);const i=e=>{let{to:t,component:a,replace:i,innerRef:s,children:d,...u}=e;return"string"==typeof t&&(0,l.TO)(t)?(0,o.tZ)("a",(0,n.Z)({href:(0,l.en)(t)},u),d):(0,o.tZ)(r.rU,(0,n.Z)({to:t,component:a,replace:i,innerRef:s},u),d)}},60972:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(61988),l=a(34858),o=a(29487),i=a(11965);const s=(0,l.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",u=e=>{let{errorMessage:t,showDbInstallInstructions:a}=e;return(0,i.tZ)(o.Z,{closable:!1,css:e=>(e=>i.iv`
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
`)(e),type:"error",showIcon:!0,message:t,description:a?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("br",null),(0,r.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,r.t)("here")),"."):""})}},49576:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(51995),l=a(70707),o=a(11965);const i=r.iK.label`
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
`,h=(0,n.forwardRef)(((e,t)=>{let{indeterminate:a,id:r,checked:l,onChange:h,title:m="",labelText:g=""}=e;const v=(0,n.useRef)(),b=t||v;return(0,n.useEffect)((()=>{b.current.indeterminate=a}),[b,a]),(0,o.tZ)(n.Fragment,null,(0,o.tZ)(p,null,a&&(0,o.tZ)(s,null),!a&&l&&(0,o.tZ)(u,null),!a&&!l&&(0,o.tZ)(d,null),(0,o.tZ)(c,{name:r,id:r,type:"checkbox",ref:b,checked:l,onChange:h})),(0,o.tZ)(i,{title:m,htmlFor:r},g))}))},1315:(e,t,a)=>{a.d(t,{Us:()=>lt,Gr:()=>ot,ZP:()=>dt});var n=a(78718),r=a.n(n),l=a(41609),o=a.n(l),i=a(75049),s=a(51995),d=a(61988),u=a(93185),c=a(67294),p=a(16550),h=a(61337),m=a(71262),g=a(4715),v=a(29487),b=a(74069),y=a(35932),f=a(70707);function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Z.apply(this,arguments)}const x={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},_=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function w(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const C={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},S=Object.keys(C);class $ extends c.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(x).forEach((t=>{e.style[t]=x[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);_.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,r={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(r,e.onReflow.bind(this,r))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,r=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>r&&(n++,e.push(a),r=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const r=this.canvas.lastElementChild;let l=w(r,2);for(;l&&(r.offsetTop>n||r.offsetHeight>l.offsetHeight||r.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=w(r,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:r,trimRight:l,className:o}=a,i=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["component","ellipsis","trimRight","className"]);return c.createElement(n,Z({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${o}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(i,S)),t&&l?e.replace(/[\s\uFEFF\xA0]+$/,""):e,c.createElement("wbr",null),t&&c.createElement("span",{className:"LinesEllipsis-ellipsis"},r))}}$.defaultProps=C;const N=$;var k=a(11965);const E=(0,s.iK)(y.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,U=s.iK.div`
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
`,T=s.iK.div`
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
`,M=s.iK.div`
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
`,A=(0,s.iK)((e=>{let{icon:t,altText:a,buttonText:n,...r}=e;return(0,k.tZ)(E,r,(0,k.tZ)(U,null,t&&(0,k.tZ)("img",{src:t,alt:a}),!t&&(0,k.tZ)(f.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,k.tZ)(M,null,(0,k.tZ)(T,null,(0,k.tZ)(N,{text:n,maxLine:"2",basedOn:"words",trimRight:!0}))))}))`
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
`;var L,O,q=a(8272),I=a(14114),D=a(12353),P=a(72875),F=a(60972),R=a(34858),z=a(18451),H=a(38703);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(L||(L={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(O||(O={}));var K=a(94184),j=a.n(K),B=a(49576),J=a(43700),Q=a(94670);const V=k.iv`
  margin-bottom: 0;
`,G=s.iK.header`
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
`,Y=k.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,X=k.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,W=e=>k.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,ee=e=>k.iv`
  padding-left: ${2*e.gridUnit}px;
`,te=e=>k.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,ae=e=>k.iv`
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
`,ne=e=>k.iv`
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
`,re=s.iK.div`
  ${e=>{let{theme:t}=e;return k.iv`
    margin: 0 ${4*t.gridUnit}px -${4*t.gridUnit}px;
  `}}
`,le=e=>k.iv`
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
`,oe=e=>k.iv`
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
`,ie=e=>k.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,se=s.iK.div`
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
`,de=(0,s.iK)(Q.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,ue=s.iK.div`
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
`,ce=s.iK.div`
  padding: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  margin-top: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`,pe=e=>k.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,he=e=>k.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,me=s.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0px;
  }
`,ge=(s.iK.div`
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
`),ve=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,be=s.iK.div`
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
  }`,ye=s.iK.div`
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
`,fe=(0,s.iK)(y.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,Ze=s.iK.div`
  position: sticky;
  top: 0;
  z-index: ${e=>{let{theme:t}=e;return t.zIndex.max}};
  background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
  height: auto;
`,xe=s.iK.div`
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
`,_e=s.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,we=e=>{var t,a,n,r;let{db:l,onInputChange:o,onTextChange:i,onEditorChange:s,onExtraInputChange:u,onExtraEditorChange:c,extraExtension:p}=e;const h=!(null==l||!l.expose_in_sqllab),m=!!(null!=l&&l.allow_ctas||null!=l&&l.allow_cvas),g=null==l||null==(t=l.engine_information)?void 0:t.supports_file_upload,v=JSON.parse((null==l?void 0:l.extra)||"{}",((e,t)=>"engine_params"===e&&"object"==typeof t?JSON.stringify(t):t)),b=null==p?void 0:p.component,y=null==p?void 0:p.logo,f=null==p?void 0:p.description;return(0,k.tZ)(J.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>k.iv`
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
`)(e)},(0,k.tZ)(J.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("SQL Lab")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Adjust how this database will interact with SQL Lab."))),key:"1"},(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==l||!l.expose_in_sqllab),onChange:o,labelText:(0,d.t)("Expose database in SQL Lab")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Allow this database to be queried in SQL Lab")})),(0,k.tZ)(ue,{className:j()("expandable",{open:h,"ctas-open":m})},(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==l||!l.allow_ctas),onChange:o,labelText:(0,d.t)("Allow CREATE TABLE AS")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Allow creation of new tables based on queries")}))),(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==l||!l.allow_cvas),onChange:o,labelText:(0,d.t)("Allow CREATE VIEW AS")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Allow creation of new views based on queries")})),(0,k.tZ)(se,{className:j()("expandable",{open:m})},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("CTAS & CVAS SCHEMA")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"force_ctas_schema",placeholder:(0,d.t)("Create or select schema..."),onChange:o,value:(null==l?void 0:l.force_ctas_schema)||""})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==l||!l.allow_dml),onChange:o,labelText:(0,d.t)("Allow DML")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==v||!v.cost_estimate_enabled),onChange:u,labelText:(0,d.t)("Enable query cost estimation")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==v||!v.allows_virtual_table_explore),onChange:u,labelText:(0,d.t)("Allow this database to be explored")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==v||!v.disable_data_preview),onChange:u,labelText:(0,d.t)("Disable SQL Lab data preview queries")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")}))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"expand_rows",indeterminate:!1,checked:!(null==v||null==(a=v.schema_options)||!a.expand_rows),onChange:u,labelText:(0,d.t)("Enable row expansion in schemas")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})))))),(0,k.tZ)(J.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Performance")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Adjust performance settings of this database."))),key:"2"},(0,k.tZ)(se,{className:"mb-8"},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Chart cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"cache_timeout",value:(null==l?void 0:l.cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:o})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined."))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Schema cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==v||null==(n=v.metadata_cache_timeout)?void 0:n.schema_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:u})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Table cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==v||null==(r=v.metadata_cache_timeout)?void 0:r.table_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:u})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,k.tZ)(se,{css:(0,k.iv)({no_margin_bottom:V},"","")},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==l||!l.allow_run_async),onChange:o,labelText:(0,d.t)("Asynchronous query execution")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,k.tZ)(se,{css:(0,k.iv)({no_margin_bottom:V},"","")},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==v||!v.cancel_query_on_windows_unload),onChange:u,labelText:(0,d.t)("Cancel query on window unload event")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,k.tZ)(J.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Security")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Add extra connection information."))),key:"3"},(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Secure extra")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(de,{name:"masked_encrypted_extra",value:(null==l?void 0:l.masked_encrypted_extra)||"",placeholder:(0,d.t)("Secure extra"),onChange:e=>s({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px"})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Root certificate")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("textarea",{name:"server_cert",value:(null==l?void 0:l.server_cert)||"",placeholder:(0,d.t)("Enter CA_BUNDLE"),onChange:i})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,k.tZ)(se,{css:g?{}:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==l||!l.impersonate_user),onChange:o,labelText:(0,d.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),g&&(0,k.tZ)(se,{css:null!=l&&l.allow_file_upload?{}:V},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(B.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==l||!l.allow_file_upload),onChange:o,labelText:(0,d.t)("Allow file uploads to database")}))),g&&!(null==l||!l.allow_file_upload)&&(0,k.tZ)(se,{css:V},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Schemas allowed for File upload")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==v?void 0:v.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:u})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("A comma-separated list of schemas that files are allowed to upload to.")))),p&&b&&f&&(0,k.tZ)(J.Z.Panel,{header:(0,k.tZ)("div",null,y&&(0,k.tZ)(y,null),(0,k.tZ)("span",{css:e=>({fontSize:e.typography.sizes.l,fontWeight:e.typography.weights.bold})},null==p?void 0:p.title),(0,k.tZ)("p",{className:"helper"},(0,k.tZ)(f,null))),key:null==p?void 0:p.title,collapsible:null!=p.enabled&&p.enabled()?"icon":"disabled"},(0,k.tZ)(se,{css:V},(0,k.tZ)(b,{db:l,onEdit:p.onEdit}))),(0,k.tZ)(J.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Other")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Additional settings."))),key:"4"},(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Metadata Parameters")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(de,{name:"metadata_params",placeholder:(0,d.t)("Metadata Parameters"),onChange:e=>c({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==v?void 0:v.metadata_params)||{}).length?null==v?void 0:v.metadata_params:""})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Engine Parameters")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(de,{name:"engine_params",placeholder:(0,d.t)("Engine Parameters"),onChange:e=>c({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==v?void 0:v.engine_params)||{}).length?null==v?void 0:v.engine_params:""})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Version")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"version",placeholder:(0,d.t)("Version number"),onChange:u,value:(null==v?void 0:v.version)||""})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")))))};var Ce=a(8911);const Se=e=>{var t,a;let{db:n,onInputChange:r,testConnection:l,conf:o,testInProgress:i=!1,children:s}=e;const u=(null==Ce.Z||null==(t=Ce.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:t.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",p=(null==Ce.Z||null==(a=Ce.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:a.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Display Name"),(0,k.tZ)("span",{className:"required"},"*")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"database_name",value:(null==n?void 0:n.database_name)||"",placeholder:(0,d.t)("Name your database"),onChange:r})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Pick a name to help you identify this database."))),(0,k.tZ)(se,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("SQLAlchemy URI"),(0,k.tZ)("span",{className:"required"},"*")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==n?void 0:n.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==n?void 0:n.sqlalchemy_uri_placeholder)||(0,d.t)("dialect+driver://username:password@host:port/database"),onChange:r})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Refer to the")," ",(0,k.tZ)("a",{href:u||(null==o?void 0:o.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},p||(null==o?void 0:o.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,d.t)("for more information on how to structure your URI."))),s,(0,k.tZ)(y.Z,{onClick:l,loading:i,cta:!0,buttonStyle:"link",css:e=>(e=>k.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,d.t)("Test connection")))};var $e=a(49238);const Ne={account:{helpText:(0,d.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,d.t)("e.g. xy12345.us-east-2.aws")},warehouse:{placeholder:(0,d.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{placeholder:(0,d.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},ke=e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,field:i}=e;return(0,k.tZ)(D.Z,{id:i,name:i,required:a,value:null==o||null==(t=o.parameters)?void 0:t[i],validationMethods:{onBlur:r},errorMessage:null==l?void 0:l[i],placeholder:Ne[i].placeholder,helpText:Ne[i].helpText,label:i,onChange:n.onParametersChange,className:Ne[i].className||i})};var Ee,Ue=a(2857);!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(Ee||(Ee={}));const Te={gsheets:"service_account_info",bigquery:"credentials_info"};var Me={name:"s5xdrg",styles:"display:flex;align-items:center"};const Ae=e=>{var t,a,n;let{changeMethods:r,isEditMode:l,db:o,editNewDb:i}=e;const[s,u]=(0,c.useState)(Ee.jsonUpload.valueOf()),[p,h]=(0,c.useState)(null),[m,v]=(0,c.useState)(!0),b="gsheets"===(null==o?void 0:o.engine)?!l&&!m:!l,y=l&&"{}"!==(null==o?void 0:o.masked_encrypted_extra),Z=(null==o?void 0:o.engine)&&Te[o.engine],x="object"==typeof(null==o||null==(t=o.parameters)?void 0:t[Z])?JSON.stringify(null==o||null==(a=o.parameters)?void 0:a[Z]):null==o||null==(n=o.parameters)?void 0:n[Z];return(0,k.tZ)(be,null,"gsheets"===(null==o?void 0:o.engine)&&(0,k.tZ)("div",{className:"catalog-type-select"},(0,k.tZ)(Ue.Z,{css:e=>(e=>k.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,d.t)("Type of Google Sheets allowed")),(0,k.tZ)(g.IZ,{style:{width:"100%"},defaultValue:y?"false":"true",onChange:e=>v("true"===e)},(0,k.tZ)(g.IZ.Option,{value:"true",key:1},(0,d.t)("Publicly shared sheets only")),(0,k.tZ)(g.IZ.Option,{value:"false",key:2},(0,d.t)("Public and privately shared sheets")))),b&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Ue.Z,{required:!0},(0,d.t)("How do you want to enter service account credentials?")),(0,k.tZ)(g.IZ,{defaultValue:s,style:{width:"100%"},onChange:e=>u(e)},(0,k.tZ)(g.IZ.Option,{value:Ee.jsonUpload},(0,d.t)("Upload JSON file")),(0,k.tZ)(g.IZ.Option,{value:Ee.copyPaste},(0,d.t)("Copy and Paste JSON credentials")))),s===Ee.copyPaste||l||i?(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(Ue.Z,{required:!0},(0,d.t)("Service Account")),(0,k.tZ)("textarea",{className:"input-form",name:Z,value:x,onChange:r.onParametersChange,placeholder:(0,d.t)("Paste content of service credentials JSON file here")}),(0,k.tZ)("span",{className:"label-paste"},(0,d.t)("Copy and paste the entire service account .json file here"))):b&&(0,k.tZ)("div",{className:"input-container",css:e=>W(e)},(0,k.tZ)("div",{css:Me},(0,k.tZ)(Ue.Z,{required:!0},(0,d.t)("Upload Credentials")),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!p&&(0,k.tZ)(g.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,d.t)("Choose File")),p&&(0,k.tZ)("div",{className:"input-upload-current"},p,(0,k.tZ)(f.Z.DeleteFilled,{iconSize:"m",onClick:()=>{h(null),r.onParametersChange({target:{name:Z,value:""}})}})),(0,k.tZ)("input",{id:"selectedFile",accept:".json",className:"input-upload",type:"file",onChange:async e=>{var t,a;let n;e.target.files&&(n=e.target.files[0]),h(null==(t=n)?void 0:t.name),r.onParametersChange({target:{type:null,name:Z,value:await(null==(a=n)?void 0:a.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))},Le=["host","port","database","username","password","access_token","http_path","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role","ssh"],Oe={host:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o}=e;return(0,k.tZ)(D.Z,{id:"host",name:"host",value:null==o||null==(t=o.parameters)?void 0:t.host,required:a,hasTooltip:!0,tooltipText:(0,d.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.host,placeholder:(0,d.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,d.t)("Host"),onChange:n.onParametersChange})},http_path:e=>{var t,a;let{required:n,changeMethods:r,getValidation:l,validationErrors:o,db:i}=e;const s=JSON.parse((null==i?void 0:i.extra)||"{}");return(0,k.tZ)(D.Z,{id:"http_path",name:"http_path",required:n,value:null==(t=s.engine_params)||null==(a=t.connect_args)?void 0:a.http_path,validationMethods:{onBlur:l},errorMessage:null==o?void 0:o.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:r.onExtraInputChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},port:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o}=e;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(D.Z,{id:"port",name:"port",type:"number",required:a,value:null==o||null==(t=o.parameters)?void 0:t.port,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.port,placeholder:(0,d.t)("e.g. 5432"),className:"form-group-w-50",label:(0,d.t)("Port"),onChange:n.onParametersChange}))},database:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,placeholder:o,db:i}=e;return(0,k.tZ)(D.Z,{id:"database",name:"database",required:a,value:null==i||null==(t=i.parameters)?void 0:t.database,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.database,placeholder:null!=o?o:(0,d.t)("e.g. world_population"),label:(0,d.t)("Database name"),onChange:n.onParametersChange,helpText:(0,d.t)("Copy the name of the database you are trying to connect to.")})},username:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o}=e;return(0,k.tZ)(D.Z,{id:"username",name:"username",required:a,value:null==o||null==(t=o.parameters)?void 0:t.username,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.username,placeholder:(0,d.t)("e.g. Analytics"),label:(0,d.t)("Username"),onChange:n.onParametersChange})},password:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,isEditMode:i}=e;return(0,k.tZ)(D.Z,{id:"password",name:"password",required:a,visibilityToggle:!i,value:null==o||null==(t=o.parameters)?void 0:t.password,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.password,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Password"),onChange:n.onParametersChange})},access_token:e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,isEditMode:i}=e;return(0,k.tZ)(D.Z,{id:"access_token",name:"access_token",required:a,visibilityToggle:!i,value:null==o||null==(t=o.parameters)?void 0:t.access_token,validationMethods:{onBlur:r},errorMessage:null==l?void 0:l.access_token,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Access token"),onChange:n.onParametersChange})},database_name:e=>{let{changeMethods:t,getValidation:a,validationErrors:n,db:r}=e;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(D.Z,{id:"database_name",name:"database_name",required:!0,value:null==r?void 0:r.database_name,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database_name,placeholder:"",label:(0,d.t)("Display Name"),onChange:t.onChange,helpText:(0,d.t)("Pick a nickname for how the database will display in Superset.")}))},query:e=>{let{required:t,changeMethods:a,getValidation:n,validationErrors:r,db:l}=e;return(0,k.tZ)(D.Z,{id:"query_input",name:"query_input",required:t,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:n},errorMessage:null==r?void 0:r.query,placeholder:(0,d.t)("e.g. param1=value1&param2=value2"),label:(0,d.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,d.t)("Add additional custom parameters")})},encryption:e=>{var t;let{isEditMode:a,changeMethods:n,db:r,sslForced:l}=e;return(0,k.tZ)("div",{css:e=>W(e)},(0,k.tZ)(g.KU,{disabled:l&&!a,checked:(null==r||null==(t=r.parameters)?void 0:t.encryption)||l,onChange:e=>{n.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,k.tZ)("span",{css:ee},"SSL"),(0,k.tZ)(q.Z,{tooltip:(0,d.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Ae,service_account_info:Ae,catalog:e=>{let{required:t,changeMethods:a,getValidation:n,validationErrors:r,db:l}=e;const o=(null==l?void 0:l.catalog)||[],i=r||{};return(0,k.tZ)(xe,null,(0,k.tZ)("h4",{className:"gsheet-title"},(0,d.t)("Connect Google Sheets as tables to this database")),(0,k.tZ)("div",null,null==o?void 0:o.map(((e,r)=>{var l,s;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Ue.Z,{className:"catalog-label",required:!0},(0,d.t)("Google Sheet Name and URL")),(0,k.tZ)("div",{className:"catalog-name"},(0,k.tZ)(D.Z,{className:"catalog-name-input",required:t,validationMethods:{onBlur:n},errorMessage:null==(l=i[r])?void 0:l.name,placeholder:(0,d.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${r}`,name:"name",value:e.target.value}})},value:e.name}),(null==o?void 0:o.length)>1&&(0,k.tZ)(f.Z.CloseOutlined,{css:e=>k.iv`
                    align-self: center;
                    background: ${e.colors.grayscale.light4};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>a.onRemoveTableCatalog(r)})),(0,k.tZ)(D.Z,{className:"catalog-name-url",required:t,validationMethods:{onBlur:n},errorMessage:null==(s=i[r])?void 0:s.url,placeholder:(0,d.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${r}`,name:"value",value:e.target.value}}),value:e.value}))})),(0,k.tZ)(fe,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()}},"+ ",(0,d.t)("Add sheet"))))},warehouse:ke,role:ke,account:ke,ssh:e=>{var t;let{isEditMode:a,changeMethods:n,clearValidationErrors:r,db:l}=e;return(0,k.tZ)("div",{css:e=>W(e)},(0,k.tZ)(g.KU,{disabled:a&&!o()(null==l?void 0:l.ssh_tunnel),checked:null==l||null==(t=l.parameters)?void 0:t.ssh,onChange:e=>{n.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:e}}),r()}}),(0,k.tZ)("span",{css:ee},(0,d.t)("SSH Tunnel")),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"}))}},qe=e=>{let{dbModel:{parameters:t},db:a,editNewDb:n,getPlaceholder:r,getValidation:l,isEditMode:o=!1,onAddTableCatalog:i,onChange:s,onExtraInputChange:d,onParametersChange:u,onParametersUploadFileChange:c,onQueryChange:p,onRemoveTableCatalog:h,sslForced:m,validationErrors:g,clearValidationErrors:v}=e;return(0,k.tZ)($e.l0,null,(0,k.tZ)("div",{css:e=>[te,ie(e)]},t&&Le.filter((e=>Object.keys(t.properties).includes(e)||"database_name"===e)).map((e=>{var b;return Oe[e]({required:null==(b=t.required)?void 0:b.includes(e),changeMethods:{onParametersChange:u,onChange:s,onQueryChange:p,onParametersUploadFileChange:c,onAddTableCatalog:i,onRemoveTableCatalog:h,onExtraInputChange:d},validationErrors:g,getValidation:l,clearValidationErrors:v,db:a,key:e,field:e,isEditMode:o,sslForced:m,editNewDb:n,placeholder:r?r(e):void 0})}))))},Ie=(0,R.z)(),De=Ie?Ie.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Pe={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},Fe=e=>{let{isLoading:t,isEditMode:a,useSqlAlchemyForm:n,hasConnectedDb:r,db:l,dbName:o,dbModel:i,editNewDb:s,fileList:u}=e;const p=u&&(null==u?void 0:u.length)>0,h=(0,k.tZ)(G,null,(0,k.tZ)(ge,null,null==l?void 0:l.backend),(0,k.tZ)(ve,null,o)),m=(0,k.tZ)(G,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,k.tZ)("h4",null,(0,d.t)("Enter Primary Credentials")),(0,k.tZ)("p",{className:"helper-bottom"},(0,d.t)("Need help? Learn how to connect your database")," ",(0,k.tZ)("a",{href:(null==Ie?void 0:Ie.default)||De,target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),".")),g=(0,k.tZ)(Ze,null,(0,k.tZ)(G,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})),(0,k.tZ)("h4",{className:"step-3-text"},(0,d.t)("Database connected")),(0,k.tZ)("p",{className:"subheader-text"},(0,d.t)("Create a dataset to begin visualizing your data as a chart or go to\n          SQL Lab to query your data.")))),v=(0,k.tZ)(Ze,null,(0,k.tZ)(G,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})),(0,k.tZ)("h4",null,(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:i.name})),(0,k.tZ)("p",{className:"helper-bottom"},(0,d.t)("Need help? Learn more about")," ",(0,k.tZ)("a",{href:(b=null==l?void 0:l.engine,b?Ie?Ie[b]||Ie.default:Pe[b]?Pe[b]:`https://superset.apache.org/docs/databases/${b}`:null),target:"_blank",rel:"noopener noreferrer"},(0,d.t)("connecting to %(dbModelName)s.",{dbModelName:i.name}),"."))));var b;const y=(0,k.tZ)(G,null,(0,k.tZ)("div",{className:"select-db"},(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})),(0,k.tZ)("h4",null,(0,d.t)("Select a database to connect")))),f=(0,k.tZ)(Ze,null,(0,k.tZ)(G,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,k.tZ)("h4",null,(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:i.name})),(0,k.tZ)("p",{className:"helper-bottom"},p?u[0].name:"")));return p?f:t?(0,k.tZ)(c.Fragment,null):a?h:n?m:r&&!s?g:l||s?v:y};var Re=a(87183),ze=a(9875),He=a(77808),Ke=a(31097),je=a(10038),Be=a(55287);const Je=s.iK.div`
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  label {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    text-transform: uppercase;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }
`,Qe=(0,s.iK)(g.X2)`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,Ve=(0,s.iK)(g.qz.Item)`
  margin-bottom: 0 !important;
`,Ge=(0,s.iK)(He.Z.Password)`
  margin: ${e=>{let{theme:t}=e;return`${t.gridUnit}px 0 ${2*t.gridUnit}px`}};
`,Ye=e=>{var t,a,n,r,l,o;let{db:i,onSSHTunnelParametersChange:s,setSSHTunnelLoginMethod:u}=e;const[p,h]=(0,c.useState)(ot.password);return(0,k.tZ)($e.l0,null,(0,k.tZ)(Qe,{gutter:16},(0,k.tZ)(g.JX,{xs:24,md:12},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"server_address",required:!0},(0,d.t)("SSH Host")),(0,k.tZ)(ze.II,{name:"server_address",type:"text",placeholder:(0,d.t)("e.g. 127.0.0.1"),value:(null==i||null==(t=i.ssh_tunnel)?void 0:t.server_address)||"",onChange:s}))),(0,k.tZ)(g.JX,{xs:24,md:12},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"server_port",required:!0},(0,d.t)("SSH Port")),(0,k.tZ)(ze.II,{name:"server_port",type:"text",placeholder:(0,d.t)("22"),value:(null==i||null==(a=i.ssh_tunnel)?void 0:a.server_port)||"",onChange:s})))),(0,k.tZ)(Qe,{gutter:16},(0,k.tZ)(g.JX,{xs:24},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"username",required:!0},(0,d.t)("Username")),(0,k.tZ)(ze.II,{name:"username",type:"text",placeholder:(0,d.t)("e.g. Analytics"),value:(null==i||null==(n=i.ssh_tunnel)?void 0:n.username)||"",onChange:s})))),(0,k.tZ)(Qe,{gutter:16},(0,k.tZ)(g.JX,{xs:24},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"use_password",required:!0},(0,d.t)("Login with")),(0,k.tZ)(Ve,{name:"use_password",initialValue:p},(0,k.tZ)(Re.Y.Group,{onChange:e=>{let{target:{value:t}}=e;h(t),u(t)}},(0,k.tZ)(Re.Y,{value:ot.password},(0,d.t)("Password")),(0,k.tZ)(Re.Y,{value:ot.privateKey},(0,d.t)("Private Key & Password"))))))),p===ot.password&&(0,k.tZ)(Qe,{gutter:16},(0,k.tZ)(g.JX,{xs:24},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"password",required:!0},(0,d.t)("SSH Password")),(0,k.tZ)(Ge,{name:"password",placeholder:(0,d.t)("e.g. ********"),value:(null==i||null==(r=i.ssh_tunnel)?void 0:r.password)||"",onChange:s,iconRender:e=>e?(0,k.tZ)(Ke.Z,{title:"Hide password."},(0,k.tZ)(je.Z,null)):(0,k.tZ)(Ke.Z,{title:"Show password."},(0,k.tZ)(Be.Z,null)),role:"textbox"})))),p===ot.privateKey&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Qe,{gutter:16},(0,k.tZ)(g.JX,{xs:24},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"private_key",required:!0},(0,d.t)("Private Key")),(0,k.tZ)(ze.Kx,{name:"private_key",placeholder:(0,d.t)("Paste Private Key here"),value:(null==i||null==(l=i.ssh_tunnel)?void 0:l.private_key)||"",onChange:s,rows:4})))),(0,k.tZ)(Qe,{gutter:16},(0,k.tZ)(g.JX,{xs:24},(0,k.tZ)(Je,null,(0,k.tZ)($e.lX,{htmlFor:"private_key_password",required:!0},(0,d.t)("Private Key Password")),(0,k.tZ)(Ge,{name:"private_key_password",placeholder:(0,d.t)("e.g. ********"),value:(null==i||null==(o=i.ssh_tunnel)?void 0:o.private_key_password)||"",onChange:s,iconRender:e=>e?(0,k.tZ)(Ke.Z,{title:"Hide password."},(0,k.tZ)(je.Z,null)):(0,k.tZ)(Ke.Z,{title:"Show password."},(0,k.tZ)(Be.Z,null)),role:"textbox"}))))))},Xe=e=>{let{isEditMode:t,dbFetched:a,useSSHTunneling:n,setUseSSHTunneling:r,setDB:l,isSSHTunneling:i}=e;return i?(0,k.tZ)("div",{css:e=>W(e)},(0,k.tZ)(g.KU,{disabled:t&&!o()(null==a?void 0:a.ssh_tunnel),checked:n,onChange:e=>{r(e),e||l({type:lt.removeSSHTunnelConfig})}}),(0,k.tZ)("span",{css:ee},(0,d.t)("SSH Tunnel")),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"})):null},We=(0,i.I)(),et=JSON.stringify({allows_virtual_table_explore:!0}),tt={[O.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},at=(0,s.iK)(m.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,nt=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    margin: ${8*t.gridUnit}px ${4*t.gridUnit}px;\n  `}};
`,rt=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: 0px ${4*t.gridUnit}px;\n  `}};
`;var lt,ot;!function(e){e[e.addTableCatalogSheet=0]="addTableCatalogSheet",e[e.configMethodChange=1]="configMethodChange",e[e.dbSelected=2]="dbSelected",e[e.editorChange=3]="editorChange",e[e.extraEditorChange=4]="extraEditorChange",e[e.extraInputChange=5]="extraInputChange",e[e.fetched=6]="fetched",e[e.inputChange=7]="inputChange",e[e.parametersChange=8]="parametersChange",e[e.queryChange=9]="queryChange",e[e.removeTableCatalogSheet=10]="removeTableCatalogSheet",e[e.reset=11]="reset",e[e.textChange=12]="textChange",e[e.parametersSSHTunnelChange=13]="parametersSSHTunnelChange",e[e.setSSHTunnelLoginMethod=14]="setSSHTunnelLoginMethod",e[e.removeSSHTunnelConfig=15]="removeSSHTunnelConfig"}(lt||(lt={})),function(e){e[e.password=0]="password",e[e.privateKey=1]="privateKey"}(ot||(ot={}));const it=s.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  margin-left: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
`;function st(e,t){var a,n,l,o;const i={...e||{}};let s,d,u={},c="";const p=JSON.parse(i.extra||"{}");switch(t.type){case lt.extraEditorChange:try{d=JSON.parse(t.payload.json||"{}")}catch(e){d=t.payload.json}return{...i,extra:JSON.stringify({...p,[t.payload.name]:d})};case lt.extraInputChange:return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra:JSON.stringify({...p,metadata_cache_timeout:{...null==p?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}})}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra:JSON.stringify({...p,schemas_allowed_for_file_upload:(t.payload.value||"").split(",").filter((e=>""!==e))})}:"http_path"===t.payload.name?{...i,extra:JSON.stringify({...p,engine_params:{connect_args:{[t.payload.name]:null==(h=t.payload.value)?void 0:h.trim()}}})}:"expand_rows"===t.payload.name?{...i,extra:JSON.stringify({...p,schema_options:{...null==p?void 0:p.schema_options,[t.payload.name]:!!t.payload.value}})}:{...i,extra:JSON.stringify({...p,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value})};var h;case lt.inputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case lt.parametersChange:if(null!=(a=t.payload.type)&&a.startsWith("catalog")&&void 0!==i.catalog){var m;const e=[...i.catalog],a=null==(m=t.payload.type)?void 0:m.split("-")[1],n=e[a]||{};return n[t.payload.name]=t.payload.value,e.splice(parseInt(a,10),1,n),s=e.reduce(((e,t)=>{const a={...e};return a[t.name]=t.value,a}),{}),{...i,catalog:e,parameters:{...i.parameters,catalog:s}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case lt.parametersSSHTunnelChange:return{...i,ssh_tunnel:{...i.ssh_tunnel,[t.payload.name]:t.payload.value}};case lt.setSSHTunnelLoginMethod:{let e={};var g,v,b;return null!=i&&i.ssh_tunnel&&(e=r()(i.ssh_tunnel,["id","server_address","server_port","username"])),t.payload.login_method===ot.privateKey?{...i,ssh_tunnel:{private_key:null==i||null==(g=i.ssh_tunnel)?void 0:g.private_key,private_key_password:null==i||null==(v=i.ssh_tunnel)?void 0:v.private_key_password,...e}}:t.payload.login_method===ot.password?{...i,ssh_tunnel:{password:null==i||null==(b=i.ssh_tunnel)?void 0:b.password,...e}}:{...i}}case lt.removeSSHTunnelConfig:return{...i,ssh_tunnel:void 0};case lt.addTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case lt.removeTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case lt.editorChange:return{...i,[t.payload.name]:t.payload.json};case lt.queryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case lt.textChange:return{...i,[t.payload.name]:t.payload.value};case lt.fetched:if(u=(null==(l=t.payload)||null==(o=l.parameters)?void 0:o.query)||{},c=Object.entries(u).map((e=>{let[t,a]=e;return`${t}=${a}`})).join("&"),t.payload.masked_encrypted_extra&&t.payload.configuration_method===L.DYNAMIC_FORM){var y;const e=null==(y={...JSON.parse(t.payload.extra||"{}")}.engine_params)?void 0:y.catalog,a=Object.entries(e||{}).map((e=>{let[t,a]=e;return{name:t,value:a}}));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,catalog:a,parameters:{...t.payload.parameters||i.parameters,catalog:e},query_input:c}}return{...t.payload,masked_encrypted_extra:t.payload.masked_encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,parameters:t.payload.parameters||i.parameters,ssh_tunnel:t.payload.ssh_tunnel||i.ssh_tunnel,query_input:c};case lt.dbSelected:return{...t.payload,extra:et,expose_in_sqllab:!0};case lt.configMethodChange:return{...t.payload};case lt.reset:default:return null}}const dt=(0,I.ZP)((e=>{var t,a,n,r,l;let{addDangerToast:i,addSuccessToast:s,onDatabaseAdd:f,onHide:Z,show:x,databaseId:_,dbEngine:w}=e;const[C,S]=(0,c.useReducer)(st,null),{state:{loading:$,resource:N,error:E},fetchResource:U,createResource:T,updateResource:M,clearError:I}=(0,R.LE)("database",(0,d.t)("database"),i,"connection"),[K,j]=(0,c.useState)("1"),[B,J]=(0,R.cb)(),[Q,V,G]=(0,R.h1)(),[ee,ie]=(0,c.useState)(!1),[se,de]=(0,c.useState)(!1),[ue,ge]=(0,c.useState)(""),[ve,be]=(0,c.useState)(!1),[xe,Ce]=(0,c.useState)(!1),[$e,Ne]=(0,c.useState)(!1),[ke,Ee]=(0,c.useState)({}),[Ue,Te]=(0,c.useState)({}),[Me,Ae]=(0,c.useState)({}),[Le,Oe]=(0,c.useState)({}),[Ie,Pe]=(0,c.useState)(!1),[Re,ze]=(0,c.useState)([]),[He,Ke]=(0,c.useState)(!1),[je,Be]=(0,c.useState)(),[Je,Qe]=(0,c.useState)([]),[Ve,Ge]=(0,c.useState)([]),[et,ot]=(0,c.useState)([]),[dt,ut]=(0,c.useState)([]),[ct,pt]=(0,c.useState)({}),ht=null!=(t=We.get("ssh_tunnel.form.switch"))?t:Xe,[mt,gt]=(0,c.useState)(!1);let vt=We.get("databaseconnection.extraOption");vt&&(vt={...vt,onEdit:e=>{pt({...ct,...e})}});const bt=(0,z.c)(),yt=(0,R.rM)(),ft=(0,R.jb)(),Zt=!!_,xt=null==B||null==(a=B.databases)||null==(n=a.find((e=>e.backend===(null==C?void 0:C.engine)||e.engine===(null==C?void 0:C.engine))))||null==(r=n.engine_information)?void 0:r.disable_ssh_tunneling,_t=(0,u.cr)(u.TT.SSH_TUNNELING)&&!xt,wt=ft||!(null==C||!C.engine||!tt[C.engine]),Ct=(null==C?void 0:C.configuration_method)===L.SQLALCHEMY_URI,St=Zt||Ct,$t=Q||E,Nt=(0,p.k6)(),kt=(null==B||null==(l=B.databases)?void 0:l.find((e=>e.engine===(Zt?null==C?void 0:C.backend:null==C?void 0:C.engine))))||{},Et=e=>{if("database"===e)return(0,d.t)("e.g. world_population")},Ut=()=>{S({type:lt.reset}),ie(!1),G(null),I(),be(!1),ze([]),Ke(!1),Be(""),Qe([]),Ge([]),ot([]),ut([]),Ee({}),Te({}),Ae({}),Oe({}),Pe(!1),gt(!1),Z()},Tt=e=>{Nt.push(e)},{state:{alreadyExists:Mt,passwordsNeeded:At,sshPasswordNeeded:Lt,sshPrivateKeyNeeded:Ot,sshPrivateKeyPasswordNeeded:qt,loading:It,failed:Dt},importResource:Pt}=(0,R.PW)("database",(0,d.t)("database"),(e=>{Be(e)})),Ft=(e,t)=>{S({type:e,payload:t})},Rt=async()=>{var e,t;let a;if(null==(e=vt)||e.onSave(ct,C).then((e=>{let{error:t}=e;t&&(a=t,i(t))})),a)return void Ce(!1);const n={...C||{}};if(n.configuration_method===L.DYNAMIC_FORM){var r,l;if(null!=n&&null!=(r=n.parameters)&&r.catalog&&(n.extra=JSON.stringify({...JSON.parse(n.extra||"{}"),engine_params:{catalog:n.parameters.catalog}})),null==n||!n.ssh_tunnel){Ce(!0);const e=await V(n,!0);if(Q&&!o()(Q)||e)return void Ce(!1);Ce(!1)}const e=Zt?null==(l=n.parameters_schema)?void 0:l.properties:null==kt?void 0:kt.parameters.properties,t=JSON.parse(n.masked_encrypted_extra||"{}");Object.keys(e||{}).forEach((a=>{var r,l,o,i;e[a]["x-encrypted-extra"]&&null!=(r=n.parameters)&&r[a]&&("object"==typeof(null==(l=n.parameters)?void 0:l[a])?(t[a]=null==(o=n.parameters)?void 0:o[a],n.parameters[a]=JSON.stringify(n.parameters[a])):t[a]=JSON.parse((null==(i=n.parameters)?void 0:i[a])||"{}"))})),n.masked_encrypted_extra=JSON.stringify(t),n.engine===O.GSheet&&(n.impersonate_user=!0)}if(null!=n&&null!=(t=n.parameters)&&t.catalog&&(n.extra=JSON.stringify({...JSON.parse(n.extra||"{}"),engine_params:{catalog:n.parameters.catalog}})),Ce(!0),null!=C&&C.id){if(await M(C.id,n,n.configuration_method===L.DYNAMIC_FORM)){var u;if(f&&f(),null==(u=vt)||u.onSave(ct,C).then((e=>{let{error:t}=e;t&&(a=t,i(t))})),a)return void Ce(!1);ve||(Ut(),s((0,d.t)("Database settings updated")))}}else if(C){if(await T(n,n.configuration_method===L.DYNAMIC_FORM)){var c;if(ie(!0),f&&f(),null==(c=vt)||c.onSave(ct,C).then((e=>{let{error:t}=e;t&&(a=t,i(t))})),a)return void Ce(!1);St&&(Ut(),s((0,d.t)("Database connected")))}}else{if(Ke(!0),!(Re[0].originFileObj instanceof File))return;await Pt(Re[0].originFileObj,ke,Ue,Me,Le,Ie)&&(f&&f(),Ut(),s((0,d.t)("Database connected")))}de(!0),be(!1),Ce(!1)},zt=e=>{if("Other"===e)S({type:lt.dbSelected,payload:{database_name:e,configuration_method:L.SQLALCHEMY_URI,engine:void 0,engine_information:{supports_file_upload:!0}}});else{const t=null==B?void 0:B.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n,engine_information:r,default_driver:l,sqlalchemy_uri_placeholder:o}=t,i=void 0!==n;S({type:lt.dbSelected,payload:{database_name:e,engine:a,configuration_method:i?L.DYNAMIC_FORM:L.SQLALCHEMY_URI,engine_information:r,driver:l,sqlalchemy_uri_placeholder:o}}),a===O.GSheet&&S({type:lt.addTableCatalogSheet})}},Ht=()=>{N&&U(N.id),de(!1),be(!0)},Kt=()=>{ve&&ie(!1),He&&Ke(!1),Dt&&(Ke(!1),Be(""),Qe([]),Ge([]),ot([]),ut([]),Ee({}),Te({}),Ae({}),Oe({})),S({type:lt.reset}),ze([])},jt=()=>C?!ee||ve?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(fe,{key:"back",onClick:Kt},(0,d.t)("Back")),(0,k.tZ)(fe,{key:"submit",buttonStyle:"primary",onClick:Rt,loading:xe},(0,d.t)("Connect"))):(0,k.tZ)(c.Fragment,null,(0,k.tZ)(fe,{key:"back",onClick:Ht},(0,d.t)("Back")),(0,k.tZ)(fe,{key:"submit",buttonStyle:"primary",onClick:Rt,loading:xe},(0,d.t)("Finish"))):He?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(fe,{key:"back",onClick:Kt},(0,d.t)("Back")),(0,k.tZ)(fe,{key:"submit",buttonStyle:"primary",onClick:Rt,disabled:!!(It||Mt.length&&!Ie||At.length&&"{}"===JSON.stringify(ke)||Lt.length&&"{}"===JSON.stringify(Ue)||Ot.length&&"{}"===JSON.stringify(Me)||qt.length&&"{}"===JSON.stringify(Le)),loading:xe},(0,d.t)("Connect"))):(0,k.tZ)(c.Fragment,null),Bt=(0,c.useRef)(!0);(0,c.useEffect)((()=>{Bt.current?Bt.current=!1:It||Mt.length||At.length||Lt.length||Ot.length||qt.length||xe||Dt||(Ut(),s((0,d.t)("Database connected")))}),[Mt,At,It,Dt,Lt,Ot,qt]),(0,c.useEffect)((()=>{x&&(j("1"),Ce(!0),J()),_&&x&&Zt&&_&&($||U(_).catch((e=>i((0,d.t)("Sorry there was an error fetching database information: %s",e.message)))))}),[x,_]),(0,c.useEffect)((()=>{N&&(S({type:lt.fetched,payload:N}),ge(N.database_name))}),[N]),(0,c.useEffect)((()=>{xe&&Ce(!1),B&&w&&zt(w)}),[B]),(0,c.useEffect)((()=>{He&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[He]),(0,c.useEffect)((()=>{Qe([...At])}),[At]),(0,c.useEffect)((()=>{Ge([...Lt])}),[Lt]),(0,c.useEffect)((()=>{ot([...Ot])}),[Ot]),(0,c.useEffect)((()=>{ut([...qt])}),[qt]),(0,c.useEffect)((()=>{C&&_t&&gt(!o()(null==C?void 0:C.ssh_tunnel))}),[C,_t]);const Jt=()=>je?(0,k.tZ)(re,null,(0,k.tZ)(F.Z,{errorMessage:je,showDbInstallInstructions:Je.length>0})):null,Qt=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";Pe(n.toUpperCase()===(0,d.t)("OVERWRITE"))},Vt=()=>{let e=[];var t;return o()(E)?o()(Q)||"GENERIC_DB_ENGINE_ERROR"!==(null==Q?void 0:Q.error_type)||(e=[(null==Q?void 0:Q.description)||(null==Q?void 0:Q.message)]):e="object"==typeof E?Object.values(E):"string"==typeof E?[E]:[],e.length?(0,k.tZ)(nt,null,(0,k.tZ)(P.Z,{title:(0,d.t)("Database Creation Error"),description:(0,d.t)('We are unable to connect to your database. Click "See more" for database-provided information that may help troubleshoot the issue.'),subtitle:(null==(t=e)?void 0:t[0])||(null==Q?void 0:Q.description),copyText:null==Q?void 0:Q.description})):(0,k.tZ)(c.Fragment,null)},Gt=()=>{Ce(!0),U(null==N?void 0:N.id).then((e=>{(0,h.LS)(h.dR.db,e)}))},Yt=()=>(0,k.tZ)(Ye,{db:C,onSSHTunnelParametersChange:e=>{let{target:t}=e;return Ft(lt.parametersSSHTunnelChange,{type:t.type,name:t.name,value:t.value})},setSSHTunnelLoginMethod:e=>S({type:lt.setSSHTunnelLoginMethod,payload:{login_method:e}})}),Xt=()=>{var e;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(qe,{isEditMode:Zt,db:C,sslForced:!1,dbModel:kt,onAddTableCatalog:()=>{S({type:lt.addTableCatalogSheet})},onQueryChange:e=>{let{target:t}=e;return Ft(lt.queryChange,{name:t.name,value:t.value})},onExtraInputChange:e=>{let{target:t}=e;return Ft(lt.extraInputChange,{name:t.name,value:t.value})},onRemoveTableCatalog:e=>{S({type:lt.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:e=>{let{target:t}=e;return Ft(lt.parametersChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onChange:e=>{let{target:t}=e;return Ft(lt.textChange,{name:t.name,value:t.value})},getValidation:()=>V(C),validationErrors:Q,getPlaceholder:Et,clearValidationErrors:()=>G(null)}),(null==C||null==(e=C.parameters)?void 0:e.ssh)&&(0,k.tZ)(rt,null,Yt()))};if(Re.length>0&&(Mt.length||Je.length||Ve.length||et.length||dt.length))return(0,k.tZ)(b.default,{css:e=>[X,ae(e),le(e),oe(e)],name:"database",onHandledPrimaryAction:Rt,onHide:Ut,primaryButtonName:(0,d.t)("Connect"),width:"500px",centered:!0,show:x,title:(0,k.tZ)("h4",null,(0,d.t)("Connect a database")),footer:jt()},(0,k.tZ)(Fe,{isLoading:xe,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:ee,db:C,dbName:ue,dbModel:kt,fileList:Re}),Je.length||Ve.length||et.length||dt.length?[...new Set([...Je,...Ve,...et,...dt])].map((e=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(re,null,(0,k.tZ)(v.Z,{closable:!1,css:e=>ne(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,d.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(null==Je?void 0:Je.indexOf(e))>=0&&(0,k.tZ)(D.Z,{id:"password_needed",name:"password_needed",required:!0,value:ke[e],onChange:t=>Ee({...ke,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.password_needed,label:(0,d.t)("%s PASSWORD",e.slice(10)),css:te}),(null==Ve?void 0:Ve.indexOf(e))>=0&&(0,k.tZ)(D.Z,{id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:Ue[e],onChange:t=>Te({...Ue,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.ssh_tunnel_password_needed,label:(0,d.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:te}),(null==et?void 0:et.indexOf(e))>=0&&(0,k.tZ)(D.Z,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",required:!0,value:Me[e],onChange:t=>Ae({...Me,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.ssh_tunnel_private_key_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:te}),(null==dt?void 0:dt.indexOf(e))>=0&&(0,k.tZ)(D.Z,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",required:!0,value:Le[e],onChange:t=>Oe({...Le,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.ssh_tunnel_private_key_password_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:te})))):null,Mt.length?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(re,null,(0,k.tZ)(v.Z,{closable:!1,css:e=>(e=>k.iv`
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
`)(e),type:"warning",showIcon:!0,message:"",description:(0,d.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,k.tZ)(D.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==Q?void 0:Q.confirm_overwrite,label:(0,d.t)('Type "%s" to confirm',(0,d.t)("OVERWRITE")),onChange:Qt,css:te})):null,Jt());const Wt=Zt?(e=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(fe,{key:"close",onClick:Ut},(0,d.t)("Close")),(0,k.tZ)(fe,{key:"submit",buttonStyle:"primary",onClick:Rt,disabled:null==e?void 0:e.is_managed_externally,loading:xe,tooltip:null!=e&&e.is_managed_externally?(0,d.t)("This database is managed externally, and can't be edited in Superset"):""},(0,d.t)("Finish"))))(C):jt();return St?(0,k.tZ)(b.default,{css:e=>[Y,X,ae(e),le(e),oe(e)],name:"database",onHandledPrimaryAction:Rt,onHide:Ut,primaryButtonName:Zt?(0,d.t)("Save"):(0,d.t)("Connect"),width:"500px",centered:!0,show:x,title:(0,k.tZ)("h4",null,Zt?(0,d.t)("Edit database"):(0,d.t)("Connect a database")),footer:Wt},(0,k.tZ)(Ze,null,(0,k.tZ)(me,null,(0,k.tZ)(Fe,{isLoading:xe,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:ee,db:C,dbName:ue,dbModel:kt}))),(0,k.tZ)(at,{defaultActiveKey:"1",activeKey:K,onTabClick:e=>j(e),animated:{inkBar:!0,tabPane:!0}},(0,k.tZ)(m.ZP.TabPane,{tab:(0,k.tZ)("span",null,(0,d.t)("Basic")),key:"1"},Ct?(0,k.tZ)(ce,null,(0,k.tZ)(Se,{db:C,onInputChange:e=>{let{target:t}=e;return Ft(lt.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},conf:bt,testConnection:()=>{var e;if(null==C||!C.sqlalchemy_uri)return void i((0,d.t)("Please enter a SQLAlchemy URI to test"));const t={sqlalchemy_uri:(null==C?void 0:C.sqlalchemy_uri)||"",database_name:(null==C||null==(e=C.database_name)?void 0:e.trim())||void 0,impersonate_user:(null==C?void 0:C.impersonate_user)||void 0,extra:null==C?void 0:C.extra,masked_encrypted_extra:(null==C?void 0:C.masked_encrypted_extra)||"",server_cert:(null==C?void 0:C.server_cert)||void 0,ssh_tunnel:(null==C?void 0:C.ssh_tunnel)||void 0};Ne(!0),(0,R.xx)(t,(e=>{Ne(!1),i(e)}),(e=>{Ne(!1),s(e)}))},testInProgress:$e},(0,k.tZ)(ht,{isEditMode:Zt,dbFetched:N,disableSSHTunnelingForEngine:xt,useSSHTunneling:mt,setUseSSHTunneling:gt,setDB:S,isSSHTunneling:_t}),mt&&Yt()),(na=(null==C?void 0:C.backend)||(null==C?void 0:C.engine),void 0!==(null==B||null==(ra=B.databases)||null==(la=ra.find((e=>e.backend===na||e.engine===na)))?void 0:la.parameters)&&!Zt&&(0,k.tZ)("div",{css:e=>W(e)},(0,k.tZ)(y.Z,{buttonStyle:"link",onClick:()=>S({type:lt.configMethodChange,payload:{database_name:null==C?void 0:C.database_name,configuration_method:L.DYNAMIC_FORM,engine:null==C?void 0:C.engine}}),css:e=>(e=>k.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,d.t)("Connect this database using the dynamic form instead")),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):Xt(),!Zt&&(0,k.tZ)(re,null,(0,k.tZ)(v.Z,{closable:!1,css:e=>ne(e),message:(0,d.t)("Additional fields may be required"),showIcon:!0,description:(0,k.tZ)(c.Fragment,null,(0,d.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,k.tZ)("a",{href:De,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,d.t)("here")),"."),type:"info"})),$t&&Vt()),(0,k.tZ)(m.ZP.TabPane,{tab:(0,k.tZ)("span",null,(0,d.t)("Advanced")),key:"2"},(0,k.tZ)(we,{extraExtension:vt,db:C,onInputChange:e=>{let{target:t}=e;return Ft(lt.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onTextChange:e=>{let{target:t}=e;return Ft(lt.textChange,{name:t.name,value:t.value})},onEditorChange:e=>Ft(lt.editorChange,e),onExtraInputChange:e=>{let{target:t}=e;Ft(lt.extraInputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onExtraEditorChange:e=>{Ft(lt.extraEditorChange,e)}})))):(0,k.tZ)(b.default,{css:e=>[X,ae(e),le(e),oe(e)],name:"database",onHandledPrimaryAction:Rt,onHide:Ut,primaryButtonName:ee?(0,d.t)("Finish"):(0,d.t)("Connect"),width:"500px",centered:!0,show:x,title:(0,k.tZ)("h4",null,(0,d.t)("Connect a database")),footer:jt()},!xe&&ee?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Fe,{isLoading:xe,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:ee,db:C,dbName:ue,dbModel:kt,editNewDb:ve}),se&&(0,k.tZ)(it,null,(0,k.tZ)(y.Z,{buttonStyle:"secondary",onClick:()=>{Ce(!0),Gt(),Tt("/dataset/add/")}},(0,d.t)("CREATE DATASET")),(0,k.tZ)(y.Z,{buttonStyle:"secondary",onClick:()=>{Ce(!0),Gt(),Tt("/sqllab?db=true")}},(0,d.t)("QUERY DATA IN SQL LAB"))),ve?Xt():(0,k.tZ)(we,{extraExtension:vt,db:C,onInputChange:e=>{let{target:t}=e;return Ft(lt.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onTextChange:e=>{let{target:t}=e;return Ft(lt.textChange,{name:t.name,value:t.value})},onEditorChange:e=>Ft(lt.editorChange,e),onExtraInputChange:e=>{let{target:t}=e;Ft(lt.extraInputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onExtraEditorChange:e=>Ft(lt.extraEditorChange,e)})):(0,k.tZ)(c.Fragment,null,!xe&&(C?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Fe,{isLoading:xe,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:ee,db:C,dbName:ue,dbModel:kt}),wt&&(()=>{var e,t,a,n,r;const{hostname:l}=window.location;let o=(null==ft||null==(e=ft.REGIONAL_IPS)?void 0:e.default)||"";const i=(null==ft?void 0:ft.REGIONAL_IPS)||{};return Object.entries(i).forEach((e=>{let[t,a]=e;const n=new RegExp(t);l.match(n)&&(o=a)})),(null==C?void 0:C.engine)&&(0,k.tZ)(re,null,(0,k.tZ)(v.Z,{closable:!1,css:e=>ne(e),type:"info",showIcon:!0,message:(null==(t=tt[C.engine])?void 0:t.message)||(null==ft||null==(a=ft.DEFAULT)?void 0:a.message),description:(null==(n=tt[C.engine])?void 0:n.description)||(null==ft||null==(r=ft.DEFAULT)?void 0:r.description)+o}))})(),Xt(),(0,k.tZ)("div",{css:e=>W(e)},kt.engine!==O.GSheet&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(y.Z,{buttonStyle:"link",onClick:()=>S({type:lt.configMethodChange,payload:{engine:C.engine,configuration_method:L.SQLALCHEMY_URI,database_name:C.database_name}}),css:pe},(0,d.t)("Connect this database with a SQLAlchemy URI string instead")),(0,k.tZ)(q.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),$t&&Vt()):(0,k.tZ)(ye,null,(0,k.tZ)(Fe,{isLoading:xe,isEditMode:Zt,useSqlAlchemyForm:Ct,hasConnectedDb:ee,db:C,dbName:ue,dbModel:kt}),(0,k.tZ)("div",{className:"preferred"},null==B||null==(aa=B.databases)?void 0:aa.filter((e=>e.preferred)).map((e=>(0,k.tZ)(A,{className:"preferred-item",onClick:()=>zt(e.name),buttonText:e.name,icon:null==yt?void 0:yt[e.engine],key:`${e.name}`})))),(0,k.tZ)("div",{className:"available"},(0,k.tZ)("h4",{className:"available-label"},(0,d.t)("Or choose from a list of other databases we support:")),(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Supported databases")),(0,k.tZ)(g.IZ,{className:"available-select",onChange:zt,placeholder:(0,d.t)("Choose a database..."),showSearch:!0},null==(ea=[...(null==B?void 0:B.databases)||[]])?void 0:ea.sort(((e,t)=>e.name.localeCompare(t.name))).map(((e,t)=>(0,k.tZ)(g.IZ.Option,{value:e.name,key:`database-${t}`},e.name))),(0,k.tZ)(g.IZ.Option,{value:"Other",key:"Other"},(0,d.t)("Other"))),(0,k.tZ)(v.Z,{showIcon:!0,closable:!1,css:e=>ne(e),type:"info",message:(null==ft||null==(ta=ft.ADD_DATABASE)?void 0:ta.message)||(0,d.t)("Want to add a new database?"),description:null!=ft&&ft.ADD_DATABASE?(0,k.tZ)(c.Fragment,null,(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,k.tZ)("a",{href:null==ft?void 0:ft.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==ft?void 0:ft.ADD_DATABASE.contact_description_link)," ",null==ft?void 0:ft.ADD_DATABASE.description):(0,k.tZ)(c.Fragment,null,(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,k.tZ)("a",{href:De,target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),".")})),(0,k.tZ)(_e,null,(0,k.tZ)(g.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{Be(""),Qe([]),Ge([]),ot([]),ut([]),Ee({}),Te({}),Ae({}),Oe({}),Ke(!0),ze([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await Pt(e.file.originFileObj,ke,Ue,Me,Le,Ie)&&(null==f||f())},onRemove:e=>(ze(Re.filter((t=>t.uid!==e.uid))),!1)},(0,k.tZ)(y.Z,{buttonStyle:"link",type:"link",css:he},(0,d.t)("Import database from file")))),Jt()))),xe&&(0,k.tZ)(H.Z,null));var ea,ta,aa,na,ra,la}))},18451:(e,t,a)=>{a.d(t,{c:()=>r});var n=a(28216);function r(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},85198:(e,t,a)=>{a.d(t,{Z:()=>ne});var n=a(73126),r=a(23279),l=a.n(r),o=a(67294),i=a(51995),s=a(11965),d=a(23525),u=a(4715),c=a(83862),p=a(58593),h=a(16550),m=a(73727),g=a(85931),v=a(70707),b=a(29147),y=a(27600),f=a(41609),Z=a.n(f),x=a(15926),_=a.n(x),w=a(28216),C=a(35755),S=a(75049),$=a(61988),N=a(31069),k=a(37921),E=a(12617),U=a(22318),T=a(1315),M=a(40768);const{SubMenu:A}=c.MainNav,L=i.iK.div`
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
`,O=i.iK.i`
  margin-top: 2px;
`;function q(e){const{locale:t,languages:a,...r}=e;return(0,s.tZ)(A,(0,n.Z)({"aria-label":"Languages",title:(0,s.tZ)("div",{className:"f16"},(0,s.tZ)(O,{className:`flag ${a[t].flag}`})),icon:(0,s.tZ)(v.Z.TriangleDown,null)},r),Object.keys(a).map((e=>(0,s.tZ)(c.MainNav.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,s.tZ)(L,{className:"f16"},(0,s.tZ)("i",{className:`flag ${a[e].flag}`}),(0,s.tZ)("a",{href:a[e].url},a[e].name))))))}var I=a(39589);const D=(0,S.I)(),P=e=>s.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,F=i.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
`,R=e=>s.iv`
  color: ${e.colors.grayscale.light1};
  .ant-menu-item-active {
    color: ${e.colors.grayscale.light1};
    cursor: default;
  }
`,z=i.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${e=>{let{align:t}=e;return t}};
  align-items: center;
  margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  .ant-menu-submenu-title > svg {
    top: ${e=>{let{theme:t}=e;return 5.25*t.gridUnit}}px;
  }
`,H=i.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,K=i.iK.a`
  padding-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,j=e=>s.iv`
  color: ${e.colors.grayscale.light5};
`,B=e=>s.iv`
  &:hover {
    color: ${e.colors.primary.base} !important;
    cursor: pointer !important;
  }
`,{SubMenu:J}=c.MainNav,Q=e=>{let{align:t,settings:a,navbarRight:n,isFrontendRoute:r,environmentTag:l,setQuery:d}=e;const u=(0,w.v9)((e=>e.user)),h=(0,w.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),g=u||{},{roles:b}=g,{CSV_EXTENSIONS:y,COLUMNAR_EXTENSIONS:f,EXCEL_EXTENSIONS:x,ALLOWED_EXTENSIONS:C,HAS_GSHEETS_INSTALLED:S}=(0,w.v9)((e=>e.common.conf)),[A,L]=(0,o.useState)(!1),[O,Q]=(0,o.useState)(""),V=(0,E.R)("can_sqllab","Superset",b),G=(0,E.R)("can_write","Dashboard",b),Y=(0,E.R)("can_write","Chart",b),X=(0,E.R)("can_write","Database",b),W=(0,E.R)("can_write","Dataset",b),{canUploadData:ee,canUploadCSV:te,canUploadColumnar:ae,canUploadExcel:ne}=(0,M.Mc)(b,y,f,x,C),re=V||Y||G,[le,oe]=(0,o.useState)(!1),[ie,se]=(0,o.useState)(!1),de=(0,U.i5)(u),ue=le||de,ce=[{label:(0,$.t)("Data"),icon:"fa-database",childs:[{label:(0,$.t)("Connect database"),name:I.Z.DB_CONNECTION,perm:X&&!ie},{label:(0,$.t)("Create dataset"),name:I.Z.DATASET_CREATION,url:"/dataset/add/",perm:W&&ie},{label:(0,$.t)("Connect Google Sheet"),name:I.Z.GOOGLE_SHEETS,perm:X&&S},{label:(0,$.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:te&&ue,disable:de&&!le},{label:(0,$.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:ae&&ue,disable:de&&!le},{label:(0,$.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:ne&&ue,disable:de&&!le}]},{label:(0,$.t)("SQL query"),url:"/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,$.t)("Chart"),url:Number.isInteger(h)?`/chart/add?dashboard_id=${h}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,$.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],pe=()=>{N.Z.get({endpoint:`/api/v1/database/?q=${_().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((e=>{var t;let{json:a}=e;const n=(null==a||null==(t=a.result)?void 0:t.filter((e=>{var t;return null==e||null==(t=e.engine_information)?void 0:t.supports_file_upload})))||[];oe((null==n?void 0:n.length)>=1)}))},he=()=>{N.Z.get({endpoint:`/api/v1/database/?q=${_().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then((e=>{let{json:t}=e;se(t.count>=1)}))};(0,o.useEffect)((()=>{ee&&pe()}),[ee]),(0,o.useEffect)((()=>{(X||W)&&he()}),[X,W]);const me=e=>(0,s.tZ)(o.Fragment,null,(0,s.tZ)("i",{className:`fa ${e.icon}`}),e.label),ge=(0,$.t)("Enable 'Allow file uploads to database' in any database's settings"),ve=D.get("navbar.right"),be=D.get("navbar.right-menu.item.icon"),ye=(0,i.Fg)();return(0,s.tZ)(z,{align:t},X&&(0,s.tZ)(T.ZP,{onHide:()=>{Q(""),L(!1)},show:A,dbEngine:O,onDatabaseAdd:()=>d({databaseAdded:!0})}),(null==l?void 0:l.text)&&(0,s.tZ)(k.Z,{css:(0,s.iv)({borderRadius:125*ye.gridUnit+"px"},"",""),color:/^#(?:[0-9a-f]{3}){1,2}$/i.test(l.color)?l.color:l.color.split(".").reduce(((e,t)=>e[t]),ye.colors)},(0,s.tZ)("span",{css:j},l.text)),(0,s.tZ)(c.MainNav,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===I.Z.DB_CONNECTION?L(!0):e.key===I.Z.GOOGLE_SHEETS&&(L(!0),Q("Google Sheets"))},onOpenChange:e=>(e.length>1&&!Z()(null==e?void 0:e.filter((e=>{var t;return e.includes(`sub2_${null==ce||null==(t=ce[0])?void 0:t.label}`)})))&&(ee&&pe(),(X||W)&&he()),null)},ve&&(0,s.tZ)(ve,null),!n.user_is_anonymous&&re&&(0,s.tZ)(J,{title:(0,s.tZ)(F,{className:"fa fa-plus"}),icon:(0,s.tZ)(v.Z.TriangleDown,null)},null==ce||null==ce.map?void 0:ce.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){var n;if(a)return(0,s.tZ)(J,{key:`sub2_${e.label}`,className:"data-menu",title:me(e)},null==e||null==(n=e.childs)||null==n.map?void 0:n.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,s.tZ)(o.Fragment,{key:e.name},3===t&&(0,s.tZ)(c.MainNav.Divider,null),(e=>e.disable?(0,s.tZ)(c.MainNav.Item,{key:e.name,css:R},(0,s.tZ)(p.u,{placement:"top",title:ge},e.label)):(0,s.tZ)(c.MainNav.Item,{key:e.name,css:B},e.url?(0,s.tZ)("a",{href:e.url}," ",e.label," "):e.label))(e)):null)));if(!e.url)return null}return(0,E.R)(e.perm,e.view,b)&&(0,s.tZ)(c.MainNav.Item,{key:e.label},r(e.url)?(0,s.tZ)(m.rU,{to:e.url||""},(0,s.tZ)("i",{className:`fa ${e.icon}`})," ",e.label):(0,s.tZ)("a",{href:e.url},(0,s.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))}))),(0,s.tZ)(J,{title:(0,$.t)("Settings"),icon:(0,s.tZ)(v.Z.TriangleDown,{iconSize:"xl"})},null==a||null==a.map?void 0:a.map(((e,t)=>{var n;return[(0,s.tZ)(c.MainNav.ItemGroup,{key:`${e.label}`,title:e.label},null==e||null==(n=e.childs)||null==n.map?void 0:n.map((e=>{if("string"!=typeof e){const t=be?(0,s.tZ)(H,null,e.label,(0,s.tZ)(be,{menuChild:e})):e.label;return(0,s.tZ)(c.MainNav.Item,{key:`${e.label}`},r(e.url)?(0,s.tZ)(m.rU,{to:e.url||""},t):(0,s.tZ)("a",{href:e.url},t))}return null}))),t<a.length-1&&(0,s.tZ)(c.MainNav.Divider,{key:`divider_${t}`})]})),!n.user_is_anonymous&&[(0,s.tZ)(c.MainNav.Divider,{key:"user-divider"}),(0,s.tZ)(c.MainNav.ItemGroup,{key:"user-section",title:(0,$.t)("User")},n.user_profile_url&&(0,s.tZ)(c.MainNav.Item,{key:"profile"},(0,s.tZ)(m.rU,{to:n.user_profile_url},(0,$.t)("Profile"))),n.user_info_url&&(0,s.tZ)(c.MainNav.Item,{key:"info"},(0,s.tZ)("a",{href:n.user_info_url},(0,$.t)("Info"))),(0,s.tZ)(c.MainNav.Item,{key:"logout"},(0,s.tZ)("a",{href:n.user_logout_url},(0,$.t)("Logout"))))],(n.version_string||n.version_sha)&&[(0,s.tZ)(c.MainNav.Divider,{key:"version-info-divider"}),(0,s.tZ)(c.MainNav.ItemGroup,{key:"about-section",title:(0,$.t)("About")},(0,s.tZ)("div",{className:"about-section"},n.show_watermark&&(0,s.tZ)("div",{css:P},(0,$.t)("Powered by Apache Superset")),n.version_string&&(0,s.tZ)("div",{css:P},(0,$.t)("Version"),": ",n.version_string),n.version_sha&&(0,s.tZ)("div",{css:P},(0,$.t)("SHA"),": ",n.version_sha),n.build_number&&(0,s.tZ)("div",{css:P},(0,$.t)("Build"),": ",n.build_number)))]),n.show_language_picker&&(0,s.tZ)(q,{locale:n.locale,languages:n.languages})),n.documentation_url&&(0,s.tZ)(o.Fragment,null,(0,s.tZ)(K,{href:n.documentation_url,target:"_blank",rel:"noreferrer",title:n.documentation_text||(0,$.t)("Documentation")},n.documentation_icon?(0,s.tZ)("i",{className:n.documentation_icon}):(0,s.tZ)("i",{className:"fa fa-question"})),(0,s.tZ)("span",null," ")),n.bug_report_url&&(0,s.tZ)(o.Fragment,null,(0,s.tZ)(K,{href:n.bug_report_url,target:"_blank",rel:"noreferrer",title:n.bug_report_text||(0,$.t)("Report a bug")},n.bug_report_icon?(0,s.tZ)("i",{className:n.bug_report_icon}):(0,s.tZ)("i",{className:"fa fa-bug"})),(0,s.tZ)("span",null," ")),n.user_is_anonymous&&(0,s.tZ)(K,{href:n.user_login_url},(0,s.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,$.t)("Login")))},V=e=>{const[,t]=(0,C.Kx)({databaseAdded:C.dJ,datasetAdded:C.dJ});return(0,s.tZ)(Q,(0,n.Z)({setQuery:t},e))};class G extends o.PureComponent{constructor(){super(...arguments),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,s.tZ)(Q,(0,n.Z)({setQuery:this.noop},this.props)):this.props.children}}const Y=e=>(0,s.tZ)(G,e,(0,s.tZ)(V,e)),X=i.iK.header`
  ${e=>{let{theme:t}=e;return`\n      background-color: ${t.colors.grayscale.light5};\n      margin-bottom: 2px;\n      z-index: 10;\n\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${t.gridUnit}px\n          ${2*t.gridUnit}px\n          ${t.gridUnit}px\n          ${4*t.gridUnit}px;\n        max-width: ${t.gridUnit*t.brandIconMaxWidth}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${t.colors.grayscale.light2};\n        border-right: 1px solid ${t.colors.grayscale.light2};\n        height: 100%;\n        color: ${t.colors.grayscale.dark1};\n        padding-left: ${4*t.gridUnit}px;\n        padding-right: ${4*t.gridUnit}px;\n        margin-right: ${6*t.gridUnit}px;\n        font-size: ${4*t.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*t.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*t.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*t.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*t.gridUnit}px 0\n            ${3*t.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-of-type(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${t.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${t.colors.grayscale.dark1};\n          background-color: ${t.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}}
`,W=e=>s.iv`
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
  .ant-menu-item-selected {
    background-color: transparent;
    &:not(.ant-menu-item-active) {
      color: inherit;
      border-bottom-color: transparent;
      & > a {
        color: inherit;
      }
    }
  }
  .ant-menu-horizontal > .ant-menu-item:has(> .is-active) {
    color: ${e.colors.primary.base};
    border-bottom-color: ${e.colors.primary.base};
    & > a {
      color: ${e.colors.primary.base};
    }
  }
  .ant-menu-vertical > .ant-menu-item:has(> .is-active) {
    background-color: ${e.colors.primary.light5};
    & > a {
      color: ${e.colors.primary.base};
    }
  }
`,{SubMenu:ee}=c.MainNav,{useBreakpoint:te}=u.Grid;function ae(e){let{data:{menu:t,brand:a,navbar_right:n,settings:r,environment_tag:f},isFrontendRoute:Z=(()=>!1)}=e;const[x,_]=(0,o.useState)("horizontal"),w=te(),C=(0,b.fG)(),S=(0,i.Fg)();let $;(0,o.useEffect)((()=>{function e(){window.innerWidth<=767?_("inline"):_("horizontal")}e();const t=l()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),function(e){e.EXPLORE="/explore",e.DASHBOARD="/dashboard",e.CHART="/chart",e.DATASETS="/tablemodelview"}($||($={}));const N=[],[k,E]=(0,o.useState)(N),U=(0,h.TH)();return(0,o.useEffect)((()=>{const e=U.pathname;switch(!0){case e.startsWith($.DASHBOARD):E(["Dashboards"]);break;case e.startsWith($.CHART)||e.startsWith($.EXPLORE):E(["Charts"]);break;case e.startsWith($.DATASETS):E(["Datasets"]);break;default:E(N)}}),[U.pathname]),(0,d.eY)(y.KD.standalone)||C.hideNav?(0,s.tZ)(o.Fragment,null):(0,s.tZ)(X,{className:"top",id:"main-menu",role:"navigation"},(0,s.tZ)(s.xB,{styles:W(S)}),(0,s.tZ)(u.X2,null,(0,s.tZ)(u.JX,{md:16,xs:24},(0,s.tZ)(p.u,{id:"brand-tooltip",placement:"bottomLeft",title:a.tooltip,arrowPointAtCenter:!0},Z(window.location.pathname)?(0,s.tZ)(g.m,{className:"navbar-brand",to:a.path},(0,s.tZ)("img",{src:a.icon,alt:a.alt})):(0,s.tZ)("a",{className:"navbar-brand",href:a.path},(0,s.tZ)("img",{src:a.icon,alt:a.alt}))),a.text&&(0,s.tZ)("div",{className:"navbar-brand-text"},(0,s.tZ)("span",null,a.text)),(0,s.tZ)(c.MainNav,{mode:x,className:"main-nav",selectedKeys:k},t.map(((e,t)=>{var a;return(e=>{let{label:t,childs:a,url:n,index:r,isFrontendRoute:l}=e;return n&&l?(0,s.tZ)(c.MainNav.Item,{key:t,role:"presentation"},(0,s.tZ)(m.OL,{role:"button",to:n,activeClassName:"is-active"},t)):n?(0,s.tZ)(c.MainNav.Item,{key:t},(0,s.tZ)("a",{href:n},t)):(0,s.tZ)(ee,{key:r,title:t,icon:"inline"===x?(0,s.tZ)(o.Fragment,null):(0,s.tZ)(v.Z.TriangleDown,null)},null==a?void 0:a.map(((e,a)=>"string"==typeof e&&"-"===e&&"Data"!==t?(0,s.tZ)(c.MainNav.Divider,{key:`$${a}`}):"string"!=typeof e?(0,s.tZ)(c.MainNav.Item,{key:`${e.label}`},e.isFrontendRoute?(0,s.tZ)(m.OL,{to:e.url||"",exact:!0,activeClassName:"is-active"},e.label):(0,s.tZ)("a",{href:e.url},e.label)):null)))})({index:t,...e,isFrontendRoute:Z(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:Z(e.url)}))})})))),(0,s.tZ)(u.JX,{md:8,xs:24},(0,s.tZ)(Y,{align:w.md?"flex-end":"flex-start",settings:r,navbarRight:n,isFrontendRoute:Z,environmentTag:f}))))}function ne(e){let{data:t,...a}=e;const r={...t},l={Data:!0,Security:!0,Manage:!0},o=[],i=[];return r.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),l.hasOwnProperty(e.name)?i.push(a):o.push(a)})),r.menu=o,r.settings=i,(0,s.tZ)(ae,(0,n.Z)({data:r},a))}}}]);
//# sourceMappingURL=5198.cfaf799524eba928fef7.entry.js.map