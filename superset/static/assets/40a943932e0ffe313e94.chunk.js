(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{3912:function(e,t,a){},4308:function(e,t,a){"use strict";a.r(t);var n=a(792),o=a(154),s=a.n(o),c=a(2),r=a.n(c),i=a(442),p=a(315);var d={belgium:a.p+"334a99ec5cdf81d325c20d8da75db0c1.geojson",brazil:a.p+"6eecb496490790797b33216ecc4cfcae.geojson",bulgaria:a.p+"fa5f508d8d8b4ce26224ff6cd80d97fb.geojson",canada:a.p+"685fbb458ee444122cee6c5395c90ec4.geojson",china:a.p+"b3c8bf97ee7cc642bf10e0eecbe25c36.geojson",egypt:a.p+"fc2e2735bf97c082fa856b6446e77ee7.geojson",france:a.p+"7ebbcb949c58c2a29bd463224841a704.geojson",germany:a.p+"a97019da833610d5a75012fcf5f91c78.geojson",india:a.p+"a648b4cfb6dc41143c66d8bb43044c21.geojson",iran:a.p+"1882be69ce2a65d522640a282ee7ccbe.geojson",italy:a.p+"6bdfe7f58d1585eddd71b59483be7d26.geojson",japan:a.p+"1455cf16f62a9891a6918005d08f006e.geojson",korea:a.p+"c16c4b351e1cd2a27319a8ba485de274.geojson",liechtenstein:a.p+"71aef18aa7660de8f8d6b92205e55375.geojson",morocco:a.p+"5c80a390a7ec6cae14179b0d6246eea1.geojson",myanmar:a.p+"2f39f55af9bb75271793c40d2f6c965a.geojson",netherlands:a.p+"59fb45184a132e052948bc86e57c1afc.geojson",portugal:a.p+"4daf157176db2ba226f2f0c348fafca2.geojson",russia:a.p+"3d1de7e5ef723294a7dcea0e3b0efeb1.geojson",singapore:a.p+"5b1b352d3c61d88a56aad05ea0577a3c.geojson",spain:a.p+"d6777ffdc4940e3d19cd105d0041b635.geojson",switzerland:a.p+"d79c38b849ccd9908c8b25730c8a6386.geojson",thailand:a.p+"6abcdef54c2505788ae416f09888e03c.geojson",timorleste:a.p+"4ab8111fffd72a0f1789eb9a5364b9e8.geojson",uk:a.p+"a05cec8c9bea74f98f4f18e32b45fba2.geojson",ukraine:a.p+"ddc3687fcdec60b19e967ea34df135e5.geojson",usa:a.p+"c4841edf649d64e62e99457123ac7f18.geojson",zambia:a.p+"7522c7fab811e11c0f17596e187e605b.geojson"};a(3912);const l={data:r.a.arrayOf(r.a.shape({country_id:r.a.string,metric:r.a.number})),width:r.a.number,height:r.a.number,country:r.a.string,linearColorScheme:r.a.string,mapBaseUrl:r.a.string,numberFormat:r.a.string},f={};function b(e,t){const{data:a,width:n,height:o,country:c,linearColorScheme:r,numberFormat:l}=t,b=e,u=Object(i.c)(l),g=Object(p.a)().get(r).createLinearScale(function(e,t){let a,n;if(void 0===t)for(const t of e)null!=t&&(void 0===a?t>=t&&(a=n=t):(a>t&&(a=t),n<t&&(n=t)));else{let o=-1;for(let s of e)null!=(s=t(s,++o,e))&&(void 0===a?s>=s&&(a=n=s):(a>s&&(a=s),n<s&&(n=s)))}return[a,n]}(a,e=>e.metric)),m={};a.forEach(e=>{m[e.country_id]=g(e.metric)});const h=e=>m[e.properties.ISO]||"none",y=s.a.geo.path(),j=s.a.select(b);j.classed("superset-legacy-chart-country-map",!0),j.selectAll("*").remove(),b.style.height=o+"px",b.style.width=n+"px";const v=j.append("svg:svg").attr("width",n).attr("height",o).attr("preserveAspectRatio","xMidYMid meet"),x=v.append("rect").attr("class","background").attr("width",n).attr("height",o),w=v.append("g"),k=w.append("g").classed("map-layer",!0),O=w.append("g").classed("text-layer",!0).attr("transform","translate("+n/2+", 45)"),C=O.append("text").classed("big-text",!0),N=O.append("text").classed("result-text",!0).attr("dy","1em");let M;const S=function(e){const t=e&&M!==e;let a,s,c;const r=n/2,i=o/2;if(t){const t=y.centroid(e);[a,s]=t,c=4,M=e}else a=r,s=i,c=1,M=null;w.transition().duration(750).attr("transform","translate("+r+","+i+")scale("+c+")translate("+-a+","+-s+")"),O.style("opacity",0).attr("transform","translate(0,0)translate("+a+","+(t?s-5:45)+")").transition().duration(750).style("opacity",1),C.transition().duration(750).style("font-size",t?6:16),N.transition().duration(750).style("font-size",t?16:24)};x.on("click",S);const T=function(e){let t=h(e);"none"!==t&&(t=s.a.rgb(t).darker().toString()),s.a.select(this).style("fill",t),function(e){let t="";e&&e.properties&&(t=e.properties.ID_2?e.properties.NAME_2:e.properties.NAME_1),C.text(t)}(e);const n=a.filter(t=>t.country_id===e.properties.ISO);var o;(o=n).length>0&&N.text(u(o[0].metric))},_=function(){s.a.select(this).style("fill",h),C.text(""),N.text("")};function z(e){const{features:t}=e,a=s.a.geo.centroid(e),c=s.a.geo.mercator().scale(100).center(a).translate([n/2,o/2]);y.projection(c);const r=y.bounds(e),i=100*n/(r[1][0]-r[0][0]),p=100*o/(r[1][1]-r[0][1]),d=i<p?i:p;c.scale(d);const l=y.bounds(e);c.translate([n-(l[0][0]+l[1][0])/2,o-(l[0][1]+l[1][1])/2]),k.selectAll("path").data(t).enter().append("path").attr("d",y).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",h).on("mouseenter",T).on("mouseout",_).on("click",S)}const A=c.toLowerCase(),P=f[A];if(P)z(P);else{const e=d[A];s.a.json(e,(e,t)=>{e||(f[A]=t,z(t))})}}b.displayName="CountryMap",b.propTypes=l;var u=b;t.default=Object(n.a)(u)},792:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(2),o=a.n(n),s=a(0),c=a.n(s);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){class a extends c.a.Component{constructor(e){super(e),i(this,"container",void 0),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return(c.a.createElement("div",{ref:this.setContainerRef,id:e,className:t}))}}i(a,"propTypes",{id:o.a.string,className:o.a.string});const n=a;return e.displayName&&(n.displayName=e.displayName),e.propTypes&&(n.propTypes=r({},n.propTypes,{},e.propTypes)),e.defaultProps&&(n.defaultProps=e.defaultProps),a}}}]);