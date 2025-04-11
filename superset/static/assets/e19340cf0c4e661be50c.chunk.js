"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6284],{999075:(e,t,r)=>{r.d(t,{J:()=>s});var a=r(219181),i=r(135944);const s=e=>(0,i.tZ)(a.Z,{...e})},933726:(e,t,r)=>{r.d(t,{Y:()=>i});var a=r(61988);const i={name:(0,a.t)("SQL"),tabs:[{name:"Saved queries",label:(0,a.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,a.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},106189:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(751995),i=r(61988),s=r(833743),n=r(849889),l=r(453459),o=r(622489),c=r(600120),d=r(242110),u=r(313322),h=r(710222),g=r(135944);d.Z.registerLanguage("sql",s.Z),d.Z.registerLanguage("markdown",l.Z),d.Z.registerLanguage("html",n.Z),d.Z.registerLanguage("json",o.Z);const p=a.iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`;function m({addDangerToast:e,addSuccessToast:t,children:r,...a}){return(0,g.BX)(p,{children:[(0,g.tZ)(u.Z.Copy,{tabIndex:0,role:"button",onClick:a=>{var s;a.preventDefault(),a.currentTarget.blur(),s=r,(0,h.Z)((()=>Promise.resolve(s))).then((()=>{t&&t((0,i.t)("SQL Copied!"))})).catch((()=>{e&&e((0,i.t)("Sorry, your browser does not support copying."))}))}}),(0,g.tZ)(d.Z,{style:c.Z,...a,children:r})]})}},286185:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(667294);function i({queries:e,fetchData:t,currentQueryId:r}){const i=e.findIndex((e=>e.id===r)),[s,n]=(0,a.useState)(i),[l,o]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);function u(){o(0===s),d(s===e.length-1)}function h(r){const a=s+(r?-1:1);a>=0&&a<e.length&&(t(e[a].id),n(a),u())}return(0,a.useEffect)((()=>{u()})),{handleKeyPress:function(t){s>=0&&s<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),h(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:l,disableNext:c}}},436444:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var a=r(667294),i=r(616550),s=r(473727),n=r(751995),l=r(61988),o=r(431069),c=r(343716),d=r(730381),u=r.n(d),h=r(440768),g=r(414114),p=r(34858),m=r(737921),b=r(586074),y=r(999075),Z=r(933726),v=r(593139),f=r(358593),x=r(242110),S=r(833743),q=r(600120),w=r(427600),T=r(400012),k=r(313322),C=r(774069),$=r(693967),D=r.n($),H=r(835932),z=r(106189),L=r(286185),U=r(135944);const B=n.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,J=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,K=n.iK.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,Q=n.iK.div`
  display: inline;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  margin-right: ${({theme:e})=>4*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colors.secondary.light5};
  }
`,I=(0,n.iK)(C.default)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,R=(0,g.ZP)((function({onHide:e,openInSqlLab:t,queries:r,query:i,fetchData:s,show:n,addDangerToast:o,addSuccessToast:c}){const{handleKeyPress:d,handleDataChange:u,disablePrevious:h,disableNext:g}=(0,L.Z)({queries:r,currentQueryId:i.id,fetchData:s}),[p,m]=(0,a.useState)("user"),{id:b,sql:y,executed_sql:Z}=i;return(0,U.tZ)("div",{role:"none",onKeyUp:d,children:(0,U.BX)(I,{onHide:e,show:n,title:(0,l.t)("Query preview"),footer:(0,U.BX)(U.HY,{children:[(0,U.tZ)(H.Z,{disabled:h,onClick:()=>u(!0),children:(0,l.t)("Previous")},"previous-query"),(0,U.tZ)(H.Z,{disabled:g,onClick:()=>u(!1),children:(0,l.t)("Next")},"next-query"),(0,U.tZ)(H.Z,{buttonStyle:"primary",onClick:()=>t(b),children:(0,l.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,U.tZ)(B,{children:(0,l.t)("Tab name")}),(0,U.tZ)(J,{children:i.tab_name}),(0,U.BX)(K,{children:[(0,U.tZ)(Q,{role:"button",className:D()({active:"user"===p}),onClick:()=>m("user"),children:(0,l.t)("User query")}),(0,U.tZ)(Q,{role:"button",className:D()({active:"executed"===p}),onClick:()=>m("executed"),children:(0,l.t)("Executed query")})]}),(0,U.tZ)(z.Z,{addDangerToast:o,addSuccessToast:c,language:"sql",children:("user"===p?y:Z)||""})]})})}));var A=r(672570),N=r(83379);const P=(0,n.iK)(v.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;x.Z.registerLanguage("sql",S.Z);const X=(0,n.iK)(x.Z)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,_=n.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,F=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,O=(0,n.iK)(m.Z)`
  text-align: left;
  font-family: ${({theme:e})=>e.typography.families.monospace};
