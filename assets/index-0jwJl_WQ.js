(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var vc=Object.defineProperty,bc=(e,t,n)=>t in e?vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t,n)=>bc(e,typeof t!="symbol"?t+"":t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},ua={},os={exports:{}},z={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var tr=Symbol.for("react.element"),_c=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Go=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=Go&&e[Go]||e["@@iterator"],typeof e=="function"?e:null)}var is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,us={};function fn(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||is}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cs(){}cs.prototype=fn.prototype;function Yl(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||is}var Kl=Yl.prototype=new cs;Kl.constructor=Yl;ss(Kl,fn.prototype);Kl.isPureReactComponent=!0;var Uo=Array.isArray,ds=Object.prototype.hasOwnProperty,Zl={current:null},fs={key:!0,ref:!0,__self:!0,__source:!0};function ps(e,t,n){var r,a={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)ds.call(t,r)&&!fs.hasOwnProperty(r)&&(a[r]=t[r]);var f=arguments.length-2;if(f===1)a.children=n;else if(1<f){for(var p=Array(f),h=0;h<f;h++)p[h]=arguments[h+2];a.children=p}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)a[r]===void 0&&(a[r]=f[r]);return{$$typeof:tr,type:e,key:l,ref:s,props:a,_owner:Zl.current}}function Lc(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $o=/\/+/g;function Aa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zc(""+e.key):t.toString(36)}function jr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case tr:case _c:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+Aa(s,0):r,Uo(a)?(n="",e!=null&&(n=e.replace($o,"$&/")+"/"),jr(a,t,n,"",function(h){return h})):a!=null&&(Jl(a)&&(a=Lc(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace($o,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",Uo(e))for(var f=0;f<e.length;f++){l=e[f];var p=r+Aa(l,f);s+=jr(l,t,n,p,a)}else if(p=Pc(e),typeof p=="function")for(e=p.call(e),f=0;!(l=e.next()).done;)l=l.value,p=r+Aa(l,f++),s+=jr(l,t,n,p,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function sr(e,t,n){if(e==null)return e;var r=[],a=0;return jr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Mc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Cr={transition:null},Ic={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Zl};function ms(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=fn;z.Fragment=kc;z.Profiler=Sc;z.PureComponent=Yl;z.StrictMode=wc;z.Suspense=Ec;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ic;z.act=ms;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),a=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Zl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(p in t)ds.call(t,p)&&!fs.hasOwnProperty(p)&&(r[p]=t[p]===void 0&&f!==void 0?f[p]:t[p])}var p=arguments.length-2;if(p===1)r.children=n;else if(1<p){f=Array(p);for(var h=0;h<p;h++)f[h]=arguments[h+2];r.children=f}return{$$typeof:tr,type:e.type,key:a,ref:l,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jc,_context:e},e.Consumer=e};z.createElement=ps;z.createFactory=function(e){var t=ps.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Nc,render:e}};z.isValidElement=Jl;z.lazy=function(e){return{$$typeof:Ac,_payload:{_status:-1,_result:e},_init:Mc}};z.memo=function(e,t){return{$$typeof:Tc,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};z.unstable_act=ms;z.useCallback=function(e,t){return me.current.useCallback(e,t)};z.useContext=function(e){return me.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return me.current.useDeferredValue(e)};z.useEffect=function(e,t){return me.current.useEffect(e,t)};z.useId=function(){return me.current.useId()};z.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return me.current.useMemo(e,t)};z.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};z.useRef=function(e){return me.current.useRef(e)};z.useState=function(e){return me.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return me.current.useTransition()};z.version="18.3.1";os.exports=z;var O=os.exports;const Dt=xc(O);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Oc=O,Fc=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Hc=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bc={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,t,n){var r,a={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dc.call(t,r)&&!Bc.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Fc,type:e,key:l,ref:s,props:a,_owner:Hc.current}}ua.Fragment=Rc;ua.jsx=gs;ua.jsxs=gs;ls.exports=ua;var u=ls.exports,rl={},hs={exports:{}},je={},ys={exports:{}},vs={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(N,A){var L=N.length;N.push(A);e:for(;0<L;){var X=L-1>>>1,ee=N[X];if(0<a(ee,A))N[X]=A,N[L]=ee,L=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],L=N.pop();if(L!==A){N[0]=L;e:for(var X=0,ee=N.length,or=ee>>>1;X<or;){var kt=2*(X+1)-1,Ta=N[kt],wt=kt+1,ir=N[wt];if(0>a(Ta,L))wt<ee&&0>a(ir,Ta)?(N[X]=ir,N[wt]=L,X=wt):(N[X]=Ta,N[kt]=L,X=kt);else if(wt<ee&&0>a(ir,L))N[X]=ir,N[wt]=L,X=wt;else break e}}return A}function a(N,A){var L=N.sortIndex-A.sortIndex;return L!==0?L:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,f=s.now();e.unstable_now=function(){return s.now()-f}}var p=[],h=[],x=1,o=null,i=3,c=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var A=n(h);A!==null;){if(A.callback===null)r(h);else if(A.startTime<=N)r(h),A.sortIndex=A.expirationTime,t(p,A);else break;A=n(h)}}function _(N){if(y=!1,v(N),!g)if(n(p)!==null)g=!0,Na(w);else{var A=n(h);A!==null&&Ea(_,A.startTime-N)}}function w(N,A){g=!1,y&&(y=!1,d(E),E=-1),c=!0;var L=i;try{for(v(A),o=n(p);o!==null&&(!(o.expirationTime>A)||N&&!oe());){var X=o.callback;if(typeof X=="function"){o.callback=null,i=o.priorityLevel;var ee=X(o.expirationTime<=A);A=e.unstable_now(),typeof ee=="function"?o.callback=ee:o===n(p)&&r(p),v(A)}else r(p);o=n(p)}if(o!==null)var or=!0;else{var kt=n(h);kt!==null&&Ea(_,kt.startTime-A),or=!1}return or}finally{o=null,i=L,c=!1}}var S=!1,C=null,E=-1,T=5,P=-1;function oe(){return!(e.unstable_now()-P<T)}function R(){if(C!==null){var N=e.unstable_now();P=N;var A=!0;try{A=C(!0,N)}finally{A?I():(S=!1,C=null)}}else S=!1}var I;if(typeof m=="function")I=function(){m(R)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,He=$.port2;$.port1.onmessage=R,I=function(){He.postMessage(null)}}else I=function(){b(R,0)};function Na(N){C=N,S||(S=!0,I())}function Ea(N,A){E=b(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||c||(g=!0,Na(w))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return i},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(N){switch(i){case 1:case 2:case 3:var A=3;break;default:A=i}var L=i;i=A;try{return N()}finally{i=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=i;i=N;try{return A()}finally{i=L}},e.unstable_scheduleCallback=function(N,A,L){var X=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,N={id:x++,callback:A,priorityLevel:N,startTime:L,expirationTime:ee,sortIndex:-1},L>X?(N.sortIndex=L,t(h,N),n(p)===null&&N===n(h)&&(y?(d(E),E=-1):y=!0,Ea(_,L-X))):(N.sortIndex=ee,t(p,N),g||c||(g=!0,Na(w))),N},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(N){var A=i;return function(){var L=i;i=A;try{return N.apply(this,arguments)}finally{i=L}}}})(vs);ys.exports=vs;var Wc=ys.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Vc=O,Se=Wc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,Rn={};function Ot(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Rn[e]=t,e=0;e<t.length;e++)bs.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,Qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qo={},Xo={};function Gc(e){return al.call(Xo,e)?!0:al.call(qo,e)?!1:Qc.test(e)?Xo[e]=!0:(qo[e]=!0,!1)}function Uc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Uc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,a,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var eo=/[\-:]([a-z])/g;function to(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eo,to);le[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eo,to);le[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eo,to);le[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function no(e,t,n,r){var a=le.hasOwnProperty(t)?le[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,a,r)&&(n=null),r||a===null?Gc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),ro=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),_s=Symbol.for("react.context"),ao=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),lo=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ks=Symbol.for("react.offscreen"),Yo=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=Yo&&e[Yo]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Pa;function jn(e){if(Pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pa=t&&t[1]||""}return`
`+Pa+e}var La=!1;function za(e,t){if(!e||La)return"";La=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),l=r.stack.split(`
`),s=a.length-1,f=l.length-1;1<=s&&0<=f&&a[s]!==l[f];)f--;for(;1<=s&&0<=f;s--,f--)if(a[s]!==l[f]){if(s!==1||f!==1)do if(s--,f--,0>f||a[s]!==l[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=s&&0<=f);break}}}finally{La=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function qc(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ht:return"Portal";case ll:return"Profiler";case ro:return"StrictMode";case ol:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _s:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case ao:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lo:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Xc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===ro?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yc(e){var t=ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Yc(e))}function Ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function js(e,t){t=t.checked,t!=null&&no(e,"checked",t,!1)}function cl(e,t){js(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Cn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Cs(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ei(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ns(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ns(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,Es=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Kc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Ts(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function As(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Ts(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Zc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,Jt=null,en=null;function ti(e){if(e=ar(e)){if(typeof yl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ma(t),yl(e.stateNode,e.type,t))}}function Ps(e){Jt?en?en.push(e):en=[e]:Jt=e}function Ls(){if(Jt){var e=Jt,t=en;if(en=Jt=null,ti(e),t)for(e=0;e<t.length;e++)ti(t[e])}}function zs(e,t){return e(t)}function Ms(){}var Ma=!1;function Is(e,t,n){if(Ma)return e(t,n);Ma=!0;try{return zs(e,t,n)}finally{Ma=!1,(Jt!==null||en!==null)&&(Ms(),Ls())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var vl=!1;if(Ke)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vl=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{vl=!1}function Jc(e,t,n,r,a,l,s,f,p){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(x){this.onError(x)}}var An=!1,Dr=null,Hr=!1,bl=null,ed={onError:function(e){An=!0,Dr=e}};function td(e,t,n,r,a,l,s,f,p){An=!1,Dr=null,Jc.apply(ed,arguments)}function nd(e,t,n,r,a,l,s,f,p){if(td.apply(this,arguments),An){if(An){var h=Dr;An=!1,Dr=null}else throw Error(k(198));Hr||(Hr=!0,bl=h)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Os(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ni(e){if(Ft(e)!==e)throw Error(k(188))}function rd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return ni(a),e;if(l===r)return ni(a),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=a,r=l;else{for(var s=!1,f=a.child;f;){if(f===n){s=!0,n=a,r=l;break}if(f===r){s=!0,r=a,n=l;break}f=f.sibling}if(!s){for(f=l.child;f;){if(f===n){s=!0,n=l,r=a;break}if(f===r){s=!0,r=l,n=a;break}f=f.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Fs(e){return e=rd(e),e!==null?Rs(e):null}function Rs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rs(e);if(t!==null)return t;e=e.sibling}return null}var Ds=Se.unstable_scheduleCallback,ri=Se.unstable_cancelCallback,ad=Se.unstable_shouldYield,ld=Se.unstable_requestPaint,Y=Se.unstable_now,od=Se.unstable_getCurrentPriorityLevel,io=Se.unstable_ImmediatePriority,Hs=Se.unstable_UserBlockingPriority,Br=Se.unstable_NormalPriority,id=Se.unstable_LowPriority,Bs=Se.unstable_IdlePriority,ca=null,Qe=null;function sd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:dd,ud=Math.log,cd=Math.LN2;function dd(e){return e>>>=0,e===0?32:31-(ud(e)/cd|0)|0}var fr=64,pr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var f=s&~a;f!==0?r=Nn(f):(l&=s,l!==0&&(r=Nn(l)))}else s=n&~a,s!==0?r=Nn(s):l!==0&&(r=Nn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),a=1<<n,r|=e[n],t&=~a;return r}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Fe(l),f=1<<s,p=a[s];p===-1?(!(f&n)||f&r)&&(a[s]=fd(f,t)):p<=t&&(e.expiredLanes|=f),l&=~f}}function xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ws(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Fe(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function so(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var F=0;function Vs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qs,uo,Gs,Us,$s,_l=!1,mr=[],ut=null,ct=null,dt=null,Bn=new Map,Wn=new Map,lt=[],gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ai(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function vn(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ar(t),t!==null&&uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function hd(e,t,n,r,a){switch(t){case"focusin":return ut=vn(ut,e,t,n,r,a),!0;case"dragenter":return ct=vn(ct,e,t,n,r,a),!0;case"mouseover":return dt=vn(dt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Bn.set(l,vn(Bn.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Wn.set(l,vn(Wn.get(l)||null,e,t,n,r,a)),!0}return!1}function qs(e){var t=Ct(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Os(n),t!==null){e.blockedOn=t,$s(e.priority,function(){Gs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=ar(n),t!==null&&uo(t),e.blockedOn=n,!1;t.shift()}return!0}function li(e,t,n){Nr(e)&&n.delete(t)}function yd(){_l=!1,ut!==null&&Nr(ut)&&(ut=null),ct!==null&&Nr(ct)&&(ct=null),dt!==null&&Nr(dt)&&(dt=null),Bn.forEach(li),Wn.forEach(li)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,yd)))}function Vn(e){function t(a){return bn(a,e)}if(0<mr.length){bn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&bn(ut,e),ct!==null&&bn(ct,e),dt!==null&&bn(dt,e),Bn.forEach(t),Wn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)qs(n),n.blockedOn===null&&lt.shift()}var tn=tt.ReactCurrentBatchConfig,Vr=!0;function vd(e,t,n,r){var a=F,l=tn.transition;tn.transition=null;try{F=1,co(e,t,n,r)}finally{F=a,tn.transition=l}}function bd(e,t,n,r){var a=F,l=tn.transition;tn.transition=null;try{F=4,co(e,t,n,r)}finally{F=a,tn.transition=l}}function co(e,t,n,r){if(Vr){var a=kl(e,t,n,r);if(a===null)Ga(e,t,r,Qr,n),ai(e,r);else if(hd(a,e,t,n,r))r.stopPropagation();else if(ai(e,r),t&4&&-1<gd.indexOf(e)){for(;a!==null;){var l=ar(a);if(l!==null&&Qs(l),l=kl(e,t,n,r),l===null&&Ga(e,t,r,Qr,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Ga(e,t,r,null,n)}}var Qr=null;function kl(e,t,n,r){if(Qr=null,e=oo(r),e=Ct(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Os(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function Xs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case io:return 1;case Hs:return 4;case Br:case id:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var it=null,fo=null,Er=null;function Ys(){if(Er)return Er;var e,t=fo,n=t.length,r,a="value"in it?it.value:it.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[l-r];r++);return Er=a.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function oi(){return!1}function Ce(e){function t(n,r,a,l,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?gr:oi,this.isPropagationStopped=oi,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=Ce(pn),rr=U({},pn,{view:0,detail:0}),xd=Ce(rr),Oa,Fa,xn,da=U({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Oa=e.screenX-xn.screenX,Fa=e.screenY-xn.screenY):Fa=Oa=0,xn=e),Oa)},movementY:function(e){return"movementY"in e?e.movementY:Fa}}),ii=Ce(da),_d=U({},da,{dataTransfer:0}),kd=Ce(_d),wd=U({},rr,{relatedTarget:0}),Ra=Ce(wd),Sd=U({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),jd=Ce(Sd),Cd=U({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=Ce(Cd),Ed=U({},pn,{data:0}),si=Ce(Ed),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pd[e])?!!t[e]:!1}function mo(){return Ld}var zd=U({},rr,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ad[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Md=Ce(zd),Id=U({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ui=Ce(Id),Od=U({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),Fd=Ce(Od),Rd=U({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Ce(Rd),Hd=U({},da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Ce(Hd),Wd=[9,13,27,32],go=Ke&&"CompositionEvent"in window,Pn=null;Ke&&"documentMode"in document&&(Pn=document.documentMode);var Vd=Ke&&"TextEvent"in window&&!Pn,Ks=Ke&&(!go||Pn&&8<Pn&&11>=Pn),ci=" ",di=!1;function Zs(e,t){switch(e){case"keyup":return Wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Qd(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(di=!0,ci);case"textInput":return e=t.data,e===ci&&di?null:e;default:return null}}function Gd(e,t){if(Wt)return e==="compositionend"||!go&&Zs(e,t)?(e=Ys(),Er=fo=it=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function eu(e,t,n,r){Ps(r),t=Gr(t,"onChange"),0<t.length&&(n=new po("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Qn=null;function $d(e){du(e,0)}function fa(e){var t=Gt(e);if(Ss(t))return e}function qd(e,t){if(e==="change")return t}var tu=!1;if(Ke){var Da;if(Ke){var Ha="oninput"in document;if(!Ha){var pi=document.createElement("div");pi.setAttribute("oninput","return;"),Ha=typeof pi.oninput=="function"}Da=Ha}else Da=!1;tu=Da&&(!document.documentMode||9<document.documentMode)}function mi(){Ln&&(Ln.detachEvent("onpropertychange",nu),Qn=Ln=null)}function nu(e){if(e.propertyName==="value"&&fa(Qn)){var t=[];eu(t,Qn,e,oo(e)),Is($d,t)}}function Xd(e,t,n){e==="focusin"?(mi(),Ln=t,Qn=n,Ln.attachEvent("onpropertychange",nu)):e==="focusout"&&mi()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(Qn)}function Kd(e,t){if(e==="click")return fa(t)}function Zd(e,t){if(e==="input"||e==="change")return fa(t)}function Jd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Jd;function Gn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!al.call(t,a)||!De(e[a],t[a]))return!1}return!0}function gi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hi(e,t){var n=gi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gi(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function au(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ef(e){var t=au(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ru(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=hi(n,l);var s=hi(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tf=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,wl=null,zn=null,Sl=!1;function yi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||Vt==null||Vt!==Rr(r)||(r=Vt,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Gn(zn,r)||(zn=r,r=Gr(wl,"onSelect"),0<r.length&&(t=new po("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Ba={},lu={};Ke&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function pa(e){if(Ba[e])return Ba[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lu)return Ba[e]=t[n];return e}var ou=pa("animationend"),iu=pa("animationiteration"),su=pa("animationstart"),uu=pa("transitionend"),cu=new Map,vi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){cu.set(e,t),Ot(t,[e])}for(var Wa=0;Wa<vi.length;Wa++){var Va=vi[Wa],nf=Va.toLowerCase(),rf=Va[0].toUpperCase()+Va.slice(1);bt(nf,"on"+rf)}bt(ou,"onAnimationEnd");bt(iu,"onAnimationIteration");bt(su,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(uu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),af=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function bi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var f=r[s],p=f.instance,h=f.currentTarget;if(f=f.listener,p!==l&&a.isPropagationStopped())break e;bi(a,f,h),l=p}else for(s=0;s<r.length;s++){if(f=r[s],p=f.instance,h=f.currentTarget,f=f.listener,p!==l&&a.isPropagationStopped())break e;bi(a,f,h),l=p}}}if(Hr)throw e=bl,Hr=!1,bl=null,e}function H(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(fu(t,e,2,!1),n.add(r))}function Qa(e,t,n){var r=0;t&&(r|=4),fu(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[yr]){e[yr]=!0,bs.forEach(function(n){n!=="selectionchange"&&(af.has(n)||Qa(n,!1,e),Qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,Qa("selectionchange",!1,t))}}function fu(e,t,n,r){switch(Xs(t)){case 1:var a=vd;break;case 4:a=bd;break;default:a=co}n=a.bind(null,t,n,e),a=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ga(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var f=r.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;s=s.return}for(;f!==null;){if(s=Ct(f),s===null)return;if(p=s.tag,p===5||p===6){r=l=s;continue e}f=f.parentNode}}r=r.return}Is(function(){var h=l,x=oo(n),o=[];e:{var i=cu.get(e);if(i!==void 0){var c=po,g=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":c=Md;break;case"focusin":g="focus",c=Ra;break;case"focusout":g="blur",c=Ra;break;case"beforeblur":case"afterblur":c=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Fd;break;case ou:case iu:case su:c=jd;break;case uu:c=Dd;break;case"scroll":c=xd;break;case"wheel":c=Bd;break;case"copy":case"cut":case"paste":c=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=ui}var y=(t&4)!==0,b=!y&&e==="scroll",d=y?i!==null?i+"Capture":null:i;y=[];for(var m=h,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,d!==null&&(_=Hn(m,d),_!=null&&y.push($n(m,_,v)))),b)break;m=m.return}0<y.length&&(i=new c(i,g,null,n,x),o.push({event:i,listeners:y}))}}if(!(t&7)){e:{if(i=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",i&&n!==hl&&(g=n.relatedTarget||n.fromElement)&&(Ct(g)||g[Ze]))break e;if((c||i)&&(i=x.window===x?x:(i=x.ownerDocument)?i.defaultView||i.parentWindow:window,c?(g=n.relatedTarget||n.toElement,c=h,g=g?Ct(g):null,g!==null&&(b=Ft(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(c=null,g=h),c!==g)){if(y=ii,_="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=ui,_="onPointerLeave",d="onPointerEnter",m="pointer"),b=c==null?i:Gt(c),v=g==null?i:Gt(g),i=new y(_,m+"leave",c,n,x),i.target=b,i.relatedTarget=v,_=null,Ct(x)===h&&(y=new y(d,m+"enter",g,n,x),y.target=v,y.relatedTarget=b,_=y),b=_,c&&g)t:{for(y=c,d=g,m=0,v=y;v;v=Rt(v))m++;for(v=0,_=d;_;_=Rt(_))v++;for(;0<m-v;)y=Rt(y),m--;for(;0<v-m;)d=Rt(d),v--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=Rt(y),d=Rt(d)}y=null}else y=null;c!==null&&xi(o,i,c,y,!1),g!==null&&b!==null&&xi(o,b,g,y,!0)}}e:{if(i=h?Gt(h):window,c=i.nodeName&&i.nodeName.toLowerCase(),c==="select"||c==="input"&&i.type==="file")var w=qd;else if(fi(i))if(tu)w=Zd;else{w=Yd;var S=Xd}else(c=i.nodeName)&&c.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(w=Kd);if(w&&(w=w(e,h))){eu(o,w,n,x);break e}S&&S(e,i,h),e==="focusout"&&(S=i._wrapperState)&&S.controlled&&i.type==="number"&&dl(i,"number",i.value)}switch(S=h?Gt(h):window,e){case"focusin":(fi(S)||S.contentEditable==="true")&&(Vt=S,wl=h,zn=null);break;case"focusout":zn=wl=Vt=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,yi(o,n,x);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":yi(o,n,x)}var C;if(go)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wt?Zs(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ks&&n.locale!=="ko"&&(Wt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wt&&(C=Ys()):(it=x,fo="value"in it?it.value:it.textContent,Wt=!0)),S=Gr(h,E),0<S.length&&(E=new si(E,e,null,n,x),o.push({event:E,listeners:S}),C?E.data=C:(C=Js(n),C!==null&&(E.data=C)))),(C=Vd?Qd(e,n):Gd(e,n))&&(h=Gr(h,"onBeforeInput"),0<h.length&&(x=new si("onBeforeInput","beforeinput",null,n,x),o.push({event:x,listeners:h}),x.data=C))}du(o,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Hn(e,n),l!=null&&r.unshift($n(e,l,a)),l=Hn(e,t),l!=null&&r.push($n(e,l,a))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,t,n,r,a){for(var l=t._reactName,s=[];n!==null&&n!==r;){var f=n,p=f.alternate,h=f.stateNode;if(p!==null&&p===r)break;f.tag===5&&h!==null&&(f=h,a?(p=Hn(n,l),p!=null&&s.unshift($n(n,p,f))):a||(p=Hn(n,l),p!=null&&s.push($n(n,p,f)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var lf=/\r\n?/g,of=/\u0000|\uFFFD/g;function _i(e){return(typeof e=="string"?e:""+e).replace(lf,`
`).replace(of,"")}function vr(e,t,n){if(t=_i(t),_i(e)!==t&&n)throw Error(k(425))}function Ur(){}var jl=null,Cl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(cf)}:El;function cf(e){setTimeout(function(){throw e})}function Ua(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Vn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+mn,qn="__reactProps$"+mn,Ze="__reactContainer$"+mn,Tl="__reactEvents$"+mn,df="__reactListeners$"+mn,ff="__reactHandles$"+mn;function Ct(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wi(e);e!==null;){if(n=e[Ve])return n;e=wi(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ma(e){return e[qn]||null}var Al=[],Ut=-1;function xt(e){return{current:e}}function B(e){0>Ut||(e.current=Al[Ut],Al[Ut]=null,Ut--)}function D(e,t){Ut++,Al[Ut]=e.current,e.current=t}var vt={},de=xt(vt),ve=xt(!1),Pt=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function be(e){return e=e.childContextTypes,e!=null}function $r(){B(ve),B(de)}function Si(e,t,n){if(de.current!==vt)throw Error(k(168));D(de,t),D(ve,n)}function pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(k(108,Xc(e)||"Unknown",a));return U({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Pt=de.current,D(de,e),D(ve,ve.current),!0}function ji(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=pu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(de),D(de,e)):B(ve),D(ve,n)}var $e=null,ga=!1,$a=!1;function mu(e){$e===null?$e=[e]:$e.push(e)}function pf(e){ga=!0,mu(e)}function _t(){if(!$a&&$e!==null){$a=!0;var e=0,t=F;try{var n=$e;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,ga=!1}catch(a){throw $e!==null&&($e=$e.slice(e+1)),Ds(io,_t),a}finally{F=t,$a=!1}}return null}var $t=[],qt=0,Xr=null,Yr=0,Ne=[],Ee=0,Lt=null,qe=1,Xe="";function St(e,t){$t[qt++]=Yr,$t[qt++]=Xr,Xr=e,Yr=t}function gu(e,t,n){Ne[Ee++]=qe,Ne[Ee++]=Xe,Ne[Ee++]=Lt,Lt=e;var r=qe;e=Xe;var a=32-Fe(r)-1;r&=~(1<<a),n+=1;var l=32-Fe(t)+a;if(30<l){var s=a-a%5;l=(r&(1<<s)-1).toString(32),r>>=s,a-=s,qe=1<<32-Fe(t)+a|n<<a|r,Xe=l+e}else qe=1<<l|n<<a|r,Xe=e}function yo(e){e.return!==null&&(St(e,1),gu(e,1,0))}function vo(e){for(;e===Xr;)Xr=$t[--qt],$t[qt]=null,Yr=$t[--qt],$t[qt]=null;for(;e===Lt;)Lt=Ne[--Ee],Ne[Ee]=null,Xe=Ne[--Ee],Ne[Ee]=null,qe=Ne[--Ee],Ne[Ee]=null}var we=null,ke=null,W=!1,Oe=null;function hu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ci(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ke=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:qe,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ke=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(W){var t=ke;if(t){var n=t;if(!Ci(e,t)){if(Pl(e))throw Error(k(418));t=ft(n.nextSibling);var r=we;t&&Ci(e,t)?hu(r,n):(e.flags=e.flags&-4097|2,W=!1,we=e)}}else{if(Pl(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,we=e}}}function Ni(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function br(e){if(e!==we)return!1;if(!W)return Ni(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=ke)){if(Pl(e))throw yu(),Error(k(418));for(;t;)hu(e,t),t=ft(t.nextSibling)}if(Ni(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=we?ft(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=ke;e;)e=ft(e.nextSibling)}function on(){ke=we=null,W=!1}function bo(e){Oe===null?Oe=[e]:Oe.push(e)}var mf=tt.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var f=a.refs;s===null?delete f[l]:f[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ei(e){var t=e._init;return t(e._payload)}function vu(e){function t(d,m){if(e){var v=d.deletions;v===null?(d.deletions=[m],d.flags|=16):v.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function a(d,m){return d=ht(d,m),d.index=0,d.sibling=null,d}function l(d,m,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<m?(d.flags|=2,m):v):(d.flags|=2,m)):(d.flags|=1048576,m)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function f(d,m,v,_){return m===null||m.tag!==6?(m=el(v,d.mode,_),m.return=d,m):(m=a(m,v),m.return=d,m)}function p(d,m,v,_){var w=v.type;return w===Bt?x(d,m,v.props.children,_,v.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&Ei(w)===m.type)?(_=a(m,v.props),_.ref=_n(d,m,v),_.return=d,_):(_=Or(v.type,v.key,v.props,null,d.mode,_),_.ref=_n(d,m,v),_.return=d,_)}function h(d,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=tl(v,d.mode,_),m.return=d,m):(m=a(m,v.children||[]),m.return=d,m)}function x(d,m,v,_,w){return m===null||m.tag!==7?(m=At(v,d.mode,_,w),m.return=d,m):(m=a(m,v),m.return=d,m)}function o(d,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=el(""+m,d.mode,v),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ur:return v=Or(m.type,m.key,m.props,null,d.mode,v),v.ref=_n(d,null,m),v.return=d,v;case Ht:return m=tl(m,d.mode,v),m.return=d,m;case rt:var _=m._init;return o(d,_(m._payload),v)}if(Cn(m)||hn(m))return m=At(m,d.mode,v,null),m.return=d,m;xr(d,m)}return null}function i(d,m,v,_){var w=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:f(d,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ur:return v.key===w?p(d,m,v,_):null;case Ht:return v.key===w?h(d,m,v,_):null;case rt:return w=v._init,i(d,m,w(v._payload),_)}if(Cn(v)||hn(v))return w!==null?null:x(d,m,v,_,null);xr(d,v)}return null}function c(d,m,v,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(v)||null,f(m,d,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ur:return d=d.get(_.key===null?v:_.key)||null,p(m,d,_,w);case Ht:return d=d.get(_.key===null?v:_.key)||null,h(m,d,_,w);case rt:var S=_._init;return c(d,m,v,S(_._payload),w)}if(Cn(_)||hn(_))return d=d.get(v)||null,x(m,d,_,w,null);xr(m,_)}return null}function g(d,m,v,_){for(var w=null,S=null,C=m,E=m=0,T=null;C!==null&&E<v.length;E++){C.index>E?(T=C,C=null):T=C.sibling;var P=i(d,C,v[E],_);if(P===null){C===null&&(C=T);break}e&&C&&P.alternate===null&&t(d,C),m=l(P,m,E),S===null?w=P:S.sibling=P,S=P,C=T}if(E===v.length)return n(d,C),W&&St(d,E),w;if(C===null){for(;E<v.length;E++)C=o(d,v[E],_),C!==null&&(m=l(C,m,E),S===null?w=C:S.sibling=C,S=C);return W&&St(d,E),w}for(C=r(d,C);E<v.length;E++)T=c(C,d,E,v[E],_),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?E:T.key),m=l(T,m,E),S===null?w=T:S.sibling=T,S=T);return e&&C.forEach(function(oe){return t(d,oe)}),W&&St(d,E),w}function y(d,m,v,_){var w=hn(v);if(typeof w!="function")throw Error(k(150));if(v=w.call(v),v==null)throw Error(k(151));for(var S=w=null,C=m,E=m=0,T=null,P=v.next();C!==null&&!P.done;E++,P=v.next()){C.index>E?(T=C,C=null):T=C.sibling;var oe=i(d,C,P.value,_);if(oe===null){C===null&&(C=T);break}e&&C&&oe.alternate===null&&t(d,C),m=l(oe,m,E),S===null?w=oe:S.sibling=oe,S=oe,C=T}if(P.done)return n(d,C),W&&St(d,E),w;if(C===null){for(;!P.done;E++,P=v.next())P=o(d,P.value,_),P!==null&&(m=l(P,m,E),S===null?w=P:S.sibling=P,S=P);return W&&St(d,E),w}for(C=r(d,C);!P.done;E++,P=v.next())P=c(C,d,E,P.value,_),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),m=l(P,m,E),S===null?w=P:S.sibling=P,S=P);return e&&C.forEach(function(R){return t(d,R)}),W&&St(d,E),w}function b(d,m,v,_){if(typeof v=="object"&&v!==null&&v.type===Bt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ur:e:{for(var w=v.key,S=m;S!==null;){if(S.key===w){if(w=v.type,w===Bt){if(S.tag===7){n(d,S.sibling),m=a(S,v.props.children),m.return=d,d=m;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&Ei(w)===S.type){n(d,S.sibling),m=a(S,v.props),m.ref=_n(d,S,v),m.return=d,d=m;break e}n(d,S);break}else t(d,S);S=S.sibling}v.type===Bt?(m=At(v.props.children,d.mode,_,v.key),m.return=d,d=m):(_=Or(v.type,v.key,v.props,null,d.mode,_),_.ref=_n(d,m,v),_.return=d,d=_)}return s(d);case Ht:e:{for(S=v.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(d,m.sibling),m=a(m,v.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else t(d,m);m=m.sibling}m=tl(v,d.mode,_),m.return=d,d=m}return s(d);case rt:return S=v._init,b(d,m,S(v._payload),_)}if(Cn(v))return g(d,m,v,_);if(hn(v))return y(d,m,v,_);xr(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(d,m.sibling),m=a(m,v),m.return=d,d=m):(n(d,m),m=el(v,d.mode,_),m.return=d,d=m),s(d)):n(d,m)}return b}var sn=vu(!0),bu=vu(!1),Kr=xt(null),Zr=null,Xt=null,xo=null;function _o(){xo=Xt=Zr=null}function ko(e){var t=Kr.current;B(Kr),e._currentValue=t}function zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Zr=e,xo=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Zr===null)throw Error(k(308));Xt=e,Zr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Nt=null;function wo(e){Nt===null?Nt=[e]:Nt.push(e)}function xu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,wo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Je(e,n)}return a=r.interleaved,a===null?(t.next=t,wo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Je(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}function Ti(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var a=e.updateQueue;at=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var p=f,h=p.next;p.next=null,s===null?l=h:s.next=h,s=p;var x=e.alternate;x!==null&&(x=x.updateQueue,f=x.lastBaseUpdate,f!==s&&(f===null?x.firstBaseUpdate=h:f.next=h,x.lastBaseUpdate=p))}if(l!==null){var o=a.baseState;s=0,x=h=p=null,f=l;do{var i=f.lane,c=f.eventTime;if((r&i)===i){x!==null&&(x=x.next={eventTime:c,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var g=e,y=f;switch(i=t,c=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){o=g.call(c,o,i);break e}o=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,i=typeof g=="function"?g.call(c,o,i):g,i==null)break e;o=U({},o,i);break e;case 2:at=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,i=a.effects,i===null?a.effects=[f]:i.push(f))}else c={eventTime:c,lane:i,tag:f.tag,payload:f.payload,callback:f.callback,next:null},x===null?(h=x=c,p=o):x=x.next=c,s|=i;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;i=f,f=i.next,i.next=null,a.lastBaseUpdate=i,a.shared.pending=null}}while(!0);if(x===null&&(p=o),a.baseState=p,a.firstBaseUpdate=h,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=o}}function Ai(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(k(191,a));a.call(r)}}}var lr={},Ge=xt(lr),Xn=xt(lr),Yn=xt(lr);function Et(e){if(e===lr)throw Error(k(174));return e}function jo(e,t){switch(D(Yn,t),D(Xn,e),D(Ge,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}B(Ge),D(Ge,t)}function un(){B(Ge),B(Xn),B(Yn)}function ku(e){Et(Yn.current);var t=Et(Ge.current),n=pl(t,e.type);t!==n&&(D(Xn,e),D(Ge,n))}function Co(e){Xn.current===e&&(B(Ge),B(Xn))}var V=xt(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=[];function No(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var Pr=tt.ReactCurrentDispatcher,Xa=tt.ReactCurrentBatchConfig,zt=0,G=null,Z=null,te=null,ta=!1,Mn=!1,Kn=0,gf=0;function ie(){throw Error(k(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function To(e,t,n,r,a,l){if(zt=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?bf:xf,e=n(r,a),Mn){l=0;do{if(Mn=!1,Kn=0,25<=l)throw Error(k(301));l+=1,te=Z=null,t.updateQueue=null,Pr.current=_f,e=n(r,a)}while(Mn)}if(Pr.current=na,t=Z!==null&&Z.next!==null,zt=0,te=Z=G=null,ta=!1,t)throw Error(k(300));return e}function Ao(){var e=Kn!==0;return Kn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Le(){if(Z===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?G.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Zn(e,t){return typeof t=="function"?t(e):t}function Ya(e){var t=Le(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Z,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var f=s=null,p=null,h=l;do{var x=h.lane;if((zt&x)===x)p!==null&&(p=p.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var o={lane:x,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};p===null?(f=p=o,s=r):p=p.next=o,G.lanes|=x,Mt|=x}h=h.next}while(h!==null&&h!==l);p===null?s=r:p.next=f,De(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,G.lanes|=l,Mt|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ka(e){var t=Le(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);De(l,t.memoizedState)||(ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function wu(){}function Su(e,t){var n=G,r=Le(),a=t(),l=!De(r.memoizedState,a);if(l&&(r.memoizedState=a,ye=!0),r=r.queue,Po(Nu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Jn(9,Cu.bind(null,n,r,a,t),void 0,null),ne===null)throw Error(k(349));zt&30||ju(n,t,a)}return a}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,r){t.value=n,t.getSnapshot=r,Eu(t)&&Tu(e)}function Nu(e,t,n){return n(function(){Eu(t)&&Tu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Tu(e){var t=Je(e,1);t!==null&&Re(t,e,1,-1)}function Pi(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=vf.bind(null,G,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Au(){return Le().memoizedState}function Lr(e,t,n,r){var a=We();G.flags|=e,a.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function ha(e,t,n,r){var a=Le();r=r===void 0?null:r;var l=void 0;if(Z!==null){var s=Z.memoizedState;if(l=s.destroy,r!==null&&Eo(r,s.deps)){a.memoizedState=Jn(t,n,l,r);return}}G.flags|=e,a.memoizedState=Jn(1|t,n,l,r)}function Li(e,t){return Lr(8390656,8,e,t)}function Po(e,t){return ha(2048,8,e,t)}function Pu(e,t){return ha(4,2,e,t)}function Lu(e,t){return ha(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,zu.bind(null,t,e),n)}function Lo(){}function Iu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ou(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fu(e,t,n){return zt&21?(De(n,t)||(n=Ws(),G.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function hf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Xa.transition;Xa.transition={};try{e(!1),t()}finally{F=n,Xa.transition=r}}function Ru(){return Le().memoizedState}function yf(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Du(e))Hu(t,n);else if(n=xu(e,t,n,r),n!==null){var a=pe();Re(n,e,r,a),Bu(n,t,r)}}function vf(e,t,n){var r=gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Hu(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,f=l(s,n);if(a.hasEagerState=!0,a.eagerState=f,De(f,s)){var p=t.interleaved;p===null?(a.next=a,wo(t)):(a.next=p.next,p.next=a),t.interleaved=a;return}}catch{}finally{}n=xu(e,t,a,r),n!==null&&(a=pe(),Re(n,e,r,a),Bu(n,t,r))}}function Du(e){var t=e.alternate;return e===G||t!==null&&t===G}function Hu(e,t){Mn=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}var na={readContext:Pe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},bf={readContext:Pe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Li,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Pi,useDebugValue:Lo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Pi(!1),t=e[0];return e=hf.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,a=We();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ne===null)throw Error(k(349));zt&30||ju(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Li(Nu.bind(null,r,l,e),[e]),r.flags|=2048,Jn(9,Cu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=We(),t=ne.identifierPrefix;if(W){var n=Xe,r=qe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xf={readContext:Pe,useCallback:Iu,useContext:Pe,useEffect:Po,useImperativeHandle:Mu,useInsertionEffect:Pu,useLayoutEffect:Lu,useMemo:Ou,useReducer:Ya,useRef:Au,useState:function(){return Ya(Zn)},useDebugValue:Lo,useDeferredValue:function(e){var t=Le();return Fu(t,Z.memoizedState,e)},useTransition:function(){var e=Ya(Zn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:Su,useId:Ru,unstable_isNewReconciler:!1},_f={readContext:Pe,useCallback:Iu,useContext:Pe,useEffect:Po,useImperativeHandle:Mu,useInsertionEffect:Pu,useLayoutEffect:Lu,useMemo:Ou,useReducer:Ka,useRef:Au,useState:function(){return Ka(Zn)},useDebugValue:Lo,useDeferredValue:function(e){var t=Le();return Z===null?t.memoizedState=e:Fu(t,Z.memoizedState,e)},useTransition:function(){var e=Ka(Zn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:Su,useId:Ru,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),a=gt(e),l=Ye(r,a);l.payload=t,n!=null&&(l.callback=n),t=pt(e,l,a),t!==null&&(Re(t,e,a,r),Ar(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),a=gt(e),l=Ye(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pt(e,l,a),t!==null&&(Re(t,e,a,r),Ar(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=gt(e),a=Ye(n,r);a.tag=2,t!=null&&(a.callback=t),t=pt(e,a,r),t!==null&&(Re(t,e,r,n),Ar(t,e,r))}};function zi(e,t,n,r,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(a,l):!0}function Wu(e,t,n){var r=!1,a=vt,l=t.contextType;return typeof l=="object"&&l!==null?l=Pe(l):(a=be(t)?Pt:de.current,r=t.contextTypes,l=(r=r!=null)?ln(e,a):vt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Mi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},So(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Pe(l):(l=be(t)?Pt:de.current,a.context=ln(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ml(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ya.enqueueReplaceState(a,a.state,null),Jr(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=qc(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Za(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kf=typeof WeakMap=="function"?WeakMap:Map;function Vu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){aa||(aa=!0,Gl=r),Ol(e,t)},n}function Qu(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ol(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ii(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kf;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Of.bind(null,e,t,n),t.then(e,e))}function Oi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fi(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var wf=tt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?bu(t,null,n,r):sn(t,e.child,n,r)}function Ri(e,t,n,r,a){n=n.render;var l=t.ref;return nn(t,a),r=To(e,t,n,r,l,a),n=Ao(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,et(e,t,a)):(W&&n&&yo(t),t.flags|=1,fe(e,t,r,a),t.child)}function Di(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Ho(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Gu(e,t,l,r,a)):(e=Or(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(s,r)&&e.ref===t.ref)return et(e,t,a)}return t.flags|=1,e=ht(l,r),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(Gn(l,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,et(e,t,a)}return Fl(e,t,n,r,a)}function Uu(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Kt,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Kt,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(Kt,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(Kt,_e),_e|=r;return fe(e,t,a,n),t.child}function $u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,a){var l=be(n)?Pt:de.current;return l=ln(t,l),nn(t,a),n=To(e,t,n,r,l,a),r=Ao(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,et(e,t,a)):(W&&r&&yo(t),t.flags|=1,fe(e,t,n,a),t.child)}function Hi(e,t,n,r,a){if(be(n)){var l=!0;qr(t)}else l=!1;if(nn(t,a),t.stateNode===null)zr(e,t),Wu(t,n,r),Il(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,f=t.memoizedProps;s.props=f;var p=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=Pe(h):(h=be(n)?Pt:de.current,h=ln(t,h));var x=n.getDerivedStateFromProps,o=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";o||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==r||p!==h)&&Mi(t,s,r,h),at=!1;var i=t.memoizedState;s.state=i,Jr(t,r,s,a),p=t.memoizedState,f!==r||i!==p||ve.current||at?(typeof x=="function"&&(Ml(t,n,x,r),p=t.memoizedState),(f=at||zi(t,n,f,r,i,p,h))?(o||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=h,r=f):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,_u(e,t),f=t.memoizedProps,h=t.type===t.elementType?f:Me(t.type,f),s.props=h,o=t.pendingProps,i=s.context,p=n.contextType,typeof p=="object"&&p!==null?p=Pe(p):(p=be(n)?Pt:de.current,p=ln(t,p));var c=n.getDerivedStateFromProps;(x=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==o||i!==p)&&Mi(t,s,r,p),at=!1,i=t.memoizedState,s.state=i,Jr(t,r,s,a);var g=t.memoizedState;f!==o||i!==g||ve.current||at?(typeof c=="function"&&(Ml(t,n,c,r),g=t.memoizedState),(h=at||zi(t,n,h,r,i,g,p)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=p,r=h):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&i===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,l,a)}function Rl(e,t,n,r,a,l){$u(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&ji(t,n,!1),et(e,t,l);r=t.stateNode,wf.current=t;var f=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=sn(t,e.child,null,l),t.child=sn(t,null,f,l)):fe(e,t,f,l),t.memoizedState=r.state,a&&ji(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?Si(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Si(e,t.context,!1),jo(e,t.containerInfo)}function Bi(e,t,n,r,a){return on(),bo(a),t.flags|=256,fe(e,t,n,r),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,n){var r=t.pendingProps,a=V.current,l=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),D(V,a&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=xa(s,r,0,null),e=At(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hl(n),t.memoizedState=Dl,e):zo(t,s));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return Sf(e,t,s,r,f,a,n);if(l){l=r.fallback,s=t.mode,a=e.child,f=a.sibling;var p={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=ht(a,p),r.subtreeFlags=a.subtreeFlags&14680064),f!==null?l=ht(f,l):(l=At(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Hl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Dl,r}return l=e.child,e=l.sibling,r=ht(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zo(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&bo(r),sn(t,e.child,null,n),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sf(e,t,n,r,a,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Za(Error(k(422))),_r(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=xa({mode:"visible",children:r.children},a,0,null),l=At(l,a,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&sn(t,e.child,null,s),t.child.memoizedState=Hl(s),t.memoizedState=Dl,l);if(!(t.mode&1))return _r(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var f=r.dgst;return r=f,l=Error(k(419)),r=Za(l,r,void 0),_r(e,t,s,r)}if(f=(s&e.childLanes)!==0,ye||f){if(r=ne,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Je(e,a),Re(r,e,a,-1))}return Do(),r=Za(Error(k(421))),_r(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ke=ft(a.nextSibling),we=t,W=!0,Oe=null,e!==null&&(Ne[Ee++]=qe,Ne[Ee++]=Xe,Ne[Ee++]=Lt,qe=e.id,Xe=e.overflow,Lt=t),t=zo(t,r.children),t.flags|=4096,t)}function Wi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zl(e.return,t,n)}function Ja(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Yu(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wi(e,n,t);else if(e.tag===19)Wi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(V,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ja(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ea(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ja(t,!0,n,null,l);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jf(e,t,n){switch(t.tag){case 3:qu(t),on();break;case 5:ku(t);break;case 1:be(t.type)&&qr(t);break;case 4:jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;D(Kr,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Xu(e,t,n):(D(V,V.current&1),e=et(e,t,n),e!==null?e.sibling:null);D(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),D(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return et(e,t,n)}var Ku,Bl,Zu,Ju;Ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Zu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Et(Ge.current);var l=null;switch(n){case"input":a=ul(e,a),r=ul(e,r),l=[];break;case"select":a=U({},a,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":a=fl(e,a),r=fl(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ml(n,r);var s;n=null;for(h in a)if(!r.hasOwnProperty(h)&&a.hasOwnProperty(h)&&a[h]!=null)if(h==="style"){var f=a[h];for(s in f)f.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Rn.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in r){var p=r[h];if(f=a!=null?a[h]:void 0,r.hasOwnProperty(h)&&p!==f&&(p!=null||f!=null))if(h==="style")if(f){for(s in f)!f.hasOwnProperty(s)||p&&p.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in p)p.hasOwnProperty(s)&&f[s]!==p[s]&&(n||(n={}),n[s]=p[s])}else n||(l||(l=[]),l.push(h,n)),n=p;else h==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,f=f?f.__html:void 0,p!=null&&f!==p&&(l=l||[]).push(h,p)):h==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(h,""+p):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(h)?(p!=null&&h==="onScroll"&&H("scroll",e),l||f===p||(l=[])):(l=l||[]).push(h,p))}n&&(l=l||[]).push("style",n);var h=l;(t.updateQueue=h)&&(t.flags|=4)}};Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cf(e,t,n){var r=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return be(t.type)&&$r(),se(t),null;case 3:return r=t.stateNode,un(),B(ve),B(de),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(ql(Oe),Oe=null))),Bl(e,t),se(t),null;case 5:Co(t);var a=Et(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=Et(Ge.current),br(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ve]=t,r[qn]=l,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(a=0;a<En.length;a++)H(En[a],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ko(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":Jo(r,l),H("invalid",r)}ml(n,l),a=null;for(var s in l)if(l.hasOwnProperty(s)){var f=l[s];s==="children"?typeof f=="string"?r.textContent!==f&&(l.suppressHydrationWarning!==!0&&vr(r.textContent,f,e),a=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(l.suppressHydrationWarning!==!0&&vr(r.textContent,f,e),a=["children",""+f]):Rn.hasOwnProperty(s)&&f!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":cr(r),Zo(r,l,!0);break;case"textarea":cr(r),ei(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ur)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ns(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[qn]=r,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(s=gl(n,r),n){case"dialog":H("cancel",e),H("close",e),a=r;break;case"iframe":case"object":case"embed":H("load",e),a=r;break;case"video":case"audio":for(a=0;a<En.length;a++)H(En[a],e);a=r;break;case"source":H("error",e),a=r;break;case"img":case"image":case"link":H("error",e),H("load",e),a=r;break;case"details":H("toggle",e),a=r;break;case"input":Ko(e,r),a=ul(e,r),H("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=U({},r,{value:void 0}),H("invalid",e);break;case"textarea":Jo(e,r),a=fl(e,r),H("invalid",e);break;default:a=r}ml(n,a),f=a;for(l in f)if(f.hasOwnProperty(l)){var p=f[l];l==="style"?As(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Es(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Dn(e,p):typeof p=="number"&&Dn(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Rn.hasOwnProperty(l)?p!=null&&l==="onScroll"&&H("scroll",e):p!=null&&no(e,l,p,s))}switch(n){case"input":cr(e),Zo(e,r,!1);break;case"textarea":cr(e),ei(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Et(Yn.current),Et(Ge.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(l=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&t.mode&1&&!(t.flags&128))yu(),on(),t.flags|=98560,l=!1;else if(l=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Ve]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else Oe!==null&&(ql(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Do())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return un(),Bl(e,t),e===null&&Un(t.stateNode.containerInfo),se(t),null;case 10:return ko(t.type._context),se(t),null;case 17:return be(t.type)&&$r(),se(t),null;case 19:if(B(V),l=t.memoizedState,l===null)return se(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)kn(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ea(e),s!==null){for(t.flags|=128,kn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>dn&&(t.flags|=128,r=!0,kn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ea(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!W)return se(t),null}else 2*Y()-l.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,kn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=V.current,D(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ro(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Nf(e,t){switch(vo(t),t.tag){case 1:return be(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),B(ve),B(de),No(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return un(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Ro(),null;case 24:return null;default:return null}}var kr=!1,ce=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,j=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ec(e,t,n){try{n()}catch(r){q(e,t,r)}}var Vi=!1;function Tf(e,t){if(jl=Vr,e=au(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,f=-1,p=-1,h=0,x=0,o=e,i=null;t:for(;;){for(var c;o!==n||a!==0&&o.nodeType!==3||(f=s+a),o!==l||r!==0&&o.nodeType!==3||(p=s+r),o.nodeType===3&&(s+=o.nodeValue.length),(c=o.firstChild)!==null;)i=o,o=c;for(;;){if(o===e)break t;if(i===n&&++h===a&&(f=s),i===l&&++x===r&&(p=s),(c=o.nextSibling)!==null)break;o=i,i=o.parentNode}o=c}n=f===-1||p===-1?null:{start:f,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},Vr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Me(t.type,y),b);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){q(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Vi,Vi=!1,g}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&ec(t,n,l)}a=a.next}while(a!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[qn],delete t[Tl],delete t[df],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function Qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}var re=null,Ie=!1;function nt(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(ca,n)}catch{}switch(n.tag){case 5:ce||Yt(n,t);case 6:var r=re,a=Ie;re=null,nt(e,t,n),re=r,Ie=a,re!==null&&(Ie?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ie?(e=re,n=n.stateNode,e.nodeType===8?Ua(e.parentNode,n):e.nodeType===1&&Ua(e,n),Vn(e)):Ua(re,n.stateNode));break;case 4:r=re,a=Ie,re=n.stateNode.containerInfo,Ie=!0,nt(e,t,n),re=r,Ie=a;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&ec(n,t,s),a=a.next}while(a!==r)}nt(e,t,n);break;case 1:if(!ce&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){q(n,t,f)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,nt(e,t,n),ce=r):nt(e,t,n);break;default:nt(e,t,n)}}function Gi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ef),t.forEach(function(r){var a=Rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,s=t,f=s;e:for(;f!==null;){switch(f.tag){case 5:re=f.stateNode,Ie=!1;break e;case 3:re=f.stateNode.containerInfo,Ie=!0;break e;case 4:re=f.stateNode.containerInfo,Ie=!0;break e}f=f.return}if(re===null)throw Error(k(160));rc(l,s,a),re=null,Ie=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(h){q(a,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ac(t,e),t=t.sibling}function ac(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Be(e),r&4){try{In(3,e,e.return),va(3,e)}catch(y){q(e,e.return,y)}try{In(5,e,e.return)}catch(y){q(e,e.return,y)}}break;case 1:ze(t,e),Be(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(ze(t,e),Be(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var a=e.stateNode;try{Dn(a,"")}catch(y){q(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,f=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{f==="input"&&l.type==="radio"&&l.name!=null&&js(a,l),gl(f,s);var h=gl(f,l);for(s=0;s<p.length;s+=2){var x=p[s],o=p[s+1];x==="style"?As(a,o):x==="dangerouslySetInnerHTML"?Es(a,o):x==="children"?Dn(a,o):no(a,x,o,h)}switch(f){case"input":cl(a,l);break;case"textarea":Cs(a,l);break;case"select":var i=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var c=l.value;c!=null?Zt(a,!!l.multiple,c,!1):i!==!!l.multiple&&(l.defaultValue!=null?Zt(a,!!l.multiple,l.defaultValue,!0):Zt(a,!!l.multiple,l.multiple?[]:"",!1))}a[qn]=l}catch(y){q(e,e.return,y)}}break;case 6:if(ze(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(y){q(e,e.return,y)}}break;case 3:if(ze(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(y){q(e,e.return,y)}break;case 4:ze(t,e),Be(e);break;case 13:ze(t,e),Be(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Oo=Y())),r&4&&Gi(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(h=ce)||x,ze(t,e),ce=h):ze(t,e),Be(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!x&&e.mode&1)for(j=e,x=e.child;x!==null;){for(o=j=x;j!==null;){switch(i=j,c=i.child,i.tag){case 0:case 11:case 14:case 15:In(4,i,i.return);break;case 1:Yt(i,i.return);var g=i.stateNode;if(typeof g.componentWillUnmount=="function"){r=i,n=i.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){q(r,n,y)}}break;case 5:Yt(i,i.return);break;case 22:if(i.memoizedState!==null){$i(o);continue}}c!==null?(c.return=i,j=c):$i(o)}x=x.sibling}e:for(x=null,o=e;;){if(o.tag===5){if(x===null){x=o;try{a=o.stateNode,h?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(f=o.stateNode,p=o.memoizedProps.style,s=p!=null&&p.hasOwnProperty("display")?p.display:null,f.style.display=Ts("display",s))}catch(y){q(e,e.return,y)}}}else if(o.tag===6){if(x===null)try{o.stateNode.nodeValue=h?"":o.memoizedProps}catch(y){q(e,e.return,y)}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===e)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break e;for(;o.sibling===null;){if(o.return===null||o.return===e)break e;x===o&&(x=null),o=o.return}x===o&&(x=null),o.sibling.return=o.return,o=o.sibling}}break;case 19:ze(t,e),Be(e),r&4&&Gi(e);break;case 21:break;default:ze(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Dn(a,""),r.flags&=-33);var l=Qi(e);Ql(e,l,a);break;case 3:case 4:var s=r.stateNode.containerInfo,f=Qi(e);Vl(e,f,s);break;default:throw Error(k(161))}}catch(p){q(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Af(e,t,n){j=e,lc(e)}function lc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var a=j,l=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||kr;if(!s){var f=a.alternate,p=f!==null&&f.memoizedState!==null||ce;f=kr;var h=ce;if(kr=s,(ce=p)&&!h)for(j=a;j!==null;)s=j,p=s.child,s.tag===22&&s.memoizedState!==null?qi(a):p!==null?(p.return=s,j=p):qi(a);for(;l!==null;)j=l,lc(l),l=l.sibling;j=a,kr=f,ce=h}Ui(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,j=l):Ui(e)}}function Ui(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ai(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ai(t,s,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var x=h.memoizedState;if(x!==null){var o=x.dehydrated;o!==null&&Vn(o)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ce||t.flags&512&&Wl(t)}catch(i){q(t,t.return,i)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function $i(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function qi(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(p){q(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(p){q(t,a,p)}}var l=t.return;try{Wl(t)}catch(p){q(t,l,p)}break;case 5:var s=t.return;try{Wl(t)}catch(p){q(t,s,p)}}}catch(p){q(t,t.return,p)}if(t===e){j=null;break}var f=t.sibling;if(f!==null){f.return=t.return,j=f;break}j=t.return}}var Pf=Math.ceil,ra=tt.ReactCurrentDispatcher,Mo=tt.ReactCurrentOwner,Ae=tt.ReactCurrentBatchConfig,M=0,ne=null,K=null,ae=0,_e=0,Kt=xt(0),J=0,er=null,Mt=0,ba=0,Io=0,On=null,he=null,Oo=0,dn=1/0,Ue=null,aa=!1,Gl=null,mt=null,wr=!1,st=null,la=0,Fn=0,Ul=null,Mr=-1,Ir=0;function pe(){return M&6?Y():Mr!==-1?Mr:Mr=Y()}function gt(e){return e.mode&1?M&2&&ae!==0?ae&-ae:mf.transition!==null?(Ir===0&&(Ir=Ws()),Ir):(e=F,e!==0||(e=window.event,e=e===void 0?16:Xs(e.type)),e):1}function Re(e,t,n,r){if(50<Fn)throw Fn=0,Ul=null,Error(k(185));nr(e,n,r),(!(M&2)||e!==ne)&&(e===ne&&(!(M&2)&&(ba|=n),J===4&&ot(e,ae)),xe(e,r),n===1&&M===0&&!(t.mode&1)&&(dn=Y()+500,ga&&_t()))}function xe(e,t){var n=e.callbackNode;pd(e,t);var r=Wr(e,e===ne?ae:0);if(r===0)n!==null&&ri(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ri(n),t===1)e.tag===0?pf(Xi.bind(null,e)):mu(Xi.bind(null,e)),uf(function(){!(M&6)&&_t()}),n=null;else{switch(Vs(r)){case 1:n=io;break;case 4:n=Hs;break;case 16:n=Br;break;case 536870912:n=Bs;break;default:n=Br}n=pc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Mr=-1,Ir=0,M&6)throw Error(k(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Wr(e,e===ne?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oa(e,r);else{t=r;var a=M;M|=2;var l=sc();(ne!==e||ae!==t)&&(Ue=null,dn=Y()+500,Tt(e,t));do try{Mf();break}catch(f){ic(e,f)}while(!0);_o(),ra.current=l,M=a,K!==null?t=0:(ne=null,ae=0,t=J)}if(t!==0){if(t===2&&(a=xl(e),a!==0&&(r=a,t=$l(e,a))),t===1)throw n=er,Tt(e,0),ot(e,r),xe(e,Y()),n;if(t===6)ot(e,r);else{if(a=e.current.alternate,!(r&30)&&!Lf(a)&&(t=oa(e,r),t===2&&(l=xl(e),l!==0&&(r=l,t=$l(e,l))),t===1))throw n=er,Tt(e,0),ot(e,r),xe(e,Y()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:jt(e,he,Ue);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Oo+500-Y(),10<t)){if(Wr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=El(jt.bind(null,e,he,Ue),t);break}jt(e,he,Ue);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-Fe(r);l=1<<s,s=t[s],s>a&&(a=s),r&=~l}if(r=a,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pf(r/1960))-r,10<r){e.timeoutHandle=El(jt.bind(null,e,he,Ue),r);break}jt(e,he,Ue);break;case 5:jt(e,he,Ue);break;default:throw Error(k(329))}}}return xe(e,Y()),e.callbackNode===n?oc.bind(null,e):null}function $l(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=oa(e,t),e!==2&&(t=he,he=n,t!==null&&ql(t)),e}function ql(e){he===null?he=e:he.push.apply(he,e)}function Lf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!De(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Io,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Xi(e){if(M&6)throw Error(k(327));rn();var t=Wr(e,0);if(!(t&1))return xe(e,Y()),null;var n=oa(e,t);if(e.tag!==0&&n===2){var r=xl(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=er,Tt(e,0),ot(e,t),xe(e,Y()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,he,Ue),xe(e,Y()),null}function Fo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(dn=Y()+500,ga&&_t())}}function It(e){st!==null&&st.tag===0&&!(M&6)&&rn();var t=M;M|=1;var n=Ae.transition,r=F;try{if(Ae.transition=null,F=1,e)return e()}finally{F=r,Ae.transition=n,M=t,!(M&6)&&_t()}}function Ro(){_e=Kt.current,B(Kt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:un(),B(ve),B(de),No();break;case 5:Co(r);break;case 4:un();break;case 13:B(V);break;case 19:B(V);break;case 10:ko(r.type._context);break;case 22:case 23:Ro()}n=n.return}if(ne=e,K=e=ht(e.current,null),ae=_e=t,J=0,er=null,Io=ba=Mt=0,he=On=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=a,r.next=s}n.pending=r}Nt=null}return e}function ic(e,t){do{var n=K;try{if(_o(),Pr.current=na,ta){for(var r=G.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ta=!1}if(zt=0,te=Z=G=null,Mn=!1,Kn=0,Mo.current=null,n===null||n.return===null){J=1,er=t,K=null;break}e:{var l=e,s=n.return,f=n,p=t;if(t=ae,f.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var h=p,x=f,o=x.tag;if(!(x.mode&1)&&(o===0||o===11||o===15)){var i=x.alternate;i?(x.updateQueue=i.updateQueue,x.memoizedState=i.memoizedState,x.lanes=i.lanes):(x.updateQueue=null,x.memoizedState=null)}var c=Oi(s);if(c!==null){c.flags&=-257,Fi(c,s,f,l,t),c.mode&1&&Ii(l,h,t),t=c,p=h;var g=t.updateQueue;if(g===null){var y=new Set;y.add(p),t.updateQueue=y}else g.add(p);break e}else{if(!(t&1)){Ii(l,h,t),Do();break e}p=Error(k(426))}}else if(W&&f.mode&1){var b=Oi(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Fi(b,s,f,l,t),bo(cn(p,f));break e}}l=p=cn(p,f),J!==4&&(J=2),On===null?On=[l]:On.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Vu(l,p,t);Ti(l,d);break e;case 1:f=p;var m=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(mt===null||!mt.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var _=Qu(l,f,t);Ti(l,_);break e}}l=l.return}while(l!==null)}cc(n)}catch(w){t=w,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function sc(){var e=ra.current;return ra.current=na,e===null?na:e}function Do(){(J===0||J===3||J===2)&&(J=4),ne===null||!(Mt&268435455)&&!(ba&268435455)||ot(ne,ae)}function oa(e,t){var n=M;M|=2;var r=sc();(ne!==e||ae!==t)&&(Ue=null,Tt(e,t));do try{zf();break}catch(a){ic(e,a)}while(!0);if(_o(),M=n,ra.current=r,K!==null)throw Error(k(261));return ne=null,ae=0,J}function zf(){for(;K!==null;)uc(K)}function Mf(){for(;K!==null&&!ad();)uc(K)}function uc(e){var t=fc(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?cc(e):K=t,Mo.current=null}function cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Nf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(n=Cf(n,t,_e),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);J===0&&(J=5)}function jt(e,t,n){var r=F,a=Ae.transition;try{Ae.transition=null,F=1,If(e,t,n,r)}finally{Ae.transition=a,F=r}return null}function If(e,t,n,r){do rn();while(st!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(md(e,l),e===ne&&(K=ne=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,pc(Br,function(){return rn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var s=F;F=1;var f=M;M|=4,Mo.current=null,Tf(e,n),ac(n,e),ef(Cl),Vr=!!jl,Cl=jl=null,e.current=n,Af(n),ld(),M=f,F=s,Ae.transition=l}else e.current=n;if(wr&&(wr=!1,st=e,la=a),l=e.pendingLanes,l===0&&(mt=null),sd(n.stateNode),xe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(aa)throw aa=!1,e=Gl,Gl=null,e;return la&1&&e.tag!==0&&rn(),l=e.pendingLanes,l&1?e===Ul?Fn++:(Fn=0,Ul=e):Fn=0,_t(),null}function rn(){if(st!==null){var e=Vs(la),t=Ae.transition,n=F;try{if(Ae.transition=null,F=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,la=0,M&6)throw Error(k(331));var a=M;for(M|=4,j=e.current;j!==null;){var l=j,s=l.child;if(j.flags&16){var f=l.deletions;if(f!==null){for(var p=0;p<f.length;p++){var h=f[p];for(j=h;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:In(8,x,l)}var o=x.child;if(o!==null)o.return=x,j=o;else for(;j!==null;){x=j;var i=x.sibling,c=x.return;if(tc(x),x===h){j=null;break}if(i!==null){i.return=c,j=i;break}j=c}}}var g=l.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}j=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,j=s;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:In(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,j=d;break e}j=l.return}}var m=e.current;for(j=m;j!==null;){s=j;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,j=v;else e:for(s=m;j!==null;){if(f=j,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:va(9,f)}}catch(w){q(f,f.return,w)}if(f===s){j=null;break e}var _=f.sibling;if(_!==null){_.return=f.return,j=_;break e}j=f.return}}if(M=a,_t(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(ca,e)}catch{}r=!0}return r}finally{F=n,Ae.transition=t}}return!1}function Yi(e,t,n){t=cn(n,t),t=Vu(e,t,1),e=pt(e,t,1),t=pe(),e!==null&&(nr(e,1,t),xe(e,t))}function q(e,t,n){if(e.tag===3)Yi(e,e,n);else for(;t!==null;){if(t.tag===3){Yi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=cn(n,e),e=Qu(t,e,1),t=pt(t,e,1),e=pe(),t!==null&&(nr(t,1,e),xe(t,e));break}}t=t.return}}function Of(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ae&n)===n&&(J===4||J===3&&(ae&130023424)===ae&&500>Y()-Oo?Tt(e,0):Io|=n),xe(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=pe();e=Je(e,t),e!==null&&(nr(e,t,n),xe(e,n))}function Ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),dc(e,n)}var fc;fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,jf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,W&&t.flags&1048576&&gu(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var a=ln(t,de.current);nn(t,n),a=To(null,t,r,e,a,n);var l=Ao();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(l=!0,qr(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,So(t),a.updater=ya,t.stateNode=a,a._reactInternals=t,Il(t,r,e,n),t=Rl(null,t,r,!0,l,n)):(t.tag=0,W&&l&&yo(t),fe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Hf(r),e=Me(r,e),a){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=Hi(null,t,r,e,n);break e;case 11:t=Ri(null,t,r,e,n);break e;case 14:t=Di(null,t,r,Me(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Fl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Hi(e,t,r,a,n);case 3:e:{if(qu(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,a=l.element,_u(e,t),Jr(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=cn(Error(k(423)),t),t=Bi(e,t,r,n,a);break e}else if(r!==a){a=cn(Error(k(424)),t),t=Bi(e,t,r,n,a);break e}else for(ke=ft(t.stateNode.containerInfo.firstChild),we=t,W=!0,Oe=null,n=bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),r===a){t=et(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return ku(t),e===null&&Ll(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,s=a.children,Nl(r,a)?s=null:l!==null&&Nl(r,l)&&(t.flags|=32),$u(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Xu(e,t,n);case 4:return jo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Ri(e,t,r,a,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,s=a.value,D(Kr,r._currentValue),r._currentValue=s,l!==null)if(De(l.value,s)){if(l.children===a.children&&!ve.current){t=et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var f=l.dependencies;if(f!==null){s=l.child;for(var p=f.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=Ye(-1,n&-n),p.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var x=h.pending;x===null?p.next=p:(p.next=x.next,x.next=p),h.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),zl(l.return,n,t),f.lanes|=n;break}p=p.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(k(341));s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),zl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}fe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nn(t,n),a=Pe(a),r=r(a),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,a=Me(r,t.pendingProps),a=Me(r.type,a),Di(e,t,r,a,n);case 15:return Gu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),zr(e,t),t.tag=1,be(r)?(e=!0,qr(t)):e=!1,nn(t,n),Wu(t,r,a),Il(t,r,a,n),Rl(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return Uu(e,t,n)}throw Error(k(156,t.tag))};function pc(e,t){return Ds(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Df(e,t,n,r)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ao)return 11;if(e===lo)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,a,l){var s=2;if(r=e,typeof e=="function")Ho(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return At(n.children,a,l,t);case ro:s=8,a|=8;break;case ll:return e=Te(12,n,t,a|2),e.elementType=ll,e.lanes=l,e;case ol:return e=Te(13,n,t,a),e.elementType=ol,e.lanes=l,e;case il:return e=Te(19,n,t,a),e.elementType=il,e.lanes=l,e;case ks:return xa(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:s=10;break e;case _s:s=9;break e;case ao:s=11;break e;case lo:s=14;break e;case rt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Te(s,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function At(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=Te(22,e,r,t),e.elementType=ks,e.lanes=n,e.stateNode={isHidden:!1},e}function el(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function tl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ia(0),this.expirationTimes=Ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ia(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bo(e,t,n,r,a,l,s,f,p){return e=new Bf(e,t,n,f,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},So(l),e}function Wf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return vt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(be(n))return pu(e,n,t)}return t}function gc(e,t,n,r,a,l,s,f,p){return e=Bo(n,r,!0,e,a,l,s,f,p),e.context=mc(null),n=e.current,r=pe(),a=gt(n),l=Ye(r,a),l.callback=t??null,pt(n,l,a),e.current.lanes=a,nr(e,a,r),xe(e,r),e}function _a(e,t,n,r){var a=t.current,l=pe(),s=gt(a);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(a,t,s),e!==null&&(Re(e,a,s,l),Ar(e,a,s)),s}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ki(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wo(e,t){Ki(e,t),(e=e.alternate)&&Ki(e,t)}function Vf(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}ka.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_a(e,t,null,null)};ka.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){_a(null,e,null,null)}),t[Ze]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&qs(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zi(){}function Qf(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var h=ia(s);l.call(h)}}var s=gc(t,r,e,0,null,!1,!1,"",Zi);return e._reactRootContainer=s,e[Ze]=s.current,Un(e.nodeType===8?e.parentNode:e),It(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var f=r;r=function(){var h=ia(p);f.call(h)}}var p=Bo(e,0,!1,null,null,!1,!1,"",Zi);return e._reactRootContainer=p,e[Ze]=p.current,Un(e.nodeType===8?e.parentNode:e),It(function(){_a(t,p,n,r)}),p}function Sa(e,t,n,r,a){var l=n._reactRootContainer;if(l){var s=l;if(typeof a=="function"){var f=a;a=function(){var p=ia(s);f.call(p)}}_a(t,s,e,a)}else s=Qf(n,t,e,a,r);return ia(s)}Qs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(so(t,n|1),xe(t,Y()),!(M&6)&&(dn=Y()+500,_t()))}break;case 13:It(function(){var r=Je(e,1);if(r!==null){var a=pe();Re(r,e,1,a)}}),Wo(e,1)}};uo=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=pe();Re(t,e,134217728,n)}Wo(e,134217728)}};Gs=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=pe();Re(n,e,t,r)}Wo(e,t)}};Us=function(){return F};$s=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};yl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ma(r);if(!a)throw Error(k(90));Ss(r),cl(r,a)}}}break;case"textarea":Cs(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};zs=Fo;Ms=It;var Gf={usingClientEntryPoint:!1,Events:[ar,Gt,ma,Ps,Ls,Fo]},wn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fs(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{ca=Sr.inject(Uf),Qe=Sr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(k(200));return Wf(e,t,null,n)};je.createRoot=function(e,t){if(!Qo(e))throw Error(k(299));var n=!1,r="",a=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Bo(e,1,!1,null,null,n,!1,r,a),e[Ze]=t.current,Un(e.nodeType===8?e.parentNode:e),new Vo(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Fs(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return It(e)};je.hydrate=function(e,t,n){if(!wa(t))throw Error(k(200));return Sa(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",s=hc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=gc(t,null,e,1,n??null,a,!1,l,s),e[Ze]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ka(t)};je.render=function(e,t,n){if(!wa(t))throw Error(k(200));return Sa(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!wa(e))throw Error(k(40));return e._reactRootContainer?(It(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};je.unstable_batchedUpdates=Fo;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wa(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Sa(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc)}catch(e){console.error(e)}}yc(),hs.exports=je;var $f=hs.exports,Ji=$f;rl.createRoot=Ji.createRoot,rl.hydrateRoot=Ji.hydrateRoot;const es=({onStart:e,onSettings:t,onHelp:n})=>u.jsxs("div",{className:"cg-main-menu",children:[u.jsxs("div",{className:"cg-menu-bg",children:[u.jsx("div",{className:"cg-menu-bg-gradient"}),u.jsx("div",{className:"cg-menu-bg-pattern"}),u.jsx("div",{className:"cg-menu-geass-symbols",children:u.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:u.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),u.jsxs("div",{className:"cg-menu-content",children:[u.jsxs("div",{className:"cg-menu-header",children:[u.jsxs("div",{className:"cg-menu-title-decoration",children:[u.jsx("div",{className:"cg-title-line-left"}),u.jsx("div",{className:"cg-title-ornament",children:u.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:u.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),u.jsx("div",{className:"cg-title-line-right"})]}),u.jsxs("h1",{className:"cg-game-title",children:[u.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),u.jsx("span",{className:"cg-title-divider",children:":"}),u.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),u.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),u.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[u.jsx("div",{className:"cg-title-line-left"}),u.jsx("div",{className:"cg-title-ornament",children:u.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[u.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),u.jsx("div",{className:"cg-title-line-right"})]})]}),u.jsxs("nav",{className:"cg-menu-nav",children:[u.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M8 5v14l11-7z"})})}),u.jsx("span",{className:"cg-button-text",children:"开始游戏"}),u.jsx("div",{className:"cg-button-shimmer"})]}),u.jsxs("button",{className:"cg-menu-button",onClick:t,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),u.jsx("span",{className:"cg-button-text",children:"设置"})]}),u.jsxs("button",{className:"cg-menu-button",onClick:n,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),u.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),u.jsx("footer",{className:"cg-menu-footer",children:u.jsx("div",{className:"cg-footer-decoration",children:u.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),u.jsx("style",{children:`
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
      `})]}),Xl=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",color:"#4c1d95",secondaryColor:"#1e1b4b",accentColor:"#dc2626",description:"黑色骑士团的领袖，拥有Geass之力",personality:"calculating",pose:"思考姿势 - 单手托腮，眼神锐利",accessories:["眼罩（遮住Geass之眼）","黑色披风","金色装饰"]},{id:"cc",name:"C.C.",nameEn:"C.C.",color:"#15803d",secondaryColor:"#14532d",accentColor:"#fbbf24",description:"赋予鲁鲁修Geass的神秘少女",personality:"mysterious",pose:"慵懒姿势 - 手持披萨，侧躺",accessories:["披萨","白色拘束服","绿色长发"]},{id:"suzaku",name:"枢木朱雀",nameEn:"Suzaku",color:"#f8fafc",secondaryColor:"#cbd5e1",accentColor:"#3b82f6",description:"圆桌骑士，鲁鲁修的挚友也是宿敌",personality:"passionate",pose:"热血姿势 - 握拳，充满干劲",accessories:["骑士制服","兰斯洛特徽章","白色披风"]},{id:"kallen",name:"红月卡莲",nameEn:"Kallen",color:"#dc2626",secondaryColor:"#991b1b",accentColor:"#fbbf24",description:"黑色骑士团的王牌驾驶员",personality:"tsundere",pose:"傲娇姿势 - 双臂交叉，侧头",accessories:["红色头巾","驾驶服","红莲徽章"]}],ja={lelouch:{primary:"#4c1d95",secondary:"#2e1065",highlight:"#7c3aed",shadow:"#1e1b4b",eye:"#dc2626",outline:"#0a0a0f"},cc:{primary:"#15803d",secondary:"#166534",highlight:"#22c55e",eye:"#fbbf24",outline:"#0a0a0f"},suzaku:{primary:"#f8fafc",secondary:"#e2e8f0",highlight:"#ffffff",shadow:"#94a3b8",eye:"#3b82f6",outline:"#0a0a0f"},kallen:{primary:"#dc2626",secondary:"#b91c1c",highlight:"#ef4444",shadow:"#7f1d1d",eye:"#fbbf24",outline:"#0a0a0f"}},ts=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.lelouch,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(-5deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"lelouchBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"lelouchCapeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.secondary}),u.jsx("stop",{offset:"100%",stopColor:r.shadow})]}),u.jsxs("radialGradient",{id:"lelouchEyeGrad",cx:"50%",cy:"50%",r:"50%",children:[u.jsx("stop",{offset:"0%",stopColor:r.eye}),u.jsx("stop",{offset:"70%",stopColor:r.eye}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("symbol",{id:"geassSymbol",viewBox:"0 0 40 40",children:[u.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"none",stroke:r.eye,strokeWidth:"2"}),u.jsx("circle",{cx:"20",cy:"20",r:"3",fill:r.eye})]})]}),u.jsx("path",{d:"M60 100 Q40 140 30 180 L170 180 Q160 140 140 100 Z",fill:"url(#lelouchCapeGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"130",rx:"45",ry:"40",fill:"url(#lelouchBodyGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M70 130 Q100 145 130 130",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("circle",{cx:"100",cy:"70",r:"45",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M55 70 Q50 40 70 30 Q100 20 130 30 Q150 40 145 70 Q150 90 140 100 L60 100 Q50 90 55 70",fill:r.shadow,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M60 50 Q70 35 85 45 Q100 30 115 45 Q130 35 140 50 Q135 65 130 60 L100 55 L70 60 Q65 65 60 50",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"82",cy:"75",rx:"10",ry:"12",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"82",cy:"75",rx:"6",ry:"8",fill:"#1e293b"}),u.jsx("circle",{cx:"84",cy:"73",r:"2",fill:"white"}),u.jsx("ellipse",{cx:"118",cy:"75",rx:"10",ry:"12",fill:"#1a1a24",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("rect",{x:"108",y:"65",width:"20",height:"20",rx:"3",fill:r.shadow,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("line",{x1:"108",y1:"75",x2:"128",y2:"75",stroke:r.outline,strokeWidth:"1"}),u.jsx("line",{x1:"118",y1:"65",x2:"118",y2:"85",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M128 75 Q145 70 155 65",fill:"none",stroke:r.shadow,strokeWidth:"3"}),u.jsx("path",{d:"M108 75 Q90 70 80 65",fill:"none",stroke:r.shadow,strokeWidth:"3"}),u.jsx("path",{d:"M92 95 Q100 92 108 95",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("ellipse",{cx:"65",cy:"110",rx:"12",ry:"10",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"135",cy:"115",rx:"12",ry:"10",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("use",{href:"#geassSymbol",x:"150",y:"20",width:"30",height:"30",opacity:"0.6",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 165 35",to:"360 165 35",dur:"10s",repeatCount:"indefinite"})}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"130",rx:"48",ry:"43",fill:"none",stroke:r.eye,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"48;50;48",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},qf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.cc,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(5deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"ccBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"ccHairGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"100%",stopColor:r.primary})]}),u.jsxs("linearGradient",{id:"ccPizzaGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#fbbf24"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("path",{d:"M50 80 Q30 120 25 160 Q20 180 30 190 L170 190 Q180 180 175 160 Q170 120 150 80 Q100 70 50 80",fill:"url(#ccHairGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"40",ry:"35",fill:"#f8fafc",stroke:r.outline,strokeWidth:"2"}),u.jsx("rect",{x:"85",y:"110",width:"30",height:"50",rx:"5",fill:"none",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("line",{x1:"100",y1:"110",x2:"100",y2:"160",stroke:r.outline,strokeWidth:"1"}),u.jsx("circle",{cx:"92",cy:"125",r:"3",fill:r.outline}),u.jsx("circle",{cx:"108",cy:"125",r:"3",fill:r.outline}),u.jsx("circle",{cx:"92",cy:"145",r:"3",fill:r.outline}),u.jsx("circle",{cx:"108",cy:"145",r:"3",fill:r.outline}),u.jsx("circle",{cx:"100",cy:"75",r:"42",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M58 75 Q60 45 85 50 Q100 40 115 50 Q140 45 142 75 Q140 95 130 90 L100 85 L70 90 Q60 95 58 75",fill:"url(#ccHairGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"78",rx:"9",ry:"10",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"78",rx:"5",ry:"6",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"76",r:"1.5",fill:"white"}),u.jsx("ellipse",{cx:"122",cy:"78",rx:"9",ry:"10",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"78",rx:"5",ry:"6",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"76",r:"1.5",fill:"white"}),u.jsx("path",{d:"M70 65 Q78 68 86 65",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M114 65 Q122 68 130 65",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M95 95 Q100 98 105 95",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsxs("g",{transform:"translate(130, 100) rotate(-20)",children:[u.jsx("path",{d:"M0 0 L-20 40 Q0 50 20 40 Z",fill:"url(#ccPizzaGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M-2 5 L-15 35 Q0 42 15 35 L2 5 Z",fill:"#fef3c7",opacity:"0.9"}),u.jsx("circle",{cx:"-5",cy:"20",r:"3",fill:"#dc2626"}),u.jsx("circle",{cx:"5",cy:"25",r:"3",fill:"#dc2626"}),u.jsx("circle",{cx:"0",cy:"32",r:"2.5",fill:"#dc2626"})]}),u.jsx("ellipse",{cx:"140",cy:"120",rx:"10",ry:"8",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"60",cy:"125",rx:"10",ry:"8",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"43",ry:"38",fill:"none",stroke:r.highlight,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"38;40;38",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Xf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.suzaku,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-15px) scale(1.08)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(-3deg) scale(1.02)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"suzakuBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"suzakuCapeGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.shadow})]}),u.jsxs("linearGradient",{id:"suzakuUniformGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"50%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]})]}),u.jsx("path",{d:"M55 100 Q35 140 30 180 L170 180 Q165 140 145 100 Z",fill:"url(#suzakuCapeGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"42",ry:"38",fill:"url(#suzakuUniformGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M70 120 Q100 140 130 120",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("rect",{x:"95",y:"110",width:"10",height:"40",fill:"#d4af37"}),u.jsx("circle",{cx:"100",cy:"130",r:"8",fill:"#3b82f6",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M96 130 L100 126 L104 130 L100 134 Z",fill:"white"}),u.jsx("circle",{cx:"100",cy:"72",r:"43",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M57 72 Q55 40 75 32 Q100 25 125 32 Q145 40 143 72 Q145 90 135 95 L100 90 L65 95 Q55 90 57 72",fill:"#5c4033",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M60 55 L55 45 L68 52 L72 40 L80 50 L85 35 L95 48 L100 30 L105 48 L115 35 L120 50 L128 40 L132 52 L145 45 L140 55",fill:"#5c4033",stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M72 70 L78 72",stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M128 70 L122 72",stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M68 62 L88 68",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M132 62 L112 68",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M90 95 Q100 102 110 95",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M92 97 L108 97",fill:"none",stroke:r.outline,strokeWidth:"1"}),u.jsxs("g",{transform:"translate(55, 115)",children:[u.jsx("circle",{cx:"0",cy:"0",r:"12",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"-3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"0",cy:"-8",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"})]}),u.jsxs("g",{transform:"translate(145, 115)",children:[u.jsx("circle",{cx:"0",cy:"0",r:"12",fill:r.primary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"-3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"3",cy:"-5",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"0",cy:"-8",rx:"4",ry:"5",fill:r.primary,stroke:r.outline,strokeWidth:"1"})]}),t==="win"&&u.jsxs("g",{stroke:"#fbbf24",strokeWidth:"2",opacity:"0.8",children:[u.jsx("line",{x1:"40",y1:"60",x2:"30",y2:"50",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"160",y1:"60",x2:"170",y2:"50",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"50",y1:"40",x2:"45",y2:"30",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",begin:"0.2s",repeatCount:"indefinite"})}),u.jsx("line",{x1:"150",y1:"40",x2:"155",y2:"30",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.5s",begin:"0.2s",repeatCount:"indefinite"})})]}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"45",ry:"41",fill:"none",stroke:r.eye,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"45;47;45",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"41;43;41",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},Yf=({size:e=200,animationState:t="idle",className:n=""})=>{const r=ja.kallen,a=()=>{switch(t){case"breathing":return"scale(1.02)";case"win":return"translateY(-10px) scale(1.05)";case"lose":return"translateY(5px) scale(0.95)";case"playing-card":return"rotate(3deg)";default:return""}};return u.jsxs("svg",{width:e,height:e,viewBox:"0 0 200 200",className:`cg-chibi ${n}`,style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))",transition:"transform 0.3s ease",transform:a()},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"kallenBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"50%",stopColor:r.primary}),u.jsx("stop",{offset:"100%",stopColor:r.secondary})]}),u.jsxs("linearGradient",{id:"kallenHairGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:r.highlight}),u.jsx("stop",{offset:"100%",stopColor:r.primary})]}),u.jsxs("linearGradient",{id:"kallenSuitGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"100%",stopColor:"#450a0a"})]})]}),u.jsx("path",{d:"M50 80 Q40 120 35 160 Q30 185 45 190 L155 190 Q170 185 165 160 Q160 120 150 80 Q100 70 50 80",fill:"url(#kallenHairGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("ellipse",{cx:"100",cy:"135",rx:"40",ry:"36",fill:"url(#kallenSuitGrad)",stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M75 120 Q100 135 125 120",fill:"none",stroke:r.highlight,strokeWidth:"2"}),u.jsx("rect",{x:"95",y:"115",width:"10",height:"35",fill:r.highlight,opacity:"0.5"}),u.jsx("circle",{cx:"100",cy:"130",r:"7",fill:r.eye,stroke:r.outline,strokeWidth:"1"}),u.jsx("path",{d:"M97 130 L100 127 L103 130 L100 133 Z",fill:r.shadow}),u.jsx("circle",{cx:"100",cy:"72",r:"42",fill:r.primary,stroke:r.outline,strokeWidth:"2"}),u.jsx("path",{d:"M58 72 Q60 42 85 48 Q100 38 115 48 Q140 42 142 72 Q140 92 130 88 L100 82 L70 88 Q60 92 58 72",fill:"url(#kallenHairGrad)",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("path",{d:"M55 60 Q100 45 145 60 L148 75 Q100 60 52 75 Z",fill:r.secondary,stroke:r.outline,strokeWidth:"1.5"}),u.jsx("rect",{x:"95",y:"50",width:"10",height:"15",fill:r.highlight}),u.jsx("path",{d:"M55 65 Q40 80 35 100 L45 95 Q50 80 58 70",fill:r.secondary,stroke:r.outline,strokeWidth:"1",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 55 65;5 55 65;0 55 65",dur:"2s",repeatCount:"indefinite"})}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"78",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"80",cy:"74",r:"2",fill:"white"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"10",ry:"11",fill:"#f8fafc",stroke:r.outline,strokeWidth:"1.5"}),u.jsx("ellipse",{cx:"122",cy:"76",rx:"6",ry:"7",fill:r.eye}),u.jsx("circle",{cx:"124",cy:"74",r:"2",fill:"white"}),u.jsx("path",{d:"M68 62 L88 66",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M132 62 L112 66",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("path",{d:"M95 96 Q100 94 108 97",fill:"none",stroke:r.outline,strokeWidth:"1.5",strokeLinecap:"round"}),u.jsx("path",{d:"M60 125 Q80 135 100 130 Q120 135 140 125",fill:"none",stroke:r.primary,strokeWidth:"12",strokeLinecap:"round"}),u.jsx("path",{d:"M60 125 Q80 135 100 130 Q120 135 140 125",fill:"none",stroke:r.outline,strokeWidth:"2",strokeLinecap:"round"}),u.jsx("ellipse",{cx:"85",cy:"128",rx:"8",ry:"6",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"115",cy:"128",rx:"8",ry:"6",fill:r.primary,stroke:r.outline,strokeWidth:"1"}),u.jsx("ellipse",{cx:"65",cy:"85",rx:"8",ry:"5",fill:"#fca5a5",opacity:"0.6"}),u.jsx("ellipse",{cx:"135",cy:"85",rx:"8",ry:"5",fill:"#fca5a5",opacity:"0.6"}),t==="lose"&&u.jsxs("g",{stroke:r.outline,strokeWidth:"2",children:[u.jsx("path",{d:"M40 50 L50 55 M45 45 L52 52",children:u.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"0.5s",repeatCount:"indefinite"})}),u.jsx("path",{d:"M160 50 L150 55 M155 45 L148 52",children:u.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"0.5s",repeatCount:"indefinite"})})]}),t==="breathing"&&u.jsxs("ellipse",{cx:"100",cy:"135",rx:"43",ry:"39",fill:"none",stroke:r.highlight,strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"rx",values:"43;45;43",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"ry",values:"39;41;39",dur:"3s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",values:"0.3;0.1;0.3",dur:"3s",repeatCount:"indefinite"})]})]})},sa=e=>{const{characterId:t,size:n=200,animationState:r="idle",className:a=""}=e,l={size:n,animationState:r,className:a};switch(t){case"lelouch":return Dt.createElement(ts,l);case"cc":return Dt.createElement(qf,l);case"suzaku":return Dt.createElement(Xf,l);case"kallen":return Dt.createElement(Yf,l);default:return Dt.createElement(ts,l)}},Kf=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[a,l]=O.useState(null),s=Xl.find(f=>f.id===e);return u.jsxs("div",{className:"cg-character-select",children:[u.jsxs("div",{className:"cg-select-bg",children:[u.jsx("div",{className:"cg-select-bg-gradient"}),u.jsx("div",{className:"cg-select-bg-pattern"})]}),u.jsxs("div",{className:"cg-select-content",children:[u.jsxs("header",{className:"cg-select-header",children:[u.jsxs("button",{className:"cg-back-button",onClick:r,children:[u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),u.jsx("span",{children:"返回"})]}),u.jsx("h2",{className:"cg-select-title",children:u.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),u.jsx("div",{className:"cg-select-placeholder"})]}),u.jsx("div",{className:"cg-character-grid",children:Xl.map(f=>{const p=e===f.id,h=a===f.id;return u.jsxs("div",{className:`cg-character-card ${p?"cg-selected":""} ${h?"cg-hovered":""}`,onClick:()=>t(f.id),onMouseEnter:()=>l(f.id),onMouseLeave:()=>l(null),children:[u.jsxs("div",{className:"cg-card-frame",children:[u.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),u.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),u.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),u.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),u.jsx("div",{className:"cg-character-preview",children:u.jsx(sa,{characterId:f.id,size:150,animationState:p?"breathing":"idle"})}),u.jsxs("div",{className:"cg-character-info",children:[u.jsx("h3",{className:"cg-character-name",children:f.name}),u.jsx("p",{className:"cg-character-name-en",children:f.nameEn})]}),p&&u.jsx("div",{className:"cg-selected-indicator",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:u.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),u.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${f.color}40 0%, transparent 70%)`}})]},f.id)})}),s&&u.jsx("div",{className:"cg-character-detail",children:u.jsxs("div",{className:"cg-detail-frame",children:[u.jsxs("div",{className:"cg-detail-content",children:[u.jsx("p",{className:"cg-detail-description",children:s.description}),u.jsxs("div",{className:"cg-detail-traits",children:[u.jsx("span",{className:"cg-trait-label",children:"性格:"}),u.jsxs("span",{className:"cg-trait-value",children:[s.personality==="calculating"&&"深谋远虑",s.personality==="mysterious"&&"神秘莫测",s.personality==="passionate"&&"热血正义",s.personality==="tsundere"&&"傲娇坚强"]})]})]}),u.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[u.jsx("span",{children:"确认选择"}),u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),u.jsx("style",{children:`
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
          padding: 2rem;
          box-sizing: border-box;
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
          .cg-character-grid {
            grid-template-columns: repeat(2, 1fr);
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
          margin-top: auto;
          padding-top: 1rem;
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
      `})]})},Zf=({gameState:e,onPlayCard:t,onPass:n,onChallenge:r,gameLog:a=[],funnyAction:l})=>{const{selectedCharacter:s,playerHand:f,tableCards:p,currentRound:h,playerScore:x,opponentScore:o,playerHP:i,opponentHP:c,maxHP:g,currentTurn:y,lastAction:b}=e;return u.jsxs("div",{className:"cg-game-table",children:[u.jsxs("div",{className:"cg-table-bg",children:[u.jsx("div",{className:"cg-table-bg-gradient"}),u.jsx("div",{className:"cg-table-pattern",children:u.jsxs("svg",{className:"cg-table-geass-pattern",viewBox:"0 0 200 200",children:[u.jsx("defs",{children:u.jsx("pattern",{id:"geassPattern",x:"0",y:"0",width:"50",height:"50",patternUnits:"userSpaceOnUse",children:u.jsx("path",{d:"M25 5 L28 20 L42 25 L28 30 L25 45 L22 30 L8 25 L22 20 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.05)",strokeWidth:"0.5"})})}),u.jsx("rect",{width:"100%",height:"100%",fill:"url(#geassPattern)"})]})})]}),u.jsxs("header",{className:"cg-table-header",children:[u.jsxs("div",{className:"cg-round-info",children:[u.jsx("span",{className:"cg-round-label",children:"回合"}),u.jsxs("span",{className:"cg-round-value",children:[h,"/5"]})]}),u.jsxs("div",{className:"cg-score-board",children:[u.jsxs("div",{className:"cg-score cg-player-score",children:[u.jsx("span",{className:"cg-score-label",children:"玩家"}),u.jsx("span",{className:"cg-score-value",children:x})]}),u.jsx("div",{className:"cg-score-divider",children:":"}),u.jsxs("div",{className:"cg-score cg-opponent-score",children:[u.jsx("span",{className:"cg-score-value",children:o}),u.jsx("span",{className:"cg-score-label",children:"对手"})]})]}),u.jsx("div",{className:"cg-hp-display",children:u.jsxs("div",{className:"cg-hp-bar",children:[u.jsx("span",{className:"cg-hp-label",children:"HP"}),u.jsx("div",{className:"cg-hp-hearts",children:Array.from({length:g||3}).map((d,m)=>u.jsx("span",{className:`cg-hp-heart ${m<(i||3)?"active":""}`,children:m<(i||3)?"❤️":"🖤"},m))})]})})]}),u.jsxs("div",{className:"cg-opponent-area",children:[u.jsx("div",{className:"cg-opponent-hand",children:[...Array(5)].map((d,m)=>u.jsx("div",{className:"cg-card cg-card-back",children:u.jsx("div",{className:"cg-card-pattern",children:u.jsxs("svg",{viewBox:"0 0 40 60",children:[u.jsx("rect",{width:"40",height:"60",fill:"#1a1a24"}),u.jsx("path",{d:"M20 10 L23 22 L35 25 L23 28 L20 40 L17 28 L5 25 L17 22 Z",fill:"none",stroke:"#dc2626",strokeWidth:"1",opacity:"0.5"})]})})},m))}),u.jsxs("div",{className:"cg-opponent-avatar",children:[u.jsx("div",{className:`cg-avatar-frame ${y==="opponent"?"cg-avatar-active":""}`,children:u.jsx(sa,{characterId:"cc",size:80,animationState:y==="opponent"?"breathing":"idle"})}),u.jsx("div",{className:"cg-opponent-name",children:"C.C."}),u.jsx("div",{className:"cg-opponent-hp",children:Array.from({length:g||3}).map((d,m)=>u.jsx("span",{className:"cg-hp-heart-small",children:m<(c||3)?"❤️":"🖤"},m))})]})]}),u.jsx("div",{className:"cg-table-center",children:u.jsx("div",{className:"cg-table-surface",children:u.jsxs("div",{className:"cg-table-felt",children:[u.jsxs("div",{className:"cg-felt-border",children:[u.jsx("div",{className:"cg-felt-corner cg-felt-tl"}),u.jsx("div",{className:"cg-felt-corner cg-felt-tr"}),u.jsx("div",{className:"cg-felt-corner cg-felt-bl"}),u.jsx("div",{className:"cg-felt-corner cg-felt-br"})]}),u.jsx("div",{className:"cg-table-logo",children:u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-logo-geass",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"1",opacity:"0.3"}),u.jsx("circle",{cx:"50",cy:"50",r:"35",fill:"none",stroke:"#d4af37",strokeWidth:"0.5",opacity:"0.2"}),u.jsx("path",{d:"M50 15 L55 40 L80 50 L55 60 L50 85 L45 60 L20 50 L45 40 Z",fill:"none",stroke:"#dc2626",strokeWidth:"2",opacity:"0.4",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"120s",repeatCount:"indefinite"})})]})}),u.jsx("div",{className:"cg-play-area",children:p.length===0?u.jsx("div",{className:"cg-play-placeholder",children:u.jsx("span",{children:"出牌区域"})}):u.jsx("div",{className:"cg-played-cards",children:p.map((d,m)=>u.jsx("div",{className:"cg-card cg-card-played",style:{transform:`rotate(${(m-p.length/2)*5}deg) translateY(${m*-5}px)`},children:u.jsxs("div",{className:"cg-card-content",children:[u.jsx("span",{className:"cg-card-rank",children:d.rank}),u.jsx("span",{className:"cg-card-suit",children:ns(d.suit)})]})},d.id))})}),l&&u.jsx("div",{className:"cg-funny-action",children:u.jsxs("div",{className:"cg-funny-action-content",children:[u.jsx("span",{className:"cg-funny-emoji",children:l.emoji}),u.jsx("span",{className:"cg-funny-text",children:l.description})]})}),b&&u.jsx("div",{className:"cg-last-action",children:b})]})})}),u.jsx("div",{className:"cg-game-log",children:a.map((d,m)=>u.jsx("div",{className:"cg-log-entry",children:d},m))}),u.jsxs("div",{className:"cg-player-area",children:[u.jsxs("div",{className:"cg-player-avatar",children:[u.jsx("div",{className:`cg-avatar-frame ${y==="player"?"cg-avatar-active":""}`,children:s&&u.jsx(sa,{characterId:s,size:80,animationState:y==="player"?"breathing":"idle"})}),u.jsx("div",{className:"cg-player-name",children:"玩家"})]}),u.jsx("div",{className:"cg-player-hand",children:f.map((d,m)=>u.jsx("button",{className:`cg-card cg-card-front ${y!=="player"?"disabled":""}`,onClick:()=>y==="player"&&t(d.id),style:{transform:`translateX(${(m-f.length/2)*30}px)`},disabled:y!=="player",children:u.jsxs("div",{className:"cg-card-inner",children:[u.jsx("div",{className:"cg-card-rank cg-card-rank-tl",children:d.rank}),u.jsx("div",{className:"cg-card-suit-center",children:ns(d.suit)}),u.jsx("div",{className:"cg-card-rank cg-card-rank-br",children:d.rank})]})},d.id))})]}),u.jsxs("div",{className:"cg-action-bar",children:[u.jsx("button",{className:"cg-action-button cg-button-pass",onClick:n,disabled:y!=="player",children:u.jsx("span",{children:"跳过"})}),u.jsxs("button",{className:"cg-action-button cg-button-challenge cg-button-geass",onClick:r,disabled:y!=="player"||p.length===0,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),u.jsx("span",{children:"质疑"})]})]}),u.jsx("style",{children:`
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
      `})]})};function ns(e){return{spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦"}[e]||e}const Jf=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:a})=>{const[l,s]=O.useState(!1),[f,p]=O.useState(!1);O.useEffect(()=>{e&&s(!0);const o=setTimeout(()=>p(!0),1e3);return()=>clearTimeout(o)},[e]);const h=e?"lelouch":"cc",x=e?"win":"lose";return u.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[u.jsxs("div",{className:"cg-result-bg",children:[u.jsx("div",{className:"cg-result-bg-gradient"}),e?u.jsx("div",{className:"cg-result-bg-win",children:u.jsx("div",{className:"cg-victory-rays"})}):u.jsx("div",{className:"cg-result-bg-lose",children:u.jsx("div",{className:"cg-defeat-shadow"})})]}),l&&u.jsx(ep,{}),u.jsxs("div",{className:`cg-result-content ${f?"cg-animate-in":""}`,children:[u.jsxs("div",{className:"cg-result-header",children:[u.jsx("div",{className:"cg-result-badge",children:e?u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((o,i)=>u.jsx("circle",{cx:50+35*Math.cos((i*72-90)*Math.PI/180),cy:50+35*Math.sin((i*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:u.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${i*.2}s`,repeatCount:"indefinite"})},i))]}):u.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[u.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),u.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:u.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),u.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),u.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),u.jsx("div",{className:"cg-result-character",children:u.jsxs("div",{className:"cg-character-showcase",children:[u.jsx(sa,{characterId:h,size:200,animationState:x}),u.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),u.jsx("div",{className:"cg-result-score",children:u.jsxs("div",{className:"cg-score-panel",children:[u.jsxs("div",{className:"cg-score-item cg-score-player",children:[u.jsx("span",{className:"cg-score-label",children:"玩家"}),u.jsx("span",{className:"cg-score-value",children:t})]}),u.jsx("div",{className:"cg-score-divider",children:u.jsx("span",{children:"VS"})}),u.jsxs("div",{className:"cg-score-item cg-score-opponent",children:[u.jsx("span",{className:"cg-score-value",children:n}),u.jsx("span",{className:"cg-score-label",children:"对手"})]})]})}),u.jsxs("div",{className:"cg-result-actions",children:[u.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),u.jsx("span",{children:"再来一局"})]}),u.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:a,children:[u.jsx("span",{className:"cg-button-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:u.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),u.jsx("span",{children:"返回主菜单"})]})]})]}),u.jsx("style",{children:`
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
      `})]})},ep=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return u.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>u.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})},tp=()=>{const e=["spades","hearts","clubs","diamonds"],t=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],n=[];for(const r of e)for(let a=0;a<t.length;a++)n.push({id:`${r}-${t[a]}`,suit:r,rank:t[a],value:a+1,isRevealed:!1});return n},np=e=>{const t=[...e];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},rp=(e,t=5)=>{const n=np(e),r=n.slice(0,t),a=n.slice(t,t*2),l=n.slice(t*2);return{playerHand:r,opponentHand:a,remaining:l}};var Fr={};/*!
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var o=this||n;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var i=this||n;if(o=parseFloat(o),i.ctx||x(),typeof o<"u"&&o>=0&&o<=1){if(i._volume=o,i._muted)return i;i.usingWebAudio&&i.masterGain.gain.setValueAtTime(o,n.ctx.currentTime);for(var c=0;c<i._howls.length;c++)if(!i._howls[c]._webAudio)for(var g=i._howls[c]._getSoundIds(),y=0;y<g.length;y++){var b=i._howls[c]._soundById(g[y]);b&&b._node&&(b._node.volume=b._volume*o)}return i}return i._volume},mute:function(o){var i=this||n;i.ctx||x(),i._muted=o,i.usingWebAudio&&i.masterGain.gain.setValueAtTime(o?0:i._volume,n.ctx.currentTime);for(var c=0;c<i._howls.length;c++)if(!i._howls[c]._webAudio)for(var g=i._howls[c]._getSoundIds(),y=0;y<g.length;y++){var b=i._howls[c]._soundById(g[y]);b&&b._node&&(b._node.muted=o?!0:b._muted)}return i},stop:function(){for(var o=this||n,i=0;i<o._howls.length;i++)o._howls[i].stop();return o},unload:function(){for(var o=this||n,i=o._howls.length-1;i>=0;i--)o._howls[i].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,x()),o},codecs:function(o){return(this||n)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||n;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var i=new Audio;typeof i.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var i=new Audio;i.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||n,i=null;try{i=typeof Audio<"u"?new Audio:null}catch{return o}if(!i||typeof i.canPlayType!="function")return o;var c=i.canPlayType("audio/mpeg;").replace(/^no$/,""),g=o._navigator?o._navigator.userAgent:"",y=g.match(/OPR\/(\d+)/g),b=y&&parseInt(y[0].split("/")[1],10)<33,d=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,m=g.match(/Version\/(.*?) /),v=d&&m&&parseInt(m[1],10)<15;return o._codecs={mp3:!!(!b&&(c||i.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(i.canPlayType('audio/wav; codecs="1"')||i.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!i.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!i.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/m4a;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(i.canPlayType("audio/x-m4b;")||i.canPlayType("audio/m4b;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(i.canPlayType("audio/x-mp4;")||i.canPlayType("audio/mp4;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(i.canPlayType("audio/x-flac;")||i.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||n;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var i=function(c){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,o._releaseHtml5Audio(g)}catch{o.noAudio=!0;break}for(var y=0;y<o._howls.length;y++)if(!o._howls[y]._webAudio)for(var b=o._howls[y]._getSoundIds(),d=0;d<b.length;d++){var m=o._howls[y]._soundById(b[d]);m&&m._node&&!m._node._unlocked&&(m._node._unlocked=!0,m._node.load())}o._autoResume();var v=o.ctx.createBufferSource();v.buffer=o._scratchBuffer,v.connect(o.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),v.onended=function(){v.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",i,!0),document.removeEventListener("touchend",i,!0),document.removeEventListener("click",i,!0),document.removeEventListener("keydown",i,!0);for(var _=0;_<o._howls.length;_++)o._howls[_]._emit("unlock")}};return document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",i,!0),document.addEventListener("click",i,!0),document.addEventListener("keydown",i,!0),o}},_obtainHtml5Audio:function(){var o=this||n;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var i=new Audio().play();return i&&typeof Promise<"u"&&(i instanceof Promise||typeof i.then=="function")&&i.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var i=this||n;return o._unlocked&&i._html5AudioPool.push(o),i},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!n.usingWebAudio)){for(var i=0;i<o._howls.length;i++)if(o._howls[i]._webAudio){for(var c=0;c<o._howls[i]._sounds.length;c++)if(!o._howls[i]._sounds[c]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var g=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(g,g)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!n.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var i=0;i<o._howls.length;i++)o._howls[i]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var n=new t,r=function(o){var i=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}i.init(o)};r.prototype={init:function(o){var i=this;return n.ctx||x(),i._autoplay=o.autoplay||!1,i._format=typeof o.format!="string"?o.format:[o.format],i._html5=o.html5||!1,i._muted=o.mute||!1,i._loop=o.loop||!1,i._pool=o.pool||5,i._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,i._rate=o.rate||1,i._sprite=o.sprite||{},i._src=typeof o.src!="string"?o.src:[o.src],i._volume=o.volume!==void 0?o.volume:1,i._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},i._duration=0,i._state="unloaded",i._sounds=[],i._endTimers={},i._queue=[],i._playLock=!1,i._onend=o.onend?[{fn:o.onend}]:[],i._onfade=o.onfade?[{fn:o.onfade}]:[],i._onload=o.onload?[{fn:o.onload}]:[],i._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],i._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],i._onpause=o.onpause?[{fn:o.onpause}]:[],i._onplay=o.onplay?[{fn:o.onplay}]:[],i._onstop=o.onstop?[{fn:o.onstop}]:[],i._onmute=o.onmute?[{fn:o.onmute}]:[],i._onvolume=o.onvolume?[{fn:o.onvolume}]:[],i._onrate=o.onrate?[{fn:o.onrate}]:[],i._onseek=o.onseek?[{fn:o.onseek}]:[],i._onunlock=o.onunlock?[{fn:o.onunlock}]:[],i._onresume=[],i._webAudio=n.usingWebAudio&&!i._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(i),i._autoplay&&i._queue.push({event:"play",action:function(){i.play()}}),i._preload&&i._preload!=="none"&&i.load(),i},load:function(){var o=this,i=null;if(n.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var c=0;c<o._src.length;c++){var g,y;if(o._format&&o._format[c])g=o._format[c];else{if(y=o._src[c],typeof y!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(y),g||(g=/\.([^.]+)$/.exec(y.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){i=o._src[c];break}}if(!i){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=i,o._state="loading",window.location.protocol==="https:"&&i.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new a(o),o._webAudio&&s(o),o},play:function(o,i){var c=this,g=null;if(typeof o=="number")g=o,o=null;else{if(typeof o=="string"&&c._state==="loaded"&&!c._sprite[o])return null;if(typeof o>"u"&&(o="__default",!c._playLock)){for(var y=0,b=0;b<c._sounds.length;b++)c._sounds[b]._paused&&!c._sounds[b]._ended&&(y++,g=c._sounds[b]._id);y===1?o=null:g=null}}var d=g?c._soundById(g):c._inactiveSound();if(!d)return null;if(g&&!o&&(o=d._sprite||"__default"),c._state!=="loaded"){d._sprite=o,d._ended=!1;var m=d._id;return c._queue.push({event:"play",action:function(){c.play(m)}}),m}if(g&&!d._paused)return i||c._loadQueue("play"),d._id;c._webAudio&&n._autoResume();var v=Math.max(0,d._seek>0?d._seek:c._sprite[o][0]/1e3),_=Math.max(0,(c._sprite[o][0]+c._sprite[o][1])/1e3-v),w=_*1e3/Math.abs(d._rate),S=c._sprite[o][0]/1e3,C=(c._sprite[o][0]+c._sprite[o][1])/1e3;d._sprite=o,d._ended=!1;var E=function(){d._paused=!1,d._seek=v,d._start=S,d._stop=C,d._loop=!!(d._loop||c._sprite[o][2])};if(v>=C){c._ended(d);return}var T=d._node;if(c._webAudio){var P=function(){c._playLock=!1,E(),c._refreshBuffer(d);var $=d._muted||c._muted?0:d._volume;T.gain.setValueAtTime($,n.ctx.currentTime),d._playStart=n.ctx.currentTime,typeof T.bufferSource.start>"u"?d._loop?T.bufferSource.noteGrainOn(0,v,86400):T.bufferSource.noteGrainOn(0,v,_):d._loop?T.bufferSource.start(0,v,86400):T.bufferSource.start(0,v,_),w!==1/0&&(c._endTimers[d._id]=setTimeout(c._ended.bind(c,d),w)),i||setTimeout(function(){c._emit("play",d._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?P():(c._playLock=!0,c.once("resume",P),c._clearTimer(d._id))}else{var oe=function(){T.currentTime=v,T.muted=d._muted||c._muted||n._muted||T.muted,T.volume=d._volume*n.volume(),T.playbackRate=d._rate;try{var $=T.play();if($&&typeof Promise<"u"&&($ instanceof Promise||typeof $.then=="function")?(c._playLock=!0,E(),$.then(function(){c._playLock=!1,T._unlocked=!0,i?c._loadQueue():c._emit("play",d._id)}).catch(function(){c._playLock=!1,c._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0})):i||(c._playLock=!1,E(),c._emit("play",d._id)),T.playbackRate=d._rate,T.paused){c._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||d._loop?c._endTimers[d._id]=setTimeout(c._ended.bind(c,d),w):(c._endTimers[d._id]=function(){c._ended(d),T.removeEventListener("ended",c._endTimers[d._id],!1)},T.addEventListener("ended",c._endTimers[d._id],!1))}catch(He){c._emit("playerror",d._id,He)}};T.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(T.src=c._src,T.load());var R=window&&window.ejecta||!T.readyState&&n._navigator.isCocoonJS;if(T.readyState>=3||R)oe();else{c._playLock=!0,c._state="loading";var I=function(){c._state="loaded",oe(),T.removeEventListener(n._canPlayEvent,I,!1)};T.addEventListener(n._canPlayEvent,I,!1),c._clearTimer(d._id)}}return d._id},pause:function(o){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"pause",action:function(){i.pause(o)}}),i;for(var c=i._getSoundIds(o),g=0;g<c.length;g++){i._clearTimer(c[g]);var y=i._soundById(c[g]);if(y&&!y._paused&&(y._seek=i.seek(c[g]),y._rateSeek=0,y._paused=!0,i._stopFade(c[g]),y._node))if(i._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),i._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||i._emit("pause",y?y._id:null)}return i},stop:function(o,i){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(o)}}),c;for(var g=c._getSoundIds(o),y=0;y<g.length;y++){c._clearTimer(g[y]);var b=c._soundById(g[y]);b&&(b._seek=b._start||0,b._rateSeek=0,b._paused=!0,b._ended=!0,c._stopFade(g[y]),b._node&&(c._webAudio?b._node.bufferSource&&(typeof b._node.bufferSource.stop>"u"?b._node.bufferSource.noteOff(0):b._node.bufferSource.stop(0),c._cleanBuffer(b._node)):(!isNaN(b._node.duration)||b._node.duration===1/0)&&(b._node.currentTime=b._start||0,b._node.pause(),b._node.duration===1/0&&c._clearSound(b._node))),i||c._emit("stop",b._id))}return c},mute:function(o,i){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(o,i)}}),c;if(typeof i>"u")if(typeof o=="boolean")c._muted=o;else return c._muted;for(var g=c._getSoundIds(i),y=0;y<g.length;y++){var b=c._soundById(g[y]);b&&(b._muted=o,b._interval&&c._stopFade(b._id),c._webAudio&&b._node?b._node.gain.setValueAtTime(o?0:b._volume,n.ctx.currentTime):b._node&&(b._node.muted=n._muted?!0:o),c._emit("mute",b._id))}return c},volume:function(){var o=this,i=arguments,c,g;if(i.length===0)return o._volume;if(i.length===1||i.length===2&&typeof i[1]>"u"){var y=o._getSoundIds(),b=y.indexOf(i[0]);b>=0?g=parseInt(i[0],10):c=parseFloat(i[0])}else i.length>=2&&(c=parseFloat(i[0]),g=parseInt(i[1],10));var d;if(typeof c<"u"&&c>=0&&c<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,i)}}),o;typeof g>"u"&&(o._volume=c),g=o._getSoundIds(g);for(var m=0;m<g.length;m++)d=o._soundById(g[m]),d&&(d._volume=c,i[2]||o._stopFade(g[m]),o._webAudio&&d._node&&!d._muted?d._node.gain.setValueAtTime(c,n.ctx.currentTime):d._node&&!d._muted&&(d._node.volume=c*n.volume()),o._emit("volume",d._id))}else return d=g?o._soundById(g):o._sounds[0],d?d._volume:0;return o},fade:function(o,i,c,g){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(o,i,c,g)}}),y;o=Math.min(Math.max(0,parseFloat(o)),1),i=Math.min(Math.max(0,parseFloat(i)),1),c=parseFloat(c),y.volume(o,g);for(var b=y._getSoundIds(g),d=0;d<b.length;d++){var m=y._soundById(b[d]);if(m){if(g||y._stopFade(b[d]),y._webAudio&&!m._muted){var v=n.ctx.currentTime,_=v+c/1e3;m._volume=o,m._node.gain.setValueAtTime(o,v),m._node.gain.linearRampToValueAtTime(i,_)}y._startFadeInterval(m,o,i,c,b[d],typeof g>"u")}}return y},_startFadeInterval:function(o,i,c,g,y,b){var d=this,m=i,v=c-i,_=Math.abs(v/.01),w=Math.max(4,_>0?g/_:g),S=Date.now();o._fadeTo=c,o._interval=setInterval(function(){var C=(Date.now()-S)/g;S=Date.now(),m+=v*C,m=Math.round(m*100)/100,v<0?m=Math.max(c,m):m=Math.min(c,m),d._webAudio?o._volume=m:d.volume(m,o._id,!0),b&&(d._volume=m),(c<i&&m<=c||c>i&&m>=c)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,d.volume(c,o._id),d._emit("fade",o._id))},w)},_stopFade:function(o){var i=this,c=i._soundById(o);return c&&c._interval&&(i._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,i.volume(c._fadeTo,o),c._fadeTo=null,i._emit("fade",o)),i},loop:function(){var o=this,i=arguments,c,g,y;if(i.length===0)return o._loop;if(i.length===1)if(typeof i[0]=="boolean")c=i[0],o._loop=c;else return y=o._soundById(parseInt(i[0],10)),y?y._loop:!1;else i.length===2&&(c=i[0],g=parseInt(i[1],10));for(var b=o._getSoundIds(g),d=0;d<b.length;d++)y=o._soundById(b[d]),y&&(y._loop=c,o._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,o.playing(b[d])&&(o.pause(b[d],!0),o.play(b[d],!0)))));return o},rate:function(){var o=this,i=arguments,c,g;if(i.length===0)g=o._sounds[0]._id;else if(i.length===1){var y=o._getSoundIds(),b=y.indexOf(i[0]);b>=0?g=parseInt(i[0],10):c=parseFloat(i[0])}else i.length===2&&(c=parseFloat(i[0]),g=parseInt(i[1],10));var d;if(typeof c=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,i)}}),o;typeof g>"u"&&(o._rate=c),g=o._getSoundIds(g);for(var m=0;m<g.length;m++)if(d=o._soundById(g[m]),d){o.playing(g[m])&&(d._rateSeek=o.seek(g[m]),d._playStart=o._webAudio?n.ctx.currentTime:d._playStart),d._rate=c,o._webAudio&&d._node&&d._node.bufferSource?d._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):d._node&&(d._node.playbackRate=c);var v=o.seek(g[m]),_=(o._sprite[d._sprite][0]+o._sprite[d._sprite][1])/1e3-v,w=_*1e3/Math.abs(d._rate);(o._endTimers[g[m]]||!d._paused)&&(o._clearTimer(g[m]),o._endTimers[g[m]]=setTimeout(o._ended.bind(o,d),w)),o._emit("rate",d._id)}}else return d=o._soundById(g),d?d._rate:o._rate;return o},seek:function(){var o=this,i=arguments,c,g;if(i.length===0)o._sounds.length&&(g=o._sounds[0]._id);else if(i.length===1){var y=o._getSoundIds(),b=y.indexOf(i[0]);b>=0?g=parseInt(i[0],10):o._sounds.length&&(g=o._sounds[0]._id,c=parseFloat(i[0]))}else i.length===2&&(c=parseFloat(i[0]),g=parseInt(i[1],10));if(typeof g>"u")return 0;if(typeof c=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,i)}}),o;var d=o._soundById(g);if(d)if(typeof c=="number"&&c>=0){var m=o.playing(g);m&&o.pause(g,!0),d._seek=c,d._ended=!1,o._clearTimer(g),!o._webAudio&&d._node&&!isNaN(d._node.duration)&&(d._node.currentTime=c);var v=function(){m&&o.play(g,!0),o._emit("seek",g)};if(m&&!o._webAudio){var _=function(){o._playLock?setTimeout(_,0):v()};setTimeout(_,0)}else v()}else if(o._webAudio){var w=o.playing(g)?n.ctx.currentTime-d._playStart:0,S=d._rateSeek?d._rateSeek-d._seek:0;return d._seek+(S+w*Math.abs(d._rate))}else return d._node.currentTime;return o},playing:function(o){var i=this;if(typeof o=="number"){var c=i._soundById(o);return c?!c._paused:!1}for(var g=0;g<i._sounds.length;g++)if(!i._sounds[g]._paused)return!0;return!1},duration:function(o){var i=this,c=i._duration,g=i._soundById(o);return g&&(c=i._sprite[g._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var o=this,i=o._sounds,c=0;c<i.length;c++)i[c]._paused||o.stop(i[c]._id),o._webAudio||(o._clearSound(i[c]._node),i[c]._node.removeEventListener("error",i[c]._errorFn,!1),i[c]._node.removeEventListener(n._canPlayEvent,i[c]._loadFn,!1),i[c]._node.removeEventListener("ended",i[c]._endFn,!1),n._releaseHtml5Audio(i[c]._node)),delete i[c]._node,o._clearTimer(i[c]._id);var g=n._howls.indexOf(o);g>=0&&n._howls.splice(g,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===o._src||o._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return l&&y&&delete l[o._src],n.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,i,c,g){var y=this,b=y["_on"+o];return typeof i=="function"&&b.push(g?{id:c,fn:i,once:g}:{id:c,fn:i}),y},off:function(o,i,c){var g=this,y=g["_on"+o],b=0;if(typeof i=="number"&&(c=i,i=null),i||c)for(b=0;b<y.length;b++){var d=c===y[b].id;if(i===y[b].fn&&d||!i&&d){y.splice(b,1);break}}else if(o)g["_on"+o]=[];else{var m=Object.keys(g);for(b=0;b<m.length;b++)m[b].indexOf("_on")===0&&Array.isArray(g[m[b]])&&(g[m[b]]=[])}return g},once:function(o,i,c){var g=this;return g.on(o,i,c,1),g},_emit:function(o,i,c){for(var g=this,y=g["_on"+o],b=y.length-1;b>=0;b--)(!y[b].id||y[b].id===i||o==="load")&&(setTimeout((function(d){d.call(this,i,c)}).bind(g,y[b].fn),0),y[b].once&&g.off(o,y[b].fn,y[b].id));return g._loadQueue(o),g},_loadQueue:function(o){var i=this;if(i._queue.length>0){var c=i._queue[0];c.event===o&&(i._queue.shift(),i._loadQueue()),o||c.action()}return i},_ended:function(o){var i=this,c=o._sprite;if(!i._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(i._ended.bind(i,o),100),i;var g=!!(o._loop||i._sprite[c][2]);if(i._emit("end",o._id),!i._webAudio&&g&&i.stop(o._id,!0).play(o._id),i._webAudio&&g){i._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=n.ctx.currentTime;var y=(o._stop-o._start)*1e3/Math.abs(o._rate);i._endTimers[o._id]=setTimeout(i._ended.bind(i,o),y)}return i._webAudio&&!g&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,i._clearTimer(o._id),i._cleanBuffer(o._node),n._autoSuspend()),!i._webAudio&&!g&&i.stop(o._id,!0),i},_clearTimer:function(o){var i=this;if(i._endTimers[o]){if(typeof i._endTimers[o]!="function")clearTimeout(i._endTimers[o]);else{var c=i._soundById(o);c&&c._node&&c._node.removeEventListener("ended",i._endTimers[o],!1)}delete i._endTimers[o]}return i},_soundById:function(o){for(var i=this,c=0;c<i._sounds.length;c++)if(o===i._sounds[c]._id)return i._sounds[c];return null},_inactiveSound:function(){var o=this;o._drain();for(var i=0;i<o._sounds.length;i++)if(o._sounds[i]._ended)return o._sounds[i].reset();return new a(o)},_drain:function(){var o=this,i=o._pool,c=0,g=0;if(!(o._sounds.length<i)){for(g=0;g<o._sounds.length;g++)o._sounds[g]._ended&&c++;for(g=o._sounds.length-1;g>=0;g--){if(c<=i)return;o._sounds[g]._ended&&(o._webAudio&&o._sounds[g]._node&&o._sounds[g]._node.disconnect(0),o._sounds.splice(g,1),c--)}}},_getSoundIds:function(o){var i=this;if(typeof o>"u"){for(var c=[],g=0;g<i._sounds.length;g++)c.push(i._sounds[g]._id);return c}else return[o]},_refreshBuffer:function(o){var i=this;return o._node.bufferSource=n.ctx.createBufferSource(),o._node.bufferSource.buffer=l[i._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,n.ctx.currentTime),i},_cleanBuffer:function(o){var i=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return i;if(n._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),c))try{o.bufferSource.buffer=n._scratchBuffer}catch{}return o.bufferSource=null,i},_clearSound:function(o){var i=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);i||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(o){this._parent=o,this.init()};a.prototype={init:function(){var o=this,i=o._parent;return o._muted=i._muted,o._loop=i._loop,o._volume=i._volume,o._rate=i._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++n._counter,i._sounds.push(o),o.create(),o},create:function(){var o=this,i=o._parent,c=n._muted||o._muted||o._parent._muted?0:o._volume;return i._webAudio?(o._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),o._node.gain.setValueAtTime(c,n.ctx.currentTime),o._node.paused=!0,o._node.connect(n.masterGain)):n.noAudio||(o._node=n._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(n._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=i._src,o._node.preload=i._preload===!0?"auto":i._preload,o._node.volume=c*n.volume(),o._node.load()),o},reset:function(){var o=this,i=o._parent;return o._muted=i._muted,o._loop=i._loop,o._volume=i._volume,o._rate=i._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++n._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,i=o._parent;i._duration=Math.ceil(o._node.duration*10)/10,Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue()),o._node.removeEventListener(n._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,i=o._parent;i._duration===1/0&&(i._duration=Math.ceil(o._node.duration*10)/10,i._sprite.__default[1]===1/0&&(i._sprite.__default[1]=i._duration*1e3),i._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var l={},s=function(o){var i=o._src;if(l[i]){o._duration=l[i].duration,h(o);return}if(/^data:[^;]+;base64,/.test(i)){for(var c=atob(i.split(",")[1]),g=new Uint8Array(c.length),y=0;y<c.length;++y)g[y]=c.charCodeAt(y);p(g.buffer,o)}else{var b=new XMLHttpRequest;b.open(o._xhr.method,i,!0),b.withCredentials=o._xhr.withCredentials,b.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(d){b.setRequestHeader(d,o._xhr.headers[d])}),b.onload=function(){var d=(b.status+"")[0];if(d!=="0"&&d!=="2"&&d!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+b.status+".");return}p(b.response,o)},b.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete l[i],o.load())},f(b)}},f=function(o){try{o.send()}catch{o.onerror()}},p=function(o,i){var c=function(){i._emit("loaderror",null,"Decoding audio data failed.")},g=function(y){y&&i._sounds.length>0?(l[i._src]=y,h(i,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(o).then(g).catch(c):n.ctx.decodeAudioData(o,g,c)},h=function(o,i){i&&!o._duration&&(o._duration=i.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),i=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=i?parseInt(i[1],10):null;if(o&&c&&c<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof gn<"u"?(gn.HowlerGlobal=t,gn.Howler=n,gn.Howl=r,gn.Sound=a):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=a)})();/*!
*  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
*  
*  howler.js v2.2.4
*  howlerjs.com
*
*  (c) 2013-2020, James Simpson of GoldFire Studios
*  goldfirestudios.com
*
*  MIT License
*/(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var a=r._howls.length-1;a>=0;a--)r._howls[a].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(r=typeof r!="number"?l._pos[1]:r,a=typeof a!="number"?l._pos[2]:a,typeof n=="number")l._pos=[n,r,a],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,r,a,l,s,f){var p=this;if(!p.ctx||!p.ctx.listener)return p;var h=p._orientation;if(r=typeof r!="number"?h[1]:r,a=typeof a!="number"?h[2]:a,l=typeof l!="number"?h[3]:l,s=typeof s!="number"?h[4]:s,f=typeof f!="number"?h[5]:f,typeof n=="number")p._orientation=[n,r,a,l,s,f],typeof p.ctx.listener.forwardX<"u"?(p.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),p.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),p.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),p.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),p.ctx.listener.upY.setTargetAtTime(s,Howler.ctx.currentTime,.1),p.ctx.listener.upZ.setTargetAtTime(f,Howler.ctx.currentTime,.1)):p.ctx.listener.setOrientation(n,r,a,l,s,f);else return h;return p},Howl.prototype.init=function(n){return function(r){var a=this;return a._orientation=r.orientation||[1,0,0],a._stereo=r.stereo||null,a._pos=r.pos||null,a._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},a._onstereo=r.onstereo?[{fn:r.onstereo}]:[],a._onpos=r.onpos?[{fn:r.onpos}]:[],a._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(n,r)}}),a;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")a._stereo=n,a._pos=[n,0,0];else return a._stereo;for(var s=a._getSoundIds(r),f=0;f<s.length;f++){var p=a._soundById(s[f]);if(p)if(typeof n=="number")p._stereo=n,p._pos=[n,0,0],p._node&&(p._pannerAttr.panningModel="equalpower",(!p._panner||!p._panner.pan)&&t(p,l),l==="spatial"?typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):p._panner.setPosition(n,0,0):p._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),a._emit("stereo",p._id);else return p._stereo}return a},Howl.prototype.pos=function(n,r,a,l){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"pos",action:function(){s.pos(n,r,a,l)}}),s;if(r=typeof r!="number"?0:r,a=typeof a!="number"?-.5:a,typeof l>"u")if(typeof n=="number")s._pos=[n,r,a];else return s._pos;for(var f=s._getSoundIds(l),p=0;p<f.length;p++){var h=s._soundById(f[p]);if(h)if(typeof n=="number")h._pos=[n,r,a],h._node&&((!h._panner||h._panner.pan)&&t(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):h._panner.setPosition(n,r,a)),s._emit("pos",h._id);else return h._pos}return s},Howl.prototype.orientation=function(n,r,a,l){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"orientation",action:function(){s.orientation(n,r,a,l)}}),s;if(r=typeof r!="number"?s._orientation[1]:r,a=typeof a!="number"?s._orientation[2]:a,typeof l>"u")if(typeof n=="number")s._orientation=[n,r,a];else return s._orientation;for(var f=s._getSoundIds(l),p=0;p<f.length;p++){var h=s._soundById(f[p]);if(h)if(typeof n=="number")h._orientation=[n,r,a],h._node&&(h._panner||(h._pos||(h._pos=s._pos||[0,0,-.5]),t(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):h._panner.setOrientation(n,r,a)),s._emit("orientation",h._id);else return h._orientation}return s},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,a,l,s;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")a=r[0],typeof l>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),n._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:n._panningModel});else return s=n._soundById(parseInt(r[0],10)),s?s._pannerAttr:n._pannerAttr;else r.length===2&&(a=r[0],l=parseInt(r[1],10));for(var f=n._getSoundIds(l),p=0;p<f.length;p++)if(s=n._soundById(f[p]),s){var h=s._pannerAttr;h={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:h.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:h.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:h.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:h.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:h.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:h.panningModel};var x=s._panner;x||(s._pos||(s._pos=n._pos||[0,0,-.5]),t(s,"spatial"),x=s._panner),x.coneInnerAngle=h.coneInnerAngle,x.coneOuterAngle=h.coneOuterAngle,x.coneOuterGain=h.coneOuterGain,x.distanceModel=h.distanceModel,x.maxDistance=h.maxDistance,x.refDistance=h.refDistance,x.rolloffFactor=h.rolloffFactor,x.panningModel=h.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,a=r._parent;r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,n.call(this),r._stereo?a.stereo(r._stereo):r._pos&&a.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,a=r._parent;return r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,r._stereo?a.stereo(r._stereo):r._pos?a.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,a._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Fr);const nl={"bgm-menu":{volume:.5,loop:!0},"bgm-game":{volume:.4,loop:!0},"bgm-victory":{volume:.6,loop:!1},"bgm-defeat":{volume:.5,loop:!1},"sfx-play-card":{volume:.7,loop:!1},"sfx-challenge":{volume:.8,loop:!1},"sfx-geass-activate":{volume:.9,loop:!1},"sfx-geass-hit":{volume:1,loop:!1},"sfx-geass-miss":{volume:.6,loop:!1},"sfx-button-click":{volume:.5,loop:!1},"sfx-card-shuffle":{volume:.6,loop:!1},"sfx-win":{volume:.8,loop:!1},"sfx-lose":{volume:.7,loop:!1},"sfx-character-select":{volume:.6,loop:!1},"sfx-turn-start":{volume:.5,loop:!1},"sfx-funny-dance":{volume:.8,loop:!1},"sfx-funny-monkey":{volume:.8,loop:!1},"sfx-funny-pizza":{volume:.7,loop:!1},"sfx-funny-laugh":{volume:.9,loop:!1},"sfx-funny-chicken":{volume:.8,loop:!1},"sfx-funny-chunibyo":{volume:.8,loop:!1},"sfx-funny-butterfly":{volume:.6,loop:!1}},ap={"bgm-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","bgm-game":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","bgm-victory":"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3","bgm-defeat":"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","sfx-play-card":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","sfx-challenge":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","sfx-geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","sfx-geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","sfx-geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","sfx-button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","sfx-card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","sfx-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","sfx-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","sfx-character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","sfx-turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","sfx-funny-dance":"https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3","sfx-funny-monkey":"https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3","sfx-funny-pizza":"https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3","sfx-funny-laugh":"https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3","sfx-funny-chicken":"https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3","sfx-funny-chunibyo":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3","sfx-funny-butterfly":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3"};class lp{constructor(){Q(this,"sounds",new Map),Q(this,"currentBGM",null),Q(this,"enabled",!0),Q(this,"masterVolume",1),Q(this,"bgmVolume",.5),Q(this,"sfxVolume",.7),this.init()}init(){Object.entries(ap).forEach(([t,n])=>{const r=t,a=nl[r];try{const l=new Fr.Howl({src:[n],volume:a.volume*this.getVolumeMultiplier(r),loop:a.loop,html5:!0,preload:r.startsWith("bgm-"),onloaderror:(s,f)=>{console.warn(`Failed to load sound: ${r}`,f)}});this.sounds.set(r,l)}catch(l){console.warn(`Error creating sound: ${r}`,l)}})}getVolumeMultiplier(t){return t.startsWith("bgm-")?this.bgmVolume:this.sfxVolume}play(t){if(!this.enabled)return;const n=this.sounds.get(t);n&&(t.startsWith("bgm-")&&(this.stopBGM(),this.currentBGM=t),n.play())}stop(t){const n=this.sounds.get(t);n&&n.stop()}stopBGM(){this.currentBGM&&(this.stop(this.currentBGM),this.currentBGM=null)}pauseBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.play()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),Fr.Howler.volume(this.masterVolume)}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")&&n.volume(nl[r].volume*this.bgmVolume)})}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")||n.volume(nl[r].volume*this.sfxVolume)})}setEnabled(t){this.enabled=t,t||this.stopAll()}stopAll(){Fr.Howler.stop(),this.currentBGM=null}playFunnyAction(t){const n=["sfx-funny-dance","sfx-funny-monkey","sfx-funny-pizza","sfx-funny-laugh","sfx-funny-chicken","sfx-funny-chunibyo","sfx-funny-butterfly"],r=n[t%n.length];r&&this.play(r)}preload(){return new Promise(t=>{let n=0;const r=this.sounds.size;if(r===0){t();return}this.sounds.forEach(a=>{a.state()==="loaded"?(n++,n>=r&&t()):(a.once("load",()=>{n++,n>=r&&t()}),a.once("loaderror",()=>{n++,n>=r&&t()}))}),setTimeout(()=>t(),5e3)})}getStatus(){return{enabled:this.enabled,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume,currentBGM:this.currentBGM}}}const Ca=new lp,ue=e=>Ca.play(e),Sn=e=>Ca.play(e),op=()=>Ca.stopBGM();class ip{constructor(){Q(this,"name","Easy"),Q(this,"description","随机出牌，随机质疑，适合新手"),Q(this,"memory",new Map)}makeDecision(t,n){if(Math.random()<.3)return{action:"challenge",confidence:Math.random(),reasoning:"随机质疑",animationState:"challenging"};const r=t.aiPlayer;if(r.hand.length>0){const a=r.hand[Math.floor(Math.random()*r.hand.length)],l=["citizen","king","slave"],s=l[Math.floor(Math.random()*l.length)];return{action:"play",card:a,claimedCard:s,confidence:.5,reasoning:"随机出牌",animationState:"playing",isBluff:a.type!==s}}return{action:"pass",confidence:.5,reasoning:"无牌可出",animationState:"playing"}}calculateChallengeProbability(){return .3}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[Math.floor(Math.random()*n.length)];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(t){return{bluffFrequency:.5,challengeThreshold:.7,riskTolerance:.5,patience:.5,adaptability:.3}}}class rs{constructor(){Q(this,"name","Normal"),Q(this,"description","基础算牌，合理质疑，有策略性"),Q(this,"memory",{})}makeDecision(t,n){const r=t.aiPlayer.hand;if(r.length===0)return{action:"pass",confidence:0,reasoning:"无牌可出",animationState:"playing"};if(Math.random()<.3)return{action:"challenge",confidence:.6,reasoning:"根据局势质疑",animationState:"challenging"};const a=r[0];return{action:"play",card:a,claimedCard:a.type,confidence:.7,reasoning:"正常出牌",animationState:"playing",isBluff:!1}}calculateChallengeProbability(){return .4}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[0];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(){return{bluffFrequency:.4,challengeThreshold:.6,riskTolerance:.6,patience:.6,adaptability:.5}}}class sp{constructor(){Q(this,"name","Hard"),Q(this,"description","高级策略，读心术，心理博弈大师"),Q(this,"memory",{})}makeDecision(t,n){const r=t.aiPlayer.hand;if(r.length===0)return{action:"pass",confidence:0,reasoning:"无牌可出",animationState:"playing"};if(Math.random()<.5)return{action:"challenge",confidence:.8,reasoning:"精准读心",animationState:"challenging"};const a=r[Math.floor(Math.random()*r.length)],l=["citizen","king","slave"],s=l[Math.floor(Math.random()*l.length)];return{action:"play",card:a,claimedCard:s,confidence:.9,reasoning:"策略性出牌",animationState:"playing",isBluff:a.type!==s}}calculateChallengeProbability(){return .5}selectCard(t){const n=t.aiPlayer.hand;if(n.length===0)return null;const r=n[Math.floor(Math.random()*n.length)];return{card:r,claimedType:r.type}}updateMemory(){}getPersonalityTraits(){return{bluffFrequency:.6,challengeThreshold:.5,riskTolerance:.7,patience:.7,adaptability:.8}}}class up{constructor(t="normal",n="balanced"){Q(this,"strategy"),Q(this,"config"),Q(this,"thoughtCallback"),Q(this,"currentState","idle"),Q(this,"decisionInProgress",!1),this.config=this.createDefaultConfig(t,n),this.strategy=this.createStrategy(t)}setThoughtCallback(t){this.thoughtCallback=t}updateConfig(t){this.config={...this.config,...t},t.difficulty&&t.difficulty!==this.config.difficulty&&(this.strategy=this.createStrategy(t.difficulty))}getConfig(){return{...this.config}}async makeDecision(t){if(this.decisionInProgress)throw new Error("AI决策正在进行中");this.decisionInProgress=!0;try{await this.playThinkingAnimation(),await this.playDecidingAnimation();const n=this.strategy.makeDecision(t,this.config);return await this.playActionAnimation(n),n}finally{this.decisionInProgress=!1,this.setAnimationState("idle")}}makeDecisionInstant(t){return this.strategy.makeDecision(t,this.config)}getCurrentThought(){return{state:this.currentState,progress:this.getProgressForState(this.currentState),message:this.getMessageForState(this.currentState),emotion:this.getEmotionForState(this.currentState)}}getStrategyName(){return this.strategy.name}getStrategyDescription(){return this.strategy.description}updateMemory(t){this.strategy.updateMemory(t)}getPersonalityTraits(){return this.strategy.getPersonalityTraits(this.config.personality)}createStrategy(t){switch(t){case"easy":return new ip;case"normal":return new rs;case"hard":return new sp;default:return new rs}}createDefaultConfig(t,n){return{difficulty:t,personality:n,reactionDelay:{easy:800,normal:1200,hard:1500}[t],enableAnimation:!0}}async playThinkingAnimation(){this.setAnimationState("thinking");const t=["分析局势中...","计算概率...","观察对手...","评估风险..."],n=4,r=this.config.reactionDelay/n;for(let a=0;a<n;a++)this.notifyThought({state:"thinking",progress:a/n*100,message:t[a%t.length],emotion:"calm"}),await this.delay(r)}async playDecidingAnimation(){this.setAnimationState("deciding"),this.notifyThought({state:"deciding",progress:75,message:"做出决策...",emotion:"confident"}),await this.delay(this.config.reactionDelay*.3)}async playActionAnimation(t){const n=t.action==="challenge"?"challenging":"playing";this.setAnimationState(n);const r={play:t.isBluff?"打出卡牌（虚张声势）":"打出卡牌",challenge:"质疑！",pass:"选择观望"};this.notifyThought({state:n,progress:100,message:r[t.action]||"执行动作",emotion:t.confidence>.7?"confident":"uncertain"}),await this.delay(300)}setAnimationState(t){this.currentState=t}notifyThought(t){this.thoughtCallback&&this.thoughtCallback(t)}getProgressForState(t){return{idle:0,thinking:25,deciding:75,playing:90,challenging:90,reacting:100}[t]||0}getMessageForState(t){return{idle:"等待中...",thinking:"思考中...",deciding:"决策中...",playing:"出牌中...",challenging:"质疑中...",reacting:"反应中..."}[t]}getEmotionForState(t){switch(t){case"thinking":return"calm";case"deciding":return"confident";case"challenging":return"confident";case"playing":return"calm";default:return"calm"}}delay(t){return new Promise(n=>setTimeout(n,t))}}class cp{constructor(){Q(this,"HIT_CHANCE",1/3),Q(this,"MAX_HP",3),Q(this,"funnyActions",["😵 突然跳起了奇怪的舞蹈","🙈 开始模仿猴子叫",'🤪 不停地说"披萨"',"😂 无法控制地大笑30秒","🐔 学鸡打鸣","🎭 开始背诵中二台词","🍕 声称自己是披萨的化身","🦋 追逐不存在的蝴蝶"])}createPlayerStats(){return{hp:this.MAX_HP,maxHp:this.MAX_HP,geassSuccessCount:0,geassFailCount:0}}shouldActivateGeass(t){return!0}executeGeass(t,n){if(Math.random()<this.HIT_CHANCE){const r=this.getRandomFunnyAction(),a=this.applyDamage(this.createPlayerStats(),1);return{activated:!0,hit:!0,message:"Geass命中！",damage:1,funnyAction:r,newStats:a}}else return{activated:!0,hit:!1,message:"Geass未命中！",damage:0}}performGeass(t){return this.executeGeass("player",t)}getRandomFunnyAction(){return this.funnyActions[Math.floor(Math.random()*this.funnyActions.length)]}applyDamage(t,n){return{...t,hp:Math.max(0,t.hp-n)}}isDefeated(t){return t.hp<=0}recordGeassSuccess(t){return{...t,geassSuccessCount:t.geassSuccessCount+1}}recordGeassFail(t){return{...t,geassFailCount:t.geassFailCount+1}}getHitChanceDescription(){return`${(this.HIT_CHANCE*100).toFixed(1)}%`}}const as=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],dp=()=>{const[e,t]=O.useState("main-menu"),[n,r]=O.useState(null),[a,l]=O.useState("normal"),s=O.useRef(null),f=O.useRef(null),[p,h]=O.useState({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),[x,o]=O.useState(null),[i,c]=O.useState([]);O.useEffect(()=>(Ca.preload().then(()=>{console.log("音效预加载完成")}),Sn("bgm-menu"),()=>{op()}),[]);const g=O.useCallback(R=>{c(I=>[...I.slice(-9),R])},[]),y=O.useCallback(()=>{ue("sfx-button-click"),t("character-select")},[]),b=O.useCallback(()=>{ue("sfx-button-click"),t("settings")},[]),d=O.useCallback(()=>{ue("sfx-button-click"),t("help")},[]),m=O.useCallback(R=>{ue("sfx-character-select"),r(R)},[]),v=O.useCallback(()=>{if(n){ue("sfx-button-click"),s.current=new up(a,"balanced"),f.current=new cp;const R=tp(),{playerHand:I,opponentHand:$}=rp(R);h({selectedCharacter:n,playerHand:I,opponentHand:$,tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"游戏开始！",gamePhase:"playing"}),c(["游戏开始！请选择要出的牌。"]),t("game-table"),Sn("bgm-game")}},[n,a]),_=O.useCallback(()=>{ue("sfx-button-click"),t("main-menu"),r(null)},[]),w=O.useCallback(R=>{p.currentTurn==="player"&&(ue("sfx-play-card"),h(I=>{const $=I.playerHand.find(He=>He.id===R);return $?{...I,playerHand:I.playerHand.filter(He=>He.id!==R),tableCards:[...I.tableCards,$],currentTurn:"opponent",lastAction:`你出了 ${$.rank}${fp($.suit)}`}:I}),g("你出了一张牌"),setTimeout(()=>{S()},1e3))},[p.currentTurn]),S=O.useCallback(()=>{if(s.current){if(ue("sfx-turn-start"),Math.random()>.7&&p.tableCards.length>0)E();else if(p.opponentHand.length>0){const R=p.opponentHand[Math.floor(Math.random()*p.opponentHand.length)];h(I=>({...I,opponentHand:I.opponentHand.filter($=>$.id!==R.id),tableCards:[...I.tableCards,R],currentTurn:"player",lastAction:"对手出了一张牌"})),g("对手出了一张牌"),ue("sfx-play-card")}}},[p.opponentHand,p.tableCards]),C=O.useCallback(()=>{ue("sfx-button-click"),g("你选择跳过"),h(R=>({...R,currentTurn:"opponent",lastAction:"你选择了跳过"})),setTimeout(()=>{S()},1e3)},[]),E=O.useCallback(()=>{if(ue("sfx-challenge"),g("你发起了质疑！"),f.current){const R=f.current.executeGeass("player","ai");setTimeout(()=>{if(R.hit){ue("sfx-geass-hit");const I=as[Math.floor(Math.random()*as.length)];o(I),ue(I.soundType),h($=>{const He=$.opponentHP-1;return He<=0&&setTimeout(()=>{Sn("bgm-victory"),t("result")},2e3),{...$,opponentHP:He,playerScore:$.playerScore+1,lastAction:`Geass命中！${I.emoji} ${I.description}`}}),g(`Geass命中！${R.funnyAction||""}`)}else ue("sfx-geass-miss"),h(I=>({...I,lastAction:"Geass未命中！"})),g("Geass未命中！")},1e3)}},[]),T=O.useCallback(()=>{ue("sfx-button-click"),t("character-select"),r(null),h({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),c([]),o(null),Sn("bgm-menu")},[]),P=O.useCallback(()=>{ue("sfx-button-click"),t("main-menu"),r(null),h({selectedCharacter:null,playerHand:[],opponentHand:[],tableCards:[],currentRound:1,maxRounds:5,playerScore:0,opponentScore:0,playerHP:3,opponentHP:3,maxHP:3,currentTurn:"player",lastAction:"",gamePhase:"setup"}),c([]),o(null),Sn("bgm-menu")},[]),oe=()=>{switch(e){case"main-menu":return u.jsx(es,{onStart:y,onSettings:b,onHelp:d});case"character-select":return u.jsx(Kf,{characters:Xl,selectedId:n,onSelect:m,onConfirm:v,onBack:_});case"game-table":return u.jsx(Zf,{gameState:p,onPlayCard:w,onPass:C,onChallenge:E,gameLog:i,funnyAction:x});case"result":return u.jsx(Jf,{isWin:p.playerScore>p.opponentScore,playerScore:p.playerScore,opponentScore:p.opponentScore,onRestart:T,onMainMenu:P});case"settings":return u.jsxs("div",{className:"cg-placeholder-screen",children:[u.jsx("h2",{children:"设置"}),u.jsxs("div",{className:"cg-settings-content",children:[u.jsxs("div",{className:"cg-setting-item",children:[u.jsx("label",{children:"难度选择"}),u.jsxs("select",{value:a,onChange:R=>l(R.target.value),className:"cg-setting-select",children:[u.jsx("option",{value:"easy",children:"简单"}),u.jsx("option",{value:"normal",children:"普通"}),u.jsx("option",{value:"hard",children:"困难"})]})]}),u.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});case"help":return u.jsxs("div",{className:"cg-placeholder-screen",children:[u.jsx("h2",{children:"游戏帮助"}),u.jsxs("div",{className:"cg-help-content",children:[u.jsxs("section",{className:"cg-help-section",children:[u.jsx("h3",{children:"游戏规则"}),u.jsxs("ul",{children:[u.jsx("li",{children:"每人初始5张牌，轮流出牌"}),u.jsx("li",{children:"可以质疑对手的出牌"}),u.jsx("li",{children:"质疑成功将触发Geass判定"}),u.jsx("li",{children:"Geass有1/3概率命中，造成1点伤害"}),u.jsx("li",{children:"HP归零则游戏结束"})]})]}),u.jsxs("section",{className:"cg-help-section",children:[u.jsx("h3",{children:"角色技能"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"鲁鲁修"}),": 绝对命令 - 可强制改变骗子牌"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"C.C."}),": 不老不死 - 50%概率免疫Geass"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"朱雀"}),": 生存本能 - HP≤1时Geass抗性提升"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"卡莲"}),": 红莲突击 - 可一次出多张牌"]})]})]}),u.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});default:return u.jsx(es,{onStart:y,onSettings:b,onHelp:d})}};return u.jsxs("div",{className:"cg-app",children:[oe(),u.jsx("style",{children:`
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
      `})]})};function fp(e){return{spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦"}[e]||e}const pp=rl.createRoot(document.getElementById("root"));pp.render(u.jsx(Dt.StrictMode,{children:u.jsx(dp,{})}));
//# sourceMappingURL=index-0jwJl_WQ.js.map
