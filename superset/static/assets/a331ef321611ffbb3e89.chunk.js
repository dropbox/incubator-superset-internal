(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var r=a(67206),l=a(45652);e.exports=function(e,t){return e&&e.length?l(e,r(t,2)):[]}},26996:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var r=a(67294),l=a(51995),i=a(61988),o=a(35932),s=a(74069),n=a(4715),d=a(34858),c=a(29487),u=a(11965);const p=(0,d.z)(),m=p?p.support:"https://superset.apache.org/docs/databases/installing-database-drivers",h=({errorMessage:e,showDbInstallInstructions:t})=>(0,u.tZ)(c.Z,{closable:!1,css:e=>(e=>u.iv`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,u.tZ)(r.Fragment,null,(0,u.tZ)("br",null),(0,i.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions:"),(0,u.tZ)("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,i.t)("here")),"."):""}),g=l.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,b=l.iK.div`
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
`,y=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:l,onModelImport:c,show:p,onHide:m,passwordFields:y=[],setPasswordFields:f=(()=>{})})=>{const[v,Z]=(0,r.useState)(!0),[w,_]=(0,r.useState)({}),[x,S]=(0,r.useState)(!1),[C,$]=(0,r.useState)(!1),[k,E]=(0,r.useState)([]),[T,I]=(0,r.useState)(!1),[N,z]=(0,r.useState)(),H=()=>{E([]),f([]),_({}),S(!1),$(!1),I(!1),z("")},{state:{alreadyExists:F,passwordsNeeded:M},importResource:A}=(0,d.PW)(e,t,(e=>{z(e)}));(0,r.useEffect)((()=>{f(M),M.length>0&&I(!1)}),[M,f]),(0,r.useEffect)((()=>{S(F.length>0),F.length>0&&I(!1)}),[F,S]);return v&&p&&Z(!1),(0,u.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===k.length||x&&!C||T,onHandledPrimaryAction:()=>{var e;(null==(e=k[0])?void 0:e.originFileObj)instanceof File&&(I(!0),A(k[0].originFileObj,w,C).then((e=>{e&&(H(),c())})))},onHide:()=>{Z(!0),m(),H()},primaryButtonName:x?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:p,title:(0,u.tZ)("h4",null,(0,i.t)("Import %s",t))},(0,u.tZ)(b,null,(0,u.tZ)(n.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:k,onChange:e=>{E([{...e.file,status:"done"}])},onRemove:e=>(E(k.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:T},(0,u.tZ)(o.Z,{loading:T},"Select file"))),N&&(0,u.tZ)(h,{errorMessage:N,showDbInstallInstructions:y.length>0}),0===y.length?null:(0,u.tZ)(r.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(g,null,a),y.map((e=>(0,u.tZ)(b,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>_({...w,[e]:t.target.value})}))))),x?(0,u.tZ)(r.Fragment,null,(0,u.tZ)(b,null,(0,u.tZ)("div",{className:"confirm-overwrite"},l),(0,u.tZ)("div",{className:"control-label"},(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(r.toUpperCase()===(0,i.t)("OVERWRITE"))}}))):null)}},13434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var r=a(45578),l=a.n(r),i=a(51995),o=a(61988),s=a(11064),n=a(31069),d=a(67294),c=a(15926),u=a.n(c),p=a(30381),m=a.n(p),h=a(91877),g=a(93185),b=a(40768),y=a(34858),f=a(32228),v=a(19259),Z=a(20755),w=a(36674),_=a(18782),x=a(38703),S=a(61337),C=a(14114),$=a(83673),k=a(26996),E=a(58593),T=a(70163),I=a(1510),N=a(9312),z=a(8272),H=a(79789),F=a(34024),M=a(11965);const A=i.iK.div`
  align-items: center;
  display: flex;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,D=(0,o.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),U=(0,o.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?");(0,N.Z)();const B=(0,s.Z)(),O=async(e="",t,a)=>{var r;const i=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},o=u().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...i}),{json:s={}}=await n.Z.get({endpoint:`/api/v1/dataset/?q=${o}`}),d=null==s||null==(r=s.result)?void 0:r.map((({table_name:e,id:t})=>({label:e,value:t})));return{data:l()(d,"value"),totalCount:null==s?void 0:s.count}},L=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,R=(0,C.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:r}}=e,{state:{loading:l,resourceCount:i,resourceCollection:s,bulkSelectEnabled:c},setResourceCollection:p,hasPerm:C,fetchData:N,toggleBulkSelect:R,refreshData:P}=(0,y.Yi)("chart",(0,o.t)("chart"),t),V=(0,d.useMemo)((()=>s.map((e=>e.id))),[s]),[q,j]=(0,y.NE)("chart",V,t),{sliceCurrentlyEditing:W,handleChartUpdated:K,openChartEditModal:Y,closeChartEditModal:X}=(0,y.fF)(p,s),[G,J]=(0,d.useState)(!1),[Q,ee]=(0,d.useState)([]),[te,ae]=(0,d.useState)(!1),re=(0,S.OH)(null==r?void 0:r.toString(),null),le=C("can_write"),ie=C("can_write"),oe=C("can_write"),se=C("can_export")&&(0,h.cr)(g.T.VERSIONED_EXPORT),ne=[{id:"changed_on_delta_humanized",desc:!0}],de=e=>{const t=e.map((({id:e})=>e));(0,f.Z)("chart",t,(()=>{ae(!1)})),ae(!0)},ce=(0,d.useMemo)((()=>[{Cell:({row:{original:{id:e}}})=>r&&(0,M.tZ)(w.Z,{itemId:e,saveFaveStar:q,isStarred:j[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!r},{Cell:({row:{original:{url:e,slice_name:t,certified_by:a,certification_details:r,description:l}}})=>(0,M.tZ)(A,null,(0,M.tZ)("a",{href:e},a&&(0,M.tZ)(d.Fragment,null,(0,M.tZ)(H.Z,{certifiedBy:a,details:r})," "),t),l&&(0,M.tZ)(z.Z,{tooltip:l,viewBox:"0 -1 24 24"})),Header:(0,o.t)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=B.get(e))?void 0:t.name)||e},Header:(0,o.t)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>(0,M.tZ)("a",{href:t},e),Header:(0,o.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{last_saved_by:e,changed_by_url:t}}})=>(0,M.tZ)("a",{href:t},null!=e&&e.first_name?`${null==e?void 0:e.first_name} ${null==e?void 0:e.last_name}`:null),Header:(0,o.t)("Modified by"),accessor:"last_saved_by.first_name",size:"xl"},{Cell:({row:{original:{last_saved_at:e}}})=>(0,M.tZ)("span",{className:"no-wrap"},e?m().utc(e).fromNow():null),Header:(0,o.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>ie||oe||se?(0,M.tZ)(L,{className:"actions"},oe&&(0,M.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,M.tZ)(d.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,M.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,b.Gm)(e,a,t,P)},(e=>(0,M.tZ)(E.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,M.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,M.tZ)(T.Z.Trash,null))))),se&&(0,M.tZ)(E.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,M.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>de([e])},(0,M.tZ)(T.Z.Share,null))),ie&&(0,M.tZ)(E.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,M.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Y(e)},(0,M.tZ)(T.Z.EditAlt,null)))):null,Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!ie&&!oe}]),[r,ie,oe,se,q,j,P,a,t]),ue=(0,d.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:_.p.chartIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),pe=(0,d.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:_.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","owners",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:_.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","created_by",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Chart type"),id:"viz_type",input:"select",operator:_.p.equals,unfilteredLabel:(0,o.t)("All"),selects:B.keys().filter((e=>{var t;return(0,I.X3)((null==(t=B.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=B.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,o.t)("Dataset"),id:"datasource_id",input:"select",operator:_.p.equals,unfilteredLabel:(0,o.t)("All"),fetchSelects:O,paginate:!0},...r?[ue]:[],{Header:(0,o.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:_.p.chartIsCertified,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Search"),id:"slice_name",input:"search",operator:_.p.chartAllText}]),[t,ue,e.user]),me=[{desc:!1,id:"slice_name",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}],he=(0,d.useCallback)((e=>(0,M.tZ)(F.Z,{chart:e,showThumbnails:re?re.thumbnails:(0,h.cr)(g.T.THUMBNAILS),hasPerm:C,openChartEditModal:Y,bulkSelectEnabled:c,addDangerToast:t,addSuccessToast:a,refreshData:P,userId:r,loading:l,favoriteStatus:j[e.id],saveFavoriteStatus:q,handleBulkChartExport:de})),[t,a,c,j,C,l]),ge=[];return(oe||se)&&ge.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:R}),le&&(ge.push({name:(0,M.tZ)(d.Fragment,null,(0,M.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Chart")),buttonStyle:"primary",onClick:()=>{window.location.assign("/chart/add")}}),(0,h.cr)(g.T.VERSIONED_EXPORT)&&ge.push({name:(0,M.tZ)(E.u,{id:"import-tooltip",title:(0,o.t)("Import charts"),placement:"bottomRight"},(0,M.tZ)(T.Z.Import,null)),buttonStyle:"link",onClick:()=>{J(!0)}})),(0,M.tZ)(d.Fragment,null,(0,M.tZ)(Z.Z,{name:(0,o.t)("Charts"),buttons:ge}),W&&(0,M.tZ)($.Z,{onHide:X,onSave:K,show:!0,slice:W}),(0,M.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){n.Z.delete({endpoint:`/api/v1/chart/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{P(),a(e.message)}),(0,b.v$)((e=>t((0,o.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const t=[];return oe&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),se&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:de}),(0,M.tZ)(_.Z,{bulkActions:t,bulkSelectEnabled:c,cardSortSelectOptions:me,className:"chart-list-view",columns:ce,count:i,data:s,disableBulkSelect:R,fetchData:N,filters:pe,initialSort:ne,loading:l,pageSize:25,renderCard:he,showThumbnails:re?re.thumbnails:(0,h.cr)(g.T.THUMBNAILS),defaultViewMode:(0,h.cr)(g.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,M.tZ)(k.Z,{resourceName:"chart",resourceLabel:(0,o.t)("chart"),passwordsNeededMessage:D,confirmOverwriteMessage:U,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{J(!1),P(),a((0,o.t)("Chart imported"))},show:G,onHide:()=>{J(!1)},passwordFields:Q,setPasswordFields:ee}),te&&(0,M.tZ)(x.Z,null))}))}}]);
//# sourceMappingURL=a331ef321611ffbb3e89.chunk.js.map