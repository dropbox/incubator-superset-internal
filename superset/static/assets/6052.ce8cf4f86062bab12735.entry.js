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
`,h=(0,n.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:o,title:l="",labelText:h=""},m)=>{const g=(0,n.useRef)(),b=m||g;return(0,n.useEffect)((()=>{b.current.indeterminate=e}),[b,e]),(0,i.tZ)(n.Fragment,null,(0,i.tZ)(u,null,e&&(0,i.tZ)(s,null),!e&&a&&(0,i.tZ)(c,null),!e&&!a&&(0,i.tZ)(d,null),(0,i.tZ)(p,{name:t,id:t,type:"checkbox",ref:b,checked:a,onChange:o})),(0,i.tZ)(r,{title:l,htmlFor:t},h))}))},6238:(e,t,a)=>{a.d(t,{Z:()=>Fe});var n=a(51995),o=a(61988),l=a(93185),i=a(67294),r=a(71262),s=a(4715),d=a(29487),c=a(74069),p=a(35932),u=a(70163);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}const m={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},g=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function b(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const v={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},y=Object.keys(v);class f extends i.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(m).forEach((t=>{e.style[t]=m[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);g.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,o={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(o,e.onReflow.bind(this,o))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,o=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>o&&(n++,e.push(a),o=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const o=this.canvas.lastElementChild;let l=b(o,2);for(;l&&(o.offsetTop>n||o.offsetHeight>l.offsetHeight||o.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=b(o,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:o,trimRight:l,className:r}=a,s=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(a,["component","ellipsis","trimRight","className"]);return i.createElement(n,h({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(s,y)),t&&l?e.replace(/[\s\uFEFF\xA0]+$/,""):e,i.createElement("wbr",null),t&&i.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}f.defaultProps=v;const Z=f;var x=a(11965);const _=(0,n.iK)(p.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,w=n.iK.div`
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
`,C=n.iK.div`
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
`,$=n.iK.div`
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
`,S=(0,n.iK)((({icon:e,altText:t,buttonText:a,...n})=>(0,x.tZ)(_,n,(0,x.tZ)(w,null,e&&(0,x.tZ)("img",{src:e,alt:t}),!e&&(0,x.tZ)(u.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,x.tZ)($,null,(0,x.tZ)(C,null,(0,x.tZ)(Z,{text:a,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
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
`;var k,N=a(8272),E=a(14114),U=a(87858),T=a(34858),A=a(1483);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(k||(k={}));var L=a(38703),O=a(94184),M=a.n(O),D=a(49576),I=a(43700),q=a(94670);const P=x.iv`
  margin-bottom: 0;
`,F=n.iK.header`
  border-bottom: ${({theme:e})=>`${.25*e.gridUnit}px solid\n    ${e.colors.grayscale.light2};`}
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  line-height: ${({theme:e})=>6*e.gridUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
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
`,R=x.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,j=x.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,z=e=>x.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,B=e=>x.iv`
  padding-left: ${2*e.gridUnit}px;
`,Q=e=>x.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,K=e=>x.iv`
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
`,H=e=>x.iv`
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
`,V=n.iK.div`
  ${({theme:e})=>x.iv`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,G=e=>x.iv`
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
`,Y=e=>x.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,W=n.iK.div`
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
      font-size: ${e.typography.sizes.s}px;
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
`,X=(0,n.iK)(q.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,ee=n.iK.div`
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
`,te=n.iK.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,ae=e=>x.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ne=e=>x.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,oe=n.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0px;
  }
