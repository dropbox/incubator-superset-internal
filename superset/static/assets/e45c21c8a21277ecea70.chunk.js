/*! For license information please see e45c21c8a21277ecea70.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[452],{10752:(e,t,n)=>{var i=n(21078),r=n(35161);e.exports=function(e,t){return i(r(e,t),1/0)}},89734:(e,t,n)=>{var i=n(21078),r=n(82689),o=n(5976),a=n(16612),s=o((function(e,t){if(null==e)return[];var n=t.length;return n>1&&a(e,t[0],t[1])?t=[]:n>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),r(e,i(t,1),[])}));e.exports=s},44908:(e,t,n)=>{var i=n(45652);e.exports=function(e){return e&&e.length?i(e):[]}},9238:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>te,DragSource:()=>P,DropTarget:()=>K});var i=n(28195);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return"function"==typeof e}function a(){}function s(e){if(!function(e){return"object"===r(e)&&null!==e}(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function l(e){var t=e.current;return null==t?null:t.decoratedRef?t.decoratedRef.current:t}function d(e){return(t=e)&&t.prototype&&"function"==typeof t.prototype.render||function(e){var t;return"Symbol(react.forward_ref)"===(null==e||null===(t=e.$$typeof)||void 0===t?void 0:t.toString())}(e);var t}var c=n(67294),u=n(15047),h=n(8679),p=n.n(h),m=n(82514);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var b=function(){var e=function(){function e(t){g(this,e),this.isDisposed=!1,this.action=o(t)?t:a}return v(e,[{key:"dispose",value:function(){this.isDisposed||(this.action(),this.isDisposed=!0)}}],[{key:"isDisposable",value:function(e){return Boolean(e&&o(e.dispose))}},{key:"_fixup",value:function(t){return e.isDisposable(t)?t:e.empty}},{key:"create",value:function(t){return new e(t)}}]),e}();return e.empty={dispose:a},e}(),y=function(){function e(){g(this,e),this.isDisposed=!1;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.disposables=n}return v(e,[{key:"add",value:function(e){this.isDisposed?e.dispose():this.disposables.push(e)}},{key:"remove",value:function(e){var t=!1;if(!this.isDisposed){var n=this.disposables.indexOf(e);-1!==n&&(t=!0,this.disposables.splice(n,1),e.dispose())}return t}},{key:"clear",value:function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}}]),e}(),x=function(){function e(){g(this,e),this.isDisposed=!1}return v(e,[{key:"getDisposable",value:function(){return this.current}},{key:"setDisposable",value:function(e){var t=this.isDisposed;if(!t){var n=this.current;this.current=e,n&&n.dispose()}t&&e&&e.dispose()}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=void 0,e&&e.dispose()}}}]),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function R(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function T(e){var t=e.DecoratedComponent,n=e.createHandler,r=e.createMonitor,o=e.createConnector,a=e.registerHandler,s=e.containerDisplayName,l=e.getType,h=e.collect,g=e.options.arePropsEqual,f=void 0===g?u.w:g,v=t,S=t.displayName||t.name||"Component",T=function(){var e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}($,e);var t,s,p,g,T=(p=$,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(p);if(g){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function $(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,$),(t=T.call(this,e)).decoratedRef=c.createRef(),t.handleChange=function(){var e=t.getCurrentState();(0,u.w)(e,t.state)||t.setState(e)},t.disposable=new x,t.receiveProps(e),t.dispose(),t}return t=$,(s=[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return(0,i.k)(this.decoratedRef.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.decoratedRef.current}},{key:"shouldComponentUpdate",value:function(e,t){return!f(e,this.props)||!(0,u.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.disposable=new x,this.currentType=void 0,this.receiveProps(this.props),this.handleChange()}},{key:"componentDidUpdate",value:function(e){f(this.props,e)||(this.receiveProps(this.props),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"receiveProps",value:function(e){this.handler&&(this.handler.receiveProps(e),this.receiveType(l(e)))}},{key:"receiveType",value:function(e){if(this.handlerMonitor&&this.manager&&this.handlerConnector&&e!==this.currentType){this.currentType=e;var t=(o=a(e,this.handler,this.manager),s=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}(o,s)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(o,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],i=t[1];this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var r=this.manager.getMonitor().subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new y(new b(r),new b(i)))}var o,s}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector&&this.handlerConnector.receiveHandlerId(null)}},{key:"getCurrentState",value:function(){return this.handlerConnector?h(this.handlerConnector.hooks,this.handlerMonitor,this.props):{}}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var n=t.dragDropManager;return e.receiveDragDropManager(n),"undefined"!=typeof requestAnimationFrame&&requestAnimationFrame((function(){var t;return null===(t=e.handlerConnector)||void 0===t?void 0:t.reconnect()})),c.createElement(v,Object.assign({},e.props,e.getCurrentState(),{ref:d(v)?e.decoratedRef:null}))}))}},{key:"receiveDragDropManager",value:function(e){void 0===this.manager&&((0,i.k)(void 0!==e,"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",S,S),void 0!==e&&(this.manager=e,this.handlerMonitor=r(e),this.handlerConnector=o(e.getBackend()),this.handler=n(this.handlerMonitor,this.decoratedRef)))}}])&&Z(t.prototype,s),$}(c.Component);return e.DecoratedComponent=t,e.displayName="".concat(s,"(").concat(S,")"),e}();return p()(T,t)}var $=n(33273),D=n(60938),_=n(8556);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function F(e,t){return"string"==typeof e||"symbol"===I(e)||!!t&&Array.isArray(e)&&e.every((function(e){return F(e,!1)}))}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var M=["canDrag","beginDrag","isDragging","endDrag"],O=["beginDrag"],z=function(){function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.beginDrag=function(){if(r.props)return r.spec.beginDrag(r.props,r.monitor,r.ref.current)},this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"canDrag",value:function(){return!!this.props&&(!this.spec.canDrag||this.spec.canDrag(this.props,this.monitor))}},{key:"isDragging",value:function(e,t){return!!this.props&&(this.spec.isDragging?this.spec.isDragging(this.props,this.monitor):t===e.getSourceId())}},{key:"endDrag",value:function(){this.props&&this.spec.endDrag&&this.spec.endDrag(this.props,this.monitor,l(this.ref))}}])&&E(t.prototype,n),e}();function U(e){return Object.keys(e).forEach((function(t){(0,i.k)(M.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',M.join(", "),t),(0,i.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),O.forEach((function(t){(0,i.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),function(t,n){return new z(e,t,n)}}function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.k)(F(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',e),o=function(){return e}),(0,i.k)(s(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',t);var a=U(t);return(0,i.k)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),(0,i.k)(s(r),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),function(e){return T({containerDisplayName:"DragSource",createHandler:a,registerHandler:$.w,createConnector:function(e){return new _.x(e)},createMonitor:function(e){return new D.p(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}var N=n(89026),A=n(56941);function q(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var L=["canDrop","hover","drop"],j=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"canDrop",value:function(){return!this.spec.canDrop||this.spec.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){this.spec.hover&&this.props&&this.spec.hover(this.props,this.monitor,l(this.ref))}},{key:"drop",value:function(){if(this.spec.drop)return this.spec.drop(this.props,this.monitor,this.ref.current)}}])&&q(t.prototype,n),e}();function V(e){return Object.keys(e).forEach((function(t){(0,i.k)(L.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',L.join(", "),t),(0,i.k)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",t,t,e[t])})),function(t,n){return new j(e,t,n)}}function K(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.k)(F(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',e),o=function(){return e}),(0,i.k)(s(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',t);var a=V(t);return(0,i.k)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),(0,i.k)(s(r),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),function(e){return T({containerDisplayName:"DropTarget",createHandler:a,registerHandler:$.n,createMonitor:function(e){return new A.H(e)},createConnector:function(e){return new N.Y(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Y(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),e}function J(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}function X(e,t){return X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},X(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=ee(e);if(t){var r=ee(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Q(this,n)}}function Q(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.k)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",e),(0,i.k)(s(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',t),function(n){var r=n,o=t.arePropsEqual,a=void 0===o?u.w:o,s=r.displayName||r.name||"Component",l=function(){var t=function(t){J(o,t);var n=G(o);function o(){var e;return H(this,o),(e=n.apply(this,arguments)).isCurrentlyMounted=!1,e.ref=c.createRef(),e.handleChange=function(){if(e.isCurrentlyMounted){var t=e.getCurrentState();(0,u.w)(t,e.state)||e.setState(t)}},e}return Y(o,[{key:"getDecoratedComponentInstance",value:function(){return(0,i.k)(this.ref.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.ref.current}},{key:"shouldComponentUpdate",value:function(e,t){return!a(e,this.props)||!(0,u.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange&&(this.unsubscribeFromOffsetChange(),this.unsubscribeFromOffsetChange=void 0),this.unsubscribeFromStateChange&&(this.unsubscribeFromStateChange(),this.unsubscribeFromStateChange=void 0)}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var n=t.dragDropManager;return void 0===n?null:(e.receiveDragDropManager(n),e.isCurrentlyMounted?c.createElement(r,Object.assign({},e.props,e.state,{ref:d(r)?e.ref:null})):null)}))}},{key:"receiveDragDropManager",value:function(e){if(void 0===this.manager){this.manager=e,(0,i.k)("object"===B(e),"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",s,s);var t=this.manager.getMonitor();this.unsubscribeFromOffsetChange=t.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=t.subscribeToStateChange(this.handleChange)}}},{key:"getCurrentState",value:function(){if(!this.manager)return{};var t=this.manager.getMonitor();return e(t,this.props)}}]),o}(c.Component);return t.displayName="DragLayer(".concat(s,")"),t.DecoratedComponent=n,t}();return p()(l,n)}}},84785:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>r.DragLayer,DragSource:()=>r.DragSource,DropTarget:()=>r.DropTarget});var i=n(31388);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(9238)},54238:()=>{},48058:()=>{},31388:(e,t,n)=>{"use strict";var i=n(75253);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(48058);n.o(r,"DragLayer")&&n.d(t,{DragLayer:function(){return r.DragLayer}}),n.o(r,"DragSource")&&n.d(t,{DragSource:function(){return r.DragSource}}),n.o(r,"DropTarget")&&n.d(t,{DropTarget:function(){return r.DropTarget}});var o=n(72105);n.o(o,"DragLayer")&&n.d(t,{DragLayer:function(){return o.DragLayer}}),n.o(o,"DragSource")&&n.d(t,{DragSource:function(){return o.DragSource}}),n.o(o,"DropTarget")&&n.d(t,{DropTarget:function(){return o.DropTarget}});var a=n(54238);n.o(a,"DragLayer")&&n.d(t,{DragLayer:function(){return a.DragLayer}}),n.o(a,"DragSource")&&n.d(t,{DragSource:function(){return a.DragSource}}),n.o(a,"DropTarget")&&n.d(t,{DropTarget:function(){return a.DropTarget}})},75253:()=>{},72105:()=>{},24903:(e,t,n)=>{"use strict";t.cj=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(67294),o=l(r),a=l(n(45697)),s=n(76597);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchTerm:n.props.value||""},n.updateSearch=n.updateSearch.bind(n),n.filter=n.filter.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.value&&e.value!==this.props.value){var t={target:{value:e.value}};this.updateSearch(t)}}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.onChange,e.caseSensitive,e.sortResults,e.throttle,e.filterKeys,e.value,e.fuzzy,e.inputClassName),i=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["className","onChange","caseSensitive","sortResults","throttle","filterKeys","value","fuzzy","inputClassName"]);return i.type=i.type||"search",i.value=this.state.searchTerm,i.onChange=this.updateSearch,i.className=n,i.placeholder=i.placeholder||"Search",o.default.createElement("div",{className:t},o.default.createElement("input",i))}},{key:"updateSearch",value:function(e){var t=this,n=e.target.value;this.setState({searchTerm:n},(function(){t._throttleTimeout&&clearTimeout(t._throttleTimeout),t._throttleTimeout=setTimeout((function(){return t.props.onChange(n)}),t.props.throttle)}))}},{key:"filter",value:function(e){var t=this.props,n=t.filterKeys,i=t.caseSensitive,r=t.fuzzy,o=t.sortResults;return(0,s.createFilter)(this.state.searchTerm,e||n,{caseSensitive:i,fuzzy:r,sortResults:o})}}]),t}(r.Component);d.defaultProps={className:"",onChange:function(){},caseSensitive:!1,fuzzy:!1,throttle:200},d.propTypes={className:a.default.string,inputClassName:a.default.string,onChange:a.default.func,caseSensitive:a.default.bool,sortResults:a.default.bool,fuzzy:a.default.bool,throttle:a.default.number,filterKeys:a.default.oneOf([a.default.string,a.default.arrayOf(a.default.string)]),value:a.default.string},t.cj=s.createFilter},76597:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValuesForKey=a,t.searchStrings=s,t.createFilter=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(i){if(""===e)return!0;n.caseSensitive||(e=e.toLowerCase());var r=e.split(" ");return t?("string"==typeof t&&(t=[t]),r.every((function(e){var r=void 0;if(-1!==e.indexOf(":")){var o=e.split(":")[0];e=e.split(":")[1],r=t.filter((function(e){return e.toLowerCase().indexOf(o)>-1}))}else r=t;return r.some((function(t){return s(a(t,i),e,n)}))}))):r.every((function(e){return s([i],e,n)}))}};var i,r=(i=n(69021))&&i.__esModule?i:{default:i};function o(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?o(t):t)}),[])}function a(e,t){var n=e.split("."),i=[t];return n.forEach((function(e){var t=[];i.forEach((function(n){if(n)if(n instanceof Array){var i=parseInt(e,10);if(!isNaN(i))return t.push(n[i]);n.forEach((function(n){t.push(n[e])}))}else n&&"function"==typeof n.get?t.push(n.get(e)):t.push(n[e])})),i=t})),(i=o(i=i.map((function(e){return e&&e.push&&e.toArray?e.toArray():e})))).filter((function(e){return"string"==typeof e||"number"==typeof e}))}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.caseSensitive,o=n.fuzzy,a=n.sortResults,s=n.exactMatch;e=e.map((function(e){return e.toString()}));try{if(o){"function"==typeof e.toJS&&(e=e.toJS());var l=new r.default(e.map((function(e){return{id:e}})),{keys:["id"],id:"id",caseSensitive:i,shouldSort:a});return l.search(t).length}return e.some((function(e){try{return i||(e=e.toLowerCase()),s&&(t=new RegExp("^"+t+"$","i")),!(!e||-1===e.search(t))}catch(e){return!1}}))}catch(e){return!1}}},69021:function(e){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=n(1),a=n(7),s=a.get,l=(a.deepValue,a.isArray),d=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,a=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,u=void 0===c?32:c,h=n.caseSensitive,p=void 0!==h&&h,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,v=void 0!==f&&f,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.id,S=void 0===x?null:x,C=n.keys,Z=void 0===C?[]:C,w=n.shouldSort,R=void 0===w||w,k=n.getFn,T=void 0===k?s:k,$=n.sortFn,D=void 0===$?function(e,t){return e.score-t.score}:$,_=n.tokenize,I=void 0!==_&&_,F=n.matchAllTokens,E=void 0!==F&&F,M=n.includeMatches,O=void 0!==M&&M,z=n.includeScore,U=void 0!==z&&z,P=n.verbose,N=void 0!==P&&P;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:d,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,minMatchCharLength:y,id:S,keys:Z,includeMatches:O,includeScore:U,shouldSort:R,getFn:T,sortFn:D,verbose:N,tokenize:I,matchAllTokens:E},this.setCollection(t),this._processKeys(Z)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var i=e[t];this._keyWeights[i]=1,this._keyNames.push(i)}else{for(var r=null,o=null,a=0,s=0,l=e.length;s<l;s+=1){var d=e[s];if(!d.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=d.name;if(this._keyNames.push(c),!d.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=d.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?u:Math.max(o,u),r=null==r?u:Math.min(r,u),this._keyWeights[c]=u,a+=u}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),i=n.tokenSearchers,r=n.fullSearcher,o=this._search(i,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),i=0,r=n.length;i<r;i+=1)t.push(new o(n[i],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,i={},r=[];if("string"==typeof n[0]){for(var o=0,a=n.length;o<a;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,l=n.length;s<l;s+=1)for(var d=n[s],c=0,u=this._keyNames.length;c<u;c+=1){var h=this._keyNames[c];this._analyze({key:h,value:this.options.getFn(d,h),record:d,index:s},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var n=this,i=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,s=e.record,d=e.index,c=t.tokenSearchers,u=void 0===c?[]:c,h=t.fullSearcher,p=t.resultMap,m=void 0===p?{}:p,g=t.results,f=void 0===g?[]:g;!function e(t,r,o,a){if(null!=r)if("string"==typeof r){var s=!1,d=-1,c=0;n._log("\nKey: ".concat(""===i?"--":i));var p=h.search(r);if(n._log('Full text: "'.concat(r,'", score: ').concat(p.score)),n.options.tokenize){for(var g=r.split(n.options.tokenSeparator),v=g.length,b=[],y=0,x=u.length;y<x;y+=1){var S=u[y];n._log('\nPattern: "'.concat(S.pattern,'"'));for(var C=!1,Z=0;Z<v;Z+=1){var w=g[Z],R=S.search(w),k={};R.isMatch?(k[w]=R.score,s=!0,C=!0,b.push(R.score)):(k[w]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(w,'", score: ').concat(k[w]))}C&&(c+=1)}d=b[0];for(var T=b.length,$=1;$<T;$+=1)d+=b[$];d/=T,n._log("Token score average:",d)}var D=p.score;d>-1&&(D=(D+d)/2),n._log("Score average:",D);var _=!n.options.tokenize||!n.options.matchAllTokens||c>=u.length;if(n._log("\nCheck Matches: ".concat(_)),(s||p.isMatch)&&_){var I={key:i,arrayIndex:t,value:r,score:D};n.options.includeMatches&&(I.matchedIndices=p.matchedIndices);var F=m[a];F?F.output.push(I):(m[a]={item:o,output:[I]},f.push(m[a]))}}else if(l(r))for(var E=0,M=r.length;E<M;E+=1)e(E,r[E],o,a)}(o,a,s,d)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,i=0,r=e.length;i<r;i+=1){for(var o=e[i],a=o.output,s=a.length,l=1,d=0;d<s;d+=1){var c=a[d],u=c.key,h=n?t[u]:1,p=0===c.score&&t&&t[u]>0?Number.EPSILON:c.score;l*=Math.pow(p,h)}o.score=l,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===i(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var i=0,r=n.length;i<r;i+=1){var o=n[i];if(0!==o.matchedIndices.length){var a={indices:o.matchedIndices,value:o.value};o.key&&(a.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(a.arrayIndex=o.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,a=e.length;o<a;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var l={item:s.item},d=0,c=r.length;d<c;d+=1)r[d](s,l);t.push(l)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=d},function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=n(2),o=n(3),a=n(6),s=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,s=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,u=void 0===c?32:c,h=n.isCaseSensitive,p=void 0!==h&&h,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,v=void 0!==f&&f,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.includeMatches,S=void 0!==x&&x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:d,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,includeMatches:S,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,i=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return i&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,l=s.maxPatternLength,d=s.tokenSeparator;if(this.pattern.length>l)return r(e,this.pattern,d);var c=this.options,u=c.location,h=c.distance,p=c.threshold,m=c.findAllMatches,g=c.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:u,distance:h,threshold:p,findAllMatches:m,minMatchCharLength:g,includeMatches:i})}}])&&i(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(i,"|")),o=e.match(r),a=!!o,s=[];if(a)for(var l=0,d=o.length;l<d;l+=1){var c=o[l];s.push([e.indexOf(c),c.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var i=n(4),r=n(5);e.exports=function(e,t,n,o){for(var a=o.location,s=void 0===a?0:a,l=o.distance,d=void 0===l?100:l,c=o.threshold,u=void 0===c?.6:c,h=o.findAllMatches,p=void 0!==h&&h,m=o.minMatchCharLength,g=void 0===m?1:m,f=o.includeMatches,v=void 0!==f&&f,b=s,y=e.length,x=u,S=e.indexOf(t,b),C=t.length,Z=[],w=0;w<y;w+=1)Z[w]=0;if(-1!==S){var R=i(t,{errors:0,currentLocation:S,expectedLocation:b,distance:d});if(x=Math.min(R,x),-1!==(S=e.lastIndexOf(t,b+C))){var k=i(t,{errors:0,currentLocation:S,expectedLocation:b,distance:d});x=Math.min(k,x)}}S=-1;for(var T=[],$=1,D=C+y,_=1<<(C<=31?C-1:30),I=0;I<C;I+=1){for(var F=0,E=D;F<E;)i(t,{errors:I,currentLocation:b+E,expectedLocation:b,distance:d})<=x?F=E:D=E,E=Math.floor((D-F)/2+F);D=E;var M=Math.max(1,b-E+1),O=p?y:Math.min(b+E,y)+C,z=Array(O+2);z[O+1]=(1<<I)-1;for(var U=O;U>=M;U-=1){var P=U-1,N=n[e.charAt(P)];if(N&&(Z[P]=1),z[U]=(z[U+1]<<1|1)&N,0!==I&&(z[U]|=(T[U+1]|T[U])<<1|1|T[U+1]),z[U]&_&&($=i(t,{errors:I,currentLocation:P,expectedLocation:b,distance:d}))<=x){if(x=$,(S=P)<=b)break;M=Math.max(1,2*b-S)}}if(i(t,{errors:I+1,currentLocation:b,expectedLocation:b,distance:d})>x)break;T=z}var A={isMatch:S>=0,score:0===$?.001:$};return v&&(A.matchedIndices=r(Z,g)),A}},function(e,t){e.exports=function(e,t){var n=t.errors,i=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,a=t.expectedLocation,s=void 0===a?0:a,l=t.distance,d=void 0===l?100:l,c=i/e.length,u=Math.abs(s-o);return d?c+u/d:u?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=-1,r=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===i?i=o:s||-1===i||((r=o-1)-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,i=0;i<n;i+=1)t[e.charAt(i)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},i=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var l=s.indexOf("."),d=s,c=null;-1!==l&&(d=s.slice(0,l),c=s.slice(l+1));var u=t[d];if(null!=u)if(c||!r(u)&&!o(u))if(n(u))for(var h=0,p=u.length;h<p;h+=1)e(u[h],c);else c&&e(u,c);else a.push(i(u))}else a.push(t)}(e,t),a},isArray:n,isString:r,isNum:o,toString:i}}])},15208:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var i=n(67294);const r=e=>{const t=(0,i.useRef)(!1);(0,i.useEffect)((()=>{t.current?e():t.current=!0}),[e])}},78243:(e,t,n)=>{"use strict";n.d(t,{W:()=>r});var i=n(67294);function r(e){const t=(0,i.useRef)(null),[n,r]=(0,i.useState)(!1),o=e=>{const[t]=e;r(t.intersectionRatio<1)};return(0,i.useEffect)((()=>{const n=new IntersectionObserver(o,e),i=t.current;return i&&n.observe(i),()=>{i&&n.unobserve(i)}}),[t,e]),[t,n]}},51794:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294);const r=(e,t)=>{var n,r;const[o,a]=(0,i.useState)(0),[s,l]=(0,i.useState)(!1),d=(0,i.useRef)({scrollWidth:0,parentElementWidth:0,plusRefWidth:0});return(0,i.useLayoutEffect)((()=>{var n;const i=e.current,r=null==t?void 0:t.current;if(!i)return;const{scrollWidth:o,clientWidth:s,childNodes:c}=i,u=d.current,h=(null==(n=i.parentElement)?void 0:n.clientWidth)||0,p=(null==r?void 0:r.offsetWidth)||0;if(d.current={scrollWidth:o,parentElementWidth:h,plusRefWidth:p},u.parentElementWidth!==h||u.scrollWidth!==o||u.plusRefWidth!==p)if(o>s){const e=6,t=(null==r?void 0:r.offsetWidth)||0,n=s-e,i=c.length;let o=0,d=0;for(let r=0;r<i;r+=1){const i=c[r].offsetWidth;n-e-o-t<=0&&(d+=1),o+=i}i>1&&d?(l(!0),a(d)):(l(!1),a(1))}else l(!1),a(0)}),[null==(n=e.current)?void 0:n.offsetWidth,null==(r=e.current)?void 0:r.clientWidth,e]),[o,s]}},82607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(5872),r=n.n(i),o=(n(67294),n(51995)),a=n(62529),s=n(11965);const l=(0,o.iK)((e=>{let{textColor:t,color:n,text:i,...o}=e;return(0,s.tZ)(a.Z,r()({text:i,color:i?n:void 0},o))}))`
  & > sup {
    padding: 0 ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    background: ${e=>{let{theme:t,color:n}=e;return n||t.colors.primary.base}};
    color: ${e=>{let{theme:t,textColor:n}=e;return n||t.colors.grayscale.light5}};
  }
`},38270:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var i=n(5872),r=n.n(i),o=n(67294),a=n(73727),s=n(94184),l=n.n(s),d=n(51995),c=n(55867),u=n(11965),h=n(58593),p=n(79789);const m=(0,d.iK)(p.Z)`
  vertical-align: middle;
`;function g(e){let{canEdit:t=!1,editing:n=!1,extraClasses:i,multiLine:s=!1,noPermitTooltip:d,onSaveTitle:p,showTooltip:g=!0,style:f,title:v="",defaultTitle:b="",placeholder:y="",certifiedBy:x,certificationDetails:S,url:C,...Z}=e;const[w,R]=(0,o.useState)(n),[k,T]=(0,o.useState)(v),[$,D]=(0,o.useState)(v),[_,I]=(0,o.useState)(null),F=(0,o.useRef)();function E(){if(!t||w)return;const e=F.current?F.current.getBoundingClientRect():null;R(!0),I(e)}function M(){const e=k.trim();t&&(R(!1),e.length?($!==e&&D(e),v!==e&&p(e)):T($))}function O(e){" "===e.key&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),M())}function z(e){t&&T(e.target.value)}function U(e){"Enter"===e.key&&(e.preventDefault(),M())}let P;(0,o.useEffect)((()=>{v!==k&&(D(k),T(v))}),[v]),(0,o.useEffect)((()=>{if(w&&(F.current.focus(),F.current.setSelectionRange)){const{length:e}=F.current.value;F.current.setSelectionRange(e,e),F.current.scrollLeft=F.current.scrollWidth,F.current.scrollTop=F.current.scrollHeight}}),[w]),P=k,w||k||(P=b||v);const N=w&&_?{height:`${_.height}px`}:void 0;let A=s&&w?(0,u.tZ)("textarea",{ref:F,value:P,className:v?void 0:"text-muted",onKeyDown:O,onChange:z,onBlur:M,onClick:E,onKeyPress:U,placeholder:y,style:N}):(0,u.tZ)("input",{ref:F,type:w?"text":"button",value:P,className:v?void 0:"text-muted",onKeyDown:O,onChange:z,onBlur:M,onClick:E,onKeyPress:U,placeholder:y});return g&&!w&&(A=(0,u.tZ)(h.u,{id:"title-tooltip",title:t?(0,c.t)("Click to edit"):d||(0,c.t)("You don't have the rights to alter this title.")},A)),t||(A=C?(0,u.tZ)(a.rU,{to:C,css:e=>u.iv`
          color: ${e.colors.grayscale.dark1};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
        `},P):(0,u.tZ)("span",null,P)),(0,u.tZ)("span",r()({className:l()("editable-title",i,t&&"editable-title--editable",w&&"editable-title--editing"),style:f},Z),x&&(0,u.tZ)(o.Fragment,null,(0,u.tZ)(m,{certifiedBy:x,details:S,size:"xl"})," "),A)}},85931:(e,t,n)=>{"use strict";n.d(t,{m:()=>l});var i=n(5872),r=n.n(i),o=(n(67294),n(73727)),a=n(23525),s=n(11965);const l=e=>{let{to:t,component:n,replace:i,innerRef:l,children:d,...c}=e;return"string"==typeof t&&(0,a.TO)(t)?(0,s.tZ)("a",r()({href:(0,a.en)(t)},c),d):(0,s.tZ)(o.rU,r()({to:t,component:n,replace:i,innerRef:l},c),d)}},31487:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>lp});var i=n(14890),r=n(28216),o=n(78580),a=n.n(o),s=n(67294),l=n(45697),d=n.n(l),c=n(55867),u=n(93185),h=n(14278),p=n(38703),m=n(20292),g=n(81255);function f(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===g.dW&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var v=n(94184),b=n.n(v),y=n(51995),x=n(11965),S=n(25130),C=n(78243),Z=n(57902),w=n(49484),R=n(71262),k=n(38523),T=n(35937),$=n.n(T),D=n(23279),_=n.n(D),I=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},M=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},O=void 0;O="undefined"!=typeof window?window:"undefined"!=typeof self?self:n.g;var z=null,U=null,P=O.clearTimeout,N=O.setTimeout,A=O.cancelAnimationFrame||O.mozCancelAnimationFrame||O.webkitCancelAnimationFrame,q=O.requestAnimationFrame||O.mozRequestAnimationFrame||O.webkitRequestAnimationFrame;null==A||null==q?(z=P,U=function(e){return N(e,20)}):(z=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e,2),n=t[0],i=t[1];A(n),P(i)},U=function(e){var t=q((function(){P(n),e()})),n=N((function(){A(t),e()}),20);return[t,n]});var L=function(e){function t(){var e,n,i;I(this,t);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=i=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var e=i.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,a=i._parentNode.offsetWidth||0,s=window.getComputedStyle(i._parentNode)||{},l=parseInt(s.paddingLeft,10)||0,d=parseInt(s.paddingRight,10)||0,c=parseInt(s.paddingTop,10)||0,u=parseInt(s.paddingBottom,10)||0,h=o-c-u,p=a-l-d;(!t&&i.state.height!==h||!n&&i.state.width!==p)&&(i.setState({height:o-c-u,width:a-l-d}),r({height:o,width:a}))}},i._setRef=function(e){i._autoSizer=e},M(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),F(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=function(e){var t=void 0,n=void 0,i=void 0,r=void 0,o=void 0,a=void 0,s=void 0,l="undefined"!=typeof document&&document.attachEvent;if(!l){a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,i=t.lastElementChild,r=n.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},o=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},s=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&z(this.__resizeRAF__),this.__resizeRAF__=U((function(){o(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}};var d=!1,c="";i="animationstart";var u="Webkit Moz O ms".split(" "),h="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),p=document.createElement("fakeelement");if(void 0!==p.style.animationName&&(d=!0),!1===d)for(var m=0;m<u.length;m++)if(void 0!==p.style[u[m]+"AnimationName"]){c="-"+u[m].toLowerCase()+"-",i=h[m],d=!0;break}t="@"+c+"keyframes "+(n="resizeanim")+" { from { opacity: 0; } to { opacity: 0; } } ",r=c+"animation: 1ms "+n+"; "}return{addResizeListener:function(o,d){if(l)o.attachEvent("onresize",d);else{if(!o.__resizeTriggers__){var c=o.ownerDocument,u=O.getComputedStyle(o);u&&"static"===u.position&&(o.style.position="relative"),function(n){if(!n.getElementById("detectElementResize")){var i=(t||"")+".resize-triggers { "+(r||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=n.head||n.getElementsByTagName("head")[0],a=n.createElement("style");a.id="detectElementResize",a.type="text/css",null!=e&&a.setAttribute("nonce",e),a.styleSheet?a.styleSheet.cssText=i:a.appendChild(n.createTextNode(i)),o.appendChild(a)}}(c),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=c.createElement("div")).className="resize-triggers";var h=c.createElement("div");h.className="expand-trigger",h.appendChild(c.createElement("div"));var p=c.createElement("div");p.className="contract-trigger",o.__resizeTriggers__.appendChild(h),o.__resizeTriggers__.appendChild(p),o.appendChild(o.__resizeTriggers__),a(o),o.addEventListener("scroll",s,!0),i&&(o.__resizeTriggers__.__animationListener__=function(e){e.animationName===n&&a(o)},o.__resizeTriggers__.addEventListener(i,o.__resizeTriggers__.__animationListener__))}o.__resizeListeners__.push(d)}},removeResizeListener:function(e,t){if(l)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",s,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(i,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,i=e.disableHeight,r=e.disableWidth,o=e.style,a=this.state,l=a.height,d=a.width,c={overflow:"visible"},u={},h=!1;return i||(0===l&&(h=!0),c.height=0,u.height=l),r||(0===d&&(h=!0),c.width=0,u.width=d),(0,s.createElement)("div",{className:n,ref:this._setRef,style:E({},c,o)},!h&&t(u))}}]),t}(s.PureComponent);L.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};const j=L;var V=n(74061),K=n(24903),B=n(9875),H=n(4715),W=n(35932),Y=n(70163),J=n(61337),X=n(80621),G=n(2275),Q=n(87253),ee=n(9882),te=n(5872),ne=n.n(te),ie=n(4144),re=n(58593),oe=n(85931);const ae=e=>{let{children:t,...n}=e;const[i,r]=(0,s.useState)(!1),o=(0,s.useRef)(null);(0,s.useEffect)((()=>{r(!!o.current&&o.current.scrollWidth>o.current.clientWidth)}),[t]);const a=(0,x.tZ)("div",ne()({},n,{ref:o,css:x.iv`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `}),t);return i?(0,x.tZ)(re.u,{title:t},a):a},se=e=>{let{label:t,value:n}=e;return(0,x.tZ)("div",{css:e=>x.iv`
      font-size: ${e.typography.sizes.s}px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: ${e.gridUnit}px;
      }
    `},(0,x.tZ)("span",{css:e=>x.iv`
        margin-right: ${4*e.gridUnit}px;
        color: ${e.colors.grayscale.base};
      `},t),(0,x.tZ)("span",{css:x.iv`
        min-width: 0;
      `},(0,x.tZ)(ae,null,n)))},le=e=>{let{showThumbnails:t,placeholderRef:n}=e;return(0,x.tZ)("div",{ref:n,css:e=>x.iv`
      /* Display styles */
      border: 1px solid ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit}px;
      color: ${e.colors.primary.dark1};
      font-size: ${e.typography.sizes.xs}px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      padding: ${e.gridUnit/2}px ${2*e.gridUnit}px;
      margin-left: ${4*e.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      visibility: hidden;
      position: ${t?"absolute":"unset"};
      top: ${t?"72px":"unset"};
      left: ${t?"84px":"unset"};
    `},(0,c.t)("Added"))},de=e=>{let{placeholder:t}=e;return(0,x.tZ)("div",{css:e=>x.iv`
      /* Display styles */
      border: 1px solid ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit}px;
      color: ${e.colors.primary.dark1};
      font-size: ${e.typography.sizes.xs}px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      padding: ${e.gridUnit/2}px ${2*e.gridUnit}px;
      margin-left: ${4*e.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      display: ${t?"unset":"none"};
      position: absolute;
      top: ${t?`${t.offsetTop}px`:"unset"};
      left: ${t?t.offsetLeft-2+"px":"unset"};
    `},(0,c.t)("Added"))},ce=e=>{let{datasourceUrl:t,datasourceName:n="-",innerRef:i,isSelected:r=!1,lastModified:o,sliceName:a,style:l={},thumbnailUrl:d,visType:p}=e;const m=(0,u.c)(u.T.THUMBNAILS),[g,f]=(0,s.useState)(),{mountedPluginMetadata:v}=(0,h.gp)(),b=(0,s.useMemo)((()=>{var e;return(null==(e=v[p])?void 0:e.name)||(0,c.t)("Unknown type")}),[v,p]);return(0,x.tZ)("div",{ref:i,style:l},(0,x.tZ)("div",{css:e=>x.iv`
          border: 1px solid ${e.colors.grayscale.light2};
          border-radius: ${e.gridUnit}px;
          background: ${e.colors.grayscale.light5};
          padding: ${4*e.gridUnit}px;
          margin: 0 ${3*e.gridUnit}px ${3*e.gridUnit}px
            ${3*e.gridUnit}px;
          position: relative;
          cursor: ${r?"not-allowed":"move"};
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.3;
          color: ${e.colors.grayscale.dark1};

          &:hover {
            background: ${e.colors.grayscale.light4};
          }

          opacity: ${r?.4:"unset"};
        `},(0,x.tZ)("div",{css:x.iv`
            display: flex;
          `},m?(0,x.tZ)("div",{css:x.iv`
                width: 146px;
                height: 82px;
                flex-shrink: 0;
                margin-right: 16px;
              `},(0,x.tZ)(ie.Z,{src:d||"",fallback:"/static/assets/images/chart-card-fallback.svg",position:"top"}),r&&m?(0,x.tZ)(le,{placeholderRef:f,showThumbnails:m}):null):null,(0,x.tZ)("div",{css:x.iv`
              flex-grow: 1;
              min-width: 0;
            `},(0,x.tZ)("div",{css:e=>x.iv`
                margin-bottom: ${2*e.gridUnit}px;
                font-weight: ${e.typography.weights.bold};
                display: flex;
                justify-content: space-between;
                align-items: center;
              `},(0,x.tZ)(ae,null,a),r&&!m?(0,x.tZ)(le,{placeholderRef:f}):null),(0,x.tZ)("div",{css:x.iv`
                display: flex;
                flex-direction: column;
              `},(0,x.tZ)(se,{label:(0,c.t)("Viz type"),value:b}),(0,x.tZ)(se,{label:(0,c.t)("Dataset"),value:t?(0,x.tZ)(oe.m,{to:t},n):n}),(0,x.tZ)(se,{label:(0,c.t)("Modified"),value:o}))))),(0,x.tZ)(de,{placeholder:g}))};var ue=n(84785);const he={position:"fixed",pointerEvents:"none",top:0,left:0,zIndex:101,width:344},pe={dragItem:d().shape({index:d().number.isRequired}),slices:d().arrayOf(G.Rw),isDragging:d().bool.isRequired,currentOffset:d().shape({x:d().number.isRequired,y:d().number.isRequired})};function me(e){let{dragItem:t,slices:n,isDragging:i,currentOffset:r}=e;if(!(i&&r&&t&&n))return null;const o=n[t.index];return o&&t.parentType===g.F0&&t.type===g.dW?(0,x.tZ)(ce,{style:{...he,transform:`translate(${r.x}px, ${r.y}px)`},sliceName:o.slice_name,lastModified:o.changed_on_humanized,visType:o.viz_type,datasourceUrl:o.datasource_url,datasourceName:o.datasource_name}):null}me.propTypes=pe,me.defaultProps={currentOffset:null,dragItem:null,slices:null};const ge=(0,ue.DragLayer)((e=>({dragItem:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})))(me);var fe,ve=n(23493),be=n.n(ve);const ye=X.Mu+1,xe=X.Mu+3,Se=X.Mu+4,Ce=X.Mu+5,Ze={[g.U0]:{[g.yR]:X.Mu,[g.BG]:X.Mu},[g.BG]:{[g.dW]:ye,[g.t]:ye,[g.xh]:ye,[g.BA]:ye,[g.hE]:ye,[g.Nc]:ye,[g.Os]:ye,[g.yR]:ye},[g.Os]:{[g.dW]:Se,[g.t]:Se,[g.xh]:Se,[g.BA]:Se},[g.yR]:{[g.gn]:xe},[g.gn]:{[g.dW]:Ce,[g.t]:Ce,[g.xh]:Ce,[g.BA]:xe,[g.hE]:Ce,[g.Nc]:Ce,[g.Os]:xe,[g.yR]:xe},[g.BA]:{[g.dW]:Ce,[g.Nc]:Ce,[g.xh]:Ce,[g.Os]:xe,[g.hE]:xe,[g.yR]:xe},[g.dW]:{},[g.t]:{},[g.hE]:{},[g.Nc]:{},[g.xh]:{}};function we(e){const{parentType:t,childType:n,parentDepth:i}=e;if(!t||!n||"number"!=typeof i)return!1;const r=(Ze[t]||{})[n];return"number"==typeof r&&i<=r}const Re="DROP_TOP",ke="DROP_RIGHT",Te="DROP_BOTTOM",$e="DROP_LEFT";let De,_e={};function Ie(e,t){const{depth:n,parentComponent:i,component:r,orientation:o,isDraggingOverShallow:a}=t.props,s=e.getItem();if(!s||s.id===r.id)return null;const l=we({parentType:r.type,parentDepth:n,childType:s.type}),d=i&&i.type,c=we({parentType:d,parentDepth:n+(d===g.gn||d===g.yR?0:-1),childType:s.type});if(!l&&!c)return null;const u=(r.children||[]).length>0,h="row"===o?"vertical":"horizontal",p="row"===o?"horizontal":"vertical";if(a&&l&&!c)return"vertical"===h?u?ke:$e:u?Te:Re;const m=t.ref.getBoundingClientRect(),f=e.getClientOffset()||_e[r.id];if(!f||!m)return null;_e[r.id]=f;const v=Math.abs(f.y-m.top),b=Math.abs(f.y-m.bottom),y=Math.abs(f.x-m.left),x=Math.abs(f.x-m.right);if(!a&&[v,b,y,x].every((e=>e>20)))return null;if(c&&!l){if("vertical"===p){const e=m.left+(m.right-m.left)/2;return f.x<e?$e:ke}const e=m.top+(m.bottom-m.top)/2;return f.y<e?Re:Te}if(c&&l){if("vertical"===p){if(y<20)return $e;if(x<20)return ke}else{if(v<20)return Re;if(b<20)return Te}return"vertical"===h?u?ke:$e:u?Te:Re}return null}const Fe=be()((function(e,t,n){var i,r,o;if(!n.mounted)return;const a=Ie(t,n);!function(e){const t="SCROLL_TOP"===e&&!De&&0!==document.documentElement.scrollTop,n=De&&("SCROLL_TOP"!==e||0===document.documentElement.scrollTop);t?De=setInterval((()=>{if(0===document.documentElement.scrollTop)return clearInterval(De),void(De=null);let e=document.documentElement.scrollTop-120;e<0&&(e=0),window.scroll({top:e,behavior:"smooth"})}),50):n&&(clearInterval(De),De=null)}((null==n||null==(i=n.props)||null==(r=i.component)?void 0:r.type)===g.U0?"SCROLL_TOP":null),a?(null==n||null==(o=n.props)||o.onHover(),n.setState((()=>({dropIndicator:a})))):n.setState((()=>({dropIndicator:null})))}),100);const Ee="DRAG_DROPPABLE",Me=[Ee,{canDrag:e=>!e.disableDragDrop,beginDrag(e){const{component:t,index:n,parentComponent:i={}}=e;return{type:t.type,id:t.id,meta:t.meta,index:n,parentId:i.id,parentType:i.type}}},function(e,t){return{dragSourceRef:e.dragSource(),dragPreviewRef:e.dragPreview(),isDragging:t.isDragging()}}],Oe=[Ee,{canDrop:e=>!e.disableDragDrop,hover(e,t,n){n&&n.mounted&&Fe(e,t,n)},drop(e,t,n){const i=t.getDropResult();if((!i||!i.destination)&&n.mounted)return function(e,t,n){if(!n.mounted)return;n.setState((()=>({dropIndicator:null})));const i=Ie(t,n);if(!i)return;const{parentComponent:r,component:o,index:a,onDrop:s,orientation:l}=n.props,d=t.getItem(),c="row"===l&&(i===Re||i===Te)||"column"===l&&(i===$e||i===ke)?"sibling":"child",u={source:{id:d.parentId,type:d.parentType,index:d.index},dragging:{id:d.id,type:d.type,meta:d.meta}};if("child"===c)u.destination={id:o.id,type:o.type,index:o.children.length};else{let e=r&&d.parentId===r.id&&d.index<a?a-1:a;i!==Te&&i!==ke||(e+=1),u.destination={id:r.id,type:r.type,index:e}}return s(u),_e={},u}(0,t,n)}},function(e,t){return{droppableRef:e.dropTarget(),isDraggingOver:t.isOver(),isDraggingOverShallow:t.isOver({shallow:!0})}}],ze={children:d().func,className:d().string,component:G.cP,parentComponent:G.cP,depth:d().number.isRequired,disableDragDrop:d().bool,orientation:d().oneOf(["row","column"]),index:d().number.isRequired,style:d().object,onDrop:d().func,onHover:d().func,editMode:d().bool,useEmptyDragPreview:d().bool,isDragging:d().bool,isDraggingOver:d().bool,isDraggingOverShallow:d().bool,droppableRef:d().func,dragSourceRef:d().func,dragPreviewRef:d().func},Ue={className:null,style:null,parentComponent:null,disableDragDrop:!1,children(){},onDrop(){},onHover(){},orientation:"row",useEmptyDragPreview:!1,isDragging:!1,isDraggingOver:!1,isDraggingOverShallow:!1,droppableRef(){},dragSourceRef(){},dragPreviewRef(){}},Pe=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    position: relative;

    &.dragdroppable--dragging {
      opacity: 0.2;
    }

    &.dragdroppable-row {
      width: 100%;
    }

    &.dragdroppable-column .resizable-container span div {
      z-index: 10;
    }

    & {
      .drop-indicator {
        display: block;
        background-color: ${t.colors.primary.base};
        position: absolute;
        z-index: 10;
      }

      .drop-indicator--top {
        top: 0;
        left: 0;
        height: ${t.gridUnit}px;
        width: 100%;
        min-width: ${4*t.gridUnit}px;
      }

      .drop-indicator--bottom {
        top: 100%;
        left: 0;
        height: ${t.gridUnit}px;
        width: 100%;
        min-width: ${4*t.gridUnit}px;
      }

      .drop-indicator--right {
        top: 0;
        left: 100%;
        height: 100%;
        width: ${t.gridUnit}px;
        min-height: ${4*t.gridUnit}px;
      }

      .drop-indicator--left {
        top: 0;
        left: 0;
        height: 100%;
        width: ${t.gridUnit}px;
        min-height: ${4*t.gridUnit}px;
      }
    }
  `}};
`;class Ne extends s.PureComponent{constructor(e){super(e),this.state={dropIndicator:null},this.setRef=this.setRef.bind(this)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}setRef(e){var t,n;this.ref=e,this.props.useEmptyDragPreview?this.props.dragPreviewRef((fe||((fe=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),fe),{captureDraggingState:!0}):this.props.dragPreviewRef(e),null==(t=(n=this.props).droppableRef)||t.call(n,e)}render(){const{children:e,className:t,orientation:n,dragSourceRef:i,disableDragDrop:r,isDragging:o,isDraggingOver:a,style:s,editMode:l}=this.props,{dropIndicator:d}=this.state,c=a&&d&&!r?{className:b()("drop-indicator",d===Re&&"drop-indicator--top",d===Te&&"drop-indicator--bottom",d===$e&&"drop-indicator--left",d===ke&&"drop-indicator--right")}:null,u=l?{dragSourceRef:i,dropIndicatorProps:c}:{};return(0,x.tZ)(Pe,{style:s,ref:this.setRef,className:b()("dragdroppable","row"===n&&"dragdroppable-row","column"===n&&"dragdroppable-column",o&&"dragdroppable--dragging",t)},e(u))}}Ne.propTypes=ze,Ne.defaultProps=Ue;const Ae=(0,ue.DragSource)(...Me)((0,ue.DropTarget)(...Oe)(Ne)),qe={fetchSlices:d().func.isRequired,updateSlices:d().func.isRequired,isLoading:d().bool.isRequired,slices:d().objectOf(G.Rw).isRequired,lastUpdated:d().number.isRequired,errorMessage:d().string,userId:d().number.isRequired,selectedSliceIds:d().arrayOf(d().number),editMode:d().bool,dashboardId:d().number},Le=["slice_name","viz_type","datasource_name"],je={slice_name:(0,c.t)("name"),viz_type:(0,c.t)("viz type"),datasource_name:(0,c.t)("dataset"),changed_on:(0,c.t)("recent")},Ve=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row;\n    padding:\n      ${4*t.gridUnit}px\n      ${3*t.gridUnit}px\n      ${4*t.gridUnit}px\n      ${3*t.gridUnit}px;\n  `}}
`,Ke=(0,y.iK)(H.Ph)`
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  min-width: 150px;
`,Be=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    justify-content: flex-end;
    padding-right: ${2*t.gridUnit}px;
  `}}
`,He=(0,y.iK)(W.Z)`
  ${e=>{let{theme:t}=e;return x.iv`
    height: auto;
    & > .anticon + span {
      margin-left: 0;
    }
    & > [role='img']:first-of-type {
      margin-right: ${t.gridUnit}px;
      padding-bottom: 1px;
      line-height: 0;
    }
  `}}
`,We=y.iK.div`
  flex-grow: 1;
  min-height: 0;
`;class Ye extends s.Component{static sortByComparator(e){const t="changed_on"===e?-1:1;return(n,i)=>n[e]<i[e]?-1*t:n[e]>i[e]?1*t:0}constructor(e){super(e),this.handleChange=_()((e=>{this.searchUpdated(e),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),e,this.state.sortBy)}),300),this.state={filteredSlices:[],searchTerm:"",sortBy:"changed_on",selectedSliceIdsSet:new Set(e.selectedSliceIds),showOnlyMyCharts:(0,J.rV)(J.dR.dashboard__editor_show_only_my_charts,!0)},this.rowRenderer=this.rowRenderer.bind(this),this.searchUpdated=this.searchUpdated.bind(this),this.handleSelect=this.handleSelect.bind(this),this.userIdForFetch=this.userIdForFetch.bind(this),this.onShowOnlyMyCharts=this.onShowOnlyMyCharts.bind(this)}userIdForFetch(){return this.state.showOnlyMyCharts?this.props.userId:void 0}componentDidMount(){this.slicesRequest=this.props.fetchSlices(this.userIdForFetch())}UNSAFE_componentWillReceiveProps(e){const t={};e.lastUpdated!==this.props.lastUpdated&&(t.filteredSlices=this.getFilteredSortedSlices(e.slices,this.state.searchTerm,this.state.sortBy,this.state.showOnlyMyCharts)),e.selectedSliceIds!==this.props.selectedSliceIds&&(t.selectedSliceIdsSet=new Set(e.selectedSliceIds)),Object.keys(t).length&&this.setState(t)}componentWillUnmount(){const e=$()(this.props.slices,(e=>this.state.selectedSliceIdsSet.has(e.slice_id)));this.props.updateSlices(e),this.slicesRequest&&this.slicesRequest.abort&&this.slicesRequest.abort()}getFilteredSortedSlices(e,t,n,i){return Object.values(e).filter((e=>!i||e.owners&&e.owners.find((e=>e.id===this.props.userId))||e.created_by&&e.created_by.id===this.props.userId)).filter((0,K.cj)(t,Le)).sort(Ye.sortByComparator(n))}searchUpdated(e){this.setState((t=>({searchTerm:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,e,t.sortBy,t.showOnlyMyCharts)})))}handleSelect(e){this.setState((t=>({sortBy:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,e,t.showOnlyMyCharts)}))),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),this.state.searchTerm,e)}rowRenderer(e){let{key:t,index:n,style:i}=e;const{filteredSlices:r,selectedSliceIdsSet:o}=this.state,a=r[n],s=o.has(a.slice_id),l=g.dW,d=X.Jd,c={chartId:a.slice_id,sliceName:a.slice_name};return(0,x.tZ)(Ae,{key:t,component:{type:l,id:d,meta:c},parentComponent:{id:X.D0,type:g.F0},index:n,depth:0,disableDragDrop:s,editMode:this.props.editMode,useEmptyDragPreview:!0,style:{}},(e=>{let{dragSourceRef:t}=e;return(0,x.tZ)(ce,{innerRef:t,style:i,sliceName:a.slice_name,lastModified:a.changed_on_humanized,visType:a.viz_type,datasourceUrl:a.datasource_url,datasourceName:a.datasource_name,thumbnailUrl:a.thumbnail_url,isSelected:s})}))}onShowOnlyMyCharts(e){e||(this.slicesRequest=this.props.fetchSlices(void 0,this.state.searchTerm,this.state.sortBy)),this.setState((t=>({showOnlyMyCharts:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,t.sortBy,e)}))),(0,J.LS)(J.dR.dashboard__editor_show_only_my_charts,e)}render(){return(0,x.tZ)("div",{css:x.iv`
          height: 100%;
          display: flex;
          flex-direction: column;
        `},(0,x.tZ)(Be,null,(0,x.tZ)(He,{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>window.open(`/chart/add?dashboard_id=${this.props.dashboardId}`,"_blank","noopener noreferrer")},(0,x.tZ)(Y.Z.PlusSmall,null),(0,c.t)("Create new chart"))),(0,x.tZ)(Ve,null,(0,x.tZ)(B.II,{placeholder:this.state.showOnlyMyCharts?(0,c.t)("Filter your charts"):(0,c.t)("Filter charts"),className:"search-input",onChange:e=>this.handleChange(e.target.value)}),(0,x.tZ)(Ke,{id:"slice-adder-sortby",value:this.state.sortBy,onChange:this.handleSelect,options:Object.entries(je).map((e=>{let[t,n]=e;return{label:(0,c.t)("Sort by %s",n),value:t}})),placeholder:(0,c.t)("Sort by")})),(0,x.tZ)("div",{css:e=>x.iv`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: ${e.gridUnit}px;
            padding: 0 ${3*e.gridUnit}px ${4*e.gridUnit}px
              ${3*e.gridUnit}px;
          `},(0,x.tZ)(Q.ZP,{onChange:this.onShowOnlyMyCharts,checked:this.state.showOnlyMyCharts}),(0,c.t)("Show only my charts"),(0,x.tZ)(ee.V,{placement:"top",tooltip:(0,c.t)("You can choose to display all charts that you have access to or only the ones you own.\n              Your filter selection will be saved and remain active until you choose to change it.")})),this.props.isLoading&&(0,x.tZ)(p.Z,null),!this.props.isLoading&&this.state.filteredSlices.length>0&&(0,x.tZ)(We,null,(0,x.tZ)(j,null,(e=>{let{height:t,width:n}=e;return(0,x.tZ)(V.t7,{width:n,height:t,itemCount:this.state.filteredSlices.length,itemSize:128,searchTerm:this.state.searchTerm,sortBy:this.state.sortBy,selectedSliceIds:this.props.selectedSliceIds},this.rowRenderer)}))),this.props.errorMessage&&(0,x.tZ)("div",{css:x.iv`
              padding: 16px;
            `},this.props.errorMessage),(0,x.tZ)(ge,{slices:this.state.filteredSlices}))}}Ye.propTypes=qe,Ye.defaultProps={selectedSliceIds:[],editMode:!1,errorMessage:""};const Je=Ye,Xe=(0,r.$j)((function(e,t){let{sliceEntities:n,dashboardInfo:i,dashboardState:r}=e;return{height:t.height,userId:+i.userId,dashboardId:i.id,selectedSliceIds:r.sliceIds,slices:n.slices,isLoading:n.isLoading,errorMessage:n.errorMessage,lastUpdated:n.lastUpdated,editMode:r.editMode}}),(function(e){return(0,i.DE)({fetchSlices:k.ex,updateSlices:k.Ff},e)}))(Je),Ge=e=>{let{registryKeys:t,registry:n}=e;return()=>t.map((e=>n[e]))},Qe=e=>{let{registryKeys:t,registry:n}=e;return e=>{t=t.filter((t=>t!==e)),delete n[e]}},et=e=>{let{registry:t}=e;return e=>t[e]},tt=function(e){void 0===e&&(e=[]);const t={registry:{},registryKeys:[]},n=(e=>{let{registryKeys:t,registry:n}=e;return(e,i)=>{t.push(e),n[e]={key:e,metadata:i.metadata,Component:s.lazy(i.loadComponent)}}})(t);return e.forEach((e=>{let{key:t,item:i}=e;n(t,i)})),{set:n,get:et(t),delete:Qe(t),getAll:Ge(t)}}([]),nt={id:d().string.isRequired,type:d().string.isRequired,label:d().string.isRequired,className:d().string},it=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${4*t.gridUnit}px;
    background: ${t.colors.grayscale.light5};
    cursor: move;

    &:not(.static):hover {
      background: ${t.colors.grayscale.light4};
    }
  `}}
`,rt=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    position: relative;
    background: ${t.colors.grayscale.light4};
    width: ${10*t.gridUnit}px;
    height: ${10*t.gridUnit}px;
    margin-right: ${4*t.gridUnit}px;
    border: 1px solid ${t.colors.grayscale.light5};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${t.colors.text.label};
    font-size: ${t.typography.sizes.xxl}px;

    &.fa-window-restore {
      font-size: ${t.typography.sizes.l}px;
    }

    &.fa-area-chart {
      font-size: ${t.typography.sizes.xl}px;
    }

    &.divider-placeholder:after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: ${t.colors.grayscale.light2};
    }
  `}}
`;class ot extends s.PureComponent{render(){const{label:e,id:t,type:n,className:i,meta:r}=this.props;return(0,x.tZ)(Ae,{component:{type:n,id:t,meta:r},parentComponent:{id:X.D0,type:g.F0},index:0,depth:0,editMode:!0},(t=>{let{dragSourceRef:n}=t;return(0,x.tZ)(it,{ref:n},(0,x.tZ)(rt,{className:b()("new-component-placeholder",i)}),e)}))}}function at(){return(0,x.tZ)(ot,{id:X.Nb,type:g.BA,label:(0,c.t)("Column"),className:"fa fa-long-arrow-down"})}function st(){return(0,x.tZ)(ot,{id:X.ES,type:g.hE,label:(0,c.t)("Divider"),className:"divider-placeholder"})}function lt(){return(0,x.tZ)(ot,{id:X.Z1,type:g.Nc,label:(0,c.t)("Header"),className:"fa fa-header"})}function dt(){return(0,x.tZ)(ot,{id:X.vD,type:g.Os,label:(0,c.t)("Row"),className:"fa fa-long-arrow-right"})}function ct(){return(0,x.tZ)(ot,{id:X.NN,type:g.yR,label:(0,c.t)("Tabs"),className:"fa fa-window-restore"})}function ut(){return(0,x.tZ)(ot,{id:X.C3,type:g.xh,label:(0,c.t)("Text"),className:"fa fa-font"})}ot.propTypes=nt,ot.defaultProps={className:null};const ht=e=>{let{componentKey:t,metadata:n}=e;return(0,x.tZ)(ot,{id:X.gR,type:g.t,label:n.name,meta:{metadata:n,componentKey:t},className:`fa fa-${n.iconName}`})},pt=e=>{let{topOffset:t=0}=e;return(0,x.tZ)("div",{css:x.iv`
      position: sticky;
      right: 0;
      top: ${t}px;
      height: calc(100vh - ${t}px);
      width: ${374}px;
    `},(0,x.tZ)("div",{css:e=>x.iv`
        position: absolute;
        height: 100%;
        width: ${374}px;
        box-shadow: -4px 0 4px 0 ${(0,w.rgba)(e.colors.grayscale.dark2,.1)};
        background-color: ${e.colors.grayscale.light5};
      `},(0,x.tZ)(R.ZP,{id:"tabs",css:e=>x.iv`
          line-height: inherit;
          margin-top: ${2*e.gridUnit}px;
          height: 100%;

          & .ant-tabs-content-holder {
            height: 100%;
            & .ant-tabs-content {
              height: 100%;
            }
          }
        `},(0,x.tZ)(R.ZP.TabPane,{key:1,tab:(0,c.t)("Charts"),css:x.iv`
            height: 100%;
          `},(0,x.tZ)(Xe,null)),(0,x.tZ)(R.ZP.TabPane,{key:2,tab:(0,c.t)("Layout elements")},(0,x.tZ)(ct,null),(0,x.tZ)(dt,null),(0,x.tZ)(at,null),(0,x.tZ)(lt,null),(0,x.tZ)(ut,null),(0,x.tZ)(st,null),tt.getAll().map((e=>{let{key:t,metadata:n}=e;return(0,x.tZ)(ht,{metadata:n,componentKey:t})}))))))};var mt=n(74599),gt=n(30381),ft=n.n(gt),vt=n(75049),bt=n(78161),yt=n(91877),xt=n(3741),St=n(12617),Ct=n(9679),Zt=n(41609),wt=n.n(Zt),Rt=n(31069),kt=n(83862),Tt=n(27600),$t=n(10222),Dt=n(68492),_t=n(23525);const It=e=>{const{copyMenuItemTitle:t,emailMenuItemTitle:n,emailSubject:i,emailBody:o,addDangerToast:a,addSuccessToast:s,dashboardId:l,dashboardComponentId:d,...u}=e,{dataMask:h,activeTabs:p}=(0,r.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs})));async function m(){return(0,_t.Nm)({dashboardId:l,dataMask:h,activeTabs:p,anchor:d})}return(0,x.tZ)(kt.v,{selectable:!1},(0,x.tZ)(kt.v.Item,ne()({key:"copy-url"},u),(0,x.tZ)("div",{onClick:async function(){try{await(0,$t.Z)(m),s((0,c.t)("Copied to clipboard!"))}catch(e){Dt.Z.error(e),a((0,c.t)("Sorry, something went wrong. Try again later."))}},role:"button",tabIndex:0},t)),(0,x.tZ)(kt.v.Item,ne()({key:"share-by-email"},u),(0,x.tZ)("div",{onClick:async function(){try{const e=encodeURIComponent(`${o}${await m()}`),t=encodeURIComponent(i);window.location.href=`mailto:?Subject=${t}%20&Body=${e}`}catch(e){Dt.Z.error(e),a((0,c.t)("Sorry, something went wrong. Try again later."))}},role:"button",tabIndex:0},n)))};var Ft=n(1304),Et=n(94670);const Mt=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .css-editor-header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      margin-bottom: ${2*t.gridUnit}px;\n\n      h5 {\n        margin-top: ${t.gridUnit}px;\n      }\n    }\n    .css-editor {\n      border: 1px solid ${t.colors.grayscale.light1};\n    }\n  `}}
`,Ot={initialCss:d().string,triggerNode:d().node.isRequired,onChange:d().func,templates:d().array};class zt extends s.PureComponent{constructor(e){super(e),this.state={css:e.initialCss},this.changeCss=this.changeCss.bind(this),this.changeCssTemplate=this.changeCssTemplate.bind(this)}componentDidMount(){Et.ry.preload()}changeCss(e){this.setState({css:e},(()=>{this.props.onChange(e)}))}changeCssTemplate(e){let{key:t}=e;this.changeCss(t)}renderTemplateSelector(){if(this.props.templates){const e=(0,x.tZ)(kt.v,{onClick:this.changeCssTemplate},this.props.templates.map((e=>(0,x.tZ)(kt.v.Item,{key:e.css},e.label))));return(0,x.tZ)(H.Gj,{overlay:e,placement:"bottomRight"},(0,x.tZ)(W.Z,null,(0,c.t)("Load a CSS template")))}return null}render(){return(0,x.tZ)(Ft.Z,{triggerNode:this.props.triggerNode,modalTitle:(0,c.t)("CSS"),modalBody:(0,x.tZ)(Mt,null,(0,x.tZ)("div",{className:"css-editor-header"},(0,x.tZ)("h5",null,(0,c.t)("Live CSS editor")),this.renderTemplateSelector()),(0,x.tZ)(Et.ry,{className:"css-editor",minLines:12,maxLines:30,onChange:this.changeCss,height:"200px",width:"100%",editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,value:this.state.css||""}))})}}zt.propTypes=Ot,zt.defaultProps={initialCss:"",onChange:()=>{}};const Ut=zt;var Pt=n(81315),Nt=n(29487),At=n(49238),qt=n(85633);const Lt=(0,y.iK)(Ft.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`,jt=y.iK.div`
  margin-top: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`;class Vt extends s.PureComponent{constructor(e){super(e),this.modalRef=void 0,this.modalRef=s.createRef(),this.state={refreshFrequency:e.refreshFrequency},this.handleFrequencyChange=this.handleFrequencyChange.bind(this),this.onSave=this.onSave.bind(this),this.onCancel=this.onCancel.bind(this)}onSave(){var e,t;this.props.onChange(this.state.refreshFrequency,this.props.editMode),null==(e=this.modalRef)||null==(t=e.current)||t.close(),this.props.addSuccessToast((0,c.t)("Refresh interval saved"))}onCancel(){var e,t;this.setState({refreshFrequency:this.props.refreshFrequency}),null==(e=this.modalRef)||null==(t=e.current)||t.close()}handleFrequencyChange(e){const{refreshIntervalOptions:t}=this.props;this.setState({refreshFrequency:e||t[0][0]})}render(){const{refreshLimit:e=0,refreshWarning:t,editMode:n,refreshIntervalOptions:i}=this.props,{refreshFrequency:r=0}=this.state,o=!!r&&!!t&&r<e;return(0,x.tZ)(Lt,{ref:this.modalRef,triggerNode:this.props.triggerNode,modalTitle:(0,c.t)("Refresh interval"),modalBody:(0,x.tZ)("div",null,(0,x.tZ)(At.lX,null,(0,c.t)("Refresh frequency")),(0,x.tZ)(Pt.Z,{ariaLabel:(0,c.t)("Refresh interval"),options:i.map((e=>({value:e[0],label:(0,c.t)(e[1])}))),value:r,onChange:this.handleFrequencyChange,sortComparator:(0,qt.mj)("value")}),o&&(0,x.tZ)(jt,null,(0,x.tZ)(Nt.Z,{type:"warning",message:(0,x.tZ)(s.Fragment,null,(0,x.tZ)("div",null,t),(0,x.tZ)("br",null),(0,x.tZ)("strong",null,(0,c.t)("Are you sure you want to proceed?")))}))),modalFooter:(0,x.tZ)(s.Fragment,null,(0,x.tZ)(W.Z,{buttonStyle:"primary",buttonSize:"small",onClick:this.onSave},n?(0,c.t)("Save"):(0,c.t)("Save for this session")),(0,x.tZ)(W.Z,{onClick:this.onCancel,buttonSize:"small"},(0,c.t)("Cancel")))})}}Vt.defaultProps={refreshLimit:0,refreshWarning:null};const Kt=Vt;var Bt=n(87183);const Ht={saveType:X.TN,colorNamespace:void 0,colorScheme:void 0,shouldPersistRefreshFrequency:!1};class Wt extends s.PureComponent{constructor(e){super(e),this.modal=void 0,this.onSave=void 0,this.state={saveType:e.saveType,newDashName:e.dashboardTitle+(0,c.t)("[copy]"),duplicateSlices:!1},this.handleSaveTypeChange=this.handleSaveTypeChange.bind(this),this.handleNameChange=this.handleNameChange.bind(this),this.saveDashboard=this.saveDashboard.bind(this),this.toggleDuplicateSlices=this.toggleDuplicateSlices.bind(this),this.onSave=this.props.onSave.bind(this),this.modal=s.createRef()}toggleDuplicateSlices(){this.setState((e=>({duplicateSlices:!e.duplicateSlices})))}handleSaveTypeChange(e){this.setState({saveType:e.target.value})}handleNameChange(e){this.setState({newDashName:e,saveType:X.kS})}saveDashboard(){var e;const{saveType:t,newDashName:n}=this.state,{dashboardTitle:i,dashboardInfo:r,layout:o,customCss:a,dashboardId:s,refreshFrequency:l,shouldPersistRefreshFrequency:d,lastModifiedTime:u}=this.props,h=d?l:null==(e=r.metadata)?void 0:e.refresh_frequency,p={certified_by:r.certified_by,certification_details:r.certification_details,css:a,dashboard_title:t===X.kS?n:i,duplicate_slices:this.state.duplicateSlices,last_modified_time:u,owners:r.owners,roles:r.roles,metadata:{...null==r?void 0:r.metadata,positions:o,refresh_frequency:h}};var m,g;t!==X.kS||n?(this.onSave(p,s,t).then((e=>{var n,i;t===X.kS&&null!=(n=e.json)&&null!=(i=n.result)&&i.id&&(window.location.href=`/superset/dashboard/${e.json.result.id}/`)})),null==(m=this.modal)||null==(g=m.current)||null==g.close||g.close()):this.props.addDangerToast((0,c.t)("You must pick a name for the new dashboard"))}render(){return(0,x.tZ)(Ft.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalTitle:(0,c.t)("Save dashboard"),modalBody:(0,x.tZ)("div",null,(0,x.tZ)(Bt.Y,{value:X.TN,onChange:this.handleSaveTypeChange,checked:this.state.saveType===X.TN,disabled:!this.props.canOverwrite},(0,c.t)("Overwrite Dashboard [%s]",this.props.dashboardTitle)),(0,x.tZ)("hr",null),(0,x.tZ)(Bt.Y,{value:X.kS,onChange:this.handleSaveTypeChange,checked:this.state.saveType===X.kS},(0,c.t)("Save as:")),(0,x.tZ)(B.II,{type:"text",placeholder:(0,c.t)("[dashboard name]"),value:this.state.newDashName,onFocus:e=>this.handleNameChange(e.target.value),onChange:e=>this.handleNameChange(e.target.value)}),(0,x.tZ)("div",{className:"m-l-25 m-t-5"},(0,x.tZ)(Q.ZP,{checked:this.state.duplicateSlices,onChange:()=>this.toggleDuplicateSlices()}),(0,x.tZ)("span",{className:"m-l-5"},(0,c.t)("also copy (duplicate) charts")))),modalFooter:(0,x.tZ)("div",null,(0,x.tZ)(W.Z,{buttonStyle:"primary",onClick:this.saveDashboard},(0,c.t)("Save")))})}}Wt.defaultProps=Ht;const Yt=Wt;var Jt=n(7070),Xt=n(14505),Gt=n(87999),Qt=n(56727),en=n(11370);function tn(e){let{pathname:t,filters:n={},hash:i="",standalone:r}=e;const o=new URLSearchParams;o.set(Tt.KD.preselectFilters.name,JSON.stringify((0,en.Z)(n))),r&&o.set(Tt.KD.standalone.name,r.toString());const a=(0,_t.eY)(Tt.KD.nativeFiltersKey);a&&o.set(Tt.KD.nativeFiltersKey.name,a);const s=i?`#${i}`:"";return`${t}?${o.toString()}${s}`}var nn=n(43399);const rn={addSuccessToast:d().func.isRequired,addDangerToast:d().func.isRequired,dashboardInfo:d().object.isRequired,dashboardId:d().number,dashboardTitle:d().string,dataMask:d().object.isRequired,customCss:d().string,colorNamespace:d().string,colorScheme:d().string,onChange:d().func.isRequired,updateCss:d().func.isRequired,forceRefreshAllCharts:d().func.isRequired,refreshFrequency:d().number,shouldPersistRefreshFrequency:d().bool.isRequired,setRefreshFrequency:d().func.isRequired,startPeriodicRender:d().func.isRequired,editMode:d().bool.isRequired,userCanEdit:d().bool,userCanShare:d().bool,userCanSave:d().bool,userCanCurate:d().bool.isRequired,isLoading:d().bool.isRequired,layout:d().object.isRequired,expandedSlices:d().object,onSave:d().func.isRequired,showPropertiesModal:d().func.isRequired,manageEmbedded:d().func.isRequired,logEvent:d().func,refreshLimit:d().number,refreshWarning:d().string,lastModifiedTime:d().number.isRequired},on="refresh-dashboard",an="edit-properties",sn="download-as-image",ln="toggle-fullscreen",dn="manage-embedded";class cn extends s.PureComponent{static discardChanges(){window.location.reload()}constructor(e){super(e),this.state={css:e.customCss,cssTemplates:[],showReportSubMenu:null},this.changeCss=this.changeCss.bind(this),this.changeRefreshInterval=this.changeRefreshInterval.bind(this),this.handleMenuClick=this.handleMenuClick.bind(this),this.setShowReportSubMenu=this.setShowReportSubMenu.bind(this)}UNSAFE_componentWillMount(){Rt.Z.get({endpoint:"/csstemplateasyncmodelview/api/read"}).then((e=>{let{json:t}=e;const n=t.result.map((e=>({value:e.template_name,css:e.css,label:e.template_name})));this.setState({cssTemplates:n})})).catch((()=>{this.props.addDangerToast((0,c.t)("An error occurred while fetching available CSS templates"))}))}UNSAFE_componentWillReceiveProps(e){this.props.customCss!==e.customCss&&this.setState({css:e.customCss},(()=>{(0,Xt.Z)(e.customCss)}))}setShowReportSubMenu(e){this.setState({showReportSubMenu:e})}changeCss(e){this.props.onChange(),this.props.updateCss(e)}changeRefreshInterval(e,t){this.props.setRefreshFrequency(e,t),this.props.startPeriodicRender(1e3*e)}handleMenuClick(e){let{key:t,domEvent:n}=e;switch(t){case on:this.props.forceRefreshAllCharts(),this.props.addSuccessToast((0,c.t)("Refreshing charts"));break;case an:this.props.showPropertiesModal();break;case sn:{var i,r;const e=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");e.style.visibility="hidden",(0,Qt.Z)(".dashboard",this.props.dashboardTitle,!0)(n).then((()=>{e.style.visibility="visible"})),null==(i=(r=this.props).logEvent)||i.call(r,xt.n2);break}case ln:{const e=tn({pathname:window.location.pathname,filters:(0,nn.De)(),hash:window.location.hash,standalone:!(0,_t.eY)(Tt.KD.standalone)});window.location.replace(e);break}case dn:this.props.manageEmbedded()}}render(){var e,t,n;const{dashboardTitle:i,dashboardId:r,dashboardInfo:o,refreshFrequency:a,shouldPersistRefreshFrequency:l,editMode:d,customCss:h,colorNamespace:p,colorScheme:m,layout:g,expandedSlices:f,onSave:v,userCanEdit:b,userCanShare:y,userCanSave:S,userCanCurate:C,isLoading:Z,refreshLimit:w,refreshWarning:R,lastModifiedTime:k,addSuccessToast:T,addDangerToast:$,setIsDropdownVisible:D,isDropdownVisible:_,...I}=this.props,F=`${(0,c.t)("Superset dashboard")} ${i}`,E=(0,c.t)("Check out this dashboard: "),M=tn({pathname:window.location.pathname,filters:(0,nn.De)(),hash:window.location.hash}),O=null==(e=o.common)||null==(t=e.conf)?void 0:t.DASHBOARD_AUTO_REFRESH_INTERVALS;return(0,x.tZ)(kt.v,ne()({selectable:!1},I),!d&&(0,x.tZ)(kt.v.Item,{key:on,disabled:Z,onClick:this.handleMenuClick},(0,c.t)("Refresh dashboard")),!d&&(0,x.tZ)(kt.v.Item,{key:ln,onClick:this.handleMenuClick},(0,_t.eY)(Tt.KD.standalone)?(0,c.t)("Exit fullscreen"):(0,c.t)("Enter fullscreen")),d&&(0,x.tZ)(kt.v.Item,{key:an,onClick:this.handleMenuClick},(0,c.t)("Edit properties")),d&&(0,x.tZ)(kt.v.Item,{key:"edit-css"},(0,x.tZ)(Ut,{triggerNode:(0,x.tZ)("span",null,(0,c.t)("Edit CSS")),initialCss:this.state.css,templates:this.state.cssTemplates,onChange:this.changeCss})),(0,x.tZ)(kt.v.Divider,null),S&&(0,x.tZ)(kt.v.Item,{key:"save-modal"},(0,x.tZ)(Yt,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:r,dashboardTitle:i,dashboardInfo:o,saveType:X.kS,layout:g,expandedSlices:f,refreshFrequency:a,shouldPersistRefreshFrequency:l,lastModifiedTime:k,customCss:h,colorNamespace:p,colorScheme:m,onSave:v,triggerNode:(0,x.tZ)("span",null,(0,c.t)("Save as")),canOverwrite:b})),!d&&(0,x.tZ)(kt.v.Item,{key:sn,onClick:this.handleMenuClick},(0,c.t)("Download as image")),y&&(0,x.tZ)(kt.v.SubMenu,{key:"share-dashboard",disabled:Z,title:(0,c.t)("Share")},(0,x.tZ)(It,{url:M,copyMenuItemTitle:(0,c.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,c.t)("Share permalink by email"),emailSubject:F,emailBody:E,addSuccessToast:T,addDangerToast:$,dashboardId:r})),!d&&C&&(0,x.tZ)(kt.v.Item,{key:dn,onClick:this.handleMenuClick},(0,c.t)("Embed dashboard")),(0,x.tZ)(kt.v.Divider,null),d?null:this.state.showReportSubMenu?(0,x.tZ)(s.Fragment,null,(0,x.tZ)(kt.v.SubMenu,{title:(0,c.t)("Manage email report")},(0,x.tZ)(Jt.Z,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,showReportSubMenu:this.state.showReportSubMenu,setIsDropdownVisible:D,isDropdownVisible:_,useTextMenu:!0})),(0,x.tZ)(kt.v.Divider,null)):(0,x.tZ)(kt.v,null,(0,x.tZ)(Jt.Z,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,setIsDropdownVisible:D,isDropdownVisible:_,useTextMenu:!0})),d&&!((0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS)&&wt()(null==o||null==(n=o.metadata)?void 0:n.filter_scopes))&&(0,x.tZ)(kt.v.Item,{key:"set-filter-mapping"},(0,x.tZ)(Gt.Z,{className:"m-r-5",triggerNode:(0,c.t)("Set filter mapping")})),(0,x.tZ)(kt.v.Item,{key:"autorefresh-modal"},(0,x.tZ)(Kt,{addSuccessToast:this.props.addSuccessToast,refreshFrequency:a,refreshLimit:w,refreshWarning:R,onChange:this.changeRefreshInterval,editMode:d,refreshIntervalOptions:O,triggerNode:(0,x.tZ)("span",null,(0,c.t)("Set auto-refresh interval"))})))}}cn.propTypes=rn,cn.defaultProps={colorNamespace:void 0,colorScheme:void 0,refreshLimit:0,refreshWarning:null};const un=cn;var hn=n(37921);const pn={dashboardId:d().number,isPublished:d().bool.isRequired,savePublished:d().func.isRequired,canEdit:d().bool,canSave:d().bool},mn=(0,c.t)("This dashboard is not published, it will not show up in the list of dashboards. Click here to publish this dashboard."),gn=(0,c.t)("This dashboard is not published which means it will not show up in the list of dashboards. Favorite it to see it there or access it by using the URL directly."),fn=(0,c.t)("This dashboard is published. Click to make it a draft.");class vn extends s.Component{componentDidMount(){this.togglePublished=this.togglePublished.bind(this)}togglePublished(){this.props.savePublished(this.props.dashboardId,!this.props.isPublished)}render(){return this.props.isPublished?this.props.canEdit&&this.props.canSave?(0,x.tZ)(re.u,{id:"published-dashboard-tooltip",placement:"bottom",title:fn},(0,x.tZ)(hn.Z,{onClick:()=>{this.togglePublished()}},(0,c.t)("Published"))):null:this.props.canEdit&&this.props.canSave?(0,x.tZ)(re.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:mn},(0,x.tZ)(hn.Z,{onClick:()=>{this.togglePublished()}},(0,c.t)("Draft"))):(0,x.tZ)(re.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:gn},(0,x.tZ)(hn.Z,null,(0,c.t)("Draft")))}}vn.propTypes=pn;const bn={onUndo:d().func.isRequired,onRedo:d().func.isRequired};class yn extends s.PureComponent{constructor(e){super(e),this.handleKeydown=this.handleKeydown.bind(this)}componentDidMount(){document.addEventListener("keydown",this.handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.ctrlKey||e.metaKey){const t="z"===e.key||90===e.keyCode,n="y"===e.key||89===e.keyCode,i=document&&document.querySelector(".dashboard-markdown--editing"),r=document&&document.querySelector(".editable-title--editing");i||r||!t&&!n||(e.preventDefault(),(t?this.props.onUndo:this.props.onRedo)())}}render(){return null}}yn.propTypes=bn;const xn=yn;var Sn=n(20818);const Cn=e=>{e&&clearInterval(e)};var Zn=n(52564),wn=n(22102),Rn=n(74069),kn=n(14114);const Tn=(0,vt.I)(),$n=e=>e.split(/(?:\s|,)+/).filter((e=>e)),Dn=y.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,_n=e=>{var t;let{dashboardId:n,onHide:i}=e;const{addInfoToast:r,addDangerToast:o}=(0,kn.e1)(),[a,l]=(0,s.useState)(!0),[d,u]=(0,s.useState)(!1),[h,m]=(0,s.useState)(null),[g,f]=(0,s.useState)(""),v=`/api/v1/dashboard/${n}/embedded`,b=!h||$n(g).join()!==h.allowed_domains.join(),y=(0,s.useCallback)((()=>{u(!0),(0,wn.Z)({method:"POST",endpoint:v})({allowed_domains:$n(g)}).then((e=>{let{result:t}=e;m(t),f(t.allowed_domains.join(", ")),r((0,c.t)("Changes saved."))}),(e=>{console.error(e),o((0,c.t)((0,c.t)("Sorry, something went wrong. The changes could not be saved.")))})).finally((()=>{u(!1)}))}),[v,g]),S=(0,s.useCallback)((()=>{Rn.Z.confirm({title:(0,c.t)("Disable embedding?"),content:(0,c.t)("This will remove your current embed configuration."),okType:"danger",onOk:()=>{u(!0),(0,wn.Z)({method:"DELETE",endpoint:v})({}).then((()=>{m(null),f(""),r((0,c.t)("Embedding deactivated.")),i()}),(e=>{console.error(e),o((0,c.t)("Sorry, something went wrong. Embedding could not be deactivated."))})).finally((()=>{u(!1)}))}})}),[v]);if((0,s.useEffect)((()=>{l(!1),(0,wn.Z)({method:"GET",endpoint:v})({}).catch((e=>{if(404===e.status)return{result:null};throw e})).then((e=>{let{result:t}=e;l(!0),m(t),f(t?t.allowed_domains.join(", "):"")}))}),[n]),!a)return(0,x.tZ)(p.Z,null);const C=Tn.get("embedded.documentation.configuration_details"),Z=Tn.get("embedded.documentation.description"),w=null!=(t=Tn.get("embedded.documentation.url"))?t:"https://www.npmjs.com/package/@superset-ui/embedded-sdk";return(0,x.tZ)(s.Fragment,null,h?C?(0,x.tZ)(C,{embeddedId:h.uuid}):(0,x.tZ)("p",null,(0,c.t)("This dashboard is ready to embed. In your application, pass the following id to the SDK:"),(0,x.tZ)("br",null),(0,x.tZ)("code",null,h.uuid)):(0,x.tZ)("p",null,(0,c.t)("Configure this dashboard to embed it into an external web application.")),(0,x.tZ)("p",null,(0,c.t)("For further instructions, consult the")," ",(0,x.tZ)("a",{href:w,target:"_blank",rel:"noreferrer"},Z?Z():(0,c.t)("Superset Embedded SDK documentation."))),(0,x.tZ)("h3",null,(0,c.t)("Settings")),(0,x.tZ)(At.xJ,null,(0,x.tZ)("label",{htmlFor:"allowed-domains"},(0,c.t)("Allowed Domains (comma separated)")," ",(0,x.tZ)(ee.V,{tooltip:(0,c.t)("A list of domain names that can embed this dashboard. Leaving this field empty will allow embedding from any domain.")})),(0,x.tZ)(B.II,{name:"allowed-domains",value:g,placeholder:"superset.example.com",onChange:e=>f(e.target.value)})),(0,x.tZ)(Dn,null,h?(0,x.tZ)(s.Fragment,null,(0,x.tZ)(W.Z,{onClick:S,buttonStyle:"secondary",loading:d},(0,c.t)("Deactivate")),(0,x.tZ)(W.Z,{onClick:y,buttonStyle:"primary",disabled:!b,loading:d},(0,c.t)("Save changes"))):(0,x.tZ)(W.Z,{onClick:y,buttonStyle:"primary",loading:d},(0,c.t)("Enable embedding"))))},In=e=>{const{show:t,onHide:n}=e;return(0,x.tZ)(Rn.Z,{show:t,onHide:n,title:(0,c.t)("Embed"),hideFooter:!0},(0,x.tZ)(_n,e))},Fn=(0,n(67913).Z)((()=>n.e(783).then(n.bind(n,13070)))),En=()=>{const e=(0,r.v9)((e=>{let{dashboardState:t}=e;return t.overwriteConfirmMetadata}));return(0,x.tZ)(s.Fragment,null,e&&(0,x.tZ)(Fn,{overwriteConfirmMetadata:e}))},Mn=(0,vt.I)(),On={addSuccessToast:d().func.isRequired,addDangerToast:d().func.isRequired,addWarningToast:d().func.isRequired,user:d().object,dashboardInfo:d().object.isRequired,dashboardTitle:d().string,dataMask:d().object.isRequired,charts:d().objectOf(G.$6).isRequired,layout:d().object.isRequired,expandedSlices:d().object,customCss:d().string,colorNamespace:d().string,colorScheme:d().string,setColorScheme:d().func.isRequired,setUnsavedChanges:d().func.isRequired,isStarred:d().bool.isRequired,isPublished:d().bool.isRequired,isLoading:d().bool.isRequired,onSave:d().func.isRequired,onChange:d().func.isRequired,fetchFaveStar:d().func.isRequired,fetchCharts:d().func.isRequired,saveFaveStar:d().func.isRequired,savePublished:d().func.isRequired,updateDashboardTitle:d().func.isRequired,editMode:d().bool.isRequired,setEditMode:d().func.isRequired,showBuilderPane:d().func.isRequired,updateCss:d().func.isRequired,logEvent:d().func.isRequired,hasUnsavedChanges:d().bool.isRequired,maxUndoHistoryExceeded:d().bool.isRequired,lastModifiedTime:d().number.isRequired,onRefresh:d().func.isRequired,onUndo:d().func.isRequired,onRedo:d().func.isRequired,undoLength:d().number.isRequired,redoLength:d().number.isRequired,setMaxUndoHistoryExceeded:d().func.isRequired,maxUndoHistoryToast:d().func.isRequired,refreshFrequency:d().number,shouldPersistRefreshFrequency:d().bool.isRequired,setRefreshFrequency:d().func.isRequired,dashboardInfoChanged:d().func.isRequired,dashboardTitleChanged:d().func.isRequired},zn=e=>x.iv`
  border-bottom: 1px solid ${e.colors.grayscale.light2};
`,Un=e=>x.iv`
  color: ${e.colors.primary.dark2};
`,Pn=e=>x.iv`
  display: flex;
  align-items: center;

  .action-schedule-report {
    margin-left: ${2*e.gridUnit}px;
  }

  .undoRedo {
    display: flex;
    margin-right: ${2*e.gridUnit}px;
  }
`,Nn=(0,y.iK)(H.C0)`
  padding: 0;
  &:hover {
    background: transparent;
  }
`,An=e=>x.iv`
  color: ${e.colors.grayscale.light1};
  &:hover {
    color: ${e.colors.grayscale.base};
  }
`,qn=e=>x.iv`
  color: ${e.colors.grayscale.base};
`,Ln=e=>x.iv`
  color: ${e.colors.grayscale.light2};
`,jn=e=>x.iv`
  min-width: ${17*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`,Vn=e=>x.iv`
  min-width: ${22*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`;class Kn extends s.PureComponent{static discardChanges(){const e=new URL(window.location.href);e.searchParams.delete("edit"),window.location.assign(e)}constructor(e){super(e),this.showEmbedModal=()=>{this.setState({showingEmbedModal:!0})},this.hideEmbedModal=()=>{this.setState({showingEmbedModal:!1})},this.state={didNotifyMaxUndoHistoryToast:!1,emphasizeUndo:!1,emphasizeRedo:!1,showingPropertiesModal:!1,isDropdownVisible:!1},this.handleChangeText=this.handleChangeText.bind(this),this.handleCtrlZ=this.handleCtrlZ.bind(this),this.handleCtrlY=this.handleCtrlY.bind(this),this.toggleEditMode=this.toggleEditMode.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.startPeriodicRender=this.startPeriodicRender.bind(this),this.overwriteDashboard=this.overwriteDashboard.bind(this),this.showPropertiesModal=this.showPropertiesModal.bind(this),this.hidePropertiesModal=this.hidePropertiesModal.bind(this),this.setIsDropdownVisible=this.setIsDropdownVisible.bind(this)}componentDidMount(){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}componentDidUpdate(e){if(this.props.refreshFrequency!==e.refreshFrequency){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}}UNSAFE_componentWillReceiveProps(e){X.Q9-e.undoLength<=0&&!this.state.didNotifyMaxUndoHistoryToast&&(this.setState((()=>({didNotifyMaxUndoHistoryToast:!0}))),this.props.maxUndoHistoryToast()),e.undoLength>X.Q9&&!this.props.maxUndoHistoryExceeded&&this.props.setMaxUndoHistoryExceeded()}componentWillUnmount(){Cn(this.refreshTimer),this.props.setRefreshFrequency(0),clearTimeout(this.ctrlYTimeout),clearTimeout(this.ctrlZTimeout)}handleChangeText(e){const{updateDashboardTitle:t,onChange:n}=this.props;e&&this.props.dashboardTitle!==e&&(t(e),n())}setIsDropdownVisible(e){this.setState({isDropdownVisible:e})}handleCtrlY(){this.props.onRedo(),this.setState({emphasizeRedo:!0},(()=>{this.ctrlYTimeout&&clearTimeout(this.ctrlYTimeout),this.ctrlYTimeout=setTimeout((()=>{this.setState({emphasizeRedo:!1})}),100)}))}handleCtrlZ(){this.props.onUndo(),this.setState({emphasizeUndo:!0},(()=>{this.ctrlZTimeout&&clearTimeout(this.ctrlZTimeout),this.ctrlZTimeout=setTimeout((()=>{this.setState({emphasizeUndo:!1})}),100)}))}forceRefresh(){if(!this.props.isLoading){const e=Object.keys(this.props.charts);return this.props.logEvent(xt.H3,{force:!0,interval:0,chartCount:e.length}),this.props.onRefresh(e,!0,0,this.props.dashboardInfo.id)}return!1}startPeriodicRender(e){let t;if(e){var n,i;const{dashboardInfo:r}=this.props,o=(null==(n=r.common)||null==(i=n.conf)?void 0:i.DASHBOARD_AUTO_REFRESH_INTERVALS).find((t=>Number(t[0])===e/1e3));t=o?(0,c.t)(o[1]):ft().duration(e,"millisecond").humanize()}this.refreshTimer=function(e){let{interval:t=0,periodicRender:n,refreshTimer:i}=e;return Cn(i),t>0?setInterval(n,t):0}({interval:e,periodicRender:()=>{const{fetchCharts:n,logEvent:i,charts:r,dashboardInfo:o}=this.props,{metadata:a}=o,s=a.timed_refresh_immune_slices||[],l=Object.values(r).filter((e=>-1===s.indexOf(e.id))).map((e=>e.id));return i(xt.S,{interval:e,chartCount:l.length}),this.props.addWarningToast((0,c.t)("This dashboard is currently auto refreshing; the next auto refresh will be in %s.",t)),"fetch"===o.common.conf.DASHBOARD_AUTO_REFRESH_MODE?n(l,!1,.2*e,o.id):n(l,!0,.2*e,o.id)},refreshTimer:this.refreshTimer})}toggleEditMode(){this.props.logEvent(xt.vH,{edit_mode:!this.props.editMode}),this.props.setEditMode(!this.props.editMode)}overwriteDashboard(){var e,t,n;const{dashboardTitle:i,layout:r,colorScheme:o,colorNamespace:a,customCss:s,dashboardInfo:l,refreshFrequency:d,shouldPersistRefreshFrequency:u,lastModifiedTime:h,slug:p}=this.props,m=u?d:null==(e=l.metadata)?void 0:e.refresh_frequency,g=(null==l||null==(t=l.metadata)?void 0:t.color_scheme)||o,f=(null==l||null==(n=l.metadata)?void 0:n.color_namespace)||a,v=Object.fromEntries((0,bt.ZP)().getColorMap()),b={certified_by:l.certified_by,certification_details:l.certification_details,css:s,dashboard_title:i,last_modified_time:h,owners:l.owners,roles:l.roles,slug:p,metadata:{...null==l?void 0:l.metadata,color_namespace:f,color_scheme:g,positions:r,refresh_frequency:m,shared_label_colors:v}},y=(0,Ct.o)(r).length,x=l.common.conf.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT||X.Bu;y>=x?this.props.addDangerToast((0,c.t)("Your dashboard is too large. Please reduce its size before saving it.")):(y>=.9*x&&this.props.addWarningToast("Your dashboard is near the size limit."),this.props.onSave(b,l.id,X.TN))}showPropertiesModal(){this.setState({showingPropertiesModal:!0})}hidePropertiesModal(){this.setState({showingPropertiesModal:!1})}render(){var e,t,n,i;const{dashboardTitle:r,layout:o,expandedSlices:a,customCss:s,colorNamespace:l,dataMask:d,setColorScheme:h,setUnsavedChanges:p,colorScheme:m,onUndo:g,onRedo:f,undoLength:v,redoLength:b,onChange:y,onSave:S,updateCss:C,editMode:Z,isPublished:w,user:R,dashboardInfo:k,hasUnsavedChanges:T,isLoading:$,refreshFrequency:D,shouldPersistRefreshFrequency:_,setRefreshFrequency:I,lastModifiedTime:F,logEvent:E}=this.props,M=k.dash_edit_perm&&!k.is_managed_externally,O=k.dash_share_perm,z=k.dash_save_perm,U=(0,yt.c)(u.T.EMBEDDED_SUPERSET)&&(0,St.R)("can_set_embedded","Dashboard",R.roles),P=null==(e=k.common)||null==(t=e.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT,N=null==(n=k.common)||null==(i=n.conf)?void 0:i.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE,A=Mn.get("dashboard.nav.right");return(0,x.tZ)("div",{css:zn,"data-test-id":k.id,className:"dashboard-header-container"},(0,x.tZ)(Zn.u,{editableTitleProps:{title:r,canEdit:M&&Z,onSave:this.handleChangeText,placeholder:(0,c.t)("Add the name of the dashboard"),label:(0,c.t)("Dashboard title"),showTooltip:!1},certificatiedBadgeProps:{certifiedBy:k.certified_by,details:k.certification_details},faveStarProps:{itemId:k.id,fetchFaveStar:this.props.fetchFaveStar,saveFaveStar:this.props.saveFaveStar,isStarred:this.props.isStarred,showTooltip:!0},titlePanelAdditionalItems:[!Z&&(0,x.tZ)(vn,{dashboardId:k.id,isPublished:w,savePublished:this.props.savePublished,canEdit:M,canSave:z,visible:!Z})],rightPanelAdditionalItems:(0,x.tZ)("div",{className:"button-container"},z&&(0,x.tZ)("div",{className:"button-container"},Z&&(0,x.tZ)("div",{css:Pn},(0,x.tZ)("div",{className:"undoRedo"},(0,x.tZ)(re.u,{id:"dashboard-undo-tooltip",title:(0,c.t)("Undo the action")},(0,x.tZ)(Nn,{type:"text",disabled:v<1},(0,x.tZ)(Y.Z.Undo,{css:[An,this.state.emphasizeUndo&&qn,v<1&&Ln,"",""],onClick:v&&g,iconSize:"xl"}))),(0,x.tZ)(re.u,{id:"dashboard-redo-tooltip",title:(0,c.t)("Redo the action")},(0,x.tZ)(Nn,{type:"text",disabled:b<1},(0,x.tZ)(Y.Z.Redo,{css:[An,this.state.emphasizeRedo&&qn,b<1&&Ln,"",""],onClick:b&&f,iconSize:"xl"})))),(0,x.tZ)(W.Z,{css:Vn,buttonSize:"small",onClick:this.constructor.discardChanges,buttonStyle:"default","aria-label":(0,c.t)("Discard")},(0,c.t)("Discard")),(0,x.tZ)(W.Z,{css:jn,buttonSize:"small",disabled:!T,buttonStyle:"primary",onClick:this.overwriteDashboard,"aria-label":(0,c.t)("Save")},(0,c.t)("Save")))),Z?(0,x.tZ)(xn,{onUndo:this.handleCtrlZ,onRedo:this.handleCtrlY}):(0,x.tZ)("div",{css:Pn},A&&(0,x.tZ)(A,null),M&&(0,x.tZ)(W.Z,{buttonStyle:"secondary",onClick:this.toggleEditMode,className:"action-button",css:Un,"aria-label":(0,c.t)("Edit dashboard")},(0,c.t)("Edit dashboard")))),menuDropdownProps:{getPopupContainer:e=>e.closest(".header-with-actions"),visible:this.state.isDropdownVisible,onVisibleChange:this.setIsDropdownVisible},additionalActionsMenu:(0,x.tZ)(un,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:k.id,dashboardTitle:r,dashboardInfo:k,dataMask:d,layout:o,expandedSlices:a,customCss:s,colorNamespace:l,colorScheme:m,onSave:S,onChange:y,forceRefreshAllCharts:this.forceRefresh,startPeriodicRender:this.startPeriodicRender,refreshFrequency:D,shouldPersistRefreshFrequency:_,setRefreshFrequency:I,updateCss:C,editMode:Z,hasUnsavedChanges:T,userCanEdit:M,userCanShare:O,userCanSave:z,userCanCurate:U,isLoading:$,showPropertiesModal:this.showPropertiesModal,manageEmbedded:this.showEmbedModal,refreshLimit:P,refreshWarning:N,lastModifiedTime:F,isDropdownVisible:this.state.isDropdownVisible,setIsDropdownVisible:this.setIsDropdownVisible,logEvent:E}),showFaveStar:(null==R?void 0:R.userId)&&(null==k?void 0:k.id),showTitlePanelItems:!0}),this.state.showingPropertiesModal&&(0,x.tZ)(Sn.Z,{dashboardId:k.id,dashboardInfo:k,dashboardTitle:r,show:this.state.showingPropertiesModal,onHide:this.hidePropertiesModal,colorScheme:this.props.colorScheme,onSubmit:e=>{const{dashboardInfoChanged:t,dashboardTitleChanged:n}=this.props;h(e.colorScheme),t({slug:e.slug,metadata:JSON.parse(e.jsonMetadata||"{}"),certified_by:e.certifiedBy,certification_details:e.certificationDetails,owners:e.owners,roles:e.roles}),p(!0),n(e.title)},onlyApply:!0}),(0,x.tZ)(En,null),U&&(0,x.tZ)(In,{show:this.state.showingEmbedModal,onHide:this.hideEmbedModal,dashboardId:k.id}),(0,x.tZ)(x.xB,{styles:x.iv`
            .ant-menu-vertical {
              border-right: none;
            }
          `}))}}Kn.propTypes=On,Kn.defaultProps={colorNamespace:void 0,colorScheme:void 0};const Bn=Kn;function Hn(e){return Object.values(e).some((e=>e.chartUpdateStartTime>(e.chartUpdateEndTime||0)))}var Wn=n(41295),Yn=n(9467),Jn=n(12885),Xn=n(72570),Gn=n(97381),Qn=n(61358);const ei=(0,r.$j)((function(e){let{dashboardLayout:t,dashboardState:n,reports:i,dashboardInfo:r,charts:o,dataMask:a,user:s}=e;return{dashboardInfo:r,undoLength:t.past.length,redoLength:t.future.length,layout:t.present,dashboardTitle:((t.present[X.M2]||{}).meta||{}).text,expandedSlices:n.expandedSlices,refreshFrequency:n.refreshFrequency,shouldPersistRefreshFrequency:!!n.shouldPersistRefreshFrequency,customCss:n.css,colorNamespace:n.colorNamespace,colorScheme:n.colorScheme,charts:o,dataMask:a,user:s,isStarred:!!n.isStarred,isPublished:!!n.isPublished,isLoading:Hn(o),hasUnsavedChanges:!!n.hasUnsavedChanges,maxUndoHistoryExceeded:!!n.maxUndoHistoryExceeded,lastModifiedTime:Math.max(n.lastModifiedTime,r.last_modified_time),editMode:!!n.editMode,slug:r.slug,metadata:r.metadata,reports:i}}),(function(e){return(0,i.DE)({addSuccessToast:Xn.ws,addDangerToast:Xn.Gb,addWarningToast:Xn.Dz,onUndo:Jn.Ou,onRedo:Jn.az,setEditMode:Yn.Mb,showBuilderPane:Yn.O8,setColorScheme:Yn.uW,setUnsavedChanges:Yn.if,fetchFaveStar:Yn.Lb,saveFaveStar:Yn.TN,savePublished:Yn.dr,fetchCharts:Yn.Mn,updateDashboardTitle:Jn.A7,updateCss:Yn.Sn,onChange:Yn.z2,onSave:Yn.M8,setMaxUndoHistoryExceeded:Yn.uN,maxUndoHistoryToast:Yn.Qt,logEvent:Gn.logEvent,setRefreshFrequency:Yn.fE,onRefresh:Yn.Yy,dashboardInfoChanged:Wn.a8,dashboardTitleChanged:Jn.Ww,updateDataMask:mt.eG,fetchUISpecificReport:Qn.Aw},e)}))(Bn),ti=y.iK.div`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,ni=y.iK.span`
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,ii=e=>{let{icon:t,label:n,onClick:i}=e;return(0,x.tZ)(ti,{tabIndex:0,role:"button",onClick:e=>{e.preventDefault(),i(e)}},t,n&&(0,x.tZ)(ni,null,n))};var ri=n(99299),oi=n(13433),ai=n(98286);function si(e){let{dashboardId:t,anchorLinkId:n,placement:i="right",emailContent:o="",emailSubject:a=""}=e;const[l,d]=(0,s.useState)(""),{addDangerToast:u}=(0,kn.e1)(),{dataMask:h,activeTabs:p}=(0,r.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs}))),m=`mailto:?Subject=${a}%20&Body=${o}${l||""}`;return(0,x.tZ)(ri.Z,{trigger:"click",placement:i,content:(0,x.tZ)("div",{id:"shorturl-popover",onClick:e=>{e.stopPropagation()}},(0,x.tZ)(oi.Z,{text:l,copyNode:(0,x.tZ)("i",{className:"fa fa-clipboard",title:(0,c.t)("Copy to clipboard")})}),"  ",(0,x.tZ)("a",{href:m},(0,x.tZ)("i",{className:"fa fa-envelope"})))},(0,x.tZ)("span",{className:"short-link-trigger btn btn-default btn-sm",tabIndex:0,role:"button",onClick:e=>{e.stopPropagation(),(async()=>{try{const e=await(0,_t.Nm)({dashboardId:t,dataMask:h,activeTabs:p,anchor:n});d(e)}catch(e){e&&u((await(0,ai.O$)(e)).error||(0,c.t)("Something went wrong."))}})()}},(0,x.tZ)("i",{className:"short-link-trigger fa fa-link"})," "))}var li=n(56967);function di(e){let{id:t,dashboardId:n,placement:i="right",scrollIntoView:r=!1,showShortLinkButton:o=!0}=e;const a=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},l=(0,li.Z)();return(0,s.useEffect)((()=>{l&&t===l&&a(t)}),[l,t]),(0,s.useEffect)((()=>{r&&a(t)}),[t,r]),(0,x.tZ)("span",{className:"anchor-link-container",id:t},o&&n&&(0,x.tZ)(si,{anchorLinkId:t,dashboardId:n,emailSubject:(0,c.t)("Superset chart"),emailContent:(0,c.t)("Check out this chart in dashboard:"),placement:i}))}var ci=n(81395),ui=n(52256),hi=n(91914),pi=n(18446),mi=n.n(pi),gi=n(16550),fi=n(12515),vi=n(40730),bi=n(99543),yi=n(40219),xi=n(29147),Si=n(38270),Ci=n(73727),Zi=n(11064),wi=n(16355),Ri=n(88694),ki=n(54076);const Ti=e=>{const t="MacOS"===(0,ki.fV)(),n=e?(0,c.t)("Click to edit %s.",e):(0,c.t)("Click to edit chart."),i=(0,c.t)("Use %s to open in a new tab.",t?(0,c.t)("⌘ + click"):(0,c.t)("ctrl + click"));return(0,x.tZ)(s.Fragment,null,(0,x.tZ)("div",null,n),(0,x.tZ)("div",null,i))};var $i=n(15423),Di=n(21496),_i=n(41814),Ii=n(37731),Fi=n(52004),Ei=n(32873);const Mi=(0,n(22222).P1)((e=>e.charts),(e=>Object.values(e).map((e=>e.id)))),Oi=()=>((e,t)=>{const n=(0,s.useRef)(),i=n.current,r=((e,t)=>e===t||mi()(e,t))(i,e);return(0,s.useEffect)((()=>{r||(n.current=e)})),(0,Ii.Z)(i)&&r?i:e})((0,r.v9)(Mi));var zi=n(9531);const Ui=(e,t)=>{var n,i;let{type:r,meta:o}=e;return!(r!==g.gn&&r!==g.dW&&r!==g.U0||t&&"filter_box"===(null==(n=t[null==o?void 0:o.chartId])||null==(i=n.form_data)?void 0:i.viz_type))},Pi=(e,t,n,i,r,o,s)=>{var l;let d=t;if(e&&t&&Ui(e,i)&&e.type!==g.U0&&null!=r&&null!=a()(r)&&a()(r).call(r,e.id)){var u;const n=s((e=>{var t,n,i,r,o,a,s,l,d,c;return null!=(t=null!=(n=null!=(i=null!=(r=null!=(o=null==e||null==(a=e.meta)?void 0:a.sliceNameOverride)?o:null==e||null==(s=e.meta)?void 0:s.sliceName)?r:null==e||null==(l=e.meta)?void 0:l.text)?i:null==e||null==(d=e.meta)?void 0:d.defaultText)?n:null==e||null==(c=e.id)||null==c.toString?void 0:c.toString())?t:""})(e),null==o||null==a()(o)?void 0:a()(o).call(o,null==(u=e.meta)?void 0:u.chartId),(0,c.t)("This chart might be incompatible with the filter (datasets don't match)")),i={key:e.id,title:n,children:[]};t.children.push(i),d=i}null==e||null==(l=e.children)||null==l.forEach||l.forEach((e=>{const t=null==n?void 0:n[e];t?Pi(t,d,n,i,r,o,s):Dt.Z.warn(`Unable to find item with id: ${e} in the dashboard layout. This may indicate you have invalid references in your dashboard and the references to id: ${e} should be removed.`)}))},Ni=(e,t,n,i)=>{n.forEach((n=>{var r,o;Ni(e,t,((e,t)=>{var n;return[...(null==(n=e[t])?void 0:n.children)||[],...Object.values(e).filter((n=>n.parents&&n.parents[n.parents.length-1]===t&&!Ui(e[n.parents[n.parents.length-1]]))).map((e=>{let{id:t}=e;return t}))]})(t,n),i),(null==(r=t[n])?void 0:r.type)!==g.dW||a()(i).call(i,null==(o=t[n])?void 0:o.meta.chartId)||e.push(n)}))},Ai=function(e,t){return void 0===t&&(t=[]),{rootPath:[X._4],excluded:e?[e,...t]:t}},qi=(e,t)=>!e||e.rootPath[0]===X._4&&!e.excluded.filter((e=>e!==t)).length,Li=(e,t,n)=>{let i=(0,x.tZ)("span",null,e);return t&&(i=(0,x.tZ)(s.Fragment,null,i," ",(0,x.tZ)(re.u,{title:n},(0,x.tZ)(Y.Z.Info,{iconSize:"m"})))),i},ji=e=>{let{formScope:t,initialScope:n,forceUpdate:i,updateFormValues:o,chartId:l,initiallyExcludedCharts:d=[],title:u}=e;const[h,p]=(0,s.useState)([X._4]),{treeData:m,layout:f}=function(e,t,n,i){void 0===t&&(t=[]),void 0===n&&(n=e=>e),void 0===i&&(i=(0,c.t)("All panels"));const o=(0,r.v9)((e=>{let{dashboardLayout:{present:t}}=e;return t})),a=(0,r.v9)((e=>{let{charts:t}=e;return t})),l={children:[],key:X._4,type:g.U0,title:i},d=(0,s.useMemo)((()=>Object.values(o).reduce(((t,n)=>{const{id:i,parents:r=[],type:o,meta:a}=n;return o===g.dW&&e!==(null==a?void 0:a.chartId)?[...new Set([...t,...r,i])]:t}),[])),[o,e]);return(0,s.useMemo)((()=>{Pi(o[X._4],l,o,a,d,t,n)}),[o,l,a,t,n]),{treeData:[l],layout:o}}(l,d,Li,u),[v,b]=(0,s.useState)(!0),y=(0,s.useMemo)((()=>((e,t)=>{const n=[];return Ni(n,t,[...e.rootPath],[...e.excluded]),[...new Set(n)]})({...t||n},f)),[t,n,f]);return(0,x.tZ)(H.mp,{checkable:!0,selectable:!1,onExpand:e=>{p(e),b(!1)},expandedKeys:h,autoExpandParent:v,onCheck:e=>{i();const t=((e,t)=>{if(!e.length)return{rootPath:[],excluded:[]};const n=e.filter((e=>{var n;return(null==(n=t[e])?void 0:n.type)===g.dW})).map((e=>{var n;return[X._4,...(null==(n=t[e])?void 0:n.parents)||[]].filter((e=>Ui(t[e])))}));n.sort(((e,t)=>e.length-t.length));const i=n.map((e=>e[n[0].length-1])),r=[];return Object.entries(t).forEach((t=>{var n;let[o,s]=t;const l=s.parents||[];s.type===g.dW&&null!=(n=[X._4,...l])&&n.find((t=>((t,n)=>a()(i).call(i,t)&&!a()(e).call(e,n))(t,o)))&&r.push(s.meta.chartId)})),{rootPath:[...new Set(i)],excluded:r}})(e,f);void 0!==l&&(t.excluded=[...new Set([...t.excluded,l])]),o({scope:t})},checkedKeys:y,treeData:m})},Vi=(0,s.memo)(ji),Ki=-1,Bi=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    font-size: ${t.typography.sizes.s}px;
    color: ${t.colors.grayscale.base};
    margin-bottom: ${7*t.gridUnit}px;
  `}}
`,Hi=e=>{let{value:t,onSelectChange:n,chartConfigs:i}=e;const o=(0,y.Fg)(),a=(0,r.v9)((e=>e.dashboardLayout.present)),l=(0,s.useMemo)((()=>{const e=Object.values(a).filter((e=>e.type===g.dW));return Object.values(i).filter((e=>(0,Fi._6)(e.crossFilters.scope)||e.id===t&&t!==Ki)).map((t=>{const n=e.find((e=>e.meta.chartId===Number(t.id)));return{value:Number(t.id),label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[i,a,t]);return(0,x.tZ)("div",{css:x.iv`
        margin-bottom: ${6*o.gridUnit}px;
      `},(0,x.tZ)("div",{css:x.iv`
          display: flex;
          align-items: center;
          margin-bottom: ${o.gridUnit}px;
        `},(0,x.tZ)(Bi,{css:x.iv`
            color: ${o.colors.grayscale.dark1};
            margin-right: ${o.gridUnit}px;
            margin-bottom: 0;
          `},`${(0,c.t)("Chart")} *`),(0,x.tZ)(re.u,{title:(0,c.t)("Tooltip"),placement:"top"},(0,x.tZ)(Y.Z.InfoCircleOutlined,{iconSize:"xs",iconColor:o.colors.grayscale.base,css:x.iv`
              & > span {
                line-height: 0;
              }
            `}))),(0,x.tZ)(H.Ph,{ariaLabel:(0,c.t)("Select chart"),options:l,value:t&&t===Ki?void 0:t,onChange:e=>{n(Number(e))}}))},Wi=e=>{let{onScopeUpdate:t,currentScope:n,chartId:i,onSelectChange:o,chartConfigs:a}=e;const s=(0,y.Fg)(),l=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled}));return(0,x.tZ)("div",{css:x.iv`
        flex: 1;
      `},!l&&(0,x.tZ)(Nt.Z,{message:(0,x.tZ)("span",{css:x.iv`
                font-weight: ${s.typography.weights.bold};
              `},(0,c.t)("Cross-filtering is not enabled in this dashboard")),type:"info",closable:!1,css:x.iv`
            margin-bottom: ${6*s.gridUnit}px;
          `}),(0,Ii.Z)(i)&&(0,x.tZ)(Hi,{value:i,onSelectChange:o,chartConfigs:a}),(0,x.tZ)(Bi,null,(0,Ii.Z)(i)?(0,c.t)('Select the charts to which you want to apply cross-filters when interacting with this chart. You can select "All charts" to apply filters to all charts that use the same dataset or contain the same column name in the dashboard.'):(0,c.t)('Select the charts to which you want to apply cross-filters in this dashboard. Deselecting a chart will exclude it from being filtered when applying cross-filters from any chart on the dashboard. You can select "All charts" to apply cross-filters to all charts that use the same dataset or contain the same column name in the dashboard.')),(0,x.tZ)(Vi,{updateFormValues:t,initialScope:n,forceUpdate:ki.EI,chartId:i,title:(0,c.t)("All charts")}))};var Yi=n(27034),Ji=n(22068);const Xi="FILTER",Gi=y.iK.div`
  ${e=>{let{isDragging:t,theme:n}=e;return`\n    opacity: ${t?.3:1};\n    cursor: ${t?"grabbing":"pointer"};\n    width: 100%;\n    display: flex;\n    padding:  ${n.gridUnit}px;\n  `}}
`,Qi=(0,y.iK)(Y.Z.Drag,{shouldForwardProp:e=>"isDragging"!==e})`
  ${e=>{let{isDragging:t,theme:n}=e;return`\n    font-size: ${n.typography.sizes.m}px;\n    margin-top: 15px;\n    cursor: ${t?"grabbing":"grab"};\n    padding-left: ${n.gridUnit}px;\n  `}}
`;var er={name:"82a6rk",styles:"flex:1"};const tr=e=>{let{index:t,onRearrange:n,filterIds:i,children:r}=e;const o=(0,s.useRef)(null),[{isDragging:a},l]=(0,Yi.c)({item:{filterIds:i,type:Xi,index:t},collect:e=>({isDragging:e.isDragging()})}),[,d]=(0,Ji.L)({accept:Xi,hover:(e,i)=>{var r;if(!o.current)return;const a=e.index,s=t;if(a===s)return;const l=null==(r=o.current)?void 0:r.getBoundingClientRect(),d=(l.bottom-l.top)/2,c=i.getClientOffset().y-l.top;a<s&&c<d||a>s&&c>d||(n(a,s),e.index=s)}});return l(d(o)),(0,x.tZ)(Gi,{ref:o,isDragging:a},(0,x.tZ)(Qi,{isDragging:a,alt:"Move icon",className:"dragIcon",viewBox:"4 4 16 16"}),(0,x.tZ)("div",{css:er},r))},nr=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n      display: flex;\n      align-items: center;\n      padding: ${2*t.gridUnit}px;\n      width: 100%;\n      border-radius: ${t.borderRadius}px;\n      cursor: pointer;\n      &.active {\n        color: ${t.colors.grayscale.dark1};\n        border-radius: ${t.borderRadius}px;\n        background-color: ${t.colors.secondary.light4};\n        span, .anticon {\n          color: ${t.colors.grayscale.dark1};\n        }\n      }\n      &:hover {\n        color: ${t.colors.primary.light1};\n        span, .anticon {\n          color: ${t.colors.primary.light1};\n        }\n      }\n      &.errored div, &.errored .warning {\n        color: ${t.colors.error.base};\n      }\n  `}}
`,ir=(0,y.iK)(Y.Z.Trash)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light3}};
`,rr=(0,y.iK)(Y.Z.Warning)`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  &.anticon {
    margin-left: auto;
  }
`,or=y.iK.div`
  height: 100%;
  overflow-y: auto;
`;var ar={name:"7whenc",styles:"display:flex;width:100%"},sr={name:"1abjxqb",styles:"align-items:center;display:flex;word-break:break-all"},lr={name:"1je5tt7",styles:"align-self:flex-end;margin-left:auto"},dr={name:"an0ls6",styles:"align-self:flex-start;margin-left:auto"};const cr=(0,s.forwardRef)(((e,t)=>{let{getFilterTitle:n,onChange:i,onRemove:r,restoreFilter:o,onRearrange:s,currentFilterId:l,removedFilters:d,filters:u,erroredFilters:h=[]}=e;return(0,x.tZ)(or,{ref:t},(()=>{const e=[];return u.forEach(((t,u)=>{e.push((0,x.tZ)(tr,{key:u,onRearrange:s,index:u,filterIds:[t]},(e=>{const t=!!d[e],s=a()(h).call(h,e),u=l===e,p=[];return s&&p.push("errored"),u&&p.push("active"),(0,x.tZ)(nr,{role:"tab",key:`filter-title-tab-${e}`,onClick:()=>i(e),className:p.join(" ")},(0,x.tZ)("div",{css:ar},(0,x.tZ)("div",{css:sr},t?(0,c.t)("(Removed)"):n(e)),!d[e]&&s&&(0,x.tZ)(rr,{className:"warning"}),t&&(0,x.tZ)("span",{css:lr,role:"button",tabIndex:0,onClick:t=>{t.preventDefault(),o(e)}},(0,c.t)("Undo?"))),(0,x.tZ)("div",{css:dr},t?null:(0,x.tZ)(ir,{onClick:t=>{t.stopPropagation(),r(e)},alt:"RemoveFilter"})))})(t)))})),e})())})),ur=cr,hr=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    margin-top: ${2*t.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${t.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}}
`,pr=e=>{let{isActive:t,onClick:n,id:i,label:r,onRemove:o}=e;const a=(0,y.Fg)();return(0,x.tZ)(nr,{className:t?"active":"",onClick:()=>n(i)},r,(0,x.tZ)(Y.Z.Trash,{iconColor:a.colors.grayscale.light3,onClick:e=>{e.stopPropagation(),o(i)},css:x.iv`
          margin-left: auto;
        `}))},mr=e=>{let{activeChartId:t,chartConfigs:n,setCurrentChartId:i,removeCustomScope:o,addNewCustomScope:a}=e;const l=(0,y.Fg)(),d=(0,r.v9)((e=>e.dashboardLayout.present)),u=(0,s.useMemo)((()=>{const e=Object.values(d).filter((e=>e.type===g.dW));return Object.values(n).filter((e=>!(0,Fi._6)(e.crossFilters.scope)&&e.id!==Ki)).map((t=>{const n=e.find((e=>e.meta.chartId===t.id));return{id:t.id,label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[n,d]),h=n[-1];return(0,x.tZ)(s.Fragment,null,(0,x.tZ)(hr,null,(0,x.tZ)(W.Z,{buttonStyle:"link",buttonSize:"xsmall",onClick:a},(0,x.tZ)(Y.Z.PlusSmall,null)," ",(0,c.t)("Add custom scoping"))),(0,x.tZ)(nr,{onClick:()=>i(void 0),className:void 0===t?"active":""},(0,c.t)("All charts/global scoping")),(0,x.tZ)("div",{css:x.iv`
          width: 100%;
          height: 1px;
          background-color: ${l.colors.grayscale.light3};
          margin: ${3*l.gridUnit}px 0;
        `}),u.map((e=>(0,x.tZ)(pr,{key:e.id,id:e.id,onClick:i,onRemove:o,isActive:t===e.id,label:e.label}))),h&&(0,x.tZ)(pr,{id:h.id,onClick:i,onRemove:o,isActive:t===h.id,label:`[${(0,c.t)("new custom scoping")}]`}))},gr=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    height: 100%;
    & > div {
      padding: ${4*t.gridUnit}px;
    }
  `}}
`,fr=e=>{let{chartId:t,currentScope:n,onScopeUpdate:i,onSelectChange:r,chartConfigs:o,setCurrentChartId:a,removeCustomScope:s,addNewCustomScope:l}=e;const d=(0,y.Fg)();return(0,x.tZ)(gr,null,(0,x.tZ)("div",{css:x.iv`
          width: 35%;
          border-right: 1px solid ${d.colors.grayscale.light2};
        `},(0,x.tZ)(mr,{setCurrentChartId:a,activeChartId:t,chartConfigs:o,removeCustomScope:s,addNewCustomScope:l})),(0,x.tZ)(Wi,{chartId:t,currentScope:n,onScopeUpdate:i,onSelectChange:r,chartConfigs:o}))},vr=(e,t)=>({rootPath:t.rootPath,excluded:t.excluded.filter((t=>t!==e))}),br=e=>{let{initialChartId:t,isVisible:n,closeModal:i}=e;const o=(0,r.I0)(),a=(0,r.v9)((e=>e.dashboardLayout.present)),l=Oi(),[d,u]=(0,s.useState)(t),h=(0,r.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration)||{}})),p=(0,s.useMemo)((()=>({scope:zi.eV,chartsInScope:l})),[l]),m=(0,r.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.global_chart_configuration)||p})),[g,f]=(0,s.useState)((0,Ii.Z)(t)&&(0,Fi._6)(null==(v=h[t])?void 0:v.crossFilters.scope)?{...h,[t]:{id:t,crossFilters:{scope:vr(t,m.scope),chartsInScope:null==(b=h[t])?void 0:b.crossFilters.chartsInScope}}}:h);var v,b;const[y,S]=(0,s.useState)(m),C=(0,s.useCallback)((()=>{const e={...g};e[-1]&&delete e[-1],o((0,Wn.Mi)({chartConfiguration:e,globalChartConfiguration:y})),i()}),[g,i,o,y]),Z=(0,s.useCallback)((e=>{let{scope:t}=e;if((0,Ii.Z)(d))f((e=>({...e,[d]:{id:d,crossFilters:{scope:t,chartsInScope:(0,Ei.Q)(t,l,a)}}})));else{const e=(0,Ei.Q)(t,l,a);S({scope:t,chartsInScope:e}),f((t=>((e,t)=>Object.entries(e).reduce(((e,n)=>{let[i,r]=n;return(0,Fi._6)(r.crossFilters.scope)?e[i]={id:Number(r.id),crossFilters:{scope:Fi.$,chartsInScope:t.filter((e=>e!==Number(r.id)))}}:e[i]=r,e}),{}))(t,e)))}}),[d,l,a]),w=(0,s.useCallback)((e=>{f((t=>{const n={...t};return e===Ki?delete n[-1]:n[e]={id:e,crossFilters:{scope:Fi.$,chartsInScope:y.chartsInScope.filter((t=>t!==e))}},n})),d===e&&u(void 0)}),[d,y.chartsInScope]),R=(0,s.useCallback)((()=>{u(Ki),g[-1]||f((e=>({...e,[Ki]:{id:Ki,crossFilters:{scope:y.scope,chartsInScope:y.chartsInScope}}})))}),[g,y.chartsInScope,y.scope]),k=(0,s.useCallback)((e=>{if((0,Ii.Z)(d)){var t;const n=(0,Fi._6)(null==(t=g[d])?void 0:t.crossFilters.scope)?y.scope:g[d].crossFilters.scope,i={rootPath:n.rootPath,excluded:[...n.excluded.filter((e=>e!==d)),e]},r={id:e,crossFilters:{scope:i,chartsInScope:(0,Ei.Q)(i,l,a)}};f((t=>{const n={...t,[e]:r};return d===Ki?delete n[-1]:n[d]={id:d,crossFilters:{scope:Fi.$,chartsInScope:y.chartsInScope.filter((e=>e!==d))}},n})),u(e)}}),[g,l,d,y.chartsInScope,y.scope,a]),T=(0,s.useMemo)((()=>{var e,t,n,i;const r=y.scope;return(0,Ii.Z)(d)?(0,Fi._6)(null==(e=g[d])||null==(t=e.crossFilters)?void 0:t.scope)?vr(d,r):null==(n=g[d])||null==(i=n.crossFilters)?void 0:i.scope:r}),[g,d,y.scope]);return(0,x.tZ)(Rn.Z,{onHide:i,show:n,title:(0,c.t)("Cross-filtering scoping"),onHandledPrimaryAction:C,primaryButtonName:(0,c.t)("Save"),responsive:!0,destroyOnClose:!0,bodyStyle:{padding:0,height:700}},(0,x.tZ)(fr,{chartConfigs:g,currentScope:T,onScopeUpdate:Z,chartId:d,setCurrentChartId:u,onSelectChange:k,removeCustomScope:w,addNewCustomScope:R}))},yr=e=>{const[t,n]=(0,s.useState)(!1),i=(0,s.useCallback)((()=>n(!0)),[]),r=(0,s.useCallback)((()=>n(!1)),[]);return[i,t?(0,x.tZ)(br,{initialChartId:e,closeModal:r,isVisible:t}):null]},xr="download_as_image",Sr="explore_chart",Cr="export_csv",Zr="export_full_csv",wr="export_xlsx",Rr="export_full_xlsx",kr="force_refresh",Tr="fullscreen",$r="toggle_chart_description",Dr="cross_filter_scoping",_r=y.iK.div`
  padding: ${e=>{let{theme:t}=e;return t.gridUnit/4}}px
    ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px;

  .dot {
    display: block;

    height: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    width: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    border-radius: 50%;
    margin: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px 0;

    background-color: ${e=>{let{theme:t}=e;return t.colors.text.label}};
  }

  &:hover {
    cursor: pointer;
  }
`,Ir=y.iK.div`
  height: auto;
  margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,Fr=()=>(0,x.tZ)(_r,null,(0,x.tZ)("span",{className:"dot"}),(0,x.tZ)("span",{className:"dot"}),(0,x.tZ)("span",{className:"dot"})),Er=x.iv`
  &&.anticon > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`,Mr=e=>{let{exploreUrl:t,triggerNode:n,modalTitle:i,modalBody:r}=e;const[o,a]=(0,s.useState)(!1),l=(0,s.useCallback)((()=>a(!0)),[]),d=(0,s.useCallback)((()=>a(!1)),[]),u=(0,gi.k6)(),h=(0,y.Fg)();return(0,x.tZ)(s.Fragment,null,(0,x.tZ)("span",{onClick:l,role:"button",tabIndex:0},n),(0,x.tZ)(Rn.Z,{css:x.iv`
            .ant-modal-body {
              display: flex;
              flex-direction: column;
            }
          `,show:o,onHide:d,title:i,footer:(0,x.tZ)(s.Fragment,null,(0,x.tZ)(W.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:()=>u.push(t)},(0,c.t)("Edit chart")),(0,x.tZ)(W.Z,{buttonStyle:"primary",buttonSize:"small",onClick:d},(0,c.t)("Close"))),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*h.gridUnit,minWidth:128*h.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0},r))},Or=(0,gi.EN)((e=>{var t,n;const[i,o]=yr(e.slice.slice_id),l=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm}))&&(0,yt.c)(u.T.DASHBOARD_CROSS_FILTERS)&&(null==(t=(0,Zi.Z)().get(e.slice.viz_type))||null==(n=t.behaviors)?void 0:a()(n).call(n,wi.cg.INTERACTIVE_CHART)),{componentId:d,dashboardId:h,slice:p,isFullSize:m,cachedDttm:g=[],updatedDttm:f=null,addSuccessToast:v=(()=>{}),addDangerToast:b=(()=>{}),supersetCanShare:y=!1,isCached:S=[]}=e,C="table"===p.viz_type,Z=(g||[]).map((e=>ft().utc(e).fromNow())),w=f?ft().utc(f).fromNow():"",R=[...new Set(S.map((e=>e?(0,c.t)("Cached %s",Z):w?(0,c.t)("Fetched %s",w):""))||"")],k=R.map(((e,t)=>(0,x.tZ)("div",{key:`tooltip-${t}`},R.length>1?(0,c.t)("Query %s: %s",t+1,e):e))),T=m?(0,c.t)("Exit fullscreen"):(0,c.t)("Enter fullscreen"),$=(0,x.tZ)(kt.v,{onClick:t=>{let{key:n,domEvent:r}=t;switch(n){case kr:e.updatedDttm&&e.forceRefresh(e.slice.slice_id,e.dashboardId),e.addSuccessToast((0,c.t)("Data refreshed"));break;case $r:null==e.toggleExpandSlice||e.toggleExpandSlice(e.slice.slice_id);break;case Sr:null==e.logExploreChart||e.logExploreChart(e.slice.slice_id);break;case Cr:null==e.exportCSV||e.exportCSV(e.slice.slice_id);break;case Tr:e.handleToggleFullSize();break;case Zr:null==e.exportFullCSV||e.exportFullCSV(e.slice.slice_id);break;case Rr:null==e.exportFullXLSX||e.exportFullXLSX(e.slice.slice_id);break;case wr:null==e.exportXLSX||e.exportXLSX(e.slice.slice_id);break;case xr:{const t=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");t.style.visibility="hidden",(0,Qt.Z)((o=e.slice.slice_id,`.dashboard-chart-id-${o}`),e.slice.slice_name,!0)(r).then((()=>{t.style.visibility="visible"})),null==e.logEvent||e.logEvent(xt.xE,{chartId:e.slice.slice_id});break}case Dr:i()}var o},selectable:!1},(0,x.tZ)(kt.v.Item,{key:kr,disabled:"loading"===e.chartStatus,style:{height:"auto",lineHeight:"initial"}},(0,c.t)("Force refresh"),(0,x.tZ)(Ir,null,k)),(0,x.tZ)(kt.v.Item,{key:Tr},T),(0,x.tZ)(kt.v.Divider,null),p.description&&(0,x.tZ)(kt.v.Item,{key:$r},e.isDescriptionExpanded?(0,c.t)("Hide chart description"):(0,c.t)("Show chart description")),e.supersetCanExplore&&(0,x.tZ)(kt.v.Item,{key:Sr},(0,x.tZ)(Ci.rU,{to:e.exploreUrl},(0,x.tZ)(re.u,{title:Ti(e.slice.slice_name)},(0,c.t)("Edit chart")))),l&&(0,x.tZ)(s.Fragment,null,(0,x.tZ)(kt.v.Item,{key:Dr},(0,c.t)("Cross-filtering scoping")),(0,x.tZ)(kt.v.Divider,null)),e.supersetCanExplore&&(0,x.tZ)(kt.v.Item,{key:"view_query"},(0,x.tZ)(Ft.Z,{triggerNode:(0,x.tZ)("span",null,(0,c.t)("View query")),modalTitle:(0,c.t)("View query"),modalBody:(0,x.tZ)($i.Z,{latestQueryFormData:e.formData}),draggable:!0,resizable:!0,responsive:!0})),e.supersetCanExplore&&(0,x.tZ)(kt.v.Item,{key:"view_results"},(0,x.tZ)(Mr,{exploreUrl:e.exploreUrl,triggerNode:(0,x.tZ)("span",null,(0,c.t)("View as table")),modalTitle:(0,c.t)("Chart Data: %s",p.slice_name),modalBody:(0,x.tZ)(Di.Tg,{queryFormData:e.formData,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0})})),(0,yt.c)(u.T.DRILL_TO_DETAIL)&&e.supersetCanExplore&&(0,x.tZ)(_i.p,{chartId:p.slice_id,formData:e.formData}),(p.description||e.supersetCanExplore)&&(0,x.tZ)(kt.v.Divider,null),y&&(0,x.tZ)(kt.v.SubMenu,{title:(0,c.t)("Share")},(0,x.tZ)(It,{dashboardId:h,dashboardComponentId:d,copyMenuItemTitle:(0,c.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,c.t)("Share chart by email"),emailSubject:(0,c.t)("Superset chart"),emailBody:(0,c.t)("Check out this chart: "),addSuccessToast:v,addDangerToast:b})),"filter_box"!==e.slice.viz_type&&e.supersetCanCSV&&(0,x.tZ)(kt.v.SubMenu,{title:(0,c.t)("Download")},(0,x.tZ)(kt.v.Item,{key:Cr,icon:(0,x.tZ)(Y.Z.FileOutlined,{css:Er})},(0,c.t)("Export to .CSV")),(0,x.tZ)(kt.v.Item,{key:wr,icon:(0,x.tZ)(Y.Z.FileOutlined,{css:Er})},(0,c.t)("Export to Excel")),"filter_box"!==e.slice.viz_type&&(0,yt.c)(u.T.ALLOW_FULL_CSV_EXPORT)&&e.supersetCanCSV&&C&&(0,x.tZ)(s.Fragment,null,(0,x.tZ)(kt.v.Item,{key:Zr,icon:(0,x.tZ)(Y.Z.FileOutlined,{css:Er})},(0,c.t)("Export to full .CSV")),(0,x.tZ)(kt.v.Item,{key:Rr,icon:(0,x.tZ)(Y.Z.FileOutlined,{css:Er})},(0,c.t)("Export to full Excel"))),(0,x.tZ)(kt.v.Item,{key:xr,icon:(0,x.tZ)(Y.Z.FileImageOutlined,{css:Er})},(0,c.t)("Download as image"))));return(0,x.tZ)(s.Fragment,null,m&&(0,x.tZ)(Y.Z.FullscreenExitOutlined,{style:{fontSize:22},onClick:()=>{e.handleToggleFullSize()}}),(0,x.tZ)(Ri.$i,{overlay:$,trigger:["click"],placement:"bottomRight"},(0,x.tZ)("span",{css:x.iv`
            display: flex;
            align-items: center;
          `,id:`slice_${p.slice_id}-controls`,role:"button","aria-label":"More Options"},(0,x.tZ)(Fr,null))),l&&o)}));var zr=n(87185),Ur=n.n(zr),Pr=n(85716),Nr=n(82607);y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    color: ${t.colors.grayscale.light5};
    background: ${t.colors.grayscale.base};
    border-radius: 1em;
    vertical-align: text-top;
    padding: ${t.gridUnit}px ${2*t.gridUnit}px;
    font-size: ${t.typography.sizes.m}px;
    font-weight: ${t.typography.weights.bold};
    min-width: 1em;
    min-height: 1em;
    line-height: 1em;
    vertical-align: middle;
    white-space: nowrap;

    svg {
      position: relative;
      color: ${t.colors.grayscale.light5};
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
      background: ${t.colors.grayscale.dark1};
    }

    &.has-cross-filters {
      background: ${t.colors.primary.base};
      &:hover {
        background: ${t.colors.primary.dark1};
      }
    }
  `}}
`;const Ar=y.iK.span`
  ${e=>{let{theme:t}=e;return x.iv`
    font-weight: ${t.typography.weights.bold};
  `}}
`,qr=y.iK.span`
  ${e=>{let{theme:t}=e;return x.iv`
    padding-right: ${t.gridUnit}px;
    font-style: italic;
    & > * {
      margin-right: ${t.gridUnit}px;
    }
  `}}
`,Lr=y.iK.button`
  ${e=>{let{theme:t}=e;return x.iv`
    cursor: pointer;
    display: flex;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    width: 100%;

    &::-moz-focus-inner {
      border: 0;
    }

    & i svg {
      opacity: ${t.opacity.mediumLight};
      margin-right: ${t.gridUnit}px;
      transition: opacity ease-in-out ${t.transitionTiming};
    }

    &:hover i svg {
      opacity: 1;
    }
  `}}
`,jr=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    margin-top: ${t.gridUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*t.gridUnit}px;
    }
  `}}
`,Vr=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;

    color: ${t.colors.grayscale.light5};
  `}}
`,Kr=y.iK.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,Br=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    width: 100%;
    height: 1px;
    background-color: ${t.colors.grayscale.light1};
    margin: ${4*t.gridUnit}px 0;
  `}}
`;n(14670);const Hr=(0,c.t)("Please apply filter changes"),Wr=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,c.t)("Unknown value"),Yr=e=>{let{filterSetFilterValues:t,dataMaskSelected:n}=e;return t.find((e=>{let{dataMask:t={}}=e;const i=Object.entries(n);return i.every((e=>{var n;let[r,o]=e;const a=(0,bi.JB)(o.filterState,null==t||null==(n=t[r])?void 0:n.filterState,{ignoreUndefined:!0,ignoreNull:!0}),s=i.length===Object.keys(null!=t?t:{}).length;return a&&s}))}))},Jr=e=>{let{indicator:{column:t,name:n,value:i,path:r=[]},onClick:o}=e;const a=Wr(i);return(0,x.tZ)(Lr,{onClick:o?()=>o([...r,`LABEL-${t}`]):void 0},o&&(0,x.tZ)("i",null,(0,x.tZ)(Y.Z.SearchOutlined,{iconSize:"m",css:x.iv`
              span {
                vertical-align: 0;
              }
            `})),(0,x.tZ)("div",null,(0,x.tZ)(qr,null,n,a?": ":""),(0,x.tZ)(Kr,null,a)))},Xr=e=>{let{appliedCrossFilterIndicators:t=[],appliedIndicators:n=[],onHighlightFilterSource:i,children:o}=e;const[a,l]=(0,s.useState)(!1),d=(0,r.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs}));(0,s.useEffect)((()=>{a&&window.addEventListener("resize",(()=>l(!1)),{once:!0})}),[a]),(0,s.useEffect)((()=>{l(!1)}),[d]);const u=e=>`${e.column} - ${e.name}`,h=(0,x.tZ)(Vr,null,(0,x.tZ)(x.xB,{styles:e=>(0,x.iv)(".filterStatusPopover{.ant-popover-inner{background-color:",e.colors.grayscale.dark2,"cc;.ant-popover-inner-content{padding:",2*e.gridUnit,"px;}}&.ant-popover-placement-bottom,&.ant-popover-placement-bottomLeft,&.ant-popover-placement-bottomRight{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-top,&.ant-popover-placement-topLeft,&.ant-popover-placement-topRight{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-left,&.ant-popover-placement-leftTop,&.ant-popover-placement-leftBottom{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-right,&.ant-popover-placement-rightTop,&.ant-popover-placement-rightBottom{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover{color:",e.colors.grayscale.light4,";z-index:99;}}","")}),(0,x.tZ)("div",null,t.length?(0,x.tZ)("div",null,(0,x.tZ)(Ar,null,(0,c.t)("Applied cross-filters (%d)",t.length)),(0,x.tZ)(jr,null,t.map((e=>(0,x.tZ)(Jr,{key:u(e),indicator:e,onClick:i}))))):null,t.length&&n.length?(0,x.tZ)(Br,null):null,n.length?(0,x.tZ)("div",null,(0,x.tZ)(Ar,null,(0,c.t)("Applied filters (%d)",n.length)),(0,x.tZ)(jr,null,n.map((e=>(0,x.tZ)(Jr,{key:u(e),indicator:e,onClick:i}))))):null));return(0,x.tZ)(ri.Z,{overlayClassName:"filterStatusPopover",content:h,visible:a,onVisibleChange:function(e){l(e)},placement:"bottomRight",trigger:"hover"},o)};var Gr,Qr=n(55786),eo=n(5364),to=n(10581),no=n(10916),io=n(69856);!function(e){e.Unset="UNSET",e.Applied="APPLIED",e.Incompatible="INCOMPATIBLE",e.CrossFilterApplied="CROSS_FILTER_APPLIED"}(Gr||(Gr={}));const ro=new Set(Object.values(io.i2)),oo=e=>{var t;return null==e||!e.label||null!=e&&null!=(t=e.label)&&a()(t).call(t,void 0)?null!=e&&e.value?(0,Qr.Z)(null==e?void 0:e.value).join(", "):null:e.label},ao=(e,t,n)=>{const i=t.columns[e],r=Array.isArray(i)?i:[i];if(null==i||t.isDateFilter&&i===eo.vM||0===r.length)return[];if(t.isDateFilter&&ro.has(e)){const t=((e===io.i2.time_grain_sqla?n.time_grain_sqla:n.granularity)||[]).reduce(((e,t)=>{let[n,i]=t;return{...e,[n]:i}}),{});return r.map((e=>t[e]||e))}return r},so=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.applied_filters)||[]).map((e=>e.column)))},lo=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.rejected_filters)||[]).map((e=>(0,to.Z)(e.column))))},co=(e,t,n)=>{var i,r,o,a,s;const l=null==t?void 0:t.filterState,d=null==t||null==(i=t.extraFormData)?void 0:i.filters,c=oo(l),u=null==l?void 0:l.filters,h=(null==d||null==(r=d[0])?void 0:r.col)||u&&Object.keys(u)[0],p=Object.values(n).find((t=>{var n;return(null==t||null==(n=t.meta)?void 0:n.chartId)===e}));return{column:h,name:(null==p||null==(o=p.meta)?void 0:o.sliceNameOverride)||(null==p||null==(a=p.meta)?void 0:a.sliceName)||"",path:[...null!=(s=null==p?void 0:p.parents)?s:[],(null==p?void 0:p.id)||""],value:c}},uo={},ho={},po=e=>{let{label:t,column:n,type:i=no.gT.NativeFilters,rejectedColumns:r,appliedColumns:o}=e;const a=null!==t,s=i===no.gT.CrossFilters?Gr.CrossFilterApplied:Gr.Applied;return!n&&a?s:n&&null!=r&&r.has(n)?Gr.Incompatible:n&&null!=o&&o.has(n)&&a?s:Gr.Unset},mo={},go={},fo={},vo=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n    margin-right: ${t.gridUnit}px;\n    padding-left: ${2*t.gridUnit}px;\n    padding-right: ${2*t.gridUnit}px;\n    background: ${t.colors.grayscale.light4};\n    border-radius: 4px;\n    height: 100%;\n    .anticon {\n      vertical-align: middle;\n      color: ${t.colors.grayscale.base};\n      &:hover {\n        color: ${t.colors.grayscale.light1}\n      }\n    }\n\n    .incompatible-count {\n      font-size: ${t.typography.sizes.s}px;\n    }\n  `}}
`,bo=(0,y.iK)(Nr.Z)`
  ${e=>{let{theme:t}=e;return`\n    vertical-align: middle;\n    margin-left: ${2*t.gridUnit}px;\n    &>sup {\n      padding: 0 ${t.gridUnit}px;\n      min-width: ${4*t.gridUnit}px;\n      height: ${4*t.gridUnit}px;\n      line-height: 1.5;\n      font-weight: ${t.typography.weights.medium};\n      font-size: ${t.typography.sizes.s-1}px;\n      box-shadow: none;\n    }\n  `}}
`,yo=[],xo=e=>{var t;let{chartId:n}=e;const i=(0,r.I0)(),o=(0,r.v9)((e=>e.datasources)),l=(0,r.v9)((e=>e.dashboardFilters)),d=(0,r.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters})),c=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),h=(0,r.v9)((e=>e.charts[n])),p=(0,r.v9)((e=>e.dashboardLayout.present)),m=(0,r.v9)((e=>e.dataMask)),[g,f]=(0,s.useState)(yo),[v,y]=(0,s.useState)(yo),S=(0,s.useCallback)((e=>{i((0,Yn.E2)(e))}),[i]),C=(0,Pr.D)(h),Z=null==C?void 0:C.chartStatus,w=(0,Pr.D)(l),R=(0,Pr.D)(o),k=(null==h?void 0:h.chartStatus)&&a()(t=["rendered","success"]).call(t,h.chartStatus);(0,s.useEffect)((()=>{if(!k&&v.length>0)y(yo);else if("success"!==Z){var e,t,i,r,s,d,c,u;(null==h||null==(e=h.queriesResponse)||null==(t=e[0])?void 0:t.rejected_filters)===(null==C||null==(i=C.queriesResponse)||null==(r=i[0])?void 0:r.rejected_filters)&&(null==h||null==(s=h.queriesResponse)||null==(d=s[0])?void 0:d.applied_filters)===(null==C||null==(c=C.queriesResponse)||null==(u=c[0])?void 0:u.applied_filters)&&l===w&&o===R||y(((e,t,n,i)=>{const r=so(i),o=lo(i),s=Object.values(t).filter((t=>t.chartId!==e)),l=Object.entries(n).filter((e=>{let[t]=e;return s.find((e=>e.datasourceId===t))})).map((e=>{let[,t]=e;return t})),d=ho[e];if(uo[e]&&(0,bi.JB)(null==d?void 0:d.appliedColumns,r)&&(0,bi.JB)(null==d?void 0:d.rejectedColumns,o)&&(0,bi.JB)(null==d?void 0:d.matchingFilters,s)&&(0,bi.JB)(null==d?void 0:d.matchingDatasources,l))return uo[e];const c=s.reduce(((t,i)=>t.concat(((e,t,n,i,r)=>{const o=(e,t)=>i.has(e)&&t.columns[e]?Gr.Applied:r.has(e)?Gr.Incompatible:Gr.Unset;return Object.keys(t.columns).filter((n=>{var i;return a()(i=(0,nn.up)({filterScope:t.scopes[n]})).call(i,e)})).map((e=>({column:e,name:t.labels[e]||e,value:ao(e,t,n),status:o(e,t),path:t.directPathToFilter})))})(e,i,n[i.datasourceId]||{},r,o))),[]);return c.sort(((e,t)=>e.name.localeCompare(t.name))),uo[e]=c,ho[e]={appliedColumns:r,rejectedColumns:o,matchingFilters:s,matchingDatasources:l},c})(n,l,o,h))}}),[h,n,l,v.length,o,null==C?void 0:C.queriesResponse,Z,w,R,k]);const T=(0,Pr.D)(d),$=(0,Pr.D)(p),D=(0,Pr.D)(m),_=(0,Pr.D)(c);(0,s.useEffect)((()=>{if(!k&&g.length>0)f(yo);else if("success"!==Z){var e,t,i,r,o,s,l,v;(null==h||null==(e=h.queriesResponse)||null==(t=e[0])?void 0:t.rejected_filters)===(null==C||null==(i=C.queriesResponse)||null==(r=i[0])?void 0:r.rejected_filters)&&(null==h||null==(o=h.queriesResponse)||null==(s=o[0])?void 0:s.applied_filters)===(null==C||null==(l=C.queriesResponse)||null==(v=l[0])?void 0:v.applied_filters)&&d===T&&p===$&&m===D&&_===c||f(function(e,t,n,i,r,o){void 0===o&&(o=mo);const s=so(i),l=lo(i),d=fo[n];if(go[n]&&(0,bi.JB)(null==d?void 0:d.appliedColumns,s)&&(0,bi.JB)(null==d?void 0:d.rejectedColumns,l)&&(null==d?void 0:d.nativeFilters)===e&&(null==d?void 0:d.dashboardLayout)===r&&(null==d?void 0:d.chartConfiguration)===o&&(null==d?void 0:d.dataMask)===t)return go[n];let c=[];(0,u.c)(u.T.DASHBOARD_NATIVE_FILTERS)&&(c=e&&Object.values(e).filter((e=>{var t;return e.type===no.BE.NATIVE_FILTER&&(null==(t=e.chartsInScope)?void 0:a()(t).call(t,n))})).map((e=>{var n,i,r,o;const a=null==(n=e.targets)||null==(i=n[0])||null==(r=i.column)?void 0:r.name,d=null==(o=t[e.id])?void 0:o.filterState,c=oo(d);return{column:a,name:e.name,path:[e.id],status:po({label:c,column:a,rejectedColumns:l,appliedColumns:s}),value:c}})));let h=[];(0,u.c)(u.T.DASHBOARD_CROSS_FILTERS)&&(h=function(e,t,n,i,r,o,s){void 0===i&&(i=mo),void 0===s&&(s=!1);let l=[];return(0,u.c)(u.T.DASHBOARD_CROSS_FILTERS)&&(l=Object.values(i).filter((e=>{var n,i;const r=null==(n=e.crossFilters)||null==(i=n.chartsInScope)?void 0:a()(i).call(i,t);return!(s||!r)||!(!s||r)})).map((t=>{const i=co(Number(t.id),e[t.id],n),a=po({label:i.value,column:i.column?(0,to.Z)(i.column):void 0,type:no.gT.CrossFilters,appliedColumns:r,rejectedColumns:o});return{...i,status:a}})).filter((e=>e.status===Gr.CrossFilterApplied))),l}(t,n,r,o,s,l));const p=h.concat(c);return go[n]=p,fo[n]={nativeFilters:e,dashboardLayout:r,chartConfiguration:o,dataMask:t,appliedColumns:s,rejectedColumns:l},p}(d,m,n,h,p,c))}}),[h,n,c,m,d,g.length,p,null==C?void 0:C.queriesResponse,_,Z,$,D,T,k]);const I=(0,s.useMemo)((()=>Ur()((e=>{const t=[Gr.Applied,Gr.Unset,Gr.Incompatible];return e.sort(((e,n)=>t.indexOf(e.status)-t.indexOf(n.status)))})([...v,...g]),((e,t)=>e.column===t.column&&e.name===t.name&&(e.status!==Gr.Applied||t.status!==Gr.Applied)))),[v,g]),F=(0,s.useMemo)((()=>I.filter((e=>e.status===Gr.CrossFilterApplied))),[I]),E=(0,s.useMemo)((()=>I.filter((e=>e.status===Gr.Applied))),[I]);return F.length||E.length?(0,x.tZ)(Xr,{appliedCrossFilterIndicators:F,appliedIndicators:E,onHighlightFilterSource:S},(0,x.tZ)(vo,{className:b()("filter-counts",!!F.length&&"has-cross-filters")},(0,x.tZ)(Y.Z.Filter,{iconSize:"m"}),(0,x.tZ)(bo,{className:"applied-count",count:E.length+F.length,showZero:!0}))):null},So=s.memo(xo);var Co=n(50232);const Zo=(0,c.t)("Annotation layers are still loading."),wo=(0,c.t)("One ore more annotation layers failed loading."),Ro=(0,y.iK)(Y.Z.ApartmentOutlined)`
  ${e=>{let{theme:t}=e;return`\n    cursor: default;\n    color: ${t.colors.primary.base};\n    line-height: 1.8;\n  `}}
`,ko=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    font-size: ${t.typography.sizes.l}px;
    font-weight: ${t.typography.weights.bold};
    margin-bottom: ${t.gridUnit}px;
    display: flex;
    max-width: 100%;
    align-items: flex-start;
    min-height: 0;

    & > .header-title {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      & > span.ant-tooltip-open {
        display: inline;
      }
    }

    & > .header-controls {
      display: flex;
      align-items: center;
      height: 24px;

      & > * {
        margin-left: ${2*t.gridUnit}px;
      }
    }

    .dropdown.btn-group {
      pointer-events: none;
      vertical-align: top;
      & > * {
        pointer-events: auto;
      }
    }

    .dropdown-toggle.btn.btn-default {
      background: none;
      border: none;
      box-shadow: none;
    }

    .dropdown-menu.dropdown-menu-right {
      top: ${5*t.gridUnit}px;
    }

    .divider {
      margin: ${t.gridUnit}px 0;
    }

    .refresh-tooltip {
      display: block;
      height: ${4*t.gridUnit}px;
      margin: ${t.gridUnit}px 0;
      color: ${t.colors.text.label};
    }
  `}}
`,To=e=>{let{innerRef:t=null,forceRefresh:n=(()=>({})),updateSliceName:i=(()=>({})),toggleExpandSlice:o=(()=>({})),logExploreChart:a=(()=>({})),logEvent:l,exportCSV:d=(()=>({})),exportXLSX:u=(()=>({})),editMode:h=!1,annotationQuery:p={},annotationError:m={},cachedDttm:g=null,updatedDttm:f=null,isCached:v=[],isExpanded:b=!1,sliceName:y="",supersetCanExplore:S=!1,supersetCanShare:C=!1,supersetCanCSV:Z=!1,exportFullCSV:w,exportFullXLSX:R,slice:k,componentId:T,dashboardId:$,addSuccessToast:D,addDangerToast:_,handleToggleFullSize:I,isFullSize:F,chartStatus:E,formData:M,width:O,height:z}=e;const U=(0,xi.fG)(),P=(0,s.useContext)(Co.DashboardPageIdContext),[N,A]=(0,s.useState)(null),q=(0,s.useRef)(null),L=(0,r.v9)((e=>{var t,n;return null==(t=e.dataMask[null==k?void 0:k.slice_id])||null==(n=t.filterState)?void 0:n.value})),j=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled})),V=!h&&S;(0,s.useEffect)((()=>{const e=q.current;V?A(Ti(y)):e&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)?A(null!=y?y:null):A(null)}),[y,O,z,V]);const K=`/explore/?dashboard_page_id=${P}&slice_id=${k.slice_id}`;return(0,x.tZ)(ko,{ref:t},(0,x.tZ)("div",{className:"header-title",ref:q},(0,x.tZ)(re.u,{title:N},(0,x.tZ)(Si.Z,{title:y||(h?"---":""),canEdit:h,onSaveTitle:i,showTooltip:!1,url:V?K:void 0})),!!Object.values(p).length&&(0,x.tZ)(re.u,{id:"annotations-loading-tooltip",placement:"top",title:Zo},(0,x.tZ)("i",{role:"img","aria-label":Zo,className:"fa fa-refresh warning"})),!!Object.values(m).length&&(0,x.tZ)(re.u,{id:"annotation-errors-tooltip",placement:"top",title:wo},(0,x.tZ)("i",{role:"img","aria-label":wo,className:"fa fa-exclamation-circle danger"}))),(0,x.tZ)("div",{className:"header-controls"},!h&&(0,x.tZ)(s.Fragment,null,L&&(0,x.tZ)(re.u,{placement:"top",title:(0,c.t)("This chart applies cross-filters to charts whose datasets contain columns with the same name.")},(0,x.tZ)(Ro,{iconSize:"m"})),!U.hideChartControls&&(0,x.tZ)(So,{chartId:k.slice_id}),!U.hideChartControls&&(0,x.tZ)(Or,{slice:k,isCached:v,isExpanded:b,cachedDttm:g,updatedDttm:f,toggleExpandSlice:o,forceRefresh:n,logExploreChart:a,logEvent:l,exportCSV:d,exportFullCSV:w,exportXLSX:u,exportFullXLSX:R,supersetCanExplore:S,supersetCanShare:C,supersetCanCSV:Z,componentId:T,dashboardId:$,addSuccessToast:D,addDangerToast:_,handleToggleFullSize:I,isFullSize:F,isDescriptionExpanded:b,chartStatus:E,formData:M,exploreUrl:K,crossFiltersEnabled:j}))))},$o={height:d().number.isRequired};function Do(e){let{height:t}=e;return(0,x.tZ)("div",{className:"missing-chart-container",style:{height:t+20}},(0,x.tZ)("div",{className:"missing-chart-body"},(0,c.t)("There is no chart definition associated with this component, could it have been deleted?"),(0,x.tZ)("br",null),(0,x.tZ)("br",null),(0,c.t)("Delete this container and save to remove this message.")))}Do.propTypes=$o;var _o=n(20194);const Io={id:d().number.isRequired,componentId:d().string.isRequired,dashboardId:d().number.isRequired,width:d().number.isRequired,height:d().number.isRequired,updateSliceName:d().func.isRequired,isComponentVisible:d().bool,handleToggleFullSize:d().func.isRequired,setControlValue:d().func,chart:G.$6.isRequired,formData:d().object.isRequired,labelColors:d().object,sharedLabelColors:d().object,datasource:d().object,slice:G.Rw.isRequired,sliceName:d().string.isRequired,timeout:d().number.isRequired,maxRows:d().number.isRequired,filters:d().object.isRequired,refreshChart:d().func.isRequired,logEvent:d().func.isRequired,toggleExpandSlice:d().func.isRequired,changeFilter:d().func.isRequired,setFocusedFilterField:d().func.isRequired,unsetFocusedFilterField:d().func.isRequired,editMode:d().bool.isRequired,isExpanded:d().bool.isRequired,isCached:d().bool,supersetCanExplore:d().bool.isRequired,supersetCanShare:d().bool.isRequired,supersetCanCSV:d().bool.isRequired,addSuccessToast:d().func.isRequired,addDangerToast:d().func.isRequired,ownState:d().object,filterState:d().object,postTransformProps:d().func,datasetsStatus:d().oneOf(["loading","error","complete"]),isInView:d().bool,emitCrossFilters:d().bool},Fo=Object.keys(Io).filter((e=>"width"!==e&&"height"!==e&&"isComponentVisible"!==e)),Eo=new Set(["filter_box"]),Mo=y.iK.div`
  overflow: hidden;
  position: relative;

  &.dashboard-chart--overflowable {
    overflow: visible;
  }
`,Oo=y.iK.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,zo=y.iK.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;class Uo extends s.Component{constructor(e){super(e),this.logExploreChart=()=>{this.props.logEvent(xt.oK,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached})},this.onExploreChart=async e=>{const t=e.shiftKey||e.ctrlKey||e.metaKey;try{const e=window.localStorage.getItem("last_tab_id"),n=e?String(Number.parseInt(e,10)+1):void 0,i=await(0,yi.nv)(this.props.datasource.id,this.props.datasource.type,this.props.formData,this.props.slice.slice_id,n),r=(0,fi.y8)(null,{[Tt.KD.formDataKey.name]:i,[Tt.KD.sliceId.name]:this.props.slice.slice_id});t?window.open(r,"_blank","noreferrer"):this.props.history.push(r)}catch(e){Dt.Z.error(e),this.props.addDangerToast((0,c.t)("An error occurred while opening Explore"))}},this.state={width:e.width,height:e.height,descriptionHeight:0},this.changeFilter=this.changeFilter.bind(this),this.handleFilterMenuOpen=this.handleFilterMenuOpen.bind(this),this.handleFilterMenuClose=this.handleFilterMenuClose.bind(this),this.exportCSV=this.exportCSV.bind(this),this.exportFullCSV=this.exportFullCSV.bind(this),this.exportXLSX=this.exportXLSX.bind(this),this.exportFullXLSX=this.exportFullXLSX.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.resize=this.resize.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.setHeaderRef=this.setHeaderRef.bind(this),this.getChartHeight=this.getChartHeight.bind(this),this.getDescriptionHeight=this.getDescriptionHeight.bind(this)}shouldComponentUpdate(e,t){var n,i,r,o,a,s,l,d,c;if(t.width!==this.state.width||t.height!==this.state.height||t.descriptionHeight!==this.state.descriptionHeight||!mi()(e.datasource,this.props.datasource))return!0;if((null==(n=this.props)||null==(i=n.chart)?void 0:i.chartStatus)!==(null==e||null==(r=e.chart)?void 0:r.chartStatus)&&"loading"===(null==(o=this.props)||null==(a=o.chart)?void 0:a.chartStatus))return!0;if(e.isComponentVisible){if(e.chart.triggerQuery)return!0;if(e.isFullSize!==this.props.isFullSize)return clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.resize,350),!1;e.width===this.props.width&&e.height===this.props.height&&e.width===this.state.width&&e.height===this.state.height||(clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.resize,350));for(let t=0;t<Fo.length;t+=1){const n=Fo[t];if(!(0,bi.JB)(e[n],this.props[n]))return!0}}else if((null==(s=e.formData)?void 0:s.color_scheme)!==(null==(l=this.props.formData)?void 0:l.color_scheme)||!(0,bi.JB)(null==(d=e.formData)?void 0:d.label_colors,null==(c=this.props.formData)?void 0:c.label_colors))return!0;return this.props.cacheBusterProp!==e.cacheBusterProp}componentDidMount(){if(this.props.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}componentWillUnmount(){clearTimeout(this.resizeTimeout)}componentDidUpdate(e){if(this.props.isExpanded!==e.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}getDescriptionHeight(){return this.props.isExpanded&&this.descriptionRef?this.descriptionRef.offsetHeight:0}getChartHeight(){const e=this.getHeaderHeight();return Math.max(this.state.height-e-this.state.descriptionHeight,20)}getHeaderHeight(){if(this.headerRef){const e=getComputedStyle(this.headerRef).getPropertyValue("margin-bottom"),t=parseInt(e,10)||0;return this.headerRef.offsetHeight+t}return 22}setDescriptionRef(e){this.descriptionRef=e}setHeaderRef(e){this.headerRef=e}resize(){const{width:e,height:t}=this.props;this.setState((()=>({width:e,height:t})))}changeFilter(e){void 0===e&&(e={}),this.props.logEvent(xt.Qg,{id:this.props.chart.id,columns:Object.keys(e)}),this.props.changeFilter(this.props.chart.id,e)}handleFilterMenuOpen(e,t){this.props.setFocusedFilterField(e,t)}handleFilterMenuClose(e,t){this.props.unsetFocusedFilterField(e,t)}exportFullCSV(){this.exportCSV(!0)}exportCSV(e){void 0===e&&(e=!1),this.exportTable("csv",e)}exportXLSX(){this.exportTable("xlsx",!1)}exportFullXLSX(){this.exportTable("xlsx",!0)}exportTable(e,t){const n="csv"===e?xt.PC:xt.br;this.props.logEvent(n,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),(0,fi.pe)({formData:t?{...this.props.formData,row_limit:this.props.maxRows}:this.props.formData,resultType:"full",resultFormat:e,force:!0,ownState:this.props.ownState})}forceRefresh(){return this.props.logEvent(xt.TD,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),this.props.refreshChart(this.props.chart.id,!0,this.props.dashboardId)}render(){const{id:e,componentId:t,dashboardId:n,chart:i,slice:r,datasource:o,isExpanded:a,editMode:s,filters:l,formData:d,labelColors:c,sharedLabelColors:u,updateSliceName:h,sliceName:p,toggleExpandSlice:m,timeout:g,supersetCanExplore:f,supersetCanShare:v,supersetCanCSV:y,addSuccessToast:S,addDangerToast:C,ownState:Z,filterState:w,handleToggleFullSize:R,isFullSize:k,setControlValue:T,postTransformProps:$,datasetsStatus:D,isInView:_,emitCrossFilters:I,logEvent:F}=this.props,{width:E}=this.state;if(!i||!r)return(0,x.tZ)(Do,{height:this.getChartHeight()});const{queriesResponse:M,chartUpdateEndTime:O,chartStatus:z}=i,U="loading"===z,P=(null==M?void 0:M.map((e=>{let{is_cached:t}=e;return t})))||[],N=(null==M?void 0:M.map((e=>{let{cached_dttm:t}=e;return t})))||[],A=Eo.has(r.viz_type),q=(0,nn.Z3)(e)?function(e){let{activeFilters:t={},filterId:n}=e;return Object.entries(t).reduce(((e,t)=>{const[i,{values:r}]=t,{chartId:o,column:a}=(0,_o._)(i);return o===n?{...e,[a]:r}:e}),{})}({activeFilters:l,filterId:e}):{};return(0,x.tZ)(zo,{className:"chart-slice","data-test-chart-id":e,"data-test-viz-type":r.viz_type,"data-test-chart-name":r.slice_name},(0,x.tZ)(To,{innerRef:this.setHeaderRef,slice:r,isExpanded:a,isCached:P,cachedDttm:N,updatedDttm:O,toggleExpandSlice:m,forceRefresh:this.forceRefresh,editMode:s,annotationQuery:i.annotationQuery,logExploreChart:this.logExploreChart,logEvent:F,onExploreChart:this.onExploreChart,exportCSV:this.exportCSV,exportXLSX:this.exportXLSX,exportFullCSV:this.exportFullCSV,exportFullXLSX:this.exportFullXLSX,updateSliceName:h,sliceName:p,supersetCanExplore:f,supersetCanShare:v,supersetCanCSV:y,componentId:t,dashboardId:n,filters:l,addSuccessToast:S,addDangerToast:C,handleToggleFullSize:R,isFullSize:k,chartStatus:i.chartStatus,formData:d,width:E,height:this.getHeaderHeight()}),a&&r.description_markeddown&&(0,x.tZ)("div",{className:"slice_description bs-callout bs-callout-default",ref:this.setDescriptionRef,dangerouslySetInnerHTML:{__html:r.description_markeddown}}),(0,x.tZ)(Mo,{className:b()("dashboard-chart",A&&"dashboard-chart--overflowable")},U&&(0,x.tZ)(Oo,{style:{width:E,height:this.getChartHeight()}}),(0,x.tZ)(vi.Z,{width:E,height:this.getChartHeight(),addFilter:this.changeFilter,onFilterMenuOpen:this.handleFilterMenuOpen,onFilterMenuClose:this.handleFilterMenuClose,annotationData:i.annotationData,chartAlert:i.chartAlert,chartId:e,chartStatus:z,datasource:o,dashboardId:n,initialValues:q,formData:d,labelColors:c,sharedLabelColors:u,ownState:Z,filterState:w,queriesResponse:i.queriesResponse,timeout:g,triggerQuery:i.triggerQuery,vizType:r.viz_type,setControlValue:T,postTransformProps:$,datasetsStatus:D,isInView:_,emitCrossFilters:I})))}}Uo.propTypes=Io,Uo.defaultProps={isCached:!1,isComponentVisible:!0};const Po=(0,gi.EN)(Uo),No={},Ao=(0,r.$j)((function(e,t){var n,i,r,o,a;let{charts:s,dashboardInfo:l,dashboardState:d,dataMask:c,datasources:u,sliceEntities:h,nativeFilters:p,common:m}=e;const{id:g,extraControls:f,setControlValue:v}=t,b=s[g]||No,y=b&&b.form_data&&u[b.form_data.datasource]||zi.tw,{colorScheme:x,colorNamespace:S,datasetsStatus:C}=d,Z=(null==l||null==(n=l.metadata)?void 0:n.label_colors)||{},w=(null==l||null==(i=l.metadata)?void 0:i.shared_label_colors)||{},R=(0,hi.Z)({chart:b,chartConfiguration:null==(r=l.metadata)?void 0:r.chart_configuration,charts:s,filters:(0,nn._f)(g),colorScheme:x,colorNamespace:S,sliceId:g,nativeFilters:null==p?void 0:p.filters,allSliceIds:d.sliceIds,dataMask:c,extraControls:f,labelColors:Z,sharedLabelColors:w});return R.dashboardId=l.id,{chart:b,datasource:y,labelColors:Z,sharedLabelColors:w,slice:h.slices[g],timeout:l.common.conf.SUPERSET_WEBSERVER_TIMEOUT,filters:(0,nn.De)()||No,formData:R,editMode:d.editMode,isExpanded:!!d.expandedSlices[g],supersetCanExplore:!!l.superset_can_explore,supersetCanShare:!!l.superset_can_share,supersetCanCSV:!!l.superset_can_csv,ownState:null==(o=c[g])?void 0:o.ownState,filterState:null==(a=c[g])?void 0:a.filterState,maxRows:m.conf.SQL_MAX_ROW,setControlValue:v,datasetsStatus:C,emitCrossFilters:!!l.crossFiltersEnabled}}),(function(e){return(0,i.DE)({updateComponents:Jn.WZ,addSuccessToast:Xn.ws,addDangerToast:Xn.Gb,toggleExpandSlice:Yn.WL,changeFilter:ci.M6,setFocusedFilterField:Yn.GH,unsetFocusedFilterField:Yn.oY,refreshChart:ui.refreshChart,logEvent:Gn.logEvent},e)}))(Po),qo=e=>{let{onDelete:t}=e;return(0,x.tZ)(ii,{onClick:t,icon:(0,x.tZ)(Y.Z.Trash,{iconSize:"xl"})})},Lo=y.iK.div`
  .hover-menu {
    opacity: 0;
    position: absolute;
    z-index: 10;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}};
  }

  .hover-menu--left {
    width: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
    top: 50%;
    transform: translate(0, -50%);
    left: ${e=>{let{theme:t}=e;return-7*t.gridUnit}}px;
    padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hover-menu--left > :nth-child(n):not(:only-child):not(:last-child) {
    margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }

  .hover-menu--top {
    height: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
    top: ${e=>{let{theme:t}=e;return-6*t.gridUnit}}px;
    left: 50%;
    transform: translate(-50%);
    padding: 0 ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;class jo extends s.PureComponent{render(){const{innerRef:e,position:t,children:n}=this.props;return(0,x.tZ)(Lo,{className:"hover-menu-container"},(0,x.tZ)("div",{ref:e,className:b()("hover-menu","left"===t&&"hover-menu--left","top"===t&&"hover-menu--top")},n))}}jo.defaultProps={position:"left",innerRef:null,children:null};var Vo=n(29119);const Ko={right:function(){return(0,x.tZ)("div",{className:"resize-handle resize-handle--right"})},bottom:function(){return(0,x.tZ)("div",{className:"resize-handle resize-handle--bottom"})},bottomRight:function(){return(0,x.tZ)("div",{className:"resize-handle resize-handle--bottom-right"})}},Bo={top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},Ho={widthAndHeight:Bo,widthOnly:{...Bo,bottomRight:!1,bottom:!1},heightOnly:{...Bo,bottomRight:!1,right:!1},notAdjustable:{...Bo,bottomRight:!1,bottom:!1,right:!1}},Wo=Number.MAX_VALUE,Yo={id:d().string.isRequired,children:d().node,adjustableWidth:d().bool,adjustableHeight:d().bool,gutterWidth:d().number,widthStep:d().number,heightStep:d().number,widthMultiple:d().number,heightMultiple:d().number,minWidthMultiple:d().number,maxWidthMultiple:d().number,minHeightMultiple:d().number,maxHeightMultiple:d().number,staticHeight:d().number,staticHeightMultiple:d().number,staticWidth:d().number,staticWidthMultiple:d().number,onResizeStop:d().func,onResize:d().func,onResizeStart:d().func,editMode:d().bool.isRequired},Jo={children:null,adjustableWidth:!0,adjustableHeight:!0,gutterWidth:X.es,widthStep:X.cd,heightStep:X.cd,widthMultiple:null,heightMultiple:null,minWidthMultiple:1,maxWidthMultiple:Wo,minHeightMultiple:1,maxHeightMultiple:Wo,staticHeight:null,staticHeightMultiple:null,staticWidth:null,staticWidthMultiple:null,onResizeStop:null,onResize:null,onResizeStart:null},Xo=[X.cd,X.cd],Go={right:"resizable-container-handle--right",bottom:"resizable-container-handle--bottom"},Qo=(0,y.iK)(Vo.e)`
  ${e=>{let{theme:t}=e;return x.iv`
    &.resizable-container {
      background-color: transparent;
      position: relative;

      /* re-resizable sets an empty div to 100% width and height, which doesn't
      play well with many 100% height containers we need */

      & ~ div {
        width: auto !important;
        height: auto !important;
      }
    }

    &.resizable-container--resizing {
      /* after ensures border visibility on top of any children */

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 2px ${t.colors.primary.base};
      }

      & > span .resize-handle {
        border-color: ${t.colors.primary.base};
      }
    }

    .resize-handle {
      opacity: 0;
      z-index: 10;

      &--bottom-right {
        position: absolute;
        border-right: 1px solid ${t.colors.text.label};
        border-bottom: 1px solid ${t.colors.text.label};
        right: ${4*t.gridUnit}px;
        bottom: ${4*t.gridUnit}px;
        width: ${2*t.gridUnit}px;
        height: ${2*t.gridUnit}px;
      }

      &--right {
        width: ${t.gridUnit/2}px;
        height: ${5*t.gridUnit}px;
        right: ${t.gridUnit}px;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
        border-left: 1px solid ${t.colors.text.label};
        border-right: 1px solid ${t.colors.text.label};
      }

      &--bottom {
        height: ${t.gridUnit/2}px;
        width: ${5*t.gridUnit}px;
        bottom: ${t.gridUnit}px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        border-top: 1px solid ${t.colors.text.label};
        border-bottom: 1px solid ${t.colors.text.label};
      }
    }
  `}}

  &.resizable-container:hover .resize-handle,
  &.resizable-container--resizing .resize-handle {
    opacity: 1;
  }

  .dragdroppable-column & .resizable-container-handle--right {
    /* override the default because the inner column's handle's mouse target is very small */
    right: 0 !important;
  }

  & .resizable-container-handle--bottom {
    bottom: 0 !important;
  }
`;class ea extends s.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResize=this.handleResize.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this)}handleResizeStart(e,t,n){const{id:i,onResizeStart:r}=this.props;r&&r({id:i,direction:t,ref:n}),this.setState((()=>({isResizing:!0})))}handleResize(e,t,n){const{onResize:i,id:r}=this.props;i&&i({id:r,direction:t,ref:n})}handleResizeStop(e,t,n,i){const{id:r,onResizeStop:o,widthStep:a,heightStep:s,widthMultiple:l,heightMultiple:d,adjustableHeight:c,adjustableWidth:u,gutterWidth:h}=this.props;if(o){const e=l+Math.round(i.width/(a+h)),t=d+Math.round(i.height/s);o({id:r,widthMultiple:u?e:null,heightMultiple:c?t:null}),this.setState((()=>({isResizing:!1})))}}render(){const{children:e,adjustableWidth:t,adjustableHeight:n,widthStep:i,heightStep:r,widthMultiple:o,heightMultiple:a,staticHeight:s,staticHeightMultiple:l,staticWidth:d,staticWidthMultiple:c,minWidthMultiple:u,maxWidthMultiple:h,minHeightMultiple:p,maxHeightMultiple:m,gutterWidth:g,editMode:f}=this.props,v={width:t?(i+g)*o-g:c&&c*i||d||void 0,height:n?r*a:l&&l*r||s||void 0};let y=Ho.notAdjustable;f&&t&&n?y=Ho.widthAndHeight:f&&t?y=Ho.widthOnly:f&&n&&(y=Ho.heightOnly);const{isResizing:S}=this.state;return(0,x.tZ)(Qo,{enable:y,grid:Xo,minWidth:t?u*(i+g)-g:void 0,minHeight:n?p*r:void 0,maxWidth:t?Math.max(v.width,Math.min(Wo,h*(i+g)-g)):void 0,maxHeight:n?Math.max(v.height,Math.min(Wo,m*r)):void 0,size:v,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,handleComponent:Ko,className:b()("resizable-container",S&&"resizable-container--resizing"),handleClasses:Go},e)}}ea.propTypes=Yo,ea.defaultProps=Jo;const ta=ea;function na(e){const t={};if(e.length>0){const n=e.slice();for(;n.length;){const e=n.pop(),i=e.split("-")[0];if(t[i.toLowerCase()]=e,!a()(X.Ep).call(X.Ep,i))break}}return t}const ia=x.iv`
  && {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
  }
`;var ra=n(78186);const oa=(0,y.iK)(kt.v.Item)`
  &.ant-menu-item {
    height: auto;
    line-height: 1.4;

    padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    padding-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:hover {
      background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light3}};
    }

    &.active {
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
      background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    }
  }

  &.ant-menu-item-selected {
    color: unset;
  }
`;var aa={name:"s5xdrg",styles:"display:flex;align-items:center"};const sa=e=>{const{value:t,options:n,onChange:i,renderButton:r=(e=>e.label),renderOption:o=(e=>(0,x.tZ)("div",{className:e.className},e.label))}=e,a=(0,y.Fg)(),s=n.find((e=>e.value===t));return(0,x.tZ)(H.Gj,{trigger:["click"],overlayStyle:{zIndex:a.zIndex.max},overlay:(0,x.tZ)(kt.v,{onClick:e=>{let{key:t}=e;return i(t)}},n.map((e=>(0,x.tZ)(oa,{id:"menu-item",key:e.value,className:b()("dropdown-item",{active:e.value===t})},o(e)))))},(0,x.tZ)("div",{role:"button",css:aa},s&&r(s),(0,x.tZ)(Y.Z.CaretDown,{iconColor:a.colors.grayscale.base,css:(0,x.iv)({marginTop:.5*a.gridUnit},"","")})))},la=[{value:"edit",label:(0,c.t)("Edit")},{value:"preview",label:(0,c.t)("Preview")}];class da extends s.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,x.tZ)(sa,{id:e,options:la,value:t,onChange:n})}}const ca=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    position: relative;
    outline: none;

    &.with-popover-menu--focused:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${t.colors.primary.base};
      pointer-events: none;
    }

    .dashboard-component-tabs li &.with-popover-menu--focused:after {
      top: ${-3*t.gridUnit}px;
      left: ${-2*t.gridUnit}px;
      width: calc(100% + ${4*t.gridUnit}px);
      height: calc(100% + ${7*t.gridUnit}px);
    }
  `}}
`,ua=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    position: absolute;
    flex-wrap: nowrap;
    left: 1px;
    top: -42px;
    height: ${10*t.gridUnit}px;
    padding: 0 ${4*t.gridUnit}px;
    background: ${t.colors.grayscale.light5};
    box-shadow: 0 1px 2px 1px
      ${(0,S.Zf)(t.colors.grayscale.dark2,parseFloat(t.opacity.mediumLight)/100)};
    font-size: ${t.typography.sizes.m}px;
    cursor: default;
    z-index: 3000;

    &,
    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* vertical spacer after each menu item */
    .menu-item:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      background: ${t.colors.grayscale.light2};
      margin: 0 ${4*t.gridUnit}px;
    }
  `}}
`;class ha extends s.PureComponent{constructor(e){super(e),this.container=void 0,this.state={isFocused:e.isFocused},this.setRef=this.setRef.bind(this),this.handleClick=this.handleClick.bind(this)}UNSAFE_componentWillReceiveProps(e){e.editMode&&e.isFocused&&!this.state.isFocused?(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState({isFocused:!0})):this.state.isFocused&&!e.editMode&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState({isFocused:!1}))}componentWillUnmount(){document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick)}setRef(e){this.container=e}handleClick(e){if(!this.props.editMode)return;const{onChangeFocus:t,shouldFocus:n,disableClick:i}=this.props,r=n(e,this.container);i||!r||this.state.isFocused?!r&&this.state.isFocused&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!1}))),t&&t(!1)):(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!0}))),t&&t(!0))}render(){var e;const{children:t,menuItems:n,editMode:i,style:r}=this.props,{isFocused:o}=this.state;return(0,x.tZ)(ca,{ref:this.setRef,onClick:this.handleClick,role:"none",className:b()("with-popover-menu",i&&o&&"with-popover-menu--focused"),style:r},t,i&&o&&(null!=(e=null==n?void 0:n.length)?e:0)>0&&(0,x.tZ)(ua,null,n.map(((e,t)=>(0,x.tZ)("div",{className:"menu-item",key:`menu-item-${t}`},e)))))}}ha.defaultProps={children:null,disableClick:!1,onChangeFocus:null,menuItems:[],isFocused:!1,shouldFocus:(e,t)=>{var n;return(null==t?void 0:t.contains(e.target))||"menu-item"===e.target.id||"menu-item"===(null==(n=e.target.parentNode)?void 0:n.id)},style:null};const pa={id:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,depth:d().number.isRequired,editMode:d().bool.isRequired,logEvent:d().func.isRequired,addDangerToast:d().func.isRequired,undoLength:d().number.isRequired,redoLength:d().number.isRequired,availableColumnCount:d().number.isRequired,columnWidth:d().number.isRequired,onResizeStart:d().func.isRequired,onResize:d().func.isRequired,onResizeStop:d().func.isRequired,deleteComponent:d().func.isRequired,handleComponentDrop:d().func.isRequired,updateComponents:d().func.isRequired,htmlSanitization:d().bool,htmlSchemaOverrides:d().object},ma="# ✨Header 1\n## ✨Header 2\n### ✨Header 3\n\n<br />\n\nClick here to learn more about [markdown formatting](https://bit.ly/1dQOfRK)",ga=(0,c.t)("This markdown component has an error."),fa=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    &.dashboard-markdown {
      overflow: hidden;

      h4,
      h5,
      h6 {
        font-weight: ${t.typography.weights.normal};
      }

      h5 {
        color: ${t.colors.grayscale.base};
      }

      h6 {
        font-size: ${t.typography.sizes.s}px;
      }

      .dashboard-component-chart-holder {
        overflow-y: auto;
        overflow-x: hidden;
      }

      .dashboard--editing & {
        cursor: move;
      }
    }
  `}}
`;class va extends s.PureComponent{constructor(e){super(e),this.state={isFocused:!1,markdownSource:e.component.meta.code,editor:null,editorMode:"preview",undoLength:e.undoLength,redoLength:e.redoLength},this.renderStartTime=xt.Yd.getTimestamp(),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleChangeEditorMode=this.handleChangeEditorMode.bind(this),this.handleMarkdownChange=this.handleMarkdownChange.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleResizeStart=this.handleResizeStart.bind(this),this.setEditor=this.setEditor.bind(this)}componentDidMount(){this.props.logEvent(xt.aD,{viz_type:"markdown",start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:xt.Yd.getTimestamp()-this.renderStartTime})}static getDerivedStateFromProps(e,t){const{hasError:n,editorMode:i,markdownSource:r,undoLength:o,redoLength:a}=t,{component:s,undoLength:l,redoLength:d}=e;return l!==o||d!==a?{...t,undoLength:l,redoLength:d,markdownSource:s.meta.code,hasError:!1}:n||"preview"!==i||s.meta.code===r?t:{...t,markdownSource:s.meta.code}}static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){!this.state.editor||e.component.meta.width===this.props.component.meta.width&&e.columnWidth===this.props.columnWidth||this.state.editor.resize(!0),this.props.editMode&&Et.cE.preload()}componentDidCatch(){this.state.editor&&"preview"===this.state.editorMode&&this.props.addDangerToast((0,c.t)("This markdown component has an error. Please revert your recent changes."))}setEditor(e){e.getSession().setUseWrapMode(!0),this.setState({editor:e})}handleChangeFocus(e){const t=!!e,n=t?"edit":"preview";this.setState((()=>({isFocused:t}))),this.handleChangeEditorMode(n)}handleChangeEditorMode(e){const t={...this.state,editorMode:e};"preview"===e&&(this.updateMarkdownContent(),t.hasError=!1),this.setState(t)}updateMarkdownContent(){const{updateComponents:e,component:t}=this.props;t.meta.code!==this.state.markdownSource&&e({[t.id]:{...t,meta:{...t.meta,code:this.state.markdownSource}}})}handleMarkdownChange(e){this.setState({markdownSource:e})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleResizeStart(e){const{editorMode:t}=this.state,{editMode:n,onResizeStart:i}=this.props,r="edit"===t;i(e),n&&r&&this.updateMarkdownContent()}renderEditMode(){return(0,x.tZ)(Et.cE,{onChange:this.handleMarkdownChange,width:"100%",height:"100%",showGutter:!1,editorProps:{$blockScrolling:!0},value:"string"==typeof this.state.markdownSource?this.state.markdownSource:ma,readOnly:!1,onLoad:this.setEditor})}renderPreviewMode(){const{hasError:e}=this.state;return(0,x.tZ)(ra.Z,{source:e?ga:this.state.markdownSource||ma,htmlSanitization:this.props.htmlSanitization,htmlSchemaOverrides:this.props.htmlSchemaOverrides})}render(){const{isFocused:e,editorMode:t}=this.state,{component:n,parentComponent:i,index:r,depth:o,availableColumnCount:a,columnWidth:s,onResize:l,onResizeStop:d,handleComponentDrop:c,editMode:u}=this.props,h=i.type===g.BA?i.meta.width||X.cx:n.meta.width||X.cx,p="edit"===t;return(0,x.tZ)(Ae,{component:n,parentComponent:i,orientation:i.type===g.Os?"column":"row",index:r,depth:o,onDrop:c,disableDragDrop:e,editMode:u},(t=>{let{dropIndicatorProps:r,dragSourceRef:o}=t;return(0,x.tZ)(ha,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,x.tZ)(da,{id:`${n.id}-mode`,value:this.state.editorMode,onChange:this.handleChangeEditorMode})],editMode:u},(0,x.tZ)(fa,{className:b()("dashboard-markdown",p&&"dashboard-markdown--editing"),id:n.id},(0,x.tZ)(ta,{id:n.id,adjustableWidth:i.type===g.Os,adjustableHeight:!0,widthStep:s,widthMultiple:h,heightStep:X.cd,heightMultiple:n.meta.height,minWidthMultiple:X.cx,minHeightMultiple:X.AA,maxWidthMultiple:a+h,onResizeStart:this.handleResizeStart,onResize:l,onResizeStop:d,editMode:!e&&u},(0,x.tZ)("div",{ref:o,className:"dashboard-component dashboard-component-chart-holder"},u&&(0,x.tZ)(jo,{position:"top"},(0,x.tZ)(qo,{onDelete:this.handleDeleteComponent})),u&&p?this.renderEditMode():this.renderPreviewMode()))),r&&(0,x.tZ)("div",r))}))}}va.propTypes=pa,va.defaultProps={};const ba=(0,r.$j)((function(e){return{undoLength:e.dashboardLayout.past.length,redoLength:e.dashboardLayout.future.length,htmlSanitization:e.common.conf.HTML_SANITIZATION,htmlSchemaOverrides:e.common.conf.HTML_SANITIZATION_SCHEMA_EXTENSIONS}}))(va),ya=y.iK.div`
  ${e=>{let{theme:t,position:n}=e;return x.iv`
    height: ${5*t.gridUnit}px;
    overflow: hidden;
    cursor: move;
    ${"top"===n&&x.iv`
      transform: rotate(90deg);
    `}
    & path {
      fill: ${t.colors.grayscale.base};
    }
  `}}
`;function xa(e){let{position:t="left",innerRef:n=null}=e;return(0,x.tZ)(ya,{ref:n,position:t},(0,x.tZ)(Y.Z.Drag,null))}var Sa=n(713);const Ca=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: inline-block;

    &:before {
      content: '';
      width: 1em;
      height: 1em;
      margin-right: ${2*t.gridUnit}px;
      display: inline-block;
      vertical-align: middle;
    }

    &.background--white {
      padding-left: 0;
      background: transparent;

      &:before {
        background: ${t.colors.grayscale.light5};
        border: 1px solid ${t.colors.grayscale.light2};
      }
    }

    /* Create the transparent rect icon */
    &.background--transparent:before {
      background-image: linear-gradient(
          45deg,
          ${t.colors.text.label} 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, ${t.colors.text.label} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${t.colors.text.label} 75%),
        linear-gradient(-45deg, transparent 75%, ${t.colors.text.label} 75%);
      background-size: ${2*t.gridUnit}px ${2*t.gridUnit}px;
      background-position: 0 0, 0 ${t.gridUnit}px,
        ${t.gridUnit}px ${-t.gridUnit}px, ${-t.gridUnit}px 0px;
    }
  `}}
`;function Za(e){const t=(0,c.t)("background");return(0,x.tZ)(Ca,{className:b()("background-style-option",e.className)},`${e.label} ${t}`)}function wa(e){return(0,x.tZ)(Ca,{className:b()("background-style-option",e.className)},e.label)}class Ra extends s.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,x.tZ)(sa,{id:e,options:Sa.Z,value:t,onChange:n,renderButton:Za,renderOption:wa})}}const ka={id:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,depth:d().number.isRequired,editMode:d().bool.isRequired,availableColumnCount:d().number.isRequired,columnWidth:d().number.isRequired,minColumnWidth:d().number.isRequired,onResizeStart:d().func.isRequired,onResize:d().func.isRequired,onResizeStop:d().func.isRequired,deleteComponent:d().func.isRequired,handleComponentDrop:d().func.isRequired,updateComponents:d().func.isRequired},Ta=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    &.grid-column {
      width: 100%;
      position: relative;

      & > :not(.hover-menu):not(:last-child) {
        margin-bottom: ${4*t.gridUnit}px;
      }
    }

    .dashboard--editing &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
      border: 1px dashed ${t.colors.grayscale.light2};
    }
    .dashboard--editing .resizable-container--resizing:hover > &:after,
    .dashboard--editing .hover-menu:hover + &:after {
      border: 1px dashed ${t.colors.primary.base};
      z-index: 2;
    }
  `}}
`,$a=e=>x.iv`
  min-height: ${25*e.gridUnit}px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class Da extends s.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:r,minColumnWidth:o,depth:a,onResizeStart:s,onResize:l,onResizeStop:d,handleComponentDrop:u,editMode:h,onChangeTab:p,isComponentVisible:m}=this.props,g=e.children||[],f=Sa.Z.find((t=>t.value===(e.meta.background||X.HE)));return(0,x.tZ)(Ae,{component:e,parentComponent:t,orientation:"column",index:n,depth:a,onDrop:u,editMode:h},(t=>{let{dropIndicatorProps:n,dragSourceRef:u}=t;return(0,x.tZ)(ta,{id:e.id,adjustableWidth:!0,adjustableHeight:!1,widthStep:r,widthMultiple:e.meta.width,minWidthMultiple:o,maxWidthMultiple:i+(e.meta.width||0),onResizeStart:s,onResize:l,onResizeStop:d,editMode:h},(0,x.tZ)(ha,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,x.tZ)(Ra,{id:`${e.id}-background`,value:e.meta.background,onChange:this.handleChangeBackground})],editMode:h},h&&(0,x.tZ)(jo,{innerRef:u,position:"top"},(0,x.tZ)(xa,{position:"top"}),(0,x.tZ)(qo,{onDelete:this.handleDeleteComponent}),(0,x.tZ)(ii,{onClick:this.handleChangeFocus,icon:(0,x.tZ)(Y.Z.Cog,{iconSize:"xl"})})),(0,x.tZ)(Ta,{className:b()("grid-column",f.className)},0===g.length?(0,x.tZ)("div",{css:$a},(0,c.t)("Empty column")):g.map(((t,n)=>(0,x.tZ)(ms,{key:t,id:t,parentId:e.id,depth:a+1,index:n,availableColumnCount:e.meta.width,columnWidth:r,onResizeStart:s,onResize:l,onResizeStop:d,isComponentVisible:m,onChangeTab:p}))),n&&(0,x.tZ)("div",n))))}))}}Da.propTypes=ka,Da.defaultProps={};const _a=Da,Ia={id:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,depth:d().number.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,editMode:d().bool.isRequired,handleComponentDrop:d().func.isRequired,deleteComponent:d().func.isRequired},Fa=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    width: 100%;
    padding: ${2*t.gridUnit}px 0; /* this is padding not margin to enable a larger mouse target */
    background-color: transparent;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: ${t.colors.grayscale.light2};
      display: block;
    }

    div[draggable='true'] & {
      cursor: move;
    }

    .dashboard-component-tabs & {
      padding-left: ${4*t.gridUnit}px;
      padding-right: ${4*t.gridUnit}px;
    }
  `}}
`;class Ea extends s.PureComponent{constructor(e){super(e),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{component:e,depth:t,parentComponent:n,index:i,handleComponentDrop:r,editMode:o}=this.props;return(0,x.tZ)(Ae,{component:e,parentComponent:n,orientation:"row",index:i,depth:t,onDrop:r,editMode:o},(e=>{let{dropIndicatorProps:t,dragSourceRef:n}=e;return(0,x.tZ)("div",{ref:n},o&&(0,x.tZ)(jo,{position:"left"},(0,x.tZ)(qo,{onDelete:this.handleDeleteComponent})),(0,x.tZ)(Fa,{className:"dashboard-component dashboard-component-divider"}),t&&(0,x.tZ)("div",t))}))}}Ea.propTypes=Ia;const Ma=Ea;var Oa=n(79271);const za={id:d().string.isRequired,dashboardId:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,depth:d().number.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,editMode:d().bool.isRequired,handleComponentDrop:d().func.isRequired,deleteComponent:d().func.isRequired,updateComponents:d().func.isRequired},Ua=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    font-weight: ${t.typography.weights.bold};
    width: 100%;
    padding: ${4*t.gridUnit}px 0;

    &.header-small {
      font-size: ${t.typography.sizes.l}px;
    }

    &.header-medium {
      font-size: ${t.typography.sizes.xl}px;
    }

    &.header-large {
      font-size: ${t.typography.sizes.xxl}px;
    }

    .dashboard--editing .dashboard-grid & {
      &:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      &:hover:after {
        border: 1px dashed ${t.colors.primary.base};
        z-index: 2;
      }
    }

    .dashboard--editing .dragdroppable-row & {
      cursor: move;
    }

    /**
   * grids add margin between items, so don't double pad within columns
   * we'll not worry about double padding on top as it can serve as a visual separator
   */
    .grid-column > :not(:last-child) & {
      margin-bottom: ${-4*t.gridUnit}px;
    }

    .background--white &,
    &.background--white,
    .dashboard-component-tabs & {
      padding-left: ${4*t.gridUnit}px;
      padding-right: ${4*t.gridUnit}px;
    }
  `}}
`;class Pa extends s.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeSize=this.handleUpdateMeta.bind(this,"headerSize"),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeText=this.handleUpdateMeta.bind(this,"text")}handleChangeFocus(e){this.setState((()=>({isFocused:e})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{isFocused:e}=this.state,{dashboardId:t,component:n,depth:i,parentComponent:r,index:o,handleComponentDrop:a,editMode:s}=this.props,l=Oa.Z.find((e=>e.value===(n.meta.headerSize||X.u_))),d=Sa.Z.find((e=>e.value===(n.meta.background||X.HE)));return(0,x.tZ)(Ae,{component:n,parentComponent:r,orientation:"row",index:o,depth:i,onDrop:a,disableDragDrop:e,editMode:s},(e=>{let{dropIndicatorProps:r,dragSourceRef:o}=e;return(0,x.tZ)("div",{ref:o},s&&i<=2&&(0,x.tZ)(jo,{position:"left"},(0,x.tZ)(xa,{position:"left"})),(0,x.tZ)(ha,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,x.tZ)(sa,{id:`${n.id}-header-style`,options:Oa.Z,value:n.meta.headerSize,onChange:this.handleChangeSize}),(0,x.tZ)(Ra,{id:`${n.id}-background`,value:n.meta.background,onChange:this.handleChangeBackground})],editMode:s},(0,x.tZ)(Ua,{className:b()("dashboard-component","dashboard-component-header",l.className,d.className)},s&&(0,x.tZ)(jo,{position:"top"},(0,x.tZ)(qo,{onDelete:this.handleDeleteComponent})),(0,x.tZ)(Si.Z,{title:n.meta.text,canEdit:s,onSaveTitle:this.handleChangeText,showTooltip:!1}),!s&&(0,x.tZ)(di,{id:n.id,dashboardId:t}))),r&&(0,x.tZ)("div",r))}))}}Pa.propTypes=za,Pa.defaultProps={};const Na=Pa;var Aa=n(71894);const qa={id:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,depth:d().number.isRequired,editMode:d().bool.isRequired,availableColumnCount:d().number.isRequired,columnWidth:d().number.isRequired,occupiedColumnCount:d().number.isRequired,onResizeStart:d().func.isRequired,onResize:d().func.isRequired,onResizeStop:d().func.isRequired,handleComponentDrop:d().func.isRequired,deleteComponent:d().func.isRequired,updateComponents:d().func.isRequired},La=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    height: fit-content;

    & > :not(:last-child):not(.hover-menu) {
      margin-right: ${4*t.gridUnit}px;
    }

    &.grid-row--empty {
      min-height: ${25*t.gridUnit}px;
    }
  `}}
`,ja=e=>x.iv`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class Va extends s.PureComponent{constructor(e){super(e),this.state={isFocused:!1,isInView:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.containerRef=s.createRef(),this.observerEnabler=null,this.observerDisabler=null}componentDidMount(){if((0,u.c)(u.T.DASHBOARD_VIRTUALIZATION)&&!(0,Aa.b)()){this.observerEnabler=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&!this.state.isInView&&this.setState({isInView:!0})}),{rootMargin:"100% 0px"}),this.observerDisabler=new IntersectionObserver((e=>{let[t]=e;!t.isIntersecting&&this.state.isInView&&this.setState({isInView:!1})}),{rootMargin:"400% 0px"});const e=this.containerRef.current;e&&(this.observerEnabler.observe(e),this.observerDisabler.observe(e))}}componentWillUnmount(){var e,t;null==(e=this.observerEnabler)||e.disconnect(),null==(t=this.observerDisabler)||t.disconnect()}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,component:t,parentId:n}=this.props;e(t.id,n)}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:r,occupiedColumnCount:o,depth:a,onResizeStart:s,onResize:l,onResizeStop:d,handleComponentDrop:u,editMode:h,onChangeTab:p,isComponentVisible:m}=this.props,g=e.children||[],f=Sa.Z.find((t=>t.value===(e.meta.background||X.HE)));return(0,x.tZ)(Ae,{component:e,parentComponent:t,orientation:"row",index:n,depth:a,onDrop:u,editMode:h},(t=>{let{dropIndicatorProps:n,dragSourceRef:u}=t;return(0,x.tZ)(ha,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,x.tZ)(Ra,{id:`${e.id}-background`,value:f.value,onChange:this.handleChangeBackground})],editMode:h},h&&(0,x.tZ)(jo,{innerRef:u,position:"left"},(0,x.tZ)(xa,{position:"left"}),(0,x.tZ)(qo,{onDelete:this.handleDeleteComponent}),(0,x.tZ)(ii,{onClick:this.handleChangeFocus,icon:(0,x.tZ)(Y.Z.Cog,{iconSize:"xl"})})),(0,x.tZ)(La,{className:b()("grid-row",0===g.length&&"grid-row--empty",f.className),ref:this.containerRef},0===g.length?(0,x.tZ)("div",{css:ja},(0,c.t)("Empty row")):g.map(((t,n)=>(0,x.tZ)(ms,{key:t,id:t,parentId:e.id,depth:a+1,index:n,availableColumnCount:i-o,columnWidth:r,onResizeStart:s,onResize:l,onResizeStop:d,isComponentVisible:m,onChangeTab:p,isInView:this.state.isInView}))),n&&(0,x.tZ)("div",n)))}))}}Va.propTypes=qa;const Ka=Va;var Ba=n(94301);const Ha="RENDER_TAB",Wa="RENDER_TAB_CONTENT",Ya={dashboardId:d().number.isRequired,id:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,depth:d().number.isRequired,renderType:d().oneOf([Ha,Wa]).isRequired,onDropOnTab:d().func,onHoverTab:d().func,editMode:d().bool.isRequired,canEdit:d().bool.isRequired,availableColumnCount:d().number,columnWidth:d().number,onResizeStart:d().func,onResize:d().func,onResizeStop:d().func,handleComponentDrop:d().func.isRequired,updateComponents:d().func.isRequired,setDirectPathToChild:d().func.isRequired,setEditMode:d().func.isRequired},Ja={availableColumnCount:0,columnWidth:0,onDropOnTab(){},onHoverTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Xa=y.iK.div`
  ${e=>{let{isHighlighted:t,theme:{gridUnit:n,colors:i}}=e;return`\n    padding: ${n}px ${2*n}px;\n    margin: ${-n}px ${-2*n}px;\n    transition: box-shadow 0.2s ease-in-out;\n    ${t&&`box-shadow: 0 0 ${n}px ${i.primary.light1};`}\n  `}}
`,Ga=e=>e.dropIndicatorProps&&(0,x.tZ)("div",{className:"drop-indicator drop-indicator--bottom"}),Qa=e=>e.dropIndicatorProps&&(0,x.tZ)("div",{className:"drop-indicator drop-indicator--top"});class es extends s.PureComponent{constructor(e){super(e),this.handleChangeText=this.handleChangeText.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleOnHover=this.handleOnHover.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}handleChangeTab(e){let{pathToTabIndex:t}=e;this.props.setDirectPathToChild(t)}handleChangeText(e){const{updateComponents:t,component:n}=this.props;e&&e!==n.meta.text&&t({[n.id]:{...n,meta:{...n.meta,text:e}}})}handleDrop(e){this.props.handleComponentDrop(e),this.props.onDropOnTab(e)}handleOnHover(){this.props.onHoverTab()}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}renderTabContent(){const{component:e,parentComponent:t,depth:n,availableColumnCount:i,columnWidth:r,onResizeStart:o,onResize:a,onResizeStop:s,editMode:l,isComponentVisible:d,canEdit:u,setEditMode:h,dashboardId:p}=this.props,m=0===e.children.length;return(0,x.tZ)("div",{className:"dashboard-component-tabs-content"},l&&(0,x.tZ)(Ae,{component:e,parentComponent:t,orientation:"column",index:0,depth:n,onDrop:this.handleTopDropTargetDrop,editMode:!0,className:"empty-droptarget"},Qa),m&&(0,x.tZ)(Ba.x3,{title:l?(0,c.t)("Drag and drop components to this tab"):(0,c.t)("There are no components added to this tab"),description:u&&(l?(0,x.tZ)("span",null,(0,c.t)("You can")," ",(0,x.tZ)("a",{href:`/chart/add?dashboard_id=${p}`,rel:"noopener noreferrer",target:"_blank"},(0,c.t)("create a new chart"))," ",(0,c.t)("or use existing ones from the panel on the right")):(0,x.tZ)("span",null,(0,c.t)("You can add the components in the")," ",(0,x.tZ)("span",{role:"button",tabIndex:0,onClick:()=>h(!0)},(0,c.t)("edit mode")))),image:"chart.svg"}),e.children.map(((t,l)=>(0,x.tZ)(ms,{key:t,id:t,parentId:e.id,depth:n,index:l,onDrop:this.handleDrop,onHover:this.handleOnHover,availableColumnCount:i,columnWidth:r,onResizeStart:o,onResize:a,onResizeStop:s,isComponentVisible:d,onChangeTab:this.handleChangeTab}))),l&&(0,x.tZ)(Ae,{component:e,parentComponent:t,orientation:"column",index:e.children.length,depth:n,onDrop:this.handleDrop,onHover:this.handleOnHover,editMode:!0,className:"empty-droptarget"},Ga))}renderTab(){const{component:e,parentComponent:t,index:n,depth:i,editMode:r,isFocused:o,isHighlighted:a}=this.props;return(0,x.tZ)(Ae,{component:e,parentComponent:t,orientation:"column",index:n,depth:i,onDrop:this.handleDrop,onHover:this.handleOnHover,editMode:r},(t=>{let{dropIndicatorProps:i,dragSourceRef:s}=t;return(0,x.tZ)(Xa,{isHighlighted:a,className:"dragdroppable-tab",ref:s},(0,x.tZ)(Si.Z,{title:e.meta.text,defaultTitle:e.meta.defaultText,placeholder:e.meta.placeholder,canEdit:r&&o,onSaveTitle:this.handleChangeText,showTooltip:!1,editing:r&&o}),!r&&(0,x.tZ)(di,{id:e.id,dashboardId:this.props.dashboardId,placement:n>=5?"left":"right"}),i&&(0,x.tZ)("div",i))}))}render(){const{renderType:e}=this.props;return e===Ha?this.renderTab():this.renderTabContent()}}es.propTypes=Ya,es.defaultProps=Ja;const ts=(0,r.$j)((function(e){return{canEdit:e.dashboardInfo.dash_edit_perm}}),(function(e){return(0,i.DE)({setEditMode:Yn.Mb},e)}))(es);function ns(e){let{currentComponent:t,directPathToChild:n=[]}=e;if(!t||0===n.length||-1===n.indexOf(t.id))return-1;const i=n.findIndex((e=>e===t.id)),r=n[i+1];return t.children.indexOf(r)>=0?t.children.findIndex((e=>e===r)):-1}function is(e,t){const n=(e.parents||[]).slice();return n.push(e.id),n.push(e.children[t]),n}function rs(e){if(void 0===e&&(e=[]),e.length>0){const t=e.slice();for(;t.length;){const e=t.pop(),n=e&&e.split("-")[0];if(!a()(X.Ep).call(X.Ep,n))return e}}return null}const os={id:d().string.isRequired,parentId:d().string.isRequired,component:G.cP.isRequired,parentComponent:G.cP.isRequired,index:d().number.isRequired,depth:d().number.isRequired,renderTabContent:d().bool,editMode:d().bool.isRequired,renderHoverMenu:d().bool,directPathToChild:d().arrayOf(d().string),activeTabs:d().arrayOf(d().string),logEvent:d().func.isRequired,setActiveTabs:d().func,availableColumnCount:d().number,columnWidth:d().number,onResizeStart:d().func,onResize:d().func,onResizeStop:d().func,createComponent:d().func.isRequired,handleComponentDrop:d().func.isRequired,onChangeTab:d().func.isRequired,deleteComponent:d().func.isRequired,updateComponents:d().func.isRequired},as={renderTabContent:!0,renderHoverMenu:!0,availableColumnCount:0,columnWidth:0,activeTabs:[],directPathToChild:[],setActiveTabs(){},onResizeStart(){},onResize(){},onResizeStop(){}},ss=y.iK.div`
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};

  .dashboard-component-tabs-content {
    min-height: ${e=>{let{theme:t}=e;return 12*t.gridUnit}}px;
    margin-top: ${e=>{let{theme:t}=e;return t.gridUnit/4}}px;
    position: relative;
  }

  .ant-tabs {
    overflow: visible;

    .ant-tabs-nav-wrap {
      min-height: ${e=>{let{theme:t}=e;return 12.5*t.gridUnit}}px;
    }

    .ant-tabs-content-holder {
      overflow: visible;
    }
  }

  div .ant-tabs-tab-btn {
    text-transform: none;
  }
`;class ls extends s.PureComponent{constructor(e){super(e),this.getTabInfo=e=>{var t;let n=Math.max(0,ns({currentComponent:e.component,directPathToChild:e.directPathToChild}));0===n&&null!=(t=e.activeTabs)&&t.length&&e.component.children.forEach(((t,i)=>{var r;0===n&&a()(r=e.activeTabs).call(r,t)&&(n=i)}));const{children:i}=e.component,r=i[n];return{tabIndex:n,activeKey:r}},this.showDeleteConfirmModal=e=>{const{component:t,deleteComponent:n}=this.props;H.xT.confirm({title:(0,c.t)("Delete dashboard tab?"),content:(0,x.tZ)("span",null,(0,c.t)("Deleting a tab will remove all content within it. You may still reverse this action with the")," ",(0,x.tZ)("b",null,(0,c.t)("undo"))," ",(0,c.t)("button (cmd + z) until you save your changes.")),onOk:()=>{n(e,t.id);const i=t.children.indexOf(e);this.handleDeleteTab(i)},okType:"danger",okText:(0,c.t)("DELETE"),cancelText:(0,c.t)("CANCEL"),icon:null})},this.handleEdit=(e,t)=>{const{component:n,createComponent:i}=this.props;"add"===t?(null==e||null==e.stopPropagation||e.stopPropagation(),i({destination:{id:n.id,type:n.type,index:n.children.length},dragging:{id:X.Xk,type:g.gn}})):"remove"===t&&this.showDeleteConfirmModal(e)};const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.state={tabIndex:t,activeKey:n},this.handleClickTab=this.handleClickTab.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleDeleteTab=this.handleDeleteTab.bind(this),this.handleDropOnTab=this.handleDropOnTab.bind(this),this.handleDrop=this.handleDrop.bind(this)}componentDidMount(){this.props.setActiveTabs(this.state.activeKey)}componentDidUpdate(e,t){t.activeKey!==this.state.activeKey&&this.props.setActiveTabs(this.state.activeKey,t.activeKey)}UNSAFE_componentWillReceiveProps(e){const t=Math.max(0,e.component.children.length-1),n=this.props.component.children,i=e.component.children;if(this.state.tabIndex>t&&this.setState((()=>({tabIndex:t}))),e.dashboardId!==this.props.dashboardId){const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.setState((()=>({tabIndex:t,activeKey:n})))}if(e.isComponentVisible){const t=rs(e.directPathToChild),r=rs(this.props.directPathToChild);if(t!==r||t===r&&n!==i){const t=ns({currentComponent:e.component,directPathToChild:e.directPathToChild});t>-1&&t!==this.state.tabIndex&&this.setState((()=>({tabIndex:t,activeKey:i[t]})))}}}handleClickTab(e){const{component:t}=this.props,{children:n}=t;if(e!==this.state.tabIndex){const n=is(t,e),i=n[n.length-1];this.props.logEvent(xt.Iq,{target_id:i,index:e}),this.props.onChangeTab({pathToTabIndex:n})}this.setState((()=>({activeKey:n[e]})))}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleDeleteTab(e){this.state.tabIndex===e&&this.handleClickTab(Math.max(0,e-1))}handleDropOnTab(e){const{component:t}=this.props,{destination:n}=e;if(n){const e=n.id===t.id?n.index:t.children.indexOf(n.id);e>-1&&setTimeout((()=>{this.handleClickTab(e)}),30)}}handleDrop(e){e.dragging.type!==g.yR&&this.props.handleComponentDrop(e)}render(){const{depth:e,component:t,parentComponent:n,index:i,availableColumnCount:r,columnWidth:o,onResizeStart:s,onResize:l,onResizeStop:d,renderTabContent:c,renderHoverMenu:u,isComponentVisible:h,editMode:p,nativeFilters:m}=this.props,{children:g}=t,{tabIndex:f,activeKey:v}=this.state;let b;const y=(null==m?void 0:m.focusedFilterId)||(null==m?void 0:m.hoveredFilterId);var S;return y&&(b=null==(S=m.filters[y])?void 0:S.tabsInScope),(0,x.tZ)(Ae,{component:t,parentComponent:n,orientation:"row",index:i,depth:e,onDrop:this.handleDrop,editMode:p},(i=>{let{dropIndicatorProps:m,dragSourceRef:y}=i;return(0,x.tZ)(ss,{className:"dashboard-component dashboard-component-tabs"},p&&u&&(0,x.tZ)(jo,{innerRef:y,position:"left"},(0,x.tZ)(xa,{position:"left"}),(0,x.tZ)(qo,{onDelete:this.handleDeleteComponent})),(0,x.tZ)(R.cl,{id:t.id,activeKey:v,onChange:e=>{this.handleClickTab(g.indexOf(e))},onEdit:this.handleEdit,type:p?"editable-card":"card"},g.map(((n,i)=>{var u;return(0,x.tZ)(R.cl.TabPane,{key:n,tab:(0,x.tZ)(ms,{id:n,parentId:t.id,depth:e,index:i,renderType:Ha,availableColumnCount:r,columnWidth:o,onDropOnTab:this.handleDropOnTab,onHoverTab:()=>this.handleClickTab(i),isFocused:v===n,isHighlighted:v!==n&&(null==(u=b)?void 0:a()(u).call(u,n))})},c&&(0,x.tZ)(ms,{id:n,parentId:t.id,depth:e,index:i,renderType:Wa,availableColumnCount:r,columnWidth:o,onResizeStart:s,onResize:l,onResizeStop:d,onDropOnTab:this.handleDropOnTab,isComponentVisible:f===i&&h}))}))),m&&n.id!==X._4&&(0,x.tZ)("div",m))}))}}ls.propTypes=os,ls.defaultProps=as;const ds=(0,r.$j)((function(e){return{nativeFilters:e.nativeFilters,activeTabs:e.dashboardState.activeTabs,directPathToChild:e.dashboardState.directPathToChild}}))(ls),cs={[g.dW]:e=>{let{id:t,parentId:n,component:i,parentComponent:o,index:l,depth:d,availableColumnCount:c,columnWidth:u,onResizeStart:h,onResize:p,onResizeStop:m,editMode:f,isComponentVisible:v,dashboardId:S,fullSizeChartId:C,getComponentById:Z=(()=>{}),deleteComponent:w,updateComponents:R,handleComponentDrop:k,setFullSizeChartId:T,isInView:$}=e;const{chartId:D}=i.meta,_=C===D,I=(e=>{var t;const n=(0,y.Fg)(),i=(0,r.v9)((e=>e.nativeFilters)),o=((e,t)=>{if(!e.focusedFilterField)return null;const{chartId:n,column:i}=e.focusedFilterField;return{chartId:n,scope:t[n].scopes[i]}})((0,r.v9)((e=>e.dashboardState)),(0,r.v9)((e=>e.dashboardFilters))),s=(null==i?void 0:i.focusedFilterId)||(null==i?void 0:i.hoveredFilterId);if(!o&&!s)return{};const l={borderColor:n.colors.primary.light2,opacity:1,boxShadow:`0px 0px ${2*n.gridUnit}px ${n.colors.primary.base}`,pointerEvents:"auto"};var d,c;if(s){if(null!=(d=i.filters[s])&&null!=(c=d.chartsInScope)&&a()(c).call(c,e))return l}else if(e===(null==o?void 0:o.chartId)||a()(t=(0,nn.up)({filterScope:null==o?void 0:o.scope})).call(t,e))return l;return{opacity:.3,pointerEvents:"none"}})(D),F=(0,r.v9)((e=>e.dashboardState)),[E,M]=(0,s.useState)({}),[O,z]=(0,s.useState)(),[U,P]=(0,s.useState)(),[N,A]=(0,s.useState)(0),q=(0,s.useMemo)((()=>{var e;return null!=(e=null==F?void 0:F.directPathToChild)?e:[]}),[F]),L=(0,s.useMemo)((()=>{var e;return null!=(e=null==F?void 0:F.directPathLastUpdated)?e:0}),[F]),j=(0,s.useMemo)((()=>na(q)),[q]);(0,s.useEffect)((()=>{const{label:e,chart:t}=j;L!==N&&i.id===t&&(A(L),z(i.id),P(e))}),[i,N,L,j]),(0,s.useEffect)((()=>{let e;return O&&(e=setTimeout((()=>{z(void 0),P(void 0)}),2e3)),()=>{e&&clearTimeout(e)}}),[O]);const V=(0,s.useMemo)((()=>{var e,t,n;const r=null==(e=Z(null==(n=o.parents)?void 0:n.find((e=>e.startsWith(g.BA)))))||null==(t=e.meta)?void 0:t.width;let a=i.meta.width||X.cx;return o.type===g.BA?a=o.meta.width||X.cx:r&&a>r&&(a=r),a}),[i,Z,o.meta.width,o.parents,o.type]),{chartWidth:K,chartHeight:B}=(0,s.useMemo)((()=>{let e=0,t=0;return _?(e=window.innerWidth-32,t=window.innerHeight-32):(e=Math.floor(V*u+(V-1)*X.es-32),t=Math.floor(i.meta.height*X.cd-32)),{chartWidth:e,chartHeight:t}}),[u,i,_,V]),H=(0,s.useCallback)((()=>{w(t,n)}),[w,t,n]),W=(0,s.useCallback)((e=>{R({[i.id]:{...i,meta:{...i.meta,sliceNameOverride:e}}})}),[i,R]),Y=(0,s.useCallback)((()=>{T(_?null:D)}),[D,_,T]),J=(0,s.useCallback)(((e,t)=>{M((n=>({...n,[e]:t})))}),[]);return(0,x.tZ)(Ae,{component:i,parentComponent:o,orientation:o.type===g.Os?"column":"row",index:l,depth:d,onDrop:k,disableDragDrop:!1,editMode:f},(e=>{let{dropIndicatorProps:t,dragSourceRef:n}=e;return(0,x.tZ)(ta,{id:i.id,adjustableWidth:o.type===g.Os,adjustableHeight:!0,widthStep:u,widthMultiple:V,heightStep:X.cd,heightMultiple:i.meta.height,minWidthMultiple:X.cx,minHeightMultiple:X.AA,maxWidthMultiple:c+V,onResizeStart:h,onResize:p,onResizeStop:m,editMode:f},(0,x.tZ)("div",{ref:n,style:I,css:_?ia:void 0,className:b()("dashboard-component","dashboard-component-chart-holder",`dashboard-chart-id-${D}`,O?"fade-in":"fade-out")},!f&&(0,x.tZ)(di,{id:i.id,scrollIntoView:O===i.id}),!!O&&(0,x.tZ)("style",null,`label[for=${U}] + .Select .Select__control {\n                    border-color: #00736a;\n                    transition: border-color 1s ease-in-out;\n                  }`),(0,x.tZ)(Ao,{componentId:i.id,id:i.meta.chartId,dashboardId:S,width:K,height:B,sliceName:i.meta.sliceNameOverride||i.meta.sliceName||"",updateSliceName:W,isComponentVisible:v,handleToggleFullSize:Y,isFullSize:_,setControlValue:J,extraControls:E,isInView:$}),f&&(0,x.tZ)(jo,{position:"top"},(0,x.tZ)("div",null,(0,x.tZ)(qo,{onDelete:H})))),t&&(0,x.tZ)("div",t))}))},[g.xh]:ba,[g.BA]:_a,[g.hE]:Ma,[g.Nc]:Na,[g.Os]:Ka,[g.gn]:ts,[g.yR]:ds,[g.t]:e=>{let{component:t,parentComponent:n,index:i,depth:o,handleComponentDrop:a,editMode:l,columnWidth:d,availableColumnCount:u,onResizeStart:h,onResizeStop:p,onResize:m,deleteComponent:f,parentId:v,updateComponents:y,id:S}=e;const C=n.type===g.BA?n.meta.width||X.cx:t.meta.width||X.cx,Z=()=>{f(S,v)},w=Sa.Z.find((e=>e.value===(t.meta.background||X.HE))),{Component:R}=tt.get(t.meta.componentKey),k=(0,r.v9)((e=>{let{nativeFilters:t,dataMask:n}=e;return{nativeFilters:t,dataMask:n}}));return(0,x.tZ)(Ae,{component:t,parentComponent:n,orientation:n.type===g.Os?"column":"row",index:i,depth:o,onDrop:a,editMode:l},(e=>{let{dropIndicatorProps:i,dragSourceRef:r}=e;return(0,x.tZ)(ha,{menuItems:[(0,x.tZ)(Ra,{id:`${t.id}-background`,value:t.meta.background,onChange:e=>{return"background",n=e,void y({[t.id]:{...t,meta:{...t.meta,background:n}}});var n}})],editMode:l},(0,x.tZ)("div",{className:b()("dashboard-component",`dashboard-${t.componentKey}`,null==w?void 0:w.className),id:t.id},(0,x.tZ)(ta,{id:t.id,adjustableWidth:n.type===g.Os,widthStep:d,widthMultiple:C,heightStep:X.cd,adjustableHeight:!1,heightMultiple:t.meta.height,minWidthMultiple:X.cx,minHeightMultiple:X.cx,maxWidthMultiple:u+C,onResizeStart:h,onResize:m,onResizeStop:p},(0,x.tZ)("div",{ref:r,className:"dashboard-component"},l&&(0,x.tZ)(jo,{position:"top"},(0,x.tZ)(qo,{onDelete:Z})),(0,x.tZ)(s.Suspense,{fallback:(0,x.tZ)("div",null,(0,c.t)("Loading..."))},(0,x.tZ)(R,{dashboardData:k}))))),i&&(0,x.tZ)("div",i))}))}};var us=n(72673);const hs={id:d().string,parentId:d().string,depth:d().number,index:d().number,renderHoverMenu:d().bool,renderTabContent:d().bool,onChangeTab:d().func,component:G.cP.isRequired,parentComponent:G.cP.isRequired,createComponent:d().func.isRequired,deleteComponent:d().func.isRequired,updateComponents:d().func.isRequired,handleComponentDrop:d().func.isRequired,logEvent:d().func.isRequired,directPathToChild:d().arrayOf(d().string),directPathLastUpdated:d().number,dashboardId:d().number.isRequired,isComponentVisible:d().bool};class ps extends s.PureComponent{render(){const{component:e}=this.props,t=e?cs[e.type]:null;return t?(0,x.tZ)(t,this.props):null}}ps.propTypes=hs,ps.defaultProps={isComponentVisible:!0};const ms=(0,r.$j)((function(e,t){let{dashboardLayout:n,dashboardState:i,dashboardInfo:r}=e;const o=n.present,{id:a,parentId:s}=t,l=o[a],d={component:l,getComponentById:e=>o[e],parentComponent:o[s],editMode:i.editMode,filters:(0,nn.De)(),dashboardId:r.id,fullSizeChartId:i.fullSizeChartId};if(l){const e=l.type;if(e===g.Os||e===g.BA){const{occupiedWidth:t,minimumWidth:n}=(0,us.Z)({id:a,components:o});e===g.Os&&(d.occupiedColumnCount=t),e===g.BA&&(d.minColumnWidth=n)}}return d}),(function(e){return(0,i.DE)({addDangerToast:Xn.Gb,createComponent:Jn.LM,deleteComponent:Jn.v7,updateComponents:Jn.WZ,handleComponentDrop:Jn._p,setDirectPathToChild:Yn.E2,setFullSizeChartId:Yn.zL,setActiveTabs:Yn.$_,logEvent:Gn.logEvent},e)}))(ps);var gs=n(68122),fs=n(90057),vs=n(8868),bs=n(6954);const ys=function(e,t){return void 0===t&&(t=!1),function(n,i){void 0===i&&(i=!1);const r=i||t;if(!n&&e)return r?e:{"data-test":e};if(n&&!e)return r?n:{"data-test":n};if(!n&&!e)return console.warn('testWithId function has missed "prefix" and "id" params'),r?"":{"data-test":""};const o=`${e}__${n}`;return r?o:{"data-test":o}}},xs=e=>Object.values(e).reduce(((e,t)=>({...e,[t.id]:t.extraFormData})),{}),Ss=(e,t)=>{var n;const i=null==t?void 0:t.value;return(null==(n=e.controlValues)?void 0:n.enableEmptyFilter)&&null==i},Cs=()=>(0,r.v9)((e=>{const{charts:t,datasources:n}=e;return Object.keys(e.charts).reduce(((e,i)=>{var r,o;const a=n[null==(r=t[i])||null==(o=r.form_data)?void 0:o.datasource];return{...e,[i]:a?a.verbose_map:{}}}),{})})),Zs=ys("filter-bar");var ws=n(92242);const Rs=()=>(0,r.v9)((e=>e.nativeFilters.filterSets||{})),ks=()=>{const e=(0,r.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.preselectNativeFilters})),t=(0,r.v9)((e=>e.nativeFilters.filters));return(0,s.useMemo)((()=>Object.entries(t).reduce(((t,n)=>{let[i,r]=n;return{...t,[i]:{...r,preselect:null==e?void 0:e[i]}}}),{})),[t,e])},Ts=()=>{const e=(0,r.v9)((e=>e.dataMask));return(0,s.useMemo)((()=>Object.values(e).filter((e=>String(e.id).startsWith(ws.rW))).reduce(((e,t)=>({...e,[t.id]:t})),{})),[e])};var $s=n(81788);const Ds=e=>x.iv`
  display: flex;

  && > .filter-clear-all-button {
    color: ${e.colors.grayscale.base};
    margin-left: 0;
    &:hover {
      color: ${e.colors.primary.dark1};
    }

    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
    }
  }
`,_s=(e,t)=>x.iv`
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  position: fixed;
  z-index: 100;

  // filter bar width minus 1px for border
  width: ${t-1}px;
  bottom: 0;

  padding: ${4*e.gridUnit}px;
  padding-top: ${6*e.gridUnit}px;

  background: linear-gradient(
    ${(0,w.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    pointer-events: auto;
  }

  & > .filter-apply-button {
    margin-bottom: ${3*e.gridUnit}px;
  }
`,Is=e=>x.iv`
  align-items: center;
  margin-left: auto;
  && > .filter-clear-all-button {
    text-transform: capitalize;
    font-weight: ${e.typography.weights.normal};
  }
  & > .filter-apply-button {
    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
      background: ${e.colors.grayscale.light3};
    }
  }
`,Fs=e=>{let{width:t=zi.I6,onApply:n,onClearAll:i,dataMaskApplied:r,dataMaskSelected:o,isApplyDisabled:a,filterBarOrientation:l=Fi.Bp.VERTICAL}=e;const d=(0,s.useMemo)((()=>Object.values(r).some((e=>{var t,n,i;return(0,Ii.Z)(null==(t=o[e.id])||null==(n=t.filterState)?void 0:n.value)||!o[e.id]&&(0,Ii.Z)(null==(i=e.filterState)?void 0:i.value)}))),[r,o]),u=l===Fi.Bp.VERTICAL;return(0,x.tZ)("div",{css:e=>[Ds(e),u?_s(e,t):Is(e)]},(0,x.tZ)(W.Z,ne()({disabled:a,buttonStyle:"primary",htmlType:"submit",className:"filter-apply-button",onClick:n},Zs("apply-button")),u?(0,c.t)("Apply filters"):(0,c.t)("Apply")),(0,x.tZ)(W.Z,ne()({disabled:!d,buttonStyle:"link",buttonSize:"small",className:"filter-clear-all-button",onClick:i},Zs("clear-button")),(0,c.t)("Clear all")))};var Es,Ms=n(90731),Os=(Es=function(e,t){return Es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},Es(e,t)},function(e,t){function n(){this.constructor=e}Es(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),zs="html",Us="svg",Ps=function(e,t){var n,i,r,o={};if(e===zs)r=document.createElement("div");else{if(e!==Us)throw new Error('Invalid element type "'+e+'" for createPortalNode: must be "html" or "svg".');r=document.createElementNS("http://www.w3.org/2000/svg","g")}if(t&&"object"==typeof t)for(var a=0,s=Object.entries(t.attributes);a<s.length;a++){var l=s[a],d=l[0],c=l[1];r.setAttribute(d,c)}var u={element:r,elementType:e,setPortalProps:function(e){o=e},getInitialPortalProps:function(){return o},mount:function(t,r){if(r!==i){if(u.unmount(),t!==n&&!function(e,t){if(t===zs)return e instanceof HTMLElement;if(t===Us)return e instanceof SVGElement;throw new Error('Unrecognized element type "'+t+'" for validateElementType.')}(t,e))throw new Error('Invalid element type for portal: "'+e+'" portalNodes must be used with '+e+" elements, but OutPortal is within <"+t.tagName+">.");t.replaceChild(u.element,r),n=t,i=r}},unmount:function(e){e&&e!==i||n&&i&&(n.replaceChild(i,u.element),n=void 0,i=void 0)}};return u},Ns=function(e){function t(t){var n=e.call(this,t)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(e){n.setState({nodeProps:e})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return Os(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,i=t.node;return Ms.createPortal(s.Children.map(n,(function(t){return s.isValidElement(t)?s.cloneElement(t,e.state.nodeProps):t})),i.element)},t}(s.PureComponent),As=function(e){function t(t){var n=e.call(this,t)||this;return n.placeholderNode=s.createRef(),n.passPropsThroughPortal(),n}return Os(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){return s.createElement("div",{ref:this.placeholderNode})},t}(s.PureComponent),qs=Ps.bind(null,zs);Ps.bind(null,Us);const Ls=[];function js(){return(0,r.v9)((e=>{var t,n;return(null==(t=e.dashboardInfo)||null==(n=t.metadata)?void 0:n.native_filter_configuration)||Ls}))}function Vs(){return(0,r.v9)((e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present}))}function Ks(){const e=Vs();return(0,s.useMemo)((()=>Object.values(e).some((e=>e.type===g.gn))),[e])}function Bs(){const e=(0,r.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),t=function(){const e=Vs();return t=>{const n=Object.values(e).find((e=>{var n;return(null==(n=e.meta)?void 0:n.chartId)===t}));return null==n?void 0:n.parents.filter((t=>e[t].type===g.gn))}}();return n=>{var i;return(0,no.nY)(n)||"chartsInScope"in n&&(null==(i=n.chartsInScope)?void 0:i.some((n=>{const i=t(n);return 0===(null==i?void 0:i.length)||(null==i?void 0:i.every((t=>a()(e).call(e,t))))})))}}function Hs(e){const t=Ks(),n=Bs();return(0,s.useMemo)((()=>{let i=[];const r=[];return t?e.forEach((e=>{n(e)?i.push(e):r.push(e)})):i=e,[i,r]}),[e,t,n])}var Ws=n(99612);const Ys=(0,s.forwardRef)(((e,t)=>{let{items:n,onOverflowingStateChange:i,dropdownContent:r,dropdownRef:o,dropdownStyle:a={},dropdownTriggerCount:l,dropdownTriggerIcon:d,dropdownTriggerText:u=(0,c.t)("More"),dropdownTriggerTooltip:h=null,forceRender:p,style:m}=e;const g=(0,y.Fg)(),{ref:f,width:v=0}=(0,Ws.NB)(),b=(0,Pr.D)(v)||0,{current:S}=f,[C,Z]=(0,s.useState)([]),[w,R]=(0,s.useState)(!1),[k,T]=s.useState(-1);let $=(0,s.useRef)(null);o&&($=o);const[D,_]=(0,s.useState)(!1),I=e=>e.reduce(((e,t)=>{let[n,i]=e;return n.push({id:t.id,element:s.cloneElement(t.element,{key:t.id})}),i.push(t.id),[n,i]}),[[],[]]),[F,E]=(0,s.useMemo)((()=>I(n.slice(0,-1!==k?k:n.length))),[n,k]),[M,O]=(0,s.useMemo)((()=>-1!==k?I(n.slice(k)):[[],[]]),[n,k]);(0,s.useLayoutEffect)((()=>{const e=null==S?void 0:S.children.item(0);if(e){const{children:t}=e,i=Array.from(t);if(C.length!==n.length){if(i.length!==n.length)return void T(-1);Z(i.map((e=>e.getBoundingClientRect().width)))}const r=i.findIndex((t=>t.getBoundingClientRect().right>e.getBoundingClientRect().right+1));let o=-1===r&&M.length>0?n.length-M.length:r;if(v>b){const e=null==S?void 0:S.children.item(1),t=(null==e?void 0:e.getBoundingClientRect().right)||0,r=((null==S?void 0:S.getBoundingClientRect().right)||0)-t;let a=0;for(let e=i.length;e<n.length&&(a+=C[e],a<=r);e+=1)o=e+1}T(o)}}),[S,n.length,C,M.length,b,v]),(0,s.useEffect)((()=>{i&&i({notOverflowed:E,overflowed:O})}),[E,i,O]);const z=-1!==k?n.length-k:0,U=(0,s.useMemo)((()=>r||z?(0,x.tZ)("div",{css:x.iv`
              display: flex;
              flex-direction: column;
              gap: ${4*g.gridUnit}px;
            `,style:a,ref:$},r?r(M):M.map((e=>e.element))):null),[r,z,g.gridUnit,a,M]);return(0,s.useLayoutEffect)((()=>{w&&setTimeout((()=>{$.current&&_($.current.scrollHeight>500)}),100)}),[w]),(0,s.useImperativeHandle)(t,(()=>({...f.current,open:()=>R(!0)})),[f]),(0,s.useEffect)((()=>(document.onscroll=w?()=>R(!1):null,()=>{document.onscroll=null})),[w]),(0,x.tZ)("div",{ref:f,css:x.iv`
          display: flex;
          align-items: center;
        `},(0,x.tZ)("div",{css:x.iv`
            display: flex;
            align-items: center;
            gap: ${4*g.gridUnit}px;
            margin-right: ${4*g.gridUnit}px;
            min-width: 0px;
          `,style:m},F.map((e=>e.element))),U&&(0,x.tZ)(s.Fragment,null,(0,x.tZ)(x.xB,{styles:x.iv`
                .ant-popover-inner-content {
                  max-height: ${500}px;
                  overflow: ${D?"auto":"visible"};
                  padding: ${3*g.gridUnit}px ${4*g.gridUnit}px;

                  // Some OS versions only show the scroll when hovering.
                  // These settings will make the scroll always visible.
                  ::-webkit-scrollbar {
                    -webkit-appearance: none;
                    width: 14px;
                  }
                  ::-webkit-scrollbar-thumb {
                    border-radius: 9px;
                    background-color: ${g.colors.grayscale.light1};
                    border: 3px solid transparent;
                    background-clip: content-box;
                  }
                  ::-webkit-scrollbar-track {
                    background-color: ${g.colors.grayscale.light4};
                    border-left: 1px solid ${g.colors.grayscale.light2};
                  }
                }
              `}),(0,x.tZ)(ri.Z,{content:U,trigger:"click",visible:w,onVisibleChange:e=>R(e),placement:"bottom",forceRender:p},(0,x.tZ)(re.u,{title:h},(0,x.tZ)(W.Z,{buttonStyle:"secondary"},d,u,(0,x.tZ)(Nr.Z,{count:null!=l?l:z,color:(null!=l?l:z)>0?g.colors.primary.base:g.colors.grayscale.light1,showZero:!0,css:x.iv`
                      margin-left: ${2*g.gridUnit}px;
                    `}),(0,x.tZ)(Y.Z.DownOutlined,{iconSize:"m",iconColor:g.colors.grayscale.light1,css:x.iv`
                      .anticon {
                        display: flex;
                      }
                    `}))))))})),Js=Ys,Xs=e=>{let{filtersOutOfScope:t,renderer:n,hasTopMargin:i,horizontalOverflow:r,forceRender:o=!1}=e;return(0,x.tZ)(H.Ol,{ghost:!0,bordered:!0,expandIconPosition:"right",collapsible:0===t.length?"disabled":void 0,css:e=>r?(0,x.iv)("&.ant-collapse>.ant-collapse-item{&>.ant-collapse-header{padding:0;&>.ant-collapse-arrow{right:0;padding:0;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;margin-bottom:",-4*e.gridUnit,"px;}}",""):(0,x.iv)("&.ant-collapse{margin-top:",i?6*e.gridUnit:0,"px;&>.ant-collapse-item{&>.ant-collapse-header{padding-left:0;padding-bottom:",2*e.gridUnit,"px;&>.ant-collapse-arrow{right:",e.gridUnit,"px;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;}}}","")},(0,x.tZ)(H.Ol.Panel,{forceRender:o,header:(0,x.tZ)("span",{css:e=>(0,x.iv)("font-size:",e.typography.sizes.s,"px;","")},(0,c.t)("Filters out of scope (%d)",t.length)),key:"1"},t.map(n)))};var Gs=n(3297),Qs=n(28368),el=n.n(Qs),tl=n(88274);const nl=y.iK.div`
  display: flex;
  flex-direction: row;
  background-color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{level:t,theme:n}=e;return n.colors[t].base}};
  color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  width: 100%;
`,il=y.iK.div`
  display: flex;
  flex-direction: column;
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  overflow: hidden;
`,rl=y.iK.span`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`;function ol(e){let{body:t,level:n="error",title:i}=e;const r=(0,y.Fg)().colors[n].base;return(0,x.tZ)(nl,{level:n,role:"alert"},"error"===n?(0,x.tZ)(Y.Z.ErrorSolid,{iconColor:r}):(0,x.tZ)(Y.Z.WarningSolid,{iconColor:r}),(0,x.tZ)(il,null,(0,x.tZ)(rl,null,i),(0,x.tZ)("p",null,t)))}var al=n(72875),sl=n(77997),ll=n(52794);const dl=_()(((e,t)=>{e(t?(0,ll.qN)(t):(0,ll.DU)())}),Tt.oP),cl=_()(((e,t)=>{e(t?(0,ll.$7)(t):(0,ll.Up)())}),Tt.oP);var ul=n(1510);const hl=()=>(0,r.v9)((e=>{var t;return{outlinedFilterId:null==(t=na(e.dashboardState.directPathToChild||[]))?void 0:t.native_filter,lastUpdated:e.dashboardState.directPathLastUpdated}})),pl=y.iK.div`
  & > div {
    height: auto !important;
    min-height: ${32}px;
  }
`,ml=[{data:[{}]}],gl=[wi.cg.NATIVE_FILTER],fl=e=>{var t,n;let{dataMaskSelected:i,filter:o,onFilterSelectionChange:a,inView:l=!0,showOverflow:d,parentRef:h,setFilterActive:m,orientation:g=Fi.Bp.VERTICAL,overflow:f=!1,validateStatus:v}=e;const{id:b,targets:y,filterType:S,adhoc_filters:C,time_range:Z}=o,w=(0,Zi.Z)().get(S),R=function(e,t){const n=(0,r.v9)((t=>{var n;return null==(n=t.nativeFilters.filters[e])?void 0:n.cascadeParentIds}));return(0,s.useMemo)((()=>{let e={};return(0,Qr.Z)(n).forEach((n=>{const i=null==t?void 0:t[n];e=(0,ul.on)(e,null==i?void 0:i.extraFormData)})),e}),[t,n])}(b,i),k=(()=>{const e=(0,r.v9)((e=>e.dashboardState.isRefreshing)),t=(0,r.v9)((e=>e.dashboardState.isFiltersRefreshing));return!e&&t})(),[T,$]=(0,s.useState)([]),[D,_]=(0,s.useState)(),[I,F]=(0,s.useState)({inView:!1}),[E,M]=(0,s.useState)({}),[O,z]=(0,s.useState)(l),U=(0,s.useRef)(null),[P]=y,{datasetId:N,column:A={}}=P,{name:q}=A,L=!!N,[j,V]=(0,s.useState)(L),[K,B]=(0,s.useState)(!1),H=(0,r.I0)(),{outlinedFilterId:W,lastUpdated:Y}=hl(),J=(0,s.useCallback)((()=>{B(!1),V(!1),k&&H((0,Yn.YC)())}),[H,k]);(0,s.useEffect)((()=>{!O&&l&&z(!0)}),[l,O,z]),(0,s.useEffect)((()=>{var e;if(!O)return;const t=(0,ul.zi)({...o,datasetId:N,dependencies:R,groupby:q,adhoc_filters:C,time_range:Z}),n=(null==(e=o.dataMask)?void 0:e.ownState)||{};if(!K&&(!el()(I,t,((e,t,n)=>"url_params"===n||void 0))||!mi()(E,n)||k)){if(F(t),M(n),!L)return;B(!0),(0,ui.getChartDataRequest)({formData:t,force:!1,requestParams:{dashboardId:0},ownState:n}).then((e=>{let{response:t,json:n}=e;if((0,yt.c)(u.T.GLOBAL_ASYNC_QUERIES)){const e="result"in n?n.result[0]:n;if(200===t.status)$([e]),J();else{if(202!==t.status)throw new Error(`Received unexpected response status (${t.status}) while fetching chart data`);(0,sl.YJ)(e).then((e=>{$(e),J()})).catch((e=>{(0,ai.O$)(e).then((e=>{_(e),J()}))}))}}else $(n.result),_(void 0),J()})).catch((e=>{(0,ai.O$)(e).then((e=>{_(e),J()}))}))}}),[O,R,N,q,J,JSON.stringify(o),L,K,k]),(0,s.useEffect)((()=>{W&&W===o.id&&setTimeout((()=>{var e;null==U||null==(e=U.current)||e.focus()}),f?Tt.oP:0)}),[U,W,Y,o.id,f]);const X=(0,s.useCallback)((e=>a(o,e)),[o,a]),G=(0,s.useCallback)((()=>{W!==b&&cl(H,b)}),[H,b,W]),Q=(0,s.useCallback)((()=>{cl(H),W===b&&H((0,Yn.E2)([]))}),[H,b,W]),ee=(0,s.useCallback)((()=>dl(H,b)),[H,b]),te=(0,s.useCallback)((()=>dl(H)),[H]),ne=(0,s.useMemo)((()=>({setDataMask:X,setHoveredFilter:ee,unsetHoveredFilter:te,setFocusedFilter:G,unsetFocusedFilter:Q,setFilterActive:m})),[X,m,ee,te,G,Q]),ie=(0,s.useMemo)((()=>{var e;return{...null==(e=o.dataMask)?void 0:e.filterState,validateStatus:v}}),[null==(t=o.dataMask)?void 0:t.filterState,v]),re=(0,s.useMemo)((()=>({filterBarOrientation:g,isOverflowingFilterBar:f})),[g,f]);var oe;return D?(0,x.tZ)(al.Z,{error:null==(oe=D.errors)?void 0:oe[0],fallback:(0,x.tZ)(ol,{title:(0,c.t)("Cannot load filter"),body:D.error,level:"error"})}):(0,x.tZ)(pl,null,j?(0,x.tZ)(p.Z,{position:"inline-centered"}):(0,x.tZ)(tl.Z,{height:32,width:"100%",showOverflow:d,formData:I,displaySettings:re,parentRef:h,inputRef:U,queriesData:L?T:ml,chartType:S,behaviors:gl,filterState:ie,ownState:null==(n=o.dataMask)?void 0:n.ownState,enableNoResults:null==w?void 0:w.enableNoResults,isRefreshing:K,hooks:ne}))},vl=s.memo(fl);var bl=n(51794);const yl=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.text)||(null==e||null==(n=e.meta)?void 0:n.defaultText)||""},xl=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.sliceNameOverride)||(null==e||null==(n=e.meta)?void 0:n.sliceName)||(null==e?void 0:e.id)||""},Sl=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    align-items: center;
    margin: ${t.gridUnit}px 0;
    font-size: ${t.typography.sizes.s}px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    & .ant-tooltip-open {
      display: inline-flex;
    }
  `}};
`,Cl=y.iK.span`
  ${e=>{let{theme:t}=e;return x.iv`
    color: ${t.colors.grayscale.base};
    padding-right: ${4*t.gridUnit}px;
    margin-right: auto;
    text-transform: uppercase;
    white-space: nowrap;
  `}};
`,Zl=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    color: ${t.colors.grayscale.dark1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  `}};
`,wl=y.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rl=y.iK.span`
  text-decoration: underline;
  cursor: pointer;
`,kl=y.iK.span`
  ${e=>{let{theme:t}=e;return x.iv`
    color: ${t.colors.primary.base};
  `}}
`,Tl=y.iK.ul`
  ${e=>{let{theme:t}=e;return x.iv`
    padding-left: ${3*t.gridUnit}px;
    margin-bottom: 0;
  `}};
`,$l=y.iK.span`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,Dl=y.iK.div`
  min-width: 0;
  display: inline-flex;
  white-space: nowrap;
`,_l=y.iK.div`
  display: flex;
  align-items: center;
`,Il=e=>{let{title:t,children:n,...i}=e;return(0,x.tZ)(re.u,ne()({title:t,placement:"bottom",overlayClassName:"filter-card-tooltip"},i),(0,x.tZ)(Dl,null,n))},Fl=(e,t)=>Array.isArray(e)&&e.length>0?(0,x.tZ)(s.Fragment,null,(0,x.tZ)($l,null,t,":"),(0,x.tZ)(Tl,null,e.map((e=>(0,x.tZ)("li",null,e))))):null,El=s.memo((e=>{let{filter:t}=e;const n=(e=>{const t=(0,r.v9)((e=>e.dashboardLayout.present)),n=Oi();return(0,s.useMemo)((()=>{var i;let r;const o=t[X._4].children[0];if(o.startsWith("TABS-")&&(r=t[o].children),0===e.scope.rootPath.length)return;if(0===e.scope.excluded.length&&(e.scope.rootPath[0]===X._4||null!=(i=r)&&i.every((t=>{var n;return a()(n=e.scope.rootPath).call(n,t)}))))return{all:[(0,c.t)("All charts")]};if(0===e.scope.excluded.length&&r)return{tabs:e.scope.rootPath.map((e=>yl(t[e]))).filter(Boolean)};const s=Object.values(t).filter((e=>e.type===g.dW));if(e.scope.rootPath[0]===X._4)return{charts:n.filter((t=>{var n;return!a()(n=e.scope.excluded).call(n,t)})).map((e=>{const t=s.find((t=>t.meta.chartId===e));return xl(t)})).filter(Boolean)};if(r){const i=[...e.scope.rootPath],r=s.filter((e=>e.parents.some((e=>a()(i).call(i,e)))));e.scope.excluded.forEach((e=>{const t=i.findIndex((t=>{var n,i;return null==(n=r.find((t=>t.meta.chartId===e)))?void 0:a()(i=n.parents).call(i,t)}));t>-1&&i.splice(t,1)}));const o=n.filter((t=>{var n;return!a()(n=e.scope.excluded).call(n,t)})).reduce(((e,t)=>{const n=r.find((e=>e.meta.chartId===t&&e.parents.every((e=>!a()(i).call(i,e)))));return n&&e.push(n),e}),[]);return{tabs:i.map((e=>yl(t[e]))).filter(Boolean),charts:o.map(xl).filter(Boolean)}}}),[n,e.scope.excluded,e.scope.rootPath,t])})(t),i=(0,s.useRef)(null),o=(0,s.useRef)(null),[l,d]=(0,bl.Z)(i,o),u=(0,s.useMemo)((()=>0!==l&&n?n.all?(0,x.tZ)("span",null,(0,c.t)("All charts")):(0,x.tZ)("div",null,Fl(n.tabs,(0,c.t)("Tabs")),Fl(n.charts,(0,c.t)("Charts"))):null),[l,n]);return(0,x.tZ)(Sl,null,(0,x.tZ)(Cl,null,(0,c.t)("Scope")),(0,x.tZ)(Il,{title:u},(0,x.tZ)(Zl,{ref:i},n?Object.values(n).flat().map(((e,t)=>(0,x.tZ)("span",{key:e},0===t?e:`, ${e}`))):(0,c.t)("None")),d>0&&(0,x.tZ)(kl,{ref:o},"+",l)))})),Ml=e=>{let{dependency:t,hasSeparator:n}=e;const i=(0,r.I0)(),o=(0,s.useCallback)((()=>{i((0,Yn.E2)([t.id]))}),[t.id,i]);return(0,x.tZ)("span",null,n&&(0,x.tZ)("span",null,", "),(0,x.tZ)(Rl,{role:"button",onClick:o,tabIndex:0},t.name))},Ol=s.memo((e=>{let{filter:t}=e;const n=(e=>{const t=(0,Qr.Z)(e.cascadeParentIds);return(0,r.v9)((e=>0===t.length?[]:t.reduce(((t,n)=>(t.push(e.nativeFilters.filters[n]),t)),[])))})(t),i=(0,s.useRef)(null),o=(0,s.useRef)(null),[a,l]=(0,bl.Z)(i,o),d=(0,y.Fg)(),u=(0,s.useMemo)((()=>a>0&&n?(0,x.tZ)(Tl,null,n.map((e=>(0,x.tZ)("li",null,(0,x.tZ)(Ml,{dependency:e}))))):null),[a,n]);return Array.isArray(n)&&0!==n.length?(0,x.tZ)(Sl,null,(0,x.tZ)(Cl,{css:x.iv`
          display: inline-flex;
          align-items: center;
        `},(0,c.t)("Dependent on")," ",(0,x.tZ)(Il,{title:(0,c.t)("Filter only displays values relevant to selections made in other filters.")},(0,x.tZ)(Y.Z.Info,{iconSize:"m",iconColor:d.colors.grayscale.light1,css:x.iv`
              margin-left: ${d.gridUnit}px;
            `}))),(0,x.tZ)(Il,{title:u},(0,x.tZ)(Zl,{ref:i},n.map(((e,t)=>(0,x.tZ)(Ml,{key:e.id,dependency:e,hasSeparator:0!==t})))),l&&(0,x.tZ)(kl,{ref:o},"+",a))):null}));var zl=n(89734),Ul=n.n(zl),Pl=n(44908),Nl=n.n(Pl),Al=n(38325);const ql=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n  cursor: pointer;\n  margin: ${4*t.gridUnit}px;\n  color: ${t.colors.primary.base};\n  &:hover {\n    color: ${t.colors.primary.dark1};\n  }\n`}}
`,Ll=y.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,jl=[{label:(0,c.t)("Filter"),type:no.BE.NATIVE_FILTER},{label:(0,c.t)("Divider"),type:no.BE.DIVIDER}],Vl=e=>{let{getFilterTitle:t,onChange:n,onAdd:i,onRemove:r,onRearrange:o,restoreFilter:a,currentFilterId:l,filters:d,removedFilters:u,erroredFilters:h}=e;const p=(0,s.useRef)(null),m=(0,y.Fg)(),g=(0,x.tZ)(kt.$,{mode:"horizontal"},jl.map((e=>(0,x.tZ)(kt.$.Item,{onClick:()=>{return t=e.type,i(t),void setTimeout((()=>{var e;const t=document.getElementById("native-filters-tabs");if(t){const e=t.getElementsByClassName("ant-tabs-nav-list")[0];e.scrollTop=e.scrollHeight}null==p||null==(e=p.current)||null==e.scroll||e.scroll({top:p.current.scrollHeight,behavior:"smooth"})}),0);var t}},e.label))));return(0,x.tZ)(Ll,null,(0,x.tZ)(H.Gj,{overlay:g,arrow:!0,placement:"topLeft",trigger:["hover"]},(0,x.tZ)(ql,null,(0,x.tZ)("div",{className:"fa fa-plus"})," ",(0,x.tZ)("span",null,(0,c.t)("Add filters and dividers")))),(0,x.tZ)("div",{css:(0,x.iv)({height:"100%",overflowY:"auto",marginLeft:3*m.gridUnit},"","")},(0,x.tZ)(ur,{ref:p,filters:d,currentFilterId:l,removedFilters:u,getFilterTitle:t,erroredFilters:h,onChange:n,onRemove:r,onRearrange:o,restoreFilter:a})))},Kl=y.iK.div`
  display: flex;
  height: 100%;
`,Bl=y.iK.div`
  flex-grow: 3;
  margin-left: ${e=>{let{theme:t}=e;return-1*t.gridUnit-1}};
`,Hl=y.iK.div`
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
`,Wl=e=>{let{getFilterTitle:t,onChange:n,onRemove:i,onRearrange:r,restoreFilter:o,onAdd:a,erroredFilters:s,children:l,currentFilterId:d,filters:c,removedFilters:u}=e;return(0,x.tZ)(Kl,null,(0,x.tZ)(Hl,null,(0,x.tZ)(Vl,{currentFilterId:d,filters:c,removedFilters:u,erroredFilters:s,getFilterTitle:t,onChange:n,onAdd:e=>a(e),onRearrange:r,onRemove:e=>i(e),restoreFilter:o})),(0,x.tZ)(Bl,null,l))};var Yl=n(88889),Jl=n(15926),Xl=n.n(Jl),Gl=n(43700),Ql=n(6412),ed=n(1090),td=n(61890),nd=n(78676);const id=y.iK.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit+2}}px;

  .checkbox {
    margin-bottom: ${e=>{let{theme:t,checked:n}=e;return n?t.gridUnit:0}}px;
  }

  & > div {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }
`,rd=y.iK.div`
  margin-left: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`,od=e=>{const{checked:t,disabled:n,title:i,tooltip:r,children:o,onChange:a=(()=>{}),initialValue:l=!1}=e,[d,c]=(0,s.useState)(l);return(0,s.useEffect)((()=>{void 0!==t&&c(t)}),[t]),(0,x.tZ)(id,{checked:d},(0,x.tZ)(H.r4,{className:"checkbox",checked:d,disabled:n,onChange:e=>{const n=e.target.checked;void 0===t&&c(n),a(n)}},(0,x.tZ)(s.Fragment,null,i," ",r&&(0,x.tZ)(ee.V,{placement:"top",tooltip:r}))),d&&(0,x.tZ)(rd,null,o))};var ad=n(28291);function sd(e){var t;let{allowClear:n=!1,filterValues:i=(()=>!0),form:r,formField:o="column",filterId:l,datasetId:d,value:u,onChange:h,mode:p}=e;const[m,g]=(0,s.useState)(),{addDangerToast:f}=(0,kn.e1)(),v=(0,s.useCallback)((()=>{r.setFields([{name:["filters",l,o],touched:!1,value:null}])}),[r,l,o]),b=(0,s.useMemo)((()=>(0,Qr.Z)(m).filter(i).map((e=>e.column_name)).map((e=>({label:e,value:e})))),[m,i]),y=null==(t=r.getFieldValue("filters"))?void 0:t[l].filterType,S=(0,s.useMemo)((()=>null==m?void 0:m.find((e=>e.column_name===u))),[m,u]);return(0,s.useEffect)((()=>{S&&!i(S)&&v()}),[S,y,v]),(0,ad.S)(d,(e=>{null!=e&&v(),null!=d&&(0,Ql.e)({endpoint:`/api/v1/dataset/${d}?q=${Xl().encode({columns:["columns.column_name","columns.is_dttm","columns.type_generic"]})}`}).then((e=>{let{json:{result:t}}=e;const n=Array.isArray(u)?u:[u];t.columns.some((e=>null==n?void 0:a()(n).call(n,e.column_name)))||v(),g(t.columns)}),(async e=>{const{error:t,message:n}=await(0,ai.O$)(e);let i=n||t||(0,c.t)("An error has occurred");"Forbidden"===n&&(i=(0,c.t)("You do not have permission to edit this dashboard")),f(i)}))})),(0,x.tZ)(H.Ph,{mode:p,value:"multiple"===p?u||[]:u,ariaLabel:(0,c.t)("Column select"),onChange:h,options:b,placeholder:(0,c.t)("Select a column"),notFoundContent:(0,c.t)("No compatible columns found"),showSearch:!0,allowClear:n})}var ld=n(10752),dd=n.n(ld);const cd={filter_time:[Yl.Z.TEMPORAL],filter_timegrain:[Yl.Z.TEMPORAL],filter_timecolumn:[Yl.Z.TEMPORAL],filter_select:[Yl.Z.BOOLEAN,Yl.Z.STRING,Yl.Z.NUMERIC,Yl.Z.TEMPORAL],filter_range:[Yl.Z.NUMERIC]},ud="filters",hd=function(e){void 0===e&&(e=!0);const[,t]=s.useState({});return s.useCallback((()=>{e&&t({})}),[e])},pd=(e,t,n)=>{const i=e.getFieldValue(ud)||{};e.setFields([{name:ud,value:{...i,[t]:{...i[t],...n}}}])},md=e=>({value:e.id,label:e.table_name}),gd=e=>{const t=(0,Qr.Z)(null==e?void 0:e.column_types);return 0===t.length||a()(t).call(t,Yl.Z.TEMPORAL)},fd=e=>{let{onChange:t,value:n}=e;const i=(0,s.useCallback)((e=>{let{error:t,message:n}=e,i=n||t||(0,c.t)("An error has occurred");return"Forbidden"===n&&(i=(0,c.t)("You do not have permission to edit this dashboard")),i}),[]);return(0,x.tZ)(H.qb,{ariaLabel:(0,c.t)("Dataset"),value:n,options:async(e,t,n)=>{const r="table_name",o=Xl().encode({filters:[{col:r,opr:"ct",value:e}],page:t,page_size:n,order_column:r,order_direction:"asc"});return(0,Ql.e)({endpoint:`/api/v1/dataset/?q=${o}`}).then((e=>({data:e.json.result.map(md),totalCount:e.json.count}))).catch((async e=>{const t=i(await(0,ai.O$)(e));throw new Error(t)}))},onChange:t,notFoundContent:(0,c.t)("No compatible datasets found")})},vd=e=>(0,s.useMemo)((()=>(0,x.tZ)(fd,e)),[]),bd=e=>{var t,n,i;let{hasDefaultValue:r,filterId:o,hasDataset:a,form:s,setDataMask:l,formData:d,enableNoResults:u}=e;const h=(s.getFieldValue("filters")||{})[o],m=null==h?void 0:h.defaultValueQueriesData,g=a&&null===m,f=null==h||null==(t=h.defaultDataMask)||null==(n=t.filterState)?void 0:n.value,v=r&&null==f;return g?(0,x.tZ)(p.Z,{position:"inline-centered"}):(0,x.tZ)(tl.Z,{height:32,width:"filter_time"===(null==h?void 0:h.filterType)?350:270,appSection:wi.Tr.FILTER_CONFIG_MODAL,behaviors:[wi.cg.NATIVE_FILTER],formData:d,queriesData:a?null==h?void 0:h.defaultValueQueriesData:[{data:[{}]}],chartType:null==h?void 0:h.filterType,hooks:{setDataMask:l},enableNoResults:u,filterState:{...null==h||null==(i=h.defaultDataMask)?void 0:i.filterState,validateMessage:v&&(0,c.t)("Value is required"),validateStatus:v&&"error"}})};var yd,xd=n(15208);!function(e){e[e.all=0]="all",e[e.specific=1]="specific"}(yd||(yd={}));const Sd=y.iK.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  padding: 0px ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,Cd=(0,y.iK)(H.qz.Item)`
  margin-bottom: 0;
`,Zd=e=>{let{pathToFormValue:t=[],formScopingType:n,formFilterScope:i,forceUpdate:r,filterScope:o,updateFormValues:a,chartId:l,initiallyExcludedCharts:d}=e;const[u]=(0,s.useState)(o||Ai(l,d)),h=(0,s.useRef)(u),[p]=(0,s.useState)(qi(u,l)?yd.all:yd.specific),[m,g]=(0,s.useState)(!!o),f=(0,s.useCallback)((e=>{n===yd.specific&&(h.current=e.scope),a(e),g(!0)}),[n,a]),v=(0,s.useCallback)((()=>{if(o||m)return;const e=Ai(l,d);a({scope:e,scoping:qi(e,l)?yd.all:yd.specific})}),[l,o,m,d,a]);return(0,xd.d)(v),(0,x.tZ)(Sd,null,(0,x.tZ)(Cd,{name:[...t,"scoping"],initialValue:p},(0,x.tZ)(Bt.Y.Group,{onChange:e=>{let{target:{value:t}}=e;const n=t===yd.all?Ai(l):h.current;a({scope:n}),g(!0),r()}},(0,x.tZ)(Bt.Y,{value:yd.all},(0,c.t)("Apply to all panels")),(0,x.tZ)(Bt.Y,{value:yd.specific},(0,c.t)("Apply to specific panels")))),(0,x.tZ)(H.ZT.Text,{type:"secondary"},(null!=n?n:p)===yd.specific?(0,c.t)("Only selected panels will be affected by this filter"):(0,c.t)("All panels with this column will be affected by this filter")),(null!=n?n:p)===yd.specific&&(0,x.tZ)(Vi,{updateFormValues:f,initialScope:u,formScope:i,forceUpdate:r,chartId:l,initiallyExcludedCharts:d}),(0,x.tZ)(Cd,{name:[...t,"scope"],hidden:!0,initialValue:u}))};var wd=n(37687);const Rd=(0,y.iK)(At.xJ)`
  margin-bottom: 0;
`;const kd=y.iK.div`
  display: flex;
  flex-direction: column;
  height: 400px; // arbitrary
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,Td=e=>{let{onClick:t}=e;return(0,x.tZ)(kd,null,(0,x.tZ)("p",null,(0,c.t)("You have removed this filter.")),(0,x.tZ)("div",null,(0,x.tZ)(W.Z,{buttonStyle:"primary",onClick:t},(0,c.t)("Restore Filter"))))},$d=y.iK.div`
  display: flex;
  flex-direction: column;
`,Dd=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    color: ${t.colors.primary.base};\n    &:hover {\n      color: ${t.colors.primary.dark1};\n    }\n  `}}
`,_d=(0,y.iK)(Y.Z.Trash)`
  ${e=>{let{theme:t}=e;return`\n    cursor: pointer;\n    margin-left: ${2*t.gridUnit}px;\n    color: ${t.colors.grayscale.base};\n    &:hover {\n      color: ${t.colors.grayscale.dark1};\n    }\n  `}}
`,Id=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: ${t.gridUnit}px;\n\n    & > div {\n      width: 270px;\n    }\n  `}}
`,Fd=y.iK.div`
  text-transform: uppercase;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,Ed=e=>{let{availableFilters:t,selection:n,onChange:i,onDelete:r}=e,o=t.find((e=>e.value===n)),a=t;return o||(o={label:(0,c.t)("(deleted or invalid type)"),value:n},a=[o,...a]),(0,x.tZ)(Id,null,(0,x.tZ)(H.Ph,{ariaLabel:(0,c.t)("Limit type"),labelInValue:!0,options:a,onChange:e=>i(n,e.value),value:o}),(0,x.tZ)(_d,{iconSize:"xl",onClick:()=>r(n)}))},Md=e=>{let{availableFilters:t=[],dependencies:n=[],onDependenciesChange:i}=e;const[r,o]=(0,s.useState)(n),l=e=>{o(e),i(e)},d=(e,t)=>{const n=r.findIndex((t=>t===e)),i=[...r];i[n]=t,l(i)},u=e=>{const t=[...r];t.splice(r.indexOf(e),1),l(t)};return 0===t.length?(0,x.tZ)("span",null,(0,c.t)("No available filters.")):(0,x.tZ)(s.Fragment,null,r.map((e=>(0,x.tZ)(Ed,{key:e,selection:e,availableFilters:t.filter((t=>t.value===e||!a()(r).call(r,t.value))),onChange:d,onDelete:u}))),t.length>r.length&&(0,x.tZ)(Dd,{onClick:()=>{const e=t.find((e=>!a()(r).call(r,e.value)));if(e){const t=[...r];t.push(e.value),l(t)}}},(0,x.tZ)(Y.Z.PlusSmall,null),(0,c.t)("Add filter")))},Od=e=>{let{availableFilters:t=[],dependencies:n=[],onDependenciesChange:i,getDependencySuggestion:r,children:o}=e;const a=t.length>0,s=n.length>0;return(0,x.tZ)($d,null,(0,x.tZ)(od,{title:(0,c.t)("Values are dependent on other filters"),initialValue:s,onChange:e=>{const t=[];e&&!s&&a&&t.push(r()),i(t)},tooltip:(0,c.t)("Values selected in other filters will affect the filter options to only show relevant values")},s&&(0,x.tZ)(Fd,null,(0,c.t)("Values dependent on")),(0,x.tZ)(Md,{availableFilters:t,dependencies:n,onDependenciesChange:i,getDependencySuggestion:r}),o))},zd=(0,y.iK)(R.ZP.TabPane)`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px 0px;
`,Ud=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    padding: 0px ${4*t.gridUnit}px;\n  `}}
`,Pd=y.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,Nd=["enableEmptyFilter","defaultToFirstItem","multiSelect","searchAllOptions","inverseSelection"],Ad=(0,y.iK)(At.xJ)`
  width: 49%;
  margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  & .ant-form-item-control-input {
    min-height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
`,qd=(0,y.iK)(At.xJ)`
  margin-bottom: 0;
  padding-bottom: 0;
  min-width: 50%;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  & .ant-form-item-control-input {
    min-height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
`,Ld=(0,y.iK)(At.xJ)`
  min-width: 50%;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  .ant-form-item-extra {
    display: none;
  }

  & .ant-form-item-control-input {
    height: auto;
  }
`,jd=y.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  text-transform: uppercase;
`,Vd=(0,y.iK)(At.xJ)`
  margin-bottom: 0;
`,Kd=y.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Bd=(0,y.iK)(Y.Z.Refresh)`
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
`,Hd=(0,y.iK)(Gl.Z)`
  border-left: 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  border-radius: 0;

  .ant-collapse-header {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    margin-top: -1px;
    border-radius: 0;
  }

  .ant-collapse-content {
    border: 0;
  }

  .ant-collapse-content-box {
    padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &.ant-collapse > .ant-collapse-item {
    border: 0;
    border-radius: 0;
  }
`,Wd=(0,y.iK)(R.ZP)`
  .ant-tabs-nav {
    position: sticky;
    top: 0;
    background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    z-index: 1;
  }

  .ant-tabs-nav-list {
    padding: 0;
  }

  .ant-form-item-label {
    padding-bottom: 0;
  }
`,Yd=y.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-left: ${e=>{let{theme:t}=e;return t.gridUnit-1}}px;
  &:before {
    content: '*';
  }
`,Jd=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    width: 49%;\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.light1};\n    margin:\n      ${2*-t.gridUnit}px\n      0px\n      ${4*t.gridUnit}px\n      ${4*t.gridUnit}px;\n  `}}
`,Xd={configuration:{key:"configuration",name:(0,c.t)("Settings")},scoping:{key:"scoping",name:(0,c.t)("Scoping")}},Gd={configuration:{key:"configuration",name:(0,c.t)("Filter Configuration")},settings:{key:"settings",name:(0,c.t)("Filter Settings")}},Qd=["filter_select","filter_range"],ec={[(0,c.t)("Select filter")]:(0,c.t)("Value"),[(0,c.t)("Range filter")]:(0,c.t)("Numerical range"),[(0,c.t)("Time filter")]:(0,c.t)("Time range"),[(0,c.t)("Time column")]:(0,c.t)("Time column"),[(0,c.t)("Time grain")]:(0,c.t)("Time grain"),[(0,c.t)("Group By")]:(0,c.t)("Group by")},tc=(e,t)=>{var n,i,o,l,d,h,m,g,f,v,b,y,S,C,Z,w,R,k,T,$,D,_,I,F,E;let{filterId:M,filterToEdit:O,removedFilters:z,form:U,getAvailableFilters:P,activeFilterPanelKeys:N,restoreFilter:A,handleActiveFilterPanelChange:q,setErroredFilters:L,validateDependencies:j,getDependencySuggestion:V,isActive:K}=e;const W=!!z[M],[Y,J]=(0,s.useState)(),[X,G]=(0,s.useState)([]),[Q,te]=(0,s.useState)(Xd.configuration.key),[ie,oe]=(0,s.useState)(null),ae=hd(K),[se,le]=(0,s.useState)(),de=(0,s.useMemo)((()=>({})),[]),ce=U.getFieldValue("filters"),ue=null==ce?void 0:ce[M],he=ue||ie||de,pe=(null==he?void 0:he.dependencies)||(null==O?void 0:O.cascadeParentIds)||[],me=(0,Zi.Z)().items,ge=Object.entries(me).filter((e=>{var t;let[,{value:n}]=e;return null==(t=n.behaviors)?void 0:a()(t).call(t,wi.cg.NATIVE_FILTER)})).map((e=>{let[t]=e;return t})),fe=(0,r.v9)((e=>{let{datasources:t}=e;return t})),ve=(0,r.v9)((e=>{let{charts:t}=e;return t})),be=(0,s.useMemo)((()=>Object.values(fe).some((e=>gd(e)))),[fe]),ye=(0,s.useMemo)((()=>{const e=Object.values(fe).find((e=>{var t;return e.id===(null==he||null==(t=he.dataset)?void 0:t.value)}));return!e||gd(e)}),[null==he||null==(n=he.dataset)?void 0:n.value,fe]),xe=!(null==(i=me[null==he?void 0:he.filterType])||null==(o=i.value)||!o.datasourceCount),Se=null!=(l=null!=(d=null==he||null==(h=he.dataset)?void 0:h.value)?d:null==O||null==(m=O.targets[0])?void 0:m.datasetId)?l:((e,t)=>{var n;const i=new Map;let r="",o=0;return Object.values(t).forEach((e=>{const{form_data:t}=e;if(t){const{datasource:e}=t,n=(i.get(e)||0)+1;i.set(e,n),n>o&&(o=n,r=e)}})),null==(n=e[r])?void 0:n.id})(fe,ve),{controlItems:Ce={},mainControlItems:Ze={}}=he?function(e){var t;let{datasetId:n,disabled:i,forceUpdate:r,form:o,filterId:l,filterType:d,filterToEdit:u,formFilter:h,removed:p}=e;const m=null!=(void 0===(g=(0,wd.Z)().get(d))&&(g={}),t=null!=(f=null==(v=dd()(g.controlPanelSections))?void 0:v.reduce(((e,t)=>{let{controlSetRows:n=[]}=t;return[...e,...dd()(n)]}),[]))?f:[])?t:[];var g,f,v;const b={},y={};return m.filter((e=>"groupby"===(null==e?void 0:e.name))).forEach((e=>{var t,i,d,m,g,f,v,b,S;const C=null!=(t=null==u||null==(i=u.controlValues)?void 0:i[e.name])?t:null==e||null==(d=e.config)?void 0:d.default,Z=null==u||null==(m=u.targets[0])||null==(g=m.column)?void 0:g.name,w=(0,x.tZ)(s.Fragment,null,(0,x.tZ)(Rd,{name:["filters",l,"requiredFirst",e.name],hidden:!0,initialValue:(null==e||null==(f=e.config)?void 0:f.requiredFirst)&&(null==u?void 0:u.requiredFirst)}),(0,x.tZ)(Ad,{name:["filters",l,"column"],initialValue:Z,label:(0,x.tZ)(jd,null,(null==(v=e.config)?void 0:v.label)||(0,c.t)("Column")),rules:[{required:(null==(b=e.config)?void 0:b.required)&&!p,message:(0,c.t)("Column is required")}]},(0,x.tZ)(sd,{mode:(null==(S=e.config)?void 0:S.multiple)&&"multiple",form:o,filterId:l,datasetId:n,filterValues:e=>((e,t)=>{var n;return!t.type_generic||!(e in cd)||(null==(n=cd[e])?void 0:a()(n).call(n,t.type_generic))})((null==h?void 0:h.filterType)||"",e),onChange:()=>{pd(o,l,{defaultDataMask:null}),r()}})));y[e.name]={element:w,checked:C}})),m.filter((e=>{var t;return(null==e||null==(t=e.config)?void 0:t.renderTrigger)&&"sortAscending"!==e.name&&"enableSingleValue"!==e.name})).forEach((e=>{var t,n,a,d;const p=null!=(t=null==u||null==(n=u.controlValues)?void 0:n[e.name])?t:null==e||null==(a=e.config)?void 0:a.default,m=(0,x.tZ)(s.Fragment,null,(0,x.tZ)(Rd,{name:["filters",l,"requiredFirst",e.name],hidden:!0,initialValue:(null==e||null==(d=e.config)?void 0:d.requiredFirst)&&(null==u?void 0:u.requiredFirst)}),(0,x.tZ)(re.u,{key:e.name,placement:"left",title:e.config.affectsDataMask&&i&&(0,c.t)('Populate "Default value" to enable this control')},(0,x.tZ)(qd,{key:e.name,name:["filters",l,"controlValues",e.name],initialValue:p,valuePropName:"checked",colon:!1},(0,x.tZ)(H.r4,{disabled:e.config.affectsDataMask&&i,onChange:t=>{let{target:{checked:n}}=t;e.config.requiredFirst&&pd(o,l,{requiredFirst:{...null==h?void 0:h.requiredFirst,[e.name]:n}}),e.config.resetConfig&&pd(o,l,{defaultDataMask:null}),r()}},e.config.label," ",e.config.description&&(0,x.tZ)(ee.V,{placement:"top",label:e.config.name,tooltip:e.config.description})))));b[e.name]={element:m,checked:p}})),{controlItems:b,mainControlItems:y}}({datasetId:Se,disabled:!1,forceUpdate:ae,form:U,filterId:M,filterType:null==he?void 0:he.filterType,filterToEdit:O,formFilter:he,removed:W}):{},we=!!Ze.groupby,Re=!(null==(f=(null!=(g=me[null==he?void 0:he.filterType])?g:{}).value)||!f.enableNoResults),ke=we&&!!X.length,Te=!xe||Se&&((null==he?void 0:he.column)||!we),$e=a()(Qd).call(Qd,null==he?void 0:he.filterType),De=a()(mc).call(mc,null==he?void 0:he.filterType),_e=null==(v=null==he?void 0:he.isDataDirty)||v,Ie=e=>{pd(U,M,e),J(void 0),ae()};let Fe={};pe&&pe.length>0&&ce&&pe.forEach((e=>{var t,n;const i=null==(t=ce[e])||null==(n=t.defaultDataMask)?void 0:n.extraFormData;Fe=(0,ul.on)(Fe,i)}));const Ee=JSON.stringify(Fe),Me=(0,s.useCallback)((function(e){var t,n;if(void 0===e&&(e=!1),!xe||null==he||null==(t=he.dataset)||!t.value)return void ae();const i=(0,ul.zi)({datasetId:null==he||null==(n=he.dataset)?void 0:n.value,groupby:null==he?void 0:he.column,...he});i.extra_form_data=Fe,Ie({defaultValueQueriesData:null,isDataDirty:!1}),(0,ui.getChartDataRequest)({formData:i,force:e,requestParams:{dashboardId:0}}).then((e=>{let{response:t,json:n}=e;if((0,yt.c)(u.T.GLOBAL_ASYNC_QUERIES)){const e="result"in n?n.result[0]:n;if(200===t.status)Ie({defaultValueQueriesData:[e]});else{if(202!==t.status)throw new Error(`Received unexpected response status (${t.status}) while fetching chart data`);(0,sl.YJ)(e).then((e=>{Ie({defaultValueQueriesData:e})})).catch((e=>{(0,ai.O$)(e).then((e=>{(e=>{pd(U,M,{defaultValueQueriesData:null}),J(e),ae()})(e)}))}))}}else Ie({defaultValueQueriesData:n.result})})).catch((e=>{(0,ai.O$)(e).then((e=>{J(e)}))}))}),[M,ae,U,he,xe,Ee]);(0,s.useEffect)((()=>Me()),[Ee]);const Oe=(0,ul.zi)({datasetId:Se,groupby:we?null==he?void 0:he.column:void 0,...he});Oe.extra_form_data=Fe;const[ze,Ue,Pe,Ne]=((e,t)=>{var n,i;const r=!(null==e||null==(n=e.controlValues)||!n.enableEmptyFilter),o=!(null==e||null==(i=e.controlValues)||!i.defaultToFirstItem),[a,l]=(0,s.useState)(!1),[d,u]=(0,s.useState)(r),[h,p]=(0,s.useState)(""),m=function(e){void 0===e&&(e=!1);const t=r&&!o;u(t),l(!!t||e)};return(0,s.useEffect)((()=>{var t,n;m(!o&&!(null==e||null==(t=e.defaultDataMask)||null==(n=t.filterState)||!n.value))}),[o,r]),(0,s.useEffect)((()=>{var e,n;m(!o&&!(null==t||null==(e=t.defaultDataMask)||null==(n=e.filterState)||!n.value))}),[]),(0,s.useEffect)((()=>{let e="";o?e=(0,c.t)('Default value set automatically when "Select first filter value by default" is checked'):d?e=(0,c.t)('Default value must be set when "Filter value is required" is checked'):a&&(e=(0,c.t)('Default value must be set when "Filter has default value" is checked')),p(e)}),[a,d,o]),[a,d,h,m]})(he,O),Ae=!Se||se||(null==he||null==(b=he.dataset)?void 0:b.label),qe=(0,s.useCallback)((()=>{U.setFields([{name:"changed",value:!0}])}),[U]),Le=(0,s.useCallback)((e=>{pd(U,M,e),qe()}),[M,U,qe]),je=!!(null!=he&&he.adhoc_filters||null!=he&&he.time_range||null!=O&&null!=(y=O.adhoc_filters)&&y.length||null!=O&&O.time_range),Ve=void 0!==(null==he||null==(S=he.controlValues)?void 0:S.enableSingleValue)||void 0!==(null==O||null==(C=O.controlValues)?void 0:C.enableSingleValue);let Ke=null==O||null==(Z=O.controlValues)?void 0:Z.enableSingleValue;void 0!==(null==he||null==(w=he.controlValues)?void 0:w.enableSingleMaxValue)&&({enableSingleValue:Ke}=he.controlValues);const Be="boolean"==typeof(null==he||null==(R=he.controlValues)?void 0:R.sortAscending)||"boolean"==typeof(null==O||null==(k=O.controlValues)?void 0:k.sortAscending);let He=null==O||null==(T=O.controlValues)?void 0:T.sortAscending;"boolean"==typeof(null==he||null==($=he.controlValues)?void 0:$.sortAscending)&&(He=he.controlValues.sortAscending);const We=!xe||!_e&&Te||!Ze.groupby,Ye=e=>{var t;const n=null==(t=U.getFieldValue("filters"))?void 0:t[M].controlValues;pd(U,M,{controlValues:{...n,sortAscending:e}}),ae()},Je=e=>{var t;const n=null==(t=U.getFieldValue("filters"))?void 0:t[M].controlValues;pd(U,M,{controlValues:{...n,enableSingleValue:e}}),ae()},Xe=()=>setTimeout((()=>U.validateFields([["filters",M,"adhoc_filters"],["filters",M,"time_range"]])),0),Ge=(null==he?void 0:he.time_range)&&"No filter"!==he.time_range,Qe=(null==he||null==(D=he.adhoc_filters)?void 0:D.length)>0,et=null==he||null==(_=he.controlValues)?void 0:_.defaultToFirstItem,tt=(null==he?void 0:he.filterType)===(null==O?void 0:O.filterType)?null==O?void 0:O.defaultDataMask:null,nt=()=>Ge||Qe?Promise.resolve():Promise.reject(new Error((0,c.t)("Pre-filter is required"))),it=P(M),rt=it.length>0,ot=it.filter((e=>"filter_time"===e.type)).some((e=>null==pe?void 0:a()(pe).call(pe,e.value)));(0,s.useEffect)((()=>{Se&&(0,Ql.e)({endpoint:`/api/v1/dataset/${Se}?q=${Xl().encode({columns:["columns.column_name","columns.expression","columns.filterable","columns.is_dttm","columns.type","columns.verbose_name","database.id","database.database_name","datasource_type","filter_select_enabled","id","is_sqllab_view","main_dttm_col","metrics.metric_name","metrics.verbose_name","schema","sql","table_name"]})}`}).then((e=>{var t,n,i;G(null==(t=e.json)||null==(n=t.result)?void 0:n.metrics);const r=null==(i=e.json)?void 0:i.result;r.type=r.datasource_type,r.filter_select=!0,le(r)})).catch((e=>{(0,Xn.Gb)(e.message)}))}),[Se]),(0,s.useImperativeHandle)(t,(()=>({changeTab(e){te(e)}}))),((e,t)=>{var n;const i=hd(),r=(e.getFieldValue("filters")||{})[t];(0,s.useEffect)((()=>{pd(e,t,{isDataDirty:!0,defaultValueQueriesData:null}),i()}),[e,null==r?void 0:r.filterType,null==r?void 0:r.column,null==r||null==(n=r.dataset)?void 0:n.value,JSON.stringify(null==r?void 0:r.adhoc_filters),null==r?void 0:r.time_range,i,t])})(U,M),(0,s.useEffect)((()=>{xe&&Te&&ze&&_e&&Me()}),[xe,Te,ze,_e,Me,Ae]);const at=(0,s.useMemo)((()=>{var e;const t=[];return void 0===(null==he||null==(e=he.dataset)?void 0:e.value)?[]:(Object.values(ve).forEach((e=>{var n,i,r;const o=null==(n=e.form_data)?void 0:n.datasource;void 0!==o&&(null==(i=fe[o])?void 0:i.id)!==(null==he||null==(r=he.dataset)?void 0:r.value)&&t.push(e.id)})),t)}),[JSON.stringify(ve),null==he||null==(I=he.dataset)?void 0:I.value,JSON.stringify(fe)]);if((0,s.useEffect)((()=>{W&&oe(ue)}),[W]),(0,s.useEffect)((()=>{ie&&!W&&(pd(U,M,ie),oe(null))}),[ue,M,U,W,ie]),W)return(0,x.tZ)(Td,{onClick:()=>A(M)});const st=(0,x.tZ)(qd,{name:["filters",M,"granularity_sqla"],label:(0,x.tZ)(s.Fragment,null,(0,x.tZ)(jd,null,(0,c.t)("Time column"))," ",(0,x.tZ)(ee.V,{placement:"top",tooltip:ot?(0,c.t)("Time column to apply dependent temporal filter to"):(0,c.t)("Time column to apply time range to")})),initialValue:null==O?void 0:O.granularity_sqla},(0,x.tZ)(sd,{allowClear:!0,form:U,formField:"granularity_sqla",filterId:M,filterValues:e=>!!e.is_dttm,datasetId:Se,onChange:e=>{pd(U,M,{granularity_sqla:e}),ae()}}));return(0,x.tZ)(Wd,{activeKey:Q,onChange:e=>te(e),centered:!0},(0,x.tZ)(zd,{tab:Xd.configuration.name,key:Xd.configuration.key,forceRender:!0},(0,x.tZ)(Ud,null,(0,x.tZ)(Ad,{name:["filters",M,"type"],hidden:!0,initialValue:no.BE.NATIVE_FILTER},(0,x.tZ)(B.II,null)),(0,x.tZ)(Ad,{name:["filters",M,"name"],label:(0,x.tZ)(jd,null,(0,c.t)("Filter name")),initialValue:null==O?void 0:O.name,rules:[{required:!W,message:(0,c.t)("Name is required")}]},(0,x.tZ)(B.II,pc("name-input"))),(0,x.tZ)(Ad,ne()({name:["filters",M,"filterType"],rules:[{required:!W,message:(0,c.t)("Name is required")}],initialValue:(null==O?void 0:O.filterType)||"filter_select",label:(0,x.tZ)(jd,null,(0,c.t)("Filter Type"))},pc("filter-type")),(0,x.tZ)(H.Ph,{ariaLabel:(0,c.t)("Filter type"),options:ge.map((e=>{var t,n,i;const r=null==(t=me[e])?void 0:t.value.name,o=r?ec[r]:void 0,s=1===(null==(n=cd[e])?void 0:n.length)&&(null==(i=cd[e])?void 0:a()(i).call(i,Yl.Z.TEMPORAL))&&!be;return{value:e,label:o||r,customLabel:s?(0,x.tZ)(re.u,{title:(0,c.t)("Datasets do not contain a temporal column")},o||r):void 0,disabled:s}})),onChange:e=>{pd(U,M,{filterType:e,defaultDataMask:null,column:null}),ae()}}))),"filter_time"===(null==he?void 0:he.filterType)&&(0,x.tZ)(Jd,null,(0,c.t)("Dashboard time range filters apply to temporal columns defined in\n          the filter section of each chart. Add temporal columns to the chart\n          filters to have this dashboard filter impact those charts.")),xe&&(0,x.tZ)(Pd,null,Ae?(0,x.tZ)(Ad,ne()({name:["filters",M,"dataset"],label:(0,x.tZ)(jd,null,(0,c.t)("Dataset")),initialValue:se?{label:se.table_name,value:se.id}:void 0,rules:[{required:!W,message:(0,c.t)("Dataset is required")}]},pc("datasource-input")),(0,x.tZ)(vd,{onChange:e=>{e.value!==Se&&pd(U,M,{dataset:e,defaultDataMask:null,column:null}),ae()}})):(0,x.tZ)(Ad,{label:(0,x.tZ)(jd,null,(0,c.t)("Dataset"))},(0,x.tZ)(p.Z,{position:"inline-centered"})),xe&&Object.keys(Ze).map((e=>Ze[e].element))),(0,x.tZ)(Hd,{defaultActiveKey:N,onChange:e=>{q(e)},expandIconPosition:"right",key:`native-filter-config-${M}`},"filter_time"!==(null==he?void 0:he.filterType)&&(0,x.tZ)(Gl.Z.Panel,{forceRender:!0,header:Gd.configuration.name,key:`${M}-${Gd.configuration.key}`},De&&rt&&(0,x.tZ)(qd,{name:["filters",M,"dependencies"],initialValue:pe},(0,x.tZ)(Od,{availableFilters:it,dependencies:pe,onDependenciesChange:e=>{pd(U,M,{dependencies:e}),ae(),j(),qe()},getDependencySuggestion:()=>V(M)},ot?st:void 0)),xe&&$e&&(0,x.tZ)(Vd,{name:["filters",M,"preFilter"]},(0,x.tZ)(od,{initialValue:je,title:(0,c.t)("Pre-filter available values"),tooltip:(0,c.t)("Add filter clauses to control the filter's source query,\n                    though only in the context of the autocomplete i.e., these conditions\n                    do not impact how the filter is applied to the dashboard. This is useful\n                    when you want to improve the query's performance by only scanning a subset\n                    of the underlying data or limit the available values displayed in the filter."),onChange:e=>{qe(),e&&Xe()}},(0,x.tZ)(Ld,{name:["filters",M,"adhoc_filters"],css:(0,x.iv)({width:270},"",""),initialValue:null==O?void 0:O.adhoc_filters,required:!0,rules:[{validator:nt}]},(0,x.tZ)(td.Z,{columns:(null==se||null==(F=se.columns)?void 0:F.filter((e=>e.filterable)))||[],savedMetrics:(null==se?void 0:se.metrics)||[],datasource:se,onChange:e=>{pd(U,M,{adhoc_filters:e}),ae(),Xe()},label:(0,x.tZ)("span",null,(0,x.tZ)(jd,null,(0,c.t)("Pre-filter")),!Ge&&(0,x.tZ)(Yd,null))})),ye&&(0,x.tZ)(qd,{name:["filters",M,"time_range"],label:(0,x.tZ)(jd,null,(0,c.t)("Time range")),initialValue:(null==O?void 0:O.time_range)||(0,c.t)("No filter"),required:!Qe,rules:[{validator:nt}]},(0,x.tZ)(ed.ZP,{name:"time_range",onChange:e=>{pd(U,M,{time_range:e}),ae(),Xe()}})),Ge&&!ot?st:void 0)),"filter_range"!==(null==he?void 0:he.filterType)?(0,x.tZ)(Vd,{name:["filters",M,"sortFilter"]},(0,x.tZ)(od,{initialValue:Be,title:(0,c.t)("Sort filter values"),onChange:e=>{Ye(e||void 0),qe()}},(0,x.tZ)(qd,{name:["filters",M,"controlValues","sortAscending"],initialValue:He,label:(0,x.tZ)(jd,null,(0,c.t)("Sort type"))},(0,x.tZ)(Bt.Y.Group,{onChange:e=>{Ye(e.target.value)}},(0,x.tZ)(Bt.Y,{value:!0},(0,c.t)("Sort ascending")),(0,x.tZ)(Bt.Y,{value:!1},(0,c.t)("Sort descending")))),ke&&(0,x.tZ)(Ld,{name:["filters",M,"sortMetric"],initialValue:null==O?void 0:O.sortMetric,label:(0,x.tZ)(s.Fragment,null,(0,x.tZ)(jd,null,(0,c.t)("Sort Metric"))," ",(0,x.tZ)(ee.V,{placement:"top",tooltip:(0,c.t)("If a metric is specified, sorting will be done based on the metric value")}))},(0,x.tZ)(H.Ph,{allowClear:!0,ariaLabel:(0,c.t)("Sort metric"),name:"sortMetric",options:X.map((e=>{var t;return{value:e.metric_name,label:null!=(t=e.verbose_name)?t:e.metric_name}})),onChange:e=>{void 0!==e&&(pd(U,M,{sortMetric:e}),ae())}})))):(0,x.tZ)(Vd,{name:["filters",M,"rangeFilter"]},(0,x.tZ)(od,{initialValue:Ve,title:(0,c.t)("Single Value"),onChange:e=>{Je(e?nd.c.Exact:void 0),qe()}},(0,x.tZ)(qd,{name:["filters",M,"controlValues","enableSingleValue"],initialValue:Ke,label:(0,x.tZ)(jd,null,(0,c.t)("Single value type"))},(0,x.tZ)(Bt.Y.Group,{onChange:e=>Je(e.target.value)},(0,x.tZ)(Bt.Y,{value:nd.c.Minimum},(0,c.t)("Minimum")),(0,x.tZ)(Bt.Y,{value:nd.c.Exact},(0,c.t)("Exact")),(0,x.tZ)(Bt.Y,{value:nd.c.Maximum},(0,c.t)("Maximum"))))))),(0,x.tZ)(Gl.Z.Panel,{forceRender:!0,header:Gd.settings.name,key:`${M}-${Gd.settings.key}`},(0,x.tZ)(Ad,{name:["filters",M,"description"],initialValue:null==O?void 0:O.description,label:(0,x.tZ)(jd,null,(0,c.t)("Description"))},(0,x.tZ)(B.Kx,null)),(0,x.tZ)(Vd,{name:["filters",M,"defaultValueQueriesData"],hidden:!0,initialValue:null}),(0,x.tZ)(Vd,{name:["filters",M,"defaultValue"]},(0,x.tZ)(od,{checked:ze,disabled:Ue||et,initialValue:ze,title:(0,c.t)("Filter has default value"),tooltip:Pe,onChange:e=>{Ne(e),e||pd(U,M,{defaultDataMask:null}),qe()}},!W&&(0,x.tZ)(Ld,{name:["filters",M,"defaultDataMask"],initialValue:tt,label:(0,x.tZ)(jd,null,(0,c.t)("Default Value")),required:ze,rules:[{validator:()=>{var e,t;if(null!=he&&null!=(e=he.defaultDataMask)&&null!=(t=e.filterState)&&t.value){const e=U.getFieldsError();return L((t=>t.length&&!e.find((e=>e.errors.length>0))?[]:t)),Promise.resolve()}return L((e=>a()(e).call(e,M)?e:[...e,M])),Promise.reject(new Error((0,c.t)("Default value is required")))}}]},Y||We?(0,x.tZ)(Kd,null,Y?(0,x.tZ)(al.Z,{error:null==(E=Y.errors)?void 0:E[0],fallback:(0,x.tZ)(ol,{title:(0,c.t)("Cannot load filter"),body:Y.error,level:"error"})}):(0,x.tZ)(bd,{setDataMask:e=>{var t,n;mi()(null==tt||null==(t=tt.filterState)?void 0:t.value,null==e||null==(n=e.filterState)?void 0:n.value)||qe(),pd(U,M,{defaultDataMask:e}),U.validateFields([["filters",M,"defaultDataMask"]]),ae()},hasDefaultValue:ze,filterId:M,hasDataset:xe,form:U,formData:Oe,enableNoResults:Re}),xe&&Se&&(0,x.tZ)(re.u,{title:(0,c.t)("Refresh the default values")},(0,x.tZ)(Bd,{onClick:()=>Me(!0)}))):(0,c.t)('Fill all required fields to enable "Default Value"')))),Object.keys(Ce).sort(((e,t)=>Nd.indexOf(e)-Nd.indexOf(t))).map((e=>Ce[e].element))))),(0,x.tZ)(zd,{tab:Xd.scoping.name,key:Xd.scoping.key,forceRender:!0},(0,x.tZ)(Zd,{updateFormValues:Le,pathToFormValue:["filters",M],forceUpdate:ae,filterScope:null==O?void 0:O.scope,formFilterScope:null==he?void 0:he.scope,formScopingType:null==he?void 0:he.scoping,initiallyExcludedCharts:at})))},nc=s.memo((0,s.forwardRef)(tc));var ic={name:"1216n71",styles:"text-align:left;flex:1;& .ant-alert-action{align-self:center;}"},rc={name:"zjik7",styles:"display:flex"};function oc(e){let{title:t,onConfirm:n,onDismiss:i,children:r}=e;return(0,x.tZ)(Nt.Z,{closable:!1,type:"warning",key:"alert",message:t,css:ic,description:r,action:(0,x.tZ)("div",{css:rc},(0,x.tZ)(W.Z,{key:"cancel",buttonSize:"small",buttonStyle:"secondary",onClick:i},(0,c.t)("Keep editing")),(0,x.tZ)(W.Z,{key:"submit",buttonSize:"small",buttonStyle:"primary",onClick:n},(0,c.t)("Yes, cancel")))})}const ac=e=>{let{canSave:t=!0,onCancel:n,handleSave:i,onDismiss:r,onConfirmCancel:o,saveAlertVisible:a}=e;return a?(0,x.tZ)(oc,{key:"cancel-confirm",title:(0,c.t)("There are unsaved changes."),onConfirm:o,onDismiss:r},(0,c.t)("Are you sure you want to cancel?")):(0,x.tZ)(s.Fragment,null,(0,x.tZ)(W.Z,{key:"cancel",buttonStyle:"secondary",onClick:n},(0,c.t)("Cancel")),(0,x.tZ)(W.Z,{disabled:!t,key:"submit",buttonStyle:"primary",onClick:i},(0,c.t)("Save")))},sc=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: ${4*t.gridUnit}px;\n  `}}
`,lc=e=>{let{componentId:t,divider:n}=e;return(0,x.tZ)(sc,null,(0,x.tZ)(At.xJ,{initialValue:n?n.title:"",label:(0,c.t)("Title"),name:["filters",t,"title"],rules:[{required:!0,message:(0,c.t)("Title is required"),whitespace:!0}]},(0,x.tZ)(B.II,null)),(0,x.tZ)(At.xJ,{initialValue:n?n.description:"",label:(0,c.t)("Description"),name:["filters",t,"description"]},(0,x.tZ)(B.Kx,{rows:4})),(0,x.tZ)(At.xJ,{hidden:!0,name:["filters",t,"type"],initialValue:no.BE.DIVIDER}))},dc=(0,y.iK)(Rn.o)`
  min-width: ${880}px;
  width: ${e=>{let{expanded:t}=e;return t?"100%":880}} !important;

  @media (max-width: ${912}px) {
    width: 100% !important;
    min-width: auto;
  }

  .ant-modal-body {
    padding: 0px;
  }

  ${e=>{let{expanded:t}=e;return t&&x.iv`
      height: 100%;

      .ant-modal-body {
        flex: 1 1 auto;
      }
      .ant-modal-content {
        height: 100%;
      }
    `}}
`,cc=y.iK.div`
  display: flex;
  height: ${e=>{let{expanded:t}=e;return t?"100%":"700px"}};
  flex-direction: row;
  flex: 1;
  .filters-list {
    width: ${e=>{let{theme:t}=e;return 50*t.gridUnit}}px;
    overflow: auto;
  }
`,uc=(0,y.iK)(H.qz)`
  width: 100%;
`,hc=y.iK.div`
  margin-left: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,pc=ys("filters-config-modal"),mc=["filter_range","filter_select","filter_time"],gc=[],fc={},vc={filters:{}};function bc(e){let{isOpen:t,initialFilterId:n,createNewOnOpen:i,onSave:o,onCancel:l}=e;const d=(0,r.I0)(),u=(0,y.Fg)(),[h]=H.qz.useForm(),p=(0,s.useRef)(),m=js(),g=function(){const e=js();return(0,s.useMemo)((()=>e.reduce(((e,t)=>(e[t.id]=t,e)),{})),[e])}(),[f,v]=(0,s.useState)(gc),[b,S]=(0,s.useState)(fc),[C,w]=(0,s.useState)(!1),R=(0,s.useMemo)((()=>Nl()([...(0,ws.QN)(m),...f]).filter((e=>{var t;return!b[e]||(null==(t=b[e])?void 0:t.isPending)}))),[m,f,b]),k=null!=n?n:R[0],[T,$]=(0,s.useState)(k),[D,I]=(0,s.useState)(gc),[F,E]=(0,s.useState)(vc),M=f.filter((e=>!b[e])),O=(0,s.useCallback)((e=>{const t=b[e];null!=t&&t.isPending&&clearTimeout(t.timerId),S((t=>({...t,[e]:null})))}),[b]),z=(0,s.useMemo)((()=>Object.keys(g)),[g]),[U,P]=(0,s.useState)(z),[N,A]=(0,s.useState)([k]),q=e=>[`${e}-${Gd.configuration.key}`,`${e}-${Gd.settings.key}`],[L,j]=(0,s.useState)(q(k)),V=(0,s.useCallback)((e=>{const t=(0,ws.W6)(e);v([...f,t]),$(t),w(!1),P([...U,t]),j(q(t))}),[f,U,$,P,v]);((e,t,n)=>{const i=(0,Pr.D)(e);(0,s.useEffect)((()=>{n&&e&&!i&&t(no.BE.NATIVE_FILTER)}),[n,e,i,t])})(t,V,i),((e,t,n,i)=>{(0,s.useEffect)((()=>{const r=e[t];if(r&&!r.isPending){const r=n.flat().find((n=>!e[n]&&n!==t));r&&i(r)}}),[t,e,n,i])})(b,T,U,$);const K=(0,ws.EJ)(S,P,w),B=function(e){void 0===e&&(e=!1),v(gc),$(k),S(fc),w(!1),E(vc),I(gc),R.length>0&&j(q(R[0])),e||P(z),A([k]),h.resetFields(["filters"]),h.setFieldsValue({changed:!1})},W=(0,s.useCallback)((e=>{const t=F.filters[e],n=g[e];return t&&"name"in t&&t.name||t&&"title"in t&&t.title||n&&"name"in n&&n.name||n&&"title"in n&&n.title||(0,c.t)("[untitled]")}),[g,F.filters]),J=(0,s.useCallback)((e=>{var t;if(b[e])return!1;const n=(null==(t=h.getFieldValue("filters"))?void 0:t[e])||g[e];return n&&"filterType"in n&&a()(mc).call(mc,n.filterType)}),[g,h,b]),X=(0,s.useCallback)((e=>R.filter((t=>t!==e)).filter((e=>J(e))).map((e=>{var t;return{label:W(e),value:e,type:null==(t=g[e])?void 0:t.filterType}}))),[J,R,W]),G=(0,s.useCallback)((()=>{const e=h.getFieldsError(),t=[];e.forEach((e=>{const n=e.name[1];e.errors.length>0&&!a()(t).call(t,n)&&t.push(n)})),!t.length&&D.length>0?I(gc):t.length>0&&!mi()(Ul()(D),Ul()(t))&&I(t)}),[h,D]),Q=async()=>{const e=await(0,ws.G$)(h,T,$);if(G(),e){const t=(e=>{const t=Object.keys(g).reduce(((e,t)=>{var n;const i=g[t],r=null==(n=i.cascadeParentIds)?void 0:n.filter((e=>J(e)));return r&&d((0,ll.rF)(t,r)),{...e,[t]:{...i,cascadeParentIds:r}}}),{}),n=null==e?void 0:e.filters;return n&&Object.keys(n).forEach((e=>{const t=n[e];if(!("dependencies"in t))return;const{dependencies:i}=t;i&&(t.dependencies=i.filter((e=>J(e))))})),t})(e);(0,ws.GA)(t,U,b,o,e)(),B(!0)}else p.current.changeTab("configuration")},ee=()=>{B(),l()},te=()=>{const e=h.getFieldValue("changed"),t=U.length!==z.length||U.some(((e,t)=>e!==z[t]));M.length>0||h.isFieldsTouched()||e||t?w(!0):ee()},ne=(0,s.useCallback)((()=>{const e=new Map,t=h.getFieldValue("filters");return t&&Object.keys(t).forEach((n=>{const i=t[n],r=g[n];let o=[];i&&"dependencies"in i?o=[...i.dependencies]:null!=r&&r.cascadeParentIds&&(o=[...r.cascadeParentIds]),e.set(n,o)})),e}),[g,h]),ie=(0,s.useCallback)((()=>{const e=ne();R.filter((e=>!b[e])).forEach((t=>{const n={name:["filters",t,"dependencies"],errors:(0,ws.uh)(e,t)?[(0,c.t)("Cyclic dependency detected")]:[]};h.setFields([n])})),G()}),[ne,R,h,G,b]),re=(0,s.useCallback)((e=>{const t=ne(),n=U.filter((t=>t!==e&&J(t)));return n.find((n=>{const i=t.get(e)||[];return i.push(n),!(0,ws.uh)(t,e)||(i.pop(),!1)}))||n[0]}),[ne,J,U]),[oe,ae]=(0,s.useState)(!1),se=(0,Al.Z)((()=>{ae(!oe)})),le=oe?Y.Z.FullscreenExitOutlined:Y.Z.FullscreenOutlined,de=(0,s.useMemo)((()=>_()(((e,t)=>{const n=e.filters&&Object.values(e.filters).some((e=>e.name&&null!==e.name)),i=e.filters&&Object.values(e.filters).some((e=>e.title&&null!==e.title));(n||i)&&E(t),w(!1),G()}),gs.M)),[G]);(0,s.useEffect)((()=>{wt()(b)||I((e=>e.filter((e=>!b[e]))))}),[b]),(0,s.useEffect)((()=>{a()(N).call(N,T)||A([...N,T])}),[T]);const ce=(0,s.useCallback)((e=>j(e)),[j]),ue=(0,s.useMemo)((()=>U.map((e=>{if(!a()(N).call(N,e))return null;const t=e.startsWith(ws.Ky),n=T===e;return(0,x.tZ)("div",{key:e,style:{height:"100%",overflowY:"auto",display:n?"":"none"}},t?(0,x.tZ)(lc,{componentId:e,divider:g[e]}):(0,x.tZ)(nc,{ref:p,form:h,filterId:e,filterToEdit:g[e],removedFilters:b,restoreFilter:O,getAvailableFilters:X,key:e,activeFilterPanelKeys:L,handleActiveFilterPanelChange:ce,isActive:n,setErroredFilters:I,validateDependencies:ie,getDependencySuggestion:re}))}))),[N,U,T,g,h,b,O,X,L,ie,re,ce]);return(0,x.tZ)(dc,{visible:t,maskClosable:!1,title:(0,c.t)("Add and edit filters"),expanded:oe,destroyOnClose:!0,onCancel:te,onOk:Q,centered:!0,footer:(0,x.tZ)("div",{css:x.iv`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `},(0,x.tZ)(ac,{onDismiss:()=>w(!1),onCancel:te,handleSave:Q,canSave:!D.length,saveAlertVisible:C,onConfirmCancel:ee}),(0,x.tZ)(hc,null,(0,x.tZ)(le,{iconSize:"l",iconColor:u.colors.grayscale.dark2,onClick:se})))},(0,x.tZ)(Z.Z,null,(0,x.tZ)(cc,{expanded:oe},(0,x.tZ)(uc,{form:h,onValuesChange:de,layout:"vertical"},(0,x.tZ)(Wl,{erroredFilters:D,onRemove:K,onAdd:V,onChange:e=>{$(e),j(q(e))},getFilterTitle:W,currentFilterId:T,removedFilters:b,restoreFilter:O,onRearrange:(e,t)=>{const n=[...U],i=n.splice(e,1)[0];n.splice(t,0,i),P(n)},filters:U},ue)))))}const yc=s.memo(bc),xc=(0,y.iK)(W.Z)`
  padding: 0;
`,Sc=e=>{let{createNewOnOpen:t,dashboardId:n,initialFilterId:i,onClick:o,children:a}=e;const l=(0,r.I0)(),[d,c]=(0,s.useState)(!1),u=(0,s.useCallback)((()=>{c(!1)}),[c]),h=(0,s.useCallback)((async e=>{l(await(0,ll.RY)(e)),u()}),[l,u]),p=(0,s.useCallback)((()=>{c(!0),o&&o()}),[c,o]);return(0,x.tZ)(s.Fragment,null,(0,x.tZ)(xc,ne()({},Zs("create-filter"),{buttonStyle:"link",buttonSize:"xsmall",onClick:p}),a),(0,x.tZ)(yc,{isOpen:d,onSave:h,onCancel:u,initialFilterId:i,createNewOnOpen:t,key:`filters-for-${n}`}))},Cc=s.memo(Sc),Zc=e=>{let{filter:t,hidePopover:n}=e;const i=(0,y.Fg)(),o=(0,s.useRef)(null),[a]=(0,bl.Z)(o),l=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.id})),d=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm}));return(0,x.tZ)(Sl,{css:e=>x.iv`
        margin-bottom: ${3*e.gridUnit}px;
        justify-content: space-between;
      `},(0,x.tZ)(_l,null,(0,x.tZ)(Y.Z.FilterSmall,{css:e=>x.iv`
            margin-right: ${e.gridUnit}px;
          `}),(0,x.tZ)(Il,{title:a?t.name:null},(0,x.tZ)(wl,{ref:o},t.name))),d&&(0,x.tZ)(Sc,{dashboardId:l,onClick:n,initialFilterId:t.id},(0,x.tZ)(Y.Z.Edit,{iconSize:"l",iconColor:i.colors.grayscale.light1})))},wc=e=>{let{filter:t}=e;const n=(0,s.useMemo)((()=>(0,Zi.Z)().get(t.filterType)),[t.filterType]);return(0,x.tZ)(Sl,null,(0,x.tZ)(Cl,null,(0,c.t)("Filter type")),(0,x.tZ)(Zl,null,null==n?void 0:n.name))},Rc=e=>{let{filter:t,hidePopover:n}=e;return(0,x.tZ)("div",null,(0,x.tZ)(Zc,{filter:t,hidePopover:n}),(0,x.tZ)(wc,{filter:t}),(0,x.tZ)(El,{filter:t}),(0,x.tZ)(Ol,{filter:t}))},kc=e=>{let{children:t,filter:n,getPopupContainer:i,isVisible:r=!0,placement:o}=e;const[a,l]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{r||l(!1)}),[r]),(0,x.tZ)(ri.Z,{placement:o,overlayClassName:"filter-card-popover",mouseEnterDelay:.2,mouseLeaveDelay:.2,onVisibleChange:e=>{l(r&&e)},visible:r&&a,content:(0,x.tZ)(Rc,{filter:n,hidePopover:()=>{l(!1)}}),getPopupContainer:null!=i?i:()=>document.body},t)};var Tc;!function(e){e.AllFilters="allFilters",e.FilterSets="filterSets"}(Tc||(Tc={}));const $c=(e,t)=>{const n=Rs(),i=Object.values(n),r=(0,s.useMemo)((()=>!!i.find((t=>{let{name:n}=t;return n===e}))),[i,e]);return t!==e&&r},Dc=y.iK.div`
  display: flex;
  & button {
    ${e=>{let{disabled:t}=e;return"pointer-events: "+(t?"none":"all")}};
    flex: 1;
  }
`,_c=y.iK.div`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`,Ic=e=>{let{onCancel:t,editMode:n,onEdit:i,onCreate:r,disabled:o,filterSetName:a}=e;const l=$c(a),d=!a||l||o;return(0,x.tZ)(s.Fragment,null,n?(0,x.tZ)(_c,null,(0,x.tZ)(W.Z,{buttonStyle:"tertiary",buttonSize:"small",onClick:t},(0,c.t)("Cancel")),(0,x.tZ)(re.u,{placement:"right",title:!a&&(0,c.t)("Please filter set name")||l&&(0,c.t)("Filter set with this name already exists")||o&&Hr},(0,x.tZ)(Dc,{disabled:d},(0,x.tZ)(W.Z,ne()({disabled:d,buttonStyle:"primary",htmlType:"submit",buttonSize:"small",onClick:r},Zs("create-filter-set-button")),(0,c.t)("Create"))))):(0,x.tZ)(re.u,{placement:"bottom",title:o&&Hr},(0,x.tZ)(Dc,{disabled:o},(0,x.tZ)(W.Z,ne()({disabled:o,buttonStyle:"tertiary",buttonSize:"small",onClick:i},Zs("new-filter-set-button")),(0,c.t)("Create new filter set")))))},Fc=y.iK.div`
  display: flex;
  align-items: center;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,Ec=(0,y.iK)(H.Ol)`
  &.ant-collapse-ghost > .ant-collapse-item {
    & > .ant-collapse-content > .ant-collapse-content-box {
      padding: 0;
      padding-top: 0;
      padding-bottom: 0;
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    }
    & > .ant-collapse-header {
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      max-width: max-content;
      & .ant-collapse-arrow {
        position: static;
        padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
      }
  }
`,Mc=y.iK.div`
  padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  padding-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,Oc=e=>{let{dataMask:t,filterSet:n}=e;const i=(0,y.Fg)(),r=ks(),o=Object.values(r).filter(no.kI);let s=null!=o?o:[];return null!=n&&n.nativeFilters&&(s=Object.values(null==n?void 0:n.nativeFilters).filter(no.kI)),(0,x.tZ)(Ec,{ghost:!0,expandIconPosition:"right",defaultActiveKey:n?void 0:["filters"],expandIcon:e=>{let{isActive:t}=e;const n=i.colors.grayscale.base,r=t?Y.Z.CaretUpOutlined:Y.Z.CaretDownOutlined;return(0,x.tZ)(r,{iconColor:n})}},(0,x.tZ)(H.Ol.Panel,ne()({},Zs("collapse-filter-set-description"),{header:(0,x.tZ)(Fc,null,(0,x.tZ)(H.ZT.Text,{type:"secondary"},(0,c.t)("Filters (%d)",s.length))),key:"filters"}),s.map((e=>{var i,o,s,l,d,u;let{id:h,name:p}=e;const m=n&&!(0,bi.JB)(null==(i=r[h])?void 0:i.controlValues,null==n||null==(o=n.nativeFilters)||null==(s=o[h])?void 0:s.controlValues,{ignoreUndefined:!0}),g=!a()(l=Object.keys(r)).call(l,h);return(0,x.tZ)(H._e,{title:g&&(0,c.t)("This filter doesn't exist in dashboard. It will not be applied.")||m&&(0,c.t)("Filter metadata changed in dashboard. It will not be applied."),placement:"bottomLeft",key:h},(0,x.tZ)(Mc,null,(0,x.tZ)(H.ZT.Text,{strong:!0,delete:g,mark:m},p,": "),(0,x.tZ)(H.ZT.Text,{delete:g,mark:m},Wr(null==t||null==(d=t[h])||null==(u=d.filterState)?void 0:u.value)||(0,x.tZ)(H.ZT.Text,{type:"secondary"},(0,c.t)("None")))))}))))},zc=(0,y.iK)(W.Z)`
  padding: 0;
`,Uc=y.iK.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Pc=y.iK.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > *,
  & > button.superset-button {
    ${e=>{let{theme:t}=e;return`margin-left: ${2*t.gridUnit}px`}};
  }
`,Nc=e=>{var t,n;let{editMode:i,setFilterSetName:r,onDelete:o,onEdit:a,filterSetName:l,dataMaskSelected:d,filterSet:u,isApplied:h,onRebuild:p}=e;const m=(0,y.Fg)(),g=(0,x.tZ)(kt.v,null,(0,x.tZ)(kt.v.Item,{onClick:a},(0,c.t)("Edit")),(0,x.tZ)(kt.v.Item,{onClick:p},(0,x.tZ)(re.u,{placement:"right",title:(0,c.t)("Remove invalid filters")},(0,c.t)("Rebuild"))),(0,x.tZ)(kt.v.Item,{onClick:o,danger:!0},(0,c.t)("Delete")));return(0,x.tZ)(s.Fragment,null,(0,x.tZ)(Uc,null,(0,x.tZ)(H.ZT.Text,{strong:!0,editable:{editing:i,icon:(0,x.tZ)("span",null),onChange:r}},null!=(t=null==u?void 0:u.name)?t:l),(0,x.tZ)(Pc,null,h&&(0,x.tZ)(Y.Z.CheckOutlined,{iconSize:"m",iconColor:m.colors.success.base}),o&&(0,x.tZ)(H.Gj,{overlay:g,placement:"bottomRight",trigger:["click"]},(0,x.tZ)(zc,ne()({onClick:e=>{e.stopPropagation(),e.preventDefault()}},Zs("filter-set-menu-button"),{buttonStyle:"link",buttonSize:"xsmall"}),(0,x.tZ)(Y.Z.EllipsisOutlined,{iconSize:"m"}))))),(0,x.tZ)(Oc,{filterSet:u,dataMask:null!=(n=null==u?void 0:u.dataMask)?n:d}))},Ac=y.iK.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${e=>{let{theme:t}=e;return 27*t.gridUnit}}px;

  & button.superset-button {
    margin-left: 0;
  }
  & input {
    width: 100%;
  }
`,qc=y.iK.div`
  ${e=>{let{theme:t,"data-selected":n,onClick:i}=e;return`\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: 1fr;\n    grid-gap: ${t.gridUnit}px;\n    border-bottom: 1px solid ${t.colors.grayscale.light2};\n    padding: ${2*t.gridUnit}px ${4*t.gridUnit}px;\n    cursor: ${i?"pointer":"auto"};\n    background: ${n?t.colors.primary.light5:"transparent"};\n  `}}
`,Lc=(0,c.t)("New filter set"),jc=e=>{let{dataMaskSelected:t,onEditFilterSet:n,disabled:i,onFilterSelectionChange:o,tab:a}=e;const l=(0,r.I0)(),[d,c]=(0,s.useState)(Lc),[u,h]=(0,s.useState)(!1),p=Ts(),m=Rs(),g=Object.values(m),f=ks(),v=Object.values(f),[b,y]=(0,s.useState)(null);(0,s.useEffect)((()=>{var e;if(a===Tc.AllFilters)return;if(!g.length)return void y(null);const n=Yr({dataMaskSelected:t,filterSetFilterValues:g});y(null!=(e=null==n?void 0:n.id)?e:null)}),[a,t,g]);const S=(e,t)=>{var n,i,r;return!v.find((t=>(null==t?void 0:t.id)===e))||!(0,bi.JB)(null==(n=f[e])?void 0:n.controlValues,null==t||null==(i=t.nativeFilters)||null==(r=i[e])?void 0:r.controlValues,{ignoreUndefined:!0})},C=(e,t)=>{var n;const i=null==t?void 0:t.target;if(i){var r;const e=i.closest(`[data-anchor=${Zs("filter-set-wrapper",!0)}]`);if(null!=e&&null!=(r=e.querySelector(".ant-collapse-header"))&&r.contains(i)||null!=i&&i.closest(".ant-dropdown"))return}if(y(e),!e)return;const a=m[e];(null!=(n=Object.values(null==a?void 0:a.dataMask))?n:[]).forEach((e=>{const{extraFormData:t,filterState:n,id:i}=e;S(i,a)||o({id:i},{extraFormData:t,filterState:n})}))};return(0,x.tZ)(Ac,null,!b&&(0,x.tZ)(qc,null,(0,x.tZ)(Nc,{dataMaskSelected:t,editMode:u,setFilterSetName:c,filterSetName:d}),(0,x.tZ)(Ic,{filterSetName:d.trim(),disabled:i,onCancel:()=>{h(!1),c(Lc)},editMode:u,onEdit:()=>h(!0),onCreate:()=>{const e={name:d.trim(),nativeFilters:f,dataMask:Object.keys(f).reduce(((e,t)=>({...e,[t]:p[t]})),{})};l((0,ll.xQ)(e)),h(!1),c(Lc)}})),g.map((e=>(0,x.tZ)(qc,ne()({},Zs("filter-set-wrapper"),{"data-anchor":Zs("filter-set-wrapper",!0),"data-selected":e.id===b,onClick:t=>C(e.id,t),key:e.id}),(0,x.tZ)(Nc,{isApplied:e.id===b&&!i,onDelete:()=>{return t=e.id,l((0,ll.$l)(t)),void(t===b&&y(null));var t},onEdit:()=>{return t=e.id,C(t),void n(t);var t},onRebuild:()=>(e=>{var t;const n=m[e],i=Object.values(null!=(t=null==n?void 0:n.dataMask)?t:{}).filter((e=>{const{id:t}=e;return!S(t,n)})).reduce(((e,t)=>({...e,[t.id]:f[t.id]})),{}),r={...n,nativeFilters:i,dataMask:Object.keys(i).reduce(((e,t)=>{var i;return{...e,[t]:null==(i=n.dataMask)?void 0:i[t]}}),{})};l((0,ll.ql)(r))})(e.id),dataMaskSelected:t,filterSet:e})))))},Vc=y.iK.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  background: ${e=>{let{theme:t}=e;return t.colors.primary.light4}};
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,Kc=(0,y.iK)(H.ZT.Text)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark2}};
`,Bc=(0,y.iK)(H.ZT.Text)`
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  & .anticon {
    padding: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,Hc=y.iK.div`
  display: flex;
  & button {
    ${e=>{let{disabled:t}=e;return"pointer-events: "+(t?"none":"all")}};
    flex: 1;
  }
`,Wc=e=>{let{filterSetId:t,onCancel:n,dataMaskSelected:i,disabled:o}=e;const a=Ts(),l=(0,r.I0)(),d=Rs(),u=ks(),h=Object.values(d),[p,m]=(0,s.useState)(d[t].name),g=$c(p,d[t].name),f=(0,s.useMemo)((()=>Yr({dataMaskSelected:i,filterSetFilterValues:h})),[i,h]),v=f&&f.id!==t,b=o||v||g;return(0,x.tZ)(Vc,null,(0,x.tZ)(Kc,{strong:!0},(0,c.t)("Editing filter set:")),(0,x.tZ)(Kc,{editable:{editing:!0,icon:(0,x.tZ)("span",null),onChange:m}},p),(0,x.tZ)(_c,null,(0,x.tZ)(W.Z,{ghost:!0,buttonStyle:"tertiary",buttonSize:"small",onClick:n},(0,c.t)("Cancel")),(0,x.tZ)(H._e,{placement:"right",title:g&&(0,c.t)("Filter set with this name already exists")||v&&(0,c.t)("Filter set already exists")||o&&Hr},(0,x.tZ)(Hc,{disabled:b},(0,x.tZ)(W.Z,ne()({disabled:b,buttonStyle:"primary",htmlType:"submit",buttonSize:"small",onClick:()=>{l((0,ll.ql)({id:t,name:p,nativeFilters:u,dataMask:{...a}})),n()}},Zs("filter-set-edit-save")),(0,c.t)("Save"))))),v&&(0,x.tZ)(Bc,{mark:!0},(0,x.tZ)(Y.Z.WarningOutlined,{iconSize:"m"}),(0,c.t)('This filter set is identical to: "%s"',null==f?void 0:f.name)))};var Yc=n(21804),Jc=n.n(Yc);const Xc=y.iK.div`
  .ant-btn-group {
    button.ant-btn {
      background-color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
      border-color: transparent;
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
      font-size: 12px;
      line-height: 13px;
      outline: none;
      text-transform: uppercase;
      &:first-of-type {
        border-radius: ${e=>{let{theme:t}=e;return`${t.gridUnit}px 0 0 ${t.gridUnit}px`}};
        margin: 0;
        width: 120px;
      }

      &:disabled {
        background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
        color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
      }
      &:nth-child(2) {
        margin: 0;
        border-radius: ${e=>{let{theme:t}=e;return`0 ${t.gridUnit}px ${t.gridUnit}px 0`}};
        width: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
        &:before,
        &:hover:before {
          border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
          content: '';
          display: block;
          height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
          margin: 0;
          position: absolute;
          width: ${e=>{let{theme:t}=e;return.25*t.gridUnit}}px;
        }

        &:disabled:before {
          border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
        }
      }
    }
  }
`,{SubMenu:Gc}=kt.v,Qc=(0,y.iK)((e=>{let{overlay:t,tooltip:n,placement:i,...r}=e;const o=function(e){return void 0===e&&(e={}),(0,x.tZ)(Xc,null,(0,x.tZ)(H.Gj.Button,ne()({overlay:t},r,e)))};return n?o({buttonsRender:e=>{let[t,r]=e;return[(0,x.tZ)(H._e,{placement:i,id:`${Jc()(n)}-tooltip`,title:n},t),r]}}):o()}))`
  button.ant-btn:first-of-type {
    display: none;
  }
  > button.ant-btn:nth-child(2) {
    display: inline-flex;
    background-color: transparent !important;
    height: unset;
    padding: 0;
    border: none;
    width: auto !important;

    .anticon {
      line-height: 0;
    }
    &:after {
      box-shadow: none !important;
    }
  }
`,eu=(0,y.iK)(kt.v)`
  ${e=>{let{theme:t}=e;return`\n    .info {\n      font-size: ${t.typography.sizes.s}px;\n      color: ${t.colors.grayscale.base};\n      padding: ${t.gridUnit}px ${3*t.gridUnit}px ${t.gridUnit}px ${3*t.gridUnit}px;\n    }\n    .ant-dropdown-menu-item-selected {\n      color: ${t.colors.grayscale.dark1};\n      background-color: ${t.colors.primary.light5};\n    }\n  `}}
`,tu=(0,y.iK)(kt.v.Item)`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
  border-bottom: ${e=>{let{divider:t,theme:n}=e;return t?`1px solid ${n.colors.grayscale.light3};`:"none;"}};
`,nu=y.iK.div`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
`,iu=e=>{const t=(0,y.Fg)(),{icon:n,info:i,menuItems:r,selectedKeys:o,onSelect:l}=e,d=(0,s.useMemo)((()=>(e,n,i)=>(0,x.tZ)(tu,{key:n,divider:i},(0,x.tZ)(nu,null,(0,x.tZ)("span",null,e),(null==o?void 0:a()(o).call(o,n))&&(0,x.tZ)(Y.Z.Check,{iconColor:t.colors.primary.base,className:"tick-menu-item",iconSize:"xl"})))),[o,t.colors.primary.base]),c=(0,s.useMemo)((()=>(0,x.tZ)(eu,{selectedKeys:o,onSelect:l,selectable:!0},i&&(0,x.tZ)("div",{className:"info"},i),r.map((e=>{var t;return null!=(t=e.children)&&t.length?(0,x.tZ)(Gc,{title:e.label,key:e.key},e.children.map((e=>d(e.label,e.key)))):d(e.label,e.key,e.divider)})))),[o,l,i,r,d]);return(0,x.tZ)(Qc,{overlay:c,trigger:["click"],icon:n})},ru=y.iK.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .enable-cross-filters-text {
    padding-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit+"px"}};
  }
`,ou=(0,y.iK)(Q.ZP)`
  ${e=>{let{theme:t}=e;return`\n  &,\n  svg {\n    display: inline-block;\n    width: ${4*t.gridUnit}px;\n    height: ${4*t.gridUnit}px;\n  }\n`}}
`,au="cross-filters-menu-key",su="cross-filters-scoping-menu-key",lu=()=>{const e=(0,r.I0)(),t=(0,y.Fg)(),n=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled})),i=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.filterBarOrientation})),[o,a]=(0,s.useState)(i),l=(0,u.c)(u.T.DASHBOARD_CROSS_FILTERS),d=n&&l,[h,p]=(0,s.useState)(d),m=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),g=m&&(0,u.c)(u.T.HORIZONTAL_FILTER_BAR),[f,v]=yr(),b=(0,s.useCallback)((async t=>{t||e((0,mt.sh)()),await e((0,Wn.C6)(t))}),[e]),S=(0,s.useCallback)((()=>{p(!h),b(!h)}),[h,b]),C=(0,s.useCallback)((async t=>{if(t!==i){a(t);try{await e((0,Wn.Mn)(t))}catch{a(i)}}}),[e,i]),Z=(0,s.useCallback)((e=>{const t=e.key;var n;t===au?S():(n=t)===Fi.Bp.VERTICAL||n===Fi.Bp.HORIZONTAL?C(t):t===su&&f()}),[f,S,C]),w=(0,s.useMemo)((()=>(0,x.tZ)(ru,null,(0,x.tZ)(ou,{className:"enable-cross-filters",checked:h,onChange:e=>p(e||!1)})," ",(0,x.tZ)("span",{className:"enable-cross-filters-text"},(0,c.t)("Enable cross-filtering")))),[h]),R=(0,s.useMemo)((()=>{const e=[];return l&&m&&(e.push({key:au,label:w}),e.push({key:su,label:(0,c.t)("Cross-filtering scoping"),divider:g})),g&&e.push({key:"placement",label:(0,c.t)("Orientation of filter bar"),children:[{key:Fi.Bp.VERTICAL,label:(0,c.t)("Vertical (Left)")},{key:Fi.Bp.HORIZONTAL,label:(0,c.t)("Horizontal (Top)")}]}),e}),[m,g,w,l]);return R.length?(0,x.tZ)(s.Fragment,null,(0,x.tZ)(iu,{onSelect:Z,icon:(0,x.tZ)(Y.Z.Gear,{name:"gear",iconColor:t.colors.grayscale.base}),menuItems:R,selectedKeys:[o]}),v):null},du=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${2*t.gridUnit}px ${2*t.gridUnit}px;

    & > span {
      font-size: ${t.typography.sizes.l}px;
      flex-grow: 1;
      font-weight: ${t.typography.weights.bold};
    }

    & > div:first-of-type {
      line-height: 0;
    }

    & > button > span.anticon {
      line-height: 0;
    }
  `}}
`,cu=(0,y.iK)(W.Z)`
  padding: 0;
`,uu=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: ${3*t.gridUnit}px ${2*t.gridUnit}px ${t.gridUnit}px;\n\n    .ant-dropdown-trigger span {\n      padding-right: ${2*t.gridUnit}px;\n    }\n  `}}
`,hu=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    margin-top: ${2*t.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${t.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}}
`,pu=e=>{let{toggleFiltersBar:t}=e;const n=(0,y.Fg)(),i=ks(),o=(0,s.useMemo)((()=>Object.values(i)),[i]),a=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),l=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.id}));return(0,x.tZ)(uu,null,(0,x.tZ)(du,null,(0,x.tZ)("span",null,(0,c.t)("Filters")),(0,x.tZ)(lu,null),(0,x.tZ)(cu,ne()({},Zs("collapse-button"),{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>t(!1)}),(0,x.tZ)(Y.Z.Expand,{iconColor:n.colors.grayscale.base}))),a&&(0,u.c)(u.T.DASHBOARD_NATIVE_FILTERS)&&(0,x.tZ)(hu,null,(0,x.tZ)(Cc,{dashboardId:l,createNewOnOpen:0===o.length},(0,x.tZ)(Y.Z.PlusSmall,null)," ",(0,c.t)("Add/Edit Filters"))))},mu=s.memo(pu),gu=e=>{const{dataMask:t,chartConfiguration:n,dashboardLayout:i,verboseMaps:r}=e;return Object.keys(n).map((e=>{const n=Number(e),o=co(n,t[n],i);if((0,Ii.Z)(o.column)&&(0,Ii.Z)(o.value)){var a;const e=(null==(a=r[n])?void 0:a[(0,to.Z)(o.column)])||o.column;return{...o,column:e,emitterId:n}}return null})).filter(Boolean)},fu=x.iv`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
`,vu=y.iK.b`
  ${e=>{let{theme:t}=e;return`\n    max-width: ${25*t.gridUnit}px;\n  `}}
  ${fu}
`,bu=(0,y.iK)("span")`
  ${e=>{let{theme:t}=e;return`\n    max-width: ${25*t.gridUnit}px;\n    padding-right: ${t.gridUnit}px;\n  `}}
  ${fu}
`,yu=(0,y.iK)(H.Vp)`
  ${e=>{let{theme:t}=e;return`\n    border: 1px solid ${t.colors.grayscale.light3};\n    border-radius: 2px;\n    .anticon-close {\n      vertical-align: middle;\n    }\n  `}}
`,xu=e=>{var t;const{filter:n,orientation:i,removeCrossFilter:r}=e,o=(0,y.Fg)(),[a,s]=(0,Gs.Z)(),[l,d]=(0,Gs.Z)(),c=(0,to.Z)(null!=(t=n.column)?t:"");return(0,x.tZ)(yu,{css:x.iv`
        ${i===Fi.Bp.VERTICAL?`\n            margin-top: ${2*o.gridUnit}px;\n          `:`\n            margin-left: ${2*o.gridUnit}px;\n          `}
      `,closable:!0,onClose:()=>r(n.emitterId)},(0,x.tZ)(re.u,{title:s?c:null},(0,x.tZ)(bu,{ref:a},c)),(0,x.tZ)(re.u,{title:d?n.value:null},(0,x.tZ)(vu,{ref:l},n.value)))},Su=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.base};\n    vertical-align: middle;\n    align-items: center;\n  `}}
`,Cu=(0,y.iK)(Y.Z.SearchOutlined)`
  ${e=>{let{theme:t}=e;return`\n    & > span.anticon.anticon-search {\n      color: ${t.colors.grayscale.light1};\n      margin-left: ${t.gridUnit}px;\n      transition: 0.3s;\n      vertical-align: middle;\n      line-height: 0;\n      &:hover {\n        color: ${t.colors.grayscale.base};\n      }\n    }\n  `}}
`,Zu=e=>{const{title:t,orientation:n,onHighlightFilterSource:i}=e,[r,o]=(0,Gs.Z)(),a=(0,y.Fg)();return(0,x.tZ)(Su,null,(0,x.tZ)(re.u,{title:o?t:null},(0,x.tZ)("span",{css:x.iv`
            max-width: ${n===Fi.Bp.VERTICAL?45*a.gridUnit+"px":15*a.gridUnit+"px"};
            line-height: 1.4;
            ${fu}
          `,ref:r},t)),(0,x.tZ)(re.u,{title:(0,c.t)("Locate the chart")},(0,x.tZ)(Cu,{iconSize:"s",role:"button",tabIndex:0,onClick:i})))},wu=e=>{const{filter:t,orientation:n,last:i}=e,o=(0,y.Fg)(),a=(0,r.I0)(),l=(0,s.useCallback)((e=>{e&&a((0,Yn.E2)(e))}),[a]);return(0,x.tZ)("div",{key:`${t.name}${t.emitterId}`,css:x.iv`
        ${n===Fi.Bp.VERTICAL?`\n            display: block;\n            margin-bottom: ${4*o.gridUnit}px;\n          `:"\n            display: flex;\n          "}
      `},(0,x.tZ)(Zu,{title:t.name,orientation:n||Fi.Bp.HORIZONTAL,onHighlightFilterSource:()=>l(t.path)}),(t.column||t.value)&&(0,x.tZ)(xu,{filter:t,orientation:n,removeCrossFilter:e=>{a((0,mt.eG)(e,{extraFormData:{filters:[]},filterState:{value:null,selectedValues:null}}))}}),i&&(0,x.tZ)("span",{css:x.iv`
            ${n===Fi.Bp.HORIZONTAL?`\n                width: 1px;\n                height: 22px;\n                margin-left: ${4*o.gridUnit}px;\n                margin-right: ${o.gridUnit}px;\n              `:`\n                width: 100%;\n                height: 1px;\n                display: block;\n                margin-bottom: ${4*o.gridUnit}px;\n                margin-top: ${4*o.gridUnit}px;\n            `}
            background: ${o.colors.grayscale.light2};
          `}))},Ru=(0,y.iK)(Gl.Z)`
  ${e=>{let{theme:t}=e;return`\n    .ant-collapse-header {\n      margin-bottom: ${4*t.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-header {\n      padding-bottom: 0;\n    }\n    .ant-collapse-item > .ant-collapse-header > .ant-collapse-arrow {\n      font-size: ${t.typography.sizes.xs}px;\n      padding-top: ${3*t.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n      padding-top: 0;\n    }\n  `}}
`,ku=y.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.s}px;\n  `}}
`,Tu=e=>{const{crossFilters:t}=e,n=(0,y.Fg)(),i=(0,s.useMemo)((()=>t.map((e=>(0,x.tZ)(wu,{key:e.emitterId,filter:e,orientation:Fi.Bp.VERTICAL})))),[t]);return t.length?(0,x.tZ)(Ru,{ghost:!0,defaultActiveKey:"crossFilters",expandIconPosition:"right"},(0,x.tZ)(Gl.Z.Panel,{key:"crossFilters",header:(0,x.tZ)(ku,null,(0,c.t)("Cross-filters"))},i,(0,x.tZ)("span",{css:x.iv`
            width: 100%;
            height: 1px;
            display: block;
            background: ${n.colors.grayscale.light3};
            margin: ${8*n.gridUnit}px auto 0 auto;
          `}))):null},$u=()=>{const e=(0,r.v9)((e=>e.dataMask)),t=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),n=(0,r.v9)((e=>e.dashboardLayout.present)),i=Cs(),o=gu({dataMask:e,chartConfiguration:t,dashboardLayout:n,verboseMaps:i});return(0,x.tZ)(Tu,{crossFilters:o})},Du=y.iK.div`
  width: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${e=>{let{width:t}=e;return t}}px; // arbitrary...
  }
`,_u=y.iK.div`
  ${e=>{let{theme:t,width:n}=e;return`\n    & .ant-typography-edit-content {\n      left: 0;\n      margin-top: 0;\n      width: 100%;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n    flex-direction: column;\n    flex-grow: 1;\n    width: ${n}px;\n    background: ${t.colors.grayscale.light5};\n    border-right: 1px solid ${t.colors.grayscale.light2};\n    border-bottom: 1px solid ${t.colors.grayscale.light2};\n    min-height: 100%;\n    display: none;\n    &.open {\n      display: flex;\n    }\n  `}}
`,Iu=y.iK.div`
  ${e=>{let{theme:t,offset:n}=e;return`\n    position: absolute;\n    top: ${n}px;\n    left: 0;\n    height: 100%;\n    width: ${8*t.gridUnit}px;\n    padding-top: ${2*t.gridUnit}px;\n    display: none;\n    text-align: center;\n    &.open {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: ${2*t.gridUnit}px;\n    }\n    svg {\n      cursor: pointer;\n    }\n  `}}
`,Fu=(0,y.iK)(Y.Z.Collapse)`
  ${e=>{let{theme:t}=e;return`\n    color: ${t.colors.primary.base};\n    margin-bottom: ${3*t.gridUnit}px;\n  `}}
`,Eu=(0,y.iK)(Y.Z.Filter)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,Mu=(0,y.iK)(H.D6)`
  & .ant-tabs-nav-list {
    width: 100%;
  }
  & .ant-tabs-tab {
    display: flex;
    justify-content: center;
    margin: 0;
    flex: 1;
  }

  & > .ant-tabs-nav .ant-tabs-nav-operations {
    display: none;
  }
`,Ou=y.iK.div`
  margin-top: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
`,zu=y.iK.div`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${e=>{let{theme:t}=e;return 27*t.gridUnit}}px;
`,Uu=(0,s.createContext)(!1),Pu=e=>{let{actions:t,canEdit:n,dataMaskSelected:i,filtersOpen:r,filterValues:o,height:a,isDisabled:l,isInitialized:d,offset:h,onSelectionChange:m,toggleFiltersBar:g,width:f}=e;const[v,y]=(0,s.useState)(null),S=Rs(),C=Object.values(S),[Z,w]=(0,s.useState)(Tc.AllFilters),R=o.filter(no.kI),[k,T]=(0,s.useState)(!1),$=(0,s.useRef)(),D=(0,s.useCallback)((()=>g(!0)),[g]),_=(0,s.useMemo)((()=>be()((()=>{clearTimeout($.current),T(!0),$.current=setTimeout((()=>{T(!1)}),300)}),200)),[]);(0,s.useEffect)((()=>(document.onscroll=_,()=>{document.onscroll=null})),[_]);const I=(0,s.useMemo)((()=>({overflow:"auto",height:a,overscrollBehavior:"contain"})),[a]),F=R.length,E=(0,s.useMemo)((()=>0===o.length?(0,x.tZ)(Ou,null,(0,x.tZ)(Ba.Tc,{title:(0,c.t)("No global filters are currently added"),image:"filter.svg",description:n&&(0,c.t)('Click on "+Add/Edit Filters" button to create new dashboard filters')})):(0,x.tZ)(zu,null,(0,x.tZ)(uh,{dataMaskSelected:i,onFilterSelectionChange:m}))),[n,i,o.length,m]),M=(0,s.useMemo)((()=>(0,x.tZ)(Mu,{centered:!0,onChange:w,defaultActiveKey:Tc.AllFilters,activeKey:v?Tc.AllFilters:void 0},(0,x.tZ)(H.D6.TabPane,{tab:(0,c.t)("All filters (%(filterCount)d)",{filterCount:F}),key:Tc.AllFilters,css:I},v&&(0,x.tZ)(Wc,{dataMaskSelected:i,disabled:!l,onCancel:()=>y(null),filterSetId:v}),E),(0,x.tZ)(H.D6.TabPane,{disabled:!!v,tab:(0,c.t)("Filter sets (%(filterSetCount)d)",{filterSetCount:C.length}),key:Tc.FilterSets,css:I},(0,x.tZ)(jc,{onEditFilterSet:y,disabled:!l,dataMaskSelected:i,tab:Z,onFilterSelectionChange:m})))),[i,v,E,C.length,l,F,m,Z,I]),O=(0,s.useMemo)((()=>(0,yt.c)(u.T.DASHBOARD_CROSS_FILTERS)?(0,x.tZ)($u,null):null),[]),z=(0,s.useMemo)((()=>(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS)?t:null),[t]),U=(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS_SET)&&(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS);return(0,x.tZ)(Uu.Provider,{value:k},(0,x.tZ)(Du,ne()({},Zs(),{className:b()({open:r}),width:f}),(0,x.tZ)(Iu,ne()({},Zs("collapsable"),{className:b()({open:!r}),onClick:D,offset:h}),(0,x.tZ)(Fu,ne()({},Zs("expand-button"),{iconSize:"l"})),(0,x.tZ)(Eu,ne()({},Zs("filter-icon"),{iconSize:"l"}))),(0,x.tZ)(_u,{className:b()({open:r}),width:f},(0,x.tZ)(mu,{toggleFiltersBar:g}),d?U?(0,x.tZ)(s.Fragment,null,O,M):(0,x.tZ)("div",{css:I,onScroll:_},(0,x.tZ)(s.Fragment,null,O,(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS)&&E)):(0,x.tZ)("div",{css:(0,x.iv)({height:a},"","")},(0,x.tZ)(p.Z,null)),z)))},Nu=s.memo(Pu);var Au;!function(e){e.Right="right",e.Bottom="bottom",e.Left="left"}(Au||(Au={}));const qu=y.iK.div`
  position: absolute;
  right: 0;
`,Lu=y.iK.h4`
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  margin: 0;
  overflow-wrap: break-word;
`,ju=(0,y.iK)(Lu)`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  max-width: ${e=>{let{theme:t}=e;return 15*t.gridUnit}}px;
  ${Gs.B};
`,Vu=(0,y.iK)(ju)`
  max-width: none;
`,Ku=y.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,Bu=(0,y.iK)(Ku)`
  margin-bottom: unset;
`,Hu=(0,y.iK)(Ku)`
  width: 100%;
`,Wu=(0,y.iK)(At.l0)`
  width: 100%;
  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${e=>{let{theme:t}=e;return 11*t.gridUnit}}px;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,Yu=(0,y.iK)(At.l0)`
  && .ant-form-item-label > label {
    margin-bottom: 0;
    text-transform: none;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,Ju=(0,y.iK)(Wu)`
  && .ant-form-item-label {
    line-height: 1;
    & > label {
      padding-right: unset;
    }
  }
`,Xu=(0,y.iK)(At.xJ)`
  .ant-form-item-label {
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }
  }
`,Gu=(0,y.iK)(At.xJ)`
  && {
    margin-bottom: 0;
    align-items: center;
  }

  .ant-form-item-label {
    padding-bottom: 0;
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }

    & > label::after {
      display: none;
    }
  }

  .ant-form-item-control {
    width: ${e=>{let{theme:t}=e;return 41*t.gridUnit}}px;
  }
`,Qu=Xu,eh=y.iK.div`
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  display: flex;
`,th=()=>(0,x.tZ)("span",{css:e=>({color:e.colors.error.base,fontSize:`${e.typography.sizes.s}px`,paddingLeft:"1px"})},"*"),nh=e=>{let{description:t}=e;return(0,x.tZ)(eh,null,(0,x.tZ)(re.u,{title:t,placement:"right",overlayInnerStyle:{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:20,WebkitBoxOrient:"vertical",textOverflow:"ellipsis"},getPopupContainer:e=>e.parentElement},(0,x.tZ)("i",{className:"fa fa-info-circle text-muted",css:e=>({paddingLeft:`${e.gridUnit}px`,cursor:"pointer"})})))},ih=e=>{var t,n,i;let{dataMaskSelected:r,filter:o,icon:a,onFilterSelectionChange:l,inView:d,showOverflow:c,parentRef:u,orientation:h=Fi.Bp.VERTICAL,overflow:p=!1}=e;const m=(0,s.useMemo)((()=>qs()),[]),[g,f]=(0,s.useState)(!1),{name:v="<undefined>"}=o,b=Bs()(o)&&Ss(o,null==(t=o.dataMask)?void 0:t.filterState)?"error":void 0,y=!(null==(n=o.controlValues)||!n.enableEmptyFilter),{FilterControlContainer:S,FormItem:C,FilterControlTitleBox:Z,FilterControlTitle:w}=((e,t)=>(0,s.useMemo)((()=>e===Fi.Bp.HORIZONTAL?t?{FilterControlContainer:Ju,FormItem:Qu,FilterControlTitleBox:Hu,FilterControlTitle:Vu}:{FilterControlContainer:Yu,FormItem:Gu,FilterControlTitleBox:Bu,FilterControlTitle:ju}:{FilterControlContainer:Wu,FormItem:Xu,FilterControlTitleBox:Ku,FilterControlTitle:Lu}),[e,t]))(h,p),R=(0,s.useMemo)((()=>{var e;return(0,x.tZ)(Z,null,(0,x.tZ)(w,null,v),y&&(0,x.tZ)(th,null),(null==(e=o.description)?void 0:e.trim())&&(0,x.tZ)(nh,{description:o.description}),(0,x.tZ)(qu,null,a))}),[Z,w,v,y,o.description,a]),k=(0,s.useContext)(Uu),T=(0,s.useMemo)((()=>h===Fi.Bp.HORIZONTAL?p?Au.Left:Au.Bottom:Au.Right),[h,p]);return(0,x.tZ)(s.Fragment,null,(0,x.tZ)(Ns,{node:m},(0,x.tZ)(vl,{dataMaskSelected:r,filter:o,showOverflow:c,onFilterSelectionChange:l,inView:d,parentRef:u,setFilterActive:f,orientation:h,overflow:p,validateStatus:b})),(0,x.tZ)(S,{layout:h!==Fi.Bp.HORIZONTAL||p?"vertical":"horizontal"},(0,x.tZ)(kc,{filter:o,isVisible:!g&&!k,placement:T},(0,x.tZ)("div",null,(0,x.tZ)(C,{label:R,required:null==o||null==(i=o.controlValues)?void 0:i.enableEmptyFilter,validateStatus:b},(0,x.tZ)(As,{node:m}))))))},rh=s.memo(ih),oh=e=>{let{title:t,description:n}=e;return(0,x.tZ)("div",null,(0,x.tZ)("h3",null,t),n?(0,x.tZ)("p",null,n):null)},ah=e=>{let{title:t,description:n}=e;const i=(0,y.Fg)(),[r,o]=(0,Gs.Z)();return(0,x.tZ)("div",{css:x.iv`
        display: flex;
        align-items: center;
        height: ${6*i.gridUnit}px;
        border-left: 1px solid ${i.colors.grayscale.light2};
        padding-left: ${4*i.gridUnit}px;

        .filter-item-wrapper:first-child & {
          border-left: none;
          padding-left: 0;
        }
      `},(0,x.tZ)(re.u,{overlay:o?t:null},(0,x.tZ)("h3",{ref:r,css:x.iv`
            ${Gs.B};
            max-width: ${32.5*i.gridUnit}px;
            font-size: ${i.typography.sizes.m}px;
            font-weight: ${i.typography.weights.normal};
            margin: 0;
            color: ${i.colors.grayscale.dark1};
          `},t)),n?(0,x.tZ)(re.u,{overlay:n},(0,x.tZ)(Y.Z.BookOutlined,{iconSize:"l",iconColor:i.colors.grayscale.base,css:x.iv`
              margin: 0 ${1.5*i.gridUnit}px;
              vertical-align: unset;
              line-height: unset;
            `})):null)},sh=e=>{let{title:t,description:n}=e;const i=(0,y.Fg)(),[r,o]=(0,Gs.Z)(),[a,s]=(0,Gs.Z)();return(0,x.tZ)("div",{css:x.iv`
        border-top: 1px solid ${i.colors.grayscale.light2};
        padding-top: ${4*i.gridUnit}px;
        margin-bottom: ${4*i.gridUnit}px;
      `},(0,x.tZ)(re.u,{overlay:o?(0,x.tZ)("strong",null,t):null},(0,x.tZ)("h3",{ref:r,css:x.iv`
            ${Gs.B};
            display: block;
            color: ${i.colors.grayscale.dark1};
            font-weight: ${i.typography.weights.normal};
            font-size: ${i.typography.sizes.m}px;
            margin: 0 0 ${i.gridUnit}px 0;
          `},t)),n?(0,x.tZ)(re.u,{overlay:s?n:null},(0,x.tZ)("p",{ref:a,css:x.iv`
              ${Gs.B};
              display: block;
              font-size: ${i.typography.sizes.s}px;
              color: ${i.colors.grayscale.base};
              margin: ${i.gridUnit}px 0 0 0;
            `},n)):null)},lh=e=>{let{title:t,description:n,orientation:i=Fi.Bp.VERTICAL,overflow:r=!1}=e;return i===Fi.Bp.HORIZONTAL?r?(0,x.tZ)(sh,{title:t,description:n}):(0,x.tZ)(ah,{title:t,description:n}):(0,x.tZ)(oh,{title:t,description:n})},dh=e=>{let{overflowedCrossFilters:t,filtersInScope:n,filtersOutOfScope:i,renderer:r,rendererCrossFilter:o,showCollapsePanel:a,forceRenderOutOfScope:s}=e;return(0,x.tZ)("div",{css:e=>x.iv`
      width: ${56*e.gridUnit}px;
      padding: ${e.gridUnit}px 0;
    `},t.map((e=>o(e,Fi.Bp.VERTICAL,t.at(-1)))),n.map(r),a&&(0,x.tZ)(Xs,{filtersOutOfScope:i,renderer:r,forceRender:s,horizontalOverflow:!0}))},ch=e=>{let{dataMaskSelected:t,onFilterSelectionChange:n}=e;const i=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return(0,u.c)(u.T.HORIZONTAL_FILTER_BAR)?t.filterBarOrientation:Fi.Bp.VERTICAL})),{outlinedFilterId:o,lastUpdated:l}=hl(),[d,h]=(0,s.useState)([]),p=(0,s.useRef)(null),m=(0,r.v9)((e=>e.dataMask)),g=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),f=(0,r.v9)((e=>e.dashboardLayout.present)),v=Cs(),b=(0,u.c)(u.T.DASHBOARD_CROSS_FILTERS),y=(0,s.useMemo)((()=>b?gu({dataMask:m,chartConfiguration:g,dashboardLayout:f,verboseMaps:v}):[]),[g,f,m,b]),{filterControlFactory:S,filtersWithValues:C}=((e,t)=>{const n=ks(),i=(0,s.useMemo)((()=>Object.values(n)),[n]),r=(0,s.useMemo)((()=>i.map((t=>({...t,dataMask:e[t.id]})))),[i,e]);return{filterControlFactory:(0,s.useCallback)(((n,i,o)=>{const a=r[n];return(0,no.nY)(a)?(0,x.tZ)(lh,{title:a.title,description:a.description,orientation:i,overflow:o}):(0,x.tZ)(rh,{dataMaskSelected:e,filter:a,onFilterSelectionChange:t,inView:!1,orientation:i,overflow:o})}),[r,e,t]),filtersWithValues:r}})(t,n),Z=(0,s.useMemo)((()=>{const e=new Array(C.length);for(let t=0;t<C.length;t+=1)e[t]=qs();return e}),[C.length]),w=new Set(C.map((e=>e.id))),[R,k]=Hs(C),T=(0,s.useMemo)((()=>C.some((e=>e.requiredFirst))),[C]),$=Ks()&&C.length>0,D=(0,s.useCallback)(((e,t)=>{let{id:n}=e;const i=C.findIndex((e=>e.id===n)),r=null!=t?t:n;return(0,x.tZ)(s.Fragment,{key:r},"",(0,x.tZ)(As,{node:Z[i],inView:!0}))}),[C,Z]),_=(0,s.useMemo)((()=>R.filter((e=>{let{id:t}=e;return null==d?void 0:a()(d).call(d,t)}))),[R,d]),I=(0,s.useMemo)((()=>y.filter((e=>{let{emitterId:t,name:n}=e;return null==d?void 0:a()(d).call(d,`${n}${t}`)}))),[d,y]),F=(0,s.useMemo)((()=>[..._.filter((e=>(0,no.S0)(e))),...I]),[I,_]),E=(0,s.useCallback)(((e,t,n)=>(0,x.tZ)(wu,{filter:e,orientation:t,last:R.length>0&&`${n.name}${n.emitterId}`==`${e.name}${e.emitterId}`})),[R.length]),M=(0,s.useMemo)((()=>{const e=y.map((e=>({id:`${e.name}${e.emitterId}`,element:E(e,Fi.Bp.HORIZONTAL,y.at(-1))})));if((0,u.c)(u.T.DASHBOARD_NATIVE_FILTERS)){const t=R.map(((e,t)=>({id:e.id,element:(0,x.tZ)("div",{className:"filter-item-wrapper",css:x.iv`
              flex-shrink: 0;
            `},D(e,t))})));return[...e,...t]}return[...e]}),[R,D,E,y]),O=(0,s.useMemo)((()=>{const e=new Set(k.map((e=>{let{id:t}=e;return t}))),t=new Set(_.map((e=>{let{id:t}=e;return t})));return C.map((n=>e.has(n.id)||t.has(n.id)))}),[k,C,_]);return(0,s.useEffect)((()=>{var e;o&&a()(d).call(d,o)&&(null==p||null==(e=p.current)||e.open())}),[o,l,p,d]),(0,x.tZ)(s.Fragment,null,Z.filter(((e,t)=>w.has(C[t].id))).map(((e,t)=>(0,x.tZ)(Ns,{node:e,key:C[t].id},S(t,i,O[t])))),i===Fi.Bp.VERTICAL&&(0,x.tZ)(s.Fragment,null,R.map(D),$&&(0,x.tZ)(Xs,{filtersOutOfScope:k,forceRender:T,hasTopMargin:R.length>0,renderer:D})),i===Fi.Bp.HORIZONTAL&&(0,x.tZ)("div",{css:e=>x.iv`
        padding: 0 ${4*e.gridUnit}px;
        min-width: 0;
        flex: 1;
      `},(0,x.tZ)(Js,{items:M,dropdownTriggerIcon:(0,x.tZ)(Y.Z.FilterSmall,{css:x.iv`
              && {
                margin-right: -4px;
                display: flex;
              }
            `}),dropdownTriggerText:(0,c.t)("More filters"),dropdownTriggerCount:F.length,dropdownTriggerTooltip:0===F.length?(0,c.t)("No applied filters"):(0,c.t)("Applied filters: %s",F.map((e=>e.name)).join(", ")),dropdownContent:_.length||I.length||k.length&&$?()=>(0,x.tZ)(dh,{overflowedCrossFilters:I,filtersInScope:_,filtersOutOfScope:k,renderer:D,rendererCrossFilter:E,showCollapsePanel:$,forceRenderOutOfScope:T}):void 0,forceRender:T,ref:p,onOverflowingStateChange:e=>{let{overflowed:t}=e;(t.length!==d.length||d.reduce(((e,n,i)=>e||n!==t[i]),!1))&&h(t)}})))},uh=s.memo(ch),hh=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: ${3*t.gridUnit}px ${2*t.gridUnit}px ${3*t.gridUnit}px ${4*t.gridUnit}px;\n    background: ${t.colors.grayscale.light5};\n    box-shadow: inset 0px -2px 2px -1px ${t.colors.grayscale.light2};\n  `}}
`,ph=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    line-height: 0;\n\n    .loading {\n      margin: ${2*t.gridUnit}px auto ${2*t.gridUnit}px;\n      padding: 0;\n    }\n  `}}
`,mh=y.iK.div`
  ${e=>{let{theme:t}=e;return`\n    font-weight: ${t.typography.weights.bold};\n    color: ${t.colors.grayscale.base};\n    font-size: ${t.typography.sizes.s}px;\n  `}}
`,gh=y.iK.div`
  ${e=>{let{theme:t,hasFilters:n}=e;return`\n    height: 24px;\n    display: flex;\n    align-items: center;\n    padding: 0 ${4*t.gridUnit}px 0 ${4*t.gridUnit}px;\n    border-right: ${n?`1px solid ${t.colors.grayscale.light2}`:0};\n\n    button {\n      display: flex;\n      align-items: center;\n      > .anticon {\n        height: 24px;\n        padding-right: ${t.gridUnit}px;\n      }\n      > .anticon + span, > .anticon {\n          margin-right: 0;\n          margin-left: 0;\n        }\n    }\n  `}}
`,fh=e=>{let{actions:t,canEdit:n,dashboardId:i,dataMaskSelected:o,filterValues:a,isInitialized:l,onSelectionChange:d}=e;const h=(0,r.v9)((e=>e.dataMask)),m=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),g=(0,r.v9)((e=>e.dashboardLayout.present)),f=(0,u.c)(u.T.DASHBOARD_CROSS_FILTERS),v=Cs(),b=f?gu({dataMask:h,chartConfiguration:m,dashboardLayout:g,verboseMaps:v}):[],y=a.length>0||b.length>0,S=(0,s.useMemo)((()=>(0,u.c)(u.T.DASHBOARD_NATIVE_FILTERS)?t:null),[t]);return(0,x.tZ)(hh,Zs(),(0,x.tZ)(ph,null,l?(0,x.tZ)(s.Fragment,null,(0,x.tZ)(lu,null),n&&(0,u.c)(u.T.DASHBOARD_NATIVE_FILTERS)&&(0,x.tZ)(gh,{hasFilters:y},(0,x.tZ)(Cc,{dashboardId:i,createNewOnOpen:0===a.length},(0,x.tZ)(Y.Z.PlusSmall,null)," ",(0,c.t)("Add/Edit Filters"))),!y&&(0,x.tZ)(mh,null,(0,c.t)("No filters are currently added to this dashboard.")),y&&(0,x.tZ)(uh,{dataMaskSelected:o,onFilterSelectionChange:d}),S):(0,x.tZ)(p.Z,{position:"inline-centered"})))},vh=s.memo(fh),bh=y.iK.div`
  display: none;
`,yh=[Tt.KD.nativeFilters.name,Tt.KD.permalinkKey.name],xh=_()((async(e,t,n,i,r)=>{var o;const{location:s}=e,{search:l}=s,d=new URLSearchParams(l),c=new URLSearchParams;let u;d.forEach(((e,t)=>{a()(yh).call(yh,t)||c.append(t,e)}));const h=(0,_t.eY)(Tt.KD.nativeFiltersKey),p=JSON.stringify(i);u=n&&h&&await(0,$s.TZ)(t,p,h,r)?h:await(0,$s.u7)(t,p,r),u&&c.set(Tt.KD.nativeFiltersKey.name,u),a()(o=window.location.pathname).call(o,"/superset/dashboard")&&(e.location.pathname=window.location.pathname,e.replace({search:c.toString()}))}),gs.M),Sh=e=>{let{orientation:t=Fi.Bp.VERTICAL,verticalConfig:n,hidden:i=!1}=e;const o=(0,gi.k6)(),a=Ts(),[l,d]=(0,fs.x)(a),c=(0,r.I0)(),[u,h]=(0,s.useState)(0),p=(0,bs.z)(),m=ks(),g=(0,Pr.D)(m),f=Object.values(m),v=f.filter(no.kI),b=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return null==t?void 0:t.id})),y=(0,Pr.D)(b),S=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),[C]=Hs(v),Z=(0,s.useCallback)(((e,t)=>{d((n=>{var i,r,o;void 0!==(null==(i=t.filterState)?void 0:i.value)&&void 0===(null==(r=l[e.id])||null==(o=r.filterState)?void 0:o.value)&&e.requiredFirst&&c((0,mt.eG)(e.id,t)),n[e.id]={...(0,vs.H)(e.id),...t}}))}),[l,c,d]);(0,s.useEffect)((()=>{if(g&&b===y){const e={};Object.values(m).forEach((t=>{const n=null==g?void 0:g[t.id];if(!n)return;const i=t.filterType,r=t.targets,o=t.defaultDataMask,a=null==n?void 0:n.filterType,s=null==n?void 0:n.targets,l=null==n?void 0:n.defaultDataMask,d=i!==a,c=!mi()(r,s),u=!mi()(o,l);(d||c||u)&&(e[t.id]=(0,vs.H)(t.id))})),wt()(e)||(d((t=>({...t,...e}))),Object.keys(e).forEach((e=>c((0,mt.ze)(e)))))}}),[JSON.stringify(m),JSON.stringify(g),y]);const w=JSON.stringify(a);(0,s.useEffect)((()=>{d((()=>a))}),[w,d]),(0,s.useEffect)((()=>{xh(o,b,u,a,p)}),[b,w,o,u,p]);const R=(0,s.useCallback)((()=>{const e=Object.keys(l);h(1),e.forEach((e=>{l[e]&&c((0,mt.eG)(e,l[e]))}))}),[l,c]),k=(0,s.useCallback)((()=>{const e=[];let t=!1;C.filter(no.kI).forEach((n=>{const{id:i}=n;var r;l[i]&&(null!=(r=n.controlValues)&&r.enableEmptyFilter&&(t=!1),e.push(i),d((e=>{var t;void 0!==(null==(t=e[i].filterState)?void 0:t.value)&&(e[i].filterState.value=void 0)})))})),t&&e.forEach((e=>c((0,mt.ze)(e))))}),[l,c,C,d]);((e,t)=>{const n=ks(),i=Ts();(0,s.useEffect)((()=>{Object.keys(e).forEach((e=>{n[e]||t((t=>{delete t[e]}))}))}),[i,e,n,t])})(l,d);const T=((e,t,n)=>{const i=Object.values(e),r=Object.values(t);return(0,bi.JB)(xs(e),xs(t),{ignoreUndefined:!0})||i.length!==r.length||n.some((t=>{var n;return Ss(t,null==e||null==(n=e[null==t?void 0:t.id])?void 0:n.filterState)}))})(l,a,C.filter(no.kI)),$=(()=>{const[e,t]=(0,s.useState)(!1),n=ks(),i=(0,r.v9)((e=>e.charts));let o=0;return e||(o=document.querySelectorAll('[data-ui-anchor="chart"]').length),(0,s.useEffect)((()=>{if(e)return;if(Object.values(n).find((e=>{let{requiredFirst:t}=e;return t})))return void t(!0);let r;0===o&&(r=setTimeout((()=>{t(!0)}),1e3)),o>0&&void 0!==r&&clearTimeout(r);const a=Object.values(i).filter((e=>{let{chartStatus:t}=e;return"loading"!==t})).length;o>0&&a>=o&&t(!0)}),[i,e,o]),e})(),D=(0,x.tZ)(Fs,{filterBarOrientation:t,width:null==n?void 0:n.width,onApply:R,onClearAll:k,dataMaskSelected:l,dataMaskApplied:a,isApplyDisabled:T}),_=t===Fi.Bp.HORIZONTAL?(0,x.tZ)(vh,{actions:D,canEdit:S,dashboardId:b,dataMaskSelected:l,filterValues:f,isInitialized:$,onSelectionChange:Z}):n?(0,x.tZ)(Nu,{actions:D,canEdit:S,dataMaskSelected:l,filtersOpen:n.filtersOpen,filterValues:f,isInitialized:$,isDisabled:T,height:n.height,offset:n.offset,onSelectionChange:Z,toggleFiltersBar:n.toggleFiltersBar,width:n.width}):null;return i?(0,x.tZ)(bh,null,_):_},Ch=s.memo(Sh),Zh=y.iK.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,wh=e=>{let{id:t,initialWidth:n,minWidth:i,maxWidth:r,enable:o,children:a}=e;const[l,d]=function(e,t){const n=(0,s.useRef)(),[i,r]=(0,s.useState)(t);return(0,s.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,J.rV)(J.dR.common__resizable_sidebar_widths,{}),n.current[e]&&r(n.current[e])}),[e]),[i,function(t){r(t),(0,J.LS)(J.dR.common__resizable_sidebar_widths,{...n.current,[e]:t})}]}(t,n);return(0,x.tZ)(s.Fragment,null,(0,x.tZ)(Zh,null,(0,x.tZ)(Vo.e,{enable:{right:o},handleClasses:{right:"sidebar-resizer"},size:{width:l,height:"100%"},minWidth:i,maxWidth:r,onResizeStop:(e,t,n,i)=>d(l+i.width)})),a(l))},Rh=e=>{const t=e[X._4],n=null==t?void 0:t.children[0];return n===X.PV?e[X._4]:e[n]},kh=(e,t)=>"ant-tabs-nav-wrap"===e.target.className||t.contains(e.target);var Th=n(81545),$h=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall","resizeObserverPolyfill"];function Dh(){return Dh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Dh.apply(this,arguments)}var _h=[],Ih={width:"100%",height:"100%"};function Fh(e){var t=e.className,n=e.children,i=e.debounceTime,r=void 0===i?300:i,o=e.ignoreDimensions,a=void 0===o?_h:o,l=e.parentSizeStyles,d=void 0===l?Ih:l,c=e.enableDebounceLeadingCall,u=void 0===c||c,h=e.resizeObserverPolyfill,p=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,$h),m=(0,s.useRef)(null),g=(0,s.useRef)(0),f=(0,s.useState)({width:0,height:0,top:0,left:0}),v=f[0],b=f[1],y=(0,s.useMemo)((function(){var e=Array.isArray(a)?a:[a];return _()((function(t){b((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),r,{leading:u})}),[r,u,a]);return(0,s.useEffect)((function(){var e=new(h||window.ResizeObserver)((function(e){e.forEach((function(e){var t,n=null!=(t=null==e?void 0:e.contentRect)?t:{},i=n.left,r=n.top,o=n.width,a=n.height;g.current=window.requestAnimationFrame((function(){y({width:o,height:a,top:r,left:i})}))}))}));return m.current&&e.observe(m.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),y.cancel()}}),[y,h]),s.createElement("div",Dh({style:d,ref:m,className:t},p),n(Dh({},v,{ref:m.current,resize:y})))}Fh.propTypes={className:d().string,debounceTime:d().number,enableDebounceLeadingCall:d().bool,ignoreDimensions:d().oneOfType([d().any,d().arrayOf(d().any)]),children:d().func.isRequired};var Eh=n(78718),Mh=n.n(Eh);const Oh={depth:d().number.isRequired,editMode:d().bool,gridComponent:G.cP,handleComponentDrop:d().func.isRequired,isComponentVisible:d().bool.isRequired,resizeComponent:d().func.isRequired,setDirectPathToChild:d().func.isRequired,width:d().number.isRequired,dashboardId:d().number},zh=e=>e.dropIndicatorProps&&(0,x.tZ)("div",{className:"drop-indicator drop-indicator--bottom"}),Uh=e=>e.dropIndicatorProps&&(0,x.tZ)("div",{className:"drop-indicator drop-indicator--top"}),Ph=y.iK.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,Nh=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: flex;
    flex-direction: column;

    /* gutters between rows */
    & > div:not(:last-child):not(.empty-droptarget) {
      margin-bottom: ${4*t.gridUnit}px;
    }

    & > .empty-droptarget {
      width: 100%;
      height: 100%;
    }

    & > .empty-droptarget:first-child {
      height: ${12*t.gridUnit}px;
      margin-top: ${-6*t.gridUnit}px;
      margin-bottom: ${-6*t.gridUnit}px;
    }

    & > .empty-droptarget:only-child {
      height: 80vh;
    }
  `}}
`,Ah=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    // /* Editing guides */
    &.grid-column-guide {
      position: absolute;
      top: 0;
      min-height: 100%;
      background-color: ${(0,S.Zf)(t.colors.primary.base,parseFloat(t.opacity.light)/100)};
      pointer-events: none;
      box-shadow: inset 0 0 0 1px
        ${(0,S.Zf)(t.colors.primary.base,parseFloat(t.opacity.mediumHeavy)/100)};
    }
  `}};
`;class qh extends s.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.getRowGuidePosition=this.getRowGuidePosition.bind(this),this.setGridRef=this.setGridRef.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}getRowGuidePosition(e){return e&&this.grid?e.getBoundingClientRect().bottom-this.grid.getBoundingClientRect().top-2:null}setGridRef(e){this.grid=e}handleResizeStart(){this.setState((()=>({isResizing:!0})))}handleResizeStop(e){let{id:t,widthMultiple:n,heightMultiple:i}=e;this.props.resizeComponent({id:t,width:n,height:i}),this.setState((()=>({isResizing:!1})))}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}handleChangeTab(e){let{pathToTabIndex:t}=e;this.props.setDirectPathToChild(t)}render(){var e,t,n;const{gridComponent:i,handleComponentDrop:r,depth:o,width:a,isComponentVisible:l,editMode:d,canEdit:u,setEditMode:h,dashboardId:p}=this.props,m=(a+X.es)/X.cz-X.es,{isResizing:f}=this.state,v=0===(null==i||null==(e=i.children)?void 0:e.length),b=v&&i.type===g.gn,y=d&&(0,x.tZ)(Ba.XJ,{title:(0,c.t)("Drag and drop components and charts to the dashboard"),description:(0,c.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,x.tZ)(s.Fragment,null,(0,x.tZ)("i",{className:"fa fa-plus"}),(0,c.t)("Create a new chart")),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${p}`,"_blank","noopener noreferrer")},image:"chart.svg"}),S=d?(0,x.tZ)(Ba.XJ,{title:(0,c.t)("Drag and drop components to this tab"),description:(0,c.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,x.tZ)(s.Fragment,null,(0,x.tZ)("i",{className:"fa fa-plus"}),(0,c.t)("Create a new chart")),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${p}`,"_blank","noopener noreferrer")},image:"chart.svg"}):(0,x.tZ)(Ba.XJ,{title:(0,c.t)("There are no components added to this tab"),description:u&&(0,c.t)("You can add the components in the edit mode."),buttonText:u&&(0,c.t)("Edit the dashboard"),buttonAction:u&&(()=>{h(!0)}),image:"chart.svg"});return a<100?null:(0,x.tZ)(s.Fragment,null,v&&(0,x.tZ)(Ph,null,b?S:y),(0,x.tZ)("div",{className:"dashboard-grid",ref:this.setGridRef},(0,x.tZ)(Nh,{className:"grid-content"},d&&(0,x.tZ)(Ae,{component:i,depth:o,parentComponent:null,index:0,orientation:"column",onDrop:this.handleTopDropTargetDrop,className:"empty-droptarget",editMode:!0},zh),null==i||null==(t=i.children)?void 0:t.map(((e,t)=>(0,x.tZ)(ms,{key:e,id:e,parentId:i.id,depth:o+1,index:t,availableColumnCount:X.cz,columnWidth:m,isComponentVisible:l,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,onChangeTab:this.handleChangeTab}))),d&&(null==i||null==(n=i.children)?void 0:n.length)>0&&(0,x.tZ)(Ae,{component:i,depth:o,parentComponent:null,index:i.children.length,orientation:"column",onDrop:r,className:"empty-droptarget",editMode:!0},Uh),f&&Array(X.cz).fill(null).map(((e,t)=>(0,x.tZ)(Ah,{key:`grid-column-${t}`,className:"grid-column-guide",style:{left:t*X.es+t*m,width:m}}))))))}}qh.propTypes=Oh,qh.defaultProps={};const Lh=qh,jh=(0,r.$j)((function(e){let{dashboardState:t,dashboardInfo:n}=e;return{editMode:t.editMode,canEdit:n.dash_edit_perm,dashboardId:n.id}}),(function(e){return(0,i.DE)({handleComponentDrop:Jn._p,resizeComponent:Jn.iO,setDirectPathToChild:Yn.E2,setEditMode:Yn.Mb},e)}))(Lh);var Vh=n(51127),Kh=n.n(Vh);const Bh=e=>{let{topLevelTabs:t}=e;const n=(()=>{const e=(0,r.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}));return(0,s.useMemo)((()=>e?Object.values(e).map((e=>Mh()(e,["id","scope","type"]))):[]),[JSON.stringify(e)])})(),i=(0,r.I0)(),o=(0,r.v9)((e=>e.dashboardLayout.present)),a=(0,r.v9)((e=>e.dashboardInfo)),l=(0,r.v9)((e=>e.dashboardState.directPathToChild)),d=(0,r.v9)((e=>Object.values(e.charts).map((e=>e.id)))),c=(0,s.useMemo)((()=>{const e=ns({currentComponent:Rh(o),directPathToChild:l});return e>-1?e:((e,t)=>Math.max(0,ns({currentComponent:Rh(e),directPathToChild:t})))(o,l)}),[o,l]);(0,s.useEffect)((()=>{if(!(0,u.c)(u.T.DASHBOARD_NATIVE_FILTERS)||0===n.length)return;const e=n.map((e=>{if(e.id.startsWith(ws.Ky))return{filterId:e.id,tabsInScope:[],chartsInScope:[]};const t=(0,Ei.Q)(e.scope,d,o),n=(0,ul.Rz)(o,t);return{filterId:e.id,tabsInScope:Array.from(n),chartsInScope:t}}));i((0,ll.xk)(e))}),[n,o,i]);const h=(0,s.useCallback)((()=>{const e=a.metadata;if(null!=e&&e.color_scheme){const n={...e},r=null==n?void 0:n.color_scheme,o=(null==n?void 0:n.color_scheme_domain)||[],s=(0,Th.Z)(),l=s.get(r,!0)||void 0,d=(null==l?void 0:l.colors)||[],c=s.defaultKey,u=!!l,h=()=>{Rt.Z.put({endpoint:`/api/v1/dashboard/${a.id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({json_metadata:Kh()(n)})}).catch((e=>console.log(e)))},p=e=>{i((0,Yn.uW)(e))},m=()=>{i((0,Wn.a8)({metadata:n})),h()};if(u)u&&!o.length&&(n.color_scheme_domain=d,m()),u&&o.length&&d.toString()!==o.toString()&&(n.color_scheme_domain=d,n.shared_label_colors={},p(r),m());else{var t;const e=(null==c?void 0:c.toString())||"supersetColors";n.color_scheme=e,n.color_scheme_domain=(null==(t=s.get(c))?void 0:t.colors)||[],n.shared_label_colors={},p(e),m()}}}),[d]);(0,xd.d)(h);const p=t?t.children:[X.PV],m=Math.min(c,p.length-1),g=0===m?X.PV:m.toString();return(0,x.tZ)("div",{className:"grid-container"},(0,x.tZ)(Fh,null,(e=>{let{width:t}=e;return(0,x.tZ)(R.ZP,{id:X.PV,activeKey:g,renderTabBar:()=>(0,x.tZ)(s.Fragment,null),fullWidth:!1,animated:!1,allowOverflow:!0},p.map(((e,n)=>(0,x.tZ)(R.ZP.TabPane,{key:0===n?X.PV:n.toString()},(0,x.tZ)(jh,{gridComponent:o[e],depth:X.Mu+1,width:t,isComponentVisible:n===c})))))})))},Hh=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    flex: 1;
    /* Special cases */

    /* A row within a column has inset hover menu */
    .dragdroppable-column .dragdroppable-row .hover-menu--left {
      left: ${-3*t.gridUnit}px;
      background: ${t.colors.grayscale.light5};
      border: 1px solid ${t.colors.grayscale.light2};
    }

    .dashboard-component-tabs {
      position: relative;
    }

    /* A column within a column or tabs has inset hover menu */
    .dragdroppable-column .dragdroppable-column .hover-menu--top,
    .dashboard-component-tabs .dragdroppable-column .hover-menu--top {
      top: ${-3*t.gridUnit}px;
      background: ${t.colors.grayscale.light5};
      border: 1px solid ${t.colors.grayscale.light2};
    }

    /* move Tabs hover menu to top near actual Tabs */
    .dashboard-component-tabs > .hover-menu-container > .hover-menu--left {
      top: 0;
      transform: unset;
      background: transparent;
    }

    /* push Chart actions to upper right */
    .dragdroppable-column .dashboard-component-chart-holder .hover-menu--top,
    .dragdroppable .dashboard-component-header .hover-menu--top {
      right: ${2*t.gridUnit}px;
      top: ${2*t.gridUnit}px;
      background: transparent;
      border: none;
      transform: unset;
      left: unset;
    }
    div:hover > .hover-menu-container .hover-menu,
    .hover-menu-container .hover-menu:hover {
      opacity: 1;
    }

    p {
      margin: 0 0 ${2*t.gridUnit}px 0;
    }

    i.danger {
      color: ${t.colors.error.base};
    }

    i.warning {
      color: ${t.colors.alert.base};
    }
  `}}
`,Wh=y.iK.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
  width: ${e=>{let{width:t}=e;return t}}px;
  ${e=>{let{hidden:t}=e;return t&&"display: none;"}}
`,Yh=y.iK.div`
  position: sticky;
  top: -1px;
  width: ${e=>{let{width:t}=e;return t}}px;
  flex: 0 0 ${e=>{let{width:t}=e;return t}}px;
`,Jh=y.iK.div`
  grid-column: 2;
  grid-row: 1;
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 100vw;
`,Xh=y.iK.div`
  grid-column: 2;
  grid-row: 2;
  // @z-index-above-dashboard-header (100) + 1 = 101
  ${e=>{let{fullSizeChartId:t}=e;return t&&"z-index: 101;"}}
`,Gh=y.iK.div`
  ${e=>{let{theme:t}=e;return x.iv`
    &.dashboard {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      /* drop shadow for top-level tabs only */
      & .dashboard-component-tabs {
        box-shadow: 0 ${t.gridUnit}px ${t.gridUnit}px 0
          ${(0,S.Zf)(t.colors.grayscale.dark2,parseFloat(t.opacity.light)/100)};
        padding-left: ${2*t.gridUnit}px; /* note this is added to tab-level padding, to match header */
      }

      .dropdown-toggle.btn.btn-primary .caret {
        color: ${t.colors.grayscale.light5};
      }

      .background--transparent {
        background-color: transparent;
      }

      .background--white {
        background-color: ${t.colors.grayscale.light5};
      }
    }
    &.dashboard--editing {
      .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      .resizable-container {
        & .dashboard-component-chart-holder {
          .dashboard-chart {
            .chart-container {
              cursor: move;
              opacity: 0.2;
            }

            .slice_container {
              /* disable chart interactions in edit mode */
              pointer-events: none;
            }
          }

          &:hover .dashboard-chart .chart-container {
            opacity: 0.7;
          }
        }

        &:hover,
        &.resizable-container--resizing:hover {
          & > .dashboard-component-chart-holder:after {
            border: 1px dashed ${t.colors.primary.base};
          }
        }
      }

      .resizable-container--resizing:hover > .grid-row:after,
      .hover-menu:hover + .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed ${t.colors.primary.base};
        z-index: 2;
      }

      .grid-row:after,
      .dashboard-component-tabs > .hover-menu + div:after {
        border: 1px dashed ${t.colors.grayscale.light2};
      }

      /* provide hit area in case row contents is edge to edge */
      .dashboard-component-tabs-content {
        .dragdroppable-row {
          padding-top: ${4*t.gridUnit}px;
        }

        & > div:not(:last-child):not(.empty-droptarget) {
          margin-bottom: ${4*t.gridUnit}px;
        }
      }

      .dashboard-component-chart-holder {
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          border: 1px solid transparent;
        }

        &:hover:after {
          border: 1px dashed ${t.colors.primary.base};
          z-index: 2;
        }
      }

      .contract-trigger:before {
        display: none;
      }
    }

    & .dashboard-component-tabs-content {
      & > div:not(:last-child):not(.empty-droptarget) {
        margin-bottom: ${4*t.gridUnit}px;
      }

      & > .empty-droptarget {
        position: absolute;
        width: 100%;
      }

      & > .empty-droptarget:first-child {
        height: ${4*t.gridUnit}px;
        top: -2px;
        z-index: 10;
      }

      & > .empty-droptarget:last-child {
        height: ${3*t.gridUnit}px;
        bottom: 0;
      }
    }

    .empty-droptarget:first-child .drop-indicator--bottom {
      top: ${6*t.gridUnit}px;
    }
  `}}
`,Qh=y.iK.div`
  ${e=>{let{theme:t,editMode:n,marginLeft:i}=e;return x.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: auto;
    flex: 1;

    .grid-container .dashboard-component-tabs {
      box-shadow: none;
      padding-left: 0;
    }

    .grid-container {
      /* without this, the grid will not get smaller upon toggling the builder panel on */
      width: 0;
      flex: 1;
      position: relative;
      margin-top: ${6*t.gridUnit}px;
      margin-right: ${8*t.gridUnit}px;
      margin-bottom: ${6*t.gridUnit}px;
      margin-left: ${i}px;

      ${n&&`\n      max-width: calc(100% - ${zi.XX+16*t.gridUnit}px);\n    `}

      /* this is the ParentSize wrapper */
    & > div:first-child {
        height: inherit !important;
      }
    }

    .dashboard-builder-sidepane {
      width: ${zi.XX}px;
      z-index: 1;
    }

    .dashboard-component-chart-holder {
      width: 100%;
      height: 100%;
      background-color: ${t.colors.grayscale.light5};
      position: relative;
      padding: ${4*t.gridUnit}px;
      overflow-y: visible;

      // transitionable traits to show filter relevance
      transition: opacity ${t.transitionTiming}s ease-in-out,
        border-color ${t.transitionTiming}s ease-in-out,
        box-shadow ${t.transitionTiming}s ease-in-out;

      &.fade-in {
        border-radius: ${t.borderRadius}px;
        box-shadow: inset 0 0 0 2px ${t.colors.primary.base},
          0 0 0 3px
            ${(0,S.Zf)(t.colors.primary.base,parseFloat(t.opacity.light)/100)};
      }

      &.fade-out {
        border-radius: ${t.borderRadius}px;
        box-shadow: none;
      }

      & .missing-chart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        justify-content: center;

        .missing-chart-body {
          font-size: ${t.typography.sizes.s}px;
          position: relative;
          display: flex;
        }
      }
    }
  `}}
`,ep=()=>{var e,t;const i=(0,r.I0)(),o=(0,xi.fG)(),a=(0,y.Fg)(),l=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return`${t.id}`})),d=(0,r.v9)((e=>e.dashboardLayout.present)),h=(0,r.v9)((e=>e.dashboardState.editMode)),m=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),g=(0,r.v9)((e=>{let{dashboardState:t}=e;return t.dashboardIsSaving})),f=(0,r.v9)((e=>e.dashboardState.fullSizeChartId)),v=(0,yt.c)(u.T.DASHBOARD_CROSS_FILTERS),S=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return(0,yt.c)(u.T.HORIZONTAL_FILTER_BAR)?t.filterBarOrientation:Fi.Bp.VERTICAL})),w=(0,s.useCallback)((e=>{let{pathToTabIndex:t}=e;i((0,Yn.E2)(t))}),[i]),R=(0,s.useCallback)((()=>{i((0,Jn.g3)());const e=is(Rh(d),0);i((0,Yn.E2)(e))}),[d,i]),k=(0,s.useCallback)((e=>i((0,Jn._p)(e))),[i]),T=s.useRef(null),$=d[X._4],D=null==$?void 0:$.children[0],_=D!==X.PV?d[D]:void 0,I=(0,_t.eY)(Tt.KD.standalone),F=I===X._B.REPORT,E=o.hideTitle||I===X._B.HIDE_NAV_AND_TITLE||F,[M,O]=(0,s.useState)(0);(0,s.useEffect)((()=>{var e,t;let i;return O((null==(e=T.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0),n.g.hasOwnProperty("ResizeObserver")&&T.current&&(i=new ResizeObserver((e=>{O((t=>{var n,i;return(null==e||null==(n=e[0])||null==(i=n.contentRect)?void 0:i.height)||t}))})),i.observe(T.current)),()=>{var e;null==(e=i)||e.disconnect()}}),[]);const{showDashboard:z,dashboardFiltersOpen:U,toggleDashboardFiltersOpen:P,nativeFiltersEnabled:N}=(()=>{const[e,t]=(0,s.useState)(!1),n=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),i=ks(),o=Object.values(i),a=(0,_t.eY)(Tt.KD.expandFilters),[l,d]=(0,s.useState)(null!=a?a:!!o.length),c=(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS)&&(n||!n&&0!==o.length),h=o.filter((e=>e.requiredFirst)),p=Ts(),m=e||!c||!(c&&h.length&&h.find((e=>{var t,n;let{id:i}=e;return void 0===(null==(t=p[i])||null==(n=t.filterState)?void 0:n.value)}))),g=(0,s.useCallback)((e=>{d(null!=e?e:!l)}),[l]);return(0,s.useEffect)((()=>{!1===a||0===o.length&&c?g(!1):g(!0)}),[o.length]),(0,s.useEffect)((()=>{m&&t(!0)}),[m]),{showDashboard:m,dashboardFiltersOpen:l,toggleDashboardFiltersOpen:g,nativeFiltersEnabled:c}})(),[A,q]=(0,C.W)({threshold:[1]}),L=(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS_SET)&&(0,yt.c)(u.T.DASHBOARD_NATIVE_FILTERS),j=(v||N)&&!h,V=`calc(100vh - ${zi.UN+(q||I?0:zi.Ky)+(L?zi.a7:0)}px)`,K=U?0:M+20,B=(0,s.useMemo)((()=>({marginLeft:U||h||!N||S===Fi.Bp.HORIZONTAL?0:-32})),[U,h,S,N]),H=(0,s.useRef)(_);(0,s.useEffect)((()=>{var e,t,n;const r=null==(e=H.current)||null==(t=e.children)?void 0:t.length,o=null==_||null==(n=_.children)?void 0:n.length;if(void 0!==r&&void 0!==o&&o>r){const e=is(Rh(d),o-1);i((0,Yn.E2)(e))}H.current=_}),[_]);const W=(0,s.useCallback)((e=>{let{dropIndicatorProps:t}=e;return(0,x.tZ)("div",null,!E&&(0,x.tZ)(ei,null),j&&S===Fi.Bp.HORIZONTAL&&(0,x.tZ)(Ch,{orientation:Fi.Bp.HORIZONTAL,hidden:F}),t&&(0,x.tZ)("div",t),!F&&_&&!o.hideNav&&(0,x.tZ)(ha,{shouldFocus:kh,menuItems:[(0,x.tZ)(ii,{icon:(0,x.tZ)(Y.Z.FallOutlined,{iconSize:"xl"}),label:(0,c.t)("Collapse tab content"),onClick:R})],editMode:h},(0,x.tZ)(ms,{id:null==_?void 0:_.id,parentId:X._4,depth:X.Mu+1,index:0,renderTabContent:!1,renderHoverMenu:!1,onChangeTab:w})))}),[N,S,h,w,R,E,F,_,o.hideNav]),J=U||h||!N||S===Fi.Bp.HORIZONTAL?8*a.gridUnit:0;return(0,x.tZ)(Hh,null,j&&S===Fi.Bp.VERTICAL&&(0,x.tZ)(s.Fragment,null,(0,x.tZ)(wh,{id:`dashboard:${l}`,enable:U,minWidth:zi.I6,maxWidth:zi.aF,initialWidth:zi.I6},(e=>{const t=U?e:zi.gz;return(0,x.tZ)(Wh,{width:t,hidden:F},(0,x.tZ)(Yh,{ref:A,width:t},(0,x.tZ)(Z.Z,null,(0,x.tZ)(Ch,{orientation:Fi.Bp.VERTICAL,verticalConfig:{filtersOpen:U,toggleFiltersBar:P,width:t,height:V,offset:K}}))))}))),(0,x.tZ)(Jh,{ref:T},(0,x.tZ)(Ae,{component:$,parentComponent:null,depth:X.Mu,index:0,orientation:"column",onDrop:k,editMode:h,disableDragDrop:!!_,style:B},W)),(0,x.tZ)(Xh,{fullSizeChartId:f},(0,x.tZ)(x.xB,{styles:x.iv`
            // @z-index-above-dashboard-header (100) + 1 = 101
            ${f&&"div > .filterStatusPopover.ant-popover{z-index: 101}"}
          `}),!h&&!_&&0===(null==(e=d[X.PV])||null==(t=e.children)?void 0:t.length)&&(0,x.tZ)(Ba.XJ,{title:(0,c.t)("There are no charts added to this dashboard"),description:m&&(0,c.t)("Go to the edit mode to configure the dashboard and add charts"),buttonText:m&&(0,c.t)("Edit the dashboard"),buttonAction:()=>i((0,Yn.Mb)(!0)),image:"dashboard.svg"}),(0,x.tZ)(Gh,{className:b()("dashboard",h&&"dashboard--editing")},(0,x.tZ)(Qh,{className:"dashboard-content",editMode:h,marginLeft:J},z?(0,x.tZ)(Bh,{topLevelTabs:_}):(0,x.tZ)(p.Z,null),h&&(0,x.tZ)(pt,{topOffset:M})))),g&&(0,x.tZ)(p.Z,{css:x.iv`
            && {
              position: fixed;
            }
          `}))},tp=[g.dW,g.xh,g.t];function np(e){return!Object.values(e).some((e=>{let{type:t}=e;return t&&a()(tp).call(tp,t)}))}const ip={actions:d().shape({addSliceToDashboard:d().func.isRequired,removeSliceFromDashboard:d().func.isRequired,triggerQuery:d().func.isRequired,logEvent:d().func.isRequired,clearDataMaskState:d().func.isRequired}).isRequired,dashboardInfo:G.$X.isRequired,dashboardState:G.DZ.isRequired,charts:d().objectOf(G.$6).isRequired,slices:d().objectOf(G.Rw).isRequired,activeFilters:d().object.isRequired,chartConfiguration:d().object,datasources:d().object.isRequired,ownDataCharts:d().object.isRequired,layout:d().object.isRequired,impressionId:d().string.isRequired,initMessages:d().array,timeout:d().number,userId:d().string};class rp extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",rp.unload):window.removeEventListener("beforeunload",rp.unload)}static unload(){const e=(0,c.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,n;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(n=e.ownDataCharts)?n:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,m.Z)(),{dashboardState:t,layout:n}=this.props,i={is_soft_navigation:xt.Yd.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:xt.Yd.getTimestamp(),is_empty:np(n),is_published:t.isPublished,bootstrap_data_length:e.length},r=(0,li.Z)();r&&(i.target_id=r),this.props.actions.logEvent(xt.Wl,i),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:xt.Yd.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=f(this.props.layout),n=f(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<n.length?n.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(n=e.layout,i=t,Object.values(n).find((e=>e&&e.type===g.dW&&e.meta&&e.meta.chartId===i))));var n,i})):t.length>n.length&&t.filter((e=>-1===n.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:n,appliedOwnDataCharts:i}=this,{activeFilters:r,ownDataCharts:o,chartConfiguration:a}=this.props;(0,u.c)(u.T.DASHBOARD_CROSS_FILTERS)&&!a||(t||(0,bi.JB)(i,o,{ignoreUndefined:!0})&&(0,bi.JB)(n,r,{ignoreUndefined:!0})||this.applyFilters(),e?rp.onBeforeUnload(!0):rp.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:xt.Yd.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(xt.Ev,{...this.visibilityEventData,duration:xt.Yd.getTimestamp()-e})}}getAllCharts(){return Object.values(this.props.charts)}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:n}=this.props,i=Object.keys(t),r=Object.keys(e),o=new Set(i.concat(r)),s=((e,t)=>{const n=Object.keys(e),i=Object.keys(t),r=(o=n,s=i,[...o.filter((e=>!a()(s).call(s,e))),...s.filter((e=>!a()(o).call(o,e)))]).filter((n=>e[n]||t[n]));var o,s;return new Set([...n,...i]).forEach((n=>{(0,bi.JB)(e[n],t[n])||r.push(n)})),[...new Set(r)]})(n,this.appliedOwnDataCharts);[...o].forEach((n=>{if(!a()(i).call(i,n)&&a()(r).call(r,n))s.push(...e[n].scope);else if(a()(r).call(r,n)){if((0,bi.JB)(e[n].values,t[n].values,{ignoreUndefined:!0})||s.push(...t[n].scope),!(0,bi.JB)(e[n].scope,t[n].scope)){const i=(t[n].scope||[]).concat(e[n].scope||[]);s.push(...i)}}else s.push(...t[n].scope)})),this.refreshCharts([...new Set(s)]),this.appliedFilters=t,this.appliedOwnDataCharts=n}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,x.tZ)(p.Z,null):(0,x.tZ)(s.Fragment,null,(0,x.tZ)(ep,null))}}rp.contextType=h.Zn,rp.propTypes=ip,rp.defaultProps={initMessages:[],timeout:60,userId:""};const op=rp;var ap=n(50810),sp=n(87915);const lp=(0,r.$j)((function(e){var t,n,i,r,o;const{datasources:a,sliceEntities:s,charts:l,dataMask:d,dashboardInfo:c,dashboardState:u,dashboardLayout:h,impressionId:p,nativeFilters:m}=e;return{initMessages:null==(t=c.common)?void 0:t.flash_messages,timeout:null==(n=c.common)||null==(i=n.conf)?void 0:i.SUPERSET_WEBSERVER_TIMEOUT,userId:c.userId,dashboardInfo:c,dashboardState:u,charts:l,datasources:a,activeFilters:{...(0,nn.De)(),...(0,sp.g)({chartConfiguration:null==(r=c.metadata)?void 0:r.chart_configuration,nativeFilters:m.filters,dataMask:d,allSliceIds:u.sliceIds})},chartConfiguration:null==(o=c.metadata)?void 0:o.chart_configuration,ownDataCharts:(0,sp.U)(d,"ownState"),slices:s.slices,layout:h.present,impressionId:p}}),(function(e){return{actions:(0,i.DE)({setDatasources:ap.Fy,clearDataMaskState:mt.sh,addSliceToDashboard:Yn.Pi,removeSliceFromDashboard:Yn.rL,triggerQuery:ui.triggerQuery,logEvent:Gn.logEvent},e)}}))(op)},18451:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});var i=n(28216);function r(){return(0,i.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},90057:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,x:()=>o});var i=n(12902),r=n(67294);function o(e){var t=(0,r.useState)((function(){return(0,i.vV)("function"==typeof e?e():e,!0)})),n=t[1];return[t[0],(0,r.useCallback)((function(e){n("function"==typeof e?(0,i.ZP)(e):(0,i.vV)(e))}),[])]}function a(e,t,n){var o=(0,r.useMemo)((function(){return(0,i.ZP)(e)}),[e]);return(0,r.useReducer)(o,t,n)}}}]);
//# sourceMappingURL=e45c21c8a21277ecea70.chunk.js.map