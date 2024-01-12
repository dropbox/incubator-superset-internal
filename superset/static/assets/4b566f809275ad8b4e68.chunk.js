"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4085],{54070:(e,t,l)=>{l.d(t,{w:()=>i}),l(67294);var a=l(58593),n=l(83379),s=l(61988),r=l(11965);const i=e=>{let{user:t,date:l}=e;const i=(0,r.tZ)("span",{className:"no-wrap"},l);if(t){const e=(0,n.Z)(t),l=(0,s.t)("Modified by: %s",e);return(0,r.tZ)(a.u,{title:l,placement:"bottom"},i)}return i}},29848:(e,t,l)=>{l.d(t,{Z:()=>d}),l(67294);var a=l(51995),n=l(58593),s=l(70707),r=l(11965);const i=a.iK.span`
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
`,o=a.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function d(e){let{actions:t}=e;return(0,r.tZ)(i,{className:"actions"},t.map(((e,t)=>{const l=s.Z[e.icon];return e.tooltip?(0,r.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,r.tZ)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,r.tZ)(l,null))):(0,r.tZ)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,r.tZ)(l,null))})))}},36942:(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var a=l(67294),n=l(61988),s=l(31069),r=l(15926),i=l.n(r),o=l(34858),d=l(40768),c=l(14114),u=l(86074),m=l(17198),p=l(19259),h=l(29848),g=l(93139),b=l(51995),Z=l(70707),_=l(74069),f=l(94670),y=l(11965);const S=b.iK.div`
  margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px auto
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px auto;
`,v=(0,b.iK)(f.ry)`
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
`,w=b.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;

  .control-label {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }

  input[type='text'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    width: 50%;
  }
`,C=(0,c.ZP)((e=>{let{addDangerToast:t,onCssTemplateAdd:l,onHide:s,show:r,cssTemplate:i=null}=e;const[c,u]=(0,a.useState)(!0),[m,p]=(0,a.useState)(null),[h,g]=(0,a.useState)(!0),b=null!==i,{state:{loading:f,resource:C},fetchResource:k,createResource:$,updateResource:x}=(0,o.LE)("css_template",(0,n.t)("css_template"),t),T=()=>{g(!0),s()};return(0,a.useEffect)((()=>{if(b&&(null==m||!m.id||i&&(null==i?void 0:i.id)!==m.id||h&&r)){if(null!==(null==i?void 0:i.id)&&!f){const e=i.id||0;k(e)}}else!b&&(!m||m.id||h&&r)&&p({template_name:"",css:""})}),[i]),(0,a.useEffect)((()=>{C&&p(C)}),[C]),(0,a.useEffect)((()=>{var e;null!=m&&m.template_name.length&&null!=m&&null!=(e=m.css)&&e.length?u(!1):u(!0)}),[m?m.template_name:"",m?m.css:""]),h&&r&&g(!1),(0,y.tZ)(_.default,{disablePrimaryButton:c,onHandledPrimaryAction:()=>{if(b){if(null!=m&&m.id){const e=m.id;delete m.id,delete m.created_by,delete m.changed_by,delete m.changed_on_delta_humanized,x(e,m).then((e=>{e&&(l&&l(),T())}))}}else m&&$(m).then((e=>{e&&(l&&l(),T())}))},onHide:T,primaryButtonName:b?(0,n.t)("Save"):(0,n.t)("Add"),show:r,width:"55%",title:(0,y.tZ)("h4",null,b?(0,y.tZ)(Z.Z.EditAlt,{css:d.xL}):(0,y.tZ)(Z.Z.PlusLarge,{css:d.xL}),b?(0,n.t)("Edit CSS template properties"):(0,n.t)("Add CSS template"))},(0,y.tZ)(S,null,(0,y.tZ)("h4",null,(0,n.t)("Basic information"))),(0,y.tZ)(w,null,(0,y.tZ)("div",{className:"control-label"},(0,n.t)("Name"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("input",{name:"template_name",onChange:e=>{const{target:t}=e,l={...m,template_name:m?m.template_name:"",css:m?m.css:""};l[t.name]=t.value,p(l)},type:"text",value:null==m?void 0:m.template_name})),(0,y.tZ)(w,null,(0,y.tZ)("div",{className:"control-label"},(0,n.t)("css"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(v,{onChange:e=>{const t={...m,template_name:m?m.template_name:"",css:e};p(t)},value:null==m?void 0:m.css,width:"100%"})))}));var k=l(54070),$=l(12);const x=(0,c.ZP)((function(e){let{addDangerToast:t,addSuccessToast:l,user:r}=e;const{state:{loading:c,resourceCount:b,resourceCollection:Z,bulkSelectEnabled:_},hasPerm:f,fetchData:S,refreshData:v,toggleBulkSelect:w}=(0,o.Yi)("css_template",(0,n.t)("CSS templates"),t),[x,T]=(0,a.useState)(!1),[N,D]=(0,a.useState)(null),A=f("can_write"),E=f("can_write"),H=f("can_write"),[B,U]=(0,a.useState)(null),P=[{id:"template_name",desc:!0}],z=(0,a.useMemo)((()=>[{accessor:"template_name",Header:(0,n.t)("Name")},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t,changed_by:l}}}=e;return(0,y.tZ)(k.w,{date:t,user:l})},Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:e=>{let{row:{original:t}}=e;const l=[E?{label:"edit-action",tooltip:(0,n.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(D(t),void T(!0))}:null,H?{label:"delete-action",tooltip:(0,n.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>U(t)}:null].filter((e=>!!e));return(0,y.tZ)(h.Z,{actions:l})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!E&&!H,size:"xl"},{accessor:$.J.changed_by,hidden:!0}]),[H,A]),L={name:(0,n.t)("CSS templates")},K=[];A&&K.push({name:(0,y.tZ)(a.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("CSS template")),buttonStyle:"primary",onClick:()=>{D(null),T(!0)}}),H&&K.push({name:(0,n.t)("Bulk select"),onClick:w,buttonStyle:"secondary"}),L.buttons=K;const M=(0,a.useMemo)((()=>[{Header:(0,n.t)("Name"),key:"search",id:"template_name",input:"search",operator:g.p.contains},{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:g.p.relationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,d.tm)("css_template","changed_by",(0,d.v$)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),r),paginate:!0}]),[]);return(0,y.tZ)(a.Fragment,null,(0,y.tZ)(u.Z,L),(0,y.tZ)(C,{addDangerToast:t,cssTemplate:N,onCssTemplateAdd:()=>v(),onHide:()=>T(!1),show:x}),B&&(0,y.tZ)(m.Z,{description:(0,n.t)("This action will permanently delete the template."),onConfirm:()=>{B&&(e=>{let{id:a,template_name:r}=e;s.Z.delete({endpoint:`/api/v1/css_template/${a}`}).then((()=>{v(),U(null),l((0,n.t)("Deleted: %s",r))}),(0,d.v$)((e=>t((0,n.t)("There was an issue deleting %s: %s",r,e)))))})(B)},onHide:()=>U(null),open:!0,title:(0,n.t)("Delete Template?")}),(0,y.tZ)(p.Z,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected templates?"),onConfirm:e=>{s.Z.delete({endpoint:`/api/v1/css_template/?q=${i().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;v(),l(t.message)}),(0,d.v$)((e=>t((0,n.t)("There was an issue deleting the selected templates: %s",e)))))}},(e=>{const a=H?[{key:"delete",name:(0,n.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,y.tZ)(g.Z,{className:"css-templates-list-view",columns:z,count:b,data:Z,fetchData:S,filters:M,initialSort:P,loading:c,pageSize:25,bulkActions:a,bulkSelectEnabled:_,disableBulkSelect:w,addDangerToast:t,addSuccessToast:l,refreshData:v})})))}))},83379:(e,t,l)=>{function a(e){return e?`${e.first_name} ${e.last_name}`:""}l.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=4b566f809275ad8b4e68.chunk.js.map