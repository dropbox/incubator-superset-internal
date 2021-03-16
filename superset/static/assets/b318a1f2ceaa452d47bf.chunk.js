(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{4535:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(11),o=n.n(a),c=(n(0),n(51)),l=n(53),i=n(868),r=n(1);const s=c.c.span`
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
`,d=c.c.span`
  color: ${({theme:t})=>t.colors.grayscale.base};
`;function b({actions:t}){return Object(r.f)(s,{className:"actions"},o()(t).call(t,(t,e)=>{const n=i.a[t.icon];return t.tooltip?Object(r.f)(l.a,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},Object(r.f)(d,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick},Object(r.f)(n,null))):Object(r.f)(d,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,key:e},Object(r.f)(n,null))}))}},4930:function(t,e,n){"use strict";n.r(e);n(39);var a=n(11),o=n.n(a),c=n(0),l=n.n(c),i=n(500),r=n(506),s=n(15),d=n(68),b=n(51),u=n(35),m=n.n(u),j=n(97),O=n.n(j),h=n(4535),f=n(42),p=n(1254),g=n(1256),_=n(4529),y=n(902),w=n(71),x=n(121),v=n(518),$=n(140),k=n(4692),S=n(45),C=n(101),D=n(215),A=n(1);const H=b.c.div`
  margin: ${({theme:t})=>2*t.gridUnit}px auto
    ${({theme:t})=>4*t.gridUnit}px auto;
`,N=Object(b.c)(D.d)`
  border-radius: ${({theme:t})=>t.borderRadius}px;
  border: 1px solid ${({theme:t})=>t.colors.secondary.light2};
`,Y=Object(b.c)(S.a)`
  margin: auto ${({theme:t})=>2*t.gridUnit}px auto 0;
`,E=b.c.div`
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
`;var U=Object(x.a)(({addDangerToast:t,annnotationLayerId:e,annotation:n=null,onAnnotationAdd:a,onHide:o,show:l})=>{const[i,r]=Object(c.useState)(!0),[d,b]=Object(c.useState)(null),[u,j]=Object(c.useState)(!0),O=null!==n,{state:{loading:h,resource:f},fetchResource:p,createResource:g,updateResource:_}=Object(v.f)(`annotation_layer/${e}/annotation`,Object(s.e)("annotation"),t),y=()=>{b({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},w=()=>{j(!0),y(),o()},x=t=>{const{target:e}=t,n={...d,end_dttm:d?d.end_dttm:"",short_descr:d?d.short_descr:"",start_dttm:d?d.start_dttm:""};n[e.name]=e.value,b(n)};return Object(c.useEffect)(()=>{if(O&&(!d||!d.id||n&&n.id!==d.id||u&&l)){if(n&&null!==n.id&&!h){const t=n.id||0;p(t)}}else!O&&(!d||d.id||u&&l)&&y()},[n]),Object(c.useEffect)(()=>{f&&b(f)},[f]),Object(c.useEffect)(()=>{d&&d.short_descr.length&&d.start_dttm.length&&d.end_dttm.length?r(!1):r(!0)},[d?d.short_descr:"",d?d.start_dttm:"",d?d.end_dttm:""]),u&&l&&j(!1),Object(A.f)(C.b,{disablePrimaryButton:i,onHandledPrimaryAction:()=>{if(O){if(d&&d.id){const t=d.id;delete d.id,delete d.created_by,delete d.changed_by,delete d.changed_on_delta_humanized,delete d.layer,_(t,d).then(t=>{t&&(a&&a(),w())})}}else d&&g(d).then(t=>{t&&(a&&a(),w())})},onHide:w,primaryButtonName:O?Object(s.e)("Save"):Object(s.e)("Add"),show:l,width:"55%",title:Object(A.f)("h4",null,O?Object(A.f)(Y,{name:"edit-alt"}):Object(A.f)(Y,{name:"plus-large"}),O?Object(s.e)("Edit annotation"):Object(s.e)("Add annotation"))},Object(A.f)(H,null,Object(A.f)("h4",null,Object(s.e)("Basic information"))),Object(A.f)(E,null,Object(A.f)("div",{className:"control-label"},Object(s.e)("Annotation name"),Object(A.f)("span",{className:"required"},"*")),Object(A.f)("input",{name:"short_descr",onChange:x,type:"text",value:null==d?void 0:d.short_descr})),Object(A.f)(E,null,Object(A.f)("div",{className:"control-label"},Object(s.e)("date"),Object(A.f)("span",{className:"required"},"*")),Object(A.f)(k.a,{format:"YYYY-MM-DD hh:mm a",onChange:(t,e)=>{const n={...d,end_dttm:d&&e[1].length?m()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:d?d.short_descr:"",start_dttm:d&&e[0].length?m()(e[0]).format("YYYY-MM-DD HH:mm"):""};b(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:d&&(null!=d&&d.start_dttm.length||null!=d&&d.end_dttm.length)?[m()(d.start_dttm),m()(d.end_dttm)]:null})),Object(A.f)(H,null,Object(A.f)("h4",null,Object(s.e)("Additional information"))),Object(A.f)(E,null,Object(A.f)("div",{className:"control-label"},Object(s.e)("description")),Object(A.f)("textarea",{name:"long_descr",value:d?d.long_descr:"",placeholder:Object(s.e)("Description (this can be seen in the list)"),onChange:x})),Object(A.f)(E,null,Object(A.f)("div",{className:"control-label"},Object(s.e)("JSON metadata")),Object(A.f)(N,{onChange:t=>{const e={...d,end_dttm:d?d.end_dttm:"",json_metadata:t,short_descr:d?d.short_descr:"",start_dttm:d?d.start_dttm:""};b(e)},value:d&&d.json_metadata?d.json_metadata:"",width:"100%",height:"120px"})))});e.default=Object(x.a)((function({addDangerToast:t,addSuccessToast:e}){const{annotationLayerId:n}=Object(i.g)(),{state:{loading:a,resourceCount:u,resourceCollection:j,bulkSelectEnabled:x},fetchData:k,refreshData:S,toggleBulkSelect:C}=Object(v.e)(`annotation_layer/${n}/annotation`,Object(s.e)("annotation"),t,!1),[D,H]=Object(c.useState)(!1),[N,Y]=Object(c.useState)(""),[E,B]=Object(c.useState)(null),[T,M]=Object(c.useState)(null),L=t=>{B(t),H(!0)},I=Object(c.useCallback)((async function(){try{const t=await d.a.get({endpoint:`/api/v1/annotation_layer/${n}`});Y(t.json.result.name)}catch(e){await Object(w.a)(e).then(({error:e})=>{t(e.error||e.statusText||e)})}}),[n]);Object(c.useEffect)(()=>{I()},[I]);const q=[{id:"short_descr",desc:!0}],z=Object(c.useMemo)(()=>[{accessor:"short_descr",Header:Object(s.e)("Label")},{accessor:"long_descr",Header:Object(s.e)("Description")},{Cell:({row:{original:{start_dttm:t}}})=>m()(new Date(t)).format("ll"),Header:Object(s.e)("Start"),accessor:"start_dttm"},{Cell:({row:{original:{end_dttm:t}}})=>m()(new Date(t)).format("ll"),Header:Object(s.e)("End"),accessor:"end_dttm"},{Cell:({row:{original:t}})=>{const e=[{label:"edit-action",tooltip:Object(s.e)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>L(t)},{label:"delete-action",tooltip:Object(s.e)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>M(t)}];return Object(A.f)(h.a,{actions:e})},Header:Object(s.e)("Actions"),id:"actions",disableSortBy:!0}],[!0,!0]),R=[];R.push({name:Object(A.f)(l.a.Fragment,null,Object(A.f)("i",{className:"fa fa-plus"})," ",Object(s.e)("Annotation")),buttonStyle:"primary",onClick:()=>{L(null)}}),R.push({name:Object(s.e)("Bulk select"),onClick:C,buttonStyle:"secondary","data-test":"annotation-bulk-select"});const F=b.c.div`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: 16px;
      font-size: 12px;
      font-weight: normal;
      text-decoration: underline;
    }
  `;let J=!0;try{Object(i.f)()}catch(t){J=!1}const P=Object(A.f)(f.a,{buttonStyle:"primary",onClick:()=>{L(null)}},Object(A.f)(l.a.Fragment,null,Object(A.f)("i",{className:"fa fa-plus"})," ",Object(s.e)("Annotation"))),G={message:Object(s.e)("No annotation yet"),slot:P};return Object(A.f)(l.a.Fragment,null,Object(A.f)(y.a,{name:Object(A.f)(F,null,Object(A.f)("span",null,Object(s.e)(`Annotation Layer ${N}`)),Object(A.f)("span",null,J?Object(A.f)(r.b,{to:"/annotationlayermodelview/list/"},"Back to all"):Object(A.f)("a",{href:"/annotationlayermodelview/list/"},"Back to all"))),buttons:R}),Object(A.f)(U,{addDangerToast:t,annotation:E,show:D,onAnnotationAdd:()=>S(),annnotationLayerId:n,onHide:()=>H(!1)}),T&&Object(A.f)(g.a,{description:Object(s.e)(`Are you sure you want to delete ${null==T?void 0:T.short_descr}?`),onConfirm:()=>{T&&(({id:a,short_descr:o})=>{d.a.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/${a}`}).then(()=>{S(),M(null),e(Object(s.e)("Deleted: %s",o))},Object($.c)(e=>t(Object(s.e)("There was an issue deleting %s: %s",o,e))))})(T)},onHide:()=>M(null),open:!0,title:Object(s.e)("Delete Annotation?")}),Object(A.f)(p.a,{title:Object(s.e)("Please confirm"),description:Object(s.e)("Are you sure you want to delete the selected annotations?"),onConfirm:a=>{d.a.delete({endpoint:`/api/v1/annotation_layer/${n}/annotation/?q=${O.a.encode(o()(a).call(a,({id:t})=>t))}`}).then(({json:t={}})=>{S(),e(t.message)},Object($.c)(e=>t(Object(s.e)("There was an issue deleting the selected annotations: %s",e))))}},t=>{const e=[{key:"delete",name:Object(s.e)("Delete"),onSelect:t,type:"danger"}];return Object(A.f)(_.b,{className:"annotations-list-view",bulkActions:e,bulkSelectEnabled:x,columns:z,count:u,data:j,disableBulkSelect:C,emptyState:G,fetchData:k,initialSort:q,loading:a,pageSize:25})}))}))}}]);