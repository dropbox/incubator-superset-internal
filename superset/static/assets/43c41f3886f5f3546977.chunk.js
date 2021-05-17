(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{4506:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(12),o=n.n(a),l=(n(0),n(48)),c=n(49),i=n(950),r=n(1);const s=l.d.span`
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
`,d=l.d.span`
  color: ${({theme:t})=>t.colors.grayscale.base};
`;function b({actions:t}){return Object(r.g)(s,{className:"actions"},o()(t).call(t,(t,e)=>{const n=i.a[t.icon];return t.tooltip?Object(r.g)(c.a,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},Object(r.g)(d,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick},Object(r.g)(n,null))):Object(r.g)(d,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,key:e},Object(r.g)(n,null))}))}},4903:function(t,e,n){"use strict";n.r(e);n(41);var a=n(12),o=n.n(a),l=n(0),c=n.n(l),i=n(540),r=n(547),s=n(14),d=n(72),b=n(48),u=n(38),m=n.n(u),g=n(96),j=n.n(g),O=n(4506),h=n(43),p=n(1473),_=n(1474),f=n(4501),y=n(1112),w=n(74),x=n(128),v=n(562),$=n(122),k=n(1097),S=n(47),C=n(99),D=n(226),A=n(1);const H=b.d.div`
  margin: ${({theme:t})=>2*t.gridUnit}px auto
    ${({theme:t})=>4*t.gridUnit}px auto;
`,N=Object(b.d)(D.d)`
  border-radius: ${({theme:t})=>t.borderRadius}px;
  border: 1px solid ${({theme:t})=>t.colors.secondary.light2};
`,Y=Object(b.d)(S.a)`
  margin: auto ${({theme:t})=>2*t.gridUnit}px auto 0;
`,E=b.d.div`
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
`;var U=Object(x.a)(({addDangerToast:t,annnotationLayerId:e,annotation:n=null,onAnnotationAdd:a,onHide:o,show:c})=>{var i,r;const[d,b]=Object(l.useState)(!0),[u,g]=Object(l.useState)(null),[j,O]=Object(l.useState)(!0),h=null!==n,{state:{loading:p,resource:_},fetchResource:f,createResource:y,updateResource:w}=Object(v.g)(`annotation_layer/${e}/annotation`,Object(s.e)("annotation"),t),x=()=>{g({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},$=()=>{O(!0),x(),o()},S=t=>{const{target:e}=t,n={...u,end_dttm:u?u.end_dttm:"",short_descr:u?u.short_descr:"",start_dttm:u?u.start_dttm:""};n[e.name]=e.value,g(n)};return Object(l.useEffect)(()=>{if(h&&(!u||!u.id||n&&n.id!==u.id||j&&c)){if(n&&null!==n.id&&!p){const t=n.id||0;f(t)}}else!h&&(!u||u.id||j&&c)&&x()},[n]),Object(l.useEffect)(()=>{_&&g(_)},[_]),Object(l.useEffect)(()=>{u&&u.short_descr.length&&u.start_dttm.length&&u.end_dttm.length?b(!1):b(!0)},[u?u.short_descr:"",u?u.start_dttm:"",u?u.end_dttm:""]),j&&c&&O(!1),Object(A.g)(C.b,{disablePrimaryButton:d,onHandledPrimaryAction:()=>{if(h){if(u&&u.id){const t=u.id;delete u.id,delete u.created_by,delete u.changed_by,delete u.changed_on_delta_humanized,delete u.layer,w(t,u).then(t=>{t&&(a&&a(),$())})}}else u&&y(u).then(t=>{t&&(a&&a(),$())})},onHide:$,primaryButtonName:h?Object(s.e)("Save"):Object(s.e)("Add"),show:c,width:"55%",title:Object(A.g)("h4",null,h?Object(A.g)(Y,{name:"edit-alt"}):Object(A.g)(Y,{name:"plus-large"}),h?Object(s.e)("Edit annotation"):Object(s.e)("Add annotation"))},Object(A.g)(H,null,Object(A.g)("h4",null,Object(s.e)("Basic information"))),Object(A.g)(E,null,Object(A.g)("div",{className:"control-label"},Object(s.e)("Annotation name"),Object(A.g)("span",{className:"required"},"*")),Object(A.g)("input",{name:"short_descr",onChange:S,type:"text",value:null==u?void 0:u.short_descr})),Object(A.g)(E,null,Object(A.g)("div",{className:"control-label"},Object(s.e)("date"),Object(A.g)("span",{className:"required"},"*")),Object(A.g)(k.b,{format:"YYYY-MM-DD HH:mm",onChange:(t,e)=>{const n={...u,end_dttm:u&&e[1].length?m()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:u?u.short_descr:"",start_dttm:u&&e[0].length?m()(e[0]).format("YYYY-MM-DD HH:mm"):""};g(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=u&&null!=(i=u.start_dttm)&&i.length||null!=u&&null!=(r=u.end_dttm)&&r.length?[m()(u.start_dttm),m()(u.end_dttm)]:null})),Object(A.g)(H,null,Object(A.g)("h4",null,Object(s.e)("Additional information"))),Object(A.g)(E,null,Object(A.g)("div",{className:"control-label"},Object(s.e)("description")),Object(A.g)("textarea",{name:"long_descr",value:u?u.long_descr:"",placeholder:Object(s.e)("Description (this can be seen in the list)"),onChange:S})),Object(A.g)(E,null,Object(A.g)("div",{className:"control-label"},Object(s.e)("JSON metadata")),Object(A.g)(N,{onChange:t=>{const e={...u,end_dttm:u?u.end_dttm:"",json_metadata:t,short_descr:u?u.short_descr:"",start_dttm:u?u.start_dttm:""};g(e)},value:u&&u.json_metadata?u.json_metadata:"",width:"100%",height:"120px"})))});e.default=Object(x.a)((function({addDangerToast:t,addSuccessToast:e}){const{annotationLayerId:n}=Object(i.g)(),{state:{loading:a,resourceCount:u,resourceCollection:g,bulkSelectEnabled:x},fetchData:k,refreshData:S,toggleBulkSelect:C}=Object(v.f)(`annotation_layer/${n}/annotation`,Object(s.e)("annotation"),t,!1),[D,H]=Object(l.useState)(!1),[N,Y]=Object(l.useState)(""),[E,B]=Object(l.useState)(null),[T,M]=Object(l.useState)(null),L=t=>{B(t),H(!0)},I=Object(l.useCallback)((async function(){try{const t=await d.a.get({endpoint:`/api/v1/annotation_layer/${n}`});Y(t.json.result.name)}catch(e){await Object(w.a)(e).then(({error:e})=>{t(e.error||e.statusText||e)})}}),[n]);Object(l.useEffect)(()=>{I()},[I]);const q=[{id:"short_descr",desc:!0}],z=Object(l.useMemo)(()=>[{accessor:"short_descr",Header:Object(s.e)("Label")},{accessor:"long_descr",Header:Object(s.e)("Description")},{Cell:({row:{original:{start_dttm:t}}})=>m()(new Date(t)).format("ll"),Header:Object(s.e)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:t}}})=>m()(new Date(t)).format("ll"),Header:Object(s.e)("End"),accessor:"end_dttm"},{Cell:({row:{original:t}})=>{const e=[{label:"edit-action",tooltip:Object(s.e)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>L(t)},{label:"delete-action",tooltip:Object(s.e)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>M(t)}];return Object(A.g)(O.a,{actions:e})},Header:Object(s.e)("Actions"),id:"actions",disableSortBy:!0}],[!0,!0]),R=[];R.push({name:Object(A.g)(c.a.Fragment,null,Object(A.g)("i",{className:"fa fa-plus"})," ",Object(s.e)("Annotation")),buttonStyle:"primary",onClick:()=>{L(null)}}),R.push({name:Object(s.e)("Bulk select"),onClick:C,buttonStyle:"secondary","data-test":"annotation-bulk-select"});const F=b.d.div`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: 16px;
      font-size: 12px;
      font-weight: normal;
      text-decoration: underline;
    }
  `;let J=!0;try{Object(i.f)()}catch(t){J=!1}const P=Object(A.g)(h.a,{buttonStyle:"primary",onClick:()=>{L(null)}},Object(A.g)(c.a.Fragment,null,Object(A.g)("i",{className:"fa fa-plus"})," ",Object(s.e)("Annotation"))),G={message:Object(s.e)("No annotation yet"),slot:P};return Object(A.g)(c.a.Fragment,null,Object(A.g)(y.a,{name:Object(A.g)(F,null,Object(A.g)("span",null,Object(s.e)(`Annotation Layer ${N}`)),Object(A.g)("span",null,J?Object(A.g)(r.b,{to:"/annotationlayermodelview/list/"},"Back to all"):Object(A.g)("a",{href:"/annotationlayermodelview/list/"},"Back to all"))),buttons:R}),Object(A.g)(U,{addDangerToast:t,annotation:E,show:D,onAnnotationAdd:()=>S(),annnotationLayerId:n,onHide:()=>H(!1)}),T&&Object(A.g)(_.a,{description:Object(s.e)(`Are you sure you want to delete ${null==T?void 0:T.short_descr}?`),onConfirm:()=>{T&&(({id:a,short_descr:o})=>{d.a.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then(()=>{S(),M(null),e(Object(s.e)("Deleted: %s",o))},Object($.c)(e=>t(Object(s.e)("There was an issue deleting %s: %s",o,e))))})(T)},onHide:()=>M(null),open:!0,title:Object(s.e)("Delete Annotation?")}),Object(A.g)(p.a,{title:Object(s.e)("Please confirm"),description:Object(s.e)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{d.a.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${j.a.encode(o()(a).call(a,({id:t})=>t))}`}).then(({json:t={}})=>{S(),e(t.message)},Object($.c)(e=>t(Object(s.e)("There was an issue deleting the selected annotations: %s",e))))}},t=>{const e=[{key:"delete",name:Object(s.e)("Delete"),onSelect:t,type:"danger"}];return Object(A.g)(f.b,{className:"annotations-list-view",bulkActions:e,bulkSelectEnabled:x,columns:z,count:u,data:g,disableBulkSelect:C,emptyState:G,fetchData:k,initialSort:q,loading:a,pageSize:25})}))}))}}]);