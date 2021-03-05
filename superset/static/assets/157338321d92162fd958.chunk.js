(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1139:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(12),a=n.n(o),s=n(153),l=n.n(s),i=n(0),r=n.n(i),c=n(2),h=n.n(c),p=n(741),u=n(706),d=n(16),b=n(159),f=n(42),g=n(213),m=n(196),C=n(85),v=n(1);const O={name:h.a.string,onChange:h.a.func,value:h.a.string,height:h.a.number,minLines:h.a.number,maxLines:h.a.number,offerEditInModal:h.a.bool,language:h.a.oneOf([null,"json","html","sql","markdown","javascript"]),aboveEditorSection:h.a.node,readOnly:h.a.bool};class j extends r.a.Component{constructor(){super(),this.onAceChangeDebounce=l()(e=>{this.onAceChange(e)},b.d)}onControlChange(e){this.props.onChange(e.target.value)}onAceChange(e){this.props.onChange(e)}renderEditor(e=!1){var t;const n=this.props.value||"",o=e?40:this.props.minLines||12;if(this.props.language){const t={border:"1px solid #CCC"};return this.props.readOnly&&(t.backgroundColor="#f2f2f2"),Object(v.f)(g.g,{mode:this.props.language,style:t,minLines:o,maxLines:e?1e3:this.props.maxLines,onChange:this.onAceChangeDebounce,width:"100%",height:`${o}em`,editorProps:{$blockScrolling:!0},value:n,readOnly:this.props.readOnly})}return Object(v.f)(p.a,{controlId:"formControlsTextarea"},Object(v.f)(u.a,{componentClass:"textarea",placeholder:Object(d.e)("textarea"),onChange:a()(t=this.onControlChange).call(t,this),value:n,disabled:this.props.readOnly,style:{height:this.props.height}}))}renderModalBody(){return Object(v.f)("div",null,Object(v.f)("div",null,this.props.aboveEditorSection),this.renderEditor(!0))}render(){const e=Object(v.f)(C.a,this.props);return Object(v.f)("div",null,e,this.renderEditor(),this.props.offerEditInModal&&Object(v.f)(m.a,{modalTitle:e,triggerNode:Object(v.f)(f.a,{buttonSize:"small",className:"m-t-5"},Object(d.e)("Edit")," ",Object(v.f)("strong",null,this.props.language)," ",Object(d.e)("in modal")),modalBody:this.renderModalBody(!0),responsive:!0}))}}j.propTypes=O,j.defaultProps={onChange:()=>{},value:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1}},1145:function(e,t,n){"use strict";var o=n(11),a=n.n(o),s=(n(0),n(2)),l=n.n(s),i=n(16),r=n(803),c=n(85),h=n(120),p=n(1);const u={dataEndpoint:l.a.string.isRequired,multi:l.a.bool,mutator:l.a.func,onAsyncErrorMessage:l.a.string,onChange:l.a.func,placeholder:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number,l.a.arrayOf(l.a.string),l.a.arrayOf(l.a.number)]),addDangerToast:l.a.func.isRequired},d={multi:!0,onAsyncErrorMessage:Object(i.e)("Error while fetching data"),onChange:()=>{},placeholder:Object(i.e)("Select ...")},b=e=>{const{value:t,onChange:n,dataEndpoint:o,multi:s,mutator:l,placeholder:i,onAsyncErrorMessage:h}=e;return Object(p.f)("div",null,Object(p.f)(c.a,e),Object(p.f)(r.a,{dataEndpoint:o,onChange:e=>{let t;var o,l;s?t=null!=(o=null==e?void 0:a()(e).call(e,e=>e.value))?o:null:t=null!=(l=null==e?void 0:e.value)?l:null;n(t)},onAsyncError:t=>e.addDangerToast(`${h}: ${t}`),mutator:l,multi:s,value:t,placeholder:i,valueRenderer:e=>Object(p.f)("div",null,e.label)}))};b.propTypes=u,b.defaultProps=d,t.a=Object(h.a)(b)},1146:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var o=n(12),a=n.n(o),s=n(0),l=n.n(s),i=n(2),r=n.n(i),c=n(1240),h=n(1079),p=n(16),u=n(124),d=n(27).q,b=n(543),f=n(807),g=n(85),m=n(536),C=n(1);const v="latlong",O="delimited",j="geohash",y={onChange:r.a.func,value:r.a.object,animation:r.a.bool,choices:r.a.array};class x extends l.a.Component{constructor(e){var t,n,o;super(e);const s=e.value||{};let l;e.choices.length>0&&(l=e.choices[0][0]),this.state={type:s.type||v,delimiter:s.delimiter||",",latCol:s.latCol||l,lonCol:s.lonCol||l,lonlatCol:s.lonlatCol||l,reverseCheckbox:s.reverseCheckbox||!1,geohashCol:s.geohashCol||l,value:null,errors:[]},this.toggleCheckbox=a()(t=this.toggleCheckbox).call(t,this),this.onChange=a()(n=this.onChange).call(n,this),this.renderReverseCheckbox=a()(o=this.renderReverseCheckbox).call(o,this)}componentDidMount(){this.onChange()}onChange(){const{type:e}=this.state,t={type:e},n=[],o=Object(p.e)("Invalid lat/long configuration.");e===v?(t.latCol=this.state.latCol,t.lonCol=this.state.lonCol,t.lonCol&&t.latCol||n.push(o)):e===O?(t.lonlatCol=this.state.lonlatCol,t.delimiter=this.state.delimiter,t.reverseCheckbox=this.state.reverseCheckbox,t.lonlatCol&&t.delimiter||n.push(o)):e===j&&(t.geohashCol=this.state.geohashCol,t.reverseCheckbox=this.state.reverseCheckbox,t.geohashCol||n.push(o)),this.setState({value:t,errors:n}),this.props.onChange(t,n)}setType(e){this.setState({type:e},this.onChange)}toggleCheckbox(){this.setState(e=>({reverseCheckbox:!e.reverseCheckbox}),this.onChange)}renderLabelContent(){return this.state.errors.length>0?"N/A":this.state.type===v?`${this.state.lonCol} | ${this.state.latCol}`:this.state.type===O?`${this.state.lonlatCol}`:this.state.type===j?`${this.state.geohashCol}`:null}renderSelect(e,t){return Object(C.f)(m.a,{name:e,choices:this.props.choices,value:this.state[e],clearable:!1,onFocus:()=>{this.setType(t)},onChange:t=>{this.setState({[e]:t},this.onChange)}})}renderReverseCheckbox(){return Object(C.f)("span",null,Object(p.e)("Reverse lat/long "),Object(C.f)(f.a,{checked:this.state.reverseCheckbox,onChange:this.toggleCheckbox}))}renderPopoverContent(){var e,t,n;return Object(C.f)("div",{style:{width:"300px"}},Object(C.f)(b.a,{title:Object(p.e)("Longitude & Latitude columns"),isSelected:this.state.type===v,onSelect:a()(e=this.setType).call(e,this,v)},Object(C.f)(c.a,null,Object(C.f)(h.a,{md:6},"Longitude",this.renderSelect("lonCol",v)),Object(C.f)(h.a,{md:6},"Latitude",this.renderSelect("latCol",v)))),Object(C.f)(b.a,{title:Object(p.e)("Delimited long & lat single column"),info:Object(p.e)("Multiple formats accepted, look the geopy.points Python library for more details"),isSelected:this.state.type===O,onSelect:a()(t=this.setType).call(t,this,O)},Object(C.f)(c.a,null,Object(C.f)(h.a,{md:6},Object(p.e)("Column"),this.renderSelect("lonlatCol",O)),Object(C.f)(h.a,{md:6},this.renderReverseCheckbox()))),Object(C.f)(b.a,{title:Object(p.e)("Geohash"),isSelected:this.state.type===j,onSelect:a()(n=this.setType).call(n,this,j)},Object(C.f)(c.a,null,Object(C.f)(h.a,{md:6},"Column",this.renderSelect("geohashCol",j)),Object(C.f)(h.a,{md:6},this.renderReverseCheckbox()))))}render(){return Object(C.f)("div",null,Object(C.f)(g.a,this.props),Object(C.f)(d,{content:this.renderPopoverContent(),placement:"topLeft",trigger:"click"},Object(C.f)(u.a,{className:"pointer"},this.renderLabelContent())))}}x.propTypes=y,x.defaultProps={onChange:()=>{},animation:!0,choices:[]}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return v}));var o=n(77),a=n.n(o),s=n(36),l=n.n(s),i=(n(0),n(51)),r=n(1),c=n(27),h=n(46);const p=["fullWidth","allowOverflow"],u=Object(i.c)(c.x,{shouldForwardProp:e=>!l()(p).call(p,e)})`
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

  ${({fullWidth:e})=>e&&r.e`
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
`,d=Object(i.c)(c.x.TabPane)``,b=a()(u,{TabPane:d});b.defaultProps={fullWidth:!0};const f=Object(i.c)(u)`
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

  ${({fullWidth:e})=>e&&r.e`
      .ant-tabs-nav-list {
        width: 100%;
      }
    `}
