"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4502],{27989:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),o=a(37840),l=a(60650),i=a(35932),r=a(74069),s=a(82191),d=a(34858),c=a(11965);const p=o.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,u=o.iK.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
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
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:o,addDangerToast:h,addSuccessToast:m,onModelImport:g,show:b,onHide:v,passwordFields:y=[],setPasswordFields:f=(()=>{})})=>{const[Z,x]=(0,n.useState)(!0),[_,C]=(0,n.useState)({}),[w,N]=(0,n.useState)(!1),[$,S]=(0,n.useState)(!1),[E,k]=(0,n.useState)([]),[T,A]=(0,n.useState)(!1),U=()=>{k([]),f([]),C({}),N(!1),S(!1),A(!1)},{state:{alreadyExists:O,passwordsNeeded:L},importResource:M}=(0,d.PW)(e,t,(e=>{U(),h(e)}));(0,n.useEffect)((()=>{f(L),L.length>0&&A(!1)}),[L,f]),(0,n.useEffect)((()=>{N(O.length>0),O.length>0&&A(!1)}),[O,N]);return Z&&b&&x(!1),(0,c.tZ)(r.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===E.length||w&&!$||T,onHandledPrimaryAction:()=>{var e;(null==(e=E[0])?void 0:e.originFileObj)instanceof File&&(A(!0),M(E[0].originFileObj,_,$).then((e=>{e&&(m((0,l.t)("The import was successful")),U(),g())})))},onHide:()=>{x(!0),v(),U()},primaryButtonName:w?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:w?"danger":"primary",width:"750px",show:b,title:(0,c.tZ)("h4",null,(0,l.t)("Import %s",t))},(0,c.tZ)(u,null,(0,c.tZ)(s.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:E,onChange:e=>{k([{...e.file,status:"done"}])},onRemove:e=>(k(E.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(i.Z,{loading:T},"Select file"))),0===y.length?null:(0,c.tZ)(n.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(p,null,a),y.map((e=>(0,c.tZ)(u,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>C({..._,[e]:t.target.value})}))))),w?(0,c.tZ)(n.Fragment,null,(0,c.tZ)(u,null,(0,c.tZ)("div",{className:"confirm-overwrite"},o),(0,c.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";S(n.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},95413:(e,t,a)=>{a.d(t,{Y:()=>o});var n=a(60650);const o={name:(0,n.t)("Data"),tabs:[{name:"Databases",label:(0,n.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,n.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},73246:(e,t,a)=>{a.r(t),a.d(t,{default:()=>it});var n=a(60650),o=a(37840),l=a(21173),i=a(67294),r=a(38703),s=a(91877),d=a(46415),c=a(34858),p=a(40768),u=a(14114),h=a(62753),m=a(17198),g=a(58593),b=a(38097),v=a(9678),y=a(95413),f=a(27989),Z=a(32228),x=a(94435),_=a.n(x),C=a(40637),w=a(82191),N=a(29487),$=a(74069),S=a(35932);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const k={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},T=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function A(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const U={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},O=Object.keys(U);class L extends i.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(k).forEach((t=>{e.style[t]=k[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);T.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,o={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(o,e.onReflow.bind(this,o))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,o=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>o&&(n++,e.push(a),o=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const o=this.canvas.lastElementChild;let l=A(o,2);for(;l&&(o.offsetTop>n||o.offsetHeight>l.offsetHeight||o.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=A(o,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:o,trimRight:l,className:r}=a,s=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(a,["component","ellipsis","trimRight","className"]);return i.createElement(n,E({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(s,O)),t&&l?e.replace(/[\s\uFEFF\xA0]+$/,""):e,i.createElement("wbr",null),t&&i.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}L.defaultProps=U;const M=L;var q=a(11965);const P=(0,o.iK)(S.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,R=o.iK.div`
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
`,D=o.iK.div`
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
`,I=o.iK.div`
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
`,z=(0,o.iK)((({icon:e,altText:t,buttonText:a,...n})=>(0,q.tZ)(P,n,(0,q.tZ)(R,null,e&&(0,q.tZ)("img",{src:e,alt:t}),!e&&(0,q.tZ)(b.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,q.tZ)(I,null,(0,q.tZ)(D,null,(0,q.tZ)(M,{text:a,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
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
`;var F,j=a(8272),H=a(1483);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(F||(F={}));var B=a(94184),Q=a.n(B),V=a(49576),K=a(43700),Y=a(94670);const J=q.iv`
  margin-bottom: 0;
`,W=o.iK.header`
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
    font-weight: bold;
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
`,G=q.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,X=q.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,ee=e=>q.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,te=e=>q.iv`
  padding-left: ${2*e.gridUnit}px;
`,ae=e=>q.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,ne=e=>q.iv`
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

  .ant-modal-title > h4 {
    font-weight: bold;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,oe=e=>q.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.s+1}px;
    font-weight: bold;
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
`,le=o.iK.div`
  margin: 0 ${({theme:e})=>4*e.gridUnit}px -${({theme:e})=>4*e.gridUnit}px;
`,ie=e=>q.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.s+1}px;
    font-weight: bold;
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
`,re=e=>q.iv`
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
`,se=e=>q.iv`
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
`,de=e=>q.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s-1}px;
    margin-bottom: 0;
  }
`,ce=o.iK.div`
  margin-bottom: ${({theme:e})=>6*e.gridUnit}px;
  &.mb-0 {
    margin-bottom: 0;
  }
  &.mb-8 {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .input-container {
    display: flex;
    align-items: top;

    label {
      display: flex;
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
      margin-top: ${({theme:e})=>.75*e.gridUnit}px;
      font-family: ${({theme:e})=>e.typography.families.sansSerif};
      font-size: ${({theme:e})=>e.typography.sizes.m}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
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
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>8*e.gridUnit}px;
    margin-bottom: 0;
    padding: 0;
    .control-label {
      margin-bottom: 0;
    }
    &.open {
      height: ${102}px;
      padding-right: ${({theme:e})=>5*e.gridUnit}px;
    }
  }
`,pe=(0,o.iK)(Y.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,ue=o.iK.div`
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
`,he=o.iK.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,me=e=>q.iv`
  font-weight: 400;
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ge=o.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
    margin: 0px;
  }
`,be=(o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: bold;
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
  text-transform: uppercase;
`),ve=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: bold;
`,ye=o.iK.div`
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
  }`,fe=o.iK.div`
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
      font-weight: bold;
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
`,Ze=(0,o.iK)(S.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,xe=o.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
`,_e=o.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>1.1*e.typography.sizes.l}px;
    font-weight: bold;
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
`,Ce=({db:e,onInputChange:t,onTextChange:a,onEditorChange:o,onExtraInputChange:l,onExtraEditorChange:i})=>{var r,s,d,c,p,u,h,m,g,b,v;const y=!(null==e||!e.expose_in_sqllab),f=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas);return(0,q.tZ)(K.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>q.iv`
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
    font-weight: bold;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},(0,q.tZ)(K.Z.Panel,{header:(0,q.tZ)("div",null,(0,q.tZ)("h4",null,"SQL Lab"),(0,q.tZ)("p",{className:"helper"},"Adjust how this database will interact with SQL Lab.")),key:"1"},(0,q.tZ)(ce,{css:J},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,n.t)("Expose database in SQL Lab")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Allow this database to be queried in SQL Lab")})),(0,q.tZ)(ue,{className:Q()("expandable",{open:y,"ctas-open":f})},(0,q.tZ)(ce,{css:J},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,n.t)("Allow CREATE TABLE AS")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Allow creation of new tables based on queries")}))),(0,q.tZ)(ce,{css:J},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,n.t)("Allow CREATE VIEW AS")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Allow creation of new views based on queries")})),(0,q.tZ)(ce,{className:Q()("expandable",{open:f})},(0,q.tZ)("div",{className:"control-label"},(0,n.t)("CTAS & CVAS SCHEMA")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"text",name:"force_ctas_schema",value:(null==e?void 0:e.force_ctas_schema)||"",placeholder:(0,n.t)("Create or select schema..."),onChange:t})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,q.tZ)(ce,{css:J},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,n.t)("Allow DML")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,q.tZ)(ce,{css:J},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allow_multi_schema_metadata_fetch",indeterminate:!1,checked:!(null==e||!e.allow_multi_schema_metadata_fetch),onChange:t,labelText:(0,n.t)("Allow Multi Schema Metadata Fetch")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.")}))),(0,q.tZ)(ce,{css:J},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==e||null==(r=e.extra_json)||!r.cost_estimate_enabled),onChange:l,labelText:(0,n.t)("Enable query cost estimation")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("For Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==e||null==(s=e.extra_json)||!s.allows_virtual_table_explore),onChange:l,labelText:(0,n.t)("Allow this database to be explored")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("When enabled, users are able to visualize SQL Lab results in Explore.")})))))),(0,q.tZ)(K.Z.Panel,{header:(0,q.tZ)("div",null,(0,q.tZ)("h4",null,"Performance"),(0,q.tZ)("p",{className:"helper"},"Adjust performance settings of this database.")),key:"2"},(0,q.tZ)(ce,{className:"mb-8"},(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Chart cache timeout")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,n.t)("Enter duration in seconds"),onChange:t})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined."))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Schema cache timeout")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==e||null==(d=e.extra_json)||null==(c=d.metadata_cache_timeout)?void 0:c.schema_cache_timeout)||"",placeholder:(0,n.t)("Enter duration in seconds"),onChange:l})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Table cache timeout")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==e||null==(p=e.extra_json)||null==(u=p.metadata_cache_timeout)?void 0:u.table_cache_timeout)||"",placeholder:(0,n.t)("Enter duration in seconds"),onChange:l})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,q.tZ)(ce,{css:(0,q.iv)({no_margin_bottom:J},"","")},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:(0,n.t)("Asynchronous query execution")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,q.tZ)(ce,{css:(0,q.iv)({no_margin_bottom:J},"","")},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==e||null==(h=e.extra_json)||!h.cancel_query_on_windows_unload),onChange:l,labelText:(0,n.t)("Cancel query on window unload event")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,q.tZ)(K.Z.Panel,{header:(0,q.tZ)("div",null,(0,q.tZ)("h4",null,"Security"),(0,q.tZ)("p",{className:"helper"},"Add extra connection information.")),key:"3"},(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Secure extra")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(pe,{name:"encrypted_extra",value:(null==e?void 0:e.encrypted_extra)||"",placeholder:(0,n.t)("Secure extra"),onChange:e=>o({json:e,name:"encrypted_extra"}),width:"100%",height:"160px"})),(0,q.tZ)("div",{className:"helper"},(0,q.tZ)("div",null,(0,n.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Root certificate")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,n.t)("Enter CA_BUNDLE"),onChange:a})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Schemas allowed for CSV upload")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==e||null==(m=e.extra_json)?void 0:m.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("A comma-separated list of schemas that CSVs are allowed to upload to."))),(0,q.tZ)(ce,{css:(0,q.iv)({no_margin_bottom:J},"","")},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,n.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),(0,q.tZ)(ce,{css:(0,q.iv)({...J},"","")},(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(V.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,n.t)("Allow data upload")}),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("If selected, please set the schemas allowed for data upload in Extra.")})))),(0,q.tZ)(K.Z.Panel,{header:(0,q.tZ)("div",null,(0,q.tZ)("h4",null,"Other"),(0,q.tZ)("p",{className:"helper"},"Additional settings.")),key:"4"},(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Metadata Parameters")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(pe,{name:"metadata_params",value:(null==e||null==(g=e.extra_json)?void 0:g.metadata_params)||"",placeholder:(0,n.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px"})),(0,q.tZ)("div",{className:"helper"},(0,q.tZ)("div",null,(0,n.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Engine Parameters")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(pe,{name:"engine_params",value:(null==e||null==(b=e.extra_json)?void 0:b.engine_params)||"",placeholder:(0,n.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px"})),(0,q.tZ)("div",{className:"helper"},(0,q.tZ)("div",null,(0,n.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Version")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"number",name:"version",value:(null==e||null==(v=e.extra_json)?void 0:v.version)||"",placeholder:(0,n.t)("Version number"),onChange:l})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Specify the database version. This should be used with Presto in order to enable query cost estimation.")))))},we=({db:e,onInputChange:t,testConnection:a,conf:o,isEditMode:l=!1})=>{var r,s;return(0,q.tZ)(i.Fragment,null,(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("Display Name"),(0,q.tZ)("span",{className:"required"},"*")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:(0,n.t)("Name your database"),onChange:t})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Pick a name to help you identify this database."))),(0,q.tZ)(ce,null,(0,q.tZ)("div",{className:"control-label"},(0,n.t)("SQLAlchemy URI"),(0,q.tZ)("span",{className:"required"},"*")),(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(0,n.t)("dialect+driver://username:password@host:port/database"),onChange:t})),(0,q.tZ)("div",{className:"helper"},(0,n.t)("Refer to the")," ",(0,q.tZ)("a",{href:null!=(r=null==o?void 0:o.SQLALCHEMY_DOCS_URL)?r:"",target:"_blank",rel:"noopener noreferrer"},null!=(s=null==o?void 0:o.SQLALCHEMY_DISPLAY_TEXT)?s:"")," ",(0,n.t)("for more information on how to structure your URI."))),(0,q.tZ)(S.Z,{onClick:a,cta:!0,buttonStyle:"link",css:e=>(e=>q.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,n.t)("Test connection")))};var Ne=a(70917);const $e={account:{helpText:(0,n.t)("Copy the account name of that database you are trying to connect to."),placeholder:"e.g. world_population"},warehouse:{placeholder:"e.g. compute_wh",className:"form-group-w-50"},role:{placeholder:"e.g. AccountAdmin",className:"form-group-w-50"}},Se=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o,field:l})=>{var i;return(0,q.tZ)(Ne.Z,{id:l,name:l,required:e,value:null==o||null==(i=o.parameters)?void 0:i[l],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[l],placeholder:$e[l].placeholder,helpText:$e[l].helpText,label:l,onChange:t.onParametersChange,className:$e[l].className||l})};var Ee=a(2857);const ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]},name:"delete",theme:"filled"};var Te=a(27029),Ae=function(e,t){return i.createElement(Te.Z,Object.assign({},e,{ref:t,icon:ke}))};Ae.displayName="DeleteFilled";const Ue=i.forwardRef(Ae);var Oe;!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(Oe||(Oe={}));const Le={gsheets:"service_account_info",bigquery:"credentials_info"};var Me={name:"s5xdrg",styles:"display:flex;align-items:center"};const qe=({changeMethods:e,isEditMode:t,db:a,editNewDb:o})=>{var l,r,s;const[d,c]=(0,i.useState)(Oe.jsonUpload.valueOf()),[p,u]=(0,i.useState)(null),[h,m]=(0,i.useState)(!0),g="gsheets"===(null==a?void 0:a.engine)?!t&&!h:!t,b=t&&"{}"!==(null==a?void 0:a.encrypted_extra),v=(null==a?void 0:a.engine)&&Le[a.engine],y="object"==typeof(null==a||null==(l=a.parameters)?void 0:l[v])?JSON.stringify(null==a||null==(r=a.parameters)?void 0:r[v]):null==a||null==(s=a.parameters)?void 0:s[v];return(0,q.tZ)(ye,null,"gsheets"===(null==a?void 0:a.engine)&&(0,q.tZ)("div",{className:"catalog-type-select"},(0,q.tZ)(Ee.Z,{css:e=>(e=>q.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,n.t)("Type of Google Sheets allowed")),(0,q.tZ)(w.Ph,{style:{width:"100%"},defaultValue:b?"false":"true",onChange:e=>m("true"===e)},(0,q.tZ)(w.Ph.Option,{value:"true",key:1},(0,n.t)("Publicly shared sheets only")),(0,q.tZ)(w.Ph.Option,{value:"false",key:2},(0,n.t)("Public and privately shared sheets")))),g&&(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ee.Z,{required:!0},(0,n.t)("How do you want to enter service account credentials?")),(0,q.tZ)(w.Ph,{defaultValue:d,style:{width:"100%"},onChange:e=>c(e)},(0,q.tZ)(w.Ph.Option,{value:Oe.jsonUpload},(0,n.t)("Upload JSON file")),(0,q.tZ)(w.Ph.Option,{value:Oe.copyPaste},(0,n.t)("Copy and Paste JSON credentials")))),d===Oe.copyPaste||t||o?(0,q.tZ)("div",{className:"input-container"},(0,q.tZ)(Ee.Z,{required:!0},(0,n.t)("Service Account")),(0,q.tZ)("textarea",{className:"input-form",name:v,value:y,onChange:e.onParametersChange,placeholder:"Paste content of service credentials JSON file here"}),(0,q.tZ)("span",{className:"label-paste"},(0,n.t)("Copy and paste the entire service account .json file here"))):g&&(0,q.tZ)("div",{className:"input-container",css:e=>ee(e)},(0,q.tZ)("div",{css:Me},(0,q.tZ)(Ee.Z,{required:!0},(0,n.t)("Upload Credentials")),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!p&&(0,q.tZ)(w.zx,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,n.t)("Choose File")),p&&(0,q.tZ)("div",{className:"input-upload-current"},p,(0,q.tZ)(Ue,{onClick:()=>{u(null),e.onParametersChange({target:{name:v,value:""}})}})),(0,q.tZ)("input",{id:"selectedFile",className:"input-upload",type:"file",onChange:async t=>{var a,n;let o;t.target.files&&(o=t.target.files[0]),u(null==(a=o)?void 0:a.name),e.onParametersChange({target:{type:null,name:v,value:await(null==(n=o)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))},Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};var Re=function(e,t){return i.createElement(Te.Z,Object.assign({},e,{ref:t,icon:Pe}))};Re.displayName="CloseOutlined";const De=i.forwardRef(Re),Ie=["host","port","database","username","password","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role"],ze={host:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>{var i;return(0,q.tZ)(Ne.Z,{id:"host",name:"host",value:null==l||null==(i=l.parameters)?void 0:i.host,required:e,hasTooltip:!0,tooltipText:(0,n.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.host,placeholder:"e.g. 127.0.0.1",className:"form-group-w-50",label:"Host",onChange:t.onParametersChange})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o})=>{var l;return(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ne.Z,{id:"port",name:"port",type:"number",required:e,value:null==o||null==(l=o.parameters)?void 0:l.port,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:"e.g. 5432",className:"form-group-w-50",label:"Port",onChange:t.onParametersChange}))},database:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>{var i;return(0,q.tZ)(Ne.Z,{id:"database",name:"database",required:e,value:null==l||null==(i=l.parameters)?void 0:i.database,validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.database,placeholder:"e.g. world_population",label:"Database name",onChange:t.onParametersChange,helpText:(0,n.t)("Copy the name of the  database you are trying to connect to.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o})=>{var l;return(0,q.tZ)(Ne.Z,{id:"username",name:"username",required:e,value:null==o||null==(l=o.parameters)?void 0:l.username,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:"e.g. Analytics",label:"Username",onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o,isEditMode:l})=>{var i;return(0,q.tZ)(Ne.Z,{id:"password",name:"password",required:e,type:l&&"password",value:null==o||null==(i=o.parameters)?void 0:i.password,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:"e.g. ********",label:"Password",onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:o})=>(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ne.Z,{id:"database_name",name:"database_name",required:!0,value:null==o?void 0:o.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,n.t)("Display Name"),onChange:e.onChange,helpText:(0,n.t)("Pick a nickname for this database to display as in Superset.")})),query:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>(0,q.tZ)(Ne.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==o?void 0:o.query,placeholder:"e.g. param1=value1&param2=value2",label:"Additional Parameters",onChange:t.onQueryChange,helpText:(0,n.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:o})=>{var l;return(0,q.tZ)("div",{css:e=>ee(e)},(0,q.tZ)(w.rs,{disabled:o&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||o,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,q.tZ)("span",{css:te},"SSL"),(0,q.tZ)(j.Z,{tooltip:(0,n.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:qe,service_account_info:qe,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:o,db:l})=>{const r=(null==l?void 0:l.catalog)||[],s=o||{};return(0,q.tZ)(_e,null,(0,q.tZ)("h4",{className:"gsheet-title"},(0,n.t)("Connect Google Sheets as tables to this database")),(0,q.tZ)("div",null,null==r?void 0:r.map(((o,l)=>{var d,c;return(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ee.Z,{className:"catalog-label",required:!0},(0,n.t)("Google Sheet Name and URL")),(0,q.tZ)("div",{className:"catalog-name"},(0,q.tZ)(Ne.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(d=s[l])?void 0:d.name,placeholder:(0,n.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:o.name}),(null==r?void 0:r.length)>1&&(0,q.tZ)(De,{className:"catalog-delete",onClick:()=>t.onRemoveTableCatalog(l)})),(0,q.tZ)(Ne.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(c=s[l])?void 0:c.url,placeholder:(0,n.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:o.value}))})),(0,q.tZ)(Ze,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()}},"+ ",(0,n.t)("Add sheet"))))},warehouse:Se,role:Se,account:Se},Fe=({dbModel:{parameters:e},onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:l,onRemoveTableCatalog:r,validationErrors:s,getValidation:d,db:c,isEditMode:p=!1,sslForced:u,editNewDb:h})=>(0,q.tZ)(i.Fragment,null,(0,q.tZ)("div",{css:e=>[ae,de(e)]},e&&Ie.filter((t=>Object.keys(e.properties).includes(t)||"database_name"===t)).map((i=>{var m;return ze[i]({required:null==(m=e.required)?void 0:m.includes(i),changeMethods:{onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:l,onRemoveTableCatalog:r},validationErrors:s,getValidation:d,db:c,key:i,field:i,isEditMode:p,sslForced:u,editNewDb:h})})))),je=(0,c.z)(),He=je?je.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Be={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},Qe=e=>e?je?je[e]||je.default:Be[e]?Be[e]:`https://superset.apache.org/docs/databases/${e}`:null,Ve=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:o,dbName:l,dbModel:r,editNewDb:s})=>{const d=(0,q.tZ)(W,null,(0,q.tZ)(be,null,null==o?void 0:o.backend),(0,q.tZ)(ve,null,l)),c=(0,q.tZ)(W,null,(0,q.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,q.tZ)("h4",null,"Enter Primary Credentials"),(0,q.tZ)("p",{className:"helper-bottom"},"Need help? Learn how to connect your database"," ",(0,q.tZ)("a",{href:(null==je?void 0:je.default)||He,target:"_blank",rel:"noopener noreferrer"},"here"),".")),p=(0,q.tZ)(xe,null,(0,q.tZ)(W,null,(0,q.tZ)("p",{className:"helper-top"}," STEP 3 OF 3 "),(0,q.tZ)("h4",{className:"step-3-text"},"Your database was successfully connected! Here are some optional settings for your database"),(0,q.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,q.tZ)("a",{href:Qe(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),u=(0,q.tZ)(xe,null,(0,q.tZ)(W,null,(0,q.tZ)("p",{className:"helper-top"}," STEP 2 OF 3 "),(0,q.tZ)("h4",null,"Enter the required ",r.name," credentials"),(0,q.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,q.tZ)("a",{href:Qe(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),h=(0,q.tZ)(W,null,(0,q.tZ)("div",{className:"select-db"},(0,q.tZ)("p",{className:"helper-top"}," STEP 1 OF 3 "),(0,q.tZ)("h4",null,"Select a database to connect")));return e?(0,q.tZ)(i.Fragment,null):t?d:a?c:n&&!s?p:o||s?u:h},Ke={gsheets:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},Ye={CONNECTION_MISSING_PARAMETERS_ERROR:{message:"Missing Required Fields",description:"Please complete all required fields."},CONNECTION_INVALID_HOSTNAME_ERROR:{message:"Could not verify the host",description:"The host is invalid. Please verify that this field is entered correctly."},CONNECTION_PORT_CLOSED_ERROR:{message:"Port is closed",description:"Please verify that port is open to connect."},CONNECTION_INVALID_PORT_ERROR:{message:"Invalid Port Number",description:"The port must be a whole number less than or equal to 65535."},CONNECTION_ACCESS_DENIED_ERROR:{message:"Invalid account information",description:"Either the username or password is incorrect."},CONNECTION_INVALID_PASSWORD_ERROR:{message:"Invalid account information",description:"Either the username or password is incorrect."},INVALID_PAYLOAD_SCHEMA_ERROR:{message:"Incorrect Fields",description:"Please make sure all fields are filled out correctly"},TABLE_DOES_NOT_EXIST_ERROR:{message:"URL could not be identified",description:'The URL could not be identified. Please check for typos and make sure that "Type of google sheet allowed" selection matches the input'}};var Je;function We(e,t){var a,n,o,l;const i={...e||{}};let r,s={},d="",c={};switch(t.type){case Je.extraEditorChange:return{...i,extra_json:{...i.extra_json,[t.payload.name]:t.payload.json}};case Je.extraInputChange:var p;return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra_json:{...i.extra_json,metadata_cache_timeout:{...null==(p=i.extra_json)?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}}}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra_json:{...i.extra_json,schemas_allowed_for_file_upload:(t.payload.value||"").split(",")}}:{...i,extra_json:{...i.extra_json,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value}};case Je.inputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case Je.parametersChange:if(void 0!==i.catalog&&null!=(a=t.payload.type)&&a.startsWith("catalog")){var u,h;const e=null==(u=t.payload.type)?void 0:u.split("-")[1];((null==i?void 0:i.catalog[e])||{})[t.payload.name]=t.payload.value;const a={};return null==(h=i.catalog)||h.map((e=>{a[e.name]=e.value})),{...i,parameters:{...i.parameters,catalog:a}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case Je.addTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case Je.removeTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case Je.editorChange:return{...i,[t.payload.name]:t.payload.json};case Je.queryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new(_())(t.payload.value))},query_input:t.payload.value};case Je.textChange:return{...i,[t.payload.name]:t.payload.value};case Je.fetched:var m,g,b;if(t.payload.extra&&(r={...JSON.parse(t.payload.extra||"")},c={...JSON.parse(t.payload.extra||""),metadata_params:JSON.stringify(null==(m=r)?void 0:m.metadata_params),engine_params:JSON.stringify(null==(g=r)?void 0:g.engine_params),schemas_allowed_for_file_upload:null==(b=r)?void 0:b.schemas_allowed_for_file_upload}),s=(null==(o=t.payload)||null==(l=o.parameters)?void 0:l.query)||{},d=Object.entries(s).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.encrypted_extra&&t.payload.configuration_method===F.DYNAMIC_FORM){var v,y;const e=Object.keys((null==(v=r)||null==(y=v.engine_params)?void 0:y.catalog)||{}).map((e=>{var t,a;return{name:e,value:null==(t=r)||null==(a=t.engine_params)?void 0:a.catalog[e]}}));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,catalog:e,parameters:t.payload.parameters,query_input:d}}return{...t.payload,encrypted_extra:t.payload.encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,parameters:t.payload.parameters,query_input:d};case Je.dbSelected:case Je.configMethodChange:return{...t.payload};case Je.reset:default:return null}}!function(e){e[e.configMethodChange=0]="configMethodChange",e[e.dbSelected=1]="dbSelected",e[e.editorChange=2]="editorChange",e[e.fetched=3]="fetched",e[e.inputChange=4]="inputChange",e[e.parametersChange=5]="parametersChange",e[e.reset=6]="reset",e[e.textChange=7]="textChange",e[e.extraInputChange=8]="extraInputChange",e[e.extraEditorChange=9]="extraEditorChange",e[e.addTableCatalogSheet=10]="addTableCatalogSheet",e[e.removeTableCatalogSheet=11]="removeTableCatalogSheet",e[e.queryChange=12]="queryChange"}(Je||(Je={}));const Ge=e=>JSON.stringify({...e,metadata_params:JSON.parse((null==e?void 0:e.metadata_params)||"{}"),engine_params:JSON.parse((null==e?void 0:e.engine_params)||"{}"),schemas_allowed_for_file_upload:((null==e?void 0:e.schemas_allowed_for_file_upload)||[]).filter((e=>""!==e))}),Xe=(0,u.Z)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:o,show:l,databaseId:s})=>{var p;const[u,h]=(0,i.useReducer)(We,null),[m,g]=(0,i.useState)("1"),[b,v]=(0,c.cb)(),[y,f,Z]=(0,c.h1)(),[x,_]=(0,i.useState)(!1),[E,k]=(0,i.useState)(""),[T,A]=(0,i.useState)(!1),[U,O]=(0,i.useState)(!1),L=(0,H.c)(),M=(0,c.rM)(),P=(0,c.jb)(),R=!!s,D=(0,d.c)(d.T.FORCE_DATABASE_CONNECTIONS_SSL),I=P||!(null==u||!u.engine||!Ke[u.engine]),B=(null==u?void 0:u.configuration_method)===F.SQLALCHEMY_URI,Q=R||B,{state:{loading:V,resource:K,error:Y},fetchResource:J,createResource:W,updateResource:te,clearError:ae}=(0,c.LE)("database",(0,n.t)("database"),e),de=y||Y,ce=e=>e&&0===Object.keys(e).length,pe=(null==b||null==(p=b.databases)?void 0:p.find((e=>e.engine===(R?null==u?void 0:u.backend:null==u?void 0:u.engine))))||{},ue=()=>{h({type:Je.reset}),_(!1),Z(null),ae(),A(!1),o()},be=async()=>{var e;const{id:t,...n}=u||{},o=JSON.parse(JSON.stringify(n));if(o.configuration_method===F.DYNAMIC_FORM){if(await f(o,!0),y&&!ce(y))return;const e=R?o.parameters_schema.properties:null==pe?void 0:pe.parameters.properties,t=JSON.parse(o.encrypted_extra||"{}");Object.keys(e||{}).forEach((a=>{var n,l,i,r;e[a]["x-encrypted-extra"]&&null!=(n=o.parameters)&&n[a]&&("object"==typeof(null==(l=o.parameters)?void 0:l[a])?(t[a]=null==(i=o.parameters)?void 0:i[a],o.parameters[a]=JSON.stringify(o.parameters[a])):t[a]=JSON.parse((null==(r=o.parameters)?void 0:r[a])||"{}"))})),o.encrypted_extra=JSON.stringify(t),"gsheets"===o.engine&&(o.impersonate_user=!0)}null!=o&&null!=(e=o.parameters)&&e.catalog&&(o.extra_json={engine_params:JSON.stringify({catalog:o.parameters.catalog})}),null!=o&&o.extra_json&&(o.extra=Ge(null==o?void 0:o.extra_json)),null!=u&&u.id?(O(!0),await te(u.id,o,o.configuration_method===F.DYNAMIC_FORM)&&(a&&a(),T||ue())):u&&(O(!0),await W(o,o.configuration_method===F.DYNAMIC_FORM)&&(_(!0),a&&a(),Q&&ue())),A(!1),O(!1)},ve=(e,t)=>{h({type:e,payload:t})},ye=e=>{if("Other"===e)h({type:Je.dbSelected,payload:{database_name:e,configuration_method:F.SQLALCHEMY_URI,engine:void 0}});else{const t=null==b?void 0:b.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n}=t,o=void 0!==n;h({type:Je.dbSelected,payload:{database_name:e,engine:a,configuration_method:o?F.DYNAMIC_FORM:F.SQLALCHEMY_URI}})}h({type:Je.addTableCatalogSheet})},_e=()=>{K&&J(K.id),A(!0)},Ne=()=>{T&&_(!1),h({type:Je.reset})},$e=()=>u?!x||T?(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ze,{key:"back",onClick:Ne},"Back"),(0,q.tZ)(Ze,{key:"submit",buttonStyle:"primary",onClick:be},"Connect")):(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ze,{key:"back",onClick:_e},"Back"),(0,q.tZ)(Ze,{key:"submit",buttonStyle:"primary",onClick:be},"Finish")):[];(0,i.useEffect)((()=>{l&&(g("1"),v(),O(!0)),s&&l&&R&&s&&(V||J(s).catch((t=>e((0,n.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[l,s]),(0,i.useEffect)((()=>{K&&(h({type:Je.fetched,payload:K}),k(K.database_name))}),[K]),(0,i.useEffect)((()=>{U&&O(!1)}),[b]);const Se=()=>{if(ce(Y)||ce(y)&&!((null==y?void 0:y.error_type)in Ye))return(0,q.tZ)(i.Fragment,null);var e,t;if(y)return(0,q.tZ)(N.Z,{type:"error",css:e=>ie(e),message:(null==(e=Ye[null==y?void 0:y.error_type])?void 0:e.message)||(null==y?void 0:y.error_type),description:(null==(t=Ye[null==y?void 0:y.error_type])?void 0:t.description)||JSON.stringify(y),showIcon:!0,closable:!1});const a="object"==typeof Y?Object.values(Y):[];return(0,q.tZ)(N.Z,{type:"error",css:e=>ie(e),message:"Database Creation Error",description:(null==a?void 0:a[0])||Y})};return Q?(0,q.tZ)($.Z,{css:e=>[G,X,ne(e),re(e),se(e)],name:"database",onHandledPrimaryAction:be,onHide:ue,primaryButtonName:R?(0,n.t)("Save"):(0,n.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,q.tZ)("h4",null,R?(0,n.t)("Edit database"):(0,n.t)("Connect a database")),footer:R?(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ze,{key:"close",onClick:ue},"Close"),(0,q.tZ)(Ze,{key:"submit",buttonStyle:"primary",onClick:be},"Finish")):$e()},(0,q.tZ)(xe,null,(0,q.tZ)(ge,null,(0,q.tZ)(Ve,{isLoading:U,isEditMode:R,useSqlAlchemyForm:B,hasConnectedDb:x,db:u,dbName:E,dbModel:pe}))),(0,q.tZ)(C.ZP,{defaultActiveKey:"1",activeKey:m,onTabClick:e=>{g(e)},animated:{inkBar:!0,tabPane:!0}},(0,q.tZ)(C.ZP.TabPane,{tab:(0,q.tZ)("span",null,(0,n.t)("Basic")),key:"1"},B?(0,q.tZ)(he,null,(0,q.tZ)(we,{db:u,onInputChange:({target:e})=>ve(Je.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:L,testConnection:()=>{var a;if(null==u||!u.sqlalchemy_uri)return void e((0,n.t)("Please enter a SQLAlchemy URI to test"));const o={sqlalchemy_uri:(null==u?void 0:u.sqlalchemy_uri)||"",database_name:(null==u||null==(a=u.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==u?void 0:u.impersonate_user)||void 0,extra:Ge(null==u?void 0:u.extra_json)||void 0,encrypted_extra:(null==u?void 0:u.encrypted_extra)||"",server_cert:(null==u?void 0:u.server_cert)||void 0};(0,c.xx)(o,e,t)},isEditMode:R}),(ke=(null==u?void 0:u.backend)||(null==u?void 0:u.engine),void 0!==(null==b||null==(Te=b.databases)||null==(Ae=Te.find((e=>e.backend===ke||e.engine===ke)))?void 0:Ae.parameters)&&!R&&(0,q.tZ)("div",{css:e=>ee(e)},(0,q.tZ)(S.Z,{buttonStyle:"link",onClick:()=>h({type:Je.configMethodChange,payload:{database_name:null==u?void 0:u.database_name,configuration_method:F.DYNAMIC_FORM,engine:null==u?void 0:u.engine}}),css:e=>(e=>q.iv`
  font-weight: 400;
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},"Connect this database using the dynamic form instead"),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):(0,q.tZ)(Fe,{isEditMode:!0,sslForced:D,dbModel:pe,db:u,onParametersChange:({target:e})=>ve(Je.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>ve(Je.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>ve(Je.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>h({type:Je.addTableCatalogSheet}),onRemoveTableCatalog:e=>h({type:Je.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>f(u),validationErrors:y}),!R&&(0,q.tZ)(le,null,(0,q.tZ)(N.Z,{closable:!1,css:e=>oe(e),message:"Additional fields may be required",showIcon:!0,description:(0,q.tZ)(i.Fragment,null,"Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has"," ",(0,q.tZ)("a",{href:He,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},"here"),"."),type:"info"}))),(0,q.tZ)(C.ZP.TabPane,{tab:(0,q.tZ)("span",null,(0,n.t)("Advanced")),key:"2"},(0,q.tZ)(Ce,{db:u,onInputChange:({target:e})=>ve(Je.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>ve(Je.textChange,{name:e.name,value:e.value}),onEditorChange:e=>ve(Je.editorChange,e),onExtraInputChange:({target:e})=>{ve(Je.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{ve(Je.extraEditorChange,e)}}),de&&Se()))):(0,q.tZ)($.Z,{css:e=>[X,ne(e),re(e),se(e)],name:"database",onHandledPrimaryAction:be,onHide:ue,primaryButtonName:x?(0,n.t)("Finish"):(0,n.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,q.tZ)("h4",null,(0,n.t)("Connect a database")),footer:$e()},x?(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ve,{isLoading:U,isEditMode:R,useSqlAlchemyForm:B,hasConnectedDb:x,db:u,dbName:E,dbModel:pe,editNewDb:T}),T?(0,q.tZ)(Fe,{isEditMode:!0,sslForced:D,dbModel:pe,db:u,onParametersChange:({target:e})=>ve(Je.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>ve(Je.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>ve(Je.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>h({type:Je.addTableCatalogSheet}),onRemoveTableCatalog:e=>h({type:Je.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>f(u),validationErrors:y}):(0,q.tZ)(Ce,{db:u,onInputChange:({target:e})=>ve(Je.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>ve(Je.textChange,{name:e.name,value:e.value}),onEditorChange:e=>ve(Je.editorChange,e),onExtraInputChange:({target:e})=>{ve(Je.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>ve(Je.extraEditorChange,e)})):(0,q.tZ)(i.Fragment,null,!U&&(u?(0,q.tZ)(i.Fragment,null,(0,q.tZ)(Ve,{isLoading:U,isEditMode:R,useSqlAlchemyForm:B,hasConnectedDb:x,db:u,dbName:E,dbModel:pe}),I&&(()=>{var e,t,a,n,o;const{hostname:l}=window.location;let i=(null==P||null==(e=P.REGIONAL_IPS)?void 0:e.default)||"";const r=(null==P?void 0:P.REGIONAL_IPS)||{};return Object.entries(r).forEach((([e,t])=>{const a=new RegExp(e);l.match(a)&&(i=t)})),(null==u?void 0:u.engine)&&(0,q.tZ)(le,null,(0,q.tZ)(N.Z,{closable:!1,css:e=>oe(e),type:"info",showIcon:!0,message:(null==(t=Ke[u.engine])?void 0:t.message)||(null==P||null==(a=P.DEFAULT)?void 0:a.message),description:(null==(n=Ke[u.engine])?void 0:n.description)||(null==P||null==(o=P.DEFAULT)?void 0:o.description)+i}))})(),(0,q.tZ)(Fe,{db:u,sslForced:D,dbModel:pe,onAddTableCatalog:()=>{h({type:Je.addTableCatalogSheet})},onQueryChange:({target:e})=>ve(Je.queryChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{h({type:Je.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:({target:e})=>ve(Je.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>ve(Je.textChange,{name:e.name,value:e.value}),getValidation:()=>f(u),validationErrors:y}),(0,q.tZ)("div",{css:e=>ee(e)},(0,q.tZ)(S.Z,{buttonStyle:"link",onClick:()=>h({type:Je.configMethodChange,payload:{engine:u.engine,configuration_method:F.SQLALCHEMY_URI,database_name:u.database_name}}),css:me},"Connect this database with a SQLAlchemy URI string instead"),(0,q.tZ)(j.Z,{tooltip:(0,n.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"})),de&&Se()):(0,q.tZ)(fe,null,(0,q.tZ)(Ve,{isLoading:U,isEditMode:R,useSqlAlchemyForm:B,hasConnectedDb:x,db:u,dbName:E,dbModel:pe}),(0,q.tZ)("div",{className:"preferred"},null==b||null==(Ee=b.databases)?void 0:Ee.filter((e=>e.preferred)).map((e=>(0,q.tZ)(z,{className:"preferred-item",onClick:()=>ye(e.name),buttonText:e.name,icon:null==M?void 0:M[e.engine]})))),(()=>{var e,t;return(0,q.tZ)("div",{className:"available"},(0,q.tZ)("h4",{className:"available-label"},"Or choose from a list of other databases we support:"),(0,q.tZ)("div",{className:"control-label"},"Supported databases"),(0,q.tZ)(w.Ph,{className:"available-select",onChange:ye,placeholder:"Choose a database..."},null==(e=[...(null==b?void 0:b.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>(0,q.tZ)(w.Ph.Option,{value:e.name,key:e.name},e.name))),(0,q.tZ)(w.Ph.Option,{value:"Other",key:"Other"},"Other")),(0,q.tZ)(N.Z,{showIcon:!0,closable:!1,css:e=>oe(e),type:"info",message:(null==P||null==(t=P.ADD_DATABASE)?void 0:t.message)||(0,n.t)("Want to add a new database?"),description:null!=P&&P.ADD_DATABASE?(0,q.tZ)(i.Fragment,null,"Any databases that allow connections via SQL Alchemy URIs can be added."," ",(0,q.tZ)("a",{href:null==P?void 0:P.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==P?void 0:P.ADD_DATABASE.contact_description_link)," ",null==P?void 0:P.ADD_DATABASE.description):(0,q.tZ)(i.Fragment,null,"Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver"," ",(0,q.tZ)("a",{href:He,target:"_blank",rel:"noopener noreferrer"},"here"),".")}))})()))),U&&(0,q.tZ)(r.Z,null));var Ee,ke,Te,Ae})),et=(0,n.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),tt=(0,n.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),at=(0,o.iK)(b.Z.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,nt=(0,o.iK)(b.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,ot=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function lt({value:e}){return e?(0,q.tZ)(at,null):(0,q.tZ)(nt,null)}const it=(0,u.Z)((function({addDangerToast:e,addSuccessToast:t}){const{state:{loading:a,resourceCount:o,resourceCollection:u},hasPerm:x,fetchData:_,refreshData:C}=(0,c.Yi)("database",(0,n.t)("database"),e),[w,N]=(0,i.useState)(!1),[$,S]=(0,i.useState)(null),[E,k]=(0,i.useState)(null),[T,A]=(0,i.useState)(!1),[U,O]=(0,i.useState)([]),[L,M]=(0,i.useState)(!1);function P({database:e=null,modalOpen:t=!1}={}){k(e),N(t)}const R=x("can_write"),D=x("can_write"),I=x("can_write"),z=x("can_read")&&(0,s.cr)(d.T.VERSIONED_EXPORT),F={activeChild:"Databases",...y.Y};R&&(F.buttons=[{"data-test":"btn-create-database",name:(0,q.tZ)(i.Fragment,null,(0,q.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("Database")," "),buttonStyle:"primary",onClick:()=>{P({modalOpen:!0})}}],(0,s.cr)(d.T.VERSIONED_EXPORT)&&F.buttons.push({name:(0,q.tZ)(g.u,{id:"import-tooltip",title:(0,n.t)("Import databases"),placement:"bottomRight"},(0,q.tZ)(b.Z.Import,null)),buttonStyle:"link",onClick:()=>{A(!0)}}));const j=(0,i.useMemo)((()=>[{accessor:"database_name",Header:(0,n.t)("Database")},{accessor:"backend",Header:(0,n.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,q.tZ)(g.u,{id:"allow-run-async-header-tooltip",title:(0,n.t)("Asynchronous query execution"),placement:"top"},(0,q.tZ)("span",null,(0,n.t)("AQE"))),Cell:({row:{original:{allow_run_async:e}}})=>(0,q.tZ)(lt,{value:e}),size:"sm"},{accessor:"allow_dml",Header:(0,q.tZ)(g.u,{id:"allow-dml-header-tooltip",title:(0,n.t)("Allow data manipulation language"),placement:"top"},(0,q.tZ)("span",null,(0,n.t)("DML"))),Cell:({row:{original:{allow_dml:e}}})=>(0,q.tZ)(lt,{value:e}),size:"sm"},{accessor:"allow_file_upload",Header:(0,n.t)("CSV upload"),Cell:({row:{original:{allow_file_upload:e}}})=>(0,q.tZ)(lt,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:(0,n.t)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>(0,q.tZ)(lt,{value:e}),size:"md"},{accessor:"created_by",disableSortBy:!0,Header:(0,n.t)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>D||I||z?(0,q.tZ)(ot,{className:"actions"},I&&(0,q.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,l.Z.get({endpoint:`/api/v1/database/${t.id}/related_objects/`}).then((({json:e={}})=>{S({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count,sqllab_tab_count:e.sqllab_tab_states.count})})).catch((0,p.v$)((e=>(0,n.t)("An error occurred while fetching database related data: %s",e))));var t}},(0,q.tZ)(g.u,{id:"delete-action-tooltip",title:(0,n.t)("Delete database"),placement:"bottom"},(0,q.tZ)(b.Z.Trash,null))),z&&(0,q.tZ)(g.u,{id:"export-action-tooltip",title:(0,n.t)("Export"),placement:"bottom"},(0,q.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var t;void 0!==(t=e).id&&((0,Z.Z)("database",[t.id],(()=>{M(!1)})),M(!0))}},(0,q.tZ)(b.Z.Share,null))),D&&(0,q.tZ)(g.u,{id:"edit-action-tooltip",title:(0,n.t)("Edit"),placement:"bottom"},(0,q.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>P({database:e,modalOpen:!0})},(0,q.tZ)(b.Z.EditAlt,null)))):null,Header:(0,n.t)("Actions"),id:"actions",hidden:!D&&!I,disableSortBy:!0}]),[I,D,z]),H=(0,i.useMemo)((()=>[{Header:(0,n.t)("Expose in SQL Lab"),id:"expose_in_sqllab",input:"select",operator:v.p.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:(0,q.tZ)(g.u,{id:"allow-run-async-filter-header-tooltip",title:(0,n.t)("Asynchronous query execution"),placement:"top"},(0,q.tZ)("span",null,(0,n.t)("AQE"))),id:"allow_run_async",input:"select",operator:v.p.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:(0,n.t)("Search"),id:"database_name",input:"search",operator:v.p.contains}]),[]);return(0,q.tZ)(i.Fragment,null,(0,q.tZ)(h.Z,F),(0,q.tZ)(Xe,{databaseId:null==E?void 0:E.id,show:w,onHide:P,onDatabaseAdd:()=>{C()}}),$&&(0,q.tZ)(m.Z,{description:(0,n.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",$.database_name,$.chart_count,$.dashboard_count,$.sqllab_tab_count),onConfirm:()=>{$&&function({id:a,database_name:o}){l.Z.delete({endpoint:`/api/v1/database/${a}`}).then((()=>{C(),t((0,n.t)("Deleted: %s",o)),S(null)}),(0,p.v$)((t=>e((0,n.t)("There was an issue deleting %s: %s",o,t)))))}($)},onHide:()=>S(null),open:!0,title:(0,n.t)("Delete Database?")}),(0,q.tZ)(v.Z,{className:"database-list-view",columns:j,count:o,data:u,fetchData:_,filters:H,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:a,pageSize:25}),(0,q.tZ)(f.Z,{resourceName:"database",resourceLabel:(0,n.t)("database"),passwordsNeededMessage:et,confirmOverwriteMessage:tt,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{A(!1),C()},show:T,onHide:()=>{A(!1)},passwordFields:U,setPasswordFields:O}),L&&(0,q.tZ)(r.Z,null))}))},1483:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(37703);function o(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}}}]);