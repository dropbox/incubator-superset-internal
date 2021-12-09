(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var r=a(67206),l=a(45652);e.exports=function(e,t){return e&&e.length?l(e,r(t,2)):[]}},27989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(67294),l=a(51995),i=a(61988),o=a(35932),s=a(74069),n=a(82191),d=a(34858),c=a(11965);const u=l.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,p=l.iK.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:l,addDangerToast:m,addSuccessToast:h,onModelImport:g,show:b,onHide:y,passwordFields:f=[],setPasswordFields:v=(()=>{})})=>{const[Z,w]=(0,r.useState)(!0),[_,S]=(0,r.useState)({}),[x,C]=(0,r.useState)(!1),[T,E]=(0,r.useState)(!1),[k,$]=(0,r.useState)([]),[N,I]=(0,r.useState)(!1),H=()=>{$([]),v([]),S({}),C(!1),E(!1),I(!1)},{state:{alreadyExists:A,passwordsNeeded:F},importResource:z}=(0,d.PW)(e,t,(e=>{H(),m(e)}));(0,r.useEffect)((()=>{v(F),F.length>0&&I(!1)}),[F,v]),(0,r.useEffect)((()=>{C(A.length>0),A.length>0&&I(!1)}),[A,C]);return Z&&b&&w(!1),(0,c.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===k.length||x&&!T||N,onHandledPrimaryAction:()=>{var e;(null==(e=k[0])?void 0:e.originFileObj)instanceof File&&(I(!0),z(k[0].originFileObj,_,T).then((e=>{e&&(h((0,i.t)("The import was successful")),H(),g())})))},onHide:()=>{w(!0),y(),H()},primaryButtonName:x?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:b,title:(0,c.tZ)("h4",null,(0,i.t)("Import %s",t))},(0,c.tZ)(p,null,(0,c.tZ)(n.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:k,onChange:e=>{$([{...e.file,status:"done"}])},onRemove:e=>($(k.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(o.Z,{loading:N},"Select file"))),0===f.length?null:(0,c.tZ)(r.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(u,null,a),f.map((e=>(0,c.tZ)(p,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>S({..._,[e]:t.target.value})}))))),x?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(p,null,(0,c.tZ)("div",{className:"confirm-overwrite"},l),(0,c.tZ)("div",{className:"control-label"},(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,i.t)("OVERWRITE"))}}))):null)}},13434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var r=a(45578),l=a.n(r),i=a(61988),o=a(11064),s=a(31069),n=a(51995),d=a(67294),c=a(15926),u=a.n(c),p=a(30381),m=a.n(p),h=a(91877),g=a(93185),b=a(40768),y=a(34858),f=a(32228),v=a(19259),Z=a(62753),w=a(36674),_=a(9678),S=a(38703),x=a(61337),C=a(14114),T=a(83673),E=a(27989),k=a(58593),$=a(38097),N=a(1510),I=a(42522),H=a(83268),A=a(34024),F=a(11965);const z=(0,i.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),M=(0,i.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?");(0,I.Z)();const D=(0,o.Z)(),B=async(e="",t,a)=>{var r;const i=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},o=u().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...i}),{json:n={}}=await s.Z.get({endpoint:`/api/v1/dataset/?q=${o}`}),d=null==n||null==(r=n.result)?void 0:r.map((({table_name:e,id:t})=>({label:e,value:t})));return{data:l()(d,"value"),totalCount:null==n?void 0:n.count}},L=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,O=(0,C.Z)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:r,resourceCount:l,resourceCollection:o,bulkSelectEnabled:n},setResourceCollection:c,hasPerm:p,fetchData:C,toggleBulkSelect:I,refreshData:O}=(0,y.Yi)("chart",(0,i.t)("chart"),t),R=(0,d.useMemo)((()=>o.map((e=>e.id))),[o]),[U,P]=(0,y.NE)("chart",R,t),{sliceCurrentlyEditing:V,handleChartUpdated:q,openChartEditModal:j,closeChartEditModal:W}=(0,y.fF)(c,o),[Y,K]=(0,d.useState)(!1),[X,G]=(0,d.useState)([]),[J,Q]=(0,d.useState)(!1),{userId:ee}=e.user,te=(0,x.f)(null==ee?void 0:ee.toString(),null),ae=p("can_write"),re=p("can_write"),le=p("can_write"),ie=p("can_export")&&(0,h.cr)(g.T.VERSIONED_EXPORT),oe=[{id:"changed_on_delta_humanized",desc:!0}],se=e=>{const t=e.map((({id:e})=>e));(0,f.Z)("chart",t,(()=>{Q(!1)})),Q(!0)},ne=(0,d.useMemo)((()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>(0,F.tZ)(w.Z,{itemId:e,saveFaveStar:U,isStarred:P[e]}),Header:"",id:"id",disableSortBy:!0,size:"sm"}]:[],{Cell:({row:{original:{url:e,slice_name:t,certified_by:a,certification_details:r}}})=>(0,F.tZ)("a",{href:e},a&&(0,F.tZ)(d.Fragment,null,(0,F.tZ)(H.Z,{certifiedBy:a,details:r})," "),t),Header:(0,i.t)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=D.get(e))?void 0:t.name)||e},Header:(0,i.t)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>(0,F.tZ)("a",{href:t},e),Header:(0,i.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{last_saved_by:e,changed_by_url:t}}})=>(0,F.tZ)("a",{href:t},null!=e&&e.first_name?`${null==e?void 0:e.first_name} ${null==e?void 0:e.last_name}`:null),Header:(0,i.t)("Modified by"),accessor:"last_saved_by.first_name",size:"xl"},{Cell:({row:{original:{last_saved_at:e}}})=>(0,F.tZ)("span",{className:"no-wrap"},e?m().utc(e).fromNow():null),Header:(0,i.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,i.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>re||le||ie?(0,F.tZ)(L,{className:"actions"},le&&(0,F.tZ)(v.Z,{title:(0,i.t)("Please confirm"),description:(0,F.tZ)(d.Fragment,null,(0,i.t)("Are you sure you want to delete")," ",(0,F.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,b.Gm)(e,a,t,O)},(e=>(0,F.tZ)(k.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom"},(0,F.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,F.tZ)($.Z.Trash,null))))),ie&&(0,F.tZ)(k.u,{id:"export-action-tooltip",title:(0,i.t)("Export"),placement:"bottom"},(0,F.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>se([e])},(0,F.tZ)($.Z.Share,null))),re&&(0,F.tZ)(k.u,{id:"edit-action-tooltip",title:(0,i.t)("Edit"),placement:"bottom"},(0,F.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>j(e)},(0,F.tZ)($.Z.EditAlt,null)))):null,Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!re&&!le}]),[re,le,ie,...e.user.userId?[P]:[]]),de=(0,d.useMemo)((()=>({Header:(0,i.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:_.p.chartIsFav,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]})),[]),ce=(0,d.useMemo)((()=>[{Header:(0,i.t)("Owner"),id:"owners",input:"select",operator:_.p.relationManyMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,b.tm)("chart","owners",(0,b.v$)((e=>t((0,i.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,i.t)("Created by"),id:"created_by",input:"select",operator:_.p.relationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,b.tm)("chart","created_by",(0,b.v$)((e=>t((0,i.t)("An error occurred while fetching chart created by values: %s",e)))),e.user),paginate:!0},{Header:(0,i.t)("Viz type"),id:"viz_type",input:"select",operator:_.p.equals,unfilteredLabel:(0,i.t)("All"),selects:D.keys().filter((e=>{var t;return(0,N.X3)((null==(t=D.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=D.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,i.t)("Dataset"),id:"datasource_id",input:"select",operator:_.p.equals,unfilteredLabel:(0,i.t)("All"),fetchSelects:B,paginate:!0},...e.user.userId?[de]:[],{Header:(0,i.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:_.p.chartIsCertified,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]},{Header:(0,i.t)("Search"),id:"slice_name",input:"search",operator:_.p.chartAllText}]),[t,de,e.user]),ue=[{desc:!1,id:"slice_name",label:(0,i.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,i.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,i.t)("Least recently modified"),value:"least_recently_modified"}];function pe(e){return(0,F.tZ)(A.Z,{chart:e,showThumbnails:te?te.thumbnails:(0,h.cr)(g.T.THUMBNAILS),hasPerm:p,openChartEditModal:j,bulkSelectEnabled:n,addDangerToast:t,addSuccessToast:a,refreshData:O,loading:r,favoriteStatus:P[e.id],saveFavoriteStatus:U,handleBulkChartExport:se})}const me=[];return(le||ie)&&me.push({name:(0,i.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:I}),ae&&(me.push({name:(0,F.tZ)(d.Fragment,null,(0,F.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Chart")),buttonStyle:"primary",onClick:()=>{window.location.assign("/chart/add")}}),(0,h.cr)(g.T.VERSIONED_EXPORT)&&me.push({name:(0,F.tZ)(k.u,{id:"import-tooltip",title:(0,i.t)("Import charts"),placement:"bottomRight"},(0,F.tZ)($.Z.Import,null)),buttonStyle:"link",onClick:()=>{K(!0)}})),(0,F.tZ)(d.Fragment,null,(0,F.tZ)(Z.Z,{name:(0,i.t)("Charts"),buttons:me}),V&&(0,F.tZ)(T.Z,{onHide:W,onSave:q,show:!0,slice:V}),(0,F.tZ)(v.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){s.Z.delete({endpoint:`/api/v1/chart/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{O(),a(e.message)}),(0,b.v$)((e=>t((0,i.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const t=[];return le&&t.push({key:"delete",name:(0,i.t)("Delete"),type:"danger",onSelect:e}),ie&&t.push({key:"export",name:(0,i.t)("Export"),type:"primary",onSelect:se}),(0,F.tZ)(_.Z,{bulkActions:t,bulkSelectEnabled:n,cardSortSelectOptions:ue,className:"chart-list-view",columns:ne,count:l,data:o,disableBulkSelect:I,fetchData:C,filters:ce,initialSort:oe,loading:r,pageSize:25,renderCard:pe,showThumbnails:te?te.thumbnails:(0,h.cr)(g.T.THUMBNAILS),defaultViewMode:(0,h.cr)(g.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,F.tZ)(E.Z,{resourceName:"chart",resourceLabel:(0,i.t)("chart"),passwordsNeededMessage:z,confirmOverwriteMessage:M,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{K(!1),O()},show:Y,onHide:()=>{K(!1)},passwordFields:X,setPasswordFields:G}),J&&(0,F.tZ)(S.Z,null))}))}}]);