(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{4248:function(t,e,n){},4259:function(t,e,n){"use strict";function r(t){var e=0,n=t.children,r=n&&n.length;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}n.d(e,"a",(function(){return a}));function a(t,e){var n,r,a,o,p,s=new c(t),h=+t.value&&(s.value=t.value),l=[s];for(null==e&&(e=i);n=l.pop();)if(h&&(n.value=+n.data.value),(a=e(n.data))&&(p=a.length))for(n.children=new Array(p),o=p-1;o>=0;--o)l.push(r=n.children[o]=new c(a[o])),r.parent=n,r.depth=n.depth+1;return s.eachBefore(u)}function i(t){return t.children}function o(t){t.data=t.data.data}function u(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function c(t){this.data=t,this.depth=this.height=0,this.parent=null}c.prototype=a.prototype={constructor:c,count:function(){return this.eachAfter(r)},each:function(t){var e,n,r,a,i=this,o=[i];do{for(e=o.reverse(),o=[];i=e.pop();)if(t(i),n=i.children)for(r=0,a=n.length;r<a;++r)o.push(n[r])}while(o.length);return this},eachAfter:function(t){for(var e,n,r,a=this,i=[a],o=[];a=i.pop();)if(o.push(a),e=a.children)for(n=0,r=e.length;n<r;++n)i.push(e[n]);for(;a=o.pop();)t(a);return this},eachBefore:function(t){for(var e,n,r=this,a=[r];r=a.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)a.push(e[n]);return this},sum:function(t){return this.eachAfter((function(e){for(var n=+t(e.data)||0,r=e.children,a=r&&r.length;--a>=0;)n+=r[a].value;e.value=n}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),r=e.ancestors(),a=null;t=n.pop(),e=r.pop();for(;t===e;)a=t,t=n.pop(),e=r.pop();return a}(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var a=r.length;t!==n;)r.splice(a,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){var t=[];return this.each((function(e){t.push(e)})),t},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},copy:function(){return a(this).eachBefore(o)}}},4314:function(t,e,n){"use strict";n.r(e);var r=n(792),a=n(443),i=function(t){return"string"==typeof t?new a.a([document.querySelectorAll(t)],[document.documentElement]):new a.a([null==t?[]:t],a.c)},o=n(791),u=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},c=function(t,e,n,r,a){for(var i,o=t.children,u=-1,c=o.length,p=t.value&&(r-e)/t.value;++u<c;)(i=o[u]).y0=n,i.y1=a,i.x0=e,i.x1=e+=i.value*p},p=function(t,e,n,r,a){for(var i,o=t.children,u=-1,c=o.length,p=t.value&&(a-n)/t.value;++u<c;)(i=o[u]).x0=e,i.x1=r,i.y0=n,i.y1=n+=i.value*p},s=(1+Math.sqrt(5))/2;function h(t,e,n,r,a,i){for(var o,u,s,h,l,d,f,g,m,v,y,x=[],b=e.children,w=0,O=0,A=b.length,T=e.value;w<A;){s=a-n,h=i-r;do{l=b[O++].value}while(!l&&O<A);for(d=f=l,y=l*l*(v=Math.max(h/s,s/h)/(T*t)),m=Math.max(f/y,y/d);O<A;++O){if(l+=u=b[O].value,u<d&&(d=u),u>f&&(f=u),y=l*l*v,(g=Math.max(f/y,y/d))>m){l-=u;break}m=g}x.push(o={value:l,dice:s<h,children:b.slice(w,O)}),o.dice?c(o,n,r,a,T?r+=h*l/T:i):p(o,n,r,T?n+=s*l/T:a,i),T-=l,w=O}return x}var l=function t(e){function n(t,n,r,a,i){h(e,t,n,r,a,i)}return n.ratio=function(e){return t((e=+e)>1?e:1)},n}(s);function d(t){if("function"!=typeof t)throw new Error;return t}function f(){return 0}var g=function(t){return function(){return t}},m=function(){var t=l,e=!1,n=1,r=1,a=[0],i=f,o=f,c=f,p=f,s=f;function h(t){return t.x0=t.y0=0,t.x1=n,t.y1=r,t.eachBefore(m),a=[0],e&&t.eachBefore(u),t}function m(e){var n=a[e.depth],r=e.x0+n,u=e.y0+n,h=e.x1-n,l=e.y1-n;h<r&&(r=h=(r+h)/2),l<u&&(u=l=(u+l)/2),e.x0=r,e.y0=u,e.x1=h,e.y1=l,e.children&&(n=a[e.depth+1]=i(e)/2,r+=s(e)-n,u+=o(e)-n,(h-=c(e)-n)<r&&(r=h=(r+h)/2),(l-=p(e)-n)<u&&(u=l=(u+l)/2),t(e,r,u,h,l))}return h.round=function(t){return arguments.length?(e=!!t,h):e},h.size=function(t){return arguments.length?(n=+t[0],r=+t[1],h):[n,r]},h.tile=function(e){return arguments.length?(t=d(e),h):t},h.padding=function(t){return arguments.length?h.paddingInner(t).paddingOuter(t):h.paddingInner()},h.paddingInner=function(t){return arguments.length?(i="function"==typeof t?t:g(+t),h):i},h.paddingOuter=function(t){return arguments.length?h.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):h.paddingTop()},h.paddingTop=function(t){return arguments.length?(o="function"==typeof t?t:g(+t),h):o},h.paddingRight=function(t){return arguments.length?(c="function"==typeof t?t:g(+t),h):c},h.paddingBottom=function(t){return arguments.length?(p="function"==typeof t?t:g(+t),h):p},h.paddingLeft=function(t){return arguments.length?(s="function"==typeof t?t:g(+t),h):s},h},v=n(4259),y=n(2),x=n.n(y),b=n(442),w=n(476);n(4248);const O=t=>()=>t().apply(void 0,arguments),A=x.a.shape({name:x.a.string,value:x.a.number.isRequired}),T={name:x.a.string,children:x.a.arrayOf(x.a.oneOfType([x.a.shape(O(()=>T)),A]))},M=x.a.oneOfType([x.a.shape(T),A]),B={data:x.a.arrayOf(M),width:x.a.number,height:x.a.number,colorScheme:x.a.string,margin:x.a.shape({top:x.a.number,right:x.a.number,bottom:x.a.number,left:x.a.number}),numberFormat:x.a.string,treemapRatio:x.a.number};function R(t){return function(e){i(e.ancestors().map(t=>t.node)).classed("node--hover",t).select("rect").attr("width",e=>e.x1-e.x0-t).attr("height",e=>e.y1-e.y0-t)}}function j(t,e){const{data:n,width:r,height:a,numberFormat:i,colorScheme:u,treemapRatio:c}=e,p=Object(o.a)(t);p.classed("superset-legacy-chart-treemap",!0);const s=Object(b.c)(i),h=w.b.getScale(u),d=n;if(p.selectAll("*").remove(),d.length>0){const[t]=d,e=m().size([r,a]).paddingOuter(3).paddingTop(19).paddingInner(1).tile(l.ratio(c)).round(!0)(Object(v.a)(t).sum(t=>t.value).sort((t,e)=>e.height-t.height||e.value-t.value)),n=p.append("svg").attr("class","treemap").attr("width",r).attr("height",a).selectAll(".node").data(e.descendants()).enter().append("g").attr("transform",t=>"translate("+t.x0+","+t.y0+")").attr("class","node").each((function(t){t.node=this})).on("mouseover",R(!0)).on("mouseout",R(!1));n.append("rect").attr("id",t=>"rect-"+t.data.name).attr("width",t=>t.x1-t.x0).attr("height",t=>t.y1-t.y0).style("fill",t=>h(t.depth)),n.append("clipPath").attr("id",t=>"clip-"+t.data.name).append("use").attr("xlink:href",t=>"#rect-"+t.data.name);const i=n.append("text").attr("clip-path",t=>"url(#clip-"+t.data.name+")");i.filter(t=>t.children).selectAll("tspan").data(t=>t.data.name.slice(Math.max(0,t.data.name.lastIndexOf(".")+1)).split(/(?=[A-Z][^A-Z])/g).concat(" "+s(t.value))).enter().append("tspan").attr("x",(t,e)=>e?null:4).attr("y",13).text(t=>t),i.filter(t=>!t.children).selectAll("tspan").data(t=>t.data.name.slice(Math.max(0,t.data.name.lastIndexOf(".")+1)).split(/(?=[A-Z][^A-Z])/g).concat(s(t.value))).enter().append("tspan").attr("x",4).attr("y",(t,e)=>13+10*e).text(t=>t),n.append("title").text(t=>t.data.name+"\n"+s(t.value))}}j.displayName="Treemap",j.propTypes=B;var N=j;e.default=Object(r.a)(N)},792:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(2),a=n.n(r),i=n(0),o=n.n(i);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){class n extends o.a.Component{constructor(t){super(t),c(this,"container",void 0),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==e?void 0:e.componentWillUnmount)&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(o.a.createElement("div",{ref:this.setContainerRef,id:t,className:e}))}}c(n,"propTypes",{id:a.a.string,className:a.a.string});const r=n;return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes=u({},r.propTypes,{},t.propTypes)),t.defaultProps&&(r.defaultProps=t.defaultProps),n}}}]);