`,Y=(0,g.ZP)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:r,resourceCollection:d},fetchData:g}=(0,p.Yi)("query",(0,l.t)("Query history"),e,!1),[m,x]=(0,a.useState)(),S=(0,n.Fg)(),C=(0,i.k6)(),$=(0,a.useCallback)((t=>{o.Z.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{x({...e.result})}),(0,h.v$)((t=>e((0,l.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),D={activeChild:"Query history",...Z.Y},H=[{id:T.J.StartTime,desc:!0}],z=(0,a.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===c.Tb.Success?(t.name=(0,U.tZ)(k.Z.Check,{iconColor:S.colors.success.base}),t.label=(0,l.t)("Success")):e===c.Tb.Failed||e===c.Tb.Stopped?(t.name=(0,U.tZ)(k.Z.XSmall,{iconColor:e===c.Tb.Failed?S.colors.error.base:S.colors.grayscale.base}),t.label=(0,l.t)("Failed")):e===c.Tb.Running?(t.name=(0,U.tZ)(k.Z.Running,{iconColor:S.colors.primary.base}),t.label=(0,l.t)("Running")):e===c.Tb.TimedOut?(t.name=(0,U.tZ)(k.Z.Offline,{iconColor:S.colors.grayscale.light1}),t.label=(0,l.t)("Offline")):e!==c.Tb.Scheduled&&e!==c.Tb.Pending||(t.name=(0,U.tZ)(k.Z.Queued,{iconColor:S.colors.grayscale.base}),t.label=(0,l.t)("Scheduled")),(0,U.tZ)(f.u,{title:t.label,placement:"bottom",children:(0,U.tZ)("span",{children:t.name})})},accessor:T.J.Status,size:"xs",disableSortBy:!0},{accessor:T.J.StartTime,Header:(0,l.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e}}})=>{const t=u().utc(e).local().format(w.v2).split(" ");return(0,U.BX)(U.HY,{children:[t[0]," ",(0,U.tZ)("br",{}),t[1]]})}},{Header:(0,l.t)("Duration"),size:"xl",Cell:({row:{original:{status:e,start_time:t,end_time:r}}})=>{const a=e===c.Tb.Failed?"danger":e,i=r?u()(u().utc(r-t)).format(w.n2):"00:00:00.000";return(0,U.tZ)(O,{type:a,role:"timer",children:i})}},{accessor:T.J.TabName,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:T.J.DatabaseName,Header:(0,l.t)("Database"),size:"xl"},{accessor:T.J.Database,hidden:!0},{accessor:T.J.Schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),r=t.length>0?t.shift():"";return t.length?(0,U.BX)(_,{children:[(0,U.tZ)("span",{children:r}),(0,U.tZ)(y.J,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,U.tZ)(U.HY,{children:t.map((e=>(0,U.tZ)(F,{children:e},e)))}),children:(0,U.BX)("span",{className:"count",children:["(+",t.length,")"]})})]}):r},accessor:T.J.SqlTables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:T.J.UserFirstName,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,N.Z)(e)},{accessor:T.J.User,hidden:!0},{accessor:T.J.Rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:T.J.Sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,U.tZ)("div",{tabIndex:0,role:"button",onClick:()=>x(e),children:(0,U.tZ)(X,{language:"sql",style:q.Z,children:(0,h.IB)(e.sql,4)})})},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,U.tZ)(f.u,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom",children:(0,U.tZ)(s.rU,{to:`/sqllab?queryId=${e}`,children:(0,U.tZ)(k.Z.Full,{iconColor:S.colors.grayscale.base})})})}]),[]),L=(0,a.useMemo)((()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:v.p.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,h.tm)("query","database",(0,h.v$)((t=>e((0,l.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:v.p.Equals,unfilteredLabel:"All",fetchSelects:(0,h.wk)("query","status",(0,h.v$)((t=>e((0,l.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:v.p.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,h.tm)("query","user",(0,h.v$)((t=>e((0,l.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:v.p.Between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:v.p.Contains}]),[e]);return(0,U.BX)(U.HY,{children:[(0,U.tZ)(b.Z,{...D}),m&&(0,U.tZ)(R,{onHide:()=>x(void 0),query:m,queries:d,fetchData:$,openInSqlLab:e=>C.push(`/sqllab?queryId=${e}`),show:!0}),(0,U.tZ)(P,{className:"query-history-list-view",columns:z,count:r,data:d,fetchData:g,filters:L,initialSort:H,loading:t,pageSize:25,highlightRowId:null==m?void 0:m.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:A.ws})]})}))}}]);
//# sourceMappingURL=e19340cf0c4e661be50c.chunk.js.map