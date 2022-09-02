"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1611],{29848:(t,e,n)=>{n.d(e,{Z:()=>d}),n(67294);var a=n(51995),o=n(58593),l=n(70163),i=n(11965);const s=a.iK.span`
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
`;function d({actions:t}){return(0,i.tZ)(s,{className:"actions"},t.map(((t,e)=>{const n=l.Z[t.icon];return t.tooltip?(0,i.tZ)(o.u,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},(0,i.tZ)(r,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick},(0,i.tZ)(n,null))):(0,i.tZ)(r,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,key:e},(0,i.tZ)(n,null))})))}},35276:(t,e,n)=>{n.r(e),n.d(e,{default:()=>N});var a=n(67294),o=n(73727),l=n(5977),i=n(51995),s=n(11965),r=n(61988),d=n(31069),c=n(30381),u=n.n(c),m=n(15926),h=n.n(m),p=n(29848),g=n(19259),Z=n(17198),_=n(18782),b=n(20755),y=n(98286),f=n(14114),x=n(34858),v=n(40768),w=n(62276),$=n(70163),k=n(74069),S=n(94670);const C=i.iK.div`
  margin: ${({theme:t})=>2*t.gridUnit}px auto
    ${({theme:t})=>4*t.gridUnit}px auto;
`,A=(0,i.iK)(S.Ad)`
  border-radius: ${({theme:t})=>t.borderRadius}px;
  border: 1px solid ${({theme:t})=>t.colors.secondary.light2};
`,D=i.iK.div`
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
`,H=(0,f.ZP)((({addDangerToast:t,addSuccessToast:e,annnotationLayerId:n,annotation:o=null,onAnnotationAdd:l,onHide:i,show:d})=>{var c,m;const[h,p]=(0,a.useState)(!0),[g,Z]=(0,a.useState)(null),_=null!==o,{state:{loading:b,resource:y},fetchResource:f,createResource:S,updateResource:H}=(0,x.LE)(`annotation_layer/${n}/annotation`,(0,r.t)("annotation"),t),T=()=>{Z({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},N=()=>{_?Z(y):T(),i()},Y=t=>{const{target:e}=t,n={...g,end_dttm:g?g.end_dttm:"",short_descr:g?g.short_descr:"",start_dttm:g?g.start_dttm:""};n[e.name]=e.value,Z(n)};return(0,a.useEffect)((()=>{if(_&&(!g||!g.id||o&&o.id!==g.id||d)){if(o&&null!==o.id&&!b){const t=o.id||0;f(t)}}else _||g&&!g.id&&!d||T()}),[o]),(0,a.useEffect)((()=>{y&&Z(y)}),[y]),(0,a.useEffect)((()=>{var t,e,n;g&&null!=(t=g.short_descr)&&t.length&&null!=(e=g.start_dttm)&&e.length&&null!=(n=g.end_dttm)&&n.length?p(!1):p(!0)}),[g?g.short_descr:"",g?g.start_dttm:"",g?g.end_dttm:""]),(0,s.tZ)(k.Z,{disablePrimaryButton:h,onHandledPrimaryAction:()=>{if(_){if(g&&g.id){const t=g.id;delete g.id,delete g.created_by,delete g.changed_by,delete g.changed_on_delta_humanized,delete g.layer,H(t,g).then((t=>{t&&(l&&l(),N(),e((0,r.t)("The annotation has been updated")))}))}}else g&&S(g).then((t=>{t&&(l&&l(),N(),e((0,r.t)("The annotation has been saved")))}))},onHide:N,primaryButtonName:_?(0,r.t)("Save"):(0,r.t)("Add"),show:d,width:"55%",title:(0,s.tZ)("h4",null,_?(0,s.tZ)($.Z.EditAlt,{css:v.xL}):(0,s.tZ)($.Z.PlusLarge,{css:v.xL}),_?(0,r.t)("Edit annotation"):(0,r.t)("Add annotation"))},(0,s.tZ)(C,null,(0,s.tZ)("h4",null,(0,r.t)("Basic information"))),(0,s.tZ)(D,null,(0,s.tZ)("div",{className:"control-label"},(0,r.t)("Annotation name"),(0,s.tZ)("span",{className:"required"},"*")),(0,s.tZ)("input",{name:"short_descr",onChange:Y,type:"text",value:null==g?void 0:g.short_descr})),(0,s.tZ)(D,null,(0,s.tZ)("div",{className:"control-label"},(0,r.t)("date"),(0,s.tZ)("span",{className:"required"},"*")),(0,s.tZ)(w.S,{format:"YYYY-MM-DD HH:mm",onChange:(t,e)=>{const n={...g,end_dttm:g&&e[1].length?u()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:g?g.short_descr:"",start_dttm:g&&e[0].length?u()(e[0]).format("YYYY-MM-DD HH:mm"):""};Z(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=g&&null!=(c=g.start_dttm)&&c.length||null!=g&&null!=(m=g.end_dttm)&&m.length?[u()(g.start_dttm),u()(g.end_dttm)]:null})),(0,s.tZ)(C,null,(0,s.tZ)("h4",null,(0,r.t)("Additional information"))),(0,s.tZ)(D,null,(0,s.tZ)("div",{className:"control-label"},(0,r.t)("description")),(0,s.tZ)("textarea",{name:"long_descr",value:g?g.long_descr:"",placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:Y})),(0,s.tZ)(D,null,(0,s.tZ)("div",{className:"control-label"},(0,r.t)("JSON metadata")),(0,s.tZ)(A,{onChange:t=>{const e={...g,end_dttm:g?g.end_dttm:"",json_metadata:t,short_descr:g?g.short_descr:"",start_dttm:g?g.start_dttm:""};Z(e)},value:g&&g.json_metadata?g.json_metadata:"",width:"100%",height:"120px"})))})),T=i.iK.div`
  ${({theme:t})=>s.iv`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: ${4*t.gridUnit}px;
      font-size: ${t.typography.sizes.s}px;
      font-weight: ${t.typography.weights.normal};
      text-decoration: underline;
    }
  `}