`,g=a()(f,{TabPane:d});g.defaultProps={type:"editable-card",fullWidth:!1},g.TabPane.defaultProps={closeIcon:Object(r.f)(h.a,{role:"button",tabIndex:0,cursor:"pointer",name:"cancel-x"})};const m=Object(i.c)(g)`
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
`,C=a()(m,{TabPane:d});var v=b},159:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c}));const o="YYYY-MM-DD HH:mm:ssZ",a="HH:mm:ss.SSS",s="True",l="False",i={standalone:"standalone",preselectFilters:"preselect_filters"},r=250,c=500},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(12),a=n.n(o),s=n(0),l=n.n(s),i=n(2),r=n.n(i),c=n(100),h=n(42),p=n(1);const u={dialogClassName:r.a.string,triggerNode:r.a.node.isRequired,modalTitle:r.a.node,modalBody:r.a.node,modalFooter:r.a.node,beforeOpen:r.a.func,onExit:r.a.func,isButton:r.a.bool,className:r.a.string,tooltip:r.a.string,width:r.a.string,maxWidth:r.a.string,responsive:r.a.bool};class d extends l.a.Component{constructor(e){var t,n;super(e),this.state={showModal:!1},this.open=a()(t=this.open).call(t,this),this.close=a()(n=this.close).call(n,this)}close(){this.setState(()=>({showModal:!1}))}open(e){e.preventDefault(),this.props.beforeOpen(),this.setState(()=>({showModal:!0}))}renderModal(){return Object(p.f)(c.b,{wrapClassName:this.props.dialogClassName,className:this.props.className,show:this.state.showModal,onHide:this.close,afterClose:this.props.onExit,title:this.props.modalTitle,footer:this.props.modalFooter,hideFooter:!this.props.modalFooter,width:this.props.width,maxWidth:this.props.maxWidth,responsive:this.props.responsive},this.props.modalBody)}render(){return this.props.isButton?Object(p.f)(l.a.Fragment,null,Object(p.f)(h.a,{className:"modal-trigger",tooltip:this.props.tooltip,onClick:this.open},this.props.triggerNode),this.renderModal()):Object(p.f)(l.a.Fragment,null,Object(p.f)("span",{onClick:this.open,role:"button"},this.props.triggerNode),this.renderModal())}}d.propTypes=u,d.defaultProps={beforeOpen:()=>{},onExit:()=>{},isButton:!1,className:"",modalTitle:""}},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o=n(141),a=n.n(o),s=n(694),l=n.n(s),i=n(0),r=n.n(i),c=n(741),h=n(706),p=n(731),u=n(503),d=n(153),b=n.n(d),f=n(159),g=n(85),m=n(1);const C=e=>null==e?"":String(e);class v extends r.a.Component{constructor(e){var t;super(e),this.onChange=e=>{var t,n;let o=e;const s=[];if(""!==e&&this.props.isFloat){const t=Object(p.a)(e);t?s.push(t):o=e.match(/.*([.0])$/g)?e:l()(e)}if(""!==e&&this.props.isInt){const t=Object(u.a)(e);t?s.push(t):o=a()(e,10)}null==(t=(n=this.props).onChange)||t.call(n,o,s)},this.debouncedOnChange=b()(e=>{this.onChange(e)},f.d),this.onChangeWrapper=e=>{const{value:t}=e.target;this.setState({value:t},()=>{this.debouncedOnChange(t)})},this.render=()=>{let{value:e}=this.state;return this.initialValue!==this.props.value&&(this.initialValue=this.props.value,e=C(this.props.value)),Object(m.f)("div",null,Object(m.f)(g.a,this.props),Object(m.f)(c.a,{controlId:this.state.controlId,bsSize:"medium"},Object(m.f)(h.a,{type:"text",placeholder:this.props.placeholder,onChange:this.onChangeWrapper,onFocus:this.props.onFocus,value:e,disabled:this.props.disabled})))},this.initialValue=e.value,this.state={controlId:(t=e.controlId,`formInlineName_${null!=t?t:(1e6*Math.random()).toFixed()}`),value:C(this.initialValue)}}}},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var o=n(31),a=n.n(o),s=n(12),l=n.n(s),i=n(0),r=n.n(i),c=n(2),h=n.n(c),p=n(85),u=n(807),d=n(1);const b={value:h.a.bool,label:h.a.string,onChange:h.a.func},f={paddingRight:"5px"};class g extends r.a.Component{onChange(){this.props.onChange(!this.props.value)}renderCheckbox(){var e;return Object(d.f)(u.a,{onChange:l()(e=this.onChange).call(e,this),style:f,checked:!!this.props.value})}render(){var e;return this.props.label?Object(d.f)(p.a,a()({},this.props,{leftNode:this.renderCheckbox(),onClick:l()(e=this.onChange).call(e,this)})):this.renderCheckbox()}}g.propTypes=b,g.defaultProps={value:!1,onChange:()=>{}}},536:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));n(40);var o=n(31),a=n.n(o),s=n(504),l=n.n(s),i=n(72),r=n.n(i),c=n(1312),h=n.n(c),p=n(55),u=n.n(p),d=n(34),b=n.n(d),f=n(11),g=n.n(f),m=n(29),C=n.n(m),v=n(12),O=n.n(v),j=n(0),y=n.n(j),x=n(2),w=n.n(x),k=n(16),S=n(75),T=n(85),R=n(1);const M={autoFocus:w.a.bool,choices:w.a.array,clearable:w.a.bool,description:w.a.string,disabled:w.a.bool,freeForm:w.a.bool,isLoading:w.a.bool,label:w.a.string,multi:w.a.bool,isMulti:w.a.bool,allowAll:w.a.bool,name:w.a.string.isRequired,onChange:w.a.func,onFocus:w.a.func,value:w.a.oneOfType([w.a.string,w.a.number,w.a.array]),showHeader:w.a.bool,optionRenderer:w.a.func,valueRenderer:w.a.func,valueKey:w.a.string,options:w.a.array,placeholder:w.a.string,noResultsText:w.a.string,selectRef:w.a.func,filterOption:w.a.func,promptTextCreator:w.a.func,commaChoosesOption:w.a.bool,menuPortalTarget:w.a.element,menuPosition:w.a.string,menuPlacement:w.a.string,forceOverflow:w.a.bool},F={autoFocus:!1,choices:[],clearable:!0,description:null,disabled:!1,freeForm:!1,isLoading:!1,label:null,multi:!1,onChange:()=>{},onFocus:()=>{},showHeader:!0,valueKey:"value",noResultsText:Object(k.e)("No results found"),promptTextCreator:e=>`Create Option ${e}`,commaChoosesOption:!0,allowAll:!1};class P extends y.a.PureComponent{constructor(e){var t,n,o,a;super(e),this.state={options:this.getOptions(e),value:this.props.value},this.onChange=O()(t=this.onChange).call(t,this),this.createMetaSelectAllOption=O()(n=this.createMetaSelectAllOption).call(n,this),this.select=null,this.getSelectRef=O()(o=this.getSelectRef).call(o,this),this.handleKeyDownForCreate=O()(a=this.handleKeyDownForCreate).call(a,this)}UNSAFE_componentWillReceiveProps(e){if(e.choices!==this.props.choices||e.options!==this.props.options){const t=this.getOptions(e);this.setState({options:t})}}onChange(e){let t=this.props.multi?[]:null;if(e)if(this.props.multi)C()(e).call(e,e=>{var n,o;!0!==e.meta?t.push(e[this.props.valueKey]||e):t=g()(n=b()(o=this.getOptions(this.props)).call(o,e=>!e.meta)).call(n,e=>e[this.props.valueKey])});else{if(!0===e.meta)return;t=e[this.props.valueKey]}this.props.onChange(t)}getSelectRef(e){this.select=e,this.props.selectRef&&this.props.selectRef(e)}getOptions(e){let t=[];var n;if(e.options)t=g()(n=e.options).call(n,e=>e);else if(e.choices){var o;t=g()(o=e.choices).call(o,t=>{if(u()(t)){const[n,o]=t.length>1?t:[t[0],t[0]];return{label:o,[e.valueKey]:n}}return h()(t)?t:{label:t,[e.valueKey]:t}})}if(e.freeForm&&e.value){const n=new r.a(g()(t).call(t,t=>t[e.valueKey])),o=u()(e.value)?e.value:[e.value];C()(o).call(o,o=>{n.has(o)||t.unshift({label:o,[e.valueKey]:o})})}return!0===e.allowAll&&!0===e.multi?this.optionsIncludesSelectAll(t)||t.unshift(this.createMetaSelectAllOption()):t=b()(t).call(t,e=>!this.isMetaSelectAllOption(e)),t}handleKeyDownForCreate(e){const{key:t}=e;("Tab"===t||this.props.commaChoosesOption&&","===t)&&this.select&&this.select.onKeyDown({...e,key:"Enter"})}isMetaSelectAllOption(e){return e.meta&&!0===e.meta&&"Select all"===e.label}optionsIncludesSelectAll(e){return l()(e).call(e,e=>this.isMetaSelectAllOption(e))>=0}optionsRemaining(){const{options:e}=this.state,{value:t}=this.props;let n=u()(t)?e.length-t.length:e.length;return this.optionsIncludesSelectAll(e)&&(n-=1),n}createMetaSelectAllOption(){const e={label:"Select all",meta:!0};return e[this.props.valueKey]="Select all",e}render(){const{autoFocus:e,clearable:t,disabled:n,filterOption:o,isLoading:s,menuPlacement:l,name:i,noResultsText:r,onFocus:c,optionRenderer:h,promptTextCreator:p,value:d,valueKey:b,valueRenderer:f,forceOverflow:g,menuPortalTarget:m,menuPosition:C}=this.props,v=this.optionsRemaining(),O=v?Object(k.e)("%s option(s)",v):"",j=this.props.placeholder||O,y=this.props.isMulti||this.props.multi;let x;y&&v&&u()(this.state.value)&&u()(d)&&d.length&&(x=O);const w={autoFocus:e,clearable:t,disabled:n,filterOption:o,ignoreAccents:!1,isLoading:s,isMulti:y,labelKey:"label",menuPlacement:l,forceOverflow:g,menuPortalTarget:m,menuPosition:C,name:`select-${i}`,noResultsText:r,onChange:this.onChange,onFocus:c,optionRenderer:h,value:d,options:this.state.options,placeholder:j,assistiveText:x,promptTextCreator:p,selectRef:this.getSelectRef,valueKey:b,valueRenderer:f};let M;return this.props.freeForm?(M=S.c,w.onKeyDown=this.handleKeyDownForCreate):M=S.f,Object(R.f)("div",null,this.props.showHeader&&Object(R.f)(T.a,this.props),y?Object(R.f)(S.d,a()({},w,{selectWrap:M})):Object(R.f)(M,w))}}P.propTypes=M,P.defaultProps=F},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);var o=n(2),a=n.n(o),s=n(117),l=n(1);const i={title:a.a.string.isRequired,isSelected:a.a.bool.isRequired,onSelect:a.a.func.isRequired,info:a.a.string,children:a.a.node.isRequired};function r({title:e,isSelected:t,children:n,onSelect:o,info:a}){return Object(l.f)("div",{className:`PopoverSection ${t?"":"dimmed"}`},Object(l.f)("div",{role:"button",tabIndex:0,onClick:o,className:"pointer"},Object(l.f)("strong",null,e),"  ",a&&Object(l.f)(s.a,{tooltip:a,label:"date-free-tooltip"})," ",Object(l.f)("i",{className:t?"fa fa-check text-primary":""})),Object(l.f)("div",{className:"m-t-5 m-l-5"},n))}r.propTypes=i},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var o=n(51),a=n(820),s=n(1);const l=o.c.span`
  &,
  & svg {
    vertical-align: top;
  }
`;function i({checked:e,onChange:t,style:n}){return Object(s.f)(l,{style:n,onClick:()=>{t(!e)},role:"checkbox",tabIndex:0,"aria-checked":e,"aria-label":"Checkbox"},e?Object(s.f)(a.a,null):Object(s.f)(a.c,null))}},820:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));n(0);var o=n(1);const a=()=>Object(o.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.f)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:"#20A7C9"}),Object(o.f)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})),s=()=>Object(o.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.f)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#999999"}),Object(o.f)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})),l=()=>Object(o.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.f)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#CCCCCC"}),Object(o.f)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"}))}}]);