`,le=(n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`),ie=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,re=n.iK.div`
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
  }`,se=n.iK.div`
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
      font-size: ${({theme:e})=>e.typography.sizes.l}px;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      margin: ${({theme:e})=>6*e.gridUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,de=(0,n.iK)(p.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,ce=n.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
`,pe=n.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
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
`,ue=n.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,he=({db:e,onInputChange:t,onTextChange:a,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:i})=>{var r,s,d,c,p,u,h,m,g,b,v,y;const f=!(null==e||!e.expose_in_sqllab),Z=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas);return(0,x.tZ)(I.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>x.iv`
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
`)(e)},(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"SQL Lab"),(0,x.tZ)("p",{className:"helper"},"Adjust how this database will interact with SQL Lab.")),key:"1"},(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,o.t)("Expose database in SQL Lab")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Allow this database to be queried in SQL Lab")})),(0,x.tZ)(ee,{className:M()("expandable",{open:f,"ctas-open":Z})},(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,o.t)("Allow CREATE TABLE AS")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Allow creation of new tables based on queries")}))),(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,o.t)("Allow CREATE VIEW AS")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Allow creation of new views based on queries")})),(0,x.tZ)(W,{className:M()("expandable",{open:Z})},(0,x.tZ)("div",{className:"control-label"},(0,o.t)("CTAS & CVAS SCHEMA")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"force_ctas_schema",value:(null==e?void 0:e.force_ctas_schema)||"",placeholder:(0,o.t)("Create or select schema..."),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,o.t)("Allow DML")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allow_multi_schema_metadata_fetch",indeterminate:!1,checked:!(null==e||!e.allow_multi_schema_metadata_fetch),onChange:t,labelText:(0,o.t)("Allow Multi Schema Metadata Fetch")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.")}))),(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==e||null==(r=e.extra_json)||!r.cost_estimate_enabled),onChange:l,labelText:(0,o.t)("Enable query cost estimation")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("For Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,x.tZ)(W,{css:P},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==e||null==(s=e.extra_json)||!s.allows_virtual_table_explore),onChange:l,labelText:(0,o.t)("Allow this database to be explored")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==e||null==(d=e.extra_json)||!d.disable_data_preview),onChange:l,labelText:(0,o.t)("Disable SQL Lab data preview queries")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})))))),(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"Performance"),(0,x.tZ)("p",{className:"helper"},"Adjust performance settings of this database.")),key:"2"},(0,x.tZ)(W,{className:"mb-8"},(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Chart cache timeout")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Schema cache timeout")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==e||null==(c=e.extra_json)||null==(p=c.metadata_cache_timeout)?void 0:p.schema_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Table cache timeout")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==e||null==(u=e.extra_json)||null==(h=u.metadata_cache_timeout)?void 0:h.table_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,x.tZ)(W,{css:(0,x.iv)({no_margin_bottom:P},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:(0,o.t)("Asynchronous query execution")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,x.tZ)(W,{css:(0,x.iv)({no_margin_bottom:P},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==e||null==(m=e.extra_json)||!m.cancel_query_on_windows_unload),onChange:l,labelText:(0,o.t)("Cancel query on window unload event")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"Security"),(0,x.tZ)("p",{className:"helper"},"Add extra connection information.")),key:"3"},(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Secure extra")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(X,{name:"encrypted_extra",value:(null==e?void 0:e.encrypted_extra)||"",placeholder:(0,o.t)("Secure extra"),onChange:e=>n({json:e,name:"encrypted_extra"}),width:"100%",height:"160px"})),(0,x.tZ)("div",{className:"helper"},(0,x.tZ)("div",null,(0,o.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Root certificate")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,o.t)("Enter CA_BUNDLE"),onChange:a})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Schemas allowed for CSV upload")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==e||null==(g=e.extra_json)?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("A comma-separated list of schemas that CSVs are allowed to upload to."))),(0,x.tZ)(W,{css:(0,x.iv)({no_margin_bottom:P},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,o.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),(0,x.tZ)(W,{css:(0,x.iv)({...P},"","")},(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(D.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,o.t)("Allow data upload")}),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("If selected, please set the schemas allowed for data upload in Extra.")})))),(0,x.tZ)(I.Z.Panel,{header:(0,x.tZ)("div",null,(0,x.tZ)("h4",null,"Other"),(0,x.tZ)("p",{className:"helper"},"Additional settings.")),key:"4"},(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Metadata Parameters")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(X,{name:"metadata_params",value:(null==e||null==(b=e.extra_json)?void 0:b.metadata_params)||"",placeholder:(0,o.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px"})),(0,x.tZ)("div",{className:"helper"},(0,x.tZ)("div",null,(0,o.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Engine Parameters")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(X,{name:"engine_params",value:(null==e||null==(v=e.extra_json)?void 0:v.engine_params)||"",placeholder:(0,o.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px"})),(0,x.tZ)("div",{className:"helper"},(0,x.tZ)("div",null,(0,o.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Version")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"number",name:"version",value:(null==e||null==(y=e.extra_json)?void 0:y.version)||"",placeholder:(0,o.t)("Version number"),onChange:l})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Specify the database version. This should be used with Presto in order to enable query cost estimation.")))))};var me=a(8911);const ge=({db:e,onInputChange:t,testConnection:a,conf:n,testInProgress:l=!1})=>{let r,s;var d,c;return me.Z?(r=null==(d=me.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:d.SQLALCHEMY_DOCS_URL,s=null==(c=me.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:c.SQLALCHEMY_DISPLAY_TEXT):(r="https://docs.sqlalchemy.org/en/13/core/engines.html",s="SQLAlchemy docs"),(0,x.tZ)(i.Fragment,null,(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Display Name"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:(0,o.t)("Name your database"),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Pick a name to help you identify this database."))),(0,x.tZ)(W,null,(0,x.tZ)("div",{className:"control-label"},(0,o.t)("SQLAlchemy URI"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(0,o.t)("dialect+driver://username:password@host:port/database"),onChange:t})),(0,x.tZ)("div",{className:"helper"},(0,o.t)("Refer to the")," ",(0,x.tZ)("a",{href:r||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},s||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,o.t)("for more information on how to structure your URI."))),(0,x.tZ)(p.Z,{onClick:a,disabled:l,cta:!0,buttonStyle:"link",css:e=>(e=>x.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,o.t)("Test connection")))};var be=a(49238);const ve={account:{helpText:(0,o.t)("Copy the account name of that database you are trying to connect to."),placeholder:"e.g. world_population"},warehouse:{placeholder:"e.g. compute_wh",className:"form-group-w-50"},role:{placeholder:"e.g. AccountAdmin",className:"form-group-w-50"}},ye=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o,field:l})=>{var i;return(0,x.tZ)(U.Z,{id:l,name:l,required:e,value:null==o||null==(i=o.parameters)?void 0:i[l],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[l],placeholder:ve[l].placeholder,helpText:ve[l].helpText,label:l,onChange:t.onParametersChange,className:ve[l].className||l})};var fe,Ze=a(2857),xe=a(93695);!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(fe||(fe={}));const _e={gsheets:"service_account_info",bigquery:"credentials_info"};var we={name:"s5xdrg",styles:"display:flex;align-items:center"};const Ce=({changeMethods:e,isEditMode:t,db:a,editNewDb:n})=>{var l,r,d;const[c,p]=(0,i.useState)(fe.jsonUpload.valueOf()),[u,h]=(0,i.useState)(null),[m,g]=(0,i.useState)(!0),b="gsheets"===(null==a?void 0:a.engine)?!t&&!m:!t,v=t&&"{}"!==(null==a?void 0:a.encrypted_extra),y=(null==a?void 0:a.engine)&&_e[a.engine],f="object"==typeof(null==a||null==(l=a.parameters)?void 0:l[y])?JSON.stringify(null==a||null==(r=a.parameters)?void 0:r[y]):null==a||null==(d=a.parameters)?void 0:d[y];return(0,x.tZ)(re,null,"gsheets"===(null==a?void 0:a.engine)&&(0,x.tZ)("div",{className:"catalog-type-select"},(0,x.tZ)(Ze.Z,{css:e=>(e=>x.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,o.t)("Type of Google Sheets allowed")),(0,x.tZ)(s.IZ,{style:{width:"100%"},defaultValue:v?"false":"true",onChange:e=>g("true"===e)},(0,x.tZ)(s.IZ.Option,{value:"true",key:1},(0,o.t)("Publicly shared sheets only")),(0,x.tZ)(s.IZ.Option,{value:"false",key:2},(0,o.t)("Public and privately shared sheets")))),b&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(Ze.Z,{required:!0},(0,o.t)("How do you want to enter service account credentials?")),(0,x.tZ)(s.IZ,{defaultValue:c,style:{width:"100%"},onChange:e=>p(e)},(0,x.tZ)(s.IZ.Option,{value:fe.jsonUpload},(0,o.t)("Upload JSON file")),(0,x.tZ)(s.IZ.Option,{value:fe.copyPaste},(0,o.t)("Copy and Paste JSON credentials")))),c===fe.copyPaste||t||n?(0,x.tZ)("div",{className:"input-container"},(0,x.tZ)(Ze.Z,{required:!0},(0,o.t)("Service Account")),(0,x.tZ)("textarea",{className:"input-form",name:y,value:f,onChange:e.onParametersChange,placeholder:"Paste content of service credentials JSON file here"}),(0,x.tZ)("span",{className:"label-paste"},(0,o.t)("Copy and paste the entire service account .json file here"))):b&&(0,x.tZ)("div",{className:"input-container",css:e=>z(e)},(0,x.tZ)("div",{css:we},(0,x.tZ)(Ze.Z,{required:!0},(0,o.t)("Upload Credentials")),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!u&&(0,x.tZ)(s.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,o.t)("Choose File")),u&&(0,x.tZ)("div",{className:"input-upload-current"},u,(0,x.tZ)(xe.Z,{onClick:()=>{h(null),e.onParametersChange({target:{name:y,value:""}})}})),(0,x.tZ)("input",{id:"selectedFile",className:"input-upload",type:"file",onChange:async t=>{var a,n;let o;t.target.files&&(o=t.target.files[0]),h(null==(a=o)?void 0:a.name),e.onParametersChange({target:{type:null,name:y,value:await(null==(n=o)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var $e=a(54549);const Se=["host","port","database","username","password","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role"],ke={host:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,x.tZ)(U.Z,{id:"host",name:"host",value:null==l||null==(i=l.parameters)?void 0:i.host,required:e,hasTooltip:!0,tooltipText:(0,o.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.host,placeholder:(0,o.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,o.t)("Host"),onChange:t.onParametersChange})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var r;return(0,x.tZ)(i.Fragment,null,(0,x.tZ)(U.Z,{id:"port",name:"port",type:"number",required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:(0,o.t)("e.g. 5432"),className:"form-group-w-50",label:"Port",onChange:t.onParametersChange}))},database:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,x.tZ)(U.Z,{id:"database",name:"database",required:e,value:null==l||null==(i=l.parameters)?void 0:i.database,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database,placeholder:(0,o.t)("e.g. world_population"),label:(0,o.t)("Database name"),onChange:t.onParametersChange,helpText:(0,o.t)("Copy the name of the  database you are trying to connect to.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,x.tZ)(U.Z,{id:"username",name:"username",required:e,value:null==l||null==(i=l.parameters)?void 0:i.username,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:(0,o.t)("e.g. Analytics"),label:(0,o.t)("Username"),onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:i})=>{var r;return(0,x.tZ)(U.Z,{id:"password",name:"password",required:e,visibilityToggle:!i,value:null==l||null==(r=l.parameters)?void 0:r.password,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:(0,o.t)("e.g. ********"),label:(0,o.t)("Password"),onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:n})=>(0,x.tZ)(i.Fragment,null,(0,x.tZ)(U.Z,{id:"database_name",name:"database_name",required:!0,value:null==n?void 0:n.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,o.t)("Display Name"),onChange:e.onChange,helpText:(0,o.t)("Pick a nickname for this database to display as in Superset.")})),query:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>(0,x.tZ)(U.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.query,placeholder:(0,o.t)("e.g. param1=value1&param2=value2"),label:(0,o.t)("Additional Parameters"),onChange:t.onQueryChange,helpText:(0,o.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:n})=>{var l;return(0,x.tZ)("div",{css:e=>z(e)},(0,x.tZ)(s.KU,{disabled:n&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||n,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,x.tZ)("span",{css:B},"SSL"),(0,x.tZ)(N.Z,{tooltip:(0,o.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Ce,service_account_info:Ce,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{const r=(null==l?void 0:l.catalog)||[],s=n||{};return(0,x.tZ)(pe,null,(0,x.tZ)("h4",{className:"gsheet-title"},(0,o.t)("Connect Google Sheets as tables to this database")),(0,x.tZ)("div",null,null==r?void 0:r.map(((n,l)=>{var d,c;return(0,x.tZ)(i.Fragment,null,(0,x.tZ)(Ze.Z,{className:"catalog-label",required:!0},(0,o.t)("Google Sheet Name and URL")),(0,x.tZ)("div",{className:"catalog-name"},(0,x.tZ)(U.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(d=s[l])?void 0:d.name,placeholder:(0,o.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==r?void 0:r.length)>1&&(0,x.tZ)($e.Z,{className:"catalog-delete",onClick:()=>t.onRemoveTableCatalog(l)})),(0,x.tZ)(U.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(c=s[l])?void 0:c.url,placeholder:(0,o.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value}))})),(0,x.tZ)(de,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()}},"+ ",(0,o.t)("Add sheet"))))},warehouse:ye,role:ye,account:ye},Ne=({dbModel:{parameters:e},onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:l,onRemoveTableCatalog:i,validationErrors:r,getValidation:s,db:d,isEditMode:c=!1,sslForced:p,editNewDb:u})=>(0,x.tZ)(be.l0,null,(0,x.tZ)("div",{css:e=>[Q,Y(e)]},e&&Se.filter((t=>Object.keys(e.properties).includes(t)||"database_name"===t)).map((h=>{var m;return ke[h]({required:null==(m=e.required)?void 0:m.includes(h),changeMethods:{onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:l,onRemoveTableCatalog:i},validationErrors:r,getValidation:s,db:d,key:h,field:h,isEditMode:c,sslForced:p,editNewDb:u})})))),Ee=(0,T.z)(),Ue=Ee?Ee.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Te={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},Ae=e=>e?Ee?Ee[e]||Ee.default:Te[e]?Te[e]:`https://superset.apache.org/docs/databases/${e}`:null,Le=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:o,dbName:l,dbModel:r,editNewDb:s,fileList:d})=>{const c=d&&(null==d?void 0:d.length)>0,p=(0,x.tZ)(F,null,(0,x.tZ)(le,null,null==o?void 0:o.backend),(0,x.tZ)(ie,null,l)),u=(0,x.tZ)(F,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,x.tZ)("h4",null,"Enter Primary Credentials"),(0,x.tZ)("p",{className:"helper-bottom"},"Need help? Learn how to connect your database"," ",(0,x.tZ)("a",{href:(null==Ee?void 0:Ee.default)||Ue,target:"_blank",rel:"noopener noreferrer"},"here"),".")),h=(0,x.tZ)(ce,null,(0,x.tZ)(F,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 3 OF 3 "),(0,x.tZ)("h4",{className:"step-3-text"},"Your database was successfully connected! Here are some optional settings for your database"),(0,x.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,x.tZ)("a",{href:Ae(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),m=(0,x.tZ)(ce,null,(0,x.tZ)(F,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 2 OF 3 "),(0,x.tZ)("h4",null,"Enter the required ",r.name," credentials"),(0,x.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,x.tZ)("a",{href:Ae(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),g=(0,x.tZ)(F,null,(0,x.tZ)("div",{className:"select-db"},(0,x.tZ)("p",{className:"helper-top"}," STEP 1 OF 3 "),(0,x.tZ)("h4",null,"Select a database to connect"))),b=(0,x.tZ)(ce,null,(0,x.tZ)(F,null,(0,x.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,x.tZ)("h4",null,"Enter the required ",r.name," credentials"),(0,x.tZ)("p",{className:"helper-bottom"},c?d[0].name:"")));return c?b:e?(0,x.tZ)(i.Fragment,null):t?p:a?u:n&&!s?h:o||s?m:g};var Oe;!function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(Oe||(Oe={}));const Me={[Oe.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},De=(0,n.iK)(r.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`;var Ie;function qe(e,t){var a,n,o,l;const i={...e||{}};let r,s={},d="",c={allows_virtual_table_explore:!0};switch(t.type){case Ie.extraEditorChange:return{...i,extra_json:{...i.extra_json,[t.payload.name]:t.payload.json}};case Ie.extraInputChange:var p;return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra_json:{...i.extra_json,metadata_cache_timeout:{...null==(p=i.extra_json)?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}}}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra_json:{...i.extra_json,schemas_allowed_for_file_upload:(t.payload.value||"").split(",")}}:{...i,extra_json:{...i.extra_json,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value}};case Ie.inputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case Ie.parametersChange:if(void 0!==i.catalog&&null!=(a=t.payload.type)&&a.startsWith("catalog")){var u,h;const e=null==(u=t.payload.type)?void 0:u.split("-")[1];((null==i?void 0:i.catalog[e])||{})[t.payload.name]=t.payload.value;const a={};return null==(h=i.catalog)||h.map((e=>{a[e.name]=e.value})),{...i,parameters:{...i.parameters,catalog:a}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case Ie.addTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case Ie.removeTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case Ie.editorChange:return{...i,[t.payload.name]:t.payload.json};case Ie.queryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case Ie.textChange:return{...i,[t.payload.name]:t.payload.value};case Ie.fetched:var m,g,b;if(t.payload.extra&&(r={...JSON.parse(t.payload.extra||"")},c={...c,...JSON.parse(t.payload.extra||""),metadata_params:JSON.stringify(null==(m=r)?void 0:m.metadata_params),engine_params:JSON.stringify(null==(g=r)?void 0:g.engine_params),schemas_allowed_for_file_upload:null==(b=r)?void 0:b.schemas_allowed_for_file_upload}),s=(null==(o=t.payload)||null==(l=o.parameters)?void 0:l.query)||{},d=Object.entries(s).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.encrypted_extra&&t.payload.configuration_method===k.DYNAMIC_FORM){var v,y;const e=Object.entries((null==(v=r)||null==(y=v.engine_params)?void 0:y.catalog)||{}).map((([e,t])=>({name:e,value:t})));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,catalog:e,parameters:t.payload.parameters||i.parameters,query_input:d}}return{...t.payload,encrypted_extra:t.payload.encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,parameters:t.payload.parameters||i.parameters,query_input:d};case Ie.dbSelected:case Ie.configMethodChange:return{...t.payload};case Ie.reset:default:return null}}!function(e){e[e.configMethodChange=0]="configMethodChange",e[e.dbSelected=1]="dbSelected",e[e.editorChange=2]="editorChange",e[e.fetched=3]="fetched",e[e.inputChange=4]="inputChange",e[e.parametersChange=5]="parametersChange",e[e.reset=6]="reset",e[e.textChange=7]="textChange",e[e.extraInputChange=8]="extraInputChange",e[e.extraEditorChange=9]="extraEditorChange",e[e.addTableCatalogSheet=10]="addTableCatalogSheet",e[e.removeTableCatalogSheet=11]="removeTableCatalogSheet",e[e.queryChange=12]="queryChange"}(Ie||(Ie={}));const Pe=e=>JSON.stringify({...e,metadata_params:JSON.parse((null==e?void 0:e.metadata_params)||"{}"),engine_params:JSON.parse((null==e?void 0:e.engine_params)||"{}"),schemas_allowed_for_file_upload:((null==e?void 0:e.schemas_allowed_for_file_upload)||[]).filter((e=>""!==e))}),Fe=(0,E.ZP)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:n,show:u,databaseId:h,dbEngine:m})=>{var g;const[b,v]=(0,i.useReducer)(qe,null),{state:{loading:y,resource:f,error:Z},fetchResource:_,createResource:w,updateResource:C,clearError:$}=(0,T.LE)("database",(0,o.t)("database"),e),[E,O]=(0,i.useState)("1"),[M,D]=(0,T.cb)(),[I,q,P]=(0,T.h1)(),[F,B]=(0,i.useState)(!1),[Y,W]=(0,i.useState)(""),[X,ee]=(0,i.useState)(!1),[le,ie]=(0,i.useState)(!1),[re,pe]=(0,i.useState)(!1),[me,be]=(0,i.useState)({}),[ve,ye]=(0,i.useState)(!1),[fe,Ze]=(0,i.useState)([]),[xe,_e]=(0,i.useState)(!1),we=(0,A.c)(),Ce=(0,T.rM)(),$e=(0,T.jb)(),Se=!!h,ke=(0,l.c)(l.T.FORCE_DATABASE_CONNECTIONS_SSL),Ee=$e||!(null==b||!b.engine||!Me[b.engine]),Te=(null==b?void 0:b.configuration_method)===k.SQLALCHEMY_URI,Ae=Se||Te,Fe=I||Z,Re=e=>e&&0===Object.keys(e).length,je=(null==M||null==(g=M.databases)?void 0:g.find((e=>e.engine===(Se?null==b?void 0:b.backend:null==b?void 0:b.engine))))||{},ze=()=>{v({type:Ie.reset}),B(!1),P(null),$(),ee(!1),Ze([]),_e(!1),be({}),ye(!1),n()},{state:{alreadyExists:Be,passwordsNeeded:Qe,loading:Ke,failed:He},importResource:Ve}=(0,T.PW)("database",(0,o.t)("database"),(t=>{e(t),ze()})),Ge=(e,t)=>{v({type:e,payload:t})},Je=async()=>{var e;const{id:n,...l}=b||{},i=JSON.parse(JSON.stringify(l));if(i.configuration_method===k.DYNAMIC_FORM){const e=await q(i,!0);if(I&&!Re(I)||e)return;const t=Se?i.parameters_schema.properties:null==je?void 0:je.parameters.properties,a=JSON.parse(i.encrypted_extra||"{}");Object.keys(t||{}).forEach((e=>{var n,o,l,r;t[e]["x-encrypted-extra"]&&null!=(n=i.parameters)&&n[e]&&("object"==typeof(null==(o=i.parameters)?void 0:o[e])?(a[e]=null==(l=i.parameters)?void 0:l[e],i.parameters[e]=JSON.stringify(i.parameters[e])):a[e]=JSON.parse((null==(r=i.parameters)?void 0:r[e])||"{}"))})),i.encrypted_extra=JSON.stringify(a),i.engine===Oe.GSheet&&(i.impersonate_user=!0)}if(null!=i&&null!=(e=i.parameters)&&e.catalog&&(i.extra_json={engine_params:JSON.stringify({catalog:i.parameters.catalog})}),null!=i&&i.extra_json&&(i.extra=Pe(null==i?void 0:i.extra_json)),ie(!0),null!=b&&b.id)await C(b.id,i,i.configuration_method===k.DYNAMIC_FORM)&&(a&&a(),X||(ze(),t((0,o.t)("Database settings updated"))));else if(b)await w(i,i.configuration_method===k.DYNAMIC_FORM)&&(B(!0),a&&a(),Ae&&(ze(),t((0,o.t)("Database connected"))));else{if(_e(!0),!(fe[0].originFileObj instanceof File))return;await Ve(fe[0].originFileObj,me,ve)&&(a&&a(),ze(),t((0,o.t)("Database connected")))}ee(!1),ie(!1)},Ye=e=>{if("Other"===e)v({type:Ie.dbSelected,payload:{database_name:e,configuration_method:k.SQLALCHEMY_URI,engine:void 0}});else{const t=null==M?void 0:M.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n}=t,o=void 0!==n;v({type:Ie.dbSelected,payload:{database_name:e,engine:a,configuration_method:o?k.DYNAMIC_FORM:k.SQLALCHEMY_URI}})}v({type:Ie.addTableCatalogSheet})},We=()=>{f&&_(f.id),ee(!0)},Xe=()=>{X&&B(!1),xe&&_e(!1),v({type:Ie.reset}),Ze([])},et=()=>b?!F||X?(0,x.tZ)(i.Fragment,null,(0,x.tZ)(de,{key:"back",onClick:Xe},(0,o.t)("Back")),(0,x.tZ)(de,{key:"submit",buttonStyle:"primary",onClick:Je},(0,o.t)("Connect"))):(0,x.tZ)(i.Fragment,null,(0,x.tZ)(de,{key:"back",onClick:We},(0,o.t)("Back")),(0,x.tZ)(de,{key:"submit",buttonStyle:"primary",onClick:Je},(0,o.t)("Finish"))):xe?(0,x.tZ)(i.Fragment,null,(0,x.tZ)(de,{key:"back",onClick:Xe},(0,o.t)("Back")),(0,x.tZ)(de,{key:"submit",buttonStyle:"primary",onClick:Je,disabled:!!(Ke||Be.length&&!ve||Qe.length&&"{}"===JSON.stringify(me))},(0,o.t)("Connect"))):[],tt=(0,i.useRef)(!0);(0,i.useEffect)((()=>{tt.current?tt.current=!1:Ke||Be.length||Qe.length||le||He||(ze(),t((0,o.t)("Database connected")))}),[Be,Qe,Ke,He]),(0,i.useEffect)((()=>{u&&(O("1"),D(),ie(!0)),h&&u&&Se&&h&&(y||_(h).catch((t=>e((0,o.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[u,h]),(0,i.useEffect)((()=>{f&&(v({type:Ie.fetched,payload:f}),W(f.database_name))}),[f]),(0,i.useEffect)((()=>{le&&ie(!1),M&&m&&Ye(m)}),[M]),(0,i.useEffect)((()=>{xe&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[xe]);const at=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";ye(n.toUpperCase()===(0,o.t)("OVERWRITE"))},nt=()=>{let e=[];return!1===Re(Z)?e="object"==typeof Z?Object.values(Z):[]:(null==b?void 0:b.engine)===Oe.Snowflake&&(e="GENERIC_DB_ENGINE_ERROR"===(null==I?void 0:I.error_type)?[null==I?void 0:I.description]:[]),e.length?(0,x.tZ)(d.Z,{type:"error",css:e=>(e=>x.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:(0,o.t)("Database Creation Error"),description:(0,o.t)(e[0])}):(0,x.tZ)(i.Fragment,null)};return fe.length>0&&(Be.length||Qe.length)?(0,x.tZ)(c.Z,{css:e=>[j,K(e),G(e),J(e)],name:"database",onHandledPrimaryAction:Je,onHide:ze,primaryButtonName:(0,o.t)("Connect"),width:"500px",centered:!0,show:u,title:(0,x.tZ)("h4",null,(0,o.t)("Connect a database")),footer:et()},(0,x.tZ)(Le,{isLoading:le,isEditMode:Se,useSqlAlchemyForm:Te,hasConnectedDb:F,db:b,dbName:Y,dbModel:je,fileList:fe}),Qe.length?Qe.map((e=>(0,x.tZ)(i.Fragment,null,(0,x.tZ)(V,null,(0,x.tZ)(d.Z,{closable:!1,css:e=>H(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,o.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(0,x.tZ)(U.Z,{id:"password_needed",name:"password_needed",required:!0,value:me[e],onChange:t=>be({...me,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==I?void 0:I.password_needed,label:(0,o.t)("%s PASSWORD",e.slice(10)),css:Q})))):null,Be.length?(0,x.tZ)(i.Fragment,null,(0,x.tZ)(V,null,(0,x.tZ)(d.Z,{closable:!1,css:e=>(e=>x.iv`
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
`)(e),type:"warning",showIcon:!0,message:"",description:(0,o.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,x.tZ)(U.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==I?void 0:I.confirm_overwrite,label:(0,o.t)('TYPE "OVERWRITE" TO CONFIRM'),onChange:at,css:Q})):null):Ae?(0,x.tZ)(c.Z,{css:e=>[R,j,K(e),G(e),J(e)],name:"database",onHandledPrimaryAction:Je,onHide:ze,primaryButtonName:Se?(0,o.t)("Save"):(0,o.t)("Connect"),width:"500px",centered:!0,show:u,title:(0,x.tZ)("h4",null,Se?(0,o.t)("Edit database"):(0,o.t)("Connect a database")),footer:Se?(e=>(0,x.tZ)(i.Fragment,null,(0,x.tZ)(de,{key:"close",onClick:ze},(0,o.t)("Close")),(0,x.tZ)(de,{key:"submit",buttonStyle:"primary",onClick:Je,disabled:null==e?void 0:e.is_managed_externally,tooltip:null!=e&&e.is_managed_externally?(0,o.t)("This database is managed externally, and can't be edited in Superset"):""},(0,o.t)("Finish"))))(b):et()},(0,x.tZ)(ce,null,(0,x.tZ)(oe,null,(0,x.tZ)(Le,{isLoading:le,isEditMode:Se,useSqlAlchemyForm:Te,hasConnectedDb:F,db:b,dbName:Y,dbModel:je}))),(0,x.tZ)(De,{defaultActiveKey:"1",activeKey:E,onTabClick:e=>O(e),animated:{inkBar:!0,tabPane:!0}},(0,x.tZ)(r.ZP.TabPane,{tab:(0,x.tZ)("span",null,(0,o.t)("Basic")),key:"1"},Te?(0,x.tZ)(te,null,(0,x.tZ)(ge,{db:b,onInputChange:({target:e})=>Ge(Ie.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:we,testConnection:()=>{var a;if(null==b||!b.sqlalchemy_uri)return void e((0,o.t)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==b?void 0:b.sqlalchemy_uri)||"",database_name:(null==b||null==(a=b.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==b?void 0:b.impersonate_user)||void 0,extra:Pe(null==b?void 0:b.extra_json)||void 0,encrypted_extra:(null==b?void 0:b.encrypted_extra)||"",server_cert:(null==b?void 0:b.server_cert)||void 0};pe(!0),(0,T.xx)(n,(t=>{pe(!1),e(t)}),(e=>{pe(!1),t(e)}))},testInProgress:re}),(lt=(null==b?void 0:b.backend)||(null==b?void 0:b.engine),void 0!==(null==M||null==(it=M.databases)||null==(rt=it.find((e=>e.backend===lt||e.engine===lt)))?void 0:rt.parameters)&&!Se&&(0,x.tZ)("div",{css:e=>z(e)},(0,x.tZ)(p.Z,{buttonStyle:"link",onClick:()=>v({type:Ie.configMethodChange,payload:{database_name:null==b?void 0:b.database_name,configuration_method:k.DYNAMIC_FORM,engine:null==b?void 0:b.engine}}),css:e=>(e=>x.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,o.t)("Connect this database using the dynamic form instead")),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):(0,x.tZ)(Ne,{isEditMode:!0,sslForced:ke,dbModel:je,db:b,onParametersChange:({target:e})=>Ge(Ie.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>Ge(Ie.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>Ge(Ie.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>v({type:Ie.addTableCatalogSheet}),onRemoveTableCatalog:e=>v({type:Ie.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>q(b),validationErrors:I}),!Se&&(0,x.tZ)(V,null,(0,x.tZ)(d.Z,{closable:!1,css:e=>H(e),message:"Additional fields may be required",showIcon:!0,description:(0,x.tZ)(i.Fragment,null,(0,o.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,x.tZ)("a",{href:Ue,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."),type:"info"}))),(0,x.tZ)(r.ZP.TabPane,{tab:(0,x.tZ)("span",null,(0,o.t)("Advanced")),key:"2"},(0,x.tZ)(he,{db:b,onInputChange:({target:e})=>Ge(Ie.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>Ge(Ie.textChange,{name:e.name,value:e.value}),onEditorChange:e=>Ge(Ie.editorChange,e),onExtraInputChange:({target:e})=>{Ge(Ie.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{Ge(Ie.extraEditorChange,e)}}),Fe&&nt()))):(0,x.tZ)(c.Z,{css:e=>[j,K(e),G(e),J(e)],name:"database",onHandledPrimaryAction:Je,onHide:ze,primaryButtonName:F?(0,o.t)("Finish"):(0,o.t)("Connect"),width:"500px",centered:!0,show:u,title:(0,x.tZ)("h4",null,(0,o.t)("Connect a database")),footer:et()},F?(0,x.tZ)(i.Fragment,null,(0,x.tZ)(Le,{isLoading:le,isEditMode:Se,useSqlAlchemyForm:Te,hasConnectedDb:F,db:b,dbName:Y,dbModel:je,editNewDb:X}),X?(0,x.tZ)(Ne,{isEditMode:!0,sslForced:ke,dbModel:je,db:b,onParametersChange:({target:e})=>Ge(Ie.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>Ge(Ie.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>Ge(Ie.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>v({type:Ie.addTableCatalogSheet}),onRemoveTableCatalog:e=>v({type:Ie.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>q(b),validationErrors:I}):(0,x.tZ)(he,{db:b,onInputChange:({target:e})=>Ge(Ie.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>Ge(Ie.textChange,{name:e.name,value:e.value}),onEditorChange:e=>Ge(Ie.editorChange,e),onExtraInputChange:({target:e})=>{Ge(Ie.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>Ge(Ie.extraEditorChange,e)})):(0,x.tZ)(i.Fragment,null,!le&&(b?(0,x.tZ)(i.Fragment,null,(0,x.tZ)(Le,{isLoading:le,isEditMode:Se,useSqlAlchemyForm:Te,hasConnectedDb:F,db:b,dbName:Y,dbModel:je}),Ee&&(()=>{var e,t,a,n,o;const{hostname:l}=window.location;let i=(null==$e||null==(e=$e.REGIONAL_IPS)?void 0:e.default)||"";const r=(null==$e?void 0:$e.REGIONAL_IPS)||{};return Object.entries(r).forEach((([e,t])=>{const a=new RegExp(e);l.match(a)&&(i=t)})),(null==b?void 0:b.engine)&&(0,x.tZ)(V,null,(0,x.tZ)(d.Z,{closable:!1,css:e=>H(e),type:"info",showIcon:!0,message:(null==(t=Me[b.engine])?void 0:t.message)||(null==$e||null==(a=$e.DEFAULT)?void 0:a.message),description:(null==(n=Me[b.engine])?void 0:n.description)||(null==$e||null==(o=$e.DEFAULT)?void 0:o.description)+i}))})(),(0,x.tZ)(Ne,{db:b,sslForced:ke,dbModel:je,onAddTableCatalog:()=>{v({type:Ie.addTableCatalogSheet})},onQueryChange:({target:e})=>Ge(Ie.queryChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{v({type:Ie.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:({target:e})=>Ge(Ie.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>Ge(Ie.textChange,{name:e.name,value:e.value}),getValidation:()=>q(b),validationErrors:I}),(0,x.tZ)("div",{css:e=>z(e)},je.engine!==Oe.GSheet&&(0,x.tZ)(i.Fragment,null,(0,x.tZ)(p.Z,{buttonStyle:"link",onClick:()=>v({type:Ie.configMethodChange,payload:{engine:b.engine,configuration_method:k.SQLALCHEMY_URI,database_name:b.database_name}}),css:ae},(0,o.t)("Connect this database with a SQLAlchemy URI string instead")),(0,x.tZ)(N.Z,{tooltip:(0,o.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),Fe&&nt()):(0,x.tZ)(se,null,(0,x.tZ)(Le,{isLoading:le,isEditMode:Se,useSqlAlchemyForm:Te,hasConnectedDb:F,db:b,dbName:Y,dbModel:je}),(0,x.tZ)("div",{className:"preferred"},null==M||null==(ot=M.databases)?void 0:ot.filter((e=>e.preferred)).map((e=>(0,x.tZ)(S,{className:"preferred-item",onClick:()=>Ye(e.name),buttonText:e.name,icon:null==Ce?void 0:Ce[e.engine]})))),(()=>{var e,t;return(0,x.tZ)("div",{className:"available"},(0,x.tZ)("h4",{className:"available-label"},(0,o.t)("Or choose from a list of other databases we support:")),(0,x.tZ)("div",{className:"control-label"},(0,o.t)("Supported databases")),(0,x.tZ)(s.IZ,{className:"available-select",onChange:Ye,placeholder:(0,o.t)("Choose a database..."),showSearch:!0},null==(e=[...(null==M?void 0:M.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>(0,x.tZ)(s.IZ.Option,{value:e.name,key:e.name},e.name))),(0,x.tZ)(s.IZ.Option,{value:"Other",key:"Other"},(0,o.t)("Other"))),(0,x.tZ)(d.Z,{showIcon:!0,closable:!1,css:e=>H(e),type:"info",message:(null==$e||null==(t=$e.ADD_DATABASE)?void 0:t.message)||(0,o.t)("Want to add a new database?"),description:null!=$e&&$e.ADD_DATABASE?(0,x.tZ)(i.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,x.tZ)("a",{href:null==$e?void 0:$e.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==$e?void 0:$e.ADD_DATABASE.contact_description_link)," ",null==$e?void 0:$e.ADD_DATABASE.description):(0,x.tZ)(i.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,x.tZ)("a",{href:Ue,target:"_blank",rel:"noopener noreferrer"},(0,o.t)("here")),".")}))})(),(0,x.tZ)(ue,null,(0,x.tZ)(s.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{_e(!0),Ze([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await Ve(e.file.originFileObj,me,ve)},onRemove:e=>(Ze(fe.filter((t=>t.uid!==e.uid))),!1)},(0,x.tZ)(p.Z,{buttonStyle:"link",type:"link",css:ne},(0,o.t)("Import database from file"))))))),le&&(0,x.tZ)(L.Z,null));var ot,lt,it,rt}))},1483:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(37703);function o(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},56052:(e,t,a)=>{a.d(t,{Z:()=>H});var n=a(5872),o=a.n(n),l=a(23279),i=a.n(l),r=a(67294),s=a(51995),d=a(11965),c=a(23525),p=a(4715),u=a(83862),h=a(58593),m=a(73727),g=a(70163),b=a(29147),v=a(27600),y=a(15926),f=a.n(y),Z=a(37703),x=a(35755),_=a(61988),w=a(31069),C=a(70695);const{SubMenu:$}=u.$,S=s.iK.div`
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
`,k=s.iK.i`
  margin-top: 2px;
