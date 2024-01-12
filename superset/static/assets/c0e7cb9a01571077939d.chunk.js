"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[906],{54070:(e,t,n)=>{n.d(t,{w:()=>i}),n(67294);var a=n(58593),l=n(83379),o=n(61988),r=n(11965);const i=e=>{let{user:t,date:n}=e;const i=(0,r.tZ)("span",{className:"no-wrap"},n);if(t){const e=(0,l.Z)(t),n=(0,o.t)("Modified by: %s",e);return(0,r.tZ)(a.u,{title:n,placement:"bottom"},i)}return i}},29848:(e,t,n)=>{n.d(t,{Z:()=>c}),n(67294);var a=n(51995),l=n(58593),o=n(70707),r=n(11965);const i=a.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
      }
    }
  }
`,s=a.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function c(e){let{actions:t}=e;return(0,r.tZ)(i,{className:"actions"},t.map(((e,t)=>{const n=o.Z[e.icon];return e.tooltip?(0,r.tZ)(l.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,r.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,r.tZ)(n,null))):(0,r.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,r.tZ)(n,null))})))}},78768:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(67294),l=n(15926),o=n.n(l),r=n(61988),i=n(31069),s=n(16550),c=n(73727),d=n(34858),u=n(40768),m=n(14114),p=n(86074),h=n(29848),g=n(93139),y=n(17198),Z=n(19259),b=n(51995),f=n(70707),w=n(74069),x=n(11965);const v=b.iK.div`
  margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px auto
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px auto;
`,k=b.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;

  .control-label {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }

  textarea,
  input[type='text'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
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
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,$=(0,m.ZP)((e=>{let{addDangerToast:t,addSuccessToast:n,onLayerAdd:l,onHide:o,show:i,layer:s=null}=e;const[c,m]=(0,a.useState)(!0),[p,h]=(0,a.useState)(),[g,y]=(0,a.useState)(!0),Z=null!==s,{state:{loading:b,resource:$},fetchResource:S,createResource:_,updateResource:C}=(0,d.LE)("annotation_layer",(0,r.t)("annotation_layer"),t),A=()=>{h({name:"",descr:""})},D=()=>{y(!0),A(),o()},N=e=>{const{target:t}=e,n={...p,name:p?p.name:"",descr:p?p.descr:""};n[t.name]=t.value,h(n)};return(0,a.useEffect)((()=>{if(Z&&(null==p||!p.id||s&&s.id!==p.id||g&&i)){if(i&&s&&null!==s.id&&!b){const e=s.id||0;S(e)}}else!Z&&(!p||p.id||g&&i)&&A()}),[s,i]),(0,a.useEffect)((()=>{$&&h($)}),[$]),(0,a.useEffect)((()=>{var e;null!=p&&null!=(e=p.name)&&e.length?m(!1):m(!0)}),[p?p.name:"",p?p.descr:""]),g&&i&&y(!1),(0,x.tZ)(w.default,{disablePrimaryButton:c,onHandledPrimaryAction:()=>{if(Z){if(null!=p&&p.id){const e=p.id;delete p.id,delete p.created_by,C(e,p).then((e=>{e&&(D(),n((0,r.t)("Annotation template updated")))}))}}else p&&_(p).then((e=>{e&&(l&&l(e),D(),n((0,r.t)("Annotation template created")))}))},onHide:D,primaryButtonName:Z?(0,r.t)("Save"):(0,r.t)("Add"),show:i,width:"55%",title:(0,x.tZ)("h4",null,Z?(0,x.tZ)(f.Z.EditAlt,{css:u.xL}):(0,x.tZ)(f.Z.PlusLarge,{css:u.xL}),Z?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"))},(0,x.tZ)(v,null,(0,x.tZ)("h4",null,(0,r.t)("Basic information"))),(0,x.tZ)(k,null,(0,x.tZ)("div",{className:"control-label"},(0,r.t)("Annotation layer name"),(0,x.tZ)("span",{className:"required"},"*")),(0,x.tZ)("input",{name:"name",onChange:N,type:"text",value:null==p?void 0:p.name})),(0,x.tZ)(k,null,(0,x.tZ)("div",{className:"control-label"},(0,r.t)("description")),(0,x.tZ)("textarea",{name:"descr",value:null==p?void 0:p.descr,placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:N})))}));var S=n(54070),_=n(12);const C=(0,m.ZP)((function(e){let{addDangerToast:t,addSuccessToast:n,user:l}=e;const{state:{loading:m,resourceCount:b,resourceCollection:f,bulkSelectEnabled:w},hasPerm:v,fetchData:k,refreshData:C,toggleBulkSelect:A}=(0,d.Yi)("annotation_layer",(0,r.t)("Annotation layers"),t),[D,N]=(0,a.useState)(!1),[T,H]=(0,a.useState)(null),[E,L]=(0,a.useState)(null),U=v("can_write"),B=v("can_write"),P=v("can_write");function z(e){H(e),N(!0)}const K=[{id:"name",desc:!0}],M=(0,a.useMemo)((()=>[{accessor:"name",Header:(0,r.t)("Name"),Cell:e=>{let{row:{original:{id:t,name:n}}}=e,a=!0;try{(0,s.k6)()}catch(e){a=!1}return a?(0,x.tZ)(c.rU,{to:`/annotationlayer/${t}/annotation`},n):(0,x.tZ)("a",{href:`/annotationlayer/${t}/annotation`},n)}},{accessor:"descr",Header:(0,r.t)("Description")},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t,changed_by:n}}}=e;return(0,x.tZ)(S.w,{date:t,user:n})},Header:(0,r.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:e=>{let{row:{original:t}}=e;const n=[B?{label:"edit-action",tooltip:(0,r.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>z(t)}:null,P?{label:"delete-action",tooltip:(0,r.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>L(t)}:null].filter((e=>!!e));return(0,x.tZ)(h.Z,{actions:n})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!B&&!P,size:"xl"},{accessor:_.J.changed_by,hidden:!0}]),[P,U]),q=[];U&&q.push({name:(0,x.tZ)(a.Fragment,null,(0,x.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation layer")),buttonStyle:"primary",onClick:()=>{z(null)}}),P&&q.push({name:(0,r.t)("Bulk select"),onClick:A,buttonStyle:"secondary"});const F=(0,a.useMemo)((()=>[{Header:(0,r.t)("Name"),key:"search",id:"name",input:"search",operator:g.p.contains},{Header:(0,r.t)("Changed by"),key:"changed_by",id:"changed_by",input:"select",operator:g.p.relationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,u.tm)("annotation_layer","changed_by",(0,u.v$)((e=>(0,r.t)("An error occurred while fetching dataset datasource values: %s",e))),l),paginate:!0}]),[]),R={title:(0,r.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>z(null),buttonText:(0,x.tZ)(a.Fragment,null,(0,x.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation layer"))};return(0,x.tZ)(a.Fragment,null,(0,x.tZ)(p.Z,{name:(0,r.t)("Annotation layers"),buttons:q}),(0,x.tZ)($,{addDangerToast:t,layer:T,onLayerAdd:e=>{window.location.href=`/annotationlayer/${e}/annotation`},onHide:()=>{C(),N(!1)},show:D}),E&&(0,x.tZ)(y.Z,{description:(0,r.t)("This action will permanently delete the layer."),onConfirm:()=>{E&&(e=>{let{id:a,name:l}=e;i.Z.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{C(),L(null),n((0,r.t)("Deleted: %s",l))}),(0,u.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",l,e)))))})(E)},onHide:()=>L(null),open:!0,title:(0,r.t)("Delete Layer?")}),(0,x.tZ)(Z.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected layers?"),onConfirm:e=>{i.Z.delete({endpoint:`/api/v1/annotation_layer/?q=${o().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;C(),n(t.message)}),(0,u.v$)((e=>t((0,r.t)("There was an issue deleting the selected layers: %s",e)))))}},(e=>{const a=P?[{key:"delete",name:(0,r.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,x.tZ)(g.Z,{className:"annotation-layers-list-view",columns:M,count:b,data:f,fetchData:k,filters:F,initialSort:K,loading:m,pageSize:25,bulkActions:a,bulkSelectEnabled:w,disableBulkSelect:A,addDangerToast:t,addSuccessToast:n,emptyState:R,refreshData:C})})))}))},83379:(e,t,n)=>{function a(e){return e?`${e.first_name} ${e.last_name}`:""}n.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=c0e7cb9a01571077939d.chunk.js.map