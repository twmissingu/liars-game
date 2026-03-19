var Wd=Object.defineProperty;var Yd=(e,t,n)=>t in e?Wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ie=(e,t,n)=>Yd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ju={exports:{}},sl={},Iu={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),Zd=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),lf=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),ss=Symbol.iterator;function sf(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var Mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Lu={};function or(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Mu}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=or.prototype;function eo(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Mu}var to=eo.prototype=new Ru;to.constructor=eo;zu(to,or.prototype);to.isPureReactComponent=!0;var us=Array.isArray,Ou=Object.prototype.hasOwnProperty,no={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Ou.call(t,r)&&!Fu.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(u===1)a.children=n;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)a[r]===void 0&&(a[r]=u[r]);return{$$typeof:Jr,type:e,key:l,ref:o,props:a,_owner:no.current}}function uf(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function cf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cs=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cf(""+e.key):t.toString(36)}function Sa(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jr:case Zd:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+bl(o,0):r,us(a)?(n="",e!=null&&(n=e.replace(cs,"$&/")+"/"),Sa(a,t,n,"",function(p){return p})):a!=null&&(ro(a)&&(a=uf(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(cs,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",us(e))for(var u=0;u<e.length;u++){l=e[u];var c=r+bl(l,u);o+=Sa(l,t,n,c,a)}else if(c=sf(e),typeof c=="function")for(e=c.call(e),u=0;!(l=e.next()).done;)l=l.value,c=r+bl(l,u++),o+=Sa(l,t,n,c,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(e,t,n){if(e==null)return e;var r=[],a=0;return Sa(e,r,"","",function(l){return t.call(n,l,a++)}),r}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Ca={transition:null},ff={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:no};function Bu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ra,forEach:function(e,t,n){ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ra(e,function(){t++}),t},toArray:function(e){return ra(e,function(t){return t})||[]},only:function(e){if(!ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=or;F.Fragment=Jd;F.Profiler=ef;F.PureComponent=eo;F.StrictMode=qd;F.Suspense=af;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;F.act=Bu;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zu({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=no.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)Ou.call(t,c)&&!Fu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var p=0;p<c;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:Jr,type:e.type,key:a,ref:l,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};F.createElement=Du;F.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:rf,render:e}};F.isValidElement=ro;F.lazy=function(e){return{$$typeof:of,_payload:{_status:-1,_result:e},_init:df}};F.memo=function(e,t){return{$$typeof:lf,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ca.transition;Ca.transition={};try{e()}finally{Ca.transition=t}};F.unstable_act=Bu;F.useCallback=function(e,t){return Pe.current.useCallback(e,t)};F.useContext=function(e){return Pe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};F.useEffect=function(e,t){return Pe.current.useEffect(e,t)};F.useId=function(){return Pe.current.useId()};F.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Pe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};F.useRef=function(e){return Pe.current.useRef(e)};F.useState=function(e){return Pe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Pe.current.useTransition()};F.version="18.3.1";Iu.exports=F;var E=Iu.exports;const pf=Kd(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=E,hf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,yf=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xf={key:!0,ref:!0,__self:!0,__source:!0};function Hu(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vf.call(t,r)&&!xf.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:hf,type:e,key:l,ref:o,props:a,_owner:yf.current}}sl.Fragment=gf;sl.jsx=Hu;sl.jsxs=Hu;ju.exports=sl;var h=ju.exports,ii={},$u={exports:{}},Ve={},Vu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,k){var M=T.length;T.push(k);e:for(;0<M;){var V=M-1>>>1,q=T[V];if(0<a(q,k))T[V]=k,T[M]=q,M=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var k=T[0],M=T.pop();if(M!==k){T[0]=M;e:for(var V=0,q=T.length,Ue=q>>>1;V<Ue;){var Je=2*(V+1)-1,_t=T[Je],qe=Je+1,Dt=T[qe];if(0>a(_t,M))qe<q&&0>a(Dt,_t)?(T[V]=Dt,T[qe]=M,V=qe):(T[V]=_t,T[Je]=M,V=Je);else if(qe<q&&0>a(Dt,M))T[V]=Dt,T[qe]=M,V=qe;else break e}}return k}function a(T,k){var M=T.sortIndex-k.sortIndex;return M!==0?M:T.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var c=[],p=[],x=1,i=null,s=3,d=!1,g=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var k=n(p);k!==null;){if(k.callback===null)r(p);else if(k.startTime<=T)r(p),k.sortIndex=k.expirationTime,t(c,k);else break;k=n(p)}}function w(T){if(y=!1,v(T),!g)if(n(c)!==null)g=!0,Ot(S);else{var k=n(p);k!==null&&Ft(w,k.startTime-T)}}function S(T,k){g=!1,y&&(y=!1,f(C),C=-1),d=!0;var M=s;try{for(v(k),i=n(c);i!==null&&(!(i.expirationTime>k)||T&&!W());){var V=i.callback;if(typeof V=="function"){i.callback=null,s=i.priorityLevel;var q=V(i.expirationTime<=k);k=e.unstable_now(),typeof q=="function"?i.callback=q:i===n(c)&&r(c),v(k)}else r(c);i=n(c)}if(i!==null)var Ue=!0;else{var Je=n(p);Je!==null&&Ft(w,Je.startTime-k),Ue=!1}return Ue}finally{i=null,s=M,d=!1}}var b=!1,N=null,C=-1,I=5,z=-1;function W(){return!(e.unstable_now()-z<I)}function xe(){if(N!==null){var T=e.unstable_now();z=T;var k=!0;try{k=N(!0,T)}finally{k?Ie():(b=!1,N=null)}}else b=!1}var Ie;if(typeof m=="function")Ie=function(){m(xe)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,xt=Ae.port2;Ae.port1.onmessage=xe,Ie=function(){xt.postMessage(null)}}else Ie=function(){_(xe,0)};function Ot(T){N=T,b||(b=!0,Ie())}function Ft(T,k){C=_(function(){T(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,Ot(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(s){case 1:case 2:case 3:var k=3;break;default:k=s}var M=s;s=k;try{return T()}finally{s=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,k){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=s;s=T;try{return k()}finally{s=M}},e.unstable_scheduleCallback=function(T,k,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=M+q,T={id:x++,callback:k,priorityLevel:T,startTime:M,expirationTime:q,sortIndex:-1},M>V?(T.sortIndex=M,t(p,T),n(c)===null&&T===n(p)&&(y?(f(C),C=-1):y=!0,Ft(w,M-V))):(T.sortIndex=q,t(c,T),g||d||(g=!0,Ot(S))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var k=s;return function(){var M=s;s=k;try{return T.apply(this,arguments)}finally{s=M}}}})(Gu);Vu.exports=Gu;var _f=Vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=E,$e=_f;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uu=new Set,Lr={};function En(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ds={},fs={};function Sf(e){return oi.call(fs,e)?!0:oi.call(ds,e)?!1:kf.test(e)?fs[e]=!0:(ds[e]=!0,!1)}function Cf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Af(e,t,n,r){if(t===null||typeof t>"u"||Cf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function lo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,lo);ye[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,lo);ye[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,lo);ye[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function io(e,t,n,r){var a=ye.hasOwnProperty(t)?ye[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Af(t,n,a,r)&&(n=null),r||a===null?Sf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),zn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),oo=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),so=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),ps=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,El;function kr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Tl=!1;function Pl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,u=l.length-1;1<=o&&0<=u&&a[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(a[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||a[o]!==l[u]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=u);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function Nf(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case zn:return"Portal";case si:return"Profiler";case oo:return"StrictMode";case ui:return"Suspense";case ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Xu:return(e._context.displayName||"Context")+".Provider";case so:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return t=e.displayName||null,t!==null?t:di(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return di(e(t))}catch{}}return null}function bf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return di(t);case 8:return t===oo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ef(e){var t=Yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function la(e){e._valueTracker||(e._valueTracker=Ef(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function La(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zu(e,t){t=t.checked,t!=null&&io(e,"checked",t,!1)}function pi(e,t){Zu(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&mi(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mi(e,t,n){(t!=="number"||La(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Sr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function Ju(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ia,ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ia.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){Tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nr[t]=Nr[e]})});function tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+t).trim():t+"px"}function nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Pf=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(e,t){if(t){if(Pf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Wn=null,Yn=null;function ys(e){if(e=ta(e)){if(typeof _i!="function")throw Error(A(280));var t=e.stateNode;t&&(t=pl(t),_i(e.stateNode,e.type,t))}}function rc(e){Wn?Yn?Yn.push(e):Yn=[e]:Wn=e}function ac(){if(Wn){var e=Wn,t=Yn;if(Yn=Wn=null,ys(e),t)for(e=0;e<t.length;e++)ys(t[e])}}function lc(e,t){return e(t)}function ic(){}var jl=!1;function oc(e,t,n){if(jl)return e(t,n);jl=!0;try{return lc(e,t,n)}finally{jl=!1,(Wn!==null||Yn!==null)&&(ic(),ac())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var wi=!1;if(It)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){wi=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{wi=!1}function jf(e,t,n,r,a,l,o,u,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var br=!1,Ra=null,Oa=!1,ki=null,If={onError:function(e){br=!0,Ra=e}};function Mf(e,t,n,r,a,l,o,u,c){br=!1,Ra=null,jf.apply(If,arguments)}function zf(e,t,n,r,a,l,o,u,c){if(Mf.apply(this,arguments),br){if(br){var p=Ra;br=!1,Ra=null}else throw Error(A(198));Oa||(Oa=!0,ki=p)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xs(e){if(Tn(e)!==e)throw Error(A(188))}function Lf(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return xs(a),e;if(l===r)return xs(a),t;l=l.sibling}throw Error(A(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,u=a.child;u;){if(u===n){o=!0,n=a,r=l;break}if(u===r){o=!0,r=a,n=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===n){o=!0,n=l,r=a;break}if(u===r){o=!0,r=l,n=a;break}u=u.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function uc(e){return e=Lf(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cc(e);if(t!==null)return t;e=e.sibling}return null}var dc=$e.unstable_scheduleCallback,_s=$e.unstable_cancelCallback,Rf=$e.unstable_shouldYield,Of=$e.unstable_requestPaint,oe=$e.unstable_now,Ff=$e.unstable_getCurrentPriorityLevel,fo=$e.unstable_ImmediatePriority,fc=$e.unstable_UserBlockingPriority,Fa=$e.unstable_NormalPriority,Df=$e.unstable_LowPriority,pc=$e.unstable_IdlePriority,ul=null,vt=null;function Bf(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ul,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Vf,Hf=Math.log,$f=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-(Hf(e)/$f|0)|0}var oa=64,sa=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~a;u!==0?r=Cr(u):(l&=o,l!==0&&(r=Cr(l)))}else o=n&~a,o!==0?r=Cr(o):l!==0&&(r=Cr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),a=1<<n,r|=e[n],t&=~a;return r}function Gf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ot(l),u=1<<o,c=a[o];c===-1?(!(u&n)||u&r)&&(a[o]=Gf(u,t)):c<=t&&(e.expiredLanes|=u),l&=~u}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mc(){var e=oa;return oa<<=1,!(oa&4194240)&&(oa=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var X=0;function hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gc,mo,vc,yc,xc,Ci=!1,ua=[],Zt=null,Jt=null,qt=null,Fr=new Map,Dr=new Map,Qt=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ws(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function hr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ta(t),t!==null&&mo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Wf(e,t,n,r,a){switch(t){case"focusin":return Zt=hr(Zt,e,t,n,r,a),!0;case"dragenter":return Jt=hr(Jt,e,t,n,r,a),!0;case"mouseover":return qt=hr(qt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Fr.set(l,hr(Fr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Dr.set(l,hr(Dr.get(l)||null,e,t,n,r,a)),!0}return!1}function _c(e){var t=yn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,xc(e.priority,function(){vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xi=r,n.target.dispatchEvent(r),xi=null}else return t=ta(n),t!==null&&mo(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){Aa(e)&&n.delete(t)}function Yf(){Ci=!1,Zt!==null&&Aa(Zt)&&(Zt=null),Jt!==null&&Aa(Jt)&&(Jt=null),qt!==null&&Aa(qt)&&(qt=null),Fr.forEach(ks),Dr.forEach(ks)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ci||(Ci=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Yf)))}function Br(e){function t(a){return gr(a,e)}if(0<ua.length){gr(ua[0],e);for(var n=1;n<ua.length;n++){var r=ua[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&gr(Zt,e),Jt!==null&&gr(Jt,e),qt!==null&&gr(qt,e),Fr.forEach(t),Dr.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)_c(n),n.blockedOn===null&&Qt.shift()}var Kn=Rt.ReactCurrentBatchConfig,Ba=!0;function Kf(e,t,n,r){var a=X,l=Kn.transition;Kn.transition=null;try{X=1,ho(e,t,n,r)}finally{X=a,Kn.transition=l}}function Zf(e,t,n,r){var a=X,l=Kn.transition;Kn.transition=null;try{X=4,ho(e,t,n,r)}finally{X=a,Kn.transition=l}}function ho(e,t,n,r){if(Ba){var a=Ai(e,t,n,r);if(a===null)$l(e,t,r,Ha,n),ws(e,r);else if(Wf(a,e,t,n,r))r.stopPropagation();else if(ws(e,r),t&4&&-1<Qf.indexOf(e)){for(;a!==null;){var l=ta(a);if(l!==null&&gc(l),l=Ai(e,t,n,r),l===null&&$l(e,t,r,Ha,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var Ha=null;function Ai(e,t,n,r){if(Ha=null,e=co(r),e=yn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ha=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case fo:return 1;case fc:return 4;case Fa:case Df:return 16;case pc:return 536870912;default:return 16}default:return 16}}var Yt=null,go=null,Na=null;function kc(){if(Na)return Na;var e,t=go,n=t.length,r,a="value"in Yt?Yt.value:Yt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return Na=a.slice(e,1<r?1-r:void 0)}function ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function Ss(){return!1}function Ge(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ca:Ss,this.isPropagationStopped=Ss,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=Ge(sr),ea=re({},sr,{view:0,detail:0}),Jf=Ge(ea),Ml,zl,vr,cl=re({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Ml=e.screenX-vr.screenX,zl=e.screenY-vr.screenY):zl=Ml=0,vr=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Cs=Ge(cl),qf=re({},cl,{dataTransfer:0}),ep=Ge(qf),tp=re({},ea,{relatedTarget:0}),Ll=Ge(tp),np=re({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=Ge(np),ap=re({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=Ge(ap),ip=re({},sr,{data:0}),As=Ge(ip),op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=up[e])?!!t[e]:!1}function yo(){return cp}var dp=re({},ea,{key:function(e){if(e.key){var t=op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fp=Ge(dp),pp=re({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ns=Ge(pp),mp=re({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),hp=Ge(mp),gp=re({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=Ge(gp),yp=re({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=Ge(yp),_p=[9,13,27,32],xo=It&&"CompositionEvent"in window,Er=null;It&&"documentMode"in document&&(Er=document.documentMode);var wp=It&&"TextEvent"in window&&!Er,Sc=It&&(!xo||Er&&8<Er&&11>=Er),bs=" ",Es=!1;function Cc(e,t){switch(e){case"keyup":return _p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function kp(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(Es=!0,bs);case"textInput":return e=t.data,e===bs&&Es?null:e;default:return null}}function Sp(e,t){if(Rn)return e==="compositionend"||!xo&&Cc(e,t)?(e=kc(),Na=go=Yt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cp[e.type]:t==="textarea"}function Nc(e,t,n,r){rc(r),t=$a(t,"onChange"),0<t.length&&(n=new vo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Hr=null;function Ap(e){Oc(e,0)}function dl(e){var t=Dn(e);if(Ku(t))return e}function Np(e,t){if(e==="change")return t}var bc=!1;if(It){var Rl;if(It){var Ol="oninput"in document;if(!Ol){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),Ol=typeof Ps.oninput=="function"}Rl=Ol}else Rl=!1;bc=Rl&&(!document.documentMode||9<document.documentMode)}function js(){Tr&&(Tr.detachEvent("onpropertychange",Ec),Hr=Tr=null)}function Ec(e){if(e.propertyName==="value"&&dl(Hr)){var t=[];Nc(t,Hr,e,co(e)),oc(Ap,t)}}function bp(e,t,n){e==="focusin"?(js(),Tr=t,Hr=n,Tr.attachEvent("onpropertychange",Ec)):e==="focusout"&&js()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Hr)}function Tp(e,t){if(e==="click")return dl(t)}function Pp(e,t){if(e==="input"||e==="change")return dl(t)}function jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:jp;function $r(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!oi.call(t,a)||!ut(e[a],t[a]))return!1}return!0}function Is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,t){var n=Is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Is(n)}}function Tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(){for(var e=window,t=La();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=La(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ip(e){var t=Pc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tc(n.ownerDocument.documentElement,n)){if(r!==null&&_o(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Ms(n,l);var o=Ms(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mp=It&&"documentMode"in document&&11>=document.documentMode,On=null,Ni=null,Pr=null,bi=!1;function zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bi||On==null||On!==La(r)||(r=On,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&$r(Pr,r)||(Pr=r,r=$a(Ni,"onSelect"),0<r.length&&(t=new vo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Fl={},jc={};It&&(jc=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function fl(e){if(Fl[e])return Fl[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jc)return Fl[e]=t[n];return e}var Ic=fl("animationend"),Mc=fl("animationiteration"),zc=fl("animationstart"),Lc=fl("transitionend"),Rc=new Map,Ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Rc.set(e,t),En(t,[e])}for(var Dl=0;Dl<Ls.length;Dl++){var Bl=Ls[Dl],zp=Bl.toLowerCase(),Lp=Bl[0].toUpperCase()+Bl.slice(1);sn(zp,"on"+Lp)}sn(Ic,"onAnimationEnd");sn(Mc,"onAnimationIteration");sn(zc,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Lc,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Rs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zf(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],c=u.instance,p=u.currentTarget;if(u=u.listener,c!==l&&a.isPropagationStopped())break e;Rs(a,u,p),l=c}else for(o=0;o<r.length;o++){if(u=r[o],c=u.instance,p=u.currentTarget,u=u.listener,c!==l&&a.isPropagationStopped())break e;Rs(a,u,p),l=c}}}if(Oa)throw e=ki,Oa=!1,ki=null,e}function Z(e,t){var n=t[Ii];n===void 0&&(n=t[Ii]=new Set);var r=e+"__bubble";n.has(r)||(Fc(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),Fc(n,e,r,t)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[fa]){e[fa]=!0,Uu.forEach(function(n){n!=="selectionchange"&&(Rp.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fa]||(t[fa]=!0,Hl("selectionchange",!1,t))}}function Fc(e,t,n,r){switch(wc(t)){case 1:var a=Kf;break;case 4:a=Zf;break;default:a=ho}n=a.bind(null,t,n,e),a=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;u!==null;){if(o=yn(u),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}u=u.parentNode}}r=r.return}oc(function(){var p=l,x=co(n),i=[];e:{var s=Rc.get(e);if(s!==void 0){var d=vo,g=e;switch(e){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":d=fp;break;case"focusin":g="focus",d=Ll;break;case"focusout":g="blur",d=Ll;break;case"beforeblur":case"afterblur":d=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=hp;break;case Ic:case Mc:case zc:d=rp;break;case Lc:d=vp;break;case"scroll":d=Jf;break;case"wheel":d=xp;break;case"copy":case"cut":case"paste":d=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Ns}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var m=p,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=Or(m,f),w!=null&&y.push(Gr(m,w,v)))),_)break;m=m.return}0<y.length&&(s=new d(s,g,null,n,x),i.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",s&&n!==xi&&(g=n.relatedTarget||n.fromElement)&&(yn(g)||g[Mt]))break e;if((d||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=p,g=g?yn(g):null,g!==null&&(_=Tn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=p),d!==g)){if(y=Cs,w="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ns,w="onPointerLeave",f="onPointerEnter",m="pointer"),_=d==null?s:Dn(d),v=g==null?s:Dn(g),s=new y(w,m+"leave",d,n,x),s.target=_,s.relatedTarget=v,w=null,yn(x)===p&&(y=new y(f,m+"enter",g,n,x),y.target=v,y.relatedTarget=_,w=y),_=w,d&&g)t:{for(y=d,f=g,m=0,v=y;v;v=In(v))m++;for(v=0,w=f;w;w=In(w))v++;for(;0<m-v;)y=In(y),m--;for(;0<v-m;)f=In(f),v--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=In(y),f=In(f)}y=null}else y=null;d!==null&&Os(i,s,d,y,!1),g!==null&&_!==null&&Os(i,_,g,y,!0)}}e:{if(s=p?Dn(p):window,d=s.nodeName&&s.nodeName.toLowerCase(),d==="select"||d==="input"&&s.type==="file")var S=Np;else if(Ts(s))if(bc)S=Pp;else{S=Ep;var b=bp}else(d=s.nodeName)&&d.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=Tp);if(S&&(S=S(e,p))){Nc(i,S,n,x);break e}b&&b(e,s,p),e==="focusout"&&(b=s._wrapperState)&&b.controlled&&s.type==="number"&&mi(s,"number",s.value)}switch(b=p?Dn(p):window,e){case"focusin":(Ts(b)||b.contentEditable==="true")&&(On=b,Ni=p,Pr=null);break;case"focusout":Pr=Ni=On=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,zs(i,n,x);break;case"selectionchange":if(Mp)break;case"keydown":case"keyup":zs(i,n,x)}var N;if(xo)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Rn?Cc(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Sc&&n.locale!=="ko"&&(Rn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Rn&&(N=kc()):(Yt=x,go="value"in Yt?Yt.value:Yt.textContent,Rn=!0)),b=$a(p,C),0<b.length&&(C=new As(C,e,null,n,x),i.push({event:C,listeners:b}),N?C.data=N:(N=Ac(n),N!==null&&(C.data=N)))),(N=wp?kp(e,n):Sp(e,n))&&(p=$a(p,"onBeforeInput"),0<p.length&&(x=new As("onBeforeInput","beforeinput",null,n,x),i.push({event:x,listeners:p}),x.data=N))}Oc(i,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $a(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Or(e,n),l!=null&&r.unshift(Gr(e,l,a)),l=Or(e,t),l!=null&&r.push(Gr(e,l,a))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var u=n,c=u.alternate,p=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&p!==null&&(u=p,a?(c=Or(n,l),c!=null&&o.unshift(Gr(n,c,u))):a||(c=Or(n,l),c!=null&&o.push(Gr(n,c,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Op=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(Op,`
`).replace(Fp,"")}function pa(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(A(425))}function Va(){}var Ei=null,Ti=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(Hp)}:ji;function Hp(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Br(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),ht="__reactFiber$"+ur,Ur="__reactProps$"+ur,Mt="__reactContainer$"+ur,Ii="__reactEvents$"+ur,$p="__reactListeners$"+ur,Vp="__reactHandles$"+ur;function yn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bs(e);e!==null;){if(n=e[ht])return n;e=Bs(e)}return t}e=n,n=e.parentNode}return null}function ta(e){return e=e[ht]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function pl(e){return e[Ur]||null}var Mi=[],Bn=-1;function un(e){return{current:e}}function J(e){0>Bn||(e.current=Mi[Bn],Mi[Bn]=null,Bn--)}function Y(e,t){Bn++,Mi[Bn]=e.current,e.current=t}var on={},Ce=un(on),Le=un(!1),Sn=on;function er(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Re(e){return e=e.childContextTypes,e!=null}function Ga(){J(Le),J(Ce)}function Hs(e,t,n){if(Ce.current!==on)throw Error(A(168));Y(Ce,t),Y(Le,n)}function Dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(A(108,bf(e)||"Unknown",a));return re({},n,r)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Sn=Ce.current,Y(Ce,e),Y(Le,Le.current),!0}function $s(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Dc(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,J(Le),J(Ce),Y(Ce,e)):J(Le),Y(Le,n)}var Et=null,ml=!1,Gl=!1;function Bc(e){Et===null?Et=[e]:Et.push(e)}function Gp(e){ml=!0,Bc(e)}function cn(){if(!Gl&&Et!==null){Gl=!0;var e=0,t=X;try{var n=Et;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,ml=!1}catch(a){throw Et!==null&&(Et=Et.slice(e+1)),dc(fo,cn),a}finally{X=t,Gl=!1}}return null}var Hn=[],$n=0,Xa=null,Qa=0,Xe=[],Qe=0,Cn=null,Tt=1,Pt="";function mn(e,t){Hn[$n++]=Qa,Hn[$n++]=Xa,Xa=e,Qa=t}function Hc(e,t,n){Xe[Qe++]=Tt,Xe[Qe++]=Pt,Xe[Qe++]=Cn,Cn=e;var r=Tt;e=Pt;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var l=32-ot(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Tt=1<<32-ot(t)+a|n<<a|r,Pt=l+e}else Tt=1<<l|n<<a|r,Pt=e}function wo(e){e.return!==null&&(mn(e,1),Hc(e,1,0))}function ko(e){for(;e===Xa;)Xa=Hn[--$n],Hn[$n]=null,Qa=Hn[--$n],Hn[$n]=null;for(;e===Cn;)Cn=Xe[--Qe],Xe[Qe]=null,Pt=Xe[--Qe],Xe[Qe]=null,Tt=Xe[--Qe],Xe[Qe]=null}var He=null,Be=null,ee=!1,it=null;function $c(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Be=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Tt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Be=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Li(e){if(ee){var t=Be;if(t){var n=t;if(!Vs(e,t)){if(zi(e))throw Error(A(418));t=en(n.nextSibling);var r=He;t&&Vs(e,t)?$c(r,n):(e.flags=e.flags&-4097|2,ee=!1,He=e)}}else{if(zi(e))throw Error(A(418));e.flags=e.flags&-4097|2,ee=!1,He=e}}}function Gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ma(e){if(e!==He)return!1;if(!ee)return Gs(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=Be)){if(zi(e))throw Vc(),Error(A(418));for(;t;)$c(e,t),t=en(t.nextSibling)}if(Gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=He?en(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=Be;e;)e=en(e.nextSibling)}function tr(){Be=He=null,ee=!1}function So(e){it===null?it=[e]:it.push(e)}var Up=Rt.ReactCurrentBatchConfig;function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var u=a.refs;o===null?delete u[l]:u[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ha(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Us(e){var t=e._init;return t(e._payload)}function Gc(e){function t(f,m){if(e){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function a(f,m){return f=an(f,m),f.index=0,f.sibling=null,f}function l(f,m,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=2,m):v):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,m,v,w){return m===null||m.tag!==6?(m=Zl(v,f.mode,w),m.return=f,m):(m=a(m,v),m.return=f,m)}function c(f,m,v,w){var S=v.type;return S===Ln?x(f,m,v.props.children,w,v.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&Us(S)===m.type)?(w=a(m,v.props),w.ref=yr(f,m,v),w.return=f,w):(w=za(v.type,v.key,v.props,null,f.mode,w),w.ref=yr(f,m,v),w.return=f,w)}function p(f,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Jl(v,f.mode,w),m.return=f,m):(m=a(m,v.children||[]),m.return=f,m)}function x(f,m,v,w,S){return m===null||m.tag!==7?(m=kn(v,f.mode,w,S),m.return=f,m):(m=a(m,v),m.return=f,m)}function i(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zl(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case aa:return v=za(m.type,m.key,m.props,null,f.mode,v),v.ref=yr(f,null,m),v.return=f,v;case zn:return m=Jl(m,f.mode,v),m.return=f,m;case Ut:var w=m._init;return i(f,w(m._payload),v)}if(Sr(m)||pr(m))return m=kn(m,f.mode,v,null),m.return=f,m;ha(f,m)}return null}function s(f,m,v,w){var S=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:u(f,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case aa:return v.key===S?c(f,m,v,w):null;case zn:return v.key===S?p(f,m,v,w):null;case Ut:return S=v._init,s(f,m,S(v._payload),w)}if(Sr(v)||pr(v))return S!==null?null:x(f,m,v,w,null);ha(f,v)}return null}function d(f,m,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,u(m,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case aa:return f=f.get(w.key===null?v:w.key)||null,c(m,f,w,S);case zn:return f=f.get(w.key===null?v:w.key)||null,p(m,f,w,S);case Ut:var b=w._init;return d(f,m,v,b(w._payload),S)}if(Sr(w)||pr(w))return f=f.get(v)||null,x(m,f,w,S,null);ha(m,w)}return null}function g(f,m,v,w){for(var S=null,b=null,N=m,C=m=0,I=null;N!==null&&C<v.length;C++){N.index>C?(I=N,N=null):I=N.sibling;var z=s(f,N,v[C],w);if(z===null){N===null&&(N=I);break}e&&N&&z.alternate===null&&t(f,N),m=l(z,m,C),b===null?S=z:b.sibling=z,b=z,N=I}if(C===v.length)return n(f,N),ee&&mn(f,C),S;if(N===null){for(;C<v.length;C++)N=i(f,v[C],w),N!==null&&(m=l(N,m,C),b===null?S=N:b.sibling=N,b=N);return ee&&mn(f,C),S}for(N=r(f,N);C<v.length;C++)I=d(N,f,C,v[C],w),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?C:I.key),m=l(I,m,C),b===null?S=I:b.sibling=I,b=I);return e&&N.forEach(function(W){return t(f,W)}),ee&&mn(f,C),S}function y(f,m,v,w){var S=pr(v);if(typeof S!="function")throw Error(A(150));if(v=S.call(v),v==null)throw Error(A(151));for(var b=S=null,N=m,C=m=0,I=null,z=v.next();N!==null&&!z.done;C++,z=v.next()){N.index>C?(I=N,N=null):I=N.sibling;var W=s(f,N,z.value,w);if(W===null){N===null&&(N=I);break}e&&N&&W.alternate===null&&t(f,N),m=l(W,m,C),b===null?S=W:b.sibling=W,b=W,N=I}if(z.done)return n(f,N),ee&&mn(f,C),S;if(N===null){for(;!z.done;C++,z=v.next())z=i(f,z.value,w),z!==null&&(m=l(z,m,C),b===null?S=z:b.sibling=z,b=z);return ee&&mn(f,C),S}for(N=r(f,N);!z.done;C++,z=v.next())z=d(N,f,C,z.value,w),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?C:z.key),m=l(z,m,C),b===null?S=z:b.sibling=z,b=z);return e&&N.forEach(function(xe){return t(f,xe)}),ee&&mn(f,C),S}function _(f,m,v,w){if(typeof v=="object"&&v!==null&&v.type===Ln&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case aa:e:{for(var S=v.key,b=m;b!==null;){if(b.key===S){if(S=v.type,S===Ln){if(b.tag===7){n(f,b.sibling),m=a(b,v.props.children),m.return=f,f=m;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&Us(S)===b.type){n(f,b.sibling),m=a(b,v.props),m.ref=yr(f,b,v),m.return=f,f=m;break e}n(f,b);break}else t(f,b);b=b.sibling}v.type===Ln?(m=kn(v.props.children,f.mode,w,v.key),m.return=f,f=m):(w=za(v.type,v.key,v.props,null,f.mode,w),w.ref=yr(f,m,v),w.return=f,f=w)}return o(f);case zn:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),m=a(m,v.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=Jl(v,f.mode,w),m.return=f,f=m}return o(f);case Ut:return b=v._init,_(f,m,b(v._payload),w)}if(Sr(v))return g(f,m,v,w);if(pr(v))return y(f,m,v,w);ha(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),m=a(m,v),m.return=f,f=m):(n(f,m),m=Zl(v,f.mode,w),m.return=f,f=m),o(f)):n(f,m)}return _}var nr=Gc(!0),Uc=Gc(!1),Wa=un(null),Ya=null,Vn=null,Co=null;function Ao(){Co=Vn=Ya=null}function No(e){var t=Wa.current;J(Wa),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Ya=e,Co=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(Ya===null)throw Error(A(308));Vn=e,Ya.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var xn=null;function bo(e){xn===null?xn=[e]:xn.push(e)}function Xc(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,bo(t)):(n.next=a.next,a.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,zt(e,n)}return a=r.interleaved,a===null?(t.next=t,bo(r)):(t.next=a.next,a.next=t),r.interleaved=t,zt(e,n)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,po(e,n)}}function Xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ka(e,t,n,r){var a=e.updateQueue;Xt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var c=u,p=c.next;c.next=null,o===null?l=p:o.next=p,o=c;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==o&&(u===null?x.firstBaseUpdate=p:u.next=p,x.lastBaseUpdate=c))}if(l!==null){var i=a.baseState;o=0,x=p=c=null,u=l;do{var s=u.lane,d=u.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:d,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(s=t,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){i=g.call(d,i,s);break e}i=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,s=typeof g=="function"?g.call(d,i,s):g,s==null)break e;i=re({},i,s);break e;case 2:Xt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,s=a.effects,s===null?a.effects=[u]:s.push(u))}else d={eventTime:d,lane:s,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(p=x=d,c=i):x=x.next=d,o|=s;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;s=u,u=s.next,s.next=null,a.lastBaseUpdate=s,a.shared.pending=null}}while(!0);if(x===null&&(c=i),a.baseState=c,a.firstBaseUpdate=p,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=i}}function Qs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(A(191,a));a.call(r)}}}var na={},yt=un(na),Xr=un(na),Qr=un(na);function _n(e){if(e===na)throw Error(A(174));return e}function To(e,t){switch(Y(Qr,t),Y(Xr,e),Y(yt,na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}J(yt),Y(yt,t)}function rr(){J(yt),J(Xr),J(Qr)}function Wc(e){_n(Qr.current);var t=_n(yt.current),n=gi(t,e.type);t!==n&&(Y(Xr,e),Y(yt,n))}function Po(e){Xr.current===e&&(J(yt),J(Xr))}var te=un(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function jo(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Ta=Rt.ReactCurrentDispatcher,Xl=Rt.ReactCurrentBatchConfig,An=0,ne=null,ce=null,fe=null,Ja=!1,jr=!1,Wr=0,Xp=0;function we(){throw Error(A(321))}function Io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Mo(e,t,n,r,a,l){if(An=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ta.current=e===null||e.memoizedState===null?Kp:Zp,e=n(r,a),jr){l=0;do{if(jr=!1,Wr=0,25<=l)throw Error(A(301));l+=1,fe=ce=null,t.updateQueue=null,Ta.current=Jp,e=n(r,a)}while(jr)}if(Ta.current=qa,t=ce!==null&&ce.next!==null,An=0,fe=ce=ne=null,Ja=!1,t)throw Error(A(300));return e}function zo(){var e=Wr!==0;return Wr=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function Ze(){if(ce===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,ce=e;else{if(e===null)throw Error(A(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function Yr(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ze(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ce,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var u=o=null,c=null,p=l;do{var x=p.lane;if((An&x)===x)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var i={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(u=c=i,o=r):c=c.next=i,ne.lanes|=x,Nn|=x}p=p.next}while(p!==null&&p!==l);c===null?o=r:c.next=u,ut(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,ne.lanes|=l,Nn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);ut(l,t.memoizedState)||(ze=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Yc(){}function Kc(e,t){var n=ne,r=Ze(),a=t(),l=!ut(r.memoizedState,a);if(l&&(r.memoizedState=a,ze=!0),r=r.queue,Lo(qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Jc.bind(null,n,r,a,t),void 0,null),pe===null)throw Error(A(349));An&30||Zc(n,t,a)}return a}function Zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,ed(t)&&td(e)}function qc(e,t,n){return n(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function td(e){var t=zt(e,1);t!==null&&st(t,e,1,-1)}function Ws(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=Yp.bind(null,ne,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nd(){return Ze().memoizedState}function Pa(e,t,n,r){var a=pt();ne.flags|=e,a.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var a=Ze();r=r===void 0?null:r;var l=void 0;if(ce!==null){var o=ce.memoizedState;if(l=o.destroy,r!==null&&Io(r,o.deps)){a.memoizedState=Kr(t,n,l,r);return}}ne.flags|=e,a.memoizedState=Kr(1|t,n,l,r)}function Ys(e,t){return Pa(8390656,8,e,t)}function Lo(e,t){return hl(2048,8,e,t)}function rd(e,t){return hl(4,2,e,t)}function ad(e,t){return hl(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,ld.bind(null,t,e),n)}function Ro(){}function od(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ud(e,t,n){return An&21?(ut(n,t)||(n=mc(),ne.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Qp(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{X=n,Xl.transition=r}}function cd(){return Ze().memoizedState}function Wp(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dd(e))fd(t,n);else if(n=Xc(e,t,n,r),n!==null){var a=Te();st(n,e,r,a),pd(n,t,r)}}function Yp(e,t,n){var r=rn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(e))fd(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,n);if(a.hasEagerState=!0,a.eagerState=u,ut(u,o)){var c=t.interleaved;c===null?(a.next=a,bo(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Xc(e,t,a,r),n!==null&&(a=Te(),st(n,e,r,a),pd(n,t,r))}}function dd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function fd(e,t){jr=Ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,po(e,n)}}var qa={readContext:Ke,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Kp={readContext:Ke,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wp.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:Ro,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=Qp.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,a=pt();if(ee){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),pe===null)throw Error(A(349));An&30||Zc(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Ys(qc.bind(null,r,l,e),[e]),r.flags|=2048,Kr(9,Jc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=pt(),t=pe.identifierPrefix;if(ee){var n=Pt,r=Tt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zp={readContext:Ke,useCallback:od,useContext:Ke,useEffect:Lo,useImperativeHandle:id,useInsertionEffect:rd,useLayoutEffect:ad,useMemo:sd,useReducer:Ql,useRef:nd,useState:function(){return Ql(Yr)},useDebugValue:Ro,useDeferredValue:function(e){var t=Ze();return ud(t,ce.memoizedState,e)},useTransition:function(){var e=Ql(Yr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Kc,useId:cd,unstable_isNewReconciler:!1},Jp={readContext:Ke,useCallback:od,useContext:Ke,useEffect:Lo,useImperativeHandle:id,useInsertionEffect:rd,useLayoutEffect:ad,useMemo:sd,useReducer:Wl,useRef:nd,useState:function(){return Wl(Yr)},useDebugValue:Ro,useDeferredValue:function(e){var t=Ze();return ce===null?t.memoizedState=e:ud(t,ce.memoizedState,e)},useTransition:function(){var e=Wl(Yr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Kc,useId:cd,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),a=rn(e),l=jt(r,a);l.payload=t,n!=null&&(l.callback=n),t=tn(e,l,a),t!==null&&(st(t,e,a,r),Ea(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),a=rn(e),l=jt(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=tn(e,l,a),t!==null&&(st(t,e,a,r),Ea(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=rn(e),a=jt(n,r);a.tag=2,t!=null&&(a.callback=t),t=tn(e,a,r),t!==null&&(st(t,e,r,n),Ea(t,e,r))}};function Ks(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(a,l):!0}function md(e,t,n){var r=!1,a=on,l=t.contextType;return typeof l=="object"&&l!==null?l=Ke(l):(a=Re(t)?Sn:Ce.current,r=t.contextTypes,l=(r=r!=null)?er(e,a):on),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function Fi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Eo(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Ke(l):(l=Re(t)?Sn:Ce.current,a.context=er(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Oi(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&gl.enqueueReplaceState(a,a.state,null),Ka(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=Nf(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Di(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qp=typeof WeakMap=="function"?WeakMap:Map;function hd(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Yi=r),Di(e,t)},n}function gd(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Di(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Di(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=pm.bind(null,e,t,n),t.then(e,e))}function qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var em=Rt.ReactCurrentOwner,ze=!1;function Ee(e,t,n,r){t.child=e===null?Uc(t,null,n,r):nr(t,e.child,n,r)}function tu(e,t,n,r,a){n=n.render;var l=t.ref;return Zn(t,a),r=Mo(e,t,n,r,l,a),n=zo(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(ee&&n&&wo(t),t.flags|=1,Ee(e,t,r,a),t.child)}function nu(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Go(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vd(e,t,l,r,a)):(e=za(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(o,r)&&e.ref===t.ref)return Lt(e,t,a)}return t.flags|=1,e=an(l,r),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if($r(l,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Lt(e,t,a)}return Bi(e,t,n,r,a)}function yd(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Un,De),De|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Un,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(Un,De),De|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(Un,De),De|=r;return Ee(e,t,a,n),t.child}function xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bi(e,t,n,r,a){var l=Re(n)?Sn:Ce.current;return l=er(t,l),Zn(t,a),n=Mo(e,t,n,r,l,a),r=zo(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(ee&&r&&wo(t),t.flags|=1,Ee(e,t,n,a),t.child)}function ru(e,t,n,r,a){if(Re(n)){var l=!0;Ua(t)}else l=!1;if(Zn(t,a),t.stateNode===null)ja(e,t),md(t,n,r),Fi(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var c=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ke(p):(p=Re(n)?Sn:Ce.current,p=er(t,p));var x=n.getDerivedStateFromProps,i=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";i||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||c!==p)&&Zs(t,o,r,p),Xt=!1;var s=t.memoizedState;o.state=s,Ka(t,r,o,a),c=t.memoizedState,u!==r||s!==c||Le.current||Xt?(typeof x=="function"&&(Oi(t,n,x,r),c=t.memoizedState),(u=Xt||Ks(t,n,u,r,s,c,p))?(i||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=p,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Qc(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:at(t.type,u),o.props=p,i=t.pendingProps,s=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ke(c):(c=Re(n)?Sn:Ce.current,c=er(t,c));var d=n.getDerivedStateFromProps;(x=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==i||s!==c)&&Zs(t,o,r,c),Xt=!1,s=t.memoizedState,o.state=s,Ka(t,r,o,a);var g=t.memoizedState;u!==i||s!==g||Le.current||Xt?(typeof d=="function"&&(Oi(t,n,d,r),g=t.memoizedState),(p=Xt||Ks(t,n,p,r,s,g,c)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=c,r=p):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Hi(e,t,n,r,l,a)}function Hi(e,t,n,r,a,l){xd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&$s(t,n,!1),Lt(e,t,l);r=t.stateNode,em.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=nr(t,e.child,null,l),t.child=nr(t,null,u,l)):Ee(e,t,u,l),t.memoizedState=r.state,a&&$s(t,n,!0),t.child}function _d(e){var t=e.stateNode;t.pendingContext?Hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hs(e,t.context,!1),To(e,t.containerInfo)}function au(e,t,n,r,a){return tr(),So(a),t.flags|=256,Ee(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function wd(e,t,n){var r=t.pendingProps,a=te.current,l=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(te,a&1),e===null)return Li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=xl(o,r,0,null),e=kn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Vi(n),t.memoizedState=$i,e):Oo(t,o));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return tm(e,t,o,r,u,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,u=a.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=an(a,c),r.subtreeFlags=a.subtreeFlags&14680064),u!==null?l=an(u,l):(l=kn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Vi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return l=e.child,e=l.sibling,r=an(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oo(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ga(e,t,n,r){return r!==null&&So(r),nr(t,e.child,null,n),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tm(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(A(422))),ga(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=xl({mode:"visible",children:r.children},a,0,null),l=kn(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&nr(t,e.child,null,o),t.child.memoizedState=Vi(o),t.memoizedState=$i,l);if(!(t.mode&1))return ga(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(A(419)),r=Yl(l,r,void 0),ga(e,t,o,r)}if(u=(o&e.childLanes)!==0,ze||u){if(r=pe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,zt(e,a),st(r,e,a,-1))}return Vo(),r=Yl(Error(A(421))),ga(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=mm.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Be=en(a.nextSibling),He=t,ee=!0,it=null,e!==null&&(Xe[Qe++]=Tt,Xe[Qe++]=Pt,Xe[Qe++]=Cn,Tt=e.id,Pt=e.overflow,Cn=t),t=Oo(t,r.children),t.flags|=4096,t)}function lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function Kl(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function kd(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Ee(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(te,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Za(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Kl(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Za(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Kl(t,!0,n,null,l);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nm(e,t,n){switch(t.tag){case 3:_d(t),tr();break;case 5:Wc(t);break;case 1:Re(t.type)&&Ua(t);break;case 4:To(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Y(Wa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?wd(e,t,n):(Y(te,te.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,n)}return Lt(e,t,n)}var Sd,Gi,Cd,Ad;Sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gi=function(){};Cd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,_n(yt.current);var l=null;switch(n){case"input":a=fi(e,a),r=fi(e,r),l=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),l=[];break;case"textarea":a=hi(e,a),r=hi(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Va)}vi(n,r);var o;n=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var u=a[p];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Lr.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var c=r[p];if(u=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&c!==u&&(c!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(l=l||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&Z("scroll",e),l||u===c||(l=[])):(l=l||[]).push(p,c))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};Ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rm(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Re(t.type)&&Ga(),ke(t),null;case 3:return r=t.stateNode,rr(),J(Le),J(Ce),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Ji(it),it=null))),Gi(e,t),ke(t),null;case 5:Po(t);var a=_n(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ke(t),null}if(e=_n(yt.current),ma(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ht]=t,r[Ur]=l,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(a=0;a<Ar.length;a++)Z(Ar[a],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":ms(r,l),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Z("invalid",r);break;case"textarea":gs(r,l),Z("invalid",r)}vi(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&pa(r.textContent,u,e),a=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&pa(r.textContent,u,e),a=["children",""+u]):Lr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":la(r),hs(r,l,!0);break;case"textarea":la(r),vs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Va)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ht]=t,e[Ur]=r,Sd(e,t,!1,!1),t.stateNode=e;e:{switch(o=yi(n,r),n){case"dialog":Z("cancel",e),Z("close",e),a=r;break;case"iframe":case"object":case"embed":Z("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ar.length;a++)Z(Ar[a],e);a=r;break;case"source":Z("error",e),a=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),a=r;break;case"details":Z("toggle",e),a=r;break;case"input":ms(e,r),a=fi(e,r),Z("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),Z("invalid",e);break;case"textarea":gs(e,r),a=hi(e,r),Z("invalid",e);break;default:a=r}vi(n,a),u=a;for(l in u)if(u.hasOwnProperty(l)){var c=u[l];l==="style"?nc(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ec(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Rr(e,c):typeof c=="number"&&Rr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Lr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&Z("scroll",e):c!=null&&io(e,l,c,o))}switch(n){case"input":la(e),hs(e,r,!1);break;case"textarea":la(e),vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=_n(Qr.current),_n(yt.current),ma(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(l=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:pa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return ke(t),null;case 13:if(J(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Be!==null&&t.mode&1&&!(t.flags&128))Vc(),tr(),t.flags|=98560,l=!1;else if(l=ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(A(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(A(317));l[ht]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),l=!1}else it!==null&&(Ji(it),it=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):Vo())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return rr(),Gi(e,t),e===null&&Vr(t.stateNode.containerInfo),ke(t),null;case 10:return No(t.type._context),ke(t),null;case 17:return Re(t.type)&&Ga(),ke(t),null;case 19:if(J(te),l=t.memoizedState,l===null)return ke(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)xr(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Za(e),o!==null){for(t.flags|=128,xr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>lr&&(t.flags|=128,r=!0,xr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Za(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ee)return ke(t),null}else 2*oe()-l.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,xr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return $o(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function am(e,t){switch(ko(t),t.tag){case 1:return Re(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),J(Le),J(Ce),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Po(t),null;case 13:if(J(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(te),null;case 4:return rr(),null;case 10:return No(t.type._context),null;case 22:case 23:return $o(),null;case 24:return null;default:return null}}var va=!1,Se=!1,lm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Ui(e,t,n){try{n()}catch(r){ae(e,t,r)}}var iu=!1;function im(e,t){if(Ei=Ba,e=Pc(),_o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,u=-1,c=-1,p=0,x=0,i=e,s=null;t:for(;;){for(var d;i!==n||a!==0&&i.nodeType!==3||(u=o+a),i!==l||r!==0&&i.nodeType!==3||(c=o+r),i.nodeType===3&&(o+=i.nodeValue.length),(d=i.firstChild)!==null;)s=i,i=d;for(;;){if(i===e)break t;if(s===n&&++p===a&&(u=o),s===l&&++x===r&&(c=o),(d=i.nextSibling)!==null)break;i=s,s=i.parentNode}i=d}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},Ba=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,_=g.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=iu,iu=!1,g}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ui(t,n,l)}a=a.next}while(a!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Ur],delete t[Ii],delete t[$p],delete t[Vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bd(e){return e.tag===5||e.tag===3||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Va));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}var ge=null,lt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Ed(e,t,n),n=n.sibling}function Ed(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Se||Gn(n,t);case 6:var r=ge,a=lt;ge=null,Gt(e,t,n),ge=r,lt=a,ge!==null&&(lt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(lt?(e=ge,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),Br(e)):Vl(ge,n.stateNode));break;case 4:r=ge,a=lt,ge=n.stateNode.containerInfo,lt=!0,Gt(e,t,n),ge=r,lt=a;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ui(n,t,o),a=a.next}while(a!==r)}Gt(e,t,n);break;case 1:if(!Se&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ae(n,t,u)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Gt(e,t,n),Se=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lm),t.forEach(function(r){var a=hm.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ge=u.stateNode,lt=!1;break e;case 3:ge=u.stateNode.containerInfo,lt=!0;break e;case 4:ge=u.stateNode.containerInfo,lt=!0;break e}u=u.return}if(ge===null)throw Error(A(160));Ed(l,o,a),ge=null,lt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(p){ae(a,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Td(t,e),t=t.sibling}function Td(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ft(e),r&4){try{Ir(3,e,e.return),vl(3,e)}catch(y){ae(e,e.return,y)}try{Ir(5,e,e.return)}catch(y){ae(e,e.return,y)}}break;case 1:rt(t,e),ft(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(rt(t,e),ft(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var a=e.stateNode;try{Rr(a,"")}catch(y){ae(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Zu(a,l),yi(u,o);var p=yi(u,l);for(o=0;o<c.length;o+=2){var x=c[o],i=c[o+1];x==="style"?nc(a,i):x==="dangerouslySetInnerHTML"?ec(a,i):x==="children"?Rr(a,i):io(a,x,i,p)}switch(u){case"input":pi(a,l);break;case"textarea":Ju(a,l);break;case"select":var s=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?Qn(a,!!l.multiple,d,!1):s!==!!l.multiple&&(l.defaultValue!=null?Qn(a,!!l.multiple,l.defaultValue,!0):Qn(a,!!l.multiple,l.multiple?[]:"",!1))}a[Ur]=l}catch(y){ae(e,e.return,y)}}break;case 6:if(rt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(A(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(y){ae(e,e.return,y)}}break;case 3:if(rt(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(y){ae(e,e.return,y)}break;case 4:rt(t,e),ft(e);break;case 13:rt(t,e),ft(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Bo=oe())),r&4&&su(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(p=Se)||x,rt(t,e),Se=p):rt(t,e),ft(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(P=e,x=e.child;x!==null;){for(i=P=x;P!==null;){switch(s=P,d=s.child,s.tag){case 0:case 11:case 14:case 15:Ir(4,s,s.return);break;case 1:Gn(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:Gn(s,s.return);break;case 22:if(s.memoizedState!==null){cu(i);continue}}d!==null?(d.return=s,P=d):cu(i)}x=x.sibling}e:for(x=null,i=e;;){if(i.tag===5){if(x===null){x=i;try{a=i.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=i.stateNode,c=i.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=tc("display",o))}catch(y){ae(e,e.return,y)}}}else if(i.tag===6){if(x===null)try{i.stateNode.nodeValue=p?"":i.memoizedProps}catch(y){ae(e,e.return,y)}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;x===i&&(x=null),i=i.return}x===i&&(x=null),i.sibling.return=i.return,i=i.sibling}}break;case 19:rt(t,e),ft(e),r&4&&su(e);break;case 21:break;default:rt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bd(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Rr(a,""),r.flags&=-33);var l=ou(e);Wi(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,u=ou(e);Qi(e,u,o);break;default:throw Error(A(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function om(e,t,n){P=e,Pd(e)}function Pd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||va;if(!o){var u=a.alternate,c=u!==null&&u.memoizedState!==null||Se;u=va;var p=Se;if(va=o,(Se=c)&&!p)for(P=a;P!==null;)o=P,c=o.child,o.tag===22&&o.memoizedState!==null?du(a):c!==null?(c.return=o,P=c):du(a);for(;l!==null;)P=l,Pd(l),l=l.sibling;P=a,va=u,Se=p}uu(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,P=l):uu(e)}}function uu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Qs(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qs(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var i=x.dehydrated;i!==null&&Br(i)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Se||t.flags&512&&Xi(t)}catch(s){ae(t,t.return,s)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function cu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function du(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(c){ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){ae(t,a,c)}}var l=t.return;try{Xi(t)}catch(c){ae(t,l,c)}break;case 5:var o=t.return;try{Xi(t)}catch(c){ae(t,o,c)}}}catch(c){ae(t,t.return,c)}if(t===e){P=null;break}var u=t.sibling;if(u!==null){u.return=t.return,P=u;break}P=t.return}}var sm=Math.ceil,el=Rt.ReactCurrentDispatcher,Fo=Rt.ReactCurrentOwner,Ye=Rt.ReactCurrentBatchConfig,D=0,pe=null,ue=null,ve=0,De=0,Un=un(0),de=0,Zr=null,Nn=0,yl=0,Do=0,Mr=null,Me=null,Bo=0,lr=1/0,bt=null,tl=!1,Yi=null,nn=null,ya=!1,Kt=null,nl=0,zr=0,Ki=null,Ia=-1,Ma=0;function Te(){return D&6?oe():Ia!==-1?Ia:Ia=oe()}function rn(e){return e.mode&1?D&2&&ve!==0?ve&-ve:Up.transition!==null?(Ma===0&&(Ma=mc()),Ma):(e=X,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e):1}function st(e,t,n,r){if(50<zr)throw zr=0,Ki=null,Error(A(185));qr(e,n,r),(!(D&2)||e!==pe)&&(e===pe&&(!(D&2)&&(yl|=n),de===4&&Wt(e,ve)),Oe(e,r),n===1&&D===0&&!(t.mode&1)&&(lr=oe()+500,ml&&cn()))}function Oe(e,t){var n=e.callbackNode;Uf(e,t);var r=Da(e,e===pe?ve:0);if(r===0)n!==null&&_s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_s(n),t===1)e.tag===0?Gp(fu.bind(null,e)):Bc(fu.bind(null,e)),Bp(function(){!(D&6)&&cn()}),n=null;else{switch(hc(r)){case 1:n=fo;break;case 4:n=fc;break;case 16:n=Fa;break;case 536870912:n=pc;break;default:n=Fa}n=Fd(n,jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jd(e,t){if(Ia=-1,Ma=0,D&6)throw Error(A(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Da(e,e===pe?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var a=D;D|=2;var l=Md();(pe!==e||ve!==t)&&(bt=null,lr=oe()+500,wn(e,t));do try{dm();break}catch(u){Id(e,u)}while(!0);Ao(),el.current=l,D=a,ue!==null?t=0:(pe=null,ve=0,t=de)}if(t!==0){if(t===2&&(a=Si(e),a!==0&&(r=a,t=Zi(e,a))),t===1)throw n=Zr,wn(e,0),Wt(e,r),Oe(e,oe()),n;if(t===6)Wt(e,r);else{if(a=e.current.alternate,!(r&30)&&!um(a)&&(t=rl(e,r),t===2&&(l=Si(e),l!==0&&(r=l,t=Zi(e,l))),t===1))throw n=Zr,wn(e,0),Wt(e,r),Oe(e,oe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:hn(e,Me,bt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Bo+500-oe(),10<t)){if(Da(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ji(hn.bind(null,e,Me,bt),t);break}hn(e,Me,bt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-ot(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sm(r/1960))-r,10<r){e.timeoutHandle=ji(hn.bind(null,e,Me,bt),r);break}hn(e,Me,bt);break;case 5:hn(e,Me,bt);break;default:throw Error(A(329))}}}return Oe(e,oe()),e.callbackNode===n?jd.bind(null,e):null}function Zi(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=rl(e,t),e!==2&&(t=Me,Me=n,t!==null&&Ji(t)),e}function Ji(e){Me===null?Me=e:Me.push.apply(Me,e)}function um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!ut(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Do,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if(D&6)throw Error(A(327));Jn();var t=Da(e,0);if(!(t&1))return Oe(e,oe()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Zi(e,r))}if(n===1)throw n=Zr,wn(e,0),Wt(e,t),Oe(e,oe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Me,bt),Oe(e,oe()),null}function Ho(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(lr=oe()+500,ml&&cn())}}function bn(e){Kt!==null&&Kt.tag===0&&!(D&6)&&Jn();var t=D;D|=1;var n=Ye.transition,r=X;try{if(Ye.transition=null,X=1,e)return e()}finally{X=r,Ye.transition=n,D=t,!(D&6)&&cn()}}function $o(){De=Un.current,J(Un)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dp(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:rr(),J(Le),J(Ce),jo();break;case 5:Po(r);break;case 4:rr();break;case 13:J(te);break;case 19:J(te);break;case 10:No(r.type._context);break;case 22:case 23:$o()}n=n.return}if(pe=e,ue=e=an(e.current,null),ve=De=t,de=0,Zr=null,Do=yl=Nn=0,Me=Mr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}xn=null}return e}function Id(e,t){do{var n=ue;try{if(Ao(),Ta.current=qa,Ja){for(var r=ne.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ja=!1}if(An=0,fe=ce=ne=null,jr=!1,Wr=0,Fo.current=null,n===null||n.return===null){de=1,Zr=t,ue=null;break}e:{var l=e,o=n.return,u=n,c=t;if(t=ve,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,x=u,i=x.tag;if(!(x.mode&1)&&(i===0||i===11||i===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var d=qs(o);if(d!==null){d.flags&=-257,eu(d,o,u,l,t),d.mode&1&&Js(l,p,t),t=d,c=p;var g=t.updateQueue;if(g===null){var y=new Set;y.add(c),t.updateQueue=y}else g.add(c);break e}else{if(!(t&1)){Js(l,p,t),Vo();break e}c=Error(A(426))}}else if(ee&&u.mode&1){var _=qs(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),eu(_,o,u,l,t),So(ar(c,u));break e}}l=c=ar(c,u),de!==4&&(de=2),Mr===null?Mr=[l]:Mr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=hd(l,c,t);Xs(l,f);break e;case 1:u=c;var m=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nn===null||!nn.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=gd(l,u,t);Xs(l,w);break e}}l=l.return}while(l!==null)}Ld(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Md(){var e=el.current;return el.current=qa,e===null?qa:e}function Vo(){(de===0||de===3||de===2)&&(de=4),pe===null||!(Nn&268435455)&&!(yl&268435455)||Wt(pe,ve)}function rl(e,t){var n=D;D|=2;var r=Md();(pe!==e||ve!==t)&&(bt=null,wn(e,t));do try{cm();break}catch(a){Id(e,a)}while(!0);if(Ao(),D=n,el.current=r,ue!==null)throw Error(A(261));return pe=null,ve=0,de}function cm(){for(;ue!==null;)zd(ue)}function dm(){for(;ue!==null&&!Rf();)zd(ue)}function zd(e){var t=Od(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Ld(e):ue=t,Fo.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=am(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ue=null;return}}else if(n=rm(n,t,De),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);de===0&&(de=5)}function hn(e,t,n){var r=X,a=Ye.transition;try{Ye.transition=null,X=1,fm(e,t,n,r)}finally{Ye.transition=a,X=r}return null}function fm(e,t,n,r){do Jn();while(Kt!==null);if(D&6)throw Error(A(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Xf(e,l),e===pe&&(ue=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,Fd(Fa,function(){return Jn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ye.transition,Ye.transition=null;var o=X;X=1;var u=D;D|=4,Fo.current=null,im(e,n),Td(n,e),Ip(Ti),Ba=!!Ei,Ti=Ei=null,e.current=n,om(n),Of(),D=u,X=o,Ye.transition=l}else e.current=n;if(ya&&(ya=!1,Kt=e,nl=a),l=e.pendingLanes,l===0&&(nn=null),Bf(n.stateNode),Oe(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(tl)throw tl=!1,e=Yi,Yi=null,e;return nl&1&&e.tag!==0&&Jn(),l=e.pendingLanes,l&1?e===Ki?zr++:(zr=0,Ki=e):zr=0,cn(),null}function Jn(){if(Kt!==null){var e=hc(nl),t=Ye.transition,n=X;try{if(Ye.transition=null,X=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,nl=0,D&6)throw Error(A(331));var a=D;for(D|=4,P=e.current;P!==null;){var l=P,o=l.child;if(P.flags&16){var u=l.deletions;if(u!==null){for(var c=0;c<u.length;c++){var p=u[c];for(P=p;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:Ir(8,x,l)}var i=x.child;if(i!==null)i.return=x,P=i;else for(;P!==null;){x=P;var s=x.sibling,d=x.return;if(Nd(x),x===p){P=null;break}if(s!==null){s.return=d,P=s;break}P=d}}}var g=l.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}P=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,P=o;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ir(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var m=e.current;for(P=m;P!==null;){o=P;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,P=v;else e:for(o=m;P!==null;){if(u=P,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:vl(9,u)}}catch(S){ae(u,u.return,S)}if(u===o){P=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,P=w;break e}P=u.return}}if(D=a,cn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ul,e)}catch{}r=!0}return r}finally{X=n,Ye.transition=t}}return!1}function pu(e,t,n){t=ar(n,t),t=hd(e,t,1),e=tn(e,t,1),t=Te(),e!==null&&(qr(e,1,t),Oe(e,t))}function ae(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=ar(n,e),e=gd(t,e,1),t=tn(t,e,1),e=Te(),t!==null&&(qr(t,1,e),Oe(t,e));break}}t=t.return}}function pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ve&n)===n&&(de===4||de===3&&(ve&130023424)===ve&&500>oe()-Bo?wn(e,0):Do|=n),Oe(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):t=1);var n=Te();e=zt(e,t),e!==null&&(qr(e,t,n),Oe(e,n))}function mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function hm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Rd(e,n)}var Od;Od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,nm(e,t,n);ze=!!(e.flags&131072)}else ze=!1,ee&&t.flags&1048576&&Hc(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ja(e,t),e=t.pendingProps;var a=er(t,Ce.current);Zn(t,n),a=Mo(null,t,r,e,a,n);var l=zo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(l=!0,Ua(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Eo(t),a.updater=gl,t.stateNode=a,a._reactInternals=t,Fi(t,r,e,n),t=Hi(null,t,r,!0,l,n)):(t.tag=0,ee&&l&&wo(t),Ee(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ja(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=vm(r),e=at(r,e),a){case 0:t=Bi(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,at(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),Bi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),ru(e,t,r,a,n);case 3:e:{if(_d(t),e===null)throw Error(A(387));r=t.pendingProps,l=t.memoizedState,a=l.element,Qc(e,t),Ka(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=ar(Error(A(423)),t),t=au(e,t,r,n,a);break e}else if(r!==a){a=ar(Error(A(424)),t),t=au(e,t,r,n,a);break e}else for(Be=en(t.stateNode.containerInfo.firstChild),He=t,ee=!0,it=null,n=Uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===a){t=Lt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Wc(t),e===null&&Li(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Pi(r,a)?o=null:l!==null&&Pi(r,l)&&(t.flags|=32),xd(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&Li(t),null;case 13:return wd(e,t,n);case 4:return To(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),tu(e,t,r,a,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,Y(Wa,r._currentValue),r._currentValue=o,l!==null)if(ut(l.value,o)){if(l.children===a.children&&!Le.current){t=Lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=jt(-1,n&-n),c.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?c.next=c:(c.next=x.next,x.next=c),p.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ri(l.return,n,t),u.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(A(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ri(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ee(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Zn(t,n),a=Ke(a),r=r(a),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,a=at(r,t.pendingProps),a=at(r.type,a),nu(e,t,r,a,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:at(r,a),ja(e,t),t.tag=1,Re(r)?(e=!0,Ua(t)):e=!1,Zn(t,n),md(t,r,a),Fi(t,r,a,n),Hi(null,t,r,!0,e,n);case 19:return kd(e,t,n);case 22:return yd(e,t,n)}throw Error(A(156,t.tag))};function Fd(e,t){return dc(e,t)}function gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new gm(e,t,n,r)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vm(e){if(typeof e=="function")return Go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===so)return 11;if(e===uo)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function za(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")Go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ln:return kn(n.children,a,l,t);case oo:o=8,a|=8;break;case si:return e=We(12,n,t,a|2),e.elementType=si,e.lanes=l,e;case ui:return e=We(13,n,t,a),e.elementType=ui,e.lanes=l,e;case ci:return e=We(19,n,t,a),e.elementType=ci,e.lanes=l,e;case Wu:return xl(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xu:o=10;break e;case Qu:o=9;break e;case so:o=11;break e;case uo:o=14;break e;case Ut:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=We(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function kn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function xl(e,t,n,r){return e=We(22,e,r,t),e.elementType=Wu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Uo(e,t,n,r,a,l,o,u,c){return e=new ym(e,t,n,u,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(l),e}function xm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dd(e){if(!e)return on;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Re(n))return Dc(e,n,t)}return t}function Bd(e,t,n,r,a,l,o,u,c){return e=Uo(n,r,!0,e,a,l,o,u,c),e.context=Dd(null),n=e.current,r=Te(),a=rn(n),l=jt(r,a),l.callback=t??null,tn(n,l,a),e.current.lanes=a,qr(e,a,r),Oe(e,r),e}function _l(e,t,n,r){var a=t.current,l=Te(),o=rn(a);return n=Dd(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(a,t,o),e!==null&&(st(e,a,o,l),Ea(e,a,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xo(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function _m(){return null}var Hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qo(e){this._internalRoot=e}wl.prototype.render=Qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));_l(e,t,null,null)};wl.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){_l(null,e,null,null)}),t[Mt]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&_c(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function wm(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var p=al(o);l.call(p)}}var o=Bd(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=o,e[Mt]=o.current,Vr(e.nodeType===8?e.parentNode:e),bn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var u=r;r=function(){var p=al(c);u.call(p)}}var c=Uo(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=c,e[Mt]=c.current,Vr(e.nodeType===8?e.parentNode:e),bn(function(){_l(t,c,n,r)}),c}function Sl(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var u=a;a=function(){var c=al(o);u.call(c)}}_l(t,o,e,a)}else o=wm(n,t,e,a,r);return al(o)}gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(po(t,n|1),Oe(t,oe()),!(D&6)&&(lr=oe()+500,cn()))}break;case 13:bn(function(){var r=zt(e,1);if(r!==null){var a=Te();st(r,e,1,a)}}),Xo(e,1)}};mo=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Te();st(t,e,134217728,n)}Xo(e,134217728)}};vc=function(e){if(e.tag===13){var t=rn(e),n=zt(e,t);if(n!==null){var r=Te();st(n,e,t,r)}Xo(e,t)}};yc=function(){return X};xc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};_i=function(e,t,n){switch(t){case"input":if(pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=pl(r);if(!a)throw Error(A(90));Ku(r),pi(r,a)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};lc=Ho;ic=bn;var km={usingClientEntryPoint:!1,Events:[ta,Dn,pl,rc,ac,Ho]},_r={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sm={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||_m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{ul=xa.inject(Sm),vt=xa}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(t))throw Error(A(200));return xm(e,t,null,n)};Ve.createRoot=function(e,t){if(!Wo(e))throw Error(A(299));var n=!1,r="",a=Hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Uo(e,1,!1,null,null,n,!1,r,a),e[Mt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new Qo(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=uc(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return bn(e)};Ve.hydrate=function(e,t,n){if(!kl(t))throw Error(A(200));return Sl(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Wo(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=Hd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bd(t,null,e,1,n??null,a,!1,l,o),e[Mt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new wl(t)};Ve.render=function(e,t,n){if(!kl(t))throw Error(A(200));return Sl(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!kl(e))throw Error(A(40));return e._reactRootContainer?(bn(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ho;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Sl(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),$u.exports=Ve;var Cm=$u.exports,gu=Cm;ii.createRoot=gu.createRoot,ii.hydrateRoot=gu.hydrateRoot;const vu=({onStart:e,onSettings:t,onHelp:n})=>h.jsxs("div",{className:"cg-main-menu",children:[h.jsxs("div",{className:"cg-menu-bg",children:[h.jsx("div",{className:"cg-menu-bg-gradient"}),h.jsx("div",{className:"cg-menu-bg-pattern"}),h.jsx("div",{className:"cg-menu-geass-symbols",children:h.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:h.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),h.jsxs("div",{className:"cg-menu-content",children:[h.jsxs("div",{className:"cg-menu-header",children:[h.jsxs("div",{className:"cg-menu-title-decoration",children:[h.jsx("div",{className:"cg-title-line-left"}),h.jsx("div",{className:"cg-title-ornament",children:h.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:h.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),h.jsx("div",{className:"cg-title-line-right"})]}),h.jsxs("h1",{className:"cg-game-title",children:[h.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),h.jsx("span",{className:"cg-title-divider",children:":"}),h.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),h.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),h.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[h.jsx("div",{className:"cg-title-line-left"}),h.jsx("div",{className:"cg-title-ornament",children:h.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[h.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),h.jsx("div",{className:"cg-title-line-right"})]})]}),h.jsxs("nav",{className:"cg-menu-nav",children:[h.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M8 5v14l11-7z"})})}),h.jsx("span",{className:"cg-button-text",children:"开始游戏"}),h.jsx("div",{className:"cg-button-shimmer"})]}),h.jsxs("button",{className:"cg-menu-button",onClick:t,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),h.jsx("span",{className:"cg-button-text",children:"设置"})]}),h.jsxs("button",{className:"cg-menu-button",onClick:n,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),h.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),h.jsx("footer",{className:"cg-menu-footer",children:h.jsx("div",{className:"cg-footer-decoration",children:h.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),h.jsx("style",{children:`
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
      `})]}),ll=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function Am(e){return ll.find(t=>t.id===e)}function mt(e){if(!e)return"未知角色";const t=Am(e);return(t==null?void 0:t.name)||e}const Nm=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},bm=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let ql=null;const il=()=>(ql===null&&(ql=Nm()),ql),Em=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:a})=>{const[l,o]=E.useState(!1),[u,c]=E.useState(r),[p,x]=E.useState(!1),[i,s]=E.useState(!0),d=E.useRef(null),g=E.useRef(null),[y]=E.useState(()=>Math.floor(Math.random()*4)+1),_=n||y,f=E.useMemo(()=>bm(t),[t]),m=E.useCallback((v=!0)=>`${`avatars/${e}/${_}`}-${f}.${v?"webp":"png"}`,[e,_,f]);return E.useEffect(()=>{if(r||u)return;const v=new IntersectionObserver(S=>{S.forEach(b=>{b.isIntersecting&&c(!0)})},{rootMargin:"50px",threshold:.1}),w=g.current;return w&&v.observe(w),()=>{w&&v.unobserve(w),v.disconnect()}},[r,u]),E.useEffect(()=>{if(!u)return;(async()=>{if(il()&&i){const S=new Image;S.src=m(!0),S.onload=()=>{o(!0),a==null||a()},S.onerror=()=>{s(!1)}}else{const S=new Image;S.src=m(!1),S.onload=()=>{o(!0),a==null||a()},S.onerror=()=>{x(!0)}}})()},[u,m,a,i]),h.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!l&&!p&&h.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:h.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&h.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),u&&h.jsxs("picture",{children:[il()&&i&&h.jsx("source",{srcSet:m(!0),type:"image/webp"}),h.jsx("img",{ref:d,src:m(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:l?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),h.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class ol{static preloadCharacter(t){const n=["small","medium","large"],r=il();for(let a=1;a<=4;a++)n.forEach(l=>{const o=`avatars/${t}/${a}-${l}.webp`,u=`avatars/${t}/${a}-${l}.png`;if(r&&!this.preloadedAvatars.has(o)){const c=new Image;c.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(u)){const c=new Image;c.src=u,this.preloadedAvatars.add(u)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(il()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}}const l=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(l)){const o=new Image;o.src=l,this.preloadedAvatars.add(l)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}ie(ol,"preloadedAvatars",new Set);const Yo=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>h.jsx(Em,{characterId:e,size:t,avatarNumber:n??1,priority:r}),Tm=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[a,l]=E.useState(null),[o]=E.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),u=ll.find(p=>p.id===e);E.useEffect(()=>{e&&ol.preloadAvatar(e,o[e])},[e,o]);const c=p=>{const x=o[p];t(p,x)};return h.jsxs("div",{className:"cg-character-select",children:[h.jsxs("div",{className:"cg-select-bg",children:[h.jsx("div",{className:"cg-select-bg-gradient"}),h.jsx("div",{className:"cg-select-bg-pattern"})]}),h.jsxs("div",{className:"cg-select-content",children:[h.jsxs("header",{className:"cg-select-header",children:[h.jsxs("button",{className:"cg-back-button",onClick:r,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),h.jsx("span",{children:"返回"})]}),h.jsx("h2",{className:"cg-select-title",children:h.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),h.jsx("div",{className:"cg-select-placeholder"})]}),h.jsx("div",{className:"cg-character-grid",children:ll.map(p=>{const x=e===p.id,i=a===p.id;return h.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${i?"cg-hovered":""}`,onClick:()=>c(p.id),onMouseEnter:()=>l(p.id),onMouseLeave:()=>l(null),children:[h.jsxs("div",{className:"cg-card-frame",children:[h.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),h.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),h.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),h.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),h.jsx("div",{className:"cg-character-preview",children:h.jsx(Yo,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:a===p.id||e===p.id})}),h.jsxs("div",{className:"cg-character-info",children:[h.jsx("h3",{className:"cg-character-name",children:p.name}),h.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),h.jsx("div",{className:"cg-character-skill",children:h.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),x&&h.jsx("div",{className:"cg-selected-indicator",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:h.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),h.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),u&&h.jsx("div",{className:"cg-character-detail",children:h.jsxs("div",{className:"cg-detail-frame",children:[h.jsxs("div",{className:"cg-detail-content",children:[h.jsx("p",{className:"cg-detail-description",children:u.description}),h.jsxs("div",{className:"cg-detail-skill",children:[h.jsx("span",{className:"cg-skill-label",children:"技能:"}),h.jsx("span",{className:"cg-skill-value",children:u.skill.name}),h.jsx("p",{className:"cg-skill-desc",children:u.skill.description})]})]}),h.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[h.jsx("span",{children:"确认选择"}),h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),h.jsx("style",{children:`
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
      `})]})},Pm="/liars-game/assets/cards/card-back.svg",fn={play:1500,aiPlay:1500,challenge:1500,dodge:1500,hit:1500,skip:1500,think:1e3},pn={play:3,aiPlay:3,challenge:5,dodge:4,hit:4,skip:2,think:1},yu={play:{duration:fn.play,priority:pn.play,interruptible:!1},aiPlay:{duration:fn.aiPlay,priority:pn.aiPlay,interruptible:!1},challenge:{duration:fn.challenge,priority:pn.challenge,interruptible:!0},dodge:{duration:fn.dodge,priority:pn.dodge,interruptible:!0},hit:{duration:fn.hit,priority:pn.hit,interruptible:!0},skip:{duration:fn.skip,priority:pn.skip,interruptible:!0},think:{duration:fn.think,priority:pn.think,interruptible:!0}},ir={play:"出牌",aiPlay:"出牌",challenge:"质疑",dodge:"闪避",hit:"命中",skip:"跳过",think:"思考中..."},xu={MAX_QUEUE_SIZE:10,BUFFER_TIME:100},Vd={lelouch:{id:"lelouch",displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{id:"cc",displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{id:"suzaku",displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{id:"kallen",displayName:"卡莲",colorTheme:"#dc2626"}},jm={player:null,ai:"cc",ai2:"suzaku",ai3:"kallen"},Im={lelouch:null,cc:"ai",suzaku:"ai2",kallen:"ai3"};function ei(e,t,n){const r=Vd[e];return{characterId:e,displayName:r.displayName,playerId:t,animationTexts:{...ir,...n},colorTheme:r.colorTheme}}const _u={player:{characterId:"lelouch",displayName:"玩家",playerId:"player",animationTexts:{...ir},colorTheme:"#d4af37"},ai:ei("cc","ai"),ai2:ei("suzaku","ai2"),ai3:ei("kallen","ai3")};class Mm{constructor(){ie(this,"registry");ie(this,"playerCharacterId",null);this.registry={..._u}}setPlayerCharacter(t){this.playerCharacterId=t;const n=Vd[t];this.registry.player={characterId:t,displayName:n.displayName,playerId:"player",animationTexts:{...ir},colorTheme:n.colorTheme}}getPlayerCharacterId(){return this.playerCharacterId}getCharacterConfig(t){return this.registry[t]}getPlayerIdByCharacterId(t){return Im[t]}getCharacterIdByPlayerId(t){return jm[t]}getDisplayName(t){const n=this.registry[t];return(n==null?void 0:n.displayName)||"未知角色"}getColorTheme(t){const n=this.registry[t];return(n==null?void 0:n.colorTheme)||"#d4af37"}getAnimationText(t,n){var a;const r=this.registry[t];return((a=r==null?void 0:r.animationTexts)==null?void 0:a[n])||ir[n]}reset(){this.registry={..._u},this.playerCharacterId=null}getRegistry(){return{...this.registry}}}const Cl=new Mm,zm=e=>Cl.setPlayerCharacter(e),Lm=e=>Cl.getPlayerIdByCharacterId(e),wr=e=>Cl.getDisplayName(e),_a=e=>Cl.getColorTheme(e),Rm=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Mn=e=>({type:null,text:"",startTime:0,duration:0,playerId:e});function Om(){const[e,t]=E.useState({player:Mn("player"),ai:Mn("ai"),ai2:Mn("ai2"),ai3:Mn("ai3")}),[n,r]=E.useState({playerId:null,type:null,text:"",startTime:0}),[a,l]=E.useState({items:[],current:null,isProcessing:!1}),[o,u]=E.useState({show:!1,targetId:null}),c=E.useRef({}),p=E.useRef(!1),x=E.useCallback((_,f,m)=>{const v=yu[f],w=m||ir[f];t(S=>({...S,[_]:{type:f,text:w,startTime:Date.now(),duration:v.duration,playerId:_}})),c.current[_]&&clearTimeout(c.current[_]),c.current[_]=setTimeout(()=>{t(S=>({...S,[_]:Mn(_)}))},v.duration)},[]),i=E.useCallback((_,f,m)=>{c.current.persistent&&clearTimeout(c.current.persistent),r({playerId:_,type:f,text:m,startTime:Date.now()})},[]),s=E.useCallback(_=>{c.current[_]&&(clearTimeout(c.current[_]),delete c.current[_]),t(f=>({...f,[_]:Mn(_)}))},[]),d=E.useCallback(()=>{c.current.persistent&&(clearTimeout(c.current.persistent),delete c.current.persistent),r({playerId:null,type:null,text:"",startTime:0})},[]),g=E.useCallback((_,f,m,v)=>{const w=yu[f],S={id:Rm(),playerId:_,type:f,text:m||ir[f],duration:w.duration,priority:v??w.priority,timestamp:Date.now()};l(b=>b.items.length>=xu.MAX_QUEUE_SIZE?(console.warn("[Animation Queue] Queue is full, dropping oldest item"),{...b,items:[...b.items.slice(1),S]}):{...b,items:[...b.items,S]})},[]);return E.useEffect(()=>{if(p.current||a.items.length===0||a.isProcessing)return;p.current=!0;const f=[...a.items].sort((m,v)=>v.priority-m.priority)[0];return l(m=>({...m,current:f,isProcessing:!0,items:m.items.filter(v=>v.id!==f.id)})),x(f.playerId,f.type,f.text),c.current.queue=setTimeout(()=>{l(m=>({...m,current:null,isProcessing:!1})),p.current=!1},f.duration+xu.BUFFER_TIME),()=>{c.current.queue&&clearTimeout(c.current.queue)}},[a.items,a.isProcessing,x]),E.useEffect(()=>()=>{Object.values(c.current).forEach(_=>{clearTimeout(_)}),c.current={}},[]),{animation:e.player,animations:e,persistentAnimation:n,playerChallengeAnimation:o,setPlayerChallengeAnimation:u,triggerAnimation:x,triggerPersistentAnimation:i,clearAnimation:s,clearPersistentAnimation:d,queue:a,enqueueAnimation:g}}function Fm(){return{id:"challenge_initiated",condition:e=>{const n=e.lastAction||"";return n.includes("发起质疑")&&n.includes("向")},animationType:"challenge",getText:()=>"质疑",getPlayerId:e=>{const t=e,r=(t.lastAction||"").match(/^(.+?)向/),a=r?r[1]:"";return Gd(a,t)}}}function Dm(){return{id:"challenge_skipped",condition:e=>(e.lastAction||"").includes("选择不质疑"),animationType:"skip",getText:()=>"跳过",getPlayerId:e=>{const t=e,r=(t.lastAction||"").match(/^(.+?)选择不质疑/),a=r?r[1]:"";return Gd(a,t)}}}function Bm(){return{id:"geass_dodge",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&(t.geassResult.isDodge||!t.geassResult.hit))},animationType:"dodge",getText:()=>"闪避",getPlayerId:e=>{var n,r;return((r=(n=e.turnState)==null?void 0:n.playedCards)==null?void 0:r.playerId)||"player"}}}function Hm(){return{id:"geass_hit",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&t.geassResult.hit)},animationType:"hit",getText:()=>"命中",getPlayerId:e=>{var n,r;return((r=(n=e.turnState)==null?void 0:n.playedCards)==null?void 0:r.playerId)||"player"}}}function $m(){return{id:"card_played",condition:e=>{const n=e.lastAction||"";return n.includes("出牌")||n.includes("出了")},animationType:"play",getText:()=>"出牌",getPlayerId:e=>{var n,r;return((r=(n=e.turnState)==null?void 0:n.playedCards)==null?void 0:r.playerId)||"player"}}}function Gd(e,t){if(!e||e.trim()==="")return"player";const n=e.trim();if(n==="玩家")return"player";for(const a of t.aiPlayers||[])if(a.name===n)return a.id;const r=Lm(n);return r||(console.warn(`[Animation Trigger] Could not resolve player ID for name: ${n}`),"player")}const wu=[Fm(),Dm(),Bm(),Hm(),$m()];class Vm{constructor(){ie(this,"triggers",new Map);wu.forEach(t=>{this.triggers.set(t.id,t)})}register(t){this.triggers.set(t.id,t)}unregister(t){this.triggers.delete(t)}get(t){return this.triggers.get(t)}getAll(){return Array.from(this.triggers.values())}parseGameState(t){for(const n of this.triggers.values())if(n.condition(t))return{type:n.id,playerId:n.getPlayerId(t),timestamp:Date.now(),data:{animationType:n.animationType,text:n.getText(t)}};return null}reset(){this.triggers.clear(),wu.forEach(t=>{this.triggers.set(t.id,t)})}}const Gm=new Vm,Um=e=>Gm.parseGameState(e),ku=e=>e&&{play:"cg-anim-play",aiPlay:"cg-anim-aiPlay",challenge:"cg-anim-challenge",dodge:"cg-anim-dodge",hit:"cg-anim-hit",skip:"",think:""}[e]||"",Su=e=>e?`cg-action-${e}`:"",Xm=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:a=["cc","suzaku","kallen"],aiAvatars:l={},onToggleCardSelection:o,onConfirmPlay:u,onPass:c,onChallenge:p,onBackToMenu:x,onLelouchSkill:i,gameLog:s=[],isProcessing:d=!1,canUseSkill:g=!0,aiThinkingState:y})=>{var K,Q,$,me,_e,et,Ne,Bt,le,U,Pn,he,ct,dt,wt,kt,Ht,tt,nt,Ko,Zo,Jo,qo,es,ts,ns,rs;const[_,f]=E.useState(!1),[m,v]=E.useState(!1),w=E.useRef(null),S=E.useRef(null),b=E.useRef(s.length),N=E.useRef(null),C=typeof window<"u"&&window.innerWidth<=768,{animations:I,persistentAnimation:z,playerChallengeAnimation:W,triggerAnimation:xe,triggerPersistentAnimation:Ie,clearPersistentAnimation:Ae,setPlayerChallengeAnimation:xt}=Om();if(E.useEffect(()=>{n&&zm(n)},[n]),E.useEffect(()=>{if(w.current&&s.length>b.current){const L=w.current;L.scrollTo({top:L.scrollHeight,behavior:"smooth"})}b.current=s.length},[s]),E.useEffect(()=>{if(!C||!m)return;const L=()=>{N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{v(!1)},3e3)};L();const be=S.current;if(be){const Fe=["click","touchstart","scroll"];return Fe.forEach($t=>{be.addEventListener($t,L)}),()=>{Fe.forEach($t=>{be.removeEventListener($t,L)}),N.current&&clearTimeout(N.current)}}return()=>{N.current&&clearTimeout(N.current)}},[m,C]),E.useEffect(()=>{if(!e)return;const{turnState:L,phase:be,geassResult:Fe}=e,$t=Um(e);if($t){const{playerId:St,data:Vt}=$t,Ct=Vt==null?void 0:Vt.animationType,jn=(Vt==null?void 0:Vt.text)||"";console.log("[Animation] 触发:",{playerId:St,type:Ct,text:jn}),Ct==="play"||Ct==="aiPlay"?(Ie(St,Ct==="play"?"play":"aiPlay","出牌中..."),xe(St,Ct,jn||"出牌")):Ct==="challenge"?St==="player"&&(L!=null&&L.playedCards)?(xt({show:!0,targetId:L.playedCards.playerId}),xe(St,"challenge","质疑中...")):xe(St,"challenge",jn||"质疑"):xe(St,Ct,jn)}be==="challenge"&&z.playerId&&setTimeout(()=>{Ae()},500),Fe!=null&&Fe.activated&&W.show&&setTimeout(()=>{xt({show:!1,targetId:null})},500)},[e,xe,Ie,Ae,xt]),E.useEffect(()=>{n&&ol.preloadAvatar(n,r),a.forEach(L=>{const be=l[L]||1;ol.preloadAvatar(L,be)})},[n,r,a,l]),!e)return null;const{phase:Ot,liarCard:Ft,playerStats:T,aiPlayers:k,turnState:M}=e,V=Ot==="player_turn",q=Ot==="challenge",Ue=e.playerHand||[],Je=(M==null?void 0:M.turnNumber)||1,_t=q,qe=()=>{t.length>0&&u()},Dt=()=>f(!0),cr=()=>{v(L=>!L)},R=L=>{f(!1),i==null||i(L)},j=L=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[L]||L,O=L=>L==="joker"?"#d4af37":L==="hearts"||L==="diamonds"?"#dc2626":"#1a1a24",B=wr("player"),G=_a("player"),H=(L,be,Fe,$t,St,Vt,Ct=!1,jn=!0,dr="player")=>{const dn=I[dr],Ud=ku((dn==null?void 0:dn.type)||null),as=(y==null?void 0:y.isThinking)&&(y==null?void 0:y.aiId)===dr,Nl=z.playerId===dr&&z.type,Xd=Nl?ku(z.type):"",ls=W.show&&dr==="player",is=W.show&&W.targetId===dr,os=(dn==null?void 0:dn.text)||"",Qd=Nl?z.text:"";return h.jsxs("div",{className:`cg-character ${Ct?"cg-character-top":""} ${jn?"":"cg-character-dead"} ${Ud} ${Xd} ${as?"cg-character-thinking":""} ${ls?"cg-player-challenging":""} ${is?"cg-being-challenged":""}`,children:[os&&h.jsx("div",{className:`cg-action-text ${Su(dn.type)}`,children:os}),Nl&&h.jsx("div",{className:`cg-action-text ${Su(z.type)} cg-persistent-text`,children:Qd}),ls&&h.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"质疑中..."}),is&&h.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"被质疑"}),as&&h.jsx("div",{className:"cg-thinking-indicator",children:h.jsx("span",{className:"cg-thinking-dots",children:"..."})}),h.jsx("div",{className:"cg-character-avatar",children:be&&h.jsx(Yo,{characterId:be,size:120,avatarNumber:Vt,priority:!0})}),h.jsxs("div",{className:"cg-character-info",children:[h.jsx("div",{className:"cg-character-name",style:{color:St},children:L}),h.jsxs("div",{className:"cg-character-stats",children:[h.jsx("span",{className:"cg-hp-display",children:Array(Fe).fill("❤").join("")}),h.jsxs("span",{className:"cg-card-count",children:["🃏",$t]})]})]})]})};return h.jsxs("div",{className:"cg-game-table",children:[h.jsx("div",{className:"cg-top-bar",children:h.jsxs("button",{className:`cg-log-toggle-btn-top ${m?"expanded":""}`,onClick:cr,"aria-label":m?"收起记录":"展开记录",children:[h.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),h.jsx("span",{className:"cg-log-toggle-text",children:"记录"}),!m&&s.length>0&&h.jsx("span",{className:"cg-log-badge",children:s.length})]})}),h.jsxs("div",{className:"cg-main-layout",children:[h.jsxs("div",{ref:S,className:`cg-log-panel ${m?"expanded":"collapsed"}`,children:[h.jsxs("div",{className:"cg-log-header",children:[h.jsx("span",{children:"📜 游戏记录"}),h.jsx("button",{className:"cg-log-close-btn mobile-only",onClick:cr,children:"✕"})]}),h.jsx("div",{ref:w,className:"cg-log-content",children:s.map((L,be)=>h.jsx("div",{className:`cg-log-item ${L.includes("质疑")?"challenge":""} ${L.includes("Geass")?"geass":""}`,children:L},be))})]}),m&&h.jsx("div",{className:"cg-log-overlay",onClick:cr}),h.jsxs("div",{className:"cg-game-area",children:[h.jsx("div",{className:"cg-ai-top",children:H(wr("ai2"),((K=k==null?void 0:k[1])==null?void 0:K.character)||a[1],(($=(Q=k==null?void 0:k[1])==null?void 0:Q.stats)==null?void 0:$.hp)||0,((_e=(me=k==null?void 0:k[1])==null?void 0:me.hand)==null?void 0:_e.length)||0,_a("ai2"),l[((et=k==null?void 0:k[1])==null?void 0:et.character)||a[1]]||1,!0,((Ne=k==null?void 0:k[1])==null?void 0:Ne.isActive)!==!1&&(((le=(Bt=k==null?void 0:k[1])==null?void 0:Bt.stats)==null?void 0:le.hp)||0)>0,"ai2")}),h.jsxs("div",{className:"cg-middle-section",children:[h.jsx("div",{className:"cg-ai-left",children:H(wr("ai3"),((U=k==null?void 0:k[2])==null?void 0:U.character)||a[2],((he=(Pn=k==null?void 0:k[2])==null?void 0:Pn.stats)==null?void 0:he.hp)||0,((dt=(ct=k==null?void 0:k[2])==null?void 0:ct.hand)==null?void 0:dt.length)||0,_a("ai3"),l[((wt=k==null?void 0:k[2])==null?void 0:wt.character)||a[2]]||1,!1,((kt=k==null?void 0:k[2])==null?void 0:kt.isActive)!==!1&&(((tt=(Ht=k==null?void 0:k[2])==null?void 0:Ht.stats)==null?void 0:tt.hp)||0)>0,"ai3")}),h.jsx("div",{className:"cg-table-area",children:h.jsx("div",{className:"cg-table",children:h.jsx("div",{className:"cg-table-inner",children:M!=null&&M.playedCards?h.jsxs("div",{className:"cg-played",children:[h.jsxs("div",{className:"cg-played-name",children:[M.playedCards.playerId==="player"?B:M.playedCards.playerId.startsWith("ai")?wr(M.playedCards.playerId):"未知玩家"," ","出牌"]}),h.jsx("div",{className:"cg-cards",children:M.playedCards.actualCards.map(L=>h.jsx("div",{className:"cg-card-small cg-card-back",children:h.jsx("img",{src:Pm,alt:"牌背"})},L.id))}),h.jsxs("div",{className:"cg-card-count-display",children:[M.playedCards.cardIds.length," 张牌"]})]}):h.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),h.jsx("div",{className:"cg-ai-right",children:H(wr("ai"),((nt=k==null?void 0:k[0])==null?void 0:nt.character)||a[0],((Zo=(Ko=k==null?void 0:k[0])==null?void 0:Ko.stats)==null?void 0:Zo.hp)||0,((qo=(Jo=k==null?void 0:k[0])==null?void 0:Jo.hand)==null?void 0:qo.length)||0,_a("ai"),l[((es=k==null?void 0:k[0])==null?void 0:es.character)||a[0]]||1,!1,((ts=k==null?void 0:k[0])==null?void 0:ts.isActive)!==!1&&(((rs=(ns=k==null?void 0:k[0])==null?void 0:ns.stats)==null?void 0:rs.hp)||0)>0,"ai")})]}),h.jsxs("div",{className:"cg-player-section",children:[h.jsx("div",{className:"cg-player-info",children:H(B,n,T.hp,Ue.length,G,r,!1,!0,"player")}),h.jsxs("div",{className:"cg-hand-section",children:[h.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,Ue.length*26+22)}px`},children:Ue.map((L,be)=>{const Fe=t.includes(L.id);return h.jsxs("button",{className:`cg-card ${Fe?"selected":""} ${!V||d?"disabled":""}`,onClick:()=>o(L.id),style:{left:`${be*26}px`,transform:Fe?"translateY(-8px)":"none",zIndex:Fe?Ue.length+10:Ue.length-be},disabled:!V||d,children:[h.jsxs("div",{className:"cg-card-face",children:[h.jsx("div",{style:{color:O(L.suit),fontSize:"13px"},children:L.rank}),h.jsx("div",{style:{color:O(L.suit),fontSize:"15px"},children:j(L.suit)})]}),Fe&&h.jsx("div",{className:"cg-check",children:"✓"})]},L.id)})}),n==="lelouch"&&h.jsx("button",{className:"cg-skill-btn",onClick:Dt,disabled:d||!g||!V,children:g?"绝对命令":"已使用"})]})]})]})]}),h.jsxs("div",{className:"cg-bottom-bar",children:[h.jsx("div",{className:"cg-bottom-left",children:h.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 主页面"})}),h.jsxs("div",{className:"cg-bottom-center",children:[!_t&&h.jsxs("div",{className:"cg-status-text",children:[V&&t.length===0&&"请选择要出的牌",V&&t.length>0&&`已选择 ${t.length} 张牌`,q&&!_t&&"等待其他玩家质疑...",!V&&!q&&"AI回合中..."]}),h.jsxs("div",{className:"cg-action-buttons",children:[V&&t.length>0&&h.jsxs("button",{className:"cg-btn cg-btn-play",onClick:qe,disabled:d,children:["出牌 (",t.length,")"]}),_t&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:d,children:"⚔️ 质疑"}),h.jsx("button",{className:"cg-btn cg-btn-skip",onClick:c,disabled:d,children:"不质疑"})]})]})]}),h.jsxs("div",{className:"cg-bottom-right",children:[h.jsxs("div",{className:"cg-round-display",children:[h.jsx("div",{className:"cg-round-label",children:"回合"}),h.jsx("div",{className:"cg-round-number",children:Je})]}),h.jsxs("div",{className:"cg-liar-display",children:[h.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),h.jsx("div",{className:"cg-liar-value",children:Ft})]})]})]}),_&&h.jsx("div",{className:"cg-modal",children:h.jsxs("div",{className:"cg-modal-content",children:[h.jsx("h3",{children:"选择新的骗子牌"}),h.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(L=>h.jsx("button",{className:L===Ft?"current":"",onClick:()=>R(L),children:L},L))}),h.jsx("button",{className:"cg-btn-skip",onClick:()=>f(!1),children:"取消"})]})}),h.jsx("style",{children:`
        /* 基础布局 */
        .cg-game-table { 
          position: fixed; 
          inset: 0; 
          display: flex; 
          flex-direction: column; 
          background: linear-gradient(180deg, #0a0a0f, #1a1a24); 
          font-family: 'Noto Sans SC', sans-serif; 
          overflow: hidden;
        }

        /* 主布局：日志 + 游戏区 */
        .cg-main-layout { 
          flex: 1; 
          display: flex; 
          overflow: hidden;
          margin-bottom: 0;
        }

        /* 左侧游戏记录栏 - 桌面端固定定位 */
        .cg-log-panel {
          width: 240px;
          min-width: 240px;
          background: rgba(0,0,0,0.5);
          border-right: 1px solid rgba(212,175,55,0.2);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 70px);
          position: fixed;
          left: 0;
          top: 0;
          z-index: 40;
        }
        .cg-log-header { 
          padding: 12px 15px;
          font-size: 14px; 
          color: #d4af37; 
          font-weight: bold;
          border-bottom: 1px solid rgba(212,175,55,0.3); 
          background: rgba(0,0,0,0.3);
        }
        .cg-log-content { 
          flex: 1; 
          overflow-y: auto; 
          padding: 10px;
          display: flex; 
          flex-direction: column; 
          gap: 5px; 
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .cg-log-content::-webkit-scrollbar {
          width: 6px;
        }
        .cg-log-content::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
          border-radius: 3px;
        }
        .cg-log-content::-webkit-scrollbar-thumb {
          background: rgba(212,175,55,0.4);
          border-radius: 3px;
          transition: background 0.2s;
        }
        .cg-log-content::-webkit-scrollbar-thumb:hover {
          background: rgba(212,175,55,0.6);
        }
        .cg-log-content::-webkit-scrollbar-thumb:active {
          background: rgba(212,175,55,0.8);
        }
        .cg-log-item { 
          padding: 6px 10px; 
          background: rgba(255,255,255,0.05); 
          border-radius: 4px; 
          font-size: 12px; 
          color: #e5e5e5; 
          line-height: 1.4;
        }
        .cg-log-item.challenge { 
          background: rgba(220,38,38,0.2); 
          border-left: 2px solid #dc2626; 
        }
        .cg-log-item.geass { 
          background: rgba(212,175,55,0.2); 
          border-left: 2px solid #d4af37; 
        }

        /* 中间游戏区域 - 为固定左侧栏留出空间 */
        .cg-game-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 5px 20px;
          gap: 5px;
          overflow: hidden;
          margin-left: 240px;
        }

        /* 顶部AI - 调整垂直位置向下移动 */
        .cg-ai-top {
          display: flex;
          justify-content: center;
          height: 160px;
          margin-bottom: -10px;
          margin-top: 40px;
          position: relative;
          z-index: 5;
        }

        /* 中间行 */
        .cg-middle-section { 
          flex: 1;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 10px;
          min-height: 0;
        }
        .cg-ai-left, .cg-ai-right {
          width: 160px;
          display: flex;
          justify-content: center;
        }
        .cg-table-area {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 260px;
        }

        /* 圆桌 */
        .cg-table { 
          width: 200px; 
          height: 200px; 
          border-radius: 50%; 
          background: linear-gradient(145deg, #1a3a1a, #0d260d); 
          border: 4px solid #2d5016; 
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .cg-table-inner { 
          width: 170px; 
          height: 170px; 
          border-radius: 50%; 
          background: radial-gradient(circle, #1e4a1e, #143614); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .cg-played { text-align: center; }
        .cg-played-name { color: #d4af37; font-size: 13px; margin-bottom: 8px; }
        .cg-cards { display: flex; justify-content: center; gap: 6px; }
        .cg-card-small { 
          width: 32px; 
          height: 44px; 
          border-radius: 3px; 
          border: 1px solid #d4af37; 
          overflow: hidden; 
        }
        .cg-card-small img { width: 100%; height: 100%; object-fit: cover; }
        .cg-card-back { background: linear-gradient(135deg, #4c1d95, #1e1b4b); }
        .cg-card-count-display { color: #d4af37; font-size: 12px; margin-top: 8px; }
        .cg-placeholder-text { color: rgba(255,255,255,0.3); font-size: 14px; }

        /* 顶部栏 */
        .cg-top-bar {
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 50;
          display: flex;
          align-items: center;
        }
        .cg-log-toggle-btn-top {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(180, 148, 31, 0.9));
          border: 2px solid rgba(212, 175, 55, 1);
          border-radius: 20px;
          color: #0a0a0f;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }
        .cg-log-toggle-btn-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
        }
        .cg-log-toggle-btn-top.expanded {
          background: rgba(60, 60, 70, 0.95);
          border-color: rgba(255, 255, 255, 0.3);
          color: white;
        }
        .cg-log-toggle-text {
          font-size: 12px;
        }

        /* 角色卡片 - 统一尺寸 */
        .cg-character { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 6px; 
          background: rgba(0,0,0,0.5); 
          padding: 10px; 
          border-radius: 10px; 
          border: 1px solid rgba(212,175,55,0.3);
          width: 140px;
          min-width: 140px;
          height: 170px;
          min-height: 170px;
          justify-content: flex-start;
          transition: all 0.3s ease;
          position: relative;
        }
        .cg-character-dead {
          opacity: 0.4;
          filter: grayscale(100%);
          border-color: rgba(100,100,100,0.3);
          background: rgba(0,0,0,0.8);
        }
        .cg-character-dead .cg-character-name {
          color: #666 !important;
          text-decoration: line-through;
        }
        .cg-character-avatar { 
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.5)); 
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cg-character-dead .cg-character-avatar {
          filter: grayscale(100%) brightness(0.5);
        }
        .cg-character-info { 
          text-align: center; 
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cg-character-name { font-size: 14px; font-weight: bold; }
        .cg-character-stats {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          white-space: nowrap;
          flex-wrap: nowrap;
        }
        .cg-hp-display {
          display: flex;
          align-items: center;
          gap: 1px;
          font-size: 11px;
        }

        /* 动作文字提示 */
        .cg-action-text {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 16px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: bold;
          white-space: nowrap;
          z-index: 1000;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          overflow: visible;
          max-width: none;
          min-width: max-content;
          pointer-events: none;
        }
        /* 顶部角色动画文字 - 统一显示在上方 */
        .cg-ai-top .cg-action-text {
          top: -35px;
          bottom: auto;
        }
        .cg-action-play {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          box-shadow: 0 2px 8px rgba(34, 197, 94, 0.5);
          animation: actionTextPopPlay 1.5s ease-out forwards;
        }
        .cg-action-aiPlay {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.5);
          animation: actionTextPopPlay 1.5s ease-out forwards;
        }
        .cg-action-challenge {
          background: linear-gradient(135deg, #9D50BB, #6E48AA);
          color: white;
          box-shadow: 0 2px 8px rgba(157, 80, 187, 0.5);
          animation: actionTextPopChallenge 1.5s ease-out forwards;
        }
        .cg-action-dodge {
          background: transparent;
          color: white;
          text-shadow: 0 0 4px #1E90FF, 0 0 8px #1E90FF;
          animation: actionTextPopDodge 1.5s ease-out forwards;
        }
        .cg-action-hit {
          background: transparent;
          color: white;
          text-shadow: 0 0 4px #DC143C, 0 0 8px #DC143C;
          animation: actionTextPopHit 1.5s ease-out forwards;
        }
        .cg-action-skip {
          background: linear-gradient(135deg, #6B7280, #4B5563);
          color: white;
          box-shadow: 0 2px 8px rgba(107, 114, 128, 0.5);
          animation: actionTextPopSkip 1.5s ease-out forwards;
        }

        /* 出牌文字动画 - 1500ms */
        @keyframes actionTextPopPlay {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 质疑文字动画 - 1500ms */
        @keyframes actionTextPopChallenge {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 闪避文字动画 - 1500ms */
        @keyframes actionTextPopDodge {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          20% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          30% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          70% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px) scale(0.95);
          }
        }

        /* 命中文字动画 - 1500ms */
        @keyframes actionTextPopHit {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 不质疑文字动画 - 1500ms */
        @keyframes actionTextPopSkip {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          15% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.9);
          }
        }

        /* 持续动画文字样式 */
        .cg-persistent-text {
          animation: none !important;
          opacity: 1 !important;
        }

        /* 玩家质疑动画样式 */
        .cg-player-challenging {
          border-color: #9D50BB !important;
          box-shadow: 0 0 20px rgba(157, 80, 187, 0.6), inset 0 0 15px rgba(157, 80, 187, 0.3);
          animation: challengingPulse 1.5s ease-in-out infinite;
        }
        @keyframes challengingPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(157, 80, 187, 0.6), inset 0 0 15px rgba(157, 80, 187, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(157, 80, 187, 0.8), inset 0 0 20px rgba(157, 80, 187, 0.4);
          }
        }

        /* 被质疑动画样式 */
        .cg-being-challenged {
          border-color: #ff6b6b !important;
          box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), inset 0 0 15px rgba(255, 107, 107, 0.3);
          animation: beingChallengedPulse 1.5s ease-in-out infinite;
        }
        @keyframes beingChallengedPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), inset 0 0 15px rgba(255, 107, 107, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(255, 107, 107, 0.8), inset 0 0 20px rgba(255, 107, 107, 0.4);
          }
        }

        /* 角色动画效果 */
        /* 出牌动画 - 玩家绿色，350ms，缩放1.0→1.1→1.0 */
        .cg-anim-play {
          animation: playPulse 0.35s ease-out;
        }
        /* AI出牌动画 - 橙色系，350ms，缩放1.0→1.1→1.0 */
        .cg-anim-aiPlay {
          animation: aiPlayPulse 0.35s ease-out;
        }
        @keyframes playPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes aiPlayPulse {
          0% { transform: scale(1); }
          50% {
            transform: scale(1.1);
            border-color: #f97316;
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
          }
          100% { transform: scale(1); }
        }

        /* 质疑动画 - 紫色边框闪烁 #9D50BB/#6E48AA，1800ms */
        .cg-anim-challenge {
          animation: challengeFlash 1.8s ease-out;
        }
        @keyframes challengeFlash {
          0%, 100% {
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
          10%, 30%, 50%, 70% {
            border-color: #9D50BB;
            box-shadow: 0 0 15px rgba(157, 80, 187, 0.7), inset 0 0 10px rgba(157, 80, 187, 0.3);
          }
          20%, 40%, 60%, 80% {
            border-color: #6E48AA;
            box-shadow: 0 0 25px rgba(110, 72, 170, 0.9), inset 0 0 15px rgba(110, 72, 170, 0.4);
          }
        }

        /* 闪避动画 - 蓝色 #1E90FF，±5px抖动，900ms */
        .cg-anim-dodge {
          animation: dodgeSuccess 0.9s ease-out;
        }
        @keyframes dodgeSuccess {
          0%, 100% {
            transform: translateX(0);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
          10% {
            transform: translateX(-5px);
            border-color: #1E90FF;
            box-shadow: 0 0 20px rgba(30, 144, 255, 0.8);
          }
          20% {
            transform: translateX(5px);
            box-shadow: 0 0 30px rgba(30, 144, 255, 0.6);
          }
          30% {
            transform: translateX(-5px);
            box-shadow: 0 0 20px rgba(30, 144, 255, 0.4);
          }
          40% {
            transform: translateX(5px);
          }
          50% {
            transform: translateX(0);
            border-color: #1E90FF;
            box-shadow: 0 0 25px rgba(30, 144, 255, 0.5);
          }
          60% {
            transform: translateX(-3px);
          }
          70% {
            transform: translateX(3px);
          }
          80% {
            transform: translateX(-2px);
          }
          90% {
            transform: translateX(2px);
          }
        }

        /* AI思考指示器样式 */
        .cg-character-thinking {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2);
        }
        .cg-thinking-indicator {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
          color: white;
          z-index: 20;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
          animation: thinkingPulse 1s ease-in-out infinite;
        }
        .cg-thinking-dots {
          display: inline-block;
          min-width: 20px;
          text-align: center;
        }
        @keyframes thinkingPulse {
          0%, 100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1.05);
          }
        }

        /* 命中动画 - 红色 #DC143C，脉冲+缩放，900ms */
        .cg-anim-hit {
          animation: hitImpact 0.9s ease-out;
        }
        @keyframes hitImpact {
          0% {
            transform: scale(1);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
          15% {
            transform: scale(0.95);
            border-color: #DC143C;
            box-shadow: 0 0 15px rgba(220, 20, 60, 0.7);
          }
          30% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(220, 20, 60, 0.9);
          }
          45% {
            transform: scale(0.98);
            box-shadow: 0 0 20px rgba(220, 20, 60, 0.6);
          }
          60% {
            transform: scale(1.02);
            border-color: #DC143C;
            box-shadow: 0 0 25px rgba(220, 20, 60, 0.7);
          }
          75% {
            transform: scale(0.99);
            box-shadow: 0 0 15px rgba(220, 20, 60, 0.5);
          }
          100% {
            transform: scale(1);
            border-color: rgba(212, 175, 55, 0.3);
            box-shadow: none;
          }
        }
        .cg-card-count { color: #d4af37; }

        /* 底部玩家区域 - 水平布局：角色左侧，手牌右侧 */
        .cg-player-section { 
          display: flex; 
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 25px;
          height: 190px;
          margin-top: -5px;
          padding: 0 20px;
        }
        .cg-player-info { 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 4px;
          flex-shrink: 0;
        }
        .cg-skill-btn { 
          padding: 6px 14px; 
          background: linear-gradient(135deg, #4c1d95, #7c3aed); 
          border: none; 
          border-radius: 6px; 
          color: white; 
          font-size: 12px; 
          font-weight: bold;
          cursor: pointer; 
          box-shadow: 0 2px 8px rgba(76, 29, 149, 0.4);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .cg-skill-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #5c2da5, #8c4afd);
          box-shadow: 0 4px 12px rgba(76, 29, 149, 0.6);
          transform: translateY(-1px);
        }
        .cg-skill-btn:disabled {
          background: linear-gradient(135deg, #3a3a4a, #4a4a5a);
          cursor: not-allowed;
          opacity: 0.7;
        }

        /* 手牌区域 - 位于角色右侧，层叠布局 */
        .cg-hand-section { 
          flex: 1;
          min-width: 150px;
          max-width: 400px;
          display: flex; 
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 120px;
          padding: 0 10px;
          overflow: visible;
        }
        .cg-hand { 
          display: flex; 
          justify-content: flex-start; 
          position: relative; 
          height: 80px;
          min-width: 50px;
        }
        .cg-card { 
          width: 48px; 
          height: 70px; 
          border-radius: 6px; 
          background: linear-gradient(135deg, #f5f5f5, #ffffff); 
          border: 1px solid #d4af37; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          transition: transform 0.2s ease, box-shadow 0.2s ease; 
          position: absolute;
          top: 5px;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .cg-card:hover {
          box-shadow: 3px 3px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .cg-card.selected { 
          box-shadow: 0 0 20px rgba(212,175,55,0.8), 0 8px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.9);
          border-color: #f0d78c;
          border-width: 2px;
        }
        .cg-card.disabled { 
          cursor: not-allowed;
          filter: brightness(0.9);
        }
        .cg-card.disabled:hover { 
          box-shadow: 2px 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .cg-card-face { display: flex; flex-direction: column; align-items: center; gap: 3px; }
        .cg-check { 
          position: absolute; 
          top: -5px; 
          right: -5px; 
          width: 18px; 
          height: 18px; 
          background: #22c55e; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-size: 11px; 
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        /* 底部功能栏 */
        .cg-bottom-bar { 
          display: flex; 
          align-items: center; 
          height: 70px;
          min-height: 70px;
          padding: 0 20px;
          background: rgba(0,0,0,0.7); 
          border-top: 1px solid rgba(212,175,55,0.2); 
          gap: 20px;
          flex-shrink: 0;
        }
        .cg-bottom-left { 
          width: 140px;
          display: flex;
          align-items: center;
        }
        .cg-back-btn { 
          padding: 8px 16px; 
          background: rgba(220,38,38,0.8); 
          border: none;
          border-radius: 6px; 
          color: white;
          font-size: 13px;
          cursor: pointer;
          font-weight: bold;
        }
        .cg-back-btn:hover {
          background: rgba(220,38,38,1);
        }
        .cg-bottom-center { 
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 100%;
        }
        .cg-status-text {
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          min-height: 18px;
        }
        .cg-action-buttons {
          display: flex;
          gap: 15px;
          align-items: center;
          justify-content: center;
        }
        .cg-btn { 
          padding: 8px 20px; 
          font-size: 14px; 
          border: none; 
          border-radius: 6px; 
          cursor: pointer;
          font-weight: bold;
        }
        .cg-btn-play { 
          background: linear-gradient(135deg, #15803d, #22c55e); 
          color: white; 
        }
        .cg-btn-challenge { 
          background: linear-gradient(135deg, #dc2626, #ef4444); 
          color: white; 
        }
        .cg-btn-skip { 
          background: rgba(255,255,255,0.1); 
          color: #fff; 
          border: 1px solid rgba(255,255,255,0.3); 
        }
        .cg-bottom-right { 
          width: 140px;
          display: flex;
          justify-content: flex-end;
          gap: 20px;
        }
        .cg-round-display, .cg-liar-display {
          text-align: center;
        }
        .cg-round-label, .cg-liar-label {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 2px;
        }
        .cg-round-number {
          font-size: 20px;
          color: #d4af37;
          font-weight: bold;
        }
        .cg-liar-value {
          font-size: 20px;
          color: #dc2626;
          font-weight: bold;
        }

        /* 弹窗 */
        .cg-modal { 
          position: fixed; 
          inset: 0; 
          background: rgba(0,0,0,0.8); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 1000; 
        }
        .cg-modal-content { 
          background: linear-gradient(180deg, #1a1a24, #0a0a0f); 
          padding: 20px; 
          border-radius: 10px; 
          border: 1px solid rgba(212,175,55,0.3); 
          text-align: center; 
        }
        .cg-modal-content h3 { 
          color: #d4af37; 
          margin-bottom: 15px; 
          font-size: 16px;
        }
        .cg-rank-btns { 
          display: flex; 
          gap: 10px; 
          margin-bottom: 15px; 
        }
        .cg-rank-btns button { 
          width: 45px; 
          height: 45px; 
          font-size: 18px; 
          border: 2px solid rgba(212,175,55,0.5); 
          background: rgba(0,0,0,0.5); 
          color: #fff; 
          border-radius: 6px; 
          cursor: pointer; 
        }
        .cg-rank-btns button.current { 
          border-color: #d4af37; 
          background: rgba(212,175,55,0.2); 
        }

        /* 响应式适配 */
        @media (max-width: 1024px) {
          .cg-log-panel { width: 200px; min-width: 200px; }
          .cg-table { width: 180px; height: 180px; }
          .cg-table-inner { width: 155px; height: 155px; }
        }

        /* 移动端日志栏优化 */
        @media (max-width: 768px) {
          /* 日志面板默认收起 */
          .cg-log-panel {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 70px;
            width: 280px;
            min-width: 280px;
            z-index: 100;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            background: rgba(10, 10, 15, 0.98);
            border-right: 1px solid rgba(212, 175, 55, 0.3);
          }
          .cg-log-panel.expanded {
            transform: translateX(0);
          }
          .cg-log-panel.collapsed {
            transform: translateX(-100%);
          }

          /* 展开/收起按钮 */
          .cg-log-toggle-btn {
            position: fixed;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(180, 148, 31, 0.9));
            border: 2px solid rgba(212, 175, 55, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 99;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
          }
          .cg-log-toggle-btn.expanded {
            left: 290px;
            background: rgba(60, 60, 70, 0.95);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .cg-log-toggle-btn:active {
            transform: translateY(-50%) scale(0.95);
          }
          .cg-log-toggle-icon {
            font-size: 20px;
          }
          .cg-log-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #dc2626;
            color: white;
            font-size: 10px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* 关闭按钮 */
          .cg-log-close-btn {
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            cursor: pointer;
            padding: 4px 8px;
            border-radius: 4px;
            transition: all 0.2s;
          }
          .cg-log-close-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
          }

          /* 遮罩层 */
          .cg-log-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 99;
            backdrop-filter: blur(2px);
          }

          /* 游戏区域居中 */
          .cg-game-area {
            padding: 5px 10px;
            width: 100%;
            max-width: 100%;
          }

          /* 调整角色尺寸 */
          .cg-character-avatar { transform: scale(0.75); }
          .cg-character {
            width: 110px;
            min-width: 110px;
            height: 150px;
            min-height: 150px;
            padding: 8px;
          }
          .cg-character-name { font-size: 12px; }
          .cg-character-stats { font-size: 11px; gap: 6px; }

          /* 调整圆桌尺寸 */
          .cg-table { width: 140px; height: 140px; }
          .cg-table-inner { width: 115px; height: 115px; }
          .cg-played-name { font-size: 11px; }
          .cg-card-small { width: 28px; height: 38px; }
          .cg-card-count-display { font-size: 11px; }

          /* 调整AI区域 */
          .cg-ai-top { height: 130px; margin-bottom: -5px; }
          .cg-ai-left, .cg-ai-right { width: 120px; }
          .cg-table-area { max-width: 200px; }

          /* 调整玩家区域 */
          .cg-player-section {
            height: 180px;
            gap: 12px;
            padding: 0 10px;
          }
          .cg-hand-section {
            min-width: 120px;
            max-width: 280px;
            min-height: 110px;
            gap: 6px;
          }
          .cg-card {
            width: 42px;
            height: 62px;
          }
          .cg-skill-btn {
            padding: 5px 12px;
            font-size: 11px;
          }

          /* 底部栏优化 */
          .cg-bottom-bar {
            padding: 0 10px;
            height: 60px;
            gap: 10px;
          }
          .cg-bottom-left, .cg-bottom-right { width: 70px; }
          .cg-back-btn {
            padding: 6px 8px;
            font-size: 11px;
          }
          .cg-status-text { font-size: 11px; }
          .cg-btn {
            padding: 6px 12px;
            font-size: 12px;
          }
          .cg-round-number, .cg-liar-value { font-size: 16px; }
          .cg-round-label, .cg-liar-label { font-size: 10px; }
        }

        /* 超小屏幕适配 */
        @media (max-width: 480px) {
          .cg-log-panel {
            width: 260px;
            min-width: 260px;
          }
          .cg-log-toggle-btn.expanded {
            left: 270px;
          }
          .cg-character {
            width: 100px;
            min-width: 100px;
            height: 140px;
            min-height: 140px;
          }
          .cg-character-avatar { transform: scale(0.65); }
          .cg-character-stats { font-size: 10px; gap: 4px; }
          .cg-hp-display { font-size: 10px; }
          .cg-ai-top { height: 110px; }
          .cg-ai-left, .cg-ai-right { width: 100px; }
          .cg-table { width: 120px; height: 120px; }
          .cg-table-inner { width: 100px; height: 100px; }
          .cg-player-section {
            height: 160px;
            gap: 8px;
          }
          .cg-hand-section {
            min-height: 100px;
          }
          .cg-card {
            width: 38px;
            height: 56px;
          }
          .cg-hand { height: 65px; }
          .cg-skill-btn {
            padding: 4px 10px;
            font-size: 10px;
          }
        }

        /* 移动端顶部按钮调整 */
        @media (max-width: 768px) {
          .cg-top-bar {
            top: 8px;
            left: 8px;
          }
          .cg-log-toggle-btn-top {
            padding: 6px 10px;
            font-size: 11px;
          }
          .cg-log-toggle-text {
            font-size: 10px;
          }
          /* 动作文字提示位置调整 */
          .cg-action-text {
            top: -20px;
            padding: 3px 8px;
            font-size: 10px;
          }
        }

        /* 桌面端样式优化 */
        @media (min-width: 769px) {
          /* 隐藏移动端按钮 */
          .cg-log-toggle-btn,
          .cg-log-overlay,
          .cg-log-close-btn.mobile-only,
          .cg-top-bar {
            display: none !important;
          }

          /* 桌面端日志栏始终显示 */
          .cg-log-panel {
            transform: none !important;
          }

          /* 桌面端游戏区域调整 */
          .cg-game-area {
            margin-left: 240px;
          }
        }

        /* 移动端样式 */
        @media (max-width: 768px) {
          /* 移动端日志栏可收起 */
          .cg-log-panel {
            position: fixed;
            transform: translateX(-100%);
          }
          .cg-log-panel.expanded {
            transform: translateX(0);
          }

          /* 移动端游戏区域无左边距 */
          .cg-game-area {
            margin-left: 0;
          }

          /* 显示移动端按钮 */
          .cg-top-bar {
            display: flex;
          }
        }
      `})]})},Qm=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r})=>{const[a,l]=E.useState(!1),[o,u]=E.useState(!1);E.useEffect(()=>{e&&l(!0);const p=setTimeout(()=>u(!0),1e3);return()=>clearTimeout(p)},[e]);const c=e?"lelouch":"cc";return h.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[h.jsxs("div",{className:"cg-result-bg",children:[h.jsx("div",{className:"cg-result-bg-gradient"}),e?h.jsx("div",{className:"cg-result-bg-win",children:h.jsx("div",{className:"cg-victory-rays"})}):h.jsx("div",{className:"cg-result-bg-lose",children:h.jsx("div",{className:"cg-defeat-shadow"})})]}),a&&h.jsx(Wm,{}),h.jsxs("div",{className:`cg-result-content ${o?"cg-animate-in":""}`,children:[h.jsxs("div",{className:"cg-result-header",children:[h.jsx("div",{className:"cg-result-badge",children:e?h.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[h.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((p,x)=>h.jsx("circle",{cx:50+35*Math.cos((x*72-90)*Math.PI/180),cy:50+35*Math.sin((x*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:h.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${x*.2}s`,repeatCount:"indefinite"})},x))]}):h.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[h.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),h.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:h.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),h.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),h.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),h.jsx("div",{className:"cg-result-character",children:h.jsxs("div",{className:"cg-character-showcase",children:[h.jsx(Yo,{characterId:c,size:200}),h.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),h.jsx("div",{className:"cg-result-score",children:h.jsxs("div",{className:"cg-score-simple",children:[h.jsx("span",{className:"cg-score-label",children:"回合数"}),h.jsx("span",{className:"cg-score-value",children:t})]})}),h.jsxs("div",{className:"cg-result-actions",children:[h.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),h.jsx("span",{children:"再来一局"})]}),h.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),h.jsx("span",{children:"返回主菜单"})]})]})]}),h.jsx("style",{children:`
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
          gap: 1rem;
          padding: 1.5rem;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s ease;
          max-height: 100vh;
          overflow-y: auto;
        }

        .cg-result-content.cg-animate-in {
          opacity: 1;
          transform: scale(1);
        }

        .cg-result-header {
          text-align: center;
        }

        .cg-result-badge {
          width: 80px;
          height: 80px;
          margin: 0 auto 0.5rem;
        }

        .cg-badge-icon {
          width: 100%;
          height: 100%;
        }

        .cg-result-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 0.25rem;
          letter-spacing: 0.15em;
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
          padding: 0.5rem;
        }

        .cg-character-aura {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
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
          max-width: 300px;
        }

        .cg-score-simple {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(37, 37, 50, 0.8) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid var(--result-color);
          border-radius: 0.75rem;
          box-shadow: 0 0 20px var(--result-glow);
        }

        .cg-score-simple .cg-score-label {
          font-family: 'Noto Sans SC', sans-serif;
          font-size: 0.875rem;
          color: #a1a1aa;
          letter-spacing: 0.1em;
        }

        .cg-score-simple .cg-score-value {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--result-color);
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
      `})]})},Wm=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return h.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>h.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var Nt={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var i=this||n;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var s=this||n;if(i=parseFloat(i),s.ctx||x(),typeof i<"u"&&i>=0&&i<=1){if(s._volume=i,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[d]._soundById(g[y]);_&&_._node&&(_._node.volume=_._volume*i)}return s}return s._volume},mute:function(i){var s=this||n;s.ctx||x(),s._muted=i,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i?0:s._volume,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[d]._soundById(g[y]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return s},stop:function(){for(var i=this||n,s=0;s<i._howls.length;s++)i._howls[s].stop();return i},unload:function(){for(var i=this||n,s=i._howls.length-1;s>=0;s--)i._howls[s].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,x()),i},codecs:function(i){return(this||n)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||n;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var s=new Audio;s.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return i}if(!s||typeof s.canPlayType!="function")return i;var d=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=i._navigator?i._navigator.userAgent:"",y=g.match(/OPR\/(\d+)/g),_=y&&parseInt(y[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,m=g.match(/Version\/(.*?) /),v=f&&m&&parseInt(m[1],10)<15;return i._codecs={mp3:!!(!_&&(d||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||n;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var s=function(d){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,i._releaseHtml5Audio(g)}catch{i.noAudio=!0;break}for(var y=0;y<i._howls.length;y++)if(!i._howls[y]._webAudio)for(var _=i._howls[y]._getSoundIds(),f=0;f<_.length;f++){var m=i._howls[y]._soundById(_[f]);m&&m._node&&!m._node._unlocked&&(m._node._unlocked=!0,m._node.load())}i._autoResume();var v=i.ctx.createBufferSource();v.buffer=i._scratchBuffer,v.connect(i.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),v.onended=function(){v.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<i._howls.length;w++)i._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),i}},_obtainHtml5Audio:function(){var i=this||n;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var s=this||n;return i._unlocked&&s._html5AudioPool.push(i),s},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<i._howls.length;s++)if(i._howls[s]._webAudio){for(var d=0;d<i._howls[s]._sounds.length;d++)if(!i._howls[s]._sounds[d]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var g=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(g,g)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!n.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var s=0;s<i._howls.length;s++)i._howls[s]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var n=new t,r=function(i){var s=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(i)};r.prototype={init:function(i){var s=this;return n.ctx||x(),s._autoplay=i.autoplay||!1,s._format=typeof i.format!="string"?i.format:[i.format],s._html5=i.html5||!1,s._muted=i.mute||!1,s._loop=i.loop||!1,s._pool=i.pool||5,s._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,s._rate=i.rate||1,s._sprite=i.sprite||{},s._src=typeof i.src!="string"?i.src:[i.src],s._volume=i.volume!==void 0?i.volume:1,s._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=i.onend?[{fn:i.onend}]:[],s._onfade=i.onfade?[{fn:i.onfade}]:[],s._onload=i.onload?[{fn:i.onload}]:[],s._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],s._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],s._onpause=i.onpause?[{fn:i.onpause}]:[],s._onplay=i.onplay?[{fn:i.onplay}]:[],s._onstop=i.onstop?[{fn:i.onstop}]:[],s._onmute=i.onmute?[{fn:i.onmute}]:[],s._onvolume=i.onvolume?[{fn:i.onvolume}]:[],s._onrate=i.onrate?[{fn:i.onrate}]:[],s._onseek=i.onseek?[{fn:i.onseek}]:[],s._onunlock=i.onunlock?[{fn:i.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var i=this,s=null;if(n.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var d=0;d<i._src.length;d++){var g,y;if(i._format&&i._format[d])g=i._format[d];else{if(y=i._src[d],typeof y!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(y),g||(g=/\.([^.]+)$/.exec(y.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=i._src[d];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new a(i),i._webAudio&&o(i),i},play:function(i,s){var d=this,g=null;if(typeof i=="number")g=i,i=null;else{if(typeof i=="string"&&d._state==="loaded"&&!d._sprite[i])return null;if(typeof i>"u"&&(i="__default",!d._playLock)){for(var y=0,_=0;_<d._sounds.length;_++)d._sounds[_]._paused&&!d._sounds[_]._ended&&(y++,g=d._sounds[_]._id);y===1?i=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!i&&(i=f._sprite||"__default"),d._state!=="loaded"){f._sprite=i,f._ended=!1;var m=f._id;return d._queue.push({event:"play",action:function(){d.play(m)}}),m}if(g&&!f._paused)return s||d._loadQueue("play"),f._id;d._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:d._sprite[i][0]/1e3),w=Math.max(0,(d._sprite[i][0]+d._sprite[i][1])/1e3-v),S=w*1e3/Math.abs(f._rate),b=d._sprite[i][0]/1e3,N=(d._sprite[i][0]+d._sprite[i][1])/1e3;f._sprite=i,f._ended=!1;var C=function(){f._paused=!1,f._seek=v,f._start=b,f._stop=N,f._loop=!!(f._loop||d._sprite[i][2])};if(v>=N){d._ended(f);return}var I=f._node;if(d._webAudio){var z=function(){d._playLock=!1,C(),d._refreshBuffer(f);var Ae=f._muted||d._muted?0:f._volume;I.gain.setValueAtTime(Ae,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof I.bufferSource.start>"u"?f._loop?I.bufferSource.noteGrainOn(0,v,86400):I.bufferSource.noteGrainOn(0,v,w):f._loop?I.bufferSource.start(0,v,86400):I.bufferSource.start(0,v,w),S!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),S)),s||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?z():(d._playLock=!0,d.once("resume",z),d._clearTimer(f._id))}else{var W=function(){I.currentTime=v,I.muted=f._muted||d._muted||n._muted||I.muted,I.volume=f._volume*n.volume(),I.playbackRate=f._rate;try{var Ae=I.play();if(Ae&&typeof Promise<"u"&&(Ae instanceof Promise||typeof Ae.then=="function")?(d._playLock=!0,C(),Ae.then(function(){d._playLock=!1,I._unlocked=!0,s?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(d._playLock=!1,C(),d._emit("play",f._id)),I.playbackRate=f._rate,I.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),S):(d._endTimers[f._id]=function(){d._ended(f),I.removeEventListener("ended",d._endTimers[f._id],!1)},I.addEventListener("ended",d._endTimers[f._id],!1))}catch(xt){d._emit("playerror",f._id,xt)}};I.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(I.src=d._src,I.load());var xe=window&&window.ejecta||!I.readyState&&n._navigator.isCocoonJS;if(I.readyState>=3||xe)W();else{d._playLock=!0,d._state="loading";var Ie=function(){d._state="loaded",W(),I.removeEventListener(n._canPlayEvent,Ie,!1)};I.addEventListener(n._canPlayEvent,Ie,!1),d._clearTimer(f._id)}}return f._id},pause:function(i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(i)}}),s;for(var d=s._getSoundIds(i),g=0;g<d.length;g++){s._clearTimer(d[g]);var y=s._soundById(d[g]);if(y&&!y._paused&&(y._seek=s.seek(d[g]),y._rateSeek=0,y._paused=!0,s._stopFade(d[g]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(i)}}),d;for(var g=d._getSoundIds(i),y=0;y<g.length;y++){d._clearTimer(g[y]);var _=d._soundById(g[y]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,d._stopFade(g[y]),_._node&&(d._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),d._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&d._clearSound(_._node))),s||d._emit("stop",_._id))}return d},mute:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(i,s)}}),d;if(typeof s>"u")if(typeof i=="boolean")d._muted=i;else return d._muted;for(var g=d._getSoundIds(s),y=0;y<g.length;y++){var _=d._soundById(g[y]);_&&(_._muted=i,_._interval&&d._stopFade(_._id),d._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:i),d._emit("mute",_._id))}return d},volume:function(){var i=this,s=arguments,d,g;if(s.length===0)return i._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length>=2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,s)}}),i;typeof g>"u"&&(i._volume=d),g=i._getSoundIds(g);for(var m=0;m<g.length;m++)f=i._soundById(g[m]),f&&(f._volume=d,s[2]||i._stopFade(g[m]),i._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*n.volume()),i._emit("volume",f._id))}else return f=g?i._soundById(g):i._sounds[0],f?f._volume:0;return i},fade:function(i,s,d,g){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(i,s,d,g)}}),y;i=Math.min(Math.max(0,parseFloat(i)),1),s=Math.min(Math.max(0,parseFloat(s)),1),d=parseFloat(d),y.volume(i,g);for(var _=y._getSoundIds(g),f=0;f<_.length;f++){var m=y._soundById(_[f]);if(m){if(g||y._stopFade(_[f]),y._webAudio&&!m._muted){var v=n.ctx.currentTime,w=v+d/1e3;m._volume=i,m._node.gain.setValueAtTime(i,v),m._node.gain.linearRampToValueAtTime(s,w)}y._startFadeInterval(m,i,s,d,_[f],typeof g>"u")}}return y},_startFadeInterval:function(i,s,d,g,y,_){var f=this,m=s,v=d-s,w=Math.abs(v/.01),S=Math.max(4,w>0?g/w:g),b=Date.now();i._fadeTo=d,i._interval=setInterval(function(){var N=(Date.now()-b)/g;b=Date.now(),m+=v*N,m=Math.round(m*100)/100,v<0?m=Math.max(d,m):m=Math.min(d,m),f._webAudio?i._volume=m:f.volume(m,i._id,!0),_&&(f._volume=m),(d<s&&m<=d||d>s&&m>=d)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,f.volume(d,i._id),f._emit("fade",i._id))},S)},_stopFade:function(i){var s=this,d=s._soundById(i);return d&&d._interval&&(s._webAudio&&d._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(d._interval),d._interval=null,s.volume(d._fadeTo,i),d._fadeTo=null,s._emit("fade",i)),s},loop:function(){var i=this,s=arguments,d,g,y;if(s.length===0)return i._loop;if(s.length===1)if(typeof s[0]=="boolean")d=s[0],i._loop=d;else return y=i._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(d=s[0],g=parseInt(s[1],10));for(var _=i._getSoundIds(g),f=0;f<_.length;f++)y=i._soundById(_[f]),y&&(y._loop=d,i._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=d,d&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,i.playing(_[f])&&(i.pause(_[f],!0),i.play(_[f],!0)))));return i},rate:function(){var i=this,s=arguments,d,g;if(s.length===0)g=i._sounds[0]._id;else if(s.length===1){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof d=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,s)}}),i;typeof g>"u"&&(i._rate=d),g=i._getSoundIds(g);for(var m=0;m<g.length;m++)if(f=i._soundById(g[m]),f){i.playing(g[m])&&(f._rateSeek=i.seek(g[m]),f._playStart=i._webAudio?n.ctx.currentTime:f._playStart),f._rate=d,i._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,n.ctx.currentTime):f._node&&(f._node.playbackRate=d);var v=i.seek(g[m]),w=(i._sprite[f._sprite][0]+i._sprite[f._sprite][1])/1e3-v,S=w*1e3/Math.abs(f._rate);(i._endTimers[g[m]]||!f._paused)&&(i._clearTimer(g[m]),i._endTimers[g[m]]=setTimeout(i._ended.bind(i,f),S)),i._emit("rate",f._id)}}else return f=i._soundById(g),f?f._rate:i._rate;return i},seek:function(){var i=this,s=arguments,d,g;if(s.length===0)i._sounds.length&&(g=i._sounds[0]._id);else if(s.length===1){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):i._sounds.length&&(g=i._sounds[0]._id,d=parseFloat(s[0]))}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,s)}}),i;var f=i._soundById(g);if(f)if(typeof d=="number"&&d>=0){var m=i.playing(g);m&&i.pause(g,!0),f._seek=d,f._ended=!1,i._clearTimer(g),!i._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var v=function(){m&&i.play(g,!0),i._emit("seek",g)};if(m&&!i._webAudio){var w=function(){i._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(i._webAudio){var S=i.playing(g)?n.ctx.currentTime-f._playStart:0,b=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(b+S*Math.abs(f._rate))}else return f._node.currentTime;return i},playing:function(i){var s=this;if(typeof i=="number"){var d=s._soundById(i);return d?!d._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(i){var s=this,d=s._duration,g=s._soundById(i);return g&&(d=s._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var i=this,s=i._sounds,d=0;d<s.length;d++)s[d]._paused||i.stop(s[d]._id),i._webAudio||(i._clearSound(s[d]._node),s[d]._node.removeEventListener("error",s[d]._errorFn,!1),s[d]._node.removeEventListener(n._canPlayEvent,s[d]._loadFn,!1),s[d]._node.removeEventListener("ended",s[d]._endFn,!1),n._releaseHtml5Audio(s[d]._node)),delete s[d]._node,i._clearTimer(s[d]._id);var g=n._howls.indexOf(i);g>=0&&n._howls.splice(g,1);var y=!0;for(d=0;d<n._howls.length;d++)if(n._howls[d]._src===i._src||i._src.indexOf(n._howls[d]._src)>=0){y=!1;break}return l&&y&&delete l[i._src],n.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,s,d,g){var y=this,_=y["_on"+i];return typeof s=="function"&&_.push(g?{id:d,fn:s,once:g}:{id:d,fn:s}),y},off:function(i,s,d){var g=this,y=g["_on"+i],_=0;if(typeof s=="number"&&(d=s,s=null),s||d)for(_=0;_<y.length;_++){var f=d===y[_].id;if(s===y[_].fn&&f||!s&&f){y.splice(_,1);break}}else if(i)g["_on"+i]=[];else{var m=Object.keys(g);for(_=0;_<m.length;_++)m[_].indexOf("_on")===0&&Array.isArray(g[m[_]])&&(g[m[_]]=[])}return g},once:function(i,s,d){var g=this;return g.on(i,s,d,1),g},_emit:function(i,s,d){for(var g=this,y=g["_on"+i],_=y.length-1;_>=0;_--)(!y[_].id||y[_].id===s||i==="load")&&(setTimeout((function(f){f.call(this,s,d)}).bind(g,y[_].fn),0),y[_].once&&g.off(i,y[_].fn,y[_].id));return g._loadQueue(i),g},_loadQueue:function(i){var s=this;if(s._queue.length>0){var d=s._queue[0];d.event===i&&(s._queue.shift(),s._loadQueue()),i||d.action()}return s},_ended:function(i){var s=this,d=i._sprite;if(!s._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(s._ended.bind(s,i),100),s;var g=!!(i._loop||s._sprite[d][2]);if(s._emit("end",i._id),!s._webAudio&&g&&s.stop(i._id,!0).play(i._id),s._webAudio&&g){s._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=n.ctx.currentTime;var y=(i._stop-i._start)*1e3/Math.abs(i._rate);s._endTimers[i._id]=setTimeout(s._ended.bind(s,i),y)}return s._webAudio&&!g&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,s._clearTimer(i._id),s._cleanBuffer(i._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(i._id,!0),s},_clearTimer:function(i){var s=this;if(s._endTimers[i]){if(typeof s._endTimers[i]!="function")clearTimeout(s._endTimers[i]);else{var d=s._soundById(i);d&&d._node&&d._node.removeEventListener("ended",s._endTimers[i],!1)}delete s._endTimers[i]}return s},_soundById:function(i){for(var s=this,d=0;d<s._sounds.length;d++)if(i===s._sounds[d]._id)return s._sounds[d];return null},_inactiveSound:function(){var i=this;i._drain();for(var s=0;s<i._sounds.length;s++)if(i._sounds[s]._ended)return i._sounds[s].reset();return new a(i)},_drain:function(){var i=this,s=i._pool,d=0,g=0;if(!(i._sounds.length<s)){for(g=0;g<i._sounds.length;g++)i._sounds[g]._ended&&d++;for(g=i._sounds.length-1;g>=0;g--){if(d<=s)return;i._sounds[g]._ended&&(i._webAudio&&i._sounds[g]._node&&i._sounds[g]._node.disconnect(0),i._sounds.splice(g,1),d--)}}},_getSoundIds:function(i){var s=this;if(typeof i>"u"){for(var d=[],g=0;g<s._sounds.length;g++)d.push(s._sounds[g]._id);return d}else return[i]},_refreshBuffer:function(i){var s=this;return i._node.bufferSource=n.ctx.createBufferSource(),i._node.bufferSource.buffer=l[s._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,n.ctx.currentTime),s},_cleanBuffer:function(i){var s=this,d=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return s;if(n._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),d))try{i.bufferSource.buffer=n._scratchBuffer}catch{}return i.bufferSource=null,s},_clearSound:function(i){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(i){this._parent=i,this.init()};a.prototype={init:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,s._sounds.push(i),i.create(),i},create:function(){var i=this,s=i._parent,d=n._muted||i._muted||i._parent._muted?0:i._volume;return s._webAudio?(i._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),i._node.gain.setValueAtTime(d,n.ctx.currentTime),i._node.paused=!0,i._node.connect(n.masterGain)):n.noAudio||(i._node=n._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(n._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=s._src,i._node.preload=s._preload===!0?"auto":s._preload,i._node.volume=d*n.volume(),i._node.load()),i},reset:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,s=i._parent;s._duration=Math.ceil(i._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),i._node.removeEventListener(n._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,s=i._parent;s._duration===1/0&&(s._duration=Math.ceil(i._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var l={},o=function(i){var s=i._src;if(l[s]){i._duration=l[s].duration,p(i);return}if(/^data:[^;]+;base64,/.test(s)){for(var d=atob(s.split(",")[1]),g=new Uint8Array(d.length),y=0;y<d.length;++y)g[y]=d.charCodeAt(y);c(g.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,s,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(f){_.setRequestHeader(f,i._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}c(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete l[s],i.load())},u(_)}},u=function(i){try{i.send()}catch{i.onerror()}},c=function(i,s){var d=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(y){y&&s._sounds.length>0?(l[s._src]=y,p(s,y)):d()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(i).then(g).catch(d):n.ctx.decodeAudioData(i,g,d)},p=function(i,s){s&&!i._duration&&(i._duration=s.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=s?parseInt(s[1],10):null;if(i&&d&&d<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof fr<"u"?(fr.HowlerGlobal=t,fr.Howler=n,fr.Howl=r,fr.Sound=a):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=a)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var a=r._howls.length-1;a>=0;a--)r._howls[a].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(r=typeof r!="number"?l._pos[1]:r,a=typeof a!="number"?l._pos[2]:a,typeof n=="number")l._pos=[n,r,a],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,r,a,l,o,u){var c=this;if(!c.ctx||!c.ctx.listener)return c;var p=c._orientation;if(r=typeof r!="number"?p[1]:r,a=typeof a!="number"?p[2]:a,l=typeof l!="number"?p[3]:l,o=typeof o!="number"?p[4]:o,u=typeof u!="number"?p[5]:u,typeof n=="number")c._orientation=[n,r,a,l,o,u],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(u,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(n,r,a,l,o,u);else return p;return c},Howl.prototype.init=function(n){return function(r){var a=this;return a._orientation=r.orientation||[1,0,0],a._stereo=r.stereo||null,a._pos=r.pos||null,a._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},a._onstereo=r.onstereo?[{fn:r.onstereo}]:[],a._onpos=r.onpos?[{fn:r.onpos}]:[],a._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(n,r)}}),a;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")a._stereo=n,a._pos=[n,0,0];else return a._stereo;for(var o=a._getSoundIds(r),u=0;u<o.length;u++){var c=a._soundById(o[u]);if(c)if(typeof n=="number")c._stereo=n,c._pos=[n,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&t(c,l),l==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(n,0,0):c._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),a._emit("stereo",c._id);else return c._stereo}return a},Howl.prototype.pos=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,a,l)}}),o;if(r=typeof r!="number"?0:r,a=typeof a!="number"?-.5:a,typeof l>"u")if(typeof n=="number")o._pos=[n,r,a];else return o._pos;for(var u=o._getSoundIds(l),c=0;c<u.length;c++){var p=o._soundById(u[c]);if(p)if(typeof n=="number")p._pos=[n,r,a],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):p._panner.setPosition(n,r,a)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,a,l)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,a=typeof a!="number"?o._orientation[2]:a,typeof l>"u")if(typeof n=="number")o._orientation=[n,r,a];else return o._orientation;for(var u=o._getSoundIds(l),c=0;c<u.length;c++){var p=o._soundById(u[c]);if(p)if(typeof n=="number")p._orientation=[n,r,a],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,a)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,a,l,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")a=r[0],typeof l>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),n._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(a=r[0],l=parseInt(r[1],10));for(var u=n._getSoundIds(l),c=0;c<u.length;c++)if(o=n._soundById(u[c]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:p.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:p.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:p.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:p.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:p.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:p.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=p.coneInnerAngle,x.coneOuterAngle=p.coneOuterAngle,x.coneOuterGain=p.coneOuterGain,x.distanceModel=p.distanceModel,x.maxDistance=p.maxDistance,x.refDistance=p.refDistance,x.rolloffFactor=p.rolloffFactor,x.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,a=r._parent;r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,n.call(this),r._stereo?a.stereo(r._stereo):r._pos&&a.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,a=r._parent;return r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,r._stereo?a.stereo(r._stereo):r._pos?a.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,a._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Nt);const wa={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},ti={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},Cu={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},Au={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},Ym={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},vn=class vn{constructor(){ie(this,"bgmMap",new Map);ie(this,"sfxMap",new Map);ie(this,"currentBGM",null);ie(this,"masterVolume",1);ie(this,"bgmVolume",1);ie(this,"sfxVolume",1);ie(this,"voiceVolume",1);ie(this,"isMuted",!1);ie(this,"initialized",!1);ie(this,"currentVoice",null)}static getInstance(){return vn.instance||(vn.instance=new vn),vn.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=wa[n],a=new Nt.Howl({src:[Cu[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,a)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=ti[n],a=new Nt.Howl({src:[Au[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,a)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const a=wa[t];r=new Nt.Howl({src:[Cu[t]],volume:0,loop:a.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const a=wa[t];r.fade(0,a.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=ti[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new Nt.Howl({src:[Au[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=Ym[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const a=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const l=new Nt.Howl({src:[a],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=l,l.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),Nt.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=wa[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=ti[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,Nt.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,Nt.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};ie(vn,"instance");let qi=vn;const gt=qi.getInstance(),gn=e=>{gt&&gt.playBGM(e)},se=e=>{gt&&gt.playSFX(e)},Km=()=>{gt&&gt.stopBGM()};class Zm{constructor(){ie(this,"cards",[]);ie(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let a=0;a<6;a++){const l=t[a%4];this.cards.push({id:`${r}-${a}-${Math.random().toString(36).substr(2,9)}`,suit:l,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],a=[];for(let l=0;l<5;l++){const o=this.cards[l];o.owner="player",t.push(o)}for(let l=5;l<10;l++){const o=this.cards[l];o.owner="ai",n.push(o)}for(let l=10;l<15;l++){const o=this.cards[l];o.owner="ai2",r.push(o)}for(let l=15;l<20;l++){const o=this.cards[l];o.owner="ai3",a.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:a,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const a=this.cards.find(l=>l.id===r);a&&(a.owner="table",n.push(a))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(a=>a.owner===null).slice(0,t);for(const a of r)a.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const Jm=1/3,qm=1/2,eh=1,th=.1,nh=.9,rh=.5,ah=.25,lh=.15,ih=.2,oh=.8,Nu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class sh{getBaseHitChance(t){return t===0?Jm:t===1?qm:eh}performGeass(t,n,r=null,a=0,l=0){let o=this.getBaseHitChance(l);if(o+=a,r==="cc"&&!n.ccReviveUsed&&Math.random()<o&&n.hp<=1&&Math.random()<rh)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"&&Math.random()<lh)return Math.random()<ah?{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0,isDodge:!0}:{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0};if(l<2&&(o=Math.max(th,Math.min(nh,o))),Math.random()<o){const x={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},i=Nu[Math.floor(Math.random()*Nu.length)];return{activated:!0,hit:!0,damage:1,newStats:x,funnyAction:i.description,message:`Geass命中！${i.emoji} ${i.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(oh,ih*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const ni={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},ri={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},ai={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},li={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},uh={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:ni,skillName:ni.name,skillDescription:ni.description,stats:{hp:3,difficulty:4}},ch={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:ri,skillName:ri.name,skillDescription:ri.description,stats:{hp:3,difficulty:2}},dh={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:ai,skillName:ai.name,skillDescription:ai.description,stats:{hp:4,difficulty:2}},fh={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:li,skillName:li.name,skillDescription:li.description,stats:{hp:3,difficulty:3}},ph={lelouch:uh,cc:ch,suzaku:dh,kallen:fh};function Al(e){return ph[e]}function ka(e){const t=Al(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Xn(e){const t=Al(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function bu(e){if(!Xn(e))return e;const t=Al(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function mh(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function hh(e){const t=Al(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Eu(e){return e.characterId==="kallen"&&Xn(e)?4:3}class gh{constructor(){ie(this,"cardSystem");ie(this,"geassSystem");ie(this,"state");this.cardSystem=new Zm,this.geassSystem=new sh,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:a,ai2Cards:l,ai3Cards:o}=this.cardSystem.dealCards(),u=this.cardSystem.setLiarCard(),c=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],x=new Map;x.set("player",ka(t)),x.set("ai",ka(p[0])),x.set("ai2",ka(p[1])),x.set("ai3",ka(p[2]));const i=d=>({lelouch:"鲁鲁修",cc:"C.C.",suzaku:"朱雀",kallen:"卡莲"})[d]||d,s=d=>d==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:c===0?"player_turn":"ai_turn",liarCard:u,playerCharacter:t,currentPlayerIndex:c,playerHand:r,aiPlayers:[{id:"ai",name:i(p[0]),character:p[0],hand:a,stats:{hp:s(p[0]),maxHp:s(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:i(p[1]),character:p[1],hand:l,stats:{hp:s(p[1]),maxHp:s(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:i(p[2]),character:p[2],hand:o,stats:{hp:s(p[2]),maxHp:s(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:s(t),maxHp:s(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},characterStates:x},this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const a=mh(r);this.state.characterStates.set(n,a)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const u of t){const c=this.state.playerHand.find(p=>p.id===u);if(!c)return!1;r.push(c)}const a=this.state.characterStates.get("player"),l=a?Eu(a):1;if(t.length>l)return!1;this.state.playerHand=this.state.playerHand.filter(u=>!t.includes(u.id));const o=r.some(u=>u.rank!==n&&!u.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,a=n.playerId;this.state.phase="geass";const l=r?a:t,o=t==="player"?"玩家":t==="ai"?"C.C.":t==="ai2"?"朱雀":"卡莲",u=a==="player"?"玩家":a==="ai"?"C.C.":a==="ai2"?"朱雀":"卡莲";return this.state.lastAction=`${o}向${u}发起质疑！`,this.executeGeass(l,t),{success:!0,isBluff:r,targetId:a}}executeGeass(t,n){const r=this.state.characterStates.get(t);let a;if(t==="player")a=this.state.playerStats;else{const u=this.state.aiPlayers.find(c=>c.id===t);if(!u)return;a=u.stats}let l=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(l=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,a,(r==null?void 0:r.characterId)||null,l,this.state.turnState.geassConsecutiveMisses);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const c=this.state.aiPlayers.find(p=>p.id===n);c&&(c.stats={...c.stats,hp:Math.max(0,c.stats.hp-1)},c.stats.hp<=0&&(c.isActive=!1,this.checkGameOver()))}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(c=>c.id===t);u&&(u.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const u=this.state.aiPlayers.find(c=>c.id===t);u&&(u.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(c=>c.id===t);u&&(u.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!Xn(n))return!1;const r=bu(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const a=["Q","K","A"],o=(a.indexOf(this.state.liarCard)+1)%a.length;this.state.liarCard=a[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const a=t==="player"?"玩家":t;this.state.lastAction=`${a}发动了${mt(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?Xn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:a,ai3Cards:l}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let u;if(t!==void 0)u=this.findNextActivePlayer(t);else{const c=this.getActivePlayerIndices();u=c[Math.floor(Math.random()*c.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=a,this.state.aiPlayers[2].hand=l,this.state.liarCard=o,this.state.phase=u===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=u,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((c,p)=>{this.state.characterStates.set(p,hh(c))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=this.state.aiPlayers.find(l=>l.id==="ai3");n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=this.state.aiPlayers.find(l=>l.id==="ai2");r&&r.isActive&&r.stats.hp>0&&t.push(2);const a=this.state.aiPlayers.find(l=>l.id==="ai");return a&&a.isActive&&a.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const a=(t+r)%4;if(n.includes(a))return a}return n[0]}getState(){return JSON.parse(JSON.stringify(this.state))}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(a=>a.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const a=this.state.characterStates.get("player"),l=a?this.getMaxPlayCount(a):1;this.state.playerSelectedCards.length<l&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}getMaxPlayCount(t){return t.characterId==="kallen"?4:3}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t){if(this.state.phase!=="ai_turn")return this.getState();const n=this.state.aiPlayers.find(o=>o.id===t);if(!n||n.hand.length===0)return this.getState();const r=Math.min(n.hand.length,Math.floor(Math.random()*2)+1),a=n.hand.slice(0,r).map(o=>o.id),l=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,a,l),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const a=this.state.aiPlayers.find(p=>p.id===t);if(!a)return!1;const l=[];for(const p of n){const x=a.hand.find(i=>i.id===p);if(!x)return!1;l.push(x)}const o=this.state.characterStates.get(t),u=o?Eu(o):1;if(n.length>u)return!1;a.hand=a.hand.filter(p=>!n.includes(p.id));const c=l.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:l,playerId:t,isBluff:c},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...l],this.state.lastAction=`${a.name}出了${n.length}张牌，声称是${r}`,a.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?Xn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!Xn(n))throw new Error("技能冷却中或已使用");const r=bu(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(t=!1){var u,c;if(this.state.turnState.playedCards&&this.state.turnState.tableCards.push(...this.state.turnState.playedCards.actualCards),t){const p=this.state.turnState.lastPlayerId||((u=this.state.turnState.playedCards)==null?void 0:u.playerId);return this.state.turnState.playedCards=null,this.state.lastAction="无人质疑，回合继续",p==="player"?this.state.phase="player_turn":this.state.phase="ai_turn",console.log(`[endChallengePhase] 无人质疑，${p==="player"?"玩家":p==="ai"?"C.C.":p==="ai2"?"朱雀":p==="ai3"?"卡莲":p}继续出牌`),this.getState()}const n=(c=this.state.turnState.playedCards)==null?void 0:c.playerId;let a=((n==="player"?0:n==="ai3"?1:n==="ai2"?2:n==="ai"?3:0)+1)%4,l=0;for(;l<4;){if(a===0){if(this.state.playerStats.hp>0)break}else{const p=a===1?2:a===2?1:0,x=this.state.aiPlayers[p];if(x&&x.isActive&&x.stats.hp>0)break}a=(a+1)%4,l++}return this.state.currentPlayerIndex=a,this.state.phase=a===0?"player_turn":"ai_turn",this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,console.log(`[endChallengePhase] 出牌者: ${n}, 下一个玩家: ${a===0?"玩家":a===1?"AI3(卡莲)":a===2?"AI2(朱雀)":"AI1(C.C.)"}(索引${a})`),this.state.lastAction="质疑阶段结束，回合继续",this.getState()}}const vh="code-geass-game",Tu={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(vh)}catch(t){console.error("Failed to clear localStorage:",t)}}},Pu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],yh=e=>e==="player"?0:e==="ai"?3:e==="ai2"?2:e==="ai3"?1:0,xh=e=>e===0?"player":e===1?"ai3":e===2?"ai2":e===3?"ai":"player",_h=(e,t)=>{for(let n=0;n<4;n++){const r=(e+n)%4,a=xh(r);if(a==="player"){if(t.playerStats.hp>0)return r}else{const l=t.aiPlayers.find(o=>o.id===a);if(l&&l.isActive&&l.stats.hp>0)return r}}return e},wh=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let a=t??null;if(!a&&r)if(r==="player")a=mt(n??void 0);else{const u=e.aiPlayers.find(c=>c.id===r);a=(u==null?void 0:u.name)??null}if(!a)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(a===mt(n??void 0))return{loserId:"player",actualLoserName:a};const l=e.aiPlayers.find(u=>u.name===a);return l?{loserId:l.id,actualLoserName:a}:(console.error(`[determineLoserId] 找不到AI: ${a}`),{loserId:null,actualLoserName:a})},kh=(e,t,n,r)=>{se("geass-hit");const a=Pu[Math.floor(Math.random()*Pu.length)];r(a),se(a.soundType),n(`${t}受到Geass！`),n(`突然${a.description}`),n(`Geass命中！${t}HP-1`)},Sh=(e,t,n)=>{se("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},Ch=(e,t)=>{setTimeout(()=>{gn(e==="player"?"victory":"defeat"),t("result")},2e3)},Ah=(e,t,n,r,a,l,o,u,c)=>{var y;let x=(yh(t)+1)%4;x=_h(x,n);const i=e.resetRound(x);l(i),o([]);const s=i.currentPlayerIndex===0,d={1:2,2:1,3:0},g=s?mt(r??void 0):(y=i.aiPlayers[d[i.currentPlayerIndex]])==null?void 0:y.name;a(`【第${i.turnState.turnNumber}回合】骗子牌是${i.liarCard}`),a(`${g}先手！`),u(!1),s||setTimeout(()=>{var _;(_=c.current)==null||_.call(c)},1500)},Nh=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:a,setSelectedCards:l,setIsProcessing:o,setCurrentScreen:u,aiTurnRef:c})=>E.useCallback((p,x,i,s)=>{if(r(p),p.geassResult){const g=s||(i||"对手");p.geassResult.hit?kh(p.geassResult,g,n,a):Sh(p.geassResult,g,n)}if(p.phase==="game_over"){Ch(p.winner,u);return}setTimeout(()=>{a(null);const d=e.current;if(!d)return;const g=d.getState(),{loserId:y,actualLoserName:_}=wh(g,s,t);if(!y||!_){o(!1);return}Ah(d,y,g,t,n,r,l,o,c)},2500)},[e,t,n,r,a,l,o,u,c]),At={THINKING:1e3,PLAY_TO_CHALLENGE:2e3,CHALLENGE_TO_RESOLVE:2e3,GEASS_RESULT_DISPLAY:2e3,TURN_SWITCH:1e3,ROUND_START:600,NO_CHALLENGE_DISPLAY:1500,CHALLENGE_DISPLAY:1500,AI_CHALLENGE_INTERVAL:1500},bh=()=>{const[e,t]=E.useState("main-menu"),[n,r]=E.useState(null),[a,l]=E.useState(1),[o,u]=E.useState(["cc","suzaku","kallen"]),[c,p]=E.useState({}),x=E.useRef(null),[i,s]=E.useState(null),[d,g]=E.useState([]),[y,_]=E.useState(null),[f,m]=E.useState([]),[v,w]=E.useState(!1),[S,b]=E.useState({isThinking:!1,aiId:null}),N=E.useRef(null);E.useEffect(()=>((async()=>{try{await gt.preload(),console.log("音效预加载完成");const j=Tu.load("gameSettings");j&&(gt.setBGMVolume(j.musicVolume??.5),gt.setSFXVolume(j.soundVolume??.7)),gn("main-menu")}catch(j){console.warn("初始化失败:",j)}})(),()=>{Km()}),[]),E.useEffect(()=>{const R=gt.getStatus(),j={soundEnabled:R.enabled,musicEnabled:!0,soundVolume:R.sfxVolume,musicVolume:R.bgmVolume};Tu.save("gameSettings",j)},[]);const C=E.useCallback(R=>{g(j=>[...j,R])},[]),I=Nh({gameEngineRef:x,selectedCharacter:n,addLog:C,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:m,setIsProcessing:w,setCurrentScreen:R=>t(R),aiTurnRef:N}),z=E.useCallback(async(R,j)=>{var _e,et,Ne,Bt;console.log("[enterChallengePhase] 进入质疑阶段");const O=(_e=j.turnState.playedCards)==null?void 0:_e.playerId;if(!O){console.error("[enterChallengePhase] 没有出牌记录");return}const G=(le=>le==="player"?0:le==="ai"?3:le==="ai2"?2:le==="ai3"?1:0)(O);let H=(G+1)%4,K=0;for(;K<3;){if(H===G){H=(H+1)%4;continue}if(H===0){console.log("[enterChallengePhase] 轮到玩家质疑，等待玩家决策");const he=R.enterChallengePhase();s(he),w(!1),C("等待玩家决策...");return}const le=H===1?2:H===2?1:0,U=j.aiPlayers[le];if(!U||!U.isActive||U.stats.hp<=0){console.log("[enterChallengePhase] AI已淘汰，跳过:",U==null?void 0:U.name),H=(H+1)%4,K++;continue}const Pn=Math.random()<.3;if(console.log("[enterChallengePhase] AI决策:",{aiName:U.name,shouldChallenge:Pn}),Pn){se("challenge");const he=O==="player"?mt(n):((et=j.aiPlayers.find(nt=>nt.id===O))==null?void 0:et.name)||O;C(`${U.name}向${he}发起质疑！`);const ct={...j,lastAction:`${U.name}向${he}发起质疑！`};s(ct),await new Promise(nt=>setTimeout(nt,At.CHALLENGE_DISPLAY));const dt=R.aiChallengeDecision(U.id),wt=j.turnState.playedCards,kt=wt?wt.actualCards.some(nt=>nt.rank!==wt.claimedRank&&!nt.isJoker):!1;C(kt?`质疑成功！${he}在撒谎！`:`质疑失败！${he}没有撒谎！`);const Ht=kt?O:U.id,tt=Ht==="player"?mt(n):((Ne=dt.aiPlayers.find(nt=>nt.id===Ht))==null?void 0:Ne.name)||Ht;s(dt),I(dt,U.name,he,tt);return}else{C(`${U.name}选择不质疑`);const he={...R.getState(),lastAction:`${U.name}选择不质疑`};s(he),await new Promise(ct=>setTimeout(ct,At.NO_CHALLENGE_DISPLAY))}H=(H+1)%4,K++}console.log("[enterChallengePhase] 所有人都未质疑，原出牌者继续"),C("无人质疑，回合继续");const Q=R.endChallengePhase(!0);s(Q);const $=Q.turnState.lastPlayerId||((Bt=Q.turnState.playedCards)==null?void 0:Bt.playerId);$==="player"||!$?(w(!1),C("轮到玩家出牌")):setTimeout(()=>{var le;(le=N.current)==null||le.call(N)},At.TURN_SWITCH)},[C,n,I]),W=E.useCallback(()=>{if(console.log("[handleAITurn] 开始执行"),!x.current){console.log("[handleAITurn] 游戏引擎不存在，返回");return}const R=x.current,j=R.getState();if(console.log("[handleAITurn] 当前状态:",{phase:j.phase,currentPlayerIndex:j.currentPlayerIndex}),j.phase==="player_turn"||j.phase==="game_over"){console.log("[handleAITurn] 不是AI回合，跳过");return}const B={1:2,2:1,3:0}[j.currentPlayerIndex];if(B===void 0||B<0||B>=j.aiPlayers.length){console.log("[handleAITurn] AI索引无效:",j.currentPlayerIndex,"->",B);return}const G=j.aiPlayers[B];if(!G){console.log("[handleAITurn] AI不存在");return}const H=G.id;if(!G.isActive||G.stats.hp<=0){if(console.log("[handleAITurn] AI已淘汰，跳过:",G.name),j.aiPlayers.filter($=>$.isActive&&$.stats.hp>0).length===0&&j.playerStats.hp>0){console.log("[handleAITurn] 只剩玩家存活，玩家获胜"),j.winner="player",j.phase="game_over",s({...j}),C("游戏结束！玩家获胜！"),w(!1);return}const Q=(j.currentPlayerIndex+1)%4;j.currentPlayerIndex=Q,s({...j}),Q!==0?setTimeout(()=>{var $;return($=N.current)==null?void 0:$.call(N)},At.TURN_SWITCH):j.playerStats.hp<=0&&setTimeout(()=>{var $;return($=N.current)==null?void 0:$.call(N)},At.TURN_SWITCH);return}w(!0),se("turn-start"),C(`${G.name} 的回合...`),b({isThinking:!0,aiId:H}),setTimeout(()=>{var K;try{console.log("[handleAITurn] AI开始出牌:",G.name),b({isThinking:!1,aiId:null});const Q=R.aiPlayCards(H);console.log("[handleAITurn] AI出牌完成, 新状态:",{phase:Q.phase,playedBy:(K=Q.turnState.playedCards)==null?void 0:K.playerId}),s(Q);const $=Q.turnState.playedCards;if($){const me=$.cardIds.length,_e=$.claimedRank;C(`${G.name}出了${me}张牌，声称是${_e}`)}setTimeout(()=>{console.log("[handleAITurn] 进入质疑阶段"),z(R,Q)},At.PLAY_TO_CHALLENGE)}catch(Q){console.error("AI出牌错误:",Q),w(!1),b({isThinking:!1,aiId:null})}},At.THINKING)},[C,z]);E.useEffect(()=>{N.current=W},[W]);const xe=E.useCallback(()=>{se("button-click"),t("character-select")},[]),Ie=E.useCallback(()=>{se("button-click"),t("settings")},[]),Ae=E.useCallback(()=>{se("button-click"),t("help")},[]),xt=E.useCallback((R,j)=>{se("character-select"),r(R),l(j||Math.floor(Math.random()*4)+1)},[]),Ot=E.useCallback(()=>{var $;if(!n)return;se("button-click");const O=["lelouch","cc","suzaku","kallen"].filter(me=>me!==n).sort(()=>Math.random()-.5);u(O);const B={};O.forEach(me=>{B[me]=Math.floor(Math.random()*4)+1}),p(B),x.current=new gh;const G=x.current.initializeGame(n,O);s(G),m([]);const H=G.currentPlayerIndex===0,K={1:2,2:1,3:0},Q=H?mt(n):($=G.aiPlayers[K[G.currentPlayerIndex]])==null?void 0:$.name;g(["游戏开始！",`【第1回合】骗子牌是${G.liarCard}`,`${Q}先手！`]),t("game-table"),gn("game-normal"),H||setTimeout(()=>{W()},1500)},[n,W]),Ft=E.useCallback(()=>{se("button-click"),t("main-menu"),r(null)},[]),T=E.useCallback(()=>{se("button-click"),t("main-menu"),r(null),s(null),g([]),m([]),_(null),gn("main-menu")},[]),k=E.useCallback(R=>{if(!x.current||v)return;const j=x.current,O=j.getState();if(console.log("[handleToggleCardSelection] 当前阶段:",O.phase,"是否是玩家回合:",O.phase==="player_turn"),O.phase!=="player_turn"){console.log("[handleToggleCardSelection] 不是玩家回合，无法选择牌");return}j.toggleCardSelection(R);const B=j.getState();console.log("[handleToggleCardSelection] 选中状态更新:",B.playerSelectedCards),m(B.playerSelectedCards),se("button-click")},[v]),M=E.useCallback(()=>{if(!x.current||f.length===0||v)return;w(!0),se("card-play");const R=x.current;try{const j=R.playerPlayCards();s(j),m([]);const O=mt(n),B=j.turnState.playedCards;if(B){const G=B.cardIds.length,H=B.claimedRank;C(`${O}出了${G}张牌，声称是${H}`)}setTimeout(()=>{z(R,j)},At.PLAY_TO_CHALLENGE)}catch(j){console.error("出牌错误:",j),w(!1)}},[f,v,C,n,z]),V=E.useCallback(()=>{var _e,et;if(!x.current||v)return;w(!0),se("challenge");const R=x.current,j=R.getState(),O=j.turnState.playedCards,B=O==null?void 0:O.playerId,G=mt(n),H=B==="player"?G:((_e=j.aiPlayers.find(Ne=>Ne.id===B))==null?void 0:_e.name)||B;C(`${G}向${H}发起质疑！`);const K=R.playerChallengeDecision(!0),Q=O?O.actualCards.some(Ne=>Ne.rank!==O.claimedRank&&!Ne.isJoker):!1;C(Q?`质疑成功！${H}在撒谎！`:`质疑失败！${H}没有撒谎！`);const $=Q?B:"player",me=$==="player"?G:((et=j.aiPlayers.find(Ne=>Ne.id===$))==null?void 0:et.name)||$;s(K),I(K,G,H,me)},[v,C,n,I]),q=E.useCallback(()=>{var _e,et,Ne,Bt;if(!x.current||v)return;se("button-click");const R=x.current,j=R.getState(),O=(_e=j.turnState.playedCards)==null?void 0:_e.playerId,B=mt(n);C(`${B}选择不质疑`);const H=(le=>le==="player"?0:le==="ai"?3:le==="ai2"?2:le==="ai3"?1:0)(O||"player");let K=1,Q=0;for(;Q<3&&K!==H;){const le=K===1?2:K===2?1:0,U=j.aiPlayers[le];if(!U||!U.isActive||U.stats.hp<=0){console.log("[handlePass] AI已淘汰，跳过:",U==null?void 0:U.name),K=(K+1)%4,Q++;continue}if(Math.random()<.3){se("challenge");const he=O==="player"?B:((et=j.aiPlayers.find(tt=>tt.id===O))==null?void 0:et.name)||O;C(`${U.name}向${he}发起质疑！`);const ct=R.aiChallengeDecision(U.id),dt=j.turnState.playedCards,wt=dt?dt.actualCards.some(tt=>tt.rank!==dt.claimedRank&&!tt.isJoker):!1;C(wt?`质疑成功！${he}在撒谎！`:`质疑失败！${he}没有撒谎！`);const kt=wt?O:U.id,Ht=kt==="player"?B:((Ne=ct.aiPlayers.find(tt=>tt.id===kt))==null?void 0:Ne.name)||kt;s(ct),I(ct,U.name,he,Ht);return}else C(`${U.name}选择不质疑`);K=(K+1)%4,Q++}C("无人质疑，回合继续");const $=R.endChallengePhase();s($);const me=$.currentPlayerIndex;if(me===0){C(`【第${$.turnState.turnNumber}回合】骗子牌是${$.liarCard}`);const le=me===0?B:(Bt=j.aiPlayers[me-1])==null?void 0:Bt.name;C(`${le}先手！`),w(!1)}else setTimeout(()=>{W()},At.TURN_SWITCH)},[v,C,n,I,W]),Ue=E.useCallback(R=>{if(!x.current||n!=="lelouch")return;const j=x.current;if(!j.canPlayerUseSkill("player")){C("❌ 绝对命令使用次数已耗尽（每局限1次）");return}se("geass-activate");const O=j.lelouchChangeLiarCard(R);s(O),C(`鲁鲁修发动绝对命令！骗子牌变为 ${R}`),C("⚠️ 绝对命令已使用，本局无法再次使用")},[n,C]),Je=E.useCallback(()=>{se("button-click"),t("character-select"),r(null),s(null),g([]),m([]),_(null),gn("main-menu")},[]),_t=E.useCallback(()=>{se("button-click"),t("main-menu"),r(null),s(null),g([]),m([]),_(null),gn("main-menu")},[]),qe=()=>{var R,j,O,B;switch(e){case"main-menu":return h.jsx(vu,{onStart:xe,onSettings:Ie,onHelp:Ae});case"character-select":return h.jsx(Tm,{characters:ll,selectedId:n,selectedAvatar:a,onSelect:xt,onConfirm:Ot,onBack:Ft});case"game-table":return i?h.jsx(Xm,{gameState:i,selectedCards:f,selectedCharacter:n,selectedAvatar:a,aiCharacters:o,aiAvatars:c,onToggleCardSelection:k,onConfirmPlay:M,onPass:q,onChallenge:V,onBackToMenu:T,onLelouchSkill:Ue,gameLog:d,funnyAction:y,isProcessing:v,canUseSkill:((R=x.current)==null?void 0:R.canPlayerUseSkill("player"))??!0,aiThinkingState:S}):null;case"result":{const G=(i==null?void 0:i.winner)==="player",H=((j=i==null?void 0:i.playerStats)==null?void 0:j.geassSuccessCount)||0,K=((O=i==null?void 0:i.aiPlayers)==null?void 0:O.reduce(($,me)=>{var _e;return $+(((_e=me.stats)==null?void 0:_e.geassSuccessCount)||0)},0))||0,Q=((B=i==null?void 0:i.turnState)==null?void 0:B.turnNumber)||0;return h.jsx(Qm,{isWin:G,playerScore:H,opponentScore:K,turnNumber:Q,onRestart:Je,onMainMenu:_t})}case"settings":return Dt();case"help":return cr();default:return h.jsx(vu,{onStart:xe,onSettings:Ie,onHelp:Ae})}},Dt=()=>h.jsxs("div",{className:"cg-placeholder-screen",children:[h.jsx("h2",{children:"设置"}),h.jsxs("div",{className:"cg-settings-content",children:[h.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),h.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),h.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),cr=()=>h.jsxs("div",{className:"cg-placeholder-screen",children:[h.jsx("h2",{children:"游戏帮助"}),h.jsxs("div",{className:"cg-help-content",children:[h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"🎮 游戏规则"}),h.jsxs("ul",{children:[h.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),h.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),h.jsxs("li",{children:[h.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),h.jsx("li",{children:"质疑后翻牌验证："}),h.jsxs("li",{children:["• 出的牌",h.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),h.jsxs("li",{children:["• 出的牌",h.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),h.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),h.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"👤 角色技能详解"}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),h.jsx("br",{}),h.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),h.jsx("br",{}),h.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),h.jsx("br",{}),h.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),h.jsx("br",{}),h.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"🃏 特殊牌"}),h.jsx("ul",{children:h.jsxs("li",{children:[h.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),h.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return h.jsxs("div",{className:"cg-app",children:[qe(),h.jsx("style",{children:`
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
      `})]})},Eh=ii.createRoot(document.getElementById("root"));Eh.render(h.jsx(pf.StrictMode,{children:h.jsx(bh,{})}));
//# sourceMappingURL=index-BxxtIDG7.js.map
