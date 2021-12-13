"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8774],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(67294),o=a(51995),n=a(61988),s=a(35932),l=a(74069),i=a(82191),d=a(34858),u=a(11965);const c=o.iK.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:o,addDangerToast:m,addSuccessToast:p,onModelImport:b,show:g,onHide:f,passwordFields:y=[],setPasswordFields:Z=(()=>{})})=>{const[_,w]=(0,r.useState)(!0),[v,S]=(0,r.useState)({}),[x,C]=(0,r.useState)(!1),[T,E]=(0,r.useState)(!1),[I,k]=(0,r.useState)([]),[D,$]=(0,r.useState)(!1),A=()=>{k([]),Z([]),S({}),C(!1),E(!1),$(!1)},{state:{alreadyExists:N,passwordsNeeded:F},importResource:H}=(0,d.PW)(e,t,(e=>{A(),m(e)}));(0,r.useEffect)((()=>{Z(F),F.length>0&&$(!1)}),[F,Z]),(0,r.useEffect)((()=>{C(N.length>0),N.length>0&&$(!1)}),[N,C]);return _&&g&&w(!1),(0,u.tZ)(l.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===I.length||x&&!T||D,onHandledPrimaryAction:()=>{var e;(null==(e=I[0])?void 0:e.originFileObj)instanceof File&&($(!0),H(I[0].originFileObj,v,T).then((e=>{e&&(p((0,n.t)("The import was successful")),A(),b())})))},onHide:()=>{w(!0),f(),A()},primaryButtonName:x?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,n.t)("Import %s",t))},(0,u.tZ)(h,null,(0,u.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:I,onChange:e=>{k([{...e.file,status:"done"}])},onRemove:e=>(k(I.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,u.tZ)(s.Z,{loading:D},"Select file"))),0===y.length?null:(0,u.tZ)(r.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(c,null,a),y.map((e=>(0,u.tZ)(h,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:v[e],onChange:t=>S({...v,[e]:t.target.value})}))))),x?(0,u.tZ)(r.Fragment,null,(0,u.tZ)(h,null,(0,u.tZ)("div",{className:"confirm-overwrite"},o),(0,u.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},49997:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(67294),o=a(51995),n=a(61988),s=a(91877),l=a(93185),i=a(74069),d=a(36644),u=a(97381),c=a(60193),h=a(11965);function m({extensions:e,placeholder:t,id:a}){return(0,h.tZ)(c.ZP,{id:a,placeholder:t,extensions:e,autoComplete:"off",autoFocus:!0})}var p=a(3741),b=a(31069);const g=async e=>{var t;let a;try{a=await b.Z.get({endpoint:`/dashboardasync/api/read?_oc_DashboardModelViewAsync=changed_on&_od_DashboardModelViewAsync=desc&_flt_2_dashboard_title=${e}`})}catch(e){return[{title:(0,n.t)("An error occurred while fetching dashboards")}]}return null==(t=a)?void 0:t.json.result.map((e=>({title:e.dashboard_title,...e})))},f=(0,o.iK)(i.Z)`
  margin-top: 20%;

  .ant-modal-body {
    padding: 0;
    overflow: visible;
  }
