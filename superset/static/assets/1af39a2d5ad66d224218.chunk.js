"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1611],{29848:(t,e,n)=>{n.d(e,{Z:()=>d}),n(67294);var a=n(37840),o=n(58593),l=n(38097),s=n(11965);const i=a.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:t})=>t.colors.primary.base};
      }
    }
  }
`,r=a.iK.span`
  color: ${({theme:t})=>t.colors.grayscale.base};
`;function d({actions:t}){return(0,s.tZ)(i,{className:"actions"},t.map(((t,e)=>{const n=l.Z[t.icon];return t.tooltip?(0,s.tZ)(o.u,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},(0,s.tZ)(r,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick},(0,s.tZ)(n,null))):(0,s.tZ)(r,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,key:e},(0,s.tZ)(n,null))})))}},35276:(t,e,n)=>{n.r(e),n.d(e,{default:()=>T});var a=n(67294),o=n(73727),l=n(5977),s=n(60650),i=n(21173),r=n(37840),d=n(30381),c=n.n(d),u=n(15926),m=n.n(u),h=n(29848),p=n(35932),g=n(19259),Z=n(17198),_=n(9678),b=n(62753),y=n(98286),f=n(14114),x=n(34858),v=n(40768),w=n(62276),k=n(38097),$=n(74069),S=n(94670),C=n(11965);const D=r.iK.div`
  margin: ${({theme:t})=>2*t.gridUnit}px auto
    ${({theme:t})=>4*t.gridUnit}px auto;
`,A=(0,r.iK)(S.Ad)`
  border-radius: ${({theme:t})=>t.borderRadius}px;
  border: 1px solid ${({theme:t})=>t.colors.secondary.light2};
`,H=r.iK.div`
  margin-bottom: ${({theme:t})=>5*t.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:t})=>2*t.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:t})=>t.gridUnit/2}px;
    color: ${({theme:t})=>t.colors.error.base};
  }

  textarea {
    flex: 1 1 auto;
    height: ${({theme:t})=>17*t.gridUnit}px;
    resize: none;
    width: 100%;
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:t})=>1.5*t.gridUnit}px
      ${({theme:t})=>2*t.gridUnit}px;
    border: 1px solid ${({theme:t})=>t.colors.grayscale.light2};
    border-radius: ${({theme:t})=>t.gridUnit}px;
  }

  input[type='text'] {
    width: 65%;
  }
