"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6387],{786387:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var o=r(441609),i=r.n(o),n=r(667294),s=r(751995),l=r(221283),a=r(355786),c=r(706882),d=r(211965),u=r(61988),f=r(51776),h=r(189201),p=r(23279),g=r.n(p);const m=e=>{const t=(0,n.useRef)(null),r=(0,n.useRef)(null),[o,i]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{let o;const n=t.current,s=r.current;if(n&&s){const t=Array.from(n.children);o=new ResizeObserver(g()((()=>{t.reduce(((e,t)=>{var r,o;return e+(null!=(r=null==(o=t.firstElementChild)?void 0:o.scrollWidth)?r:0)}),0)+e*Math.max(t.length-1,0)>s.clientWidth?i(!0):i(!1)}),500)),o.observe(document.body),t.forEach((e=>{o.observe(e)}))}return()=>{var e;return null==(e=o)?void 0:e.disconnect()}}),[e]),{isOverflowing:o,symbolContainerRef:t,wrapperRef:r}};var b=r(135944);const v=s.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`,x=s.iK.div`
  ${({theme:e,subheaderFontSize:t})=>`\n    font-weight: ${e.typography.weights.light};\n    display: flex;\n    justify-content: center;\n    font-size: ${t||20}px;\n    flex: 1 1 0px;\n  `}
`,y=s.iK.span`
  ${({theme:e,backgroundColor:t,textColor:r})=>`\n    background-color: ${t};\n    color: ${r};\n    padding: ${e.gridUnit}px ${2*e.gridUnit}px;\n    border-radius: ${2*e.gridUnit}px;\n    margin-right: ${e.gridUnit}px;\n  `}
`;function w(e){const{height:t,width:r,bigNumber:o,prevNumber:p,valueDifference:g,percentDifferenceFormattedString:w,headerFontSize:$,subheaderFontSize:C,comparisonColorEnabled:R,comparisonColorScheme:k,percentDifferenceNumber:S,currentTimeRangeFilter:z,startDateOffset:F,shift:T,dashboardTimeRange:U}=e,[Z,D]=(0,n.useState)("");(0,n.useEffect)((()=>{if(z&&(T||F)){if(!i()(T)||F){const e=(0,l.dS)({timeRangeFilter:{...z,comparator:null!=U?U:z.comparator},shifts:(0,a.Z)(T),startDate:F||""}),t=(0,c.z1)(null!=U?U:z.comparator,z.subject,e||[]);Promise.resolve(t).then((e=>{const t=(0,a.Z)(e.value).flat()[0].split("vs\n");D(t.length>1?t[1].trim():t[0])}))}}else D("")}),[z,T,F,U]);const j=(0,s.Fg)(),E=5*j.gridUnit,O=d.iv`
    font-family: ${j.typography.families.sansSerif};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${t}px;
    width: ${r}px;
    overflow: auto;
  `,B=d.iv`
    font-size: ${$||60}px;
    font-weight: ${j.typography.weights.normal};
    text-align: center;
    margin-bottom: ${4*j.gridUnit}px;
  `,K=d.iv`
    color: ${R&&0!==S?S>0?k===h.v.Green?j.colors.success.base:j.colors.error.base:k===h.v.Red?j.colors.success.base:j.colors.error.base:j.colors.grayscale.base};
    margin-left: ${j.gridUnit}px;
  `,M=j.colors.grayscale.light4,N=j.colors.grayscale.base,{backgroundColor:X,textColor:G}=(0,n.useMemo)((()=>{let e=M,t=N;if(R&&0!==S){const r=S>0&&k===h.v.Green||S<0&&k===h.v.Red;e=r?j.colors.success.light2:j.colors.error.light2,t=r?j.colors.success.base:j.colors.error.base}return{backgroundColor:e,textColor:t}}),[j,k,R,S]),P=(0,n.useMemo)((()=>[{symbol:"#",value:p,tooltipText:(0,u.t)("Data for %s",Z||"previous range")},{symbol:"△",value:g,tooltipText:(0,u.t)("Value difference between the time periods")},{symbol:"%",value:w,tooltipText:(0,u.t)("Percentage difference between the time periods")}]),[Z,p,g,w]),{isOverflowing:W,symbolContainerRef:A,wrapperRef:V}=m(E);return(0,b.tZ)("div",{css:O,ref:V,children:(0,b.BX)(v,{css:W&&d.iv`
            width: fit-content;
            margin: auto;
            align-items: flex-start;
          `,children:[(0,b.BX)("div",{css:B,children:[o,0!==S&&(0,b.tZ)("span",{css:K,children:S>0?"↑":"↓"})]}),(0,b.tZ)("div",{css:[d.iv`
              display: flex;
              justify-content: space-around;
              gap: ${E}px;
              min-width: 0;
              flex-shrink: 1;
            `,W?d.iv`
                  flex-direction: column;
                  align-items: flex-start;
                  width: fit-content;
                `:d.iv`
                  align-items: center;
                  width: 100%;
                `,"",""],ref:A,children:P.map(((e,t)=>(0,b.tZ)(x,{subheaderFontSize:C,children:(0,b.BX)(f.u,{id:"tooltip",placement:"top",title:e.tooltipText,children:[(0,b.tZ)(y,{backgroundColor:t>0?X:M,textColor:t>0?G:N,children:e.symbol}),e.value]})},`comparison-symbol-${e.symbol}`)))})]})})}}}]);
//# sourceMappingURL=4d1d69c90ae862e51c49.chunk.js.map