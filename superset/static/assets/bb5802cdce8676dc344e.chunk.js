"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8774],{26996:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(67294),i=a(51995),o=a(61988),s=a(35932),l=a(74069),n=a(4715),d=a(34858),c=a(29487),u=a(11965);const h=(0,d.z)(),p=h?h.support:"https://superset.apache.org/docs/databases/installing-database-drivers",m=({errorMessage:e,showDbInstallInstructions:t})=>(0,u.tZ)(c.Z,{closable:!1,css:e=>(e=>u.iv`
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
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,u.tZ)(r.Fragment,null,(0,u.tZ)("br",null),(0,o.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions:"),(0,u.tZ)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."):""}),b=i.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,g=i.iK.div`
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
`,y=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:i,onModelImport:c,show:h,onHide:p,passwordFields:y=[],setPasswordFields:f=(()=>{})})=>{const[Z,_]=(0,r.useState)(!0),[w,v]=(0,r.useState)({}),[S,x]=(0,r.useState)(!1),[$,C]=(0,r.useState)(!1),[I,T]=(0,r.useState)([]),[D,E]=(0,r.useState)(!1),[k,N]=(0,r.useState)(),H=()=>{T([]),f([]),v({}),x(!1),C(!1),E(!1),N("")},{state:{alreadyExists:z,passwordsNeeded:F},importResource:U}=(0,d.PW)(e,t,(e=>{N(e)}));(0,r.useEffect)((()=>{f(F),F.length>0&&E(!1)}),[F,f]),(0,r.useEffect)((()=>{x(z.length>0),z.length>0&&E(!1)}),[z,x]);return Z&&h&&_(!1),(0,u.tZ)(l.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===I.length||S&&!$||D,onHandledPrimaryAction:()=>{var e;(null==(e=I[0])?void 0:e.originFileObj)instanceof File&&(E(!0),U(I[0].originFileObj,w,$).then((e=>{e&&(H(),c())})))},onHide:()=>{_(!0),p(),H()},primaryButtonName:S?(0,o.t)("Overwrite"):(0,o.t)("Import"),primaryButtonType:S?"danger":"primary",width:"750px",show:h,title:(0,u.tZ)("h4",null,(0,o.t)("Import %s",t))},(0,u.tZ)(g,null,(0,u.tZ)(n.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:I,onChange:e=>{T([{...e.file,status:"done"}])},onRemove:e=>(T(I.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:D},(0,u.tZ)(s.Z,{loading:D},"Select file"))),k&&(0,u.tZ)(m,{errorMessage:k,showDbInstallInstructions:y.length>0}),0===y.length?null:(0,u.tZ)(r.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(b,null,a),y.map((e=>(0,u.tZ)(g,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>v({...w,[e]:t.target.value})}))))),S?(0,u.tZ)(r.Fragment,null,(0,u.tZ)(g,null,(0,u.tZ)("div",{className:"confirm-overwrite"},i),(0,u.tZ)("div",{className:"control-label"},(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";C(r.toUpperCase()===(0,o.t)("OVERWRITE"))}}))):null)}},23767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var r,i=a(61988),o=a(51995),s=a(31069),l=a(67294),n=a(73727),d=a(15926),c=a.n(d),u=a(91877),h=a(93185),p=a(40768),m=a(34858),b=a(19259),g=a(32228),y=a(38703),f=a(20755),Z=a(18782),_=a(61337),w=a(14114),v=a(34581),S=a(70163),x=a(36674),$=a(20818),C=a(58593),I=a(26996),T=a(79789),D=a(99415);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var E=a(11965);const k=(0,i.t)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),N=(0,i.t)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),H=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,z=(0,w.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:o}}=e,{state:{loading:d,resourceCount:w,resourceCollection:z,bulkSelectEnabled:F},setResourceCollection:U,hasPerm:A,fetchData:M,toggleBulkSelect:O,refreshData:P}=(0,m.Yi)("dashboard",(0,i.t)("dashboard"),t),B=(0,l.useMemo)((()=>z.map((e=>e.id))),[z]),[R,L]=(0,m.NE)("dashboard",B,t),[V,j]=(0,l.useState)(null),[q,W]=(0,l.useState)(!1),[Y,K]=(0,l.useState)([]),[X,G]=(0,l.useState)(!1),J=(0,_.OH)(null==o?void 0:o.toString(),null),Q=A("can_write"),ee=A("can_write"),te=A("can_write"),ae=A("can_export")&&(0,u.cr)(h.T.VERSIONED_EXPORT),re=[{id:"changed_on_delta_humanized",desc:!0}];function ie(e){j(e)}function oe(e){return s.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{U(z.map((t=>{var a;if(t.id===(null==e||null==(a=e.result)?void 0:a.id)){const{changed_by_name:a,changed_by_url:r,changed_by:i,dashboard_title:o="",slug:s="",json_metadata:l="",changed_on_delta_humanized:n,url:d="",certified_by:c="",certification_details:u=""}=e.result;return{...t,changed_by_name:a,changed_by_url:r,changed_by:i,dashboard_title:o,slug:s,json_metadata:l,changed_on_delta_humanized:n,url:d,certified_by:c,certification_details:u}}return t})))}),(0,p.v$)((e=>t((0,i.t)("An error occurred while fetching dashboards: %s",e)))))}const se=e=>{const t=e.map((({id:e})=>e));(0,g.Z)("dashboard",t,(()=>{G(!1)})),G(!0)},le=(0,l.useMemo)((()=>[{Cell:({row:{original:{id:e}}})=>o&&(0,E.tZ)(x.Z,{itemId:e,saveFaveStar:R,isStarred:L[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!o},{Cell:({row:{original:{url:e,dashboard_title:t,certified_by:a,certification_details:r}}})=>(0,E.tZ)(n.rU,{to:e},a&&(0,E.tZ)(l.Fragment,null,(0,E.tZ)(T.Z,{certifiedBy:a,details:r})," "),t),Header:(0,i.t)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>(0,E.tZ)("a",{href:t},e),Header:(0,i.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{status:e}}})=>e===r.PUBLISHED?(0,i.t)("Published"):(0,i.t)("Draft"),Header:(0,i.t)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,E.tZ)("span",{className:"no-wrap"},e),Header:(0,i.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,i.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>(0,E.tZ)(v.Z,{users:e}),Header:(0,i.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>(0,E.tZ)(H,{className:"actions"},te&&(0,E.tZ)(b.Z,{title:(0,i.t)("Please confirm"),description:(0,E.tZ)(l.Fragment,null,(0,i.t)("Are you sure you want to delete")," ",(0,E.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,p.Iu)(e,P,a,t)},(e=>(0,E.tZ)(C.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom"},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,E.tZ)(S.Z.Trash,null))))),ae&&(0,E.tZ)(C.u,{id:"export-action-tooltip",title:(0,i.t)("Export"),placement:"bottom"},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>se([e])},(0,E.tZ)(S.Z.Share,null))),ee&&(0,E.tZ)(C.u,{id:"edit-action-tooltip",title:(0,i.t)("Edit"),placement:"bottom"},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ie(e)},(0,E.tZ)(S.Z.EditAlt,null)))),Header:(0,i.t)("Actions"),id:"actions",hidden:!ee&&!te&&!ae,disableSortBy:!0}]),[o,ee,te,ae,R,L,P,a,t]),ne=(0,l.useMemo)((()=>({Header:(0,i.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:Z.p.dashboardIsFav,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]})),[]),de=(0,l.useMemo)((()=>[{Header:(0,i.t)("Owner"),id:"owners",input:"select",operator:Z.p.relationManyMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,p.tm)("dashboard","owners",(0,p.v$)((e=>t((0,i.t)("An error occurred while fetching dashboard owner values: %s",e)))),e.user),paginate:!0},{Header:(0,i.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,p.tm)("dashboard","created_by",(0,p.v$)((e=>t((0,i.t)("An error occurred while fetching dashboard created by values: %s",e)))),e.user),paginate:!0},{Header:(0,i.t)("Status"),id:"published",input:"select",operator:Z.p.equals,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Published"),value:!0},{label:(0,i.t)("Draft"),value:!1}]},...o?[ne]:[],{Header:(0,i.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:Z.p.dashboardIsCertified,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]},{Header:(0,i.t)("Search"),id:"dashboard_title",input:"search",operator:Z.p.titleOrSlug}]),[t,ne,e.user]),ce=[{desc:!1,id:"dashboard_title",label:(0,i.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,i.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,i.t)("Least recently modified"),value:"least_recently_modified"}],ue=(0,l.useCallback)((e=>(0,E.tZ)(D.Z,{dashboard:e,hasPerm:A,bulkSelectEnabled:F,refreshData:P,showThumbnails:J?J.thumbnails:(0,u.cr)(h.T.THUMBNAILS),userId:o,loading:d,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:ie,saveFavoriteStatus:R,favoriteStatus:L[e.id],handleBulkDashboardExport:se})),[t,a,F,L,A,d,o,P,R,J]),he=[];return(te||ae)&&he.push({name:(0,i.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:O}),Q&&(he.push({name:(0,E.tZ)(l.Fragment,null,(0,E.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),(0,u.cr)(h.T.VERSIONED_EXPORT)&&he.push({name:(0,E.tZ)(C.u,{id:"import-tooltip",title:(0,i.t)("Import dashboards"),placement:"bottomRight"},(0,E.tZ)(S.Z.Import,null)),buttonStyle:"link",onClick:()=>{W(!0)}})),(0,E.tZ)(l.Fragment,null,(0,E.tZ)(f.Z,{name:(0,i.t)("Dashboards"),buttons:he}),(0,E.tZ)(b.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return s.Z.delete({endpoint:`/api/v1/dashboard/?q=${c().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{P(),a(e.message)}),(0,p.v$)((e=>t((0,i.t)("There was an issue deleting the selected dashboards: ",e)))))}},(e=>{const t=[];return te&&t.push({key:"delete",name:(0,i.t)("Delete"),type:"danger",onSelect:e}),ae&&t.push({key:"export",name:(0,i.t)("Export"),type:"primary",onSelect:se}),(0,E.tZ)(l.Fragment,null,V&&(0,E.tZ)($.Z,{dashboardId:V.id,show:!0,onHide:()=>j(null),onSubmit:oe}),(0,E.tZ)(Z.Z,{bulkActions:t,bulkSelectEnabled:F,cardSortSelectOptions:ce,className:"dashboard-list-view",columns:le,count:w,data:z,disableBulkSelect:O,fetchData:M,filters:de,initialSort:re,loading:d,pageSize:25,showThumbnails:J?J.thumbnails:(0,u.cr)(h.T.THUMBNAILS),renderCard:ue,defaultViewMode:(0,u.cr)(h.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})),(0,E.tZ)(I.Z,{resourceName:"dashboard",resourceLabel:(0,i.t)("dashboard"),passwordsNeededMessage:k,confirmOverwriteMessage:N,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{W(!1),P(),a((0,i.t)("Dashboard imported"))},show:q,onHide:()=>{W(!1)},passwordFields:Y,setPasswordFields:K}),X&&(0,E.tZ)(y.Z,null))}))}}]);
//# sourceMappingURL=bb5802cdce8676dc344e.chunk.js.map