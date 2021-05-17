(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{4500:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return r}));var n=a(48),u=a(26);const c=n.d.div`
  height: ${({height:t})=>t};
  width: ${({width:t})=>t};
`,r=Object(n.d)(u.s)`
  width: 100%;
`},4858:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return o}));a(41);var n=a(48),u=a(0),c=a(1092),r=a(4500),i=a(1);const s=Object(n.d)(r.b)`
  overflow-x: scroll;
`;function o(t){const{formData:e,setDataMask:a,width:n,filterState:r}=t,{defaultValue:o}=e,[l,d]=Object(u.useState)(null!=o?o:"Last week"),f=t=>{d(t),a({extraFormData:{time_range:t},filterState:{value:t}})};return Object(u.useEffect)(()=>{var t;f(null!=(t=r.value)?t:"Last week")},[r.value]),Object(u.useEffect)(()=>{f(null!=o?o:"Last week")},[o]),Object(i.g)(s,{width:n},Object(i.g)(c.a,{value:l,name:"time_range",onChange:f}))}}}]);