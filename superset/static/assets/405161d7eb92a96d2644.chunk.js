"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8774],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(67294),o=a(37840),n=a(60650),s=a(35932),l=a(74069),d=a(82191),i=a(34858),u=a(11965);const c=o.iK.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:o,addDangerToast:m,addSuccessToast:p,onModelImport:b,show:g,onHide:y,passwordFields:f=[],setPasswordFields:Z=(()=>{})})=>{const[w,_]=(0,r.useState)(!0),[v,S]=(0,r.useState)({}),[x,C]=(0,r.useState)(!1),[T,E]=(0,r.useState)(!1),[I,k]=(0,r.useState)([]),[$,D]=(0,r.useState)(!1),A=()=>{k([]),Z([]),S({}),C(!1),E(!1),D(!1)},{state:{alreadyExists:N,passwordsNeeded:F},importResource:H}=(0,i.PW)(e,t,(e=>{A(),m(e)}));(0,r.useEffect)((()=>{Z(F),F.length>0&&D(!1)}),[F,Z]),(0,r.useEffect)((()=>{C(N.length>0),N.length>0&&D(!1)}),[N,C]);return w&&g&&_(!1),(0,u.tZ)(l.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===I.length||x&&!T||$,onHandledPrimaryAction:()=>{var e;(null==(e=I[0])?void 0:e.originFileObj)instanceof File&&(D(!0),H(I[0].originFileObj,v,T).then((e=>{e&&(p((0,n.t)("The import was successful")),A(),b())})))},onHide:()=>{_(!0),y(),A()},primaryButtonName:x?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,n.t)("Import %s",t))},(0,u.tZ)(h,null,(0,u.tZ)(d.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:I,onChange:e=>{k([{...e.file,status:"done"}])},onRemove:e=>(k(I.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,u.tZ)(s.Z,{loading:$},"Select file"))),0===f.length?null:(0,u.tZ)(r.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(c,null,a),f.map((e=>(0,u.tZ)(h,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:v[e],onChange:t=>S({...v,[e]:t.target.value})}))))),x?(0,u.tZ)(r.Fragment,null,(0,u.tZ)(h,null,(0,u.tZ)("div",{className:"confirm-overwrite"},o),(0,u.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},49997:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(67294),o=a(37840),n=a(60650),s=a(91877),l=a(46415),d=a(74069),i=a(36644),u=a(97381),c=a(60193),h=a(11965);function m({extensions:e,placeholder:t,id:a}){return(0,h.tZ)(c.ZP,{id:a,placeholder:t,extensions:e,autoComplete:"off",autoFocus:!0})}var p=a(3741),b=a(21173);const g=async e=>{var t;let a;try{a=await b.Z.get({endpoint:`/dashboardasync/api/read?_oc_DashboardModelViewAsync=changed_on&_od_DashboardModelViewAsync=desc&_flt_2_dashboard_title=${e}`})}catch(e){return[{title:(0,n.t)("An error occurred while fetching dashboards")}]}return null==(t=a)?void 0:t.json.result.map((e=>({title:e.dashboard_title,...e})))},y=(0,o.iK)(d.Z)`
  margin-top: 20%;

  .ant-modal-body {
    padding: 0;
    overflow: visible;
  }
