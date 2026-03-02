var vc=Object.defineProperty;var xc=(e,t,n)=>t in e?vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>xc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var os={exports:{}},ul={},as={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=Symbol.for("react.element"),wc=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Tc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),Lc=Symbol.for("react.lazy"),$o=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},us=Object.assign,cs={};function fn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||ss}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ds(){}ds.prototype=fn.prototype;function Zi(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||ss}var Ji=Zi.prototype=new ds;Ji.constructor=Zi;us(Ji,fn.prototype);Ji.isPureReactComponent=!0;var Uo=Array.isArray,fs=Object.prototype.hasOwnProperty,qi={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function ms(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)fs.call(t,r)&&!ps.hasOwnProperty(r)&&(l[r]=t[r]);var f=arguments.length-2;if(f===1)l.children=n;else if(1<f){for(var p=Array(f),g=0;g<f;g++)p[g]=arguments[g+2];l.children=p}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)l[r]===void 0&&(l[r]=f[r]);return{$$typeof:tr,type:e,key:i,ref:s,props:l,_owner:qi.current}}function Mc(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yo=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zc(""+e.key):t.toString(36)}function Cr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case tr:case wc:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Ll(s,0):r,Uo(l)?(n="",e!=null&&(n=e.replace(Yo,"$&/")+"/"),Cr(l,t,n,"",function(g){return g})):l!=null&&(eo(l)&&(l=Mc(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Yo,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Uo(e))for(var f=0;f<e.length;f++){i=e[f];var p=r+Ll(i,f);s+=Cr(i,t,n,p,l)}else if(p=Pc(e),typeof p=="function")for(e=p.call(e),f=0;!(i=e.next()).done;)i=i.value,p=r+Ll(i,f++),s+=Cr(i,t,n,p,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return Cr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Nr={transition:null},Ic={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:qi};function hs(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=fn;z.Fragment=kc;z.Profiler=jc;z.PureComponent=Zi;z.StrictMode=Sc;z.Suspense=Ec;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ic;z.act=hs;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=us({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(p in t)fs.call(t,p)&&!ps.hasOwnProperty(p)&&(r[p]=t[p]===void 0&&f!==void 0?f[p]:t[p])}var p=arguments.length-2;if(p===1)r.children=n;else if(1<p){f=Array(p);for(var g=0;g<p;g++)f[g]=arguments[g+2];r.children=f}return{$$typeof:tr,type:e.type,key:l,ref:i,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Nc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};z.createElement=ms;z.createFactory=function(e){var t=ms.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Tc,render:e}};z.isValidElement=eo;z.lazy=function(e){return{$$typeof:Lc,_payload:{_status:-1,_result:e},_init:bc}};z.memo=function(e,t){return{$$typeof:Ac,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};z.unstable_act=hs;z.useCallback=function(e,t){return me.current.useCallback(e,t)};z.useContext=function(e){return me.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return me.current.useDeferredValue(e)};z.useEffect=function(e,t){return me.current.useEffect(e,t)};z.useId=function(){return me.current.useId()};z.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return me.current.useMemo(e,t)};z.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};z.useRef=function(e){return me.current.useRef(e)};z.useState=function(e){return me.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return me.current.useTransition()};z.version="18.3.1";as.exports=z;var I=as.exports;const Ft=_c(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=I,Dc=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Fc=Object.prototype.hasOwnProperty,Hc=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Fc.call(t,r)&&!Bc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Dc,type:e,key:i,ref:s,props:l,_owner:Hc.current}}ul.Fragment=Rc;ul.jsx=gs;ul.jsxs=gs;os.exports=ul;var u=os.exports,ri={},ys={exports:{}},Ce={},vs={exports:{}},xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var M=T.length;T.push(L);e:for(;0<M;){var X=M-1>>>1,ee=T[X];if(0<l(ee,L))T[X]=L,T[M]=ee,M=X;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],M=T.pop();if(M!==L){T[0]=M;e:for(var X=0,ee=T.length,or=ee>>>1;X<or;){var kt=2*(X+1)-1,Al=T[kt],St=kt+1,ar=T[St];if(0>l(Al,M))St<ee&&0>l(ar,Al)?(T[X]=ar,T[St]=M,X=St):(T[X]=Al,T[kt]=M,X=kt);else if(St<ee&&0>l(ar,M))T[X]=ar,T[St]=M,X=St;else break e}}return L}function l(T,L){var M=T.sortIndex-L.sortIndex;return M!==0?M:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,f=s.now();e.unstable_now=function(){return s.now()-f}}var p=[],g=[],_=1,o=null,a=3,c=!1,h=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var L=n(g);L!==null;){if(L.callback===null)r(g);else if(L.startTime<=T)r(g),L.sortIndex=L.expirationTime,t(p,L);else break;L=n(g)}}function w(T){if(y=!1,v(T),!h)if(n(p)!==null)h=!0,Tl(S);else{var L=n(g);L!==null&&El(w,L.startTime-T)}}function S(T,L){h=!1,y&&(y=!1,d(E),E=-1),c=!0;var M=a;try{for(v(L),o=n(p);o!==null&&(!(o.expirationTime>L)||T&&!oe());){var X=o.callback;if(typeof X=="function"){o.callback=null,a=o.priorityLevel;var ee=X(o.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?o.callback=ee:o===n(p)&&r(p),v(L)}else r(p);o=n(p)}if(o!==null)var or=!0;else{var kt=n(g);kt!==null&&El(w,kt.startTime-L),or=!1}return or}finally{o=null,a=M,c=!1}}var j=!1,N=null,E=-1,A=5,P=-1;function oe(){return!(e.unstable_now()-P<A)}function B(){if(N!==null){var T=e.unstable_now();P=T;var L=!0;try{L=N(!0,T)}finally{L?D():(j=!1,N=null)}}else j=!1}var D;if(typeof m=="function")D=function(){m(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Te=W.port2;W.port1.onmessage=B,D=function(){Te.postMessage(null)}}else D=function(){x(B,0)};function Tl(T){N=T,j||(j=!0,D())}function El(T,L){E=x(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||c||(h=!0,Tl(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return a},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(T){switch(a){case 1:case 2:case 3:var L=3;break;default:L=a}var M=a;a=L;try{return T()}finally{a=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=a;a=T;try{return L()}finally{a=M}},e.unstable_scheduleCallback=function(T,L,M){var X=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?X+M:X):M=X,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,T={id:_++,callback:L,priorityLevel:T,startTime:M,expirationTime:ee,sortIndex:-1},M>X?(T.sortIndex=M,t(g,T),n(p)===null&&T===n(g)&&(y?(d(E),E=-1):y=!0,El(w,M-X))):(T.sortIndex=ee,t(p,T),h||c||(h=!0,Tl(S))),T},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(T){var L=a;return function(){var M=a;a=L;try{return T.apply(this,arguments)}finally{a=M}}}})(xs);vs.exports=xs;var Wc=vs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=I,je=Wc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _s=new Set,Rn={};function Ot(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Rn[e]=t,e=0;e<t.length;e++)_s.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=Object.prototype.hasOwnProperty,Gc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},Ko={};function Qc(e){return li.call(Ko,e)?!0:li.call(Xo,e)?!1:Gc.test(e)?Ko[e]=!0:(Xo[e]=!0,!1)}function $c(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||$c(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var to=/[\-:]([a-z])/g;function no(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(to,no);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(to,no);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(to,no);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ro(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,l,r)&&(n=null),r||l===null?Qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),lo=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),ws=Symbol.for("react.provider"),ks=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),oo=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Ss=Symbol.for("react.offscreen"),Zo=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Pl;function Cn(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Ml=!1;function zl(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,f=i.length-1;1<=s&&0<=f&&l[s]!==i[f];)f--;for(;1<=s&&0<=f;s--,f--)if(l[s]!==i[f]){if(s!==1||f!==1)do if(s--,f--,0>f||l[s]!==i[f]){var p=`
`+l[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=s&&0<=f);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function Yc(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ht:return"Portal";case ii:return"Profiler";case lo:return"StrictMode";case oi:return"Suspense";case ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ks:return(e.displayName||"Context")+".Consumer";case ws:return(e._context.displayName||"Context")+".Provider";case io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oo:return t=e.displayName||null,t!==null?t:si(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return si(e(t))}catch{}}return null}function Xc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(t);case 8:return t===lo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kc(e){var t=js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Kc(e))}function Cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ui(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ns(e,t){t=t.checked,t!=null&&ro(e,"checked",t,!1)}function ci(e,t){Ns(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?di(e,t.type,n):t.hasOwnProperty("defaultValue")&&di(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function di(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Nn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Ts(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Es(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Es(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,As=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zc=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Zc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Ls(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Ps(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ls(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Jc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(e,t){if(t){if(Jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function hi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,qt=null,en=null;function na(e){if(e=lr(e)){if(typeof yi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ml(t),yi(e.stateNode,e.type,t))}}function Ms(e){qt?en?en.push(e):en=[e]:qt=e}function zs(){if(qt){var e=qt,t=en;if(en=qt=null,na(e),t)for(e=0;e<t.length;e++)na(t[e])}}function bs(e,t){return e(t)}function Is(){}var bl=!1;function Os(e,t,n){if(bl)return e(t,n);bl=!0;try{return bs(e,t,n)}finally{bl=!1,(qt!==null||en!==null)&&(Is(),zs())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var vi=!1;if(Ze)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vi=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{vi=!1}function qc(e,t,n,r,l,i,s,f,p){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(_){this.onError(_)}}var Ln=!1,Fr=null,Hr=!1,xi=null,ed={onError:function(e){Ln=!0,Fr=e}};function td(e,t,n,r,l,i,s,f,p){Ln=!1,Fr=null,qc.apply(ed,arguments)}function nd(e,t,n,r,l,i,s,f,p){if(td.apply(this,arguments),Ln){if(Ln){var g=Fr;Ln=!1,Fr=null}else throw Error(k(198));Hr||(Hr=!0,xi=g)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ds(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(Dt(e)!==e)throw Error(k(188))}function rd(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ra(l),e;if(i===r)return ra(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,f=l.child;f;){if(f===n){s=!0,n=l,r=i;break}if(f===r){s=!0,r=l,n=i;break}f=f.sibling}if(!s){for(f=i.child;f;){if(f===n){s=!0,n=i,r=l;break}if(f===r){s=!0,r=i,n=l;break}f=f.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Rs(e){return e=rd(e),e!==null?Fs(e):null}function Fs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fs(e);if(t!==null)return t;e=e.sibling}return null}var Hs=je.unstable_scheduleCallback,la=je.unstable_cancelCallback,ld=je.unstable_shouldYield,id=je.unstable_requestPaint,K=je.unstable_now,od=je.unstable_getCurrentPriorityLevel,so=je.unstable_ImmediatePriority,Bs=je.unstable_UserBlockingPriority,Br=je.unstable_NormalPriority,ad=je.unstable_LowPriority,Ws=je.unstable_IdlePriority,cl=null,Ge=null;function sd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:dd,ud=Math.log,cd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(ud(e)/cd|0)|0}var fr=64,pr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var f=s&~l;f!==0?r=Tn(f):(i&=s,i!==0&&(r=Tn(i)))}else s=n&~l,s!==0?r=Tn(s):i!==0&&(r=Tn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Re(i),f=1<<s,p=l[s];p===-1?(!(f&n)||f&r)&&(l[s]=fd(f,t)):p<=t&&(e.expiredLanes|=f),i&=~f}}function _i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vs(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qs,co,$s,Us,Ys,wi=!1,mr=[],ut=null,ct=null,dt=null,Bn=new Map,Wn=new Map,it=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ia(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function vn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=lr(t),t!==null&&co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gd(e,t,n,r,l){switch(t){case"focusin":return ut=vn(ut,e,t,n,r,l),!0;case"dragenter":return ct=vn(ct,e,t,n,r,l),!0;case"mouseover":return dt=vn(dt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Bn.set(i,vn(Bn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wn.set(i,vn(Wn.get(i)||null,e,t,n,r,l)),!0}return!1}function Xs(e){var t=Nt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ds(n),t!==null){e.blockedOn=t,Ys(e.priority,function(){$s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gi=r,n.target.dispatchEvent(r),gi=null}else return t=lr(n),t!==null&&co(t),e.blockedOn=n,!1;t.shift()}return!0}function oa(e,t,n){Tr(e)&&n.delete(t)}function yd(){wi=!1,ut!==null&&Tr(ut)&&(ut=null),ct!==null&&Tr(ct)&&(ct=null),dt!==null&&Tr(dt)&&(dt=null),Bn.forEach(oa),Wn.forEach(oa)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,yd)))}function Vn(e){function t(l){return xn(l,e)}if(0<mr.length){xn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&xn(ut,e),ct!==null&&xn(ct,e),dt!==null&&xn(dt,e),Bn.forEach(t),Wn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Xs(n),n.blockedOn===null&&it.shift()}var tn=tt.ReactCurrentBatchConfig,Vr=!0;function vd(e,t,n,r){var l=O,i=tn.transition;tn.transition=null;try{O=1,fo(e,t,n,r)}finally{O=l,tn.transition=i}}function xd(e,t,n,r){var l=O,i=tn.transition;tn.transition=null;try{O=4,fo(e,t,n,r)}finally{O=l,tn.transition=i}}function fo(e,t,n,r){if(Vr){var l=ki(e,t,n,r);if(l===null)Ql(e,t,r,Gr,n),ia(e,r);else if(gd(l,e,t,n,r))r.stopPropagation();else if(ia(e,r),t&4&&-1<hd.indexOf(e)){for(;l!==null;){var i=lr(l);if(i!==null&&Qs(i),i=ki(e,t,n,r),i===null&&Ql(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Gr=null;function ki(e,t,n,r){if(Gr=null,e=ao(r),e=Nt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ds(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case so:return 1;case Bs:return 4;case Br:case ad:return 16;case Ws:return 536870912;default:return 16}default:return 16}}var at=null,po=null,Er=null;function Zs(){if(Er)return Er;var e,t=po,n=t.length,r,l="value"in at?at.value:at.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function aa(){return!1}function Ne(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hr:aa,this.isPropagationStopped=aa,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Ne(pn),rr=U({},pn,{view:0,detail:0}),_d=Ne(rr),Ol,Dl,_n,dl=U({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Ol=e.screenX-_n.screenX,Dl=e.screenY-_n.screenY):Dl=Ol=0,_n=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),sa=Ne(dl),wd=U({},dl,{dataTransfer:0}),kd=Ne(wd),Sd=U({},rr,{relatedTarget:0}),Rl=Ne(Sd),jd=U({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=Ne(jd),Nd=U({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Td=Ne(Nd),Ed=U({},pn,{data:0}),ua=Ne(Ed),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pd[e])?!!t[e]:!1}function ho(){return Md}var zd=U({},rr,{key:function(e){if(e.key){var t=Ad[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=Ne(zd),Id=U({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ca=Ne(Id),Od=U({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),Dd=Ne(Od),Rd=U({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Ne(Rd),Hd=U({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Ne(Hd),Wd=[9,13,27,32],go=Ze&&"CompositionEvent"in window,Pn=null;Ze&&"documentMode"in document&&(Pn=document.documentMode);var Vd=Ze&&"TextEvent"in window&&!Pn,Js=Ze&&(!go||Pn&&8<Pn&&11>=Pn),da=" ",fa=!1;function qs(e,t){switch(e){case"keyup":return Wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Gd(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(fa=!0,da);case"textInput":return e=t.data,e===da&&fa?null:e;default:return null}}function Qd(e,t){if(Wt)return e==="compositionend"||!go&&qs(e,t)?(e=Zs(),Er=po=at=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Js&&t.locale!=="ko"?null:t.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$d[e.type]:t==="textarea"}function tu(e,t,n,r){Ms(r),t=Qr(t,"onChange"),0<t.length&&(n=new mo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Gn=null;function Ud(e){fu(e,0)}function fl(e){var t=Qt(e);if(Cs(t))return e}function Yd(e,t){if(e==="change")return t}var nu=!1;if(Ze){var Fl;if(Ze){var Hl="oninput"in document;if(!Hl){var ma=document.createElement("div");ma.setAttribute("oninput","return;"),Hl=typeof ma.oninput=="function"}Fl=Hl}else Fl=!1;nu=Fl&&(!document.documentMode||9<document.documentMode)}function ha(){Mn&&(Mn.detachEvent("onpropertychange",ru),Gn=Mn=null)}function ru(e){if(e.propertyName==="value"&&fl(Gn)){var t=[];tu(t,Gn,e,ao(e)),Os(Ud,t)}}function Xd(e,t,n){e==="focusin"?(ha(),Mn=t,Gn=n,Mn.attachEvent("onpropertychange",ru)):e==="focusout"&&ha()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Gn)}function Zd(e,t){if(e==="click")return fl(t)}function Jd(e,t){if(e==="input"||e==="change")return fl(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:qd;function Qn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!li.call(t,l)||!He(e[l],t[l]))return!1}return!0}function ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ya(e,t){var n=ga(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ga(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ef(e){var t=iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(r!==null&&yo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ya(n,i);var s=ya(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tf=Ze&&"documentMode"in document&&11>=document.documentMode,Vt=null,Si=null,zn=null,ji=!1;function va(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Vt==null||Vt!==Rr(r)||(r=Vt,"selectionStart"in r&&yo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Qn(zn,r)||(zn=r,r=Qr(Si,"onSelect"),0<r.length&&(t=new mo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Bl={},ou={};Ze&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function pl(e){if(Bl[e])return Bl[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Bl[e]=t[n];return e}var au=pl("animationend"),su=pl("animationiteration"),uu=pl("animationstart"),cu=pl("transitionend"),du=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){du.set(e,t),Ot(t,[e])}for(var Wl=0;Wl<xa.length;Wl++){var Vl=xa[Wl],nf=Vl.toLowerCase(),rf=Vl[0].toUpperCase()+Vl.slice(1);xt(nf,"on"+rf)}xt(au,"onAnimationEnd");xt(su,"onAnimationIteration");xt(uu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(cu,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function fu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var f=r[s],p=f.instance,g=f.currentTarget;if(f=f.listener,p!==i&&l.isPropagationStopped())break e;_a(l,f,g),i=p}else for(s=0;s<r.length;s++){if(f=r[s],p=f.instance,g=f.currentTarget,f=f.listener,p!==i&&l.isPropagationStopped())break e;_a(l,f,g),i=p}}}if(Hr)throw e=xi,Hr=!1,xi=null,e}function F(e,t){var n=t[Ai];n===void 0&&(n=t[Ai]=new Set);var r=e+"__bubble";n.has(r)||(pu(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),pu(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[yr]){e[yr]=!0,_s.forEach(function(n){n!=="selectionchange"&&(lf.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,Gl("selectionchange",!1,t))}}function pu(e,t,n,r){switch(Ks(t)){case 1:var l=vd;break;case 4:l=xd;break;default:l=fo}n=l.bind(null,t,n,e),l=void 0,!vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;s=s.return}for(;f!==null;){if(s=Nt(f),s===null)return;if(p=s.tag,p===5||p===6){r=i=s;continue e}f=f.parentNode}}r=r.return}Os(function(){var g=i,_=ao(n),o=[];e:{var a=du.get(e);if(a!==void 0){var c=mo,h=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":c=bd;break;case"focusin":h="focus",c=Rl;break;case"focusout":h="blur",c=Rl;break;case"beforeblur":case"afterblur":c=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Dd;break;case au:case su:case uu:c=Cd;break;case cu:c=Fd;break;case"scroll":c=_d;break;case"wheel":c=Bd;break;case"copy":case"cut":case"paste":c=Td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=ca}var y=(t&4)!==0,x=!y&&e==="scroll",d=y?a!==null?a+"Capture":null:a;y=[];for(var m=g,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,d!==null&&(w=Hn(m,d),w!=null&&y.push(Un(m,w,v)))),x)break;m=m.return}0<y.length&&(a=new c(a,h,null,n,_),o.push({event:a,listeners:y}))}}if(!(t&7)){e:{if(a=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",a&&n!==gi&&(h=n.relatedTarget||n.fromElement)&&(Nt(h)||h[Je]))break e;if((c||a)&&(a=_.window===_?_:(a=_.ownerDocument)?a.defaultView||a.parentWindow:window,c?(h=n.relatedTarget||n.toElement,c=g,h=h?Nt(h):null,h!==null&&(x=Dt(h),h!==x||h.tag!==5&&h.tag!==6)&&(h=null)):(c=null,h=g),c!==h)){if(y=sa,w="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=ca,w="onPointerLeave",d="onPointerEnter",m="pointer"),x=c==null?a:Qt(c),v=h==null?a:Qt(h),a=new y(w,m+"leave",c,n,_),a.target=x,a.relatedTarget=v,w=null,Nt(_)===g&&(y=new y(d,m+"enter",h,n,_),y.target=v,y.relatedTarget=x,w=y),x=w,c&&h)t:{for(y=c,d=h,m=0,v=y;v;v=Rt(v))m++;for(v=0,w=d;w;w=Rt(w))v++;for(;0<m-v;)y=Rt(y),m--;for(;0<v-m;)d=Rt(d),v--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=Rt(y),d=Rt(d)}y=null}else y=null;c!==null&&wa(o,a,c,y,!1),h!==null&&x!==null&&wa(o,x,h,y,!0)}}e:{if(a=g?Qt(g):window,c=a.nodeName&&a.nodeName.toLowerCase(),c==="select"||c==="input"&&a.type==="file")var S=Yd;else if(pa(a))if(nu)S=Jd;else{S=Kd;var j=Xd}else(c=a.nodeName)&&c.toLowerCase()==="input"&&(a.type==="checkbox"||a.type==="radio")&&(S=Zd);if(S&&(S=S(e,g))){tu(o,S,n,_);break e}j&&j(e,a,g),e==="focusout"&&(j=a._wrapperState)&&j.controlled&&a.type==="number"&&di(a,"number",a.value)}switch(j=g?Qt(g):window,e){case"focusin":(pa(j)||j.contentEditable==="true")&&(Vt=j,Si=g,zn=null);break;case"focusout":zn=Si=Vt=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,va(o,n,_);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":va(o,n,_)}var N;if(go)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wt?qs(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Js&&n.locale!=="ko"&&(Wt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wt&&(N=Zs()):(at=_,po="value"in at?at.value:at.textContent,Wt=!0)),j=Qr(g,E),0<j.length&&(E=new ua(E,e,null,n,_),o.push({event:E,listeners:j}),N?E.data=N:(N=eu(n),N!==null&&(E.data=N)))),(N=Vd?Gd(e,n):Qd(e,n))&&(g=Qr(g,"onBeforeInput"),0<g.length&&(_=new ua("onBeforeInput","beforeinput",null,n,_),o.push({event:_,listeners:g}),_.data=N))}fu(o,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Hn(e,n),i!=null&&r.unshift(Un(e,i,l)),i=Hn(e,t),i!=null&&r.push(Un(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wa(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var f=n,p=f.alternate,g=f.stateNode;if(p!==null&&p===r)break;f.tag===5&&g!==null&&(f=g,l?(p=Hn(n,i),p!=null&&s.unshift(Un(n,p,f))):l||(p=Hn(n,i),p!=null&&s.push(Un(n,p,f)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var of=/\r\n?/g,af=/\u0000|\uFFFD/g;function ka(e){return(typeof e=="string"?e:""+e).replace(of,`
`).replace(af,"")}function vr(e,t,n){if(t=ka(t),ka(e)!==t&&n)throw Error(k(425))}function $r(){}var Ci=null,Ni=null;function Ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,Sa=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Sa<"u"?function(e){return Sa.resolve(null).then(e).catch(cf)}:Ei;function cf(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Vn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+mn,Yn="__reactProps$"+mn,Je="__reactContainer$"+mn,Ai="__reactEvents$"+mn,df="__reactListeners$"+mn,ff="__reactHandles$"+mn;function Nt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ja(e);e!==null;){if(n=e[Ve])return n;e=ja(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[Ve]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ml(e){return e[Yn]||null}var Li=[],$t=-1;function _t(e){return{current:e}}function H(e){0>$t||(e.current=Li[$t],Li[$t]=null,$t--)}function R(e,t){$t++,Li[$t]=e.current,e.current=t}var vt={},de=_t(vt),ve=_t(!1),Pt=vt;function on(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function Ur(){H(ve),H(de)}function Ca(e,t,n){if(de.current!==vt)throw Error(k(168));R(de,t),R(ve,n)}function mu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Xc(e)||"Unknown",l));return U({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Pt=de.current,R(de,e),R(ve,ve.current),!0}function Na(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=mu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,H(ve),H(de),R(de,e)):H(ve),R(ve,n)}var Ue=null,hl=!1,Ul=!1;function hu(e){Ue===null?Ue=[e]:Ue.push(e)}function pf(e){hl=!0,hu(e)}function wt(){if(!Ul&&Ue!==null){Ul=!0;var e=0,t=O;try{var n=Ue;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,hl=!1}catch(l){throw Ue!==null&&(Ue=Ue.slice(e+1)),Hs(so,wt),l}finally{O=t,Ul=!1}}return null}var Ut=[],Yt=0,Xr=null,Kr=0,Ee=[],Ae=0,Mt=null,Ye=1,Xe="";function jt(e,t){Ut[Yt++]=Kr,Ut[Yt++]=Xr,Xr=e,Kr=t}function gu(e,t,n){Ee[Ae++]=Ye,Ee[Ae++]=Xe,Ee[Ae++]=Mt,Mt=e;var r=Ye;e=Xe;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var i=32-Re(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ye=1<<32-Re(t)+l|n<<l|r,Xe=i+e}else Ye=1<<i|n<<l|r,Xe=e}function vo(e){e.return!==null&&(jt(e,1),gu(e,1,0))}function xo(e){for(;e===Xr;)Xr=Ut[--Yt],Ut[Yt]=null,Kr=Ut[--Yt],Ut[Yt]=null;for(;e===Mt;)Mt=Ee[--Ae],Ee[Ae]=null,Xe=Ee[--Ae],Ee[Ae]=null,Ye=Ee[--Ae],Ee[Ae]=null}var Se=null,ke=null,G=!1,De=null;function yu(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ke=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,ke=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(G){var t=ke;if(t){var n=t;if(!Ta(e,t)){if(Pi(e))throw Error(k(418));t=ft(n.nextSibling);var r=Se;t&&Ta(e,t)?yu(r,n):(e.flags=e.flags&-4097|2,G=!1,Se=e)}}else{if(Pi(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Se=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function xr(e){if(e!==Se)return!1;if(!G)return Ea(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ti(e.type,e.memoizedProps)),t&&(t=ke)){if(Pi(e))throw vu(),Error(k(418));for(;t;)yu(e,t),t=ft(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Se?ft(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=ke;e;)e=ft(e.nextSibling)}function an(){ke=Se=null,G=!1}function _o(e){De===null?De=[e]:De.push(e)}var mf=tt.ReactCurrentBatchConfig;function wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var f=l.refs;s===null?delete f[i]:f[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Aa(e){var t=e._init;return t(e._payload)}function xu(e){function t(d,m){if(e){var v=d.deletions;v===null?(d.deletions=[m],d.flags|=16):v.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function l(d,m){return d=gt(d,m),d.index=0,d.sibling=null,d}function i(d,m,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<m?(d.flags|=2,m):v):(d.flags|=2,m)):(d.flags|=1048576,m)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function f(d,m,v,w){return m===null||m.tag!==6?(m=ei(v,d.mode,w),m.return=d,m):(m=l(m,v),m.return=d,m)}function p(d,m,v,w){var S=v.type;return S===Bt?_(d,m,v.props.children,w,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Aa(S)===m.type)?(w=l(m,v.props),w.ref=wn(d,m,v),w.return=d,w):(w=Or(v.type,v.key,v.props,null,d.mode,w),w.ref=wn(d,m,v),w.return=d,w)}function g(d,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ti(v,d.mode,w),m.return=d,m):(m=l(m,v.children||[]),m.return=d,m)}function _(d,m,v,w,S){return m===null||m.tag!==7?(m=Lt(v,d.mode,w,S),m.return=d,m):(m=l(m,v),m.return=d,m)}function o(d,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ei(""+m,d.mode,v),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ur:return v=Or(m.type,m.key,m.props,null,d.mode,v),v.ref=wn(d,null,m),v.return=d,v;case Ht:return m=ti(m,d.mode,v),m.return=d,m;case rt:var w=m._init;return o(d,w(m._payload),v)}if(Nn(m)||gn(m))return m=Lt(m,d.mode,v,null),m.return=d,m;_r(d,m)}return null}function a(d,m,v,w){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:f(d,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ur:return v.key===S?p(d,m,v,w):null;case Ht:return v.key===S?g(d,m,v,w):null;case rt:return S=v._init,a(d,m,S(v._payload),w)}if(Nn(v)||gn(v))return S!==null?null:_(d,m,v,w,null);_r(d,v)}return null}function c(d,m,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(v)||null,f(m,d,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ur:return d=d.get(w.key===null?v:w.key)||null,p(m,d,w,S);case Ht:return d=d.get(w.key===null?v:w.key)||null,g(m,d,w,S);case rt:var j=w._init;return c(d,m,v,j(w._payload),S)}if(Nn(w)||gn(w))return d=d.get(v)||null,_(m,d,w,S,null);_r(m,w)}return null}function h(d,m,v,w){for(var S=null,j=null,N=m,E=m=0,A=null;N!==null&&E<v.length;E++){N.index>E?(A=N,N=null):A=N.sibling;var P=a(d,N,v[E],w);if(P===null){N===null&&(N=A);break}e&&N&&P.alternate===null&&t(d,N),m=i(P,m,E),j===null?S=P:j.sibling=P,j=P,N=A}if(E===v.length)return n(d,N),G&&jt(d,E),S;if(N===null){for(;E<v.length;E++)N=o(d,v[E],w),N!==null&&(m=i(N,m,E),j===null?S=N:j.sibling=N,j=N);return G&&jt(d,E),S}for(N=r(d,N);E<v.length;E++)A=c(N,d,E,v[E],w),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?E:A.key),m=i(A,m,E),j===null?S=A:j.sibling=A,j=A);return e&&N.forEach(function(oe){return t(d,oe)}),G&&jt(d,E),S}function y(d,m,v,w){var S=gn(v);if(typeof S!="function")throw Error(k(150));if(v=S.call(v),v==null)throw Error(k(151));for(var j=S=null,N=m,E=m=0,A=null,P=v.next();N!==null&&!P.done;E++,P=v.next()){N.index>E?(A=N,N=null):A=N.sibling;var oe=a(d,N,P.value,w);if(oe===null){N===null&&(N=A);break}e&&N&&oe.alternate===null&&t(d,N),m=i(oe,m,E),j===null?S=oe:j.sibling=oe,j=oe,N=A}if(P.done)return n(d,N),G&&jt(d,E),S;if(N===null){for(;!P.done;E++,P=v.next())P=o(d,P.value,w),P!==null&&(m=i(P,m,E),j===null?S=P:j.sibling=P,j=P);return G&&jt(d,E),S}for(N=r(d,N);!P.done;E++,P=v.next())P=c(N,d,E,P.value,w),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?E:P.key),m=i(P,m,E),j===null?S=P:j.sibling=P,j=P);return e&&N.forEach(function(B){return t(d,B)}),G&&jt(d,E),S}function x(d,m,v,w){if(typeof v=="object"&&v!==null&&v.type===Bt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ur:e:{for(var S=v.key,j=m;j!==null;){if(j.key===S){if(S=v.type,S===Bt){if(j.tag===7){n(d,j.sibling),m=l(j,v.props.children),m.return=d,d=m;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Aa(S)===j.type){n(d,j.sibling),m=l(j,v.props),m.ref=wn(d,j,v),m.return=d,d=m;break e}n(d,j);break}else t(d,j);j=j.sibling}v.type===Bt?(m=Lt(v.props.children,d.mode,w,v.key),m.return=d,d=m):(w=Or(v.type,v.key,v.props,null,d.mode,w),w.ref=wn(d,m,v),w.return=d,d=w)}return s(d);case Ht:e:{for(j=v.key;m!==null;){if(m.key===j)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(d,m.sibling),m=l(m,v.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else t(d,m);m=m.sibling}m=ti(v,d.mode,w),m.return=d,d=m}return s(d);case rt:return j=v._init,x(d,m,j(v._payload),w)}if(Nn(v))return h(d,m,v,w);if(gn(v))return y(d,m,v,w);_r(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(d,m.sibling),m=l(m,v),m.return=d,d=m):(n(d,m),m=ei(v,d.mode,w),m.return=d,d=m),s(d)):n(d,m)}return x}var sn=xu(!0),_u=xu(!1),Zr=_t(null),Jr=null,Xt=null,wo=null;function ko(){wo=Xt=Jr=null}function So(e){var t=Zr.current;H(Zr),e._currentValue=t}function zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Jr=e,wo=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(wo!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Jr===null)throw Error(k(308));Xt=e,Jr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Tt=null;function jo(e){Tt===null?Tt=[e]:Tt.push(e)}function wu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,jo(t)):(n.next=l.next,l.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,qe(e,n)}return l=r.interleaved,l===null?(t.next=t,jo(r)):(t.next=l.next,l.next=t),r.interleaved=t,qe(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qr(e,t,n,r){var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var p=f,g=p.next;p.next=null,s===null?i=g:s.next=g,s=p;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==s&&(f===null?_.firstBaseUpdate=g:f.next=g,_.lastBaseUpdate=p))}if(i!==null){var o=l.baseState;s=0,_=g=p=null,f=i;do{var a=f.lane,c=f.eventTime;if((r&a)===a){_!==null&&(_=_.next={eventTime:c,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var h=e,y=f;switch(a=t,c=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){o=h.call(c,o,a);break e}o=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,a=typeof h=="function"?h.call(c,o,a):h,a==null)break e;o=U({},o,a);break e;case 2:lt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,a=l.effects,a===null?l.effects=[f]:a.push(f))}else c={eventTime:c,lane:a,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(g=_=c,p=o):_=_.next=c,s|=a;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;a=f,f=a.next,a.next=null,l.lastBaseUpdate=a,l.shared.pending=null}}while(!0);if(_===null&&(p=o),l.baseState=p,l.firstBaseUpdate=g,l.lastBaseUpdate=_,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);bt|=s,e.lanes=s,e.memoizedState=o}}function Pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var ir={},Qe=_t(ir),Xn=_t(ir),Kn=_t(ir);function Et(e){if(e===ir)throw Error(k(174));return e}function No(e,t){switch(R(Kn,t),R(Xn,e),R(Qe,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pi(t,e)}H(Qe),R(Qe,t)}function un(){H(Qe),H(Xn),H(Kn)}function Su(e){Et(Kn.current);var t=Et(Qe.current),n=pi(t,e.type);t!==n&&(R(Xn,e),R(Qe,n))}function To(e){Xn.current===e&&(H(Qe),H(Xn))}var Q=_t(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Eo(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Pr=tt.ReactCurrentDispatcher,Xl=tt.ReactCurrentBatchConfig,zt=0,$=null,J=null,te=null,tl=!1,bn=!1,Zn=0,hf=0;function ae(){throw Error(k(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,l,i){if(zt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?xf:_f,e=n(r,l),bn){i=0;do{if(bn=!1,Zn=0,25<=i)throw Error(k(301));i+=1,te=J=null,t.updateQueue=null,Pr.current=wf,e=n(r,l)}while(bn)}if(Pr.current=nl,t=J!==null&&J.next!==null,zt=0,te=J=$=null,tl=!1,t)throw Error(k(300));return e}function Po(){var e=Zn!==0;return Zn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?$.memoizedState=te=e:te=te.next=e,te}function ze(){if(J===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?$.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?$.memoizedState=te=e:te=te.next=e}return te}function Jn(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var f=s=null,p=null,g=i;do{var _=g.lane;if((zt&_)===_)p!==null&&(p=p.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var o={lane:_,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};p===null?(f=p=o,s=r):p=p.next=o,$.lanes|=_,bt|=_}g=g.next}while(g!==null&&g!==i);p===null?s=r:p.next=f,He(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,bt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);He(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ju(){}function Cu(e,t){var n=$,r=ze(),l=t(),i=!He(r.memoizedState,l);if(i&&(r.memoizedState=l,ye=!0),r=r.queue,Mo(Eu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,qn(9,Tu.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(k(349));zt&30||Nu(n,t,l)}return l}function Nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tu(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&Lu(e)}function Eu(e,t,n){return n(function(){Au(t)&&Lu(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Lu(e){var t=qe(e,1);t!==null&&Fe(t,e,1,-1)}function Ma(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=vf.bind(null,$,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pu(){return ze().memoizedState}function Mr(e,t,n,r){var l=We();$.flags|=e,l.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function gl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(J!==null){var s=J.memoizedState;if(i=s.destroy,r!==null&&Ao(r,s.deps)){l.memoizedState=qn(t,n,i,r);return}}$.flags|=e,l.memoizedState=qn(1|t,n,i,r)}function za(e,t){return Mr(8390656,8,e,t)}function Mo(e,t){return gl(2048,8,e,t)}function Mu(e,t){return gl(4,2,e,t)}function zu(e,t){return gl(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,bu.bind(null,t,e),n)}function zo(){}function Ou(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Du(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ru(e,t,n){return zt&21?(He(n,t)||(n=Vs(),$.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function gf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{O=n,Xl.transition=r}}function Fu(){return ze().memoizedState}function yf(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(e))Bu(t,n);else if(n=wu(e,t,n,r),n!==null){var l=pe();Fe(n,e,r,l),Wu(n,t,r)}}function vf(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))Bu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,f=i(s,n);if(l.hasEagerState=!0,l.eagerState=f,He(f,s)){var p=t.interleaved;p===null?(l.next=l,jo(t)):(l.next=p.next,p.next=l),t.interleaved=l;return}}catch{}finally{}n=wu(e,t,l,r),n!==null&&(l=pe(),Fe(n,e,r,l),Wu(n,t,r))}}function Hu(e){var t=e.alternate;return e===$||t!==null&&t===$}function Bu(e,t){bn=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}var nl={readContext:Me,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},xf={readContext:Me,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:za,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mr(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Ma,useDebugValue:zo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Ma(!1),t=e[0];return e=gf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=We();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ne===null)throw Error(k(349));zt&30||Nu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,za(Eu.bind(null,r,i,e),[e]),r.flags|=2048,qn(9,Tu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=ne.identifierPrefix;if(G){var n=Xe,r=Ye;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_f={readContext:Me,useCallback:Ou,useContext:Me,useEffect:Mo,useImperativeHandle:Iu,useInsertionEffect:Mu,useLayoutEffect:zu,useMemo:Du,useReducer:Kl,useRef:Pu,useState:function(){return Kl(Jn)},useDebugValue:zo,useDeferredValue:function(e){var t=ze();return Ru(t,J.memoizedState,e)},useTransition:function(){var e=Kl(Jn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Cu,useId:Fu,unstable_isNewReconciler:!1},wf={readContext:Me,useCallback:Ou,useContext:Me,useEffect:Mo,useImperativeHandle:Iu,useInsertionEffect:Mu,useLayoutEffect:zu,useMemo:Du,useReducer:Zl,useRef:Pu,useState:function(){return Zl(Jn)},useDebugValue:zo,useDeferredValue:function(e){var t=ze();return J===null?t.memoizedState=e:Ru(t,J.memoizedState,e)},useTransition:function(){var e=Zl(Jn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Cu,useId:Fu,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=ht(e),i=Ke(r,l);i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Fe(t,e,l,r),Lr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=ht(e),i=Ke(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Fe(t,e,l,r),Lr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=ht(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Fe(t,e,r,n),Lr(t,e,r))}};function ba(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(l,i):!0}function Vu(e,t,n){var r=!1,l=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(l=xe(t)?Pt:de.current,r=t.contextTypes,i=(r=r!=null)?on(e,l):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function Ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Co(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Me(i):(i=xe(t)?Pt:de.current,l.context=on(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&yl.enqueueReplaceState(l,l.state,null),qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Yc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kf=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,$i=r),Oi(e,t)},n}function Qu(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Oi(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Oa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Of.bind(null,e,t,n),t.then(e,e))}function Da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ra(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var Sf=tt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?_u(t,null,n,r):sn(t,e.child,n,r)}function Fa(e,t,n,r,l){n=n.render;var i=t.ref;return nn(t,l),r=Lo(e,t,n,r,i,l),n=Po(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(G&&n&&vo(t),t.flags|=1,fe(e,t,r,l),t.child)}function Ha(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Bo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$u(e,t,i,r,l)):(e=Or(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(s,r)&&e.ref===t.ref)return et(e,t,l)}return t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function $u(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,l)}return Di(e,t,n,r,l)}function Uu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Zt,we),we|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Zt,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,R(Zt,we),we|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,R(Zt,we),we|=r;return fe(e,t,l,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Di(e,t,n,r,l){var i=xe(n)?Pt:de.current;return i=on(t,i),nn(t,l),n=Lo(e,t,n,r,i,l),r=Po(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(G&&r&&vo(t),t.flags|=1,fe(e,t,n,l),t.child)}function Ba(e,t,n,r,l){if(xe(n)){var i=!0;Yr(t)}else i=!1;if(nn(t,l),t.stateNode===null)zr(e,t),Vu(t,n,r),Ii(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,f=t.memoizedProps;s.props=f;var p=s.context,g=n.contextType;typeof g=="object"&&g!==null?g=Me(g):(g=xe(n)?Pt:de.current,g=on(t,g));var _=n.getDerivedStateFromProps,o=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function";o||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==r||p!==g)&&Ia(t,s,r,g),lt=!1;var a=t.memoizedState;s.state=a,qr(t,r,s,l),p=t.memoizedState,f!==r||a!==p||ve.current||lt?(typeof _=="function"&&(bi(t,n,_,r),p=t.memoizedState),(f=lt||ba(t,n,f,r,a,p,g))?(o||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=g,r=f):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ku(e,t),f=t.memoizedProps,g=t.type===t.elementType?f:Ie(t.type,f),s.props=g,o=t.pendingProps,a=s.context,p=n.contextType,typeof p=="object"&&p!==null?p=Me(p):(p=xe(n)?Pt:de.current,p=on(t,p));var c=n.getDerivedStateFromProps;(_=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==o||a!==p)&&Ia(t,s,r,p),lt=!1,a=t.memoizedState,s.state=a,qr(t,r,s,l);var h=t.memoizedState;f!==o||a!==h||ve.current||lt?(typeof c=="function"&&(bi(t,n,c,r),h=t.memoizedState),(g=lt||ba(t,n,g,r,a,h,p)||!1)?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&a===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&a===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=p,r=g):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&a===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&a===e.memoizedState||(t.flags|=1024),r=!1)}return Ri(e,t,n,r,i,l)}function Ri(e,t,n,r,l,i){Yu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Na(t,n,!1),et(e,t,i);r=t.stateNode,Sf.current=t;var f=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=sn(t,e.child,null,i),t.child=sn(t,null,f,i)):fe(e,t,f,i),t.memoizedState=r.state,l&&Na(t,n,!0),t.child}function Xu(e){var t=e.stateNode;t.pendingContext?Ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ca(e,t.context,!1),No(e,t.containerInfo)}function Wa(e,t,n,r,l){return an(),_o(l),t.flags|=256,fe(e,t,n,r),t.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var r=t.pendingProps,l=Q.current,i=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(Q,l&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=_l(s,r,0,null),e=Lt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hi(n),t.memoizedState=Fi,e):bo(t,s));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return jf(e,t,s,r,f,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,f=l.sibling;var p={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=gt(l,p),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=gt(f,i):(i=Lt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Hi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Fi,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bo(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&_o(r),sn(t,e.child,null,n),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jf(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(k(422))),wr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),i=Lt(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sn(t,e.child,null,s),t.child.memoizedState=Hi(s),t.memoizedState=Fi,i);if(!(t.mode&1))return wr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,i=Error(k(419)),r=Jl(i,r,void 0),wr(e,t,s,r)}if(f=(s&e.childLanes)!==0,ye||f){if(r=ne,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,qe(e,l),Fe(r,e,l,-1))}return Ho(),r=Jl(Error(k(421))),wr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Df.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ke=ft(l.nextSibling),Se=t,G=!0,De=null,e!==null&&(Ee[Ae++]=Ye,Ee[Ae++]=Xe,Ee[Ae++]=Mt,Ye=e.id,Xe=e.overflow,Mt=t),t=bo(t,r.children),t.flags|=4096,t)}function Va(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zi(e.return,t,n)}function ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Zu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Va(e,n,t);else if(e.tag===19)Va(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&el(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,i);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cf(e,t,n){switch(t.tag){case 3:Xu(t),an();break;case 5:Su(t);break;case 1:xe(t.type)&&Yr(t);break;case 4:No(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;R(Zr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Ku(e,t,n):(R(Q,Q.current&1),e=et(e,t,n),e!==null?e.sibling:null);R(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return et(e,t,n)}var Ju,Bi,qu,ec;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bi=function(){};qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Qe.current);var i=null;switch(n){case"input":l=ui(e,l),r=ui(e,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=fi(e,l),r=fi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}mi(n,r);var s;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var f=l[g];for(s in f)f.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Rn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var p=r[g];if(f=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&p!==f&&(p!=null||f!=null))if(g==="style")if(f){for(s in f)!f.hasOwnProperty(s)||p&&p.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in p)p.hasOwnProperty(s)&&f[s]!==p[s]&&(n||(n={}),n[s]=p[s])}else n||(i||(i=[]),i.push(g,n)),n=p;else g==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,f=f?f.__html:void 0,p!=null&&f!==p&&(i=i||[]).push(g,p)):g==="children"?typeof p!="string"&&typeof p!="number"||(i=i||[]).push(g,""+p):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(g)?(p!=null&&g==="onScroll"&&F("scroll",e),i||f===p||(i=[])):(i=i||[]).push(g,p))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nf(e,t,n){var r=t.pendingProps;switch(xo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return xe(t.type)&&Ur(),se(t),null;case 3:return r=t.stateNode,un(),H(ve),H(de),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Xi(De),De=null))),Bi(e,t),se(t),null;case 5:To(t);var l=Et(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=Et(Qe.current),xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ve]=t,r[Yn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)F(En[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Jo(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":ea(r,i),F("invalid",r)}mi(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var f=i[s];s==="children"?typeof f=="string"?r.textContent!==f&&(i.suppressHydrationWarning!==!0&&vr(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&vr(r.textContent,f,e),l=["children",""+f]):Rn.hasOwnProperty(s)&&f!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":cr(r),qo(r,i,!0);break;case"textarea":cr(r),ta(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Es(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[Yn]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(s=hi(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)F(En[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Jo(e,r),l=ui(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),F("invalid",e);break;case"textarea":ea(e,r),l=fi(e,r),F("invalid",e);break;default:l=r}mi(n,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var p=f[i];i==="style"?Ps(e,p):i==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&As(e,p)):i==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Fn(e,p):typeof p=="number"&&Fn(e,""+p):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?p!=null&&i==="onScroll"&&F("scroll",e):p!=null&&ro(e,i,p,s))}switch(n){case"input":cr(e),qo(e,r,!1);break;case"textarea":cr(e),ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Et(Kn.current),Et(Qe.current),xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(i=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ke!==null&&t.mode&1&&!(t.flags&128))vu(),an(),t.flags|=98560,i=!1;else if(i=xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ve]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else De!==null&&(Xi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?q===0&&(q=3):Ho())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return un(),Bi(e,t),e===null&&$n(t.stateNode.containerInfo),se(t),null;case 10:return So(t.type._context),se(t),null;case 17:return xe(t.type)&&Ur(),se(t),null;case 19:if(H(Q),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)kn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=el(e),s!==null){for(t.flags|=128,kn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>dn&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=el(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!G)return se(t),null}else 2*K()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=Q.current,R(Q,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Fo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Tf(e,t){switch(xo(t),t.tag){case 1:return xe(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),H(ve),H(de),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return To(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return un(),null;case 10:return So(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var kr=!1,ce=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,C=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Ga=!1;function Af(e,t){if(Ci=Vr,e=iu(),yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,f=-1,p=-1,g=0,_=0,o=e,a=null;t:for(;;){for(var c;o!==n||l!==0&&o.nodeType!==3||(f=s+l),o!==i||r!==0&&o.nodeType!==3||(p=s+r),o.nodeType===3&&(s+=o.nodeValue.length),(c=o.firstChild)!==null;)a=o,o=c;for(;;){if(o===e)break t;if(a===n&&++g===l&&(f=s),a===i&&++_===r&&(p=s),(c=o.nextSibling)!==null)break;o=a,a=o.parentNode}o=c}n=f===-1||p===-1?null:{start:f,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Vr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,x=h.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ie(t.type,y),x);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return h=Ga,Ga=!1,h}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Wi(t,n,i)}l=l.next}while(l!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Yn],delete t[Ai],delete t[df],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function Qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}var re=null,Oe=!1;function nt(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:ce||Kt(n,t);case 6:var r=re,l=Oe;re=null,nt(e,t,n),re=r,Oe=l,re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Oe?(e=re,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Vn(e)):$l(re,n.stateNode));break;case 4:r=re,l=Oe,re=n.stateNode.containerInfo,Oe=!0,nt(e,t,n),re=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Wi(n,t,s),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!ce&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Y(n,t,f)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,nt(e,t,n),ce=r):nt(e,t,n);break;default:nt(e,t,n)}}function $a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ef),t.forEach(function(r){var l=Rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,f=s;e:for(;f!==null;){switch(f.tag){case 5:re=f.stateNode,Oe=!1;break e;case 3:re=f.stateNode.containerInfo,Oe=!0;break e;case 4:re=f.stateNode.containerInfo,Oe=!0;break e}f=f.return}if(re===null)throw Error(k(160));rc(i,s,l),re=null,Oe=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(g){Y(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Be(e),r&4){try{In(3,e,e.return),vl(3,e)}catch(y){Y(e,e.return,y)}try{In(5,e,e.return)}catch(y){Y(e,e.return,y)}}break;case 1:be(t,e),Be(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(be(t,e),Be(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var l=e.stateNode;try{Fn(l,"")}catch(y){Y(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,f=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&Ns(l,i),hi(f,s);var g=hi(f,i);for(s=0;s<p.length;s+=2){var _=p[s],o=p[s+1];_==="style"?Ps(l,o):_==="dangerouslySetInnerHTML"?As(l,o):_==="children"?Fn(l,o):ro(l,_,o,g)}switch(f){case"input":ci(l,i);break;case"textarea":Ts(l,i);break;case"select":var a=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var c=i.value;c!=null?Jt(l,!!i.multiple,c,!1):a!==!!i.multiple&&(i.defaultValue!=null?Jt(l,!!i.multiple,i.defaultValue,!0):Jt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Yn]=i}catch(y){Y(e,e.return,y)}}break;case 6:if(be(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){Y(e,e.return,y)}}break;case 3:if(be(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(y){Y(e,e.return,y)}break;case 4:be(t,e),Be(e);break;case 13:be(t,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Do=K())),r&4&&$a(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(g=ce)||_,be(t,e),ce=g):be(t,e),Be(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!_&&e.mode&1)for(C=e,_=e.child;_!==null;){for(o=C=_;C!==null;){switch(a=C,c=a.child,a.tag){case 0:case 11:case 14:case 15:In(4,a,a.return);break;case 1:Kt(a,a.return);var h=a.stateNode;if(typeof h.componentWillUnmount=="function"){r=a,n=a.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Y(r,n,y)}}break;case 5:Kt(a,a.return);break;case 22:if(a.memoizedState!==null){Ya(o);continue}}c!==null?(c.return=a,C=c):Ya(o)}_=_.sibling}e:for(_=null,o=e;;){if(o.tag===5){if(_===null){_=o;try{l=o.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=o.stateNode,p=o.memoizedProps.style,s=p!=null&&p.hasOwnProperty("display")?p.display:null,f.style.display=Ls("display",s))}catch(y){Y(e,e.return,y)}}}else if(o.tag===6){if(_===null)try{o.stateNode.nodeValue=g?"":o.memoizedProps}catch(y){Y(e,e.return,y)}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===e)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break e;for(;o.sibling===null;){if(o.return===null||o.return===e)break e;_===o&&(_=null),o=o.return}_===o&&(_=null),o.sibling.return=o.return,o=o.sibling}}break;case 19:be(t,e),Be(e),r&4&&$a(e);break;case 21:break;default:be(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Fn(l,""),r.flags&=-33);var i=Qa(e);Qi(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,f=Qa(e);Gi(e,f,s);break;default:throw Error(k(161))}}catch(p){Y(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lf(e,t,n){C=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||kr;if(!s){var f=l.alternate,p=f!==null&&f.memoizedState!==null||ce;f=kr;var g=ce;if(kr=s,(ce=p)&&!g)for(C=l;C!==null;)s=C,p=s.child,s.tag===22&&s.memoizedState!==null?Xa(l):p!==null?(p.return=s,C=p):Xa(l);for(;i!==null;)C=i,ic(i),i=i.sibling;C=l,kr=f,ce=g}Ua(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):Ua(e)}}function Ua(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pa(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(t,s,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var _=g.memoizedState;if(_!==null){var o=_.dehydrated;o!==null&&Vn(o)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ce||t.flags&512&&Vi(t)}catch(a){Y(t,t.return,a)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ya(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Xa(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(p){Y(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(p){Y(t,l,p)}}var i=t.return;try{Vi(t)}catch(p){Y(t,i,p)}break;case 5:var s=t.return;try{Vi(t)}catch(p){Y(t,s,p)}}}catch(p){Y(t,t.return,p)}if(t===e){C=null;break}var f=t.sibling;if(f!==null){f.return=t.return,C=f;break}C=t.return}}var Pf=Math.ceil,rl=tt.ReactCurrentDispatcher,Io=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,b=0,ne=null,Z=null,le=0,we=0,Zt=_t(0),q=0,er=null,bt=0,xl=0,Oo=0,On=null,ge=null,Do=0,dn=1/0,$e=null,ll=!1,$i=null,mt=null,Sr=!1,st=null,il=0,Dn=0,Ui=null,br=-1,Ir=0;function pe(){return b&6?K():br!==-1?br:br=K()}function ht(e){return e.mode&1?b&2&&le!==0?le&-le:mf.transition!==null?(Ir===0&&(Ir=Vs()),Ir):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ks(e.type)),e):1}function Fe(e,t,n,r){if(50<Dn)throw Dn=0,Ui=null,Error(k(185));nr(e,n,r),(!(b&2)||e!==ne)&&(e===ne&&(!(b&2)&&(xl|=n),q===4&&ot(e,le)),_e(e,r),n===1&&b===0&&!(t.mode&1)&&(dn=K()+500,hl&&wt()))}function _e(e,t){var n=e.callbackNode;pd(e,t);var r=Wr(e,e===ne?le:0);if(r===0)n!==null&&la(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&la(n),t===1)e.tag===0?pf(Ka.bind(null,e)):hu(Ka.bind(null,e)),uf(function(){!(b&6)&&wt()}),n=null;else{switch(Gs(r)){case 1:n=so;break;case 4:n=Bs;break;case 16:n=Br;break;case 536870912:n=Ws;break;default:n=Br}n=pc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(br=-1,Ir=0,b&6)throw Error(k(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Wr(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ol(e,r);else{t=r;var l=b;b|=2;var i=sc();(ne!==e||le!==t)&&($e=null,dn=K()+500,At(e,t));do try{bf();break}catch(f){ac(e,f)}while(!0);ko(),rl.current=i,b=l,Z!==null?t=0:(ne=null,le=0,t=q)}if(t!==0){if(t===2&&(l=_i(e),l!==0&&(r=l,t=Yi(e,l))),t===1)throw n=er,At(e,0),ot(e,r),_e(e,K()),n;if(t===6)ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!Mf(l)&&(t=ol(e,r),t===2&&(i=_i(e),i!==0&&(r=i,t=Yi(e,i))),t===1))throw n=er,At(e,0),ot(e,r),_e(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ct(e,ge,$e);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Do+500-K(),10<t)){if(Wr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ei(Ct.bind(null,e,ge,$e),t);break}Ct(e,ge,$e);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-Re(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pf(r/1960))-r,10<r){e.timeoutHandle=Ei(Ct.bind(null,e,ge,$e),r);break}Ct(e,ge,$e);break;case 5:Ct(e,ge,$e);break;default:throw Error(k(329))}}}return _e(e,K()),e.callbackNode===n?oc.bind(null,e):null}function Yi(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=ol(e,t),e!==2&&(t=ge,ge=n,t!==null&&Xi(t)),e}function Xi(e){ge===null?ge=e:ge.push.apply(ge,e)}function Mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!He(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Oo,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Ka(e){if(b&6)throw Error(k(327));rn();var t=Wr(e,0);if(!(t&1))return _e(e,K()),null;var n=ol(e,t);if(e.tag!==0&&n===2){var r=_i(e);r!==0&&(t=r,n=Yi(e,r))}if(n===1)throw n=er,At(e,0),ot(e,t),_e(e,K()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,ge,$e),_e(e,K()),null}function Ro(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(dn=K()+500,hl&&wt())}}function It(e){st!==null&&st.tag===0&&!(b&6)&&rn();var t=b;b|=1;var n=Pe.transition,r=O;try{if(Pe.transition=null,O=1,e)return e()}finally{O=r,Pe.transition=n,b=t,!(b&6)&&wt()}}function Fo(){we=Zt.current,H(Zt)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(xo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:un(),H(ve),H(de),Eo();break;case 5:To(r);break;case 4:un();break;case 13:H(Q);break;case 19:H(Q);break;case 10:So(r.type._context);break;case 22:case 23:Fo()}n=n.return}if(ne=e,Z=e=gt(e.current,null),le=we=t,q=0,er=null,Oo=xl=bt=0,ge=On=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}Tt=null}return e}function ac(e,t){do{var n=Z;try{if(ko(),Pr.current=nl,tl){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}tl=!1}if(zt=0,te=J=$=null,bn=!1,Zn=0,Io.current=null,n===null||n.return===null){q=1,er=t,Z=null;break}e:{var i=e,s=n.return,f=n,p=t;if(t=le,f.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var g=p,_=f,o=_.tag;if(!(_.mode&1)&&(o===0||o===11||o===15)){var a=_.alternate;a?(_.updateQueue=a.updateQueue,_.memoizedState=a.memoizedState,_.lanes=a.lanes):(_.updateQueue=null,_.memoizedState=null)}var c=Da(s);if(c!==null){c.flags&=-257,Ra(c,s,f,i,t),c.mode&1&&Oa(i,g,t),t=c,p=g;var h=t.updateQueue;if(h===null){var y=new Set;y.add(p),t.updateQueue=y}else h.add(p);break e}else{if(!(t&1)){Oa(i,g,t),Ho();break e}p=Error(k(426))}}else if(G&&f.mode&1){var x=Da(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ra(x,s,f,i,t),_o(cn(p,f));break e}}i=p=cn(p,f),q!==4&&(q=2),On===null?On=[i]:On.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Gu(i,p,t);La(i,d);break e;case 1:f=p;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(mt===null||!mt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Qu(i,f,t);La(i,w);break e}}i=i.return}while(i!==null)}cc(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function sc(){var e=rl.current;return rl.current=nl,e===null?nl:e}function Ho(){(q===0||q===3||q===2)&&(q=4),ne===null||!(bt&268435455)&&!(xl&268435455)||ot(ne,le)}function ol(e,t){var n=b;b|=2;var r=sc();(ne!==e||le!==t)&&($e=null,At(e,t));do try{zf();break}catch(l){ac(e,l)}while(!0);if(ko(),b=n,rl.current=r,Z!==null)throw Error(k(261));return ne=null,le=0,q}function zf(){for(;Z!==null;)uc(Z)}function bf(){for(;Z!==null&&!ld();)uc(Z)}function uc(e){var t=fc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?cc(e):Z=t,Io.current=null}function cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tf(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(n=Nf(n,t,we),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);q===0&&(q=5)}function Ct(e,t,n){var r=O,l=Pe.transition;try{Pe.transition=null,O=1,If(e,t,n,r)}finally{Pe.transition=l,O=r}return null}function If(e,t,n,r){do rn();while(st!==null);if(b&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(md(e,i),e===ne&&(Z=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sr||(Sr=!0,pc(Br,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var s=O;O=1;var f=b;b|=4,Io.current=null,Af(e,n),lc(n,e),ef(Ni),Vr=!!Ci,Ni=Ci=null,e.current=n,Lf(n),id(),b=f,O=s,Pe.transition=i}else e.current=n;if(Sr&&(Sr=!1,st=e,il=l),i=e.pendingLanes,i===0&&(mt=null),sd(n.stateNode),_e(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ll)throw ll=!1,e=$i,$i=null,e;return il&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Ui?Dn++:(Dn=0,Ui=e):Dn=0,wt(),null}function rn(){if(st!==null){var e=Gs(il),t=Pe.transition,n=O;try{if(Pe.transition=null,O=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,il=0,b&6)throw Error(k(331));var l=b;for(b|=4,C=e.current;C!==null;){var i=C,s=i.child;if(C.flags&16){var f=i.deletions;if(f!==null){for(var p=0;p<f.length;p++){var g=f[p];for(C=g;C!==null;){var _=C;switch(_.tag){case 0:case 11:case 15:In(8,_,i)}var o=_.child;if(o!==null)o.return=_,C=o;else for(;C!==null;){_=C;var a=_.sibling,c=_.return;if(tc(_),_===g){C=null;break}if(a!==null){a.return=c,C=a;break}C=c}}}var h=i.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}C=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,C=s;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var m=e.current;for(C=m;C!==null;){s=C;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,C=v;else e:for(s=m;C!==null;){if(f=C,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:vl(9,f)}}catch(S){Y(f,f.return,S)}if(f===s){C=null;break e}var w=f.sibling;if(w!==null){w.return=f.return,C=w;break e}C=f.return}}if(b=l,wt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{O=n,Pe.transition=t}}return!1}function Za(e,t,n){t=cn(n,t),t=Gu(e,t,1),e=pt(e,t,1),t=pe(),e!==null&&(nr(e,1,t),_e(e,t))}function Y(e,t,n){if(e.tag===3)Za(e,e,n);else for(;t!==null;){if(t.tag===3){Za(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=cn(n,e),e=Qu(t,e,1),t=pt(t,e,1),e=pe(),t!==null&&(nr(t,1,e),_e(t,e));break}}t=t.return}}function Of(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(q===4||q===3&&(le&130023424)===le&&500>K()-Do?At(e,0):Oo|=n),_e(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=pe();e=qe(e,t),e!==null&&(nr(e,t,n),_e(e,n))}function Df(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),dc(e,n)}var fc;fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Cf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,G&&t.flags&1048576&&gu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=on(t,de.current);nn(t,n),l=Lo(null,t,r,e,l,n);var i=Po();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(i=!0,Yr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Co(t),l.updater=yl,t.stateNode=l,l._reactInternals=t,Ii(t,r,e,n),t=Ri(null,t,r,!0,i,n)):(t.tag=0,G&&i&&vo(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Hf(r),e=Ie(r,e),l){case 0:t=Di(null,t,r,e,n);break e;case 1:t=Ba(null,t,r,e,n);break e;case 11:t=Fa(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,Ie(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Di(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Ba(e,t,r,l,n);case 3:e:{if(Xu(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ku(e,t),qr(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=cn(Error(k(423)),t),t=Wa(e,t,r,n,l);break e}else if(r!==l){l=cn(Error(k(424)),t),t=Wa(e,t,r,n,l);break e}else for(ke=ft(t.stateNode.containerInfo.firstChild),Se=t,G=!0,De=null,n=_u(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===l){t=et(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&Mi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Ti(r,l)?s=null:i!==null&&Ti(r,i)&&(t.flags|=32),Yu(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return Ku(e,t,n);case 4:return No(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Fa(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,R(Zr,r._currentValue),r._currentValue=s,i!==null)if(He(i.value,s)){if(i.children===l.children&&!ve.current){t=et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){s=i.child;for(var p=f.firstContext;p!==null;){if(p.context===r){if(i.tag===1){p=Ke(-1,n&-n),p.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var _=g.pending;_===null?p.next=p:(p.next=_.next,_.next=p),g.pending=p}}i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),zi(i.return,n,t),f.lanes|=n;break}p=p.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(k(341));s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),zi(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,nn(t,n),l=Me(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),Ha(e,t,r,l,n);case 15:return $u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),zr(e,t),t.tag=1,xe(r)?(e=!0,Yr(t)):e=!1,nn(t,n),Vu(t,r,l),Ii(t,r,l,n),Ri(null,t,r,!0,e,n);case 19:return Zu(e,t,n);case 22:return Uu(e,t,n)}throw Error(k(156,t.tag))};function pc(e,t){return Hs(e,t)}function Ff(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Ff(e,t,n,r)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===oo)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")Bo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return Lt(n.children,l,i,t);case lo:s=8,l|=8;break;case ii:return e=Le(12,n,t,l|2),e.elementType=ii,e.lanes=i,e;case oi:return e=Le(13,n,t,l),e.elementType=oi,e.lanes=i,e;case ai:return e=Le(19,n,t,l),e.elementType=ai,e.lanes=i,e;case Ss:return _l(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ws:s=10;break e;case ks:s=9;break e;case io:s=11;break e;case oo:s=14;break e;case rt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Le(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Lt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Ss,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Wo(e,t,n,r,l,i,s,f,p){return e=new Bf(e,t,n,f,p),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Co(i),e}function Wf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return vt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return mu(e,n,t)}return t}function hc(e,t,n,r,l,i,s,f,p){return e=Wo(n,r,!0,e,l,i,s,f,p),e.context=mc(null),n=e.current,r=pe(),l=ht(n),i=Ke(r,l),i.callback=t??null,pt(n,i,l),e.current.lanes=l,nr(e,l,r),_e(e,r),e}function wl(e,t,n,r){var l=t.current,i=pe(),s=ht(l);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,s),e!==null&&(Fe(e,l,s,i),Lr(e,l,s)),s}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ja(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vo(e,t){Ja(e,t),(e=e.alternate)&&Ja(e,t)}function Vf(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Go(e){this._internalRoot=e}kl.prototype.render=Go.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));wl(e,t,null,null)};kl.prototype.unmount=Go.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){wl(null,e,null,null)}),t[Je]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Xs(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qa(){}function Gf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=al(s);i.call(g)}}var s=hc(t,r,e,0,null,!1,!1,"",qa);return e._reactRootContainer=s,e[Je]=s.current,$n(e.nodeType===8?e.parentNode:e),It(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var g=al(p);f.call(g)}}var p=Wo(e,0,!1,null,null,!1,!1,"",qa);return e._reactRootContainer=p,e[Je]=p.current,$n(e.nodeType===8?e.parentNode:e),It(function(){wl(t,p,n,r)}),p}function jl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var f=l;l=function(){var p=al(s);f.call(p)}}wl(t,s,e,l)}else s=Gf(n,t,e,l,r);return al(s)}Qs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(uo(t,n|1),_e(t,K()),!(b&6)&&(dn=K()+500,wt()))}break;case 13:It(function(){var r=qe(e,1);if(r!==null){var l=pe();Fe(r,e,1,l)}}),Vo(e,1)}};co=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=pe();Fe(t,e,134217728,n)}Vo(e,134217728)}};$s=function(e){if(e.tag===13){var t=ht(e),n=qe(e,t);if(n!==null){var r=pe();Fe(n,e,t,r)}Vo(e,t)}};Us=function(){return O};Ys=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};yi=function(e,t,n){switch(t){case"input":if(ci(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ml(r);if(!l)throw Error(k(90));Cs(r),ci(r,l)}}}break;case"textarea":Ts(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};bs=Ro;Is=It;var Qf={usingClientEntryPoint:!1,Events:[lr,Qt,ml,Ms,zs,Ro]},Sn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$f={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rs(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{cl=jr.inject($f),Ge=jr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(k(200));return Wf(e,t,null,n)};Ce.createRoot=function(e,t){if(!Qo(e))throw Error(k(299));var n=!1,r="",l=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Wo(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,$n(e.nodeType===8?e.parentNode:e),new Go(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Rs(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return It(e)};Ce.hydrate=function(e,t,n){if(!Sl(t))throw Error(k(200));return jl(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=gc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=hc(t,null,e,1,n??null,l,!1,i,s),e[Je]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new kl(t)};Ce.render=function(e,t,n){if(!Sl(t))throw Error(k(200));return jl(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(k(40));return e._reactRootContainer?(It(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ro;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return jl(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc)}catch(e){console.error(e)}}yc(),ys.exports=Ce;var Uf=ys.exports,es=Uf;ri.createRoot=es.createRoot,ri.hydrateRoot=es.hydrateRoot;const ts=({onStart:e,onSettings:t,onHelp:n})=>u.jsxs("div",{className:"cg-main-menu",children:[u.jsxs("div",{className:"cg-menu-bg",children:[u.jsx("div",{className:"cg-menu-bg-gradient"}),u.jsx("div",{className:"cg-menu-bg-pattern"}),u.jsx("div",{className:"cg-menu-geass-symbols",children:u.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:u.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),u.jsxs("div",{className:"cg-menu-content",children:[u.jsxs("div",{className:"cg-menu-header",children:[u.jsxs("div",{className:"cg-menu-title-decoration",children:[u.jsx("div",{className:"cg-title-line-left"}),u.jsx("div",{className:"cg-title-ornament",children:u.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:u.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),u.jsx("div",{className:"cg-title-line-right"})]}),u.jsxs("h1",{className:"cg-game-title",children:[u.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),u.jsx("span",{className:"cg-title-divider",children:":"}),u.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),u.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),u.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[u.jsx("div",{className:"cg-title-line-left"}),u.jsx("div",{className:"cg-title-ornament",children:u.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[u.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),u.jsx("div",{className:"cg-title-line-right"})]})]}),u.jsxs("nav",{className:"cg-menu-nav",children:[u.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M8 5v14l11-7z"})})}),u.jsx("span",{className:"cg-button-text",children:"开始游戏"}),u.jsx("div",{className:"cg-button-shimmer"})]}),u.jsxs("button",{className:"cg-menu-button",onClick:t,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),u.jsx("span",{className:"cg-button-text",children:"设置"})]}),u.jsxs("button",{className:"cg-menu-button",onClick:n,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),u.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),u.jsx("footer",{className:"cg-menu-footer",children:u.jsx("div",{className:"cg-footer-decoration",children:u.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),u.jsx("style",{children:`
        .cg-main-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cg-menu-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-menu-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            #0a0a0f 0%,
            #0f0f1a 30%,
            #1a1a24 70%,
            #0a0a0f 100%
          );
        }

        .cg-menu-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.02) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.01) 0%, transparent 60%);
          background-attachment: fixed;
        }

        .cg-menu-geass-symbols {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          opacity: 0.1;
          pointer-events: none;
        }

        .cg-geass-symbol {
          width: 100%;
          height: 100%;
        }

        .cg-rotate-slow {
          animation: rotateGeass 60s linear infinite;
        }

        @keyframes rotateGeass {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cg-menu-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          padding: 2rem;
        }

        .cg-menu-header {
          text-align: center;
        }

        .cg-menu-title-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .cg-decoration-bottom {
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        .cg-title-line-left,
        .cg-title-line-right {
          width: 100px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #d4af37,
            transparent
          );
        }

        .cg-title-line-left {
          background: linear-gradient(90deg, transparent, #d4af37);
        }

        .cg-title-line-right {
          background: linear-gradient(90deg, #d4af37, transparent);
        }

        .cg-title-ornament {
          width: 40px;
          height: 40px;
        }

        .cg-ornament-icon {
          width: 100%;
          height: 100%;
        }

        .cg-game-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
        }

        .cg-title-code {
          font-family: 'Cinzel', serif;
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          background: linear-gradient(
            135deg,
            #d4af37 0%,
            #f4d03f 25%,
            #d4af37 50%,
            #b8941f 75%,
            #d4af37 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }

        .cg-title-divider {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        .cg-title-sub {
          font-family: 'Cinzel Decorative', serif;
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.3em;
          color: #f5f5f5;
          opacity: 0.9;
        }

        .cg-game-subtitle {
          font-family: 'Noto Serif SC', serif;
          font-size: 1rem;
          color: #a1a1aa;
          letter-spacing: 0.5em;
          margin-top: 1rem;
        }

        .cg-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 280px;
        }

        .cg-menu-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #f5f5f5;
          background: linear-gradient(135deg, #252532 0%, #1a1a24 100%);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .cg-menu-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 175, 55, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .cg-menu-button:hover {
          border-color: #d4af37;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
          transform: translateX(5px);
        }

        .cg-menu-button:hover::before {
          left: 100%;
        }

        .cg-button-primary {
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border-color: #d4af37;
          color: #0a0a0f;
        }

        .cg-button-primary:hover {
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
        }

        .cg-button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        .cg-button-icon svg {
          width: 100%;
          height: 100%;
        }

        .cg-button-text {
          flex: 1;
          text-align: left;
        }

        .cg-button-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .cg-menu-footer {
          margin-top: 2rem;
        }

        .cg-footer-decoration {
          position: relative;
          padding: 0.5rem 2rem;
        }

        .cg-footer-decoration::before,
        .cg-footer-decoration::after {
          content: '◆';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #d4af37;
          font-size: 0.5rem;
          opacity: 0.5;
        }

        .cg-footer-decoration::before {
          left: 0;
        }

        .cg-footer-decoration::after {
          right: 0;
        }

        .cg-footer-text {
          font-family: 'Noto Serif SC', serif;
          font-size: 0.75rem;
          color: #71717a;
          letter-spacing: 0.2em;
        }
      `})]}),Ki=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",color:"#4c1d95",secondaryColor:"#1e1b4b",accentColor:"#dc2626",description:"黑色骑士团的领袖，拥有Geass之力",personality:"calculating",pose:"思考姿势 - 单手托腮，眼神锐利",accessories:["眼罩（遮住Geass之眼）","黑色披风","金色装饰"]},{id:"cc",name:"C.C.",nameEn:"C.C.",color:"#15803d",secondaryColor:"#14532d",accentColor:"#fbbf24",description:"赋予鲁鲁修Geass的神秘少女",personality:"mysterious",pose:"慵懒姿势 - 手持披萨，侧躺",accessories:["披萨","白色拘束服","绿色长发"]},{id:"suzaku",name:"枢木朱雀",nameEn:"Suzaku",color:"#f8fafc",secondaryColor:"#cbd5e1",accentColor:"#3b82f6",description:"圆桌骑士，鲁鲁修的挚友也是宿敌",personality:"passionate",pose:"热血姿势 - 握拳，充满干劲",accessories:["骑士制服","兰斯洛特徽章","白色披风"]},{id:"kallen",name:"红月卡莲",nameEn:"Kallen",color:"#dc2626",secondaryColor:"#991b1b",accentColor:"#fbbf24",description:"黑色骑士团的王牌驾驶员",personality:"tsundere",pose:"傲娇姿势 - 双臂交叉，侧头",accessories:["红色头巾","驾驶服","红莲徽章"]}],Cl={lelouch:{primary:"#4c1d95",secondary:"#2e1065",highlight:"#7c3aed",shadow:"#1e1b4b",eye:"#dc2626",outline:"#0a0a0f"},cc:{primary:"#15803d",secondary:"#166534",highlight:"#22c55e",eye:"#fbbf24",outline:"#0a0a0f"},suzaku:{primary:"#f8fafc",secondary:"#e2e8f0",highlight:"#ffffff",shadow:"#94a3b8",eye:"#3b82f6",outline:"#0a0a0f"},kallen:{primary:"#dc2626",secondary:"#b91c1c",highlight:"#ef4444",shadow:"#7f1d1d",eye:"#fbbf24",outline:"#0a0a0f"}},ns=({size:e=200,animationState:t="idle",className:n=""})=>{const r=Cl.lelouch,l=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(-5deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:l()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"lelouchBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"lelouchCapeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.secondary}),u.jsx("stop",{offset:"100%",stopColor:r.shadow})]}),u.jsxs("radialGradient",{id:"lelouchEyeGrad",cx:"50%",cy:"50%",r:"50%",children:[u.jsx("stop",{offset:"0%",stopColor:r.eye}),u.jsx("stop",{offset:"70%",stopColor:r.eye}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("symbol",{id:"geassSymbol",viewBox:"0 0 40 40",children:[u.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"none",stroke:r.eye,strokeWidth:"2"}),u.jsx("circle",{cx:"20",cy:"20",r:"3",fill:r.eye})]})]}),u.jsx("path",{d:"M60 100 Q40 140 30 180 L170 180 Q160 140 140 100 Z",fill:"url(#lelouchCapeGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"130",rx:"45",ry:"40",fill:"url(#lelouchBodyGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M70 130 Q100 145 130 130",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("circle",{cx:"100",cy:"70",r:"45",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M55 70 Q50 40 70 30 Q100 20 130 30 Q150 40 145 70 Q150 90 140 100 L60 100 Q50 90 55 70",fill:r.shadow,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M60 50 Q70 35 85 45 Q100 30 115 45 Q130 35 140 50 Q135 65 130 60 L100 55 L70 60 Q65 65 60 50",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"82",cy:"75",rx:"10",ry:"12",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"82",cy:"75",rx:"6",ry:"8",fill:"#1e293b"}),u.jsx("circle",{cx:"84",cy:"73",r:"2",fill:"white"}),u.jsx("ellipse",{cx:"118",cy:"75",rx:"10",ry:"12",fill:"#1a1a24",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("rect",{x:"108",y:"65",width:"20",height:"20",rx:"3",fill:r.shadow,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("line",{x1:"108",y1:"75",x2:"128",y2:"75",stroke:r.outline,strokeWidth:"1"}),u.jsx("line",{x1:"118",y1:"65",x2:"118",y2:"85",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M128 75 Q145 70 155 65",fill:"none",stroke:r.shadow,strokeWidth:"3"}),u.jsx("path",{d:"M108 75 Q90 70 80 65",fill:"none",stroke:r.shadow,strokeWidth:"3"}),u.jsx("path",{d:"M92 95 Q100 92 108 95",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("ellipse",{cx:"65",cy:"110",rx:"12",ry:"10",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"135",cy:"115",rx:"12",ry:"10",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("use",{href:"#geassSymbol",x:"150",y:"20",width:"30",height:"30",opacity:"0.6",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 165 35",to:"360 165 35",dur:"10s",repeatCount:"indefinite"})}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"130",rx:"48",ry:"43",fill:"none",stroke:r.eye,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"48;50;48",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Yf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=Cl.cc,l=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(5deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:l()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"ccBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"ccHairGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"100%",stopColor:r.primary})]}),u.jsxs("linearGradient",{id:"ccPizzaGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#fbbf24"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("path",{d:"M50 80 Q30 120 25 160 Q20 180 30 190 L170 190 Q180 180 175 160 Q170 120 150 80 Q100 70 50 80",fill:"url(#ccHairGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"40",ry:"35",fill:"#f8fafc",stroke:r.outline,strokeWidth:"2"}),u.jsx("rect",{x:"85",y:"110",width:"30",height:"50",rx:"5",fill:"none",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("line",{x1:"100",y1:"110",x2:"100",y2:"160",stroke:r.outline,strokeWidth:"1"}),u.jsx("circle",{cx:"92",cy:"125",r:"3",fill:r.outline}),u.jsx("circle",{cx:"108",cy:"125",r:"3",fill:r.outline}),u.jsx("circle",{cx:"92",cy:"145",r:"3",fill:r.outline}),u.jsx("circle",{cx:"108",cy:"145",r:"3",fill:r.outline}),u.jsx("circle",{cx:"100",cy:"75",r:"42",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M58 75 Q60 45 85 50 Q100 40 115 50 Q140 45 142 75 Q140 95 130 90 L100 85 L70 90 Q60 95 58 75",fill:"url(#ccHairGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"78",rx:"9",ry:"10",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"78",rx:"5",ry:"6",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"76",r:"1.5",fill:"white"}),u.jsx("ellipse",{cx:"122",cy:"78",rx:"9",ry:"10",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"78",rx:"5",ry:"6",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"76",r:"1.5",fill:"white"}),u.jsx("path",{d:"M70 65 Q78 68 86 65",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M114 65 Q122 68 130 65",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M95 95 Q100 98 105 95",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsxs("g",{transform:"translate(130, 100) rotate(-20)",children:[u.jsx("path",{d:"M0 0 L-20 40 Q0 50 20 40 Z",fill:"url(#ccPizzaGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M-2 5 L-15 35 Q0 42 15 35 L2 5 Z",fill:"#fef3c7",opacity:"0.9"}),u.jsx("circle",{cx:"-5",cy:"20",r:"3",fill:"#dc2626"}),u.jsx("circle",{cx:"5",cy:"25",r:"3",fill:"#dc2626"}),u.jsx("circle",{cx:"0",cy:"32",r:"2.5",fill:"#dc2626"})]}),u.jsx("ellipse",{cx:"140",cy:"120",rx:"10",ry:"8",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"60",cy:"125",rx:"10",ry:"8",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"43",ry:"38",fill:"none",stroke:r.highlight,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"38;40;38",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Xf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=Cl.suzaku,l=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-15px) scale(1.08)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(-3deg) scale(1.02)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:l()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"suzakuBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"suzakuCapeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.shadow})]}),u.jsxs("linearGradient",{id:"suzakuUniformGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"50%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]})]}),u.jsx("path",{d:"M55 100 Q35 140 30 180 L170 180 Q165 140 145 100 Z",fill:"url(#suzakuCapeGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"42",ry:"38",fill:"url(#suzakuUniformGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M70 120 Q100 140 130 120",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("rect",{x:"95",y:"110",width:"10",height:"40",fill:"#d4af37"}),u.jsx("circle",{cx:"100",cy:"130",r:"8",fill:"#3b82f6",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M96 130 L100 126 L104 130 L100 134 Z",fill:"white"}),u.jsx("circle",{cx:"100",cy:"72",r:"43",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M57 72 Q55 40 75 32 Q100 25 125 32 Q145 40 143 72 Q145 90 135 95 L100 90 L65 95 Q55 90 57 72",fill:"#5c4033",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M60 55 L55 45 L68 52 L72 40 L80 50 L85 35 L95 48 L100 30 L105 48 L115 35 L120 50 L128 40 L132 52 L145 45 L140 55",fill:"#5c4033",stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M72 70 L78 72",stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M128 70 L122 72",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M68 62 L88 68",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M132 62 L112 68",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M90 95 Q100 102 110 95",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M92 97 L108 97",fill:"none",stroke:r.outline,strokeWidth:"1"}),u.jsxs("g",{transform:"translate(55, 115)",children:[u.jsx("circle",{cx:"0",cy:"0",r:"12",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"-3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"0",cy:"-8",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"})]}),u.jsxs("g",{transform:"translate(145, 115)",children:[u.jsx("circle",{cx:"0",cy:"0",r:"12",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"-3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"0",cy:"-8",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"})]}),t==="win"&&u.jsxs("g",{stroke:"#fbbf24",strokeWidth:"2",opacity:"0.8",children:[u.jsx("line",{x1:"40",y1:"60",x2:"30",y2:"50",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"160",y1:"60",x2:"170",y2:"50",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"50",y1:"40",x2:"45",y2:"30",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",begin:"0.2s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"150",y1:"40",x2:"155",y2:"30",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",begin:"0.2s",repeatCount:"indefinite"})})]}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"45",ry:"41",fill:"none",stroke:r.eye,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"45;47;45",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"41;43;41",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Kf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=Cl.kallen,l=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(3deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:l()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"kallenBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"kallenHairGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"100%",stopColor:r.primary})]}),u.jsxs("linearGradient",{id:"kallenSuitGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"100%",stopColor:"#450a0a"})]})]}),u.jsx("path",{d:"M50 80 Q40 120 35 160 Q30 185 45 190 L155 190 Q170 185 165 160 Q160 120 150 80 Q100 70 50 80",fill:"url(#kallenHairGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"40",ry:"36",fill:"url(#kallenSuitGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M75 120 Q100 135 125 120",fill:"none",stroke:r.highlight,strokeWidth:"2"}),u.jsx("rect",{x:"95",y:"115",width:"10",height:"35",fill:r.highlight,opacity:"0.5"}),u.jsx("circle",{cx:"100",cy:"130",r:"7",fill:r.eye,stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M97 130 L100 127 L103 130 L100 133 Z",fill:r.shadow}),u.jsx("circle",{cx:"100",cy:"72",r:"42",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M58 72 Q60 42 85 48 Q100 38 115 48 Q140 42 142 72 Q140 92 130 88 L100 82 L70 88 Q60 92 58 72",fill:"url(#kallenHairGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M55 60 Q100 45 145 60 L148 75 Q100 60 52 75 Z",fill:r.secondary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("rect",{x:"95",y:"50",width:"10",height:"15",fill:r.highlight}),u.jsx("path",{d:"M55 65 Q40 80 35 100 L45 95 Q50 80 58 70",fill:r.secondary,stroke:r.outline,strokeWidth:"1",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 55 65;5 55 65;0 55 65",dur:"2s",repeatCount:"indefinite"})}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"74",r:"2",fill:"white"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M68 62 L88 66",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M132 62 L112 66",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M95 96 Q100 94 108 97",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M60 125 Q80 135 100 130 Q120 135 140 125",fill:"none",stroke:r.primary,strokeWidth:"12",strokeLinecap:"round"}),u.jsx("path",{d:"M60 125 Q80 135 100 130 Q120 135 140 125",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("ellipse",{cx:"85",cy:"128",rx:"8",ry:"6",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"115",cy:"128",rx:"8",ry:"6",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"65",cy:"85",rx:"8",ry:"5",fill:"#fca5a5",opacity:"0.6"}),u.jsx("ellipse",{cx:"135",cy:"85",rx:"8",ry:"5",fill:"#fca5a5",opacity:"0.6"}),t==="lose"&&u.jsxs("g",{stroke:r.outline,strokeWidth:"2",children:[u.jsx("path",{d:"M40 50 L50 55 M45 45 L52 52",children:u.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("path",{d:"M160 50 L150 55 M155 45 L148 52",children:u.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"0.5s",repeatCount:"indefinite"})})]}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"43",ry:"39",fill:"none",stroke:r.highlight,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"39;41;39",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},sl=e=>{const{characterId:t,size:n=200,animationState:r="idle",className:l=""}=e,i={size:n,animationState:r,className:l};switch(t){case"lelouch":return Ft.createElement(ns,i);case"cc":return Ft.createElement(Yf,i);case"suzaku":return Ft.createElement(Xf,i);case"kallen":return Ft.createElement(Kf,i);default:return Ft.createElement(ns,i)}},Zf=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,i]=I.useState(null),s=Ki.find(f=>f.id===e);return u.jsxs("div",{className:"cg-character-select",children:[u.jsxs("div",{className:"cg-select-bg",children:[u.jsx("div",{className:"cg-select-bg-gradient"}),u.jsx("div",{className:"cg-select-bg-pattern"})]}),u.jsxs("div",{className:"cg-select-content",children:[u.jsxs("header",{className:"cg-select-header",children:[u.jsxs("button",{className:"cg-back-button",onClick:r,children:[u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),u.jsx("span",{children:"返回"})]}),u.jsx("h2",{className:"cg-select-title",children:u.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),u.jsx("div",{className:"cg-select-placeholder"})]}),u.jsx("div",{className:"cg-character-grid",children:Ki.map(f=>{const p=e===f.id,g=l===f.id;return u.jsxs("div",{className:`cg-character-card ${p?"cg-selected":""} ${g?"cg-hovered":""}`,onClick:()=>t(f.id),onMouseEnter:()=>i(f.id),onMouseLeave:()=>i(null),children:[u.jsxs("div",{className:"cg-card-frame",children:[u.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),u.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),u.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),u.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),u.jsx("div",{className:"cg-character-preview",children:u.jsx(sl,{characterId:f.id,size:150,animationState:p?"breathing":"idle"})}),u.jsxs("div",{className:"cg-character-info",children:[u.jsx("h3",{className:"cg-character-name",children:f.name}),u.jsx("p",{className:"cg-character-name-en",children:f.nameEn})]}),p&&u.jsx("div",{className:"cg-selected-indicator",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:u.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),u.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${f.color}40 0%, transparent 70%)`}})]},f.id)})}),s&&u.jsx("div",{className:"cg-character-detail",children:u.jsxs("div",{className:"cg-detail-frame",children:[u.jsxs("div",{className:"cg-detail-content",children:[u.jsx("p",{className:"cg-detail-description",children:s.description}),u.jsxs("div",{className:"cg-detail-traits",children:[u.jsx("span",{className:"cg-trait-label",children:"性格:"}),u.jsxs("span",{className:"cg-trait-value",children:[s.personality==="calculating"&&"深谋远虑",s.personality==="mysterious"&&"神秘莫测",s.personality==="passionate"&&"热血正义",s.personality==="tsundere"&&"傲娇坚强"]})]})]}),u.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[u.jsx("span",{children:"确认选择"}),u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),u.jsx("style",{children:`
        .cg-character-select {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cg-select-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-select-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            #0a0a0f 0%,
            #0f0f1a 50%,
            #1a1a24 100%
          );
        }

        .cg-select-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(212, 175, 55, 0.02) 0%, transparent 40%);
        }

        .cg-select-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 900px;
          height: 100%;
          max-height: 100vh;
          padding: 2rem;
          box-sizing: border-box;
          overflow-y: auto;
        }

        .cg-select-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .cg-back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #a1a1aa;
          background: transparent;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-back-button:hover {
          color: #f5f5f5;
          border-color: #d4af37;
        }

        .cg-back-button svg {
          width: 20px;
          height: 20px;
        }

        .cg-select-title {
          margin: 0;
          font-family: 'Noto Serif SC', serif;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .cg-title-gold {
          background: linear-gradient(135deg, #d4af37, #f4d03f, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cg-select-placeholder {
          width: 80px;
        }

        .cg-character-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .cg-character-select {
            position: absolute;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
          }
          
          .cg-select-content {
            height: auto;
            min-height: 100%;
            padding: 1rem;
            padding-bottom: 200px;
          }
          
          .cg-character-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          
          .cg-character-card {
            padding: 0.75rem 0.5rem;
          }
          
          .cg-character-preview {
            transform: scale(0.7);
            margin-bottom: 0.5rem;
          }
          
          .cg-character-name {
            font-size: 0.9rem;
          }
          
          .cg-character-name-en {
            font-size: 0.65rem;
          }
          
          .cg-character-detail {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #0a0a0f;
            border-top: 2px solid #d4af37;
            padding: 1rem;
            z-index: 100;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.5);
          }
          
          .cg-detail-frame {
            flex-direction: row;
            gap: 0.75rem;
            padding: 0.75rem;
          }
          
          .cg-detail-content {
            flex: 1;
            text-align: left;
          }
          
          .cg-detail-description {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
          
          .cg-detail-traits {
            font-size: 0.7rem;
          }
          
          .cg-confirm-button {
            flex-shrink: 0;
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
            white-space: nowrap;
          }
          
          .cg-select-header {
            margin-bottom: 1rem;
          }
          
          .cg-select-title {
            font-size: 1.25rem;
          }
          
          .cg-back-button {
            padding: 0.4rem 0.75rem;
            font-size: 0.8rem;
          }
        }

        .cg-character-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 1rem;
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 1px solid #3f3f46;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cg-character-card:hover,
        .cg-character-card.cg-hovered {
          border-color: #d4af37;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .cg-character-card.cg-selected {
          border-color: #d4af37;
          box-shadow: 
            0 0 20px rgba(212, 175, 55, 0.3),
            inset 0 0 30px rgba(212, 175, 55, 0.1);
        }

        .cg-card-frame {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .cg-frame-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .cg-character-card:hover .cg-frame-corner,
        .cg-character-card.cg-selected .cg-frame-corner {
          border-color: #d4af37;
        }

        .cg-corner-tl {
          top: -2px;
          left: -2px;
          border-right: none;
          border-bottom: none;
        }

        .cg-corner-tr {
          top: -2px;
          right: -2px;
          border-left: none;
          border-bottom: none;
        }

        .cg-corner-bl {
          bottom: -2px;
          left: -2px;
          border-right: none;
          border-top: none;
        }

        .cg-corner-br {
          bottom: -2px;
          right: -2px;
          border-left: none;
          border-top: none;
        }

        .cg-character-preview {
          position: relative;
          z-index: 1;
          margin-bottom: 1rem;
        }

        .cg-character-info {
          text-align: center;
          z-index: 1;
        }

        .cg-character-name {
          margin: 0 0 0.25rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: #f5f5f5;
        }

        .cg-character-name-en {
          margin: 0;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          color: #71717a;
          letter-spacing: 0.1em;
        }

        .cg-selected-indicator {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 24px;
          height: 24px;
          z-index: 2;
        }

        .cg-character-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .cg-character-card:hover .cg-character-glow,
        .cg-character-card.cg-selected .cg-character-glow {
          opacity: 0.5;
        }

        .cg-character-detail {
          margin-top: 1rem;
          padding-top: 1rem;
          flex-shrink: 0;
        }

        .cg-detail-frame {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(26, 26, 36, 0.9) 0%, rgba(37, 37, 50, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid #3f3f46;
          border-radius: 0.75rem;
        }

        .cg-detail-content {
          flex: 1;
        }

        .cg-detail-description {
          margin: 0 0 0.75rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #a1a1aa;
          line-height: 1.6;
        }

        .cg-detail-traits {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-trait-label {
          font-size: 0.75rem;
          color: #71717a;
        }

        .cg-trait-value {
          font-size: 0.75rem;
          color: #d4af37;
          font-weight: 500;
        }

        .cg-confirm-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #0a0a0f;
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-confirm-button:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: scale(1.02);
        }

        .cg-confirm-button svg {
          width: 20px;
          height: 20px;
        }
      `})]})},Jf=({gameState:e,onPlayCard:t,onPass:n,onChallenge:r,gameLog:l=[],funnyAction:i})=>{const{selectedCharacter:s,playerHand:f,tableCards:p,currentRound:g,playerScore:_,opponentScore:o,playerHP:a,opponentHP:c,maxHP:h,currentTurn:y,lastAction:x}=e;return u.jsxs("div",{className:"cg-game-table",children:[u.jsxs("div",{className:"cg-table-bg",children:[u.jsx("div",{className:"cg-table-bg-gradient"}),u.jsx("div",{className:"cg-table-pattern",children:u.jsxs("svg",{className:"cg-table-geass-pattern",viewBox:"0 0 200 200",children:[u.jsx("defs",{children:u.jsx("pattern",{id:"geassPattern",x:"0",y:"0",width:"50",height:"50",patternUnits:"userSpaceOnUse",children:u.jsx("path",{d:"M25 5 L28 20 L42 25 L28 30 L25 45 L22 30 L8 25 L22 20 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.05)",strokeWidth:"0.5"})})}),u.jsx("rect",{width:"100%",height:"100%",fill:"url(#geassPattern)"})]})})]}),u.jsxs("header",{className:"cg-table-header",children:[u.jsxs("div",{className:"cg-round-info",children:[u.jsx("span",{className:"cg-round-label",children:"回合"}),u.jsxs("span",{className:"cg-round-value",children:[g,"/5"]})]}),u.jsxs("div",{className:"cg-score-board",children:[u.jsxs("div",{className:"cg-score cg-player-score",children:[u.jsx("span",{className:"cg-score-label",children:"玩家"}),u.jsx("span",{className:"cg-score-value",children:_})]}),u.jsx("div",{className:"cg-score-divider",children:":"}),u.jsxs("div",{className:"cg-score cg-opponent-score",children:[u.jsx("span",{className:"cg-score-value",children:o}),u.jsx("span",{className:"cg-score-label",children:"对手"})]})]}),u.jsx("div",{className:"cg-hp-display",children:u.jsxs("div",{className:"cg-hp-bar",children:[u.jsx("span",{className:"cg-hp-label",children:"HP"}),u.jsx("div",{className:"cg-hp-hearts",children:Array.from({length:h||3}).map((d,m)=>u.jsx("span",{className:`cg-hp-heart ${m<(a||3)?"active":""}`,children:m<(a||3)?"❤️":"🖤"},m))})]})})]}),u.jsxs("div",{className:"cg-opponent-area",children:[u.jsx("div",{className:"cg-opponent-hand",children:[...Array(5)].map((d,m)=>u.jsx("div",{className:"cg-card cg-card-back",children:u.jsx("div",{className:"cg-card-pattern",children:u.jsxs("svg",{viewBox:"0 0 40 60",children:[u.jsx("rect",{width:"40",height:"60",fill:"#1a1a24"}),u.jsx("path",{d:"M20 10 L23 22 L35 25 L23 28 L20 40 L17 28 L5 25 L17 22 Z",fill:"none",stroke:"#dc2626",strokeWidth:"1",opacity:"0.5"})]})})},m))}),u.jsxs("div",{className:"cg-opponent-avatar",children:[u.jsx("div",{className:`cg-avatar-frame ${y==="opponent"?"cg-avatar-active":""}`,children:u.jsx(sl,{characterId:"cc",size:80,animationState:y==="opponent"?"breathing":"idle"})}),u.jsx("div",{className:"cg-opponent-name",children:"C.C."}),u.jsx("div",{className:"cg-opponent-hp",children:Array.from({length:h||3}).map((d,m)=>u.jsx("span",{className:"cg-hp-heart-small",children:m<(c||3)?"❤️":"🖤"},m))})]})]}),u.jsx("div",{className:"cg-table-center",children:u.jsx("div",{className:"cg-table-surface",children:u.jsxs("div",{className:"cg-table-felt",children:[u.jsxs("div",{className:"cg-felt-border",children:[u.jsx("div",{className:"cg-felt-corner cg-felt-tl"}),u.jsx("div",{className:"cg-felt-corner cg-felt-tr"}),u.jsx("div",{className:"cg-felt-corner cg-felt-bl"}),u.jsx("div",{className:"cg-felt-corner cg-felt-br"})]}),u.jsx("div",{className:"cg-table-logo",children:u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-logo-geass",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"1",opacity:"0.3"}),u.jsx("circle",{cx:"50",cy:"50",r:"35",fill:"none",stroke:"#d4af37",strokeWidth:"0.5",opacity:"0.2"}),u.jsx("path",{d:"M50 15 L55 40 L80 50 L55 60 L50 85 L45 60 L20 50 L45 40 Z",fill:"none",stroke:"#dc2626",strokeWidth:"2",opacity:"0.4",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"120s",repeatCount:"indefinite"})})]})}),u.jsx("div",{className:"cg-play-area",children:p.length===0?u.jsx("div",{className:"cg-play-placeholder",children:u.jsx("span",{children:"出牌区域"})}):u.jsx("div",{className:"cg-played-cards",children:p.map((d,m)=>u.jsx("div",{className:"cg-card cg-card-played",style:{transform:`rotate(${(m-p.length/2)*5}deg) translateY(${m*-5}px)`},children:u.jsxs("div",{className:"cg-card-content",children:[u.jsx("span",{className:"cg-card-rank",children:d.rank}),u.jsx("span",{className:"cg-card-suit",children:rs(d.suit)})]})},d.id))})}),i&&u.jsx("div",{className:"cg-funny-action",children:u.jsxs("div",{className:"cg-funny-action-content",children:[u.jsx("span",{className:"cg-funny-emoji",children:i.emoji}),u.jsx("span",{className:"cg-funny-text",children:i.description})]})}),x&&u.jsx("div",{className:"cg-last-action",children:x})]})})}),u.jsx("div",{className:"cg-game-log",children:l.map((d,m)=>u.jsx("div",{className:"cg-log-entry",children:d},m))}),u.jsxs("div",{className:"cg-player-area",children:[u.jsxs("div",{className:"cg-player-avatar",children:[u.jsx("div",{className:`cg-avatar-frame ${y==="player"?"cg-avatar-active":""}`,children:s&&u.jsx(sl,{characterId:s,size:80,animationState:y==="player"?"breathing":"idle"})}),u.jsx("div",{className:"cg-player-name",children:"玩家"})]}),u.jsx("div",{className:"cg-player-hand",children:f.map((d,m)=>u.jsx("button",{className:`cg-card cg-card-front ${y!=="player"?"disabled":""}`,onClick:()=>y==="player"&&t(d.id),style:{transform:`translateX(${(m-f.length/2)*30}px)`},disabled:y!=="player",children:u.jsxs("div",{className:"cg-card-inner",children:[u.jsx("div",{className:"cg-card-rank cg-card-rank-tl",children:d.rank}),u.jsx("div",{className:"cg-card-suit-center",children:rs(d.suit)}),u.jsx("div",{className:"cg-card-rank cg-card-rank-br",children:d.rank})]})},d.id))})]}),u.jsxs("div",{className:"cg-action-bar",children:[u.jsx("button",{className:"cg-action-button cg-button-pass",onClick:n,disabled:y!=="player",children:u.jsx("span",{children:"跳过"})}),u.jsxs("button",{className:"cg-action-button cg-button-challenge cg-button-geass",onClick:r,disabled:y!=="player"||p.length===0,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),u.jsx("span",{children:"质疑"})]})]}),u.jsx("style",{children:`
        .cg-game-table {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .cg-table-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-table-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            #0a0a0f 0%,
            #0f0f1a 20%,
            #1a1a24 50%,
            #0f0f1a 80%,
            #0a0a0f 100%
          );
        }

        .cg-table-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.5;
        }

        .cg-table-geass-pattern {
          width: 100%;
          height: 100%;
        }

        .cg-table-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
        }

        .cg-round-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-round-label {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #71717a;
        }

        .cg-round-value {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #d4af37;
        }

        .cg-score-board {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(26, 26, 36, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
        }

        .cg-score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-score-label {
          font-size: 0.75rem;
          color: #71717a;
        }

        .cg-score-value {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f5f5f5;
        }

        .cg-score-divider {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          color: #d4af37;
        }

        .cg-hp-display {
          display: flex;
          align-items: center;
        }

        .cg-hp-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          background: rgba(26, 26, 36, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
        }

        .cg-hp-label {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          color: #dc2626;
          font-weight: 600;
        }

        .cg-hp-hearts {
          display: flex;
          gap: 0.25rem;
        }

        .cg-hp-heart {
          font-size: 1rem;
        }

        .cg-hp-heart-small {
          font-size: 0.75rem;
        }

        .cg-opponent-area {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 0.5rem;
        }

        .cg-opponent-avatar,
        .cg-player-avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .cg-avatar-frame {
          padding: 0.375rem;
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 2px solid #3f3f46;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .cg-avatar-active {
          border-color: #d4af37;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .cg-opponent-name,
        .cg-player-name {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.75rem;
          color: #a1a1aa;
        }

        .cg-opponent-hp {
          display: flex;
          gap: 0.125rem;
        }

        .cg-opponent-hand,
        .cg-player-hand {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cg-table-center {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          min-height: 0;
        }

        .cg-table-surface {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 16/10;
        }

        .cg-table-felt {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0f3814 0%, #1a4d20 50%, #0f3814 100%);
          border-radius: 1rem;
          box-shadow: 
            inset 0 0 60px rgba(0, 0, 0, 0.5),
            0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .cg-felt-border {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          border: 2px solid #d4af37;
          border-radius: 0.75rem;
          opacity: 0.3;
        }

        .cg-felt-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid #d4af37;
        }

        .cg-felt-tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .cg-felt-tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .cg-felt-bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .cg-felt-br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .cg-table-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          opacity: 0.5;
        }

        .cg-logo-geass {
          width: 100%;
          height: 100%;
        }

        .cg-play-area {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cg-play-placeholder {
          padding: 1.5rem 3rem;
          border: 2px dashed rgba(212, 175, 55, 0.3);
          border-radius: 0.5rem;
        }

        .cg-play-placeholder span {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: rgba(212, 175, 55, 0.5);
        }

        .cg-played-cards {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cg-funny-action {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(220, 38, 38, 0.9);
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          animation: funnyPop 0.5s ease;
          z-index: 10;
        }

        @keyframes funnyPop {
          0% { transform: translateX(-50%) scale(0); }
          50% { transform: translateX(-50%) scale(1.1); }
          100% { transform: translateX(-50%) scale(1); }
        }

        .cg-funny-action-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-funny-emoji {
          font-size: 1.5rem;
        }

        .cg-funny-text {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: white;
          font-weight: 600;
        }

        .cg-last-action {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #d4af37;
          background: rgba(10, 10, 15, 0.8);
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          white-space: nowrap;
        }

        .cg-game-log {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 180px;
          max-height: 200px;
          overflow-y: auto;
          background: rgba(10, 10, 15, 0.8);
          border: 1px solid #3f3f46;
          border-radius: 0.5rem;
          padding: 0.75rem;
          z-index: 5;
        }

        .cg-log-entry {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.75rem;
          color: #a1a1aa;
          margin-bottom: 0.375rem;
          padding-bottom: 0.375rem;
          border-bottom: 1px solid rgba(63, 63, 70, 0.5);
        }

        .cg-log-entry:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
          color: #d4af37;
        }

        .cg-player-area {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 0.5rem;
        }

        .cg-card {
          position: relative;
          width: 50px;
          height: 75px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 0.375rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          border: none;
        }

        .cg-card-back {
          background: linear-gradient(135deg, #1a1a24 0%, #252532 100%);
          border: 1px solid #3f3f46;
        }

        .cg-card-pattern {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 25px;
          height: 37px;
        }

        .cg-card-front {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-card-front:hover:not(.disabled) {
          transform: translateY(-15px) scale(1.1) !important;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .cg-card-front.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cg-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0.375rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cg-card-rank {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #1a1a24;
        }

        .cg-card-rank-tl {
          position: absolute;
          top: 0.25rem;
          left: 0.25rem;
        }

        .cg-card-rank-br {
          position: absolute;
          bottom: 0.25rem;
          right: 0.25rem;
          transform: rotate(180deg);
        }

        .cg-card-suit-center {
          font-size: 1.25rem;
        }

        .cg-card-played {
          position: absolute;
        }

        .cg-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 0.25rem;
        }

        .cg-action-bar {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.75rem;
          background: linear-gradient(0deg, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
        }

        .cg-action-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-action-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cg-button-pass {
          background: linear-gradient(135deg, #3f3f46 0%, #52525b 100%);
          color: #f5f5f5;
        }

        .cg-button-pass:hover:not(:disabled) {
          background: linear-gradient(135deg, #52525b 0%, #71717a 100%);
        }

        .cg-button-challenge {
          background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%);
          color: #f5f5f5;
        }

        .cg-button-challenge:hover:not(:disabled) {
          background: linear-gradient(135deg, #b91c1c 0%, #ef4444 100%);
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
        }

        .cg-button-icon svg {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 768px) {
          .cg-game-log {
            display: none;
          }
          
          .cg-table-surface {
            max-width: 350px;
          }
          
          .cg-card {
            width: 40px;
            height: 60px;
          }
          
          .cg-table-logo {
            width: 80px;
            height: 80px;
          }
        }
      `})]})};function rs(e){return{spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦"}[e]||e}const qf=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:l})=>{const[i,s]=I.useState(!1),[f,p]=I.useState(!1);I.useEffect(()=>{e&&s(!0);const o=setTimeout(()=>p(!0),1e3);return()=>clearTimeout(o)},[e]);const g=e?"lelouch":"cc",_=e?"win":"lose";return u.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[u.jsxs("div",{className:"cg-result-bg",children:[u.jsx("div",{className:"cg-result-bg-gradient"}),e?u.jsx("div",{className:"cg-result-bg-win",children:u.jsx("div",{className:"cg-victory-rays"})}):u.jsx("div",{className:"cg-result-bg-lose",children:u.jsx("div",{className:"cg-defeat-shadow"})})]}),i&&u.jsx(ep,{}),u.jsxs("div",{className:`cg-result-content ${f?"cg-animate-in":""}`,children:[u.jsxs("div",{className:"cg-result-header",children:[u.jsx("div",{className:"cg-result-badge",children:e?u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((o,a)=>u.jsx("circle",{cx:50+35*Math.cos((a*72-90)*Math.PI/180),cy:50+35*Math.sin((a*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${a*.2}s`,repeatCount:"indefinite"})},a))]}):u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),u.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:u.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),u.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),u.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),u.jsx("div",{className:"cg-result-character",children:u.jsxs("div",{className:"cg-character-showcase",children:[u.jsx(sl,{characterId:g,size:200,animationState:_}),u.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),u.jsx("div",{className:"cg-result-score",children:u.jsxs("div",{className:"cg-score-panel",children:[u.jsxs("div",{className:"cg-score-item cg-score-player",children:[u.jsx("span",{className:"cg-score-label",children:"玩家"}),u.jsx("span",{className:"cg-score-value",children:t})]}),u.jsx("div",{className:"cg-score-divider",children:u.jsx("span",{children:"VS"})}),u.jsxs("div",{className:"cg-score-item cg-score-opponent",children:[u.jsx("span",{className:"cg-score-value",children:n}),u.jsx("span",{className:"cg-score-label",children:"对手"})]})]})}),u.jsxs("div",{className:"cg-result-actions",children:[u.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),u.jsx("span",{children:"再来一局"})]}),u.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:l,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),u.jsx("span",{children:"返回主菜单"})]})]})]}),u.jsx("style",{children:`
        .cg-result-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cg-result-win {
          --result-color: #d4af37;
          --result-glow: rgba(212, 175, 55, 0.5);
        }

        .cg-result-lose {
          --result-color: #dc2626;
          --result-glow: rgba(220, 38, 38, 0.5);
        }

        .cg-result-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cg-result-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            #0a0a0f 0%,
            #0f0f1a 50%,
            #1a1a24 100%
          );
        }

        .cg-result-bg-win .cg-victory-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(212, 175, 55, 0.05) 10deg,
            transparent 20deg,
            transparent 40deg,
            rgba(212, 175, 55, 0.05) 50deg,
            transparent 60deg,
            transparent 80deg,
            rgba(212, 175, 55, 0.05) 90deg,
            transparent 100deg,
            transparent 120deg,
            rgba(212, 175, 55, 0.05) 130deg,
            transparent 140deg,
            transparent 160deg,
            rgba(212, 175, 55, 0.05) 170deg,
            transparent 180deg,
            transparent 200deg,
            rgba(212, 175, 55, 0.05) 210deg,
            transparent 220deg,
            transparent 240deg,
            rgba(212, 175, 55, 0.05) 250deg,
            transparent 260deg,
            transparent 280deg,
            rgba(212, 175, 55, 0.05) 290deg,
            transparent 300deg,
            transparent 320deg,
            rgba(212, 175, 55, 0.05) 330deg,
            transparent 340deg,
            transparent 360deg
          );
          animation: rotateRays 20s linear infinite;
        }

        @keyframes rotateRays {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .cg-result-bg-lose .cg-defeat-shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(220, 38, 38, 0.1) 50%,
            rgba(10, 10, 15, 0.8) 100%
          );
        }

        .cg-result-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s ease;
        }

        .cg-result-content.cg-animate-in {
          opacity: 1;
          transform: scale(1);
        }

        .cg-result-header {
          text-align: center;
        }

        .cg-result-badge {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
        }

        .cg-badge-icon {
          width: 100%;
          height: 100%;
        }

        .cg-result-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          letter-spacing: 0.2em;
        }

        .cg-title-win {
          background: linear-gradient(135deg, #d4af37, #f4d03f, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
        }

        .cg-title-lose {
          color: #dc2626;
          text-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
        }

        .cg-result-subtitle {
          font-family: 'Noto Serif SC', serif;
          font-size: 1rem;
          color: #a1a1aa;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .cg-result-character {
          position: relative;
        }

        .cg-character-showcase {
          position: relative;
          padding: 1rem;
        }

        .cg-character-aura {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 250px;
          border-radius: 50%;
          pointer-events: none;
        }

        .cg-aura-win {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          animation: pulseAura 2s ease-in-out infinite;
        }

        .cg-aura-lose {
          background: radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%);
        }

        @keyframes pulseAura {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }

        .cg-result-score {
          width: 100%;
          max-width: 400px;
        }

        .cg-score-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(26, 26, 36, 0.9) 0%, rgba(37, 37, 50, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid var(--result-color);
          border-radius: 1rem;
          box-shadow: 0 0 30px var(--result-glow);
        }

        .cg-score-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-score-item .cg-score-label {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #71717a;
        }

        .cg-score-item .cg-score-value {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--result-color);
        }

        .cg-score-divider {
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          color: #3f3f46;
        }

        .cg-result-actions {
          display: flex;
          gap: 1rem;
        }

        .cg-result-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cg-button-restart {
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          color: #0a0a0f;
        }

        .cg-button-restart:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: scale(1.02);
        }

        .cg-button-menu {
          background: linear-gradient(135deg, #3f3f46 0%, #52525b 100%);
          color: #f5f5f5;
        }

        .cg-button-menu:hover {
          background: linear-gradient(135deg, #52525b 0%, #71717a 100%);
        }

        .cg-button-icon svg {
          width: 20px;
          height: 20px;
        }

        /* 彩花效果 */
        .cg-confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall 3s ease-out forwards;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `})]})},ep=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return u.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>u.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})},tp=()=>{const e=["spades","hearts","clubs","diamonds"],t=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],n=[];for(const r of e)for(let l=0;l<t.length;l++)n.push({id:`${r}-${t[l]}`,suit:r,rank:t[l],value:l+1,isRevealed:!1});return n},np=e=>{const t=[...e];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},rp=(e,t=5)=>{const n=np(e),r=n.slice(0,t),l=n.slice(t,t*2),i=n.slice(t*2);return{playerHand:r,opponentHand:l,remaining:i}};var Dr={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var o=this||n;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var a=this||n;if(o=parseFloat(o),a.ctx||_(),typeof o<"u"&&o>=0&&o<=1){if(a._volume=o,a._muted)return a;a.usingWebAudio&&a.masterGain.gain.setValueAtTime(o,n.ctx.currentTime);for(var c=0;c<a._howls.length;c++)if(!a._howls[c]._webAudio)for(var h=a._howls[c]._getSoundIds(),y=0;y<h.length;y++){var x=a._howls[c]._soundById(h[y]);x&&x._node&&(x._node.volume=x._volume*o)}return a}return a._volume},mute:function(o){var a=this||n;a.ctx||_(),a._muted=o,a.usingWebAudio&&a.masterGain.gain.setValueAtTime(o?0:a._volume,n.ctx.currentTime);for(var c=0;c<a._howls.length;c++)if(!a._howls[c]._webAudio)for(var h=a._howls[c]._getSoundIds(),y=0;y<h.length;y++){var x=a._howls[c]._soundById(h[y]);x&&x._node&&(x._node.muted=o?!0:x._muted)}return a},stop:function(){for(var o=this||n,a=0;a<o._howls.length;a++)o._howls[a].stop();return o},unload:function(){for(var o=this||n,a=o._howls.length-1;a>=0;a--)o._howls[a].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,_()),o},codecs:function(o){return(this||n)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||n;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var a=new Audio;typeof a.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var a=new Audio;a.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||n,a=null;try{a=typeof Audio<"u"?new Audio:null}catch{return o}if(!a||typeof a.canPlayType!="function")return o;var c=a.canPlayType("audio/mpeg;").replace(/^no$/,""),h=o._navigator?o._navigator.userAgent:"",y=h.match(/OPR\/(\d+)/g),x=y&&parseInt(y[0].split("/")[1],10)<33,d=h.indexOf("Safari")!==-1&&h.indexOf("Chrome")===-1,m=h.match(/Version\/(.*?) /),v=d&&m&&parseInt(m[1],10)<15;return o._codecs={mp3:!!(!x&&(c||a.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(a.canPlayType('audio/wav; codecs="1"')||a.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!a.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!a.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(a.canPlayType("audio/x-m4b;")||a.canPlayType("audio/m4b;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(a.canPlayType("audio/x-mp4;")||a.canPlayType("audio/mp4;")||a.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!a.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(a.canPlayType("audio/x-flac;")||a.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||n;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var a=function(c){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var h=new Audio;h._unlocked=!0,o._releaseHtml5Audio(h)}catch{o.noAudio=!0;break}for(var y=0;y<o._howls.length;y++)if(!o._howls[y]._webAudio)for(var x=o._howls[y]._getSoundIds(),d=0;d<x.length;d++){var m=o._howls[y]._soundById(x[d]);m&&m._node&&!m._node._unlocked&&(m._node._unlocked=!0,m._node.load())}o._autoResume();var v=o.ctx.createBufferSource();v.buffer=o._scratchBuffer,v.connect(o.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),v.onended=function(){v.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",a,!0),document.removeEventListener("touchend",a,!0),document.removeEventListener("click",a,!0),document.removeEventListener("keydown",a,!0);for(var w=0;w<o._howls.length;w++)o._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",a,!0),document.addEventListener("click",a,!0),document.addEventListener("keydown",a,!0),o}},_obtainHtml5Audio:function(){var o=this||n;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var a=new Audio().play();return a&&typeof Promise<"u"&&(a instanceof Promise||typeof a.then=="function")&&a.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var a=this||n;return o._unlocked&&a._html5AudioPool.push(o),a},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!n.usingWebAudio)){for(var a=0;a<o._howls.length;a++)if(o._howls[a]._webAudio){for(var c=0;c<o._howls[a]._sounds.length;c++)if(!o._howls[a]._sounds[c]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var h=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(h,h)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!n.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var a=0;a<o._howls.length;a++)o._howls[a]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var n=new t,r=function(o){var a=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}a.init(o)};r.prototype={init:function(o){var a=this;return n.ctx||_(),a._autoplay=o.autoplay||!1,a._format=typeof o.format!="string"?o.format:[o.format],a._html5=o.html5||!1,a._muted=o.mute||!1,a._loop=o.loop||!1,a._pool=o.pool||5,a._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,a._rate=o.rate||1,a._sprite=o.sprite||{},a._src=typeof o.src!="string"?o.src:[o.src],a._volume=o.volume!==void 0?o.volume:1,a._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},a._duration=0,a._state="unloaded",a._sounds=[],a._endTimers={},a._queue=[],a._playLock=!1,a._onend=o.onend?[{fn:o.onend}]:[],a._onfade=o.onfade?[{fn:o.onfade}]:[],a._onload=o.onload?[{fn:o.onload}]:[],a._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],a._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],a._onpause=o.onpause?[{fn:o.onpause}]:[],a._onplay=o.onplay?[{fn:o.onplay}]:[],a._onstop=o.onstop?[{fn:o.onstop}]:[],a._onmute=o.onmute?[{fn:o.onmute}]:[],a._onvolume=o.onvolume?[{fn:o.onvolume}]:[],a._onrate=o.onrate?[{fn:o.onrate}]:[],a._onseek=o.onseek?[{fn:o.onseek}]:[],a._onunlock=o.onunlock?[{fn:o.onunlock}]:[],a._onresume=[],a._webAudio=n.usingWebAudio&&!a._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(a),a._autoplay&&a._queue.push({event:"play",action:function(){a.play()}}),a._preload&&a._preload!=="none"&&a.load(),a},load:function(){var o=this,a=null;if(n.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var c=0;c<o._src.length;c++){var h,y;if(o._format&&o._format[c])h=o._format[c];else{if(y=o._src[c],typeof y!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}h=/^data:audio\/([^;,]+);/i.exec(y),h||(h=/\.([^.]+)$/.exec(y.split("?",1)[0])),h&&(h=h[1].toLowerCase())}if(h||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),h&&n.codecs(h)){a=o._src[c];break}}if(!a){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=a,o._state="loading",window.location.protocol==="https:"&&a.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new l(o),o._webAudio&&s(o),o},play:function(o,a){var c=this,h=null;if(typeof o=="number")h=o,o=null;else{if(typeof o=="string"&&c._state==="loaded"&&!c._sprite[o])return null;if(typeof o>"u"&&(o="__default",!c._playLock)){for(var y=0,x=0;x<c._sounds.length;x++)c._sounds[x]._paused&&!c._sounds[x]._ended&&(y++,h=c._sounds[x]._id);y===1?o=null:h=null}}var d=h?c._soundById(h):c._inactiveSound();if(!d)return null;if(h&&!o&&(o=d._sprite||"__default"),c._state!=="loaded"){d._sprite=o,d._ended=!1;var m=d._id;return c._queue.push({event:"play",action:function(){c.play(m)}}),m}if(h&&!d._paused)return a||c._loadQueue("play"),d._id;c._webAudio&&n._autoResume();var v=Math.max(0,d._seek>0?d._seek:c._sprite[o][0]/1e3),w=Math.max(0,(c._sprite[o][0]+c._sprite[o][1])/1e3-v),S=w*1e3/Math.abs(d._rate),j=c._sprite[o][0]/1e3,N=(c._sprite[o][0]+c._sprite[o][1])/1e3;d._sprite=o,d._ended=!1;var E=function(){d._paused=!1,d._seek=v,d._start=j,d._stop=N,d._loop=!!(d._loop||c._sprite[o][2])};if(v>=N){c._ended(d);return}var A=d._node;if(c._webAudio){var P=function(){c._playLock=!1,E(),c._refreshBuffer(d);var W=d._muted||c._muted?0:d._volume;A.gain.setValueAtTime(W,n.ctx.currentTime),d._playStart=n.ctx.currentTime,typeof A.bufferSource.start>"u"?d._loop?A.bufferSource.noteGrainOn(0,v,86400):A.bufferSource.noteGrainOn(0,v,w):d._loop?A.bufferSource.start(0,v,86400):A.bufferSource.start(0,v,w),S!==1/0&&(c._endTimers[d._id]=setTimeout(c._ended.bind(c,d),S)),a||setTimeout(function(){c._emit("play",d._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?P():(c._playLock=!0,c.once("resume",P),c._clearTimer(d._id))}else{var oe=function(){A.currentTime=v,A.muted=d._muted||c._muted||n._muted||A.muted,A.volume=d._volume*n.volume(),A.playbackRate=d._rate;try{var W=A.play();if(W&&typeof Promise<"u"&&(W instanceof Promise||typeof W.then=="function")?(c._playLock=!0,E(),W.then(function(){c._playLock=!1,A._unlocked=!0,a?c._loadQueue():c._emit("play",d._id)}).catch(function(){c._playLock=!1,c._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0})):a||(c._playLock=!1,E(),c._emit("play",d._id)),A.playbackRate=d._rate,A.paused){c._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||d._loop?c._endTimers[d._id]=setTimeout(c._ended.bind(c,d),S):(c._endTimers[d._id]=function(){c._ended(d),A.removeEventListener("ended",c._endTimers[d._id],!1)},A.addEventListener("ended",c._endTimers[d._id],!1))}catch(Te){c._emit("playerror",d._id,Te)}};A.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(A.src=c._src,A.load());var B=window&&window.ejecta||!A.readyState&&n._navigator.isCocoonJS;if(A.readyState>=3||B)oe();else{c._playLock=!0,c._state="loading";var D=function(){c._state="loaded",oe(),A.removeEventListener(n._canPlayEvent,D,!1)};A.addEventListener(n._canPlayEvent,D,!1),c._clearTimer(d._id)}}return d._id},pause:function(o){var a=this;if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"pause",action:function(){a.pause(o)}}),a;for(var c=a._getSoundIds(o),h=0;h<c.length;h++){a._clearTimer(c[h]);var y=a._soundById(c[h]);if(y&&!y._paused&&(y._seek=a.seek(c[h]),y._rateSeek=0,y._paused=!0,a._stopFade(c[h]),y._node))if(a._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),a._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||a._emit("pause",y?y._id:null)}return a},stop:function(o,a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(o)}}),c;for(var h=c._getSoundIds(o),y=0;y<h.length;y++){c._clearTimer(h[y]);var x=c._soundById(h[y]);x&&(x._seek=x._start||0,x._rateSeek=0,x._paused=!0,x._ended=!0,c._stopFade(h[y]),x._node&&(c._webAudio?x._node.bufferSource&&(typeof x._node.bufferSource.stop>"u"?x._node.bufferSource.noteOff(0):x._node.bufferSource.stop(0),c._cleanBuffer(x._node)):(!isNaN(x._node.duration)||x._node.duration===1/0)&&(x._node.currentTime=x._start||0,x._node.pause(),x._node.duration===1/0&&c._clearSound(x._node))),a||c._emit("stop",x._id))}return c},mute:function(o,a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(o,a)}}),c;if(typeof a>"u")if(typeof o=="boolean")c._muted=o;else return c._muted;for(var h=c._getSoundIds(a),y=0;y<h.length;y++){var x=c._soundById(h[y]);x&&(x._muted=o,x._interval&&c._stopFade(x._id),c._webAudio&&x._node?x._node.gain.setValueAtTime(o?0:x._volume,n.ctx.currentTime):x._node&&(x._node.muted=n._muted?!0:o),c._emit("mute",x._id))}return c},volume:function(){var o=this,a=arguments,c,h;if(a.length===0)return o._volume;if(a.length===1||a.length===2&&typeof a[1]>"u"){var y=o._getSoundIds(),x=y.indexOf(a[0]);x>=0?h=parseInt(a[0],10):c=parseFloat(a[0])}else a.length>=2&&(c=parseFloat(a[0]),h=parseInt(a[1],10));var d;if(typeof c<"u"&&c>=0&&c<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,a)}}),o;typeof h>"u"&&(o._volume=c),h=o._getSoundIds(h);for(var m=0;m<h.length;m++)d=o._soundById(h[m]),d&&(d._volume=c,a[2]||o._stopFade(h[m]),o._webAudio&&d._node&&!d._muted?d._node.gain.setValueAtTime(c,n.ctx.currentTime):d._node&&!d._muted&&(d._node.volume=c*n.volume()),o._emit("volume",d._id))}else return d=h?o._soundById(h):o._sounds[0],d?d._volume:0;return o},fade:function(o,a,c,h){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(o,a,c,h)}}),y;o=Math.min(Math.max(0,parseFloat(o)),1),a=Math.min(Math.max(0,parseFloat(a)),1),c=parseFloat(c),y.volume(o,h);for(var x=y._getSoundIds(h),d=0;d<x.length;d++){var m=y._soundById(x[d]);if(m){if(h||y._stopFade(x[d]),y._webAudio&&!m._muted){var v=n.ctx.currentTime,w=v+c/1e3;m._volume=o,m._node.gain.setValueAtTime(o,v),m._node.gain.linearRampToValueAtTime(a,w)}y._startFadeInterval(m,o,a,c,x[d],typeof h>"u")}}return y},_startFadeInterval:function(o,a,c,h,y,x){var d=this,m=a,v=c-a,w=Math.abs(v/.01),S=Math.max(4,w>0?h/w:h),j=Date.now();o._fadeTo=c,o._interval=setInterval(function(){var N=(Date.now()-j)/h;j=Date.now(),m+=v*N,m=Math.round(m*100)/100,v<0?m=Math.max(c,m):m=Math.min(c,m),d._webAudio?o._volume=m:d.volume(m,o._id,!0),x&&(d._volume=m),(c<a&&m<=c||c>a&&m>=c)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,d.volume(c,o._id),d._emit("fade",o._id))},S)},_stopFade:function(o){var a=this,c=a._soundById(o);return c&&c._interval&&(a._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,a.volume(c._fadeTo,o),c._fadeTo=null,a._emit("fade",o)),a},loop:function(){var o=this,a=arguments,c,h,y;if(a.length===0)return o._loop;if(a.length===1)if(typeof a[0]=="boolean")c=a[0],o._loop=c;else return y=o._soundById(parseInt(a[0],10)),y?y._loop:!1;else a.length===2&&(c=a[0],h=parseInt(a[1],10));for(var x=o._getSoundIds(h),d=0;d<x.length;d++)y=o._soundById(x[d]),y&&(y._loop=c,o._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,o.playing(x[d])&&(o.pause(x[d],!0),o.play(x[d],!0)))));return o},rate:function(){var o=this,a=arguments,c,h;if(a.length===0)h=o._sounds[0]._id;else if(a.length===1){var y=o._getSoundIds(),x=y.indexOf(a[0]);x>=0?h=parseInt(a[0],10):c=parseFloat(a[0])}else a.length===2&&(c=parseFloat(a[0]),h=parseInt(a[1],10));var d;if(typeof c=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,a)}}),o;typeof h>"u"&&(o._rate=c),h=o._getSoundIds(h);for(var m=0;m<h.length;m++)if(d=o._soundById(h[m]),d){o.playing(h[m])&&(d._rateSeek=o.seek(h[m]),d._playStart=o._webAudio?n.ctx.currentTime:d._playStart),d._rate=c,o._webAudio&&d._node&&d._node.bufferSource?d._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):d._node&&(d._node.playbackRate=c);var v=o.seek(h[m]),w=(o._sprite[d._sprite][0]+o._sprite[d._sprite][1])/1e3-v,S=w*1e3/Math.abs(d._rate);(o._endTimers[h[m]]||!d._paused)&&(o._clearTimer(h[m]),o._endTimers[h[m]]=setTimeout(o._ended.bind(o,d),S)),o._emit("rate",d._id)}}else return d=o._soundById(h),d?d._rate:o._rate;return o},seek:function(){var o=this,a=arguments,c,h;if(a.length===0)o._sounds.length&&(h=o._sounds[0]._id);else if(a.length===1){var y=o._getSoundIds(),x=y.indexOf(a[0]);x>=0?h=parseInt(a[0],10):o._sounds.length&&(h=o._sounds[0]._id,c=parseFloat(a[0]))}else a.length===2&&(c=parseFloat(a[0]),h=parseInt(a[1],10));if(typeof h>"u")return 0;if(typeof c=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,a)}}),o;var d=o._soundById(h);if(d)if(typeof c=="number"&&c>=0){var m=o.playing(h);m&&o.pause(h,!0),d._seek=c,d._ended=!1,o._clearTimer(h),!o._webAudio&&d._node&&!isNaN(d._node.duration)&&(d._node.currentTime=c);var v=function(){m&&o.play(h,!0),o._emit("seek",h)};if(m&&!o._webAudio){var w=function(){o._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(o._webAudio){var S=o.playing(h)?n.ctx.currentTime-d._playStart:0,j=d._rateSeek?d._rateSeek-d._seek:0;return d._seek+(j+S*Math.abs(d._rate))}else return d._node.currentTime;return o},playing:function(o){var a=this;if(typeof o=="number"){var c=a._soundById(o);return c?!c._paused:!1}for(var h=0;h<a._sounds.length;h++)if(!a._sounds[h]._paused)return!0;return!1},duration:function(o){var a=this,c=a._duration,h=a._soundById(o);return h&&(c=a._sprite[h._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var o=this,a=o._sounds,c=0;c<a.length;c++)a[c]._paused||o.stop(a[c]._id),o._webAudio||(o._clearSound(a[c]._node),a[c]._node.removeEventListener("error",a[c]._errorFn,!1),a[c]._node.removeEventListener(n._canPlayEvent,a[c]._loadFn,!1),a[c]._node.removeEventListener("ended",a[c]._endFn,!1),n._releaseHtml5Audio(a[c]._node)),delete a[c]._node,o._clearTimer(a[c]._id);var h=n._howls.indexOf(o);h>=0&&n._howls.splice(h,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===o._src||o._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return i&&y&&delete i[o._src],n.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,a,c,h){var y=this,x=y["_on"+o];return typeof a=="function"&&x.push(h?{id:c,fn:a,once:h}:{id:c,fn:a}),y},off:function(o,a,c){var h=this,y=h["_on"+o],x=0;if(typeof a=="number"&&(c=a,a=null),a||c)for(x=0;x<y.length;x++){var d=c===y[x].id;if(a===y[x].fn&&d||!a&&d){y.splice(x,1);break}}else if(o)h["_on"+o]=[];else{var m=Object.keys(h);for(x=0;x<m.length;x++)m[x].indexOf("_on")===0&&Array.isArray(h[m[x]])&&(h[m[x]]=[])}return h},once:function(o,a,c){var h=this;return h.on(o,a,c,1),h},_emit:function(o,a,c){for(var h=this,y=h["_on"+o],x=y.length-1;x>=0;x--)(!y[x].id||y[x].id===a||o==="load")&&(setTimeout((function(d){d.call(this,a,c)}).bind(h,y[x].fn),0),y[x].once&&h.off(o,y[x].fn,y[x].id));return h._loadQueue(o),h},_loadQueue:function(o){var a=this;if(a._queue.length>0){var c=a._queue[0];c.event===o&&(a._queue.shift(),a._loadQueue()),o||c.action()}return a},_ended:function(o){var a=this,c=o._sprite;if(!a._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(a._ended.bind(a,o),100),a;var h=!!(o._loop||a._sprite[c][2]);if(a._emit("end",o._id),!a._webAudio&&h&&a.stop(o._id,!0).play(o._id),a._webAudio&&h){a._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=n.ctx.currentTime;var y=(o._stop-o._start)*1e3/Math.abs(o._rate);a._endTimers[o._id]=setTimeout(a._ended.bind(a,o),y)}return a._webAudio&&!h&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,a._clearTimer(o._id),a._cleanBuffer(o._node),n._autoSuspend()),!a._webAudio&&!h&&a.stop(o._id,!0),a},_clearTimer:function(o){var a=this;if(a._endTimers[o]){if(typeof a._endTimers[o]!="function")clearTimeout(a._endTimers[o]);else{var c=a._soundById(o);c&&c._node&&c._node.removeEventListener("ended",a._endTimers[o],!1)}delete a._endTimers[o]}return a},_soundById:function(o){for(var a=this,c=0;c<a._sounds.length;c++)if(o===a._sounds[c]._id)return a._sounds[c];return null},_inactiveSound:function(){var o=this;o._drain();for(var a=0;a<o._sounds.length;a++)if(o._sounds[a]._ended)return o._sounds[a].reset();return new l(o)},_drain:function(){var o=this,a=o._pool,c=0,h=0;if(!(o._sounds.length<a)){for(h=0;h<o._sounds.length;h++)o._sounds[h]._ended&&c++;for(h=o._sounds.length-1;h>=0;h--){if(c<=a)return;o._sounds[h]._ended&&(o._webAudio&&o._sounds[h]._node&&o._sounds[h]._node.disconnect(0),o._sounds.splice(h,1),c--)}}},_getSoundIds:function(o){var a=this;if(typeof o>"u"){for(var c=[],h=0;h<a._sounds.length;h++)c.push(a._sounds[h]._id);return c}else return[o]},_refreshBuffer:function(o){var a=this;return o._node.bufferSource=n.ctx.createBufferSource(),o._node.bufferSource.buffer=i[a._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,n.ctx.currentTime),a},_cleanBuffer:function(o){var a=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return a;if(n._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),c))try{o.bufferSource.buffer=n._scratchBuffer}catch{}return o.bufferSource=null,a},_clearSound:function(o){var a=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);a||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(o){this._parent=o,this.init()};l.prototype={init:function(){var o=this,a=o._parent;return o._muted=a._muted,o._loop=a._loop,o._volume=a._volume,o._rate=a._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++n._counter,a._sounds.push(o),o.create(),o},create:function(){var o=this,a=o._parent,c=n._muted||o._muted||o._parent._muted?0:o._volume;return a._webAudio?(o._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),o._node.gain.setValueAtTime(c,n.ctx.currentTime),o._node.paused=!0,o._node.connect(n.masterGain)):n.noAudio||(o._node=n._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(n._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=a._src,o._node.preload=a._preload===!0?"auto":a._preload,o._node.volume=c*n.volume(),o._node.load()),o},reset:function(){var o=this,a=o._parent;return o._muted=a._muted,o._loop=a._loop,o._volume=a._volume,o._rate=a._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++n._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,a=o._parent;a._duration=Math.ceil(o._node.duration*10)/10,Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue()),o._node.removeEventListener(n._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,a=o._parent;a._duration===1/0&&(a._duration=Math.ceil(o._node.duration*10)/10,a._sprite.__default[1]===1/0&&(a._sprite.__default[1]=a._duration*1e3),a._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var i={},s=function(o){var a=o._src;if(i[a]){o._duration=i[a].duration,g(o);return}if(/^data:[^;]+;base64,/.test(a)){for(var c=atob(a.split(",")[1]),h=new Uint8Array(c.length),y=0;y<c.length;++y)h[y]=c.charCodeAt(y);p(h.buffer,o)}else{var x=new XMLHttpRequest;x.open(o._xhr.method,a,!0),x.withCredentials=o._xhr.withCredentials,x.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(d){x.setRequestHeader(d,o._xhr.headers[d])}),x.onload=function(){var d=(x.status+"")[0];if(d!=="0"&&d!=="2"&&d!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+x.status+".");return}p(x.response,o)},x.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete i[a],o.load())},f(x)}},f=function(o){try{o.send()}catch{o.onerror()}},p=function(o,a){var c=function(){a._emit("loaderror",null,"Decoding audio data failed.")},h=function(y){y&&a._sounds.length>0?(i[a._src]=y,g(a,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(o).then(h).catch(c):n.ctx.decodeAudioData(o,h,c)},g=function(o,a){a&&!o._duration&&(o._duration=a.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},_=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),a=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=a?parseInt(a[1],10):null;if(o&&c&&c<9){var h=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!h&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof hn<"u"?(hn.HowlerGlobal=t,hn.Howler=n,hn.Howl=r,hn.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(r=typeof r!="number"?i._pos[1]:r,l=typeof l!="number"?i._pos[2]:l,typeof n=="number")i._pos=[n,r,l],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,r,l,i,s,f){var p=this;if(!p.ctx||!p.ctx.listener)return p;var g=p._orientation;if(r=typeof r!="number"?g[1]:r,l=typeof l!="number"?g[2]:l,i=typeof i!="number"?g[3]:i,s=typeof s!="number"?g[4]:s,f=typeof f!="number"?g[5]:f,typeof n=="number")p._orientation=[n,r,l,i,s,f],typeof p.ctx.listener.forwardX<"u"?(p.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),p.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),p.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),p.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),p.ctx.listener.upY.setTargetAtTime(s,Howler.ctx.currentTime,.1),p.ctx.listener.upZ.setTargetAtTime(f,Howler.ctx.currentTime,.1)):p.ctx.listener.setOrientation(n,r,l,i,s,f);else return g;return p},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var s=l._getSoundIds(r),f=0;f<s.length;f++){var p=l._soundById(s[f]);if(p)if(typeof n=="number")p._stereo=n,p._pos=[n,0,0],p._node&&(p._pannerAttr.panningModel="equalpower",(!p._panner||!p._panner.pan)&&t(p,i),i==="spatial"?typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):p._panner.setPosition(n,0,0):p._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",p._id);else return p._stereo}return l},Howl.prototype.pos=function(n,r,l,i){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"pos",action:function(){s.pos(n,r,l,i)}}),s;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof i>"u")if(typeof n=="number")s._pos=[n,r,l];else return s._pos;for(var f=s._getSoundIds(i),p=0;p<f.length;p++){var g=s._soundById(f[p]);if(g)if(typeof n=="number")g._pos=[n,r,l],g._node&&((!g._panner||g._panner.pan)&&t(g,"spatial"),typeof g._panner.positionX<"u"?(g._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setPosition(n,r,l)),s._emit("pos",g._id);else return g._pos}return s},Howl.prototype.orientation=function(n,r,l,i){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"orientation",action:function(){s.orientation(n,r,l,i)}}),s;if(r=typeof r!="number"?s._orientation[1]:r,l=typeof l!="number"?s._orientation[2]:l,typeof i>"u")if(typeof n=="number")s._orientation=[n,r,l];else return s._orientation;for(var f=s._getSoundIds(i),p=0;p<f.length;p++){var g=s._soundById(f[p]);if(g)if(typeof n=="number")g._orientation=[n,r,l],g._node&&(g._panner||(g._pos||(g._pos=s._pos||[0,0,-.5]),t(g,"spatial")),typeof g._panner.orientationX<"u"?(g._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setOrientation(n,r,l)),s._emit("orientation",g._id);else return g._orientation}return s},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,i,s;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof i>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return s=n._soundById(parseInt(r[0],10)),s?s._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],i=parseInt(r[1],10));for(var f=n._getSoundIds(i),p=0;p<f.length;p++)if(s=n._soundById(f[p]),s){var g=s._pannerAttr;g={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:g.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:g.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:g.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:g.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:g.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:g.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:g.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:g.panningModel};var _=s._panner;_||(s._pos||(s._pos=n._pos||[0,0,-.5]),t(s,"spatial"),_=s._panner),_.coneInnerAngle=g.coneInnerAngle,_.coneOuterAngle=g.coneOuterAngle,_.coneOuterGain=g.coneOuterGain,_.distanceModel=g.distanceModel,_.maxDistance=g.maxDistance,_.refDistance=g.refDistance,_.rolloffFactor=g.rolloffFactor,_.panningModel=g.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Dr);const ni={"bgm-menu":{volume:.5,loop:!0},"bgm-game":{volume:.4,loop:!0},"bgm-victory":{volume:.6,loop:!1},"bgm-defeat":{volume:.5,loop:!1},"sfx-play-card":{volume:.7,loop:!1},"sfx-challenge":{volume:.8,loop:!1},"sfx-geass-activate":{volume:.9,loop:!1},"sfx-geass-hit":{volume:1,loop:!1},"sfx-geass-miss":{volume:.6,loop:!1},"sfx-button-click":{volume:.5,loop:!1},"sfx-card-shuffle":{volume:.6,loop:!1},"sfx-win":{volume:.8,loop:!1},"sfx-lose":{volume:.7,loop:!1},"sfx-character-select":{volume:.6,loop:!1},"sfx-turn-start":{volume:.5,loop:!1},"sfx-funny-dance":{volume:.8,loop:!1},"sfx-funny-monkey":{volume:.8,loop:!1},"sfx-funny-pizza":{volume:.7,loop:!1},"sfx-funny-laugh":{volume:.9,loop:!1},"sfx-funny-chicken":{volume:.8,loop:!1},"sfx-funny-chunibyo":{volume:.8,loop:!1},"sfx-funny-butterfly":{volume:.6,loop:!1}},lp={"bgm-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","bgm-game":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","bgm-victory":"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3","bgm-defeat":"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","sfx-play-card":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","sfx-challenge":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","sfx-geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","sfx-geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","sfx-geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","sfx-button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","sfx-card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","sfx-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","sfx-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","sfx-character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","sfx-turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","sfx-funny-dance":"https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3","sfx-funny-monkey":"https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3","sfx-funny-pizza":"https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3","sfx-funny-laugh":"https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3","sfx-funny-chicken":"https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3","sfx-funny-chunibyo":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3","sfx-funny-butterfly":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3"};class ip{constructor(){V(this,"sounds",new Map);V(this,"currentBGM",null);V(this,"enabled",!0);V(this,"masterVolume",1);V(this,"bgmVolume",.5);V(this,"sfxVolume",.7);this.init()}init(){Object.entries(lp).forEach(([t,n])=>{const r=t,l=ni[r];try{const i=new Dr.Howl({src:[n],volume:l.volume*this.getVolumeMultiplier(r),loop:l.loop,html5:!0,preload:r.startsWith("bgm-"),onloaderror:(s,f)=>{console.warn(`Failed to load sound: ${r}`,f)}});this.sounds.set(r,i)}catch(i){console.warn(`Error creating sound: ${r}`,i)}})}getVolumeMultiplier(t){return t.startsWith("bgm-")?this.bgmVolume:this.sfxVolume}play(t){if(!this.enabled)return;const n=this.sounds.get(t);n&&(t.startsWith("bgm-")&&(this.stopBGM(),this.currentBGM=t),n.play())}stop(t){const n=this.sounds.get(t);n&&n.stop()}stopBGM(){this.currentBGM&&(this.stop(this.currentBGM),this.currentBGM=null)}pauseBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.play()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),Dr.Howler.volume(this.masterVolume)}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")&&n.volume(ni[r].volume*this.bgmVolume)})}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")||n.volume(ni[r].volume*this.sfxVolume)})}setEnabled(t){this.enabled=t,t||this.stopAll()}stopAll(){Dr.Howler.stop(),this.currentBGM=null}playFunnyAction(t){const n=["sfx-funny-dance","sfx-funny-monkey","sfx-funny-pizza","sfx-funny-laugh","sfx-funny-chicken","sfx-funny-chunibyo","sfx-funny-butterfly"],r=n[t%n.length];r&&this.play(r)}preload(){return new Promise(t=>{let n=0;const r=this.sounds.size;if(r===0){t();return}this.sounds.forEach(l=>{l.state()==="loaded"?(n++,n>=r&&t()):(l.once("load",()=>{n++,n>=r&&t()}),l.once("loaderror",()=>{n++,n>=r&&t()}))}),setTimeout(()=>t(),5e3)})}getStatus(){return{enabled:this.enabled,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume,currentBGM:this.currentBGM}}}const Nl=new ip,ue=e=>Nl.play(e),jn=e=>Nl.play(e),op=()=>Nl.stopBGM();class ap{constructor(){V(this,"name","Easy");V(this,"description","随机出牌，随机质疑，适合新手");V(this,"memory",new Map)}makeDecision(t,n){if(Math.random()<.3)return{action:"challenge",confidence:Math.random(),reasoning:"随机质疑",animationState:"challenging"};const l=t.aiPlayer;if(l.hand.length>0){const i=l.hand[Math.floor(Math.random()*l.hand.length)],s=["citizen","king","slave"],f=s[Math.floor(Math.random()*s.length)];return{action:"play",card:i,claimedCard:f,confidence:.5,reasoning:"随机出牌",animationState:"playing",isBluff:i.type!==f}}return{action:"pass",confidence:.5,reasoning:"无牌可出",animationState:"playing"}}calculateChallengeProbability(){return .3}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[Math.floor(Math.random()*n.length)];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(t){return{bluffFrequency:.5,challengeThreshold:.7,riskTolerance:.5,patience:.5,adaptability:.3}}}class ls{constructor(){V(this,"name","Normal");V(this,"description","基础算牌，合理质疑，有策略性");V(this,"memory",{})}makeDecision(t,n){const r=t.aiPlayer.hand;if(r.length===0)return{action:"pass",confidence:0,reasoning:"无牌可出",animationState:"playing"};if(Math.random()<.3)return{action:"challenge",confidence:.6,reasoning:"根据局势质疑",animationState:"challenging"};const l=r[0];return{action:"play",card:l,claimedCard:l.type,confidence:.7,reasoning:"正常出牌",animationState:"playing",isBluff:!1}}calculateChallengeProbability(){return .4}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[0];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(){return{bluffFrequency:.4,challengeThreshold:.6,riskTolerance:.6,patience:.6,adaptability:.5}}}class sp{constructor(){V(this,"name","Hard");V(this,"description","高级策略，读心术，心理博弈大师");V(this,"memory",{})}makeDecision(t,n){const r=t.aiPlayer.hand;if(r.length===0)return{action:"pass",confidence:0,reasoning:"无牌可出",animationState:"playing"};if(Math.random()<.5)return{action:"challenge",confidence:.8,reasoning:"精准读心",animationState:"challenging"};const l=r[Math.floor(Math.random()*r.length)],i=["citizen","king","slave"],s=i[Math.floor(Math.random()*i.length)];return{action:"play",card:l,claimedCard:s,confidence:.9,reasoning:"策略性出牌",animationState:"playing",isBluff:l.type!==s}}calculateChallengeProbability(){return .5}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[Math.floor(Math.random()*n.length)];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(){return{bluffFrequency:.6,challengeThreshold:.5,riskTolerance:.7,patience:.7,adaptability:.8}}}class up{constructor(t="normal",n="balanced"){V(this,"strategy");V(this,"config");V(this,"thoughtCallback");V(this,"currentState","idle");V(this,"decisionInProgress",!1);this.config=this.createDefaultConfig(t,n),this.strategy=this.createStrategy(t)}setThoughtCallback(t){this.thoughtCallback=t}updateConfig(t){this.config={...this.config,...t},t.difficulty&&t.difficulty!==this.config.difficulty&&(this.strategy=this.createStrategy(t.difficulty))}getConfig(){return{...this.config}}async makeDecision(t){if(this.decisionInProgress)throw new Error("AI决策正在进行中");this.decisionInProgress=!0;try{await this.playThinkingAnimation(),await this.playDecidingAnimation();const n=this.strategy.makeDecision(t,this.config);return await this.playActionAnimation(n),n}finally{this.decisionInProgress=!1,this.setAnimationState("idle")}}makeDecisionInstant(t){return this.strategy.makeDecision(t,this.config)}getCurrentThought(){return{state:this.currentState,progress:this.getProgressForState(this.currentState),message:this.getMessageForState(this.currentState),emotion:this.getEmotionForState(this.currentState)}}getStrategyName(){return this.strategy.name}getStrategyDescription(){return this.strategy.description}updateMemory(t){this.strategy.updateMemory(t)}getPersonalityTraits(){return this.strategy.getPersonalityTraits(this.config.personality)}createStrategy(t){switch(t){case"easy":return new ap;case"normal":return new ls;case"hard":return new sp;default:return new ls}}createDefaultConfig(t,n){return{difficulty:t,personality:n,reactionDelay:{easy:800,normal:1200,hard:1500}[t],enableAnimation:!0}}async playThinkingAnimation(){this.setAnimationState("thinking");const t=["分析局势中...","计算概率...","观察对手...","评估风险..."],n=4,r=this.config.reactionDelay/n;for(let l=0;l<n;l++)this.notifyThought({state:"thinking",progress:l/n*100,message:t[l%t.length],emotion:"calm"}),await this.delay(r)}async playDecidingAnimation(){this.setAnimationState("deciding"),this.notifyThought({state:"deciding",progress:75,message:"做出决策...",emotion:"confident"}),await this.delay(this.config.reactionDelay*.3)}async playActionAnimation(t){const n=t.action==="challenge"?"challenging":"playing";this.setAnimationState(n);const r={play:t.isBluff?"打出卡牌（虚张声势）":"打出卡牌",challenge:"质疑！",pass:"选择观望"};this.notifyThought({state:n,progress:100,message:r[t.action]||"执行动作",emotion:t.confidence>.7?"confident":"uncertain"}),await this.delay(300)}setAnimationState(t){this.currentState=t}notifyThought(t){this.thoughtCallback&&this.thoughtCallback(t)}getProgressForState(t){return{idle:0,thinking:25,deciding:75,playing:90,challenging:90,reacting:100}[t]||0}getMessageForState(t){return{idle:"等待中...",thinking:"思考中...",deciding:"决策中...",playing:"出牌中...",challenging:"质疑中...",reacting:"反应中..."}[t]}getEmotionForState(t){switch(t){case"thinking":return"calm";case"deciding":return"confident";case"challenging":return"confident";case"playing":return"calm";default:return"calm"}}delay(t){return new Promise(n=>setTimeout(n,t))}}class cp{constructor(){V(this,"HIT_CHANCE",1/3);V(this,"MAX_HP",3);V(this,"funnyActions",["😵 突然跳起了奇怪的舞蹈","🙈 开始模仿猴子叫",'🤪 不停地说"披萨"',"😂 无法控制地大笑30秒","🐔 学鸡打鸣","🎭 开始背诵中二台词","🍕 声称自己是披萨的化身","🦋 追逐不存在的蝴蝶"])}createPlayerStats(){return{hp:this.MAX_HP,maxHp:this.MAX_HP,geassSuccessCount:0,geassFailCount:0}}shouldActivateGeass(t){return!0}executeGeass(t,n){if(Math.random()<this.HIT_CHANCE){const i=this.getRandomFunnyAction(),s=this.applyDamage(this.createPlayerStats(),1);return{activated:!0,hit:!0,message:"Geass命中！",damage:1,funnyAction:i,newStats:s}}else return{activated:!0,hit:!1,message:"Geass未命中！",damage:0}}performGeass(t){return this.executeGeass("player",t)}getRandomFunnyAction(){return this.funnyActions[Math.floor(Math.random()*this.funnyActions.length)]}applyDamage(t,n){return{...t,hp:Math.max(0,t.hp-n)}}isDefeated(t){return t.hp<=0}recordGeassSuccess(t){return{...t,geassSuccessCount:t.geassSuccessCount+1}}recordGeassFail(t){return{...t,geassFailCount:t.geassFailCount+1}}getHitChanceDescription(){return`${(this.HIT_CHANCE*100).toFixed(1)}%`}}const is=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],dp=()=>{const[e,t]=I.useState("main-menu"),[n,r]=I.useState(null),[l,i]=I.useState("normal"),s=I.useRef(null),f=I.useRef(null),[p,g]=I.useState({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),[_,o]=I.useState(null),[a,c]=I.useState([]);I.useEffect(()=>(Nl.preload().then(()=>{console.log("音效预加载完成")}),jn("bgm-menu"),()=>{op()}),[]);const h=I.useCallback(B=>{c(D=>[...D.slice(-9),B])},[]),y=I.useCallback(()=>{ue("sfx-button-click"),t("character-select")},[]),x=I.useCallback(()=>{ue("sfx-button-click"),t("settings")},[]),d=I.useCallback(()=>{ue("sfx-button-click"),t("help")},[]),m=I.useCallback(B=>{ue("sfx-character-select"),r(B)},[]),v=I.useCallback(()=>{if(n){ue("sfx-button-click"),s.current=new up(l,"balanced"),f.current=new cp;const B=tp(),{playerHand:D,opponentHand:W}=rp(B);g({selectedCharacter:n,playerHand:D,opponentHand:W,tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"游戏开始！",gamePhase:"playing"}),c(["游戏开始！请选择要出的牌。"]),t("game-table"),jn("bgm-game")}},[n,l]),w=I.useCallback(()=>{ue("sfx-button-click"),t("main-menu"),r(null)},[]),S=I.useCallback(B=>{p.currentTurn==="player"&&(ue("sfx-play-card"),g(D=>{const W=D.playerHand.find(Te=>Te.id===B);return W?{...D,playerHand:D.playerHand.filter(Te=>Te.id!==B),tableCards:[...D.tableCards,W],currentTurn:"opponent",lastAction:`你出了 ${W.rank}${fp(W.suit)}`}:D}),h("你出了一张牌"),setTimeout(()=>{j()},1e3))},[p.currentTurn]),j=I.useCallback(()=>{if(!s.current)return;if(ue("sfx-turn-start"),Math.random()>.7&&p.tableCards.length>0)E();else if(p.opponentHand.length>0){const D=p.opponentHand[Math.floor(Math.random()*p.opponentHand.length)];g(W=>({...W,opponentHand:W.opponentHand.filter(Te=>Te.id!==D.id),tableCards:[...W.tableCards,D],currentTurn:"player",lastAction:"对手出了一张牌"})),h("对手出了一张牌"),ue("sfx-play-card")}},[p.opponentHand,p.tableCards]),N=I.useCallback(()=>{ue("sfx-button-click"),h("你选择跳过"),g(B=>({...B,currentTurn:"opponent",lastAction:"你选择了跳过"})),setTimeout(()=>{j()},1e3)},[]),E=I.useCallback(()=>{if(ue("sfx-challenge"),h("你发起了质疑！"),f.current){const B=f.current.executeGeass("player","ai");setTimeout(()=>{if(B.hit){ue("sfx-geass-hit");const D=is[Math.floor(Math.random()*is.length)];o(D),ue(D.soundType),g(W=>{const Te=W.opponentHP-1;return Te<=0&&setTimeout(()=>{jn("bgm-victory"),t("result")},2e3),{...W,opponentHP:Te,playerScore:W.playerScore+1,lastAction:`Geass命中！${D.emoji} ${D.description}`}}),h(`Geass命中！${B.funnyAction||""}`)}else ue("sfx-geass-miss"),g(D=>({...D,lastAction:"Geass未命中！"})),h("Geass未命中！")},1e3)}},[]),A=I.useCallback(()=>{ue("sfx-button-click"),t("character-select"),r(null),g({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),c([]),o(null),jn("bgm-menu")},[]),P=I.useCallback(()=>{ue("sfx-button-click"),t("main-menu"),r(null),g({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),c([]),o(null),jn("bgm-menu")},[]),oe=()=>{switch(e){case"main-menu":return u.jsx(ts,{onStart:y,onSettings:x,onHelp:d});case"character-select":return u.jsx(Zf,{characters:Ki,selectedId:n,onSelect:m,onConfirm:v,onBack:w});case"game-table":return u.jsx(Jf,{gameState:p,onPlayCard:S,onPass:N,onChallenge:E,gameLog:a,funnyAction:_});case"result":return u.jsx(qf,{isWin:p.playerScore>p.opponentScore,playerScore:p.playerScore,opponentScore:p.opponentScore,onRestart:A,onMainMenu:P});case"settings":return u.jsxs("div",{className:"cg-placeholder-screen",children:[u.jsx("h2",{children:"设置"}),u.jsxs("div",{className:"cg-settings-content",children:[u.jsxs("div",{className:"cg-setting-item",children:[u.jsx("label",{children:"难度选择"}),u.jsxs("select",{value:l,onChange:B=>i(B.target.value),className:"cg-setting-select",children:[u.jsx("option",{value:"easy",children:"简单"}),u.jsx("option",{value:"normal",children:"普通"}),u.jsx("option",{value:"hard",children:"困难"})]})]}),u.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});case"help":return u.jsxs("div",{className:"cg-placeholder-screen",children:[u.jsx("h2",{children:"游戏帮助"}),u.jsxs("div",{className:"cg-help-content",children:[u.jsxs("section",{className:"cg-help-section",children:[u.jsx("h3",{children:"游戏规则"}),u.jsxs("ul",{children:[u.jsx("li",{children:"每人初始5张牌，轮流出牌"}),u.jsx("li",{children:"可以质疑对手的出牌"}),u.jsx("li",{children:"质疑成功将触发Geass判定"}),u.jsx("li",{children:"Geass有1/3概率命中，造成1点伤害"}),u.jsx("li",{children:"HP归零则游戏结束"})]})]}),u.jsxs("section",{className:"cg-help-section",children:[u.jsx("h3",{children:"角色技能"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"鲁鲁修"}),": 绝对命令 - 可强制改变骗子牌"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"C.C."}),": 不老不死 - 50%概率免疫Geass"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"朱雀"}),": 生存本能 - HP≤1时Geass抗性提升"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"卡莲"}),": 红莲突击 - 可一次出多张牌"]})]})]}),u.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});default:return u.jsx(ts,{onStart:y,onSettings:x,onHelp:d})}};return u.jsxs("div",{className:"cg-app",children:[oe(),u.jsx("style",{children:`
        .cg-app {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .cg-placeholder-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #0a0a0f 0%, #1a1a24 100%);
          color: #f5f5f5;
          gap: 1rem;
          padding: 2rem;
        }

        .cg-placeholder-screen h2 {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .cg-menu-button {
          padding: 0.75rem 1.5rem;
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 1rem;
          color: #0a0a0f;
          background: linear-gradient(135deg, #b8941f 0%, #d4af37 100%);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cg-menu-button:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: translateY(-2px);
        }

        .cg-settings-content, .cg-help-content {
          max-width: 600px;
          text-align: left;
        }

        .cg-setting-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .cg-setting-item label {
          color: #d4af37;
          font-family: 'Noto Sans SC', sans-serif;
          min-width: 100px;
        }

        .cg-setting-select {
          padding: 0.5rem 1rem;
          background: #1a1a24;
          border: 1px solid #3f3f46;
          border-radius: 0.375rem;
          color: #f5f5f5;
          font-family: 'Noto Sans SC', sans-serif;
          cursor: pointer;
        }

        .cg-help-section {
          margin-bottom: 2rem;
        }

        .cg-help-section h3 {
          color: #d4af37;
          font-family: 'Cinzel', serif;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .cg-help-section ul {
          list-style: none;
          padding: 0;
        }

        .cg-help-section li {
          color: #a1a1aa;
          font-family: 'Noto Sans SC', sans-serif;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .cg-help-section li::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: #dc2626;
          font-size: 0.5rem;
          top: 0.4rem;
        }

        .cg-help-section strong {
          color: #f5f5f5;
        }
      `})]})};function fp(e){return{spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦"}[e]||e}const pp=ri.createRoot(document.getElementById("root"));pp.render(u.jsx(Ft.StrictMode,{children:u.jsx(dp,{})}));
//# sourceMappingURL=index-BnGB5LAq.js.map
