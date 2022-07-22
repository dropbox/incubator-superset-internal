"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8774],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(67294),o=a(51995),n=a(61988),l=a(35932),i=a(74069),s=a(4715),d=a(34858),u=a(11965);const c=o.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,h=o.iK.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:o,addDangerToast:m,onModelImport:p,show:b,onHide:g,passwordFields:y=[],setPasswordFields:f=(()=>{})})=>{const[Z,_]=(0,r.useState)(!0),[w,v]=(0,r.useState)({}),[S,x]=(0,r.useState)(!1),[C,E]=(0,r.useState)(!1),[T,k]=(0,r.useState)([]),[D,I]=(0,r.useState)(!1),$=()=>{k([]),f([]),v({}),x(!1),E(!1),I(!1)},{state:{alreadyExists:A,passwordsNeeded:H},importResource:N}=(0,d.PW)(e,t,(e=>{$(),m(e)}));(0,r.useEffect)((()=>{f(H),H.length>0&&I(!1)}),[H,f]),(0,r.useEffect)((()=>{x(A.length>0),A.length>0&&I(!1)}),[A,x]);return Z&&b&&_(!1),(0,u.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===T.length||S&&!C||D,onHandledPrimaryAction:()=>{var e;(null==(e=T[0])?void 0:e.originFileObj)instanceof File&&(I(!0),N(T[0].originFileObj,w,C).then((e=>{e&&($(),p())})))},onHide:()=>{_(!0),g(),$()},primaryButtonName:S?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:S?"danger":"primary",width:"750px",show:b,title:(0,u.tZ)("h4",null,(0,n.t)("Import %s",t))},(0,u.tZ)(h,null,(0,u.tZ)(s.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:T,onChange:e=>{k([{...e.file,status:"done"}])},onRemove:e=>(k(T.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,u.tZ)(l.Z,{loading:D},"Select file"))),0===y.length?null:(0,u.tZ)(r.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(c,null,a),y.map((e=>(0,u.tZ)(h,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>v({...w,[e]:t.target.value})}))))),S?(0,u.tZ)(r.Fragment,null,(0,u.tZ)(h,null,(0,u.tZ)("div",{className:"confirm-overwrite"},o),(0,u.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},49997:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(67294),o=a(51995),n=a(61988),l=a(91877),i=a(93185),s=a(74069),d=a(33626),u=a(97381),c=a(60193),h=a(11965);function m({extensions:e,placeholder:t,id:a}){return(0,h.tZ)(c.ZP,{id:a,placeholder:t,extensions:e,autoComplete:"off",autoFocus:!0})}var p=a(3741),b=a(31069);const g=async e=>{var t;let a;try{a=await b.Z.get({endpoint:`/dashboardasync/api/read?_oc_DashboardModelViewAsync=changed_on&_od_DashboardModelViewAsync=desc&_flt_2_dashboard_title=${e}`})}catch(e){return[{title:(0,n.t)("An error occurred while fetching dashboards")}]}return null==(t=a)?void 0:t.json.result.map((e=>({title:e.dashboard_title,...e})))},y=(0,o.iK)(s.Z)`
  margin-top: 20%;

  .ant-modal-body {
    padding: 0;
    overflow: visible;
  }