`;function f(){const e=(0,r.useRef)(),t=(0,r.useRef)(null),[a,o]=(0,r.useState)(!1),d=e=>(0,u.logEvent)(p.tB,{show_omni:e}),c=()=>{e.current=!1,o(!1),d(!1)};return(0,i.J)((()=>{function a(t){if(!(0,s.cr)(l.T.OMNIBAR))return;const a=t.ctrlKey||t.metaKey,r=["KeyK"].includes(t.code);"Escape"===t.key&&e.current?c():a&&r&&(e.current=!e.current,o(e.current),d(!!e.current))}function r(e){t.current&&!t.current.contains(e.target)&&c()}return e.current=!1,document.addEventListener("mousedown",r),document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),document.removeEventListener("mousedown",r)}})),(0,h.tZ)(y,{title:"",show:a,hideFooter:!0,closable:!1,onHide:()=>{},destroyOnClose:!0},(0,h.tZ)("div",{ref:t},(0,h.tZ)(m,{id:"InputOmnibar",placeholder:(0,n.t)("Search all dashboards"),extensions:[g]})))}},23767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r,o=a(60650),n=a(37840),s=a(21173),l=a(67294),d=a(73727),i=a(15926),u=a.n(i),c=a(91877),h=a(46415),m=a(40768),p=a(34858),b=a(19259),g=a(32228),y=a(38703),f=a(62753),Z=a(9678),w=a(61337),_=a(14114),v=a(34581),S=a(38097),x=a(36674),C=a(13272),T=a(58593),E=a(27989),I=a(49997),k=a(99415);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var $=a(11965);const D=(0,o.t)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),A=(0,o.t)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),N=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,F=(0,_.Z)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:n,resourceCount:i,resourceCollection:_,bulkSelectEnabled:F},setResourceCollection:H,hasPerm:M,fetchData:z,toggleBulkSelect:L,refreshData:O}=(0,p.Yi)("dashboard",(0,o.t)("dashboard"),t),B=(0,l.useMemo)((()=>_.map((e=>e.id))),[_]),[R,U]=(0,p.NE)("dashboard",B,t),[P,j]=(0,l.useState)(null),[K,V]=(0,l.useState)(!1),[q,W]=(0,l.useState)([]),[Y,J]=(0,l.useState)(!1),{userId:X}=e.user,G=(0,w.f)(null==X?void 0:X.toString(),null),Q=M("can_write"),ee=M("can_write"),te=M("can_write"),ae=M("can_read"),re=[{id:"changed_on_delta_humanized",desc:!0}];function oe(e){j(e)}function ne(e){return s.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{H(_.map((t=>{var a;if(t.id===(null==e||null==(a=e.result)?void 0:a.id)){const{changed_by_name:a,changed_by_url:r,changed_by:o,dashboard_title:n="",slug:s="",json_metadata:l="",changed_on_delta_humanized:d,url:i=""}=e.result;return{...t,changed_by_name:a,changed_by_url:r,changed_by:o,dashboard_title:n,slug:s,json_metadata:l,changed_on_delta_humanized:d,url:i}}return t})))}),(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboards: %s",e)))))}const se=e=>{const t=e.map((({id:e})=>e));(0,g.Z)("dashboard",t,(()=>{J(!1)})),J(!0)},le=(0,l.useMemo)((()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>(0,$.tZ)(x.Z,{itemId:e,saveFaveStar:R,isStarred:U[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"}]:[],{Cell:({row:{original:{url:e,dashboard_title:t}}})=>(0,$.tZ)(d.rU,{to:e},t),Header:(0,o.t)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>(0,$.tZ)("a",{href:t},e),Header:(0,o.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{status:e}}})=>e===r.PUBLISHED?(0,o.t)("Published"):(0,o.t)("Draft"),Header:(0,o.t)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,$.tZ)("span",{className:"no-wrap"},e),Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>(0,$.tZ)(v.Z,{users:e}),Header:(0,o.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>(0,$.tZ)(N,{className:"actions"},te&&(0,$.tZ)(b.Z,{title:(0,o.t)("Please confirm"),description:(0,$.tZ)(l.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,$.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,m.Iu)(e,O,a,t)},(e=>(0,$.tZ)(T.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,$.tZ)(S.Z.Trash,null))))),ae&&(0,$.tZ)(T.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>se([e])},(0,$.tZ)(S.Z.Share,null))),ee&&(0,$.tZ)(T.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,$.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>oe(e)},(0,$.tZ)(S.Z.EditAlt,null)))),Header:(0,o.t)("Actions"),id:"actions",hidden:!ee&&!te&&!ae,disableSortBy:!0}]),[ee,te,ae,...e.user.userId?[U]:[]]),de=(0,l.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:Z.p.dashboardIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),ie=(0,l.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:Z.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,m.tm)("dashboard","owners",(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboard owner values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,m.tm)("dashboard","created_by",(0,m.v$)((e=>t((0,o.t)("An error occurred while fetching dashboard created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Status"),id:"published",input:"select",operator:Z.p.equals,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Published"),value:!0},{label:(0,o.t)("Draft"),value:!1}]},...e.user.userId?[de]:[],{Header:(0,o.t)("Search"),id:"dashboard_title",input:"search",operator:Z.p.titleOrSlug}]),[t,de,e.user]),ue=[{desc:!1,id:"dashboard_title",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}];function ce(e){return(0,$.tZ)(k.Z,{dashboard:e,hasPerm:M,bulkSelectEnabled:F,refreshData:O,showThumbnails:G?G.thumbnails:(0,c.cr)(h.T.THUMBNAILS),loading:n,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:oe,saveFavoriteStatus:R,favoriteStatus:U[e.id],handleBulkDashboardExport:se})}const he=[];return(te||ae)&&he.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:L}),Q&&(he.push({name:(0,$.tZ)(l.Fragment,null,(0,$.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),(0,c.cr)(h.T.VERSIONED_EXPORT)&&he.push({name:(0,$.tZ)(T.u,{id:"import-tooltip",title:(0,o.t)("Import dashboards"),placement:"bottomRight"},(0,$.tZ)(S.Z.Import,null)),buttonStyle:"link",onClick:()=>{V(!0)}})),(0,$.tZ)(l.Fragment,null,(0,$.tZ)(f.Z,{name:(0,o.t)("Dashboards"),buttons:he}),(0,$.tZ)(b.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return s.Z.delete({endpoint:`/api/v1/dashboard/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{O(),a(e.message)}),(0,m.v$)((e=>t((0,o.t)("There was an issue deleting the selected dashboards: ",e)))))}},(e=>{const t=[];return te&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),ae&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:se}),(0,$.tZ)(l.Fragment,null,P&&(0,$.tZ)(C.Z,{dashboardId:P.id,show:!0,onHide:()=>j(null),onSubmit:ne}),(0,$.tZ)(Z.Z,{bulkActions:t,bulkSelectEnabled:F,cardSortSelectOptions:ue,className:"dashboard-list-view",columns:le,count:i,data:_,disableBulkSelect:L,fetchData:z,filters:ie,initialSort:re,loading:n,pageSize:25,showThumbnails:G?G.thumbnails:(0,c.cr)(h.T.THUMBNAILS),renderCard:ce,defaultViewMode:(0,c.cr)(h.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})),(0,$.tZ)(E.Z,{resourceName:"dashboard",resourceLabel:(0,o.t)("dashboard"),passwordsNeededMessage:D,confirmOverwriteMessage:A,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{V(!1),O()},show:K,onHide:()=>{V(!1)},passwordFields:q,setPasswordFields:W}),(0,$.tZ)(I.Z,null),Y&&(0,$.tZ)(y.Z,null))}))}}]);