"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9137],{25163:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var a=r(37840),s=r(60650),o=r(30381),l=r.n(o),n=r(67294),c=r(5977),i=r(73727),u=r(9678),d=r(62753),g=r(14114),Z=r(1836),m=r(46714),b=r(34858),p=r(11965);const f=a.iK.div`
  display: flex;
  flex-direction: row;

  a,
  Link {
    margin-left: 16px;
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
  }
`,h=(0,g.Z)((function({addDangerToast:e,isReportEnabled:t}){const{alertId:r}=(0,c.UO)(),{state:{loading:a,resourceCount:o,resourceCollection:g},fetchData:h}=(0,b.Yi)(`report/${r}/log`,(0,s.t)("log"),e,!1),{state:{loading:k,resource:w},fetchResource:C}=(0,b.LE)("report",(0,s.t)("reports"),e);(0,n.useEffect)((()=>{null===r||k||C(r)}),[r]);const S=(0,n.useMemo)((()=>[{Cell:({row:{original:{state:e}}})=>(0,p.tZ)(m.Z,{state:e,isReportEnabled:t}),accessor:"state",Header:(0,s.t)("State"),size:"xs",disableSortBy:!0},{Cell:({row:{original:{uuid:e}}})=>e?e.slice(0,6):"none",accessor:"uuid",Header:(0,s.t)("Execution ID"),size:"xs",disableSortBy:!0},{Cell:({row:{original:{scheduled_dttm:e}}})=>l()(new Date(e)).format("YYYY-MM-DD hh:mm:ss a"),accessor:"scheduled_dttm",Header:(0,s.t)("Scheduled at (UTC)")},{Cell:({row:{original:{start_dttm:e}}})=>l()(new Date(e)).format("YYYY-MM-DD hh:mm:ss a"),Header:(0,s.t)("Start at (UTC)"),accessor:"start_dttm"},{Cell:({row:{original:{start_dttm:e,end_dttm:t}}})=>(0,Z.zQ)(new Date(e).getTime(),new Date(t).getTime()),Header:(0,s.t)("Duration"),disableSortBy:!0},{accessor:"value",Header:(0,s.t)("Value")},{accessor:"error_message",Header:(0,s.t)("Error message")}]),[t]),D=`/${t?"report":"alert"}/list/`;return(0,p.tZ)(n.Fragment,null,(0,p.tZ)(d.Z,{name:(0,p.tZ)(f,null,(0,p.tZ)("span",null,(0,s.t)(`${null==w?void 0:w.type}`)," ",null==w?void 0:w.name),(0,p.tZ)("span",null,(0,p.tZ)(i.rU,{to:D},"Back to all")))}),(0,p.tZ)(u.Z,{className:"execution-log-list-view",columns:S,count:o,data:g,fetchData:h,initialSort:[{id:"start_dttm",desc:!0}],loading:a,pageSize:25}))}))},46714:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(37840),s=r(60650),o=(r(67294),r(58593)),l=r(38097),n=r(28745),c=r(11965);function i(e,t,r){switch(e){case n.Z.working:return r.colors.primary.base;case n.Z.error:return r.colors.error.base;case n.Z.success:return t?r.colors.success.base:r.colors.alert.base;case n.Z.noop:return r.colors.success.base;case n.Z.grace:return r.colors.alert.base;default:return r.colors.grayscale.base}}function u({state:e,isReportEnabled:t=!1}){const r=(0,a.Fg)(),u={icon:l.Z.Check,label:"",status:""};switch(e){case n.Z.success:u.icon=t?l.Z.Check:l.Z.AlertSolidSmall,u.label=t?(0,s.t)("Report sent"):(0,s.t)("Alert triggered, notification sent"),u.status=n.Z.success;break;case n.Z.working:u.icon=l.Z.Running,u.label=t?(0,s.t)("Report sending"):(0,s.t)("Alert running"),u.status=n.Z.working;break;case n.Z.error:u.icon=l.Z.XSmall,u.label=t?(0,s.t)("Report failed"):(0,s.t)("Alert failed"),u.status=n.Z.error;break;case n.Z.noop:u.icon=l.Z.Check,u.label=(0,s.t)("Nothing triggered"),u.status=n.Z.noop;break;case n.Z.grace:u.icon=l.Z.AlertSolidSmall,u.label=(0,s.t)("Alert Triggered, In Grace Period"),u.status=n.Z.grace;break;default:u.icon=l.Z.Check,u.label=(0,s.t)("Nothing triggered"),u.status=n.Z.noop}const d=u.icon;return(0,c.tZ)(o.u,{title:u.label,placement:"bottomLeft"},(0,c.tZ)(d,{iconColor:i(u.status,t,r)}))}},28745:(e,t,r)=>{var a,s;r.d(t,{Z:()=>a,u:()=>s}),function(e){e.success="Success",e.working="Working",e.error="Error",e.noop="Not triggered",e.grace="On Grace"}(a||(a={})),function(e){e.email="Email",e.slack="Slack"}(s||(s={}))}}]);