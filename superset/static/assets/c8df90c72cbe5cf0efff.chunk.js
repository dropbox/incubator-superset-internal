(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{4533:function(e,t,a){"use strict";a(40);var r=a(11),o=a.n(r),l=a(0),s=a.n(l),c=a(51),n=a(16),i=a(46),d=a(100),b=a(513),u=a(1);Object(c.c)(i.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const O=c.c.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,h=c.c.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:c,addSuccessToast:i,onModelImport:p,show:j,onHide:m,passwordFields:f=[],setPasswordFields:g=(()=>{})})=>{const[y,w]=Object(l.useState)(!0),[S,v]=Object(l.useState)(null),[x,_]=Object(l.useState)({}),[C,$]=Object(l.useState)(!1),[k,E]=Object(l.useState)(!1),N=Object(l.useRef)(null),T=()=>{v(null),g([]),_({}),$(!1),E(!1),N&&N.current&&(N.current.value="")},{state:{alreadyExists:F,passwordsNeeded:D},importResource:I}=Object(b.d)(e,t,e=>{T(),c(e)});Object(l.useEffect)(()=>{g(D)},[D,g]),Object(l.useEffect)(()=>{$(F.length>0)},[F,$]);const H=e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===Object(n.e)("OVERWRITE"))};return y&&j&&w(!1),Object(u.f)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===S||C&&!k,onHandledPrimaryAction:()=>{null!==S&&I(S,x,k).then(e=>{e&&(i(Object(n.e)("The import was successful")),T(),p())})},onHide:()=>{w(!0),m(),T()},primaryButtonName:C?Object(n.e)("Overwrite"):Object(n.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:j,title:Object(u.f)("h4",null,Object(n.e)("Import %s",t))},Object(u.f)(h,null,Object(u.f)("div",{className:"control-label"},Object(u.f)("label",{htmlFor:"modelFile"},Object(n.e)("File"),Object(u.f)("span",{className:"required"},"*"))),Object(u.f)("input",{ref:N,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;v(t&&t[0]||null)}})),0===f.length?null:Object(u.f)(s.a.Fragment,null,Object(u.f)("h5",null,"Database passwords"),Object(u.f)(O,null,a),o()(f).call(f,e=>Object(u.f)(h,{key:`password-for-${e}`},Object(u.f)("div",{className:"control-label"},e,Object(u.f)("span",{className:"required"},"*")),Object(u.f)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>_({...x,[e]:t.target.value})})))),C?Object(u.f)(s.a.Fragment,null,Object(u.f)(h,null,Object(u.f)("div",{className:"confirm-overwrite"},r),Object(u.f)("div",{className:"control-label"},Object(n.e)('Type "%s" to confirm',Object(n.e)("OVERWRITE"))),Object(u.f)("input",{id:"overwrite",type:"text",onChange:H}))):null)}},4887:function(e,t,a){"use strict";a.r(t);a(40);var r=a(11),o=a.n(r),l=a(16),s=a(51),c=a(68),n=a(0),i=a.n(n),d=a(96),b=a.n(d),u=a(41),O=a(137),h=a(513),p=a(1243),j=a(890),m=a(4519),f=a(120),g=a(1247),y=a(857),w=a(839),S=a(1216),v=a(54),x=a(4533),_=a(2055),C=a(1);const $=Object(l.e)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),k=Object(l.e)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),E=s.c.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(f.a)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:r,resourceCount:s,resourceCollection:d,bulkSelectEnabled:f},setResourceCollection:N,hasPerm:T,fetchData:F,toggleBulkSelect:D,refreshData:I}=Object(h.e)("dashboard",Object(l.e)("dashboard"),t),H=Object(n.useMemo)(()=>o()(d).call(d,e=>e.id),[d]),[A,z]=Object(h.c)("dashboard",H,t),[M,U]=Object(n.useState)(null),[P,R]=Object(n.useState)(!1),[B,L]=Object(n.useState)([]),V=()=>{R(!0)},q=T("can_write"),W=T("can_write"),J=T("can_write"),Y=T("can_read"),X=[{id:"changed_on_delta_humanized",desc:!0}];function G(e){U(e)}function K(e){return c.a.get({endpoint:`/api/v1/dashboard/${e.id}`}).then(({json:e={}})=>{N(o()(d).call(d,t=>t.id===e.id?e.result:t))},Object(O.c)(e=>t(Object(l.e)("An error occurred while fetching dashboards: %s",e))))}const Q=Object(n.useMemo)(()=>[{Cell:({row:{original:{id:e}}})=>Object(C.f)(w.a,{itemId:e,saveFaveStar:A,isStarred:z[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{url:e,dashboard_title:t}}})=>Object(C.f)("a",{href:e},t),Header:Object(l.e)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>Object(C.f)("a",{href:t},e),Header:Object(l.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{published:e}}})=>e?Object(l.e)("Published"):Object(l.e)("Draft"),Header:Object(l.e)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(C.f)("span",{className:"no-wrap"},e),Header:Object(l.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:Object(l.e)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>Object(C.f)(g.a,{users:e}),Header:Object(l.e)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>Object(C.f)(E,{className:"actions"},J&&Object(C.f)(p.a,{title:Object(l.e)("Please confirm"),description:Object(C.f)(i.a.Fragment,null,Object(l.e)("Are you sure you want to delete")," ",Object(C.f)("b",null,e.dashboard_title),"?"),onConfirm:()=>Object(O.j)(e,I,a,t)},e=>Object(C.f)(v.a,{id:"delete-action-tooltip",title:Object(l.e)("Delete"),placement:"bottom"},Object(C.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},Object(C.f)(y.a.Trash,null)))),Y&&Object(C.f)(v.a,{id:"export-action-tooltip",title:Object(l.e)("Export"),placement:"bottom"},Object(C.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Object(O.h)([e])},Object(C.f)(y.a.Share,null))),W&&Object(C.f)(v.a,{id:"edit-action-tooltip",title:Object(l.e)("Edit"),placement:"bottom"},Object(C.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>G(e)},Object(C.f)(y.a.EditAlt,null)))),Header:Object(l.e)("Actions"),id:"actions",hidden:!W&&!J&&!Y,disableSortBy:!0}],[W,J,Y,z]),Z=[{Header:Object(l.e)("Owner"),id:"owners",input:"select",operator:m.a.relationManyMany,unfilteredLabel:Object(l.e)("All"),fetchSelects:Object(O.e)("dashboard","owners",Object(O.c)(e=>t(Object(l.e)("An error occurred while fetching dashboard owner values: %s",e))),e.user.userId),paginate:!0},{Header:Object(l.e)("Created by"),id:"created_by",input:"select",operator:m.a.relationOneMany,unfilteredLabel:Object(l.e)("All"),fetchSelects:Object(O.e)("dashboard","created_by",Object(O.c)(e=>t(Object(l.e)("An error occurred while fetching dashboard created by values: %s",e))),e.user.userId),paginate:!0},{Header:Object(l.e)("Status"),id:"published",input:"select",operator:m.a.equals,unfilteredLabel:Object(l.e)("Any"),selects:[{label:Object(l.e)("Published"),value:!0},{label:Object(l.e)("Unpublished"),value:!1}]},{Header:Object(l.e)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:m.a.dashboardIsFav,unfilteredLabel:Object(l.e)("Any"),selects:[{label:Object(l.e)("Yes"),value:!0},{label:Object(l.e)("No"),value:!1}]},{Header:Object(l.e)("Search"),id:"dashboard_title",input:"search",operator:m.a.titleOrSlug}],ee=[{desc:!1,id:"dashboard_title",label:Object(l.e)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:Object(l.e)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:Object(l.e)("Least recently modified"),value:"least_recently_modified"}];function te(e){return Object(C.f)(_.a,{dashboard:e,hasPerm:T,bulkSelectEnabled:f,refreshData:I,loading:r,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:G,saveFavoriteStatus:A,favoriteStatus:z[e.id]})}const ae=[];return(J||Y)&&ae.push({name:Object(l.e)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:D}),q&&ae.push({name:Object(C.f)(i.a.Fragment,null,Object(C.f)("i",{className:"fa fa-plus"})," ",Object(l.e)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),Object(u.c)(u.a.VERSIONED_EXPORT)&&ae.push({name:Object(C.f)(y.a.Import,null),buttonStyle:"link",onClick:V}),Object(C.f)(i.a.Fragment,null,Object(C.f)(j.a,{name:Object(l.e)("Dashboards"),buttons:ae}),Object(C.f)(p.a,{title:Object(l.e)("Please confirm"),description:Object(l.e)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return c.a.delete({endpoint:`/api/v1/dashboard/?q=${b.a.encode(o()(e).call(e,({id:e})=>e))}`}).then(({json:e={}})=>{I(),a(e.message)},Object(O.c)(e=>t(Object(l.e)("There was an issue deleting the selected dashboards: ",e))))}},e=>{const t=[];return J&&t.push({key:"delete",name:Object(l.e)("Delete"),type:"danger",onSelect:e}),Y&&t.push({key:"export",name:Object(l.e)("Export"),type:"primary",onSelect:O.h}),Object(C.f)(i.a.Fragment,null,M&&Object(C.f)(S.a,{dashboardId:M.id,show:!0,onHide:()=>U(null),onSubmit:K}),Object(C.f)(m.b,{bulkActions:t,bulkSelectEnabled:f,cardSortSelectOptions:ee,className:"dashboard-list-view",columns:Q,count:s,data:d,disableBulkSelect:D,fetchData:F,filters:Z,initialSort:X,loading:r,pageSize:25,renderCard:te,defaultViewMode:Object(u.c)(u.a.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))}),Object(C.f)(x.a,{resourceName:"dashboard",resourceLabel:Object(l.e)("dashboard"),passwordsNeededMessage:$,confirmOverwriteMessage:k,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{R(!1),I()},show:P,onHide:()=>{R(!1)},passwordFields:B,setPasswordFields:L}))}))}}]);