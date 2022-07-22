"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6052],{49576:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),o=a(51995),l=a(70163),i=a(11965);const r=o.iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,o.iK)(l.Z.CheckboxHalf)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,d=(0,o.iK)(l.Z.CheckboxOff)`
  color: ${({theme:e})=>e.colors.grayscale.base};
  cursor: pointer;
`,c=(0,o.iK)(l.Z.CheckboxOn)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,p=o.iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,u=o.iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,h=(0,n.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:o,title:l="",labelText:h=""},m)=>{const g=(0,n.useRef)(),b=m||g;return(0,n.useEffect)((()=>{b.current.indeterminate=e}),[b,e]),(0,i.tZ)(n.Fragment,null,(0,i.tZ)(u,null,e&&(0,i.tZ)(s,null),!e&&a&&(0,i.tZ)(c,null),!e&&!a&&(0,i.tZ)(d,null),(0,i.tZ)(p,{name:t,id:t,type:"checkbox",ref:b,checked:a,onChange:o})),(0,i.tZ)(r,{title:l,htmlFor:t},h))}))},6238:(e,t,a)=>{a.d(t,{Z:()=>De});var n=a(61988),o=a(93185),l=a(67294),i=a(40637),r=a(4715),s=a(29487),d=a(74069),c=a(35932),p=a(51995),u=a(70163);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}const m={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},g=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function b(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const v={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},y=Object.keys(v);class f extends l.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(m).forEach((t=>{e.style[t]=m[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);g.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,o={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(o,e.onReflow.bind(this,o))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,o=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>o&&(n++,e.push(a),o=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const o=this.canvas.lastElementChild;let l=b(o,2);for(;l&&(o.offsetTop>n||o.offsetHeight>l.offsetHeight||o.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=b(o,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:o,trimRight:i,className:r}=a,s=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(a,["component","ellipsis","trimRight","className"]);return l.createElement(n,h({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(s,y)),t&&i?e.replace(/[\s\uFEFF\xA0]+$/,""):e,l.createElement("wbr",null),t&&l.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}f.defaultProps=v;const Z=f;var x=a(11965);const _=(0,p.iK)(c.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,C=p.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  height: ${({theme:e})=>18*e.gridUnit}px;
  margin: ${({theme:e})=>3*e.gridUnit}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${({theme:e})=>10*e.gridUnit}px;
    height: ${({theme:e})=>10*e.gridUnit}px;
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
`,w=p.iK.div`
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
`,$=p.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px 0;
  border-radius: 0 0 ${({theme:e})=>e.borderRadius}px
    ${({theme:e})=>e.borderRadius}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,N=(0,p.iK)((({icon:e,altText:t,buttonText:a,...n})=>(0,x.tZ)(_,n,(0,x.tZ)(C,null,e&&(0,x.tZ)("img",{src:e,alt:t}),!e&&(0,x.tZ)(u.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,x.tZ)($,null,(0,x.tZ)(w,null,(0,x.tZ)(Z,{text:a,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
  text-transform: none;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    box-shadow: 4px 4px 20px ${({theme:e})=>e.colors.grayscale.light2};
  }
`;var S,E=a(8272),k=a(14114),U=a(34858),T=a(1483);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(S||(S={}));var A=a(38703),O=a(94184),L=a.n(O),M=a(49576),I=a(43700),D=a(94670);const R=x.iv`
  margin-bottom: 0;
`,P=p.iK.header`
  border-bottom: ${({theme:e})=>`${.25*e.gridUnit}px solid\n    ${e.colors.grayscale.light2};`}
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  line-height: ${({theme:e})=>6*e.gridUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin: 0;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.gridUnit}px;
    }
  }
`,q=x.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,F=x.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,j=e=>x.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,z=e=>x.iv`
  padding-left: ${2*e.gridUnit}px;
`,B=e=>x.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,H=e=>x.iv`
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
`,K=e=>x.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.s+1}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,Q=p.iK.div`
  ${({theme:e})=>x.iv`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,V=e=>x.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.s+1}px;
    font-weight: ${e.typography.weights.bold};
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
`,G=e=>x.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s-1}px;
    text-align: left;
  }
`,J=e=>x.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
        margin-bottom: ${10*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s-1}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s-1}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 475px;
  }
`,Y=e=>x.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s-1}px;
    margin-bottom: 0;
  }
`,W=p.iK.div`
  ${({theme:e})=>x.iv`
    margin-bottom: ${6*e.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.gridUnit}px;
    }

    .control-label {
      color: ${e.colors.grayscale.dark1};
      font-size: ${e.typography.sizes.s-1}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.gridUnit}px;
        margin-top: ${.75*e.gridUnit}px;
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
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
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${102}px;
        padding-right: ${5*e.gridUnit}px;
      }
    }
  `}
`,X=(0,p.iK)(D.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,ee=p.iK.div`
  padding-top: ${({theme:e})=>e.gridUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.gridUnit}px;
    &.open {
      height: ${255}px;
      &.ctas-open {
        height: ${357}px;
      }
    }
  }
`,te=p.iK.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,ae=e=>x.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ne=p.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin: 0px;
  }
`,oe=(p.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,p.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,p.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  text-transform: uppercase;
`),le=p.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,ie=p.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.gridUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>7*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }

  .input-container {
    .input-upload {
      display: none;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${({theme:e})=>32*e.gridUnit}px
    }
  }`,re=p.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.gridUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.gridUnit}px;
    .available-label {
      font-size: ${({theme:e})=>1.1*e.typography.sizes.l}px;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      margin: ${({theme:e})=>6*e.gridUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,se=(0,p.iK)(c.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,de=p.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
`,ce=p.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>1.1*e.typography.sizes.l}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin: ${({theme:e})=>10*e.gridUnit}px 0 16px;
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

  .catalog-delete {
    align-self: center;
    background: ${({theme:e})=>e.colors.grayscale.light4};
    margin: 5px 5px 8px 5px;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,pe=({db:e,onInputChange:t,onTextChange:a,onEditorChange:o,onExtraInputChange:l,onExtraEditorChange:i})=>{var r,s,d,c,p,u,h,m,g,b,v,y;const f=!(null==e||!e.expose_in_sqllab),Z=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas);return(0,x.tZ)(I.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>x.iv`
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
`)(e)},(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"SQL Lab"),(0,x.tZ)("p",{className:"helper"},"Adjust how this database will interact with SQL Lab.")),key:"1"},(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,n.t)("Expose database in SQL Lab")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Allow this database to be queried in SQL Lab")})),(0,x.tZ)(ee,{className:L()("expandable",{open:f,"ctas-open":Z})},(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,n.t)("Allow CREATE TABLE AS")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Allow creation of new tables based on queries")}))),(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,n.t)("Allow CREATE VIEW AS")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Allow creation of new views based on queries")})),(0,x.tZ)(W,{className:L()("expandable",{open:Z})},(0,x.tZ)("div",{className:"control-label"},(0,n.t)("CTAS & CVAS SCHEMA")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"force_ctas_schema",value:(null==e?void 0:e.force_ctas_schema)||"",placeholder:(0,n.t)("Create or select schema..."),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,n.t)("Allow DML")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allow_multi_schema_metadata_fetch",indeterminate:!1,checked:!(null==e||!e.allow_multi_schema_metadata_fetch),onChange:t,labelText:(0,n.t)("Allow Multi Schema Metadata Fetch")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.")}))),(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==e||null==(r=e.extra_json)||!r.cost_estimate_enabled),onChange:l,labelText:(0,n.t)("Enable query cost estimation")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("For Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,x.tZ)(W,{css:R},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==e||null==(s=e.extra_json)||!s.allows_virtual_table_explore),onChange:l,labelText:(0,n.t)("Allow this database to be explored")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==e||null==(d=e.extra_json)||!d.disable_data_preview),onChange:l,labelText:(0,n.t)("Disable SQL Lab data preview queries")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})))))),(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"Performance"),(0,x.tZ)("p",{className:"helper"},"Adjust performance settings of this database.")),key:"2"},(0,x.tZ)(W,{className:"mb-8"},(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Chart cache timeout")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,n.t)("Enter duration in seconds"),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Schema cache timeout")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==e||null==(c=e.extra_json)||null==(p=c.metadata_cache_timeout)?void 0:p.schema_cache_timeout)||"",placeholder:(0,n.t)("Enter duration in seconds"),onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Table cache timeout")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==e||null==(u=e.extra_json)||null==(h=u.metadata_cache_timeout)?void 0:h.table_cache_timeout)||"",placeholder:(0,n.t)("Enter duration in seconds"),onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,x.tZ)(W,{css:(0,x.iv)({no_margin_bottom:R},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:(0,n.t)("Asynchronous query execution")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,x.tZ)(W,{css:(0,x.iv)({no_margin_bottom:R},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==e||null==(m=e.extra_json)||!m.cancel_query_on_windows_unload),onChange:l,labelText:(0,n.t)("Cancel query on window unload event")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"Security"),(0,x.tZ)("p",{className:"helper"},"Add extra connection information.")),key:"3"},(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Secure extra")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(X,{name:"encrypted_extra",value:(null==e?void 0:e.encrypted_extra)||"",placeholder:(0,n.t)("Secure extra"),onChange:e=>o({json:e,name:"encrypted_extra"}),width:"100%",height:"160px"})),(0,x.tZ)("div",{className:"helper"},(0,x.tZ)("div",null,(0,n.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Root certificate")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,n.t)("Enter CA_BUNDLE"),onChange:a})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Schemas allowed for CSV upload")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==e||null==(g=e.extra_json)?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("A comma-separated list of schemas that CSVs are allowed to upload to."))),(0,x.tZ)(W,{css:(0,x.iv)({no_margin_bottom:R},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,n.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),(0,x.tZ)(W,{css:(0,x.iv)({...R},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(M.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,n.t)("Allow data upload")}),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("If selected, please set the schemas allowed for data upload in Extra.")})))),(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"Other"),(0,x.tZ)("p",{className:"helper"},"Additional settings.")),key:"4"},(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Metadata Parameters")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(X,{name:"metadata_params",value:(null==e||null==(b=e.extra_json)?void 0:b.metadata_params)||"",placeholder:(0,n.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px"})),(0,x.tZ)("div",{className:"helper"},(0,x.tZ)("div",null,(0,n.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Engine Parameters")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(X,{name:"engine_params",value:(null==e||null==(v=e.extra_json)?void 0:v.engine_params)||"",placeholder:(0,n.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px"})),(0,x.tZ)("div",{className:"helper"},(0,x.tZ)("div",null,(0,n.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Version")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"version",value:(null==e||null==(y=e.extra_json)?void 0:y.version)||"",placeholder:(0,n.t)("Version number"),onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Specify the database version. This should be used with Presto in order to enable query cost estimation.")))))};var ue=a(8911);const he=({db:e,onInputChange:t,testConnection:a,conf:o,isEditMode:i=!1,testInProgress:r=!1})=>{let s,d;var p,u;return ue.Z&&(s=null==(p=ue.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:p.SQLALCHEMY_DOCS_URL,d=null==(u=ue.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:u.SQLALCHEMY_DOCS_URL),(0,x.tZ)(l.Fragment,null,(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Display Name"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:(0,n.t)("Name your database"),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Pick a name to help you identify this database."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,n.t)("SQLAlchemy URI"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(0,n.t)("dialect+driver://username:password@host:port/database"),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,n.t)("Refer to the")," ",(0,x.tZ)("a",{href:s||(null==o?void 0:o.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},d||(null==o?void 0:o.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,n.t)("for more information on how to structure your URI."))),(0,x.tZ)(c.Z,{onClick:a,disabled:r,cta:!0,buttonStyle:"link",css:e=>(e=>x.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,n.t)("Test connection")))};var me=a(87858);const ge={account:{helpText:(0,n.t)("Copy the account name of that database you are trying to connect to."),placeholder:"e.g. world_population"},warehouse:{placeholder:"e.g. compute_wh",className:"form-group-w-50"},role:{placeholder:"e.g. AccountAdmin",className:"form-group-w-50"}},be=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o,field:l})=>{var i;return(0,x.tZ)(me.Z,{id:l,name:l,required:e,value:null==o||null==(i=o.parameters)?void 0:i[l],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[l],placeholder:ge[l].placeholder,helpText:ge[l].helpText,label:l,onChange:t.onParametersChange,className:ge[l].className||l})};var ve,ye=a(2857),fe=a(93695);!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(ve||(ve={}));const Ze={gsheets:"service_account_info",bigquery:"credentials_info"};var xe={name:"s5xdrg",styles:"display:flex;align-items:center"};const _e=({changeMethods:e,isEditMode:t,db:a,editNewDb:o})=>{var i,s,d;const[c,p]=(0,l.useState)(ve.jsonUpload.valueOf()),[u,h]=(0,l.useState)(null),[m,g]=(0,l.useState)(!0),b="gsheets"===(null==a?void 0:a.engine)?!t&&!m:!t,v=t&&"{}"!==(null==a?void 0:a.encrypted_extra),y=(null==a?void 0:a.engine)&&Ze[a.engine],f="object"==typeof(null==a||null==(i=a.parameters)?void 0:i[y])?JSON.stringify(null==a||null==(s=a.parameters)?void 0:s[y]):null==a||null==(d=a.parameters)?void 0:d[y];return(0,x.tZ)(ie,null,"gsheets"===(null==a?void 0:a.engine)&&(0,x.tZ)("div",{className:"catalog-type-select"},(0,x.tZ)(ye.Z,{css:e=>(e=>x.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,n.t)("Type of Google Sheets allowed")),(0,x.tZ)(r.IZ,{style:{width:"100%"},defaultValue:v?"false":"true",onChange:e=>g("true"===e)},(0,x.tZ)(r.IZ.Option,{value:"true",key:1},(0,n.t)("Publicly shared sheets only")),(0,x.tZ)(r.IZ.Option,{value:"false",key:2},(0,n.t)("Public and privately shared sheets")))),b&&(0,x.tZ)(l.Fragment,null,(0,x.tZ)(ye.Z,{required:!0},(0,n.t)("How do you want to enter service account credentials?")),(0,x.tZ)(r.IZ,{defaultValue:c,style:{width:"100%"},onChange:e=>p(e)},(0,x.tZ)(r.IZ.Option,{value:ve.jsonUpload},(0,n.t)("Upload JSON file")),(0,x.tZ)(r.IZ.Option,{value:ve.copyPaste},(0,n.t)("Copy and Paste JSON credentials")))),c===ve.copyPaste||t||o?(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(ye.Z,{required:!0},(0,n.t)("Service Account")),(0,x.tZ)("textarea",{className:"input-form",name:y,value:f,onChange:e.onParametersChange,placeholder:"Paste content of service credentials JSON file here"}),(0,x.tZ)("span",{className:"label-paste"},(0,n.t)("Copy and paste the entire service account .json file here"))):b&&(0,x.tZ)("div",{className:"input-container",css:e=>j(e)},(0,x.tZ)("div",{css:xe},(0,x.tZ)(ye.Z,{required:!0},(0,n.t)("Upload Credentials")),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!u&&(0,x.tZ)(r.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,n.t)("Choose File")),u&&(0,x.tZ)("div",{className:"input-upload-current"},u,(0,x.tZ)(fe.Z,{onClick:()=>{h(null),e.onParametersChange({target:{name:y,value:""}})}})),(0,x.tZ)("input",{id:"selectedFile",className:"input-upload",type:"file",onChange:async t=>{var a,n;let o;t.target.files&&(o=t.target.files[0]),h(null==(a=o)?void 0:a.name),e.onParametersChange({target:{type:null,name:y,value:await(null==(n=o)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var Ce=a(54549);const we=["host","port","database","username","password","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role"],$e={host:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>{var i;return(0,x.tZ)(me.Z,{id:"host",name:"host",value:null==l||null==(i=l.parameters)?void 0:i.host,required:e,hasTooltip:!0,tooltipText:(0,n.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.host,placeholder:(0,n.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,n.t)("Host"),onChange:t.onParametersChange})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:i})=>{var r;return(0,x.tZ)(l.Fragment,null,(0,x.tZ)(me.Z,{id:"port",name:"port",type:"number",required:e,value:null==i||null==(r=i.parameters)?void 0:r.port,validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.port,placeholder:(0,n.t)("e.g. 5432"),className:"form-group-w-50",label:"Port",onChange:t.onParametersChange}))},database:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>{var i;return(0,x.tZ)(me.Z,{id:"database",name:"database",required:e,value:null==l||null==(i=l.parameters)?void 0:i.database,validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.database,placeholder:(0,n.t)("e.g. world_population"),label:(0,n.t)("Database name"),onChange:t.onParametersChange,helpText:(0,n.t)("Copy the name of the  database you are trying to connect to.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>{var i;return(0,x.tZ)(me.Z,{id:"username",name:"username",required:e,value:null==l||null==(i=l.parameters)?void 0:i.username,validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.username,placeholder:(0,n.t)("e.g. Analytics"),label:(0,n.t)("Username"),onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l,isEditMode:i})=>{var r;return(0,x.tZ)(me.Z,{id:"password",name:"password",required:e,type:i&&"password",value:null==l||null==(r=l.parameters)?void 0:r.password,validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.password,placeholder:(0,n.t)("e.g. ********"),label:(0,n.t)("Password"),onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:o})=>(0,x.tZ)(l.Fragment,null,(0,x.tZ)(me.Z,{id:"database_name",name:"database_name",required:!0,value:null==o?void 0:o.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,n.t)("Display Name"),onChange:e.onChange,helpText:(0,n.t)("Pick a nickname for this database to display as in Superset.")})),query:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>(0,x.tZ)(me.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.query,placeholder:(0,n.t)("e.g. param1=value1&param2=value2"),label:(0,n.t)("Additional Parameters"),onChange:t.onQueryChange,helpText:(0,n.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:o})=>{var l;return(0,x.tZ)("div",{css:e=>j(e)},(0,x.tZ)(r.KU,{disabled:o&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||o,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,x.tZ)("span",{css:z},"SSL"),(0,x.tZ)(E.Z,{tooltip:(0,n.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:_e,service_account_info:_e,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:i})=>{const r=(null==i?void 0:i.catalog)||[],s=o||{};return(0,x.tZ)(ce,null,(0,x.tZ)("h4",{className:"gsheet-title"},(0,n.t)("Connect Google Sheets as tables to this database")),(0,x.tZ)("div",null,null==r?void 0:r.map(((o,i)=>{var d,c;return(0,x.tZ)(l.Fragment,null,(0,x.tZ)(ye.Z,{className:"catalog-label",required:!0},(0,n.t)("Google Sheet Name and URL")),(0,x.tZ)("div",{className:"catalog-name"},(0,x.tZ)(me.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(d=s[i])?void 0:d.name,placeholder:(0,n.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${i}`,name:"name",value:e.target.value}})},value:o.name}),(null==r?void 0:r.length)>1&&(0,x.tZ)(Ce.Z,{className:"catalog-delete",onClick:()=>t.onRemoveTableCatalog(i)})),(0,x.tZ)(me.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(c=s[i])?void 0:c.url,placeholder:(0,n.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${i}`,name:"value",value:e.target.value}}),value:o.value}))})),(0,x.tZ)(se,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()}},"+ ",(0,n.t)("Add sheet"))))},warehouse:be,role:be,account:be},Ne=({dbModel:{parameters:e},onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:i,onRemoveTableCatalog:r,validationErrors:s,getValidation:d,db:c,isEditMode:p=!1,sslForced:u,editNewDb:h})=>(0,x.tZ)(l.Fragment,null,(0,x.tZ)("div",{css:e=>[B,Y(e)]},e&&we.filter((t=>Object.keys(e.properties).includes(t)||"database_name"===t)).map((l=>{var m;return $e[l]({required:null==(m=e.required)?void 0:m.includes(l),changeMethods:{onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:i,onRemoveTableCatalog:r},validationErrors:s,getValidation:d,db:c,key:l,field:l,isEditMode:p,sslForced:u,editNewDb:h})})))),Se=(0,U.z)(),Ee=Se?Se.support:"https://superset.apache.org/docs/databases/installing-database-drivers",ke={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},Ue=e=>e?Se?Se[e]||Se.default:ke[e]?ke[e]:`https://superset.apache.org/docs/databases/${e}`:null,Te=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:o,dbName:i,dbModel:r,editNewDb:s})=>{const d=(0,x.tZ)(P,null,(0,x.tZ)(oe,null,null==o?void 0:o.backend),(0,x.tZ)(le,null,i)),c=(0,x.tZ)(P,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,x.tZ)("h4",null,"Enter Primary Credentials"),(0,x.tZ)("p",{className:"helper-bottom"},"Need help? Learn how to connect your database"," ",(0,x.tZ)("a",{href:(null==Se?void 0:Se.default)||Ee,target:"_blank",rel:"noopener noreferrer"},"here"),".")),p=(0,x.tZ)(de,null,(0,x.tZ)(P,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 3 OF 3 "),(0,x.tZ)("h4",{className:"step-3-text"},"Your database was successfully connected! Here are some optional settings for your database"),(0,x.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,x.tZ)("a",{href:Ue(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),u=(0,x.tZ)(de,null,(0,x.tZ)(P,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 2 OF 3 "),(0,x.tZ)("h4",null,"Enter the required ",r.name," credentials"),(0,x.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,x.tZ)("a",{href:Ue(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),h=(0,x.tZ)(P,null,(0,x.tZ)("div",{className:"select-db"},(0,x.tZ)("p",{className:"helper-top"}," STEP 1 OF 3 "),(0,x.tZ)("h4",null,"Select a database to connect")));return e?(0,x.tZ)(l.Fragment,null):t?d:a?c:n&&!s?p:o||s?u:h},Ae={gsheets:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},Oe={CONNECTION_MISSING_PARAMETERS_ERROR:{message:(0,n.t)("Missing Required Fields"),description:(0,n.t)("Please complete all required fields.")},CONNECTION_INVALID_HOSTNAME_ERROR:{message:(0,n.t)("Could not verify the host"),description:(0,n.t)("The host is invalid. Please verify that this field is entered correctly.")},CONNECTION_PORT_CLOSED_ERROR:{message:(0,n.t)("Port is closed"),description:(0,n.t)("Please verify that port is open to connect.")},CONNECTION_INVALID_PORT_ERROR:{message:(0,n.t)("Invalid Port Number"),description:(0,n.t)("The port must be a whole number less than or equal to 65535.")},CONNECTION_ACCESS_DENIED_ERROR:{message:(0,n.t)("Invalid account information"),description:(0,n.t)("Either the username or password is incorrect.")},CONNECTION_INVALID_PASSWORD_ERROR:{message:(0,n.t)("Invalid account information"),description:(0,n.t)("Either the username or password is incorrect.")},INVALID_PAYLOAD_SCHEMA_ERROR:{message:(0,n.t)("Incorrect Fields"),description:(0,n.t)("Please make sure all fields are filled out correctly")},TABLE_DOES_NOT_EXIST_ERROR:{message:(0,n.t)("URL could not be identified"),description:(0,n.t)('The URL could not be identified. Please check for typos and make sure that "Type of google sheet allowed" selection matches the input')}};var Le;function Me(e,t){var a,n,o,l;const i={...e||{}};let r,s={},d="",c={allows_virtual_table_explore:!0};switch(t.type){case Le.extraEditorChange:return{...i,extra_json:{...i.extra_json,[t.payload.name]:t.payload.json}};case Le.extraInputChange:var p;return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra_json:{...i.extra_json,metadata_cache_timeout:{...null==(p=i.extra_json)?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}}}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra_json:{...i.extra_json,schemas_allowed_for_file_upload:(t.payload.value||"").split(",")}}:{...i,extra_json:{...i.extra_json,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value}};case Le.inputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case Le.parametersChange:if(void 0!==i.catalog&&null!=(a=t.payload.type)&&a.startsWith("catalog")){var u,h;const e=null==(u=t.payload.type)?void 0:u.split("-")[1];((null==i?void 0:i.catalog[e])||{})[t.payload.name]=t.payload.value;const a={};return null==(h=i.catalog)||h.map((e=>{a[e.name]=e.value})),{...i,parameters:{...i.parameters,catalog:a}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case Le.addTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case Le.removeTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case Le.editorChange:return{...i,[t.payload.name]:t.payload.json};case Le.queryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case Le.textChange:return{...i,[t.payload.name]:t.payload.value};case Le.fetched:var m,g,b;if(t.payload.extra&&(r={...JSON.parse(t.payload.extra||"")},c={...c,...JSON.parse(t.payload.extra||""),metadata_params:JSON.stringify(null==(m=r)?void 0:m.metadata_params),engine_params:JSON.stringify(null==(g=r)?void 0:g.engine_params),schemas_allowed_for_file_upload:null==(b=r)?void 0:b.schemas_allowed_for_file_upload}),s=(null==(o=t.payload)||null==(l=o.parameters)?void 0:l.query)||{},d=Object.entries(s).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.encrypted_extra&&t.payload.configuration_method===S.DYNAMIC_FORM){var v,y;const e=Object.keys((null==(v=r)||null==(y=v.engine_params)?void 0:y.catalog)||{}).map((e=>{var t,a;return{name:e,value:null==(t=r)||null==(a=t.engine_params)?void 0:a.catalog[e]}}));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,catalog:e,parameters:t.payload.parameters,query_input:d}}return{...t.payload,encrypted_extra:t.payload.encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,parameters:t.payload.parameters,query_input:d};case Le.dbSelected:case Le.configMethodChange:return{...t.payload};case Le.reset:default:return null}}!function(e){e[e.configMethodChange=0]="configMethodChange",e[e.dbSelected=1]="dbSelected",e[e.editorChange=2]="editorChange",e[e.fetched=3]="fetched",e[e.inputChange=4]="inputChange",e[e.parametersChange=5]="parametersChange",e[e.reset=6]="reset",e[e.textChange=7]="textChange",e[e.extraInputChange=8]="extraInputChange",e[e.extraEditorChange=9]="extraEditorChange",e[e.addTableCatalogSheet=10]="addTableCatalogSheet",e[e.removeTableCatalogSheet=11]="removeTableCatalogSheet",e[e.queryChange=12]="queryChange"}(Le||(Le={}));const Ie=e=>JSON.stringify({...e,metadata_params:JSON.parse((null==e?void 0:e.metadata_params)||"{}"),engine_params:JSON.parse((null==e?void 0:e.engine_params)||"{}"),schemas_allowed_for_file_upload:((null==e?void 0:e.schemas_allowed_for_file_upload)||[]).filter((e=>""!==e))}),De=(0,k.ZP)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:p,show:u,databaseId:h,dbEngine:m})=>{var g;const[b,v]=(0,l.useReducer)(Me,null),[y,f]=(0,l.useState)("1"),[Z,_]=(0,U.cb)(),[C,w,$]=(0,U.h1)(),[k,O]=(0,l.useState)(!1),[L,M]=(0,l.useState)(""),[I,D]=(0,l.useState)(!1),[R,P]=(0,l.useState)(!1),[z,B]=(0,l.useState)(!1),Y=(0,T.c)(),W=(0,U.rM)(),X=(0,U.jb)(),ee=!!h,oe=(0,o.c)(o.T.FORCE_DATABASE_CONNECTIONS_SSL),le=X||!(null==b||!b.engine||!Ae[b.engine]),ie=(null==b?void 0:b.configuration_method)===S.SQLALCHEMY_URI,ce=ee||ie,{state:{loading:ue,resource:me,error:ge},fetchResource:be,createResource:ve,updateResource:ye,clearError:fe}=(0,U.LE)("database",(0,n.t)("database"),e),Ze=C||ge,xe=e=>e&&0===Object.keys(e).length,_e=(null==Z||null==(g=Z.databases)?void 0:g.find((e=>e.engine===(ee?null==b?void 0:b.backend:null==b?void 0:b.engine))))||{},Ce=()=>{v({type:Le.reset}),O(!1),$(null),fe(),D(!1),p()},we=async()=>{var e;const{id:o,...l}=b||{},i=JSON.parse(JSON.stringify(l));if(i.configuration_method===S.DYNAMIC_FORM){if(await w(i,!0),C&&!xe(C))return;const e=ee?i.parameters_schema.properties:null==_e?void 0:_e.parameters.properties,t=JSON.parse(i.encrypted_extra||"{}");Object.keys(e||{}).forEach((a=>{var n,o,l,r;e[a]["x-encrypted-extra"]&&null!=(n=i.parameters)&&n[a]&&("object"==typeof(null==(o=i.parameters)?void 0:o[a])?(t[a]=null==(l=i.parameters)?void 0:l[a],i.parameters[a]=JSON.stringify(i.parameters[a])):t[a]=JSON.parse((null==(r=i.parameters)?void 0:r[a])||"{}"))})),i.encrypted_extra=JSON.stringify(t),"gsheets"===i.engine&&(i.impersonate_user=!0)}null!=i&&null!=(e=i.parameters)&&e.catalog&&(i.extra_json={engine_params:JSON.stringify({catalog:i.parameters.catalog})}),null!=i&&i.extra_json&&(i.extra=Ie(null==i?void 0:i.extra_json)),null!=b&&b.id?(P(!0),await ye(b.id,i,i.configuration_method===S.DYNAMIC_FORM)&&(a&&a(),I||(Ce(),t((0,n.t)("Database settings updated"))))):b&&(P(!0),await ve(i,i.configuration_method===S.DYNAMIC_FORM)&&(O(!0),a&&a(),ce&&(Ce(),t((0,n.t)("Database connected"))))),D(!1),P(!1)},$e=(e,t)=>{v({type:e,payload:t})},Se=e=>{if("Other"===e)v({type:Le.dbSelected,payload:{database_name:e,configuration_method:S.SQLALCHEMY_URI,engine:void 0}});else{const t=null==Z?void 0:Z.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n}=t,o=void 0!==n;v({type:Le.dbSelected,payload:{database_name:e,engine:a,configuration_method:o?S.DYNAMIC_FORM:S.SQLALCHEMY_URI}})}v({type:Le.addTableCatalogSheet})},ke=()=>{me&&be(me.id),D(!0)},Ue=()=>{I&&O(!1),v({type:Le.reset})},De=()=>b?!k||I?(0,x.tZ)(l.Fragment,null,(0,x.tZ)(se,{key:"back",onClick:Ue},(0,n.t)("Back")),(0,x.tZ)(se,{key:"submit",buttonStyle:"primary",onClick:we},(0,n.t)("Connect"))):(0,x.tZ)(l.Fragment,null,(0,x.tZ)(se,{key:"back",onClick:ke},(0,n.t)("Back")),(0,x.tZ)(se,{key:"submit",buttonStyle:"primary",onClick:we},(0,n.t)("Finish"))):[];(0,l.useEffect)((()=>{u&&(f("1"),_(),P(!0)),h&&u&&ee&&h&&(ue||be(h).catch((t=>e((0,n.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[u,h]),(0,l.useEffect)((()=>{me&&(v({type:Le.fetched,payload:me}),M(me.database_name))}),[me]),(0,l.useEffect)((()=>{R&&P(!1),Z&&m&&Se(m)}),[Z]);const Re=()=>{if(xe(ge)||xe(C)&&!((null==C?void 0:C.error_type)in Oe))return(0,x.tZ)(l.Fragment,null);var e,t;if(C)return(0,x.tZ)(s.Z,{type:"error",css:e=>V(e),message:(null==(e=Oe[null==C?void 0:C.error_type])?void 0:e.message)||(null==C?void 0:C.error_type),description:(null==(t=Oe[null==C?void 0:C.error_type])?void 0:t.description)||JSON.stringify(C),showIcon:!0,closable:!1});const a="object"==typeof ge?Object.values(ge):[];return(0,x.tZ)(s.Z,{type:"error",css:e=>V(e),message:(0,n.t)("Database Creation Error"),description:(null==a?void 0:a[0])||ge})};return ce?(0,x.tZ)(d.Z,{css:e=>[q,F,H(e),G(e),J(e)],name:"database",onHandledPrimaryAction:we,onHide:Ce,primaryButtonName:ee?(0,n.t)("Save"):(0,n.t)("Connect"),width:"500px",centered:!0,show:u,title:(0,x.tZ)("h4",null,ee?(0,n.t)("Edit database"):(0,n.t)("Connect a database")),footer:ee?(e=>(0,x.tZ)(l.Fragment,null,(0,x.tZ)(se,{key:"close",onClick:Ce},(0,n.t)("Close")),(0,x.tZ)(se,{key:"submit",buttonStyle:"primary",onClick:we,disabled:null==e?void 0:e.is_managed_externally,tooltip:null!=e&&e.is_managed_externally?(0,n.t)("This database is managed externally, and can't be edited in Superset"):""},(0,n.t)("Finish"))))(b):De()},(0,x.tZ)(de,null,(0,x.tZ)(ne,null,(0,x.tZ)(Te,{isLoading:R,isEditMode:ee,useSqlAlchemyForm:ie,hasConnectedDb:k,db:b,dbName:L,dbModel:_e}))),(0,x.tZ)(i.ZP,{defaultActiveKey:"1",activeKey:y,onTabClick:e=>{f(e)},animated:{inkBar:!0,tabPane:!0}},(0,x.tZ)(i.ZP.TabPane,{tab:(0,x.tZ)("span",null,(0,n.t)("Basic")),key:"1"},ie?(0,x.tZ)(te,null,(0,x.tZ)(he,{db:b,onInputChange:({target:e})=>$e(Le.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:Y,testConnection:()=>{var a;if(null==b||!b.sqlalchemy_uri)return void e((0,n.t)("Please enter a SQLAlchemy URI to test"));const o={sqlalchemy_uri:(null==b?void 0:b.sqlalchemy_uri)||"",database_name:(null==b||null==(a=b.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==b?void 0:b.impersonate_user)||void 0,extra:Ie(null==b?void 0:b.extra_json)||void 0,encrypted_extra:(null==b?void 0:b.encrypted_extra)||"",server_cert:(null==b?void 0:b.server_cert)||void 0};B(!0),(0,U.xx)(o,(t=>{B(!1),e(t)}),(e=>{B(!1),t(e)}))},isEditMode:ee,testInProgress:z}),(qe=(null==b?void 0:b.backend)||(null==b?void 0:b.engine),void 0!==(null==Z||null==(Fe=Z.databases)||null==(je=Fe.find((e=>e.backend===qe||e.engine===qe)))?void 0:je.parameters)&&!ee&&(0,x.tZ)("div",{css:e=>j(e)},(0,x.tZ)(c.Z,{buttonStyle:"link",onClick:()=>v({type:Le.configMethodChange,payload:{database_name:null==b?void 0:b.database_name,configuration_method:S.DYNAMIC_FORM,engine:null==b?void 0:b.engine}}),css:e=>(e=>x.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,n.t)("Connect this database using the dynamic form instead")),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):(0,x.tZ)(Ne,{isEditMode:!0,sslForced:oe,dbModel:_e,db:b,onParametersChange:({target:e})=>$e(Le.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>$e(Le.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>$e(Le.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>v({type:Le.addTableCatalogSheet}),onRemoveTableCatalog:e=>v({type:Le.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>w(b),validationErrors:C}),!ee&&(0,x.tZ)(Q,null,(0,x.tZ)(s.Z,{closable:!1,css:e=>K(e),message:"Additional fields may be required",showIcon:!0,description:(0,x.tZ)(l.Fragment,null,(0,n.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,x.tZ)("a",{href:Ee,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,n.t)("here")),"."),type:"info"}))),(0,x.tZ)(i.ZP.TabPane,{tab:(0,x.tZ)("span",null,(0,n.t)("Advanced")),key:"2"},(0,x.tZ)(pe,{db:b,onInputChange:({target:e})=>$e(Le.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>$e(Le.textChange,{name:e.name,value:e.value}),onEditorChange:e=>$e(Le.editorChange,e),onExtraInputChange:({target:e})=>{$e(Le.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{$e(Le.extraEditorChange,e)}}),Ze&&Re()))):(0,x.tZ)(d.Z,{css:e=>[F,H(e),G(e),J(e)],name:"database",onHandledPrimaryAction:we,onHide:Ce,primaryButtonName:k?(0,n.t)("Finish"):(0,n.t)("Connect"),width:"500px",centered:!0,show:u,title:(0,x.tZ)("h4",null,(0,n.t)("Connect a database")),footer:De()},k?(0,x.tZ)(l.Fragment,null,(0,x.tZ)(Te,{isLoading:R,isEditMode:ee,useSqlAlchemyForm:ie,hasConnectedDb:k,db:b,dbName:L,dbModel:_e,editNewDb:I}),I?(0,x.tZ)(Ne,{isEditMode:!0,sslForced:oe,dbModel:_e,db:b,onParametersChange:({target:e})=>$e(Le.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>$e(Le.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>$e(Le.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>v({type:Le.addTableCatalogSheet}),onRemoveTableCatalog:e=>v({type:Le.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>w(b),validationErrors:C}):(0,x.tZ)(pe,{db:b,onInputChange:({target:e})=>$e(Le.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>$e(Le.textChange,{name:e.name,value:e.value}),onEditorChange:e=>$e(Le.editorChange,e),onExtraInputChange:({target:e})=>{$e(Le.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>$e(Le.extraEditorChange,e)})):(0,x.tZ)(l.Fragment,null,!R&&(b?(0,x.tZ)(l.Fragment,null,(0,x.tZ)(Te,{isLoading:R,isEditMode:ee,useSqlAlchemyForm:ie,hasConnectedDb:k,db:b,dbName:L,dbModel:_e}),le&&(()=>{var e,t,a,n,o;const{hostname:l}=window.location;let i=(null==X||null==(e=X.REGIONAL_IPS)?void 0:e.default)||"";const r=(null==X?void 0:X.REGIONAL_IPS)||{};return Object.entries(r).forEach((([e,t])=>{const a=new RegExp(e);l.match(a)&&(i=t)})),(null==b?void 0:b.engine)&&(0,x.tZ)(Q,null,(0,x.tZ)(s.Z,{closable:!1,css:e=>K(e),type:"info",showIcon:!0,message:(null==(t=Ae[b.engine])?void 0:t.message)||(null==X||null==(a=X.DEFAULT)?void 0:a.message),description:(null==(n=Ae[b.engine])?void 0:n.description)||(null==X||null==(o=X.DEFAULT)?void 0:o.description)+i}))})(),(0,x.tZ)(Ne,{db:b,sslForced:oe,dbModel:_e,onAddTableCatalog:()=>{v({type:Le.addTableCatalogSheet})},onQueryChange:({target:e})=>$e(Le.queryChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{v({type:Le.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:({target:e})=>$e(Le.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>$e(Le.textChange,{name:e.name,value:e.value}),getValidation:()=>w(b),validationErrors:C}),(0,x.tZ)("div",{css:e=>j(e)},(0,x.tZ)(c.Z,{buttonStyle:"link",onClick:()=>v({type:Le.configMethodChange,payload:{engine:b.engine,configuration_method:S.SQLALCHEMY_URI,database_name:b.database_name}}),css:ae},(0,n.t)("Connect this database with a SQLAlchemy URI string instead")),(0,x.tZ)(E.Z,{tooltip:(0,n.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"})),Ze&&Re()):(0,x.tZ)(re,null,(0,x.tZ)(Te,{isLoading:R,isEditMode:ee,useSqlAlchemyForm:ie,hasConnectedDb:k,db:b,dbName:L,dbModel:_e}),(0,x.tZ)("div",{className:"preferred"},null==Z||null==(Pe=Z.databases)?void 0:Pe.filter((e=>e.preferred)).map((e=>(0,x.tZ)(N,{className:"preferred-item",onClick:()=>Se(e.name),buttonText:e.name,icon:null==W?void 0:W[e.engine]})))),(()=>{var e,t;return(0,x.tZ)("div",{className:"available"},(0,x.tZ)("h4",{className:"available-label"},(0,n.t)("Or choose from a list of other databases we support:")),(0,x.tZ)("div",{className:"control-label"},(0,n.t)("Supported databases")),(0,x.tZ)(r.IZ,{className:"available-select",onChange:Se,placeholder:(0,n.t)("Choose a database..."),showSearch:!0},null==(e=[...(null==Z?void 0:Z.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>(0,x.tZ)(r.IZ.Option,{value:e.name,key:e.name},e.name))),(0,x.tZ)(r.IZ.Option,{value:"Other",key:"Other"},(0,n.t)("Other"))),(0,x.tZ)(s.Z,{showIcon:!0,closable:!1,css:e=>K(e),type:"info",message:(null==X||null==(t=X.ADD_DATABASE)?void 0:t.message)||(0,n.t)("Want to add a new database?"),description:null!=X&&X.ADD_DATABASE?(0,x.tZ)(l.Fragment,null,(0,n.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,x.tZ)("a",{href:null==X?void 0:X.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==X?void 0:X.ADD_DATABASE.contact_description_link)," ",null==X?void 0:X.ADD_DATABASE.description):(0,x.tZ)(l.Fragment,null,(0,n.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,x.tZ)("a",{href:Ee,target:"_blank",rel:"noopener noreferrer"},(0,n.t)("here")),".")}))})()))),R&&(0,x.tZ)(A.Z,null));var Pe,qe,Fe,je}))},1483:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(37703);function o(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},56052:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(5872),o=a.n(n),l=a(23279),i=a.n(l),r=a(67294),s=a(51995),d=a(11965),c=a(23525),p=a(4715),u=a(83862),h=a(58593),m=a(73727),g=a(70163),b=a(29147),v=a(27600),y=a(61988),f=a(70695),Z=a(37703);const{SubMenu:x}=u.$,_=s.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`,C=s.iK.i`
  margin-top: 2px;
`;function w(e){const{locale:t,languages:a,...n}=e;return(0,d.tZ)(x,o()({"aria-label":"Languages",title:(0,d.tZ)("div",{className:"f16"},(0,d.tZ)(C,{className:`flag ${a[t].flag}`})),icon:(0,d.tZ)(g.Z.TriangleDown,null)},n),Object.keys(a).map((e=>(0,d.tZ)(u.$.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,d.tZ)(_,{className:"f16"},(0,d.tZ)("i",{className:`flag ${a[e].flag}`}),(0,d.tZ)("a",{href:a[e].url},a[e].name))))))}var $,N=a(6238),S=a(40768);!function(e){e.GOOGLE_SHEETS="gsheets",e.DB_CONNECTION="dbconnection"}($||($={}));const E=e=>d.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,k=s.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,U=s.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
  margin-right: ${({theme:e})=>e.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
`,T=s.iK.a`
  padding-right: ${({theme:e})=>e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,{SubMenu:A}=u.$,O=({align:e,settings:t,navbarRight:a,isFrontendRoute:n})=>{const{roles:o}=(0,Z.v9)((e=>e.user)),{CSV_EXTENSIONS:l,COLUMNAR_EXTENSIONS:i,EXCEL_EXTENSIONS:s,ALLOWED_EXTENSIONS:c,HAS_GSHEETS_INSTALLED:p}=(0,Z.v9)((e=>e.common.conf)),[h,b]=(0,r.useState)(!1),[v,x]=(0,r.useState)(""),_=(0,f.ZP)("can_sqllab","Superset",o),C=(0,f.ZP)("can_write","Dashboard",o),O=(0,f.ZP)("can_write","Chart",o),L=(0,f.ZP)("can_write","Database",o),{canUploadCSV:M,canUploadColumnar:I,canUploadExcel:D}=(0,S.Mc)(o,l,i,s,c),R=M||I||D,P=_||O||C,q=[{label:(0,y.t)("Data"),icon:"fa-database",childs:[{label:(0,y.t)("Connect database"),name:$.DB_CONNECTION,perm:L},{label:(0,y.t)("Connect Google Sheet"),name:$.GOOGLE_SHEETS,perm:L&&p},{label:(0,y.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:M},{label:(0,y.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:I},{label:(0,y.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:D}]},{label:(0,y.t)("SQL query"),url:"/superset/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,y.t)("Chart"),url:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,y.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],F=e=>(0,d.tZ)(r.Fragment,null,(0,d.tZ)("i",{className:`fa ${e.icon}`}),e.label);return(0,d.tZ)(U,{align:e},(0,d.tZ)(N.Z,{onHide:()=>{x(""),b(!1)},show:h,dbEngine:v}),(0,d.tZ)(u.$,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===$.DB_CONNECTION?b(!0):e.key===$.GOOGLE_SHEETS&&(b(!0),x("Google Sheets"))}},!a.user_is_anonymous&&P&&(0,d.tZ)(A,{title:(0,d.tZ)(k,{className:"fa fa-plus"}),icon:(0,d.tZ)(g.Z.TriangleDown,null)},q.map((e=>e.childs?L||R?(0,d.tZ)(A,{key:`sub2_${e.label}`,className:"data-menu",title:F(e)},e.childs.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,d.tZ)(r.Fragment,{key:e.name},2===t&&(0,d.tZ)(u.$.Divider,null),(0,d.tZ)(u.$.Item,null,e.url?(0,d.tZ)("a",{href:e.url}," ",e.label," "):e.label)):null))):null:(0,f.ZP)(e.perm,e.view,o)&&(0,d.tZ)(u.$.Item,{key:e.label},(0,d.tZ)("a",{href:e.url},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))))),(0,d.tZ)(A,{title:(0,y.t)("Settings"),icon:(0,d.tZ)(g.Z.TriangleDown,{iconSize:"xl"})},t.map(((e,a)=>{var o;return[(0,d.tZ)(u.$.ItemGroup,{key:`${e.label}`,title:e.label},null==(o=e.childs)?void 0:o.map((e=>"string"!=typeof e?(0,d.tZ)(u.$.Item,{key:`${e.label}`},n(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},e.label):(0,d.tZ)("a",{href:e.url},e.label)):null))),a<t.length-1&&(0,d.tZ)(u.$.Divider,{key:`divider_${a}`})]})),!a.user_is_anonymous&&[(0,d.tZ)(u.$.Divider,{key:"user-divider"}),(0,d.tZ)(u.$.ItemGroup,{key:"user-section",title:(0,y.t)("User")},a.user_profile_url&&(0,d.tZ)(u.$.Item,{key:"profile"},(0,d.tZ)("a",{href:a.user_profile_url},(0,y.t)("Profile"))),a.user_info_url&&(0,d.tZ)(u.$.Item,{key:"info"},(0,d.tZ)("a",{href:a.user_info_url},(0,y.t)("Info"))),(0,d.tZ)(u.$.Item,{key:"logout"},(0,d.tZ)("a",{href:a.user_logout_url},(0,y.t)("Logout"))))],(a.version_string||a.version_sha)&&[(0,d.tZ)(u.$.Divider,{key:"version-info-divider"}),(0,d.tZ)(u.$.ItemGroup,{key:"about-section",title:(0,y.t)("About")},(0,d.tZ)("div",{className:"about-section"},a.show_watermark&&(0,d.tZ)("div",{css:E},(0,y.t)("Powered by Apache Superset")),a.version_string&&(0,d.tZ)("div",{css:E},"Version: ",a.version_string),a.version_sha&&(0,d.tZ)("div",{css:E},"SHA: ",a.version_sha),a.build_number&&(0,d.tZ)("div",{css:E},"Build: ",a.build_number)))]),a.show_language_picker&&(0,d.tZ)(w,{locale:a.locale,languages:a.languages})),a.documentation_url&&(0,d.tZ)(T,{href:a.documentation_url,target:"_blank",rel:"noreferrer",title:(0,y.t)("Documentation")},(0,d.tZ)("i",{className:"fa fa-question"})," "),a.bug_report_url&&(0,d.tZ)(T,{href:a.bug_report_url,target:"_blank",rel:"noreferrer",title:(0,y.t)("Report a bug")},(0,d.tZ)("i",{className:"fa fa-bug"})),a.user_is_anonymous&&(0,d.tZ)(T,{href:a.user_login_url},(0,d.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,y.t)("Login")))},L=s.iK.header`
  background-color: white;
  margin-bottom: 2px;
  &:nth-last-of-type(2) nav {
    margin-bottom: 2px;
  }

  .caret {
    display: none;
  }
  .navbar-brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navbar-brand-text {
    border-left: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    height: 100%;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    padding-left: ${({theme:e})=>4*e.gridUnit}px;
    padding-right: ${({theme:e})=>4*e.gridUnit}px;
    margin-right: ${({theme:e})=>6*e.gridUnit}px;
    font-size: ${({theme:e})=>4*e.gridUnit}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${({theme:e})=>58*e.gridUnit}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 1127px) {
      display: none;
    }
  }
  .main-nav .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
  @media (max-width: 767px) {
    .navbar-brand {
      float: none;
    }
  }
  .ant-menu-horizontal .ant-menu-item {
    height: 100%;
    line-height: inherit;
  }
  .ant-menu > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
  @media (max-width: 767px) {
    .ant-menu-item {
      padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
        ${({theme:e})=>3*e.gridUnit}px !important;
    }
    .ant-menu > .ant-menu-item > a {
      padding: 0px;
    }
    .main-nav .ant-menu-submenu-title > svg:nth-child(1) {
      display: none;
    }
    .ant-menu-item-active > a {
      &:hover {
        color: ${({theme:e})=>e.colors.primary.base} !important;
        background-color: transparent !important;
      }
    }
  }

  .ant-menu-item a {
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
`,M=e=>d.iv`
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
`,{SubMenu:I}=u.$,{useBreakpoint:D}=p.rj;function R({data:{menu:e,brand:t,navbar_right:a,settings:n},isFrontendRoute:o=(()=>!1)}){const[l,y]=(0,r.useState)("horizontal"),f=D(),Z=(0,b.fG)(),x=(0,s.Fg)();return(0,r.useEffect)((()=>{function e(){window.innerWidth<=767?y("inline"):y("horizontal")}e();const t=i()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),(0,c.eY)(v.KD.standalone)||Z.hideNav?(0,d.tZ)(r.Fragment,null):(0,d.tZ)(L,{className:"top",id:"main-menu",role:"navigation"},(0,d.tZ)(d.xB,{styles:M(x)}),(0,d.tZ)(p.X2,null,(0,d.tZ)(p.JX,{md:16,xs:24},(0,d.tZ)(h.u,{id:"brand-tooltip",placement:"bottomLeft",title:t.tooltip,arrowPointAtCenter:!0},(0,d.tZ)("a",{className:"navbar-brand",href:t.path},(0,d.tZ)("img",{width:t.width,src:t.icon,alt:t.alt}))),t.text&&(0,d.tZ)("div",{className:"navbar-brand-text"},(0,d.tZ)("span",null,t.text)),(0,d.tZ)(u.$,{mode:l,className:"main-nav"},e.map(((e,t)=>{var a;return(({label:e,childs:t,url:a,index:n,isFrontendRoute:o})=>a&&o?(0,d.tZ)(u.$.Item,{key:e,role:"presentation"},(0,d.tZ)(m.rU,{role:"button",to:a},e)):a?(0,d.tZ)(u.$.Item,{key:e},(0,d.tZ)("a",{href:a},e)):(0,d.tZ)(I,{key:n,title:e,icon:"inline"===l?(0,d.tZ)(r.Fragment,null):(0,d.tZ)(g.Z.TriangleDown,null)},null==t?void 0:t.map(((t,a)=>"string"==typeof t&&"-"===t&&"Data"!==e?(0,d.tZ)(u.$.Divider,{key:`$${a}`}):"string"!=typeof t?(0,d.tZ)(u.$.Item,{key:`${t.label}`},t.isFrontendRoute?(0,d.tZ)(m.rU,{to:t.url||""},t.label):(0,d.tZ)("a",{href:t.url},t.label)):null))))({index:t,...e,isFrontendRoute:o(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:o(e.url)}))})})))),(0,d.tZ)(p.JX,{md:8,xs:24},(0,d.tZ)(O,{align:f.md?"flex-end":"flex-start",settings:n,navbarRight:a,isFrontendRoute:o}))))}function P({data:e,...t}){const a={...e},n={Security:!0,Manage:!0},l=[],i=[];return a.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),n.hasOwnProperty(e.name)?i.push(a):l.push(a)})),a.menu=l,a.settings=i,(0,d.tZ)(R,o()({data:a},t))}}}]);