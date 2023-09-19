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
`,m=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:s,confirmOverwriteMessage:m,onModelImport:g,show:y,onHide:Z,passwordFields:b=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:w=[],setSSHTunnelPasswordFields:S=(()=>{}),sshTunnelPrivateKeyFields:f=[],setSSHTunnelPrivateKeyFields:_=(()=>{}),sshTunnelPrivateKeyPasswordFields:k=[],setSSHTunnelPrivateKeyPasswordFields:x=(()=>{})}=e;const[P,N]=(0,l.useState)(!0),[T,C]=(0,l.useState)({}),[$,E]=(0,l.useState)(!1),[D,H]=(0,l.useState)(!1),[F,A]=(0,l.useState)([]),[I,O]=(0,l.useState)(!1),[R,U]=(0,l.useState)(),[B,z]=(0,l.useState)({}),[K,M]=(0,l.useState)({}),[V,q]=(0,l.useState)({}),L=()=>{A([]),v([]),C({}),E(!1),H(!1),O(!1),U(""),S([]),_([]),x([]),z({}),M({}),q({})},{state:{alreadyExists:j,passwordsNeeded:W,sshPasswordNeeded:Y,sshPrivateKeyNeeded:X,sshPrivateKeyPasswordNeeded:J},importResource:G}=(0,d.PW)(t,a,(e=>{U(e)}));(0,l.useEffect)((()=>{v(W),W.length>0&&O(!1)}),[W,v]),(0,l.useEffect)((()=>{E(j.length>0),j.length>0&&O(!1)}),[j,E]),(0,l.useEffect)((()=>{S(Y),Y.length>0&&O(!1)}),[Y,S]),(0,l.useEffect)((()=>{_(X),X.length>0&&O(!1)}),[X,_]),(0,l.useEffect)((()=>{x(J),J.length>0&&O(!1)}),[J,x]);return P&&y&&N(!1),(0,c.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===F.length||$&&!D||I,onHandledPrimaryAction:()=>{var e;(null==(e=F[0])?void 0:e.originFileObj)instanceof File&&(O(!0),G(F[0].originFileObj,T,B,K,V,D).then((e=>{e&&(L(),g())})))},onHide:()=>{N(!0),Z(),L()},primaryButtonName:$?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:$?"danger":"primary",width:"750px",show:y,title:(0,c.tZ)("h4",null,(0,n.t)("Import %s",a))},(0,c.tZ)(h,null,(0,c.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:F,onChange:e=>{A([{...e.file,status:"done"}])},onRemove:e=>(A(F.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:I},(0,c.tZ)(r.Z,{loading:I},(0,n.t)("Select file")))),R&&(0,c.tZ)(u.Z,{errorMessage:R,showDbInstallInstructions:b.length>0||w.length>0||f.length>0||k.length>0}),(()=>{if(0===b.length&&0===w.length&&0===f.length&&0===k.length)return null;const e=[...new Set([...b,...w,...f,...k])];return(0,c.tZ)(l.Fragment,null,(0,c.tZ)("h5",null,(0,n.t)("Database passwords")),(0,c.tZ)(p,null,s),e.map((e=>(0,c.tZ)(l.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,c.tZ)(h,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:T[e],onChange:t=>C({...T,[e]:t.target.value})})),(null==w?void 0:w.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:B[e],onChange:t=>z({...B,[e]:t.target.value})})),(null==f?void 0:f.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:K[e],onChange:t=>M({...K,[e]:t.target.value})})),(null==k?void 0:k.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:V[e],onChange:t=>q({...V,[e]:t.target.value})}))))))})(),$?(0,c.tZ)(l.Fragment,null,(0,c.tZ)(h,null,(0,c.tZ)("div",{className:"confirm-overwrite"},m),(0,c.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";H(l.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},52438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var l=a(78580),s=a.n(l),n=a(75049),r=a(51995),i=a(55867),o=a(93185),d=a(31069),u=a(67294),c=a(16550),p=a(73727),h=a(15926),m=a.n(h),g=a(40768),y=a(34858),Z=a(19259),b=a(77775),v=a(17198),w=a(32228),S=a(18782),f=a(38703),_=a(86074),k=a(14114),x=a(58593),P=a(70163),N=a(34581),T=a(79789),C=a(8272),$=a(27989),E=a(86057),D=a(22318),H=a(85931),F=a(33228),A=a(49238),I=a(9875),O=a(74069),R=a(11965);const U=e=>{let{dataset:t,onHide:a,onDuplicate:l}=e;const[s,n]=(0,u.useState)(!1),[r,o]=(0,u.useState)(!1),[d,c]=(0,u.useState)(""),p=()=>{l(d)};return(0,u.useEffect)((()=>{c(""),n(null!==t)}),[t]),(0,R.tZ)(O.Z,{show:s,onHide:a,title:(0,i.t)("Duplicate dataset"),disablePrimaryButton:r,onHandledPrimaryAction:p,primaryButtonName:(0,i.t)("Duplicate")},(0,R.tZ)(A.lX,{htmlFor:"duplicate"},(0,i.t)("New dataset name")),(0,R.tZ)(I.II,{type:"text",id:"duplicate",autoComplete:"off",value:d,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";c(a),o(""===a)},onPressEnter:p}))};var B=a(28216);const z=(0,n.I)().get("dataset.delete.related"),K=r.iK.div`
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
`,V=(0,k.ZP)((e=>{let{addDangerToast:t,addSuccessToast:a,user:l}=e;const n=(0,c.k6)(),{state:{loading:r,resourceCount:h,resourceCollection:k,bulkSelectEnabled:A},hasPerm:I,fetchData:O,toggleBulkSelect:V,refreshData:q}=(0,y.Yi)("dataset",(0,i.t)("dataset"),t),[L,j]=(0,u.useState)(null),[W,Y]=(0,u.useState)(null),[X,J]=(0,u.useState)(null),[G,Q]=(0,u.useState)(!1),[ee,te]=(0,u.useState)([]),[ae,le]=(0,u.useState)(!1),[se,ne]=(0,u.useState)([]),[re,ie]=(0,u.useState)([]),[oe,de]=(0,u.useState)([]),ue=(0,B.v9)((e=>{var t,a;return(null==(t=e.common)||null==(a=t.conf)?void 0:a.PREVENT_UNSAFE_DEFAULT_URLS_ON_DATASET)||!1})),ce=I("can_write"),pe=I("can_write"),he=I("can_write"),me=I("can_duplicate"),ge=I("can_export")&&(0,o.cr)(o.TT.VERSIONED_EXPORT),ye=F.dY,Ze=(0,u.useCallback)((e=>{let{id:a}=e;d.Z.get({endpoint:`/api/v1/dataset/${a}`}).then((e=>{let{json:t={}}=e;const a=t.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));t.result.columns=[...a],Y(t.result)})).catch((()=>{t((0,i.t)("An error occurred while fetching dataset related data"))}))}),[t]),be=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,w.Z)("dataset",t,(()=>{le(!1)})),le(!0)},ve=(0,u.useMemo)((()=>[{Cell:e=>{let{row:{original:{kind:t}}}=e;return"physical"===t?(0,R.tZ)(x.u,{id:"physical-dataset-tooltip",title:(0,i.t)("Physical dataset")},(0,R.tZ)(P.Z.DatasetPhysical,null)):(0,R.tZ)(x.u,{id:"virtual-dataset-tooltip",title:(0,i.t)("Virtual dataset")},(0,R.tZ)(P.Z.DatasetVirtual,null))},accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:e=>{let t,{row:{original:{extra:a,table_name:l,description:s,explore_url:n}}}=e;t=ue?(0,R.tZ)(p.rU,{to:n},l):(0,R.tZ)(H.m,{to:n},l);try{const e=JSON.parse(a);return(0,R.tZ)(K,null,(null==e?void 0:e.certification)&&(0,R.tZ)(T.Z,{certifiedBy:e.certification.certified_by,details:e.certification.details,size:"l"}),(null==e?void 0:e.warning_markdown)&&(0,R.tZ)(E.Z,{warningMarkdown:e.warning_markdown,size:"l"}),t,s&&(0,R.tZ)(C.Z,{tooltip:s,viewBox:"0 -1 24 24"}))}catch{return t}},Header:(0,i.t)("Name"),accessor:"table_name"},{Cell:e=>{let{row:{original:{kind:t}}}=e;return"physical"===t?(0,i.t)("Physical"):(0,i.t)("Virtual")},Header:(0,i.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,i.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,i.t)("Schema"),accessor:"schema",size:"lg"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,R.tZ)("span",{className:"no-wrap"},t)},Header:(0,i.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{changed_by_name:t}}}=e;return t},Header:(0,i.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,R.tZ)(N.Z,{users:t})},Header:(0,i.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:e=>{var t;let{row:{original:a}}=e;const n=s()(t=a.owners.map((e=>e.id))).call(t,l.userId)||(0,D.i5)(l);return ce||pe||ge||me?(0,R.tZ)(M,{className:"actions"},pe&&(0,R.tZ)(x.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return e=a,d.Z.get({endpoint:`/api/v1/dataset/${e.id}/related_objects`}).then((t=>{let{json:a={}}=t;j({...e,chart_count:a.charts.count,dashboard_count:a.dashboards.count})})).catch((0,g.v$)((e=>(0,i.t)("An error occurred while fetching dataset related data: %s",e))));var e}},(0,R.tZ)(P.Z.Trash,null))),ge&&(0,R.tZ)(x.u,{id:"export-action-tooltip",title:(0,i.t)("Export"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>be([a])},(0,R.tZ)(P.Z.Share,null))),ce&&(0,R.tZ)(x.u,{id:"edit-action-tooltip",title:n?(0,i.t)("Edit"):(0,i.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:n?"action-button":"disabled",onClick:n?()=>Ze(a):void 0},(0,R.tZ)(P.Z.EditAlt,null))),me&&"virtual"===a.kind&&(0,R.tZ)(x.u,{id:"duplicate-action-tooltop",title:(0,i.t)("Duplicate"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{J(a)}},(0,R.tZ)(P.Z.Copy,null)))):null},Header:(0,i.t)("Actions"),id:"actions",hidden:!ce&&!pe&&!me,disableSortBy:!0}]),[ce,pe,ge,Ze,me,l]),we=(0,u.useMemo)((()=>[{Header:(0,i.t)("Search"),key:"search",id:"table_name",input:"search",operator:S.p.contains},{Header:(0,i.t)("Owner"),key:"owner",id:"owners",input:"select",operator:S.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("dataset","owners",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching dataset owner values: %s",e))),l),paginate:!0},{Header:(0,i.t)("Database"),key:"database",id:"database",input:"select",operator:S.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("dataset","database",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,i.t)("Schema"),key:"schema",id:"schema",input:"select",operator:S.p.equals,unfilteredLabel:"All",fetchSelects:(0,g.wk)("dataset","schema",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,i.t)("Type"),key:"sql",id:"sql",input:"select",operator:S.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:(0,i.t)("Virtual"),value:!1},{label:(0,i.t)("Physical"),value:!0}]},{Header:(0,i.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:S.p.datasetIsCertified,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]}]),[l]),Se={activeChild:"Datasets",name:(0,i.t)("Datasets")},fe=[];return(pe||ge)&&fe.push({name:(0,i.t)("Bulk select"),onClick:V,buttonStyle:"secondary"}),he&&(fe.push({name:(0,R.tZ)(u.Fragment,null,(0,R.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Dataset")," "),onClick:()=>{n.push("/dataset/add/")},buttonStyle:"primary"}),(0,o.cr)(o.TT.VERSIONED_EXPORT)&&fe.push({name:(0,R.tZ)(x.u,{id:"import-tooltip",title:(0,i.t)("Import datasets"),placement:"bottomRight"},(0,R.tZ)(P.Z.Import,null)),buttonStyle:"link",onClick:()=>{Q(!0)}})),Se.buttons=fe,(0,R.tZ)(u.Fragment,null,(0,R.tZ)(_.Z,Se),L&&(0,R.tZ)(v.Z,{description:(0,R.tZ)(u.Fragment,null,(0,R.tZ)("p",null,(0,i.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",L.table_name,L.chart_count,L.dashboard_count)),z&&(0,R.tZ)(z,{dataset:L})),onConfirm:()=>{L&&(e=>{let{id:l,table_name:s}=e;d.Z.delete({endpoint:`/api/v1/dataset/${l}`}).then((()=>{q(),j(null),a((0,i.t)("Deleted: %s",s))}),(0,g.v$)((e=>t((0,i.t)("There was an issue deleting %s: %s",s,e)))))})(L)},onHide:()=>{j(null)},open:!0,title:(0,i.t)("Delete Dataset?")}),W&&(0,R.tZ)(b.W,{datasource:W,onDatasourceSave:q,onHide:()=>{Y(null)},show:!0}),(0,R.tZ)(U,{dataset:X,onHide:()=>{J(null)},onDuplicate:e=>{null===X&&t((0,i.t)("There was an issue duplicating the dataset.")),d.Z.post({endpoint:"/api/v1/dataset/duplicate",jsonPayload:{base_model_id:null==X?void 0:X.id,table_name:e}}).then((()=>{J(null),q()}),(0,g.v$)((e=>t((0,i.t)("There was an issue duplicating the selected datasets: %s",e)))))}}),(0,R.tZ)(Z.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected datasets?"),onConfirm:e=>{d.Z.delete({endpoint:`/api/v1/dataset/?q=${m().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;q(),a(t.message)}),(0,g.v$)((e=>t((0,i.t)("There was an issue deleting the selected datasets: %s",e)))))}},(e=>{const t=[];return pe&&t.push({key:"delete",name:(0,i.t)("Delete"),onSelect:e,type:"danger"}),ge&&t.push({key:"export",name:(0,i.t)("Export"),type:"primary",onSelect:be}),(0,R.tZ)(S.Z,{className:"dataset-list-view",columns:ve,data:k,count:h,pageSize:F.IV,fetchData:O,filters:we,loading:r,initialSort:ye,bulkActions:t,bulkSelectEnabled:A,disableBulkSelect:V,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,i.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,i.t)("%s Selected (Physical)",e.length,a):(0,i.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,i.t)("0 Selected")}})})),(0,R.tZ)($.Z,{resourceName:"dataset",resourceLabel:(0,i.t)("dataset"),passwordsNeededMessage:F.iX,confirmOverwriteMessage:F.mI,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{Q(!1),q(),a((0,i.t)("Dataset imported"))},show:G,onHide:()=>{Q(!1)},passwordFields:ee,setPasswordFields:te,sshTunnelPasswordFields:se,setSSHTunnelPasswordFields:ne,sshTunnelPrivateKeyFields:re,setSSHTunnelPrivateKeyFields:ie,sshTunnelPrivateKeyPasswordFields:oe,setSSHTunnelPrivateKeyPasswordFields:de}),ae&&(0,R.tZ)(f.Z,null))}))}}]);
//# sourceMappingURL=f16df6feb28c2885d3ea.chunk.js.map