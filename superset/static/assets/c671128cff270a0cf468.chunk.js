"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),s=a(51995),n=a(55867),r=a(35932),i=a(74069),o=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=s.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,h=s.iK.div`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;

  & > div {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }

    i {
      margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    }
  }
`,m=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:s,confirmOverwriteMessage:m,onModelImport:g,show:y,onHide:Z,passwordFields:b=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:w=[],setSSHTunnelPasswordFields:S=(()=>{}),sshTunnelPrivateKeyFields:f=[],setSSHTunnelPrivateKeyFields:_=(()=>{}),sshTunnelPrivateKeyPasswordFields:k=[],setSSHTunnelPrivateKeyPasswordFields:x=(()=>{})}=e;const[P,C]=(0,l.useState)(!0),[N,$]=(0,l.useState)({}),[T,D]=(0,l.useState)(!1),[H,E]=(0,l.useState)(!1),[F,I]=(0,l.useState)([]),[O,A]=(0,l.useState)(!1),[R,B]=(0,l.useState)(),[z,K]=(0,l.useState)({}),[M,U]=(0,l.useState)({}),[q,V]=(0,l.useState)({}),L=()=>{I([]),v([]),$({}),D(!1),E(!1),A(!1),B(""),S([]),_([]),x([]),K({}),U({}),V({})},{state:{alreadyExists:j,passwordsNeeded:W,sshPasswordNeeded:Y,sshPrivateKeyNeeded:X,sshPrivateKeyPasswordNeeded:J},importResource:G}=(0,d.PW)(t,a,(e=>{B(e)}));(0,l.useEffect)((()=>{v(W),W.length>0&&A(!1)}),[W,v]),(0,l.useEffect)((()=>{D(j.length>0),j.length>0&&A(!1)}),[j,D]),(0,l.useEffect)((()=>{S(Y),Y.length>0&&A(!1)}),[Y,S]),(0,l.useEffect)((()=>{_(X),X.length>0&&A(!1)}),[X,_]),(0,l.useEffect)((()=>{x(J),J.length>0&&A(!1)}),[J,x]);return P&&y&&C(!1),(0,c.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===F.length||T&&!H||O,onHandledPrimaryAction:()=>{var e;(null==(e=F[0])?void 0:e.originFileObj)instanceof File&&(A(!0),G(F[0].originFileObj,N,z,M,q,H).then((e=>{e&&(L(),g())})))},onHide:()=>{C(!0),Z(),L()},primaryButtonName:T?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:T?"danger":"primary",width:"750px",show:y,title:(0,c.tZ)("h4",null,(0,n.t)("Import %s",a))},(0,c.tZ)(h,null,(0,c.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:F,onChange:e=>{I([{...e.file,status:"done"}])},onRemove:e=>(I(F.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:O},(0,c.tZ)(r.Z,{loading:O},(0,n.t)("Select file")))),R&&(0,c.tZ)(u.Z,{errorMessage:R,showDbInstallInstructions:b.length>0||w.length>0||f.length>0||k.length>0}),(()=>{if(0===b.length&&0===w.length&&0===f.length&&0===k.length)return null;const e=[...new Set([...b,...w,...f,...k])];return(0,c.tZ)(l.Fragment,null,(0,c.tZ)("h5",null,(0,n.t)("Database passwords")),(0,c.tZ)(p,null,s),e.map((e=>(0,c.tZ)(l.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,c.tZ)(h,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:N[e],onChange:t=>$({...N,[e]:t.target.value})})),(null==w?void 0:w.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:z[e],onChange:t=>K({...z,[e]:t.target.value})})),(null==f?void 0:f.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:M[e],onChange:t=>U({...M,[e]:t.target.value})})),(null==k?void 0:k.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:q[e],onChange:t=>V({...q,[e]:t.target.value})}))))))})(),T?(0,c.tZ)(l.Fragment,null,(0,c.tZ)(h,null,(0,c.tZ)("div",{className:"confirm-overwrite"},m),(0,c.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(l.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},52438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var l=a(78580),s=a.n(l),n=a(75049),r=a(51995),i=a(55867),o=a(93185),d=a(31069),u=a(67294),c=a(16550),p=a(15926),h=a.n(p),m=a(40768),g=a(34858),y=a(19259),Z=a(77775),b=a(17198),v=a(32228),w=a(18782),S=a(38703),f=a(86074),_=a(14114),k=a(58593),x=a(70163),P=a(34581),C=a(79789),N=a(8272),$=a(27989),T=a(91877),D=a(86057),H=a(22318),E=a(85931),F=a(33228),I=a(49238),O=a(9875),A=a(74069),R=a(11965);const B=e=>{let{dataset:t,onHide:a,onDuplicate:l}=e;const[s,n]=(0,u.useState)(!1),[r,o]=(0,u.useState)(!1),[d,c]=(0,u.useState)(""),p=()=>{l(d)};return(0,u.useEffect)((()=>{c(""),n(null!==t)}),[t]),(0,R.tZ)(A.Z,{show:s,onHide:a,title:(0,i.t)("Duplicate dataset"),disablePrimaryButton:r,onHandledPrimaryAction:p,primaryButtonName:(0,i.t)("Duplicate")},(0,R.tZ)(I.lX,{htmlFor:"duplicate"},(0,i.t)("New dataset name")),(0,R.tZ)(O.II,{type:"text",id:"duplicate",autoComplete:"off",value:d,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";c(a),o(""===a)},onPressEnter:p}))},z=(0,n.I)().get("dataset.delete.related"),K=r.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,M=r.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
        }
      }
    }
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    .ant-menu-item:hover {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
      cursor: default;
    }
    &::after {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    }
  }
`,U=(0,_.ZP)((e=>{let{addDangerToast:t,addSuccessToast:a,user:l}=e;const n=(0,c.k6)(),{state:{loading:r,resourceCount:p,resourceCollection:_,bulkSelectEnabled:I},hasPerm:O,fetchData:A,toggleBulkSelect:U,refreshData:q}=(0,g.Yi)("dataset",(0,i.t)("dataset"),t),[V,L]=(0,u.useState)(null),[j,W]=(0,u.useState)(null),[Y,X]=(0,u.useState)(null),[J,G]=(0,u.useState)(!1),[Q,ee]=(0,u.useState)([]),[te,ae]=(0,u.useState)(!1),[le,se]=(0,u.useState)([]),[ne,re]=(0,u.useState)([]),[ie,oe]=(0,u.useState)([]),de=O("can_write"),ue=O("can_write"),ce=O("can_write"),pe=O("can_duplicate"),he=O("can_export")&&(0,T.c)(o.T.VERSIONED_EXPORT),me=F.dY,ge=(0,u.useCallback)((e=>{let{id:a}=e;d.Z.get({endpoint:`/api/v1/dataset/${a}`}).then((e=>{let{json:t={}}=e;const a=t.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));t.result.columns=[...a],W(t.result)})).catch((()=>{t((0,i.t)("An error occurred while fetching dataset related data"))}))}),[t]),ye=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,v.Z)("dataset",t,(()=>{ae(!1)})),ae(!0)},Ze=(0,u.useMemo)((()=>[{Cell:e=>{let{row:{original:{kind:t}}}=e;return"physical"===t?(0,R.tZ)(k.u,{id:"physical-dataset-tooltip",title:(0,i.t)("Physical dataset")},(0,R.tZ)(x.Z.DatasetPhysical,null)):(0,R.tZ)(k.u,{id:"virtual-dataset-tooltip",title:(0,i.t)("Virtual dataset")},(0,R.tZ)(x.Z.DatasetVirtual,null))},accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:e=>{let{row:{original:{extra:t,table_name:a,description:l,explore_url:s}}}=e;const n=(0,R.tZ)(E.m,{to:s},a);try{const e=JSON.parse(t);return(0,R.tZ)(K,null,(null==e?void 0:e.certification)&&(0,R.tZ)(C.Z,{certifiedBy:e.certification.certified_by,details:e.certification.details,size:"l"}),(null==e?void 0:e.warning_markdown)&&(0,R.tZ)(D.Z,{warningMarkdown:e.warning_markdown,size:"l"}),n,l&&(0,R.tZ)(N.Z,{tooltip:l,viewBox:"0 -1 24 24"}))}catch{return n}},Header:(0,i.t)("Name"),accessor:"table_name"},{Cell:e=>{let{row:{original:{kind:t}}}=e;return"physical"===t?(0,i.t)("Physical"):(0,i.t)("Virtual")},Header:(0,i.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,i.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,i.t)("Schema"),accessor:"schema",size:"lg"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,R.tZ)("span",{className:"no-wrap"},t)},Header:(0,i.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{changed_by_name:t}}}=e;return t},Header:(0,i.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,R.tZ)(P.Z,{users:t})},Header:(0,i.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:e=>{var t;let{row:{original:a}}=e;const n=s()(t=a.owners.map((e=>e.id))).call(t,l.userId)||(0,H.i5)(l);return de||ue||he||pe?(0,R.tZ)(M,{className:"actions"},ue&&(0,R.tZ)(k.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return e=a,d.Z.get({endpoint:`/api/v1/dataset/${e.id}/related_objects`}).then((t=>{let{json:a={}}=t;L({...e,chart_count:a.charts.count,dashboard_count:a.dashboards.count})})).catch((0,m.v$)((e=>(0,i.t)("An error occurred while fetching dataset related data: %s",e))));var e}},(0,R.tZ)(x.Z.Trash,null))),he&&(0,R.tZ)(k.u,{id:"export-action-tooltip",title:(0,i.t)("Export"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ye([a])},(0,R.tZ)(x.Z.Share,null))),de&&(0,R.tZ)(k.u,{id:"edit-action-tooltip",title:n?(0,i.t)("Edit"):(0,i.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:n?"action-button":"disabled",onClick:n?()=>ge(a):void 0},(0,R.tZ)(x.Z.EditAlt,null))),pe&&"virtual"===a.kind&&(0,R.tZ)(k.u,{id:"duplicate-action-tooltop",title:(0,i.t)("Duplicate"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{X(a)}},(0,R.tZ)(x.Z.Copy,null)))):null},Header:(0,i.t)("Actions"),id:"actions",hidden:!de&&!ue&&!pe,disableSortBy:!0}]),[de,ue,he,ge,pe,l]),be=(0,u.useMemo)((()=>[{Header:(0,i.t)("Owner"),key:"owner",id:"owners",input:"select",operator:w.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,m.tm)("dataset","owners",(0,m.v$)((e=>(0,i.t)("An error occurred while fetching dataset owner values: %s",e))),l),paginate:!0},{Header:(0,i.t)("Database"),key:"database",id:"database",input:"select",operator:w.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,m.tm)("dataset","database",(0,m.v$)((e=>(0,i.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,i.t)("Schema"),key:"schema",id:"schema",input:"select",operator:w.p.equals,unfilteredLabel:"All",fetchSelects:(0,m.wk)("dataset","schema",(0,m.v$)((e=>(0,i.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,i.t)("Type"),key:"sql",id:"sql",input:"select",operator:w.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:(0,i.t)("Virtual"),value:!1},{label:(0,i.t)("Physical"),value:!0}]},{Header:(0,i.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:w.p.datasetIsCertified,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]},{Header:(0,i.t)("Search"),key:"search",id:"table_name",input:"search",operator:w.p.contains}]),[l]),ve={activeChild:"Datasets",name:(0,i.t)("Datasets")},we=[];return(ue||he)&&we.push({name:(0,i.t)("Bulk select"),onClick:U,buttonStyle:"secondary"}),ce&&(we.push({name:(0,R.tZ)(u.Fragment,null,(0,R.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Dataset")," "),onClick:()=>{n.push("/dataset/add/")},buttonStyle:"primary"}),(0,T.c)(o.T.VERSIONED_EXPORT)&&we.push({name:(0,R.tZ)(k.u,{id:"import-tooltip",title:(0,i.t)("Import datasets"),placement:"bottomRight"},(0,R.tZ)(x.Z.Import,null)),buttonStyle:"link",onClick:()=>{G(!0)}})),ve.buttons=we,(0,R.tZ)(u.Fragment,null,(0,R.tZ)(f.Z,ve),V&&(0,R.tZ)(b.Z,{description:(0,R.tZ)(u.Fragment,null,(0,R.tZ)("p",null,(0,i.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",V.table_name,V.chart_count,V.dashboard_count)),z&&(0,R.tZ)(z,{dataset:V})),onConfirm:()=>{V&&(e=>{let{id:l,table_name:s}=e;d.Z.delete({endpoint:`/api/v1/dataset/${l}`}).then((()=>{q(),L(null),a((0,i.t)("Deleted: %s",s))}),(0,m.v$)((e=>t((0,i.t)("There was an issue deleting %s: %s",s,e)))))})(V)},onHide:()=>{L(null)},open:!0,title:(0,i.t)("Delete Dataset?")}),j&&(0,R.tZ)(Z.W,{datasource:j,onDatasourceSave:q,onHide:()=>{W(null)},show:!0}),(0,R.tZ)(B,{dataset:Y,onHide:()=>{X(null)},onDuplicate:e=>{null===Y&&t((0,i.t)("There was an issue duplicating the dataset.")),d.Z.post({endpoint:"/api/v1/dataset/duplicate",jsonPayload:{base_model_id:null==Y?void 0:Y.id,table_name:e}}).then((()=>{X(null),q()}),(0,m.v$)((e=>t((0,i.t)("There was an issue duplicating the selected datasets: %s",e)))))}}),(0,R.tZ)(y.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected datasets?"),onConfirm:e=>{d.Z.delete({endpoint:`/api/v1/dataset/?q=${h().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;q(),a(t.message)}),(0,m.v$)((e=>t((0,i.t)("There was an issue deleting the selected datasets: %s",e)))))}},(e=>{const t=[];return ue&&t.push({key:"delete",name:(0,i.t)("Delete"),onSelect:e,type:"danger"}),he&&t.push({key:"export",name:(0,i.t)("Export"),type:"primary",onSelect:ye}),(0,R.tZ)(w.Z,{className:"dataset-list-view",columns:Ze,data:_,count:p,pageSize:F.IV,fetchData:A,filters:be,loading:r,initialSort:me,bulkActions:t,bulkSelectEnabled:I,disableBulkSelect:U,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,i.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,i.t)("%s Selected (Physical)",e.length,a):(0,i.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,i.t)("0 Selected")}})})),(0,R.tZ)($.Z,{resourceName:"dataset",resourceLabel:(0,i.t)("dataset"),passwordsNeededMessage:F.iX,confirmOverwriteMessage:F.mI,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{G(!1),q(),a((0,i.t)("Dataset imported"))},show:J,onHide:()=>{G(!1)},passwordFields:Q,setPasswordFields:ee,sshTunnelPasswordFields:le,setSSHTunnelPasswordFields:se,sshTunnelPrivateKeyFields:ne,setSSHTunnelPrivateKeyFields:re,sshTunnelPrivateKeyPasswordFields:ie,setSSHTunnelPrivateKeyPasswordFields:oe}),te&&(0,R.tZ)(S.Z,null))}))}}]);
//# sourceMappingURL=c671128cff270a0cf468.chunk.js.map