var Vc=Object.defineProperty;var Uc=(e,t,n)=>t in e?Vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var fe=(e,t,n)=>Uc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ts={exports:{}},zl={},Ps={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),Wc=Symbol.for("react.portal"),Qc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),Xc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),Jc=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),ed=Symbol.for("react.memo"),td=Symbol.for("react.lazy"),ho=Symbol.iterator;function nd(e){return e===null||typeof e!="object"?null:(e=ho&&e[ho]||e["@@iterator"],typeof e=="function"?e:null)}var Is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Ms={};function In(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Is}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ls(){}Ls.prototype=In.prototype;function _a(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Is}var xa=_a.prototype=new Ls;xa.constructor=_a;zs(xa,In.prototype);xa.isPureReactComponent=!0;var go=Array.isArray,bs=Object.prototype.hasOwnProperty,wa={current:null},Os={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)bs.call(t,r)&&!Os.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var d=Array(c),g=0;g<c;g++)d[g]=arguments[g+2];l.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)l[r]===void 0&&(l[r]=c[r]);return{$$typeof:wr,type:e,key:i,ref:o,props:l,_owner:wa.current}}function rd(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function ld(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vo=/\/+/g;function Zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ld(""+e.key):t.toString(36)}function Qr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case wr:case Wc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Zl(o,0):r,go(l)?(n="",e!=null&&(n=e.replace(vo,"$&/")+"/"),Qr(l,t,n,"",function(g){return g})):l!=null&&(ka(l)&&(l=rd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(vo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",go(e))for(var c=0;c<e.length;c++){i=e[c];var d=r+Zl(i,c);o+=Qr(i,t,n,d,l)}else if(d=nd(e),typeof d=="function")for(e=d.call(e),c=0;!(i=e.next()).done;)i=i.value,d=r+Zl(i,c++),o+=Qr(i,t,n,d,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Tr(e,t,n){if(e==null)return e;var r=[],l=0;return Qr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Kr={transition:null},ad={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:wa};function Ds(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=In;R.Fragment=Qc;R.Profiler=Yc;R.PureComponent=_a;R.StrictMode=Kc;R.Suspense=qc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ad;R.act=Ds;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=wa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)bs.call(t,d)&&!Os.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var g=0;g<d;g++)c[g]=arguments[g+2];r.children=c}return{$$typeof:wr,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:Zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xc,_context:e},e.Consumer=e};R.createElement=Rs;R.createFactory=function(e){var t=Rs.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Jc,render:e}};R.isValidElement=ka;R.lazy=function(e){return{$$typeof:td,_payload:{_status:-1,_result:e},_init:id}};R.memo=function(e,t){return{$$typeof:ed,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};R.unstable_act=Ds;R.useCallback=function(e,t){return _e.current.useCallback(e,t)};R.useContext=function(e){return _e.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};R.useEffect=function(e,t){return _e.current.useEffect(e,t)};R.useId=function(){return _e.current.useId()};R.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return _e.current.useMemo(e,t)};R.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};R.useRef=function(e){return _e.current.useRef(e)};R.useState=function(e){return _e.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return _e.current.useTransition()};R.version="18.3.1";Ps.exports=R;var z=Ps.exports;const od=Gc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=z,ud=Symbol.for("react.element"),cd=Symbol.for("react.fragment"),dd=Object.prototype.hasOwnProperty,fd=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pd={key:!0,ref:!0,__self:!0,__source:!0};function Fs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)dd.call(t,r)&&!pd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ud,type:e,key:i,ref:o,props:l,_owner:fd.current}}zl.Fragment=cd;zl.jsx=Fs;zl.jsxs=Fs;Ts.exports=zl;var m=Ts.exports,Ei={},Bs={exports:{}},ze={},Hs={exports:{}},$s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var O=T.length;T.push(L);e:for(;0<O;){var V=O-1>>>1,X=T[V];if(0<l(X,L))T[V]=L,T[O]=X,O=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],O=T.pop();if(O!==L){T[0]=O;e:for(var V=0,X=T.length,it=X>>>1;V<it;){var be=2*(V+1)-1,_t=T[be],Oe=be+1,at=T[Oe];if(0>l(_t,O))Oe<X&&0>l(at,_t)?(T[V]=at,T[Oe]=O,V=Oe):(T[V]=_t,T[be]=O,V=be);else if(Oe<X&&0>l(at,O))T[V]=at,T[Oe]=O,V=Oe;else break e}}return L}function l(T,L){var O=T.sortIndex-L.sortIndex;return O!==0?O:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var d=[],g=[],x=1,a=null,s=3,u=!1,p=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var L=n(g);L!==null;){if(L.callback===null)r(g);else if(L.startTime<=T)r(g),L.sortIndex=L.expirationTime,t(d,L);else break;L=n(g)}}function w(T){if(y=!1,v(T),!p)if(n(d)!==null)p=!0,lt(S);else{var L=n(g);L!==null&&yt(w,L.startTime-T)}}function S(T,L){p=!1,y&&(y=!1,f(A),A=-1),u=!0;var O=s;try{for(v(L),a=n(d);a!==null&&(!(a.expirationTime>L)||T&&!te());){var V=a.callback;if(typeof V=="function"){a.callback=null,s=a.priorityLevel;var X=V(a.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?a.callback=X:a===n(d)&&r(d),v(L)}else r(d);a=n(d)}if(a!==null)var it=!0;else{var be=n(g);be!==null&&yt(w,be.startTime-L),it=!1}return it}finally{a=null,s=O,u=!1}}var N=!1,C=null,A=-1,E=5,M=-1;function te(){return!(e.unstable_now()-M<E)}function je(){if(C!==null){var T=e.unstable_now();M=T;var L=!0;try{L=C(!0,T)}finally{L?Le():(N=!1,C=null)}}else N=!1}var Le;if(typeof h=="function")Le=function(){h(je)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,vt=we.port2;we.port1.onmessage=je,Le=function(){vt.postMessage(null)}}else Le=function(){_(je,0)};function lt(T){C=T,N||(N=!0,Le())}function yt(T,L){A=_(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){p||u||(p=!0,lt(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(T){switch(s){case 1:case 2:case 3:var L=3;break;default:L=s}var O=s;s=L;try{return T()}finally{s=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=s;s=T;try{return L()}finally{s=O}},e.unstable_scheduleCallback=function(T,L,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,T={id:x++,callback:L,priorityLevel:T,startTime:O,expirationTime:X,sortIndex:-1},O>V?(T.sortIndex=O,t(g,T),n(d)===null&&T===n(g)&&(y?(f(A),A=-1):y=!0,yt(w,O-V))):(T.sortIndex=X,t(d,T),p||u||(p=!0,lt(S))),T},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(T){var L=s;return function(){var O=s;s=L;try{return T.apply(this,arguments)}finally{s=O}}}})($s);Hs.exports=$s;var md=Hs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=z,Ie=md;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vs=new Set,rr={};function tn(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(rr[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ji=Object.prototype.hasOwnProperty,gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yo={},_o={};function vd(e){return ji.call(_o,e)?!0:ji.call(yo,e)?!1:gd.test(e)?_o[e]=!0:(yo[e]=!0,!1)}function yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _d(e,t,n,r){if(t===null||typeof t>"u"||yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sa,Ca);de[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sa,Ca);de[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sa,Ca);de[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Na(e,t,n,r){var l=de.hasOwnProperty(t)?de[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_d(t,n,l,r)&&(n=null),r||l===null?vd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),an=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),Us=Symbol.for("react.provider"),Gs=Symbol.for("react.context"),ja=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),Pi=Symbol.for("react.suspense_list"),Aa=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ws=Symbol.for("react.offscreen"),xo=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=xo&&e[xo]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Jl;function Un(e){if(Jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jl=t&&t[1]||""}return`
`+Jl+e}var ql=!1;function ei(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,c=i.length-1;1<=o&&0<=c&&l[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(l[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||l[o]!==i[c]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=c);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function xd(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case on:return"Fragment";case an:return"Portal";case Ai:return"Profiler";case Ea:return"StrictMode";case Ti:return"Suspense";case Pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gs:return(e.displayName||"Context")+".Consumer";case Us:return(e._context.displayName||"Context")+".Provider";case ja:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Aa:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=Qs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=kd(e))}function Ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zi(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&Na(e,"checked",t,!1)}function Mi(e,t){Ys(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Li(e,t.type,n):t.hasOwnProperty("defaultValue")&&Li(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ko(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Li(e,t,n){(t!=="number"||al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function So(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Gn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function Xs(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Co(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Cd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(Cd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,_n=null,xn=null;function No(e){if(e=Cr(e)){if(typeof Bi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Rl(t),Bi(e.stateNode,e.type,t))}}function tu(e){_n?xn?xn.push(e):xn=[e]:_n=e}function nu(){if(_n){var e=_n,t=xn;if(xn=_n=null,No(e),t)for(e=0;e<t.length;e++)No(t[e])}}function ru(e,t){return e(t)}function lu(){}var ti=!1;function iu(e,t,n){if(ti)return e(t,n);ti=!0;try{return ru(e,t,n)}finally{ti=!1,(_n!==null||xn!==null)&&(lu(),nu())}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Hi=!1;if(ft)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Hi=!1}function Nd(e,t,n,r,l,i,o,c,d){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(x){this.onError(x)}}var Yn=!1,ol=null,sl=!1,$i=null,Ed={onError:function(e){Yn=!0,ol=e}};function jd(e,t,n,r,l,i,o,c,d){Yn=!1,ol=null,Nd.apply(Ed,arguments)}function Ad(e,t,n,r,l,i,o,c,d){if(jd.apply(this,arguments),Yn){if(Yn){var g=ol;Yn=!1,ol=null}else throw Error(k(198));sl||(sl=!0,$i=g)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eo(e){if(nn(e)!==e)throw Error(k(188))}function Td(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Eo(l),e;if(i===r)return Eo(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,c=l.child;c;){if(c===n){o=!0,n=l,r=i;break}if(c===r){o=!0,r=l,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=l;break}if(c===r){o=!0,r=i,n=l;break}c=c.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function ou(e){return e=Td(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var uu=Ie.unstable_scheduleCallback,jo=Ie.unstable_cancelCallback,Pd=Ie.unstable_shouldYield,Id=Ie.unstable_requestPaint,ne=Ie.unstable_now,zd=Ie.unstable_getCurrentPriorityLevel,Pa=Ie.unstable_ImmediatePriority,cu=Ie.unstable_UserBlockingPriority,ul=Ie.unstable_NormalPriority,Md=Ie.unstable_LowPriority,du=Ie.unstable_IdlePriority,Ml=null,nt=null;function Ld(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Rd,bd=Math.log,Od=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(bd(e)/Od|0)|0}var Mr=64,Lr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~l;c!==0?r=Wn(c):(i&=o,i!==0&&(r=Wn(i)))}else o=n&~l,o!==0?r=Wn(o):i!==0&&(r=Wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),l=1<<n,r|=e[n],t&=~l;return r}function Dd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ye(i),c=1<<o,d=l[o];d===-1?(!(c&n)||c&r)&&(l[o]=Dd(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}}function Vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function Bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ye(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var $=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mu,za,hu,gu,vu,Ui=!1,br=[],Tt=null,Pt=null,It=null,ar=new Map,or=new Map,Ct=[],Hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ao(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function Dn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Cr(t),t!==null&&za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function $d(e,t,n,r,l){switch(t){case"focusin":return Tt=Dn(Tt,e,t,n,r,l),!0;case"dragenter":return Pt=Dn(Pt,e,t,n,r,l),!0;case"mouseover":return It=Dn(It,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return ar.set(i,Dn(ar.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,or.set(i,Dn(or.get(i)||null,e,t,n,r,l)),!0}return!1}function yu(e){var t=Gt(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=au(n),t!==null){e.blockedOn=t,vu(e.priority,function(){hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fi=r,n.target.dispatchEvent(r),Fi=null}else return t=Cr(n),t!==null&&za(t),e.blockedOn=n,!1;t.shift()}return!0}function To(e,t,n){Yr(e)&&n.delete(t)}function Vd(){Ui=!1,Tt!==null&&Yr(Tt)&&(Tt=null),Pt!==null&&Yr(Pt)&&(Pt=null),It!==null&&Yr(It)&&(It=null),ar.forEach(To),or.forEach(To)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ui||(Ui=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Vd)))}function sr(e){function t(l){return Fn(l,e)}if(0<br.length){Fn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Fn(Tt,e),Pt!==null&&Fn(Pt,e),It!==null&&Fn(It,e),ar.forEach(t),or.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)yu(n),n.blockedOn===null&&Ct.shift()}var wn=gt.ReactCurrentBatchConfig,dl=!0;function Ud(e,t,n,r){var l=$,i=wn.transition;wn.transition=null;try{$=1,Ma(e,t,n,r)}finally{$=l,wn.transition=i}}function Gd(e,t,n,r){var l=$,i=wn.transition;wn.transition=null;try{$=4,Ma(e,t,n,r)}finally{$=l,wn.transition=i}}function Ma(e,t,n,r){if(dl){var l=Gi(e,t,n,r);if(l===null)fi(e,t,r,fl,n),Ao(e,r);else if($d(l,e,t,n,r))r.stopPropagation();else if(Ao(e,r),t&4&&-1<Hd.indexOf(e)){for(;l!==null;){var i=Cr(l);if(i!==null&&mu(i),i=Gi(e,t,n,r),i===null&&fi(e,t,r,fl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else fi(e,t,r,null,n)}}var fl=null;function Gi(e,t,n,r){if(fl=null,e=Ta(r),e=Gt(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case Pa:return 1;case cu:return 4;case ul:case Md:return 16;case du:return 536870912;default:return 16}default:return 16}}var jt=null,La=null,Xr=null;function xu(){if(Xr)return Xr;var e,t=La,n=t.length,r,l="value"in jt?jt.value:jt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Xr=l.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Po(){return!1}function Me(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:Po,this.isPropagationStopped=Po,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Me(zn),Sr=q({},zn,{view:0,detail:0}),Wd=Me(Sr),ri,li,Bn,Ll=q({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ri=e.screenX-Bn.screenX,li=e.screenY-Bn.screenY):li=ri=0,Bn=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:li}}),Io=Me(Ll),Qd=q({},Ll,{dataTransfer:0}),Kd=Me(Qd),Yd=q({},Sr,{relatedTarget:0}),ii=Me(Yd),Xd=q({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zd=Me(Xd),Jd=q({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qd=Me(Jd),ef=q({},zn,{data:0}),zo=Me(ef),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function Oa(){return lf}var af=q({},Sr,{key:function(e){if(e.key){var t=tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=Me(af),sf=q({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=Me(sf),uf=q({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),cf=Me(uf),df=q({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=Me(df),pf=q({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mf=Me(pf),hf=[9,13,27,32],Ra=ft&&"CompositionEvent"in window,Xn=null;ft&&"documentMode"in document&&(Xn=document.documentMode);var gf=ft&&"TextEvent"in window&&!Xn,wu=ft&&(!Ra||Xn&&8<Xn&&11>=Xn),Lo=" ",bo=!1;function ku(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function vf(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(bo=!0,Lo);case"textInput":return e=t.data,e===Lo&&bo?null:e;default:return null}}function yf(e,t){if(sn)return e==="compositionend"||!Ra&&ku(e,t)?(e=xu(),Xr=La=jt=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function Cu(e,t,n,r){tu(r),t=pl(t,"onChange"),0<t.length&&(n=new ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,ur=null;function xf(e){bu(e,0)}function bl(e){var t=dn(e);if(Ks(t))return e}function wf(e,t){if(e==="change")return t}var Nu=!1;if(ft){var ai;if(ft){var oi="oninput"in document;if(!oi){var Ro=document.createElement("div");Ro.setAttribute("oninput","return;"),oi=typeof Ro.oninput=="function"}ai=oi}else ai=!1;Nu=ai&&(!document.documentMode||9<document.documentMode)}function Do(){Zn&&(Zn.detachEvent("onpropertychange",Eu),ur=Zn=null)}function Eu(e){if(e.propertyName==="value"&&bl(ur)){var t=[];Cu(t,ur,e,Ta(e)),iu(xf,t)}}function kf(e,t,n){e==="focusin"?(Do(),Zn=t,ur=n,Zn.attachEvent("onpropertychange",Eu)):e==="focusout"&&Do()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(ur)}function Cf(e,t){if(e==="click")return bl(t)}function Nf(e,t){if(e==="input"||e==="change")return bl(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Ef;function cr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ji.call(t,l)||!Ze(e[l],t[l]))return!1}return!0}function Fo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bo(e,t){var n=Fo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fo(n)}}function ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Au(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=al(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jf(e){var t=Au(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ju(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Bo(n,i);var o=Bo(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=ft&&"documentMode"in document&&11>=document.documentMode,un=null,Wi=null,Jn=null,Qi=!1;function Ho(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qi||un==null||un!==al(r)||(r=un,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&cr(Jn,r)||(Jn=r,r=pl(Wi,"onSelect"),0<r.length&&(t=new ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},si={},Tu={};ft&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function Ol(e){if(si[e])return si[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tu)return si[e]=t[n];return e}var Pu=Ol("animationend"),Iu=Ol("animationiteration"),zu=Ol("animationstart"),Mu=Ol("transitionend"),Lu=new Map,$o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Lu.set(e,t),tn(t,[e])}for(var ui=0;ui<$o.length;ui++){var ci=$o[ui],Tf=ci.toLowerCase(),Pf=ci[0].toUpperCase()+ci.slice(1);Ft(Tf,"on"+Pf)}Ft(Pu,"onAnimationEnd");Ft(Iu,"onAnimationIteration");Ft(zu,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(Mu,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),If=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));function Vo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ad(r,t,void 0,e),e.currentTarget=null}function bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],d=c.instance,g=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break e;Vo(l,c,g),i=d}else for(o=0;o<r.length;o++){if(c=r[o],d=c.instance,g=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break e;Vo(l,c,g),i=d}}}if(sl)throw e=$i,sl=!1,$i=null,e}function W(e,t){var n=t[Ji];n===void 0&&(n=t[Ji]=new Set);var r=e+"__bubble";n.has(r)||(Ou(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),Ou(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Dr]){e[Dr]=!0,Vs.forEach(function(n){n!=="selectionchange"&&(If.has(n)||di(n,!1,e),di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,di("selectionchange",!1,t))}}function Ou(e,t,n,r){switch(_u(t)){case 1:var l=Ud;break;case 4:l=Gd;break;default:l=Ma}n=l.bind(null,t,n,e),l=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function fi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;c!==null;){if(o=Gt(c),o===null)return;if(d=o.tag,d===5||d===6){r=i=o;continue e}c=c.parentNode}}r=r.return}iu(function(){var g=i,x=Ta(n),a=[];e:{var s=Lu.get(e);if(s!==void 0){var u=ba,p=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":u=of;break;case"focusin":p="focus",u=ii;break;case"focusout":p="blur",u=ii;break;case"beforeblur":case"afterblur":u=ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=Io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=cf;break;case Pu:case Iu:case zu:u=Zd;break;case Mu:u=ff;break;case"scroll":u=Wd;break;case"wheel":u=mf;break;case"copy":case"cut":case"paste":u=qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Mo}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var h=g,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=ir(h,f),w!=null&&y.push(fr(h,w,v)))),_)break;h=h.return}0<y.length&&(s=new u(s,p,null,n,x),a.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",s&&n!==Fi&&(p=n.relatedTarget||n.fromElement)&&(Gt(p)||p[pt]))break e;if((u||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,u?(p=n.relatedTarget||n.toElement,u=g,p=p?Gt(p):null,p!==null&&(_=nn(p),p!==_||p.tag!==5&&p.tag!==6)&&(p=null)):(u=null,p=g),u!==p)){if(y=Io,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Mo,w="onPointerLeave",f="onPointerEnter",h="pointer"),_=u==null?s:dn(u),v=p==null?s:dn(p),s=new y(w,h+"leave",u,n,x),s.target=_,s.relatedTarget=v,w=null,Gt(x)===g&&(y=new y(f,h+"enter",p,n,x),y.target=v,y.relatedTarget=_,w=y),_=w,u&&p)t:{for(y=u,f=p,h=0,v=y;v;v=ln(v))h++;for(v=0,w=f;w;w=ln(w))v++;for(;0<h-v;)y=ln(y),h--;for(;0<v-h;)f=ln(f),v--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=ln(y),f=ln(f)}y=null}else y=null;u!==null&&Uo(a,s,u,y,!1),p!==null&&_!==null&&Uo(a,_,p,y,!0)}}e:{if(s=g?dn(g):window,u=s.nodeName&&s.nodeName.toLowerCase(),u==="select"||u==="input"&&s.type==="file")var S=wf;else if(Oo(s))if(Nu)S=Nf;else{S=Sf;var N=kf}else(u=s.nodeName)&&u.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=Cf);if(S&&(S=S(e,g))){Cu(a,S,n,x);break e}N&&N(e,s,g),e==="focusout"&&(N=s._wrapperState)&&N.controlled&&s.type==="number"&&Li(s,"number",s.value)}switch(N=g?dn(g):window,e){case"focusin":(Oo(N)||N.contentEditable==="true")&&(un=N,Wi=g,Jn=null);break;case"focusout":Jn=Wi=un=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,Ho(a,n,x);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":Ho(a,n,x)}var C;if(Ra)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else sn?ku(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(wu&&n.locale!=="ko"&&(sn||A!=="onCompositionStart"?A==="onCompositionEnd"&&sn&&(C=xu()):(jt=x,La="value"in jt?jt.value:jt.textContent,sn=!0)),N=pl(g,A),0<N.length&&(A=new zo(A,e,null,n,x),a.push({event:A,listeners:N}),C?A.data=C:(C=Su(n),C!==null&&(A.data=C)))),(C=gf?vf(e,n):yf(e,n))&&(g=pl(g,"onBeforeInput"),0<g.length&&(x=new zo("onBeforeInput","beforeinput",null,n,x),a.push({event:x,listeners:g}),x.data=C))}bu(a,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ir(e,n),i!=null&&r.unshift(fr(e,i,l)),i=ir(e,t),i!=null&&r.push(fr(e,i,l))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uo(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var c=n,d=c.alternate,g=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&g!==null&&(c=g,l?(d=ir(n,i),d!=null&&o.unshift(fr(n,d,c))):l||(d=ir(n,i),d!=null&&o.push(fr(n,d,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var zf=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function Go(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(Mf,"")}function Fr(e,t,n){if(t=Go(t),Go(e)!==t&&n)throw Error(k(425))}function ml(){}var Ki=null,Yi=null;function Xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zi=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(e){return Wo.resolve(null).then(e).catch(Of)}:Zi;function Of(e){setTimeout(function(){throw e})}function pi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);sr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Mn,pr="__reactProps$"+Mn,pt="__reactContainer$"+Mn,Ji="__reactEvents$"+Mn,Rf="__reactListeners$"+Mn,Df="__reactHandles$"+Mn;function Gt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qo(e);e!==null;){if(n=e[tt])return n;e=Qo(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[tt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Rl(e){return e[pr]||null}var qi=[],fn=-1;function Bt(e){return{current:e}}function Q(e){0>fn||(e.current=qi[fn],qi[fn]=null,fn--)}function G(e,t){fn++,qi[fn]=e.current,e.current=t}var Dt={},ge=Bt(Dt),Ce=Bt(!1),Xt=Dt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function hl(){Q(Ce),Q(ge)}function Ko(e,t,n){if(ge.current!==Dt)throw Error(k(168));G(ge,t),G(Ce,n)}function Ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,wd(e)||"Unknown",l));return q({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Xt=ge.current,G(ge,e),G(Ce,Ce.current),!0}function Yo(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Ru(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(ge),G(ge,e)):Q(Ce),G(Ce,n)}var st=null,Dl=!1,mi=!1;function Du(e){st===null?st=[e]:st.push(e)}function Ff(e){Dl=!0,Du(e)}function Ht(){if(!mi&&st!==null){mi=!0;var e=0,t=$;try{var n=st;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,Dl=!1}catch(l){throw st!==null&&(st=st.slice(e+1)),uu(Pa,Ht),l}finally{$=t,mi=!1}}return null}var pn=[],mn=0,vl=null,yl=0,De=[],Fe=0,Zt=null,ut=1,ct="";function Vt(e,t){pn[mn++]=yl,pn[mn++]=vl,vl=e,yl=t}function Fu(e,t,n){De[Fe++]=ut,De[Fe++]=ct,De[Fe++]=Zt,Zt=e;var r=ut;e=ct;var l=32-Ye(r)-1;r&=~(1<<l),n+=1;var i=32-Ye(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,ut=1<<32-Ye(t)+l|n<<l|r,ct=i+e}else ut=1<<i|n<<l|r,ct=e}function Fa(e){e.return!==null&&(Vt(e,1),Fu(e,1,0))}function Ba(e){for(;e===vl;)vl=pn[--mn],pn[mn]=null,yl=pn[--mn],pn[mn]=null;for(;e===Zt;)Zt=De[--Fe],De[Fe]=null,ct=De[--Fe],De[Fe]=null,ut=De[--Fe],De[Fe]=null}var Pe=null,Te=null,Y=!1,Ke=null;function Bu(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Te=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Te=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(Y){var t=Te;if(t){var n=t;if(!Xo(e,t)){if(ea(e))throw Error(k(418));t=zt(n.nextSibling);var r=Pe;t&&Xo(e,t)?Bu(r,n):(e.flags=e.flags&-4097|2,Y=!1,Pe=e)}}else{if(ea(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Pe=e}}}function Zo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Br(e){if(e!==Pe)return!1;if(!Y)return Zo(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xi(e.type,e.memoizedProps)),t&&(t=Te)){if(ea(e))throw Hu(),Error(k(418));for(;t;)Bu(e,t),t=zt(t.nextSibling)}if(Zo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Pe?zt(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=Te;e;)e=zt(e.nextSibling)}function En(){Te=Pe=null,Y=!1}function Ha(e){Ke===null?Ke=[e]:Ke.push(e)}var Bf=gt.ReactCurrentBatchConfig;function Hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var c=l.refs;o===null?delete c[i]:c[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jo(e){var t=e._init;return t(e._payload)}function $u(e){function t(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=Ot(f,h),f.index=0,f.sibling=null,f}function i(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,h,v,w){return h===null||h.tag!==6?(h=wi(v,f.mode,w),h.return=f,h):(h=l(h,v),h.return=f,h)}function d(f,h,v,w){var S=v.type;return S===on?x(f,h,v.props.children,w,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kt&&Jo(S)===h.type)?(w=l(h,v.props),w.ref=Hn(f,h,v),w.return=f,w):(w=ll(v.type,v.key,v.props,null,f.mode,w),w.ref=Hn(f,h,v),w.return=f,w)}function g(f,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=ki(v,f.mode,w),h.return=f,h):(h=l(h,v.children||[]),h.return=f,h)}function x(f,h,v,w,S){return h===null||h.tag!==7?(h=Yt(v,f.mode,w,S),h.return=f,h):(h=l(h,v),h.return=f,h)}function a(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wi(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pr:return v=ll(h.type,h.key,h.props,null,f.mode,v),v.ref=Hn(f,null,h),v.return=f,v;case an:return h=ki(h,f.mode,v),h.return=f,h;case kt:var w=h._init;return a(f,w(h._payload),v)}if(Gn(h)||On(h))return h=Yt(h,f.mode,v,null),h.return=f,h;Hr(f,h)}return null}function s(f,h,v,w){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:c(f,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pr:return v.key===S?d(f,h,v,w):null;case an:return v.key===S?g(f,h,v,w):null;case kt:return S=v._init,s(f,h,S(v._payload),w)}if(Gn(v)||On(v))return S!==null?null:x(f,h,v,w,null);Hr(f,v)}return null}function u(f,h,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,c(h,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pr:return f=f.get(w.key===null?v:w.key)||null,d(h,f,w,S);case an:return f=f.get(w.key===null?v:w.key)||null,g(h,f,w,S);case kt:var N=w._init;return u(f,h,v,N(w._payload),S)}if(Gn(w)||On(w))return f=f.get(v)||null,x(h,f,w,S,null);Hr(h,w)}return null}function p(f,h,v,w){for(var S=null,N=null,C=h,A=h=0,E=null;C!==null&&A<v.length;A++){C.index>A?(E=C,C=null):E=C.sibling;var M=s(f,C,v[A],w);if(M===null){C===null&&(C=E);break}e&&C&&M.alternate===null&&t(f,C),h=i(M,h,A),N===null?S=M:N.sibling=M,N=M,C=E}if(A===v.length)return n(f,C),Y&&Vt(f,A),S;if(C===null){for(;A<v.length;A++)C=a(f,v[A],w),C!==null&&(h=i(C,h,A),N===null?S=C:N.sibling=C,N=C);return Y&&Vt(f,A),S}for(C=r(f,C);A<v.length;A++)E=u(C,f,A,v[A],w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?A:E.key),h=i(E,h,A),N===null?S=E:N.sibling=E,N=E);return e&&C.forEach(function(te){return t(f,te)}),Y&&Vt(f,A),S}function y(f,h,v,w){var S=On(v);if(typeof S!="function")throw Error(k(150));if(v=S.call(v),v==null)throw Error(k(151));for(var N=S=null,C=h,A=h=0,E=null,M=v.next();C!==null&&!M.done;A++,M=v.next()){C.index>A?(E=C,C=null):E=C.sibling;var te=s(f,C,M.value,w);if(te===null){C===null&&(C=E);break}e&&C&&te.alternate===null&&t(f,C),h=i(te,h,A),N===null?S=te:N.sibling=te,N=te,C=E}if(M.done)return n(f,C),Y&&Vt(f,A),S;if(C===null){for(;!M.done;A++,M=v.next())M=a(f,M.value,w),M!==null&&(h=i(M,h,A),N===null?S=M:N.sibling=M,N=M);return Y&&Vt(f,A),S}for(C=r(f,C);!M.done;A++,M=v.next())M=u(C,f,A,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?A:M.key),h=i(M,h,A),N===null?S=M:N.sibling=M,N=M);return e&&C.forEach(function(je){return t(f,je)}),Y&&Vt(f,A),S}function _(f,h,v,w){if(typeof v=="object"&&v!==null&&v.type===on&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Pr:e:{for(var S=v.key,N=h;N!==null;){if(N.key===S){if(S=v.type,S===on){if(N.tag===7){n(f,N.sibling),h=l(N,v.props.children),h.return=f,f=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kt&&Jo(S)===N.type){n(f,N.sibling),h=l(N,v.props),h.ref=Hn(f,N,v),h.return=f,f=h;break e}n(f,N);break}else t(f,N);N=N.sibling}v.type===on?(h=Yt(v.props.children,f.mode,w,v.key),h.return=f,f=h):(w=ll(v.type,v.key,v.props,null,f.mode,w),w.ref=Hn(f,h,v),w.return=f,f=w)}return o(f);case an:e:{for(N=v.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(f,h.sibling),h=l(h,v.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=ki(v,f.mode,w),h.return=f,f=h}return o(f);case kt:return N=v._init,_(f,h,N(v._payload),w)}if(Gn(v))return p(f,h,v,w);if(On(v))return y(f,h,v,w);Hr(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,v),h.return=f,f=h):(n(f,h),h=wi(v,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return _}var jn=$u(!0),Vu=$u(!1),_l=Bt(null),xl=null,hn=null,$a=null;function Va(){$a=hn=xl=null}function Ua(e){var t=_l.current;Q(_l),e._currentValue=t}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kn(e,t){xl=e,$a=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(xl===null)throw Error(k(308));hn=e,xl.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Wt=null;function Ga(e){Wt===null?Wt=[e]:Wt.push(e)}function Uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ga(t)):(n.next=l.next,l.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,mt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ga(r)):(t.next=l.next,l.next=t),r.interleaved=t,mt(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ia(e,n)}}function qo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var l=e.updateQueue;St=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,g=d.next;d.next=null,o===null?i=g:o.next=g,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==o&&(c===null?x.firstBaseUpdate=g:c.next=g,x.lastBaseUpdate=d))}if(i!==null){var a=l.baseState;o=0,x=g=d=null,c=i;do{var s=c.lane,u=c.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:u,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var p=e,y=c;switch(s=t,u=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){a=p.call(u,a,s);break e}a=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,s=typeof p=="function"?p.call(u,a,s):p,s==null)break e;a=q({},a,s);break e;case 2:St=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[c]:s.push(c))}else u={eventTime:u,lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(g=x=u,d=a):x=x.next=u,o|=s;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;s=c,c=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(x===null&&(d=a),l.baseState=d,l.firstBaseUpdate=g,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);qt|=o,e.lanes=o,e.memoizedState=a}}function es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var Nr={},rt=Bt(Nr),mr=Bt(Nr),hr=Bt(Nr);function Qt(e){if(e===Nr)throw Error(k(174));return e}function Qa(e,t){switch(G(hr,t),G(mr,e),G(rt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}Q(rt),G(rt,t)}function An(){Q(rt),Q(mr),Q(hr)}function Wu(e){Qt(hr.current);var t=Qt(rt.current),n=Oi(t,e.type);t!==n&&(G(mr,e),G(rt,n))}function Ka(e){mr.current===e&&(Q(rt),Q(mr))}var Z=Bt(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function Ya(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var qr=gt.ReactCurrentDispatcher,gi=gt.ReactCurrentBatchConfig,Jt=0,J=null,ie=null,oe=null,Sl=!1,qn=!1,gr=0,Hf=0;function pe(){throw Error(k(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Za(e,t,n,r,l,i){if(Jt=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?Gf:Wf,e=n(r,l),qn){i=0;do{if(qn=!1,gr=0,25<=i)throw Error(k(301));i+=1,oe=ie=null,t.updateQueue=null,qr.current=Qf,e=n(r,l)}while(qn)}if(qr.current=Cl,t=ie!==null&&ie.next!==null,Jt=0,oe=ie=J=null,Sl=!1,t)throw Error(k(300));return e}function Ja(){var e=gr!==0;return gr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?J.memoizedState=oe=e:oe=oe.next=e,oe}function Ue(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=oe===null?J.memoizedState:oe.next;if(t!==null)oe=t,ie=e;else{if(e===null)throw Error(k(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},oe===null?J.memoizedState=oe=e:oe=oe.next=e}return oe}function vr(e,t){return typeof t=="function"?t(e):t}function vi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ie,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var c=o=null,d=null,g=i;do{var x=g.lane;if((Jt&x)===x)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var a={lane:x,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(c=d=a,o=r):d=d.next=a,J.lanes|=x,qt|=x}g=g.next}while(g!==null&&g!==i);d===null?o=r:d.next=c,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,J.lanes|=i,qt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ze(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qu(){}function Ku(e,t){var n=J,r=Ue(),l=t(),i=!Ze(r.memoizedState,l);if(i&&(r.memoizedState=l,Se=!0),r=r.queue,qa(Zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,yr(9,Xu.bind(null,n,r,l,t),void 0,null),se===null)throw Error(k(349));Jt&30||Yu(n,t,l)}return l}function Yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,r){t.value=n,t.getSnapshot=r,Ju(t)&&qu(e)}function Zu(e,t,n){return n(function(){Ju(t)&&qu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function qu(e){var t=mt(e,1);t!==null&&Xe(t,e,1,-1)}function ts(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,J,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ec(){return Ue().memoizedState}function el(e,t,n,r){var l=et();J.flags|=e,l.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function Fl(e,t,n,r){var l=Ue();r=r===void 0?null:r;var i=void 0;if(ie!==null){var o=ie.memoizedState;if(i=o.destroy,r!==null&&Xa(r,o.deps)){l.memoizedState=yr(t,n,i,r);return}}J.flags|=e,l.memoizedState=yr(1|t,n,i,r)}function ns(e,t){return el(8390656,8,e,t)}function qa(e,t){return Fl(2048,8,e,t)}function tc(e,t){return Fl(4,2,e,t)}function nc(e,t){return Fl(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lc(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4,4,rc.bind(null,t,e),n)}function eo(){}function ic(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ac(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oc(e,t,n){return Jt&21?(Ze(n,t)||(n=fu(),J.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function $f(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),t()}finally{$=n,gi.transition=r}}function sc(){return Ue().memoizedState}function Vf(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uc(e))cc(t,n);else if(n=Uu(e,t,n,r),n!==null){var l=ye();Xe(n,e,r,l),dc(n,t,r)}}function Uf(e,t,n){var r=bt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uc(e))cc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,c=i(o,n);if(l.hasEagerState=!0,l.eagerState=c,Ze(c,o)){var d=t.interleaved;d===null?(l.next=l,Ga(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=Uu(e,t,l,r),n!==null&&(l=ye(),Xe(n,e,r,l),dc(n,t,r))}}function uc(e){var t=e.alternate;return e===J||t!==null&&t===J}function cc(e,t){qn=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ia(e,n)}}var Cl={readContext:Ve,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Gf={readContext:Ve,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:ns,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,el(4194308,4,rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){return el(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vf.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:ts,useDebugValue:eo,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=ts(!1),t=e[0];return e=$f.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,l=et();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));Jt&30||Yu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ns(Zu.bind(null,r,i,e),[e]),r.flags|=2048,yr(9,Xu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=et(),t=se.identifierPrefix;if(Y){var n=ct,r=ut;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:Ve,useCallback:ic,useContext:Ve,useEffect:qa,useImperativeHandle:lc,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:ac,useReducer:vi,useRef:ec,useState:function(){return vi(vr)},useDebugValue:eo,useDeferredValue:function(e){var t=Ue();return oc(t,ie.memoizedState,e)},useTransition:function(){var e=vi(vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Qu,useSyncExternalStore:Ku,useId:sc,unstable_isNewReconciler:!1},Qf={readContext:Ve,useCallback:ic,useContext:Ve,useEffect:qa,useImperativeHandle:lc,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:ac,useReducer:yi,useRef:ec,useState:function(){return yi(vr)},useDebugValue:eo,useDeferredValue:function(e){var t=Ue();return ie===null?t.memoizedState=e:oc(t,ie.memoizedState,e)},useTransition:function(){var e=yi(vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Qu,useSyncExternalStore:Ku,useId:sc,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bl={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),l=bt(e),i=dt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,l),t!==null&&(Xe(t,e,l,r),Jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),l=bt(e),i=dt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,l),t!==null&&(Xe(t,e,l,r),Jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=bt(e),l=dt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Mt(e,l,r),t!==null&&(Xe(t,e,r,n),Jr(t,e,r))}};function rs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(l,i):!0}function fc(e,t,n){var r=!1,l=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(l=Ne(t)?Xt:ge.current,r=t.contextTypes,i=(r=r!=null)?Nn(e,l):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bl.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Wa(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ve(i):(i=Ne(t)?Xt:ge.current,l.context=Nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ra(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Bl.enqueueReplaceState(l,l.state,null),wl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=xd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function _i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ia(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kf=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){El||(El=!0,ha=r),ia(e,t)},n}function mc(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ia(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ia(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=sp.bind(null,e,t,n),t.then(e,e))}function as(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function os(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Yf=gt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Vu(t,null,n,r):jn(t,e.child,n,r)}function ss(e,t,n,r,l){n=n.render;var i=t.ref;return kn(t,l),r=Za(e,t,n,r,i,l),n=Ja(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ht(e,t,l)):(Y&&n&&Fa(t),t.flags|=1,ve(e,t,r,l),t.child)}function us(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!so(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hc(e,t,i,r,l)):(e=ll(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(o,r)&&e.ref===t.ref)return ht(e,t,l)}return t.flags|=1,e=Ot(i,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(cr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ht(e,t,l)}return aa(e,t,n,r,l)}function gc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(vn,Ae),Ae|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(vn,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(vn,Ae),Ae|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(vn,Ae),Ae|=r;return ve(e,t,l,n),t.child}function vc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,l){var i=Ne(n)?Xt:ge.current;return i=Nn(t,i),kn(t,l),n=Za(e,t,n,r,i,l),r=Ja(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ht(e,t,l)):(Y&&r&&Fa(t),t.flags|=1,ve(e,t,n,l),t.child)}function cs(e,t,n,r,l){if(Ne(n)){var i=!0;gl(t)}else i=!1;if(kn(t,l),t.stateNode===null)tl(e,t),fc(t,n,r),la(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var d=o.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ve(g):(g=Ne(n)?Xt:ge.current,g=Nn(t,g));var x=n.getDerivedStateFromProps,a=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";a||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||d!==g)&&ls(t,o,r,g),St=!1;var s=t.memoizedState;o.state=s,wl(t,r,o,l),d=t.memoizedState,c!==r||s!==d||Ce.current||St?(typeof x=="function"&&(ra(t,n,x,r),d=t.memoizedState),(c=St||rs(t,n,c,r,s,d,g))?(a||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=g,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Gu(e,t),c=t.memoizedProps,g=t.type===t.elementType?c:We(t.type,c),o.props=g,a=t.pendingProps,s=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ve(d):(d=Ne(n)?Xt:ge.current,d=Nn(t,d));var u=n.getDerivedStateFromProps;(x=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==a||s!==d)&&ls(t,o,r,d),St=!1,s=t.memoizedState,o.state=s,wl(t,r,o,l);var p=t.memoizedState;c!==a||s!==p||Ce.current||St?(typeof u=="function"&&(ra(t,n,u,r),p=t.memoizedState),(g=St||rs(t,n,g,r,s,p,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=d,r=g):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return oa(e,t,n,r,i,l)}function oa(e,t,n,r,l,i){vc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Yo(t,n,!1),ht(e,t,i);r=t.stateNode,Yf.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,c,i)):ve(e,t,c,i),t.memoizedState=r.state,l&&Yo(t,n,!0),t.child}function yc(e){var t=e.stateNode;t.pendingContext?Ko(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ko(e,t.context,!1),Qa(e,t.containerInfo)}function ds(e,t,n,r,l){return En(),Ha(l),t.flags|=256,ve(e,t,n,r),t.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,t,n){var r=t.pendingProps,l=Z.current,i=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),G(Z,l&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Vl(o,r,0,null),e=Yt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ua(n),t.memoizedState=sa,e):to(t,o));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return Xf(e,t,o,r,c,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,c=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Ot(l,d),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?i=Ot(c,i):(i=Yt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?ua(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=sa,r}return i=e.child,e=i.sibling,r=Ot(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function to(e,t){return t=Vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&Ha(r),jn(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=_i(Error(k(422))),$r(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Vl({mode:"visible",children:r.children},l,0,null),i=Yt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&jn(t,e.child,null,o),t.child.memoizedState=ua(o),t.memoizedState=sa,i);if(!(t.mode&1))return $r(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(k(419)),r=_i(i,r,void 0),$r(e,t,o,r)}if(c=(o&e.childLanes)!==0,Se||c){if(r=se,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,mt(e,l),Xe(r,e,l,-1))}return oo(),r=_i(Error(k(421))),$r(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=up.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Te=zt(l.nextSibling),Pe=t,Y=!0,Ke=null,e!==null&&(De[Fe++]=ut,De[Fe++]=ct,De[Fe++]=Zt,ut=e.id,ct=e.overflow,Zt=t),t=to(t,r.children),t.flags|=4096,t)}function fs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function xi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function xc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fs(e,n,t);else if(e.tag===19)fs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Z,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),xi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}xi(t,!0,n,null,i);break;case"together":xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zf(e,t,n){switch(t.tag){case 3:yc(t),En();break;case 5:Wu(t);break;case 1:Ne(t.type)&&gl(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;G(_l,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?_c(e,t,n):(G(Z,Z.current&1),e=ht(e,t,n),e!==null?e.sibling:null);G(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,gc(e,t,n)}return ht(e,t,n)}var wc,ca,kc,Sc;wc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};kc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Qt(rt.current);var i=null;switch(n){case"input":l=zi(e,l),r=zi(e,r),i=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":l=bi(e,l),r=bi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ml)}Ri(n,r);var o;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var c=l[g];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(rr.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var d=r[g];if(c=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&d!==c&&(d!=null||c!=null))if(g==="style")if(c){for(o in c)!c.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&c[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(i||(i=[]),i.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(rr.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&W("scroll",e),i||c===d||(i=[])):(i=i||[]).push(g,d))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};Sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function $n(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jf(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&hl(),me(t),null;case 3:return r=t.stateNode,An(),Q(Ce),Q(ge),Ya(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(ya(Ke),Ke=null))),ca(e,t),me(t),null;case 5:Ka(t);var l=Qt(hr.current);if(n=t.type,e!==null&&t.stateNode!=null)kc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return me(t),null}if(e=Qt(rt.current),Br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tt]=t,r[pr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<Qn.length;l++)W(Qn[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":wo(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":So(r,i),W("invalid",r)}Ri(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Fr(r.textContent,c,e),l=["children",""+c]):rr.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Ir(r),ko(r,i,!0);break;case"textarea":Ir(r),Co(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ml)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tt]=t,e[pr]=r,wc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Di(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<Qn.length;l++)W(Qn[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":wo(e,r),l=zi(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),W("invalid",e);break;case"textarea":So(e,r),l=bi(e,r),W("invalid",e);break;default:l=r}Ri(n,l),c=l;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?eu(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Js(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&lr(e,d):typeof d=="number"&&lr(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(rr.hasOwnProperty(i)?d!=null&&i==="onScroll"&&W("scroll",e):d!=null&&Na(e,i,d,o))}switch(n){case"input":Ir(e),ko(e,r,!1);break;case"textarea":Ir(e),Co(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Sc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Qt(hr.current),Qt(rt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return me(t),null;case 13:if(Q(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Te!==null&&t.mode&1&&!(t.flags&128))Hu(),En(),t.flags|=98560,i=!1;else if(i=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[tt]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ke!==null&&(ya(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ae===0&&(ae=3):oo())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return An(),ca(e,t),e===null&&dr(t.stateNode.containerInfo),me(t),null;case 10:return Ua(t.type._context),me(t),null;case 17:return Ne(t.type)&&hl(),me(t),null;case 19:if(Q(Z),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)$n(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=kl(e),o!==null){for(t.flags|=128,$n(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Pn&&(t.flags|=128,r=!0,$n(i,!1),t.lanes=4194304)}else{if(!r)if(e=kl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Y)return me(t),null}else 2*ne()-i.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,$n(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=Z.current,G(Z,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function qf(e,t){switch(Ba(t),t.tag){case 1:return Ne(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),Q(Ce),Q(ge),Ya(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ka(t),null;case 13:if(Q(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Z),null;case 4:return An(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return ao(),null;case 24:return null;default:return null}}var Vr=!1,he=!1,ep=typeof WeakSet=="function"?WeakSet:Set,I=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){ee(e,t,r)}}var ps=!1;function tp(e,t){if(Ki=dl,e=Au(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,d=-1,g=0,x=0,a=e,s=null;t:for(;;){for(var u;a!==n||l!==0&&a.nodeType!==3||(c=o+l),a!==i||r!==0&&a.nodeType!==3||(d=o+r),a.nodeType===3&&(o+=a.nodeValue.length),(u=a.firstChild)!==null;)s=a,a=u;for(;;){if(a===e)break t;if(s===n&&++g===l&&(c=o),s===i&&++x===r&&(d=o),(u=a.nextSibling)!==null)break;a=s,s=a.parentNode}a=u}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yi={focusedElem:e,selectionRange:n},dl=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,_=p.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:We(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return p=ps,ps=!1,p}function er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&da(t,n,i)}l=l.next}while(l!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[pr],delete t[Ji],delete t[Rf],delete t[Df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ml));else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}var ue=null,Qe=!1;function wt(e,t,n){for(n=n.child;n!==null;)Ec(e,t,n),n=n.sibling}function Ec(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:he||gn(n,t);case 6:var r=ue,l=Qe;ue=null,wt(e,t,n),ue=r,Qe=l,ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?pi(e.parentNode,n):e.nodeType===1&&pi(e,n),sr(e)):pi(ue,n.stateNode));break;case 4:r=ue,l=Qe,ue=n.stateNode.containerInfo,Qe=!0,wt(e,t,n),ue=r,Qe=l;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&da(n,t,o),l=l.next}while(l!==r)}wt(e,t,n);break;case 1:if(!he&&(gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ee(n,t,c)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,wt(e,t,n),he=r):wt(e,t,n);break;default:wt(e,t,n)}}function hs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ep),t.forEach(function(r){var l=cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:ue=c.stateNode,Qe=!1;break e;case 3:ue=c.stateNode.containerInfo,Qe=!0;break e;case 4:ue=c.stateNode.containerInfo,Qe=!0;break e}c=c.return}if(ue===null)throw Error(k(160));Ec(i,o,l),ue=null,Qe=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(g){ee(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}function jc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),qe(e),r&4){try{er(3,e,e.return),Hl(3,e)}catch(y){ee(e,e.return,y)}try{er(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Ge(t,e),qe(e),r&512&&n!==null&&gn(n,n.return);break;case 5:if(Ge(t,e),qe(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var l=e.stateNode;try{lr(l,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Ys(l,i),Di(c,o);var g=Di(c,i);for(o=0;o<d.length;o+=2){var x=d[o],a=d[o+1];x==="style"?eu(l,a):x==="dangerouslySetInnerHTML"?Js(l,a):x==="children"?lr(l,a):Na(l,x,a,g)}switch(c){case"input":Mi(l,i);break;case"textarea":Xs(l,i);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var u=i.value;u!=null?yn(l,!!i.multiple,u,!1):s!==!!i.multiple&&(i.defaultValue!=null?yn(l,!!i.multiple,i.defaultValue,!0):yn(l,!!i.multiple,i.multiple?[]:"",!1))}l[pr]=i}catch(y){ee(e,e.return,y)}}break;case 6:if(Ge(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){ee(e,e.return,y)}}break;case 3:if(Ge(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Ge(t,e),qe(e);break;case 13:Ge(t,e),qe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(lo=ne())),r&4&&hs(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(he=(g=he)||x,Ge(t,e),he=g):Ge(t,e),qe(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!x&&e.mode&1)for(I=e,x=e.child;x!==null;){for(a=I=x;I!==null;){switch(s=I,u=s.child,s.tag){case 0:case 11:case 14:case 15:er(4,s,s.return);break;case 1:gn(s,s.return);var p=s.stateNode;if(typeof p.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:gn(s,s.return);break;case 22:if(s.memoizedState!==null){vs(a);continue}}u!==null?(u.return=s,I=u):vs(a)}x=x.sibling}e:for(x=null,a=e;;){if(a.tag===5){if(x===null){x=a;try{l=a.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=a.stateNode,d=a.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=qs("display",o))}catch(y){ee(e,e.return,y)}}}else if(a.tag===6){if(x===null)try{a.stateNode.nodeValue=g?"":a.memoizedProps}catch(y){ee(e,e.return,y)}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;x===a&&(x=null),a=a.return}x===a&&(x=null),a.sibling.return=a.return,a=a.sibling}}break;case 19:Ge(t,e),qe(e),r&4&&hs(e);break;case 21:break;default:Ge(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(lr(l,""),r.flags&=-33);var i=ms(e);ma(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,c=ms(e);pa(e,c,o);break;default:throw Error(k(161))}}catch(d){ee(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function np(e,t,n){I=e,Ac(e)}function Ac(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Vr;if(!o){var c=l.alternate,d=c!==null&&c.memoizedState!==null||he;c=Vr;var g=he;if(Vr=o,(he=d)&&!g)for(I=l;I!==null;)o=I,d=o.child,o.tag===22&&o.memoizedState!==null?ys(l):d!==null?(d.return=o,I=d):ys(l);for(;i!==null;)I=i,Ac(i),i=i.sibling;I=l,Vr=c,he=g}gs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,I=i):gs(e)}}function gs(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&es(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}es(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var x=g.memoizedState;if(x!==null){var a=x.dehydrated;a!==null&&sr(a)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||t.flags&512&&fa(t)}catch(s){ee(t,t.return,s)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function vs(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function ys(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(d){ee(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){ee(t,l,d)}}var i=t.return;try{fa(t)}catch(d){ee(t,i,d)}break;case 5:var o=t.return;try{fa(t)}catch(d){ee(t,o,d)}}}catch(d){ee(t,t.return,d)}if(t===e){I=null;break}var c=t.sibling;if(c!==null){c.return=t.return,I=c;break}I=t.return}}var rp=Math.ceil,Nl=gt.ReactCurrentDispatcher,no=gt.ReactCurrentOwner,$e=gt.ReactCurrentBatchConfig,B=0,se=null,re=null,ce=0,Ae=0,vn=Bt(0),ae=0,_r=null,qt=0,$l=0,ro=0,tr=null,ke=null,lo=0,Pn=1/0,ot=null,El=!1,ha=null,Lt=null,Ur=!1,At=null,jl=0,nr=0,ga=null,nl=-1,rl=0;function ye(){return B&6?ne():nl!==-1?nl:nl=ne()}function bt(e){return e.mode&1?B&2&&ce!==0?ce&-ce:Bf.transition!==null?(rl===0&&(rl=fu()),rl):(e=$,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e):1}function Xe(e,t,n,r){if(50<nr)throw nr=0,ga=null,Error(k(185));kr(e,n,r),(!(B&2)||e!==se)&&(e===se&&(!(B&2)&&($l|=n),ae===4&&Nt(e,ce)),Ee(e,r),n===1&&B===0&&!(t.mode&1)&&(Pn=ne()+500,Dl&&Ht()))}function Ee(e,t){var n=e.callbackNode;Fd(e,t);var r=cl(e,e===se?ce:0);if(r===0)n!==null&&jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jo(n),t===1)e.tag===0?Ff(_s.bind(null,e)):Du(_s.bind(null,e)),bf(function(){!(B&6)&&Ht()}),n=null;else{switch(pu(r)){case 1:n=Pa;break;case 4:n=cu;break;case 16:n=ul;break;case 536870912:n=du;break;default:n=ul}n=Oc(n,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tc(e,t){if(nl=-1,rl=0,B&6)throw Error(k(327));var n=e.callbackNode;if(Sn()&&e.callbackNode!==n)return null;var r=cl(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Al(e,r);else{t=r;var l=B;B|=2;var i=Ic();(se!==e||ce!==t)&&(ot=null,Pn=ne()+500,Kt(e,t));do try{ap();break}catch(c){Pc(e,c)}while(!0);Va(),Nl.current=i,B=l,re!==null?t=0:(se=null,ce=0,t=ae)}if(t!==0){if(t===2&&(l=Vi(e),l!==0&&(r=l,t=va(e,l))),t===1)throw n=_r,Kt(e,0),Nt(e,r),Ee(e,ne()),n;if(t===6)Nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!lp(l)&&(t=Al(e,r),t===2&&(i=Vi(e),i!==0&&(r=i,t=va(e,i))),t===1))throw n=_r,Kt(e,0),Nt(e,r),Ee(e,ne()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ut(e,ke,ot);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=lo+500-ne(),10<t)){if(cl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Zi(Ut.bind(null,e,ke,ot),t);break}Ut(e,ke,ot);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ye(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rp(r/1960))-r,10<r){e.timeoutHandle=Zi(Ut.bind(null,e,ke,ot),r);break}Ut(e,ke,ot);break;case 5:Ut(e,ke,ot);break;default:throw Error(k(329))}}}return Ee(e,ne()),e.callbackNode===n?Tc.bind(null,e):null}function va(e,t){var n=tr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Al(e,t),e!==2&&(t=ke,ke=n,t!==null&&ya(t)),e}function ya(e){ke===null?ke=e:ke.push.apply(ke,e)}function lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ze(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~ro,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function _s(e){if(B&6)throw Error(k(327));Sn();var t=cl(e,0);if(!(t&1))return Ee(e,ne()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=Vi(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=_r,Kt(e,0),Nt(e,t),Ee(e,ne()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,ke,ot),Ee(e,ne()),null}function io(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Pn=ne()+500,Dl&&Ht())}}function en(e){At!==null&&At.tag===0&&!(B&6)&&Sn();var t=B;B|=1;var n=$e.transition,r=$;try{if($e.transition=null,$=1,e)return e()}finally{$=r,$e.transition=n,B=t,!(B&6)&&Ht()}}function ao(){Ae=vn.current,Q(vn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:An(),Q(Ce),Q(ge),Ya();break;case 5:Ka(r);break;case 4:An();break;case 13:Q(Z);break;case 19:Q(Z);break;case 10:Ua(r.type._context);break;case 22:case 23:ao()}n=n.return}if(se=e,re=e=Ot(e.current,null),ce=Ae=t,ae=0,_r=null,ro=$l=qt=0,ke=tr=null,Wt!==null){for(t=0;t<Wt.length;t++)if(n=Wt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Wt=null}return e}function Pc(e,t){do{var n=re;try{if(Va(),qr.current=Cl,Sl){for(var r=J.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(Jt=0,oe=ie=J=null,qn=!1,gr=0,no.current=null,n===null||n.return===null){ae=1,_r=t,re=null;break}e:{var i=e,o=n.return,c=n,d=t;if(t=ce,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,x=c,a=x.tag;if(!(x.mode&1)&&(a===0||a===11||a===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var u=as(o);if(u!==null){u.flags&=-257,os(u,o,c,i,t),u.mode&1&&is(i,g,t),t=u,d=g;var p=t.updateQueue;if(p===null){var y=new Set;y.add(d),t.updateQueue=y}else p.add(d);break e}else{if(!(t&1)){is(i,g,t),oo();break e}d=Error(k(426))}}else if(Y&&c.mode&1){var _=as(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),os(_,o,c,i,t),Ha(Tn(d,c));break e}}i=d=Tn(d,c),ae!==4&&(ae=2),tr===null?tr=[i]:tr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=pc(i,d,t);qo(i,f);break e;case 1:c=d;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Lt===null||!Lt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=mc(i,c,t);qo(i,w);break e}}i=i.return}while(i!==null)}Mc(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Ic(){var e=Nl.current;return Nl.current=Cl,e===null?Cl:e}function oo(){(ae===0||ae===3||ae===2)&&(ae=4),se===null||!(qt&268435455)&&!($l&268435455)||Nt(se,ce)}function Al(e,t){var n=B;B|=2;var r=Ic();(se!==e||ce!==t)&&(ot=null,Kt(e,t));do try{ip();break}catch(l){Pc(e,l)}while(!0);if(Va(),B=n,Nl.current=r,re!==null)throw Error(k(261));return se=null,ce=0,ae}function ip(){for(;re!==null;)zc(re)}function ap(){for(;re!==null&&!Pd();)zc(re)}function zc(e){var t=bc(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Mc(e):re=t,no.current=null}function Mc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qf(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Jf(n,t,Ae),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function Ut(e,t,n){var r=$,l=$e.transition;try{$e.transition=null,$=1,op(e,t,n,r)}finally{$e.transition=l,$=r}return null}function op(e,t,n,r){do Sn();while(At!==null);if(B&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bd(e,i),e===se&&(re=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ur||(Ur=!0,Oc(ul,function(){return Sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=$e.transition,$e.transition=null;var o=$;$=1;var c=B;B|=4,no.current=null,tp(e,n),jc(n,e),jf(Yi),dl=!!Ki,Yi=Ki=null,e.current=n,np(n),Id(),B=c,$=o,$e.transition=i}else e.current=n;if(Ur&&(Ur=!1,At=e,jl=l),i=e.pendingLanes,i===0&&(Lt=null),Ld(n.stateNode),Ee(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(El)throw El=!1,e=ha,ha=null,e;return jl&1&&e.tag!==0&&Sn(),i=e.pendingLanes,i&1?e===ga?nr++:(nr=0,ga=e):nr=0,Ht(),null}function Sn(){if(At!==null){var e=pu(jl),t=$e.transition,n=$;try{if($e.transition=null,$=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,jl=0,B&6)throw Error(k(331));var l=B;for(B|=4,I=e.current;I!==null;){var i=I,o=i.child;if(I.flags&16){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var g=c[d];for(I=g;I!==null;){var x=I;switch(x.tag){case 0:case 11:case 15:er(8,x,i)}var a=x.child;if(a!==null)a.return=x,I=a;else for(;I!==null;){x=I;var s=x.sibling,u=x.return;if(Cc(x),x===g){I=null;break}if(s!==null){s.return=u,I=s;break}I=u}}}var p=i.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}I=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,I=o;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:er(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,I=f;break e}I=i.return}}var h=e.current;for(I=h;I!==null;){o=I;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,I=v;else e:for(o=h;I!==null;){if(c=I,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Hl(9,c)}}catch(S){ee(c,c.return,S)}if(c===o){I=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,I=w;break e}I=c.return}}if(B=l,Ht(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{$=n,$e.transition=t}}return!1}function xs(e,t,n){t=Tn(n,t),t=pc(e,t,1),e=Mt(e,t,1),t=ye(),e!==null&&(kr(e,1,t),Ee(e,t))}function ee(e,t,n){if(e.tag===3)xs(e,e,n);else for(;t!==null;){if(t.tag===3){xs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Tn(n,e),e=mc(t,e,1),t=Mt(t,e,1),e=ye(),t!==null&&(kr(t,1,e),Ee(t,e));break}}t=t.return}}function sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(ae===4||ae===3&&(ce&130023424)===ce&&500>ne()-lo?Kt(e,0):ro|=n),Ee(e,t)}function Lc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=ye();e=mt(e,t),e!==null&&(kr(e,t,n),Ee(e,n))}function up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lc(e,n)}function cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Lc(e,n)}var bc;bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Zf(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&Fu(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;tl(e,t),e=t.pendingProps;var l=Nn(t,ge.current);kn(t,n),l=Za(null,t,r,e,l,n);var i=Ja();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,gl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Wa(t),l.updater=Bl,t.stateNode=l,l._reactInternals=t,la(t,r,e,n),t=oa(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Fa(t),ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(tl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=fp(r),e=We(r,e),l){case 0:t=aa(null,t,r,e,n);break e;case 1:t=cs(null,t,r,e,n);break e;case 11:t=ss(null,t,r,e,n);break e;case 14:t=us(null,t,r,We(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:We(r,l),aa(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:We(r,l),cs(e,t,r,l,n);case 3:e:{if(yc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Gu(e,t),wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Tn(Error(k(423)),t),t=ds(e,t,r,n,l);break e}else if(r!==l){l=Tn(Error(k(424)),t),t=ds(e,t,r,n,l);break e}else for(Te=zt(t.stateNode.containerInfo.firstChild),Pe=t,Y=!0,Ke=null,n=Vu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===l){t=ht(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Wu(t),e===null&&ta(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Xi(r,l)?o=null:i!==null&&Xi(r,i)&&(t.flags|=32),vc(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&ta(t),null;case 13:return _c(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:We(r,l),ss(e,t,r,l,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,G(_l,r._currentValue),r._currentValue=o,i!==null)if(Ze(i.value,o)){if(i.children===l.children&&!Ce.current){t=ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=dt(-1,n&-n),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var x=g.pending;x===null?d.next=d:(d.next=x.next,x.next=d),g.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),na(i.return,n,t),c.lanes|=n;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,kn(t,n),l=Ve(l),r=r(l),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,l=We(r,t.pendingProps),l=We(r.type,l),us(e,t,r,l,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:We(r,l),tl(e,t),t.tag=1,Ne(r)?(e=!0,gl(t)):e=!1,kn(t,n),fc(t,r,l),la(t,r,l,n),oa(null,t,r,!0,e,n);case 19:return xc(e,t,n);case 22:return gc(e,t,n)}throw Error(k(156,t.tag))};function Oc(e,t){return uu(e,t)}function dp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new dp(e,t,n,r)}function so(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fp(e){if(typeof e=="function")return so(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ja)return 11;if(e===Aa)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ll(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")so(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case on:return Yt(n.children,l,i,t);case Ea:o=8,l|=8;break;case Ai:return e=He(12,n,t,l|2),e.elementType=Ai,e.lanes=i,e;case Ti:return e=He(13,n,t,l),e.elementType=Ti,e.lanes=i,e;case Pi:return e=He(19,n,t,l),e.elementType=Pi,e.lanes=i,e;case Ws:return Vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Us:o=10;break e;case Gs:o=9;break e;case ja:o=11;break e;case Aa:o=14;break e;case kt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=He(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Yt(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Vl(e,t,n,r){return e=He(22,e,r,t),e.elementType=Ws,e.lanes=n,e.stateNode={isHidden:!1},e}function wi(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ki(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function uo(e,t,n,r,l,i,o,c,d){return e=new pp(e,t,n,c,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=He(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(i),e}function mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return Dt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Ru(e,n,t)}return t}function Dc(e,t,n,r,l,i,o,c,d){return e=uo(n,r,!0,e,l,i,o,c,d),e.context=Rc(null),n=e.current,r=ye(),l=bt(n),i=dt(r,l),i.callback=t??null,Mt(n,i,l),e.current.lanes=l,kr(e,l,r),Ee(e,r),e}function Ul(e,t,n,r){var l=t.current,i=ye(),o=bt(l);return n=Rc(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(l,t,o),e!==null&&(Xe(e,l,o,i),Jr(e,l,o)),o}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ws(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function co(e,t){ws(e,t),(e=e.alternate)&&ws(e,t)}function hp(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function fo(e){this._internalRoot=e}Gl.prototype.render=fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ul(e,t,null,null)};Gl.prototype.unmount=fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){Ul(null,e,null,null)}),t[pt]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&yu(e)}};function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function gp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=Tl(o);i.call(g)}}var o=Dc(t,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=o,e[pt]=o.current,dr(e.nodeType===8?e.parentNode:e),en(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var g=Tl(d);c.call(g)}}var d=uo(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=d,e[pt]=d.current,dr(e.nodeType===8?e.parentNode:e),en(function(){Ul(t,d,n,r)}),d}function Ql(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var c=l;l=function(){var d=Tl(o);c.call(d)}}Ul(t,o,e,l)}else o=gp(n,t,e,l,r);return Tl(o)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Ia(t,n|1),Ee(t,ne()),!(B&6)&&(Pn=ne()+500,Ht()))}break;case 13:en(function(){var r=mt(e,1);if(r!==null){var l=ye();Xe(r,e,1,l)}}),co(e,1)}};za=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}co(e,134217728)}};hu=function(e){if(e.tag===13){var t=bt(e),n=mt(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}co(e,t)}};gu=function(){return $};vu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Bi=function(e,t,n){switch(t){case"input":if(Mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Rl(r);if(!l)throw Error(k(90));Ks(r),Mi(r,l)}}}break;case"textarea":Xs(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}};ru=io;lu=en;var vp={usingClientEntryPoint:!1,Events:[Cr,dn,Rl,tu,nu,io]},Vn={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{Ml=Gr.inject(yp),nt=Gr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!po(t))throw Error(k(200));return mp(e,t,null,n)};ze.createRoot=function(e,t){if(!po(e))throw Error(k(299));var n=!1,r="",l=Fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=uo(e,1,!1,null,null,n,!1,r,l),e[pt]=t.current,dr(e.nodeType===8?e.parentNode:e),new fo(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return en(e)};ze.hydrate=function(e,t,n){if(!Wl(t))throw Error(k(200));return Ql(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!po(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Fc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Dc(t,null,e,1,n??null,l,!1,i,o),e[pt]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Gl(t)};ze.render=function(e,t,n){if(!Wl(t))throw Error(k(200));return Ql(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(k(40));return e._reactRootContainer?(en(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};ze.unstable_batchedUpdates=io;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ql(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bc)}catch(e){console.error(e)}}Bc(),Bs.exports=ze;var _p=Bs.exports,Ss=_p;Ei.createRoot=Ss.createRoot,Ei.hydrateRoot=Ss.hydrateRoot;const Cs=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
          touch-action: manipulation;
          -webkit-user-select: none;
          user-select: none;
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
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          min-height: 44px;
        }

        .cg-menu-button:active {
          transform: scale(0.98);
          opacity: 0.9;
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
      `})]}),xr=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function xp(e){return xr.find(t=>t.id===e)}function Be(e){const t=xp(e);return(t==null?void 0:t.name)||e}const wp=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},kp=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let Si=null;const Pl=()=>(Si===null&&(Si=wp()),Si),Sp=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:l})=>{const[i,o]=z.useState(!1),[c,d]=z.useState(r),[g,x]=z.useState(!1),[a,s]=z.useState(!0),u=z.useRef(null),p=z.useRef(null),y=n||Math.floor(Math.random()*4)+1,_=z.useMemo(()=>kp(t),[t]),f=z.useCallback((h=!0)=>`${`avatars/${e}/${y}`}-${_}.${h?"webp":"png"}`,[e,y,_]);return z.useEffect(()=>{if(r||c)return;const h=new IntersectionObserver(v=>{v.forEach(w=>{w.isIntersecting&&(d(!0),h.disconnect())})},{rootMargin:"50px",threshold:.1});return p.current&&h.observe(p.current),()=>h.disconnect()},[r]),z.useEffect(()=>{if(!c)return;(async()=>{if(Pl()&&a){const w=new Image;w.src=f(!0),w.onload=()=>{o(!0),l==null||l()},w.onerror=()=>{s(!1)}}else{const w=new Image;w.src=f(!1),w.onload=()=>{o(!0),l==null||l()},w.onerror=()=>{x(!0)}}})()},[c,f,l,a]),m.jsxs("div",{ref:p,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"#1a1a24",position:"relative"},children:[!i&&!g&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1a1a24"},children:m.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),g&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1a1a24",color:"#dc2626",fontSize:t*.2},children:"?"}),c&&m.jsxs("picture",{children:[Pl()&&a&&m.jsx("source",{srcSet:f(!0),type:"image/webp"}),m.jsx("img",{ref:u,src:f(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:i?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),m.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class Il{static preloadCharacter(t){const n=["small","medium","large"],r=Pl();for(let l=1;l<=4;l++)n.forEach(i=>{const o=`avatars/${t}/${l}-${i}.webp`,c=`avatars/${t}/${l}-${i}.png`;if(r&&!this.preloadedAvatars.has(o)){const d=new Image;d.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(c)){const d=new Image;d.src=c,this.preloadedAvatars.add(c)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(Pl()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const c=new Image;c.src=o,this.preloadedAvatars.add(o)}}const i=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(i)){const o=new Image;o.src=i,this.preloadedAvatars.add(i)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}fe(Il,"preloadedAvatars",new Set);const mo=({characterId:e,size:t=160,avatarNumber:n,animationState:r="idle",priority:l=!1})=>m.jsx(Sp,{characterId:e,size:t,avatarNumber:n,priority:l}),Cp=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,i]=z.useState(null),o=xr.find(c=>c.id===e);return z.useEffect(()=>{e&&Il.preloadCharacter(e)},[e]),m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:xr.map(c=>{const d=e===c.id,g=l===c.id;return m.jsxs("div",{className:`cg-character-card ${d?"cg-selected":""} ${g?"cg-hovered":""}`,onClick:()=>t(c.id),onMouseEnter:()=>i(c.id),onMouseLeave:()=>i(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(mo,{characterId:c.id,size:300,priority:l===c.id||e===c.id})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:c.name}),m.jsx("p",{className:"cg-character-name-en",children:c.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:c.skill.name})})]}),d&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${c.color}40 0%, transparent 70%)`}})]},c.id)})}),o&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:o.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:o.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:o.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
          touch-action: manipulation;
          -webkit-user-select: none;
          user-select: none;
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
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .cg-character-card:active {
          transform: scale(0.98);
          opacity: 0.9;
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
          margin: 0 0 0.25rem;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          color: #71717a;
          letter-spacing: 0.1em;
        }

        .cg-character-skill {
          margin-top: 0.25rem;
        }

        .cg-skill-name {
          font-size: 0.7rem;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
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

        .cg-detail-skill {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }

        .cg-skill-label {
          font-size: 0.75rem;
          color: #71717a;
        }

        .cg-skill-value {
          font-size: 0.75rem;
          color: #d4af37;
          font-weight: 600;
          background: rgba(212, 175, 55, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .cg-skill-desc {
          width: 100%;
          margin: 0.25rem 0 0;
          font-size: 0.75rem;
          color: #a1a1aa;
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
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          min-height: 44px;
        }

        .cg-confirm-button:active {
          transform: scale(0.98);
          opacity: 0.9;
        }

        .cg-confirm-button:hover {
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          transform: scale(1.02);
        }

        .cg-confirm-button svg {
          width: 20px;
          height: 20px;
        }
      `})]})},Wr=e=>{if(!e)return"#d4af37";const t=xr.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},Np=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:i={},onToggleCardSelection:o,onConfirmPlay:c,onPass:d,onChallenge:g,onBackToMenu:x,onLelouchSkill:a,gameLog:s=[],isProcessing:u=!1})=>{var O,V,X,it,be,_t,Oe,at,Er,jr,Ar,b,P;const[p,y]=z.useState(!1);if(z.useEffect(()=>{n&&Il.preloadAvatar(n,r),l.forEach(j=>{const F=i[j]||1;Il.preloadAvatar(j,F)})},[n,r,l,i]),!e)return null;const{phase:_,liarCard:f,playerStats:h,aiPlayers:v,turnState:w}=e,S=_==="player_turn",N=_==="challenge",C=w==null?void 0:w.lastPlayerId,A=C==="player",E=e.playerHand||[],M=(w==null?void 0:w.turnNumber)||1,te=C&&C!=="player"?v==null?void 0:v.find(j=>j.id===C):null,je=()=>{t.length>0&&c()},Le=()=>y(!0),we=j=>{y(!1),a==null||a(j)},vt=j=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[j]||j,lt=j=>j==="joker"?"#d4af37":j==="hearts"||j==="diamonds"?"#dc2626":"#1a1a24",yt=Be(n),T=Wr(n),L=(j,F,D,H,K,U,Re=!1)=>m.jsxs("div",{className:`cg-character ${Re?"cg-character-top":""}`,children:[m.jsx("div",{className:"cg-character-avatar",children:F&&m.jsx(mo,{characterId:F,size:160,avatarNumber:U,priority:!0})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:K},children:j}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{children:Array(D).fill("❤️").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",H]})]})]})]});return m.jsxs("div",{className:"cg-game-table",children:[m.jsxs("div",{className:"cg-top-bar",children:[m.jsx("button",{className:"cg-back-button",onClick:x,children:"← 主页面"}),m.jsxs("div",{className:"cg-round-info",children:["回合 ",M]}),m.jsxs("div",{className:"cg-liar-card",children:["骗子牌 ",m.jsx("span",{children:f})]}),m.jsx("div",{className:"cg-placeholder"})]}),m.jsxs("div",{className:"cg-main",children:[m.jsxs("div",{className:"cg-log",children:[m.jsx("div",{className:"cg-log-title",children:"📜 游戏记录"}),m.jsx("div",{className:"cg-log-content",children:s.map((j,F)=>m.jsx("div",{className:`cg-log-item ${j.includes("质疑")?"challenge":""} ${j.includes("Geass")?"geass":""}`,children:j},F))})]}),m.jsxs("div",{className:"cg-play-area",children:[L(Be(l[0]),l[0],((V=(O=v==null?void 0:v[0])==null?void 0:O.stats)==null?void 0:V.hp)||3,((it=(X=v==null?void 0:v[0])==null?void 0:X.hand)==null?void 0:it.length)||0,Wr(l[0]),i[l[0]]||1,!0),m.jsxs("div",{className:"cg-middle-row",children:[L(Be(l[1]),l[1],((_t=(be=v==null?void 0:v[1])==null?void 0:be.stats)==null?void 0:_t.hp)||3,((at=(Oe=v==null?void 0:v[1])==null?void 0:Oe.hand)==null?void 0:at.length)||0,Wr(l[1]),i[l[1]]||1),m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:w!=null&&w.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-player-name",style:{color:"#d4af37",fontWeight:"bold",marginBottom:"8px"},children:[w.playedCards.playerId==="player"?yt:w.playedCards.playerId.startsWith("ai")?Be(((Er=v==null?void 0:v.find(j=>j.id===w.playedCards.playerId))==null?void 0:Er.character)||"cc"):"未知玩家"," 出牌"]}),m.jsx("div",{className:"cg-cards",children:w.playedCards.actualCards.map(j=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:"/assets/cards/card-back.svg",alt:"牌背"})},j.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[w.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})}),L(Be(l[2]),l[2],((Ar=(jr=v==null?void 0:v[2])==null?void 0:jr.stats)==null?void 0:Ar.hp)||3,((P=(b=v==null?void 0:v[2])==null?void 0:b.hand)==null?void 0:P.length)||0,Wr(l[2]),i[l[2]]||1)]}),m.jsxs("div",{className:"cg-player-position",children:[L(yt,n,h.hp,E.length,T,r),n==="lelouch"&&S&&m.jsx("button",{className:"cg-skill-btn",onClick:Le,disabled:u,children:"绝对命令"})]})]})]}),m.jsx("div",{className:"cg-hand-area",children:m.jsx("div",{className:"cg-hand",children:E.map((j,F)=>{const D=t.includes(j.id);return m.jsxs("button",{className:`cg-card ${D?"selected":""} ${!S||u?"disabled":""}`,onClick:()=>o(j.id),style:{transform:`translateX(${(F-E.length/2)*45}px) ${D?"translateY(-20px)":""}`},disabled:!S||u,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:lt(j.suit)},children:j.rank}),m.jsx("div",{style:{color:lt(j.suit),fontSize:"20px"},children:vt(j.suit)})]}),D&&m.jsx("div",{className:"cg-check",children:"✓"})]},j.id)})})}),m.jsxs("div",{className:"cg-actions",children:[S&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:je,disabled:u,children:["出牌 (",t.length,")"]}),S&&t.length===0&&m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:u,children:"跳过"}),N&&!A&&(te==null?void 0:te.isActive)&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:g,disabled:u,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:u,children:"不质疑"})]}),N&&A&&m.jsx("span",{className:"cg-wait",children:"等待AI..."}),!S&&!N&&m.jsx("span",{className:"cg-wait",children:"AI回合..."})]}),p&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(j=>m.jsx("button",{className:j===f?"current":"",onClick:()=>we(j),children:j},j))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>y(!1),children:"取消"})]})}),m.jsx("style",{children:`
        .cg-game-table { position: fixed; inset: 0; display: flex; flex-direction: column; background: linear-gradient(180deg, #0a0a0f, #1a1a24); font-family: 'Noto Sans SC', sans-serif; touch-action: manipulation; -webkit-user-select: none; user-select: none; }
        .cg-top-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(212,175,55,0.2); }
        .cg-back-button { padding: 6px 12px; background: transparent; border: 1px solid #d4af37; color: #d4af37; border-radius: 4px; cursor: pointer; }
        .cg-round-info { font-size: 18px; color: #d4af37; font-weight: bold; }
        .cg-liar-card { font-size: 16px; color: #fff; }
        .cg-liar-card span { color: #dc2626; font-weight: bold; font-size: 20px; }
        .cg-placeholder { width: 80px; }
        
        .cg-main { flex: 1; display: flex; overflow: auto; }
        .cg-log { width: 260px; background: rgba(0,0,0,0.4); border-right: 1px solid rgba(212,175,55,0.2); padding: 15px; display: flex; flex-direction: column; }
        .cg-log-title { font-size: 16px; color: #d4af37; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(212,175,55,0.3); }
        .cg-log-content { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; }
        .cg-log-item { padding: 6px 10px; background: rgba(255,255,255,0.05); border-radius: 6px; font-size: 13px; color: #e5e5e5; }
        .cg-log-item.challenge { background: rgba(220,38,38,0.2); border-left: 3px solid #dc2626; }
        .cg-log-item.geass { background: rgba(212,175,55,0.2); border-left: 3px solid #d4af37; }
        
        .cg-play-area { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 10px; }
        .cg-character { display: flex; flex-direction: column; align-items: center; gap: 5px; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.2); }
        .cg-character-top { margin-top: 5px; }
        .cg-character-avatar { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5)); }
        .cg-character-info { text-align: center; }
        .cg-character-name { font-size: 14px; font-weight: bold; }
        .cg-character-stats { display: flex; gap: 10px; align-items: center; margin-top: 3px; font-size: 12px; }
        .cg-card-count { color: #d4af37; }
        
        .cg-middle-row { display: flex; align-items: center; justify-content: center; gap: 30px; flex: 1; width: 100%; }
        
        .cg-table { width: 280px; height: 280px; border-radius: 50%; background: linear-gradient(145deg, #1a3a1a, #0d260d); border: 6px solid #2d5016; box-shadow: inset 0 0 50px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }
        .cg-table-inner { width: 250px; height: 250px; border-radius: 50%; background: radial-gradient(circle, #1e4a1e, #143614); display: flex; align-items: center; justify-content: center; }
        .cg-played { text-align: center; }
        .cg-played div:first-child { color: #d4af37; font-size: 14px; margin-bottom: 10px; }
        .cg-cards { display: flex; justify-content: center; gap: 8px; }
        .cg-card-small { width: 40px; height: 56px; border-radius: 4px; border: 2px solid #d4af37; overflow: hidden; }
        .cg-card-small img { width: 100%; height: 100%; object-fit: cover; }
        .cg-card-back { background: linear-gradient(135deg, #4c1d95, #1e1b4b); }
        .cg-card-count-display { color: #d4af37; font-size: 14px; margin-top: 10px; }
        .cg-placeholder-text { color: rgba(255,255,255,0.3); font-size: 16px; }
        
        .cg-player-position { display: flex; flex-direction: column; align-items: center; gap: 5px; margin-bottom: 5px; }
        .cg-skill-btn { padding: 5px 10px; background: linear-gradient(135deg, #4c1d95, #7c3aed); border: none; border-radius: 4px; color: white; font-size: 12px; cursor: pointer; }
        
        .cg-hand-area { height: 110px; display: flex; align-items: center; justify-content: center; }
        .cg-hand { display: flex; justify-content: center; position: relative; height: 90px; }
        .cg-card { width: 60px; height: 84px; border-radius: 6px; background: white; border: 2px solid #d4af37; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; position: relative; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        .cg-card:active { transform: scale(0.95); }
        .cg-card.selected { transform: translateY(-20px); box-shadow: 0 0 15px rgba(212,175,55,0.5); }
        @media (max-width: 414px) { .cg-card.selected { transform: translateY(-10px); } }
        .cg-card.disabled { opacity: 0.5; cursor: not-allowed; }
        .cg-card.disabled:active { transform: none; }
        .cg-card-face { display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .cg-check { position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; }
        
        .cg-actions { display: flex; align-items: center; justify-content: center; gap: 15px; padding: 15px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(212,175,55,0.2); }
        .cg-btn { padding: 10px 25px; font-size: 15px; border: none; border-radius: 6px; cursor: pointer; touch-action: manipulation; -webkit-tap-highlight-color: transparent; min-height: 44px; }
        .cg-btn:active { transform: scale(0.98); opacity: 0.9; }
        .cg-btn-play { background: linear-gradient(135deg, #15803d, #22c55e); color: white; }
        .cg-btn-challenge { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; }
        .cg-btn-skip { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
        .cg-wait { color: rgba(255,255,255,0.5); font-size: 14px; }
        
        .cg-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .cg-modal-content { background: linear-gradient(180deg, #1a1a24, #0a0a0f); padding: 25px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); text-align: center; }
        .cg-modal-content h3 { color: #d4af37; margin-bottom: 15px; }
        .cg-rank-btns { display: flex; gap: 12px; margin-bottom: 15px; }
        .cg-rank-btns button { width: 50px; height: 50px; font-size: 20px; border: 2px solid rgba(212,175,55,0.5); background: rgba(0,0,0,0.5); color: #fff; border-radius: 6px; cursor: pointer; }
        .cg-rank-btns button.current { border-color: #d4af37; background: rgba(212,175,55,0.2); }
      `})]})},Ep=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:l})=>{const[i,o]=z.useState(!1),[c,d]=z.useState(!1);z.useEffect(()=>{e&&o(!0);const x=setTimeout(()=>d(!0),1e3);return()=>clearTimeout(x)},[e]);const g=e?"lelouch":"cc";return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),i&&m.jsx(jp,{}),m.jsxs("div",{className:`cg-result-content ${c?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((x,a)=>m.jsx("circle",{cx:50+35*Math.cos((a*72-90)*Math.PI/180),cy:50+35*Math.sin((a*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${a*.2}s`,repeatCount:"indefinite"})},a))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(mo,{characterId:g,size:300}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-panel",children:[m.jsxs("div",{className:"cg-score-item cg-score-player",children:[m.jsx("span",{className:"cg-score-label",children:"玩家"}),m.jsx("span",{className:"cg-score-value",children:t})]}),m.jsx("div",{className:"cg-score-divider",children:m.jsx("span",{children:"VS"})}),m.jsxs("div",{className:"cg-score-item cg-score-opponent",children:[m.jsx("span",{className:"cg-score-value",children:n}),m.jsx("span",{className:"cg-score-label",children:"对手"})]})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:l,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
          touch-action: manipulation;
          -webkit-user-select: none;
          user-select: none;
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
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          min-height: 44px;
        }

        .cg-result-button:active {
          transform: scale(0.98);
          opacity: 0.9;
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
      `})]})},jp=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var il={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var a=this||n;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var s=this||n;if(a=parseFloat(a),s.ctx||x(),typeof a<"u"&&a>=0&&a<=1){if(s._volume=a,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a,n.ctx.currentTime);for(var u=0;u<s._howls.length;u++)if(!s._howls[u]._webAudio)for(var p=s._howls[u]._getSoundIds(),y=0;y<p.length;y++){var _=s._howls[u]._soundById(p[y]);_&&_._node&&(_._node.volume=_._volume*a)}return s}return s._volume},mute:function(a){var s=this||n;s.ctx||x(),s._muted=a,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a?0:s._volume,n.ctx.currentTime);for(var u=0;u<s._howls.length;u++)if(!s._howls[u]._webAudio)for(var p=s._howls[u]._getSoundIds(),y=0;y<p.length;y++){var _=s._howls[u]._soundById(p[y]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return s},stop:function(){for(var a=this||n,s=0;s<a._howls.length;s++)a._howls[s].stop();return a},unload:function(){for(var a=this||n,s=a._howls.length-1;s>=0;s--)a._howls[s].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,x()),a},codecs:function(a){return(this||n)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||n;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var s=new Audio;s.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return a}if(!s||typeof s.canPlayType!="function")return a;var u=s.canPlayType("audio/mpeg;").replace(/^no$/,""),p=a._navigator?a._navigator.userAgent:"",y=p.match(/OPR\/(\d+)/g),_=y&&parseInt(y[0].split("/")[1],10)<33,f=p.indexOf("Safari")!==-1&&p.indexOf("Chrome")===-1,h=p.match(/Version\/(.*?) /),v=f&&h&&parseInt(h[1],10)<15;return a._codecs={mp3:!!(!_&&(u||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||n;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var s=function(u){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var p=new Audio;p._unlocked=!0,a._releaseHtml5Audio(p)}catch{a.noAudio=!0;break}for(var y=0;y<a._howls.length;y++)if(!a._howls[y]._webAudio)for(var _=a._howls[y]._getSoundIds(),f=0;f<_.length;f++){var h=a._howls[y]._soundById(_[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<a._howls.length;w++)a._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),a}},_obtainHtml5Audio:function(){var a=this||n;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var s=this||n;return a._unlocked&&s._html5AudioPool.push(a),s},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<a._howls.length;s++)if(a._howls[s]._webAudio){for(var u=0;u<a._howls[s]._sounds.length;u++)if(!a._howls[s]._sounds[u]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var p=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(p,p)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!n.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var s=0;s<a._howls.length;s++)a._howls[s]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var n=new t,r=function(a){var s=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(a)};r.prototype={init:function(a){var s=this;return n.ctx||x(),s._autoplay=a.autoplay||!1,s._format=typeof a.format!="string"?a.format:[a.format],s._html5=a.html5||!1,s._muted=a.mute||!1,s._loop=a.loop||!1,s._pool=a.pool||5,s._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,s._rate=a.rate||1,s._sprite=a.sprite||{},s._src=typeof a.src!="string"?a.src:[a.src],s._volume=a.volume!==void 0?a.volume:1,s._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=a.onend?[{fn:a.onend}]:[],s._onfade=a.onfade?[{fn:a.onfade}]:[],s._onload=a.onload?[{fn:a.onload}]:[],s._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],s._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],s._onpause=a.onpause?[{fn:a.onpause}]:[],s._onplay=a.onplay?[{fn:a.onplay}]:[],s._onstop=a.onstop?[{fn:a.onstop}]:[],s._onmute=a.onmute?[{fn:a.onmute}]:[],s._onvolume=a.onvolume?[{fn:a.onvolume}]:[],s._onrate=a.onrate?[{fn:a.onrate}]:[],s._onseek=a.onseek?[{fn:a.onseek}]:[],s._onunlock=a.onunlock?[{fn:a.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var a=this,s=null;if(n.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var u=0;u<a._src.length;u++){var p,y;if(a._format&&a._format[u])p=a._format[u];else{if(y=a._src[u],typeof y!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}p=/^data:audio\/([^;,]+);/i.exec(y),p||(p=/\.([^.]+)$/.exec(y.split("?",1)[0])),p&&(p=p[1].toLowerCase())}if(p||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),p&&n.codecs(p)){s=a._src[u];break}}if(!s){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=s,a._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new l(a),a._webAudio&&o(a),a},play:function(a,s){var u=this,p=null;if(typeof a=="number")p=a,a=null;else{if(typeof a=="string"&&u._state==="loaded"&&!u._sprite[a])return null;if(typeof a>"u"&&(a="__default",!u._playLock)){for(var y=0,_=0;_<u._sounds.length;_++)u._sounds[_]._paused&&!u._sounds[_]._ended&&(y++,p=u._sounds[_]._id);y===1?a=null:p=null}}var f=p?u._soundById(p):u._inactiveSound();if(!f)return null;if(p&&!a&&(a=f._sprite||"__default"),u._state!=="loaded"){f._sprite=a,f._ended=!1;var h=f._id;return u._queue.push({event:"play",action:function(){u.play(h)}}),h}if(p&&!f._paused)return s||u._loadQueue("play"),f._id;u._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:u._sprite[a][0]/1e3),w=Math.max(0,(u._sprite[a][0]+u._sprite[a][1])/1e3-v),S=w*1e3/Math.abs(f._rate),N=u._sprite[a][0]/1e3,C=(u._sprite[a][0]+u._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var A=function(){f._paused=!1,f._seek=v,f._start=N,f._stop=C,f._loop=!!(f._loop||u._sprite[a][2])};if(v>=C){u._ended(f);return}var E=f._node;if(u._webAudio){var M=function(){u._playLock=!1,A(),u._refreshBuffer(f);var we=f._muted||u._muted?0:f._volume;E.gain.setValueAtTime(we,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof E.bufferSource.start>"u"?f._loop?E.bufferSource.noteGrainOn(0,v,86400):E.bufferSource.noteGrainOn(0,v,w):f._loop?E.bufferSource.start(0,v,86400):E.bufferSource.start(0,v,w),S!==1/0&&(u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),S)),s||setTimeout(function(){u._emit("play",f._id),u._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?M():(u._playLock=!0,u.once("resume",M),u._clearTimer(f._id))}else{var te=function(){E.currentTime=v,E.muted=f._muted||u._muted||n._muted||E.muted,E.volume=f._volume*n.volume(),E.playbackRate=f._rate;try{var we=E.play();if(we&&typeof Promise<"u"&&(we instanceof Promise||typeof we.then=="function")?(u._playLock=!0,A(),we.then(function(){u._playLock=!1,E._unlocked=!0,s?u._loadQueue():u._emit("play",f._id)}).catch(function(){u._playLock=!1,u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(u._playLock=!1,A(),u._emit("play",f._id)),E.playbackRate=f._rate,E.paused){u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),S):(u._endTimers[f._id]=function(){u._ended(f),E.removeEventListener("ended",u._endTimers[f._id],!1)},E.addEventListener("ended",u._endTimers[f._id],!1))}catch(vt){u._emit("playerror",f._id,vt)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=u._src,E.load());var je=window&&window.ejecta||!E.readyState&&n._navigator.isCocoonJS;if(E.readyState>=3||je)te();else{u._playLock=!0,u._state="loading";var Le=function(){u._state="loaded",te(),E.removeEventListener(n._canPlayEvent,Le,!1)};E.addEventListener(n._canPlayEvent,Le,!1),u._clearTimer(f._id)}}return f._id},pause:function(a){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(a)}}),s;for(var u=s._getSoundIds(a),p=0;p<u.length;p++){s._clearTimer(u[p]);var y=s._soundById(u[p]);if(y&&!y._paused&&(y._seek=s.seek(u[p]),y._rateSeek=0,y._paused=!0,s._stopFade(u[p]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(a,s){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(a)}}),u;for(var p=u._getSoundIds(a),y=0;y<p.length;y++){u._clearTimer(p[y]);var _=u._soundById(p[y]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,u._stopFade(p[y]),_._node&&(u._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),u._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&u._clearSound(_._node))),s||u._emit("stop",_._id))}return u},mute:function(a,s){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(a,s)}}),u;if(typeof s>"u")if(typeof a=="boolean")u._muted=a;else return u._muted;for(var p=u._getSoundIds(s),y=0;y<p.length;y++){var _=u._soundById(p[y]);_&&(_._muted=a,_._interval&&u._stopFade(_._id),u._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:a),u._emit("mute",_._id))}return u},volume:function(){var a=this,s=arguments,u,p;if(s.length===0)return a._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?p=parseInt(s[0],10):u=parseFloat(s[0])}else s.length>=2&&(u=parseFloat(s[0]),p=parseInt(s[1],10));var f;if(typeof u<"u"&&u>=0&&u<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,s)}}),a;typeof p>"u"&&(a._volume=u),p=a._getSoundIds(p);for(var h=0;h<p.length;h++)f=a._soundById(p[h]),f&&(f._volume=u,s[2]||a._stopFade(p[h]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(u,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=u*n.volume()),a._emit("volume",f._id))}else return f=p?a._soundById(p):a._sounds[0],f?f._volume:0;return a},fade:function(a,s,u,p){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(a,s,u,p)}}),y;a=Math.min(Math.max(0,parseFloat(a)),1),s=Math.min(Math.max(0,parseFloat(s)),1),u=parseFloat(u),y.volume(a,p);for(var _=y._getSoundIds(p),f=0;f<_.length;f++){var h=y._soundById(_[f]);if(h){if(p||y._stopFade(_[f]),y._webAudio&&!h._muted){var v=n.ctx.currentTime,w=v+u/1e3;h._volume=a,h._node.gain.setValueAtTime(a,v),h._node.gain.linearRampToValueAtTime(s,w)}y._startFadeInterval(h,a,s,u,_[f],typeof p>"u")}}return y},_startFadeInterval:function(a,s,u,p,y,_){var f=this,h=s,v=u-s,w=Math.abs(v/.01),S=Math.max(4,w>0?p/w:p),N=Date.now();a._fadeTo=u,a._interval=setInterval(function(){var C=(Date.now()-N)/p;N=Date.now(),h+=v*C,h=Math.round(h*100)/100,v<0?h=Math.max(u,h):h=Math.min(u,h),f._webAudio?a._volume=h:f.volume(h,a._id,!0),_&&(f._volume=h),(u<s&&h<=u||u>s&&h>=u)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(u,a._id),f._emit("fade",a._id))},S)},_stopFade:function(a){var s=this,u=s._soundById(a);return u&&u._interval&&(s._webAudio&&u._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(u._interval),u._interval=null,s.volume(u._fadeTo,a),u._fadeTo=null,s._emit("fade",a)),s},loop:function(){var a=this,s=arguments,u,p,y;if(s.length===0)return a._loop;if(s.length===1)if(typeof s[0]=="boolean")u=s[0],a._loop=u;else return y=a._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(u=s[0],p=parseInt(s[1],10));for(var _=a._getSoundIds(p),f=0;f<_.length;f++)y=a._soundById(_[f]),y&&(y._loop=u,a._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=u,u&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,a.playing(_[f])&&(a.pause(_[f],!0),a.play(_[f],!0)))));return a},rate:function(){var a=this,s=arguments,u,p;if(s.length===0)p=a._sounds[0]._id;else if(s.length===1){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?p=parseInt(s[0],10):u=parseFloat(s[0])}else s.length===2&&(u=parseFloat(s[0]),p=parseInt(s[1],10));var f;if(typeof u=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,s)}}),a;typeof p>"u"&&(a._rate=u),p=a._getSoundIds(p);for(var h=0;h<p.length;h++)if(f=a._soundById(p[h]),f){a.playing(p[h])&&(f._rateSeek=a.seek(p[h]),f._playStart=a._webAudio?n.ctx.currentTime:f._playStart),f._rate=u,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(u,n.ctx.currentTime):f._node&&(f._node.playbackRate=u);var v=a.seek(p[h]),w=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-v,S=w*1e3/Math.abs(f._rate);(a._endTimers[p[h]]||!f._paused)&&(a._clearTimer(p[h]),a._endTimers[p[h]]=setTimeout(a._ended.bind(a,f),S)),a._emit("rate",f._id)}}else return f=a._soundById(p),f?f._rate:a._rate;return a},seek:function(){var a=this,s=arguments,u,p;if(s.length===0)a._sounds.length&&(p=a._sounds[0]._id);else if(s.length===1){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?p=parseInt(s[0],10):a._sounds.length&&(p=a._sounds[0]._id,u=parseFloat(s[0]))}else s.length===2&&(u=parseFloat(s[0]),p=parseInt(s[1],10));if(typeof p>"u")return 0;if(typeof u=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,s)}}),a;var f=a._soundById(p);if(f)if(typeof u=="number"&&u>=0){var h=a.playing(p);h&&a.pause(p,!0),f._seek=u,f._ended=!1,a._clearTimer(p),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=u);var v=function(){h&&a.play(p,!0),a._emit("seek",p)};if(h&&!a._webAudio){var w=function(){a._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(a._webAudio){var S=a.playing(p)?n.ctx.currentTime-f._playStart:0,N=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(N+S*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var s=this;if(typeof a=="number"){var u=s._soundById(a);return u?!u._paused:!1}for(var p=0;p<s._sounds.length;p++)if(!s._sounds[p]._paused)return!0;return!1},duration:function(a){var s=this,u=s._duration,p=s._soundById(a);return p&&(u=s._sprite[p._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var a=this,s=a._sounds,u=0;u<s.length;u++)s[u]._paused||a.stop(s[u]._id),a._webAudio||(a._clearSound(s[u]._node),s[u]._node.removeEventListener("error",s[u]._errorFn,!1),s[u]._node.removeEventListener(n._canPlayEvent,s[u]._loadFn,!1),s[u]._node.removeEventListener("ended",s[u]._endFn,!1),n._releaseHtml5Audio(s[u]._node)),delete s[u]._node,a._clearTimer(s[u]._id);var p=n._howls.indexOf(a);p>=0&&n._howls.splice(p,1);var y=!0;for(u=0;u<n._howls.length;u++)if(n._howls[u]._src===a._src||a._src.indexOf(n._howls[u]._src)>=0){y=!1;break}return i&&y&&delete i[a._src],n.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,s,u,p){var y=this,_=y["_on"+a];return typeof s=="function"&&_.push(p?{id:u,fn:s,once:p}:{id:u,fn:s}),y},off:function(a,s,u){var p=this,y=p["_on"+a],_=0;if(typeof s=="number"&&(u=s,s=null),s||u)for(_=0;_<y.length;_++){var f=u===y[_].id;if(s===y[_].fn&&f||!s&&f){y.splice(_,1);break}}else if(a)p["_on"+a]=[];else{var h=Object.keys(p);for(_=0;_<h.length;_++)h[_].indexOf("_on")===0&&Array.isArray(p[h[_]])&&(p[h[_]]=[])}return p},once:function(a,s,u){var p=this;return p.on(a,s,u,1),p},_emit:function(a,s,u){for(var p=this,y=p["_on"+a],_=y.length-1;_>=0;_--)(!y[_].id||y[_].id===s||a==="load")&&(setTimeout((function(f){f.call(this,s,u)}).bind(p,y[_].fn),0),y[_].once&&p.off(a,y[_].fn,y[_].id));return p._loadQueue(a),p},_loadQueue:function(a){var s=this;if(s._queue.length>0){var u=s._queue[0];u.event===a&&(s._queue.shift(),s._loadQueue()),a||u.action()}return s},_ended:function(a){var s=this,u=a._sprite;if(!s._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(s._ended.bind(s,a),100),s;var p=!!(a._loop||s._sprite[u][2]);if(s._emit("end",a._id),!s._webAudio&&p&&s.stop(a._id,!0).play(a._id),s._webAudio&&p){s._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=n.ctx.currentTime;var y=(a._stop-a._start)*1e3/Math.abs(a._rate);s._endTimers[a._id]=setTimeout(s._ended.bind(s,a),y)}return s._webAudio&&!p&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,s._clearTimer(a._id),s._cleanBuffer(a._node),n._autoSuspend()),!s._webAudio&&!p&&s.stop(a._id,!0),s},_clearTimer:function(a){var s=this;if(s._endTimers[a]){if(typeof s._endTimers[a]!="function")clearTimeout(s._endTimers[a]);else{var u=s._soundById(a);u&&u._node&&u._node.removeEventListener("ended",s._endTimers[a],!1)}delete s._endTimers[a]}return s},_soundById:function(a){for(var s=this,u=0;u<s._sounds.length;u++)if(a===s._sounds[u]._id)return s._sounds[u];return null},_inactiveSound:function(){var a=this;a._drain();for(var s=0;s<a._sounds.length;s++)if(a._sounds[s]._ended)return a._sounds[s].reset();return new l(a)},_drain:function(){var a=this,s=a._pool,u=0,p=0;if(!(a._sounds.length<s)){for(p=0;p<a._sounds.length;p++)a._sounds[p]._ended&&u++;for(p=a._sounds.length-1;p>=0;p--){if(u<=s)return;a._sounds[p]._ended&&(a._webAudio&&a._sounds[p]._node&&a._sounds[p]._node.disconnect(0),a._sounds.splice(p,1),u--)}}},_getSoundIds:function(a){var s=this;if(typeof a>"u"){for(var u=[],p=0;p<s._sounds.length;p++)u.push(s._sounds[p]._id);return u}else return[a]},_refreshBuffer:function(a){var s=this;return a._node.bufferSource=n.ctx.createBufferSource(),a._node.bufferSource.buffer=i[s._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,n.ctx.currentTime),s},_cleanBuffer:function(a){var s=this,u=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return s;if(n._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),u))try{a.bufferSource.buffer=n._scratchBuffer}catch{}return a.bufferSource=null,s},_clearSound:function(a){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(a){this._parent=a,this.init()};l.prototype={init:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,s._sounds.push(a),a.create(),a},create:function(){var a=this,s=a._parent,u=n._muted||a._muted||a._parent._muted?0:a._volume;return s._webAudio?(a._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),a._node.gain.setValueAtTime(u,n.ctx.currentTime),a._node.paused=!0,a._node.connect(n.masterGain)):n.noAudio||(a._node=n._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(n._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=s._src,a._node.preload=s._preload===!0?"auto":s._preload,a._node.volume=u*n.volume(),a._node.load()),a},reset:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,s=a._parent;s._duration=Math.ceil(a._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),a._node.removeEventListener(n._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,s=a._parent;s._duration===1/0&&(s._duration=Math.ceil(a._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var i={},o=function(a){var s=a._src;if(i[s]){a._duration=i[s].duration,g(a);return}if(/^data:[^;]+;base64,/.test(s)){for(var u=atob(s.split(",")[1]),p=new Uint8Array(u.length),y=0;y<u.length;++y)p[y]=u.charCodeAt(y);d(p.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,s,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){_.setRequestHeader(f,a._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}d(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete i[s],a.load())},c(_)}},c=function(a){try{a.send()}catch{a.onerror()}},d=function(a,s){var u=function(){s._emit("loaderror",null,"Decoding audio data failed.")},p=function(y){y&&s._sounds.length>0?(i[s._src]=y,g(s,y)):u()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(a).then(p).catch(u):n.ctx.decodeAudioData(a,p,u)},g=function(a,s){s&&!a._duration&&(a._duration=s.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=s?parseInt(s[1],10):null;if(a&&u&&u<9){var p=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!p&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof bn<"u"?(bn.HowlerGlobal=t,bn.Howler=n,bn.Howl=r,bn.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(r=typeof r!="number"?i._pos[1]:r,l=typeof l!="number"?i._pos[2]:l,typeof n=="number")i._pos=[n,r,l],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,r,l,i,o,c){var d=this;if(!d.ctx||!d.ctx.listener)return d;var g=d._orientation;if(r=typeof r!="number"?g[1]:r,l=typeof l!="number"?g[2]:l,i=typeof i!="number"?g[3]:i,o=typeof o!="number"?g[4]:o,c=typeof c!="number"?g[5]:c,typeof n=="number")d._orientation=[n,r,l,i,o,c],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,i,o,c);else return g;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var o=l._getSoundIds(r),c=0;c<o.length;c++){var d=l._soundById(o[c]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,i),i==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,l,i)}}),o;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof i>"u")if(typeof n=="number")o._pos=[n,r,l];else return o._pos;for(var c=o._getSoundIds(i),d=0;d<c.length;d++){var g=o._soundById(c[d]);if(g)if(typeof n=="number")g._pos=[n,r,l],g._node&&((!g._panner||g._panner.pan)&&t(g,"spatial"),typeof g._panner.positionX<"u"?(g._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setPosition(n,r,l)),o._emit("pos",g._id);else return g._pos}return o},Howl.prototype.orientation=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,l,i)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,l=typeof l!="number"?o._orientation[2]:l,typeof i>"u")if(typeof n=="number")o._orientation=[n,r,l];else return o._orientation;for(var c=o._getSoundIds(i),d=0;d<c.length;d++){var g=o._soundById(c[d]);if(g)if(typeof n=="number")g._orientation=[n,r,l],g._node&&(g._panner||(g._pos||(g._pos=o._pos||[0,0,-.5]),t(g,"spatial")),typeof g._panner.orientationX<"u"?(g._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setOrientation(n,r,l)),o._emit("orientation",g._id);else return g._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,i,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof i>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],i=parseInt(r[1],10));for(var c=n._getSoundIds(i),d=0;d<c.length;d++)if(o=n._soundById(c[d]),o){var g=o._pannerAttr;g={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:g.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:g.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:g.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:g.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:g.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:g.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:g.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:g.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=g.coneInnerAngle,x.coneOuterAngle=g.coneOuterAngle,x.coneOuterGain=g.coneOuterGain,x.distanceModel=g.distanceModel,x.maxDistance=g.maxDistance,x.refDistance=g.refDistance,x.rolloffFactor=g.rolloffFactor,x.panningModel=g.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(il);const Ci={"bgm-menu":{volume:.5,loop:!0},"bgm-game":{volume:.4,loop:!0},"bgm-victory":{volume:.6,loop:!1},"bgm-defeat":{volume:.5,loop:!1},"sfx-play-card":{volume:.7,loop:!1},"sfx-challenge":{volume:.8,loop:!1},"sfx-geass-activate":{volume:.9,loop:!1},"sfx-geass-hit":{volume:1,loop:!1},"sfx-geass-miss":{volume:.6,loop:!1},"sfx-button-click":{volume:.5,loop:!1},"sfx-card-shuffle":{volume:.6,loop:!1},"sfx-win":{volume:.8,loop:!1},"sfx-lose":{volume:.7,loop:!1},"sfx-character-select":{volume:.6,loop:!1},"sfx-turn-start":{volume:.5,loop:!1},"sfx-funny-dance":{volume:.8,loop:!1},"sfx-funny-monkey":{volume:.8,loop:!1},"sfx-funny-pizza":{volume:.7,loop:!1},"sfx-funny-laugh":{volume:.9,loop:!1},"sfx-funny-chicken":{volume:.8,loop:!1},"sfx-funny-chunibyo":{volume:.8,loop:!1},"sfx-funny-butterfly":{volume:.6,loop:!1}},Ap={"bgm-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","bgm-game":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","bgm-victory":"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3","bgm-defeat":"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","sfx-play-card":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","sfx-challenge":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","sfx-geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","sfx-geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","sfx-geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","sfx-button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","sfx-card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","sfx-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","sfx-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","sfx-character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","sfx-turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","sfx-funny-dance":"https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3","sfx-funny-monkey":"https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3","sfx-funny-pizza":"https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3","sfx-funny-laugh":"https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3","sfx-funny-chicken":"https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3","sfx-funny-chunibyo":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3","sfx-funny-butterfly":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3"};class Tp{constructor(){fe(this,"sounds",new Map);fe(this,"currentBGM",null);fe(this,"enabled",!0);fe(this,"masterVolume",1);fe(this,"bgmVolume",.5);fe(this,"sfxVolume",.7);this.init()}init(){Object.entries(Ap).forEach(([t,n])=>{const r=t,l=Ci[r];try{const i=new il.Howl({src:[n],volume:l.volume*this.getVolumeMultiplier(r),loop:l.loop,html5:!0,preload:!0,onloaderror:(o,c)=>{console.warn(`Failed to load sound: ${r}`,c)},onplayerror:(o,c)=>{var d;console.warn(`Failed to play sound: ${r}`,c),(d=this.sounds.get(r))==null||d.once("unlock",()=>{var g;(g=this.sounds.get(r))==null||g.play()})}});this.sounds.set(r,i)}catch(i){console.warn(`Error creating sound: ${r}`,i)}})}getVolumeMultiplier(t){return t.startsWith("bgm-")?this.bgmVolume:this.sfxVolume}play(t){if(!this.enabled)return;const n=this.sounds.get(t);n&&(t.startsWith("bgm-")&&(this.stopBGM(),this.currentBGM=t),n.play())}stop(t){const n=this.sounds.get(t);n&&n.stop()}stopBGM(){this.currentBGM&&(this.stop(this.currentBGM),this.currentBGM=null)}pauseBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.play()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),il.Howler.volume(this.masterVolume)}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")&&n.volume(Ci[r].volume*this.bgmVolume)})}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")||n.volume(Ci[r].volume*this.sfxVolume)})}setEnabled(t){this.enabled=t,t||this.stopAll()}stopAll(){il.Howler.stop(),this.currentBGM=null}playFunnyAction(t){const n=["sfx-funny-dance","sfx-funny-monkey","sfx-funny-pizza","sfx-funny-laugh","sfx-funny-chicken","sfx-funny-chunibyo","sfx-funny-butterfly"],r=n[t%n.length];r&&this.play(r)}preload(){return new Promise(t=>{let n=0;const r=this.sounds.size;if(r===0){t();return}this.sounds.forEach(l=>{l.state()==="loaded"?(n++,n>=r&&t()):(l.once("load",()=>{n++,n>=r&&t()}),l.once("loaderror",()=>{n++,n>=r&&t()}))}),setTimeout(()=>t(),5e3)})}getStatus(){return{enabled:this.enabled,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume,currentBGM:this.currentBGM}}}const Et=new Tp,le=e=>Et.play(e),$t=e=>Et.play(e),Pp=()=>Et.stopBGM();class Ns{constructor(){fe(this,"cards",[]);fe(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const i=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:i,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let i=0;i<5;i++){const o=this.cards[i];o.owner="player",t.push(o)}for(let i=5;i<10;i++){const o=this.cards[i];o.owner="ai",n.push(o)}for(let i=10;i<15;i++){const o=this.cards[i];o.owner="ai2",r.push(o)}for(let i=15;i<20;i++){const o=this.cards[i];o.owner="ai3",l.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(i=>i.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(l=>l.owner===null).slice(0,t);for(const l of r)l.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const Es=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class Ip{constructor(){fe(this,"BASE_HIT_CHANCE",1/3)}performGeass(t,n,r=null,l=0){let i=this.BASE_HIT_CHANCE;if(i+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<i&&n.hp<=1&&Math.random()<.5)return{activated:!0,hit:!1,damage:0,newStats:{...n,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"){if(Math.random()<.25)return{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0};i-=.15}if(i=Math.max(.1,Math.min(.9,i)),Math.random()<i){const g={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},x=Es[Math.floor(Math.random()*Es.length)];return{activated:!0,hit:!0,damage:1,newStats:g,funnyAction:x.description,message:`Geass命中！${x.emoji} ${x.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(.8,.2*t)}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}class Hc{constructor(){fe(this,"cardSystem");fe(this,"geassSystem");fe(this,"state");fe(this,"playerCharacter",null);fe(this,"difficulty","normal");this.cardSystem=new Ns,this.geassSystem=new Ip,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],playerCharacter:null,playerSelectedCards:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null},lastAction:"",winner:null,geassResult:null,difficulty:"normal"}}initializeGame(t,n="normal"){this.playerCharacter=t,this.difficulty=n,this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:i,ai3Cards:o}=this.cardSystem.dealCards(),c=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),g=t==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:c,playerCharacter:t,difficulty:n,currentPlayerIndex:d,playerHand:r,playerStats:{hp:g,maxHp:g,geassSuccessCount:0,geassFailCount:0},aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:l,stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:i,stats:{hp:4,maxHp:4,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:o,stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null}},this.state}resetRound(){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l}=this.cardSystem.dealCards(),i=this.cardSystem.setLiarCard(),o=Math.floor(Math.random()*4);return this.state.playerHand=t,this.state.aiPlayers[0].hand=n,this.state.aiPlayers[1].hand=r,this.state.aiPlayers[2].hand=l,this.state.liarCard=i,this.state.phase=o===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=o,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return 0}toggleCardSelection(t){if(!this.state.playerHand.some(o=>o.id===t))return this.state;const r=this.state.playerSelectedCards,l=r.indexOf(t),i=this.playerCharacter==="kallen"?4:3;return l>-1?this.state.playerSelectedCards=r.filter(o=>o!==t):r.length>=i?this.state.playerSelectedCards=[...r.slice(1),t]:this.state.playerSelectedCards=[...r,t],this.state}playerPlayCards(){if(this.state.phase!=="player_turn")throw new Error("不是玩家回合");const t=this.state.playerSelectedCards;if(t.length===0)throw new Error("未选择任何牌");if(this.playerCharacter==="kallen"){if(t.length>4)throw new Error("红莲突击最多出4张牌")}else if(t.length>3)throw new Error("最多只能出3张牌");const n=this.cardSystem.playCards(t);this.state.playerHand=this.state.playerHand.filter(i=>!t.includes(i.id));const r=this.state.playerHand.length===0;this.playerCharacter==="kallen"&&t.length>=2&&(this.state.playerStats.kallenBoostActive=!0,this.state.playerStats.kallenCardCount=t.length);const l=this.state.liarCard;return this.state={...this.state,phase:"challenge",playerSelectedCards:[],turnState:{...this.state.turnState,playedCards:{cardIds:t,claimedRank:l,actualCards:n,playerId:"player"},lastPlayerId:"player"},lastAction:`玩家出了 ${t.length} 张牌${r?"（玩家手牌已出完！）":""}`},this.state}aiPlayCards(t){const n=this.state.aiPlayers.findIndex(p=>p.id===t);if(n===-1)throw new Error("AI不存在");const r=this.state.aiPlayers[n];if(!r.isActive||r.stats.hp<=0)return this.state.currentPlayerIndex=this.getNextPlayerIndex(),this.state;const l=r.hand,i=this.state.liarCard,o=l.filter(p=>p.rank===i||p.isJoker),c=l.filter(p=>p.rank!==i&&!p.isJoker);let d,g;const x=r.character==="kallen"?3:1;if(o.length>0&&Math.random()>.3){const p=Math.max(1,Math.min(x,o.length,Math.floor(Math.random()*x)+1));d=o.slice(0,p),g=i}else{const p=Math.max(1,Math.min(x,c.length,Math.floor(Math.random()*x)+1));d=c.slice(0,p),g=i}d.length===0&&l.length>0&&(d=[l[0]]),d.length===0&&(console.error("AI没有牌可出，但不应该发生"),d=l.slice(0,1));const a=d.map(p=>p.id),s=this.cardSystem.playCards(a);r.hand=r.hand.filter(p=>!a.includes(p.id)),r.character==="kallen"&&a.length>=2&&(r.stats.kallenBoostActive=!0,r.stats.kallenCardCount=a.length);const u=r.hand.length===0;return this.state={...this.state,phase:"challenge",turnState:{...this.state.turnState,playedCards:{cardIds:a,claimedRank:g,actualCards:s,playerId:t},lastPlayerId:t},lastAction:`${r.name}出了 ${a.length} 张牌${u?"（"+r.name+"手牌已出完！）":""}`},this.state}playerChallengeDecision(t){if(this.state.phase!=="challenge")throw new Error("不在质疑阶段");if(!this.state.turnState.playedCards)throw new Error("没有出牌记录");return t?this.resolveChallenge("player"):this.passToNextPlayer()}aiChallengeDecision(t){if(this.state.phase!=="challenge")throw new Error("不在质疑阶段");const n=this.state.turnState.playedCards;if(!n)throw new Error("没有出牌记录");if(n.playerId===t)return this.passToNextPlayer();const r=this.state.aiPlayers.find(i=>i.id===t);if(!r)throw new Error("AI不存在");return this.calculateAIChallengeProbability(r,n)?this.resolveChallenge(t):this.passToNextPlayer()}calculateAIChallengeProbability(t,n){let r=.3;const l=n.cardIds.length;switch(l>=3?r+=.3:l===2&&(r+=.15),t.stats.hp===1&&(r-=.2),t.character==="suzaku"&&(r+=.1),t.character==="cc"&&(r-=.1),this.difficulty){case"easy":r*=.8;break;case"hard":r*=1.2;break}return Math.random()<r}passToNextPlayer(){const t=this.state.turnState.playedCards;if(!t)throw new Error("没有出牌记录");if(this.state.turnState.tableCards=[...this.state.turnState.tableCards,...t.actualCards],this.checkHandDepletion())return this.handleEmptyHand();let r=((t.playerId==="player"?0:this.state.aiPlayers.findIndex(o=>o.id===t.playerId)+1)+1)%4,l=0;for(;l<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const o=this.state.aiPlayers[r-1];if(o&&o.isActive&&o.stats.hp>0)break}r=(r+1)%4,l++}this.state.currentPlayerIndex=r;const i=this.getCurrentPlayerId();return this.state={...this.state,phase:i==="player"?"player_turn":"ai_turn",turnState:{...this.state.turnState,playedCards:null,turnNumber:i==="player"?this.state.turnState.turnNumber+1:this.state.turnState.turnNumber}},this.state}resolveChallenge(t){const n=this.state.turnState.playedCards,r=this.cardSystem.checkBluff(n.actualCards,n.claimedRank),l=r?n.playerId:t,i=u=>{if(u==="player")return this.playerCharacter?Be(this.playerCharacter):"玩家";const p=this.state.aiPlayers.find(y=>y.id===u);return(p==null?void 0:p.name)||u},o=n.actualCards.map(u=>u.rank).join(", "),c=i(t),d=i(n.playerId),g=r?"成功":"失败",x=i(l);this.state={...this.state,phase:"geass",lastAction:`${c}质疑${d}${g}！实际出牌: ${o}`};let a=0;if(r){const u=n.playerId;if(u==="player"&&this.playerCharacter==="kallen"&&this.state.playerStats.kallenBoostActive){const p=this.state.playerStats.kallenCardCount||2;a=this.geassSystem.calculateKallenBoost(p)}else if(u!=="player"){const p=this.state.aiPlayers.find(y=>y.id===u);if((p==null?void 0:p.character)==="kallen"&&p.stats.kallenBoostActive){const y=p.stats.kallenCardCount||2;a=this.geassSystem.calculateKallenBoost(y)}}}const s=this.executeGeass(l,a);return this.state.geassResult=s,s.hit?this.state.lastAction=`${c}质疑${d}${g}！${x}受到Geass！`:this.state.lastAction=`${c}质疑${d}${g}！${x}闪避了Geass！`,this.checkGameEnd()}executeGeass(t,n=0){let r;if(t==="player")r=this.geassSystem.performGeass("player",this.state.playerStats,this.playerCharacter,n),this.state.playerStats=r.newStats;else{const l=this.state.aiPlayers.findIndex(o=>o.id===t),i=this.state.aiPlayers[l];r=this.geassSystem.performGeass(t,i.stats,i.character,n),i.stats=r.newStats,i.stats.hp<=0&&(i.isActive=!1)}return r}checkGameEnd(){const t=this.state.aiPlayers.filter(n=>n.isActive&&n.stats.hp>0);return this.state.playerStats.hp<=0?(this.state={...this.state,phase:"game_over",winner:"ai",lastAction:"玩家生命归零，游戏结束！"},this.state):t.length===0?(this.state={...this.state,phase:"game_over",winner:"player",lastAction:"所有AI被淘汰，玩家胜利！"},this.state):this.state}lelouchChangeLiarCard(t){if(this.playerCharacter!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");return this.cardSystem.forceSetLiarCard(t),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.state}passTurn(){if(this.state.playerHand.length>0)throw new Error("还有手牌，不能跳过回合");this.state.currentPlayerIndex=this.getNextPlayerIndex();const t=this.getCurrentPlayerId();return this.state={...this.state,phase:t==="player"?"player_turn":"ai_turn",lastAction:"玩家跳过回合"},this.state}checkHandDepletion(){const t=this.state.playerHand.length===0,n=this.state.aiPlayers.every(r=>r.hand.length===0);return!!(t&&n)}handleEmptyHand(){if(!this.checkHandDepletion())return this.state;this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l}=this.cardSystem.dealCards(),i=this.cardSystem.setLiarCard();return this.state.playerHand=t,this.state.aiPlayers[0].hand=n,this.state.aiPlayers[1].hand=r,this.state.aiPlayers[2].hand=l,this.state.liarCard=i,this.state.turnState.tableCards=[],this.state.turnState.playedCards=null,this.state.lastAction="所有玩家手牌出完，重新洗牌发牌",this.state}getCardSystem(){return this.cardSystem}getState(){return this.state}getGeassSystem(){return this.geassSystem}reset(){this.state=this.createInitialState(),this.cardSystem=new Ns,this.playerCharacter=null}}new Hc;const Ni="code-geass-game",js={save:e=>{try{localStorage.setItem(Ni,JSON.stringify(e))}catch(t){console.error("Failed to save to localStorage:",t)}},load:()=>{try{const e=localStorage.getItem(Ni);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load from localStorage:",e),null}},clear:()=>{try{localStorage.removeItem(Ni)}catch(e){console.error("Failed to clear localStorage:",e)}}},As=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],zp=()=>{const[e,t]=z.useState("main-menu"),[n,r]=z.useState(null),[l,i]=z.useState(1),[o,c]=z.useState(["cc","suzaku","kallen"]),[d,g]=z.useState({}),[x,a]=z.useState("normal"),[s,u]=z.useState("balanced"),p=z.useRef(null),[y,_]=z.useState(null),[f,h]=z.useState([]),[v,w]=z.useState(null),[S,N]=z.useState([]),[C,A]=z.useState(!1);z.useEffect(()=>((async()=>{try{await Et.preload(),console.log("音效预加载完成");const P=js.load();P&&(a(P.difficulty),u(P.personality||"balanced"),Et.setBGMVolume(P.bgmVolume),Et.setSFXVolume(P.sfxVolume)),$t("bgm-menu")}catch(P){console.warn("初始化失败:",P)}})(),()=>{Pp()}),[]),z.useEffect(()=>{const b={difficulty:x,bgmVolume:Et.getStatus().bgmVolume,sfxVolume:Et.getStatus().sfxVolume,personality:s};js.save(b)},[x,s]);const E=z.useCallback(b=>{h(P=>[...P.slice(-19),b])},[]),M=z.useCallback(()=>{if(!p.current)return;const b=p.current,P=b.getState();if(P.phase==="player_turn"||P.phase==="game_over")return;const j=P.currentPlayerIndex-1;if(j<0||j>=P.aiPlayers.length)return;const F=P.aiPlayers[j];if(!F)return;const D=F.id;if(!F.isActive||F.stats.hp<=0){const H=(P.currentPlayerIndex+1)%4;P.currentPlayerIndex=H,_({...P}),H!==0&&setTimeout(M,500);return}A(!0),le("sfx-turn-start"),E(`${F.name} 的回合...`),setTimeout(()=>{var H;try{const K=b.aiPlayCards(D);_(K),E(`${F.name} 出了 ${(H=K.turnState.playedCards)==null?void 0:H.cardIds.length} 张牌`),setTimeout(()=>{A(!1)},1e3)}catch(K){console.error("AI出牌错误:",K),A(!1)}},1e3)},[E]),te=z.useCallback(()=>{var D,H,K;if(!p.current)return;const b=p.current,P=b.getState();if(P.phase!=="challenge")return;const j=(D=P.turnState.playedCards)==null?void 0:D.playerId;if(!j)return;const F=j==="player"?0:P.aiPlayers.findIndex(U=>U.id===j)+1;for(let U=0;U<3;U++){const Re=(F+1+U)%4;if(Re===0){E("等待玩家决策...");return}const Je=P.aiPlayers[Re-1];if(!Je||!Je.isActive||Je.stats.hp<=0)continue;if(Math.random()<.3){le("sfx-challenge");const Ln=j==="player"?Be(n):((H=P.aiPlayers.find(rn=>rn.id===j))==null?void 0:H.name)||j;E(`${Je.name} 向 ${Ln} 发起质疑！`);const xt=b.aiChallengeDecision(Je.id),Yl=P.turnState.playedCards,Xl=(Yl?Yl.actualCards.some(rn=>rn.rank!==Yl.claimedRank&&!rn.isJoker):!1)?j:Je.id,$c=Xl==="player"?Be(n):((K=P.aiPlayers.find(rn=>rn.id===Xl))==null?void 0:K.name)||Xl;je(xt,Je.name,Ln,$c);return}else E(`${Je.name} 选择不质疑`)}Le()},[E,n]),je=z.useCallback((b,P,j,F)=>{if(_(b),b.geassResult){const D=P||"玩家",H=j||"对手",K=F||H;if(b.geassResult.hit){le("sfx-geass-hit");const U=As[Math.floor(Math.random()*As.length)];w(U),le(U.soundType),E(`✅ ${D}质疑${H}成功！${K}受到Geass！`),E(`💥 Geass命中！${U.emoji} ${b.geassResult.message}`)}else le("sfx-geass-miss"),E(`❌ ${D}质疑${H}失败！${K}闪避了Geass！`),b.geassResult.isRevived?E(`🔄 ${b.geassResult.message}`):b.geassResult.isCounter&&E(`⚔️ ${b.geassResult.message}`)}if(b.phase==="game_over"){setTimeout(()=>{b.winner==="player"?$t("bgm-victory"):$t("bgm-defeat"),t("result")},2e3);return}setTimeout(()=>{var D;if(w(null),p.current){const H=p.current.resetRound();_(H),N([]);const K=H.currentPlayerIndex===0,U=K?Be(n):(D=H.aiPlayers[H.currentPlayerIndex-1])==null?void 0:D.name;E(`牌局重置！新的骗子牌是 ${H.liarCard}`),E(`${U} 先手！`),K||setTimeout(()=>{M()},1500)}},2500)},[E,n,M]),Le=z.useCallback(()=>{var K;if(!p.current)return;const P=p.current.getState();P.turnState.playedCards&&(P.turnState.tableCards=[...P.turnState.tableCards,...P.turnState.playedCards.actualCards]);const j=(K=P.turnState.playedCards)==null?void 0:K.playerId;let D=((j==="player"?0:P.aiPlayers.findIndex(U=>U.id===j)+1)+1)%4,H=0;for(;H<4;){if(D===0){if(P.playerStats.hp>0)break}else{const U=P.aiPlayers[D-1];if(U&&U.isActive&&U.stats.hp>0)break}D=(D+1)%4,H++}P.currentPlayerIndex=D,D===0?(P.phase="player_turn",P.turnState.turnNumber++,E(`第 ${P.turnState.turnNumber} 回合开始`)):(P.phase="ai_turn",setTimeout(M,500)),P.turnState.playedCards=null,_({...P})},[E,M]),we=z.useCallback(()=>{le("sfx-button-click"),t("character-select")},[]),vt=z.useCallback(()=>{le("sfx-button-click"),t("settings")},[]),lt=z.useCallback(()=>{le("sfx-button-click"),t("help")},[]),yt=z.useCallback(b=>{le("sfx-character-select"),r(b),i(Math.floor(Math.random()*4)+1)},[]),T=z.useCallback(()=>{var U;if(!n)return;le("sfx-button-click");const j=["lelouch","cc","suzaku","kallen"].filter(Re=>Re!==n).sort(()=>Math.random()-.5);c(j);const F={};j.forEach(Re=>{F[Re]=Math.floor(Math.random()*4)+1}),g(F),p.current=new Hc;const D=p.current.initializeGame(n,x);_(D),N([]);const H=D.currentPlayerIndex===0,K=H?Be(n):(U=D.aiPlayers[D.currentPlayerIndex-1])==null?void 0:U.name;h(["游戏开始！",`骗子牌是: ${D.liarCard}`,`${K} 先手！`,"选择1-3张牌打出。"]),t("game-table"),$t("bgm-game"),H||setTimeout(()=>{M()},1500)},[n,x,M]),L=z.useCallback(()=>{le("sfx-button-click"),t("main-menu"),r(null)},[]),O=z.useCallback(()=>{le("sfx-button-click"),t("main-menu"),r(null),_(null),h([]),N([]),w(null),$t("bgm-menu")},[]),V=z.useCallback(b=>{if(!p.current||C)return;const P=p.current;if(P.getState().phase!=="player_turn")return;P.toggleCardSelection(b);const F=P.getState();N(F.playerSelectedCards),le("sfx-button-click")},[C]),X=z.useCallback(()=>{var P;if(!p.current||S.length===0||C)return;A(!0),le("sfx-play-card");const b=p.current;try{const j=b.playerPlayCards();_(j),N([]);const F=Be(n);E(`${F} 出了 ${(P=j.turnState.playedCards)==null?void 0:P.cardIds.length} 张牌`),setTimeout(()=>{te()},1500)}catch(j){console.error("出牌错误:",j)}finally{A(!1)}},[S,C,E,n,te]),it=z.useCallback(()=>{var Kl,Ln;if(!p.current||C)return;A(!0),le("sfx-challenge");const b=p.current,P=b.getState(),j=P.turnState.playedCards,F=j==null?void 0:j.playerId,D=Be(n),H=F==="player"?D:((Kl=P.aiPlayers.find(xt=>xt.id===F))==null?void 0:Kl.name)||F;E(`${D}向${H}发起质疑！`);const K=b.playerChallengeDecision(!0),Re=(j?j.actualCards.some(xt=>xt.rank!==j.claimedRank&&!xt.isJoker):!1)?F:"player",Je=Re==="player"?D:((Ln=P.aiPlayers.find(xt=>xt.id===Re))==null?void 0:Ln.name)||Re;je(K,D,H,Je),A(!1)},[C,E,je,n]),be=z.useCallback(()=>{if(!p.current||C)return;le("sfx-button-click"),E("你选择不质疑");const P=p.current.playerChallengeDecision(!1);_(P),P.phase!=="player_turn"&&P.phase!=="game_over"&&setTimeout(()=>{M()},1e3)},[C,E,M]),_t=z.useCallback(b=>{if(!p.current||n!=="lelouch")return;le("sfx-geass-activate");const j=p.current.lelouchChangeLiarCard(b);_(j),E(`鲁鲁修发动绝对命令！骗子牌变为 ${b}`)},[n,E]),Oe=z.useCallback(()=>{le("sfx-button-click"),t("character-select"),r(null),_(null),h([]),N([]),w(null),$t("bgm-menu")},[]),at=z.useCallback(()=>{le("sfx-button-click"),t("main-menu"),r(null),_(null),h([]),N([]),w(null),$t("bgm-menu")},[]),Er=()=>{var b,P;switch(e){case"main-menu":return m.jsx(Cs,{onStart:we,onSettings:vt,onHelp:lt});case"character-select":return m.jsx(Cp,{characters:xr,selectedId:n,onSelect:yt,onConfirm:T,onBack:L});case"game-table":return y?m.jsx(Np,{gameState:y,selectedCards:S,selectedCharacter:n,selectedAvatar:l,aiCharacters:o,aiAvatars:d,onToggleCardSelection:V,onConfirmPlay:X,onPass:be,onChallenge:it,onBackToMenu:O,onLelouchSkill:_t,gameLog:f,funnyAction:v,isProcessing:C}):null;case"result":{const j=(y==null?void 0:y.winner)==="player",F=((b=y==null?void 0:y.playerStats)==null?void 0:b.geassSuccessCount)||0,D=((P=y==null?void 0:y.aiPlayers)==null?void 0:P.reduce((H,K)=>{var U;return H+(((U=K.stats)==null?void 0:U.geassSuccessCount)||0)},0))||0;return m.jsx(Ep,{isWin:j,playerScore:F,opponentScore:D,onRestart:Oe,onMainMenu:at})}case"settings":return jr();case"help":return Ar();default:return m.jsx(Cs,{onStart:we,onSettings:vt,onHelp:lt})}},jr=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsxs("div",{className:"cg-setting-item",children:[m.jsx("label",{children:"难度:"}),m.jsxs("select",{className:"cg-setting-select",value:x,onChange:b=>a(b.target.value),children:[m.jsx("option",{value:"easy",children:"简单"}),m.jsx("option",{value:"normal",children:"普通"}),m.jsx("option",{value:"hard",children:"困难"})]})]}),m.jsxs("div",{className:"cg-setting-item",children:[m.jsx("label",{children:"AI性格:"}),m.jsxs("select",{className:"cg-setting-select",value:s,onChange:b=>u(b.target.value),children:[m.jsx("option",{value:"aggressive",children:"激进"}),m.jsx("option",{value:"balanced",children:"平衡"}),m.jsx("option",{value:"conservative",children:"保守"})]})]}),m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center",marginTop:"1rem"},children:"设置已自动保存"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Ar=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsxs("div",{className:"cg-app",children:[Er(),m.jsx("style",{children:`
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

        .cg-settings-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 300px;
        }

        .cg-setting-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .cg-setting-item label {
          color: #d4af37;
          font-family: 'Noto Sans SC', sans-serif;
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

        .cg-help-content {
          max-width: 600px;
          text-align: left;
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 1rem;
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
      `})]})},Mp=Ei.createRoot(document.getElementById("root"));Mp.render(m.jsx(od.StrictMode,{children:m.jsx(zp,{})}));
//# sourceMappingURL=index-DvCh0eB8.js.map
