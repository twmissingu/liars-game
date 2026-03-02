(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var bc=Object.defineProperty,vc=(e,t,n)=>t in e?bc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t,n)=>vc(e,typeof t!="symbol"?t+"":t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var os={exports:{}},ua={},ls={exports:{}},M={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var tr=Symbol.for("react.element"),_c=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Gl=Symbol.iterator;function zc(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,us={};function fn(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||is}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cs(){}cs.prototype=fn.prototype;function Ko(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||is}var Zo=Ko.prototype=new cs;Zo.constructor=Ko;ss(Zo,fn.prototype);Zo.isPureReactComponent=!0;var Ul=Array.isArray,ds=Object.prototype.hasOwnProperty,Jo={current:null},fs={key:!0,ref:!0,__self:!0,__source:!0};function ps(e,t,n){var r,a={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ds.call(t,r)&&!fs.hasOwnProperty(r)&&(a[r]=t[r]);var f=arguments.length-2;if(f===1)a.children=n;else if(1<f){for(var p=Array(f),g=0;g<f;g++)p[g]=arguments[g+2];a.children=p}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)a[r]===void 0&&(a[r]=f[r]);return{$$typeof:tr,type:e,key:o,ref:s,props:a,_owner:Jo.current}}function Lc(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function Mc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $l=/\/+/g;function Ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mc(""+e.key):t.toString(36)}function jr(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case tr:case _c:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+Ea(s,0):r,Ul(a)?(n="",e!=null&&(n=e.replace($l,"$&/")+"/"),jr(a,t,n,"",function(g){return g})):a!=null&&(el(a)&&(a=Lc(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace($l,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",Ul(e))for(var f=0;f<e.length;f++){o=e[f];var p=r+Ea(o,f);s+=jr(o,t,n,p,a)}else if(p=zc(e),typeof p=="function")for(e=p.call(e),f=0;!(o=e.next()).done;)o=o.value,p=r+Ea(o,f++),s+=jr(o,t,n,p,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function sr(e,t,n){if(e==null)return e;var r=[],a=0;return jr(e,r,"","",function(o){return t.call(n,o,a++)}),r}function Pc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Cr={transition:null},Ic={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Jo};function hs(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=fn;M.Fragment=kc;M.Profiler=Sc;M.PureComponent=Ko;M.StrictMode=wc;M.Suspense=Tc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ic;M.act=hs;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Jo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(p in t)ds.call(t,p)&&!fs.hasOwnProperty(p)&&(r[p]=t[p]===void 0&&f!==void 0?f[p]:t[p])}var p=arguments.length-2;if(p===1)r.children=n;else if(1<p){f=Array(p);for(var g=0;g<p;g++)f[g]=arguments[g+2];r.children=f}return{$$typeof:tr,type:e.type,key:a,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jc,_context:e},e.Consumer=e};M.createElement=ps;M.createFactory=function(e){var t=ps.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Nc,render:e}};M.isValidElement=el;M.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:Pc}};M.memo=function(e,t){return{$$typeof:Ac,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};M.unstable_act=hs;M.useCallback=function(e,t){return he.current.useCallback(e,t)};M.useContext=function(e){return he.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return he.current.useDeferredValue(e)};M.useEffect=function(e,t){return he.current.useEffect(e,t)};M.useId=function(){return he.current.useId()};M.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return he.current.useMemo(e,t)};M.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};M.useRef=function(e){return he.current.useRef(e)};M.useState=function(e){return he.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return he.current.useTransition()};M.version="18.3.1";ls.exports=M;var O=ls.exports;const Dt=xc(O);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Oc=O,Fc=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Hc=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function ms(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dc.call(t,r)&&!Bc.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Fc,type:e,key:o,ref:s,props:a,_owner:Hc.current}}ua.Fragment=Rc;ua.jsx=ms;ua.jsxs=ms;os.exports=ua;var u=os.exports,ro={},gs={exports:{}},je={},ys={exports:{}},bs={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(N,E){var L=N.length;N.push(E);e:for(;0<L;){var Y=L-1>>>1,ee=N[Y];if(0<a(ee,E))N[Y]=E,N[L]=ee,L=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var E=N[0],L=N.pop();if(L!==E){N[0]=L;e:for(var Y=0,ee=N.length,lr=ee>>>1;Y<lr;){var kt=2*(Y+1)-1,Aa=N[kt],wt=kt+1,ir=N[wt];if(0>a(Aa,L))wt<ee&&0>a(ir,Aa)?(N[Y]=ir,N[wt]=L,Y=wt):(N[Y]=Aa,N[kt]=L,Y=kt);else if(wt<ee&&0>a(ir,L))N[Y]=ir,N[wt]=L,Y=wt;else break e}}return E}function a(N,E){var L=N.sortIndex-E.sortIndex;return L!==0?L:N.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,f=s.now();e.unstable_now=function(){return s.now()-f}}var p=[],g=[],x=1,l=null,i=3,c=!1,m=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(N){for(var E=n(g);E!==null;){if(E.callback===null)r(g);else if(E.startTime<=N)r(g),E.sortIndex=E.expirationTime,t(p,E);else break;E=n(g)}}function _(N){if(y=!1,b(N),!m)if(n(p)!==null)m=!0,Na(w);else{var E=n(g);E!==null&&Ta(_,E.startTime-N)}}function w(N,E){m=!1,y&&(y=!1,d(T),T=-1),c=!0;var L=i;try{for(b(E),l=n(p);l!==null&&(!(l.expirationTime>E)||N&&!le());){var Y=l.callback;if(typeof Y=="function"){l.callback=null,i=l.priorityLevel;var ee=Y(l.expirationTime<=E);E=e.unstable_now(),typeof ee=="function"?l.callback=ee:l===n(p)&&r(p),b(E)}else r(p);l=n(p)}if(l!==null)var lr=!0;else{var kt=n(g);kt!==null&&Ta(_,kt.startTime-E),lr=!1}return lr}finally{l=null,i=L,c=!1}}var S=!1,C=null,T=-1,A=5,z=-1;function le(){return!(e.unstable_now()-z<A)}function R(){if(C!==null){var N=e.unstable_now();z=N;var E=!0;try{E=C(!0,N)}finally{E?I():(S=!1,C=null)}}else S=!1}var I;if(typeof h=="function")I=function(){h(R)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,He=$.port2;$.port1.onmessage=R,I=function(){He.postMessage(null)}}else I=function(){v(R,0)};function Na(N){C=N,S||(S=!0,I())}function Ta(N,E){T=v(function(){N(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||c||(m=!0,Na(w))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return i},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(N){switch(i){case 1:case 2:case 3:var E=3;break;default:E=i}var L=i;i=E;try{return N()}finally{i=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=i;i=N;try{return E()}finally{i=L}},e.unstable_scheduleCallback=function(N,E,L){var Y=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,N={id:x++,callback:E,priorityLevel:N,startTime:L,expirationTime:ee,sortIndex:-1},L>Y?(N.sortIndex=L,t(g,N),n(p)===null&&N===n(g)&&(y?(d(T),T=-1):y=!0,Ta(_,L-Y))):(N.sortIndex=ee,t(p,N),m||c||(m=!0,Na(w))),N},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(N){var E=i;return function(){var L=i;i=E;try{return N.apply(this,arguments)}finally{i=L}}}})(bs);ys.exports=bs;var Wc=ys.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Qc=O,Se=Wc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vs=new Set,Rn={};function Ot(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Rn[e]=t,e=0;e<t.length;e++)vs.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=Object.prototype.hasOwnProperty,Vc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ql={},Yl={};function Gc(e){return ao.call(Yl,e)?!0:ao.call(ql,e)?!1:Vc.test(e)?Yl[e]=!0:(ql[e]=!0,!1)}function Uc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Uc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,a,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tl,nl);oe[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tl,nl);oe[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tl,nl);oe[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function rl(e,t,n,r){var a=oe.hasOwnProperty(t)?oe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,a,r)&&(n=null),r||a===null?Gc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),al=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),_s=Symbol.for("react.context"),ol=Symbol.for("react.forward_ref"),lo=Symbol.for("react.suspense"),io=Symbol.for("react.suspense_list"),ll=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ks=Symbol.for("react.offscreen"),Xl=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=Xl&&e[Xl]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,za;function jn(e){if(za===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);za=t&&t[1]||""}return`
`+za+e}var La=!1;function Ma(e,t){if(!e||La)return"";La=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var a=g.stack.split(`
`),o=r.stack.split(`
`),s=a.length-1,f=o.length-1;1<=s&&0<=f&&a[s]!==o[f];)f--;for(;1<=s&&0<=f;s--,f--)if(a[s]!==o[f]){if(s!==1||f!==1)do if(s--,f--,0>f||a[s]!==o[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=s&&0<=f);break}}}finally{La=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function qc(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ht:return"Portal";case oo:return"Profiler";case al:return"StrictMode";case lo:return"Suspense";case io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _s:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ll:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function Yc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xc(e){var t=ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Xc(e))}function Ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uo(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function js(e,t){t=t.checked,t!=null&&rl(e,"checked",t,!1)}function co(e,t){js(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&fo(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fo(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Cn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Cs(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ei(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ns(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ns(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,Ts=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Kc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function As(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Es(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=As(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Zc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bo=null,Jt=null,en=null;function ti(e){if(e=ar(e)){if(typeof bo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ha(t),bo(e.stateNode,e.type,t))}}function zs(e){Jt?en?en.push(e):en=[e]:Jt=e}function Ls(){if(Jt){var e=Jt,t=en;if(en=Jt=null,ti(e),t)for(e=0;e<t.length;e++)ti(t[e])}}function Ms(e,t){return e(t)}function Ps(){}var Pa=!1;function Is(e,t,n){if(Pa)return e(t,n);Pa=!0;try{return Ms(e,t,n)}finally{Pa=!1,(Jt!==null||en!==null)&&(Ps(),Ls())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=ha(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var vo=!1;if(Ke)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vo=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{vo=!1}function Jc(e,t,n,r,a,o,s,f,p){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(x){this.onError(x)}}var En=!1,Dr=null,Hr=!1,xo=null,ed={onError:function(e){En=!0,Dr=e}};function td(e,t,n,r,a,o,s,f,p){En=!1,Dr=null,Jc.apply(ed,arguments)}function nd(e,t,n,r,a,o,s,f,p){if(td.apply(this,arguments),En){if(En){var g=Dr;En=!1,Dr=null}else throw Error(k(198));Hr||(Hr=!0,xo=g)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Os(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ni(e){if(Ft(e)!==e)throw Error(k(188))}function rd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ni(a),e;if(o===r)return ni(a),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,f=a.child;f;){if(f===n){s=!0,n=a,r=o;break}if(f===r){s=!0,r=a,n=o;break}f=f.sibling}if(!s){for(f=o.child;f;){if(f===n){s=!0,n=o,r=a;break}if(f===r){s=!0,r=o,n=a;break}f=f.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Fs(e){return e=rd(e),e!==null?Rs(e):null}function Rs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rs(e);if(t!==null)return t;e=e.sibling}return null}var Ds=Se.unstable_scheduleCallback,ri=Se.unstable_cancelCallback,ad=Se.unstable_shouldYield,od=Se.unstable_requestPaint,X=Se.unstable_now,ld=Se.unstable_getCurrentPriorityLevel,sl=Se.unstable_ImmediatePriority,Hs=Se.unstable_UserBlockingPriority,Br=Se.unstable_NormalPriority,id=Se.unstable_LowPriority,Bs=Se.unstable_IdlePriority,ca=null,Ve=null;function sd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:dd,ud=Math.log,cd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(ud(e)/cd|0)|0}var fr=64,pr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var f=s&~a;f!==0?r=Nn(f):(o&=s,o!==0&&(r=Nn(o)))}else s=n&~a,s!==0?r=Nn(s):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),a=1<<n,r|=e[n],t&=~a;return r}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fe(o),f=1<<s,p=a[s];p===-1?(!(f&n)||f&r)&&(a[s]=fd(f,t)):p<=t&&(e.expiredLanes|=f),o&=~f}}function _o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ws(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Fe(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function ul(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var F=0;function Qs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,cl,Gs,Us,$s,ko=!1,hr=[],ut=null,ct=null,dt=null,Bn=new Map,Wn=new Map,ot=[],md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ai(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function bn(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=ar(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function gd(e,t,n,r,a){switch(t){case"focusin":return ut=bn(ut,e,t,n,r,a),!0;case"dragenter":return ct=bn(ct,e,t,n,r,a),!0;case"mouseover":return dt=bn(dt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Bn.set(o,bn(Bn.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Wn.set(o,bn(Wn.get(o)||null,e,t,n,r,a)),!0}return!1}function qs(e){var t=Ct(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Os(n),t!==null){e.blockedOn=t,$s(e.priority,function(){Gs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=ar(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function oi(e,t,n){Nr(e)&&n.delete(t)}function yd(){ko=!1,ut!==null&&Nr(ut)&&(ut=null),ct!==null&&Nr(ct)&&(ct=null),dt!==null&&Nr(dt)&&(dt=null),Bn.forEach(oi),Wn.forEach(oi)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,yd)))}function Qn(e){function t(a){return vn(a,e)}if(0<hr.length){vn(hr[0],e);for(var n=1;n<hr.length;n++){var r=hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&vn(ut,e),ct!==null&&vn(ct,e),dt!==null&&vn(dt,e),Bn.forEach(t),Wn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)qs(n),n.blockedOn===null&&ot.shift()}var tn=tt.ReactCurrentBatchConfig,Qr=!0;function bd(e,t,n,r){var a=F,o=tn.transition;tn.transition=null;try{F=1,dl(e,t,n,r)}finally{F=a,tn.transition=o}}function vd(e,t,n,r){var a=F,o=tn.transition;tn.transition=null;try{F=4,dl(e,t,n,r)}finally{F=a,tn.transition=o}}function dl(e,t,n,r){if(Qr){var a=wo(e,t,n,r);if(a===null)Ga(e,t,r,Vr,n),ai(e,r);else if(gd(a,e,t,n,r))r.stopPropagation();else if(ai(e,r),t&4&&-1<md.indexOf(e)){for(;a!==null;){var o=ar(a);if(o!==null&&Vs(o),o=wo(e,t,n,r),o===null&&Ga(e,t,r,Vr,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Ga(e,t,r,null,n)}}var Vr=null;function wo(e,t,n,r){if(Vr=null,e=il(r),e=Ct(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Os(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function Ys(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ld()){case sl:return 1;case Hs:return 4;case Br:case id:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var it=null,fl=null,Tr=null;function Xs(){if(Tr)return Tr;var e,t=fl,n=t.length,r,a="value"in it?it.value:it.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[o-r];r++);return Tr=a.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function li(){return!1}function Ce(e){function t(n,r,a,o,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mr:li,this.isPropagationStopped=li,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Ce(pn),rr=U({},pn,{view:0,detail:0}),xd=Ce(rr),Oa,Fa,xn,da=U({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Oa=e.screenX-xn.screenX,Fa=e.screenY-xn.screenY):Fa=Oa=0,xn=e),Oa)},movementY:function(e){return"movementY"in e?e.movementY:Fa}}),ii=Ce(da),_d=U({},da,{dataTransfer:0}),kd=Ce(_d),wd=U({},rr,{relatedTarget:0}),Ra=Ce(wd),Sd=U({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),jd=Ce(Sd),Cd=U({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=Ce(Cd),Td=U({},pn,{data:0}),si=Ce(Td),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zd[e])?!!t[e]:!1}function hl(){return Ld}var Md=U({},rr,{key:function(e){if(e.key){var t=Ad[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=Ce(Md),Id=U({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ui=Ce(Id),Od=U({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Fd=Ce(Od),Rd=U({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Ce(Rd),Hd=U({},da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Ce(Hd),Wd=[9,13,27,32],ml=Ke&&"CompositionEvent"in window,zn=null;Ke&&"documentMode"in document&&(zn=document.documentMode);var Qd=Ke&&"TextEvent"in window&&!zn,Ks=Ke&&(!ml||zn&&8<zn&&11>=zn),ci=" ",di=!1;function Zs(e,t){switch(e){case"keyup":return Wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Vd(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(di=!0,ci);case"textInput":return e=t.data,e===ci&&di?null:e;default:return null}}function Gd(e,t){if(Wt)return e==="compositionend"||!ml&&Zs(e,t)?(e=Xs(),Tr=fl=it=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function eu(e,t,n,r){zs(r),t=Gr(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Vn=null;function $d(e){du(e,0)}function fa(e){var t=Gt(e);if(Ss(t))return e}function qd(e,t){if(e==="change")return t}var tu=!1;if(Ke){var Da;if(Ke){var Ha="oninput"in document;if(!Ha){var pi=document.createElement("div");pi.setAttribute("oninput","return;"),Ha=typeof pi.oninput=="function"}Da=Ha}else Da=!1;tu=Da&&(!document.documentMode||9<document.documentMode)}function hi(){Ln&&(Ln.detachEvent("onpropertychange",nu),Vn=Ln=null)}function nu(e){if(e.propertyName==="value"&&fa(Vn)){var t=[];eu(t,Vn,e,il(e)),Is($d,t)}}function Yd(e,t,n){e==="focusin"?(hi(),Ln=t,Vn=n,Ln.attachEvent("onpropertychange",nu)):e==="focusout"&&hi()}function Xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(Vn)}function Kd(e,t){if(e==="click")return fa(t)}function Zd(e,t){if(e==="input"||e==="change")return fa(t)}function Jd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Jd;function Gn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ao.call(t,a)||!De(e[a],t[a]))return!1}return!0}function mi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gi(e,t){var n=mi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mi(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function au(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ef(e){var t=au(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ru(n.ownerDocument.documentElement,n)){if(r!==null&&gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=gi(n,o);var s=gi(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tf=Ke&&"documentMode"in document&&11>=document.documentMode,Qt=null,So=null,Mn=null,jo=!1;function yi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jo||Qt==null||Qt!==Rr(r)||(r=Qt,"selectionStart"in r&&gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Gn(Mn,r)||(Mn=r,r=Gr(So,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Ba={},ou={};Ke&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function pa(e){if(Ba[e])return Ba[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Ba[e]=t[n];return e}var lu=pa("animationend"),iu=pa("animationiteration"),su=pa("animationstart"),uu=pa("transitionend"),cu=new Map,bi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){cu.set(e,t),Ot(t,[e])}for(var Wa=0;Wa<bi.length;Wa++){var Qa=bi[Wa],nf=Qa.toLowerCase(),rf=Qa[0].toUpperCase()+Qa.slice(1);vt(nf,"on"+rf)}vt(lu,"onAnimationEnd");vt(iu,"onAnimationIteration");vt(su,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(uu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function vi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var f=r[s],p=f.instance,g=f.currentTarget;if(f=f.listener,p!==o&&a.isPropagationStopped())break e;vi(a,f,g),o=p}else for(s=0;s<r.length;s++){if(f=r[s],p=f.instance,g=f.currentTarget,f=f.listener,p!==o&&a.isPropagationStopped())break e;vi(a,f,g),o=p}}}if(Hr)throw e=xo,Hr=!1,xo=null,e}function H(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(fu(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),fu(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[yr]){e[yr]=!0,vs.forEach(function(n){n!=="selectionchange"&&(af.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,Va("selectionchange",!1,t))}}function fu(e,t,n,r){switch(Ys(t)){case 1:var a=bd;break;case 4:a=vd;break;default:a=dl}n=a.bind(null,t,n,e),a=void 0,!vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ga(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var f=r.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;s=s.return}for(;f!==null;){if(s=Ct(f),s===null)return;if(p=s.tag,p===5||p===6){r=o=s;continue e}f=f.parentNode}}r=r.return}Is(function(){var g=o,x=il(n),l=[];e:{var i=cu.get(e);if(i!==void 0){var c=pl,m=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":c=Pd;break;case"focusin":m="focus",c=Ra;break;case"focusout":m="blur",c=Ra;break;case"beforeblur":case"afterblur":c=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Fd;break;case lu:case iu:case su:c=jd;break;case uu:c=Dd;break;case"scroll":c=xd;break;case"wheel":c=Bd;break;case"copy":case"cut":case"paste":c=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=ui}var y=(t&4)!==0,v=!y&&e==="scroll",d=y?i!==null?i+"Capture":null:i;y=[];for(var h=g,b;h!==null;){b=h;var _=b.stateNode;if(b.tag===5&&_!==null&&(b=_,d!==null&&(_=Hn(h,d),_!=null&&y.push($n(h,_,b)))),v)break;h=h.return}0<y.length&&(i=new c(i,m,null,n,x),l.push({event:i,listeners:y}))}}if(!(t&7)){e:{if(i=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",i&&n!==yo&&(m=n.relatedTarget||n.fromElement)&&(Ct(m)||m[Ze]))break e;if((c||i)&&(i=x.window===x?x:(i=x.ownerDocument)?i.defaultView||i.parentWindow:window,c?(m=n.relatedTarget||n.toElement,c=g,m=m?Ct(m):null,m!==null&&(v=Ft(m),m!==v||m.tag!==5&&m.tag!==6)&&(m=null)):(c=null,m=g),c!==m)){if(y=ii,_="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=ui,_="onPointerLeave",d="onPointerEnter",h="pointer"),v=c==null?i:Gt(c),b=m==null?i:Gt(m),i=new y(_,h+"leave",c,n,x),i.target=v,i.relatedTarget=b,_=null,Ct(x)===g&&(y=new y(d,h+"enter",m,n,x),y.target=b,y.relatedTarget=v,_=y),v=_,c&&m)t:{for(y=c,d=m,h=0,b=y;b;b=Rt(b))h++;for(b=0,_=d;_;_=Rt(_))b++;for(;0<h-b;)y=Rt(y),h--;for(;0<b-h;)d=Rt(d),b--;for(;h--;){if(y===d||d!==null&&y===d.alternate)break t;y=Rt(y),d=Rt(d)}y=null}else y=null;c!==null&&xi(l,i,c,y,!1),m!==null&&v!==null&&xi(l,v,m,y,!0)}}e:{if(i=g?Gt(g):window,c=i.nodeName&&i.nodeName.toLowerCase(),c==="select"||c==="input"&&i.type==="file")var w=qd;else if(fi(i))if(tu)w=Zd;else{w=Xd;var S=Yd}else(c=i.nodeName)&&c.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(w=Kd);if(w&&(w=w(e,g))){eu(l,w,n,x);break e}S&&S(e,i,g),e==="focusout"&&(S=i._wrapperState)&&S.controlled&&i.type==="number"&&fo(i,"number",i.value)}switch(S=g?Gt(g):window,e){case"focusin":(fi(S)||S.contentEditable==="true")&&(Qt=S,So=g,Mn=null);break;case"focusout":Mn=So=Qt=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,yi(l,n,x);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":yi(l,n,x)}var C;if(ml)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Wt?Zs(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ks&&n.locale!=="ko"&&(Wt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wt&&(C=Xs()):(it=x,fl="value"in it?it.value:it.textContent,Wt=!0)),S=Gr(g,T),0<S.length&&(T=new si(T,e,null,n,x),l.push({event:T,listeners:S}),C?T.data=C:(C=Js(n),C!==null&&(T.data=C)))),(C=Qd?Vd(e,n):Gd(e,n))&&(g=Gr(g,"onBeforeInput"),0<g.length&&(x=new si("onBeforeInput","beforeinput",null,n,x),l.push({event:x,listeners:g}),x.data=C))}du(l,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Hn(e,n),o!=null&&r.unshift($n(e,o,a)),o=Hn(e,t),o!=null&&r.push($n(e,o,a))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,t,n,r,a){for(var o=t._reactName,s=[];n!==null&&n!==r;){var f=n,p=f.alternate,g=f.stateNode;if(p!==null&&p===r)break;f.tag===5&&g!==null&&(f=g,a?(p=Hn(n,o),p!=null&&s.unshift($n(n,p,f))):a||(p=Hn(n,o),p!=null&&s.push($n(n,p,f)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var of=/\r\n?/g,lf=/\u0000|\uFFFD/g;function _i(e){return(typeof e=="string"?e:""+e).replace(of,`
`).replace(lf,"")}function br(e,t,n){if(t=_i(t),_i(e)!==t&&n)throw Error(k(425))}function Ur(){}var Co=null,No=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ao=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(cf)}:Ao;function cf(e){setTimeout(function(){throw e})}function Ua(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Qn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+hn,qn="__reactProps$"+hn,Ze="__reactContainer$"+hn,Eo="__reactEvents$"+hn,df="__reactListeners$"+hn,ff="__reactHandles$"+hn;function Ct(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wi(e);e!==null;){if(n=e[Qe])return n;e=wi(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Qe]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ha(e){return e[qn]||null}var zo=[],Ut=-1;function xt(e){return{current:e}}function B(e){0>Ut||(e.current=zo[Ut],zo[Ut]=null,Ut--)}function D(e,t){Ut++,zo[Ut]=e.current,e.current=t}var bt={},de=xt(bt),be=xt(!1),zt=bt;function on(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ve(e){return e=e.childContextTypes,e!=null}function $r(){B(be),B(de)}function Si(e,t,n){if(de.current!==bt)throw Error(k(168));D(de,t),D(be,n)}function pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(k(108,Yc(e)||"Unknown",a));return U({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,zt=de.current,D(de,e),D(be,be.current),!0}function ji(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=pu(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,B(be),B(de),D(de,e)):B(be),D(be,n)}var $e=null,ma=!1,$a=!1;function hu(e){$e===null?$e=[e]:$e.push(e)}function pf(e){ma=!0,hu(e)}function _t(){if(!$a&&$e!==null){$a=!0;var e=0,t=F;try{var n=$e;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,ma=!1}catch(a){throw $e!==null&&($e=$e.slice(e+1)),Ds(sl,_t),a}finally{F=t,$a=!1}}return null}var $t=[],qt=0,Yr=null,Xr=0,Ne=[],Te=0,Lt=null,qe=1,Ye="";function St(e,t){$t[qt++]=Xr,$t[qt++]=Yr,Yr=e,Xr=t}function mu(e,t,n){Ne[Te++]=qe,Ne[Te++]=Ye,Ne[Te++]=Lt,Lt=e;var r=qe;e=Ye;var a=32-Fe(r)-1;r&=~(1<<a),n+=1;var o=32-Fe(t)+a;if(30<o){var s=a-a%5;o=(r&(1<<s)-1).toString(32),r>>=s,a-=s,qe=1<<32-Fe(t)+a|n<<a|r,Ye=o+e}else qe=1<<o|n<<a|r,Ye=e}function yl(e){e.return!==null&&(St(e,1),mu(e,1,0))}function bl(e){for(;e===Yr;)Yr=$t[--qt],$t[qt]=null,Xr=$t[--qt],$t[qt]=null;for(;e===Lt;)Lt=Ne[--Te],Ne[Te]=null,Ye=Ne[--Te],Ne[Te]=null,qe=Ne[--Te],Ne[Te]=null}var we=null,ke=null,W=!1,Oe=null;function gu(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ci(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ke=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:qe,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ke=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mo(e){if(W){var t=ke;if(t){var n=t;if(!Ci(e,t)){if(Lo(e))throw Error(k(418));t=ft(n.nextSibling);var r=we;t&&Ci(e,t)?gu(r,n):(e.flags=e.flags&-4097|2,W=!1,we=e)}}else{if(Lo(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,we=e}}}function Ni(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function vr(e){if(e!==we)return!1;if(!W)return Ni(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=ke)){if(Lo(e))throw yu(),Error(k(418));for(;t;)gu(e,t),t=ft(t.nextSibling)}if(Ni(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=we?ft(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=ke;e;)e=ft(e.nextSibling)}function ln(){ke=we=null,W=!1}function vl(e){Oe===null?Oe=[e]:Oe.push(e)}var hf=tt.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var f=a.refs;s===null?delete f[o]:f[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ti(e){var t=e._init;return t(e._payload)}function bu(e){function t(d,h){if(e){var b=d.deletions;b===null?(d.deletions=[h],d.flags|=16):b.push(h)}}function n(d,h){if(!e)return null;for(;h!==null;)t(d,h),h=h.sibling;return null}function r(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function a(d,h){return d=gt(d,h),d.index=0,d.sibling=null,d}function o(d,h,b){return d.index=b,e?(b=d.alternate,b!==null?(b=b.index,b<h?(d.flags|=2,h):b):(d.flags|=2,h)):(d.flags|=1048576,h)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function f(d,h,b,_){return h===null||h.tag!==6?(h=eo(b,d.mode,_),h.return=d,h):(h=a(h,b),h.return=d,h)}function p(d,h,b,_){var w=b.type;return w===Bt?x(d,h,b.props.children,_,b.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&Ti(w)===h.type)?(_=a(h,b.props),_.ref=_n(d,h,b),_.return=d,_):(_=Or(b.type,b.key,b.props,null,d.mode,_),_.ref=_n(d,h,b),_.return=d,_)}function g(d,h,b,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=to(b,d.mode,_),h.return=d,h):(h=a(h,b.children||[]),h.return=d,h)}function x(d,h,b,_,w){return h===null||h.tag!==7?(h=Et(b,d.mode,_,w),h.return=d,h):(h=a(h,b),h.return=d,h)}function l(d,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=eo(""+h,d.mode,b),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ur:return b=Or(h.type,h.key,h.props,null,d.mode,b),b.ref=_n(d,null,h),b.return=d,b;case Ht:return h=to(h,d.mode,b),h.return=d,h;case rt:var _=h._init;return l(d,_(h._payload),b)}if(Cn(h)||gn(h))return h=Et(h,d.mode,b,null),h.return=d,h;xr(d,h)}return null}function i(d,h,b,_){var w=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return w!==null?null:f(d,h,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ur:return b.key===w?p(d,h,b,_):null;case Ht:return b.key===w?g(d,h,b,_):null;case rt:return w=b._init,i(d,h,w(b._payload),_)}if(Cn(b)||gn(b))return w!==null?null:x(d,h,b,_,null);xr(d,b)}return null}function c(d,h,b,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(b)||null,f(h,d,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ur:return d=d.get(_.key===null?b:_.key)||null,p(h,d,_,w);case Ht:return d=d.get(_.key===null?b:_.key)||null,g(h,d,_,w);case rt:var S=_._init;return c(d,h,b,S(_._payload),w)}if(Cn(_)||gn(_))return d=d.get(b)||null,x(h,d,_,w,null);xr(h,_)}return null}function m(d,h,b,_){for(var w=null,S=null,C=h,T=h=0,A=null;C!==null&&T<b.length;T++){C.index>T?(A=C,C=null):A=C.sibling;var z=i(d,C,b[T],_);if(z===null){C===null&&(C=A);break}e&&C&&z.alternate===null&&t(d,C),h=o(z,h,T),S===null?w=z:S.sibling=z,S=z,C=A}if(T===b.length)return n(d,C),W&&St(d,T),w;if(C===null){for(;T<b.length;T++)C=l(d,b[T],_),C!==null&&(h=o(C,h,T),S===null?w=C:S.sibling=C,S=C);return W&&St(d,T),w}for(C=r(d,C);T<b.length;T++)A=c(C,d,T,b[T],_),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?T:A.key),h=o(A,h,T),S===null?w=A:S.sibling=A,S=A);return e&&C.forEach(function(le){return t(d,le)}),W&&St(d,T),w}function y(d,h,b,_){var w=gn(b);if(typeof w!="function")throw Error(k(150));if(b=w.call(b),b==null)throw Error(k(151));for(var S=w=null,C=h,T=h=0,A=null,z=b.next();C!==null&&!z.done;T++,z=b.next()){C.index>T?(A=C,C=null):A=C.sibling;var le=i(d,C,z.value,_);if(le===null){C===null&&(C=A);break}e&&C&&le.alternate===null&&t(d,C),h=o(le,h,T),S===null?w=le:S.sibling=le,S=le,C=A}if(z.done)return n(d,C),W&&St(d,T),w;if(C===null){for(;!z.done;T++,z=b.next())z=l(d,z.value,_),z!==null&&(h=o(z,h,T),S===null?w=z:S.sibling=z,S=z);return W&&St(d,T),w}for(C=r(d,C);!z.done;T++,z=b.next())z=c(C,d,T,z.value,_),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?T:z.key),h=o(z,h,T),S===null?w=z:S.sibling=z,S=z);return e&&C.forEach(function(R){return t(d,R)}),W&&St(d,T),w}function v(d,h,b,_){if(typeof b=="object"&&b!==null&&b.type===Bt&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ur:e:{for(var w=b.key,S=h;S!==null;){if(S.key===w){if(w=b.type,w===Bt){if(S.tag===7){n(d,S.sibling),h=a(S,b.props.children),h.return=d,d=h;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&Ti(w)===S.type){n(d,S.sibling),h=a(S,b.props),h.ref=_n(d,S,b),h.return=d,d=h;break e}n(d,S);break}else t(d,S);S=S.sibling}b.type===Bt?(h=Et(b.props.children,d.mode,_,b.key),h.return=d,d=h):(_=Or(b.type,b.key,b.props,null,d.mode,_),_.ref=_n(d,h,b),_.return=d,d=_)}return s(d);case Ht:e:{for(S=b.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){n(d,h.sibling),h=a(h,b.children||[]),h.return=d,d=h;break e}else{n(d,h);break}else t(d,h);h=h.sibling}h=to(b,d.mode,_),h.return=d,d=h}return s(d);case rt:return S=b._init,v(d,h,S(b._payload),_)}if(Cn(b))return m(d,h,b,_);if(gn(b))return y(d,h,b,_);xr(d,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(n(d,h.sibling),h=a(h,b),h.return=d,d=h):(n(d,h),h=eo(b,d.mode,_),h.return=d,d=h),s(d)):n(d,h)}return v}var sn=bu(!0),vu=bu(!1),Kr=xt(null),Zr=null,Yt=null,xl=null;function _l(){xl=Yt=Zr=null}function kl(e){var t=Kr.current;B(Kr),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Zr=e,xl=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(Zr===null)throw Error(k(308));Yt=e,Zr.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Nt=null;function wl(e){Nt===null?Nt=[e]:Nt.push(e)}function xu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,wl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,P&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Je(e,n)}return a=r.interleaved,a===null?(t.next=t,wl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Je(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ul(e,n)}}function Ai(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var a=e.updateQueue;at=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var p=f,g=p.next;p.next=null,s===null?o=g:s.next=g,s=p;var x=e.alternate;x!==null&&(x=x.updateQueue,f=x.lastBaseUpdate,f!==s&&(f===null?x.firstBaseUpdate=g:f.next=g,x.lastBaseUpdate=p))}if(o!==null){var l=a.baseState;s=0,x=g=p=null,f=o;do{var i=f.lane,c=f.eventTime;if((r&i)===i){x!==null&&(x=x.next={eventTime:c,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var m=e,y=f;switch(i=t,c=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){l=m.call(c,l,i);break e}l=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,i=typeof m=="function"?m.call(c,l,i):m,i==null)break e;l=U({},l,i);break e;case 2:at=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,i=a.effects,i===null?a.effects=[f]:i.push(f))}else c={eventTime:c,lane:i,tag:f.tag,payload:f.payload,callback:f.callback,next:null},x===null?(g=x=c,p=l):x=x.next=c,s|=i;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;i=f,f=i.next,i.next=null,a.lastBaseUpdate=i,a.shared.pending=null}}while(!0);if(x===null&&(p=l),a.baseState=p,a.firstBaseUpdate=g,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Pt|=s,e.lanes=s,e.memoizedState=l}}function Ei(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(k(191,a));a.call(r)}}}var or={},Ge=xt(or),Yn=xt(or),Xn=xt(or);function Tt(e){if(e===or)throw Error(k(174));return e}function jl(e,t){switch(D(Xn,t),D(Yn,e),D(Ge,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ho(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ho(t,e)}B(Ge),D(Ge,t)}function un(){B(Ge),B(Yn),B(Xn)}function ku(e){Tt(Xn.current);var t=Tt(Ge.current),n=ho(t,e.type);t!==n&&(D(Yn,e),D(Ge,n))}function Cl(e){Yn.current===e&&(B(Ge),B(Yn))}var Q=xt(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=[];function Nl(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var zr=tt.ReactCurrentDispatcher,Ya=tt.ReactCurrentBatchConfig,Mt=0,G=null,Z=null,te=null,ta=!1,Pn=!1,Kn=0,mf=0;function ie(){throw Error(k(321))}function Tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Al(e,t,n,r,a,o){if(Mt=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?vf:xf,e=n(r,a),Pn){o=0;do{if(Pn=!1,Kn=0,25<=o)throw Error(k(301));o+=1,te=Z=null,t.updateQueue=null,zr.current=_f,e=n(r,a)}while(Pn)}if(zr.current=na,t=Z!==null&&Z.next!==null,Mt=0,te=Z=G=null,ta=!1,t)throw Error(k(300));return e}function El(){var e=Kn!==0;return Kn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Le(){if(Z===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?G.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Zn(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=Le(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Z,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var f=s=null,p=null,g=o;do{var x=g.lane;if((Mt&x)===x)p!==null&&(p=p.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var l={lane:x,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};p===null?(f=p=l,s=r):p=p.next=l,G.lanes|=x,Pt|=x}g=g.next}while(g!==null&&g!==o);p===null?s=r:p.next=f,De(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,G.lanes|=o,Pt|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ka(e){var t=Le(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);De(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function wu(){}function Su(e,t){var n=G,r=Le(),a=t(),o=!De(r.memoizedState,a);if(o&&(r.memoizedState=a,ye=!0),r=r.queue,zl(Nu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Jn(9,Cu.bind(null,n,r,a,t),void 0,null),ne===null)throw Error(k(349));Mt&30||ju(n,t,a)}return a}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&Au(e)}function Nu(e,t,n){return n(function(){Tu(t)&&Au(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Au(e){var t=Je(e,1);t!==null&&Re(t,e,1,-1)}function zi(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,G,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eu(){return Le().memoizedState}function Lr(e,t,n,r){var a=We();G.flags|=e,a.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function ga(e,t,n,r){var a=Le();r=r===void 0?null:r;var o=void 0;if(Z!==null){var s=Z.memoizedState;if(o=s.destroy,r!==null&&Tl(r,s.deps)){a.memoizedState=Jn(t,n,o,r);return}}G.flags|=e,a.memoizedState=Jn(1|t,n,o,r)}function Li(e,t){return Lr(8390656,8,e,t)}function zl(e,t){return ga(2048,8,e,t)}function zu(e,t){return ga(4,2,e,t)}function Lu(e,t){return ga(4,4,e,t)}function Mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pu(e,t,n){return n=n!=null?n.concat([e]):null,ga(4,4,Mu.bind(null,t,e),n)}function Ll(){}function Iu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ou(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fu(e,t,n){return Mt&21?(De(n,t)||(n=Ws(),G.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function gf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Ya.transition;Ya.transition={};try{e(!1),t()}finally{F=n,Ya.transition=r}}function Ru(){return Le().memoizedState}function yf(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Du(e))Hu(t,n);else if(n=xu(e,t,n,r),n!==null){var a=pe();Re(n,e,r,a),Bu(n,t,r)}}function bf(e,t,n){var r=mt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Hu(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,f=o(s,n);if(a.hasEagerState=!0,a.eagerState=f,De(f,s)){var p=t.interleaved;p===null?(a.next=a,wl(t)):(a.next=p.next,p.next=a),t.interleaved=a;return}}catch{}finally{}n=xu(e,t,a,r),n!==null&&(a=pe(),Re(n,e,r,a),Bu(n,t,r))}}function Du(e){var t=e.alternate;return e===G||t!==null&&t===G}function Hu(e,t){Pn=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ul(e,n)}}var na={readContext:ze,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},vf={readContext:ze,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Li,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:zi,useDebugValue:Ll,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=zi(!1),t=e[0];return e=gf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,a=We();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ne===null)throw Error(k(349));Mt&30||ju(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Li(Nu.bind(null,r,o,e),[e]),r.flags|=2048,Jn(9,Cu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=ne.identifierPrefix;if(W){var n=Ye,r=qe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xf={readContext:ze,useCallback:Iu,useContext:ze,useEffect:zl,useImperativeHandle:Pu,useInsertionEffect:zu,useLayoutEffect:Lu,useMemo:Ou,useReducer:Xa,useRef:Eu,useState:function(){return Xa(Zn)},useDebugValue:Ll,useDeferredValue:function(e){var t=Le();return Fu(t,Z.memoizedState,e)},useTransition:function(){var e=Xa(Zn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:Su,useId:Ru,unstable_isNewReconciler:!1},_f={readContext:ze,useCallback:Iu,useContext:ze,useEffect:zl,useImperativeHandle:Pu,useInsertionEffect:zu,useLayoutEffect:Lu,useMemo:Ou,useReducer:Ka,useRef:Eu,useState:function(){return Ka(Zn)},useDebugValue:Ll,useDeferredValue:function(e){var t=Le();return Z===null?t.memoizedState=e:Fu(t,Z.memoizedState,e)},useTransition:function(){var e=Ka(Zn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:Su,useId:Ru,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Io(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),a=mt(e),o=Xe(r,a);o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,a),t!==null&&(Re(t,e,a,r),Er(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),a=mt(e),o=Xe(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,a),t!==null&&(Re(t,e,a,r),Er(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=mt(e),a=Xe(n,r);a.tag=2,t!=null&&(a.callback=t),t=pt(e,a,r),t!==null&&(Re(t,e,r,n),Er(t,e,r))}};function Mi(e,t,n,r,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(a,o):!0}function Wu(e,t,n){var r=!1,a=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=ze(o):(a=ve(t)?zt:de.current,r=t.contextTypes,o=(r=r!=null)?on(e,a):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function Oo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Sl(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=ze(o):(o=ve(t)?zt:de.current,a.context=on(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Io(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ya.enqueueReplaceState(a,a.state,null),Jr(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=qc(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Za(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kf=typeof WeakMap=="function"?WeakMap:Map;function Qu(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){aa||(aa=!0,Uo=r),Fo(e,t)},n}function Vu(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Fo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ii(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kf;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Of.bind(null,e,t,n),t.then(e,e))}function Oi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fi(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var wf=tt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?vu(t,null,n,r):sn(t,e.child,n,r)}function Ri(e,t,n,r,a){n=n.render;var o=t.ref;return nn(t,a),r=Al(e,t,n,r,o,a),n=El(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,et(e,t,a)):(W&&n&&yl(t),t.flags|=1,fe(e,t,r,a),t.child)}function Di(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Hl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gu(e,t,o,r,a)):(e=Or(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(s,r)&&e.ref===t.ref)return et(e,t,a)}return t.flags|=1,e=gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Gn(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,a)}return Ro(e,t,n,r,a)}function Uu(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Kt,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Kt,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Kt,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Kt,_e),_e|=r;return fe(e,t,a,n),t.child}function $u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ro(e,t,n,r,a){var o=ve(n)?zt:de.current;return o=on(t,o),nn(t,a),n=Al(e,t,n,r,o,a),r=El(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,et(e,t,a)):(W&&r&&yl(t),t.flags|=1,fe(e,t,n,a),t.child)}function Hi(e,t,n,r,a){if(ve(n)){var o=!0;qr(t)}else o=!1;if(nn(t,a),t.stateNode===null)Mr(e,t),Wu(t,n,r),Oo(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,f=t.memoizedProps;s.props=f;var p=s.context,g=n.contextType;typeof g=="object"&&g!==null?g=ze(g):(g=ve(n)?zt:de.current,g=on(t,g));var x=n.getDerivedStateFromProps,l=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";l||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==r||p!==g)&&Pi(t,s,r,g),at=!1;var i=t.memoizedState;s.state=i,Jr(t,r,s,a),p=t.memoizedState,f!==r||i!==p||be.current||at?(typeof x=="function"&&(Io(t,n,x,r),p=t.memoizedState),(f=at||Mi(t,n,f,r,i,p,g))?(l||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=g,r=f):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,_u(e,t),f=t.memoizedProps,g=t.type===t.elementType?f:Pe(t.type,f),s.props=g,l=t.pendingProps,i=s.context,p=n.contextType,typeof p=="object"&&p!==null?p=ze(p):(p=ve(n)?zt:de.current,p=on(t,p));var c=n.getDerivedStateFromProps;(x=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==l||i!==p)&&Pi(t,s,r,p),at=!1,i=t.memoizedState,s.state=i,Jr(t,r,s,a);var m=t.memoizedState;f!==l||i!==m||be.current||at?(typeof c=="function"&&(Io(t,n,c,r),m=t.memoizedState),(g=at||Mi(t,n,g,r,i,m,p)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=p,r=g):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=1024),r=!1)}return Do(e,t,n,r,o,a)}function Do(e,t,n,r,a,o){$u(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&ji(t,n,!1),et(e,t,o);r=t.stateNode,wf.current=t;var f=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=sn(t,e.child,null,o),t.child=sn(t,null,f,o)):fe(e,t,f,o),t.memoizedState=r.state,a&&ji(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?Si(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Si(e,t.context,!1),jl(e,t.containerInfo)}function Bi(e,t,n,r,a){return ln(),vl(a),t.flags|=256,fe(e,t,n,r),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yu(e,t,n){var r=t.pendingProps,a=Q.current,o=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),D(Q,a&1),e===null)return Mo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=xa(s,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bo(n),t.memoizedState=Ho,e):Ml(t,s));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return Sf(e,t,s,r,f,a,n);if(o){o=r.fallback,s=t.mode,a=e.child,f=a.sibling;var p={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=gt(a,p),r.subtreeFlags=a.subtreeFlags&14680064),f!==null?o=gt(f,o):(o=Et(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Bo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ho,r}return o=e.child,e=o.sibling,r=gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ml(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&vl(r),sn(t,e.child,null,n),e=Ml(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sf(e,t,n,r,a,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Za(Error(k(422))),_r(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=xa({mode:"visible",children:r.children},a,0,null),o=Et(o,a,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&sn(t,e.child,null,s),t.child.memoizedState=Bo(s),t.memoizedState=Ho,o);if(!(t.mode&1))return _r(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var f=r.dgst;return r=f,o=Error(k(419)),r=Za(o,r,void 0),_r(e,t,s,r)}if(f=(s&e.childLanes)!==0,ye||f){if(r=ne,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Je(e,a),Re(r,e,a,-1))}return Dl(),r=Za(Error(k(421))),_r(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ke=ft(a.nextSibling),we=t,W=!0,Oe=null,e!==null&&(Ne[Te++]=qe,Ne[Te++]=Ye,Ne[Te++]=Lt,qe=e.id,Ye=e.overflow,Lt=t),t=Ml(t,r.children),t.flags|=4096,t)}function Wi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function Ja(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Xu(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wi(e,n,t);else if(e.tag===19)Wi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(Q,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ja(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ea(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ja(t,!0,n,null,o);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jf(e,t,n){switch(t.tag){case 3:qu(t),ln();break;case 5:ku(t);break;case 1:ve(t.type)&&qr(t);break;case 4:jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;D(Kr,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Yu(e,t,n):(D(Q,Q.current&1),e=et(e,t,n),e!==null?e.sibling:null);D(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),D(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return et(e,t,n)}var Ku,Wo,Zu,Ju;Ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};Zu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Tt(Ge.current);var o=null;switch(n){case"input":a=uo(e,a),r=uo(e,r),o=[];break;case"select":a=U({},a,{value:void 0}),r=U({},r,{value:void 0}),o=[];break;case"textarea":a=po(e,a),r=po(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}mo(n,r);var s;n=null;for(g in a)if(!r.hasOwnProperty(g)&&a.hasOwnProperty(g)&&a[g]!=null)if(g==="style"){var f=a[g];for(s in f)f.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Rn.hasOwnProperty(g)?o||(o=[]):(o=o||[]).push(g,null));for(g in r){var p=r[g];if(f=a!=null?a[g]:void 0,r.hasOwnProperty(g)&&p!==f&&(p!=null||f!=null))if(g==="style")if(f){for(s in f)!f.hasOwnProperty(s)||p&&p.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in p)p.hasOwnProperty(s)&&f[s]!==p[s]&&(n||(n={}),n[s]=p[s])}else n||(o||(o=[]),o.push(g,n)),n=p;else g==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,f=f?f.__html:void 0,p!=null&&f!==p&&(o=o||[]).push(g,p)):g==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(g,""+p):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(g)?(p!=null&&g==="onScroll"&&H("scroll",e),o||f===p||(o=[])):(o=o||[]).push(g,p))}n&&(o=o||[]).push("style",n);var g=o;(t.updateQueue=g)&&(t.flags|=4)}};Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cf(e,t,n){var r=t.pendingProps;switch(bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&$r(),se(t),null;case 3:return r=t.stateNode,un(),B(be),B(de),Nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Yo(Oe),Oe=null))),Wo(e,t),se(t),null;case 5:Cl(t);var a=Tt(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=Tt(Ge.current),vr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qe]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(a=0;a<Tn.length;a++)H(Tn[a],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Kl(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Jl(r,o),H("invalid",r)}mo(n,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var f=o[s];s==="children"?typeof f=="string"?r.textContent!==f&&(o.suppressHydrationWarning!==!0&&br(r.textContent,f,e),a=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&br(r.textContent,f,e),a=["children",""+f]):Rn.hasOwnProperty(s)&&f!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":cr(r),Zl(r,o,!0);break;case"textarea":cr(r),ei(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ns(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Qe]=t,e[qn]=r,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(s=go(n,r),n){case"dialog":H("cancel",e),H("close",e),a=r;break;case"iframe":case"object":case"embed":H("load",e),a=r;break;case"video":case"audio":for(a=0;a<Tn.length;a++)H(Tn[a],e);a=r;break;case"source":H("error",e),a=r;break;case"img":case"image":case"link":H("error",e),H("load",e),a=r;break;case"details":H("toggle",e),a=r;break;case"input":Kl(e,r),a=uo(e,r),H("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=U({},r,{value:void 0}),H("invalid",e);break;case"textarea":Jl(e,r),a=po(e,r),H("invalid",e);break;default:a=r}mo(n,a),f=a;for(o in f)if(f.hasOwnProperty(o)){var p=f[o];o==="style"?Es(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Ts(e,p)):o==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Dn(e,p):typeof p=="number"&&Dn(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rn.hasOwnProperty(o)?p!=null&&o==="onScroll"&&H("scroll",e):p!=null&&rl(e,o,p,s))}switch(n){case"input":cr(e),Zl(e,r,!1);break;case"textarea":cr(e),ei(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Tt(Xn.current),Tt(Ge.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return se(t),null;case 13:if(B(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&t.mode&1&&!(t.flags&128))yu(),ln(),t.flags|=98560,o=!1;else if(o=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Qe]=t}else ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Oe!==null&&(Yo(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?J===0&&(J=3):Dl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return un(),Wo(e,t),e===null&&Un(t.stateNode.containerInfo),se(t),null;case 10:return kl(t.type._context),se(t),null;case 17:return ve(t.type)&&$r(),se(t),null;case 19:if(B(Q),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)kn(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ea(e),s!==null){for(t.flags|=128,kn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>dn&&(t.flags|=128,r=!0,kn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ea(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return se(t),null}else 2*X()-o.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,kn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=Q.current,D(Q,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Rl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Nf(e,t){switch(bl(t),t.tag){case 1:return ve(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),B(be),B(de),Nl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(B(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Q),null;case 4:return un(),null;case 10:return kl(t.type._context),null;case 22:case 23:return Rl(),null;case 24:return null;default:return null}}var kr=!1,ce=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ec(e,t,n){try{n()}catch(r){q(e,t,r)}}var Qi=!1;function Af(e,t){if(Co=Qr,e=au(),gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,f=-1,p=-1,g=0,x=0,l=e,i=null;t:for(;;){for(var c;l!==n||a!==0&&l.nodeType!==3||(f=s+a),l!==o||r!==0&&l.nodeType!==3||(p=s+r),l.nodeType===3&&(s+=l.nodeValue.length),(c=l.firstChild)!==null;)i=l,l=c;for(;;){if(l===e)break t;if(i===n&&++g===a&&(f=s),i===o&&++x===r&&(p=s),(c=l.nextSibling)!==null)break;l=i,i=l.parentNode}l=c}n=f===-1||p===-1?null:{start:f,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(No={focusedElem:e,selectionRange:n},Qr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,v=m.memoizedState,d=t.stateNode,h=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Pe(t.type,y),v);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){q(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return m=Qi,Qi=!1,m}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&ec(t,n,o)}a=a.next}while(a!==r)}}function ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[qn],delete t[Eo],delete t[df],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function Vi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}var re=null,Ie=!1;function nt(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ca,n)}catch{}switch(n.tag){case 5:ce||Xt(n,t);case 6:var r=re,a=Ie;re=null,nt(e,t,n),re=r,Ie=a,re!==null&&(Ie?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ie?(e=re,n=n.stateNode,e.nodeType===8?Ua(e.parentNode,n):e.nodeType===1&&Ua(e,n),Qn(e)):Ua(re,n.stateNode));break;case 4:r=re,a=Ie,re=n.stateNode.containerInfo,Ie=!0,nt(e,t,n),re=r,Ie=a;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ec(n,t,s),a=a.next}while(a!==r)}nt(e,t,n);break;case 1:if(!ce&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){q(n,t,f)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,nt(e,t,n),ce=r):nt(e,t,n);break;default:nt(e,t,n)}}function Gi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var a=Rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,s=t,f=s;e:for(;f!==null;){switch(f.tag){case 5:re=f.stateNode,Ie=!1;break e;case 3:re=f.stateNode.containerInfo,Ie=!0;break e;case 4:re=f.stateNode.containerInfo,Ie=!0;break e}f=f.return}if(re===null)throw Error(k(160));rc(o,s,a),re=null,Ie=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(g){q(a,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ac(t,e),t=t.sibling}function ac(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Be(e),r&4){try{In(3,e,e.return),ba(3,e)}catch(y){q(e,e.return,y)}try{In(5,e,e.return)}catch(y){q(e,e.return,y)}}break;case 1:Me(t,e),Be(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Me(t,e),Be(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var a=e.stateNode;try{Dn(a,"")}catch(y){q(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,f=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&js(a,o),go(f,s);var g=go(f,o);for(s=0;s<p.length;s+=2){var x=p[s],l=p[s+1];x==="style"?Es(a,l):x==="dangerouslySetInnerHTML"?Ts(a,l):x==="children"?Dn(a,l):rl(a,x,l,g)}switch(f){case"input":co(a,o);break;case"textarea":Cs(a,o);break;case"select":var i=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var c=o.value;c!=null?Zt(a,!!o.multiple,c,!1):i!==!!o.multiple&&(o.defaultValue!=null?Zt(a,!!o.multiple,o.defaultValue,!0):Zt(a,!!o.multiple,o.multiple?[]:"",!1))}a[qn]=o}catch(y){q(e,e.return,y)}}break;case 6:if(Me(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(y){q(e,e.return,y)}}break;case 3:if(Me(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(y){q(e,e.return,y)}break;case 4:Me(t,e),Be(e);break;case 13:Me(t,e),Be(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ol=X())),r&4&&Gi(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(g=ce)||x,Me(t,e),ce=g):Me(t,e),Be(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!x&&e.mode&1)for(j=e,x=e.child;x!==null;){for(l=j=x;j!==null;){switch(i=j,c=i.child,i.tag){case 0:case 11:case 14:case 15:In(4,i,i.return);break;case 1:Xt(i,i.return);var m=i.stateNode;if(typeof m.componentWillUnmount=="function"){r=i,n=i.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){q(r,n,y)}}break;case 5:Xt(i,i.return);break;case 22:if(i.memoizedState!==null){$i(l);continue}}c!==null?(c.return=i,j=c):$i(l)}x=x.sibling}e:for(x=null,l=e;;){if(l.tag===5){if(x===null){x=l;try{a=l.stateNode,g?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=l.stateNode,p=l.memoizedProps.style,s=p!=null&&p.hasOwnProperty("display")?p.display:null,f.style.display=As("display",s))}catch(y){q(e,e.return,y)}}}else if(l.tag===6){if(x===null)try{l.stateNode.nodeValue=g?"":l.memoizedProps}catch(y){q(e,e.return,y)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;x===l&&(x=null),l=l.return}x===l&&(x=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:Me(t,e),Be(e),r&4&&Gi(e);break;case 21:break;default:Me(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Dn(a,""),r.flags&=-33);var o=Vi(e);Go(e,o,a);break;case 3:case 4:var s=r.stateNode.containerInfo,f=Vi(e);Vo(e,f,s);break;default:throw Error(k(161))}}catch(p){q(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e,t,n){j=e,oc(e)}function oc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var a=j,o=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||kr;if(!s){var f=a.alternate,p=f!==null&&f.memoizedState!==null||ce;f=kr;var g=ce;if(kr=s,(ce=p)&&!g)for(j=a;j!==null;)s=j,p=s.child,s.tag===22&&s.memoizedState!==null?qi(a):p!==null?(p.return=s,j=p):qi(a);for(;o!==null;)j=o,oc(o),o=o.sibling;j=a,kr=f,ce=g}Ui(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,j=o):Ui(e)}}function Ui(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ei(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ei(t,s,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var x=g.memoizedState;if(x!==null){var l=x.dehydrated;l!==null&&Qn(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ce||t.flags&512&&Qo(t)}catch(i){q(t,t.return,i)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function $i(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function qi(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ba(4,t)}catch(p){q(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(p){q(t,a,p)}}var o=t.return;try{Qo(t)}catch(p){q(t,o,p)}break;case 5:var s=t.return;try{Qo(t)}catch(p){q(t,s,p)}}}catch(p){q(t,t.return,p)}if(t===e){j=null;break}var f=t.sibling;if(f!==null){f.return=t.return,j=f;break}j=t.return}}var zf=Math.ceil,ra=tt.ReactCurrentDispatcher,Pl=tt.ReactCurrentOwner,Ee=tt.ReactCurrentBatchConfig,P=0,ne=null,K=null,ae=0,_e=0,Kt=xt(0),J=0,er=null,Pt=0,va=0,Il=0,On=null,ge=null,Ol=0,dn=1/0,Ue=null,aa=!1,Uo=null,ht=null,wr=!1,st=null,oa=0,Fn=0,$o=null,Pr=-1,Ir=0;function pe(){return P&6?X():Pr!==-1?Pr:Pr=X()}function mt(e){return e.mode&1?P&2&&ae!==0?ae&-ae:hf.transition!==null?(Ir===0&&(Ir=Ws()),Ir):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ys(e.type)),e):1}function Re(e,t,n,r){if(50<Fn)throw Fn=0,$o=null,Error(k(185));nr(e,n,r),(!(P&2)||e!==ne)&&(e===ne&&(!(P&2)&&(va|=n),J===4&&lt(e,ae)),xe(e,r),n===1&&P===0&&!(t.mode&1)&&(dn=X()+500,ma&&_t()))}function xe(e,t){var n=e.callbackNode;pd(e,t);var r=Wr(e,e===ne?ae:0);if(r===0)n!==null&&ri(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ri(n),t===1)e.tag===0?pf(Yi.bind(null,e)):hu(Yi.bind(null,e)),uf(function(){!(P&6)&&_t()}),n=null;else{switch(Qs(r)){case 1:n=sl;break;case 4:n=Hs;break;case 16:n=Br;break;case 536870912:n=Bs;break;default:n=Br}n=pc(n,lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lc(e,t){if(Pr=-1,Ir=0,P&6)throw Error(k(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Wr(e,e===ne?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=la(e,r);else{t=r;var a=P;P|=2;var o=sc();(ne!==e||ae!==t)&&(Ue=null,dn=X()+500,At(e,t));do try{Pf();break}catch(f){ic(e,f)}while(!0);_l(),ra.current=o,P=a,K!==null?t=0:(ne=null,ae=0,t=J)}if(t!==0){if(t===2&&(a=_o(e),a!==0&&(r=a,t=qo(e,a))),t===1)throw n=er,At(e,0),lt(e,r),xe(e,X()),n;if(t===6)lt(e,r);else{if(a=e.current.alternate,!(r&30)&&!Lf(a)&&(t=la(e,r),t===2&&(o=_o(e),o!==0&&(r=o,t=qo(e,o))),t===1))throw n=er,At(e,0),lt(e,r),xe(e,X()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:jt(e,ge,Ue);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Ol+500-X(),10<t)){if(Wr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ao(jt.bind(null,e,ge,Ue),t);break}jt(e,ge,Ue);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-Fe(r);o=1<<s,s=t[s],s>a&&(a=s),r&=~o}if(r=a,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zf(r/1960))-r,10<r){e.timeoutHandle=Ao(jt.bind(null,e,ge,Ue),r);break}jt(e,ge,Ue);break;case 5:jt(e,ge,Ue);break;default:throw Error(k(329))}}}return xe(e,X()),e.callbackNode===n?lc.bind(null,e):null}function qo(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=la(e,t),e!==2&&(t=ge,ge=n,t!==null&&Yo(t)),e}function Yo(e){ge===null?ge=e:ge.push.apply(ge,e)}function Lf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!De(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Il,t&=~va,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Yi(e){if(P&6)throw Error(k(327));rn();var t=Wr(e,0);if(!(t&1))return xe(e,X()),null;var n=la(e,t);if(e.tag!==0&&n===2){var r=_o(e);r!==0&&(t=r,n=qo(e,r))}if(n===1)throw n=er,At(e,0),lt(e,t),xe(e,X()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ge,Ue),xe(e,X()),null}function Fl(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(dn=X()+500,ma&&_t())}}function It(e){st!==null&&st.tag===0&&!(P&6)&&rn();var t=P;P|=1;var n=Ee.transition,r=F;try{if(Ee.transition=null,F=1,e)return e()}finally{F=r,Ee.transition=n,P=t,!(P&6)&&_t()}}function Rl(){_e=Kt.current,B(Kt)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:un(),B(be),B(de),Nl();break;case 5:Cl(r);break;case 4:un();break;case 13:B(Q);break;case 19:B(Q);break;case 10:kl(r.type._context);break;case 22:case 23:Rl()}n=n.return}if(ne=e,K=e=gt(e.current,null),ae=_e=t,J=0,er=null,Il=va=Pt=0,ge=On=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=a,r.next=s}n.pending=r}Nt=null}return e}function ic(e,t){do{var n=K;try{if(_l(),zr.current=na,ta){for(var r=G.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ta=!1}if(Mt=0,te=Z=G=null,Pn=!1,Kn=0,Pl.current=null,n===null||n.return===null){J=1,er=t,K=null;break}e:{var o=e,s=n.return,f=n,p=t;if(t=ae,f.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var g=p,x=f,l=x.tag;if(!(x.mode&1)&&(l===0||l===11||l===15)){var i=x.alternate;i?(x.updateQueue=i.updateQueue,x.memoizedState=i.memoizedState,x.lanes=i.lanes):(x.updateQueue=null,x.memoizedState=null)}var c=Oi(s);if(c!==null){c.flags&=-257,Fi(c,s,f,o,t),c.mode&1&&Ii(o,g,t),t=c,p=g;var m=t.updateQueue;if(m===null){var y=new Set;y.add(p),t.updateQueue=y}else m.add(p);break e}else{if(!(t&1)){Ii(o,g,t),Dl();break e}p=Error(k(426))}}else if(W&&f.mode&1){var v=Oi(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Fi(v,s,f,o,t),vl(cn(p,f));break e}}o=p=cn(p,f),J!==4&&(J=2),On===null?On=[o]:On.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Qu(o,p,t);Ai(o,d);break e;case 1:f=p;var h=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ht===null||!ht.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=Vu(o,f,t);Ai(o,_);break e}}o=o.return}while(o!==null)}cc(n)}catch(w){t=w,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function sc(){var e=ra.current;return ra.current=na,e===null?na:e}function Dl(){(J===0||J===3||J===2)&&(J=4),ne===null||!(Pt&268435455)&&!(va&268435455)||lt(ne,ae)}function la(e,t){var n=P;P|=2;var r=sc();(ne!==e||ae!==t)&&(Ue=null,At(e,t));do try{Mf();break}catch(a){ic(e,a)}while(!0);if(_l(),P=n,ra.current=r,K!==null)throw Error(k(261));return ne=null,ae=0,J}function Mf(){for(;K!==null;)uc(K)}function Pf(){for(;K!==null&&!ad();)uc(K)}function uc(e){var t=fc(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?cc(e):K=t,Pl.current=null}function cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(n=Cf(n,t,_e),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);J===0&&(J=5)}function jt(e,t,n){var r=F,a=Ee.transition;try{Ee.transition=null,F=1,If(e,t,n,r)}finally{Ee.transition=a,F=r}return null}function If(e,t,n,r){do rn();while(st!==null);if(P&6)throw Error(k(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hd(e,o),e===ne&&(K=ne=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,pc(Br,function(){return rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var s=F;F=1;var f=P;P|=4,Pl.current=null,Af(e,n),ac(n,e),ef(No),Qr=!!Co,No=Co=null,e.current=n,Ef(n),od(),P=f,F=s,Ee.transition=o}else e.current=n;if(wr&&(wr=!1,st=e,oa=a),o=e.pendingLanes,o===0&&(ht=null),sd(n.stateNode),xe(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(aa)throw aa=!1,e=Uo,Uo=null,e;return oa&1&&e.tag!==0&&rn(),o=e.pendingLanes,o&1?e===$o?Fn++:(Fn=0,$o=e):Fn=0,_t(),null}function rn(){if(st!==null){var e=Qs(oa),t=Ee.transition,n=F;try{if(Ee.transition=null,F=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,oa=0,P&6)throw Error(k(331));var a=P;for(P|=4,j=e.current;j!==null;){var o=j,s=o.child;if(j.flags&16){var f=o.deletions;if(f!==null){for(var p=0;p<f.length;p++){var g=f[p];for(j=g;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:In(8,x,o)}var l=x.child;if(l!==null)l.return=x,j=l;else for(;j!==null;){x=j;var i=x.sibling,c=x.return;if(tc(x),x===g){j=null;break}if(i!==null){i.return=c,j=i;break}j=c}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}j=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,j=s;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:In(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,j=d;break e}j=o.return}}var h=e.current;for(j=h;j!==null;){s=j;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,j=b;else e:for(s=h;j!==null;){if(f=j,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:ba(9,f)}}catch(w){q(f,f.return,w)}if(f===s){j=null;break e}var _=f.sibling;if(_!==null){_.return=f.return,j=_;break e}j=f.return}}if(P=a,_t(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ca,e)}catch{}r=!0}return r}finally{F=n,Ee.transition=t}}return!1}function Xi(e,t,n){t=cn(n,t),t=Qu(e,t,1),e=pt(e,t,1),t=pe(),e!==null&&(nr(e,1,t),xe(e,t))}function q(e,t,n){if(e.tag===3)Xi(e,e,n);else for(;t!==null;){if(t.tag===3){Xi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=cn(n,e),e=Vu(t,e,1),t=pt(t,e,1),e=pe(),t!==null&&(nr(t,1,e),xe(t,e));break}}t=t.return}}function Of(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ae&n)===n&&(J===4||J===3&&(ae&130023424)===ae&&500>X()-Ol?At(e,0):Il|=n),xe(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=pe();e=Je(e,t),e!==null&&(nr(e,t,n),xe(e,n))}function Ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),dc(e,n)}var fc;fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,jf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,W&&t.flags&1048576&&mu(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var a=on(t,de.current);nn(t,n),a=Al(null,t,r,e,a,n);var o=El();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,qr(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Sl(t),a.updater=ya,t.stateNode=a,a._reactInternals=t,Oo(t,r,e,n),t=Do(null,t,r,!0,o,n)):(t.tag=0,W&&o&&yl(t),fe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Hf(r),e=Pe(r,e),a){case 0:t=Ro(null,t,r,e,n);break e;case 1:t=Hi(null,t,r,e,n);break e;case 11:t=Ri(null,t,r,e,n);break e;case 14:t=Di(null,t,r,Pe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Ro(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Hi(e,t,r,a,n);case 3:e:{if(qu(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,a=o.element,_u(e,t),Jr(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=cn(Error(k(423)),t),t=Bi(e,t,r,n,a);break e}else if(r!==a){a=cn(Error(k(424)),t),t=Bi(e,t,r,n,a);break e}else for(ke=ft(t.stateNode.containerInfo.firstChild),we=t,W=!0,Oe=null,n=vu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),r===a){t=et(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return ku(t),e===null&&Mo(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,To(r,a)?s=null:o!==null&&To(r,o)&&(t.flags|=32),$u(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&Mo(t),null;case 13:return Yu(e,t,n);case 4:return jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Ri(e,t,r,a,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,D(Kr,r._currentValue),r._currentValue=s,o!==null)if(De(o.value,s)){if(o.children===a.children&&!be.current){t=et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var f=o.dependencies;if(f!==null){s=o.child;for(var p=f.firstContext;p!==null;){if(p.context===r){if(o.tag===1){p=Xe(-1,n&-n),p.tag=2;var g=o.updateQueue;if(g!==null){g=g.shared;var x=g.pending;x===null?p.next=p:(p.next=x.next,x.next=p),g.pending=p}}o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),Po(o.return,n,t),f.lanes|=n;break}p=p.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),Po(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nn(t,n),a=ze(a),r=r(a),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,a=Pe(r,t.pendingProps),a=Pe(r.type,a),Di(e,t,r,a,n);case 15:return Gu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Mr(e,t),t.tag=1,ve(r)?(e=!0,qr(t)):e=!1,nn(t,n),Wu(t,r,a),Oo(t,r,a,n),Do(null,t,r,!0,e,n);case 19:return Xu(e,t,n);case 22:return Uu(e,t,n)}throw Error(k(156,t.tag))};function pc(e,t){return Ds(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new Df(e,t,n,r)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ol)return 11;if(e===ll)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,a,o){var s=2;if(r=e,typeof e=="function")Hl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return Et(n.children,a,o,t);case al:s=8,a|=8;break;case oo:return e=Ae(12,n,t,a|2),e.elementType=oo,e.lanes=o,e;case lo:return e=Ae(13,n,t,a),e.elementType=lo,e.lanes=o,e;case io:return e=Ae(19,n,t,a),e.elementType=io,e.lanes=o,e;case ks:return xa(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:s=10;break e;case _s:s=9;break e;case ol:s=11;break e;case ll:s=14;break e;case rt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ae(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=ks,e.lanes=n,e.stateNode={isHidden:!1},e}function eo(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function to(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ia(0),this.expirationTimes=Ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ia(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bl(e,t,n,r,a,o,s,f,p){return e=new Bf(e,t,n,f,p),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ae(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(o),e}function Wf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hc(e){if(!e)return bt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ve(n))return pu(e,n,t)}return t}function mc(e,t,n,r,a,o,s,f,p){return e=Bl(n,r,!0,e,a,o,s,f,p),e.context=hc(null),n=e.current,r=pe(),a=mt(n),o=Xe(r,a),o.callback=t??null,pt(n,o,a),e.current.lanes=a,nr(e,a,r),xe(e,r),e}function _a(e,t,n,r){var a=t.current,o=pe(),s=mt(a);return n=hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(a,t,s),e!==null&&(Re(e,a,s,o),Er(e,a,s)),s}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ki(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wl(e,t){Ki(e,t),(e=e.alternate)&&Ki(e,t)}function Qf(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}ka.prototype.render=Ql.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_a(e,t,null,null)};ka.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){_a(null,e,null,null)}),t[Ze]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&qs(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zi(){}function Vf(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var g=ia(s);o.call(g)}}var s=mc(t,r,e,0,null,!1,!1,"",Zi);return e._reactRootContainer=s,e[Ze]=s.current,Un(e.nodeType===8?e.parentNode:e),It(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var f=r;r=function(){var g=ia(p);f.call(g)}}var p=Bl(e,0,!1,null,null,!1,!1,"",Zi);return e._reactRootContainer=p,e[Ze]=p.current,Un(e.nodeType===8?e.parentNode:e),It(function(){_a(t,p,n,r)}),p}function Sa(e,t,n,r,a){var o=n._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var f=a;a=function(){var p=ia(s);f.call(p)}}_a(t,s,e,a)}else s=Vf(n,t,e,a,r);return ia(s)}Vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ul(t,n|1),xe(t,X()),!(P&6)&&(dn=X()+500,_t()))}break;case 13:It(function(){var r=Je(e,1);if(r!==null){var a=pe();Re(r,e,1,a)}}),Wl(e,1)}};cl=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=pe();Re(t,e,134217728,n)}Wl(e,134217728)}};Gs=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=pe();Re(n,e,t,r)}Wl(e,t)}};Us=function(){return F};$s=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};bo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ha(r);if(!a)throw Error(k(90));Ss(r),co(r,a)}}}break;case"textarea":Cs(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Ms=Fl;Ps=It;var Gf={usingClientEntryPoint:!1,Events:[ar,Gt,ha,zs,Ls,Fl]},wn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fs(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{ca=Sr.inject(Uf),Ve=Sr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(k(200));return Wf(e,t,null,n)};je.createRoot=function(e,t){if(!Vl(e))throw Error(k(299));var n=!1,r="",a=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Bl(e,1,!1,null,null,n,!1,r,a),e[Ze]=t.current,Un(e.nodeType===8?e.parentNode:e),new Ql(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Fs(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return It(e)};je.hydrate=function(e,t,n){if(!wa(t))throw Error(k(200));return Sa(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Vl(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",s=gc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=mc(t,null,e,1,n??null,a,!1,o,s),e[Ze]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ka(t)};je.render=function(e,t,n){if(!wa(t))throw Error(k(200));return Sa(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!wa(e))throw Error(k(40));return e._reactRootContainer?(It(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};je.unstable_batchedUpdates=Fl;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wa(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Sa(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc)}catch(e){console.error(e)}}yc(),gs.exports=je;var $f=gs.exports,Ji=$f;ro.createRoot=Ji.createRoot,ro.hydrateRoot=Ji.hydrateRoot;const es=({onStart:e,onSettings:t,onHelp:n})=>u.jsxs("div",{className:"cg-main-menu",children:[u.jsxs("div",{className:"cg-menu-bg",children:[u.jsx("div",{className:"cg-menu-bg-gradient"}),u.jsx("div",{className:"cg-menu-bg-pattern"}),u.jsx("div",{className:"cg-menu-geass-symbols",children:u.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:u.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),u.jsxs("div",{className:"cg-menu-content",children:[u.jsxs("div",{className:"cg-menu-header",children:[u.jsxs("div",{className:"cg-menu-title-decoration",children:[u.jsx("div",{className:"cg-title-line-left"}),u.jsx("div",{className:"cg-title-ornament",children:u.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:u.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),u.jsx("div",{className:"cg-title-line-right"})]}),u.jsxs("h1",{className:"cg-game-title",children:[u.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),u.jsx("span",{className:"cg-title-divider",children:":"}),u.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),u.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),u.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[u.jsx("div",{className:"cg-title-line-left"}),u.jsx("div",{className:"cg-title-ornament",children:u.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[u.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),u.jsx("div",{className:"cg-title-line-right"})]})]}),u.jsxs("nav",{className:"cg-menu-nav",children:[u.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M8 5v14l11-7z"})})}),u.jsx("span",{className:"cg-button-text",children:"开始游戏"}),u.jsx("div",{className:"cg-button-shimmer"})]}),u.jsxs("button",{className:"cg-menu-button",onClick:t,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),u.jsx("span",{className:"cg-button-text",children:"设置"})]}),u.jsxs("button",{className:"cg-menu-button",onClick:n,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),u.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),u.jsx("footer",{className:"cg-menu-footer",children:u.jsx("div",{className:"cg-footer-decoration",children:u.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),u.jsx("style",{children:`
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
      `})]}),Xo=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",color:"#4c1d95",secondaryColor:"#1e1b4b",accentColor:"#dc2626",description:"黑色骑士团的领袖，拥有Geass之力",personality:"calculating",pose:"思考姿势 - 单手托腮，眼神锐利",accessories:["眼罩（遮住Geass之眼）","黑色披风","金色装饰"]},{id:"cc",name:"C.C.",nameEn:"C.C.",color:"#15803d",secondaryColor:"#14532d",accentColor:"#fbbf24",description:"赋予鲁鲁修Geass的神秘少女",personality:"mysterious",pose:"慵懒姿势 - 手持披萨，侧躺",accessories:["披萨","白色拘束服","绿色长发"]},{id:"suzaku",name:"枢木朱雀",nameEn:"Suzaku",color:"#f8fafc",secondaryColor:"#cbd5e1",accentColor:"#3b82f6",description:"圆桌骑士，鲁鲁修的挚友也是宿敌",personality:"passionate",pose:"热血姿势 - 握拳，充满干劲",accessories:["骑士制服","兰斯洛特徽章","白色披风"]},{id:"kallen",name:"红月卡莲",nameEn:"Kallen",color:"#dc2626",secondaryColor:"#991b1b",accentColor:"#fbbf24",description:"黑色骑士团的王牌驾驶员",personality:"tsundere",pose:"傲娇姿势 - 双臂交叉，侧头",accessories:["红色头巾","驾驶服","红莲徽章"]}],ja={lelouch:{primary:"#4c1d95",secondary:"#2e1065",highlight:"#7c3aed",shadow:"#1e1b4b",eye:"#dc2626",outline:"#0a0a0f"},cc:{primary:"#15803d",secondary:"#166534",highlight:"#22c55e",eye:"#fbbf24",outline:"#0a0a0f"},suzaku:{primary:"#f8fafc",secondary:"#e2e8f0",highlight:"#ffffff",shadow:"#94a3b8",eye:"#3b82f6",outline:"#0a0a0f"},kallen:{primary:"#dc2626",secondary:"#b91c1c",highlight:"#ef4444",shadow:"#7f1d1d",eye:"#fbbf24",outline:"#0a0a0f"}},ts=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.lelouch,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(-5deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"lelouchBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"lelouchCapeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.secondary}),u.jsx("stop",{offset:"100%",stopColor:r.shadow})]}),u.jsxs("radialGradient",{id:"lelouchEyeGrad",cx:"50%",cy:"50%",r:"50%",children:[u.jsx("stop",{offset:"0%",stopColor:r.eye}),u.jsx("stop",{offset:"70%",stopColor:r.eye}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("symbol",{id:"geassSymbol",viewBox:"0 0 40 40",children:[u.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"none",stroke:r.eye,strokeWidth:"2"}),u.jsx("circle",{cx:"20",cy:"20",r:"3",fill:r.eye})]})]}),u.jsx("path",{d:"M60 100 Q40 140 30 180 L170 180 Q160 140 140 100 Z",fill:"url(#lelouchCapeGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"130",rx:"45",ry:"40",fill:"url(#lelouchBodyGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M70 130 Q100 145 130 130",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("circle",{cx:"100",cy:"70",r:"45",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M55 70 Q50 40 70 30 Q100 20 130 30 Q150 40 145 70 Q150 90 140 100 L60 100 Q50 90 55 70",fill:r.shadow,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M60 50 Q70 35 85 45 Q100 30 115 45 Q130 35 140 50 Q135 65 130 60 L100 55 L70 60 Q65 65 60 50",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"82",cy:"75",rx:"10",ry:"12",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"82",cy:"75",rx:"6",ry:"8",fill:"#1e293b"}),u.jsx("circle",{cx:"84",cy:"73",r:"2",fill:"white"}),u.jsx("ellipse",{cx:"118",cy:"75",rx:"10",ry:"12",fill:"#1a1a24",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("rect",{x:"108",y:"65",width:"20",height:"20",rx:"3",fill:r.shadow,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("line",{x1:"108",y1:"75",x2:"128",y2:"75",stroke:r.outline,strokeWidth:"1"}),u.jsx("line",{x1:"118",y1:"65",x2:"118",y2:"85",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M128 75 Q145 70 155 65",fill:"none",stroke:r.shadow,strokeWidth:"3"}),u.jsx("path",{d:"M108 75 Q90 70 80 65",fill:"none",stroke:r.shadow,strokeWidth:"3"}),u.jsx("path",{d:"M92 95 Q100 92 108 95",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("ellipse",{cx:"65",cy:"110",rx:"12",ry:"10",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"135",cy:"115",rx:"12",ry:"10",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("use",{href:"#geassSymbol",x:"150",y:"20",width:"30",height:"30",opacity:"0.6",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 165 35",to:"360 165 35",dur:"10s",repeatCount:"indefinite"})}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"130",rx:"48",ry:"43",fill:"none",stroke:r.eye,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"48;50;48",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},qf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.cc,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(5deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"ccBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"ccHairGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"100%",stopColor:r.primary})]}),u.jsxs("linearGradient",{id:"ccPizzaGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#fbbf24"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("path",{d:"M50 80 Q30 120 25 160 Q20 180 30 190 L170 190 Q180 180 175 160 Q170 120 150 80 Q100 70 50 80",fill:"url(#ccHairGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"40",ry:"35",fill:"#f8fafc",stroke:r.outline,strokeWidth:"2"}),u.jsx("rect",{x:"85",y:"110",width:"30",height:"50",rx:"5",fill:"none",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("line",{x1:"100",y1:"110",x2:"100",y2:"160",stroke:r.outline,strokeWidth:"1"}),u.jsx("circle",{cx:"92",cy:"125",r:"3",fill:r.outline}),u.jsx("circle",{cx:"108",cy:"125",r:"3",fill:r.outline}),u.jsx("circle",{cx:"92",cy:"145",r:"3",fill:r.outline}),u.jsx("circle",{cx:"108",cy:"145",r:"3",fill:r.outline}),u.jsx("circle",{cx:"100",cy:"75",r:"42",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M58 75 Q60 45 85 50 Q100 40 115 50 Q140 45 142 75 Q140 95 130 90 L100 85 L70 90 Q60 95 58 75",fill:"url(#ccHairGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"78",rx:"9",ry:"10",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"78",rx:"5",ry:"6",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"76",r:"1.5",fill:"white"}),u.jsx("ellipse",{cx:"122",cy:"78",rx:"9",ry:"10",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"78",rx:"5",ry:"6",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"76",r:"1.5",fill:"white"}),u.jsx("path",{d:"M70 65 Q78 68 86 65",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M114 65 Q122 68 130 65",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M95 95 Q100 98 105 95",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsxs("g",{transform:"translate(130, 100) rotate(-20)",children:[u.jsx("path",{d:"M0 0 L-20 40 Q0 50 20 40 Z",fill:"url(#ccPizzaGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M-2 5 L-15 35 Q0 42 15 35 L2 5 Z",fill:"#fef3c7",opacity:"0.9"}),u.jsx("circle",{cx:"-5",cy:"20",r:"3",fill:"#dc2626"}),u.jsx("circle",{cx:"5",cy:"25",r:"3",fill:"#dc2626"}),u.jsx("circle",{cx:"0",cy:"32",r:"2.5",fill:"#dc2626"})]}),u.jsx("ellipse",{cx:"140",cy:"120",rx:"10",ry:"8",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"60",cy:"125",rx:"10",ry:"8",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"43",ry:"38",fill:"none",stroke:r.highlight,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"38;40;38",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Yf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.suzaku,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-15px) scale(1.08)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(-3deg) scale(1.02)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"suzakuBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"suzakuCapeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.shadow})]}),u.jsxs("linearGradient",{id:"suzakuUniformGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"50%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]})]}),u.jsx("path",{d:"M55 100 Q35 140 30 180 L170 180 Q165 140 145 100 Z",fill:"url(#suzakuCapeGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"42",ry:"38",fill:"url(#suzakuUniformGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M70 120 Q100 140 130 120",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("rect",{x:"95",y:"110",width:"10",height:"40",fill:"#d4af37"}),u.jsx("circle",{cx:"100",cy:"130",r:"8",fill:"#3b82f6",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M96 130 L100 126 L104 130 L100 134 Z",fill:"white"}),u.jsx("circle",{cx:"100",cy:"72",r:"43",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M57 72 Q55 40 75 32 Q100 25 125 32 Q145 40 143 72 Q145 90 135 95 L100 90 L65 95 Q55 90 57 72",fill:"#5c4033",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M60 55 L55 45 L68 52 L72 40 L80 50 L85 35 L95 48 L100 30 L105 48 L115 35 L120 50 L128 40 L132 52 L145 45 L140 55",fill:"#5c4033",stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M72 70 L78 72",stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M128 70 L122 72",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M68 62 L88 68",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M132 62 L112 68",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M90 95 Q100 102 110 95",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M92 97 L108 97",fill:"none",stroke:r.outline,strokeWidth:"1"}),u.jsxs("g",{transform:"translate(55, 115)",children:[u.jsx("circle",{cx:"0",cy:"0",r:"12",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"-3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"0",cy:"-8",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"})]}),u.jsxs("g",{transform:"translate(145, 115)",children:[u.jsx("circle",{cx:"0",cy:"0",r:"12",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"-3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"0",cy:"-8",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"})]}),t==="win"&&u.jsxs("g",{stroke:"#fbbf24",strokeWidth:"2",opacity:"0.8",children:[u.jsx("line",{x1:"40",y1:"60",x2:"30",y2:"50",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"160",y1:"60",x2:"170",y2:"50",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"50",y1:"40",x2:"45",y2:"30",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",begin:"0.2s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"150",y1:"40",x2:"155",y2:"30",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",begin:"0.2s",repeatCount:"indefinite"})})]}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"45",ry:"41",fill:"none",stroke:r.eye,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"45;47;45",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"41;43;41",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Xf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.kallen,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(3deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"kallenBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"kallenHairGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"100%",stopColor:r.primary})]}),u.jsxs("linearGradient",{id:"kallenSuitGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"100%",stopColor:"#450a0a"})]})]}),u.jsx("path",{d:"M50 80 Q40 120 35 160 Q30 185 45 190 L155 190 Q170 185 165 160 Q160 120 150 80 Q100 70 50 80",fill:"url(#kallenHairGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"40",ry:"36",fill:"url(#kallenSuitGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M75 120 Q100 135 125 120",fill:"none",stroke:r.highlight,strokeWidth:"2"}),u.jsx("rect",{x:"95",y:"115",width:"10",height:"35",fill:r.highlight,opacity:"0.5"}),u.jsx("circle",{cx:"100",cy:"130",r:"7",fill:r.eye,stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M97 130 L100 127 L103 130 L100 133 Z",fill:r.shadow}),u.jsx("circle",{cx:"100",cy:"72",r:"42",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M58 72 Q60 42 85 48 Q100 38 115 48 Q140 42 142 72 Q140 92 130 88 L100 82 L70 88 Q60 92 58 72",fill:"url(#kallenHairGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M55 60 Q100 45 145 60 L148 75 Q100 60 52 75 Z",fill:r.secondary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("rect",{x:"95",y:"50",width:"10",height:"15",fill:r.highlight}),u.jsx("path",{d:"M55 65 Q40 80 35 100 L45 95 Q50 80 58 70",fill:r.secondary,stroke:r.outline,strokeWidth:"1",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 55 65;5 55 65;0 55 65",dur:"2s",repeatCount:"indefinite"})}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"74",r:"2",fill:"white"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M68 62 L88 66",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M132 62 L112 66",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M95 96 Q100 94 108 97",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M60 125 Q80 135 100 130 Q120 135 140 125",fill:"none",stroke:r.primary,strokeWidth:"12",strokeLinecap:"round"}),u.jsx("path",{d:"M60 125 Q80 135 100 130 Q120 135 140 125",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("ellipse",{cx:"85",cy:"128",rx:"8",ry:"6",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"115",cy:"128",rx:"8",ry:"6",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"65",cy:"85",rx:"8",ry:"5",fill:"#fca5a5",opacity:"0.6"}),u.jsx("ellipse",{cx:"135",cy:"85",rx:"8",ry:"5",fill:"#fca5a5",opacity:"0.6"}),t==="lose"&&u.jsxs("g",{stroke:r.outline,strokeWidth:"2",children:[u.jsx("path",{d:"M40 50 L50 55 M45 45 L52 52",children:u.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("path",{d:"M160 50 L150 55 M155 45 L148 52",children:u.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"0.5s",repeatCount:"indefinite"})})]}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"43",ry:"39",fill:"none",stroke:r.highlight,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"39;41;39",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},sa=e=>{const{characterId:t,size:n=200,animationState:r="idle",className:a=""}=e,o={size:n,animationState:r,className:a};switch(t){case"lelouch":return Dt.createElement(ts,o);case"cc":return Dt.createElement(qf,o);case"suzaku":return Dt.createElement(Yf,o);case"kallen":return Dt.createElement(Xf,o);default:return Dt.createElement(ts,o)}},Kf=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[a,o]=O.useState(null),s=Xo.find(f=>f.id===e);return u.jsxs("div",{className:"cg-character-select",children:[u.jsxs("div",{className:"cg-select-bg",children:[u.jsx("div",{className:"cg-select-bg-gradient"}),u.jsx("div",{className:"cg-select-bg-pattern"})]}),u.jsxs("div",{className:"cg-select-content",children:[u.jsxs("header",{className:"cg-select-header",children:[u.jsxs("button",{className:"cg-back-button",onClick:r,children:[u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),u.jsx("span",{children:"返回"})]}),u.jsx("h2",{className:"cg-select-title",children:u.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),u.jsx("div",{className:"cg-select-placeholder"})]}),u.jsx("div",{className:"cg-character-grid",children:Xo.map(f=>{const p=e===f.id,g=a===f.id;return u.jsxs("div",{className:`cg-character-card ${p?"cg-selected":""} ${g?"cg-hovered":""}`,onClick:()=>t(f.id),onMouseEnter:()=>o(f.id),onMouseLeave:()=>o(null),children:[u.jsxs("div",{className:"cg-card-frame",children:[u.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),u.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),u.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),u.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),u.jsx("div",{className:"cg-character-preview",children:u.jsx(sa,{characterId:f.id,size:150,animationState:p?"breathing":"idle"})}),u.jsxs("div",{className:"cg-character-info",children:[u.jsx("h3",{className:"cg-character-name",children:f.name}),u.jsx("p",{className:"cg-character-name-en",children:f.nameEn})]}),p&&u.jsx("div",{className:"cg-selected-indicator",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:u.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),u.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${f.color}40 0%, transparent 70%)`}})]},f.id)})}),s&&u.jsx("div",{className:"cg-character-detail",children:u.jsxs("div",{className:"cg-detail-frame",children:[u.jsxs("div",{className:"cg-detail-content",children:[u.jsx("p",{className:"cg-detail-description",children:s.description}),u.jsxs("div",{className:"cg-detail-traits",children:[u.jsx("span",{className:"cg-trait-label",children:"性格:"}),u.jsxs("span",{className:"cg-trait-value",children:[s.personality==="calculating"&&"深谋远虑",s.personality==="mysterious"&&"神秘莫测",s.personality==="passionate"&&"热血正义",s.personality==="tsundere"&&"傲娇坚强"]})]})]}),u.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[u.jsx("span",{children:"确认选择"}),u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),u.jsx("style",{children:`
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
      `})]})},Zf=({gameState:e,onPlayCard:t,onPass:n,onChallenge:r,gameLog:a=[],funnyAction:o})=>{const{selectedCharacter:s,playerHand:f,tableCards:p,currentRound:g,playerScore:x,opponentScore:l,playerHP:i,opponentHP:c,maxHP:m,currentTurn:y,lastAction:v}=e;return u.jsxs("div",{className:"cg-game-table",children:[u.jsxs("div",{className:"cg-table-bg",children:[u.jsx("div",{className:"cg-table-bg-gradient"}),u.jsx("div",{className:"cg-table-pattern",children:u.jsxs("svg",{className:"cg-table-geass-pattern",viewBox:"0 0 200 200",children:[u.jsx("defs",{children:u.jsx("pattern",{id:"geassPattern",x:"0",y:"0",width:"50",height:"50",patternUnits:"userSpaceOnUse",children:u.jsx("path",{d:"M25 5 L28 20 L42 25 L28 30 L25 45 L22 30 L8 25 L22 20 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.05)",strokeWidth:"0.5"})})}),u.jsx("rect",{width:"100%",height:"100%",fill:"url(#geassPattern)"})]})})]}),u.jsxs("header",{className:"cg-table-header",children:[u.jsxs("div",{className:"cg-round-info",children:[u.jsx("span",{className:"cg-round-label",children:"回合"}),u.jsxs("span",{className:"cg-round-value",children:[g,"/5"]})]}),u.jsxs("div",{className:"cg-score-board",children:[u.jsxs("div",{className:"cg-score cg-player-score",children:[u.jsx("span",{className:"cg-score-label",children:"玩家"}),u.jsx("span",{className:"cg-score-value",children:x})]}),u.jsx("div",{className:"cg-score-divider",children:":"}),u.jsxs("div",{className:"cg-score cg-opponent-score",children:[u.jsx("span",{className:"cg-score-value",children:l}),u.jsx("span",{className:"cg-score-label",children:"对手"})]})]}),u.jsx("div",{className:"cg-hp-display",children:u.jsxs("div",{className:"cg-hp-bar",children:[u.jsx("span",{className:"cg-hp-label",children:"HP"}),u.jsx("div",{className:"cg-hp-hearts",children:Array.from({length:m||3}).map((d,h)=>u.jsx("span",{className:`cg-hp-heart ${h<(i||3)?"active":""}`,children:h<(i||3)?"❤️":"🖤"},h))})]})})]}),u.jsxs("div",{className:"cg-opponent-area",children:[u.jsx("div",{className:"cg-opponent-hand",children:[...Array(5)].map((d,h)=>u.jsx("div",{className:"cg-card cg-card-back",children:u.jsx("div",{className:"cg-card-pattern",children:u.jsxs("svg",{viewBox:"0 0 40 60",children:[u.jsx("rect",{width:"40",height:"60",fill:"#1a1a24"}),u.jsx("path",{d:"M20 10 L23 22 L35 25 L23 28 L20 40 L17 28 L5 25 L17 22 Z",fill:"none",stroke:"#dc2626",strokeWidth:"1",opacity:"0.5"})]})})},h))}),u.jsxs("div",{className:"cg-opponent-avatar",children:[u.jsx("div",{className:`cg-avatar-frame ${y==="opponent"?"cg-avatar-active":""}`,children:u.jsx(sa,{characterId:"cc",size:80,animationState:y==="opponent"?"breathing":"idle"})}),u.jsx("div",{className:"cg-opponent-name",children:"C.C."}),u.jsx("div",{className:"cg-opponent-hp",children:Array.from({length:m||3}).map((d,h)=>u.jsx("span",{className:"cg-hp-heart-small",children:h<(c||3)?"❤️":"🖤"},h))})]})]}),u.jsx("div",{className:"cg-table-center",children:u.jsx("div",{className:"cg-table-surface",children:u.jsxs("div",{className:"cg-table-felt",children:[u.jsxs("div",{className:"cg-felt-border",children:[u.jsx("div",{className:"cg-felt-corner cg-felt-tl"}),u.jsx("div",{className:"cg-felt-corner cg-felt-tr"}),u.jsx("div",{className:"cg-felt-corner cg-felt-bl"}),u.jsx("div",{className:"cg-felt-corner cg-felt-br"})]}),u.jsx("div",{className:"cg-table-logo",children:u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-logo-geass",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"1",opacity:"0.3"}),u.jsx("circle",{cx:"50",cy:"50",r:"35",fill:"none",stroke:"#d4af37",strokeWidth:"0.5",opacity:"0.2"}),u.jsx("path",{d:"M50 15 L55 40 L80 50 L55 60 L50 85 L45 60 L20 50 L45 40 Z",fill:"none",stroke:"#dc2626",strokeWidth:"2",opacity:"0.4",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"120s",repeatCount:"indefinite"})})]})}),u.jsx("div",{className:"cg-play-area",children:p.length===0?u.jsx("div",{className:"cg-play-placeholder",children:u.jsx("span",{children:"出牌区域"})}):u.jsx("div",{className:"cg-played-cards",children:p.map((d,h)=>u.jsx("div",{className:"cg-card cg-card-played",style:{transform:`rotate(${(h-p.length/2)*5}deg) translateY(${h*-5}px)`},children:u.jsxs("div",{className:"cg-card-content",children:[u.jsx("span",{className:"cg-card-rank",children:d.rank}),u.jsx("span",{className:"cg-card-suit",children:ns(d.suit)})]})},d.id))})}),o&&u.jsx("div",{className:"cg-funny-action",children:u.jsxs("div",{className:"cg-funny-action-content",children:[u.jsx("span",{className:"cg-funny-emoji",children:o.emoji}),u.jsx("span",{className:"cg-funny-text",children:o.description})]})}),v&&u.jsx("div",{className:"cg-last-action",children:v})]})})}),u.jsx("div",{className:"cg-game-log",children:a.map((d,h)=>u.jsx("div",{className:"cg-log-entry",children:d},h))}),u.jsxs("div",{className:"cg-player-area",children:[u.jsxs("div",{className:"cg-player-avatar",children:[u.jsx("div",{className:`cg-avatar-frame ${y==="player"?"cg-avatar-active":""}`,children:s&&u.jsx(sa,{characterId:s,size:80,animationState:y==="player"?"breathing":"idle"})}),u.jsx("div",{className:"cg-player-name",children:"玩家"})]}),u.jsx("div",{className:"cg-player-hand",children:f.map((d,h)=>u.jsx("button",{className:`cg-card cg-card-front ${y!=="player"?"disabled":""}`,onClick:()=>y==="player"&&t(d.id),style:{transform:`translateX(${(h-f.length/2)*30}px)`},disabled:y!=="player",children:u.jsxs("div",{className:"cg-card-inner",children:[u.jsx("div",{className:"cg-card-rank cg-card-rank-tl",children:d.rank}),u.jsx("div",{className:"cg-card-suit-center",children:ns(d.suit)}),u.jsx("div",{className:"cg-card-rank cg-card-rank-br",children:d.rank})]})},d.id))})]}),u.jsxs("div",{className:"cg-action-bar",children:[u.jsx("button",{className:"cg-action-button cg-button-pass",onClick:n,disabled:y!=="player",children:u.jsx("span",{children:"跳过"})}),u.jsxs("button",{className:"cg-action-button cg-button-challenge cg-button-geass",onClick:r,disabled:y!=="player"||p.length===0,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),u.jsx("span",{children:"质疑"})]})]}),u.jsx("style",{children:`
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
      `})]})};function ns(e){return{spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦"}[e]||e}const Jf=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:a})=>{const[o,s]=O.useState(!1),[f,p]=O.useState(!1);O.useEffect(()=>{e&&s(!0);const l=setTimeout(()=>p(!0),1e3);return()=>clearTimeout(l)},[e]);const g=e?"lelouch":"cc",x=e?"win":"lose";return u.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[u.jsxs("div",{className:"cg-result-bg",children:[u.jsx("div",{className:"cg-result-bg-gradient"}),e?u.jsx("div",{className:"cg-result-bg-win",children:u.jsx("div",{className:"cg-victory-rays"})}):u.jsx("div",{className:"cg-result-bg-lose",children:u.jsx("div",{className:"cg-defeat-shadow"})})]}),o&&u.jsx(ep,{}),u.jsxs("div",{className:`cg-result-content ${f?"cg-animate-in":""}`,children:[u.jsxs("div",{className:"cg-result-header",children:[u.jsx("div",{className:"cg-result-badge",children:e?u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((l,i)=>u.jsx("circle",{cx:50+35*Math.cos((i*72-90)*Math.PI/180),cy:50+35*Math.sin((i*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${i*.2}s`,repeatCount:"indefinite"})},i))]}):u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),u.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:u.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),u.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),u.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),u.jsx("div",{className:"cg-result-character",children:u.jsxs("div",{className:"cg-character-showcase",children:[u.jsx(sa,{characterId:g,size:200,animationState:x}),u.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),u.jsx("div",{className:"cg-result-score",children:u.jsxs("div",{className:"cg-score-panel",children:[u.jsxs("div",{className:"cg-score-item cg-score-player",children:[u.jsx("span",{className:"cg-score-label",children:"玩家"}),u.jsx("span",{className:"cg-score-value",children:t})]}),u.jsx("div",{className:"cg-score-divider",children:u.jsx("span",{children:"VS"})}),u.jsxs("div",{className:"cg-score-item cg-score-opponent",children:[u.jsx("span",{className:"cg-score-value",children:n}),u.jsx("span",{className:"cg-score-label",children:"对手"})]})]})}),u.jsxs("div",{className:"cg-result-actions",children:[u.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),u.jsx("span",{children:"再来一局"})]}),u.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:a,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),u.jsx("span",{children:"返回主菜单"})]})]})]}),u.jsx("style",{children:`
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
      `})]})},ep=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return u.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>u.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})},tp=()=>{const e=["spades","hearts","clubs","diamonds"],t=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],n=[];for(const r of e)for(let a=0;a<t.length;a++)n.push({id:`${r}-${t[a]}`,suit:r,rank:t[a],value:a+1,isRevealed:!1});return n},np=e=>{const t=[...e];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},rp=(e,t=5)=>{const n=np(e),r=n.slice(0,t),a=n.slice(t,t*2),o=n.slice(t*2);return{playerHand:r,opponentHand:a,remaining:o}};var Fr={};/*!
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var l=this||n;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var i=this||n;if(l=parseFloat(l),i.ctx||x(),typeof l<"u"&&l>=0&&l<=1){if(i._volume=l,i._muted)return i;i.usingWebAudio&&i.masterGain.gain.setValueAtTime(l,n.ctx.currentTime);for(var c=0;c<i._howls.length;c++)if(!i._howls[c]._webAudio)for(var m=i._howls[c]._getSoundIds(),y=0;y<m.length;y++){var v=i._howls[c]._soundById(m[y]);v&&v._node&&(v._node.volume=v._volume*l)}return i}return i._volume},mute:function(l){var i=this||n;i.ctx||x(),i._muted=l,i.usingWebAudio&&i.masterGain.gain.setValueAtTime(l?0:i._volume,n.ctx.currentTime);for(var c=0;c<i._howls.length;c++)if(!i._howls[c]._webAudio)for(var m=i._howls[c]._getSoundIds(),y=0;y<m.length;y++){var v=i._howls[c]._soundById(m[y]);v&&v._node&&(v._node.muted=l?!0:v._muted)}return i},stop:function(){for(var l=this||n,i=0;i<l._howls.length;i++)l._howls[i].stop();return l},unload:function(){for(var l=this||n,i=l._howls.length-1;i>=0;i--)l._howls[i].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,x()),l},codecs:function(l){return(this||n)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||n;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var i=new Audio;typeof i.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var i=new Audio;i.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||n,i=null;try{i=typeof Audio<"u"?new Audio:null}catch{return l}if(!i||typeof i.canPlayType!="function")return l;var c=i.canPlayType("audio/mpeg;").replace(/^no$/,""),m=l._navigator?l._navigator.userAgent:"",y=m.match(/OPR\/(\d+)/g),v=y&&parseInt(y[0].split("/")[1],10)<33,d=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,h=m.match(/Version\/(.*?) /),b=d&&h&&parseInt(h[1],10)<15;return l._codecs={mp3:!!(!v&&(c||i.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(i.canPlayType('audio/wav; codecs="1"')||i.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!i.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!i.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/m4a;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(i.canPlayType("audio/x-m4b;")||i.canPlayType("audio/m4b;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(i.canPlayType("audio/x-mp4;")||i.canPlayType("audio/mp4;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!b&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!b&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(i.canPlayType("audio/x-flac;")||i.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||n;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var i=function(c){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,l._releaseHtml5Audio(m)}catch{l.noAudio=!0;break}for(var y=0;y<l._howls.length;y++)if(!l._howls[y]._webAudio)for(var v=l._howls[y]._getSoundIds(),d=0;d<v.length;d++){var h=l._howls[y]._soundById(v[d]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}l._autoResume();var b=l.ctx.createBufferSource();b.buffer=l._scratchBuffer,b.connect(l.ctx.destination),typeof b.start>"u"?b.noteOn(0):b.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),b.onended=function(){b.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",i,!0),document.removeEventListener("touchend",i,!0),document.removeEventListener("click",i,!0),document.removeEventListener("keydown",i,!0);for(var _=0;_<l._howls.length;_++)l._howls[_]._emit("unlock")}};return document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",i,!0),document.addEventListener("click",i,!0),document.addEventListener("keydown",i,!0),l}},_obtainHtml5Audio:function(){var l=this||n;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var i=new Audio().play();return i&&typeof Promise<"u"&&(i instanceof Promise||typeof i.then=="function")&&i.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var i=this||n;return l._unlocked&&i._html5AudioPool.push(l),i},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!n.usingWebAudio)){for(var i=0;i<l._howls.length;i++)if(l._howls[i]._webAudio){for(var c=0;c<l._howls[i]._sounds.length;c++)if(!l._howls[i]._sounds[c]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var m=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(m,m)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!n.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var i=0;i<l._howls.length;i++)l._howls[i]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var n=new t,r=function(l){var i=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}i.init(l)};r.prototype={init:function(l){var i=this;return n.ctx||x(),i._autoplay=l.autoplay||!1,i._format=typeof l.format!="string"?l.format:[l.format],i._html5=l.html5||!1,i._muted=l.mute||!1,i._loop=l.loop||!1,i._pool=l.pool||5,i._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,i._rate=l.rate||1,i._sprite=l.sprite||{},i._src=typeof l.src!="string"?l.src:[l.src],i._volume=l.volume!==void 0?l.volume:1,i._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},i._duration=0,i._state="unloaded",i._sounds=[],i._endTimers={},i._queue=[],i._playLock=!1,i._onend=l.onend?[{fn:l.onend}]:[],i._onfade=l.onfade?[{fn:l.onfade}]:[],i._onload=l.onload?[{fn:l.onload}]:[],i._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],i._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],i._onpause=l.onpause?[{fn:l.onpause}]:[],i._onplay=l.onplay?[{fn:l.onplay}]:[],i._onstop=l.onstop?[{fn:l.onstop}]:[],i._onmute=l.onmute?[{fn:l.onmute}]:[],i._onvolume=l.onvolume?[{fn:l.onvolume}]:[],i._onrate=l.onrate?[{fn:l.onrate}]:[],i._onseek=l.onseek?[{fn:l.onseek}]:[],i._onunlock=l.onunlock?[{fn:l.onunlock}]:[],i._onresume=[],i._webAudio=n.usingWebAudio&&!i._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(i),i._autoplay&&i._queue.push({event:"play",action:function(){i.play()}}),i._preload&&i._preload!=="none"&&i.load(),i},load:function(){var l=this,i=null;if(n.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var c=0;c<l._src.length;c++){var m,y;if(l._format&&l._format[c])m=l._format[c];else{if(y=l._src[c],typeof y!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(y),m||(m=/\.([^.]+)$/.exec(y.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&n.codecs(m)){i=l._src[c];break}}if(!i){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=i,l._state="loading",window.location.protocol==="https:"&&i.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new a(l),l._webAudio&&s(l),l},play:function(l,i){var c=this,m=null;if(typeof l=="number")m=l,l=null;else{if(typeof l=="string"&&c._state==="loaded"&&!c._sprite[l])return null;if(typeof l>"u"&&(l="__default",!c._playLock)){for(var y=0,v=0;v<c._sounds.length;v++)c._sounds[v]._paused&&!c._sounds[v]._ended&&(y++,m=c._sounds[v]._id);y===1?l=null:m=null}}var d=m?c._soundById(m):c._inactiveSound();if(!d)return null;if(m&&!l&&(l=d._sprite||"__default"),c._state!=="loaded"){d._sprite=l,d._ended=!1;var h=d._id;return c._queue.push({event:"play",action:function(){c.play(h)}}),h}if(m&&!d._paused)return i||c._loadQueue("play"),d._id;c._webAudio&&n._autoResume();var b=Math.max(0,d._seek>0?d._seek:c._sprite[l][0]/1e3),_=Math.max(0,(c._sprite[l][0]+c._sprite[l][1])/1e3-b),w=_*1e3/Math.abs(d._rate),S=c._sprite[l][0]/1e3,C=(c._sprite[l][0]+c._sprite[l][1])/1e3;d._sprite=l,d._ended=!1;var T=function(){d._paused=!1,d._seek=b,d._start=S,d._stop=C,d._loop=!!(d._loop||c._sprite[l][2])};if(b>=C){c._ended(d);return}var A=d._node;if(c._webAudio){var z=function(){c._playLock=!1,T(),c._refreshBuffer(d);var $=d._muted||c._muted?0:d._volume;A.gain.setValueAtTime($,n.ctx.currentTime),d._playStart=n.ctx.currentTime,typeof A.bufferSource.start>"u"?d._loop?A.bufferSource.noteGrainOn(0,b,86400):A.bufferSource.noteGrainOn(0,b,_):d._loop?A.bufferSource.start(0,b,86400):A.bufferSource.start(0,b,_),w!==1/0&&(c._endTimers[d._id]=setTimeout(c._ended.bind(c,d),w)),i||setTimeout(function(){c._emit("play",d._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?z():(c._playLock=!0,c.once("resume",z),c._clearTimer(d._id))}else{var le=function(){A.currentTime=b,A.muted=d._muted||c._muted||n._muted||A.muted,A.volume=d._volume*n.volume(),A.playbackRate=d._rate;try{var $=A.play();if($&&typeof Promise<"u"&&($ instanceof Promise||typeof $.then=="function")?(c._playLock=!0,T(),$.then(function(){c._playLock=!1,A._unlocked=!0,i?c._loadQueue():c._emit("play",d._id)}).catch(function(){c._playLock=!1,c._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0})):i||(c._playLock=!1,T(),c._emit("play",d._id)),A.playbackRate=d._rate,A.paused){c._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||d._loop?c._endTimers[d._id]=setTimeout(c._ended.bind(c,d),w):(c._endTimers[d._id]=function(){c._ended(d),A.removeEventListener("ended",c._endTimers[d._id],!1)},A.addEventListener("ended",c._endTimers[d._id],!1))}catch(He){c._emit("playerror",d._id,He)}};A.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(A.src=c._src,A.load());var R=window&&window.ejecta||!A.readyState&&n._navigator.isCocoonJS;if(A.readyState>=3||R)le();else{c._playLock=!0,c._state="loading";var I=function(){c._state="loaded",le(),A.removeEventListener(n._canPlayEvent,I,!1)};A.addEventListener(n._canPlayEvent,I,!1),c._clearTimer(d._id)}}return d._id},pause:function(l){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"pause",action:function(){i.pause(l)}}),i;for(var c=i._getSoundIds(l),m=0;m<c.length;m++){i._clearTimer(c[m]);var y=i._soundById(c[m]);if(y&&!y._paused&&(y._seek=i.seek(c[m]),y._rateSeek=0,y._paused=!0,i._stopFade(c[m]),y._node))if(i._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),i._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||i._emit("pause",y?y._id:null)}return i},stop:function(l,i){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(l)}}),c;for(var m=c._getSoundIds(l),y=0;y<m.length;y++){c._clearTimer(m[y]);var v=c._soundById(m[y]);v&&(v._seek=v._start||0,v._rateSeek=0,v._paused=!0,v._ended=!0,c._stopFade(m[y]),v._node&&(c._webAudio?v._node.bufferSource&&(typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),c._cleanBuffer(v._node)):(!isNaN(v._node.duration)||v._node.duration===1/0)&&(v._node.currentTime=v._start||0,v._node.pause(),v._node.duration===1/0&&c._clearSound(v._node))),i||c._emit("stop",v._id))}return c},mute:function(l,i){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(l,i)}}),c;if(typeof i>"u")if(typeof l=="boolean")c._muted=l;else return c._muted;for(var m=c._getSoundIds(i),y=0;y<m.length;y++){var v=c._soundById(m[y]);v&&(v._muted=l,v._interval&&c._stopFade(v._id),c._webAudio&&v._node?v._node.gain.setValueAtTime(l?0:v._volume,n.ctx.currentTime):v._node&&(v._node.muted=n._muted?!0:l),c._emit("mute",v._id))}return c},volume:function(){var l=this,i=arguments,c,m;if(i.length===0)return l._volume;if(i.length===1||i.length===2&&typeof i[1]>"u"){var y=l._getSoundIds(),v=y.indexOf(i[0]);v>=0?m=parseInt(i[0],10):c=parseFloat(i[0])}else i.length>=2&&(c=parseFloat(i[0]),m=parseInt(i[1],10));var d;if(typeof c<"u"&&c>=0&&c<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,i)}}),l;typeof m>"u"&&(l._volume=c),m=l._getSoundIds(m);for(var h=0;h<m.length;h++)d=l._soundById(m[h]),d&&(d._volume=c,i[2]||l._stopFade(m[h]),l._webAudio&&d._node&&!d._muted?d._node.gain.setValueAtTime(c,n.ctx.currentTime):d._node&&!d._muted&&(d._node.volume=c*n.volume()),l._emit("volume",d._id))}else return d=m?l._soundById(m):l._sounds[0],d?d._volume:0;return l},fade:function(l,i,c,m){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(l,i,c,m)}}),y;l=Math.min(Math.max(0,parseFloat(l)),1),i=Math.min(Math.max(0,parseFloat(i)),1),c=parseFloat(c),y.volume(l,m);for(var v=y._getSoundIds(m),d=0;d<v.length;d++){var h=y._soundById(v[d]);if(h){if(m||y._stopFade(v[d]),y._webAudio&&!h._muted){var b=n.ctx.currentTime,_=b+c/1e3;h._volume=l,h._node.gain.setValueAtTime(l,b),h._node.gain.linearRampToValueAtTime(i,_)}y._startFadeInterval(h,l,i,c,v[d],typeof m>"u")}}return y},_startFadeInterval:function(l,i,c,m,y,v){var d=this,h=i,b=c-i,_=Math.abs(b/.01),w=Math.max(4,_>0?m/_:m),S=Date.now();l._fadeTo=c,l._interval=setInterval(function(){var C=(Date.now()-S)/m;S=Date.now(),h+=b*C,h=Math.round(h*100)/100,b<0?h=Math.max(c,h):h=Math.min(c,h),d._webAudio?l._volume=h:d.volume(h,l._id,!0),v&&(d._volume=h),(c<i&&h<=c||c>i&&h>=c)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,d.volume(c,l._id),d._emit("fade",l._id))},w)},_stopFade:function(l){var i=this,c=i._soundById(l);return c&&c._interval&&(i._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,i.volume(c._fadeTo,l),c._fadeTo=null,i._emit("fade",l)),i},loop:function(){var l=this,i=arguments,c,m,y;if(i.length===0)return l._loop;if(i.length===1)if(typeof i[0]=="boolean")c=i[0],l._loop=c;else return y=l._soundById(parseInt(i[0],10)),y?y._loop:!1;else i.length===2&&(c=i[0],m=parseInt(i[1],10));for(var v=l._getSoundIds(m),d=0;d<v.length;d++)y=l._soundById(v[d]),y&&(y._loop=c,l._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,l.playing(v[d])&&(l.pause(v[d],!0),l.play(v[d],!0)))));return l},rate:function(){var l=this,i=arguments,c,m;if(i.length===0)m=l._sounds[0]._id;else if(i.length===1){var y=l._getSoundIds(),v=y.indexOf(i[0]);v>=0?m=parseInt(i[0],10):c=parseFloat(i[0])}else i.length===2&&(c=parseFloat(i[0]),m=parseInt(i[1],10));var d;if(typeof c=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,i)}}),l;typeof m>"u"&&(l._rate=c),m=l._getSoundIds(m);for(var h=0;h<m.length;h++)if(d=l._soundById(m[h]),d){l.playing(m[h])&&(d._rateSeek=l.seek(m[h]),d._playStart=l._webAudio?n.ctx.currentTime:d._playStart),d._rate=c,l._webAudio&&d._node&&d._node.bufferSource?d._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):d._node&&(d._node.playbackRate=c);var b=l.seek(m[h]),_=(l._sprite[d._sprite][0]+l._sprite[d._sprite][1])/1e3-b,w=_*1e3/Math.abs(d._rate);(l._endTimers[m[h]]||!d._paused)&&(l._clearTimer(m[h]),l._endTimers[m[h]]=setTimeout(l._ended.bind(l,d),w)),l._emit("rate",d._id)}}else return d=l._soundById(m),d?d._rate:l._rate;return l},seek:function(){var l=this,i=arguments,c,m;if(i.length===0)l._sounds.length&&(m=l._sounds[0]._id);else if(i.length===1){var y=l._getSoundIds(),v=y.indexOf(i[0]);v>=0?m=parseInt(i[0],10):l._sounds.length&&(m=l._sounds[0]._id,c=parseFloat(i[0]))}else i.length===2&&(c=parseFloat(i[0]),m=parseInt(i[1],10));if(typeof m>"u")return 0;if(typeof c=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,i)}}),l;var d=l._soundById(m);if(d)if(typeof c=="number"&&c>=0){var h=l.playing(m);h&&l.pause(m,!0),d._seek=c,d._ended=!1,l._clearTimer(m),!l._webAudio&&d._node&&!isNaN(d._node.duration)&&(d._node.currentTime=c);var b=function(){h&&l.play(m,!0),l._emit("seek",m)};if(h&&!l._webAudio){var _=function(){l._playLock?setTimeout(_,0):b()};setTimeout(_,0)}else b()}else if(l._webAudio){var w=l.playing(m)?n.ctx.currentTime-d._playStart:0,S=d._rateSeek?d._rateSeek-d._seek:0;return d._seek+(S+w*Math.abs(d._rate))}else return d._node.currentTime;return l},playing:function(l){var i=this;if(typeof l=="number"){var c=i._soundById(l);return c?!c._paused:!1}for(var m=0;m<i._sounds.length;m++)if(!i._sounds[m]._paused)return!0;return!1},duration:function(l){var i=this,c=i._duration,m=i._soundById(l);return m&&(c=i._sprite[m._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var l=this,i=l._sounds,c=0;c<i.length;c++)i[c]._paused||l.stop(i[c]._id),l._webAudio||(l._clearSound(i[c]._node),i[c]._node.removeEventListener("error",i[c]._errorFn,!1),i[c]._node.removeEventListener(n._canPlayEvent,i[c]._loadFn,!1),i[c]._node.removeEventListener("ended",i[c]._endFn,!1),n._releaseHtml5Audio(i[c]._node)),delete i[c]._node,l._clearTimer(i[c]._id);var m=n._howls.indexOf(l);m>=0&&n._howls.splice(m,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===l._src||l._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return o&&y&&delete o[l._src],n.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,i,c,m){var y=this,v=y["_on"+l];return typeof i=="function"&&v.push(m?{id:c,fn:i,once:m}:{id:c,fn:i}),y},off:function(l,i,c){var m=this,y=m["_on"+l],v=0;if(typeof i=="number"&&(c=i,i=null),i||c)for(v=0;v<y.length;v++){var d=c===y[v].id;if(i===y[v].fn&&d||!i&&d){y.splice(v,1);break}}else if(l)m["_on"+l]=[];else{var h=Object.keys(m);for(v=0;v<h.length;v++)h[v].indexOf("_on")===0&&Array.isArray(m[h[v]])&&(m[h[v]]=[])}return m},once:function(l,i,c){var m=this;return m.on(l,i,c,1),m},_emit:function(l,i,c){for(var m=this,y=m["_on"+l],v=y.length-1;v>=0;v--)(!y[v].id||y[v].id===i||l==="load")&&(setTimeout((function(d){d.call(this,i,c)}).bind(m,y[v].fn),0),y[v].once&&m.off(l,y[v].fn,y[v].id));return m._loadQueue(l),m},_loadQueue:function(l){var i=this;if(i._queue.length>0){var c=i._queue[0];c.event===l&&(i._queue.shift(),i._loadQueue()),l||c.action()}return i},_ended:function(l){var i=this,c=l._sprite;if(!i._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(i._ended.bind(i,l),100),i;var m=!!(l._loop||i._sprite[c][2]);if(i._emit("end",l._id),!i._webAudio&&m&&i.stop(l._id,!0).play(l._id),i._webAudio&&m){i._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=n.ctx.currentTime;var y=(l._stop-l._start)*1e3/Math.abs(l._rate);i._endTimers[l._id]=setTimeout(i._ended.bind(i,l),y)}return i._webAudio&&!m&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,i._clearTimer(l._id),i._cleanBuffer(l._node),n._autoSuspend()),!i._webAudio&&!m&&i.stop(l._id,!0),i},_clearTimer:function(l){var i=this;if(i._endTimers[l]){if(typeof i._endTimers[l]!="function")clearTimeout(i._endTimers[l]);else{var c=i._soundById(l);c&&c._node&&c._node.removeEventListener("ended",i._endTimers[l],!1)}delete i._endTimers[l]}return i},_soundById:function(l){for(var i=this,c=0;c<i._sounds.length;c++)if(l===i._sounds[c]._id)return i._sounds[c];return null},_inactiveSound:function(){var l=this;l._drain();for(var i=0;i<l._sounds.length;i++)if(l._sounds[i]._ended)return l._sounds[i].reset();return new a(l)},_drain:function(){var l=this,i=l._pool,c=0,m=0;if(!(l._sounds.length<i)){for(m=0;m<l._sounds.length;m++)l._sounds[m]._ended&&c++;for(m=l._sounds.length-1;m>=0;m--){if(c<=i)return;l._sounds[m]._ended&&(l._webAudio&&l._sounds[m]._node&&l._sounds[m]._node.disconnect(0),l._sounds.splice(m,1),c--)}}},_getSoundIds:function(l){var i=this;if(typeof l>"u"){for(var c=[],m=0;m<i._sounds.length;m++)c.push(i._sounds[m]._id);return c}else return[l]},_refreshBuffer:function(l){var i=this;return l._node.bufferSource=n.ctx.createBufferSource(),l._node.bufferSource.buffer=o[i._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,n.ctx.currentTime),i},_cleanBuffer:function(l){var i=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return i;if(n._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),c))try{l.bufferSource.buffer=n._scratchBuffer}catch{}return l.bufferSource=null,i},_clearSound:function(l){var i=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);i||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(l){this._parent=l,this.init()};a.prototype={init:function(){var l=this,i=l._parent;return l._muted=i._muted,l._loop=i._loop,l._volume=i._volume,l._rate=i._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++n._counter,i._sounds.push(l),l.create(),l},create:function(){var l=this,i=l._parent,c=n._muted||l._muted||l._parent._muted?0:l._volume;return i._webAudio?(l._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),l._node.gain.setValueAtTime(c,n.ctx.currentTime),l._node.paused=!0,l._node.connect(n.masterGain)):n.noAudio||(l._node=n._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(n._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=i._src,l._node.preload=i._preload===!0?"auto":i._preload,l._node.volume=c*n.volume(),l._node.load()),l},reset:function(){var l=this,i=l._parent;return l._muted=i._muted,l._loop=i._loop,l._volume=i._volume,l._rate=i._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++n._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,i=l._parent;i._duration=Math.ceil(l._node.duration*10)/10,Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue()),l._node.removeEventListener(n._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,i=l._parent;i._duration===1/0&&(i._duration=Math.ceil(l._node.duration*10)/10,i._sprite.__default[1]===1/0&&(i._sprite.__default[1]=i._duration*1e3),i._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var o={},s=function(l){var i=l._src;if(o[i]){l._duration=o[i].duration,g(l);return}if(/^data:[^;]+;base64,/.test(i)){for(var c=atob(i.split(",")[1]),m=new Uint8Array(c.length),y=0;y<c.length;++y)m[y]=c.charCodeAt(y);p(m.buffer,l)}else{var v=new XMLHttpRequest;v.open(l._xhr.method,i,!0),v.withCredentials=l._xhr.withCredentials,v.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(d){v.setRequestHeader(d,l._xhr.headers[d])}),v.onload=function(){var d=(v.status+"")[0];if(d!=="0"&&d!=="2"&&d!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+v.status+".");return}p(v.response,l)},v.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete o[i],l.load())},f(v)}},f=function(l){try{l.send()}catch{l.onerror()}},p=function(l,i){var c=function(){i._emit("loaderror",null,"Decoding audio data failed.")},m=function(y){y&&i._sounds.length>0?(o[i._src]=y,g(i,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(l).then(m).catch(c):n.ctx.decodeAudioData(l,m,c)},g=function(l,i){i&&!l._duration&&(l._duration=i.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),i=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=i?parseInt(i[1],10):null;if(l&&c&&c<9){var m=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!m&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof mn<"u"?(mn.HowlerGlobal=t,mn.Howler=n,mn.Howl=r,mn.Sound=a):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=a)})();/*!
*  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
*  
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var a=r._howls.length-1;a>=0;a--)r._howls[a].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,a){var o=this;if(!o.ctx||!o.ctx.listener)return o;if(r=typeof r!="number"?o._pos[1]:r,a=typeof a!="number"?o._pos[2]:a,typeof n=="number")o._pos=[n,r,a],typeof o.ctx.listener.positionX<"u"?(o.ctx.listener.positionX.setTargetAtTime(o._pos[0],Howler.ctx.currentTime,.1),o.ctx.listener.positionY.setTargetAtTime(o._pos[1],Howler.ctx.currentTime,.1),o.ctx.listener.positionZ.setTargetAtTime(o._pos[2],Howler.ctx.currentTime,.1)):o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]);else return o._pos;return o},HowlerGlobal.prototype.orientation=function(n,r,a,o,s,f){var p=this;if(!p.ctx||!p.ctx.listener)return p;var g=p._orientation;if(r=typeof r!="number"?g[1]:r,a=typeof a!="number"?g[2]:a,o=typeof o!="number"?g[3]:o,s=typeof s!="number"?g[4]:s,f=typeof f!="number"?g[5]:f,typeof n=="number")p._orientation=[n,r,a,o,s,f],typeof p.ctx.listener.forwardX<"u"?(p.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),p.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),p.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),p.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),p.ctx.listener.upY.setTargetAtTime(s,Howler.ctx.currentTime,.1),p.ctx.listener.upZ.setTargetAtTime(f,Howler.ctx.currentTime,.1)):p.ctx.listener.setOrientation(n,r,a,o,s,f);else return g;return p},Howl.prototype.init=function(n){return function(r){var a=this;return a._orientation=r.orientation||[1,0,0],a._stereo=r.stereo||null,a._pos=r.pos||null,a._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},a._onstereo=r.onstereo?[{fn:r.onstereo}]:[],a._onpos=r.onpos?[{fn:r.onpos}]:[],a._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(n,r)}}),a;var o=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")a._stereo=n,a._pos=[n,0,0];else return a._stereo;for(var s=a._getSoundIds(r),f=0;f<s.length;f++){var p=a._soundById(s[f]);if(p)if(typeof n=="number")p._stereo=n,p._pos=[n,0,0],p._node&&(p._pannerAttr.panningModel="equalpower",(!p._panner||!p._panner.pan)&&t(p,o),o==="spatial"?typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):p._panner.setPosition(n,0,0):p._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),a._emit("stereo",p._id);else return p._stereo}return a},Howl.prototype.pos=function(n,r,a,o){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"pos",action:function(){s.pos(n,r,a,o)}}),s;if(r=typeof r!="number"?0:r,a=typeof a!="number"?-.5:a,typeof o>"u")if(typeof n=="number")s._pos=[n,r,a];else return s._pos;for(var f=s._getSoundIds(o),p=0;p<f.length;p++){var g=s._soundById(f[p]);if(g)if(typeof n=="number")g._pos=[n,r,a],g._node&&((!g._panner||g._panner.pan)&&t(g,"spatial"),typeof g._panner.positionX<"u"?(g._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):g._panner.setPosition(n,r,a)),s._emit("pos",g._id);else return g._pos}return s},Howl.prototype.orientation=function(n,r,a,o){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"orientation",action:function(){s.orientation(n,r,a,o)}}),s;if(r=typeof r!="number"?s._orientation[1]:r,a=typeof a!="number"?s._orientation[2]:a,typeof o>"u")if(typeof n=="number")s._orientation=[n,r,a];else return s._orientation;for(var f=s._getSoundIds(o),p=0;p<f.length;p++){var g=s._soundById(f[p]);if(g)if(typeof n=="number")g._orientation=[n,r,a],g._node&&(g._panner||(g._pos||(g._pos=s._pos||[0,0,-.5]),t(g,"spatial")),typeof g._panner.orientationX<"u"?(g._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):g._panner.setOrientation(n,r,a)),s._emit("orientation",g._id);else return g._orientation}return s},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,a,o,s;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")a=r[0],typeof o>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),n._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:n._panningModel});else return s=n._soundById(parseInt(r[0],10)),s?s._pannerAttr:n._pannerAttr;else r.length===2&&(a=r[0],o=parseInt(r[1],10));for(var f=n._getSoundIds(o),p=0;p<f.length;p++)if(s=n._soundById(f[p]),s){var g=s._pannerAttr;g={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:g.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:g.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:g.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:g.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:g.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:g.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:g.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:g.panningModel};var x=s._panner;x||(s._pos||(s._pos=n._pos||[0,0,-.5]),t(s,"spatial"),x=s._panner),x.coneInnerAngle=g.coneInnerAngle,x.coneOuterAngle=g.coneOuterAngle,x.coneOuterGain=g.coneOuterGain,x.distanceModel=g.distanceModel,x.maxDistance=g.maxDistance,x.refDistance=g.refDistance,x.rolloffFactor=g.rolloffFactor,x.panningModel=g.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,a=r._parent;r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,n.call(this),r._stereo?a.stereo(r._stereo):r._pos&&a.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,a=r._parent;return r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,r._stereo?a.stereo(r._stereo):r._pos?a.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,a._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Fr);const no={"bgm-menu":{volume:.5,loop:!0},"bgm-game":{volume:.4,loop:!0},"bgm-victory":{volume:.6,loop:!1},"bgm-defeat":{volume:.5,loop:!1},"sfx-play-card":{volume:.7,loop:!1},"sfx-challenge":{volume:.8,loop:!1},"sfx-geass-activate":{volume:.9,loop:!1},"sfx-geass-hit":{volume:1,loop:!1},"sfx-geass-miss":{volume:.6,loop:!1},"sfx-button-click":{volume:.5,loop:!1},"sfx-card-shuffle":{volume:.6,loop:!1},"sfx-win":{volume:.8,loop:!1},"sfx-lose":{volume:.7,loop:!1},"sfx-character-select":{volume:.6,loop:!1},"sfx-turn-start":{volume:.5,loop:!1},"sfx-funny-dance":{volume:.8,loop:!1},"sfx-funny-monkey":{volume:.8,loop:!1},"sfx-funny-pizza":{volume:.7,loop:!1},"sfx-funny-laugh":{volume:.9,loop:!1},"sfx-funny-chicken":{volume:.8,loop:!1},"sfx-funny-chunibyo":{volume:.8,loop:!1},"sfx-funny-butterfly":{volume:.6,loop:!1}},ap={"bgm-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","bgm-game":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","bgm-victory":"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3","bgm-defeat":"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","sfx-play-card":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","sfx-challenge":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","sfx-geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","sfx-geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","sfx-geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","sfx-button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","sfx-card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","sfx-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","sfx-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","sfx-character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","sfx-turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","sfx-funny-dance":"https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3","sfx-funny-monkey":"https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3","sfx-funny-pizza":"https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3","sfx-funny-laugh":"https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3","sfx-funny-chicken":"https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3","sfx-funny-chunibyo":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3","sfx-funny-butterfly":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3"};class op{constructor(){V(this,"sounds",new Map),V(this,"currentBGM",null),V(this,"enabled",!0),V(this,"masterVolume",1),V(this,"bgmVolume",.5),V(this,"sfxVolume",.7),this.init()}init(){Object.entries(ap).forEach(([t,n])=>{const r=t,a=no[r];try{const o=new Fr.Howl({src:[n],volume:a.volume*this.getVolumeMultiplier(r),loop:a.loop,html5:!0,preload:r.startsWith("bgm-"),onloaderror:(s,f)=>{console.warn(`Failed to load sound: ${r}`,f)}});this.sounds.set(r,o)}catch(o){console.warn(`Error creating sound: ${r}`,o)}})}getVolumeMultiplier(t){return t.startsWith("bgm-")?this.bgmVolume:this.sfxVolume}play(t){if(!this.enabled)return;const n=this.sounds.get(t);n&&(t.startsWith("bgm-")&&(this.stopBGM(),this.currentBGM=t),n.play())}stop(t){const n=this.sounds.get(t);n&&n.stop()}stopBGM(){this.currentBGM&&(this.stop(this.currentBGM),this.currentBGM=null)}pauseBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.play()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),Fr.Howler.volume(this.masterVolume)}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")&&n.volume(no[r].volume*this.bgmVolume)})}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")||n.volume(no[r].volume*this.sfxVolume)})}setEnabled(t){this.enabled=t,t||this.stopAll()}stopAll(){Fr.Howler.stop(),this.currentBGM=null}playFunnyAction(t){const n=["sfx-funny-dance","sfx-funny-monkey","sfx-funny-pizza","sfx-funny-laugh","sfx-funny-chicken","sfx-funny-chunibyo","sfx-funny-butterfly"],r=n[t%n.length];r&&this.play(r)}preload(){return new Promise(t=>{let n=0;const r=this.sounds.size;if(r===0){t();return}this.sounds.forEach(a=>{a.state()==="loaded"?(n++,n>=r&&t()):(a.once("load",()=>{n++,n>=r&&t()}),a.once("loaderror",()=>{n++,n>=r&&t()}))}),setTimeout(()=>t(),5e3)})}getStatus(){return{enabled:this.enabled,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume,currentBGM:this.currentBGM}}}const Ca=new op,ue=e=>Ca.play(e),Sn=e=>Ca.play(e),lp=()=>Ca.stopBGM();class ip{constructor(){V(this,"name","Easy"),V(this,"description","随机出牌，随机质疑，适合新手"),V(this,"memory",new Map)}makeDecision(t,n){if(Math.random()<.3)return{action:"challenge",confidence:Math.random(),reasoning:"随机质疑",animationState:"challenging"};const r=t.aiPlayer;if(r.hand.length>0){const a=r.hand[Math.floor(Math.random()*r.hand.length)],o=["citizen","king","slave"],s=o[Math.floor(Math.random()*o.length)];return{action:"play",card:a,claimedCard:s,confidence:.5,reasoning:"随机出牌",animationState:"playing",isBluff:a.type!==s}}return{action:"pass",confidence:.5,reasoning:"无牌可出",animationState:"playing"}}calculateChallengeProbability(){return .3}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[Math.floor(Math.random()*n.length)];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(t){return{bluffFrequency:.5,challengeThreshold:.7,riskTolerance:.5,patience:.5,adaptability:.3}}}class rs{constructor(){V(this,"name","Normal"),V(this,"description","基础算牌，合理质疑，有策略性"),V(this,"memory",{})}makeDecision(t,n){const r=t.aiPlayer.hand;if(r.length===0)return{action:"pass",confidence:0,reasoning:"无牌可出",animationState:"playing"};if(Math.random()<.3)return{action:"challenge",confidence:.6,reasoning:"根据局势质疑",animationState:"challenging"};const a=r[0];return{action:"play",card:a,claimedCard:a.type,confidence:.7,reasoning:"正常出牌",animationState:"playing",isBluff:!1}}calculateChallengeProbability(){return .4}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[0];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(){return{bluffFrequency:.4,challengeThreshold:.6,riskTolerance:.6,patience:.6,adaptability:.5}}}class sp{constructor(){V(this,"name","Hard"),V(this,"description","高级策略，读心术，心理博弈大师"),V(this,"memory",{})}makeDecision(t,n){const r=t.aiPlayer.hand;if(r.length===0)return{action:"pass",confidence:0,reasoning:"无牌可出",animationState:"playing"};if(Math.random()<.5)return{action:"challenge",confidence:.8,reasoning:"精准读心",animationState:"challenging"};const a=r[Math.floor(Math.random()*r.length)],o=["citizen","king","slave"],s=o[Math.floor(Math.random()*o.length)];return{action:"play",card:a,claimedCard:s,confidence:.9,reasoning:"策略性出牌",animationState:"playing",isBluff:a.type!==s}}calculateChallengeProbability(){return .5}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[Math.floor(Math.random()*n.length)];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(){return{bluffFrequency:.6,challengeThreshold:.5,riskTolerance:.7,patience:.7,adaptability:.8}}}class up{constructor(t="normal",n="balanced"){V(this,"strategy"),V(this,"config"),V(this,"thoughtCallback"),V(this,"currentState","idle"),V(this,"decisionInProgress",!1),this.config=this.createDefaultConfig(t,n),this.strategy=this.createStrategy(t)}setThoughtCallback(t){this.thoughtCallback=t}updateConfig(t){this.config={...this.config,...t},t.difficulty&&t.difficulty!==this.config.difficulty&&(this.strategy=this.createStrategy(t.difficulty))}getConfig(){return{...this.config}}async makeDecision(t){if(this.decisionInProgress)throw new Error("AI决策正在进行中");this.decisionInProgress=!0;try{await this.playThinkingAnimation(),await this.playDecidingAnimation();const n=this.strategy.makeDecision(t,this.config);return await this.playActionAnimation(n),n}finally{this.decisionInProgress=!1,this.setAnimationState("idle")}}makeDecisionInstant(t){return this.strategy.makeDecision(t,this.config)}getCurrentThought(){return{state:this.currentState,progress:this.getProgressForState(this.currentState),message:this.getMessageForState(this.currentState),emotion:this.getEmotionForState(this.currentState)}}getStrategyName(){return this.strategy.name}getStrategyDescription(){return this.strategy.description}updateMemory(t){this.strategy.updateMemory(t)}getPersonalityTraits(){return this.strategy.getPersonalityTraits(this.config.personality)}createStrategy(t){switch(t){case"easy":return new ip;case"normal":return new rs;case"hard":return new sp;default:return new rs}}createDefaultConfig(t,n){return{difficulty:t,personality:n,reactionDelay:{easy:800,normal:1200,hard:1500}[t],enableAnimation:!0}}async playThinkingAnimation(){this.setAnimationState("thinking");const t=["分析局势中...","计算概率...","观察对手...","评估风险..."],n=4,r=this.config.reactionDelay/n;for(let a=0;a<n;a++)this.notifyThought({state:"thinking",progress:a/n*100,message:t[a%t.length],emotion:"calm"}),await this.delay(r)}async playDecidingAnimation(){this.setAnimationState("deciding"),this.notifyThought({state:"deciding",progress:75,message:"做出决策...",emotion:"confident"}),await this.delay(this.config.reactionDelay*.3)}async playActionAnimation(t){const n=t.action==="challenge"?"challenging":"playing";this.setAnimationState(n);const r={play:t.isBluff?"打出卡牌（虚张声势）":"打出卡牌",challenge:"质疑！",pass:"选择观望"};this.notifyThought({state:n,progress:100,message:r[t.action]||"执行动作",emotion:t.confidence>.7?"confident":"uncertain"}),await this.delay(300)}setAnimationState(t){this.currentState=t}notifyThought(t){this.thoughtCallback&&this.thoughtCallback(t)}getProgressForState(t){return{idle:0,thinking:25,deciding:75,playing:90,challenging:90,reacting:100}[t]||0}getMessageForState(t){return{idle:"等待中...",thinking:"思考中...",deciding:"决策中...",playing:"出牌中...",challenging:"质疑中...",reacting:"反应中..."}[t]}getEmotionForState(t){switch(t){case"thinking":return"calm";case"deciding":return"confident";case"challenging":return"confident";case"playing":return"calm";default:return"calm"}}delay(t){return new Promise(n=>setTimeout(n,t))}}class cp{constructor(){V(this,"HIT_CHANCE",1/3),V(this,"MAX_HP",3),V(this,"funnyActions",["😵 突然跳起了奇怪的舞蹈","🙈 开始模仿猴子叫",'🤪 不停地说"披萨"',"😂 无法控制地大笑30秒","🐔 学鸡打鸣","🎭 开始背诵中二台词","🍕 声称自己是披萨的化身","🦋 追逐不存在的蝴蝶"])}createPlayerStats(){return{hp:this.MAX_HP,maxHp:this.MAX_HP,geassSuccessCount:0,geassFailCount:0}}shouldActivateGeass(t){return!0}executeGeass(t,n){if(Math.random()<this.HIT_CHANCE){const r=this.getRandomFunnyAction(),a=this.applyDamage(this.createPlayerStats(),1);return{activated:!0,hit:!0,message:"Geass命中！",damage:1,funnyAction:r,newStats:a}}else return{activated:!0,hit:!1,message:"Geass未命中！",damage:0}}performGeass(t){return this.executeGeass("player",t)}getRandomFunnyAction(){return this.funnyActions[Math.floor(Math.random()*this.funnyActions.length)]}applyDamage(t,n){return{...t,hp:Math.max(0,t.hp-n)}}isDefeated(t){return t.hp<=0}recordGeassSuccess(t){return{...t,geassSuccessCount:t.geassSuccessCount+1}}recordGeassFail(t){return{...t,geassFailCount:t.geassFailCount+1}}getHitChanceDescription(){return`${(this.HIT_CHANCE*100).toFixed(1)}%`}}const as=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],dp=()=>{const[e,t]=O.useState("main-menu"),[n,r]=O.useState(null),[a,o]=O.useState("normal"),s=O.useRef(null),f=O.useRef(null),[p,g]=O.useState({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),[x,l]=O.useState(null),[i,c]=O.useState([]);O.useEffect(()=>(Ca.preload().then(()=>{console.log("音效预加载完成")}),Sn("bgm-menu"),()=>{lp()}),[]);const m=O.useCallback(R=>{c(I=>[...I.slice(-9),R])},[]),y=O.useCallback(()=>{ue("sfx-button-click"),t("character-select")},[]),v=O.useCallback(()=>{ue("sfx-button-click"),t("settings")},[]),d=O.useCallback(()=>{ue("sfx-button-click"),t("help")},[]),h=O.useCallback(R=>{ue("sfx-character-select"),r(R)},[]),b=O.useCallback(()=>{if(n){ue("sfx-button-click"),s.current=new up(a,"balanced"),f.current=new cp;const R=tp(),{playerHand:I,opponentHand:$}=rp(R);g({selectedCharacter:n,playerHand:I,opponentHand:$,tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"游戏开始！",gamePhase:"playing"}),c(["游戏开始！请选择要出的牌。"]),t("game-table"),Sn("bgm-game")}},[n,a]),_=O.useCallback(()=>{ue("sfx-button-click"),t("main-menu"),r(null)},[]),w=O.useCallback(R=>{p.currentTurn==="player"&&(ue("sfx-play-card"),g(I=>{const $=I.playerHand.find(He=>He.id===R);return $?{...I,playerHand:I.playerHand.filter(He=>He.id!==R),tableCards:[...I.tableCards,$],currentTurn:"opponent",lastAction:`你出了 ${$.rank}${fp($.suit)}`}:I}),m("你出了一张牌"),setTimeout(()=>{S()},1e3))},[p.currentTurn]),S=O.useCallback(()=>{if(s.current){if(ue("sfx-turn-start"),Math.random()>.7&&p.tableCards.length>0)T();else if(p.opponentHand.length>0){const R=p.opponentHand[Math.floor(Math.random()*p.opponentHand.length)];g(I=>({...I,opponentHand:I.opponentHand.filter($=>$.id!==R.id),tableCards:[...I.tableCards,R],currentTurn:"player",lastAction:"对手出了一张牌"})),m("对手出了一张牌"),ue("sfx-play-card")}}},[p.opponentHand,p.tableCards]),C=O.useCallback(()=>{ue("sfx-button-click"),m("你选择跳过"),g(R=>({...R,currentTurn:"opponent",lastAction:"你选择了跳过"})),setTimeout(()=>{S()},1e3)},[]),T=O.useCallback(()=>{if(ue("sfx-challenge"),m("你发起了质疑！"),f.current){const R=f.current.executeGeass("player","ai");setTimeout(()=>{if(R.hit){ue("sfx-geass-hit");const I=as[Math.floor(Math.random()*as.length)];l(I),ue(I.soundType),g($=>{const He=$.opponentHP-1;return He<=0&&setTimeout(()=>{Sn("bgm-victory"),t("result")},2e3),{...$,opponentHP:He,playerScore:$.playerScore+1,lastAction:`Geass命中！${I.emoji} ${I.description}`}}),m(`Geass命中！${R.funnyAction||""}`)}else ue("sfx-geass-miss"),g(I=>({...I,lastAction:"Geass未命中！"})),m("Geass未命中！")},1e3)}},[]),A=O.useCallback(()=>{ue("sfx-button-click"),t("character-select"),r(null),g({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),c([]),l(null),Sn("bgm-menu")},[]),z=O.useCallback(()=>{ue("sfx-button-click"),t("main-menu"),r(null),g({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),c([]),l(null),Sn("bgm-menu")},[]),le=()=>{switch(e){case"main-menu":return u.jsx(es,{onStart:y,onSettings:v,onHelp:d});case"character-select":return u.jsx(Kf,{characters:Xo,selectedId:n,onSelect:h,onConfirm:b,onBack:_});case"game-table":return u.jsx(Zf,{gameState:p,onPlayCard:w,onPass:C,onChallenge:T,gameLog:i,funnyAction:x});case"result":return u.jsx(Jf,{isWin:p.playerScore>p.opponentScore,playerScore:p.playerScore,opponentScore:p.opponentScore,onRestart:A,onMainMenu:z});case"settings":return u.jsxs("div",{className:"cg-placeholder-screen",children:[u.jsx("h2",{children:"设置"}),u.jsxs("div",{className:"cg-settings-content",children:[u.jsxs("div",{className:"cg-setting-item",children:[u.jsx("label",{children:"难度选择"}),u.jsxs("select",{value:a,onChange:R=>o(R.target.value),className:"cg-setting-select",children:[u.jsx("option",{value:"easy",children:"简单"}),u.jsx("option",{value:"normal",children:"普通"}),u.jsx("option",{value:"hard",children:"困难"})]})]}),u.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});case"help":return u.jsxs("div",{className:"cg-placeholder-screen",children:[u.jsx("h2",{children:"游戏帮助"}),u.jsxs("div",{className:"cg-help-content",children:[u.jsxs("section",{className:"cg-help-section",children:[u.jsx("h3",{children:"游戏规则"}),u.jsxs("ul",{children:[u.jsx("li",{children:"每人初始5张牌，轮流出牌"}),u.jsx("li",{children:"可以质疑对手的出牌"}),u.jsx("li",{children:"质疑成功将触发Geass判定"}),u.jsx("li",{children:"Geass有1/3概率命中，造成1点伤害"}),u.jsx("li",{children:"HP归零则游戏结束"})]})]}),u.jsxs("section",{className:"cg-help-section",children:[u.jsx("h3",{children:"角色技能"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"鲁鲁修"}),": 绝对命令 - 可强制改变骗子牌"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"C.C."}),": 不老不死 - 50%概率免疫Geass"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"朱雀"}),": 生存本能 - HP≤1时Geass抗性提升"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"卡莲"}),": 红莲突击 - 可一次出多张牌"]})]})]}),u.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});default:return u.jsx(es,{onStart:y,onSettings:v,onHelp:d})}};return u.jsxs("div",{className:"cg-app",children:[le(),u.jsx("style",{children:`
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
      `})]})};function fp(e){return{spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦"}[e]||e}const pp=ro.createRoot(document.getElementById("root"));pp.render(u.jsx(Dt.StrictMode,{children:u.jsx(dp,{})}));
//# sourceMappingURL=index-DKME_ZAx.js.map