`,N=(0,f.ZP)((function({addDangerToast:t,addSuccessToast:e}){const{annotationLayerId:n}=(0,l.UO)(),{state:{loading:i,resourceCount:c,resourceCollection:m,bulkSelectEnabled:f},fetchData:w,refreshData:$,toggleBulkSelect:k}=(0,x.Yi)(`annotation_layer/${n}/annotation`,(0,r.t)("annotation"),t,!1),[S,C]=(0,a.useState)(!1),[A,D]=(0,a.useState)(""),[N,Y]=(0,a.useState)(null),[E,U]=(0,a.useState)(null),L=t=>{Y(t),C(!0)},B=(0,a.useCallback)((async function(){try{const t=await d.Z.get({endpoint:`/api/v1/annotation_layer/${n}`});D(t.json.result.name)}catch(e){await(0,y.O)(e).then((({error:e})=>{t(e.error||e.statusText||e)}))}}),[n]);(0,a.useEffect)((()=>{B()}),[B]);const M=[{id:"short_descr",desc:!0}],j=(0,a.useMemo)((()=>[{accessor:"short_descr",Header:(0,r.t)("Label")},{accessor:"long_descr",Header:(0,r.t)("Description")},{Cell:({row:{original:{start_dttm:t}}})=>u()(new Date(t)).format("ll"),Header:(0,r.t)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:t}}})=>u()(new Date(t)).format("ll"),Header:(0,r.t)("End"),accessor:"end_dttm"},{Cell:({row:{original:t}})=>{const e=[{label:"edit-action",tooltip:(0,r.t)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>L(t)},{label:"delete-action",tooltip:(0,r.t)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>U(t)}];return(0,s.tZ)(p.Z,{actions:e})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0}]),[!0,!0]),K=[];K.push({name:(0,s.tZ)(a.Fragment,null,(0,s.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation")),buttonStyle:"primary",onClick:()=>{L(null)}}),K.push({name:(0,r.t)("Bulk select"),onClick:k,buttonStyle:"secondary","data-test":"annotation-bulk-select"});let P=!0;try{(0,l.k6)()}catch(t){P=!1}const z={title:(0,r.t)("No annotation yet"),image:"filter-results.svg",buttonAction:()=>{L(null)},buttonText:(0,s.tZ)(a.Fragment,null,(0,s.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation"))};return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(b.Z,{name:(0,s.tZ)(T,null,(0,s.tZ)("span",null,(0,r.t)("Annotation Layer %s",A)),(0,s.tZ)("span",null,P?(0,s.tZ)(o.rU,{to:"/annotationlayermodelview/list/"},"Back to all"):(0,s.tZ)("a",{href:"/annotationlayermodelview/list/"},"Back to all"))),buttons:K}),(0,s.tZ)(H,{addDangerToast:t,addSuccessToast:e,annotation:N,show:S,onAnnotationAdd:()=>$(),annnotationLayerId:n,onHide:()=>C(!1)}),E&&(0,s.tZ)(Z.Z,{description:(0,r.t)("Are you sure you want to delete %s?",null==E?void 0:E.short_descr),onConfirm:()=>{E&&(({id:a,short_descr:o})=>{d.Z.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then((()=>{$(),U(null),e((0,r.t)("Deleted: %s",o))}),(0,v.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",o,e)))))})(E)},onHide:()=>U(null),open:!0,title:(0,r.t)("Delete Annotation?")}),(0,s.tZ)(g.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{d.Z.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${h().encode(a.map((({id:t})=>t)))}`}).then((({json:t={}})=>{$(),e(t.message)}),(0,v.v$)((e=>t((0,r.t)("There was an issue deleting the selected annotations: %s",e)))))}},(t=>{const e=[{key:"delete",name:(0,r.t)("Delete"),onSelect:t,type:"danger"}];return(0,s.tZ)(_.Z,{className:"annotations-list-view",bulkActions:e,bulkSelectEnabled:f,columns:j,count:c,data:m,disableBulkSelect:k,emptyState:z,fetchData:w,initialSort:M,loading:i,pageSize:25})})))}))}}]);
//# sourceMappingURL=ed08f2ba8017545878d5.chunk.js.map