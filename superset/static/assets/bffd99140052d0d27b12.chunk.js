"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7633],{82842:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r=a(67294),s=a(51995),l=a(61988),o=a(31069),i=a(30381),n=a.n(i),c=a(40768),d=a(14114),u=a(34858),p=a(20755),h=a(76697),g=a(95413),m=a(18782),b=a(58593),y=a(42110),Z=a(33743),f=a(120),v=a(27600),x=a(12),q=a(70163),w=a(74069),$=a(94184),C=a.n($),S=a(35932),k=a(31673),z=a(14025),H=a(11965);const _=s.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,T=s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,D=s.iK.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,J=s.iK.div`
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
`,L=(0,s.iK)(w.Z)`
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
`,K=(0,d.ZP)((function({onHide:e,openInSqlLab:t,queries:a,query:s,fetchData:o,show:i,addDangerToast:n,addSuccessToast:c}){const{handleKeyPress:d,handleDataChange:u,disablePrevious:p,disableNext:h}=(0,z.C)({queries:a,currentQueryId:s.id,fetchData:o}),[g,m]=(0,r.useState)("user"),{id:b,sql:y,executed_sql:Z}=s;return(0,H.tZ)("div",{role:"none",onKeyUp:d},(0,H.tZ)(L,{onHide:e,show:i,title:(0,l.t)("Query preview"),footer:[(0,H.tZ)(S.Z,{key:"previous-query",disabled:p,onClick:()=>u(!0)},(0,l.t)("Previous")),(0,H.tZ)(S.Z,{key:"next-query",disabled:h,onClick:()=>u(!1)},(0,l.t)("Next")),(0,H.tZ)(S.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>t(b)},(0,l.t)("Open in SQL Lab"))]},(0,H.tZ)(_,null,(0,l.t)("Tab name")),(0,H.tZ)(T,null,s.tab_name),(0,H.tZ)(D,null,(0,H.tZ)(J,{role:"button",className:C()({active:"user"===g}),onClick:()=>m("user")},(0,l.t)("User query")),(0,H.tZ)(J,{role:"button",className:C()({active:"executed"===g}),onClick:()=>m("executed")},(0,l.t)("Executed query"))),(0,H.tZ)(k.Z,{addDangerToast:n,addSuccessToast:c,language:"sql"},("user"===g?y:Z)||"")))})),U=(0,s.iK)(m.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;y.Z.registerLanguage("sql",Z.Z);const A=(0,s.iK)(y.Z)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=s.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,Q=s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,F=(0,d.ZP)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:a,resourceCollection:i},fetchData:d}=(0,u.Yi)("query",(0,l.t)("Query history"),e,!1),[y,Z]=(0,r.useState)(),w=(0,s.Fg)(),$=(0,r.useCallback)((t=>{o.Z.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{Z({...e.result})}),(0,c.v$)((t=>e((0,l.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),C={activeChild:"Query history",...g.Y},S=[{id:x.J.start_time,desc:!0}],k=(0,r.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return"success"===e?(t.name=(0,H.tZ)(q.Z.Check,{iconColor:w.colors.success.base}),t.label=(0,l.t)("Success")):"failed"===e||"stopped"===e?(t.name=(0,H.tZ)(q.Z.XSmall,{iconColor:"failed"===e?w.colors.error.base:w.colors.grayscale.base}),t.label=(0,l.t)("Failed")):"running"===e?(t.name=(0,H.tZ)(q.Z.Running,{iconColor:w.colors.primary.base}),t.label=(0,l.t)("Running")):"timed_out"===e?(t.name=(0,H.tZ)(q.Z.Offline,{iconColor:w.colors.grayscale.light1}),t.label=(0,l.t)("Offline")):"scheduled"!==e&&"pending"!==e||(t.name=(0,H.tZ)(q.Z.Queued,{iconColor:w.colors.grayscale.base}),t.label=(0,l.t)("Scheduled")),(0,H.tZ)(b.u,{title:t.label,placement:"bottom"},(0,H.tZ)("span",null,t.name))},accessor:x.J.status,size:"xs",disableSortBy:!0},{accessor:x.J.start_time,Header:(0,l.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e,end_time:t}}})=>{const a=n().utc(e).local().format(v.v2).split(" "),s=(0,H.tZ)(r.Fragment,null,a[0]," ",(0,H.tZ)("br",null),a[1]);return t?(0,H.tZ)(b.u,{title:(0,l.t)("Duration: %s",n()(n().utc(t-e)).format(v.n2)),placement:"bottom"},(0,H.tZ)("span",null,s)):s}},{accessor:x.J.tab_name,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:x.J.database_name,Header:(0,l.t)("Database"),size:"xl"},{accessor:x.J.database,hidden:!0},{accessor:x.J.schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=t.length>0?t.shift():"";return t.length?(0,H.tZ)(I,null,(0,H.tZ)("span",null,a),(0,H.tZ)(h.ZP,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,H.tZ)(r.Fragment,null,t.map((e=>(0,H.tZ)(Q,{key:e},e))))},(0,H.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:x.J.sql_tables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:x.J.user_first_name,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>e?`${e.first_name} ${e.last_name}`:""},{accessor:x.J.user,hidden:!0},{accessor:x.J.rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:x.J.sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,H.tZ)("div",{tabIndex:0,role:"button",onClick:()=>Z(e)},(0,H.tZ)(A,{language:"sql",style:f.Z},(0,c.IB)(e.sql,4)))},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,H.tZ)(b.u,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom"},(0,H.tZ)("a",{href:`/superset/sqllab?queryId=${e}`},(0,H.tZ)(q.Z.Full,{iconColor:w.colors.grayscale.base})))}]),[]),z=(0,r.useMemo)((()=>[{Header:(0,l.t)("Database"),id:"database",input:"select",operator:m.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("query","database",(0,c.v$)((t=>e((0,l.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,l.t)("State"),id:"status",input:"select",operator:m.p.equals,unfilteredLabel:"All",fetchSelects:(0,c.wk)("query","status",(0,c.v$)((t=>e((0,l.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,l.t)("User"),id:"user",input:"select",operator:m.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("query","user",(0,c.v$)((t=>e((0,l.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,l.t)("Time range"),id:"start_time",input:"datetime_range",operator:m.p.between},{Header:(0,l.t)("Search by query text"),id:"sql",input:"search",operator:m.p.contains}]),[e]);return(0,H.tZ)(r.Fragment,null,(0,H.tZ)(p.Z,C),y&&(0,H.tZ)(K,{onHide:()=>Z(void 0),query:y,queries:i,fetchData:$,openInSqlLab:e=>window.location.assign(`/superset/sqllab?queryId=${e}`),show:!0}),(0,H.tZ)(U,{className:"query-history-list-view",columns:k,count:a,data:i,fetchData:d,filters:z,initialSort:S,loading:t,pageSize:25,highlightRowId:null==y?void 0:y.id}))}))}}]);
//# sourceMappingURL=bffd99140052d0d27b12.chunk.js.map