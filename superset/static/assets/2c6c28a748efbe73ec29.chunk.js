"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4787],{29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var n=a(37840),o=a(58593),l=a(38097),i=a(11965);const r=n.iK.span`
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
`;function c({actions:e}){return(0,i.tZ)(r,{className:"actions"},e.map(((e,t)=>{const a=l.Z[e.icon];return e.tooltip?(0,i.tZ)(o.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,i.tZ)(a,null))):(0,i.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,i.tZ)(a,null))})))}},28999:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(67294),o=a(15926),l=a.n(o),i=a(60650),r=a(21173),s=a(73727),c=a(5977),d=a(30381),u=a.n(d),m=a(34858),p=a(40768),h=a(14114),g=a(62753),y=a(29848),Z=a(9678),b=a(35932),f=a(17198),w=a(19259),x=a(37840),C=a(38097),v=a(74069),S=a(11965);const $=x.iK.div`
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
`,D=(0,h.Z)((({addDangerToast:e,onLayerAdd:t,onHide:a,show:o,layer:l=null})=>{const[r,s]=(0,n.useState)(!0),[c,d]=(0,n.useState)(),[u,h]=(0,n.useState)(!0),g=null!==l,{state:{loading:y,resource:Z},fetchResource:b,createResource:f,updateResource:w}=(0,m.LE)("annotation_layer",(0,i.t)("annotation_layer"),e),x=()=>{d({name:"",descr:""})},D=()=>{h(!0),x(),a()},_=e=>{const{target:t}=e,a={...c,name:c?c.name:"",descr:c?c.descr:""};a[t.name]=t.value,d(a)};return(0,n.useEffect)((()=>{if(g&&(!c||!c.id||l&&l.id!==c.id||u&&o)){if(o&&l&&null!==l.id&&!y){const e=l.id||0;b(e)}}else!g&&(!c||c.id||u&&o)&&x()}),[l,o]),(0,n.useEffect)((()=>{Z&&d(Z)}),[Z]),(0,n.useEffect)((()=>{var e;c&&null!=(e=c.name)&&e.length?s(!1):s(!0)}),[c?c.name:"",c?c.descr:""]),u&&o&&h(!1),(0,S.tZ)(v.Z,{disablePrimaryButton:r,onHandledPrimaryAction:()=>{if(g){if(c&&c.id){const e=c.id;delete c.id,delete c.created_by,w(e,c).then((e=>{e&&D()}))}}else c&&f(c).then((e=>{e&&(t&&t(e),D())}))},onHide:D,primaryButtonName:g?(0,i.t)("Save"):(0,i.t)("Add"),show:o,width:"55%",title:(0,S.tZ)("h4",null,g?(0,S.tZ)(C.Z.EditAlt,{css:p.xL}):(0,S.tZ)(C.Z.PlusLarge,{css:p.xL}),g?(0,i.t)("Edit annotation layer properties"):(0,i.t)("Add annotation layer"))},(0,S.tZ)($,null,(0,S.tZ)("h4",null,(0,i.t)("Basic information"))),(0,S.tZ)(k,null,(0,S.tZ)("div",{className:"control-label"},(0,i.t)("Annotation layer name"),(0,S.tZ)("span",{className:"required"},"*")),(0,S.tZ)("input",{name:"name",onChange:_,type:"text",value:null==c?void 0:c.name})),(0,S.tZ)(k,null,(0,S.tZ)("div",{className:"control-label"},(0,i.t)("description")),(0,S.tZ)("textarea",{name:"descr",value:null==c?void 0:c.descr,placeholder:(0,i.t)("Description (this can be seen in the list)"),onChange:_})))})),_="MMM DD, YYYY",A=(0,h.Z)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:o,resourceCount:d,resourceCollection:h,bulkSelectEnabled:x},hasPerm:C,fetchData:v,refreshData:$,toggleBulkSelect:k}=(0,m.Yi)("annotation_layer",(0,i.t)("Annotation layers"),e),[A,H]=(0,n.useState)(!1),[M,N]=(0,n.useState)(null),[T,U]=(0,n.useState)(null),E=C("can_write"),L=C("can_write"),B=C("can_write");function Y(e){N(e),H(!0)}const z=[{id:"name",desc:!0}],F=(0,n.useMemo)((()=>[{accessor:"name",Header:(0,i.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let a=!0;try{(0,c.k6)()}catch(e){a=!1}return a?(0,S.tZ)(s.rU,{to:`/annotationmodelview/${e}/annotation`},t):(0,S.tZ)("a",{href:`/annotationmodelview/${e}/annotation`},t)}},{accessor:"descr",Header:(0,i.t)("Description")},{Cell:({row:{original:{changed_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).format(_)},Header:(0,i.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).format(_)},Header:(0,i.t)("Created on"),accessor:"created_on",size:"xl"},{accessor:"created_by",disableSortBy:!0,Header:(0,i.t)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:e}})=>{const t=[L?{label:"edit-action",tooltip:(0,i.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>Y(e)}:null,B?{label:"delete-action",tooltip:(0,i.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>U(e)}:null].filter((e=>!!e));return(0,S.tZ)(y.Z,{actions:t})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!L&&!B,size:"xl"}]),[B,E]),P=[];E&&P.push({name:(0,S.tZ)(n.Fragment,null,(0,S.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer")),buttonStyle:"primary",onClick:()=>{Y(null)}}),B&&P.push({name:(0,i.t)("Bulk select"),onClick:k,buttonStyle:"secondary"});const K=(0,n.useMemo)((()=>[{Header:(0,i.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("annotation_layer","created_by",(0,p.v$)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0},{Header:(0,i.t)("Search"),id:"name",input:"search",operator:Z.p.contains}]),[]),q=(0,S.tZ)(b.Z,{buttonStyle:"primary",onClick:()=>{Y(null)}},(0,S.tZ)(n.Fragment,null,(0,S.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation layer"))),R={message:(0,i.t)("No annotation layers yet"),slot:q};return(0,S.tZ)(n.Fragment,null,(0,S.tZ)(g.Z,{name:(0,i.t)("Annotation layers"),buttons:P}),(0,S.tZ)(D,{addDangerToast:e,layer:M,onLayerAdd:e=>{window.location.href=`/annotationmodelview/${e}/annotation`},onHide:()=>{$(),H(!1)},show:A}),T&&(0,S.tZ)(f.Z,{description:(0,i.t)("This action will permanently delete the layer."),onConfirm:()=>{T&&(({id:a,name:n})=>{r.Z.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{$(),U(null),t((0,i.t)("Deleted: %s",n))}),(0,p.v$)((t=>e((0,i.t)("There was an issue deleting %s: %s",n,t)))))})(T)},onHide:()=>U(null),open:!0,title:(0,i.t)("Delete Layer?")}),(0,S.tZ)(w.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected layers?"),onConfirm:a=>{r.Z.delete({endpoint:`/api/v1/annotation_layer/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{$(),t(e.message)}),(0,p.v$)((t=>e((0,i.t)("There was an issue deleting the selected layers: %s",t)))))}},(e=>{const t=B?[{key:"delete",name:(0,i.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,S.tZ)(Z.Z,{className:"annotation-layers-list-view",columns:F,count:d,data:h,fetchData:v,filters:K,initialSort:z,loading:o,pageSize:25,bulkActions:t,bulkSelectEnabled:x,disableBulkSelect:k,emptyState:R})})))}))}}]);