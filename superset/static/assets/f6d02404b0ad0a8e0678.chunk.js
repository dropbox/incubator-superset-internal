(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{4507:function(e,t,a){"use strict";a(41);var r=a(12),o=a.n(r),l=a(0),s=a.n(l),c=a(48),n=a(14),i=a(47),d=a(99),b=a(562),u=a(1);Object(c.d)(i.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const O=c.d.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,g=c.d.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:c,addSuccessToast:i,onModelImport:h,show:p,onHide:j,passwordFields:m=[],setPasswordFields:f=(()=>{})})=>{const[y,w]=Object(l.useState)(!0),[S,v]=Object(l.useState)(null),[x,_]=Object(l.useState)({}),[C,E]=Object(l.useState)(!1),[I,T]=Object(l.useState)(!1),D=Object(l.useRef)(null),N=()=>{v(null),f([]),_({}),E(!1),T(!1),D&&D.current&&(D.current.value="")},{state:{alreadyExists:$,passwordsNeeded:k},importResource:F}=Object(b.e)(e,t,e=>{N(),c(e)});Object(l.useEffect)(()=>{f(k)},[k,f]),Object(l.useEffect)(()=>{E($.length>0)},[$,E]);const H=e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";T(r.toUpperCase()===Object(n.e)("OVERWRITE"))};return y&&p&&w(!1),Object(u.g)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===S||C&&!I,onHandledPrimaryAction:()=>{null!==S&&F(S,x,I).then(e=>{e&&(i(Object(n.e)("The import was successful")),N(),h())})},onHide:()=>{w(!0),j(),N()},primaryButtonName:C?Object(n.e)("Overwrite"):Object(n.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:p,title:Object(u.g)("h4",null,Object(n.e)("Import %s",t))},Object(u.g)(g,null,Object(u.g)("div",{className:"control-label"},Object(u.g)("label",{htmlFor:"modelFile"},Object(n.e)("File"),Object(u.g)("span",{className:"required"},"*"))),Object(u.g)("input",{ref:D,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;v(t&&t[0]||null)}})),0===m.length?null:Object(u.g)(s.a.Fragment,null,Object(u.g)("h5",null,"Database passwords"),Object(u.g)(O,null,a),o()(m).call(m,e=>Object(u.g)(g,{key:`password-for-${e}`},Object(u.g)("div",{className:"control-label"},e,Object(u.g)("span",{className:"required"},"*")),Object(u.g)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>_({...x,[e]:t.target.value})})))),C?Object(u.g)(s.a.Fragment,null,Object(u.g)(g,null,Object(u.g)("div",{className:"confirm-overwrite"},r),Object(u.g)("div",{className:"control-label"},Object(n.e)('Type "%s" to confirm',Object(n.e)("OVERWRITE"))),Object(u.g)("input",{id:"overwrite",type:"text",onChange:H}))):null)}},4905:function(e,t,a){"use strict";a.r(t);a(41);var r,o=a(12),l=a.n(o),s=a(14),c=a(48),n=a(72),i=a(0),d=a.n(i),b=a(96),u=a.n(b),O=a(42),g=a(122),h=a(562),p=a(1473),j=a(1112),m=a(4501),f=a(822),y=a(128),w=a(1477),S=a(950),v=a(936),x=a(1446),_=a(49),C=a(4507),E=a(2065);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var I=a(1);const T=Object(s.e)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),D=Object(s.e)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),N=c.d.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(y.a)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:o,resourceCount:c,resourceCollection:b,bulkSelectEnabled:y},setResourceCollection:$,hasPerm:k,fetchData:F,toggleBulkSelect:H,refreshData:A}=Object(h.f)("dashboard",Object(s.e)("dashboard"),t),z=Object(i.useMemo)(()=>l()(b).call(b,e=>e.id),[b]),[M,U]=Object(h.d)("dashboard",z,t),[P,B]=Object(i.useState)(null),[R,L]=Object(i.useState)(!1),[V,q]=Object(i.useState)([]),W=()=>{L(!0)},J=k("can_write"),Y=k("can_write"),X=k("can_write"),G=k("can_read"),K=[{id:"changed_on_delta_humanized",desc:!0}];function Q(e){B(e)}function Z(e){return n.a.get({endpoint:`/api/v1/dashboard/${e.id}`}).then(({json:e={}})=>{$(l()(b).call(b,t=>t.id===e.id?e.result:t))},Object(g.c)(e=>t(Object(s.e)("An error occurred while fetching dashboards: %s",e))))}const ee=Object(i.useMemo)(()=>[{Cell:({row:{original:{id:e}}})=>Object(I.g)(v.a,{itemId:e,saveFaveStar:M,isStarred:U[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{url:e,dashboard_title:t}}})=>Object(I.g)("a",{href:e},t),Header:Object(s.e)("Title"),accessor:"dashboard_title"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>Object(I.g)("a",{href:t},e),Header:Object(s.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{status:e}}})=>e===r.PUBLISHED?Object(s.e)("Published"):Object(s.e)("Draft"),Header:Object(s.e)("Status"),accessor:"published",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(I.g)("span",{className:"no-wrap"},e),Header:Object(s.e)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:Object(s.e)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{owners:e=[]}}})=>Object(I.g)(w.a,{users:e}),Header:Object(s.e)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>Object(I.g)(N,{className:"actions"},X&&Object(I.g)(p.a,{title:Object(s.e)("Please confirm"),description:Object(I.g)(d.a.Fragment,null,Object(s.e)("Are you sure you want to delete")," ",Object(I.g)("b",null,e.dashboard_title),"?"),onConfirm:()=>Object(g.m)(e,A,a,t)},e=>Object(I.g)(_.a,{id:"delete-action-tooltip",title:Object(s.e)("Delete"),placement:"bottom"},Object(I.g)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},Object(I.g)(S.a.Trash,null)))),G&&Object(I.g)(_.a,{id:"export-action-tooltip",title:Object(s.e)("Export"),placement:"bottom"},Object(I.g)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Object(g.j)([e])},Object(I.g)(S.a.Share,null))),Y&&Object(I.g)(_.a,{id:"edit-action-tooltip",title:Object(s.e)("Edit"),placement:"bottom"},Object(I.g)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Q(e)},Object(I.g)(S.a.EditAlt,null)))),Header:Object(s.e)("Actions"),id:"actions",hidden:!Y&&!X&&!G,disableSortBy:!0}],[Y,X,G,U]),te=[{Header:Object(s.e)("Owner"),id:"owners",input:"select",operator:m.a.relationManyMany,unfilteredLabel:Object(s.e)("All"),fetchSelects:Object(g.e)("dashboard","owners",Object(g.c)(e=>t(Object(s.e)("An error occurred while fetching dashboard owner values: %s",e))),e.user.userId),paginate:!0},{Header:Object(s.e)("Created by"),id:"created_by",input:"select",operator:m.a.relationOneMany,unfilteredLabel:Object(s.e)("All"),fetchSelects:Object(g.e)("dashboard","created_by",Object(g.c)(e=>t(Object(s.e)("An error occurred while fetching dashboard created by values: %s",e))),e.user.userId),paginate:!0},{Header:Object(s.e)("Status"),id:"published",input:"select",operator:m.a.equals,unfilteredLabel:Object(s.e)("Any"),selects:[{label:Object(s.e)("Published"),value:!0},{label:Object(s.e)("Draft"),value:!1}]},{Header:Object(s.e)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:m.a.dashboardIsFav,unfilteredLabel:Object(s.e)("Any"),selects:[{label:Object(s.e)("Yes"),value:!0},{label:Object(s.e)("No"),value:!1}]},{Header:Object(s.e)("Search"),id:"dashboard_title",input:"search",operator:m.a.titleOrSlug}],ae=[{desc:!1,id:"dashboard_title",label:Object(s.e)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:Object(s.e)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:Object(s.e)("Least recently modified"),value:"least_recently_modified"}];function re(r){const{userId:l}=e.user,s=Object(f.a)(l.toString(),null);return Object(I.g)(E.a,{dashboard:r,hasPerm:k,bulkSelectEnabled:y,refreshData:A,showThumbnails:s?s.thumbnails:Object(O.c)(O.a.THUMBNAILS),loading:o,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:Q,saveFavoriteStatus:M,favoriteStatus:U[r.id]})}const oe=[];return(X||G)&&oe.push({name:Object(s.e)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:H}),J&&oe.push({name:Object(I.g)(d.a.Fragment,null,Object(I.g)("i",{className:"fa fa-plus"})," ",Object(s.e)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),Object(O.c)(O.a.VERSIONED_EXPORT)&&oe.push({name:Object(I.g)(_.a,{id:"import-tooltip",title:Object(s.e)("Import dashboards"),placement:"bottomRight"},Object(I.g)(S.a.Import,null)),buttonStyle:"link",onClick:W}),Object(I.g)(d.a.Fragment,null,Object(I.g)(j.a,{name:Object(s.e)("Dashboards"),buttons:oe}),Object(I.g)(p.a,{title:Object(s.e)("Please confirm"),description:Object(s.e)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return n.a.delete({endpoint:`/api/v1/dashboard/?q=${u.a.encode(l()(e).call(e,({id:e})=>e))}`}).then(({json:e={}})=>{A(),a(e.message)},Object(g.c)(e=>t(Object(s.e)("There was an issue deleting the selected dashboards: ",e))))}},e=>{const t=[];return X&&t.push({key:"delete",name:Object(s.e)("Delete"),type:"danger",onSelect:e}),G&&t.push({key:"export",name:Object(s.e)("Export"),type:"primary",onSelect:g.j}),Object(I.g)(d.a.Fragment,null,P&&Object(I.g)(x.a,{dashboardId:P.id,show:!0,onHide:()=>B(null),onSubmit:Z}),Object(I.g)(m.b,{bulkActions:t,bulkSelectEnabled:y,cardSortSelectOptions:ae,className:"dashboard-list-view",columns:ee,count:c,data:b,disableBulkSelect:H,fetchData:F,filters:te,initialSort:K,loading:o,pageSize:25,renderCard:re,defaultViewMode:Object(O.c)(O.a.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))}),Object(I.g)(C.a,{resourceName:"dashboard",resourceLabel:Object(s.e)("dashboard"),passwordsNeededMessage:T,confirmOverwriteMessage:D,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{L(!1),A()},show:R,onHide:()=>{L(!1)},passwordFields:V,setPasswordFields:q}))}))}}]);