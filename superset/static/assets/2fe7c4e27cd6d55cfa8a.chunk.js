"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4018],{84018:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u}),r(67294);var n=r(92882),c=r(11965);function u({height:e,width:t,echartOptions:r}){return(0,c.tZ)(n.Z,{height:e,width:t,echartOptions:r})}},92882:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),c=r(37840),u=r(32577),h=r(11965);const i=c.iK.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function s({width:e,height:t,echartOptions:r,eventHandlers:c,zrEventHandlers:s,selectedValues:a={}},l){const d=(0,n.useRef)(null),f=(0,n.useRef)(),o=(0,n.useMemo)((()=>Object.keys(a)||[]),[a]),g=(0,n.useRef)([]);return(0,n.useImperativeHandle)(l,(()=>({getEchartInstance:()=>f.current}))),(0,n.useEffect)((()=>{d.current&&(f.current||(f.current=(0,u.S1)(d.current)),Object.entries(c||{}).forEach((([e,t])=>{var r,n;null==(r=f.current)||r.off(e),null==(n=f.current)||n.on(e,t)})),Object.entries(s||{}).forEach((([e,t])=>{var r,n;null==(r=f.current)||r.getZr().off(e),null==(n=f.current)||n.getZr().on(e,t)})),f.current.setOption(r,!0))}),[r,c,s]),(0,n.useEffect)((()=>{f.current&&(f.current.dispatchAction({type:"downplay",dataIndex:g.current.filter((e=>!o.includes(e)))}),o.length&&f.current.dispatchAction({type:"highlight",dataIndex:o}),g.current=o)}),[o]),(0,n.useEffect)((()=>{f.current&&f.current.resize({width:e,height:t})}),[e,t]),(0,h.tZ)(i,{ref:d,height:t,width:e})}const a=(0,n.forwardRef)(s)}}]);