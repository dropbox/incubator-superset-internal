(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{4533:function(e,t,a){"use strict";a(40);var r=a(11),l=a.n(r),c=a(0),n=a.n(c),o=a(51),i=a(16),s=a(46),d=a(100),b=a(513),u=a(1);Object(o.c)(s.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`;const p=o.c.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,m=o.c.div`
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
`;t.a=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:o,addSuccessToast:s,onModelImport:O,show:h,onHide:j,passwordFields:f=[],setPasswordFields:g=(()=>{})})=>{const[y,w]=Object(c.useState)(!0),[v,_]=Object(c.useState)(null),[x,S]=Object(c.useState)({}),[C,E]=Object(c.useState)(!1),[k,N]=Object(c.useState)(!1),$=Object(c.useRef)(null),z=()=>{_(null),g([]),S({}),E(!1),N(!1),$&&$.current&&($.current.value="")},{state:{alreadyExists:T,passwordsNeeded:A},importResource:F}=Object(b.d)(e,t,e=>{z(),o(e)});Object(c.useEffect)(()=>{g(A)},[A,g]),Object(c.useEffect)(()=>{E(T.length>0)},[T,E]);const H=e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";N(r.toUpperCase()===Object(i.e)("OVERWRITE"))};return y&&h&&w(!1),Object(u.f)(d.b,{name:"model",className:"import-model-modal",disablePrimaryButton:null===v||C&&!k,onHandledPrimaryAction:()=>{null!==v&&F(v,x,k).then(e=>{e&&(s(Object(i.e)("The import was successful")),z(),O())})},onHide:()=>{w(!0),j(),z()},primaryButtonName:C?Object(i.e)("Overwrite"):Object(i.e)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:h,title:Object(u.f)("h4",null,Object(i.e)("Import %s",t))},Object(u.f)(m,null,Object(u.f)("div",{className:"control-label"},Object(u.f)("label",{htmlFor:"modelFile"},Object(i.e)("File"),Object(u.f)("span",{className:"required"},"*"))),Object(u.f)("input",{ref:$,name:"modelFile",id:"modelFile",type:"file",accept:".yaml,.json,.yml,.zip",onChange:e=>{const{files:t}=e.target;_(t&&t[0]||null)}})),0===f.length?null:Object(u.f)(n.a.Fragment,null,Object(u.f)("h5",null,"Database passwords"),Object(u.f)(p,null,a),l()(f).call(f,e=>Object(u.f)(m,{key:`password-for-${e}`},Object(u.f)("div",{className:"control-label"},e,Object(u.f)("span",{className:"required"},"*")),Object(u.f)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>S({...x,[e]:t.target.value})})))),C?Object(u.f)(n.a.Fragment,null,Object(u.f)(m,null,Object(u.f)("div",{className:"confirm-overwrite"},r),Object(u.f)("div",{className:"control-label"},Object(i.e)('Type "%s" to confirm',Object(i.e)("OVERWRITE"))),Object(u.f)("input",{id:"overwrite",type:"text",onChange:H}))):null)}},4834:function(e,t,a){var r=a(987),l=a(1706);e.exports=function(e,t){return e&&e.length?l(e,r(t,2)):[]}},4886:function(e,t,a){"use strict";a.r(t);a(40);var r=a(240),l=a.n(r),c=a(225),n=a.n(c),o=a(11),i=a.n(o),s=a(4834),d=a.n(s),b=a(16),u=a(171),p=a(68),m=a(51),O=a(0),h=a.n(O),j=a(96),f=a.n(j),g=a(41),y=a(137),w=a(513),v=a(1243),_=a(890),x=a(839),S=a(4519),C=a(120),E=a(1215),k=a(4533),N=a(54),$=a(857),z=a(2053),T=a(1);const A=Object(b.e)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),F=Object(b.e)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),H=Object(u.a)(),I=m.c.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;t.default=Object(C.a)((function(e){var t,a;const{addDangerToast:r,addSuccessToast:c}=e,{state:{loading:o,resourceCount:s,resourceCollection:u,bulkSelectEnabled:m},setResourceCollection:j,hasPerm:C,fetchData:D,toggleBulkSelect:M,refreshData:U}=Object(w.e)("chart",Object(b.e)("chart"),r),R=Object(O.useMemo)(()=>i()(u).call(u,e=>e.id),[u]),[B,L]=Object(w.c)("chart",R,r),{sliceCurrentlyEditing:P,handleChartUpdated:V,openChartEditModal:q,closeChartEditModal:W}=Object(w.b)(j,u),[J,X]=Object(O.useState)(!1),[Y,G]=Object(O.useState)([]),K=()=>{X(!0)},Q=C("can_write"),Z=C("can_write"),ee=C("can_write"),te=C("can_read")&&Object(g.c)(g.a.VERSIONED_EXPORT),ae=[{id:"changed_on_delta_humanized",desc:!0}],re=Object(O.useMemo)(()=>[{Cell:({row:{original:{id:e}}})=>Object(T.f)(x.a,{itemId:e,saveFaveStar:B,isStarred:L[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs"},{Cell:({row:{original:{url:e,slice_name:t}}})=>Object(T.f)("a",{href:e},t),Header:Object(b.e)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=H.get(e))?void 0:t.name)||e},Header:Object(b.e)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>Object(T.f)("a",{href:t},e),Header:Object(b.e)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{changed_by_name:e,changed_by_url:t}}})=>Object(T.f)("a",{href:t},e),Header:Object(b.e)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>Object(T.f)("span",{className:"no-wrap"},e),Header:Object(b.e)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:Object(b.e)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>Z||ee||te?Object(T.f)(I,{className:"actions"},ee&&Object(T.f)(v.a,{title:Object(b.e)("Please confirm"),description:Object(T.f)(h.a.Fragment,null,Object(b.e)("Are you sure you want to delete")," ",Object(T.f)("b",null,e.slice_name),"?"),onConfirm:()=>Object(y.i)(e,c,r,U)},e=>Object(T.f)(N.a,{id:"delete-action-tooltip",title:Object(b.e)("Delete"),placement:"bottom"},Object(T.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},Object(T.f)($.a.Trash,null)))),te&&Object(T.f)(N.a,{id:"export-action-tooltip",title:Object(b.e)("Export"),placement:"bottom"},Object(T.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Object(y.g)([e])},Object(T.f)($.a.Share,null))),Z&&Object(T.f)(N.a,{id:"edit-action-tooltip",title:Object(b.e)("Edit"),placement:"bottom"},Object(T.f)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>q(e)},Object(T.f)($.a.EditAlt,null)))):null,Header:Object(b.e)("Actions"),id:"actions",disableSortBy:!0,hidden:!Z&&!ee}],[Z,ee,te,L]),le=[{Header:Object(b.e)("Owner"),id:"owners",input:"select",operator:S.a.relationManyMany,unfilteredLabel:Object(b.e)("All"),fetchSelects:Object(y.e)("chart","owners",Object(y.c)(e=>r(Object(b.e)("An error occurred while fetching chart owners values: %s",e))),e.user.userId),paginate:!0},{Header:Object(b.e)("Created by"),id:"created_by",input:"select",operator:S.a.relationOneMany,unfilteredLabel:Object(b.e)("All"),fetchSelects:Object(y.e)("chart","created_by",Object(y.c)(e=>r(Object(b.e)("An error occurred while fetching chart created by values: %s",e))),e.user.userId),paginate:!0},{Header:Object(b.e)("Viz type"),id:"viz_type",input:"select",operator:S.a.equals,unfilteredLabel:Object(b.e)("All"),selects:n()(t=i()(a=l()(H).call(H)).call(a,e=>{var t;return{label:(null==(t=H.get(e))?void 0:t.name)||e,value:e}})).call(t,(e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0)},{Header:Object(b.e)("Dataset"),id:"datasource_id",input:"select",operator:S.a.equals,unfilteredLabel:Object(b.e)("All"),fetchSelects:(ce=Object(y.c)(e=>r(Object(b.e)("An error occurred while fetching chart dataset values: %s",e))),async(e="",t,a)=>{const r=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{};try{var l;const e=f.a.encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",...t?{page:t}:{},...a?{page_size:a}:{},...r}),{json:c={}}=await p.a.get({endpoint:`/api/v1/dataset/?q=${e}`}),n=null==c?void 0:null==(l=c.result)?void 0:i()(l).call(l,({table_name:e,id:t})=>({label:e,value:t}));return d()(n,"value")}catch(e){ce(e)}return[]}),paginate:!1},{Header:Object(b.e)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:S.a.chartIsFav,unfilteredLabel:Object(b.e)("Any"),selects:[{label:Object(b.e)("Yes"),value:!0},{label:Object(b.e)("No"),value:!1}]},{Header:Object(b.e)("Search"),id:"slice_name",input:"search",operator:S.a.chartAllText}];var ce;const ne=[{desc:!1,id:"slice_name",label:Object(b.e)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:Object(b.e)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:Object(b.e)("Least recently modified"),value:"least_recently_modified"}];function oe(e){return Object(T.f)(z.a,{chart:e,hasPerm:C,openChartEditModal:q,bulkSelectEnabled:m,addDangerToast:r,addSuccessToast:c,refreshData:U,loading:o,favoriteStatus:L[e.id],saveFavoriteStatus:B})}const ie=[];return(ee||te)&&ie.push({name:Object(b.e)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:M}),Q&&ie.push({name:Object(T.f)(h.a.Fragment,null,Object(T.f)("i",{className:"fa fa-plus"})," ",Object(b.e)("Chart")),buttonStyle:"primary",onClick:()=>{window.location.assign("/chart/add")}}),Object(g.c)(g.a.VERSIONED_EXPORT)&&ie.push({name:Object(T.f)($.a.Import,null),buttonStyle:"link",onClick:K}),Object(T.f)(h.a.Fragment,null,Object(T.f)(_.a,{name:Object(b.e)("Charts"),buttons:ie}),P&&Object(T.f)(E.a,{onHide:W,onSave:V,show:!0,slice:P}),Object(T.f)(v.a,{title:Object(b.e)("Please confirm"),description:Object(b.e)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){p.a.delete({endpoint:`/api/v1/chart/?q=${f.a.encode(i()(e).call(e,({id:e})=>e))}`}).then(({json:e={}})=>{U(),c(e.message)},Object(y.c)(e=>r(Object(b.e)("There was an issue deleting the selected charts: %s",e))))}},e=>{const t=[];return ee&&t.push({key:"delete",name:Object(b.e)("Delete"),type:"danger",onSelect:e}),te&&t.push({key:"export",name:Object(b.e)("Export"),type:"primary",onSelect:y.g}),Object(T.f)(S.b,{bulkActions:t,bulkSelectEnabled:m,cardSortSelectOptions:ne,className:"chart-list-view",columns:re,count:s,data:u,disableBulkSelect:M,fetchData:D,filters:le,initialSort:ae,loading:o,pageSize:25,renderCard:oe,defaultViewMode:Object(g.c)(g.a.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})}),Object(T.f)(k.a,{resourceName:"chart",resourceLabel:Object(b.e)("chart"),passwordsNeededMessage:A,confirmOverwriteMessage:F,addDangerToast:r,addSuccessToast:c,onModelImport:()=>{X(!1),U()},show:J,onHide:()=>{X(!1)},passwordFields:Y,setPasswordFields:G}))}))}}]);