`,N=(0,f.Z)((({addDangerToast:t,addSuccessToast:e,annnotationLayerId:n,annotation:o=null,onAnnotationAdd:l,onHide:i,show:r})=>{var d,u;const[m,h]=(0,a.useState)(!0),[p,g]=(0,a.useState)(null),Z=null!==o,{state:{loading:_,resource:b},fetchResource:y,createResource:f,updateResource:S}=(0,x.LE)(`annotation_layer/${n}/annotation`,(0,s.t)("annotation"),t),N=()=>{g({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},T=()=>{Z?g(b):N(),i()},Y=t=>{const{target:e}=t,n={...p,end_dttm:p?p.end_dttm:"",short_descr:p?p.short_descr:"",start_dttm:p?p.start_dttm:""};n[e.name]=e.value,g(n)};return(0,a.useEffect)((()=>{if(Z&&(!p||!p.id||o&&o.id!==p.id||r)){if(o&&null!==o.id&&!_){const t=o.id||0;y(t)}}else Z||p&&!p.id&&!r||N()}),[o]),(0,a.useEffect)((()=>{b&&g(b)}),[b]),(0,a.useEffect)((()=>{var t,e,n;p&&null!=(t=p.short_descr)&&t.length&&null!=(e=p.start_dttm)&&e.length&&null!=(n=p.end_dttm)&&n.length?h(!1):h(!0)}),[p?p.short_descr:"",p?p.start_dttm:"",p?p.end_dttm:""]),(0,C.tZ)($.Z,{disablePrimaryButton:m,onHandledPrimaryAction:()=>{if(Z){if(p&&p.id){const t=p.id;delete p.id,delete p.created_by,delete p.changed_by,delete p.changed_on_delta_humanized,delete p.layer,S(t,p).then((t=>{t&&(l&&l(),T(),e((0,s.t)("The annotation has been updated")))}))}}else p&&f(p).then((t=>{t&&(l&&l(),T(),e((0,s.t)("The annotation has been saved")))}))},onHide:T,primaryButtonName:Z?(0,s.t)("Save"):(0,s.t)("Add"),show:r,width:"55%",title:(0,C.tZ)("h4",null,Z?(0,C.tZ)(k.Z.EditAlt,{css:v.xL}):(0,C.tZ)(k.Z.PlusLarge,{css:v.xL}),Z?(0,s.t)("Edit annotation"):(0,s.t)("Add annotation"))},(0,C.tZ)(D,null,(0,C.tZ)("h4",null,(0,s.t)("Basic information"))),(0,C.tZ)(H,null,(0,C.tZ)("div",{className:"control-label"},(0,s.t)("Annotation name"),(0,C.tZ)("span",{className:"required"},"*")),(0,C.tZ)("input",{name:"short_descr",onChange:Y,type:"text",value:null==p?void 0:p.short_descr})),(0,C.tZ)(H,null,(0,C.tZ)("div",{className:"control-label"},(0,s.t)("date"),(0,C.tZ)("span",{className:"required"},"*")),(0,C.tZ)(w.S,{format:"YYYY-MM-DD HH:mm",onChange:(t,e)=>{const n={...p,end_dttm:p&&e[1].length?c()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:p?p.short_descr:"",start_dttm:p&&e[0].length?c()(e[0]).format("YYYY-MM-DD HH:mm"):""};g(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=p&&null!=(d=p.start_dttm)&&d.length||null!=p&&null!=(u=p.end_dttm)&&u.length?[c()(p.start_dttm),c()(p.end_dttm)]:null})),(0,C.tZ)(D,null,(0,C.tZ)("h4",null,(0,s.t)("Additional information"))),(0,C.tZ)(H,null,(0,C.tZ)("div",{className:"control-label"},(0,s.t)("description")),(0,C.tZ)("textarea",{name:"long_descr",value:p?p.long_descr:"",placeholder:(0,s.t)("Description (this can be seen in the list)"),onChange:Y})),(0,C.tZ)(H,null,(0,C.tZ)("div",{className:"control-label"},(0,s.t)("JSON metadata")),(0,C.tZ)(A,{onChange:t=>{const e={...p,end_dttm:p?p.end_dttm:"",json_metadata:t,short_descr:p?p.short_descr:"",start_dttm:p?p.start_dttm:""};g(e)},value:p&&p.json_metadata?p.json_metadata:"",width:"100%",height:"120px"})))})),T=(0,f.Z)((function({addDangerToast:t,addSuccessToast:e}){const{annotationLayerId:n}=(0,l.UO)(),{state:{loading:d,resourceCount:u,resourceCollection:f,bulkSelectEnabled:w},fetchData:k,refreshData:$,toggleBulkSelect:S}=(0,x.Yi)(`annotation_layer/${n}/annotation`,(0,s.t)("annotation"),t,!1),[D,A]=(0,a.useState)(!1),[H,T]=(0,a.useState)(""),[Y,E]=(0,a.useState)(null),[U,L]=(0,a.useState)(null),B=t=>{E(t),A(!0)},M=(0,a.useCallback)((async function(){try{const t=await i.Z.get({endpoint:`/api/v1/annotation_layer/${n}`});T(t.json.result.name)}catch(e){await(0,y.O)(e).then((({error:e})=>{t(e.error||e.statusText||e)}))}}),[n]);(0,a.useEffect)((()=>{M()}),[M]);const j=[{id:"short_descr",desc:!0}],K=(0,a.useMemo)((()=>[{accessor:"short_descr",Header:(0,s.t)("Label")},{accessor:"long_descr",Header:(0,s.t)("Description")},{Cell:({row:{original:{start_dttm:t}}})=>c()(new Date(t)).format("ll"),Header:(0,s.t)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:t}}})=>c()(new Date(t)).format("ll"),Header:(0,s.t)("End"),accessor:"end_dttm"},{Cell:({row:{original:t}})=>{const e=[{label:"edit-action",tooltip:(0,s.t)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>B(t)},{label:"delete-action",tooltip:(0,s.t)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>L(t)}];return(0,C.tZ)(h.Z,{actions:e})},Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0}]),[!0,!0]),I=[];I.push({name:(0,C.tZ)(a.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Annotation")),buttonStyle:"primary",onClick:()=>{B(null)}}),I.push({name:(0,s.t)("Bulk select"),onClick:S,buttonStyle:"secondary","data-test":"annotation-bulk-select"});const q=r.iK.div`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: 16px;
      font-size: 12px;
      font-weight: normal;
      text-decoration: underline;
    }
  `;let z=!0;try{(0,l.k6)()}catch(t){z=!1}const P=(0,C.tZ)(p.Z,{buttonStyle:"primary",onClick:()=>{B(null)}},(0,C.tZ)(a.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Annotation"))),R={message:(0,s.t)("No annotation yet"),slot:P};return(0,C.tZ)(a.Fragment,null,(0,C.tZ)(b.Z,{name:(0,C.tZ)(q,null,(0,C.tZ)("span",null,(0,s.t)(`Annotation Layer ${H}`)),(0,C.tZ)("span",null,z?(0,C.tZ)(o.rU,{to:"/annotationlayermodelview/list/"},"Back to all"):(0,C.tZ)("a",{href:"/annotationlayermodelview/list/"},"Back to all"))),buttons:I}),(0,C.tZ)(N,{addDangerToast:t,addSuccessToast:e,annotation:Y,show:D,onAnnotationAdd:()=>$(),annnotationLayerId:n,onHide:()=>A(!1)}),U&&(0,C.tZ)(Z.Z,{description:(0,s.t)(`Are you sure you want to delete ${null==U?void 0:U.short_descr}?`),onConfirm:()=>{U&&(({id:a,short_descr:o})=>{i.Z.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then((()=>{$(),L(null),e((0,s.t)("Deleted: %s",o))}),(0,v.v$)((e=>t((0,s.t)("There was an issue deleting %s: %s",o,e)))))})(U)},onHide:()=>L(null),open:!0,title:(0,s.t)("Delete Annotation?")}),(0,C.tZ)(g.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{i.Z.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${m().encode(a.map((({id:t})=>t)))}`}).then((({json:t={}})=>{$(),e(t.message)}),(0,v.v$)((e=>t((0,s.t)("There was an issue deleting the selected annotations: %s",e)))))}},(t=>{const e=[{key:"delete",name:(0,s.t)("Delete"),onSelect:t,type:"danger"}];return(0,C.tZ)(_.Z,{className:"annotations-list-view",bulkActions:e,bulkSelectEnabled:w,columns:K,count:u,data:f,disableBulkSelect:S,emptyState:R,fetchData:k,initialSort:j,loading:d,pageSize:25})})))}))}}]);