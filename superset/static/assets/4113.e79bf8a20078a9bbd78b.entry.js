(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4113],{84548:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RESET_STATE:()=>y,ADD_QUERY_EDITOR:()=>g,UPDATE_QUERY_EDITOR:()=>A,QUERY_EDITOR_SAVED:()=>R,CLONE_QUERY_TO_NEW_TAB:()=>f,REMOVE_QUERY_EDITOR:()=>I,MERGE_TABLE:()=>b,REMOVE_TABLE:()=>N,END_QUERY:()=>L,REMOVE_QUERY:()=>O,EXPAND_TABLE:()=>D,COLLAPSE_TABLE:()=>v,QUERY_EDITOR_SETDB:()=>U,QUERY_EDITOR_SET_SCHEMA:()=>w,QUERY_EDITOR_SET_SCHEMA_OPTIONS:()=>C,QUERY_EDITOR_SET_TABLE_OPTIONS:()=>P,QUERY_EDITOR_SET_TITLE:()=>Z,QUERY_EDITOR_SET_AUTORUN:()=>x,QUERY_EDITOR_SET_SQL:()=>q,QUERY_EDITOR_SET_QUERY_LIMIT:()=>$,QUERY_EDITOR_SET_TEMPLATE_PARAMS:()=>Q,QUERY_EDITOR_SET_SELECTED_TEXT:()=>B,QUERY_EDITOR_SET_FUNCTION_NAMES:()=>M,QUERY_EDITOR_PERSIST_HEIGHT:()=>Y,QUERY_EDITOR_TOGGLE_LEFT_BAR:()=>H,MIGRATE_QUERY_EDITOR:()=>k,MIGRATE_TAB_HISTORY:()=>F,MIGRATE_TABLE:()=>K,MIGRATE_QUERY:()=>V,SET_DATABASES:()=>G,SET_ACTIVE_QUERY_EDITOR:()=>W,LOAD_QUERY_EDITOR:()=>j,SET_TABLES:()=>z,SET_ACTIVE_SOUTHPANE_TAB:()=>X,REFRESH_QUERIES:()=>J,SET_USER_OFFLINE:()=>ee,RUN_QUERY:()=>te,START_QUERY:()=>re,STOP_QUERY:()=>ne,REQUEST_QUERY_RESULTS:()=>oe,QUERY_SUCCESS:()=>ie,QUERY_FAILED:()=>ae,CLEAR_QUERY_RESULTS:()=>se,REMOVE_DATA_PREVIEW:()=>le,CHANGE_DATA_PREVIEW_ID:()=>ce,START_QUERY_VALIDATION:()=>ue,QUERY_VALIDATION_RETURNED:()=>de,QUERY_VALIDATION_FAILED:()=>Ee,COST_ESTIMATE_STARTED:()=>_e,COST_ESTIMATE_RETURNED:()=>pe,COST_ESTIMATE_FAILED:()=>me,CREATE_DATASOURCE_STARTED:()=>he,CREATE_DATASOURCE_SUCCESS:()=>Te,CREATE_DATASOURCE_FAILED:()=>Se,addInfoToast:()=>ye,addSuccessToast:()=>ge,addDangerToast:()=>Ae,addWarningToast:()=>Re,CtasEnum:()=>fe,resetState:()=>De,startQueryValidation:()=>ve,queryValidationReturned:()=>Ue,queryValidationFailed:()=>we,updateQueryEditor:()=>Ce,scheduleQuery:()=>Pe,estimateQueryCost:()=>Ze,startQuery:()=>xe,querySuccess:()=>qe,queryFailed:()=>$e,stopQuery:()=>Qe,clearQueryResults:()=>Be,removeDataPreview:()=>Me,requestQueryResults:()=>Ye,fetchQueryResults:()=>He,runQuery:()=>ke,reRunQuery:()=>Fe,validateQuery:()=>Ke,postStopQuery:()=>Ve,setDatabases:()=>Ge,migrateQueryEditorFromLocalStorage:()=>We,addQueryEditor:()=>je,cloneQueryToNewTab:()=>ze,setActiveQueryEditor:()=>Xe,loadQueryEditor:()=>Je,setTables:()=>et,switchQueryEditor:()=>tt,setActiveSouthPaneTab:()=>rt,toggleLeftBar:()=>nt,removeQueryEditor:()=>ot,removeQuery:()=>it,queryEditorSetDb:()=>at,queryEditorSetSchema:()=>st,queryEditorSetSchemaOptions:()=>lt,queryEditorSetTableOptions:()=>ct,queryEditorSetAutorun:()=>ut,queryEditorSetTitle:()=>dt,saveQuery:()=>Et,addSavedQueryToTabState:()=>_t,updateSavedQuery:()=>pt,queryEditorSetSql:()=>mt,queryEditorSetAndSaveSql:()=>ht,queryEditorSetQueryLimit:()=>Tt,queryEditorSetTemplateParams:()=>St,queryEditorSetSelectedText:()=>yt,mergeTable:()=>gt,addTable:()=>ft,changeDataPreviewId:()=>It,reFetchQueryResults:()=>bt,expandTable:()=>Nt,collapseTable:()=>Lt,removeTable:()=>Ot,refreshQueries:()=>Dt,setUserOffline:()=>vt,persistEditorHeight:()=>Ut,popStoredQuery:()=>wt,popSavedQuery:()=>Ct,popQuery:()=>Pt,popDatasourceQuery:()=>Zt,createDatasourceStarted:()=>xt,createDatasourceSuccess:()=>qt,createDatasourceFailed:()=>$t,createDatasource:()=>Qt,createCtasDatasource:()=>Bt,queryEditorSetFunctionNames:()=>Mt});var n=r(14670),o=r.n(n),i=r(4400),a=r.n(i),s=r(61988),l=r(31069),c=r(63137),u=r.n(c),d=r(67523),E=r.n(d),_=r(91877),p=r(93185),m=r(44814),h=r(72570),T=r(98286),S=r(66785);const y="RESET_STATE",g="ADD_QUERY_EDITOR",A="UPDATE_QUERY_EDITOR",R="QUERY_EDITOR_SAVED",f="CLONE_QUERY_TO_NEW_TAB",I="REMOVE_QUERY_EDITOR",b="MERGE_TABLE",N="REMOVE_TABLE",L="END_QUERY",O="REMOVE_QUERY",D="EXPAND_TABLE",v="COLLAPSE_TABLE",U="QUERY_EDITOR_SETDB",w="QUERY_EDITOR_SET_SCHEMA",C="QUERY_EDITOR_SET_SCHEMA_OPTIONS",P="QUERY_EDITOR_SET_TABLE_OPTIONS",Z="QUERY_EDITOR_SET_TITLE",x="QUERY_EDITOR_SET_AUTORUN",q="QUERY_EDITOR_SET_SQL",$="QUERY_EDITOR_SET_QUERY_LIMIT",Q="QUERY_EDITOR_SET_TEMPLATE_PARAMS",B="QUERY_EDITOR_SET_SELECTED_TEXT",M="QUERY_EDITOR_SET_FUNCTION_NAMES",Y="QUERY_EDITOR_PERSIST_HEIGHT",H="QUERY_EDITOR_TOGGLE_LEFT_BAR",k="MIGRATE_QUERY_EDITOR",F="MIGRATE_TAB_HISTORY",K="MIGRATE_TABLE",V="MIGRATE_QUERY",G="SET_DATABASES",W="SET_ACTIVE_QUERY_EDITOR",j="LOAD_QUERY_EDITOR",z="SET_TABLES",X="SET_ACTIVE_SOUTHPANE_TAB",J="REFRESH_QUERIES",ee="SET_USER_OFFLINE",te="RUN_QUERY",re="START_QUERY",ne="STOP_QUERY",oe="REQUEST_QUERY_RESULTS",ie="QUERY_SUCCESS",ae="QUERY_FAILED",se="CLEAR_QUERY_RESULTS",le="REMOVE_DATA_PREVIEW",ce="CHANGE_DATA_PREVIEW_ID",ue="START_QUERY_VALIDATION",de="QUERY_VALIDATION_RETURNED",Ee="QUERY_VALIDATION_FAILED",_e="COST_ESTIMATE_STARTED",pe="COST_ESTIMATE_RETURNED",me="COST_ESTIMATE_FAILED",he="CREATE_DATASOURCE_STARTED",Te="CREATE_DATASOURCE_SUCCESS",Se="CREATE_DATASOURCE_FAILED",ye=h.bM,ge=h.ws,Ae=h.Gb,Re=h.Dz,fe={TABLE:"TABLE",VIEW:"VIEW"},Ie=(0,s.t)("The query couldn't be loaded"),be={id:"remoteId",db_id:"dbId",client_id:"id",label:"title"},Ne=e=>t=>E()(t,((t,r)=>r in e?e[r]:r)),Le=Ne(u()(be)),Oe=Ne(be);function De(){return{type:y}}function ve(e){return Object.assign(e,{id:e.id?e.id:o().generate()}),{type:ue,query:e}}function Ue(e,t){return{type:de,query:e,results:t}}function we(e,t,r){return{type:Ee,query:e,message:t,error:r}}function Ce(e){return{type:A,alterations:e}}function Pe(e){return t=>l.Z.post({endpoint:"/savedqueryviewapi/api/create",postPayload:e,stringify:!1}).then((()=>t(ge((0,s.t)("Your query has been scheduled. To see details of your query, navigate to Saved queries"))))).catch((()=>t(Ae((0,s.t)("Your query could not be scheduled")))))}function Ze(e){const{dbId:t,schema:r,sql:n,templateParams:o}=e,i=null===r?`/superset/estimate_query_cost/${t}/`:`/superset/estimate_query_cost/${t}/${r}/`;return t=>Promise.all([t({type:_e,query:e}),l.Z.post({endpoint:i,postPayload:{sql:n,templateParams:JSON.parse(o||"{}")}}).then((({json:r})=>t({type:pe,query:e,json:r}))).catch((r=>(0,T.O)(r).then((r=>{const n=r.error||r.statusText||(0,s.t)("Failed at retrieving results");return t({type:me,query:e,error:n})}))))])}function xe(e){return Object.assign(e,{id:e.id?e.id:o().generate(),progress:0,startDttm:(0,m.zO)(),state:e.runAsync?"pending":"running",cached:!1}),{type:re,query:e}}function qe(e,t){return function(r){return(!e.isDataPreview&&(0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${t.query.sqlEditorId}`),postPayload:{latest_query_id:e.id}}):Promise.resolve()).then((()=>r({type:ie,query:e,results:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while storing the latest query id in the backend. Please contact your administrator if this problem persists.")))))}}function $e(e,t,r,n){return function(o){return(!e.isDataPreview&&(0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.sqlEditorId}`),postPayload:{latest_query_id:e.id}}):Promise.resolve()).catch((()=>o(Ae((0,s.t)("An error occurred while storing the latest query id in the backend. Please contact your administrator if this problem persists."))))).then((()=>o({type:ae,query:e,msg:t,link:r,errors:n})))}}function Qe(e){return{type:ne,query:e}}function Be(e){return{type:se,query:e}}function Me(e){return{type:le,table:e}}function Ye(e){return{type:oe,query:e}}function He(e,t){return function(r){return r(Ye(e)),l.Z.get({endpoint:`/superset/results/${e.resultsKey}/?rows=${t}`,parseMethod:"text"}).then((({text:t="{}"})=>{const n=a().parse(t);return r(qe(e,n))})).catch((t=>(0,T.O)(t).then((t=>{const n=t.error||t.statusText||(0,s.t)("Failed at retrieving results");return r($e(e,n,t.link,t.errors))}))))}}function ke(e){return function(t){t(xe(e));const r={client_id:e.id,database_id:e.dbId,json:!0,runAsync:e.runAsync,schema:e.schema,sql:e.sql,sql_editor_id:e.sqlEditorId,tab:e.tab,tmp_table_name:e.tempTable,select_as_cta:e.ctas,ctas_method:e.ctas_method,templateParams:e.templateParams,queryLimit:e.queryLimit,expand_data:!0},n=window.location.search||"";return l.Z.post({endpoint:`/superset/sql_json/${n}`,body:JSON.stringify(r),headers:{"Content-Type":"application/json"},parseMethod:"text"}).then((({text:r="{}"})=>{if(!e.runAsync){const n=a().parse(r);t(qe(e,n))}})).catch((r=>(0,T.O)(r).then((r=>{let n=r.error||r.statusText||(0,s.t)("Unknown error");n.includes("CSRF token")&&(n=(0,s.t)(S.Z.SESSION_TIMED_OUT)),t($e(e,n,r.link,r.errors))}))))}}function Fe(e){return function(t){t(ke({...e,id:o().generate()}))}}function Ke(e){return function(t){t(ve(e));const r={schema:e.schema,sql:e.sql,template_params:e.templateParams};return l.Z.post({endpoint:`/api/v1/database/${e.dbId}/validate_sql`,body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((({json:r})=>t(Ue(e,r.result)))).catch((r=>(0,T.O)(r.result).then((r=>{let n=r.error||r.statusText||(0,s.t)("Unknown error");n.includes("CSRF token")&&(n=(0,s.t)(S.Z.SESSION_TIMED_OUT)),t(we(e,n,r))}))))}}function Ve(e){return function(t){return l.Z.post({endpoint:"/superset/stop_query/",postPayload:{client_id:e.id},stringify:!1}).then((()=>t(Qe(e)))).then((()=>t(ge((0,s.t)("Query was stopped."))))).catch((()=>t(Ae((0,s.t)("Failed at stopping query. %s",e.id)))))}}function Ge(e){return{type:G,databases:e}}function We(e,t,r){return function(n){return l.Z.post({endpoint:"/tabstateview/",postPayload:{queryEditor:e}}).then((({json:o})=>{const i={...e,id:o.id.toString()};return n({type:k,oldQueryEditor:e,newQueryEditor:i}),n({type:F,oldId:e.id,newId:i.id}),Promise.all([...t.map((e=>function(e,t,r){return l.Z.post({endpoint:encodeURI("/tableschemaview/"),postPayload:{table:{...e,queryEditorId:t}}}).then((({json:n})=>{const o={...e,id:n.id,queryEditorId:t};return r({type:K,oldTable:e,newTable:o})})).catch((()=>r(Re((0,s.t)("Unable to migrate table schema state to backend. Superset will retry later. Please contact your administrator if this problem persists.")))))}(e,i.id,n))),...r.map((e=>function(e,t,r){return l.Z.post({endpoint:encodeURI(`/tabstateview/${t}/migrate_query`),postPayload:{queryId:e}}).then((()=>r({type:V,queryId:e,queryEditorId:t}))).catch((()=>r(Re((0,s.t)("Unable to migrate query state to backend. Superset will retry later. Please contact your administrator if this problem persists.")))))}(e.id,i.id,n)))])})).catch((()=>n(Re((0,s.t)("Unable to migrate query editor state to backend. Superset will retry later. Please contact your administrator if this problem persists.")))))}}function je(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:"/tabstateview/",postPayload:{queryEditor:e}}):Promise.resolve({json:{id:o().generate()}})).then((({json:r})=>{const n={...e,id:r.id.toString()};return t({type:g,queryEditor:n})})).catch((()=>t(Ae((0,s.t)("Unable to add a new tab to the backend. Please contact your administrator.")))))}}function ze(e,t){return function(r,n){const o=n(),{queryEditors:i,tabHistory:a}=o.sqlLab,l=i.find((e=>e.id===a[a.length-1]));return r(je({title:(0,s.t)("Copy of %s",l.title),dbId:e.dbId?e.dbId:null,schema:e.schema?e.schema:null,autorun:t,sql:e.sql,queryLimit:l.queryLimit,maxRow:l.maxRow,templateParams:l.templateParams}))}}function Xe(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI(`/tabstateview/${e.id}/activate`)}):Promise.resolve()).then((()=>t({type:W,queryEditor:e}))).catch((r=>404!==r.status?t(Ae((0,s.t)("An error occurred while setting the active tab. Please contact your administrator."))):t({type:I,queryEditor:e})))}}function Je(e){return{type:j,queryEditor:e}}function et(e){const t=e.filter((e=>null!==e.description)).map((e=>{const{columns:t,selectStar:r,primaryKey:n,foreignKeys:o,indexes:i,dataPreviewQueryId:a}=e.description;return{dbId:e.database_id,queryEditorId:e.tab_state_id.toString(),schema:e.schema,name:e.table,expanded:e.expanded,id:e.id,dataPreviewQueryId:a,columns:t,selectStar:r,primaryKey:n,foreignKeys:o,indexes:i,isMetadataLoading:!1,isExtraMetadataLoading:!1}}));return{type:z,tables:t}}function tt(e,t){return function(r){(0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)&&!e.loaded?l.Z.get({endpoint:encodeURI(`/tabstateview/${e.id}`)}).then((({json:e})=>{var n,o;const i={id:e.id.toString(),loaded:!0,title:e.label,sql:e.sql,selectedText:null,latestQueryId:null==(n=e.latest_query)?void 0:n.id,autorun:e.autorun,dbId:e.database_id,templateParams:e.template_params,schema:e.schema,queryLimit:e.query_limit,remoteId:null==(o=e.saved_query)?void 0:o.id,validationResult:{id:null,errors:[],completed:!1},hideLeftBar:e.hide_left_bar};r(Je(i)),r(et(e.table_schemas||[])),r(Xe(i)),e.latest_query&&e.latest_query.resultsKey&&r(He(e.latest_query,t))})).catch((t=>404!==t.status?r(Ae((0,s.t)("An error occurred while fetching tab state"))):r({type:I,queryEditor:e}))):r(Xe(e))}}function rt(e){return{type:X,tabId:e}}function nt(e){const t=!e.hideLeftBar;return function(r){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{hide_left_bar:t}}):Promise.resolve()).then((()=>r({type:H,queryEditor:e,hideLeftBar:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while hiding the left bar. Please contact your administrator.")))))}}function ot(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.delete({endpoint:encodeURI(`/tabstateview/${e.id}`)}):Promise.resolve()).then((()=>t({type:I,queryEditor:e}))).catch((()=>t(Ae((0,s.t)("An error occurred while removing tab. Please contact your administrator.")))))}}function it(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.delete({endpoint:encodeURI(`/tabstateview/${e.sqlEditorId}/query/${e.id}`)}):Promise.resolve()).then((()=>t({type:O,query:e}))).catch((()=>t(Ae((0,s.t)("An error occurred while removing query. Please contact your administrator.")))))}}function at(e,t){return function(r){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{database_id:t}}):Promise.resolve()).then((()=>r({type:U,queryEditor:e,dbId:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while setting the tab database ID. Please contact your administrator.")))))}}function st(e,t){return function(r){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)&&"object"==typeof e?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{schema:t}}):Promise.resolve()).then((()=>r({type:w,queryEditor:e||{},schema:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while setting the tab schema. Please contact your administrator.")))))}}function lt(e,t){return{type:C,queryEditor:e,options:t}}function ct(e,t){return{type:P,queryEditor:e,options:t}}function ut(e,t){return function(r){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{autorun:t}}):Promise.resolve()).then((()=>r({type:x,queryEditor:e,autorun:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while setting the tab autorun. Please contact your administrator.")))))}}function dt(e,t){return function(r){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{label:t}}):Promise.resolve()).then((()=>r({type:Z,queryEditor:e,title:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while setting the tab title. Please contact your administrator.")))))}}function Et(e){return t=>l.Z.post({endpoint:"/savedqueryviewapi/api/create",postPayload:Le(e),stringify:!1}).then((r=>{const n=Oe(r.json.item);return t({type:R,query:e,result:n}),t(dt(e,e.title)),n})).catch((()=>t(Ae((0,s.t)("Your query could not be saved")))))}const _t=(e,t)=>r=>((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:`/tabstateview/${e.id}`,postPayload:{saved_query_id:t.remoteId}}):Promise.resolve()).catch((()=>{r(Ae((0,s.t)("Your query was not properly saved")))})).then((()=>{r(ge((0,s.t)("Your query was saved")))}));function pt(e){return t=>l.Z.put({endpoint:`/savedqueryviewapi/api/update/${e.remoteId}`,postPayload:Le(e),stringify:!1}).then((()=>{t(ge((0,s.t)("Your query was updated"))),t(dt(e,e.title))})).catch((()=>t(Ae((0,s.t)("Your query could not be updated"))))).then((()=>t(Ce(e))))}function mt(e,t){return{type:q,queryEditor:e,sql:t}}function ht(e,t){return function(r){return r(mt(e,t)),(0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{sql:t,latest_query_id:e.latestQueryId}}).catch((()=>r(Ae((0,s.t)('An error occurred while storing your query in the backend. To avoid losing your changes, please save your query using the "Save Query" button.'))))):Promise.resolve()}}function Tt(e,t){return function(r){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{query_limit:t}}):Promise.resolve()).then((()=>r({type:$,queryEditor:e,queryLimit:t}))).catch((()=>r(Ae((0,s.t)("An error occurred while setting the tab title. Please contact your administrator.")))))}}function St(e,t){return function(r){return r({type:Q,queryEditor:e,templateParams:t}),((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{template_params:t}}):Promise.resolve()).catch((()=>r(Ae((0,s.t)("An error occurred while setting the tab template parameters. Please contact your administrator.")))))}}function yt(e,t){return{type:B,queryEditor:e,sql:t}}function gt(e,t,r){return{type:b,table:e,query:t,prepend:r}}function At(e,t,r){return l.Z.get({endpoint:encodeURI(`/api/v1/database/${t.dbId}/table/${encodeURIComponent(e.name)}/${encodeURIComponent(e.schema)}/`)}).then((({json:t})=>{const n={...e,...t,expanded:!0,isMetadataLoading:!1};return r(gt(n)),n})).catch((()=>Promise.all([r(gt({...e,isMetadataLoading:!1})),r(Ae((0,s.t)("An error occurred while fetching table metadata")))])))}function Rt(e,t,r){return l.Z.get({endpoint:encodeURI(`/api/v1/database/${t.dbId}/table_extra/${encodeURIComponent(e.name)}/${encodeURIComponent(e.schema)}/`)}).then((({json:t})=>(r(gt({...e,...t,isExtraMetadataLoading:!1})),t))).catch((()=>Promise.all([r(gt({...e,isExtraMetadataLoading:!1})),r(Ae((0,s.t)("An error occurred while fetching table metadata")))])))}function ft(e,t,r,n){return function(i){const a={dbId:e.dbId,queryEditorId:e.id,schema:n,name:r};return i(gt({...a,isMetadataLoading:!0,isExtraMetadataLoading:!0,expanded:!0},null,!0)),Promise.all([At(a,e,i),Rt(a,e,i)]).then((([r,n])=>{const c=(0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI("/tableschemaview/"),postPayload:{table:{...r,...n}}}):Promise.resolve({json:{id:o().generate()}});if(!t.disable_data_preview&&t.id===e.dbId){const n={id:o().generate(),dbId:e.dbId,sql:r.selectStar,tableName:a.name,sqlEditorId:null,tab:"",runAsync:t.allow_run_async,ctas:!1,isDataPreview:!0};Promise.all([i(gt({...r,dataPreviewQueryId:n.id},n)),i(ke(n))])}return c.then((({json:e})=>i(gt({...a,id:e.id})))).catch((()=>i(Ae((0,s.t)("An error occurred while fetching table metadata. Please contact your administrator.")))))}))}}function It(e,t){return{type:ce,oldQueryId:e,newQuery:t}}function bt(e){return function(t){const r={id:o().generate(),dbId:e.dbId,sql:e.sql,tableName:e.tableName,sqlEditorId:null,tab:"",runAsync:!1,ctas:!1,queryLimit:e.queryLimit,isDataPreview:e.isDataPreview};t(ke(r)),t(It(e.id,r))}}function Nt(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI(`/tableschemaview/${e.id}/expanded`),postPayload:{expanded:!0}}):Promise.resolve()).then((()=>t({type:D,table:e}))).catch((()=>t(Ae((0,s.t)("An error occurred while expanding the table schema. Please contact your administrator.")))))}}function Lt(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI(`/tableschemaview/${e.id}/expanded`),postPayload:{expanded:!1}}):Promise.resolve()).then((()=>t({type:v,table:e}))).catch((()=>t(Ae((0,s.t)("An error occurred while collapsing the table schema. Please contact your administrator.")))))}}function Ot(e){return function(t){return((0,_.cr)(p.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.delete({endpoint:encodeURI(`/tableschemaview/${e.id}`)}):Promise.resolve()).then((()=>t({type:N,table:e}))).catch((()=>t(Ae((0,s.t)("An error occurred while removing the table schema. Please contact your administrator.")))))}}function Dt(e){return{type:J,alteredQueries:e}}function vt(e){return{type:ee,offline:e}}function Ut(e,t,r){return{type:Y,queryEditor:e,northPercent:t,southPercent:r}}function wt(e){return function(t){return l.Z.get({endpoint:`/kv/${e}`}).then((({json:e})=>t(je({title:e.title?e.title:(0,s.t)("Shared query"),dbId:e.dbId?parseInt(e.dbId,10):null,schema:e.schema?e.schema:null,autorun:!!e.autorun&&e.autorun,sql:e.sql?e.sql:"SELECT ..."})))).catch((()=>t(Ae(Ie))))}}function Ct(e){return function(t){return l.Z.get({endpoint:`/savedqueryviewapi/api/get/${e}`}).then((({json:e})=>{const r={...Oe(e.result),loaded:!0,autorun:!1};return t(je(r))})).catch((()=>t(Ae(Ie))))}}function Pt(e){return function(t){return l.Z.get({endpoint:`/api/v1/query/${e}`}).then((({json:e})=>{const r=e.result,n={dbId:r.database.id,schema:r.schema,sql:r.sql,title:`Copy of ${r.tab_name}`,autorun:!1};return t(je(n))})).catch((()=>t(Ae(Ie))))}}function Zt(e,t){return function(r){return l.Z.get({endpoint:`/superset/fetch_datasource_metadata?datasourceKey=${e}`}).then((({json:e})=>r(je({title:`Query ${e.name}`,dbId:e.database.id,schema:e.schema,autorun:void 0!==t,sql:t||e.select_star})))).catch((()=>r(Ae((0,s.t)("The datasource couldn't be loaded")))))}}function xt(){return{type:he}}function qt(e){const t=`${e.table_id}__table`;return{type:Te,datasource:t}}function $t(e){return{type:Se,err:e}}function Qt(e){return t=>(t(xt()),l.Z.post({endpoint:"/superset/sqllab_viz/",postPayload:{data:e}}).then((({json:e})=>(t(qt(e)),Promise.resolve(e)))).catch((()=>(t($t((0,s.t)("An error occurred while creating the data source"))),Promise.reject()))))}function Bt(e){return t=>(t(xt()),l.Z.post({endpoint:"/superset/get_or_create_table/",postPayload:{data:e}}).then((({json:e})=>(t(qt(e)),e))).catch((()=>{const e=(0,s.t)("An error occurred while creating the data source");return t($t(e)),Promise.reject(new Error(e))})))}function Mt(e,t){return function(r){return l.Z.get({endpoint:encodeURI(`/api/v1/database/${t}/function_names/`)}).then((({json:t})=>r({type:M,queryEditor:e,functionNames:t.function_names}))).catch((t=>{404===t.status?r({type:M,queryEditor:e,functionNames:[]}):r(Ae((0,s.t)("An error occurred while fetching function names.")))}))}}},68073:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),o=r(45697),i=r.n(o),a=r(74069),s=r(35932),l=r(11965);const c={dialogClassName:i().string,triggerNode:i().node.isRequired,modalTitle:i().node,modalBody:i().node,modalFooter:i().node,beforeOpen:i().func,onExit:i().func,isButton:i().bool,className:i().string,tooltip:i().string,width:i().string,maxWidth:i().string,responsive:i().bool,resizable:i().bool,resizableConfig:i().object,draggable:i().bool,draggableConfig:i().object,destroyOnClose:i().bool};class u extends n.Component{constructor(e){super(e),this.state={showModal:!1},this.open=this.open.bind(this),this.close=this.close.bind(this)}close(){this.setState((()=>({showModal:!1})))}open(e){e.preventDefault(),this.props.beforeOpen(),this.setState((()=>({showModal:!0})))}renderModal(){return(0,l.tZ)(a.Z,{wrapClassName:this.props.dialogClassName,className:this.props.className,show:this.state.showModal,onHide:this.close,afterClose:this.props.onExit,title:this.props.modalTitle,footer:this.props.modalFooter,hideFooter:!this.props.modalFooter,width:this.props.width,maxWidth:this.props.maxWidth,responsive:this.props.responsive,resizable:this.props.resizable,resizableConfig:this.props.resizableConfig,draggable:this.props.draggable,draggableConfig:this.props.draggableConfig,destroyOnClose:this.props.destroyOnClose},this.props.modalBody)}render(){return this.props.isButton?(0,l.tZ)(n.Fragment,null,(0,l.tZ)(s.Z,{className:"modal-trigger",tooltip:this.props.tooltip,onClick:this.open},this.props.triggerNode),this.renderModal()):(0,l.tZ)(n.Fragment,null,(0,l.tZ)("span",{onClick:this.open,role:"button"},this.props.triggerNode),this.renderModal())}}u.propTypes=c,u.defaultProps={beforeOpen:()=>{},onExit:()=>{},isButton:!1,className:"",modalTitle:"",resizable:!1,draggable:!1}},12515:(e,t,r)=>{"use strict";r.d(t,{Jp:()=>T,xW:()=>g,y8:()=>R,kN:()=>f,H6:()=>I,kP:()=>b,u:()=>N,pd:()=>L,pe:()=>O,AH:()=>D,bX:()=>v,CB:()=>U,mG:()=>w});var n=r(67294),o=r(54998),i=r.n(o),a=r(11064),s=r(19427),l=r(61654),c=r(31069),u=r(55786),d=r(86374),E=r(9679),_=r(27600),p=r(69856),m=r(80621),h=r(54076);function T(e){const{slice:t}=e;return t?t.slice_id:0}let S=0;function y(e=!1){let t=0;return e&&(t=S%d.X.length,S+=1,0===t&&(t+=1,S+=1)),d.X[t]}function g(e,t,r,n){if(null==e)return null;const o=r?"annotation_json":"slice_json";return i()(window.location.search).pathname(`/superset/${o}/${e}`).search({form_data:(0,E.o)(t,((e,t)=>null===t?void 0:t)),force:n}).toString()}function A(e="base"){return["full","json","csv","query","results","samples"].includes(e)?"/superset/explore_json/":"/superset/explore/"}function R(e,t={},r=!1){const n=new(i())("/"),o=A(e),a=n.search(!0);return Object.keys(t).forEach((e=>{a[e]=t[e]})),e===_.KD.standalone.name&&(r&&(a.force="1"),a.standalone=m._B.HIDE_NAV),n.directory(o).search(a).toString()}function f({path:e,qs:t,allowDomainSharding:r=!1}){let n=new(i())({protocol:window.location.protocol.slice(0,-1),hostname:y(r),port:window.location.port?window.location.port:"",path:e});return t&&(n=n.search(t)),n}function I({formData:e,endpointType:t="base",force:r=!1,curUrl:n=null,requestParams:o={},allowDomainSharding:a=!1,method:s="POST"}){if(!e.datasource)return null;delete e.label_colors;let l=f({path:"/",allowDomainSharding:a});n&&(l=i()(i()(n).search()));const c=A(t),u=l.search(!0),{slice_id:d,extra_filters:p,adhoc_filters:m,viz_type:h}=e;if(d){const e={slice_id:d};"GET"===s&&(e.viz_type=h,p&&p.length&&(e.extra_filters=p),m&&m.length&&(e.adhoc_filters=m)),u.form_data=(0,E.o)(e)}r&&(u.force="true"),"csv"===t&&(u.csv="true"),t===_.KD.standalone.name&&(u.standalone="1"),"query"===t&&(u.query="true"),"results"===t&&(u.results="true"),"samples"===t&&(u.samples="true");const T=Object.keys(o);return T.length&&T.forEach((e=>{o.hasOwnProperty(e)&&(u[e]=o[e])})),l.search(u).directory(c).toString()}const b=e=>{const t=(0,a.Z)().get(e.viz_type);return!!t&&t.useLegacyApi},N=({formData:e,force:t,resultFormat:r,resultType:n,setDataMask:o,ownState:i})=>{var a;return(null!=(a=(0,s.Z)().get(e.viz_type))?a:e=>(0,l.Z)(e,(e=>[{...e}])))({...e,force:t,result_format:r,result_type:n},{ownState:i,hooks:{setDataMask:o}})},L=({resultType:e,resultFormat:t})=>"csv"===t?t:e,O=({formData:e,resultFormat:t="json",resultType:r="full",force:n=!1,ownState:o={}})=>{let i,a;b(e)?(i=I({formData:e,endpointType:L({resultFormat:t,resultType:r}),allowDomainSharding:!1}),a=e):(i="/api/v1/chart/data",a=N({formData:e,force:n,resultFormat:t,resultType:r,ownState:o})),c.Z.postForm(i,{form_data:(0,E.o)(a)})},D=e=>{const t=I({formData:e,endpointType:"base",allowDomainSharding:!1});c.Z.postForm(t,{form_data:(0,E.o)(e)})},v=(e,t,r)=>{const o=(0,n.useCallback)(e,r);(0,n.useEffect)((()=>{const e=setTimeout((()=>{o()}),t);return()=>{clearTimeout(e)}}),[o,t])},U=(e,t,r)=>{const n=[...p.qK].map((e=>p.LT[e].operation)).indexOf(t)>=0;let o=null!=e?e:"";if(e&&t){o+=` ${t}`;const e=n&&Array.isArray(r)?r[0]:r,i=(0,u.Z)(r),a=void 0!==e&&Number.isNaN(Number(e)),s=a?"'":"",[l,c]=n?["(",")"]:["",""],d=i.map((e=>(0,h.lo)(e))).map((e=>`${s}${a?String(e).replace("'","''"):e}${s}`));i.length>0&&(o+=` ${l}${d.join(", ")}${c}`)}return o};function w(e){return e.map((e=>[e,e.toString()]))}},44814:(e,t,r)=>{"use strict";r.d(t,{zQ:()=>i,zO:()=>a});var n=r(30381),o=r.n(n);const i=function(e,t,r="HH:mm:ss.SS"){const n=t-e;return o()(new Date(n)).utc().format(r)},a=function(){return o()().utc().valueOf()}},86374:(e,t,r)=>{"use strict";r.d(t,{X:()=>i,_:()=>a});var n=r(91877),o=r(93185);const i=function(){var e;const t=document.getElementById("app");if(!t)return[];const r=new Set([window.location.hostname]);if("1"===new URLSearchParams(window.location.search).get("disableDomainSharding"))return Array.from(r);const i=JSON.parse(t.getAttribute("data-bootstrap"));return(0,n.fG)(null==i||null==(e=i.common)?void 0:e.feature_flags),(0,n.cr)(o.T.ALLOW_DASHBOARD_DOMAIN_SHARDING)&&i&&i.common&&i.common.conf&&i.common.conf.SUPERSET_WEBSERVER_DOMAINS&&i.common.conf.SUPERSET_WEBSERVER_DOMAINS.forEach((e=>{r.add(e)})),Array.from(r)}(),a=i.length>1},9882:(e,t,r)=>{"use strict";r.d(t,{V:()=>l,Z:()=>c});var n=r(21804),o=r.n(n),i=(r(67294),r(61988)),a=r(51776),s=r(11965);function l({label:e,tooltip:t,bsStyle:r,onClick:n,icon:l="info-circle",className:c="text-muted",placement:u="right",iconsStyle:d={}}){const E=`fa fa-${l} ${c} ${r?`text-${r}`:""}`,_=(0,s.tZ)("i",{role:"button","aria-label":(0,i.t)("Show info tooltip"),tabIndex:0,className:E,style:{cursor:n?"pointer":void 0,...d},onClick:n,onKeyPress:n&&(e=>{"Enter"!==e.key&&" "!==e.key||n()})});return t?(0,s.tZ)(a.u,{id:`${o()(e)}-tooltip`,title:t,placement:u},_):_}const c=l},51776:(e,t,r)=>{"use strict";r.d(t,{u:()=>c,Z:()=>u});var n=r(5872),o=r.n(n),i=r(67294),a=r(51995),s=r(11965),l=r(31097);const c=({overlayStyle:e,color:t,...r})=>{const n=(0,a.Fg)(),c=`${n.colors.grayscale.dark2}e6`;return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(s.xB,{styles:s.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,s.tZ)(l.Z,o()({overlayStyle:{fontSize:n.typography.sizes.s,lineHeight:"1.6",maxWidth:62*n.gridUnit,minWidth:30*n.gridUnit,...e},align:{offset:[0,1]},color:c||t,trigger:"hover",placement:"bottom",mouseLeaveDelay:0},r)))},u=c},19427:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(90537),o=r(1875);class i extends n.Z{constructor(){super({name:"ChartBuildQuery",overwritePolicy:n.r.WARN})}}const a=(0,o.Z)(i)},11064:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(90537),o=r(1875);class i extends n.Z{constructor(){super({name:"ChartMetadata",overwritePolicy:n.r.WARN})}}const a=(0,o.Z)(i)},78186:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u}),r(67294);var n=r(30724),o=r.n(n),i=r(17031),a=r.n(i),s=r(93185),l=r(11965);function c(e){return"html"!==e.type||!e.value||!1===/href="(javascript|vbscript|file):.*"/gim.test(e.value)}const u=function({source:e}){return(0,l.tZ)(o(),{source:e,escapeHtml:(0,s.c)(s.T.ESCAPE_MARKDOWN_HTML),skipHtml:!(0,s.c)(s.T.DISPLAY_MARKDOWN_HTML),allowNode:c,astPlugins:[a()({isValidNode:e=>"script"!==e.type})]})}},67706:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(46078);class o{constructor(e){this.id=void 0,this.type=void 0;const[t,r]=e.split("__");this.id=parseInt(t,10),this.type="table"===r?n.i9.Table:n.i9.Druid}toString(){return`${this.id}__${this.type}`}toObject(){return{id:this.id,type:this.type}}}},61654:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(12727),o=r(67706);const i=e=>[e];function a(e,t){const{queryFields:r,buildQuery:a=i}="function"==typeof t?{buildQuery:t,queryFields:{}}:t||{},s=a((0,n.Z)(e,r));return s.forEach((e=>{Array.isArray(e.post_processing)&&(e.post_processing=e.post_processing.filter(Boolean))})),{datasource:new o.Z(e.datasource).toObject(),force:e.force||!1,queries:s,form_data:e,result_format:e.result_format||"json",result_type:e.result_type||"full"}}},12727:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(72813),o=r(46306),i=r(78483);function a(e){let t=e;return e.includes("--")&&(t=`${e}\n`),`(${t})`}var s=r(20620),l=r(61988),c=r(74765),u=r(5364),d=r(10581),E=r(56652);function _(e,t){const{annotation_layers:r=[],extra_form_data:_,time_range:p,since:m,until:h,row_limit:T,row_offset:S,order_desc:y,limit:g,timeseries_limit_metric:A,granularity:R,url_params:f={},custom_params:I={},series_columns:b,series_limit:N,series_limit_metric:L,...O}=e,{adhoc_filters:D=[],filters:v=[],custom_form_data:U={},...w}=_||{},C=Number(T),P=Number(S),{metrics:Z,columns:x,orderby:q}=function(e,t){const r={metric:"metrics",metric_2:"metrics",secondary_metric:"metrics",x:"metrics",y:"metrics",size:"metrics",all_columns:"columns",series:"groupby",order_by_cols:"orderby",...t},{query_mode:n,include_time:o,...i}=e;let a=[],_=[],p=[];return Object.entries(i).forEach((([e,t])=>{if(null==t)return;let o=r[e]||e;n===s.nJ.aggregate&&"columns"===o||(n!==s.nJ.raw||"groupby"!==o&&"metrics"!==o)&&("groupby"===o&&(o="columns"),"metrics"===o?_=_.concat(t):"columns"===o?a=a.concat(t):"orderby"===o&&(p=p.concat(t)))})),o&&!a.includes(u.W3)&&a.unshift(u.W3),{columns:(0,c.Z)(a.filter((e=>""!==e)),d.Z),metrics:n===s.nJ.raw?void 0:(0,c.Z)(_,E.Z),orderby:p.length>0?p.map((e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(e){throw new Error((0,l.t)("Found invalid orderby options"))}return e})):void 0}}(O,t),$=function(e){const t={},r=[],n={},o={filters:r,extras:n,applied_time_extras:t},i={__time_range:"time_range",__time_col:"granularity_sqla",__time_grain:"time_grain_sqla",__time_origin:"druid_time_origin",__granularity:"granularity"};return(e.extra_filters||[]).forEach((e=>{if(e.col in i){const r=e.col;o[i[r]]=e.val,t[r]=e.val}else r.push(e)})),(0,s.zU)(e)&&!o.druid_time_origin?(n.druid_time_origin=e.druid_time_origin,delete o.druid_time_origin):(n.time_grain_sqla=o.time_grain_sqla||e.time_grain_sqla,o.granularity=o.granularity_sqla||e.granularity||e.granularity_sqla,delete o.granularity_sqla,delete o.time_grain_sqla),o}(e),{filters:Q}=$,B={filters:[...Q,...v],adhoc_filters:[...e.adhoc_filters||[],...D]},M=function(e){const{adhoc_filters:t,extras:r={},filters:n=[],where:s}=e,l=n,c=[],u=[];s&&u.push(s);const d=[];return(t||[]).forEach((e=>{const{clause:t}=e;if((0,o.Ki)(e)){const r=(0,i.Z)(e);"WHERE"===t?l.push(r):c.push(r)}else{const{sqlExpression:r}=e;"WHERE"===t?u.push(r):d.push(r)}})),r.having=d.map(a).join(" AND "),r.having_druid=c,r.where=u.map(a).join(" AND "),{filters:l,extras:r}}({...e,...$,...B});let Y={time_range:p||void 0,since:m||void 0,until:h||void 0,granularity:R||void 0,...$,...M,columns:x,metrics:Z,orderby:q,annotation_layers:r,row_limit:null==T||Number.isNaN(C)?void 0:C,row_offset:null==S||Number.isNaN(P)?void 0:P,series_columns:b,series_limit:N,series_limit_metric:(e=>{if((0,n.GA)(e)||(0,n.s9)(e))return e})(L),timeseries_limit:g?Number(g):0,timeseries_limit_metric:A||void 0,order_desc:void 0===y||y,url_params:f||void 0,custom_params:I};return Y=function(e,t){const r={...e},{extras:n={}}=r;return Object.entries(u.gn).forEach((([e,n])=>{const o=t[e];void 0!==o&&(r[n]=o)})),u.fn.forEach((e=>{e in t&&(n[e]=t[e])})),Object.keys(n).length>0&&(r.extras=n),r}(Y,w),{...Y,custom_form_data:U}}},5364:(e,t,r)=>{"use strict";r.d(t,{W3:()=>n,fn:()=>o,Ci:()=>i,gn:()=>a,NU:()=>s,Ay:()=>l});const n="__timestamp",o=["druid_time_origin","relative_start","relative_end","time_grain_sqla"],i=["adhoc_filters","filters","interactive_groupby","interactive_highlight","interactive_drilldown","custom_form_data"],a={granularity:"granularity",granularity_sqla:"granularity",time_column:"time_column",time_grain:"time_grain",time_range:"time_range"},s=Object.keys(a),l=[...s,...o]},78483:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(46306);function o(e){const{subject:t}=e;if((0,n._l)(e)){const{operator:r}=e;return{col:t,op:r}}if((0,n.kC)(e)){const{operator:r}=e;return{col:t,op:r,val:e.comparator}}const{operator:r}=e;return{col:t,op:r,val:e.comparator}}},10581:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(72813);function o(e){return(0,n.s9)(e)?e:e.label?e.label:e.sqlExpression}},56652:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(20620),o=r(62446);function i(e){return(0,n.AG)(e)?e:e.label?e.label:(0,o.n)(e)?`${e.aggregate}(${e.column.columnName||e.column.column_name})`:e.sqlExpression}},72813:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>n,s9:()=>o,GA:()=>i});const n={};function o(e){return"string"==typeof e}function i(e){return void 0!==(null==e?void 0:e.sqlExpression)}},46078:(e,t,r)=>{"use strict";var n;r.d(t,{i9:()=>n,BH:()=>o,ZP:()=>i}),function(e){e.Table="table",e.Druid="druid",e.Query="query",e.Dataset="dataset",e.SlTable="sl_table",e.SavedQuery="saved_query"}(n||(n={}));const o=[{metric_name:"COUNT(*)",expression:"COUNT(*)"}],i={}},46306:(e,t,r)=>{"use strict";r.d(t,{Ki:()=>o,_l:()=>i,kC:()=>a,VK:()=>s});var n=r(31612);function o(e){return"SIMPLE"===e.expressionType}function i(e){return(0,n.CW)(e.operator)}function a(e){return(0,n.VU)(e.operator)}function s(e){return(0,n.XA)(e.operator)}},62446:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n,n:()=>o});const n={};function o(e){return"SIMPLE"===e.expressionType}},31612:(e,t,r)=>{"use strict";r.d(t,{CW:()=>o,VU:()=>a,XA:()=>l});const n=new Set(["IS NOT NULL","IS NULL"]);function o(e){return n.has(e)}const i=new Set(["==","!=",">","<",">=","<=","ILIKE","LIKE","REGEX"]);function a(e){return i.has(e)}const s=new Set(["IN","NOT IN"]);function l(e){return s.has(e)}},20620:(e,t,r)=>{"use strict";var n;function o(e){return"granularity"in e}function i(e){return"string"==typeof e}r.d(t,{nJ:()=>n,zU:()=>o,AG:()=>i,ZP:()=>a}),function(e){e.aggregate="aggregate",e.raw="raw"}(n||(n={}));const a={}},93185:(e,t,r)=>{"use strict";var n;function o(e){return window&&window.featureFlags&&!!window.featureFlags[e]}r.d(t,{T:()=>n,c:()=>o}),function(e){e.ALLOW_DASHBOARD_DOMAIN_SHARDING="ALLOW_DASHBOARD_DOMAIN_SHARDING",e.ALERT_REPORTS="ALERT_REPORTS",e.CLIENT_CACHE="CLIENT_CACHE",e.DYNAMIC_PLUGINS="DYNAMIC_PLUGINS",e.ENABLE_ADVANCED_DATA_TYPES="ENABLE_ADVANCED_DATA_TYPES",e.SCHEDULED_QUERIES="SCHEDULED_QUERIES",e.SQL_VALIDATORS_BY_ENGINE="SQL_VALIDATORS_BY_ENGINE",e.ESTIMATE_QUERY_COST="ESTIMATE_QUERY_COST",e.SHARE_QUERIES_VIA_KV_STORE="SHARE_QUERIES_VIA_KV_STORE",e.SQLLAB_BACKEND_PERSISTENCE="SQLLAB_BACKEND_PERSISTENCE",e.THUMBNAILS="THUMBNAILS",e.LISTVIEWS_DEFAULT_CARD_VIEW="LISTVIEWS_DEFAULT_CARD_VIEW",e.DISABLE_LEGACY_DATASOURCE_EDITOR="DISABLE_LEGACY_DATASOURCE_EDITOR",e.DISABLE_DATASET_SOURCE_EDIT="DISABLE_DATASET_SOURCE_EDIT",e.DISPLAY_MARKDOWN_HTML="DISPLAY_MARKDOWN_HTML",e.ESCAPE_MARKDOWN_HTML="ESCAPE_MARKDOWN_HTML",e.DASHBOARD_NATIVE_FILTERS="DASHBOARD_NATIVE_FILTERS",e.DASHBOARD_CROSS_FILTERS="DASHBOARD_CROSS_FILTERS",e.DASHBOARD_NATIVE_FILTERS_SET="DASHBOARD_NATIVE_FILTERS_SET",e.DASHBOARD_FILTERS_EXPERIMENTAL="DASHBOARD_FILTERS_EXPERIMENTAL",e.EMBEDDED_SUPERSET="EMBEDDED_SUPERSET",e.ENABLE_FILTER_BOX_MIGRATION="ENABLE_FILTER_BOX_MIGRATION",e.VERSIONED_EXPORT="VERSIONED_EXPORT",e.GLOBAL_ASYNC_QUERIES="GLOBAL_ASYNC_QUERIES",e.ENABLE_TEMPLATE_PROCESSING="ENABLE_TEMPLATE_PROCESSING",e.ENABLE_EXPLORE_DRAG_AND_DROP="ENABLE_EXPLORE_DRAG_AND_DROP",e.ENABLE_DND_WITH_CLICK_UX="ENABLE_DND_WITH_CLICK_UX",e.FORCE_DATABASE_CONNECTIONS_SSL="FORCE_DATABASE_CONNECTIONS_SSL",e.ENABLE_TEMPLATE_REMOVE_FILTERS="ENABLE_TEMPLATE_REMOVE_FILTERS",e.ENABLE_JAVASCRIPT_CONTROLS="ENABLE_JAVASCRIPT_CONTROLS",e.DASHBOARD_RBAC="DASHBOARD_RBAC",e.ALERTS_ATTACH_REPORTS="ALERTS_ATTACH_REPORTS",e.ALLOW_FULL_CSV_EXPORT="ALLOW_FULL_CSV_EXPORT",e.UX_BETA="UX_BETA",e.GENERIC_CHART_AXES="GENERIC_CHART_AXES",e.USE_ANALAGOUS_COLORS="USE_ANALAGOUS_COLORS"}(n||(n={}))},74765:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e,t){if(t){const r=new Set;return e.filter((e=>{const n=t(e);return!r.has(n)&&(r.add(n),!0)}))}return[...new Set(e)]}},41331:(e,t,r)=>{"use strict";r.d(t,{W:()=>b});var n,o=r(67294),i=r(87183),a=r(4715),s=r(9875),l=r(74069),c=r(35932),u=r(51995),d=r(31069),E=r(22102),_=r(61988),p=r(37703),m=r(30381),h=r.n(m),T=r(15926),S=r.n(T),y=r(84548),g=r(72570);!function(e){e[e.SAVE_NEW=1]="SAVE_NEW",e[e.OVERWRITE_DATASET=2]="OVERWRITE_DATASET"}(n||(n={}));const A={metrics:[],groupby:[],time_range:"No filter",viz_type:"table"};var R=r(12515),f=r(11965);const I=u.iK.div`
  .sdm-body {
    margin: 0 8px;
  }
  .sdm-input {
    margin-left: 45px;
    width: 401px;
  }
  .sdm-autocomplete {
    margin-left: 8px;
    width: 401px;
  }
  .sdm-radio {
    display: block;
    height: 30px;
    margin: 10px 0px;
    line-height: 30px;
  }
  .sdm-overwrite-msg {
    margin: 7px;
  }
`,b=({visible:e,onHide:t,buttonTextOnSave:r,buttonTextOnOverwrite:u,modalDescription:m,datasource:T})=>{const b=T,N=()=>`${b.tab} ${h()().format("MM/DD/YYYY HH:mm:ss")}`,[L,O]=(0,o.useState)(N()),[D,v]=(0,o.useState)(n.SAVE_NEW),[U,w]=(0,o.useState)(!1),[C,P]=(0,o.useState)([]),[Z,x]=(0,o.useState)({}),[q,$]=(0,o.useState)(""),Q=(0,p.v9)((e=>(e=>{if(e.hasOwnProperty("sqlLab")){const{sqlLab:{user:t}}=e;return t}const{explore:{user:t}}=e;return t})(e))),B=(0,p.I0)(),M=D===n.SAVE_NEW&&0===L.length||D===n.OVERWRITE_DATASET&&0===Object.keys(Z).length&&0===q.length;return(0,f.tZ)(l.Z,{show:e,title:(0,_.t)("Save or Overwrite Dataset"),onHide:t,footer:(0,f.tZ)(o.Fragment,null,!U&&(0,f.tZ)(c.Z,{disabled:M,buttonStyle:"primary",onClick:()=>{if(D===n.OVERWRITE_DATASET)return void w(!0);const e=b.results.selected_columns||[];if(b.templateParams){const e=JSON.parse(b.templateParams);e._filters&&(delete e._filters,b.templateParams=JSON.stringify(e))}B((0,y.createDatasource)({schema:b.schema,sql:b.sql,dbId:b.dbId,templateParams:b.templateParams,datasourceName:L,columns:e})).then((t=>{(0,R.AH)({datasource:`${t.table_id}__table`,metrics:[],groupby:[],time_range:"No filter",viz_type:"table",all_columns:e.map((e=>e.name)),row_limit:1e3})})).catch((()=>{(0,g.Gb)((0,_.t)("An error occurred saving dataset"))})),O(N()),t()}},r),U&&(0,f.tZ)(o.Fragment,null,(0,f.tZ)(c.Z,{onClick:()=>{w(!1),x({})}},"Back"),(0,f.tZ)(c.Z,{className:"md",buttonStyle:"primary",onClick:async()=>{await(async(e,t,r,n,o,i)=>{const a=`api/v1/dataset/${t}?override_columns=true`,s=JSON.stringify({sql:r,columns:n,owners:o,database_id:e});return(await d.Z.put({endpoint:a,headers:{"Content-Type":"application/json"},body:s})).json.result})(b.dbId,Z.datasetId,b.sql,b.results.selected_columns.map((e=>({column_name:e.name,type:e.type,is_dttm:e.is_dttm}))),Z.owners.map((e=>e.id))),w(!1),x({}),O(N()),(0,R.AH)({...A,datasource:`${Z.datasetId}__table`,all_columns:b.results.selected_columns.map((e=>e.name))})},disabled:M},u)))},(0,f.tZ)(I,null,!U&&(0,f.tZ)("div",{className:"sdm-body"},m&&(0,f.tZ)("div",{className:"sdm-prompt"},m),(0,f.tZ)(i.Y.Group,{onChange:e=>{v(Number(e.target.value))},value:D},(0,f.tZ)(i.Y,{className:"sdm-radio",value:1},(0,_.t)("Save as new"),(0,f.tZ)(s.II,{className:"sdm-input",defaultValue:L,onChange:e=>{O(e.target.value)},disabled:1!==D})),(0,f.tZ)(i.Y,{className:"sdm-radio",value:2},(0,_.t)("Overwrite existing"),(0,f.tZ)(a.Qc,{className:"sdm-autocomplete",options:C,onSelect:(e,t)=>x(t),onSearch:async e=>{const t=await(async(e="")=>{const{userId:t}=Q;if(t){const r=S().encode({filters:[{col:"table_name",opr:"ct",value:e},{col:"owners",opr:"rel_m_m",value:t}],order_column:"changed_on_delta_humanized",order_direction:"desc"});return(await(0,E.Z)({method:"GET",endpoint:"/api/v1/dataset"})(`q=${r}`)).result.map((e=>({value:e.table_name,datasetId:e.id,owners:e.owners})))}return null})(e);P(t)},onChange:e=>{x({}),$(e)},placeholder:(0,_.t)("Select or type dataset name"),filterOption:(e,t)=>t.value.toLowerCase().includes(e.toLowerCase()),disabled:2!==D,value:q})))),U&&(0,f.tZ)("div",{className:"sdm-overwrite-msg"},(0,_.t)("Are you sure you want to overwrite this dataset?"))))}},44904:(e,t,r)=>{"use strict";r.d(t,{IY:()=>n,Em:()=>o,eU:()=>i,ev:()=>a,rp:()=>s,Yo:()=>l,TU:()=>c,U$:()=>u,b$:()=>d,rD:()=>E,N2:()=>_,Yn:()=>p,GJ:()=>m,iJ:()=>h,lr:()=>T,OI:()=>S});const n={offline:"danger",failed:"danger",pending:"info",fetching:"info",running:"warning",stopped:"danger",success:"success"},o={success:"success",failed:"failed",running:"running",offline:"offline",pending:"pending"},i=5,a=3,s=51,l=1024,c=2,u=864e5,d=5120,E=.9,_=8e3,p=100,m=90,h=60,T=55,S=50},33313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(44904);const o=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:n.Yn,value:e})))},29487:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(5872),o=r.n(n),i=r(11965),a=(r(67294),r(4863)),s=r(51995),l=r(70163);function c(e){const{type:t="info",description:r,showIcon:n=!0,closable:c=!0,roomBelow:u=!1,children:d}=e,E=(0,s.Fg)(),{colors:_,typography:p,gridUnit:m}=E,{alert:h,error:T,info:S,success:y}=_;let g=S,A=l.Z.InfoSolid;return"error"===t?(g=T,A=l.Z.ErrorSolid):"warning"===t?(g=h,A=l.Z.AlertSolid):"success"===t&&(g=y,A=l.Z.CircleCheckSolid),(0,i.tZ)(a.default,o()({role:"alert",showIcon:n,icon:(0,i.tZ)(A,{"aria-label":`${t} icon`}),closeText:c&&(0,i.tZ)(l.Z.XSmall,{"aria-label":"close icon"}),css:(0,i.iv)({marginBottom:u?4*m:0,padding:`${2*m}px ${3*m}px`,alignItems:"flex-start",border:0,backgroundColor:g.light2,"& .ant-alert-icon":{marginRight:2*m},"& .ant-alert-message":{color:g.dark2,fontSize:p.sizes.m,fontWeight:r?p.weights.bold:p.weights.normal},"& .ant-alert-description":{color:g.dark2,fontSize:p.sizes.m}},"","")},e),d)}},94670:(e,t,r)=>{"use strict";r.d(t,{iO:()=>d,up:()=>E,cE:()=>_,YH:()=>p,ry:()=>m,Ad:()=>h,Z5:()=>T});var n=r(5872),o=r.n(n),i=r(67294),a=r(53239),s=r(67913),l=r(11965);const c={"mode/sql":()=>r.e(8883).then(r.t.bind(r,48883,23)),"mode/markdown":()=>Promise.all([r.e(9794),r.e(5802),r.e(4832),r.e(6061)]).then(r.t.bind(r,66061,23)),"mode/css":()=>Promise.all([r.e(5802),r.e(4972)]).then(r.t.bind(r,94972,23)),"mode/json":()=>r.e(8750).then(r.t.bind(r,58750,23)),"mode/yaml":()=>r.e(741).then(r.t.bind(r,60741,23)),"mode/html":()=>Promise.all([r.e(9794),r.e(5802),r.e(4832),r.e(1258)]).then(r.t.bind(r,71258,23)),"mode/javascript":()=>Promise.all([r.e(9794),r.e(4579)]).then(r.t.bind(r,54579,23)),"theme/textmate":()=>r.e(2089).then(r.t.bind(r,2089,23)),"theme/github":()=>r.e(440).then(r.t.bind(r,50440,23)),"ext/language_tools":()=>r.e(5335).then(r.t.bind(r,75335,23)),"ext/searchbox":()=>r.e(8656).then(r.t.bind(r,68656,23))};function u(e,{defaultMode:t,defaultTheme:n,defaultTabSize:u=2,placeholder:d}={}){return(0,s.Z)((async()=>{var s,d;const{default:E}=await Promise.all([r.e(1216),r.e(7167)]).then(r.bind(r,74981));await Promise.all(e.map((e=>c[e]())));const _=t||(null==(s=e.find((e=>e.startsWith("mode/"))))?void 0:s.replace("mode/","")),p=n||(null==(d=e.find((e=>e.startsWith("theme/"))))?void 0:d.replace("theme/",""));return(0,i.forwardRef)((function({keywords:e,mode:t=_,theme:r=p,tabSize:n=u,defaultValue:i="",...s},c){if(e){const r={getCompletions:(r,n,o,i,a)=>{Number.isNaN(parseInt(i,10))&&n.getMode().$id===`ace/mode/${t}`&&a(null,e)}};(0,a.acequire)("ace/ext/language_tools").setCompleters([r])}return(0,l.tZ)(E,o()({ref:c,mode:t,theme:r,tabSize:n,defaultValue:i},s))}))}),d)}const d=u(["mode/sql","theme/github","ext/language_tools","ext/searchbox"]),E=u(["mode/sql","theme/github","ext/language_tools","ext/searchbox"],{placeholder:()=>(0,l.tZ)("div",{style:{height:"100%"}},(0,l.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,l.tZ)("div",{className:"ace_content"}))}),_=u(["mode/markdown","theme/textmate"]),p=u(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),m=u(["mode/css","theme/github"]),h=u(["mode/json","theme/github"]),T=u(["mode/json","mode/yaml","theme/github"])},67913:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(5872),o=r.n(n),i=r(67294),a=r(38703),s=r(11965);function l({width:e,height:t,showLoadingForImport:r=!1,placeholderStyle:n}){return t&&(0,s.tZ)("div",{key:"async-asm-placeholder",style:{width:e,height:t,...n}},r&&(0,s.tZ)(a.Z,{position:"floating"}))||null}function c(e,t=l){let r,n;function a(){return r||(r=e instanceof Promise?e:e()),n||r.then((e=>{n=e.default||e})),r}const c=(0,i.forwardRef)((function(e,r){const[l,c]=(0,i.useState)(void 0!==n);(0,i.useEffect)((()=>{let e=!0;return l||a().then((()=>{e&&c(!0)})),()=>{e=!1}}));const u=n||t;return u?(0,s.tZ)(u,o()({ref:u===n?r:null},e)):null}));return c.preload=a,c}},43700:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a}),r(67294);var n=r(51995),o=r(46445),i=r(11965);const a=Object.assign((0,n.iK)((({light:e,bigger:t,bold:r,animateArrows:n,...a})=>(0,i.tZ)(o.Z,a)))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:r})=>e&&t&&`\n            border-bottom: 1px solid ${r.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:o.Z.Panel})},94301:(e,t,r)=>{"use strict";r.d(t,{XJ:()=>g,x3:()=>A,Tc:()=>R}),r(67294);var n,o=r(51995),i=r(11965),a=r(4715),s=r(35932);!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(n||(n={}));const l=o.iK.div`
  ${({theme:e})=>i.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: ${4*e.gridUnit}px;
    text-align: center;

    & .ant-empty-image svg {
      width: auto;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${e.colors.grayscale.base};
      }
    }
  `}
`,c=o.iK.div``,u=o.iK.p`
  ${({theme:e})=>i.iv`
    font-size: ${e.typography.sizes.m}px;
    color: ${e.colors.grayscale.light1};
    margin: ${2*e.gridUnit}px 0 0 0;
    font-weight: ${e.typography.weights.bold};
  `}
`,d=(0,o.iK)(u)`
  ${({theme:e})=>i.iv`
    font-size: ${e.typography.sizes.l}px;
    color: ${e.colors.grayscale.light1};
    margin-top: ${4*e.gridUnit}px;
  `}
`,E=o.iK.p`
  ${({theme:e})=>i.iv`
    font-size: ${e.typography.sizes.s}px;
    color: ${e.colors.grayscale.light1};
    margin: ${2*e.gridUnit}px 0 0 0;
  `}
`,_=(0,o.iK)(E)`
  ${({theme:e})=>i.iv`
    font-size: ${e.typography.sizes.m}px;
  `}
`,p=(0,o.iK)(E)`
  ${({theme:e})=>i.iv`
    margin-top: ${e.gridUnit}px;
    line-height: 1.2;
  `}
`,m=(0,o.iK)(s.Z)`
  ${({theme:e})=>i.iv`
    margin-top: ${4*e.gridUnit}px;
    z-index: 1;
  `}
`,h=e=>"string"==typeof e?`/static/assets/images/${e}`:e,T=e=>{switch(e){case n.Small:return{height:"50px"};case n.Medium:return{height:"80px"};case n.Big:return{height:"150px"};default:return{height:"50px"}}},S=({image:e,size:t})=>(0,i.tZ)(a.HY,{description:!1,image:h(e),imageStyle:T(t)}),y=e=>{e.preventDefault(),e.stopPropagation()},g=({title:e,image:t,description:r,buttonAction:o,buttonText:a})=>(0,i.tZ)(l,null,(0,i.tZ)(S,{image:t,size:n.Big}),(0,i.tZ)(c,{css:e=>i.iv`
          max-width: ${150*e.gridUnit}px;
        `},(0,i.tZ)(d,null,e),r&&(0,i.tZ)(_,null,r),o&&a&&(0,i.tZ)(m,{buttonStyle:"primary",onClick:o,onMouseDown:y},a))),A=({title:e,image:t,description:r,buttonAction:o,buttonText:a})=>(0,i.tZ)(l,null,(0,i.tZ)(S,{image:t,size:n.Medium}),(0,i.tZ)(c,{css:e=>i.iv`
          max-width: ${100*e.gridUnit}px;
        `},(0,i.tZ)(u,null,e),r&&(0,i.tZ)(E,null,r),a&&o&&(0,i.tZ)(m,{buttonStyle:"primary",onClick:o,onMouseDown:y},a))),R=({title:e,image:t,description:r})=>(0,i.tZ)(l,null,(0,i.tZ)(S,{image:t,size:n.Small}),(0,i.tZ)(c,{css:e=>i.iv`
          max-width: ${75*e.gridUnit}px;
        `},(0,i.tZ)(u,null,e),r&&(0,i.tZ)(p,null,r)))},72875:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294),o=r(61988),i=r(92869),a=r(91178),s=r(11965);const l=(0,o.t)("Unexpected error");function c({title:e=l,error:t,subtitle:r,copyText:o,link:c,stackTrace:u,source:d}){if(t){const e=(0,i.Z)().get(t.error_type);if(e)return(0,s.tZ)(e,{error:t,source:d,subtitle:r})}return(0,s.tZ)(a.Z,{level:"warning",title:e,subtitle:r,copyText:o,source:d,body:c||u?(0,s.tZ)(n.Fragment,null,c&&(0,s.tZ)("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"(Request Access)"),(0,s.tZ)("br",null),u&&(0,s.tZ)("pre",null,u)):void 0})}},4591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(97538);const o=(0,r(51995).iK)(n.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(67294);var n=r(51995),o=r(11965);const i=n.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,a=n.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function s({children:e,htmlFor:t,required:r=!1,className:n}){const s=r?a:i;return(0,o.tZ)(s,{htmlFor:t,className:n},e)}},87858:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n,o=r(5872),i=r.n(o),a=r(67294),s=r(4107),l=r(31097),c=r(88633),u=r(95357),d=r(51995),E=r(11965),_=r(8272);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}const m=function(e){return a.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm0 8a1 1 0 100 2 1 1 0 000-2zm9.71-7.44l-5.27-5.27a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.56a1.05 1.05 0 00-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.27a1.05 1.05 0 00.29-.71V8.27a1.05 1.05 0 00-.29-.71zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62z",fill:"currentColor"})))};var h=r(4591),T=r(2857);const S=(0,d.iK)(s.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,y=(0,d.iK)(s.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,g=(0,d.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,A=d.iK.div`
  display: flex;
  align-items: center;
`,R=(0,d.iK)(T.Z)`
  margin-bottom: 0;
`,f=({label:e,validationMethods:t,errorMessage:r,helpText:n,required:o=!1,hasTooltip:a=!1,tooltipText:s,id:d,className:p,...T})=>(0,E.tZ)(g,{className:p},(0,E.tZ)(A,null,(0,E.tZ)(R,{htmlFor:d,required:o},e),a&&(0,E.tZ)(_.Z,{tooltip:`${s}`,viewBox:"0 -1 24 24"})),(0,E.tZ)(h.Z,{css:e=>((e,t)=>E.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${m});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!r),validateTrigger:Object.keys(t),validateStatus:r?"error":"success",help:r||n,hasFeedback:!!r},"password"===T.name?(0,E.tZ)(y,i()({},T,t,{iconRender:e=>e?(0,E.tZ)(l.Z,{title:"Hide password."},(0,E.tZ)(c.Z,null)):(0,E.tZ)(l.Z,{title:"Show password."},(0,E.tZ)(u.Z,null)),role:"textbox"})):(0,E.tZ)(S,i()({},T,t))))},49238:(e,t,r)=>{"use strict";r.d(t,{l0:()=>s,xJ:()=>l.Z,lX:()=>c.Z}),r(67294);var n=r(97538),o=r(51995),i=r(11965);const a=(0,o.iK)(n.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function s(e){return(0,i.tZ)(a,e)}var l=r(4591),c=r(2857);r(87858)},8272:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u}),r(67294);var n=r(51995),o=r(58593),i=r(70163),a=r(11965);const s=(0,n.iK)(o.u)`
  cursor: pointer;
  path:first-of-type {
    fill: ${({theme:e})=>e.colors.grayscale.base};
  }
`,l=n.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,c={fontSize:"12px",lineHeight:"16px"};function u({tooltip:e,placement:t="right",trigger:r="hover",overlayStyle:n=c,bgColor:o="rgba(0,0,0,0.9)",viewBox:u="0 -2 24 24"}){return(0,a.tZ)(s,{title:(0,a.tZ)(l,null,e),placement:t,trigger:r,overlayStyle:n,color:o},(0,a.tZ)(i.Z.InfoSolidSmall,{className:"info-solid-small",viewBox:u}))}},9875:(e,t,r)=>{"use strict";r.d(t,{II:()=>a,Rn:()=>s,Kx:()=>l});var n=r(51995),o=r(4107),i=r(21888);const a=(0,n.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,n.iK)(i.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,l=(0,n.iK)(o.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},83862:(e,t,r)=>{"use strict";r.d(t,{v:()=>l,$:()=>c});var n=r(51995),o=r(43865);const i=(0,n.iK)(o.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>8*e.gridUnit}px;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,a=(0,n.iK)(o.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,s=(0,n.iK)(o.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,l=Object.assign(o.Z,{Item:i}),c=Object.assign(a,{Item:i,SubMenu:s,Divider:o.Z.Divider,ItemGroup:o.Z.ItemGroup})},87183:(e,t,r)=>{"use strict";r.d(t,{Y:()=>s});var n=r(51995),o=r(47933);const i=(0,n.iK)(o.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,a=(0,n.iK)(o.ZP.Group)`
  font-size: inherit;
`,s=Object.assign(i,{Group:a})},86057:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(11965),o=(r(67294),r(51995)),i=r(78186),a=r(70163),s=r(58593);const l=function({warningMarkdown:e,size:t}){const r=(0,o.Fg)();return(0,n.tZ)(s.u,{id:"warning-tooltip",title:(0,n.tZ)(i.Z,{source:e})},(0,n.tZ)(a.Z.AlertSolid,{iconColor:r.colors.alert.base,iconSize:t,css:(0,n.iv)({marginRight:2*r.gridUnit},"","")}))}},80621:(e,t,r)=>{"use strict";r.d(t,{PV:()=>n,M2:()=>o,_4:()=>i,Zn:()=>a,D0:()=>s,Jd:()=>l,Nb:()=>c,ES:()=>u,Z1:()=>d,C3:()=>E,vD:()=>_,Xk:()=>p,NN:()=>m,gR:()=>h,Mu:()=>T,cd:()=>S,es:()=>y,cz:()=>g,cx:()=>A,AA:()=>R,fw:()=>f,u_:()=>I,OE:()=>b,pQ:()=>N,b5:()=>L,HE:()=>O,Q9:()=>D,TN:()=>v,kS:()=>U,Bu:()=>w,Ep:()=>C,dU:()=>P,_B:()=>Z});const n="GRID_ID",o="HEADER_ID",i="ROOT_ID",a="DASHBOARD_VERSION_KEY",s="NEW_COMPONENTS_SOURCE_ID",l="NEW_CHART_ID",c="NEW_COLUMN_ID",u="NEW_DIVIDER_ID",d="NEW_HEADER_ID",E="NEW_MARKDOWN_ID",_="NEW_ROW_ID",p="NEW_TAB_ID",m="NEW_TABS_ID",h="NEW_DYNAMIC_COMPONENT",T=0,S=8,y=2*S,g=12,A=1,R=5,f=4,I="SMALL_HEADER",b="MEDIUM_HEADER",N="LARGE_HEADER",L="BACKGROUND_WHITE",O="BACKGROUND_TRANSPARENT",D=50,v="overwrite",U="newDashboard",w=65535,C=["LABEL"],P="ALL_FILTERS_ROOT";var Z;!function(e){e[e.NONE=0]="NONE",e[e.HIDE_NAV=1]="HIDE_NAV",e[e.HIDE_NAV_AND_TITLE=2]="HIDE_NAV_AND_TITLE",e[e.REPORT=3]="REPORT"}(Z||(Z={}))},69856:(e,t,r)=>{"use strict";r.d(t,{YY:()=>o,Ps:()=>i,d:()=>a,LT:()=>s,GS:()=>l,QB:()=>c,fV:()=>u,Ak:()=>d,qK:()=>E,qB:()=>_,yi:()=>p,Q_:()=>m,m_:()=>h,ft:()=>T,cM:()=>S,i2:()=>y,X5:()=>g,vM:()=>A,Qi:()=>R,Yd:()=>f,H7:()=>I,kc:()=>b,vK:()=>N});var n=r(61988);const o={AVG:"AVG",COUNT:"COUNT",COUNT_DISTINCT:"COUNT_DISTINCT",MAX:"MAX",MIN:"MIN",SUM:"SUM"},i=Object.values(o);var a;!function(e){e.EQUALS="EQUALS",e.NOT_EQUALS="NOT_EQUALS",e.LESS_THAN="LESS_THAN",e.LESS_THAN_OR_EQUAL="LESS_THAN_OR_EQUAL",e.GREATER_THAN="GREATER_THAN",e.GREATER_THAN_OR_EQUAL="GREATER_THAN_OR_EQUAL",e.IN="IN",e.NOT_IN="NOT_IN",e.LIKE="LIKE",e.ILIKE="ILIKE",e.REGEX="REGEX",e.IS_NOT_NULL="IS_NOT_NULL",e.IS_NULL="IS_NULL",e.LATEST_PARTITION="LATEST_PARTITION",e.IS_TRUE="IS_TRUE",e.IS_FALSE="IS_FALSE"}(a||(a={}));const s={[a.EQUALS]:{display:"Equal to (=)",operation:"=="},[a.NOT_EQUALS]:{display:"Not equal to (≠)",operation:"!="},[a.LESS_THAN]:{display:"Less than (<)",operation:"<"},[a.LESS_THAN_OR_EQUAL]:{display:"Less or equal (<=)",operation:"<="},[a.GREATER_THAN]:{display:"Greater than (>)",operation:">"},[a.GREATER_THAN_OR_EQUAL]:{display:"Greater or equal (>=)",operation:">="},[a.IN]:{display:"In",operation:"IN"},[a.NOT_IN]:{display:"Not in",operation:"NOT IN"},[a.LIKE]:{display:"Like",operation:"LIKE"},[a.ILIKE]:{display:"Like (case insensitive)",operation:"ILIKE"},[a.REGEX]:{display:"Regex",operation:"REGEX"},[a.IS_NOT_NULL]:{display:"Is not null",operation:"IS NOT NULL"},[a.IS_NULL]:{display:"Is null",operation:"IS NULL"},[a.LATEST_PARTITION]:{display:"use latest_partition template",operation:"LATEST PARTITION"},[a.IS_TRUE]:{display:"Is true",operation:"=="},[a.IS_FALSE]:{display:"Is false",operation:"=="}},l=Object.values(a),c=[a.LIKE,a.ILIKE],u=[a.REGEX],d=[a.EQUALS,a.NOT_EQUALS,a.LESS_THAN,a.LESS_THAN_OR_EQUAL,a.GREATER_THAN,a.GREATER_THAN_OR_EQUAL],E=new Set([a.IN,a.NOT_IN]),_=new Set([a.LATEST_PARTITION]),p=[a.IS_NOT_NULL,a.IS_NULL,a.LATEST_PARTITION,a.IS_TRUE,a.IS_FALSE],m=/^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i,h={time_range:(0,n.t)("Time range"),granularity_sqla:(0,n.t)("Time column"),time_grain_sqla:(0,n.t)("Time grain"),druid_time_origin:(0,n.t)("Origin"),granularity:(0,n.t)("Time granularity")},T={CLEARABLE:"clearable",DEFAULT_VALUE:"defaultValue",MULTIPLE:"multiple",SEARCH_ALL_OPTIONS:"searchAllOptions",SORT_ASCENDING:"asc",SORT_METRIC:"metric"},S=1e3,y={time_range:"__time_range",granularity_sqla:"__time_col",time_grain_sqla:"__time_grain",druid_time_origin:"__time_origin",granularity:"__granularity"},g="No filter",A="No filter";var R;!function(e){e.CONVERTED="CONVERTED",e.NOOP="NOOP",e.REVIEWING="REVIEWING",e.SNOOZED="SNOOZED",e.UNDECIDED="UNDECIDED"}(R||(R={}));const f=864e5,I=240,b=320,N=296},91877:(e,t,r)=>{"use strict";function n(e){window.featureFlags||(window.featureFlags=e||{})}function o(e){return window&&window.featureFlags&&!!window.featureFlags[e]}r.d(t,{fG:()=>n,cr:()=>o})},9679:(e,t,r)=>{"use strict";function n(e){const t=new Set;return JSON.stringify(e,((e,r)=>{if("object"==typeof r&&null!==r){if(t.has(r))try{return JSON.parse(JSON.stringify(r))}catch(e){return}t.add(r)}return r}))}r.d(t,{o:()=>n})},1113:()=>{},84116:()=>{},27829:()=>{}}]);
//# sourceMappingURL=4113.e79bf8a20078a9bbd78b.entry.js.map