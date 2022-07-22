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
`;function c({actions:e}){return(0,i.tZ)(r,{className:"actions"},e.map(((e,t)=>{const a=l.Z[e.icon];return e.tooltip?(0,i.tZ)(o.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,i.tZ)(a,null))):(0,i.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,i.tZ)(a,null))})))}},28999:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(67294),o=a(15926),l=a.n(o),i=a(61988),r=a(31069),s=a(73727),c=a(5977),d=a(30381),u=a.n(d),m=a(34858),p=a(40768),h=a(14114),g=a(20755),y=a(29848),Z=a(98289),b=a(35932),f=a(17198),w=a(19259),x=a(51995),C=a(70163),S=a(74069),v=a(11965);const $=x.iK.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,k=x.iK.div`
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
`,D=(0,h.ZP)((({addDangerToast:e,addSuccessToast:t,onLayerAdd:a,onHide:o,show:l,layer:r=null})=>{const[s,c]=(0,n.useState)(!0),[d,u]=(0,n.useState)(),[h,g]=(0,n.useState)(!0),y=null!==r,{state:{loading:Z,resource:b},fetchResource:f,createResource:w,updateResource:x}=(0,m.LE)("annotation_layer",(0,i.t)("annotation_layer"),e),D=()=>{u({name:"",descr:""})},_=()=>{g(!0),D(),o()},A=e=>{const{target:t}=e,a={...d,name:d?d.name:"",descr:d?d.descr:""};a[t.name]=t.value,u(a)};return(0,n.useEffect)((()=>{if(y&&(!d||!d.id||r&&r.id!==d.id||h&&l)){if(l&&r&&null!==r.id&&!Z){const e=r.id||0;f(e)}}else!y&&(!d||d.id||h&&l)&&D()}),[r,l]),(0,n.useEffect)((()=>{b&&u(b)}),[b]),(0,n.useEffect)((()=>{var e;d&&null!=(e=d.name)&&e.length?c(!1):c(!0)}),[d?d.name:"",d?d.descr:""]),h&&l&&g(!1),(0,v.tZ)(S.Z,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(y){if(d&&d.id){const e=d.id;delete d.id,delete d.created_by,x(e,d).then((e=>{e&&(_(),t((0,i.t)("Annotation template updated")))}))}}else d&&w(d).then((e=>{e&&(a&&a(e),_(),t((0,i.t)("Annotation template created")))}))},onHide:_,primaryButtonName:y?(0,i.t)("Save"):(0,i.t)("Add"),show:l,width:"55%",title:(0,v.tZ)("h4",null,y?(0,v.tZ)(C.Z.EditAlt,{css:p.xL}):(0,v.tZ)(C.Z.PlusLarge,{css:p.xL}),y?(0,i.t)("Edit annotation layer properties"):(0,i.t)("Add annotation layer"))},(0,v.tZ)($,null,(0,v.tZ)("h4",null,(0,i.t)("Basic information"))),(0,v.tZ)(k,null,(0,v.tZ)("div",{className:"control-label"},(0,i.t)("Annotation layer name"),(0,v.tZ)("span",{className:"required"},"*")),(0,v.tZ)("input",{name:"name",onChange:A,type:"text",value:null==d?void 0:d.name})),(0,v.tZ)(k,null,(0,v.tZ)("div",{className:"control-label"},(0,i.t)("description")),(0,v.tZ)("textarea",{name:"descr",value:null==d?void 0:d.descr,placeholder:(0,i.t)("Description (this can be seen in the list)"),onChange:A})))})),_="MMM DD, YYYY",A=(0,h.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:o,resourceCount:d,resourceCollection:h,bulkSelectEnabled:x},hasPerm:C,fetchData:S,refreshData:$,toggleBulkSelect:k}=(0,m.Yi)("annotation_layer",(0,i.t)("Annotation layers"),e),[A,H]=(0,n.useState)(!1),[T,M]=(0,n.useState)(null),[N,U]=(0,n.useState)(null),E=C("can_write"),L=C("can_write"),B=C("can_write");function P(e){M(e),H(!0)}const Y=[{id:"name",desc:!0}],z=(0,n.useMemo)((()=>[{accessor:"name",Header:(0,i.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let a=!0;try{(0,c.k6)()}catch(e){a=!1}return a?(0,v.tZ)(s.rU,{to:`/annotationmodelview/${e}/annotation`},t):(0,v.tZ)("a",{href:`/annotationmodelview/${e}/annotation`},t)}},{accessor:"descr",Header:(0,i.t)("Description")},{Cell:({row:{original:{changed_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).format(_)},Header:(0,i.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).format(_)},Header:(0,i.t)("Created on"),accessor:"created_on",size:"xl"},{accessor:"created_by",disableSortBy:!0,Header:(0,i.t)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:e}})=>{const t=[L?{label:"edit-action",tooltip:(0,i.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>P(e)}:null,B?{label:"delete-action",tooltip:(0,i.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>U(e)}:null].filter((e=>!!e));return(0,v.tZ)(y.Z,{actions:t})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!L&&!B,size:"xl"}]),[B,E]),F=[];E&&F.push({name:(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer")),buttonStyle:"primary",onClick:()=>{P(null)}}),B&&F.push({name:(0,i.t)("Bulk select"),onClick:k,buttonStyle:"secondary"});const K=(0,n.useMemo)((()=>[{Header:(0,i.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("annotation_layer","created_by",(0,p.v$)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0},{Header:(0,i.t)("Search"),id:"name",input:"search",operator:Z.p.contains}]),[]),q=(0,v.tZ)(b.Z,{buttonStyle:"primary",onClick:()=>{P(null)}},(0,v.tZ)(n.Fragment,null,(0,v.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer"))),R={message:(0,i.t)("No annotation layers yet"),slot:q};return(0,v.tZ)(n.Fragment,null,(0,v.tZ)(g.Z,{name:(0,i.t)("Annotation layers"),buttons:F}),(0,v.tZ)(D,{addDangerToast:e,layer:T,onLayerAdd:e=>{window.location.href=`/annotationmodelview/${e}/annotation`},onHide:()=>{$(),H(!1)},show:A}),N&&(0,v.tZ)(f.Z,{description:(0,i.t)("This action will permanently delete the layer."),onConfirm:()=>{N&&(({id:a,name:n})=>{r.Z.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{$(),U(null),t((0,i.t)("Deleted: %s",n))}),(0,p.v$)((t=>e((0,i.t)("There was an issue deleting %s: %s",n,t)))))})(N)},onHide:()=>U(null),open:!0,title:(0,i.t)("Delete Layer?")}),(0,v.tZ)(w.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected layers?"),onConfirm:a=>{r.Z.delete({endpoint:`/api/v1/annotation_layer/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{$(),t(e.message)}),(0,p.v$)((t=>e((0,i.t)("There was an issue deleting the selected layers: %s",t)))))}},(e=>{const t=B?[{key:"delete",name:(0,i.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,v.tZ)(Z.Z,{className:"annotation-layers-list-view",columns:z,count:d,data:h,fetchData:S,filters:K,initialSort:Y,loading:o,pageSize:25,bulkActions:t,bulkSelectEnabled:x,disableBulkSelect:k,emptyState:R})})))}))}}]);