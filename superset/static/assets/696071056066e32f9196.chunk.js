"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9452],{29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var l=a(51995),n=a(58593),s=a(70163),i=a(11965);const o=l.iK.span`
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
`,r=l.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function c({actions:e}){return(0,i.tZ)(o,{className:"actions"},e.map(((e,t)=>{const a=s.Z[e.icon];return e.tooltip?(0,i.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,i.tZ)(r,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,i.tZ)(a,null))):(0,i.tZ)(r,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,i.tZ)(a,null))})))}},69053:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var l=a(67294),n=a(61988),s=a(31069),i=a(15926),o=a.n(i),r=a(30381),c=a.n(r),d=a(34858),m=a(40768),u=a(14114),p=a(20755),h=a(17198),g=a(58593),b=a(19259),Z=a(29848),_=a(18782),y=a(51995),S=a(70163),f=a(74069),C=a(94670),w=a(11965);const $=y.iK.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,x=(0,y.iK)(C.ry)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,v=y.iK.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }
`,k=(0,u.ZP)((({addDangerToast:e,onCssTemplateAdd:t,onHide:a,show:s,cssTemplate:i=null})=>{const[o,r]=(0,l.useState)(!0),[c,u]=(0,l.useState)(null),[p,h]=(0,l.useState)(!0),g=null!==i,{state:{loading:b,resource:Z},fetchResource:_,createResource:y,updateResource:C}=(0,d.LE)("css_template",(0,n.t)("css_template"),e),k=()=>{h(!0),a()};return(0,l.useEffect)((()=>{if(g&&(!c||!c.id||i&&i.id!==c.id||p&&s)){if(i&&null!==i.id&&!b){const e=i.id||0;_(e)}}else!g&&(!c||c.id||p&&s)&&u({template_name:"",css:""})}),[i]),(0,l.useEffect)((()=>{Z&&u(Z)}),[Z]),(0,l.useEffect)((()=>{c&&c.template_name.length&&c.css&&c.css.length?r(!1):r(!0)}),[c?c.template_name:"",c?c.css:""]),p&&s&&h(!1),(0,w.tZ)(f.Z,{disablePrimaryButton:o,onHandledPrimaryAction:()=>{if(g){if(c&&c.id){const e=c.id;delete c.id,delete c.created_by,C(e,c).then((e=>{e&&(t&&t(),k())}))}}else c&&y(c).then((e=>{e&&(t&&t(),k())}))},onHide:k,primaryButtonName:g?(0,n.t)("Save"):(0,n.t)("Add"),show:s,width:"55%",title:(0,w.tZ)("h4",null,g?(0,w.tZ)(S.Z.EditAlt,{css:m.xL}):(0,w.tZ)(S.Z.PlusLarge,{css:m.xL}),g?(0,n.t)("Edit CSS template properties"):(0,n.t)("Add CSS template"))},(0,w.tZ)($,null,(0,w.tZ)("h4",null,(0,n.t)("Basic information"))),(0,w.tZ)(v,null,(0,w.tZ)("div",{className:"control-label"},(0,n.t)("CSS template name"),(0,w.tZ)("span",{className:"required"},"*")),(0,w.tZ)("input",{name:"template_name",onChange:e=>{const{target:t}=e,a={...c,template_name:c?c.template_name:"",css:c?c.css:""};a[t.name]=t.value,u(a)},type:"text",value:null==c?void 0:c.template_name})),(0,w.tZ)(v,null,(0,w.tZ)("div",{className:"control-label"},(0,n.t)("css"),(0,w.tZ)("span",{className:"required"},"*")),(0,w.tZ)(x,{onChange:e=>{const t={...c,template_name:c?c.template_name:"",css:e};u(t)},value:null==c?void 0:c.css,width:"100%"})))})),T=(0,u.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:i,resourceCount:r,resourceCollection:u,bulkSelectEnabled:y},hasPerm:S,fetchData:f,refreshData:C,toggleBulkSelect:$}=(0,d.Yi)("css_template",(0,n.t)("CSS templates"),e),[x,v]=(0,l.useState)(!1),[T,D]=(0,l.useState)(null),H=S("can_write"),N=S("can_write"),A=S("can_write"),[B,E]=(0,l.useState)(null),U=[{id:"template_name",desc:!0}],z=(0,l.useMemo)((()=>[{accessor:"template_name",Header:(0,n.t)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>{let a="null";return t&&(a=`${t.first_name} ${t.last_name}`),(0,w.tZ)(g.u,{id:"allow-run-async-header-tooltip",title:(0,n.t)("Last modified by %s",a),placement:"right"},(0,w.tZ)("span",null,e))},Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return c()(a).fromNow()},Header:(0,n.t)("Created on"),accessor:"created_on",size:"xl",disableSortBy:!0},{accessor:"created_by",disableSortBy:!0,Header:(0,n.t)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:e}})=>{const t=[N?{label:"edit-action",tooltip:(0,n.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(D(e),void v(!0))}:null,A?{label:"delete-action",tooltip:(0,n.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>E(e)}:null].filter((e=>!!e));return(0,w.tZ)(Z.Z,{actions:t})},Header:(0,n.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!N&&!A,size:"xl"}]),[A,H]),L={name:(0,n.t)("CSS templates")},P=[];H&&P.push({name:(0,w.tZ)(l.Fragment,null,(0,w.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("CSS template")),buttonStyle:"primary",onClick:()=>{D(null),v(!0)}}),A&&P.push({name:(0,n.t)("Bulk select"),onClick:$,buttonStyle:"secondary"}),L.buttons=P;const M=(0,l.useMemo)((()=>[{Header:(0,n.t)("Created by"),id:"created_by",input:"select",operator:_.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,m.tm)("css_template","created_by",(0,m.v$)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0},{Header:(0,n.t)("Search"),id:"template_name",input:"search",operator:_.p.contains}]),[]);return(0,w.tZ)(l.Fragment,null,(0,w.tZ)(p.Z,L),(0,w.tZ)(k,{addDangerToast:e,cssTemplate:T,onCssTemplateAdd:()=>C(),onHide:()=>v(!1),show:x}),B&&(0,w.tZ)(h.Z,{description:(0,n.t)("This action will permanently delete the template."),onConfirm:()=>{B&&(({id:a,template_name:l})=>{s.Z.delete({endpoint:`/api/v1/css_template/${a}`}).then((()=>{C(),E(null),t((0,n.t)("Deleted: %s",l))}),(0,m.v$)((t=>e((0,n.t)("There was an issue deleting %s: %s",l,t)))))})(B)},onHide:()=>E(null),open:!0,title:(0,n.t)("Delete Template?")}),(0,w.tZ)(b.Z,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected templates?"),onConfirm:a=>{s.Z.delete({endpoint:`/api/v1/css_template/?q=${o().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{C(),t(e.message)}),(0,m.v$)((t=>e((0,n.t)("There was an issue deleting the selected templates: %s",t)))))}},(e=>{const t=A?[{key:"delete",name:(0,n.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,w.tZ)(_.Z,{className:"css-templates-list-view",columns:z,count:r,data:u,fetchData:f,filters:M,initialSort:U,loading:i,pageSize:25,bulkActions:t,bulkSelectEnabled:y,disableBulkSelect:$})})))}))}}]);
//# sourceMappingURL=696071056066e32f9196.chunk.js.map