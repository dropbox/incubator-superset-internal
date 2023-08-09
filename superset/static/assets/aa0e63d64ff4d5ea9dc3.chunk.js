"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6284],{33726:(e,t,r)=>{r.d(t,{Y:()=>s});var a=r(55867);const s={name:(0,a.t)("SQL"),tabs:[{name:"Saved queries",label:(0,a.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,a.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},6189:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(5872),s=r.n(a),l=(r(67294),r(51995)),n=r(55867),o=r(33743),i=r(49889),u=r(53459),c=r(22489),d=r(120),g=r(42110),h=r(70163),p=r(10222),m=r(11965);g.Z.registerLanguage("sql",o.Z),g.Z.registerLanguage("markdown",u.Z),g.Z.registerLanguage("html",i.Z),g.Z.registerLanguage("json",c.Z);const b=l.iK.div`
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
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }
`;function y(e){let{addDangerToast:t,addSuccessToast:r,children:a,...l}=e;return(0,m.tZ)(b,null,(0,m.tZ)(h.Z.Copy,{tabIndex:0,role:"button",onClick:e=>{var s;e.preventDefault(),e.currentTarget.blur(),s=a,(0,p.Z)((()=>Promise.resolve(s))).then((()=>{r&&r((0,n.t)("SQL Copied!"))})).catch((()=>{t&&t((0,n.t)("Sorry, your browser does not support copying."))}))}}),(0,m.tZ)(g.Z,s()({style:d.Z},l),a))}},86185:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294);function s(e){let{queries:t,fetchData:r,currentQueryId:s}=e;const l=t.findIndex((e=>e.id===s)),[n,o]=(0,a.useState)(l),[i,u]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);function g(){u(0===n),d(n===t.length-1)}function h(e){const a=n+(e?-1:1);a>=0&&a<t.length&&(r(t[a].id),o(a),g())}return(0,a.useEffect)((()=>{g()})),{handleKeyPress:function(e){n>=0&&n<t.length&&("ArrowDown"===e.key||"k"===e.key?(e.preventDefault(),h(!1)):"ArrowUp"!==e.key&&"j"!==e.key||(e.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:i,disableNext:c}}},36444:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var a=r(67294),s=r(51995),l=r(55867),n=r(31069),o=r(43716),i=r(30381),u=r.n(i),c=r(40768),d=r(14114),g=r(34858),h=r(86074),p=r(99299),m=r(33726),b=r(18782),y=r(58593),Z=r(42110),v=r(33743),f=r(120),x=r(27600),q=r(12),S=r(70163),w=r(74069),k=r(94184),C=r.n(k),$=r(35932),T=r(6189),D=r(86185),L=r(11965);const z=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,H=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  padding: 4px 0 24px 0;
`,_=s.iK.div`
  margin: 0 0 ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px 0;
`,I=s.iK.div`
  display: inline;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  margin-right: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};

  &.active,
  &:focus,
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
    border-bottom: none;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &:hover:not(.active) {
    background: ${e=>{let{theme:t}=e;return t.colors.secondary.light5}};
  }
`,U=(0,s.iK)(w.Z)`
  .ant-modal-body {
    padding: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
  }

  pre {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.xs}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
    line-height: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    height: 375px;
    border: none;
  }
`,K=(0,d.ZP)((function(e){let{onHide:t,openInSqlLab:r,queries:s,query:n,fetchData:o,show:i,addDangerToast:u,addSuccessToast:c}=e;const{handleKeyPress:d,handleDataChange:g,disablePrevious:h,disableNext:p}=(0,D.Z)({queries:s,currentQueryId:n.id,fetchData:o}),[m,b]=(0,a.useState)("user"),{id:y,sql:Z,executed_sql:v}=n;return(0,L.tZ)("div",{role:"none",onKeyUp:d},(0,L.tZ)(U,{onHide:t,show:i,title:(0,l.t)("Query preview"),footer:(0,L.tZ)(a.Fragment,null,(0,L.tZ)($.Z,{key:"previous-query",disabled:h,onClick:()=>g(!0)},(0,l.t)("Previous")),(0,L.tZ)($.Z,{key:"next-query",disabled:p,onClick:()=>g(!1)},(0,l.t)("Next")),(0,L.tZ)($.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>r(y)},(0,l.t)("Open in SQL Lab")))},(0,L.tZ)(z,null,(0,l.t)("Tab name")),(0,L.tZ)(H,null,n.tab_name),(0,L.tZ)(_,null,(0,L.tZ)(I,{role:"button",className:C()({active:"user"===m}),onClick:()=>b("user")},(0,l.t)("User query")),(0,L.tZ)(I,{role:"button",className:C()({active:"executed"===m}),onClick:()=>b("executed")},(0,l.t)("Executed query"))),(0,L.tZ)(T.Z,{addDangerToast:u,addSuccessToast:c,language:"sql"},("user"===m?Z:v)||"")))})),Q=(0,s.iK)(b.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;Z.Z.registerLanguage("sql",v.Z);const A=(0,s.iK)(Z.Z)`
  height: ${e=>{let{theme:t}=e;return 26*t.gridUnit}}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,J=s.iK.div`
  .count {
    margin-left: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    text-decoration: underline;
    cursor: pointer;
  }
`,N=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
`,E=(0,d.ZP)((function(e){let{addDangerToast:t}=e;const{state:{loading:r,resourceCount:i,resourceCollection:d},fetchData:Z}=(0,g.Yi)("query",(0,l.t)("Query history"),t,!1),[v,w]=(0,a.useState)(),k=(0,s.Fg)(),C=(0,a.useCallback)((e=>{n.Z.get({endpoint:`/api/v1/query/${e}`}).then((e=>{let{json:t={}}=e;w({...t.result})}),(0,c.v$)((e=>t((0,l.t)("There was an issue previewing the selected query. %s",e)))))}),[t]),$={activeChild:"Query history",...m.Y},T=[{id:q.J.start_time,desc:!0}],D=(0,a.useMemo)((()=>[{Cell:e=>{let{row:{original:{status:t}}}=e;const r={name:null,label:""};return t===o.Tb.SUCCESS?(r.name=(0,L.tZ)(S.Z.Check,{iconColor:k.colors.success.base}),r.label=(0,l.t)("Success")):t===o.Tb.FAILED||t===o.Tb.STOPPED?(r.name=(0,L.tZ)(S.Z.XSmall,{iconColor:t===o.Tb.FAILED?k.colors.error.base:k.colors.grayscale.base}),r.label=(0,l.t)("Failed")):t===o.Tb.RUNNING?(r.name=(0,L.tZ)(S.Z.Running,{iconColor:k.colors.primary.base}),r.label=(0,l.t)("Running")):t===o.Tb.TIMED_OUT?(r.name=(0,L.tZ)(S.Z.Offline,{iconColor:k.colors.grayscale.light1}),r.label=(0,l.t)("Offline")):t!==o.Tb.SCHEDULED&&t!==o.Tb.PENDING||(r.name=(0,L.tZ)(S.Z.Queued,{iconColor:k.colors.grayscale.base}),r.label=(0,l.t)("Scheduled")),(0,L.tZ)(y.u,{title:r.label,placement:"bottom"},(0,L.tZ)("span",null,r.name))},accessor:q.J.status,size:"xs",disableSortBy:!0},{accessor:q.J.start_time,Header:(0,l.t)("Time"),size:"xl",Cell:e=>{let{row:{original:{start_time:t,end_time:r}}}=e;const s=u().utc(t).local().format(x.v2).split(" "),n=(0,L.tZ)(a.Fragment,null,s[0]," ",(0,L.tZ)("br",null),s[1]);return r?(0,L.tZ)(y.u,{title:(0,l.t)("Duration: %s",u()(u().utc(r-t)).format(x.n2)),placement:"bottom"},(0,L.tZ)("span",null,n)):n}},{accessor:q.J.tab_name,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:q.J.database_name,Header:(0,l.t)("Database"),size:"xl"},{accessor:q.J.database,hidden:!0},{accessor:q.J.schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:e=>{let{row:{original:{sql_tables:t=[]}}}=e;const r=t.map((e=>e.table)),s=r.length>0?r.shift():"";return r.length?(0,L.tZ)(J,null,(0,L.tZ)("span",null,s),(0,L.tZ)(p.Z,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,L.tZ)(a.Fragment,null,r.map((e=>(0,L.tZ)(N,{key:e},e))))},(0,L.tZ)("span",{className:"count"},"(+",r.length,")"))):s},accessor:q.J.sql_tables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:q.J.user_first_name,Header:(0,l.t)("User"),size:"xl",Cell:e=>{let{row:{original:{user:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""}},{accessor:q.J.user,hidden:!0},{accessor:q.J.rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:q.J.sql,Header:(0,l.t)("SQL"),Cell:e=>{let{row:{original:t,id:r}}=e;return(0,L.tZ)("div",{tabIndex:0,role:"button",onClick:()=>w(t)},(0,L.tZ)(A,{language:"sql",style:f.Z},(0,c.IB)(t.sql,4)))}},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:e=>{let{row:{original:{id:t}}}=e;return(0,L.tZ)(y.u,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom"},(0,L.tZ)("a",{href:`/superset/sqllab?queryId=${t}`},(0,L.tZ)(S.Z.Full,{iconColor:k.colors.grayscale.base})))}}]),[]),z=(0,a.useMemo)((()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:b.p.relationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,c.tm)("query","database",(0,c.v$)((e=>t((0,l.t)("An error occurred while fetching database values: %s",e))))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:b.p.equals,unfilteredLabel:"All",fetchSelects:(0,c.wk)("query","status",(0,c.v$)((e=>t((0,l.t)("An error occurred while fetching schema values: %s",e))))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:b.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("query","user",(0,c.v$)((e=>t((0,l.t)("An error occurred while fetching user values: %s",e))))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:b.p.between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:b.p.contains}]),[t]);return(0,L.tZ)(a.Fragment,null,(0,L.tZ)(h.Z,$),v&&(0,L.tZ)(K,{onHide:()=>w(void 0),query:v,queries:d,fetchData:C,openInSqlLab:e=>window.location.assign(`/superset/sqllab?queryId=${e}`),show:!0}),(0,L.tZ)(Q,{className:"query-history-list-view",columns:D,count:i,data:d,fetchData:Z,filters:z,initialSort:T,loading:r,pageSize:25,highlightRowId:null==v?void 0:v.id}))}))}}]);
//# sourceMappingURL=aa0e63d64ff4d5ea9dc3.chunk.js.map