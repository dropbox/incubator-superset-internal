(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1143:function(e,t,a){"use strict";a(40);var s=a(11),n=a.n(s),o=a(83),r=a.n(o),c=a(0),l=a.n(c),i=a(195),d=a(42),u=a(51),b=a(68),h=a(16),p=a(100),m=a(348),O=a(41),j=a(70),f=a(120),g=a(1);const y=Object(m.a)(()=>Promise.all([a.e(0),a.e(14),a.e(15),a.e(57)]).then(a.bind(null,2101))),v=Object(u.c)(p.b)`
  .modal-content {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .modal-header {
    flex: 0 1 auto;
  }
  .modal-body {
    flex: 1 1 auto;
    overflow: auto;
  }

  .modal-footer {
    flex: 0 1 auto;
  }
`;function w(e){var t,a;return null!=e&&e.certified_by||null!=e&&e.certification_details?r()({certification:{certified_by:null!=(t=null==e?void 0:e.certified_by)?t:null,details:null!=(a=null==e?void 0:e.certification_details)?a:null}}):null}t.a=Object(f.a)(({addSuccessToast:e,datasource:t,onDatasourceSave:a,onHide:s,show:o})=>{const[r,u]=Object(c.useState)(t),[m,f]=Object(c.useState)([]),[S,x]=Object(c.useState)(!1),_=Object(c.useRef)(null),[C,k]=p.b.useModal(),D=()=>{var t,o,c;const l=(null==(t=r.tableSelector)?void 0:t.schema)||(null==(o=r.databaseSelector)?void 0:o.schema)||r.schema;x(!0),b.a.post({endpoint:"/datasource/save/",postPayload:{data:{...r,schema:l,metrics:null==r?void 0:null==(c=r.metrics)?void 0:n()(c).call(c,e=>({...e,extra:w(e)})),type:r.type||r.datasource_type}}}).then(({json:t})=>{e(Object(h.e)("The dataset has been saved")),a(t),s()}).catch(e=>{x(!1),Object(j.a)(e).then(({error:e})=>{C.error({title:"Error",content:e||Object(h.e)("An error has occurred"),okButtonProps:{danger:!0,className:"btn-danger"}})})})};return Object(g.f)(v,{show:o,onHide:s,title:Object(g.f)("span",null,Object(h.e)("Edit Dataset "),Object(g.f)("strong",null,r.table_name)),footer:Object(g.f)(l.a.Fragment,null,Object(O.c)(O.a.ENABLE_REACT_CRUD_VIEWS)&&Object(g.f)(d.a,{buttonSize:"small",buttonStyle:"default",className:"m-r-5",onClick:()=>{window.location.href=r.edit_url||r.url}},Object(h.e)("Use legacy datasource editor")),Object(g.f)(d.a,{buttonSize:"small",className:"m-r-5",onClick:s},Object(h.e)("Cancel")),Object(g.f)(d.a,{buttonSize:"small",buttonStyle:"primary",onClick:()=>{_.current=C.confirm({title:Object(h.e)("Confirm save"),content:Object(g.f)("div",null,Object(g.f)(i.a,{css:e=>({marginTop:4*e.gridUnit,marginBottom:4*e.gridUnit}),type:"warning",showIcon:!0,message:Object(h.e)("The dataset configuration exposed here\n                affects all the charts using this dataset.\n                Be mindful that changing settings\n                here may affect other charts\n                in undesirable ways.")}),Object(h.e)("Are you sure you want to save and apply changes?")),onOk:D,icon:null})},disabled:S||m.length>0},Object(h.e)("Save"))),responsive:!0},Object(g.f)(y,{showLoadingForImport:!0,height:500,datasource:r,onChange:(e,t)=>{var a;u({...e,metrics:null==e?void 0:n()(a=e.metrics).call(a,e=>({...e,is_certified:(null==e?void 0:e.certified_by)||(null==e?void 0:e.certification_details)}))}),f(t)}}),k)})},4533:function(e,t,a){"use strict";a(40);var s=a(11),n=a.n(s),o=a(0),r=a.n(o),c=a(51),l=a(16),i=a(46),d=a(100),u=a(513),b=a(1);Object(c.c)(i.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const h=c.c.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,p=c.c.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:s,addDangerToast:c,addSuccessToast:i,onModelImport:m,show:O,onHide:j,passwordFields:f=[],setPasswordFields:g=(()=>{})})=>{const[y,v]=Object(o.useState)(!0),[w,S]=Object(o.useState)(null),[x,_]=Object(o.useState)({}),[C,k]=Object(o.useState)(!1),[D,T]=Object(o.useState)(!1),E=Object(o.useRef)(null),N=()=>{S(null),g([]),_({}),k(!1),T(!1),E&&E.current&&(E.current.value="")},{state:{alreadyExists:A,passwordsNeeded:$},importResource:H}=Object(u.d)(e,t,e=>{N(),c(e)});Object(o.useEffect)(()=>{g($)},[$,g]),Object(o.useEffect)(()=>{k(A.length>0)},[A,k]);const R=e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";T(s.toUpperCase()===Object(l.e)("OVERWRITE"))};return y&&O&&v(!1),Object(b.f)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===w||C&&!D,onHandledPrimaryAction:()=>{null!==w&&H(w,x,D).then(e=>{e&&(i(Object(l.e)("The import was successful")),N(),m())})},onHide:()=>{v(!0),j(),N()},primaryButtonName:C?Object(l.e)("Overwrite"):Object(l.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:O,title:Object(b.f)("h4",null,Object(l.e)("Import %s",t))},Object(b.f)(p,null,Object(b.f)("div",{className:"control-label"},Object(b.f)("label",{htmlFor:"modelFile"},Object(l.e)("File"),Object(b.f)("span",{className:"required"},"*"))),Object(b.f)("input",{ref:E,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;S(t&&t[0]||null)}})),0===f.length?null:Object(b.f)(r.a.Fragment,null,Object(b.f)("h5",null,"Database passwords"),Object(b.f)(h,null,a),n()(f).call(f,e=>Object(b.f)(p,{key:`password-for-${e}`},Object(b.f)("div",{className:"control-label"},e,Object(b.f)("span",{className:"required"},"*")),Object(b.f)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>_({...x,[e]:t.target.value})})))),C?Object(b.f)(r.a.Fragment,null,Object(b.f)(p,null,Object(b.f)("div",{className:"confirm-overwrite"},s),Object(b.f)("div",{className:"control-label"},Object(l.e)('Type "%s" to confirm',Object(l.e)("OVERWRITE"))),Object(b.f)("input",{id:"overwrite",type:"text",onChange:R}))):null)}},4534:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(16);const n={name:Object(s.e)("Data"),tabs:[{name:"Databases",label:Object(s.e)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:Object(s.e)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:Object(s.e)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:Object(s.e)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},4918:function(e,t,a){"use strict";a.r(t);a(40);var s=a(56),n=a.n(s),o=a(47),r=a.n(o),c=a(11),l=a.n(c),i=a(16),d=a(51),u=a(68),b=a(0),h=a.n(b),p=a(96),m=a.n(p),O=a(137),j=a(513),f=a(1243),g=a(1143),y=a(1245),v=a(4519),w=a(890),S=a(4534),x=a(120),_=a(54),C=a(857),k=a(1247),D=a(1699),T=a(4533),E=a(41),N=a(83),A=a.n(N),$=a(757),H=a.n($),R=a(507),B=a.n(R),P=a(46),U=a(100),z=a(1700),I=a(1);const F=Object(d.c)(P.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`,q=d.c.div`
  padding-bottom: 340px;
  width: 65%;
`;var L=Object(x.a)(({addDangerToast:e,addSuccessToast:t,onDatasetAdd:a,onHide:s,show:n})=>{const[o,r]=Object(b.useState)(""),[c,l]=Object(b.useState)(""),[d,p]=Object(b.useState)(0),[m,j]=Object(b.useState)(!0);return Object(I.f)(U.b,{disablePrimaryButton:m,onHandledPrimaryAction:()=>{u.a.post({endpoint:"/api/v1/dataset/",body:A()({database:d,...o?{schema:o}:{},table_name:c}),headers:{"Content-Type":"application/json"}}).then(({json:e={}})=>{a&&a({id:e.id,...e.result}),t(Object(i.e)("The dataset has been saved")),s()}).catch(Object(O.c)(t=>e(Object(i.e)("Error while saving dataset: %s",t.table_name))))},onHide:s,primaryButtonName:Object(i.e)("Add"),show:n,title:Object(I.f)(h.a.Fragment,null,Object(I.f)(F,{name:"warning-solid"}),Object(i.e)("Add dataset"))},Object(I.f)(q,null,Object(I.f)(z.a,{clearable:!1,dbId:d,formMode:!0,handleError:e,onChange:({dbId:e,schema:t,tableName:a})=>{p(e),j(H()(e)||B()(a)),r(t),l(a)},schema:o,tableName:c})))});const M=Object(i.e)('The passwords for the databases below are needed in order to import them together with the datasets. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),V=Object(i.e)("You are importing one or more datasets that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),J=d.c.div`
  align-items: center;
  display: flex;

  > svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,W=d.c.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(x.a)(({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:s,resourceCount:o,resourceCollection:c,bulkSelectEnabled:d},hasPerm:p,fetchData:x,toggleBulkSelect:N,refreshData:A}=Object(j.e)("dataset",Object(i.e)("dataset"),e),[$,H]=Object(b.useState)(!1),[R,B]=Object(b.useState)(null),[P,U]=Object(b.useState)(null),[z,F]=Object(b.useState)(!1),[q,Q]=Object(b.useState)([]),X=()=>{F(!0)},Y=p("can_write"),G=p("can_write"),K=p("can_write"),Z=p("can_read"),ee=[{id:"changed_on_delta_humanized",desc:!0}],te=Object(b.useCallback)(({id:t})=>{u.a.get({endpoint:`/api/v1/dataset/${t}`}).then(({json:e={}})=>{var t;const a=l()(t=e.result.owners).call(t,e=>e.id);U({...e.result,owners:a})}).catch(()=>{e(Object(i.e)("An error occurred while fetching dataset related data"))})},[e]),ae=Object(b.useMemo)(()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?Object(I.f)(_.a,{id:"physical-dataset-tooltip",title:Object(i.e)("Physical dataset")},Object(I.f)(C.a.DatasetPhysical,null)):Object(I.f)(_.a,{id:"virtual-dataset-tooltip",title:Object(i.e)("Virtual dataset")},Object(I.f)(C.a.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{extra:e,table_name:t,explore_url:a}}})=>{const s=Object(I.f)("a",{href:a},t);try{const t=JSON.parse(e);return null!=t&&t.certification?Object(I.f)(J,null,Object(I.f)(D.a,{certifiedBy:t.certification.certified_by,details:t.certification.details}),s):s}catch{return s}},Header:Object(i.e)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+r()(e).call(e,1)},Header:Object(i.e)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:Object(i.e)("Source"),accessor:"database.database_name",size:"lg"},{Header:Object(i.e)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(I.f)("span",{className:"no-wrap"},e),Header:Object(i.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:Object(i.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[],table_name:t}}})=>Object(I.f)(k.a,{users:e}),Header:Object(i.e)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>Y||G||Z?Object(I.f)(W,{className:"actions"},G&&Object(I.f)(_.a,{id:"delete-action-tooltip",title:Object(i.e)("Delete"),placement:"bottom"},Object(I.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,u.a.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then(({json:e={}})=>{B({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})}).catch(Object(O.c)(e=>Object(i.e)("An error occurred while fetching dataset related data: %s",e)));var t}},Object(I.f)(C.a.Trash,null))),Z&&Object(I.f)(_.a,{id:"export-action-tooltip",title:Object(i.e)("Export"),placement:"bottom"},Object(I.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>re([e])},Object(I.f)(C.a.Share,null))),Y&&Object(I.f)(_.a,{id:"edit-action-tooltip",title:Object(i.e)("Edit"),placement:"bottom"},Object(I.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>te(e)},Object(I.f)(C.a.EditAlt,null)))):null,Header:Object(i.e)("Actions"),id:"actions",hidden:!Y&&!G,disableSortBy:!0}],[Y,G,Z,te]),se=Object(b.useMemo)(()=>[{Header:Object(i.e)("Owner"),id:"owners",input:"select",operator:"rel_m_m",unfilteredLabel:"All",fetchSelects:Object(O.e)("dataset","owners",Object(O.c)(e=>Object(i.e)("An error occurred while fetching dataset owner values: %s",e)),a.userId),paginate:!0},{Header:Object(i.e)("Database"),id:"database",input:"select",operator:"rel_o_m",unfilteredLabel:"All",fetchSelects:Object(O.e)("dataset","database",Object(O.c)(e=>Object(i.e)("An error occurred while fetching datasets: %s",e))),paginate:!0},{Header:Object(i.e)("Schema"),id:"schema",input:"select",operator:"eq",unfilteredLabel:"All",fetchSelects:Object(O.d)("dataset","schema",Object(O.c)(e=>Object(i.e)("An error occurred while fetching schema values: %s",e))),paginate:!0},{Header:Object(i.e)("Type"),id:"sql",input:"select",operator:"dataset_is_null_or_empty",unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:Object(i.e)("Search"),id:"table_name",input:"search",operator:"ct"}],[]),ne={activeChild:"Datasets",...S.a},oe=[];(G||Z)&&oe.push({name:Object(i.e)("Bulk select"),onClick:N,buttonStyle:"secondary"}),K&&oe.push({name:Object(I.f)(h.a.Fragment,null,Object(I.f)("i",{className:"fa fa-plus"})," ",Object(i.e)("Dataset")," "),onClick:()=>H(!0),buttonStyle:"primary"}),Object(E.c)(E.a.VERSIONED_EXPORT)&&oe.push({name:Object(I.f)(C.a.Import,null),buttonStyle:"link",onClick:X}),ne.buttons=oe;const re=e=>window.location.assign(`/api/v1/dataset/export/?q=${m.a.encode(l()(e).call(e,({id:e})=>e))}`);return Object(I.f)(h.a.Fragment,null,Object(I.f)(w.a,ne),Object(I.f)(L,{show:$,onHide:()=>H(!1),onDatasetAdd:A}),R&&Object(I.f)(y.a,{description:Object(i.e)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",R.table_name,R.chart_count,R.dashboard_count),onConfirm:()=>{R&&(({id:a,table_name:s})=>{u.a.delete({endpoint:`/api/v1/dataset/${a}`}).then(()=>{A(),B(null),t(Object(i.e)("Deleted: %s",s))},Object(O.c)(t=>e(Object(i.e)("There was an issue deleting %s: %s",s,t))))})(R)},onHide:()=>{B(null)},open:!0,title:Object(i.e)("Delete Dataset?")}),P&&Object(I.f)(g.a,{datasource:P,onDatasourceSave:A,onHide:()=>{U(null)},show:!0}),Object(I.f)(f.a,{title:Object(i.e)("Please confirm"),description:Object(i.e)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{u.a.delete({endpoint:`/api/v1/dataset/?q=${m.a.encode(l()(a).call(a,({id:e})=>e))}`}).then(({json:e={}})=>{A(),t(e.message)},Object(O.c)(t=>e(Object(i.e)("There was an issue deleting the selected datasets: %s",t))))}},e=>{const t=[];return G&&t.push({key:"delete",name:Object(i.e)("Delete"),onSelect:e,type:"danger"}),Z&&t.push({key:"export",name:Object(i.e)("Export"),type:"primary",onSelect:re}),Object(I.f)(v.b,{className:"dataset-list-view",columns:ae,data:c,count:o,pageSize:25,fetchData:x,filters:se,loading:s,initialSort:ee,bulkActions:t,bulkSelectEnabled:d,disableBulkSelect:N,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=n()(e).call(e,(e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e),{virtualCount:0,physicalCount:0});return e.length?t&&!a?Object(i.e)("%s Selected (Virtual)",e.length,t):a&&!t?Object(i.e)("%s Selected (Physical)",e.length,a):Object(i.e)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):Object(i.e)("0 Selected")}})}),Object(I.f)(T.a,{resourceName:"dataset",resourceLabel:Object(i.e)("dataset"),passwordsNeededMessage:M,confirmOverwriteMessage:V,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{F(!1),A()},show:z,onHide:()=>{F(!1)},passwordFields:q,setPasswordFields:Q}))})},803:function(e,t,a){"use strict";var s=a(31),n=a.n(s),o=a(12),r=a.n(o),c=a(0),l=a.n(c),i=a(2),d=a.n(i),u=a(75),b=a(16),h=a(68),p=a(70),m=a(1);const O={dataEndpoint:d.a.string.isRequired,onChange:d.a.func.isRequired,mutator:d.a.func.isRequired,onAsyncError:d.a.func,value:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),valueRenderer:d.a.func,placeholder:d.a.string,autoSelect:d.a.bool},j={placeholder:Object(b.e)("Select ..."),onAsyncError:()=>{}};class f extends l.a.PureComponent{constructor(e){var t;super(e),this.state={isLoading:!1,options:[]},this.onChange=r()(t=this.onChange).call(t,this)}componentDidMount(){this.fetchOptions()}onChange(e){this.props.onChange(e)}fetchOptions(){this.setState({isLoading:!0});const{mutator:e,dataEndpoint:t}=this.props;return h.a.get({endpoint:t}).then(({json:t})=>{const a=e?e(t):t;this.setState({options:a,isLoading:!1}),!this.props.value&&this.props.autoSelect&&a.length>0&&this.onChange(a[0])}).catch(e=>Object(p.a)(e).then(e=>{this.props.onAsyncError(e.error||e.statusText||e),this.setState({isLoading:!1})}))}render(){return Object(m.f)(u.f,n()({placeholder:this.props.placeholder,options:this.state.options,value:this.props.value,isLoading:this.state.isLoading,onChange:this.onChange,valueRenderer:this.props.valueRenderer},this.props))}}f.propTypes=O,f.defaultProps=j,t.a=f}}]);