`;function N(e){const{locale:t,languages:a,...n}=e;return(0,d.tZ)($,o()({"aria-label":"Languages",title:(0,d.tZ)("div",{className:"f16"},(0,d.tZ)(k,{className:`flag ${a[t].flag}`})),icon:(0,d.tZ)(g.Z.TriangleDown,null)},n),Object.keys(a).map((e=>(0,d.tZ)(u.$.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,d.tZ)(S,{className:"f16"},(0,d.tZ)("i",{className:`flag ${a[e].flag}`}),(0,d.tZ)("a",{href:a[e].url},a[e].name))))))}var E,U=a(6238),T=a(40768);!function(e){e.GOOGLE_SHEETS="gsheets",e.DB_CONNECTION="dbconnection"}(E||(E={}));const A=e=>d.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,L=s.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,O=e=>d.iv`
  color: ${e.colors.grayscale.base};
  backgroundColor: ${e.colors.grayscale.light2}};
  .ant-menu-item:hover {
    color: ${e.colors.grayscale.base};
    cursor: default;
  }
`,M=s.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
  margin-right: ${({theme:e})=>e.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
`,D=s.iK.a`
  padding-right: ${({theme:e})=>e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,{SubMenu:I}=u.$,q=({align:e,settings:t,navbarRight:a,isFrontendRoute:n,setQuery:o})=>{const l=(0,Z.v9)((e=>e.user)),i=(0,Z.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),{roles:s}=l,{CSV_EXTENSIONS:c,COLUMNAR_EXTENSIONS:p,EXCEL_EXTENSIONS:b,ALLOWED_EXTENSIONS:v,HAS_GSHEETS_INSTALLED:y}=(0,Z.v9)((e=>e.common.conf)),[x,$]=(0,r.useState)(!1),[S,k]=(0,r.useState)(""),q=(0,C.ZP)("can_sqllab","Superset",s),P=(0,C.ZP)("can_write","Dashboard",s),F=(0,C.ZP)("can_write","Chart",s),R=(0,C.ZP)("can_write","Database",s),{canUploadData:j,canUploadCSV:z,canUploadColumnar:B,canUploadExcel:Q}=(0,T.Mc)(s,c,p,b,v),K=q||F||P,[H,V]=(0,r.useState)(!1),G=(0,C.i5)(l),J=H||G,Y=[{label:(0,_.t)("Data"),icon:"fa-database",childs:[{label:(0,_.t)("Connect database"),name:E.DB_CONNECTION,perm:R},{label:(0,_.t)("Connect Google Sheet"),name:E.GOOGLE_SHEETS,perm:R&&y},{label:(0,_.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:z&&J},{label:(0,_.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:B&&J},{label:(0,_.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:Q&&J}]},{label:(0,_.t)("SQL query"),url:"/superset/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,_.t)("Chart"),url:Number.isInteger(i)?`/chart/add?dashboard_id=${i}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,_.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],W=()=>{w.Z.get({endpoint:`/api/v1/database/?q=${f().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{V(e.count>=1)}))};(0,r.useEffect)((()=>{j&&W()}),[j]);const X=e=>(0,d.tZ)(r.Fragment,null,(0,d.tZ)("i",{className:`fa ${e.icon}`}),e.label),ee=G&&!H,te=(0,_.t)("Enable 'Allow data upload' in any database's settings");return(0,d.tZ)(M,{align:e},R&&(0,d.tZ)(U.Z,{onHide:()=>{k(""),$(!1)},show:x,dbEngine:S,onDatabaseAdd:()=>o({databaseAdded:!0})}),(0,d.tZ)(u.$,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===E.DB_CONNECTION?$(!0):e.key===E.GOOGLE_SHEETS&&($(!0),k("Google Sheets"))},onOpenChange:e=>e.length&&j?W():null},!a.user_is_anonymous&&K&&(0,d.tZ)(I,{title:(0,d.tZ)(L,{className:"fa fa-plus"}),icon:(0,d.tZ)(g.Z.TriangleDown,null)},Y.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){if(a)return(0,d.tZ)(I,{key:`sub2_${e.label}`,className:"data-menu",title:X(e)},e.childs.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,d.tZ)(r.Fragment,{key:e.name},2===t&&(0,d.tZ)(u.$.Divider,null),(e=>ee&&e.url?(0,d.tZ)(u.$.Item,{key:e.name,css:O},(0,d.tZ)(h.u,{placement:"top",title:te},e.label)):(0,d.tZ)(u.$.Item,{key:e.name},e.url?(0,d.tZ)("a",{href:e.url}," ",e.label," "):e.label))(e)):null)));if(!e.url)return null}return(0,C.ZP)(e.perm,e.view,s)&&(0,d.tZ)(u.$.Item,{key:e.label},(0,d.tZ)("a",{href:e.url},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))}))),(0,d.tZ)(I,{title:(0,_.t)("Settings"),icon:(0,d.tZ)(g.Z.TriangleDown,{iconSize:"xl"})},t.map(((e,a)=>{var o;return[(0,d.tZ)(u.$.ItemGroup,{key:`${e.label}`,title:e.label},null==(o=e.childs)?void 0:o.map((e=>"string"!=typeof e?(0,d.tZ)(u.$.Item,{key:`${e.label}`},n(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},e.label):(0,d.tZ)("a",{href:e.url},e.label)):null))),a<t.length-1&&(0,d.tZ)(u.$.Divider,{key:`divider_${a}`})]})),!a.user_is_anonymous&&[(0,d.tZ)(u.$.Divider,{key:"user-divider"}),(0,d.tZ)(u.$.ItemGroup,{key:"user-section",title:(0,_.t)("User")},a.user_profile_url&&(0,d.tZ)(u.$.Item,{key:"profile"},(0,d.tZ)("a",{href:a.user_profile_url},(0,_.t)("Profile"))),a.user_info_url&&(0,d.tZ)(u.$.Item,{key:"info"},(0,d.tZ)("a",{href:a.user_info_url},(0,_.t)("Info"))),(0,d.tZ)(u.$.Item,{key:"logout"},(0,d.tZ)("a",{href:a.user_logout_url},(0,_.t)("Logout"))))],(a.version_string||a.version_sha)&&[(0,d.tZ)(u.$.Divider,{key:"version-info-divider"}),(0,d.tZ)(u.$.ItemGroup,{key:"about-section",title:(0,_.t)("About")},(0,d.tZ)("div",{className:"about-section"},a.show_watermark&&(0,d.tZ)("div",{css:A},(0,_.t)("Powered by Apache Superset")),a.version_string&&(0,d.tZ)("div",{css:A},"Version: ",a.version_string),a.version_sha&&(0,d.tZ)("div",{css:A},"SHA: ",a.version_sha),a.build_number&&(0,d.tZ)("div",{css:A},"Build: ",a.build_number)))]),a.show_language_picker&&(0,d.tZ)(N,{locale:a.locale,languages:a.languages})),a.documentation_url&&(0,d.tZ)(D,{href:a.documentation_url,target:"_blank",rel:"noreferrer",title:(0,_.t)("Documentation")},(0,d.tZ)("i",{className:"fa fa-question"})," "),a.bug_report_url&&(0,d.tZ)(D,{href:a.bug_report_url,target:"_blank",rel:"noreferrer",title:(0,_.t)("Report a bug")},(0,d.tZ)("i",{className:"fa fa-bug"})),a.user_is_anonymous&&(0,d.tZ)(D,{href:a.user_login_url},(0,d.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,_.t)("Login")))},P=e=>{const[,t]=(0,x.Kx)({databaseAdded:x.dJ});return(0,d.tZ)(q,o()({setQuery:t},e))};class F extends r.PureComponent{constructor(...e){super(...e),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,d.tZ)(q,o()({setQuery:this.noop},this.props)):this.props.children}}const R=e=>(0,d.tZ)(F,e,(0,d.tZ)(P,e)),j=s.iK.header`
  ${({theme:e})=>`\n      background-color: ${e.colors.grayscale.light5};\n      margin-bottom: 2px;\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${e.gridUnit}px ${2*e.gridUnit}px ${e.gridUnit}px ${4*e.gridUnit}px;\n        max-width: ${37*e.gridUnit}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${e.colors.grayscale.light2};\n        border-right: 1px solid ${e.colors.grayscale.light2};\n        height: 100%;\n        color: ${e.colors.grayscale.dark1};\n        padding-left: ${4*e.gridUnit}px;\n        padding-right: ${4*e.gridUnit}px;\n        margin-right: ${6*e.gridUnit}px;\n        font-size: ${4*e.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*e.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*e.gridUnit}px 0\n            ${3*e.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-child(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${e.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${e.colors.grayscale.dark1};\n          background-color: ${e.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}
`,z=e=>d.iv`
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
`,{SubMenu:B}=u.$,{useBreakpoint:Q}=p.rj;function K({data:{menu:e,brand:t,navbar_right:a,settings:n},isFrontendRoute:o=(()=>!1)}){const[l,y]=(0,r.useState)("horizontal"),f=Q(),Z=(0,b.fG)(),x=(0,s.Fg)();return(0,r.useEffect)((()=>{function e(){window.innerWidth<=767?y("inline"):y("horizontal")}e();const t=i()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),(0,c.eY)(v.KD.standalone)||Z.hideNav?(0,d.tZ)(r.Fragment,null):(0,d.tZ)(j,{className:"top",id:"main-menu",role:"navigation"},(0,d.tZ)(d.xB,{styles:z(x)}),(0,d.tZ)(p.X2,null,(0,d.tZ)(p.JX,{md:16,xs:24},(0,d.tZ)(h.u,{id:"brand-tooltip",placement:"bottomLeft",title:t.tooltip,arrowPointAtCenter:!0},(0,d.tZ)("a",{className:"navbar-brand",href:t.path},(0,d.tZ)("img",{src:t.icon,alt:t.alt}))),t.text&&(0,d.tZ)("div",{className:"navbar-brand-text"},(0,d.tZ)("span",null,t.text)),(0,d.tZ)(u.$,{mode:l,className:"main-nav"},e.map(((e,t)=>{var a;return(({label:e,childs:t,url:a,index:n,isFrontendRoute:o})=>a&&o?(0,d.tZ)(u.$.Item,{key:e,role:"presentation"},(0,d.tZ)(m.rU,{role:"button",to:a},e)):a?(0,d.tZ)(u.$.Item,{key:e},(0,d.tZ)("a",{href:a},e)):(0,d.tZ)(B,{key:n,title:e,icon:"inline"===l?(0,d.tZ)(r.Fragment,null):(0,d.tZ)(g.Z.TriangleDown,null)},null==t?void 0:t.map(((t,a)=>"string"==typeof t&&"-"===t&&"Data"!==e?(0,d.tZ)(u.$.Divider,{key:`$${a}`}):"string"!=typeof t?(0,d.tZ)(u.$.Item,{key:`${t.label}`},t.isFrontendRoute?(0,d.tZ)(m.rU,{to:t.url||""},t.label):(0,d.tZ)("a",{href:t.url},t.label)):null))))({index:t,...e,isFrontendRoute:o(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:o(e.url)}))})})))),(0,d.tZ)(p.JX,{md:8,xs:24},(0,d.tZ)(R,{align:f.md?"flex-end":"flex-start",settings:n,navbarRight:a,isFrontendRoute:o}))))}function H({data:e,...t}){const a={...e},n={Security:!0,Manage:!0},l=[],i=[];return a.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),n.hasOwnProperty(e.name)?i.push(a):l.push(a)})),a.menu=l,a.settings=i,(0,d.tZ)(K,o()({data:a},t))}}}]);
//# sourceMappingURL=6052.ce8cf4f86062bab12735.entry.js.map