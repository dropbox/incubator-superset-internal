(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1150:function(e,t,o){"use strict";o.d(t,"a",(function(){return j}));var n=o(12),a=o.n(n),s=o(154),r=o.n(s),i=o(0),l=o.n(i),c=o(2),h=o.n(c),p=o(754),d=o(717),u=o(15),b=o(161),f=o(42),g=o(215),m=o(196),v=o(86),C=o(1);const O={name:h.a.string,onChange:h.a.func,value:h.a.string,height:h.a.number,minLines:h.a.number,maxLines:h.a.number,offerEditInModal:h.a.bool,language:h.a.oneOf([null,"json","html","sql","markdown","javascript"]),aboveEditorSection:h.a.node,readOnly:h.a.bool};class j extends l.a.Component{constructor(){super(),this.onAceChangeDebounce=r()(e=>{this.onAceChange(e)},b.d)}onControlChange(e){this.props.onChange(e.target.value)}onAceChange(e){this.props.onChange(e)}renderEditor(e=!1){var t;const o=this.props.value||"",n=e?40:this.props.minLines||12;if(this.props.language){const t={border:"1px solid #CCC"};return this.props.readOnly&&(t.backgroundColor="#f2f2f2"),Object(C.f)(g.g,{mode:this.props.language,style:t,minLines:n,maxLines:e?1e3:this.props.maxLines,onChange:this.onAceChangeDebounce,width:"100%",height:`${n}em`,editorProps:{$blockScrolling:!0},value:o,readOnly:this.props.readOnly})}return Object(C.f)(p.a,{controlId:"formControlsTextarea"},Object(C.f)(d.a,{componentClass:"textarea",placeholder:Object(u.e)("textarea"),onChange:a()(t=this.onControlChange).call(t,this),value:o,disabled:this.props.readOnly,style:{height:this.props.height}}))}renderModalBody(){return Object(C.f)("div",null,Object(C.f)("div",null,this.props.aboveEditorSection),this.renderEditor(!0))}render(){const e=Object(C.f)(v.a,this.props);return Object(C.f)("div",null,e,this.renderEditor(),this.props.offerEditInModal&&Object(C.f)(m.a,{modalTitle:e,triggerNode:Object(C.f)(f.a,{buttonSize:"small",className:"m-t-5"},Object(u.e)("Edit")," ",Object(C.f)("strong",null,this.props.language)," ",Object(u.e)("in modal")),modalBody:this.renderModalBody(!0),responsive:!0}))}}j.propTypes=O,j.defaultProps={onChange:()=>{},value:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1}},1156:function(e,t,o){"use strict";var n=o(11),a=o.n(n),s=(o(0),o(2)),r=o.n(s),i=o(15),l=o(810),c=o(86),h=o(121),p=o(1);const d={dataEndpoint:r.a.string.isRequired,multi:r.a.bool,mutator:r.a.func,onAsyncErrorMessage:r.a.string,onChange:r.a.func,placeholder:r.a.string,value:r.a.oneOfType([r.a.string,r.a.number,r.a.arrayOf(r.a.string),r.a.arrayOf(r.a.number)]),addDangerToast:r.a.func.isRequired},u={multi:!0,onAsyncErrorMessage:Object(i.e)("Error while fetching data"),onChange:()=>{},placeholder:Object(i.e)("Select ...")},b=e=>{const{value:t,onChange:o,dataEndpoint:n,multi:s,mutator:r,placeholder:i,onAsyncErrorMessage:h}=e;return Object(p.f)("div",null,Object(p.f)(c.a,e),Object(p.f)(l.a,{dataEndpoint:n,onChange:e=>{let t;var n,r;s?t=null!=(n=null==e?void 0:a()(e).call(e,e=>e.value))?n:null:t=null!=(r=null==e?void 0:e.value)?r:null;o(t)},onAsyncError:t=>e.addDangerToast(`${h}: ${t}`),mutator:r,multi:s,value:t,placeholder:i,valueRenderer:e=>Object(p.f)("div",null,e.label)}))};b.propTypes=d,b.defaultProps=u,t.a=Object(h.a)(b)},1157:function(e,t,o){"use strict";o.d(t,"a",(function(){return x}));var n=o(12),a=o.n(n),s=o(0),r=o.n(s),i=o(2),l=o.n(i),c=o(1251),h=o(1090),p=o(15),d=o(126),u=o(25).r,b=o(553),f=o(818),g=o(86),m=o(542),v=o(1);const C="latlong",O="delimited",j="geohash",y={onChange:l.a.func,value:l.a.object,animation:l.a.bool,choices:l.a.array};class x extends r.a.Component{constructor(e){var t,o,n;super(e);const s=e.value||{};let r;e.choices.length>0&&(r=e.choices[0][0]),this.state={type:s.type||C,delimiter:s.delimiter||",",latCol:s.latCol||r,lonCol:s.lonCol||r,lonlatCol:s.lonlatCol||r,reverseCheckbox:s.reverseCheckbox||!1,geohashCol:s.geohashCol||r,value:null,errors:[]},this.toggleCheckbox=a()(t=this.toggleCheckbox).call(t,this),this.onChange=a()(o=this.onChange).call(o,this),this.renderReverseCheckbox=a()(n=this.renderReverseCheckbox).call(n,this)}componentDidMount(){this.onChange()}onChange(){const{type:e}=this.state,t={type:e},o=[],n=Object(p.e)("Invalid lat/long configuration.");e===C?(t.latCol=this.state.latCol,t.lonCol=this.state.lonCol,t.lonCol&&t.latCol||o.push(n)):e===O?(t.lonlatCol=this.state.lonlatCol,t.delimiter=this.state.delimiter,t.reverseCheckbox=this.state.reverseCheckbox,t.lonlatCol&&t.delimiter||o.push(n)):e===j&&(t.geohashCol=this.state.geohashCol,t.reverseCheckbox=this.state.reverseCheckbox,t.geohashCol||o.push(n)),this.setState({value:t,errors:o}),this.props.onChange(t,o)}setType(e){this.setState({type:e},this.onChange)}toggleCheckbox(){this.setState(e=>({reverseCheckbox:!e.reverseCheckbox}),this.onChange)}renderLabelContent(){return this.state.errors.length>0?"N/A":this.state.type===C?`${this.state.lonCol} | ${this.state.latCol}`:this.state.type===O?`${this.state.lonlatCol}`:this.state.type===j?`${this.state.geohashCol}`:null}renderSelect(e,t){return Object(v.f)(m.a,{name:e,choices:this.props.choices,value:this.state[e],clearable:!1,onFocus:()=>{this.setType(t)},onChange:t=>{this.setState({[e]:t},this.onChange)}})}renderReverseCheckbox(){return Object(v.f)("span",null,Object(p.e)("Reverse lat/long "),Object(v.f)(f.a,{checked:this.state.reverseCheckbox,onChange:this.toggleCheckbox}))}renderPopoverContent(){var e,t,o;return Object(v.f)("div",{style:{width:"300px"}},Object(v.f)(b.a,{title:Object(p.e)("Longitude & Latitude columns"),isSelected:this.state.type===C,onSelect:a()(e=this.setType).call(e,this,C)},Object(v.f)(c.a,null,Object(v.f)(h.a,{md:6},"Longitude",this.renderSelect("lonCol",C)),Object(v.f)(h.a,{md:6},"Latitude",this.renderSelect("latCol",C)))),Object(v.f)(b.a,{title:Object(p.e)("Delimited long & lat single column"),info:Object(p.e)("Multiple formats accepted, look the geopy.points Python library for more details"),isSelected:this.state.type===O,onSelect:a()(t=this.setType).call(t,this,O)},Object(v.f)(c.a,null,Object(v.f)(h.a,{md:6},Object(p.e)("Column"),this.renderSelect("lonlatCol",O)),Object(v.f)(h.a,{md:6},this.renderReverseCheckbox()))),Object(v.f)(b.a,{title:Object(p.e)("Geohash"),isSelected:this.state.type===j,onSelect:a()(o=this.setType).call(o,this,j)},Object(v.f)(c.a,null,Object(v.f)(h.a,{md:6},"Column",this.renderSelect("geohashCol",j)),Object(v.f)(h.a,{md:6},this.renderReverseCheckbox()))))}render(){return Object(v.f)("div",null,Object(v.f)(g.a,this.props),Object(v.f)(u,{content:this.renderPopoverContent(),placement:"topLeft",trigger:"click"},Object(v.f)(d.a,{className:"pointer"},this.renderLabelContent())))}}x.propTypes=y,x.defaultProps={onChange:()=>{},animation:!0,choices:[]}},136:function(e,t,o){"use strict";o.d(t,"a",(function(){return g})),o.d(t,"b",(function(){return v})),o.d(t,"c",(function(){return C}));var n=o(75),a=o.n(n),s=o(36),r=o.n(s),i=(o(0),o(51)),l=o(1),c=o(25),h=o(45);const p=["fullWidth","allowOverflow"],d=Object(i.c)(c.y,{shouldForwardProp:e=>!r()(p).call(p,e)})`
  overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};

  .ant-tabs-content-holder {
    overflow: ${({allowOverflow:e})=>e?"visible":"auto"};
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
      padding: 0 ${({theme:e})=>e.gridUnit}px;

      & > .fa.fa-link {
        top: 0;
      }
    }
  }

  ${({fullWidth:e})=>e&&l.e`
      .ant-tabs-nav-list {
        width: 100%;
      }

      .ant-tabs-tab {
        width: 0;
      }
    `};

  .ant-tabs-tab-btn {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    text-align: center;
    text-transform: uppercase;
    user-select: none;

    .required {
      margin-left: ${({theme:e})=>e.gridUnit/2}px;
      color: ${({theme:e})=>e.colors.error.base};
    }
  }

  .ant-tabs-ink-bar {
    background: ${({theme:e})=>e.colors.secondary.base};
  }
`,u=Object(i.c)(c.y.TabPane)``,b=a()(d,{TabPane:u});b.defaultProps={fullWidth:!0};const f=Object(i.c)(d)`
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

  ${({fullWidth:e})=>e&&l.e`
      .ant-tabs-nav-list {
        width: 100%;
      }
    `}
`,g=a()(f,{TabPane:u});g.defaultProps={type:"editable-card",fullWidth:!1},g.TabPane.defaultProps={closeIcon:Object(l.f)(h.a,{role:"button",tabIndex:0,cursor:"pointer",name:"cancel-x"})};const m=Object(i.c)(g)`
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
`,v=a()(m,{TabPane:u});var C=b},161:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"f",(function(){return a})),o.d(t,"b",(function(){return s})),o.d(t,"a",(function(){return r})),o.d(t,"g",(function(){return i})),o.d(t,"d",(function(){return l})),o.d(t,"e",(function(){return c}));const n="YYYY-MM-DD HH:mm:ssZ",a="HH:mm:ss.SSS",s="True",r="False",i={standalone:"standalone",preselectFilters:"preselect_filters"},l=250,c=500},180:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o(75),a=o.n(n),s=o(51),r=o(1146);const i=Object(s.c)(r.a)`
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
`,l=Object(s.c)(r.a.Group)`
  font-size: inherit;
`,c=a()(i,{Group:l})},196:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n=o(12),a=o.n(n),s=o(0),r=o.n(s),i=o(2),l=o.n(i),c=o(101),h=o(42),p=o(1);const d={dialogClassName:l.a.string,triggerNode:l.a.node.isRequired,modalTitle:l.a.node,modalBody:l.a.node,modalFooter:l.a.node,beforeOpen:l.a.func,onExit:l.a.func,isButton:l.a.bool,className:l.a.string,tooltip:l.a.string,width:l.a.string,maxWidth:l.a.string,responsive:l.a.bool};class u extends r.a.Component{constructor(e){var t,o;super(e),this.state={showModal:!1},this.open=a()(t=this.open).call(t,this),this.close=a()(o=this.close).call(o,this)}close(){this.setState(()=>({showModal:!1}))}open(e){e.preventDefault(),this.props.beforeOpen(),this.setState(()=>({showModal:!0}))}renderModal(){return Object(p.f)(c.b,{wrapClassName:this.props.dialogClassName,className:this.props.className,show:this.state.showModal,onHide:this.close,afterClose:this.props.onExit,title:this.props.modalTitle,footer:this.props.modalFooter,hideFooter:!this.props.modalFooter,width:this.props.width,maxWidth:this.props.maxWidth,responsive:this.props.responsive},this.props.modalBody)}render(){return this.props.isButton?Object(p.f)(r.a.Fragment,null,Object(p.f)(h.a,{className:"modal-trigger",tooltip:this.props.tooltip,onClick:this.open},this.props.triggerNode),this.renderModal()):Object(p.f)(r.a.Fragment,null,Object(p.f)("span",{onClick:this.open,role:"button"},this.props.triggerNode),this.renderModal())}}u.propTypes=d,u.defaultProps={beforeOpen:()=>{},onExit:()=>{},isButton:!1,className:"",modalTitle:""}},353:function(e,t,o){"use strict";o.d(t,"a",(function(){return C}));var n=o(143),a=o.n(n),s=o(704),r=o.n(s),i=o(0),l=o.n(i),c=o(754),h=o(717),p=o(744),d=o(509),u=o(154),b=o.n(u),f=o(161),g=o(86),m=o(1);const v=e=>null==e?"":String(e);class C extends l.a.Component{constructor(e){var t;super(e),this.onChange=e=>{var t,o;let n=e;const s=[];if(""!==e&&this.props.isFloat){const t=Object(p.a)(e);t?s.push(t):n=e.match(/.*([.0])$/g)?e:r()(e)}if(""!==e&&this.props.isInt){const t=Object(d.a)(e);t?s.push(t):n=a()(e,10)}null==(t=(o=this.props).onChange)||t.call(o,n,s)},this.debouncedOnChange=b()(e=>{this.onChange(e)},f.d),this.onChangeWrapper=e=>{const{value:t}=e.target;this.setState({value:t},()=>{this.debouncedOnChange(t)})},this.render=()=>{let{value:e}=this.state;return this.initialValue!==this.props.value&&(this.initialValue=this.props.value,e=v(this.props.value)),Object(m.f)("div",null,Object(m.f)(g.a,this.props),Object(m.f)(c.a,{controlId:this.state.controlId,bsSize:"medium"},Object(m.f)(h.a,{type:"text",placeholder:this.props.placeholder,onChange:this.onChangeWrapper,onFocus:this.props.onFocus,value:e,disabled:this.props.disabled})))},this.initialValue=e.value,this.state={controlId:(t=e.controlId,`formInlineName_${null!=t?t:(1e6*Math.random()).toFixed()}`),value:v(this.initialValue)}}}},483:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var n=o(31),a=o.n(n),s=o(12),r=o.n(s),i=o(0),l=o.n(i),c=o(2),h=o.n(c),p=o(86),d=o(818),u=o(1);const b={value:h.a.bool,label:h.a.string,onChange:h.a.func},f={paddingRight:"5px"};class g extends l.a.Component{onChange(){this.props.onChange(!this.props.value)}renderCheckbox(){var e;return Object(u.f)(d.a,{onChange:r()(e=this.onChange).call(e,this),style:f,checked:!!this.props.value})}render(){var e;return this.props.label?Object(u.f)(p.a,a()({},this.props,{leftNode:this.renderCheckbox(),onClick:r()(e=this.onChange).call(e,this)})):this.renderCheckbox()}}g.propTypes=b,g.defaultProps={value:!1,onChange:()=>{}}},542:function(e,t,o){"use strict";o.d(t,"a",(function(){return R}));o(39);var n=o(31),a=o.n(n),s=o(510),r=o.n(s),i=o(70),l=o.n(i),c=o(1323),h=o.n(c),p=o(55),d=o.n(p),u=o(34),b=o.n(u),f=o(11),g=o.n(f),m=o(29),v=o.n(m),C=o(12),O=o.n(C),j=o(0),y=o.n(j),x=o(2),w=o.n(x),k=o(15),S=o(76),T=o(86),M=o(1);const $={autoFocus:w.a.bool,choices:w.a.array,clearable:w.a.bool,description:w.a.string,disabled:w.a.bool,freeForm:w.a.bool,isLoading:w.a.bool,label:w.a.string,multi:w.a.bool,isMulti:w.a.bool,allowAll:w.a.bool,name:w.a.string.isRequired,onChange:w.a.func,onFocus:w.a.func,value:w.a.oneOfType([w.a.string,w.a.number,w.a.array]),showHeader:w.a.bool,optionRenderer:w.a.func,valueRenderer:w.a.func,valueKey:w.a.string,options:w.a.array,placeholder:w.a.string,noResultsText:w.a.string,selectRef:w.a.func,filterOption:w.a.func,promptTextCreator:w.a.func,commaChoosesOption:w.a.bool,menuPortalTarget:w.a.element,menuPosition:w.a.string,menuPlacement:w.a.string,forceOverflow:w.a.bool},P={autoFocus:!1,choices:[],clearable:!0,description:null,disabled:!1,freeForm:!1,isLoading:!1,label:null,multi:!1,onChange:()=>{},onFocus:()=>{},showHeader:!0,valueKey:"value",noResultsText:Object(k.e)("No results found"),promptTextCreator:e=>`Create Option ${e}`,commaChoosesOption:!0,allowAll:!1};class R extends y.a.PureComponent{constructor(e){var t,o,n,a;super(e),this.state={options:this.getOptions(e),value:this.props.value},this.onChange=O()(t=this.onChange).call(t,this),this.createMetaSelectAllOption=O()(o=this.createMetaSelectAllOption).call(o,this),this.select=null,this.getSelectRef=O()(n=this.getSelectRef).call(n,this),this.handleKeyDownForCreate=O()(a=this.handleKeyDownForCreate).call(a,this)}UNSAFE_componentWillReceiveProps(e){if(e.choices!==this.props.choices||e.options!==this.props.options){const t=this.getOptions(e);this.setState({options:t})}}onChange(e){let t=this.props.multi?[]:null;if(e)if(this.props.multi)v()(e).call(e,e=>{var o,n;!0!==e.meta?t.push(e[this.props.valueKey]||e):t=g()(o=b()(n=this.getOptions(this.props)).call(n,e=>!e.meta)).call(o,e=>e[this.props.valueKey])});else{if(!0===e.meta)return;t=e[this.props.valueKey]}this.props.onChange(t)}getSelectRef(e){this.select=e,this.props.selectRef&&this.props.selectRef(e)}getOptions(e){let t=[];var o;if(e.options)t=g()(o=e.options).call(o,e=>e);else if(e.choices){var n;t=g()(n=e.choices).call(n,t=>{if(d()(t)){const[o,n]=t.length>1?t:[t[0],t[0]];return{label:n,[e.valueKey]:o}}return h()(t)?t:{label:t,[e.valueKey]:t}})}if(e.freeForm&&e.value){const o=new l.a(g()(t).call(t,t=>t[e.valueKey])),n=d()(e.value)?e.value:[e.value];v()(n).call(n,n=>{o.has(n)||t.unshift({label:n,[e.valueKey]:n})})}return!0===e.allowAll&&!0===e.multi?this.optionsIncludesSelectAll(t)||t.unshift(this.createMetaSelectAllOption()):t=b()(t).call(t,e=>!this.isMetaSelectAllOption(e)),t}handleKeyDownForCreate(e){const{key:t}=e;("Tab"===t||this.props.commaChoosesOption&&","===t)&&this.select&&this.select.onKeyDown({...e,key:"Enter"})}isMetaSelectAllOption(e){return e.meta&&!0===e.meta&&"Select all"===e.label}optionsIncludesSelectAll(e){return r()(e).call(e,e=>this.isMetaSelectAllOption(e))>=0}optionsRemaining(){const{options:e}=this.state,{value:t}=this.props;let o=d()(t)?e.length-t.length:e.length;return this.optionsIncludesSelectAll(e)&&(o-=1),o}createMetaSelectAllOption(){const e={label:"Select all",meta:!0};return e[this.props.valueKey]="Select all",e}render(){const{autoFocus:e,clearable:t,disabled:o,filterOption:n,isLoading:s,menuPlacement:r,name:i,noResultsText:l,onFocus:c,optionRenderer:h,promptTextCreator:p,value:u,valueKey:b,valueRenderer:f,forceOverflow:g,menuPortalTarget:m,menuPosition:v}=this.props,C=this.optionsRemaining(),O=C?Object(k.e)("%s option(s)",C):"",j=this.props.placeholder||O,y=this.props.isMulti||this.props.multi;let x;y&&C&&d()(this.state.value)&&d()(u)&&u.length&&(x=O);const w={autoFocus:e,clearable:t,disabled:o,filterOption:n,ignoreAccents:!1,isLoading:s,isMulti:y,labelKey:"label",menuPlacement:r,forceOverflow:g,menuPortalTarget:m,menuPosition:v,name:`select-${i}`,noResultsText:l,onChange:this.onChange,onFocus:c,optionRenderer:h,value:u,options:this.state.options,placeholder:j,assistiveText:x,promptTextCreator:p,selectRef:this.getSelectRef,valueKey:b,valueRenderer:f};let $;return this.props.freeForm?($=S.c,w.onKeyDown=this.handleKeyDownForCreate):$=S.f,Object(M.f)("div",null,this.props.showHeader&&Object(M.f)(T.a,this.props),y?Object(M.f)(S.d,a()({},w,{selectWrap:$})):Object(M.f)($,w))}}R.propTypes=$,R.defaultProps=P},553:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(118),a=(o(0),o(51)),s=o(53),r=o(45),i=o(1);function l({title:e,isSelected:t,children:o,onSelect:l,info:c}){const h=Object(a.e)();return Object(i.f)("div",{css:Object(n.a)({paddingBottom:2*h.gridUnit,opacity:t?1:h.opacity.mediumHeavy},";label:PopoverSection;")},Object(i.f)("div",{role:"button",tabIndex:0,onClick:l,css:Object(n.a)({display:"flex",alignItems:"center",cursor:l?"pointer":"default"},";label:PopoverSection;")},Object(i.f)("strong",null,e),c&&Object(i.f)(s.a,{title:c,css:Object(n.a)({marginLeft:h.gridUnit},";label:PopoverSection;")},Object(i.f)(r.a,{role:"img",name:"info-solid",width:14,height:14,color:h.colors.grayscale.light1})),Object(i.f)(r.a,{role:"img",name:"check",color:t?h.colors.primary.base:h.colors.grayscale.base})),Object(i.f)("div",{css:Object(n.a)({marginLeft:h.gridUnit,marginTop:h.gridUnit},";label:PopoverSection;")},o))}},818:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));o(0);var n=o(51),a=o(830),s=o(1);const r=n.c.span`
  &,
  & svg {
    vertical-align: top;
  }
`;function i({checked:e,onChange:t,style:o}){return Object(s.f)(r,{style:o,onClick:()=>{t(!e)},role:"checkbox",tabIndex:0,"aria-checked":e,"aria-label":"Checkbox"},e?Object(s.f)(a.a,null):Object(s.f)(a.c,null))}},830:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return r}));o(0);var n=o(1);const a=()=>Object(n.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.f)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:"#20A7C9"}),Object(n.f)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})),s=()=>Object(n.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.f)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#999999"}),Object(n.f)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})),r=()=>Object(n.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.f)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#CCCCCC"}),Object(n.f)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"}))}}]);