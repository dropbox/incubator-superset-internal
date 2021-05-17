(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{4506:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var l=a(12),n=a.n(l),c=(a(0),a(48)),s=a(49),o=a(950),i=a(1);const r=c.d.span`
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
`,d=c.d.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function b({actions:e}){return Object(i.g)(r,{className:"actions"},n()(e).call(e,(e,t)=>{const a=o.a[e.icon];return e.tooltip?Object(i.g)(s.a,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},Object(i.g)(d,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},Object(i.g)(a,null))):Object(i.g)(d,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},Object(i.g)(a,null))}))}},4904:function(e,t,a){"use strict";a.r(t);a(41);var l=a(33),n=a.n(l),c=a(12),s=a.n(c),o=a(0),i=a.n(o),r=a(14),d=a(72),b=a(96),m=a.n(b),u=a(38),p=a.n(u),g=a(562),j=a(122),O=a(128),h=a(1112),_=a(1474),f=a(49),S=a(1473),y=a(4506),w=a(4501),C=a(48),x=a(47),$=a(99),v=a(226),k=a(1);const D=C.d.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,T=Object(C.d)(v.b)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,H=Object(C.d)(x.a)`
  margin: auto ${({theme:e})=>2*e.gridUnit}px auto 0;
`,N=C.d.div`
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
`;var A=Object(O.a)(({addDangerToast:e,onCssTemplateAdd:t,onHide:a,show:l,cssTemplate:n=null})=>{const[c,s]=Object(o.useState)(!0),[i,d]=Object(o.useState)(null),[b,m]=Object(o.useState)(!0),u=null!==n,{state:{loading:p,resource:j},fetchResource:O,createResource:h,updateResource:_}=Object(g.g)("css_template",Object(r.e)("css_template"),e),f=()=>{m(!0),a()};return Object(o.useEffect)(()=>{if(u&&(!i||!i.id||n&&n.id!==i.id||b&&l)){if(n&&null!==n.id&&!p){const e=n.id||0;O(e)}}else!u&&(!i||i.id||b&&l)&&d({template_name:"",css:""})},[n]),Object(o.useEffect)(()=>{j&&d(j)},[j]),Object(o.useEffect)(()=>{i&&i.template_name.length&&i.css&&i.css.length?s(!1):s(!0)},[i?i.template_name:"",i?i.css:""]),b&&l&&m(!1),Object(k.g)($.b,{disablePrimaryButton:c,onHandledPrimaryAction:()=>{if(u){if(i&&i.id){const e=i.id;delete i.id,delete i.created_by,_(e,i).then(e=>{e&&(t&&t(),f())})}}else i&&h(i).then(e=>{e&&(t&&t(),f())})},onHide:f,primaryButtonName:u?Object(r.e)("Save"):Object(r.e)("Add"),show:l,width:"55%",title:Object(k.g)("h4",null,u?Object(k.g)(H,{name:"edit-alt"}):Object(k.g)(H,{name:"plus-large"}),u?Object(r.e)("Edit CSS template properties"):Object(r.e)("Add CSS template"))},Object(k.g)(D,null,Object(k.g)("h4",null,Object(r.e)("Basic information"))),Object(k.g)(N,null,Object(k.g)("div",{className:"control-label"},Object(r.e)("CSS template name"),Object(k.g)("span",{className:"required"},"*")),Object(k.g)("input",{name:"template_name",onChange:e=>{const{target:t}=e,a={...i,template_name:i?i.template_name:"",css:i?i.css:""};a[t.name]=t.value,d(a)},type:"text",value:null==i?void 0:i.template_name})),Object(k.g)(N,null,Object(k.g)("div",{className:"control-label"},Object(r.e)("css"),Object(k.g)("span",{className:"required"},"*")),Object(k.g)(T,{onChange:e=>{const t={...i,template_name:i?i.template_name:"",css:e};d(t)},value:null==i?void 0:i.css,width:"100%"})))});t.default=Object(O.a)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:l,resourceCount:c,resourceCollection:b,bulkSelectEnabled:u},hasPerm:O,fetchData:C,refreshData:x,toggleBulkSelect:$}=Object(g.f)("css_template",Object(r.e)("CSS templates"),e),[v,D]=Object(o.useState)(!1),[T,H]=Object(o.useState)(null),N=O("can_write"),B=O("can_write"),U=O("can_write"),[E,z]=Object(o.useState)(null),M=[{id:"template_name",desc:!0}],q=Object(o.useMemo)(()=>[{accessor:"template_name",Header:Object(r.e)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>{let a="null";return t&&(a=`${t.first_name} ${t.last_name}`),Object(k.g)(f.a,{id:"allow-run-async-header-tooltip",title:Object(r.e)("Last modified by %s",a),placement:"right"},Object(k.g)("span",null,e))},Header:Object(r.e)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return p()(a).fromNow()},Header:Object(r.e)("Created on"),accessor:"created_on",size:"xl",disableSortBy:!0},{accessor:"created_by",disableSortBy:!0,Header:Object(r.e)("Created by"),Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",size:"xl"},{Cell:({row:{original:e}})=>{var t;const a=n()(t=[B?{label:"edit-action",tooltip:Object(r.e)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(H(e),void D(!0))}:null,U?{label:"delete-action",tooltip:Object(r.e)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>z(e)}:null]).call(t,e=>!!e);return Object(k.g)(y.a,{actions:a})},Header:Object(r.e)("Actions"),id:"actions",disableSortBy:!0,hidden:!B&&!U,size:"xl"}],[U,N]),P={name:Object(r.e)("CSS templates")},R=[];N&&R.push({name:Object(k.g)(i.a.Fragment,null,Object(k.g)("i",{className:"fa fa-plus"})," ",Object(r.e)("CSS template")),buttonStyle:"primary",onClick:()=>{H(null),D(!0)}}),U&&R.push({name:Object(r.e)("Bulk select"),onClick:$,buttonStyle:"secondary"}),P.buttons=R;const F=Object(o.useMemo)(()=>[{Header:Object(r.e)("Created by"),id:"created_by",input:"select",operator:w.a.relationOneMany,unfilteredLabel:"All",fetchSelects:Object(j.e)("css_template","created_by",Object(j.c)(e=>Object(r.e)("An error occurred while fetching dataset datasource values: %s",e)),a.userId),paginate:!0},{Header:Object(r.e)("Search"),id:"template_name",input:"search",operator:w.a.contains}],[]);return Object(k.g)(i.a.Fragment,null,Object(k.g)(h.a,P),Object(k.g)(A,{addDangerToast:e,cssTemplate:T,onCssTemplateAdd:()=>x(),onHide:()=>D(!1),show:v}),E&&Object(k.g)(_.a,{description:Object(r.e)("This action will permanently delete the template."),onConfirm:()=>{E&&(({id:a,template_name:l})=>{d.a.delete({endpoint:`/api/v1/css_template/${a}`}).then(()=>{x(),z(null),t(Object(r.e)("Deleted: %s",l))},Object(j.c)(t=>e(Object(r.e)("There was an issue deleting %s: %s",l,t))))})(E)},onHide:()=>z(null),open:!0,title:Object(r.e)("Delete Template?")}),Object(k.g)(S.a,{title:Object(r.e)("Please confirm"),description:Object(r.e)("Are you sure you want to delete the selected templates?"),onConfirm:a=>{d.a.delete({endpoint:`/api/v1/css_template/?q=${m.a.encode(s()(a).call(a,({id:e})=>e))}`}).then(({json:e={}})=>{x(),t(e.message)},Object(j.c)(t=>e(Object(r.e)("There was an issue deleting the selected templates: %s",t))))}},e=>{const t=U?[{key:"delete",name:Object(r.e)("Delete"),onSelect:e,type:"danger"}]:[];return Object(k.g)(w.b,{className:"css-templates-list-view",columns:q,count:c,data:b,fetchData:C,filters:F,initialSort:M,loading:l,pageSize:25,bulkActions:t,bulkSelectEnabled:u,disableBulkSelect:$})}))}))}}]);