`;function f(){const e=(0,r.useRef)(),t=(0,r.useRef)(null),[a,o]=(0,r.useState)(!1),s=e=>(0,u.logEvent)(p.tB,{show_omni:e}),c=()=>{e.current=!1,o(!1),s(!1)};return(0,d.J)((()=>{function a(t){if(!(0,l.cr)(i.T.OMNIBAR))return;const a=t.ctrlKey||t.metaKey,r=["KeyK"].includes(t.code);"Escape"===t.key&&e.current?c():a&&r&&(e.current=!e.current,o(e.current),s(!!e.current))}function r(e){t.current&&!t.current.contains(e.target)&&c()}return e.current=!1,document.addEventListener("mousedown",r),document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),document.removeEventListener("mousedown",r)}})),(0,h.tZ)(y,{title:"",show:a,hideFooter:!0,closable:!1,onHide:()=>{},destroyOnClose:!0},(0,h.tZ)("div",{ref:t},(0,h.tZ)(m,{id:"InputOmnibar",placeholder:(0,n.t)("Search all dashboards"),extensions:[g]})))}},23767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r,o=a(61988),n=a(51995),l=a(31069),i=a(67294),s=a(73727),d=a(15926),u=a.n(d),c=a(91877),h=a(93185),m=a(40768),p=a(34858),b=a(19259),g=a(32228),y=a(38703),f=a(20755),Z=a(98289),_=a(61337),w=a(14114),v=a(34581),S=a(70163),x=a(36674),C=a(20818),E=a(58593),T=a(27989),k=a(49997),D=a(79789),I=a(99415);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var $=a(11965);const A=(0,o.t)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),H=(0,o.t)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),N=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,F=(0,w.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:n}}=e,{state:{loading:d,resourceCount:w,resourceCollection:F,bulkSelectEnabled:M},setResourceCollection:L,hasPerm:O,fetchData:z,toggleBulkSelect:B,refreshData:P}=(0,p.Yi)("dashboard",(0,o.t)("dashboard"),t),R=(0,i.useMemo)((()=>F.map((e=>e.id))),[F]),[U,j]=(0,p.NE)("dashboard",R,t),[K,V]=(0,i.useState)(null),[q,W]=(0,i.useState)(!1),[Y,J]=(0,i.useState)([]),[X,G]=(0,i.useState)(!1),Q=(0,_.OH)(null==n?void 0:n.toString(),null),ee=O("can_write"),te=O("can_write"),ae=O("can_write"),re=O("can_export"),oe=[{id:"changed_on_delta_humanized",desc:!0}];function ne(e){V(e)}function le(e){return l.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{L(F.map((t=>{var a;if(t.id===(null==e||null==(a=e.result)?void 0:a.id)){const{changed_by_name:a,changed_by_url:r,changed_by:o,dashboard_title:n="",slug:l="",json_metadata:i="",changed_on_delta_humanized:s,url:d="",certified_by:u="",certification_details:c=""}=e.result;return{...t,changed_by_name:a,changed_by_url:r,changed_by:o,dashboard_title:n,slug:l,json_metadata:i,changed_on_delta_humanized:s,url:d,certified_by:u,certification_details:c}}return t})))}),(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboards: %s",e)))))}const ie=e=>{const t=e.map((({id:e})=>e));(0,g.Z)("dashboard",t,(()=>{G(!1)})),G(!0)},se=(0,i.useMemo)((()=>[{Cell:({row:{original:{id:e}}})=>n&&(0,$.tZ)(x.Z,{itemId:e,saveFaveStar:U,isStarred:j[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!n},{Cell:({row:{original:{url:e,dashboard_title:t,certified_by:a,certification_details:r}}})=>(0,$.tZ)(s.rU,{to:e},a&&(0,$.tZ)(i.Fragment,null,(0,$.tZ)(D.Z,{certifiedBy:a,details:r})," "),t),Header:(0,o.t)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>(0,$.tZ)("a",{href:t},e),Header:(0,o.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{status:e}}})=>e===r.PUBLISHED?(0,o.t)("Published"):(0,o.t)("Draft"),Header:(0,o.t)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,$.tZ)("span",{className:"no-wrap"},e),Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>(0,$.tZ)(v.Z,{users:e}),Header:(0,o.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>(0,$.tZ)(N,{className:"actions"},ae&&(0,$.tZ)(b.Z,{title:(0,o.t)("Please confirm"),description:(0,$.tZ)(i.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,$.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,m.Iu)(e,P,a,t)},(e=>(0,$.tZ)(E.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,$.tZ)(S.Z.Trash,null))))),re&&(0,$.tZ)(E.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ie([e])},(0,$.tZ)(S.Z.Share,null))),te&&(0,$.tZ)(E.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ne(e)},(0,$.tZ)(S.Z.EditAlt,null)))),Header:(0,o.t)("Actions"),id:"actions",hidden:!te&&!ae&&!re,disableSortBy:!0}]),[n,te,ae,re,U,j,P,a,t]),de=(0,i.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:Z.p.dashboardIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),ue=(0,i.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:Z.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,m.tm)("dashboard","owners",(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboard owner values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,m.tm)("dashboard","created_by",(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboard created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Status"),id:"published",input:"select",operator:Z.p.equals,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Published"),value:!0},{label:(0,o.t)("Draft"),value:!1}]},...n?[de]:[],{Header:(0,o.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:Z.p.dashboardIsCertified,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Search"),id:"dashboard_title",input:"search",operator:Z.p.titleOrSlug}]),[t,de,e.user]),ce=[{desc:!1,id:"dashboard_title",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}],he=(0,i.useCallback)((e=>(0,$.tZ)(I.Z,{dashboard:e,hasPerm:O,bulkSelectEnabled:M,refreshData:P,showThumbnails:Q?Q.thumbnails:(0,c.cr)(h.T.THUMBNAILS),userId:n,loading:d,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:ne,saveFavoriteStatus:U,favoriteStatus:j[e.id],handleBulkDashboardExport:ie})),[t,a,M,j,O,d,n,P,U,Q]),me=[];return(ae||re)&&me.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:B}),ee&&(me.push({name:(0,$.tZ)(i.Fragment,null,(0,$.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),(0,c.cr)(h.T.VERSIONED_EXPORT)&&me.push({name:(0,$.tZ)(E.u,{id:"import-tooltip",title:(0,o.t)("Import dashboards"),placement:"bottomRight"},(0,$.tZ)(S.Z.Import,null)),buttonStyle:"link",onClick:()=>{W(!0)}})),(0,$.tZ)(i.Fragment,null,(0,$.tZ)(f.Z,{name:(0,o.t)("Dashboards"),buttons:me}),(0,$.tZ)(b.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return l.Z.delete({endpoint:`/api/v1/dashboard/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{P(),a(e.message)}),(0,m.v$)((e=>t((0,o.t)("There was an issue deleting the selected dashboards: ",e)))))}},(e=>{const t=[];return ae&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),re&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:ie}),(0,$.tZ)(i.Fragment,null,K&&(0,$.tZ)(C.Z,{dashboardId:K.id,show:!0,onHide:()=>V(null),onSubmit:le}),(0,$.tZ)(Z.Z,{bulkActions:t,bulkSelectEnabled:M,cardSortSelectOptions:ce,className:"dashboard-list-view",columns:se,count:w,data:F,disableBulkSelect:B,fetchData:z,filters:ue,initialSort:oe,loading:d,pageSize:25,showThumbnails:Q?Q.thumbnails:(0,c.cr)(h.T.THUMBNAILS),renderCard:he,defaultViewMode:(0,c.cr)(h.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})),(0,$.tZ)(T.Z,{resourceName:"dashboard",resourceLabel:(0,o.t)("dashboard"),passwordsNeededMessage:A,confirmOverwriteMessage:H,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{W(!1),P(),a((0,o.t)("Dashboard imported"))},show:q,onHide:()=>{W(!1)},passwordFields:Y,setPasswordFields:J}),(0,$.tZ)(k.Z,null),X&&(0,$.tZ)(y.Z,null))}))}}]);