`;function y(){const e=(0,r.useRef)(),t=(0,r.useRef)(null),[a,o]=(0,r.useState)(!1),i=e=>(0,u.logEvent)(p.tB,{show_omni:e}),c=()=>{e.current=!1,o(!1),i(!1)};return(0,d.J)((()=>{function a(t){if(!(0,s.cr)(l.T.OMNIBAR))return;const a=t.ctrlKey||t.metaKey,r=["KeyK"].includes(t.code);"Escape"===t.key&&e.current?c():a&&r&&(e.current=!e.current,o(e.current),i(!!e.current))}function r(e){t.current&&!t.current.contains(e.target)&&c()}return e.current=!1,document.addEventListener("mousedown",r),document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),document.removeEventListener("mousedown",r)}})),(0,h.tZ)(f,{title:"",show:a,hideFooter:!0,closable:!1,onHide:()=>{},destroyOnClose:!0},(0,h.tZ)("div",{ref:t},(0,h.tZ)(m,{id:"InputOmnibar",placeholder:(0,n.t)("Search all dashboards"),extensions:[g]})))}},23767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var r,o=a(61988),n=a(51995),s=a(31069),l=a(67294),i=a(73727),d=a(15926),u=a.n(d),c=a(91877),h=a(93185),m=a(40768),p=a(34858),b=a(19259),g=a(32228),f=a(38703),y=a(62753),Z=a(9678),_=a(61337),w=a(14114),v=a(34581),S=a(38097),x=a(36674),C=a(20818),T=a(58593),E=a(27989),I=a(49997),k=a(79789),D=a(99415);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var $=a(11965);const A=(0,o.t)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),N=(0,o.t)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),F=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,H=(0,w.Z)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:n,resourceCount:d,resourceCollection:w,bulkSelectEnabled:H},setResourceCollection:M,hasPerm:L,fetchData:z,toggleBulkSelect:B,refreshData:O}=(0,p.Yi)("dashboard",(0,o.t)("dashboard"),t),R=(0,l.useMemo)((()=>w.map((e=>e.id))),[w]),[U,P]=(0,p.NE)("dashboard",R,t),[j,K]=(0,l.useState)(null),[V,q]=(0,l.useState)(!1),[W,Y]=(0,l.useState)([]),[J,X]=(0,l.useState)(!1),{userId:G}=e.user,Q=(0,_.f)(null==G?void 0:G.toString(),null),ee=L("can_write"),te=L("can_write"),ae=L("can_write"),re=L("can_export"),oe=[{id:"changed_on_delta_humanized",desc:!0}];function ne(e){K(e)}function se(e){return s.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{M(w.map((t=>{var a;if(t.id===(null==e||null==(a=e.result)?void 0:a.id)){const{changed_by_name:a,changed_by_url:r,changed_by:o,dashboard_title:n="",slug:s="",json_metadata:l="",changed_on_delta_humanized:i,url:d="",certified_by:u="",certification_details:c=""}=e.result;return{...t,changed_by_name:a,changed_by_url:r,changed_by:o,dashboard_title:n,slug:s,json_metadata:l,changed_on_delta_humanized:i,url:d,certified_by:u,certification_details:c}}return t})))}),(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboards: %s",e)))))}const le=e=>{const t=e.map((({id:e})=>e));(0,g.Z)("dashboard",t,(()=>{X(!1)})),X(!0)},ie=(0,l.useMemo)((()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>(0,$.tZ)(x.Z,{itemId:e,saveFaveStar:U,isStarred:P[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"}]:[],{Cell:({row:{original:{url:e,dashboard_title:t,certified_by:a,certification_details:r}}})=>(0,$.tZ)(i.rU,{to:e},a&&(0,$.tZ)(l.Fragment,null,(0,$.tZ)(k.Z,{certifiedBy:a,details:r})," "),t),Header:(0,o.t)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>(0,$.tZ)("a",{href:t},e),Header:(0,o.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{status:e}}})=>e===r.PUBLISHED?(0,o.t)("Published"):(0,o.t)("Draft"),Header:(0,o.t)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,$.tZ)("span",{className:"no-wrap"},e),Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>(0,$.tZ)(v.Z,{users:e}),Header:(0,o.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>(0,$.tZ)(F,{className:"actions"},ae&&(0,$.tZ)(b.Z,{title:(0,o.t)("Please confirm"),description:(0,$.tZ)(l.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,$.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,m.Iu)(e,O,a,t)},(e=>(0,$.tZ)(T.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,$.tZ)(S.Z.Trash,null))))),re&&(0,$.tZ)(T.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>le([e])},(0,$.tZ)(S.Z.Share,null))),te&&(0,$.tZ)(T.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ne(e)},(0,$.tZ)(S.Z.EditAlt,null)))),Header:(0,o.t)("Actions"),id:"actions",hidden:!te&&!ae&&!re,disableSortBy:!0}]),[te,ae,re,...e.user.userId?[P]:[]]),de=(0,l.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:Z.p.dashboardIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),ue=(0,l.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:Z.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,m.tm)("dashboard","owners",(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboard owner values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,m.tm)("dashboard","created_by",(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboard created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Status"),id:"published",input:"select",operator:Z.p.equals,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Published"),value:!0},{label:(0,o.t)("Draft"),value:!1}]},...e.user.userId?[de]:[],{Header:(0,o.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:Z.p.dashboardIsCertified,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Search"),id:"dashboard_title",input:"search",operator:Z.p.titleOrSlug}]),[t,de,e.user]),ce=[{desc:!1,id:"dashboard_title",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}];function he(e){return(0,$.tZ)(D.Z,{dashboard:e,hasPerm:L,bulkSelectEnabled:H,refreshData:O,showThumbnails:Q?Q.thumbnails:(0,c.cr)(h.T.THUMBNAILS),loading:n,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:ne,saveFavoriteStatus:U,favoriteStatus:P[e.id],handleBulkDashboardExport:le})}const me=[];return(ae||re)&&me.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:B}),ee&&(me.push({name:(0,$.tZ)(l.Fragment,null,(0,$.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),(0,c.cr)(h.T.VERSIONED_EXPORT)&&me.push({name:(0,$.tZ)(T.u,{id:"import-tooltip",title:(0,o.t)("Import dashboards"),placement:"bottomRight"},(0,$.tZ)(S.Z.Import,null)),buttonStyle:"link",onClick:()=>{q(!0)}})),(0,$.tZ)(l.Fragment,null,(0,$.tZ)(y.Z,{name:(0,o.t)("Dashboards"),buttons:me}),(0,$.tZ)(b.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return s.Z.delete({endpoint:`/api/v1/dashboard/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{O(),a(e.message)}),(0,m.v$)((e=>t((0,o.t)("There was an issue deleting the selected dashboards: ",e)))))}},(e=>{const t=[];return ae&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),re&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:le}),(0,$.tZ)(l.Fragment,null,j&&(0,$.tZ)(C.Z,{dashboardId:j.id,show:!0,onHide:()=>K(null),onSubmit:se}),(0,$.tZ)(Z.Z,{bulkActions:t,bulkSelectEnabled:H,cardSortSelectOptions:ce,className:"dashboard-list-view",columns:ie,count:d,data:w,disableBulkSelect:B,fetchData:z,filters:ue,initialSort:oe,loading:n,pageSize:25,showThumbnails:Q?Q.thumbnails:(0,c.cr)(h.T.THUMBNAILS),renderCard:he,defaultViewMode:(0,c.cr)(h.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})),(0,$.tZ)(E.Z,{resourceName:"dashboard",resourceLabel:(0,o.t)("dashboard"),passwordsNeededMessage:A,confirmOverwriteMessage:N,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{q(!1),O()},show:V,onHide:()=>{q(!1)},passwordFields:W,setPasswordFields:Y}),(0,$.tZ)(I.Z,null),J&&(0,$.tZ)(f.Z,null))}))}}]);