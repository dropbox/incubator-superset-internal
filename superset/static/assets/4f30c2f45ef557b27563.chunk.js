(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var r=a(67206),l=a(45652);e.exports=function(e,t){return e&&e.length?l(e,r(t,2)):[]}},27989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var r=a(67294),l=a(37840),o=a(60650),s=a(35932),n=a(74069),i=a(82191),d=a(34858),c=a(11965);const u=l.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,m=l.iK.div`
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
`,p=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:l,addDangerToast:p,addSuccessToast:h,onModelImport:g,show:b,onHide:y,passwordFields:f=[],setPasswordFields:v=(()=>{})})=>{const[Z,w]=(0,r.useState)(!0),[_,S]=(0,r.useState)({}),[x,C]=(0,r.useState)(!1),[T,E]=(0,r.useState)(!1),[k,$]=(0,r.useState)([]),[N,I]=(0,r.useState)(!1),H=()=>{$([]),v([]),S({}),C(!1),E(!1),I(!1)},{state:{alreadyExists:z,passwordsNeeded:A},importResource:F}=(0,d.PW)(e,t,(e=>{H(),p(e)}));(0,r.useEffect)((()=>{v(A),A.length>0&&I(!1)}),[A,v]),(0,r.useEffect)((()=>{C(z.length>0),z.length>0&&I(!1)}),[z,C]);return Z&&b&&w(!1),(0,c.tZ)(n.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===k.length||x&&!T||N,onHandledPrimaryAction:()=>{var e;(null==(e=k[0])?void 0:e.originFileObj)instanceof File&&(I(!0),F(k[0].originFileObj,_,T).then((e=>{e&&(h((0,o.t)("The import was successful")),H(),g())})))},onHide:()=>{w(!0),y(),H()},primaryButtonName:x?(0,o.t)("Overwrite"):(0,o.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:b,title:(0,c.tZ)("h4",null,(0,o.t)("Import %s",t))},(0,c.tZ)(m,null,(0,c.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:k,onChange:e=>{$([{...e.file,status:"done"}])},onRemove:e=>($(k.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(s.Z,{loading:N},"Select file"))),0===f.length?null:(0,c.tZ)(r.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(u,null,a),f.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>S({..._,[e]:t.target.value})}))))),x?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},l),(0,c.tZ)("div",{className:"control-label"},(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,o.t)("OVERWRITE"))}}))):null)}},13434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var r=a(45578),l=a.n(r),o=a(60650),s=a(38849),n=a(21173),i=a(37840),d=a(67294),c=a(15926),u=a.n(c),m=a(30381),p=a.n(m),h=a(91877),g=a(46415),b=a(40768),y=a(34858),f=a(32228),v=a(19259),Z=a(62753),w=a(36674),_=a(9678),S=a(38703),x=a(61337),C=a(14114),T=a(83673),E=a(27989),k=a(58593),$=a(38097),N=a(1510),I=a(69753),H=a(34024),z=a(11965);const A=(0,o.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),F=(0,o.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?");(0,I.Z)();const M=(0,s.Z)(),D=async(e="",t,a)=>{var r;const o=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},s=u().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...o}),{json:i={}}=await n.Z.get({endpoint:`/api/v1/dataset/?q=${s}`}),d=null==i||null==(r=i.result)?void 0:r.map((({table_name:e,id:t})=>({label:e,value:t})));return{data:l()(d,"value"),totalCount:null==i?void 0:i.count}},O=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,R=(0,C.Z)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:r,resourceCount:l,resourceCollection:s,bulkSelectEnabled:i},setResourceCollection:c,hasPerm:m,fetchData:C,toggleBulkSelect:I,refreshData:R}=(0,y.Yi)("chart",(0,o.t)("chart"),t),U=(0,d.useMemo)((()=>s.map((e=>e.id))),[s]),[B,L]=(0,y.NE)("chart",U,t),{sliceCurrentlyEditing:P,handleChartUpdated:V,openChartEditModal:q,closeChartEditModal:j}=(0,y.fF)(c,s),[W,K]=(0,d.useState)(!1),[X,Y]=(0,d.useState)([]),[G,J]=(0,d.useState)(!1),{userId:Q}=e.user,ee=(0,x.f)(null==Q?void 0:Q.toString(),null),te=m("can_write"),ae=m("can_write"),re=m("can_write"),le=m("can_read")&&(0,h.cr)(g.T.VERSIONED_EXPORT),oe=[{id:"changed_on_delta_humanized",desc:!0}],se=e=>{const t=e.map((({id:e})=>e));(0,f.Z)("chart",t,(()=>{J(!1)})),J(!0)},ne=(0,d.useMemo)((()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>(0,z.tZ)(w.Z,{itemId:e,saveFaveStar:B,isStarred:L[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"}]:[],{Cell:({row:{original:{url:e,slice_name:t}}})=>(0,z.tZ)("a",{href:e},t),Header:(0,o.t)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=M.get(e))?void 0:t.name)||e},Header:(0,o.t)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>(0,z.tZ)("a",{href:t},e),Header:(0,o.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{last_saved_by:e,changed_by_url:t}}})=>(0,z.tZ)("a",{href:t},null!=e&&e.first_name?`${null==e?void 0:e.first_name} ${null==e?void 0:e.last_name}`:null),Header:(0,o.t)("Modified by"),accessor:"last_saved_by.first_name",size:"xl"},{Cell:({row:{original:{last_saved_at:e}}})=>(0,z.tZ)("span",{className:"no-wrap"},e?p().utc(e).fromNow():null),Header:(0,o.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>ae||re||le?(0,z.tZ)(O,{className:"actions"},re&&(0,z.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,z.tZ)(d.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,z.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,b.Gm)(e,a,t,R)},(e=>(0,z.tZ)(k.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,z.tZ)($.Z.Trash,null))))),le&&(0,z.tZ)(k.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>se([e])},(0,z.tZ)($.Z.Share,null))),ae&&(0,z.tZ)(k.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>q(e)},(0,z.tZ)($.Z.EditAlt,null)))):null,Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!ae&&!re}]),[ae,re,le,...e.user.userId?[L]:[]]),ie=(0,d.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:_.p.chartIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),de=(0,d.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:_.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","owners",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:_.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","created_by",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Viz type"),id:"viz_type",input:"select",operator:_.p.equals,unfilteredLabel:(0,o.t)("All"),selects:M.keys().filter((e=>{var t;return(0,N.X3)((null==(t=M.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=M.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,o.t)("Dataset"),id:"datasource_id",input:"select",operator:_.p.equals,unfilteredLabel:(0,o.t)("All"),fetchSelects:D,paginate:!0},...e.user.userId?[ie]:[],{Header:(0,o.t)("Search"),id:"slice_name",input:"search",operator:_.p.chartAllText}]),[t,ie,e.user]),ce=[{desc:!1,id:"slice_name",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}];function ue(e){return(0,z.tZ)(H.Z,{chart:e,showThumbnails:ee?ee.thumbnails:(0,h.cr)(g.T.THUMBNAILS),hasPerm:m,openChartEditModal:q,bulkSelectEnabled:i,addDangerToast:t,addSuccessToast:a,refreshData:R,loading:r,favoriteStatus:L[e.id],saveFavoriteStatus:B,handleBulkChartExport:se})}const me=[];return(re||le)&&me.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:I}),te&&(me.push({name:(0,z.tZ)(d.Fragment,null,(0,z.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Chart")),buttonStyle:"primary",onClick:()=>{window.location.assign("/chart/add")}}),(0,h.cr)(g.T.VERSIONED_EXPORT)&&me.push({name:(0,z.tZ)(k.u,{id:"import-tooltip",title:(0,o.t)("Import charts"),placement:"bottomRight"},(0,z.tZ)($.Z.Import,null)),buttonStyle:"link",onClick:()=>{K(!0)}})),(0,z.tZ)(d.Fragment,null,(0,z.tZ)(Z.Z,{name:(0,o.t)("Charts"),buttons:me}),P&&(0,z.tZ)(T.Z,{onHide:j,onSave:V,show:!0,slice:P}),(0,z.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){n.Z.delete({endpoint:`/api/v1/chart/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{R(),a(e.message)}),(0,b.v$)((e=>t((0,o.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const t=[];return re&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),le&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:se}),(0,z.tZ)(_.Z,{bulkActions:t,bulkSelectEnabled:i,cardSortSelectOptions:ce,className:"chart-list-view",columns:ne,count:l,data:s,disableBulkSelect:I,fetchData:C,filters:de,initialSort:oe,loading:r,pageSize:25,renderCard:ue,showThumbnails:ee?ee.thumbnails:(0,h.cr)(g.T.THUMBNAILS),defaultViewMode:(0,h.cr)(g.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,z.tZ)(E.Z,{resourceName:"chart",resourceLabel:(0,o.t)("chart"),passwordsNeededMessage:A,confirmOverwriteMessage:F,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{K(!1),R()},show:W,onHide:()=>{K(!1)},passwordFields:X,setPasswordFields:Y}),G&&(0,z.tZ)(S.Z,null))}))}}]);