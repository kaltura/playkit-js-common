"use strict";(self.webpackChunk_playkit_js_common_storybook=self.webpackChunk_playkit_js_common_storybook||[]).push([[701],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{renderDocs:()=>renderDocs,unmountDocs:()=>unmountDocs});__webpack_require__("./node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js");var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),wrapper={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},main={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},heading={textAlign:"center"},NoDocs=function NoDocs(){return compat_module.default.createElement("div",{style:wrapper,className:"sb-nodocs sb-wrapper"},compat_module.default.createElement("div",{style:main},compat_module.default.createElement("h1",{style:heading},"No Docs"),compat_module.default.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",compat_module.default.createElement("code",null,"docs")," parameter. If you think this is an error:"),compat_module.default.createElement("ul",null,compat_module.default.createElement("li",null,"Please check the story definition."),compat_module.default.createElement("li",null,"Please check the Storybook config."),compat_module.default.createElement("li",null,"Try reloading the page.")),compat_module.default.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function renderDocs(story,docsContext,element,callback){return function renderDocsAsync(_x,_x2,_x3){return _renderDocsAsync.apply(this,arguments)}(story,docsContext,element).then(callback)}function _renderDocsAsync(){return _renderDocsAsync=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(story,docsContext,element){var _docs$getContainer,_docs$getPage,docs,DocsContainer,Page,docsElement;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(null!=(docs=story.parameters.docs)&&docs.getPage||null!=docs&&docs.page)||(null!=docs&&docs.getContainer||null!=docs&&docs.container)){_context.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(_context.t1=docs.container,_context.t1){_context.next=8;break}return _context.next=7,null===(_docs$getContainer=docs.getContainer)||void 0===_docs$getContainer?void 0:_docs$getContainer.call(docs);case 7:_context.t1=_context.sent;case 8:if(_context.t0=_context.t1,_context.t0){_context.next=11;break}_context.t0=function(_ref){var children=_ref.children;return compat_module.default.createElement(compat_module.default.Fragment,null,children)};case 11:if(DocsContainer=_context.t0,_context.t3=docs.page,_context.t3){_context.next=17;break}return _context.next=16,null===(_docs$getPage=docs.getPage)||void 0===_docs$getPage?void 0:_docs$getPage.call(docs);case 16:_context.t3=_context.sent;case 17:if(_context.t2=_context.t3,_context.t2){_context.next=20;break}_context.t2=NoDocs;case 20:return Page=_context.t2,docsElement=compat_module.default.createElement(DocsContainer,{key:story.componentId,context:docsContext},compat_module.default.createElement(Page,null)),_context.next=24,new Promise((function(resolve){compat_module.default.render(docsElement,element,resolve)}));case 24:case"end":return _context.stop()}}),_callee)}))),_renderDocsAsync.apply(this,arguments)}function unmountDocs(element){compat_module.default.unmountComponentAtNode(element)}NoDocs.displayName="NoDocs"},"./node_modules/preact/compat/dist/compat.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>O,Component:()=>external_KalturaPlayer_ui_preact_.Component,Fragment:()=>external_KalturaPlayer_ui_preact_.Fragment,PureComponent:()=>compat_module_w,StrictMode:()=>dn,Suspense:()=>D,SuspenseList:()=>compat_module_V,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>un,cloneElement:()=>fn,createContext:()=>external_KalturaPlayer_ui_preact_.createContext,createElement:()=>external_KalturaPlayer_ui_preact_.createElement,createFactory:()=>ln,createPortal:()=>compat_module_j,createRef:()=>external_KalturaPlayer_ui_preact_.createRef,default:()=>Sn,findDOMNode:()=>sn,flushSync:()=>vn,forwardRef:()=>compat_module_k,hydrate:()=>compat_module_q,isValidElement:()=>cn,lazy:()=>M,memo:()=>compat_module_x,render:()=>Y,startTransition:()=>pn,unmountComponentAtNode:()=>an,unstable_batchedUpdates:()=>hn,useCallback:()=>T,useContext:()=>q,useDebugValue:()=>x,useDeferredValue:()=>mn,useEffect:()=>h,useErrorBoundary:()=>P,useId:()=>V,useImperativeHandle:()=>A,useInsertionEffect:()=>_n,useLayoutEffect:()=>s,useMemo:()=>F,useReducer:()=>y,useRef:()=>_,useState:()=>p,useSyncExternalStore:()=>bn,useTransition:()=>yn,version:()=>on});var t,r,u,i,external_KalturaPlayer_ui_preact_=__webpack_require__("preact"),o=0,f=[],c=[],e=external_KalturaPlayer_ui_preact_.options.__b,a=external_KalturaPlayer_ui_preact_.options.__r,v=external_KalturaPlayer_ui_preact_.options.diffed,l=external_KalturaPlayer_ui_preact_.options.__c,m=external_KalturaPlayer_ui_preact_.options.unmount;function d(t,u){external_KalturaPlayer_ui_preact_.options.__h&&external_KalturaPlayer_ui_preact_.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function p(n){return o=1,y(B,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){r.u=!0;var f=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter((function(n){return n.__c}));if(u.every((function(n){return!n.__N})))return!f||f.call(this,n,t,r);var i=!1;return u.forEach((function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}})),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))}}return o.__N||o.__}function h(u,i){var o=d(t++,3);!external_KalturaPlayer_ui_preact_.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function s(u,i){var o=d(t++,4);!external_KalturaPlayer_ui_preact_.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F((function(){return{current:n}}),[])}function A(n,t,r){o=6,s((function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0}),null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F((function(){return n}),t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){external_KalturaPlayer_ui_preact_.options.useDebugValue&&external_KalturaPlayer_ui_preact_.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],external_KalturaPlayer_ui_preact_.options.__e(r,t.__v)}}external_KalturaPlayer_ui_preact_.options.__b=function(n){r=null,e&&e(n)},external_KalturaPlayer_ui_preact_.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0}))):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r},external_KalturaPlayer_ui_preact_.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===external_KalturaPlayer_ui_preact_.options.requestAnimationFrame||((i=external_KalturaPlayer_ui_preact_.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c}))),u=r=null},external_KalturaPlayer_ui_preact_.options.__c=function(t,r){r.some((function(t){try{t.__h.forEach(k),t.__h=t.__h.filter((function(n){return!n.__||w(n)}))}catch(u){r.some((function(n){n.__h&&(n.__h=[])})),r=[],external_KalturaPlayer_ui_preact_.options.__e(u,t.__v)}})),l&&l(t,r)},external_KalturaPlayer_ui_preact_.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach((function(n){try{k(n)}catch(n){r=n}})),u.__H=void 0,r&&external_KalturaPlayer_ui_preact_.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some((function(t,r){return t!==n[r]}))}function B(n,t){return"function"==typeof t?t(n):t}function compat_module_g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function compat_module_w(n){this.props=n}function compat_module_x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,external_KalturaPlayer_ui_preact_.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(compat_module_w.prototype=new external_KalturaPlayer_ui_preact_.Component).isPureReactComponent=!0,compat_module_w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=external_KalturaPlayer_ui_preact_.options.__b;external_KalturaPlayer_ui_preact_.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function compat_module_k(n){function t(t){var e=compat_module_g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var compat_module_A=function(n,t){return null==n?null:(0,external_KalturaPlayer_ui_preact_.toChildArray)((0,external_KalturaPlayer_ui_preact_.toChildArray)(n).map(t))},O={map:compat_module_A,forEach:compat_module_A,count:function(n){return n?(0,external_KalturaPlayer_ui_preact_.toChildArray)(n).length:0},only:function(n){var t=(0,external_KalturaPlayer_ui_preact_.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:external_KalturaPlayer_ui_preact_.toChildArray},compat_module_T=external_KalturaPlayer_ui_preact_.options.__e;external_KalturaPlayer_ui_preact_.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);compat_module_T(n,t,e,r)};var I=external_KalturaPlayer_ui_preact_.options.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),n.__c.__H=null),null!=(n=compat_module_g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map((function(n){return L(n,t,e)}))),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map((function(n){return U(n,t,e)})),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function compat_module_F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function M(n){var e,r,u;function o(o){if(e||(e=n()).then((function(n){r=n.default||n}),(function(n){u=n})),u)throw u;if(!r)throw e;return(0,external_KalturaPlayer_ui_preact_.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function compat_module_V(){this.u=null,this.o=null}external_KalturaPlayer_ui_preact_.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n)},(D.prototype=new external_KalturaPlayer_ui_preact_.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=compat_module_F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,external_KalturaPlayer_ui_preact_.createElement)(external_KalturaPlayer_ui_preact_.Fragment,null,n.fallback);return i&&(i.__h=null),[(0,external_KalturaPlayer_ui_preact_.createElement)(external_KalturaPlayer_ui_preact_.Fragment,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function compat_module_P(n){return this.getChildContext=function(){return n.context},n.children}function $(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,external_KalturaPlayer_ui_preact_.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,external_KalturaPlayer_ui_preact_.render)((0,external_KalturaPlayer_ui_preact_.createElement)(compat_module_P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function compat_module_j(n,e){var r=(0,external_KalturaPlayer_ui_preact_.createElement)($,{__v:n,i:e});return r.containerInfo=e,r}(compat_module_V.prototype=new external_KalturaPlayer_ui_preact_.Component).__a=function(n){var t=this,e=compat_module_F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u()};e?e(o):o()}},compat_module_V.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,external_KalturaPlayer_ui_preact_.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},compat_module_V.prototype.componentDidUpdate=compat_module_V.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(t,e){W(n,e,t)}))};var compat_module_z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,compat_module_B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H="undefined"!=typeof document,Z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function Y(n,t,e){return null==t.__k&&(t.textContent=""),(0,external_KalturaPlayer_ui_preact_.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function compat_module_q(n,t,e){return(0,external_KalturaPlayer_ui_preact_.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}external_KalturaPlayer_ui_preact_.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(external_KalturaPlayer_ui_preact_.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})}));var G=external_KalturaPlayer_ui_preact_.options.event;function J(){}function K(){return this.cancelBubble}function Q(){return this.defaultPrevented}external_KalturaPlayer_ui_preact_.options.event=function(n){return G&&(n=G(n)),n.persist=J,n.isPropagationStopped=K,n.isDefaultPrevented=Q,n.nativeEvent=n};var X,nn={configurable:!0,get:function(){return this.class}},tn=external_KalturaPlayer_ui_preact_.options.vnode;external_KalturaPlayer_ui_preact_.options.vnode=function(n){var t=n.type,e=n.props,u=e;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in u={},e){var l=e[i];H&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in e&&null==l||("defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!Z(e.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&compat_module_B.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=l)}"select"==t&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,external_KalturaPlayer_ui_preact_.toChildArray)(e.children).forEach((function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)}))),"select"==t&&null!=u.defaultValue&&(u.value=(0,external_KalturaPlayer_ui_preact_.toChildArray)(e.children).forEach((function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value}))),n.props=u,e.class!=e.className&&(nn.enumerable="className"in e,null!=e.className&&(u.class=e.className),Object.defineProperty(u,"className",nn))}n.$$typeof=compat_module_z,tn&&tn(n)};var en=external_KalturaPlayer_ui_preact_.options.__r;external_KalturaPlayer_ui_preact_.options.__r=function(n){en&&en(n),X=n.__c};var rn=external_KalturaPlayer_ui_preact_.options.diffed;external_KalturaPlayer_ui_preact_.options.diffed=function(n){rn&&rn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),X=null};var un={ReactCurrentDispatcher:{current:{readContext:function(n){return X.__n[n.__c].props.value}}}},on="17.0.2";function ln(n){return external_KalturaPlayer_ui_preact_.createElement.bind(null,n)}function cn(n){return!!n&&n.$$typeof===compat_module_z}function fn(n){return cn(n)?external_KalturaPlayer_ui_preact_.cloneElement.apply(null,arguments):n}function an(n){return!!n.__k&&((0,external_KalturaPlayer_ui_preact_.render)(null,n),!0)}function sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var hn=function(n,t){return n(t)},vn=function(n,t){return n(t)},dn=external_KalturaPlayer_ui_preact_.Fragment;function pn(n){n()}function mn(n){return n}function yn(){return[!1,pn]}var _n=s;function bn(n,t){var e=t(),r=p({h:{__:e,v:t}}),u=r[0].h,o=r[1];return s((function(){u.__=e,u.v=t,E(u.__,t())||o({h:u})}),[n,e,t]),h((function(){return E(u.__,u.v())||o({h:u}),n((function(){E(u.__,u.v())||o({h:u})}))}),[n]),e}var Sn={useState:p,useId:V,useReducer:y,useEffect:h,useLayoutEffect:s,useInsertionEffect:_n,useTransition:yn,useDeferredValue:mn,useSyncExternalStore:bn,startTransition:pn,useRef:_,useImperativeHandle:A,useMemo:F,useCallback:T,useContext:q,useDebugValue:x,version:"17.0.2",Children:O,render:Y,hydrate:compat_module_q,unmountComponentAtNode:an,createPortal:compat_module_j,createElement:external_KalturaPlayer_ui_preact_.createElement,createContext:external_KalturaPlayer_ui_preact_.createContext,createFactory:ln,cloneElement:fn,createRef:external_KalturaPlayer_ui_preact_.createRef,Fragment:external_KalturaPlayer_ui_preact_.Fragment,isValidElement:cn,findDOMNode:sn,Component:external_KalturaPlayer_ui_preact_.Component,PureComponent:compat_module_w,memo:compat_module_x,forwardRef:compat_module_k,flushSync:vn,unstable_batchedUpdates:hn,StrictMode:dn,Suspense:D,SuspenseList:compat_module_V,lazy:M,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:un}}}]);