"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4787],{29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var n=a(51995),o=a(58593),l=a(70163),i=a(11965);const r=n.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,s=n.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function c({actions:e}){return(0,i.tZ)(r,{className:"actions"},e.map(((e,t)=>{const a=l.Z[e.icon];return e.tooltip?(0,i.tZ)(o.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,i.tZ)(a,null))):(0,i.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,i.tZ)(a,null))})))}},28999:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(67294),o=a(15926),l=a.n(o),i=a(61988),r=a(31069),s=a(73727),c=a(5977),d=a(30381),u=a.n(d),m=a(34858),p=a(40768),h=a(14114),g=a(20755),y=a(29848),b=a(18782),Z=a(17198),f=a(19259),w=a(51995),x=a(70163),v=a(74069),C=a(11965);const S=w.iK.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,$=w.iK.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,k=(0,h.ZP)((({addDangerToast:e,addSuccessToast:t,onLayerAdd:a,onHide:o,show:l,layer:r=null})=>{const[s,c]=(0,n.useState)(!0),[d,u]=(0,n.useState)(),[h,g]=(0,n.useState)(!0),y=null!==r,{state:{loading:b,resource:Z},fetchResource:f,createResource:w,updateResource:k}=(0,m.LE)("annotation_layer",(0,i.t)("annotation_layer"),e),D=()=>{u({name:"",descr:""})},_=()=>{g(!0),D(),o()},A=e=>{const{target:t}=e,a={...d,name:d?d.name:"",descr:d?d.descr:""};a[t.name]=t.value,u(a)};return(0,n.useEffect)((()=>{if(y&&(!d||!d.id||r&&r.id!==d.id||h&&l)){if(l&&r&&null!==r.id&&!b){const e=r.id||0;f(e)}}else!y&&(!d||d.id||h&&l)&&D()}),[r,l]),(0,n.useEffect)((()=>{Z&&u(Z)}),[Z]),(0,n.useEffect)((()=>{var e;d&&null!=(e=d.name)&&e.length?c(!1):c(!0)}),[d?d.name:"",d?d.descr:""]),h&&l&&g(!1),(0,C.tZ)(v.Z,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(y){if(d&&d.id){const e=d.id;delete d.id,delete d.created_by,k(e,d).then((e=>{e&&(_(),t((0,i.t)("Annotation template updated")))}))}}else d&&w(d).then((e=>{e&&(a&&a(e),_(),t((0,i.t)("Annotation template created")))}))},onHide:_,primaryButtonName:y?(0,i.t)("Save"):(0,i.t)("Add"),show:l,width:"55%",title:(0,C.tZ)("h4",null,y?(0,C.tZ)(x.Z.EditAlt,{css:p.xL}):(0,C.tZ)(x.Z.PlusLarge,{css:p.xL}),y?(0,i.t)("Edit annotation layer properties"):(0,i.t)("Add annotation layer"))},(0,C.tZ)(S,null,(0,C.tZ)("h4",null,(0,i.t)("Basic information"))),(0,C.tZ)($,null,(0,C.tZ)("div",{className:"control-label"},(0,i.t)("Annotation layer name"),(0,C.tZ)("span",{className:"required"},"*")),(0,C.tZ)("input",{name:"name",onChange:A,type:"text",value:null==d?void 0:d.name})),(0,C.tZ)($,null,(0,C.tZ)("div",{className:"control-label"},(0,i.t)("description")),(0,C.tZ)("textarea",{name:"descr",value:null==d?void 0:d.descr,placeholder:(0,i.t)("Description (this can be seen in the list)"),onChange:A})))})),D="MMM DD, YYYY",_=(0,h.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:o,resourceCount:d,resourceCollection:h,bulkSelectEnabled:w},hasPerm:x,fetchData:v,refreshData:S,toggleBulkSelect:$}=(0,m.Yi)("annotation_layer",(0,i.t)("Annotation layers"),e),[_,A]=(0,n.useState)(!1),[H,T]=(0,n.useState)(null),[M,N]=(0,n.useState)(null),U=x("can_write"),E=x("can_write"),L=x("can_write");function B(e){T(e),A(!0)}const P=[{id:"name",desc:!0}],Y=(0,n.useMemo)((()=>[{accessor:"name",Header:(0,i.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let a=!0;try{(0,c.k6)()}catch(e){a=!1}return a?(0,C.tZ)(s.rU,{to:`/annotationmodelview/${e}/annotation`},t):(0,C.tZ)("a",{href:`/annotationmodelview/${e}/annotation`},t)}},{accessor:"descr",Header:(0,i.t)("Description")},{Cell:({row:{original:{changed_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).format(D)},Header:(0,i.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).format(D)},Header:(0,i.t)("Created on"),accessor:"created_on",size:"xl"},{accessor:"created_by",disableSortBy:!0,Header:(0,i.t)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:e}})=>{const t=[E?{label:"edit-action",tooltip:(0,i.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>B(e)}:null,L?{label:"delete-action",tooltip:(0,i.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>N(e)}:null].filter((e=>!!e));return(0,C.tZ)(y.Z,{actions:t})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!E&&!L,size:"xl"}]),[L,U]),z=[];U&&z.push({name:(0,C.tZ)(n.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer")),buttonStyle:"primary",onClick:()=>{B(null)}}),L&&z.push({name:(0,i.t)("Bulk select"),onClick:$,buttonStyle:"secondary"});const F=(0,n.useMemo)((()=>[{Header:(0,i.t)("Created by"),id:"created_by",input:"select",operator:b.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("annotation_layer","created_by",(0,p.v$)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0},{Header:(0,i.t)("Search"),id:"name",input:"search",operator:b.p.contains}]),[]),K={title:(0,i.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>B(null),buttonText:(0,C.tZ)(n.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer"))};return(0,C.tZ)(n.Fragment,null,(0,C.tZ)(g.Z,{name:(0,i.t)("Annotation layers"),buttons:z}),(0,C.tZ)(k,{addDangerToast:e,layer:H,onLayerAdd:e=>{window.location.href=`/annotationmodelview/${e}/annotation`},onHide:()=>{S(),A(!1)},show:_}),M&&(0,C.tZ)(Z.Z,{description:(0,i.t)("This action will permanently delete the layer."),onConfirm:()=>{M&&(({id:a,name:n})=>{r.Z.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{S(),N(null),t((0,i.t)("Deleted: %s",n))}),(0,p.v$)((t=>e((0,i.t)("There was an issue deleting %s: %s",n,t)))))})(M)},onHide:()=>N(null),open:!0,title:(0,i.t)("Delete Layer?")}),(0,C.tZ)(f.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected layers?"),onConfirm:a=>{r.Z.delete({endpoint:`/api/v1/annotation_layer/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{S(),t(e.message)}),(0,p.v$)((t=>e((0,i.t)("There was an issue deleting the selected layers: %s",t)))))}},(e=>{const t=L?[{key:"delete",name:(0,i.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,C.tZ)(b.Z,{className:"annotation-layers-list-view",columns:Y,count:d,data:h,fetchData:v,filters:F,initialSort:P,loading:o,pageSize:25,bulkActions:t,bulkSelectEnabled:w,disableBulkSelect:$,emptyState:K})})))}))}}]);
//# sourceMappingURL=44b90fa361a868a68471.chunk.js.map